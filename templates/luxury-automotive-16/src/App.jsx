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
      

<nav className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
<div className="text-base font-medium tracking-tighter uppercase text-zinc-100 flex items-center gap-2">
                P R S C H
            </div>
<div className="hidden md:flex space-x-8 text-sm font-light text-zinc-400">
<a className="hover:text-zinc-50 transition-colors" href="#">Modele 911</a>
<a className="hover:text-zinc-50 transition-colors" href="#">Innowacje</a>
<a className="hover:text-zinc-50 transition-colors" href="#">Dziedzictwo</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex text-sm font-light text-zinc-400 hover:text-zinc-50 transition-colors items-center gap-2">
                    Zaloguj <iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-300 transition-colors">
                    Konfigurator
                </button>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32 lg:pb-40">

<div className="absolute inset-0 -z-20 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

<div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-800/30 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800/60 bg-zinc-900/50 text-xs text-zinc-400 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-zinc-500"></span>
                    Nowa generacja 992.2 już dostępna
                </div>
<h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tighter text-zinc-50 sm:text-7xl">
                    Porsche 911. <br/><span className="text-zinc-500">Kształt doskonałości.</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 font-light leading-relaxed">
                    Sylwetka, która definiuje auto sportowe od ponad pół wieku. Osiągi, które nieustannie przesuwają granice fizyki. Stworzone dla tych, którzy odrzucają kompromisy.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto rounded-full bg-zinc-50 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition-all text-center" href="#">
                        Odkryj modele
                    </a>
<a className="w-full sm:w-auto rounded-full border border-zinc-800 bg-zinc-900/50 px-6 py-3 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all text-center flex items-center justify-center gap-2 group" href="#">
                        Obejrzyj film <iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
<div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/60 shadow-2xl group">
<img alt="Porsche 911 na drodze" className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-1000 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-50">911 Carrera S</h2>
<p className="text-sm text-zinc-400 font-light mt-1">Dusza sportowca ukryta w codziennym wydaniu.</p>
</div>
<div className="flex gap-6 text-sm">
<div className="flex flex-col">
<span className="text-zinc-500 font-light">Moc</span>
<span className="text-zinc-50 font-medium">450 KM</span>
</div>
<div className="flex flex-col">
<span className="text-zinc-500 font-light">0-100 km/h</span>
<span className="text-zinc-50 font-medium">3.7 s</span>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-zinc-50">Inżynieria emocji</h2>
<p className="mt-4 text-sm text-zinc-400 font-light max-w-2xl">Każdy element został zaprojektowany z myślą o jednym celu: dostarczeniu najczystszych wrażeń z jazdy. Poznaj technologie, które napędzają legendę.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-8 flex flex-col group hover:bg-zinc-900/50 transition-colors">
<div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 mb-6">
<iconify-icon className="text-zinc-300" icon="solar:engine-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-50 mb-3">Silnik typu Boxer</h3>
<p className="text-sm text-zinc-400 font-light flex-grow leading-relaxed">
                        Sześciocylindrowy, podwójnie doładowany silnik umieszczony za tylną osią. Charakterystyczny dźwięk i błyskawiczna reakcja na gaz to jego znaki rozpoznawcze.
                    </p>
</div>

<div className="relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-8 flex flex-col group hover:bg-zinc-900/50 transition-colors">
<div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 mb-6">
<iconify-icon className="text-zinc-300" icon="solar:steering-wheel-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-50 mb-3">Dynamika jazdy</h3>
<p className="text-sm text-zinc-400 font-light flex-grow leading-relaxed">
                        System Porsche Active Suspension Management (PASM) i opcjonalna skrętna tylna oś zapewniają niespotykaną zwinność w zakrętach i stabilność przy dużych prędkościach.
                    </p>
</div>

<div className="md:col-span-1 md:row-span-2 relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900 min-h-[300px] md:min-h-0 group">
<img alt="Wnętrze Porsche" className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex items-center gap-2 mb-3 text-zinc-300">
<iconify-icon icon="solar:sofa-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">Kokpit</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-50">Skupienie na kierowcy</h3>
<p className="mt-2 text-sm text-zinc-400 font-light">Analogowy obrotomierz w centrum uwagi, otoczony nowoczesnymi, cyfrowymi wskaźnikami.</p>
</div>
</div>

<div className="md:col-span-2 relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:bg-zinc-900/50 transition-colors">
<div className="flex-1">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-zinc-500" icon="solar:wind-linear" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-50">Aktywna aerodynamika</h3>
</div>
<p className="text-sm text-zinc-400 font-light leading-relaxed max-w-md">
                            Inteligentne klapy powietrza z przodu i adaptacyjny tylny spojler płynnie reagują na sytuację na drodze, optymalizując chłodzenie i docisk.
                        </p>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-zinc-800 px-5 py-2.5 text-xs font-medium text-zinc-50 hover:bg-zinc-700 transition-colors shrink-0" href="#">
                        Szczegóły aerodynamiki
                    </a>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-800/50 bg-zinc-950 pt-16 pb-8 mt-auto">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
<div>
<div className="text-xl font-medium tracking-tighter uppercase text-zinc-400 cursor-default mb-2">
                        P R S C H
                    </div>
<p className="text-xs text-zinc-600 font-light max-w-xs">There is no substitute. Projekt koncepcyjny dla celów demonstracyjnych.</p>
</div>
<div className="flex flex-wrap gap-8 text-sm text-zinc-500 font-light">
<div className="flex flex-col gap-3">
<a className="hover:text-zinc-300 transition-colors" href="#">Prywatność</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Regulamin</a>
</div>
<div className="flex flex-col gap-3">
<a className="hover:text-zinc-300 transition-colors" href="#">Wsparcie</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Kontakt</a>
</div>
<div className="flex gap-4">
<a className="text-zinc-600 hover:text-zinc-300 transition-colors" href="#">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-zinc-300 transition-colors" href="#">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-zinc-800/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600 font-light">
                    © 2024 Concept UI. Marka i logotypy są własnością Porsche AG.
                </p>
<div className="flex items-center gap-2 text-xs text-zinc-600 font-light">
                    Projekt w stylu minimalistycznym
                </div>
</div>
</div>
</footer>

    </>
  );
}
