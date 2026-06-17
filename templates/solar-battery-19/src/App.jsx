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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
        lucide.createIcons();
    
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
      

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#16C060] opacity-5 rounded-full blur-[100px] pointer-events-none z-0"></div>

<header className="bg-white w-full border-b border-gray-100 relative z-20">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">

<div className="flex items-center gap-1 text-2xl tracking-tight">
<span className="font-semibold text-[#0B3D2E]">HELP MIJ</span>
<span className="font-semibold text-[#16C060]">BESPAREN</span>
</div>

<nav className="hidden md:flex items-center gap-10">
<button className="flex items-center gap-2 text-base font-medium text-[#0B3D2E] hover:text-[#16C060] transition-colors">
                    Producten
                    <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<button className="flex items-center gap-2 text-base font-medium text-[#0B3D2E] hover:text-[#16C060] transition-colors">
                    Over ons
                    <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</nav>

<a className="bg-[#16C060] hover:bg-[#13A653] text-white text-base font-medium px-6 py-3 rounded-lg transition-colors shadow-sm" href="#formulier">
                Vind een installateur
            </a>
</div>
</header>

<main className="flex-grow flex z-10 lg:py-24 pt-12 pb-20 relative items-center">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

<div className="flex-1 w-full flex flex-col items-start pt-4">

<div className="bg-white rounded-full px-4 py-2 flex items-center gap-3 shadow-sm border border-gray-100 mb-8">
<div className="flex gap-0.5 text-[#16C060]">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star-half" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-semibold">4.8/5</span>
<span className="text-sm font-semibold flex items-center gap-1">
<i className="w-4 h-4 text-[#16C060]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                        Geverifieerd
                    </span>
</div>

<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-[#0B3D2E] mb-6 leading-[1.15]">
                    Jouw ideale thuisbatterij, vakkundig geïnstalleerd
                </h1>

<p className="text-lg text-[#0B3D2E]/80 mb-10 max-w-xl leading-relaxed">
                    Van persoonlijk advies tot professionele installatie door onze eigen specialisten. Ontdek direct welke batterij het beste bij jouw woning past.
                </p>

<div className="flex flex-col gap-4 mb-12">
<div className="flex items-center gap-4">
<i className="w-6 h-6 text-[#16C060] shrink-0" data-lucide="battery-charging" strokeWidth="1.5"></i>
<span className="text-lg text-[#0B3D2E]">Persoonlijk advies voor de <strong className="">beste oplossing</strong></span>
</div>
<div className="flex items-center gap-4">
<i className="w-6 h-6 text-[#16C060] shrink-0" data-lucide="zap" strokeWidth="1.5"></i>
<span className="text-lg text-[#0B3D2E]">Uitsluitend <strong className="">premium A-merken</strong></span>
</div>
<div className="flex items-center gap-4">
<i className="w-6 h-6 text-[#16C060] shrink-0" data-lucide="coins" strokeWidth="1.5"></i>
<span className="text-lg text-[#0B3D2E]">Vakkundige installatie door <strong className="">onze eigen experts</strong></span>
</div>
</div>

<div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-6 mb-12 w-full max-w-sm">
<div className="text-4xl font-semibold text-[#0B3D2E] mb-1">
                        Al 2841x
                    </div>
<div className="text-base text-[#0B3D2E]/70">
                        systemen succesvol geïnstalleerd
                    </div>
</div>

<div className="flex flex-col items-start gap-4">
<div className="text-sm text-[#0B3D2E]/70">
                        Of bel ons direct voor hulp<br/>
                        ma-vrij: 09:00 – 17:30
                    </div>
<a className="bg-[#16C060] hover:bg-[#13A653] text-white text-lg font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-3 shadow-sm" href="tel:0303406150">
<i className="w-5 h-5 fill-current" data-lucide="phone" strokeWidth="1.5"></i>
                        030 340 61 50
                    </a>
</div>
</div>

<div className="w-full lg:w-[560px] shrink-0 relative mt-8 lg:mt-0" id="formulier">
<div className="bg-white border-gray-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-[0_20px_40px_-15px_rgba(11,61,46,0.1)]">

<div className="flex justify-between items-start mb-6">
<h2 className="text-3xl font-semibold tracking-tight text-[#0B3D2E]">
                            Jouw ideale batterij
                        </h2>
<div className="text-right mt-1">
<div className="text-xs font-semibold text-[#16C060] bg-[#16C060]/10 px-3 py-1.5 rounded-full flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:bolt-linear" width="16"></iconify-icon>
                                Gratis advies
                            </div>
</div>
</div>
<p className="text-base text-[#0B3D2E]/80 mb-8">
                        Doe de snelle check en ontvang direct een vrijblijvend voorstel en advies op maat van onze experts.
                    </p>
<form className="space-y-7">

<div className="">
<label className="block text-sm font-semibold text-[#0B3D2E] mb-3">
                                1. Heb je al zonnepanelen? <span className="text-red-500">*</span>
</label>
<div className="grid grid-cols-2 gap-3">
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="zonnepanelen" type="radio"/>
<div className="border border-gray-200 rounded-lg p-3 text-center transition-all flex items-center justify-center h-14 bg-white peer-checked:border-[#16C060] peer-checked:bg-[#16C060]/5 peer-checked:ring-1 peer-checked:ring-[#16C060] hover:border-[#16C060]/40">
<span className="text-sm font-medium text-[#0B3D2E]">Ja, die heb ik al</span>
</div>
</label>
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="zonnepanelen" type="radio"/>
<div className="border border-gray-200 rounded-lg p-3 text-center transition-all flex items-center justify-center h-14 bg-white peer-checked:border-[#16C060] peer-checked:bg-[#16C060]/5 peer-checked:ring-1 peer-checked:ring-[#16C060] hover:border-[#16C060]/40">
<span className="text-sm font-medium text-[#0B3D2E]">Nee, nog niet</span>
</div>
</label>
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="zonnepanelen" type="radio"/>
<div className="border border-gray-200 rounded-lg p-3 text-center transition-all flex items-center justify-center h-14 bg-white peer-checked:border-[#16C060] peer-checked:bg-[#16C060]/5 peer-checked:ring-1 peer-checked:ring-[#16C060] hover:border-[#16C060]/40">
<span className="text-sm font-medium text-[#0B3D2E]">Ik wil ze allebei</span>
</div>
</label>
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="zonnepanelen" type="radio"/>
<div className="border border-gray-200 rounded-lg p-3 text-center transition-all flex items-center justify-center h-14 bg-white peer-checked:border-[#16C060] peer-checked:bg-[#16C060]/5 peer-checked:ring-1 peer-checked:ring-[#16C060] hover:border-[#16C060]/40">
<span className="text-sm font-medium text-[#0B3D2E]">Weet ik niet zeker</span>
</div>
</label>
</div>
</div>

<div className="">
<label className="block text-sm font-semibold text-[#0B3D2E] mb-3">
                                2. Wat is je stroomverbruik per jaar? <span className="text-red-500">*</span>
</label>
<div className="grid grid-cols-2 gap-3">
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="verbruik" type="radio"/>
<div className="border border-gray-200 rounded-lg p-3 text-center transition-all flex items-center justify-center h-14 bg-white peer-checked:border-[#16C060] peer-checked:bg-[#16C060]/5 peer-checked:ring-1 peer-checked:ring-[#16C060] hover:border-[#16C060]/40">
<span className="text-sm font-medium text-[#0B3D2E]">&lt; 3.000 kWh</span>
</div>
</label>
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="verbruik" type="radio"/>
<div className="border border-gray-200 rounded-lg p-3 text-center transition-all flex items-center justify-center h-14 bg-white peer-checked:border-[#16C060] peer-checked:bg-[#16C060]/5 peer-checked:ring-1 peer-checked:ring-[#16C060] hover:border-[#16C060]/40">
<span className="text-sm font-medium text-[#0B3D2E]">3.000 - 5.000 kWh</span>
</div>
</label>
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="verbruik" type="radio"/>
<div className="border border-gray-200 rounded-lg p-3 text-center transition-all flex items-center justify-center h-14 bg-white peer-checked:border-[#16C060] peer-checked:bg-[#16C060]/5 peer-checked:ring-1 peer-checked:ring-[#16C060] hover:border-[#16C060]/40">
<span className="text-sm font-medium text-[#0B3D2E]">5.000+ kWh</span>
</div>
</label>
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="verbruik" type="radio"/>
<div className="border border-gray-200 rounded-lg p-3 text-center transition-all flex items-center justify-center h-14 bg-white peer-checked:border-[#16C060] peer-checked:bg-[#16C060]/5 peer-checked:ring-1 peer-checked:ring-[#16C060] hover:border-[#16C060]/40">
<span className="text-sm font-medium text-[#0B3D2E]">Geen idee</span>
</div>
</label>
</div>
</div>

<div className="pt-2 border-t border-gray-100">
<label className="block text-sm font-semibold text-[#0B3D2E] mt-4 mb-4">
                                3. Waar mogen we het voorstel naartoe sturen? <span className="text-red-500">*</span>
</label>
<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-[#F5F7F6] border border-gray-200 rounded-lg px-4 py-3 text-base text-[#0B3D2E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16C060]/30 focus:border-[#16C060] transition-all" placeholder="Postcode" type="text"/>
<input className="w-full bg-[#F5F7F6] border border-gray-200 rounded-lg px-4 py-3 text-base text-[#0B3D2E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16C060]/30 focus:border-[#16C060] transition-all" placeholder="Huisnummer" type="text"/>
</div>
<input className="w-full bg-[#F5F7F6] border border-gray-200 rounded-lg px-4 py-3 text-base text-[#0B3D2E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16C060]/30 focus:border-[#16C060] transition-all" placeholder="E-mailadres" type="email"/>
<input className="w-full bg-[#F5F7F6] border border-gray-200 rounded-lg px-4 py-3 text-base text-[#0B3D2E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16C060]/30 focus:border-[#16C060] transition-all" placeholder="Telefoonnummer" type="tel"/>
</div>
</div>

<div className="pt-4 flex flex-col items-center">
<button className="w-full bg-[#16C060] hover:bg-[#13A653] text-white text-base font-semibold px-8 py-4 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2" type="button">
                                Ontvang mijn voorstel
                                <iconify-icon className="mt-0.5" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<div className="text-xs text-[#0B3D2E]/50 mt-4 flex items-center justify-center gap-1.5">
<iconify-icon height="14" icon="solar:lock-password-linear" width="14"></iconify-icon>
                                Je gegevens zijn veilig bij ons
                            </div>
</div>
</form>
</div>
</div>
</div>
</main>

<div className="border-y bg-[#EAF3FF] z-10 border-[#D6E6FA] pt-5 pb-5 relative">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 lg:gap-16 text-base">

<div className="flex items-center gap-3">
<div className="font-semibold text-lg tracking-tight flex items-center">
<span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
</div>
<div className="flex gap-0.5 text-[#FBBC05]">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<span className="font-medium text-[#0B3D2E]">5.0 <span className="font-normal text-[#0B3D2E]/40 mx-1">|</span> 23 recensies</span>
</div>

<div className="flex flex-col md:flex-row items-center gap-6 lg:gap-10">
<div className="flex items-center gap-2.5 text-[#0B3D2E]">
<i className="w-5 h-5 text-[#16C060]" data-lucide="clipboard-list" strokeWidth="1.5"></i>
<span className=""><span className="text-[#2563EB] font-medium mr-0.5">Stap 1</span> Vul je wensen in</span>
</div>
<div className="flex items-center gap-2.5 text-[#0B3D2E]">
<i className="w-5 h-5 text-[#16C060]" data-lucide="phone" strokeWidth="1.5"></i>
<span><span className="text-[#2563EB] font-medium mr-0.5">Stap 2</span> Ontvang offertes op maat</span>
</div>
<div className="flex items-center gap-2.5 text-[#0B3D2E]">
<i className="w-5 h-5 text-[#16C060]" data-lucide="coins" strokeWidth="1.5"></i>
<span><span className="text-[#2563EB] font-medium mr-0.5">Stap 3</span> Kies de beste deal en bespaar</span>
</div>
</div>
</div>
</div>

<section className="lg:py-24 z-0 bg-[#F5F7F6] pt-16 pb-16 relative">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center">

<div className="bg-white rounded-full px-4 py-2 flex items-center shadow-sm border border-gray-100 mb-6 text-[#16C060] font-semibold text-sm">
                Wat onze leden zeggen
            </div>

<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#0B3D2E] mb-12 text-center">
                Echte ervaringen van onze community
            </h2>

<div className="flex items-center justify-center w-full gap-4 lg:gap-8">

<button className="hidden lg:flex w-12 h-12 items-center justify-center text-[#16C060] bg-white border border-gray-100 hover:border-[#16C060]/30 hover:bg-[#16C060]/5 rounded-full transition-all shrink-0 shadow-sm">
<i className="w-8 h-8" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>

<div className="flex gap-6 overflow-x-auto lg:grid lg:grid-cols-3 w-full snap-x snap-mandatory no-scrollbar pb-6 lg:pb-0">

<div className="bg-white rounded-2xl p-8 shadow-[0_20px_40px_-15px_rgba(11,61,46,0.1)] border border-gray-100 flex-1 min-w-[320px] lg:min-w-0 snap-center shrink-0">
<h3 className="font-semibold text-xl tracking-tight text-[#0B3D2E] mb-2">Peter</h3>
<div className="flex gap-1 text-[#16C060] mb-5">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-[#0B3D2E]/80 leading-relaxed">
                            Dankzij deze website heb ik snel de juiste installateur gevonden. De thuisbatterij hangt inmiddels en werkt perfect. Goed geholpen met het vergelijken!
                        </p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_20px_40px_-15px_rgba(11,61,46,0.1)] border border-gray-100 flex-1 min-w-[320px] lg:min-w-0 snap-center shrink-0">
<h3 className="font-semibold text-xl tracking-tight text-[#0B3D2E] mb-2">Steven Pasma</h3>
<div className="flex gap-1 text-[#16C060] mb-5">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-[#0B3D2E]/80 leading-relaxed">
                            Zeer tevreden! Duidelijke website en binnen no-time drie offertes ontvangen. Uiteindelijk gekozen voor een lokaal bedrijf dat de thuisbatterij vakkundig heeft geïnstalleerd.
                        </p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_20px_40px_-15px_rgba(11,61,46,0.1)] border border-gray-100 flex-1 min-w-[320px] lg:min-w-0 snap-center shrink-0">
<h3 className="font-semibold text-xl tracking-tight text-[#0B3D2E] mb-2">Nader I</h3>
<div className="flex gap-1 text-[#16C060] mb-5">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-[#0B3D2E]/80 leading-relaxed">
                            Heel makkelijk om verschillende merken en prijzen te vergelijken. De specialisten dachten goed mee over de benodigde capaciteit voor ons gezin. Aanrader als je een batterij zoekt!
                        </p>
</div>
</div>

<button className="hidden lg:flex w-12 h-12 items-center justify-center text-[#16C060] bg-white border border-gray-100 hover:border-[#16C060]/30 hover:bg-[#16C060]/5 rounded-full transition-all shrink-0 shadow-sm">
<i className="w-8 h-8" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex gap-2.5 mt-10">
<div className="w-2 h-2 rounded-full bg-[#16C060]"></div>
<div className="w-2 h-2 rounded-full bg-[#16C060]/20"></div>
<div className="w-2 h-2 rounded-full bg-[#16C060]/20"></div>
<div className="w-2 h-2 rounded-full bg-[#16C060]/20"></div>
<div className="w-2 h-2 rounded-full bg-[#16C060]/20"></div>
<div className="w-2 h-2 rounded-full bg-[#16C060]/20"></div>
<div className="w-2 h-2 rounded-full bg-[#16C060]/20"></div>
<div className="w-2 h-2 rounded-full bg-[#16C060]/20"></div>
</div>
</div>
</section>

<section className="lg:py-32 z-10 bg-white border-gray-100 border-t pt-20 pb-20 relative">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="w-full lg:w-1/2 shrink-0">
<img alt="Ons team van experts" className="aspect-[4/3] w-full h-auto object-cover border-gray-100 border rounded-2xl shadow-[0_20px_40px_-15px_rgba(11,61,46,0.1)]" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>

<div className="w-full lg:w-1/2 flex flex-col items-start">

<div className="bg-[#16C060]/10 text-[#16C060] font-semibold text-sm px-4 py-2 rounded-full mb-6 border border-[#16C060]/20">
                    100% onafhankelijk en gratis vergelijken
                </div>

<h2 className="lg:text-5xl leading-[1.15] text-4xl font-semibold text-[#0B3D2E] tracking-tight mb-6">
                    Vind de perfecte thuisbatterij en de beste installateur voor jouw woning.
                </h2>

<p className="leading-relaxed text-lg text-[#0B3D2E]/80 mb-6">
                    Je hebt besloten dat je een thuisbatterij wilt kopen, maar welk merk past bij jouw situatie? En welk installatiebedrijf in jouw regio levert de beste kwaliteit voor de scherpste prijs? Wij nemen dat zoekwerk voor je uit handen.
                </p>
<p className="leading-relaxed text-lg text-[#0B3D2E]/80 mb-10">
                    Via ons netwerk van erkende specialisten ontvang je eenvoudig meerdere offertes op maat. Zo vergelijk je niet alleen de prijzen, maar ook de specificaties van de batterijen en de voorwaarden van de installateurs. Zonder gedoe.
                </p>

<a className="bg-[#16C060] hover:bg-[#13A653] text-white text-lg font-semibold px-8 py-4 rounded-lg transition-colors shadow-sm inline-flex items-center gap-2" href="#formulier">
                    Vergelijk gratis offertes
                    <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="lg:py-32 z-10 bg-[#F5F7F6] border-gray-100 border-t pt-20 pb-20 relative">
<div className="max-w-[800px] mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#0B3D2E] mb-4">
                    Veelgestelde vragen
                </h2>
<p className="text-lg text-[#0B3D2E]/70">
                    Alles wat je moet weten over thuisbatterijen en het vergelijken van installateurs.
                </p>
</div>
<div className="divide-y divide-gray-200 border-y border-gray-200">

<details className="group py-6" open="">
<summary className="flex cursor-pointer items-center justify-between font-semibold text-lg text-[#0B3D2E] outline-none">
                        Welk merk thuisbatterij kan ik het beste kopen?
                        <span className="ml-4 shrink-0 transition-transform duration-200 group-open:-rotate-180 text-[#16C060]">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-[#0B3D2E]/80 text-base leading-relaxed pr-8">
                        Dat hangt af van je zonnepanelen, omvormer en energieverbruik. Merken zoals Sessy, Enphase, en Huawei zijn populair, maar onze aangesloten installateurs adviseren je graag over de beste match voor jouw systeem.
                    </div>
</details>

<details className="group py-6">
<summary className="flex cursor-pointer items-center justify-between font-semibold text-lg text-[#0B3D2E] outline-none">
                        Wat kost het laten installeren van een thuisbatterij?
                        <span className="ml-4 shrink-0 transition-transform duration-200 group-open:-rotate-180 text-[#16C060]">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-[#0B3D2E]/80 text-base leading-relaxed pr-8">
                        De prijzen variëren sterk op basis van de opslagcapaciteit (kWh) en het merk. Gemiddeld liggen de kosten tussen de €3.000 en €7.000 inclusief installatie. Door offertes te vergelijken bespaar je vaak tot wel 30% op de totaalprijs.
                    </div>
</details>

<details className="group py-6">
<summary className="flex cursor-pointer items-center justify-between font-semibold text-lg text-[#0B3D2E] outline-none">
                        Hoe kies ik de juiste installateur?
                        <span className="ml-4 shrink-0 transition-transform duration-200 group-open:-rotate-180 text-[#16C060]">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-[#0B3D2E]/80 text-base leading-relaxed pr-8">
                        Wij werken uitsluitend samen met gecertificeerde en ervaren installatiebedrijven. Let bij het vergelijken van de offertes op garanties, levertijden en reviews van het bedrijf om de beste keuze te maken.
                    </div>
</details>

<details className="group py-6">
<summary className="flex cursor-pointer items-center justify-between font-semibold text-lg text-[#0B3D2E] outline-none">
                        Zijn er kosten verbonden aan het vergelijken van offertes?
                        <span className="ml-4 shrink-0 transition-transform duration-200 group-open:-rotate-180 text-[#16C060]">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-[#0B3D2E]/80 text-base leading-relaxed pr-8">
                        Nee, het aanvragen en vergelijken van offertes via ons platform is 100% gratis en volledig vrijblijvend. Je zit nergens aan vast en bepaalt zelf of en met wie je in zee gaat.
                    </div>
</details>
</div>
<div className="mt-12 text-center">
<p className="text-base text-[#0B3D2E]/70 mb-4">Staat je vraag er niet tussen?</p>
<a className="text-[#16C060] font-semibold text-lg hover:text-[#13A653] transition-colors inline-flex items-center gap-1.5" href="#formulier">
                    Neem contact met ons op
                    <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-12 relative z-20">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">

<div className="flex items-center gap-1 text-xl tracking-tight">
<span className="font-semibold text-[#0B3D2E]">HELP MIJ</span>
<span className="font-semibold text-[#16C060]">BESPAREN</span>
</div>

<nav className="flex flex-wrap justify-center gap-6 md:gap-10">
<a className="text-sm font-medium text-[#0B3D2E]/70 hover:text-[#16C060] transition-colors" href="#">Privacybeleid</a>
<a className="text-sm font-medium text-[#0B3D2E]/70 hover:text-[#16C060] transition-colors" href="#">Algemene voorwaarden</a>
<a className="text-sm font-medium text-[#0B3D2E]/70 hover:text-[#16C060] transition-colors" href="#">Contact</a>
</nav>

<div className="text-sm text-[#0B3D2E]/50">
                    © 2023 Help mij besparen. Alle rechten voorbehouden.
                </div>
</div>
</div>
</footer>


    </>
  );
}
