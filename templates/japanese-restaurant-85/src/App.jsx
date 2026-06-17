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



        // Init Lenis Smooth Scroll
        const lenis = new Lenis({
            lerp: 0.1,
            smooth: true,
            direction: 'vertical',
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Preloader
        window.addEventListener('load', () => {
            const tl = gsap.timeline();
            tl.to("#loader-text", { y: 0, duration: 0.8, ease: "power3.out" })
              .to("#loader-text", { y: "-100%", duration: 0.6, delay: 0.4, ease: "power3.in" })
              .to("#loader", { clipPath: "inset(0 0 100% 0)", duration: 0.8, ease: "expo.inOut" }, "-=0.2")
              .from(".hero-reveal", { y: 30, opacity: 0, stagger: 0.15, duration: 1, ease: "power3.out" }, "-=0.4");
        });

        // Navigation Logic
        const nav = document.getElementById('navbar');
        const logoText = document.querySelector('.logo-text');
        
        lenis.on('scroll', (e) => {
            if (e.scroll > 50) {
                nav.classList.add('nav-scrolled');
                nav.classList.remove('text-white');
                nav.classList.add('text-black');
            } else {
                nav.classList.remove('nav-scrolled');
                nav.classList.add('text-white');
                nav.classList.remove('text-black');
            }
        });

        // Register GSAP Plugins
        gsap.registerPlugin(ScrollTrigger);

        // Parallax Images
        gsap.utils.toArray('[data-speed]').forEach(el => {
            gsap.to(el, {
                y: (i, target) => (1 - parseFloat(target.dataset.speed)) * ScrollTrigger.maxScroll(window),
                ease: "none",
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0
                }
            });
        });

        // Image Clip Reveals
        const clipTriggers = document.querySelectorAll('.clip-reveal-trigger');
        clipTriggers.forEach(trigger => {
            const img = trigger.querySelector('img');
            trigger.classList.add('clip-reveal'); // Ensure base class
            
            ScrollTrigger.create({
                trigger: trigger,
                start: "top 70%",
                onEnter: () => {
                    trigger.classList.add('active');
                    gsap.fromTo(img, { scale: 1.2 }, { scale: 1, duration: 1.5, ease: "power2.out" });
                }
            });
        });

        // Staggered Text Animations
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const elements = section.querySelectorAll('h2, h3, p, .iconify');
            if(elements.length > 0) {
                gsap.from(elements, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                    },
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: "power2.out"
                });
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
      

<div className="noise-overlay"></div>

<div className="loader-screen" id="loader">
<div className="relative overflow-hidden">
<span className="font-jp text-5xl md:text-7xl block translate-y-full" id="loader-text">吉</span>
</div>
</div>

<nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-8 transition-all duration-500 flex justify-between items-center text-white" id="navbar">
<a className="logo-text z-50 font-serif text-2xl tracking-tighter uppercase relative group" href="#">
            YOSHI
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
</a>
<div className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase font-light">
<a className="nav-link hover:text-[#C6A87C] transition-colors opacity-80 hover:opacity-100" href="#philosophy">Philosophie</a>
<a className="nav-link hover:text-[#C6A87C] transition-colors opacity-80 hover:opacity-100" href="#menu">Menü</a>
<a className="nav-link text-[#C6A87C] transition-colors relative" href="#taiko">
                Taiko 2026
                <span className="absolute -top-1 -right-2 w-1 h-1 bg-red-600 rounded-full animate-pulse"></span>
</a>
<a className="nav-link hover:text-[#C6A87C] transition-colors opacity-80 hover:opacity-100" href="#contact">Kontakt</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:block px-5 py-2 border border-current text-[10px] uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300 nav-link" href="#reservation">
                Reservieren
            </a>
<button className="md:hidden text-2xl nav-link">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="relative h-screen w-full overflow-hidden bg-[#111]">

<div className="absolute inset-0 w-full h-[120%] opacity-70" data-speed="0.4">
<img alt="Kaiseki Presentation" className="w-full h-full object-cover filter brightness-75" src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&amp;w=2525&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
<div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
<span className="font-jp text-8xl md:text-[10rem] opacity-10 absolute select-none pointer-events-none mix-blend-overlay animate-pulse" style={{animationDuration: '4s'}}>懐石</span>
<div className="overflow-hidden mb-2">
<span className="hero-reveal block text-xs md:text-sm tracking-[0.4em] uppercase text-[#C6A87C]">Alsterhaus Hamburg</span>
</div>
<div className="overflow-hidden mb-6">
<h1 className="hero-reveal font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
                    Die Kunst des<br/>Wesentlichen
                </h1>
</div>
<div className="overflow-hidden">
<p className="hero-reveal font-light text-white/80 max-w-md mx-auto text-sm leading-relaxed tracking-wide">
                    Authentische Kaiseki-Küche von Yoshizumi Nagaya. <br/>Ein kulinarisches Erlebnis über den Dächern der Stadt.
                </p>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-4">
<span className="text-[9px] tracking-[0.3em] uppercase writing-v-rl">Entdecken</span>
<iconify-icon className="text-2xl animate-bounce" icon="solar:mouse-circle-linear"></iconify-icon>
</div>
</header>
<main>

<section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto" id="philosophy">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
<div className="w-full lg:w-1/2 relative">
<div className="aspect-[4/5] bg-gray-100 overflow-hidden relative clip-reveal-trigger">
<img alt="Interior Details" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1615887023516-9dc779c46c82?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white text-right">
<span className="font-jp text-3xl">純粋</span>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 space-y-10">
<div className="flex items-center gap-4">
<div className="h-[1px] w-12 bg-[#C6A87C]"></div>
<span className="text-xs font-bold tracking-[0.2em] text-[#C6A87C] uppercase">Philosophie</span>
</div>
<h2 className="font-serif text-4xl md:text-6xl tracking-tighter text-[#111] leading-[1.1]">
                        Harmonie in <br/>
<span className="text-gray-400 italic font-light">Perfektion.</span>
</h2>
<div className="space-y-6 text-[#444] font-light leading-relaxed">
<p>
                            Im YOSHI zelebrieren wir die japanische Kaiseki-Tradition: Eine Abfolge von Speisen, die nicht nur den Gaumen, sondern alle Sinne berührt. 
                        </p>
<p>
                            Jedes Gericht ist eine Hommage an die Jahreszeit. Wir verzichten auf unnötige Effekte und konzentrieren uns auf das Produkt, die Textur und die Temperatur. Es ist die Suche nach dem reinen Geschmack.
                        </p>
</div>
<div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
<div>
<iconify-icon className="text-2xl mb-3 text-[#C6A87C]" icon="solar:chef-hat-heart-linear"></iconify-icon>
<h4 className="font-serif text-xl mb-1">Meisterhandwerk</h4>
<p className="text-xs text-gray-500 font-light">Geführt von Yoshizumi Nagaya</p>
</div>
<div>
<iconify-icon className="text-2xl mb-3 text-[#C6A87C]" icon="solar:leaf-linear"></iconify-icon>
<h4 className="font-serif text-xl mb-1">Saisonalität</h4>
<p className="text-xs text-gray-500 font-light">Täglich frische Zutaten</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-32 border-t border-gray-100 relative" id="menu">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="flex justify-between items-end mb-20">
<div>
<span className="text-xs font-bold tracking-[0.2em] text-[#C6A87C] uppercase block mb-3">Kulinarik</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tighter">Speisekarte</h2>
</div>
<div className="hidden md:block text-right">
<p className="text-xs text-gray-400 uppercase tracking-widest">Öffnungszeiten</p>
<p className="font-serif text-lg">Mo - Sa 12:00 - 22:00</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">

<div className="space-y-8">
<h3 className="font-serif text-2xl italic text-gray-400 border-b border-gray-100 pb-4">Mittagstisch</h3>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-base font-normal group-hover:text-[#C6A87C] transition-colors">Sashimi Don</h4>
<span className="text-xs font-mono text-gray-400">24€</span>
</div>
<p className="text-xs text-gray-500 leading-relaxed">Roher Lachs, Thunfisch und saisonaler Fisch auf Sushireis.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-base font-normal group-hover:text-[#C6A87C] transition-colors">Unagi Kabayaki</h4>
<span className="text-xs font-mono text-gray-400">32€</span>
</div>
<p className="text-xs text-gray-500 leading-relaxed">Gegrillter Flussaal mit süßer Sojasauce, serviert in der Lackbox.</p>
</div>
</div>

<div className="space-y-8">
<h3 className="font-serif text-2xl italic text-gray-400 border-b border-gray-100 pb-4">Abendkarte</h3>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-base font-normal group-hover:text-[#C6A87C] transition-colors">Omakase Nigiri</h4>
<span className="text-xs font-mono text-gray-400">85€</span>
</div>
<p className="text-xs text-gray-500 leading-relaxed">10 Stück Premium Nigiri nach Wahl des Chefs, inkl. Miso Suppe.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-base font-normal group-hover:text-[#C6A87C] transition-colors">Wagyu Tataki</h4>
<span className="text-xs font-mono text-gray-400">42€</span>
</div>
<p className="text-xs text-gray-500 leading-relaxed">Kurz angebratenes Kagoshima Wagyu Beef A5 mit Ponzu.</p>
</div>
</div>

<div className="space-y-8 bg-[#FAFAFA] -m-6 p-6 md:bg-transparent md:p-0 md:m-0">
<h3 className="font-serif text-2xl text-[#C6A87C] border-b border-[#C6A87C]/30 pb-4 flex items-center gap-2">
<iconify-icon icon="solar:star-linear"></iconify-icon> Signature
                        </h3>
<div className="space-y-6">
<div>
<h4 className="text-xl font-serif mb-2">YOSHI Kaiseki</h4>
<p className="text-sm text-gray-600 leading-relaxed mb-4">
                                    Eine 7- bis 9-gängige Reise durch die japanische Hochküche. Erleben Sie die Perfektion von Dashi, die Frische von Sashimi und die Kunst des Anrichtens.
                                </p>
<div className="flex gap-4 text-xs tracking-widest uppercase text-gray-400">
<span>ab 145€ p.P.</span>
<span>Nur Abends</span>
</div>
</div>
<button className="w-full py-3 border border-gray-200 hover:border-[#C6A87C] hover:text-[#C6A87C] transition-all text-xs uppercase tracking-[0.2em] mt-4 bg-white">
                                Menü Einsehen
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#050505] text-white py-40 overflow-hidden isolate" id="taiko">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-[#050505] to-[#050505]"></div>
<img alt="Abstract Texture" className="w-full h-full object-cover opacity-20 grayscale mix-blend-screen" src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
<div className="inline-flex flex-col items-center mb-12 animate-pulse">
<span className="font-jp text-5xl md:text-7xl text-red-600 mb-2">太鼓</span>
<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
</div>
<h2 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-700">
                    SUKEROKU<br/>TAIKO 2026
                </h2>
<p className="text-lg font-light text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
                    Ein exklusives Gastspiel. Wenn der donnernde Klang der Trommeln auf die Stille des Genusses trifft. Reservierungen ab sofort möglich.
                </p>

<div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
<div className="py-12 px-6 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors group">
<span className="block text-xs text-red-500 tracking-widest uppercase mb-4">Datum</span>
<span className="font-serif text-3xl group-hover:scale-105 transition-transform inline-block">10. - 13. Feb</span>
<span className="block text-sm text-gray-500 mt-2">Jahr 2026</span>
</div>
<div className="py-12 px-6 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors group">
<span className="block text-xs text-red-500 tracking-widest uppercase mb-4">Erlebnis</span>
<span className="font-serif text-3xl group-hover:scale-105 transition-transform inline-block">9 Gänge</span>
<span className="block text-sm text-gray-500 mt-2">+ Live Performance</span>
</div>
<div className="py-12 px-6 hover:bg-white/5 transition-colors group cursor-pointer">
<span className="block text-xs text-red-500 tracking-widest uppercase mb-4">Tickets</span>
<div className="flex items-center justify-center gap-2 group-hover:text-[#C6A87C] transition-colors">
<span className="font-serif text-3xl">Anfragen</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FAFAFA] pt-32 pb-12" id="contact">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="bg-white p-8 md:p-16 border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-10">
<div>
<span className="text-xs font-bold tracking-[0.2em] text-[#C6A87C] uppercase mb-6 block">Standort</span>
<h3 className="font-serif text-4xl mb-6">YOSHI im Alsterhaus</h3>
<p className="text-gray-500 font-light leading-relaxed">
                                    Neuer Jungfernstieg 16-20<br/>
                                    20354 Hamburg<br/>
                                    4. Obergeschoss
                                </p>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<h5 className="text-xs uppercase tracking-widest text-black mb-2">Kontakt</h5>
<p className="text-sm text-gray-500 font-light">+49 40 360 99 999<br/>info@yoshi-hamburg.de</p>
</div>
<div>
<h5 className="text-xs uppercase tracking-widest text-black mb-2">Privat Dining</h5>
<p className="text-sm text-gray-500 font-light">Ab 8 Personen<br/>Raum "Sakura"</p>
</div>
</div>
<div className="pt-8 border-t border-gray-100">
<span className="text-[10px] uppercase tracking-widest text-gray-400">Social</span>
<div className="flex gap-4 mt-4 text-xl text-gray-800">
<a className="hover:text-[#C6A87C] transition-colors" href="#"><iconify-icon icon="solar:camera-linear"></iconify-icon></a>
<a className="hover:text-[#C6A87C] transition-colors" href="#"><iconify-icon icon="solar:map-point-linear"></iconify-icon></a>
</div>
</div>
</div>

<div className="bg-[#FAFAFA] p-8 md:p-10 border border-gray-100/50" id="reservation">
<h3 className="font-serif text-2xl mb-8">Tischreservierung</h3>
<form className="space-y-8">
<div className="grid grid-cols-2 gap-6">
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-[#C6A87C] transition-colors">Datum</label>
<input className="w-full bg-transparent border-b border-gray-300 py-2 font-serif text-lg focus:outline-none focus:border-[#C6A87C] transition-colors" type="date"/>
</div>
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-[#C6A87C] transition-colors">Gäste</label>
<select className="w-full bg-transparent border-b border-gray-300 py-2 font-serif text-lg focus:outline-none focus:border-[#C6A87C] transition-colors">
<option>2 Personen</option>
<option>3 Personen</option>
<option>4 Personen</option>
<option>5+ Personen</option>
</select>
</div>
</div>
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-[#C6A87C] transition-colors">Name</label>
<input className="w-full bg-transparent border-b border-gray-300 py-2 font-serif text-lg placeholder:text-gray-300 focus:outline-none focus:border-[#C6A87C] transition-colors" placeholder="Vorname Nachname" type="text"/>
</div>
<div className="pt-4">
<button className="w-full bg-[#111] text-white py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#C6A87C] transition-colors duration-300 flex items-center justify-center gap-2 group" type="button">
                                        Verfügbarkeit Prüfen
                                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
<div className="mt-16 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.15em] text-gray-400 gap-4">
<p>© 2025 Yoshi Hamburg. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-black transition-colors" href="#">Impressum</a>
<a className="hover:text-black transition-colors" href="#">Datenschutz</a>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
