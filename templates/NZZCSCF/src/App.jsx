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



    // Simple accordion logic
    function toggleFaq(idx) {
      for (let i = 0; i < 5; i++) {
        const content = document.getElementById('faq-content-' + i);
        const icon = document.getElementById('faq-icon-' + i);
        if (i === idx) {
          if (content.classList.contains('max-h-0')) {
            content.classList.remove('max-h-0');
            content.classList.add('max-h-60');
            icon.classList.add('rotate-180');
          } else {
            content.classList.add('max-h-0');
            content.classList.remove('max-h-60');
            icon.classList.remove('rotate-180');
          }
        } else {
          content.classList.add('max-h-0');
          content.classList.remove('max-h-60');
          icon.classList.remove('rotate-180');
        }
      }
    }
  
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
      

<div className="spline-container hidden md:block">
<iframe frameborder="0" height="100%" src="https://my.spline.design/claritystream-a72K0KUwFoZV82QBzvu52Kai/" width="100%"></iframe>
</div>

<div className="content-container flex flex-col min-h-screen">

<nav className="container mx-auto px-6 py-6">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="h-8 w-8 text-blue-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
</svg>
<span className="ml-3 text-xl tracking-tight">Clarity</span>
</div>
<div className="hidden md:flex space-x-10 text-sm text-gray-300">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Resources</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div>
<button className="text-sm border border-gray-700 rounded-md px-4 py-2 hover:bg-white/5 transition-all">
            Sign in
          </button>
</div>
</div>
</nav>

<div className="container md:pt-24 pt-16 px-6 flex-1">
<div className="flex flex-col max-w-3xl text-center mx-auto items-center">
<h1 className="md:text-6xl lg:text-7xl leading-tight text-5xl font-light tracking-tighter mb-6"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Jouw website </span>online in een week</h1>
<p className="md:text-2xl max-w-2xl text-xl font-light text-gray-300 tracking-wide mb-8">Wij bouwen een professionele website mét slimme chatbot die afspraken maakt, vragen beantwoordt en jouw klanten helpt — 24/7.
        </p>
<div className="flex flex-col sm:flex-row gap-4 mt-4">
<button className="bg-white text-black font-light rounded-md px-8 py-3 hover:bg-opacity-90 transition-all">
            Get started
          </button>
<a className="flex items-center text-gray-300 hover:text-white transition-colors py-3 px-2 group" href="#">
            Learn more
            <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
<div>
<p className="text-4xl font-light tracking-tight mb-1">25</p>
<p className="text-gray-400 font-extralight">Actieve klanten</p>
</div>
<div>
<p className="text-4xl font-light tracking-tight mb-1">€30</p>
<p className="text-gray-400 font-extralight">Per maand</p>
</div>
<div className="">
<p className="text-4xl font-light tracking-tight mb-1">24/7</p>
<p className="text-gray-400 font-extralight">Support beschikbaar</p>
</div>
<div>
<p className="text-4xl font-light tracking-tight mb-1">1 week</p>
<p className="text-gray-400 font-extralight">Levertijd</p>
</div>
</div>
</div>

<div className="w-full bg-gradient-to-b from-black/80 to-gray-900/90 border-white/10 border-t mt-24 pt-16 pb-20">
<div className="max-w-6xl mx-auto px-6">
<h2 className="md:text-4xl text-3xl font-light tracking-tight text-center mb-4">Features</h2>
<p className="text-lg text-gray-400 font-light text-center mb-12 max-w-2xl mx-auto">Ontdek de kracht van Clarity: alles wat je nodig hebt om online te groeien, direct beschikbaar.</p>
<div className="grid md:grid-cols-3 gap-10">

<div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
<svg className="h-8 w-8 mb-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 10c0-3.314-2.686-6-6-6s-6 2.686-6 6c0 4.418 6 10 6 10s6-5.582 6-10z" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="12" cy="10" fill="none" r="3" stroke="currentColor" strokeWidth="1.5"></circle>
</svg>
<h3 className="text-xl font-light mb-2 tracking-tight">Professioneel ontwerp</h3>
<p className="text-gray-400 font-extralight">Een unieke, moderne website die jouw merk laat stralen op ieder scherm.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
<svg className="h-8 w-8 mb-4 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<h3 className="text-xl font-light mb-2 tracking-tight">Slimme chatbot</h3>
<p className="text-gray-400 font-extralight">Automatische afspraken, antwoorden en support – altijd beschikbaar voor je bezoekers.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
<svg className="h-8 w-8 mb-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 17v-2a4 4 0 014-4h1a4 4 0 014 4v2M7 17v-2a6 6 0 016-6h1a6 6 0 016 6v2" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<h3 className="text-xl font-light mb-2 tracking-tight">Hosting &amp; support</h3>
<p className="text-gray-400 font-extralight">Razendsnelle hosting en persoonlijke support, zodat jij zorgeloos kunt ondernemen.</p>
</div>
</div>
</div>
</div>

<div className="w-full border-t border-white/10 bg-gradient-to-b from-gray-900/80 to-black/90 pt-16 pb-24">
<div className="max-w-5xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-center mb-4">Onze werkwijze</h2>
<p className="max-w-2xl text-lg font-light text-gray-400 text-center mr-auto mb-12 ml-auto">Zo zorgen wij dat uw website snel en zorgeloos online staat.</p>
<div className="flex flex-col md:flex-row md:justify-between gap-10">

<div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-8 py-10 flex flex-col items-center text-center">
<div className="flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-full mb-4">
<span className="text-blue-400 text-2xl font-semibold">1</span>
</div>
<h3 className="text-xl font-light mb-2 tracking-tight">Kennismaking &amp; intake</h3>
<p className="text-gray-400 font-extralight">We bespreken uw wensen en doelen. Zo krijgen we een helder beeld van wat u nodig hebt.</p>
</div>

<div className="flex-1 flex flex-col text-center bg-white/5 border-white/10 border rounded-xl pt-10 pr-8 pb-10 pl-8 items-center">
<div className="flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-full mb-4">
<span className="text-purple-400 text-2xl font-semibold">2</span>
</div>
<h3 className="text-xl font-light mb-2 tracking-tight">Ontwerp &amp; ontwikkeling</h3>
<p className="text-gray-400 font-extralight">Wij ontwerpen en bouwen uw website op maat. U krijgt tussentijds feedbackrondes.</p>
</div>

<div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-8 py-10 flex flex-col items-center text-center">
<div className="flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-full mb-4">
<span className="text-green-400 text-2xl font-semibold">3</span>
</div>
<h3 className="text-xl font-light mb-2 tracking-tight">Livegang &amp; support</h3>
<p className="text-gray-400 font-extralight">Na uw akkoord zetten we de website live. U krijgt uitleg en blijvende ondersteuning.</p>
</div>
</div>
</div>
</div>

<div className="w-full border-t border-white/10 bg-gradient-to-b from-black/90 to-gray-900/90 pt-16 pb-20">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-center mb-4">Wat onze klanten zeggen</h2>
<p className="text-lg text-gray-400 font-light text-center mb-12 max-w-2xl mx-auto">Onze klanten delen hun ervaringen met Clarity.</p>
<div className="grid gap-8 md:grid-cols-3">

<div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center">
<img alt="Klant 1" className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-blue-400" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&amp;q=80"/>
<p className="text-lg font-light mb-4 text-gray-200">"Binnen één week stond mijn nieuwe website live. De chatbot werkt geweldig en neemt mij veel werk uit handen."</p>
<div className="flex flex-col items-center">
<span className="font-semibold text-white tracking-tight">Sophie van Dijk</span>
<span className="text-gray-400 font-extralight text-sm">Eigenaar, Studio Sophie</span>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center">
<img alt="Klant 2" className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-purple-400" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<p className="text-lg font-light mb-4 text-gray-200">"Het contact verliep soepel, het ontwerp is prachtig en ik krijg uitstekende support. Echt een aanrader."</p>
<div className="flex flex-col items-center">
<span className="font-semibold text-white tracking-tight">Jeroen Bakker</span>
<span className="text-gray-400 font-extralight text-sm">Consultant</span>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center">
<img alt="Klant 3" className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-green-400" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<p className="text-lg font-light mb-4 text-gray-200">"De chatbot zorgt dat ik geen afspraken meer mis. Mijn klanten zijn enthousiast over de snelle reacties."</p>
<div className="flex flex-col items-center">
<span className="font-semibold text-white tracking-tight">Fatima El Amrani</span>
<span className="text-gray-400 font-extralight text-sm">Coach</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full bg-gradient-to-b from-gray-900/90 to-black/95 border-white/10 border-t pt-16 pb-24">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-center mb-4">Veelgestelde vragen</h2>
<p className="text-lg text-gray-400 font-light text-center mb-10 max-w-2xl mx-auto">Antwoorden op de meest gestelde vragen over onze dienst.</p>
<div className="divide-y divide-white/10 border border-white/10 rounded-xl bg-white/5">

<div className="group">
<button className="flex w-full items-center justify-between px-6 py-5 focus:outline-none focus:bg-white/10 transition" onclick="toggleFaq(0)" type="button">
<span className="text-left text-base md:text-lg font-light text-white">Hoe snel staat mijn website online?</span>
<svg className="w-6 h-6 text-blue-400 transition-transform duration-200" fill="none" id="faq-icon-0" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 px-6 text-gray-300 font-extralight" id="faq-content-0">
<div className="pb-6">Na onze intake staat jouw website meestal binnen één week online, afhankelijk van de gewenste functionaliteiten.</div>
</div>
</div>

<div className="group">
<button className="flex w-full items-center justify-between px-6 py-5 focus:outline-none focus:bg-white/10 transition" onclick="toggleFaq(1)" type="button">
<span className="text-left text-base md:text-lg font-light text-white">Kan ik mijn website later nog aanpassen?</span>
<svg className="w-6 h-6 text-blue-400 transition-transform duration-200" fill="none" id="faq-icon-1" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 px-6 text-gray-300 font-extralight" id="faq-content-1">
<div className="pb-6">Zeker! Kleine wijzigingen zijn inbegrepen. Voor grote aanpassingen bespreken we graag de mogelijkheden en kosten.</div>
</div>
</div>

<div className="group">
<button className="flex w-full items-center justify-between px-6 py-5 focus:outline-none focus:bg-white/10 transition" onclick="toggleFaq(2)" type="button">
<span className="text-left text-base md:text-lg font-light text-white">Hoe werkt de slimme chatbot?</span>
<svg className="w-6 h-6 text-blue-400 transition-transform duration-200" fill="none" id="faq-icon-2" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 px-6 text-gray-300 font-extralight" id="faq-content-2">
<div className="pb-6">De chatbot maakt automatisch afspraken, beantwoordt vragen en kan worden aangepast aan jouw specifieke wensen en diensten.</div>
</div>
</div>

<div className="group">
<button className="flex w-full items-center justify-between px-6 py-5 focus:outline-none focus:bg-white/10 transition" onclick="toggleFaq(3)" type="button">
<span className="text-left text-base md:text-lg font-light text-white">Wat zit er in het maandelijkse abonnement?</span>
<svg className="w-6 h-6 text-blue-400 transition-transform duration-200" fill="none" id="faq-icon-3" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 px-6 text-gray-300 font-extralight" id="faq-content-3">
<div className="pb-6">Hosting, onderhoud, support en updates zijn inbegrepen. Zo ben je altijd verzekerd van een veilige en snelle website.</div>
</div>
</div>

<div className="group">
<button className="flex w-full items-center justify-between px-6 py-5 focus:outline-none focus:bg-white/10 transition" onclick="toggleFaq(4)" type="button">
<span className="text-left text-base md:text-lg font-light text-white">Kan ik overstappen vanaf een andere website?</span>
<svg className="w-6 h-6 text-blue-400 transition-transform duration-200" fill="none" id="faq-icon-4" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 px-6 text-gray-300 font-extralight" id="faq-content-4">
<div className="pb-6">Ja, wij helpen je graag met het overzetten van je bestaande website en domein naar ons platform.</div>
</div>
</div>
</div>
</div>
</div>

</div>


    </>
  );
}
