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
      

<div className="relative h-screen min-h-[700px] w-full overflow-hidden bg-stone-900">

<div className="absolute inset-0 hero-bg scale-105 transition-transform duration-[20s] ease-in-out hover:scale-100"></div>
<div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]"></div>

<nav className="fixed left-4 right-4 top-6 z-50 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-stone-900/60 p-2 pl-6 pr-2 text-white shadow-2xl backdrop-blur-xl transition-all">

<div className="flex items-center gap-3">
<i className="h-6 w-6 text-[#Ddd9c7]" data-lucide="brain-circuit"></i>
<div className="flex flex-col leading-none">
<span className="text-xs font-medium uppercase tracking-wider text-stone-400">Praxis</span>
<span className="font-semibold tracking-tight text-white">Peter Schertenleib</span>
</div>
</div>

<div className="hidden items-center gap-6 md:flex">
<a className="text-sm font-medium text-stone-200 hover:text-white" href="#">Leistungen</a>
<a className="text-sm font-medium text-stone-200 hover:text-white" href="#">Über mich</a>
<a className="text-sm font-medium text-stone-200 hover:text-white" href="#">Konditionen</a>
<a className="text-sm font-medium text-stone-200 hover:text-white" href="#">FAQ</a>
</div>

<div className="flex items-center gap-4">
<button className="flex items-center rounded-full bg-[#C8C2A8] px-5 py-2.5 text-sm font-semibold text-stone-900 transition hover:bg-[#B5AF95]">
                    Jetzt anfragen
                </button>
</div>
</nav>

<div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-12 md:pb-24">
<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-8">

<div className="flex flex-col justify-end lg:col-span-7">

<div className="mb-6 flex flex-wrap gap-3">
<span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
                            Wertschätzend
                        </span>
<span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
                            Individuell
                        </span>
<span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
                            Erfahren
                        </span>
</div>
<h1 className="text-5xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">
                        Praxis für <br/>Homöopathie &amp; <br/>Coaching in Bern
                    </h1>
</div>

<div className="flex flex-col justify-end lg:col-span-5 lg:pb-2">
<p className="mb-8 text-lg font-medium leading-relaxed text-stone-200">
                        Niederschwellige Beratung und Therapie für Menschen auf der Suche nach Balance. Offen, individuell und basierend auf über 30 Jahren Erfahrung in Homöopathie, Familienstellen und seelenzentriertem Coaching.
                    </p>
<div className="flex flex-wrap items-center gap-4">
<button className="inline-flex h-12 items-center rounded-full bg-[#C8C2A8] px-6 text-base font-medium text-stone-900 transition hover:bg-[#B5AF95]">
                            Unverbindlich anfragen
                        </button>
<button className="inline-flex h-12 items-center rounded-full border border-white/20 bg-white/5 px-6 text-base font-medium text-white backdrop-blur-sm transition hover:bg-white/10">
                            Mehr erfahren
                        </button>
</div>
</div>
</div>
</div>
</div>

<main className="mx-auto max-w-7xl px-6 py-24">

<div className="mb-24 grid gap-12 lg:grid-cols-2 lg:gap-20">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
                    Liebe Besucherin, <br/>lieber Besucher
                </h2>
<div className="mt-8 space-y-6 text-lg leading-relaxed text-stone-600">
<p>
                        Ich freue mich über Ihr Interesse an meiner Praxisarbeit. Mein Praxisangebot setzt sich aus verschiedenen therapeutischen Ansätzen zusammen. Meine vier Kernkompetenzen sind <span className="font-semibold text-stone-900">Homöopathie, Familienstellen, seelenzentriertes Coaching und Fasten</span>.
                    </p>
<p>
                        Ich wende diese Methoden einzeln, aber auch in Kombination an. Dabei lasse ich mich ganz durch die Individualität meiner Patienten und deren Bedürfnisse leiten. Als Homöopath behandle ich Sie nach den Gesetzen der Homöopathie, so wie sie Samuel Hahnemann vorgegeben hat.
                    </p>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] overflow-hidden rounded-3xl bg-stone-200">
<img alt="Praxis Atmosphere" className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0" src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>

<div className="absolute -bottom-6 left-6 rounded-2xl bg-white p-6 shadow-xl shadow-stone-200/50 md:-left-6">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F0E9] text-stone-700">
<i className="h-6 w-6" data-lucide="award"></i>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-wide text-stone-400">Erfahrung</p>
<p className="text-lg font-semibold text-stone-900">Über 30 Jahre Praxis</p>
</div>
</div>
</div>
</div>
</div>

<div className="mb-12">
<h3 className="mb-12 text-sm font-semibold uppercase tracking-widest text-stone-400">Meine Angebote</h3>
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

<a className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-900/5 transition hover:shadow-md hover:ring-stone-900/10" href="#">
<div>
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2F0E9] text-stone-700 group-hover:scale-110 transition-transform">
<i className="h-6 w-6" data-lucide="flower-2"></i>
</div>
<h4 className="mb-3 text-xl font-semibold text-stone-900">Homöopathie</h4>
<p className="text-stone-500 leading-relaxed">
                            Die erfolgreiche Anwendung dieser besonderen Heilmethode am Patienten hat bis heute nichts an ihrem Zauber verloren.
                        </p>
</div>
<div className="mt-8 flex items-center text-sm font-medium text-stone-900">
                        Mehr erfahren <i className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-900/5 transition hover:shadow-md hover:ring-stone-900/10" href="#">
<div>
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2F0E9] text-stone-700 group-hover:scale-110 transition-transform">
<i className="h-6 w-6" data-lucide="users"></i>
</div>
<h4 className="mb-3 text-xl font-semibold text-stone-900">Familienstellen</h4>
<p className="text-stone-500 leading-relaxed">
                            Lösen von wiederkehrenden familiären Mustern und Verstrickungen nach den Lehren von Bert Hellinger.
                        </p>
</div>
<div className="mt-8 flex items-center text-sm font-medium text-stone-900">
                        Mehr erfahren <i className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-stone-900 p-8 text-white shadow-xl ring-1 ring-stone-900/5 transition hover:bg-stone-800" href="#">
<div>
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform">
<i className="h-6 w-6" data-lucide="sparkles"></i>
</div>
<h4 className="mb-3 text-xl font-semibold">Seelenzentriertes Coaching</h4>
<p className="text-stone-300 leading-relaxed">
                            Eine hilfreiche Methode, die das Beste und die verborgenen Schätze in jedem Menschen findet.
                        </p>
</div>
<div className="mt-8 flex items-center text-sm font-medium text-[#C8C2A8]">
                        Kostenloses Probecoaching <i className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</div>
</a>
</div>
</div>

<div className="border-t border-stone-200 pt-12">
<p className="max-w-3xl text-base text-stone-500 italic">
<span className="font-semibold text-stone-900 not-italic">Hinweis:</span> Als Naturheilpraktiker und ehemaliger Drogist habe ich die traditionelle europäische Naturheilkunde (TEN) und vor allem die Pflanzenheilkunde tief verinnerlicht. So kommen manchmal auch spagyrische Essenzen zum Einsatz.
            </p>
</div>
</main>
<footer className="bg-stone-100 py-12">
<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
<div className="text-sm font-medium text-stone-500">
                © Praxis Peter Schertenleib
            </div>
<div className="flex gap-6">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900" href="#">Impressum</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900" href="#">Datenschutz</a>
</div>
</div>
</footer>


    </>
  );
}
