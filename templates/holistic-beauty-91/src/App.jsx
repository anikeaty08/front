import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
sand: '#FAF9F6',
beige: '#F5F5DC',
sage: '#E6E4DA',
espresso: '#3E2723',
olive: '#556B2F',
terracotta: '#A0563F',
clay: '#CCA483'
},
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Lato"', 'sans-serif'],
},
backgroundImage: {
'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.04%22/%3E%3C/svg%3E')",
}
}
}
}



        // 1. Mobile Menu Logic & Auto-Close Fix
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        let isMenuOpen = false;

        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.style.display = 'flex';
                // Small delay to allow display:flex to apply before opacity transition
                setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10);
                document.body.style.overflow = 'hidden';
            } else {
                closeMenu();
            }
        });

        function closeMenu() {
            isMenuOpen = false;
            mobileMenu.classList.add('opacity-0');
            setTimeout(() => {
                mobileMenu.style.display = 'none';
                document.body.style.overflow = '';
            }, 500);
        }

        // CRITICAL FIX: Auto-close on link click
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        // 2. Parallax Effect on Scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const parallaxImg = document.querySelector('.parallax-img');
            // Move image slightly slower than scroll
            if(parallaxImg) {
                parallaxImg.style.transform = `translateY(${scrolled * 0.1}px) scale(1.1)`; 
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>

<nav className="fixed w-full z-40 top-0 left-0 py-6 px-6 md:px-12 transition-all duration-300 bg-sand/80 backdrop-blur-sm">
<div className="flex justify-between items-center max-w-7xl mx-auto">
<a className="font-sans text-xl uppercase tracking-widest text-espresso font-medium z-50 relative" href="#">Aura Glow</a>

<div className="hidden md:flex gap-10 items-center">
<a className="font-sans text-sm tracking-widest hover:text-terracotta transition-colors duration-300" href="#home">HOME</a>
<a className="font-sans text-sm tracking-widest hover:text-terracotta transition-colors duration-300" href="#about">PHILOSOPHIE</a>
<a className="font-sans text-sm tracking-widest hover:text-terracotta transition-colors duration-300" href="#treatments">BEHANDLUNGEN</a>
<a className="px-6 py-2 border border-espresso rounded-full text-sm hover:bg-espresso hover:text-sand transition-colors duration-300" href="#contact">TERMIN</a>
</div>

<button className="md:hidden z-50 text-espresso focus:outline-none" id="menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-beige z-40 hidden flex-col justify-center items-center opacity-0 transition-opacity duration-500" id="mobile-menu">
<div className="flex flex-col gap-8 text-center">
<a className="font-serif text-4xl text-espresso hover:text-terracotta transition-colors italic" href="#home">Home</a>
<a className="font-serif text-4xl text-espresso hover:text-terracotta transition-colors italic" href="#about">Philosophie</a>
<a className="font-serif text-4xl text-espresso hover:text-terracotta transition-colors italic" href="#treatments">Behandlungen</a>
<a className="font-serif text-4xl text-espresso hover:text-terracotta transition-colors italic" href="#gallery">Atmosphäre</a>
<a className="font-serif text-4xl text-espresso hover:text-terracotta transition-colors italic" href="#contact">Kontakt</a>
</div>
</div>

<section className="min-h-screen pt-24 pb-12 px-6 md:px-12 flex items-center relative overflow-hidden" id="home">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

<div className="order-2 md:order-1 flex flex-col items-start gap-6 z-10">
<h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-espresso tracking-tight">
                    Entfalte deine <br/> <span className="italic font-light">natürliche</span> Strahlkraft.
                </h1>
<p className="font-sans text-lg text-espresso/80 font-light max-w-md leading-relaxed">
                    Ganzheitliche Kosmetik &amp; Wellness in einer Oase der Ruhe. Entdecken Sie Slow Beauty für Körper und Geist.
                </p>
<a className="mt-4 px-8 py-3 bg-espresso text-sand rounded-full font-sans text-sm tracking-wider hover:bg-terracotta transition-colors duration-500" href="#contact">
                    Termin vereinbaren
                </a>
</div>

<div className="order-1 md:order-2 relative h-[60vh] md:h-[80vh] w-full">
<div className="absolute inset-0 rounded-t-[12rem] md:rounded-t-[18rem] overflow-hidden shadow-2xl parallax-wrapper">
<img alt="Woman with glowing skin" className="parallax-img w-full h-full object-cover object-center scale-110" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-10 -left-10 text-clay opacity-30 float-slow hidden md:block">
<iconify-icon icon="solar:leaf-linear" width="120"></iconify-icon>
</div>
</div>
</div>
</section>

<div className="w-full text-sage leading-none overflow-hidden">
<svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path className="fill-current" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
</svg>
</div>

<section className="bg-sage py-24 px-6 md:px-12 relative overflow-hidden" id="about">
<div className="absolute top-0 right-0 opacity-10 pointer-events-none mix-blend-multiply">
<img alt="flower shadow" className="w-96 h-96 object-contain rotate-12" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<span className="font-sans text-xs tracking-[0.2em] uppercase text-espresso/60 mb-4 block">Unsere Werte</span>
<h2 className="font-serif text-4xl md:text-6xl text-espresso mb-8">Slow Beauty.</h2>
<div className="w-px h-16 bg-espresso/20 mx-auto mb-8"></div>
<p className="font-sans text-lg md:text-xl font-light leading-loose text-espresso/90">
                Wahre Schönheit entsteht in Momenten der Ruhe. Wir glauben an die Kraft achtsamer Berührung und reinster Inhaltsstoffe. Bei Aura Glow nehmen wir uns Zeit – Zeit für Ihre Haut, Zeit für Ihre Seele, Zeit für das Wesentliche. Genießen Sie pures "Me-Time" in einer Atmosphäre, die den Lärm der Welt vergessen lässt.
            </p>
</div>
</section>

<div className="w-full text-sage leading-none overflow-hidden rotate-180">
<svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path className="fill-current" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
</svg>
</div>

<section className="py-24 px-6 md:px-12 bg-sand" id="treatments">
<div className="max-w-5xl mx-auto">
<div className="mb-16">
<h2 className="font-serif text-4xl md:text-5xl text-espresso mb-4">Behandlungen</h2>
<p className="font-sans font-light text-espresso/70">Kuratierte Rituale für Ihr Wohlbefinden.</p>
</div>
<ul className="flex flex-col">

<li className="treatment-item group relative border-t border-espresso/20 py-8 md:py-12 transition-all hover:bg-beige/30 cursor-default">
<div className="flex flex-col md:flex-row justify-between md:items-center gap-4 z-10 relative">
<div>
<h3 className="font-serif text-2xl md:text-3xl text-espresso group-hover:italic transition-all">Signature Facial</h3>
<p className="font-sans text-sm md:text-base font-light text-espresso/70 mt-2 max-w-md">Reinigung, sanftes Enzym-Peeling und eine tiefenwirksame Maske.</p>
</div>
<span className="font-sans font-medium text-lg text-espresso self-start md:self-center">€ 120</span>
</div>

<div className="reveal-img absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-32 md:w-64 md:h-40 rounded-full overflow-hidden opacity-0 transition-all duration-500 pointer-events-none shadow-xl z-20 hidden md:block border-4 border-white/50">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</li>

<li className="treatment-item group relative border-t border-espresso/20 py-8 md:py-12 transition-all hover:bg-beige/30 cursor-default">
<div className="flex flex-col md:flex-row justify-between md:items-center gap-4 z-10 relative">
<div>
<h3 className="font-serif text-2xl md:text-3xl text-espresso group-hover:italic transition-all">Deep Tissue Massage</h3>
<p className="font-sans text-sm md:text-base font-light text-espresso/70 mt-2 max-w-md">Löst tiefe Verspannungen mit warmen Ölen und gezieltem Druck.</p>
</div>
<span className="font-sans font-medium text-lg text-espresso self-start md:self-center">€ 95</span>
</div>
<div className="reveal-img absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-32 md:w-64 md:h-40 rounded-full overflow-hidden opacity-0 transition-all duration-500 pointer-events-none shadow-xl z-20 hidden md:block border-4 border-white/50">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</li>

<li className="treatment-item group relative border-t border-b border-espresso/20 py-8 md:py-12 transition-all hover:bg-beige/30 cursor-default">
<div className="flex flex-col md:flex-row justify-between md:items-center gap-4 z-10 relative">
<div>
<h3 className="font-serif text-2xl md:text-3xl text-espresso group-hover:italic transition-all">Natural Glow Peeling</h3>
<p className="font-sans text-sm md:text-base font-light text-espresso/70 mt-2 max-w-md">Organisches Meersalz-Peeling für samtweiche, erneuerte Haut.</p>
</div>
<span className="font-sans font-medium text-lg text-espresso self-start md:self-center">€ 80</span>
</div>
<div className="reveal-img absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-32 md:w-64 md:h-40 rounded-full overflow-hidden opacity-0 transition-all duration-500 pointer-events-none shadow-xl z-20 hidden md:block border-4 border-white/50">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1598124146163-36819847286d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</li>
</ul>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-beige/30" id="gallery">
<div className="max-w-7xl mx-auto">
<h2 className="font-serif text-4xl md:text-5xl text-espresso mb-12 text-center md:text-left">Ein Ort zum Atmen.</h2>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-7 h-80 md:h-full relative overflow-hidden rounded-t-[8rem] rounded-b-lg">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="md:col-span-5 flex flex-col gap-6 h-full">

<div className="h-64 md:h-1/2 relative overflow-hidden rounded-lg">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="h-64 md:h-1/2 relative overflow-hidden rounded-b-[8rem] rounded-t-lg">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&amp;w=2073&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-sand text-center overflow-hidden" id="love">
<div className="max-w-4xl mx-auto relative">
<iconify-icon className="text-terracotta/40 mb-8" icon="solar:quote-up-linear" width="40"></iconify-icon>
<h2 className="font-sans text-xs tracking-[0.2em] uppercase text-espresso/50 mb-8">Liebesbriefe unserer Kunden</h2>

<div className="relative" id="testimonial-slider">
<div className="transition-opacity duration-700">
<p className="font-serif italic text-3xl md:text-5xl text-espresso leading-tight mb-8">
                        "Ein absoluter Traum. Noch nie habe ich mich so verstanden und so tief entspannt gefühlt."
                    </p>
<p className="font-sans text-sm font-medium tracking-wide text-espresso/60">— Julia M.</p>
</div>
</div>

<div className="flex justify-center gap-4 mt-12">
<button className="w-3 h-3 rounded-full bg-espresso"></button>
<button className="w-3 h-3 rounded-full bg-espresso/20"></button>
<button className="w-3 h-3 rounded-full bg-espresso/20"></button>
</div>
</div>
</section>

<footer className="bg-espresso text-sand py-24 px-6 md:px-12 rounded-t-[4rem]" id="contact">
<div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
<h2 className="font-serif text-4xl md:text-5xl">Besuchen Sie uns.</h2>
<div className="flex flex-col md:flex-row gap-8 md:gap-16 text-sand/80 font-sans font-light text-lg">
<div className="flex flex-col items-center">
<iconify-icon className="mb-3 text-clay" icon="solar:map-point-linear" width="24"></iconify-icon>
<p>Lindenstraße 42<br/>10115 Berlin</p>
</div>
<div className="flex flex-col items-center">
<iconify-icon className="mb-3 text-clay" icon="solar:phone-calling-linear" width="24"></iconify-icon>
<p>+49 (0) 30 123 456<br/>hello@auraglow.de</p>
</div>
</div>
<a className="inline-flex items-center gap-2 text-clay hover:text-sand transition-colors mt-4" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
<span className="font-sans text-sm tracking-wide">Folge uns @auraglow</span>
</a>
<div className="w-24 h-px bg-white/10 mt-12 mb-4"></div>
<div className="flex gap-6 text-xs text-sand/40 font-sans uppercase tracking-widest">
<a className="hover:text-sand" href="#">Impressum</a>
<a className="hover:text-sand" href="#">Datenschutz</a>
</div>
</div>
</footer>



    </>
  );
}
