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
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-[#1c1917]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-serif text-xl tracking-tighter text-orange-50 font-medium z-50 mix-blend-difference" href="#">
                LA DOLCE VITA
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide text-stone-300">
<a className="hover:text-orange-400 transition-colors duration-300" href="#about">Geschichte</a>
<a className="hover:text-orange-400 transition-colors duration-300" href="#menu">Menü</a>
<a className="hover:text-orange-400 transition-colors duration-300" href="#gallery">Galerie</a>
<a className="px-5 py-2 border border-orange-500/30 rounded-full text-orange-100 hover:bg-orange-900/20 transition-all duration-300" href="#reservation">
                    Reservieren
                </a>
</div>

<button className="md:hidden text-stone-100">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Steaming Pasta" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&amp;w=2632&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-[#1c1917]/60 to-orange-900/20 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#1c1917]"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
<span className="inline-block py-1 px-3 rounded-full border border-orange-500/30 bg-orange-950/30 backdrop-blur-sm text-orange-200 text-xs tracking-widest uppercase mb-6">
                Ristorante Italiano
            </span>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-stone-50 via-orange-100 to-stone-400 font-medium mb-6">
                Italienische Tradition<br/>auf dem Teller.
            </h1>
<p className="text-stone-300 text-lg md:text-xl font-light max-w-lg mx-auto mb-10 leading-relaxed">
                Ein Ort der Wärme und des Geschmacks. Wo Rauch, Wein und Handwerk zu einem unvergesslichen Erlebnis verschmelzen.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="group relative px-8 py-3 bg-orange-700 hover:bg-orange-600 text-white text-sm tracking-wide rounded overflow-hidden transition-all duration-300" href="#reservation">
<span className="relative z-10">Tisch reservieren</span>
<div className="absolute inset-0 h-full w-full scale-0 rounded transition-all duration-300 group-hover:scale-100 group-hover:bg-orange-600"></div>
</a>
<a className="px-8 py-3 text-stone-300 hover:text-white border-b border-stone-600 hover:border-white transition-all duration-300 text-sm tracking-wide" href="#menu">
                    Speisekarte ansehen
                </a>
</div>
</div>
</header>

<section className="relative py-24 bg-[#1c1917] bg-noise overflow-hidden" id="about">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-900/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 content-layer">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="flex items-center gap-2 text-orange-400">
<iconify-icon icon="solar:fire-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs uppercase tracking-widest">Unsere Geschichte</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-100 font-medium leading-tight">
                        Das Geheimnis liegt <span className="italic text-orange-500/80">im Detail</span>.
                    </h2>
<p className="text-stone-400 font-light leading-relaxed text-lg">
                        La Dolce Vita begann in einer kleinen Küche in Neapel. Die Rezepte meiner Nonna waren einfach, aber voller Leidenschaft. Heute bringen wir genau diese Ehrlichkeit auf Ihren Teller. Handgemachte Pasta, sonnengereifte Tomaten und der Duft von offenem Feuer.
                    </p>
<p className="text-stone-400 font-light leading-relaxed">
                        Wir glauben, dass Essen mehr ist als Nahrungsaufnahme. Es ist Wärme. Es ist Erinnerung. Es ist das Leben selbst.
                    </p>
<div className="pt-4">
<img alt="Unterschrift" className="h-12 opacity-60 invert filter sepia saturate-200 hue-rotate-330" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-lg overflow-hidden relative group">
<img alt="Chef kocht" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&amp;w=2680&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>

<div className="absolute -bottom-6 -left-6 bg-[#292524] p-6 border border-stone-700 shadow-2xl max-w-[200px]">
<p className="font-serif text-2xl text-orange-400 mb-1">1985</p>
<p className="text-xs text-stone-400 uppercase tracking-wide">Familientradition seit über 30 Jahren</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#171513] border-y border-white/5" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-100 font-medium mb-4">Kulinarische Reise</h2>
<p className="text-stone-400 font-light max-w-md">Ausgewählte Highlights aus unserer saisonalen Karte. Frisch, lokal und immer authentisch.</p>
</div>
<a className="group flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors" href="#">
<span>Ganzes Menü ansehen</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-[#1c1917] border border-white/5 hover:border-orange-900/50 transition-colors duration-300 overflow-hidden">
<div className="h-48 overflow-hidden">
<img alt="Antipasti" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl text-stone-100 font-medium">Antipasti</h3>
<iconify-icon className="text-green-600/70" icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<p className="text-stone-400 text-sm font-light mb-4 line-clamp-2">Bruschetta Variationen, Burrata auf Rucola, gegrilltes Gemüse und Parmaschinken.</p>
<span className="text-orange-400 font-medium text-sm">ab 14 €</span>
</div>
</div>

<div className="group relative bg-[#1c1917] border border-white/5 hover:border-orange-900/50 transition-colors duration-300 overflow-hidden">
<div className="h-48 overflow-hidden">
<img alt="Primi" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl text-stone-100 font-medium">Primi</h3>
<iconify-icon className="text-orange-600/70" icon="solar:chef-hat-heart-linear" width="20"></iconify-icon>
</div>
<p className="text-stone-400 text-sm font-light mb-4 line-clamp-2">Hausgemachte Tagliatelle al Tartufo, Carbonara Tradizionale oder Risotto ai Funghi.</p>
<span className="text-orange-400 font-medium text-sm">ab 18 €</span>
</div>
</div>

<div className="group relative bg-[#1c1917] border border-white/5 hover:border-orange-900/50 transition-colors duration-300 overflow-hidden">
<div className="h-48 overflow-hidden">
<img alt="Secondi" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl text-stone-100 font-medium">Secondi</h3>
<iconify-icon className="text-red-600/70" icon="solar:fire-linear" width="20"></iconify-icon>
</div>
<p className="text-stone-400 text-sm font-light mb-4 line-clamp-2">Tagliata vom Rind, Ossobuco alla Milanese oder frischer Wolfsbarsch vom Grill.</p>
<span className="text-orange-400 font-medium text-sm">ab 26 €</span>
</div>
</div>

<div className="group relative bg-[#1c1917] border border-white/5 hover:border-orange-900/50 transition-colors duration-300 overflow-hidden">
<div className="h-48 overflow-hidden">
<img alt="Dolci" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-xl text-stone-100 font-medium">Dolci</h3>
<iconify-icon className="text-pink-600/70" icon="solar:heart-linear" width="20"></iconify-icon>
</div>
<p className="text-stone-400 text-sm font-light mb-4 line-clamp-2">Klassisches Tiramisu, Panna Cotta mit Waldbeeren oder Cannoli Siciliani.</p>
<span className="text-orange-400 font-medium text-sm">ab 9 €</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-orange-950/40 via-[#1c1917] to-[#1c1917] z-0"></div>
<div className="absolute left-0 top-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center bg-[#292524]/50 border border-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
<div className="lg:w-1/2 p-10 lg:p-16 space-y-6">
<span className="inline-block py-1 px-3 rounded-full border border-orange-500/30 text-orange-300 text-xs tracking-widest uppercase">
                        Jeden Freitag
                    </span>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight text-white font-medium">
                        Wein-Tasting &amp; Antipasti
                    </h2>
<p className="text-stone-300 font-light text-lg">
                        Tauchen Sie ein in die Welt der italienischen Weine. Unser Sommelier präsentiert 5 ausgewählte Weine aus der Toskana, begleitet von feinsten Häppchen.
                    </p>
<ul className="space-y-3 text-stone-400 font-light text-sm">
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> 5 Premium Weine (0,1l)
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Exklusive Antipasti-Platte
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Einführung durch den Sommelier
                        </li>
</ul>
<div className="pt-4">
<button className="bg-stone-100 text-stone-900 hover:bg-white px-6 py-3 rounded font-medium text-sm tracking-wide transition-colors">
                            Jetzt Platz sichern
                        </button>
</div>
</div>
<div className="lg:w-1/2 h-80 lg:h-[500px] relative">
<img alt="Wine Tasting" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#292524]/80 lg:to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1c1917]" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-100 font-medium mb-4">Atmosphäre</h2>
<div className="w-16 h-[1px] bg-orange-500 mx-auto"></div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">

<div className="col-span-2 row-span-2 relative overflow-hidden rounded group">
<img alt="Restaurant Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>

<div className="col-span-1 row-span-1 relative overflow-hidden rounded group">
<img alt="Pasta Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>

<div className="col-span-1 row-span-1 relative overflow-hidden rounded group">
<img alt="Cocktail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>

<div className="col-span-2 row-span-1 relative overflow-hidden rounded group">
<img alt="Kitchen Action" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#171513] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
<div className="w-40 h-40 rounded-full overflow-hidden border-2 border-orange-900/50 mb-6 p-1">
<img alt="Chef Mario Rossi" className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&amp;w=2568&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl text-white font-medium mb-1">Mario Rossi</h3>
<p className="text-orange-500 text-xs uppercase tracking-widest mb-4">Chef de Cuisine</p>
<p className="text-stone-400 font-light italic leading-relaxed">
                        "Einfachheit ist die höchste Stufe der Vollendung. In meiner Küche gibt es keinen Platz für unnötigen Schnick-Schnack, nur puren Geschmack."
                    </p>
</div>

<div className="lg:col-span-7">
<div className="flex items-center justify-between mb-8">
<h3 className="font-serif text-2xl text-white font-medium">Was Gäste sagen</h3>
<div className="flex items-center gap-1 text-orange-500">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<span className="text-stone-400 text-sm ml-2 font-light">4.9 auf Google</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-[#1c1917] p-6 border border-white/5 rounded">
<div className="flex items-center gap-1 text-orange-400 mb-3">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-stone-300 text-sm font-light leading-relaxed mb-4">"Der beste Italiener in der Stadt. Die Carbonara schmeckt wie in Rom. Absolut authentisch und wunderschönes Ambiente."</p>
<p className="text-stone-500 text-xs uppercase tracking-wider">— Sabine M.</p>
</div>

<div className="bg-[#1c1917] p-6 border border-white/5 rounded">
<div className="flex items-center gap-1 text-orange-400 mb-3">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-stone-300 text-sm font-light leading-relaxed mb-4">"Toller Service, exzellente Weinkarte. Das Wein-Tasting am Freitag ist ein Muss für jeden Genießer."</p>
<p className="text-stone-500 text-xs uppercase tracking-wider">— Thomas K.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1c1917] bg-noise relative" id="reservation">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-900/50 to-transparent"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-10">
<h2 className="font-serif text-3xl md:text-5xl tracking-tight text-white font-medium mb-4">Ihren Tisch reservieren</h2>
<p className="text-stone-400 font-light">Wir freuen uns darauf, Sie bald bei uns begrüßen zu dürfen.</p>
</div>
<div className="bg-[#292524]/60 backdrop-blur-sm p-8 md:p-10 border border-white/5 rounded-lg shadow-2xl">

<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-stone-400 uppercase tracking-wider font-medium">Datum</label>
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500" icon="solar:calendar-linear" width="18"></iconify-icon>
<input className="w-full bg-[#1c1917] border border-stone-700 text-stone-200 text-sm rounded py-3 pl-12 pr-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all appearance-none" type="date"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-stone-400 uppercase tracking-wider font-medium">Zeit</label>
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500" icon="solar:clock-circle-linear" width="18"></iconify-icon>
<select className="w-full bg-[#1c1917] border border-stone-700 text-stone-200 text-sm rounded py-3 pl-12 pr-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all appearance-none cursor-pointer">
<option>17:00</option>
<option>18:00</option>
<option>19:00</option>
<option>20:00</option>
<option>21:00</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-stone-400 uppercase tracking-wider font-medium">Personen</label>
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<select className="w-full bg-[#1c1917] border border-stone-700 text-stone-200 text-sm rounded py-3 pl-12 pr-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all appearance-none cursor-pointer">
<option>2 Personen</option>
<option>3 Personen</option>
<option>4 Personen</option>
<option>5+ Personen</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-stone-400 uppercase tracking-wider font-medium">Name</label>
<input className="w-full bg-[#1c1917] border border-stone-700 text-stone-200 text-sm rounded py-3 px-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all" placeholder="Max Mustermann" type="text"/>
</div>
</div>
<button className="w-full bg-gradient-to-r from-orange-800 to-orange-700 hover:from-orange-700 hover:to-orange-600 text-white font-medium py-4 rounded shadow-lg shadow-orange-900/20 transform transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2" type="button">
<span>Reservierung anfragen</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<p className="text-center text-xs text-stone-500 mt-4">Powered by OpenTable</p>
</form>
</div>
</div>
</section>

<footer className="bg-[#100e0d] pt-20 pb-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

<div className="space-y-6">
<a className="font-serif text-2xl text-white font-medium tracking-tight" href="#">LA DOLCE VITA</a>
<p className="text-stone-400 text-sm font-light leading-relaxed max-w-xs">
                        Authentische italienische Küche im Herzen der Stadt. Leidenschaft, Tradition und beste Zutaten.
                    </p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-orange-500 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon></a>
<a className="text-stone-400 hover:text-orange-500 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="24"></iconify-icon></a>
</div>
</div>

<div className="space-y-4">
<h4 className="text-stone-100 font-medium tracking-wide text-sm uppercase">Kontakt &amp; Adresse</h4>
<div className="flex flex-col gap-3 text-stone-400 text-sm font-light">
<div className="flex items-start gap-3">
<iconify-icon className="mt-1 flex-shrink-0 text-orange-600" icon="solar:map-point-linear"></iconify-icon>
<span>Marktstraße 12<br/>10115 Berlin</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-orange-600" icon="solar:phone-calling-linear"></iconify-icon>
<span>+49 30 123 456 78</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-orange-600" icon="solar:letter-linear"></iconify-icon>
<span>ciao@ladolcevita.de</span>
</div>
</div>
</div>

<div className="bg-[#1c1917] p-6 rounded border border-white/5">
<h4 className="text-orange-400 font-medium tracking-wide text-sm uppercase mb-4 flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Öffnungszeiten
                    </h4>
<ul className="space-y-3 text-stone-300 text-sm font-light">
<li className="flex justify-between border-b border-stone-800 pb-2">
<span>Mo - Do</span>
<span>17:00 - 23:00</span>
</li>
<li className="flex justify-between border-b border-stone-800 pb-2">
<span>Freitag</span>
<span>17:00 - 00:00</span>
</li>
<li className="flex justify-between border-b border-stone-800 pb-2">
<span>Samstag</span>
<span>16:00 - 00:00</span>
</li>
<li className="flex justify-between text-stone-500">
<span>Sonntag</span>
<span>Ruhetag</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 font-light">
<p>© 2023 La Dolce Vita Restaurant. Alle Rechte vorbehalten.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-stone-300" href="#">Impressum</a>
<a className="hover:text-stone-300" href="#">Datenschutz</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
