import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 bg-[#0E0E0E]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-medium tracking-tighter uppercase" href="#">Snackie</a>

<div className="hidden md:flex items-center space-x-8 text-sm font-normal text-[#BDBDBD]">
<a className="hover:text-white transition-colors" href="#reseni">Řešení</a>
<a className="hover:text-white transition-colors" href="#sektory">Pro koho</a>
<a className="hover:text-white transition-colors" href="#automaty">Automaty</a>
<a className="hover:text-white transition-colors" href="#reference">Reference</a>
</div>

<a className="hidden md:flex items-center gap-2 text-sm font-medium bg-white text-black px-5 py-2.5 rounded-full hover:bg-[#E6FF00] transition-colors duration-300" href="#poptavka">
<span>Poptat řešení</span>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-3 py-1 mb-8 bg-[#1A1A1A]/50">
<span className="w-2 h-2 rounded-full bg-[#E6FF00] animate-pulse"></span>
<span className="text-xs tracking-wide uppercase text-[#BDBDBD]">Provozujeme 500+ automatů v ČR</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-8">
                    Kompletní vending <br/>
<span className="text-[#BDBDBD]">řešení bez starostí.</span>
</h1>
<p className="text-lg md:text-xl text-[#BDBDBD] max-w-2xl font-light mb-12 leading-relaxed">
                    Zajistíme instalaci, doplňování i servis občerstvovacích automatů pro firmy, školy a průmyslové areály. Vy se nestaráte o nic.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-3 bg-[#E6FF00] text-black px-8 py-4 rounded-full text-base font-medium hover:bg-white transition-all transform hover:-translate-y-1" href="#poptavka">
<span>Ověřit vhodnost pro váš provoz</span>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/5 transition-colors" href="#jak-to-funguje">
                        Jak to funguje
                    </a>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#1A1A1A] to-transparent opacity-20 -z-10 pointer-events-none"></div>
</header>

<section className="py-20 px-6 border-t border-white/5" id="sektory">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Pro koho je Snackie?</h2>
<p className="text-[#BDBDBD] max-w-md">Naše řešení škálujeme podle typu a velikosti provozu. Specializujeme se na vysokou zátěž.</p>
</div>
<div className="hidden md:block">
<iconify-icon className="text-[#1A1A1A]" icon="solar:buildings-linear" width="48"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-[#1A1A1A] p-8 rounded-2xl border border-white/5 hover:border-[#E6FF00]/50 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-[#0E0E0E] flex items-center justify-center mb-6 group-hover:bg-[#E6FF00] transition-colors">
<iconify-icon className="text-white group-hover:text-black" icon="solar:factory-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Průmyslové areály</h3>
<p className="text-sm text-[#BDBDBD] font-light leading-relaxed">Robustní automaty pro nepřetržité provozy. Platba kartou i čipy zaměstnanců.</p>
</div>

<div className="group bg-[#1A1A1A] p-8 rounded-2xl border border-white/5 hover:border-[#E6FF00]/50 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-[#0E0E0E] flex items-center justify-center mb-6 group-hover:bg-[#E6FF00] transition-colors">
<iconify-icon className="text-white group-hover:text-black" icon="solar:square-academic-cap-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Školy a univerzity</h3>
<p className="text-sm text-[#BDBDBD] font-light leading-relaxed">Sortiment splňující pamlskovou vyhlášku. Rychlé odbavení během přestávek.</p>
</div>

<div className="group bg-[#1A1A1A] p-8 rounded-2xl border border-white/5 hover:border-[#E6FF00]/50 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-[#0E0E0E] flex items-center justify-center mb-6 group-hover:bg-[#E6FF00] transition-colors">
<iconify-icon className="text-white group-hover:text-black" icon="solar:case-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Administrativní budovy</h3>
<p className="text-sm text-[#BDBDBD] font-light leading-relaxed">Prémiová káva a zdravé snacky. Elegantní design, který neruší interiér.</p>
</div>

<div className="group bg-[#1A1A1A] p-8 rounded-2xl border border-white/5 hover:border-[#E6FF00]/50 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-[#0E0E0E] flex items-center justify-center mb-6 group-hover:bg-[#E6FF00] transition-colors">
<iconify-icon className="text-white group-hover:text-black" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Veřejné prostory</h3>
<p className="text-sm text-[#BDBDBD] font-light leading-relaxed">Vysoká odolnost proti vandalismu a telemetrie pro efektivní doplňování.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#1A1A1A]" id="reseni">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-tight">
                    Provoz automatů <br/>
<span className="text-[#E6FF00]">řešíme my.</span>
</h2>
<p className="text-[#BDBDBD] text-lg mb-8 font-light">
                    Soustřeďte se na svůj byznys. My zajistíme, aby vaši zaměstnanci a klienti měli vždy přístup k občerstvení. Žádné starosti, žádné skryté náklady.
                </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-[#E6FF00] mt-1 shrink-0" icon="solar:verified-check-linear" width="24"></iconify-icon>
<div>
<strong className="block text-white font-medium">Instalace zdarma</strong>
<span className="text-sm text-[#BDBDBD]">Přivezeme, zapojíme a nastavíme automaty na vlastní náklady.</span>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#E6FF00] mt-1 shrink-0" icon="solar:box-linear" width="24"></iconify-icon>
<div>
<strong className="block text-white font-medium">Pravidelné doplňování</strong>
<span className="text-sm text-[#BDBDBD]">Díky telemetrii víme přesně, kdy automat potřebuje doplnit.</span>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#E6FF00] mt-1 shrink-0" icon="solar:wrench-linear" width="24"></iconify-icon>
<div>
<strong className="block text-white font-medium">Okamžitý servis</strong>
<span className="text-sm text-[#BDBDBD]">Technické závady řešíme prioritně, většinu do 24 hodin.</span>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#E6FF00] mt-1 shrink-0" icon="solar:shield-check-linear" width="24"></iconify-icon>
<div>
<strong className="block text-white font-medium">Pojištění a odpovědnost</strong>
<span className="text-sm text-[#BDBDBD]">Veškerá rizika spojená s provozem nese Snackie.</span>
</div>
</li>
</ul>
</div>
<div className="relative h-full min-h-[400px] bg-[#0E0E0E] rounded-2xl border border-white/5 p-8 flex flex-col justify-between">

<div className="space-y-4">
<div className="flex items-center justify-between border-b border-white/10 pb-4">
<span className="text-sm text-[#BDBDBD]">Dostupnost služby</span>
<span className="text-[#E6FF00] font-mono">99.8%</span>
</div>
<div className="flex items-center justify-between border-b border-white/10 pb-4">
<span className="text-sm text-[#BDBDBD]">Reakční doba servisu</span>
<span className="text-white font-mono">&lt; 24h</span>
</div>
<div className="flex items-center justify-between pb-4">
<span className="text-sm text-[#BDBDBD]">Sortiment</span>
<span className="text-white text-right text-sm">Na míru lokalitě</span>
</div>
</div>
<div className="mt-12">
<h3 className="text-2xl font-medium tracking-tight mb-2">Sortiment na míru</h3>
<p className="text-[#BDBDBD] text-sm leading-relaxed">
                        Neprodáváme univerzální řešení. Nabídku automatu sestavujeme na základě dat a preferencí konkrétního místa. Od proteinových tyčinek do fitka po bagety do výroby.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="jak-to-funguje">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Jak zahájit spolupráci?</h2>
<p className="text-[#BDBDBD]">Jednoduchý proces od poptávky po první kávu.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="relative z-10">
<span className="text-6xl font-medium text-[#1A1A1A] absolute -top-8 -left-4 -z-10">01</span>
<h3 className="text-lg font-medium text-white mb-2">Nezávazná poptávka</h3>
<p className="text-sm text-[#BDBDBD]">Vyplníte krátký formulář o vašem provozu a odhadovaném počtu lidí.</p>
</div>

<div className="relative z-10">
<span className="text-6xl font-medium text-[#1A1A1A] absolute -top-8 -left-4 -z-10">02</span>
<h3 className="text-lg font-medium text-white mb-2">Návrh řešení</h3>
<p className="text-sm text-[#BDBDBD]">Navrhneme vhodný typ automatu a skladbu sortimentu přímo pro vás.</p>
</div>

<div className="relative z-10">
<span className="text-6xl font-medium text-[#1A1A1A] absolute -top-8 -left-4 -z-10">03</span>
<h3 className="text-lg font-medium text-white mb-2">Instalace</h3>
<p className="text-sm text-[#BDBDBD]">Přijedeme, zapojíme a naplníme. Vše obvykle stihneme během pár hodin.</p>
</div>

<div className="relative z-10">
<span className="text-6xl font-medium text-[#1A1A1A] absolute -top-8 -left-4 -z-10">04</span>
<h3 className="text-lg font-medium text-[#E6FF00] mb-2">Provoz &amp; servis</h3>
<p className="text-sm text-[#BDBDBD]">Jezdíme doplňovat, čistit a servisovat. Vy si jen užíváte občerstvení.</p>
</div>

<div className="hidden md:block absolute top-4 left-0 w-full h-px bg-gradient-to-r from-[#1A1A1A] via-[#333] to-[#1A1A1A] -z-20"></div>
</div>
</div>
</section>

<section className="py-20 px-6 border-y border-white/5 bg-[#0E0E0E]" id="reference">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/2">
<h2 className="text-3xl font-medium tracking-tight mb-6">Stabilní partner s celorepublikovým pokrytím</h2>
<p className="text-[#BDBDBD] mb-8 font-light">
                    Snackie není lokální projekt. Obsluhujeme stovky klientů po celé České republice. Zaručujeme stabilitu dodávek a jednotný standard kvality pro všechny vaše pobočky.
                </p>
<div className="grid grid-cols-2 gap-6">
<div>
<span className="block text-3xl font-medium text-white">500+</span>
<span className="text-xs text-[#BDBDBD] uppercase tracking-wide">Instalovaných automatů</span>
</div>
<div>
<span className="block text-3xl font-medium text-white">100%</span>
<span className="text-xs text-[#BDBDBD] uppercase tracking-wide">Pokrytí ČR</span>
</div>
</div>
</div>
<div className="w-full md:w-1/2 grid grid-cols-2 gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-24 bg-[#1A1A1A] rounded flex items-center justify-center border border-white/5">LOGOTYP</div>
<div className="h-24 bg-[#1A1A1A] rounded flex items-center justify-center border border-white/5">LOGOTYP</div>
<div className="h-24 bg-[#1A1A1A] rounded flex items-center justify-center border border-white/5">LOGOTYP</div>
<div className="h-24 bg-[#1A1A1A] rounded flex items-center justify-center border border-white/5">LOGOTYP</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="automaty">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-10">
<h2 className="text-2xl font-medium tracking-tight">Portfolio technologií</h2>
<a className="text-sm text-[#E6FF00] hover:text-white transition-colors flex items-center gap-1" href="#">
                    Všechny automaty <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<a className="block group" href="#">
<div className="bg-[#1A1A1A] h-64 rounded-xl mb-4 border border-white/5 group-hover:border-white/20 transition-all flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-[#333] group-hover:text-white transition-colors" icon="solar:cup-hot-linear" width="64"></iconify-icon>
<div className="absolute bottom-4 right-4 bg-black/50 px-2 py-1 rounded text-xs text-white backdrop-blur">Kávomaty</div>
</div>
<h3 className="text-lg font-medium text-white group-hover:text-[#E6FF00] transition-colors">Nápojové automaty</h3>
<p className="text-sm text-[#BDBDBD]">Čerstvě mletá káva a teplé nápoje.</p>
</a>
<a className="block group" href="#">
<div className="bg-[#1A1A1A] h-64 rounded-xl mb-4 border border-white/5 group-hover:border-white/20 transition-all flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-[#333] group-hover:text-white transition-colors" icon="solar:donut-bitten-linear" width="64"></iconify-icon>
<div className="absolute bottom-4 right-4 bg-black/50 px-2 py-1 rounded text-xs text-white backdrop-blur">Spirálové</div>
</div>
<h3 className="text-lg font-medium text-white group-hover:text-[#E6FF00] transition-colors">Potravinové automaty</h3>
<p className="text-sm text-[#BDBDBD]">Baguety, sladkosti, nápoje v PET.</p>
</a>
<a className="block group" href="#">
<div className="bg-[#1A1A1A] h-64 rounded-xl mb-4 border border-white/5 group-hover:border-white/20 transition-all flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-[#333] group-hover:text-white transition-colors" icon="solar:bottle-linear" width="64"></iconify-icon>
<div className="absolute bottom-4 right-4 bg-black/50 px-2 py-1 rounded text-xs text-white backdrop-blur">Kombinované</div>
</div>
<h3 className="text-lg font-medium text-white group-hover:text-[#E6FF00] transition-colors">Výdejníky na vodu</h3>
<p className="text-sm text-[#BDBDBD]">Filtrace a barelové systémy.</p>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#1A1A1A] border-t border-white/5" id="poptavka">
<div className="max-w-4xl mx-auto text-center mb-12">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Zjistěte, zda je Snackie <br/> vhodné pro váš provoz</h2>
<p className="text-[#BDBDBD] text-lg">Nezávazně. Bez objednávky. Zdarma navrhneme řešení na míru.</p>
</div>
<div className="max-w-2xl mx-auto bg-[#0E0E0E] p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
<form action="#" className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-wide text-[#BDBDBD] font-semibold" htmlFor="type">Typ provozu</label>
<div className="relative">
<select className="w-full bg-[#1A1A1A] border border-white/10 text-white rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-[#E6FF00] transition-colors cursor-pointer text-sm" id="type">
<option>Výroba / Průmysl</option>
<option>Kanceláře</option>
<option>Škola / Univerzita</option>
<option>Zdravotnictví</option>
<option>Veřejný prostor</option>
</select>
<iconify-icon className="absolute right-4 top-3.5 text-[#BDBDBD] pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wide text-[#BDBDBD] font-semibold" htmlFor="employees">Počet lidí v objektu</label>
<input className="w-full bg-[#1A1A1A] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#E6FF00] transition-colors text-sm placeholder-[#555]" id="employees" placeholder="Např. 150" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-wide text-[#BDBDBD] font-semibold" htmlFor="city">Město / Lokalita</label>
<input className="w-full bg-[#1A1A1A] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#E6FF00] transition-colors text-sm placeholder-[#555]" id="city" placeholder="Kde se nacházíte?" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wide text-[#BDBDBD] font-semibold" htmlFor="email">Váš E-mail</label>
<input className="w-full bg-[#1A1A1A] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#E6FF00] transition-colors text-sm placeholder-[#555]" id="email" placeholder="jan.novak@firma.cz" type="email"/>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-[#E6FF00] text-black font-semibold text-base py-4 rounded-lg hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2" type="submit">
                        Odeslat nezávaznou poptávku
                    </button>
<p className="text-center text-xs text-[#555] mt-4">Kliknutím souhlasíte se zpracováním osobních údajů pro účely kalkulace.</p>
</div>
</form>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<span className="text-lg font-medium tracking-tighter uppercase block mb-2">Snackie</span>
<p className="text-sm text-[#555]">Professional Vending Solutions</p>
</div>
<div className="flex flex-wrap gap-8 text-sm text-[#BDBDBD]">
<a className="hover:text-white" href="#">O společnosti</a>
<a className="hover:text-white" href="#">Kariéra</a>
<a className="hover:text-white" href="#">Kontakt</a>
<a className="hover:text-white" href="#">Podmínky ochrany údajů</a>
</div>
<div className="text-xs text-[#333]">
                © 2023 Snackie. Všechna práva vyhrazena.
            </div>
</div>
</footer>

    </>
  );
}
