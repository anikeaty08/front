import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
brand: {
dark: '#0A0F1E',
darker: '#050810',
card: '#0D1B2A',
accent: '#F5C518',
accentHover: '#E5B510'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Montserrat', 'sans-serif'],
}
}
}
}



{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Instalacje Elektryczne Rafał Homa",
"image": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
"@id": "",
"url": "",
"telephone": "+48507383804",
"email": "rafalhoma89@gmail.com",
"address": {
"@type": "PostalAddress",
"addressLocality": "Krynica-Zdrój",
"addressRegion": "Małopolskie",
"addressCountry": "PL"
},
"areaServed": ["Krynica-Zdrój", "Nowy Sącz", "Muszyna", "Piwniczna-Zdrój", "Stary Sącz"],
"priceRange": "$$",
"category": "Electrician"
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        revealElements.forEach(el => {
            revealOnScroll.observe(el);
        });

        // Generate Sparks for Hero
        const sparksContainer = document.getElementById('sparks-container');
        if(sparksContainer) {
            for (let i = 0; i < 30; i++) {
                const spark = document.createElement('div');
                spark.classList.add('spark');
                
                // Randomize properties
                const leftPos = Math.random() * 100;
                const animDuration = Math.random() * 3 + 2; // 2-5s
                const delay = Math.random() * 5;
                const size = Math.random() * 2 + 1; // 1-3px width

                spark.style.left = `${leftPos}%`;
                spark.style.animationDuration = `${animDuration}s`;
                spark.style.animationDelay = `${delay}s`;
                spark.style.width = `${size}px`;
                
                sparksContainer.appendChild(spark);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full top-0 z-50 transition-all duration-300 bg-brand-dark/80 backdrop-blur-lg border-b border-white/5" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-brand-accent text-brand-dark flex items-center justify-center font-display font-bold text-lg leading-none tracking-tighter group-hover:bg-brand-accentHover transition-colors">R</div>
<span className="font-display font-bold tracking-tighter text-xl text-white">Rafał Homa</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#o-nas">O nas</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#uslugi">Usługi</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#realizacje">Realizacje</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#kontakt">Kontakt</a>
</nav>

<div className="hidden md:flex items-center gap-6">
<a className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-brand-accent transition-colors" href="tel:507383804">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        507 383 804
                    </a>
<a className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(245,197,24,0.1)] hover:shadow-[0_0_20px_rgba(245,197,24,0.3)]" href="#kontakt">
                        Bezpłatna wycena
                    </a>
</div>

<button className="md:hidden text-gray-300 hover:text-white p-2" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden bg-brand-dark border-b border-white/5 absolute w-full" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-2">
<a className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md" href="#o-nas">O nas</a>
<a className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md" href="#uslugi">Usługi</a>
<a className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md" href="#realizacje">Realizacje</a>
<a className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md" href="#kontakt">Kontakt</a>
<div className="pt-4 mt-2 border-t border-white/5 flex flex-col gap-3">
<a className="flex items-center justify-center gap-2 text-lg font-medium text-white bg-white/5 py-3 rounded-md" href="tel:507383804">
<iconify-icon className="text-brand-accent" icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
                        507 383 804
                    </a>
<a className="text-center bg-brand-accent text-brand-dark px-5 py-3 rounded-md text-base font-semibold" href="#kontakt">
                        Bezpłatna wycena
                    </a>
</div>
</div>
</div>
</header>

<a className="md:hidden fixed bottom-6 right-6 z-50 bg-brand-accent text-brand-dark w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(245,197,24,0.4)] transition-transform hover:scale-105" href="tel:507383804">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="28"></iconify-icon>
</a>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden clip-bottom bg-brand-darker">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&amp;w=2069&amp;auto=format&amp;fit=crop')] bg-cover bg-center bg-fixed mix-blend-overlay opacity-20"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050810_100%)]"></div>

<div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 via-brand-dark/80 to-brand-dark"></div>
</div>

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-50" id="sparks-container"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm reveal">
<div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></div>
<span className="text-xs font-medium tracking-wide text-gray-300">Instalacje zgodne z normami PN-IEC | Dokumentacja do odbioru</span>
</div>
<h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tighter text-white mb-6 leading-[1.1] reveal" style={{transitionDelay: '100ms'}}>
                    Elektryka <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">bez kompromisów.</span>
</h1>
<p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed reveal" style={{transitionDelay: '200ms'}}>
                    Kompleksowe instalacje elektryczne w domach – Krynica-Zdrój, Nowy Sącz i okolice. Bezpieczeństwo, precyzja i własny sprzęt.
                </p>
<div className="flex flex-col sm:flex-row gap-4 reveal" style={{transitionDelay: '300ms'}}>
<a className="flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-8 py-4 rounded-md text-base font-semibold transition-all duration-300" href="tel:507383804">
                        Zadzwoń teraz
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-md text-base font-medium transition-all duration-300" href="#uslugi">
                        Zobacz usługi
                    </a>
</div>

<div className="mt-16 pt-8 border-t border-white/10 reveal" style={{transitionDelay: '400ms'}}>
<p className="text-xs text-gray-500 font-medium tracking-wide uppercase mb-4">Obsługujemy rejon:</p>
<p className="text-sm text-gray-400">Krynica-Zdrój <span className="mx-2 text-white/20">|</span> Nowy Sącz <span className="mx-2 text-white/20">|</span> Muszyna <span className="mx-2 text-white/20">|</span> Piwniczna <span className="mx-2 text-white/20">|</span> i okolice</p>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-slate-50 text-slate-900 clip-bottom clip-top z-10" id="o-nas">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-6 text-slate-900">Kim jesteśmy?</h2>
<div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed font-light">
<p>
                            Rafał i jego partner to dwóch doświadczonych elektryków, którzy wykonują instalacje elektryczne w domach od podstaw – kompleksowo, solidnie i zgodnie z przepisami. Działamy na terenie Krynicy-Zdroju, Nowego Sącza i okolicznych miejscowości.
                        </p>
<p>
                            Obsługujemy zarówno klientów indywidualnych budujących domy, jak i firmy budowlane szukające rzetelnego podwykonawcy z własnym sprzętem. Większość naszych zleceń pochodzi z poleceń – bo dobra robota mówi sama za siebie.
                        </p>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-slate-200">
<div>
<div className="font-display font-bold text-3xl text-slate-900 tracking-tighter">2</div>
<div className="text-xs text-slate-500 font-medium mt-1">Elektryków</div>
</div>
<div>
<div className="font-display font-bold text-3xl text-slate-900 tracking-tighter"><iconify-icon className="text-brand-accent align-middle" icon="solar:check-circle-linear"></iconify-icon></div>
<div className="text-xs text-slate-500 font-medium mt-1">Własny sprzęt</div>
</div>
<div>
<div className="font-display font-bold text-3xl text-slate-900 tracking-tighter">100%</div>
<div className="text-xs text-slate-500 font-medium mt-1">Z przepisami</div>
</div>
<div>
<div className="font-display font-bold text-3xl text-slate-900 tracking-tighter"><iconify-icon className="text-brand-accent align-middle" icon="solar:map-point-linear"></iconify-icon></div>
<div className="text-xs text-slate-500 font-medium mt-1">Lokalnie</div>
</div>
</div>
</div>
<div className="relative reveal">
<div className="absolute -inset-4 bg-brand-accent/10 rounded-2xl transform rotate-3 z-0"></div>
<img alt="Instalacja elektryczna w nowym domu" className="relative z-10 rounded-xl shadow-2xl object-cover h-[500px] w-full border border-slate-200/50" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl z-20 border border-slate-100 hidden sm:block">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
<iconify-icon className="text-brand-accent" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-bold text-slate-900 tracking-tight text-sm">Gwarancja jakości</div>
<div className="text-xs text-slate-500">Bezpieczne instalacje</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-card relative clip-top z-20" id="uslugi">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white mb-4">Co robimy?</h2>
<p className="text-gray-400 text-base">Oferujemy pełen zakres usług elektrycznych dla domów jednorodzinnych i firm budowlanych.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-brand-dark p-8 rounded-xl border border-white/5 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
<iconify-icon className="text-brand-accent" icon="solar:home-angle-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl tracking-tight text-white mb-3">Kompleksowa instalacja elektryczna</h3>
<p className="text-sm text-gray-400 leading-relaxed">Wykonujemy pełną instalację elektryczną w domu jednorodzinnym od A do Z – od projektu tras po odbiór i podłączenie. Jedno zlecenie, jedna ekipa, zero stresu.</p>
</div>

<div className="group bg-brand-dark p-8 rounded-xl border border-white/5 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
<iconify-icon className="text-brand-accent" icon="solar:server-square-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl tracking-tight text-white mb-3">Rozdzielnice i tablice elektryczne</h3>
<p className="text-sm text-gray-400 leading-relaxed">Montaż i okablowanie rozdzielnic głównych i podlicznikowych. Bezpieczne, estetyczne i zgodne z normami – gotowe do odbioru przez inspektora.</p>
</div>

<div className="group bg-brand-dark p-8 rounded-xl border border-white/5 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
<iconify-icon className="text-brand-accent" icon="solar:routing-2-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl tracking-tight text-white mb-3">Instalacje pod tynk i natynkowe</h3>
<p className="text-sm text-gray-400 leading-relaxed">Prowadzimy trasy kablowe zarówno pod tynkiem jak i natynkowo – solidnie, zgodnie z projektem i bez zbędnego kucia tam gdzie to niepotrzebne.</p>
</div>

<div className="group bg-brand-dark p-8 rounded-xl border border-white/5 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
<iconify-icon className="text-brand-accent" icon="solar:plug-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl tracking-tight text-white mb-3">Gniazdka, włączniki i oświetlenie</h3>
<p className="text-sm text-gray-400 leading-relaxed">Montaż gniazdek, włączników, punktów oświetleniowych i opraw – wszystko dobrane do projektu wnętrza i potrzeb klienta.</p>
</div>

<div className="group bg-brand-dark p-8 rounded-xl border border-white/5 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
<iconify-icon className="text-brand-accent" icon="solar:document-text-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl tracking-tight text-white mb-3">Pomiary i odbiory elektryczne</h3>
<p className="text-sm text-gray-400 leading-relaxed">Wykonujemy wymagane pomiary elektryczne i przygotowujemy dokumentację niezbędną do odbioru instalacji przez uprawnionego inspektora nadzoru.</p>
</div>

<div className="group bg-brand-dark p-8 rounded-xl border border-white/5 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
<iconify-icon className="text-brand-accent" icon="solar:hard-hat-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl tracking-tight text-white mb-3">Podwykonawstwo dla firm</h3>
<p className="text-sm text-gray-400 leading-relaxed">Współpracujemy z firmami budowlanymi jako profesjonalni podwykonawcy. Własny sprzęt, terminowość i pełna dokumentacja – to co liczy się na budowie.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-slate-900 clip-top z-30">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-center mb-16 text-slate-900 reveal">Dlaczego klienci nam ufają?</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center reveal">
<div className="w-16 h-16 mx-auto rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 shadow-sm">
<iconify-icon className="text-brand-accent" icon="solar:bolt-linear" width="32"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-lg tracking-tight mb-2">Instalacja od A do Z</h3>
<p className="text-xs text-slate-500">Jedno zlecenie, jedna sprawdzona ekipa. Pełna odpowiedzialność.</p>
</div>
<div className="text-center reveal" style={{transitionDelay: '100ms'}}>
<div className="w-16 h-16 mx-auto rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 shadow-sm">
<iconify-icon className="text-brand-accent" icon="solar:settings-linear" width="32"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-lg tracking-tight mb-2">Własny sprzęt</h3>
<p className="text-xs text-slate-500">Nie czekamy na nikogo, działamy od razu z profesjonalnym zapleczem.</p>
</div>
<div className="text-center reveal" style={{transitionDelay: '200ms'}}>
<div className="w-16 h-16 mx-auto rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 shadow-sm">
<iconify-icon className="text-brand-accent" icon="solar:map-point-linear" width="32"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-lg tracking-tight mb-2">Lokalni fachowcy</h3>
<p className="text-xs text-slate-500">Znamy specyfikę budownictwa w regionie Krynicy i Nowego Sącza.</p>
</div>
<div className="text-center reveal" style={{transitionDelay: '300ms'}}>
<div className="w-16 h-16 mx-auto rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 shadow-sm">
<iconify-icon className="text-brand-accent" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-lg tracking-tight mb-2">Zlecenia z poleceń</h3>
<p className="text-xs text-slate-500">Zadowoleni klienci wracają i polecają nas dalej. To nasz największy atut.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark relative z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white mb-16 text-center reveal">Jak przebiega współpraca?</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0"></div>
<div className="relative z-10 bg-brand-card p-6 rounded-xl border border-white/5 reveal">
<div className="text-brand-accent font-display font-bold text-4xl tracking-tighter mb-4">1</div>
<h3 className="font-display font-semibold text-lg text-white mb-2">Kontakt</h3>
<p className="text-sm text-gray-400">Zadzwoń lub napisz – odpowiadamy szybko i umawiamy wizytę na miejscu.</p>
</div>
<div className="relative z-10 bg-brand-card p-6 rounded-xl border border-white/5 reveal" style={{transitionDelay: '100ms'}}>
<div className="text-brand-accent font-display font-bold text-4xl tracking-tighter mb-4">2</div>
<h3 className="font-display font-semibold text-lg text-white mb-2">Wycena</h3>
<p className="text-sm text-gray-400">Przyjeżdżamy, oceniamy zakres prac i podajemy konkretną cenę – bez ukrytych kosztów.</p>
</div>
<div className="relative z-10 bg-brand-card p-6 rounded-xl border border-white/5 reveal" style={{transitionDelay: '200ms'}}>
<div className="text-brand-accent font-display font-bold text-4xl tracking-tighter mb-4">3</div>
<h3 className="font-display font-semibold text-lg text-white mb-2">Realizacja</h3>
<p className="text-sm text-gray-400">Wykonujemy instalację terminowo i zgodnie z ustaleniami – z własnym sprzętem i materiałami.</p>
</div>
<div className="relative z-10 bg-brand-card p-6 rounded-xl border border-white/5 reveal" style={{transitionDelay: '300ms'}}>
<div className="text-brand-accent font-display font-bold text-4xl tracking-tighter mb-4">4</div>
<h3 className="font-display font-semibold text-lg text-white mb-2">Odbiór</h3>
<p className="text-sm text-gray-400">Przygotowujemy dokumentację i pomagamy przejść przez odbiór – do samego końca jesteśmy z Tobą.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 text-slate-900 clip-top z-50" id="realizacje">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-center mb-16 text-slate-900 reveal">Nasze realizacje</h2>
<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="relative group overflow-hidden rounded-xl break-inside-avoid reveal">
<img alt="Nowoczesna rozdzielnica elektryczna Nowy Sącz" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white text-sm font-medium">Nowoczesna rozdzielnica elektryczna – dom jednorodzinny</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl break-inside-avoid reveal">
<img alt="Instalacja w nowym domu Krynica-Zdrój" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white text-sm font-medium">Prowadzenie tras kablowych – stan surowy</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl break-inside-avoid reveal">
<img alt="Montaż osprzętu elektrycznego Muszyna" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1558442074-3c19857bc1dc?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white text-sm font-medium">Biały montaż w nowoczesnym wnętrzu</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl break-inside-avoid reveal">
<img alt="Pomiary elektryczne Nowy Sącz" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white text-sm font-medium">Pomiary końcowe i dokumentacja</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl break-inside-avoid reveal">
<img alt="Oświetlenie LED dom jednorodzinny" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white text-sm font-medium">Oświetlenie architektoniczne i LED</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-card relative z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-center text-white mb-16 reveal">Co mówią nasi klienci?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-brand-dark p-8 rounded-xl border border-white/5 reveal">
<div className="flex gap-1 mb-4 text-brand-accent">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-gray-300 text-sm italic mb-6 leading-relaxed">"Rafał wykonał u nas kompleksową instalację elektryczną w nowym domu. Terminowo, fachowo i bez niespodzianek w cenie. Zdecydowanie polecam – świetna robota!"</p>
<div className="font-display font-semibold text-white text-sm">– Piotr M., Krynica-Zdrój</div>
</div>

<div className="bg-brand-dark p-8 rounded-xl border border-white/5 reveal" style={{transitionDelay: '100ms'}}>
<div className="flex gap-1 mb-4 text-brand-accent">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-gray-300 text-sm italic mb-6 leading-relaxed">"Szukałem elektryka do rozdzielnicy i instalacji w domu jednorodzinnym. Rafał przyjechał szybko, wycenił uczciwie i zrobił wszystko zgodnie z projektem. Inspektor odebrał bez uwag."</p>
<div className="font-display font-semibold text-white text-sm">– Tomasz W., Nowy Sącz</div>
</div>

<div className="bg-brand-dark p-8 rounded-xl border border-white/5 reveal" style={{transitionDelay: '200ms'}}>
<div className="flex gap-1 mb-4 text-brand-accent">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-gray-300 text-sm italic mb-6 leading-relaxed">"Współpracujemy z Rafałem jako podwykonawcą na kilku budowach. Zawsze punktualnie, zawsze z dokumentacją, zawsze jak się umawiamy. Polecam każdej firmie budowlanej."</p>
<div className="font-display font-semibold text-white text-sm">– Krzysztof B., kierownik budowy</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-slate-900 clip-top z-30 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-8 text-slate-900 reveal">Działamy w Twoim rejonie</h2>
<div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
<span className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full border border-slate-200">Krynica-Zdrój</span>
<span className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full border border-slate-200">Nowy Sącz</span>
<span className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full border border-slate-200">Muszyna</span>
<span className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full border border-slate-200">Piwniczna-Zdrój</span>
<span className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full border border-slate-200">Stary Sącz</span>
<span className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full border border-slate-200">i okoliczne miejscowości</span>
</div>
<p className="text-sm text-slate-500 mb-10 reveal">Nie widzisz swojej miejscowości? <a className="text-brand-accent font-semibold hover:underline" href="tel:507383804">Zadzwoń</a> – na pewno coś ustalimy.</p>
<div className="w-full h-80 bg-slate-200 rounded-xl overflow-hidden reveal border border-slate-200 shadow-sm">

<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83096.06208544975!2d20.87186851610537!3d49.4216823908865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e047f3b89cb25%3A0xcb13e1bbbd0cf777!2sKrynica-Zdr%C3%B3j!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark relative z-40 clip-top">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white mb-12 text-center reveal">Masz pytania? Mamy odpowiedzi.</h2>
<div className="space-y-4 reveal">

<details className="group border border-white/10 bg-brand-card rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-display font-medium text-white text-base">
                        Czy wykonujecie całą instalację czy tylko część prac?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-brand-accent" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        Wykonujemy kompletną instalację elektryczną od A do Z – od prowadzenia tras kablowych, przez montaż rozdzielnicy, po gniazdka, oświetlenie i pomiary końcowe.
                    </div>
</details>

<details className="group border border-white/10 bg-brand-card rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-display font-medium text-white text-base">
                        Czy pomagacie z odbiorem instalacji?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-brand-accent" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        Tak, przygotowujemy pełną dokumentację pomiarową wymaganą do odbioru przez inspektora nadzoru budowlanego.
                    </div>
</details>

<details className="group border border-white/10 bg-brand-card rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-display font-medium text-white text-base">
                        Czy współpracujecie z firmami budowlanymi?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-brand-accent" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        Tak, chętnie podejmujemy współpracę jako podwykonawcy elektryczni. Mamy własny sprzęt i jesteśmy przyzwyczajeni do pracy na aktywnych budowach.
                    </div>
</details>

<details className="group border border-white/10 bg-brand-card rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-display font-medium text-white text-base">
                        Na jakim obszarze działacie?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-brand-accent" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        Głównie Krynica-Zdrój, Nowy Sącz i okoliczne miejscowości w regionie. Zadzwoń – ustalimy czy dojazd jest możliwy.
                    </div>
</details>

<details className="group border border-white/10 bg-brand-card rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-display font-medium text-white text-base">
                        Jak szybko możecie rozpocząć pracę?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-brand-accent" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        Zależy od aktualnego obłożenia – zazwyczaj w ciągu 1-2 tygodni. Zadzwoń, żebyśmy mogli ocenić termin dla Twojego projektu.
                    </div>
</details>

<details className="group border border-white/10 bg-brand-card rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-display font-medium text-white text-base">
                        Czy wycena jest bezpłatna?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-brand-accent" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        Tak, wyjeżdżamy bezpłatnie, oceniamy zakres prac na miejscu i podajemy konkretną cenę bez żadnych zobowiązań.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-brand-darker border-t border-white/5 relative z-40" id="kontakt">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div className="reveal">
<h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white mb-4">Budujesz dom? Potrzebujesz elektryka?</h2>
<p className="text-gray-400 text-base mb-10">Zadzwoń lub napisz – bezpłatna wycena, zero zobowiązań.</p>
<form action="mailto:rafalhoma89@gmail.com" className="space-y-6" enctype="text/plain" method="post">
<div>
<label className="block text-xs font-medium text-gray-400 mb-2" htmlFor="name">Imię i nazwisko</label>
<input className="w-full bg-brand-dark border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors text-sm" id="name" name="Imię" placeholder="Jan Kowalski" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-400 mb-2" htmlFor="phone">Numer telefonu</label>
<input className="w-full bg-brand-dark border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors text-sm" id="phone" name="Telefon" placeholder="500 000 000" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-400 mb-2" htmlFor="message">Wiadomość / zakres prac</label>
<textarea className="w-full bg-brand-dark border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors text-sm resize-none" id="message" name="Wiadomosc" placeholder="Opisz krótko czego potrzebujesz..." rows="4"></textarea>
</div>
<button className="w-full bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-semibold py-4 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(245,197,24,0.1)] hover:shadow-[0_0_20px_rgba(245,197,24,0.3)]" type="submit">
                            Wyślij zapytanie
                        </button>
</form>
</div>

<div className="bg-brand-card p-8 sm:p-12 rounded-2xl border border-white/5 reveal lg:mt-0 mt-8">
<h3 className="font-display font-semibold text-xl text-white mb-8">Dane kontaktowe</h3>
<div className="space-y-8">
<a className="flex items-start gap-4 group" href="tel:507383804">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-accent/10 transition-colors shrink-0">
<iconify-icon className="text-brand-accent" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Zadzwoń do nas</div>
<div className="font-display font-bold text-2xl tracking-tighter text-white group-hover:text-brand-accent transition-colors">507 383 804</div>
</div>
</a>
<a className="flex items-start gap-4 group" href="mailto:rafalhoma89@gmail.com">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-accent/10 transition-colors shrink-0">
<iconify-icon className="text-brand-accent" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Napisz e-mail</div>
<div className="font-medium text-base text-white group-hover:text-brand-accent transition-colors break-all">rafalhoma89@gmail.com</div>
</div>
</a>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-brand-accent" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Obszar działania</div>
<div className="font-medium text-base text-white">Krynica-Zdrój, Nowy Sącz i okolice</div>
</div>
</div>
<div className="flex items-start gap-4 border-t border-white/10 pt-8 mt-8">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-brand-accent" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Godziny dostępności</div>
<div className="font-medium text-sm text-white">Pon – Pt: 7:00 – 18:00</div>
<div className="font-medium text-sm text-white">Sobota: 8:00 – 14:00</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-brand-darker py-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-center md:text-left">
<div className="font-display font-bold text-white tracking-tight text-sm mb-1">Rafał – Instalacje Elektryczne | Krynica-Zdrój, Nowy Sącz</div>
<div className="text-xs text-gray-500">© 2025 Instalacje Elektryczne Rafał Homa. Wszelkie prawa zastrzeżone.</div>
</div>
<div className="flex gap-6 text-xs font-medium">
<a className="text-gray-400 hover:text-white transition-colors" href="#o-nas">O nas</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#uslugi">Usługi</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#realizacje">Realizacje</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#kontakt">Kontakt</a>
</div>
</div>
</footer>



    </>
  );
}
