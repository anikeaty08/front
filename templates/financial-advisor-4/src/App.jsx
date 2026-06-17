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
      

<header className="fixed w-full top-0 z-50 bg-[#000b18]/95 backdrop-blur-sm">
<div className="max-w-[1200px] mx-auto px-6 h-24 flex items-center justify-between">

<div className="flex flex-col items-center justify-center text-white">
<span className="text-3xl font-medium tracking-tight leading-none text-teal-accent border-b-2 border-teal-accent pb-1 mb-1">TL</span>
<span className="text-xs tracking-[0.2em] uppercase text-gray-300">Tomáš Lukáš</span>
</div>

<nav className="hidden md:flex items-center gap-10">
<a className="text-white pb-1" href="#">Domů</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#">Služby</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#">O mně</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#">Reference</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#">Blog</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#">Kontakt</a>
</nav>

<a className="hidden md:inline-flex bg-teal-accent text-[#000b18] px-8 py-3 rounded font-medium hover:bg-teal-400 transition-colors" href="#">
                Rezervace
            </a>

<button className="md:hidden text-white">
<i className="w-8 h-8" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="overflow-hidden w-full pt-40 pb-24 relative">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
<div className="flex flex-col items-start gap-8">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-teal-accent leading-[1.1]">
                    Finanční servis a mentoring pro rodiny s dětmi
                </h1>
<p className="text-xl text-gray-300 font-light leading-relaxed max-w-lg">
                    Jsem vaším osobním průvodcem ve světě financí a pomáhám tvořit plány na míru, které přinášejí přehled a jasnou cestu ke splnění životních cílů.
                </p>
<div className="flex flex-wrap items-center gap-4 mt-4">
<a className="bg-teal-accent text-[#000b18] px-8 py-4 rounded font-medium hover:bg-teal-400 transition-colors shadow-neon" href="#">
                        Napište mi
                    </a>
<a className="border border-white text-white px-8 py-4 rounded font-medium hover:bg-white/5 transition-colors" href="#">
                        Kontaktujte mě
                    </a>
</div>
</div>
<div className="flex lg:justify-end md:mt-0 mt-12 relative justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-teal-accent/20 blur-[100px] rounded-full z-0"></div>

<img alt="Tomáš Lukáš Portrait" className="relative z-10 w-full max-w-[450px] object-cover rounded-sm drop-shadow-2xl opacity-90 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&amp;fit=crop&amp;q=80&amp;w=800&amp;h=1000"/>
</div>
</div>
</section>

<section className="w-full bg-navy-light py-24">
<div className="max-w-[1200px] mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-teal-accent mb-16">
                S čím vám mohu pomoci
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">

<div className="flex items-start gap-8">
<div className="relative flex-shrink-0 w-20 h-20 border border-white rotate-45 flex items-center justify-center mt-2 group hover:border-teal-accent transition-colors">
<i className="w-8 h-8 text-white -rotate-45 group-hover:text-teal-accent transition-colors" data-lucide="puzzle"></i>
</div>
<div className="flex flex-col gap-3">
<h3 className="text-2xl font-medium text-teal-accent tracking-tight">Finanční plánování</h3>
<p className="text-gray-300 leading-relaxed font-light">
                            Vytvořím individuální plán, který vám pomůže dosáhnout vašich finančních cílů a zároveň ochrání váš majetek.
                        </p>
</div>
</div>

<div className="flex items-start gap-8">
<div className="relative flex-shrink-0 w-20 h-20 border border-white rotate-45 flex items-center justify-center mt-2 group hover:border-teal-accent transition-colors">
<i className="w-8 h-8 text-white -rotate-45 group-hover:text-teal-accent transition-colors" data-lucide="graduation-cap"></i>
</div>
<div className="flex flex-col gap-3">
<h3 className="text-2xl font-medium text-teal-accent tracking-tight">Finanční vzdělávání</h3>
<p className="text-gray-300 leading-relaxed font-light">
                            Kdo má informace, má náskok. Naučím vás činit uvážená rozhodnutí, která vám ušetří čas, peníze i stres.
                        </p>
</div>
</div>

<div className="flex items-start gap-8">
<div className="relative flex-shrink-0 w-20 h-20 border border-white rotate-45 flex items-center justify-center mt-2 group hover:border-teal-accent transition-colors">
<i className="w-8 h-8 text-white -rotate-45 group-hover:text-teal-accent transition-colors" data-lucide="handshake"></i>
</div>
<div className="flex flex-col gap-3">
<h3 className="text-2xl font-medium text-teal-accent tracking-tight">Dlouhodobá spolupráce</h3>
<p className="text-gray-300 leading-relaxed font-light">
                            Dlouhodobý přístup a kvalita jsou základem mé práce. Pravidelné výroční schůzky zajistí stálost, přehled i důvěru.
                        </p>
</div>
</div>

<div className="flex items-start gap-8">
<div className="relative flex-shrink-0 w-20 h-20 border border-white rotate-45 flex items-center justify-center mt-2 group hover:border-teal-accent transition-colors">
<i className="w-8 h-8 text-white -rotate-45 group-hover:text-teal-accent transition-colors" data-lucide="baby"></i>
</div>
<div className="flex flex-col gap-3">
<h3 className="text-2xl font-medium text-teal-accent tracking-tight">Rodinné finance</h3>
<p className="text-gray-300 leading-relaxed font-light">
                            Zajistím finanční stabilitu pro celou rodinu. Pomohu pracovat s rozpočtem, ochráním vaše aktiva a připravím vás i s dětmi na budoucnost.
                        </p>
</div>
</div>
</div>
<div className="flex justify-center mt-20">
<a className="bg-teal-accent text-[#000b18] px-10 py-4 rounded font-medium hover:bg-teal-400 transition-colors shadow-neon" href="#">
                    Prozkoumat služby
                </a>
</div>
</div>
</section>

<section className="w-full bg-navy-dark py-24 relative">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="flex flex-col gap-8 items-start">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-teal-accent">
                    Kdo jsem
                </h2>
<div className="flex flex-col gap-6 text-gray-300 font-light leading-relaxed">
<p>
                        Orientace v této rozmanité oblasti je dnes stále složitější a komplexnější. Já vás tímto světem bezpečně provedu a pomohu vám se v něm snadno zorientovat. Mým životním posláním je zvyšovat úroveň finanční gramotnosti a vzděláváním pomáhat vytvářet cestu k finanční nezávislosti.
                    </p>
<p>
                        Věřím, že férový přístup, otevřená komunikace a dlouhodobá spolupráce jsou klíčem ke stabilitě a jistotě. Každý klient má svůj příběh – mým cílem je, aby ten váš měl pevné finanční základy.
                    </p>
</div>
<a className="bg-teal-accent text-[#000b18] px-8 py-4 rounded font-medium hover:bg-teal-400 transition-colors mt-4" href="#">
                    Můj příběh
                </a>
</div>
<div className="relative flex justify-center">

<img alt="Tomáš Lukáš" className="relative z-10 w-full max-w-[400px] object-cover rounded-sm grayscale-[20%] drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=800&amp;h=1000"/>
</div>
</div>
</section>

<section className="w-full bg-navy-light py-24">
<div className="max-w-[1200px] mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-teal-accent mb-16">
                Co o mně říkají klienti
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border border-white rounded-xl p-8 bg-[#000b18]/40 backdrop-blur-sm flex flex-col justify-between shadow-neon gap-8">
<div className="flex flex-col gap-6">
<h4 className="text-xl font-medium tracking-tight text-white">Honza, Blansko</h4>
<p className="text-base text-gray-300 font-light leading-relaxed">
                            Díky Tomášovi jsem se více ponořil do světa investic a zjistil, jak lépe využít věci, které už mám. Vždycky je po ruce, když něco potřebuju, a to fakt oceňuji. Není to ten typ poradce, co vám sepíše smlouvy a pak zmizí – naopak, je pořád v obraze a fakt se snaží pomoct.
                        </p>
</div>
<div className="flex items-center justify-between mt-auto pt-6">
<div className="flex gap-1 text-teal-accent">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<svg height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
</div>
</div>

<div className="border border-white rounded-xl p-8 bg-[#000b18]/40 backdrop-blur-sm flex flex-col justify-between shadow-neon gap-8">
<div className="flex flex-col gap-6">
<h4 className="text-xl font-medium tracking-tight text-teal-accent">Marcela, Charváty</h4>
<p className="text-base text-gray-300 font-light leading-relaxed">
                            Schůzka s panem Lukasem mě velmi mile překvapila. Trpělivě a srozumitelně mi vysvětlil vše ohledně penzijka, životního pojištění a investic. Příjemné vystupování, přátelská atmosféra. Těším se na další spolupráci. Všem mohu vřele doporučit.
                        </p>
</div>
<div className="flex items-center justify-between mt-auto pt-6">
<div className="flex gap-1 text-teal-accent">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<svg height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
</div>
</div>

<div className="border border-white rounded-xl p-8 bg-[#000b18]/40 backdrop-blur-sm flex flex-col justify-between shadow-neon gap-8">
<div className="flex flex-col gap-6">
<h4 className="text-xl font-medium tracking-tight text-teal-accent">Václav, Zábřeh</h4>
<p className="text-base text-gray-300 font-light leading-relaxed">
                            Pokud hledáte někoho, kdo opravdu rozumí číslům a dokáže vše vysvětlit lidsky, tak už nehledejte. Tomáš se v tomhle fakt našel. Má skvělý přehled o investicích, pojištění i dalších produktech a hlavně vás nikdy nebude tlačit do něčeho jen kvůli vlastnímu výdělku. Je to profík, kterému můžete s klidem důvěřovat.
                        </p>
</div>
<div className="flex items-center justify-between mt-auto pt-6">
<div className="flex gap-1 text-teal-accent">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<svg height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
</div>
</div>
</div>
<div className="flex justify-center mt-16">
<a className="bg-teal-accent text-[#000b18] px-8 py-4 rounded font-medium hover:bg-teal-400 transition-colors shadow-neon" href="#">
                    Přečíst všechny recenze
                </a>
</div>
</div>
</section>

<section className="w-full bg-navy-dark py-24">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative flex justify-center md:justify-start">
<img alt="Tomáš Lukáš" className="relative z-10 w-full max-w-[350px] object-cover rounded-sm grayscale-[10%] [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&amp;fit=crop&amp;q=80&amp;w=600&amp;h=800"/>
</div>
<div className="flex flex-col gap-8 items-start">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-teal-accent">
                    Poznejme se
                </h2>
<div className="flex flex-col gap-6 text-gray-300 font-light leading-relaxed">
<p>
                        Prvním krokem je porozumění. Spojme se a zjistěme, jaká máme vzájemná očekávání. Poté se pobavíme o možnostech spolupráce. Těším se na to, jak společně najdeme nejlepší cestu pro váš další postup a dosažení cílů.
                    </p>
<p>
                        Udělejte první krok – ozvěte se mi a domluvme si úvodní setkání.
                    </p>
</div>
<a className="bg-teal-accent text-[#000b18] px-10 py-4 rounded font-medium hover:bg-teal-400 transition-colors mt-2" href="#">
                    Kontaktovat
                </a>
</div>
</div>
</section>

<footer className="w-full bg-[#000610] pt-20 pb-10 border-t border-white/5">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
<div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 mb-16">

<div className="flex flex-col items-center md:items-start gap-6">
<span className="text-sm font-medium tracking-widest uppercase text-white">Buďme ve spojení</span>
<div className="flex items-center gap-4">
<a className="w-12 h-12 rounded border border-white flex items-center justify-center hover:border-teal-accent hover:text-teal-accent transition-colors" href="#">
<i className="w-5 h-5" data-lucide="phone"></i>
</a>
<a className="w-12 h-12 rounded border border-white flex items-center justify-center hover:border-teal-accent hover:text-teal-accent transition-colors" href="#">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</a>
<a className="w-12 h-12 rounded border border-white flex items-center justify-center hover:border-teal-accent hover:text-teal-accent transition-colors" href="#">
<i className="w-5 h-5" data-lucide="at-sign"></i>
</a>
<a className="w-12 h-12 rounded border border-white flex items-center justify-center hover:border-teal-accent hover:text-teal-accent transition-colors" href="#">
<i className="w-5 h-5" data-lucide="contact"></i>
</a>
</div>
</div>

<div className="flex flex-col items-center gap-4">
<span className="text-5xl text-white signature-font opacity-90 tracking-wide">Tomáš Lukáš</span>
<span className="text-sm text-gray-400 font-light italic">Čas v trhu překonává časování trhu.</span>
</div>

<div className="flex flex-col items-center md:items-end gap-6">
<span className="text-sm font-medium tracking-widest uppercase text-white">Sociální sítě</span>
<div className="flex items-center gap-4">
<a className="w-12 h-12 rounded border border-white flex items-center justify-center hover:border-teal-accent hover:text-teal-accent transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="w-12 h-12 rounded border border-white flex items-center justify-center hover:border-teal-accent hover:text-teal-accent transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-12 h-12 rounded border border-white flex items-center justify-center hover:border-teal-accent hover:text-teal-accent transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-12 h-12 rounded border border-white flex items-center justify-center hover:border-teal-accent hover:text-teal-accent transition-colors font-medium text-base" href="#">
                            SK
                        </a>
</div>
</div>
</div>

<div className="w-full flex flex-col md:flex-row justify-center items-center gap-2 text-xs text-gray-500 font-light text-center">
<span>© 2025 Tomáš Lukáš, PFP</span>
<span className="hidden md:inline">|</span>
<span>Všechna práva vyhrazena</span>
<span className="hidden md:inline">|</span>
<span>Webdesign od AIProGroup</span>
</div>
</div>
</footer>


    </>
  );
}
