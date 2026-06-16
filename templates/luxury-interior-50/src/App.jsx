import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // Navbar hide on scroll down, show on scroll up
            let lastScroll = 0;
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset;
                if (currentScroll > lastScroll && currentScroll > 100) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
                lastScroll = currentScroll;
            });

            // Parallax Hero
            gsap.to("#hero-img", {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: "header",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Reveal Text & Elements
            const revealElements = document.querySelectorAll('.gs-reveal');
            revealElements.forEach((elem) => {
                gsap.fromTo(elem, 
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1, 
                        y: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: elem,
                            start: "top 85%",
                        }
                    }
                );
            });

            // Reveal Images (Mask effect)
            const imgReveals = document.querySelectorAll('.gs-img-reveal');
            imgReveals.forEach((img) => {
                gsap.fromTo(img,
                    { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", scale: 1.1 },
                    {
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        scale: 1,
                        duration: 1.5,
                        ease: "power4.inOut",
                        scrollTrigger: {
                            trigger: img,
                            start: "top 80%",
                        }
                    }
                );
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-bg"></div>

<nav className="fixed top-0 w-full z-40 mix-blend-difference px-6 py-8 md:px-12 flex justify-between items-center transition-transform duration-500" id="navbar">
<div className="tracking-[0.2em] text-xs uppercase font-normal text-zinc-50">
            PARAMÉTRIQUE
        </div>
<button className="text-zinc-50 hover:text-zinc-400 transition-colors flex items-center gap-2 group">
<span className="text-xs uppercase tracking-[0.2em] font-light hidden md:block">Menu</span>
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>

<header className="relative min-h-screen flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 pt-40 bg-zinc-950">

<div className="absolute inset-0 z-0 overflow-hidden rounded-b-[20px]">
<img alt="Architecture d'intérieur" className="w-full h-full object-cover object-center opacity-40 scale-105" id="hero-img" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto w-full text-zinc-50">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
<div className="lg:col-span-8">
<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tighter font-light text-balance mb-8 gs-reveal">
                        L’architecture intérieure qui élève la valeur de votre bien.
                    </h1>
</div>
<div className="lg:col-span-4 flex flex-col gap-8 lg:pb-4 gs-reveal">
<p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
                        Nous transformons les volumes, la lumière et les matières pour révéler le potentiel caché de votre espace.<br/><br/>
                        Chaque intervention est pensée pour conjuguer esthétique, durabilité et valorisation patrimoniale.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center bg-zinc-50 text-zinc-950 px-8 py-4 text-xs tracking-widest uppercase font-medium hover:bg-zinc-200 transition-colors w-full sm:w-auto rounded-full" href="#contact">
                            Étude personnalisée
                        </a>
<a className="inline-flex items-center justify-center border border-zinc-700 text-zinc-50 px-8 py-4 text-xs tracking-widest uppercase font-light hover:bg-zinc-900 transition-colors w-full sm:w-auto rounded-full" href="#realisations">
                            Nos réalisations
                        </a>
</div>
</div>
</div>
</div>
</header>

<section className="py-32 md:py-48 px-6 md:px-12 relative">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-6xl tracking-tighter font-light leading-tight mb-16 text-balance text-zinc-900 gs-reveal">
                Rénover, ce n’est pas modifier.<br/>
<span className="text-zinc-500">C’est révéler.</span>
</h2>
<div className="space-y-12 text-zinc-600 font-light text-lg md:text-xl leading-relaxed gs-reveal">
<p className="text-balance">
                    Un plafond parfaitement dessiné.<br/>
                    Un parquet qui structure la pièce.<br/>
                    Des moulures qui redonnent une signature architecturale.
                </p>
<p className="text-balance">
                    Chaque détail compte.<br/>
                    Chaque ligne influe sur la perception.<br/>
                    Chaque finition impacte la valeur de votre bien.
                </p>
<p className="text-zinc-900 text-balance font-normal">
                    Nous ne rénovons pas des surfaces.<br/>
                    Nous redessinons l’expérience d’habiter.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-t border-zinc-200">
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-4 mb-24 gs-reveal">
<span className="w-8 h-[1px] bg-zinc-300"></span>
<span className="text-xs uppercase tracking-[0.2em] font-light text-zinc-500">Nos Expertises</span>
</div>
<div className="space-y-32">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center group">
<div className="lg:col-span-7 order-2 lg:order-1 overflow-hidden rounded-[20px]">
<img alt="Placo sur mesure" className="w-full aspect-[4/3] object-cover gs-img-reveal group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&amp;w=2940&amp;auto=format&amp;fit=crop" style={{clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)'}}/>
</div>
<div className="lg:col-span-5 order-1 lg:order-2 gs-reveal">
<div className="text-zinc-400 text-sm font-light tracking-widest mb-6">01</div>
<h3 className="text-3xl md:text-4xl tracking-tighter font-light text-zinc-900 mb-6">Placo sur mesure</h3>
<ul className="space-y-3 text-zinc-600 font-light mb-10 text-sm md:text-base">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
                                Création de volumes, niches, bibliothèques intégrées, lignes contemporaines.
                            </li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
                                Optimisation thermique et acoustique.
                            </li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
                                Précision millimétrée.
                            </li>
</ul>
<a className="group/btn inline-flex items-center gap-3 text-xs tracking-widest uppercase font-light text-zinc-900 hover:text-zinc-500 transition-colors" href="#">
                            Explorer le sur-mesure
                            <iconify-icon className="group-hover/btn:translate-x-2 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center group">
<div className="lg:col-span-5 gs-reveal">
<div className="text-zinc-400 text-sm font-light tracking-widest mb-6">02</div>
<h3 className="text-3xl md:text-4xl tracking-tighter font-light text-zinc-900 mb-6">Moulures &amp; corniches</h3>
<ul className="space-y-3 text-zinc-600 font-light mb-10 text-sm md:text-base">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
                                Restauration ou création d’éléments architecturaux.
                            </li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
                                Équilibre entre tradition et modernité.
                            </li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
                                Finitions haut de gamme.
                            </li>
</ul>
<a className="group/btn inline-flex items-center gap-3 text-xs tracking-widest uppercase font-light text-zinc-900 hover:text-zinc-500 transition-colors" href="#">
                            Valoriser mon intérieur
                            <iconify-icon className="group-hover/btn:translate-x-2 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="lg:col-span-7 overflow-hidden rounded-[20px]">
<img alt="Moulures &amp; corniches" className="w-full aspect-[4/3] object-cover gs-img-reveal group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=2832&amp;auto=format&amp;fit=crop" style={{clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)'}}/>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center group">
<div className="lg:col-span-7 order-2 lg:order-1 overflow-hidden rounded-[20px]">
<img alt="Parquet" className="w-full aspect-[4/3] object-cover gs-img-reveal group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&amp;w=2787&amp;auto=format&amp;fit=crop" style={{clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)'}}/>
</div>
<div className="lg:col-span-5 order-1 lg:order-2 gs-reveal">
<div className="text-zinc-400 text-sm font-light tracking-widest mb-6">03</div>
<h3 className="text-3xl md:text-4xl tracking-tighter font-light text-zinc-900 mb-6">Parquet</h3>
<ul className="space-y-3 text-zinc-600 font-light mb-10 text-sm md:text-base">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
                                Pose droite, point de Hongrie, bâton rompu.
                            </li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
                                Sélection de bois nobles.
                            </li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
                                Durabilité et élégance intemporelle.
                            </li>
</ul>
<a className="group/btn inline-flex items-center gap-3 text-xs tracking-widest uppercase font-light text-zinc-900 hover:text-zinc-500 transition-colors" href="#">
                            Sublimer mes sols
                            <iconify-icon className="group-hover/btn:translate-x-2 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 text-zinc-50">
<div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
<h2 className="text-4xl md:text-5xl tracking-tighter font-light leading-tight mb-10 gs-reveal">
                Un espace repensé.<br/>
<span className="text-zinc-400">Une valeur qui s’élève.</span>
</h2>
<p className="text-zinc-400 font-light text-base md:text-lg leading-relaxed mb-12 gs-reveal text-balance">
                Une rénovation maîtrisée peut transformer la perception d’un bien et en accroître significativement la valeur.<br/>
                Nous travaillons chaque projet avec une vision patrimoniale : esthétique durable, finitions irréprochables, cohérence architecturale.<br/><br/>
<span className="text-zinc-50 font-normal">Investir dans votre intérieur, c’est investir dans votre capital.</span>
</p>
<div className="gs-reveal">
<a className="inline-flex items-center justify-center bg-zinc-50 text-zinc-950 px-8 py-4 text-xs tracking-widest uppercase font-medium hover:bg-zinc-200 transition-colors rounded-full" href="#contact">
                    Évaluer le potentiel de mon bien
                </a>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row gap-16 lg:gap-32">
<div className="md:w-1/3 gs-reveal">
<h2 className="text-3xl md:text-4xl tracking-tighter font-light text-zinc-900 leading-tight sticky top-32">
                        Une méthode précise.<br/>
<span className="text-zinc-500">Sans compromis.</span>
</h2>
</div>
<div className="md:w-2/3">
<div className="space-y-0">

<div className="group border-t border-zinc-200 py-10 gs-reveal">
<div className="flex gap-8 items-start">
<span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-light mt-1 w-8">01</span>
<div>
<h4 className="text-xl md:text-2xl font-light text-zinc-900 tracking-tight mb-2 group-hover:text-zinc-500 transition-colors">Analyse architecturale de l’espace</h4>
</div>
</div>
</div>

<div className="group border-t border-zinc-200 py-10 gs-reveal">
<div className="flex gap-8 items-start">
<span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-light mt-1 w-8">02</span>
<div>
<h4 className="text-xl md:text-2xl font-light text-zinc-900 tracking-tight mb-2 group-hover:text-zinc-500 transition-colors">Conception sur mesure</h4>
</div>
</div>
</div>

<div className="group border-t border-zinc-200 py-10 gs-reveal">
<div className="flex gap-8 items-start">
<span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-light mt-1 w-8">03</span>
<div>
<h4 className="text-xl md:text-2xl font-light text-zinc-900 tracking-tight mb-2 group-hover:text-zinc-500 transition-colors">Sélection rigoureuse des matériaux</h4>
</div>
</div>
</div>

<div className="group border-t border-zinc-200 py-10 gs-reveal">
<div className="flex gap-8 items-start">
<span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-light mt-1 w-8">04</span>
<div>
<h4 className="text-xl md:text-2xl font-light text-zinc-900 tracking-tight mb-2 group-hover:text-zinc-500 transition-colors">Exécution maîtrisée</h4>
</div>
</div>
</div>

<div className="group border-t border-zinc-200 py-10 gs-reveal">
<div className="flex gap-8 items-start">
<span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-light mt-1 w-8">05</span>
<div>
<h4 className="text-xl md:text-2xl font-light text-zinc-900 tracking-tight mb-2 group-hover:text-zinc-500 transition-colors">Livraison irréprochable</h4>
</div>
</div>
</div>
</div>
<div className="mt-16 gs-reveal">
<a className="group/btn inline-flex items-center gap-3 text-xs tracking-widest uppercase font-light text-zinc-900 hover:text-zinc-500 transition-colors" href="#contact">
                            Planifier un rendez-vous
                            <iconify-icon className="group-hover/btn:translate-x-2 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-zinc-50 bg-zinc-950 w-full pt-32 pb-32" id="realisations">
<div className="max-w-[100rem] mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-8 gs-reveal">
<div>
<h2 className="text-3xl md:text-4xl tracking-tighter font-light leading-tight mb-4">
                    Chaque projet est une signature.
                </h2>
<p className="text-zinc-400 font-light">Chaque réalisation raconte une transformation.</p>
</div>
<a className="group/btn inline-flex items-center gap-3 text-xs tracking-widest uppercase font-light text-zinc-50 hover:text-zinc-300 transition-colors shrink-0 border border-zinc-700 px-6 py-3 rounded-full hover:bg-zinc-800" href="#">
                Voir tous les projets
                <iconify-icon className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>

<div className="flex flex-col md:flex-row gap-6 md:px-12 overflow-x-auto no-scrollbar snap-x snap-mandatory w-full pr-6 pb-12 pl-6 gap-x-6 gap-y-6 [&amp;::-webkit-scrollbar]:hidden" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<div className="min-w-full md:min-w-[60vw] lg:min-w-[50vw] snap-center group cursor-pointer gs-reveal">
<div className="overflow-hidden aspect-[4/3] relative rounded-[20px]">
<img alt="Projet 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2906&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<span className="text-xs uppercase tracking-widest text-white border border-white/50 px-6 py-2 backdrop-blur-sm rounded-full">Découvrir</span>
</div>
</div>
</div>

<div className="min-w-full md:min-w-[60vw] lg:min-w-[50vw] snap-center group cursor-pointer gs-reveal">
<div className="overflow-hidden aspect-[4/3] relative rounded-[20px]">
<img alt="Projet 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<span className="text-xs uppercase tracking-widest text-white border border-white/50 px-6 py-2 backdrop-blur-sm rounded-full">Découvrir</span>
</div>
</div>
</div>

<div className="min-w-full md:min-w-[60vw] lg:min-w-[50vw] snap-center group cursor-pointer gs-reveal">
<div className="overflow-hidden aspect-[4/3] relative rounded-[20px]">
<img alt="Projet 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2900&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<span className="text-xs uppercase tracking-widest text-white border border-white/50 px-6 py-2 backdrop-blur-sm rounded-full">Découvrir</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 relative overflow-hidden">
<iconify-icon className="absolute -right-10 -bottom-10 text-zinc-200/50 z-0" icon="solar:shield-check-linear" width="300"></iconify-icon>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl tracking-tighter font-light mb-12 flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-zinc-900 gs-reveal">
<span>Exigence.</span>
<span className="hidden md:block text-zinc-300">•</span>
<span>Rigueur.</span>
<span className="hidden md:block text-zinc-300">•</span>
<span>Discrétion.</span>
</h2>
<p className="text-zinc-600 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto gs-reveal">
                Nous travaillons avec des particuliers exigeants, des investisseurs et des architectes.<br/>
                Notre priorité : <span className="text-zinc-900">qualité, délais, finitions.</span>
</p>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 bg-zinc-950 text-zinc-50" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
<div className="gs-reveal">
<h2 className="text-4xl md:text-6xl tracking-tighter font-light leading-tight mb-8">
                    Donnez une nouvelle dimension à votre intérieur.
                </h2>
<p className="text-zinc-400 font-light text-lg mb-12">
                    Parlez-nous de votre projet.<br/>
                    Nous vous répondrons avec précision et clarté.
                </p>
<div className="space-y-4 text-sm font-light text-zinc-500">
<p>Paris &amp; Île-de-France</p>
<p><a className="hover:text-zinc-300 transition-colors" href="mailto:contact@parametrique.fr">contact@parametrique.fr</a></p>
</div>
</div>
<div className="gs-reveal">
<form className="space-y-12">
<div className="relative group">
<input className="w-full bg-transparent border-b border-zinc-800 py-4 text-zinc-50 placeholder-transparent focus:border-zinc-400 focus:outline-none transition-colors peer" id="nom" placeholder="Nom" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-zinc-300 font-light tracking-wide" htmlFor="nom">Nom complet</label>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-zinc-800 py-4 text-zinc-50 placeholder-transparent focus:border-zinc-400 focus:outline-none transition-colors peer" id="tel" placeholder="Téléphone" type="tel"/>
<label className="absolute left-0 -top-3.5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-zinc-300 font-light tracking-wide" htmlFor="tel">Téléphone</label>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-zinc-800 py-4 text-zinc-50 placeholder-transparent focus:border-zinc-400 focus:outline-none transition-colors peer" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 -top-3.5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-zinc-300 font-light tracking-wide" htmlFor="email">Email</label>
</div>
<div className="relative group">
<textarea className="w-full bg-transparent border-b border-zinc-800 py-4 text-zinc-50 placeholder-transparent focus:border-zinc-400 focus:outline-none transition-colors peer resize-none" id="projet" placeholder="Description du projet" rows="3"></textarea>
<label className="absolute left-0 -top-3.5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-zinc-300 font-light tracking-wide" htmlFor="projet">Description du projet</label>
</div>
<button className="bg-zinc-50 text-zinc-950 w-full py-5 text-xs tracking-widest uppercase font-medium hover:bg-zinc-200 transition-colors flex justify-center items-center gap-3 group/submit rounded-full" type="button">
                        Recevoir mon étude
                        <iconify-icon className="group-hover/submit:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-zinc-950 pt-24 pb-8 px-6 md:px-12 border-t border-zinc-900 text-zinc-500 text-xs tracking-widest uppercase font-light">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="tracking-[0.2em] text-zinc-50">
                PARAMÉTRIQUE
            </div>
<div className="flex gap-8">
<a className="hover:text-zinc-300 transition-colors" href="#">Mentions légales</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Instagram</a>
<a className="hover:text-zinc-300 transition-colors" href="#">LinkedIn</a>
</div>
<div>
                © 2024.
            </div>
</div>
</footer>



    </>
  );
}
