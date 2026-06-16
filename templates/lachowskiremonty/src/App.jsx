import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Firma Remontowo-Budowlana Arkadiusz Lachowski",
"image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop",
"telephone": "+48502768536",
"email": "lacha196@wp.pl",
"url": "https://twojadomena.pl",
"address": {
"@type": "PostalAddress",
"addressRegion": "Śląsk",
"addressCountry": "PL"
},
"areaServed": [
"Łaziska Górne", "Mikołów", "Tychy", "Katowice", "Orzesze"
],
"priceRange": "$$",
"description": "Kompleksowe wykończenia wnętrz pod klucz na terenie Śląska. Ponad 20 lat doświadczenia."
}



tailwind.config = {
theme: {
extend: {
colors: {
dark: '#1C1C1E',
accent: '#C8933A',
light: '#F8F9FA'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Montserrat', 'sans-serif'],
},
fontSize: {
'xs': '0.75rem',
'sm': '0.875rem',
'base': '1rem',
'lg': '1.125rem',
'xl': '1.25rem',
'2xl': '1.5rem',
'3xl': '1.875rem',
'4xl': '2.25rem',
'5xl': '3rem',
'6xl': '3.75rem',
'7xl': '4.5rem',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Smooth scroll adjustment for fixed header
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if(target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                    // Close mobile menu if open
                    document.getElementById('mobile-menu').classList.add('hidden');
                }
            });
        });

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Sticky Header effect (blur on scroll)
        window.addEventListener('scroll', () => {
            const header = document.getElementById('navbar');
            if (window.scrollY > 50) {
                header.classList.add('shadow-sm');
            } else {
                header.classList.remove('shadow-sm');
            }
        });

        // Reveal Animations on Scroll
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 100;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        reveal(); // Trigger on load

        // Animated Counters
        const counters = document.querySelectorAll('.counter');
        const speed = 200; // Lower is slower

        const animateCounters = () => {
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
        };

        // Trigger counters when scrolled into view
        let counterTriggered = false;
        window.addEventListener('scroll', () => {
            if(counterTriggered) return;
            const counterElement = document.querySelector('.counter');
            if(!counterElement) return;
            
            const position = counterElement.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if(position < screenPosition) {
                animateCounters();
                counterTriggered = true;
            }
        });
        
        // Check if initially in view
        setTimeout(() => {
            if(!counterTriggered && document.querySelector('.counter').getBoundingClientRect().top < window.innerHeight) {
                 animateCounters();
                 counterTriggered = true;
            }
        }, 500);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-display font-semibold text-xl tracking-tighter uppercase text-dark" href="#">
                LACHOWSKI<span className="text-accent">.</span>
</a>
<nav className="hidden md:flex gap-8 items-center font-light text-sm text-gray-600">
<a className="hover:text-dark transition-colors" href="#o-firmie">O firmie</a>
<a className="hover:text-dark transition-colors" href="#uslugi">Usługi</a>
<a className="hover:text-dark transition-colors" href="#realizacje">Realizacje</a>
<a className="hover:text-dark transition-colors" href="#kontakt">Kontakt</a>
</nav>
<div className="hidden md:flex items-center gap-6">
<a className="font-medium text-sm flex items-center gap-2 text-dark hover:text-accent transition-colors" href="tel:502768536">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                    502 768 536
                </a>
<a className="bg-dark text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-dark/90 transition-all shadow-sm hover:shadow-md" href="#kontakt">
                    Bezpłatna wycena
                </a>
</div>
<button className="md:hidden text-2xl text-dark p-2" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-6 shadow-xl" id="mobile-menu">
<a className="mobile-link text-lg font-medium tracking-tight" href="#o-firmie">O firmie</a>
<a className="mobile-link text-lg font-medium tracking-tight" href="#uslugi">Usługi</a>
<a className="mobile-link text-lg font-medium tracking-tight" href="#realizacje">Realizacje</a>
<a className="mobile-link text-lg font-medium tracking-tight" href="#kontakt">Kontakt</a>
<div className="h-px bg-gray-100 my-2"></div>
<a className="text-accent text-2xl font-display font-semibold tracking-tighter" href="tel:502768536">502 768 536</a>
<a className="bg-dark text-white text-center py-4 rounded-full text-sm font-medium" href="#kontakt">Bezpłatna wycena</a>
</div>
</header>

<section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0 parallax-bg bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp'}}></div>

<div className="absolute inset-0 z-0 bg-gradient-to-t from-dark/95 via-dark/60 to-dark/30"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center mt-12 pb-32 md:pb-24">
<span className="text-accent font-medium text-sm tracking-widest uppercase mb-6 reveal">Śląsk i okolice</span>
<h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white leading-[1.05] reveal [animation-delay:100ms] max-w-5xl">
                Twoje wnętrze.<br/>Nasza robota.
            </h1>
<p className="mt-8 text-lg md:text-xl text-gray-300 font-light max-w-2xl reveal [animation-delay:200ms] leading-relaxed">
                Kompleksowe wykończenia wnętrz na Śląsku – z rąk doświadczonej ekipy od ponad 20 lat. Projektujesz. My realizujemy do perfekcji.
            </p>
<div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto reveal [animation-delay:300ms]">
<a className="bg-accent text-white px-8 py-4 rounded-full font-medium text-base hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/30 flex items-center justify-center gap-2" href="tel:502768536">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
                    Zadzwoń teraz
                </a>
<a className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-medium text-base hover:bg-white/20 transition-all flex items-center justify-center gap-2" href="#realizacje">
                    Zobacz realizacje
                </a>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 z-20 glass-dark border-b-0 border-t">
<div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap justify-between items-center gap-6 text-white font-light text-sm md:text-base">
<div className="flex items-center gap-3">
<span className="text-accent text-2xl"><iconify-icon icon="solar:calendar-date-linear"></iconify-icon></span>
<div><strong className="font-display font-semibold text-lg counter" data-target="20">0</strong>+ lat doświadczenia</div>
</div>
<div className="hidden md:flex items-center gap-3">
<span className="text-accent text-2xl"><iconify-icon icon="solar:buildings-linear"></iconify-icon></span>
<div><strong className="font-display font-semibold text-lg counter" data-target="500">0</strong>+ projektów</div>
</div>
<div className="flex items-center gap-3">
<span className="text-accent text-2xl"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon></span>
<div><strong className="font-display font-semibold text-lg">4</strong> specjalistów</div>
</div>
<div className="hidden lg:flex items-center gap-3">
<span className="text-accent text-2xl"><iconify-icon icon="solar:map-point-linear"></iconify-icon></span>
<div>Region Śląska</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="o-firmie">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tighter text-dark mb-6">
                    Zaufanie budowane latami, nie reklamami.
                </h2>
<div className="space-y-6 text-gray-600 font-light leading-relaxed">
<p>
                        Firma Arkadiusza Lachowskiego działa na Śląsku od ponad 20 lat. Przez dwie dekady zbudowaliśmy reputację opartą nie na krzykliwym marketingu, lecz na szczerych poleceniach zadowolonych klientów. Aż 99% naszych zleceń to efekt poczty pantoflowej.
                    </p>
<p>
                        Nasza zgrana, 4-osobowa ekipa specjalistów traktuje każde zlecenie jak własny, domowy projekt. Podchodzimy do pracy z pełnym zaangażowaniem, terminowością i pedantyczną dbałością o każdy, najmniejszy detal. Działamy lokalnie, doskonale znamy nasz region i dokładnie wiemy, jakich standardów oczekują mieszkańcy Śląska.
                    </p>
</div>
<div className="mt-10 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-light flex items-center justify-center text-accent text-xl">
<iconify-icon icon="solar:like-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-dark">Gwarancja Satysfakcji</p>
<p className="text-sm text-gray-500 font-light">Jakość, za którą ręczymy nazwiskiem.</p>
</div>
</div>
</div>
<div className="relative reveal [animation-delay:200ms]">
<img alt="Ekipa remontowa Arkadiusz Lachowski Śląsk" className="rounded-2xl shadow-2xl w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-8 -left-8 bg-dark text-white p-8 rounded-2xl shadow-xl hidden md:block">
<p className="font-display font-semibold text-4xl tracking-tighter text-accent counter" data-target="99">0</p>
<p className="text-sm font-light mt-1 text-gray-300">% z poleceń</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-dark text-white relative overflow-hidden" id="uslugi">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-2xl reveal">
<span className="text-accent text-sm font-medium tracking-widest uppercase">Nasza Oferta</span>
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tighter mt-4 mb-16">
                    Kompleksowo.<br/>Od podłogi po sufit.
                </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors reveal">
<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-accent text-2xl mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:home-angle-linear"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl tracking-tight mb-4">Wykończenia pod klucz</h3>
<p className="text-sm font-light text-gray-400 leading-relaxed">
                        Zajmujemy się całością – od stanu deweloperskiego po gotowe gniazdko. Ty odbierasz wymarzone wnętrze, my bierzemy na siebie cały proces budowlany.
                    </p>
</div>

<div className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors reveal [animation-delay:100ms]">
<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-accent text-2xl mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:pallete-2-linear"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl tracking-tight mb-4">Gładzie i tynki</h3>
<p className="text-sm font-light text-gray-400 leading-relaxed">
                        Idealne, lustrzane wręcz ściany to fundament każdego pięknego wnętrza. Wykonujemy gładzie i tynki z zachowaniem najwyższej precyzji, gotowe pod malowanie.
                    </p>
</div>

<div className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors reveal [animation-delay:200ms]">
<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-accent text-2xl mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:layers-linear"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl tracking-tight mb-4">Glazurnictwo</h3>
<p className="text-sm font-light text-gray-400 leading-relaxed">
                        Precyzyjne układanie płytek, terakoty, gresu i spieków – w łazience, kuchni czy na tarasie. Profesjonalne fugowanie i certyfikowana hydroizolacja zawsze w standardzie.
                    </p>
</div>

<div className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors reveal lg:col-start-1 lg:col-end-2">
<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-accent text-2xl mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:slider-minimalistic-horizontal-linear"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl tracking-tight mb-4">Sufity podwieszane</h3>
<p className="text-sm font-light text-gray-400 leading-relaxed">
                        Nowoczesne zabudowy G-K z oświetleniem ukrytym LED lub wnękami. Poprawiają akustykę, subtelnie ukrywają instalacje i nadają wnętrzu niepowtarzalnego charakteru.
                    </p>
</div>

<div className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors reveal [animation-delay:100ms] lg:col-start-2 lg:col-end-3">
<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-accent text-2xl mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:ruler-angular-linear"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl tracking-tight mb-4">Podłogi</h3>
<p className="text-sm font-light text-gray-400 leading-relaxed">
                        Układamy panele, parkiet i posadzki winylowe – idealnie równo, solidnie i z bezwzględną dbałością o przygotowanie podłoża. Efekt, który będzie służył latami.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-gray-100 bg-light">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
<div className="reveal flex flex-col">
<iconify-icon className="text-accent text-4xl mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="font-display font-semibold text-lg tracking-tight text-dark mb-2">20 lat na rynku</h4>
<p className="text-sm text-gray-500 font-light">Doświadczenie z tysięcy metrów kwadratowych. Wiemy, czego oczekują i jak pracują najlepsze materiały.</p>
</div>
<div className="reveal [animation-delay:100ms] flex flex-col">
<iconify-icon className="text-accent text-4xl mb-4" icon="solar:box-linear"></iconify-icon>
<h4 className="font-display font-semibold text-lg tracking-tight text-dark mb-2">Kompleksowość</h4>
<p className="text-sm text-gray-500 font-light">Od konsultacji przed projektem po ostateczny odbiór kluczy. Jeden wykonawca, pełna odpowiedzialność.</p>
</div>
<div className="reveal [animation-delay:200ms] flex flex-col">
<iconify-icon className="text-accent text-4xl mb-4" icon="solar:map-arrow-square-linear"></iconify-icon>
<h4 className="font-display font-semibold text-lg tracking-tight text-dark mb-2">Lokalność</h4>
<p className="text-sm text-gray-500 font-light">Śląsk to nasz dom od dwóch dekad. Znamy tutejsze budownictwo i zawsze jesteśmy blisko na wypadek potrzeby.</p>
</div>
<div className="reveal [animation-delay:300ms] flex flex-col">
<iconify-icon className="text-accent text-4xl mb-4" icon="solar:star-fall-linear"></iconify-icon>
<h4 className="font-display font-semibold text-lg tracking-tight text-dark mb-2">99% z poleceń</h4>
<p className="text-sm text-gray-500 font-light">Naszą najlepszą reklamą są zadowoleni sąsiedzi, rodziny i znajomi naszych klientów. Jakość broni się sama.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tighter text-dark text-center mb-16 reveal">
                Prosty proces.<br/>Świetne efekty.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">

<div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gray-100 -translate-y-1/2 z-0"></div>

<div className="bg-white border border-gray-100 p-8 rounded-2xl relative z-10 shadow-sm reveal">
<span className="absolute -top-6 -left-2 text-[100px] font-display font-semibold text-gray-50 leading-none pointer-events-none">01</span>
<div className="relative z-10">
<h4 className="font-display font-semibold text-xl tracking-tight text-dark mb-3">Kontakt</h4>
<p className="text-sm font-light text-gray-600">Zadzwoń lub napisz do nas. Odpowiadamy sprawnie, zazwyczaj w ciągu 24 godzin ustalając termin spotkania.</p>
</div>
</div>

<div className="bg-white border border-gray-100 p-8 rounded-2xl relative z-10 shadow-sm reveal [animation-delay:100ms] md:translate-y-8">
<span className="absolute -top-6 -left-2 text-[100px] font-display font-semibold text-gray-50 leading-none pointer-events-none">02</span>
<div className="relative z-10">
<h4 className="font-display font-semibold text-xl tracking-tight text-dark mb-3">Bezpłatna wycena</h4>
<p className="text-sm font-light text-gray-600">Przyjeżdżamy, wymiarujemy, doradzamy i wyceniamy – całkowicie bez zobowiązań i ukrytych kosztów.</p>
</div>
</div>

<div className="bg-white border border-gray-100 p-8 rounded-2xl relative z-10 shadow-sm reveal [animation-delay:200ms]">
<span className="absolute -top-6 -left-2 text-[100px] font-display font-semibold text-gray-50 leading-none pointer-events-none">03</span>
<div className="relative z-10">
<h4 className="font-display font-semibold text-xl tracking-tight text-dark mb-3">Realizacja</h4>
<p className="text-sm font-light text-gray-600">Pracujemy zgodnie z harmonogramem. Zabezpieczamy przestrzeń i dbamy o absolutny porządek na budowie.</p>
</div>
</div>

<div className="bg-white border border-gray-100 p-8 rounded-2xl relative z-10 shadow-sm reveal [animation-delay:300ms] md:translate-y-8">
<span className="absolute -top-6 -left-2 text-[100px] font-display font-semibold text-gray-50 leading-none pointer-events-none">04</span>
<div className="relative z-10">
<h4 className="font-display font-semibold text-xl tracking-tight text-dark mb-3">Odbiór</h4>
<p className="text-sm font-light text-gray-600">Przekazujemy lśniące, gotowe wnętrze. Pełna satysfakcja i gwarancja jakości na wykonane prace.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-light" id="realizacje">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
<div>
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tighter text-dark mb-4">
                        Nasze realizacje
                    </h2>
<p className="text-gray-500 font-light max-w-xl">Śląsk i okolice. Zobacz ułamek tego, co potrafimy stworzyć z surowych przestrzeni.</p>
</div>
<a className="text-dark font-medium text-sm flex items-center gap-2 hover:text-accent transition-colors group" href="#kontakt">
                    Twój projekt może być następny
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="masonry-grid reveal">

<div className="masonry-item group cursor-pointer">
<img alt="Luksusowy remont łazienki Śląsk Mikołów" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<span className="text-white font-medium tracking-tight">Łazienka, Mikołów</span>
</div>
</div>

<div className="masonry-item group cursor-pointer">
<img alt="Nowoczesny salon wykończenia wnętrz Katowice" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<span className="text-white font-medium tracking-tight">Salon, Katowice</span>
</div>
</div>

<div className="masonry-item group cursor-pointer">
<img alt="Układanie płytek kuchnia Tychy" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<span className="text-white font-medium tracking-tight">Kuchnia, Tychy</span>
</div>
</div>

<div className="masonry-item group cursor-pointer">
<img alt="Remont łazienki pod klucz Łaziska Górne" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<span className="text-white font-medium tracking-tight">Łazienka, Łaziska Górne</span>
</div>
</div>

<div className="masonry-item group cursor-pointer">
<img alt="Sufity podwieszane i gładzie Orzesze" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<span className="text-white font-medium tracking-tight">Wykończenie pod klucz, Orzesze</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-dark text-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tighter text-center mb-16 reveal">Co mówią o nas na Śląsku</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl reveal">
<div className="flex text-accent mb-6 gap-1 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-light text-gray-300 text-sm leading-relaxed mb-8 italic">
                        "Ekipa pana Arkadiusza wykonała u nas kompleksowy remont łazienki. Terminowo, niesamowicie czysto i dokładnie tak jak się umawialiśmy od początku. Polecam z czystym sumieniem każdemu!"
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-display font-semibold text-sm">M</div>
<div>
<p className="font-medium text-sm">Marek W.</p>
<p className="text-xs text-gray-500">Mikołów</p>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl reveal [animation-delay:100ms]">
<div className="flex text-accent mb-6 gap-1 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-light text-gray-300 text-sm leading-relaxed mb-8 italic">
                        "Gładzie i malowanie w całym mieszkaniu – efekt absolutnie powyżej oczekiwań. Chłopaki wiedzą co robią, nie trzeba ich pilnować ani kontrolować. Na pewno wrócimy przy kolejnym remoncie."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-display font-semibold text-sm">K</div>
<div>
<p className="font-medium text-sm">Katarzyna S.</p>
<p className="text-xs text-gray-500">Tychy</p>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl reveal [animation-delay:200ms]">
<div className="flex text-accent mb-6 gap-1 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-light text-gray-300 text-sm leading-relaxed mb-8 italic">
                        "Polecił mi ich znajomy i ani trochę nie żałuję. Sufit podwieszany z oświetleniem LED wyszedł rewelacyjnie. Cena bardzo uczciwa, a jakość wykonania na najwyższym poziomie."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-display font-semibold text-sm">T</div>
<div>
<p className="font-medium text-sm">Tomasz K.</p>
<p className="text-xs text-gray-500">Łaziska Górne</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tighter text-dark mb-6">
                    Działamy w całym regionie Śląska
                </h2>
<p className="text-gray-600 font-light mb-8 leading-relaxed">
                    Jesteśmy stąd. Obsługujemy kluczowe miasta aglomeracji śląskiej i okoliczne miejscowości. Dojeżdżamy na miejsce, wyceniamy i realizujemy projekty blisko Ciebie.
                </p>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 bg-light border border-gray-100 rounded-full text-sm font-medium text-dark flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:map-point-linear"></iconify-icon> Łaziska Górne</span>
<span className="px-4 py-2 bg-light border border-gray-100 rounded-full text-sm font-medium text-dark flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:map-point-linear"></iconify-icon> Mikołów</span>
<span className="px-4 py-2 bg-light border border-gray-100 rounded-full text-sm font-medium text-dark flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:map-point-linear"></iconify-icon> Tychy</span>
<span className="px-4 py-2 bg-light border border-gray-100 rounded-full text-sm font-medium text-dark flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:map-point-linear"></iconify-icon> Katowice</span>
<span className="px-4 py-2 bg-light border border-gray-100 rounded-full text-sm font-medium text-dark flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:map-point-linear"></iconify-icon> Orzesze</span>
</div>
</div>
<div className="h-[400px] bg-light rounded-2xl overflow-hidden shadow-sm border border-gray-100 reveal [animation-delay:200ms]">

<iframe allowfullscreen="" className="map-filter" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81997.35128362544!2d18.847585108427976!3d50.16568206197285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716c9053229b35b%3A0xe6ab1223bb35ec91!2sMiko%C5%82%C3%B3w!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</section>

<section className="py-24 bg-light">
<div className="max-w-3xl mx-auto px-6 reveal">
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tighter text-dark text-center mb-12">Częste pytania</h2>
<div className="space-y-4">

<details className="group bg-white border border-gray-100 rounded-xl p-6 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between font-medium text-dark cursor-pointer list-none select-none">
<span>Czy wycena prac jest bezpłatna?</span>
<span className="transition group-open:rotate-180 text-accent text-xl">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-gray-500 text-sm font-light mt-4 leading-relaxed">
                        Tak, wycena na miejscu u klienta jest całkowicie bezpłatna i niezobowiązująca. Przyjeżdżamy, dokładnie oglądamy zakres planowanych prac, doradzamy rozwiązania i przedstawiamy konkretną ofertę cenową.
                    </p>
</details>

<details className="group bg-white border border-gray-100 rounded-xl p-6 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between font-medium text-dark cursor-pointer list-none select-none">
<span>Jak długo zazwyczaj trwa remont łazienki?</span>
<span className="transition group-open:rotate-180 text-accent text-xl">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-gray-500 text-sm font-light mt-4 leading-relaxed">
                        Standardowy, kompleksowy remont łazienki trwa zazwyczaj od 2 do 4 tygodni. Czas ten zależy od wielkości pomieszczenia oraz stopnia skomplikowania projektu. Zawsze podajemy z góry realistyczny termin i rygorystycznie się go trzymamy.
                    </p>
</details>

<details className="group bg-white border border-gray-100 rounded-xl p-6 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between font-medium text-dark cursor-pointer list-none select-none">
<span>Czy zapewniacie własne materiały czy tylko robociznę?</span>
<span className="transition group-open:rotate-180 text-accent text-xl">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-gray-500 text-sm font-light mt-4 leading-relaxed">
                        Jesteśmy elastyczni. Możemy działać w obu modelach – wykonujemy samą robociznę przy materiałach dostarczonych przez klienta, jak i działamy w pełni kompleksowo z zakupem, transportem i wniesieniem materiałów budowlanych (tzw. czarna robota).
                    </p>
</details>

<details className="group bg-white border border-gray-100 rounded-xl p-6 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between font-medium text-dark cursor-pointer list-none select-none">
<span>Czy udzielacie gwarancji na wykonane prace?</span>
<span className="transition group-open:rotate-180 text-accent text-xl">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-gray-500 text-sm font-light mt-4 leading-relaxed">
                        Oczywiście. Na wszystkie wykonane przez naszą ekipę prace remontowo-budowlane udzielamy pełnej gwarancji. Jesteśmy pewni naszych umiejętności i bezwzględnie stoimy za jakością naszej roboty.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-dark text-white relative" id="kontakt">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
<div className="reveal">
<h2 className="font-display font-semibold text-4xl md:text-6xl tracking-tighter mb-4">Gotowy na zmianę?</h2>
<p className="text-gray-400 font-light text-lg mb-12">Napisz lub zadzwoń. Wycenimy Twój projekt za darmo, bez ukrytych kosztów.</p>
<form action="mailto:lacha196@wp.pl" className="space-y-8" enctype="text/plain" method="POST">
<div>
<input className="input-line text-lg" name="Imię i nazwisko" placeholder="Twoje imię i nazwisko" required="" type="text"/>
</div>
<div>
<input className="input-line text-lg" name="Telefon" placeholder="Twój numer telefonu" required="" type="tel"/>
</div>
<div>
<input className="input-line text-lg" name="Zakres_prac" placeholder="Krótki opis prac (np. remont łazienki Mikołów)" required="" type="text"/>
</div>
<button className="bg-accent text-white px-8 py-4 rounded-full font-medium text-base hover:bg-accent/90 transition-all w-full sm:w-auto shadow-lg hover:shadow-accent/30 flex items-center justify-center gap-2" type="submit">
                        Wyślij zapytanie
                        <iconify-icon className="text-xl" icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>
<div className="reveal [animation-delay:200ms] lg:pl-16 lg:border-l border-white/10 flex flex-col justify-center space-y-12">
<div>
<span className="text-gray-500 text-sm font-light uppercase tracking-widest mb-2 block">Bezpośredni kontakt</span>
<a className="font-display font-semibold text-5xl md:text-6xl tracking-tighter text-accent hover:text-white transition-colors block" href="tel:502768536">
                        502 768 536
                    </a>
<a className="text-xl font-light text-gray-300 hover:text-white transition-colors mt-4 block" href="mailto:lacha196@wp.pl">
                        lacha196@wp.pl
                    </a>
</div>
<div className="space-y-4">
<div className="flex items-start gap-4">
<iconify-icon className="text-accent text-2xl mt-1" icon="solar:map-point-linear"></iconify-icon>
<div>
<p className="font-medium text-lg">Obszar Śląska</p>
<p className="text-sm font-light text-gray-400 mt-1">Łaziska Górne, Mikołów, Tychy, Katowice, Orzesze i okolice.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-accent text-2xl mt-1" icon="solar:clock-circle-linear"></iconify-icon>
<div>
<p className="font-medium text-lg">Godziny pracy</p>
<p className="text-sm font-light text-gray-400 mt-1">Pon – Pt: 7:00 – 18:00<br/>Sob: 8:00 – 14:00</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#111] text-gray-400 py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<a className="font-display font-semibold text-xl tracking-tighter uppercase text-white mb-2 block" href="#">
                    LACHOWSKI<span className="text-accent">.</span>
</a>
<p className="text-xs font-light">Kompleksowe wykończenia wnętrz z 20-letnim doświadczeniem.</p>
</div>
<nav className="flex gap-6 text-sm font-light">
<a className="hover:text-white transition-colors" href="#o-firmie">O firmie</a>
<a className="hover:text-white transition-colors" href="#uslugi">Usługi</a>
<a className="hover:text-white transition-colors" href="#realizacje">Realizacje</a>
<a className="hover:text-white transition-colors" href="#kontakt">Kontakt</a>
</nav>
<div className="text-xs font-light text-center md:text-right">
<p>© 2025 Arkadiusz Lachowski.</p>
<p>Wszelkie prawa zastrzeżone.</p>
</div>
</div>
</footer>

<a className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(200,147,58,0.4)] hover:scale-105 transition-transform" href="tel:502768536">
<iconify-icon className="text-2xl" icon="solar:phone-linear"></iconify-icon>
</a>



    </>
  );
}
