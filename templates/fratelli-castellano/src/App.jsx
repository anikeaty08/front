import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Smooth Reveal on Scroll
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
        revealOnScroll(); // init

        // Navbar scroll effect
        const nav = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-stone-800/50');
            } else {
                nav.classList.remove('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-stone-800/50');
            }
        });

        // Smooth scroll for anchors
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
<iconify-icon className="text-red-500/80 group-hover:text-red-400 transition-colors duration-500" icon="solar:fire-square-linear" width="24"></iconify-icon>
<span className="serif tracking-[0.2em] text-sm md:text-base font-semibold uppercase">Fratelli</span>
</a>
<div className="hidden md:flex gap-10 text-xs tracking-widest uppercase text-stone-400 font-light">
<a className="nav-link hover:text-stone-100 transition-colors duration-300" href="#about">Histoire &amp; Rue</a>
<a className="nav-link hover:text-stone-100 transition-colors duration-300" href="#menu">Menu</a>
<a className="nav-link hover:text-stone-100 transition-colors duration-300" href="#street-services">Services</a>
<a className="nav-link hover:text-stone-100 transition-colors duration-300" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-3 border border-stone-700/50 rounded-full px-5 py-2 hover:border-red-900/50 hover:bg-red-900/10 transition-all duration-500 group" href="tel:+33145776193">
<span className="text-xs uppercase tracking-widest text-stone-300 group-hover:text-red-100">Commander</span>
<iconify-icon className="text-stone-400 group-hover:text-red-100 transition-colors" icon="solar:phone-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-stone-200" onclick="document.querySelector('.mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>

<div className="mobile-menu hidden fixed inset-0 z-30 bg-black/95 backdrop-blur-md pt-32 px-6 flex-col gap-8 md:hidden">
<button className="absolute top-6 right-6 text-stone-400 hover:text-white" onclick="document.querySelector('.mobile-menu').classList.add('hidden')">
<iconify-icon icon="solar:close-square-linear" width="28"></iconify-icon>
</button>
<a className="text-xl serif tracking-widest text-stone-300 hover:text-red-300" href="#about" onclick="document.querySelector('.mobile-menu').classList.add('hidden')">Histoire &amp; Rue</a>
<a className="text-xl serif tracking-widest text-stone-300 hover:text-red-300" href="#menu" onclick="document.querySelector('.mobile-menu').classList.add('hidden')">Menu</a>
<a className="text-xl serif tracking-widest text-stone-300 hover:text-red-300" href="#street-services" onclick="document.querySelector('.mobile-menu').classList.add('hidden')">Services</a>
<a className="text-xl serif tracking-widest text-stone-300 hover:text-red-300" href="#contact" onclick="document.querySelector('.mobile-menu').classList.add('hidden')">Contact</a>
<a className="mt-8 py-4 text-center border border-red-900/50 text-red-200 tracking-widest uppercase text-xs" href="tel:+33145776193">Appeler &amp; Emporter</a>
</div>

<header className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#050505]">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505] z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-radial-gradient from-red-900/10 to-transparent z-10 opacity-50 pointer-events-none"></div>
<img alt="Ambiance rue Naples" className="w-full h-full object-cover opacity-60 scale-105" src="https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?w=2000&amp;q=80"/>
</div>
<div className="relative z-20 text-center flex flex-col items-center max-w-4xl px-4 mt-16">
<div className="mb-8 opacity-0 animate-[float_6s_ease-in-out_infinite] reveal active" style={{transitionDelay: '200ms'}}>
<div className="w-px h-20 bg-gradient-to-b from-transparent to-red-500/50 mx-auto mb-4"></div>
<iconify-icon className="text-red-500/80 drop-shadow-[0_0_15px_rgba(220,38,38,0.4)]" icon="solar:fire-linear" width="40"></iconify-icon>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-stone-100 leading-none tracking-tighter drop-shadow-lg reveal active mb-6" style={{transitionDelay: '400ms'}}>
                Fratelli
            </h1>
<p className="text-xs md:text-sm text-stone-300 tracking-[0.35em] uppercase font-light mx-auto mb-12 reveal active" style={{transitionDelay: '600ms'}}>
                — Napoli Street Food &amp; Pizzeria —
            </p>
<div className="flex flex-col md:flex-row gap-6 reveal active" style={{transitionDelay: '800ms'}}>
<a className="px-8 py-4 border border-stone-600/50 text-stone-100 text-xs uppercase tracking-[0.2em] hover:bg-stone-100 hover:text-black hover:border-stone-100 transition-all duration-700 ease-out backdrop-blur-sm bg-black/20" href="#menu">
                    Découvrir la carte
                </a>
</div>
</div>
<a className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity animate-bounce duration-[3000ms] cursor-pointer z-20" href="#about">
<span className="text-[10px] uppercase tracking-widest text-stone-400">Descendre</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-stone-400 to-transparent"></div>
</a>
</header>

<section className="relative py-32 md:py-48 px-6 md:px-20 overflow-hidden" id="about">
<div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-red-900/5 to-transparent z-0 pointer-events-none"></div>
<div className="grid md:grid-cols-2 gap-20 items-center relative z-10 max-w-7xl mx-auto">
<div className="space-y-10 reveal">
<span className="text-red-500/80 text-xs tracking-[0.25em] uppercase border-l border-red-500/30 pl-4">Notre Histoire</span>
<h2 className="text-3xl md:text-5xl font-light leading-snug tracking-tight text-stone-200">
                    L'âme de <span className="serif italic text-red-300/80">Naples</span><br/>dans le quinzième
                </h2>
<div className="space-y-6 text-stone-400 font-light leading-relaxed max-w-md">
<p>
                        Chez Fratelli Castellano, la pizza ne se mange pas seulement à table, elle se vit. Inspirés par le brouhaha des ruelles napolitaines, nous ramenons l'authentique street food italienne au cœur de Paris.
                    </p>
<p>
                        Pâte maturée 72 heures, feu de bois porté à 450°C, ingrédients biologiques importés de Campanie. Une pizza cuite en 90 secondes, brûlante, prête à être pliée en quatre (<em>a portafoglio</em>) et mangée sur le pouce, ou savourée dans notre cadre intime de 16 places.
                    </p>
</div>
<div className="flex gap-12 pt-8 border-t border-stone-800/60">
<div>
<p className="text-2xl font-serif text-stone-200">72h</p>
<p className="text-[10px] uppercase tracking-widest text-stone-500 mt-1">Maturation</p>
</div>
<div>
<p className="text-2xl font-serif text-stone-200">450°C</p>
<p className="text-[10px] uppercase tracking-widest text-stone-500 mt-1">Four à bois</p>
</div>
<div>
<p className="text-2xl font-serif text-stone-200">100%</p>
<p className="text-[10px] uppercase tracking-widest text-stone-500 mt-1">Street Vibe</p>
</div>
</div>
</div>
<div className="relative h-[600px] reveal delay-200 group">
<div className="absolute top-10 right-10 w-64 h-80 bg-stone-900 overflow-hidden shadow-2xl z-20 border border-stone-800 transform group-hover:-translate-y-4 transition-transform duration-1000">
<img alt="Four à bois" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700 grayscale-[0.3]" src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-10 left-10 w-72 h-96 bg-stone-800 overflow-hidden shadow-2xl z-10 border border-stone-700 transform group-hover:translate-y-4 transition-transform duration-1000">
<img alt="Trattoria" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4168bac-4328-4140-ae8a-bb52c97c9363_1600w.png"/>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-red-900/10 mix-blend-soft-light pointer-events-none"></div>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 overflow-hidden border-y border-stone-900 bg-[#080808]">
<div className="absolute inset-0 opacity-20">
<img className="w-full h-full object-cover filter grayscale contrast-150" src="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-[#050505]"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center reveal">
<iconify-icon className="text-red-600/70 mb-6" icon="solar:signpost-linear" width="32"></iconify-icon>
<h2 className="serif text-4xl md:text-7xl text-stone-100 tracking-tight mb-6 uppercase">FORZA NAPOLI</h2>
<p className="text-sm text-stone-400 font-light max-w-xl mx-auto leading-relaxed">
                Pas de compromis, que de l'amour et du temps. La passion du football, le bruit des scooters, la chaleur du four à bois. C'est ça, l'esprit de la rue.
            </p>
</div>
</section>

<section className="py-32 relative" id="menu">
<div className="max-w-4xl mx-auto px-6 md:px-12">
<div className="text-center mb-20 reveal">
<span className="text-red-500/80 text-xs tracking-[0.25em] uppercase mb-4 block">La Carta — Avril 2025</span>
<h2 className="text-4xl md:text-6xl text-stone-100 tracking-tight serif">Nos Pizze</h2>
</div>

<div className="mb-24 reveal">
<div className="mb-10 border-b border-stone-800 pb-4">
<h3 className="serif text-2xl md:text-3xl text-stone-200">Per Amore Della Creazione</h3>
<p className="text-xs text-stone-500 font-light tracking-[0.15em] uppercase mt-2">Nos créations originales</p>
</div>
<div className="space-y-6 glass-panel p-6 md:p-10 rounded-sm">
<div className="flex flex-col md:flex-row justify-between md:items-end gap-1 md:gap-4 border-b border-stone-800/50 pb-3 group">
<div className="flex-grow">
<span className="block text-stone-200 font-serif text-lg group-hover:text-red-200 transition-colors">Totò <span className="text-[10px] tracking-widest uppercase text-red-500/70 ml-2">Populaire</span></span>
<span className="block text-stone-400 text-xs font-light mt-1">Pesto à la pistache maison, mortadella AOC, burrata AOC, tarallo napolitain</span>
</div>
<span className="text-stone-300 font-serif md:text-right mt-2 md:mt-0">23€</span>
</div>
<div className="flex flex-col md:flex-row justify-between md:items-end gap-1 md:gap-4 border-b border-stone-800/50 pb-3 group">
<div className="flex-grow">
<span className="block text-stone-200 font-serif text-lg group-hover:text-red-200 transition-colors">Castellano's <span className="text-[10px] tracking-widest uppercase text-stone-500 ml-2">Base Blanche</span></span>
<span className="block text-stone-400 text-xs font-light mt-1">Tomates cerises, mozzarella Fior di Latte d'Agerola, jambon de Parme, roquette, huile d'olive bio</span>
</div>
<span className="text-stone-300 font-serif md:text-right mt-2 md:mt-0">17€</span>
</div>
<div className="flex flex-col md:flex-row justify-between md:items-end gap-1 md:gap-4 border-b border-stone-800/50 pb-3 group">
<div className="flex-grow">
<span className="block text-stone-200 font-serif text-lg group-hover:text-red-200 transition-colors">Al Pesto</span>
<span className="block text-stone-400 text-xs font-light mt-1">Mozzarella Fior di Latte d'Agerola, pesto au basilic fait maison, pignons de pin, tomates cerises</span>
</div>
<span className="text-stone-300 font-serif md:text-right mt-2 md:mt-0">19€</span>
</div>
<div className="flex flex-col md:flex-row justify-between md:items-end gap-1 md:gap-4 border-b border-stone-800/50 pb-3 group">
<div className="flex-grow">
<span className="block text-stone-200 font-serif text-lg group-hover:text-red-200 transition-colors">San Gennaro <span className="text-[10px] tracking-widest uppercase text-stone-500 ml-2">Base Blanche</span></span>
<span className="block text-stone-400 text-xs font-light mt-1">Fior di Latte d'Agerola, saucisse italienne, friarielli frais, huile d'olive bio</span>
</div>
<span className="text-stone-300 font-serif md:text-right mt-2 md:mt-0">21€</span>
</div>
<div className="flex flex-col md:flex-row justify-between md:items-end gap-1 md:gap-4 border-b border-stone-800/50 pb-3 group">
<div className="flex-grow">
<span className="block text-stone-200 font-serif text-lg group-hover:text-red-200 transition-colors">Ripieno a Modo Mio <span className="text-[10px] tracking-widest uppercase text-stone-500 ml-2">Calzone</span></span>
<span className="block text-stone-400 text-xs font-light mt-1">Ricotta italienne, jambon blanc Casa Modena DOP, basilic bio, huile d'olive</span>
</div>
<span className="text-stone-300 font-serif md:text-right mt-2 md:mt-0">17€</span>
</div>
<div className="flex flex-col md:flex-row justify-between md:items-end gap-1 md:gap-4 border-b border-stone-800/50 pb-3 group">
<div className="flex-grow">
<span className="block text-stone-200 font-serif text-lg group-hover:text-red-200 transition-colors">Vegetariana</span>
<span className="block text-stone-400 text-xs font-light mt-1">Légumes frais du marché, tomates San Marzano DOP, mozzarella Fior di Latte d'Agerola, olives, origan</span>
</div>
<span className="text-stone-300 font-serif md:text-right mt-2 md:mt-0">16€</span>
</div>
<div className="flex flex-col md:flex-row justify-between md:items-end gap-1 md:gap-4 border-b border-stone-800/50 pb-3 group">
<div className="flex-grow">
<span className="block text-stone-200 font-serif text-lg group-hover:text-red-200 transition-colors">Piccante</span>
<span className="block text-stone-400 text-xs font-light mt-1">Tomates San Marzano DOP, spianata calabra DOP, mozzarella Fior di Latte d'Agerola, basilic bio</span>
</div>
<span className="text-stone-300 font-serif md:text-right mt-2 md:mt-0">18€</span>
</div>
<div className="flex flex-col md:flex-row justify-between md:items-end gap-1 md:gap-4 group">
<div className="flex-grow">
<span className="block text-stone-200 font-serif text-lg group-hover:text-red-200 transition-colors">Bresaolina <span className="text-[10px] tracking-widest uppercase text-stone-500 ml-2">Base Blanche</span></span>
<span className="block text-stone-400 text-xs font-light mt-1">Mozzarella Fior di Latte d'Agerola, bresaola, tomates cerises, roquette, huile d'olive bio</span>
</div>
<span className="text-stone-300 font-serif md:text-right mt-2 md:mt-0">18€</span>
</div>
</div>
</div>

<div className="mb-24 reveal delay-100">
<div className="mb-10 border-b border-stone-800 pb-4">
<h3 className="serif text-2xl md:text-3xl text-stone-200">Per Amore Della Tradizione</h3>
<p className="text-xs text-stone-500 font-light tracking-[0.15em] uppercase mt-2">Les classiques napolitaines</p>
</div>
<div className="space-y-6 glass-panel p-6 md:p-10 rounded-sm">
<div className="flex flex-col md:flex-row justify-between md:items-end gap-1 md:gap-4 border-b border-stone-800/50 pb-3 group">
<div className="flex-grow">
<span className="block text-stone-200 font-serif text-lg group-hover:text-red-200 transition-colors">Capricciosa</span>
<span className="block text-stone-400 text-xs font-light mt-1">Tomates San Marzano DOP, jambon blanc Casa Modena DOP, olives Gaeta bio, champignons et artichauts frais</span>
</div>
<span className="text-stone-300 font-serif md:text-right mt-2 md:mt-0">18€</span>
</div>
<div className="flex flex-col md:flex-row justify-between md:items-end gap-1 md:gap-4 border-b border-stone-800/50 pb-3 group">
<div className="flex-grow">
<span className="block text-stone-200 font-serif text-lg group-hover:text-red-200 transition-colors">Napoli Napoli Napoli</span>
<span className="block text-stone-400 text-xs font-light mt-1">Tomates San Marzano DOP, anchois de Cetara, olives bio, huile d'olive</span>
</div>
<span className="text-stone-300 font-serif md:text-right mt-2 md:mt-0">16€</span>
</div>
<div className="flex flex-col md:flex-row justify-between md:items-end gap-1 md:gap-4 border-b border-stone-800/50 pb-3 group">
<div className="flex-grow">
<span className="block text-stone-200 font-serif text-lg group-hover:text-red-200 transition-colors">Regina</span>
<span className="block text-stone-400 text-xs font-light mt-1">Tomates San Marzano DOP, jambon blanc Casa Modena DOP, champignons frais, mozzarella Fior di Latte d'Agerola</span>
</div>
<span className="text-stone-300 font-serif md:text-right mt-2 md:mt-0">17€</span>
</div>
<div className="flex flex-col md:flex-row justify-between md:items-end gap-1 md:gap-4 border-b border-stone-800/50 pb-3 group">
<div className="flex-grow">
<span className="block text-stone-200 font-serif text-lg group-hover:text-red-200 transition-colors">Margherita di Davide</span>
<span className="block text-stone-400 text-xs font-light mt-1">Sauce tomate San Marzano DOP, mozzarella Fior di Latte d'Agerola, huile d'olive bio, basilic frais</span>
</div>
<span className="text-stone-300 font-serif md:text-right mt-2 md:mt-0">14€</span>
</div>
<div className="flex flex-col md:flex-row justify-between md:items-end gap-1 md:gap-4 group">
<div className="flex-grow">
<span className="block text-stone-200 font-serif text-lg group-hover:text-red-200 transition-colors">Cinque Formaggi</span>
<span className="block text-stone-400 text-xs font-light mt-1">Fior di Latte d'Agerola, Provola del Monaco, Gorgonzola Colombo DOP, Parmigiano Reggiano DOP 24 mois, ricotta</span>
</div>
<span className="text-stone-300 font-serif md:text-right mt-2 md:mt-0">18€</span>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-10 reveal delay-200">

<div>
<div className="mb-8 border-b border-stone-800 pb-4">
<h3 className="serif text-xl md:text-2xl text-stone-200">Le Altre</h3>
<p className="text-[10px] text-stone-500 font-light tracking-[0.15em] uppercase mt-2">Les autres pizze &amp; classiques</p>
</div>
<div className="space-y-5 glass-panel p-6 rounded-sm">
<div className="flex justify-between items-end border-b border-stone-800/50 pb-2 group">
<div className="flex-grow pr-4">
<span className="block text-stone-200 font-serif text-base group-hover:text-red-200">Marinara Sbagliata</span>
<span className="block text-stone-400 text-[10px] mt-1">San Marzano, ail, origan, huile d'olive bio</span>
</div>
<span className="text-stone-300 font-serif text-sm">15€</span>
</div>
<div className="flex justify-between items-end border-b border-stone-800/50 pb-2 group">
<div className="flex-grow pr-4">
<span className="block text-stone-200 font-serif text-base group-hover:text-red-200">Marinara XV</span>
</div>
<span className="text-stone-300 font-serif text-sm">9€</span>
</div>
<div className="flex justify-between items-end border-b border-stone-800/50 pb-2 group">
<div className="flex-grow pr-4">
<span className="block text-stone-200 font-serif text-base group-hover:text-red-200">Verace</span>
<span className="block text-stone-400 text-[10px] mt-1">San Marzano, Fior di Latte, basilic bio</span>
</div>
<span className="text-stone-300 font-serif text-sm">17€</span>
</div>
<div className="flex justify-between items-end border-b border-stone-800/50 pb-2 group">
<div className="flex-grow pr-4">
<span className="block text-stone-200 font-serif text-base group-hover:text-red-200">Maradona Limitè</span>
<span className="block text-stone-400 text-[10px] mt-1">Crème truffe noire, jambon, stracciatella</span>
</div>
<span className="text-stone-300 font-serif text-sm">24€</span>
</div>
<div className="flex justify-between items-end group">
<div className="flex-grow pr-4">
<span className="block text-stone-200 font-serif text-base group-hover:text-red-200">Focaccia <span className="text-[10px] tracking-widest text-stone-500 ml-1">Pain</span></span>
</div>
<span className="text-stone-300 font-serif text-sm">8€</span>
</div>
</div>
</div>

<div>
<div className="mb-8 border-b border-stone-800 pb-4">
<h3 className="serif text-xl md:text-2xl text-stone-200">Dolci &amp; Bevande</h3>
<p className="text-[10px] text-stone-500 font-light tracking-[0.15em] uppercase mt-2">Boissons &amp; Desserts</p>
</div>
<div className="space-y-5 glass-panel p-6 rounded-sm">
<div className="flex justify-between items-end border-b border-stone-800/50 pb-2">
<span className="block text-stone-300 font-light text-sm">Acqua Minerale</span>
<span className="text-stone-400 font-serif text-sm">3€</span>
</div>
<div className="flex justify-between items-end border-b border-stone-800/50 pb-2">
<span className="block text-stone-300 font-light text-sm">Sodas (Coca, Fanta, Sprite)</span>
<span className="text-stone-400 font-serif text-sm">3€</span>
</div>
<div className="flex justify-between items-end border-b border-stone-800/50 pb-2">
<span className="block text-stone-300 font-light text-sm">Birra Moretti / Peroni</span>
<span className="text-stone-400 font-serif text-sm">5€</span>
</div>
<div className="flex justify-between items-end border-b border-stone-800/50 pb-2">
<span className="block text-stone-300 font-light text-sm">Vino Rosso</span>
<span className="text-stone-400 font-serif text-sm">5€</span>
</div>
<div className="flex justify-between items-end border-b border-stone-800/50 pb-2">
<span className="block text-stone-300 font-light text-sm">Limoncello <i className="text-[10px] text-stone-500">Maison</i></span>
<span className="text-stone-400 font-serif text-sm">5€</span>
</div>
<div className="flex justify-between items-end border-b border-stone-800/50 pb-2">
<span className="block text-stone-300 font-light text-sm">Caffè Espresso</span>
<span className="text-stone-400 font-serif text-sm">2€</span>
</div>
<div className="flex justify-between items-end">
<span className="block text-stone-300 font-light text-sm">Tiramisu <i className="text-[10px] text-stone-500">Maison</i></span>
<span className="text-stone-400 font-serif text-sm">7€</span>
</div>
</div>
</div>
</div>

<div className="mt-12 text-center border border-stone-800/50 bg-stone-900/20 py-4 px-6 rounded-sm reveal">
<p className="text-xs text-stone-400 font-light">
                    Suppléments : Charcuteries +3€ · Légumes +2€ · Fromages +3€ · Filets de thon +3€
                </p>
</div>
</div>
</section>

<section className="py-32 bg-[#080808] border-y border-stone-900" id="street-services">
<div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
<div className="reveal mb-16">
<span className="text-red-500/80 text-xs tracking-[0.25em] uppercase mb-4 block">Vivez l'expérience</span>
<h3 className="serif text-3xl md:text-5xl text-stone-200 font-light">Sur le pouce ou à table</h3>
</div>
<div className="grid md:grid-cols-3 gap-8 reveal delay-100">

<div className="bg-stone-900/40 border border-stone-800 p-10 rounded-sm hover:border-red-900/50 transition-colors group">
<div className="w-16 h-16 mx-auto bg-black rounded-full border border-stone-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-red-500" icon="solar:box-minimalistic-linear" width="28"></iconify-icon>
</div>
<h4 className="serif text-xl text-stone-200 mb-3">À Emporter</h4>
<p className="text-sm text-stone-400 font-light leading-relaxed">
                        L'essence même de Naples. Commandez, récupérez votre pizza brûlante et dégustez-la <em>a portafoglio</em> en marchant dans Paris.
                    </p>
</div>

<div className="bg-stone-900/40 border border-stone-800 p-10 rounded-sm hover:border-red-900/50 transition-colors group">
<div className="w-16 h-16 mx-auto bg-black rounded-full border border-stone-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-red-500" icon="solar:chair-linear" width="28"></iconify-icon>
</div>
<h4 className="serif text-xl text-stone-200 mb-3">Sur Place</h4>
<p className="text-sm text-stone-400 font-light leading-relaxed">
                        Un cadre sombre, intime et chaleureux avec 16 places assises seulement. Sentez la chaleur du four à bois et l'arôme de la pâte maturée.
                    </p>
</div>

<div className="bg-stone-900/40 border border-stone-800 p-10 rounded-sm hover:border-red-900/50 transition-colors group">
<div className="w-16 h-16 mx-auto bg-black rounded-full border border-stone-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-red-500" icon="solar:scooter-linear" width="28"></iconify-icon>
</div>
<h4 className="serif text-xl text-stone-200 mb-3">Livraison</h4>
<p className="text-sm text-stone-400 font-light leading-relaxed">
                        Naples s'invite chez vous. Disponible via Uber Eats pour une livraison rapide et soignée dans tout le 15e arrondissement.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#050505] overflow-hidden" id="contact">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-start relative z-10">
<div className="reveal">
<h2 className="text-4xl md:text-6xl serif text-stone-100 mb-6">Buon Appetito</h2>
<p className="text-stone-400 font-light leading-relaxed text-lg mb-10 max-w-lg">
                    L'odeur du feu de bois vous guidera. Passez prendre une pizza, ou asseyez-vous un instant.
                </p>
<div className="w-16 h-[1px] bg-red-900/50 mb-10"></div>
<div className="space-y-8 text-stone-300 font-light">

<div className="flex items-start gap-5 group">
<div className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center shrink-0 group-hover:border-red-500 transition-colors bg-black">
<iconify-icon className="text-red-500" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-[10px] uppercase tracking-widest text-stone-500 mb-1">Notre repaire</span>
<p className="text-base text-stone-300">43 Rue Fondary<br/>75015 Paris</p>
</div>
</div>

<div className="flex items-start gap-5 group">
<div className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center shrink-0 group-hover:border-red-500 transition-colors bg-black">
<iconify-icon className="text-red-500" icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-[10px] uppercase tracking-widest text-stone-500 mb-1">Commandes &amp; Réservations</span>
<a className="text-base hover:text-red-300 transition-colors" href="tel:+33145776193">+33 1 45 77 61 93</a>
</div>
</div>

<div className="flex items-start gap-5 group">
<div className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center shrink-0 group-hover:border-red-500 transition-colors bg-black">
<iconify-icon className="text-red-500" icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-[10px] uppercase tracking-widest text-stone-500 mb-1">Horaires</span>
<div className="space-y-1 text-sm text-stone-300">
<div className="flex justify-between gap-8"><span className="text-stone-500">Lun – Mar</span><span>Fermé</span></div>
<div className="flex justify-between gap-8"><span className="text-stone-500">Mer – Dim</span><span>12h–14h30</span></div>
<div className="flex justify-between gap-8"><span></span><span>19h–22h30</span></div>
</div>
</div>
</div>
</div>
<div className="mt-12 flex items-center gap-3">
<span className="text-xs text-stone-500 uppercase tracking-widest">Aussi sur</span>
<span className="text-sm font-medium text-stone-300 border border-stone-800 px-4 py-1.5 rounded-full bg-stone-900/30">Uber Eats</span>
</div>
</div>

<div className="bg-stone-900/40 p-8 md:p-10 border border-stone-800 rounded-sm backdrop-blur-sm reveal delay-200 shadow-2xl relative">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-xl serif text-stone-200">Rejoignez-nous</h3>
<p className="text-sm text-stone-400 font-light mt-1">Au cœur du 15e</p>
</div>
<iconify-icon className="text-red-500" icon="solar:routing-2-linear" width="28"></iconify-icon>
</div>
<a className="block relative w-full h-64 border border-stone-700 overflow-hidden group rounded-sm" href="https://www.google.com/maps/dir/?api=1&amp;destination=43+Rue+Fondary+75015+Paris" target="_blank">
<img alt="Carte" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 filter sepia-[0.2] hue-rotate-[-10deg]" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-full bg-black/90 backdrop-blur-md border border-red-500/50 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-red-900/80 transition-all duration-500 shadow-[0_0_20px_rgba(220,38,38,0.2)]">
<iconify-icon icon="solar:arrow-right-up-linear" width="26"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 flex justify-center">
<span className="bg-black/80 px-4 py-2 text-[10px] uppercase tracking-widest text-stone-300 border border-stone-700/50 backdrop-blur-sm group-hover:border-red-900/50 transition-colors">
                            Itinéraire
                        </span>
</div>
</a>
</div>
</div>
</section>

<footer className="bg-[#020202] pt-24 pb-12 px-6 md:px-12 border-t border-stone-900">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col items-center mb-16 text-center">
<iconify-icon className="text-red-900 mb-6" icon="solar:fire-square-linear" width="32"></iconify-icon>
<a className="serif text-3xl md:text-4xl tracking-[0.1em] text-stone-200 uppercase mb-4" href="#">Fratelli</a>
<p className="text-stone-500 text-sm font-light leading-relaxed max-w-sm">
                    Street food &amp; Pizzeria napolitaine.<br/>Fatto con amore 🇮🇹
                </p>
<div className="flex gap-6 mt-8">
<a className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-500 hover:text-red-300 hover:border-red-900 transition-all" href="https://www.instagram.com/fratellicastellano" target="_blank">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-500 hover:text-red-300 hover:border-red-900 transition-all" href="https://www.facebook.com/fratellicastellano" target="_blank">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-900/50">
<p className="text-stone-700 text-[10px] tracking-widest uppercase mb-4 md:mb-0">© 2025 Fratelli Castellano. Tous droits réservés.</p>
<div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-stone-700">
<span>Espèces</span>
<span>·</span>
<span>CB</span>
<span>·</span>
<span>Tickets Resto</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
