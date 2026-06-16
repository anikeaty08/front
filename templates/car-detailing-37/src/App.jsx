import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Header Scroll Effect
        const header = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('py-2', 'max-w-4xl');
                header.classList.remove('py-3', 'max-w-6xl');
            } else {
                header.classList.add('py-3', 'max-w-6xl');
                header.classList.remove('py-2', 'max-w-4xl');
            }
        });

        // Mobile Menu
        const menuBtn = document.getElementById('menu-btn');
        const closeMenu = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            mobileMenu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeMenu.addEventListener('click', toggleMenu);
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 100;
            
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
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-6 right-6 z-50 md:hidden flex flex-col gap-3">
<a className="bg-[#25D366] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-green-900/20 active:scale-95 transition-transform" href="https://wa.me/">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<a className="bg-[#E10600] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-red-900/20 active:scale-95 transition-transform" href="tel:+420123456789">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</div>

<div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
<header className="glass-nav w-full rounded-full px-6 flex items-center justify-between transition-all duration-300" id="main-header">

<a className="text-white font-medium text-lg tracking-tight hover:opacity-80 transition-opacity flex items-center gap-2" href="#">
<span className="tracking-[0.2em] font-bold">CLEANEST</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#sluzby">Služby</a>
<a className="hover:text-white transition-colors" href="#galerie">Galerie</a>
<a className="hover:text-white transition-colors" href="#cenik">Ceník</a>
<a className="hover:text-white transition-colors" href="#recenze">Recenze</a>
<a className="text-[#E10600] hover:text-red-400 transition-colors flex items-center gap-1" href="#">
                    E-shop
                    <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-semibold text-white bg-white/10 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300" href="#kontakt">
                    Nezávazná poptávka
                </a>
<button className="md:hidden text-white focus:outline-none" id="menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>
</div>

<div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transform translate-x-full transition-transform duration-300 flex flex-col items-center justify-center space-y-8" id="mobile-menu">
<button className="absolute top-8 right-8 text-white" id="close-menu">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<a className="text-2xl text-white font-light mobile-link" href="#sluzby">Služby</a>
<a className="text-2xl text-white font-light mobile-link" href="#galerie">Galerie</a>
<a className="text-2xl text-white font-light mobile-link" href="#cenik">Ceník</a>
<a className="text-2xl text-[#E10600] font-medium mobile-link" href="#kontakt">Kontaktovat</a>
<a className="text-xl text-neutral-400 font-light mobile-link" href="#">E-shop (Brzy)</a>
</div>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0">
<img alt="Luxury Car Detailing" className="w-full h-full object-cover opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5049a53-5614-494c-99e8-ba3e569e9cc1_800w.jpg"/>
<div className="bg-gradient-to-b from-[#050505]/80 via-[#050505]/30 to-[#050505] absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="relative z-10 max-w-6xl mx-auto px-6 text-center mt-10">

<div className="flex flex-wrap justify-center gap-3 mb-8 reveal active">
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 backdrop-blur-sm">Ochrana laku</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 backdrop-blur-sm">Precizní ruční práce</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 backdrop-blur-sm">Prémiové materiály</span>
</div>

<h1 className="md:text-6xl lg:text-7xl leading-[1.1] reveal delay-100 active text-4xl font-semibold text-white tracking-tight mb-6">
    Prémiový detailing,<br/>který chrání i zvedá hodnotu.
  </h1>
<p className="md:text-xl reveal delay-200 active text-lg font-light text-neutral-400 tracking-wide mb-10"> PPF fólie
    <span className="text-white/20 mr-2 ml-2">|</span> Leštění &amp; keramika <span className="mx-2 text-white/20">|</span>
    Čištění interiéru</p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal delay-300 active">
<a className="w-full sm:w-auto px-8 py-3.5 bg-[#E10600] text-white text-sm font-semibold rounded-full hover:bg-[#c00500] transition-colors shadow-[0_0_20px_rgba(225,6,0,0.3)]" href="#kontakt">
      Chci termín
    </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white/5 text-white border border-white/10 text-sm font-medium rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm" href="#sluzby">
      Zobrazit služby
    </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<iconify-icon className="text-white" icon="solar:mouse-minimalistic-linear" width="28"></iconify-icon>
</div>
</section>

<section className="py-24 px-6 relative" id="sluzby">
<div className="max-w-6xl mx-auto">
<div className="mb-16 reveal">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Naše služby</h2>
<div className="h-0.5 w-12 bg-[#E10600]"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-neutral-900/40 border border-white/5 rounded-2xl p-8 hover:border-white/20 hover:-translate-y-1 transition-all duration-500 reveal delay-100">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:text-[#E10600] transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">PPF Ochranné fólie</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                            Maximální ochrana laku před kamínky, škrábanci a UV zářením. Neviditelný štít se samo-regenerační schopností.
                        </p>
<ul className="space-y-2 mb-8 text-sm text-neutral-300">
<li className="flex items-center gap-2"><iconify-icon className="text-[#E10600]" icon="solar:check-circle-linear"></iconify-icon> Životnost až 10 let</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#E10600]" icon="solar:check-circle-linear"></iconify-icon> Hydrofobní efekt</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#E10600]" icon="solar:check-circle-linear"></iconify-icon> Záruka na instalaci</li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-white group-hover:text-[#E10600] transition-colors" href="#kontakt">
                            Zjistit víc <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative bg-neutral-900/40 border border-white/5 rounded-2xl p-8 hover:border-white/20 hover:-translate-y-1 transition-all duration-500 reveal delay-200">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:text-[#E10600] transition-colors">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Leštění &amp; Keramika</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                            Obnovení hloubky a lesku laku. Vícestupňové leštění odstraní defekty, keramika zajistí dlouhodobou konzervaci.
                        </p>
<ul className="space-y-2 mb-8 text-sm text-neutral-300">
<li className="flex items-center gap-2"><iconify-icon className="text-[#E10600]" icon="solar:check-circle-linear"></iconify-icon> Odstranění "sluníček"</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#E10600]" icon="solar:check-circle-linear"></iconify-icon> Extrémní lesk</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#E10600]" icon="solar:check-circle-linear"></iconify-icon> Chemická dekontaminace</li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-white group-hover:text-[#E10600] transition-colors" href="#kontakt">
                            Zjistit víc <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative bg-neutral-900/40 border border-white/5 rounded-2xl p-8 hover:border-white/20 hover:-translate-y-1 transition-all duration-500 reveal delay-300">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:text-[#E10600] transition-colors">
<iconify-icon icon="solar:armchair-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Interiér &amp; Exteriér</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                            Hloubkové čištění kůže, tepování textilií a detailní mytí exteriéru. Vracíme vozu pocit novoty a vůni čistoty.
                        </p>
<ul className="space-y-2 mb-8 text-sm text-neutral-300">
<li className="flex items-center gap-2"><iconify-icon className="text-[#E10600]" icon="solar:check-circle-linear"></iconify-icon> Čištění a impregnace kůže</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#E10600]" icon="solar:check-circle-linear"></iconify-icon> Parní čištění</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#E10600]" icon="solar:check-circle-linear"></iconify-icon> Detailing kol a podběhů</li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-white group-hover:text-[#E10600] transition-colors" href="#kontakt">
                            Zjistit víc <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="reveal">
<iconify-icon className="text-white mb-4" icon="solar:medal-ribbon-linear" width="32"></iconify-icon>
<h4 className="text-white font-medium mb-2">Prémiové produkty</h4>
<p className="text-xs text-neutral-500">Používáme pouze ověřenou kosmetiku světových značek.</p>
</div>
<div className="reveal delay-100">
<iconify-icon className="text-white mb-4" icon="solar:user-hand-up-linear" width="32"></iconify-icon>
<h4 className="text-white font-medium mb-2">Precizní péče</h4>
<p className="text-xs text-neutral-500">Každý detail vozu projde rukama specialistů.</p>
</div>
<div className="reveal delay-200">
<iconify-icon className="text-white mb-4" icon="solar:camera-linear" width="32"></iconify-icon>
<h4 className="text-white font-medium mb-2">Fotodokumentace</h4>
<p className="text-xs text-neutral-500">Získáte detailní report stavu před a po zásahu.</p>
</div>
<div className="reveal delay-300">
<iconify-icon className="text-white mb-4" icon="solar:calendar-mark-linear" width="32"></iconify-icon>
<h4 className="text-white font-medium mb-2">Flexibilita</h4>
<p className="text-xs text-neutral-500">Termíny přizpůsobíme vašim časovým možnostem.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="galerie">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-12 reveal">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Realizace</h2>
<p className="text-neutral-500 text-sm">Ukázky naší nedávné práce</p>
</div>

<div className="flex gap-2 mt-4 md:mt-0 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
<button className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-medium border border-white">Vše</button>
<button className="px-4 py-1.5 rounded-full bg-transparent text-neutral-400 text-xs font-medium border border-white/10 hover:border-white/30 transition-colors">PPF Fólie</button>
<button className="px-4 py-1.5 rounded-full bg-transparent text-neutral-400 text-xs font-medium border border-white/10 hover:border-white/30 transition-colors">Korekce laku</button>
<button className="px-4 py-1.5 rounded-full bg-transparent text-neutral-400 text-xs font-medium border border-white/10 hover:border-white/30 transition-colors">Interiér</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] reveal delay-100">
<div className="col-span-2 row-span-2 relative group overflow-hidden rounded-xl bg-neutral-900 cursor-pointer">
<img alt="Detailing 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs text-white">Porsche 911 / PPF</div>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl bg-neutral-900 cursor-pointer">
<img alt="Detailing 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600712242805-5f78671b24da?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl bg-neutral-900 cursor-pointer">
<img alt="Detailing 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl bg-neutral-900 cursor-pointer">
<img alt="Detailing 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl bg-neutral-900 cursor-pointer">
<img alt="Detailing 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950" id="cenik">
<div className="max-w-6xl mx-auto">
<div className="mb-16 text-center reveal">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Orientační ceník</h2>
<p className="text-neutral-500 text-sm max-w-xl mx-auto">Každé auto je jedinečné. Ceny jsou uvedeny pro vozy střední velikosti. Přesnou kalkulaci připravíme po prohlídce.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border border-white/10 rounded-2xl p-8 flex flex-col hover:border-[#E10600]/50 transition-colors reveal delay-100">
<h3 className="text-lg font-medium text-white mb-2">Interior Care</h3>
<div className="text-3xl font-semibold text-white mb-1">od 2 900 Kč</div>
<div className="text-xs text-neutral-500 mb-6">Dle znečištění</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="text-sm text-neutral-400 flex gap-2"><iconify-icon className="text-neutral-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Vysávání a tepování</li>
<li className="text-sm text-neutral-400 flex gap-2"><iconify-icon className="text-neutral-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Ošetření plastů</li>
<li className="text-sm text-neutral-400 flex gap-2"><iconify-icon className="text-neutral-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Mytí oken</li>
</ul>
<a className="block text-center py-2.5 rounded-lg border border-white/20 text-white text-sm hover:bg-white hover:text-black transition-all" href="#kontakt">Poptat</a>
</div>

<div className="border border-white/10 bg-white/5 rounded-2xl p-8 flex flex-col relative reveal delay-200">
<div className="absolute top-0 right-0 bg-[#E10600] text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-xl">DOPORUČUJEME</div>
<h3 className="text-lg font-medium text-white mb-2">Paint &amp; Ceramic</h3>
<div className="text-3xl font-semibold text-white mb-1">od 8 500 Kč</div>
<div className="text-xs text-neutral-500 mb-6">Dle stavu laku</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="text-sm text-neutral-300 flex gap-2"><iconify-icon className="text-[#E10600] shrink-0" icon="solar:check-circle-linear"></iconify-icon> 1-krokové leštění</li>
<li className="text-sm text-neutral-300 flex gap-2"><iconify-icon className="text-[#E10600] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Keramika na 12 měsíců</li>
<li className="text-sm text-neutral-300 flex gap-2"><iconify-icon className="text-[#E10600] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Detailní mytí kol</li>
</ul>
<a className="block text-center py-2.5 rounded-lg bg-[#E10600] text-white text-sm hover:bg-[#c00500] transition-all shadow-[0_0_15px_rgba(225,6,0,0.2)]" href="#kontakt">Poptat kalkulaci</a>
</div>

<div className="border border-white/10 rounded-2xl p-8 flex flex-col hover:border-[#E10600]/50 transition-colors reveal delay-300">
<h3 className="text-lg font-medium text-white mb-2">Full PPF Front</h3>
<div className="text-3xl font-semibold text-white mb-1">od 35 000 Kč</div>
<div className="text-xs text-neutral-500 mb-6">Dle modelu vozu</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="text-sm text-neutral-400 flex gap-2"><iconify-icon className="text-neutral-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Nárazník, kapota, blatníky</li>
<li className="text-sm text-neutral-400 flex gap-2"><iconify-icon className="text-neutral-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Světlomety a zrcátka</li>
<li className="text-sm text-neutral-400 flex gap-2"><iconify-icon className="text-neutral-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Samoregenerační fólie</li>
</ul>
<a className="block text-center py-2.5 rounded-lg border border-white/20 text-white text-sm hover:bg-white hover:text-black transition-all" href="#kontakt">Poptat</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5" id="recenze">
<div className="max-w-4xl mx-auto text-center reveal">
<h2 className="text-2xl font-medium text-white mb-12">Co říkají naši klienti</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

<div className="p-6 bg-neutral-900/50 rounded-xl">
<div className="flex text-[#E10600] mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm mb-4 leading-relaxed">"Neuvěřitelný rozdíl. Moje 5 let staré BMW vypadá lépe než když vyjelo ze salonu. Přístup Cleanest je opravdu na jiné úrovni."</p>
<p className="text-white font-medium text-xs">— Petr S.</p>
</div>

<div className="p-6 bg-neutral-900/50 rounded-xl">
<div className="flex text-[#E10600] mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm mb-4 leading-relaxed">"PPF fólie na předek auta zachránila lak už první týden. Skvělá domluva a perfektní instalace bez bublin."</p>
<p className="text-white font-medium text-xs">— Martin K.</p>
</div>

<div className="p-6 bg-neutral-900/50 rounded-xl">
<div className="flex text-[#E10600] mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm mb-4 leading-relaxed">"Nechal jsem čistit interiér po dětech a psovi. Výsledek předčil očekávání. Určitě se vrátím i na keramiku."</p>
<p className="text-white font-medium text-xs">— Jana D.</p>
</div>
</div>
<div className="mt-10">
<a className="text-sm text-neutral-400 hover:text-white underline decoration-[#E10600] underline-offset-4 transition-colors" href="#kontakt">Napsat vlastní poptávku</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950" id="kontakt">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">

<div className="reveal">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Váš vůz si zaslouží<br/><span className="text-[#E10600]">to nejlepší.</span></h2>
<p className="text-neutral-500 text-sm mb-10 leading-relaxed">Napište nám nebo zavolejte. Rádi s vámi probereme možnosti ochrany a péče o váš vůz.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-500 mb-1">Telefon</p>
<a className="text-white hover:text-[#E10600] transition-colors font-medium" href="tel:+420123456789">+420 123 456 789</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-500 mb-1">WhatsApp</p>
<a className="text-white hover:text-[#E10600] transition-colors font-medium" href="https://wa.me/">Napsat zprávu</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-500 mb-1">Adresa</p>
<p className="text-white font-medium">U Garáží 123, Praha</p>
<p className="text-neutral-500 text-xs mt-1">Po–Pá: 8:00 – 17:00</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="brandico:instagram" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-500 mb-1">Instagram</p>
<a className="text-white hover:text-[#E10600] transition-colors font-medium" href="https://www.instagram.com/cleanest.cz/" target="_blank">@cleanest.cz</a>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900/30 p-8 rounded-3xl border border-white/5 reveal delay-100">
<form action="#" className="space-y-5">
<div className="space-y-1">
<label className="text-xs text-neutral-500 ml-2">Jméno</label>
<input className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600] transition-all placeholder-neutral-700" placeholder="Jan Novák" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-neutral-500 ml-2">Kontakt (Telefon / Email)</label>
<input className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600] transition-all placeholder-neutral-700" placeholder="+420 ..." type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-neutral-500 ml-2">Služba</label>
<div className="relative">
<select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600] transition-all appearance-none cursor-pointer">
<option>PPF Fólie</option>
<option>Leštění &amp; Keramika</option>
<option>Čištění interiéru</option>
<option>Jiné / Konzultace</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-neutral-500 ml-2">Zpráva</label>
<textarea className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600] transition-all placeholder-neutral-700" placeholder="Model auta, specifikace požadavku..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-semibold py-3.5 rounded-xl hover:bg-neutral-200 transition-colors mt-2" type="submit">
                            Odeslat nezávazně
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="pt-16 pb-8 px-6 bg-black border-t border-white/5 text-center md:text-left">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
<div className="mb-4 md:mb-0">
<span className="tracking-[0.2em] font-bold text-white text-xl block mb-2">CLEANEST</span>
<p className="text-neutral-600 text-xs">Premium Detailing Studio</p>
</div>
<div className="flex gap-8 text-sm text-neutral-500 font-medium">
<a className="hover:text-white transition-colors" href="#sluzby">Služby</a>
<a className="hover:text-white transition-colors" href="#cenik">Ceník</a>
<a className="hover:text-white transition-colors" href="#">Obchodní podmínky</a>
</div>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:facebook" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="https://www.instagram.com/cleanest.cz/">
<iconify-icon icon="brandico:instagram" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-700">
<p>© 2023 CLEANEST. Všechna práva vyhrazena.</p>
<p className="mt-2 md:mt-0">IČO: 12345678 (Placeholder)</p>
</div>
</footer>



    </>
  );
}
