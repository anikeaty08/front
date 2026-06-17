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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-500 text-xl" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-white text-lg font-medium tracking-tight">LuxeDetail</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#home">Home</a>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#werk">Portfolio</a>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#tarieven">Tarieven</a>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex text-sm text-stone-400 hover:text-white items-center gap-2 transition-colors" href="tel:+3112345678">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                    Bellen
                </a>
<button className="gold-gradient-border rounded-full px-5 py-2 text-sm text-yellow-500 hover:bg-yellow-500/10 transition-all font-medium">
                    Boek Afspraak
                </button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Car Interior" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-yellow-400 text-xs font-medium tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
</span>
                    Nu beschikbaar voor boekingen
                </div>
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    PROFESSIONELE<br/>
<span className="gold-gradient-text">AUTO DETAILING</span><br/>
                    &amp; REINIGING
                </h1>
<p className="text-lg lg:text-xl text-stone-400 max-w-xl leading-relaxed">
                    Hoogwaardige verzorging voor uw voertuig. Wij herstellen de showroom staat met precisie en passie.
                </p>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-stone-300 text-lg">
<div className="p-1 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
                        Op locatie mogelijk
                    </div>
<div className="flex items-center gap-3 text-stone-300 text-lg">
<div className="p-1 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
                        Keramische coatings
                    </div>
</div>
<div className="flex flex-wrap gap-4 pt-4">
<a className="bg-white text-black hover:bg-stone-200 px-8 py-3.5 rounded-lg text-base font-medium transition-colors flex items-center gap-2" href="#tarieven">
                        Bekijk tarieven
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="border border-white/20 text-white hover:bg-white/5 px-8 py-3.5 rounded-lg text-base font-medium transition-colors" href="#werk">
                        Ons werk
                    </a>
</div>
</div>
</div>
</section>

<div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>

<section className="py-24 bg-black relative" id="werk">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
<div className="space-y-4">
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight">Gerealiseerde Projecten</h2>
<p className="text-lg text-stone-400 max-w-xl">
                        Een selectie van voertuigen die wij hebben getransformeerd.
                    </p>
</div>
<a className="text-stone-400 hover:text-white flex items-center gap-1 transition-colors text-sm" href="#">
                    Bekijk Instagram <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-stone-900 border border-white/10">
<img alt="Auto Detail 1" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1552930294-6b595f4c2974?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-yellow-500 text-sm font-medium mb-1">Interieur Detail</p>
<h3 className="text-white text-xl font-medium">Mercedes-Benz C-Class</h3>
</div>
</div>

<div className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-stone-900 border border-white/10">
<img alt="Auto Detail 2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-yellow-500 text-sm font-medium mb-1">Lakverzegeling</p>
<h3 className="text-white text-xl font-medium">Audi RS6 Avant</h3>
</div>
</div>

<div className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-stone-900 border border-white/10">
<img alt="Auto Detail 3" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-yellow-500 text-sm font-medium mb-1">Polijsten &amp; Coating</p>
<h3 className="text-white text-xl font-medium">Porsche 911</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-stone-950/50" id="tarieven">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center space-y-4 mb-16">
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight">Tarieven &amp; Pakketten</h2>
<p className="text-lg text-stone-400 max-w-2xl mx-auto">
                    Transparante prijzen voor elk niveau van perfectie. Prijzen kunnen variëren op basis van de staat en grootte van het voertuig.
                </p>
</div>

<div className="flex justify-center mb-12">
<div className="bg-stone-900 p-1 rounded-lg border border-white/10 inline-flex">
<button className="px-6 py-2 rounded-md bg-stone-800 text-white text-sm font-medium shadow-sm transition-all border border-white/5">Kleine Auto</button>
<button className="px-6 py-2 rounded-md text-stone-500 hover:text-white text-sm font-medium transition-all">Middel / SUV</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col p-8 rounded-2xl bg-black border border-white/10 hover:border-white/20 transition-all">
<div className="mb-6">
<h3 className="text-xl font-medium text-white mb-2">Basis Reiniging</h3>
<p className="text-stone-400 text-sm h-10">Grondige wasbeurt en basis interieur opfrisbeurt.</p>
</div>
<div className="mb-6">
<span className="text-3xl font-medium text-white">€75</span>
<span className="text-stone-500 text-sm">/ vanaf</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-stone-300 text-sm">
<iconify-icon className="text-stone-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Handwas (krasvrij)</span>
</li>
<li className="flex items-start gap-3 text-stone-300 text-sm">
<iconify-icon className="text-stone-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Velgen reinigen</span>
</li>
<li className="flex items-start gap-3 text-stone-300 text-sm">
<iconify-icon className="text-stone-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Stofzuigen interieur</span>
</li>
<li className="flex items-start gap-3 text-stone-300 text-sm">
<iconify-icon className="text-stone-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Ramen binnen &amp; buiten</span>
</li>
</ul>
<a className="w-full block text-center py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 font-medium text-sm transition-colors" href="#contact">
                        Kies Basis
                    </a>
</div>

<div className="relative flex flex-col p-8 rounded-2xl bg-stone-900/40 border border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.1)]">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full tracking-wide">
                        MEEST GEKOZEN
                    </div>
<div className="mb-6">
<h3 className="text-xl font-medium text-white mb-2">Premium Detail</h3>
<p className="text-stone-400 text-sm h-10">Dieptereiniging en lakbescherming voor langdurige glans.</p>
</div>
<div className="mb-6">
<span className="text-3xl font-medium text-white">€195</span>
<span className="text-stone-500 text-sm">/ vanaf</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-white text-sm">
<iconify-icon className="text-yellow-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Alles van Basis +</span>
</li>
<li className="flex items-start gap-3 text-white text-sm">
<iconify-icon className="text-yellow-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Interieur stoomreiniging</span>
</li>
<li className="flex items-start gap-3 text-white text-sm">
<iconify-icon className="text-yellow-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>1-staps polijsten</span>
</li>
<li className="flex items-start gap-3 text-white text-sm">
<iconify-icon className="text-yellow-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Wax / Sealant (6 mnd)</span>
</li>
</ul>
<a className="w-full block text-center py-3 rounded-lg bg-yellow-500 text-black hover:bg-yellow-400 font-medium text-sm transition-colors" href="#contact">
                        Kies Premium
                    </a>
</div>

<div className="flex flex-col p-8 rounded-2xl bg-black border border-white/10 hover:border-white/20 transition-all">
<div className="mb-6">
<h3 className="text-xl font-medium text-white mb-2">Showroom Exclusive</h3>
<p className="text-stone-400 text-sm h-10">De ultieme behandeling. Correctie en keramische coating.</p>
</div>
<div className="mb-6">
<span className="text-3xl font-medium text-white">€450</span>
<span className="text-stone-500 text-sm">/ vanaf</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-stone-300 text-sm">
<iconify-icon className="text-stone-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Alles van Premium +</span>
</li>
<li className="flex items-start gap-3 text-stone-300 text-sm">
<iconify-icon className="text-stone-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Meer-staps lakcorrectie</span>
</li>
<li className="flex items-start gap-3 text-stone-300 text-sm">
<iconify-icon className="text-stone-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Keramische Coating (3 jr)</span>
</li>
<li className="flex items-start gap-3 text-stone-300 text-sm">
<iconify-icon className="text-stone-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Motorruimte detail</span>
</li>
</ul>
<a className="w-full block text-center py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 font-medium text-sm transition-colors" href="#contact">
                        Kies Exclusive
                    </a>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-stone-500 text-sm">
                    Prijzen zijn indicatief en inclusief BTW. Voor extreme vervuiling kan een toeslag gelden.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-16">
<div>
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight">Klantervaringen</h2>
<p className="text-lg text-stone-400 mt-2">
                        Wat onze klanten zeggen over het resultaat.
                    </p>
</div>
<div className="hidden md:flex items-center gap-2">
<div className="flex text-yellow-500 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-white font-medium">5.0</span>
<span className="text-stone-500 text-sm">(120+ reviews)</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-stone-900/30 border border-white/10 p-6 rounded-xl">
<div className="flex items-center gap-1 text-yellow-500 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-300 text-base leading-relaxed mb-6">
                        "Ongelooflijk resultaat. Mijn BMW uit 2018 ziet er weer uit alsof hij net uit de fabriek komt. De lakcorrectie heeft alle waskrassen verwijderd."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 font-medium text-sm">T</div>
<div>
<h4 className="text-white font-medium text-sm">Thomas de Vries</h4>
<p className="text-stone-500 text-xs">BMW 5 Serie</p>
</div>
</div>
</div>

<div className="bg-stone-900/30 border border-white/10 p-6 rounded-xl">
<div className="flex items-center gap-1 text-yellow-500 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-300 text-base leading-relaxed mb-6">
                        "Zeer professioneel en punctueel. Ze kwamen aan huis en hebben het interieur van onze gezinsauto volledig gereinigd. Geen vlekje meer te zien!"
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 font-medium text-sm">S</div>
<div>
<h4 className="text-white font-medium text-sm">Sophie Bakker</h4>
<p className="text-stone-500 text-xs">Volvo XC90</p>
</div>
</div>
</div>

<div className="bg-stone-900/30 border border-white/10 p-6 rounded-xl">
<div className="flex items-center gap-1 text-yellow-500 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-300 text-base leading-relaxed mb-6">
                        "De keramische coating is het geld dubbel en dwars waard. Water glijdt er zo vanaf en wassen is nu een makkie. Top service."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 font-medium text-sm">M</div>
<div className="">
<h4 className="text-white font-medium text-sm">Mark Visser</h4>
<p className="text-stone-500 text-xs">Tesla Model Y</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-black border-white/5 border-t pt-24 pb-24 relative" id="contact">

<div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24">

<div className="flex flex-col justify-center space-y-8">
<div>
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-4">Neem contact op</h2>
<p className="text-lg text-stone-400">
                        Klaar om uw auto de aandacht te geven die hij verdient? Vul het formulier in of neem direct contact met ons op.
                    </p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-stone-900 border border-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-base">Locatie</h4>
<p className="text-stone-400 text-sm">Industrieweg 12, AmsterdamOp locatie service beschikbaar in heel Nederland</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-stone-900 border border-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-base">Email</h4>
<p className="text-stone-400 text-sm">info@luxedetail.nl</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-stone-900 border border-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-base">Telefoon</h4>
<p className="text-stone-400 text-sm">+31 6 1234 5678</p>
</div>
</div>
</div>
</div>

<div className="bg-stone-900/30 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-stone-300 ml-1">Voornaam</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all text-sm" placeholder="Jan" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-300 ml-1">Achternaam</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all text-sm" placeholder="Jansen" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-300 ml-1">Email adres</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all text-sm" placeholder="jan@voorbeeld.nl" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-300 ml-1">Dienst</label>
<div className="relative">
<select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500/50 focus:border-yellow-500/50 appearance-none transition-all text-sm">
<option>Selecteer een behandeling</option>
<option>Basis Wassen</option>
<option>Interieur Reiniging</option>
<option>Polijsten &amp; Coating</option>
<option>Volledige Detailing</option>
</select>
<iconify-icon className="absolute right-4 top-3.5 text-stone-500 text-base pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-300 ml-1">Bericht</label>
<textarea className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all resize-none text-sm" placeholder="Vertel ons over uw auto en wensen..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black hover:bg-stone-200 font-medium py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 group text-sm" type="button">
                        Verstuur bericht
                        <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:plain-2-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-500 text-xl" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-white text-lg font-medium tracking-tight">LuxeDetail</span>
</div>
<div className="flex gap-8 text-sm text-stone-400">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Voorwaarden</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</div>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-white transition-colors" href="#"><iconify-icon icon="logos:instagram-icon" width="20"></iconify-icon></a>
<a className="text-stone-400 hover:text-white transition-colors" href="#"><iconify-icon icon="logos:facebook" width="20"></iconify-icon></a>
</div>
</div>
</div></footer>

    </>
  );
}
