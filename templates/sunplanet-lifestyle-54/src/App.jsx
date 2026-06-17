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



        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: "0px",
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
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
      
<nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-multiply pointer-events-none">
<a className="pointer-events-auto hover:opacity-60 transition-opacity" href="index.html">
<span className="font-display text-lg md:text-2xl tracking-tighter italic">Mgr. Markéta Káninská</span>
</a>
<div className="flex items-center gap-6 md:gap-10 pointer-events-auto">
<div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] opacity-40">
<a className="opacity-100 font-bold" href="index.html">CZ</a>
<span className="opacity-20">/</span>
<a className="hover:opacity-100 transition-opacity" href="index_en.html">EN</a>
</div>
<a className="group flex items-center gap-2 text-xs uppercase tracking-widest hover:opacity-60 transition-opacity duration-500" href="#kontakt">
<span className="hidden md:inline">Dohodnout konzultaci</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
<header className="relative w-full min-h-screen flex flex-col justify-end bg-[#E3D5CA] px-6 pb-12 pt-24 md:pt-32 md:px-12 md:pb-20">
<div className="max-w-screen-2xl mx-auto w-full">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
<div className="md:col-span-9">
<h1 className="font-display text-5xl md:text-9xl tracking-tight leading-[0.9] font-light italic reveal">
                        Jistota ve vašich <br/>
<span className="not-italic">právních vztazích.</span>
</h1>
</div>
<div className="md:col-span-3 flex flex-col justify-end gap-6">
<p className="font-body font-light text-sm md:text-base leading-relaxed opacity-90">
                        Notářská kancelář Mgr. Markéty Káninské poskytuje komplexní notářské služby rychle a s důrazem
                        na profesionalitu.
                    </p>
<div className="w-full h-[1px] bg-[#141414] opacity-20"></div>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-80">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>Malátova 461/17, 150 00 Praha 5 – Smíchov</span>
</div>
</div>
</div>
</div>
</header>
<section className="w-full py-16 md:py-40 px-6 md:px-12 bg-[#FBF7EF]">
<div className="max-w-screen-md mx-auto">
<span className="block font-body text-xs uppercase tracking-widest opacity-40 mb-8">O naší kanceláři</span>
<h2 className="font-display text-4xl md:text-5xl leading-tight font-normal mb-12 tracking-tight">
                Váš partner pro právní jistotu a bezpečná rozhodnutí.
            </h2>
<div className="flex flex-col md:flex-row gap-12">
<div className="w-full md:w-1/12 border-t border-[#141414] opacity-20 pt-2"></div>
<div className="w-full md:w-11/12">
<p className="font-body text-lg md:text-xl font-light leading-relaxed text-[#141414] opacity-80">
                        Ve složitém světě paragrafů jsme tu pro to, abychom vám přinesli jasnost a klid.
                        Ať už řešíte dědictví, převod nemovitosti nebo obchodní záležitosti, náš tým vám poskytne
                        odbornou oporu s důrazem na diskrétnost, preciznost a profesionální přístup.
                    </p>
</div>
</div>
</div>
</section>
<section className="w-full py-16 md:py-24 px-6 md:px-12 bg-[#FBF7EF]">
<div className="max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

<div className="flex flex-col gap-8 p-8 md:p-12 border border-[#141414] border-opacity-10 bg-[#FBF7EF] hover:bg-[#F2EDE4] transition-colors duration-500 reveal">
<div className="flex items-center justify-between">
<h3 className="font-display text-4xl md:text-5xl tracking-tight">Pro <span className="italic">občany</span></h3>
<iconify-icon className="opacity-60" icon="solar:user-hand-up-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<p className="font-body text-base font-light opacity-80 leading-relaxed max-w-md">
                        Poskytujeme komplexní právní služby pro jednotlivce a rodiny. Jsme tu pro vás v důležitých
                        životních situacích, kdy potřebujete jistotu.
                    </p>
<ul className="flex flex-col gap-3 mt-4">
<li className="flex items-center gap-3 opacity-70 font-body text-sm">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> Dědická řízení a
                            závěti
                        </li>
<li className="flex items-center gap-3 opacity-70 font-body text-sm">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> Převody
                            nemovitostí
                        </li>
<li className="flex items-center gap-3 opacity-70 font-body text-sm">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> Ověřování podpisů
                            a listin
                        </li>
<li className="flex items-center gap-3 opacity-70 font-body text-sm">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> Majetkové
                            dispozice
                        </li>
</ul>
</div>

<div className="flex flex-col gap-8 p-8 md:p-12 border border-[#141414] border-opacity-10 bg-[#FBF7EF] hover:bg-[#F2EDE4] transition-colors duration-500 reveal delay-200">
<div className="flex items-center justify-between">
<h3 className="font-display text-4xl md:text-5xl tracking-tight">Pro <span className="italic">firmy</span></h3>
<iconify-icon className="opacity-60" icon="solar:buildings-2-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<p className="font-body text-base font-light opacity-80 leading-relaxed max-w-md">
                        Zajišťujeme kompletní právní servis pro podnikatele a obchodní společnosti. Od založení přes
                        změny až po přímé zápisy do veřejných rejstříků.
                    </p>
<ul className="flex flex-col gap-3 mt-4">
<li className="flex items-center gap-3 opacity-70 font-body text-sm">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> Zakládání a změny
                            v obchodních korporacích
                        </li>
<li className="flex items-center gap-3 opacity-70 font-body text-sm">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> Přímé zápisy do
                            veřejných rejstříků
                        </li>
<li className="flex items-center gap-3 opacity-70 font-body text-sm">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> Notářské úschovy
                        </li>
<li className="flex items-center gap-3 opacity-70 font-body text-sm">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> Zástavní smlouvy a
                            rejstřík zástav
                        </li>
</ul>
</div>
</div>
</div>
</section>
<section className="w-full py-16 md:py-24 px-6 md:px-12 bg-[#FBF7EF] overflow-hidden">
<div className="max-w-screen-2xl mx-auto">
<div className="flex justify-between items-end mb-16 px-2">
<div className="reveal">
<h2 className="font-display text-4xl md:text-5xl tracking-tight mb-2">Notářské služby</h2>
<span className="font-body text-xs uppercase tracking-widest opacity-40">Kompletní nabídka úřadu</span>
</div>

<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-[#141414] border-opacity-20 flex items-center justify-center hover:bg-[#141414] hover:text-[#FBF7EF] transition-colors duration-300" onclick="document.getElementById('services-scroll').scrollBy({left: -400, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-[#141414] border-opacity-20 flex items-center justify-center hover:bg-[#141414] hover:text-[#FBF7EF] transition-colors duration-300" onclick="document.getElementById('services-scroll').scrollBy({left: 400, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:-mx-12 md:px-12" id="services-scroll">

<article className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-default p-8 border border-[#141414] border-opacity-10 bg-[#FBF7EF] hover:bg-[#F2EDE4] transition-colors duration-500 flex flex-col justify-between h-[400px]">
<div>
<div className="mb-8 text-[#141414] opacity-80 group-hover:scale-110 transition-transform duration-500 origin-left">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="font-display text-2xl tracking-tight mb-2">Ověřování</h3>
<p className="font-body text-xs opacity-50 tracking-wide uppercase mb-6">Podpisy &amp; Listiny</p>
<p className="font-body text-sm opacity-80 leading-relaxed">
                            Ověřování pravosti podpisů (legalizace) a shod dokumentů (vidimace) pro úřední a právní
                            styk.
                        </p>
</div>
<div className="w-8 h-[1px] bg-[#141414] opacity-20 group-hover:w-full transition-all duration-700">
</div>
</article>

<article className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-default p-8 border border-[#141414] border-opacity-10 bg-[#FBF7EF] hover:bg-[#F2EDE4] transition-colors duration-500 flex flex-col justify-between h-[400px]">
<div>
<div className="mb-8 text-[#141414] opacity-80 group-hover:scale-110 transition-transform duration-500 origin-left">
<iconify-icon icon="solar:documents-minimalistic-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="font-display text-2xl tracking-tight mb-2">Czech Point</h3>
<p className="font-body text-xs opacity-50 tracking-wide uppercase mb-6">Výpisy &amp; Registry</p>
<p className="font-body text-sm opacity-80 leading-relaxed">
                            Poskytování výpisů z informačních systémů veřejné správy, základních registrů a konverze
                            dokumentů.
                        </p>
</div>
<div className="w-8 h-[1px] bg-[#141414] opacity-20 group-hover:w-full transition-all duration-700">
</div>
</article>

<article className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-default p-8 border border-[#141414] border-opacity-10 bg-[#FBF7EF] hover:bg-[#F2EDE4] transition-colors duration-500 flex flex-col justify-between h-[400px]">
<div>
<div className="mb-8 text-[#141414] opacity-80 group-hover:scale-110 transition-transform duration-500 origin-left">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="font-display text-2xl tracking-tight mb-2">Obchodní korporace</h3>
<p className="font-body text-xs opacity-50 tracking-wide uppercase mb-6">Zakládání &amp; Změny</p>
<p className="font-body text-sm opacity-80 leading-relaxed">
                            Komplexní služby při zakládání obchodních společností, sepisování notářských zápisů o
                            valných hromadách a dalších změnách.
                        </p>
</div>
<div className="w-8 h-[1px] bg-[#141414] opacity-20 group-hover:w-full transition-all duration-700">
</div>
</article>

<article className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-default p-8 border border-[#141414] border-opacity-10 bg-[#FBF7EF] hover:bg-[#F2EDE4] transition-colors duration-500 flex flex-col justify-between h-[400px]">
<div>
<div className="mb-8 text-[#141414] opacity-80 group-hover:scale-110 transition-transform duration-500 origin-left">
<iconify-icon icon="solar:database-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="font-display text-2xl tracking-tight mb-2">Zápisy do rejstříků</h3>
<p className="font-body text-xs opacity-50 tracking-wide uppercase mb-6">Přímé zápisy</p>
<p className="font-body text-sm opacity-80 leading-relaxed">
                            Zapsání údajů do obchodního a jiných veřejných rejstříků přímo notářem bez nutnosti soudního
                            řízení.
                        </p>
</div>
<div className="w-8 h-[1px] bg-[#141414] opacity-20 group-hover:w-full transition-all duration-700">
</div>
</article>

<article className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-default p-8 border border-[#141414] border-opacity-10 bg-[#FBF7EF] hover:bg-[#F2EDE4] transition-colors duration-500 flex flex-col justify-between h-[400px]">
<div>
<div className="mb-8 text-[#141414] opacity-80 group-hover:scale-110 transition-transform duration-500 origin-left">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="font-display text-2xl tracking-tight mb-2">Manželské smlouvy</h3>
<p className="font-body text-xs opacity-50 tracking-wide uppercase mb-6">SJM &amp; Úprava majetku</p>
<p className="font-body text-sm opacity-80 leading-relaxed">
                            Úprava společného jmění manželů, předmanželské smlouvy a zúžení či rozšíření majetkového
                            režimu.
                        </p>
</div>
<div className="w-8 h-[1px] bg-[#141414] opacity-20 group-hover:w-full transition-all duration-700">
</div>
</article>

<article className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-default p-8 border border-[#141414] border-opacity-10 bg-[#FBF7EF] hover:bg-[#F2EDE4] transition-colors duration-500 flex flex-col justify-between h-[400px]">
<div>
<div className="mb-8 text-[#141414] opacity-80 group-hover:scale-110 transition-transform duration-500 origin-left">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="font-display text-2xl tracking-tight mb-2">Závěti a pořízení</h3>
<p className="font-body text-xs opacity-50 tracking-wide uppercase mb-6">Dědictví</p>
<p className="font-body text-sm opacity-80 leading-relaxed">
                            Sepisování závětí, listin o vydědění a dědických smluv pro jasné vypořádání majetku v
                            případě smrti.
                        </p>
</div>
<div className="w-8 h-[1px] bg-[#141414] opacity-20 group-hover:w-full transition-all duration-700">
</div>
</article>

<article className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-default p-8 border border-[#141414] border-opacity-10 bg-[#FBF7EF] hover:bg-[#F2EDE4] transition-colors duration-500 flex flex-col justify-between h-[400px]">
<div>
<div className="mb-8 text-[#141414] opacity-80 group-hover:scale-110 transition-transform duration-500 origin-left">
<iconify-icon icon="solar:home-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="font-display text-2xl tracking-tight mb-2">Majetkové dispozice</h3>
<p className="font-body text-xs opacity-50 tracking-wide uppercase mb-6">Nemovitosti &amp; Smlouvy</p>
<p className="font-body text-sm opacity-80 leading-relaxed">
                            Příprava kupních nebo darovacích smluv, ujednání o věcných břemenech a převodech
                            nemovitostí.
                        </p>
</div>
<div className="w-8 h-[1px] bg-[#141414] opacity-20 group-hover:w-full transition-all duration-700">
</div>
</article>

<article className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-default p-8 border border-[#141414] border-opacity-10 bg-[#FBF7EF] hover:bg-[#F2EDE4] transition-colors duration-500 flex flex-col justify-between h-[400px]">
<div>
<div className="mb-8 text-[#141414] opacity-80 group-hover:scale-110 transition-transform duration-500 origin-left">
<iconify-icon icon="solar:safe-square-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="font-display text-2xl tracking-tight mb-2">Notářské úschovy</h3>
<p className="font-body text-xs opacity-50 tracking-wide uppercase mb-6">Peníze &amp; Listiny</p>
<p className="font-body text-sm opacity-80 leading-relaxed">
                            Bezpečné uložení kupních cen, závdavků nebo jiných listin s přesně danými pravidly pro
                            jejich vydání.
                        </p>
</div>
<div className="w-8 h-[1px] bg-[#141414] opacity-20 group-hover:w-full transition-all duration-700">
</div>
</article>

<article className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-default p-8 border border-[#141414] border-opacity-10 bg-[#FBF7EF] hover:bg-[#F2EDE4] transition-colors duration-500 flex flex-col justify-between h-[400px]">
<div>
<div className="mb-8 text-[#141414] opacity-80 group-hover:scale-110 transition-transform duration-500 origin-left">
<iconify-icon icon="solar:document-add-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="font-display text-2xl tracking-tight mb-2">Zástavní smlouvy</h3>
<p className="font-body text-xs opacity-50 tracking-wide uppercase mb-6">Rejstřík zástav</p>
<p className="font-body text-sm opacity-80 leading-relaxed">
                            Sepisování zástavních smluv a zajištění zápisu zástavních práv do Rejstříku zástav vedeného
                            Notářskou komorou ČR.
                        </p>
</div>
<div className="w-8 h-[1px] bg-[#141414] opacity-20 group-hover:w-full transition-all duration-700">
</div>
</article>

<article className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-default p-8 border border-[#141414] border-opacity-10 bg-[#FBF7EF] hover:bg-[#F2EDE4] transition-colors duration-500 flex flex-col justify-between h-[400px]">
<div>
<div className="mb-8 text-[#141414] opacity-80 group-hover:scale-110 transition-transform duration-500 origin-left">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="font-display text-2xl tracking-tight mb-2">Přímá vykonatelnost</h3>
<p className="font-body text-xs opacity-50 tracking-wide uppercase mb-6">Exekuční titul</p>
<p className="font-body text-sm opacity-80 leading-relaxed">
                            Souhlas s přímou vykonatelností v notářském zápisu, který plní funkci exekučního titulu pro
                            jednodušší vymáhání.
                        </p>
</div>
<div className="w-8 h-[1px] bg-[#141414] opacity-20 group-hover:w-full transition-all duration-700">
</div>
</article>

<article className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-default p-8 border border-[#141414] border-opacity-10 bg-[#FBF7EF] hover:bg-[#F2EDE4] transition-colors duration-500 flex flex-col justify-between h-[400px]">
<div>
<div className="mb-8 text-[#141414] opacity-80 group-hover:scale-110 transition-transform duration-500 origin-left">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="font-display text-2xl tracking-tight mb-2">Osvědčení</h3>
<p className="font-body text-xs opacity-50 tracking-wide uppercase mb-6">Osvědčování stavu</p>
<p className="font-body text-sm opacity-80 leading-relaxed">
                            Osvědčování právně významných skutečností nebo tělesného či majetkového stavu věcí formou
                            notářského zápisu.
                        </p>
</div>
<div className="w-8 h-[1px] bg-[#141414] opacity-20 group-hover:w-full transition-all duration-700">
</div>
</article>

<article className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-default p-8 border border-[#141414] border-opacity-10 bg-[#FBF7EF] hover:bg-[#F2EDE4] transition-colors duration-500 flex flex-col justify-between h-[400px]">
<div>
<div className="mb-8 text-[#141414] opacity-80 group-hover:scale-110 transition-transform duration-500 origin-left">
<iconify-icon icon="solar:folder-with-files-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="font-display text-2xl tracking-tight mb-2">Řízení o pozůstalosti</h3>
<p className="font-body text-xs opacity-50 tracking-wide uppercase mb-6">Dědictví</p>
<p className="font-body text-sm opacity-80 leading-relaxed">
                            Zpracování pozůstalostních řízení jako soudní komisař na základě pověření příslušným soudem.
                        </p>
</div>
<div className="w-8 h-[1px] bg-[#141414] opacity-20 group-hover:w-full transition-all duration-700">
</div>
</article>
</div>
</div>
</section>
<section className="w-full py-16 md:py-40 px-6 md:px-12 bg-[#E3D5CA]" id="nas-tym">
<div className="max-w-screen-xl mx-auto">
<span className="block font-body text-xs uppercase tracking-widest opacity-40 mb-4">Náš tým</span>
<h2 className="font-display text-4xl md:text-5xl leading-tight font-normal mb-16 tracking-tight reveal">
                Profesionálové, na které<br className="hidden md:block"/> se můžete spolehnout.
            </h2>

<div className="w-full bg-white rounded-3xl overflow-hidden mb-12 shadow-sm border border-[#141414]/5 reveal">
<div className="grid grid-cols-1 lg:grid-cols-12">

<div className="lg:col-span-5 h-[320px] lg:h-auto bg-[#FBF7EF] relative overflow-hidden group">
<div className="absolute inset-0 flex items-center justify-center opacity-15 group-hover:opacity-30 transition-opacity duration-500">
<iconify-icon icon="solar:user-linear" width="80"></iconify-icon>
</div>
</div>

<div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
<h3 className="font-display text-3xl md:text-4xl tracking-tight mb-1">Mgr. Markéta Káninská</h3>
<span className="font-body text-xs uppercase tracking-widest opacity-40 block mb-6">notářka</span>
<p className="font-body text-sm font-light opacity-70 leading-relaxed mb-6 md:columns-2 gap-8">Mgr.
                            Markéta Káninská vystudovala Právnickou fakultu Univerzity Karlovy v Praze, kterou
                            absolvovala v roce 2010 s vyznamenáním. Svou právní praxi zahájila v červnu roku 2006. V
                            advokacii setrvala více než sedm let. Advokátní stav opustila v září 2013, kdy začala
                            působit jako notářský koncipient a posléze jako notářský kandidát. S účinností ode dne
                            1.1.2019 byla jmenována notářkou v obvodu Obvodního soudu pro Prahu 4.</p>
<div className="flex flex-wrap gap-3">
<a className="h-10 px-5 rounded-full bg-[#141414] text-white flex items-center gap-2 font-body text-xs uppercase tracking-widest hover:bg-opacity-80 transition-all" href="mailto:kaninska@mojenotarka.cz">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon> E-mail
                            </a>
<a className="h-10 px-5 rounded-full border border-[#141414]/10 flex items-center gap-2 font-body text-xs uppercase tracking-widest hover:bg-[#FBF7EF] transition-colors" href="tel:+420212245750">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon> +420 212 245 750
                            </a>
</div>
</div>
</div>
</div>

<div className="flex justify-end gap-4 mb-6">
<button className="w-12 h-12 rounded-full border border-[#141414] border-opacity-20 flex items-center justify-center hover:bg-[#141414] hover:text-[#FBF7EF] transition-colors duration-300" onclick="document.getElementById('team-scroll').scrollBy({left: -340, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-[#141414] border-opacity-20 flex items-center justify-center hover:bg-[#141414] hover:text-[#FBF7EF] transition-colors duration-300" onclick="document.getElementById('team-scroll').scrollBy({left: 340, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:-mx-12 md:px-12" id="team-scroll">

<div className="min-w-[80vw] md:min-w-[320px] snap-center bg-white rounded-2xl overflow-hidden shadow-sm border border-[#141414]/5 group shrink-0">
<div className="h-[280px] bg-[#FBF7EF] relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center opacity-15 group-hover:opacity-30 transition-opacity duration-500">
<iconify-icon icon="solar:user-linear" width="56"></iconify-icon>
</div>
</div>
<div className="p-6">
<h4 className="font-display text-xl tracking-tight mb-1">JUDr. Markéta Košťálková</h4>
<span className="font-body text-xs uppercase tracking-widest opacity-40 block mb-4">zástupkyně
                            notářky</span>
<a className="font-body text-sm flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity" href="mailto:kostalkova@mojenotarka.cz">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
                            kostalkova@mojenotarka.cz
                        </a>
</div>
</div>

<div className="min-w-[80vw] md:min-w-[320px] snap-center bg-white rounded-2xl overflow-hidden shadow-sm border border-[#141414]/5 group shrink-0">
<div className="h-[280px] bg-[#FBF7EF] relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center opacity-15 group-hover:opacity-30 transition-opacity duration-500">
<iconify-icon icon="solar:user-linear" width="56"></iconify-icon>
</div>
</div>
<div className="p-6">
<h4 className="font-display text-xl tracking-tight mb-1">Jiřina Svobodová</h4>
<span className="font-body text-xs uppercase tracking-widest opacity-40 block mb-4">Office
                            manager</span>
<a className="font-body text-sm flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity" href="mailto:tajemnice@mojenotarka.cz">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon> tajemnice@mojenotarka.cz
                        </a>
</div>
</div>

<div className="min-w-[80vw] md:min-w-[320px] snap-center bg-white rounded-2xl overflow-hidden shadow-sm border border-[#141414]/5 group shrink-0">
<div className="h-[280px] bg-[#FBF7EF] relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center opacity-15 group-hover:opacity-30 transition-opacity duration-500">
<iconify-icon icon="solar:user-linear" width="56"></iconify-icon>
</div>
</div>
<div className="p-6">
<h4 className="font-display text-xl tracking-tight mb-1">Mgr. Eva Čmelínská</h4>
<span className="font-body text-xs uppercase tracking-widest opacity-40 block mb-4">notářská
                            koncipientka</span>
<a className="font-body text-sm flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity" href="mailto:cmelinska@mojenotarka.cz">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon> cmelinska@mojenotarka.cz
                        </a>
</div>
</div>

<div className="min-w-[80vw] md:min-w-[320px] snap-center bg-white rounded-2xl overflow-hidden shadow-sm border border-[#141414]/5 group shrink-0">
<div className="h-[280px] bg-[#FBF7EF] relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center opacity-15 group-hover:opacity-30 transition-opacity duration-500">
<iconify-icon icon="solar:user-linear" width="56"></iconify-icon>
</div>
</div>
<div className="p-6">
<h4 className="font-display text-xl tracking-tight mb-1">Ing. Barbora Motyčková</h4>
<span className="font-body text-xs uppercase tracking-widest opacity-40 block mb-4">notářská
                            asistentka</span>
<a className="font-body text-sm flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity" href="mailto:kancelar@mojenotarka.cz">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon> kancelar@mojenotarka.cz
                        </a>
</div>
</div>

<div className="min-w-[80vw] md:min-w-[320px] snap-center bg-white rounded-2xl overflow-hidden shadow-sm border border-[#141414]/5 group shrink-0">
<div className="h-[280px] bg-[#FBF7EF] relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center opacity-15 group-hover:opacity-30 transition-opacity duration-500">
<iconify-icon icon="solar:user-linear" width="56"></iconify-icon>
</div>
</div>
<div className="p-6">
<h4 className="font-display text-xl tracking-tight mb-1">Mgr. Kristýna Misařová</h4>
<span className="font-body text-xs uppercase tracking-widest opacity-40 block mb-4">notářská
                            koncipientka</span>
<a className="font-body text-sm flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity" href="mailto:misarova@mojenotarka.cz">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon> misarova@mojenotarka.cz
                        </a>
</div>
</div>
</div>
</div>
</section>
<section className="w-full py-16 md:py-24 px-6 md:px-12 bg-[#FBF7EF]" id="kontakt">
<div className="max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="flex flex-col gap-12 reveal">
<div>
<span className="font-body text-xs uppercase tracking-widest opacity-40 mb-4 block">Kontakt</span>
<h2 className="font-display text-4xl md:text-5xl tracking-tight mb-8">Navštivte nás osobně nebo se
                            ozvěte.</h2>
<div className="flex flex-col gap-6 text-[#141414]">
<div className="flex items-start gap-4">
<iconify-icon className="opacity-60 mt-1" icon="solar:map-point-linear" width="24"></iconify-icon>
<div>
<h4 className="font-body text-sm font-medium uppercase tracking-wide opacity-50 mb-1">
                                        Adresa</h4>
<p className="font-display text-xl">Malátova 461/17, 150 00 Praha 5 – Smíchov</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="opacity-60 mt-1" icon="solar:bus-linear" width="24"></iconify-icon>
<div>
<h4 className="font-body text-sm font-medium uppercase tracking-wide opacity-50 mb-1">
                                        Doprava</h4>
<p className="font-display text-xl">Tram – č. 9, 12, 15, 20 – Švandovo divadlo</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="opacity-60 mt-1" icon="solar:phone-linear" width="24"></iconify-icon>
<div>
<h4 className="font-body text-sm font-medium uppercase tracking-wide opacity-50 mb-1">
                                        Telefon</h4>
<p className="font-display text-xl">+420 212 245 750</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="opacity-60 mt-1" icon="solar:letter-linear" width="24"></iconify-icon>
<div>
<h4 className="font-body text-sm font-medium uppercase tracking-wide opacity-50 mb-1">
                                        Email</h4>
<a className="font-display text-xl hover:opacity-60 transition-opacity" href="mailto:kancelar@mojenotarka.cz">kancelar@mojenotarka.cz</a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="opacity-60 mt-1" icon="solar:info-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="font-body text-sm font-medium uppercase tracking-wide opacity-50 mb-1">
                                        Informace</h4>
<p className="font-display text-xl">IČ: 86841203 <span className="opacity-40 mx-2">/</span>
                                        DS: vpekw7n</p>
</div>
</div>
</div>
</div>

<div className="w-full h-[300px] bg-[#F2EDE4] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out border border-[#141414] border-opacity-10">
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full mix-blend-multiply opacity-90" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.108803510528!2d14.402636915718104!3d50.08053647942699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94fd5e903f57%3A0x6b4a6839d375ed21!2sMal%C3%A1tova%20461%2F17%2C%20150%2000%20Praha%205-Sm%C3%ADchov!5e0!3m2!1scs!2scz!4v1691234567890!5m2!1scs!2scz" style={{border: '0'}} width="100%"></iframe>
</div>
</div>

<div className="bg-[#FBF7EF] p-8 md:p-12 border border-[#141414] border-opacity-10 flex flex-col justify-center">
<h3 className="font-display text-3xl tracking-tight mb-8">Napište nám zprávu</h3>
<form action="https://formspree.io/f/YOUR_FORM_ID" className="flex flex-col gap-6" method="POST">
<div className="flex flex-col gap-2">
<label className="font-body text-xs uppercase tracking-widest opacity-60" htmlFor="name">Jméno a
                                Příjmení</label>
<input className="bg-transparent border-b border-[#141414] border-opacity-20 py-2 focus:outline-none focus:border-opacity-100 transition-all font-display text-xl placeholder:text-[#141414] placeholder:opacity-20" id="name" name="name" placeholder="Jan Novák" required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="font-body text-xs uppercase tracking-widest opacity-60" htmlFor="email">E-mail</label>
<input className="bg-transparent border-b border-[#141414] border-opacity-20 py-2 focus:outline-none focus:border-opacity-100 transition-all font-display text-xl placeholder:text-[#141414] placeholder:opacity-20" id="email" name="email" placeholder="jan.novak@example.com" required="" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="font-body text-xs uppercase tracking-widest opacity-60" htmlFor="phone">Telefon
                                (nepovinné)</label>
<input className="bg-transparent border-b border-[#141414] border-opacity-20 py-2 focus:outline-none focus:border-opacity-100 transition-all font-display text-xl placeholder:text-[#141414] placeholder:opacity-20" id="phone" name="phone" placeholder="+420 000 000 000" type="tel"/>
</div>
<div className="flex flex-col gap-2">
<label className="font-body text-xs uppercase tracking-widest opacity-60" htmlFor="message">Vaše
                                zpráva</label>
<textarea className="bg-transparent border-b border-[#141414] border-opacity-20 py-2 focus:outline-none focus:border-opacity-100 transition-all font-body text-base placeholder:text-[#141414] placeholder:opacity-20 resize-none" id="message" name="message" placeholder="Dobrý den, potřeboval bych..." required="" rows="4"></textarea>
</div>
<button className="mt-8 px-8 py-4 bg-[#141414] text-[#FBF7EF] font-body text-xs uppercase tracking-widest hover:opacity-80 transition-opacity self-start" type="submit">
                            Odeslat zprávu
                        </button>
</form>
</div>
</div>
</div>
</section>
<footer className="w-full py-8 px-6 md:px-12 bg-[#E3D5CA] flex flex-col md:flex-row justify-between items-center border-t border-[#141414] border-opacity-10 gap-4">
<span className="font-body text-xs opacity-40">© 2026 Notářská kancelář Mgr. Markéta Káninská</span>
<div className="flex gap-4 opacity-40">
<a href="mailto:kancelar@mojenotarka.cz"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</footer>


    </>
  );
}
