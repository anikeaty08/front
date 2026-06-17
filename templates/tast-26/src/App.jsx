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
"@type": "LocalBusiness",
"name": "Fresh Spin Sp. z o.o.",
"description": "Profesjonalna pralnia przemysłowa dla hoteli, pensjonatów i apartamentów na wynajem w Warszawie.",
"url": "https://freshspin.pl",
"telephone": "+48221234567",
"email": "biuro@freshspin.pl",
"address": {
"@type": "PostalAddress",
"streetAddress": "Szczęsna 26",
"addressLocality": "Warszawa",
"postalCode": "02-454",
"addressCountry": "PL"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 52.2297,
"longitude": 21.0122
},
"openingHoursSpecification": [
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
"opens": "08:00",
"closes": "18:00"
}
],
"areaServed": {
"@type": "City",
"name": "Warszawa"
},
"priceRange": "$$",
"vatID": "5223367295"
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const hamburger = document.getElementById('hamburger');
            const isOpen = menu.style.display === 'block';
            menu.style.display = isOpen ? 'none' : 'block';
            hamburger.innerHTML = isOpen
                ? '<iconify-icon icon="solar:hamburger-menu-linear" style="font-size:28px;"></iconify-icon>'
                : '<iconify-icon icon="solar:close-circle-linear" style="font-size:28px;"></iconify-icon>';
        }

        function closeMobileMenu() {
            document.getElementById('mobile-menu').style.display = 'none';
            document.getElementById('hamburger').innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" style="font-size:28px;"></iconify-icon>';
        }

        function switchPage(pageId) {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            const target = document.getElementById(pageId);
            if (target) target.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'instant' });
            handleScroll();
            setActiveNav(pageId);
        }

        function setActiveNav(pageId) {
            const map = {
                'page-home': null,
                'page-services': 0,
                'page-for-whom': 1,
                'page-how': 2,
                'page-contact': 3
            };
            document.querySelectorAll('#navbar .nav-links button').forEach((btn, i) => {
                btn.classList.remove('active');
            });
            const idx = map[pageId];
            if (idx !== null && idx !== undefined) {
                const btns = document.querySelectorAll('#navbar .nav-links button');
                if (btns[idx]) btns[idx].classList.add('active');
            }
        }

        function handleScroll() {
            const nav = document.getElementById('navbar');
            const homePage = document.getElementById('page-home');
            const isHome = homePage && homePage.classList.contains('active');

            if (!isHome || window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll();
    
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
      

<nav id="navbar">
<div className="nav-inner">
<span className="logo" onclick="switchPage('page-home'); closeMobileMenu();">Fresh Spin</span>
<div className="nav-links">
<button onclick="switchPage('page-services')">Usługi</button>
<button onclick="switchPage('page-for-whom')">Obsługiwane branże</button>
<button onclick="switchPage('page-how')">Jak Działamy</button>
<button onclick="switchPage('page-contact')">Kontakt</button>
</div>
<div className="nav-right">
<a className="nav-phone" href="tel:+48221234567" style={{textDecoration: 'none'}}>
<iconify-icon icon="solar:phone-linear" style={{fontSize: '20px'}}></iconify-icon>
<span style={{fontSize: '17px', fontWeight: '500', letterSpacing: '-0.01em'}}>+48 22 123 45 67</span>
</a>
<button className="nav-cta" onclick="switchPage('page-contact')">Zapytaj o ofertę</button>
</div>

<button id="hamburger" onclick="toggleMobileMenu()" style={{display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: '4px'}}>
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '28px'}}></iconify-icon>
</button>
</div>

<div id="mobile-menu" style={{display: 'none', background: '#ffffff', borderTop: '1px solid #e0f2fe', padding: '16px 24px 24px'}}>
<div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
<button onclick="switchPage('page-services'); closeMobileMenu();" style={{background: 'none', border: 'none', cursor: 'pointer', fontFamily: '\'Outfit\', sans-serif', fontSize: '16px', fontWeight: '500', color: '#1e293b', textAlign: 'left', padding: '12px 0', borderBottom: '1px solid #f0f9ff'}}>Usługi</button>
<button onclick="switchPage('page-for-whom'); closeMobileMenu();" style={{background: 'none', border: 'none', cursor: 'pointer', fontFamily: '\'Outfit\', sans-serif', fontSize: '16px', fontWeight: '500', color: '#1e293b', textAlign: 'left', padding: '12px 0', borderBottom: '1px solid #f0f9ff'}}>Obsługiwane branże</button>
<button onclick="switchPage('page-how'); closeMobileMenu();" style={{background: 'none', border: 'none', cursor: 'pointer', fontFamily: '\'Outfit\', sans-serif', fontSize: '16px', fontWeight: '500', color: '#1e293b', textAlign: 'left', padding: '12px 0', borderBottom: '1px solid #f0f9ff'}}>Jak Działamy</button>
<button onclick="switchPage('page-contact'); closeMobileMenu();" style={{background: 'none', border: 'none', cursor: 'pointer', fontFamily: '\'Outfit\', sans-serif', fontSize: '16px', fontWeight: '500', color: '#1e293b', textAlign: 'left', padding: '12px 0', borderBottom: '1px solid #f0f9ff'}}>Kontakt</button>
<a href="tel:+48221234567" style={{display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#0ea5e9', fontSize: '17px', fontWeight: '600', padding: '16px 0 4px'}}>
<iconify-icon icon="solar:phone-linear" style={{fontSize: '20px'}}></iconify-icon>
                    +48 22 123 45 67
                </a>
</div>
</div>
</nav>



<div className="page active" id="page-home">

<section className="relative h-screen min-h-[600px] flex items-center justify-start pt-20">
<div className="absolute inset-0 z-0 overflow-hidden">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" poster="https://res.cloudinary.com/depa0audz/image/upload/v1773343984/pralnia-przemyslowa-wnetrze-warszawa.png">
<source src="https://res.cloudinary.com/depa0audz/video/upload/v1773339607/A_cinematic_walkthrough_of_a_l_Kling_30__26347_zuim0i.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0" style={{background: 'linear-gradient(to right, rgba(12,74,110,0.92), rgba(12,74,110,0.42))'}}></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
<div className="max-w-3xl">
<span className="text-white/80 uppercase tracking-widest text-sm mb-4 block font-normal">Warszawa — 7 dni w tygodniu, 365 dni w roku</span>
<h1 className="text-3xl md:text-5xl lg:text-6xl font-['Outfit'] font-semibold tracking-tight text-white leading-tight mb-6">
                        Profesjonalna pralnia przemysłowa<br/>w Warszawie.
                    </h1>
<p className="text-lg md:text-xl text-white/90 font-normal mb-10 max-w-2xl leading-relaxed">
                        Obsługujemy hotele, pensjonaty i apartamenty na wynajem w Warszawie. Własna flota, niezawodna logistyka, stały harmonogram — przez cały rok.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-[#0ea5e9] hover:bg-[#0ea5e9]/90 text-white px-8 py-4 rounded-lg text-base transition-colors text-center" onclick="switchPage('page-contact')">
                            Zapytaj o ofertę
                        </button>
<button className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-base transition-colors text-center flex items-center justify-center gap-2" onclick="switchPage('page-services')">
                            Zobacz nasze usługi <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="bg-[#0c4a6e] py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8" style={{borderRight: 'none'}}>
<div className="text-center px-4" style={{borderRight: '1px solid rgba(255,255,255,0.1)'}}>
<div className="text-3xl font-['Outfit'] font-semibold tracking-tight text-white mb-1">24h</div>
<div className="text-base font-normal text-[#bae6fd]">Odbiór i zwrot w 24h</div>
</div>
<div className="text-center px-4" style={{borderRight: '1px solid rgba(255,255,255,0.1)'}}>
<div className="text-3xl font-['Outfit'] font-semibold tracking-tight text-white mb-1">365</div>
<div className="text-base font-normal text-[#bae6fd]">Dni w roku bez przerwy</div>
</div>
<div className="text-center px-4" style={{borderRight: '1px solid rgba(255,255,255,0.1)'}}>
<div className="text-3xl font-['Outfit'] font-semibold tracking-tight text-white mb-1">100%</div>
<div className="text-base font-normal text-[#bae6fd]">Własna flota, własny zespół</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-['Outfit'] font-semibold tracking-tight text-white mb-1">7/7</div>
<div className="text-base font-normal text-[#bae6fd]">Dni w tygodniu, cały rok</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
<div className="relative rounded-xl overflow-hidden" style={{boxShadow: '0 4px 24px rgba(14,165,233,0.10)'}}>
<img alt="Pralnia Fresh Spin Warszawa" className="w-full h-full object-cover" loading="lazy" src="https://res.cloudinary.com/depa0audz/image/upload/v1773343984/pralnia-przemyslowa-wnetrze-warszawa.png"/>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-['Outfit'] font-semibold tracking-tight text-[#0c4a6e] mb-6 leading-tight">
                            Profesjonalna obsługa pralnicza dla obiektów każdej wielkości.
                        </h2>
<div className="space-y-4 text-lg text-[#1e293b] font-normal leading-relaxed mb-8">
<p>Fresh Spin dostosowuje harmonogram odbioru i dostawy do rytmu pracy Twojego obiektu — nie odwrotnie.</p>
<p>Własna flota i doświadczony zespół gwarantują jakość i terminowość obsługi.</p>
</div>
<button className="text-[#0ea5e9] flex items-center gap-2 text-base font-normal hover:gap-3 transition-all" onclick="switchPage('page-services')">
                            Poznaj nasze usługi <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#f0f9ff]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-['Outfit'] font-semibold tracking-tight text-[#0c4a6e] mb-4">Kogo obsługujemy</h2>
<p className="text-base text-[#1e293b]/80 leading-relaxed">Specjalizujemy się w obsłudze branży hotelowej i turystycznej. Rozumiemy specyfikę operacyjną każdego segmentu.</p>
</div>
<div className="space-y-6">

<div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden" style={{boxShadow: '0 4px 24px rgba(14,165,233,0.06)', border: '1px solid #e0f2fe'}}>
<div className="md:w-1/2 h-64 md:h-auto relative" style={{minHeight: '200px'}}>
<img alt="Pralnia dla hoteli Warszawa" className="w-full h-full object-cover" loading="lazy" src="https://res.cloudinary.com/depa0audz/image/upload/v1773339935/pralnia-hotelowa-obs%C5%82uga-hoteli-warszawa.png"/>
</div>
<div className="md:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
<span className="text-sm uppercase tracking-widest text-[#0ea5e9] mb-3 block">Główna specjalizacja</span>
<h3 className="text-xl font-['Outfit'] font-semibold tracking-tight text-[#0c4a6e] mb-3">Pralnia dla Hoteli i Pensjonatów</h3>
<p className="text-base text-[#1e293b]/80 mb-6 leading-relaxed">Obsługujemy hotele każdej kategorii — od butikowych po duże obiekty miejskie. Pościel, ręczniki, szlafroki, obrusy, odzież pracownicza. Stały harmonogram, ten sam kierowca, przewidywalna logistyka.</p>
<button className="text-[#0ea5e9] flex items-center gap-2 text-base hover:gap-3 transition-all" onclick="switchPage('page-services')">
                                Dowiedz się więcej <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse bg-white rounded-xl overflow-hidden" style={{boxShadow: '0 4px 24px rgba(14,165,233,0.06)', border: '1px solid #e0f2fe'}}>
<div className="md:w-1/2 h-64 md:h-auto relative" style={{minHeight: '200px'}}>
<img alt="Pralnia dla apartamentów na wynajem Warszawa" className="w-full h-full object-cover" loading="lazy" src="https://res.cloudinary.com/depa0audz/image/upload/v1774018992/apartament-najem-krotkoterminowy-warszawa.png"/>
</div>
<div className="md:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
<span className="text-sm uppercase tracking-widest text-[#0ea5e9] mb-3 block">Najem krótkoterminowy</span>
<h3 className="text-xl font-['Outfit'] font-semibold tracking-tight text-[#0c4a6e] mb-3">Pralnia dla Apartamentów i Najmu Krótkoterminowego</h3>
<p className="text-base text-[#1e293b]/80 mb-6 leading-relaxed">Od jednego apartamentu po portfel dziesiątek lokali — skalowalna obsługa, jeden kontrakt, jeden opiekun. Pościel gotowa na kolejnego gościa, zawsze na czas.</p>
<button className="text-[#0ea5e9] flex items-center gap-2 text-base hover:gap-3 transition-all" onclick="switchPage('page-services')">
                                Dowiedz się więcej <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="mt-12">
<p className="text-base uppercase tracking-widest text-[#0ea5e9] mb-6 text-center">Obsługujemy również</p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

<div className="rounded-xl overflow-hidden bg-white group cursor-pointer" style={{border: '1px solid #e0f2fe', boxShadow: '0 2px 12px rgba(14,165,233,0.06)'}}>
<div className="h-52 relative overflow-hidden">
<img alt="Pralnia dla restauracji" className="w-full h-full object-cover" loading="lazy" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.07)'" src="https://res.cloudinary.com/depa0audz/image/upload/v1773339988/krochmalenie-obrusow-restauracja-warszawa.png" style={{transition: 'transform 0.5s ease'}}/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(12,74,110,0.55), transparent)'}}></div>
</div>
<div className="p-4">
<p className="text-base font-semibold text-[#0c4a6e] mb-2">Restauracje i Gastronomia</p>
<p className="text-sm text-[#1e293b]/80 leading-relaxed">Obrusy, serwety, uniformy kelnerskie</p>
</div>
</div>

<div className="rounded-xl overflow-hidden bg-white group cursor-pointer" style={{border: '1px solid #e0f2fe', boxShadow: '0 2px 12px rgba(14,165,233,0.06)'}}>
<div className="h-52 relative overflow-hidden">
<img alt="Pralnia dla SPA" className="w-full h-full object-cover" loading="lazy" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.07)'" src="https://res.cloudinary.com/depa0audz/image/upload/v1773339754/pranie-recznikow-spa-wellness-warszawa.png" style={{transition: 'transform 0.5s ease'}}/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(12,74,110,0.55), transparent)'}}></div>
</div>
<div className="p-4">
<p className="text-base font-semibold text-[#0c4a6e] mb-2">Obiekty SPA &amp; Wellness</p>
<p className="text-sm text-[#1e293b]/80 leading-relaxed">Ręczniki, szlafroki, frotte</p>
</div>
</div>

<div className="rounded-xl overflow-hidden bg-white group cursor-pointer" style={{border: '1px solid #e0f2fe', boxShadow: '0 2px 12px rgba(14,165,233,0.06)'}}>
<div className="h-52 relative overflow-hidden">
<img alt="Pranie odzieży pracowniczej" className="w-full h-full object-cover" loading="lazy" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.07)'" src="https://res.cloudinary.com/depa0audz/image/upload/v1773340060/pranie-odziezy-pracowniczej-warszawa.png" style={{transition: 'transform 0.5s ease'}}/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(12,74,110,0.55), transparent)'}}></div>
</div>
<div className="p-4">
<p className="text-base font-semibold text-[#0c4a6e] mb-2">Odzież Pracownicza</p>
<p className="text-sm text-[#1e293b]/80 leading-relaxed">Uniformy, fartuchy, odzież techniczna</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-32 flex items-center justify-center">
<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Flota Fresh Spin" className="w-full h-full object-cover" loading="lazy" src="https://res.cloudinary.com/depa0audz/image/upload/v1774091375/odbior-dostawa-pralnia-przemyslowa-warszawa_injief.png"/>
<div className="absolute inset-0" style={{background: 'rgba(12,74,110,0.78)'}}></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-['Outfit'] font-semibold tracking-tight text-white mb-6 leading-tight">
                    Niezawodna obsługa pralnicza,<br/>365 dni w roku.
                </h2>
<p className="text-base font-normal text-white/80 max-w-2xl mx-auto leading-relaxed">Własna flota, ustalony harmonogram odbioru i dostawy, dedykowany opiekun. Obsługujemy Warszawę przez cały rok — bez wyjątków w weekendy i święta.</p>
</div>
</section>

<section className="bg-[#0ea5e9] py-16 md:py-24">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-['Outfit'] font-semibold tracking-tight text-white mb-4 leading-tight">Zapraszamy do kontaktu.</h2>
<p className="text-base font-normal text-white/80 mb-8">Skontaktuj się — odpowiemy w ciągu 24 godzin.</p>
<button className="bg-white text-[#0c4a6e] hover:bg-gray-50 px-8 py-4 rounded-lg text-base transition-colors font-medium" onclick="switchPage('page-contact')" style={{boxShadow: '0 4px 16px rgba(0,0,0,0.15)'}}>
                    Zapytaj o ofertę
                </button>
</div>
</section>
</div>



<div className="page" id="page-services">

<section className="relative flex items-center justify-start pt-20" style={{height: '50vh', minHeight: '360px'}}>
<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Usługi pralnicze Fresh Spin" className="w-full h-full object-cover hero-bg-blur" loading="lazy" src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to right, rgba(12,74,110,0.92), rgba(12,74,110,0.58))'}}></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
<h1 className="text-3xl md:text-5xl font-['Outfit'] font-semibold tracking-tight text-white leading-tight mb-4">Profesjonalne usługi pralnicze</h1>
<p className="text-lg text-[#bae6fd] font-normal max-w-2xl leading-relaxed">Kompleksowa obsługa tekstyliów hotelowych i gastronomicznych — od pościeli po odzież pracowniczą. Odbiór i dostawa 7 dni w tygodniu w Warszawie.</p>
</div>
</section>

<section className="py-16 md:py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-['Outfit'] font-semibold tracking-tight text-[#0c4a6e] mb-4">Zakres obsługi</h2>
<p className="text-lg text-[#1e293b]/80 leading-relaxed">Kompleksowa obsługa pralnicza — od odbioru brudnych tekstyliów po dostawę czystych, posegregowanych i gotowych do użycia. Twój zespół może w pełni skupić się na gościach.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white rounded-xl overflow-hidden" style={{border: '1px solid #e0f2fe', boxShadow: '0 4px 24px rgba(14,165,233,0.07)'}}>
<div className="overflow-hidden" style={{height: '320px'}}>
<img alt="Pranie pościeli hotelowej" className="w-full h-full object-cover" loading="lazy" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.04)'" src="https://res.cloudinary.com/depa0audz/image/upload/v1773340079/pranie-poscieli-hotelowej-warszawa.png" style={{transition: 'transform 0.5s ease', objectPosition: 'center'}}/>
</div>
<div className="p-7">
<h3 className="text-xl font-['Outfit'] font-semibold text-[#0c4a6e] mb-3">Pranie i maglowanie pościeli</h3>
<p className="text-base text-[#1e293b]/80 leading-relaxed">Pościel hotelowa prana, maglowana i składana — dostarczana posegregowana asortymentowo, gotowa do bezpośredniego użycia przez housekeeping.</p>
</div>
</div>
<div className="bg-white rounded-xl overflow-hidden" style={{border: '1px solid #e0f2fe', boxShadow: '0 4px 24px rgba(14,165,233,0.07)'}}>
<div className="overflow-hidden" style={{height: '320px'}}>
<img alt="Pranie ręczników hotelowych" className="w-full h-full object-cover" loading="lazy" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.04)'" src="https://res.cloudinary.com/depa0audz/image/upload/v1773340096/pranie-recznikow-frotte-hotelowych-warszawa.png" style={{transition: 'transform 0.5s ease', objectPosition: 'center'}}/>
</div>
<div className="p-7">
<h3 className="text-xl font-['Outfit'] font-semibold text-[#0c4a6e] mb-3">Pranie ręczników i frotte</h3>
<p className="text-base text-[#1e293b]/80 leading-relaxed">Ręczniki i szlafroki prane w procesie zachowującym miękkość i chłonność. Specjalne programy dla tekstyliów SPA z usuwaniem olejków i kosmetyków.</p>
</div>
</div>
<div className="bg-white rounded-xl overflow-hidden" style={{border: '1px solid #e0f2fe', boxShadow: '0 4px 24px rgba(14,165,233,0.07)'}}>
<div className="overflow-hidden" style={{height: '320px'}}>
<img alt="Krochmalenie obrusów restauracyjnych" className="w-full h-full object-cover" loading="lazy" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.04)'" src="https://res.cloudinary.com/depa0audz/image/upload/v1773339988/krochmalenie-obrusow-restauracja-warszawa.png" style={{transition: 'transform 0.5s ease', objectPosition: 'center'}}/>
</div>
<div className="p-7">
<h3 className="text-xl font-['Outfit'] font-semibold text-[#0c4a6e] mb-3">Krochmalenie obrusów i serwet</h3>
<p className="text-base text-[#1e293b]/80 leading-relaxed">Obrusy i serwety restauracyjne wracają wykrochmalone i wyprasowane — gotowe na salę, na każdy serwis.</p>
</div>
</div>
<div className="bg-white rounded-xl overflow-hidden" style={{border: '1px solid #e0f2fe', boxShadow: '0 4px 24px rgba(14,165,233,0.07)'}}>
<div className="overflow-hidden" style={{height: '320px'}}>
<img alt="Pranie odzieży pracowniczej" className="w-full h-full object-cover" loading="lazy" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.04)'" src="https://res.cloudinary.com/depa0audz/image/upload/v1773340060/pranie-odziezy-pracowniczej-warszawa.png" style={{transition: 'transform 0.5s ease', objectPosition: 'center'}}/>
</div>
<div className="p-7">
<h3 className="text-xl font-['Outfit'] font-semibold text-[#0c4a6e] mb-3">Pranie odzieży pracowniczej</h3>
<p className="text-base text-[#1e293b]/80 leading-relaxed">Uniformy, fartuchy, mundury recepcji i odzież kuchenna. Twój personel zawsze prezentuje się profesjonalnie.</p>
</div>
</div>
<div className="bg-white rounded-xl overflow-hidden" style={{border: '1px solid #e0f2fe', boxShadow: '0 4px 24px rgba(14,165,233,0.07)'}}>
<div className="overflow-hidden" style={{height: '320px'}}>
<img alt="Pakowanie i segregacja tekstyliów" className="w-full h-full object-cover" loading="lazy" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.04)'" src="https://res.cloudinary.com/depa0audz/image/upload/v1773339967/pakowanie-segregacja-tekstyliow-hotelowych.png" style={{transition: 'transform 0.5s ease', objectPosition: 'center'}}/>
</div>
<div className="p-7">
<h3 className="text-xl font-['Outfit'] font-semibold text-[#0c4a6e] mb-3">Pakowanie i segregacja asortymentowa</h3>
<p className="text-base text-[#1e293b]/80 leading-relaxed">Każdy komplet pakujemy i segregujemy według Twoich wymagań. Housekeeping otrzymuje gotowy zestaw bez dodatkowego sortowania.</p>
</div>
</div>
<div className="bg-white rounded-xl overflow-hidden" style={{border: '1px solid #e0f2fe', boxShadow: '0 4px 24px rgba(14,165,233,0.07)'}}>
<div className="overflow-hidden" style={{height: '320px'}}>
<img alt="Odbiór i dostawa tekstyliów Warszawa" className="w-full h-full object-cover" loading="lazy" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.04)'" src="https://res.cloudinary.com/depa0audz/image/upload/v1774091375/odbior-dostawa-pralnia-przemyslowa-warszawa_injief.png" style={{transition: 'transform 0.5s ease', objectPosition: 'center'}}/>
</div>
<div className="p-7">
<h3 className="text-xl font-['Outfit'] font-semibold text-[#0c4a6e] mb-3">Odbiór i dostawa — Warszawa</h3>
<p className="text-base text-[#1e293b]/80 leading-relaxed">Własna flota, stały harmonogram, ten sam kierowca. 7 dni w tygodniu — w tym weekendy i święta.</p>
</div>
</div>
</div>

<div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center p-6 rounded-xl bg-[#f0f9ff]">
<div className="text-2xl font-['Outfit'] font-semibold text-[#0c4a6e] mb-1">24h</div>
<div className="text-base text-[#1e293b]/80">Odbiór i zwrot w 24h</div>
</div>
<div className="text-center p-6 rounded-xl bg-[#f0f9ff]">
<div className="text-2xl font-['Outfit'] font-semibold text-[#0c4a6e] mb-1">365 dni</div>
<div className="text-base text-[#1e293b]/80">W tym weekendy i święta</div>
</div>
<div className="text-center p-6 rounded-xl bg-[#f0f9ff]">
<div className="text-2xl font-['Outfit'] font-semibold text-[#0c4a6e] mb-1">100%</div>
<div className="text-base text-[#1e293b]/80">Własna flota</div>
</div>
<div className="text-center p-6 rounded-xl bg-[#f0f9ff]">
<div className="text-2xl font-['Outfit'] font-semibold text-[#0c4a6e] mb-1">Warszawa</div>
<div className="text-base text-[#1e293b]/80">Logistyka na terenie Warszawy</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0ea5e9] py-12 md:py-20">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-['Outfit'] font-semibold tracking-tight text-white mb-5">Zapraszamy do kontaktu.</h2>
<p className="text-base font-normal text-white/80 mb-8">Przygotujemy wycenę dopasowaną do specyfiki Twojego obiektu w ciągu 24 godzin.</p>
<button className="bg-white text-[#0c4a6e] px-8 py-4 rounded-lg text-base font-medium" onclick="switchPage('page-contact')" style={{cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', fontSize: '16px'}}>
                    Zapytaj o ofertę
                </button>
</div>
</section>
</div>



<div className="page" id="page-for-whom">

<section className="relative flex items-center justify-start pt-20" style={{height: '50vh', minHeight: '380px'}}>
<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Obsługiwane branże Fresh Spin" className="w-full h-full object-cover hero-bg-blur" loading="lazy" src="https://res.cloudinary.com/depa0audz/image/upload/v1773339935/pralnia-hotelowa-obs%C5%82uga-hoteli-warszawa.png"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to right, rgba(12,74,110,0.92), rgba(12,74,110,0.55))'}}></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
<h1 className="text-3xl md:text-5xl font-['Outfit'] font-semibold tracking-tight text-white leading-tight mb-4">Obsługiwane branże</h1>
<p className="text-lg text-[#bae6fd] font-normal max-w-xl leading-relaxed">Każda branża ma swoją specyfikę operacyjną. Dostosowujemy zakres i harmonogram obsługi do indywidualnych potrzeb każdego klienta.</p>
</div>
</section>

<section className="py-16 md:py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
<div className="relative rounded-xl overflow-hidden" style={{boxShadow: '0 4px 24px rgba(14,165,233,0.10)'}}>
<img alt="Pralnia dla hoteli Warszawa" className="w-full h-full object-cover" loading="lazy" src="https://res.cloudinary.com/depa0audz/image/upload/v1773339935/pralnia-hotelowa-obs%C5%82uga-hoteli-warszawa.png"/>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-['Outfit'] font-semibold tracking-tight text-[#0c4a6e] mb-6 leading-tight">Hotele i Pensjonaty</h2>
<div className="space-y-4 text-sm text-[#1e293b]/80 leading-relaxed mb-8">
<p>Obsługujemy hotele każdej kategorii — od kameralnych obiektów butikowych po duże hotele miejskie z setkami pokoi. Rozumiemy, że pralnia to część operacji hotelowej, nie usługa dodatkowa.</p>
<p>Zapewniamy kompleksową obsługę pralniczą z własną infrastrukturą logistyczną — bez konieczności utrzymywania wewnętrznego zaplecza pralni.</p>
</div>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-base font-normal"><div className="w-2 h-2 rounded-full bg-[#0ea5e9] shrink-0"></div> Pościel, ręczniki, szlafroki, obrusy restauracyjne</div>
<div className="flex items-center gap-3 text-base font-normal"><div className="w-2 h-2 rounded-full bg-[#0ea5e9] shrink-0"></div> Odzież pracownicza i mundury personelu</div>
<div className="flex items-center gap-3 text-base font-normal"><div className="w-2 h-2 rounded-full bg-[#0ea5e9] shrink-0"></div> Harmonogram odbioru i dostawy 7 dni w tygodniu</div>
<div className="flex items-center gap-3 text-base font-normal"><div className="w-2 h-2 rounded-full bg-[#0ea5e9] shrink-0"></div> Dostawa posegregowana, gotowa do rozłożenia</div>
</div>
<button className="bg-[#0ea5e9] text-white px-7 py-3.5 rounded-lg text-base" onclick="switchPage('page-contact')" style={{border: 'none', cursor: 'pointer', fontFamily: '\'Outfit\', sans-serif'}}>
                            Zapytaj o ofertę
                        </button>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#f0f9ff]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-3xl md:text-4xl font-['Outfit'] font-semibold tracking-tight text-[#0c4a6e] mb-6 leading-tight">Apartamenty i Najem Krótkoterminowy</h2>
<div className="space-y-4 text-sm text-[#1e293b]/80 leading-relaxed mb-8">
<p>Zarządzasz jednym apartamentem czy portfelem dziesiątek lokali — Fresh Spin obsługuje oba scenariusze. Jeden kontrakt, jedna faktura, jeden opiekun, skalowalna obsługa.</p>
<p>Logistykę odbioru i dostawy dopasowujemy do kalendarza rezerwacji. Pościel gotowa na kolejnego gościa, zawsze na czas.</p>
</div>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-base font-normal"><div className="w-2 h-2 rounded-full bg-[#0ea5e9] shrink-0"></div> Obsługa od 1 do 100+ lokali — jeden kontrakt</div>
<div className="flex items-center gap-3 text-base font-normal"><div className="w-2 h-2 rounded-full bg-[#0ea5e9] shrink-0"></div> Harmonogram dopasowany do kalendarza rezerwacji</div>
<div className="flex items-center gap-3 text-base font-normal"><div className="w-2 h-2 rounded-full bg-[#0ea5e9] shrink-0"></div> Dostawa 7 dni w tygodniu, w tym weekendy i święta</div>
</div>
<button className="bg-[#0ea5e9] text-white px-7 py-3.5 rounded-lg text-base" onclick="switchPage('page-contact')" style={{border: 'none', cursor: 'pointer', fontFamily: '\'Outfit\', sans-serif'}}>
                            Zapytaj o ofertę
                        </button>
</div>
<div className="order-1 lg:order-2 relative rounded-xl overflow-hidden" style={{boxShadow: '0 4px 24px rgba(14,165,233,0.10)'}}>
<img alt="Pralnia dla apartamentów Warszawa" className="w-full h-full object-cover" loading="lazy" src="https://res.cloudinary.com/depa0audz/image/upload/v1773340079/pranie-poscieli-hotelowej-warszawa.png"/>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
<div className="relative rounded-xl overflow-hidden" style={{boxShadow: '0 4px 24px rgba(14,165,233,0.10)'}}>
<img alt="Pralnia dla restauracji Warszawa" className="w-full h-full object-cover" loading="lazy" src="https://res.cloudinary.com/depa0audz/image/upload/v1773339988/krochmalenie-obrusow-restauracja-warszawa.png"/>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-['Outfit'] font-semibold tracking-tight text-[#0c4a6e] mb-4">Restauracje i Gastronomia</h2>
<div className="space-y-4 text-sm text-[#1e293b]/80 leading-relaxed mb-6">
<p>Restauracje wymagają sprawnego cyklu obsługi — obrusy i uniformy muszą być gotowe na każdy serwis. Dostarczamy wykrochmalone, wyprasowane tekstylia w ustalonym rytmie.</p>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 text-base font-normal"><div className="w-2 h-2 rounded-full bg-[#0ea5e9] shrink-0"></div> Obrusy i serwety — krochmalenie i maglowanie</div>
<div className="flex items-center gap-3 text-base font-normal"><div className="w-2 h-2 rounded-full bg-[#0ea5e9] shrink-0"></div> Odzież kelnerska i uniformy kuchenne</div>
<div className="flex items-center gap-3 text-base font-normal"><div className="w-2 h-2 rounded-full bg-[#0ea5e9] shrink-0"></div> Usuwanie trudnych zabrudzeń tłuszczowych</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#f0f9ff]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-3xl md:text-4xl font-['Outfit'] font-semibold tracking-tight text-[#0c4a6e] mb-4">Obiekty SPA i Wellness</h2>
<div className="space-y-4 text-sm text-[#1e293b]/80 leading-relaxed mb-6">
<p>Tekstylia SPA wymagają specjalistycznego procesu — eliminujemy resztki olejków, kremów i kosmetyków, przywracamy miękkość i chłonność. Twoi goście zawsze dostają świeże, puszyste ręczniki.</p>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 text-base font-normal"><div className="w-2 h-2 rounded-full bg-[#0ea5e9] shrink-0"></div> Ręczniki, szlafroki, tekstylia zabiegowe</div>
<div className="flex items-center gap-3 text-base font-normal"><div className="w-2 h-2 rounded-full bg-[#0ea5e9] shrink-0"></div> Specjalistyczne usuwanie olejków i kosmetyków</div>
<div className="flex items-center gap-3 text-base font-normal"><div className="w-2 h-2 rounded-full bg-[#0ea5e9] shrink-0"></div> Przywracanie miękkości i chłonności frotte</div>
</div>
</div>
<div className="order-1 lg:order-2 relative rounded-xl overflow-hidden h-[420px]" style={{boxShadow: '0 4px 24px rgba(14,165,233,0.10)'}}>
<img alt="Pralnia dla SPA Warszawa" className="w-full h-full object-cover" loading="lazy" src="https://res.cloudinary.com/depa0audz/image/upload/v1773339754/pranie-recznikow-spa-wellness-warszawa.png"/>
</div>
</div>
</div>
</section>

<section className="bg-[#0ea5e9] py-16 md:py-24">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-['Outfit'] font-semibold tracking-tight text-white mb-5">Obsługujemy szeroki zakres obiektów.</h2>
<p className="text-base font-normal text-white/80 mb-8">Świadczymy usługi dla obiektów z branży turystycznej, gastronomicznej i hotelarskiej w Warszawie. Skontaktuj się — przygotujemy indywidualną ofertę.</p>
<button className="bg-white text-[#0c4a6e] px-8 py-4 rounded-lg text-base font-medium" onclick="switchPage('page-contact')" style={{cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', fontSize: '16px'}}>
                    Zapytaj o ofertę
                </button>
</div>
</section>
</div>



<div className="page" id="page-how">
<section className="relative flex items-center justify-start pt-20" style={{height: '50vh', minHeight: '380px'}}>
<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Jak działa pralnia hotelowa" className="w-full h-full object-cover hero-bg-blur" loading="lazy" src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to right, rgba(12,74,110,0.90), rgba(12,74,110,0.60))'}}></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
<h1 className="text-3xl md:text-5xl font-['Outfit'] font-semibold tracking-tight text-white leading-tight mb-4">Jak działamy</h1>
<p className="text-lg text-[#bae6fd] font-normal max-w-xl leading-relaxed">Przejrzysty proces — od pierwszej rozmowy do regularnych dostaw. Bez zbędnych formalności i długich wdrożeń.</p>
</div>
</section>
<section className="py-16 md:py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-['Outfit'] font-semibold tracking-tight text-[#0c4a6e] mb-4">Od pierwszego kontaktu do stałej współpracy</h2>
<p className="text-base text-[#1e293b]/80 max-w-xl mx-auto">Pierwsze dostawy zazwyczaj ruszają w ciągu kilku dni roboczych od pierwszej rozmowy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div>
<div className="h-48 rounded-xl overflow-hidden mb-6 relative">
<img alt="Pierwsza rozmowa pralnia hotelowa" className="w-full h-full object-cover" loading="lazy" src="https://res.cloudinary.com/depa0audz/image/upload/v1774019294/industrial-laundry-business-meeting-modern-office._zx2f68.png"/>
<div className="absolute inset-0" style={{background: 'rgba(12,74,110,0.20)', mixBlendMode: 'multiply'}}></div>
<div className="absolute top-4 left-4 bg-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-[#0c4a6e]" style={{boxShadow: '0 2px 8px rgba(0,0,0,0.15)'}}>1</div>
</div>
<h3 className="text-xl font-['Outfit'] font-semibold tracking-tight text-[#0c4a6e] mb-3">Pierwsza rozmowa</h3>
<p className="text-base text-[#1e293b]/80">Rozmawiamy o specyfice Twojego obiektu — wolumenie tekstyliów, harmonogramie i logistyce. Ustalamy szczegóły współpracy i przygotowujemy ofertę.</p>
</div>
<div>
<div className="h-48 rounded-xl overflow-hidden mb-6 relative">
<img alt="Planowanie logistyki" className="w-full h-full object-cover" loading="lazy" src="https://res.cloudinary.com/depa0audz/image/upload/v1774019828/professional-hotel-laundry-service-clean-corridor_jfcxqx.png"/>
<div className="absolute inset-0" style={{background: 'rgba(12,74,110,0.20)', mixBlendMode: 'multiply'}}></div>
<div className="absolute top-4 left-4 bg-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-[#0c4a6e]" style={{boxShadow: '0 2px 8px rgba(0,0,0,0.15)'}}>2</div>
</div>
<h3 className="text-xl font-['Outfit'] font-semibold tracking-tight text-[#0c4a6e] mb-3">Planowanie logistyki</h3>
<p className="text-base text-[#1e293b]/80">Ustalamy szczegóły logistyczne — punkty odbioru, okna czasowe, sposób segregacji. Od początku wszystko przebiega według jasno określonego planu.</p>
</div>
<div>
<div className="h-48 rounded-xl overflow-hidden mb-6 relative">
<img alt="Pranie i obróbka" className="w-full h-full object-cover" loading="lazy" src="https://res.cloudinary.com/depa0audz/image/upload/v1774020239/pranie-przemyslowe-maszyny-pralnicze-warszawa._kk34bf.png"/>
<div className="absolute inset-0" style={{background: 'rgba(12,74,110,0.20)', mixBlendMode: 'multiply'}}></div>
<div className="absolute top-4 left-4 bg-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-[#0c4a6e]" style={{boxShadow: '0 2px 8px rgba(0,0,0,0.15)'}}>3</div>
</div>
<h3 className="text-xl font-['Outfit'] font-semibold tracking-tight text-[#0c4a6e] mb-3">Pranie i przygotowanie</h3>
<p className="text-base text-[#1e293b]/80">Pranie, maglowanie, składanie i pakowanie według ustalonych standardów. Każda partia tekstyliów wraca posegregowana asortymentowo.</p>
</div>
<div>
<div className="h-48 rounded-xl overflow-hidden mb-6 relative">
<img alt="Dostawa do hotelu" className="w-full h-full object-cover" loading="lazy" src="https://res.cloudinary.com/depa0audz/image/upload/v1774026467/dostawa-poscieli-hotelowej-warszawa-pralnia_tdr42j.png"/>
<div className="absolute inset-0" style={{background: 'rgba(12,74,110,0.20)', mixBlendMode: 'multiply'}}></div>
<div className="absolute top-4 left-4 bg-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-[#0c4a6e]" style={{boxShadow: '0 2px 8px rgba(0,0,0,0.15)'}}>4</div>
</div>
<h3 className="text-xl font-['Outfit'] font-semibold tracking-tight text-[#0c4a6e] mb-3">Dostawa do obiektu</h3>
<p className="text-base text-[#1e293b]/80">Czyste tekstylia wracają posegregowane i zapakowane — gotowe do bezpośredniego użycia przez housekeeping.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#f0f9ff]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-['Outfit'] font-semibold tracking-tight text-[#0c4a6e] mb-4">Stała współpraca</h2>
<p className="text-base text-[#1e293b]/80 leading-relaxed">Po wdrożeniu obsługa przebiega według ustalonego harmonogramu. Nie wymaga to zaangażowania z Twojej strony — wszystko działa w tle.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white rounded-xl p-8" style={{border: '1px solid #e0f2fe'}}>
<div className="w-10 h-10 rounded-lg bg-[#f0f9ff] flex items-center justify-center mb-5" style={{border: '1px solid #bae6fd'}}>
<svg fill="none" height="20" stroke="#0ea5e9" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<h3 className="text-xl font-['Outfit'] font-semibold text-[#0c4a6e] mb-3">Stały harmonogram</h3>
<p className="text-base text-[#1e293b]/80 leading-relaxed">Odbiory i dostawy odbywają się w ustalonych oknach czasowych — codziennie, bez konieczności każdorazowego umawiania.</p>
</div>
<div className="bg-white rounded-xl p-8" style={{border: '1px solid #e0f2fe'}}>
<div className="w-10 h-10 rounded-lg bg-[#f0f9ff] flex items-center justify-center mb-5" style={{border: '1px solid #bae6fd'}}>
<svg fill="none" height="20" stroke="#0ea5e9" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<h3 className="text-xl font-['Outfit'] font-semibold text-[#0c4a6e] mb-3">Dedykowany opiekun</h3>
<p className="text-base text-[#1e293b]/80 leading-relaxed">Każdy klient ma przypisanego opiekuna. Jedna osoba do kontaktu we wszystkich sprawach operacyjnych i logistycznych.</p>
</div>
<div className="bg-white rounded-xl p-8" style={{border: '1px solid #e0f2fe'}}>
<div className="w-10 h-10 rounded-lg bg-[#f0f9ff] flex items-center justify-center mb-5" style={{border: '1px solid #bae6fd'}}>
<svg fill="none" height="20" stroke="#0ea5e9" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<h3 className="text-xl font-['Outfit'] font-semibold text-[#0c4a6e] mb-3">Przewidywalne rozliczenia</h3>
<p className="text-base text-[#1e293b]/80 leading-relaxed">Rozliczenie miesięczne na podstawie rzeczywistego wolumenu. Jasna struktura cenowa, bez ukrytych opłat.</p>
</div>
</div>
</div>
</section>
<section className="bg-[#0ea5e9] py-12 md:py-20">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-['Outfit'] font-semibold tracking-tight text-white mb-5">Zapraszamy do kontaktu.</h2>
<p className="text-base font-normal text-white/80 mb-8">Odpowiadamy w ciągu 24 godzin roboczych.</p>
<button className="bg-white text-[#0c4a6e] px-8 py-4 rounded-lg text-base font-medium" onclick="switchPage('page-contact')" style={{cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', fontSize: '16px'}}>
                    Zapytaj o ofertę
                </button>
</div>
</section>
</div>



<div className="page" id="page-contact">
<section className="pt-32 pb-24 relative overflow-hidden" style={{backgroundColor: '#f0f9ff'}}>
<div className="absolute right-0 top-0 opacity-10">
<iconify-icon icon="solar:letter-linear" style={{fontSize: '300px'}}></iconify-icon>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
<h1 className="text-3xl md:text-5xl font-['Outfit'] font-semibold tracking-tight text-[#0c4a6e] mb-5">Kontakt</h1>
<p className="text-lg text-[#0c4a6e]/80 font-normal max-w-xl leading-relaxed mb-8">Opisz swój obiekt i aktualne potrzeby w zakresie obsługi pralniczej. Przygotujemy indywidualną ofertę w ciągu 24 godzin.</p>
<a href="tel:+48221234567" style={{display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#0c4a6e', color: 'white', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '18px', fontWeight: '500', fontFamily: '\'Outfit\', sans-serif'}}>
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                +48 22 123 45 67
            </a>
</div>
</section>
<section className="py-16 md:py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
<div>
<h2 className="text-3xl font-['Outfit'] font-semibold tracking-tight text-[#0c4a6e] mb-8">Dane kontaktowe</h2>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{backgroundColor: '#f0f9ff'}}>
<iconify-icon className="text-2xl text-[#0ea5e9]" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-gray-500 mb-2" style={{letterSpacing: '0.12em'}}>Telefon</p>
<p className="text-xl text-[#1e293b] font-medium">+48 22 123 45 67</p>
<p className="text-base text-gray-700 font-normal mt-1">Pn – Pt: 8:00 – 18:00</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{backgroundColor: '#f0f9ff'}}>
<iconify-icon className="text-2xl text-[#0ea5e9]" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-gray-500 mb-2" style={{letterSpacing: '0.12em'}}>Email</p>
<p className="text-xl text-[#1e293b] font-medium"><a href="mailto:biuro@freshspin.pl" style={{color: 'inherit', textDecoration: 'none'}}>biuro@freshspin.pl</a></p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{backgroundColor: '#f0f9ff'}}>
<iconify-icon className="text-2xl text-[#0ea5e9]" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-gray-500 mb-2" style={{letterSpacing: '0.12em'}}>Obszar obsługi</p>
<p className="text-base text-[#1e293b]">Warszawa</p>
<p className="text-base text-gray-700 font-normal mt-1">Obsługujemy Warszawę własną flotą</p>
</div>
</div>
</div>
<div className="mt-12 p-6 rounded-xl" style={{backgroundColor: '#f0f9ff', border: '1px solid rgba(186,230,253,0.5)'}}>
<h3 className="text-lg font-semibold text-[#0c4a6e] mb-3">Obsługa w weekendy i święta</h3>
<p className="text-base text-gray-700 mb-4">Kontakt dla obiektów objętych umową w sprawach logistyki 24/7:</p>
<p className="text-base font-semibold text-[#0ea5e9]">+48 600 000 000</p>
</div>
</div>
<div className="bg-white rounded-xl p-8" style={{boxShadow: '0 4px 24px rgba(14,165,233,0.10)', border: '1px solid #f1f5f9'}}>
<h2 className="text-3xl font-['Outfit'] font-semibold tracking-tight text-[#0c4a6e] mb-6">Formularz kontaktowy</h2>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Imię i nazwisko</label>
<input className="w-full bg-[#f0f9ff] border border-transparent rounded-lg py-3 px-4 outline-none text-base" onblur="this.style.borderColor='transparent';this.style.background='#f0f9ff'" onfocus="this.style.borderColor='#0ea5e9';this.style.background='white'" placeholder="Jan Kowalski" style={{transition: 'border-color 0.2s'}} type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Firma / Nazwa obiektu</label>
<input className="w-full bg-[#f0f9ff] border border-transparent rounded-lg py-3 px-4 outline-none text-base" onblur="this.style.borderColor='transparent';this.style.background='#f0f9ff'" onfocus="this.style.borderColor='#0ea5e9';this.style.background='white'" placeholder="Hotel XYZ" style={{transition: 'border-color 0.2s'}} type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
<input className="w-full bg-[#f0f9ff] border border-transparent rounded-lg py-3 px-4 outline-none text-base" onblur="this.style.borderColor='transparent';this.style.background='#f0f9ff'" onfocus="this.style.borderColor='#0ea5e9';this.style.background='white'" placeholder="+48 --- --- ---" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Rodzaj obiektu</label>
<div className="relative">
<select className="w-full bg-[#f0f9ff] border border-transparent rounded-lg py-3 px-4 outline-none text-base appearance-none text-[#1e293b]" style={{fontFamily: '\'Outfit\', sans-serif'}}>
<option>Hotel / Pensjonat</option>
<option>Apartamenty / Najem krótkoterminowy</option>
<option>Restauracja / Gastronomia</option>
<option>SPA / Wellness</option>
<option>Inne</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Liczba pokoi / apartamentów (opcjonalnie)</label>
<input className="w-full bg-[#f0f9ff] border border-transparent rounded-lg py-3 px-4 outline-none text-base" onblur="this.style.borderColor='transparent';this.style.background='#f0f9ff'" onfocus="this.style.borderColor='#0ea5e9';this.style.background='white'" placeholder="np. 30" type="number"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Wiadomość</label>
<textarea className="w-full bg-[#f0f9ff] border border-transparent rounded-lg py-3 px-4 outline-none text-base resize-none" onblur="this.style.borderColor='transparent';this.style.background='#f0f9ff'" onfocus="this.style.borderColor='#0ea5e9';this.style.background='white'" placeholder="Dodatkowe informacje — np. obecna sytuacja z pralnią, oczekiwany termin startu..." rows="4"></textarea>
</div>
<label className="flex items-start gap-3 cursor-pointer">
<input className="mt-1 shrink-0" style={{accentColor: '#0ea5e9', width: '16px', height: '16px'}} type="checkbox"/>
<span className="text-sm text-gray-600 leading-relaxed">Wyrażam zgodę na przetwarzanie danych osobowych w celu przygotowania oferty i kontaktu handlowego.</span>
</label>
<button className="w-full text-white py-4 rounded-lg text-base font-medium mt-2" style={{backgroundColor: '#0c4a6e', cursor: 'pointer', border: 'none', fontFamily: '\'Outfit\', sans-serif'}} type="button">
                                Wyślij zapytanie
                            </button>
</form>
</div>
</div>
</div>
</section>
</div>

<footer className="bg-[#0c4a6e] text-white pt-20 pb-12" style={{borderTop: '1px solid rgba(255,255,255,0.1)'}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
<div className="md:col-span-1">
<span className="font-['Outfit'] font-semibold text-3xl tracking-tighter uppercase mb-5 block">Fresh Spin</span>
<p style={{fontSize: '15px', color: 'rgba(255,255,255,0.80)', lineHeight: '1.7'}}>Profesjonalna pralnia przemysłowa. Warszawa. 7 dni w tygodniu, 365 dni w roku.</p>
</div>
<div>
<h4 style={{fontSize: '13px', fontWeight: '600', marginBottom: '20px', color: '#bae6fd', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Nawigacja</h4>
<ul style={{listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
<li><button className="hover:text-white transition-colors" onclick="switchPage('page-services')" style={{background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.85)', fontFamily: '\'Outfit\', sans-serif', fontSize: '15px', padding: '0', textAlign: 'left'}}>Usługi</button></li>
<li><button className="hover:text-white transition-colors" onclick="switchPage('page-for-whom')" style={{background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.85)', fontFamily: '\'Outfit\', sans-serif', fontSize: '15px', padding: '0', textAlign: 'left'}}>Obsługiwane branże</button></li>
<li><button className="hover:text-white transition-colors" onclick="switchPage('page-how')" style={{background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.85)', fontFamily: '\'Outfit\', sans-serif', fontSize: '15px', padding: '0', textAlign: 'left'}}>Jak Działamy</button></li>
<li><button className="hover:text-white transition-colors" onclick="switchPage('page-contact')" style={{background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.85)', fontFamily: '\'Outfit\', sans-serif', fontSize: '15px', padding: '0', textAlign: 'left'}}>Kontakt</button></li>
</ul>
</div>
<div>
<h4 style={{fontSize: '13px', fontWeight: '600', marginBottom: '20px', color: '#bae6fd', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Usługi</h4>
<ul style={{listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
<li><button onclick="switchPage('page-services')" onmouseout="this.style.color='rgba(255,255,255,0.85)'" onmouseover="this.style.color='white'" style={{background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.85)', fontFamily: '\'Outfit\', sans-serif', fontSize: '15px', padding: '0', textAlign: 'left'}}>Pranie pościeli i ręczników</button></li>
<li><button onclick="switchPage('page-services')" onmouseout="this.style.color='rgba(255,255,255,0.85)'" onmouseover="this.style.color='white'" style={{background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.85)', fontFamily: '\'Outfit\', sans-serif', fontSize: '15px', padding: '0', textAlign: 'left'}}>Krochmalenie obrusów</button></li>
<li><button onclick="switchPage('page-services')" onmouseout="this.style.color='rgba(255,255,255,0.85)'" onmouseover="this.style.color='white'" style={{background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.85)', fontFamily: '\'Outfit\', sans-serif', fontSize: '15px', padding: '0', textAlign: 'left'}}>Pranie odzieży pracowniczej</button></li>
<li><button onclick="switchPage('page-services')" onmouseout="this.style.color='rgba(255,255,255,0.85)'" onmouseover="this.style.color='white'" style={{background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.85)', fontFamily: '\'Outfit\', sans-serif', fontSize: '15px', padding: '0', textAlign: 'left'}}>Pakowanie i segregacja</button></li>
<li><button onclick="switchPage('page-services')" onmouseout="this.style.color='rgba(255,255,255,0.85)'" onmouseover="this.style.color='white'" style={{background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.85)', fontFamily: '\'Outfit\', sans-serif', fontSize: '15px', padding: '0', textAlign: 'left'}}>Odbiór i dostawa</button></li>
</ul>
</div>
<div>
<h4 style={{fontSize: '13px', fontWeight: '600', marginBottom: '20px', color: '#bae6fd', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Kontakt</h4>
<ul style={{listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
<li style={{fontSize: '15px', color: 'rgba(255,255,255,0.85)'}}>Warszawa</li>
<li style={{fontSize: '15px', color: 'rgba(255,255,255,0.85)'}}>+48 22 123 45 67</li>
<li style={{fontSize: '15px', color: 'rgba(255,255,255,0.85)'}}><a href="mailto:biuro@freshspin.pl" style={{color: 'inherit', textDecoration: 'none'}}>biuro@freshspin.pl</a></li>
<li style={{fontSize: '14px', color: 'rgba(255,255,255,0.50)', marginTop: '4px'}}>Pn – Pt: 8:00 – 18:00</li>
</ul>
</div>
<div>
<h4 style={{fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: '#bae6fd', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Firma</h4>
<p style={{fontSize: '15px', fontWeight: '600', color: 'rgba(255,255,255,0.90)', marginBottom: '16px'}}>Fresh Spin Sp. z o.o.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
<div>
<span style={{fontSize: '12px', fontWeight: '600', color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '3px'}}>Kapitał zakładowy</span>
<span style={{fontSize: '15px', fontWeight: '600', color: 'rgba(255,255,255,0.90)'}}>200 000 zł</span>
</div>
<div>
<span style={{fontSize: '12px', fontWeight: '600', color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '3px'}}>NIP</span>
<span style={{fontSize: '15px', fontWeight: '600', color: 'rgba(255,255,255,0.90)'}}>5223367295</span>
</div>
<div>
<span style={{fontSize: '12px', fontWeight: '600', color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '3px'}}>REGON</span>
<span style={{fontSize: '15px', fontWeight: '600', color: 'rgba(255,255,255,0.90)'}}>544200048</span>
</div>
</div>
</div>
</div>
<div style={{borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px'}}>
<p className="text-xs text-white/40">© 2026 Fresh Spin. Wszelkie prawa zastrzeżone.</p>
</div>
</div>
</footer>


    </>
  );
}
