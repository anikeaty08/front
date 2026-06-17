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
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200/40 blur-[120px] animate-float"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-100/50 blur-[150px] animate-float-delayed"></div>
<div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] rounded-full bg-purple-100/40 blur-[100px] animate-float" style={{animationDelay: '2s'}}></div>

<div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>
</div>

<nav className="fixed top-0 inset-x-0 z-50 flex justify-center py-6 px-4 pointer-events-none">
<div className="glass-panel px-6 py-3 rounded-full flex items-center justify-between w-full max-w-5xl pointer-events-auto">
<div className="text-lg font-semibold tracking-tighter text-zinc-900">
                MK.
            </div>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-200" href="#kontakt">
                Kontakt
            </a>
</div>
</nav>

<main className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 px-4 flex flex-col items-center justify-center min-h-screen">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/5 bg-white/60 backdrop-blur-md mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-600">Přijímám nové projekty</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-center max-w-5xl mx-auto leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-500">
            Digitální zážitky,<br/>které fascinují.
        </h1>
<p className="text-lg md:text-xl text-zinc-500 font-light text-center max-w-2xl mb-16 leading-relaxed">
            Tvořím webové stránky s důrazem na dokonalý detail, rychlost a design. Proměňte svou vizi v realitu.
        </p>

<div className="w-full max-w-5xl relative group">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000"></div>
<div className="glass-panel p-8 md:p-14 rounded-[2.5rem] relative overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">Nemáte co ztratit.</h2>
<p className="text-sm text-zinc-500 mb-8 leading-relaxed">
                            Věřím své práci natolik, že riziko beru na sebe. Podívejte se, jak by mohl váš nový web vypadat, zcela bez závazků.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="glass-button px-7 py-3.5 rounded-full text-sm font-medium text-white flex items-center justify-center gap-2 w-max" href="#kontakt">
                                Mám zájem
                                <iconify-icon height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</a>
</div>
</div>
<div className="lg:col-span-7 flex flex-col gap-6 relative">

<div className="bg-white/50 backdrop-blur-md border border-black/5 rounded-2xl p-4 flex items-center gap-4 transform transition hover:-translate-y-0.5 hover:bg-white/80 shadow-sm ml-auto w-full sm:w-[85%]">
<div className="p-2.5 bg-blue-50 rounded-xl text-blue-500 border border-blue-100/50 shadow-sm">
<iconify-icon height="1.5em" icon="solar:magic-stick-3-linear" width="1.5em"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-0.5">Ukázka zcela zdarma</h3>
<p className="text-xs text-zinc-500">Připravím prvotní návrh, abyste věděli, do čeho jdete.</p>
</div>
</div>

<div className="apple-3d-element rounded-[2rem] p-8 md:p-10 flex flex-col relative z-10 overflow-hidden ml-0 sm:-ml-8 mt-2">

<div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white to-transparent pointer-events-none opacity-80"></div>
<div className="relative z-10">
<div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_4px_10px_rgba(0,0,0,0.05)] border border-indigo-200/50 mb-6 transform -rotate-3">
<iconify-icon className="text-3xl text-indigo-600" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3">Doživotní garance</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                                    Stojím si za absolutní kvalitou kódu i designu. Případné opravy, drobné úpravy a optimalizace řeším kdykoliv. Váš projekt bude fungovat navždy bezchybně, na to máte mé slovo.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 px-4 relative">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-panel p-10 rounded-[2rem] md:col-span-2 flex flex-col justify-center relative overflow-hidden group">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-100 rounded-full blur-3xl group-hover:bg-emerald-200/50 transition duration-700"></div>
<div className="relative z-10">
<iconify-icon className="text-4xl text-zinc-700 mb-6" icon="solar:wallet-money-linear"></iconify-icon>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3">Cena domluvou</h2>
<p className="text-sm text-zinc-500 leading-relaxed max-w-md">
                        Každý projekt je unikátní. Nenajdete zde tabulkové ceny, ale férovou nabídku na míru vašim potřebám a rozpočtu. Platíte za vytvořenou hodnotu.
                    </p>
</div>
</div>
<div className="glass-panel p-10 rounded-[2rem] flex flex-col justify-center items-center text-center">
<div className="p-4 bg-orange-50 rounded-full mb-6 text-orange-500 shadow-sm border border-orange-100">
<iconify-icon className="text-3xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Rychlý start</h3>
<p className="text-xs text-zinc-500 leading-relaxed">
                    Napište mi a do 48 hodin můžeme mít první konzultaci a koncept.
                </p>
</div>
</div>
</section>

<section className="py-24 px-4">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Co říkají klienti</h2>
<p className="text-sm text-zinc-500">Výsledky hovoří za vše.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-[2rem] flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-5 text-yellow-400">
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-8 leading-relaxed">
                            "Naprosto profesionální přístup. Ukázka zdarma mě přesvědčila a finální web je přesně to, co jsme potřebovali. Luxusní design a nekompromisní rychlost."
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sm font-semibold text-zinc-900 border border-zinc-200 shadow-sm">P</div>
<div className="text-xs">
<span className="block text-zinc-900 font-medium mb-0.5">Petr N.</span>
<span className="text-zinc-500">Majitel firmy</span>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-[2rem] flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-5 text-yellow-400">
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-8 leading-relaxed">
                            "Garance spokojenosti není jen prázdná fráze. I po spuštění webu mi Matyáš bleskově pomohl s drobnými úpravami. Cenová domluva byla nanejvýš férová."
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sm font-semibold text-zinc-900 border border-zinc-200 shadow-sm">J</div>
<div className="text-xs">
<span className="block text-zinc-900 font-medium mb-0.5">Jana M.</span>
<span className="text-zinc-500">E-commerce</span>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-[2rem] flex flex-col justify-between hidden lg:flex">
<div>
<div className="flex gap-1 mb-5 text-yellow-400">
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
<iconify-icon height="1.2em" icon="solar:star-bold" width="1.2em"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-8 leading-relaxed">
                            "Design s čistotou od Applu. Přesně to jsem chtěl a to jsem dostal. Komunikace na jedničku. Neměli jsme co ztratit a získali jsme špičkový produkt."
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sm font-semibold text-zinc-900 border border-zinc-200 shadow-sm">M</div>
<div className="text-xs">
<span className="block text-zinc-900 font-medium mb-0.5">Martin K.</span>
<span className="text-zinc-500">Startup Founder</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 relative" id="kontakt">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">Jdeme na to?</h2>
<p className="text-base text-zinc-500 mb-12 max-w-xl mx-auto">
                Máte dotaz nebo chcete rovnou začít? Ptejte se na emailu nebo do zpráv. Jsem tu pro vás.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">

<a className="glass-panel w-full sm:w-auto px-8 py-5 rounded-[1.5rem] flex items-center justify-center gap-4 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] group" href="mailto:matykarlos6@gmail.com">
<div className="p-3 bg-zinc-100 rounded-full text-zinc-600 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
<iconify-icon height="1.4em" icon="solar:letter-linear" width="1.4em"></iconify-icon>
</div>
<div className="text-left text-sm">
<span className="block text-xs text-zinc-500 mb-0.5">Napište mi email</span>
<span className="block text-zinc-900 font-medium">matykarlos6@gmail.com</span>
</div>
</a>

<a className="glass-panel w-full sm:w-auto px-8 py-5 rounded-[1.5rem] flex items-center justify-center gap-4 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] group" href="tel:+420775479333">
<div className="p-3 bg-zinc-100 rounded-full text-zinc-600 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
<iconify-icon height="1.4em" icon="solar:phone-calling-linear" width="1.4em"></iconify-icon>
</div>
<div className="text-left text-sm">
<span className="block text-xs text-zinc-500 mb-0.5">Zavolejte / Napište SMS</span>
<span className="block text-zinc-900 font-medium">775 479 333</span>
</div>
</a>
</div>
</div>
</section>

<footer className="py-10 text-center border-t border-black/5 relative z-10">
<p className="text-xs text-zinc-400 font-medium tracking-wide">
            © 2023 MK. Všechna práva vyhrazena.
        </p>
</footer>

    </>
  );
}
