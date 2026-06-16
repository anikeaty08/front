import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
uslu: {
dark: '#121212',
light: '#E5E5E1',
bronze: '#C5A065', // refined bronze
stone: '#1c1c1c',
border: 'rgba(255, 255, 255, 0.1)',
borderDark: 'rgba(18, 18, 18, 0.1)',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Cormorant Garamond', 'serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
widest: '0.15em',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        // Smooth Scroll & Reveal Animation Logic
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: Unobserve if you only want it to animate once
                        // observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-element');
            revealElements.forEach(el => observer.observe(el));

            // Navbar Glass Effect on Scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-uslu-dark/90', 'backdrop-blur-md', 'py-4');
                    navbar.classList.remove('py-6', 'mix-blend-difference');
                    navbar.classList.add('border-b-0', 'shadow-lg');
                } else {
                    navbar.classList.remove('bg-uslu-dark/90', 'backdrop-blur-md', 'py-4', 'border-b-0', 'shadow-lg');
                    navbar.classList.add('py-6', 'mix-blend-difference');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 mix-blend-difference text-white px-6 py-6 transition-all duration-300" id="navbar">
<div className="max-w-[1920px] mx-auto flex justify-between items-center border-b border-white/20 pb-4">
<a className="group flex flex-col" href="#">
<span className="text-2xl font-serif tracking-tight font-medium group-hover:text-uslu-bronze transition-colors">USLU</span>
<span className="text-[9px] tracking-[0.3em] uppercase opacity-70 mt-0.5">Projektentwicklung</span>
</a>
<div className="hidden md:flex items-center space-x-12 text-xs font-medium tracking-widest uppercase">
<a className="hover:text-uslu-bronze transition-colors relative group" href="#expertise">
                    Expertise
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-uslu-bronze transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-uslu-bronze transition-colors relative group" href="#portfolio">
                    Portfolio
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-uslu-bronze transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-uslu-bronze transition-colors relative group" href="#locations">
                    Standorte
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-uslu-bronze transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<a className="hidden md:flex items-center gap-2 border border-white/30 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-xs tracking-widest uppercase" href="#contact">
<span>Kontakt</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>

<button aria-label="Menu" className="md:hidden text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Architectural Masterpiece" className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20c0faaa-a3f3-491c-a529-c51b3d0da9a8_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-uslu-dark via-uslu-dark/40 to-transparent"></div>
</div>

<div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
<div className="reveal-element">
<p className="text-xs md:text-sm tracking-[0.4em] uppercase text-uslu-bronze mb-6 font-medium">Established 1996</p>
<h1 className="font-serif text-5xl md:text-7xl lg:text-9xl tracking-tighter leading-[0.9] text-white mb-8">
                    USLU <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">IMMOBILIEN</span>
</h1>
<p className="text-white/70 max-w-2xl mx-auto text-sm md:text-lg font-light leading-relaxed font-sans">
                    Ulm &amp; Izmir. Wir entwickeln, vermarkten und verwalten Visionen. <br className="hidden md:block"/>
                    Crafting the skyline of tomorrow with German precision.
                </p>
</div>
<div className="reveal-element delay-300 mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
<div className="flex items-center gap-4 text-xs font-medium tracking-widest text-white/50 uppercase">
<span className="flex items-center gap-2"><iconify-icon className="text-uslu-bronze" icon="solar:map-point-linear"></iconify-icon> ULM, DE</span>
<span className="w-px h-3 bg-white/20"></span>
<span className="flex items-center gap-2"><iconify-icon className="text-uslu-bronze" icon="solar:map-point-linear"></iconify-icon> IZMIR, TR</span>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal-element delay-500">
<span className="text-[10px] tracking-widest uppercase opacity-50">Explore</span>
<div className="w-px h-12 bg-gradient-to-b from-uslu-bronze to-transparent"></div>
</div>
</header>

<section className="bg-uslu-light text-uslu-dark py-24 md:py-32 relative overflow-hidden border-t border-b border-black/5">
<div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,...\')'}}>

</div>
<div className="max-w-[1920px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
<div className="lg:col-span-4 reveal-element">
<h2 className="text-xs font-bold tracking-[0.2em] uppercase text-uslu-stone mb-4 border-l-2 border-uslu-bronze pl-4">The Manifesto</h2>
<div className="text-5xl md:text-7xl font-serif text-uslu-bronze opacity-20 select-none">25+</div>
<p className="mt-2 text-sm font-medium uppercase tracking-wider">Jahre Erfahrung</p>
</div>
<div className="lg:col-span-8 reveal-element delay-200">
<h3 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 text-uslu-dark">
                    Wir bauen nicht nur Immobilien.<br/>
<span className="italic text-uslu-stone/70">Wir kuratieren Lebensräume.</span>
</h3>
<p className="text-lg md:text-xl font-light text-uslu-stone/80 leading-relaxed max-w-3xl mb-12">
                    Über 25 Jahre Erfahrung am Markt. Als inhabergeführtes Familienunternehmen steht USLU für Seriosität, Innovationskraft und grenzüberschreitende Expertise in Deutschland und der Türkei. Wir verbinden schwäbische Gründlichkeit mit mediterraner Vision.
                </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-black/10">
<div>
<iconify-icon className="text-3xl text-uslu-bronze mb-3" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="font-serif text-xl mb-2">Vertrauen</h4>
<p className="text-xs text-uslu-stone/60 leading-relaxed">Langfristige Partnerschaften durch Transparenz und Handschlagqualität.</p>
</div>
<div>
<iconify-icon className="text-3xl text-uslu-bronze mb-3" icon="solar:city-linear"></iconify-icon>
<h4 className="font-serif text-xl mb-2">Qualität</h4>
<p className="text-xs text-uslu-stone/60 leading-relaxed">Kompromisslose Bauqualität und nachhaltige Materialien.</p>
</div>
<div>
<iconify-icon className="text-3xl text-uslu-bronze mb-3" icon="solar:global-linear"></iconify-icon>
<h4 className="font-serif text-xl mb-2">Netzwerk</h4>
<p className="text-xs text-uslu-stone/60 leading-relaxed">Starke Präsenz in den Wachstumsmärkten Ulm und Izmir.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-uslu-dark text-white py-0 border-b border-white/10 relative" id="expertise">

<div className="absolute inset-0 grid-lines opacity-20"></div>
<div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-l border-r border-white/10">

<div className="group relative p-10 md:p-16 hover:bg-white/5 transition-colors duration-500 reveal-element border-b md:border-b-0 border-white/10">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-2xl text-uslu-bronze" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-12 text-uslu-bronze group-hover:bg-uslu-bronze group-hover:text-black transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:ruler-pen-linear"></iconify-icon>
</div>
<h3 className="font-serif text-3xl mb-4">Projektentwicklung</h3>
<p className="text-white/60 text-sm leading-relaxed mb-8">
                    Von der ersten Vision bis zur Baugenehmigung. Wir schaffen nachhaltige Immobilienwerte durch intelligente Planung und effiziente Prozesse.
                </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs tracking-wide text-white/40 group-hover:text-white/80 transition-colors">
<span className="w-1 h-1 bg-uslu-bronze rounded-full"></span> Standortanalyse
                    </li>
<li className="flex items-center gap-3 text-xs tracking-wide text-white/40 group-hover:text-white/80 transition-colors">
<span className="w-1 h-1 bg-uslu-bronze rounded-full"></span> Baurechtschaffung
                    </li>
<li className="flex items-center gap-3 text-xs tracking-wide text-white/40 group-hover:text-white/80 transition-colors">
<span className="w-1 h-1 bg-uslu-bronze rounded-full"></span> Architekturkonzeption
                    </li>
</ul>
</div>

<div className="group relative p-10 md:p-16 hover:bg-white/5 transition-colors duration-500 reveal-element delay-100 border-b md:border-b-0 border-white/10">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-2xl text-uslu-bronze" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-12 text-uslu-bronze group-hover:bg-uslu-bronze group-hover:text-black transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="font-serif text-3xl mb-4">Vermarktung</h3>
<p className="text-white/60 text-sm leading-relaxed mb-8">
                    Professionelle Vermietung und Verkauf von Wohn- und Gewerbeobjekten. Wir platzieren Ihre Immobilie gewinnbringend am Markt.
                </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs tracking-wide text-white/40 group-hover:text-white/80 transition-colors">
<span className="w-1 h-1 bg-uslu-bronze rounded-full"></span> Vertriebsstrategie
                    </li>
<li className="flex items-center gap-3 text-xs tracking-wide text-white/40 group-hover:text-white/80 transition-colors">
<span className="w-1 h-1 bg-uslu-bronze rounded-full"></span> Exposé Erstellung
                    </li>
<li className="flex items-center gap-3 text-xs tracking-wide text-white/40 group-hover:text-white/80 transition-colors">
<span className="w-1 h-1 bg-uslu-bronze rounded-full"></span> Vertragsmanagement
                    </li>
</ul>
</div>

<div className="group relative p-10 md:p-16 hover:bg-white/5 transition-colors duration-500 reveal-element delay-200">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-2xl text-uslu-bronze" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-12 text-uslu-bronze group-hover:bg-uslu-bronze group-hover:text-black transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:key-linear"></iconify-icon>
</div>
<h3 className="font-serif text-3xl mb-4">Verwaltung</h3>
<p className="text-white/60 text-sm leading-relaxed mb-8">
                    Ganzheitliches Property Management für Werterhalt und Rendite. Wir kümmern uns um die kaufmännische und technische Betreuung.
                </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs tracking-wide text-white/40 group-hover:text-white/80 transition-colors">
<span className="w-1 h-1 bg-uslu-bronze rounded-full"></span> Facility Management
                    </li>
<li className="flex items-center gap-3 text-xs tracking-wide text-white/40 group-hover:text-white/80 transition-colors">
<span className="w-1 h-1 bg-uslu-bronze rounded-full"></span> Mietverwaltung
                    </li>
<li className="flex items-center gap-3 text-xs tracking-wide text-white/40 group-hover:text-white/80 transition-colors">
<span className="w-1 h-1 bg-uslu-bronze rounded-full"></span> Instandhaltung
                    </li>
</ul>
</div>
</div>
</section>

<section className="bg-uslu-stone py-24 border-b border-white/5" id="portfolio">
<div className="max-w-[1920px] mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end reveal-element">
<div>
<span className="text-uslu-bronze text-xs font-bold tracking-[0.2em] uppercase">Ausgewählte Projekte</span>
<h2 className="text-4xl md:text-6xl font-serif text-white mt-4">Meilensteine</h2>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest mt-6 md:mt-0" href="#">
                Alle Projekte ansehen
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="overflow-x-auto pb-12 hide-scrollbar pl-6 md:pl-[max(24px,calc((100vw-1920px)/2+24px))]">
<div className="flex gap-8 w-max pr-6">

<article className="group relative w-[85vw] md:w-[600px] h-[500px] bg-uslu-dark border border-white/10 rounded-sm overflow-hidden reveal-element">
<div className="absolute inset-0 img-zoom-container">
<img alt="Residential" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 img-zoom transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1dfd9627-0dcf-4311-aae8-3b1a9466f63c_1600w.webp"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute top-6 left-6 flex gap-2">
<span className="bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-white border border-white/10">Wohnanlagen</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 border-t border-white/10 bg-black/40 backdrop-blur-sm">
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-serif text-white mb-1">Donau Residenz</h3>
<p className="text-xs text-uslu-bronze uppercase tracking-widest">Ulm, Deutschland</p>
</div>
<div className="text-right">
<p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Status</p>
<p className="text-xs text-white font-medium">Realisiert</p>
</div>
</div>
</div>
</article>

<article className="group relative w-[85vw] md:w-[600px] h-[500px] bg-uslu-dark border border-white/10 rounded-sm overflow-hidden reveal-element delay-100">
<div className="absolute inset-0 img-zoom-container">
<img alt="Commercial" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 img-zoom transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f78131e-65e9-49b2-aa1f-ccc33e28df9f_1600w.webp"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute top-6 left-6 flex gap-2">
<span className="bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-white border border-white/10">Gewerbe</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 border-t border-white/10 bg-black/40 backdrop-blur-sm">
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-serif text-white mb-1">Skyline Office Park</h3>
<p className="text-xs text-uslu-bronze uppercase tracking-widest">Izmir, Türkei</p>
</div>
<div className="text-right">
<p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Status</p>
<p className="text-xs text-white font-medium">Im Bau</p>
</div>
</div>
</div>
</article>

<article className="group relative w-[85vw] md:w-[600px] h-[500px] bg-uslu-dark border border-white/10 rounded-sm overflow-hidden reveal-element delay-200">
<div className="absolute inset-0 img-zoom-container">
<img alt="Logistics" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 img-zoom transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/182d91e1-5681-49cf-a16e-4d56864a24ff_1600w.webp"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute top-6 left-6 flex gap-2">
<span className="bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-white border border-white/10">Logistik</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 border-t border-white/10 bg-black/40 backdrop-blur-sm">
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-serif text-white mb-1">Logistikzentrum Nord</h3>
<p className="text-xs text-uslu-bronze uppercase tracking-widest">Ulm, Deutschland</p>
</div>
<div className="text-right">
<p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Status</p>
<p className="text-xs text-white font-medium">Planung</p>
</div>
</div>
</div>
</article>

<article className="group relative w-[85vw] md:w-[600px] h-[500px] bg-uslu-dark border border-white/10 rounded-sm overflow-hidden reveal-element delay-300">
<div className="absolute inset-0 img-zoom-container">
<img alt="Renovation" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 img-zoom transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/23b20739-803a-4ec2-a84a-5e02c397ddf5_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute top-6 left-6 flex gap-2">
<span className="bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-white border border-white/10">Sanierung</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 border-t border-white/10 bg-black/40 backdrop-blur-sm">
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-serif text-white mb-1">Heritage Lofts</h3>
<p className="text-xs text-uslu-bronze uppercase tracking-widest">Neu-Ulm, Deutschland</p>
</div>
<div className="text-right">
<p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Status</p>
<p className="text-xs text-white font-medium">Verkauf</p>
</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="bg-uslu-light text-uslu-dark relative" id="locations">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="relative min-h-[600px] border-b lg:border-b-0 lg:border-r border-black/10 group overflow-hidden">

<div className="absolute inset-0 grayscale opacity-20 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Ulm,Germany&amp;zoom=13&amp;size=800x800&amp;style=feature:all|saturation:-100&amp;key=YOUR_API_KEY_HERE')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-b from-uslu-light/90 to-uslu-light/40"></div>
<div className="relative z-10 p-12 md:p-24 flex flex-col h-full justify-between">
<div className="reveal-element">
<span className="text-uslu-bronze tracking-widest text-xs font-bold uppercase mb-4 block">Headquarters</span>
<h2 className="text-5xl md:text-7xl font-serif">Ulm</h2>
<p className="mt-4 text-uslu-stone/60 font-light max-w-md">The heart of innovation. Where German engineering meets visionary development.</p>
</div>
<div className="space-y-6 reveal-element delay-100">
<div className="flex items-start gap-4">
<iconify-icon className="text-xl mt-1 text-uslu-bronze" icon="solar:map-point-bold"></iconify-icon>
<div>
<p className="text-sm font-semibold uppercase tracking-wider mb-1">Adresse</p>
<p className="text-uslu-stone/80 font-light leading-relaxed">Magirus-Deutz-Strasse 13<br/>89077 Ulm, Deutschland</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl mt-1 text-uslu-bronze" icon="solar:phone-bold"></iconify-icon>
<div>
<p className="text-sm font-semibold uppercase tracking-wider mb-1">Telefon</p>
<a className="text-uslu-stone/80 font-light hover:text-uslu-bronze transition-colors" href="tel:+497312064480">+49 731 206 44 8-0</a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-black/10">
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-uslu-bronze hover:border-uslu-bronze transition-all" href="mailto:info@uslu.com">
                                Nachricht Senden <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="relative min-h-[600px] group overflow-hidden">

<div className="absolute inset-0 grayscale opacity-20 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Izmir,Turkey&amp;zoom=13&amp;size=800x800&amp;style=feature:all|saturation:-100&amp;key=YOUR_API_KEY_HERE')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-b from-uslu-light/90 to-uslu-light/40"></div>
<div className="relative z-10 p-12 md:p-24 flex flex-col h-full justify-between">
<div className="reveal-element">
<span className="text-uslu-bronze tracking-widest text-xs font-bold uppercase mb-4 block">Regional Office</span>
<h2 className="text-5xl md:text-7xl font-serif">Izmir</h2>
<p className="mt-4 text-uslu-stone/60 font-light max-w-md">The pearl of the Aegean. Expanding horizons with Mediterranean dynamism.</p>
</div>
<div className="space-y-6 reveal-element delay-100">
<div className="flex items-start gap-4">
<iconify-icon className="text-xl mt-1 text-uslu-bronze" icon="solar:map-point-bold"></iconify-icon>
<div>
<p className="text-sm font-semibold uppercase tracking-wider mb-1">Adresse</p>
<p className="text-uslu-stone/80 font-light leading-relaxed">Çınarlı Mah., Ankara Asfaltı Cad. No: 15<br/>Izmir, Türkei</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl mt-1 text-uslu-bronze" icon="solar:phone-bold"></iconify-icon>
<div>
<p className="text-sm font-semibold uppercase tracking-wider mb-1">Telefon</p>
<a className="text-uslu-stone/80 font-light hover:text-uslu-bronze transition-colors" href="tel:+902323350335">+90 232 335 0 335</a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-black/10">
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-uslu-bronze hover:border-uslu-bronze transition-all" href="mailto:izmir@uslu.com">
                                Nachricht Senden <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-uslu-bronze text-black overflow-hidden py-4 border-t border-b border-black/10">
<div className="animate-marquee whitespace-nowrap flex gap-12 text-sm md:text-base font-bold tracking-widest uppercase">
<span>German Precision. Mediterranean Vision.</span>
<span className="mx-4">•</span>
<span>Since 1996: Crafting the Skyline of Tomorrow.</span>
<span className="mx-4">•</span>
<span>We don't just develop properties; we curate legacies.</span>
<span className="mx-4">•</span>
<span>German Precision. Mediterranean Vision.</span>
<span className="mx-4">•</span>
<span>Since 1996: Crafting the Skyline of Tomorrow.</span>
</div>
</div>

<footer className="bg-uslu-dark text-white/40 pt-24 pb-12 border-t border-white/5" id="contact">
<div className="max-w-[1920px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-b border-white/5 pb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-2xl font-serif text-white block mb-4">USLU</span>
<p className="text-xs leading-relaxed max-w-xs">
                        Projektentwicklung GmbH &amp; Co. KG.<br/>
                        Building futures since 1996.
                    </p>
</div>
<div>
<h4 className="text-white text-xs uppercase tracking-widest mb-6">Menu</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-uslu-bronze transition-colors" href="#">Startseite</a></li>
<li><a className="hover:text-uslu-bronze transition-colors" href="#expertise">Leistungen</a></li>
<li><a className="hover:text-uslu-bronze transition-colors" href="#portfolio">Portfolio</a></li>
<li><a className="hover:text-uslu-bronze transition-colors" href="#locations">Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs uppercase tracking-widest mb-6">Expertise</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-uslu-bronze transition-colors" href="#">Projektentwicklung</a></li>
<li><a className="hover:text-uslu-bronze transition-colors" href="#">Vermarktung</a></li>
<li><a className="hover:text-uslu-bronze transition-colors" href="#">Management</a></li>
<li><a className="hover:text-uslu-bronze transition-colors" href="#">Investment</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs uppercase tracking-widest mb-6">Social</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-uslu-bronze transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-uslu-bronze transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-uslu-bronze transition-colors" href="#">Xing</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-wider">
<div className="flex gap-6 mb-4 md:mb-0">
<a className="hover:text-white transition-colors" href="#">Impressum</a>
<a className="hover:text-white transition-colors" href="#">Datenschutz</a>
<a className="hover:text-white transition-colors" href="#">AGB</a>
</div>
<p>© 2024 USLU Projektentwicklung GmbH &amp; Co. KG. All Rights Reserved.</p>
</div>
</div>
</footer>



    </>
  );
}
