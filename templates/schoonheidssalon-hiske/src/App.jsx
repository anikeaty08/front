import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
800: '#292524',
900: '#1c1917',
},
rose: {
50: '#fff1f2',
100: '#ffe4e6',
200: '#fecdd3',
900: '#881337',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-md bg-stone-50/80 border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0">
<a className="serif text-2xl font-medium tracking-tight text-stone-900 hover:text-stone-600 transition-colors" href="#">
                        HISKE
                    </a>
</div>

<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#behandelingen">Behandelingen</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#over">Over Mij</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#producten">Producten</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#contact">Contact</a>
</div>
</div>

<div className="hidden md:block">
<a className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white transition-all duration-200 bg-stone-900 rounded-full hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900" href="#afspraak">
<span>Maak Afspraak</span>
<iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" height="16" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="-mr-2 flex md:hidden">
<button className="inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-stone-900 focus:outline-none" type="button">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="animate-fade-in">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-900 mb-6">
                        Schoonheidssalon in Groningen
                    </span>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-stone-900 leading-[1.1] mb-6">
                        Ontdek je <br/> <span className="italic text-stone-500">natuurlijke</span> schoonheid.
                    </h1>
<p className="text-lg text-stone-600 mb-8 max-w-md leading-relaxed">
                        Ervaar rust, persoonlijke aandacht en huidverbetering in een ontspannen sfeer. Uw moment voor uzelf begint hier.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-colors shadow-sm hover:shadow-md" href="#behandelingen">
                            Bekijk Behandelingen
                        </a>
<a className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-stone-700 bg-white border border-stone-200 rounded-full hover:bg-stone-50 transition-colors" href="#contact">
                            Contact Opnemen
                        </a>
</div>
<div className="mt-12 flex items-center gap-6 text-stone-500 text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-900" icon="lucide:check-circle" width="16"></iconify-icon>
<span>Gediplomeerd</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-900" icon="lucide:check-circle" width="16"></iconify-icon>
<span>Natuurlijke producten</span>
</div>
</div>
</div>
<div className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in" style={{animationDelay: '0.2s'}}>

<div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply z-10"></div>
<img alt="Relaxed woman skincare" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg z-20 border border-stone-100">
<div className="flex items-start gap-4">
<div className="p-3 bg-rose-50 rounded-full text-rose-900">
<iconify-icon height="20" icon="lucide:sparkles" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-serif text-lg font-medium text-stone-900">Huidverbetering</h3>
<p className="text-sm text-stone-500 mt-1">Specialistische behandelingen met focus op resultaat en ontspanning.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-stone-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
</section>

<section className="py-12 border-y border-stone-200 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<p className="text-center text-xs font-medium text-stone-400 uppercase tracking-widest mb-8">Wij werken met topmerken</p>
<div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center space-x-2 group">
<span className="text-xl font-semibold tracking-tight text-stone-800">CENT PUR CENT</span>
</div>
<div className="flex items-center space-x-2 group">
<span className="text-xl font-light tracking-wider text-stone-800 uppercase">Kalahari</span>
</div>
<div className="flex items-center space-x-2 group">
<span className="text-xl font-bold tracking-tight text-stone-800 italic">PUURR</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="over">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium text-stone-900 mb-6">Welkom bij Hiske</h2>
<div className="w-16 h-px bg-stone-300 mx-auto mb-6"></div>
<p className="text-lg text-stone-600 leading-relaxed font-light">
                    In mijn salon staat persoonlijke aandacht en kwaliteit centraal. Ik geloof dat ware schoonheid van binnenuit komt, maar een handje geholpen mag worden met de juiste verzorging. Samen kijken we naar wat jouw huid nodig heeft.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-900 mb-6">
<iconify-icon icon="lucide:heart-handshake" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3">Persoonlijk</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                        Geen standaard behandeling, maar een aanpak die is afgestemd op jouw wensen en huidconditie.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-900 mb-6">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3">Natuurlijk</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                        Gebruik van hoogwaardige, natuurlijke producten die de huid voeden, beschermen en verbeteren.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-900 mb-6">
<iconify-icon icon="lucide:armchair" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3">Ontspanning</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                        Even weg uit de drukte van alledag. De salon is een oase van rust waar je volledig kunt ontspannen.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="behandelingen">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-xs font-semibold text-rose-900 uppercase tracking-wider mb-2 block">Aanbod</span>
<h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-stone-900">Onze Behandelingen</h2>
</div>
<a className="group text-sm font-medium text-stone-600 hover:text-stone-900 flex items-center gap-1 pb-1 border-b border-transparent hover:border-stone-900 transition-all" href="#">
                    Volledige prijslijst bekijken
                    <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-stone-50 rounded-2xl p-8 hover:bg-stone-100 transition-colors duration-300 cursor-pointer overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon height="64" icon="lucide:sparkles" width="64"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="font-serif text-2xl text-stone-900 mb-2">Gezichtsbehandelingen</h3>
<p className="text-sm text-stone-500 mb-6 line-clamp-3">
                            Van reinigende basisbehandelingen tot uitgebreide anti-aging kuren. Wij analyseren uw huid en passen de behandeling daarop aan.
                        </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center text-sm text-stone-600">
<iconify-icon className="mr-2 text-stone-400" icon="lucide:check" width="14"></iconify-icon>
                                Dieptereiniging
                            </li>
<li className="flex items-center text-sm text-stone-600">
<iconify-icon className="mr-2 text-stone-400" icon="lucide:check" width="14"></iconify-icon>
                                Huidverbetering
                            </li>
<li className="flex items-center text-sm text-stone-600">
<iconify-icon className="mr-2 text-stone-400" icon="lucide:check" width="14"></iconify-icon>
                                Bindweefselmassage
                            </li>
</ul>
<span className="inline-flex items-center text-sm font-medium text-stone-900 group-hover:underline">
                            Lees meer
                            <iconify-icon className="ml-2" icon="lucide:arrow-right" width="14"></iconify-icon>
</span>
</div>
</div>

<div className="group relative bg-stone-50 rounded-2xl p-8 hover:bg-stone-100 transition-colors duration-300 cursor-pointer overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon height="64" icon="lucide:footprints" width="64"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="font-serif text-2xl text-stone-900 mb-2">Pedicure</h3>
<p className="text-sm text-stone-500 mb-6 line-clamp-3">
                            Professionele voetverzorging voor gezonde en verzorgde voeten. Behandeling van nagels, eelt en specifieke voetklachten.
                        </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center text-sm text-stone-600">
<iconify-icon className="mr-2 text-stone-400" icon="lucide:check" width="14"></iconify-icon>
                                Basis pedicure
                            </li>
<li className="flex items-center text-sm text-stone-600">
<iconify-icon className="mr-2 text-stone-400" icon="lucide:check" width="14"></iconify-icon>
                                Gellak
                            </li>
<li className="flex items-center text-sm text-stone-600">
<iconify-icon className="mr-2 text-stone-400" icon="lucide:check" width="14"></iconify-icon>
                                Voetmassage
                            </li>
</ul>
<span className="inline-flex items-center text-sm font-medium text-stone-900 group-hover:underline">
                            Lees meer
                            <iconify-icon className="ml-2" icon="lucide:arrow-right" width="14"></iconify-icon>
</span>
</div>
</div>

<div className="group relative bg-stone-50 rounded-2xl p-8 hover:bg-stone-100 transition-colors duration-300 cursor-pointer overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon height="64" icon="lucide:eye" width="64"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="font-serif text-2xl text-stone-900 mb-2">Wenkbrauwen &amp; Wimpers</h3>
<p className="text-sm text-stone-500 mb-6 line-clamp-3">
                            Accentueer uw oogopslag. Verven, epileren en stylen van wenkbrauwen en wimpers voor een sprekende blik.
                        </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center text-sm text-stone-600">
<iconify-icon className="mr-2 text-stone-400" icon="lucide:check" width="14"></iconify-icon>
                                Epileren &amp; Harsen
                            </li>
<li className="flex items-center text-sm text-stone-600">
<iconify-icon className="mr-2 text-stone-400" icon="lucide:check" width="14"></iconify-icon>
                                Verven
                            </li>
<li className="flex items-center text-sm text-stone-600">
<iconify-icon className="mr-2 text-stone-400" icon="lucide:check" width="14"></iconify-icon>
                                Henna Brows
                            </li>
</ul>
<span className="inline-flex items-center text-sm font-medium text-stone-900 group-hover:underline">
                            Lees meer
                            <iconify-icon className="ml-2" icon="lucide:arrow-right" width="14"></iconify-icon>
</span>
</div>
</div>

<div className="group relative bg-stone-50 rounded-2xl p-8 hover:bg-stone-100 transition-colors duration-300 cursor-pointer overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon height="64" icon="lucide:droplet" width="64"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="font-serif text-2xl text-stone-900 mb-2">Harsen</h3>
<p className="text-sm text-stone-500 mb-6 line-clamp-3">
                            Effectieve ontharing voor een gladde en zachte huid. Wij gebruiken zachte wax die geschikt is voor de gevoelige huid.
                        </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center text-sm text-stone-600">
<iconify-icon className="mr-2 text-stone-400" icon="lucide:check" width="14"></iconify-icon>
                                Gezicht
                            </li>
<li className="flex items-center text-sm text-stone-600">
<iconify-icon className="mr-2 text-stone-400" icon="lucide:check" width="14"></iconify-icon>
                                Benen &amp; Armen
                            </li>
<li className="flex items-center text-sm text-stone-600">
<iconify-icon className="mr-2 text-stone-400" icon="lucide:check" width="14"></iconify-icon>
                                Oksels &amp; Bikinilijn
                            </li>
</ul>
<span className="inline-flex items-center text-sm font-medium text-stone-900 group-hover:underline">
                            Lees meer
                            <iconify-icon className="ml-2" icon="lucide:arrow-right" width="14"></iconify-icon>
</span>
</div>
</div>

<div className="group relative bg-stone-50 rounded-2xl p-8 hover:bg-stone-100 transition-colors duration-300 cursor-pointer overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon height="64" icon="lucide:sun" width="64"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="font-serif text-2xl text-stone-900 mb-2">Massages</h3>
<p className="text-sm text-stone-500 mb-6 line-clamp-3">
                            Kom volledig tot rust met onze ontspannende massages. Bevordert de doorbloeding en vermindert stress.
                        </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center text-sm text-stone-600">
<iconify-icon className="mr-2 text-stone-400" icon="lucide:check" width="14"></iconify-icon>
                                Ontspanningsmassage
                            </li>
<li className="flex items-center text-sm text-stone-600">
<iconify-icon className="mr-2 text-stone-400" icon="lucide:check" width="14"></iconify-icon>
                                Rug, Nek &amp; Schouders
                            </li>
<li className="flex items-center text-sm text-stone-600">
<iconify-icon className="mr-2 text-stone-400" icon="lucide:check" width="14"></iconify-icon>
                                Hotstone
                            </li>
</ul>
<span className="inline-flex items-center text-sm font-medium text-stone-900 group-hover:underline">
                            Lees meer
                            <iconify-icon className="ml-2" icon="lucide:arrow-right" width="14"></iconify-icon>
</span>
</div>
</div>

<div className="group relative bg-stone-900 rounded-2xl p-8 flex flex-col justify-center items-center text-center overflow-hidden">
<div className="absolute inset-0 bg-stone-800/50"></div>
<div className="relative z-10">
<h3 className="font-serif text-2xl text-white mb-2">Speciale Wensen?</h3>
<p className="text-sm text-stone-300 mb-8 max-w-xs mx-auto">
                            Neem contact op voor een behandeling op maat of advies over onze producten.
                        </p>
<a className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-stone-900 bg-white rounded-full hover:bg-stone-100 transition-all" href="#contact">
                            Neem Contact Op
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-white overflow-hidden relative">
<div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
<iconify-icon className="text-stone-600 mb-8 mx-auto" icon="lucide:quote" width="48"></iconify-icon>
<blockquote className="font-serif text-3xl md:text-4xl leading-snug mb-8 text-stone-100">
                "Een oase van rust in Groningen. Hiske neemt alle tijd voor je en de behandeling was precies wat mijn huid nodig had."
            </blockquote>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center text-sm font-medium text-white">
                    AS
                </div>
<div className="text-left">
<div className="text-sm font-medium text-white">Anne Sophie</div>
<div className="text-xs text-stone-400">Vaste klant</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-8">Contact &amp; Afspraak</h2>
<p className="text-stone-600 mb-10 text-sm leading-relaxed max-w-md">
                        Heeft u vragen over een behandeling of wilt u een afspraak maken? U kunt mij bellen, appen of het contactformulier invullen. Tijdens behandelingen neem ik de telefoon niet op, spreek dan gerust een bericht in.
                    </p>
<div className="space-y-6">
<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-900">
<iconify-icon icon="lucide:map-pin" width="18"></iconify-icon>
</div>
</div>
<div className="ml-4">
<h3 className="text-sm font-medium text-stone-900">Locatie</h3>
<p className="text-sm text-stone-500 mt-1">
                                    Verlengde Hereweg 123<br/>
                                    9721 AJ Groningen
                                </p>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-900">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
</div>
</div>
<div className="ml-4">
<h3 className="text-sm font-medium text-stone-900">Telefoon</h3>
<p className="text-sm text-stone-500 mt-1">
<a className="hover:underline" href="tel:0612345678">06 1234 5678</a>
</p>
<p className="text-xs text-stone-400 mt-0.5">Ook bereikbaar via WhatsApp</p>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-900">
<iconify-icon icon="lucide:clock" width="18"></iconify-icon>
</div>
</div>
<div className="ml-4">
<h3 className="text-sm font-medium text-stone-900">Openingstijden</h3>
<div className="grid grid-cols-2 gap-x-8 gap-y-1 mt-1 text-sm text-stone-500 w-full max-w-xs">
<span>Maandag:</span> <span className="text-right">Gesloten</span>
<span>Dinsdag:</span> <span className="text-right">09:00 - 17:30</span>
<span>Woensdag:</span> <span className="text-right">09:00 - 17:30</span>
<span>Donderdag:</span> <span className="text-right">09:00 - 21:00</span>
<span>Vrijdag:</span> <span className="text-right">09:00 - 17:30</span>
<span>Zaterdag:</span> <span className="text-right">09:00 - 13:00</span>
<span>Zondag:</span> <span className="text-right">Gesloten</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200">
<form action="#" className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-stone-700 mb-1" htmlFor="first-name">Voornaam</label>
<input className="block w-full rounded-lg border-stone-200 bg-stone-50 px-4 py-2.5 text-sm focus:border-stone-900 focus:ring-stone-900 focus:outline-none transition-colors" id="first-name" placeholder="Jouw voornaam" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-700 mb-1" htmlFor="last-name">Achternaam</label>
<input className="block w-full rounded-lg border-stone-200 bg-stone-50 px-4 py-2.5 text-sm focus:border-stone-900 focus:ring-stone-900 focus:outline-none transition-colors" id="last-name" placeholder="Jouw achternaam" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-stone-700 mb-1" htmlFor="email">Email</label>
<input className="block w-full rounded-lg border-stone-200 bg-stone-50 px-4 py-2.5 text-sm focus:border-stone-900 focus:ring-stone-900 focus:outline-none transition-colors" id="email" placeholder="jouw@email.nl" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-700 mb-1" htmlFor="treatment">Behandeling</label>
<div className="relative">
<select className="appearance-none block w-full rounded-lg border-stone-200 bg-stone-50 px-4 py-2.5 text-sm focus:border-stone-900 focus:ring-stone-900 focus:outline-none transition-colors cursor-pointer text-stone-600" id="treatment">
<option>Kies een behandeling...</option>
<option>Gezichtsbehandeling (Basis)</option>
<option>Gezichtsbehandeling (Luxe)</option>
<option>Pedicure</option>
<option>Massage</option>
<option>Anders</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-500">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-stone-700 mb-1" htmlFor="message">Bericht</label>
<textarea className="block w-full rounded-lg border-stone-200 bg-stone-50 px-4 py-2.5 text-sm focus:border-stone-900 focus:ring-stone-900 focus:outline-none transition-colors" id="message" placeholder="Opmerkingen of voorkeursdatum..." rows="4"></textarea>
</div>

<div className="flex items-center">
<label className="flex items-center cursor-pointer relative">
<input className="peer h-4 w-4 opacity-0 absolute" type="checkbox"/>
<div className="w-4 h-4 bg-stone-50 border border-stone-300 rounded flex items-center justify-center peer-checked:bg-stone-900 peer-checked:border-stone-900 transition-all">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="ml-2 text-xs text-stone-500">Ik ga akkoord met de privacyvoorwaarden</span>
</label>
</div>
<button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 transition-colors" type="button">
                            Verstuur Bericht
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<span className="serif text-xl font-bold tracking-tight text-stone-900">HISKE</span>
<p className="mt-4 text-xs text-stone-500 leading-relaxed max-w-xs">
                        Professionele schoonheidssalon in Groningen voor huidverbetering, ontspanning en persoonlijke aandacht.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-4">Behandelingen</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Gezicht</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Pedicure</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Massage</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Harsen</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-4">Salon</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Over Hiske</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Producten</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Cadeaubonnen</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Nieuws</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-4">Volg Ons</h4>
<div className="flex space-x-4">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="20"></iconify-icon>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">© 2023 Schoonheidssalon Hiske. Alle rechten voorbehouden.</p>
<div className="flex space-x-6 text-xs text-stone-400">
<a className="hover:text-stone-600" href="#">Privacy</a>
<a className="hover:text-stone-600" href="#">Voorwaarden</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
