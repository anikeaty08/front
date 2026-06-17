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
      

<div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
<div className="fixed left-0 right-0 top-0 z-[-1] m-auto h-[600px] w-[600px] rounded-full bg-cyan-600/10 opacity-60 blur-[150px]"></div>

<header className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
<span className="font-semibold tracking-tighter text-base">LB</span>
</div>
<span className="font-semibold tracking-tight text-xl text-white">LandBlock</span>
</div>
<nav className="hidden md:flex items-center gap-10 text-sm">
<a className="text-white font-medium" href="#">Strona główna</a>
<a className="text-zinc-500 hover:text-cyan-400 transition-colors" href="#">Sklep</a>
<a className="text-zinc-500 hover:text-cyan-400 transition-colors" href="#">Regulamin</a>
<a className="text-zinc-500 hover:text-cyan-400 transition-colors" href="#">Administracja</a>
</nav>
<div className="flex items-center">
<a className="hidden md:inline-flex items-center justify-center gap-2 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 border border-[#5865F2]/20 text-[#5865F2] px-5 py-2.5 rounded-xl text-sm font-medium transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:chat-round-dots-linear" strokeWidth="1.5"></iconify-icon>
                    Discord
                </a>
<button className="md:hidden text-zinc-400 hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>

<main>
<section className="relative pt-48 pb-24 md:pt-64 md:pb-32 px-6 overflow-hidden">
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/80 border border-white/10 text-sm font-medium text-zinc-300 mb-10 backdrop-blur-md shadow-xl">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
</span>
<span className="text-white font-semibold">432</span> graczy online
                </div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-white mb-8 leading-[1.05]">
                    Witaj na <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 drop-shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                        LandBlock.pl
                    </span>
</h1>
<p className="text-lg md:text-2xl text-zinc-400 mb-16 leading-relaxed max-w-3xl mx-auto font-light">
                    Dołącz do społeczności premium. Gwarantujemy epickie walki PvP, stabilną ekonomię i eventy, których nie zapomnisz.
                </p>

<div className="flex flex-col items-center justify-center">
<button className="group relative w-full sm:w-auto inline-flex flex-col items-center justify-center bg-gradient-to-b from-cyan-500/20 to-cyan-500/5 hover:to-cyan-500/15 border border-cyan-400/30 px-12 py-5 rounded-2xl transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.15)] hover:shadow-[0_0_60px_rgba(34,211,238,0.3)] hover:-translate-y-1 overflow-hidden">

<div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
<div className="flex items-center gap-4 text-cyan-300 mb-1">
<iconify-icon className="text-3xl group-hover:scale-110 transition-transform duration-300" icon="solar:copy-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-2xl md:text-3xl font-semibold tracking-wide">LANDBLOCK.PL</span>
</div>
<span className="text-xs font-medium text-cyan-300/60 uppercase tracking-widest mt-1">Kliknij, aby skopiować IP</span>
</button>
<div className="mt-6 flex items-center gap-2 text-sm text-zinc-500 font-light">
<iconify-icon className="text-cyan-500" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
                        Wspieramy wersje <span className="text-zinc-300 font-medium">1.16 - 1.20+</span>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 max-w-7xl mx-auto relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-10 text-center">Odkryj nasze tryby</h2>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 group relative bg-zinc-900/60 backdrop-blur-md p-10 md:p-12 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-all duration-500"></div>
<div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
<iconify-icon className="text-3xl" icon="solar:shield-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 relative z-10">PvP &amp; Lifesteal</h3>
<p className="text-base text-zinc-400 leading-relaxed font-light max-w-xl relative z-10">
                        Prawdziwe wyzwanie dla najlepszych. Odbieraj serca przeciwnikom, twórz sojusze i walcz o dominację na mapie. Regularne turnieje z nagrodami premium.
                    </p>
</div>

<div className="md:col-span-4 group relative bg-zinc-900/60 backdrop-blur-md p-10 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all duration-500 overflow-hidden flex flex-col justify-center">
<div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-500/10 rounded-full blur-[60px] group-hover:bg-amber-500/20 transition-all duration-500"></div>
<div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
<iconify-icon className="text-3xl" icon="solar:gem-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3 relative z-10">Ekonomia</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light relative z-10">
                        Rozbudowany rynek graczy. Zdobądź fortunę w diamentach i zostań najbogatszym na serwerze.
                    </p>
</div>

<div className="md:col-span-5 group relative bg-zinc-900/60 backdrop-blur-md p-10 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute top-10 -left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px] group-hover:bg-purple-500/20 transition-all duration-500"></div>
<div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
<iconify-icon className="text-3xl" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3 relative z-10">Epickie Skrzynie</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light relative z-10">
                        Zdobywaj klucze, otwieraj skrzynie i wygrywaj unikalne, rzadkie przedmioty dostępne tylko u nas.
                    </p>
</div>

<div className="md:col-span-7 group relative bg-zinc-900/60 backdrop-blur-md p-10 rounded-3xl border border-white/5 hover:border-rose-500/30 transition-all duration-500 overflow-hidden flex flex-col justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-start gap-6 relative z-10">
<div className="w-14 h-14 shrink-0 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-3xl" icon="solar:flame-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">Czysta Anarchia</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                                Zero zasad, pełna wolność. Buduj ukryte bazy, niszcz wrogów i przetrwaj w brutalnym świecie, gdzie liczy się tylko siła.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="pb-32 px-6 max-w-7xl mx-auto">
<div className="bg-gradient-to-br from-[#5865F2]/10 to-[#5865F2]/5 border border-[#5865F2]/20 p-10 md:p-16 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-[0_0_50px_rgba(88,101,242,0.05)]">
<div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#5865F2]/20 blur-[100px]"></div>
<div className="relative z-10 md:max-w-xl text-center md:text-left">
<div className="w-16 h-16 rounded-2xl bg-[#5865F2]/20 border border-[#5865F2]/30 flex items-center justify-center text-[#5865F2] mx-auto md:mx-0 mb-8">
<iconify-icon className="text-3xl" icon="solar:chat-round-dots-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                        Wejdź na naszego Discorda
                    </h2>
<p className="text-base text-zinc-400 font-light mb-0 leading-relaxed">
                        Dołącz do setek aktywnych graczy. Odbieraj darmowe nagrody z giveaway'ów, szukaj gildii i bądź na bieżąco z aktualizacjami serwera.
                    </p>
</div>
<div className="relative z-10 shrink-0 w-full md:w-auto">
<button className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white px-10 py-5 rounded-2xl text-lg font-semibold tracking-wide transition-all shadow-[0_0_30px_rgba(88,101,242,0.4)] hover:shadow-[0_0_40px_rgba(88,101,242,0.6)] hover:-translate-y-1">
                        Dołącz do społeczności
                        <iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</section>
</main>

<footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6 relative z-10 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-16">

<div className="md:col-span-5">
<div className="flex items-center gap-4 mb-8">
<div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
<span className="font-semibold tracking-tighter text-sm">LB</span>
</div>
<span className="font-semibold tracking-tight text-2xl text-white">LandBlock.pl</span>
</div>
<p className="text-zinc-500 font-light leading-relaxed mb-8 max-w-sm">
                    Najbardziej zaawansowany serwer Survival &amp; Anarchia w Polsce. Dołącz do elitarnej społeczności graczy i stwórz własną legendę.
                </p>
<div className="flex items-center gap-3">
<a className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:chat-round-dots-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:video-frame-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="md:col-span-4 grid grid-cols-2 gap-8">
<div>
<h4 className="font-semibold tracking-tight text-white mb-6 text-sm uppercase text-zinc-400">Serwer</h4>
<ul className="space-y-4">
<li><a className="text-sm font-light text-zinc-500 hover:text-cyan-400 transition-colors" href="#">Strona Główna</a></li>
<li><a className="text-sm font-light text-zinc-500 hover:text-cyan-400 transition-colors" href="#">Sklep Premium</a></li>
<li><a className="text-sm font-light text-zinc-500 hover:text-cyan-400 transition-colors" href="#">Zasady i Regulamin</a></li>
<li><a className="text-sm font-light text-zinc-500 hover:text-cyan-400 transition-colors" href="#">Ranking Graczy</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold tracking-tight text-white mb-6 text-sm uppercase text-zinc-400">Pomoc</h4>
<ul className="space-y-4">
<li><a className="text-sm font-light text-zinc-500 hover:text-cyan-400 transition-colors" href="#">Zgłoś błąd</a></li>
<li><a className="text-sm font-light text-zinc-500 hover:text-cyan-400 transition-colors" href="#">Forum</a></li>
<li><a className="text-sm font-light text-zinc-500 hover:text-cyan-400 transition-colors" href="#">Discord Support</a></li>
<li><a className="text-sm font-light text-zinc-500 hover:text-cyan-400 transition-colors" href="#">Kontakt</a></li>
</ul>
</div>
</div>

<div className="md:col-span-3">
<h4 className="font-semibold tracking-tight text-white mb-6 text-sm uppercase text-zinc-400">Status Serwera</h4>
<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6">
<div className="flex items-center justify-between mb-4">
<span className="text-sm text-zinc-400 font-light">Gracze Online</span>
<span className="flex h-2.5 w-2.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
</span>
</div>
<div className="text-3xl font-semibold text-white tracking-tight mb-2">432 <span className="text-sm text-zinc-500 font-light">/ 1000</span></div>
<div className="w-full bg-zinc-800 rounded-full h-1.5 mb-6">
<div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 rounded-full" style={{width: '43%'}}></div>
</div>
<div className="text-xs text-zinc-500 font-light px-3 py-2 bg-black/40 rounded-lg border border-white/5 flex items-center gap-2 justify-center">
                        IP: <span className="text-cyan-400 font-medium">landblock.pl</span>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-xs font-light text-zinc-600 flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2023 LandBlock.pl. Wszelkie prawa zastrzeżone.</p>
<p>Nie jesteśmy powiązani z firmą Mojang AB.</p>
</div>
</footer>

    </>
  );
}
