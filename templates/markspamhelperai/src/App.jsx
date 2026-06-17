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



        lucide.createIcons();
        document.getElementById("year").textContent = new Date().getFullYear();
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]"></div>
<div className="absolute inset-y-0 left-[25%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[50%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[75%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
</div>

<header className="relative z-20 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
<a aria-label="Mark Spam Helper" className="inline-flex items-center gap-3 text-white hover:text-white/80 transition-colors" href="#">
<i className="w-6 h-6 text-blue-400" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="font-medium text-lg tracking-tight">Mark Spam Helper</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-base text-white/70 hover:text-white transition-colors font-light" href="#how-it-works">Kuidas see töötab</a>
<a className="text-base text-white/70 hover:text-white transition-colors font-light" href="#examples">Mida me leiame</a>
</nav>
</div>
</header>

<main className="relative z-10 flex flex-col items-center w-full">

<section className="w-full max-w-7xl mx-auto px-6 pt-24 pb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="flex flex-col items-start space-y-8">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
<i className="w-5 h-5 text-blue-400" data-lucide="wand-2" strokeWidth="1.5"></i>
<span className="text-base font-light text-white/80">AI abiline sinu postkastile</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight">
                        Hoia oma postkast puhtana
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/50">Mark Spam Helperiga</span>
</h1>
<p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl">
                        AI analüüsib automaatselt sissetulevaid kirju, leiab rämpsposti ja mittevajalikud uudiskirjad ning küsib enne nende kustutamist luba. Sinu postkast — sinu meelerahu.
                    </p>
</div>
<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl flex items-center justify-center p-8">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent mix-blend-overlay z-10"></div>

<img alt="Puhas postkast" className="w-full h-full object-cover grayscale opacity-60 mix-blend-lighten absolute inset-0" src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 w-48 h-48 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl transform -rotate-6">
<i className="w-20 h-20 text-white/80" data-lucide="inbox" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#050505] border-y border-white/5 py-32 relative" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
<i className="w-5 h-5 text-blue-400" data-lucide="cpu" strokeWidth="1.5"></i>
<span className="text-base font-light text-white/80">Kuidas see töötab</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ask Gemini samm teeb järgmist</h2>
<p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
                        AI (Gemini) loeb sissetuleva meili sisu (teema ja keha) ja analüüsib seda sinu antud juhiste järgi. Antud juhul:
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
<div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-4">
<div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-2">
<i className="w-6 h-6 text-blue-400" data-lucide="search" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight">Otsustab</h3>
<p className="text-lg text-white/60 font-light leading-relaxed">
                            Analüüsib sisu ja otsustab, kas meil on prügi, rämpspost, promotsioon või oluline kiri.
                        </p>
</div>
<div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-4">
<div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-2">
<i className="w-6 h-6 text-purple-400" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight">Koostab</h3>
<p className="text-lg text-white/60 font-light leading-relaxed">
                            Koostab lühikese ja selge kokkuvõtte ning täpse nimekirja kõikidest kahtlastest meilidest.
                        </p>
</div>
<div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-4">
<div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-2">
<i className="w-6 h-6 text-emerald-400" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight">Kirjutab</h3>
<p className="text-lg text-white/60 font-light leading-relaxed">
                            Saadab sõnumi Google Chat'i: „Siin on kahtlased meilid. Kas kustutame? (jah/ei)“
                        </p>
</div>
</div>
<div className="p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 flex flex-col md:flex-row gap-6 items-center">
<div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
<i className="w-8 h-8 text-blue-400" data-lucide="lightbulb" strokeWidth="1.5"></i>
</div>
<p className="text-lg md:text-xl text-blue-100/80 font-light leading-relaxed">
<strong className="font-medium text-white">Lihtsalt öeldes:</strong> AI vaatab meili üle ja annab sulle nutika arvamuse, mida sellega teha, ilma et sa peaksid ise iga kirja käsitsi kontrollima. See on flow keskmine "mõtlev" osa.
                    </p>
</div>
</div>
</section>

<section className="w-full py-32 relative" id="examples">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
<i className="w-5 h-5 text-blue-400" data-lucide="target" strokeWidth="1.5"></i>
<span className="text-base font-light text-white/80">Mida me leiame</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                        Millega meie AI suurepäraselt hakkama saab
                    </h2>
<p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
                        Algoritmid on õpetatud eristama kasulikke teavitusi infomürast, millega on aeg hüvasti jätta.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between h-80">
<i className="w-10 h-10 text-rose-400" data-lucide="tag" strokeWidth="1.5"></i>
<div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Agressiivne turundus</h3>
<p className="text-base text-white/60 font-light leading-relaxed">
                                "90% soodustus ainult täna!" saadetakse prügikasti koos automaatse uudiskirjast loobumisega.
                            </p>
</div>
</div>
<div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between h-80">
<i className="w-10 h-10 text-blue-400" data-lucide="user-x" strokeWidth="1.5"></i>
<div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Külm müük</h3>
<p className="text-base text-white/60 font-light leading-relaxed">
                                "Unikaalne B2B pakkumine sinu ärile" isoleeritakse ja pakutakse kustutamiseks.
                            </p>
</div>
</div>
<div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between h-80">
<i className="w-10 h-10 text-amber-400" data-lucide="clock" strokeWidth="1.5"></i>
<div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Aegunud uudiskirjad</h3>
<p className="text-base text-white/60 font-light leading-relaxed">
                                Teenuste uudised, mida sa pole aasta aega kasutanud. AI leiab need ja aitab loobuda.
                            </p>
</div>
</div>
<div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between h-80">
<i className="w-10 h-10 text-emerald-400" data-lucide="shield-alert" strokeWidth="1.5"></i>
<div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Andmepüük</h3>
<p className="text-base text-white/60 font-light leading-relaxed">
                                Kahtlased lingid, petukirjad ja "loterii võidud" blokeeritakse koheselt.
                            </p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#020617] relative z-20">
<div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start justify-between">
<div>
<div className="flex items-center gap-3 text-white mb-6">
<i className="w-6 h-6 text-blue-400" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="font-medium text-xl tracking-tight">Mark Spam Helper</span>
</div>
<p className="text-base text-white/50 font-light leading-relaxed max-w-md">
                        Nutikas abiline postkasti puhastamiseks AI abil. Vabane rämpspostist, uudiskirjadest ja infomürast kergelt.
                    </p>
</div>
<div className="flex flex-col md:items-end justify-start">
<div className="flex flex-col gap-4">
<a className="text-base text-white/60 hover:text-white transition-colors font-light md:text-right" href="#how-it-works">Kuidas see töötab</a>
<a className="text-base text-white/60 hover:text-white transition-colors font-light md:text-right" href="#examples">Mida me leiame</a>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-base text-white/40 font-light">
                    © <span id="year"></span> Mark Spam Helper.
                </p>
<div className="flex items-center gap-2 text-base text-white/40 font-light">
<span>Loodud informatiivse projektina</span>
<i className="w-4 h-4 ml-2" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
</div>
</div>
</footer>



    </>
  );
}
