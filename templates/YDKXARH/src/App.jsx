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

<nav className="container mx-auto pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:items-center">
<div className="flex items-center mb-2 md:mb-0 md:mr-8"></div>
<div className="flex text-base md:text-lg text-gray-300 space-x-10 mb-2 md:mb-0 md:mr-8">
<a className="hover:text-white transition-colors font-normal" href="#features">Features</a>
<a className="hover:text-white transition-colors font-normal" href="#werkwijze">Ons proces</a>
<a className="hover:text-white transition-colors font-normal" href="#prijzen">Tarieven</a>
<a className="hover:text-white transition-colors font-normal" href="#faq">FAQ</a>
</div>
<div className=""></div>
</div>
</nav>

<section className="flex flex-1 min-h-[70vh] items-center justify-center">
<div className="container flex flex-col max-w-3xl text-center pt-16 pr-6 pb-10 pl-6 items-center justify-center">
<h1 className="md:text-6xl lg:text-7xl leading-tight text-5xl font-light tracking-tighter mt-6 mb-4">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Jouw website </span>online in een week
        </h1>
<p className="md:text-2xl max-w-2xl text-xl font-light text-gray-300 tracking-wide mb-8">
          Wij bouwen een professionele website mét slimme chatbot die afspraken maakt, vragen beantwoordt en jouw klanten helpt — 24/7.
        </p>
<div className="flex flex-col sm:flex-row gap-4 mt-2 w-full justify-center">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-normal text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all rounded-md pt-3 pr-8 pb-3 pl-8 shadow-lg text-base tracking-tight" href="#cta-aanvraag">
<svg className="lucide lucide-calendar-check w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
            Boek een meeting
          </a>
<a className="hover:bg-white/10 border border-white/10 rounded-md pt-3 pr-8 pb-3 pl-8 text-white font-normal transition-all flex items-center justify-center gap-2" href="#demo">
<svg className="lucide lucide-laptop w-5 h-5 text-blue-400" data-lucide="laptop" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path><path d="M20.054 15.987H3.946"></path></svg>
            Live demo
          </a>
</div>
<p className="text-gray-400 font-extralight text-base mt-3">Vrijblijvend kennismaken? Plan direct een gesprek in!</p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
<div className="">
<p className="text-4xl font-light tracking-tight mb-1">25</p>
<p className="text-gray-400 font-extralight">Actieve klanten</p>
</div>
<div className="">
<p className="text-4xl font-light tracking-tight mb-1">€30</p>
<p className="text-gray-400 font-extralight">Per maand</p>
</div>
<div className="">
<p className="text-4xl font-light tracking-tight mb-1">All in one</p>
<p className="text-gray-400 font-extralight">Wij regelen alles</p>
</div>
<div className="">
<p className="text-4xl font-light tracking-tight mb-1">1 week</p>
<p className="text-gray-400 font-extralight">Levertijd</p>
</div>
</div>
</div>
</section>

<section className="w-full bg-gradient-to-b from-black/90 to-gray-900/90 pt-20 pb-20" id="demo">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 mb-8 md:mb-0">
<h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Live demo &amp; Voorbeelden</h2>
<p className="text-lg text-gray-400 font-light mb-8 max-w-md">Bekijk hoe jouw toekomstige website eruit kan zien en probeer onze slimme chatbot live!</p>
<a className="inline-flex items-center gap-2 py-3 px-8 bg-blue-500 hover:bg-blue-600 text-white font-normal rounded-md shadow-lg transition-all mb-4" href="https://demo.reza-solutions.nl" target="_blank">
<svg className="lucide lucide-play-circle w-6 h-6" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
              Live demo
            </a>
</div>
<div className="flex-1 grid grid-cols-2 gap-5 w-full max-w-lg">
<img alt="Voorbeeld site 1" className="rounded-xl shadow-lg border border-white/10 object-cover w-full h-36 md:h-40" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=600&amp;q=80"/>
<img alt="Voorbeeld site 2" className="rounded-xl shadow-lg border border-white/10 object-cover w-full h-36 md:h-40" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=600&amp;q=80"/>
<img alt="Voorbeeld site 3" className="rounded-xl shadow-lg border border-white/10 object-cover w-full h-36 md:h-40" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=600&amp;q=80"/>
<img alt="Voorbeeld site 4" className="rounded-xl shadow-lg border border-white/10 object-cover w-full h-36 md:h-40" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=600&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="transition-all duration-700 w-full bg-gradient-to-b from-black/80 to-gray-900/90 pt-16 pb-20 opacity-100 translate-y-0" id="features">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-center mb-2">Features</h2>
<p className="max-w-2xl text-lg font-light text-gray-400 text-center mx-auto mb-12">Ontdek de kracht van REZA: alles wat je nodig hebt om online te groeien, direct beschikbaar.</p>
<div className="grid md:grid-cols-3 gap-10">

<div className="flex flex-col hover:shadow-xl transition-shadow text-center bg-white/5 border-white/10 border rounded-xl pt-8 pr-8 pb-8 pl-8 items-center">
<svg className="lucide lucide-trello mb-4 w-[32px] h-[32px]" data-lucide="trello" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(96, 165, 250)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><rect height="9" width="3" x="7" y="7"></rect><rect height="5" width="3" x="14" y="7"></rect></svg>
<h3 className="text-xl font-light mb-2 tracking-tight">Professioneel ontwerp</h3>
<p className="text-gray-400 font-extralight">Een unieke, moderne website die jouw merk laat stralen op ieder scherm.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
<svg className="lucide lucide-user mb-4 w-[32px] h-[32px]" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(192, 132, 252)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<h3 className="text-xl font-light mb-2 tracking-tight">Slimme chatbot</h3>
<p className="text-gray-400 font-extralight">Automatische afspraken, antwoorden en support – altijd beschikbaar voor je bezoekers.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
<svg className="lucide lucide-globe mb-4 w-[32px] h-[32px]" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(74, 222, 128)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<h3 className="text-xl font-light mb-2 tracking-tight">Hosting &amp; support</h3>
<p className="text-gray-400 font-extralight">Razendsnelle hosting en persoonlijke support, zodat jij zorgeloos kunt ondernemen.</p>
</div>
</div>
<div className="flex justify-center mt-12">
<a className="inline-flex items-center gap-2 font-normal text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all rounded-md pt-3 pr-8 pb-3 pl-8 shadow-lg text-base tracking-tight" href="#cta-aanvraag">
<svg className="lucide lucide-calendar-check w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
            Boek een meeting
          </a>
</div>
</div>
</section>

<section className="transition-all duration-700 w-full bg-gradient-to-b from-gray-900/80 to-black/90 pt-16 pb-24 opacity-100 translate-y-0" id="werkwijze">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-center mb-2">Onze werkwijze</h2>
<p className="text-lg text-gray-400 font-light text-center mb-12 max-w-2xl mx-auto">Zo zorgen wij dat jouw website snel en zorgeloos online staat.</p>
<div className="flex flex-col md:flex-row md:justify-between gap-10">

<div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-8 py-10 flex flex-col items-center text-center">
<div className="flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-full mb-4">
<span className="text-blue-400 text-2xl font-semibold">1</span>
</div>
<h3 className="text-xl font-light mb-2 tracking-tight">Kennismaking &amp; intake</h3>
<p className="text-gray-400 font-extralight">We bespreken jouw wensen en doelen. Zo krijgen we een helder beeld van wat je nodig hebt.</p>
</div>

<div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-8 py-10 flex flex-col items-center text-center">
<div className="flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-full mb-4">
<span className="text-purple-400 text-2xl font-semibold">2</span>
</div>
<h3 className="text-xl font-light mb-2 tracking-tight">Ontwerp &amp; ontwikkeling</h3>
<p className="text-gray-400 font-extralight">Wij ontwerpen en bouwen jouw website op maat. Je krijgt tussentijds feedbackrondes.</p>
</div>

<div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-8 py-10 flex flex-col items-center text-center">
<div className="flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-full mb-4">
<span className="text-green-400 text-2xl font-semibold">3</span>
</div>
<h3 className="text-xl font-light mb-2 tracking-tight">Livegang &amp; support</h3>
<p className="text-gray-400 font-extralight">Na jouw akkoord zetten we de website live. Je krijgt uitleg en blijvende ondersteuning.</p>
</div>
</div>
<div className="flex justify-center mt-12">
<a className="inline-flex items-center gap-2 font-normal text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all rounded-md pt-3 pr-8 pb-3 pl-8 shadow-lg text-base tracking-tight" href="#cta-aanvraag">
<svg className="lucide lucide-calendar-check w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
            Boek een meeting
          </a>
</div>
</div>
</section>

<section className="transition-all duration-700 w-full bg-black pt-20 pb-24 opacity-100 translate-y-0" id="prijzen">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-center mb-2">Tarieven</h2>
<p className="text-lg text-gray-400 font-light text-center mb-12 max-w-2xl mx-auto">Transparant en eerlijk: kies het pakket dat bij jou past.</p>
<div className="grid gap-8 md:grid-cols-3">

<div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center">
<h3 className="text-xl font-light tracking-tight mb-2">Basis</h3>
<p className="text-4xl font-light mb-2 tracking-tight">€30<span className="text-base font-extralight text-gray-400">/maand</span></p>
<ul className="text-gray-300 font-extralight text-left mt-4 mb-8 space-y-2">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Professionele website</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Mobiel vriendelijk</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Incl hosting en domein</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Basis support</li>
</ul>
<a className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-light rounded-md py-2 hover:from-blue-600 hover:to-purple-600 transition-all" href="#cta-aanvraag">
<svg className="lucide lucide-calendar-check w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
              Start Basis
            </a>
</div>

<div className="flex flex-col z-10 text-center bg-gradient-to-br from-blue-500/10 to-purple-600/10 border-blue-400/30 border rounded-xl pt-8 pr-8 pb-8 pl-8 shadow-lg scale-105 items-center">
<h3 className="text-xl font-light tracking-tight mb-2 text-blue-300">Plus</h3>
<p className="text-4xl font-light tracking-tight mb-2">€50<span className="text-base text-gray-400 font-extralight">/maand</span></p>
<ul className="text-gray-200 font-extralight text-left mt-4 mb-8 space-y-2">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Alles van Basis</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Slimme chatbot</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Online afspraken</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Snelle support</li>
</ul>
<a className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-light rounded-md py-2 hover:from-blue-600 hover:to-purple-600 transition-all" href="#cta-aanvraag">
<svg className="lucide lucide-calendar-check w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
              Start Plus
            </a>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center">
<h3 className="text-xl font-light tracking-tight mb-2">Premium</h3>
<p className="text-4xl font-light tracking-tight mb-2">€70<span className="text-base font-extralight text-gray-400">/maand</span></p>
<ul className="text-gray-300 font-extralight text-left mt-4 mb-8 space-y-2">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Alles van Plus</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Uitgebreide integraties</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Persoonlijk advies</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Prioriteit support</li>
</ul>
<a className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-light rounded-md py-2 hover:from-blue-600 hover:to-purple-600 transition-all" href="#cta-aanvraag">
<svg className="lucide lucide-calendar-check w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
              Start Premium
            </a>
</div>
</div>
</div>
</section>

<section className="w-full bg-gradient-to-b from-black to-gray-900 pt-20 pb-24" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-center mb-2">Veelgestelde vragen</h2>
<p className="text-lg text-gray-400 font-light text-center mb-10 max-w-2xl mx-auto">Staat jouw vraag er niet tussen? Neem gerust contact met ons op.</p>
<div className="divide-y divide-white/10 border border-white/10 rounded-xl bg-white/5">
<div className="p-6">
<h3 className="text-base md:text-lg font-light mb-2">Hoe snel staat mijn website online?</h3>
<p className="text-gray-300 font-extralight">Gemiddeld staat jouw website binnen één week online, afhankelijk van hoe snel wij jouw input en feedback ontvangen.</p>
</div>
<div className="p-6">
<h3 className="text-base md:text-lg font-light mb-2">Kan ik mijn website zelf aanpassen?</h3>
<p className="text-gray-300 font-extralight">Ja, je kunt eenvoudig tekst, afbeeldingen en andere inhoud aanpassen via een gebruiksvriendelijk beheerportaal.</p>
</div>
<div className="p-6">
<h3 className="text-base md:text-lg font-light mb-2">Zit er support bij in?</h3>
<p className="text-gray-300 font-extralight">Ja, support en updates zijn inbegrepen. Wij zorgen dat alles soepel blijft werken.</p>
</div>
<div className="p-6">
<h3 className="text-base md:text-lg font-light mb-2">Kan ik later upgraden?</h3>
<p className="text-gray-300 font-extralight">Je kunt altijd upgraden naar een uitgebreider pakket. Neem gerust contact op voor de mogelijkheden.</p>
</div>
</div>
</div>
</section>
</div>

    </>
  );
}
