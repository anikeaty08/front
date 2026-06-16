import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Init Icons
        lucide.createIcons();

        // Scroll Animation Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-on-scroll');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 z-50 w-full mix-blend-difference text-white/90">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-sm font-medium tracking-tight uppercase opacity-0 animate-[fadeIn_1s_ease-out_forwards]" href="#">
                Expresso Palace
            </a>
<div className="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
<a className="hover:text-amber-400 transition-colors" href="#menu">Carte</a>
<a className="hover:text-amber-400 transition-colors" href="#bakery">Pâtisserie</a>
<a className="hover:text-amber-400 transition-colors" href="#legacy">Histoire</a>
<a className="hover:text-amber-400 transition-colors" href="#space">Lieu</a>
</div>
<button className="opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards] group flex items-center gap-2 text-xs uppercase tracking-widest hover:text-amber-400 transition-colors">
<span>Panier (0)</span>
</button>
</div>
</nav>

<header className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Coffee Texture" className="w-full h-full object-cover object-center brightness-[0.85]" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-b from-black/30 via-transparent to-[#FDFBF7] absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6 pb-20">
<div className="reveal-on-scroll is-visible">
<span className="inline-block py-1 px-3 border border-white/30 rounded-full text-[10px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm mb-6">
                    Maison de Café &amp; Boulangerie
                </span>
</div>
<h1 className="md:text-8xl lg:text-9xl leading-[0.9] reveal-on-scroll delay-100 is-visible text-6xl text-white tracking-tight font-serif-display mb-8">
                L'art de la<br/>
<span className="font-light italic text-amber-100/90 font-serif-text">Bon apetite</span>
</h1>
<p className="text-lg md:text-xl text-white/80 max-w-lg mx-auto font-light leading-relaxed reveal-on-scroll delay-200 is-visible">
                Un hommage aux rituels lents. Café de spécialité et viennoiseries dorées, servis avec une simplicité délibérée.
            </p>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
<span className="text-[10px] uppercase tracking-widest text-[#1C1917]">Découvrir</span>
<svg aria-hidden="true" className="lucide lucide-arrow-down w-4 h-4 text-[#1C1917]" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</header>

<section className="py-32 px-6" id="bakery">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="order-2 lg:order-1 relative h-[600px] w-full reveal-on-scroll">

<div className="absolute top-10 right-10 bottom-0 left-0 bg-[#F5F2EB] rounded-sm -rotate-2"></div>

<div className="absolute inset-0 overflow-hidden rounded-sm img-zoom-container shadow-2xl">
<img alt="Bakery Display" className="w-full h-full object-cover img-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute -bottom-8 -right-6 w-56 h-64 md:w-72 md:h-80 overflow-hidden rounded-sm border-4 border-[#FDFBF7] shadow-xl img-zoom-container hidden sm:block">
<img alt="Fresh Croissants" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="order-1 lg:order-2 space-y-10 reveal-on-scroll delay-100">
<div className="">
<span className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-3 block">Le Fournil</span>
<h2 className="font-serif-display text-4xl md:text-5xl text-[#1C1917] mb-6">Patience &amp; Beurre</h2>
<p className="text-[#44403C] leading-relaxed font-light text-lg">
                            Nos viennoiseries sont le fruit d'une patience infinie. Des couches de beurre AOP, une fermentation lente et une touche d'amandes torréfiées pour le croquant parfait. Accompagné d'un café noir filtré, c'est l'équilibre idéal entre richesse et clarté.
                        </p>
</div>
<div className="space-y-6 border-l border-[#1C1917]/10 pl-8">
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline">
<h3 className="text-lg font-medium text-[#1C1917] group-hover:text-amber-600 transition-colors">Croissant aux Amandes</h3>
<span className="font-serif-text italic text-[#78716C]">28 MAD</span>
</div>
<p className="text-sm text-[#78716C] mt-1">Crème d'amande maison, effilées grillées.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline">
<h3 className="text-lg font-medium text-[#1C1917] group-hover:text-amber-600 transition-colors">Pain au Chocolat</h3>
<span className="font-serif-text italic text-[#78716C]">24 MAD</span>
</div>
<p className="text-sm text-[#78716C] mt-1">Double barre chocolat Valrhona.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline">
<h3 className="text-lg font-medium text-[#1C1917] group-hover:text-amber-600 transition-colors">Roulé Canelle</h3>
<span className="font-serif-text italic text-[#78716C]">26 MAD</span>
</div>
<p className="text-sm text-[#78716C] mt-1">Épices chaudes, glaçage léger.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-[#1C1917]/5 py-4 overflow-hidden bg-[#F5F2EB]">
<div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite] gap-12 text-sm uppercase tracking-widest text-[#78716C]">
<span>Café de Spécialité</span> • <span className="">Torréfaction Locale</span> • <span>Ingrédients de Saison</span> • 
            <span>Café de Spécialité</span> • <span>Torréfaction Locale</span> • <span>Ingrédients de Saison</span> •
            <span>Café de Spécialité</span> • <span>Torréfaction Locale</span> • <span>Ingrédients de Saison</span> •
            <span>Café de Spécialité</span> • <span>Torréfaction Locale</span> • <span>Ingrédients de Saison</span>
</div>
</div>
<style>
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
    </style>

<section className="py-32 bg-[#F5F2EB] border-b border-[#1C1917]/5" id="legacy">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-5 relative reveal-on-scroll">

<div className="aspect-[4/5] overflow-hidden rounded-sm relative shadow-lg img-zoom-container">
<img alt="Coffee Heritage" className="w-full h-full object-cover img-zoom grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -right-6 bg-white p-8 shadow-xl max-w-xs hidden md:block border border-[#1C1917]/5">
<svg className="text-amber-600 mb-4 opacity-50 w-8 h-8" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H7.19934C6.09477 16 5.19934 16.8954 5.19934 18V21H14.017ZM16.017 21H19.017C19.5693 21 20.017 20.5523 20.017 20V4C20.017 3.44772 19.5693 3 19.017 3H4.19934C3.64706 3 3.19934 3.44772 3.19934 4V20C3.19934 20.5523 3.64706 21 4.19934 21H6.01703V18C6.01703 17.337 6.55408 16.8 7.21703 16.8H11.9993C12.6623 16.8 13.1993 17.337 13.1993 18V21H16.017ZM15.017 4V21H16.017V4H15.017Z"></path></svg>
<p className="font-serif-text italic text-xl text-[#1C1917] leading-snug">"Le temps est notre ingrédient le plus précieux."</p>
</div>
</div>
<div className="lg:col-span-7 space-y-8 lg:pl-12 pt-8 reveal-on-scroll delay-100">
<span className="text-xs font-semibold tracking-widest uppercase text-amber-600">Notre Histoire</span>
<h2 className="font-serif-display text-5xl md:text-6xl text-[#1C1917] leading-none">
                        Un héritage de<br/>goût et de passion.
                    </h2>
<div className="grid md:grid-cols-2 gap-8 pt-4">
<p className="text-[#44403C] font-light leading-relaxed text-lg">
                            Fondé en 1988 au cœur de Casablanca, Expresso Palace est né d'une vision simple : offrir un café qui ne ment pas. Ce qui a commencé comme un petit comptoir pour les puristes est devenu un sanctuaire dédié à l'excellence.
                        </p>
<p className="text-[#44403C] font-light leading-relaxed text-lg">
                            Trois décennies plus tard, nos méthodes restent inchangées. Nous torréfions par petits lots, pétrissons à la main et prenons le temps nécessaire pour que chaque arôme s'exprime pleinement, loin des modes passagères.
                        </p>
</div>
<div className="flex gap-16 pt-10 border-t border-[#1C1917]/10 mt-8">
<div>
<span className="block text-4xl font-serif-display mb-2 text-[#1C1917]">1988</span>
<span className="text-[10px] uppercase tracking-widest text-[#78716C]">Année de fondation</span>
</div>
<div>
<span className="block text-4xl font-serif-display mb-2 text-[#1C1917]">3</span>
<span className="text-[10px] uppercase tracking-widest text-[#78716C]">Générations</span>
</div>
<div>
<span className="block text-4xl font-serif-display mb-2 text-[#1C1917]">100%</span>
<span className="text-[10px] uppercase tracking-widest text-[#78716C]">Artisanale</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FDFBF7]" id="menu">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-20 reveal-on-scroll">
<span className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-3 block">La Carte</span>
<h2 className="font-serif-display text-4xl md:text-5xl text-[#1C1917]">L'Essence du Grain</h2>
</div>
<div className="grid md:grid-cols-2 gap-x-24 gap-y-16">

<div className="space-y-12 reveal-on-scroll delay-100">
<div>
<h3 className="font-serif-text italic text-2xl text-[#1C1917] mb-6 border-b border-[#1C1917]/10 pb-4">Espresso Bar</h3>
<div className="space-y-8">
<div className="flex justify-between items-end group">
<div>
<h4 className="text-base font-medium text-[#1C1917] group-hover:text-amber-600 transition-colors">Espresso Double</h4>
<p className="text-xs text-[#78716C] mt-1">Ethiopie, Yirgacheffe</p>
</div>
<span className="text-sm font-serif-text">22 MAD</span>
</div>
<div className="flex justify-between items-end group">
<div>
<h4 className="text-base font-medium text-[#1C1917] group-hover:text-amber-600 transition-colors">Cortado</h4>
<p className="text-xs text-[#78716C] mt-1">Ratio 1:1, lait texturé</p>
</div>
<span className="text-sm font-serif-text">28 MAD</span>
</div>
<div className="flex justify-between items-end group">
<div>
<h4 className="text-base font-medium text-[#1C1917] group-hover:text-amber-600 transition-colors">Flat White</h4>
<p className="text-xs text-[#78716C] mt-1">Micro-mousse soyeuse</p>
</div>
<span className="text-sm font-serif-text">35 MAD</span>
</div>
</div>
</div>
</div>

<div className="space-y-12 reveal-on-scroll delay-200">
<div>
<h3 className="font-serif-text italic text-2xl text-[#1C1917] mb-6 border-b border-[#1C1917]/10 pb-4">Filtration Douce</h3>
<div className="space-y-8">
<div className="flex justify-between items-end group">
<div>
<h4 className="text-base font-medium text-[#1C1917] group-hover:text-amber-600 transition-colors">V60 Pour Over</h4>
<p className="text-xs text-[#78716C] mt-1">Clair, floral, délicat</p>
</div>
<span className="text-sm font-serif-text">40 MAD</span>
</div>
<div className="flex justify-between items-end group">
<div>
<h4 className="text-base font-medium text-[#1C1917] group-hover:text-amber-600 transition-colors">Chemex (2 pers)</h4>
<p className="text-xs text-[#78716C] mt-1">Corps rond, notes de noisette</p>
</div>
<span className="text-sm font-serif-text">65 MAD</span>
</div>
<div className="flex justify-between items-end group">
<div>
<h4 className="text-base font-medium text-[#1C1917] group-hover:text-amber-600 transition-colors">Cold Brew</h4>
<p className="text-xs text-[#78716C] mt-1">Infusion 18h à froid</p>
</div>
<span className="text-sm font-serif-text">38 MAD</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#1C1917] text-[#FDFBF7]" id="space">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 flex flex-col justify-center space-y-8 reveal-on-scroll">
<h2 className="font-serif-display text-4xl lg:text-5xl leading-tight">
                        Un refuge de <br/>
<span className="font-serif-text italic text-amber-500">calme absolu.</span>
</h2>
<p className="text-[#A8A29E] font-light leading-relaxed">
                        Matériaux bruts, bois chaud et lumière naturelle. Notre espace est pensé pour vous déconnecter du bruit de la ville et vous reconnecter à l'instant présent.
                    </p>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-amber-500 transition-colors" href="#">
                            Voir la galerie <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="lg:col-span-8 grid grid-cols-2 gap-4 h-[500px]">
<div className="overflow-hidden rounded-sm reveal-on-scroll delay-100 img-zoom-container h-full">
<img alt="Interior" className="w-full h-full object-cover img-zoom opacity-80 hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="grid grid-rows-2 gap-4 h-full">
<div className="overflow-hidden rounded-sm reveal-on-scroll delay-200 img-zoom-container w-full h-full">
<img alt="Detail" className="w-full h-full object-cover img-zoom opacity-80 hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="overflow-hidden rounded-sm reveal-on-scroll delay-300 img-zoom-container w-full h-full">
<img alt="Coffee Pouring" className="w-full h-full object-cover img-zoom opacity-80 hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-[#1C1917]/5 bg-[#FDFBF7]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<p className="text-lg font-serif-display text-[#1C1917] mb-1">Expresso Palace</p>
<p className="text-xs text-[#78716C]">Casablanca, Maroc</p>
</div>
<div className="flex items-center gap-8">
<a className="text-[#1C1917] hover:text-amber-600 transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-[#1C1917] hover:text-amber-600 transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-[#1C1917] hover:text-amber-600 transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
<div className="text-xs text-[#A8A29E] uppercase tracking-widest">
                © 2024 • Tous droits réservés
            </div>
</div>
</footer>

<style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>


    </>
  );
}
