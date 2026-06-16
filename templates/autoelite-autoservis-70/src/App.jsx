import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Inicializace ikon
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Logika pro mobilní menu
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            mobileMenu.classList.toggle('hidden');
        }

        mobileMenuButton.addEventListener('click', toggleMenu);

        // Zavřít menu po kliknutí na odkaz
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex-shrink-0 flex items-center gap-1" href="#">
<span className="text-2xl font-semibold tracking-tight text-white uppercase">Auto<span className="text-red-600">Elite</span></span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider" href="#sluzby">Služby</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider" href="#o-nas">O nás</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider" href="#cenik">Ceník</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider" href="#recenze">Recenze</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider" href="#kontakt">Kontakt</a>
</nav>

<div className="hidden md:flex items-center">
<a className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors uppercase tracking-wider" href="#kontakt">
                        Online objednání
                    </a>
</div>

<div className="flex md:hidden items-center gap-4">
<a className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-xs font-medium transition-colors uppercase tracking-wider" href="#kontakt">
                        Objednat
                    </a>
<button className="text-gray-300 hover:text-white p-2" id="mobile-menu-button" type="button">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-[#0a0a0a] border-b border-white/5" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
<a className="mobile-link block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md uppercase tracking-wider" href="#sluzby">Služby</a>
<a className="mobile-link block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md uppercase tracking-wider" href="#o-nas">O nás</a>
<a className="mobile-link block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md uppercase tracking-wider" href="#cenik">Ceník</a>
<a className="mobile-link block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md uppercase tracking-wider" href="#recenze">Recenze</a>
<a className="mobile-link block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md uppercase tracking-wider" href="#kontakt">Kontakt</a>
</div>
</div>
</header>

<main className="flex-grow">

<section className="hero-bg relative min-h-screen flex items-center justify-center pt-20">
<div className="absolute inset-0 bg-radial-gradient from-transparent to-black/50 pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
<p className="text-red-500 text-sm md:text-base tracking-[0.3em] uppercase font-medium mb-6">
                    Kompletní autoservis Praha
                </p>
<h1 className="flex flex-col gap-2 mb-8">
<span className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tight text-white uppercase leading-none">
                        Váš vůz si zaslouží
                    </span>
<span className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tight text-red-600 uppercase leading-none">
                        Prvotřídní péči
                    </span>
</h1>
<p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
                    Profesionální servis s více než 15letou zkušeností. Férovost, transparentnost a kvalita — to je AutoElite.
                </p>
<a className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md text-base font-medium transition-all hover:scale-105 active:scale-95 uppercase tracking-wider" href="#kontakt">
<i className="w-5 h-5" data-lucide="calendar"></i>
                    Objednat se online
                </a>
</div>
</section>

<section className="bg-[#0a0a0a] py-24" id="sluzby">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Naše Služby</h2>
<p className="text-lg text-gray-400 max-w-2xl mx-auto">Komplexní péče o vaše vozidlo pod jednou střechou. Používáme nejmodernější diagnostiku a kvalitní náhradní díly.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white/[0.02] border border-white/5 rounded-xl p-8 hover:bg-white/[0.04] hover:border-red-600/30 transition-all group">
<div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
<i data-lucide="wrench"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Mechanické práce</h3>
<p className="text-base text-gray-400 leading-relaxed">Komplexní opravy motorů, podvozků, výměny brzdových destiček a výměny rozvodů s důrazem na preciznost.</p>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-xl p-8 hover:bg-white/[0.04] hover:border-red-600/30 transition-all group">
<div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
<i data-lucide="activity"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Počítačová diagnostika</h3>
<p className="text-base text-gray-400 leading-relaxed">Přesné odhalení elektronických i mechanických závad pomocí nejnovějších diagnostických přístrojů.</p>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-xl p-8 hover:bg-white/[0.04] hover:border-red-600/30 transition-all group">
<div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
<i data-lucide="disc"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Pneuservis a geometrie</h3>
<p className="text-base text-gray-400 leading-relaxed">Přezutí kol, vyvažování, opravy defektů a zajištění správné geometrie náprav pro vaši bezpečnost.</p>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-xl p-8 hover:bg-white/[0.04] hover:border-red-600/30 transition-all group">
<div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
<i data-lucide="wind"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Servis klimatizací</h3>
<p className="text-base text-gray-400 leading-relaxed">Čištění, plnění chladiva, dezinfekce ozonem a komplexní opravy celého klimatizačního systému.</p>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-xl p-8 hover:bg-white/[0.04] hover:border-red-600/30 transition-all group">
<div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
<i data-lucide="droplet"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Výměna olejů a kapalin</h3>
<p className="text-base text-gray-400 leading-relaxed">Pravidelné výměny motorových i převodových olejů, chladicí a brzdové kapaliny včetně všech filtrů.</p>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-xl p-8 hover:bg-white/[0.04] hover:border-red-600/30 transition-all group">
<div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
<i data-lucide="clipboard-check"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Příprava na STK</h3>
<p className="text-base text-gray-400 leading-relaxed">Kompletní prohlídka vozu před technickou kontrolou a případné odstranění zjištěných nedostatků.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0f0f0f] border-y border-white/5" id="o-nas">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Proč si vybrat právě nás?</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 text-red-500 flex-shrink-0">
<i data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Transparentní ceny</h4>
<p className="text-base text-gray-400">Vždy víte, za co platíte. Cenu opravy s vámi konzultujeme předem, žádné skryté poplatky.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-red-500 flex-shrink-0">
<i data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Rychlost a spolehlivost</h4>
<p className="text-base text-gray-400">Vážíme si vašeho času. Běžné opravy řešíme v nejkratším možném termínu bez kompromisů na kvalitě.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-red-500 flex-shrink-0">
<i data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Zkušení mechanici</h4>
<p className="text-base text-gray-400">Náš tým tvoří certifikovaní profesionálové s dlouholetou praxí v oboru a neustálým vzděláváním.</p>
</div>
</div>
</div>
</div>
<div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
<img alt="Práce v autoservisu" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" src="https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a]" id="cenik">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Ceník služeb</h2>
<p className="text-lg text-gray-400 max-w-2xl mx-auto">Transparentní ceny bez skrytých poplatků. Přesnou kalkulaci vám vždy rádi sdělíme po prohlídce vozu.</p>
</div>
<div className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
<div className="flex justify-between items-center py-5 px-6 sm:px-8 border-b border-white/10 hover:bg-white/[0.04] transition-colors">
<span className="text-base text-gray-300 font-medium">Mechanické práce</span>
<span className="text-base font-semibold text-red-500">850 Kč/hod</span>
</div>
<div className="flex justify-between items-center py-5 px-6 sm:px-8 border-b border-white/10 hover:bg-white/[0.04] transition-colors">
<span className="text-base text-gray-300 font-medium">Mechanické práce (vlastní materiál)</span>
<span className="text-base font-semibold text-red-500">1 200 Kč/hod</span>
</div>
<div className="flex justify-between items-center py-5 px-6 sm:px-8 border-b border-white/10 hover:bg-white/[0.04] transition-colors">
<span className="text-base text-gray-300 font-medium">Výměna oleje + filtr</span>
<span className="text-base font-semibold text-red-500">od 1 500 Kč</span>
</div>
<div className="flex justify-between items-center py-5 px-6 sm:px-8 border-b border-white/10 hover:bg-white/[0.04] transition-colors">
<span className="text-base text-gray-300 font-medium">Přezutí 4 kol (osobní)</span>
<span className="text-base font-semibold text-red-500">od 600 Kč</span>
</div>
<div className="flex justify-between items-center py-5 px-6 sm:px-8 border-b border-white/10 hover:bg-white/[0.04] transition-colors">
<span className="text-base text-gray-300 font-medium">Servis klimatizace</span>
<span className="text-base font-semibold text-red-500">od 1 200 Kč</span>
</div>
<div className="flex justify-between items-center py-5 px-6 sm:px-8 border-b border-white/10 hover:bg-white/[0.04] transition-colors">
<span className="text-base text-gray-300 font-medium">Počítačová diagnostika</span>
<span className="text-base font-semibold text-red-500">od 800 Kč</span>
</div>
<div className="flex justify-between items-center py-5 px-6 sm:px-8 border-b border-white/10 hover:bg-white/[0.04] transition-colors">
<span className="text-base text-gray-300 font-medium">Výměna brzdových destiček</span>
<span className="text-base font-semibold text-red-500">od 1 800 Kč</span>
</div>
<div className="flex justify-between items-center py-5 px-6 sm:px-8 border-b border-white/10 hover:bg-white/[0.04] transition-colors">
<span className="text-base text-gray-300 font-medium">Příprava na STK</span>
<span className="text-base font-semibold text-red-500">od 2 500 Kč</span>
</div>
<div className="flex justify-between items-center py-5 px-6 sm:px-8 border-b border-white/10 hover:bg-white/[0.04] transition-colors">
<span className="text-base text-gray-300 font-medium">Geometrie náprav</span>
<span className="text-base font-semibold text-red-500">od 1 500 Kč</span>
</div>
<div className="flex justify-between items-center py-5 px-6 sm:px-8 hover:bg-white/[0.04] transition-colors">
<span className="text-base text-gray-300 font-medium">Výměna rozvodů</span>
<span className="text-base font-semibold text-red-500">od 5 000 Kč</span>
</div>
</div>
<p className="text-sm text-gray-500 mt-6 text-center italic">* Ceny jsou orientační a mohou se lišit dle typu a stavu vozidla. Přesnou kalkulaci vám rádi sdělíme po prohlídce.</p>
</div>
</section>

<section className="py-24 bg-[#0f0f0f] border-t border-white/5" id="recenze">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Co o nás říkají klienti</h2>
<p className="text-lg text-gray-400 max-w-2xl mx-auto">Vaše spokojenost je naší největší prioritou. Přečtěte si zkušenosti našich zákazníků s našimi službami.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors flex flex-col h-full">
<div className="flex items-center gap-1 text-red-500 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-base text-gray-300 mb-8 leading-relaxed flex-grow">"Skvělý přístup, rychlá oprava a velmi férové ceny. Mechanici mi všechno detailně vysvětlili a ukázali vyměněné díly. Určitě se sem vrátím."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium text-white">JN</div>
<div>
<p className="text-sm font-medium text-white">Jan Novák</p>
<p className="text-xs text-gray-500">Před 2 týdny</p>
</div>
</div>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors flex flex-col h-full">
<div className="flex items-center gap-1 text-red-500 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-base text-gray-300 mb-8 leading-relaxed flex-grow">"Konečně autoservis, kde se nesnaží natáhnout zákazníka. Transparentní jednání, dodržení termínu i domluveného rozpočtu. Palec nahoru."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium text-white">PS</div>
<div>
<p className="text-sm font-medium text-white">Petr Svoboda</p>
<p className="text-xs text-gray-500">Před měsícem</p>
</div>
</div>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors flex flex-col h-full">
<div className="flex items-center gap-1 text-red-500 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-base text-gray-300 mb-8 leading-relaxed flex-grow">"Jezdím sem už roky na běžné přezutí i na složitější opravy mého vozu. Vždy naprostá spokojenost s kvalitou odvedené práce a milým personálem."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium text-white">ED</div>
<div>
<p className="text-sm font-medium text-white">Eva Dvořáková</p>
<p className="text-xs text-gray-500">Před 2 měsíci</p>
</div>
</div>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors flex flex-col h-full">
<div className="flex items-center gap-1 text-red-500 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-base text-gray-300 mb-8 leading-relaxed flex-grow">"Měl jsem nečekaný problém s únikem chladiva. Zvládli rychlou diagnostiku a opravu klimatizace přesně v dohodnutém termínu."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium text-white">TK</div>
<div>
<p className="text-sm font-medium text-white">Tomáš Kučera</p>
<p className="text-xs text-gray-500">Před 3 měsíci</p>
</div>
</div>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors flex flex-col h-full">
<div className="flex items-center gap-1 text-red-500 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-base text-gray-300 mb-8 leading-relaxed flex-grow">"Velmi profesionální personál na příjmu i na dílně. Auto mi po větším servisu předali čisté a opravené dokonce o den dřív, než původně slíbili."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium text-white">MV</div>
<div>
<p className="text-sm font-medium text-white">Martin Veselý</p>
<p className="text-xs text-gray-500">Před 4 měsíci</p>
</div>
</div>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors flex flex-col h-full">
<div className="flex items-center gap-1 text-red-500 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-base text-gray-300 mb-8 leading-relaxed flex-grow">"Kompletní příprava na STK proběhla naprosto bez problémů. Vše pečlivě zkontrolovali, opravili drobnosti a auto prošlo napoprvé. Děkuji celému týmu."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium text-white">LČ</div>
<div>
<p className="text-sm font-medium text-white">Lucie Černá</p>
<p className="text-xs text-gray-500">Před půl rokem</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] border-t border-white/5" id="kontakt">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Jsme tu pro vás</h2>
<p className="text-lg text-gray-400 mb-12">Zavolejte nám nebo napište e-mail pro rezervaci termínu. Rádi se o váš vůz postaráme.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<a className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-600/50 hover:bg-white/[0.04] transition-all group" href="tel:+420123456789">
<div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="phone"></i>
</div>
<span className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-medium">Zavolejte nám</span>
<span className="text-2xl font-semibold tracking-tight text-white">+420 123 456 789</span>
</a>

<a className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-600/50 hover:bg-white/[0.04] transition-all group" href="mailto:info@autoelite.cz">
<div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="mail"></i>
</div>
<span className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-medium">Napište nám</span>
<span className="text-2xl font-semibold tracking-tight text-white">info@autoelite.cz</span>
</a>
</div>
<div className="mt-16 inline-flex flex-col sm:flex-row items-center justify-center gap-8 p-6 rounded-xl bg-white/[0.02] border border-white/5 w-full">
<div className="flex items-center gap-3 text-gray-300">
<i className="text-red-500" data-lucide="map-pin"></i>
<span className="text-base font-medium">Průmyslová 123, 100 00 Praha</span>
</div>
<div className="hidden sm:block w-px h-8 bg-white/10"></div>
<div className="flex items-center gap-3 text-gray-300">
<i className="text-red-500" data-lucide="clock"></i>
<span className="text-base font-medium">Po - Pá: 8:00 - 17:00</span>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-1">
<span className="text-xl font-semibold tracking-tight text-white uppercase opacity-50">Auto<span className="text-red-600">Elite</span></span>
</div>
<p className="text-sm text-gray-500 text-center md:text-left">
                © 2026 AutoElite Praha. Všechna práva vyhrazena.
            </p>
<div className="flex gap-4">
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<span className="sr-only">Facebook</span>
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<span className="sr-only">Instagram</span>
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
</div>
</div>
</footer>




    </>
  );
}
