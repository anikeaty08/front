import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="glass-nav fixed top-0 w-full z-[100]">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-xl uppercase" href="index.html">
                USZP
            </a>
<div className="hidden lg:flex items-center gap-6 text-sm font-medium">
<a className="hover:text-white transition-colors" href="index.html#hero">Start</a>
<a className="hover:text-white transition-colors" href="index.html#kim-jestem">Kim jestem</a>
<a className="hover:text-white transition-colors" href="index.html#tematy">Tematy</a>
<a className="hover:text-white transition-colors" href="index.html#zacznij">Zacznij tutaj</a>
<a className="hover:text-white transition-colors" href="index.html#artykuly">Artykuły</a>
<a className="text-white/90 transition-colors" href="#">Narzędzia</a>
<a className="hover:text-white transition-colors" href="index.html#ksiazki">Książki</a>
</div>
<a className="hidden sm:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-neutral-200 transition-colors" href="index.html#kontakt">
                Kontakt
            </a>
<button className="lg:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-48 pb-24 px-6 overflow-hidden section-border">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] hero-glow pointer-events-none"></div>
<div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/5 border border-violet-500/10 mb-8 animate-fade-in">
<iconify-icon className="text-violet-400" icon="solar:folder-with-files-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider text-violet-400">Biblioteka Narzędzi</span>
</div>
<h1 className="heading-style text-4xl sm:text-5xl md:text-6xl text-white font-medium tracking-tight leading-[1.05] mb-8">
                Praktyczne systemy,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">zero pustej teorii.</span>
</h1>
<p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed font-light">
                Zbiór moich prywatnych szablonów, arkuszy i frameworków, które każdego dnia pomagają mi w budowaniu dyscypliny, śledzeniu nawyków i organizowaniu wiedzy.
            </p>
</div>
</header>

<section className="py-32 px-6 bg-[#070707] section-border">
<div className="max-w-6xl mx-auto">

<div className="mb-20">
<div className="flex items-center gap-4 mb-10 border-b border-neutral-800 pb-4">
<div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-500">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h2 className="heading-style text-2xl text-white font-medium tracking-tight">Szablony Notion</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-violet-500/30 transition-all group flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:checklist-minimalistic-linear" strokeWidth="1" width="80"></iconify-icon>
</div>
<div className="mb-6">
<span className="text-[10px] font-medium uppercase tracking-widest text-violet-400 bg-violet-500/10 px-2 py-1 rounded-md">Notion Template</span>
</div>
<h4 className="text-white text-lg font-medium tracking-tight mb-3">System Zarządzania Życiem (OS)</h4>
<p className="text-sm leading-relaxed mb-8 text-neutral-500 flex-grow relative z-10">
                            Mój główny dashboard. Integruje cele długoterminowe z codziennymi zadaniami. Zawiera wbudowany kalendarz, system GTD i bazę wiedzy.
                        </p>
<a className="text-white text-xs font-medium uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all mt-auto w-fit relative z-10" href="#">
                            Pobierz darmowy szablon <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-violet-500/30 transition-all group flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1" width="80"></iconify-icon>
</div>
<div className="mb-6">
<span className="text-[10px] font-medium uppercase tracking-widest text-violet-400 bg-violet-500/10 px-2 py-1 rounded-md">Notion Template</span>
</div>
<h4 className="text-white text-lg font-medium tracking-tight mb-3">Habit Tracker v2.0</h4>
<p className="text-sm leading-relaxed mb-8 text-neutral-500 flex-grow relative z-10">
                            Nie tylko odhaczanie kratek. System analizuje Twoje zaangażowanie i podpowiada, kiedy zwalniasz tempo. Skupiony na konsekwencji.
                        </p>
<a className="text-white text-xs font-medium uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all mt-auto w-fit relative z-10" href="#">
                            Pobierz darmowy szablon <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-violet-500/30 transition-all group flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:pen-linear" strokeWidth="1" width="80"></iconify-icon>
</div>
<div className="mb-6">
<span className="text-[10px] font-medium uppercase tracking-widest text-violet-400 bg-violet-500/10 px-2 py-1 rounded-md">Notion Template</span>
</div>
<h4 className="text-white text-lg font-medium tracking-tight mb-3">Dziennik Stoika</h4>
<p className="text-sm leading-relaxed mb-8 text-neutral-500 flex-grow relative z-10">
                            Codzienny szablon do porannej i wieczornej refleksji. Oparty na pytaniach, które pomagają odzyskać kontrolę nad emocjami.
                        </p>
<a className="text-white text-xs font-medium uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all mt-auto w-fit relative z-10" href="#">
                            Pobierz darmowy szablon <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-4 mb-10 border-b border-neutral-800 pb-4">
<div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-500">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h2 className="heading-style text-2xl text-white font-medium tracking-tight">E-booki i PDFy</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-violet-500/30 transition-all group flex flex-col h-full">
<div className="mb-6 flex justify-between items-start">
<span className="text-[10px] font-medium uppercase tracking-widest text-white bg-neutral-800 border border-neutral-700 px-2 py-1 rounded-md">Plik PDF</span>
<iconify-icon className="text-neutral-700" icon="solar:question-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-white text-lg font-medium tracking-tight mb-3">50 Pytań do Autorefleksji</h4>
<p className="text-sm leading-relaxed mb-8 text-neutral-500 flex-grow">
                            Zestaw brutalnie szczerych pytań, które pomogą Ci zrozumieć, gdzie obecnie jesteś i czego naprawdę chcesz od życia.
                        </p>
<button className="text-white text-xs font-medium uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all mt-auto w-fit">
                            Pobierz plik <iconify-icon icon="solar:download-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-violet-500/30 transition-all group flex flex-col h-full">
<div className="mb-6 flex justify-between items-start">
<span className="text-[10px] font-medium uppercase tracking-widest text-white bg-neutral-800 border border-neutral-700 px-2 py-1 rounded-md">Plik PDF</span>
<iconify-icon className="text-neutral-700" icon="solar:book-bookmark-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-white text-lg font-medium tracking-tight mb-3">Mapa Fundamentów</h4>
<p className="text-sm leading-relaxed mb-8 text-neutral-500 flex-grow">
                            Wizualny diagram przedstawiający 4 filary dobrego życia: sen, ruch, dieta i uwaga. Gotowy do wydruku i powieszenia na ścianie.
                        </p>
<button className="text-white text-xs font-medium uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all mt-auto w-fit">
                            Pobierz plik <iconify-icon icon="solar:download-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-violet-500/30 transition-all group flex flex-col h-full">
<div className="mb-6 flex justify-between items-start">
<span className="text-[10px] font-medium uppercase tracking-widest text-white bg-neutral-800 border border-neutral-700 px-2 py-1 rounded-md">Aplikacja Web</span>
<iconify-icon className="text-neutral-700" icon="solar:window-frame-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-white text-lg font-medium tracking-tight mb-3">Cyfrowe Karty Refleksji</h4>
<p className="text-sm leading-relaxed mb-8 text-neutral-500 flex-grow">
                            Proste narzędzie w przeglądarce, które każdego dnia losuje jedno pytanie do przemyśleń. Idealne na 5 minut porannej kawy.
                        </p>
<button className="text-white text-xs font-medium uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all mt-auto w-fit">
                            Otwórz narzędzie <iconify-icon icon="solar:external-link-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 section-border bg-[#050505]">
<div className="max-w-4xl mx-auto">
<div className="p-10 md:p-16 rounded-[2rem] bg-[#0a0a0a] border border-violet-500/20 relative overflow-hidden text-center shadow-2xl">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-violet-600/10 blur-[100px] pointer-events-none"></div>

<div className="mx-auto w-16 h-16 bg-violet-500/5 border border-violet-500/20 rounded-2xl flex items-center justify-center mb-8 relative z-10">
<iconify-icon className="text-violet-500" icon="solar:gift-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>

<h2 className="heading-style text-3xl md:text-4xl text-white font-medium tracking-tight mb-4 relative z-10">Chcesz wszystko w jednej paczce?</h2>
<p className="text-base leading-relaxed text-neutral-400 mb-10 max-w-xl mx-auto relative z-10">
                    Odbierz "Starter Pack" – paczkę ZIP zawierającą wszystkie powyższe PDFy, linki do szablonów Notion oraz zniżki na nadchodzące kursy.
                </p>

<form className="max-w-3xl mx-auto relative z-10 flex flex-col md:flex-row gap-4">
<input className="w-full md:w-1/3 bg-neutral-900 border border-neutral-800 rounded-full px-6 py-4 text-base text-white placeholder-neutral-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-all shadow-inner" placeholder="Twoje imię" type="text"/>
<input className="w-full md:w-1/3 bg-neutral-900 border border-neutral-800 rounded-full px-6 py-4 text-base text-white placeholder-neutral-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-all shadow-inner" placeholder="Twój adres e-mail" type="email"/>
<button className="w-full md:w-1/3 whitespace-nowrap bg-violet-500 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-violet-600 transition-colors shadow-lg shadow-violet-500/20" type="button">
                        Odbierz Starter Pack
                    </button>
</form>

<p className="text-xs text-neutral-600 uppercase tracking-widest font-medium mt-8 relative z-10">
                    Zero spamu. Tylko konkrety i narzędzia, które działają.
                </p>
</div>
</div>
</section>

<footer className="py-32 px-6">
<div className="max-w-6xl mx-auto text-center">
<h2 className="heading-style text-3xl text-white font-medium tracking-tight mb-6">Masz pomysł na nowe narzędzie?</h2>
<p className="text-base text-neutral-500 mb-10 max-w-md mx-auto">
                Jeśli brakuje Ci konkretnego szablonu lub arkusza kalkulacyjnego, daj mi znać. Być może stworzę go w następnej kolejności.
            </p>
<div className="flex justify-center mb-20">
<a className="text-white text-sm font-medium flex items-center gap-3 hover:text-violet-400 transition-colors" href="mailto:hello@uszp.pl">
<iconify-icon className="text-violet-500" icon="solar:letter-linear" strokeWidth="1.5" width="24"></iconify-icon>
                    hello@uszp.pl
                </a>
</div>
<div className="pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6">
<a className="text-white font-medium tracking-tighter text-lg uppercase" href="index.html">USZP</a>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:share-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
<p className="text-xs text-neutral-600 uppercase tracking-widest font-medium">© 2024 Wszystkie prawa zastrzeżone.</p>
</div>
</div>
</footer>

    </>
  );
}
