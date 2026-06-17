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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
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
      

<header className="bg-[#19454d] border-b-2 border-[#e3b55a] sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity" href="#">
<div className="bg-[#e3b55a] p-2 rounded-full text-[#19454d]">
<i className="w-6 h-6" data-lucide="steering-wheel" strokeWidth="1.5"></i>
</div>
<div>
<h1 className="text-xl font-semibold tracking-tight leading-none text-white">AUTOŠKOLA</h1>
<span className="text-sm font-medium tracking-widest text-[#e3b55a] uppercase">Profi</span>
</div>
</a>
<nav className="hidden md:flex gap-8">
<a className="text-lg font-medium text-gray-200 hover:text-[#e3b55a] transition-colors" href="#onas">O nás</a>
<a className="text-lg font-medium text-gray-200 hover:text-[#e3b55a] transition-colors" href="#kurzy">Kurzy a Ceník</a>
<a className="text-lg font-medium text-gray-200 hover:text-[#e3b55a] transition-colors" href="#vozidla">Naše vozidla</a>
<a className="text-lg font-medium text-gray-200 hover:text-[#e3b55a] transition-colors" href="#kontakt">Kontakt</a>
</nav>
<button className="md:hidden text-white hover:text-[#e3b55a] transition-colors">
<i className="w-8 h-8" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>
<main>

<section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden" id="onas">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="z-10">
<div className="inline-flex items-center gap-2 border border-[#e3b55a] text-[#e3b55a] px-4 py-1.5 rounded-sm mb-8">
<i className="w-5 h-5" data-lucide="award" strokeWidth="1.5"></i>
<span className="text-sm font-medium tracking-widest uppercase">Tradice a kvalita</span>
</div>
<h2 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
                        VAŠE CESTA K <span className="text-[#e3b55a]">ŘIDIČÁKU</span> ZAČÍNÁ ZDE
                    </h2>
<p className="text-lg text-gray-200 leading-relaxed max-w-xl mb-10">
                        Jsme moderní autoškola s individuálním přístupem. Připravíme vás nejen na závěrečné zkoušky, ale především na bezpečný, plynulý a sebevědomý pohyb v reálném provozu. S námi získáte jistotu za volantem.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center bg-[#b15842] text-white px-8 py-4 text-lg font-medium hover:bg-[#994c39] transition-colors rounded-sm" href="#kurzy">
                            Naše kurzy
                        </a>
<a className="inline-flex justify-center items-center border-2 border-[#e3b55a] text-white px-8 py-4 text-lg font-medium hover:bg-[#e3b55a] hover:text-[#19454d] transition-colors rounded-sm" href="#kontakt">
                            Kontaktujte nás
                        </a>
</div>
</div>

<div className="relative z-10 mx-auto w-full max-w-2xl lg:max-w-none">
<div className="bg-[#19454d] p-2 border-[4px] border-[#13353b] shadow-2xl relative group">

<div className="border-[3px] border-[#e3b55a] relative overflow-hidden aspect-[4/3] lg:aspect-[16/10]">
<img alt="Stylized car driving on road" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 sepia-[.2] hue-rotate-[-10deg]" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 bg-[#2c6e7a] text-white px-4 py-2 text-sm font-medium tracking-widest uppercase border border-[#e3b55a]/50">
                                Jízdy v plném proudu
                            </div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/3 h-[600px] bg-[#19454d]/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
</section>

<section className="bg-[#19454d] py-24 border-y border-[#e3b55a]/20" id="kurzy">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Co u nás můžete řídit</h2>
<p className="text-lg text-gray-300 max-w-2xl mx-auto">Vyberte si výcvik, který vyhovuje vašim potřebám. Nabízíme transparentní ceny a žádné skryté poplatky.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-[#2c6e7a] border border-[#e3b55a]/30 hover:border-[#e3b55a] p-8 transition-colors flex flex-col items-center text-center group rounded-sm">
<div className="w-16 h-16 rounded-full bg-[#19454d] flex items-center justify-center text-[#e3b55a] mb-6 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="bike" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Skupina A</h3>
<p className="text-lg text-gray-300 mb-6 flex-grow">Kompletní výcvik pro motocykly bez omezení výkonu. Včetně zapůjčení vybavení.</p>
<div className="w-full pt-6 border-t border-[#19454d]">
<span className="block text-sm font-medium text-gray-300 uppercase tracking-widest mb-1">Cena kurzu</span>
<span className="text-3xl font-semibold tracking-tight text-[#e3b55a]">14 500 Kč</span>
</div>
</div>

<div className="bg-[#2c6e7a] border-2 border-[#e3b55a] p-8 transition-colors flex flex-col items-center text-center relative group rounded-sm transform md:-translate-y-4 shadow-xl">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#b15842] text-white px-4 py-1 text-sm font-medium tracking-widest uppercase rounded-sm shadow-md">
                            Nejpopulárnější
                        </div>
<div className="w-16 h-16 rounded-full bg-[#19454d] flex items-center justify-center text-[#e3b55a] mb-6 group-hover:scale-110 transition-transform mt-2">
<i className="w-8 h-8" data-lucide="car" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Skupina B</h3>
<p className="text-lg text-gray-300 mb-6 flex-grow">Řidičský průkaz na osobní automobil. Výcvik možný s manuální i automatickou převodovkou.</p>
<div className="w-full pt-6 border-t border-[#19454d]">
<span className="block text-sm font-medium text-gray-300 uppercase tracking-widest mb-1">Cena kurzu</span>
<span className="text-3xl font-semibold tracking-tight text-[#e3b55a]">18 900 Kč</span>
</div>
</div>

<div className="bg-[#2c6e7a] border border-[#e3b55a]/30 hover:border-[#e3b55a] p-8 transition-colors flex flex-col items-center text-center group rounded-sm">
<div className="w-16 h-16 rounded-full bg-[#19454d] flex items-center justify-center text-[#e3b55a] mb-6 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="truck" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Skupina C</h3>
<p className="text-lg text-gray-300 mb-6 flex-grow">Oprávnění pro nákladní vozidla nad 3,5 tuny. Připravíme vás na kariéru profesionálního řidiče.</p>
<div className="w-full pt-6 border-t border-[#19454d]">
<span className="block text-sm font-medium text-gray-300 uppercase tracking-widest mb-1">Cena kurzu</span>
<span className="text-3xl font-semibold tracking-tight text-[#e3b55a]">22 500 Kč</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="vozidla">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-12 text-center">Náš vozový park</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="group">
<div className="aspect-[4/3] overflow-hidden border-[3px] border-[#19454d] relative mb-0">
<img alt="Osobní auto" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="bg-[#19454d] p-4 border-b-4 border-[#e3b55a] flex justify-between items-center mb-4">
<h3 className="text-sm font-medium tracking-widest text-white uppercase">Osobní automobily</h3>
</div>
<p className="text-lg text-gray-200 px-1">
                        Výcvik probíhá v moderních, bezpečných a snadno ovladatelných vozech Škoda Scala a VW Golf. Nabízíme také výcvik výhradně na voze s automatickou převodovkou pro váš maximální komfort.
                    </p>
</div>

<div className="group">
<div className="aspect-[4/3] overflow-hidden border-[3px] border-[#19454d] relative mb-0">
<img alt="Motocykl" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="bg-[#19454d] p-4 border-b-4 border-[#b15842] flex justify-between items-center mb-4">
<h3 className="text-sm font-medium tracking-widest text-white uppercase">Motocykly</h3>
</div>
<p className="text-lg text-gray-200 px-1">
                        Pro budoucí motorkáře máme připravenou flotilu spolehlivých strojů značky Honda, které odpovídají jednotlivým výkonnostním kategoriím. Klademe obrovský důraz na techniku jízdy a předvídavost.
                    </p>
</div>

<div className="group">
<div className="aspect-[4/3] overflow-hidden border-[3px] border-[#19454d] relative mb-0">
<img alt="Nákladní vůz" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="bg-[#19454d] p-4 border-b-4 border-[#2c6e7a] flex justify-between items-center mb-4">
<h3 className="text-sm font-medium tracking-widest text-white uppercase">Nákladní vozy</h3>
</div>
<p className="text-lg text-gray-200 px-1">
                        Skupinu C vyučujeme na moderních tahačích MAN s plnou výbavou asistenčních systémů. Naučíte se ovládat robustní techniku a získáte reálnou praxi potřebnou pro profesionální uplatnění.
                    </p>
</div>
</div>
</section>

<section className="bg-[#19454d] py-24 border-t border-[#e3b55a]/20" id="kontakt">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-4xl font-semibold tracking-tight text-white mb-8">Zastavte se u nás</h2>
<p className="text-lg text-gray-300 mb-10">Máte dotaz nebo se chcete rovnou přihlásit? Zavolejte nám, napište email, nebo se zastavte osobně v naší kanceláři během otevírací doby.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="bg-[#2c6e7a] p-3 rounded-sm text-[#e3b55a]">
<i className="w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-1">Kde nás najdete</h4>
<p className="text-lg text-gray-300">Nádražní 1234<br/>150 00 Praha 5 - Smíchov</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-[#2c6e7a] p-3 rounded-sm text-[#e3b55a]">
<i className="w-6 h-6" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-1">Zavolejte nám</h4>
<p className="text-lg text-gray-300">+420 123 456 789<br/>+420 987 654 321</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-[#2c6e7a] p-3 rounded-sm text-[#e3b55a]">
<i className="w-6 h-6" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-1">Napište nám</h4>
<p className="text-lg text-gray-300">info@autoskolaprofi.cz</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-[#2c6e7a] p-3 rounded-sm text-[#e3b55a]">
<i className="w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-1">Otevírací doba kanceláře</h4>
<p className="text-lg text-gray-300">Pondělí - Čtvrtek: 8:00 - 16:30<br/>Pátek: 8:00 - 14:00</p>
</div>
</div>
</div>
</div>

<div className="h-full min-h-[400px] w-full bg-[#2c6e7a] border-[3px] border-[#e3b55a] rounded-sm p-1 shadow-lg relative">

<iframe allowfullscreen="" className="w-full h-full absolute inset-0 p-1" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.840733856277!2d14.402636976935215!3d50.07053537152439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94f6c464e83f%3A0x6a0a09e0a8d436a5!2sN%C3%A1dra%C5%BEn%C3%AD%2C%20Praha%205!5e0!3m2!1scs!2scz!4v1709308000000!5m2!1scs!2scz" style={{border: '0'}}>
</iframe>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-[#13353b] py-8 text-center border-t-4 border-[#b15842]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm font-medium text-gray-400">© 2024 Autoškola Profi. Všechna práva vyhrazena.</p>
<div className="flex gap-4 text-gray-400">
<a className="hover:text-[#e3b55a] transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="hover:text-[#e3b55a] transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
</div>
</div>
</footer>


    </>
  );
}
