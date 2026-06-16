import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu Toggle
        const btn = document.getElementById('menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('open');
        });

        // Cookies Logic
        function acceptCookies() {
            const banner = document.getElementById('cookies-banner');
            banner.classList.add('hidden-banner');
            // In a real scenario, you would set a cookie or localStorage item here
            // localStorage.setItem('cookiesAccepted', 'true');
        }

        // Check for cookies acceptance (simulated)
        // window.addEventListener('DOMContentLoaded', () => {
        //     if (localStorage.getItem('cookiesAccepted')) {
        //         document.getElementById('cookies-banner').classList.add('hidden-banner');
        //     }
        // });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full h-[80vh] min-h-[600px] flex flex-col">

<header className="z-50 transition-all duration-300 w-full absolute top-0 left-0">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-0">

<div className="flex items-center justify-between w-full lg:w-auto">

<div className="flex-shrink-0">
<a className="uppercase sm:text-5xl text-3xl font-semibold text-red-600 tracking-tighter font-google-sans-flex drop-shadow-md" href="#">B2</a>

<a className="sm:text-xl text-lg font-medium text-white tracking-tight font-quicksand drop-shadow-md" href="#">Rafał Brzostek</a>
</div>

<div className="flex items-center gap-4 lg:hidden">

<a className="flex items-center gap-1.5 text-red-600 hover:text-red-500 transition-colors duration-300 drop-shadow-md bg-white/90 px-3 py-1.5 rounded-full" href="tel:+48888691988">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs sm:text-sm font-bold tracking-wide">+48 888 691 988</span>
</a>

<button className="text-white hover:text-red-500 focus:outline-none p-1 transition-colors drop-shadow-md" id="menu-btn">
<svg aria-hidden="true" className="w-[28px] h-[28px]" data-icon="lucide:menu" data-icon-replaced="true" data-width="28" height="28" role="img" strokeWidth="2" style={{color: 'rgb(239, 68, 68)', width: '28px', height: '28px'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="hidden lg:flex flex-col lg:flex-row items-center gap-y-4 lg:gap-x-12">

<nav className="flex space-x-8">
<a className="text-white hover:text-red-500 transition-colors text-sm font-medium drop-shadow-md" href="#home">Strona Główna</a>
<a className="text-white hover:text-red-500 transition-colors text-sm font-medium drop-shadow-md" href="#o-nas">O nas</a>
<a className="text-white hover:text-red-500 transition-colors text-sm font-medium drop-shadow-md" href="#oferta">Oferta</a>
<a className="text-white hover:text-red-500 transition-colors text-sm font-medium drop-shadow-md" href="#galeria">Galeria</a>
<a className="text-white hover:text-red-500 transition-colors text-sm font-medium drop-shadow-md" href="#kontakt">Kontakt</a>
</nav>

<div className="flex items-center gap-6 pl-8 border-l border-white/20">
<div className="flex flex-col items-end gap-1">
<a className="group flex items-center gap-2 text-red-600 hover:text-red-500 transition-colors duration-300 drop-shadow-md" href="tel:+48888691988">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xl font-extrabold tracking-wide">+48 888 691 988</span>
</a>
<a className="group flex items-center gap-2 text-red-600 hover:text-red-500 transition-colors duration-300 drop-shadow-md" href="mailto:b2geodeta@gmail.com">
<svg aria-hidden="true" data-icon="lucide:mail" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="16" rx="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-base font-extrabold tracking-wide">b2geodeta@gmail.com</span>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/95 backdrop-blur-md lg:hidden border-t border-zinc-800" id="mobile-menu">
<div className="px-4 py-4 space-y-2">
<a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-zinc-800 hover:text-red-500" href="#home">Strona Główna</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-zinc-800 hover:text-red-500" href="#o-nas">O nas</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-zinc-800 hover:text-red-500" href="#oferta">Oferta</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-zinc-800 hover:text-red-500" href="#galeria">Galeria</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-zinc-800 hover:text-red-500" href="#kontakt">Kontakt</a>
<div className="pt-4 mt-4 border-t border-zinc-700 space-y-3">
<a className="flex items-center gap-2 text-red-500 px-3 font-semibold" href="tel:+48888691988">
<svg aria-hidden="true" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            +48 888 691 988
                        </a>
<a className="flex items-center gap-2 text-red-500 px-3 font-semibold" href="mailto:b2geodeta@gmail.com">
<svg aria-hidden="true" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="16" rx="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            b2geodeta@gmail.com
                        </a>
</div>
</div>
</div>
</header>

<div className="absolute inset-0 z-0">
<img alt="Tło Geodezja" className="w-full h-full object-cover" src="https://i.postimg.cc/mZQC3DRW/2.jpg"/>

</div>

<div className="flex-grow flex sm:text-left text-center w-full h-full z-10 relative items-center justify-center" id="home">
<div className="sm:px-6 lg:px-8 w-full max-w-7xl mr-auto ml-auto pt-20 pr-4 pl-4"> 
<h1 className="sm:text-6xl lg:text-7xl leading-tight text-4xl font-thin tracking-tight mb-8 drop-shadow-lg">
<span className="font-semibold text-red-600">Usługi Geodezyjne </span> <br/>
<span className="text-red-600">Precyzja i Terminowość</span>
</h1>
<p className="sm:text-xl text-lg font-medium text-slate-50 max-w-2xl mb-10 drop-shadow-md">Kompleksowa obsługa inwestycji budowlanych na terenie M. Rzeszowa, powiatu rzeszowskiego, łańcuckiego, kolbuszowskiego, ropczycko-sędziszowskiego.</p>
<a className="inline-flex items-center justify-center hover:bg-black md:py-4 md:text-lg md:px-10 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-red-500 text-base font-medium text-white bg-red-600 border-transparent border rounded-md px-8 py-3 shadow-lg" href="#kontakt">
                    Skontaktuj się
                </a>
</div>
</div>
</div>

<section className="sm:py-24 bg-white border-zinc-100 border-b pt-16 pb-16" id="o-nas">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="">
<h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight mb-6">O nas</h2>
<div className="w-16 h-1 bg-red-600 mb-6"></div>
<p className="leading-relaxed text-lg text-zinc-600 mb-6">Jesteśmy dynamicznie rozwijającą się firmą geodezyjną z Rzeszowa z wieloletnim doświadczeniem w branży. Naszą misją jest dostarczanie najwyższej jakości usług geodezyjnych, które stanowią solidny fundament każdej inwestycji budowlanej.</p>
<p className="text-zinc-600 text-base leading-relaxed mb-6">
                        Specjalizujemy się w obsłudze zarówno klientów indywidualnych, jak i dużych firm deweloperskich. Korzystamy z nowoczesnego sprzętu pomiarowego oraz zaawansowanego oprogramowania, co gwarantuje precyzję i szybkość realizacji zleceń. Stawiamy na rzetelność, terminowość i profesjonalne doradztwo na każdym etapie współpracy.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-zinc-700">
<svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Nowoczesny sprzęt pomiarowy
                        </li>
<li className="flex items-center text-zinc-700">
<svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Wieloletnie doświadczenie
                        </li>
<li className="flex items-center text-zinc-700">
<svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Terminowość realizacji
                        </li>
</ul>
</div>
<div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-lg overflow-hidden shadow-xl border border-zinc-100 group bg-zinc-100">

<img alt="Zdjęcie O Nas" className="transition-transform duration-700 hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://i.postimg.cc/sgyJ2xYj/glowne4.png"/>
</div>
</div>
</div>
</section>

<section className="sm:py-24 bg-zinc-50 pt-16 pb-16" id="oferta">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight">Nasza Oferta</h2>
<div className="w-16 h-1 bg-red-600 mx-auto mt-4 mb-6"></div>
<p className="text-zinc-500 max-w-2xl mx-auto">Realizujemy pełen zakres prac geodezyjnych dla klientów indywidualnych oraz firm budowlanych.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group p-6 border border-zinc-200 rounded-lg hover:border-red-600 hover:shadow-lg transition-all duration-300 bg-white">
<div className="w-12 h-12 bg-zinc-50 rounded-md flex items-center justify-center border border-zinc-200 mb-4 group-hover:border-red-600 transition-colors">
<svg aria-hidden="true" data-icon="lucide:map" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Mapy do celów projektowych</h3>
<p className="text-sm text-zinc-600 leading-relaxed">Opracowanie map niezbędnych do uzyskania pozwolenia na budowę i rozpoczęcia prac projektowych.</p>
</div>

<div className="group p-6 border border-zinc-200 rounded-lg hover:border-red-600 hover:shadow-lg transition-all duration-300 bg-white">
<div className="w-12 h-12 bg-zinc-50 rounded-md flex items-center justify-center border border-zinc-200 mb-4 group-hover:border-red-600 transition-colors">
<svg aria-hidden="true" data-icon="lucide:land-plot" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m12 8l6-3l-6-3v10"></path><path d="m8 11.99l-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12m-9.51.85l11.02 6.3m0-6.3L6.5 19.15"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Tyczenie budynków</h3>
<p className="text-sm text-zinc-600 leading-relaxed">Wyznaczanie obiektów budowlanych w terenie oraz tyczenie sieci uzbrojenia terenu.</p>
</div>

<div className="group p-6 border border-zinc-200 rounded-lg hover:border-red-600 hover:shadow-lg transition-all duration-300 bg-white">
<div className="w-12 h-12 bg-zinc-50 rounded-md flex items-center justify-center border border-zinc-200 mb-4 group-hover:border-red-600 transition-colors">
<svg aria-hidden="true" data-icon="lucide:file-check-2" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4M3 15l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Inwentaryzacje</h3>
<p className="text-sm text-zinc-600 leading-relaxed">Pomiary powykonawcze budynków, przyłączy oraz sieci, niezbędne do odbioru inwestycji.</p>
</div>

<div className="group p-6 border border-zinc-200 rounded-lg hover:border-red-600 hover:shadow-lg transition-all duration-300 bg-white">
<div className="w-12 h-12 bg-zinc-50 rounded-md flex items-center justify-center border border-zinc-200 mb-4 group-hover:border-red-600 transition-colors">
<svg aria-hidden="true" data-icon="lucide:split" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 3h5v5M8 3H3v5"></path><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3m12 6l6-6"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Podziały nieruchomości</h3>
<p className="text-sm text-zinc-600 leading-relaxed">Formalno-prawne podziały działek, wznowienia znaków granicznych oraz rozgraniczenia.</p>
</div>
</div>
</div>
</section>

<section className="sm:py-24 bg-white border-zinc-200 border-t pt-16 pb-16" id="galeria">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row mb-12 items-end justify-between">
<div className="">
<h2 className="sm:text-4xl text-3xl font-semibold text-zinc-900 tracking-tight">Realizacje</h2>
<div className="w-16 h-1 bg-red-600 mt-4"></div>
</div>
<p className="sm:mt-0 text-zinc-500 mt-4">Wybrane zdjęcia z terenu</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="relative group aspect-square bg-zinc-100 overflow-hidden rounded-sm border border-zinc-200 hover:border-red-500 transition-colors">
<img alt="Pomiary geodezyjne" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://i.postimg.cc/wB4SKnxj/IMG-20240718-154811914.jpg' border='0' alt='IMG-20241213-123103412-3"/>
<div className="group-hover:bg-black/10 transition-colors duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative group aspect-square bg-zinc-100 overflow-hidden rounded-sm border border-zinc-200 hover:border-red-500 transition-colors">
<img alt="Plac budowy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://i.postimg.cc/wBRj83vG/IMG-20241119-111845670-MF-PORTRAIT.jpg"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
</div>

<div className="relative group aspect-square bg-zinc-100 overflow-hidden rounded-sm border border-zinc-200 hover:border-red-500 transition-colors">
<img alt="Instrument geodezyjny" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://i.postimg.cc/KvTpqRgj/20230623-234418-qi5fdzxt3sw2b7rvs5y4jhej28pmvyinbxtzccpykg.jpg"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
</div>

<div className="relative group aspect-square bg-zinc-100 overflow-hidden rounded-sm border border-zinc-200 hover:border-red-500 transition-colors">
<img alt="Mapy geodezyjne" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://i.postimg.cc/NMXDHGz2/IMG-20230704-132032496.jpg"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
</div>
</div>
</div>
</section>

<section className="sm:py-24 bg-white border-zinc-200 border-t pt-16 pb-16" id="kontakt">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div className="">
<h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight mb-6">Skontaktuj się z nami</h2>
<p className="text-zinc-500 mb-8 leading-relaxed">
          Masz pytania dotyczące swojej działki lub planowanej inwestycji? Zadzwoń lub napisz. Oferujemy bezpłatną
          wycenę usług.
        </p>
<div className="space-y-6">

<div className="group flex items-start text-red-600 hover:text-black transition-colors duration-300">
<div className="flex-shrink-0 mt-1">
<svg aria-hidden="true" className="" data-icon="lucide:phone" data-icon-replaced="true" data-icon-set="lucide" data-lucide="phone" data-width="24" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<div className="ml-4">
<p className="uppercase text-sm font-medium text-slate-950 tracking-wider">Telefon</p>
<a className="text-2xl font-semibold text-inherit" href="tel:+48888691988">+48 888 691 988</a>
</div>
</div>

<div className="group flex items-start text-red-600 hover:text-black transition-colors duration-300">
<div className="flex-shrink-0 mt-1">
<svg aria-hidden="true" className="" data-icon="lucide:mail" data-icon-replaced="true" data-icon-set="lucide" data-lucide="mail" data-width="24" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
<div className="ml-4">
<p className="uppercase text-sm font-medium text-slate-950 tracking-wider">E-mail</p>
<a className="text-lg text-inherit" href="mailto:b2geodeta@gmail.com">b2geodeta@gmail.com</a>
</div>
</div>

<div className="group flex items-start text-red-600 hover:text-black transition-colors duration-300">
<div className="flex-shrink-0 mt-1">
<svg aria-hidden="true" className="" data-icon="lucide:map-pin" data-icon-replaced="true" data-icon-set="lucide" data-lucide="map-pin" data-width="24" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="ml-4">
<p className="uppercase text-sm font-medium text-slate-950 tracking-wider">Adres</p>
<p className="text-lg text-inherit" style={{}}>al. Gen.W.Sikorskiego 121, 35-304 Rzeszów</p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200 shadow-sm h-[400px]">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Rzeszów+Sikorskiego+121&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0'}} width="100%">
</iframe>
</div>
</div>
</div>
</section>

<footer className="text-slate-950 bg-red-500 border-zinc-800 border-t pt-12 pb-12 mb-16 sm:mb-0">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="text-sm text-slate-50">© 2026 B2 Rafał Brzostek. Wszelkie prawa zastrzeżone.</div>
<div className="flex space-x-6 text-sm">
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-zinc-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] transform translate-y-0" id="cookies-banner">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-zinc-600 text-center sm:text-left">
                Ta strona wykorzystuje pliki cookies w celu zapewnienia najlepszej jakości usług. Korzystając ze strony, zgadzasz się na ich użycie.
            </p>
<button className="flex-shrink-0 hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 text-sm font-medium text-white bg-zinc-900 rounded-md pt-2 pr-6 pb-2 pl-6" onclick="acceptCookies()">
                Akceptuję
            </button>
</div>
</div>



    </>
  );
}
