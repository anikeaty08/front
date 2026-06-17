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
serif: ['Playfair Display', 'serif'],
},
colors: {
stone: {
850: '#1c1917',
}
}
}
}
}



        function showPage(pageId) {
            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target section
            document.getElementById(pageId).classList.add('active');

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Update active nav state
            const buttons = document.querySelectorAll('.nav-link');
            buttons.forEach(btn => {
                if (btn.dataset.target === pageId) {
                    btn.classList.add('text-stone-900');
                    btn.classList.remove('text-stone-500');
                } else {
                    btn.classList.remove('text-stone-900');
                    btn.classList.add('text-stone-500');
                }
            });
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }

        // Initialize Home active state on load
        document.addEventListener('DOMContentLoaded', () => {
           // Default active
           const homeBtn = document.querySelector('.nav-link[data-target="home"]');
           if(homeBtn) {
               homeBtn.classList.add('text-stone-900');
               homeBtn.classList.remove('text-stone-500');
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
      

<nav className="fixed top-0 w-full z-50 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-stone-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-2xl font-serif font-medium tracking-tight z-50" href="#" onclick="showPage('home')">
                Hair Studio Mona
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<button className="nav-link hover:text-stone-900 transition-colors text-stone-900" data-target="home" onclick="showPage('home')">Úvod</button>
<button className="nav-link hover:text-stone-900 transition-colors" data-target="services" onclick="showPage('services')">Služby</button>
<button className="nav-link hover:text-stone-900 transition-colors" data-target="pricelist" onclick="showPage('pricelist')">Ceník</button>
<button className="nav-link hover:text-stone-900 transition-colors" data-target="contact" onclick="showPage('contact')">Kontakt</button>
</div>

<div className="hidden md:block">
<button className="group relative inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest px-6 py-3 border border-stone-200 rounded-full hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300" onclick="showPage('contact')">
<span>Objednat se</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform duration-300" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<button className="md:hidden p-2 text-stone-600 hover:text-stone-900" onclick="toggleMobileMenu()">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-stone-200 p-6 flex-col gap-4 md:hidden shadow-lg" id="mobile-menu">
<button className="text-left text-lg font-medium text-stone-600" onclick="showPage('home'); toggleMobileMenu()">Úvod</button>
<button className="text-left text-lg font-medium text-stone-600" onclick="showPage('services'); toggleMobileMenu()">Služby</button>
<button className="text-left text-lg font-medium text-stone-600" onclick="showPage('pricelist'); toggleMobileMenu()">Ceník</button>
<button className="text-left text-lg font-medium text-stone-600" onclick="showPage('contact'); toggleMobileMenu()">Kontakt</button>
</div>
</nav>

<div className="md:pt-32 min-h-screen pt-24 pb-12">

<section className="page-section active px-6" id="home">
<div className="max-w-7xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end mb-20 md:mb-32">
<div className="md:col-span-7 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white shadow-sm">
<span className="w-2 h-2 rounded-full bg-stone-400"></span>
<span className="text-xs font-medium text-stone-500 uppercase tracking-wide">Praha 5 - Smíchov</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.05] text-stone-900">
                            Hair Studio <br/> <i className="font-serif font-normal text-stone-400">Mona</i>
</h1>
<p className="text-stone-500 text-lg md:text-xl font-light max-w-lg leading-relaxed">
                            Módní střihy klientkám přímo na míru. Profesionální péče a individuální přístup.
                        </p>
<div className="pt-4">
<button className="inline-flex justify-center items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors shadow-lg shadow-stone-200/50" onclick="showPage('contact')">
                                Objednat se
                            </button>
</div>
</div>

<div className="md:col-span-5 relative">
<div className="aspect-[4/5] w-full rounded-sm overflow-hidden relative group">
<img alt="Salon Interior" className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" src="https://192dce26b0.clvaw-cdnwnd.com/ac8fa9372369de8d46d099bf82cf3679/200000006-f18def18df/700/DSC_0420_resize.jpg?ph=192dce26b0"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-sm"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
<div className="aspect-[3/2] overflow-hidden rounded-sm relative group">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0" src="https://192dce26b0.clvaw-cdnwnd.com/ac8fa9372369de8d46d099bf82cf3679/200000011-b344bb344d/DSC_0402_resize-8.jpg?ph=192dce26b0"/>
</div>
<div className="aspect-[3/2] overflow-hidden rounded-sm relative group">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0" src="https://192dce26b0.clvaw-cdnwnd.com/ac8fa9372369de8d46d099bf82cf3679/200000004-9085c9085e/DSC_0427_resize.jpg?ph=192dce26b0"/>
</div>
<div className="aspect-[3/2] overflow-hidden rounded-sm relative group">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0" src="https://192dce26b0.clvaw-cdnwnd.com/ac8fa9372369de8d46d099bf82cf3679/200000007-a336aa336c/DSC_0441_resize.jpg?ph=192dce26b0"/>
</div>
</div>
</div>
</section>

<section className="page-section px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-stone-200 pb-8">
<div>
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-stone-900 mb-3">Naše Služby</h2>
<p className="text-stone-500 font-light max-w-md">Komplexní péče o vaše vlasy s využitím prémiové kosmetiky.</p>
</div>
<button className="text-sm font-medium border-b border-stone-300 pb-0.5 hover:border-stone-900 hover:text-stone-900 transition-colors self-start md:self-auto" onclick="showPage('pricelist')">
                        Zobrazit Ceník
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 bg-white border border-stone-100 rounded-sm hover:border-stone-300 transition-all duration-300 shadow-sm hover:shadow-md">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center mb-6 text-stone-800">
<iconify-icon height="24" icon="solar:scissors-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 mb-3">Střih</h3>
<p className="text-stone-500 font-light text-sm leading-relaxed">
                            Módní střihy klientkám přímo na míru. Součástí je konzultace tvaru obličeje a typu vlasů.
                        </p>
</div>

<div className="group p-8 bg-white border border-stone-100 rounded-sm hover:border-stone-300 transition-all duration-300 shadow-sm hover:shadow-md">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center mb-6 text-stone-800">
<iconify-icon height="24" icon="solar:palette-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 mb-3">Barva</h3>
<p className="text-stone-500 font-light text-sm leading-relaxed">
                            Barvení italskou vlasovou přírodní kosmetikou <a className="underline decoration-stone-300 hover:decoration-stone-900" href="http://previa.conceptczech.cz/" target="_blank">Previa®</a>. Šetrné k vlasům i pokožce.
                        </p>
</div>

<div className="group p-8 bg-white border border-stone-100 rounded-sm hover:border-stone-300 transition-all duration-300 shadow-sm hover:shadow-md">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center mb-6 text-stone-800">
<iconify-icon height="24" icon="solar:round-alt-arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 mb-3">Rovnání</h3>
<p className="text-stone-500 font-light text-sm leading-relaxed">
                            Dočasné i permanentní narovnání vlasů profesionálními přípravky (BioIonic®, Nanokeratin).
                        </p>
</div>

<div className="group p-8 bg-white border border-stone-100 rounded-sm hover:border-stone-300 transition-all duration-300 shadow-sm hover:shadow-md">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center mb-6 text-stone-800">
<iconify-icon height="24" icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 mb-3">Regenerace</h3>
<p className="text-stone-500 font-light text-sm leading-relaxed">
                            Hloubkové ošetření vlasů pro zvýšení hydratace, pružnosti a lesku. Masáže hlavy.
                        </p>
</div>

<div className="group p-8 bg-white border border-stone-100 rounded-sm hover:border-stone-300 transition-all duration-300 shadow-sm hover:shadow-md">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center mb-6 text-stone-800">
<iconify-icon height="24" icon="solar:wind-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 mb-3">Trvalá Ondulace</h3>
<p className="text-stone-500 font-light text-sm leading-relaxed">
                            Permanentní zvlnění vlasů s využitím šetrných produktů.
                        </p>
</div>

<div className="group p-8 bg-white border border-stone-100 rounded-sm hover:border-stone-300 transition-all duration-300 shadow-sm hover:shadow-md">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center mb-6 text-stone-800">
<iconify-icon height="24" icon="solar:waterdrops-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 mb-3">Detox</h3>
<p className="text-stone-500 font-light text-sm leading-relaxed">
                            Hloubkové čistění vlasové pokožky a odstranění nečistot.
                        </p>
</div>

<div className="group p-8 bg-white border border-stone-100 rounded-sm hover:border-stone-300 transition-all duration-300 shadow-sm hover:shadow-md">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center mb-6 text-stone-800">
<iconify-icon height="24" icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 mb-3">Diagnostika</h3>
<p className="text-stone-500 font-light text-sm leading-relaxed">
                            Trichologie - analýza stavu vlasové pokožky a kořínků mikroskopickým zobrazením.
                        </p>
</div>
</div>
</div>
</section>

<section className="page-section px-6" id="pricelist">
<div className="max-w-4xl mx-auto bg-white p-8 md:p-16 border border-stone-200 shadow-xl shadow-stone-200/50 rounded-sm">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-stone-900 mb-4">Ceník Služeb</h2>
<p className="text-xs text-stone-400 uppercase tracking-widest">Platné od 1. 1. 2023</p>
</div>
<div className="space-y-6">

<div className="flex justify-between items-end border-b border-stone-900 pb-2 mb-6">
<span className="text-sm font-bold uppercase tracking-wide text-stone-900">Úkon</span>
<span className="text-sm font-bold uppercase tracking-wide text-stone-900">Cena *</span>
</div>

<div className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium">Střih vlasů</span>
<span className="block text-xs text-stone-500 font-light">(mytí, střih, foukaná, styling)</span>
</div>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300 relative top-[-4px]"></div>
<span className="text-stone-900 font-medium">680 - 1300 Kč</span>
</div>
<div className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium">Foukaná</span>
<span className="block text-xs text-stone-500 font-light">(mytí, foukaná, styling)</span>
</div>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300 relative top-[-4px]"></div>
<span className="text-stone-900 font-medium">530 - 900 Kč</span>
</div>
<div className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium">Barvení vlasů a tónování</span>
<span className="block text-xs text-stone-500 font-light">značky pH, Earth</span>
</div>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300 relative top-[-4px]"></div>
<span className="text-stone-900 font-medium">780 - 2300 Kč</span>
</div>
<div className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium">Odstranění barvy</span>
<span className="block text-xs text-stone-500 font-light">L'oreal Efassor</span>
</div>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300 relative top-[-4px]"></div>
<span className="text-stone-900 font-medium">800 - 3000 Kč</span>
</div>
<div className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium">Melírování</span>
<span className="block text-xs text-stone-500 font-light">free-hand techniky, balayage</span>
</div>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300 relative top-[-4px]"></div>
<span className="text-stone-900 font-medium">800 - 3500 Kč</span>
</div>
<div className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium">Trvalá ondulace</span>
<span className="block text-xs text-stone-500 font-light">Previa®</span>
</div>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300 relative top-[-4px]"></div>
<span className="text-stone-900 font-medium">850 - 3000 Kč</span>
</div>
<div className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium">Permanentní narovnání</span>
<span className="block text-xs text-stone-500 font-light">BioIonic®, Previa®, ReTeX, Kerasmooth</span>
</div>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300 relative top-[-4px]"></div>
<span className="text-stone-900 font-medium">1000 - 10000 Kč</span>
</div>
<div className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium">Společenský účes</span>
</div>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300 relative top-[-4px]"></div>
<span className="text-stone-900 font-medium">900 - 3000 Kč</span>
</div>
<div className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium">Hloubková regenerace</span>
<span className="block text-xs text-stone-500 font-light">(hair spa)</span>
</div>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300 relative top-[-4px]"></div>
<span className="text-stone-900 font-medium">od 280 Kč</span>
</div>
<div className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium">Vlasový "botox"</span>
</div>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300 relative top-[-4px]"></div>
<span className="text-stone-900 font-medium">od 650 Kč</span>
</div>
<div className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium">Malibu "C"</span>
<span className="block text-xs text-stone-500 font-light">čištění vlasů</span>
</div>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300 relative top-[-4px]"></div>
<span className="text-stone-900 font-medium">od 750 Kč</span>
</div>
<div className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium">Trichologie</span>
<span className="block text-xs text-stone-500 font-light">konzultace</span>
</div>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300 relative top-[-4px]"></div>
<span className="text-stone-900 font-medium">od 900 Kč</span>
</div>

<div className="pt-6 pb-2">
<h4 className="text-sm font-bold uppercase tracking-wide text-stone-400">Pánské Služby &amp; Děti</h4>
</div>
<div className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium">Pánský střih</span>
</div>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300 relative top-[-4px]"></div>
<span className="text-stone-900 font-medium">680 - 900 Kč</span>
</div>
<div className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium">Střih strojkem</span>
</div>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300 relative top-[-4px]"></div>
<span className="text-stone-900 font-medium">450 Kč</span>
</div>
<div className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium">Barvení pánských šedin</span>
<span className="block text-xs text-stone-500 font-light">Cover 5'</span>
</div>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300 relative top-[-4px]"></div>
<span className="text-stone-900 font-medium">450 - 700 Kč</span>
</div>
<div className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium">Dětský střih</span>
<span className="block text-xs text-stone-500 font-light">do 12 let</span>
</div>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300 relative top-[-4px]"></div>
<span className="text-stone-900 font-medium">450 Kč</span>
</div>
</div>
<div className="mt-12 pt-6 border-t border-stone-100 text-center">
<p className="text-stone-400 text-sm font-light italic">
                        * Výsledná cena je závislá na délce vlasů, jejich hustotě a spotřebě materiálu.
                    </p>
</div>
</div>
</section>

<section className="page-section px-6" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="space-y-12">
<div>
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-stone-900 mb-6">
                                Kontaktujte Nás
                            </h2>
<p className="text-stone-500 font-light leading-relaxed mb-8">
                                Objednávku služeb provádějte, prosím, telefonicky nebo elektronicky. Těšíme se na vaši návštěvu v našem ateliéru na Smíchově.
                            </p>
</div>
<div className="space-y-8">
<div className="flex gap-6 items-start">
<div className="bg-stone-100 p-3 rounded-full shrink-0">
<iconify-icon className="text-stone-900" height="24" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">Telefon / WhatsApp</h4>
<a className="text-xl font-serif text-stone-900 hover:text-stone-600 transition-colors block mb-1" href="tel:602352923">602 352 923</a>
<a className="text-sm text-stone-500 underline decoration-stone-300 hover:decoration-stone-900" href="https://wa.me/420602352923" target="_blank">Napsat na WhatsApp</a>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="bg-stone-100 p-3 rounded-full shrink-0">
<iconify-icon className="text-stone-900" height="24" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">E-mail</h4>
<a className="text-lg text-stone-900 hover:text-stone-600 transition-colors" href="mailto:vacatello@seznam.cz">vacatello@seznam.cz</a>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="bg-stone-100 p-3 rounded-full shrink-0">
<iconify-icon className="text-stone-900" height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">Adresa</h4>
<p className="text-stone-900 font-medium">Ženské domovy, Ostrovského 253/3</p>
<p className="text-stone-500 text-sm mt-1">Praha 5 - Smíchov, 150 00</p>
<p className="text-stone-400 text-xs mt-2 italic">2. patro, dveře č. 2000 (mezi výtahy)</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="bg-stone-100 p-3 rounded-full shrink-0">
<iconify-icon className="text-stone-900" height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">Otevírací doba</h4>
<p className="text-stone-900">Dle objednání</p>
</div>
</div>
</div>
<div className="pt-8 border-t border-stone-100">
<p className="text-xs text-stone-400">IČO: 66885523</p>
</div>
</div>

<div className="space-y-6">
<div className="w-full h-80 bg-stone-100 rounded-sm overflow-hidden border border-stone-200">
<iframe allowfullscreen="" frameborder="0" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.944543066513!2d14.400597415756003!3d50.06860022268587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b945723b9cd95%3A0x2d455dd54394d0be!2sHAIR%20STUDIO%20MONA!5e0!3m2!1scs!2scz!4v1582202111451!5m2!1scs!2scz" style={{border: '0'}} width="100%"></iframe>
</div>
<div className="aspect-video w-full rounded-sm overflow-hidden relative">
<img alt="Studio Entrance" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://192dce26b0.clvaw-cdnwnd.com/ac8fa9372369de8d46d099bf82cf3679/200000019-b9f98b9f9c/DSC_0556.jpg?ph=192dce26b0"/>
</div>
</div>
</div>
</div>
</section>
</div>

<footer className="bg-white border-stone-200 border-t pt-12 pr-6 pb-12 pl-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="text-lg font-serif font-medium text-stone-900 mb-1">Hair Studio Mona</p>
<p className="text-xs text-stone-500">Ženské domovy, Ostrovského 253/3, Praha 5</p>
</div>
<div className="text-xs text-stone-400">© 2026 Hair Studio Mona. Všechna práva vyhrazena.</div>
</div>
</footer>



    </>
  );
}
