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
            // Scroll Reveal Animation
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Supprime les classes d'état initial pour déclencher la transition
                        entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-x-[2rem]', 'translate-x-[-2rem]');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
            });

            // Navbar Blur effect on scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.replace('bg-white/50', 'bg-white/95');
                    navbar.classList.add('shadow-sm');
                } else {
                    navbar.classList.replace('bg-white/95', 'bg-white/50');
                    navbar.classList.remove('shadow-sm');
                }
            });

            // Form Submit Simulation
            const form = document.getElementById('contact-form');
            const successMsg = document.getElementById('success-msg');
            
            if(form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    form.style.opacity = '0';
                    setTimeout(() => {
                        form.classList.add('hidden');
                        successMsg.classList.remove('hidden');
                        successMsg.classList.add('animate-pulse');
                        setTimeout(() => successMsg.classList.remove('animate-pulse'), 1000);
                    }, 300);
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/50 backdrop-blur-xl transition-all duration-300 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="relative flex items-center justify-center text-3xl">
<div className="absolute inset-0 bg-gradient-to-tr from-[#38BDF8] via-[#0EA5E9] to-[#4338CA] blur-sm opacity-40 rounded-full group-hover:opacity-70 transition-opacity"></div>
<iconify-icon className="relative text-[#0EA5E9]" icon="solar:planet-linear"></iconify-icon>
</div>
<span className="text-xl font-extrabold tracking-tighter text-[#0A0A0A]">Sola<span className="text-[#0EA5E9]">web</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-[#64748B] hover:text-[#0A0A0A] transition-colors" href="#services">Services</a>
<a className="text-[#64748B] hover:text-[#0A0A0A] transition-colors" href="#portfolio">Portfolio</a>
<a className="text-[#64748B] hover:text-[#0A0A0A] transition-colors" href="#avis">Avis</a>
<a className="text-[#64748B] hover:text-[#0A0A0A] transition-colors" href="#apropos">À propos</a>
</div>
<a className="bg-[#0A0A0A] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-lg shadow-black/5 hover:shadow-black/10 flex items-center gap-2" href="#contact">
                Me contacter <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>

<main className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-[#EFF8FF] via-[#F0EEFF] to-[#EFF8FF]">

<div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]">
<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0EA5E9" strokeWidth="1"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="absolute top-20 left-[15%] w-72 h-72 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-[90px] opacity-30 animate-pulse" style={{animationDuration: '6s'}}></div>
<div className="absolute bottom-20 right-[10%] w-96 h-96 bg-[#4338CA] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse" style={{animationDuration: '8s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#38BDF8] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-pulse" style={{animationDuration: '7s'}}></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center w-full reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-[#0EA5E9]/20 rounded-full px-4 py-1.5 text-xs font-medium text-[#0A0A0A] mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0EA5E9] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#0EA5E9]"></span>
</span>
                Disponible pour de nouveaux projets
            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0A0A0A] leading-[1.05] tracking-tighter mb-6">
                Votre vitrine digitale qui <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#4338CA] relative">
                    brille
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#38BDF8]/40" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 15 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path></svg>
</span> vraiment.
            </h1>
<p className="text-lg md:text-xl text-[#64748B] mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Brillez sur le web avec un site sur-mesure, performant et à votre image. Solaweb vous accompagne de la conception à la mise en ligne.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#0A0A0A] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2" href="#services">
                    Voir les formules <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white text-[#0A0A0A] border border-gray-200 px-7 py-3.5 rounded-full text-sm font-medium hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2" href="#portfolio">
                    Voir les réalisations
                </a>
</div>

<div className="mt-20 bg-white/90 backdrop-blur-md rounded-3xl p-8 flex flex-col md:flex-row justify-around items-center gap-8 shadow-2xl shadow-[#0EA5E9]/5 border border-white max-w-3xl mx-auto">
<div className="flex flex-col items-center">
<span className="text-3xl font-extrabold text-[#0A0A0A] tracking-tighter mb-1">5j</span>
<span className="text-sm font-medium text-[#94A3B8] uppercase tracking-widest">Délai moyen</span>
</div>
<div className="hidden md:block w-px h-12 bg-gray-100"></div>
<div className="flex flex-col items-center">
<span className="text-3xl font-extrabold text-[#0A0A0A] tracking-tighter mb-1">100%</span>
<span className="text-sm font-medium text-[#94A3B8] uppercase tracking-widest">Satisfaits</span>
</div>
<div className="hidden md:block w-px h-12 bg-gray-100"></div>
<div className="flex flex-col items-center">
<span className="text-3xl font-extrabold text-[#0A0A0A] tracking-tighter mb-1">0€</span>
<span className="text-sm font-medium text-[#94A3B8] uppercase tracking-widest">Frais cachés</span>
</div>
</div>
</div>
</main>

<section className="py-32 bg-[#F8FAFC]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<span className="text-[#94A3B8] font-medium tracking-widest uppercase text-xs mb-3 block">Nos Formules</span>
<h2 className="text-4xl md:text-5xl font-extrabold text-[#0A0A0A] tracking-tighter">Des tarifs clairs, sans surprise.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group reveal opacity-0 translate-y-8" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<h3 className="text-xl font-extrabold text-[#0A0A0A] tracking-tighter mb-2">Essentiel</h3>
<p className="text-sm font-light text-[#64748B] mb-6">Idéal pour une présence rapide et efficace en ligne.</p>
<div className="text-4xl font-extrabold text-[#0A0A0A] tracking-tighter mb-8">350€</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm font-light text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Site one-page moderne
                        </li>
<li className="flex items-start gap-3 text-sm font-light text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Formulaire de contact
                        </li>
<li className="flex items-start gap-3 text-sm font-light text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Design responsive (Mobile/PC)
                        </li>
<li className="flex items-start gap-3 text-sm font-light text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Livraison en 5 jours
                        </li>
</ul>
<a className="block w-full text-center bg-gray-50 text-[#0A0A0A] font-medium text-sm py-3.5 rounded-xl border border-gray-200 hover:bg-white hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all" href="#contact">Choisir Essentiel</a>
</div>

<div className="bg-gradient-to-b from-[#EFF8FF] to-[#EEF2FF] rounded-[2.5rem] p-10 border border-[#0EA5E9]/20 shadow-2xl shadow-[#0EA5E9]/10 hover:-translate-y-2 transition-all duration-300 relative group reveal opacity-0 translate-y-8 z-10" style={{transitionDelay: '200ms'}}>
<div className="absolute top-5 right-5 bg-gradient-to-r from-[#38BDF8] to-[#4338CA] text-white text-[10px] font-medium uppercase tracking-widest py-1.5 px-3.5 rounded-full shadow-sm">Populaire</div>
<h3 className="text-xl font-extrabold text-[#0A0A0A] tracking-tighter mb-2">Pro</h3>
<p className="text-sm font-light text-[#64748B] mb-6">Pour les entreprises qui veulent se démarquer.</p>
<div className="text-4xl font-extrabold text-[#0EA5E9] tracking-tighter mb-8">650€</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm font-light text-[#0A0A0A]">
<iconify-icon className="text-[#4338CA] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Site multi-pages (3 à 5)
                        </li>
<li className="flex items-start gap-3 text-sm font-light text-[#0A0A0A]">
<iconify-icon className="text-[#4338CA] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Optimisation SEO de base
                        </li>
<li className="flex items-start gap-3 text-sm font-light text-[#0A0A0A]">
<iconify-icon className="text-[#4338CA] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Intégration Google Analytics
                        </li>
<li className="flex items-start gap-3 text-sm font-light text-[#0A0A0A]">
<iconify-icon className="text-[#4338CA] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Livraison en 10 jours
                        </li>
</ul>
<a className="block w-full text-center bg-[#0A0A0A] text-white font-medium text-sm py-3.5 rounded-xl hover:bg-[#0EA5E9] transition-all shadow-lg shadow-[#0EA5E9]/20" href="#contact">Choisir Pro</a>
</div>

<div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group reveal opacity-0 translate-y-8" style={{transitionDelay: '300ms'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4338CA] to-[#0A0A0A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<h3 className="text-xl font-extrabold text-[#0A0A0A] tracking-tighter mb-2">Premium</h3>
<p className="text-sm font-light text-[#64748B] mb-6">La solution complète avec maintenance incluse.</p>
<div className="text-4xl font-extrabold text-[#0A0A0A] tracking-tighter mb-8">1 100€</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm font-light text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Site complet + module Blog
                        </li>
<li className="flex items-start gap-3 text-sm font-light text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Stratégie SEO avancée
                        </li>
<li className="flex items-start gap-3 text-sm font-light text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Hébergement 1 an offert
                        </li>
<li className="flex items-start gap-3 text-sm font-light text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Maintenance offerte (3 mois)
                        </li>
</ul>
<a className="block w-full text-center bg-gray-50 text-[#0A0A0A] font-medium text-sm py-3.5 rounded-xl border border-gray-200 hover:bg-white hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all" href="#contact">Choisir Premium</a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F1F5F9]" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<span className="text-[#94A3B8] font-medium tracking-widest uppercase text-xs mb-3 block">Réalisations</span>
<h2 className="text-4xl md:text-5xl font-extrabold text-[#0A0A0A] tracking-tighter">Ils brillent déjà.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 reveal opacity-0 translate-y-8 bg-gradient-to-br from-orange-100 to-orange-50" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-6xl text-orange-200/50" icon="solar:shop-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0EA5E9]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-8 px-6 text-center">
<h4 className="text-xl font-extrabold text-white tracking-tighter mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Le Bistrot du Sud</h4>
<span className="text-sm text-white/80 font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Site vitrine &amp; Réservation</span>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 reveal opacity-0 translate-y-8 bg-gradient-to-br from-purple-100 to-purple-50" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-6xl text-purple-200/50" icon="solar:user-heart-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#4338CA]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-8 px-6 text-center">
<h4 className="text-xl font-extrabold text-white tracking-tighter mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Sophie Coach</h4>
<span className="text-sm text-white/80 font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Site personnel &amp; Blog</span>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 reveal opacity-0 translate-y-8 bg-gradient-to-br from-green-100 to-green-50" style={{transitionDelay: '300ms'}}>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-6xl text-green-200/50" icon="solar:hammer-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0EA5E9]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-8 px-6 text-center">
<h4 className="text-xl font-extrabold text-white tracking-tighter mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Menuiserie Martin</h4>
<span className="text-sm text-white/80 font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Portfolio artisan</span>
</div>
</div>
</div>
<p className="text-sm text-[#94A3B8] text-center mt-12 font-light italic reveal opacity-0">D'autres projets sont en cours de constitution pour enrichir ce portfolio.</p>
</div>
</section>

<section className="py-32 bg-[#F8FAFC]" id="avis">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<span className="text-[#94A3B8] font-medium tracking-widest uppercase text-xs mb-3 block">Témoignages</span>
<h2 className="text-4xl md:text-5xl font-extrabold text-[#0A0A0A] tracking-tighter">Ce qu'ils en pensent.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm reveal opacity-0 translate-y-8" style={{transitionDelay: '100ms'}}>
<div className="flex gap-1 mb-6 text-orange-400 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-light text-[#64748B] mb-8 leading-relaxed">"Un travail exceptionnel. Mathéo a su capter l'essence de mon activité et créer un site qui me ressemble à 100%. Je recommande les yeux fermés !"</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-extrabold text-sm">SM</div>
<div>
<div className="font-extrabold text-sm text-[#0A0A0A]">Sophie M.</div>
<div className="text-xs text-[#94A3B8] font-light">Coach de vie, Toulon</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm reveal opacity-0 translate-y-8" style={{transitionDelay: '200ms'}}>
<div className="flex gap-1 mb-6 text-orange-400 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-light text-[#64748B] mb-8 leading-relaxed">"Rapide, pro et sans blabla. Mon nouveau site m'a déjà rapporté de nouveaux chantiers la première semaine. L'investissement vaut largement le coup."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-extrabold text-sm">TR</div>
<div>
<div className="font-extrabold text-sm text-[#0A0A0A]">Thomas R.</div>
<div className="text-xs text-[#94A3B8] font-light">Plombier, Hyères</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm reveal opacity-0 translate-y-8" style={{transitionDelay: '300ms'}}>
<div className="flex gap-1 mb-6 text-orange-400 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-light text-[#64748B] mb-8 leading-relaxed">"Le système de réservation intégré est parfait. Solaweb a compris nos besoins immédiats et a livré avant la date prévue. Super suivi."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-extrabold text-sm">AD</div>
<div>
<div className="font-extrabold text-sm text-[#0A0A0A]">Amina D.</div>
<div className="text-xs text-[#94A3B8] font-light">Restauratrice, La Seyne</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F1F5F9] overflow-hidden" id="apropos">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="bg-[#0F172A] rounded-3xl p-10 lg:p-12 relative shadow-2xl reveal opacity-0 translate-x-[-2rem] transition-all duration-700 ease-out">
<div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#4338CA]"></div>
<div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl font-extrabold text-white mb-8 shadow-inner">MP</div>
<h3 className="text-3xl font-extrabold text-white tracking-tighter">Mathéo Payet</h3>
<p className="text-[#0EA5E9] font-medium text-lg mt-1 mb-8">Fondateur Solaweb</p>
<div className="flex flex-wrap gap-2 relative z-10">
<span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-[#94A3B8]">Île de la Réunion</span>
<span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-[#94A3B8]">Toulon (83)</span>
<span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-[#94A3B8]">React / HTML / CSS</span>
<span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-[#94A3B8]">Design UI</span>
<span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-[#94A3B8]">SEO</span>
</div>
<div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#4338CA] rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>
</div>

<div className="reveal opacity-0 translate-x-[2rem] transition-all duration-700 ease-out">
<span className="text-[#94A3B8] font-medium tracking-widest uppercase text-xs mb-3 block">L'Agence</span>
<h2 className="text-4xl font-extrabold text-[#0A0A0A] tracking-tighter mb-6">Originaire de la Réunion, <br/>basé à Toulon.</h2>
<p className="text-[#64748B] font-light leading-relaxed mb-10 text-sm md:text-base">
                    Solaweb est née d'une passion pour le web moderne et l'envie d'accompagner les indépendants et TPE. Je crée des sites internet qui ne sont pas seulement beaux, mais qui génèrent des résultats concrets.
                </p>
<div className="flex flex-col gap-6">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-2xl bg-[#EFF8FF] text-[#0EA5E9] flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<div>
<h4 className="text-[#0A0A0A] font-extrabold text-sm mb-1">Rapidité &amp; Efficacité</h4>
<p className="text-[#64748B] font-light text-xs leading-relaxed">Des processus optimisés pour vous livrer un site fonctionnel dans des délais imbattables.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-2xl bg-[#EFF8FF] text-[#0EA5E9] flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div>
<h4 className="text-[#0A0A0A] font-extrabold text-sm mb-1">Design sur-mesure</h4>
<p className="text-[#64748B] font-light text-xs leading-relaxed">Chaque projet est unique. L'interface est pensée pour plaire à votre cible.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-2xl bg-[#EFF8FF] text-[#0EA5E9] flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:hand-shake-linear"></iconify-icon>
</div>
<div>
<h4 className="text-[#0A0A0A] font-extrabold text-sm mb-1">Proximité client</h4>
<p className="text-[#64748B] font-light text-xs leading-relaxed">Un interlocuteur unique, transparent et disponible à chaque étape.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F8FAFC]" id="contact">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<span className="text-[#94A3B8] font-medium tracking-widest uppercase text-xs mb-3 block">Contact</span>
<h2 className="text-4xl md:text-5xl font-extrabold text-[#0A0A0A] tracking-tighter">Parlons de votre projet.</h2>
</div>
<div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-black/5 border border-gray-100 relative reveal opacity-0 translate-y-8" style={{transitionDelay: '200ms'}}>
<div className="hidden absolute inset-0 bg-white/95 backdrop-blur-sm rounded-[2rem] flex flex-col items-center justify-center text-center p-8 z-20" id="success-msg">
<div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-3xl" icon="solar:check-read-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-extrabold text-[#0A0A0A] tracking-tighter mb-2">Demande envoyée !</h3>
<p className="text-[#64748B] font-light text-sm">Merci pour votre message. Je vous recontacte sous 24h.</p>
</div>
<form className="space-y-6 relative z-10" id="contact-form">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="sr-only" htmlFor="name">Prénom &amp; Nom</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0A0A0A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9] transition-all font-light" id="name" placeholder="Prénom &amp; Nom" required="" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="phone">Téléphone</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0A0A0A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9] transition-all font-light" id="phone" placeholder="Téléphone" type="tel"/>
</div>
</div>
<div>
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0A0A0A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9] transition-all font-light" id="email" placeholder="Adresse email" required="" type="email"/>
</div>
<div className="relative">
<label className="sr-only" htmlFor="formule">Formule souhaitée</label>
<select className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9] transition-all font-light cursor-pointer" id="formule" required="">
<option disabled="" selected="" value="">Quelle formule vous intéresse ?</option>
<option className="text-[#0A0A0A]" value="essentiel">Formule Essentiel (350€)</option>
<option className="text-[#0A0A0A]" value="pro">Formule Pro (650€)</option>
<option className="text-[#0A0A0A]" value="premium">Formule Premium (1100€)</option>
<option className="text-[#0A0A0A]" value="autre">Autre demande</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] text-lg pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div>
<label className="sr-only" htmlFor="message">Description du projet</label>
<textarea className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0A0A0A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9] transition-all font-light resize-none" id="message" placeholder="Parlez-moi de votre projet..." required="" rows="4"></textarea>
</div>
<button className="w-full bg-[#0EA5E9] text-white font-medium text-sm py-4 rounded-xl hover:bg-[#0284c7] transition-all shadow-lg shadow-[#0EA5E9]/20 flex items-center justify-center gap-2" type="submit">
                        Envoyer ma demande <iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
</form>
<div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-8 md:gap-16">
<div className="flex items-center gap-2 text-xs font-light text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-lg" icon="solar:map-point-linear"></iconify-icon>
                        Toulon, Var (83)
                    </div>
<div className="flex items-center gap-2 text-xs font-light text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                        Réponse sous 24h
                    </div>
<div className="flex items-center gap-2 text-xs font-light text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-lg" icon="solar:global-linear"></iconify-icon>
                        Partout en France
                    </div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0A0A0A] pt-20 pb-10 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<a className="flex items-center gap-2 mb-8 group" href="#">
<div className="relative flex items-center justify-center text-3xl">
<iconify-icon className="text-[#0EA5E9]" icon="solar:planet-linear"></iconify-icon>
</div>
<span className="text-xl font-extrabold tracking-tighter text-white">Sola<span className="text-[#0EA5E9]">web</span></span>
</a>
<div className="flex flex-wrap justify-center gap-6 text-sm font-light text-[#64748B] mb-12">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors" href="#avis">Avis</a>
<a className="hover:text-white transition-colors" href="#apropos">À propos</a>
</div>
<div className="w-full h-px bg-white/10 mb-8"></div>
<p className="text-xs font-light text-[#64748B]">
                © 2025 Solaweb — Mathéo Payet. Tous droits réservés.
            </p>
</div>
</footer>



    </>
  );
}
