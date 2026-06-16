import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f2fcf5',
100: '#e1f8e8',
500: '#22c55e', // Green for sustainability
600: '#16a34a',
900: '#14532d',
},
metal: {
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
700: '#334155',
800: '#1e293b',
900: '#0f172a',
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-metal-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-metal-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon height="20" icon="lucide:recycle" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-metal-900 group-hover:opacity-80 transition-opacity">
                    WILLEMSEM<span className="text-metal-400 font-normal">RECYCLING</span>
</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-metal-600">
<a className="hover:text-metal-900 transition-colors" href="#services">Diensten</a>
<a className="hover:text-metal-900 transition-colors" href="#prices">Dagprijzen</a>
<a className="hover:text-metal-900 transition-colors" href="#process">Werkwijze</a>
<a className="hover:text-metal-900 transition-colors" href="#contact">Zakelijk</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-metal-600 hover:text-metal-900" href="tel:+31612345678">
<iconify-icon icon="lucide:phone" width="16"></iconify-icon>
<span>06 1234 5678</span>
</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-metal-900 rounded-lg shadow-sm hover:bg-metal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-metal-900 transition-all" href="#contact">
                    Container Aanvragen
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grain pointer-events-none z-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-brand-50/50 to-transparent rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-metal-50 border border-metal-200 text-xs font-medium text-metal-600 mb-8 animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                Hoge dagprijzen voor uw metalen
            </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-metal-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                Slimme recycling voor een <span className="text-metal-400">duurzame toekomst.</span>
</h1>
<p className="text-lg text-metal-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Willemsem Recycling is uw partner in metaalverwerking. Wij bieden de scherpste prijzen voor oud ijzer, koper en aluminium met een snelle, transparante afhandeling voor zowel bedrijven als particulieren.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-metal-900 rounded-lg hover:bg-metal-800 transition-all shadow-lg shadow-metal-900/10" href="#contact">
                    Direct prijs opvragen
                    <iconify-icon className="ml-2" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-metal-700 bg-white border border-metal-200 rounded-lg hover:bg-metal-50 transition-all" href="#services">
                    Bekijk onze diensten
                </a>
</div>

<div className="mt-16 pt-8 border-t border-metal-100 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-60">

<span className="text-lg font-semibold tracking-tighter flex items-center gap-1"><iconify-icon icon="lucide:shield-check"></iconify-icon> VIHB Geregistreerd</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-1"><iconify-icon icon="lucide:leaf"></iconify-icon> 100% Circulair</span>
<span className="text-lg font-semibold tracking-tighter flex items-center gap-1"><iconify-icon icon="lucide:scale"></iconify-icon> Geijkte Weegsystemen</span>
</div>
</div>
</header>

<div className="bg-metal-900 text-metal-300 py-3 overflow-hidden border-y border-metal-800" id="prices">
<div className="flex whitespace-nowrap animate-marquee gap-12 text-sm font-medium">
<span className="flex items-center gap-2"><span className="text-white">Koper Handgepeld</span> € 7,20/kg <span className="text-brand-500 text-xs">▲ +2%</span></span>
<span className="flex items-center gap-2"><span className="text-white">Oud Ijzer</span> € 0,25/kg <span className="text-metal-500 text-xs">▬ 0%</span></span>
<span className="flex items-center gap-2"><span className="text-white">Aluminium</span> € 1,10/kg <span className="text-brand-500 text-xs">▲ +1.5%</span></span>
<span className="flex items-center gap-2"><span className="text-white">Messing</span> € 4,40/kg <span className="text-red-500 text-xs">▼ -0.5%</span></span>
<span className="flex items-center gap-2"><span className="text-white">RVS 304</span> € 1,30/kg <span className="text-brand-500 text-xs">▲ +0.8%</span></span>
<span className="flex items-center gap-2"><span className="text-white">Lood</span> € 1,65/kg <span className="text-metal-500 text-xs">▬ 0%</span></span>
<span className="flex items-center gap-2"><span className="text-white">Zink</span> € 1,80/kg <span className="text-brand-500 text-xs">▲ +1%</span></span>

<span className="flex items-center gap-2"><span className="text-white">Koper Handgepeld</span> € 7,20/kg <span className="text-brand-500 text-xs">▲ +2%</span></span>
<span className="flex items-center gap-2"><span className="text-white">Oud Ijzer</span> € 0,25/kg <span className="text-metal-500 text-xs">▬ 0%</span></span>
<span className="flex items-center gap-2"><span className="text-white">Aluminium</span> € 1,10/kg <span className="text-brand-500 text-xs">▲ +1.5%</span></span>
</div>
</div>

<section className="py-24 bg-metal-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-metal-900 mb-4">Onze Diensten</h2>
<p className="text-metal-500 max-w-xl">Van containerverhuur tot complexe sloopwerken. Wij zorgen voor een verantwoorde afvoer en verwerking van uw metalen.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 bg-white rounded-2xl border border-metal-200 shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 bg-metal-50 rounded-lg flex items-center justify-center text-metal-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:truck" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-metal-900 mb-2">Container Service</h3>
<p className="text-sm text-metal-500 leading-relaxed mb-4">
                        Gratis plaatsing van containers voor metaalafval. Beschikbaar in diverse maten van 2m³ tot 40m³. Ideaal voor bedrijven en projecten.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-metal-600 font-medium">
<iconify-icon className="text-brand-600" icon="lucide:check"></iconify-icon> Binnen 24 uur geplaatst
                        </li>
<li className="flex items-center gap-2 text-xs text-metal-600 font-medium">
<iconify-icon className="text-brand-600" icon="lucide:check"></iconify-icon> Gratis ophalen
                        </li>
</ul>
</div>

<div className="group relative p-8 bg-white rounded-2xl border border-metal-200 shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 bg-metal-50 rounded-lg flex items-center justify-center text-metal-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:coins" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-metal-900 mb-2">Inkoop Metalen</h3>
<p className="text-sm text-metal-500 leading-relaxed mb-4">
                        Wij kopen alle soorten ferro en non-ferro metalen tegen actuele LME-koersen. Directe uitbetaling per bank of contant mogelijk.
                    </p>
<div className="flex gap-2 flex-wrap mb-4">
<span className="px-2 py-1 bg-metal-50 border border-metal-100 rounded text-xs text-metal-600">Koper</span>
<span className="px-2 py-1 bg-metal-50 border border-metal-100 rounded text-xs text-metal-600">Aluminium</span>
<span className="px-2 py-1 bg-metal-50 border border-metal-100 rounded text-xs text-metal-600">Zink</span>
<span className="px-2 py-1 bg-metal-50 border border-metal-100 rounded text-xs text-metal-600">RVS</span>
</div>
</div>

<div className="group relative p-8 bg-white rounded-2xl border border-metal-200 shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 bg-metal-50 rounded-lg flex items-center justify-center text-metal-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:hammer" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-metal-900 mb-2">Sloopwerken</h3>
<p className="text-sm text-metal-500 leading-relaxed mb-4">
                        Professionele demontage van staalconstructies, machines en installaties. Wij werken veilig en leveren de locatie bezemschoon op.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-metal-600 font-medium">
<iconify-icon className="text-brand-600" icon="lucide:check"></iconify-icon> VCA gecertificeerd
                        </li>
<li className="flex items-center gap-2 text-xs text-metal-600 font-medium">
<iconify-icon className="text-brand-600" icon="lucide:check"></iconify-icon> Eigen kranen &amp; transport
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-metal-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">

<div className="md:col-span-2 lg:col-span-2 row-span-2 bg-metal-900 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-metal-800 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 group-hover:opacity-75 transition-opacity"></div>
<div className="relative z-10">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Zakelijke Dienstverlening</h3>
<p className="text-metal-400 text-sm max-w-sm">Voor productiebedrijven, aannemers en installateurs bieden wij op maat gemaakte oplossingen voor afvalstromen.</p>
</div>
<div className="relative z-10 mt-auto">
<a className="text-white text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all" href="#contact">
                            Maak een afspraak <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>

<div className="bg-metal-50 rounded-2xl p-6 border border-metal-100 flex flex-col justify-center items-center text-center">
<iconify-icon className="text-metal-900 mb-3" icon="lucide:scale" width="32"></iconify-icon>
<h4 className="font-semibold text-metal-900 mb-1">Eerlijk Wegen</h4>
<p className="text-xs text-metal-500">Geijkte weegbruggen tot 60 ton.</p>
</div>

<div className="bg-brand-50 rounded-2xl p-6 border border-brand-100 flex flex-col justify-center items-center text-center">
<iconify-icon className="text-brand-600 mb-3" icon="lucide:leaf" width="32"></iconify-icon>
<h4 className="font-semibold text-metal-900 mb-1">Duurzaam</h4>
<p className="text-xs text-metal-500">100% recycling percentage.</p>
</div>

<div className="md:col-span-2 bg-white border border-metal-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h4 className="text-lg font-semibold text-metal-900 mb-2">Particulier inleveren?</h4>
<p className="text-sm text-metal-500">U bent welkom op onze werf van maandag t/m zaterdag. Geen afspraak nodig.</p>
</div>
<div className="shrink-0 text-right">
<div className="text-2xl font-semibold text-metal-900 tracking-tight">08:00 - 17:30</div>
<div className="text-xs text-metal-400 font-medium uppercase tracking-wider">Openingstijden</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-metal-50 border-y border-metal-200" id="process">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-metal-900 mb-16 text-center">Zo werkt het</h2>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-metal-200 -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative bg-metal-50 md:bg-transparent">
<div className="w-24 h-24 bg-white border border-metal-200 rounded-2xl flex items-center justify-center text-metal-900 shadow-sm mx-auto mb-6 z-10">
<span className="text-xl font-bold">1</span>
</div>
<h3 className="text-center font-semibold text-metal-900 mb-2">Contact</h3>
<p className="text-center text-sm text-metal-500 px-4">Bel ons of vul het formulier in voor een prijsopgave.</p>
</div>

<div className="relative bg-metal-50 md:bg-transparent">
<div className="w-24 h-24 bg-white border border-metal-200 rounded-2xl flex items-center justify-center text-metal-900 shadow-sm mx-auto mb-6 z-10">
<span className="text-xl font-bold">2</span>
</div>
<h3 className="text-center font-semibold text-metal-900 mb-2">Levering / Ophaal</h3>
<p className="text-center text-sm text-metal-500 px-4">Breng het zelf of wij plaatsen een container op locatie.</p>
</div>

<div className="relative bg-metal-50 md:bg-transparent">
<div className="w-24 h-24 bg-white border border-metal-200 rounded-2xl flex items-center justify-center text-metal-900 shadow-sm mx-auto mb-6 z-10">
<span className="text-xl font-bold">3</span>
</div>
<h3 className="text-center font-semibold text-metal-900 mb-2">Wegen &amp; Keuren</h3>
<p className="text-center text-sm text-metal-500 px-4">We wegen uw materiaal transparant en bepalen de kwaliteit.</p>
</div>

<div className="relative bg-metal-50 md:bg-transparent">
<div className="w-24 h-24 bg-brand-50 border border-brand-200 rounded-2xl flex items-center justify-center text-brand-600 shadow-sm mx-auto mb-6 z-10">
<iconify-icon icon="lucide:check" width="32"></iconify-icon>
</div>
<h3 className="text-center font-semibold text-metal-900 mb-2">Direct Betaald</h3>
<p className="text-center text-sm text-metal-500 px-4">Ontvang direct uw vergoeding contant of op uw rekening.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-metal-900 mb-4">Neem contact op</h2>
<p className="text-metal-500">Heeft u vragen over prijzen, of wilt u een container laten plaatsen?</p>
</div>
<div className="bg-white rounded-2xl border border-metal-200 p-8 shadow-xl shadow-metal-200/50">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-metal-500" htmlFor="name">Naam</label>
<input className="w-full px-4 py-3 rounded-lg bg-metal-50 border border-metal-200 text-metal-900 focus:outline-none focus:ring-2 focus:ring-metal-900 focus:border-transparent transition-all placeholder:text-metal-400" id="name" placeholder="Uw naam of bedrijfsnaam" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-metal-500" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-lg bg-metal-50 border border-metal-200 text-metal-900 focus:outline-none focus:ring-2 focus:ring-metal-900 focus:border-transparent transition-all placeholder:text-metal-400" id="email" placeholder="naam@bedrijf.nl" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-metal-500" htmlFor="type">Soort Materiaal</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg bg-metal-50 border border-metal-200 text-metal-900 focus:outline-none focus:ring-2 focus:ring-metal-900 focus:border-transparent transition-all appearance-none" id="type">
<option>Gemengd metaal</option>
<option>Koper / Kabels</option>
<option>Aluminium</option>
<option>Oud Ijzer</option>
<option>Container aanvraag</option>
<option>Overig</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-metal-500">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-metal-500" htmlFor="message">Bericht</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-metal-50 border border-metal-200 text-metal-900 focus:outline-none focus:ring-2 focus:ring-metal-900 focus:border-transparent transition-all placeholder:text-metal-400 resize-none" id="message" placeholder="Omschrijf uw aanvraag..." rows="4"></textarea>
</div>
<button className="w-full py-4 px-6 bg-metal-900 text-white font-medium rounded-lg hover:bg-metal-800 focus:ring-4 focus:ring-metal-200 transition-all flex items-center justify-center gap-2" type="button">
                        Verstuur Bericht
                        <iconify-icon icon="lucide:send" width="16"></iconify-icon>
</button>
</form>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div>
<div className="w-10 h-10 bg-metal-100 rounded-full flex items-center justify-center mx-auto mb-3 text-metal-900">
<iconify-icon icon="lucide:map-pin" width="18"></iconify-icon>
</div>
<p className="text-sm font-medium text-metal-900">Industrieweg 42</p>
<p className="text-xs text-metal-500">3000 AA, Rotterdam</p>
</div>
<div>
<div className="w-10 h-10 bg-metal-100 rounded-full flex items-center justify-center mx-auto mb-3 text-metal-900">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
</div>
<p className="text-sm font-medium text-metal-900">06 1234 5678</p>
<p className="text-xs text-metal-500">Ma-Za: 08:00 - 18:00</p>
</div>
<div>
<div className="w-10 h-10 bg-metal-100 rounded-full flex items-center justify-center mx-auto mb-3 text-metal-900">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</div>
<p className="text-sm font-medium text-metal-900">info@willemsem.nl</p>
<p className="text-xs text-metal-500">Binnen 2 uur reactie</p>
</div>
</div>
</div>
</section>

<footer className="bg-metal-900 py-12 border-t border-metal-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center text-metal-900">
<iconify-icon icon="lucide:recycle" width="14"></iconify-icon>
</div>
<span className="text-white font-semibold text-sm tracking-tight">WILLEMSEM</span>
</div>
<div className="text-metal-500 text-xs text-center md:text-right">
<p>© 2023 Willemsem Recycling B.V. Alle rechten voorbehouden.</p>
<div className="flex gap-4 justify-center md:justify-end mt-2">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Voorwaarden</a>
</div>
</div>
</div>
</footer>
<style>
        /* Marquee Animation for Prices */
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 30s linear infinite;
        }
    </style>

    </>
  );
}
