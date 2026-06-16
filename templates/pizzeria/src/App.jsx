import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Smooth Reveal on Scroll Script
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 150;
            
            revealElements.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        // Trigger once on load
        revealOnScroll();

        // Mobile Menu Link Click Handling (smooth scroll)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if(target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-40 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-stone-200 transition-all duration-500" id="navbar">
<a className="flex items-center gap-2 group cursor-pointer" href="#">
<iconify-icon className="text-amber-200/80 group-hover:text-amber-500 transition-colors duration-500" icon="solar:fire-square-linear" width="24"></iconify-icon>
<span className="serif tracking-[0.2em] text-sm md:text-base font-semibold">L'ARTE</span>
</a>
<div className="hidden md:flex gap-10 text-xs tracking-widest uppercase text-stone-400 font-light">
<a className="nav-link hover:text-amber-100 transition-colors duration-300" href="#about">O nás</a>
<a className="nav-link hover:text-amber-100 transition-colors duration-300" href="#menu">Nabídka Pizz</a>
<a className="nav-link hover:text-amber-100 transition-colors duration-300" href="#sides">Saláty &amp; Nápoje</a>
<a className="nav-link hover:text-amber-100 transition-colors duration-300" href="#contact">Kontakt</a>
</div>
<a className="hidden md:flex items-center gap-3 border border-stone-700/50 rounded-full px-5 py-2 hover:border-amber-700/50 hover:bg-amber-900/10 transition-all duration-500 group" href="tel:+420123456789">
<span className="text-xs uppercase tracking-widest text-stone-300 group-hover:text-amber-100">Objednat</span>
<iconify-icon className="text-stone-400 group-hover:text-amber-100 transition-colors" icon="solar:phone-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-stone-200" onclick="document.querySelector('.mobile-menu').classList.toggle('hidden')">
</button>
</nav>

<div className="mobile-menu hidden fixed inset-0 z-30 bg-black/95 backdrop-blur-md pt-32 px-6 flex-col gap-8 md:hidden">
<a className="text-xl serif tracking-widest text-stone-300 hover:text-amber-200" href="#about" onclick="document.querySelector('.mobile-menu').classList.add('hidden')">O nás</a>
<a className="text-xl serif tracking-widest text-stone-300 hover:text-amber-200" href="#menu" onclick="document.querySelector('.mobile-menu').classList.add('hidden')">Nabídka Pizz</a>
<a className="text-xl serif tracking-widest text-stone-300 hover:text-amber-200" href="#sides" onclick="document.querySelector('.mobile-menu').classList.add('hidden')">Saláty &amp; Nápoje</a>
<a className="text-xl serif tracking-widest text-stone-300 hover:text-amber-200" href="#contact" onclick="document.querySelector('.mobile-menu').classList.add('hidden')">Kontakt</a>
<a className="mt-8 py-4 text-center border border-amber-800/50 text-amber-200 tracking-widest uppercase text-xs" href="tel:+420123456789">Zavolat a Objednat</a>
</div>

<header className="relative w-full h-screen overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-radial-gradient from-amber-900/10 to-transparent z-10 opacity-50 pointer-events-none"></div>
<video autoplay="" className="w-full h-full object-cover scale-105 opacity-80" loop="" muted="" playsinline="">
<source src="https://cdn.midjourney.com/video/3f02d83c-2b48-4d71-beb9-1c52978d4563/0.mp4" type="video/mp4"/>
</video>
</div>

<div className="relative z-20 text-center flex flex-col items-center max-w-4xl px-4 mt-16">
<div className="mb-8 opacity-0 animate-[float_4s_ease-in-out_infinite] reveal active" style={{transitionDelay: '200ms'}}>
<div className="w-1 h-20 bg-gradient-to-b from-transparent to-amber-500/50 mx-auto mb-4"></div>
<iconify-icon className="text-amber-400/80 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" icon="solar:fire-linear" width="48"></iconify-icon>
</div>
<h1 className="text-5xl md:text-7xl font-light text-stone-100 leading-tight tracking-tighter drop-shadow-lg reveal active mb-6" style={{transitionDelay: '400ms'}}>
                Umění <br/> <span className="serif italic text-amber-300/90">Pravé Pizzy</span>
</h1>
<p className="text-sm md:text-base text-stone-300 tracking-wide font-light max-w-lg mx-auto mb-12 reveal active drop-shadow-md" style={{transitionDelay: '600ms'}}>
                Pizzeria L'Arte — Spojení tradiční neapolské receptury, vůně dřeva a vášně pro dokonalé těsto.
            </p>
<div className="flex flex-col md:flex-row gap-6 reveal active" style={{transitionDelay: '800ms'}}>
<a className="px-8 py-4 border border-stone-400/50 text-stone-100 text-xs uppercase tracking-[0.2em] hover:bg-amber-50 hover:text-black hover:border-amber-50 transition-all duration-700 ease-out backdrop-blur-sm bg-black/20" href="#menu">
                    Prohlédnout Menu
                </a>
</div>
</div>

<a className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity animate-bounce duration-[3000ms] cursor-pointer z-20" href="#about">
<span className="text-[10px] uppercase tracking-widest text-stone-400">Objevte</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-stone-400 to-transparent"></div>
</a>
</header>

<section className="relative py-32 md:py-48 px-6 md:px-20 overflow-hidden" id="about">
<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-stone-900/50 to-transparent z-0 pointer-events-none"></div>
<div className="grid md:grid-cols-2 gap-20 items-center relative z-10">
<div className="space-y-10 reveal">
<span className="text-amber-500/80 text-xs tracking-[0.25em] uppercase border-l border-amber-500/30 pl-4">Naše Filosofie</span>
<h2 className="text-3xl md:text-5xl font-light leading-snug tracking-tight text-stone-200">
                    Tvoříme zážitky přes <br/> <span className="serif text-amber-100/70">dokonalou chuť.</span>
</h2>
<p className="text-stone-400 font-light leading-relaxed max-w-md">
                    Naše pizzerie se zrodila z úcty k tradičnímu italskému řemeslu. Těsto pro vás necháváme pomalu zrát celých 48 hodin a používáme pouze vybrané suroviny z regionu Kampánie. Každá pizza projde výhní naší pece na dřevo při 450°C, což jí vtiskne nezaměnitelný charakter, kouřové aroma a lehkost.
                </p>
<div className="flex gap-12 pt-8 border-t border-stone-800">
<div>
<p className="text-2xl font-serif text-amber-200/80">48h</p>
<p className="text-[10px] uppercase tracking-widest text-stone-500 mt-1">Zrání těsta</p>
</div>
<div>
<p className="text-2xl font-serif text-amber-200/80">450°C</p>
<p className="text-[10px] uppercase tracking-widest text-stone-500 mt-1">Pec na dřevo</p>
</div>
<div>
<p className="text-2xl font-serif text-amber-200/80">100%</p>
<p className="text-[10px] uppercase tracking-widest text-stone-500 mt-1">Autenticita</p>
</div>
</div>
</div>
<div className="relative h-[600px] reveal delay-200 group">
<div className="absolute top-10 right-10 w-64 h-80 bg-stone-900 overflow-hidden shadow-2xl z-20 border border-stone-800 transform group-hover:-translate-y-4 transition-transform duration-1000">
<img alt="Příprava pizzy" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-10 left-10 w-72 h-96 bg-stone-800 overflow-hidden shadow-2xl z-10 border border-stone-700 transform group-hover:translate-y-4 transition-transform duration-1000">
<img alt="Pec na dřevo" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-700" src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-amber-900/20 mix-blend-soft-light pointer-events-none"></div>
</div>
</div>
</section>

<section className="py-32 bg-[#080808] border-y border-stone-900 relative" id="menu">
<div className="container mx-auto px-6 md:px-12">
<div className="flex justify-between items-end mb-20 reveal">
<div>
<h3 className="text-3xl font-light text-stone-100 mb-2">Nabídka Pizz</h3>
<p className="text-stone-500 text-sm font-light">Pečeno na dřevě, inspirováno Neapolí.</p>
</div>
<div className="flex gap-4">
<button className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:border-amber-700 hover:text-amber-200 transition-all">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:border-amber-700 hover:text-amber-200 transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative cursor-pointer reveal delay-100">
<div className="aspect-[4/5] bg-stone-900/30 border border-stone-800/50 relative overflow-hidden transition-all duration-700 hover:border-amber-900/50">
<img alt="Margherita" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms] brightness-[0.7] group-hover:brightness-[0.9]" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-end">
<span className="serif text-xl text-stone-100">Margherita</span>
<span className="text-amber-400 font-serif whitespace-nowrap ml-2 text-lg">180 Kč</span>
</div>
<span className="text-xs text-stone-400 font-light leading-relaxed border-t border-stone-800/80 pt-2">Rajčatový základ San Marzano, fior di latte, čerstvá bazalka, extra panenský olivový olej.</span>
</div>
</div>
</div>

<div className="group relative cursor-pointer reveal delay-150">
<div className="aspect-[4/5] bg-stone-900/30 border border-stone-800/50 relative overflow-hidden transition-all duration-700 hover:border-amber-900/50">
<img alt="Diavola" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms] brightness-[0.7] group-hover:brightness-[0.9]" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-end">
<span className="serif text-xl text-stone-100">Diavola</span>
<span className="text-amber-400 font-serif whitespace-nowrap ml-2 text-lg">210 Kč</span>
</div>
<span className="text-xs text-stone-400 font-light leading-relaxed border-t border-stone-800/80 pt-2">Rajčatový základ, mozzarella, pikantní italský salám Spianata, chilli papričky.</span>
</div>
</div>
</div>

<div className="group relative cursor-pointer reveal delay-200">
<div className="aspect-[4/5] bg-stone-900/30 border border-stone-800/50 relative overflow-hidden transition-all duration-700 hover:border-amber-900/50">
<img alt="Quattro Formaggi" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms] brightness-[0.7] group-hover:brightness-[0.9]" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-end">
<span className="serif text-xl text-stone-100">4 Formaggi</span>
<span className="text-amber-400 font-serif whitespace-nowrap ml-2 text-lg">230 Kč</span>
</div>
<span className="text-xs text-stone-400 font-light leading-relaxed border-t border-stone-800/80 pt-2">Smetanový základ, mozzarella, gorgonzola, ementál, sýr grana padano.</span>
</div>
</div>
</div>

<div className="group relative cursor-pointer reveal delay-250">
<div className="aspect-[4/5] bg-stone-900/30 border border-stone-800/50 relative overflow-hidden transition-all duration-700 hover:border-amber-900/50">
<img alt="Prosciutto e Funghi" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms] brightness-[0.7] group-hover:brightness-[0.9]" src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-end">
<span className="serif text-xl text-stone-100">Prosciutto</span>
<span className="text-amber-400 font-serif whitespace-nowrap ml-2 text-lg">220 Kč</span>
</div>
<span className="text-xs text-stone-400 font-light leading-relaxed border-t border-stone-800/80 pt-2">Rajčatový základ, mozzarella, kvalitní italská dušená šunka, čerstvé žampiony.</span>
</div>
</div>
</div>

<div className="group relative cursor-pointer reveal delay-100">
<div className="aspect-[4/5] bg-stone-900/30 border border-stone-800/50 relative overflow-hidden transition-all duration-700 hover:border-amber-900/50">
<img alt="Bufalina" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms] brightness-[0.7] group-hover:brightness-[0.9]" src="https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-end">
<span className="serif text-xl text-stone-100">Bufalina</span>
<span className="text-amber-400 font-serif whitespace-nowrap ml-2 text-lg">250 Kč</span>
</div>
<span className="text-xs text-stone-400 font-light leading-relaxed border-t border-stone-800/80 pt-2">Rajčatový základ, pravá bůvolí mozzarella (Mozzarella di Bufala DOP), bazalka.</span>
</div>
</div>
</div>

<div className="group relative cursor-pointer reveal delay-150">
<div className="aspect-[4/5] bg-stone-900/30 border border-stone-800/50 relative overflow-hidden transition-all duration-700 hover:border-amber-900/50">
<img alt="Vegetariana" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms] brightness-[0.7] group-hover:brightness-[0.9]" src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-end">
<span className="serif text-xl text-stone-100">Vegetariana</span>
<span className="text-amber-400 font-serif whitespace-nowrap ml-2 text-lg">200 Kč</span>
</div>
<span className="text-xs text-stone-400 font-light leading-relaxed border-t border-stone-800/80 pt-2">Rajčatový základ, mozzarella, lilek, cuketa, paprika, červená cibule, olivy.</span>
</div>
</div>
</div>

<div className="group relative cursor-pointer reveal delay-200">
<div className="aspect-[4/5] bg-stone-900/30 border border-stone-800/50 relative overflow-hidden transition-all duration-700 hover:border-amber-900/50">
<img alt="Capricciosa" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms] brightness-[0.7] group-hover:brightness-[0.9]" src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-end">
<span className="serif text-xl text-stone-100">Capricciosa</span>
<span className="text-amber-400 font-serif whitespace-nowrap ml-2 text-lg">240 Kč</span>
</div>
<span className="text-xs text-stone-400 font-light leading-relaxed border-t border-stone-800/80 pt-2">Rajčatový základ, mozzarella, šunka, žampiony, nakládané artyčoky, černé olivy.</span>
</div>
</div>
</div>

<div className="group relative cursor-pointer reveal delay-250">
<div className="aspect-[4/5] bg-stone-900/30 border border-stone-800/50 relative overflow-hidden transition-all duration-700 hover:border-amber-900/50">
<img alt="Salami" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms] brightness-[0.7] group-hover:brightness-[0.9]" src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-end">
<span className="serif text-xl text-stone-100">Salami Napoli</span>
<span className="text-amber-400 font-serif whitespace-nowrap ml-2 text-lg">210 Kč</span>
</div>
<span className="text-xs text-stone-400 font-light leading-relaxed border-t border-stone-800/80 pt-2">Rajčatový základ, mozzarella, jemný italský salám Napoli, oregano.</span>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-amber-100 transition-colors border-b border-transparent hover:border-amber-100 pb-1" href="#sides">
                    Pokračovat na Saláty &amp; Nápoje
                </a>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-0" id="sides">
<div className="flex flex-col items-center mb-16 reveal">
<span className="text-amber-500/80 text-xs tracking-[0.25em] uppercase mb-4">Předkrmy &amp; Osvěžení</span>
<h3 className="text-3xl md:text-5xl serif text-center text-stone-200 font-light">Doplňkový Sortiment</h3>
</div>

<div className="space-y-32">

<div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden reveal">
<img className="absolute inset-0 w-full h-full object-cover brightness-[0.3] hover:brightness-[0.4] transition-all duration-[2000ms] scale-105 hover:scale-100" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
<div className="absolute bottom-10 left-6 md:left-20 max-w-md glass-panel p-8 md:p-12 rounded-sm w-full md:w-auto">
<h4 className="text-3xl serif text-stone-100 mb-6">Čerstvé Saláty</h4>
<div className="space-y-5">
<div className="flex justify-between items-end border-b border-stone-700/50 pb-2">
<div>
<span className="block text-stone-200 font-serif text-lg">Insalata Caprese</span>
<span className="block text-stone-400 text-xs mt-1">Rajčata, mozzarella di bufala, bazalka, balsamico</span>
</div>
<span className="text-amber-400 font-serif">160 Kč</span>
</div>
<div className="flex justify-between items-end border-b border-stone-700/50 pb-2">
<div>
<span className="block text-stone-200 font-serif text-lg">Caesar Salát</span>
<span className="block text-stone-400 text-xs mt-1">Římský salát, kuřecí maso, krutony, parmazán, dresink</span>
</div>
<span className="text-amber-400 font-serif">190 Kč</span>
</div>
<div className="flex justify-between items-end border-b border-stone-700/50 pb-2">
<div>
<span className="block text-stone-200 font-serif text-lg">Míchaný salát</span>
<span className="block text-stone-400 text-xs mt-1">Sezónní zelenina, olivy, domácí vinaigrette</span>
</div>
<span className="text-amber-400 font-serif">120 Kč</span>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-0 h-auto md:h-[80vh] reveal">
<div className="relative h-[50vh] md:h-full bg-stone-900 overflow-hidden group">
<img className="w-full h-full object-cover brightness-[0.5] group-hover:scale-105 transition-transform duration-[2000ms]" src="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-[#0f0f0f] flex items-center justify-center p-12 md:p-24 relative">
<div className="absolute top-10 left-10">
<iconify-icon className="text-stone-600" icon="solar:wineglass-linear" width="30"></iconify-icon>
</div>
<div className="w-full max-w-md">
<span className="text-xs text-amber-600 tracking-widest uppercase block mb-4">Z naší vinotéky &amp; baru</span>
<h4 className="text-3xl serif text-stone-100 mb-8 leading-tight">Nápoje &amp; Vína</h4>
<div className="space-y-6">
<div className="flex justify-between items-center">
<span className="text-stone-300 font-light">Domácí limonáda (Citron / Malina) 0.5l</span>
<span className="text-amber-400 font-serif">85 Kč</span>
</div>
<div className="flex justify-between items-center">
<span className="text-stone-300 font-light">San Pellegrino / Acqua Panna 0.75l</span>
<span className="text-amber-400 font-serif">95 Kč</span>
</div>
<div className="flex justify-between items-center">
<span className="text-stone-300 font-light">Točené pivo Birra Moretti 0.4l</span>
<span className="text-amber-400 font-serif">75 Kč</span>
</div>
<div className="flex justify-between items-center">
<span className="text-stone-300 font-light">Aperol Spritz</span>
<span className="text-amber-400 font-serif">135 Kč</span>
</div>
<div className="flex justify-between items-center">
<span className="text-stone-300 font-light">Rozlévané italské víno (Bílé / Červené) 0.15l</span>
<span className="text-amber-400 font-serif">110 Kč</span>
</div>
<div className="flex justify-between items-center">
<span className="text-stone-300 font-light">Espresso / Macchiato</span>
<span className="text-amber-400 font-serif">55 Kč</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-stone-950 overflow-hidden" id="contact">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-900/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="container mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-start relative z-10">
<div className="reveal">
<h2 className="text-4xl md:text-6xl serif text-stone-100 mb-6">Navštivte Nás</h2>
<p className="text-stone-400 font-light leading-relaxed text-lg mb-10 max-w-lg">
                    Rádi vás uvítáme v našem podniku, kde to voní dřevem a čerstvou bazalkou. Přijďte posedět, nebo si objednejte pizzu s sebou.
                </p>
<div className="w-16 h-[1px] bg-amber-700/50 mb-10"></div>
<div className="space-y-8 text-stone-300 font-light">
<div className="flex items-start gap-5 group">
<div className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center shrink-0 group-hover:border-amber-500 transition-colors">
<iconify-icon className="text-amber-500" icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-[10px] uppercase tracking-widest text-stone-500 mb-1">Rezervace a Objednávky</span>
<a className="text-lg hover:text-amber-200 transition-colors" href="tel:+420123456789">+420 123 456 789</a>
</div>
</div>
<div className="flex items-start gap-5 group">
<div className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center shrink-0 group-hover:border-amber-500 transition-colors">
<iconify-icon className="text-amber-500" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-[10px] uppercase tracking-widest text-stone-500 mb-1">E-mail</span>
<a className="text-lg hover:text-amber-200 transition-colors" href="mailto:info@pizzerialarte.cz">info@pizzerialarte.cz</a>
</div>
</div>
<div className="flex items-start gap-5 group">
<div className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center shrink-0 group-hover:border-amber-500 transition-colors">
<iconify-icon className="text-amber-500" icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-[10px] uppercase tracking-widest text-stone-500 mb-1">Otevírací doba</span>
<p className="text-lg">Pondělí - Neděle<br/><span className="text-stone-400">11:00 - 22:00</span></p>
</div>
</div>
</div>
</div>

<div className="bg-stone-900/40 p-8 md:p-10 border border-stone-800 rounded-sm backdrop-blur-sm reveal delay-200 shadow-2xl">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-xl serif text-stone-200">Kde nás najdete</h3>
<p className="text-sm text-stone-400 font-light mt-1">Italská 15, Praha 2, 120 00</p>
</div>
<iconify-icon className="text-amber-500" icon="solar:map-point-linear" width="28"></iconify-icon>
</div>

<a className="block relative w-full h-64 border border-stone-700 overflow-hidden group rounded-sm" href="https://maps.google.com/?q=Italská+15,+Praha" target="_blank">
<img alt="Mapa" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 filter sepia-[0.3] hue-rotate-[10deg]" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-full bg-stone-900/90 backdrop-blur-md border border-amber-500/50 flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:bg-amber-900/80 transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
<iconify-icon icon="solar:routing-2-linear" width="26"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 flex justify-center">
<span className="bg-black/80 px-4 py-2 text-[10px] uppercase tracking-widest text-stone-300 border border-stone-700/50 backdrop-blur-sm group-hover:border-amber-700/50 transition-colors">
                            Otevřít v Google Maps
                        </span>
</div>
</a>
</div>
</div>
</section>

<footer className="bg-black pt-24 pb-12 px-6 md:px-12 border-t border-stone-900">
<div className="container mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-amber-700" icon="solar:fire-square-linear" width="20"></iconify-icon>
<span className="serif tracking-[0.2em] text-sm text-stone-300">L'ARTE PIZZERIA</span>
</div>
<p className="text-stone-600 text-sm font-light leading-relaxed">
                        Umění pravé italské pizzy, pečeno s vášní na dubovém dřevě v srdci města.
                    </p>
</div>
<div className="space-y-4">
<h5 className="text-stone-200 text-xs uppercase tracking-widest mb-4">Nabídka</h5>
<a className="block text-stone-500 text-sm font-light hover:text-amber-200 transition-colors" href="#menu">Naše Pizzy</a>
<a className="block text-stone-500 text-sm font-light hover:text-amber-200 transition-colors" href="#sides">Saláty</a>
<a className="block text-stone-500 text-sm font-light hover:text-amber-200 transition-colors" href="#sides">Nápoje &amp; Vína</a>
</div>
<div className="space-y-4">
<h5 className="text-stone-200 text-xs uppercase tracking-widest mb-4">Pizzerie</h5>
<a className="block text-stone-500 text-sm font-light hover:text-amber-200 transition-colors" href="#about">Příběh a Filosofie</a>
<a className="block text-stone-500 text-sm font-light hover:text-amber-200 transition-colors" href="#contact">Kontakt a Mapa</a>
<a className="block text-stone-500 text-sm font-light hover:text-amber-200 transition-colors" href="tel:+420123456789">Objednávky s sebou</a>
</div>
<div className="space-y-4">
<h5 className="text-stone-200 text-xs uppercase tracking-widest mb-4">Sledujte Nás</h5>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-500 hover:text-amber-200 hover:border-amber-800 transition-all" href="#"><iconify-icon icon="solar:camera-linear"></iconify-icon></a>
<a className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-500 hover:text-amber-200 hover:border-amber-800 transition-all" href="#"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-900">
<p className="text-stone-700 text-[10px] tracking-widest uppercase mb-4 md:mb-0">© 2024 Pizzeria L'Arte. Všechna práva vyhrazena.</p>
</div>
<div className="mt-12 text-center">
<p className="serif italic text-stone-800 text-2xl md:text-4xl opacity-30 select-none">"In crust we trust."</p>
</div>
</div>
</footer>


    </>
  );
}
