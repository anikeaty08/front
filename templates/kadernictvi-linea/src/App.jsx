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
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
}
}
}
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
      

<nav className="fixed w-full top-0 z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="font-serif text-xl tracking-tight text-stone-900 group-hover:text-stone-600 transition-colors">Kadeřnictví Linea</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-500 hover:text-black transition-colors" href="#o-nas">O nás</a>
<a className="text-sm font-medium text-stone-500 hover:text-black transition-colors" href="#sluzby">Ceník</a>
<a className="text-sm font-medium text-stone-500 hover:text-black transition-colors" href="#oteviraci-doba">Otevírací doba</a>
<a className="text-sm font-medium text-stone-500 hover:text-black transition-colors" href="#lokalita">Kudy k nám</a>
<a className="px-5 py-2.5 rounded-full bg-stone-900 text-white text-xs font-medium hover:bg-stone-700 transition-all flex items-center gap-2" href="tel:+420224919319">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                    +420 224 919 319
                </a>
</div>

<button className="md:hidden text-stone-800 p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-8 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-xs font-medium tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Otevřeno dle objednávek
                </div>
<h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-stone-900 tracking-tight">
                    Tradice a styl <br/>
<span className="italic text-stone-500">v centru Prahy</span>
</h1>
<p className="text-lg text-stone-600 font-light max-w-md leading-relaxed">
                    Jsme kadeřnictví s více než 25 letou tradicí. Nabízíme profesionální péči a dostupné ceny pro každého v příjemném prostředí na Praze 2.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="px-8 py-4 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-all flex items-center gap-2" href="tel:+420224919319">
                        Objednat se
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="px-8 py-4 rounded-full border border-stone-200 bg-white text-stone-900 text-sm font-medium hover:border-stone-400 transition-all" href="#lokalita">
                        Jak se k nám dostat
                    </a>
</div>
</div>
<div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-stone-200/50">
<img alt="Interiér kadeřnictví" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=1674&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent pointer-events-none"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="font-serif text-2xl italic">Ladova 2044/3</p>
<p className="text-sm text-stone-200 font-light">128 00 Praha 2</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100" id="sluzby">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 space-y-4">
<h2 className="font-serif text-4xl text-stone-900 tracking-tight">Ceník služeb</h2>
<p className="text-stone-500 font-light max-w-2xl mx-auto">
                    Ceny jsou platné od 8.1.2024. Stanovení přesné ceny je třeba konzultovat s kadeřnicí, závisí na náročnosti a spotřebě materiálu.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-7 space-y-12">
<div className="flex items-center gap-4 mb-8">
<div className="p-3 bg-stone-50 rounded-full">
<iconify-icon className="text-stone-700" icon="solar:user-hand-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight">Dámské kadeřnictví</h3>
</div>

<div className="space-y-10">

<div>
<div className="grid grid-cols-4 text-xs uppercase tracking-widest text-stone-400 font-medium mb-4 pb-2 border-b border-stone-100">
<span className="col-span-1">Služba</span>
<span className="text-right">Krátké</span>
<span className="text-right">Polodlouhé</span>
<span className="text-right">Dlouhé</span>
</div>
<div className="space-y-4">
<div className="grid grid-cols-4 items-baseline text-sm group hover:bg-stone-50 p-2 -mx-2 rounded-lg transition-colors">
<span className="col-span-1 font-medium text-stone-900">Střih, mytí, styling</span>
<span className="text-right text-stone-600">570 Kč</span>
<span className="text-right text-stone-600">640 Kč</span>
<span className="text-right text-stone-600">710 Kč</span>
</div>
<div className="grid grid-cols-4 items-baseline text-sm group hover:bg-stone-50 p-2 -mx-2 rounded-lg transition-colors">
<span className="col-span-1 font-medium text-stone-900">Mytí, styling, foukaná</span>
<span className="text-right text-stone-600">350 Kč</span>
<span className="text-right text-stone-600">440 Kč</span>
<span className="text-right text-stone-600">510 Kč</span>
</div>
<div className="grid grid-cols-4 items-baseline text-sm group hover:bg-stone-50 p-2 -mx-2 rounded-lg transition-colors">
<span className="col-span-1 font-medium text-stone-900">Barvení</span>
<span className="text-right text-stone-600">550 Kč</span>
<span className="text-right text-stone-600">650 Kč</span>
<span className="text-right text-stone-600">750 Kč</span>
</div>
<div className="grid grid-cols-4 items-baseline text-sm group hover:bg-stone-50 p-2 -mx-2 rounded-lg transition-colors">
<span className="col-span-1 font-medium text-stone-900">Melírování</span>
<span className="text-right text-stone-600">650 Kč</span>
<span className="text-right text-stone-600">990 Kč</span>
<span className="text-right text-stone-600">1 360 Kč</span>
</div>
<div className="grid grid-cols-4 items-baseline text-sm group hover:bg-stone-50 p-2 -mx-2 rounded-lg transition-colors">
<span className="col-span-1 font-medium text-stone-900">Trvalá</span>
<span className="text-right text-stone-600">550 Kč</span>
<span className="text-right text-stone-600">650 Kč</span>
<span className="text-right text-stone-600">700 Kč</span>
</div>
<div className="grid grid-cols-4 items-baseline text-sm group hover:bg-stone-50 p-2 -mx-2 rounded-lg transition-colors">
<span className="col-span-1 font-medium text-stone-900">Regenerační zábal</span>
<span className="text-right text-stone-600">50 Kč</span>
<span className="text-right text-stone-600">50 Kč</span>
<span className="text-right text-stone-600">50 Kč</span>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-4">
<span className="text-xs font-medium uppercase tracking-widest text-stone-400">Společenské účesy</span>
<div className="h-px bg-stone-100 flex-grow"></div>
</div>
<div className="space-y-4">
<div className="grid grid-cols-4 items-baseline text-sm group hover:bg-stone-50 p-2 -mx-2 rounded-lg transition-colors">
<span className="col-span-1 font-medium text-stone-900">Jednoduchý účes</span>
<span className="text-right text-stone-600">610 Kč</span>
<span className="text-right text-stone-600">610 Kč</span>
<span className="text-right text-stone-600">610 Kč</span>
</div>
<div className="grid grid-cols-4 items-baseline text-sm group hover:bg-stone-50 p-2 -mx-2 rounded-lg transition-colors">
<span className="col-span-1 font-medium text-stone-900">Složitý účes</span>
<span className="text-right text-stone-600">910 Kč</span>
<span className="text-right text-stone-600">910 Kč</span>
<span className="text-right text-stone-600">910 Kč</span>
</div>
<div className="grid grid-cols-4 items-baseline text-sm group hover:bg-stone-50 p-2 -mx-2 rounded-lg transition-colors">
<span className="col-span-1 font-medium text-stone-900">Svatební + zkouška</span>
<span className="text-right text-stone-600">1 600 Kč</span>
<span className="text-right text-stone-600">1 600 Kč</span>
<span className="text-right text-stone-600">1 600 Kč</span>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-4">
<span className="text-xs font-medium uppercase tracking-widest text-stone-400">Žehlení</span>
<div className="h-px bg-stone-100 flex-grow"></div>
</div>
<div className="space-y-4">
<div className="grid grid-cols-4 items-baseline text-sm group hover:bg-stone-50 p-2 -mx-2 rounded-lg transition-colors">
<span className="col-span-1 font-medium text-stone-900">Žehlení vlasů</span>
<span className="text-right text-stone-600">-</span>
<span className="text-right text-stone-600">100 Kč</span>
<span className="text-right text-stone-600">200 Kč</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 h-full">
<div className="flex items-center gap-4 mb-8">
<div className="p-3 bg-white rounded-full shadow-sm border border-stone-100">
<iconify-icon className="text-stone-700" icon="solar:user-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight">Pánské kadeřnictví</h3>
</div>
<div className="space-y-6">
<div className="space-y-3">
<h4 className="text-xs uppercase tracking-widest text-stone-400 font-medium">Střih strojkem</h4>
<div className="flex justify-between items-center text-sm py-2 border-b border-stone-200/50">
<span className="text-stone-900">Krátké</span>
<span className="font-medium text-stone-900">200 Kč</span>
</div>
<div className="flex justify-between items-center text-sm py-2 border-b border-stone-200/50">
<span className="text-stone-900">Polodlouhé</span>
<span className="font-medium text-stone-900">200 Kč</span>
</div>
</div>
<div className="space-y-3 pt-4">
<h4 className="text-xs uppercase tracking-widest text-stone-400 font-medium">Střih, mytí, styling</h4>
<div className="flex justify-between items-center text-sm py-2 border-b border-stone-200/50">
<span className="text-stone-900">Krátké</span>
<span className="font-medium text-stone-900">340 Kč</span>
</div>
<div className="flex justify-between items-center text-sm py-2 border-b border-stone-200/50">
<span className="text-stone-900">Polodlouhé</span>
<span className="font-medium text-stone-900">380 Kč</span>
</div>
</div>
<div className="space-y-3 pt-4">
<h4 className="text-xs uppercase tracking-widest text-stone-400 font-medium">Úprava vousů</h4>
<div className="flex justify-between items-center text-sm py-2 border-b border-stone-200/50">
<span className="text-stone-900">Vousy strojkem</span>
<span className="font-medium text-stone-900">110 Kč</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-100" id="oteviraci-doba">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">

<div>
<h2 className="font-serif text-3xl mb-8 tracking-tight">Otevírací doba</h2>
<p className="text-stone-400 font-light mb-8">Doporučujeme se před návštěvou telefonicky objednat.</p>
<div className="space-y-4 max-w-sm">
<div className="flex justify-between items-center py-3 border-b border-stone-800">
<span className="text-sm font-medium">Pondělí - Pátek</span>
<span className="text-sm text-stone-300">7:00 – 19:00</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-stone-800">
<span className="text-sm font-medium">Sobota</span>
<span className="text-sm text-stone-400 italic">po dohodě</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-stone-800">
<span className="text-sm font-medium">Neděle</span>
<span className="text-sm text-stone-400 italic">po dohodě</span>
</div>
</div>
<div className="mt-12">
<h3 className="font-serif text-2xl mb-4 tracking-tight">Kontakt</h3>
<a className="text-2xl md:text-3xl font-light hover:text-stone-300 transition-colors flex items-center gap-4" href="tel:+420224919319">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                            +420 224 919 319
                        </a>
</div>
</div>

<div className="relative h-[400px] md:h-auto rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
<iframe allowfullscreen="" className="absolute inset-0" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.840798154128!2d14.4130999!3d50.0698641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94f107662c1b%3A0x7e84175314065261!2sLadova%202044%2F3%2C%20128%2000%20Nové%20Město!5e0!3m2!1sen!2scz!4v1709228541000!5m2!1sen!2scz" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="lokalita">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-serif text-3xl md:text-4xl text-center mb-16 tracking-tight text-stone-900">Jak se k nám dostanete</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 group hover:shadow-md transition-all">
<div className="w-12 h-12 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center mb-6">
<iconify-icon icon="solar:train-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-lg mb-4 text-stone-900">Metrem B</h3>
<ul className="space-y-4 text-sm text-stone-600 leading-relaxed">
<li className="flex gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-2 flex-shrink-0"></span>
<span>Stanice <strong>Karlovo Náměstí</strong>.</span>
</li>
<li className="flex gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-2 flex-shrink-0"></span>
<span>Eskalátory směr <strong>Palackého náměstí</strong>.</span>
</li>
<li className="flex gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-2 flex-shrink-0"></span>
<span>Ve vestibulu vlevo směr Zítkovy sady.</span>
</li>
<li className="flex gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-2 flex-shrink-0"></span>
<span>Rovně ul. Podskalská (290m), poté vlevo do ul. Ladova.</span>
</li>
</ul>
<a className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-stone-500 hover:text-stone-900 uppercase tracking-wide border-b border-transparent hover:border-stone-900 pb-0.5 transition-all" href="https://mapy.cz/zakladni?planovani-trasy&amp;x=14.4140873&amp;y=50.0714272&amp;z=17&amp;rc=9h0KExXsunUNf0Y&amp;rs=coor&amp;rs=addr&amp;ri=&amp;ri=8940833&amp;mrp=%7B%22c%22%3A132%7D&amp;mrp=%7B%22c%22%3A132%7D&amp;rt=&amp;rt=" target="_blank">
                        Navigovat pěšky
                        <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 group hover:shadow-md transition-all">
<div className="w-12 h-12 bg-red-100 text-red-700 rounded-full flex items-center justify-center mb-6">
<iconify-icon icon="solar:bus-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-lg mb-4 text-stone-900">Tramvají</h3>
<div className="space-y-6">
<div>
<p className="text-xs font-bold text-stone-400 uppercase tracking-wide mb-2">Zastávka Výtoň</p>
<p className="text-sm text-stone-600 mb-2">Linky: 3, 7, 17, 20, 21</p>
<p className="text-sm text-stone-500 leading-relaxed">Směr Palackého nám. (90m), vpravo Plavecká, vlevo Podskalská, vpravo Ladova.</p>
</div>
<div>
<p className="text-xs font-bold text-stone-400 uppercase tracking-wide mb-2">Zastávka Botanická Zahrada</p>
<p className="text-sm text-stone-600 mb-2">Linky: 14, 18, 24</p>
<p className="text-sm text-stone-500 leading-relaxed">Ul. Trojická, vlevo Pod Slovany, vpravo Ladova.</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 group hover:shadow-md transition-all">
<div className="w-12 h-12 bg-stone-100 text-stone-700 rounded-full flex items-center justify-center mb-6">
<iconify-icon icon="solar:wheel-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-lg mb-4 text-stone-900">Autem</h3>
<p className="text-sm text-stone-600 leading-relaxed mb-4">
                        Parkování je možné přímo v ulici Ladova nebo v přilehlé ulici Podskalská.
                    </p>
<p className="text-sm text-stone-500 italic">
                        Pozor na parkovací zóny pro rezidenty (modré zóny). K dispozici jsou i fialové smíšené zóny s parkovacími hodinami.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<span className="font-serif text-2xl tracking-tight text-stone-900 block mb-6">Kadeřnictví Linea</span>
<p className="text-sm text-stone-500 max-w-xs leading-relaxed">
                        Profesionální péče o vaše vlasy v srdci Prahy s dlouholetou tradicí.
                    </p>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-4">Menu</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#o-nas">O nás</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#sluzby">Ceník</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#oteviraci-doba">Otevírací doba</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#lokalita">Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-4">Adresa</h4>
<address className="not-italic text-sm text-stone-500 space-y-2">
<p>Ladova 2044/3</p>
<p>128 00 Praha 2</p>
<p className="pt-2"><a className="hover:text-stone-900 transition-colors" href="tel:+420224919319">+420 224 919 319</a></p>
</address>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
<p>© 2024 Kadeřnictví Linea. Všechna práva vyhrazena.</p>
<div className="flex gap-6">
<a className="hover:text-stone-600 transition-colors" href="#">Ochrana soukromí</a>
<a className="hover:text-stone-600 transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
