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



{
"@context": "https://schema.org",
"@type": "AutoRepair",
"@id": "https://zapacars.pl/#organization",
"name": "ZapaCars",
"alternateName": "ZapaCars Warsztat Samochodowy",
"description": "Kompleksowy warsztat samochodowy w Mysłowicach specjalizujący się w serwisie bieżącym, naprawach lakierniczych i renowacji samochodów klasycznych.",
"url": "https://zapacars.pl",
"logo": "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb325989-5758-412a-be1e-c3cd46fa18b1_320w.webp",
"image": "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65898dcb-c591-46a7-986b-99396866e115_3840w.webp",
"telephone": ["+48666959570", "+48730140666"],
"email": "kontakt.zapacars@gmail.com",
"address": {
"@type": "PostalAddress",
"streetAddress": "ul. Fabryczna 12",
"addressLocality": "Mysłowice",
"postalCode": "41-404",
"addressRegion": "Śląskie",
"addressCountry": "PL"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 50.2084,
"longitude": 19.1326
},
"openingHoursSpecification": [
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
"opens": "08:00",
"closes": "16:00"
}
],
"priceRange": "$$",
"currenciesAccepted": "PLN",
"paymentAccepted": "Gotówka, Przelew, Karta",
"areaServed": {
"@type": "GeoCircle",
"geoMidpoint": {
"@type": "GeoCoordinates",
"latitude": 50.2084,
"longitude": 19.1326
},
"geoRadius": "30000"
},
"serviceArea": {
"@type": "AdministrativeArea",
"name": "Województwo Śląskie"
},
"hasOfferCatalog": {
"@type": "OfferCatalog",
"name": "Usługi warsztatowe",
"itemListElement": [
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Serwis eksploatacyjny",
"description": "Wymiana oleju, filtrów, płynów eksploatacyjnych, świec zapłonowych"
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Naprawa układu hamulcowego",
"description": "Wymiana klocków, tarcz hamulcowych, naprawa zacisków"
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Lakiernictwo samochodowe",
"description": "Naprawy lakiernicze po stłuczkach i kolizjach, odnowa elementów"
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Renowacja klasyków",
"description": "Kompleksowa renowacja samochodów klasycznych i zabytkowych"
}
}
]
},
"founder": [
{
"@type": "Person",
"name": "Arek",
"jobTitle": "Współwłaściciel"
},
{
"@type": "Person",
"name": "Maciej",
"jobTitle": "Współwłaściciel"
}
],
"foundingDate": "2024-10",
"sameAs": [
"https://www.instagram.com/zapacars/",
"https://www.facebook.com/zapacars"
],
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "5.0",
"reviewCount": "15",
"bestRating": "5",
"worstRating": "1"
}
}



{
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{
"@type": "Question",
"name": "Ile kosztuje wymiana oleju w ZapaCars?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Wymiana oleju z filtrem oleju w ZapaCars kosztuje od 100 zł. Ostateczna cena zależy od modelu samochodu i rodzaju oleju. Ceny są orientacyjne – dokładną wycenę otrzymasz po kontakcie z warsztatem."
}
},
{
"@type": "Question",
"name": "Czy ZapaCars oferuje gwarancję na naprawy lakiernicze?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Tak, na wszystkie usługi lakiernicze i renowacyjne udzielamy pisemnej gwarancji. Używamy materiałów premium, co pozwala zapewnić trwałość powłoki przez wiele lat. Szczegóły ustalamy indywidualnie."
}
},
{
"@type": "Question",
"name": "Jakie są godziny otwarcia warsztatu ZapaCars?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Warsztat ZapaCars w Mysłowicach jest czynny od poniedziałku do piątku w godzinach 8:00-16:00. W weekendy warsztat jest zamknięty. Zalecamy wcześniejsze umówienie wizyty telefonicznie."
}
},
{
"@type": "Question",
"name": "Czy mogę umówić się na bezpłatną wycenę naprawy?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Tak, wstępna wycena i konsultacja są bezpłatne. Możesz przyjechać z samochodem lub wysłać zdjęcia – przygotujemy szczegółowy kosztorys. Zadzwoń pod numer 666 959 570 lub wypełnij formularz kontaktowy."
}
},
{
"@type": "Question",
"name": "Czy ZapaCars naprawia każdy samochód?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Specjalizujemy się w kompleksowych naprawach, renowacjach klasyków i projektach tuningowych. Nie zajmujemy się naprawą silników ani pojazdów po poważnych wypadkach wymagających prostowania karoserii."
}
}
]
}



{
"@context": "https://schema.org",
"@type": "Service",
"serviceType": "Serwis samochodowy",
"provider": {
"@type": "AutoRepair",
"name": "ZapaCars"
},
"areaServed": {
"@type": "City",
"name": "Mysłowice"
},
"hasOfferCatalog": {
"@type": "OfferCatalog",
"name": "Cennik usług",
"itemListElement": [
{
"@type": "OfferCatalog",
"name": "Serwis eksploatacyjny",
"itemListElement": [
{"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Wymiana oleju z filtrem"}, "priceSpecification": {"@type": "PriceSpecification", "price": "100", "priceCurrency": "PLN", "minPrice": "100"}},
{"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Wymiana filtra powietrza"}, "priceSpecification": {"@type": "PriceSpecification", "price": "30", "priceCurrency": "PLN", "minPrice": "30"}},
{"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Wymiana filtra paliwa"}, "priceSpecification": {"@type": "PriceSpecification", "price": "50", "priceCurrency": "PLN", "minPrice": "50"}},
{"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Wymiana płynu hamulcowego"}, "priceSpecification": {"@type": "PriceSpecification", "price": "50", "priceCurrency": "PLN", "minPrice": "50"}}
]
},
{
"@type": "OfferCatalog",
"name": "Układ hamulcowy",
"itemListElement": [
{"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Wymiana klocków hamulcowych przód"}, "priceSpecification": {"@type": "PriceSpecification", "price": "100", "priceCurrency": "PLN", "minPrice": "100"}},
{"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Wymiana tarcz i klocków przód"}, "priceSpecification": {"@type": "PriceSpecification", "price": "150", "priceCurrency": "PLN", "minPrice": "150"}}
]
}
]
}
}



{
"@context": "https://schema.org",
"@type": "Blog",
"name": "Blog ZapaCars - Porady motoryzacyjne",
"description": "Praktyczne porady motoryzacyjne od mechaników z warsztatu ZapaCars w Mysłowicach. Dowiedz się, jak dbać o swój samochód.",
"url": "https://zapacars.pl/#blog",
"publisher": {
"@type": "Organization",
"name": "ZapaCars",
"logo": {
"@type": "ImageObject",
"url": "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb325989-5758-412a-be1e-c3cd46fa18b1_320w.webp"
}
},
"blogPost": [
{
"@type": "BlogPosting",
"headline": "Ile kosztuje wymiana oleju? Cennik 2025",
"description": "Wymiana oleju kosztuje od 100 do 300 zł. Sprawdź aktualne ceny i dowiedz się, od czego zależy koszt wymiany oleju silnikowego.",
"url": "https://zapacars.pl/blog/ile-kosztuje-wymiana-oleju",
"datePublished": "2025-01-14",
"author": {"@type": "Organization", "name": "ZapaCars"},
"image": "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800"
},
{
"@type": "BlogPosting",
"headline": "Jak często wymieniać klocki hamulcowe? Poradnik 2025",
"description": "Klocki hamulcowe wymienia się co 30 000-60 000 km. Poznaj objawy zużycia i dowiedz się, kiedy jechać do warsztatu.",
"url": "https://zapacars.pl/blog/jak-czesto-wymieniac-klocki-hamulcowe",
"datePublished": "2025-01-14",
"author": {"@type": "Organization", "name": "ZapaCars"},
"image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800"
},
{
"@type": "BlogPosting",
"headline": "Renowacja klasyka – ile kosztuje i ile trwa?",
"description": "Renowacja samochodu klasycznego kosztuje od 30 000 do 200 000 zł i trwa 6-24 miesięcy. Sprawdź, co wpływa na cenę.",
"url": "https://zapacars.pl/blog/renowacja-klasyka-koszt-czas",
"datePublished": "2025-01-14",
"author": {"@type": "Organization", "name": "ZapaCars"},
"image": "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800"
},
{
"@type": "BlogPosting",
"headline": "5 oznak, że Twoje hamulce wymagają wymiany",
"description": "Piszczenie, wibracje, dłuższa droga hamowania? Poznaj 5 sygnałów ostrzegawczych zużytych hamulców.",
"url": "https://zapacars.pl/blog/5-oznak-ze-hamulce-wymagaja-wymiany",
"datePublished": "2025-01-14",
"author": {"@type": "Organization", "name": "ZapaCars"},
"image": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800"
},
{
"@type": "BlogPosting",
"headline": "Warsztat samochodowy Mysłowice – jak wybrać najlepszy?",
"description": "Na co zwrócić uwagę wybierając mechanika w Mysłowicach? Opinie, ceny, specjalizacja – praktyczny poradnik.",
"url": "https://zapacars.pl/blog/warsztat-samochodowy-myslowice-jak-wybrac",
"datePublished": "2025-01-14",
"author": {"@type": "Organization", "name": "ZapaCars"},
"image": "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=800"
}
]
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
      --&gt;

  


<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;family=Oswald:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<style>
    body {
      font-family: 'Inter', sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .font-display {
      font-family: 'Oswald', sans-serif;
    }

    .glass-panel {
      background: rgba(26, 26, 26, 0.6);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    #mobile-menu-check:checked~#mobile-menu {
      display: block;
    }

    .fade-up {
      animation: fadeUp 0.8s ease-out forwards;
      opacity: 0;
      transform: translateY(20px);
    }

    @keyframes fadeUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>

<nav aria-label="Menu główne" className="fixed glass-panel z-50 w-full border-white/5 border-b top-0" role="navigation">
<div className="max-w-7xl mx-auto px-6">
<div className="flex h-20 items-center justify-between">

<div className="flex-shrink-0">
<a aria-label="ZapaCars - Strona główna" className="block" href="/">
<img alt="ZapaCars Logo - Warsztat Samochodowy Mysłowice" className="hover:opacity-100 transition-opacity opacity-90 w-auto h-16 object-contain my-3" height="64" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb325989-5758-412a-be1e-c3cd46fa18b1_320w.webp" width="160"/>
</a>
</div>

<div className="hidden lg:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="hover:text-[#E30613] transition-colors duration-300 uppercase text-sm font-normal tracking-wide" href="#serwis">Serwis</a>
<a className="hover:text-[#E30613] transition-colors duration-300 text-sm font-normal tracking-wide uppercase" href="#lakiernictwo">Lakiernictwo</a>
<a className="hover:text-[#E30613] transition-colors duration-300 text-sm font-normal tracking-wide uppercase" href="#renowacja">Renowacja</a>
<a className="hover:text-[#E30613] transition-colors duration-300 text-sm font-normal tracking-wide uppercase" href="#cennik">Cennik</a>
<a className="hover:text-[#E30613] transition-colors duration-300 text-sm font-normal tracking-wide uppercase" href="#o-nas">O
              Nas</a>
<a className="hover:bg-red-700 transition-all duration-300 uppercase text-sm font-medium text-white tracking-wide bg-[#E30613] py-2 px-6" href="#kontakt">Kontakt</a>
</div>
</div>

<div className="lg:hidden">
<label aria-label="Otwórz menu" className="text-white hover:text-[#E30613] cursor-pointer" htmlFor="mobile-menu-check">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="28"></iconify-icon>
</label>
<input aria-hidden="true" className="hidden" id="mobile-menu-check" type="checkbox"/>
</div>
</div>
</div>

<div className="hidden lg:hidden bg-neutral-950 border-b border-white/10 absolute w-full" id="mobile-menu">
<div className="px-4 pt-4 pb-6 space-y-2">
<a className="text-white hover:text-[#E30613] block px-3 py-3 text-base font-normal border-b border-white/5" href="#serwis">Serwis</a>
<a className="text-white hover:text-[#E30613] block px-3 py-3 text-base font-normal border-b border-white/5" href="#lakiernictwo">Lakiernictwo</a>
<a className="text-white hover:text-[#E30613] block px-3 py-3 text-base font-normal border-b border-white/5" href="#renowacja">Renowacja</a>
<a className="text-white hover:text-[#E30613] block px-3 py-3 text-base font-normal border-b border-white/5" href="#cennik">Cennik</a>
<a className="text-white hover:text-[#E30613] block px-3 py-3 text-base font-normal border-b border-white/5" href="#o-nas">O
          Nas</a>
<a className="text-[#E30613] block px-3 py-3 text-base font-medium" href="#kontakt">Skontaktuj się</a>
</div>
</div>
</nav>

<header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Wnętrze warsztatu samochodowego ZapaCars w Mysłowicach" className="w-full h-full object-cover object-right opacity-90" loading="eager" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65898dcb-c591-46a7-986b-99396866e115_3840w.webp"/>
<div className="bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent absolute inset-0"></div>
</div>
<div className="z-10 w-full max-w-7xl mx-auto pt-20 px-6 relative">
<div className="fade-up max-w-3xl">
<div className="inline-flex items-center space-x-2 mb-6 border-l-2 border-[#E30613] pl-4">
<span className="uppercase text-xs font-medium text-[#E30613] tracking-widest">Warsztat Samochodowy • Mysłowice</span>
</div>
<h1 className="text-5xl md:text-7xl font-display font-medium text-white tracking-tight leading-tight mb-6">
          SERWIS.<br/>LAKIERNICTWO.<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E30613] to-red-400">RENOWACJA.</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl font-light leading-relaxed">
          Kompleksowy warsztat samochodowy w Mysłowicach. Serwis bieżący, profesjonalne lakiernictwo i renowacja
          klasyków – wszystko pod jednym dachem.
        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#E30613] hover:bg-red-700 text-white px-8 py-4 text-sm font-medium uppercase tracking-widest transition-all duration-300 text-center" href="#uslugi">
            Sprawdź Ofertę
          </a>
<a className="border border-white/20 hover:border-[#E30613] hover:text-[#E30613] text-white px-8 py-4 text-sm font-medium uppercase tracking-widest transition-all duration-300 text-center glass-panel" href="#kontakt">
            Umów Wizytę
          </a>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
<iconify-icon className="text-white/50" icon="lucide:arrow-down" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</header>
<main>

<section aria-labelledby="uslugi-heading" className="bg-[#050505] border-white/5 border-b pt-24 pb-24 relative" id="uslugi">
<div className="max-w-7xl mx-auto px-6">
<header className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight mb-2" id="uslugi-heading">CENTRUM NAPRAW</h2>
<div className="h-1 w-20 bg-[#E30613]"></div>
</div>
<p className="text-gray-400 max-w-md mt-6 md:mt-0 text-sm leading-relaxed">
            Kompleksowy warsztat samochodowy w Mysłowicach. Serwis bieżący, profesjonalne lakiernictwo i renowacja
            klasyków – wszystko pod jednym dachem.
          </p>
</header>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">

<article className="group relative h-96 overflow-hidden bg-neutral-900 border border-white/5" id="serwis">
<img alt="Serwis samochodowy - mechanik przy pracy w warsztacie ZapaCars Mysłowice" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-40" height="384" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" width="400"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-transparent to-transparent">
<iconify-icon aria-hidden="true" className="text-[#E30613] mb-4" icon="lucide:wrench" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="uppercase text-xl font-normal text-white tracking-wide font-display mb-2">Serwis</h3>
<p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                Pełen zakres serwisu bieżącego: wymiana oleju, klocki hamulcowe, zawieszenie, rozrządy, układ wydechowy.
                Szczerze mówimy, co trzeba naprawić teraz, a co może poczekać.
              </p>
<a className="text-white text-xs font-medium uppercase tracking-widest flex items-center gap-2 group-hover:text-[#E30613] transition-colors" href="#cennik">
                Sprawdź cennik <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</article>

<article className="group relative h-96 overflow-hidden bg-neutral-900 border border-white/5" id="lakiernictwo">
<img alt="Lakiernictwo samochodowe - naprawa lakieru po kolizji" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-40" height="384" loading="lazy" src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" width="400"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-transparent to-transparent">
<iconify-icon aria-hidden="true" className="text-[#E30613] mb-4" icon="lucide:spray-can" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="uppercase text-xl font-normal text-white tracking-wide font-display mb-2">Lakiernictwo</h3>
<p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                Naprawy lakiernicze po stłuczkach i kolizjach. Odpryski, rysy, odnowa elementów – przywracamy fabryczny
                wygląd. Nie robimy wraków, robimy perfekcję.
              </p>
<a className="text-white text-xs font-medium uppercase tracking-widest flex items-center gap-2 group-hover:text-[#E30613] transition-colors" href="#cennik">
                Sprawdź cennik <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</article>

<article className="group relative h-96 overflow-hidden bg-neutral-900 border border-white/5" id="renowacja">
<img alt="Renowacja samochodów klasycznych - projekt w trakcie realizacji" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-40" height="384" loading="lazy" src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" width="400"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-transparent to-transparent">
<iconify-icon aria-hidden="true" className="text-[#E30613] mb-4" icon="lucide:gem" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="uppercase text-xl font-normal text-white tracking-wide font-display mb-2">Renowacja</h3>
<p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                Robimy samochody, których inne warsztaty się boją. Klasyki, niszowe modele, projekty od podstaw. Pełna
                dokumentacja każdego etapu.
              </p>
<a className="text-white text-xs font-medium uppercase tracking-widest flex items-center gap-2 group-hover:text-[#E30613] transition-colors" href="#kontakt">
                Zapytaj o wycenę <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</article>
</div>
</div>
</section>

<section aria-labelledby="cennik-heading" className="bg-[#0a0a0a] border-white/5 border-t pt-24 pb-24" id="cennik">
<div className="max-w-5xl mx-auto px-6">

<header className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight mb-4" id="cennik-heading">
            CENNIK</h2>
<div className="h-1 w-20 bg-[#E30613] mx-auto mb-6"></div>
<p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Ceny orientacyjne – ostateczna kwota zależy od modelu auta i zakresu prac. Zadzwoń lub napisz, wycenimy
            bezpłatnie.
          </p>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-neutral-900 border border-white/5 p-6">
<div className="flex items-center gap-3 mb-6">
<iconify-icon aria-hidden="true" className="text-[#E30613]" icon="lucide:wrench" width="24"></iconify-icon>
<h3 className="text-lg font-display text-white uppercase tracking-wide">Serwis eksploatacyjny</h3>
</div>
<ul className="space-y-3 text-sm">
<li className="flex justify-between text-gray-300 border-b border-white/5 pb-3">
<span>Wymiana oleju z filtrem</span>
<span className="text-white font-medium">od 100 zł</span>
</li>
<li className="flex justify-between text-gray-300 border-b border-white/5 pb-3">
<span>Wymiana filtra powietrza</span>
<span className="text-white font-medium">od 30 zł</span>
</li>
<li className="flex justify-between text-gray-300 border-b border-white/5 pb-3">
<span>Wymiana filtra paliwa</span>
<span className="text-white font-medium">od 50 zł</span>
</li>
<li className="flex justify-between text-gray-300 border-b border-white/5 pb-3">
<span>Wymiana filtra kabinowego</span>
<span className="text-white font-medium">od 30 zł</span>
</li>
<li className="flex justify-between text-gray-300 border-b border-white/5 pb-3">
<span>Wymiana płynu hamulcowego</span>
<span className="text-white font-medium">od 50 zł</span>
</li>
<li className="flex justify-between text-gray-300 border-b border-white/5 pb-3">
<span>Wymiana płynu chłodzącego</span>
<span className="text-white font-medium">od 50 zł</span>
</li>
<li className="flex justify-between text-gray-300 border-b border-white/5 pb-3">
<span>Wymiana płynu wspomagania</span>
<span className="text-white font-medium">od 50 zł</span>
</li>
<li className="flex justify-between text-gray-300">
<span>Wymiana świec zapłonowych (1 szt.)</span>
<span className="text-white font-medium">od 25 zł</span>
</li>
</ul>
</div>

<div className="bg-neutral-900 border border-white/5 p-6">
<div className="flex items-center gap-3 mb-6">
<iconify-icon aria-hidden="true" className="text-[#E30613]" icon="lucide:disc" width="24"></iconify-icon>
<h3 className="text-lg font-display text-white uppercase tracking-wide">Układ hamulcowy</h3>
</div>
<ul className="space-y-3 text-sm">
<li className="flex justify-between text-gray-300 border-b border-white/5 pb-3">
<span>Wymiana klocków przód</span>
<span className="text-white font-medium">od 100 zł</span>
</li>
<li className="flex justify-between text-gray-300 border-b border-white/5 pb-3">
<span>Wymiana klocków tył</span>
<span className="text-white font-medium">od 100 zł</span>
</li>
<li className="flex justify-between text-gray-300 border-b border-white/5 pb-3">
<span>Wymiana tarcz i klocków przód</span>
<span className="text-white font-medium">od 150 zł</span>
</li>
<li className="flex justify-between text-gray-300 border-b border-white/5 pb-3">
<span>Wymiana tarcz i klocków tył</span>
<span className="text-white font-medium">od 150 zł</span>
</li>
<li className="flex justify-between text-gray-300 border-b border-white/5 pb-3">
<span>Naprawa zacisku hamulcowego</span>
<span className="text-white font-medium">od 100 zł</span>
</li>
<li className="flex justify-between text-gray-300">
<span>Naprawa prowadnic zacisku</span>
<span className="text-white font-medium">od 50 zł</span>
</li>
</ul>
</div>

<div className="bg-neutral-900 border border-white/5 p-6">
<div className="flex items-center gap-3 mb-6">
<iconify-icon aria-hidden="true" className="text-[#E30613]" icon="lucide:car" width="24"></iconify-icon>
<h3 className="text-lg font-display text-white uppercase tracking-wide">Zawieszenie i wydech</h3>
</div>
<ul className="space-y-3 text-sm">
<li className="flex justify-between text-gray-300 border-b border-white/5 pb-3">
<span>Wymiana/naprawa tłumika (1 szt.)</span>
<span className="text-white font-medium">od 100 zł</span>
</li>
<li className="flex justify-between text-gray-300 border-b border-white/5 pb-3">
<span>Wymiana wahacza (1 szt.)</span>
<span className="text-white font-medium">od 150 zł</span>
</li>
<li className="flex justify-between text-gray-300 border-b border-white/5 pb-3">
<span>Wymiana sworznia wahacza (1 szt.)</span>
<span className="text-white font-medium">od 100 zł</span>
</li>
<li className="flex justify-between text-gray-300">
<span>Wymiana tulei wahacza (1 strona)</span>
<span className="text-white font-medium">od 120 zł</span>
</li>
</ul>
</div>

<div className="bg-neutral-900 border border-white/5 p-6">
<div className="flex items-center gap-3 mb-6">
<iconify-icon aria-hidden="true" className="text-[#E30613]" icon="lucide:scan-line" width="24"></iconify-icon>
<h3 className="text-lg font-display text-white uppercase tracking-wide">Diagnostyka</h3>
</div>
<ul className="space-y-3 text-sm">
<li className="flex justify-between text-gray-300 border-b border-white/5 pb-3">
<span>Ogólna diagnostyka samochodu</span>
<span className="text-white font-medium">od 100 zł</span>
</li>
<li className="flex justify-between text-gray-300 border-b border-white/5 pb-3">
<span>Diagnostyka komputerowa</span>
<span className="text-white font-medium">od 100 zł</span>
</li>
<li className="flex justify-between text-gray-300">
<span>Kasowanie inspekcji</span>
<span className="text-white font-medium">od 50 zł</span>
</li>
</ul>
</div>
</div>

<div className="mt-8 bg-neutral-900 border border-white/5 p-6">
<div className="flex items-center gap-3 mb-6">
<iconify-icon aria-hidden="true" className="text-[#E30613]" icon="lucide:sparkles" width="24"></iconify-icon>
<h3 className="text-lg font-display text-white uppercase tracking-wide">Lakiernictwo i renowacja</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
<div className="flex justify-between text-gray-300 border-b border-white/5 pb-3 md:border-b-0 md:pb-0">
<span>Polerowanie/renowacja reflektorów</span>
<span className="text-white font-medium">od 400 zł</span>
</div>
<div className="flex justify-between text-gray-300 border-b border-white/5 pb-3 md:border-b-0 md:pb-0">
<span>Car spa</span>
<span className="text-white font-medium">od 300 zł</span>
</div>
<div className="flex justify-between text-gray-300">
<span>Car detailing / renowacja</span>
<span className="text-white font-medium">wycena indywidualna</span>
</div>
</div>
</div>

<div className="mt-12 text-center">
<p className="text-gray-400 text-sm mb-6">Nie znalazłeś swojej usługi? Zadzwoń – wycenimy bezpłatnie.</p>
<a className="inline-block bg-[#E30613] hover:bg-red-700 text-white px-8 py-4 text-sm font-medium uppercase tracking-widest transition-all duration-300" href="#kontakt">
            Zapytaj o wycenę
          </a>
</div>
</div>
</section>

<section aria-labelledby="o-nas-heading" className="overflow-hidden bg-[#050505] pt-24 pb-24 relative" id="o-nas">
<div className="absolute inset-0 z-0">
<img alt="Założyciele ZapaCars - Arek i Maciej przy srebrnej Toyocie Suprze" className="w-full h-full object-cover object-center opacity-90" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce402aa0-2290-4d2d-a391-d2f492be0934_3840w.webp"/>
<div className="bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent absolute inset-0"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="lg:col-span-1">
<h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight mb-6" id="o-nas-heading">
              BENZYNĘ MAMY WE KRWI
            </h2>
<div className="space-y-6 text-gray-300 font-light leading-relaxed text-base">
<p>
                Poznaj historię, która zaczęła się od jednej
                <strong className="text-white font-display font-bold text-lg uppercase tracking-wider">Toyoty Supry</strong>
                i dwóch kuzynów z niemożliwą do ugaszenia pasją do czterech kółek.
              </p>
<p>
<strong className="text-white font-display font-bold text-lg uppercase tracking-wider">Arek i Maciej</strong>
                – jeden z pełnym placem samochodów, drugi poszukujący swojego wymarzonego auta – wspólnie kupili ten
                legendarny model. To był moment, który zmienił wszystko.
              </p>
<p>
                Szybko zrozumieliśmy, że to coś więcej niż jedno auto. To była szansa, żeby pasję przekuć w misję –
                pomagać innym spełniać motoryzacyjne marzenia. Łącząc świetną lokalizację w Mysłowicach z naszym
                doświadczeniem, stworzyliśmy miejsce wyjątkowe. Tak powstało
                <strong className="text-[#E30613] font-display font-bold text-lg uppercase tracking-wider">ZapaCars</strong>.
              </p>
</div>
<div className="flex gap-12 mt-10 border-t border-white/10 pt-8">
<div className="flex items-start gap-3">
<div className="mt-1 text-[#E30613]">
<iconify-icon aria-hidden="true" icon="lucide:flame" width="24"></iconify-icon>
</div>
<div>
<span className="block text-4xl font-display text-white font-bold tracking-tight">100%</span>
<span className="text-sm text-gray-400 font-medium uppercase tracking-wider">Czystej Pasji</span>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-[#E30613]">
<iconify-icon aria-hidden="true" icon="lucide:users" width="24"></iconify-icon>
</div>
<div>
<span className="block text-4xl font-display text-white font-bold tracking-tight">5.0</span>
<span className="text-sm text-gray-400 font-medium uppercase tracking-wider">Ocena Google</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-1"></div>
</div>
</div>
</section>

<section aria-labelledby="faq-heading" className="bg-[#0a0a0a] border-white/5 border-t pt-24 pb-24" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-display font-medium text-white tracking-tight mb-12 text-center" id="faq-heading">
          NAJCZĘSTSZE PYTANIA</h2>
<div className="space-y-4">

<details className="group bg-neutral-900 border border-white/5 p-4">
<summary className="flex items-center justify-between cursor-pointer text-white font-medium list-none">
<span className="text-sm">Ile kosztuje wymiana oleju w ZapaCars?</span>
<span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="lucide:chevron-down" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Wymiana oleju z filtrem oleju kosztuje od 100 zł. Ostateczna cena zależy od modelu samochodu i rodzaju
              oleju. Wszystkie ceny w naszym cenniku są orientacyjne – dokładną wycenę otrzymasz po kontakcie z
              warsztatem lub podczas wizyty.
            </p>
</details>

<details className="group bg-neutral-900 border border-white/5 p-4">
<summary className="flex items-center justify-between cursor-pointer text-white font-medium list-none">
<span className="text-sm">Czy ZapaCars oferuje gwarancję na naprawy lakiernicze?</span>
<span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="lucide:chevron-down" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Tak, na wszystkie usługi lakiernicze i renowacyjne udzielamy pisemnej gwarancji. Używamy materiałów
              premium, co pozwala nam zapewnić trwałość i odporność powłoki przez wiele lat. Szczegóły ustalamy
              indywidualnie w zależności od zakresu prac.
            </p>
</details>

<details className="group bg-neutral-900 border border-white/5 p-4">
<summary className="flex items-center justify-between cursor-pointer text-white font-medium list-none">
<span className="text-sm">Jakie są godziny otwarcia warsztatu ZapaCars?</span>
<span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="lucide:chevron-down" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Warsztat ZapaCars w Mysłowicach jest czynny od poniedziałku do piątku w godzinach 8:00-16:00. W weekendy
              warsztat jest zamknięty. Zalecamy wcześniejsze umówienie wizyty telefonicznie pod numerem 666 959 570.
            </p>
</details>

<details className="group bg-neutral-900 border border-white/5 p-4">
<summary className="flex items-center justify-between cursor-pointer text-white font-medium list-none">
<span className="text-sm">Czy mogę umówić się na bezpłatną wycenę naprawy?</span>
<span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="lucide:chevron-down" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Tak, wstępna wycena i konsultacja są bezpłatne. Możesz przyjechać z samochodem na oględziny lub wysłać nam
              zdjęcia przez formularz kontaktowy – przygotujemy szczegółowy kosztorys z podziałem na etapy. Decyzja
              należy do Ciebie.
            </p>
</details>

<details className="group bg-neutral-900 border border-white/5 p-4">
<summary className="flex items-center justify-between cursor-pointer text-white font-medium list-none">
<span className="text-sm">Czy ZapaCars naprawia każdy samochód?</span>
<span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="lucide:chevron-down" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Specjalizujemy się w kompleksowych naprawach, renowacjach klasyków i projektach tuningowych. Nie zajmujemy
              się naprawą silników ani pojazdami po poważnych wypadkach wymagającymi prostowania karoserii – ale chętnie
              polecimy sprawdzone warsztaty w tych specjalizacjach.
            </p>
</details>

<details className="group bg-neutral-900 border border-white/5 p-4">
<summary className="flex items-center justify-between cursor-pointer text-white font-medium list-none">
<span className="text-sm">Jak wygląda proces naprawy w ZapaCars krok po kroku?</span>
<span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="lucide:chevron-down" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Proces jest prosty: 1) Przyjeżdżasz na wycenę lub diagnozę, 2) Otrzymujesz szczegółowy kosztorys, 3) Po
              akceptacji ustalamy termin realizacji, 4) Realizujemy naprawę i informujemy o postępach, 5) Odbierasz
              samochód i płacisz. Bez niespodzianek i ukrytych kosztów.
            </p>
</details>
</div>
</div>
</section>
</main>

<section aria-labelledby="blog-heading" className="py-24 bg-[#050505] border-t border-white/5" id="blog">
<div className="max-w-7xl mx-auto px-6">
<header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end">
<div>
<h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight mb-2" id="blog-heading">WIEDZA I PORADY</h2>
<div className="h-1 w-20 bg-[#E30613]"></div>
</div>
<p className="text-gray-400 max-w-md mt-6 md:mt-0 text-sm leading-relaxed">
                Praktyczne porady motoryzacyjne od mechaników z ZapaCars. Dowiedz się, jak dbać o swój samochód.
            </p>
</header>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group">
<a className="block" href="/blog/ile-kosztuje-wymiana-oleju">
<div className="overflow-hidden border border-white/5 mb-4 aspect-video bg-neutral-900">
<img alt="Wymiana oleju w samochodzie - mechanik wlewa olej silnikowy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" height="225" loading="lazy" src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&amp;w=800&amp;auto=format&amp;fit=crop" width="400"/>
</div>
<span className="text-xs text-[#E30613] block mb-2">Serwis • 5 min czytania</span>
<h3 className="text-lg font-display text-white group-hover:text-[#E30613] transition-colors mb-2">Ile kosztuje wymiana oleju? Cennik 2025</h3>
<p className="text-gray-500 text-sm line-clamp-2">Wymiana oleju kosztuje od 100 do 300 zł. Sprawdź, od czego zależy cena i jak nie przepłacić w warsztacie.</p>
</a>
</article>

<article className="group">
<a className="block" href="/blog/jak-czesto-wymieniac-klocki-hamulcowe">
<div className="overflow-hidden border border-white/5 mb-4 aspect-video bg-neutral-900">
<img alt="Klocki hamulcowe - wymiana i kontrola zużycia" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" height="225" loading="lazy" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&amp;w=800&amp;auto=format&amp;fit=crop" width="400"/>
</div>
<span className="text-xs text-[#E30613] block mb-2">Hamulce • 4 min czytania</span>
<h3 className="text-lg font-display text-white group-hover:text-[#E30613] transition-colors mb-2">Jak często wymieniać klocki hamulcowe?</h3>
<p className="text-gray-500 text-sm line-clamp-2">Klocki wymienia się co 30 000-60 000 km. Poznaj objawy zużycia i dowiedz się, kiedy jechać do warsztatu.</p>
</a>
</article>

<article className="group">
<a className="block" href="/blog/renowacja-klasyka-koszt-czas">
<div className="overflow-hidden border border-white/5 mb-4 aspect-video bg-neutral-900">
<img alt="Renowacja samochodu klasycznego - projekt w trakcie realizacji" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" height="225" loading="lazy" src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&amp;w=800&amp;auto=format&amp;fit=crop" width="400"/>
</div>
<span className="text-xs text-[#E30613] block mb-2">Renowacja • 6 min czytania</span>
<h3 className="text-lg font-display text-white group-hover:text-[#E30613] transition-colors mb-2">Renowacja klasyka – ile kosztuje i ile trwa?</h3>
<p className="text-gray-500 text-sm line-clamp-2">Renowacja kosztuje od 30 000 do 200 000 zł i trwa 6-24 miesięcy. Sprawdź, co wpływa na cenę projektu.</p>
</a>
</article>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

<article className="group">
<a className="block md:flex gap-6" href="/blog/5-oznak-ze-hamulce-wymagaja-wymiany">
<div className="overflow-hidden border border-white/5 mb-4 md:mb-0 aspect-video md:aspect-square md:w-48 md:flex-shrink-0 bg-neutral-900">
<img alt="Tarcza hamulcowa z widocznymi śladami zużycia" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" height="200" loading="lazy" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&amp;w=400&amp;auto=format&amp;fit=crop" width="200"/>
</div>
<div className="flex flex-col justify-center">
<span className="text-xs text-[#E30613] block mb-2">Bezpieczeństwo • 3 min czytania</span>
<h3 className="text-lg font-display text-white group-hover:text-[#E30613] transition-colors mb-2">5 oznak, że Twoje hamulce wymagają wymiany</h3>
<p className="text-gray-500 text-sm line-clamp-2">Piszczenie, wibracje, dłuższa droga hamowania? Poznaj sygnały ostrzegawcze, których nie wolno ignorować.</p>
</div>
</a>
</article>

<article className="group">
<a className="block md:flex gap-6" href="/blog/warsztat-samochodowy-myslowice-jak-wybrac">
<div className="overflow-hidden border border-white/5 mb-4 md:mb-0 aspect-video md:aspect-square md:w-48 md:flex-shrink-0 bg-neutral-900">
<img alt="Warsztat samochodowy - mechanik przy pracy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" height="200" loading="lazy" src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&amp;w=400&amp;auto=format&amp;fit=crop" width="200"/>
</div>
<div className="flex flex-col justify-center">
<span className="text-xs text-[#E30613] block mb-2">Poradnik • 4 min czytania</span>
<h3 className="text-lg font-display text-white group-hover:text-[#E30613] transition-colors mb-2">Warsztat samochodowy Mysłowice – jak wybrać?</h3>
<p className="text-gray-500 text-sm line-clamp-2">Na co zwrócić uwagę szukając mechanika? Opinie, ceny, specjalizacja – praktyczne wskazówki dla kierowców.</p>
</div>
</a>
</article>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-white/10 border-t pt-20 pb-10" id="kontakt">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">

<div>
<h2 className="text-3xl font-display font-medium text-white tracking-tight mb-2">SKONTAKTUJ SIĘ</h2>
<p className="text-gray-400 mb-8 text-sm">Wypełnij formularz. Odpowiemy w ciągu kilku godzin roboczych.</p>
<form action="#" className="space-y-4" method="POST">
<div className="grid grid-cols-2 gap-4">
<input autocomplete="given-name" className="bg-neutral-900 border border-white/10 p-4 text-white text-sm focus:border-[#E30613] focus:outline-none transition-colors w-full" name="name" placeholder="Imię" required="" type="text"/>
<input autocomplete="tel" className="bg-neutral-900 border border-white/10 p-4 text-white text-sm focus:border-[#E30613] focus:outline-none transition-colors w-full" name="phone" placeholder="Telefon" required="" type="tel"/>
</div>
<input autocomplete="email" className="bg-neutral-900 border border-white/10 p-4 text-white text-sm focus:border-[#E30613] focus:outline-none transition-colors w-full" name="email" placeholder="Email" type="email"/>
<textarea className="bg-neutral-900 border border-white/10 p-4 text-white text-sm focus:border-[#E30613] focus:outline-none transition-colors w-full" name="message" placeholder="Wiadomość / Opisz problem z autem" rows="4"></textarea>
<button className="bg-[#E30613] text-white px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-red-700 transition-all duration-300 w-full md:w-auto" type="submit">
                        Wyślij Wiadomość
                    </button>
</form>
</div>

<div className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<h3 className="text-white font-display text-lg mb-4 uppercase tracking-wide">Adres warsztatu</h3>
<address className="text-gray-400 text-sm leading-relaxed not-italic">
<strong>ZapaCars</strong><br/>
                            ul. Fabryczna 12<br/>
                            41-404 Mysłowice<br/>
                            Polska
            </address>
<p className="text-gray-500 text-xs mt-3">
<strong>Godziny otwarcia:</strong><br/>
                            Pon-Pt: 8:00 - 16:00<br/>
                            Sob-Nd: Zamknięte
            </p>
</div>
<div>
<h3 className="text-white font-display text-lg mb-4 uppercase tracking-wide">Kontakt</h3>
<div className="text-gray-400 text-sm leading-relaxed flex flex-col gap-1">
<a className="hover:text-[#E30613] transition-colors flex items-center gap-2" href="tel:+48666959570">
<iconify-icon aria-hidden="true" icon="lucide:phone" width="14"></iconify-icon> 666 959 570 (Maciej)
              </a>
<a className="hover:text-[#E30613] transition-colors flex items-center gap-2" href="tel:+48730140666">
<iconify-icon aria-hidden="true" icon="lucide:phone" width="14"></iconify-icon> 730 140 666 (Arek)
              </a>
<a className="hover:text-[#E30613] transition-colors flex items-center gap-2 mt-2" href="mailto:kontakt.zapacars@gmail.com">
<iconify-icon aria-hidden="true" icon="lucide:mail" width="14"></iconify-icon>
                kontakt.zapacars@gmail.com
              </a>
</div>
</div>
</div>

<div className="flex space-x-4">
<a aria-label="Facebook ZapaCars" className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#E30613] hover:text-white hover:border-[#E30613] transition-all" href="https://www.facebook.com/zapacars" rel="noopener" target="_blank">
<iconify-icon icon="lucide:facebook" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a aria-label="Instagram ZapaCars" className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#E30613] hover:text-white hover:border-[#E30613] transition-all" href="https://www.instagram.com/zapacars/" rel="noopener" target="_blank">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>

<div className="w-full h-48 bg-neutral-900 border border-white/10 relative group overflow-hidden">
<iframe aria-label="Mapa Google pokazująca lokalizację warsztatu ZapaCars" frameborder="0" height="100%" loading="lazy" scrolling="no" src="https://maps.google.com/maps?q=Fabryczna%2012%20Mysłowice&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{filter: 'grayscale(100%) invert(92%) contrast(83%)', border: '0'}} title="Mapa dojazdu do warsztatu ZapaCars w Mysłowicach" width="100%">
</iframe>
<a className="absolute inset-0 z-10 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" href="https://www.google.com/maps/dir//Fabryczna+12+Mysłowice" rel="noopener" target="_blank">
<span className="bg-[#E30613] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest">Wyznacz trasę</span>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
<p>© 2025 ZapaCars. Wszelkie prawa zastrzeżone.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-gray-400 transition-colors" href="/polityka-prywatnosci">Polityka Prywatności</a>
</div>
</div>
</footer>

    </>
  );
}
