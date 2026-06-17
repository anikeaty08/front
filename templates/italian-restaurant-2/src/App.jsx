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
      

<div className="grain"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-stone-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl tracking-tighter font-medium text-stone-50 flex items-center gap-2" href="#">
                LA DOLCE VITA
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-400">
<a className="hover:text-orange-200 transition-colors" href="#menu">Menü</a>
<a className="hover:text-orange-200 transition-colors" href="#atmosphere">Atmosphäre</a>
<a className="hover:text-orange-200 transition-colors" href="#about">Über uns</a>
<a className="hover:text-orange-200 transition-colors" href="#reviews">Gäste</a>
</div>
<button className="bg-stone-100 text-stone-900 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide hover:bg-stone-200 transition-colors">
                RESERVIEREN
            </button>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Italian Pasta Macro" className="w-full h-full object-cover object-center opacity-60 scale-105" src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/30"></div>

<div className="steam-container">
<div className="steam-puff w-64 h-64 left-[20%] bottom-[-10%]" style={{animationDelay: '0s'}}></div>
<div className="steam-puff w-96 h-96 right-[20%] bottom-[-20%]" style={{animationDelay: '3s'}}></div>
<div className="steam-puff w-48 h-48 left-[50%] bottom-[-5%]" style={{animationDelay: '5s'}}></div>
</div>
</div>
<div className="relative z-20 text-center max-w-4xl px-6 mt-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-900/20 text-orange-200 text-xs tracking-widest uppercase mb-6 backdrop-blur-sm">
<iconify-icon height="14" icon="solar:chef-hat-linear" width="14"></iconify-icon>
<span>Neu in Berlin Mitte</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-serif italic text-stone-50 leading-[0.9] tracking-tight mb-8">
                Echte <span className="text-orange-400/90">italienische</span><br/>Leidenschaft.
            </h1>
<p className="text-lg md:text-xl text-stone-300 max-w-xl mx-auto font-light leading-relaxed mb-10">
                Handgemachte Pasta, holzbefeuerte Pizza und Weine, die Geschichten erzählen. Willkommen in Ihrem zweiten Zuhause.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-8 py-4 bg-orange-700 text-orange-50 rounded-full text-sm font-medium tracking-wide overflow-hidden hover:bg-orange-600 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(194,65,12,0.5)]">
<span className="relative z-10 flex items-center gap-2">
                        Tisch reservieren
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<button className="px-8 py-4 bg-transparent border border-stone-700 text-stone-300 rounded-full text-sm font-medium tracking-wide hover:bg-stone-900 hover:border-stone-500 transition-colors">
                    Menü ansehen
                </button>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-stone-950 relative" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-serif text-stone-50 mb-4 tracking-tight">Unsere Spezialitäten</h2>
<p className="text-stone-400 font-light max-w-md">Saisonale Zutaten treffen auf jahrhundertealte Traditionen.</p>
</div>
<a className="text-orange-400 text-sm hover:text-orange-300 transition-colors flex items-center gap-1 group" href="#">
                    Alle Gerichte <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

<div className="group relative md:col-span-2 rounded-3xl overflow-hidden bg-stone-900 border border-white/5">
<img alt="Pasta" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<span className="text-orange-400 text-xs tracking-widest uppercase mb-2 block font-medium">Fatto a Mano</span>
<h3 className="text-3xl font-serif text-white mb-2">Tagliatelle al Tartufo</h3>
<p className="text-stone-300 text-sm font-light max-w-sm line-clamp-2">Frische schwarze Trüffel, Parmesan-Creme, Butteremulsion, Schnittlauch.</p>
</div>
<span className="text-2xl font-serif italic text-stone-200">24€</span>
</div>
</div>
</div>

<div className="group relative md:col-span-1 rounded-3xl overflow-hidden bg-stone-900 border border-white/5">
<img alt="Pizza" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-orange-400 text-xs tracking-widest uppercase mb-2 block font-medium">Aus dem Steinofen</span>
<h3 className="text-3xl font-serif text-white mb-2">Pizza Burrata</h3>
<div className="flex justify-between items-center mt-4 border-t border-white/10 pt-4">
<span className="text-stone-300 text-xs">San Marzano Tomaten</span>
<span className="text-xl font-serif italic text-stone-200">18€</span>
</div>
</div>
</div>

<div className="group relative md:col-span-1 rounded-3xl overflow-hidden bg-stone-900 border border-white/5">
<img alt="Dolci" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-orange-400 text-xs tracking-widest uppercase mb-2 block font-medium">Süßer Abschluss</span>
<h3 className="text-3xl font-serif text-white mb-2">Tiramisù Classico</h3>
<div className="flex justify-between items-center mt-4 border-t border-white/10 pt-4">
<span className="text-stone-300 text-xs">Espresso, Mascarpone</span>
<span className="text-xl font-serif italic text-stone-200">9€</span>
</div>
</div>
</div>

<div className="group relative md:col-span-2 rounded-3xl overflow-hidden bg-stone-900 border border-white/5 flex items-center justify-center">
<img alt="Wine" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-950/40"></div>
<div className="relative z-10 text-center p-8">
<iconify-icon className="text-orange-400 text-4xl mb-4" icon="solar:wineglass-linear"></iconify-icon>
<h3 className="text-3xl font-serif text-white mb-2">Unsere Weinkarte</h3>
<p className="text-stone-300 text-sm font-light mb-6">Über 50 handverlesene Weine aus der Toskana.</p>
<button className="px-6 py-2 border border-white/20 rounded-full text-xs hover:bg-white hover:text-black transition-all">Karte öffnen</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900/50" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-orange-500/30 rounded-tl-3xl"></div>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-orange-500/30 rounded-br-3xl"></div>
<img alt="Chef" className="w-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-3 mb-6">
<span className="h-px w-8 bg-orange-500"></span>
<span className="text-orange-400 text-xs tracking-widest uppercase">Der Küchenchef</span>
</div>
<h2 className="text-4xl md:text-5xl font-serif text-stone-50 mb-8 leading-tight tracking-tight">
                        "Kochen ist für mich wie <span className="text-orange-400 italic">Architektur</span> des Geschmacks."
                    </h2>
<div className="space-y-6 text-stone-400 font-light text-lg leading-relaxed">
<p>
                            Aufgewachsen in Bologna, habe ich gelernt, dass die einfachsten Zutaten oft die besten sind. Mehl, Wasser, Eier – und viel Zeit.
                        </p>
<p>
                            Im <span className="font-serif italic text-white">La Dolce Vita</span> bringen wir diese Philosophie auf Ihren Teller. Kein Schnickschnack, nur purer, unverfälschter Geschmack, der Erinnerungen weckt.
                        </p>
</div>
<div className="mt-10">
<p className="font-serif text-2xl text-stone-100">Giovanni Rossi</p>
<p className="text-sm text-stone-500 mt-1">Head Chef &amp; Founder</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-950" id="atmosphere">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<h2 className="text-4xl md:text-5xl font-serif text-stone-50 tracking-tight">Einblicke</h2>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:border-orange-500 hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:border-orange-500 hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-x-auto gap-4 pb-8 scroll-hide px-6 -mx-6 md:mx-0 md:px-0">
<div className="min-w-[300px] md:min-w-[400px] h-[300px] rounded-xl overflow-hidden relative group">
<img alt="Interior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="min-w-[300px] md:min-w-[400px] h-[300px] rounded-xl overflow-hidden relative group">
<img alt="Details" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=800"/>
</div>
<div className="min-w-[300px] md:min-w-[400px] h-[300px] rounded-xl overflow-hidden relative group">
<img alt="Dining" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="min-w-[300px] md:min-w-[400px] h-[300px] rounded-xl overflow-hidden relative group">
<img alt="Evening" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&amp;w=800"/>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-stone-900/30" id="reviews">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-4xl text-orange-500 mb-6" icon="solar:stars-minimalistic-linear"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-serif text-stone-50 mb-12 tracking-tight">Das sagen unsere Gäste</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
<div className="p-8 rounded-2xl bg-stone-950 border border-white/5 hover:border-orange-500/30 transition-colors">
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-300 italic mb-6">"Die beste Carbonara, die ich außerhalb von Rom gegessen habe. Ein absolutes Muss für jeden Feinschmecker."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-500 font-serif">M</div>
<div>
<p className="text-sm text-stone-200 font-medium">Michael K.</p>
<p className="text-xs text-stone-500">vor 2 Tagen</p>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-stone-900 border border-white/5 hover:border-orange-500/30 transition-colors">
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-300 italic mb-6">"Wunderschönes Ambiente und eine Weinkarte, die keine Wünsche offen lässt. Wir kommen definitiv wieder."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-500 font-serif">S</div>
<div>
<p className="text-sm text-stone-200 font-medium">Sophie W.</p>
<p className="text-xs text-stone-500">vor 1 Woche</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-950 pt-24 pb-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 lg:col-span-1">
<a className="text-2xl tracking-tighter font-medium text-stone-50 block mb-6" href="#">
                        LA DOLCE VITA
                    </a>
<p className="text-stone-500 text-sm leading-relaxed mb-6">
                        Ein Stück Italien im Herzen der Stadt. Authentisch, herzlich, köstlich.
                    </p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-orange-400 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-stone-400 hover:text-orange-400 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
</div>
</div>

<div className="col-span-1 lg:col-span-2 p-8 rounded-2xl bg-stone-900/50 border border-white/5 text-center flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 to-transparent pointer-events-none"></div>
<iconify-icon className="text-3xl text-orange-400 mb-4" icon="solar:calendar-linear"></iconify-icon>
<h3 className="text-xl font-serif text-stone-200 mb-2">Tisch reservieren</h3>
<p className="text-stone-500 text-sm mb-6">Buchen Sie bequem über OpenTable</p>

<div className="flex gap-2 w-full max-w-sm">
<div className="flex-1 h-10 bg-stone-950 rounded border border-stone-700 flex items-center px-3 text-stone-500 text-sm cursor-pointer hover:border-stone-500">
<span>2 Personen</span>
<iconify-icon className="ml-auto" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="flex-1 h-10 bg-stone-950 rounded border border-stone-700 flex items-center px-3 text-stone-500 text-sm cursor-pointer hover:border-stone-500">
<span>Heute, 19:00</span>
<iconify-icon className="ml-auto" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<button className="h-10 px-4 bg-orange-700 hover:bg-orange-600 text-white rounded text-sm font-medium transition-colors">Finden</button>
</div>
</div>

<div className="col-span-1 space-y-8">
<div>
<h4 className="text-stone-200 font-medium mb-4 text-sm uppercase tracking-wide">Adresse</h4>
<p className="text-stone-400 text-sm font-light">Torstraße 123<br/>10119 Berlin</p>
</div>
<div>
<h4 className="text-stone-200 font-medium mb-4 text-sm uppercase tracking-wide">Öffnungszeiten</h4>
<ul className="text-stone-400 text-sm font-light space-y-1">
<li className="flex justify-between"><span>Mo - Do</span> <span>17:00 - 23:00</span></li>
<li className="flex justify-between"><span>Fr - Sa</span> <span>17:00 - 00:00</span></li>
<li className="flex justify-between"><span>So</span> <span>16:00 - 22:00</span></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600">
<p>© 2024 La Dolce Vita. Alle Rechte vorbehalten.</p>
<div className="flex gap-6">
<a className="hover:text-stone-400" href="#">Impressum</a>
<a className="hover:text-stone-400" href="#">Datenschutz</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
