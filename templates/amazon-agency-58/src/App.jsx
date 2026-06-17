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
      

<header className="lg:px-10 overflow-hidden text-gray-900 bg-white rounded-b-[3rem] pt-6 pr-6 pb-24 pl-6 relative shadow-[0_4px_40px_-10px_rgba(0,0,0,0.05)] border-b border-gray-200">
<div className="max-w-[1400px] mx-auto">

<nav className="flex items-center justify-between w-full pb-10 mb-6 border-b border-gray-100 lg:border-none lg:mb-10">
<a className="text-xl font-normal tracking-tight text-gray-900" href="#">
          Horizon Courts
        </a>
<div className="hidden lg:flex items-center gap-2">
<a className="px-5 py-2.5 bg-gray-50 border border-gray-200/80 rounded-full text-base font-normal text-gray-900 transition-colors shadow-sm" href="#">About Us</a>
<a className="px-5 py-2.5 text-base font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#">Services</a>
<a className="px-5 py-2.5 text-base font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#">Coaches</a>
<a className="px-5 py-2.5 text-base font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#">Events</a>
<a className="px-5 py-2.5 text-base font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#">Contacts</a>
</div>
<a className="flex items-center gap-2 px-6 py-3 bg-[#0a0f1c] hover:bg-black text-white rounded-full text-base font-normal transition-all shadow-md hover:shadow-lg" href="#">
          Book now
          <i className="w-4 h-4 text-white/70" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</nav>

<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-20 mb-24 gap-x-12 gap-y-12 items-center">

<div className="lg:col-span-6 flex flex-col gap-8 z-10 mt-8 lg:mt-0">
<div>

<div className="text-sm font-normal tracking-tight uppercase text-gray-500 mb-8 border border-gray-200 inline-block px-3 py-1 rounded-full bg-gray-50">
              AMASULTING
            </div>
<h1 className="lg:text-7xl leading-[1.05] text-5xl font-normal text-gray-900 tracking-tight mb-6">
              Die Full Service <br/>
              Agentur für den <br/>
              Marktplatz <br/>
<span className="text-[#FFAA54]">Amazon.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-gray-600 max-w-lg">
<strong className="text-gray-900 font-normal">With passion towards your goal!</strong> Wir maximieren Ihren Erfolg durch datengetriebene Strategien, perfekte Listings und performantes Advertising.
            </p>
</div>

<div className="flex flex-wrap items-center gap-6 mt-2">
<a className="px-8 py-4 bg-[#FFAA54] text-gray-900 rounded-xl font-normal text-lg hover:bg-[#ffbd7a] transition-all duration-300 shadow-[0_0_24px_rgba(255,170,84,0.3)] hover:shadow-[0_0_32px_rgba(255,170,84,0.5)]" href="#">
              Jetzt durchstarten
            </a>
<div className="flex flex-col border-l border-gray-200 pl-6">
<span className="text-base font-normal text-gray-900 tracking-tight">Offizieller Partner</span>
<span className="text-base text-gray-500">von Amazon Ads</span>
</div>
</div>
</div>

<div className="lg:col-span-6 relative mt-10 lg:mt-0">

<div className="relative rounded-[2rem] overflow-hidden border border-gray-200 bg-white aspect-[4/3] shadow-xl p-6 lg:p-8 flex flex-col group/listing cursor-default">

<div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white pointer-events-none"></div>

<div className="absolute top-6 right-6 z-30 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center gap-2 transition-transform hover:scale-105 duration-300">
<img alt="Amazon Service Partner" className="w-12 h-12 lg:w-16 lg:h-16 object-contain" src="https://impro.usercontent.one/appid/oneComWsb/domain/amasulting.de/media/amasulting.de/onewebmedia/amazon-service_partners-badge.png"/>
</div>

<div className="relative z-10 flex flex-col h-full">

<div className="flex items-center gap-2 text-sm text-gray-400 mb-6 font-normal">
<span>Küche &amp; Haushalt</span>
<i className="w-3.5 h-3.5" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="text-gray-900">Premium Segment</span>
</div>

<div className="flex gap-6 lg:gap-8 h-full">

<div className="w-5/12 bg-gray-50/80 rounded-2xl border border-gray-100 flex items-center justify-center relative p-4 lg:p-6 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-gray-100 to-transparent"></div>
<div className="relative w-full aspect-square bg-white rounded-xl border border-gray-100 shadow-sm flex items-center justify-center group-hover/listing:-translate-y-1 transition-transform duration-500">
<i className="w-14 h-14 text-[#FFAA54]/60" data-lucide="package" strokeWidth="1.5"></i>
</div>

<div className="absolute top-4 left-0 bg-[#FFAA54] text-gray-900 text-sm font-normal px-3 py-1.5 rounded-r-lg shadow-sm">
                    Bestseller #1
                  </div>
</div>

<div className="w-7/12 flex flex-col pt-1 pr-16 lg:pr-20">

<div className="flex flex-col gap-3 mb-6">
<div className="h-3 bg-gray-200 rounded-full w-full"></div>
<div className="h-3 bg-gray-200 rounded-full w-4/5"></div>
<div className="h-3 bg-gray-200 rounded-full w-2/5"></div>
</div>

<div className="flex flex-wrap items-center gap-2 lg:gap-3 mb-6">
<div className="flex text-[#FFAA54] text-lg lg:text-xl drop-shadow-sm gap-0.5">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<div className="flex items-center text-sm font-normal text-gray-500 gap-1 lg:gap-2 mt-0.5">
<span className="text-gray-900">4.9</span>
<span className="text-gray-300 hidden sm:inline">|</span>
<span>12.842 <span className="hidden lg:inline">Bewertungen</span></span>
</div>
</div>

<div className="mb-6">
<div className="flex items-start gap-1 mb-2">
<span className="text-base font-normal text-gray-900 mt-1">€</span>
<span className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 leading-none">49</span>
<span className="text-base font-normal text-gray-900 mt-1">99</span>
</div>
<div className="flex items-center gap-2">
<div className="bg-gray-900 text-white text-sm uppercase tracking-wider font-normal px-2 py-0.5 rounded flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                        prime
                      </div>
<span className="text-sm text-gray-500 hidden lg:block">Gratis Lieferung morgen</span>
</div>
</div>

<div className="flex flex-col gap-3 mt-auto mb-2">
<div className="w-full py-2.5 lg:py-3 bg-[#FFAA54] rounded-xl flex items-center justify-center text-sm font-normal text-gray-900 shadow-[0_2px_10px_rgba(255,170,84,0.2)] hover:bg-[#ffbd7a] transition-all duration-300 cursor-pointer hover:shadow-[0_4px_16px_rgba(255,170,84,0.3)] group">
<i className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" data-lucide="shopping-cart" strokeWidth="1.5"></i>
                      In den Einkaufswagen
                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="flex mt-8 pr-4 pl-4 space-x-6 items-start justify-between">
<div className="text-center lg:text-left group cursor-default">
<div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
<i className="w-5 h-5 text-[#FFAA54] group-hover:scale-110 transition-transform" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
<h3 className="text-2xl font-normal text-gray-900 tracking-tight leading-none">Umsatz</h3>
</div>
<p className="text-gray-500 text-sm font-normal uppercase tracking-wide mt-2">Steigerung</p>
</div>
<div className="text-center lg:text-left group cursor-default">
<div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
<i className="w-5 h-5 text-gray-900 group-hover:scale-110 transition-transform" data-lucide="wallet" strokeWidth="1.5"></i>
<h3 className="text-2xl font-normal text-gray-900 tracking-tight leading-none">Profit</h3>
</div>
<p className="text-gray-500 text-sm font-normal uppercase tracking-wide mt-2">Erhöhung</p>
</div>
<div className="text-center lg:text-left group cursor-default">
<div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
<i className="w-5 h-5 text-[#FFAA54] group-hover:scale-110 transition-transform" data-lucide="eye" strokeWidth="1.5"></i>
<h3 className="text-2xl font-normal text-gray-900 tracking-tight leading-none">Traffic</h3>
</div>
<p className="text-gray-500 text-sm font-normal uppercase tracking-wide mt-2">Sichtbarkeit</p>
</div>
</div>
</div>
</div>

<div className="w-full relative">

<div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-white via-transparent to-white w-full"></div>
<div className="flex overflow-hidden w-full">

<div className="flex animate-marquee w-max pt-4 pb-4 gap-x-6 gap-y-6">

<div className="w-[360px] bg-white rounded-3xl p-8 flex flex-col h-full border border-gray-100 shadow-sm hover:shadow-md hover:border-[#FFAA54]/40 transition-all duration-300 group">
<div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-[#FFAA54] group-hover:scale-110 group-hover:bg-[#FFAA54]/10 transition-all duration-300 border border-gray-100">
<i className="w-6 h-6" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl text-gray-900 mb-3 font-normal tracking-tight">Umsatzsteigerung</h3>
<p className="text-gray-600 text-base leading-relaxed font-light">
                Skalieren Sie Ihre Verkäufe nachhaltig durch datengetriebene Optimierung und zielgerichtete Strategien.
              </p>
</div>

<div className="w-[360px] bg-gradient-to-br from-[#FFAA54]/10 to-[#FFAA54]/5 rounded-3xl p-8 flex flex-col h-full border border-[#FFAA54]/20 hover:bg-[#FFAA54]/10 transition-colors group">
<div className="w-12 h-12 bg-[#FFAA54] rounded-full flex items-center justify-center mb-6 text-gray-900 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#FFAA54]/30">
<i className="w-6 h-6" data-lucide="wallet" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl text-gray-900 mb-3 font-normal tracking-tight">Erhöhung der Profitabilität</h3>
<p className="text-gray-600 text-base leading-relaxed font-light">
                Wir optimieren Ihre Margen und Kampagneneffizienz für maximalen Gewinn bei jeder Bestellung.
              </p>
</div>

<div className="w-[360px] bg-gray-50 rounded-3xl p-8 flex flex-col h-full border border-gray-100 hover:bg-gray-100 transition-colors group">
<div className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-sm border border-gray-200">
<i className="w-6 h-6" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl text-gray-900 mb-3 font-normal tracking-tight">Maximale Sichtbarkeit</h3>
<p className="text-gray-600 text-base leading-relaxed font-light">
                Erreichen Sie Top-Platzierungen im A9-Algorithmus durch exzellentes SEO und performante Werbeanzeigen.
              </p>
</div>

<div className="w-[360px] bg-white rounded-3xl p-8 flex flex-col h-full border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 group justify-between">
<div>
<div className="h-12 flex items-center mb-6">

<img alt="Amazon Ads Partner" className="h-8 object-contain filter brightness-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300" src="https://impro.usercontent.one/appid/oneComWsb/domain/amasulting.de/media/amasulting.de/onewebmedia/Amazon%20Ads%20logo%20(1).png"/>
</div>
<h3 className="text-2xl text-gray-900 mb-3 font-normal tracking-tight">Offizieller Partner</h3>
<p className="text-gray-600 text-base leading-relaxed font-light">
                  Als zertifizierter Partner bieten wir direkten Zugang zu den neuesten Werbe-Strategien und Beta-Programmen.
                </p>
</div>
</div>

<div className="w-[360px] bg-white rounded-3xl p-8 flex flex-col h-full border border-gray-100 shadow-sm hover:shadow-md hover:border-[#FFAA54]/40 transition-all duration-300 group">
<div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-[#FFAA54] group-hover:scale-110 group-hover:bg-[#FFAA54]/10 transition-all duration-300 border border-gray-100">
<i className="w-6 h-6" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl text-gray-900 mb-3 font-normal tracking-tight">Umsatzsteigerung</h3>
<p className="text-gray-600 text-base leading-relaxed font-light">
                Skalieren Sie Ihre Verkäufe nachhaltig durch datengetriebene Optimierung und zielgerichtete Strategien.
              </p>
</div>
<div className="w-[360px] bg-gradient-to-br from-[#FFAA54]/10 to-[#FFAA54]/5 rounded-3xl p-8 flex flex-col h-full border border-[#FFAA54]/20 hover:bg-[#FFAA54]/10 transition-colors group">
<div className="w-12 h-12 bg-[#FFAA54] rounded-full flex items-center justify-center mb-6 text-gray-900 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#FFAA54]/30">
<i className="w-6 h-6" data-lucide="wallet" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl text-gray-900 mb-3 font-normal tracking-tight">Erhöhung der Profitabilität</h3>
<p className="text-gray-600 text-base leading-relaxed font-light">
                Wir optimieren Ihre Margen und Kampagneneffizienz für maximalen Gewinn bei jeder Bestellung.
              </p>
</div>
<div className="w-[360px] bg-gray-50 rounded-3xl p-8 flex flex-col h-full border border-gray-100 hover:bg-gray-100 transition-colors group">
<div className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-sm border border-gray-200">
<i className="w-6 h-6" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl text-gray-900 mb-3 font-normal tracking-tight">Maximale Sichtbarkeit</h3>
<p className="text-gray-600 text-base leading-relaxed font-light">
                Erreichen Sie Top-Platzierungen im A9-Algorithmus durch exzellentes SEO und performante Werbeanzeigen.
              </p>
</div>
<div className="w-[360px] bg-white rounded-3xl p-8 flex flex-col h-full border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 group justify-between">
<div>
<div className="h-12 flex items-center mb-6">
<img alt="Amazon Ads Partner" className="h-8 object-contain filter brightness-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300" src="https://impro.usercontent.one/appid/oneComWsb/domain/amasulting.de/media/amasulting.de/onewebmedia/Amazon%20Ads%20logo%20(1).png"/>
</div>
<h3 className="text-2xl text-gray-900 mb-3 font-normal tracking-tight">Offizieller Partner</h3>
<p className="text-gray-600 text-base leading-relaxed font-light">
                  Als zertifizierter Partner bieten wir direkten Zugang zu den neuesten Werbe-Strategien und Beta-Programmen.
                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</header>


    </>
  );
}
