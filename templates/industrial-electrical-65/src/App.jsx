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
      
tailwind.config = {
theme: {
extend: {
colors: {
brand: {
yellow: '#FACC15',
dark: '#0A0A0A',
gray: '#171717',
}
},
fontSize: {
'xxs': '0.65rem',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Intersection Observer for Animation
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-element');
            elements.forEach(el => observer.observe(el));
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
      

<div className="bg-white border-b border-gray-100 py-3 hidden md:block">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm font-medium text-gray-500">
<div className="flex items-center gap-4">
<div className="flex gap-3">

<a className="hover:text-brand-dark transition-colors" href="#"><iconify-icon className="w-4 h-4" icon="solar:link-linear"></iconify-icon></a>
</div>
</div>
<div className="flex items-center gap-6">
<span className="flex items-center gap-2 font-sans">
<iconify-icon className="text-brand-yellow w-4 h-4" icon="solar:phone-linear"></iconify-icon> 0420 264 105
                </span>
<span className="flex items-center gap-2 font-sans">
<iconify-icon className="text-brand-yellow w-4 h-4" icon="solar:clock-circle-linear"></iconify-icon> Snel beschikbaar
                </span>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-yellow w-6 h-6" icon="solar:bolt-linear"></iconify-icon>
<span className="text-xl tracking-tight text-brand-dark font-oswald font-medium">KEURNU</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-brand-dark transition-colors font-sans" href="#waarom">Waarom Keurnu</a>
<a className="hover:text-brand-dark transition-colors font-sans" href="#diensten">Diensten</a>
<a className="hover:text-brand-dark transition-colors font-sans" href="#werkwijze">Werkwijze</a>
<a className="hover:text-brand-dark transition-colors font-sans" href="#over">Over Ons</a>
<a className="hover:text-brand-dark transition-colors font-sans" href="#faq">FAQ</a>
</div>
<button className="bg-brand-yellow text-brand-dark px-8 py-3.5 rounded-full text-sm font-medium hover:bg-yellow-400 transition-colors flex items-center gap-2 font-sans">
                Plan je keuring
            </button>
<button className="lg:hidden text-brand-dark">
<iconify-icon className="w-6 h-6" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative bg-brand-dark pt-20 pb-32 overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-32 opacity-10 bg-dot-pattern hidden xl:block pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 opacity-10 bg-dot-pattern hidden xl:block pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal-element in-view">
<h1 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl font-normal text-white tracking-tight font-oswald mb-6">
                    ELEKTRISCHE KEURING MET PERSOONLIJKE AANPAK
                </h1>
<p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed font-sans">
                    Je elektrische installatie laten keuren hoeft geen gedoe te zijn. Bij Keurnu plan je snel een afspraak in, word je begeleid door ervaren keurders en krijg je een helder rapport zonder vakjargon. Vragen achteraf? Je bereikt altijd een echt persoon.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="bg-brand-yellow text-brand-dark px-8 py-3.5 rounded-full text-sm font-medium hover:bg-yellow-400 transition-colors flex items-center gap-2 font-sans">
                        Plan je keuring <div className="bg-white p-1 rounded-full flex items-center justify-center w-5 h-5"><iconify-icon className="w-3 h-3" icon="solar:arrow-right-linear"></iconify-icon></div>
</button>
<button className="border border-gray-700 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:border-gray-500 transition-colors font-sans">
                        Vraag een offerte aan
                    </button>
</div>
<div className="mt-16 pt-8 border-t border-gray-800 grid sm:grid-cols-2 gap-8">

<div className="flex gap-4 reveal-element delay-100 in-view">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<div className="flex text-brand-yellow mb-1">
<iconify-icon className="w-3 h-3" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-3 h-3" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-3 h-3" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-3 h-3" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-3 h-3" icon="solar:star-bold"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium mb-1 font-sans">Snel en duidelijk!</h4>
<p className="text-xs text-gray-500 leading-snug font-sans">"Vlotte service en een rapport dat ik eindelijk begreep."</p>
</div>
</div>

<div className="flex gap-4 reveal-element delay-200 in-view">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<div className="flex text-brand-yellow mb-1">
<iconify-icon className="w-3 h-3" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-3 h-3" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-3 h-3" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-3 h-3" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-3 h-3" icon="solar:star-bold"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium mb-1 font-sans">Top service</h4>
<p className="text-xs text-gray-500 leading-snug font-sans">"Meteen in orde voor de verkoop van onze woning."</p>
</div>
</div>
</div>
</div>
<div className="relative reveal-element delay-300 in-view">
<div className="absolute inset-0 bg-brand-yellow/10 rounded-3xl transform translate-x-4 translate-y-4"></div>
<div className="relative rounded-3xl overflow-hidden h-[600px] border border-gray-800">

<img alt="Keurder in overleg" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-12" id="waarom">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-brand-yellow"></span>
<span className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-sans">Veiligheid Voorop</span>
</div>
<h2 className="text-3xl md:text-4xl text-brand-dark tracking-tight font-oswald font-normal mb-6">WAAROM EEN ELEKTRISCHE KEURING BELANGRIJK IS</h2>
<div className="space-y-6 text-gray-500 text-base leading-relaxed font-sans">
<p>
                        Een elektrische keuring is meer dan een wettelijke verplichting. Het is de zekerheid dat je installatie veilig functioneert, voor jezelf, je gezin of je medewerkers. Defecten aan bedrading, aarding of beveiligingscomponenten vormen een reëel risico op brand en elektrocutie. Een grondige controle door een erkend keuringsorganisme brengt die risico's in kaart en geeft je een duidelijk keuringsattest.
                    </p>
<p>
                        Bij Keurnu combineren we vakkennis met een menselijke aanpak. Geen onpersoonlijk platform waar je met vragen blijft zitten, maar een team dat je installatie grondig controleert én de tijd neemt om het resultaat toe te lichten.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 pt-16 pb-24" id="diensten">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end gap-6 mb-16 gap-x-6 gap-y-6 justify-between">
<div>
<h2 className="text-4xl text-brand-dark tracking-tight font-oswald font-normal">ONZE ELEKTRISCHE KEURINGEN</h2>
</div>
<p className="max-w-md text-gray-500 text-base leading-relaxed font-sans">
                    Of je nu een nieuwe woning in gebruik neemt, zonnepanelen laat plaatsen of je pand verkoopt: elke situatie vraagt een specifieke keuring.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden h-80 reveal-element delay-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="h-1/2 overflow-hidden">
<img className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1595856898575-9d187bd32fd6?w=800&amp;q=80"/>
</div>
<div className="p-6 h-1/2 flex flex-col justify-between">
<div>
<h3 className="text-brand-dark font-medium text-lg font-sans mb-2">Indienststelling</h3>
<p className="text-gray-500 text-sm line-clamp-2">Net gebouwd of gerenoveerd? Voor aansluiting op het net is keuring verplicht.</p>
</div>
<a className="text-brand-yellow font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all mt-4" href="#">
                            Meer info &amp; inplannen <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-80 reveal-element delay-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="h-1/2 overflow-hidden">
<img className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&amp;q=80"/>
</div>
<div className="p-6 h-1/2 flex flex-col justify-between">
<div>
<h3 className="text-brand-dark font-medium text-lg font-sans mb-2">Keuring bij verkoop</h3>
<p className="text-gray-500 text-sm line-clamp-2">Verplicht voor de notariële akte bij de verkoop van een woning of appartement.</p>
</div>
<a className="text-brand-yellow font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all mt-4" href="#">
                            Meer info &amp; inplannen <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-80 reveal-element delay-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="h-1/2 overflow-hidden">
<img className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1509391366360-1e97f52ce23b?w=800&amp;q=80"/>
</div>
<div className="p-6 h-1/2 flex flex-col justify-between">
<div>
<h3 className="text-brand-dark font-medium text-lg font-sans mb-2">Zonnepanelen</h3>
<p className="text-gray-500 text-sm line-clamp-2">Klaar voor eigen energie? Keuring nodig voor aanmelding bij VREG of netbeheerder.</p>
</div>
<a className="text-brand-yellow font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all mt-4" href="#">
                            Meer info &amp; inplannen <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-80 reveal-element delay-200 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="h-1/2 overflow-hidden">
<img className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1664188543419-f0db72fc8c6c?w=800&amp;q=80"/>
</div>
<div className="p-6 h-1/2 flex flex-col justify-between">
<div>
<h3 className="text-brand-dark font-medium text-lg font-sans mb-2">Keuring laadpalen</h3>
<p className="text-gray-500 text-sm line-clamp-2">Van klassiek tot snellader, wij keuren alle types voor ingebruikname.</p>
</div>
<a className="text-brand-yellow font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all mt-4" href="#">
                            Meer info &amp; inplannen <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-80 reveal-element delay-200 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="h-1/2 overflow-hidden">
<img className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=800&amp;q=80"/>
</div>
<div className="p-6 h-1/2 flex flex-col justify-between">
<div>
<h3 className="text-brand-dark font-medium text-lg font-sans mb-2">Batterijen &amp; opslag</h3>
<p className="text-gray-500 text-sm line-clamp-2">Ook thuisbatterijen en opslagsystemen moeten gekeurd worden.</p>
</div>
<a className="text-brand-yellow font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all mt-4" href="#">
                            Meer info &amp; inplannen <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-80 reveal-element delay-200 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="h-1/2 overflow-hidden">
<img className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&amp;q=80"/>
</div>
<div className="p-6 h-1/2 flex flex-col justify-between">
<div>
<h3 className="text-brand-dark font-medium text-lg font-sans mb-2">Verzwaring installatie</h3>
<p className="text-gray-500 text-sm line-clamp-2">Een zwaarder aansluitvermogen vereist een volledige keuring van A tot Z.</p>
</div>
<a className="text-brand-yellow font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all mt-4" href="#">
                            Meer info &amp; inplannen <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-80 reveal-element delay-300 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="h-1/2 overflow-hidden">
<img className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&amp;q=80"/>
</div>
<div className="p-6 h-1/2 flex flex-col justify-between">
<div>
<h3 className="text-brand-dark font-medium text-lg font-sans mb-2">Uitbreiding / wijziging</h3>
<p className="text-gray-500 text-sm line-clamp-2">Zonder positief attest mag je een aangepaste installatie niet in gebruik nemen.</p>
</div>
<a className="text-brand-yellow font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all mt-4" href="#">
                            Meer info &amp; inplannen <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-80 reveal-element delay-300 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="h-1/2 overflow-hidden">
<img className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&amp;q=80"/>
</div>
<div className="p-6 h-1/2 flex flex-col justify-between">
<div>
<h3 className="text-brand-dark font-medium text-lg font-sans mb-2">Periodieke controle</h3>
<p className="text-gray-500 text-sm line-clamp-2">Elke woning moet om de 25 jaar gekeurd worden. Blijf in orde zonder stress.</p>
</div>
<a className="text-brand-yellow font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all mt-4" href="#">
                            Meer info &amp; inplannen <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-80 reveal-element delay-300 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="h-1/2 overflow-hidden">
<img className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?w=800&amp;q=80"/>
</div>
<div className="p-6 h-1/2 flex flex-col justify-between">
<div>
<h3 className="text-brand-dark font-medium text-lg font-sans mb-2">Herkeuring</h3>
<p className="text-gray-500 text-sm line-clamp-2">Negatief attest? Wij begeleiden je bij de aanpassingen en plannen snel een herkeuring.</p>
</div>
<a className="text-brand-yellow font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all mt-4" href="#">
                            Meer info &amp; inplannen <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between mb-16 gap-10 reveal-element">
<div className="max-w-md">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-brand-yellow"></span>
<span className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-sans">Kwaliteit gegarandeerd</span>
</div>
<h2 className="text-4xl text-brand-dark tracking-tight font-oswald font-normal">WAAROM KLANTEN VOOR KEURNU KIEZEN</h2>
</div>
<p className="max-w-md text-gray-500 text-base leading-relaxed mt-auto font-sans">
                    Wij streven naar een vlotte afhandeling, duidelijke communicatie en expertise waar je op kunt bouwen.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 reveal-element delay-100 hover:border-brand-yellow/30 transition-colors">
<div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-brand-yellow w-6 h-6" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl text-brand-dark mb-3 font-oswald font-normal">Snel ingepland</h3>
<p className="text-gray-500 text-base font-sans">Geen wekenlange wachttijden. We plannen je keuring in op een moment dat jou past, vaak al binnen enkele werkdagen.</p>
</div>

<div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 reveal-element delay-200 hover:border-brand-yellow/30 transition-colors">
<div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-brand-yellow w-6 h-6" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-xl text-brand-dark mb-3 font-oswald font-normal">Duidelijk rapport</h3>
<p className="text-gray-500 text-base font-sans">Na de keuring ontvang je een begrijpelijk verslag. Geen onduidelijke vakterm zonder uitleg, maar een rapport waar je direct mee aan de slag kan.</p>
</div>

<div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 reveal-element delay-100 hover:border-brand-yellow/30 transition-colors">
<div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-brand-yellow w-6 h-6" icon="solar:user-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl text-brand-dark mb-3 font-oswald font-normal">Persoonlijk contact</h3>
<p className="text-gray-500 text-base font-sans">Je bereikt altijd een echt persoon. Heb je na de keuring nog vragen over je verslag of de volgende stappen? Bel of mail ons gerust.</p>
</div>

<div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 reveal-element delay-200 hover:border-brand-yellow/30 transition-colors">
<div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-brand-yellow w-6 h-6" icon="solar:wallet-linear"></iconify-icon>
</div>
<h3 className="text-xl text-brand-dark mb-3 font-oswald font-normal">Eerlijke prijs, grondig werk</h3>
<p className="text-gray-500 text-base font-sans">Scherp geprijsd, zonder verrassingen achteraf. Wat je betaalt, is wat je krijgt: een volledige, deskundige controle met helder resultaat.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark text-white relative overflow-hidden" id="werkwijze">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal-element">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-brand-yellow"></span>
<span className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-sans">Werkwijze</span>
</div>
<h2 className="text-4xl tracking-tight mb-6 font-oswald font-normal">HOE VERLOOPT EEN ELEKTRISCHE KEURING?</h2>
<p className="text-gray-400 mb-10 text-base leading-relaxed font-sans">
                    Van aanvraag tot attest, wij maken het proces zo eenvoudig en transparant mogelijk. Geen onverwachte wendingen.
                </p>
<button className="bg-brand-yellow text-brand-dark px-8 py-3.5 rounded-full text-sm font-medium hover:bg-yellow-400 transition-colors flex items-center gap-2 font-sans w-max">
                    Plan nu je keuring
                </button>
</div>
<div className="reveal-element delay-200">
<div className="space-y-8">

<div className="flex gap-6">
<div className="flex-shrink-0 w-14 h-14 rounded-full border border-gray-700 bg-brand-gray flex items-center justify-center text-xl font-oswald text-brand-yellow">1</div>
<div>
<h4 className="text-xl font-medium text-white mb-2 font-sans">Afspraak inplannen</h4>
<p className="text-gray-400 text-sm leading-relaxed font-sans">Plan online je keuring of neem contact op. We zoeken samen een geschikt moment, vaak sneller dan je verwacht.</p>
</div>
</div>

<div className="flex gap-6">
<div className="flex-shrink-0 w-14 h-14 rounded-full border border-gray-700 bg-brand-gray flex items-center justify-center text-xl font-oswald text-brand-yellow">2</div>
<div>
<h4 className="text-xl font-medium text-white mb-2 font-sans">Keuring ter plaatse</h4>
<p className="text-gray-400 text-sm leading-relaxed font-sans">Onze erkende keurder komt langs en voert een grondige controle uit: administratief, visueel en metingen volgens het AREI.</p>
</div>
</div>

<div className="flex gap-6">
<div className="flex-shrink-0 w-14 h-14 rounded-full border border-gray-700 bg-brand-gray flex items-center justify-center text-xl font-oswald text-brand-yellow">3</div>
<div>
<h4 className="text-xl font-medium text-white mb-2 font-sans">Helder keuringsverslag</h4>
<p className="text-gray-400 text-sm leading-relaxed font-sans">Je ontvangt een duidelijk rapport. Positief? Dan ben je in orde. Negatief? We overlopen samen wat er moet aangepast worden.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="over">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative reveal-element">
<div className="relative rounded-3xl overflow-hidden h-[500px]">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1682345262055-8f95f3c513ea?w=1600&amp;q=80"/>
<div className="absolute bottom-8 right-8 bg-brand-yellow p-8 rounded-2xl max-w-xs shadow-2xl">
<iconify-icon className="w-10 h-10 text-brand-dark mb-4" icon="solar:medal-star-linear"></iconify-icon>
<div className="text-4xl text-brand-dark mb-1 font-oswald font-normal">15+ JAAR</div>
<div className="text-sm font-medium text-brand-dark/80 leading-snug font-sans">Ervaring in elektrische keuringen</div>
</div>
</div>
</div>
<div className="reveal-element delay-200">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-brand-yellow"></span>
<span className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-sans">Over Keurnu</span>
</div>
<h2 className="text-4xl text-brand-dark tracking-tight mb-6 font-oswald font-normal">MENSEN ACHTER DE KEURING</h2>
<p className="text-gray-500 text-base leading-relaxed mb-6 font-sans">
                    Keurnu is geen anoniem platform waar je een afspraak boekt en verder zelf uitzoekt. Achter elke keuring staat een team van ervaren inspecteurs dat technische kennis combineert met een persoonlijke aanpak. We zijn opgericht met één overtuiging: een elektrische keuring kan snel, grondig én menselijk zijn.
                </p>
<p className="text-gray-500 text-base leading-relaxed mb-8 font-sans">
                    Dat merk je in alles wat we doen. We nemen de tijd om ons rapport toe te lichten, beantwoorden je vragen met geduld en zorgen dat je precies weet wat de volgende stappen zijn. Als erkend keuringsorganisme voeren we jaarlijks duizenden keuringen uit in heel Vlaanderen.
                </p>
<a className="text-brand-yellow text-sm font-medium flex items-center gap-2 mb-16 hover:gap-3 transition-all font-sans" href="#">Leer ons team kennen <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon></a>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-gray-100 pt-8">
<div className="text-left">
<span className="block text-3xl text-brand-dark mb-2 font-oswald font-normal">15+</span>
<span className="text-xs text-gray-500 uppercase tracking-wide font-sans">Jaar Ervaring</span>
</div>
<div className="text-left">
<span className="block text-3xl text-brand-dark mb-2 font-oswald font-normal">5.000+</span>
<span className="text-xs text-gray-500 uppercase tracking-wide font-sans">Keuringen uitgevoerd</span>
</div>
<div className="text-left col-span-2 md:col-span-1">
<span className="block text-3xl text-brand-dark mb-2 font-oswald font-normal">24u</span>
<span className="text-xs text-gray-500 uppercase tracking-wide font-sans">Rapport binnen 24 uur</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-element">
<h2 className="text-4xl text-brand-dark tracking-tight font-oswald font-normal">VOOR PARTICULIEREN ÉN PROFESSIONALS</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm reveal-element delay-100">
<div className="w-14 h-14 bg-brand-yellow/10 rounded-2xl flex items-center justify-center mb-8">
<iconify-icon className="text-brand-yellow w-8 h-8" icon="solar:home-smile-linear"></iconify-icon>
</div>
<h3 className="text-2xl text-brand-dark mb-4 font-oswald font-normal">Particulier</h3>
<p className="text-gray-500 text-base leading-relaxed mb-8 font-sans">
                        Je woning verkopen, zonnepanelen laten keuren of een nieuwe installatie in dienst nemen? Als particulier begeleiden we je stap voor stap. Geen ingewikkelde procedures, gewoon duidelijke afspraken en een vlot verloop.
                    </p>
<a className="text-brand-yellow text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all font-sans" href="#">Bekijk keuringen voor particulieren <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-brand-dark p-10 rounded-3xl border border-gray-800 shadow-sm reveal-element delay-200">
<div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
<iconify-icon className="text-white w-8 h-8" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-2xl text-white mb-4 font-oswald font-normal">Professioneel</h3>
<p className="text-gray-400 text-base leading-relaxed mb-8 font-sans">
                        Werk je als installateur met terugkerend keuringsvolume of beheer je een groot bedrijfspand? We bieden een professionele workflow voor herhaalde opdrachten, vaste aanspreekpunten en flexibele planning.
                    </p>
<a className="text-brand-yellow text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all font-sans" href="#">Ontdek onze B2B-dienstverlening <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
<div className="reveal-element">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-brand-yellow"></span>
<span className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-sans">Vragen &amp; Antwoorden</span>
</div>
<h2 className="text-4xl text-brand-dark tracking-tight mb-10 font-oswald font-normal">VEELGESTELDE VRAGEN</h2>
<div className="space-y-4" itemscope="" itemtype="https://schema.org/FAQPage">
<details className="group p-4 bg-gray-50 rounded-xl cursor-pointer border border-transparent hover:border-gray-200 transition-colors open:bg-white open:shadow-lg open:shadow-gray-100" itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
<summary className="flex justify-between items-center font-medium text-brand-dark list-none font-sans" itemprop="name">
                            Hoeveel kost een elektrische keuring?
                            <span className="transition group-open:rotate-180">
<iconify-icon className="w-5 h-5 text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
<p className="text-gray-500 text-base mt-4 leading-relaxed font-sans" itemprop="text">
                                De prijs hangt af van het type keuring en de omvang van je installatie. Neem contact op voor een vrijblijvende offerte op maat.
                            </p>
</div>
</details>
<details className="group p-4 bg-gray-50 rounded-xl cursor-pointer border border-transparent hover:border-gray-200 transition-colors open:bg-white open:shadow-lg open:shadow-gray-100" itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
<summary className="flex justify-between items-center font-medium text-brand-dark list-none font-sans" itemprop="name">
                            Hoe lang duurt een elektrische keuring?
                            <span className="transition group-open:rotate-180">
<iconify-icon className="w-5 h-5 text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
<p className="text-gray-500 text-base mt-4 leading-relaxed font-sans" itemprop="text">
                                Een standaardkeuring duurt gemiddeld 45 minuten tot anderhalf uur, afhankelijk van de grootte van de installatie en het aantal stroomkringen.
                            </p>
</div>
</details>
<details className="group p-4 bg-gray-50 rounded-xl cursor-pointer border border-transparent hover:border-gray-200 transition-colors open:bg-white open:shadow-lg open:shadow-gray-100" itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
<summary className="flex justify-between items-center font-medium text-brand-dark list-none font-sans" itemprop="name">
                            Wat heb ik nodig voor de keuring?
                            <span className="transition group-open:rotate-180">
<iconify-icon className="w-5 h-5 text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
<p className="text-gray-500 text-base mt-4 leading-relaxed font-sans" itemprop="text">
                                Zorg dat het eendraadschema en het situatieplan van je installatie beschikbaar zijn. Zonder die documenten kan er geen positief attest afgeleverd worden.
                            </p>
</div>
</details>
<details className="group p-4 bg-gray-50 rounded-xl cursor-pointer border border-transparent hover:border-gray-200 transition-colors open:bg-white open:shadow-lg open:shadow-gray-100" itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
<summary className="flex justify-between items-center font-medium text-brand-dark list-none font-sans" itemprop="name">
                            Wat als mijn keuring negatief is?
                            <span className="transition group-open:rotate-180">
<iconify-icon className="w-5 h-5 text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
<p className="text-gray-500 text-base mt-4 leading-relaxed font-sans" itemprop="text">
                                Dan leggen we helder uit welke inbreuken vastgesteld zijn en wat er moet aangepast worden. Zodra de aanpassingen klaar zijn, plannen we de herkeuring in.
                            </p>
</div>
</details>
<details className="group p-4 bg-gray-50 rounded-xl cursor-pointer border border-transparent hover:border-gray-200 transition-colors open:bg-white open:shadow-lg open:shadow-gray-100" itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
<summary className="flex justify-between items-center font-medium text-brand-dark list-none font-sans" itemprop="name">
                            Hoe snel kan ik een keuring inplannen?
                            <span className="transition group-open:rotate-180">
<iconify-icon className="w-5 h-5 text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
<p className="text-gray-500 text-base mt-4 leading-relaxed font-sans" itemprop="text">
                                In veel gevallen plannen we een keuring in binnen enkele werkdagen. Neem contact op en we zoeken samen het snelste beschikbare moment.
                            </p>
</div>
</details>
</div>
</div>
<div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden reveal-element delay-200">
<img className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1471871480126-59ab253c49e9?w=1600&amp;q=80"/>
</div>
</div>
</section>

<div className="bg-brand-yellow h-12 flex items-center overflow-hidden whitespace-nowrap">
<div className="animate-marquee flex gap-8 font-medium text-brand-dark text-lg uppercase tracking-wider opacity-80">
<span className="font-sans">Keurnu</span> <span className="font-sans">•</span> <span className="font-sans">Snel</span> <span className="font-sans">•</span> <span className="font-sans">Duidelijk</span> <span className="font-sans">•</span> <span className="font-sans">Persoonlijk</span> <span className="font-sans">•</span>
<span className="font-sans">Keurnu</span> <span className="font-sans">•</span> <span className="font-sans">Snel</span> <span className="font-sans">•</span> <span className="font-sans">Duidelijk</span> <span className="font-sans">•</span> <span className="font-sans">Persoonlijk</span> <span className="font-sans">•</span>
<span className="font-sans">Keurnu</span> <span className="font-sans">•</span> <span className="font-sans">Snel</span> <span className="font-sans">•</span> <span className="font-sans">Duidelijk</span> <span className="font-sans">•</span> <span className="font-sans">Persoonlijk</span> <span className="font-sans">•</span>
<span className="font-sans">Keurnu</span> <span className="font-sans">•</span> <span className="font-sans">Snel</span> <span className="font-sans">•</span> <span className="font-sans">Duidelijk</span> <span className="font-sans">•</span> <span className="font-sans">Persoonlijk</span> <span className="font-sans">•</span>
<span className="font-sans">Keurnu</span> <span className="font-sans">•</span> <span className="font-sans">Snel</span> <span className="font-sans">•</span> <span className="font-sans">Duidelijk</span> <span className="font-sans">•</span> <span className="font-sans">Persoonlijk</span> <span className="font-sans">•</span>
</div>
</div>

<section className="py-24 bg-brand-dark border-b border-gray-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-8 reveal-element">
<div>
<h2 className="text-4xl lg:text-5xl text-white tracking-tight max-w-2xl font-oswald font-normal mb-4">
                    KLAAR OM JE KEURING IN TE PLANNEN?
                </h2>
<p className="text-gray-400 font-sans max-w-xl text-lg">Neem vandaag nog contact op en plan je elektrische keuring bij Keurnu. Snel, persoonlijk en met een helder rapport achteraf.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 shrink-0">
<button className="bg-brand-yellow text-brand-dark px-10 py-4 rounded-full text-base font-medium hover:bg-yellow-400 transition-colors flex items-center justify-center gap-3 font-sans">
                    Plan je keuring
                </button>
<button className="border border-gray-700 text-white px-10 py-4 rounded-full text-base font-medium hover:border-gray-500 transition-colors flex items-center justify-center gap-3 font-sans">
                    Bel ons voor advies <iconify-icon className="w-4 h-4" icon="solar:phone-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="bg-brand-dark pt-20 pb-10 border-t border-gray-900" itemscope="" itemtype="https://schema.org/LocalBusiness">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="w-6 h-6 text-white" icon="solar:bolt-linear"></iconify-icon>
<span className="text-xl font-medium text-white tracking-tight font-oswald" itemprop="name">KEURNU</span>
</div>
<p className="text-gray-500 text-sm mb-6 font-sans" itemprop="description">Elektrische keuring nodig? Keurnu staat voor snelle inspectie, duidelijke rapporten en persoonlijk contact.</p>
</div>

<div>
<h4 className="text-white font-medium mb-6 font-sans">PAGINA'S</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-brand-yellow transition-colors font-sans" href="#over">Over ons</a></li>
<li><a className="hover:text-brand-yellow transition-colors font-sans" href="#diensten">Diensten</a></li>
<li><a className="hover:text-brand-yellow transition-colors font-sans" href="#werkwijze">Werkwijze</a></li>
<li><a className="hover:text-brand-yellow transition-colors font-sans" href="#faq">FAQ</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 font-sans">DIENSTEN</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-brand-yellow transition-colors font-sans" href="#" itemprop="makesOffer">Indienststelling</a></li>
<li><a className="hover:text-brand-yellow transition-colors font-sans" href="#" itemprop="makesOffer">Keuring bij verkoop</a></li>
<li><a className="hover:text-brand-yellow transition-colors font-sans" href="#" itemprop="makesOffer">Keuring zonnepanelen</a></li>
<li><a className="hover:text-brand-yellow transition-colors font-sans" href="#" itemprop="makesOffer">Keuring laadpalen</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 font-sans">CONTACT</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li className="flex items-start gap-3 font-sans">
<iconify-icon className="w-4 h-4 mt-1 text-brand-yellow" icon="solar:map-point-linear"></iconify-icon>
<span itemprop="areaServed">Heel Vlaanderen</span>
</li>
<li className="flex items-center gap-3 font-sans">
<iconify-icon className="w-4 h-4 text-brand-yellow" icon="solar:phone-linear"></iconify-icon>
<span itemprop="telephone">0420 264 105</span>
</li>
<li className="flex items-center gap-3 font-sans">
<iconify-icon className="w-4 h-4 text-brand-yellow" icon="solar:letter-linear"></iconify-icon>
<span itemprop="email">info@keurnu.be</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
<p className="font-sans">© 2024 Keurnu. Alle rechten voorbehouden.</p>
</div>
</div>
</footer>


    </>
  );
}
