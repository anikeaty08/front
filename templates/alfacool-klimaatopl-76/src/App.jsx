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



tailwind.config = {
theme: {
extend: {
colors: {
alfa: {
50: '#ecfdf5',
100: '#d1fae5',
500: '#10b981', // Emerald 500
600: '#059669', // Emerald 600
900: '#064e3b', // Emerald 900
}
},
boxShadow: {
'glow': '0 0 20px rgba(16, 185, 129, 0.5)',
}
}
}
}



        // Flashlight Effect Script
        document.querySelectorAll('.flashlight-card').forEach(card => {
            card.onmousemove = e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        });
    
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
      

<div className="bg-slate-900 text-white py-3 text-lg font-light tracking-wide relative z-50">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-6">
<span className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> 053 89 51 25</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> info@alfacool.be</span>
</div>
<div className="flex gap-4 text-sm font-medium">
<span className="bg-alfa-500 text-white px-2 py-0.5 rounded">NL</span>
<span className="opacity-50 hover:opacity-100 cursor-pointer">FR</span>
<span className="opacity-50 hover:opacity-100 cursor-pointer">EN</span>
</div>
</div>
</div>

<nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-3xl font-semibold tracking-tight text-slate-900 flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-alfa-500 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:snowflake-linear" width="20"></iconify-icon>
</div>
                Alfacool
            </a>
<div className="hidden lg:flex items-center gap-10 text-lg font-medium text-slate-600">
<a className="hover:text-alfa-600 transition-colors" href="#">Home</a>
<a className="hover:text-alfa-600 transition-colors" href="#">Diensten</a>
<a className="hover:text-alfa-600 transition-colors" href="#">Projecten</a>
<a className="hover:text-alfa-600 transition-colors" href="#">Over Ons</a>
<a className="hover:text-alfa-600 transition-colors" href="#">Contact</a>
</div>
<button className="relative group overflow-hidden rounded-full bg-slate-900 px-6 py-2.5 text-white transition-all hover:bg-slate-800 hover:scale-105 active:scale-95 shadow-lg shadow-alfa-500/20">
<span className="relative z-10 flex items-center gap-2 font-medium text-lg">
                    Gratis Offerte
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</span>
<div className="border-beam"></div>
</button>
</div>
</nav>

<section className="relative pt-32 pb-40 overflow-hidden bg-white">

<div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(#064e3b 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-alfa-50 border border-alfa-100 text-alfa-600 text-base font-medium mb-8">
<iconify-icon icon="solar:verified-check-linear"></iconify-icon>
                    Gecertificeerd Installateur
                </div>
<h1 className="text-6xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-8">
                    Airconditioning <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-alfa-500 to-teal-400">voor kantoor</span>
                    en thuis.
                </h1>
<p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg">
                    Professionele installatie en onderhoud van verwarmings-, koelings- en ventilatiesystemen in Aalst en omgeving. Uw partner voor optimaal comfort.
                </p>
<div className="flex flex-wrap gap-4">
<button className="bg-alfa-500 hover:bg-alfa-600 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all shadow-xl shadow-alfa-500/30 flex items-center gap-2">
                        Gratis Offerte
                        <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
<button className="bg-white border border-gray-200 hover:border-gray-300 text-slate-700 px-8 py-4 rounded-xl font-medium text-lg transition-all flex items-center gap-2">
                        Vrijblijvend Advies
                    </button>
</div>
</div>
<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-r from-alfa-100 to-blue-50 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
<img alt="Modern Interior AC" className="relative rounded-[2rem] shadow-2xl border border-gray-100 w-full object-cover h-[600px] transform transition duration-700 hover:scale-[1.01]" src="https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>

<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur border border-white/50 p-6 rounded-2xl shadow-xl max-w-xs animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-gray-500 font-medium">Energiebesparing</p>
<p className="text-xl font-semibold text-slate-900">Tot 40%</p>
</div>
</div>
</div>
</div>
</div>

<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 text-gray-200 -z-10" fill="none" height="800" viewbox="0 0 1000 800" width="1000">
<path d="M-100 600 C 200 600, 300 200, 1100 200" stroke="currentColor" stroke-dasharray="8 8" strokeWidth="2"></path>
</svg>
</section>

<section className="py-32 bg-gray-50 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Onze Diensten</h2>
<p className="text-xl text-slate-500">Compleet beheer van uw binnenklimaat, van installatie tot onderhoud.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 group/grid">

<div className="flashlight-card group relative rounded-3xl bg-white border border-gray-200 p-8 hover:border-gray-300 transition-colors overflow-hidden">
<div className="flashlight-bg absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(16, 185, 129, 0.06), transparent 40%)'}}></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-alfa-50 rounded-xl flex items-center justify-center text-alfa-600 mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:snowflake-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">Airconditioning</h3>
<p className="text-lg text-slate-500 mb-8">Energiezuinige koeling voor woningen en bedrijfspanden. Fluisterstil en efficiënt.</p>
<a className="text-alfa-600 font-medium flex items-center gap-2 group-hover:gap-4 transition-all" href="#">Meer info <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="flashlight-card group relative rounded-3xl bg-white border border-gray-200 p-8 hover:border-gray-300 transition-colors overflow-hidden">
<div className="flashlight-bg absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(16, 185, 129, 0.06), transparent 40%)'}}></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:fire-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">Warmtepompen</h3>
<p className="text-lg text-slate-500 mb-8">Duurzame verwarmingsoplossingen die uw energierekening verlagen en comfort verhogen.</p>
<a className="text-blue-600 font-medium flex items-center gap-2 group-hover:gap-4 transition-all" href="#">Meer info <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="flashlight-card group relative rounded-3xl bg-white border border-gray-200 p-8 hover:border-gray-300 transition-colors overflow-hidden">
<div className="flashlight-bg absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(16, 185, 129, 0.06), transparent 40%)'}}></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:wind-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">Ventilatie</h3>
<p className="text-lg text-slate-500 mb-8">Gezonde binnenlucht met onze geavanceerde ventilatiesystemen type C en D.</p>
<a className="text-orange-600 font-medium flex items-center gap-2 group-hover:gap-4 transition-all" href="#">Meer info <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h3 className="text-3xl font-semibold text-slate-900 mb-2">Heeft u een vraag over onze diensten?</h3>
<p className="text-lg text-slate-500">Onze experts staan klaar om u te adviseren.</p>
</div>
<button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-slate-800 transition-all flex items-center gap-3">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
                Contacteer ons
            </button>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute -inset-4 bg-yellow-100 rounded-3xl blur-xl opacity-40"></div>
<img alt="Zonnepanelen" className="relative rounded-3xl shadow-xl border border-gray-100" src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Bespaar direct op uw energierekening</h2>
<p className="text-xl text-slate-500 mb-8 leading-relaxed">
                    Combineer uw warmtepomp of airco met zonnepanelen voor een maximaal rendement. Wek uw eigen groene stroom op.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-4 text-lg text-slate-700">
<iconify-icon className="text-alfa-500 text-2xl" icon="solar:check-circle-linear"></iconify-icon>
                        Verlaag uw maandelijkse kosten
                    </li>
<li className="flex items-center gap-4 text-lg text-slate-700">
<iconify-icon className="text-alfa-500 text-2xl" icon="solar:check-circle-linear"></iconify-icon>
                        Onafhankelijk van energieprijzen
                    </li>
<li className="flex items-center gap-4 text-lg text-slate-700">
<iconify-icon className="text-alfa-500 text-2xl" icon="solar:check-circle-linear"></iconify-icon>
                        Waardevermeerdering van uw woning
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" style={{background: 'radial-gradient(800px circle at 50% 50%, #10b981, transparent)'}}></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl font-semibold tracking-tight mb-6">Hoeveel kunt u besparen?</h2>
<p className="text-xl text-slate-300 mb-12">Bereken uw indicatieve besparing met zonnepanelen en warmtepompen.</p>
<div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 text-left">
<div className="mb-8">
<label className="block text-sm font-medium text-slate-300 mb-4">Huidig maandelijks energieverbruik (€)</label>
<input className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-alfa-500" max="500" min="50" type="range" value="200"/>
<div className="flex justify-between mt-2 text-slate-400 text-sm">
<span>€50</span>
<span className="text-white font-semibold">€200</span>
<span>€500</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 rounded-xl p-6 border border-white/10">
<p className="text-sm text-slate-400 mb-2">Geschatte besparing / jaar</p>
<p className="text-3xl font-semibold text-alfa-400">€ 1.250</p>
</div>
<div className="bg-white/5 rounded-xl p-6 border border-white/10">
<p className="text-sm text-slate-400 mb-2">Terugverdientijd</p>
<p className="text-3xl font-semibold text-white">4.5 Jaar</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gray-50">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Gezond binnenklimaat voor uw woning</h2>
<p className="text-xl text-slate-500 mb-8">
                    Ventilatie is essentieel voor een gezonde leefomgeving. Verwijder vocht, schimmels en ongezonde stoffen automatisch.
                </p>
<div className="grid grid-cols-2 gap-6">
<div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
<iconify-icon className="text-alfa-500 text-4xl mb-4" icon="solar:wind-linear"></iconify-icon>
<h4 className="font-semibold text-slate-900 mb-2">Systeem C+</h4>
<p className="text-base text-slate-500">Natuurlijke toevoer, mechanische afvoer.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
<iconify-icon className="text-alfa-500 text-4xl mb-4" icon="solar:refresh-circle-linear"></iconify-icon>
<h4 className="font-semibold text-slate-900 mb-2">Systeem D</h4>
<p className="text-base text-slate-500">Volledig mechanisch met warmteterugwinning.</p>
</div>
</div>
</div>
<div className="relative">
<img alt="Ventilatie Unit" className="rounded-3xl shadow-xl border border-gray-200" src="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-gray-100 flex justify-center overflow-hidden relative">
<div className="text-center relative z-10">
<h3 className="text-3xl font-semibold text-slate-900 mb-8">Klaar voor een optimaal binnenklimaat?</h3>
<div className="relative inline-block sonar-effect">
<button className="bg-alfa-500 hover:bg-alfa-600 text-white px-10 py-5 rounded-full font-medium text-lg transition-all shadow-xl shadow-alfa-500/40 relative z-20">
                    Vraag advies aan
                </button>
</div>
</div>

<svg className="absolute top-0 left-0 w-full h-full text-gray-100 pointer-events-none -z-10">
<path d="M0,50 Q400,100 800,50 T1600,50" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Duurzaam verwarmen met warmtepompen</h2>
<p className="text-xl text-slate-500">Stap af van gas en kies voor de toekomst. Wij installeren A-merk warmtepompen.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-alfa-200 hover:bg-alfa-50/30 transition-all duration-300">
<img alt="Lucht-water" className="w-full h-48 object-cover rounded-2xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<h3 className="text-2xl font-semibold text-slate-900 mb-3">Lucht-Water</h3>
<p className="text-slate-500 text-lg mb-6">Haalt energie uit buitenlucht voor verwarming en warm water. Ideaal voor renovatie.</p>
</div>

<div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-alfa-200 hover:bg-alfa-50/30 transition-all duration-300">
<img alt="Lucht-Lucht" className="w-full h-48 object-cover rounded-2xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<h3 className="text-2xl font-semibold text-slate-900 mb-3">Lucht-Lucht</h3>
<p className="text-slate-500 text-lg mb-6">Ook wel airco genoemd. Kan zowel koelen als efficiënt verwarmen.</p>
</div>

<div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-alfa-200 hover:bg-alfa-50/30 transition-all duration-300">
<img alt="Hybride" className="w-full h-48 object-cover rounded-2xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<h3 className="text-2xl font-semibold text-slate-900 mb-3">Hybride</h3>
<p className="text-slate-500 text-lg mb-6">Combineert een gasketel met een warmtepomp. Slimme overstap.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
<div className="md:w-1/2">
<h2 className="text-4xl font-semibold tracking-tight mb-6">Welke warmtepomp past bij uw woning?</h2>
<p className="text-xl text-slate-300 mb-8">
                    Niet elke woning is geschikt voor elke warmtepomp. Isolatie, afgiftesysteem en budget spelen een rol.
                </p>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
<div className="w-8 h-8 rounded-full bg-alfa-500 flex items-center justify-center text-sm font-bold">1</div>
<span>Analyse van uw isolatiewaarde</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
<div className="w-8 h-8 rounded-full bg-alfa-500 flex items-center justify-center text-sm font-bold">2</div>
<span>Check van radiatoren of vloerverwarming</span>
</div>
</div>
</div>
<div className="md:w-1/2">
<div className="bg-white/10 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
<h4 className="text-xl font-semibold mb-6">Doe de quickscan</h4>
<form className="space-y-4">
<select className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-alfa-500">
<option className="text-slate-900">Bouwjaar woning</option>
<option className="text-slate-900">Na 2000</option>
<option className="text-slate-900">Voor 2000</option>
</select>
<select className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-alfa-500">
<option className="text-slate-900">Type verwarming</option>
<option className="text-slate-900">Vloerverwarming</option>
<option className="text-slate-900">Radiatoren</option>
</select>
<button className="w-full bg-alfa-500 hover:bg-alfa-600 text-white font-medium py-3 rounded-lg transition-colors">
                            Bekijk advies
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 mb-24">
<div>
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Professionele sanitaire installaties</h2>
<p className="text-xl text-slate-500 mb-8">
                        Van een lekkende kraan tot een complete badkamerrenovatie. Wij zorgen voor vakkundige installatie van uw sanitair.
                    </p>
<button className="text-alfa-600 font-medium text-lg flex items-center gap-2 hover:gap-4 transition-all">
                        Bekijk badkamer projecten <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 gap-4">
<img className="rounded-2xl h-64 w-full object-cover" src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<img className="rounded-2xl h-64 w-full object-cover mt-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
<div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
<div className="relative z-10">
<h2 className="text-4xl font-semibold text-slate-900 mb-6">Plan uw sanitaire renovatie</h2>
<p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
                        Wij begeleiden u van afbraak tot de laatste tegels. Eén aanspreekpunt voor uw volledige project.
                    </p>
<button className="bg-white border border-gray-200 text-slate-900 px-8 py-4 rounded-xl font-medium text-lg hover:shadow-lg transition-all">
                        Maak een afspraak
                    </button>
</div>
<div className="absolute top-0 right-0 w-64 h-64 bg-alfa-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50"></div>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
<div>
<div className="w-12 h-12 bg-alfa-100 text-alfa-600 rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Betrouwbaar onderhoud voor al uw installaties</h2>
<p className="text-xl text-slate-500 mb-8">
                    Voorkom storingen en verleng de levensduur van uw toestellen met ons jaarlijks onderhoud.
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:border-alfa-200 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-alfa-50 flex items-center justify-center text-gray-500 group-hover:text-alfa-600 transition-colors">
<iconify-icon icon="solar:document-add-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Vraag een onderhoudscontract aan</h4>
<p className="text-sm text-slate-500">Zorgeloos genieten, wij bellen u voor een afspraak.</p>
</div>
</div>
</div>
</div>
<div className="bg-slate-900 text-white p-10 rounded-3xl relative overflow-hidden">
<div className="border-beam"></div>
<h3 className="text-2xl font-semibold mb-6">Waarom onderhoud?</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-alfa-500 mt-1" icon="solar:check-circle-linear"></iconify-icon>
<span>Verplicht voor CV-ketels (2-jaarlijks)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-alfa-500 mt-1" icon="solar:check-circle-linear"></iconify-icon>
<span>Hogere efficiëntie (lager verbruik)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-alfa-500 mt-1" icon="solar:check-circle-linear"></iconify-icon>
<span>Minder kans op storingen in de winter</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-32 bg-gray-50 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-20">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 text-center mb-4">Bewezen expertise in duurzame energie</h2>
<p className="text-xl text-slate-500 text-center mb-16">Van concept tot realisatie in 4 stappen.</p>
<div className="relative grid md:grid-cols-4 gap-8">

<div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
<div className="relative pt-4 bg-gray-50">
<div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-alfa-600 text-2xl shadow-sm mb-6 mx-auto">1</div>
<h4 className="text-xl font-semibold text-center mb-2">Advies</h4>
<p className="text-center text-slate-500">Persoonlijk gesprek en analyse op locatie.</p>
</div>
<div className="relative pt-4 bg-gray-50">
<div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-alfa-600 text-2xl shadow-sm mb-6 mx-auto">2</div>
<h4 className="text-xl font-semibold text-center mb-2">Offerte</h4>
<p className="text-center text-slate-500">Transparante prijsopgave zonder verrassingen.</p>
</div>
<div className="relative pt-4 bg-gray-50">
<div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-alfa-600 text-2xl shadow-sm mb-6 mx-auto">3</div>
<h4 className="text-xl font-semibold text-center mb-2">Installatie</h4>
<p className="text-center text-slate-500">Vakkundige plaatsing door eigen techniekers.</p>
</div>
<div className="relative pt-4 bg-gray-50">
<div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-alfa-600 text-2xl shadow-sm mb-6 mx-auto">4</div>
<h4 className="text-xl font-semibold text-center mb-2">Nazorg</h4>
<p className="text-center text-slate-500">Uitleg en service na verkoop.</p>
</div>
</div>
</div>
</section>

<section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
<p className="text-center text-slate-400 font-medium mb-8 uppercase tracking-widest text-sm">Bekijk onze volledige portfolio</p>
<div className="flex w-full animate-marquee hover:[animation-play-state:paused] grayscale opacity-60">

<div className="flex items-center gap-16 px-8 min-w-max">
<iconify-icon icon="simple-icons:daikin" width="96"></iconify-icon>
<iconify-icon icon="simple-icons:mitsubishielectric" width="96"></iconify-icon>
<iconify-icon icon="simple-icons:samsung" width="96"></iconify-icon>
<iconify-icon icon="simple-icons:lg" width="96"></iconify-icon>
<iconify-icon icon="simple-icons:bosch" width="96"></iconify-icon>
<iconify-icon icon="simple-icons:vaillant" width="96"></iconify-icon>
<iconify-icon icon="simple-icons:panasonic" width="96"></iconify-icon>
<iconify-icon icon="simple-icons:siemens" width="96"></iconify-icon>

<iconify-icon icon="simple-icons:daikin" width="96"></iconify-icon>
<iconify-icon icon="simple-icons:mitsubishielectric" width="96"></iconify-icon>
<iconify-icon icon="simple-icons:samsung" width="96"></iconify-icon>
<iconify-icon icon="simple-icons:lg" width="96"></iconify-icon>
<iconify-icon icon="simple-icons:bosch" width="96"></iconify-icon>
</div>
</div>
</section>

<section className="py-32 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl font-semibold text-slate-900 mb-12 text-center">Waarom Alfacool?</h2>
<div className="grid md:grid-cols-3 md:grid-rows-2 gap-6 h-[800px] md:h-[600px]">
<div className="md:col-span-2 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden group">
<div className="relative z-10">
<h3 className="text-2xl font-semibold mb-4">Ervaring &amp; Vakmanschap</h3>
<p className="text-slate-500 text-lg max-w-md">Met meer dan 15 jaar ervaring in de sector garanderen wij een perfecte afwerking van elk project.</p>
</div>
<div className="absolute right-0 bottom-0 w-64 h-64 bg-alfa-50 rounded-tl-[100px] transition-transform group-hover:scale-110"></div>
<iconify-icon className="absolute bottom-8 right-8 text-8xl text-alfa-200" icon="solar:medal-ribbon-star-linear"></iconify-icon>
</div>
<div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden flex flex-col justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>
<div className="relative z-10">
<iconify-icon className="text-5xl text-alfa-400 mb-6" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="text-xl font-semibold mb-2">Snelle Service</h3>
<p className="text-slate-400">24/7 bereikbaar voor dringende interventies.</p>
</div>
</div>
<div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-center">
<iconify-icon className="text-5xl text-blue-500 mb-6" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h3 className="text-xl font-semibold mb-2">Persoonlijke Aanpak</h3>
<p className="text-slate-500">Eén contactpersoon voor uw hele project.</p>
</div>
<div className="md:col-span-2 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden group">
<div className="relative z-10 flex h-full flex-col justify-center">
<h3 className="text-2xl font-semibold mb-4">Klaar voor uw technische oplossing?</h3>
<p className="text-slate-500 text-lg max-w-md mb-6">Wij denken mee over de meest duurzame oplossing voor uw situatie.</p>
<div>
<a className="text-alfa-600 font-medium hover:underline" href="#">Bekijk onze certificaten</a>
</div>
</div>
<div className="absolute top-0 right-0 h-full w-1/3 bg-[url('https://images.unsplash.com/photo-1513828583688-601bf041906c?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center grayscale opacity-20 group-hover:opacity-40 transition-opacity"></div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-gray-50 border border-gray-200 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-b from-alfa-100 to-transparent rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
<div className="text-center mb-12 relative z-10">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">Vraag uw offerte aan</h2>
<p className="text-lg text-slate-500">Vul het formulier in en wij nemen binnen 24u contact op.</p>
</div>
<form className="space-y-6 relative z-10">
<div className="grid md:grid-cols-2 gap-6">
<div className="relative">
<input className="peer w-full bg-white border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-alfa-500 focus:ring-1 focus:ring-alfa-500 transition-all placeholder-transparent" id="name" placeholder="Naam" type="text"/>
<label className="absolute left-4 top-4 text-gray-400 text-base transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-alfa-600 peer-[&amp;:not(:placeholder-shown)]:top-2 peer-[&amp;:not(:placeholder-shown)]:text-xs bg-white px-1" htmlFor="name">Naam</label>
</div>
<div className="relative">
<input className="peer w-full bg-white border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-alfa-500 focus:ring-1 focus:ring-alfa-500 transition-all placeholder-transparent" id="email" placeholder="Email" type="email"/>
<label className="absolute left-4 top-4 text-gray-400 text-base transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-alfa-600 peer-[&amp;:not(:placeholder-shown)]:top-2 peer-[&amp;:not(:placeholder-shown)]:text-xs bg-white px-1" htmlFor="email">Email</label>
</div>
</div>
<div className="relative">
<select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-alfa-500 focus:ring-1 focus:ring-alfa-500 transition-all text-slate-600 appearance-none">
<option>Ik heb interesse in...</option>
<option>Airconditioning</option>
<option>Warmtepomp</option>
<option>Zonnepanelen</option>
<option>Sanitair</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative">
<textarea className="peer w-full bg-white border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-alfa-500 focus:ring-1 focus:ring-alfa-500 transition-all placeholder-transparent" id="msg" placeholder="Bericht" rows="4"></textarea>
<label className="absolute left-4 top-4 text-gray-400 text-base transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-alfa-600 peer-[&amp;:not(:placeholder-shown)]:top-2 peer-[&amp;:not(:placeholder-shown)]:text-xs bg-white px-1" htmlFor="msg">Uw bericht</label>
</div>
<div className="flex items-center gap-3">
<input className="w-5 h-5 rounded border-gray-300 text-alfa-500 focus:ring-alfa-500" id="newsletter" type="checkbox"/>
<label className="text-slate-600" htmlFor="newsletter">Blijf op de hoogte van promoties</label>
</div>
<button className="w-full bg-slate-900 text-white py-4 rounded-xl font-medium text-lg hover:bg-slate-800 transition-all shadow-lg flex justify-center items-center gap-2 group">
                        Verstuur aanvraag
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-20 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-2xl font-semibold text-white flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-alfa-500 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:snowflake-linear" width="20"></iconify-icon>
</div>
                        Alfacool
                    </a>
<p className="mb-6">Uw partner voor duurzame klimaatoplossingen in Aalst en omstreken.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-alfa-500 hover:text-white transition-all" href="#"><iconify-icon icon="simple-icons:facebook"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-alfa-500 hover:text-white transition-all" href="#"><iconify-icon icon="simple-icons:instagram"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-alfa-500 hover:text-white transition-all" href="#"><iconify-icon icon="simple-icons:linkedin"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Diensten</h4>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#">Airconditioning</a></li>
<li><a className="hover:text-white transition-colors" href="#">Warmtepompen</a></li>
<li><a className="hover:text-white transition-colors" href="#">Ventilatie</a></li>
<li><a className="hover:text-white transition-colors" href="#">Zonnepanelen</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sanitair</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Bedrijf</h4>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#">Over ons</a></li>
<li><a className="hover:text-white transition-colors" href="#">Projecten</a></li>
<li><a className="hover:text-white transition-colors" href="#">Vacatures</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Contact</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1" icon="solar:map-point-linear"></iconify-icon>
                            Industrielaan 12, <br/>9300 Aalst
                        </li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                            053 89 51 25
                        </li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                            info@alfacool.be
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
<p>© 2024 Alfacool. Alle rechten voorbehouden.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacybeleid</a>
<a className="hover:text-white" href="#">Algemene Voorwaarden</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
