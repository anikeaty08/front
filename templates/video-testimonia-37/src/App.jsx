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
      

<header className="absolute inset-x-0 top-0 z-50 border-b border-white/5 bg-zinc-950/50 backdrop-blur-xl">
<nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
<div className="flex lg:flex-1">
<a className="-m-1.5 p-1.5 flex items-center gap-2 group" href="#">
<span className="sr-only">Testimonials.de</span>
<iconify-icon className="text-white w-6 h-6 text-2xl group-hover:scale-110 transition-transform" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg font-medium tracking-tight text-white">testimonials</span>
</a>
</div>
<div className="hidden lg:flex lg:gap-x-12">
<a className="text-sm font-medium leading-6 text-zinc-400 hover:text-white transition-colors" href="#">Referenzen</a>
<a className="text-sm font-medium leading-6 text-zinc-400 hover:text-white transition-colors" href="#">Cases</a>
<a className="text-sm font-medium leading-6 text-zinc-400 hover:text-white transition-colors" href="#">Produktion</a>
</div>
<div className="hidden lg:flex lg:flex-1 lg:justify-end">
<a className="text-sm font-medium leading-6 text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group" href="#">
                    Kunden werden
                    <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</nav>
</header>
<main>

<div className="relative isolate overflow-hidden pt-24 lg:pt-32">

<div className="absolute top-0 right-1/4 -z-10 w-[40rem] h-[40rem] rounded-full bg-zinc-800/30 blur-[120px] mix-blend-screen pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-16 lg:px-8 lg:py-28">

<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-md mb-8">
<span className="flex h-2 w-2 rounded-full bg-zinc-400"></span>
                        Das Original für High-Ticket Testimonials
                    </div>
<h1 className="text-4xl font-medium tracking-tight text-white sm:text-6xl leading-[1.1]">
                        Du bist <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">besser als deine Konkurrenz.</span> Wir machen es sichtbar.
                    </h1>
<p className="mt-6 text-lg leading-relaxed text-zinc-400 max-w-lg">
                        Wir produzieren kinoreife Video-Kundenstimmen, die Unsicherheit in absolute Begeisterung verwandeln. Dominiere deinen Markt mit unerschütterlichem Vertrauen – auch wenn du der teuerste Anbieter bist.
                    </p>
<p className="mt-6 flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-tight">
<iconify-icon className="text-lg" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Exklusiv für Unternehmen ab 500k € Jahresumsatz
                    </p>

<div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto rounded-xl bg-white px-8 py-4 text-center text-sm font-medium text-zinc-950 shadow-lg hover:bg-zinc-100 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group" href="#">
                            Potenzialanalyse starten
                            <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto rounded-xl bg-transparent border border-white/10 px-8 py-4 text-center text-sm font-medium text-white hover:bg-white/5 transition-all duration-300" href="#">
                            Cases ansehen
                        </a>
</div>

<div className="mt-16 pt-8 border-t border-white/10">
<dl className="flex flex-wrap items-center gap-x-12 gap-y-8">
<div className="flex flex-col gap-y-2">
<dt className="text-xs font-medium uppercase tracking-tight text-zinc-500">Mehr Abschlüsse</dt>
<dd className="text-2xl font-medium tracking-tight text-white">+62,5 %</dd>
</div>
<div className="flex flex-col gap-y-2">
<dt className="text-xs font-medium uppercase tracking-tight text-zinc-500">Umsatzsteigerung</dt>
<dd className="text-2xl font-medium tracking-tight text-white">Bis 2x</dd>
</div>
<div className="flex flex-col gap-y-2">
<dt className="text-xs font-medium uppercase tracking-tight text-zinc-500">Produktion</dt>
<dd className="text-2xl font-medium tracking-tight text-white">D-A-CH</dd>
</div>
</dl>
</div>
</div>

<div className="mx-auto mt-20 lg:mt-0 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32 relative">

<div className="absolute -inset-4 bg-gradient-to-tr from-white/5 to-white/10 blur-2xl rounded-3xl z-0"></div>
<div className="relative w-full max-w-3xl lg:max-w-none z-10">
<div className="relative rounded-2xl bg-zinc-900 ring-1 ring-white/10 overflow-hidden shadow-2xl group cursor-pointer aspect-[16/10] sm:w-[36rem] lg:w-[42rem]">

<img alt="Premium Video Production" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105 transform" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-zinc-950/40 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
<iconify-icon className="text-white text-3xl ml-1" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<div className="bg-zinc-950/80 backdrop-blur-md border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm font-medium shadow-xl flex items-center gap-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10">
<iconify-icon className="text-lg text-white" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-400">Performance</span>
<span>Conversion +40%</span>
</div>
</div>
<div className="bg-white/95 backdrop-blur-md text-zinc-950 px-3 py-1.5 rounded-lg text-xs font-medium shadow-xl flex items-center gap-1.5">
<iconify-icon className="text-base text-zinc-950" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                                    Verifizierter Case
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white py-20 border-t border-zinc-200">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<p className="text-center text-sm font-medium tracking-tight text-zinc-500 mb-10 uppercase">Trusted by 500+ Industry Leaders</p>
<div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center justify-center gap-2 font-medium text-xl tracking-tight text-zinc-950">
<iconify-icon className="text-2xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
                        ImmoGroup
                    </div>
<div className="flex items-center justify-center gap-2 font-medium text-xl tracking-tight text-zinc-950">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                        CHECK24
                    </div>
<div className="flex items-center justify-center gap-2 font-medium text-xl tracking-tight text-zinc-950">
<iconify-icon className="text-2xl" icon="solar:case-linear" strokeWidth="1.5"></iconify-icon>
                        FAIRFAMILY
                    </div>
<div className="flex items-center justify-center gap-2 font-medium text-xl tracking-tight text-zinc-950">
<iconify-icon className="text-2xl" icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
                        Pflegekraft
                    </div>
<div className="flex items-center justify-center gap-2 font-medium text-xl tracking-tight text-zinc-950 col-span-2 sm:col-span-1">
<iconify-icon className="text-2xl" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
                        Learning Suite
                    </div>
</div>
</div>
</div>
</main>

    </>
  );
}
