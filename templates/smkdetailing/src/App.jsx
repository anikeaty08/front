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
display: ['Oswald', 'sans-serif'],
},
colors: {
brand: {
gold: '#C5A059', // Metallic Gold from logo
dark: '#0a0a0a',
panel: '#121212',
accent: '#E30613' // Subtle red accent mentioned in prompt
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">

<a className="flex items-center group" href="#">
<img alt="SMK Detailing Přerov Logo" className="md:h-16 group-hover:brightness-125 transition-all w-auto h-12 object-cover bg-center brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e37e9bde-de88-4490-9ae7-806149b9451b_320w.jpg?w=800&amp;q=80"/>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-normal tracking-wide text-white">
<a className="hover:text-brand-gold transition-colors" href="#home">
            Start
          </a>
<a className="hover:text-brand-gold transition-colors" href="#oferta">
            Služby
          </a>
<a className="hover:text-brand-gold transition-colors" href="#realizacje">
            Ukázky
          </a>
<a className="hover:text-brand-gold transition-colors" href="#o-nas">
            O nás
          </a>
<a className="hover:text-brand-gold transition-colors" href="#cennik">
            Ceník
          </a>
</div>
<div className="flex items-center gap-4">
<button className="lg:hidden text-white">
<svg aria-hidden="true" className="lucide lucide-menu w-8 h-8" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<header className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Luxury Sports Car Garage" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&amp;w=2800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-transparent to-brand-dark/40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-brand-gold/30 rounded-full bg-brand-gold/10 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
<span className="text-xs font-medium text-brand-gold uppercase tracking-widest">
              Profesionální Detailing
            </span>
</div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-[0.9] mb-6">
            DOKONALÝ VZHLED
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
              PRO VÁŠ VŮZ
            </span>
</h1>
<p className="text-lg text-neutral-400 mb-10 max-w-xl leading-relaxed">
            Komplexní detailing a péče o vozy v Přerově. SMK Detailing vrací
            vašemu autu původní lesk a chrání ho na dlouhá léta.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-brand-gold hover:bg-white transition-all uppercase tracking-wide" href="#oferta">
              Naše Služby
              <svg aria-hidden="true" className="lucide lucide-arrow-right ml-2 w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/20 hover:bg-white/5 transition-all uppercase tracking-wide backdrop-blur-sm" href="#realizacje">
              Ukázky Práce
            </a>
</div>
</div>
</div>
</header>

<section className="py-24 bg-brand-dark relative" id="oferta">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="">
<h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
              NAŠE SLUŽBY
            </h2>
<p className="text-neutral-400 max-w-md">
              Specializujeme se na profesionální čištění, leštění a ochranu laku
              všech typů vozidel.
            </p>
</div>
<div className="hidden md:block h-px bg-white/10 flex-grow ml-12 mb-2"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="group relative p-8 bg-brand-panel border border-white/5 hover:border-brand-gold/50 transition-all duration-300">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<svg aria-hidden="true" className="lucide lucide-wrench w-16 h-16 text-white" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
<div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded mb-6 group-hover:bg-brand-gold/20 transition-colors">
<svg aria-hidden="true" className="lucide lucide-settings text-brand-gold w-6 h-6" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Čištění Interiéru
            </h3>
<p className="text-base text-neutral-500 mb-6 group-hover:text-neutral-400 transition-colors">
              Hloubkové čištění sedadel, tepování koberců a ošetření plastů. Váš
              interiér bude vonět a vypadat jako nový.
            </p>
<ul className="text-sm text-neutral-400 space-y-2">
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                Tepování sedadel
              </li>
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                Ošetření kůže a plastů
              </li>
</ul>
</article>

<article className="group relative p-8 bg-brand-panel border border-white/5 hover:border-brand-gold/50 transition-all duration-300">
<div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded mb-6 group-hover:bg-brand-gold/20 transition-colors">
<svg aria-hidden="true" className="lucide lucide-gem text-brand-gold w-6 h-6" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Leštění Laku
            </h3>
<p className="text-base text-neutral-500 mb-6 group-hover:text-neutral-400 transition-colors">
              Odstranění škrábanců, hologramů a oxidace. Vícekrokové leštění pro
              maximální hloubku a lesk barvy.
            </p>
<ul className="text-sm text-neutral-400 space-y-2">
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                Odstranění škrábanců
              </li>
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                Vícekrokové leštění
              </li>
</ul>
</article>

<article className="group relative p-8 bg-brand-panel border border-white/5 hover:border-brand-gold/50 transition-all duration-300">
<div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded mb-6 group-hover:bg-brand-gold/20 transition-colors">
<svg aria-hidden="true" className="lucide lucide-globe text-brand-gold w-6 h-6" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Keramická Ochrana
            </h3>
<p className="text-base text-neutral-500 mb-6 group-hover:text-neutral-400 transition-colors">
              Dlouhodobá ochrana laku před vnějšími vlivy, UV zářením a
              nečistotami. Extrémní hydrofobní efekt.
            </p>
<ul className="text-sm text-neutral-400 space-y-2">
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                Keramické povlaky
              </li>
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                Ochrana oken a kol
              </li>
</ul>
</article>

<article className="group relative p-8 bg-brand-panel border border-white/5 hover:border-brand-gold/50 transition-all duration-300">
<div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded mb-6 group-hover:bg-brand-gold/20 transition-colors">
<svg aria-hidden="true" className="lucide lucide-crown text-brand-gold w-6 h-6" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Prémiové Mytí
            </h3>
<p className="text-base text-neutral-500 mb-6 group-hover:text-neutral-400 transition-colors">
              Šetrné ruční mytí, chemická a mechanická dekontaminace laku.
              Základ pro další detailingové postupy.
            </p>
<ul className="text-sm text-neutral-400 space-y-2">
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                Ruční mytí
              </li>
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                Odstranění asfaltu a polétavé rzi
              </li>
</ul>
</article>
</div>
</div>
</section>

<section className="border-y bg-neutral-950 border-white/5 pt-24 pb-24" id="o-nas">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="-top-4 -left-4 border-brand-gold/50 w-24 h-24 z-10 border-t-2 border-l-2 absolute"></div>
<img alt="Team ZapaCars working" className="hover:grayscale-0 transition-all duration-700 shadow-black/50 w-full object-cover bg-center z-10 relative shadow-2xl grayscale" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&amp;q=80"/>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-gold/50"></div>
</div>
<div className="">
<h4 className="text-brand-gold uppercase tracking-widest font-medium mb-2">
              Náš Příběh
            </h4>
<h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">
              VÁŠEŇ PRO DOKONALÝ DETAIL
            </h2>
<div className="space-y-6 text-neutral-400">
<p className="">
                Vše začalo vášní pro auta a touhou po dokonalosti. V SMK
                Detailing Přerov věříme, že každé auto si zaslouží vypadat
                skvěle, bez ohledu na věk nebo značku.
              </p>
<p className="">
                Dnes jsme profesionálním studiem, kde se preciznost setkává s
                nejlepší kosmetikou na trhu. Nespokojíme se s průměrem. Ke
                každému vozu přistupujeme s maximální péčí.
              </p>
<p className="">
                Sázíme na kvalitu, poctivou práci a spokojenost zákazníka. Váš
                úsměv při přebírání vozu je pro nás tou největší odměnou.
              </p>
</div>
<div className="mt-10 flex gap-8 border-t border-white/10 pt-8">
<div className="">
<span className="block text-3xl font-display text-white font-semibold">
                  24/7
                </span>
<span className="text-sm text-neutral-500 uppercase tracking-wide">
                  Otevřeno
                </span>
</div>
<div className="">
<span className="block text-3xl font-display text-white font-semibold">
                  100+
                </span>
<span className="text-sm text-neutral-500 uppercase tracking-wide">
                  Spokojených klientů
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark" id="realizacje">
<div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end">
<h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight">
          UKÁZKY NAŠÍ PRÁCE
        </h2>
<a className="hidden md:inline-flex items-center text-brand-gold hover:text-white transition-colors md:mt-0 mt-4" href="#">Zobrazit vše</a>
</div>
<div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Renowacja Mustang" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity flex flex-col bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 bg-[url(https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1600&amp;q=80)] bg-cover bg-center pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<p className="text-brand-gold text-sm uppercase tracking-widest mb-1">
              Detailing
            </p>
<h3 className="text-white text-2xl font-display font-medium">
              Kompletní péče
            </h3>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Porsche Lakiernictwo" className="transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-80 w-full h-full object-cover bg-center" src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1600&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity flex flex-col bg-center bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 bg-[url(https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1600&amp;q=80)] bg-cover pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<p className="text-brand-gold text-sm uppercase tracking-widest mb-1">
              Keramika
            </p>
<h3 className="text-white text-2xl font-display font-medium">
              Ochrana laku
            </h3>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Tuning Chevrolet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
<p className="text-brand-gold text-sm uppercase tracking-widest mb-1">
              Čištění
            </p>
<h3 className="text-white text-2xl font-display font-medium">
              Péče o interiér
            </h3>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Serwis BMW" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
<p className="text-brand-gold text-sm uppercase tracking-widest mb-1">
              Leštění
            </p>
<h3 className="text-white text-2xl font-display font-medium">
              Korekce laku
            </h3>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Import USA" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
<p className="text-brand-gold text-sm uppercase tracking-widest mb-1">
              Dekontaminace
            </p>
<h3 className="text-white text-2xl font-display font-medium">
              Příprava laku
            </h3>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Detailing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
<p className="text-brand-gold text-sm uppercase tracking-widest mb-1">
              Detailing
            </p>
<h3 className="text-white text-2xl font-display font-medium">
              Keramika &amp; Vosk
            </h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-panel" id="cennik">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="">
<h2 className="font-display text-4xl font-semibold text-white tracking-tight mb-8">
            ORIENTAČNÍ CENÍK
          </h2>
<p className="text-neutral-400 mb-8">
            Každý vůz vyžaduje individuální přístup v závislosti na jeho stavu a
            velikosti. Níže uvádíme základní ceny našich služeb.
          </p>
<div className="space-y-4">
<div className="flex justify-between items-center p-4 bg-white/5 border border-white/5 rounded">
<span className="text-white">Základní ruční mytí</span>
<span className="text-brand-gold font-medium">od 500 CZK</span>
</div>
<div className="flex justify-between items-center p-4 bg-white/5 border border-white/5 rounded">
<span className="text-white">Čištění interiéru</span>
<span className="text-brand-gold font-medium">od 1 500 CZK</span>
</div>
<div className="flex justify-between items-center p-4 bg-white/5 border border-white/5 rounded">
<span className="text-white">Jednokrokové leštění laku</span>
<span className="text-brand-gold font-medium">od 4 000 CZK</span>
</div>
<div className="flex justify-between items-center p-4 bg-white/5 border border-white/5 rounded">
<span className="text-white">Aplikace keramické ochrany</span>
<span className="text-brand-gold font-medium">od 8 000 CZK</span>
</div>
<div className="flex justify-between items-center p-4 bg-white/5 border border-white/5 rounded">
<span className="text-white">Kompletní detailing</span>
<span className="text-brand-gold font-medium">
                Individuální ocenění
              </span>
</div>
</div>
<div className="mt-8 p-6 bg-brand-gold/10 border border-brand-gold/20 rounded">
<p className="text-sm text-brand-gold">
<svg aria-hidden="true" className="lucide lucide-info inline w-4 h-4 mr-1" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
              Ceny jsou pouze orientační. Přesnou kalkulaci vám rádi sdělíme po
              prohlídce vozu.
            </p>
</div>
</div>

<div className="">
<h2 className="font-display text-4xl font-semibold text-white tracking-tight mb-8">
            NEJČASTĚJŠÍ DOTAZY (FAQ)
          </h2>
<div className="space-y-4">
<details className="group p-6 bg-neutral-900 border-l-2 border-transparent open:border-brand-gold cursor-pointer transition-colors hover:bg-neutral-800">
<summary className="flex justify-between items-center font-medium text-white list-none">
                Jak dlouho trvá kompletní čištění a leštění?
                <span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-neutral-400 mt-4 text-base">
                Doba trvání se liší podle rozsahu prací. Základní čištění zabere
                pár hodin, zatímco kompletní korekce laku a aplikace keramiky
                může trvat 2 až 4 dny.
              </p>
</details>
<details className="group p-6 bg-neutral-900 border-l-2 border-transparent open:border-brand-gold cursor-pointer transition-colors hover:bg-neutral-800">
<summary className="flex justify-between items-center font-medium text-white list-none">
                S jakou autokosmetikou pracujete?
                <span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-neutral-400 mt-4 text-base">
                Používáme pouze ověřené a profesionální značky prémiové
                autokosmetiky, které zaručují ty nejlepší výsledky a maximální
                šetrnost k vašemu vozu.
              </p>
</details>
<details className="group p-6 bg-neutral-900 border-l-2 border-transparent open:border-brand-gold cursor-pointer transition-colors hover:bg-neutral-800">
<summary className="flex justify-between items-center font-medium text-white list-none">
                Je nutné se objednat předem?
                <span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-neutral-400 mt-4 text-base">
                Ano, doporučujeme si termín rezervovat předem telefonicky. Díky
                tomu vám můžeme zaručit, že se vašemu vozu budeme moci plně
                věnovat.
              </p>
</details>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative overflow-hidden" id="kontakt">
<div className="bg-gradient-to-l from-brand-gold/5 to-transparent w-1/3 h-full absolute top-0 right-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="">
<h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
              KONTAKTUJTE NÁS
            </h2>
<p className="text-neutral-400 mb-10 text-lg">
              Máte zájem o naše služby nebo se chcete na něco zeptat? Napište
              nám nebo zavolejte, rádi vám poradíme.
            </p>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<input className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-500 focus:border-brand-gold focus:outline-none transition-colors rounded-sm" placeholder="Jméno a příjmení" type="text"/>
<input className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-500 focus:border-brand-gold focus:outline-none transition-colors rounded-sm" placeholder="Telefon" type="tel"/>
</div>
<input className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-500 focus:border-brand-gold focus:outline-none transition-colors rounded-sm" placeholder="E-mailová adresa" type="email"/>
<select className="w-full bg-neutral-900 border border-white/10 p-4 text-white focus:border-brand-gold focus:outline-none transition-colors rounded-sm appearance-none">
<option className="text-neutral-500" disabled="" selected="" value="">
                  Předmět zprávy
                </option>
<option value="interier">Čištění interiéru</option>
<option value="lesteni">Leštění laku</option>
<option value="keramika">Keramická ochrana</option>
<option value="jine">Jiné</option>
</select>
<textarea className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-500 focus:border-brand-gold focus:outline-none transition-colors rounded-sm" placeholder="Popište stav vašeho vozu a jaké služby požadujete..." rows="4"></textarea>
<button className="w-full md:w-auto px-10 py-4 bg-brand-gold hover:bg-white text-black font-medium uppercase tracking-widest transition-colors flex items-center justify-center gap-2" type="submit">
                Odeslat zprávu
                <svg aria-hidden="true" className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</form>
</div>
<div className="flex flex-col justify-between">
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="p-3 bg-brand-panel border border-white/5 rounded">
<svg aria-hidden="true" className="lucide lucide-map-pin text-brand-gold w-6 h-6" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="">
<h3 className="text-white font-medium mb-1">Adresa</h3>
<p className="text-neutral-400">Tovární 95/9, 750 02 Přerov 2</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-brand-panel border border-white/5 rounded">
<svg aria-hidden="true" className="lucide lucide-phone text-brand-gold w-6 h-6" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div className="">
<h3 className="text-white font-medium mb-1">Telefon</h3>
<p className="text-neutral-400 hover:text-white transition-colors cursor-pointer">
                    730 665 481
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-brand-panel border border-white/5 rounded">
<svg aria-hidden="true" className="lucide lucide-clock text-brand-gold w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
</div>
<div className="">
<h3 className="text-white font-medium mb-1">Otevírací doba</h3>
<p className="text-neutral-400">Po - Ne: 24 hodin denně</p>
</div>
</div>
</div>

<div className="mt-8 w-full h-64 bg-neutral-900 border border-white/5 relative flex items-center justify-center group overflow-hidden">
<img alt="Map Placeholder" className="group-hover:scale-105 transition-transform duration-700 opacity-30 w-full h-full object-cover bg-center absolute top-0 right-0 bottom-0 left-0 grayscale" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&amp;q=80"/>
<a className="relative z-10 px-6 py-2 bg-white text-black font-medium text-sm rounded shadow-lg hover:bg-brand-gold transition-colors" href="#">
                Otevřít v Google Maps
              </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-brand-dark border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
</div>
<p className="leading-relaxed text-sm text-neutral-500 -translate-y-6">
              Profesionální detailingové studio v Přerově. Prémiová péče o
              exteriér i interiér vašeho vozu.
            </p>
</div>
<div className="">
<h5 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">
              Služby
            </h5>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="">
<a className="hover:text-brand-gold transition-colors" href="#">
                  Čištění interiéru
                </a>
</li>
<li className="">
<a className="hover:text-brand-gold transition-colors" href="#">
                  Leštění a ochrana laku
                </a>
</li>
</ul>
</div>
<div className="">
<h5 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">
              O nás
            </h5>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="">
<a className="hover:text-brand-gold transition-colors" href="#o-nas">
                  Náš příběh
                </a>
</li>
<li className="">
<a className="hover:text-brand-gold transition-colors" href="#realizacje">
                  Ukázky práce
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">
              Social Media
            </h5>
<div className="flex gap-4">
<a className="w-10 h-10 bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-brand-gold transition-all" href="#">
<svg aria-hidden="true" className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-brand-gold transition-all" href="#">
<svg aria-hidden="true" className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">© 2026 SMK Detailing Přerov. Všechna práva vyhrazena.</p>
<div className="text-neutral-700 text-xs flex gap-4">
<span>Detailing Přerov</span>
<span>•</span>
<span>Keramická ochrana</span>
<span>•</span>
<span>Leštění laku</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
