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
},
wood: {
100: '#F5E6D3',
500: '#A67C52',
900: '#5D4037'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'fade-in': 'fadeIn 1s ease-out forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
}
}
}
}
}



{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Truhlářství VETA",
"image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
"@id": "https://truhlarstviveta.cz",
"url": "https://truhlarstviveta.cz",
"telephone": "+420 777 645 007",
"email": "truhlarstviveta@gmail.com",
"priceRange": "$$",
"address": {
"@type": "PostalAddress",
"streetAddress": "Jakubská 91",
"addressLocality": "Jindřichův Hradec",
"postalCode": "377 01",
"addressCountry": "CZ"
},
"founder": {
"@type": "Person",
"name": "Radek Vettermann"
},
"openingHoursSpecification": {
"@type": "OpeningHoursSpecification",
"dayOfWeek": [
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday"
],
"opens": "08:00",
"closes": "17:00"
}
}



        // Iconify
        lucide.createIcons();

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('glass-nav', 'shadow-sm', 'border-stone-200');
            } else {
                navbar.classList.remove('glass-nav', 'shadow-sm', 'border-stone-200');
            }
        });

        // Mobile Menu
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }

        // Scroll Reveal Animation
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 100;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        // Trigger once on load
        reveal();
    
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
      

<header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="group flex items-center gap-2" href="#">
<span className="font-serif text-2xl tracking-tighter text-stone-900 font-semibold group-hover:opacity-80 transition-opacity">
                        VETA
                    </span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#o-nas">O nás</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#sluzby">Služby</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#galerie">Realizace</a>
<a className="px-5 py-2.5 bg-stone-900 text-stone-50 text-xs font-medium rounded-full hover:bg-stone-800 transition-all duration-300 shadow-lg shadow-stone-900/10" href="#kontakt">
                        Poptat realizaci
                    </a>
</nav>

<button aria-label="Menu" className="md:hidden p-2 text-stone-900 focus:outline-none" onclick="toggleMenu()">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-stone-50 border-b border-stone-200 p-6 flex-col gap-4 shadow-xl md:hidden" id="mobile-menu">
<a className="text-lg font-serif text-stone-800" href="#o-nas" onclick="toggleMenu()">O nás</a>
<a className="text-lg font-serif text-stone-800" href="#sluzby" onclick="toggleMenu()">Služby</a>
<a className="text-lg font-serif text-stone-800" href="#galerie" onclick="toggleMenu()">Realizace</a>
<a className="text-lg font-serif text-stone-800 font-medium" href="#kontakt" onclick="toggleMenu()">Kontakt</a>
</div>
</header>
<main>

<section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Detail ručně opracovaného dřeva v moderním interiéru" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-transparent to-stone-900/60"></div>
<div className="absolute inset-0 bg-stone-900/20 mix-blend-multiply"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
<span className="inline-block py-1 px-3 rounded-full border border-white/30 text-white/90 text-xs tracking-wider uppercase mb-6 backdrop-blur-sm animate-fade-in-up">
                    Truhlářství Jindřichův Hradec
                </span>
<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6 drop-shadow-sm animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                    Dáváme dřevu duši,<br/> domovu charakter.
                </h1>
<p className="text-lg md:text-xl text-stone-200 font-light max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    Zakázková výroba nábytku s důrazem na detail, funkčnost a poctivé řemeslo. Od návrhu po poslední šroubek pod vedením Radka Vettermanna.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-stone-900 rounded-full font-medium hover:bg-stone-100 transition-colors shadow-xl text-sm" href="#kontakt">
                        Nezávazná poptávka
                    </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-colors text-sm" href="#sluzby">
                        Naše služby
                    </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-stone-50 relative overflow-hidden" id="o-nas">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="reveal">
<div className="flex items-center gap-3 mb-6">
<span className="h-px w-8 bg-stone-400"></span>
<span className="text-xs uppercase tracking-widest text-stone-500 font-medium">O nás</span>
</div>
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8 leading-tight tracking-tight">
                            Poctivé řemeslo v srdci<br/>
<span className="italic text-stone-600">Jindřichova Hradce.</span>
</h2>
<div className="space-y-6 text-stone-600 leading-relaxed font-light">
<p>
                                Vítejte v <strong>Truhlářství VETA</strong>. Jmenuji se Radek Vettermann a dřevo pro mě není jen materiál – je to vášeň a závazek. V mé dílně nevznikají sériové kusy bez duše, ale unikátní nábytek, který respektuje prostor i přání klienta.
                            </p>
<p>
                                Specializujeme se na <strong>zakázkovou výrobu</strong>, kde se snoubí tradiční truhlářské postupy s moderními technologiemi. Ať už potřebujete využít každý centimetr v podkroví, nebo sníte o masivním jídelním stole, přistupuji ke každému projektu osobně.
                            </p>
<ul className="space-y-3 pt-4">
<li className="flex items-center gap-3 text-sm text-stone-800 font-medium">
<i className="text-stone-400 w-4 h-4" data-lucide="check" strokeWidth="2"></i>
                                    Osobní konzultace a zaměření
                                </li>
<li className="flex items-center gap-3 text-sm text-stone-800 font-medium">
<i className="text-stone-400 w-4 h-4" data-lucide="check" strokeWidth="2"></i>
                                    Výběr prémiových materiálů
                                </li>
<li className="flex items-center gap-3 text-sm text-stone-800 font-medium">
<i className="text-stone-400 w-4 h-4" data-lucide="check" strokeWidth="2"></i>
                                    Precizní montáž a úklid
                                </li>
</ul>
</div>
</div>
<div className="relative reveal delay-200">
<div className="aspect-[4/5] w-full rounded-2xl overflow-hidden bg-stone-200 relative shadow-2xl">

<img alt="Radek Vettermann při práci v dílně" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1713946598186-8e28275719b9?w=2560&amp;q=80"/>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl border border-white/50 shadow-sm">
<p className="font-serif text-lg text-stone-900">Radek Vettermann</p>
<p className="text-xs text-stone-500 uppercase tracking-wide">Majitel &amp; Hlavní truhlář</p>
</div>
</div>

<div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border border-stone-200 rounded-2xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100" id="sluzby">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<span className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-3 block">Naše služby</span>
<h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 tracking-tight">Co pro vás vytvoříme</h2>
<p className="text-stone-500 font-light text-lg">
                        Specializujeme se na komplexní řešení interiérů. Od prvotního nákresu až po finální montáž u vás doma.
                    </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="group p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-stone-200 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 reveal cursor-default">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<i className="text-stone-700 w-6 h-6" data-lucide="armchair" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-4">Nábytek na míru</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-6">
                            Vestavěné skříně, které využijí každý milimetr, elegantní komody, knihovny či solitéry. Navrhujeme nábytek, který respektuje styl vašeho domova a vydrží generace.
                        </p>
<ul className="text-xs text-stone-500 space-y-2 border-t border-stone-200 pt-4">
<li>• Vestavěné skříně do atypických prostor</li>
<li>• Kuchyně na klíč</li>
<li>• Kancelářský a obchodní nábytek</li>
</ul>
</article>

<article className="group p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-stone-200 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 reveal delay-100 cursor-default">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<i className="text-stone-700 w-6 h-6" data-lucide="door-open" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-4">Výroba a montáž dveří</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-6">
                            Dveře jsou vizitkou domu. Vyrábíme interiérové i vchodové dveře, které zajišťují bezpečí, ticho a estetickou hodnotu. Včetně certifikovaných protipožárních úprav.
                        </p>
<ul className="text-xs text-stone-500 space-y-2 border-t border-stone-200 pt-4">
<li>• Interiérové masivní dveře</li>
<li>• Bezpečnostní a protipožární dveře</li>
<li>• Obložkové zárubně</li>
</ul>
</article>

<article className="group p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-stone-200 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 reveal delay-200 cursor-default">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<i className="text-stone-700 w-6 h-6" data-lucide="hammer" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-4">Kompletní realizace</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-6">
                            Zbavíme vás starostí. Postaráme se o vše od zaměření prostoru přes 3D návrh až po precizní montáž. Spolupracujeme pouze s ověřenými dodavateli kování a materiálů.
                        </p>
<ul className="text-xs text-stone-500 space-y-2 border-t border-stone-200 pt-4">
<li>• 3D vizualizace a návrh</li>
<li>• Zaměření u klienta</li>
<li>• Doprava a čistá montáž</li>
</ul>
</article>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="galerie">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal">
<div>
<span className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-2 block">Inspirace</span>
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight">Vybrané realizace</h2>
</div>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-stone-800 hover:text-stone-600 transition-colors" href="#">
                        Zobrazit celou galerii
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer reveal">
<img alt="Moderní kuchyně na míru" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1617228069096-4638a7ffc906?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<span className="text-white text-sm font-medium bg-black/50 backdrop-blur px-3 py-1 rounded-full">Kuchyně na míru</span>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer reveal delay-100">
<img alt="Vestavěná skříň v ložnici" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1758548157319-ec649ce00f1f?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<span className="text-white text-sm font-medium bg-black/50 backdrop-blur px-3 py-1 rounded-full">Vestavěné skříně</span>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer reveal delay-200">
<img alt="Designové interiérové dveře" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1550982274-cd3fa94c70c3?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<span className="text-white text-sm font-medium bg-black/50 backdrop-blur px-3 py-1 rounded-full">Interiérové dveře</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="kontakt">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

<div className="reveal">
<h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-8 tracking-tight">Spojme se</h2>
<p className="text-stone-600 font-light mb-12 text-lg">
                            Máte představu o novém nábytku? Zavolejte nám, napište nebo se zastavte. Rádi s vámi probereme možnosti a připravíme nezávaznou kalkulaci.
                        </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="p-3 bg-stone-100 rounded-full text-stone-700">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-stone-900 font-medium mb-1">Adresa dílny</h4>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-stone-100 rounded-full text-stone-700">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-stone-900 font-medium mb-1">Telefon</h4>
<a className="text-stone-600 hover:text-stone-900 transition-colors text-sm" href="tel:+420777645007">
                                        +420 777 645 007
                                    </a>
<p className="text-stone-400 text-xs mt-1">Po-Pá: 8:00 - 17:00</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-stone-100 rounded-full text-stone-700">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-stone-900 font-medium mb-1">Email</h4>
<a className="text-stone-600 hover:text-stone-900 transition-colors text-sm" href="mailto:truhlarstviveta@gmail.com">
                                        truhlarstviveta@gmail.com
                                    </a>
</div>
</div>
</div>
</div>

<div className="bg-stone-50 p-8 md:p-10 rounded-3xl border border-stone-100 shadow-lg reveal delay-100">
<form action="#" className="space-y-6" method="POST">
<div>
<label className="block text-sm font-medium text-stone-700 mb-2" htmlFor="name">Jméno a příjmení</label>
<input className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 focus:border-stone-500 focus:ring-1 focus:ring-stone-500 outline-none transition-all placeholder:text-stone-400" id="name" name="name" placeholder="Jan Novák" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-2" htmlFor="contact">Email nebo telefon</label>
<input className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 focus:border-stone-500 focus:ring-1 focus:ring-stone-500 outline-none transition-all placeholder:text-stone-400" id="contact" name="contact" placeholder="+420 777 ..." type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-2" htmlFor="message">Jak vám můžeme pomoci?</label>
<textarea className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 focus:border-stone-500 focus:ring-1 focus:ring-stone-500 outline-none transition-all placeholder:text-stone-400 resize-none" id="message" name="message" placeholder="Mám zájem o vestavěnou skříň..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-stone-900 text-stone-50 rounded-xl font-medium hover:bg-stone-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2" type="submit">
                                Odeslat poptávku
                                <i className="w-4 h-4" data-lucide="send"></i>
</button>
<p className="text-center text-xs text-stone-400 mt-4">
                                Odesláním souhlasíte se zpracováním osobních údajů pro účely odpovědi.
                            </p>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="font-serif text-2xl text-stone-100 font-semibold tracking-tight block mb-2">VETA</span>
<p className="text-sm">Zakázkové truhlářství Radek Vettermann</p>
</div>
<div className="flex gap-8 text-sm font-medium">
<a className="hover:text-stone-100 transition-colors" href="#o-nas">O nás</a>
<a className="hover:text-stone-100 transition-colors" href="#sluzby">Služby</a>
<a className="hover:text-stone-100 transition-colors" href="#kontakt">Kontakt</a>
</div>
<div className="text-xs text-stone-600">
                    © 2024 Truhlářství VETA. Všechna práva vyhrazena.
                </div>
</div>
</div>
</footer>


    </>
  );
}
