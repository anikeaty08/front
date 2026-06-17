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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
brand: {
blue: '#1D4ED8', // Primary Blue (Trustworthy)
lightblue: '#EFF6FF',
yellow: '#EAB308', // Accent
red: '#EF4444', // Accent
dark: '#0F172A',
gray: '#475569',
light: '#F8FAFC'
}
}
}
}
}



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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-brand-blue rounded-xl flex items-center justify-center transform rotate-3">
<span className="text-white font-medium text-lg leading-none tracking-tighter">K</span>
</div>
<span className="font-semibold text-xl tracking-tighter text-brand-dark">KidnBricks</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-brand-gray hover:text-brand-blue transition-colors" href="#programy">Programy</a>
<a className="text-sm font-medium text-brand-gray hover:text-brand-blue transition-colors" href="#jak-to-funguje">Jak to funguje</a>
<a className="text-sm font-medium text-brand-gray hover:text-brand-blue transition-colors" href="#reference">Reference</a>
<a className="text-sm font-medium text-brand-gray hover:text-brand-blue transition-colors" href="#kontakt">Kontakt</a>
</nav>

<div className="hidden md:block">
<a className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-brand-dark text-white text-sm font-medium hover:bg-brand-blue transition-all duration-200" href="#kontakt">
                    Zapsat dítě na kroužek
                </a>
</div>

<button className="md:hidden text-brand-dark">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-lightblue border border-blue-100 text-brand-blue text-xs font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                        Zápisy na nové pololetí v Lounech spuštěny
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-brand-dark tracking-tighter leading-tight mb-6">
                        Kroužky, kde děti <span className="text-brand-blue">programují</span>, tvoří a přemýšlí.
                    </h1>
<p className="text-base md:text-lg text-brand-gray leading-relaxed mb-8">
                        Spojujeme oblíbené stavebnice s moderními technologiemi a robotikou. Rozvíjíme logické myšlení a kreativitu zábavnou formou, která děti baví.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-brand-blue text-white text-sm font-medium hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md" href="#kontakt">
                            Zapsat dítě na kroužek
                        </a>
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-brand-dark border border-slate-200 text-sm font-medium hover:border-slate-300 hover:bg-slate-50 transition-all duration-200" href="#programy">
                            Zjistit více
                        </a>
</div>
</div>

<div className="relative">

<div className="absolute -top-6 -left-6 w-16 h-16 bg-brand-yellow rounded-2xl rotate-12 z-0 hidden md:block"></div>
<div className="absolute -bottom-8 -right-8 w-20 h-20 bg-brand-red rounded-full opacity-90 z-0 hidden md:block"></div>
<div className="relative z-10 rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm bg-white p-2">

<img alt="Dítě stavějící robota" className="w-full h-[400px] lg:h-[500px] object-cover rounded-[1.5rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute bottom-10 -left-6 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm z-20 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
<iconify-icon height="20" icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-brand-gray">Pro děti od</p>
<p className="text-sm font-semibold text-brand-dark tracking-tight">6 do 12 let</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-light" id="programy">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-brand-dark tracking-tighter mb-4">Vyberte si ten správný kroužek</h2>
<p className="text-base text-brand-gray">Rozdělili jsme programy podle věku a zkušeností, aby se každé dítě rozvíjelo svým vlastním tempem v podporujícím prostředí.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-brand-blue/30 hover:shadow-sm transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-brand-lightblue text-brand-blue flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<iconify-icon height="24" icon="solar:rocket-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-2xl font-medium text-brand-dark tracking-tight">Malý objevitel</h3>
<span className="inline-flex px-3 py-1 rounded-full bg-slate-100 text-brand-dark text-xs font-medium">6–8 let</span>
</div>
<p className="text-sm text-brand-gray mb-6 h-16">
                        Hravý úvod do světa robotiky. Děti staví jednoduché mechanické modely z velkých dílků a oživují je pomocí základních grafických příkazů na tabletu.
                    </p>
<div className="flex items-center justify-between pt-6 border-t border-slate-100">
<div>
<p className="text-xs text-brand-gray">Cena za pololetí</p>
<p className="text-lg font-medium text-brand-dark tracking-tight">1 800 Kč</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue hover:text-blue-800 transition-colors" href="#kontakt">
                            Zapsat dítě <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-brand-blue/30 hover:shadow-sm transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-amber-50 text-brand-yellow flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<iconify-icon height="24" icon="solar:cpu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-2xl font-medium text-brand-dark tracking-tight">Mladý inženýr</h3>
<span className="inline-flex px-3 py-1 rounded-full bg-slate-100 text-brand-dark text-xs font-medium">9–12 let</span>
</div>
<p className="text-sm text-brand-gray mb-6 h-16">
                        Pokročilejší stavby a blokové programování. Děti řeší logické výzvy, využívají senzory a pracují na týmových projektech s komplexními roboty.
                    </p>
<div className="flex items-center justify-between pt-6 border-t border-slate-100">
<div>
<p className="text-xs text-brand-gray">Cena za pololetí</p>
<p className="text-lg font-medium text-brand-dark tracking-tight">2 100 Kč</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue hover:text-blue-800 transition-colors" href="#kontakt">
                            Zapsat dítě <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="jak-to-funguje">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium text-brand-dark tracking-tighter text-center mb-16">Jak probíhá naše výuka?</h2>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-8 left-1/8 right-1/8 h-px bg-slate-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-brand-dark mb-4 shadow-sm">
<span className="text-lg font-semibold tracking-tighter">01</span>
</div>
<h4 className="text-base font-medium text-brand-dark mb-2 tracking-tight">Přihlášení</h4>
<p className="text-sm text-brand-gray">Vyberete si termín a úroveň podle věku vašeho dítěte.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-brand-dark mb-4 shadow-sm">
<iconify-icon height="24" icon="solar:box-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-base font-medium text-brand-dark mb-2 tracking-tight">Stavba</h4>
<p className="text-sm text-brand-gray">Na lekci dítě podle zadání postaví fyzický model robota.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-brand-dark mb-4 shadow-sm">
<iconify-icon height="24" icon="solar:programming-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-base font-medium text-brand-dark mb-2 tracking-tight">Programování</h4>
<p className="text-sm text-brand-gray">Přes tablet či PC vytvoří kód, který model oživí a rozpohybuje.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-brand-blue flex items-center justify-center text-white mb-4 shadow-sm">
<iconify-icon height="24" icon="solar:confetti-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-base font-medium text-brand-dark mb-2 tracking-tight">Výsledek</h4>
<p className="text-sm text-brand-gray">Testování, úprava chyb a radost z fungujícího projektu.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-dark rounded-[3rem] mx-4 md:mx-6 my-10 overflow-hidden relative">
<div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-6">Proč děti potřebují rozumět technologiím?</h2>
<p className="text-base text-slate-300 mb-8">
                        Nechceme z každého dítěte vychovat programátora. Učíme je, jak přemýšlet v souvislostech, řešit problémy a spolupracovat.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon height="20" icon="solar:brain-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1 tracking-tight">Logické myšlení</h4>
<p className="text-sm text-slate-400">Algoritmizace učí děti rozdělit složitý problém na menší, řešitelné kroky.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon height="20" icon="solar:lightbulb-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1 tracking-tight">Kreativita bez hranic</h4>
<p className="text-sm text-slate-400">Neexistuje jen jedno správné řešení. Podporujeme vlastní nápady a vylepšení.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1 tracking-tight">Týmová spolupráce</h4>
<p className="text-sm text-slate-400">Na složitějších úkolech pracují děti ve dvojicích, učí se komunikovat a dělit si role.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<img alt="Děti spolupracující na projektu" className="rounded-[2rem] w-full object-cover h-[400px] border border-white/10" src="https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="reference">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium text-brand-dark tracking-tighter text-center mb-16">Co říkají rodiče</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-brand-light rounded-[2rem] p-8 border border-slate-100">
<div className="flex text-brand-yellow mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-brand-dark leading-relaxed mb-6 font-medium">„Syn chodí z kroužku nadšený a doma nám neustále vysvětluje, jak fungují senzory a motory. Skvělý přístup lektorů a smysluplně strávený čas.“</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-brand-gray text-sm font-medium">JN</div>
<div>
<p className="text-sm font-medium text-brand-dark tracking-tight">Jana Nováková</p>
<p className="text-xs text-brand-gray">maminka Tomáše (8 let)</p>
</div>
</div>
</div>

<div className="bg-brand-light rounded-[2rem] p-8 border border-slate-100">
<div className="flex text-brand-yellow mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-brand-dark leading-relaxed mb-6 font-medium">„Konečně kroužek, který dává smysl a není to jen pasivní sezení u počítače. Děti si vše osahají a hned vidí výsledek své práce.“</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-brand-gray text-sm font-medium">PD</div>
<div>
<p className="text-sm font-medium text-brand-dark tracking-tight">Petr Dvořák</p>
<p className="text-xs text-brand-gray">tatínek Elišky (10 let)</p>
</div>
</div>
</div>

<div className="bg-brand-light rounded-[2rem] p-8 border border-slate-100">
<div className="flex text-brand-yellow mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-brand-dark leading-relaxed mb-6 font-medium">„Oceňuji organizaci a profesionální vybavení. Nemusíme kupovat drahé sady domů, vše je k dispozici. Vřele doporučuji všem rodičům z Loun.“</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-brand-gray text-sm font-medium">MP</div>
<div>
<p className="text-sm font-medium text-brand-dark tracking-tight">Martina Poláková</p>
<p className="text-xs text-brand-gray">maminka Filipa (7 let)</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="bg-brand-light rounded-[2rem] p-8 md:p-12 border border-slate-100">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-brand-dark flex items-center justify-center mb-6 shadow-sm">
<iconify-icon height="24" icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-brand-dark tracking-tight mb-2">Kde nás najdete</h3>
<p className="text-base text-brand-gray mb-6">Působíme přímo v centru Loun, v moderních a bezpečných prostorech vhodných pro výuku.</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-blue mt-0.5" height="20" icon="solar:buildings-linear" width="20"></iconify-icon>
<span className="text-sm text-brand-dark font-medium">Louny, Česká republika<br/><span className="text-brand-gray font-normal">Přesná adresa bude upřesněna před začátkem kurzu.</span></span>
</div>
</div>
</div>

<div>
<div className="inline-flex px-3 py-1 rounded-full bg-slate-100 text-brand-dark text-xs font-medium mb-4">Pro školy</div>
<h2 className="text-3xl font-medium text-brand-dark tracking-tighter mb-4">Spolupráce se školami</h2>
<p className="text-base text-brand-gray mb-6">
                        Nabízíme dopolední projektové dny a workshopy pro základní školy z Loun a okolí. Přivezeme veškeré vybavení a zajistíme kompletní program ukázkové výuky STEAM a robotiky v rámci nové informatiky.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-brand-dark hover:text-brand-blue transition-colors" href="mailto:skoly@kidnbricks.cz">
                        Mám zájem o workshop pro školu <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-brand-light relative overflow-hidden border-t border-slate-200" id="kontakt">

<div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium text-brand-dark tracking-tighter mb-6">Zajistěte svému dítěti místo v kroužku</h2>
<p className="text-base md:text-lg text-brand-gray mb-8">
                Kapacita kurzů je omezená na 10 dětí pro zajištění individuálního přístupu. Vyplňte nezávazný formulář a my se vám ozveme s detaily.
            </p>
</div>
<div className="max-w-xl mx-auto px-6 relative z-10">
<div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-2">
<label className="block text-xs font-medium text-brand-dark">Jméno rodiče</label>
<input className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="Jan Novák" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-brand-dark">Věk dítěte</label>
<input className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="Např. 8" type="number"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-brand-dark">E-mail</label>
<input className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="jan.novak@email.cz" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-brand-dark">Telefon</label>
<input className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="+420 777 123 456" type="tel"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-brand-dark">Výběr programu (volitelné)</label>
<div className="relative">
<select className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm appearance-none focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-brand-gray">
<option value="">Zatím nevím, poradím se</option>
<option value="maly">Malý objevitel (6-8 let)</option>
<option value="mlady">Mladý inženýr (9-12 let)</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-gray">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="pt-4">
<button className="w-full h-12 rounded-xl bg-brand-blue text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm" type="button">
                            Odeslat nezávaznou přihlášku
                        </button>
<p className="text-center text-xs text-slate-400 mt-4">Po odeslání se vám ozveme ohledně volných termínů.</p>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-brand-dark rounded-md flex items-center justify-center transform rotate-3">
<span className="text-white font-medium text-xs leading-none tracking-tighter">K</span>
</div>
<span className="font-semibold text-lg tracking-tighter text-brand-dark">KidnBricks</span>
</div>
<div className="flex items-center gap-6">
<a className="text-sm font-medium text-brand-gray hover:text-brand-dark transition-colors" href="mailto:ahoj@kidnbricks.cz">ahoj@kidnbricks.cz</a>
<a className="text-sm font-medium text-brand-gray hover:text-brand-dark transition-colors" href="#">Ochrana soukromí</a>
<a className="text-sm font-medium text-brand-gray hover:text-brand-dark transition-colors" href="#">Obchodní podmínky</a>
</div>
</div>
<div className="mt-8 text-center md:text-left text-xs text-slate-400">
                © 2024 KidnBricks. Projekt v Lounech. LEGO® je ochranná známka společnosti LEGO Group, která tento web nesponzoruje ani neautorizuje.
            </div>
</div>
</footer>

    </>
  );
}
