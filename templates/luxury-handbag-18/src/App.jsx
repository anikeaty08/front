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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

<button className="lg:hidden text-stone-800">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="hidden lg:flex items-center gap-8 text-xs tracking-widest uppercase text-stone-500 font-medium">
<a className="hover:text-black transition-colors duration-300" href="#kolekcja">Kolekcja</a>
<a className="hover:text-black transition-colors duration-300" href="#o-nas">Atelier</a>
</div>

<a className="serif text-2xl lg:text-3xl tracking-tight text-stone-900" href="#">
                AURELIA
            </a>

<div className="flex items-center gap-6 text-stone-800">
<button className="hover:text-stone-500 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="hidden lg:block hover:text-stone-500 transition-colors">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="relative hover:text-stone-500 transition-colors">
<iconify-icon icon="solar:bag-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-stone-800"></span>
</span>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Leather Texture" className="w-full h-full object-cover opacity-90 grayscale-[20%]" src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&amp;w=2557&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-black/10"></div>
</div>

<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
<span className="block text-xs md:text-sm tracking-[0.2em] uppercase text-stone-800 mb-4 animate-[fadeIn_1s_ease-out]">
                Kolekcja Jesień / Zima
            </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-stone-900 leading-[0.9] tracking-tighter mb-8 serif">
                Ponadczasowa <br/> <span className="italic font-light">Elegancja</span>
</h1>
<p className="text-stone-600 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed font-light">
                Odkryj harmonię formy i funkcji. Ręcznie wykonane torebki dla kobiet, które cenią bezkompromisową jakość i dyskretny luksus.
            </p>
<a className="inline-flex items-center gap-3 px-10 py-4 bg-stone-900 text-stone-50 hover:bg-stone-800 transition-all duration-300 text-xs tracking-widest uppercase group" href="#kolekcja">
                Odkryj Kolekcję
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</header>

<section className="py-20 lg:py-32 border-b border-stone-200">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8">

<div className="flex flex-col items-center text-center space-y-3">
<div className="p-3 rounded-full bg-stone-100 text-stone-800 mb-2">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="serif text-lg tracking-tight">Autentyczność</h3>
<p className="text-xs text-stone-500 font-light leading-relaxed max-w-[150px]">Certyfikat oryginalności do każdego produktu.</p>
</div>

<div className="flex flex-col items-center text-center space-y-3">
<div className="p-3 rounded-full bg-stone-100 text-stone-800 mb-2">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="serif text-lg tracking-tight">Darmowa Dostawa</h3>
<p className="text-xs text-stone-500 font-light leading-relaxed max-w-[150px]">Bezpieczna wysyłka premium na całym świecie.</p>
</div>

<div className="flex flex-col items-center text-center space-y-3">
<div className="p-3 rounded-full bg-stone-100 text-stone-800 mb-2">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="serif text-lg tracking-tight">Gwarancja Jakości</h3>
<p className="text-xs text-stone-500 font-light leading-relaxed max-w-[150px]">Dożywotnia gwarancja na elementy skórzane.</p>
</div>

<div className="flex flex-col items-center text-center space-y-3">
<div className="p-3 rounded-full bg-stone-100 text-stone-800 mb-2">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="serif text-lg tracking-tight">Zrównoważony Rozwój</h3>
<p className="text-xs text-stone-500 font-light leading-relaxed max-w-[150px]">Etycznie pozyskiwane materiały i produkcja.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="kolekcja">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-5xl serif text-stone-900 mb-4 tracking-tight">Wybrane Modele</h2>
<p className="text-stone-500 font-light max-w-sm">Ikoniczne projekty, które definiują współczesny luksus.</p>
</div>
<a className="text-xs uppercase tracking-widest border-b border-stone-300 pb-1 hover:border-stone-900 hover:text-stone-900 transition-colors text-stone-500" href="#">
                    Zobacz całą kolekcję
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-stone-50 aspect-[3/4] mb-6">
<img alt="Torebka The Classic Tote" className="w-full h-full object-cover image-hover-zoom" src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<button className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-white text-stone-900 px-6 py-3 text-xs uppercase tracking-widest shadow-lg hover:bg-stone-100 whitespace-nowrap">
                            Szybki podgląd
                        </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="serif text-xl text-stone-900 mb-1 group-hover:text-stone-600 transition-colors">The Classic Tote</h3>
<p className="text-xs text-stone-500 font-light">Skóra licowa, Karmel</p>
</div>
<span className="text-sm font-medium text-stone-900">2 400 PLN</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-stone-50 aspect-[3/4] mb-6">
<img alt="Torebka Midnight Clutch" className="w-full h-full object-cover image-hover-zoom" src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&amp;w=1938&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<button className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-white text-stone-900 px-6 py-3 text-xs uppercase tracking-widest shadow-lg hover:bg-stone-100 whitespace-nowrap">
                            Szybki podgląd
                        </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="serif text-xl text-stone-900 mb-1 group-hover:text-stone-600 transition-colors">Midnight Clutch</h3>
<p className="text-xs text-stone-500 font-light">Satyna i Złoto, Czerń</p>
</div>
<span className="text-sm font-medium text-stone-900">1 850 PLN</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-stone-50 aspect-[3/4] mb-6">
<img alt="Torebka Signature Crossbody" className="w-full h-full object-cover image-hover-zoom" src="https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<button className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-white text-stone-900 px-6 py-3 text-xs uppercase tracking-widest shadow-lg hover:bg-stone-100 whitespace-nowrap">
                            Szybki podgląd
                        </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="serif text-xl text-stone-900 mb-1 group-hover:text-stone-600 transition-colors">Signature Crossbody</h3>
<p className="text-xs text-stone-500 font-light">Włoska Skóra, Kość Słoniowa</p>
</div>
<span className="text-sm font-medium text-stone-900">3 200 PLN</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#F3F2EE]" id="o-nas">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1 relative">
<img alt="Rzemiosło i Detale" className="w-full h-auto object-cover shadow-2xl shadow-stone-200 grayscale-[10%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute -bottom-8 -right-8 w-32 h-32 bg-stone-200 -z-10 hidden md:block"></div>
</div>
<div className="order-1 lg:order-2">
<span className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-4 block">Filozofia</span>
<h2 className="text-4xl md:text-5xl serif text-stone-900 mb-8 tracking-tight leading-tight">
                        Mistrzowskie Rzemiosło <br/> w Każdym Szwie
                    </h2>
<div className="space-y-6 text-stone-600 font-light leading-relaxed text-sm md:text-base">
<p>
                            W Aurelia wierzymy, że prawdziwy luksus nie krzyczy, lecz szepcze. Nasze torebki powstają w małym, rodzinnym atelier we Florencji, gdzie tradycja kaletnicza przekazywana jest z pokolenia na pokolenie.
                        </p>
<p>
                            Używamy wyłącznie starannie wyselekcjonowanych skór full-grain, które z czasem nabierają szlachetnego charakteru. Każdy detal, od złotych okuć po ręczne wykończenia, jest świadectwem naszego oddania perfekcji.
                        </p>
</div>
<div className="mt-10">
<a className="inline-block text-stone-900 border-b border-stone-900 pb-1 text-xs uppercase tracking-widest hover:text-stone-600 hover:border-stone-600 transition-colors" href="#">
                            Poznaj naszą historię
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-900 text-stone-200">
<div className="max-w-2xl mx-auto px-6 text-center">
<iconify-icon className="text-stone-400 mb-6" icon="solar:letter-linear" strokeWidth="1" width="32"></iconify-icon>
<h2 className="text-3xl serif text-white mb-4 tracking-tight">Dołącz do świata Aurelia</h2>
<p className="text-stone-400 text-sm font-light mb-10">Zapisz się, aby otrzymywać informacje o nowych kolekcjach i ekskluzywnych wydarzeniach.</p>
<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
<input className="w-full bg-transparent border-b border-stone-700 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-stone-400 transition-colors" placeholder="Twój adres email" type="email"/>
<button className="mt-4 sm:mt-0 py-3 px-8 bg-stone-100 text-stone-900 text-xs uppercase tracking-widest hover:bg-stone-200 transition-colors whitespace-nowrap" type="button">
                    Zapisz się
                </button>
</form>
<div className="mt-8 flex items-center justify-center gap-2">

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative w-4 h-4 border border-stone-600 group-hover:border-stone-400 transition-colors">
<input className="peer appearance-none w-full h-full cursor-pointer" type="checkbox"/>
<iconify-icon className="absolute inset-0 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-xs text-stone-500 group-hover:text-stone-400">Akceptuję politykę prywatności</span>
</label>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-stone-100">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

<div className="md:col-span-1">
<a className="serif text-2xl tracking-tight text-stone-900 block mb-6" href="#">AURELIA</a>
<p className="text-xs text-stone-500 leading-relaxed font-light">
                        Luksusowe akcesoria skórzane dla kobiet ceniących ponadczasowy styl i najwyższą jakość wykonania.
                    </p>
</div>

<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-stone-900 mb-6">Sklep</h4>
<ul className="space-y-4 text-sm font-light text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Torebki</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Akcesoria</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Nowości</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Karty Podarunkowe</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-stone-900 mb-6">Klient</h4>
<ul className="space-y-4 text-sm font-light text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Kontakt</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Dostawa i Zwroty</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Pielęgnacja Produktów</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">FAQ</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-stone-900 mb-6">Social Media</h4>
<div className="flex gap-4 text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-stone-400 uppercase tracking-wider">© 2023 Aurelia Handbags. Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-6 text-[10px] text-stone-400 uppercase tracking-wider">
<a className="hover:text-stone-600" href="#">Polityka Prywatności</a>
<a className="hover:text-stone-600" href="#">Regulamin</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
