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
primary: '#3A5F3A',
secondary: '#6F8F59',
accent: '#C0A98F',
cream: '#F4F2EC',
dark: '#2E2E2E',
muted: '#6B6B6B',
border: '#E5E5E5'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
boxShadow: {
'soft': '0 6px 18px rgba(46,46,46,0.06)',
'hover': '0 12px 30px rgba(46,46,46,0.10)',
},
backgroundImage: {
'hero-pattern': "linear-gradient(to bottom, rgba(46,46,46,0.3), rgba(46,46,46,0.5)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
}
}
}
}



        // Simple Interaction Logic for Expand Panels
        function togglePanel(panelId) {
            // Hide all panels first
            const allPanels = document.querySelectorAll('.panel-content');
            const targetPanel = document.getElementById(panelId);
            
            // If already open, close it (optional toggle behavior)
            if (!targetPanel.classList.contains('hidden')) {
                targetPanel.classList.add('hidden');
                return;
            }

            allPanels.forEach(p => p.classList.add('hidden'));
            
            // Show target
            targetPanel.classList.remove('hidden');
            
            // Scroll offset slightly
            const container = document.getElementById('panels-container');
            container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Initialize first panel open on desktop, none on mobile? 
        // Let's keep closed by default for clean look, or open first one:
        document.addEventListener("DOMContentLoaded", () => {
            // togglePanel('panel-1'); // Uncomment to open first by default
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-cream/90 backdrop-blur-md border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex flex-col leading-none group" href="#">
<span className="font-serif font-bold text-lg tracking-tight text-primary group-hover:text-secondary transition-colors">BOHEMIA VITAE</span>
<span className="text-[0.65rem] tracking-widest uppercase text-muted font-medium">Jindřichův Hradec, a.s.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-dark/80">
<a className="hover:text-primary transition-colors" href="#about">O společnosti</a>
<a className="hover:text-primary transition-colors" href="#company-focus">Činnost</a>
<a className="hover:text-primary transition-colors" href="#shop">Prodejna</a>
<a className="hover:text-primary transition-colors" href="#locations">Provozy</a>
<a className="px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-sm hover:shadow-md" href="#contact">Kontakt</a>
</div>

<button className="md:hidden text-dark p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-cream border-b border-gray-200 p-6 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-lg font-medium" href="#about">O společnosti</a>
<a className="text-lg font-medium" href="#company-focus">Činnost</a>
<a className="text-lg font-medium" href="#shop">Prodejna</a>
<a className="text-primary font-semibold" href="#contact">Kontaktovat</a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed">
<div className="max-w-7xl mx-auto relative z-10 text-white">
<span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium tracking-wide mb-6">TRADICE OD ROKU 1993</span>
<h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-6 max-w-4xl">
                Zemědělství s tradicí <br/>a odpovědností
            </h1>
<p className="text-lg md:text-xl text-white/90 max-w-2xl font-light mb-10 leading-relaxed">
                Komplexní zemědělská výroba, chov drůbeže a prasat, rostlinná produkce a zpracování. Stabilní partner v regionu Jižních Čech.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 bg-accent text-dark font-semibold rounded-lg hover:bg-[#B59C7F] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 min-w-[160px]" href="#company-focus">
                    Naše činnost
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all min-w-[160px]" href="#contact">
                    Kontaktovat
                </a>
</div>
</div>
</header>

<section className="py-20 md:py-32 px-6" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
<img alt="Farma Bohemia Vitae" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>

<div className="absolute -bottom-8 -right-4 md:right-8 bg-white p-6 rounded-xl shadow-hover border border-gray-100 max-w-[200px]">
<span className="block text-4xl font-serif font-bold text-primary mb-1">30+</span>
<span className="text-xs text-muted font-medium uppercase tracking-wide">Let zkušeností v oboru</span>
</div>
</div>
<div>
<h2 className="font-serif font-bold text-4xl text-dark mb-6 tracking-tight">O společnosti</h2>
<div className="space-y-6 text-muted leading-relaxed">
<p>
                        BOHEMIA VITAE Jindřichův Hradec, a.s. byla založena <strong>1. ledna 1993</strong>. Jsme tradiční zemědělská společnost (IČ: 48201987) s pevnými kořeny v jihočeském regionu.
                    </p>
<p>
                        Naše provozy jsou rozmístěny v okolí Jindřichova Hradce, Jarošova nad Nežárkou, Stráže nad Nežárkou, Lásenice a Kardašovy Řečice. Zaměřujeme se na uzavřený cyklus výroby – od obdělávání polí, přes výrobu krmných směsí, až po živočišnou výrobu a finální prodej produktů.
                    </p>
</div>
<div className="grid grid-cols-2 gap-8 mt-10 pt-10 border-t border-gray-200">
<div>
<h4 className="font-serif font-semibold text-xl text-dark mb-2">Regionální</h4>
<p className="text-sm text-muted">Působíme v srdci Jižních Čech s důrazem na lokální zaměstnanost.</p>
</div>
<div>
<h4 className="font-serif font-semibold text-xl text-dark mb-2">Komplexní</h4>
<p className="text-sm text-muted">Kombinujeme rostlinnou a živočišnou výrobu pro maximální efektivitu.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-gray-200/60" id="company-focus">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="font-serif font-bold text-4xl text-dark mb-4 tracking-tight">Naše činnost</h2>
<p className="text-muted text-lg">Komplexní portfolio služeb a produktů zajišťující stabilitu a kvalitu.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" role="list">

<button className="group text-left p-6 rounded-xl border border-gray-100 bg-cream/30 hover:bg-white hover:shadow-hover hover:border-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20" onclick="togglePanel('panel-1')">
<div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 20h10"></path><path d="M10 20c5.5-2.5.8-6.4 3-10"></path><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path></svg>
</div>
<h3 className="font-serif font-semibold text-xl mb-1 group-hover:text-primary transition-colors">Rostlinná výroba</h3>
<p className="text-sm text-muted">Obiloviny a krmiva</p>
</button>

<button className="group text-left p-6 rounded-xl border border-gray-100 bg-cream/30 hover:bg-white hover:shadow-hover hover:border-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20" onclick="togglePanel('panel-2')">
<div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.4 15a2.5 2.5 0 0 1-3.9 0L12 10l-4.5 5a2.5 2.5 0 0 1-3.9 0 2.5 2.5 0 0 1 0-3.9l.7-.7A5.3 5.3 0 0 1 8 8.8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2.8c1 .3 1.9.9 2.6 1.6l.7.7a2.5 2.5 0 0 1 .1 3.9Z"></path><path d="m8 13 1.6-1.8"></path><path d="m14.4 11.2 1.6 1.8"></path></svg>
</div>
<h3 className="font-serif font-semibold text-xl mb-1 group-hover:text-primary transition-colors">Chov drůbeže</h3>
<p className="text-sm text-muted">Vejce a brojleři</p>
</button>

<button className="group text-left p-6 rounded-xl border border-gray-100 bg-cream/30 hover:bg-white hover:shadow-hover hover:border-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20" onclick="togglePanel('panel-3')">
<div className="w-12 h-12 rounded-lg bg-accent/20 text-[#8C7355] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">

<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" x2="12" y1="8" y2="8"></line><line x1="3.95" x2="8.54" y1="6.06" y2="14"></line><line x1="10.88" x2="15.46" y1="21.94" y2="14"></line></svg>
</div>
<h3 className="font-serif font-semibold text-xl mb-1 group-hover:text-primary transition-colors">Chov prasat</h3>
<p className="text-sm text-muted">Jatečné maso</p>
</button>

<button className="group text-left p-6 rounded-xl border border-gray-100 bg-cream/30 hover:bg-white hover:shadow-hover hover:border-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20" onclick="togglePanel('panel-4')">
<div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path><path d="M3 9h18"></path><path d="M16 13H8"></path><path d="M16 21H8"></path><path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9"></path></svg>
</div>
<h3 className="font-serif font-semibold text-xl mb-1 group-hover:text-primary transition-colors">Prodejna</h3>
<p className="text-sm text-muted">Přímý prodej</p>
</button>
</div>

<div className="relative overflow-hidden min-h-[0px] transition-all" id="panels-container">

<div className="panel-content hidden bg-cream rounded-2xl p-8 lg:p-12 animate-fade-in border border-gray-100" id="panel-1">
<div className="flex flex-col md:flex-row gap-10 items-center">
<img alt="Rostlinná výroba" className="w-full md:w-1/2 rounded-xl shadow-md object-cover h-64 md:h-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="w-full md:w-1/2">
<h3 className="font-serif font-bold text-3xl mb-4">Rostlinná výroba</h3>
<p className="text-muted mb-6 leading-relaxed">
                                Obhospodařujeme rozsáhlé plochy orné půdy v okolí našich provozů. Zaměřujeme se na pěstování obilovin (pšenice, ječmen), řepky a kukuřice. Většina produkce slouží jako základ pro vlastní výrobnu krmných směsí, což nám umožňuje kontrolovat kvalitu výživy našich zvířat od samého počátku.
                            </p>
<ul className="space-y-2 mb-8 text-sm font-medium text-dark">
<li className="flex items-center gap-2"><svg className="text-primary w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Pěstování krmných obilovin</li>
<li className="flex items-center gap-2"><svg className="text-primary w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Vlastní míchárna krmiv</li>
</ul>
<a className="text-primary hover:text-secondary font-semibold border-b border-primary/30 hover:border-secondary transition-all" href="#contact">Mám zájem o spolupráci</a>
</div>
</div>
</div>

<div className="panel-content hidden bg-cream rounded-2xl p-8 lg:p-12 animate-fade-in border border-gray-100" id="panel-2">
<div className="flex flex-col md:flex-row gap-10 items-center">
<img alt="Chov drůbeže" className="w-full md:w-1/2 rounded-xl shadow-md object-cover h-64 md:h-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="w-full md:w-1/2">
<h3 className="font-serif font-bold text-3xl mb-4">Chov drůbeže</h3>
<p className="text-muted mb-6 leading-relaxed">
                                Drůbežárna je jednou z hlavních činností společnosti. Specializujeme se na produkci konzumních vajec a výkrm brojlerů. Naše chovy splňují přísné normy na welfare zvířat. Vejce z našich chovů najdete v naší podnikové prodejně i v regionální síti obchodů.
                            </p>
<a className="text-primary hover:text-secondary font-semibold border-b border-primary/30 hover:border-secondary transition-all" href="#shop">Navštívit podnikovou prodejnu</a>
</div>
</div>
</div>

<div className="panel-content hidden bg-cream rounded-2xl p-8 lg:p-12 animate-fade-in border border-gray-100" id="panel-3">
<div className="flex flex-col md:flex-row gap-10 items-center">
<img alt="Chov prasat" className="w-full md:w-1/2 rounded-xl shadow-md object-cover h-64 md:h-80" src="https://images.unsplash.com/photo-1604848698030-c434ba08ece1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="w-full md:w-1/2">
<h3 className="font-serif font-bold text-3xl mb-4">Chov prasat</h3>
<p className="text-muted mb-6 leading-relaxed">
                                Provozujeme uzavřený obrat stáda prasat. Produkujeme kvalitní jatečná prasata krmená směsmi z vlastní výroby. Díky tomu ručíme za původ a kvalitu masa.
                            </p>
<a className="text-primary hover:text-secondary font-semibold border-b border-primary/30 hover:border-secondary transition-all" href="#contact">Kontaktovat vedoucího</a>
</div>
</div>
</div>
<div className="panel-content hidden bg-cream rounded-2xl p-8 lg:p-12 animate-fade-in border border-gray-100" id="panel-4">
<div className="flex flex-col md:flex-row gap-10 items-center">
<img alt="Prodejna" className="w-full md:w-1/2 rounded-xl shadow-md object-cover h-64 md:h-80" src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="w-full md:w-1/2">
<h3 className="font-serif font-bold text-3xl mb-4">Podniková prodejna</h3>
<p className="text-muted mb-6 leading-relaxed">
                                V areálu v Jarošově nad Nežárkou provozujeme podnikovou prodejnu. Nabízíme čerstvá vejce přímo z pásu, drůbež, sezónní produkty a krmné směsi pro drobnochovatele.
                            </p>
<div className="bg-white p-4 rounded border border-gray-200 inline-block">
<span className="block text-xs font-bold text-primary uppercase tracking-wider mb-1">Otevírací doba</span>
<span className="block text-dark">Po–Pá: 7:00 – 15:30</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-cream" id="locations">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-serif font-bold text-4xl text-dark mb-10 text-center tracking-tight">Kde nás najdete</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

<div className="bg-white p-8 rounded-xl shadow-soft border border-gray-100 flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="font-serif font-semibold text-lg mb-2">Sídlo &amp; Prodejna</h3>
<p className="text-muted text-sm leading-relaxed">Jarošov nad Nežárkou 239<br/>378 41 Jarošov nad Nežárkou</p>
</div>

<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-white/50 p-6 rounded-lg border border-gray-200/50">
<h4 className="font-semibold text-dark mb-1">Jindřichův Hradec</h4>
<p className="text-sm text-muted">Novodvorská 202, 377 01</p>
</div>
<div className="bg-white/50 p-6 rounded-lg border border-gray-200/50">
<h4 className="font-semibold text-dark mb-1">Stráž nad Nežárkou</h4>
<p className="text-sm text-muted">Provoz Stráž, 378 02</p>
</div>
<div className="bg-white/50 p-6 rounded-lg border border-gray-200/50">
<h4 className="font-semibold text-dark mb-1">Lásenice</h4>
<p className="text-sm text-muted">Lásenice 32, 378 01</p>
</div>
<div className="bg-white/50 p-6 rounded-lg border border-gray-200/50">
<h4 className="font-semibold text-dark mb-1">Kardašova Řečice</h4>
<p className="text-sm text-muted">Provoz Řečice, 378 21</p>
</div>
</div>
</div>

<div className="w-full h-80 bg-gray-200 rounded-xl overflow-hidden relative group">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.583567845681!2d15.06606017693991!3d49.18664057137834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d20d6f3e79203%3A0x40d58437f2a1b142!2sJaro%C5%A1ov%20nad%20Ne%C5%BE%C3%A1rkou%20239%2C%20378%2041%20Jaro%C5%A1ov%20nad%20Ne%C5%BE%C3%A1rkou!5e0!3m2!1scs!2scz!4v1709228383212!5m2!1scs!2scz" style={{border: '0', filter: 'grayscale(1) contrast(1.2) opacity(0.8)'}} title="Mapa sídla" width="100%"></iframe>
<div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 pointer-events-none transition-colors"></div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white border-t border-gray-200" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="font-serif font-bold text-4xl text-dark mb-8 tracking-tight">Kontaktujte nás</h2>
<div className="space-y-6 text-dark/80">
<p className="text-lg">Máte dotaz k našim produktům nebo zájem o spolupráci? Jsme vám k dispozici.</p>
<div className="py-6 border-y border-gray-100 space-y-4">
<div className="flex items-start gap-4">
<span className="mt-1 w-5 h-5 text-primary"><svg fill="none" height="100%" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
<div>
<p className="font-semibold text-dark">Telefonní spojení</p>
<a className="block hover:text-primary mt-1" href="tel:+420384324780">+420 384 324 780 (Kancelář)</a>
<a className="block hover:text-primary" href="tel:+420384323327">+420 384 323 327 (Drůbežárna)</a>
</div>
</div>
<div className="flex items-start gap-4">
<span className="mt-1 w-5 h-5 text-primary"><svg fill="none" height="100%" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></span>
<div>
<p className="font-semibold text-dark">E-mail</p>
<a className="block hover:text-primary mt-1" href="mailto:info@bohemiavitae.cz">info@bohemiavitae.cz</a>
</div>
</div>
</div>
<div>
<p className="font-semibold text-dark mb-2">Vedoucí provozu:</p>
<ul className="space-y-1 text-sm text-muted">
<li>Pavel Jílek: <a className="hover:text-primary" href="tel:+420727878406">+420 727 878 406</a></li>
<li>Petra Lokesová: <a className="hover:text-primary" href="tel:+420727878403">+420 727 878 403</a></li>
</ul>
</div>
</div>
</div>

<form className="bg-cream p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100" onsubmit="event.preventDefault(); alert('Děkujeme, formulář byl odeslán.');">
<div className="space-y-5">
<div>
<label className="block text-sm font-medium text-dark mb-1" htmlFor="name">Jméno a příjmení</label>
<input className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-dark placeholder-gray-400" id="name" required="" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-dark mb-1" htmlFor="email">E-mail</label>
<input className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-dark placeholder-gray-400" id="email" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-dark mb-1" htmlFor="phone">Telefon</label>
<input className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-dark placeholder-gray-400" id="phone" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-dark mb-1" htmlFor="message">Zpráva</label>
<textarea className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-dark placeholder-gray-400 resize-none" id="message" rows="4"></textarea>
</div>

<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="custom-checkbox peer sr-only" required="" type="checkbox"/>
<div className="h-5 w-5 border border-gray-300 rounded bg-white transition-colors peer-focus:ring-2 peer-focus:ring-primary/20">
<svg className="hidden w-3 h-3 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</div>
<span className="text-xs text-muted group-hover:text-dark transition-colors">Souhlasím se zpracováním osobních údajů pro účely komunikace.</span>
</label>
<button className="w-full py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg mt-2" type="submit">Odeslat zprávu</button>
</div>
</form>
</div>
</section>

<footer className="bg-dark text-white pt-16 pb-8 border-t border-white/5 mt-auto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<span className="font-serif font-bold text-2xl tracking-tight mb-4 block">BOHEMIA VITAE</span>
<p className="text-white/60 text-sm max-w-sm mb-6">Tradiční zemědělská výroba v Jižních Čechách. Rostlinná a živočišná výroba s důrazem na kvalitu a regionální odpovědnost.</p>
<div className="text-xs text-white/40 space-y-1">
<p>IČ: 48201987</p>
<p>DIČ: CZ48201987</p>
<p>Spisová značka B 566 vedená u Krajského soudu v Č. Budějovicích</p>
</div>
</div>
<div>
<h4 className="font-medium text-lg mb-4 text-accent">Navigace</h4>
<ul className="space-y-2 text-sm text-white/70">
<li><a className="hover:text-white transition-colors" href="#about">O společnosti</a></li>
<li><a className="hover:text-white transition-colors" href="#company-focus">Naše činnost</a></li>
<li><a className="hover:text-white transition-colors" href="#shop">Prodejna</a></li>
<li><a className="hover:text-white transition-colors" href="#locations">Provozovny</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-lg mb-4 text-accent">Rychlý kontakt</h4>
<ul className="space-y-2 text-sm text-white/70">
<li>Jarošov nad Nežárkou 239</li>
<li><a className="hover:text-white transition-colors" href="mailto:info@bohemiavitae.cz">info@bohemiavitae.cz</a></li>
<li><a className="hover:text-white transition-colors" href="tel:+420384324780">+420 384 324 780</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
<p>© 2025 BOHEMIA VITAE Jindřichův Hradec, a.s. Všechna práva vyhrazena.</p>
<p>Designed with respect to tradition.</p>
</div>
</div>
</footer>



    </>
  );
}
