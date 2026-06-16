import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      /* GA4 Placeholder */

/* Meta Pixel Placeholder */


{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Paweł Trębicki Wykończenia Wnętrz",
"telephone": "+48694487380",
"email": "monikapawel20@gmail.com",
"areaServed": ["Warszawa", "Pruszków", "Piaseczno", "Grodzisk Mazowiecki"],
"description": "Kompleksowe wykończenia wnętrz – gładzie, glazurnictwo, podłogi, hydraulika, elektryka, dywany kamienne.",
"priceRange": "$$",
"openingHours": "Mo-Sa 07:00-18:00"
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Reveal on Scroll
            const reveals = document.querySelectorAll('.reveal');
            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;
                reveals.forEach(reveal => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };
            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // trigger on load

            // Sticky Navbar style change
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('header-sticky');
                    navbar.classList.remove('py-4', 'lg:py-5');
                    navbar.classList.add('py-3');
                } else {
                    navbar.classList.remove('header-sticky');
                    navbar.classList.add('py-4', 'lg:py-5');
                    navbar.classList.remove('py-3');
                }
            });

            // Mobile Menu Toggle
            const menuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            let isMenuOpen = false;

            const toggleMenu = () => {
                isMenuOpen = !isMenuOpen;
                if(isMenuOpen) {
                    mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                    mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                    menuBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="28"></iconify-icon>';
                    document.body.style.overflow = 'hidden';
                } else {
                    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                    mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                    menuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>';
                    document.body.style.overflow = 'auto';
                }
            };

            menuBtn.addEventListener('click', toggleMenu);
            mobileLinks.forEach(link => {
                link.addEventListener('click', toggleMenu);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 lg:py-5 border-b border-white/10 text-white" id="navbar">
<div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex justify-between items-center">
<a className="font-playfair font-semibold tracking-widest text-sm lg:text-base uppercase flex items-center gap-2 z-50" href="#">
<span className="w-2 h-2 rounded-full bg-[#C8A96E]"></span>
                Paweł Trębicki <span className="hidden lg:inline text-white/50">Wykończenia</span>
</a>
<nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
<a className="hover:text-[#C8A96E] transition-colors" href="#o-nas">O nas</a>
<a className="hover:text-[#C8A96E] transition-colors" href="#uslugi">Usługi</a>
<a className="hover:text-[#C8A96E] transition-colors" href="#realizacje">Realizacje</a>
<a className="hover:text-[#C8A96E] transition-colors" href="#opinie">Opinie</a>
<a className="hover:text-[#C8A96E] transition-colors" href="#kontakt">Kontakt</a>
</nav>
<div className="hidden lg:flex items-center gap-6">
<a className="flex items-center gap-2 hover:text-[#C8A96E] transition-colors text-sm font-semibold tracking-wider" href="tel:694487380">
<iconify-icon className="text-[#C8A96E]" icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    694 487 380
                </a>
<a className="bg-[#C8A96E] text-[#1E1E1E] px-5 py-2.5 rounded-md text-xs font-semibold tracking-wider uppercase hover:-translate-y-0.5 hover:bg-[#A8893E] transition-all shadow-lg btn-shimmer" href="#kontakt">
                    Bezpłatna wycena
                </a>
</div>

<button className="lg:hidden text-white z-50 p-2" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-[#2C2C2C] flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300 z-40" id="mobile-menu">
<a className="mobile-link text-2xl font-playfair hover:text-[#C8A96E]" href="#o-nas">O nas</a>
<a className="mobile-link text-2xl font-playfair hover:text-[#C8A96E]" href="#uslugi">Usługi</a>
<a className="mobile-link text-2xl font-playfair hover:text-[#C8A96E]" href="#realizacje">Realizacje</a>
<a className="mobile-link text-2xl font-playfair hover:text-[#C8A96E]" href="#opinie">Opinie</a>
<a className="mobile-link text-2xl font-playfair hover:text-[#C8A96E]" href="#kontakt">Kontakt</a>
<a className="mt-8 flex items-center gap-3 text-[#C8A96E] text-xl font-semibold" href="tel:694487380">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon> 694 487 380
            </a>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#1A1A1A]">

<div className="absolute inset-0 z-0">
<img alt="Wykończone wnętrze" className="w-full h-full object-cover object-center opacity-40 scale-105" loading="lazy" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 hero-overlay"></div>
</div>
<div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 lg:px-12 text-center text-white flex flex-col items-center mt-12">
<div className="inline-flex items-center gap-3 px-4 py-1.5 border border-white/20 rounded-full mb-8 text-micro uppercase text-[#C8A96E] tracking-widest bg-white/5 backdrop-blur-sm reveal" style={{animationDelay: '0.3s', opacity: '0', animation: 'fade-in-up 0.8s forwards'}}>
<iconify-icon icon="solar:stars-linear" width="16"></iconify-icon>
                Warszawa i okolice · Ekipa 3 specjalistów · Pełne wykończenie
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-semibold tracking-ultra-tight leading-[1.1] mb-6 max-w-4xl mx-auto" style={{animationDelay: '0.5s', opacity: '0', animation: 'fade-in-up 0.9s forwards'}}>
                Jedno zlecenie.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C8A96E]">Jedna ekipa.</span><br/>
                Gotowe mieszkanie.
            </h1>
<p className="text-base lg:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light" style={{animationDelay: '0.85s', opacity: '0', animation: 'fade-in-up 0.7s forwards'}}>
                Gładzie, glazura, podłogi, hydraulika i elektryka – bez szukania pięciu fachowców. Warszawa, Pruszków i okolice do 40 km.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto" style={{animationDelay: '1.1s', opacity: '0', animation: 'fade-in-up 0.8s forwards'}}>
<a className="w-full sm:w-auto bg-[#C8A96E] text-[#1E1E1E] px-8 py-4 rounded-md font-semibold tracking-wide hover:-translate-y-1 hover:bg-[#A8893E] hover:shadow-[0_10px_30px_rgba(200,169,110,0.3)] transition-all flex items-center justify-center gap-2 btn-shimmer" href="tel:694487380">
<iconify-icon icon="solar:phone-bold" width="20"></iconify-icon> Zadzwoń teraz
                </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-md font-medium tracking-wide border border-white/30 text-white hover:bg-white/10 hover:border-white transition-all flex items-center justify-center gap-2" href="#realizacje">
                    Zobacz realizacje
                </a>
</div>
<p className="mt-6 text-xs text-white/50 tracking-wider flex items-center gap-2" style={{animationDelay: '1.3s', opacity: '0', animation: 'fade-in-up 0.8s forwards'}}>
                Bezpłatna wycena <span className="w-1 h-1 rounded-full bg-[#C8A96E]"></span> Bez zobowiązań <span className="w-1 h-1 rounded-full bg-[#C8A96E]"></span> Odpowiemy dziś
            </p>
<a className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce-subtle" href="#o-nas" style={{animationDelay: '1.6s', opacity: '0', animation: 'fade-in-up 0.8s forwards'}}>
<iconify-icon icon="solar:arrow-down-linear" width="28"></iconify-icon>
</a>
</div>
</section>

<div className="bg-[#C8A96E] text-[#1E1E1E] py-4 relative z-20 border-b border-[#A8893E]/30 overflow-hidden ticker-wrapper">
<div className="animate-marquee-content text-sm font-semibold tracking-widest uppercase flex gap-8 items-center">
<span>✦ Gładzie i malowanie</span>
<span>✦ Glazurnictwo</span>
<span>✦ Panele podłogowe</span>
<span>✦ Hydraulika</span>
<span>✦ Elektryka</span>
<span>✦ Dywany kamienne</span>
<span>✦ Warszawa</span>
<span>✦ Pruszków</span>
<span>✦ Piaseczno</span>
<span>✦ Grodzisk Maz.</span>
<span>✦ Pełne wykończenie bez chaosu</span>

<span>✦ Gładzie i malowanie</span>
<span>✦ Glazurnictwo</span>
<span>✦ Panele podłogowe</span>
<span>✦ Hydraulika</span>
<span>✦ Elektryka</span>
<span>✦ Dywany kamienne</span>
<span>✦ Warszawa</span>
<span>✦ Pruszków</span>
</div>
</div>

<section className="py-20 lg:py-32 bg-[#F9F7F4]" id="o-nas">
<div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative reveal order-2 lg:order-1">
<div className="absolute -inset-4 bg-[#C8A96E]/10 rounded-2xl transform rotate-2"></div>
<img alt="Precyzyjne wykończenie" className="relative rounded-xl shadow-2xl z-10 w-full h-[500px] object-cover grayscale-[20%]" loading="lazy" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute -right-6 lg:-right-12 bottom-12 bg-white p-6 rounded-xl shadow-xl z-20 max-w-[200px] border border-[#2C2C2C]/5 reveal reveal-delay-3">
<p className="font-playfair text-4xl font-bold text-[#C8A96E] mb-1">100%</p>
<p className="text-xs font-medium uppercase tracking-widest text-[#6B6B6B]">Klientów z polecenia</p>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="reveal">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold tracking-tight text-[#2C2C2C] mb-6">Trzy osoby.<br/>Pełne wykończenie.<br/><span className="italic font-light text-[#C8A96E]">Zero bałaganu.</span></h2>
<div className="title-line mb-8"></div>
</div>
<div className="space-y-6 text-[#6B6B6B] text-base leading-relaxed reveal reveal-delay-1">
<p><strong className="text-[#1E1E1E] font-medium">Nazywam się Paweł Trębicki</strong> i razem z moją 3-osobową ekipą zajmuję się kompleksowymi wykończeniami wnętrz w Warszawie i okolicach. Przez kilka lat nauczyliśmy się robić wszystko co potrzeba – od gładzi i glazury, przez panele i podłogi, po hydraulikę i elektrykę.</p>
<p>Nie koordynujemy podwykonawców. To my wchodzimy i my robimy całą robotę. Jeden numer telefonu, jeden harmonogram, jeden odbiór. Ty nie musisz pilnować czterech ekip – my zajmujemy się całością.</p>
<p className="font-medium text-[#1E1E1E] border-l-2 border-[#C8A96E] pl-4 py-1 italic">Większość naszych zleceń pochodzi z poleceń. Dla nas to najlepsza ocena – klient który poleca nas dalej, to klient który jest naprawdę zadowolony z efektu.</p>
</div>
<div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-[#2C2C2C]/10 reveal reveal-delay-2">
<div>
<p className="text-3xl font-playfair font-semibold text-[#2C2C2C]">3</p>
<p className="text-micro text-[#6B6B6B] uppercase mt-1">Specjalistów</p>
</div>
<div>
<p className="text-3xl font-playfair font-semibold text-[#2C2C2C]">40<span className="text-xl">km</span></p>
<p className="text-micro text-[#6B6B6B] uppercase mt-1">Od Pruszkowa</p>
</div>
<div>
<p className="text-3xl font-playfair font-semibold text-[#2C2C2C]">A-Z</p>
<p className="text-micro text-[#6B6B6B] uppercase mt-1">Wykończenie</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-texture-dark text-white border-y border-white/5 relative" id="uslugi">
<div className="max-w-[1200px] mx-auto px-6 lg:px-12">
<div className="text-center mb-16 lg:mb-24 reveal">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold tracking-tight mb-4">Co robimy dla Ciebie?</h2>
<div className="title-line mx-auto mb-6"></div>
<p className="text-[#C8A96E] text-lg font-light tracking-wide max-w-2xl mx-auto">Pełne wykończenie wnętrza – jedna ekipa, jeden rachunek, zero szukania.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="group bg-[#2C2C2C] p-8 rounded-xl border border-white/5 hover:bg-[#252525] transition-all duration-300 relative overflow-hidden reveal hover:-translate-y-1 shadow-lg">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C8A96E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white/40 group-hover:text-[#C8A96E] group-hover:scale-110 transition-all duration-300 mb-6" icon="solar:roller-linear" width="40"></iconify-icon>
<h3 className="text-xl font-playfair font-semibold mb-4 group-hover:text-[#C8A96E] transition-colors">Gładzie i Malowanie</h3>
<p className="text-white/60 text-sm leading-relaxed">Idealnie gładkie ściany i sufity to fundament każdego ładnego wnętrza. Robimy gładzie maszynowe i ręczne, malujemy – równo, bez smug, z dbałością o każdy narożnik. Ty odbierasz ściany gotowe pod meble.</p>
</div>

<div className="group bg-[#2C2C2C] p-8 rounded-xl border border-white/5 hover:bg-[#252525] transition-all duration-300 relative overflow-hidden reveal reveal-delay-1 shadow-lg">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C8A96E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white/40 group-hover:text-[#C8A96E] group-hover:scale-110 transition-all duration-300 mb-6" icon="solar:align-bottom-linear" width="40"></iconify-icon>
<h3 className="text-xl font-playfair font-semibold mb-4 group-hover:text-[#C8A96E] transition-colors">Glazurnictwo</h3>
<p className="text-white/60 text-sm leading-relaxed">Łazienka, kuchnia, taras – każdy format płytki, każdy wzór, każde ułożenie. Precyzyjne docinanie, równe fugi, idealny efekt końcowy. Glazura ułożona przez nas zostaje na lata.</p>
</div>

<div className="group bg-[#2C2C2C] p-8 rounded-xl border border-white/5 hover:bg-[#252525] transition-all duration-300 relative overflow-hidden reveal reveal-delay-2 shadow-lg">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C8A96E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white/40 group-hover:text-[#C8A96E] group-hover:scale-110 transition-all duration-300 mb-6" icon="solar:layers-linear" width="40"></iconify-icon>
<h3 className="text-xl font-playfair font-semibold mb-4 group-hover:text-[#C8A96E] transition-colors">Podłogi i Panele</h3>
<p className="text-white/60 text-sm leading-relaxed">Panele laminowane, deski, wykładziny, dywany kamienne – dobieramy i układamy. Twoja podłoga ma być piękna i trwała. Robimy to raz, robimy to dobrze.</p>
</div>

<div className="group bg-[#2C2C2C] p-8 rounded-xl border border-white/5 hover:bg-[#252525] transition-all duration-300 relative overflow-hidden reveal shadow-lg">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C8A96E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white/40 group-hover:text-[#C8A96E] group-hover:scale-110 transition-all duration-300 mb-6" icon="solar:drop-linear" width="40"></iconify-icon>
<h3 className="text-xl font-playfair font-semibold mb-4 group-hover:text-[#C8A96E] transition-colors">Hydraulika</h3>
<p className="text-white/60 text-sm leading-relaxed">Podłączenia armatury, pryszniców, wanien, umywalek, spłuczek. Nie musisz szukać osobnego hydraulika – robimy to w ramach wykończenia łazienki.</p>
</div>

<div className="group bg-[#2C2C2C] p-8 rounded-xl border border-white/5 hover:bg-[#252525] transition-all duration-300 relative overflow-hidden reveal reveal-delay-1 shadow-lg">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C8A96E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white/40 group-hover:text-[#C8A96E] group-hover:scale-110 transition-all duration-300 mb-6" icon="solar:plug-circle-linear" width="40"></iconify-icon>
<h3 className="text-xl font-playfair font-semibold mb-4 group-hover:text-[#C8A96E] transition-colors">Elektryka</h3>
<p className="text-white/60 text-sm leading-relaxed">Gniazdka, włączniki, oświetlenie, podłączenia. Elektryka wykonana schludnie, ukryta w ścianie, bezpieczna. Jeden fachowiec mniej do szukania dla Ciebie.</p>
</div>

<div className="group bg-[#2C2C2C] p-8 rounded-xl border border-white/5 hover:bg-[#252525] transition-all duration-300 relative overflow-hidden reveal reveal-delay-2 shadow-lg">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C8A96E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white/40 group-hover:text-[#C8A96E] group-hover:scale-110 transition-all duration-300 mb-6" icon="solar:square-alt-linear" width="40"></iconify-icon>
<h3 className="text-xl font-playfair font-semibold mb-4 group-hover:text-[#C8A96E] transition-colors">Dywany Kamienne</h3>
<p className="text-white/60 text-sm leading-relaxed">Nowoczesne wykończenie podłóg i schodów materiałem kamiennym – trwałe, eleganckie, łatwe w utrzymaniu. Coraz częściej wybierane przez naszych klientów.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-[#F9F7F4] relative">
<div className="max-w-[1200px] mx-auto px-6 lg:px-12">
<div className="reveal mb-16">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold tracking-tight text-[#2C2C2C] mb-4">Jak wygląda współpraca?</h2>
<div className="title-line"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">

<div className="hidden lg:block absolute top-6 left-12 right-12 h-px bg-[#2C2C2C]/10"></div>

<div className="relative reveal">
<div className="w-12 h-12 rounded-full bg-[#C8A96E] text-[#1A1A1A] flex items-center justify-center font-playfair font-bold text-xl mb-6 relative z-10 shadow-lg">1</div>
<h3 className="text-xl font-semibold mb-3 text-[#2C2C2C]">Kontakt i wycena</h3>
<p className="text-[#6B6B6B] text-sm leading-relaxed">Zadzwoń lub napisz z opisem zakresu. Przyjedziemy, obejrzymy i wycenimy – bezpłatnie, bez zobowiązań. Cena ustalona na początku to cena ostateczna.</p>
</div>

<div className="relative reveal reveal-delay-1">
<div className="w-12 h-12 rounded-full bg-white border border-[#2C2C2C]/10 text-[#C8A96E] flex items-center justify-center font-playfair font-bold text-xl mb-6 relative z-10">2</div>
<h3 className="text-xl font-semibold mb-3 text-[#2C2C2C]">Harmonogram</h3>
<p className="text-[#6B6B6B] text-sm leading-relaxed">Omawiamy zakres, kolejność prac i termin. Jeden koordynator przez cały czas – wiesz do kogo dzwonić i kto odpowiada za całość.</p>
</div>

<div className="relative reveal reveal-delay-2">
<div className="w-12 h-12 rounded-full bg-white border border-[#2C2C2C]/10 text-[#C8A96E] flex items-center justify-center font-playfair font-bold text-xl mb-6 relative z-10">3</div>
<h3 className="text-xl font-semibold mb-3 text-[#2C2C2C]">Wchodzimy i robimy</h3>
<p className="text-[#6B6B6B] text-sm leading-relaxed">Ekipa realizuje zakres od A do Z. Pracujemy schludnie, po każdym dniu sprzątamy. Nie znikamy w połowie roboty do innego klienta.</p>
</div>

<div className="relative reveal reveal-delay-3">
<div className="w-12 h-12 rounded-full bg-[#2C2C2C] text-[#C8A96E] flex items-center justify-center font-playfair font-bold text-xl mb-6 relative z-10 shadow-lg">4</div>
<h3 className="text-xl font-semibold mb-3 text-[#2C2C2C]">Odbiór i gotowe</h3>
<p className="text-[#6B6B6B] text-sm leading-relaxed">Oglądasz efekt. Jeśli coś wymaga poprawki – robimy od razu. Płacisz po akceptacji i możesz spokojnie zacząć się urządzać.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white" id="realizacje">
<div className="max-w-[1200px] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
<div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold tracking-tight text-[#2C2C2C] mb-4">Nasze realizacje</h2>
<div className="title-line mb-4"></div>
<p className="text-[#6B6B6B] text-lg font-light">Warszawa i okolice – efekty które mówią same za siebie</p>
</div>
<a className="text-[#C8A96E] font-medium hover:text-[#2C2C2C] transition-colors flex items-center gap-2 group" href="#kontakt">
                    Zarezerwuj termin <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="masonry reveal">

<div className="masonry-item group relative overflow-hidden rounded-xl cursor-pointer">
<img alt="Wykończona łazienka premium" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&amp;w=1769&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<p className="text-[#C8A96E] font-playfair text-xl font-semibold">Łazienka Premium</p>
<p className="text-white/80 text-sm">Warszawa Wola</p>
</div>
</div>

<div className="masonry-item group relative overflow-hidden rounded-xl cursor-pointer">
<img alt="Salon z panelami podłogowymi" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<p className="text-[#C8A96E] font-playfair text-xl font-semibold">Układanie Paneli</p>
<p className="text-white/80 text-sm">Pruszków</p>
</div>
</div>

<div className="masonry-item group relative overflow-hidden rounded-xl cursor-pointer">
<img alt="Kuchnia wykończenie" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<p className="text-[#C8A96E] font-playfair text-xl font-semibold">Glazurnictwo &amp; Gładzie</p>
<p className="text-white/80 text-sm">Piaseczno</p>
</div>
</div>

<div className="masonry-item group relative overflow-hidden rounded-xl cursor-pointer">
<img alt="Prysznic walk-in" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<p className="text-[#C8A96E] font-playfair text-xl font-semibold">Prysznic Walk-in</p>
<p className="text-white/80 text-sm">Grodzisk Mazowiecki</p>
</div>
</div>

<div className="masonry-item group relative overflow-hidden rounded-xl cursor-pointer">
<img alt="Gotowa sypialnia" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<p className="text-[#C8A96E] font-playfair text-xl font-semibold">Gładzie &amp; Malowanie</p>
<p className="text-white/80 text-sm">Warszawa Mokotów</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-texture-dark text-white border-y border-white/5 relative">
<div className="max-w-[1200px] mx-auto px-6 lg:px-12">
<div className="text-center mb-16 lg:mb-24 reveal">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold tracking-tight mb-4">Dlaczego klienci wracają i polecają nas dalej?</h2>
<div className="title-line mx-auto mb-6"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">

<div className="flex gap-6 reveal">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-[#C8A96E]" icon="solar:shield-check-linear" width="36"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-playfair font-semibold mb-3">Jedna ekipa – wszystko</h3>
<p className="text-white/60 text-sm leading-relaxed">Nie szukasz hydraulika, elektryka i glazurnika osobno. Wchodzi nasza ekipa i wychodzi gotowe mieszkanie. Zyskujesz spokój i oszczędzasz czas.</p>
</div>
</div>

<div className="flex gap-6 reveal reveal-delay-1">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-[#C8A96E]" icon="solar:clock-circle-linear" width="36"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-playfair font-semibold mb-3">Terminowość</h3>
<p className="text-white/60 text-sm leading-relaxed">Umawiamy się na datę i jej dotrzymujemy. Twój harmonogram przeprowadzki albo remontu nas nie zaskoczy. Szanujemy Twój i nasz czas.</p>
</div>
</div>

<div className="flex gap-6 reveal">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-[#C8A96E]" icon="solar:tag-price-linear" width="36"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-playfair font-semibold mb-3">Stała cena bez niespodzianek</h3>
<p className="text-white/60 text-sm leading-relaxed">Wycenę robimy przed wejściem. Cena się nie zmienia w trakcie – chyba że Ty sam zdecydujesz się rozszerzyć zakres prac.</p>
</div>
</div>

<div className="flex gap-6 reveal reveal-delay-1">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-[#C8A96E]" icon="solar:stars-line-duotone" width="36"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-playfair font-semibold mb-3">Z poleceń – bez powodu do reklamy</h3>
<p className="text-white/60 text-sm leading-relaxed">Większość naszych klientów trafia z polecenia. To znaczy, że poprzedni klienci są wystarczająco zadowoleni, żeby nas rekomendować swoim bliskim.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-[#F9F7F4]" id="opinie">
<div className="max-w-[1200px] mx-auto px-6 lg:px-12">
<div className="text-center mb-16 lg:mb-20 reveal">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold tracking-tight text-[#2C2C2C] mb-4">Co mówią klienci?</h2>
<div className="title-line mx-auto mb-6"></div>
<p className="text-[#6B6B6B] text-lg font-light tracking-wide">Działamy z poleceń – to nasza najlepsza wizytówka</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-[#2C2C2C]/5 reveal">
<iconify-icon className="text-[#C8A96E]/20 mb-4" icon="solar:quote-left-bold-duotone" width="40"></iconify-icon>
<p className="text-[#6B6B6B] text-sm leading-relaxed italic mb-8">"Pełne wykończenie dwupokojowego mieszkania na Woli – łazienka, gładzie w całym mieszkaniu, panele, elektryka. Wszystko z jedną ekipą, bez stresu. Paweł odbierał telefon od razu, termin dotrzymany co do dnia. Polecam bez wahania i już polecam sąsiadce."</p>
<div>
<p className="font-playfair font-semibold text-[#2C2C2C]">Marta K., Warszawa-Wola</p>
<p className="text-micro text-[#C8A96E] uppercase mt-1">Pełne wykończenie mieszkania</p>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-[#2C2C2C]/5 reveal reveal-delay-1 relative transform md:-translate-y-4">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C8A96E] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Polecany</div>
<iconify-icon className="text-[#C8A96E]/20 mb-4" icon="solar:quote-left-bold-duotone" width="40"></iconify-icon>
<p className="text-[#6B6B6B] text-sm leading-relaxed italic mb-8">"Łazienka z płytkami dużego formatu – bałem się że żaden glazurnik tego nie ruszy, ale ekipa Pawła poradziła sobie bez problemu. Efekt lepszy niż się spodziewałem, fugowanie idealne. Cena zgodna z wyceną."</p>
<div>
<p className="font-playfair font-semibold text-[#2C2C2C]">Tomasz B., Pruszków</p>
<p className="text-micro text-[#C8A96E] uppercase mt-1">Glazurnictwo – łazienka</p>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-[#2C2C2C]/5 reveal reveal-delay-2">
<iconify-icon className="text-[#C8A96E]/20 mb-4" icon="solar:quote-left-bold-duotone" width="40"></iconify-icon>
<p className="text-[#6B6B6B] text-sm leading-relaxed italic mb-8">"Szukałem kogoś kto zrobi gładzie, pomaluje i ułoży panele w salonie i sypialni. Znalazłem przez polecenie – i się nie zawiodłem. Paweł konkretny, ekipa czysta, po sobie posprzątali. Przy następnym mieszkaniu znowu do nich."</p>
<div>
<p className="font-playfair font-semibold text-[#2C2C2C]">Karolina W., Piaseczno</p>
<p className="text-micro text-[#C8A96E] uppercase mt-1">Gładzie, malowanie, podłogi</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-[#1A1A1A] text-white relative border-t border-white/5">
<div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold tracking-tight mb-6">Działamy w Warszawie i okolicach</h2>
<div className="title-line mb-8"></div>
<p className="text-white/70 text-lg mb-10 font-light leading-relaxed">
                    Pruszków to nasza baza – dojeżdżamy do 40 km. Nie widzisz swojej miejscowości? <a className="text-[#C8A96E] hover:underline" href="tel:694487380">Zadzwoń – ustalimy.</a>
</p>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 rounded-full border border-white/20 text-sm text-white/80 bg-white/5">Warszawa</span>
<span className="px-4 py-2 rounded-full border border-[#C8A96E]/50 text-sm text-[#C8A96E] bg-[#C8A96E]/10">Pruszków</span>
<span className="px-4 py-2 rounded-full border border-white/20 text-sm text-white/80 bg-white/5">Piaseczno</span>
<span className="px-4 py-2 rounded-full border border-white/20 text-sm text-white/80 bg-white/5">Grodzisk Mazowiecki</span>
<span className="px-4 py-2 rounded-full border border-white/20 text-sm text-white/80 bg-white/5">Ożarów Mazowiecki</span>
<span className="px-4 py-2 rounded-full border border-white/20 text-sm text-white/80 bg-white/5">Nadarzyn</span>
<span className="px-4 py-2 rounded-full border border-white/20 text-sm text-white/80 bg-white/5">Raszyn</span>
<span className="px-4 py-2 rounded-full border border-transparent text-sm text-white/50 italic">...i okolice</span>
</div>
</div>
<div className="h-[400px] rounded-xl overflow-hidden reveal reveal-delay-2 relative border border-white/10 shadow-2xl">

<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156686.42531652157!2d20.825221950000002!3d52.1706691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471936c53e0d8601%3A0xc6222b46d7e016a2!2sPruszk%C3%B3w!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl" style={{border: '0', filter: 'invert(90%) hue-rotate(180deg) brightness(80%) contrast(110%)'}} width="100%"></iframe>
<div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-xl"></div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white">
<div className="max-w-[800px] mx-auto px-6 lg:px-12">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold tracking-tight text-[#2C2C2C] mb-4">Masz pytania? Mamy odpowiedzi.</h2>
<div className="title-line mx-auto"></div>
</div>
<div className="space-y-4 reveal reveal-delay-1">

<details className="group bg-[#F9F7F4] rounded-lg border border-[#2C2C2C]/5 overflow-hidden">
<summary className="flex justify-between items-center font-medium p-6 text-[#2C2C2C]">
                        Czy wycena jest bezpłatna i czy cena może wzrosnąć w trakcie?
                        <span className="transition group-open:rotate-180 text-[#C8A96E]">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-[#6B6B6B] text-sm pb-6 px-6 leading-relaxed">
                        Tak, wycena jest bezpłatna i przyjedziemy na miejsce żeby dobrze ocenić zakres. Cena ustalona przed wejściem to cena ostateczna – nie doliczamy nic w trakcie bez wcześniejszego uzgodnienia z Tobą.
                    </div>
</details>

<details className="group bg-[#F9F7F4] rounded-lg border border-[#2C2C2C]/5 overflow-hidden">
<summary className="flex justify-between items-center font-medium p-6 text-[#2C2C2C]">
                        Ile trwa typowe wykończenie mieszkania?
                        <span className="transition group-open:rotate-180 text-[#C8A96E]">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-[#6B6B6B] text-sm pb-6 px-6 leading-relaxed">
                        To zależy od zakresu. Sama łazienka to zazwyczaj 1,5–2 tygodnie. Pełne wykończenie dwupokojowego mieszkania – od 4 do 8 tygodni, w zależności od zakresu i materiałów. Konkretny termin podajemy po obejrzeniu mieszkania.
                    </div>
</details>

<details className="group bg-[#F9F7F4] rounded-lg border border-[#2C2C2C]/5 overflow-hidden">
<summary className="flex justify-between items-center font-medium p-6 text-[#2C2C2C]">
                        Czy robicie tylko kompleksowe zlecenia czy też pojedyncze usługi?
                        <span className="transition group-open:rotate-180 text-[#C8A96E]">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-[#6B6B6B] text-sm pb-6 px-6 leading-relaxed">
                        Robimy obie opcje. Możesz zamówić tylko glazurę w łazience albo tylko gładzie i malowanie – nie musisz brać całego pakietu. Choć kompleksowe zlecenia planujemy sprawniej i wychodzą korzystniej cenowo.
                    </div>
</details>

<details className="group bg-[#F9F7F4] rounded-lg border border-[#2C2C2C]/5 overflow-hidden">
<summary className="flex justify-between items-center font-medium p-6 text-[#2C2C2C]">
                        Czy dojeżdżacie poza Warszawę?
                        <span className="transition group-open:rotate-180 text-[#C8A96E]">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-[#6B6B6B] text-sm pb-6 px-6 leading-relaxed">
                        Tak – działamy w promieniu 40 km od Pruszków, więc Warszawa, Piaseczno, Grodzisk Mazowiecki, Ożarów, Raszyn i okolice to nasz teren. Jeśli jesteś w innej miejscowości – zadzwoń, ustalimy czy dojedziemy.
                    </div>
</details>

<details className="group bg-[#F9F7F4] rounded-lg border border-[#2C2C2C]/5 overflow-hidden">
<summary className="flex justify-between items-center font-medium p-6 text-[#2C2C2C]">
                        Skąd mam wiedzieć, że robota będzie dobra skoro nie mam gdzie sprawdzić opinii?
                        <span className="transition group-open:rotate-180 text-[#C8A96E]">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-[#6B6B6B] text-sm pb-6 px-6 leading-relaxed">
                        Działamy głównie z poleceń – możemy dać kontakt do poprzednich klientów (za ich zgodą) żebyś mógł zapytać wprost. Poza tym płacisz po akceptacji efektu. Jeśli coś nie spełnia oczekiwań – poprawiamy na własny koszt.
                    </div>
</details>
</div>
</div>
</section>

<section className="relative py-32 bg-[#1A1A1A] overflow-hidden">
<div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-30" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-[#1A1A1A]"></div>
<div className="relative z-10 max-w-[800px] mx-auto px-6 text-center text-white reveal">
<h2 className="text-3xl md:text-5xl font-playfair font-semibold tracking-tight mb-6">Twoje mieszkanie czeka na wykończenie. <span className="text-[#C8A96E] italic font-light">Nie odkładaj.</span></h2>
<p className="text-lg text-white/70 font-light mb-10 tracking-wide">Bezpłatna wycena <span className="text-[#C8A96E] mx-2">·</span> Bez zobowiązań <span className="text-[#C8A96E] mx-2">·</span> Odpowiemy dziś</p>
<a className="inline-flex items-center gap-3 bg-[#C8A96E] text-[#1E1E1E] px-10 py-5 rounded-md font-semibold text-lg hover:-translate-y-1 hover:bg-[#A8893E] hover:shadow-[0_10px_30px_rgba(200,169,110,0.3)] transition-all btn-shimmer" href="tel:694487380">
<iconify-icon icon="solar:phone-bold" width="24"></iconify-icon> Zadzwoń: 694 487 380
            </a>
<p className="mt-6 text-sm text-white/50">lub napisz: <a className="text-white hover:text-[#C8A96E] transition-colors" href="mailto:monikapawel20@gmail.com">monikapawel20@gmail.com</a></p>
</div>
</section>

<section className="py-20 lg:py-32 bg-[#2C2C2C] text-white" id="kontakt">
<div className="max-w-[1200px] mx-auto px-6 lg:px-12">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold tracking-tight mb-4">Porozmawiajmy o Twoim wykończeniu.</h2>
<div className="title-line mb-6"></div>
<p className="text-white/60 text-lg font-light">Napisz lub zadzwoń – bezpłatna wycena, zero zobowiązań.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

<div className="lg:col-span-3 reveal">
<form action="#" className="space-y-8" method="POST" onsubmit="event.preventDefault(); alert('Wiadomość testowa. Formularz wymaga podpięcia pod backend.');">
<div className="relative group">
<input className="form-input peer w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#C8A96E] transition-colors" id="name" placeholder="Imię i nazwisko" required="" type="text"/>
<label className="form-label absolute left-0 top-3 text-white/50 text-sm transition-all duration-300 pointer-events-none uppercase tracking-widest font-medium" htmlFor="name">Imię i nazwisko</label>
</div>
<div className="relative group">
<input className="form-input peer w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#C8A96E] transition-colors" id="phone" placeholder="Numer telefonu" required="" type="tel"/>
<label className="form-label absolute left-0 top-3 text-white/50 text-sm transition-all duration-300 pointer-events-none uppercase tracking-widest font-medium" htmlFor="phone">Numer telefonu</label>
</div>
<div className="relative group">
<textarea className="form-input peer w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#C8A96E] transition-colors resize-none" id="message" placeholder="Opis zakresu" required="" rows="4"></textarea>
<label className="form-label absolute left-0 top-3 text-white/50 text-sm transition-all duration-300 pointer-events-none uppercase tracking-widest font-medium" htmlFor="message">Opis zakresu (co, gdzie, kiedy)</label>
</div>
<button className="w-full bg-white/5 hover:bg-[#C8A96E] text-white hover:text-[#1A1A1A] border border-white/10 hover:border-transparent py-4 rounded-md font-semibold tracking-wide transition-all duration-300" type="submit">
                            Wyślij zapytanie
                        </button>
<p className="text-xs text-white/40 text-center tracking-wide flex justify-center items-center gap-2">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon> Odpowiadamy w ciągu 24h · Twoje dane są bezpieczne
                        </p>
</form>
</div>

<div className="lg:col-span-2 space-y-10 reveal reveal-delay-2">
<div>
<p className="text-xs text-white/50 uppercase tracking-widest mb-2 font-medium">Zadzwoń do nas</p>
<a className="text-3xl font-playfair font-semibold text-[#C8A96E] hover:text-white transition-colors flex items-center gap-4" href="tel:694487380">
                            694 487 380
                        </a>
<p className="text-sm text-white/50 mt-2">oddzwonimy jeśli nie odbieramy</p>
</div>
<div>
<p className="text-xs text-white/50 uppercase tracking-widest mb-2 font-medium">E-mail</p>
<a className="text-lg font-medium text-white hover:text-[#C8A96E] transition-colors" href="mailto:monikapawel20@gmail.com">
                            monikapawel20@gmail.com
                        </a>
</div>
<div>
<p className="text-xs text-white/50 uppercase tracking-widest mb-2 font-medium">Obszar działania</p>
<p className="text-base text-white/80 leading-relaxed">
                            📍 Pruszków<br/>
                            Warszawa i okolice do 40 km
                        </p>
</div>
<div>
<p className="text-xs text-white/50 uppercase tracking-widest mb-2 font-medium">Godziny pracy</p>
<p className="text-base text-white/80">
                            🕐 Poniedziałek – Sobota<br/>
                            7:00 – 18:00
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1A1A1A] text-white/60 py-12 border-t border-white/5">
<div className="max-w-[1200px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
<div className="col-span-1">
<span className="font-playfair font-semibold tracking-widest text-sm uppercase flex items-center gap-2 mb-4 text-white">
<span className="w-2 h-2 rounded-full bg-[#C8A96E]"></span> Paweł Trębicki
                    </span>
<p className="text-sm leading-relaxed mb-4 max-w-xs">Kompleksowe wykończenia wnętrz – gładzie, glazura, podłogi, hydraulika i elektryka. Jedna ekipa od A do Z.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm uppercase tracking-widest">Nawigacja</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#C8A96E] transition-colors" href="#o-nas">O nas</a></li>
<li><a className="hover:text-[#C8A96E] transition-colors" href="#uslugi">Usługi</a></li>
<li><a className="hover:text-[#C8A96E] transition-colors" href="#realizacje">Realizacje</a></li>
<li><a className="hover:text-[#C8A96E] transition-colors" href="#opinie">Opinie</a></li>
<li><a className="hover:text-[#C8A96E] transition-colors" href="#kontakt">Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm uppercase tracking-widest">Usługi</h4>
<ul className="space-y-2 text-sm">
<li>Gładzie i Malowanie</li>
<li>Glazurnictwo</li>
<li>Podłogi i Panele</li>
<li>Hydraulika i Elektryka</li>
<li>Dywany Kamienne</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2025 Paweł Trębicki – Wykończenia Wnętrz. Wszelkie prawa zastrzeżone.</p>
<p className="flex items-center gap-1">Projekt: Premium Design</p>
</div>
</div>
</footer>

<a aria-label="Zadzwoń teraz" className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 bg-[#C8A96E] text-[#1A1A1A] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 fab-ring group" href="tel:694487380">
<iconify-icon className="group-hover:animate-pulse" icon="solar:phone-calling-bold" width="24"></iconify-icon>
</a>



    </>
  );
}
