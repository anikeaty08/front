import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
nature: {
50: '#f2fcf5',
100: '#e1f8e8',
200: '#c3efd2',
300: '#94e0b3',
400: '#5cc78e',
500: '#34ae71',
600: '#258d59',
700: '#207049',
800: '#1d593d',
900: '#194934',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 border-b border-slate-200/60 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight text-slate-900 flex items-center gap-2" href="#">
<span className="bg-nature-100 text-nature-700 w-8 h-8 flex items-center justify-center rounded-lg border border-nature-200">
<span className="font-semibold text-sm">Z</span>
</span>
<span>závlahy<span className="text-slate-400">a</span>zahrady</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-nature-600 transition-colors" href="#services">Služby</a>
<a className="hover:text-nature-600 transition-colors" href="#process">Realizace</a>
<a className="hover:text-nature-600 transition-colors" href="#projects">Projekty</a>
<a className="hover:text-nature-600 transition-colors" href="#contact">Kontakt</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all items-center gap-2 shadow-lg shadow-slate-200">
<span>Poptávka</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nature-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-nature-500"></span>
</span>
<span className="text-xs font-medium text-slate-500 tracking-wide uppercase">Sezóna 2024 zahájena</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 mb-8 leading-[1.1]">
                    Inteligentní závlahy <br/> a moderní <span className="text-nature-600">architektura</span>.
                </h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed font-light max-w-2xl">
                    Proměňujeme venkovní prostory v živá umělecká díla. Specializujeme se na automatické závlahové systémy a komplexní realizace zahrad na klíč.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="bg-nature-600 hover:bg-nature-700 text-white text-base font-medium px-6 py-3 rounded-lg transition-all shadow-lg shadow-nature-200 flex items-center gap-2">
<span>Nezávazná konzultace</span>
</button>
<button className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-base font-medium px-6 py-3 rounded-lg transition-all flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
<span>Jak pracujeme</span>
</button>
</div>
</div>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-nature-100 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none"></div>
</section>

<section className="border-y border-slate-100 bg-white py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-3xl font-medium text-slate-900 tracking-tight mb-1">15+</div>
<div className="text-sm text-slate-500">Let zkušeností</div>
</div>
<div>
<div className="text-3xl font-medium text-slate-900 tracking-tight mb-1">800+</div>
<div className="text-sm text-slate-500">Realizovaných projektů</div>
</div>
<div>
<div className="text-3xl font-medium text-slate-900 tracking-tight mb-1">100%</div>
<div className="text-sm text-slate-500">Hunter &amp; Rain Bird</div>
</div>
<div>
<div className="text-3xl font-medium text-slate-900 tracking-tight mb-1">24/7</div>
<div className="text-sm text-slate-500">Servisní podpora</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Komplexní péče o zeleň</h2>
<p className="text-slate-500 font-light text-lg">Od prvotního návrhu až po pravidelnou údržbu. Využíváme nejmodernější technologie pro úsporu vody a dokonalý vzhled trávníku.</p>
</div>
<a className="text-nature-600 font-medium flex items-center gap-1 hover:gap-2 transition-all" href="#">
                    Zobrazit ceník <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-nature-200 shadow-sm hover:shadow-xl hover:shadow-nature-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-nature-50 text-nature-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:water-drops-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Automatické závlahy</h3>
<p className="text-slate-500 leading-relaxed text-sm mb-6">
                        Profesionální instalace systémů Hunter a Rain Bird. Chytré řízení přes Wi-Fi, senzory vlhkosti a úspora vody až 40%.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-nature-500" icon="solar:check-circle-linear"></iconify-icon> Návrh systému zdarma
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-nature-500" icon="solar:check-circle-linear"></iconify-icon> Jarní spouštění a zazimování
                        </li>
</ul>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-nature-200 shadow-sm hover:shadow-xl hover:shadow-nature-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:ruler-pen-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Projekce a Realizace</h3>
<p className="text-slate-500 leading-relaxed text-sm mb-6">
                        Zahradní architektura na míru. Vypracujeme projektovou dokumentaci, 3D vizualizace a zajistíme kompletní realizaci.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Terénní úpravy
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Výsadba rostlin a dřevin
                        </li>
</ul>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-nature-200 shadow-sm hover:shadow-xl hover:shadow-nature-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:scissors-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Údržba zahrad</h3>
<p className="text-slate-500 leading-relaxed text-sm mb-6">
                        Pravidelná i jednorázová péče o váš trávník a výsadbu. Vertikutace, hnojení, stříhání živých plotů a chemická ochrana.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Revitalizace trávníků
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Odvoz bioodpadu
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<div className="absolute right-0 top-0 w-[500px] h-[500px] bg-nature-500 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-6">
<iconify-icon className="text-nature-400" icon="solar:smartphone-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-300 tracking-wide">Smart Home Ready</span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Zahrada pod kontrolou. <br/>Odkudkoliv.</h2>
<p className="text-slate-400 text-lg font-light mb-8 leading-relaxed">
                        Ovládejte závlahu pomocí aplikace v telefonu. Systém Hydrawise™ automaticky upravuje závlahu podle lokální předpovědi počasí, což šetří až 50 % vody.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex flex-col gap-2 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
<iconify-icon className="text-nature-400 mb-2" icon="solar:cloud-sun-linear" width="32"></iconify-icon>
<h4 className="font-medium">Prediktivní závlaha</h4>
<p className="text-sm text-slate-400">Reakce na déšť, vítr a teplotu v reálném čase.</p>
</div>
<div className="flex flex-col gap-2 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
<iconify-icon className="text-nature-400 mb-2" icon="solar:shield-check-linear" width="32"></iconify-icon>
<h4 className="font-medium">Detekce poruch</h4>
<p className="text-sm text-slate-400">Okamžité upozornění na prasklé potrubí či vadný ventil.</p>
</div>
</div>
</div>

<div className="relative">
<div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl">

<div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:home-smile-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium">Moje Zahrada</div>
<div className="text-xs text-nature-400">Online • Aktivní</div>
</div>
</div>
<div className="text-xs bg-nature-500/20 text-nature-400 px-2 py-1 rounded">Úspora 24%</div>
</div>

<div className="flex items-end gap-2 h-32 mb-6 px-2">
<div className="w-full bg-slate-700/50 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-slate-700/50 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-nature-500 rounded-t-sm h-[85%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">12mm</div>
</div>
<div className="w-full bg-slate-700/50 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-slate-700/50 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-slate-700/50 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-slate-700/50 rounded-t-sm h-[70%]"></div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg border border-slate-700">
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:water-linear"></iconify-icon>
<span className="text-sm">Zóna 1: Trávník Jih</span>
</div>
<div className="w-8 h-4 bg-nature-600 rounded-full relative">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg border border-slate-700">
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:leaf-linear"></iconify-icon>
<span className="text-sm">Zóna 2: Záhony</span>
</div>
<div className="w-8 h-4 bg-slate-600 rounded-full relative">
<div className="absolute left-0.5 top-0.5 w-3 h-3 bg-slate-400 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Vybrané realizace</h2>
<p className="text-slate-500 font-light">
                    Kombinace technické preciznosti a estetického cítění. Prohlédněte si, jak jsme proměnili zahrady našich klientů.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[600px] md:h-[500px]">

<div className="lg:col-span-2 row-span-2 rounded-2xl bg-slate-100 relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558905540-21295106f971?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<div className="text-xs font-medium uppercase tracking-wider mb-2 opacity-80">Praha - Západ</div>
<h3 className="text-2xl font-medium tracking-tight">Kompletní revitalizace vily</h3>
</div>
</div>

<div className="rounded-2xl bg-slate-100 relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599110906887-b2e1bf3315c1?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
<div className="absolute bottom-0 left-0 p-6 text-white">
<h3 className="text-lg font-medium tracking-tight">Instalace Hunter</h3>
</div>
</div>

<div className="rounded-2xl bg-slate-100 relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584467000859-994142646d2f?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
<div className="absolute bottom-0 left-0 p-6 text-white">
<h3 className="text-lg font-medium tracking-tight">Výsadba zeleně</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-2">Máte projekt v hlavě?</h2>
<p className="text-slate-500 font-light">Napište nám. První konzultace a cenová nabídka je zdarma.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Jméno</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-all text-slate-900 placeholder:text-slate-400" placeholder="Jan Novák" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Email</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-all text-slate-900 placeholder:text-slate-400" placeholder="jan@email.cz" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">O co máte zájem?</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="checkbox"/>
<div className="px-3 py-2 text-sm text-center bg-white border border-slate-200 rounded-lg peer-checked:bg-nature-50 peer-checked:border-nature-500 peer-checked:text-nature-700 hover:bg-slate-50 transition-all">Závlaha</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="checkbox"/>
<div className="px-3 py-2 text-sm text-center bg-white border border-slate-200 rounded-lg peer-checked:bg-nature-50 peer-checked:border-nature-500 peer-checked:text-nature-700 hover:bg-slate-50 transition-all">Realizace</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="checkbox"/>
<div className="px-3 py-2 text-sm text-center bg-white border border-slate-200 rounded-lg peer-checked:bg-nature-50 peer-checked:border-nature-500 peer-checked:text-nature-700 hover:bg-slate-50 transition-all">Projekt</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="checkbox"/>
<div className="px-3 py-2 text-sm text-center bg-white border border-slate-200 rounded-lg peer-checked:bg-nature-50 peer-checked:border-nature-500 peer-checked:text-nature-700 hover:bg-slate-50 transition-all">Údržba</div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Zpráva</label>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-all text-slate-900 placeholder:text-slate-400" placeholder="Popište stručně váš projekt..." rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-lg transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-2" type="button">
<span>Odeslat poptávku</span>
<iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
<p className="text-center text-xs text-slate-400 mt-4">
                        Odesláním souhlasíte se zpracováním osobních údajů.
                    </p>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-lg font-medium tracking-tight text-slate-900 flex items-center gap-2 mb-6" href="#">
<span className="bg-nature-100 text-nature-700 w-8 h-8 flex items-center justify-center rounded-lg border border-nature-200">
<span className="font-semibold text-sm">Z</span>
</span>
<span>závlahy<span className="text-slate-400">a</span>zahrady</span>
</a>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Profesionální řešení pro vaši zahradu. Jsme certifikovaným partnerem předních světových značek závlahových systémů.
                    </p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-nature-600 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-nature-600 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Služby</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-nature-600 transition-colors" href="#">Automatické závlahy</a></li>
<li><a className="hover:text-nature-600 transition-colors" href="#">Návrhy zahrad</a></li>
<li><a className="hover:text-nature-600 transition-colors" href="#">Realizace</a></li>
<li><a className="hover:text-nature-600 transition-colors" href="#">Trávníky</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Kontakt</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon> +420 123 456 789
                        </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon> info@zavlahyazahrady.cz
                        </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon> Praha a Střední Čechy
                        </li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Certifikace</h4>
<div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="font-bold text-slate-800 text-lg">Hunter®</div>
<div className="font-bold text-slate-800 text-lg">RAIN BIRD</div>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 Závlahy a Zahrady. Všechna práva vyhrazena.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Ochrana soukromí</a>
<a className="hover:text-slate-600" href="#">Obchodní podmínky</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
