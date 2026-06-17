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



        document.getElementById('year').textContent = new Date().getFullYear();
    
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
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-white">
<span className="font-serif italic text-lg">D</span>
</div>
                SALON DOMINIQUE
            </a>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#uvod">Úvod</a>
<a className="hover:text-zinc-900 transition-colors" href="#onas">O nás</a>
<a className="hover:text-zinc-900 transition-colors" href="#sluzby">Služby</a>
<a className="hover:text-zinc-900 transition-colors" href="#cenik">Ceník</a>
<a className="hover:text-zinc-900 transition-colors" href="#kontakt">Kontakt</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-medium border border-zinc-200 rounded-full px-4 py-2 hover:bg-white hover:border-zinc-300 transition-all" href="tel:+420737605329">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                    737 605 329
                </a>
<a className="bg-zinc-900 text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors shadow-sm" href="#kontakt">
                    Objednat se
                </a>
</div>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 max-w-7xl border-zinc-200 border-b mr-auto ml-auto pt-32 pr-6 pb-20 pl-6" id="uvod">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-6">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Otevřeno: Po-Pá 8:00 - 18:00
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-zinc-900 tracking-tighter leading-[1.1] mb-6">
                    Vítejte v Salonu <br/><span className="text-zinc-400">Dominique.</span>
</h1>
<p className="text-lg text-zinc-500 mb-8 max-w-lg font-light leading-relaxed">
                    V příjemném a stylovém prostředí se o vás postará tým kadeřnic a kadeřníků. Nabízíme profesionální a osobitý přístup, poradíme se střihem i barvou a postaráme se o váš dokonalý vzhled.
                </p>
<div className="flex flex-wrap gap-4">
<a className="bg-zinc-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-zinc-800 transition-all flex items-center gap-2" href="#sluzby">
                        Naše služby
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="bg-white border border-zinc-200 text-zinc-700 text-sm font-medium px-6 py-3 rounded-full hover:bg-zinc-50 transition-all flex items-center gap-2" href="#kontakt">
                        Kde nás najdete
                    </a>
</div>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto py-24 px-6" id="onas">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="flex flex-col justify-center h-full">
<h2 className="text-3xl lg:text-4xl font-semibold text-zinc-900 tracking-tighter mb-8">O nás</h2>
<div className="space-y-6 text-zinc-500 font-light leading-relaxed text-lg">
<p className="">
                        Dámské i pánské kadeřnictví, výtečná kosmetika, nebo krásná manikúra se nachází na jednom místě, v salonu Dominique. Jsme salon s dlouholetou tradicí, ve kterém můžete využít plně svůj čas nejen zkrášlováním, ale i příjemným relaxem v poklidném a pohodlném prostředí.
                    </p>
<p className="">
                        Naši zaměstnanci Vám splní téměř jakékoliv přání, které Vám na očích uvidí, tak aby se z vašeho ostříhání, manikúry či kosmetiky stal nevšední zážitek, na který se budete znovu a znovu těšit.
                    </p>
<p className="">
                        Tyto služby Vám provedou proškolené profesionální pracovnice, zúčastněné na leckterých soutěžích. Není proto problém si od nich přát téměř jakýkoliv účes, barvu, nehtík, či rozmazlování.
                    </p>
<div className="pt-8 mt-4 border-t border-zinc-100">
<p className="font-medium text-zinc-900 text-base">Dominika Havlíková</p>
<p className="text-sm text-zinc-400">Majitelka salonu</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 lg:gap-6">
<div className="space-y-4 lg:space-y-6 mt-12">
<img alt="Detail vlasů" className="rounded-2xl w-full aspect-[3/4] object-cover bg-zinc-100 shadow-sm" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Manikúra" className="rounded-2xl w-full aspect-square object-cover bg-zinc-100 shadow-sm" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-4 lg:space-y-6">
<img alt="Interiér" className="rounded-2xl w-full aspect-square object-cover bg-zinc-100 shadow-sm" src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Kosmetika" className="rounded-2xl w-full aspect-[3/4] object-cover bg-zinc-100 shadow-sm" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900 text-white rounded-[2.5rem] mx-2 lg:mx-6" id="sluzby">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tighter mb-4">Naše služby</h2>
<p className="text-zinc-400 max-w-2xl font-light">
                    Kromě tradiční péče o Vaše vlasy Vám nabídneme spoustu dalších zajímavých a kvalitních služeb.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-zinc-800/50 p-8 rounded-3xl border border-zinc-700/50 hover:border-zinc-600 transition-colors">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-zinc-900 mb-6">
<iconify-icon icon="solar:scissors-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-4">Péče o vlasy</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                        Profesionální střihy pro dámy, pány i děti. Melíry, barvení, trvalá a společenské účesy. Poradíme vám se střihem i barvou vhodnou k vaší osobě.
                    </p>
<ul className="space-y-3 text-sm text-zinc-300 font-light">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-white" icon="solar:star-linear"></iconify-icon>
<span className=""><strong className="text-white">Brazilský keratin:</strong> Permanentní ozdravení vlasů. Vyrovná a vyhladí i krepaté vlasy.</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-white" icon="solar:star-linear"></iconify-icon>
<span className=""><strong className="text-white">Prodlužování vlasů:</strong> Technika fill-in (keratin) od firmy BALMAIN. Zahuštění i prodloužení.</span>
</li>
</ul>
</div>

<div className="bg-zinc-800/50 p-8 rounded-3xl border border-zinc-700/50 hover:border-zinc-600 transition-colors">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-zinc-900 mb-6">
<iconify-icon icon="solar:palette-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-4">Manikúra a Nehty</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                        Kompletní péče o ruce. P-SHINE, japonská manikúra, zábaly v termorukavicích pro suché ruce.
                    </p>
<ul className="space-y-3 text-sm text-zinc-300 font-light">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Gelové nehty (UV lampa)</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Akrylové nehty</span>
</li>
</ul>
<div className="mt-6">
<a className="text-xs border-b border-zinc-600 pb-1 hover:text-white hover:border-white transition-colors" href="http://dandyn1.rajce.idnes.cz/" target="_blank">
                            Zobrazit ukázky práce (Galerie)
                        </a>
</div>
</div>

<div className="bg-zinc-800/50 p-8 rounded-3xl border border-zinc-700/50 hover:border-zinc-600 transition-colors">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-zinc-900 mb-6">
<iconify-icon icon="solar:face-scan-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-4">Kosmetické služby</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                        Celkové ošetření pleti, masáž dekoltu a obličeje, napářka, hloubkové čištění, peeling a masky. Používáme kosmetiku značky LR (Aloe vera).
                    </p>
<ul className="space-y-3 text-sm text-zinc-300 font-light">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Depilace voskem/medem</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Úprava a barvení obočí/řas</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-4xl mx-auto" id="cenik">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight">Orientační Ceník</h2>
<p className="text-zinc-500 mt-2 font-light">Ceny se vztahují na krátké vlasy. Ostatní dohodou.</p>
</div>
<div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
<div className="divide-y divide-zinc-100">
<div className="flex justify-between items-center p-5 hover:bg-zinc-50 transition-colors">
<span className="font-medium text-zinc-900">Mytí + foukaná</span>
<span className="font-semibold text-zinc-900">230,-</span>
</div>
<div className="flex justify-between items-center p-5 hover:bg-zinc-50 transition-colors">
<span className="font-medium text-zinc-900">Střih + foukaná</span>
<span className="font-semibold text-zinc-900">300,-</span>
</div>
<div className="flex justify-between items-center p-5 hover:bg-zinc-50 transition-colors">
<span className="font-medium text-zinc-900">Střih + trvalá</span>
<span className="font-semibold text-zinc-900">600,-</span>
</div>
<div className="flex justify-between items-center p-5 hover:bg-zinc-50 transition-colors">
<span className="font-medium text-zinc-900">Střih + barvení</span>
<span className="font-semibold text-zinc-900">620,-</span>
</div>
<div className="flex justify-between items-center p-5 hover:bg-zinc-50 transition-colors">
<span className="font-medium text-zinc-900">Střih + melír</span>
<span className="font-semibold text-zinc-900">od 700,-</span>
</div>
<div className="flex justify-between items-center p-5 hover:bg-zinc-50 transition-colors">
<span className="font-medium text-zinc-900">Večerní účes</span>
<span className="font-semibold text-zinc-900">500 - 1000,-</span>
</div>
</div>
<div className="bg-zinc-50 p-5 text-center text-sm text-zinc-500 border-t border-zinc-200">
                Možnost docházky domů za 100% příplatek.
            </div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-200 bg-white" id="kontakt">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
<div className="">
<h2 className="text-4xl font-semibold text-zinc-900 tracking-tighter mb-8">Kontaktujte nás</h2>
<div className="space-y-8">

<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-zinc-900 mb-1">Adresa</h3>
<p className="text-zinc-500 font-light leading-relaxed">
                                Hlavní 110 b<br/>
                                Brno 624 00 (Komín)<br/>
<span className="text-xs text-zinc-400 block mt-2">Trolejbus č.30, 36 nebo tramvaj 1, 3, 11. Parkování přímo před salonem.</span>
</p>
</div>
</div>

<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-zinc-900 mb-1">Telefony</h3>
<p className="text-zinc-500 font-light">
<a className="hover:text-zinc-900 transition-colors" href="tel:541222990">541 222 990</a><br/>
<a className="hover:text-zinc-900 transition-colors" href="tel:737605329">737 605 329</a> (Mobil)
                            </p>
</div>
</div>

<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-zinc-900 mb-1">Email</h3>
<a className="text-zinc-500 font-light hover:text-zinc-900 transition-colors" href="mailto:domi.h@seznam.cz">domi.h@seznam.cz</a>
</div>
</div>

<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-zinc-900 mb-1">Pracovní doba</h3>
<table className="text-sm text-zinc-500 font-light w-full max-w-[200px]">
<tbody className=""><tr className="">
<td className="py-1">Pondělí - Pátek</td>
<td className="text-right text-zinc-900">8:00 - 18:00</td>
</tr>
</tbody></table>
<p className="text-xs text-zinc-400 mt-2">Mimo pracovní dobu dle dohody.</p>
</div>
</div>
</div>
</div>

</div>
</section>

<footer className="bg-zinc-50 border-t border-zinc-200 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-white text-xs font-serif italic">D</div>
<span className="font-semibold tracking-tight text-zinc-900">Salon Dominique</span>
</div>
<p className="text-xs text-zinc-400 font-light">
                © <span id="year">2026</span> Kadeřnictví Dominique. Všechna práva vyhrazena.
            </p>
</div>
</footer>


    </>
  );
}
