import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // FormSubmit AJAX Handler
        function handleFormSubmit(event) {
            event.preventDefault();
            const form = event.target;
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            
            // Show loading state
            submitBtn.innerText = 'Bezig met verzenden...';
            submitBtn.disabled = true;

            const formData = new FormData(form);
            
            fetch("https://formsubmit.co/ajax/yuribrand212@gmail.com", {
                method: "POST",
                headers: { 
                    'Accept': 'application/json'
                },
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if(data.success) {
                    alert("Bedankt! Uw bericht is succesvol verzonden. Wij nemen zo snel mogelijk contact op.");
                    form.reset();
                } else {
                    alert("Er is helaas iets misgegaan. Controleer uw verbinding of probeer het later opnieuw.");
                }
            })
            .catch(error => {
                alert("Er is helaas iets misgegaan. Controleer uw verbinding of probeer het later opnieuw.");
            })
            .finally(() => {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            });
        }

        // SPA Router
        function handleNavigation() {
            const hash = window.location.hash || '#home';
            
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.add('hidden');
            });
            
            // Show target section
            const targetSection = document.querySelector(hash);
            if(targetSection) {
                targetSection.classList.remove('hidden');
                // Scroll to top on page change, but smooth scroll for same page anchors (handled by CSS)
                window.scrollTo(0,0);
            }

            // Update active state in nav
            document.querySelectorAll('nav a.nav-link').forEach(link => {
                // Keep base classes
                link.className = 'nav-link text-sm font-semibold transition-colors';
                // Add active or inactive classes
                if(link.getAttribute('href') === hash) {
                    link.classList.add('text-[#000000]');
                } else {
                    link.classList.add('text-[#555555]', 'hover:text-[#000000]');
                }
            });

            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');

            // Re-trigger animations for the new page
            observeAnimations();
        }

        window.addEventListener('hashchange', handleNavigation);
        window.addEventListener('DOMContentLoaded', handleNavigation);

        // Mobile Menu Toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', () => {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });

        // Sticky Navbar Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm');
                nav.classList.replace('border-transparent', 'border-gray-100');
            } else {
                nav.classList.remove('shadow-sm');
                nav.classList.replace('border-gray-100', 'border-transparent');
            }
        });

        // Intersection Observer for fade-in animations
        function observeAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Optional: stop observing once animated
                        // observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            });

            // Re-select all elements with fade-in-up class that are currently visible on page
            const visibleSections = document.querySelectorAll('.page-section:not(.hidden) .fade-in-up');
            visibleSections.forEach(el => {
                // Reset visibility for re-animation if needed
                el.classList.remove('is-visible');
                observer.observe(el);
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-transparent transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group nav-link" href="#home">
<span className="text-xl font-semibold text-[#1D65D1] tracking-tight group-hover:opacity-80 transition-opacity">
                    Brandschoon
                </span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="nav-link text-sm font-semibold text-[#555555] hover:text-[#000000] transition-colors" href="#home">Home</a>
<a className="nav-link text-sm font-semibold text-[#555555] hover:text-[#000000] transition-colors" href="#diensten">Diensten</a>
<a className="nav-link text-sm font-semibold text-[#555555] hover:text-[#000000] transition-colors" href="#testimonials">Testimonials</a>
<a className="nav-link text-sm font-semibold text-[#555555] hover:text-[#000000] transition-colors" href="#over-ons">Over Ons</a>
<a className="nav-link text-sm font-semibold text-[#555555] hover:text-[#000000] transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden md:block">
<a className="nav-link inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#000000] bg-[#FAD26E] rounded-full hover:bg-[#f5c64c] transition-colors shadow-sm" href="#offerte">
                    Gratis Offerte Aanvragen
                </a>
</div>

<button className="md:hidden text-[#000000] p-2" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden bg-white border-b border-gray-100 absolute w-full left-0 top-20 shadow-lg" id="mobile-menu">
<div className="flex flex-col px-6 py-4 gap-4">
<a className="nav-link text-base font-semibold text-[#000000] py-2 border-b border-gray-50" href="#home">Home</a>
<a className="nav-link text-base font-semibold text-[#000000] py-2 border-b border-gray-50" href="#diensten">Diensten</a>
<a className="nav-link text-base font-semibold text-[#000000] py-2 border-b border-gray-50" href="#testimonials">Testimonials</a>
<a className="nav-link text-base font-semibold text-[#000000] py-2 border-b border-gray-50" href="#over-ons">Over Ons</a>
<a className="nav-link text-base font-semibold text-[#000000] py-2 border-b border-gray-50" href="#contact">Contact</a>
<a className="nav-link mt-2 inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-[#000000] bg-[#FAD26E] rounded-xl text-center" href="#offerte">
                    Gratis Offerte Aanvragen
                </a>
</div>
</div>
</header>

<main className="flex-grow pt-20">

<div className="page-section" id="home">

<section className="relative bg-[#1D65D1] overflow-hidden">
<img alt="Cleaning Services" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20 object-center" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 fade-in-up">
<h1 className="text-4xl lg:text-5xl font-semibold text-[#FFFFFF] tracking-tight leading-tight mb-6">
                            Professionele reiniging voor panden in regio Noord-Holland
                        </h1>
<p className="text-lg text-blue-100 mb-8 max-w-xl">
                            Wij leveren stipt, professioneel en transparant vakwerk in het reinigen van glas, zonnepanelen, bekleding en buitenoppervlakken.
                        </p>
<div className="flex items-center gap-4 text-sm text-white font-semibold">
<span className="flex items-center gap-2"><iconify-icon className="text-[#FAD26E] text-xl" icon="solar:check-circle-linear"></iconify-icon> Geen onverwachte kosten</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#FAD26E] text-xl" icon="solar:check-circle-linear"></iconify-icon> Altijd op tijd</span>
</div>
</div>

<div className="w-full lg:w-1/2 max-w-md fade-in-up" style={{transitionDelay: '200ms'}}>
<div className="bg-white rounded-2xl p-8 shadow-2xl">
<h3 className="text-xl font-semibold text-[#000000] tracking-tight mb-2">Direct een prijsindicatie?</h3>
<p className="text-sm text-[#555555] mb-6">Vul in en ontvang binnen 24 uur een offerte.</p>
<form className="space-y-4" onsubmit="handleFormSubmit(event)">
<input name="_subject" type="hidden" value="Nieuwe aanvraag via de Homepage"/>
<div>
<input name="naam" placeholder="Uw naam" required="" type="text"/>
</div>
<div>
<input name="email" placeholder="E-mailadres" required="" type="email"/>
</div>
<div>
<input name="telefoon" placeholder="Telefoonnummer" type="tel"/>
</div>
<div>
<select className="text-[#555555]" name="dienst" required="">
<option disabled="" selected="" value="">Selecteer een dienst...</option>
<option value="glasbewassing">Glasbewassing</option>
<option value="bekleding">Bekleding reiniging</option>
<option value="zonnepanelen">Zonnepanelen reiniging</option>
<option value="buiten">Buitenoppervlakken</option>
</select>
</div>
<button className="w-full bg-[#FAD26E] text-[#000000] font-semibold py-3 px-4 rounded-xl hover:bg-[#f5c64c] transition-colors shadow-sm" type="submit">
                                    Vraag gratis offerte aan
                                </button>
</form>
</div>
</div>
</div>
</section>

<section className="bg-[#EDF3FC] py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 fade-in-up">
<h2 className="text-3xl font-semibold text-[#000000] tracking-tight mb-4">Hoe het werkt</h2>
<p className="text-base">In drie simpele stappen een brandschoon pand, zonder gedoe.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 fade-in-up transition-transform hover:-translate-y-1 duration-300">
<div className="w-12 h-12 bg-blue-50 text-[#1D65D1] rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:clipboard-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#000000] tracking-tight mb-3">1. Neem contact op</h3>
<p className="text-sm">Vul het contactformulier in en ontvang binnen 24 uur reactie van ons team.</p>
</div>
<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 fade-in-up transition-transform hover:-translate-y-1 duration-300" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-blue-50 text-[#1D65D1] rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#000000] tracking-tight mb-3">2. Offerte op maat</h3>
<p className="text-sm">Wij maken een heldere offerte op maat, zonder verborgen kosten, en nemen contact op.</p>
</div>
<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 fade-in-up transition-transform hover:-translate-y-1 duration-300" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-blue-50 text-[#1D65D1] rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:buildings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#000000] tracking-tight mb-3">3. Uw pand Brandschoon</h3>
<p className="text-sm">We plannen een afspraak in wanneer het u uitkomt en maken uw pand weer brandschoon.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 fade-in-up gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold text-[#000000] tracking-tight mb-4">Onze Diensten</h2>
<p className="text-base">Gespecialiseerd in het reinigen en onderhouden van diverse oppervlakken voor een perfecte uitstraling van uw pand.</p>
</div>
<a className="nav-link text-sm font-semibold text-[#1D65D1] flex items-center gap-1 hover:gap-2 transition-all" href="#diensten">
                            Bekijk alle diensten <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<a className="nav-link group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 fade-in-up flex flex-col h-full" href="#dienst-glasbewassing">
<div className="w-12 h-12 bg-[#EDF3FC] text-[#1D65D1] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1D65D1] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:window-frame-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#000000] tracking-tight mb-3">Glasbewassing</h3>
<p className="text-sm mb-6 flex-grow">Streeploos schone ramen, zowel binnen als buiten. Ook voor moeilijk bereikbare plekken.</p>
<span className="text-sm font-semibold text-[#1D65D1] flex items-center gap-1 group-hover:gap-2 transition-all">Meer info <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>

<a className="nav-link group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 fade-in-up flex flex-col h-full" href="#dienst-bekleding" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-[#EDF3FC] text-[#1D65D1] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1D65D1] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:armchair-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#000000] tracking-tight mb-3">Bekleding</h3>
<p className="text-sm mb-6 flex-grow">Dieptereiniging (deepcleaning) van stoelen, banken en tapijten voor een hygiënische uitstraling.</p>
<span className="text-sm font-semibold text-[#1D65D1] flex items-center gap-1 group-hover:gap-2 transition-all">Meer info <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>

<a className="nav-link group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 fade-in-up flex flex-col h-full" href="#dienst-zonnepanelen">
<div className="w-12 h-12 bg-[#EDF3FC] text-[#1D65D1] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1D65D1] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:solar-panel-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#000000] tracking-tight mb-3">Zonnepanelen</h3>
<p className="text-sm mb-6 flex-grow">Grondige reiniging om het maximale rendement uit uw installatie te halen.</p>
<span className="text-sm font-semibold text-[#1D65D1] flex items-center gap-1 group-hover:gap-2 transition-all">Meer info <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>

<a className="nav-link group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 fade-in-up flex flex-col h-full" href="#dienst-buitenoppervlakken" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-[#EDF3FC] text-[#1D65D1] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1D65D1] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:home-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#000000] tracking-tight mb-3">Buitenoppervlakken</h3>
<p className="text-sm mb-6 flex-grow">Professionele hogedrukreiniging van terrassen, bestrating en gevels.</p>
<span className="text-sm font-semibold text-[#1D65D1] flex items-center gap-1 group-hover:gap-2 transition-all">Meer info <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
</div>
</div>
</section>

<section className="bg-[#1D65D1] py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-400/30">
<div className="fade-in-up py-4 md:py-0 px-4">
<iconify-icon className="text-[#FAD26E] text-3xl mb-4" icon="solar:wallet-money-linear"></iconify-icon>
<p className="text-white font-semibold text-lg tracking-tight">Geen onverwachte kosten</p>
</div>
<div className="fade-in-up py-4 md:py-0 px-4" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-[#FAD26E] text-3xl mb-4" icon="solar:shield-check-linear"></iconify-icon>
<p className="text-white font-semibold text-lg tracking-tight">Gegarandeerd Brandschoon</p>
</div>
<div className="fade-in-up py-4 md:py-0 px-4" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-[#FAD26E] text-3xl mb-4" icon="solar:graph-up-linear"></iconify-icon>
<p className="text-white font-semibold text-lg tracking-tight">Tot 25% extra rendement zonnepanelen</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 fade-in-up">
<img alt="Team at work" className="rounded-2xl shadow-lg object-cover w-full h-[500px]" src="https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&amp;w=2187&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full lg:w-1/2 fade-in-up">
<h2 className="text-3xl font-semibold text-[#000000] tracking-tight mb-6">Ontstaan uit de wens voor betrouwbaarheid</h2>
<p className="text-base mb-6 leading-relaxed">
                            Opgericht door Dimitri Brand, is Brandschoon Reiniging ontstaan zoals veel andere bedrijven: uit een frustratie. Hij ervaarde keer op keer hoe onbetrouwbare schoonmaakdiensten je in de steek lieten en besloot dat het anders moest.
                        </p>
<p className="text-base mb-8 leading-relaxed">
                            Altijd op tijd, altijd transparant en altijd professioneel. Wij doen wat we beloven, zonder verborgen kosten. Zo ziet uw pand er altijd Brandschoon uit!
                        </p>
<a className="nav-link inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#1D65D1] rounded-xl hover:bg-blue-700 transition-colors" href="#over-ons">
                            Lees meer over ons
                        </a>
</div>
</div>
</section>

<section className="bg-[#FAD26E] py-20 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 pattern-dots text-black"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 fade-in-up">
<h2 className="text-3xl md:text-4xl font-semibold text-[#000000] tracking-tight mb-8">Laat ons het zware werk doen, jij verdient een Brandschone start!</h2>
<a className="nav-link inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#000000] rounded-xl hover:bg-gray-800 transition-transform hover:scale-105 duration-300 shadow-xl" href="#offerte">
                        Vraag nu gratis offerte aan <iconify-icon className="ml-2 text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>
</div>

<div className="page-section hidden" id="diensten">
<section className="bg-[#EDF3FC] py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center fade-in-up">
<h1 className="text-4xl lg:text-5xl font-semibold text-[#000000] tracking-tight mb-6">Onze Diensten</h1>
<p className="text-lg max-w-2xl mx-auto">Ontdek hoe wij uw pand van binnen en van buiten in topconditie brengen met onze gespecialiseerde reinigingsdiensten.</p>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">

<a className="nav-link group bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 fade-in-up flex flex-col h-full" href="#dienst-glasbewassing">
<div className="w-16 h-16 bg-[#EDF3FC] text-[#1D65D1] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1D65D1] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:window-frame-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-[#000000] tracking-tight mb-4">Glasbewassing</h3>
<p className="text-base mb-8 flex-grow">Professionele bewassing voor streeploos schone ramen. Geschikt voor periodiek onderhoud of eenmalige reiniging, ook op hoogte.</p>
<span className="text-sm font-semibold text-[#1D65D1] flex items-center gap-2">Lees meer over glasbewassing <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
<a className="nav-link group bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 fade-in-up flex flex-col h-full" href="#dienst-bekleding" style={{transitionDelay: '100ms'}}>
<div className="w-16 h-16 bg-[#EDF3FC] text-[#1D65D1] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1D65D1] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:armchair-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-[#000000] tracking-tight mb-4">Bekleding</h3>
<p className="text-base mb-8 flex-grow">Geef meubels en tapijten een tweede leven. Onze deepcleaning methode verwijdert hardnekkige vlekken en nare geurtjes.</p>
<span className="text-sm font-semibold text-[#1D65D1] flex items-center gap-2">Lees meer over bekleding <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
<a className="nav-link group bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 fade-in-up flex flex-col h-full" href="#dienst-zonnepanelen">
<div className="w-16 h-16 bg-[#EDF3FC] text-[#1D65D1] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1D65D1] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:solar-panel-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-[#000000] tracking-tight mb-4">Zonnepanelen</h3>
<p className="text-base mb-8 flex-grow">Veilige en effectieve reiniging van uw panelen met osmosewater, wat zorgt voor optimaal rendement zonder schade.</p>
<span className="text-sm font-semibold text-[#1D65D1] flex items-center gap-2">Lees meer over zonnepanelen <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
<a className="nav-link group bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 fade-in-up flex flex-col h-full" href="#dienst-buitenoppervlakken" style={{transitionDelay: '100ms'}}>
<div className="w-16 h-16 bg-[#EDF3FC] text-[#1D65D1] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1D65D1] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:home-angle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-[#000000] tracking-tight mb-4">Buitenoppervlakken</h3>
<p className="text-base mb-8 flex-grow">Verwijder groene aanslag en vuil van terrassen, opritten en gevels met onze professionele hogedruk apparatuur.</p>
<span className="text-sm font-semibold text-[#1D65D1] flex items-center gap-2">Lees meer over buitenoppervlakken <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
</div>
</section>
</div>

<div className="page-section hidden" id="dienst-glasbewassing">
<section className="bg-[#EDF3FC] py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 fade-in-up">
<div className="w-full lg:w-1/2">
<a className="nav-link text-sm font-semibold text-[#1D65D1] mb-6 inline-flex items-center gap-2 hover:opacity-80" href="#diensten"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Terug naar diensten</a>
<h1 className="text-4xl lg:text-5xl font-semibold text-[#000000] tracking-tight mb-6">Glasbewassing</h1>
<p className="text-lg mb-8">Heldere, streeploze ramen die bijdragen aan de professionele uitstraling van uw pand.</p>
<a className="nav-link inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#000000] bg-[#FAD26E] rounded-xl hover:bg-[#f5c64c] transition-colors" href="#offerte">Vraag offerte aan voor Glasbewassing</a>
</div>
<div className="w-full lg:w-1/2">
<img alt="Glasbewassing" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6 lg:px-8 fade-in-up">
<h2 className="text-2xl font-semibold text-[#000000] tracking-tight mb-6">Over deze dienst</h2>
<p className="text-base leading-relaxed mb-6">Wij zorgen voor streeploos schone ramen voor uw pand, zowel aan de binnen- als buitenkant. Of het nu gaat om een eenmalige reiniging of periodieke service, wij leveren altijd vakwerk, zelfs bij moeilijk bereikbare ramen.</p>
<p className="text-base leading-relaxed mb-10">Door gebruik te maken van professionele materialen en osmosewater (gedemineraliseerd water) drogen de ramen vlekkeloos op en blijven ze langer schoon omdat er geen residu achterblijft.</p>
<h3 className="text-xl font-semibold text-[#000000] tracking-tight mb-4">Voordelen</h3>
<ul className="space-y-3 mb-12">
<li className="flex items-start gap-3"><iconify-icon className="text-[#1D65D1] mt-1 text-xl" icon="solar:check-circle-bold"></iconify-icon> <span>Altijd een streeploos en helder resultaat.</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#1D65D1] mt-1 text-xl" icon="solar:check-circle-bold"></iconify-icon> <span>Veilig werken op hoogte met telescopische bewassing.</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#1D65D1] mt-1 text-xl" icon="solar:check-circle-bold"></iconify-icon> <span>Kozijnen worden standaard meegenomen.</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#1D65D1] mt-1 text-xl" icon="solar:check-circle-bold"></iconify-icon> <span>Flexibele planning: eenmalig of abonnementsvorm.</span></li>
</ul>
</div>
</section>
</div>

<div className="page-section hidden" id="dienst-bekleding">

<section className="bg-[#EDF3FC] py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 fade-in-up">
<div className="w-full lg:w-1/2">
<a className="nav-link text-sm font-semibold text-[#1D65D1] mb-6 inline-flex items-center gap-2 hover:opacity-80" href="#diensten"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Terug naar diensten</a>
<h1 className="text-4xl lg:text-5xl font-semibold text-[#000000] tracking-tight mb-6">Bekleding Reiniging</h1>
<p className="text-lg mb-8">Professionele deepcleaning voor meubilair en tapijten. Frisse uitstraling gegarandeerd.</p>
<a className="nav-link inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#000000] bg-[#FAD26E] rounded-xl hover:bg-[#f5c64c] transition-colors" href="#offerte">Vraag offerte aan voor Bekleding</a>
</div>
<div className="w-full lg:w-1/2">
<img alt="Bekleding Reiniging" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6 lg:px-8 fade-in-up">
<h2 className="text-2xl font-semibold text-[#000000] tracking-tight mb-6">Over deze dienst</h2>
<p className="text-base leading-relaxed mb-6">Voor zowel particulieren als bedrijven bieden wij professionele reiniging van bekleding, zoals stoelen, banken en tapijten. Met onze stoomreiniging (deepcleaning) verwijderen wij diep ingetrokken vuil en vlekken, en zorgen we voor een frisse, hygiënische uitstraling.</p>
<p className="text-base leading-relaxed mb-10">Ideaal voor kantoorpanden waar bureaustoelen en vloerbedekking intensief gebruikt worden, of voor een opfrisbeurt van de bank thuis.</p>
<h3 className="text-xl font-semibold text-[#000000] tracking-tight mb-4">Voordelen</h3>
<ul className="space-y-3 mb-12">
<li className="flex items-start gap-3"><iconify-icon className="text-[#1D65D1] mt-1 text-xl" icon="solar:check-circle-bold"></iconify-icon> <span>Verwijdert hardnekkige vlekken (koffie, inkt, etc.).</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#1D65D1] mt-1 text-xl" icon="solar:check-circle-bold"></iconify-icon> <span>Elimineert nare geurtjes en huisstofmijt.</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#1D65D1] mt-1 text-xl" icon="solar:check-circle-bold"></iconify-icon> <span>Verlengt de levensduur van uw meubilair aanzienlijk.</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#1D65D1] mt-1 text-xl" icon="solar:check-circle-bold"></iconify-icon> <span>Snel droog door geavanceerde extractie-machines.</span></li>
</ul>
</div>
</section>
</div>

<div className="page-section hidden" id="dienst-zonnepanelen">
<section className="bg-[#EDF3FC] py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 fade-in-up">
<div className="w-full lg:w-1/2">
<a className="nav-link text-sm font-semibold text-[#1D65D1] mb-6 inline-flex items-center gap-2 hover:opacity-80" href="#diensten"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Terug naar diensten</a>
<h1 className="text-4xl lg:text-5xl font-semibold text-[#000000] tracking-tight mb-6">Zonnepanelen</h1>
<p className="text-lg mb-8">Haal het maximale rendement uit uw investering met professionele reiniging.</p>
<a className="nav-link inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#000000] bg-[#FAD26E] rounded-xl hover:bg-[#f5c64c] transition-colors" href="#offerte">Vraag offerte aan voor Zonnepanelen</a>
</div>
<div className="w-full lg:w-1/2">
<img alt="Zonnepanelen Reiniging" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6 lg:px-8 fade-in-up">
<h2 className="text-2xl font-semibold text-[#000000] tracking-tight mb-6">Over deze dienst</h2>
<p className="text-base leading-relaxed mb-6">Wij reinigen uw zonnepanelen grondig om het maximale rendement uit uw installatie te halen. Vuil, stof, vogelpoep en andere vervuiling verminderen de efficiëntie van de zonnecellen aanzienlijk.</p>
<p className="text-base leading-relaxed mb-10">Met regelmatige, professionele reiniging (zonder gebruik van harde chemicaliën of krassende borstels) behaalt u tot wel 25% meer rendement op uw zonnepanelen.</p>
<h3 className="text-xl font-semibold text-[#000000] tracking-tight mb-4">Voordelen</h3>
<ul className="space-y-3 mb-12">
<li className="flex items-start gap-3"><iconify-icon className="text-[#1D65D1] mt-1 text-xl" icon="solar:check-circle-bold"></iconify-icon> <span>Direct resultaat: tot 25% extra energie-opbrengst.</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#1D65D1] mt-1 text-xl" icon="solar:check-circle-bold"></iconify-icon> <span>Veilige reiniging met osmosewater, 100% krasvrij.</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#1D65D1] mt-1 text-xl" icon="solar:check-circle-bold"></iconify-icon> <span>Behoudt de fabrieksgarantie door juiste reinigingsmethode.</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#1D65D1] mt-1 text-xl" icon="solar:check-circle-bold"></iconify-icon> <span>Levensduur van uw panelen wordt verlengd.</span></li>
</ul>
</div>
</section>
</div>

<div className="page-section hidden" id="dienst-buitenoppervlakken">
<section className="bg-[#EDF3FC] py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 fade-in-up">
<div className="w-full lg:w-1/2">
<a className="nav-link text-sm font-semibold text-[#1D65D1] mb-6 inline-flex items-center gap-2 hover:opacity-80" href="#diensten"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Terug naar diensten</a>
<h1 className="text-4xl lg:text-5xl font-semibold text-[#000000] tracking-tight mb-6">Buitenoppervlakken</h1>
<p className="text-lg mb-8">Grondige hogedrukreiniging voor een representatief pand rondom.</p>
<a className="nav-link inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#000000] bg-[#FAD26E] rounded-xl hover:bg-[#f5c64c] transition-colors" href="#offerte">Vraag offerte aan voor Buitenoppervlakken</a>
</div>
<div className="w-full lg:w-1/2">
<img alt="Buitenoppervlakken Reiniging" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6 lg:px-8 fade-in-up">
<h2 className="text-2xl font-semibold text-[#000000] tracking-tight mb-6">Over deze dienst</h2>
<p className="text-base leading-relaxed mb-6">Wij bieden professionele reiniging om uw terras, bestrating, gevel of andere oppervlakken weer helemaal brandschoon te maken. Door de invloed van weer en wind ontstaat er snel groene aanslag, mos en diep ingetrokken vuil.</p>
<p className="text-base leading-relaxed mb-10">Door middel van professionele hogedruk reiniging en gespecialiseerde borstels verwijderen we deze aanslag effectief. Zo heeft uw pand altijd een Brandschone en uitnodigende uitstraling.</p>
<h3 className="text-xl font-semibold text-[#000000] tracking-tight mb-4">Voordelen</h3>
<ul className="space-y-3 mb-12">
<li className="flex items-start gap-3"><iconify-icon className="text-[#1D65D1] mt-1 text-xl" icon="solar:check-circle-bold"></iconify-icon> <span>Direct zichtbaar resultaat, oppervlakken lijken weer als nieuw.</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#1D65D1] mt-1 text-xl" icon="solar:check-circle-bold"></iconify-icon> <span>Voorkomt gladheid en onveilige situaties op paden.</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#1D65D1] mt-1 text-xl" icon="solar:check-circle-bold"></iconify-icon> <span>Milieuvriendelijke aanpak mogelijk, zonder agressieve chemicaliën.</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#1D65D1] mt-1 text-xl" icon="solar:check-circle-bold"></iconify-icon> <span>Geschikt voor hout, steen, beton en kunststof.</span></li>
</ul>
</div>
</section>
</div>

<div className="page-section hidden" id="testimonials">
<section className="bg-[#1D65D1] py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center fade-in-up">
<h1 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">Wat onze klanten zeggen</h1>
<p className="text-lg text-blue-100 max-w-2xl mx-auto">Trotse partners en tevreden klanten uit de regio Noord-Holland over onze transparante en vakkundige service.</p>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 fade-in-up">
<div className="flex gap-1 text-[#FAD26E] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm italic mb-6">"Brandschoon doet zijn naam eer aan. De ramen van ons kantoorpand zijn nog nooit zo helder geweest. Duidelijke afspraken en altijd stipt op tijd."</p>
<div>
<h4 className="font-semibold text-[#000000] text-sm">Martijn de Boer</h4>
<p className="text-xs">Bedrijfseigenaar, Assendelft</p>
</div>
</div>

<div className="bg-[#EDF3FC] rounded-2xl p-8 shadow-sm fade-in-up" style={{transitionDelay: '100ms'}}>
<div className="flex gap-1 text-[#FAD26E] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm italic mb-6">"Na de reiniging van onze zonnepanelen zag ik de opbrengst in de app direct omhoog schieten. Professionele gasten die weten wat ze doen. Zeker een aanrader!"</p>
<div>
<h4 className="font-semibold text-[#000000] text-sm">Saskia Visser</h4>
<p className="text-xs">Particulier, Zaandam</p>
</div>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 fade-in-up" style={{transitionDelay: '200ms'}}>
<div className="flex gap-1 text-[#FAD26E] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm italic mb-6">"De bureaustoelen in ons pand zaten vol koffievlekken. Brandschoon heeft alles met deepcleaning aangepakt en ze zien eruit alsof ze net uit de fabriek komen."</p>
<div>
<h4 className="font-semibold text-[#000000] text-sm">Jeroen Bakker</h4>
<p className="text-xs">Facility Manager, Haarlem</p>
</div>
</div>

<div className="bg-[#EDF3FC] rounded-2xl p-8 shadow-sm fade-in-up">
<div className="flex gap-1 text-[#FAD26E] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm italic mb-6">"Fantastische service voor onze oprit en terras. De groene aanslag van de afgelopen winter is compleet weg. Vriendelijk personeel en nette afhandeling."</p>
<div>
<h4 className="font-semibold text-[#000000] text-sm">Linda Peeters</h4>
<p className="text-xs">Particulier, Krommenie</p>
</div>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 fade-in-up" style={{transitionDelay: '100ms'}}>
<div className="flex gap-1 text-[#FAD26E] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm italic mb-6">"We hebben een periodiek contract afgesloten voor de glasbewassing. Ik heb er geen omkijken meer naar, en de facturatie is heel transparant zonder verborgen kosten."</p>
<div>
<h4 className="font-semibold text-[#000000] text-sm">Peter Koster</h4>
<p className="text-xs">VVE Beheerder, Alkmaar</p>
</div>
</div>

<div className="bg-[#EDF3FC] rounded-2xl p-8 shadow-sm fade-in-up" style={{transitionDelay: '200ms'}}>
<div className="flex gap-1 text-[#FAD26E] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm italic mb-6">"Transparantie staat echt voorop bij Dimitri. De offerte was snel binnen en klopte precies met het uiteindelijke bedrag. Vakwerk met een glimlach."</p>
<div>
<h4 className="font-semibold text-[#000000] text-sm">Anne-Marie de Vries</h4>
<p className="text-xs">Ondernemer, Beverwijk</p>
</div>
</div>
</div>
<div className="mt-16 text-center fade-in-up">
<p className="text-lg font-semibold text-[#000000] mb-6">Ook tevreden worden?</p>
<a className="nav-link inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#000000] bg-[#FAD26E] rounded-xl hover:bg-[#f5c64c] transition-colors shadow-sm" href="#offerte">
                            Vraag een gratis offerte aan
                        </a>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="over-ons">
<section className="bg-[#EDF3FC] py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center fade-in-up">
<h1 className="text-4xl lg:text-5xl font-semibold text-[#000000] tracking-tight mb-6">Over Brandschoon Reiniging</h1>
<p className="text-lg max-w-2xl mx-auto">Het verhaal achter de missie: betrouwbaarheid terugbrengen in de schoonmaakbranche.</p>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 mb-24">
<div className="w-full lg:w-1/2 fade-in-up">
<img alt="Dimitri Brand" className="rounded-2xl shadow-xl w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&amp;w=2187&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full lg:w-1/2 fade-in-up">
<h2 className="text-3xl font-semibold text-[#000000] tracking-tight mb-6">Ontstaan uit frustratie, gebouwd op vertrouwen</h2>
<p className="text-base leading-relaxed mb-6">
                            Opgericht door Dimitri Brand, is Brandschoon Reiniging ontstaan zoals veel andere bedrijven: uit een frustratie. Hij ervaarde keer op keer hoe onbetrouwbare schoonmaakdiensten je in de steek lieten. Afspraken die niet werden nagekomen, onverwachte extra kosten op de factuur, of afgeraffeld werk.
                        </p>
<p className="text-base leading-relaxed mb-8">
                            Hij besloot dat het anders moest: altijd op tijd, altijd transparant en altijd professioneel. Met die kernwaarden is Brandschoon Reiniging opgebouwd. Wij geloven dat communicatie net zo belangrijk is als het schoonmaken zelf. Zo weet u altijd waar u aan toe bent, en ziet uw pand er altijd Brandschoon uit!
                        </p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
<h2 className="text-2xl font-semibold text-[#000000] tracking-tight text-center mb-12 fade-in-up">Onze Kernwaarden</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center fade-in-up">
<iconify-icon className="text-4xl text-[#1D65D1] mb-4" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-[#000000] mb-2">Altijd op tijd</h3>
<p className="text-sm">Afspraak is afspraak. Wij respecteren uw tijd en zorgen dat we er zijn wanneer we dat beloven.</p>
</div>
<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center fade-in-up" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-4xl text-[#1D65D1] mb-4" icon="solar:document-text-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-[#000000] mb-2">Volledig transparant</h3>
<p className="text-sm">Helderheid vooraf. Geen kleine lettertjes of verborgen kosten op de factuur achteraf.</p>
</div>
<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center fade-in-up" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-4xl text-[#1D65D1] mb-4" icon="solar:medal-ribbon-star-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-[#000000] mb-2">Gegarandeerd vakwerk</h3>
<p className="text-sm">We verlaten uw pand pas als het resultaat 100% naar wens is. Kwaliteit staat bovenaan.</p>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="bg-[#1D65D1] rounded-3xl p-12 text-center text-white flex flex-col md:flex-row justify-around gap-8 fade-in-up">
<div>
<span className="block text-4xl font-semibold text-[#FAD26E] mb-2 tracking-tight">100+</span>
<span className="text-sm font-semibold uppercase tracking-widest text-blue-100">Tevreden Klanten</span>
</div>
<div className="hidden md:block w-px bg-blue-400/30"></div>
<div>
<span className="block text-4xl font-semibold text-[#FAD26E] mb-2 tracking-tight">4</span>
<span className="text-sm font-semibold uppercase tracking-widest text-blue-100">Gespecialiseerde Diensten</span>
</div>
<div className="hidden md:block w-px bg-blue-400/30"></div>
<div>
<span className="block text-4xl font-semibold text-[#FAD26E] mb-2 tracking-tight">1</span>
<span className="text-sm font-semibold uppercase tracking-widest text-blue-100">Regio Noord-Holland</span>
</div>
</div>
<div className="mt-16 text-center fade-in-up">
<a className="nav-link inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#000000] bg-[#FAD26E] rounded-xl hover:bg-[#f5c64c] transition-colors shadow-sm" href="#offerte">
                            Kennismaken? Vraag een offerte aan
                        </a>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="contact">
<section className="bg-[#EDF3FC] py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center fade-in-up">
<h1 className="text-4xl lg:text-5xl font-semibold text-[#000000] tracking-tight mb-6">Neem contact op</h1>
<p className="text-lg max-w-2xl mx-auto">Vragen of direct een afspraak inplannen? Wij reageren altijd binnen 24 uur.</p>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16 mb-24">

<div className="w-full lg:w-3/5 fade-in-up">
<div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
<h2 className="text-2xl font-semibold text-[#000000] tracking-tight mb-6">Stuur ons een bericht</h2>
<form className="space-y-6" onsubmit="handleFormSubmit(event)">
<input name="_subject" type="hidden" value="Nieuw bericht via het Contactformulier"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-[#000000] mb-2">Naam</label>
<input name="naam" placeholder="Uw naam" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-[#000000] mb-2">Bedrijfsnaam <span className="text-gray-400 font-normal">(Optioneel)</span></label>
<input name="bedrijfsnaam" placeholder="Uw bedrijf" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-[#000000] mb-2">E-mailadres</label>
<input name="email" placeholder="mail@voorbeeld.nl" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-semibold text-[#000000] mb-2">Telefoonnummer</label>
<input name="telefoon" placeholder="06 12345678" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-[#000000] mb-2">Interesse in</label>
<select name="interesse" required="">
<option disabled="" selected="" value="">Selecteer een dienst...</option>
<option value="glas">Glasbewassing</option>
<option value="bekleding">Bekleding</option>
<option value="zonnepanelen">Zonnepanelen</option>
<option value="buiten">Buitenoppervlakken</option>
<option value="anders">Anders / Meerdere</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold text-[#000000] mb-2">Bericht</label>
<textarea name="bericht" placeholder="Hoe kunnen we u helpen?" required="" rows="4"></textarea>
</div>
<button className="w-full bg-[#FAD26E] text-[#000000] font-semibold py-4 px-6 rounded-xl hover:bg-[#f5c64c] transition-colors shadow-sm" type="submit">
                                    Verstuur bericht
                                </button>
</form>
</div>
</div>

<div className="w-full lg:w-2/5 fade-in-up">
<div className="bg-[#EDF3FC] rounded-2xl p-8 md:p-10 h-full flex flex-col justify-center">
<h2 className="text-2xl font-semibold text-[#000000] tracking-tight mb-8">Contactgegevens</h2>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white text-[#1D65D1] rounded-full flex items-center justify-center shrink-0 shadow-sm">
<iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-[#000000] mb-1">Bel ons direct</h3>
<p className="text-base text-[#1D65D1] font-semibold">+31 6 810 83 236</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white text-[#1D65D1] rounded-full flex items-center justify-center shrink-0 shadow-sm">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-[#000000] mb-1">E-mail</h3>
<p className="text-base"><a className="hover:text-[#1D65D1] transition-colors" href="mailto:brandschoonreiniging@gmail.com">brandschoonreiniging@gmail.com</a></p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white text-[#1D65D1] rounded-full flex items-center justify-center shrink-0 shadow-sm">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-[#000000] mb-1">Locatie</h3>
<p className="text-base">Assendelft, Noord-Holland<br/>Nederland</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white text-[#1D65D1] rounded-full flex items-center justify-center shrink-0 shadow-sm">
<iconify-icon icon="solar:global-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-[#000000] mb-1">Website</h3>
<p className="text-base"><a className="hover:text-[#1D65D1] transition-colors" href="http://brandschoonreiniging.nl" target="_blank">brandschoonreiniging.nl</a></p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-3xl mx-auto px-6 lg:px-8 fade-in-up">
<h2 className="text-3xl font-semibold text-[#000000] tracking-tight text-center mb-10">Veelgestelde Vragen</h2>
<div className="space-y-4">
<details className="group bg-white border border-gray-100 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-[#000000] font-semibold">
                                Hoe kan ik een offerte aanvragen?
                                <iconify-icon className="text-xl transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm">
                                U kunt eenvoudig een gratis en vrijblijvende offerte aanvragen door het contactformulier of offerteformulier in te vullen. Wij reageren altijd binnen 24 uur.
                            </div>
</details>
<details className="group bg-white border border-gray-100 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-[#000000] font-semibold">
                                Is er een minimale grootte voor het pand?
                                <iconify-icon className="text-xl transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm">
                                Nee, wij werken niet met een minimale grootte. Elk pand, groot of klein, zakelijk of particulier, is bij ons welkom.
                            </div>
</details>
<details className="group bg-white border border-gray-100 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-[#000000] font-semibold">
                                Wat kost een periodieke schoonmaak?
                                <iconify-icon className="text-xl transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm">
                                De kosten variëren afhankelijk van de grootte van het pand en de aard van de werkzaamheden. Vul het offerteformulier in voor een vrijblijvende en transparante prijsopgave op maat.
                            </div>
</details>
<details className="group bg-white border border-gray-100 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-[#000000] font-semibold">
                                Tot wanneer kan ik annuleren of wijzigen?
                                <iconify-icon className="text-xl transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm">
                                Wij begrijpen dat planningen kunnen veranderen. U kunt een geplande schoonmaak tot 1 week van tevoren kosteloos annuleren of wijzigen.
                            </div>
</details>
<details className="group bg-white border border-gray-100 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-[#000000] font-semibold">
                                Zijn jullie verzekerd voor eventuele schade?
                                <iconify-icon className="text-xl transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm">
                                Ja, hoewel we uiterst voorzichtig en professioneel werken, zijn wij voor de zekerheid volledig verzekerd met een uitgebreide bedrijfsaansprakelijkheidsverzekering.
                            </div>
</details>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="offerte">
<section className="bg-[#1D65D1] py-20">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center fade-in-up">
<h1 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">Vraag uw gratis offerte aan</h1>
<p className="text-lg text-blue-100 max-w-2xl mx-auto">Binnen 24 uur ontvangt u een reactie. Volledig vrijblijvend en transparant.</p>
</div>
</section>
<section className="py-16 bg-[#EDF3FC] relative">

<div className="absolute top-0 inset-x-0 h-48 bg-[#1D65D1] z-0"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 fade-in-up">
<div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
<form className="space-y-8" onsubmit="handleFormSubmit(event)">
<input name="_subject" type="hidden" value="Nieuwe Uitgebreide Offerte Aanvraag!"/>

<div>
<h3 className="text-xl font-semibold text-[#000000] tracking-tight mb-6 pb-2 border-b border-gray-100">1. Uw gegevens</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-[#000000] mb-2">Naam <span className="text-red-500">*</span></label>
<input name="naam" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-[#000000] mb-2">Bedrijfsnaam <span className="text-gray-400 font-normal">(Optioneel)</span></label>
<input name="bedrijfsnaam" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-[#000000] mb-2">E-mailadres <span className="text-red-500">*</span></label>
<input name="email" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-semibold text-[#000000] mb-2">Telefoonnummer <span className="text-red-500">*</span></label>
<input name="telefoon" required="" type="tel"/>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-semibold text-[#000000] mb-2">Adres van het pand <span className="text-red-500">*</span></label>
<input name="adres" placeholder="Straat, Huisnummer, Postcode, Plaats" required="" type="text"/>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-semibold text-[#000000] tracking-tight mb-6 pb-2 border-b border-gray-100">2. Welke diensten heeft u nodig?</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
<input name="dienst" type="checkbox" value="glas"/>
<span className="text-sm font-semibold text-[#000000]">Glasbewassing</span>
</label>
<label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
<input name="dienst" type="checkbox" value="bekleding"/>
<span className="text-sm font-semibold text-[#000000]">Bekleding</span>
</label>
<label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
<input name="dienst" type="checkbox" value="zonnepanelen"/>
<span className="text-sm font-semibold text-[#000000]">Zonnepanelen</span>
</label>
<label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
<input name="dienst" type="checkbox" value="buiten"/>
<span className="text-sm font-semibold text-[#000000]">Buitenoppervlakken</span>
</label>
</div>
</div>

<div>
<h3 className="text-xl font-semibold text-[#000000] tracking-tight mb-6 pb-2 border-b border-gray-100">3. Details van de aanvraag</h3>
<div className="space-y-6">
<div>
<label className="block text-sm font-semibold text-[#000000] mb-2">Frequentie</label>
<select name="frequentie" required="">
<option disabled="" selected="" value="">Kies frequentie...</option>
<option value="eenmalig">Eenmalig</option>
<option value="periodiek">Periodiek (Abonnement)</option>
<option value="overleg">In overleg</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold text-[#000000] mb-2">Opmerkingen of specifieke wensen</label>
<textarea name="opmerkingen" placeholder="Bijv: Geschatte oppervlakte, bereikbaarheid van het pand, type vlekken..." rows="4"></textarea>
</div>
</div>
</div>
<div className="pt-6">
<button className="w-full bg-[#FAD26E] text-[#000000] text-lg font-semibold py-4 px-6 rounded-xl hover:bg-[#f5c64c] transition-colors shadow-md" type="submit">
                                    Verstuur aanvraag
                                </button>
<div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-semibold text-[#555555]">
<span className="flex items-center gap-2"><iconify-icon className="text-[#1D65D1] text-lg" icon="solar:check-circle-linear"></iconify-icon> Geen verplichtingen</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#1D65D1] text-lg" icon="solar:check-circle-linear"></iconify-icon> Reactie binnen 24 uur</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#1D65D1] text-lg" icon="solar:check-circle-linear"></iconify-icon> Volledig gratis</span>
</div>
</div>
</form>
</div>
</div>
</section>
</div>
</main>

<footer className="bg-[#154d9e] text-blue-100 py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<span className="text-2xl font-semibold text-white tracking-tight mb-4 block">Brandschoon</span>
<p className="text-sm max-w-sm mb-6 opacity-80">Uw partner voor betrouwbare, transparante en professionele reiniging in de regio Noord-Holland. Altijd stipt en gegarandeerd Brandschoon.</p>
</div>
<div>
<h4 className="text-white font-semibold mb-4 tracking-tight">Navigatie</h4>
<ul className="space-y-3 text-sm">
<li><a className="nav-link hover:text-white transition-colors" href="#home">Home</a></li>
<li><a className="nav-link hover:text-white transition-colors" href="#diensten">Diensten</a></li>
<li><a className="nav-link hover:text-white transition-colors" href="#testimonials">Testimonials</a></li>
<li><a className="nav-link hover:text-white transition-colors" href="#over-ons">Over Ons</a></li>
<li><a className="nav-link hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4 tracking-tight">Contact</h4>
<ul className="space-y-3 text-sm opacity-80">
<li className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> +31 6 810 83 236</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> <a className="hover:text-white transition-colors" href="mailto:brandschoonreiniging@gmail.com">brandschoonreiniging@gmail.com</a></li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Assendelft, NH</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:global-linear"></iconify-icon> brandschoonreiniging.nl</li>
</ul>
</div>
</div>
<div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs opacity-60">
<p>© 2025 Brandschoon Reiniging. Alle rechten voorbehouden.</p>
<div className="mt-4 md:mt-0 space-x-4">
<a className="hover:text-white transition-colors" href="#">Privacybeleid</a>
<a className="hover:text-white transition-colors" href="#">Algemene Voorwaarden</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
