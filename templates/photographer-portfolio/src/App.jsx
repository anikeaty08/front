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
      

<nav className="z-50 md:px-12 flex text-white mix-blend-difference w-full pt-8 pr-6 pb-8 pl-6 absolute top-0 left-0 items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<span className="text-2xl md:text-3xl font-medium tracking-tighter leading-none">EM</span>
<span className="text-xs tracking-[0.2em] font-heading hidden sm:block mt-1">Elise Maes</span>
</a>
<ul className="hidden md:flex gap-10 text-xs font-medium tracking-[0.15em] uppercase">
<li><a className="hover:text-[#aeaeae] transition-colors duration-300" href="#about">Over</a></li>
<li className=""><a className="hover:text-[#aeaeae] transition-colors duration-300" href="#portfolio">Portfolio</a></li>
<li className=""><a className="hover:text-[#aeaeae] transition-colors duration-300" href="#contact">Contact</a></li>
</ul>
<button className="md:hidden text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-bold-duotone"></iconify-icon>
</button>
</nav>

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#151515]">
<img alt="Elegante trouwfotografie" className="grayscale-[50%] opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=3840&amp;q=80"/>
<div className="relative z-10 text-center px-6 flex flex-col items-center mt-12">
<p className="text-[#aeaeae] text-xs tracking-[0.3em] uppercase mb-6 md:mb-8 font-medium">België &amp; Wereldwijd</p>
<h1 className="font-heading text-5xl md:text-7xl lg:text-[7rem] tracking-tight text-white mb-8 font-light leading-[1.1] max-w-5xl">
                Tijdloze Beelden<br/>Voor Elegante Zielen
            </h1>
<a className="mt-8 px-10 py-5 bg-white text-[#151515] text-xs uppercase tracking-[0.2em] hover:bg-[#aeaeae] hover:text-white transition-all duration-500 flex items-center gap-3" href="#contact">
                Ontdek het werk
                <iconify-icon className="text-base" icon="solar:arrow-right-bold-duotone"></iconify-icon>
</a>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
<iconify-icon className="text-2xl" icon="solar:mouse-circle-bold-duotone"></iconify-icon>
</div>
</section>

<section className="md:py-40 md:px-12 flex flex-col md:flex-row gap-16 md:gap-32 max-w-[1400px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 gap-x-16 gap-y-16 items-center" id="about">
<div className="w-full md:w-5/12 relative">
<div className="aspect-[3/4] overflow-hidden bg-[#f5f5f5]">
<img alt="Elise Maes" className="hover:grayscale-0 transition-all duration-1000 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1601934025750-1e6694af7f41?w=1600&amp;q=80"/>
</div>

<div className="absolute -bottom-6 -right-6 w-full h-full border border-[#aeaeae]/30 -z-10 hidden md:block"></div>
</div>
<div className="w-full md:w-7/12 flex flex-col items-start">
<h2 className="font-heading text-4xl md:text-6xl tracking-tight font-light mb-10 leading-[1.1]">De Kunst van<br/>het Observeren</h2>
<div className="space-y-8 text-[#151515]/80 text-sm md:text-base leading-relaxed font-light max-w-2xl">
<p className="">Hallo, ik ben Elise. Gevestigd in het kloppend hart van België, reis ik grenzen over om oprechte momenten en authentieke liefde vast te leggen. Mijn benadering is voornamelijk documentair, subtiel verweven met een redactioneel oog voor esthetiek en detail.</p>
<p className="">Ik geloof in de pure schoonheid van het ongedwongene. Geen stijve poses of geregisseerde perfectie, maar de rauwe, echte emoties die jullie verhaal uniek maken. Natuurlijk licht, zachte schaduwen en onuitgesproken connectie zijn mijn belangrijkste instrumenten tijdens een reportage.</p>
</div>
<div className="mt-14 flex items-center gap-6">
<span className="text-5xl font-heading text-[#aeaeae]/40">EM</span>
<div className="h-px w-12 bg-[#aeaeae]"></div>
<span className="text-xs tracking-[0.2em] uppercase font-medium text-[#151515]">Oprichter &amp; Fotograaf</span>
</div>
</div>
</section>

<div className="w-full h-px bg-[#aeaeae]/20 max-w-[1400px] mx-auto"></div>

<section className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto" id="portfolio">
<p className="text-[#aeaeae] text-xs uppercase tracking-[0.2em] mb-16 md:mb-24">Portfolio &amp; Expertise</p>
<div className="flex flex-col relative">

<a className="portfolio-item group flex flex-col md:flex-row justify-between items-baseline md:py-16 hover:pl-6 transition-all duration-500 first:border-t border-[#aeaeae]/20 border-b pt-10 pb-10 pl-6 relative" href="#">
<h3 className="font-heading text-4xl md:text-7xl tracking-tight font-light text-[#151515] group-hover:text-[#aeaeae] transition-colors z-10">Bruiloften</h3>
<span className="text-xs tracking-[0.2em] uppercase mt-4 md:mt-0 text-[#151515]/60 z-10 flex items-center gap-4">
                    Intiem &amp; Groots
                    <iconify-icon className="text-lg opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" icon="solar:arrow-right-up-bold-duotone"></iconify-icon>
</span>

<div className="portfolio-img absolute top-1/2 left-2/3 w-[28rem] aspect-[4/3] pointer-events-none z-20 hidden md:block overflow-hidden shadow-2xl">
<img alt="Bruiloft" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</a>

<a className="portfolio-item group relative flex flex-col md:flex-row justify-between items-baseline py-10 md:py-16 border-b border-[#aeaeae]/20 hover:pl-6 transition-all duration-500" href="#">
<h3 className="font-heading text-4xl md:text-7xl tracking-tight font-light text-[#151515] group-hover:text-[#aeaeae] transition-colors z-10">Portretten</h3>
<span className="text-xs tracking-[0.2em] uppercase mt-4 md:mt-0 text-[#151515]/60 z-10 flex items-center gap-4">
                    Puur &amp; Eerlijk
                    <iconify-icon className="text-lg opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" icon="solar:arrow-right-up-bold-duotone"></iconify-icon>
</span>

<div className="portfolio-img absolute top-1/2 left-2/3 w-[28rem] aspect-[4/3] pointer-events-none z-20 hidden md:block overflow-hidden shadow-2xl">
<img alt="Portretten" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</a>

<a className="portfolio-item group relative flex flex-col md:flex-row justify-between items-baseline py-10 md:py-16 border-b border-[#aeaeae]/20 hover:pl-6 transition-all duration-500" href="#">
<h3 className="font-heading text-4xl md:text-7xl tracking-tight font-light text-[#151515] group-hover:text-[#aeaeae] transition-colors z-10">Editorials</h3>
<span className="text-xs tracking-[0.2em] uppercase mt-4 md:mt-0 text-[#151515]/60 z-10 flex items-center gap-4">
                    Mode &amp; Concept
                    <iconify-icon className="text-lg opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" icon="solar:arrow-right-up-bold-duotone"></iconify-icon>
</span>

<div className="portfolio-img absolute top-1/2 left-2/3 w-[28rem] aspect-[4/3] pointer-events-none z-20 hidden md:block overflow-hidden shadow-2xl">
<img alt="Editorials" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</a>
</div>
</section>

<section className="w-full overflow-hidden flex gap-4 md:gap-8 px-4 pb-24 md:pb-40">
<div className="w-2/3 md:w-1/3 shrink-0 aspect-[3/4] overflow-hidden">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="w-2/3 md:w-1/3 shrink-0 aspect-[3/4] overflow-hidden md:mt-16">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="w-2/3 md:w-1/3 shrink-0 aspect-[3/4] overflow-hidden">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 bg-[#151515] text-white text-center flex items-center justify-center">
<div className="max-w-4xl mx-auto flex flex-col items-center">
<iconify-icon className="text-5xl text-[#aeaeae] mb-12" icon="solar:quote-right-bold-duotone"></iconify-icon>
<h3 className="font-heading text-3xl md:text-5xl tracking-tight font-light leading-[1.4] mb-14 text-white/90">
                "Elise heeft de zeldzame gave om de tijd even stil te laten staan. Ze was haast onzichtbaar aanwezig en wist toch elk kwetsbaar moment te vangen. De beelden voelen aan als een nostalgische, prachtige droom."
            </h3>
<div className="flex items-center gap-4">
<div className="w-8 h-px bg-[#aeaeae]"></div>
<p className="text-xs tracking-[0.2em] uppercase font-medium text-[#aeaeae]">Charlotte &amp; Maxime, Antwerpen</p>
<div className="w-8 h-px bg-[#aeaeae]"></div>
</div>
</div>
</section>

<section className="pt-32 md:pt-48 pb-12 px-6 md:px-12 flex flex-col items-center text-center bg-white relative" id="contact">
<div className="max-w-3xl mb-32 md:mb-48 relative z-10">
<p className="text-[#aeaeae] text-xs uppercase tracking-[0.2em] mb-8">Beschikbaarheid 2025</p>
<h2 className="font-heading text-5xl md:text-7xl lg:text-[6rem] tracking-tight font-light mb-10 leading-[1.1]">Laten we Iets<br/>Prachtigs Creëren</h2>
<p className="text-[#151515]/70 text-sm md:text-base font-light mb-14 max-w-lg mx-auto leading-relaxed">
                Mijn agenda voor het komende huwelijksseizoen vult zich snel. Neem contact op om jullie datum te verifiëren en jullie visie met mij te delen.
            </p>
<a className="group inline-flex items-center gap-4 border-b border-[#151515] pb-3 hover:text-[#aeaeae] hover:border-[#aeaeae] transition-all duration-300 text-lg md:text-xl tracking-wide" href="mailto:hello@elisemaes.be">
<span>Start jullie verhaal</span>
<iconify-icon className="text-2xl group-hover:rotate-12 transition-transform" icon="solar:letter-bold-duotone"></iconify-icon>
</a>
</div>

<footer className="w-full max-w-[1400px] border-t border-[#151515]/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8 text-[#151515]/60 text-xs tracking-[0.15em] uppercase relative z-10">
<div className="flex items-center gap-3">
<span className="text-xl font-medium tracking-tighter leading-none text-[#151515]">EM</span>
<span className="lowercase tracking-normal">© 2024 Elise Maes Fotografie. Alle rechten voorbehouden.</span>
</div>
<ul className="flex gap-8">
<li><a className="hover:text-[#151515] transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-[#151515] transition-colors" href="#">Pinterest</a></li>
<li><a className="hover:text-[#151515] transition-colors" href="#">Voorwaarden</a></li>
</ul>
</footer>
</section>

    </>
  );
}
