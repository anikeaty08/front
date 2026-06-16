import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
'uslu-bg': '#F4F4F2',
'uslu-black': '#1A1A1A',
'uslu-gray': '#808080',
'uslu-line': '#E0E0DE'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
letterSpacing: {
tightest: '-0.05em',
widest: '0.2em',
}
}
}
}



        // 1. Reveal on Scroll (IntersectionObserver)
        const observerOptions = {
            root: null,
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('is-hidden');
                    // Stop observing after reveal for better performance
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.clip-text-reveal, .fade-in-up').forEach((el) => {
            observer.observe(el);
        });

        // 2. Mobile Menu Toggle
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            const isOpen = menu.classList.contains('translate-x-0');
            
            if (isOpen) {
                menu.classList.remove('translate-x-0');
                menu.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
            } else {
                menu.classList.remove('translate-x-full');
                menu.classList.add('translate-x-0');
                document.body.style.overflow = 'hidden';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 bg-uslu-bg/90 backdrop-blur-md border-b border-grid">
<div className="w-full flex justify-between items-stretch h-20">

<div className="flex items-center px-6 md:px-12 border-r border-grid w-auto md:w-1/4">
<a className="text-2xl font-bold tracking-tighter text-uslu-black flex items-center gap-2" href="#">
                    USLU<span className="w-1.5 h-1.5 bg-uslu-black rounded-full mt-1"></span>
</a>
</div>

<div className="hidden md:flex items-center justify-center space-x-12 flex-1 border-r border-grid">
<a className="text-[11px] font-mono uppercase tracking-widest text-uslu-black/60 hover:text-uslu-black transition-colors" href="#projects">Projekte</a>
<a className="text-[11px] font-mono uppercase tracking-widest text-uslu-black/60 hover:text-uslu-black transition-colors" href="#expertise">Expertise</a>
<a className="text-[11px] font-mono uppercase tracking-widest text-uslu-black/60 hover:text-uslu-black transition-colors" href="#unternehmen">Unternehmen</a>
<a className="text-[11px] font-mono uppercase tracking-widest text-uslu-black/60 hover:text-uslu-black transition-colors" href="#contact">Kontakt</a>
</div>

<div className="flex items-center justify-end w-auto md:w-1/4">
<a className="hidden md:flex h-full items-center justify-center w-full bg-uslu-black text-white text-[11px] font-mono uppercase tracking-widest hover:bg-neutral-800 transition-colors" href="#contact">
                    Anfrage Senden
                    <iconify-icon className="ml-2 text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>

<button className="md:hidden px-6 h-full flex items-center border-l border-grid" onclick="toggleMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-uslu-bg z-40 transform translate-x-full pt-24 px-6 flex flex-col" id="mobile-menu">
<div className="space-y-8 mt-12">
<a className="block text-4xl font-light tracking-tight text-uslu-black" href="#projects" onclick="toggleMenu()">Projekte</a>
<a className="block text-4xl font-light tracking-tight text-uslu-black" href="#expertise" onclick="toggleMenu()">Expertise</a>
<a className="block text-4xl font-light tracking-tight text-uslu-black" href="#unternehmen" onclick="toggleMenu()">Unternehmen</a>
<a className="block text-4xl font-light tracking-tight text-uslu-black" href="#contact" onclick="toggleMenu()">Kontakt</a>
</div>
<div className="mt-auto pb-12">
<a className="block w-full py-4 text-center border border-uslu-black text-uslu-black font-mono uppercase text-xs tracking-widest" href="#contact" onclick="toggleMenu()">Anfrage Senden</a>
</div>
</div>

<section className="relative w-full min-h-screen pt-20 border-b border-grid">
<div className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-5rem)]">

<div className="relative flex flex-col justify-between p-6 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-grid">

<div className="flex justify-between items-start opacity-0 animate-fade-in" style={{animationFillMode: 'forwards', animationDelay: '0.2s'}}>
<div className="space-y-1">
<span className="block text-[10px] font-mono uppercase tracking-widest text-uslu-gray">Est. 1996</span>
<span className="block text-[10px] font-mono uppercase tracking-widest text-uslu-gray">GER / TUR</span>
</div>
<iconify-icon className="text-uslu-black" icon="solar:compass-linear" width="24"></iconify-icon>
</div>

<div className="py-12 lg:py-0 z-10">
<h1 className="text-6xl md:text-8xl xl:text-9xl font-semibold tracking-tighter text-uslu-black leading-[0.85]">
<div className="overflow-hidden"><span className="block clip-text-reveal is-hidden">WERTE</span></div>
<div className="overflow-hidden"><span className="block clip-text-reveal is-hidden pl-12 md:pl-24">SCHAFFEN.</span></div>
<div className="overflow-hidden"><span className="block clip-text-reveal is-hidden text-uslu-gray font-light">SEIT 1996.</span></div>
</h1>
</div>

<div className="space-y-6">
<p className="text-lg md:text-xl font-light text-uslu-black max-w-md fade-in-up is-hidden">
                        Projektentwicklung &amp; Immobilienmanagement.<br/>
                        Spezialisiert auf High-End Assets in Ulm &amp; Izmir.
                    </p>
<div className="flex gap-8 pt-4 border-t border-grid w-full fade-in-up is-hidden">
<div>
<span className="block text-2xl font-light">25+</span>
<span className="text-[10px] font-mono uppercase text-uslu-gray tracking-widest">Jahre Erfahrung</span>
</div>
<div>
<span className="block text-2xl font-light">Intl.</span>
<span className="text-[10px] font-mono uppercase text-uslu-gray tracking-widest">Kompetenz</span>
</div>
</div>
</div>
</div>

<div className="relative w-full h-full overflow-hidden group">
<img alt="Architecture" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 md:p-12 w-full bg-gradient-to-t from-black/50 to-transparent">
<div className="flex items-center gap-4 text-white">
<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
<span className="text-[10px] font-mono uppercase tracking-widest">Current Project: Skyline One</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-grid" id="unternehmen">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[80vh]">

<div className="col-span-1 md:col-span-3 border-b md:border-b-0 md:border-r border-grid p-6 md:p-8 bg-uslu-bg md:sticky md:top-20 md:h-[calc(100vh-5rem)] z-10">
<span className="inline-block px-2 py-1 border border-uslu-black rounded-full text-[10px] font-mono text-uslu-black uppercase tracking-widest mb-4">
                    01 • Unternehmen
                </span>
<h2 className="text-3xl font-medium tracking-tight mt-2">LEGACY</h2>
</div>

<div className="col-span-1 md:col-span-9 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-grid">

<div className="p-8 md:p-16 flex flex-col justify-between hover:bg-white transition-colors duration-500">
<div className="fade-in-up is-hidden">
<iconify-icon className="mb-8 text-uslu-gray" icon="solar:history-linear" width="32"></iconify-icon>
<h3 className="text-xl font-mono uppercase tracking-widest text-uslu-black mb-6">Die Historie</h3>
<p className="text-sm leading-relaxed text-neutral-600 mb-8 font-light">
                            Gegründet im Jahr 1996, begann USLU als Vision, die Präzision deutscher Ingenieurskunst mit der Dynamik internationaler Märkte zu verbinden. Was als lokales Planungsbüro startete, ist heute ein grenzüberschreitender Akteur mit festen Standorten in Deutschland und der Türkei.
                        </p>
<ul className="space-y-4 text-xs font-mono uppercase tracking-widest text-uslu-black border-t border-grid pt-8">
<li className="flex justify-between">
<span>Gründung</span>
<span>1996</span>
</li>
<li className="flex justify-between">
<span>Headquarters</span>
<span>Ulm, DE</span>
</li>
<li className="flex justify-between">
<span>Expansion</span>
<span>Izmir, TR</span>
</li>
</ul>
</div>
</div>

<div className="p-8 md:p-16 flex flex-col justify-between hover:bg-white transition-colors duration-500">
<div className="fade-in-up is-hidden" style={{transitionDelay: '0.1s'}}>
<iconify-icon className="mb-8 text-uslu-gray" icon="solar:star-linear" width="32"></iconify-icon>
<h3 className="text-xl font-mono uppercase tracking-widest text-uslu-black mb-6">Die Philosophie</h3>
<p className="text-lg leading-relaxed text-uslu-black mb-8">
                            "Wir entwickeln nicht nur Gebäude, wir kuratieren Lebensräume."
                        </p>
<p className="text-sm leading-relaxed text-neutral-600 mb-8 font-light">
                            Unsere Architektur ist zeitlos, unsere Bauqualität kompromisslos. Wir glauben an nachhaltige Werte, die Generationen überdauern. Jedes Projekt wird mit derselben Sorgfalt behandelt, als würden wir selbst einziehen.
                        </p>
<div className="mt-auto pt-8 border-t border-grid">
<img alt="Detail" className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1506192131902-555df0274d25?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-grid bg-white" id="expertise">
<div className="grid grid-cols-1 md:grid-cols-12">

<div className="col-span-1 md:col-span-3 border-b md:border-b-0 md:border-r border-grid p-6 md:p-8 bg-uslu-bg md:sticky md:top-20 md:h-[calc(100vh-5rem)] z-10">
<span className="inline-block px-2 py-1 border border-uslu-black rounded-full text-[10px] font-mono text-uslu-black uppercase tracking-widest mb-4">
                    02 • Expertise
                </span>
<h2 className="text-3xl font-medium tracking-tight mt-2">LEISTUNGEN</h2>
</div>

<div className="col-span-1 md:col-span-9">

<div className="group border-b border-grid p-8 md:p-12 hover:bg-uslu-bg transition-colors duration-300">
<div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
<span className="text-xs font-mono text-uslu-gray">01</span>
<div className="flex-1">
<h3 className="text-4xl md:text-5xl font-light tracking-tight text-uslu-black mb-4">PROJEKTENTWICKLUNG</h3>
<p className="max-w-xl text-neutral-500 font-light text-sm md:text-base">
                                Von der Grundstücksakquise bis zur Baugenehmigung. Wir schaffen Baurecht und konzipieren Nutzungskonzepte, die sich in den städtischen Kontext einfügen.
                            </p>
</div>
<iconify-icon className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group border-b border-grid p-8 md:p-12 hover:bg-uslu-bg transition-colors duration-300">
<div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
<span className="text-xs font-mono text-uslu-gray">02</span>
<div className="flex-1">
<h3 className="text-4xl md:text-5xl font-light tracking-tight text-uslu-black mb-4">ASSET MANAGEMENT</h3>
<p className="max-w-xl text-neutral-500 font-light text-sm md:text-base">
                                Aktive Wertsteigerung durch strategische Bewirtschaftung. Wir optimieren Mietverträge, senken Betriebskosten und koordinieren Sanierungsmaßnahmen.
                            </p>
</div>
<iconify-icon className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group p-8 md:p-12 hover:bg-uslu-bg transition-colors duration-300">
<div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
<span className="text-xs font-mono text-uslu-gray">03</span>
<div className="flex-1">
<h3 className="text-4xl md:text-5xl font-light tracking-tight text-uslu-black mb-4">GENERALPLANUNG</h3>
<p className="max-w-xl text-neutral-500 font-light text-sm md:text-base">
                                Alles aus einer Hand. Als Generalübernehmer koordinieren wir Architekten, Ingenieure und Fachplaner für einen reibungslosen Bauablauf.
                            </p>
</div>
<iconify-icon className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-grid bg-uslu-bg" id="projects">
<div className="w-full px-6 md:px-12 py-24 border-b border-grid flex flex-col md:flex-row justify-between items-end">
<div>
<span className="text-[10px] font-mono uppercase tracking-widest text-uslu-gray mb-4 block">Portfolio</span>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-uslu-black">AUSGEWÄHLTE<br/>OBJEKTE</h2>
</div>
<a className="mt-8 md:mt-0 px-6 py-3 border border-uslu-black rounded-full text-xs font-mono uppercase tracking-widest hover:bg-uslu-black hover:text-white transition-all" href="#">
                Alle Projekte ansehen
            </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<div className="group relative border-b lg:border-b-0 lg:border-r border-grid aspect-[3/4] overflow-hidden cursor-pointer">
<img alt="Luxury Home" className="w-full h-full object-cover zoom-image" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[10px] font-mono uppercase tracking-widest text-white/80 mb-2 block">Ulm, Mitte</span>
<h3 className="text-3xl font-light text-white tracking-tight mb-4">STADTHAUS Q4</h3>
<div className="w-full h-[1px] bg-white/30 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
<div className="pt-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<span className="text-white text-xs font-mono">Wohnen</span>
<span className="text-white text-xs font-mono">2023</span>
</div>
</div>
</div>

<div className="group relative border-b md:border-b-0 lg:border-r border-grid aspect-[3/4] overflow-hidden cursor-pointer">
<img alt="Office" className="w-full h-full object-cover zoom-image" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[10px] font-mono uppercase tracking-widest text-white/80 mb-2 block">Izmir, Bayraklı</span>
<h3 className="text-3xl font-light text-white tracking-tight mb-4">TOWER ONE</h3>
<div className="w-full h-[1px] bg-white/30 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
<div className="pt-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<span className="text-white text-xs font-mono">Gewerbe</span>
<span className="text-white text-xs font-mono">In Planung</span>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
<img alt="Residential" className="w-full h-full object-cover zoom-image" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[10px] font-mono uppercase tracking-widest text-white/80 mb-2 block">Neu-Ulm</span>
<h3 className="text-3xl font-light text-white tracking-tight mb-4">RIVER LOFTS</h3>
<div className="w-full h-[1px] bg-white/30 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
<div className="pt-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<span className="text-white text-xs font-mono">Mixed Use</span>
<span className="text-white text-xs font-mono">2022</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-uslu-black text-white pt-24 pb-8" id="contact">
<div className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-24 border-b border-white/10">

<div className="col-span-1 md:col-span-2 lg:col-span-4">
<h2 className="text-5xl font-bold tracking-tighter mb-8">USLU.</h2>
<p className="text-neutral-400 font-light max-w-sm leading-relaxed">
                    Wir schaffen bleibende Werte durch visionäre Architektur und präzises Management.
                </p>
</div>

<div className="col-span-1 lg:col-span-3">
<h4 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-6">Deutschland</h4>
<address className="not-italic text-sm font-light text-neutral-300 space-y-2">
<p>USLU Immobilien GmbH</p>
<p>Münsterplatz 12</p>
<p>89073 Ulm</p>
</address>
<a className="inline-block mt-4 text-xs font-mono uppercase hover:text-white transition-colors" href="mailto:ulm@uslu.com">ulm@uslu.com</a>
</div>

<div className="col-span-1 lg:col-span-3">
<h4 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-6">Türkei</h4>
<address className="not-italic text-sm font-light text-neutral-300 space-y-2">
<p>USLU Yapi A.Ş.</p>
<p>Adalet Mah. Manas Blv.</p>
<p>35530 Izmir</p>
</address>
<a className="inline-block mt-4 text-xs font-mono uppercase hover:text-white transition-colors" href="mailto:izmir@uslu.com">izmir@uslu.com</a>
</div>

<div className="col-span-1 lg:col-span-2 flex flex-col items-start lg:items-end">
<h4 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-6">Social</h4>
<div className="flex gap-4">
<a className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors" href="#">
<iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon>
</a>
<a className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="px-6 md:px-12 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest text-neutral-500">
<div className="flex gap-6 mb-4 md:mb-0">
<a className="hover:text-white" href="#">Impressum</a>
<a className="hover:text-white" href="#">Datenschutz</a>
</div>
<span>© 2024 USLU Immobilien. All Rights Reserved.</span>
</div>
</footer>



    </>
  );
}
