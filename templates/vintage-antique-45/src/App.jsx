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



tailwind.config = {
theme: {
extend: {
colors: {
creme: '#F5F0E6',
hunter: '#22332B',
choco: '#3F2F2A',
foxred: '#6B1F24',
brass: '#B89F6F',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Georgia', 'serif'],
display: ['Playfair Display', 'serif'],
},
boxShadow: {
'soft': '0 10px 40px -10px rgba(63, 47, 42, 0.15)',
}
}
}
}



{
"@context": "https://schema.org",
"@type": "AntiquesShop",
"name": "Guldsmeden – Antik & Design",
"image": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6",
"address": {
"@type": "PostalAddress",
"streetAddress": "Nørregade 28",
"addressLocality": "Nyborg",
"postalCode": "5800",
"addressCountry": "DK"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 55.3129,
"longitude": 10.7905
},
"openingHoursSpecification": [
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Friday",
"opens": "15:00",
"closes": "18:00"
},
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Saturday",
"opens": "10:00",
"closes": "14:00"
}
],
"telephone": "+4500000000",
"url": "https://guldsmeden-nyborg.dk"
}



        // Init Icons
        lucide.createIcons();

        // Mobile Menu Logic
        const mobileMenu = document.getElementById('mobile-menu');
        let isMenuOpen = false;

        function toggleMobileMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');
                document.body.style.overflow = '';
            }
        }

        // Intersection Observer for Fade In Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Stop observing once visible to save resources
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-section').forEach(section => {
            observer.observe(section);
        });

        // Language Toggle Simulation
        let isDanish = true;
        function toggleLanguage() {
            isDanish = !isDanish;
            const btn = document.getElementById('lang-text');
            
            if (!isDanish) {
                btn.innerText = "EN";
                // In a real app, this would trigger content replacement or redirect.
                // For this demo, we assume the English content would load here.
                alert("Switching to English version (Simulated)... Content adapts for tourists with deeper storytelling.");
            } else {
                btn.innerText = "DK";
            }
        }

        // Random Footer Story Link Logic
        const galleryStories = [
            "Læs om den rejsende puddel",
            "Historien om Wegner stolen",
            "Hvem ejede pengekassen?",
            "Konkylielampens hemmelighed"
        ];
        
        document.addEventListener('DOMContentLoaded', () => {
            // Set random title for footer link on load
            const randomStory = galleryStories[Math.floor(Math.random() * galleryStories.length)];
            const link = document.getElementById('randomStoryLink');
            // We keep the main manifesto text visually, but title attribute changes for discovery
            link.title = `Opdag: ${randomStory}`;
            
            // Auto-detect browser language
            const userLang = navigator.language || navigator.userLanguage;
            if (!userLang.startsWith('da')) {
                toggleLanguage(); // Switch to EN automatically if not Danish browser
            }
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-sm', 'bg-creme/95', 'py-4');
                nav.classList.remove('py-6', 'bg-creme/90');
            } else {
                nav.classList.remove('shadow-sm', 'bg-creme/95', 'py-4');
                nav.classList.add('py-6', 'bg-creme/90');
            }
        });

    
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
      

<div className="fixed inset-0 w-full h-full pointer-events-none z-50 mix-blend-multiply opacity-20 patina-texture"></div>

<header className="fixed top-0 w-full z-40 transition-all duration-500 bg-creme/90 backdrop-blur-sm border-b border-hunter/10" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

<a className="font-display font-semibold text-3xl tracking-tight text-hunter hover:text-foxred transition-colors duration-500" href="#">
                Guldsmeden
            </a>

<nav className="hidden md:flex items-center gap-10">
<a className="text-lg text-choco/80 hover:text-hunter tracking-wide transition-colors duration-300" href="#home">Forside</a>
<a className="text-lg text-choco/80 hover:text-hunter tracking-wide transition-colors duration-300" href="#historie">Vores Historie</a>
<a className="text-lg text-choco/80 hover:text-hunter tracking-wide transition-colors duration-300" href="#galleri">Galleri</a>
<a className="text-lg text-choco/80 hover:text-hunter tracking-wide transition-colors duration-300" href="#tider">Åbningstider</a>
<a className="text-lg text-choco/80 hover:text-hunter tracking-wide transition-colors duration-300" href="#kontakt">Kontakt</a>

<button aria-label="Skift sprog" className="flex items-center gap-2 px-3 py-1 rounded-full border border-hunter/20 hover:border-hunter/50 transition-all group" onclick="toggleLanguage()">
<i className="w-4 h-4 text-hunter/70 group-hover:text-foxred" data-lucide="flag"></i>
<span className="text-xs uppercase tracking-widest font-medium text-hunter" id="lang-text">DK</span>
</button>
</nav>

<button className="md:hidden text-hunter" onclick="toggleMobileMenu()">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>

<div className="fixed inset-0 bg-creme z-50 transform translate-x-full transition-transform duration-500 flex flex-col justify-center items-center gap-8 opacity-0 pointer-events-none" id="mobile-menu">
<button className="absolute top-6 right-6 text-hunter" onclick="toggleMobileMenu()">
<i className="w-10 h-10 stroke-[1.5]" data-lucide="x"></i>
</button>
<a className="font-display text-4xl text-hunter" href="#home" onclick="toggleMobileMenu()">Forside</a>
<a className="font-display text-4xl text-hunter" href="#historie" onclick="toggleMobileMenu()">Historie</a>
<a className="font-display text-4xl text-hunter" href="#galleri" onclick="toggleMobileMenu()">Galleri</a>
<a className="font-display text-4xl text-hunter" href="#kontakt" onclick="toggleMobileMenu()">Kontakt</a>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center pt-20 px-4 md:px-0 overflow-hidden" id="home">

<div className="absolute inset-0 z-0">

<img alt="Interiør i Guldsmeden Antik" className="w-full h-full object-cover sepia-[.3] brightness-75 scale-105 animate-[pulse_10s_ease-in-out_infinite] opacity-90" src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-hunter/40 to-transparent mix-blend-multiply"></div>
</div>
<div className="relative z-10 text-center max-w-4xl mx-auto space-y-8 fade-in-section">
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-creme drop-shadow-xl italic font-medium leading-[1.1]">
                Intet er nyproduceret.<br/>
<span className="not-italic block mt-4">Alt har en historie.</span>
</h1>
<p className="text-xl md:text-2xl text-creme/90 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Velkommen til Guldsmeden – ting med sjæl, patina og håndværk, der har overlevet generationer.
            </p>
<div className="pt-8">
<a className="inline-flex items-center gap-3 bg-foxred text-creme px-8 py-4 rounded-2xl text-lg font-medium tracking-wide hover:bg-brass transition-all duration-500 shadow-soft transform hover:-translate-y-1" href="#historie">
<span>Kom indenfor</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-creme/60 animate-bounce">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="chevron-down"></i>
</div>
</section>

<section className="py-32 bg-creme relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 items-start">

<div className="lg:col-span-1 fade-in-section space-y-6">
<h2 className="font-serif text-4xl md:text-5xl text-hunter tracking-tight leading-tight">
                        Skæve fund og<br/>dansk design
                    </h2>
<p className="text-xl font-light leading-loose text-choco/90">
                        Fra Wegner og Ditzel til italienske porcelænshunde. Vi samler ikke på ting, men på fortællinger.
                        Vores hylder i Nyborg er fyldt med objekter, der bærer vidnesbyrd om levet liv.
                    </p>
<p className="font-display text-2xl italic text-foxred pt-4">
                        "Invitér dig selv på en tur gennem butikken – kig forbi eller aftal et besøg."
                    </p>
</div>

<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="group bg-white/40 backdrop-blur-sm p-4 rounded-3xl border border-hunter/5 shadow-soft hover:shadow-xl transition-all duration-700 fade-in-section cursor-default">
<div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative">
<img alt="Porcelænsfigur" className="w-full h-full object-cover sepia-[.2] group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-hunter/10 mix-blend-multiply"></div>
</div>
<h3 className="font-display text-2xl text-hunter mb-2">Den rejsende puddel</h3>
<p className="text-lg font-light text-choco leading-relaxed">
                            En italiensk porcelænspudel, båret hjem fra USA i 60'erne. Mærk historien i dens blik.
                        </p>
</div>

<div className="group bg-white/40 backdrop-blur-sm p-4 rounded-3xl border border-hunter/5 shadow-soft hover:shadow-xl transition-all duration-700 fade-in-section delay-100 cursor-default mt-0 sm:mt-12">
<div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative">
<img alt="Wegner Stol" className="w-full h-full object-cover sepia-[.2] group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-display text-2xl text-hunter mb-2">Wegners hvile</h3>
<p className="text-lg font-light text-choco leading-relaxed">
                            Originale hynder og patina på armlænene. Denne stol har lagt ryg til mange dybe samtaler.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-hunter/5 relative overflow-hidden" id="historie">

<div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/black-scales.png\')'}}></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative fade-in-section">

<div className="rounded-3xl overflow-hidden shadow-2xl rotate-1 border-4 border-creme">

<img alt="Thomas i butikken" className="w-full h-auto object-cover sepia-[.15]" src="https://images.unsplash.com/photo-1552590635-27c2c2128abf?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-10 -left-10 w-2/3 rounded-2xl overflow-hidden shadow-xl -rotate-3 border-4 border-creme hidden md:block">
<img alt="Detaljer af hylder" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="absolute -bottom-16 right-10 bg-creme px-6 py-4 rounded-xl shadow-lg rotate-2">
<p className="font-display font-bold text-hunter italic">"Vi elsker at nørde sammen."</p>
</div>
</div>

<div className="fade-in-section space-y-8">
<span className="text-foxred uppercase tracking-[0.2em] font-medium text-sm">Om Guldsmeden</span>
<h2 className="font-serif text-5xl md:text-6xl text-hunter tracking-tight">En 20-års drøm der fandt hjem</h2>
<div className="space-y-6 text-xl text-choco font-light leading-loose">
<p>
                        Det startede ikke som en butik. Det startede som en passion mellem Jan og Thomas. En fælles kærlighed til at finde det unikke på markeder og rejser gennem 30 år.
                    </p>
<p>
                        Hjemmet blev for lille, og drømmen om at dele historierne blev for stor. Da vi åbnede dørene i Nørregade, var det uden fernisering, men butikken var fuld fra dag ét.
                    </p>
<p>
                        Vi har stadig vores fuldtidsjob, så Guldsmeden er vores frirum. Her handler det ikke om salgstal, men om original emballage, heste-temaet på væggen og sjælen i de gamle ting.
                    </p>
</div>
<div className="pt-4 border-l-4 border-foxred pl-6">
<p className="font-display text-2xl italic text-hunter/80">
                        "Vi deler hellere end vi sælger – kom og oplev det selv."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-creme" id="galleri">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 fade-in-section">
<h2 className="font-serif text-5xl text-hunter tracking-tight mb-6">Galleri</h2>
<p className="text-xl text-choco/70 font-light max-w-xl mx-auto">
                    Et udvalg af vores fund. Tryk på billederne for at læse deres historie.
                </p>

<div className="flex flex-wrap justify-center gap-4 mt-10">
<span className="px-6 py-2 rounded-full border border-hunter/30 text-hunter cursor-pointer hover:bg-hunter hover:text-creme transition-colors text-sm tracking-wide">Alle</span>
<span className="px-6 py-2 rounded-full border border-hunter/10 text-choco/60 cursor-pointer hover:border-hunter/30 transition-colors text-sm tracking-wide">Dansk Design</span>
<span className="px-6 py-2 rounded-full border border-hunter/10 text-choco/60 cursor-pointer hover:border-hunter/30 transition-colors text-sm tracking-wide">Lamper</span>
<span className="px-6 py-2 rounded-full border border-hunter/10 text-choco/60 cursor-pointer hover:border-hunter/30 transition-colors text-sm tracking-wide">Porcelæn &amp; Objekter</span>
</div>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">

<div className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer fade-in-section">
<img alt="Wegner stol" className="w-full object-cover transition-transform duration-700 group-hover:scale-105 sepia-[.1]" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-hunter/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
<div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="font-display text-2xl italic text-creme mb-2">Dansk Mesterværk</p>
<p className="text-creme/80 font-light leading-relaxed">
                                Denne stol har stået i en stue på Fyn siden 1965. Læderet fortæller historier om kaffe, aviser og søndage.
                            </p>
</div>
</div>
</div>

<div className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer fade-in-section">
<img alt="Konkylielampe" className="w-full object-cover transition-transform duration-700 group-hover:scale-105 sepia-[.1]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-hunter/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
<div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="font-display text-2xl italic text-creme mb-2">Lys i mørket</p>
<p className="text-creme/80 font-light leading-relaxed">
                                Louis Weisdorf konkylielampe. Tænd den, og se hvordan skyggerne leger med tapetet præcis som i 70'erne.
                            </p>
</div>
</div>
</div>

<div className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer fade-in-section">
<img alt="Antik Kasse" className="w-full object-cover transition-transform duration-700 group-hover:scale-105 sepia-[.1]" src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-hunter/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
<div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="font-display text-2xl italic text-creme mb-2">Butikkens hjerte</p>
<p className="text-creme/80 font-light leading-relaxed">
                                Gammel træ-pengekasse med åben skuffe. Den har engang passet på en købmands formue, nu passer den på vores minder.
                            </p>
</div>
</div>
</div>

<div className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer fade-in-section">
<img alt="Kähler vase" className="w-full object-cover transition-transform duration-700 group-hover:scale-105 sepia-[.1]" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-hunter/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
<div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="font-display text-2xl italic text-creme mb-2">Keramik med sjæl</p>
<p className="text-creme/80 font-light leading-relaxed">
                                Fra 1920'erne. Helt intakt. Glasuren har en dybde, man forsvinder i.
                            </p>
</div>
</div>
</div>

<div className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer fade-in-section">
<img alt="Tapet detalje" className="w-full object-cover transition-transform duration-700 group-hover:scale-105 sepia-[.1]" src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-hunter/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
<div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="font-display text-2xl italic text-creme mb-2">Væggenes hvisken</p>
<p className="text-creme/80 font-light leading-relaxed">
                                Vores tapet er ikke bare pynt, det er en stemning. Hestene galopperer lydløst gennem butikken.
                            </p>
</div>
</div>
</div>

<div className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer fade-in-section">
<img alt="Italiensk porcelæn" className="w-full object-cover transition-transform duration-700 group-hover:scale-105 sepia-[.1]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-hunter/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
<div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="font-display text-2xl italic text-creme mb-2">Jagten på det unikke</p>
<p className="text-creme/80 font-light leading-relaxed">
                                Denne figur fandt vi gemt væk på en hylde i Toscana. Nu søger den et nyt hjem.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-hunter text-creme relative overflow-hidden" id="tider">

<div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1616486029423-aaa478965c96?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">

<div className="fade-in-section flex flex-col justify-center border-r-0 md:border-r border-creme/10 pr-0 md:pr-10">
<div className="mb-8">
<i className="w-10 h-10 text-foxred mb-6 stroke-[1.5]" data-lucide="clock"></i>
<h2 className="font-serif text-4xl mb-6 tracking-tight">Åbningstider</h2>
<ul className="space-y-4 text-xl font-light">
<li className="flex justify-between border-b border-creme/10 pb-2">
<span>Fredag</span>
<span>15.00 – 18.00</span>
</li>
<li className="flex justify-between border-b border-creme/10 pb-2">
<span>Lørdag</span>
<span>10.00 – 14.00</span>
</li>
</ul>
</div>
<div className="bg-creme/5 p-6 rounded-2xl backdrop-blur-sm">
<p className="font-display italic text-xl text-brass mb-2">Besøg uden for åbningstid?</p>
<p className="font-light text-creme/80">
                        Folk er altid velkomne til at kontakte os for en personlig rundvisning. Vi elsker at åbne dørene op for nysgerrige sjæle.
                    </p>
</div>
</div>

<div className="fade-in-section">
<i className="w-10 h-10 text-foxred mb-6 stroke-[1.5]" data-lucide="map-pin"></i>
<h2 className="font-serif text-4xl mb-6 tracking-tight">Her finder du os</h2>
<p className="text-xl font-light mb-8">Nørregade 28, 5800 Nyborg</p>

<div className="w-full h-64 bg-creme/10 rounded-2xl overflow-hidden relative group shadow-inner">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2278.471649123456!2d10.7883!3d55.3129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cd93c2c2c2c2b%3A0x0!2sN%C3%B8rregade%2028%2C%205800%20Nyborg!5e0!3m2!1sda!2sdk!4v1600000000000!5m2!1sda!2sdk" style={{border: '0', filter: 'grayscale(100%) invert(92%) contrast(85%)'}} width="100%">
</iframe>
<a className="absolute inset-0 flex items-center justify-center bg-hunter/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" href="https://goo.gl/maps/xyz" target="_blank">
<span className="text-creme font-medium border-b border-foxred pb-1">Åbn i Google Maps</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-creme border-t border-hunter/5" id="kontakt">
<div className="max-w-4xl mx-auto px-6 text-center fade-in-section">
<h2 className="font-serif text-5xl text-hunter tracking-tight mb-8">Leder du efter noget særligt?</h2>
<p className="text-xl font-light text-choco/80 mb-12 max-w-2xl mx-auto">
                Som kunder siger: "Det her manglede i Nyborg." Skriv til os hvis du søger en specifik historie, eller bare vil sige hej.
            </p>
<form className="text-left space-y-6 bg-white/50 p-8 rounded-3xl shadow-soft mb-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-hunter uppercase tracking-wider">Navn</label>
<input className="w-full bg-creme/50 border border-hunter/10 rounded-xl p-4 focus:outline-none focus:border-hunter/40 transition-colors" placeholder="Dit navn" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-hunter uppercase tracking-wider">Email</label>
<input className="w-full bg-creme/50 border border-hunter/10 rounded-xl p-4 focus:outline-none focus:border-hunter/40 transition-colors" placeholder="Din email" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-hunter uppercase tracking-wider">Hvilken antik historie søger du?</label>
<textarea className="w-full bg-creme/50 border border-hunter/10 rounded-xl p-4 focus:outline-none focus:border-hunter/40 transition-colors" placeholder="Fortæl os hvad du drømmer om at finde..." rows="4"></textarea>
</div>
<button className="w-full bg-hunter text-creme py-4 rounded-xl font-medium tracking-wide hover:bg-foxred transition-colors duration-500" type="button">
                    Send Besked
                </button>
</form>
<a className="inline-flex items-center gap-2 text-foxred hover:text-brass transition-colors font-display italic text-lg mb-20" href="#">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
                Skriv en anmeldelse hvis du har besøgt os
            </a>
</div>
</section>

<footer className="bg-hunter/95 text-creme/60 py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">

<a className="font-display text-2xl italic text-creme hover:text-brass transition-colors duration-500 text-center" href="#galleri" id="randomStoryLink">
                "Intet er nyproduceret. Alt har en historie."
            </a>
<div className="flex gap-6">
<a className="hover:text-creme transition-colors p-2 rounded-full border border-white/10 hover:border-foxred hover:bg-foxred" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="hover:text-creme transition-colors p-2 rounded-full border border-white/10 hover:border-foxred hover:bg-foxred" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
</div>
<div className="text-sm font-light tracking-wider text-center">
<p>© 2025 Guldsmeden – Antik &amp; Design. CVR: XXXXXXXX.</p>
<p className="mt-2 text-xs opacity-50">Nørregade 28, 5800 Nyborg</p>
</div>
</div>
</footer>



    </>
  );
}
