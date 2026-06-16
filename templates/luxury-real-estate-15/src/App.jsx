import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Select DOM elements
        const menuToggle = document.getElementById('menu-toggle');
        const menuClose = document.getElementById('menu-close');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        const body = document.body;

        // Function to open menu
        function openMenu() {
            mobileMenu.classList.remove('invisible', 'opacity-0');
            // Prevent background scrolling
            body.style.overflow = 'hidden';
        }

        // Function to close menu
        function closeMenu() {
            mobileMenu.classList.add('invisible', 'opacity-0');
            // Restore background scrolling
            body.style.overflow = '';
        }

        // Event Listeners for Buttons
        menuToggle.addEventListener('click', openMenu);
        menuClose.addEventListener('click', closeMenu);

        // CRITICAL FIX: Add Event Listener to ALL links inside the mobile menu
        // This ensures the menu closes immediately when a user clicks a link to scroll
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-medium tracking-tighter text-slate-900 z-50 relative" href="#">
                PRIME ESTATES
            </a>

<nav className="hidden md:flex gap-8 items-center">
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#listings">Immobilien</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#services">Service</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#about">Über uns</a>
<a className="px-5 py-2.5 bg-slate-900 text-white text-xs font-medium rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10" href="#contact">
                    Kontakt
                </a>
</nav>

<button aria-label="Menu" className="md:hidden p-2 text-slate-900 focus:outline-none" id="menu-toggle">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>

<div className="fixed inset-0 z-50 bg-white flex flex-col justify-center items-center invisible opacity-0" id="mobile-menu">
<button aria-label="Close Menu" className="absolute top-6 right-6 p-2 text-slate-900 focus:outline-none" id="menu-close">
<iconify-icon height="32" icon="solar:close-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
<nav className="flex flex-col gap-10 text-center">
<a className="mobile-link text-3xl font-light text-slate-900 hover:text-slate-500 transition-colors" href="#home">Start</a>
<a className="mobile-link text-3xl font-light text-slate-900 hover:text-slate-500 transition-colors" href="#listings">Immobilien</a>
<a className="mobile-link text-3xl font-light text-slate-900 hover:text-slate-500 transition-colors" href="#services">Service</a>
<a className="mobile-link text-3xl font-light text-slate-900 hover:text-slate-500 transition-colors" href="#about">Über uns</a>
<a className="mobile-link text-3xl font-light text-slate-900 hover:text-slate-500 transition-colors" href="#contact">Kontakt</a>
</nav>
</div>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden" id="home">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100">
<span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Premium Portfolio</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 leading-[1.1]">
                    Exklusives Wohnen <br className="hidden md:block"/>
<span className="text-slate-400">neu definiert.</span>
</h1>
<p className="text-lg md:text-xl font-light text-slate-500 max-w-md leading-relaxed">
                    Entdecken Sie handverlesene Immobilien an den begehrtesten Standorten. Architektur, Design und Komfort in Perfektion.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="px-8 py-4 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all hover:scale-105 duration-300" href="#listings">
                        Objekte ansehen
                    </a>
<a className="px-8 py-4 bg-white border border-slate-200 text-slate-900 text-sm font-medium rounded-full hover:bg-slate-50 transition-all" href="#contact">
                        Termin vereinbaren
                    </a>
</div>
</div>
<div className="relative h-[500px] md:h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-200">
<img alt="Luxury Penthouse" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50" id="listings">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-3">Aktuelle Highlights.</h2>
<p className="text-slate-500 font-light">Kuratierte Selektion für höchste Ansprüche.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-900 group" href="#">
                    Alle Objekte
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden relative">
<img alt="Villa Grunewald" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-slate-900">Verkauf</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900 mb-1">Villa Grunewald</h3>
<p className="text-slate-500 text-sm font-light mb-4">Berlin, Deutschland</p>
<div className="flex justify-between items-center border-t border-slate-100 pt-4">
<span className="text-slate-900 font-medium">€ 4.500.000</span>
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 uppercase tracking-wide">Exposé</button>
</div>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden relative">
<img alt="Penthouse HafenCity" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-slate-900">Verkauf</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900 mb-1">Penthouse HafenCity</h3>
<p className="text-slate-500 text-sm font-light mb-4">Hamburg, Deutschland</p>
<div className="flex justify-between items-center border-t border-slate-100 pt-4">
<span className="text-slate-900 font-medium">€ 2.850.000</span>
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 uppercase tracking-wide">Exposé</button>
</div>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden relative">
<img alt="Loft Schwabing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-slate-900">Vermietung</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900 mb-1">Loft Schwabing</h3>
<p className="text-slate-500 text-sm font-light mb-4">München, Deutschland</p>
<div className="flex justify-between items-center border-t border-slate-100 pt-4">
<span className="text-slate-900 font-medium">€ 6.200 / mtl.</span>
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 uppercase tracking-wide">Exposé</button>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900" href="#">
                    Alle Objekte ansehen
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-slate-100" id="services">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-16 text-center">Unser Serviceversprechen.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

<div className="flex flex-col items-center md:items-start text-center md:text-left group">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:key-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Verkauf</h3>
<p className="text-slate-500 font-light leading-relaxed">
                        Strategische Vermarktung mit diskretem Vorgehen und Zugang zu einem exklusiven Käufernetzwerk.
                    </p>
</div>

<div className="flex flex-col items-center md:items-start text-center md:text-left group">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Vermietung</h3>
<p className="text-slate-500 font-light leading-relaxed">
                        Auswahl bonitätsgeprüfter Mieter für langfristige, sorgenfreie Mietverhältnisse im Premiumsegment.
                    </p>
</div>

<div className="flex flex-col items-center md:items-start text-center md:text-left group">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Bewertung</h3>
<p className="text-slate-500 font-light leading-relaxed">
                        Fundierte Marktpreisanalyse basierend auf realen Daten und jahrelanger lokaler Expertise.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="order-1 md:order-1 relative">
<div className="aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Agent" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -right-6 w-32 h-32 border border-white/20 rounded-full hidden md:block"></div>
</div>
<div className="order-2 md:order-2">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Ihr Partner für Premium-Immobilien.</h2>
<p className="text-slate-400 font-light text-lg mb-8 leading-relaxed">
                        Seit über einem Jahrzehnt verbinden wir anspruchsvolle Persönlichkeiten mit außergewöhnlichen Lebensräumen. Diskretion, Integrität und Leidenschaft sind das Fundament unserer Arbeit. Wir verstehen Immobilien nicht nur als Anlage, sondern als Ausdruck Ihrer Identität.
                    </p>
<div className="grid grid-cols-2 gap-8 mb-8 border-t border-white/10 pt-8">
<div>
<div className="text-3xl font-normal mb-1">150+</div>
<div className="text-sm text-slate-500 uppercase tracking-wide">Objekte Verkauft</div>
</div>
<div>
<div className="text-3xl font-normal mb-1">€250M</div>
<div className="text-sm text-slate-500 uppercase tracking-wide">Transaktionsvolumen</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center">
<span className="font-serif italic font-bold text-xl">P</span>
</div>
<div>
<p className="font-medium text-white">Prime Estates Team</p>
<p className="text-slate-500 text-sm">Berlin • Hamburg • München</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="contact">
<div className="max-w-3xl mx-auto text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Kontaktieren Sie uns.</h2>
<p className="text-slate-500 font-light">Wir freuen uns auf Ihre Anfrage und melden uns zeitnah zurück.</p>
</div>
<div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/40">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-wide" htmlFor="name">Name</label>
<input className="w-full bg-slate-50 border-0 border-b border-slate-200 focus:border-slate-900 focus:ring-0 px-3 py-3 text-slate-900 placeholder-slate-400 transition-colors" id="name" placeholder="Max Mustermann" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-wide" htmlFor="email">Email</label>
<input className="w-full bg-slate-50 border-0 border-b border-slate-200 focus:border-slate-900 focus:ring-0 px-3 py-3 text-slate-900 placeholder-slate-400 transition-colors" id="email" placeholder="max@beispiel.de" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-wide" htmlFor="interest">Interesse</label>
<div className="flex gap-4 pt-1">
<label className="inline-flex items-center gap-2 cursor-pointer group">
<input className="appearance-none w-4 h-4 border border-slate-300 rounded-full checked:bg-slate-900 checked:border-slate-900 transition-colors" name="type" type="radio"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Kauf</span>
</label>
<label className="inline-flex items-center gap-2 cursor-pointer group">
<input className="appearance-none w-4 h-4 border border-slate-300 rounded-full checked:bg-slate-900 checked:border-slate-900 transition-colors" name="type" type="radio"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Verkauf</span>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-wide" htmlFor="message">Nachricht</label>
<textarea className="w-full bg-slate-50 border-0 border-b border-slate-200 focus:border-slate-900 focus:ring-0 px-3 py-3 text-slate-900 placeholder-slate-400 resize-none transition-colors" id="message" placeholder="Wie können wir Ihnen helfen?" rows="4"></textarea>
</div>
<button className="w-full py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10" type="button">
                    Anfrage senden
                </button>
</form>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-lg font-medium tracking-tighter text-slate-900">PRIME ESTATES</span>
<div className="text-sm text-slate-400 font-light">
                © 2024 Prime Estates GmbH. Alle Rechte vorbehalten.
            </div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
