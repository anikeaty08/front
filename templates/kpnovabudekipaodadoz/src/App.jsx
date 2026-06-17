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
      
tailwind.config = {
theme: {
extend: {
colors: {
navy: { 900: '#0F0F1A', 800: '#1A1A2E' },
gold: { 500: '#C8860A', 600: '#A36E08' },
paper: '#F5F5F0',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Montserrat', 'sans-serif'],
},
animation: {
'marquee': 'marquee 35s linear infinite',
'pulse-ring': 'pulse-ring 4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
'float': 'float 3s ease-in-out infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
'pulse-ring': {
'0%': { transform: 'scale(0.8)', boxShadow: '0 0 0 0 rgba(200, 134, 10, 0.7)' },
'70%': { transform: 'scale(1)', boxShadow: '0 0 0 15px rgba(200, 134, 10, 0)' },
'100%': { transform: 'scale(0.8)', boxShadow: '0 0 0 0 rgba(200, 134, 10, 0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Sticky Navbar
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navbar.classList.add('bg-navy-800/90', 'backdrop-blur-md', 'border-gold-500/30', 'shadow-sm');
                    navbar.classList.remove('border-transparent');
                } else {
                    navbar.classList.remove('bg-navy-800/90', 'backdrop-blur-md', 'border-gold-500/30', 'shadow-sm');
                    navbar.classList.add('border-transparent');
                }
            });

            // Mobile Menu
            const menuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            let isMenuOpen = false;

            function toggleMenu() {
                isMenuOpen = !isMenuOpen;
                if (isMenuOpen) {
                    mobileMenu.classList.remove('translate-x-full');
                    menuIcon.setAttribute('icon', 'solar:close-circle-linear');
                    document.body.style.overflow = 'hidden';
                } else {
                    mobileMenu.classList.add('translate-x-full');
                    menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
                    document.body.style.overflow = '';
                }
            }

            menuBtn.addEventListener('click', toggleMenu);
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => { if(isMenuOpen) toggleMenu(); });
            });

            // Intersection Observer for Animations
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        
                        // Counter Animation
                        if(entry.target.classList.contains('bg-gold-500')) {
                            const counters = document.querySelectorAll('.counter');
                            counters.forEach(counter => {
                                const target = +counter.getAttribute('data-target');
                                const duration = 2000;
                                const increment = target / (duration / 16);
                                let current = 0;
                                
                                const updateCounter = () => {
                                    current += increment;
                                    if (current < target) {
                                        counter.innerText = Math.ceil(current);
                                        requestAnimationFrame(updateCounter);
                                    } else {
                                        counter.innerText = target;
                                    }
                                };
                                updateCounter();
                            });
                        }
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .line-grow, .bg-gold-500').forEach(el => {
                observer.observe(el);
            });

            // Hero load animation
            setTimeout(() => {
                document.querySelector('.hero-content').classList.replace('opacity-0', 'animate-[fade-in-up_1s_ease-out_forwards]');
            }, 300);
        });

        // Form Submission Mock
        function submitForm() {
            const btn = document.getElementById('submit-btn');
            const text = document.getElementById('btn-text');
            const icon = document.getElementById('btn-icon');
            
            btn.disabled = true;
            text.innerText = 'Wysyłanie...';
            icon.setAttribute('icon', 'solar:spinner-linear');
            icon.classList.add('animate-spin');
            
            setTimeout(() => {
                btn.classList.remove('bg-gold-500', 'hover:bg-gold-600');
                btn.classList.add('bg-green-600');
                text.innerText = 'Wysłano! ✓';
                icon.classList.remove('animate-spin');
                icon.setAttribute('icon', '');
                document.getElementById('contact-form').reset();
                
                setTimeout(() => {
                    btn.classList.add('bg-gold-500', 'hover:bg-gold-600');
                    btn.classList.remove('bg-green-600');
                    text.innerText = 'Chcę bezpłatną wycenę';
                    icon.setAttribute('icon', 'solar:arrow-right-linear');
                    btn.disabled = false;
                }, 3000);
            }, 1500);
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-350 ease-in-out border-b border-transparent text-white" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="font-heading font-extrabold text-xl tracking-tight" href="#">
                    KP <span className="text-gold-500">Nova</span>Bud
                </a>

<div className="hidden md:flex items-center space-x-8">
<div className="flex space-x-6 text-xs font-semibold uppercase tracking-widest text-white/80">
<a className="hover:text-gold-500 transition-colors relative group" href="#o-nas">
                            O nas
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-gold-500 transition-colors relative group" href="#uslugi">
                            Usługi
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-gold-500 transition-colors relative group" href="#realizacje">
                            Realizacje
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-gold-500 transition-colors relative group" href="#opinie">
                            Opinie
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center space-x-4">
<a className="text-gold-500 font-bold hover:text-gold-600 transition tracking-tight flex items-center gap-2" href="tel:695195302">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon> 695 195 302
                        </a>
<a className="shimmer bg-gold-500 text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-gold-600 transition shadow-[0_0_15px_rgba(200,134,10,0.2)] hover:shadow-[0_0_20px_rgba(200,134,10,0.4)]" href="#kontakt">
                            Bezpłatna wycena
                        </a>
</div>
</div>

<div className="flex items-center md:hidden gap-4">
<a className="text-gold-500 flex items-center justify-center p-2" href="tel:695195302">
<iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
</a>
<button aria-label="Menu" className="text-white p-2" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon" width="28"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="fixed inset-0 bg-navy-800/95 backdrop-blur-md translate-x-full transition-transform duration-300 ease-in-out z-[-1] pt-24 px-6" id="mobile-menu">
<div className="flex flex-col space-y-6 text-center text-lg font-medium tracking-wide">
<a className="mobile-link text-white hover:text-gold-500" href="#o-nas">O nas</a>
<a className="mobile-link text-white hover:text-gold-500" href="#uslugi">Usługi</a>
<a className="mobile-link text-white hover:text-gold-500" href="#realizacje">Realizacje</a>
<a className="mobile-link text-white hover:text-gold-500" href="#opinie">Opinie</a>
<a className="mobile-link text-white hover:text-gold-500" href="#kontakt">Kontakt</a>
<div className="pt-6 border-t border-white/10 flex flex-col items-center gap-4">
<a className="text-gold-500 font-bold text-xl" href="tel:695195302">695 195 302</a>
<a className="bg-gold-500 text-white px-8 py-3 rounded-md w-full font-semibold" href="#kontakt">Bezpłatna wycena</a>
</div>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden noise-bg hero-corners parallax-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp'}}>

<div className="absolute inset-0 bg-gradient-to-t from-navy-800 via-navy-800/60 to-navy-800/30 z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
<div className="max-w-3xl hero-content opacity-0">
<div className="flex items-center gap-3 text-gold-500 text-xs font-semibold uppercase tracking-[4px] mb-6">
<iconify-icon icon="solar:stars-linear"></iconify-icon>
                    Bielsko-Biała i cały Śląsk
                </div>
<h1 className="font-heading font-extrabold text-5xl md:text-7xl leading-[1.1] tracking-tight text-white mb-6">
                    Jedna ekipa.<br/>
                    Wszystko od A do Z.
                </h1>
<div className="h-1 w-16 bg-gold-500 mb-6 rounded"></div>
<p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl font-light">
                    Łazienki, podłogi, drzwi, ogrodzenia, bramy i roboty ziemne – KP NovaBud ogarnia cały zakres bez szukania pięciu firm. Bielsko-Biała, Śląsk i okolice.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-4">
<a className="shimmer bg-gold-500 text-white text-center px-8 py-4 rounded-md font-semibold hover:bg-gold-600 hover:-translate-y-0.5 transition-all shadow-[0_4px_20px_rgba(200,134,10,0.3)]" href="#kontakt">
                        Zadzwoń teraz
                    </a>
<a className="border border-white/20 bg-white/5 backdrop-blur-sm text-white text-center px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-all" href="#realizacje">
                        Zobacz realizacje
                    </a>
</div>
<p className="text-xs text-white/50 tracking-wide">Bezpłatna wycena • Bez zobowiązań • Odpowiadamy szybko</p>
</div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce flex flex-col items-center">
<span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
<iconify-icon icon="solar:double-alt-arrow-down-linear" width="24"></iconify-icon>
</div>
</header>

<section className="bg-gold-500 relative z-20 shadow-lg">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-navy-900/10 text-navy-900">
<div className="flex flex-col items-center md:items-start md:px-6 pt-4 md:pt-0">
<div className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight"><span className="counter" data-target="7">0</span>+ lat</div>
<div className="text-sm font-medium opacity-80 mt-1">Doświadczenia w branży</div>
</div>
<div className="flex flex-col items-center md:items-start md:px-6 pt-4 md:pt-0">
<div className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight"><span className="counter" data-target="150">0</span>+</div>
<div className="text-sm font-medium opacity-80 mt-1">Zrealizowanych projektów</div>
</div>
<div className="flex flex-col items-center md:items-start md:px-6 pt-4 md:pt-0">
<div className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight"><span className="counter" data-target="2">0</span></div>
<div className="text-sm font-medium opacity-80 mt-1">Doświadczonych fachowców</div>
</div>
<div className="flex flex-col items-center md:items-start md:px-6 pt-4 md:pt-0">
<div className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight">Śląsk</div>
<div className="text-sm font-medium opacity-80 mt-1">Od Bielska do Katowic</div>
</div>
</div>
</div>
</section>

<div className="bg-navy-900 border-b border-navy-800 overflow-hidden py-3 text-gold-500 text-sm font-medium uppercase tracking-widest whitespace-nowrap flex">
<div className="animate-marquee flex gap-8 min-w-full">
<span>Wykończenia łazienek</span> • <span>Układanie płytek</span> • <span>Montaż drzwi</span> • <span>Podłogi panelowe</span> • <span>Ogrodzenia i bramy</span> • <span>Roboty ziemne</span> • <span>Koparka</span> • <span>Bielsko-Biała</span> • <span>Katowice</span> • <span>Śląsk</span> •
        </div>
<div aria-hidden="true" className="animate-marquee flex gap-8 min-w-full">
<span>Wykończenia łazienek</span> • <span>Układanie płytek</span> • <span>Montaż drzwi</span> • <span>Podłogi panelowe</span> • <span>Ogrodzenia i bramy</span> • <span>Roboty ziemne</span> • <span>Koparka</span> • <span>Bielsko-Biała</span> • <span>Katowice</span> • <span>Śląsk</span> •
        </div>
</div>

<section className="bg-paper text-navy-800 pt-24 pb-32 clip-bottom" id="o-nas">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative reveal-left">
<div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
<img alt="Wykończenie łazienki Bielsko-Biała" className="w-full h-auto object-cover" loading="lazy" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 border-2 border-gold-500 rounded-xl translate-x-3 translate-y-3 -z-10 pointer-events-none"></div>
</div>
<div className="reveal">
<h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-6 leading-tight">
                        Znamy się na robocie.<br/>I na tym że Twój czas i pieniądze są ważne.
                    </h2>
<div className="h-1 bg-gold-500 mb-8 line-grow"></div>
<div className="space-y-6 text-base md:text-lg text-navy-800/80 leading-relaxed">
<p>
                            KP NovaBud to Krystian i jego wspólnik – dwóch fachowców z krwi i kości, którzy przez lata zbierali doświadczenie na budowach w Polsce i za granicą, w tym 5 lat na zachodnich realizacjach w Szwecji. Wiemy jak wygląda robota wykonana na poziomie europejskim – i taki standard dowozimy naszym klientom na Śląsku.
                        </p>
<p>
                            Działamy we dwóch – co oznacza że zawsze wiesz z kim rozmawiasz i kto wykona Twoją pracę. Żadnych podwykonawców, żadnego przerzucania odpowiedzialności. Bierzemy zlecenie, kończymy zlecenie – tak jak się umawiamy.
                        </p>
<p className="font-semibold text-navy-800">
                            Większość naszych klientów trafia do nas z poleceń. Nie dlatego że jesteśmy najtańsi – ale dlatego że robimy to co obiecaliśmy, w terminie który ustaliliśmy, bez niespodzianek na fakturze.
                        </p>
</div>
<div className="mt-10 flex flex-wrap gap-6 text-sm font-semibold tracking-wide text-navy-800">
<div className="flex items-center gap-2"><iconify-icon className="text-gold-500 text-xl" icon="solar:hammer-linear"></iconify-icon> 7+ lat w branży</div>
<div className="flex items-center gap-2"><iconify-icon className="text-gold-500 text-xl" icon="solar:home-linear"></iconify-icon> 150+ projektów</div>
<div className="flex items-center gap-2"><iconify-icon className="text-gold-500 text-xl" icon="solar:star-linear"></iconify-icon> 99% z poleceń</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-navy-800 pt-32 pb-40 text-white grid-pattern clip-bottom" id="uslugi">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">Co robimy dla Ciebie?</h2>
<div className="h-1 w-20 bg-gold-500 mx-auto mb-6 rounded"></div>
<p className="text-lg text-white/70">Kompleksowe usługi budowlano-wykończeniowe – jeden telefon zastępuje pięć ekip</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-navy-900 border-l-4 border-gold-500 p-8 rounded-r-xl transition-all duration-300 hover:bg-navy-800 shadow-lg hover:shadow-gold-500/10 group reveal-scale" style={{transitionDelay: '0.1s'}}>
<iconify-icon className="text-4xl text-gold-500 mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(200,134,10,0.8)] transition-all duration-300" icon="solar:bath-linear"></iconify-icon>
<h3 className="text-xl font-heading font-bold mb-3 group-hover:text-gold-500 transition-colors flex items-center justify-between">
                        Wykończenia łazienek <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
</h3>
<p className="text-white/60 text-sm leading-relaxed">Kompleksowe wykończenie łazienki od podłogi po sufity – płytki, armatura, zabudowy, odpływy. Odbierasz gotową łazienkę, my bierzemy na siebie całą resztę.</p>
</div>

<div className="bg-navy-900 border-l-4 border-gold-500 p-8 rounded-r-xl transition-all duration-300 hover:bg-navy-800 shadow-lg hover:shadow-gold-500/10 group reveal-scale" style={{transitionDelay: '0.2s'}}>
<iconify-icon className="text-4xl text-gold-500 mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(200,134,10,0.8)] transition-all duration-300" icon="solar:widget-linear"></iconify-icon>
<h3 className="text-xl font-heading font-bold mb-3 group-hover:text-gold-500 transition-colors flex items-center justify-between">
                        Płytki i gres <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
</h3>
<p className="text-white/60 text-sm leading-relaxed">Precyzyjne układanie płytek ceramicznych, gresu i mozaiki w łazienkach, kuchniach i na tarasach. Równo, estetycznie i bez fug które kruszą się po miesiącu.</p>
</div>

<div className="bg-navy-900 border-l-4 border-gold-500 p-8 rounded-r-xl transition-all duration-300 hover:bg-navy-800 shadow-lg hover:shadow-gold-500/10 group reveal-scale" style={{transitionDelay: '0.3s'}}>
<iconify-icon className="text-4xl text-gold-500 mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(200,134,10,0.8)] transition-all duration-300" icon="solar:ruler-cross-pen-linear"></iconify-icon>
<h3 className="text-xl font-heading font-bold mb-3 group-hover:text-gold-500 transition-colors flex items-center justify-between">
                        Podłogi panelowe <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
</h3>
<p className="text-white/60 text-sm leading-relaxed">Układamy panele laminowane, winylowe i deski podłogowe – z podkładem, listwami i wykończeniem pod drzwi. Podłoga która wygląda dobrze i służy latami.</p>
</div>

<div className="bg-navy-900 border-l-4 border-gold-500 p-8 rounded-r-xl transition-all duration-300 hover:bg-navy-800 shadow-lg hover:shadow-gold-500/10 group reveal-scale" style={{transitionDelay: '0.4s'}}>
<iconify-icon className="text-4xl text-gold-500 mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(200,134,10,0.8)] transition-all duration-300" icon="solar:door-linear"></iconify-icon>
<h3 className="text-xl font-heading font-bold mb-3 group-hover:text-gold-500 transition-colors flex items-center justify-between">
                        Montaż drzwi <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
</h3>
<p className="text-white/60 text-sm leading-relaxed">Montaż drzwi wewnętrznych – standardowych i na wymiar, z ościeżnicą regulowaną i uszczelkami. Drzwi które działają bez skrzypienia od pierwszego dnia.</p>
</div>

<div className="bg-navy-900 border-l-4 border-gold-500 p-8 rounded-r-xl transition-all duration-300 hover:bg-navy-800 shadow-lg hover:shadow-gold-500/10 group reveal-scale" style={{transitionDelay: '0.5s'}}>
<iconify-icon className="text-4xl text-gold-500 mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(200,134,10,0.8)] transition-all duration-300" icon="solar:home-angle-linear"></iconify-icon>
<h3 className="text-xl font-heading font-bold mb-3 group-hover:text-gold-500 transition-colors flex items-center justify-between">
                        Ogrodzenia i bramy <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
</h3>
<p className="text-white/60 text-sm leading-relaxed">Budowa ogrodzeń i montaż bram wjazdowych – przęsłowych, panelowych i automatycznych. Posesja która wygląda na zadbaną od ulicy.</p>
</div>

<div className="bg-navy-900 border-l-4 border-gold-500 p-8 rounded-r-xl transition-all duration-300 hover:bg-navy-800 shadow-lg hover:shadow-gold-500/10 group reveal-scale" style={{transitionDelay: '0.6s'}}>
<iconify-icon className="text-4xl text-gold-500 mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(200,134,10,0.8)] transition-all duration-300" icon="solar:trowel-linear"></iconify-icon>
<h3 className="text-xl font-heading font-bold mb-3 group-hover:text-gold-500 transition-colors flex items-center justify-between">
                        Roboty ziemne <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
</h3>
<p className="text-white/60 text-sm leading-relaxed">Wykopy pod fundamenty, niwelacja terenu, prace koparką – szybko i bez zniszczenia reszty działki. Mamy sprzęt, nie musisz go szukać osobno.</p>
</div>

<div className="bg-navy-900 border-l-4 border-gold-500 p-8 rounded-r-xl transition-all duration-300 hover:bg-navy-800 shadow-lg hover:shadow-gold-500/10 group reveal-scale" style={{transitionDelay: '0.7s'}}>
<iconify-icon className="text-4xl text-gold-500 mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(200,134,10,0.8)] transition-all duration-300" icon="solar:sofa-linear"></iconify-icon>
<h3 className="text-xl font-heading font-bold mb-3 group-hover:text-gold-500 transition-colors flex items-center justify-between">
                        Wykończenia wnętrz <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
</h3>
<p className="text-white/60 text-sm leading-relaxed">Kompleksowe prace wykończeniowe w domach i mieszkaniach – łazienki, kuchnie, przedpokoje, salony. Od stanu deweloperskiego do gotowego wnętrza.</p>
</div>

<div className="bg-navy-900 border-l-4 border-gold-500 p-8 rounded-r-xl transition-all duration-300 hover:bg-navy-800 shadow-lg hover:shadow-gold-500/10 group reveal-scale" style={{transitionDelay: '0.8s'}}>
<iconify-icon className="text-4xl text-gold-500 mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(200,134,10,0.8)] transition-all duration-300" icon="solar:screencast-linear"></iconify-icon>
<h3 className="text-xl font-heading font-bold mb-3 group-hover:text-gold-500 transition-colors flex items-center justify-between">
                        Zabudowy i montaż <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
</h3>
<p className="text-white/60 text-sm leading-relaxed">Zabudowy łazienkowe, montaż szafek podwieszanych, półek i elementów wykończeniowych. Detale które składają się na efekt końcowy.</p>
</div>

<div className="bg-navy-900 border-l-4 border-gold-500 p-8 rounded-r-xl transition-all duration-300 hover:bg-navy-800 shadow-lg hover:shadow-gold-500/10 group reveal-scale" style={{transitionDelay: '0.9s'}}>
<iconify-icon className="text-4xl text-gold-500 mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(200,134,10,0.8)] transition-all duration-300" icon="solar:buildings-linear"></iconify-icon>
<h3 className="text-xl font-heading font-bold mb-3 group-hover:text-gold-500 transition-colors flex items-center justify-between">
                        Zlecenia dla firm <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
</h3>
<p className="text-white/60 text-sm leading-relaxed">Obsługujemy też zlecenia instytucjonalne – przedszkola, biura, lokale usługowe. Terminowo i z fakturą VAT.</p>
</div>
</div>
</div>
</section>

<section className="bg-paper text-navy-800 pt-24 pb-32 clip-bottom relative z-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">Jak przebiega współpraca?</h2>
<div className="h-1 w-20 bg-gold-500 mx-auto mb-6 rounded line-grow"></div>
<p className="text-lg text-navy-800/70">Prosto, bez kombinowania i bez niespodzianek</p>
</div>
<div className="relative max-w-5xl mx-auto">

<div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-navy-900/10 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">

<div className="relative z-10 flex flex-col items-center text-center reveal-scale" style={{transitionDelay: '0.1s'}}>
<div className="w-16 h-16 rounded-full bg-paper border-4 border-gold-500 text-gold-500 flex items-center justify-center text-2xl font-bold font-heading mb-6 shadow-md bg-white">1</div>
<h3 className="text-xl font-bold font-heading mb-3">Kontakt</h3>
<p className="text-sm text-navy-800/70">Zadzwoń lub napisz – opisz co chcesz zrobić. Odpowiadamy szybko i nie zostawiamy bez odzewu.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center reveal-scale" style={{transitionDelay: '0.3s'}}>
<div className="w-16 h-16 rounded-full bg-paper border-4 border-gold-500 text-gold-500 flex items-center justify-center text-2xl font-bold font-heading mb-6 shadow-md bg-white">2</div>
<h3 className="text-xl font-bold font-heading mb-3">Bezpłatna wycena</h3>
<p className="text-sm text-navy-800/70">Przyjeżdżamy na miejsce, oglądamy zakres prac i podajemy konkretną cenę. Bez ukrytych kosztów.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center reveal-scale" style={{transitionDelay: '0.5s'}}>
<div className="w-16 h-16 rounded-full bg-paper border-4 border-gold-500 text-gold-500 flex items-center justify-center text-2xl font-bold font-heading mb-6 shadow-md bg-white">3</div>
<h3 className="text-xl font-bold font-heading mb-3">Realizacja</h3>
<p className="text-sm text-navy-800/70">Przychodzimy w terminie i robimy robotę. Informujemy o postępach – nie znikamy w środku zlecenia.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center reveal-scale" style={{transitionDelay: '0.7s'}}>
<div className="w-16 h-16 rounded-full bg-paper border-4 border-gold-500 text-white bg-gold-500 flex items-center justify-center text-2xl font-bold font-heading mb-6 shadow-lg shadow-gold-500/30">4</div>
<h3 className="text-xl font-bold font-heading mb-3 text-gold-600">Odbiór</h3>
<p className="text-sm text-navy-800/70">Zostawiamy po sobie porządek. Ty odbierasz pracę – my zbieramy referencje i czekamy na polecenie.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-navy-900 pt-24 pb-32 text-white" id="realizacje">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal">
<div>
<h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">Nasze realizacje</h2>
<div className="h-1 w-20 bg-gold-500 mb-4 rounded"></div>
<p className="text-lg text-white/70">Śląsk i okolice – efekty które mówią same za siebie</p>
</div>
</div>
<div className="masonry reveal">

<div className="masonry-item rounded-xl overflow-hidden relative group cursor-pointer bg-navy-800">
<img alt="Wykończenie łazienki Bielsko-Biała" className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.04]" loading="lazy" src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
<iconify-icon className="text-3xl text-gold-500 mb-3" icon="solar:magnifer-linear"></iconify-icon>
<h4 className="font-heading font-bold text-lg">Wykończenie łazienki</h4>
<p className="text-xs text-white/70 uppercase tracking-wider mt-1">Bielsko-Biała</p>
</div>
</div>

<div className="masonry-item rounded-xl overflow-hidden relative group cursor-pointer bg-navy-800">
<img alt="Podłoga panelowa Katowice" className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.04]" loading="lazy" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
<iconify-icon className="text-3xl text-gold-500 mb-3" icon="solar:magnifer-linear"></iconify-icon>
<h4 className="font-heading font-bold text-lg">Podłogi panelowe</h4>
<p className="text-xs text-white/70 uppercase tracking-wider mt-1">Katowice</p>
</div>
</div>

<div className="masonry-item rounded-xl overflow-hidden relative group cursor-pointer bg-navy-800">
<img alt="Montaż drzwi wewnętrznych Bielsko-Biała" className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.04]" loading="lazy" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
<iconify-icon className="text-3xl text-gold-500 mb-3" icon="solar:magnifer-linear"></iconify-icon>
<h4 className="font-heading font-bold text-lg">Montaż drzwi</h4>
<p className="text-xs text-white/70 uppercase tracking-wider mt-1">Tychy</p>
</div>
</div>

<div className="masonry-item rounded-xl overflow-hidden relative group cursor-pointer bg-navy-800">
<img alt="Układanie płytek Śląsk" className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.04]" loading="lazy" src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
<iconify-icon className="text-3xl text-gold-500 mb-3" icon="solar:magnifer-linear"></iconify-icon>
<h4 className="font-heading font-bold text-lg">Układanie gresu</h4>
<p className="text-xs text-white/70 uppercase tracking-wider mt-1">Oświęcim</p>
</div>
</div>

<div className="masonry-item rounded-xl overflow-hidden relative group cursor-pointer bg-navy-800">
<img alt="Roboty ziemne koparka Bielsko-Biała" className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.04]" loading="lazy" src="https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
<iconify-icon className="text-3xl text-gold-500 mb-3" icon="solar:magnifer-linear"></iconify-icon>
<h4 className="font-heading font-bold text-lg">Roboty ziemne i wykopy</h4>
<p className="text-xs text-white/70 uppercase tracking-wider mt-1">Żywiec</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-paper pt-24 pb-24 text-navy-800 border-t border-navy-900/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight mb-12 text-center reveal">Dlaczego klienci nam ufają?</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="text-center reveal-scale" style={{transitionDelay: '0.1s'}}>
<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold-500/10 mb-6">
<iconify-icon className="text-4xl text-gold-500" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold font-heading mb-3">Jedna ekipa – wszystko</h3>
<p className="text-sm text-navy-800/70">Łazienki, podłogi, drzwi, ogrodzenia i koparka – nie szukasz osobno do każdego etapu. My to ogarniamy.</p>
</div>

<div className="text-center reveal-scale" style={{transitionDelay: '0.2s'}}>
<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold-500/10 mb-6">
<iconify-icon className="text-4xl text-gold-500" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold font-heading mb-3">Terminowo – bez wymówek</h3>
<p className="text-sm text-navy-800/70">Przychodzimy kiedy się umawiamy i kończymy kiedy obiecaliśmy. Twój harmonogram jest dla nas priorytetem.</p>
</div>

<div className="text-center reveal-scale" style={{transitionDelay: '0.3s'}}>
<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold-500/10 mb-6">
<iconify-icon className="text-4xl text-gold-500" icon="solar:map-point-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold font-heading mb-3">Lokalni fachowcy</h3>
<p className="text-sm text-navy-800/70">Mieszkamy i działamy na Śląsku. Znamy tutejsze warunki, przepisy i realia budowlane.</p>
</div>

<div className="text-center reveal-scale" style={{transitionDelay: '0.4s'}}>
<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold-500/10 mb-6">
<iconify-icon className="text-4xl text-gold-500" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold font-heading mb-3">99% z poleceń</h3>
<p className="text-sm text-navy-800/70">Nie wydajemy fortuny na reklamy – bo zadowoleni klienci polecają nas kolejnym. To najlepsza ocena.</p>
</div>
</div>
</div>
</section>

<section className="bg-navy-800 pt-24 pb-32 text-white clip-bottom relative z-10" id="opinie">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">Co mówią nasi klienci?</h2>
<div className="h-1 w-20 bg-gold-500 mx-auto mb-6 rounded"></div>
<p className="text-lg text-white/70">Zadowoleni klienci z całego Śląska</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">

<div className="bg-navy-900 p-8 rounded-xl relative overflow-hidden border border-white/5">
<div className="text-gold-500 text-6xl font-heading absolute -top-4 -right-2 opacity-10">"</div>
<div className="flex text-gold-500 mb-4 text-sm gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-white/80 italic text-sm leading-relaxed mb-6">"Ekipa zrobiła mi kompleksowo całą łazienkę – od wyburzeń po ostatnią fugę. Wszystko w terminie, cena zgodna z wyceną, po sobie posprzątali. Już polecam wszystkim znajomym."</p>
<div className="border-t border-white/10 pt-4 mt-auto">
<p className="font-bold text-sm">Marcin K., Bielsko-Biała</p>
<p className="text-xs text-gold-500">Wykończenie łazienki</p>
</div>
</div>

<div className="bg-navy-900 p-8 rounded-xl relative overflow-hidden border border-white/5">
<div className="text-gold-500 text-6xl font-heading absolute -top-4 -right-2 opacity-10">"</div>
<div className="flex text-gold-500 mb-4 text-sm gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-white/80 italic text-sm leading-relaxed mb-6">"Układali mi podłogi panelowe w całym mieszkaniu i zamontowali drzwi wewnętrzne. Profesjonalne podejście, żadnego bałaganu, efekt lepszy niż oczekiwałam. Zdecydowanie wracam przy kolejnym remoncie."</p>
<div className="border-t border-white/10 pt-4 mt-auto">
<p className="font-bold text-sm">Agnieszka T., Tychy</p>
<p className="text-xs text-gold-500">Podłogi + drzwi</p>
</div>
</div>

<div className="bg-navy-900 p-8 rounded-xl relative overflow-hidden border border-white/5">
<div className="text-gold-500 text-6xl font-heading absolute -top-4 -right-2 opacity-10">"</div>
<div className="flex text-gold-500 mb-4 text-sm gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-white/80 italic text-sm leading-relaxed mb-6">"Roboty ziemne pod fundamenty plus ogrodzenie panelowe – wszystko jedno zlecenie, jedna ekipa, zero stresu. Sprawna robota, uczciwa cena. Polecam każdemu kto nie chce biegać za pięcioma firmami."</p>
<div className="border-t border-white/10 pt-4 mt-auto">
<p className="font-bold text-sm">Piotr W., Katowice</p>
<p className="text-xs text-gold-500">Roboty ziemne + ogrodzenie</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-paper text-navy-800 pt-32 pb-24 border-b border-navy-900/10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal">
<div>
<h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">Działamy w Twoim rejonie</h2>
<p className="text-lg text-navy-800/70 mb-8">Bielsko-Biała, Katowice i cały region Śląski</p>
<div className="flex flex-wrap gap-3 mb-6">
<span className="px-4 py-2 rounded-full border border-gold-500 text-sm font-medium hover:bg-gold-500 hover:text-white transition-colors cursor-default">Bielsko-Biała</span>
<span className="px-4 py-2 rounded-full border border-gold-500 text-sm font-medium hover:bg-gold-500 hover:text-white transition-colors cursor-default">Katowice</span>
<span className="px-4 py-2 rounded-full border border-gold-500 text-sm font-medium hover:bg-gold-500 hover:text-white transition-colors cursor-default">Tychy</span>
<span className="px-4 py-2 rounded-full border border-gold-500 text-sm font-medium hover:bg-gold-500 hover:text-white transition-colors cursor-default">Oświęcim</span>
<span className="px-4 py-2 rounded-full border border-gold-500 text-sm font-medium hover:bg-gold-500 hover:text-white transition-colors cursor-default">Żywiec</span>
<span className="px-4 py-2 rounded-full border border-gold-500 text-sm font-medium hover:bg-gold-500 hover:text-white transition-colors cursor-default">Pszczyna</span>
<span className="px-4 py-2 rounded-full border border-gold-500 text-sm font-medium hover:bg-gold-500 hover:text-white transition-colors cursor-default">Mikołów</span>
<span className="px-4 py-2 rounded-full border border-gold-500 text-sm font-medium hover:bg-gold-500 hover:text-white transition-colors cursor-default bg-gold-500/10">i okolice</span>
</div>
<p className="text-sm text-navy-800/60 font-medium">
                        Nie widzisz swojej miejscowości? <a className="text-gold-600 underline underline-offset-2" href="#kontakt">Zadzwoń</a> – na pewno coś ustalimy.
                    </p>
</div>
<div className="h-80 w-full rounded-xl overflow-hidden shadow-lg border border-navy-900/10 relative">

<iframe allowfullscreen="" className="dark-map absolute inset-0" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163740.75127608827!2d18.910360341777265!3d49.82173428945695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47169fb6982fec9f%3A0xc3b86940a45ab2e6!2sBielsko-Bia%C5%82a!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="bg-navy-800 pt-24 pb-32 text-white">
<div className="max-w-4xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">Masz pytania? Mamy odpowiedzi.</h2>
<div className="h-1 w-20 bg-gold-500 mx-auto mb-6 rounded"></div>
<p className="text-lg text-white/70">Najczęstsze pytania naszych klientów</p>
</div>
<div className="space-y-4 reveal">

<details className="group bg-navy-900 rounded-xl border border-white/5 overflow-hidden transition-all duration-300 open:bg-navy-900 shadow-md">
<summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg group-open:text-gold-500 transition-colors">
                        Czy wycena jest bezpłatna?
                        <span className="transition-transform duration-300 group-open:rotate-45 text-gold-500 text-2xl font-light">+</span>
</summary>
<div className="p-6 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5 mt-2">
                        Tak – przyjeżdżamy, oglądamy zakres prac i podajemy konkretną wycenę bez żadnych opłat i zobowiązań. Chcesz to wiesz ile zapłacisz, zanim cokolwiek zaczniesz.
                    </div>
</details>

<details className="group bg-navy-900 rounded-xl border border-white/5 overflow-hidden transition-all duration-300 open:bg-navy-900 shadow-md">
<summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg group-open:text-gold-500 transition-colors">
                        Jak długo trwa remont łazienki?
                        <span className="transition-transform duration-300 group-open:rotate-45 text-gold-500 text-2xl font-light">+</span>
</summary>
<div className="p-6 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5 mt-2">
                        Standardowa łazienka zajmuje nam 2-3 tygodnie, w zależności od zakresu i metrażu. Zawsze podajemy realistyczny termin przed rozpoczęciem – i tego terminu się trzymamy.
                    </div>
</details>

<details className="group bg-navy-900 rounded-xl border border-white/5 overflow-hidden transition-all duration-300 open:bg-navy-900 shadow-md">
<summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg group-open:text-gold-500 transition-colors">
                        Czy robicie tylko wykończenia czy też prace zewnętrzne?
                        <span className="transition-transform duration-300 group-open:rotate-45 text-gold-500 text-2xl font-light">+</span>
</summary>
<div className="p-6 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5 mt-2">
                        Robimy jedno i drugie. Wykończenia wnętrz (łazienki, podłogi, drzwi), prace zewnętrzne (ogrodzenia, bramy) i roboty ziemne z koparką. Jedno zlecenie, jedna ekipa – nie musisz szukać osobno do każdego etapu.
                    </div>
</details>

<details className="group bg-navy-900 rounded-xl border border-white/5 overflow-hidden transition-all duration-300 open:bg-navy-900 shadow-md">
<summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg group-open:text-gold-500 transition-colors">
                        Na jakim obszarze działacie?
                        <span className="transition-transform duration-300 group-open:rotate-45 text-gold-500 text-2xl font-light">+</span>
</summary>
<div className="p-6 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5 mt-2">
                        Głównie Bielsko-Biała i okolice, ale obsługujemy cały region Śląski – od Bielska do Katowic. Zadzwoń i zapytaj czy dojazd do Ciebie jest możliwy.
                    </div>
</details>

<details className="group bg-navy-900 rounded-xl border border-white/5 overflow-hidden transition-all duration-300 open:bg-navy-900 shadow-md">
<summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg group-open:text-gold-500 transition-colors">
                        Czy po sobie sprzątacie?
                        <span className="transition-transform duration-300 group-open:rotate-45 text-gold-500 text-2xl font-light">+</span>
</summary>
<div className="p-6 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5 mt-2">
                        Tak – to standard u nas, nie wyjątek. Zostawiamy po sobie porządek. Odbierasz gotowy efekt, nie plac budowy.
                    </div>
</details>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden parallax-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp'}}>
<div className="absolute inset-0 bg-navy-800/85 mix-blend-multiply"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center reveal-scale">
<h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white mb-4">Przestań szukać pięciu ekip.<br/>Zadzwoń do jednej.</h2>
<p className="text-gold-500 text-lg font-medium tracking-wide mb-10">Bezpłatna wycena • Bez zobowiązań • Odpowiadamy szybko</p>
<a className="shimmer inline-block bg-gold-500 text-white px-10 py-5 rounded-md text-lg font-bold hover:bg-gold-600 transition shadow-[0_0_20px_rgba(200,134,10,0.4)] hover:-translate-y-1" href="tel:695195302">
                Zadzwoń teraz
            </a>
<p className="mt-6 text-white/60 text-sm">lub napisz: <a className="text-white hover:text-gold-500 underline decoration-white/30 underline-offset-4 transition-colors" href="mailto:krzysiekpisarek@wp.pl">krzysiekpisarek@wp.pl</a></p>
</div>
</section>

<section className="bg-navy-900 pt-24 pb-32 text-white border-t border-white/5" id="kontakt">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">Gotowy żeby to ogarnąć?</h2>
<div className="h-1 w-20 bg-gold-500 mx-auto mb-6 rounded"></div>
<p className="text-lg text-white/70">Napisz lub zadzwoń – bezpłatna wycena, zero nerwówki</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="bg-navy-800/50 p-8 rounded-xl border border-white/10 reveal-left">
<form className="space-y-6" id="contact-form" onsubmit="event.preventDefault(); submitForm();">
<div className="relative">
<input className="float-input peer w-full bg-navy-900 border border-white/20 rounded-md px-4 py-4 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 transition-colors placeholder-transparent" id="name" placeholder="Imię i nazwisko" required="" type="text"/>
<label className="float-label absolute left-4 top-4 text-white/50 transition-all pointer-events-none text-sm peer-focus:text-gold-500 bg-navy-900 px-1 -ml-1" htmlFor="name">Imię i nazwisko</label>
</div>
<div className="relative">
<input className="float-input peer w-full bg-navy-900 border border-white/20 rounded-md px-4 py-4 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 transition-colors placeholder-transparent" id="phone" placeholder="Numer telefonu" required="" type="tel"/>
<label className="float-label absolute left-4 top-4 text-white/50 transition-all pointer-events-none text-sm peer-focus:text-gold-500 bg-navy-900 px-1 -ml-1" htmlFor="phone">Numer telefonu</label>
</div>
<div className="relative">
<textarea className="float-input peer w-full bg-navy-900 border border-white/20 rounded-md px-4 py-4 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 transition-colors placeholder-transparent resize-none" id="message" placeholder="Zakres prac" required="" rows="4"></textarea>
<label className="float-label absolute left-4 top-4 text-white/50 transition-all pointer-events-none text-sm peer-focus:text-gold-500 bg-navy-900 px-1 -ml-1" htmlFor="message">Wiadomość / zakres prac</label>
</div>
<button className="w-full bg-gold-500 text-white font-bold py-4 rounded-md hover:bg-gold-600 transition flex items-center justify-center gap-2 relative overflow-hidden" id="submit-btn" type="submit">
<span id="btn-text">Chcę bezpłatną wycenę</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" id="btn-icon"></iconify-icon>
</button>
<p className="text-xs text-center text-white/40 mt-4">Odpowiadamy w ciągu 24h • Twoje dane są bezpieczne</p>
</form>
</div>

<div className="flex flex-col justify-center relative reveal">
<div className="hidden lg:block absolute -left-8 top-0 bottom-0 w-[1px] bg-gold-500/25"></div>
<div className="space-y-8">
<div>
<p className="text-sm text-white/50 uppercase tracking-widest mb-1">Zadzwoń, odpowiemy od razu</p>
<a className="text-4xl font-heading font-extrabold text-gold-500 hover:text-gold-600 transition tracking-tight flex items-center gap-3" href="tel:695195302">
                                695 195 302
                            </a>
</div>
<div>
<p className="text-sm text-white/50 uppercase tracking-widest mb-1">Napisz e-mail</p>
<a className="text-xl font-medium text-white hover:text-gold-500 transition flex items-center gap-3" href="mailto:krzysiekpisarek@wp.pl">
<iconify-icon className="text-2xl text-gold-500" icon="solar:letter-linear"></iconify-icon> krzysiekpisarek@wp.pl
                            </a>
</div>
<div>
<p className="text-sm text-white/50 uppercase tracking-widest mb-1">Obszar działania</p>
<p className="text-lg font-medium text-white flex items-center gap-3">
<iconify-icon className="text-2xl text-gold-500" icon="solar:map-point-linear"></iconify-icon> Bielsko-Biała i cały region Śląski
                            </p>
</div>
<div>
<p className="text-sm text-white/50 uppercase tracking-widest mb-1">Godziny pracy</p>
<p className="text-lg font-medium text-white flex items-center gap-3">
<iconify-icon className="text-2xl text-gold-500" icon="solar:clock-circle-linear"></iconify-icon> Pon–Pt 7:00–18:00, Sob 8:00–14:00
                            </p>
</div>
</div>
<div className="mt-12 p-6 bg-gold-500/5 border border-gold-500/20 rounded-xl">
<p className="text-gold-500 italic font-medium">"Dołącz do 150+ zadowolonych klientów którzy już nie szukają nowej ekipy."</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#050508] text-white pt-16 pb-8 border-t border-gold-500/20">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

<div>
<a className="font-heading font-extrabold text-2xl tracking-tight inline-block mb-4" href="#">
                        KP <span className="text-gold-500">Nova</span>Bud
                    </a>
<p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
                        Kompleksowe usługi budowlano-wykończeniowe na Śląsku. Jedna ekipa – wszystkie etapy.
                    </p>
<div className="flex flex-col gap-2">
<a className="text-white hover:text-gold-500 transition text-sm font-semibold" href="tel:695195302">695 195 302</a>
<a className="text-white hover:text-gold-500 transition text-sm font-semibold" href="mailto:krzysiekpisarek@wp.pl">krzysiekpisarek@wp.pl</a>
</div>
</div>

<div>
<h4 className="font-bold text-lg mb-4 text-white">Nawigacja</h4>
<ul className="space-y-3 text-sm text-white/60">
<li><a className="hover:text-gold-500 transition" href="#o-nas">O firmie</a></li>
<li><a className="hover:text-gold-500 transition" href="#uslugi">Usługi</a></li>
<li><a className="hover:text-gold-500 transition" href="#realizacje">Realizacje</a></li>
<li><a className="hover:text-gold-500 transition" href="#opinie">Opinie</a></li>
<li><a className="hover:text-gold-500 transition" href="#kontakt">Kontakt</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-lg mb-4 text-white">Zakres prac</h4>
<ul className="space-y-3 text-sm text-white/60">
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gold-500"></div> Wykończenia łazienek</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gold-500"></div> Płytki i podłogi</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gold-500"></div> Montaż drzwi</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gold-500"></div> Ogrodzenia i bramy</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gold-500"></div> Roboty ziemne</li>
</ul>
</div>
</div>
<div className="border-t border-gold-500/15 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
<p>© 2025 KP NovaBud. Wszelkie prawa zastrzeżone.</p>
<p className="mt-2 md:mt-0">Bielsko-Biała, Śląsk.</p>
</div>
</div>
</footer>

<a aria-label="Zadzwoń teraz" className="md:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center group" href="tel:695195302">
<div className="absolute inset-0 bg-gold-500 rounded-full animate-pulse-ring"></div>
<div className="relative w-14 h-14 bg-gold-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-gold-500/50">
<iconify-icon className="text-2xl animate-float" icon="solar:phone-bold"></iconify-icon>
</div>
</a>


<style>
        @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
        }
    </style>

    </>
  );
}
