import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "EKOBRUK 24",
"image": "https://placehold.co/600x400/1C2B1A/F2EAD8?text=EKOBRUK+24",
"@id": "https://ekobruk24.eu",
"url": "https://ekobruk24.eu",
"telephone": "",
"email": "biuro@ekobruk24.eu",
"address": {
"@type": "PostalAddress",
"addressLocality": "Wrocław",
"addressCountry": "PL"
},
"areaServed": "Wrocław i okolice",
"priceRange": "$$",
"description": "Układanie kostki brukowej, sprzedaż kruszyw, transport i usługi koparko-ładowarką we Wrocławiu."
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple Single Page App Router Logic
        function navigate(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.add('hidden');
            });
            // Show target page
            document.getElementById('page-' + pageId).classList.remove('hidden');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'instant' });
            
            // Update active nav state visually (simple version)
            document.querySelectorAll('.nav-link').forEach(link => {
                if(link.textContent.toLowerCase().includes(pageId) || 
                  (pageId === 'home' && link.textContent === 'Strona główna') ||
                  (pageId === 'sprzet' && link.textContent === 'Nasz Sprzęt')) {
                    link.classList.add('text-[#3A6E2F]');
                    link.classList.remove('text-[#1A1A1A]', 'text-[#FAFAF8]');
                } else {
                    link.classList.remove('text-[#3A6E2F]');
                }
            });
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.hidden.md\\:flex');
            if(window.innerWidth < 768 && !navMenu.classList.contains('hidden')) {
                navMenu.classList.add('hidden');
            }
        }

        // Initialize active state
        navigate('home');

        // Sticky Nav & Scroll Logic
        const navbar = document.getElementById('navbar');
        const logoSuffix = document.getElementById('logo-suffix');
        const navLinks = document.querySelectorAll('.nav-link');
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const ctaBar = document.getElementById('floating-cta');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            // Nav styling on scroll
            if (scrollY > 50) {
                navbar.classList.replace('bg-[#FAFAF8]', 'bg-[#1C2B1A]');
                navbar.classList.replace('border-[#F2EAD8]', 'border-transparent');
                navbar.classList.add('shadow-md');
                logoSuffix.classList.replace('text-[#1C2B1A]', 'text-[#FAFAF8]');
                logoSuffix.classList.replace('group-hover:text-[#1A1A1A]', 'group-hover:text-[#F2EAD8]');
                mobileBtn.classList.replace('text-[#1C2B1A]', 'text-[#FAFAF8]');
                
                navLinks.forEach(link => {
                    if(!link.classList.contains('text-[#3A6E2F]')) {
                        link.classList.add('text-[#F2EAD8]/80');
                        link.classList.remove('text-[#1A1A1A]');
                    }
                });
            } else {
                navbar.classList.replace('bg-[#1C2B1A]', 'bg-[#FAFAF8]');
                navbar.classList.replace('border-transparent', 'border-[#F2EAD8]');
                navbar.classList.remove('shadow-md');
                logoSuffix.classList.replace('text-[#FAFAF8]', 'text-[#1C2B1A]');
                logoSuffix.classList.replace('group-hover:text-[#F2EAD8]', 'group-hover:text-[#1A1A1A]');
                mobileBtn.classList.replace('text-[#FAFAF8]', 'text-[#1C2B1A]');
                
                navLinks.forEach(link => {
                    if(!link.classList.contains('text-[#3A6E2F]')) {
                        link.classList.remove('text-[#F2EAD8]/80');
                        link.classList.add('text-[#1A1A1A]');
                    }
                });
            }

            // Floating CTA appearance (show after ~40% scroll depth of current document height)
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight > 0 && scrollY / docHeight > 0.4) {
                ctaBar.classList.remove('translate-y-full');
            } else {
                ctaBar.classList.add('translate-y-full');
            }
        });

        // Mobile menu toggle
        mobileBtn.addEventListener('click', () => {
            const menu = document.querySelector('.hidden.md\\:flex, .flex.md\\:flex.flex-col'); // Selects the nav container
            if (menu.classList.contains('hidden')) {
                menu.className = 'flex flex-col absolute top-[72px] left-0 w-full bg-[#1C2B1A] py-4 gap-4 items-center shadow-lg md:relative md:flex-row md:top-0 md:bg-transparent md:py-0 md:shadow-none';
                navLinks.forEach(l => {
                    l.classList.remove('text-[#1A1A1A]'); 
                    if(!l.classList.contains('text-[#3A6E2F]')) l.classList.add('text-[#F2EAD8]');
                });
            } else {
                menu.className = 'hidden md:flex items-center gap-8';
                window.dispatchEvent(new Event('scroll')); // trigger scroll to reset colors based on pos
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-300 bg-[#FAFAF8] border-b border-[#F2EAD8] py-4" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
<a className="flex items-center gap-2 group" href="#" onclick="navigate('home')">
<span className="font-condensed text-2xl tracking-tighter font-semibold text-[#3A6E2F] group-hover:text-[#5A9447] transition-colors">EKO<span className="text-[#1C2B1A] group-hover:text-[#1A1A1A]" id="logo-suffix">BRUK 24</span></span>
</a>
<div className="hidden md:flex items-center gap-8">
<button className="text-sm font-medium hover:text-[#3A6E2F] transition-colors nav-link" onclick="navigate('home')">Strona główna</button>
<button className="text-sm font-medium hover:text-[#3A6E2F] transition-colors nav-link" onclick="navigate('oferta')">Oferta</button>
<button className="text-sm font-medium hover:text-[#3A6E2F] transition-colors nav-link" onclick="navigate('sprzet')">Nasz Sprzęt</button>
<button className="text-sm font-medium hover:text-[#3A6E2F] transition-colors nav-link" onclick="navigate('realizacje')">Realizacje</button>
<button className="text-sm font-medium hover:text-[#3A6E2F] transition-colors nav-link" onclick="navigate('kontakt')">Kontakt</button>
</div>
<div className="hidden md:block">
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded bg-[#3A6E2F] text-[#FAFAF8] hover:bg-[#5A9447] transition-colors shadow-sm" href="mailto:biuro@ekobruk24.eu">
                    biuro@ekobruk24.eu
                </a>
</div>
<button className="md:hidden text-[#1C2B1A] p-2" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</nav>

<div className="fixed bottom-0 left-0 w-full bg-[#3A6E2F] text-[#FAFAF8] py-3 px-4 transform translate-y-full transition-transform duration-300 z-40 shadow-lg flex justify-center items-center gap-4" id="floating-cta">
<span className="text-sm font-medium hidden sm:inline">Bezpłatna wycena brukarstwa i kruszyw</span>
<iconify-icon className="hidden sm:inline" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<a className="text-sm font-semibold underline decoration-2 underline-offset-4 hover:text-[#F2EAD8]" href="mailto:biuro@ekobruk24.eu">biuro@ekobruk24.eu</a>
</div>

<main className="pt-[72px]" id="app-content">

<div className="page-section" id="page-home">

<section className="bg-stone-pattern text-[#FAFAF8] py-24 lg:py-32 px-4 relative overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3A6E2F]/30 bg-[#3A6E2F]/10 text-xs font-medium text-[#5A9447] mb-8 tracking-wide">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Wrocław i okolice • Działamy od 2018
                    </div>
<h1 className="font-condensed text-5xl md:text-7xl font-semibold tracking-tighter mb-6 leading-[1.05]">
                        Profesjonalne Brukarstwo i Dostawa Kruszyw
                    </h1>
<p className="text-lg md:text-xl text-[#F2EAD8]/80 max-w-2xl mb-10 font-medium leading-relaxed">
                        Układamy kostkę brukową, dostarczamy kruszywa i świadczymy usługi certyfikowanym sprzętem budowlanym.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
<a className="inline-flex justify-center items-center px-8 py-3.5 rounded bg-[#3A6E2F] text-[#FAFAF8] font-semibold hover:bg-[#5A9447] transition-all shadow-md" href="mailto:biuro@ekobruk24.eu">
                            Zadzwoń po wycenę
                        </a>
<button className="inline-flex justify-center items-center px-8 py-3.5 rounded border-2 border-[#FAFAF8]/20 hover:border-[#FAFAF8] text-[#FAFAF8] font-semibold transition-all" onclick="navigate('realizacje')">
                            Zobacz realizacje <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl pt-8 border-t border-[#FAFAF8]/10">
<div className="flex flex-col items-center text-center gap-2">
<iconify-icon className="text-2xl text-[#5A9447]" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-[#F2EAD8]/90">6 usług w jednym miejscu</span>
</div>
<div className="flex flex-col items-center text-center gap-2">
<iconify-icon className="text-2xl text-[#5A9447]" icon="solar:routing-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-[#F2EAD8]/90">Transport do 25 ton</span>
</div>
<div className="flex flex-col items-center text-center gap-2">
<iconify-icon className="text-2xl text-[#5A9447]" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-[#F2EAD8]/90">Opinie klientów Google</span>
</div>
<div className="flex flex-col items-center text-center gap-2">
<iconify-icon className="text-2xl text-[#5A9447]" icon="solar:point-on-map-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-[#F2EAD8]/90">Wrocław i okolice</span>
</div>
</div>
</div>
</section>

<section className="bg-[#F2EAD8] py-12 border-b border-[#1C2B1A]/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap justify-between items-center gap-8 md:gap-4">
<div className="flex flex-col">
<span className="font-condensed text-5xl font-semibold text-[#3A6E2F] tracking-tighter">6+</span>
<span className="text-sm font-semibold text-[#1C2B1A] uppercase tracking-wide mt-1">Usług budowlanych</span>
</div>
<div className="flex flex-col">
<span className="font-condensed text-5xl font-semibold text-[#3A6E2F] tracking-tighter">25T</span>
<span className="text-sm font-semibold text-[#1C2B1A] uppercase tracking-wide mt-1">Maks. transport</span>
</div>
<div className="flex flex-col">
<span className="font-condensed text-5xl font-semibold text-[#3A6E2F] tracking-tighter">4 szt.</span>
<span className="text-sm font-semibold text-[#1C2B1A] uppercase tracking-wide mt-1">Maszyny w parku</span>
</div>
<div className="flex flex-col">
<span className="font-condensed text-5xl font-semibold text-[#3A6E2F] tracking-tighter">100%</span>
<span className="text-sm font-semibold text-[#1C2B1A] uppercase tracking-wide mt-1">Własny sprzęt</span>
</div>
<div className="flex flex-col">
<span className="font-condensed text-5xl font-semibold text-[#3A6E2F] tracking-tighter">2018</span>
<span className="text-sm font-semibold text-[#1C2B1A] uppercase tracking-wide mt-1">Rok założenia</span>
</div>
</div>
</div>
</section>

<section className="flex flex-col lg:flex-row w-full min-h-[500px]">
<div className="w-full lg:w-1/2 bg-stone-pattern p-8 md:p-16 lg:p-24 flex flex-col justify-center">
<h2 className="font-condensed text-4xl md:text-5xl tracking-tighter font-semibold text-[#FAFAF8] mb-12">
                        Czego klienci się boją?
                    </h2>
<ul className="space-y-8">
<li className="flex items-start gap-4">
<iconify-icon className="text-xl text-[#F2EAD8]/50 mt-1 shrink-0" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[#F2EAD8]/70 text-lg font-medium">Firma nie dokończy roboty</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-xl text-[#F2EAD8]/50 mt-1 shrink-0" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[#F2EAD8]/70 text-lg font-medium">Nie wiem ile to będzie kosztować</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-xl text-[#F2EAD8]/50 mt-1 shrink-0" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[#F2EAD8]/70 text-lg font-medium">Słaba jakość materiałów</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-xl text-[#F2EAD8]/50 mt-1 shrink-0" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[#F2EAD8]/70 text-lg font-medium">Bałagan na posesji i uszkodzenia</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-xl text-[#F2EAD8]/50 mt-1 shrink-0" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[#F2EAD8]/70 text-lg font-medium">Nie mają odpowiedniego sprzętu</span>
</li>
</ul>
</div>
<div className="w-full lg:w-1/2 bg-[#F2EAD8] p-8 md:p-16 lg:p-24 flex flex-col justify-center">
<h2 className="font-condensed text-4xl md:text-5xl tracking-tighter font-semibold text-[#3A6E2F] mb-12">
                        Jak to rozwiązujemy?
                    </h2>
<ul className="space-y-8">
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl text-[#3A6E2F] mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[#1A1A1A] text-lg font-semibold">Własny sprzęt + stała ekipa = terminowość</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl text-[#3A6E2F] mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[#1A1A1A] text-lg font-semibold">Bezpłatna wycena na miejscu w 24h</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl text-[#3A6E2F] mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[#1A1A1A] text-lg font-semibold">Tylko certyfikowane kostki i kruszywa od sprawdzonych producentów</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl text-[#3A6E2F] mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[#1A1A1A] text-lg font-semibold">Własne maszyny załadunkowe — zero zewnętrznych podwykonawców</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl text-[#3A6E2F] mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[#1A1A1A] text-lg font-semibold">Park maszynowy: koparki, koparko-ładowarki, przyczepy transportowe</span>
</li>
</ul>
</div>
</section>

<section className="bg-[#FAFAF8] py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-condensed text-5xl tracking-tighter font-semibold text-[#1C2B1A] mb-4">Co robimy?</h2>
<p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto">Kompleksowe podejście do prac ziemnych i wykończeniowych.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-[#FAFAF8] rounded-lg border border-[#F2EAD8] hover:border-[#3A6E2F] transition-all p-8 flex flex-col h-full hover:shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 rounded bg-[#F2EAD8] text-[#3A6E2F] flex items-center justify-center mb-6 group-hover:bg-[#3A6E2F] group-hover:text-[#FAFAF8] transition-colors">
<iconify-icon className="text-2xl" icon="solar:align-bottom-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Układanie Kostki Brukowej</h3>
<p className="text-[#5A5A5A] mb-6 flex-grow text-sm leading-relaxed">Podjazdy, tarasy, chodniki i place. Własna ekipa brukarska pracująca z dbałością o każdy spadek i detal.</p>
<button className="text-sm font-semibold text-[#3A6E2F] text-left hover:text-[#1C2B1A] transition-colors inline-flex items-center gap-1" onclick="navigate('oferta')">
                                Dowiedz się więcej <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<div className="group bg-[#FAFAF8] rounded-lg border border-[#F2EAD8] hover:border-[#3A6E2F] transition-all p-8 flex flex-col h-full hover:shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 rounded bg-[#F2EAD8] text-[#3A6E2F] flex items-center justify-center mb-6 group-hover:bg-[#3A6E2F] group-hover:text-[#FAFAF8] transition-colors">
<iconify-icon className="text-2xl" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Sprzedaż Kostki Brukowej</h3>
<p className="text-[#5A5A5A] mb-6 flex-grow text-sm leading-relaxed">Szeroki wybór kostki granitowej i betonowej w różnych rozmiarach. Doradztwo i optymalizacja zamówienia.</p>
<button className="text-sm font-semibold text-[#3A6E2F] text-left hover:text-[#1C2B1A] transition-colors inline-flex items-center gap-1" onclick="navigate('oferta')">
                                Dowiedz się więcej <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<div className="group bg-[#FAFAF8] rounded-lg border border-[#F2EAD8] hover:border-[#3A6E2F] transition-all p-8 flex flex-col h-full hover:shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 rounded bg-[#F2EAD8] text-[#3A6E2F] flex items-center justify-center mb-6 group-hover:bg-[#3A6E2F] group-hover:text-[#FAFAF8] transition-colors">
<iconify-icon className="text-2xl" icon="solar:mountains-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Sprzedaż Kruszyw</h3>
<p className="text-[#5A5A5A] mb-6 flex-grow text-sm leading-relaxed">Kamień ogrodowy, ozdobny, murowy, kostka granitowa, grysy, żwiry, piasek i żyzna ziemia.</p>
<button className="text-sm font-semibold text-[#3A6E2F] text-left hover:text-[#1C2B1A] transition-colors inline-flex items-center gap-1" onclick="navigate('oferta')">
                                Dowiedz się więcej <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<div className="group bg-[#FAFAF8] rounded-lg border border-[#F2EAD8] hover:border-[#3A6E2F] transition-all p-8 flex flex-col h-full hover:shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 rounded bg-[#F2EAD8] text-[#3A6E2F] flex items-center justify-center mb-6 group-hover:bg-[#3A6E2F] group-hover:text-[#FAFAF8] transition-colors">
<iconify-icon className="text-2xl" icon="solar:bus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Transport Kruszyw</h3>
<p className="text-[#5A5A5A] mb-6 flex-grow text-sm leading-relaxed">Dowozimy od 0,5 do 25 ton. Szybka dostawa na plac budowy lub prywatną posesję.</p>
<button className="text-sm font-semibold text-[#3A6E2F] text-left hover:text-[#1C2B1A] transition-colors inline-flex items-center gap-1" onclick="navigate('oferta')">
                                Dowiedz się więcej <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<div className="group bg-[#FAFAF8] rounded-lg border border-[#F2EAD8] hover:border-[#3A6E2F] transition-all p-8 flex flex-col h-full hover:shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 rounded bg-[#F2EAD8] text-[#3A6E2F] flex items-center justify-center mb-6 group-hover:bg-[#3A6E2F] group-hover:text-[#FAFAF8] transition-colors">
<iconify-icon className="text-2xl" icon="solar:widget-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Usługi Koparko-Ładowarką</h3>
<p className="text-[#5A5A5A] mb-6 flex-grow text-sm leading-relaxed">Roboty ziemne, precyzyjne wykopy, szybki załadunek materiałów i niwelacja trudnego terenu.</p>
<button className="text-sm font-semibold text-[#3A6E2F] text-left hover:text-[#1C2B1A] transition-colors inline-flex items-center gap-1" onclick="navigate('oferta')">
                                Dowiedz się więcej <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<div className="group bg-[#FAFAF8] rounded-lg border border-[#F2EAD8] hover:border-[#3A6E2F] transition-all p-8 flex flex-col h-full hover:shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 rounded bg-[#F2EAD8] text-[#3A6E2F] flex items-center justify-center mb-6 group-hover:bg-[#3A6E2F] group-hover:text-[#FAFAF8] transition-colors">
<iconify-icon className="text-2xl" icon="solar:key-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Wynajem Maszyn</h3>
<p className="text-[#5A5A5A] mb-6 flex-grow text-sm leading-relaxed">Wynajem koparek i koparko-ładowarek. Elastyczne warunki najmu z operatorem lub bez.</p>
<button className="text-sm font-semibold text-[#3A6E2F] text-left hover:text-[#1C2B1A] transition-colors inline-flex items-center gap-1" onclick="navigate('oferta')">
                                Dowiedz się więcej <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="bg-stone-pattern text-[#FAFAF8] py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-condensed text-5xl tracking-tighter font-semibold mb-4">Nasz Sprzęt — Własny Park Maszynowy</h2>
<p className="text-lg text-[#F2EAD8]/80 max-w-2xl mx-auto">Żadnych podwykonawców. Pracujemy wyłącznie własnym, sprawdzonym i serwisowanym sprzętem.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
<div className="bg-[#FAFAF8] rounded-lg overflow-hidden group">
<img alt="Koparka gąsienicowa" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" src="https://placehold.co/600x400/1C2B1A/F2EAD8?text=Koparka+Gasienicowa"/>
<div className="p-6">
<h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Koparka gąsienicowa</h3>
<p className="text-sm text-[#5A5A5A]">Roboty ziemne, głębokie wykopy fundamentowe, przygotowanie podłoża i niwelacja terenu.</p>
</div>
</div>
<div className="bg-[#FAFAF8] rounded-lg overflow-hidden group">
<img alt="Koparko-ładowarka" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" src="https://placehold.co/600x400/1C2B1A/F2EAD8?text=Koparko-ladowarka"/>
<div className="p-6">
<h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Koparko-ładowarka</h3>
<p className="text-sm text-[#5A5A5A]">Wielofunkcyjny, zwinny sprzęt do prac ziemnych, szybkiego załadunku i porządkowania placu.</p>
</div>
</div>
<div className="bg-[#FAFAF8] rounded-lg overflow-hidden group">
<img alt="Transport" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" src="https://placehold.co/600x400/1C2B1A/F2EAD8?text=Maszyny+Transportowe"/>
<div className="p-6">
<h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Maszyny transportowe</h3>
<p className="text-sm text-[#5A5A5A]">Flota przyczep i ciężarówek przystosowanych do transportu kruszyw o tonażu od 0,5 do 25 ton.</p>
</div>
</div>
</div>
<div className="text-center">
<button className="inline-flex justify-center items-center px-6 py-3 rounded bg-[#3A6E2F] text-[#FAFAF8] font-semibold hover:bg-[#5A9447] transition-all" onclick="navigate('sprzet')">
                            Zobacz cały park maszynowy <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</section>

<section className="bg-[#F2EAD8] py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-condensed text-5xl tracking-tighter font-semibold text-[#1C2B1A] mb-12 text-center">Nasze Realizacje</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
<img alt="Realizacja 1" className="w-full h-64 object-cover rounded-lg shadow-sm" src="https://placehold.co/400x500/1C2B1A/F2EAD8?text=Podjazd"/>
<img alt="Realizacja 2" className="w-full h-64 object-cover rounded-lg shadow-sm" src="https://placehold.co/400x400/3A6E2F/FAFAF8?text=Taras"/>
<img alt="Realizacja 3" className="w-full h-64 object-cover rounded-lg shadow-sm" src="https://placehold.co/400x600/1A1A1A/F2EAD8?text=Chodnik"/>
<img alt="Realizacja 4" className="w-full h-64 object-cover rounded-lg shadow-sm" src="https://placehold.co/400x450/1C2B1A/FAFAF8?text=Plac"/>
</div>
<div className="text-center max-w-2xl mx-auto">
<p className="text-lg text-[#1A1A1A] font-medium mb-8">Każdy projekt wykonujemy z dbałością o detal i trwałość na lata. Zaufaj naszemu doświadczeniu.</p>
<a className="inline-flex justify-center items-center px-8 py-3.5 rounded bg-[#3A6E2F] text-[#FAFAF8] font-semibold hover:bg-[#5A9447] transition-all shadow-md" href="mailto:biuro@ekobruk24.eu">
                            Zapytaj o wycenę podobnego projektu
                        </a>
</div>
</div>
</section>

<section className="flex flex-col lg:flex-row w-full bg-[#FAFAF8]">
<div className="w-full lg:w-[45%] bg-[#1C2B1A] text-[#FAFAF8] p-8 md:p-16 lg:p-24 flex flex-col justify-center">
<h2 className="font-condensed text-5xl md:text-6xl tracking-tighter font-semibold mb-6">Bezpłatna Wycena</h2>
<p className="text-[#F2EAD8]/80 text-lg mb-10">Odpiszemy do 24 godzin. Przyjedziemy na miejsce ocenić zakres prac zupełnie bezpłatnie.</p>
<ul className="space-y-4 mb-12">
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#3A6E2F] flex items-center justify-center shrink-0">
<iconify-icon className="text-sm" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-medium">Bezpłatna wycena na miejscu</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#3A6E2F] flex items-center justify-center shrink-0">
<iconify-icon className="text-sm" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-medium">Własny sprzęt — brak podwykonawców</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#3A6E2F] flex items-center justify-center shrink-0">
<iconify-icon className="text-sm" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-medium">Certyfikowane materiały</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#3A6E2F] flex items-center justify-center shrink-0">
<iconify-icon className="text-sm" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-medium">Obsługa Wrocław i okolice</span>
</li>
</ul>
<a className="text-3xl font-semibold hover:text-[#3A6E2F] transition-colors inline-block mt-auto tracking-tight" href="mailto:biuro@ekobruk24.eu">
                        biuro@ekobruk24.eu
                    </a>
</div>
<div className="w-full lg:w-[55%] p-8 md:p-16 lg:p-24 flex flex-col justify-center">
<form className="max-w-xl w-full mx-auto space-y-6" onsubmit="event.preventDefault(); alert('Dziękujemy! Formularz działałby w docelowym środowisku. Prosimy o kontakt emailowy.');">
<div className="space-y-2">
<label className="block text-sm font-medium text-[#1A1A1A]" htmlFor="name">Imię i nazwisko / Firma</label>
<input className="w-full px-4 py-3 bg-white border border-[#F2EAD8] rounded focus:outline-none focus:ring-2 focus:ring-[#3A6E2F]/20 focus:border-[#3A6E2F] transition-colors" id="name" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-[#1A1A1A]" htmlFor="phone">Telefon</label>
<input className="w-full px-4 py-3 bg-white border border-[#F2EAD8] rounded focus:outline-none focus:ring-2 focus:ring-[#3A6E2F]/20 focus:border-[#3A6E2F] transition-colors" id="phone" required="" type="tel"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-[#1A1A1A]" htmlFor="service">Rodzaj usługi</label>
<select className="w-full px-4 py-3 bg-white border border-[#F2EAD8] rounded focus:outline-none focus:ring-2 focus:ring-[#3A6E2F]/20 focus:border-[#3A6E2F] transition-colors cursor-pointer" id="service">
<option>Układanie kostki brukowej</option>
<option>Sprzedaż kostki</option>
<option>Kruszywa (sprzedaż)</option>
<option>Transport kruszyw</option>
<option>Usługi koparko-ładowarką</option>
<option>Wynajem maszyn</option>
<option>Inne</option>
</select>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-[#1A1A1A]" htmlFor="desc">Opis projektu (opcjonalnie)</label>
<textarea className="w-full px-4 py-3 bg-white border border-[#F2EAD8] rounded focus:outline-none focus:ring-2 focus:ring-[#3A6E2F]/20 focus:border-[#3A6E2F] transition-colors resize-none" id="desc" rows="4"></textarea>
</div>
<button className="w-full py-4 rounded bg-[#3A6E2F] text-[#FAFAF8] font-semibold hover:bg-[#5A9447] transition-all shadow-md text-lg mt-4" type="submit">
                            Wyślij zapytanie o wycenę
                        </button>
</form>
</div>
</section>
</div>

<div className="page-section hidden" id="page-oferta">
<section className="bg-stone-pattern text-[#FAFAF8] py-20 px-4 text-center">
<h1 className="font-condensed text-5xl md:text-6xl tracking-tighter font-semibold mb-4">Pełna Oferta Usług</h1>
<p className="text-lg text-[#F2EAD8]/80 max-w-2xl mx-auto">Zapewniamy materiały, transport i robociznę. Poznaj szczegóły naszych usług.</p>
</section>
<section className="py-20 bg-[#FAFAF8]">
<div className="max-w-4xl mx-auto px-4 space-y-12">

<div className="bg-white border border-[#F2EAD8] rounded-lg p-8 shadow-sm">
<div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#F2EAD8]">
<div className="w-14 h-14 rounded bg-[#1C2B1A] text-[#FAFAF8] flex items-center justify-center">
<iconify-icon className="text-3xl" icon="solar:align-bottom-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="font-condensed text-3xl font-semibold text-[#1A1A1A] tracking-tight">1. Układanie kostki brukowej</h2>
</div>
<p className="text-[#5A5A5A] leading-relaxed mb-6">Kompleksowe usługi brukarskie dla klientów prywatnych i firm. Wykonujemy podjazdy, chodniki, tarasy, place, place zabaw i parkingi. Pracujemy wyłącznie własną ekipą z wieloletnim doświadczeniem, dbając o trwałość i estetykę.</p>
<div className="bg-[#F2EAD8]/30 rounded p-6 mb-8">
<h4 className="font-semibold text-[#1A1A1A] mb-3 text-sm uppercase tracking-wide">Zakres prac:</h4>
<ul className="space-y-2 text-sm text-[#5A5A5A]">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#3A6E2F]"></span> Przygotowanie podłoża i solidnej podbudowy</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#3A6E2F]"></span> Układanie kostki betonowej i granitowej</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#3A6E2F]"></span> Montaż obrzeży, krawężników i palisad</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#3A6E2F]"></span> Profesjonalne odwodnienie liniowe i punktowe</li>
</ul>
</div>
<a className="inline-flex justify-center items-center px-6 py-2.5 rounded bg-[#3A6E2F] text-[#FAFAF8] text-sm font-semibold hover:bg-[#5A9447] transition-all" href="mailto:biuro@ekobruk24.eu?subject=Zapytanie o układanie kostki">
                            Zapytaj o tę usługę
                        </a>
</div>

<div className="bg-white border border-[#F2EAD8] rounded-lg p-8 shadow-sm">
<div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#F2EAD8]">
<div className="w-14 h-14 rounded bg-[#1C2B1A] text-[#FAFAF8] flex items-center justify-center">
<iconify-icon className="text-3xl" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="font-condensed text-3xl font-semibold text-[#1A1A1A] tracking-tight">2. Sprzedaż kostki brukowej</h2>
</div>
<p className="text-[#5A5A5A] leading-relaxed mb-6">Szeroki wybór kostki betonowej i granitowej w różnych rozmiarach, kolorach i kształtach. Współpracujemy tylko z renomowanymi producentami gwarantującymi certyfikowaną jakość.</p>
<div className="bg-[#F2EAD8]/30 rounded p-6 mb-8">
<h4 className="font-semibold text-[#1A1A1A] mb-3 text-sm uppercase tracking-wide">Oferujemy:</h4>
<ul className="space-y-2 text-sm text-[#5A5A5A]">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#3A6E2F]"></span> Kostkę standardową i dekoracyjną</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#3A6E2F]"></span> Płyty tarasowe i chodnikowe</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#3A6E2F]"></span> Możliwość odbioru osobistego lub dostawy HDS</li>
</ul>
</div>
<a className="inline-flex justify-center items-center px-6 py-2.5 rounded bg-[#3A6E2F] text-[#FAFAF8] text-sm font-semibold hover:bg-[#5A9447] transition-all" href="mailto:biuro@ekobruk24.eu?subject=Zapytanie o zakup kostki">
                            Zapytaj o tę usługę
                        </a>
</div>

<div className="bg-white border border-[#F2EAD8] rounded-lg p-8 shadow-sm">
<div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#F2EAD8]">
<div className="w-14 h-14 rounded bg-[#1C2B1A] text-[#FAFAF8] flex items-center justify-center">
<iconify-icon className="text-3xl" icon="solar:mountains-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="font-condensed text-3xl font-semibold text-[#1A1A1A] tracking-tight">3. Sprzedaż kruszyw drogowo-ogrodowych</h2>
</div>
<p className="text-[#5A5A5A] leading-relaxed mb-6">Pełna oferta kruszyw niezbędnych przy pracach budowlanych, drogowych i aranżacji ogrodów. Zapewniamy czysty, sypki materiał bez zanieczyszczeń.</p>
<div className="bg-[#F2EAD8]/30 rounded p-6 mb-8">
<h4 className="font-semibold text-[#1A1A1A] mb-3 text-sm uppercase tracking-wide">Dostępne materiały:</h4>
<div className="grid grid-cols-2 gap-2 text-sm text-[#5A5A5A]">
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#3A6E2F]"></span> Kamień ogrodowy</span>
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#3A6E2F]"></span> Kamień murowy</span>
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#3A6E2F]"></span> Grysy dekoracyjne</span>
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#3A6E2F]"></span> Żwiry ogrodowe</span>
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#3A6E2F]"></span> Piasek płukany/zasypowy</span>
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#3A6E2F]"></span> Ziemia urodzajna (przesiana)</span>
</div>
</div>
<a className="inline-flex justify-center items-center px-6 py-2.5 rounded bg-[#3A6E2F] text-[#FAFAF8] text-sm font-semibold hover:bg-[#5A9447] transition-all" href="mailto:biuro@ekobruk24.eu?subject=Zapytanie o kruszywa">
                            Zapytaj o tę usługę
                        </a>
</div>

<div className="bg-white border border-[#F2EAD8] rounded-lg p-8 shadow-sm">
<div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#F2EAD8]">
<div className="w-14 h-14 rounded bg-[#1C2B1A] text-[#FAFAF8] flex items-center justify-center">
<iconify-icon className="text-3xl" icon="solar:bus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="font-condensed text-3xl font-semibold text-[#1A1A1A] tracking-tight">4. Transport kruszyw</h2>
</div>
<p className="text-[#5A5A5A] leading-relaxed mb-6">Przewóz kruszyw, ziemi i sypkich materiałów budowlanych. Szybka realizacja zleceń dzięki własnej flocie pojazdów dostosowanych do różnego tonażu.</p>
<div className="bg-[#F2EAD8]/30 rounded p-6 mb-8 flex flex-col md:flex-row gap-6 md:gap-12">
<div>
<h4 className="font-semibold text-[#1A1A1A] mb-2 text-sm uppercase tracking-wide">Ładowność:</h4>
<span className="text-2xl font-semibold text-[#3A6E2F]">0,5 – 25 ton</span>
</div>
<div>
<h4 className="font-semibold text-[#1A1A1A] mb-2 text-sm uppercase tracking-wide">Zasięg:</h4>
<span className="text-[#5A5A5A]">Wrocław i okolice (promień 50 km)</span>
</div>
</div>
<a className="inline-flex justify-center items-center px-6 py-2.5 rounded bg-[#3A6E2F] text-[#FAFAF8] text-sm font-semibold hover:bg-[#5A9447] transition-all" href="mailto:biuro@ekobruk24.eu?subject=Zapytanie o transport">
                            Zapytaj o tę usługę
                        </a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-white border border-[#F2EAD8] rounded-lg p-8 shadow-sm">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded bg-[#1C2B1A] text-[#FAFAF8] flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:widget-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="font-condensed text-2xl font-semibold text-[#1A1A1A] tracking-tight">5. Usługi sprzętem</h2>
</div>
<p className="text-[#5A5A5A] text-sm leading-relaxed mb-6">Kompleksowe roboty ziemne: wykopy fundamentowe, niwelacja terenu, załadunek i wywóz ziemi, drenaż oraz przygotowanie terenu pod budowę.</p>
<a className="text-sm font-semibold text-[#3A6E2F] hover:text-[#1C2B1A] transition-colors" href="mailto:biuro@ekobruk24.eu">Zapytaj o usługi →</a>
</div>
<div className="bg-white border border-[#F2EAD8] rounded-lg p-8 shadow-sm">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded bg-[#1C2B1A] text-[#FAFAF8] flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:key-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="font-condensed text-2xl font-semibold text-[#1A1A1A] tracking-tight">6. Wynajem maszyn</h2>
</div>
<p className="text-[#5A5A5A] text-sm leading-relaxed mb-6">Wynajem koparek gąsienicowych i koparko-ładowarek z operatorem lub bez. Elastyczne warunki najmu — na dzień, tydzień lub miesiąc.</p>
<a className="text-sm font-semibold text-[#3A6E2F] hover:text-[#1C2B1A] transition-colors" href="mailto:biuro@ekobruk24.eu">Zapytaj o wynajem →</a>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="page-sprzet">
<section className="bg-stone-pattern text-[#FAFAF8] py-24 px-4 text-center">
<h1 className="font-condensed text-5xl md:text-7xl tracking-tighter font-semibold mb-6">Własny Park Maszynowy</h1>
<p className="text-lg text-[#F2EAD8]/80 max-w-3xl mx-auto leading-relaxed">Dysponujemy nowoczesnym, sprawnym sprzętem budowlanym. Żadnych podwykonawców — mamy pełną kontrolę nad jakością i terminowością realizowanych zleceń.</p>
</section>
<section className="py-20 bg-[#FAFAF8]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

<div className="flex flex-col lg:flex-row bg-white border border-[#F2EAD8] rounded-xl overflow-hidden shadow-sm">
<div className="w-full lg:w-1/2">
<img alt="Koparka" className="w-full h-full object-cover min-h-[300px]" src="https://placehold.co/800x600/1C2B1A/F2EAD8?text=Koparka+Gąsienicowa"/>
</div>
<div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
<h2 className="font-condensed text-4xl font-semibold text-[#1A1A1A] tracking-tight mb-2">Koparka Gąsienicowa</h2>
<p className="text-[#5A5A5A] mb-8">Ciężki sprzęt do wymagających zadań. Gwarantuje stabilność i precyzję nawet na trudnym podłożu.</p>
<dl className="space-y-4 text-sm">
<div className="flex justify-between border-b border-[#F2EAD8] pb-2">
<dt className="font-semibold text-[#1A1A1A]">Typ:</dt>
<dd className="text-[#5A5A5A]">Koparka gąsienicowa</dd>
</div>
<div className="flex justify-between border-b border-[#F2EAD8] pb-2">
<dt className="font-semibold text-[#1A1A1A]">Zastosowanie:</dt>
<dd className="text-[#5A5A5A]">Wykopy, roboty ziemne, niwelacja</dd>
</div>
<div className="flex justify-between border-b border-[#F2EAD8] pb-2">
<dt className="font-semibold text-[#1A1A1A]">Zasięg:</dt>
<dd className="text-[#5A5A5A]">Do 5m głębokości</dd>
</div>
<div className="flex justify-between pb-2">
<dt className="font-semibold text-[#1A1A1A]">Obsługa:</dt>
<dd className="text-[#5A5A5A]">Z operatorem / bez</dd>
</div>
</dl>
</div>
</div>

<div className="flex flex-col lg:flex-row-reverse bg-white border border-[#F2EAD8] rounded-xl overflow-hidden shadow-sm">
<div className="w-full lg:w-1/2">
<img alt="Koparko-ładowarka" className="w-full h-full object-cover min-h-[300px]" src="https://placehold.co/800x600/3A6E2F/FAFAF8?text=Koparko-Ładowarka"/>
</div>
<div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
<h2 className="font-condensed text-4xl font-semibold text-[#1A1A1A] tracking-tight mb-2">Koparko-Ładowarka</h2>
<p className="text-[#5A5A5A] mb-8">Uniwersalna i mobilna maszyna kołowa. Idealna do przemieszczania urobku i szybkiego przejazdu między stanowiskami.</p>
<dl className="space-y-4 text-sm">
<div className="flex justify-between border-b border-[#F2EAD8] pb-2">
<dt className="font-semibold text-[#1A1A1A]">Typ:</dt>
<dd className="text-[#5A5A5A]">Koparko-ładowarka kołowa</dd>
</div>
<div className="flex justify-between border-b border-[#F2EAD8] pb-2">
<dt className="font-semibold text-[#1A1A1A]">Zastosowanie:</dt>
<dd className="text-[#5A5A5A]">Załadunek, wywóz, szybkie wykopy</dd>
</div>
<div className="flex justify-between border-b border-[#F2EAD8] pb-2">
<dt className="font-semibold text-[#1A1A1A]">Wielofunkcyjność:</dt>
<dd className="text-[#5A5A5A]">Tylna łyżka + przednia ładowarka</dd>
</div>
<div className="flex justify-between pb-2">
<dt className="font-semibold text-[#1A1A1A]">Obsługa:</dt>
<dd className="text-[#5A5A5A]">Z doświadczonym operatorem</dd>
</div>
</dl>
</div>
</div>

<div className="flex flex-col lg:flex-row bg-white border border-[#F2EAD8] rounded-xl overflow-hidden shadow-sm">
<div className="w-full lg:w-1/2">
<img alt="Transport" className="w-full h-full object-cover min-h-[300px]" src="https://placehold.co/800x600/1C2B1A/F2EAD8?text=Transport+Logistyka"/>
</div>
<div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
<h2 className="font-condensed text-4xl font-semibold text-[#1A1A1A] tracking-tight mb-2">Transport i Logistyka</h2>
<p className="text-[#5A5A5A] mb-8">Niezawodna flota dostawcza. Dowozimy materiały sypkie dokładnie tam, gdzie są potrzebne, minimalizując ręczne prace.</p>
<dl className="space-y-4 text-sm">
<div className="flex justify-between border-b border-[#F2EAD8] pb-2">
<dt className="font-semibold text-[#1A1A1A]">Ładowność:</dt>
<dd className="text-[#5A5A5A]">0,5 – 25 ton</dd>
</div>
<div className="flex justify-between border-b border-[#F2EAD8] pb-2">
<dt className="font-semibold text-[#1A1A1A]">Zasięg:</dt>
<dd className="text-[#5A5A5A]">Wrocław + 50 km</dd>
</div>
<div className="flex justify-between border-b border-[#F2EAD8] pb-2">
<dt className="font-semibold text-[#1A1A1A]">Materiały:</dt>
<dd className="text-[#5A5A5A]">Kruszywa, ziemia, gruz, kostka</dd>
</div>
<div className="flex justify-between pb-2">
<dt className="font-semibold text-[#1A1A1A]">Realizacja:</dt>
<dd className="text-[#5A5A5A]">Nawet tego samego dnia</dd>
</div>
</dl>
</div>
</div>
</div>
</section>
<section className="bg-[#3A6E2F] py-16 text-center px-4">
<h3 className="font-condensed text-3xl md:text-4xl font-semibold text-[#FAFAF8] tracking-tight mb-4">Potrzebujesz sprzętu lub usług transportowych?</h3>
<p className="text-[#F2EAD8] mb-8">Sprawdź dostępność i poproś o szybką wycenę wynajmu lub kursu.</p>
<a className="inline-flex justify-center items-center px-8 py-4 rounded bg-[#FAFAF8] text-[#1C2B1A] font-semibold hover:bg-[#F2EAD8] transition-all shadow-md" href="mailto:biuro@ekobruk24.eu">
                    Napisz do nas: biuro@ekobruk24.eu
                </a>
</section>
</div>

<div className="page-section hidden" id="page-realizacje">
<section className="bg-[#FAFAF8] py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h1 className="font-condensed text-5xl md:text-6xl tracking-tighter font-semibold text-[#1C2B1A] mb-6">Nasze Realizacje</h1>
<p className="text-lg text-[#5A5A5A] max-w-3xl mx-auto mb-10">Każdy projekt to połączenie solidnego rzemiosła, własnego sprzętu i wysokiej jakości materiałów. Poniżej wybrane realizacje z Wrocławia i okolic.</p>
<div className="flex flex-wrap justify-center gap-3">
<button className="px-5 py-2 rounded-full text-sm font-medium bg-[#1C2B1A] text-[#FAFAF8]">Wszystkie</button>
<button className="px-5 py-2 rounded-full text-sm font-medium border border-[#F2EAD8] text-[#5A5A5A] hover:border-[#3A6E2F] hover:text-[#1A1A1A]">Kostka brukowa</button>
<button className="px-5 py-2 rounded-full text-sm font-medium border border-[#F2EAD8] text-[#5A5A5A] hover:border-[#3A6E2F] hover:text-[#1A1A1A]">Kruszywa</button>
<button className="px-5 py-2 rounded-full text-sm font-medium border border-[#F2EAD8] text-[#5A5A5A] hover:border-[#3A6E2F] hover:text-[#1A1A1A]">Roboty ziemne</button>
</div>
</div>

<div className="masonry-grid">
<div className="masonry-item relative group rounded-lg overflow-hidden cursor-pointer">
<img alt="Projekt 1" className="w-full h-auto object-cover" src="https://placehold.co/600x800/1C2B1A/F2EAD8?text=Podjazd+Z+Kostki"/>
<div className="absolute inset-0 bg-[#1C2B1A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#5A9447] mb-1">Kostka brukowa</span>
<h3 className="text-xl font-semibold text-[#FAFAF8]">Podjazd przed domem jednorodzinnym</h3>
<p className="text-[#F2EAD8]/70 text-sm mt-1">Wrocław, 2023</p>
</div>
</div>
<div className="masonry-item relative group rounded-lg overflow-hidden cursor-pointer">
<img alt="Projekt 2" className="w-full h-auto object-cover" src="https://placehold.co/600x500/3A6E2F/FAFAF8?text=Wykopy+Fundamentowe"/>
<div className="absolute inset-0 bg-[#1C2B1A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#5A9447] mb-1">Roboty ziemne</span>
<h3 className="text-xl font-semibold text-[#FAFAF8]">Wykopy pod halę</h3>
<p className="text-[#F2EAD8]/70 text-sm mt-1">Bielany Wrocławskie, 2023</p>
</div>
</div>
<div className="masonry-item relative group rounded-lg overflow-hidden cursor-pointer">
<img alt="Projekt 3" className="w-full h-auto object-cover" src="https://placehold.co/600x700/F2EAD8/1C2B1A?text=Dostawa+Kruszywa"/>
<div className="absolute inset-0 bg-[#1C2B1A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#5A9447] mb-1">Kruszywa</span>
<h3 className="text-xl font-semibold text-[#FAFAF8]">Dostawa 25T kamienia ozdobnego</h3>
<p className="text-[#F2EAD8]/70 text-sm mt-1">Długołęka, 2024</p>
</div>
</div>
<div className="masonry-item relative group rounded-lg overflow-hidden cursor-pointer">
<img alt="Projekt 4" className="w-full h-auto object-cover" src="https://placehold.co/600x600/1A1A1A/FAFAF8?text=Taras+Ogrodowy"/>
<div className="absolute inset-0 bg-[#1C2B1A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#5A9447] mb-1">Kostka brukowa</span>
<h3 className="text-xl font-semibold text-[#FAFAF8]">Taras z płyt betonowych</h3>
<p className="text-[#F2EAD8]/70 text-sm mt-1">Wrocław Krzyki, 2023</p>
</div>
</div>
<div className="masonry-item relative group rounded-lg overflow-hidden cursor-pointer">
<img alt="Projekt 5" className="w-full h-auto object-cover" src="https://placehold.co/600x900/1C2B1A/5A9447?text=Niwelacja+Terenu"/>
<div className="absolute inset-0 bg-[#1C2B1A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#5A9447] mb-1">Roboty ziemne</span>
<h3 className="text-xl font-semibold text-[#FAFAF8]">Równanie działki pod budowę</h3>
<p className="text-[#F2EAD8]/70 text-sm mt-1">Kąty Wrocławskie, 2024</p>
</div>
</div>
<div className="masonry-item relative group rounded-lg overflow-hidden cursor-pointer">
<img alt="Projekt 6" className="w-full h-auto object-cover" src="https://placehold.co/600x500/F2EAD8/3A6E2F?text=Chodnik+Miejski"/>
<div className="absolute inset-0 bg-[#1C2B1A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#5A9447] mb-1">Kostka brukowa</span>
<h3 className="text-xl font-semibold text-[#FAFAF8]">Wymiana nawierzchni chodnika</h3>
<p className="text-[#F2EAD8]/70 text-sm mt-1">Wrocław Fabryczna, 2022</p>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="page-kontakt">
<section className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-72px)] bg-[#FAFAF8]">

<div className="w-full lg:w-[45%] bg-[#1C2B1A] text-[#FAFAF8] p-8 md:p-16 flex flex-col justify-between">
<div>
<h1 className="font-condensed text-5xl md:text-6xl tracking-tighter font-semibold mb-6">Skontaktuj się z nami</h1>
<p className="text-[#F2EAD8]/80 text-lg mb-12">Jesteśmy do Twojej dyspozycji. Zadzwoń, napisz lub wypełnij formularz obok, a przygotujemy darmową wycenę.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#3A6E2F]/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-[#5A9447]" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<span className="block text-sm text-[#F2EAD8]/60 font-medium mb-1">Email</span>
<a className="text-2xl font-semibold hover:text-[#3A6E2F] transition-colors" href="mailto:biuro@ekobruk24.eu">biuro@ekobruk24.eu</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#3A6E2F]/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-[#5A9447]" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<span className="block text-sm text-[#F2EAD8]/60 font-medium mb-1">Obszar działania</span>
<span className="text-xl font-medium">Wrocław i okolice (do 50 km)</span>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#3A6E2F]/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-[#5A9447]" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<span className="block text-sm text-[#F2EAD8]/60 font-medium mb-1">Godziny pracy</span>
<div className="text-lg font-medium space-y-1">
<div className="flex justify-between w-48"><span>Pon - Pt:</span> <span>7:00 – 17:00</span></div>
<div className="flex justify-between w-48 text-[#F2EAD8]/80"><span>Sobota:</span> <span>8:00 – 14:00</span></div>
<div className="flex justify-between w-48 text-[#F2EAD8]/50"><span>Niedziela:</span> <span>Zamknięte</span></div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-16 w-full h-48 bg-[#1A1A1A] rounded-lg overflow-hidden relative">

<img alt="Mapa" className="w-full h-full object-cover opacity-50" src="https://placehold.co/800x400/1A1A1A/3A6E2F?text=Mapa+Dojazdu"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="text-sm font-semibold tracking-widest uppercase text-[#FAFAF8]">Zobacz na mapie</span>
</div>
</div>
</div>

<div className="w-full lg:w-[55%] p-8 md:p-16 flex flex-col justify-center">
<div className="max-w-xl w-full mx-auto">
<h2 className="font-condensed text-4xl tracking-tighter font-semibold text-[#1A1A1A] mb-2">Zapytaj o wycenę</h2>
<p className="text-[#5A5A5A] mb-8">Odpowiadamy zazwyczaj w ciągu 2-4 godzin w dni robocze.</p>
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Wiadomość wysłana! Dziękujemy za kontakt.');">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-[#1A1A1A]" htmlFor="contact-name">Imię i nazwisko</label>
<input className="w-full px-4 py-3 bg-white border border-[#F2EAD8] rounded focus:outline-none focus:ring-2 focus:ring-[#3A6E2F]/20 focus:border-[#3A6E2F] transition-colors" id="contact-name" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-[#1A1A1A]" htmlFor="contact-phone">Telefon</label>
<input className="w-full px-4 py-3 bg-white border border-[#F2EAD8] rounded focus:outline-none focus:ring-2 focus:ring-[#3A6E2F]/20 focus:border-[#3A6E2F] transition-colors" id="contact-phone" required="" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-[#1A1A1A]" htmlFor="contact-email">Adres email</label>
<input className="w-full px-4 py-3 bg-white border border-[#F2EAD8] rounded focus:outline-none focus:ring-2 focus:ring-[#3A6E2F]/20 focus:border-[#3A6E2F] transition-colors" id="contact-email" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-[#1A1A1A]" htmlFor="contact-service">Czego dotyczy zapytanie?</label>
<select className="w-full px-4 py-3 bg-white border border-[#F2EAD8] rounded focus:outline-none focus:ring-2 focus:ring-[#3A6E2F]/20 focus:border-[#3A6E2F] transition-colors cursor-pointer" id="contact-service">
<option>Wybierz z listy...</option>
<option>Wycena ułożenia kostki brukowej</option>
<option>Zakup i dostawa kostki</option>
<option>Zamówienie kruszywa / ziemi</option>
<option>Usługi sprzętem (koparka, załadunek)</option>
<option>Wynajem maszyny budowlanej</option>
</select>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-[#1A1A1A]" htmlFor="contact-msg">Wiadomość (lokalizacja, metraż, termin)</label>
<textarea className="w-full px-4 py-3 bg-white border border-[#F2EAD8] rounded focus:outline-none focus:ring-2 focus:ring-[#3A6E2F]/20 focus:border-[#3A6E2F] transition-colors resize-none" id="contact-msg" rows="5"></textarea>
</div>

<label className="flex items-start gap-3 cursor-pointer group mt-4">
<div className="relative flex items-start">
<input className="peer sr-only" required="" type="checkbox"/>
<div className="w-5 h-5 border-2 border-[#5A5A5A] rounded mt-0.5 bg-white peer-checked:bg-[#3A6E2F] peer-checked:border-[#3A6E2F] transition-colors flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 text-sm" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
</div>
<span className="text-xs text-[#5A5A5A] leading-relaxed select-none">Wyrażam zgodę na przetwarzanie danych osobowych w celu przygotowania oferty. Dane nie będą przekazywane podmiotom trzecim.</span>
</label>
<button className="w-full py-4 rounded bg-[#3A6E2F] text-[#FAFAF8] font-semibold hover:bg-[#5A9447] transition-all shadow-md text-lg mt-6" type="submit">
                                Wyślij wiadomość
                            </button>
</form>
</div>
</div>
</section>
</div>
</main>

<footer className="bg-[#1C2B1A] text-[#F2EAD8] py-12 border-t border-[#3A6E2F]/20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
<div className="flex flex-col items-start">
<span className="font-condensed text-3xl tracking-tighter font-semibold text-[#3A6E2F] mb-4">EKO<span className="text-[#FAFAF8]">BRUK 24</span></span>
<p className="text-sm text-[#F2EAD8]/70 leading-relaxed">
                    Centrum Kostki Brukowej i Kamienia Ozdobnego.<br/>
                    Profesjonalne wykonawstwo i transport.
                </p>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-semibold text-[#FAFAF8] uppercase tracking-wider text-xs mb-2">Szybkie linki</h4>
<button className="text-sm text-[#F2EAD8]/70 hover:text-[#FAFAF8] text-left transition-colors w-max" onclick="navigate('home')">Strona główna</button>
<button className="text-sm text-[#F2EAD8]/70 hover:text-[#FAFAF8] text-left transition-colors w-max" onclick="navigate('oferta')">Pełna oferta</button>
<button className="text-sm text-[#F2EAD8]/70 hover:text-[#FAFAF8] text-left transition-colors w-max" onclick="navigate('sprzet')">Park maszynowy</button>
<button className="text-sm text-[#F2EAD8]/70 hover:text-[#FAFAF8] text-left transition-colors w-max" onclick="navigate('realizacje')">Galeria realizacji</button>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-semibold text-[#FAFAF8] uppercase tracking-wider text-xs mb-2">Kontakt</h4>
<a className="text-sm text-[#F2EAD8]/70 hover:text-[#FAFAF8] transition-colors flex items-center gap-2" href="mailto:biuro@ekobruk24.eu">
<iconify-icon icon="solar:letter-linear"></iconify-icon> biuro@ekobruk24.eu
                </a>
<span className="text-sm text-[#F2EAD8]/70 flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Wrocław i okolice
                </span>
<span className="text-sm text-[#F2EAD8]/70 flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Pon-Pt: 7-17, Sob: 8-14
                </span>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#FAFAF8]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#F2EAD8]/50">
<p>© 2024 EKOBRUK 24. Wszelkie prawa zastrzeżone.</p>
<a className="hover:text-[#FAFAF8] transition-colors" href="mailto:biuro@ekobruk24.eu">biuro@ekobruk24.eu</a>
</div>
</footer>



    </>
  );
}
