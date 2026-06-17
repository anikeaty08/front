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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="uppercase text-lg font-semibold text-white tracking-tighter">Raticovka - funkčný tréning</div>
<div className="hidden md:flex gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#progres">Prečo my</a>
<a className="hover:text-white transition-colors" href="#proces">Ako to funguje</a>
<a className="hover:text-white transition-colors" href="#cennik">Cenník</a>
<a className="hover:text-white transition-colors text-indigo-400" href="#kontakt">Rezervovať tréning</a>
</div>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -z-10"></div>
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs font-medium uppercase tracking-widest text-zinc-400">Súkromný priestor na Orave</span>
</div>
<h1 className="md:text-6xl leading-tight text-4xl font-semibold text-white tracking-tight mb-6">
                Silné telo. Funkčný pohyb.<br/> Merateľný progres.
            </h1>
<p className="max-w-2xl mx-auto text-lg text-zinc-400 mb-10">
                Individuálny tréning v súkromnom priestore so systémom, ktorý vás zbaví bolesti chrbta a vybuduje skutočnú silu.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="hover:bg-zinc-200 transition-all sm:w-auto font-semibold text-black bg-white w-full rounded-lg pt-4 pr-8 pb-4 pl-8" href="/#kontakt">
                    Rezervovať tréning
                </a>
<a className="px-8 py-4 bg-zinc-900 text-white font-semibold rounded-lg border border-zinc-800 hover:border-zinc-600 transition-all w-full sm:w-auto inline-flex items-center justify-center gap-2" href="#progres">
                    Zistiť viac
                    <iconify-icon className="" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-24 border-t border-zinc-900" id="progres">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12">
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Individuálny prístup</h3>
<p className="text-zinc-400 leading-relaxed">Žiadne generické plány. Každý tréning je prispôsobený vašim cieľom, schopnostiam a aktuálnemu stavu.</p>
</div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
<iconify-icon icon="solar:crown-minimalistic-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Súkromný priestor</h3>
<p className="text-zinc-400 leading-relaxed">Zabudnite na preplnené fitká a čakanie na stroje. Celý priestor je vyhradený len pre váš progres.</p>
</div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Systémový progres</h3>
<p className="text-zinc-400 leading-relaxed">Sledujeme silu, techniku aj telesné parametre. Vidíte presne, kam sa posúvate každý týždeň.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-x-16 gap-y-16 items-center">
<div className="md:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Trápi vás bolesť chrbta alebo stagnácia?</h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                        Väčšina ľudí cvičí bez systému, čo vedie k zraneniam alebo strate motivácie. V Raticovke meníme chaos na riadený proces.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Koniec náhodným cvikom bez výsledkov</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Koniec strachu zo zlej techniky</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Zlepšenie držania tela a odstránenie bolestí</span>
</li>
</ul>
</div>
<div className="md:w-1/2 grid grid-cols-2 gap-4">
<div className="aspect-square flex group hover:bg-zinc-800/50 transition-colors text-center bg-zinc-800 rounded-2xl pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<div className="">
<div className="text-2xl font-semibold text-white mb-1">20-50</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Veková skupina</div>
</div>
</div>
<div className="aspect-square bg-indigo-600 rounded-2xl flex items-center justify-center p-8 text-center shadow-xl shadow-indigo-500/10">
<div>
<div className="text-2xl font-semibold text-white mb-1">Individuálne</div>
<div className="text-xs text-indigo-200 uppercase tracking-widest">Plán na mieru</div>
</div>
</div>
<div className="aspect-square bg-zinc-800 rounded-2xl flex items-center justify-center p-8 text-center group hover:bg-zinc-800/50 transition-colors">
<div>
<div className="text-2xl font-semibold text-white mb-1">FTVŠ</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Odbornosť</div>
</div>
</div>
<div className="aspect-square bg-zinc-800 rounded-2xl flex items-center justify-center p-8 text-center group hover:bg-zinc-800/50 transition-colors">
<div>
<div className="text-2xl font-semibold text-white mb-1">100%</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Súkromie</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="proces">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-16 text-center">Ako prebieha naša spolupráca?</h2>
<div className="grid md:grid-cols-4 gap-8">
<div className="relative group">
<div className="text-5xl font-black text-zinc-800 mb-4 group-hover:text-indigo-500/20 transition-colors">01</div>
<h4 className="text-lg font-semibold text-white mb-2">Konzultácia</h4>
<p className="text-sm text-zinc-400">Preberieme vaše ciele, zdravotný stav a doterajšie skúsenosti s pohybom.</p>
</div>
<div className="relative group">
<div className="text-5xl font-black text-zinc-800 mb-4 group-hover:text-indigo-500/20 transition-colors">02</div>
<h4 className="text-lg font-semibold text-white mb-2">Diagnostika</h4>
<p className="text-sm text-zinc-400">Sledujeme mobilitu, stabilitu a základné pohybové vzorce (drep, výpad, tlak).</p>
</div>
<div className="relative group">
<div className="text-5xl font-black text-zinc-800 mb-4 group-hover:text-indigo-500/20 transition-colors">03</div>
<h4 className="text-lg font-semibold text-white mb-2">Tréning</h4>
<p className="text-sm text-zinc-400">Pravidelná práca pod odborným dohľadom s dôrazom na techniku a kvalitu.</p>
</div>
<div className="relative group">
<div className="text-5xl font-black text-zinc-800 mb-4 group-hover:text-indigo-500/20 transition-colors">04</div>
<h4 className="text-lg font-semibold text-white mb-2">Analýza</h4>
<p className="text-sm text-zinc-400">Pravidelne meriame silový progres a telesné zmeny, aby sme udržali progres.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-zinc-950" id="cennik">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Investícia do vášho zdravia</h2>
<p className="text-zinc-400">Transparentné ceny bez skrytých poplatkov za vstup do fitka.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="glass-card p-8 rounded-2xl flex flex-col">
<div className="mb-8">
<h3 className="text-xl font-semibold text-white mb-2">Individuálny tréning</h3>
<p className="text-sm text-zinc-400">Maximálna pozornosť a plán na mieru.</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white">17 €</span>
<span className="text-zinc-500 text-sm">/ tréning</span>
</div>
<ul className="flex-grow mb-10 space-y-4">
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-indigo-500" icon="solar:check-read-linear" width="18"></iconify-icon>
                            1-na-1 tréner a klient
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-500">
<iconify-icon className="text-indigo-500" icon="solar:check-read-linear" width="18"></iconify-icon>
                            Súkromný priestor v cene
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-500">
<iconify-icon className="text-indigo-500" icon="solar:check-read-linear" width="18"></iconify-icon>
                            Sledovanie progresu
                        </li>
</ul>
<a className="w-full py-3 text-center bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors font-medium" href="#kontakt">Vybrať plán</a>
</div>

<div className="relative glass-card p-8 rounded-2xl border-indigo-500/30 flex flex-col overflow-hidden">
<div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-tighter">Najobľúbenejšie</div>
<div className="mb-8">
<h3 className="text-xl font-semibold text-white mb-2">Tréning vo dvojici</h3>
<p className="text-sm text-zinc-400">Trénujte s partnerom alebo kamarátom.</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white">12 €</span>
<span className="text-zinc-500 text-sm">/ osoba</span>
</div>
<div className="text-xs text-indigo-400 mt-2 font-medium">160 € / mesačný balík (8 tréningov)</div>
</div>
<ul className="space-y-4 mb-10 flex-grow text-sm">
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-500" icon="solar:check-read-linear" width="18"></iconify-icon>
                            Zdieľaná motivácia
                        </li>
<li className="flex items-center gap-3 text-zinc-500">
<iconify-icon className="text-indigo-500" icon="solar:check-read-linear" width="18"></iconify-icon>
                            Rovnaký systém progresu
                        </li>
<li className="flex items-center gap-3 text-zinc-500">
<iconify-icon className="text-indigo-500" icon="solar:check-read-linear" width="18"></iconify-icon>
                            Individuálna kontrola techniky
                        </li>
</ul>
<a className="hover:bg-indigo-500 transition-colors font-medium text-white text-center bg-indigo-600 w-full rounded-lg pt-3 pb-3" href="#kontakt">Chcem cvičiť vo dvojici</a>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-zinc-900 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="md:w-1/3 relative">
<div className="aspect-[3/4] bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700">

<div className="flex uppercase text-xs italic text-zinc-600 tracking-widest w-full h-full items-center justify-center">Foto Trénera</div>
</div>
<div className="absolute -bottom-6 -right-6 p-6 glass-card rounded-xl">
<div className="text-sm font-semibold text-white uppercase tracking-tighter">Študent FTVŠ</div>
<div className="text-xs text-zinc-500">Odborná kvalita zaručená</div>
</div>
</div>
<div className="md:w-2/3">
<span className="text-indigo-500 text-sm font-medium uppercase tracking-widest">O trénerovi</span>
<h2 className="text-3xl font-semibold text-white tracking-tight mt-4 mb-6">Pohyb je nástroj na lepší život.</h2>
<p className="text-zinc-400 text-lg leading-relaxed mb-6">
                        Ako študent Fakulty telesnej výchovy a športu spájam vedecké poznatky s praxou vo funkčnom tréningu. Mojím cieľom nie je len vás "zničiť" na tréningu, ale naučiť vás rozumieť svojmu telu a budovať dlhodobú formu.
                    </p>
<div className="grid grid-cols-2 gap-8">
<div className="">
<div className="text-white font-medium">Rabča / Námestovo</div>
<div className="text-sm text-zinc-500">Lokalita pôsobenia</div>
</div>
<div>
<div className="text-white font-medium">Udržateľnosť</div>
<div className="text-sm text-zinc-500">Moja hlavná filozofia</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950" id="kontakt">
<div className="max-w-7xl mx-auto px-6">
<div className="glass-card rounded-3xl p-8 md:p-16 relative overflow-hidden">
<div className="absolute top-0 right-0 p-12 text-indigo-500/5 -rotate-12 pointer-events-none">
<iconify-icon icon="solar:calendar-date-linear" width="300"></iconify-icon>
</div>
<div className="relative z-10 grid md:grid-cols-2 gap-12">
<div className="">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-6">Začnite ešte dnes.</h2>
<p className="text-zinc-400 mb-10 text-lg">Prvý krok je najťažší. Nechajte mi kontakt a dohodneme si úvodnú konzultáciu zdarma.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-500 uppercase">Zavolajte mi</div>
<div className="text-white font-medium">Dostupné na vyžiadanie</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-500 uppercase">Lokalita</div>
<div className="text-white font-medium">Orava (Rabča / Námestovo)</div>
</div>
</div>
</div>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm" placeholder="Meno" type="text"/>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm" placeholder="Priezvisko" type="text"/>
</div>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm" placeholder="Váš email" type="email"/>
<textarea className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm" placeholder="O čo máte záujem? (chudnutie, sila, bolesti chrbta...)" rows="4"></textarea>
<button className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20">
                            Odoslať nezáväzný záujem
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-zinc-900 text-center">
<div className="max-w-7xl mx-auto px-6">
<div className="text-white font-semibold text-sm tracking-tighter uppercase mb-6">
                Ratic<span className="text-indigo-500">ovka</span>
</div>
<p className="text-xs text-zinc-500 tracking-wide">© 2024 Funkčné Fitko Raticovka. Všetky práva vyhradené.</p>
<div className="mt-4 flex justify-center gap-6 text-zinc-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:share-circle-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:clapperboard-play-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
