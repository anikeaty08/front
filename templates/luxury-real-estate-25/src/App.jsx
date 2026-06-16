import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Navbar Scroll Effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-[#1A1A2E]/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
                    navbar.classList.remove('bg-transparent', 'py-4');
                } else {
                    navbar.classList.add('bg-transparent', 'py-4');
                    navbar.classList.remove('bg-[#1A1A2E]/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
                }
            });

            // Hero Load Animations
            setTimeout(() => {
                document.querySelector('.hero-text').classList.remove('opacity-0', 'translate-y-6');
            }, 100);
            
            setTimeout(() => {
                document.querySelector('.hero-pill').classList.remove('opacity-0');
            }, 400);

            // Hero Carousel Crossfade
            const slides = document.querySelectorAll('.slide');
            let currentSlide = 0;
            
            setInterval(() => {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 5000);

            // Scroll Reveal Animation via IntersectionObserver
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent py-4" id="navbar">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

<a className="flex flex-col items-start group" href="#">
<span className="font-serif text-2xl lg:text-3xl text-[#C5A55A] tracking-tighter uppercase leading-none">Hamac</span>
<span className="font-sans text-[0.65rem] text-white tracking-[0.2em] mt-1 opacity-90 group-hover:opacity-100 transition-opacity">Investissements &amp; Patrimoine</span>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-white/80 hover:text-[#C5A55A] transition-colors" href="#">Acheter</a>
<a className="text-sm font-medium text-white/80 hover:text-[#C5A55A] transition-colors" href="#">Vendre</a>
<a className="text-sm font-medium text-white/80 hover:text-[#C5A55A] transition-colors" href="#">Estimation</a>
<a className="text-sm font-medium text-white/80 hover:text-[#C5A55A] transition-colors" href="#">Quartiers</a>
<a className="text-sm font-medium text-white/80 hover:text-[#C5A55A] transition-colors" href="#">Agence</a>
<a className="text-sm font-medium text-white/80 hover:text-[#C5A55A] transition-colors" href="#">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 border border-[#C5A55A] text-[#C5A55A] text-sm font-medium rounded-full hover:bg-[#C5A55A] hover:text-[#1A1A2E] transition-all duration-300" href="#">
                    Estimer mon bien
                </a>
<button className="lg:hidden text-white hover:text-[#C5A55A] transition-colors">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen w-full overflow-hidden bg-[#1A1A2E]">

<div className="absolute inset-0" id="hero-slides">

<div className="slide active absolute inset-0">
<img alt="Coteaux de Sainte-Foy" className="w-full h-full object-cover scale-105 transform origin-center" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1A1A2E]/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E]/60 via-transparent to-[#1A1A2E]/40"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
<h1 className="hero-text font-serif italic text-white text-3xl md:text-5xl lg:text-6xl max-w-4xl tracking-tight leading-tight opacity-0 translate-y-6 transition-all duration-1000 ease-out">
                        "Les coteaux de Sainte-Foy, à 10 minutes de Bellecour"
                    </h1>
</div>
</div>

<div className="slide absolute inset-0">
<img alt="Jardin à l'ombre" className="w-full h-full object-cover scale-105 transform origin-center" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1A1A2E]/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E]/60 via-transparent to-[#1A1A2E]/40"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
<h1 className="font-serif italic text-white text-3xl md:text-5xl lg:text-6xl max-w-4xl tracking-tight leading-tight">
                        "Votre jardin à l'ombre des cerisiers"
                    </h1>
</div>
</div>

<div className="slide absolute inset-0">
<img alt="Vie de village" className="w-full h-full object-cover scale-105 transform origin-center" src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1A1A2E]/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E]/60 via-transparent to-[#1A1A2E]/40"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
<h1 className="font-serif italic text-white text-3xl md:text-5xl lg:text-6xl max-w-4xl tracking-tight leading-tight">
                        "La vie de village, les commodités de la ville"
                    </h1>
</div>
</div>
</div>

<div className="hero-pill absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 opacity-0 transition-opacity duration-1000 delay-300">
<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
<iconify-icon className="text-[#C5A55A] text-lg" icon="solar:map-point-linear"></iconify-icon>
<span className="text-white text-xs sm:text-sm font-medium tracking-wide">Agence locale spécialisée — Sainte-Foy-lès-Lyon</span>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F6F0] texture-woven relative z-10">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16 reveal">
<span className="text-[#C5A55A] uppercase tracking-widest text-xs font-medium block mb-3">Accompagnement sur-mesure</span>
<h2 className="font-serif text-3xl md:text-5xl text-[#1A1A2E] tracking-tight">Votre projet commence ici</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="group block bg-[#e8efe9] rounded-2xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1A1A2E]/5 reveal delay-100" href="#">
<div className="w-16 h-16 rounded-full bg-white/60 flex items-center justify-center mb-8 text-[#C5A55A] group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-3xl" icon="solar:key-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-serif text-2xl text-[#1A1A2E] mb-3 tracking-tight group-hover:text-[#C5A55A] transition-colors">Mon premier achat</h3>
<p className="text-sm text-[#2D2D2D]/80 leading-relaxed font-medium">Vous rêvez de devenir propriétaire ? On vous guide pas à pas, de la recherche au financement.</p>
</a>

<a className="group block bg-[#e3ecf5] rounded-2xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1A1A2E]/5 reveal delay-200" href="#">
<div className="w-16 h-16 rounded-full bg-white/60 flex items-center justify-center mb-8 text-[#C5A55A] group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-3xl" icon="solar:home-smile-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-serif text-2xl text-[#1A1A2E] mb-3 tracking-tight group-hover:text-[#C5A55A] transition-colors">Plus grand pour ma famille</h3>
<p className="text-sm text-[#2D2D2D]/80 leading-relaxed font-medium">Jardin, chambres supplémentaires, espace — trouvez la maison qui vous ressemble vraiment.</p>
</a>

<a className="group block bg-[#f5f1e3] rounded-2xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1A1A2E]/5 reveal delay-300" href="#">
<div className="w-16 h-16 rounded-full bg-white/60 flex items-center justify-center mb-8 text-[#C5A55A] group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-3xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-serif text-2xl text-[#1A1A2E] mb-3 tracking-tight group-hover:text-[#C5A55A] transition-colors">J'investis dans la pierre</h3>
<p className="text-sm text-[#2D2D2D]/80 leading-relaxed font-medium">Rendement, patrimoine, sérénité — investissez au bon endroit avec les bonnes données.</p>
</a>
</div>
</div>
</section>

<svg className="w-full h-16 md:h-24 text-[#E8E4DF] fill-current relative -mt-1 z-10" preserveaspectratio="none" viewbox="0 0 1440 100">
<path d="M0,100 L0,0 C360,100 1080,100 1440,0 L1440,100 Z"></path>
</svg>

<section className="py-24 bg-[#E8E4DF] relative -mt-16 md:-mt-24 pt-32 md:pt-40">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal">
<div>
<span className="text-[#1A1A2E]/60 uppercase tracking-widest text-xs font-semibold block mb-2">Sélection rigoureuse</span>
<h2 className="font-serif text-3xl md:text-5xl text-[#1A1A2E] tracking-tight">Nos biens à la une</h2>
</div>
<a className="hidden md:inline-flex mt-6 md:mt-0 items-center gap-2 text-sm font-semibold text-[#1A1A2E] border-b border-[#C5A55A] pb-1 hover:text-[#C5A55A] transition-colors" href="#">
                    Voir tout le catalogue <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<a className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-500 reveal delay-100" href="#">
<div className="relative h-[60%] aspect-[4/3] overflow-hidden">
<img alt="Maison Sainte-Foy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 right-4 bg-[#C5A55A] text-white text-[0.65rem] uppercase tracking-widest font-semibold px-3 py-1 rounded-full">Exclusivité</span>
</div>
<div className="p-6">
<p className="text-[#C5A55A] font-semibold text-xl mb-1">1 250 000 €</p>
<h3 className="font-serif text-2xl text-[#1A1A2E] mb-2 tracking-tight">Sainte-Foy-lès-Lyon</h3>
<div className="flex items-center gap-4 text-xs font-medium text-[#2D2D2D]/60">
<span className="flex items-center gap-1"><iconify-icon icon="solar:maximize-square-minimalistic-linear"></iconify-icon> 185 m²</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 5 pièces</span>
</div>
</div>
</a>

<a className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-500 reveal delay-200" href="#">
<div className="relative h-[60%] aspect-[4/3] overflow-hidden">
<img alt="Appartement Tassin" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<p className="text-[#C5A55A] font-semibold text-xl mb-1">680 000 €</p>
<h3 className="font-serif text-2xl text-[#1A1A2E] mb-2 tracking-tight">Tassin-la-Demi-Lune</h3>
<div className="flex items-center gap-4 text-xs font-medium text-[#2D2D2D]/60">
<span className="flex items-center gap-1"><iconify-icon icon="solar:maximize-square-minimalistic-linear"></iconify-icon> 112 m²</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 4 pièces</span>
</div>
</div>
</a>

<a className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-500 reveal delay-300" href="#">
<div className="relative h-[60%] aspect-[4/3] overflow-hidden">
<img alt="Villa Ecully" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="absolute top-4 right-4 bg-[#C5A55A] text-white text-[0.65rem] uppercase tracking-widest font-semibold px-3 py-1 rounded-full">Exclusivité</span>
</div>
<div className="p-6">
<p className="text-[#C5A55A] font-semibold text-xl mb-1">1 850 000 €</p>
<h3 className="font-serif text-2xl text-[#1A1A2E] mb-2 tracking-tight">Écully</h3>
<div className="flex items-center gap-4 text-xs font-medium text-[#2D2D2D]/60">
<span className="flex items-center gap-1"><iconify-icon icon="solar:maximize-square-minimalistic-linear"></iconify-icon> 240 m²</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 7 pièces</span>
</div>
</div>
</a>

<a className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-500 reveal delay-100" href="#">
<div className="relative h-[60%] aspect-[4/3] overflow-hidden">
<img alt="Maison Francheville" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<p className="text-[#C5A55A] font-semibold text-xl mb-1">820 000 €</p>
<h3 className="font-serif text-2xl text-[#1A1A2E] mb-2 tracking-tight">Francheville</h3>
<div className="flex items-center gap-4 text-xs font-medium text-[#2D2D2D]/60">
<span className="flex items-center gap-1"><iconify-icon icon="solar:maximize-square-minimalistic-linear"></iconify-icon> 145 m²</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 5 pièces</span>
</div>
</div>
</a>

<a className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-500 reveal delay-200" href="#">
<div className="relative h-[60%] aspect-[4/3] overflow-hidden">
<img alt="Appartement Oullins" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<p className="text-[#C5A55A] font-semibold text-xl mb-1">450 000 €</p>
<h3 className="font-serif text-2xl text-[#1A1A2E] mb-2 tracking-tight">Oullins</h3>
<div className="flex items-center gap-4 text-xs font-medium text-[#2D2D2D]/60">
<span className="flex items-center gap-1"><iconify-icon icon="solar:maximize-square-minimalistic-linear"></iconify-icon> 85 m²</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 3 pièces</span>
</div>
</div>
</a>

<a className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-500 reveal delay-300" href="#">
<div className="relative h-[60%] aspect-[4/3] overflow-hidden">
<img alt="Maison Craponne" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 right-4 bg-[#C5A55A] text-white text-[0.65rem] uppercase tracking-widest font-semibold px-3 py-1 rounded-full">Exclusivité</span>
</div>
<div className="p-6">
<p className="text-[#C5A55A] font-semibold text-xl mb-1">940 000 €</p>
<h3 className="font-serif text-2xl text-[#1A1A2E] mb-2 tracking-tight">Craponne</h3>
<div className="flex items-center gap-4 text-xs font-medium text-[#2D2D2D]/60">
<span className="flex items-center gap-1"><iconify-icon icon="solar:maximize-square-minimalistic-linear"></iconify-icon> 160 m²</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 6 pièces</span>
</div>
</div>
</a>
</div>
<div className="mt-16 text-center md:hidden reveal">
<a className="inline-flex items-center justify-center px-6 py-3 bg-[#1A1A2E] text-[#C5A55A] text-sm font-semibold rounded-full hover:bg-[#C5A55A] hover:text-[#1A1A2E] transition-all duration-300 shadow-md" href="#">
                    Voir tout le catalogue
                </a>
</div>

<div className="mt-16 text-center hidden md:block reveal">
<a className="inline-flex items-center justify-center px-8 py-3 bg-[#1A1A2E] text-white border border-[#C5A55A] text-sm font-medium rounded-full hover:bg-[#C5A55A] hover:text-[#1A1A2E] hover:border-transparent transition-all duration-300" href="#">
                    Voir tout le catalogue
                </a>
</div>
</div>
</section>

<svg className="w-full h-16 md:h-24 text-[#1A1A2E] fill-current relative -mb-1 z-10" preserveaspectratio="none" viewbox="0 0 1440 100">
<path d="M0,0 C360,100 1080,100 1440,0 L1440,100 L0,100 Z"></path>
</svg>

<section className="py-24 bg-[#1A1A2E] text-white relative z-0">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-20 reveal">
<span className="text-[#C5A55A] uppercase tracking-widest text-xs font-medium block mb-3">Notre engagement</span>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight">Pourquoi nous faire confiance</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center border-t border-white/10 pt-16">

<div className="reveal delay-100 flex flex-col items-center">
<iconify-icon className="text-4xl text-[#C5A55A] mb-6" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<div className="font-serif text-5xl text-[#C5A55A] mb-2 tracking-tight">127</div>
<h4 className="text-lg font-medium mb-3">familles accompagnées</h4>
<p className="text-sm text-white/70 font-medium leading-relaxed">Depuis 2021, un suivi personnalisé de A à Z</p>
</div>

<div className="reveal delay-200 flex flex-col items-center">
<iconify-icon className="text-4xl text-[#C5A55A] mb-6" icon="solar:star-fall-minimalistic-2-linear" strokeWidth="1.5"></iconify-icon>
<div className="font-serif text-5xl text-[#C5A55A] mb-2 tracking-tight">74</div>
<h4 className="text-lg font-medium mb-3">avis 5 étoiles</h4>
<p className="text-sm text-white/70 font-medium leading-relaxed">La satisfaction client comme obsession</p>
</div>

<div className="reveal delay-300 flex flex-col items-center">
<iconify-icon className="text-4xl text-[#C5A55A] mb-6" icon="solar:map-linear" strokeWidth="1.5"></iconify-icon>
<div className="font-serif text-5xl text-[#C5A55A] mb-2 tracking-tight">10</div>
<h4 className="text-lg font-medium mb-3">communes couvertes</h4>
<p className="text-sm text-white/70 font-medium leading-relaxed">Chaque rue de l'Ouest Lyonnais, on la connaît</p>
</div>

<div className="reveal delay-400 flex flex-col items-center">
<iconify-icon className="text-4xl text-[#C5A55A] mb-6" icon="solar:lock-keyhole-unlocked-linear" strokeWidth="1.5"></iconify-icon>
<div className="font-serif text-5xl text-[#C5A55A] mb-2 tracking-tight"> </div>
<h4 className="text-lg font-medium mb-3 -mt-10">Accès off-market</h4>
<p className="text-sm text-white/70 font-medium leading-relaxed">Des biens exclusifs avant tout le monde</p>
</div>
</div>
</div>
</section>

<svg className="w-full h-16 md:h-24 text-[#F8F6F0] fill-current relative -mt-1 z-10" preserveaspectratio="none" viewbox="0 0 1440 100">
<path d="M0,100 L0,0 C360,100 1080,100 1440,0 L1440,100 Z"></path>
</svg>

<section className="py-24 bg-[#F8F6F0] texture-woven relative -mt-16 md:-mt-24 pt-32 md:pt-40">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16 reveal">
<span className="text-[#C5A55A] uppercase tracking-widest text-xs font-medium block mb-3">Territoire</span>
<h2 className="font-serif text-3xl md:text-5xl text-[#1A1A2E] tracking-tight">L'Ouest Lyonnais, quartier par quartier</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:h-[800px]">

<a className="group relative rounded-2xl overflow-hidden col-span-1 md:col-span-2 md:row-span-2 h-[400px] md:h-auto reveal delay-100" href="#">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/90 via-[#1A1A2E]/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="font-serif text-3xl text-white mb-2 tracking-tight">Sainte-Foy-lès-Lyon</h3>
<p className="text-sm text-white/90 font-medium mb-4">Le bourg historique aux portes de Lyon</p>
<div className="flex items-center justify-between">
<span className="text-xs text-[#C5A55A] uppercase tracking-wider font-semibold">Prix moyen : 4 850€/m²</span>
<span className="text-white text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all flex items-center gap-1">Découvrir <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</a>

<a className="group relative rounded-2xl overflow-hidden h-[300px] md:h-auto reveal delay-200" href="#">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/90 via-[#1A1A2E]/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="font-serif text-2xl text-white mb-1 tracking-tight">Tassin-la-Demi-Lune</h3>
<p className="text-xs text-white/90 font-medium mb-3">Le carrefour dynamique de l'Ouest</p>
<div className="flex items-center justify-between">
<span className="text-[0.65rem] text-[#C5A55A] uppercase tracking-wider font-semibold">4 200€/m²</span>
<span className="text-white text-xs font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">Découvrir</span>
</div>
</div>
</a>

<a className="group relative rounded-2xl overflow-hidden h-[300px] md:h-auto reveal delay-300" href="#">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/90 via-[#1A1A2E]/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="font-serif text-2xl text-white mb-1 tracking-tight">Écully</h3>
<p className="text-xs text-white/90 font-medium mb-3">Prestige discret et grandes écoles</p>
<div className="flex items-center justify-between">
<span className="text-[0.65rem] text-[#C5A55A] uppercase tracking-wider font-semibold">5 100€/m²</span>
<span className="text-white text-xs font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">Découvrir</span>
</div>
</div>
</a>

<a className="group relative rounded-2xl overflow-hidden h-[250px] md:h-auto reveal delay-100" href="#">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/90 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<h3 className="font-serif text-xl text-white mb-1 tracking-tight">Francheville</h3>
<p className="text-xs text-white/90 font-medium mb-2 line-clamp-1">Nature et tranquillité</p>
<div className="flex items-center justify-between">
<span className="text-[0.65rem] text-[#C5A55A] uppercase tracking-wider font-semibold">3 600€/m²</span>
<span className="text-white text-xs font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</a>

<a className="group relative rounded-2xl overflow-hidden h-[250px] md:h-auto reveal delay-200" href="#">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/90 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<h3 className="font-serif text-xl text-white mb-1 tracking-tight">Craponne</h3>
<p className="text-xs text-white/90 font-medium mb-2 line-clamp-1">La campagne aux portes de Lyon</p>
<div className="flex items-center justify-between">
<span className="text-[0.65rem] text-[#C5A55A] uppercase tracking-wider font-semibold">3 800€/m²</span>
<span className="text-white text-xs font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</a>

<a className="group relative rounded-2xl overflow-hidden h-[250px] md:h-auto reveal delay-300" href="#">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/90 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<h3 className="font-serif text-xl text-white mb-1 tracking-tight">Oullins</h3>
<p className="text-xs text-white/90 font-medium mb-2 line-clamp-1">L'énergie du sud-ouest lyonnais</p>
<div className="flex items-center justify-between">
<span className="text-[0.65rem] text-[#C5A55A] uppercase tracking-wider font-semibold">3 400€/m²</span>
<span className="text-white text-xs font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#E8E4DF] relative">

<svg className="absolute top-0 left-0 w-full h-12 md:h-16 text-[#F8F6F0] fill-current -mt-1 z-10" preserveaspectratio="none" viewbox="0 0 1440 100">
<path d="M0,0 C360,100 1080,100 1440,0 L1440,0 L0,0 Z"></path>
</svg>
<div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
<div className="text-center mb-16 reveal">
<span className="text-[#1A1A2E]/60 uppercase tracking-widest text-xs font-semibold block mb-3">Avis vérifiés</span>
<h2 className="font-serif text-3xl md:text-5xl text-[#1A1A2E] tracking-tight">Ce que nos clients disent de nous</h2>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 hide-scrollbar reveal">

<div className="min-w-[85vw] md:min-w-[50vw] lg:min-w-[30vw] flex-shrink-0 snap-center bg-white p-10 rounded-2xl shadow-sm border border-[#1A1A2E]/5">
<div className="text-[#C5A55A] text-5xl font-serif leading-none mb-4">"</div>
<p className="font-serif italic text-lg md:text-xl text-[#2D2D2D] leading-relaxed mb-8">
                        Une équipe formidable qui a su trouver la maison parfaite pour notre famille recomposée à Tassin. Sébastien a été d'une patience et d'une écoute rares. Nous recommandons les yeux fermés.
                    </p>
<div className="flex items-center justify-between border-t border-[#E8E4DF] pt-6">
<div>
<p className="font-medium text-[#1A1A2E]">Sophie &amp; Marc</p>
<p className="text-xs text-[#2D2D2D]/60 mt-1">Accompagnés par Sébastien</p>
</div>
<div className="flex text-[#C5A55A]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[50vw] lg:min-w-[30vw] flex-shrink-0 snap-center bg-white p-10 rounded-2xl shadow-sm border border-[#1A1A2E]/5">
<div className="text-[#C5A55A] text-5xl font-serif leading-none mb-4">"</div>
<p className="font-serif italic text-lg md:text-xl text-[#2D2D2D] leading-relaxed mb-8">
                        Vente rapide et au prix voulu malgré un marché complexe. Élodie a géré les visites avec un grand professionnalisme, ne retenant que les dossiers solides. Un stress en moins pour nous.
                    </p>
<div className="flex items-center justify-between border-t border-[#E8E4DF] pt-6">
<div>
<p className="font-medium text-[#1A1A2E]">Antoine</p>
<p className="text-xs text-[#2D2D2D]/60 mt-1">Accompagné par Élodie</p>
</div>
<div className="flex text-[#C5A55A]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[50vw] lg:min-w-[30vw] flex-shrink-0 snap-center bg-white p-10 rounded-2xl shadow-sm border border-[#1A1A2E]/5">
<div className="text-[#C5A55A] text-5xl font-serif leading-none mb-4">"</div>
<p className="font-serif italic text-lg md:text-xl text-[#2D2D2D] leading-relaxed mb-8">
                        Raphaël nous a guidés pour notre premier investissement locatif à Oullins. Rentabilité au rendez-vous, conseils fiscaux pertinents. On se sent vraiment épaulés sur le long terme.
                    </p>
<div className="flex items-center justify-between border-t border-[#E8E4DF] pt-6">
<div>
<p className="font-medium text-[#1A1A2E]">Claire &amp; Julien</p>
<p className="text-xs text-[#2D2D2D]/60 mt-1">Accompagnés par Raphaël</p>
</div>
<div className="flex text-[#C5A55A]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="flex justify-center md:hidden gap-1 mt-4">
<div className="w-2 h-2 rounded-full bg-[#1A1A2E]"></div>
<div className="w-2 h-2 rounded-full bg-[#1A1A2E]/30"></div>
<div className="w-2 h-2 rounded-full bg-[#1A1A2E]/30"></div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F6F0] overflow-hidden">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16 reveal">
<h2 className="font-serif text-3xl md:text-5xl text-[#1A1A2E] tracking-tight">Une équipe qui connaît chaque rue</h2>
<p className="text-sm text-[#2D2D2D]/70 font-medium mt-4 max-w-xl">L'immobilier, c'est avant tout une histoire de confiance. Découvrez les experts locaux qui s'engagent à vos côtés.</p>
</div>

<div className="flex overflow-x-auto gap-8 snap-x snap-mandatory pb-12 hide-scrollbar reveal delay-200 cursor-grab active:cursor-grabbing">

<div className="min-w-[65vw] sm:min-w-[40vw] md:min-w-[25vw] snap-center group">
<div className="relative w-full aspect-square rounded-full overflow-hidden mb-6 shadow-sm">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-[#1A1A2E]/95 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="w-10 h-10 rounded-full bg-[#C5A55A] text-white flex items-center justify-center mb-3 hover:bg-white hover:text-[#C5A55A] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#1A1A2E] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<div className="text-center px-4">
<h4 className="font-serif text-2xl text-[#1A1A2E] mb-1">Sébastien</h4>
<p className="text-xs text-[#2D2D2D]/80 font-medium leading-relaxed">Fondateur, passionné par le patrimoine lyonnais</p>
</div>
</div>

<div className="min-w-[65vw] sm:min-w-[40vw] md:min-w-[25vw] snap-center group">
<div className="relative w-full aspect-square rounded-full overflow-hidden mb-6 shadow-sm">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1A1A2E]/95 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="w-10 h-10 rounded-full bg-[#C5A55A] text-white flex items-center justify-center mb-3 hover:bg-white hover:text-[#C5A55A] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#1A1A2E] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<div className="text-center px-4">
<h4 className="font-serif text-2xl text-[#1A1A2E] mb-1">Élodie</h4>
<p className="text-xs text-[#2D2D2D]/80 font-medium leading-relaxed">L'écoute et la rigueur au service de votre projet</p>
</div>
</div>

<div className="min-w-[65vw] sm:min-w-[40vw] md:min-w-[25vw] snap-center group">
<div className="relative w-full aspect-square rounded-full overflow-hidden mb-6 shadow-sm">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1A1A2E]/95 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="w-10 h-10 rounded-full bg-[#C5A55A] text-white flex items-center justify-center mb-3 hover:bg-white hover:text-[#C5A55A] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#1A1A2E] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<div className="text-center px-4">
<h4 className="font-serif text-2xl text-[#1A1A2E] mb-1">Romain</h4>
<p className="text-xs text-[#2D2D2D]/80 font-medium leading-relaxed">Spécialiste Tassin &amp; Écully, 8 ans sur le terrain</p>
</div>
</div>

<div className="min-w-[65vw] sm:min-w-[40vw] md:min-w-[25vw] snap-center group">
<div className="relative w-full aspect-square rounded-full overflow-hidden mb-6 shadow-sm">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1A1A2E]/95 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="w-10 h-10 rounded-full bg-[#C5A55A] text-white flex items-center justify-center mb-3 hover:bg-white hover:text-[#C5A55A] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#1A1A2E] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<div className="text-center px-4">
<h4 className="font-serif text-2xl text-[#1A1A2E] mb-1">Victor</h4>
<p className="text-xs text-[#2D2D2D]/80 font-medium leading-relaxed">L'œil aiguisé pour les biens à fort potentiel</p>
</div>
</div>

<div className="min-w-[65vw] sm:min-w-[40vw] md:min-w-[25vw] snap-center group">
<div className="relative w-full aspect-square rounded-full overflow-hidden mb-6 shadow-sm">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1A1A2E]/95 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a className="w-10 h-10 rounded-full bg-[#C5A55A] text-white flex items-center justify-center mb-3 hover:bg-white hover:text-[#C5A55A] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#1A1A2E] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<div className="text-center px-4">
<h4 className="font-serif text-2xl text-[#1A1A2E] mb-1">Raphaël</h4>
<p className="text-xs text-[#2D2D2D]/80 font-medium leading-relaxed">L'expert incontournable en investissement locatif</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1A1A2E]/85"></div>
<div className="relative z-10 text-center px-6 max-w-3xl mx-auto reveal">
<h2 className="font-serif text-4xl md:text-6xl text-white tracking-tight mb-8">Vous vendez ? Estimation gratuite en 24h.</h2>
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#C5A55A] text-[#1A1A2E] font-semibold text-sm rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl mb-6" href="#">
                Demander mon estimation <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<p className="text-white/60 text-xs font-medium tracking-wide uppercase">Sans engagement — Réponse personnalisée par un expert local.</p>
</div>
</section>

<footer className="bg-[#1A1A2E] text-white relative pt-20 pb-10">

<svg className="absolute top-0 left-0 w-full h-12 md:h-16 text-[#1A1A2E] fill-current transform -translate-y-full z-10" preserveaspectratio="none" viewbox="0 0 1440 100">
<path d="M0,0 C360,100 1080,100 1440,0 L1440,100 L0,100 Z"></path>
</svg>
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 reveal">

<div className="md:col-span-5 lg:col-span-4">
<div className="flex flex-col items-start group mb-6">
<span className="font-serif text-3xl text-[#C5A55A] tracking-tighter uppercase leading-none">Hamac</span>
<span className="font-sans text-[0.65rem] text-white/60 tracking-[0.2em] mt-1">Investissements &amp; Patrimoine</span>
</div>
<p className="text-sm text-white/70 font-medium mb-8 leading-relaxed">Votre projet immobilier en toute sérénité dans l'Ouest Lyonnais.</p>
<ul className="space-y-4 text-sm text-white/80 font-medium">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C5A55A] text-lg mt-0.5 flex-shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>19 Boulevard Baron du Marais,<br/>69110 Sainte-Foy-lès-Lyon</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C5A55A] text-lg flex-shrink-0" icon="solar:phone-linear"></iconify-icon>
<span>04 78 XX XX XX</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C5A55A] text-lg flex-shrink-0" icon="solar:letter-linear"></iconify-icon>
<span>contact@hamac-patrimoine.fr</span>
</li>
</ul>
</div>

<div className="md:col-span-7 lg:col-span-6 grid grid-cols-2 gap-8 md:pl-12">
<div>
<h5 className="font-serif text-xl text-white mb-6 tracking-tight">L'Agence</h5>
<ul className="space-y-3 text-sm text-white/60 font-medium">
<li><a className="hover:text-[#C5A55A] transition-colors" href="#">Notre équipe</a></li>
<li><a className="hover:text-[#C5A55A] transition-colors" href="#">La méthode Hamac</a></li>
<li><a className="hover:text-[#C5A55A] transition-colors" href="#">Avis clients</a></li>
<li><a className="hover:text-[#C5A55A] transition-colors" href="#">Nous rejoindre</a></li>
</ul>
</div>
<div>
<h5 className="font-serif text-xl text-white mb-6 tracking-tight">Nos services</h5>
<ul className="space-y-3 text-sm text-white/60 font-medium">
<li><a className="hover:text-[#C5A55A] transition-colors" href="#">Acheter un bien</a></li>
<li><a className="hover:text-[#C5A55A] transition-colors" href="#">Vendre mon bien</a></li>
<li><a className="hover:text-[#C5A55A] transition-colors" href="#">Faire estimer</a></li>
<li><a className="hover:text-[#C5A55A] transition-colors" href="#">Investissement locatif</a></li>
</ul>
</div>
</div>

<div className="md:col-span-12 lg:col-span-2 flex lg:justify-end">
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#C5A55A] hover:bg-[#C5A55A] hover:text-[#1A1A2E] hover:border-transparent transition-all" href="#">
<iconify-icon className="text-lg" icon="carbon:logo-instagram"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#C5A55A] hover:bg-[#C5A55A] hover:text-[#1A1A2E] hover:border-transparent transition-all" href="#">
<iconify-icon className="text-lg" icon="carbon:logo-facebook"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#C5A55A] hover:bg-[#C5A55A] hover:text-[#1A1A2E] hover:border-transparent transition-all" href="#">
<iconify-icon className="text-lg" icon="carbon:logo-linkedin"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 font-medium reveal">
<p>© 2024 Hamac Investissements &amp; Patrimoine. Tous droits réservés.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Mentions légales</a>
<a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a>
<a className="hover:text-white transition-colors" href="#">Honoraires</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
