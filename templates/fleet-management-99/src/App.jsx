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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-14">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
<span className="iconify text-zinc-950" data-icon="lucide:navigation" data-width="16"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-white">NAVI3</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#features">Mogućnosti</a>
<a className="hover:text-white transition-colors" href="#solutions">Rešenja</a>
<a className="hover:text-white transition-colors" href="#pricing">Cenovnik</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="https://navi3.darkroom.rs/">Prijava</a>
<a className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded hover:bg-zinc-200 transition-colors" href="https://navi3.darkroom.rs/">Započni odmah</a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] hero-glow opacity-60 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-[10px] uppercase tracking-wider font-medium text-zinc-300">Nova verzija 3.0 je dostupna</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-white tracking-tight mb-6">
                Potpuna kontrola nad <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500">vašom flotom vozila.</span>
</h1>
<p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Navi3 vam omogućava precizno GPS praćenje, naprednu telemetriju i optimizaciju ruta u realnom vremenu. Dizajnirano za moderne logističke izazove.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full sm:w-auto px-6 py-3 bg-white text-zinc-950 text-sm font-medium rounded hover:bg-zinc-200 transition-all flex items-center justify-center gap-2" href="https://navi3.darkroom.rs/">
                    Isprobaj Demo
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-6 py-3 border border-white/10 bg-white/5 text-zinc-300 text-sm font-medium rounded hover:bg-white/10 transition-all" href="#features">
                    Saznaj više
                </a>
</div>

<div className="relative max-w-5xl mx-auto rounded-lg border border-white/10 bg-zinc-900/50 shadow-2xl shadow-sky-900/20 overflow-hidden">
<div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-zinc-900">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
</div>

<div className="aspect-[16/9] bg-zinc-950 relative overflow-hidden group">
<img alt="Navi3 Interfejs Mape" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute top-6 left-6 w-64 glass rounded p-4 hidden md:block">
<div className="flex justify-between items-start mb-3">
<div>
<h3 className="text-xs font-semibold text-white">Vozilo #1024</h3>
<p className="text-[10px] text-zinc-400">Škoda Octavia • U pokretu</p>
</div>
<span className="iconify text-emerald-400" data-icon="lucide:signal" data-width="16"></span>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px]">
<span className="text-zinc-500">Brzina</span>
<span className="text-zinc-200">84 km/h</span>
</div>
<div className="flex justify-between text-[10px]">
<span className="text-zinc-500">Lokacija</span>
<span className="text-zinc-200">Beograd, A1</span>
</div>
<div className="w-full bg-zinc-700 h-1 rounded-full mt-2">
<div className="bg-sky-500 h-1 rounded-full w-3/4"></div>
</div>
</div>
</div>
<div className="absolute bottom-6 right-6 flex gap-2">
<button className="w-8 h-8 glass rounded flex items-center justify-center hover:bg-white/10 transition">
<span className="iconify text-white" data-icon="lucide:plus" data-width="16"></span>
</button>
<button className="w-8 h-8 glass rounded flex items-center justify-center hover:bg-white/10 transition">
<span className="iconify text-white" data-icon="lucide:minus" data-width="16"></span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-black/20 py-10">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-xs font-medium text-zinc-500 mb-6 uppercase tracking-widest">Pouzdano rešenje za preko 500 kompanija</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale">

<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:box" data-width="20"></span> <span className="font-bold text-lg tracking-tighter">LOGISTIKA</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:truck" data-width="20"></span> <span className="font-bold text-lg tracking-tighter">TRANS-X</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:globe" data-width="20"></span> <span className="font-bold text-lg tracking-tighter">GLOBALNET</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:anchor" data-width="20"></span> <span className="font-bold text-lg tracking-tighter">CARGO</span></div>
</div>
</div>
</section>

<section className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Sve što vam treba za pametno praćenje</h2>
<p className="text-zinc-400">Navi3 je modularna platforma koja se prilagođava veličini vaše flote, od jednog vozila do međunarodnog transporta.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 row-span-2 glass rounded-2xl p-8 relative overflow-hidden group">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center mb-4 border border-sky-500/20">
<span className="iconify text-sky-400" data-icon="lucide:map" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">GPS Praćenje u realnom vremenu</h3>
<p className="text-zinc-400 text-sm max-w-sm">Pratite poziciju svakog vozila sa osvežavanjem na svakih 5 sekundi. Detaljan prikaz ulica, saobraćaja i statusa motora.</p>
</div>
<div className="absolute right-0 bottom-0 w-3/5 h-3/4 bg-zinc-800 rounded-tl-xl border-t border-l border-white/5 translate-y-4 translate-x-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 overflow-hidden">
<img className="opacity-60 mix-blend-overlay w-full h-full object-cover" src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&amp;w=2531&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-2 h-2 bg-sky-500 rounded-full animate-ping absolute"></div>
<div className="w-2 h-2 bg-sky-500 rounded-full relative z-10"></div>
</div>
</div>
</div>

<div className="glass rounded-2xl p-6 group hover:bg-white/5 transition-colors">
<span className="iconify text-violet-400 mb-4" data-icon="lucide:bar-chart-3" data-width="24"></span>
<h3 className="text-lg font-medium text-white mb-2">Napredna Analitika</h3>
<p className="text-zinc-400 text-xs leading-relaxed">Izveštaji o potrošnji goriva, pređenoj kilometraži i radnim satima na jedan klik.</p>
</div>

<div className="glass rounded-2xl p-6 group hover:bg-white/5 transition-colors">
<span className="iconify text-rose-400 mb-4" data-icon="lucide:alert-circle" data-width="24"></span>
<h3 className="text-lg font-medium text-white mb-2">Sigurnosni Alarmi</h3>
<p className="text-zinc-400 text-xs leading-relaxed">Notifikacije za prekoračenje brzine, izlazak iz zone (Geofence) ili neovlašćeno korišćenje.</p>
</div>

<div className="md:col-span-3 glass rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 border border-emerald-500/20">
<span className="iconify text-emerald-400" data-icon="lucide:smartphone" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Dostupno na svim uređajima</h3>
<p className="text-zinc-400 text-sm">Navi3 je optimizovan za desktop, tablet i mobilne uređaje. Vaša flota je uvek u vašem džepu.</p>
</div>
<div className="flex gap-4">
<div className="w-12 h-20 rounded-md border border-zinc-700 bg-zinc-900 flex flex-col items-center justify-center shadow-lg transform rotate-[-12deg] translate-y-2">
<span className="iconify text-zinc-600" data-icon="lucide:smartphone" data-width="16"></span>
</div>
<div className="w-32 h-20 rounded-md border border-zinc-700 bg-zinc-800 flex items-center justify-center shadow-lg z-10">
<span className="iconify text-zinc-500" data-icon="lucide:laptop" data-width="24"></span>
</div>
<div className="w-16 h-20 rounded-md border border-zinc-700 bg-zinc-900 flex items-center justify-center shadow-lg transform rotate-[12deg] translate-y-2">
<span className="iconify text-zinc-600" data-icon="lucide:tablet" data-width="16"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-zinc-900/30">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">99.9%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Uptime Platforme</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">5k+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Praćenih Vozila</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">0.5s</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Latencija</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">24/7</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Podrška</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 via-zinc-950 to-zinc-950 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-4 text-center relative z-10">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-6">Spremni za optimizaciju?</h2>
<p className="text-zinc-400 mb-10 text-lg">Pridružite se modernim kompanijama koje koriste Navi3 za smanjenje troškova i povećanje efikasnosti.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-zinc-600" placeholder="Vaša email adresa" type="email"/>
<button className="bg-white text-zinc-950 px-6 py-3 text-sm font-medium rounded hover:bg-zinc-200 transition-colors whitespace-nowrap" type="button">
                    Kreiraj nalog
                </button>
</form>
<p className="mt-4 text-[10px] text-zinc-600">Nije potrebna kreditna kartica za probni period od 14 dana.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-zinc-800 rounded-sm flex items-center justify-center border border-zinc-700">
<span className="iconify text-white" data-icon="lucide:navigation" data-width="12"></span>
</div>
<span className="text-sm font-semibold text-white">Navi3</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
                        Platforma za upravljanje flotom nove generacije. Razvijeno sa strašću u Darkroom.rs.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Proizvod</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Mogućnosti</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integracije</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cenovnik</a></li>
<li><a className="hover:text-white transition-colors" href="#">Ažuriranja</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Kompanija</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">O nama</a></li>
<li><a className="hover:text-white transition-colors" href="#">Karijera</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Legalno</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Privatnost</a></li>
<li><a className="hover:text-white transition-colors" href="#">Uslovi korišćenja</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-600">© 2023 Navi3 Darkroom. Sva prava zadržana.</p>
<div className="flex gap-4">
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
