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



        // Initialize Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        // Close mobile menu on link click
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        // Observe all elements with reveal classes
        document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
            observer.observe(el);
        });

        // --- Translation Logic ---
        
        const translations = {
            en: {
                nav_home: "Home",
                nav_about: "About",
                nav_services: "Services",
                nav_gallery: "Gallery",
                nav_book: "Book Appointment",
                hero_est: "Est. 2015 • Johannesburg",
                hero_title_1: "Where Style",
                hero_title_2: "Meets Precision",
                hero_desc: "Experience the resurgence of the classic gentleman. Masterful cuts, traditional hot towel shaves, and an atmosphere of refined luxury.",
                hero_cta_book: "Book Appointment",
                hero_cta_services: "View Services",
                stats_clients: "Happy Clients",
                stats_years: "Years Experience",
                stats_satisfaction: "Satisfaction",
                stats_rated: "Rated in JHB",
                about_label: "About Us",
                about_title_1: "Crafting Confidence,",
                about_title_2: "One Cut at a Time.",
                about_p1: "Founded in 2015, The Rare Barber was born from a desire to bring back the lost art of traditional barbering. We don't just cut hair; we curate an experience. Our shop is a sanctuary for the modern man to relax, unwind, and leave feeling revitalized.",
                about_p2: "Our master barbers blend time-honored techniques with contemporary styling to deliver looks that are both timeless and modern. Whether it's a fade, a taper, or a hot towel shave, perfection is our only standard.",
                award_title: "Award Winning Service",
                award_desc: "Recognized for excellence in grooming.",
                menu_label: "Our Menu",
                menu_title: "Premium Grooming Services",
                menu_subtitle: "Tailored treatments for the distinguished gentleman.",
                service_1_title: "Classic Haircut",
                service_1_desc: "Consultation, precision cut, shampoo, conditioning, and styling.",
                service_2_title: "Hot Towel Shave",
                service_2_desc: "Straight razor shave with hot towels, essential oils, and aftershave balm.",
                service_3_title: "The Rare Experience",
                service_3_desc: "The full package: Haircut, hot shave, facial massage, and beverage.",
                service_4_title: "Beard Sculpt",
                service_4_desc: "Expert shaping, trimming, and conditioning for your beard.",
                service_5_title: "Hair Design",
                service_5_desc: "Custom patterns, lines, and artistic flair added to your fade.",
                service_6_title: "Junior Gent",
                service_6_desc: "Patient, stylish cuts for the younger gentlemen (Under 12).",
                portfolio_label: "Portfolio",
                portfolio_title: "Our Masterpieces",
                portfolio_link: "View Instagram",
                testimonials_title: "Client Stories",
                contact_label: "Get In Touch",
                contact_title: "Visit The Shop",
                contact_desc: "Ready to elevate your style? Book an appointment or drop by for a consultation. Walk-ins are welcome based on availability.",
                location_title: "Location",
                hours_title: "Hours",
                hours_text: "Mon - Fri: 09:00 - 20:00Sat: 09:00 - 18:00Sun: 10:00 - 16:00",
                contact_info_title: "Contact",
                form_title: "Book Your Seat",
                form_name: "Full Name",
                form_phone: "Phone",
                form_service: "Service",
                form_service_placeholder: "Select a Service",
                form_message: "Message",
                form_submit: "Request Appointment",
                footer_desc: "Elevating the standard of male grooming. We combine traditional barbering techniques with modern style to create the ultimate look for you.",
                footer_nav: "Navigation",
                footer_legal: "Legal",
                legal_privacy: "Privacy Policy",
                legal_terms: "Terms of Service",
                legal_cookie: "Cookie Policy",
                footer_rights: "© 2025 The Rare Barber. All rights reserved.",
                footer_designed: "Designed with precision.",
                lang_target: "PL"
            },
            pl: {
                nav_home: "Strona Główna",
                nav_about: "O Nas",
                nav_services: "Usługi",
                nav_gallery: "Galeria",
                nav_book: "Umów Wizytę",
                hero_est: "Zał. 2015 • Johannesburg",
                hero_title_1: "Gdzie Styl",
                hero_title_2: "Spotyka Precyzję",
                hero_desc: "Doświadcz odrodzenia klasycznego dżentelmena. Mistrzowskie cięcia, tradycyjne golenie gorącym ręcznikiem i atmosfera wyrafinowanego luksusu.",
                hero_cta_book: "Umów Wizytę",
                hero_cta_services: "Zobacz Usługi",
                stats_clients: "Zadowolonych Klientów",
                stats_years: "Lat Doświadczenia",
                stats_satisfaction: "Satysfakcji",
                stats_rated: "Najlepszy w JHB",
                about_label: "O Nas",
                about_title_1: "Tworzymy Pewność Siebie,",
                about_title_2: "Cięcie po Cięciu.",
                about_p1: "Założony w 2015 roku, The Rare Barber narodził się z pragnienia przywrócenia zapomnianej sztuki tradycyjnego fryzjerstwa. Nie tylko strzyżemy włosy; tworzymy doświadczenie. Nasz salon to azyl dla nowoczesnego mężczyzny.",
                about_p2: "Nasi mistrzowie łączą uświęcone tradycją techniki ze współczesną stylizacją. Czy to fade, taper, czy golenie brzytwą, perfekcja jest naszym jedynym standardem.",
                award_title: "Nagradzane Usługi",
                award_desc: "Uznany za doskonałość w pielęgnacji.",
                menu_label: "Nasze Menu",
                menu_title: "Usługi Premium",
                menu_subtitle: "Zabiegi dopasowane do dżentelmena.",
                service_1_title: "Klasyczne Strzyżenie",
                service_1_desc: "Konsultacja, precyzyjne cięcie, mycie, odżywianie i stylizacja.",
                service_2_title: "Golenie Brzytwą",
                service_2_desc: "Golenie brzytwą z gorącymi ręcznikami, olejkami eterycznymi i balsamem.",
                service_3_title: "The Rare Experience",
                service_3_desc: "Pełen pakiet: Strzyżenie, golenie, masaż twarzy i napój.",
                service_4_title: "Modelowanie Brody",
                service_4_desc: "Eksperckie kształtowanie, przycinanie i pielęgnacja brody.",
                service_5_title: "Wzory na Włosach",
                service_5_desc: "Niestandardowe wzory, linie i artystyczny polot dodane do twojego fade'a.",
                service_6_title: "Młody Dżentelmen",
                service_6_desc: "Cierpliwe, stylowe cięcia dla młodszych dżentelmenów (Poniżej 12 lat).",
                portfolio_label: "Portfolio",
                portfolio_title: "Nasze Arcydzieła",
                portfolio_link: "Zobacz Instagram",
                testimonials_title: "Historie Klientów",
                contact_label: "Kontakt",
                contact_title: "Odwiedź Nas",
                contact_desc: "Gotowy na zmianę stylu? Umów wizytę lub wpadnij na konsultację.",
                location_title: "Lokalizacja",
                hours_title: "Godziny",
                hours_text: "Pon - Pt: 09:00 - 20:00Sob: 09:00 - 18:00Niedz: 10:00 - 16:00",
                contact_info_title: "Kontakt",
                form_title: "Zarezerwuj Fotel",
                form_name: "Imię i Nazwisko",
                form_phone: "Telefon",
                form_service: "Usługa",
                form_service_placeholder: "Wybierz Usługę",
                form_message: "Wiadomość",
                form_submit: "Wyślij Prośbę",
                footer_desc: "Podnosimy standard męskiej pielęgnacji. Łączymy tradycyjne techniki z nowoczesnym stylem.",
                footer_nav: "Nawigacja",
                footer_legal: "Prawne",
                legal_privacy: "Polityka Prywatności",
                legal_terms: "Regulamin",
                legal_cookie: "Pliki Cookie",
                footer_rights: "© 2025 The Rare Barber. Wszelkie prawa zastrzeżone.",
                footer_designed: "Zaprojektowane z precyzją.",
                lang_target: "EN"
            }
        };

        let currentLang = 'en';
        
        const langToggleDesktop = document.getElementById('langToggleDesktop');
        const langToggleMobile = document.getElementById('langToggleMobile');
        const langLabelDesktop = document.getElementById('langLabelDesktop');
        const langLabelMobile = document.getElementById('langLabelMobile');

        function updateLanguage(lang) {
            currentLang = lang;
            
            // Update Text Content
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang][key]) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = translations[lang][key]; // For inputs usually placeholder is translated
                    } else if (element.tagName === 'OPTION') {
                         element.text = translations[lang][key];
                    } else {
                        element.innerText = translations[lang][key];
                    }
                }
            });

            // Update Button Labels (Show the OTHER language to switch to)
            const targetLangLabel = translations[lang].lang_target;
            langLabelDesktop.innerText = targetLangLabel;
            langLabelMobile.innerText = targetLangLabel;
        }

        function toggleLanguage() {
            const newLang = currentLang === 'en' ? 'pl' : 'en';
            updateLanguage(newLang);
        }

        langToggleDesktop.addEventListener('click', toggleLanguage);
        langToggleMobile.addEventListener('click', toggleLanguage);

    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="serif text-xl tracking-tight text-white flex items-center gap-2 group" href="#">
<span className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-neutral-950 font-bold text-xs group-hover:scale-110 transition-transform duration-500">R</span>
<span className="">THE RARE BARBER</span>
</a>

<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" data-i18n="nav_home" href="#home">Home</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" data-i18n="nav_about" href="#about">About</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" data-i18n="nav_services" href="#services">Services</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" data-i18n="nav_gallery" href="#gallery">Gallery</a>

<button className="hover:text-white transition-colors flex gap-1 hover:border-neutral-600 text-xs font-medium text-neutral-400 border-neutral-800 border rounded pt-1 pr-2 pb-1 pl-2 gap-x-1 gap-y-1 items-center" id="langToggleDesktop">
<svg className="lucide lucide-languages" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="m5 8 6 6"></path><path className="" d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path className="" d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
<span id="langLabelDesktop">PL</span>
</button>

<a className="group relative rounded-full p-[1px] bg-gradient-to-b from-neutral-700 to-neutral-800 hover:from-amber-500 hover:to-amber-700 transition-all duration-300" href="#contact">
<div className="relative px-5 py-2 bg-neutral-950 rounded-full h-full w-full flex items-center justify-center">
<span className="text-xs font-medium text-white tracking-wide group-hover:text-amber-500 transition-colors" data-i18n="nav_book">Book Appointment</span>
</div>
</a>
</div>

<div className="flex items-center gap-4 md:hidden">

<button className="text-xs font-medium text-neutral-400 hover:text-white transition-colors border border-neutral-800 rounded px-2 py-1" id="langToggleMobile">
<span id="langLabelMobile">PL</span>
</button>

<button className="text-white p-2" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="hidden absolute top-20 left-0 right-0 bg-neutral-950 border-b border-neutral-800 p-6 flex-col gap-4 shadow-2xl transition-all duration-300 origin-top" id="mobileMenu">
<a className="text-sm text-neutral-300 py-2 block" data-i18n="nav_home" href="#home">Home</a>
<a className="text-sm text-neutral-300 py-2 block" data-i18n="nav_about" href="#about">About</a>
<a className="text-sm text-neutral-300 py-2 block" data-i18n="nav_services" href="#services">Services</a>
<a className="text-sm text-neutral-300 py-2 block" data-i18n="nav_gallery" href="#gallery">Gallery</a>
<a className="text-sm text-amber-500 font-medium py-2 block" data-i18n="nav_book" href="#contact">Book Appointment</a>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden pt-20 relative items-center justify-center" id="home">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-neutral-950/80 z-10"></div>
<div className="bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Barbershop Atmosphere" className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c501a715-6e2f-46c5-9230-8b822c65569b_3840w.jpg" style={{}}/>
</div>
<div className="relative z-20 container max-w-5xl mx-auto px-6 text-center">
<div className="reveal-up revealed">
<div className="inline-flex gap-2 bg-neutral-900/50 border-neutral-800 border rounded-full mb-8 pt-1.5 pr-3.5 pb-1.5 pl-3.5 backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
<span className="text-[10px] uppercase font-medium text-neutral-300 tracking-widest" data-i18n="hero_est">Est. 2015 • Johannesburg</span>
</div>
</div>
<h1 className="reveal-up delay-100 text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-8 tracking-tighter leading-[0.9] revealed">
<span data-i18n="hero_title_1">Where Style</span> <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 italic pr-2" data-i18n="hero_title_2">Meets Precision</span>
</h1>
<p className="reveal-up delay-200 text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed revealed" data-i18n="hero_desc">Experience the resurgence of the classic gentleman. Masterful cuts, traditional hot towel shaves, and an atmosphere of refined luxury.</p>
<div className="reveal-up delay-300 flex flex-col sm:flex-row gap-4 revealed gap-x-4 gap-y-4 items-center justify-center">

<a className="w-full sm:w-auto group relative rounded-lg p-[1px] bg-gradient-to-b from-amber-400 to-amber-600 shadow-[0_0_20px_-5px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.5)] transition-all duration-300" href="#contact">
<div className="relative px-8 py-3.5 bg-neutral-950/10 rounded-lg h-full w-full flex items-center justify-center">
<span className="text-sm font-semibold text-neutral-950 group-hover:text-white transition-colors" data-i18n="hero_cta_book">Book Appointment</span>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-amber-400 to-amber-600 rounded-lg opacity-100 group-hover:opacity-100 -z-10"></div>
</a>

<a className="w-full sm:w-auto group relative rounded-lg p-[1px] bg-gradient-to-b from-neutral-800 to-neutral-800 hover:from-neutral-700 hover:to-neutral-600 transition-all duration-300" href="#services">
<div className="relative px-8 py-3.5 bg-neutral-950 rounded-lg h-full w-full flex items-center justify-center">
<span className="text-sm font-medium text-white" data-i18n="hero_cta_services">View Services</span>
</div>
</a>
</div>
</div>
</section>

<div className="border-y border-neutral-900 bg-neutral-950/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center reveal-up delay-100">
<span className="serif text-3xl font-medium text-white">5k+</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider mt-1" data-i18n="stats_clients">Happy Clients</span>
</div>
<div className="flex flex-col items-center text-center reveal-up delay-200">
<span className="serif text-3xl font-medium text-white">10+</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider mt-1" data-i18n="stats_years">Years Experience</span>
</div>
<div className="flex flex-col items-center text-center reveal-up delay-300">
<span className="serif text-3xl font-medium text-white">100%</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider mt-1" data-i18n="stats_satisfaction">Satisfaction</span>
</div>
<div className="flex flex-col items-center text-center reveal-up delay-300">
<span className="serif text-3xl font-medium text-white">Top</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider mt-1" data-i18n="stats_rated">Rated in JHB</span>
</div>
</div>
</div>

<section className="py-24 md:py-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="relative grid grid-cols-2 gap-4 reveal-left">
<div className="space-y-4 mt-8">
<div className="aspect-[3/4] rounded-2xl overflow-hidden p-[1px] bg-gradient-to-b from-neutral-800 to-transparent">
<img alt="Barber cutting hair" className="hover:opacity-100 transition-opacity duration-500 opacity-80 w-full h-full object-cover rounded-2xl" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&amp;w=800&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
</div>
<div className="space-y-4">
<div className="aspect-[3/4] rounded-2xl overflow-hidden p-[1px] bg-gradient-to-b from-neutral-800 to-transparent">
<img alt="Beard trim" className="w-full h-full object-cover rounded-2xl opacity-80 hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-600/20 blur-[100px] rounded-full -z-10"></div>
</div>

<div className="reveal-right">
<div className="inline-flex items-center gap-2 mb-6">
<span className="h-[1px] w-8 bg-amber-500"></span>
<span className="text-amber-500 text-xs font-semibold uppercase tracking-widest" data-i18n="about_label">About Us</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-tight">
<span data-i18n="about_title_1">Crafting Confidence,</span> <br/>
<span className="italic text-neutral-400" data-i18n="about_title_2">One Cut at a Time.</span>
</h2>
<p className="text-neutral-400 mb-6 leading-relaxed" data-i18n="about_p1">Founded in 2015, The Rare Barber was born from a desire to bring back the lost art of traditional barbering. We don't just cut hair; we curate an experience. Our shop is a sanctuary for the modern man to relax, unwind, and leave feeling revitalized.</p>
<p className="text-neutral-400 mb-8 leading-relaxed" data-i18n="about_p2">Our master barbers blend time-honored techniques with contemporary styling to deliver looks that are both timeless and modern. Whether it's a fade, a taper, or a hot towel shave, perfection is our only standard.</p>
<div className="flex items-center gap-4">
<div className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-amber-500">
<svg className="lucide lucide-award w-6 h-6" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<div>
<p className="text-white font-medium" data-i18n="award_title">Award Winning Service</p>
<p className="text-xs text-neutral-500" data-i18n="award_desc">Recognized for excellence in grooming.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 relative" id="services">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20 reveal-up">
<span className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-3 block" data-i18n="menu_label">Our Menu</span>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight" data-i18n="menu_title">Premium Grooming Services</h2>
<p className="text-neutral-400 mt-4 font-light" data-i18n="menu_subtitle">Tailored treatments for the distinguished gentleman.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group reveal-scale delay-100">
<div className="h-full p-[1px] rounded-2xl bg-gradient-to-b from-neutral-800 to-neutral-900 hover:from-amber-500/50 hover:to-amber-900/10 transition-colors duration-500">
<div className="relative h-full bg-neutral-950 rounded-2xl p-8 overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[60px] rounded-full translate-x-10 -translate-y-10 group-hover:bg-amber-500/20 transition-all duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-amber-500/30 transition-colors">
<svg className="lucide lucide-scissors w-6 h-6 text-white group-hover:text-amber-500 transition-colors" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2" data-i18n="service_1_title">Classic Haircut</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed" data-i18n="service_1_desc">Consultation, precision cut, shampoo, conditioning, and styling.</p>
<div className="flex items-center justify-between pt-6 border-t border-neutral-900">
<span className="text-amber-500 font-semibold">R150</span>
<span className="text-xs text-neutral-500">45 Min</span>
</div>
</div>
</div>
</div>

<div className="group reveal-scale delay-200">
<div className="h-full p-[1px] rounded-2xl bg-gradient-to-b from-neutral-800 to-neutral-900 hover:from-amber-500/50 hover:to-amber-900/10 transition-colors duration-500">
<div className="relative h-full bg-neutral-950 rounded-2xl p-8 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[60px] rounded-full translate-x-10 -translate-y-10 group-hover:bg-amber-500/20 transition-all duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-amber-500/30 transition-colors">
<svg className="lucide lucide-sparkles w-6 h-6 text-white group-hover:text-amber-500 transition-colors" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2" data-i18n="service_2_title">Hot Towel Shave</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed" data-i18n="service_2_desc">Straight razor shave with hot towels, essential oils, and aftershave balm.</p>
<div className="flex items-center justify-between pt-6 border-t border-neutral-900">
<span className="text-amber-500 font-semibold">R200</span>
<span className="text-xs text-neutral-500">60 Min</span>
</div>
</div>
</div>
</div>

<div className="group reveal-scale delay-300">
<div className="h-full p-[1px] rounded-2xl bg-gradient-to-b from-neutral-800 to-neutral-900 hover:from-amber-500/50 hover:to-amber-900/10 transition-colors duration-500">
<div className="relative h-full bg-neutral-950 rounded-2xl p-8 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[60px] rounded-full translate-x-10 -translate-y-10 group-hover:bg-amber-500/20 transition-all duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-amber-500/30 transition-colors">
<svg className="lucide lucide-crown w-6 h-6 text-white group-hover:text-amber-500 transition-colors" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2" data-i18n="service_3_title">The Rare Experience</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed" data-i18n="service_3_desc">The full package: Haircut, hot shave, facial massage, and beverage.</p>
<div className="flex items-center justify-between pt-6 border-t border-neutral-900">
<span className="text-amber-500 font-semibold">R450</span>
<span className="text-xs text-neutral-500">90 Min</span>
</div>
</div>
</div>
</div>

<div className="group reveal-scale delay-100">
<div className="h-full p-[1px] rounded-2xl bg-gradient-to-b from-neutral-800 to-neutral-900 hover:from-amber-500/50 hover:to-amber-900/10 transition-colors duration-500">
<div className="relative h-full bg-neutral-950 rounded-2xl p-8 overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-amber-500/30 transition-colors">
<svg className="lucide lucide-user w-6 h-6 text-white group-hover:text-amber-500 transition-colors" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2" data-i18n="service_4_title">Beard Sculpt</h3>
<p className="text-sm text-neutral-400 mb-6" data-i18n="service_4_desc">Expert shaping, trimming, and conditioning for your beard.</p>
<div className="flex items-center justify-between pt-6 border-t border-neutral-900">
<span className="text-amber-500 font-semibold">R100</span>
<span className="text-xs text-neutral-500">30 Min</span>
</div>
</div>
</div>
</div>
<div className="group reveal-scale delay-200">
<div className="h-full p-[1px] rounded-2xl bg-gradient-to-b from-neutral-800 to-neutral-900 hover:from-amber-500/50 hover:to-amber-900/10 transition-colors duration-500">
<div className="relative h-full bg-neutral-950 rounded-2xl p-8 overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-amber-500/30 transition-colors">
<svg className="lucide lucide-zap w-6 h-6 text-white group-hover:text-amber-500 transition-colors" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2" data-i18n="service_5_title">Hair Design</h3>
<p className="text-sm text-neutral-400 mb-6" data-i18n="service_5_desc">Custom patterns, lines, and artistic flair added to your fade.</p>
<div className="flex items-center justify-between pt-6 border-t border-neutral-900">
<span className="text-amber-500 font-semibold">R250+</span>
<span className="text-xs text-neutral-500">60 Min</span>
</div>
</div>
</div>
</div>
<div className="group reveal-scale delay-300">
<div className="h-full p-[1px] rounded-2xl bg-gradient-to-b from-neutral-800 to-neutral-900 hover:from-amber-500/50 hover:to-amber-900/10 transition-colors duration-500">
<div className="relative h-full bg-neutral-950 rounded-2xl p-8 overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-amber-500/30 transition-colors">
<svg className="lucide lucide-smile w-6 h-6 text-white group-hover:text-amber-500 transition-colors" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2" data-i18n="service_6_title">Junior Gent</h3>
<p className="text-sm text-neutral-400 mb-6" data-i18n="service_6_desc">Patient, stylish cuts for the younger gentlemen (Under 12).</p>
<div className="flex items-center justify-between pt-6 border-t border-neutral-900">
<span className="text-amber-500 font-semibold">R100</span>
<span className="text-xs text-neutral-500">30 Min</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-up">
<div>
<span className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-3 block" data-i18n="portfolio_label">Portfolio</span>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight" data-i18n="portfolio_title">Our Masterpieces</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mt-4 md:mt-0" href="#">
<span data-i18n="portfolio_link">View Instagram</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
<div className="col-span-2 md:col-span-1 row-span-2 relative group overflow-hidden rounded-xl reveal-scale delay-100 p-[1px] bg-neutral-800">
<img alt="Cut 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium text-sm">Sharp Fade</span>
</div>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl reveal-scale delay-200 p-[1px] bg-neutral-800">
<img alt="Cut 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl" src="https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?q=80&amp;w=800&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="col-span-1 md:col-span-2 row-span-1 relative group overflow-hidden rounded-xl reveal-scale delay-300 p-[1px] bg-neutral-800">
<img alt="Cut 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl" src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl reveal-scale delay-100 p-[1px] bg-neutral-800">
<img alt="Cut 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" style={{}}/>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl reveal-scale delay-200 p-[1px] bg-neutral-800">
<img alt="Cut 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl reveal-scale delay-300 p-[1px] bg-neutral-800">
<img alt="Cut 6" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl" src="https://images.unsplash.com/photo-1520338661084-680395057c93?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-y border-neutral-900/50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium text-center text-white mb-16 reveal-up tracking-tight" data-i18n="testimonials_title">Client Stories</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="reveal-up delay-100 p-[1px] rounded-2xl bg-gradient-to-br from-neutral-800 to-transparent">
<div className="bg-neutral-950 p-8 rounded-2xl h-full flex flex-col">
<div className="flex gap-1 text-amber-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-400 mb-6 text-sm leading-relaxed flex-grow">"Unmatched attention to detail. The Rare Barber isn't just a haircut, it's a reset button for my week. Best fade in Sandton."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">TM</div>
<div>
<p className="text-xs font-semibold text-white">Thabo Mokoena</p>
<p className="text-[10px] text-neutral-500 uppercase">Regular</p>
</div>
</div>
</div>
</div>

<div className="reveal-up delay-200 p-[1px] rounded-2xl bg-gradient-to-br from-neutral-800 to-transparent">
<div className="bg-neutral-950 p-8 rounded-2xl h-full flex flex-col">
<div className="flex gap-1 text-amber-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-400 mb-6 text-sm leading-relaxed flex-grow">"I flew in from Cape Town and needed a trim before a meeting. The hot towel shave was incredible. Professionalism at its peak."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">JD</div>
<div>
<p className="text-xs font-semibold text-white">Jason Davis</p>
<p className="text-[10px] text-neutral-500 uppercase">Visitor</p>
</div>
</div>
</div>
</div>

<div className="reveal-up delay-300 p-[1px] rounded-2xl bg-gradient-to-br from-neutral-800 to-transparent">
<div className="bg-neutral-950 p-8 rounded-2xl h-full flex flex-col">
<div className="flex gap-1 text-amber-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-400 mb-6 text-sm leading-relaxed flex-grow">"The vibe is chill, the music is good, and the barbers are true artists. I trust no one else with my beard."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">SN</div>
<div>
<p className="text-xs font-semibold text-white">Sipho Ndlovu</p>
<p className="text-[10px] text-neutral-500 uppercase">VIP Member</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16">

<div className="reveal-left">
<span className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-3 block" data-i18n="contact_label">Get In Touch</span>
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight" data-i18n="contact_title">Visit The Shop</h2>
<p className="text-neutral-400 mb-10 leading-relaxed" data-i18n="contact_desc">Ready to elevate your style? Book an appointment or drop by for a consultation. Walk-ins are welcome based on availability.</p>
<div className="space-y-8">
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 group-hover:border-amber-500/50 transition-colors">
<svg className="lucide lucide-map-pin w-5 h-5 text-neutral-400 group-hover:text-amber-500 transition-colors" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="">
<h4 className="text-white font-medium mb-1" data-i18n="location_title">Location</h4>
<p className="text-sm text-neutral-500" style={{}}>123 Nelson Mandela Drive, Suite 100Sandton, Johannesburg 2196</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 group-hover:border-amber-500/50 transition-colors">
<svg className="lucide lucide-clock w-5 h-5 text-neutral-400 group-hover:text-amber-500 transition-colors" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="">
<h4 className="font-medium text-white mb-1" data-i18n="hours_title">Hours</h4>
<p className="text-sm text-neutral-500" data-i18n="hours_text">Mon - Fri: 09:00 - 20:00Sat: 09:00 - 18:00Sun: 10:00 - 16:00</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 group-hover:border-amber-500/50 transition-colors">
<svg className="lucide lucide-phone w-5 h-5 text-neutral-400 group-hover:text-amber-500 transition-colors" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<h4 className="text-white font-medium mb-1" data-i18n="contact_info_title">Contact</h4>
<p className="text-sm text-neutral-500">011 123 4567hello@therarebarber.co.za</p>
</div>
</div>
</div>
</div>

<div className="reveal-right">
<div className="p-[1px] rounded-2xl bg-gradient-to-b from-neutral-800 to-transparent">
<div className="bg-neutral-950 p-8 rounded-2xl">
<h3 className="text-2xl font-medium text-white mb-6" data-i18n="form_title">Book Your Seat</h3>
<form className="space-y-5">
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-medium ml-1" data-i18n="form_name">Full Name</label>
<input className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-white placeholder-neutral-700 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-medium ml-1">Email</label>
<input className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-white placeholder-neutral-700 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-medium ml-1" data-i18n="form_phone">Phone</label>
<input className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-white placeholder-neutral-700 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all" placeholder="082 123 4567" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-medium ml-1" data-i18n="form_service">Service</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-white appearance-none cursor-pointer focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all">
<option data-i18n="form_service_placeholder" value="">Select a Service</option>
<option value="haircut">Classic Haircut</option>
<option value="shave">Hot Towel Shave</option>
<option value="beard">Beard Trim</option>
<option value="full">Rare Experience</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-medium ml-1" data-i18n="form_message">Message</label>
<textarea className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-white placeholder-neutral-700 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all resize-none" placeholder="Any specific requests?" rows="3"></textarea>
</div>
<button className="w-full group relative rounded-lg p-[1px] bg-gradient-to-r from-amber-500 to-amber-600 hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] transition-all duration-300 mt-4" type="submit">
<div className="relative px-6 py-3.5 bg-neutral-950/10 rounded-lg h-full w-full flex items-center justify-center">
<span className="text-sm font-semibold text-neutral-950 group-hover:text-white transition-colors" data-i18n="form_submit">Request Appointment</span>
</div>
<div className="absolute inset-0 bg-amber-500 rounded-lg -z-10"></div>
</button>
</form>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="serif text-2xl font-bold tracking-tight text-white mb-6 block" href="#">
                        THE RARE BARBER
                    </a>
<p className="text-neutral-500 text-sm max-w-sm mb-6 leading-relaxed" data-i18n="footer_desc">Elevating the standard of male grooming. We combine traditional barbering techniques with modern style to create the ultimate look for you.</p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-amber-500 transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-neutral-400 hover:text-amber-500 transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-neutral-400 hover:text-amber-500 transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4" data-i18n="footer_nav">Navigation</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-amber-500 transition-colors" data-i18n="nav_home" href="#home">Home</a></li>
<li><a className="hover:text-amber-500 transition-colors" data-i18n="nav_about" href="#about">About</a></li>
<li><a className="hover:text-amber-500 transition-colors" data-i18n="nav_services" href="#services">Services</a></li>
<li><a className="hover:text-amber-500 transition-colors" data-i18n="nav_gallery" href="#gallery">Gallery</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4" data-i18n="footer_legal">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-amber-500 transition-colors" data-i18n="legal_privacy" href="#">Privacy Policy</a></li>
<li><a className="hover:text-amber-500 transition-colors" data-i18n="legal_terms" href="#">Terms of Service</a></li>
<li><a className="hover:text-amber-500 transition-colors" data-i18n="legal_cookie" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
<p data-i18n="footer_rights">© 2025 The Rare Barber. All rights reserved.</p>
<p data-i18n="footer_designed">Designed with precision.</p>
</div>
</div>
</footer>


    </>
  );
}
