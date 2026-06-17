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



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
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
      



<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

<a className="flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
<i className="h-4 w-4" data-lucide="pen-tool"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">ausmalen.com</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#categories">Kategorien</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#blog">Blog</a>
<a className="flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 transition-colors hover:bg-indigo-100" href="#kidmode">
<i className="h-3 w-3" data-lucide="baby"></i> Kindermodus
                </a>
</nav>

<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-900 hover:text-indigo-600 hidden sm:block" href="#">Login</a>
<button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-colors">
                    Mein Konto
                </button>

<button className="md:hidden text-slate-500">
<i className="h-6 w-6" data-lucide="menu"></i>
</button>
</div>
</div>
</header>



<main>

<section className="relative overflow-hidden pt-16 pb-24 lg:pt-32">
<div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
<div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2"></span> Neu: Über 50 neue Drachen-Bilder
                </div>
<h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                    Kostenlose Ausmalbilder für <br className="hidden sm:block"/>
<span className="text-indigo-600">kreative Kinder</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
                    Entdecke tausende Malvorlagen in über 500 Kategorien. Einfach suchen, ausdrucken und der Fantasie freien Lauf lassen. Ohne Anmeldung startklar.
                </p>

<div className="mx-auto mt-10 max-w-lg relative">
<div className="relative flex items-center w-full h-12 rounded-xl border border-slate-200 bg-white px-3 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
<i className="h-5 w-5 text-slate-400 ml-2" data-lucide="search"></i>
<input className="peer h-full w-full border-none bg-transparent px-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0" placeholder="Was möchtest du ausmalen? (z.B. Einhorn, Feuerwehr)" type="text"/>
<button className="rounded-lg bg-slate-100 p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50/50 py-20" id="categories">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-12 flex items-end justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Beliebte Kategorien</h2>
<p className="mt-2 text-slate-500">Diese Themen werden aktuell am häufigsten gedruckt.</p>
</div>
<a className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-700 sm:block" href="#">Alle Kategorien ansehen →</a>
</div>


<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg">
<div className="flex items-center justify-between">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
<i className="h-5 w-5" data-lucide="flame"></i>
</div>
<span className="text-xs font-medium text-slate-400">24 Bilder</span>
</div>
<h3 className="mt-4 text-lg font-medium text-slate-900">Feuerwehr &amp; Helden</h3>
<p className="mt-1 text-sm text-slate-500">Einsatzwagen, Feuerwachen und mutige Helfer.</p>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors" href="#">
                            Zur Kategorie
                        </a>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg">
<div className="flex items-center justify-between">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100 text-pink-600">
<i className="h-5 w-5" data-lucide="sparkles"></i>
</div>
<span className="text-xs font-medium text-slate-400">42 Bilder</span>
</div>
<h3 className="mt-4 text-lg font-medium text-slate-900">Fabelwesen &amp; Einhörner</h3>
<p className="mt-1 text-sm text-slate-500">Magische Welten zum Träumen und Ausmalen.</p>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors" href="#">
                            Zur Kategorie
                        </a>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg">
<div className="flex items-center justify-between">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
<i className="h-5 w-5" data-lucide="paw-print"></i>
</div>
<span className="text-xs font-medium text-slate-400">18 Bilder</span>
</div>
<h3 className="mt-4 text-lg font-medium text-slate-900">Tiere des Waldes</h3>
<p className="mt-1 text-sm text-slate-500">Füchse, Eulen und Bären in der Natur.</p>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors" href="#">
                            Zur Kategorie
                        </a>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg">
<div className="flex items-center justify-between">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
<i className="h-5 w-5" data-lucide="rocket"></i>
</div>
<span className="text-xs font-medium text-slate-400">12 Bilder</span>
</div>
<h3 className="mt-4 text-lg font-medium text-slate-900">Weltraum &amp; Raketen</h3>
<p className="mt-1 text-sm text-slate-500">Astronauten und fremde Planeten.</p>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors" href="#">
                            Zur Kategorie
                        </a>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg">
<div className="flex items-center justify-between">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">
<i className="h-5 w-5" data-lucide="truck"></i>
</div>
<span className="text-xs font-medium text-slate-400">30 Bilder</span>
</div>
<h3 className="mt-4 text-lg font-medium text-slate-900">Baustelle &amp; Bagger</h3>
<p className="mt-1 text-sm text-slate-500">Große Maschinen bei der Arbeit.</p>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors" href="#">
                            Zur Kategorie
                        </a>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg">
<div className="flex items-center justify-between">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
<i className="h-5 w-5" data-lucide="castle"></i>
</div>
<span className="text-xs font-medium text-slate-400">15 Bilder</span>
</div>
<h3 className="mt-4 text-lg font-medium text-slate-900">Märchenschlösser</h3>
<p className="mt-1 text-sm text-slate-500">Könige, Königinnen und alte Burgen.</p>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors" href="#">
                            Zur Kategorie
                        </a>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-white py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 shadow-2xl sm:px-12 sm:py-20 lg:flex lg:items-center lg:justify-between">
<div className="relative z-10 lg:w-1/2">
<div className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 mb-6">
<i className="mr-2 h-3 w-3" data-lucide="wand-2"></i> Neu: KI-Funktion
                        </div>
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                            Dein Kind als Held im Ausmalbild?
                        </h2>
<p className="mt-4 text-lg text-slate-400">
                            Lade ein Foto hoch und unsere KI erstellt ein personalisiertes Ausmalbild, in dem dein Kind die Hauptrolle spielt.
                        </p>
<div className="mt-8 flex gap-4">

<button className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
                                Mehr erfahren
                            </button>
</div>
</div>

<div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-10">
<div className="grid grid-cols-2 gap-4 opacity-50">
<div className="aspect-[3/4] rounded-xl bg-slate-800"></div>
<div className="aspect-[3/4] translate-y-8 rounded-xl bg-slate-700"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">So funktioniert‘s</h2>
</div>
<div className="grid grid-cols-1 gap-12 md:grid-cols-3">
<div className="flex flex-col items-center text-center">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm text-indigo-600">
<i className="h-8 w-8" data-lucide="layers"></i>
</div>
<h3 className="text-lg font-medium text-slate-900">1. Kategorie wählen</h3>
<p className="mt-2 text-sm text-slate-500">Stöbere durch unsere riesige Sammlung und finde das perfekte Motiv.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm text-indigo-600">
<i className="h-8 w-8" data-lucide="check-circle"></i>
</div>
<h3 className="text-lg font-medium text-slate-900">2. Bild aussuchen</h3>
<p className="mt-2 text-sm text-slate-500">Wähle dein Lieblingsbild. Nutze Filter für Schwierigkeit oder Tinte.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm text-indigo-600">
<i className="h-8 w-8" data-lucide="printer"></i>
</div>
<h3 className="text-lg font-medium text-slate-900">3. Drucken &amp; Malen</h3>
<p className="mt-2 text-sm text-slate-500">Lade das PDF herunter oder drucke es direkt aus. Viel Spaß!</p>
</div>
</div>
</div>
</section>
</main>



<div className="bg-stripes py-8 text-center text-xs text-slate-400 font-mono bg-slate-200 border-y border-slate-300">
        --- ANSICHT: KATEGORIE SEITE (/ausmalbild-drache) ---
    </div>



<section className="bg-white min-h-screen pb-20">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

<div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
<a className="hover:text-slate-900" href="#">Startseite</a>
<i className="h-3 w-3" data-lucide="chevron-right"></i>
<a className="hover:text-slate-900" href="#">Tiere</a>
<i className="h-3 w-3" data-lucide="chevron-right"></i>
<span className="font-medium text-slate-900">Drachen</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

<div className="lg:col-span-3">
<div className="mb-8">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900">Ausmalbilder Drachen</h1>
<p className="mt-4 text-slate-500 max-w-2xl">
                            Hier findest du gefährliche Feuerdrachen, süße Babydrachen und fliegende Ungeheuer. Perfekt für kleine Ritter und Prinzessinnen, die gerne malen.
                        </p>
</div>

<div className="mb-8 flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">

<div className="flex items-center gap-2">
<span className="text-xs font-medium uppercase tracking-wider text-slate-400">Level:</span>
<div className="flex rounded-lg bg-white p-1 shadow-sm border border-slate-200">
<button className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-900">Alle</button>
<button className="rounded-md px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900">Einfach</button>
<button className="rounded-md px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900">Mittel</button>
<button className="rounded-md px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900">Schwer</button>
</div>
</div>

<label className="flex cursor-pointer items-center gap-3">
<span className="text-sm font-medium text-slate-700">Eco Modus (Linien dünner)</span>
<div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-300 transition-all duration-300" id="eco-mode" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-300 cursor-pointer" htmlFor="eco-mode"></label>
</div>
</label>
</div>


<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-3">

<div className="group relative flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">

<div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-xl bg-slate-100">

<div className="absolute left-2 top-2 rounded bg-white/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-green-600 backdrop-blur-sm">
                                    Einfach
                                </div>

<button className="absolute right-2 top-2 rounded-full bg-white/90 p-1.5 text-slate-400 backdrop-blur-sm transition hover:text-red-500">
<i className="h-4 w-4" data-lucide="heart"></i>
</button>

<div className="flex h-full w-full items-center justify-center text-slate-300">
<i className="h-12 w-12 opacity-50" data-lucide="image"></i>
</div>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-slate-900">Fliegender Drache</h3>
<div className="mt-3 flex gap-2">
<button className="flex-1 rounded-md bg-slate-900 py-1.5 text-xs font-medium text-white transition hover:bg-slate-800">
                                        Drucken
                                    </button>
</div>
</div>
</div>

<div className="group relative flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
<div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-xl bg-slate-100">
<div className="absolute left-2 top-2 rounded bg-white/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-yellow-600 backdrop-blur-sm">
                                    Mittel
                                </div>
<button className="absolute right-2 top-2 rounded-full bg-white/90 p-1.5 text-slate-400 backdrop-blur-sm transition hover:text-red-500">
<i className="h-4 w-4" data-lucide="heart"></i>
</button>
<div className="flex h-full w-full items-center justify-center text-slate-300">
<i className="h-12 w-12 opacity-50" data-lucide="image"></i>
</div>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-slate-900">Drache auf Burg</h3>
<div className="mt-3 flex gap-2">
<button className="flex-1 rounded-md bg-slate-900 py-1.5 text-xs font-medium text-white transition hover:bg-slate-800">
                                        Drucken
                                    </button>
</div>
</div>
</div>

<div className="group relative flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
<div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-xl bg-slate-100">
<div className="absolute left-2 top-2 rounded bg-white/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-red-600 backdrop-blur-sm">
                                    Schwer
                                </div>
<button className="absolute right-2 top-2 rounded-full bg-white/90 p-1.5 text-slate-400 backdrop-blur-sm transition hover:text-red-500">
<i className="h-4 w-4" data-lucide="heart"></i>
</button>
<div className="flex h-full w-full items-center justify-center text-slate-300">
<i className="h-12 w-12 opacity-50" data-lucide="image"></i>
</div>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-slate-900">Drachenschatz</h3>
<div className="mt-3 flex gap-2">
<button className="flex-1 rounded-md bg-slate-900 py-1.5 text-xs font-medium text-white transition hover:bg-slate-800">
                                        Drucken
                                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6 lg:col-span-1">

<div className="rounded-xl border border-indigo-100 bg-indigo-50 p-5">
<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
<i className="h-5 w-5" data-lucide="bot"></i>
</div>
<h3 className="text-sm font-semibold text-indigo-900">Nicht das richtige dabei?</h3>
<p className="mt-1 text-xs text-indigo-700">Erstelle dein eigenes Drachen-Bild mit unserer KI.</p>

<button className="mt-4 w-full rounded-lg bg-indigo-600 py-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-700">
                            Jetzt generieren
                        </button>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900">Portrait-Upload</h3>
<p className="mt-1 text-xs text-slate-500">Dein Kind reitet auf dem Drachen? Lade ein Foto hoch.</p>
<button className="mt-4 w-full rounded-lg border border-slate-200 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50">
                            Foto hochladen
                        </button>
</div>

<div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5">
<span className="absolute top-2 right-2 text-[10px] uppercase text-slate-300 border border-slate-100 px-1 rounded">Anzeige</span>
<h3 className="text-sm font-semibold text-slate-900">Drachen-Stifte</h3>
<div className="my-3 h-24 w-full rounded bg-slate-100"></div>
<button className="w-full text-xs text-indigo-600 font-medium hover:underline">
                            Bei Amazon ansehen →
                        </button>
</div>
</div>
</div>
</div>
</section>



<div className="bg-stripes py-8 text-center text-xs text-slate-400 font-mono bg-slate-200 border-y border-slate-300">
        --- ANSICHT: BILD-DETAIL (Modal oder Seite) ---
    </div>



<section className="bg-slate-50 py-20">
<div className="mx-auto max-w-5xl px-4 sm:px-6">
<div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-900/5">
<div className="flex flex-col md:flex-row">

<div className="relative bg-slate-100 md:w-2/3 p-8 flex items-center justify-center">
<div className="aspect-[3/4] w-full max-w-sm bg-white shadow-sm flex items-center justify-center border border-slate-200">
<i className="h-16 w-16 text-slate-300" data-lucide="image"></i>
</div>

<div className="absolute bottom-4 left-0 right-0 text-center">
<span className="text-[10px] text-slate-400">Sponsored by Faber-Castell</span>
</div>
</div>

<div className="flex flex-col p-8 md:w-1/3 border-l border-slate-100">
<div className="flex items-start justify-between">
<div>
<h1 className="text-xl font-semibold text-slate-900">Ritterburg</h1>
<a className="text-sm text-indigo-600 hover:underline" href="#">Kategorie: Mittelalter</a>
</div>

<button className="group rounded-full border border-slate-200 p-2 hover:bg-red-50 hover:border-red-200">
<i className="h-5 w-5 text-slate-400 group-hover:text-red-500 transition-colors" data-lucide="heart"></i>
</button>
</div>
<div className="mt-6 space-y-4">

<div className="flex items-center gap-3 text-sm text-slate-600">
<i className="h-4 w-4" data-lucide="bar-chart"></i>
<span>Schwierigkeit: <strong>Mittel</strong></span>
</div>

<div className="flex items-center gap-3 text-sm text-slate-600">
<i className="h-4 w-4 text-green-600" data-lucide="leaf"></i>
<span>Eco-Friendly (Dünne Linien)</span>
</div>
</div>
<div className="mt-auto space-y-3 pt-8">
<button className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
<i className="h-4 w-4" data-lucide="printer"></i>
                                Jetzt drucken
                            </button>
<button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
<i className="h-4 w-4" data-lucide="download"></i>
                                Als PDF speichern
                            </button>
</div>
</div>
</div>
</div>

<div className="mt-8 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 p-6 text-white shadow-lg">
<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
<div>
<h4 className="text-lg font-semibold">Premium Ausmalen</h4>
<p className="text-sm text-indigo-100">Erhalte 10 personalisierte KI-Bilder pro Monat.</p>
</div>

<button className="whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50">
                        Jetzt abonnieren
                    </button>
</div>
</div>
</div>
</section>



<div className="bg-stripes py-8 text-center text-xs text-slate-400 font-mono bg-slate-200 border-y border-slate-300">
        --- ANSICHT: KINDERMODUS (/kid-mode) ---
    </div>



<section className="min-h-screen bg-sky-100 pb-20 font-sans" id="kidmode">

<div className="sticky top-0 z-40 flex items-center justify-between bg-white/90 p-4 px-6 shadow-sm backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="rounded-full bg-yellow-400 p-2">
<i className="h-6 w-6 text-yellow-900" data-lucide="smile"></i>
</div>
<span className="text-xl font-bold text-slate-800 tracking-tight">Kindermodus</span>
</div>
<div className="flex gap-4">
<button className="rounded-full bg-pink-500 px-6 py-2 text-lg font-bold text-white shadow-sm hover:bg-pink-600 hover:scale-105 transition-transform">
                    ❤️ Meine Bilder
                </button>
<button className="rounded-full border-2 border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-100">
<i className="inline mr-1 h-3 w-3" data-lucide="lock"></i> Beenden
                </button>
</div>
</div>

<div className="mx-auto max-w-7xl px-4 py-8">
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.05)] border-4 border-transparent hover:border-yellow-400 transition-colors cursor-pointer">
<div className="aspect-square bg-slate-100 flex items-center justify-center relative">

<button className="absolute top-4 right-4 h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-300 hover:text-red-500 hover:scale-110 transition">
<i className="h-8 w-8 fill-current" data-lucide="heart"></i>
</button>
<i className="h-24 w-24 text-slate-300 opacity-50" data-lucide="image"></i>
</div>
<div className="p-6 text-center">
<h3 className="text-2xl font-bold text-slate-800">Lustiger Hund</h3>
</div>
</div>

<div className="overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.05)] border-4 border-transparent hover:border-yellow-400 transition-colors cursor-pointer">
<div className="aspect-square bg-slate-100 flex items-center justify-center relative">
<button className="absolute top-4 right-4 h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-300 hover:text-red-500 hover:scale-110 transition">
<i className="h-8 w-8" data-lucide="heart"></i>
</button>
<i className="h-24 w-24 text-slate-300 opacity-50" data-lucide="image"></i>
</div>
<div className="p-6 text-center">
<h3 className="text-2xl font-bold text-slate-800">Schnelles Auto</h3>
</div>
</div>

<div className="overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.05)] border-4 border-transparent hover:border-yellow-400 transition-colors cursor-pointer">
<div className="aspect-square bg-slate-100 flex items-center justify-center relative">
<button className="absolute top-4 right-4 h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-300 hover:text-red-500 hover:scale-110 transition">
<i className="h-8 w-8" data-lucide="heart"></i>
</button>
<i className="h-24 w-24 text-slate-300 opacity-50" data-lucide="image"></i>
</div>
<div className="p-6 text-center">
<h3 className="text-2xl font-bold text-slate-800">Prinzessin</h3>
</div>
</div>
</div>
</div>
</section>



<footer className="border-t border-slate-200 bg-white pt-16 pb-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
<i className="h-4 w-4" data-lucide="pen-tool"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">ausmalen.com</span>
</a>
<p className="max-w-xs text-sm text-slate-500">
                        Kreativer Spaß für die ganze Familie. Kostenlose Ausmalbilder und personalisierte KI-Kunstwerke.
                    </p>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Entdecken</h3>
<ul className="mt-4 space-y-2">
<li><a className="text-sm text-slate-500 hover:text-indigo-600" href="#">Kategorien</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-600" href="#">Beliebteste</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-600" href="#">Neueste</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Rechtliches</h3>
<ul className="mt-4 space-y-2">
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Impressum</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Datenschutz</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Kontakt</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Folge uns</h3>
<ul className="mt-4 space-y-2">
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Newsletter</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Instagram</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Pinterest</a></li>
</ul>
</div>
</div>
<div className="mt-12 border-t border-slate-100 pt-8 text-center">
<p className="text-xs text-slate-400">© 2023 ausmalen.com. Alle Rechte vorbehalten.</p>
</div>
</div>
</footer>



    </>
  );
}
