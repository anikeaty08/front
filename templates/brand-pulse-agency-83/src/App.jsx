import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
lime: {
400: '#ccff00',
500: '#b3e600',
},
zinc: {
950: '#09090b',
900: '#18181b',
800: '#27272a',
400: '#a1a1aa',
300: '#d4d4d8',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        document.addEventListener('DOMContentLoaded', () => {
            const links = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('.page-section');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');

            function showSection(targetId) {
                sections.forEach(sec => {
                    sec.classList.remove('active');
                    setTimeout(() => { if(!sec.classList.contains('active')) sec.style.display = 'none'; }, 300);
                });

                const targetSec = document.getElementById(targetId);
                if (targetSec) {
                    targetSec.style.display = 'block';
                    setTimeout(() => {
                        targetSec.classList.add('active');
                    }, 10);
                }
                window.scrollTo(0, 0);
            }

            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = link.getAttribute('data-target');
                    showSection(target);
                    mobileMenu.classList.add('hidden');
                });
            });

            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    header.style.backgroundColor = 'rgba(9, 9, 11, 0.85)';
                    header.style.borderBottomColor = 'rgba(39, 39, 42, 0.8)';
                } else {
                    header.style.backgroundColor = 'rgba(9, 9, 11, 0.7)';
                    header.style.borderBottomColor = 'rgba(39, 39, 42, 0.5)';
                }
            });
        });

        function hideCookieBanner() {
            const banner = document.getElementById('cookie-banner');
            banner.style.transform = 'translateY(100%)';
            setTimeout(() => { banner.style.display = 'none'; }, 300);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 glass-nav transition-all duration-300" id="header">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-white font-medium text-lg tracking-tight flex items-center gap-1 nav-link" data-target="domu" href="#domu">
                BRANDPULSE<span className="text-lime-400">.</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-base font-normal">
<a className="hover:text-white transition-colors nav-link" data-target="domu" href="#domu">Domů</a>
<a className="hover:text-white transition-colors nav-link" data-target="o-nas" href="#o-nas">O nás</a>
<a className="hover:text-white transition-colors nav-link" data-target="sluzby" href="#sluzby">Služby</a>
<a className="hover:text-white transition-colors nav-link" data-target="prace" href="#prace">Naše práce</a>
<a className="hover:text-white transition-colors nav-link" data-target="blog" href="#blog">Blog</a>
<a className="hover:text-white transition-colors nav-link" data-target="kariera" href="#kariera">Kariéra</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center bg-lime-400 text-zinc-950 px-5 py-2.5 rounded-full text-base font-medium hover:bg-lime-500 transition-colors nav-link" data-target="kontakt" href="#kontakt">
                    Získat návrh
                </a>
<button className="md:hidden text-white p-2" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="hidden md:hidden bg-zinc-950 border-b border-zinc-800/50 absolute top-20 left-0 w-full px-6 py-4 flex flex-col gap-4 shadow-2xl" id="mobile-menu">
<a className="text-lg hover:text-white transition-colors nav-link" data-target="domu" href="#domu">Domů</a>
<a className="text-lg hover:text-white transition-colors nav-link" data-target="o-nas" href="#o-nas">O nás</a>
<a className="text-lg hover:text-white transition-colors nav-link" data-target="sluzby" href="#sluzby">Služby</a>
<a className="text-lg hover:text-white transition-colors nav-link" data-target="prace" href="#prace">Naše práce</a>
<a className="text-lg hover:text-white transition-colors nav-link" data-target="blog" href="#blog">Blog</a>
<a className="text-lg hover:text-white transition-colors nav-link" data-target="kariera" href="#kariera">Kariéra</a>
<a className="inline-flex items-center justify-center bg-lime-400 text-zinc-950 px-5 py-3 rounded-lg text-base font-medium mt-2 nav-link" data-target="kontakt" href="#kontakt">Získat návrh</a>
</div>
</header>
<main className="flex-grow pt-20" id="main-content">

<section className="page-section active" id="domu">

<div className="max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-sm font-normal text-zinc-300 mb-8">
<span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
                    Přijímáme nové projekty pro Q3
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white mb-6 max-w-4xl text-balance">
                    Budujeme značky a weby, které <span className="text-zinc-500">reálně prodávají.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 text-balance">
                    Pomáháme ambiciózním firmám růst chytře. Spojujeme prémiový design, strategii a výkonnostní marketing do jednoho funkčního celku, který zvyšuje důvěru a konverze.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="bg-lime-400 text-zinc-950 px-8 py-3.5 rounded-full text-base font-medium hover:bg-lime-500 transition-colors nav-link w-full sm:w-auto text-center" data-target="kontakt">
                        Nezávazná konzultace
                    </button>
<button className="px-8 py-3.5 rounded-full text-base font-medium text-white border border-zinc-800 hover:bg-zinc-900 transition-colors nav-link w-full sm:w-auto text-center" data-target="prace">
                        Prohlédnout práci
                    </button>
</div>

<div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl border-t border-zinc-800/50 pt-10">
<div className="text-left md:text-center">
<p className="text-3xl font-normal text-white tracking-tight">50+</p>
<p className="text-sm text-zinc-500 mt-1 uppercase tracking-widest">Úspěšných projektů</p>
</div>
<div className="text-left md:text-center">
<p className="text-3xl font-normal text-white tracking-tight">+120%</p>
<p className="text-sm text-zinc-500 mt-1 uppercase tracking-widest">Průměrný růst konverzí</p>
</div>
<div className="text-left md:text-center">
<p className="text-3xl font-normal text-white tracking-tight">4</p>
<p className="text-sm text-zinc-500 mt-1 uppercase tracking-widest">Roky na trhu</p>
</div>
<div className="text-left md:text-center">
<p className="text-3xl font-normal text-white tracking-tight">100%</p>
<p className="text-sm text-zinc-500 mt-1 uppercase tracking-widest">In-house tým</p>
</div>
</div>
</div>

<div className="bg-zinc-950 py-24 border-t border-zinc-800/50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Co pro vás můžeme udělat</h2>
<p className="text-zinc-400 max-w-lg text-base md:text-lg">Nejsme jen grafici. Jsme strategičtí partneři. Řešíme váš problém komplexně od vizuální identity po akvizici zákazníků.</p>
</div>
<button className="text-base font-medium text-lime-400 hover:text-lime-500 flex items-center gap-1 nav-link" data-target="sluzby">
                            Všechny služby <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="premium-card p-8 rounded-2xl group cursor-pointer nav-link" data-target="sluzby">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-white mb-3 tracking-tight">Brand identita</h3>
<p className="text-base text-zinc-400 mb-6">Tvoříme sebevědomé značky, které vyčnívají z davu. Od loga přes vizuální systém až po tone of voice.</p>
</div>
<div className="premium-card p-8 rounded-2xl group cursor-pointer nav-link" data-target="sluzby">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="laptop" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-white mb-3 tracking-tight">Webdesign &amp; Vývoj</h3>
<p className="text-base text-zinc-400 mb-6">Navrhujeme a kódujeme weby zaměřené na konverzi a perfektní uživatelský zážitek. Rychlé, čisté, responzivní.</p>
</div>
<div className="premium-card p-8 rounded-2xl group cursor-pointer nav-link" data-target="sluzby">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-white mb-3 tracking-tight">Výkonnostní marketing</h3>
<p className="text-base text-zinc-400 mb-6">PPC kampaně, které pálí ostrými. Spravujeme rozpočty tak, aby přinášely měřitelné obchodní výsledky a ROI.</p>
</div>
</div>
</div>
</div>

<div className="py-24 border-t border-white/5 bg-[#030303]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-[#0f0f0f] border border-white/5 rounded-3xl overflow-hidden flex flex-col group cursor-pointer nav-link transition-colors hover:border-white/10" data-target="prace-detail">
<div className="w-full aspect-[4/3] overflow-hidden">
<img alt="Apex Properties" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<span className="text-lime-400 text-xs font-semibold uppercase tracking-widest mb-3">Branding</span>
<h3 className="text-3xl font-medium text-white tracking-tight mb-4">Apex Properties</h3>
<p className="text-base text-zinc-400 leading-relaxed">Rebranding realitní značky, který zlepšil důvěryhodnost a kvalitu příchozích leadů.</p>
</div>
</div>

<div className="bg-[#0f0f0f] border border-white/5 rounded-3xl overflow-hidden flex flex-col group cursor-pointer nav-link transition-colors hover:border-white/10" data-target="prace-detail">
<div className="w-full aspect-[4/3] overflow-hidden">
<img alt="Elevate Fitness" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<span className="text-lime-400 text-xs font-semibold uppercase tracking-widest mb-3">Web design</span>
<h3 className="text-3xl font-medium text-white tracking-tight mb-4">Elevate Fitness</h3>
<p className="text-base text-zinc-400 leading-relaxed">Konverzní web pro fitness brand zaměřený na růst poptávek a vyšší výkon landing pages.</p>
</div>
</div>

<div className="bg-[#0f0f0f] border border-white/5 rounded-3xl overflow-hidden flex flex-col group cursor-pointer nav-link transition-colors hover:border-white/10" data-target="prace-detail">
<div className="w-full aspect-[4/3] overflow-hidden">
<img alt="Luxe Interiors" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<span className="text-lime-400 text-xs font-semibold uppercase tracking-widest mb-3">Fotografie</span>
<h3 className="text-3xl font-medium text-white tracking-tight mb-4">Luxe Interiors</h3>
<p className="text-base text-zinc-400 leading-relaxed">Prémiová vizuální prezentace interiérů pro vyšší vnímanou hodnotu a silnější engagement.</p>
</div>
</div>
</div>
<div className="mt-16 flex justify-center">
<button className="flex items-center gap-2 bg-lime-400 text-zinc-950 px-8 py-4 rounded-full text-base font-semibold hover:bg-lime-500 transition-all nav-link shadow-[0_0_40px_-10px_rgba(204,255,0,0.3)] hover:shadow-[0_0_50px_-5px_rgba(204,255,0,0.5)] hover:scale-[1.02]" data-target="prace">
                            Zobrazit všechny projekty
                            <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="py-24 border-t border-zinc-800/50">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-8">Jak probíhá spolupráce</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left relative mt-16">
<div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-zinc-800"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-lime-400 text-lime-400 flex items-center justify-center text-lg font-normal mb-4 mx-auto md:mx-0">1</div>
<h4 className="text-white font-medium mb-2 text-center md:text-left text-lg">Objev &amp; Audit</h4>
<p className="text-sm text-zinc-400 text-center md:text-left">Pochopíme váš byznys, data a cíle. Neděláme kroky naslepo.</p>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-700 text-zinc-500 flex items-center justify-center text-lg font-normal mb-4 mx-auto md:mx-0">2</div>
<h4 className="text-white font-medium mb-2 text-center md:text-left text-lg">Strategie</h4>
<p className="text-sm text-zinc-400 text-center md:text-left">Navrhneme přesný plán, jak dosáhnout požadovaných výsledků.</p>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-700 text-zinc-500 flex items-center justify-center text-lg font-normal mb-4 mx-auto md:mx-0">3</div>
<h4 className="text-white font-medium mb-2 text-center md:text-left text-lg">Produkce</h4>
<p className="text-sm text-zinc-400 text-center md:text-left">Designujeme, kódujeme a tvoříme s důrazem na prémiovou kvalitu.</p>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-700 text-zinc-500 flex items-center justify-center text-lg font-normal mb-4 mx-auto md:mx-0">4</div>
<h4 className="text-white font-medium mb-2 text-center md:text-left text-lg">Spuštění &amp; Růst</h4>
<p className="text-sm text-zinc-400 text-center md:text-left">Vypouštíme do světa, měříme a průběžně optimalizujeme výkon.</p>
</div>
</div>
</div>
</div>

<div className="py-24 bg-lime-400/5 border-y border-lime-400/10">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Jste připraveni na další úroveň?</h2>
<p className="text-zinc-400 mb-10 text-base md:text-lg">Napište nám o vašem projektu. První konzultace je na nás a ukáže nám, zda si lidsky a byznysově sedneme.</p>
<button className="bg-lime-400 text-zinc-950 px-8 py-4 rounded-full text-base font-medium hover:bg-lime-500 transition-colors nav-link" data-target="kontakt">
                        Nezávazná konzultace
                    </button>
</div>
</div>
</section>

<section className="page-section" id="o-nas">
<div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
<div className="max-w-3xl">
<h1 className="text-4xl md:text-6xl font-normal tracking-tight text-white mb-6">Nejsme jen další agentura. Jsme váš partner pro růst.</h1>
<p className="text-xl text-zinc-400 mb-12">Ve světě plném šablon a rychlých řešení volíme jinou cestu. Stavíme na hlubokém pochopení vašeho byznysu, precizním designu a tvrdých datech.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 border-t border-zinc-800/50 pt-16">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-6">Propojujeme estetiku s výkonem</h2>
<div className="space-y-6 text-base text-zinc-400 leading-relaxed">
<p>Brand Pulse Agency vznikla z frustrace nad trhem, kde se grafická studia nezajímají o obchodní cíle a marketingové agentury produkují vizuální balast. Rozhodli jsme se tyto dva světy spojit.</p>
<p>Věříme, že prémiový design buduje důvěru a dobrý marketing ji přetavuje v konverze. Jedno bez druhého z dlouhodobého hlediska nefunguje. Naším cílem je vytvářet digitální ekosystémy, které vaši značku posunou o ligu výš.</p>
</div>
</div>
<div className="space-y-8">
<div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/30">
<h3 className="text-white font-medium mb-2 flex items-center gap-2 text-lg"><i className="text-lime-400 w-5 h-5" data-lucide="target" strokeWidth="1.5"></i> Pro koho jsme</h3>
<p className="text-base text-zinc-400">Pro zavedené firmy hledající rebranding a modernizaci, i pro ambiciózní projekty s rozpočtem pro kvalitní vstup na trh. Pracujeme s klienty, kteří chápou hodnotu investice do značky.</p>
</div>
<div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/30">
<h3 className="text-white font-medium mb-2 flex items-center gap-2 text-lg"><i className="text-zinc-500 w-5 h-5" data-lucide="shield-alert" strokeWidth="1.5"></i> Pro koho nejsme</h3>
<p className="text-base text-zinc-400">Neděláme "jen rychlé logo do zítra" ani weby na pronajatých šablonách za pár tisíc. Pokud hledáte nejlevnější řešení bez ohledu na výsledek, nebudeme pro vás ti praví.</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="sluzby">
<div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
<h1 className="text-4xl md:text-6xl font-normal tracking-tight text-white mb-6 text-center">Komplexní řešení.</h1>
<p className="text-xl text-zinc-400 mb-20 text-center max-w-2xl mx-auto">Vše, co potřebujete pro silnou značku a digitální růst, pod jednou střechou. Zajišťujeme konzistenci napříč všemi kanály.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="premium-card p-10 rounded-2xl flex flex-col h-full">
<div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lime-400 mb-8">
<i className="w-7 h-7" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<h2 className="text-2xl font-medium text-white mb-4 tracking-tight">Brand identita &amp; Grafický design</h2>
<p className="text-base text-zinc-400 mb-6 flex-grow">Značka není jen logo. Je to pocit, který ve vašich zákaznících zanecháte. Vytvoříme vizuální identitu, která komunikuje vaši hodnotu na první pohled a odliší vás od konkurence.</p>
<ul className="space-y-3 text-sm text-zinc-500 mb-8">
<li className="flex items-center gap-2"><i className="text-lime-400 w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i> Tvorba logotypu a vizuálního stylu</li>
<li className="flex items-center gap-2"><i className="text-lime-400 w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i> Brand manuály a guidelines</li>
<li className="flex items-center gap-2"><i className="text-lime-400 w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i> Tiskoviny a packaging</li>
</ul>
</div>
<div className="premium-card p-10 rounded-2xl flex flex-col h-full">
<div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lime-400 mb-8">
<i className="w-7 h-7" data-lucide="laptop" strokeWidth="1.5"></i>
</div>
<h2 className="text-2xl font-medium text-white mb-4 tracking-tight">Webdesign &amp; Webový vývoj</h2>
<p className="text-base text-zinc-400 mb-6 flex-grow">Váš web je váš nejlepší obchodník, který pracuje 24/7. Tvoříme rychlé, responzivní weby na míru, které nejen skvěle vypadají, ale především navádějí návštěvníka k akci.</p>
<ul className="space-y-3 text-sm text-zinc-500 mb-8">
<li className="flex items-center gap-2"><i className="text-lime-400 w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i> UX/UI design na míru</li>
<li className="flex items-center gap-2"><i className="text-lime-400 w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i> Vývoj frontendu i backendu</li>
<li className="flex items-center gap-2"><i className="text-lime-400 w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i> Napojení na systémy a analytiku</li>
</ul>
</div>
<div className="premium-card p-10 rounded-2xl flex flex-col h-full">
<div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lime-400 mb-8">
<i className="w-7 h-7" data-lucide="camera" strokeWidth="1.5"></i>
</div>
<h2 className="text-2xl font-medium text-white mb-4 tracking-tight">Fotografie &amp; Video produkce</h2>
<p className="text-base text-zinc-400 mb-6 flex-grow">Autentický vizuální obsah prodává lépe než fotobanka. Zachytíme atmosféru vaší firmy, produktů nebo služeb ve špičkové kvalitě pro sítě i weby.</p>
<ul className="space-y-3 text-sm text-zinc-500 mb-8">
<li className="flex items-center gap-2"><i className="text-lime-400 w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i> Produktová a reklamní fotografie</li>
<li className="flex items-center gap-2"><i className="text-lime-400 w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i> Firemní image videa a reels</li>
<li className="flex items-center gap-2"><i className="text-lime-400 w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i> Postprodukce a barvení</li>
</ul>
</div>
<div className="premium-card p-10 rounded-2xl flex flex-col h-full">
<div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lime-400 mb-8">
<i className="w-7 h-7" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<h2 className="text-2xl font-medium text-white mb-4 tracking-tight">PPC &amp; Obsah pro sítě</h2>
<p className="text-base text-zinc-400 mb-6 flex-grow">Dostaneme vaši značku k těm správným lidem. Nastavujeme výkonnostní kampaně a tvoříme obsah, který buduje komunitu a generuje leady.</p>
<ul className="space-y-3 text-sm text-zinc-500 mb-8">
<li className="flex items-center gap-2"><i className="text-lime-400 w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i> Správa Google a Meta Ads</li>
<li className="flex items-center gap-2"><i className="text-lime-400 w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i> Správa sociálních sítí (IG, FB, LI)</li>
<li className="flex items-center gap-2"><i className="text-lime-400 w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i> Tvorba obsahu a copywriting</li>
</ul>
</div>
</div>
<div className="mt-16 text-center">
<button className="bg-lime-400 text-zinc-950 px-8 py-3.5 rounded-full text-base font-medium hover:bg-lime-500 transition-colors nav-link" data-target="kontakt">Poptat řešení na míru</button>
</div>
</div>
</section>

<section className="page-section" id="prace">
<div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-zinc-800/50 pb-8">
<div>
<h1 className="text-4xl md:text-6xl font-normal tracking-tight text-white mb-4">Naše práce.</h1>
<p className="text-zinc-400 max-w-lg text-base md:text-lg">Výsledky hovoří za nás. Ukázky projektů, kde jsme propojili strategii s designem.</p>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full text-sm font-medium bg-zinc-800 text-white border border-zinc-700">Vše</button>
<button className="px-4 py-1.5 rounded-full text-sm font-medium text-zinc-400 border border-zinc-800 hover:border-zinc-600 transition-colors">Branding</button>
<button className="px-4 py-1.5 rounded-full text-sm font-medium text-zinc-400 border border-zinc-800 hover:border-zinc-600 transition-colors">Webdesign</button>
<button className="px-4 py-1.5 rounded-full text-sm font-medium text-zinc-400 border border-zinc-800 hover:border-zinc-600 transition-colors">Marketing</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
<div className="group cursor-pointer nav-link" data-target="prace-detail">
<div className="w-full aspect-[4/3] rounded-xl img-placeholder mb-6 overflow-hidden">
<div className="w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-700 transition-transform duration-500 group-hover:scale-105">APEX PROPERTIES</div>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2 group-hover:text-lime-400 transition-colors">Apex Properties</h3>
<p className="text-base text-zinc-400 mb-3">Redefinice luxusních realit. Web &amp; Brand.</p>
</div>
<div className="group cursor-pointer nav-link mt-0 md:mt-16" data-target="prace-detail">
<div className="w-full aspect-[4/3] rounded-xl img-placeholder mb-6 overflow-hidden">
<div className="w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-700 transition-transform duration-500 group-hover:scale-105">ELEVATE FITNESS</div>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2 group-hover:text-lime-400 transition-colors">Elevate Fitness</h3>
<p className="text-base text-zinc-400 mb-3">Akvizice přes obsah a výkonnostní sítě.</p>
</div>
<div className="group cursor-pointer nav-link" data-target="prace-detail">
<div className="w-full aspect-[4/3] rounded-xl img-placeholder mb-6 overflow-hidden">
<div className="w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-700 transition-transform duration-500 group-hover:scale-105">LUXE INTERIORS</div>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2 group-hover:text-lime-400 transition-colors">Luxe Interiors</h3>
<p className="text-base text-zinc-400 mb-3">Kompletní e-commerce řešení s důrazem na detail.</p>
</div>
<div className="group cursor-pointer nav-link mt-0 md:mt-16" data-target="prace-detail">
<div className="w-full aspect-[4/3] rounded-xl img-placeholder mb-6 overflow-hidden">
<div className="w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-700 transition-transform duration-500 group-hover:scale-105">FINTECH PRO</div>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2 group-hover:text-lime-400 transition-colors">FinTech Pro</h3>
<p className="text-base text-zinc-400 mb-3">Korporátní identita pro moderní finanční startup.</p>
</div>
</div>
</div>
</section>

<section className="page-section" id="prace-detail">
<div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
<button className="text-base text-zinc-500 hover:text-white mb-8 flex items-center gap-2 transition-colors nav-link" data-target="prace">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i> Zpět na projekty
                </button>
<div className="flex gap-3 mb-6">
<span className="text-sm font-medium text-lime-400 border border-lime-400/20 bg-lime-400/5 px-2 py-1 rounded">Webdesign</span>
<span className="text-sm font-medium text-zinc-400 border border-zinc-800 px-2 py-1 rounded">Branding</span>
</div>
<h1 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">Apex Properties: Redefinice luxusních realit</h1>
<p className="text-xl text-zinc-400 mb-12">Jak jsme pomocí nového brandingu a prémiového webu pomohli realitní kanceláři oslovit bonitnější klientelu a zvýšit konverze z poptávek o 45 %.</p>
<div className="w-full aspect-video rounded-xl img-placeholder mb-16"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-y border-zinc-800/50 py-12">
<div className="md:col-span-2 space-y-8 text-base text-zinc-300 leading-relaxed">
<div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Výzva</h3>
<p>Apex Properties nabízeli prémiové nemovitosti, ale jejich vizuální prezentace tomu neodpovídala. Starý web byl pomalý, nepřehledný a neodrážel exkluzivitu značky. Ztráceli tak důvěru potenciálních bonitních klientů hned v prvních vteřinách.</p>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Řešení</h3>
<p>Provedli jsme kompletní rebrand. Zvolili jsme temnější, elegantní paletu barev kombinovanou s minimalistickou typografií. Následně jsme navrhli a nakódovali zcela nový realitní portál zaměřený na velké, kvalitní fotografie nemovitostí a jednoduchý rezervační proces prohlídek.</p>
</div>
</div>
<div>
<div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
<h4 className="text-white font-medium mb-4 text-base">Výsledky projektu</h4>
<ul className="space-y-4">
<li>
<span className="block text-3xl font-medium text-lime-400 tracking-tight">+45%</span>
<span className="text-sm text-zinc-500 uppercase tracking-wider">Nárůst leadů</span>
</li>
<li>
<span className="block text-3xl font-medium text-lime-400 tracking-tight">-60%</span>
<span className="text-sm text-zinc-500 uppercase tracking-wider">Bounce rate</span>
</li>
<li>
<span className="block text-3xl font-medium text-lime-400 tracking-tight">2.5s</span>
<span className="text-sm text-zinc-500 uppercase tracking-wider">Rychlost načtení (z 8s)</span>
</li>
</ul>
</div>
</div>
</div>
<div className="w-full aspect-square md:aspect-[21/9] rounded-xl img-placeholder mb-8"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
<div className="w-full aspect-[4/3] rounded-xl img-placeholder"></div>
<div className="w-full aspect-[4/3] rounded-xl img-placeholder"></div>
</div>
<div className="text-center bg-zinc-900/30 p-12 rounded-2xl border border-zinc-800/50">
<h3 className="text-3xl font-medium text-white tracking-tight mb-4">Líbí se vám tento výsledek?</h3>
<p className="text-base text-zinc-400 mb-6">Pojďme se bavit o tom, jak podobně můžeme transformovat i váš byznys.</p>
<button className="bg-lime-400 text-zinc-950 px-6 py-3 rounded-full text-base font-medium hover:bg-lime-500 transition-colors nav-link" data-target="kontakt">Nezávazná konzultace</button>
</div>
</div>
</section>

<section className="page-section" id="blog">
<div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
<h1 className="text-4xl md:text-6xl font-normal tracking-tight text-white mb-6">Blog.</h1>
<p className="text-xl text-zinc-400 mb-16">Odborné články o budování značky, webdesignu a marketingu, který dává smysl.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<a className="group block" href="#">
<div className="w-full aspect-[16/10] rounded-xl img-placeholder mb-4 overflow-hidden">
<div className="w-full h-full bg-zinc-900 transition-transform duration-500 group-hover:scale-105"></div>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-500 mb-3">
<span className="text-lime-400">Branding</span>
<span>•</span>
<span>12. Března 2024</span>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2 group-hover:text-lime-400 transition-colors line-clamp-2">Proč vaše firma potřebuje víc než jen hezké logo</h3>
<p className="text-base text-zinc-400 line-clamp-3">Mnoho firem si plete logo se značkou. Přečtěte si, co všechno tvoří silný brand, který dokáže obhájit vyšší cenu a budovat loajalitu.</p>
</a>
<a className="group block" href="#">
<div className="w-full aspect-[16/10] rounded-xl img-placeholder mb-4 overflow-hidden">
<div className="w-full h-full bg-zinc-900 transition-transform duration-500 group-hover:scale-105"></div>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-500 mb-3">
<span className="text-lime-400">Webdesign</span>
<span>•</span>
<span>5. Února 2024</span>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2 group-hover:text-lime-400 transition-colors line-clamp-2">5 chyb na webu, které vás stojí konverze</h3>
<p className="text-base text-zinc-400 line-clamp-3">Návštěvnost máte, ale poptávky nechodí? Ukážeme vám nejčastější UX chyby, které spolehlivě odradí potenciálního zákazníka.</p>
</a>
<a className="group block" href="#">
<div className="w-full aspect-[16/10] rounded-xl img-placeholder mb-4 overflow-hidden">
<div className="w-full h-full bg-zinc-900 transition-transform duration-500 group-hover:scale-105"></div>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-500 mb-3">
<span className="text-lime-400">Výkon</span>
<span>•</span>
<span>20. Ledna 2024</span>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2 group-hover:text-lime-400 transition-colors line-clamp-2">Jak měřit ROI v brandových kampaních</h3>
<p className="text-base text-zinc-400 line-clamp-3">Výkonnostní marketing se měří snadno, ale jak vyhodnotit investici do povědomí o značce? Praktický návod pro marketéry.</p>
</a>
</div>
</div>
</section>

<section className="page-section" id="kariera">
<div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
<div className="text-center mb-20">
<h1 className="text-4xl md:text-6xl font-normal tracking-tight text-white mb-6">Hledáme tvůrce s tahem na branku.</h1>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto">Nestavíme korporát. Stavíme elitní tým lidí, kteří chtějí dělat špičkovou práci s reálným dopadem. Ukaž mi portfolio a pojďme se bavit.</p>
</div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-8">Otevřené pozice</h2>
<div className="space-y-4">
<div className="premium-card p-6 md:p-8 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group">
<div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2 group-hover:text-lime-400 transition-colors">Webdesigner / UI Designer</h3>
<div className="flex items-center gap-4 text-sm text-zinc-500">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i> Praha / Hybrid</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="clock" strokeWidth="1.5"></i> IČO / Full-time</span>
</div>
</div>
<button className="px-5 py-2 border border-zinc-700 text-white text-base font-medium rounded-full group-hover:border-lime-400 group-hover:text-lime-400 transition-colors w-fit">Detail pozice</button>
</div>
<div className="premium-card p-6 md:p-8 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group">
<div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2 group-hover:text-lime-400 transition-colors">Grafický / Brand Designer</h3>
<div className="flex items-center gap-4 text-sm text-zinc-500">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i> Praha / Hybrid</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="clock" strokeWidth="1.5"></i> IČO / Externě</span>
</div>
</div>
<button className="px-5 py-2 border border-zinc-700 text-white text-base font-medium rounded-full group-hover:border-lime-400 group-hover:text-lime-400 transition-colors w-fit">Detail pozice</button>
</div>
<div className="premium-card p-6 md:p-8 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group">
<div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2 group-hover:text-lime-400 transition-colors">Content Creator (Foto &amp; Video)</h3>
<div className="flex items-center gap-4 text-sm text-zinc-500">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i> Praha / Terén</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="clock" strokeWidth="1.5"></i> IČO / Projektově</span>
</div>
</div>
<button className="px-5 py-2 border border-zinc-700 text-white text-base font-medium rounded-full group-hover:border-lime-400 group-hover:text-lime-400 transition-colors w-fit">Detail pozice</button>
</div>
</div>
<div className="mt-20 p-8 border border-zinc-800/50 bg-zinc-900/20 rounded-2xl text-center">
<h3 className="text-2xl font-medium text-white tracking-tight mb-3">Nenašli jste svou roli?</h3>
<p className="text-base text-zinc-400 mb-6 max-w-lg mx-auto">Vždy rádi poznáme šikovné lidi z oboru. Pošlete nám své portfolio a napište, čím byste mohli agenturu obohatit.</p>
<a className="text-base font-medium text-lime-400 hover:text-lime-500 underline underline-offset-4" href="mailto:kariera@brandpulse.cz">Spontánní přihláška →</a>
</div>
</div>
</section>

<section className="page-section" id="kontakt">
<div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h1 className="text-4xl md:text-6xl font-normal tracking-tight text-white mb-6">Pojďme se bavit o vašem růstu.</h1>
<p className="text-zinc-400 mb-12 text-base md:text-lg max-w-md">Hledáte partnera pro strategii, design nebo výkon? Napište nám. Nejprve si ujasníme vaše cíle, rozpočet a priority. Odpovíme do 24–48 hodin.</p>
<div className="space-y-8">
<div>
<p className="text-sm text-zinc-500 uppercase tracking-widest mb-1">E-mail</p>
<a className="text-2xl font-medium text-white hover:text-lime-400 transition-colors tracking-tight" href="mailto:hello@brandpulse.cz">hello@brandpulse.cz</a>
</div>
<div>
<p className="text-sm text-zinc-500 uppercase tracking-widest mb-1">Telefon</p>
<a className="text-2xl font-medium text-white hover:text-lime-400 transition-colors tracking-tight" href="tel:+420123456789">+420 123 456 789</a>
</div>
<div>
<p className="text-sm text-zinc-500 uppercase tracking-widest mb-1">Kancelář</p>
<p className="text-lg text-white">Praha, Česká republika<br/><span className="text-base text-zinc-500">Schůzky po předchozí domluvě.</span></p>
</div>
</div>
</div>
<div className="bg-zinc-900/30 border border-zinc-800/50 p-8 md:p-10 rounded-2xl">
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Formulář odeslán (simulace).');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2">Jméno a příjmení</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-base text-white focus:outline-none focus:border-lime-400 transition-colors" placeholder="Jan Novák" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2">Firma / Projekt</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-base text-white focus:outline-none focus:border-lime-400 transition-colors" placeholder="Vaše firma s.r.o." type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2">E-mail</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-base text-white focus:outline-none focus:border-lime-400 transition-colors" placeholder="jan@firma.cz" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2">Telefon</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-base text-white focus:outline-none focus:border-lime-400 transition-colors" placeholder="+420 ..." type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2">S čím vám můžeme pomoci?</label>
<textarea className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-base text-white focus:outline-none focus:border-lime-400 transition-colors resize-none" placeholder="Stručně popište váš cíl, aktuální problém nebo představu o spolupráci..." rows="4"></textarea>
</div>
<div className="flex items-start gap-3 mt-2">
<input className="mt-0.5" id="gdpr_consent" type="checkbox"/>
<label className="text-sm text-zinc-500 cursor-pointer select-none" htmlFor="gdpr_consent">
                                    Souhlasím se zpracováním osobních údajů pro účely vyřízení poptávky.
                                </label>
</div>
<button className="w-full bg-lime-400 text-zinc-950 px-8 py-3.5 rounded-lg text-base font-medium hover:bg-lime-500 transition-colors mt-4" type="submit">
                                Odeslat poptávku
                            </button>
</form>
</div>
</div>
</div>
</section>

<section className="page-section" id="privacy">
<div className="max-w-3xl mx-auto px-6 pt-32 pb-24 text-base text-zinc-400 leading-relaxed space-y-6">
<h1 className="text-4xl font-medium tracking-tight text-white mb-8">Ochrana osobních údajů</h1>
<p>Společnost VLMR Group s.r.o. (provozovatel Brand Pulse Agency) chrání vaše osobní údaje v souladu s nařízením GDPR...</p>
<h2 className="text-2xl font-medium tracking-tight text-white mt-8 mb-4">1. Kdo zpracovává údaje</h2>
<p>Správcem údajů je VLMR Group s.r.o., se sídlem v Praze, IČ: 12345678.</p>
<p>Toto je zástupný text pro právní dokument. Reálný web by obsahoval kompletní znění zásad ochrany osobních údajů zpracované právníkem.</p>
</div>
</section>
<section className="page-section" id="cookies-page">
<div className="max-w-3xl mx-auto px-6 pt-32 pb-24 text-base text-zinc-400 leading-relaxed space-y-6">
<h1 className="text-4xl font-medium tracking-tight text-white mb-8">Zásady používání Cookies</h1>
<p>Naše webové stránky používají soubory cookies ke zlepšení uživatelského zážitku, analýze návštěvnosti a personalizaci reklam.</p>
<p>Své preference můžete kdykoliv změnit pomocí nastavení cookies v patičce tohoto webu.</p>
<button className="px-4 py-2 mt-4 border border-zinc-700 text-white text-base rounded hover:bg-zinc-800 transition-colors" onclick="document.getElementById('cookie-modal').classList.remove('hidden')">Otevřít nastavení Cookies</button>
</div>
</section>
</main>

<footer className="border-t border-zinc-800/50 bg-zinc-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="text-white font-medium text-lg tracking-tight flex items-center gap-1 nav-link mb-6" data-target="domu" href="#domu">
                        BRANDPULSE<span className="text-lime-400">.</span>
</a>
<p className="text-sm text-zinc-500 mb-6">Spojujeme prémiový design, strategii a výkonnostní marketing. Agentura pro ambiciózní značky.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-base">Agentura</h4>
<ul className="space-y-3 text-base text-zinc-400">
<li><a className="hover:text-lime-400 transition-colors nav-link" data-target="o-nas" href="#o-nas">O nás</a></li>
<li><a className="hover:text-lime-400 transition-colors nav-link" data-target="sluzby" href="#sluzby">Služby</a></li>
<li><a className="hover:text-lime-400 transition-colors nav-link" data-target="prace" href="#prace">Naše práce</a></li>
<li><a className="hover:text-lime-400 transition-colors nav-link" data-target="blog" href="#blog">Blog</a></li>
<li><a className="hover:text-lime-400 transition-colors nav-link" data-target="kariera" href="#kariera">Kariéra</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-base">Právní informace</h4>
<ul className="space-y-3 text-base text-zinc-400">
<li><a className="hover:text-white transition-colors nav-link" data-target="privacy" href="#privacy">Ochrana osobních údajů</a></li>
<li><a className="hover:text-white transition-colors nav-link" data-target="cookies-page" href="#cookies-page">Cookies</a></li>
<li><button className="hover:text-white transition-colors text-left" onclick="document.getElementById('cookie-modal').classList.remove('hidden')">Nastavení Cookies</button></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-base">Kontakt</h4>
<ul className="space-y-3 text-base text-zinc-400 mb-6">
<li>hello@brandpulse.cz</li>
<li>+420 123 456 789</li>
<li>Praha, Česká republika</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
<p>© 2024 Brand Pulse Agency. Všechna práva vyhrazena.</p>
<p>Brand Pulse Agency je součástí VLMR Group s.r.o. | IČ: 12345678, DIČ: CZ12345678</p>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full bg-zinc-900 border-t border-zinc-800 z-50 p-4 md:p-6 shadow-2xl transition-transform duration-300 transform translate-y-0" id="cookie-banner">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div className="max-w-3xl">
<p className="text-base text-zinc-300">Respektujeme vaše soukromí. Tento web používá cookies pro zajištění správného fungování, analýzu návštěvnosti a personalizaci obsahu.</p>
</div>
<div className="flex flex-wrap gap-3 w-full md:w-auto">
<button className="px-4 py-2 text-sm font-medium text-zinc-300 border border-zinc-700 rounded hover:bg-zinc-800 transition-colors flex-grow md:flex-grow-0 text-center" onclick="document.getElementById('cookie-modal').classList.remove('hidden')">Nastavení</button>
<button className="px-4 py-2 text-sm font-medium text-zinc-300 border border-zinc-700 rounded hover:bg-zinc-800 transition-colors flex-grow md:flex-grow-0 text-center" onclick="hideCookieBanner()">Odmítnout vše</button>
<button className="px-4 py-2 text-sm font-medium bg-lime-400 text-zinc-950 rounded hover:bg-lime-500 transition-colors flex-grow md:flex-grow-0 text-center" onclick="hideCookieBanner()">Přijmout vše</button>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] hidden flex items-center justify-center p-4" id="cookie-modal">
<div className="bg-zinc-950 border border-zinc-800 w-full max-w-lg rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
<div className="p-6 border-b border-zinc-800 flex justify-between items-center">
<h3 className="text-xl font-medium tracking-tight text-white">Nastavení Cookies</h3>
<button className="text-zinc-500 hover:text-white" onclick="document.getElementById('cookie-modal').classList.add('hidden')">
<i className="w-6 h-6" data-lucide="x-circle" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-6 overflow-y-auto space-y-6">
<div className="flex items-start justify-between gap-4">
<div>
<h4 className="text-base font-medium text-white mb-1">Nezbytné cookies</h4>
<p className="text-sm text-zinc-500">Nutné pro základní fungování webu. Nelze je vypnout.</p>
</div>
<input checked="" className="mt-1 opacity-50 cursor-not-allowed" disabled="" type="checkbox"/>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h4 className="text-base font-medium text-white mb-1">Analytické cookies</h4>
<p className="text-sm text-zinc-500">Pomáhají nám rozumět, jak web používáte, abychom ho mohli zlepšovat.</p>
</div>
<input className="mt-1" type="checkbox"/>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h4 className="text-base font-medium text-white mb-1">Marketingové cookies</h4>
<p className="text-sm text-zinc-500">Slouží k zobrazování relevantní reklamy napříč internetem.</p>
</div>
<input className="mt-1" type="checkbox"/>
</div>
</div>
<div className="p-6 border-t border-zinc-800 bg-zinc-900/30 flex justify-end">
<button className="px-6 py-2.5 text-base font-medium bg-lime-400 text-zinc-950 rounded hover:bg-lime-500 transition-colors" onclick="hideCookieBanner(); document.getElementById('cookie-modal').classList.add('hidden')">Uložit preference</button>
</div>
</div>
</div>



    </>
  );
}
