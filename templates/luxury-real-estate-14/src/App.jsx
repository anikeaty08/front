import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
navy: {
800: '#0F172A', // Slate 900 base
900: '#020617',
},
gold: {
400: '#D4AF37',
500: '#C5A028',
600: '#B08D1F',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        btn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                menu.classList.remove('opacity-0', 'pointer-events-none');
                btn.innerHTML = '<iconify-icon icon="solar:close-square-linear" width="28" stroke-width="1.5"></iconify-icon>';
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.add('opacity-0', 'pointer-events-none');
                btn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="28" stroke-width="1.5"></iconify-icon>';
                document.body.style.overflow = 'auto';
            }
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                menu.classList.add('opacity-0', 'pointer-events-none');
                btn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="28" stroke-width="1.5"></iconify-icon>';
                document.body.style.overflow = 'auto';
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-2xl tracking-tighter text-slate-900 font-medium z-50 flex items-center gap-2 group" href="#">
<span className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-full group-hover:bg-gold-500 transition-colors duration-300">
                    P
                </span>
                PRIME ESTATES
            </a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600 tracking-wide">
<a className="hover:text-slate-900 hover:scale-105 transition-all duration-300" href="#listings">IMMOBILIEN</a>
<a className="hover:text-slate-900 hover:scale-105 transition-all duration-300" href="#services">SERVICE</a>
<a className="hover:text-slate-900 hover:scale-105 transition-all duration-300" href="#about">ÜBER UNS</a>
<a className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-gold-500 transition-colors duration-300 shadow-lg shadow-slate-900/20" href="#contact">
                    KONTAKT
                </a>
</div>

<button className="md:hidden z-50 text-slate-900 p-2" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 opacity-0 pointer-events-none transition-opacity duration-300" id="mobile-menu">
<a className="text-2xl font-light text-slate-900 mobile-link" href="#listings">Immobilien</a>
<a className="text-2xl font-light text-slate-900 mobile-link" href="#services">Service</a>
<a className="text-2xl font-light text-slate-900 mobile-link" href="#about">Über uns</a>
<a className="text-2xl font-light text-gold-500 mobile-link" href="#contact">Kontakt</a>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden flex items-center justify-center" id="home">

<div className="absolute inset-0 w-full h-full z-0">
<img alt="Luxury Penthouse" className="w-full h-full object-cover animate-ken-burns" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-slate-900/60"></div>
</div>

<div className="relative z-10 text-center w-full max-w-4xl px-6 pt-20">
<span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/90 text-xs tracking-widest uppercase mb-6 glass-dark">
                Premium Real Estate
            </span>
<h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-tight tracking-tight mb-8 drop-shadow-lg">
                Exklusives Wohnen <br/> <span className="italic font-light text-white/90">neu definiert.</span>
</h1>

<div className="glass mx-auto max-w-2xl p-2 rounded-full flex items-center shadow-2xl shadow-black/20 transform hover:scale-[1.01] transition-transform duration-500">
<div className="pl-4 text-slate-400">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none text-slate-800 placeholder-slate-500 focus:ring-0 h-12 px-4 outline-none text-base md:text-lg font-light" placeholder="Ort, PLZ oder Objektart suchen..." type="text"/>
<button className="bg-slate-900 hover:bg-gold-500 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
<iconify-icon icon="solar:arrow-down-linear" width="32"></iconify-icon>
</div>
</header>

<section className="py-24 md:py-32 bg-slate-50 relative" id="listings">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<div>
<h2 className="text-3xl md:text-5xl text-slate-900 tracking-tight font-medium mb-4">Aktuelle Highlights</h2>
<p className="text-slate-500 font-light text-lg">Entdecken Sie unsere kuratierte Auswahl.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-slate-900 border-b border-slate-300 pb-1 hover:border-gold-500 hover:text-gold-500 transition-all text-sm font-medium uppercase tracking-wide" href="#">
                    Alle Objekte ansehen <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 cursor-pointer">
<div className="relative h-80 overflow-hidden">
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-full z-10 uppercase tracking-wider">Zum Kauf</span>
<img alt="Villa" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
</div>
<div className="p-6 relative">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-medium text-slate-900 tracking-tight">Villa Maravilla</h3>
<p className="text-gold-600 font-serif text-xl">€ 4.5 Mio</p>
</div>
<p className="text-slate-500 font-light text-sm mb-6">München, Grünwald</p>
<div className="flex items-center gap-6 border-t border-slate-100 pt-4 text-slate-600">
<div className="flex items-center gap-2 text-sm font-light">
<iconify-icon icon="solar:bed-linear" width="18"></iconify-icon> 5
                            </div>
<div className="flex items-center gap-2 text-sm font-light">
<iconify-icon icon="solar:bath-linear" width="18"></iconify-icon> 3
                            </div>
<div className="flex items-center gap-2 text-sm font-light">
<iconify-icon icon="solar:ruler-linear" width="18"></iconify-icon> 420 m²
                            </div>
</div>
<button className="w-full mt-6 py-3 border border-slate-200 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-colors duration-300 text-sm">Exposé anfordern</button>
</div>
</article>

<article className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 cursor-pointer">
<div className="relative h-80 overflow-hidden">
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-full z-10 uppercase tracking-wider">Zum Kauf</span>
<img alt="Modern House" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
</div>
<div className="p-6 relative">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-medium text-slate-900 tracking-tight">Penthouse Elbchaussee</h3>
<p className="text-gold-600 font-serif text-xl">€ 2.8 Mio</p>
</div>
<p className="text-slate-500 font-light text-sm mb-6">Hamburg, Othmarschen</p>
<div className="flex items-center gap-6 border-t border-slate-100 pt-4 text-slate-600">
<div className="flex items-center gap-2 text-sm font-light">
<iconify-icon icon="solar:bed-linear" width="18"></iconify-icon> 3
                            </div>
<div className="flex items-center gap-2 text-sm font-light">
<iconify-icon icon="solar:bath-linear" width="18"></iconify-icon> 2
                            </div>
<div className="flex items-center gap-2 text-sm font-light">
<iconify-icon icon="solar:ruler-linear" width="18"></iconify-icon> 180 m²
                            </div>
</div>
<button className="w-full mt-6 py-3 border border-slate-200 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-colors duration-300 text-sm">Exposé anfordern</button>
</div>
</article>

<article className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 cursor-pointer">
<div className="relative h-80 overflow-hidden">
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-full z-10 uppercase tracking-wider">Zum Kauf</span>
<img alt="Apartment" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&amp;w=2073&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
</div>
<div className="p-6 relative">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-medium text-slate-900 tracking-tight">Loft Berlin Mitte</h3>
<p className="text-gold-600 font-serif text-xl">€ 1.9 Mio</p>
</div>
<p className="text-slate-500 font-light text-sm mb-6">Berlin, Mitte</p>
<div className="flex items-center gap-6 border-t border-slate-100 pt-4 text-slate-600">
<div className="flex items-center gap-2 text-sm font-light">
<iconify-icon icon="solar:bed-linear" width="18"></iconify-icon> 2
                            </div>
<div className="flex items-center gap-2 text-sm font-light">
<iconify-icon icon="solar:bath-linear" width="18"></iconify-icon> 2
                            </div>
<div className="flex items-center gap-2 text-sm font-light">
<iconify-icon icon="solar:ruler-linear" width="18"></iconify-icon> 156 m²
                            </div>
</div>
<button className="w-full mt-6 py-3 border border-slate-200 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-colors duration-300 text-sm">Exposé anfordern</button>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="text-gold-500 font-medium tracking-widest text-xs uppercase mb-3 block">Unsere Expertise</span>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">Rundum-Service für höchste Ansprüche</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group text-center p-8 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
<div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:home-smile-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-4">Verkauf</h3>
<p className="text-slate-500 font-light leading-relaxed">
                        Wir präsentieren Ihre Immobilie im besten Licht. Professionelles Marketing und Zugang zu exklusiven Käuferkreisen.
                    </p>
</div>

<div className="group text-center p-8 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
<div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:key-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-4">Vermietung</h3>
<p className="text-slate-500 font-light leading-relaxed">
                        Finden Sie die perfekten Mieter. Wir übernehmen die Bonitätsprüfung und Vertragsabwicklung für Sie.
                    </p>
</div>

<div className="group text-center p-8 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
<div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:graph-up-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-4">Wertermittlung</h3>
<p className="text-slate-500 font-light leading-relaxed">
                        Marktgerechte Bewertung Ihrer Immobilie basierend auf aktuellen Daten und jahrelanger Erfahrung.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/2 relative">
<div className="absolute top-4 -left-4 w-full h-full border border-gold-400/30 rounded-2xl transform translate-x-4 translate-y-4"></div>
<img alt="Real Estate Agent" className="rounded-2xl shadow-2xl w-full h-[600px] object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-10 -right-6 z-20 glass p-6 rounded-xl shadow-lg max-w-xs animate-fade-in-up">
<p className="text-4xl font-serif text-slate-900 mb-1">15+</p>
<p className="text-slate-500 text-sm font-light">Jahre Erfahrung im Luxussegment</p>
</div>
</div>

<div className="w-full lg:w-1/2">
<span className="text-gold-500 font-medium tracking-widest text-xs uppercase mb-4 block">Über uns</span>
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-8 leading-tight">
                        Ihr Partner für <br/>Premium-Immobilien.
                    </h2>
<p className="text-slate-500 font-light text-lg mb-8 leading-relaxed">
                        Bei Prime Estates verstehen wir, dass eine Immobilie mehr ist als nur Wände und ein Dach. Es ist ein Lebensgefühl, eine Investition in die Zukunft und ein Ort der Geborgenheit.
                    </p>
<p className="text-slate-500 font-light text-lg mb-10 leading-relaxed">
                        Unser Ansatz verbindet traditionelle Werte wie Diskretion und Zuverlässigkeit mit modernster Technologie und Marketingstrategien, um für Sie das bestmögliche Ergebnis zu erzielen.
                    </p>

<div className="flex items-center gap-4">
<div>
<p className="text-slate-900 font-medium">Maximilian von Berg</p>
<p className="text-slate-400 text-sm">Gründer &amp; Inhaber</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="process">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-center mb-16 tracking-tight">Ihr Weg zum Ziel</h2>
<div className="relative flex flex-col md:flex-row justify-between items-center w-full max-w-5xl mx-auto">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-700 -z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3 mb-12 md:mb-0 group">
<div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center mb-6 group-hover:border-gold-500 group-hover:text-gold-500 transition-colors duration-300">
<span className="font-serif text-xl">1</span>
</div>
<h3 className="text-lg font-medium mb-2">Bewertung</h3>
<p className="text-slate-400 font-light text-sm px-4">Fundierte Analyse und Preisermittlung</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3 mb-12 md:mb-0 group">
<div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center mb-6 group-hover:border-gold-500 group-hover:text-gold-500 transition-colors duration-300">
<span className="font-serif text-xl">2</span>
</div>
<h3 className="text-lg font-medium mb-2">Vermarktung</h3>
<p className="text-slate-400 font-light text-sm px-4">Hochwertiges Exposé und Besichtigungen</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3 group">
<div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center mb-6 group-hover:border-gold-500 group-hover:text-gold-500 transition-colors duration-300">
<span className="font-serif text-xl">3</span>
</div>
<h3 className="text-lg font-medium mb-2">Abschluss</h3>
<p className="text-slate-400 font-light text-sm px-4">Notartermin und Schlüsselübergabe</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="testimonials">

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-200/50 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-16 text-center">Stimmen unserer Kunden</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="glass p-8 rounded-2xl shadow-sm">
<div className="flex text-gold-500 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 font-light italic mb-6">"Die Professionalität und das Marktverständnis waren beeindruckend. Unser Haus wurde innerhalb von 3 Wochen verkauft."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-slate-900 font-medium text-sm">Dr. Thomas Weber</p>
<p className="text-slate-400 text-xs">Verkäufer, München</p>
</div>
</div>
</div>

<div className="glass p-8 rounded-2xl shadow-sm">
<div className="flex text-gold-500 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 font-light italic mb-6">"Transparente Kommunikation und eine exzellente Betreuung bis zum Notartermin. Absolut empfehlenswert."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-slate-900 font-medium text-sm">Julia S.</p>
<p className="text-slate-400 text-xs">Käuferin, Hamburg</p>
</div>
</div>
</div>

<div className="glass p-8 rounded-2xl shadow-sm">
<div className="flex text-gold-500 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 font-light italic mb-6">"Prime Estates hat uns geholfen, unser Traumhaus zu finden, das noch gar nicht offiziell auf dem Markt war."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-slate-900 font-medium text-sm">Markus &amp; Lena</p>
<p className="text-slate-400 text-xs">Käufer, Berlin</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16">

<div className="w-full lg:w-5/12">
<span className="text-gold-500 font-medium tracking-widest text-xs uppercase mb-4 block">Kontakt</span>
<h2 className="text-4xl font-medium text-slate-900 tracking-tight mb-8">Sprechen Sie mit uns.</h2>
<p className="text-slate-500 font-light text-lg mb-12">
                        Wir freuen uns darauf, Sie kennenzulernen und Sie bei Ihrem Immobilienvorhaben zu unterstützen.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-slate-400 text-sm mb-1">Telefon</p>
<a className="text-xl text-slate-900 font-light hover:text-gold-500 transition" href="tel:+498912345678">+49 89 123 456 78</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-slate-400 text-sm mb-1">E-Mail</p>
<a className="text-xl text-slate-900 font-light hover:text-gold-500 transition" href="mailto:info@prime-estates.de">info@prime-estates.de</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-slate-400 text-sm mb-1">Büro</p>
<p className="text-xl text-slate-900 font-light">Maximilianstraße 12<br/>80539 München</p>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-7/12">
<form className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

<div className="relative">
<input className="peer h-10 w-full border-b border-slate-300 text-slate-900 bg-transparent placeholder-transparent focus:outline-none focus:border-gold-500 transition-colors" id="name" placeholder="Name" type="text" />
<label className="absolute left-0 -top-3.5 text-slate-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-slate-500 peer-focus:text-xs" htmlFor="name">Name</label>
</input></div>

<div className="relative">
<input className="peer h-10 w-full border-b border-slate-300 text-slate-900 bg-transparent placeholder-transparent focus:outline-none focus:border-gold-500 transition-colors" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 -top-3.5 text-slate-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-slate-500 peer-focus:text-xs" htmlFor="email">E-Mail Adresse</label>
</div>
</div>

<div className="relative mb-8">
<select className="w-full bg-transparent border-b border-slate-300 text-slate-900 py-2 focus:outline-none focus:border-gold-500 font-light">
<option disabled="" selected="" value="">Ich interessiere mich für...</option>
<option value="kauf">Kauf einer Immobilie</option>
<option value="verkauf">Verkauf meiner Immobilie</option>
<option value="bewertung">Wertermittlung</option>
</select>
</div>

<div className="relative mb-8">
<textarea className="peer w-full border-b border-slate-300 text-slate-900 bg-transparent placeholder-transparent focus:outline-none focus:border-gold-500 transition-colors resize-none" id="message" placeholder="Nachricht" rows="4"></textarea>
<label className="absolute left-0 -top-3.5 text-slate-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-slate-500 peer-focus:text-xs" htmlFor="message">Ihre Nachricht</label>
</div>
<button className="w-full md:w-auto px-10 py-4 bg-slate-900 text-white rounded-lg hover:bg-gold-500 transition-all duration-300 shadow-lg shadow-slate-900/20 text-sm font-medium tracking-wide" type="submit">
                            ANFRAGE SENDEN
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<span className="w-6 h-6 bg-white text-slate-900 flex items-center justify-center rounded-full text-xs font-bold">P</span>
<span className="font-medium tracking-tight">PRIME ESTATES</span>
</div>
<div className="flex gap-8 text-sm text-slate-400 font-light">
<a className="hover:text-white transition" href="#">Impressum</a>
<a className="hover:text-white transition" href="#">Datenschutz</a>
<a className="hover:text-white transition" href="#">AGB</a>
</div>
<p className="text-xs text-slate-600 font-light">© 2023 Prime Estates GmbH.</p>
</div>
</footer>



    </>
  );
}
