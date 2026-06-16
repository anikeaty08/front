import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        window.addEventListener('load', () => {
            lucide.createIcons();
        });

        // Mobile Menu Logic
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.add('open');
                menuBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
            } else {
                mobileMenu.classList.remove('open');
                menuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
            }
            lucide.createIcons();
        }

        menuBtn.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(isMenuOpen) toggleMenu();
            });
        });

        // Fade Up Animation
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.fade-up').forEach((el) => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex flex-col items-center leading-none group z-50 relative" href="#">
<span className="text-2xl tracking-tight uppercase group-hover:opacity-80 transition-opacity font-semibold font-playfair" style={{}}>Taneczny</span>
<span className="font-serif text-[0.65rem] tracking-[0.3em] uppercase text-gray-500 mt-0.5 font-manrope" style={{}}>Krok</span>
</a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-black transition-colors font-manrope" href="#hero" style={{}}>Start</a>
<a className="hover:text-black transition-colors font-manrope" href="#offer" style={{}}>Oferta</a>
<a className="hover:text-black transition-colors font-manrope" href="#gallery" style={{}}>Pary</a>
<a className="hover:text-black transition-colors font-manrope" href="#process" style={{}}>Jak działamy</a>
<a className="hover:text-black transition-colors font-manrope" href="#faq" style={{}}>FAQ</a>
<a className="bg-theme-pink hover:bg-theme-pink-dark text-white px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 font-manrope" href="#contact" style={{}}>
                        Porozmawiajmy
                    </a>
</nav>

<button className="lg:hidden p-2 text-gray-600 z-50 relative focus:outline-none" id="menu-btn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="lg:hidden bg-white border-b border-gray-100" id="mobile-menu">
<nav className="flex flex-col px-6 py-4 space-y-4 text-center">
<a className="text-sm font-medium text-gray-900 py-2 mobile-link font-manrope" href="#hero" style={{}}>Start</a>
<a className="text-sm font-medium text-gray-600 py-2 mobile-link font-manrope" href="#offer" style={{}}>Oferta</a>
<a className="text-sm font-medium text-gray-600 py-2 mobile-link font-manrope" href="#gallery" style={{}}>Nasze Pary</a>
<a className="text-sm font-medium text-gray-600 py-2 mobile-link font-manrope" href="#faq" style={{}}>FAQ</a>
<a className="text-sm font-medium text-theme-pink font-semibold py-2 mobile-link font-manrope" href="#contact" style={{}}>Kontakt</a>
</nav>
</div>
</header>
<main className="">

<section className="relative min-h-[90vh] flex flex-col items-center justify-start pt-32 lg:pt-40 overflow-hidden bg-[#EAE8E4]" id="hero">

<div className="relative z-20 text-center px-4 max-w-4xl mx-auto mb-8 fade-up visible">
<h1 className="text-5xl md:text-7xl lg:text-8xl text-gray-900 mb-6 leading-[1.1] tracking-tight font-semibold font-playfair" style={{}}>
                    Pierwszy Taniec<br/><span className="text-gray-500 text-4xl md:text-6xl lg:text-7xl font-semibold font-playfair" style={{}}>Kraków</span>
</h1>
<p className="text-gray-600 text-base md:text-lg font-light mb-10 max-w-xl mx-auto leading-relaxed font-manrope" style={{}}>
                    Wszystko zaczyna się od kroku. Stwórzcie z nami taniec, który będzie naturalny, piękny i tylko Wasz.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl w-full sm:w-auto" href="#offer">
<span className="font-manrope" style={{}}>Zobacz ofertę</span>
<svg className="lucide lucide-arrow-down w-4 h-4" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-gray-300 bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-300 text-gray-800 text-sm font-medium w-full sm:w-auto" href="#contact">
<span className="font-manrope" style={{}}>Umów lekcję</span>
</a>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-[55%] md:h-[65%] w-full z-10 pointer-events-none">

<img alt="Couple walking in mountains" className="w-full h-full object-cover object-top mask-gradient-top opacity-90" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#EAE8E4] via-transparent to-transparent opacity-20"></div>
</div>
</section>

<section className="z-20 -mt-10 bg-[#ffffff] rounded-t-[3rem] py-24 relative shadow-[0_-10px_40px_rgba(0,0,0,0.03)]" id="offer">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20 fade-up visible">
<span className="text-xs font-semibold tracking-[0.2em] text-theme-pink uppercase mb-4 block font-manrope" style={{}}>Oferta</span>
<h2 className="text-3xl md:text-5xl text-gray-900 font-semibold font-playfair" style={{}}>Lekcje Indywidualne</h2>
<p className="md:text-base leading-relaxed text-sm text-gray-500 max-w-2xl mt-6 mr-auto ml-auto font-manrope" style={{}}>
                        Choreografia dopasowana do Waszych możliwości. Zapomnijcie o sztywnych ramach – tworzymy taniec, w którym będziecie sobą.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="fade-up group text-center visible">
<div className="w-14 h-14 mx-auto mb-6 bg-red-50 rounded-2xl flex items-center justify-center text-theme-pink group-hover:scale-110 transition-transform duration-300" style={{}}>
<svg className="lucide lucide-heart-handshake w-7 h-7 stroke-[1.5]" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-gray-900 font-manrope" style={{}}>Bez Stresu</h3>
<p className="text-sm text-gray-500 leading-relaxed px-2 font-manrope" style={{}}>Atmosfera pełna luzu. Sprawimy, że poczujecie się pewnie jeszcze przed wejściem na parkiet.</p>
</div>

<div className="fade-up group text-center visible" style={{}}>
<div className="w-14 h-14 mx-auto mb-6 bg-red-50 rounded-2xl flex items-center justify-center text-theme-pink group-hover:scale-110 transition-transform duration-300" style={{}}>
<svg className="lucide lucide-music-2 w-7 h-7 stroke-[1.5]" data-lucide="music-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="18" r="4"></circle><path d="M12 18V2l7 4"></path></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-gray-900 font-manrope" style={{}}>Wasza Muzyka</h3>
<p className="text-sm text-gray-500 leading-relaxed px-2 font-manrope" style={{}}>Pomożemy w doborze, zmiksujemy utwór lub ułożymy kroki do Waszej ukochanej piosenki.</p>
</div>

<div className="fade-up group text-center visible" style={{}}>
<div className="w-14 h-14 mx-auto mb-6 bg-red-50 rounded-2xl flex items-center justify-center text-theme-pink group-hover:scale-110 transition-transform duration-300" style={{}}>
<svg className="lucide lucide-clock w-7 h-7 stroke-[1.5]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-gray-900 font-manrope" style={{}}>Elastyczne Terminy</h3>
<p className="text-sm text-gray-500 leading-relaxed px-2 font-manrope" style={{}}>Pracujemy rano i wieczorem. Dostosujemy grafik spotkań do Waszego trybu życia.</p>
</div>

<div className="fade-up group text-center visible" style={{}}>
<div className="w-14 h-14 mx-auto mb-6 bg-red-50 rounded-2xl flex items-center justify-center text-theme-pink group-hover:scale-110 transition-transform duration-300" style={{}}>
<svg className="lucide lucide-sparkles w-7 h-7 stroke-[1.5]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-gray-900 font-manrope" style={{}}>Efekt WOW</h3>
<p className="text-sm text-gray-500 leading-relaxed px-2 font-manrope" style={{}}>Proste, ale efektowne figury, które zachwycą gości, a Wam nie sprawią trudności.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#FAFAFA] pt-24 pb-24" id="gallery">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 fade-up gap-6 visible">
<div className="">
<p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-3 font-manrope" style={{}}>Portfolio</p>
<h2 className="text-3xl md:text-5xl text-gray-900 font-semibold font-playfair" style={{}}>Szczęśliwe Pary</h2>
</div>
<a className="hidden md:inline-flex items-center text-sm font-medium text-gray-900 border-b border-gray-300 pb-1 hover:border-black transition-colors font-manrope" href="#contact" style={{}}>
                        Zostańcie jedną z nich <svg className="lucide lucide-arrow-up-right w-4 h-4 ml-2" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="fade-up group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-200 visible">
<img alt="Wedding Dance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
<div className="absolute bottom-6 left-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<p className="font-serif text-lg font-manrope" style={{}}>Kasia &amp; Tomek</p>
<p className="text-xs text-white/80 uppercase tracking-widest font-manrope" style={{}}>Walc Angielski</p>
</div>
</div>

<div className="fade-up group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-200 visible" style={{}}>
<img alt="Wedding Dance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
<div className="absolute bottom-6 left-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<p className="font-serif text-lg font-manrope" style={{}}>Ania &amp; Piotr</p>
<p className="text-xs text-white/80 uppercase tracking-widest font-manrope" style={{}}>Mix Taneczny</p>
</div>
</div>

<div className="fade-up group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-200 visible" style={{}}>
<img alt="Wedding Dance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1511285560982-1351c4f809b9?q=80&amp;w=1776&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
<div className="absolute bottom-6 left-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<p className="font-serif text-lg font-manrope" style={{}}>Marta &amp; Jan</p>
<p className="text-xs text-white/80 uppercase tracking-widest font-manrope" style={{}}>Discofox</p>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden fade-up">
<a className="inline-flex items-center text-sm font-medium text-gray-900 border-b border-gray-300 pb-1 font-manrope" href="#contact" style={{}}>
                        Zostańcie jedną z nich <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100" id="process">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="fade-up order-2 lg:order-1 visible">
<span className="text-xs font-semibold tracking-[0.2em] text-theme-pink uppercase mb-4 block font-manrope" style={{}}>Jak działamy</span>
<h2 className="text-3xl md:text-5xl text-gray-900 mb-8 font-semibold font-playfair" style={{}}>Krok po kroku do<br/>wielkiego dnia</h2>
<div className="space-y-8">
<div className="flex gap-5">
<span className="text-4xl text-gray-200 leading-none font-semibold font-playfair" style={{}}>01</span>
<div className="">
<h3 className="text-lg font-medium text-gray-900 mb-2 font-manrope" style={{}}>Konsultacja i wybór muzyki</h3>
<p className="text-sm text-gray-500 leading-relaxed font-manrope" style={{}}>Spotykamy się, rozmawiamy o Waszych oczekiwaniach. Jeśli nie macie piosenki, wybieramy ją razem.</p>
</div>
</div>
<div className="flex gap-5">
<span className="text-4xl text-gray-200 leading-none font-semibold font-playfair" style={{}}>02</span>
<div className="">
<h3 className="text-lg font-medium text-gray-900 mb-2 font-manrope" style={{}}>Tworzenie choreografii</h3>
<p className="text-sm text-gray-500 leading-relaxed font-manrope" style={{}}>Uczymy Was kroków dopasowanych do sukni, butów i wielkości sali weselnej. Wszystko na miarę.</p>
</div>
</div>
<div className="flex gap-5">
<span className="text-4xl text-gray-200 leading-none font-semibold font-playfair" style={{}}>03</span>
<div>
<h3 className="text-lg font-medium text-gray-900 mb-2 font-manrope" style={{}}>Szlifowanie detali</h3>
<p className="text-sm text-gray-500 leading-relaxed font-manrope" style={{}}>Pracujemy nad pewnością siebie, ramą i uśmiechem. To czas, kiedy taniec staje się przyjemnością.</p>
</div>
</div>
</div>
</div>
<div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden fade-up order-1 lg:order-2 visible">
<img alt="Dancing practice" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1546227289-53c8f376f9db?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border-[12px] border-white/30"></div>

<div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 max-w-sm">
<div className="flex gap-1 text-theme-pink mb-2" style={{}}>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-xs text-gray-600 italic font-manrope" style={{}}>"Nigdy nie myśleliśmy, że nauka tańca może być taką zabawą. Dziękujemy za cierpliwość!"</p>
<p className="text-xs font-semibold text-gray-900 mt-2 font-manrope" style={{}}>— Karolina &amp; Michał</p>
</div>
</div>
</div>
</div>
</section>

<div className="bg-gray-900 text-white py-16 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-2xl md:text-3xl lg:text-4xl opacity-90 leading-tight font-semibold font-playfair" style={{}}>
                    "Taniec to ukryty język duszy."
                </p>
<p className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-4 font-manrope" style={{}}>Martha Graham</p>
</div>
</div>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16 fade-up visible">
<p className="text-xs font-bold tracking-[0.2em] text-theme-pink uppercase mb-3 font-manrope" style={{}}>Pytania i odpowiedzi</p>
<h2 className="text-3xl md:text-4xl text-gray-900 font-semibold font-playfair" style={{}}>Warto wiedzieć</h2>
</div>
<div className="space-y-4 fade-up visible">

<details className="group bg-[#FAFAFA] rounded-xl border border-gray-100 open:bg-white open:shadow-lg open:border-transparent transition-all duration-300">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-gray-800 font-medium select-none">
<span className="font-manrope" style={{}}>Jak ubrać się na pierwszy trening?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-gray-400 group-open:text-theme-pink" style={{}}>
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed border-t border-gray-50 group-open:border-none pt-2 font-manrope" style={{}}>
                            Najważniejsza jest wygoda. Sportowe obuwie na start będzie idealne. Panie z czasem proszone są o przyniesienie butów ślubnych (lub podobnych), aby przyzwyczaić się do wysokości obcasa.
                        </div>
</details>

<details className="group bg-[#FAFAFA] rounded-xl border border-gray-100 open:bg-white open:shadow-lg open:border-transparent transition-all duration-300">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-gray-800 font-medium select-none">
<span className="font-manrope" style={{}}>Ile lekcji potrzebujemy?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-gray-400 group-open:text-theme-pink" style={{}}>
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed border-t border-gray-50 group-open:border-none pt-2 font-manrope" style={{}}>
                            Standardowy pakiet to 5-10 lekcji. Wszystko zależy od stopnia skomplikowania choreografii oraz Waszych predyspozycji. Zawsze doradzamy indywidualnie po pierwszym spotkaniu.
                        </div>
</details>

<details className="group bg-[#FAFAFA] rounded-xl border border-gray-100 open:bg-white open:shadow-lg open:border-transparent transition-all duration-300">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-gray-800 font-medium select-none">
<span className="font-manrope" style={{}}>Czy dojeżdżacie do klienta?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-gray-400 group-open:text-theme-pink" style={{}}>
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed border-t border-gray-50 group-open:border-none pt-2 font-manrope" style={{}}>
                            Zajęcia odbywają się na naszej sali przy ul. Juliusza Lea. Istnieje możliwość dojazdu na "próbę generalną" na sali weselnej za dodatkową opłatą, jeśli logistyka na to pozwala.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="contact">
<div className="max-w-5xl mx-auto px-6 lg:px-8">
<div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 fade-up visible">
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="p-8 md:p-12 order-2 md:order-1">
<h2 className="text-3xl text-gray-900 mb-2 font-semibold font-playfair" style={{}}>Napisz do nas</h2>
<p className="text-gray-500 text-sm mb-8 font-manrope" style={{}}>Odpowiadamy zazwyczaj w ciągu 24h.</p>
<form className="space-y-4">
<div>
<label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5 font-manrope" style={{}}>Imię i nazwisko</label>
<input className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-theme-pink focus:ring-1 focus:ring-theme-pink transition-all text-sm" style={{}} type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5 font-manrope" style={{}}>Email</label>
<input className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-theme-pink focus:ring-1 focus:ring-theme-pink transition-all text-sm" style={{}} type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5 font-manrope" style={{}}>Wiadomość</label>
<textarea className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-theme-pink focus:ring-1 focus:ring-theme-pink transition-all text-sm resize-none" rows="3" style={{}}></textarea>
</div>
<button className="w-full bg-gray-900 hover:bg-theme-pink text-white py-3 rounded-lg font-medium transition-colors duration-300 mt-2 font-manrope" style={{}} type="button">
                                    Wyślij wiadomość
                                </button>
</form>
</div>

<div className="bg-[#EFAFA9]/10 p-8 md:p-12 flex flex-col justify-between order-1 md:order-2 border-b md:border-b-0 md:border-l border-gray-100">
<div>
<h3 className="text-2xl text-gray-900 mb-6 font-semibold font-playfair" style={{}}>Dane kontaktowe</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<svg className="lucide lucide-map-pin w-5 h-5 text-theme-pink shrink-0 mt-0.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div>
<p className="text-sm font-semibold text-gray-900 font-manrope" style={{}}>Studio Tańca</p>
<p className="text-sm text-gray-600 font-manrope" style={{}}>ul. Juliusza Lea 11430-133 Kraków</p>
</div>
</div>
<div className="flex items-start gap-4">
<svg className="lucide lucide-phone w-5 h-5 text-theme-pink shrink-0 mt-0.5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<div>
<p className="text-sm font-semibold text-gray-900 font-manrope" style={{}}>Telefon</p>
<p className="text-sm text-gray-600 font-manrope" style={{}}>+48 514 483 057</p>
</div>
</div>
<div className="flex items-start gap-4">
<svg className="lucide lucide-mail w-5 h-5 text-theme-pink shrink-0 mt-0.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<div>
<p className="text-sm font-semibold text-gray-900 font-manrope" style={{}}>Email</p>
<p className="text-sm text-gray-600 font-manrope" style={{}}>kontakt@tanecznykrok.pl</p>
</div>
</div>
</div>
</div>
<div className="mt-10">
<p className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-manrope" style={{}}>Social Media</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-theme-pink hover:border-theme-pink transition-all" href="#" style={{}}>
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-all" href="#" style={{}}>
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex flex-col leading-none mb-6" href="#">
<span className="font-serif text-xl font-semibold tracking-tight uppercase font-manrope" style={{}}>Taneczny</span>
<span className="font-serif text-[0.6rem] tracking-[0.3em] uppercase text-gray-500 mt-0.5 font-manrope" style={{}}>Krok</span>
</a>
<p className="text-xs text-gray-500 leading-relaxed font-manrope" style={{}}>
                        Tworzymy niezapomniane chwile na parkiecie. Wasz pierwszy taniec w najlepszych rękach w Krakowie.
                    </p>
</div>
<div>
<h4 className="font-serif text-sm font-semibold text-gray-900 mb-4 font-manrope" style={{}}>Oferta</h4>
<ul className="space-y-2 text-xs text-gray-500">
<li><a className="hover:text-theme-pink transition-colors font-manrope" href="#" style={{}}>Pierwszy Taniec</a></li>
<li><a className="hover:text-theme-pink transition-colors font-manrope" href="#" style={{}}>Lekcje dla rodziców</a></li>
<li><a className="hover:text-theme-pink transition-colors font-manrope" href="#" style={{}}>Taniec użytkowy</a></li>
<li><a className="hover:text-theme-pink transition-colors font-manrope" href="#" style={{}}>Wieczory panieńskie</a></li>
</ul>
</div>
<div>
<h4 className="font-serif text-sm font-semibold text-gray-900 mb-4 font-manrope" style={{}}>Studio</h4>
<ul className="space-y-2 text-xs text-gray-500">
<li><a className="hover:text-theme-pink transition-colors font-manrope" href="#" style={{}}>O nas</a></li>
<li><a className="hover:text-theme-pink transition-colors font-manrope" href="#" style={{}}>Galeria</a></li>
<li><a className="hover:text-theme-pink transition-colors font-manrope" href="#" style={{}}>Opinie</a></li>
<li><a className="hover:text-theme-pink transition-colors font-manrope" href="#" style={{}}>Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="font-serif text-sm font-semibold text-gray-900 mb-4 font-manrope" style={{}}>Legal</h4>
<ul className="space-y-2 text-xs text-gray-500">
<li><a className="hover:text-theme-pink transition-colors font-manrope" href="#" style={{}}>Polityka Prywatności</a></li>
<li><a className="hover:text-theme-pink transition-colors font-manrope" href="#" style={{}}>Regulamin</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-gray-400 font-manrope" style={{}}>© 2025 Taneczny Krok Kraków. Wszelkie prawa zastrzeżone.</p>
<p className="text-[10px] text-gray-400 flex items-center gap-1 font-manrope" style={{}}>
                    Made with <svg className="lucide lucide-heart w-3 h-3 text-red-400 fill-current" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg> in Kraków
                </p>
</div>
</div>
</footer>


    </>
  );
}
