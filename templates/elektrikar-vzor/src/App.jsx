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
brand: {
yellow: '#FACC15',
dark: '#0A0A0A',
gray: '#171717',
}
},
fontSize: {
'xxs': '0.65rem',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-element');
            elements.forEach(el => observer.observe(el));
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
      

<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-yellow text-2xl" icon="solar:lightbulb-linear"></iconify-icon>
<span className="text-xl font-medium tracking-tight text-brand-dark font-space-grotesk">[NÁZEV FIRMY]</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-brand-dark transition-colors" href="#sluzby">Služby</a>
<a className="hover:text-brand-dark transition-colors" href="#proc-my">Proč my</a>
<a className="hover:text-brand-dark transition-colors" href="#reference">Reference</a>
<a className="hover:text-brand-dark transition-colors" href="#kontakt">Kontakt</a>
</div>
<a className="bg-brand-yellow text-brand-dark px-6 py-2.5 rounded-full text-sm font-medium hover:bg-yellow-400 transition-colors flex items-center gap-2" href="tel:+420123456789">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                +420 123 456 789
            </a>
</div>
</nav>

<section className="relative bg-brand-dark pt-20 pb-24 overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-32 opacity-10 bg-dot-pattern hidden xl:block pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 opacity-10 bg-dot-pattern hidden xl:block pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal-element">
<h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 font-space-grotesk font-medium">
                    BEZPEČNÁ A SPOLEHLIVÁ ELEKTROINSTALACE PRO VÁŠ DOMOV I FIRMU
                </h1>
<p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                    Profesionální elektroinstalační práce, opravy a údržba pro domácnosti i firmy. Rychle, bezpečně a za férové ceny.
                </p>
<div className="flex flex-wrap items-center gap-4">
<a className="bg-brand-yellow text-brand-dark px-8 py-3.5 rounded-full text-sm font-medium hover:bg-yellow-400 transition-colors flex items-center gap-2" href="tel:+420123456789">
<div className="bg-white p-1 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
</div>
                        Zavolat: +420 123 456 789
                    </a>
<a className="border border-gray-700 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:border-gray-500 transition-colors" href="#sluzby">
                        Zobrazit služby
                    </a>
</div>
</div>
<div className="relative reveal-element delay-200">
<div className="absolute inset-0 bg-brand-yellow/10 rounded-3xl transform translate-x-4 translate-y-4"></div>
<div className="relative rounded-3xl overflow-hidden h-[500px] border border-gray-800">
<img alt="Elektrikář při práci" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24" id="sluzby">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal-element">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-brand-yellow"></span>
<span className="text-brand-yellow text-xs font-medium tracking-widest uppercase">Služby</span>
</div>
<h2 className="text-3xl md:text-4xl text-brand-dark tracking-tight font-space-grotesk font-medium">CO PRO VÁS MŮŽEME UDĚLAT</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden h-72 reveal-element delay-100">
<img className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1595856898575-9d187bd32fd6?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-black/90 via-black/30 to-transparent absolute inset-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-white font-medium text-lg">Elektroinstalace v bytech a domech</span>
<iconify-icon className="text-brand-yellow text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-72 reveal-element delay-200">
<img className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="bg-gradient-to-t from-black/90 via-black/30 to-transparent absolute inset-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-white font-medium text-lg">Opravy elektroinstalace</span>
<iconify-icon className="text-brand-yellow text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-72 reveal-element delay-300">
<img className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1647260671826-0fde2e635067?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-black/90 via-black/30 to-transparent absolute inset-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-white font-medium text-lg">Montáž zásuvek a vypínačů</span>
<iconify-icon className="text-brand-yellow text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-72 reveal-element delay-100">
<img className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1520234939602-6b957f8b9c1c?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-black/90 via-black/30 to-transparent absolute inset-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-white font-medium text-lg">Revize elektro</span>
<iconify-icon className="text-brand-yellow text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-72 reveal-element delay-200">
<img className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1595830807118-aef995773265?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-black/90 via-black/30 to-transparent absolute inset-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-white font-medium text-lg">Instalace osvětlení</span>
<iconify-icon className="text-brand-yellow text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-72 reveal-element delay-300">
<img className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1635335874521-7987db781153?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-black/90 via-black/30 to-transparent absolute inset-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-white font-medium text-lg">Zapojení spotřebičů</span>
<iconify-icon className="text-brand-yellow text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 py-24" id="proc-my">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal-element text-center max-w-2xl mx-auto">
<div className="flex items-center justify-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-brand-yellow"></span>
<span className="text-brand-yellow text-xs font-medium tracking-widest uppercase">Výhody</span>
<span className="w-8 h-[1px] bg-brand-yellow"></span>
</div>
<h2 className="text-3xl md:text-4xl text-brand-dark tracking-tight font-space-grotesk font-medium">PROČ ZVOLIT NÁS</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-2xl border border-gray-100 reveal-element delay-100">
<div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-brand-yellow text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-brand-dark mb-2">Rychlá odezva</h3>
<p className="text-gray-500 text-sm">Víme, že elektřina nepočká. Na vaše požadavky reagujeme v co nejkratším možném čase.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 reveal-element delay-200">
<div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-brand-yellow text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-brand-dark mb-2">Bezpečnost</h3>
<p className="text-gray-500 text-sm">Dodržujeme nejpřísnější normy. Bezpečnost vaší domácnosti nebo firmy je pro nás prioritou.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 reveal-element delay-300">
<div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-brand-yellow text-2xl" icon="solar:stars-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-brand-dark mb-2">Čistá práce</h3>
<p className="text-gray-500 text-sm">Po dokončení oprav a instalací po sobě vždy uklidíme. Zanecháme váš prostor v pořádku.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 reveal-element delay-100">
<div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-brand-yellow text-2xl" icon="solar:wallet-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-brand-dark mb-2">Férové ceny</h3>
<p className="text-gray-500 text-sm">Kvalitní a profesionální služby za ceny, které předem jasně dohodneme. Žádné skryté poplatky.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark relative overflow-hidden" id="reference">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 reveal-element">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-brand-yellow"></span>
<span className="text-brand-yellow text-xs font-medium tracking-widest uppercase">Reference</span>
</div>
<h2 className="text-3xl md:text-4xl text-white tracking-tight font-space-grotesk font-medium">HODNOCENÍ NAŠICH ZÁKAZNÍKŮ</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#171717] p-8 rounded-2xl border border-white/5 reveal-element delay-100 flex flex-col justify-between">
<div>
<div className="flex text-brand-yellow mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-6">„Rychlá domluva a naprosto profesionální přístup. Potřebovali jsme vyměnit staré rozvody v bytě a vše proběhlo bez komplikací. Můžu jen doporučit.“</p>
</div>
<div className="font-medium text-white text-sm">
                        Jan Novák, <span className="text-gray-500 font-normal">Zákazník</span>
</div>
</div>

<div className="bg-[#171717] p-8 rounded-2xl border border-white/5 reveal-element delay-200 flex flex-col justify-between">
<div>
<div className="flex text-brand-yellow mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-6">„Zavolal jsem kvůli výpadku pojistek ve večerních hodinách. Přijeli velmi rychle, závadu okamžitě odhalili a opravili. Skvělá služba!“</p>
</div>
<div className="font-medium text-white text-sm">
                        Petr Dvořák, <span className="text-gray-500 font-normal">Majitel domu</span>
</div>
</div>

<div className="bg-[#171717] p-8 rounded-2xl border border-white/5 reveal-element delay-300 flex flex-col justify-between">
<div>
<div className="flex text-brand-yellow mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-6">„Firma nám instalovala nové chytré osvětlení a přidávala zásuvky. Vše precizní, uklizeno a za dohodnutou cenu. Moc děkujeme za super práci.“</p>
</div>
<div className="font-medium text-white text-sm">
                        Lucie Svobodová, <span className="text-gray-500 font-normal">Zákaznice</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="kontakt">
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="reveal-element">
<div className="flex items-center justify-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-brand-yellow"></span>
<span className="text-brand-yellow text-xs font-medium tracking-widest uppercase">Kontakt</span>
<span className="w-8 h-[1px] bg-brand-yellow"></span>
</div>
<h2 className="text-3xl md:text-4xl text-brand-dark tracking-tight mb-8 font-space-grotesk font-medium">POTŘEBUJETE ELEKTRIKÁŘE?</h2>
<p className="text-gray-500 mb-16 leading-relaxed max-w-lg mx-auto">
                    Neváhejte se na nás obrátit s jakýmkoliv dotazem či problémem. Jsme tu pro vás a připraveni rychle pomoci.
                </p>
<div className="grid md:grid-cols-2 gap-10 mb-16 text-left max-w-3xl mx-auto">
<div className="flex items-start gap-4">
<div className="bg-brand-dark text-brand-yellow p-3 rounded-full flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">Telefon</p>
<p className="text-xl font-medium text-brand-dark">+420 123 456 789</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-brand-dark text-brand-yellow p-3 rounded-full flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">E-mail</p>
<p className="text-lg font-medium text-brand-dark">info@elektrikar.cz</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-brand-dark text-brand-yellow p-3 rounded-full flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">Oblast působení</p>
<p className="text-lg font-medium text-brand-dark">Celý region a okolí do 50 km</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-brand-dark text-brand-yellow p-3 rounded-full flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">Otevírací doba</p>
<p className="text-lg font-medium text-brand-dark">Po - Pá: 8:00 - 18:00</p>
</div>
</div>
</div>
<a className="bg-brand-yellow text-brand-dark px-10 py-4 rounded-full text-base font-medium hover:bg-yellow-400 transition-colors inline-flex items-center gap-3 shadow-lg shadow-brand-yellow/20" href="tel:+420123456789">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon> Zavolat hned
                </a>
</div>
</div>
</section>

<footer className="bg-brand-dark border-t border-gray-900 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-yellow text-xl" icon="solar:lightbulb-linear"></iconify-icon>
<span className="text-lg font-medium text-white tracking-tight font-space-grotesk">[NÁZEV FIRMY]</span>
</div>
<div className="flex flex-col md:flex-row items-center gap-4 text-center">
<span>Telefon: <a className="text-brand-yellow hover:text-white transition-colors" href="tel:+420123456789">+420 123 456 789</a></span>
<span className="hidden md:inline">•</span>
<span>Působíme v: Celý region do 50 km</span>
</div>
<div>
                © 2024 [Název firmy]. Všechna práva vyhrazena.
            </div>
</div>
</footer>


    </>
  );
}
