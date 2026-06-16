import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#FAF9F6]/80 border-b border-stone-200/50 transition-all">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-700 text-xl" icon="solar:leaf-linear"></iconify-icon>
<span className="font-semibold tracking-tighter text-base uppercase text-stone-900">Objev Polsko</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#mapa">Mapa</a>
<a className="hover:text-stone-900 transition-colors" href="#mista">Místa</a>
<a className="hover:text-stone-900 transition-colors" href="#majitele">Pro majitele</a>
</nav>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-stone-900 hidden md:block">Přihlásit</button>
<a className="bg-stone-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm" href="#mapa">
                    Začít objevovat
                </a>
</div>
</div>
</header>

<section className="relative w-full h-[90vh] min-h-[600px] mt-16 bg-stone-100 overflow-hidden flex items-center justify-center" id="mapa">

<div className="absolute inset-0">
<img alt="Polská krajina" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/40 via-transparent to-[#FAF9F6]"></div>
</div>


<div className="absolute top-[30%] left-[20%] md:left-[30%] group cursor-pointer z-10">
<div className="relative flex items-center justify-center">
<div className="absolute w-12 h-12 bg-emerald-500/20 rounded-full animate-ping"></div>
<div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-emerald-100 group-hover:scale-110 transition-transform">
<div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
</div>

<div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-2 rounded-xl shadow-lg border border-stone-100 whitespace-nowrap pointer-events-none">
<p className="text-sm font-medium text-stone-800">Skrytá chata v lese</p>
</div>
</div>
</div>

<a className="absolute top-[50%] left-[60%] md:left-[55%] group cursor-pointer z-10" href="#frydrysowka">
<div className="relative flex items-center justify-center">
<div className="absolute w-16 h-16 bg-emerald-500/30 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
<div className="w-10 h-10 bg-emerald-700 text-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:home-smile-linear"></iconify-icon>
</div>

<div className="absolute bottom-full mb-3 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded-2xl shadow-xl border border-stone-100 w-48 pointer-events-none">
<img alt="Frydrysówka" className="w-full h-24 object-cover rounded-xl mb-2" src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<p className="text-sm font-semibold text-stone-800 tracking-tight">Frydrysówka</p>
<p className="text-xs text-stone-500 mt-0.5">Beskydy, Polsko</p>
</div>
</div>
</a>

<div className="absolute top-[70%] left-[30%] group cursor-pointer z-10">
<div className="relative flex items-center justify-center">
<div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-emerald-100 group-hover:scale-110 transition-transform">
<div className="w-3 h-3 bg-stone-400 rounded-full group-hover:bg-emerald-600 transition-colors"></div>
</div>
</div>
</div>

<div className="relative z-20 text-center max-w-3xl px-6 flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm mb-6">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-stone-600">Nové virtuální prohlídky přidány</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-stone-900 leading-tight mb-6">
                Objevte neznámá <br className="hidden md:block"/>místa v Polsku
            </h1>
<p className="text-lg md:text-xl text-stone-600 font-medium max-w-xl mx-auto mb-10">
                Projděte si ubytování, farmy a zážitky ve virtuální realitě ještě před tím, než si je zarezervujete přímo u majitele.
            </p>
<div className="bg-white p-2 rounded-full shadow-lg border border-stone-100 flex items-center max-w-md w-full focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
<div className="pl-4 text-stone-400 flex items-center">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none focus:outline-none text-sm text-stone-800 px-3 py-2 placeholder-stone-400 font-medium" placeholder="Hledat region, typ ubytování..." type="text"/>
<button className="bg-emerald-700 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-emerald-800 transition-colors whitespace-nowrap">
                    Prozkoumat mapu
                </button>
</div>
</div>
</section>

<section className="py-24 bg-[#FAF9F6]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 mb-4">Jak to funguje</h2>
<p className="text-sm md:text-base text-stone-500 font-medium">Žádné rezervační poplatky. Jen čisté objevování a přímý kontakt.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-3xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-stone-900 mb-2">Vyberte místo na mapě</h3>
<p className="text-sm text-stone-500 font-medium leading-relaxed">Najděte skryté perly v přírodě pomocí naší interaktivní mapy lokací.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-stone-100 text-stone-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-3xl" icon="solar:panorama-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-stone-900 mb-2">Projděte si ho ve 3D</h3>
<p className="text-sm text-stone-500 font-medium leading-relaxed">Vstupte dovnitř přes virtuální prohlídku a nasajte atmosféru místa.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-3xl" icon="solar:letter-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-stone-900 mb-2">Kontaktujte napřímo</h3>
<p className="text-sm text-stone-500 font-medium leading-relaxed">Napište majiteli přes náš formulář nebo WhatsApp pro nejlepší cenu.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100" id="mista">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 mb-3">Vybraná místa k objevování</h2>
<p className="text-sm text-stone-500 font-medium">Ubytování s ověřenou virtuální prohlídkou.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors" href="#">
                    Zobrazit vše <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group flex flex-col bg-[#FAF9F6] rounded-3xl overflow-hidden border border-stone-200/50 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Frydrysówka" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-stone-900 tracking-tight flex items-center gap-1.5 shadow-sm">
<iconify-icon className="text-emerald-600" icon="solar:star-fall-linear"></iconify-icon> Doporučujeme
                        </div>
<div className="absolute bottom-4 right-4 bg-stone-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white flex items-center gap-1.5 cursor-pointer hover:bg-stone-900 transition-colors">
<iconify-icon icon="solar:panorama-linear"></iconify-icon> 360° Pohled
                        </div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold tracking-tight text-stone-900">Frydrysówka</h3>
<span className="text-sm font-medium text-stone-500">od 2500 Kč/noc</span>
</div>
<p className="text-sm text-stone-500 font-medium flex items-center gap-1.5 mb-4">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Beskydy, Polsko
                        </p>
<p className="text-sm text-stone-600 mb-6 line-clamp-2">Nádherná dřevěná chata uprostřed lesů. Ideální místo pro únik z města a digitální detox.</p>
<div className="flex items-center gap-4 mt-auto mb-6 text-sm text-stone-500 font-medium">
<span className="flex items-center gap-1.5"><iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon> 6 osob</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-lg" icon="solar:bed-linear"></iconify-icon> 3 ložnice</span>
</div>
<div className="grid grid-cols-2 gap-3 mt-auto">
<a className="flex items-center justify-center py-2.5 rounded-xl border border-stone-200 text-sm font-medium text-stone-900 hover:bg-stone-50 transition-colors" href="#frydrysowka">
                                Prohlédnout
                            </a>
<a className="flex items-center justify-center py-2.5 rounded-xl bg-stone-900 text-sm font-medium text-white hover:bg-stone-800 transition-colors" href="#frydrysowka">
                                Dostupnost
                            </a>
</div>
</div>
</div>

<div className="group flex flex-col bg-[#FAF9F6] rounded-3xl overflow-hidden border border-stone-200/50 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Lake Cabin" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold tracking-tight text-stone-900">Jezerní domek Mazury</h3>
<span className="text-sm font-medium text-stone-500">od 1800 Kč/noc</span>
</div>
<p className="text-sm text-stone-500 font-medium flex items-center gap-1.5 mb-4">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Mazurská jezera
                        </p>
<p className="text-sm text-stone-600 mb-6 line-clamp-2">Minimalistický domek přímo na břehu jezera s vlastní loďkou a saunou.</p>
<div className="flex items-center gap-4 mt-auto mb-6 text-sm text-stone-500 font-medium">
<span className="flex items-center gap-1.5"><iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon> 2-4 osoby</span>
</div>
<div className="grid grid-cols-2 gap-3 mt-auto">
<button className="flex items-center justify-center py-2.5 rounded-xl border border-stone-200 text-sm font-medium text-stone-900 hover:bg-stone-50 transition-colors">Prohlédnout</button>
<button className="flex items-center justify-center py-2.5 rounded-xl bg-stone-900 text-sm font-medium text-white hover:bg-stone-800 transition-colors">Dostupnost</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-[#FAF9F6] rounded-3xl overflow-hidden border border-stone-200/50 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 hidden lg:flex">
<div className="relative h-64 overflow-hidden">
<img alt="Barn House" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold tracking-tight text-stone-900">Stodola u potoka</h3>
<span className="text-sm font-medium text-stone-500">od 3200 Kč/noc</span>
</div>
<p className="text-sm text-stone-500 font-medium flex items-center gap-1.5 mb-4">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Krkonoše, Polsko
                        </p>
<p className="text-sm text-stone-600 mb-6 line-clamp-2">Zrekonstruovaná stodola s obrovskými okny a výhledem do panenské přírody.</p>
<div className="flex items-center gap-4 mt-auto mb-6 text-sm text-stone-500 font-medium">
<span className="flex items-center gap-1.5"><iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon> 8 osob</span>
</div>
<div className="grid grid-cols-2 gap-3 mt-auto">
<button className="flex items-center justify-center py-2.5 rounded-xl border border-stone-200 text-sm font-medium text-stone-900 hover:bg-stone-50 transition-colors">Prohlédnout</button>
<button className="flex items-center justify-center py-2.5 rounded-xl bg-stone-900 text-sm font-medium text-white hover:bg-stone-800 transition-colors">Dostupnost</button>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<button className="text-sm font-medium text-emerald-700 border border-emerald-200 px-6 py-2.5 rounded-full hover:bg-emerald-50 transition-colors">
                    Zobrazit všechna místa
                </button>
</div>
</div>
</section>

<section className="py-12 md:py-24 bg-[#FAF9F6] scroll-mt-16" id="frydrysowka">
<div className="max-w-6xl mx-auto px-6">

<div className="flex items-center gap-2 text-xs font-medium text-stone-500 mb-8">
<a className="hover:text-stone-900" href="#mista">Místa</a>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<a className="hover:text-stone-900" href="#">Beskydy</a>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-stone-900">Frydrysówka</span>
</div>

<div className="relative w-full h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden mb-12 group cursor-pointer bg-stone-900">
<img alt="Frydrysówka exterior" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700" src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl md:text-4xl text-white ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
<div className="absolute bottom-6 left-6 text-white">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-2">Frydrysówka</h1>
<p className="text-sm md:text-base font-medium opacity-90 flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Beskydy, Polsko
                    </p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

<div className="lg:col-span-2 space-y-12">

<div className="prose prose-stone">
<h2 className="text-2xl font-semibold tracking-tight text-stone-900 mb-4">O tomto místě</h2>
<p className="text-stone-600 leading-relaxed font-medium">
                            Útěk do přírody v čisté podobě. Frydrysówka je stará, citlivě zrekonstruovaná dřevěnice na samotě u lesa. Ráno vás vzbudí zpěv ptáků, večer můžete trávit u kachlových kamen nebo venkovního ohniště. Interiér kombinuje tradiční polské řemeslo s moderním minimalismem.
                        </p>
<div className="flex flex-wrap gap-4 mt-6">
<div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-stone-200 text-sm font-medium text-stone-700">
<iconify-icon className="text-lg text-stone-400" icon="solar:users-group-rounded-linear"></iconify-icon> Až pro 6 osob
                            </div>
<div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-stone-200 text-sm font-medium text-stone-700">
<iconify-icon className="text-lg text-stone-400" icon="solar:bed-linear"></iconify-icon> 3 ložnice
                            </div>
<div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-stone-200 text-sm font-medium text-stone-700">
<iconify-icon className="text-lg text-stone-400" icon="solar:paw-linear"></iconify-icon> Psi povoleni
                            </div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h2 className="text-2xl font-semibold tracking-tight text-stone-900">Virtuální prohlídka</h2>
<span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">Interaktivní</span>
</div>
<div className="relative w-full aspect-video bg-stone-200 rounded-3xl overflow-hidden group cursor-pointer border border-stone-200/50">

<img alt="Interiér 360" className="w-full h-full object-cover opacity-60 mix-blend-multiply" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-900/10 group-hover:bg-stone-900/20 transition-colors">
<div className="w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl text-stone-900" icon="solar:panorama-linear"></iconify-icon>
</div>
<span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-stone-900 shadow-sm">
                                    Vstoupit do objektu
                                </span>
</div>
</div>
</div>

<div className="pt-8 border-t border-stone-200">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold tracking-tight text-stone-900">Co je poblíž</h2>

<div className="flex items-center gap-2 text-xs font-medium text-stone-500">
<iconify-icon className="text-lg" icon="solar:route-linear"></iconify-icon> Prozkoumat okolí
                            </div>
</div>
<div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">

<div className="min-w-[200px] w-[200px] flex-shrink-0 group cursor-pointer">
<div className="h-32 rounded-2xl overflow-hidden mb-3 relative">
<img alt="Farma" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<h4 className="text-sm font-semibold text-stone-900 tracking-tight">Farma u horského potoka</h4>
<p className="text-xs text-stone-500 font-medium mt-1 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> 2.5 km daleko
                                </p>
</div>

<div className="min-w-[200px] w-[200px] flex-shrink-0 group cursor-pointer">
<div className="h-32 rounded-2xl overflow-hidden mb-3 relative">
<img alt="Restaurace" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-sm font-semibold text-stone-900 tracking-tight">Karczma pod lesem</h4>
<p className="text-xs text-stone-500 font-medium mt-1 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> 4 km daleko
                                </p>
</div>

<div className="min-w-[200px] w-[200px] flex-shrink-0 flex items-center justify-center border-2 border-dashed border-stone-200 rounded-2xl h-32 hover:border-emerald-300 hover:bg-emerald-50/50 transition-colors cursor-pointer">
<span className="text-xs font-medium text-stone-500 flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-stone-300" icon="solar:map-linear"></iconify-icon>
                                    Otevřít na mapě
                                </span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="sticky top-24 bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-xl shadow-stone-200/20">
<div className="mb-6">
<span className="text-2xl font-semibold tracking-tight text-stone-900">od 2500 Kč</span>
<span className="text-sm text-stone-500 font-medium"> / noc</span>
</div>
<form className="space-y-4">

<style>
                                .form-input {
                                    @apply w-full appearance-none bg-[#FAF9F6] border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder-stone-400 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all;
                                }
                            </style>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wider">Příjezd</label>
<div className="relative">
<input className="form-input pl-10" type="date"/>
<iconify-icon className="absolute left-3.5 top-3.5 text-stone-400 text-lg pointer-events-none" icon="solar:calendar-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wider">Odjezd</label>
<div className="relative">
<input className="form-input pl-10" type="date"/>
<iconify-icon className="absolute left-3.5 top-3.5 text-stone-400 text-lg pointer-events-none" icon="solar:calendar-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wider">Hosté</label>
<div className="relative">
<select className="form-input pl-10 cursor-pointer">
<option>1 host</option>
<option selected="">2 hosté</option>
<option>3 hosté</option>
<option>4 hosté</option>
<option>5 hosté</option>
<option>6 hostů</option>
</select>
<iconify-icon className="absolute left-3.5 top-3.5 text-stone-400 text-lg pointer-events-none" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
</div>
<div className="pt-2">
<label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wider">Váš e-mail</label>
<input className="form-input" placeholder="jan@novak.cz" type="email"/>
</div>
<button className="w-full bg-emerald-700 text-white rounded-xl py-3.5 text-sm font-semibold hover:bg-emerald-800 transition-colors shadow-sm flex items-center justify-center gap-2 mt-4" type="button">
<iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon>
                                Zkontrolovat dostupnost
                            </button>
</form>
<div className="mt-6 pt-6 border-t border-stone-100 text-center">
<p className="text-xs text-stone-500 font-medium mb-3">Preferujete rychlou zprávu? Majitel odpovídá rychle.</p>
<button className="w-full bg-[#25D366]/10 text-[#075E54] border border-[#25D366]/30 rounded-xl py-3 text-sm font-semibold hover:bg-[#25D366]/20 transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
                                Napsat majiteli
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-white relative overflow-hidden" id="majitele">

<div className="absolute inset-0 opacity-10 bg-map-pattern"></div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Chcete více hostů z Česka?</h2>
<p className="text-stone-400 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
                Spojujeme výjimečná polská místa s českými cestovateli prostřednictvím vizuálních zážitků. Žádné provize z rezervací, jen čistá prezentace.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-sm font-medium text-stone-300">
<span className="flex items-center gap-2 bg-stone-800/50 px-4 py-2 rounded-full border border-stone-700">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:videocamera-record-linear"></iconify-icon> Video prezentace
                </span>
<span className="flex items-center gap-2 bg-stone-800/50 px-4 py-2 rounded-full border border-stone-700">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:panorama-linear"></iconify-icon> Tvorba 360° prohlídek
                </span>
<span className="flex items-center gap-2 bg-stone-800/50 px-4 py-2 rounded-full border border-stone-700">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon> Přístup k české klientele
                </span>
</div>
<button className="bg-white text-stone-900 px-8 py-4 rounded-full text-base font-semibold hover:bg-stone-100 transition-colors shadow-lg shadow-white/10">
                Spolupracovat
            </button>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-emerald-700 text-xl" icon="solar:leaf-linear"></iconify-icon>
<span className="font-semibold tracking-tighter text-lg uppercase text-stone-900">Objev Polsko</span>
</div>
<p className="text-sm text-stone-500 font-medium max-w-sm leading-relaxed">
                        Inspirativní platforma pro objevování skrytých míst v Polsku. Nejsme rezervační portál, jsme váš vizuální průvodce.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-4 tracking-tight">Prozkoumat</h4>
<ul className="space-y-3 text-sm font-medium text-stone-500">
<li><a className="hover:text-emerald-700 transition-colors" href="#">Interaktivní mapa</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Ubytování</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Farmy &amp; Jídlo</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Zážitky</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-4 tracking-tight">Podpora</h4>
<ul className="space-y-3 text-sm font-medium text-stone-500">
<li><a className="hover:text-emerald-700 transition-colors" href="#">Pro majitele objektů</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Časté dotazy</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Kontakt</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Ochrana soukromí</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-stone-100 text-xs font-medium text-stone-400">
<p>© 2024 Objev Polsko. Všechna práva vyhrazena.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon></a>
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 group">
<div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-4 py-2 rounded-xl shadow-lg border border-stone-100 whitespace-nowrap pointer-events-none origin-bottom-right scale-95 group-hover:scale-100">
<p className="text-sm font-medium text-stone-800">Máte dotaz? Napište nám</p>
</div>
<button className="w-14 h-14 bg-emerald-700 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-emerald-800 hover:scale-105 transition-all">
<iconify-icon className="text-2xl" icon="solar:chat-dots-linear"></iconify-icon>
</button>
</div>

    </>
  );
}
