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
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Poppins', 'sans-serif'],
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9', // Sky blue to match medical/clean feel
600: '#0284c7',
900: '#0c4a6e',
},
dark: '#0f172a',
surface: '#F8FAFC',
},
boxShadow: {
'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
'glow': '0 0 20px rgba(14, 165, 233, 0.15)',
}
}
}
}



        // Reveal Animation Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Accordion Function
        function toggleAccordion(button) {
            const item = button.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('active'));
            
            // Open clicked if wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2" href="#">
<img alt="NewDent" className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" src="https://www.newdent.hr/wp-content/uploads/2023/04/logo_newdent-e1682866444443.png"/>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-brand-600 transition-colors" href="#naslovnica">Naslovnica</a>
<a className="hover:text-brand-600 transition-colors" href="#onama">O Nama</a>
<a className="hover:text-brand-600 transition-colors" href="#usluge">Usluge</a>
<a className="hover:text-brand-600 transition-colors" href="#cjenik">Cjenik</a>
<a className="hover:text-brand-600 transition-colors" href="#kontakt">Kontakt</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-brand-600" href="tel:+38512112170">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                    +385 1 211 2170
                </a>
<a className="bg-brand-600 text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-brand-900 transition-all shadow-glow" href="#kontakt">
                    Prvi Pregled Besplatan
                </a>
</div>

<button className="md:hidden text-slate-800" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-lg font-medium text-slate-800" href="#naslovnica">Naslovnica</a>
<a className="text-lg font-medium text-slate-800" href="#onama">O Nama</a>
<a className="text-lg font-medium text-slate-800" href="#cjenik">Cjenik</a>
<a className="text-lg font-medium text-slate-800" href="#kontakt">Kontakt</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-brand-50/50 to-white" id="naslovnica">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-600 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                    Nova Dentalna Klinika
                </div>
<h1 className="font-heading font-medium text-4xl lg:text-6xl tracking-tight text-slate-900 mb-6 leading-tight">
                    Vrhunska stomatološka <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500">njega u Zagrebu.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed font-light">
                    S velikim zadovoljstvom vam predstavljamo našu novu kliniku. Pružamo vrhunsku njegu u modernom okruženju uz primjenu najnovijih tehnologija.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-slate-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2" href="#kontakt">
                        Rezervirajte Termin <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="bg-white border border-slate-200 text-slate-700 px-8 py-3.5 rounded-full text-sm font-medium hover:border-brand-500 hover:text-brand-600 transition-all flex items-center justify-center" href="#usluge">
                        Naše Usluge
                    </a>
</div>
<div className="mt-10 flex items-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Hamag Bicro" className="h-8 w-auto" src="https://www.newdent.hr/wp-content/uploads/2023/04/HAMAG-Bicro-logo-RGB-mali.jpg"/>
<img alt="EU Fondovi" className="h-8 w-auto" src="https://www.newdent.hr/wp-content/uploads/2023/04/amblem-eu-esif-e1682865866637.png"/>
</div>
</div>
<div className="relative reveal delay-200">
<div className="absolute -inset-4 bg-gradient-to-tr from-brand-100 to-transparent rounded-[2.5rem] opacity-50 blur-2xl"></div>
<div className="relative rounded-[2rem] overflow-hidden border border-white shadow-2xl shadow-brand-900/5 group">
<img alt="Ordinacija" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" src="https://www.newdent.hr/wp-content/uploads/2023/05/Image-1.jpg"/>
<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-slate-100 flex items-center justify-between shadow-soft">
<div className="flex items-center gap-3">
<div className="bg-brand-50 p-2.5 rounded-lg text-brand-600">
<iconify-icon icon="solar:medal-star-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Oprema</p>
<p className="text-sm font-heading font-medium text-slate-900">Kavo Dental Systems</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface border-y border-slate-200/60" id="onama">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-start">
<div className="lg:w-1/2 relative reveal">
<div className="relative rounded-2xl overflow-hidden shadow-lg border border-white">
<img alt="Dr. Igor Repušić" className="w-full h-auto object-cover" src="https://www.newdent.hr/wp-content/uploads/2023/05/slika2.jpg"/>
</div>

<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
<div className="flex items-center gap-4 mb-4">
<div className="text-4xl font-heading font-medium text-brand-600">18</div>
<div className="text-xs text-slate-500 leading-tight">Godina<br/>Kliničkog Iskustva</div>
</div>
<div className="h-px bg-slate-100 w-full mb-4"></div>
<div className="flex items-center gap-4">
<div className="text-4xl font-heading font-medium text-brand-600">10</div>
<div className="text-xs text-slate-500 leading-tight">Godina<br/>Znanstvenog Rada</div>
</div>
</div>
</div>
<div className="lg:w-1/2 reveal delay-100">
<span className="text-brand-600 font-medium tracking-wide text-xs uppercase mb-2 block">Upoznajte Doktora</span>
<h2 className="font-heading font-medium text-3xl lg:text-4xl text-slate-900 mb-6 tracking-tight">
                        Dr. sc. Igor Repušić
                    </h2>
<p className="text-slate-500 mb-6 leading-relaxed font-light">
                        Osnivač klinike NEW DENT. Kao najbolji kandidat na prijemnom ispitu i dobitnik stipendije Ministarstva znanosti, Dr. Repušić je izgradio karijeru na izvrsnosti.
                    </p>
<p className="text-slate-500 mb-8 leading-relaxed font-light">
                        Stekao je zvanje magistra znanosti iz područja parodontologije i protetike, te doktorat iz estetske restaurativne stomatologije. Njegovi znanstveni radovi i 18 godina iskustva jamče da je vaše zdravlje u sigurnim rukama.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
<iconify-icon className="text-brand-500 text-xl flex-shrink-0 mt-1" icon="solar:diploma-verified-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-slate-900">Doktor Znanosti</h4>
<p className="text-xs text-slate-400 mt-1">Estetska restaurativna stomatologija</p>
</div>
</div>
<div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
<iconify-icon className="text-brand-500 text-xl flex-shrink-0 mt-1" icon="solar:shield-check-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-slate-900">Magistar Znanosti</h4>
<p className="text-xs text-slate-400 mt-1">Parodontologija i protetika</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="cjenik">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<span className="text-brand-600 font-medium tracking-wide text-xs uppercase mb-2 block">Transparentne Cijene</span>
<h2 className="font-heading font-medium text-3xl text-slate-900 mb-4 tracking-tight">Usluge i Cjenik</h2>
<p className="text-slate-500 font-light">Sve naše usluge prilagođene su individualnim potrebama uz primjenu najnovijih metoda.</p>
</div>

<div className="space-y-4" id="accordion-container">

<div className="accordion-item bg-surface rounded-xl border border-slate-100 overflow-hidden reveal">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:tooth-linear" width="20"></iconify-icon>
</div>
<span className="font-medium text-slate-900">Restorativna stomatologija</span>
</div>
<iconify-icon className="accordion-icon text-slate-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content bg-white border-t border-slate-100">
<div className="p-6 space-y-3">
<div className="flex justify-between items-center py-2 border-b border-dashed border-slate-100">
<span className="text-sm text-slate-600 font-medium text-brand-600">Prvi pregled</span>
<span className="text-sm font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">Besplatan</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-dashed border-slate-100">
<span className="text-sm text-slate-600">Pečatni ispun</span>
<span className="text-sm font-medium text-slate-900">30 €</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-dashed border-slate-100">
<span className="text-sm text-slate-600">Kompozitni ispun (1 ploha)</span>
<span className="text-sm font-medium text-slate-900">40 €</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-dashed border-slate-100">
<span className="text-sm text-slate-600">Kompozitni ispun (2 plohe)</span>
<span className="text-sm font-medium text-slate-900">55 €</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-dashed border-slate-100">
<span className="text-sm text-slate-600">Kompozitni ispun (3 plohe)</span>
<span className="text-sm font-medium text-slate-900">65 €</span>
</div>
<div className="flex justify-between items-center py-2">
<span className="text-sm text-slate-600">Izbjeljivanje (Laser)</span>
<span className="text-sm font-medium text-slate-900">310 €</span>
</div>
</div>
</div>
</div>

<div className="accordion-item bg-surface rounded-xl border border-slate-100 overflow-hidden reveal">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:screw-large-linear" width="20"></iconify-icon>
</div>
<span className="font-medium text-slate-900">Dentalna Implantologija</span>
</div>
<iconify-icon className="accordion-icon text-slate-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content bg-white border-t border-slate-100">
<div className="p-6 space-y-3">
<div className="flex justify-between items-center py-2 border-b border-dashed border-slate-100">
<span className="text-sm text-slate-600">Implantat Ankylos C/X (Dentsply)</span>
<span className="text-sm font-medium text-slate-900">700 €</span>
</div>
<div className="flex justify-between items-center py-2">
<span className="text-sm text-slate-600">Implantološka nadogradnja Atlantis</span>
<span className="text-sm font-medium text-slate-900">220 €</span>
</div>
</div>
</div>
</div>

<div className="accordion-item bg-surface rounded-xl border border-slate-100 overflow-hidden reveal">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:crown-linear" width="20"></iconify-icon>
</div>
<span className="font-medium text-slate-900">Stomatološka Protetika</span>
</div>
<iconify-icon className="accordion-icon text-slate-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content bg-white border-t border-slate-100">
<div className="p-6 space-y-3">
<div className="flex justify-between items-center py-2 border-b border-dashed border-slate-100">
<span className="text-sm text-slate-600">Metal-keramička krunica</span>
<span className="text-sm font-medium text-slate-900">230 €</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-dashed border-slate-100">
<span className="text-sm text-slate-600">Cirkon keramička krunica</span>
<span className="text-sm font-medium text-slate-900">320 €</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-dashed border-slate-100">
<span className="text-sm text-slate-600">Keramička krunica E-max</span>
<span className="text-sm font-medium text-slate-900">350 €</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-dashed border-slate-100">
<span className="text-sm text-slate-600">Ljuskica (Veneer)</span>
<span className="text-sm font-medium text-slate-900">350 €</span>
</div>
<div className="flex justify-between items-center py-2">
<span className="text-sm text-slate-600">Totalna proteza</span>
<span className="text-sm font-medium text-slate-900">600 €</span>
</div>
</div>
</div>
</div>

<div className="accordion-item bg-surface rounded-xl border border-slate-100 overflow-hidden reveal">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:scalpel-linear" width="20"></iconify-icon>
</div>
<span className="font-medium text-slate-900">Oralna Kirurgija</span>
</div>
<iconify-icon className="accordion-icon text-slate-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content bg-white border-t border-slate-100">
<div className="p-6 space-y-3">
<div className="flex justify-between items-center py-2 border-b border-dashed border-slate-100">
<span className="text-sm text-slate-600">Vađenje zuba (obično)</span>
<span className="text-sm font-medium text-slate-900">50 €</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-dashed border-slate-100">
<span className="text-sm text-slate-600">Vađenje zuba (komplicirano)</span>
<span className="text-sm font-medium text-slate-900">70 €</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-dashed border-slate-100">
<span className="text-sm text-slate-600">Alveotomija</span>
<span className="text-sm font-medium text-slate-900">160 €</span>
</div>
<div className="flex justify-between items-center py-2">
<span className="text-sm text-slate-600">Apikotomija</span>
<span className="text-sm font-medium text-slate-900">110 - 120 €</span>
</div>
</div>
</div>
</div>

<div className="accordion-item bg-surface rounded-xl border border-slate-100 overflow-hidden reveal">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:scanner-linear" width="20"></iconify-icon>
</div>
<span className="font-medium text-slate-900">RTG Snimanje i 3D Dijagnostika</span>
</div>
<iconify-icon className="accordion-icon text-slate-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content bg-white border-t border-slate-100">
<div className="p-6 space-y-3">
<div className="flex justify-between items-center py-2 border-b border-dashed border-slate-100">
<span className="text-sm text-slate-600">Digitalni RVG intraoralni</span>
<span className="text-sm font-medium text-slate-900">10 €</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-dashed border-slate-100">
<span className="text-sm text-slate-600">Digitalni 2D Ortopan</span>
<span className="text-sm font-medium text-slate-900">30 €</span>
</div>
<div className="flex justify-between items-center py-2">
<span className="text-sm text-slate-600">CBCT (Jedna čeljust)</span>
<span className="text-sm font-medium text-slate-900">65 €</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-brand-600 rounded-full blur-[100px] opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div className="reveal">
<span className="text-brand-400 font-medium tracking-wide text-xs uppercase mb-2 block">Napredna Tehnologija</span>
<h2 className="font-heading font-medium text-3xl lg:text-4xl mb-6">3D CBCT Dijagnostika</h2>
<p className="text-slate-300 mb-6 font-light leading-relaxed">
                    Koristimo najmoderniji Kavo uređaj za CBCT dijagnostiku. Ova tehnologija omogućuje preciznost, brzinu i minimalno zračenje za vaše maksimalno zdravlje.
                </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Preciznost i visoka razlučivost
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Smanjeno zračenje u usporedbi s CT-om
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Ključno za planiranje implantata
                    </li>
</ul>
</div>
<div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-slate-700 reveal delay-100">
<img alt="CBCT Uređaj" className="object-cover w-full h-full opacity-60 hover:opacity-100 transition-opacity duration-700" src="https://www.newdent.hr/wp-content/uploads/2023/05/slika3.jpg"/>
</div>
</div>
</section>

<footer className="bg-surface pt-20 border-t border-slate-200" id="kontakt">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">

<div className="reveal">
<h2 className="font-heading font-medium text-3xl text-slate-900 mb-8">Kontaktirajte Nas</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="bg-white p-3 rounded-xl border border-slate-200 text-brand-600 shadow-sm">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium">Adresa</h4>
<p className="text-slate-500 text-sm font-light mt-1">Horvaćanska 53A, Zagreb</p>
<a className="text-brand-600 text-xs mt-2 inline-flex items-center gap-1 hover:underline" href="https://www.google.com/maps/@45.7877427,15.9469939,17.78z" target="_blank">
                                    Pogledaj na karti <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-white p-3 rounded-xl border border-slate-200 text-brand-600 shadow-sm">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium">Telefoni</h4>
<a className="block text-slate-500 text-sm font-light mt-1 hover:text-brand-600 transition-colors" href="tel:+38512112170">+385 1 211 2170</a>
<a className="block text-slate-500 text-sm font-light mt-1 hover:text-brand-600 transition-colors" href="tel:+385913112170">+385 91 311 2170</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-white p-3 rounded-xl border border-slate-200 text-brand-600 shadow-sm">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium">Email</h4>
<a className="text-slate-500 text-sm font-light mt-1 hover:text-brand-600 transition-colors" href="mailto:info@newdent.hr">info@newdent.hr</a>
</div>
</div>
</div>
<div className="mt-10 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-brand-500" icon="solar:clock-circle-linear"></iconify-icon>
<span className="font-medium text-slate-900 text-sm">Radno Vrijeme</span>
</div>
<p className="text-xs text-slate-500 font-light pl-7">Ponedjeljak - Petak: Po dogovoru</p>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 reveal delay-100">
<h3 className="text-xl font-heading font-medium text-slate-900 mb-6">Zatražite Termin</h3>
<form className="space-y-5">
<div className="relative">
<input className="peer w-full border border-slate-200 rounded-lg px-3 py-3 pt-5 pb-2 text-sm text-slate-900 focus:border-brand-500 focus:outline-none bg-transparent transition-colors placeholder-transparent" id="name" placeholder="Name" type="text"/>
<label className="absolute left-3 top-1 text-[10px] text-slate-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-brand-600" htmlFor="name">Ime i Prezime</label>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="relative">
<input className="peer w-full border border-slate-200 rounded-lg px-3 py-3 pt-5 pb-2 text-sm text-slate-900 focus:border-brand-500 focus:outline-none bg-transparent transition-colors placeholder-transparent" id="phone" placeholder="Phone" type="tel"/>
<label className="absolute left-3 top-1 text-[10px] text-slate-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-brand-600" htmlFor="phone">Telefon</label>
</div>
<div className="relative">
<input className="peer w-full border border-slate-200 rounded-lg px-3 py-3 pt-5 pb-2 text-sm text-slate-900 focus:border-brand-500 focus:outline-none bg-transparent transition-colors placeholder-transparent" id="email" placeholder="Email" type="email"/>
<label className="absolute left-3 top-1 text-[10px] text-slate-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-brand-600" htmlFor="email">Email</label>
</div>
</div>

<div className="relative group">
<select className="w-full border border-slate-200 rounded-lg px-3 py-3.5 text-sm text-slate-700 focus:border-brand-500 focus:outline-none bg-transparent appearance-none cursor-pointer">
<option disabled="" selected="">Odaberite Uslugu</option>
<option>Prvi Pregled (Besplatan)</option>
<option>Popravak Zuba</option>
<option>Implantati</option>
<option>Protetika</option>
<option>RTG / 3D Snimanje</option>
</select>
<iconify-icon className="absolute right-3 top-4 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative">
<textarea className="peer w-full border border-slate-200 rounded-lg px-3 py-3 pt-5 pb-2 text-sm text-slate-900 focus:border-brand-500 focus:outline-none bg-transparent transition-colors placeholder-transparent" id="msg" placeholder="Message" rows="3"></textarea>
<label className="absolute left-3 top-1 text-[10px] text-slate-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-brand-600" htmlFor="msg">Poruka (Opcionalno)</label>
</div>
<button className="w-full bg-brand-600 text-white font-medium py-3.5 rounded-lg shadow-glow hover:bg-brand-900 transition-all duration-300" type="button">
                            Pošalji Upit
                        </button>
</form>
</div>
</div>

<div className="border-t border-slate-200 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 New Dentistry d.o.o. Sva prava pridržana.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="https://instagram.com/new__dentistry?igshid=YmMyMTA2M2Y=" target="_blank">
<iconify-icon icon="akar-icons:instagram-fill" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
