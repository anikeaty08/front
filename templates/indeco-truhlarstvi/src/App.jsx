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
serif: ['Cormorant Garamond', 'serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
950: '#0c0a09',
},
wood: {
100: '#F5E6D3',
200: '#E6D0B3',
300: '#D4B48C',
400: '#C19A6B',
500: '#A07855',
600: '#8B5A2B',
700: '#654321',
800: '#4A3728',
900: '#3E2B1F',
}
},
animation: {
'slow-zoom': 'zoom 20s infinite alternate',
'fade-in-up': 'fadeInUp 1s ease-out forwards',
},
keyframes: {
zoom: {
'0%': { transform: 'scale(1)' },
'100%': { transform: 'scale(1.1)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Gallery Expansion Logic
        const galleryToggleBtn = document.getElementById('gallery-toggle');
        const hiddenGallery = document.getElementById('hidden-gallery');
        const galleryText = document.getElementById('gallery-text');
        const galleryIcon = document.getElementById('gallery-icon');
        let isExpanded = false;

        galleryToggleBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            
            if (isExpanded) {
                hiddenGallery.classList.add('expanded');
                galleryText.textContent = "Skrýt galerii";
                galleryIcon.parentElement.classList.add('rotate-45');
                // Smooth scroll slightly to show new items
                setTimeout(() => {
                    hiddenGallery.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            } else {
                hiddenGallery.classList.remove('expanded');
                galleryText.textContent = "Zobrazit více realizací";
                galleryIcon.parentElement.classList.remove('rotate-45');
                // Scroll back up to main gallery
                document.getElementById('galerie').scrollIntoView({ behavior: 'smooth' });
            }
        });

        // Intersection Observer for Scroll Reveals
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg', 'bg-stone-50/95');
            } else {
                navbar.classList.remove('shadow-lg', 'bg-stone-50/95');
            }
        });
    
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
      

<div className="bg-noise"></div>

<nav className="fixed top-0 w-full z-40 transition-all duration-300 bg-stone-50/90 backdrop-blur-md border-b border-stone-200" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 md:h-24 flex items-center justify-between">
<a className="group flex items-center gap-3" href="#">
<div className="w-10 h-10 border border-wood-600 rounded-sm flex items-center justify-center bg-wood-100 group-hover:bg-wood-600 transition-colors duration-500">
<span className="font-serif text-xl font-bold text-wood-900 group-hover:text-white transition-colors">I</span>
</div>
<div className="flex flex-col">
<span className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-wood-900 uppercase">Indeco CZ</span>
<span className="text-[0.6rem] tracking-[0.2em] uppercase text-stone-500 group-hover:text-wood-600 transition-colors">Nábytek na míru</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 lg:gap-12">
<a className="text-xs uppercase tracking-widest font-medium text-stone-600 hover:text-wood-700 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-wood-600 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300" href="#pribeh">Náš příběh</a>
<a className="text-xs uppercase tracking-widest font-medium text-stone-600 hover:text-wood-700 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-wood-600 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300" href="#sluzby">Realizace</a>
<a className="text-xs uppercase tracking-widest font-medium text-stone-600 hover:text-wood-700 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-wood-600 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300" href="#galerie">Galerie</a>
<a className="px-6 py-2.5 bg-wood-900 text-stone-100 text-xs uppercase tracking-widest hover:bg-wood-700 transition-all duration-300 shadow-lg shadow-wood-900/10 hover:shadow-wood-900/20 rounded-sm" href="#kontakt">
                    Poptat výrobu
                </a>
</div>

<button className="md:hidden text-wood-900">
<span className="iconify" data-icon="lucide:menu" data-width="28"></span>
</button>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0 bg-stone-900">
<img alt="Interiér s vestavěným nábytkem" className="w-full h-full object-cover opacity-60 animate-slow-zoom" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
<div className="overflow-hidden mb-6">
<span className="inline-block text-wood-200 text-xs md:text-sm uppercase tracking-[0.3em] font-medium border border-wood-200/30 px-4 py-1.5 rounded-full backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                    Jindřichův Hradec • Od roku 1996
                </span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-50 leading-[0.95] tracking-tight mb-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                Prostor, který <br/>
<span className="italic font-light text-wood-200">má smysl.</span>
</h1>
<p className="text-stone-200 font-light text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                Návrh a výroba vestavěných skříní, kuchyní a interiérů, kde se snoubí estetika s každodenní funkcí.
            </p>
<div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
<a className="group relative px-8 py-4 bg-wood-100 text-wood-900 overflow-hidden rounded-sm transition-all hover:scale-[1.02]" href="#kontakt">
<div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-30"></div>
<span className="relative text-sm uppercase tracking-widest font-semibold">Nezávazná poptávka</span>
</a>
<a className="group flex items-center justify-center gap-2 px-8 py-4 border border-stone-400/50 text-stone-100 rounded-sm hover:bg-stone-100/10 transition-all backdrop-blur-sm" href="#sluzby">
<span className="text-sm uppercase tracking-widest font-medium">Naše služby</span>
<span className="iconify group-hover:translate-y-1 transition-transform" data-icon="lucide:arrow-down" data-width="16"></span>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
<span className="text-[10px] uppercase tracking-widest text-white/70">Scroll</span>
<div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
</header>

<section className="py-24 md:py-32 relative bg-stone-50" id="pribeh">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative reveal">
<div className="absolute -top-4 -left-4 w-2/3 h-2/3 border border-wood-300 z-0"></div>
<div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-wood-100 z-0"></div>
<img alt="Detailní truhlářská práce" className="relative z-10 w-full aspect-[4/5] object-cover grayscale-[10%] sepia-[10%] shadow-2xl shadow-stone-900/10" src="https://images.unsplash.com/photo-1603789766884-aef036cd3b5a?w=1600&amp;q=80"/>
<div className="absolute bottom-8 left-0 lg:-left-8 z-20 bg-stone-900 text-stone-50 p-6 md:p-8 max-w-xs shadow-xl">
<span className="iconify text-wood-400 mb-4" data-icon="lucide:quote" data-width="32"></span>
<p className="font-serif text-xl italic leading-relaxed">
                            "Kvalitní nábytek není jen o dřevě. Je o lidech, kteří ho tvoří, a o domovech, ve kterých žije."
                        </p>
</div>
</div>

<div className="reveal">
<span className="text-wood-600 text-xs font-bold tracking-[0.2em] uppercase block mb-4">O společnosti INDECO CZ</span>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8 leading-tight tracking-tight">
                        Společnost s ručením omezeným a neomezenou vášní pro detail.
                    </h2>
<div className="prose prose-stone prose-lg text-stone-600 font-light">
<p className="mb-6">
                            Jsme česká firma se sídlem v Jindřichově Hradci, která se specializuje na zakázkovou výrobu nábytku. Jako INDECO CZ, s.r.o. stojíme za stovkami realizací, které proměnily běžné interiéry v domovy s charakterem.
                        </p>
<p className="mb-8">
                            Nehledáme zkratky. Každá vestavěná skříň, každá kuchyňská linka i ten nejmenší kus nábytku prochází rukama našich zkušených truhlářů. Spojujeme tradiční řemeslné postupy s moderními technologiemi, abychom zajistili přesnost na milimetr a design, který se neokouká.
                        </p>
</div>
<div className="flex flex-col gap-6 mt-8 border-t border-stone-200 pt-8">
<div className="flex items-start gap-4">
<div className="p-3 bg-wood-100 rounded-full text-wood-800 shrink-0">
<span className="iconify" data-icon="lucide:ruler-combined" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h4 className="font-serif text-xl text-stone-900 mb-1">Kompletní realizace</h4>
<p className="text-sm text-stone-500">Od prvotního zaměření u vás doma, přes 3D návrh, až po precizní montáž a úklid.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-wood-100 rounded-full text-wood-800 shrink-0">
<span className="iconify" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h4 className="font-serif text-xl text-stone-900 mb-1">Spolehlivost a záruka</h4>
<p className="text-sm text-stone-500">Jsme stabilní firma (IČ: 63671298). Garantujeme termíny, ceny a dlouholetou životnost.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100 relative overflow-hidden" id="sluzby">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wood-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<span className="text-wood-600 text-xs font-bold tracking-[0.2em] uppercase block mb-3">Naše služby</span>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight">Co pro vás vyrobíme?</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-stone-50 p-8 md:p-10 hover:-translate-y-2 transition-transform duration-500 border border-stone-200 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 rounded-sm reveal">
<div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-stone-900 text-wood-100 rounded-sm group-hover:bg-wood-600 transition-colors duration-300">
<span className="iconify" data-icon="lucide:door-closed" data-strokeWidth="1.5" data-width="28"></span>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-4 group-hover:text-wood-700 transition-colors">Vestavěné skříně</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-6 font-light">
                        Maximalizujte svůj úložný prostor s elegancí. Navrhujeme řešení do ložnic, chodeb i podkroví. Široký výběr dekorů, posuvné systémy s tichým chodem a vnitřní uspořádání přesně podle vašich potřeb.
                    </p>
<ul className="space-y-2 mb-6 border-t border-stone-100 pt-4">
<li className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-wide">
<span className="w-1.5 h-1.5 bg-wood-400 rounded-full"></span> Na míru do mm
                        </li>
<li className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-wide">
<span className="w-1.5 h-1.5 bg-wood-400 rounded-full"></span> Kvalitní kování
                        </li>
</ul>
</div>

<div className="group bg-stone-50 p-8 md:p-10 hover:-translate-y-2 transition-transform duration-500 border border-stone-200 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 rounded-sm reveal" style={{transitionDelay: '100ms'}}>
<div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-stone-900 text-wood-100 rounded-sm group-hover:bg-wood-600 transition-colors duration-300">
<span className="iconify" data-icon="lucide:chef-hat" data-strokeWidth="1.5" data-width="28"></span>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-4 group-hover:text-wood-700 transition-colors">Kuchyně na míru</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-6 font-light">
                        Srdce domova, které funguje. Vytváříme kuchyně, kde je radost vařit. Od moderního minimalismu po rustikální styl. Důraz klademe na ergonomii, odolné pracovní desky a chytré úložné systémy.
                    </p>
<ul className="space-y-2 mb-6 border-t border-stone-100 pt-4">
<li className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-wide">
<span className="w-1.5 h-1.5 bg-wood-400 rounded-full"></span> 3D vizualizace
                        </li>
<li className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-wide">
<span className="w-1.5 h-1.5 bg-wood-400 rounded-full"></span> Včetně spotřebičů
                        </li>
</ul>
</div>

<div className="group bg-stone-50 p-8 md:p-10 hover:-translate-y-2 transition-transform duration-500 border border-stone-200 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 rounded-sm reveal" style={{transitionDelay: '200ms'}}>
<div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-stone-900 text-wood-100 rounded-sm group-hover:bg-wood-600 transition-colors duration-300">
<span className="iconify" data-icon="lucide:armchair" data-strokeWidth="1.5" data-width="28"></span>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-4 group-hover:text-wood-700 transition-colors">Interiérový nábytek</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-6 font-light">
                        Kompletní vybavení obývacích pokojů, ložnic, dětských pokojů či kanceláří. Knihovny, komody, stoly a postele z masivu i lamina. Sladíme váš interiér do posledního detailu.
                    </p>
<ul className="space-y-2 mb-6 border-t border-stone-100 pt-4">
<li className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-wide">
<span className="w-1.5 h-1.5 bg-wood-400 rounded-full"></span> Atypická řešení
                        </li>
<li className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-wide">
<span className="w-1.5 h-1.5 bg-wood-400 rounded-full"></span> Široká paleta materiálů
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="galerie">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal">
<div>
<span className="text-wood-600 text-xs font-bold tracking-[0.2em] uppercase block mb-3">Galerie realizací</span>
<h2 className="font-serif text-4xl text-stone-900 tracking-tight">Detaily, které tvoří celek</h2>
</div>
<p className="text-stone-500 font-light text-sm max-w-sm text-right md:text-left">
                    Prohlédněte si výběr z našich nedávných projektů v Jindřichově Hradci a okolí.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 reveal">

<div className="group relative overflow-hidden h-80 cursor-zoom-in">
<img alt="Kuchyně realizace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1632583824020-937ae9564495?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<p className="text-white font-serif text-lg">Moderní kuchyně</p>
</div>
</div>

<div className="group relative overflow-hidden h-80 cursor-zoom-in lg:col-span-2">
<img alt="Vestavěná skříň detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6f817fe5-0000-4538-bc94-ab6fc384788a_1600w.jpg"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<p className="text-white font-serif text-lg">Vestavěná šatna</p>
</div>
</div>

<div className="group relative overflow-hidden h-80 cursor-zoom-in">
<img alt="Obývací stěna" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<p className="text-white font-serif text-lg">Obývací stěna</p>
</div>
</div>

<div className="group relative overflow-hidden h-80 cursor-zoom-in">
<img alt="Ložnice" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1758977403403-c51ef509e788?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<p className="text-white font-serif text-lg">Ložnice na míru</p>
</div>
</div>

<div className="group relative overflow-hidden h-80 cursor-zoom-in">
<img alt="Dětský pokoj" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1764080582673-33a19f8788f2?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<p className="text-white font-serif text-lg">Interiér dětského pokoje</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4" id="hidden-gallery">

<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800"/></div>
<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/></div>
<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800"/></div>
<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800"/></div>

<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800"/></div>
<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1486946255434-2466348c2166?w=800"/></div>
<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800"/></div>
<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div>
<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800"/></div>
<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"/></div>
<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800"/></div>
<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/></div>
<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"/></div>
<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/></div>
<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800"/></div>
<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800"/></div>
<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800"/></div>
<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800"/></div>
<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800"/></div>
<div className="h-64 bg-stone-100 overflow-hidden relative group"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=800"/></div>
</div>

<div className="text-center mt-12">
<button className="inline-flex flex-col items-center gap-2 group outline-none" id="gallery-toggle">
<span className="text-xs font-bold uppercase tracking-[0.2em] text-wood-700 group-hover:text-wood-900 transition-colors" id="gallery-text">Zobrazit více realizací</span>
<div className="w-12 h-12 rounded-full border border-wood-200 flex items-center justify-center group-hover:bg-wood-50 transition-all duration-300">
<span className="iconify text-wood-600 transition-transform duration-300" data-icon="lucide:plus" data-width="20" id="gallery-icon"></span>
</div>
</button>
</div>
</div>
</section>

<section className="py-24 bg-stone-100">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 text-center mb-16 reveal">Co o nás říkají zákazníci</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-wood-400 reveal">
<div className="flex gap-1 text-wood-500 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6 italic">
                        "Nechal jsem si u firmy Indeco udělat vestavěnou skříň do podkroví. Zaměření proběhlo rychle, montážníci byli velmi slušní a po sobě uklidili. Skříň sedí naprosto přesně. Doporučuji."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold text-xs">MK</div>
<span className="text-stone-900 font-medium text-sm">Martin Kovář</span>
</div>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-wood-400 reveal" style={{transitionDelay: '100ms'}}>
<div className="flex gap-1 text-wood-500 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6 italic">
                        "Profesionální přístup a férové jednání. Kuchyňská linka vypadá i po dvou letech jako nová. Oceňuji hlavně návrh, kde mi pan truhlář poradil praktické věci, které by mě nenapadly."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold text-xs">JN</div>
<span className="text-stone-900 font-medium text-sm">Jana Novotná</span>
</div>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-wood-400 reveal" style={{transitionDelay: '200ms'}}>
<div className="flex gap-1 text-wood-500 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6 italic">
                        "Spolehlivá firma z Jindřichova Hradce. Dodrželi termín i cenu. Kvalita zpracování je na úplně jiné úrovni než z hobby marketu. Děkujeme za krásný dětský pokoj."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold text-xs">PP</div>
<span className="text-stone-900 font-medium text-sm">Petr Procházka</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-100 relative" id="kontakt">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

<div className="reveal">
<span className="text-wood-400 text-xs font-bold tracking-[0.2em] uppercase block mb-3">Kontakt</span>
<h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-8">Zastavte se za námi</h2>
<p className="text-stone-400 font-light mb-10 text-lg">
                        Máte představu o novém bydlení? Pojďme ji společně proměnit v realitu. Napište nám nebo zavolejte.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-5 group">
<div className="w-12 h-12 bg-stone-800 rounded-sm flex items-center justify-center text-wood-400 group-hover:bg-wood-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:map-pin" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div>
<h4 className="text-white text-lg font-serif mb-1">Prodejna a sídlo</h4>
<p className="text-stone-400 text-sm leading-relaxed">
                                    Sládkova 643
                                    377 01 Jindřichův Hradec II
                                </p>
</div>
</div>
<div className="flex items-start gap-5 group">
<div className="w-12 h-12 bg-stone-800 rounded-sm flex items-center justify-center text-wood-400 group-hover:bg-wood-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:phone" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div>
<h4 className="text-white text-lg font-serif mb-1">Telefon</h4>
<a className="text-stone-400 text-sm hover:text-white transition-colors" href="tel:+420602445590">+420 602 445 590</a>
</div>
</div>
<div className="flex items-start gap-5 group">
<div className="w-12 h-12 bg-stone-800 rounded-sm flex items-center justify-center text-wood-400 group-hover:bg-wood-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:mail" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div>
<h4 className="text-white text-lg font-serif mb-1">E-mail</h4>
<a className="text-stone-400 text-sm hover:text-white transition-colors" href="mailto:p.m.truhlarstvi@seznam.cz">p.m.truhlarstvi@seznam.cz</a>
</div>
</div>
</div>
</div>

<div className="bg-stone-800/50 p-8 md:p-10 border border-stone-700 rounded-sm reveal">
<h3 className="font-serif text-2xl text-white mb-6">Napište nám zprávu</h3>
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="group">
<label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 group-focus-within:text-wood-400 transition-colors">Jméno</label>
<input className="w-full bg-stone-900 border-b border-stone-600 py-3 px-2 text-white focus:outline-none focus:border-wood-500 transition-colors" placeholder="Jan Novák" type="text"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 group-focus-within:text-wood-400 transition-colors">Telefon</label>
<input className="w-full bg-stone-900 border-b border-stone-600 py-3 px-2 text-white focus:outline-none focus:border-wood-500 transition-colors" placeholder="+420 777 ..." type="tel"/>
</div>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 group-focus-within:text-wood-400 transition-colors">E-mail</label>
<input className="w-full bg-stone-900 border-b border-stone-600 py-3 px-2 text-white focus:outline-none focus:border-wood-500 transition-colors" placeholder="jan@email.cz" type="email"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 group-focus-within:text-wood-400 transition-colors">O co máte zájem?</label>
<textarea className="w-full bg-stone-900 border-b border-stone-600 py-3 px-2 text-white focus:outline-none focus:border-wood-500 transition-colors resize-none" placeholder="Popište svou představu..." rows="4"></textarea>
</div>
<div className="flex items-start gap-3 py-2">
<input className="mt-1 accent-wood-600" id="consent" type="checkbox"/>
<label className="text-xs text-stone-500 leading-relaxed" htmlFor="consent">
                                Souhlasím se zpracováním osobních údajů pro účely odpovědi na poptávku.
                            </label>
</div>
<button className="w-full py-4 bg-wood-700 hover:bg-wood-600 text-white font-medium uppercase tracking-widest text-xs transition-colors shadow-lg shadow-black/20 mt-2" type="submit">
                            Odeslat nezávazně
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="w-full h-[400px] bg-stone-200 map-filter relative">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.748261310651!2d15.0069!3d49.1444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA4JzM5LjgiTiAxNcKwMDAnMjQuOCJF!5e0!3m2!1scs!2scz!4v1620000000000!5m2!1scs!2scz&amp;q=Sládkova+643,+377+01+Jindřichův+Hradec" style={{border: '0'}} width="100%">
</iframe>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-stone-800 shadow-lg border border-white">
            INDECO CZ
        </div>
</section>

<footer className="bg-stone-950 text-stone-500 border-t border-stone-900">
<div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<h5 className="text-stone-300 font-serif text-xl mb-1">INDECO CZ, s.r.o.</h5>
<p className="text-xs">IČ: 63671298 • Společnost zapsaná v obchodním rejstříku.</p>
</div>
<div className="flex gap-6">
<a className="text-xs uppercase tracking-widest hover:text-wood-400 transition-colors" href="#">Ochrana soukromí</a>
<a className="text-xs uppercase tracking-widest hover:text-wood-400 transition-colors" href="#kontakt">Kontakt</a>
</div>
<div className="text-xs">
                    © 2023 INDECO CZ. Vytvořeno s citem pro řemeslo.
                </div>
</div>
</div>
</footer>



    </>
  );
}
