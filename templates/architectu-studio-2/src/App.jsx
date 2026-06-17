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
      

<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 mix-blend-difference text-white">
<a className="text-lg font-semibold tracking-tighter uppercase" href="#" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>Konstrukt</a>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
<a className="hover:text-[#ccff00] transition-colors" href="#about">O studiu</a>
<a className="hover:text-[#ccff00] transition-colors" href="#projects">Projekty</a>
<a className="hover:text-[#ccff00] transition-colors" href="#process">Proces</a>
<a className="hover:text-[#ccff00] transition-colors" href="#contact">Kontakt</a>
</div>
<button className="md:hidden flex flex-col gap-1.5 p-2">
<span className="w-6 h-[1px] bg-current"></span>
<span className="w-6 h-[1px] bg-current"></span>
</button>
</nav>

<header className="relative min-h-screen flex flex-col justify-end px-6 pb-24 md:pb-32 overflow-hidden">
<div className="absolute inset-0 z-0 opacity-20">
<img alt="Abstract Architecture" className="w-full h-full object-cover object-bottom grayscale" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
<div className="md:col-span-8">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter uppercase leading-[0.9]" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>
<span className="block">Prostor</span>
<span className="block text-neutral-600">není daný.</span>
<span className="block">Prostor</span>
<span className="block text-[#ccff00]">se tvoří.</span>
</h1>
</div>
<div className="md:col-span-4 flex flex-col items-start gap-8">
<p className="text-base md:text-lg text-neutral-400 font-light leading-relaxed">
                    Neakceptujeme standardy. Zpochybňujeme zažité konvence a hledáme nové průsečíky mezi hmotou, světlem a lidským prožitkem. Architektura jako manifest odvahy.
                </p>
<a className="group flex items-center gap-3 text-sm font-semibold tracking-wide uppercase border border-neutral-700 hover:border-[#ccff00] px-6 py-4 rounded-full transition-all duration-300 hover:bg-[#ccff00] hover:text-black" href="#projects">
                    Prohlédnout projekty
                    <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-32 px-6 border-t border-neutral-900" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
<div className="md:col-span-5 flex flex-col justify-between">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter uppercase leading-tight sticky top-32" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>
                    Redefinice<br/>kontextu
                </h2>
<div className="hidden md:block w-full aspect-square mt-24 overflow-hidden bg-neutral-900">
<img alt="Detail" className="w-full h-full object-cover grayscale opacity-50 mix-blend-luminosity hover:opacity-100 hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="md:col-span-6 md:col-start-7 flex flex-col gap-16 mt-8 md:mt-0">
<div>
<h3 className="text-xs font-semibold text-[#ccff00] tracking-widest uppercase mb-4">Příběh značky</h3>
<p className="text-xl md:text-2xl font-light leading-relaxed tracking-tight">
                        Vznikli jsme z frustrace nad uniformitou současné zástavby. Naše studio je laboratoří pro prostorové experimenty. Nejsme jen navrhovatelé budov, jsme tvůrci prostředí, která formují chování a emoce.
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
<div>
<h3 className="text-xs font-semibold text-[#ccff00] tracking-widest uppercase mb-4">Filozofie</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Forma u nás následuje kontext, ne pouhou funkci. Každý pozemek v sobě skrývá neviditelný kód, který dekódujeme prostřednictvím surových materiálů a radikální geometrie.
                        </p>
</div>
<div>
<h3 className="text-xs font-semibold text-[#ccff00] tracking-widest uppercase mb-4">Hodnoty</h3>
<ul className="text-sm text-neutral-400 space-y-3">
<li className="flex items-center gap-2"><iconify-icon className="text-[#ccff00]" icon="solar:check-circle-linear"></iconify-icon> Konstrukční pravdivost</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#ccff00]" icon="solar:check-circle-linear"></iconify-icon> Radikální udržitelnost</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#ccff00]" icon="solar:check-circle-linear"></iconify-icon> Asymetrická rovnováha</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#ccff00]" icon="solar:check-circle-linear"></iconify-icon> Odvaha k negaci</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-neutral-900 bg-[#080808]" id="projects">
<div className="px-6 mb-24 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter uppercase" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>Vybrané<br/><span className="text-neutral-600">Realizace</span></h2>
<p className="text-sm text-neutral-400 max-w-xs">Archiv našich nejvýznamnějších zásahů do prostoru. Od privátních vil po kulturní instituce.</p>
</div>
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">

<article className="group cursor-pointer">
<div className="relative overflow-hidden bg-neutral-900 mb-6">
<img alt="Vila Lom" className="w-full aspect-[4/3] object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>

<div className="grid grid-cols-3 gap-2 mb-6">
<img alt="Detail 1" className="w-full aspect-square object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<img alt="Vnitřní designový interiér" className="aspect-square group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 delay-75 opacity-70 w-full object-cover grayscale" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<img alt="Detail 3" className="w-full aspect-square object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 delay-150" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase text-neutral-500">
<span>Beroun</span>
<span className="w-1 h-1 rounded-full bg-[#ccff00]"></span>
<span>2023</span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase group-hover:text-[#ccff00] transition-colors" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>Vila Lom</h3>
<p className="text-sm text-neutral-400 leading-relaxed mt-2">
                        Betonový monolit brutálně zasazený do surové skály bývalého lomu. Koncept stojí na tenzi mezi těžkou hmotou stavby a světlem, které do interiéru proniká úzkými vertikálními štěrbinami.
                    </p>
</div>
</article>

<article className="group cursor-pointer lg:mt-32">
<div className="relative overflow-hidden bg-neutral-900 mb-6">
<img alt="Pavilon X" className="w-full aspect-[4/3] object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>

<div className="grid grid-cols-3 gap-2 mb-6">
<img alt="Detail 1" className="w-full aspect-square object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<img alt="Detail 2" className="w-full aspect-square object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 delay-75" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<img alt="Detail 3" className="w-full aspect-square object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 delay-150" src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&amp;w=2067&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase text-neutral-500">
<span>Praha</span>
<span className="w-1 h-1 rounded-full bg-[#ccff00]"></span>
<span>2024</span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase group-hover:text-[#ccff00] transition-colors" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>Pavilon X</h3>
<p className="text-sm text-neutral-400 leading-relaxed mt-2">
                        Levitační struktura z oceli a tónovaného skla umístěná v industriálním brownfieldu. Budova funguje jako zrcadlo okolí přes den a jako transparentní světelný objekt v noci. Úplná negace vlastní hmoty.
                    </p>
</div>
</article>
</div>
</section>

<section className="py-32 px-6 border-t border-neutral-900 bg-[#050505]" id="process">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16">
<div className="md:col-span-4">
<h2 className="text-sm font-semibold text-[#ccff00] tracking-widest uppercase sticky top-32">Anatomie spolupráce</h2>
</div>
<div className="md:col-span-8 flex flex-col">
<div className="group border-t border-neutral-800 py-12 flex flex-col md:flex-row md:items-start gap-6 md:gap-12 transition-colors hover:border-neutral-600">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-800 group-hover:text-[#ccff00] transition-colors" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>01</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight uppercase mb-4 text-neutral-200">Dekonstrukce zadání</h3>
<p className="text-base text-neutral-400 leading-relaxed max-w-xl">
                                První fáze není o kreslení. Je o rozbití klientovy původní představy na základní prvočinitele. Analyzujeme lokaci, zvyky, limity a skryté potenciály. Hledáme skutečnou otázku, na kterou má stavba odpovědět.
                            </p>
</div>
</div>
<div className="group border-t border-neutral-800 py-12 flex flex-col md:flex-row md:items-start gap-6 md:gap-12 transition-colors hover:border-neutral-600">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-800 group-hover:text-[#ccff00] transition-colors" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>02</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight uppercase mb-4 text-neutral-200">Prostorová syntéza</h3>
<p className="text-base text-neutral-400 leading-relaxed max-w-xl">
                                Tvorba prvotních hmotových konceptů. Pracujeme s fyzickými modely a abstraktní geometrií. V této fázi definujeme vztah budovy k pozemku a základní světelné scénáře.
                            </p>
</div>
</div>
<div className="group border-t border-neutral-800 py-12 flex flex-col md:flex-row md:items-start gap-6 md:gap-12 transition-colors hover:border-neutral-600">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-800 group-hover:text-[#ccff00] transition-colors" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>03</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight uppercase mb-4 text-neutral-200">Materiálová pravdivost</h3>
<p className="text-base text-neutral-400 leading-relaxed max-w-xl">
                                Odmítáme atrapy. Beton je beton, ocel je ocel. Vybíráme materiály, které budou stárnout s grácií a propůjčí stavbě haptickou kvalitu. Řešíme detail na úroveň milimetrů.
                            </p>
</div>
</div>
<div className="group border-t border-b border-neutral-800 py-12 flex flex-col md:flex-row md:items-start gap-6 md:gap-12 transition-colors hover:border-neutral-600">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-800 group-hover:text-[#ccff00] transition-colors" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>04</div>
<div className="">
<h3 className="text-2xl font-semibold tracking-tight uppercase mb-4 text-neutral-200">Nekompromisní exekuce</h3>
<p className="text-base text-neutral-400 leading-relaxed max-w-xl">
                                Architektura nekončí na papíře. Zajišťujeme přísný autorský dozor na stavbě. Chráníme původní vizi před kompromisy a zkratkami stavebního procesu.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-neutral-900 overflow-hidden relative">
<div className="absolute top-0 right-0 -mr-32 -mt-32 text-[20vw] font-semibold text-neutral-900 select-none z-0" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>TÝM</div>
<div className="max-w-7xl mx-auto relative z-10">
<h2 className="md:text-6xl uppercase text-4xl font-semibold tracking-tighter mb-16" style={{fontFamily: '"Space Grotesk", sans-serif'}}>Lidé za<br/>fIrmou</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group">
<div className="w-full aspect-[3/4] bg-neutral-900 mb-6 overflow-hidden">
<img alt="Jan Novák" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-semibold tracking-tight uppercase">Jan Novák</h3>
<p className="text-xs text-[#ccff00] font-semibold tracking-widest uppercase mt-1 mb-3">Zakladatel / Vizionář</p>
<p className="text-sm text-neutral-500 leading-relaxed">Provokatér, který neustále posouvá hranice statiky a zpochybňuje zažité typologie.</p>
</div>

<div className="group lg:mt-16">
<div className="w-full aspect-[3/4] bg-neutral-900 mb-6 overflow-hidden">
<img alt="Eva Hrubá" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=1961&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-semibold tracking-tight uppercase">Eva Hrubá</h3>
<p className="text-xs text-[#ccff00] font-semibold tracking-widest uppercase mt-1 mb-3">Hlavní Architektka</p>
<p className="text-sm text-neutral-500 leading-relaxed">Génius detailu. Překládá radikální koncepty do bezchybných prováděcích dokumentací.</p>
</div>

<div className="group">
<div className="w-full aspect-[3/4] bg-neutral-900 mb-6 overflow-hidden">
<img alt="David Kříž" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-semibold tracking-tight uppercase">David Kříž</h3>
<p className="text-xs text-[#ccff00] font-semibold tracking-widest uppercase mt-1 mb-3">Materiálový inženýr</p>
<p className="text-sm text-neutral-500 leading-relaxed">Hledá surové textury a inovativní způsoby využití tradičních stavebních hmot.</p>
</div>

<div className="group lg:mt-16">
<div className="w-full aspect-[3/4] bg-neutral-900 mb-6 flex items-center justify-center border border-neutral-800 group-hover:border-[#ccff00] transition-colors">
<div className="text-center">
<iconify-icon className="text-4xl text-neutral-600 group-hover:text-[#ccff00] transition-colors mb-4" icon="solar:user-plus-linear"></iconify-icon>
<p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 group-hover:text-white">Přidej se k nám</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#080808] border-t border-neutral-900 px-6">
<div className="max-w-4xl mx-auto text-center">
<iconify-icon className="text-6xl text-[#ccff00] mb-8 opacity-50" icon="solar:quote-right-bold-duotone"></iconify-icon>
<h2 className="text-2xl md:text-4xl font-light leading-snug tracking-tight mb-12">
                „Nesnažili se nám dát to, co jsme chtěli. Dali nám to, co jsme <span className="text-white font-semibold">nevěděli, že potřebujeme.</span> Jejich zásah do prostoru zcela přepsal interní dynamiku naší firmy a způsob, jakým fungujeme.“
            </h2>
<div className="flex flex-col items-center gap-1">
<span className="text-sm font-semibold tracking-widest uppercase text-white">Martin Kovář</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">CEO, Tech Hub Praha / Rekonstrukce HQ</span>
</div>
</div>
</section>

<footer className="pt-32 pb-12 px-6 bg-[#050505] border-t border-neutral-900" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
<div className="">
<h2 className="text-6xl md:text-8xl font-semibold tracking-tighter uppercase mb-8" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>Zahájit<br/><span className="text-[#ccff00]">Dialog</span></h2>
<p className="text-base text-neutral-400 mb-12 max-w-md">
                    Hledáme klienty s odvahou. Pokud jste připraveni odhodit konvence a vytvořit něco radikálního, napište nám.
                </p>
<div className="flex flex-col gap-6 text-sm">
<a className="flex items-center gap-4 hover:text-[#ccff00] transition-colors w-fit group" href="mailto:studio@konstrukt.cz">
<iconify-icon className="text-xl text-neutral-500 group-hover:text-[#ccff00]" icon="solar:letter-linear"></iconify-icon>
                        studio@konstrukt.cz
                    </a>
<a className="flex items-center gap-4 hover:text-[#ccff00] transition-colors w-fit group" href="tel:+420777123456">
<iconify-icon className="text-xl text-neutral-500 group-hover:text-[#ccff00]" icon="solar:phone-linear"></iconify-icon>
                        +420 777 123 456
                    </a>
<div className="flex items-start gap-4 text-neutral-400 mt-4">
<iconify-icon className="text-xl text-neutral-500 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>
                            Betonová 42, Industriální zóna<br/>
                            190 00 Praha 9<br/>
                            Česká republika
                        </span>
</div>
</div>
<div className="flex gap-6 mt-12">
<a className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center hover:border-[#ccff00] hover:text-[#ccff00] transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:instagram-linear"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center hover:border-[#ccff00] hover:text-[#ccff00] transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:point-on-map-linear"></iconify-icon>
</a>
</div>
</div>
<div className="bg-neutral-900/50 p-8 md:p-12 border border-neutral-800">
<form className="flex flex-col gap-10">
<div className="relative">
<input className="peer w-full bg-transparent border-b border-neutral-700 py-2 text-base text-white focus:outline-none focus:border-[#ccff00] transition-colors placeholder-transparent" id="name" placeholder=" " type="text"/>
<label className="absolute left-0 top-2 text-neutral-500 text-sm transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#ccff00] peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-xs" htmlFor="name">Jméno a příjmení</label>
</div>
<div className="relative">
<input className="peer w-full bg-transparent border-b border-neutral-700 py-2 text-base text-white focus:outline-none focus:border-[#ccff00] transition-colors placeholder-transparent" id="email" placeholder=" " type="email"/>
<label className="absolute left-0 top-2 text-neutral-500 text-sm transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#ccff00] peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-xs" htmlFor="email">E-mail</label>
</div>
<div className="relative">
<input className="peer w-full bg-transparent border-b border-neutral-700 py-2 text-base text-white focus:outline-none focus:border-[#ccff00] transition-colors placeholder-transparent" id="project" placeholder=" " type="text"/>
<label className="absolute left-0 top-2 text-neutral-500 text-sm transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#ccff00] peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-xs" htmlFor="project">Typ projektu (např. Vila, Galerie...)</label>
</div>
<div className="relative mt-4">
<textarea className="peer w-full bg-transparent border-b border-neutral-700 py-2 text-base text-white focus:outline-none focus:border-[#ccff00] transition-colors placeholder-transparent resize-none" id="message" placeholder=" " rows="4"></textarea>
<label className="absolute left-0 top-2 text-neutral-500 text-sm transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#ccff00] peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-xs" htmlFor="message">Vize / Popis záměru</label>
</div>
<button className="mt-4 bg-white text-black font-semibold tracking-wide uppercase py-4 px-8 hover:bg-[#ccff00] transition-colors self-start text-sm" type="button">
                        Odeslat manifest
                    </button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-900 text-xs text-neutral-600 font-medium tracking-wide">
<p>© 2024 KONSTRUKT STUDIO. Všechna práva vyhrazena.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Impressum</a>
<a className="hover:text-white transition-colors" href="#">Ochrana soukromí</a>
</div>
</div>
</footer>

    </>
  );
}
