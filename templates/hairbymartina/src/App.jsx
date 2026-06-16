import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class', // Manual toggle or system pref
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
body: ['Lora', 'serif'],
},
colors: {
gold: {
50: '#fbf8f1',
100: '#f5edd9',
200: '#ebd6ad',
300: '#dfbc7e',
400: '#d4a155',
500: '#ce8a37',
600: '#b26d2b',
700: '#8e5125',
800: '#754124',
900: '#613622',
},
dark: {
900: '#0f0f0f',
800: '#1a1a1a',
700: '#262626'
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both',
'zoom-slow': 'zoomSlow 20s linear infinite alternate',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(30px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
zoomSlow: {
'0%': { transform: 'scale(1)' },
'100%': { transform: 'scale(1.1)' },
}
}
}
}
}



        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        const navBg = document.getElementById('nav-bg');
        const logoText = document.getElementById('logo-text');
        const navLinks = document.getElementById('nav-links');
        const mobileToggle = document.getElementById('mobile-toggle');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navBg.classList.remove('bg-transparent');
                navBg.classList.add('bg-white/95', 'backdrop-blur-md', 'border-b', 'border-stone-100', 'shadow-sm');
                logoText.classList.remove('text-white');
                logoText.classList.add('text-stone-900');
                navLinks.classList.remove('text-white/90');
                navLinks.classList.add('text-stone-600');
                mobileToggle.classList.remove('text-white');
                mobileToggle.classList.add('text-stone-900');
            } else {
                navBg.classList.add('bg-transparent');
                navBg.classList.remove('bg-white/95', 'backdrop-blur-md', 'border-b', 'border-stone-100', 'shadow-sm');
                logoText.classList.add('text-white');
                logoText.classList.remove('text-stone-900');
                navLinks.classList.add('text-white/90');
                navLinks.classList.remove('text-stone-600');
                mobileToggle.classList.add('text-white');
                mobileToggle.classList.remove('text-stone-900');
            }
        });

        // Mobile Menu Logic
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileToggle.addEventListener('click', () => {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                // Small delay to allow display:block to apply before opacity transition
                setTimeout(() => {
                    mobileMenu.classList.remove('opacity-0');
                    mobileMenu.classList.add('opacity-100');
                }, 10);
            } else {
                closeMenu();
            }
        });

        function closeMenu() {
            mobileMenu.classList.remove('opacity-100');
            mobileMenu.classList.add('opacity-0');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        }

        // Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300" id="navbar">
<div className="absolute inset-0 transition-all duration-300" id="nav-bg"></div>
<div className="relative flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">

<a className="flex items-center gap-2 group z-50" href="#">
<span className="text-xl font-medium tracking-widest font-serif transition-colors duration-300" id="logo-text">HAIR BY MARTINA</span>
</a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase" id="nav-links">
<a className="hover:text-gold-300 transition-colors" href="#about">O nás</a>
<a className="hover:text-gold-300 transition-colors" href="#services">Služby</a>
<a className="hover:text-gold-300 transition-colors" href="#team">Náš Tým</a>
<a className="hover:text-gold-300 transition-colors" href="#gallery">Galerie</a>
<a className="hover:text-gold-300 transition-colors" href="#contact">Kontakt</a>
</div>

<div className="hidden md:block z-50">
<a className="uppercase hover:bg-gold-400 hover:text-white transition-all duration-300 text-xs font-bold text-stone-900 tracking-widest bg-white rounded-none pt-2.5 pr-6 pb-2.5 pl-6" href="http://noona.app/cs/hairbymartina" target="_blank">
                    Rezervace
                </a>
</div>

<button className="md:hidden p-2 z-50" id="mobile-toggle">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden fixed inset-0 bg-stone-900 z-40 flex flex-col items-center justify-center gap-8 opacity-0 transition-opacity duration-300" id="mobile-menu">
<a className="text-2xl font-serif text-white hover:text-gold-400" href="#about" onclick="closeMenu()">O nás</a>
<a className="text-2xl font-serif text-white hover:text-gold-400" href="#services" onclick="closeMenu()">Služby</a>
<a className="text-2xl font-serif text-white hover:text-gold-400" href="#team" onclick="closeMenu()">Náš Tým</a>
<a className="text-2xl font-serif text-white hover:text-gold-400" href="#gallery" onclick="closeMenu()">Galerie</a>
<a className="text-gold-400 text-xl font-bold tracking-widest uppercase mt-4" href="http://noona.app/cs/hairbymartina" target="_blank">Rezervovat</a>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] overflow-hidden bg-stone-900">

<div className="absolute inset-0 w-full h-full animate-zoom-slow">

<img alt="Luxury Salon Interior" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-stone-900"></div>
</div>

<div className="flex flex-col text-center h-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative items-center justify-center">

<div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/20 bg-white/5 backdrop-blur-md mb-8 animate-fade-in-up rounded-full" style={{animationDelay: '100ms'}}>
<iconify-icon className="text-gold-400" icon="solar:star-shine-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest text-white font-medium">Nově pracujeme s kosmetikou KÉRASTASE</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif tracking-tight leading-none mb-8 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                Váš sen o <span className="italic font-light text-gold-300">krásných</span> vlasech.
            </h1>

<p className="text-lg text-stone-300 font-light max-w-2xl mb-10 leading-relaxed animate-fade-in-up font-body" style={{animationDelay: '300ms'}}>
                "Žena, která si ostříhá vlasy, je připravená na to, změnit celý svět." <br/>
<span className="text-sm mt-2 block opacity-70">— Coco Chanel</span>
</p>

<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{animationDelay: '400ms'}}>
<a className="px-8 py-4 bg-white text-stone-900 text-xs font-bold tracking-widest uppercase hover:bg-gold-400 hover:text-white transition-all duration-300 min-w-[180px]" href="http://noona.app/cs/hairbymartina" target="_blank">
                    Rezervace Online
                </a>
<a className="px-8 py-4 border border-white/30 text-white text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-all duration-300 min-w-[180px]" href="#services">
                    Naše Služby
                </a>
</div>
<p className="mt-8 text-stone-400 text-sm font-medium animate-fade-in-up" style={{animationDelay: '500ms'}}>
                +420 602 461 882
            </p>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-pulse">
<span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
<div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
</header>

<section className="bg-white pt-24 pr-6 pb-2 pl-6" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<span className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-4 block">O Nás</span>
<h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">Individuální přístup a <span className="italic text-gold-600">péče s láskou</span></h2>
<div className="space-y-6 text-stone-600 font-body leading-relaxed text-lg">
<p className="">
                        "Mít svůj vlastní kadeřnický salon byl pro mne velký sen a moc si vážím toho, že se mi podařilo si ho splnit. Perfektní servis a spokojený zákazník jsou pro mne vším." 
                    </p>
<p className="">
                        Neváhejte, navštivte nás a nechte se u nás hýčkat. Usadíme vás do pohodlného křesla a budeme se věnovat s péčí a láskou nejen vašim vlasům. Rádi si s vámi popovídáme a nabídneme vám domácí ovocné limonády, prosecco, kávu a k ní domací pečené sladkosti.
                    </p>
<p className="">
                        Pokud sníte o krásných vlasech, od nás s nimi skutečně odejdete. Zakládáme si na individuálním přístupu, komplexní péči a profesionalitě.
                    </p>
<div className="pt-6 border-t border-stone-100 mt-8">
<p className="font-serif text-xl italic text-stone-900">Martina Malinová</p>
<p className="text-xs uppercase tracking-widest text-stone-400 mt-1">Majitelka Salonu</p>
</div>
</div>
</div>
<div className="relative reveal-on-scroll delay-100">

</div>
</div>
</section>

<section className="bg-stone-50 border-stone-200 border-t pt-24 pr-6 pb-24 pl-6" id="services">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-20 reveal-on-scroll">
<span className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-3 block">Menu Služeb</span>
<h2 className="text-4xl md:text-5xl font-serif text-stone-900">Naše Péče</h2>
<div className="w-24 h-px bg-gold-400 mx-auto mt-6"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">

<div className="reveal-on-scroll delay-100">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center">
<iconify-icon icon="solar:cosmetic-linear" width="18"></iconify-icon>
</div>
<h3 className="text-xl font-medium uppercase tracking-widest">Kadeřnictví &amp; Péče</h3>
</div>
<div className="space-y-8">
<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg font-serif group-hover:text-gold-600 transition-colors">Diagnostika vlasů a pokožky</h4>
</div>
<p className="text-sm text-stone-500 font-body">Poradíme Vám jak se starat o vlasy a vlasovou pokožku a navrhneme vhodnou domácí péči.</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg font-serif group-hover:text-gold-600 transition-colors">Power Mix</h4>
</div>
<p className="text-sm text-stone-500 font-body">Zázračná ampule, která lze namíchat přímo pro potřeby Vašich vlasů.</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg font-serif group-hover:text-gold-600 transition-colors">Pro-Fiber</h4>
</div>
<p className="text-sm text-stone-500 font-body">První regenerační dlouhotrvající péče, která posiluje vlasové vlákno a snižuje lámavost.</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg font-serif group-hover:text-gold-600 transition-colors">Smartbond</h4>
</div>
<p className="text-sm text-stone-500 font-body">Služba chránící vazby uvnitř vlasů během barvení. Rozdíl ucítíte okamžitě.</p>
</div>
</div>
</div>

<div className="reveal-on-scroll delay-200">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center">
<iconify-icon icon="solar:pallete-2-linear" width="18"></iconify-icon>
</div>
<h3 className="text-xl font-medium uppercase tracking-widest">Trendové Barvení</h3>
</div>
<div className="space-y-8">
<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg font-serif group-hover:text-gold-600 transition-colors">Balayage &amp; Ombré</h4>
</div>
<p className="text-sm text-stone-500 font-body">Speciální techniky prolínání odstínů. Od přirozeného efektu po výrazné přechody.</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg font-serif group-hover:text-gold-600 transition-colors">Bronde &amp; Sombré</h4>
</div>
<p className="text-sm text-stone-500 font-body">Kombinace hnědých a světlých odstínů nebo jemnější verze ombré.</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg font-serif group-hover:text-gold-600 transition-colors">Babylights &amp; Contouring</h4>
</div>
<p className="text-sm text-stone-500 font-body">Jemné stínování blond odstínů a tvarování obličeje pomocí světla a stínů.</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg font-serif group-hover:text-gold-600 transition-colors">French Balayage &amp; Gloss</h4>
</div>
<p className="text-sm text-stone-500 font-body">Jedinečná kombinace dvou odstínů pro elegantní přirozený kontrast.</p>
</div>
</div>
</div>
</div>

<div className="mt-20 p-8 bg-stone-900 text-white text-center reveal-on-scroll">
<p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-400 mb-4">Používáme prémiovou kosmetiku</p>
<div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 opacity-80">
<span className="text-2xl font-serif">L'ORÉAL PROFESSIONNEL</span>
<span className="hidden md:block w-1.5 h-1.5 rounded-full bg-stone-700"></span>
<span className="text-2xl font-serif">KÉRASTASE</span>
</div>
<p className="mt-6 text-sm text-stone-400 font-light max-w-lg mx-auto">Barvící systémy Majirel, Inoa, Dia Richesse, Dia Light.</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="team">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
<div>
<span className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-2 block">Profesionálové</span>
<h2 className="text-4xl md:text-5xl font-serif text-stone-900">Náš Tým</h2>
</div>
<p className="text-stone-500 max-w-md text-right mt-4 md:mt-0 font-body italic">
                    Absolvujeme pravidelně odborná školení L'ORÉAL.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group reveal-on-scroll delay-100">
<div className="aspect-[3/4] overflow-hidden mb-6 bg-stone-100 relative">
<img alt="Martina Malinová" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70597465-a371-4709-9bc7-51ba5d452842_1600w.jpg"/>
</div>
<h3 className="text-xl text-stone-900 font-serif">Martina Malinová</h3>
<p className="text-xs uppercase tracking-widest text-gold-600 mb-3">Majitelka &amp; Kadeřnice</p>
<p className="text-sm text-stone-500 font-body line-clamp-3">V oboru praxe víc jak 24 let. Absolovala řadu školení balayage, ombré a kompletní školení L'Oréal.</p>
</div>

<div className="group reveal-on-scroll delay-200">
<div className="aspect-[3/4] overflow-hidden mb-6 bg-stone-100 relative">
<img alt="Alena Motlová" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/616090e6-5f33-4384-aa6e-92c0a71ecc5d_1600w.jpg"/>
</div>
<h3 className="text-xl font-serif text-stone-900">Alena Motlová</h3>
<p className="text-xs uppercase tracking-widest text-gold-600 mb-3">Kadeřnice</p>
<p className="text-sm text-stone-500 font-body line-clamp-3">V oboru přes 25 let. Vítězný tým soutěže L'Oréal Color Trophy 2001. Publikace v časopisech.</p>
</div>

<div className="group reveal-on-scroll delay-300">
<div className="aspect-[3/4] overflow-hidden mb-6 bg-stone-100 relative">
<img alt="Jana Hroudová" className="group-hover:scale-105 transition-transform duration-700 group-hover:grayscale-0 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2644e7aa-59fa-4990-bc10-c1584ed58b3a_1600w.jpg"/>
</div>
<h3 className="text-xl font-serif text-stone-900">Jana Hroudová</h3>
<p className="text-xs uppercase tracking-widest text-gold-600 mb-3">Kadeřnice</p>
<p className="text-sm text-stone-500 font-body line-clamp-3">V oboru více jak 18 let. Součást týmu proměn pro časopis Můj svět, AHA, Blesk.</p>
</div>

<div className="group reveal-on-scroll delay-100">
<div className="aspect-[3/4] overflow-hidden mb-6 bg-stone-100 relative">
<img alt="Veronika Badová" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab70c56d-5b67-4bb4-a6d4-797dd9fc9d52_1600w.jpg"/>
</div>
<h3 className="text-xl font-serif text-stone-900">Veronika Badová</h3>
<p className="text-xs uppercase tracking-widest text-gold-600 mb-3">Kadeřnice</p>
<p className="text-sm text-stone-500 font-body line-clamp-3">V oboru přes 18 let. "Je pro mě důležité, aby každý klient odcházel spokojený."</p>
</div>

<div className="group reveal-on-scroll delay-200">
<div className="aspect-[3/4] overflow-hidden mb-6 bg-stone-100 relative">
<img alt="Lenka Pokorná" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39134180-f353-4c0b-80f3-3e0f1e6ac236_1600w.jpg"/>
</div>
<h3 className="text-xl font-serif text-stone-900">Lenka Pokorná</h3>
<p className="text-xs uppercase tracking-widest text-gold-600 mb-3">Manikérka</p>
<p className="text-sm text-stone-500 font-body line-clamp-3">Specialistka na péči o ruce a nehty s dlouholetou praxí.</p>
</div>

<div className="group reveal-on-scroll delay-300 flex flex-col justify-center items-center bg-stone-900 text-white p-8 text-center border border-stone-800">
<h3 className="text-2xl font-serif mb-4">Hledáme nové posily</h3>
<p className="text-sm text-stone-400 mb-6 font-body">Rádi přivítáme v našem salonu kadeřnice a manikérky. Požadujeme profesionální vystupování a lásku k profesi.</p>
<a className="inline-flex items-center gap-2 text-gold-400 uppercase tracking-widest text-xs font-bold hover:text-white transition-colors" href="mailto:info@hairbymartina.cz">
                        Napište nám
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>


<footer className="bg-stone-900 text-white pt-24 pb-12 border-t border-stone-800" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

<div className="space-y-6">
<h3 className="text-2xl font-serif tracking-widest">HAIR BY MARTINA</h3>
<p className="text-stone-400 text-sm font-light leading-relaxed">
                        Najdete nás v centru Prahy, vedle obchodního centra Nový Smíchov. Poblíž je tramvajová zastávka i parkoviště.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all" href="https://www.facebook.com/bymartinahair/" target="_blank">
<iconify-icon icon="mdi:facebook" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all" href="https://www.instagram.com/bymartinahair/" target="_blank">
<iconify-icon icon="mdi:instagram" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="space-y-6">
<h4 className="text-sm font-bold uppercase tracking-widest text-gold-400">Kontakty</h4>
<ul className="space-y-4 text-stone-300 font-light text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>Preslova 3, 150 00 Praha 5<br/>Smíchov</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+420602461882">+420 602 461 882</a>
</li>
</ul>
<a className="inline-block mt-2 text-gold-400 hover:text-white border-b border-gold-400 hover:border-white transition-colors pb-0.5 text-sm uppercase tracking-wide" href="http://noona.app/cs/hairbymartina" target="_blank">
                        Rezervovat online
                    </a>
</div>

<div className="space-y-6">
<h4 className="text-sm font-bold uppercase tracking-widest text-gold-400">Otevírací Doba</h4>
<ul className="space-y-2 text-stone-300 font-light text-sm">
<li className="flex justify-between"><span>Pondělí</span> <span className="">9:00 - 19:00</span></li>
<li className="flex justify-between"><span>Úterý</span> <span className="">9:00 - 19:00</span></li>
</ul>
</div>

<div className="w-full h-full min-h-[200px] bg-stone-800 relative group overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.4285744474765!2d14.404507015717878!3d50.07269877942485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9455c687e839%3A0x6c5c065181755a5b!2sPreslova%201269%2F3%2C%20150%2000%20Praha%205-Sm%C3%ADchov!5e0!3m2!1scs!2scz!4v1620000000000!5m2!1scs!2scz" style={{border: '0', position: 'absolute', inset: '0'}} width="100%"></iframe>
</div>
</div>
<div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
<p>© 2024 Martina Malinová (IČO: 07 88 21 49). Všechna práva vyhrazena.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<p>Dárkové poukazy k dispozici na recepci</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
