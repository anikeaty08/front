import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('open');
        });

        // Close menu when clicking a link
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('open');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a className="text-2xl font-semibold tracking-tighter text-[#1A2B4A] uppercase" href="#">
                        VYMKNUTÝ.SK
                    </a>
</div>

<nav className="hidden lg:flex space-x-8">
<a className="text-[#1C1C1C] hover:text-[#F57C00] font-medium text-sm transition-colors" href="#sluzby">Služby</a>
<a className="text-[#1C1C1C] hover:text-[#F57C00] font-medium text-sm transition-colors" href="#precoh-nas">Prečo my</a>
<a className="text-[#1C1C1C] hover:text-[#F57C00] font-medium text-sm transition-colors" href="#realizacie">Realizácie</a>
<a className="text-[#1C1C1C] hover:text-[#F57C00] font-medium text-sm transition-colors" href="#kontakt">Kontakt</a>
</nav>

<div className="hidden lg:flex items-center space-x-6">
<a className="flex items-center text-[#1A2B4A] font-semibold text-base hover:text-[#F57C00] transition-colors" href="tel:0900123456">
<iconify-icon className="mr-2" icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        0900 123 456
                    </a>
<a className="bg-[#F57C00] text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-[#e67300] hover:scale-105 transition-all shadow-sm" href="tel:0900123456">
                        Zavolajte nám
                    </a>
</div>

<div className="flex items-center lg:hidden gap-4">
<a className="flex items-center text-[#1A2B4A] font-semibold text-sm" href="tel:0900123456">
<iconify-icon className="mr-1" icon="solar:phone-calling-linear" width="18"></iconify-icon>
                        0900 123 456
                    </a>
<button className="text-[#1A2B4A] focus:outline-none p-2" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="lg:hidden bg-white border-t border-gray-100" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-2">
<a className="block px-3 py-3 rounded-md text-base font-medium text-[#1C1C1C] hover:bg-gray-50" href="#sluzby">Služby</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-[#1C1C1C] hover:bg-gray-50" href="#precoh-nas">Prečo my</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-[#1C1C1C] hover:bg-gray-50" href="#realizacie">Realizácie</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-[#1C1C1C] hover:bg-gray-50" href="#kontakt">Kontakt</a>
<div className="pt-4">
<a className="block w-full text-center bg-[#F57C00] text-white px-6 py-3 rounded-md font-semibold text-base shadow-sm" href="tel:0900123456">
                        Zavolajte nám
                    </a>
</div>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#1A2B4A] overflow-hidden">

<div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="text-center lg:text-left">
<h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight tracking-tight mb-6">
                        Zamknutí? <br/>Sme tu do 30 minút.
                    </h1>
<p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        Núdzové otváranie dverí, výmena zámkov a zabezpečenie – rýchlo, spoľahlivo, kedykoľvek.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
<a className="inline-flex justify-center items-center bg-[#F57C00] text-white px-8 py-3.5 rounded-md font-semibold text-base hover:bg-[#e67300] hover:scale-[1.02] transition-all shadow-lg" href="tel:0900123456">
<iconify-icon className="mr-2" icon="solar:phone-calling-bold" width="20"></iconify-icon>
                            Zavolajte teraz – 0900 123 456
                        </a>
<a className="inline-flex justify-center items-center border border-white/30 text-white px-8 py-3.5 rounded-md font-semibold text-base hover:bg-white/10 transition-colors" href="#kontakt">
                            Poslať dopyt online
                        </a>
</div>

<div className="grid grid-cols-2 md:flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start text-sm font-medium text-gray-300">
<div className="flex items-center">
<iconify-icon className="text-[#F57C00] mr-2" icon="solar:clock-circle-linear" width="18"></iconify-icon>
                            Dostupní 24/7
                        </div>
<div className="flex items-center">
<iconify-icon className="text-[#F57C00] mr-2" icon="solar:running-linear" width="18"></iconify-icon>
                            Príchod do 30 minút
                        </div>
<div className="flex items-center">
<iconify-icon className="text-[#F57C00] mr-2" icon="solar:shield-check-linear" width="18"></iconify-icon>
                            Overení odborníci
                        </div>
<div className="flex items-center">
<iconify-icon className="text-[#F57C00] mr-2" icon="solar:wallet-money-linear" width="18"></iconify-icon>
                            Bez skrytých poplatkov
                        </div>
</div>
</div>

<div className="relative hidden lg:block">
<div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]">

<img alt="Detail kľúča v zámku" className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#1A2B4A]/80 to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F8F8F6] pt-20 pb-20" id="sluzby">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-[#1C1C1C] tracking-tight mb-4">Naše služby</h2>
<div className="w-16 h-1 bg-[#F57C00] mx-auto rounded-full"></div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl card-shadow group hover:shadow-lg transition-shadow duration-300">
<div className="w-12 h-12 bg-[#FFF3E0] rounded-lg flex items-center justify-center text-[#F57C00] mb-6 group-hover:bg-[#F57C00] group-hover:text-white transition-colors">
<iconify-icon className="" icon="solar:key-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">Núdzové otváranie dverí</h3>
<p className="text-gray-600 leading-relaxed">Rýchly príchod aj v noci alebo cez víkend. Otvárame zabuchnuté aj zamknuté dvere bez poškodenia.</p>
</div>

<div className="bg-white p-8 rounded-xl card-shadow group hover:shadow-lg transition-shadow duration-300">
<div className="w-12 h-12 bg-[#FFF3E0] rounded-lg flex items-center justify-center text-[#F57C00] mb-6 group-hover:bg-[#F57C00] group-hover:text-white transition-colors">
<iconify-icon className="" icon="solar:lock-password-unlocked-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">Výmena a montáž zámkov</h3>
<p className="text-gray-600 leading-relaxed">Kvalitné zámky renomovaných výrobcov. Zabezpečíme vašu domácnosť najmodernejšou technikou.</p>
</div>

<div className="bg-white p-8 rounded-xl card-shadow group hover:shadow-lg transition-shadow duration-300">
<div className="w-12 h-12 bg-[#FFF3E0] rounded-lg flex items-center justify-center text-[#F57C00] mb-6 group-hover:bg-[#F57C00] group-hover:text-white transition-colors">
<iconify-icon className="" icon="solar:safe-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">Otváranie trezoru</h3>
<p className="text-gray-600 leading-relaxed">Bezpečne a bez poškodenia obsahu. Diskrétny prístup k vašim cennostiam pri strate kľúča.</p>
</div>

<div className="bg-white p-8 rounded-xl card-shadow group hover:shadow-lg transition-shadow duration-300">
<div className="flex group-hover:bg-[#0] bg-[#FFF3E0] w-12 h-12 rounded-lg mb-6 items-center justify-center">
<iconify-icon className="" height="28" icon="solar:shield-check-linear" style={{color: 'rgb(249, 115, 22)'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">Zabezpečenie bytov a domov</h3>
<p className="text-gray-600 leading-relaxed">Komplexné riešenia pre váš pokoj. Bezpečnostné kovanie, vložky a prídavné zámky.</p>
</div>

<div className="bg-white p-8 rounded-xl card-shadow group hover:shadow-lg transition-shadow duration-300">
<div className="flex group-hover:bg-[#F57C00] group-hover:text-white transition-colors text-[#F57C00] bg-[#FFF3E0] w-12 h-12 rounded-lg mb-6 items-center justify-center">
<svg className="" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28">
<path className="" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">Oprava zámkov</h3>
<p className="text-gray-600 leading-relaxed">Rýchla diagnostika a oprava na mieste. Zaseknuté kľúče alebo poškodené mechanizmy.</p>
</div>

<div className="bg-white p-8 rounded-xl card-shadow group hover:shadow-lg transition-shadow duration-300">
<div className="w-12 h-12 bg-[#FFF3E0] rounded-lg flex items-center justify-center text-[#F57C00] mb-6 group-hover:bg-[#F57C00] group-hover:text-white transition-colors">
<iconify-icon className="" icon="solar:key-square-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">Kópie kľúčov</h3>
<p className="text-gray-600 leading-relaxed">Presné kopírovanie kľúčov hneď pri výmene vložky alebo na našej centrále.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#1A2B4A] text-white" id="precoh-nas">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Prečo si vybrať nás?</h2>
<div className="w-16 h-1 bg-[#F57C00] mx-auto rounded-full opacity-80"></div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

<div className="text-center sm:text-left">
<div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-full mb-6 text-[#F57C00]">
<iconify-icon icon="solar:stopwatch-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Rýchly príchod</h3>
<p className="text-gray-300 text-sm leading-relaxed">Do 30 minút vo väčšine prípadov v rámci výjazdovej oblasti.</p>
</div>

<div className="text-center sm:text-left">
<div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-full mb-6 text-[#F57C00]">
<iconify-icon icon="solar:medal-star-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Profesionalita</h3>
<p className="text-gray-300 text-sm leading-relaxed">Vyškolení odborníci s rokmi praxe a čistým registrom trestov.</p>
</div>

<div className="text-center sm:text-left">
<div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-full mb-6 text-[#F57C00]">
<iconify-icon icon="solar:tag-price-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Transparentné ceny</h3>
<p className="text-gray-300 text-sm leading-relaxed">Cena je vždy dohodnutá a odsúhlasená pred začatím práce.</p>
</div>

<div className="text-center sm:text-left">
<div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-full mb-6 text-[#F57C00]">
<iconify-icon icon="solar:phone-calling-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Nonstop dostupnosť</h3>
<p className="text-gray-300 text-sm leading-relaxed">Voláte o 3 ráno? Nevadí. Sme tu pre vás 24 hodín denne.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="realizacie">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-[#1C1C1C] tracking-tight mb-4">Ukážky našich prác</h2>
<div className="w-16 h-1 bg-[#F57C00] mx-auto rounded-full"></div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3] bg-[#1A2B4A] flex flex-col items-center justify-center text-center p-6 border-b-4 border-[#F57C00] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="mb-4 text-[#F57C00] group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear" width="48"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-lg tracking-tight mb-1">Výmena zámku</h3>
<p className="text-white/60 text-sm">Bratislava - Staré Mesto</p>
</div>

<div className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3] bg-[#1A2B4A] flex flex-col items-center justify-center text-center p-6 border-b-4 border-[#F57C00] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="mb-4 text-[#F57C00] group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" width="48"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-lg tracking-tight mb-1">Montáž bezpečnostného kovania</h3>
<p className="text-white/60 text-sm">Trnava</p>
</div>

<div className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3] bg-[#1A2B4A] flex flex-col items-center justify-center text-center p-6 border-b-4 border-[#F57C00] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="mb-4 text-[#F57C00] group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:door-open-linear" width="48"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-lg tracking-tight mb-1">Núdzové otvorenie bytu</h3>
<p className="text-white/60 text-sm">Petržalka</p>
</div>
</div>
<p className="text-center text-gray-500 mt-10 text-sm font-medium">Každá zákazka je pre nás rovnako dôležitá.</p>
</div>
</section>

<section className="py-20 bg-[#F8F8F6]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl lg:text-4xl font-semibold text-center text-[#1C1C1C] tracking-tight mb-16">Čo hovoria naši zákazníci</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full">
<div className="flex text-[#F57C00] mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<blockquote className="text-gray-600 mb-6 flex-grow leading-relaxed">
                        "Prišli do 20 minút, profesionálny prístup. Vyriešili zabuchnuté dvere bez akéhokoľvek poškodenia. Určite odporúčam!"
                    </blockquote>
<div>
<div className="font-semibold text-[#1C1C1C]">Marta K.</div>
<div className="text-sm text-gray-500">Bratislava</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full">
<div className="flex text-[#F57C00] mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<blockquote className="text-gray-600 mb-6 flex-grow leading-relaxed">
                        "Výmena zámku prebehla rýchlo a čisto. Pán bol veľmi ochotný a poradil mi aj s lepším zabezpečením dverí. Veľmi spokojná."
                    </blockquote>
<div>
<div className="font-semibold text-[#1C1C1C]">Tomáš R.</div>
<div className="text-sm text-gray-500">Trnava</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full">
<div className="flex text-[#F57C00] mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<blockquote className="text-gray-600 mb-6 flex-grow leading-relaxed">
                        "Nonstop dostupnosť je pre mňa rozhodujúca, keďže sa mi to stalo v noci. Skvelá služba, prišli takmer okamžite."
                    </blockquote>
<div>
<div className="font-semibold text-[#1C1C1C]">Jana H.</div>
<div className="text-sm text-gray-500">Košice</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#F57C00] text-white">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Potrebujete pomoc so zámkom?</h2>
<p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Zavolajte nám alebo vyplňte krátky formulár. Ozveme sa do 10 minút a vyriešime váš problém.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex justify-center items-center bg-white text-[#F57C00] px-8 py-3.5 rounded-md font-bold text-base hover:bg-gray-100 transition-colors shadow-lg" href="tel:0900123456">
<iconify-icon className="mr-2" icon="solar:phone-calling-bold" width="20"></iconify-icon>
                    Zavolajte: 0900 123 456
                </a>
<a className="inline-flex justify-center items-center bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-md font-bold text-base hover:bg-white/10 transition-colors" href="#kontakt">
                    Odoslať dopyt
                </a>
</div>
</div>
</section>

<section className="py-20 bg-white" id="kontakt">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-[#1C1C1C] tracking-tight mb-4">Kontaktujte nás</h2>
<div className="w-16 h-1 bg-[#F57C00] mx-auto rounded-full"></div>
</div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

<div className="bg-[#F8F8F6] p-8 rounded-xl border border-gray-100">
<form action="#" className="space-y-5" method="POST">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Meno <span className="text-[#F57C00]">*</span></label>
<input className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F57C00] focus:border-transparent transition-shadow bg-white" id="name" name="name" placeholder="Ján Novák" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">Telefón <span className="text-[#F57C00]">*</span></label>
<input className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F57C00] focus:border-transparent transition-shadow bg-white" id="phone" name="phone" placeholder="09XX XXX XXX" required="" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Popis problému</label>
<textarea className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F57C00] focus:border-transparent transition-shadow bg-white resize-none" id="message" name="message" placeholder="Zabuchnuté dvere, výmena vložky..." rows="4"></textarea>
</div>
<button className="w-full bg-[#F57C00] text-white font-bold py-3.5 rounded-md hover:bg-[#e67300] transition-colors shadow-md" type="submit">
                            Odoslať dopyt
                        </button>
</form>
</div>

<div className="flex flex-col justify-center space-y-8">
<div>
<h3 className="text-lg font-semibold text-[#1C1C1C] mb-1">Potrebujete hovoriť s technikom?</h3>
<p className="text-gray-500 text-sm mb-4">Sme na linke a pripravení vyraziť.</p>
<a className="text-3xl sm:text-4xl font-bold text-[#1A2B4A] hover:text-[#F57C00] transition-colors tracking-tight" href="tel:0900123456">
                            0900 123 456
                        </a>
</div>
<div className="h-px bg-gray-200 w-full"></div>
<div className="space-y-6">
<div className="flex items-start">
<div className="flex-shrink-0 w-10 h-10 bg-[#E8EAF6] rounded-full flex items-center justify-center text-[#1A2B4A]">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-900">Email</p>
<p className="text-gray-600">info@vymknuty.sk</p>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 w-10 h-10 bg-[#E8EAF6] rounded-full flex items-center justify-center text-[#1A2B4A]">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-900">Otváracie hodiny</p>
<p className="text-gray-600">Nonstop – 24/7</p>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 w-10 h-10 bg-[#E8EAF6] rounded-full flex items-center justify-center text-[#1A2B4A]">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-900">Oblasť pôsobenia</p>
<p className="text-gray-600">Celé Slovensko (Bratislava, Trnava, Nitra, Košice...)</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1A2B4A] text-white pt-16 pb-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<span className="text-2xl font-semibold tracking-tighter uppercase mb-4 block text-white">VYMKNUTÝ.SK</span>
<p className="text-gray-400 text-sm max-w-sm">Spoľahlivá zámočnícka služba pre vašu bezpečnosť. Rýchly príchod, profesionálny prístup a férové ceny.</p>
</div>
<div>
<h4 className="font-semibold mb-4 text-[#F57C00]">Rýchle odkazy</h4>
<ul className="space-y-2 text-sm text-gray-300">
<li><a className="hover:text-white transition-colors" href="#sluzby">Služby</a></li>
<li><a className="hover:text-white transition-colors" href="#precoh-nas">Prečo my</a></li>
<li><a className="hover:text-white transition-colors" href="#realizacie">Realizácie</a></li>
<li><a className="hover:text-white transition-colors" href="#kontakt">Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-[#F57C00]">Kontakt</h4>
<ul className="space-y-2 text-sm text-gray-300">
<li><a className="hover:text-white transition-colors" href="tel:0900123456">0900 123 456</a></li>
<li><a className="hover:text-white transition-colors" href="mailto:info@vymknuty.sk">info@vymknuty.sk</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
<p>© 2025 Vymknutý.sk. Všetky práva vyhradené.</p>
<div className="mt-4 md:mt-0 space-x-4">
<a className="hover:text-gray-300" href="#">Ochrana osobných údajov</a>
<a className="hover:text-gray-300" href="#">Obchodné podmienky</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
