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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.getElementById('toggle-reviews-btn').addEventListener('click', function() {
            const moreReviews = document.getElementById('more-reviews');
            const fadeOverlay = document.getElementById('review-fade');
            const btnText = document.getElementById('toggle-btn-text');
            const btnIcon = document.getElementById('toggle-btn-icon');
            const isHidden = moreReviews.classList.contains('hidden');

            if (isHidden) {
                moreReviews.classList.remove('hidden');
                fadeOverlay.classList.add('hidden');
                btnText.innerText = 'Toon minder reviews';
                btnIcon.setAttribute('icon', 'solar:alt-arrow-up-linear');
                this.setAttribute('aria-expanded', 'true');
            } else {
                moreReviews.classList.add('hidden');
                fadeOverlay.classList.remove('hidden');
                btnText.innerText = 'Lees meer Google reviews';
                btnIcon.setAttribute('icon', 'solar:alt-arrow-down-linear');
                this.setAttribute('aria-expanded', 'false');
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
      

<div className="w-full bg-[#f4f5f7] border-b border-gray-200" role="banner">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6">
<div className="flex items-center justify-start lg:justify-center gap-6 sm:gap-10 py-2.5 overflow-x-auto whitespace-nowrap text-sm text-gray-800 [&amp;::-webkit-scrollbar]:hidden" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<div className="flex items-center gap-2 shrink-0">
<svg className="text-[#5a2270]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m15 9-6 6"></path><path d="M9 9h.01"></path><path d="M15 15h.01"></path></svg>
<span className="font-medium">Scherpe tarieven <span className="text-gray-500 font-normal hidden md:inline ml-1">- Met onze tarieven kunt u tot wel 35% besparen op uw huidige koerierskosten!</span></span>
</div>

<div className="flex items-center gap-2 shrink-0">
<svg className="text-[#5a2270]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span className="font-medium">24/7 beschikbaar</span>
</div>

<div className="flex items-center gap-2 shrink-0">
<svg className="text-[#5a2270]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
<span className="font-medium">Snelle en efficiënte levering</span>
</div>

<div className="flex items-center gap-2 shrink-0">
<svg className="text-[#5a2270]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-3 5.99-5a2 2 0 0 1 2.02 0C15 2 17 4 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-medium">Veilige verzending</span>
</div>
</div>
</div>
</div>

<header aria-label="Hoofdnavigatie" className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm" role="navigation">
<div className="flex font-roboto h-20 max-w-[1400px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a aria-label="Top Koeriers Home" className="flex flex-col leading-none p-1" href="/">
<span aria-hidden="true" className="text-xl font-medium text-[#e33824] tracking-tight uppercase">Top</span>
<span aria-hidden="true" className="-mt-1 uppercase text-xl font-medium text-[#5a2270] tracking-tight">Koeriers</span>
</a>

<nav className="hidden xl:flex items-center gap-8 text-base font-medium text-gray-700">
<a className="hover:text-[#5a2270] transition-colors py-2" href="#">Over ons</a>
<a className="hover:text-[#5a2270] transition-colors py-2" href="#">Hoe werkt het?</a>
<a className="hover:text-[#5a2270] transition-colors py-2" href="#">Koeriersdiensten</a>
<a className="hover:text-[#5a2270] transition-colors py-2" href="#">Tarieven</a>
<a className="hover:text-[#5a2270] transition-colors py-2" href="#">Referenties</a>
<a className="hover:text-[#5a2270] transition-colors py-2" href="#">Contact</a>
<a className="hover:text-[#5a2270] transition-colors py-2" href="#">Vacatures</a>
</nav>

<div className="flex items-center gap-6">
<button aria-label="Zoeken" className="text-gray-600 hover:text-gray-900 transition-colors hidden sm:flex items-center justify-center p-2 rounded-full hover:bg-gray-50">
<iconify-icon aria-hidden="true" height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button aria-expanded="false" aria-label="Menu openen" className="xl:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-md flex items-center justify-center">
<iconify-icon aria-hidden="true" height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-grow" id="main-content">

<section aria-labelledby="hero-heading" className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-[#f4f5f7] py-12 lg:py-0">

<img alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale" src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div aria-hidden="true" className="bg-gradient-to-br from-[#f4f5f7]/95 via-[#f4f5f7]/80 to-white/60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 w-full max-w-[1400px] mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">

<div className="lg:w-7/12 order-1 w-full">
<div className="inline-flex gap-2 text-sm font-medium text-[#5a2270] bg-white border border-gray-200 rounded-full mb-8 py-1.5 px-3.5 items-center shadow-sm" role="status">
<span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#00A650] animate-pulse"></span>
                        Direct koeriers beschikbaar in uw regio
                    </div>
<h1 className="sm:text-6xl lg:text-7xl leading-[1.1] text-5xl font-medium text-gray-900 tracking-tight font-roboto mb-8" id="hero-heading">
                        Uw spoedzending, <br className=""/>
<span className="text-[#5a2270] font-roboto">onze prioriteit.</span>
</h1>
<ul className="flex flex-col gap-4 mb-10">
<li className="flex gap-3 items-start">
<div className="flex shrink-0 bg-[#00A650] w-[22px] h-[22px] rounded-full mt-0.5 shadow-sm items-center justify-center">
<svg aria-hidden="true" className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg sm:text-xl text-gray-700 font-normal font-roboto leading-snug">Snelle en betrouwbare bezorging van uw (medische) zending binnen afgesproken tijd</span>
</li>
<li className="flex items-start gap-3">
<div className="w-[22px] h-[22px] mt-0.5 rounded-full bg-[#00A650] flex items-center justify-center shrink-0 shadow-sm">
<svg aria-hidden="true" className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg sm:text-xl text-gray-700 font-normal font-roboto leading-snug">Zorgvuldige, persoonlijke levering via dedicated ritten van A naar B</span>
</li>
<li className="flex items-start gap-3">
<div className="w-[22px] h-[22px] mt-0.5 rounded-full bg-[#00A650] flex items-center justify-center shrink-0 shadow-sm">
<svg aria-hidden="true" className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg sm:text-xl text-gray-700 font-normal font-roboto leading-snug">Altijd transparant: geen extra toeslagen voor nachten of weekenden</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2 border-t border-gray-200 max-w-xl">
<div className="flex items-center gap-3">
<div aria-hidden="true" className="flex text-[#fbbc04] gap-0.5">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<div className="text-base font-medium text-gray-900">
<span className="font-medium text-xl">4.8</span>
<span className="text-gray-500 font-normal"> /5 (1.250+ reviews)</span>
</div>
</div>
<div aria-hidden="true" className="hidden sm:block w-px h-6 bg-gray-300"></div>
<div className="flex items-center gap-2 text-base font-medium text-gray-800">
<svg aria-hidden="true" className="text-[#00A650]" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
                            NIWO Erkend &amp; ISO Gecertificeerd
                        </div>
</div>
</div>

<div className="w-full lg:w-[480px] shrink-0 order-2 relative mt-4 lg:mt-0">
<div className="-top-4 whitespace-nowrap z-0 text-sm font-medium text-white bg-[#e33824] rounded-t-lg pt-1.5 pr-4 pb-1.5 pl-4 absolute right-6 shadow-sm">
                        Binnen 15 min reactie
                    </div>
<div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full border border-gray-200 relative z-10">
<div aria-label="Voortgang aanvraag" className="mb-6">
<div className="flex items-center justify-between mb-3 text-sm tracking-widest uppercase font-medium">
<span className="text-[#5a2270]">Vrijblijvende Offerte</span>
<span className="text-gray-600">Stap 1 van 3</span>
</div>
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="33" className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden" role="progressbar">
<div className="bg-[#5a2270] h-full rounded-full w-1/3 transition-all duration-500 ease-out"></div>
</div>
</div>
<div className="mb-8">
<h2 className="text-3xl font-medium text-gray-900 tracking-tight font-roboto mb-2">
                                Wat voor type transport heeft u nodig?
                            </h2>
<p className="text-lg text-gray-600 font-normal leading-relaxed">
                                Kies uw type zending. U ziet direct uw vrijblijvende ritprijs, waarna u deze direct kunt vastleggen.
                            </p>
</div>
<div aria-label="Kies uw transport type" className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6" role="group">
<a aria-label="Kies Spoed transport" className="quiz-tile flex flex-col items-center justify-center p-5 rounded-xl border border-gray-300 bg-white hover:border-[#5a2270]/60 hover:bg-purple-50/40 text-center group" href="#step-2">
<div className="w-10 h-10 mb-3 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-purple-100 transition-colors text-gray-600 group-hover:text-[#5a2270]">
<iconify-icon aria-hidden="true" height="24" icon="solar:routing-2-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-medium text-gray-800 group-hover:text-[#5a2270]">Spoed transport</span>
</a>
<a aria-label="Kies Medisch transport" className="quiz-tile flex flex-col items-center justify-center p-5 rounded-xl border border-gray-300 bg-white hover:border-[#5a2270]/60 hover:bg-purple-50/40 text-center group" href="#step-2">
<div className="w-10 h-10 mb-3 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-purple-100 transition-colors text-gray-600 group-hover:text-[#5a2270]">
<iconify-icon aria-hidden="true" height="24" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-medium text-gray-800 group-hover:text-[#5a2270]">Medisch transport</span>
</a>
<a aria-label="Kies Logistiek transport" className="quiz-tile flex flex-col items-center justify-center p-5 rounded-xl border border-gray-300 bg-white hover:border-[#5a2270]/60 hover:bg-purple-50/40 text-center group" href="#step-2">
<div className="w-10 h-10 mb-3 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-purple-100 transition-colors text-gray-600 group-hover:text-[#5a2270]">
<iconify-icon aria-hidden="true" height="24" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-medium text-gray-800 group-hover:text-[#5a2270]">Logistiek transport</span>
</a>
<a aria-label="Kies Pakket transport" className="quiz-tile flex flex-col items-center justify-center p-5 rounded-xl border border-gray-300 bg-white hover:border-[#5a2270]/60 hover:bg-purple-50/40 text-center group" href="#step-2">
<div className="w-10 h-10 mb-3 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-purple-100 transition-colors text-gray-600 group-hover:text-[#5a2270]">
<iconify-icon aria-hidden="true" height="24" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-medium text-gray-800 group-hover:text-[#5a2270]">Pakket transport</span>
</a>
</div>
<div className="flex items-start gap-3 text-sm text-gray-700 bg-gray-100 p-4 rounded-lg">
<iconify-icon aria-hidden="true" className="shrink-0 mt-0.5 text-[#5a2270]" height="18" icon="solar:info-circle-linear" width="18"></iconify-icon>
<p className="leading-relaxed font-medium text-base">Uw gegevens zijn veilig. Aanvragen worden direct behandeld door onze centrale planning (08:00 - 17:00).</p>
</div>
</div>
</div>
</div>
<div className="absolute bottom-8 right-8 z-10 hidden sm:flex items-center gap-3">
<span aria-hidden="true" className="text-gray-500 text-sm font-medium tracking-widest uppercase">Achtergrondvideo</span>
<button aria-label="Video pauzeren" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all text-gray-600">
<iconify-icon aria-hidden="true" height="14" icon="solar:pause-linear" width="14"></iconify-icon>
</button>
</div>
</section>

<section className="py-20 lg:py-28 bg-[#f4f5f7] border-t border-gray-200">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 mb-6 font-roboto">Wat onze klanten zeggen</h2>
<div className="flex flex-col sm:flex-row items-center gap-4 bg-white px-6 py-4 rounded-full shadow-sm border border-gray-100">
<div className="flex items-center gap-3 border-r-0 sm:border-r border-gray-200 pr-0 sm:pr-4">
<iconify-icon aria-hidden="true" height="24" icon="logos:google-icon" width="24"></iconify-icon>
<span className="text-2xl font-medium text-gray-900 tracking-tight">Google</span>
</div>
<div className="flex items-center gap-3">
<span className="text-2xl font-medium text-gray-900">4.8</span>
<div aria-label="4.8 van 5 sterren" className="flex text-[#fbbc04] gap-0.5">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="" height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<svg fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#half-star)"></path><defs><lineargradient id="half-star" x1="0%" x2="100%" y1="0%" y2="0%"><stop offset="80%" stop-color="#fbbc04"></stop><stop offset="80%" stop-color="#e5e7eb"></stop></lineargradient></defs></svg>
</div>
<span className="text-lg font-normal text-gray-500">1.250+ reviews</span>
</div>
</div>
</div>
<div className="relative">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col gap-4 hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1da462] text-white flex items-center justify-center font-medium text-lg">MP</div>
<div className="flex flex-col">
<span className="font-medium text-lg text-gray-900">Mark Peters</span>
<span className="text-base text-gray-500">2 weken geleden</span>
</div>
</div>
<iconify-icon aria-hidden="true" height="20" icon="logos:google-icon" width="20"></iconify-icon>
</div>
<div className="flex text-[#fbbc04] gap-0.5">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg text-gray-700 leading-relaxed font-normal">
                                "Top service! Binnen een half uur na de aanvraag stond er al een koerier klaar voor onze spoedzending naar Parijs. Chauffeur hield ons goed op de hoogte. Zeker een aanrader."
                            </p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col gap-4 hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#e33824] text-white flex items-center justify-center font-medium text-lg">S</div>
<div className="flex flex-col">
<span className="font-medium text-lg text-gray-900">Sandra van Dijk</span>
<span className="text-base text-gray-500">1 maand geleden</span>
</div>
</div>
<iconify-icon aria-hidden="true" height="20" icon="logos:google-icon" width="20"></iconify-icon>
</div>
<div className="flex text-[#fbbc04] gap-0.5">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg text-gray-700 leading-relaxed font-normal">
                                "Erg betrouwbare partner voor onze medische transporten. De pakketten worden altijd keurig op de juiste temperatuur en stipt op tijd afgeleverd."
                            </p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col gap-4 hover:shadow-md transition-shadow hidden md:flex">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#4285f4] text-white flex items-center justify-center font-medium text-lg">LJ</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-medium text-lg text-gray-900">Logistics Jan</span>
<span className="text-sm text-gray-500 flex items-center gap-0.5"><iconify-icon className="text-gray-400" height="10" icon="solar:star-bold" width="10"></iconify-icon> Local Guide</span>
</div>
<span className="text-base text-gray-500">2 maanden geleden</span>
</div>
</div>
<iconify-icon aria-hidden="true" height="20" icon="logos:google-icon" width="20"></iconify-icon>
</div>
<div className="flex text-[#fbbc04] gap-0.5">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg text-gray-700 leading-relaxed font-normal">
                                "Helder portaal, duidelijke tarieven en geen verrassingen of nare brandstoftoeslagen achteraf. Precies wat je verwacht van een professioneel koeriersbedrijf."
                            </p>
</div>
</div>
<div className="hidden" id="more-reviews">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col gap-4 hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#5a2270] text-white flex items-center justify-center font-medium text-lg">R</div>
<div className="flex flex-col">
<span className="font-medium text-lg text-gray-900">Robert K.</span>
<span className="text-base text-gray-500">3 maanden geleden</span>
</div>
</div>
<iconify-icon aria-hidden="true" height="20" icon="logos:google-icon" width="20"></iconify-icon>
</div>
<div className="flex text-[#fbbc04] gap-0.5">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg text-gray-700 leading-relaxed font-normal">
                                    "Vriendelijke chauffeurs en bijzonder snelle reactie vanuit de klantenservice. Ik moest last-minute op vrijdagavond nog iets verzenden, en dat werd direct opgepakt."
                                </p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col gap-4 hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#fbbc04] text-white flex items-center justify-center font-medium text-lg">TD</div>
<div className="flex flex-col">
<span className="font-medium text-lg text-gray-900">Tim Drost</span>
<span className="text-base text-gray-500">4 maanden geleden</span>
</div>
</div>
<iconify-icon aria-hidden="true" height="20" icon="logos:google-icon" width="20"></iconify-icon>
</div>
<div className="flex text-[#fbbc04] gap-0.5">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg text-gray-700 leading-relaxed font-normal">
                                    "Wij werken al jaren wekelijks samen voor onze landelijke distributie. Eigenlijk nog nooit problemen ervaren, doen precies wat ze beloven."
                                </p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col gap-4 hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1da462] text-white flex items-center justify-center font-medium text-lg">B</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-medium text-lg text-gray-900">Basit M.</span>
<span className="text-sm text-gray-500 flex items-center gap-0.5"><iconify-icon className="text-gray-400" height="10" icon="solar:star-bold" width="10"></iconify-icon> Local Guide</span>
</div>
<span className="text-base text-gray-500">5 maanden geleden</span>
</div>
</div>
<iconify-icon aria-hidden="true" height="20" icon="logos:google-icon" width="20"></iconify-icon>
</div>
<div className="flex text-[#fbbc04] gap-0.5">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg text-gray-700 leading-relaxed font-normal">
                                    "Geweldige communicatie. Rit geboekt via de portal en ik kon de chauffeur live volgen. Afleverbevestiging was ook heel fijn."
                                </p>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f4f5f7] to-transparent pointer-events-none" id="review-fade"></div>
</div>
<div className="flex justify-center mt-2 relative z-10">
<button aria-controls="more-reviews" aria-expanded="false" className="flex items-center gap-2 px-6 py-2.5 bg-white border border-[#5a2270] text-[#5a2270] hover:bg-purple-50 rounded-full text-lg font-medium transition-colors shadow-sm" id="toggle-reviews-btn">
<span className="" id="toggle-btn-text">Lees meer +99 Google reviews</span>
<iconify-icon aria-hidden="true" className="" height="18" icon="solar:alt-arrow-down-linear" id="toggle-btn-icon" width="18"></iconify-icon>
</button>
</div>
</div>
</section><section aria-labelledby="process-heading" className="lg:py-24 bg-white pt-16 pb-16">
<div className="max-w-[1400px] mx-auto px-6">

<div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-[#5a2270] text-base font-medium mb-6 shadow-sm border border-purple-100/50">
<svg className="lucide lucide-shield-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-3 5.99-5a2 2 0 0 1 2.02 0C15 2 17 4 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                        Vertrouwd door 5.000+ zakelijke klanten
                    </div>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#5a2270] uppercase mb-6 font-roboto" id="process-heading">
                        Zo garanderen wij zorgvuldig, snel transport
                    </h2>
<p className="text-xl text-gray-600 leading-relaxed font-normal">
                        Een zending veilig, snel én persoonlijk van opdrachtgever naar ontvanger brengen is al ruim 30 jaar onze specialiteit. Ontdek onze transparante en beproefde werkwijze.
                    </p>
</div>

<div className="relative max-w-6xl mx-auto mb-16">

<div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-gray-100 via-[#5a2270]/20 to-gray-100 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">

<div className="flex flex-col items-center text-center lg:items-start lg:text-left group">
<div className="flex group-hover:border-[#5a2270] group-hover:shadow-md transition-all duration-300 text-2xl font-medium text-[#5a2270] bg-white w-12 h-12 border-gray-100 border-2 rounded-full mb-5 relative shadow-sm items-center justify-center">
                                1
                                
<div className="absolute inset-0 rounded-full bg-[#5a2270] opacity-0 group-hover:opacity-10 scale-150 transition-all duration-300 pointer-events-none"></div>
</div>
<span className="text-xs tracking-widest uppercase text-gray-400 font-medium mb-2 block">Stap 1</span>
<h3 className="text-2xl sm:text-3xl font-medium text-gray-900 group-hover:text-[#5a2270] transition-colors mb-3 font-roboto tracking-tight">Aanmelden</h3>
<p className="text-gray-600 leading-relaxed font-normal text-base sm:text-lg">
                                Meld uw zending 24/7 aan. Neemt de planner contact met u op voor de perfecte afstemming en een direct tarief.
                            </p>
</div>

<div className="flex flex-col items-center text-center lg:items-start lg:text-left group mt-4 md:mt-0">
<div className="w-12 h-12 rounded-full bg-white border-2 border-gray-100 text-[#5a2270] flex items-center justify-center text-2xl font-medium mb-5 shadow-sm group-hover:border-[#5a2270] group-hover:shadow-md transition-all duration-300 relative">
                                2
                                <div className="absolute inset-0 rounded-full bg-[#5a2270] opacity-0 group-hover:opacity-10 scale-150 transition-all duration-300 pointer-events-none"></div>
</div>
<span className="text-xs tracking-widest uppercase text-gray-400 font-medium mb-2 block">Stap 2</span>
<h3 className="text-2xl sm:text-3xl font-medium text-gray-900 group-hover:text-[#5a2270] transition-colors mb-3 font-roboto tracking-tight">Ophalen</h3>
<p className="text-gray-600 leading-relaxed font-normal text-base sm:text-lg">
                                Uw zending wordt binnen afgesproken tijd opgehaald door een chauffeur en gaat via een dedicated rit on route.
                            </p>
</div>

<div className="flex flex-col items-center text-center lg:items-start lg:text-left group mt-4 lg:mt-0">
<div className="w-12 h-12 rounded-full bg-white border-2 border-gray-100 text-[#5a2270] flex items-center justify-center text-2xl font-medium mb-5 shadow-sm group-hover:border-[#5a2270] group-hover:shadow-md transition-all duration-300 relative">
                                3
                                <div className="absolute inset-0 rounded-full bg-[#5a2270] opacity-0 group-hover:opacity-10 scale-150 transition-all duration-300 pointer-events-none"></div>
</div>
<span className="text-xs tracking-widest uppercase text-gray-400 font-medium mb-2 block">Stap 3</span>
<h3 className="text-2xl sm:text-3xl font-medium text-gray-900 group-hover:text-[#5a2270] transition-colors mb-3 font-roboto tracking-tight">Afleveren</h3>
<p className="text-gray-600 leading-relaxed font-normal text-base sm:text-lg">
                                Dezelfde chauffeur overhandigt het pakket direct aan de gewenste ontvanger. Geen overslag of tussenstops: 100% veiligheid.
                            </p>
</div>

<div className="flex flex-col items-center text-center lg:items-start lg:text-left group mt-4 lg:mt-0">
<div className="w-12 h-12 rounded-full bg-white border-2 border-gray-100 text-[#5a2270] flex items-center justify-center text-2xl font-medium mb-5 shadow-sm group-hover:border-[#5a2270] group-hover:shadow-md transition-all duration-300 relative">
                                4
                                <div className="absolute inset-0 rounded-full bg-[#5a2270] opacity-0 group-hover:opacity-10 scale-150 transition-all duration-300 pointer-events-none"></div>
</div>
<span className="text-xs tracking-widest uppercase text-gray-400 font-medium mb-2 block">Stap 4</span>
<h3 className="text-2xl sm:text-3xl font-medium text-gray-900 group-hover:text-[#5a2270] transition-colors mb-3 font-roboto tracking-tight">Achteraf</h3>
<p className="text-gray-600 leading-relaxed font-normal text-base sm:text-lg">
                                U ontvangt direct automatisch een factuur voor uw administratie. Geen verrassingen of kleine lettertjes achteraf.
                            </p>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto bg-[#f4f5f7] rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100/40 to-transparent rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200 text-center relative z-10">

<div className="flex flex-col items-center pt-4 md:pt-0 first:pt-0">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#5a2270] mb-4 shadow-sm border border-gray-100">
<svg className="lucide lucide-award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<span className="text-lg font-medium text-gray-900 mb-1">Erkend &amp; Gecertificeerd</span>
<span className="text-base text-gray-500 font-normal">Voldoet aan NIWO &amp; ISO 9001 normen</span>
</div>

<div className="flex flex-col items-center pt-6 md:pt-0">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1da462] mb-4 shadow-sm border border-gray-100">
<svg className="lucide lucide-check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="text-lg font-medium text-gray-900 mb-1">100% Aflevergarantie</span>
<span className="text-base text-gray-500 font-normal">Volledige zekerheid voor elke zending</span>
</div>

<div className="flex flex-col items-center pt-6 md:pt-0">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#fbbc04] mb-4 shadow-sm border border-gray-100">
<svg className="lucide lucide-star text-[#fbbc04]" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<span className="text-lg font-medium text-gray-900 mb-1">Beoordeeld met 4.8/5</span>
<span className="text-base text-gray-500 font-normal">Door meer dan 1.250 tevreden klanten</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white border-t border-gray-200">
<div className="max-w-[1000px] mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 mb-4 font-roboto">
                        Bereken direct uw ritprijs
                    </h2>
<p className="text-xl text-gray-600 font-normal max-w-2xl mx-auto">
                        Kies uw type zending en ontvang binnen 1 minuut een vrijblijvende offerte op maat. Zonder verborgen kosten.
                    </p>
</div>
<div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-gray-200 relative">
<div aria-label="Voortgang aanvraag" className="mb-8">
<div className="flex items-center justify-between mb-3 text-sm tracking-widest uppercase font-medium">
<span className="text-[#5a2270]">Vrijblijvende Offerte</span>
<span className="text-gray-600">Stap 1 van 3</span>
</div>
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="33" className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden" role="progressbar">
<div className="bg-[#5a2270] h-full rounded-full w-1/3 transition-all duration-500 ease-out"></div>
</div>
</div>
<div aria-label="Kies uw transport type CTA" className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="group">

<a className="quiz-tile flex items-center p-6 rounded-xl border border-gray-200 bg-white hover:border-[#5a2270]/60 hover:bg-purple-50/40 group text-left transition-all" href="#step-2">
<div className="w-12 h-12 mr-5 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all text-gray-600 group-hover:text-[#5a2270] shrink-0">
<iconify-icon aria-hidden="true" height="28" icon="solar:routing-2-linear" width="28"></iconify-icon>
</div>
<div className="">
<span className="block text-xl font-medium text-gray-900 group-hover:text-[#5a2270] mb-1 font-roboto">Spoed transport</span>
<span className="block text-base text-gray-500 font-normal leading-snug">Direct ophalen en afleveren zonder tussenstops.</span>
</div>
</a>

<a className="quiz-tile flex items-center p-6 rounded-xl border border-gray-200 bg-white hover:border-[#5a2270]/60 hover:bg-purple-50/40 group text-left transition-all" href="#step-2">
<div className="w-12 h-12 mr-5 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all text-gray-600 group-hover:text-[#5a2270] shrink-0">
<iconify-icon aria-hidden="true" height="28" icon="solar:heart-pulse-linear" width="28"></iconify-icon>
</div>
<div className="">
<span className="block text-xl font-medium text-gray-900 group-hover:text-[#5a2270] mb-1 font-roboto">Medisch transport</span>
<span className="block text-base text-gray-500 font-normal leading-snug">Veilig en geconditioneerd vervoer van medische goederen.</span>
</div>
</a>

<a className="quiz-tile flex items-center p-6 rounded-xl border border-gray-200 bg-white hover:border-[#5a2270]/60 hover:bg-purple-50/40 group text-left transition-all" href="#step-2">
<div className="w-12 h-12 mr-5 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all text-gray-600 group-hover:text-[#5a2270] shrink-0">
<iconify-icon aria-hidden="true" height="28" icon="solar:box-linear" width="28"></iconify-icon>
</div>
<div className="">
<span className="block text-xl font-medium text-gray-900 group-hover:text-[#5a2270] mb-1 font-roboto">Logistiek transport</span>
<span className="block text-base text-gray-500 font-normal leading-snug">Geplande ritten, distributie en routes op maat.</span>
</div>
</a>

<a className="quiz-tile flex items-center p-6 rounded-xl border border-gray-200 bg-white hover:border-[#5a2270]/60 hover:bg-purple-50/40 group text-left transition-all" href="#step-2">
<div className="w-12 h-12 mr-5 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all text-gray-600 group-hover:text-[#5a2270] shrink-0">
<iconify-icon aria-hidden="true" height="28" icon="solar:box-minimalistic-linear" width="28"></iconify-icon>
</div>
<div className="">
<span className="block text-xl font-medium text-gray-900 group-hover:text-[#5a2270] mb-1 font-roboto">Pakket transport</span>
<span className="block text-base text-gray-500 font-normal leading-snug">Regulier vervoer van uw zakelijke pakketten.</span>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-[#f4f5f7] border-t border-gray-200">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-12 lg:mb-16">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 mb-4 font-roboto">
                        Transparante Tarieven
                    </h2>
<p className="text-xl text-gray-600 font-normal max-w-2xl mx-auto leading-relaxed">
                        Eerlijke prijzen gebaseerd op het totaal aantal gereden kilometers. Helder en zonder verrassingen achteraf.
                    </p>
</div>
<div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-200 flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-200 overflow-hidden">

<div className="flex-1 flex flex-col">
<div className="p-6 sm:p-8 text-center border-b border-gray-100 bg-white">
<h3 className="text-3xl font-medium tracking-tight text-[#5a2270] font-roboto">Tot 100 km</h3>
</div>
<div className="p-6 sm:p-8 flex-1 flex flex-col bg-white">
<span className="text-sm font-medium text-gray-900 mb-2 font-roboto block">Tarief</span>
<div className="flex items-baseline gap-1.5 mb-2 font-roboto text-[#5a2270]">
<span className="text-6xl sm:text-7xl tracking-tight font-medium">€0,46</span>
<span className="text-base font-medium text-gray-900">/ per kilometer</span>
</div>
<p className="text-base text-gray-500 font-normal pb-8 mb-8 border-b border-gray-100">Berekend over het totaal aantal kilometers.</p>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3">
<svg className="shrink-0 text-[#5a2270] mt-0.5" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="currentColor" r="10"></circle><path d="M8 12l3 3 6-6" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-base text-gray-700 leading-snug font-normal">Géén weekendtoeslag</span>
</li>
<li className="flex items-start gap-3">
<svg className="shrink-0 text-[#5a2270] mt-0.5" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="currentColor" r="10"></circle><path d="M8 12l3 3 6-6" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-base text-gray-700 leading-snug font-normal">Wachttijd en laden/lossen € 8,95 per 15 min.</span>
</li>
<li className="flex items-start gap-3">
<svg className="shrink-0 text-[#5a2270] mt-0.5" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="currentColor" r="10"></circle><path d="M8 12l3 3 6-6" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-base text-gray-700 leading-snug font-normal">Extra adres in 1 rit € 7,95 per adres</span>
</li>
<li className="flex items-start gap-3">
<svg className="shrink-0 text-[#5a2270] mt-0.5" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="currentColor" r="10"></circle><path d="M8 12l3 3 6-6" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-base text-gray-700 leading-snug font-normal">Ook voor groter transport de voordeligste!</span>
</li>
<li className="flex items-start gap-3">
<svg className="shrink-0 text-[#5a2270] mt-0.5" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="currentColor" r="10"></circle><path d="M8 12l3 3 6-6" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-base text-gray-700 leading-snug font-normal">Stadsrittentarieven: op aanvraag</span>
</li>
<li className="flex items-start gap-3">
<svg className="shrink-0 text-[#5a2270] mt-0.5" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="currentColor" r="10"></circle><path d="M8 12l3 3 6-6" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-base text-gray-700 leading-snug font-normal">Bedragen excl. BTW en brandstoftoeslag</span>
</li>
</ul>
</div>
</div>

<div className="flex-1 flex flex-col">
<div className="p-6 sm:p-8 text-center border-b border-gray-100 bg-white">
<h3 className="text-3xl font-medium tracking-tight text-[#5a2270] font-roboto">Tot 250 km</h3>
</div>
<div className="p-6 sm:p-8 flex-1 flex flex-col bg-white">
<span className="text-sm font-medium text-gray-900 mb-2 font-roboto block">Tarief</span>
<div className="flex items-baseline gap-1.5 mb-2 font-roboto text-[#5a2270]">
<span className="text-6xl sm:text-7xl tracking-tight font-medium">€0,44</span>
<span className="text-base font-medium text-gray-900">/ per kilometer</span>
</div>
<p className="text-base text-gray-500 font-normal pb-8 mb-8 border-b border-gray-100">Berekend over het totaal aantal kilometers.</p>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3">
<svg className="shrink-0 text-[#5a2270] mt-0.5" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="currentColor" r="10"></circle><path d="M8 12l3 3 6-6" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-base text-gray-700 leading-snug font-normal">Géén weekendtoeslag</span>
</li>
<li className="flex items-start gap-3">
<svg className="shrink-0 text-[#5a2270] mt-0.5" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="currentColor" r="10"></circle><path d="M8 12l3 3 6-6" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-base text-gray-700 leading-snug font-normal">Wachttijd en laden/lossen € 8,95 per 15 min.</span>
</li>
<li className="flex items-start gap-3">
<svg className="shrink-0 text-[#5a2270] mt-0.5" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="currentColor" r="10"></circle><path d="M8 12l3 3 6-6" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-base text-gray-700 leading-snug font-normal">Extra adres in 1 rit € 7,95 per adres</span>
</li>
<li className="flex items-start gap-3">
<svg className="shrink-0 text-[#5a2270] mt-0.5" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="currentColor" r="10"></circle><path d="M8 12l3 3 6-6" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-base text-gray-700 leading-snug font-normal">Ook voor groter transport de voordeligste!</span>
</li>
<li className="flex items-start gap-3">
<svg className="shrink-0 text-[#5a2270] mt-0.5" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="currentColor" r="10"></circle><path d="M8 12l3 3 6-6" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-base text-gray-700 leading-snug font-normal">Bedragen excl. BTW en brandstoftoeslag</span>
</li>
</ul>
</div>
</div>

<div className="flex-1 flex flex-col">
<div className="p-6 sm:p-8 text-center border-b border-gray-100 bg-white">
<h3 className="text-3xl font-medium tracking-tight text-[#5a2270] font-roboto">Vanaf 250 km</h3>
</div>
<div className="p-6 sm:p-8 flex-1 flex flex-col bg-white">
<span className="text-sm font-medium text-gray-900 mb-2 font-roboto block">Tarief</span>
<div className="flex items-baseline gap-1.5 mb-2 font-roboto text-[#5a2270]">
<span className="text-6xl sm:text-7xl tracking-tight font-medium">€0,42</span>
<span className="text-base font-medium text-gray-900">/ per kilometer</span>
</div>
<p className="text-base text-gray-500 font-normal pb-8 mb-8 border-b border-gray-100">Berekend over het totaal aantal kilometers.</p>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3">
<svg className="shrink-0 text-[#5a2270] mt-0.5" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="currentColor" r="10"></circle><path d="M8 12l3 3 6-6" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-base text-gray-700 leading-snug font-normal">Géén weekendtoeslag</span>
</li>
<li className="flex items-start gap-3">
<svg className="shrink-0 text-[#5a2270] mt-0.5" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="currentColor" r="10"></circle><path d="M8 12l3 3 6-6" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-base text-gray-700 leading-snug font-normal">Wachttijd en laden/lossen € 8,95 per 15 min.</span>
</li>
<li className="flex items-start gap-3">
<svg className="shrink-0 text-[#5a2270] mt-0.5" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="currentColor" r="10"></circle><path d="M8 12l3 3 6-6" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-base text-gray-700 leading-snug font-normal">Extra adres in 1 rit € 7,95 per adres</span>
</li>
<li className="flex items-start gap-3">
<svg className="shrink-0 text-[#5a2270] mt-0.5" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="currentColor" r="10"></circle><path d="M8 12l3 3 6-6" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-base text-gray-700 leading-snug font-normal">Ook voor groter transport de voordeligste!</span>
</li>
<li className="flex items-start gap-3">
<svg className="shrink-0 text-[#5a2270] mt-0.5" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="currentColor" r="10"></circle><path d="M8 12l3 3 6-6" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-base text-gray-700 leading-snug font-normal">Bedragen excl. BTW en brandstoftoeslag</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
