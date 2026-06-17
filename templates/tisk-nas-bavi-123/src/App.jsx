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
      

<nav className="absolute top-0 w-full z-50 text-white py-6 px-6 lg:px-12 flex justify-between items-center">

<div className="text-xl lg:text-2xl font-semibold tracking-tighter uppercase flex items-center gap-2">
<span>TISK NÁS</span>
<span className="border-b-2 border-cyan-400 pb-0.5">BAVÍ</span>
</div>
<div className="hidden lg:flex gap-8 text-sm font-medium opacity-90">
<a className="hover:text-cyan-400 transition-colors" href="#sluzby">Služby</a>
<a className="hover:text-cyan-400 transition-colors" href="#o-nas">O nás</a>
<a className="hover:text-cyan-400 transition-colors" href="#kontakt">Kontakt</a>
</div>
<a className="hidden lg:inline-flex bg-white text-slate-950 px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-cyan-50 transition-colors" href="#kontakt">
            Poptat tisk
        </a>
<button className="lg:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>

<header className="relative flex flex-col lg:flex-row min-h-screen bg-slate-950 overflow-hidden">

<div className="w-full lg:w-1/2 flex flex-col justify-center px-6 pt-32 pb-12 lg:p-24 relative z-10">
<span className="text-cyan-400 text-xs font-medium tracking-widest uppercase mb-6">Born for Printing</span>
<h1 className="text-4xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-8">
                Kompletní tiskový<br/> servis s úsměvem.<br/> <span className="text-slate-500">A něco navíc.</span>
</h1>
<p className="text-slate-400 text-lg max-w-md mb-10 font-light leading-relaxed">
                Grafika, DTP studio, maloformátový i velkoformátový tisk. Od vizitek po polepy tramvají. Balíme, instalujeme a doručujeme.
            </p>
<div className="flex items-center gap-6 text-white/80">
<a className="group flex items-center gap-2 text-sm border-b border-white/20 pb-1 hover:text-cyan-400 hover:border-cyan-400 transition-all" href="#sluzby">
                    Prohlédnout služby
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-16 flex gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex flex-col items-center gap-1">
<i className="w-8 h-8 text-white" data-lucide="printer"></i>
<span className="text-[10px] text-white uppercase tracking-widest">Offset</span>
</div>
<div className="flex flex-col items-center gap-1">
<i className="w-8 h-8 text-white" data-lucide="layers"></i>
<span className="text-[10px] text-white uppercase tracking-widest">Digital</span>
</div>
<div className="flex flex-col items-center gap-1">
<i className="w-8 h-8 text-white" data-lucide="truck"></i>
<span className="text-[10px] text-white uppercase tracking-widest">Logistics</span>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562577309-4933f091b26d?q=80&amp;w=2832&amp;auto=format&amp;fit=crop')] bg-cover bg-center clip-hero-img grayscale-[20%]">
<div className="absolute inset-0 overflow-hidden">
<img alt="Industrial printing machine with colorful output" className="w-full h-full object-cover grayscale-[10%] contrast-125" src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/20 to-slate-900/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay"></div>
</div>

<div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-cyan-900/20 to-transparent"></div>
</div>

<button className="absolute bottom-8 right-8 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform hidden lg:flex">
<i className="w-5 h-5" data-lucide="arrow-down"></i>
</button>
</div>
</header>

<section className="py-20 lg:py-32 px-6 lg:px-12 bg-white" id="o-nas">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 flex flex-col gap-8">
<div className="flex gap-4 items-start">
<i className="w-6 h-6 text-cyan-500 mt-1" data-lucide="smile"></i>
<div>
<h3 className="font-medium text-sm mb-1 tracking-tight">Osobní přístup</h3>
<p className="text-xs text-slate-500 leading-relaxed">S klienty mluvíme osobně a víme, co potřebují. Tisk přizpůsobíme účelu.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<i className="w-6 h-6 text-cyan-500 mt-1" data-lucide="zap"></i>
<div>
<h3 className="font-medium text-sm mb-1 tracking-tight">Rychlost &amp; Flexibilita</h3>
<p className="text-xs text-slate-500 leading-relaxed">Když je potřeba, tiskneme klidně i přes noc. Termíny jsou svaté.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<i className="w-6 h-6 text-cyan-500 mt-1" data-lucide="check-circle"></i>
<div>
<h3 className="font-medium text-sm mb-1 tracking-tight">Bezchybná data</h3>
<p className="text-xs text-slate-500 leading-relaxed">Data zkontrolujeme, upravíme a postaráme se, aby výsledek seděl na první dobrou.</p>
</div>
</div>
</div>
<div className="lg:col-span-8 lg:pl-12">
<h2 className="text-2xl lg:text-4xl font-medium tracking-tight leading-snug mb-6">
                    Nejsme továrna na kilometry tisku. Jsme partner, který řeší vaše starosti.
                </h2>
<p className="text-slate-600 text-lg leading-relaxed font-light">
                    V tisku jsme doma, Vy zas v něčem jiném. Tak to nechte na nás. Umíme i nemožné. Polepit výlohu? Reklamu na tramvaj? Banner na budovu? Jasně. V Česku i venku. A když to sami neumíme, zařídíme to s někým, komu věříme. Baví nás řešit věci, co se „normálně nedělají“.
                </p>
<div className="mt-8">
<a className="text-sm font-medium border-b border-slate-300 pb-0.5 hover:border-cyan-500 hover:text-cyan-500 transition-colors" href="#kontakt">Kontaktujte nás</a>
</div>
</div>
</div>
</section>

<section className="bg-black text-white py-16 lg:py-20 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
<div>
<div className="text-4xl lg:text-6xl font-medium tracking-tighter mb-2">24<span className="text-cyan-400">/</span>7</div>
<p className="text-xs text-slate-400 uppercase tracking-widest">Tisková pohotovost</p>
</div>
<div>
<div className="text-4xl lg:text-6xl font-medium tracking-tighter mb-2">100<span className="text-cyan-400">%</span></div>
<p className="text-xs text-slate-400 uppercase tracking-widest">Pokrytí ČR i zahraničí</p>
</div>
<div>
<div className="text-4xl lg:text-6xl font-medium tracking-tighter mb-2">∞</div>
<p className="text-xs text-slate-400 uppercase tracking-widest">Žádné minimum</p>
</div>
<div>
<div className="text-4xl lg:text-6xl font-medium tracking-tighter mb-2">DTP</div>
<p className="text-xs text-slate-400 uppercase tracking-widest">Vlastní studio</p>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-slate-50" id="sluzby">
<div className="max-w-7xl mx-auto">
<span className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-4 block">Naše služby</span>
<h2 className="text-3xl font-medium tracking-tight mb-12 max-w-2xl">
                Nabízíme kvalitní a rychlá řešení. Od vizitky po billboard.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">

<div className="group relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden cursor-pointer md:col-span-2 lg:col-span-1">
<img alt="Velkoformátový tisk" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<i className="w-8 h-8 text-white mb-4" data-lucide="maximize"></i>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Velkoformátový tisk</h3>
<p className="text-slate-300 text-sm mb-6 max-w-sm leading-relaxed hidden group-hover:block transition-all">
                            Plakáty, banery, síťoviny, okenní grafika, polepy aut, CLV, podlahová grafika, textilie, vlajky, tapety a řezaná grafika.
                        </p>
<div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden cursor-pointer lg:col-span-1">
<img alt="Maloformátový tisk" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<i className="w-8 h-8 text-white mb-4" data-lucide="files"></i>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Maloformátový tisk</h3>
<p className="text-slate-300 text-sm mb-6 max-w-sm leading-relaxed hidden group-hover:block transition-all">
                            Letáky, brožury, vizitky, etikety. Precizní digitální tisk pro vaši každodenní komunikaci.
                        </p>
<div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
<img alt="Potisk textilu" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-xl font-medium text-white mb-1 tracking-tight">Potisk textilu &amp; tašek</h3>
<p className="text-slate-400 text-xs">Trička, mikiny, nonwoven tašky (DTF, digitál).</p>
</div>
</div>

<div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
<img alt="Reklamní předměty" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&amp;w=3000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-xl font-medium text-white mb-1 tracking-tight">Reklama &amp; Výstavní systémy</h3>
<p className="text-slate-400 text-xs">Roll-upy, stojany, dárkové sady, profidarky.cz.</p>
</div>
</div>
</div>

<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 pt-12">
<div>
<h4 className="font-medium text-slate-900 mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-cyan-600" data-lucide="pen-tool"></i> Grafika &amp; DTP
                    </h4>
<p className="text-sm text-slate-600 leading-relaxed">Grafické návrhy a profesionální předtisková příprava. Aby barvy seděly.</p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-cyan-600" data-lucide="package"></i> Servis &amp; Logistika
                    </h4>
<p className="text-sm text-slate-600 leading-relaxed">Balení, kompletace zakázek, doprava a skladování materiálů.</p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-cyan-600" data-lucide="hammer"></i> Instalace
                    </h4>
<p className="text-sm text-slate-600 leading-relaxed">Vlastní instalační tým. Lepíme a montujeme po celé ČR i v zahraničí.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-white text-center">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl lg:text-5xl font-medium tracking-tight mb-6">Poznáte nás na první pohled.</h2>
<p className="text-slate-600 text-lg mb-16 max-w-2xl mx-auto font-light">
                Naše zásilky jsou zabalené tak, že si je s jinými nespletete. Chceme, aby vám udělaly radost už při rozbalení.
            </p>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
<div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
<i className="w-6 h-6 text-slate-900" data-lucide="box"></i>
</div>
<h3 className="font-medium text-lg mb-3 tracking-tight">Sklad? Máme.</h3>
<p className="text-slate-600 text-sm leading-relaxed">Potřebujete něco tisknout pravidelně, ale nemáte to kam dát? Nechte to u nás. Uschováme, a když řeknete, pošleme.</p>
</div>
<div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
<i className="w-6 h-6 text-slate-900" data-lucide="bar-chart"></i>
</div>
<h3 className="font-medium text-lg mb-3 tracking-tight">Neřešíme objem</h3>
<p className="text-slate-600 text-sm leading-relaxed">Nezáleží, jestli tisknete 50 vizitek nebo stovky plakátů. U nás není žádné minimum. I malá zakázka si zaslouží péči.</p>
</div>
<div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
<i className="w-6 h-6 text-slate-900" data-lucide="gift"></i>
</div>
<h3 className="font-medium text-lg mb-3 tracking-tight">Projekt Triko v Tašce</h3>
<p className="text-slate-600 text-sm leading-relaxed">Připravujeme nový e-shop pro vaše unikátní textilní dárky. Fotoobrazy a potisk textilu s nápadem.</p>
</div>
</div>
</section>

<footer className="bg-slate-950 text-white py-20 px-6 lg:px-12 rounded-t-[3rem] lg:rounded-t-[5rem]" id="kontakt">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row justify-between items-start mb-20">
<div className="max-w-lg">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-8">Zajímá vás spolupráce? <br/>Nebojte se ozvat.</h2>
<a className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-full font-medium hover:bg-cyan-400 transition-colors" href="mailto:info@amkart.cz">
                        info@amkart.cz
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<div className="mt-8 text-slate-400">
<p className="mb-2"><span className="text-white font-medium">Telefon:</span> +420 733 656 543</p>
<p><span className="text-white font-medium">Tisková pohotovost:</span> +420 733 656 543</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-slate-800 pt-16 text-sm text-slate-400">
<div>
<h4 className="text-white font-medium mb-4">Sídlo (Kancelář)</h4>
<p className="leading-relaxed mb-2">Sinkulova 79/31<br/>147 00 Praha 4</p>
<p className="text-xs text-slate-500">(Objekt Alex B Production s.r.o)</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Provozovna (Výroba)</h4>
<p className="leading-relaxed mb-2">Choceradská 300<br/>251 62 Mukařov</p>
<p className="text-xs text-slate-500">Tiskárna a výdejní sklad</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Fakturační údaje</h4>
<p className="leading-relaxed">IČ: 24149420<br/>DIČ: CZ24149420</p>
<p className="mt-2 text-xs text-slate-500">Městský soud v Praze, oddíl C, vložka 183187</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Bankovní spojení</h4>
<p className="leading-relaxed">GE Money Bank a.s.<br/>Č.Ú.: 203707671/0600</p>
<p className="mt-2 text-xs text-slate-500 break-all">IBAN: CZ9206000000000203707671</p>
</div>
</div>
<div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<p>© 2023 TISK NÁS BAVÍ. Všechna práva vyhrazena.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="https://www.textilnasbavi.cz" target="_blank">textilnasbavi.cz</a>
<a className="hover:text-white transition-colors" href="https://www.profidarky.cz" target="_blank">profidarky.cz</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
