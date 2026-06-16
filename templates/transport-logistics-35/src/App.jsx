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
            
            // 1. Navbar Scroll Effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-zinc-950/95', 'backdrop-blur-md', 'py-4', 'border-b', 'border-white/5', 'shadow-sm');
                    navbar.classList.remove('bg-transparent', 'py-6');
                } else {
                    navbar.classList.remove('bg-zinc-950/95', 'backdrop-blur-md', 'py-4', 'border-b', 'border-white/5', 'shadow-sm');
                    navbar.classList.add('bg-transparent', 'py-6');
                }
            });

            // 2. Mobile Menu Toggle
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            let isMenuOpen = false;
            
            const toggleMenu = () => {
                isMenuOpen = !isMenuOpen;
                if (isMenuOpen) {
                    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
                    navbar.classList.add('bg-zinc-950');
                } else {
                    mobileMenu.style.maxHeight = '0px';
                    if (window.scrollY <= 50) navbar.classList.remove('bg-zinc-950');
                }
            };

            mobileMenuBtn.addEventListener('click', toggleMenu);
            mobileLinks.forEach(link => {
                link.addEventListener('click', toggleMenu);
            });

            // 3. Scroll Animations (Intersection Observer)
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Remove initial states to trigger Tailwind transitions
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('[data-animate]').forEach(el => {
                observer.observe(el);
            });

            // 4. Counters Animation
            const counters = document.querySelectorAll('.counter');
            let hasAnimated = false;

            const counterObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        const duration = 2000;
                        const increment = target / (duration / 16);
                        let current = 0;
                        
                        const updateCounter = () => {
                            current += increment;
                            if (current < target) {
                                counter.innerText = Math.ceil(current);
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.innerText = target;
                            }
                        };
                        updateCounter();
                    });
                }
            }, { threshold: 0.5 });

            const statsSection = document.getElementById('stats');
            if (statsSection) counterObserver.observe(statsSection);

            // 5. FAQ Accordion
            const faqBtns = document.querySelectorAll('.faq-btn');
            
            faqBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const content = btn.nextElementSibling;
                    const icon = btn.querySelector('.faq-icon');
                    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
                    
                    // Close all others
                    document.querySelectorAll('.faq-content').forEach(c => {
                        c.style.maxHeight = '0px';
                        c.previousElementSibling.querySelector('.faq-icon').classList.remove('rotate-180', 'text-[#FF6B00]');
                        c.previousElementSibling.classList.remove('text-[#FF6B00]');
                    });
                    
                    // Open current if it was closed
                    if (!isOpen) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        icon.classList.add('rotate-180', 'text-[#FF6B00]');
                        btn.classList.add('text-[#FF6B00]');
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
<a className="text-xl md:text-2xl font-semibold tracking-tighter text-white uppercase flex items-center gap-1" href="#accueil">
                TRANSPRO<span className="text-[#FF6B00]">SOLUTIONS</span>
</a>
<button className="md:hidden text-white flex items-center justify-center p-2 rounded-md hover:bg-white/10 transition-colors" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
<li><a className="hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] hover:after:w-full after:transition-all after:duration-300" href="#accueil">Accueil</a></li>
<li><a className="hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] hover:after:w-full after:transition-all after:duration-300" href="#services">Services</a></li>
<li className=""><a className="hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] hover:after:w-full after:transition-all after:duration-300" href="#vehicules">Véhicules</a></li>
<li className=""><a className="hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] hover:after:w-full after:transition-all after:duration-300" href="#devis">Devis</a></li>
<li><a className="hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] hover:after:w-full after:transition-all after:duration-300" href="#contact">Contact</a></li>
</ul>
</div>

<div className="absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 overflow-hidden transition-all duration-300 max-h-0 flex flex-col md:hidden" id="mobile-menu">
<ul className="px-6 py-4 flex flex-col gap-4 text-sm font-medium text-white/80">
<li><a className="mobile-link block py-2 hover:text-[#FF6B00] transition-colors" href="#accueil">Accueil</a></li>
<li><a className="mobile-link block py-2 hover:text-[#FF6B00] transition-colors" href="#services">Services</a></li>
<li><a className="mobile-link block py-2 hover:text-[#FF6B00] transition-colors" href="#vehicules">Véhicules</a></li>
<li><a className="mobile-link block py-2 hover:text-[#FF6B00] transition-colors" href="#devis">Devis</a></li>
<li><a className="mobile-link block py-2 hover:text-[#FF6B00] transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
</header>

<section className="relative h-screen min-h-[600px] flex items-center justify-center text-center px-6 bg-[linear-gradient(to_bottom,rgba(9,9,11,0.5),rgba(9,9,11,0.9)),url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80')] bg-cover bg-center bg-fixed" id="accueil">
<div className="max-w-4xl mx-auto pt-20">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 transition-all duration-1000 ease-out" data-animate="">
                Votre Partenaire de Transport en France et en Europe
            </h1>
<p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto font-normal transition-all duration-1000 delay-200 ease-out" data-animate="">
                Livraison rapide, fiable et sécurisée — De Lille vers toute l'Europe
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-300 ease-out" data-animate="">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FF6B00] text-white text-sm font-medium hover:bg-[#e56000] hover:-translate-y-0.5 shadow-lg shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/40 transition-all ring-1 ring-[#FF6B00]" href="#devis">
                    Demander un devis
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 text-white border border-white/20 text-sm font-medium hover:bg-white hover:text-zinc-950 hover:-translate-y-0.5 transition-all" href="#contact">
                    Nous contacter
                </a>
</div>
</div>
</section>

<section className="py-16 md:py-20 bg-zinc-950 border-b border-zinc-900 relative z-10 -mt-10" id="stats">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
<div className="transition-all duration-700 ease-out" data-animate="">
<div className="md:text-5xl text-4xl font-semibold text-[#FF6B00] tracking-tight mb-2"><span className="counter" data-target="500">4</span></div>
<p className="text-sm font-medium text-zinc-400 uppercase tracking-widest">Livraisons</p>
</div>
<div className="transition-all duration-700 delay-100 ease-out" data-animate="">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-[#FF6B00] mb-2"><span className="counter" data-target="20">1</span></div>
<p className="text-sm font-medium text-zinc-400 uppercase tracking-widest">Pays desservis</p>
</div>
<div className="transition-all duration-700 delay-200 ease-out" data-animate="">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-[#FF6B00] mb-2"><span className="counter" data-target="98">1</span>%</div>
<p className="text-sm font-medium text-zinc-400 uppercase tracking-widest">Clients satisfaits</p>
</div>
<div className="transition-all duration-700 delay-300 ease-out" data-animate="">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-[#FF6B00] mb-2">+<span className="counter" data-target="10">1</span></div>
<p className="text-sm font-medium text-zinc-400 uppercase tracking-widest">Ans d'expérience</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950" id="services">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16 transition-all duration-700 ease-out" data-animate="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Nos Services</h2>
<div className="w-12 h-1 bg-[#FF6B00] mx-auto mt-6 rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-zinc-900/50 p-8 lg:p-10 rounded-2xl border border-zinc-800/50 hover:border-[#FF6B00]/30 hover:bg-zinc-900 transition-all duration-300 group ease-out" data-animate="">
<div className="w-14 h-14 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] mb-6 group-hover:scale-110 group-hover:bg-[#FF6B00]/20 transition-all duration-300">
<iconify-icon icon="solar:box-linear" style={{fontSize: '28px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Transport de marchandises lourdes</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Solution adaptée pour le fret volumineux avec notre flotte de camions poids lourds sécurisés pour les longues distances.</p>
</div>

<div className="bg-zinc-900/50 p-8 lg:p-10 rounded-2xl border border-zinc-800/50 hover:border-[#FF6B00]/30 hover:bg-zinc-900 transition-all duration-300 group ease-out" data-animate="">
<div className="w-14 h-14 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] mb-6 group-hover:scale-110 group-hover:bg-[#FF6B00]/20 transition-all duration-300">
<iconify-icon icon="solar:routing-2-linear" style={{fontSize: '28px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Livraison express</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Service rapide via nos utilitaires dédiés pour vos colis urgents partout en Europe, avec suivi en temps réel.</p>
</div>

<div className="bg-zinc-900/50 p-8 lg:p-10 rounded-2xl border border-zinc-800/50 hover:border-[#FF6B00]/30 hover:bg-zinc-900 transition-all duration-300 group ease-out" data-animate="">
<div className="w-14 h-14 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] mb-6 group-hover:scale-110 group-hover:bg-[#FF6B00]/20 transition-all duration-300">
<iconify-icon icon="solar:document-text-linear" style={{fontSize: '28px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Transport léger &amp; courses</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Pour vos petits colis ou documents importants nécessitant une remise en main propre immédiate et confidentielle.</p>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-white border-zinc-100 border-t pt-24 pb-24" id="vehicules">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16 transition-all duration-700 ease-out" data-animate="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">Notre Flotte</h2>
<div className="w-12 h-1 bg-[#FF6B00] mx-auto mt-6 rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative rounded-2xl overflow-hidden h-[400px] group cursor-pointer transition-all duration-700 ease-out" data-animate="">
<img alt="Camion Poids Lourd" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/608791e7-9f6b-4eb9-88a4-933c308ecf7d_800w.jpg"/>
<div className="flex bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-end">
<h3 className="text-2xl font-semibold tracking-tight text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Poids Lourd</h3>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden h-[400px] group cursor-pointer transition-all duration-700 ease-out" data-animate="">
<img alt="Utilitaire Express" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00bf1b1b-12c9-40cc-9e4a-68d2cf277dad_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent flex items-end p-8">
<h3 className="text-2xl font-semibold tracking-tight text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Utilitaire Express</h3>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden h-[400px] group cursor-pointer transition-all duration-700 ease-out" data-animate="">
<img alt="Voiture de transport" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf4baf1f-85c0-4168-978d-5df8e3d9c332_800w.jpg"/>
<div className="flex bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-end">
<h3 className="text-2xl font-semibold tracking-tight text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Véhicule Léger</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-50 border-t border-zinc-100" id="engagements">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16 transition-all duration-700 ease-out" data-animate="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">Nos Engagements</h2>
<div className="w-12 h-1 bg-[#FF6B00] mx-auto mt-6 rounded-full"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300 text-center ease-out" data-animate="">
<iconify-icon className="text-4xl text-[#FF6B00] mb-5" icon="solar:bolt-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-950 mb-2">Rapidité</h3>
<p className="text-sm text-zinc-500">Livraison dans les délais garantis, sans détours inutiles.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300 text-center ease-out" data-animate="">
<iconify-icon className="text-4xl text-[#FF6B00] mb-5" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-950 mb-2">Sécurité</h3>
<p className="text-sm text-zinc-500">Vos marchandises sont entre de bonnes mains et assurées.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300 text-center ease-out" data-animate="">
<iconify-icon className="text-4xl text-[#FF6B00] mb-5" icon="solar:map-point-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-950 mb-2">Ponctualité</h3>
<p className="text-sm text-zinc-500">Respect des horaires convenus avec une précision maximale.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300 text-center ease-out" data-animate="">
<iconify-icon className="text-4xl text-[#FF6B00] mb-5" icon="solar:phone-calling-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-950 mb-2">Disponibilité</h3>
<p className="text-sm text-zinc-500">Une équipe joignable 7j/7 pour tous vos besoins urgents.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative bg-[linear-gradient(to_bottom,rgba(9,9,11,0.9),rgba(9,9,11,0.95)),url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80')] bg-cover bg-center text-center" id="zone">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6 transition-all duration-700 ease-out" data-animate="">Zone d'intervention</h2>
<p className="text-lg text-zinc-400 mb-12 transition-all duration-700 delay-100 ease-out" data-animate="">
                Basés à Lille, carrefour stratégique européen, nous intervenons partout en France et desservons l'ensemble des pays de l'UE avec une efficacité optimale.
            </p>
<div className="flex flex-wrap justify-center gap-3 md:gap-4 transition-all duration-700 delay-200 ease-out" data-animate="">
<span className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-zinc-950 transition-colors cursor-default">🇫🇷 France</span>
<span className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-zinc-950 transition-colors cursor-default">🇧🇪 Belgique</span>
<span className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-zinc-950 transition-colors cursor-default">🇳🇱 Pays-Bas</span>
<span className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-zinc-950 transition-colors cursor-default">🇩🇪 Allemagne</span>
<span className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-zinc-950 transition-colors cursor-default">🇬🇧 Angleterre</span>
<span className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-zinc-950 transition-colors cursor-default">🇪🇸 Espagne</span>
<span className="px-5 py-2.5 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/50 text-[#FF6B00] text-sm font-medium cursor-default">Et bien plus...</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white relative" id="devis">

<div className="absolute top-0 left-0 w-full h-1/2 bg-[#FF6B00] z-0"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-12 transition-all duration-700 ease-out" data-animate="">
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight">Demande de Devis Rapide</h2>
</div>
<form className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-zinc-100 transition-all duration-700 delay-100 ease-out" data-animate="" onsubmit="event.preventDefault(); alert('Votre demande a bien été envoyée ! Nous vous contacterons rapidement.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 ml-1">Nom complet</label>
<input className="w-full px-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-950 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-4 focus:ring-[#FF6B00]/10 transition-all placeholder:text-zinc-400" placeholder="Jean Dupont" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 ml-1">Téléphone</label>
<input className="w-full px-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-950 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-4 focus:ring-[#FF6B00]/10 transition-all placeholder:text-zinc-400" placeholder="06 00 00 00 00" required="" type="tel"/>
</div>
<div className="md:col-span-2">
<label className="block text-xs font-medium text-zinc-500 mb-1.5 ml-1">Adresse Email</label>
<input className="w-full px-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-950 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-4 focus:ring-[#FF6B00]/10 transition-all placeholder:text-zinc-400" placeholder="jean.dupont@email.com" required="" type="email"/>
</div>
<div className="md:col-span-2">
<label className="block text-xs font-medium text-zinc-500 mb-1.5 ml-1">Détails de la marchandise</label>
<input className="w-full px-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-950 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-4 focus:ring-[#FF6B00]/10 transition-all placeholder:text-zinc-400" placeholder="Type, poids, volume approximatif..." required="" type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-zinc-500 mb-1.5 ml-1">Ville de départ</label>
<input className="w-full px-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-950 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-4 focus:ring-[#FF6B00]/10 transition-all placeholder:text-zinc-400" placeholder="Ex: Lille" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 ml-1">Ville d'arrivée</label>
<input className="w-full px-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-950 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-4 focus:ring-[#FF6B00]/10 transition-all placeholder:text-zinc-400" placeholder="Ex: Berlin" required="" type="text"/>
</div>
<div className="md:col-span-2">
<label className="block text-xs font-medium text-zinc-500 mb-1.5 ml-1">Date d'expédition souhaitée</label>
<input className="w-full px-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-950 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-4 focus:ring-[#FF6B00]/10 transition-all text-zinc-500" required="" type="date"/>
</div>
<div className="md:col-span-2">
<label className="block text-xs font-medium text-zinc-500 mb-1.5 ml-1">Message (optionnel)</label>
<textarea className="w-full px-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-950 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-4 focus:ring-[#FF6B00]/10 transition-all placeholder:text-zinc-400 min-h-[120px] resize-y" placeholder="Informations complémentaires..."></textarea>
</div>
<div className="md:col-span-2 mt-4 text-center">
<button className="w-full md:w-auto px-10 py-4 rounded-full bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition-colors shadow-lg shadow-black/5" type="submit">
                            Envoyer ma demande
                        </button>
</div>
</div>
</form>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950 border-t border-zinc-900" id="temoignages">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16 transition-all duration-700 ease-out" data-animate="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Ils nous font confiance</h2>
<div className="w-12 h-1 bg-[#FF6B00] mx-auto mt-6 rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl transition-all duration-700 ease-out" data-animate="">
<div className="flex gap-1 mb-6 text-[#FF6B00]">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-400 text-sm italic leading-relaxed mb-6">"Service impeccable, la livraison a été effectuée dans les temps malgré des contraintes complexes aux frontières !"</p>
<p className="text-white font-medium text-sm tracking-tight">— Marc D., Lille</p>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl transition-all duration-700 ease-out" data-animate="">
<div className="flex gap-1 mb-6 text-[#FF6B00]">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-400 text-sm italic leading-relaxed mb-6">"Très professionnel du premier contact jusqu'à la livraison finale. Je recommande vivement TransPro pour vos expéditions."</p>
<p className="text-white font-medium text-sm tracking-tight">— Sophie L., Bruxelles</p>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl transition-all duration-700 ease-out" data-animate="">
<div className="flex gap-1 mb-6 text-[#FF6B00]">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-400 text-sm italic leading-relaxed mb-6">"Fiable, réactif et rapide, notre partenaire de confiance pour toutes nos expéditions en urgence vers l'Allemagne."</p>
<p className="text-white font-medium text-sm tracking-tight">— Antoine R., Paris</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-50 border-t border-zinc-100" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16 transition-all duration-700 ease-out" data-animate="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">Questions Fréquentes</h2>
<div className="w-12 h-1 bg-[#FF6B00] mx-auto mt-6 rounded-full"></div>
</div>
<div className="space-y-3 transition-all duration-700 delay-100 ease-out" data-animate="">

<div className="faq-item bg-white border border-zinc-200 rounded-xl overflow-hidden transition-all duration-300 shadow-sm">
<button className="faq-btn w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-zinc-50/50 transition-colors">
<span className="font-medium text-sm text-zinc-950">Quelles zones couvrez-vous ?</span>
<iconify-icon className="faq-icon text-zinc-400 text-xl transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out bg-white">
<div className="px-6 pb-5 text-sm text-zinc-500 leading-relaxed">
                            Basés à Lille, nous intervenons partout en France et couvrons l'ensemble des pays de l'Union Européenne (Belgique, Pays-Bas, Allemagne, Espagne, Italie, etc.) ainsi que le Royaume-Uni.
                        </div>
</div>
</div>

<div className="faq-item bg-white border border-zinc-200 rounded-xl overflow-hidden transition-all duration-300 shadow-sm">
<button className="faq-btn w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-zinc-50/50 transition-colors">
<span className="font-medium text-sm text-zinc-950">Quels types de marchandises transportez-vous ?</span>
<iconify-icon className="faq-icon text-zinc-400 text-xl transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out bg-white">
<div className="px-6 pb-5 text-sm text-zinc-500 leading-relaxed">
                            Nous transportons tout type de marchandises : du colis urgent de quelques grammes (documents) jusqu'aux palettes lourdes et encombrantes nécessitant un poids lourd. Nous adaptons le véhicule à votre besoin.
                        </div>
</div>
</div>

<div className="faq-item bg-white border border-zinc-200 rounded-xl overflow-hidden transition-all duration-300 shadow-sm">
<button className="faq-btn w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-zinc-50/50 transition-colors">
<span className="font-medium text-sm text-zinc-950">Comment obtenir un devis ?</span>
<iconify-icon className="faq-icon text-zinc-400 text-xl transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out bg-white">
<div className="px-6 pb-5 text-sm text-zinc-500 leading-relaxed">
                            Il vous suffit de remplir notre formulaire en ligne dans la section "Devis", ou de nous appeler directement. Un devis gratuit et personnalisé vous sera transmis dans les plus brefs délais.
                        </div>
</div>
</div>

<div className="faq-item bg-white border border-zinc-200 rounded-xl overflow-hidden transition-all duration-300 shadow-sm">
<button className="faq-btn w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-zinc-50/50 transition-colors">
<span className="font-medium text-sm text-zinc-950">Proposez-vous des livraisons urgentes ?</span>
<iconify-icon className="faq-icon text-zinc-400 text-xl transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out bg-white">
<div className="px-6 pb-5 text-sm text-zinc-500 leading-relaxed">
                            Absolument. Notre service de livraison express est conçu pour les urgences. Un chauffeur dédié prend en charge votre marchandise et l'achemine directement à destination, sans rupture de charge.
                        </div>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-24 md:pt-32 bg-zinc-950 border-t border-zinc-900 text-center" id="contact">
<div className="max-w-7xl mx-auto px-6 mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16 transition-all duration-700 ease-out" data-animate="">Contactez-nous</h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 transition-all duration-700 delay-100 ease-out" data-animate="">
<div className="flex flex-col items-center gap-4 group">
<div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-[#FF6B00] group-hover:border-[#FF6B00]/30 flex items-center justify-center transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-white tracking-tight">Lille, Hauts-de-France</p>
</div>
<div className="flex flex-col items-center gap-4 group">
<div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-[#FF6B00] group-hover:border-[#FF6B00]/30 flex items-center justify-center transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<a className="text-sm font-medium text-white hover:text-[#FF6B00] transition-colors tracking-tight" href="tel:+33611323455">06 11 32 34 55</a>
</div>
<div className="flex flex-col items-center gap-4 group">
<div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-[#FF6B00] group-hover:border-[#FF6B00]/30 flex items-center justify-center transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon>
</div>
<a className="text-sm font-medium text-white hover:text-[#FF6B00] transition-colors tracking-tight" href="mailto:transproso@live.fr">transproso@live.fr</a>
</div>
</div>
</div>
<div className="py-6 border-t border-zinc-900/50 bg-[#050505]">
<p className="text-xs text-zinc-600 font-medium tracking-tight">© 2025 TransPro Solutions — Tous droits réservés.</p>
</div>
</footer>

<a className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-105 hover:bg-[#1ebe57] transition-all duration-300 z-50 group" href="https://wa.me/33611323455" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-3xl" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="absolute right-[110%] bg-zinc-950 text-white text-xs font-medium px-3 py-1.5 rounded-md whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            Contactez-nous
        </span>
</a>



    </>
  );
}
