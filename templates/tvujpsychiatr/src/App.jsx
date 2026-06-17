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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-zinc-900 tracking-tighter font-medium text-lg uppercase flex items-center gap-2" href="#">
<iconify-icon className="text-xl text-blue-600" icon="solar:health-linear" strokeWidth="1.5"></iconify-icon>
          tvujpsychiatr.cz
        </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-500 hover:text-blue-600 transition-colors" href="#uvod">
            Úvod
          </a>
<a className="text-slate-500 hover:text-blue-600 transition-colors" href="#o-nas">
            O nás
          </a>
<a className="text-slate-500 hover:text-blue-600 transition-colors" href="#ordinacni-hodiny">
            Ordinační hodiny
          </a>
<a className="text-slate-500 hover:text-blue-600 transition-colors" href="#pro-klienty">
            Pro klienty
          </a>
<a className="text-slate-500 hover:text-blue-600 transition-colors" href="#kontakty">
            Kontakty
          </a>
</nav>
<button className="md:hidden text-zinc-900 flex items-center">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</header>
<main className="flex-grow pt-16">

<section className="overflow-hidden bg-white border-zinc-200/50 border-b pt-24 pb-32 relative" id="uvod">

<div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div className="text-left">
<span className="inline-block text-xs uppercase tracking-widest text-blue-600 font-semibold mb-6">
              MUDr. Henrich Kalafa
            </span>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 mb-8 leading-tight">
              Psychiatrická ambulance
              <br className="hidden sm:block"/>
              v Krnově
            </h1>
<p className="text-base md:text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
              Nabídka odborné psychiatrické ambulance a poradenství v oblasti
              stresu, depresí, krizí, problémů ve stáří, partnerských a
              sexuálních problémů i závislostí.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-start gap-4">
<a className="w-full sm:w-auto px-8 py-3 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm text-center" href="#pro-klienty">
                Pro klienty
              </a>
<a className="w-full sm:w-auto px-8 py-3 rounded-full bg-white border border-slate-200 text-slate-900 text-sm font-medium hover:border-blue-300 hover:bg-blue-50 transition-colors text-center" href="#ordinacni-hodiny">
                Ordinační hodiny
              </a>
</div>
</div>
<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 hidden md:block aspect-[4/3] bg-slate-50">
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Poliklinika%20Krnov,%20N%C3%A1m%C4%9Bst%C3%AD%20Hrdin%C5%AF%206,%20Krnov&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" title="Mapa ordinace"></iframe>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 -mt-8 relative z-20">
<div className="bg-white border border-blue-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm shadow-blue-900/5">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-medium text-zinc-900 mb-1">Aktuálně</h3>
<p className="text-sm text-zinc-500">
              Momentálně nemáme žádné aktuální informace pro klienty.
            </p>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6" id="o-nas">
<div className="mb-12 rounded-3xl overflow-hidden h-64 md:h-80 w-full relative shadow-sm">
<img alt="Klidné prostředí" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent mix-blend-multiply"></div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white rounded-3xl p-8 md:p-10 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
<iconify-icon className="text-2xl" icon="solar:stethoscope-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-4">
              Ambulance
            </h2>
<p className="text-base text-zinc-500 leading-relaxed mb-6">
              Vyšetření, konzultace, léčba, konzília, posudky. Poskytujeme
              komplexní psychiatrickou péči s důrazem na individuální přístup a
              moderní léčebné postupy.
            </p>
</div>

<div className="bg-white rounded-3xl p-8 md:p-10 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
<iconify-icon className="text-2xl" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-4">
              Poradna
            </h2>
<p className="text-base text-zinc-500 leading-relaxed mb-6">
              Krize, stres a deprese, problémy ve stáří, partnerské problémy,
              sexuální problémy, problémy závislostí. Pomůžeme vám zorientovat
              se v náročných životních situacích.
            </p>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-200/50" id="ordinacni-hodiny">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">
              Ordinační hodiny
            </h2>
<p className="text-base text-zinc-500">
              Pravidelná pracovní doba naší ambulance.
            </p>
</div>
<div className="grid md:grid-cols-2 gap-12 md:gap-8">

<div className="">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
                Ambulance
              </h3>
<ul className="space-y-4">
<li className="flex justify-between items-center text-sm py-2 border-b border-zinc-100">
<span className="text-zinc-600">Pondělí</span>
<span className="text-zinc-900 font-medium">08:00–12:30</span>
</li>
<li className="flex justify-between items-center text-sm py-2 border-b border-zinc-100">
<span className="text-zinc-600">Úterý</span>
<span className="text-zinc-900 font-medium">08:00–12:30</span>
</li>
<li className="flex justify-between items-center text-sm py-2 border-b border-zinc-100">
<span className="text-zinc-600">Středa</span>
<span className="text-zinc-900 font-medium">08:00–12:30</span>
</li>
<li className="flex justify-between items-center text-sm py-2 border-b border-zinc-100">
<span className="text-zinc-600">Čtvrtek</span>
<span className="text-zinc-900 font-medium">08:00–12:30</span>
</li>
<li className="flex justify-between items-center text-sm py-2 border-b border-zinc-100">
<span className="text-zinc-600">Pátek</span>
<span className="text-zinc-900 font-medium">08:00–12:30</span>
</li>
</ul>
</div>

<div className="">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:calendar-mark-linear" strokeWidth="1.5"></iconify-icon>
                Objednaní klienti
              </h3>
<ul className="space-y-4">
<li className="flex justify-between items-center text-sm py-2 border-b border-zinc-100">
<span className="text-zinc-600">Pondělí</span>
<span className="text-zinc-900 font-medium">13:00–15:00</span>
</li>
<li className="flex justify-between items-center text-sm py-2 border-b border-zinc-100">
<span className="text-zinc-600">Úterý</span>
<span className="text-zinc-900 font-medium">13:00–15:00</span>
</li>
<li className="flex justify-between items-center text-sm py-2 border-b border-zinc-100">
<span className="text-zinc-600">Středa</span>
<span className="text-zinc-900 font-medium">13:00–15:00</span>
</li>
<li className="flex justify-between items-center text-sm py-2 border-b border-zinc-100">
<span className="text-zinc-600">Čtvrtek</span>
<span className="text-zinc-900 font-medium">13:00–15:00</span>
</li>
<li className="flex justify-between items-center text-sm py-2 border-b border-zinc-100">
<span className="text-zinc-600">Pátek</span>
<span className="text-zinc-900 font-medium">13:00–15:00</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6" id="pro-klienty">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">
            Pro klienty
          </h2>
<p className="text-base text-zinc-500">
            Užitečné informace a články z oblasti duševního zdraví.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="group bg-white rounded-2xl border border-blue-100 hover:border-blue-300 transition-colors flex flex-col h-full overflow-hidden shadow-sm hover:shadow-md">
<div className="h-48 w-full overflow-hidden">
<img alt="Psychologická pohoda" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<time className="text-xs text-blue-500 font-medium mb-3 block">
                13 září, 2023
              </time>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                Psychologická pohoda v každodenním životě
              </h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">
                Krátký úvodní text jako náhled článku. Dozvíte se, jak si udržet
                rovnováhu v uspěchané době.
              </p>
<a className="text-sm font-medium text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all w-fit" href="#">
                Číst více
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</article>

<article className="group bg-white rounded-2xl border border-blue-100 hover:border-blue-300 transition-colors flex flex-col h-full overflow-hidden shadow-sm hover:shadow-md">
<div className="h-48 w-full overflow-hidden">
<img alt="Depresivní stavy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<time className="text-xs text-blue-500 font-medium mb-3 block">
                13 září, 2023
              </time>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                Rozpoznávání a řešení depresivních stavů
              </h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">
                Krátký úvodní text jako náhled článku. Jak poznat, kdy je smutek
                přirozený a kdy už je třeba vyhledat pomoc.
              </p>
<a className="text-sm font-medium text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all w-fit" href="#">
                Číst více
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</article>

<article className="group bg-white rounded-2xl border border-blue-100 hover:border-blue-300 transition-colors flex flex-col h-full overflow-hidden shadow-sm hover:shadow-md">
<div className="h-48 w-full overflow-hidden">
<img alt="Zvládání stresu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1447703693928-9cd89c8d3ac5?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<time className="text-xs text-blue-500 font-medium mb-3 block">
                13 září, 2023
              </time>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                Zvládání stresu a úzkosti v moderním světě
              </h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">
                Krátký úvodní text jako náhled článku. Praktické techniky a
                strategie pro každodenní boj se stresem.
              </p>
<a className="text-sm font-medium text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all w-fit" href="#">
                Číst více
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</article>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-200/50">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">
              Co o nás říkají zákazníci?
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
<div className="flex text-amber-400 mb-4 gap-0.5">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 italic leading-relaxed">
                „Pokud zvolíte tohoto psichiatra neuděláte chybu. Jsem u pana
                Doktora již 4 roky a dostal jsem se ze závislosti na heroinu
                alkoholu i pervitinu můžu vřele doporučit ❤️“
              </p>
</div>

<div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
<div className="flex text-amber-400 mb-4 gap-0.5">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 italic leading-relaxed">
                „Pan doktor je vstřícný člověk hlavně klidný a nesnaží se
                mermomocí každému předepsat léčení v nemocnici Opavě vše řeší v
                klidu pokud ho někdo moc nenaštve jsem ráda že jsem si ho
                zvolila za svého psychiatra“
              </p>
</div>

<div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
<div className="flex text-amber-400 mb-4 gap-0.5">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 italic leading-relaxed">
                „Byl jsem spokojen s přístupem pana doktora k mé situaci a z
                pomoci jak při pohovoru, tak z umístění v PN Opava. Vždy jsem se
                v ordinaci pěkně uklidnil.“
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">
            Často kladené otázky
          </h2>
<p className="text-base text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
</div>
<div className="space-y-4">
<details className="group border border-zinc-200 rounded-xl bg-white overflow-hidden" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-zinc-900 text-sm">
<span>Potřebuji k vyšetření doporučení od obvodního lékaře?</span>
<span className="transition group-open:rotate-180 text-blue-600">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-sm text-zinc-500 pb-5 px-5 leading-relaxed">
              Ne, doporučení (žádanka) od praktického lékaře není pro návštěvu
              naší ambulance nutná. Můžete se objednat přímo.
            </div>
</details>
<details className="group border border-zinc-200 rounded-xl bg-white overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-zinc-900 text-sm">
<span>Jak dlouho trvá úvodní konzultace?</span>
<span className="transition group-open:rotate-180 text-blue-600">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-sm text-zinc-500 pb-5 px-5 leading-relaxed">
              První vstupní vyšetření obvykle trvá přibližně 45 až 60 minut.
              Následné kontroly jsou kratší, většinou 15 až 30 minut podle
              potřeby.
            </div>
</details>
<details className="group border border-zinc-200 rounded-xl bg-white overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-zinc-900 text-sm">
<span>Hradí péči zdravotní pojišťovna?</span>
<span className="transition group-open:rotate-180 text-blue-600">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-sm text-zinc-500 pb-5 px-5 leading-relaxed">
              Ano, jsme smluvním partnerem většiny zdravotních pojišťoven. Běžná
              péče a vyšetření jsou plně hrazeny z veřejného zdravotního
              pojištění.
            </div>
</details>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="kontakty">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="">
<h2 className="text-3xl font-medium tracking-tight mb-4">
              Nenašli jste, co jste hledali?
            </h2>
<p className="text-base text-zinc-400 mb-8 leading-relaxed">
              Kontaktujte nás pomocí formuláře nebo emailu. Rádi vám odpovíme na
              vaše dotazy nebo domluvíme termín návštěvy.
            </p>
<a className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors shadow-sm" href="mailto:ambulance@tvujpsychiatr.cz">
              Odeslat dotaz
              <iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="bg-slate-800/80 rounded-3xl p-8 md:p-10 border border-slate-700/50 shadow-xl shadow-blue-900/10">
<h3 className="text-xl font-medium tracking-tight mb-8">
              Kde nás najdete?
            </h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 text-blue-400">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<span className="block text-xs text-zinc-400 mb-1 uppercase tracking-wider">
                    Telefon
                  </span>
<a className="text-base font-medium hover:text-blue-400 transition-colors" href="tel:777266541">
                    777 266 541
                  </a>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 text-blue-400">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<span className="block text-xs text-zinc-400 mb-1 uppercase tracking-wider">
                    Email
                  </span>
<a className="text-base font-medium hover:text-blue-400 transition-colors" href="mailto:ambulance@tvujpsychiatr.cz">
                    ambulance@tvujpsychiatr.cz
                  </a>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 text-blue-400">
<iconify-icon className="text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<span className="block text-xs text-zinc-400 mb-1 uppercase tracking-wider">
                    Adresa
                  </span>
<span className="text-base font-medium">
                    Poliklinika Krnov
                    <br/>
                    Náměstí Hrdinů 6
                  </span>
</div>
</li>
</ul>
</div>
</div>
</section>
</main>

<footer className="bg-white py-12 border-t border-zinc-200 text-center">
<div className="max-w-6xl mx-auto px-6">
<span className="text-zinc-900 tracking-tighter font-medium text-lg uppercase block mb-6">
          tvujpsychiatr.cz
        </span>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-zinc-500 font-medium">
<a className="hover:text-blue-600 transition-colors" href="#kontakty">
            Kontakty
          </a>
<a className="hover:text-blue-600 transition-colors" href="tel:777266541">
            777 266 541
          </a>
<a className="hover:text-blue-600 transition-colors" href="mailto:ambulance@tvujpsychiatr.cz">
            ambulance@tvujpsychiatr.cz
          </a>
<span className="hidden sm:inline-block text-zinc-300">•</span>
<span>Poliklinika Krnov - Náměstí Hrdinů 6</span>
</div>
<p className="text-xs text-zinc-400 mt-12">
          © 2023 MUDr. Henrich Kalafa. Všechna práva vyhrazena.
        </p>
</div>
</footer>

    </>
  );
}
