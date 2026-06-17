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
      

<div className="pointer-events-none fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="pointer-events-none fixed left-0 right-0 top-0 z-[-1] h-[500px] bg-gradient-to-b from-zinc-900/50 to-transparent"></div>

<nav className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl">
<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
<div className="text-xl font-semibold tracking-tighter text-white">911</div>
<div className="hidden items-center space-x-8 md:flex">
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-white" href="#">Koncepcja</a>
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-white" href="#">Osiągi</a>
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-white" href="#">Design</a>
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-white" href="#">Historia</a>
</div>
<button className="rounded-full bg-white px-4 py-2 text-xs font-medium text-zinc-950 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform hover:scale-105 hover:bg-zinc-100">
                Konfigurator
            </button>
</div>
</nav>

<section className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 md:pb-32 md:pt-40">
<div className="flex flex-col items-center text-center">
<div className="mb-6 inline-flex items-center rounded-full border border-zinc-800/80 bg-zinc-900/30 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm">
<iconify-icon className="mr-2 text-zinc-400" icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Nowa generacja 992.2
            </div>
<h1 className="text-5xl font-semibold tracking-tighter text-white md:text-7xl lg:text-8xl">
                Kształt <span className="text-zinc-500">osiągów.</span>
</h1>
<p className="mt-8 max-w-2xl text-base font-normal leading-relaxed text-zinc-400 md:text-lg">
                Sylwetka, która od dziesięcioleci definiuje samochód sportowy. Sześciocylindrowy silnik typu bokser umieszczony z tyłu, stanowiący nieprzerwane bicie serca ikony. Inżynieria doprowadzona do perfekcji.
            </p>
<div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
<a className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200" href="#">
                    Odkryj modele
                </a>
<a className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-800 bg-transparent px-6 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white" href="#">
                    Umów jazdę próbną
                    <iconify-icon className="ml-2 text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div className="mt-20 overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/20 ring-1 ring-white/10 backdrop-blur-sm">
<div className="relative aspect-video w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/40 via-zinc-950 to-zinc-950">
<div className="absolute inset-0 flex items-center justify-center opacity-30">

<div className="relative h-1/3 w-2/3">
<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent"></div>
<div className="absolute bottom-0 left-1/4 right-1/4 h-32 rounded-t-full border-t border-zinc-400 opacity-50 blur-sm"></div>
<div className="absolute bottom-4 left-1/3 right-1/3 h-16 rounded-t-full border-t border-zinc-300 opacity-80 blur-[2px]"></div>
</div>
</div>

<div className="absolute bottom-6 left-6 text-xs text-zinc-500">
<div className="font-medium tracking-tight text-zinc-400">Architektura</div>
<div>Silnik tylny / Napęd RWD lub AWD</div>
</div>
<div className="absolute bottom-6 right-6 text-right text-xs text-zinc-500">
<div className="font-medium tracking-tight text-zinc-400">Przyspieszenie</div>
<div>0-100 km/h w 3.9s (Carrera)</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-zinc-950/50 px-6 py-24 backdrop-blur-sm">
<div className="mx-auto max-w-6xl">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white md:text-5xl">DNA konstrukcji.</h2>
<p className="mt-4 max-w-xl text-base text-zinc-400">Zasady, które pozostały niezmienne od 1963 roku, połączone z technologią jutra.</p>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">

<div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/40 p-8 transition-colors hover:bg-zinc-900/60">
<div className="absolute right-0 top-0 -mr-4 -mt-4 h-32 w-32 rounded-full bg-zinc-800/20 blur-3xl transition-opacity group-hover:opacity-100"></div>
<div className="mb-8 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-zinc-950 text-zinc-300 shadow-sm">
<iconify-icon className="text-xl" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="mb-2 text-xl font-medium tracking-tight text-zinc-100">Serce typu Boxer</h3>
<p className="text-sm leading-relaxed text-zinc-400">Tradycyjnie umieszczony z tyłu, przeciwsobny silnik sześciocylindrowy. Oferuje niezwykle niski środek ciężkości, doskonałą trakcję i dźwięk, którego nie da się pomylić z niczym innym.</p>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/40 p-8 transition-colors hover:bg-zinc-900/60">
<div className="absolute right-0 top-0 -mr-4 -mt-4 h-32 w-32 rounded-full bg-zinc-800/20 blur-3xl transition-opacity group-hover:opacity-100"></div>
<div className="mb-8 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-zinc-950 text-zinc-300 shadow-sm">
<iconify-icon className="text-xl" icon="solar:wind-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="mb-2 text-xl font-medium tracking-tight text-zinc-100">Aktywna Aerodynamika</h3>
<p className="text-sm leading-relaxed text-zinc-400">System PAA (Porsche Active Aerodynamics) z adaptacyjnym tylnym spojlerem i aktywnymi klapami powietrza chłodzącego. Optymalizuje docisk w zakrętach i zmniejsza opór na prostych.</p>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/40 p-8 transition-colors hover:bg-zinc-900/60">
<div className="absolute right-0 top-0 -mr-4 -mt-4 h-32 w-32 rounded-full bg-zinc-800/20 blur-3xl transition-opacity group-hover:opacity-100"></div>
<div className="mb-8 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-zinc-950 text-zinc-300 shadow-sm">
<iconify-icon className="text-xl" icon="solar:ruler-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="mb-2 text-xl font-medium tracking-tight text-zinc-100">Precyzja prowadzenia</h3>
<p className="text-sm leading-relaxed text-zinc-400">Skrętna tylna oś, opcjonalny system stabilizacji przechyłów (PDCC) oraz udoskonalone zawieszenie PASM zapewniają niespotykaną zwinność i stabilność przy wysokich prędkościach.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden px-6 py-24">
<div className="mx-auto max-w-6xl">
<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
<div className="order-2 lg:order-1">
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col gap-4">
<div className="h-48 rounded-2xl border border-white/5 bg-zinc-900/50 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/30 to-zinc-900/10"></div>
<div className="h-64 rounded-2xl border border-white/5 bg-zinc-900/50 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-800/30 to-zinc-900/10"></div>
</div>
<div className="mt-12 flex flex-col gap-4">
<div className="h-64 rounded-2xl border border-white/5 bg-zinc-900/50 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-zinc-800/30 to-zinc-900/10 flex items-center justify-center">
<iconify-icon className="text-4xl text-zinc-700" icon="solar:tuning-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="h-48 rounded-2xl border border-white/5 bg-zinc-900/50 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-zinc-800/30 to-zinc-900/10"></div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="mb-4 inline-flex items-center text-xs font-medium text-zinc-500">
<span className="mr-2 h-px w-6 bg-zinc-700"></span>
                        Ewolucja formy
                    </div>
<h2 className="mb-6 text-3xl font-medium tracking-tight text-white md:text-5xl">Forma podąża <br/> za funkcją.</h2>
<p className="mb-8 text-base text-zinc-400">
                        Design 911 to ciągła ewolucja. Opadająca linia dachu ("Flyline"), wyraźnie zarysowane błotniki nadające muskularny wygląd i charakterystyczne okrągłe reflektory to elementy, które natychmiast zdradzają jego tożsamość. Wnętrze to harmonijne połączenie analogowej precyzji z cyfrową innowacją.
                    </p>
<ul className="space-y-4">
<li className="flex items-start text-sm text-zinc-300">
<iconify-icon className="mr-3 mt-0.5 text-zinc-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span><strong className="font-medium text-zinc-100">Reflektory Matrix LED</strong> – precyzyjne oświetlenie adaptacyjne ze zintegrowanymi 4-punktowymi światłami do jazdy dziennej.</span>
</li>
<li className="flex items-start text-sm text-zinc-300">
<iconify-icon className="mr-3 mt-0.5 text-zinc-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span><strong className="font-medium text-zinc-100">Ciągły pas świetlny</strong> – zintegrowany z tyłu, podkreślający szerokość pojazdu z trójwymiarowym napisem.</span>
</li>
<li className="flex items-start text-sm text-zinc-300">
<iconify-icon className="mr-3 mt-0.5 text-zinc-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span><strong className="font-medium text-zinc-100">Advanced Cockpit</strong> – centralny obrotomierz analogowy otoczony dwoma bezramkowymi wyświetlaczami o wysokiej rozdzielczości.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8">
<div className="mx-auto max-w-6xl px-6">
<div className="grid grid-cols-1 gap-12 md:grid-cols-4">
<div className="md:col-span-2">
<div className="mb-4 text-2xl font-semibold tracking-tighter text-white">911</div>
<p className="max-w-xs text-xs leading-relaxed text-zinc-500">
                        Nie ma substytutu. Prezentowane modele, wyposażenie i dane techniczne mogą ulec zmianie.
                    </p>
</div>
<div>
<h4 className="mb-4 text-xs font-medium tracking-tight text-white">Modele</h4>
<ul className="space-y-2">
<li><a className="text-xs text-zinc-500 transition-colors hover:text-white" href="#">Carrera</a></li>
<li><a className="text-xs text-zinc-500 transition-colors hover:text-white" href="#">Targa</a></li>
<li><a className="text-xs text-zinc-500 transition-colors hover:text-white" href="#">Turbo</a></li>
<li><a className="text-xs text-zinc-500 transition-colors hover:text-white" href="#">GT3</a></li>
</ul>
</div>
<div>
<h4 className="mb-4 text-xs font-medium tracking-tight text-white">Firma</h4>
<ul className="space-y-2">
<li><a className="text-xs text-zinc-500 transition-colors hover:text-white" href="#">Centra Porsche</a></li>
<li><a className="text-xs text-zinc-500 transition-colors hover:text-white" href="#">Kariera</a></li>
<li><a className="text-xs text-zinc-500 transition-colors hover:text-white" href="#">Kontakt</a></li>
<li><a className="text-xs text-zinc-500 transition-colors hover:text-white" href="#">Polityka prywatności</a></li>
</ul>
</div>
</div>
<div className="mt-16 flex flex-col items-center justify-between border-t border-white/5 pt-8 sm:flex-row">
<p className="text-xs text-zinc-600">© 2024 Koncepcja Projektowa. Wszelkie prawa zastrzeżone.</p>
<div className="mt-4 flex space-x-4 sm:mt-0">
<a className="text-zinc-500 transition-colors hover:text-white" href="#">
<iconify-icon className="text-lg" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
