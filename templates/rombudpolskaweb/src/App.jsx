import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Rombud Polska",
"telephone": "+48791793293",
"email": "rombudpolska@onet.pl",
"areaServed": ["Warszawa", "Tarczyn", "Krosno", "Polska"],
"description": "Kompleksowe usługi budowlane, sprzedaż materiałów i wynajem maszyn budowlanych.",
"priceRange": "$$",
"openingHours": "Mo-Sa 07:00-18:00"
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Sticky Header Logic
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Intersection Observer for Reveal Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Trigger counters if element is a counter
                    if(entry.target.classList.contains('counter') || entry.target.querySelector('.counter')) {
                        const counters = entry.target.querySelectorAll('.counter').length ? entry.target.querySelectorAll('.counter') : [entry.target];
                        counters.forEach(counter => {
                            if(!counter.classList.contains('counted')) {
                                const target = +counter.getAttribute('data-target');
                                const duration = 2000;
                                const stepTime = Math.abs(Math.floor(duration / target));
                                let current = 0;
                                
                                const timer = setInterval(() => {
                                    current += 1;
                                    counter.innerText = current;
                                    if (current >= target) {
                                        clearInterval(timer);
                                        counter.classList.add('counted');
                                    }
                                }, stepTime);
                            }
                        });
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((element) => {
            observer.observe(element);
        });

        // Mobile Menu toggle (simple implementation)
        const menuBtn = document.querySelector('button[aria-label="Menu"]');
        const navLinks = document.querySelector('.hidden.lg\\:flex.space-x-8');
        let menuOpen = false;

        if(menuBtn && navLinks) {
            menuBtn.addEventListener('click', () => {
                if(!menuOpen) {
                    navLinks.classList.remove('hidden');
                    navLinks.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-[#1A2332]', 'p-4', 'space-y-4', 'space-x-0', 'border-t', 'border-gray-800');
                    menuOpen = true;
                } else {
                    navLinks.classList.add('hidden');
                    navLinks.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-[#1A2332]', 'p-4', 'space-y-4', 'space-x-0', 'border-t', 'border-gray-800');
                    menuOpen = false;
                }
            });
            
            // Close mobile menu on link click
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if(window.innerWidth < 1024) {
                        navLinks.classList.add('hidden');
                        navLinks.classList.remove('flex', 'flex-col', 'absolute');
                        menuOpen = false;
                    }
                });
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-300 py-6 text-white border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
<a className="font-heading font-bold text-2xl tracking-tight text-white z-50" href="#">ROMBUD POLSKA</a>
<div className="hidden lg:flex space-x-8 items-center text-sm font-medium">
<a className="hover:text-[#E8A020] transition-colors" href="#uslugi">Usługi</a>
<a className="hover:text-[#E8A020] transition-colors" href="#materialy">Materiały</a>
<a className="hover:text-[#E8A020] transition-colors" href="#maszyny">Maszyny</a>
<a className="hover:text-[#E8A020] transition-colors" href="#realizacje">Realizacje</a>
<a className="hover:text-[#E8A020] transition-colors" href="#kontakt">Kontakt</a>
</div>
<div className="hidden lg:flex items-center space-x-6">
<a className="flex items-center group" href="tel:+48791793293">
<iconify-icon className="text-[#E8A020] text-xl mr-2 group-hover:animate-pulse" icon="solar:phone-calling-linear"></iconify-icon>
<span className="font-heading font-semibold tracking-wide text-lg">791 793 293</span>
</a>
<a className="bg-[#E8A020] text-[#1A2332] px-6 py-2.5 rounded font-medium text-sm btn-hover flex items-center" href="#kontakt">
                    Bezpłatna wycena
                </a>
</div>

<button aria-label="Menu" className="lg:hidden text-white hover:text-[#E8A020] focus:outline-none z-50">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="relative h-screen min-h-[700px] flex items-center justify-center parallax-bg overflow-hidden bg-[#111B27]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&amp'}}>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A2332] via-[#1A2332]/80 to-transparent z-0"></div>
<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwaDIwdjIwSDIwVjIwek0wIDIwaDIwdjIwSDBWMjB6bTIwIDBoMjB2MjBIMjBWMHpNMCAwaDIwdjIwSDBWMHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
<div className="inline-flex items-center border border-[#E8A020]/30 bg-[#1A2332]/50 backdrop-blur-sm px-4 py-1.5 rounded-full text-[#E8A020] text-xs font-medium tracking-wide mb-8 animate-[slideInLeft_0.6s_ease-out_0.3s_both]">
<iconify-icon className="mr-2 text-base" icon="solar:star-fall-linear"></iconify-icon>
                ✦ Budownictwo · Materiały · Wynajem Maszyn – Cała Polska
            </div>
<h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.95] mb-6 animate-[slideUpFade_0.9s_ease-out_0.5s_both]">
                BUDUJESZ? MY MAMY WSZYSTKO.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A020] to-[#F1C40F]">JEDEN KONTAKT – TRZY USŁUGI.</span>
</h1>
<p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-[fadeIn_0.7s_ease-out_0.8s_both]">
                Stany surowe, materiały własnej produkcji i wynajem maszyn budowlanych. Warszawa · Tarczyn · Krosno · Cała Polska.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-[scaleInFade_0.6s_ease-out_1.1s_both]">
<a className="w-full sm:w-auto bg-[#E8A020] text-[#1A2332] px-8 py-4 rounded font-medium text-lg btn-hover flex items-center justify-center" href="tel:+48791793293">
<iconify-icon className="mr-2 text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                    Zadzwoń teraz
                </a>
<a className="w-full sm:w-auto bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded font-medium text-lg transition-colors flex items-center justify-center" href="#filary">
                    Zobacz co robimy
                </a>
</div>
<p className="text-gray-400 text-xs mt-4 animate-[fadeIn_0.7s_ease-out_1.2s_both]">Bezpłatna wycena · Bez zobowiązań · Odpowiemy dziś</p>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
<a className="text-white/50 hover:text-[#E8A020] transition-colors" href="#zaufanie">
<iconify-icon className="text-3xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
</div>
</header>

<div className="ticker-wrap text-white py-3 text-sm font-medium tracking-wide">
<div className="ticker-content space-x-8">

<span className="flex items-center space-x-8">
<span>Stan surowy</span><span className="text-[#E8A020]">•</span>
<span>Ścianki działowe</span><span className="text-[#E8A020]">•</span>
<span>Zabudowy GK</span><span className="text-[#E8A020]">•</span>
<span>Dachy płaskie i skośne</span><span className="text-[#E8A020]">•</span>
<span>Przyłącza wod-kan</span><span className="text-[#E8A020]">•</span>
<span>Prąd</span><span className="text-[#E8A020]">•</span>
<span>Wynajem koparki</span><span className="text-[#E8A020]">•</span>
<span>Wynajem rusztowań</span><span className="text-[#E8A020]">•</span>
<span>Styropian własnej produkcji</span><span className="text-[#E8A020]">•</span>
<span>Blacha</span><span className="text-[#E8A020]">•</span>
<span>Marmur</span><span className="text-[#E8A020]">•</span>
<span>Warszawa</span><span className="text-[#E8A020]">•</span>
<span>Tarczyn</span><span className="text-[#E8A020]">•</span>
<span>Krosno</span>
</span>
<span className="flex items-center space-x-8">
<span>Stan surowy</span><span className="text-[#E8A020]">•</span>
<span>Ścianki działowe</span><span className="text-[#E8A020]">•</span>
<span>Zabudowy GK</span><span className="text-[#E8A020]">•</span>
<span>Dachy płaskie i skośne</span><span className="text-[#E8A020]">•</span>
<span>Przyłącza wod-kan</span><span className="text-[#E8A020]">•</span>
<span>Prąd</span><span className="text-[#E8A020]">•</span>
<span>Wynajem koparki</span><span className="text-[#E8A020]">•</span>
<span>Wynajem rusztowań</span><span className="text-[#E8A020]">•</span>
<span>Styropian własnej produkcji</span><span className="text-[#E8A020]">•</span>
<span>Blacha</span><span className="text-[#E8A020]">•</span>
<span>Marmur</span><span className="text-[#E8A020]">•</span>
<span>Warszawa</span><span className="text-[#E8A020]">•</span>
<span>Tarczyn</span><span className="text-[#E8A020]">•</span>
<span>Krosno</span>
</span>
</div>
</div>

<section className="bg-[#E8A020] py-8 border-b-4 border-[#1A2332]" id="zaufanie">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-[#1A2332]">
<div className="reveal">
<div className="font-heading font-bold text-4xl tracking-tight counter" data-target="16">0</div>
<div className="text-sm font-semibold uppercase tracking-wider mt-1">+ Pracowników</div>
</div>
<div className="reveal reveal-delay-1">
<div className="font-heading font-bold text-4xl tracking-tight counter" data-target="3">0</div>
<div className="text-sm font-semibold uppercase tracking-wider mt-1">Oddziały w Polsce</div>
</div>
<div className="reveal reveal-delay-2">
<div className="font-heading font-bold text-4xl tracking-tight"><iconify-icon className="inline-block translate-y-1" icon="solar:routing-2-linear"></iconify-icon></div>
<div className="text-sm font-semibold uppercase tracking-wider mt-1">Cała Polska</div>
</div>
<div className="reveal reveal-delay-3">
<div className="font-heading font-bold text-4xl tracking-tight">3w1</div>
<div className="text-sm font-semibold uppercase tracking-wider mt-1">Kompleksowo</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#F4F4F2] relative" id="ofirmie">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal relative">
<div className="absolute -inset-4 bg-[#E8A020] rounded-lg translate-x-4 translate-y-4 opacity-20"></div>
<img alt="Pracownicy Rombud Polska na budowie" className="relative rounded-md shadow-2xl object-cover h-full min-h-[400px] w-full filter grayscale-[20%] contrast-125" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="reveal">
<h2 className="font-heading font-bold text-4xl md:text-5xl text-[#1A2332] tracking-tight mb-6 leading-tight">
                        ROMBUD POLSKA – JEDEN PARTNER DLA CAŁEJ BUDOWY.
                    </h2>
<div className="w-16 h-1 bg-[#E8A020] mb-8"></div>
<p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                        Rombud Polska to 16-osobowa ekipa z siecią podwykonawców, działająca z biura w Warszawie oraz oddziałów w Tarczynie i Krośnie. Realizujemy zlecenia w całej Polsce – od stanów surowych po przyłącza i wykończenie.
                    </p>
<p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                        Nie musisz dzwonić do trzech firm. U nas zamawiasz robotę, kupujesz materiały (<span className="font-medium text-[#1A2332]">styropian z własnej produkcji, blacha, marmur</span>) i wynajmujesz sprzęt na budowę – koparki, zagęszczarki, rusztowania, niwelatory i więcej.
                    </p>
<p className="text-lg font-medium italic text-[#1A2332] border-l-4 border-[#E8A020] pl-4">
                        Klienci sami do nas dzwonią – bo polecają nas kolejnym. To najlepsza ocena naszej pracy.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-32 bg-[#111B27] relative z-10" id="filary">
<div className="skew-divider skew-top bg-[#111B27]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<h2 className="font-heading font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">
                    TRZY FILARY ROMBUD POLSKA
                </h2>
<p className="text-gray-400 text-lg">Budownictwo, materiały i wynajem maszyn – wszystko w jednym miejscu.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-md p-8 relative overflow-hidden group pillar-card reveal">
<div className="w-14 h-14 bg-[#1A2332] rounded flex items-center justify-center mb-6 group-hover:bg-[#E8A020] transition-colors duration-300">
<iconify-icon className="text-3xl text-white group-hover:text-[#1A2332] transition-colors" icon="solar:buildings-outline" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-3xl text-[#1A2332] tracking-tight mb-4 group-hover:text-[#C8880A] transition-colors" id="uslugi">Usługi Budowlane</h3>
<p className="text-[#6B7280] mb-6 leading-relaxed min-h-[120px]">
                        Stany surowe zero, ścianki działowe, zabudowy GK, dachy płaskie i skośne, instalacje wod-kan, przyłącza prądu. Realizujemy większe inwestycje prywatne i państwowe – od fundamentów po dach.
                    </p>
<ul className="space-y-2 text-sm text-[#1A2332] font-medium border-t border-gray-100 pt-4">
<li className="flex items-center"><iconify-icon className="text-[#E8A020] mr-2 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon> Stan surowy</li>
<li className="flex items-center"><iconify-icon className="text-[#E8A020] mr-2 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon> Ścianki działowe &amp; GK</li>
<li className="flex items-center"><iconify-icon className="text-[#E8A020] mr-2 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon> Dachy płaskie i skośne</li>
<li className="flex items-center"><iconify-icon className="text-[#E8A020] mr-2 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon> Wod-kan i przyłącza</li>
</ul>
</div>

<div className="bg-white rounded-md p-8 relative overflow-hidden group pillar-card reveal reveal-delay-1">
<div className="w-14 h-14 bg-[#1A2332] rounded flex items-center justify-center mb-6 group-hover:bg-[#E8A020] transition-colors duration-300">
<iconify-icon className="text-3xl text-white group-hover:text-[#1A2332] transition-colors" icon="solar:box-outline" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-3xl text-[#1A2332] tracking-tight mb-4 group-hover:text-[#C8880A] transition-colors" id="materialy">Materiały Budowlane</h3>
<p className="text-[#6B7280] mb-6 leading-relaxed min-h-[120px]">
                        Styropian własnej produkcji (granulat i płyty), blacha, marmur. Sprzedajemy bezpośrednio – cena bez pośrednika tam gdzie to możliwe. Dowozimy na budowę na czas.
                    </p>
<ul className="space-y-2 text-sm text-[#1A2332] font-medium border-t border-gray-100 pt-4">
<li className="flex items-center"><iconify-icon className="text-[#E8A020] mr-2 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon> Styropian z własnej fabryki</li>
<li className="flex items-center"><iconify-icon className="text-[#E8A020] mr-2 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon> Styropian granulowany</li>
<li className="flex items-center"><iconify-icon className="text-[#E8A020] mr-2 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon> Blacha dachowa i techniczna</li>
<li className="flex items-center"><iconify-icon className="text-[#E8A020] mr-2 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon> Marmur i kamień</li>
</ul>
</div>

<div className="bg-white rounded-md p-8 relative overflow-hidden group pillar-card reveal reveal-delay-2">
<div className="w-14 h-14 bg-[#1A2332] rounded flex items-center justify-center mb-6 group-hover:bg-[#E8A020] transition-colors duration-300">
<iconify-icon className="text-3xl text-white group-hover:text-[#1A2332] transition-colors" icon="solar:wheel-outline" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-3xl text-[#1A2332] tracking-tight mb-4 group-hover:text-[#C8880A] transition-colors" id="maszyny">Wynajem Maszyn</h3>
<p className="text-[#6B7280] mb-6 leading-relaxed min-h-[120px]">
                        Pełna wypożyczalnia sprzętu budowlanego – od małego narzędzia po ciężki sprzęt. Koparki, zagęszczarki, niwelatory, rusztowania. Szybka dostępność, Tarczyn i okolice.
                    </p>
<ul className="space-y-2 text-sm text-[#1A2332] font-medium border-t border-gray-100 pt-4">
<li className="flex items-center"><iconify-icon className="text-[#E8A020] mr-2 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon> Koparki i roboty ziemne</li>
<li className="flex items-center"><iconify-icon className="text-[#E8A020] mr-2 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon> Zagęszczarki i wibratory</li>
<li className="flex items-center"><iconify-icon className="text-[#E8A020] mr-2 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon> Kompletne rusztowania</li>
<li className="flex items-center"><iconify-icon className="text-[#E8A020] mr-2 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon> Młoty udarowe i wiertarki</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="font-heading font-bold text-4xl md:text-5xl text-[#1A2332] tracking-tight mb-4">JAK WYGLĄDA WSPÓŁPRACA?</h2>
<div className="w-16 h-1 bg-[#E8A020] mx-auto"></div>
</div>
<div className="relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gray-200 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">

<div className="relative pl-10 md:pl-0 reveal">
<div className="absolute left-0 md:left-1/2 top-0 md:-top-6 md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#1A2332] text-[#E8A020] border-4 border-white flex items-center justify-center font-heading font-bold text-xl">1</div>
<div className="md:text-center md:pt-10">
<h4 className="font-heading font-semibold text-2xl text-[#1A2332] mb-2 tracking-tight">Kontakt i wycena</h4>
<p className="text-[#6B7280] text-sm">Zadzwoń lub napisz. Omawiamy zakres – czy to budowa, materiały, wynajem czy kompleks. Wycena jest darmowa.</p>
</div>
</div>

<div className="relative pl-10 md:pl-0 reveal reveal-delay-1">
<div className="absolute left-0 md:left-1/2 top-0 md:-top-6 md:-translate-x-1/2 w-12 h-12 rounded-full bg-white text-[#1A2332] border-4 border-[#1A2332] flex items-center justify-center font-heading font-bold text-xl shadow-sm">2</div>
<div className="md:text-center md:pt-10">
<h4 className="font-heading font-semibold text-2xl text-[#1A2332] mb-2 tracking-tight">Ustalamy szczegóły</h4>
<p className="text-[#6B7280] text-sm">Harmonogram, zakres, materiały. Jeden koordynator z naszej strony dla Ciebie przez cały czas trwania zlecenia.</p>
</div>
</div>

<div className="relative pl-10 md:pl-0 reveal reveal-delay-2">
<div className="absolute left-0 md:left-1/2 top-0 md:-top-6 md:-translate-x-1/2 w-12 h-12 rounded-full bg-white text-[#1A2332] border-4 border-[#1A2332] flex items-center justify-center font-heading font-bold text-xl shadow-sm">3</div>
<div className="md:text-center md:pt-10">
<h4 className="font-heading font-semibold text-2xl text-[#1A2332] mb-2 tracking-tight">Realizacja</h4>
<p className="text-[#6B7280] text-sm">Ekipa własna + podwykonawcy. Maszyny na miejscu jeśli potrzebne. Materiały dostarczamy bezpośrednio.</p>
</div>
</div>

<div className="relative pl-10 md:pl-0 reveal reveal-delay-3">
<div className="absolute left-0 md:left-1/2 top-0 md:-top-6 md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#E8A020] text-[#1A2332] border-4 border-white flex items-center justify-center font-heading font-bold text-xl">4</div>
<div className="md:text-center md:pt-10">
<h4 className="font-heading font-semibold text-2xl text-[#1A2332] mb-2 tracking-tight">Odbiór</h4>
<p className="text-[#6B7280] text-sm">Praca odebrana, rozliczenie w 100% transparentne. Zostajemy w kontakcie na kolejne etapy Twojej inwestycji.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#111B27]" id="realizacje">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
<div>
<h2 className="font-heading font-bold text-4xl md:text-5xl text-white tracking-tight mb-2">NASZE REALIZACJE</h2>
<p className="text-gray-400 text-lg">Cała Polska – stany surowe, dachy, przyłącza, sprzęt w pracy</p>
</div>
<a className="hidden md:flex text-[#E8A020] hover:text-white transition-colors items-center text-sm font-medium uppercase tracking-wider mt-4 md:mt-0" href="#kontakt">
                    Rozpocznij projekt <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="gallery-item relative h-64 md:h-80 reveal bg-gray-800">
<img alt="Stan surowy" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&amp;w=2067&amp;auto=format&amp;fit=crop"/>
<div className="gallery-overlay absolute inset-0 flex items-end p-6">
<div>
<span className="text-[#E8A020] text-xs font-bold uppercase tracking-wider mb-1 block">Budownictwo</span>
<h4 className="text-white font-heading font-semibold text-2xl">Stan surowy – Warszawa</h4>
</div>
</div>
</div>

<div className="gallery-item relative h-64 md:h-80 reveal reveal-delay-1 bg-gray-800">
<img alt="Koparka" className="w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="gallery-overlay absolute inset-0 flex items-end p-6">
<div>
<span className="text-[#E8A020] text-xs font-bold uppercase tracking-wider mb-1 block">Wynajem Maszyn</span>
<h4 className="text-white font-heading font-semibold text-2xl">Roboty ziemne – Tarczyn</h4>
</div>
</div>
</div>

<div className="gallery-item relative h-64 md:h-80 reveal reveal-delay-2 bg-gray-800">
<img alt="Materiały" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1518557984649-7b161c230cfa?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="gallery-overlay absolute inset-0 flex items-end p-6">
<div>
<span className="text-[#E8A020] text-xs font-bold uppercase tracking-wider mb-1 block">Materiały</span>
<h4 className="text-white font-heading font-semibold text-2xl">Dostawa styropianu – Krosno</h4>
</div>
</div>
</div>

<div className="gallery-item relative h-64 md:h-80 md:col-span-2 reveal bg-gray-800">
<img alt="Dach budowa" className="w-full h-full object-cover object-top" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="gallery-overlay absolute inset-0 flex items-end p-6">
<div>
<span className="text-[#E8A020] text-xs font-bold uppercase tracking-wider mb-1 block">Budownictwo</span>
<h4 className="text-white font-heading font-semibold text-2xl">Konstrukcja dachu – Mazowsze</h4>
</div>
</div>
</div>

<div className="gallery-item relative h-64 md:h-80 reveal reveal-delay-1 bg-gray-800">
<img alt="Rusztowania" className="w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="gallery-overlay absolute inset-0 flex items-end p-6">
<div>
<span className="text-[#E8A020] text-xs font-bold uppercase tracking-wider mb-1 block">Wynajem</span>
<h4 className="text-white font-heading font-semibold text-2xl">Rusztowania elewacyjne</h4>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#1A2332]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-heading font-bold text-4xl md:text-5xl text-white tracking-tight mb-16 text-center reveal">
                DLACZEGO INWESTORZY WYBIERAJĄ ROMBUD POLSKA?
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
<div className="flex items-start space-x-6 reveal">
<div className="shrink-0">
<iconify-icon className="text-5xl text-[#E8A020]" icon="solar:shield-check-outline" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="font-heading font-semibold text-2xl text-white mb-2 tracking-tight">Jeden partner – wszystko</h4>
<p className="text-gray-400 leading-relaxed text-sm">Nie tracisz czasu na koordynowanie trzech firm. My robimy robotę, dostarczamy własne materiały i wynajmujemy sprzęt pod konkretny etap budowy.</p>
</div>
</div>
<div className="flex items-start space-x-6 reveal reveal-delay-1">
<div className="shrink-0">
<iconify-icon className="text-5xl text-[#E8A020]" icon="solar:map-point-outline" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="font-heading font-semibold text-2xl text-white mb-2 tracking-tight">Cała Polska</h4>
<p className="text-gray-400 leading-relaxed text-sm">Trzy oddziały – Warszawa, Tarczyn, Krosno. Dojeżdżamy tam, gdzie inni mówią "za daleko". Zasięg ogólnokrajowy przy większych projektach.</p>
</div>
</div>
<div className="flex items-start space-x-6 reveal">
<div className="shrink-0">
<iconify-icon className="text-5xl text-[#E8A020]" icon="solar:factory-outline" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="font-heading font-semibold text-2xl text-white mb-2 tracking-tight">Własna produkcja</h4>
<p className="text-gray-400 leading-relaxed text-sm">Styropian produkujemy sami – masz pewność stałej, kontrolowanej jakości oraz cenę bez marży zbędnych pośredników hurtowych.</p>
</div>
</div>
<div className="flex items-start space-x-6 reveal reveal-delay-1">
<div className="shrink-0">
<iconify-icon className="text-5xl text-[#E8A020]" icon="solar:users-group-two-rounded-outline" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="font-heading font-semibold text-2xl text-white mb-2 tracking-tight">Silny zespół</h4>
<p className="text-gray-400 leading-relaxed text-sm">16 własnych, doświadczonych pracowników + gęsta sieć sprawdzonych podwykonawców. Duże zlecenia czy napięte terminy nie są dla nas problemem.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#F4F4F2]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="font-heading font-bold text-4xl md:text-5xl text-[#1A2332] tracking-tight mb-4">CO MÓWIĄ KLIENCI ROMBUD?</h2>
<p className="text-[#6B7280] text-lg">Budujemy na rekomendacjach – to nasza najlepsza wizytówka.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 relative reveal">
<iconify-icon className="absolute top-6 right-6 text-4xl text-gray-100" icon="solar:quote-right-bold"></iconify-icon>
<div className="flex text-[#E8A020] mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="italic text-[#1A2332] mb-6 text-sm leading-relaxed">
                        "Stan surowy domu jednorodzinnego pod Warszawą – terminowo, sprawnie, bez niespodzianek. Ekipa Romana poradziła sobie ze wszystkim sama, nie musiałem pilnować ani jednego dnia."
                    </p>
<div>
<div className="font-heading font-semibold text-lg tracking-tight text-[#1A2332]">Marcin K.</div>
<div className="text-xs text-[#6B7280] uppercase tracking-wide">Warszawa | Stan surowy</div>
</div>
</div>

<div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 relative reveal reveal-delay-1">
<iconify-icon className="absolute top-6 right-6 text-4xl text-gray-100" icon="solar:quote-right-bold"></iconify-icon>
<div className="flex text-[#E8A020] mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="italic text-[#1A2332] mb-6 text-sm leading-relaxed">
                        "Wynajmowałem koparkę i zagęszczarkę – sprzęt przyjechał na czas, w dobrym stanie, bez przepłacania. Następnym razem od razu dzwonię do Rombud. Zero problemów."
                    </p>
<div>
<div className="font-heading font-semibold text-lg tracking-tight text-[#1A2332]">Piotr W.</div>
<div className="text-xs text-[#6B7280] uppercase tracking-wide">Tarczyn | Wynajem maszyn</div>
</div>
</div>

<div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 relative reveal reveal-delay-2">
<iconify-icon className="absolute top-6 right-6 text-4xl text-gray-100" icon="solar:quote-right-bold"></iconify-icon>
<div className="flex text-[#E8A020] mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="italic text-[#1A2332] mb-6 text-sm leading-relaxed">
                        "Zamówiliśmy styropian i blachę – ceny konkurencyjne, dostawa na budowę w terminie. Szybki kontakt z właścicielem, konkretne odpowiedzi na pytania. Zdecydowanie polecam."
                    </p>
<div>
<div className="font-heading font-semibold text-lg tracking-tight text-[#1A2332]">Krzysztof M.</div>
<div className="text-xs text-[#6B7280] uppercase tracking-wide">Krosno | Materiały budowlane</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#111B27]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
<div className="lg:col-span-2 reveal">
<h2 className="font-heading font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">DZIAŁAMY W CAŁEJ POLSCE</h2>
<p className="text-gray-400 text-lg mb-8">Trzy oddziały fizyczne – jeden główny numer telefonu.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 bg-[#1A2332] text-[#E8A020] text-xs font-semibold uppercase tracking-wider rounded border border-[#E8A020]/20">Warszawa (Centrala)</span>
<span className="px-3 py-1 bg-[#1A2332] text-[#E8A020] text-xs font-semibold uppercase tracking-wider rounded border border-[#E8A020]/20">Tarczyn (Wypożyczalnia)</span>
<span className="px-3 py-1 bg-[#1A2332] text-[#E8A020] text-xs font-semibold uppercase tracking-wider rounded border border-[#E8A020]/20">Krosno (Oddział)</span>
<span className="px-3 py-1 bg-[#1A2332]/50 text-white text-xs font-medium uppercase tracking-wider rounded">Mazowsze</span>
<span className="px-3 py-1 bg-[#1A2332]/50 text-white text-xs font-medium uppercase tracking-wider rounded">Podkarpacie</span>
<span className="px-3 py-1 bg-[#1A2332]/50 text-white text-xs font-medium uppercase tracking-wider rounded">Cała Polska</span>
</div>
<a className="inline-flex items-center text-white border-b-2 border-[#E8A020] pb-1 hover:text-[#E8A020] transition-colors font-medium" href="#kontakt">
                    Skontaktuj się z wybranym oddziałem <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="lg:col-span-3 h-[400px] w-full rounded-md overflow-hidden border border-gray-800 reveal reveal-delay-1 filter grayscale contrast-125">

<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4924843.080537877!2d15.529323719119747!3d51.98634812328562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47009964a4640db7%3A0x4bf869b244d5a1b3!2sPolska!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 reveal">
<h2 className="font-heading font-bold text-4xl md:text-5xl text-[#1A2332] tracking-tight mb-4">MASZ PYTANIA? ODPOWIADAMY WPROST.</h2>
<div className="w-16 h-1 bg-[#E8A020] mx-auto"></div>
</div>
<div className="space-y-4 reveal reveal-delay-1">

<details className="group bg-[#F4F4F2] rounded-md overflow-hidden">
<summary className="flex justify-between items-center font-heading font-semibold text-xl text-[#1A2332] p-6 cursor-pointer select-none">
                        Czy robicie pojedyncze usługi, czy tylko kompleksowo?
                        <iconify-icon className="faq-icon text-2xl text-[#6B7280] group-hover:text-[#E8A020]" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-[#6B7280] text-sm leading-relaxed border-t border-gray-200 pt-4 mt-2">
                        Robimy obie opcje. Możesz zamówić tylko wynajem koparki, tylko dostawę styropianu albo cały stan surowy z materiałami. Dopasowujemy się do zakresu Twoich potrzeb.
                    </div>
</details>

<details className="group bg-[#F4F4F2] rounded-md overflow-hidden">
<summary className="flex justify-between items-center font-heading font-semibold text-xl text-[#1A2332] p-6 cursor-pointer select-none">
                        Jak szybko możecie zacząć?
                        <iconify-icon className="faq-icon text-2xl text-[#6B7280] group-hover:text-[#E8A020]" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-[#6B7280] text-sm leading-relaxed border-t border-gray-200 pt-4 mt-2">
                        Zależy od zakresu i terminarza – skontaktuj się z nami, a podamy konkretny termin. Staramy się być elastyczni, szczególnie przy wynajmie maszyn i mniejszych dostawach.
                    </div>
</details>

<details className="group bg-[#F4F4F2] rounded-md overflow-hidden">
<summary className="flex justify-between items-center font-heading font-semibold text-xl text-[#1A2332] p-6 cursor-pointer select-none">
                        Działacie tylko w okolicach Warszawy?
                        <iconify-icon className="faq-icon text-2xl text-[#6B7280] group-hover:text-[#E8A020]" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-[#6B7280] text-sm leading-relaxed border-t border-gray-200 pt-4 mt-2">
                        Nie – mamy oddziały w Warszawie, Tarczynie i Krośnie, ale realizujemy zlecenia w całej Polsce. Przy większych inwestycjach logistyka nie jest dla nas absolutnie żadną przeszkodą.
                    </div>
</details>

<details className="group bg-[#F4F4F2] rounded-md overflow-hidden">
<summary className="flex justify-between items-center font-heading font-semibold text-xl text-[#1A2332] p-6 cursor-pointer select-none">
                        Czy macie własny sprzęt czy korzystacie z podwykonawców?
                        <iconify-icon className="faq-icon text-2xl text-[#6B7280] group-hover:text-[#E8A020]" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-[#6B7280] text-sm leading-relaxed border-t border-gray-200 pt-4 mt-2">
                        Mamy własną flotę maszyn (koparki, zagęszczarki, niwelatory i więcej) oraz 16 własnych pracowników etatowych. Przy bardzo dużych projektach wspieramy się sprawdzonymi, stałymi podwykonawcami.
                    </div>
</details>

<details className="group bg-[#F4F4F2] rounded-md overflow-hidden">
<summary className="flex justify-between items-center font-heading font-semibold text-xl text-[#1A2332] p-6 cursor-pointer select-none">
                        Skąd mam wiedzieć, że cena nie wzrośnie w trakcie?
                        <iconify-icon className="faq-icon text-2xl text-[#6B7280] group-hover:text-[#E8A020]" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-[#6B7280] text-sm leading-relaxed border-t border-gray-200 pt-4 mt-2">
                        Przed każdym zleceniem rygorystycznie ustalamy zakres i cenę. Jeśli zakres się nie zmienia – cena na fakturze pozostaje bez zmian. Dodatkowe, nieprzewidziane prace wyceniamy osobno i realizujemy zawsze po Twojej akceptacji.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-20 relative parallax-bg bg-[#111B27]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp'}}>
<div className="absolute inset-0 bg-[#1A2332]/80 backdrop-blur-[2px]"></div>
<div className="max-w-4xl mx-auto px-4 relative z-10 text-center reveal">
<h2 className="font-heading font-bold text-5xl md:text-6xl text-white tracking-tight mb-4">
                MASZ BUDOWĘ? <span className="text-[#E8A020]">ZADZWOŃ TERAZ.</span>
</h2>
<p className="text-gray-300 text-lg md:text-xl mb-10">Bezpłatna wycena · Bez zobowiązań · Odpowiemy dziś</p>
<a className="inline-flex items-center justify-center bg-[#E8A020] text-[#1A2332] px-10 py-5 rounded font-bold text-xl btn-hover w-full sm:w-auto shadow-xl" href="tel:+48791793293">
<iconify-icon className="mr-3 text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
                791 793 293
            </a>
<div className="mt-6">
<a className="text-gray-400 hover:text-white transition-colors text-sm font-medium" href="mailto:rombudpolska@onet.pl">
                    lub napisz: rombudpolska@onet.pl
                </a>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#1A2332] border-t border-gray-800" id="kontakt">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="font-heading font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">POROZMAWIAJMY O TWOJEJ INWESTYCJI.</h2>
<p className="text-gray-400 text-lg">Zadzwoń lub napisz – wycena bezpłatna, odpowiedź tego samego dnia.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="bg-[#111B27] p-8 rounded-md border border-gray-800 reveal shadow-2xl">
<form action="mailto:rombudpolska@onet.pl" className="space-y-6" enctype="text/plain" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2" htmlFor="name">Imię i nazwisko</label>
<input className="w-full bg-[#1A2332] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#E8A020] transition-colors" id="name" name="name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2" htmlFor="phone">Numer telefonu</label>
<input className="w-full bg-[#1A2332] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#E8A020] transition-colors" id="phone" name="phone" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2" htmlFor="message">Czego potrzebujesz?</label>
<textarea className="w-full bg-[#1A2332] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#E8A020] transition-colors resize-none" id="message" name="message" placeholder="Opisz zakres, lokalizację i termin..." required="" rows="4"></textarea>
</div>
<button className="w-full bg-[#E8A020] text-[#1A2332] px-6 py-4 rounded font-bold text-lg btn-hover flex justify-center items-center" type="submit">
                            Wyślij zapytanie <iconify-icon className="ml-2 text-xl" icon="solar:plain-2-linear"></iconify-icon>
</button>
<p className="text-center text-xs text-gray-500 mt-4">
                            Odpowiadamy w ciągu 24h · Twoje dane są bezpieczne
                        </p>
</form>
</div>

<div className="flex flex-col justify-center space-y-10 reveal reveal-delay-1">
<div>
<h3 className="font-heading font-semibold text-2xl text-white mb-6 border-b border-gray-800 pb-4">Bezpośredni kontakt</h3>
<a className="flex items-center group mb-4" href="tel:+48791793293">
<div className="w-12 h-12 bg-[#111B27] rounded flex items-center justify-center mr-4 group-hover:bg-[#E8A020] transition-colors">
<iconify-icon className="text-2xl text-[#E8A020] group-hover:text-[#1A2332]" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Zadzwoń, oddzwonimy</div>
<div className="text-2xl font-heading font-bold text-white group-hover:text-[#E8A020] transition-colors">791 793 293</div>
</div>
</a>
<a className="flex items-center group" href="mailto:rombudpolska@onet.pl">
<div className="w-12 h-12 bg-[#111B27] rounded flex items-center justify-center mr-4 group-hover:bg-[#E8A020] transition-colors">
<iconify-icon className="text-2xl text-[#E8A020] group-hover:text-[#1A2332]" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Napisz do nas</div>
<div className="text-lg text-white group-hover:text-[#E8A020] transition-colors font-medium">rombudpolska@onet.pl</div>
</div>
</a>
</div>
<div>
<h3 className="font-heading font-semibold text-2xl text-white mb-6 border-b border-gray-800 pb-4">Nasze lokalizacje</h3>
<ul className="space-y-4 text-gray-400 text-sm">
<li className="flex items-start">
<iconify-icon className="text-[#E8A020] mr-3 mt-1 text-lg" icon="solar:buildings-2-linear"></iconify-icon>
<span><strong className="text-white">Biuro główne:</strong> Warszawa, ul. Złota</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-[#E8A020] mr-3 mt-1 text-lg" icon="solar:map-point-linear"></iconify-icon>
<span><strong className="text-white">Oddział Wypożyczalnia:</strong> Tarczyn</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-[#E8A020] mr-3 mt-1 text-lg" icon="solar:map-point-linear"></iconify-icon>
<span><strong className="text-white">Oddział Regionalny:</strong> Krosno</span>
</li>
<li className="flex items-start pt-2">
<iconify-icon className="text-[#E8A020] mr-3 mt-1 text-lg" icon="solar:clock-circle-linear"></iconify-icon>
<span><strong className="text-white">Godziny pracy:</strong> Pon–Sob 7:00–18:00</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0B131F] pt-16 pb-8 border-t border-[#111B27]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

<div>
<a className="font-heading font-bold text-2xl tracking-tight text-white mb-4 block" href="#">ROMBUD POLSKA</a>
<p className="text-gray-500 text-sm leading-relaxed mb-6 pr-4">
                        Kompleksowy partner budowlany. Stany surowe, produkcja i sprzedaż materiałów oraz wypożyczalnia maszyn w jednym miejscu. Jeden kontakt, cała Polska.
                    </p>
<div className="flex space-x-4">

<a className="text-gray-500 hover:text-[#E8A020] transition-colors" href="#"><iconify-icon className="text-2xl" icon="solar:share-circle-linear"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-heading font-semibold text-lg text-white mb-4 uppercase tracking-wider">Na skróty</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-[#E8A020] transition-colors" href="#ofirmie">O firmie</a></li>
<li><a className="hover:text-[#E8A020] transition-colors" href="#filary">Nasze filary</a></li>
<li><a className="hover:text-[#E8A020] transition-colors" href="#realizacje">Galeria realizacji</a></li>
<li><a className="hover:text-[#E8A020] transition-colors" href="#zaufanie">Dlaczego my</a></li>
<li><a className="hover:text-[#E8A020] transition-colors" href="#kontakt">Kontakt i wycena</a></li>
</ul>
</div>

<div>
<h4 className="font-heading font-semibold text-lg text-white mb-4 uppercase tracking-wider">Usługi 3w1</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-[#E8A020] transition-colors" href="#uslugi">Generalne wykonawstwo</a></li>
<li><a className="hover:text-[#E8A020] transition-colors" href="#uslugi">Stany surowe i dachy</a></li>
<li><a className="hover:text-[#E8A020] transition-colors" href="#materialy">Produkcja styropianu</a></li>
<li><a className="hover:text-[#E8A020] transition-colors" href="#materialy">Sprzedaż blachy i marmuru</a></li>
<li><a className="hover:text-[#E8A020] transition-colors" href="#maszyny">Wynajem koparek i rusztowań</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
<p>© 2025 Rombud Polska. Wszelkie prawa zastrzeżone.</p>
<div className="mt-4 md:mt-0 space-x-4">
<span>Wizytówka Google: Budерка wypożyczalnia</span>
</div>
</div>
</div>
</footer>

<a aria-label="Zadzwoń do Rombud" className="fixed bottom-6 right-6 z-50 bg-[#E8A020] text-[#1A2332] rounded-full p-4 shadow-2xl flex items-center justify-center pulse-btn hover:scale-110 transition-transform group" href="tel:+48791793293">
<iconify-icon className="text-3xl" icon="solar:phone-calling-bold"></iconify-icon>

<span className="absolute right-full mr-4 bg-[#1A2332] text-white text-xs font-semibold px-3 py-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Zadzwoń - Wycena gratis
        </span>
</a>



    </>
  );
}
