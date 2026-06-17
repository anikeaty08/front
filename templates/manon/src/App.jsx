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
neutral: {
50: '#fafafa',
100: '#f5f5f5',
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#171717',
950: '#0a0a0a',
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
      

<div className="bg-neutral-900 text-white text-xs py-2.5 px-4 text-center tracking-wide font-medium flex items-center justify-center gap-2">
<iconify-icon icon="solar:wallet-money-linear" width="16"></iconify-icon>
<span>Vážení zákazníci, přijímáme platby pouze v hotovosti.</span>
</div>

<nav className="glass-nav sticky top-0 z-50 w-full transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="group flex flex-col items-start" href="#">
<span className="text-xl font-serif tracking-tight text-neutral-900 font-medium group-hover:opacity-70 transition-opacity">
                    KADEŘNICTVÍ MANON<sup className="text-xs ml-0.5">®</sup>
</span>
</a>

<div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-neutral-600">
<a className="hover:text-neutral-900 transition-colors" href="#onas">O nás</a>
<a className="hover:text-neutral-900 transition-colors" href="#cenik">Ceník</a>
<a className="hover:text-neutral-900 transition-colors" href="#fotogalerie">Fotogalerie</a>
<a className="hover:text-neutral-900 transition-colors" href="#kariera">Kariéra</a>
<a className="px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition-all" href="#kontakty">Kontakty</a>
</div>

<button className="lg:hidden p-2 text-neutral-900" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full bg-white border-b border-neutral-100 p-6 flex flex-col space-y-4 lg:hidden shadow-lg" id="mobile-menu">
<a className="text-sm font-medium text-neutral-600" href="#onas">O nás</a>
<a className="text-sm font-medium text-neutral-600" href="#cenik">Ceník</a>
<a className="text-sm font-medium text-neutral-600" href="#fotogalerie">Fotogalerie</a>
<a className="text-sm font-medium text-neutral-600" href="#kariera">Kariéra</a>
<a className="text-sm font-medium text-neutral-900" href="#kontakty">Kontakty</a>
</div>
</nav>

<section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Kadeřnictví Manon Background" className="w-full h-full object-cover grayscale brightness-50 scale-105" src="https://www.kadernictvimanon.cz/wp-content/uploads/2021/06/vlasy.jpg"/>
<div className="absolute inset-0 bg-neutral-900/40"></div>
</div>
<div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto space-y-6">
<p className="text-sm font-medium tracking-[0.2em] uppercase opacity-90">Expres kadeřnictví</p>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-normal tracking-tight font-serif">
                Bez objednání.<br/>Pro dámy i pány.
            </h1>
<p className="md:text-xl text-lg font-light text-neutral-200 max-w-2xl mr-auto ml-auto">Veškeré kadeřnické práce. Naší prioritou je, abyste se dostali na řadu 
do 10 minut.</p>
<div className="pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-sm font-medium">
<a className="bg-white text-neutral-900 px-8 py-3.5 rounded-full hover:bg-neutral-100 transition-colors w-full md:w-auto" href="#kontakty">
                    Kde nás najdete
                </a>
<div className="flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full backdrop-blur-sm">
<iconify-icon icon="solar:clock-circle-linear" width="18"></iconify-icon>
<span>Po-Pá: 8:00 - 19:00 | So: 8:00 - 16:00</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="onas">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div>
<h2 className="text-3xl md:text-4xl font-serif text-neutral-900 tracking-tight mb-4">Tradice od roku 1995</h2>
<div className="h-1 w-12 bg-neutral-900"></div>
</div>
<div className="space-y-6 text-neutral-600 text-lg leading-relaxed font-light">
<p>
                        Provozovatel kadeřnictví je společnost Omon s.r.o. Kadeřnictví provozujeme již téměř tři dekády. V počátcích naše kadeřnictví fungovalo tradičním způsobem převážně pro objednané zákazníky.
                    </p>
<p>
                        Postupem času jsme přizpůsobovali nabídku zvyšující se poptávce po pánském kadeřnictví, kdy pánové jasně přivítali možnost přijít bez objednání.
                    </p>
<p>
                        Protože jsme tento komfort chtěli nabídnout i dámám, přizpůsobili jsme chod firmy tak, abychom mohli poskytovat <span className="font-medium text-neutral-900">bez objednání i veškeré dámské práce</span> včetně barvení a melírování.
                    </p>
</div>
<div className="p-6 bg-neutral-50 border border-neutral-100 rounded-sm">
<p className="text-neutral-900 font-medium mb-1">Naše priorita</p>
<p className="text-neutral-500 text-sm">Aby se zákazník dostal na řadu nejpozději do 10 minut od příchodu k nám.</p>
</div>
</div>
<div className="relative h-full min-h-[400px]">
<img alt="Interiér Manon" className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" src="https://www.kadernictvimanon.cz/wp-content/uploads/2019/02/2018-04-23-web-kadernictvi-004.jpg"/>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="cenik">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-serif text-neutral-900 tracking-tight">Ceník služeb</h2>
<p className="text-neutral-500 mt-4 text-sm max-w-2xl mx-auto">Konečná cena je vždy účtována položkově dle skutečně provedených úkonů a použitých přípravků. Platby pouze v hotovosti.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

<div className="lg:col-span-1 bg-white p-8 rounded-sm shadow-sm border border-neutral-100 h-fit">
<h3 className="text-xl font-medium text-neutral-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:user-linear"></iconify-icon> Pánské
                    </h3>
<ul className="space-y-4">
<li className="flex justify-between items-baseline border-b border-neutral-100 pb-2">
<span className="text-neutral-600 text-sm">Stříhání strojkem</span>
<span className="text-neutral-900 font-medium">210 Kč</span>
</li>
<li className="flex justify-between items-baseline border-b border-neutral-100 pb-2">
<span className="text-neutral-600 text-sm">Stříhání nůžkami</span>
<span className="text-neutral-900 font-medium">350 Kč</span>
</li>
<li className="flex justify-between items-baseline border-b border-neutral-100 pb-2">
<span className="text-neutral-600 text-sm">Složitý střih / dlouhé</span>
<span className="text-neutral-900 font-medium">480 Kč</span>
</li>
</ul>
</div>

<div className="lg:col-span-2 bg-white p-8 rounded-sm shadow-sm border border-neutral-100 overflow-x-auto">
<h3 className="text-xl font-medium text-neutral-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:user-circle-linear"></iconify-icon> Dámské
                    </h3>
<table className="w-full text-left border-collapse min-w-[600px]">
<thead>
<tr className="text-xs font-medium text-neutral-400 uppercase tracking-wider border-b border-neutral-200">
<th className="pb-4 font-medium">Délka vlasů</th>
<th className="pb-4 font-medium text-right">Foukaná</th>
<th className="pb-4 font-medium text-right">Střih + Foukaná</th>
<th className="pb-4 font-medium text-right">Barva + Střih</th>
<th className="pb-4 font-medium text-right">Komplet</th>
</tr>
</thead>
<tbody className="text-sm text-neutral-600">
<tr className="border-b border-neutral-100 group hover:bg-neutral-50">
<td className="py-4 font-medium text-neutral-900">Krátké</td>
<td className="py-4 text-right">290 Kč</td>
<td className="py-4 text-right">620 Kč</td>
<td className="py-4 text-right">1220/1420 Kč</td>
<td className="py-4 text-right">1930 Kč</td>
</tr>
<tr className="border-b border-neutral-100 group hover:bg-neutral-50">
<td className="py-4 font-medium text-neutral-900">Polodlouhé</td>
<td className="py-4 text-right">370 Kč</td>
<td className="py-4 text-right">700 Kč</td>
<td className="py-4 text-right">1460/1630 Kč</td>
<td className="py-4 text-right">2300 Kč</td>
</tr>
<tr className="border-b border-neutral-100 group hover:bg-neutral-50">
<td className="py-4 font-medium text-neutral-900">Dlouhé</td>
<td className="py-4 text-right">470 Kč</td>
<td className="py-4 text-right">800 Kč</td>
<td className="py-4 text-right">1710/2000 Kč</td>
<td className="py-4 text-right">2820 Kč</td>
</tr>
<tr className="group hover:bg-neutral-50">
<td className="py-4 font-medium text-neutral-900">Velmi dlouhé</td>
<td className="py-4 text-right">590 Kč</td>
<td className="py-4 text-right">920 Kč</td>
<td className="py-4 text-right">2010/2590 Kč</td>
<td className="py-4 text-right">3500 Kč</td>
</tr>
</tbody>
</table>
<div className="mt-6 text-xs text-neutral-500 italic bg-neutral-50 p-4 rounded-sm">
                        Cena za stahování barvy, kombinované barvení (různé odstíny/tónu, např. ombré) bude stanovena vždy po dohodě se zákazníkem před započetím úkonu.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="fotogalerie">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl font-serif text-neutral-900 tracking-tight">Galerie</h2>
<span className="text-sm text-neutral-400 hidden md:block">Ukázky naší práce</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square bg-neutral-100 overflow-hidden rounded-sm group">
<img alt="Účes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://www.kadernictvimanon.cz/wp-content/uploads/2021/06/vlasy10.jpg"/>
</div>
<div className="aspect-square bg-neutral-100 overflow-hidden rounded-sm group">
<img alt="Účes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://www.kadernictvimanon.cz/wp-content/uploads/2021/06/vlasy9.jpg"/>
</div>
<div className="aspect-square bg-neutral-100 overflow-hidden rounded-sm group">
<img alt="Účes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://www.kadernictvimanon.cz/wp-content/uploads/2021/06/vlasy8.jpg"/>
</div>
<div className="aspect-square bg-neutral-100 overflow-hidden rounded-sm group">
<img alt="Účes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://www.kadernictvimanon.cz/wp-content/uploads/2021/06/vlasy7.jpg"/>
</div>
<div className="aspect-square bg-neutral-100 overflow-hidden rounded-sm group">
<img alt="Účes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://www.kadernictvimanon.cz/wp-content/uploads/2021/06/vlaSY6.jpg"/>
</div>
<div className="aspect-square bg-neutral-100 overflow-hidden rounded-sm group">
<img alt="Účes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://www.kadernictvimanon.cz/wp-content/uploads/2021/06/vlasy5.jpg"/>
</div>
<div className="aspect-square bg-neutral-100 overflow-hidden rounded-sm group">
<img alt="Účes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://www.kadernictvimanon.cz/wp-content/uploads/2021/06/vlasy4.jpg"/>
</div>
<div className="aspect-square bg-neutral-100 overflow-hidden rounded-sm group">
<img alt="Účes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://www.kadernictvimanon.cz/wp-content/uploads/2021/06/vlasy3.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white" id="kariera">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="mb-6 text-neutral-400 mx-auto" icon="solar:users-group-two-rounded-linear" width="48"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-8">Přidejte se k nám</h2>
<div className="bg-neutral-800 p-8 rounded-sm text-left max-w-2xl mx-auto">
<p className="mb-6 text-neutral-300 leading-relaxed">
                    Stále hledáme do našeho týmu šikovné, pracovité kadeřnice se zájmem o obor a chutí se dále zlepšovat. Délka praxe není rozhodující, rozhodující je zájem o profesi a pracovní nasazení. Požadujeme vyučení v oboru.
                </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
<div className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Zázemí zavedeného kadeřnictví</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Stabilní klientela</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Klasický pracovní poměr</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Volné neděle a svátky</span>
</div>
</div>
<a className="inline-block w-full text-center bg-white text-neutral-900 py-3 rounded-sm font-medium hover:bg-neutral-200 transition-colors" href="#kontakty">
                    Kontaktujte nás
                </a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-200" id="kontakty">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-12">
<div>
<h2 className="text-3xl md:text-4xl font-serif text-neutral-900 tracking-tight mb-2">Kontakt</h2>
<p className="text-neutral-500">Kadeřnictví Manon, Praha 5</p>
</div>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="p-3 bg-white border border-neutral-100 rounded-full">
<iconify-icon className="text-neutral-900" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-neutral-900">Adresa</h4>
<p className="text-neutral-600 mt-1">Lidická 24, 150 00 Praha 5 – Smíchov</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-white border border-neutral-100 rounded-full">
<iconify-icon className="text-neutral-900" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-neutral-900">Telefon</h4>
<div className="flex flex-col mt-1">
<a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="tel:420257324179">+420 257 324 179</a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="tel:420257315915">+420 257 315 915</a>
</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-white border border-neutral-100 rounded-full">
<iconify-icon className="text-neutral-900" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-neutral-900">Email</h4>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors mt-1 block" href="mailto:tomaskretschmer@seznam.cz">tomaskretschmer@seznam.cz</a>
<p className="text-xs text-neutral-400 mt-1 uppercase tracking-wide">Tento email neslouží pro objednávky</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-white border border-neutral-100 rounded-full">
<iconify-icon className="text-neutral-900" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-neutral-900">Otevírací doba</h4>
<p className="text-neutral-600 mt-1">Po - Pá: 8:00 - 19:00</p>
<p className="text-neutral-600">So: 8:00 - 16:00</p>
</div>
</div>
</div>
</div>

<div className="h-full min-h-[400px] bg-neutral-200 rounded-sm overflow-hidden shadow-sm border border-neutral-200">
<iframe allowfullscreen="" frameborder="0" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.741811125572!2d14.404480016006179!3d50.072396779425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94f8084d5a69%3A0xf9fd8a06b096f7f0!2sLidick%C3%A1+353%2F24%2C+150+00+Praha-Sm%C3%ADchov!5e0!3m2!1sen!2scz!4v1549028858377" style={{border: '0', filter: 'grayscale(1) contrast(1.2) opacity(0.9)'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 text-neutral-400 py-12 text-sm font-light">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-neutral-900">
<div>
<h5 className="text-white font-medium mb-4">Mimosoudní řešení spotřebitelských sporů</h5>
<p className="leading-relaxed text-xs text-neutral-500">
                        V případě, že dojde mezi námi a spotřebitelem ke vzniku spotřebitelského sporu, který se nepodaří vyřešit vzájemnou dohodou, může spotřebitel podat návrh na mimosoudní řešení takového sporu určenému subjektu mimosoudního řešení spotřebitelských sporů, kterým je Česká obchodní inspekce Ústřední inspektorát - oddělení ADR, Štěpánská 796/44, 110 00 Praha 1, e-mail: adr@coi.cz, web: https://adr.coi.cz.
                    </p>
</div>
<div className="flex md:justify-end items-end">
<p className="text-xs text-neutral-500">© 2026 – Omon s.r.o. | Kadeřnictví Manon</p>
</div>
</div>
</div>
</footer>

    </>
  );
}
