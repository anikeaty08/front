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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            // Reveal on Scroll
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
            });

            // Subtle Navbar blur effect on scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('shadow-sm');
                    navbar.classList.replace('bg-[#F5EFE6]/80', 'bg-[#F5EFE6]/95');
                } else {
                    navbar.classList.remove('shadow-sm');
                    navbar.classList.replace('bg-[#F5EFE6]/95', 'bg-[#F5EFE6]/80');
                }
            });
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
      

<nav className="fixed w-full top-0 z-50 transition-all duration-500 backdrop-blur-md bg-[#F5EFE6]/80 border-b border-[#2C2218]/5" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
<a className="font-playfair font-medium text-xl uppercase tracking-[0.15em] text-[#2C2218] hover:text-[#B85C38] transition-colors duration-500" href="#">
                Sirocco
            </a>
<div className="hidden md:flex gap-10 items-center">
<a className="text-sm tracking-wide text-[#2C2218]/70 hover:text-[#B85C38] transition-colors duration-300" href="#over">Het Atelier</a>
<a className="text-sm tracking-wide text-[#2C2218]/70 hover:text-[#B85C38] transition-colors duration-300" href="#diensten">Expertise</a>
<a className="text-sm tracking-wide text-[#2C2218]/70 hover:text-[#B85C38] transition-colors duration-300" href="#werkwijze">Werkwijze</a>
<a className="text-xs uppercase tracking-widest font-medium bg-[#2C2218] text-[#F5EFE6] px-6 py-3 hover:bg-[#B85C38] transition-colors duration-500" href="#contact">
                    Contact
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-24 overflow-hidden">

<div className="absolute top-1/4 right-10 w-[40vw] h-[40vw] bg-[#E8DDD0] rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-wind z-0 pointer-events-none"></div>
<div className="absolute bottom-1/4 left-10 w-[30vw] h-[30vw] bg-[#D4916B] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-wind z-0 pointer-events-none" style={{animationDelay: '-5s'}}></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid md:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
<div className="md:col-span-7 flex flex-col items-start reveal">
<p className="text-[#B85C38] uppercase tracking-widest text-xs font-medium mb-6">Marketing dat bij u past.</p>
<h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#2C2218] leading-[1.1] mb-8">
                    Uw merk heeft een verhaal. <br/>Wij zorgen dat het gehoord wordt.
                </h1>
<p className="text-lg text-[#2C2218]/80 max-w-lg font-light leading-relaxed mb-10">
                    We kwamen niet met een sjabloon. We kwamen met vragen. Welkom bij een atelier waar strategie en esthetiek onlosmakelijk verbonden zijn.
                </p>
<a className="group flex items-center gap-4 bg-[#B85C38] text-[#F5EFE6] px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#D4916B] transition-all duration-500" href="#contact">
                    Ontdek onze aanpak
                    <iconify-icon className="group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
<div className="md:col-span-5 h-[60vh] md:h-[80vh] w-full reveal reveal-delay-2">
<img alt="Digitale strategie en webdesign" className="w-full h-full object-cover object-center grayscale-[20%] sepia-[10%]" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#E8DDD0] relative" id="over">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 h-full min-h-[400px] reveal">
<img alt="Website wireframes en digitaal design" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="order-1 md:order-2 reveal reveal-delay-1">
<h2 className="font-playfair text-3xl md:text-4xl font-medium tracking-tight text-[#2C2218] mb-8">Het Atelier</h2>
<div className="space-y-6 text-[#2C2218]/80 font-light leading-relaxed">
<p>
                            Atelier Sirocco, opgericht in 2026, is geen standaard marketingbureau. Wij zien marketing niet als een lopende band, maar als maatwerk. Een plek waar tijd wordt genomen om de essentie van uw merk te doorgronden.
                        </p>
<p>
                            Onze filosofie is eenvoudig: we weigeren standaardoplossingen toe te passen op unieke vraagstukken. In plaats daarvan luisteren we, begrijpen we de nuances van uw ambitie, en smeden we een strategie die voelt als een natuurlijk verlengstuk van uw identiteit.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="diensten">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<p className="text-[#B85C38] uppercase tracking-widest text-xs font-medium mb-4">Onze Expertise</p>
<h2 className="font-playfair text-4xl md:text-5xl font-medium tracking-tight text-[#2C2218]">Verfijning in elke discipline</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="bg-[#E8DDD0] p-10 md:p-14 group hover:-translate-y-2 transition-transform duration-700 reveal">
<iconify-icon className="text-[#B85C38] mb-8" icon="solar:pen-linear" width="32"></iconify-icon>
<h3 className="font-playfair text-2xl font-medium tracking-tight text-[#2C2218] mb-4">Branding</h3>
<p className="text-[#2C2218]/70 font-light leading-relaxed">
                        Meer dan een logo. We creëren een identiteit die blijft hangen, een visuele en verbale taal die de ziel van uw bedrijf perfect vertaalt naar de buitenwereld.
                    </p>
</div>

<div className="bg-[#E8DDD0] p-10 md:p-14 group hover:-translate-y-2 transition-transform duration-700 reveal reveal-delay-1">
<iconify-icon className="text-[#B85C38] mb-8" icon="solar:map-arrow-linear" width="32"></iconify-icon>
<h3 className="font-playfair text-2xl font-medium tracking-tight text-[#2C2218] mb-4">Marketingstrategie</h3>
<p className="text-[#2C2218]/70 font-light leading-relaxed">
                        De koers naar duurzame groei. Geen blinde tactieken, maar een doordacht plan gebaseerd op inzicht, marktpositie en uw specifieke bedrijfsdoelstellingen.
                    </p>
</div>

<div className="bg-[#E8DDD0] p-10 md:p-14 group hover:-translate-y-2 transition-transform duration-700 reveal">
<iconify-icon className="text-[#B85C38] mb-8" icon="solar:document-text-linear" width="32"></iconify-icon>
<h3 className="font-playfair text-2xl font-medium tracking-tight text-[#2C2218] mb-4">Content &amp; Campagnes</h3>
<p className="text-[#2C2218]/70 font-light leading-relaxed">
                        Verhalen die overtuigen. Met de juiste woorden en beelden raken we de juiste snaar bij uw doelgroep, via campagnes die even elegant als effectief zijn.
                    </p>
</div>

<div className="bg-[#E8DDD0] p-10 md:p-14 group hover:-translate-y-2 transition-transform duration-700 reveal reveal-delay-1">
<iconify-icon className="text-[#B85C38] mb-8" icon="solar:laptop-minimalistic-linear" width="32"></iconify-icon>
<h3 className="font-playfair text-2xl font-medium tracking-tight text-[#2C2218] mb-4">Digitale Aanwezigheid</h3>
<p className="text-[#2C2218]/70 font-light leading-relaxed">
                        Uw merk, overal naadloos ervaren. Van een doordachte website tot gerichte online kanalen; wij zorgen dat uw digitale voetafdruk een blijvende indruk achterlaat.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#2C2218] text-[#F5EFE6] relative overflow-hidden" id="werkwijze">
<div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80')] parallax-bg mix-blend-overlay"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="mb-20 md:w-1/2 reveal">
<p className="text-[#D4916B] uppercase tracking-widest text-xs font-medium mb-4">Het Proces</p>
<h2 className="font-playfair text-4xl md:text-5xl font-medium tracking-tight text-[#F5EFE6]">Hoe we creëren</h2>
</div>
<div className="grid md:grid-cols-4 gap-12 border-t border-[#F5EFE6]/20 pt-16">

<div className="reveal">
<span className="font-playfair text-6xl text-[#D4916B]/30 mb-6 block">01</span>
<h4 className="text-lg font-medium text-[#F5EFE6] mb-3">Luisteren</h4>
<p className="text-[#F5EFE6]/60 font-light text-sm leading-relaxed">We beginnen zonder aannames. We stellen vragen en luisteren naar de ambities en uitdagingen van uw merk.</p>
</div>

<div className="reveal reveal-delay-1">
<span className="font-playfair text-6xl text-[#D4916B]/30 mb-6 block">02</span>
<h4 className="text-lg font-medium text-[#F5EFE6] mb-3">Begrijpen</h4>
<p className="text-[#F5EFE6]/60 font-light text-sm leading-relaxed">Informatie wordt inzicht. We analyseren de markt, uw positie en formuleren de fundamentele strategie.</p>
</div>

<div className="reveal reveal-delay-2">
<span className="font-playfair text-6xl text-[#D4916B]/30 mb-6 block">03</span>
<h4 className="text-lg font-medium text-[#F5EFE6] mb-3">Creëren</h4>
<p className="text-[#F5EFE6]/60 font-light text-sm leading-relaxed">Strategie ontmoet esthetiek. Onze ontwerpers en copywriters brengen het verhaal tactvol tot leven.</p>
</div>

<div className="reveal reveal-delay-3">
<span className="font-playfair text-6xl text-[#D4916B]/30 mb-6 block">04</span>
<h4 className="text-lg font-medium text-[#F5EFE6] mb-3">Verfijnen</h4>
<p className="text-[#F5EFE6]/60 font-light text-sm leading-relaxed">Resultaatgericht maatwerk. We implementeren, meten en schaven bij om de hoogste kwaliteit te garanderen.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-16 md:gap-24 items-center">
<div className="md:w-1/2 reveal">
<h2 className="font-playfair text-3xl md:text-4xl font-medium tracking-tight text-[#2C2218] mb-10">Waarom Atelier Sirocco</h2>
<ul className="space-y-8">
<li className="flex gap-6 items-start group">
<iconify-icon className="text-[#B85C38] mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300" icon="solar:check-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="text-[#2C2218] font-medium mb-1">Geen templates</h4>
<p className="text-[#2C2218]/70 text-sm font-light">Elk project is een blanco canvas, exclusief ontworpen voor uw identiteit.</p>
</div>
</li>
<li className="flex gap-6 items-start group">
<iconify-icon className="text-[#B85C38] mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300" icon="solar:check-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="text-[#2C2218] font-medium mb-1">Persoonlijke aanpak</h4>
<p className="text-[#2C2218]/70 text-sm font-light">Direct contact met de strategen en ontwerpers die aan uw merk bouwen.</p>
</div>
</li>
<li className="flex gap-6 items-start group">
<iconify-icon className="text-[#B85C38] mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300" icon="solar:check-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="text-[#2C2218] font-medium mb-1">Resultaatgericht maar menselijk</h4>
<p className="text-[#2C2218]/70 text-sm font-light">Cijfers zijn cruciaal, maar het menselijke verhaal erachter is wat bindt.</p>
</div>
</li>
<li className="flex gap-6 items-start group">
<iconify-icon className="text-[#B85C38] mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300" icon="solar:check-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="text-[#2C2218] font-medium mb-1">Esthetiek + strategie</h4>
<p className="text-[#2C2218]/70 text-sm font-light">Prachtig design dat doelbewust ontworpen is om te converteren en te groeien.</p>
</div>
</li>
</ul>
</div>
<div className="md:w-1/2 w-full h-[500px] bg-[#E8DDD0] reveal reveal-delay-1 p-6 relative">
<img alt="Online reclame en data analyse" className="w-full h-full object-cover grayscale-[10%] sepia-[5%]" src="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 border border-[#2C2218]/10 m-10 pointer-events-none"></div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#E8DDD0]" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 md:gap-24">
<div className="reveal">
<p className="text-[#B85C38] uppercase tracking-widest text-xs font-medium mb-4">Laten we spreken</p>
<h2 className="font-playfair text-4xl md:text-6xl font-medium tracking-tight text-[#2C2218] mb-6">Vertel ons <br/>uw verhaal.</h2>
<p className="text-[#2C2218]/70 font-light mb-12 max-w-md">
                    Of u nu op zoek bent naar een complete rebranding of strategisch advies, de deuren van het atelier staan open.
                </p>
<div className="space-y-6">
<a className="flex items-center gap-4 text-[#2C2218] hover:text-[#B85C38] transition-colors duration-300 group" href="tel:+32491392703">
<div className="w-10 h-10 border border-[#2C2218]/20 flex items-center justify-center group-hover:border-[#B85C38] transition-colors duration-300">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
</div>
<span className="font-light">+32 491 39 27 03</span>
</a>
<a className="flex items-center gap-4 text-[#2C2218] hover:text-[#B85C38] transition-colors duration-300 group" href="mailto:sebastianraets1@gmail.com">
<div className="w-10 h-10 border border-[#2C2218]/20 flex items-center justify-center group-hover:border-[#B85C38] transition-colors duration-300">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<span className="font-light">sebastianraets1@gmail.com</span>
</a>
</div>
</div>
<div className="reveal reveal-delay-1 bg-[#F5EFE6] p-10 md:p-14 shadow-sm">
<form className="space-y-10" onsubmit="event.preventDefault();">
<div className="grid md:grid-cols-2 gap-10">
<div className="flex flex-col">
<label className="text-xs uppercase tracking-widest text-[#2C2218]/50 mb-2">Naam</label>
<input className="input-atelier w-full py-2" placeholder="Uw volledige naam" type="text"/>
</div>
<div className="flex flex-col">
<label className="text-xs uppercase tracking-widest text-[#2C2218]/50 mb-2">Bedrijf</label>
<input className="input-atelier w-full py-2" placeholder="Uw organisatie" type="text"/>
</div>
</div>
<div className="flex flex-col">
<label className="text-xs uppercase tracking-widest text-[#2C2218]/50 mb-2">E-mailadres</label>
<input className="input-atelier w-full py-2" placeholder="naam@bedrijf.be" type="email"/>
</div>
<div className="flex flex-col">
<label className="text-xs uppercase tracking-widest text-[#2C2218]/50 mb-2">Uw bericht</label>
<textarea className="input-atelier w-full py-2 resize-none" placeholder="Waar kunnen we u mee helpen?" rows="3"></textarea>
</div>
<button className="w-full bg-[#2C2218] text-[#F5EFE6] py-5 text-sm uppercase tracking-widest hover:bg-[#B85C38] transition-colors duration-500 mt-4" type="submit">
                        Verstuur bericht
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-[#2C2218] pt-24 pb-12 text-[#F5EFE6] border-t border-[#F5EFE6]/10">
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-12 gap-12 mb-16">
<div className="md:col-span-5">
<a className="font-playfair font-medium text-2xl uppercase tracking-[0.15em] text-[#D4916B] mb-6 block" href="#">
                    Sirocco
                </a>
<p className="text-[#F5EFE6]/60 font-light max-w-sm leading-relaxed mb-6">
                    Een marketingatelier waar strategisch maatwerk en redactionele esthetiek samenkomen. Geen clichés, enkel resultaat.
                </p>
</div>
<div className="md:col-span-3 md:col-start-7">
<h5 className="text-[#F5EFE6] font-medium mb-6 tracking-wide">Contact</h5>
<ul className="space-y-3 text-[#F5EFE6]/60 font-light text-sm">
<li><a className="hover:text-[#B85C38] transition-colors duration-300" href="mailto:sebastianraets1@gmail.com">sebastianraets1@gmail.com</a></li>
<li><a className="hover:text-[#B85C38] transition-colors duration-300" href="tel:+32491392703">+32 491 39 27 03</a></li>
</ul>
</div>
<div className="md:col-span-3">
<h5 className="text-[#F5EFE6] font-medium mb-6 tracking-wide">Atelier</h5>
<ul className="space-y-3 text-[#F5EFE6]/60 font-light text-sm">
<li><a className="hover:text-[#B85C38] transition-colors duration-300" href="#over">Over ons</a></li>
<li><a className="hover:text-[#B85C38] transition-colors duration-300" href="#diensten">Expertise</a></li>
<li><a className="hover:text-[#B85C38] transition-colors duration-300" href="#werkwijze">Werkwijze</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-[#F5EFE6]/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[#F5EFE6]/40 text-xs font-light">
                © 2026 Atelier Sirocco. Alle rechten voorbehouden.
            </p>
<p className="font-playfair italic text-[#D4916B]/80 text-sm">
                Tot de volgende keer — het Atelier Sirocco team.
            </p>
</div>
</footer>



    </>
  );
}
