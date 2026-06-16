import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        document.addEventListener('DOMContentLoaded', () => {
            const track = document.getElementById('video-carousel-track');
            const cards = document.querySelectorAll('.carousel-card');
            const btnPrev = document.getElementById('btn-prev');
            const btnNext = document.getElementById('btn-next');

            if (btnPrev && btnNext) {
                btnPrev.addEventListener('click', () => {
                    track.scrollBy({ left: -(cards[0].offsetWidth + 32), behavior: 'smooth' });
                });
                btnNext.addEventListener('click', () => {
                    track.scrollBy({ left: cards[0].offsetWidth + 32, behavior: 'smooth' });
                });
            }

            const updateActiveCard = () => {
                if (!track) return;
                const trackCenter = track.getBoundingClientRect().left + track.offsetWidth / 2;
                let closestCard = null;
                let closestDistance = Infinity;
                cards.forEach(card => {
                    const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
                    const distance = Math.abs(trackCenter - cardCenter);
                    if (distance < closestDistance) { closestDistance = distance; closestCard = card; }
                });
                cards.forEach(card => {
                    if (card === closestCard) {
                        card.classList.add('scale-100', 'z-20', 'border-orange-500/40', 'opacity-100', 'grayscale-0');
                        card.classList.remove('scale-95', 'z-10', 'border-white/[0.08]', 'opacity-40', 'grayscale-[50%]');
                        card.style.boxShadow = '0 20px 40px -10px rgba(249, 115, 22, 0.15)';
                        const overlay = card.querySelector('.video-overlay');
                        if (overlay) overlay.classList.replace('bg-black/60', 'bg-black/20');
                    } else {
                        card.classList.remove('scale-100', 'z-20', 'border-orange-500/40', 'opacity-100', 'grayscale-0');
                        card.classList.add('scale-95', 'z-10', 'border-white/[0.08]', 'opacity-40', 'grayscale-[50%]');
                        card.style.boxShadow = 'none';
                        const overlay = card.querySelector('.video-overlay');
                        if (overlay) overlay.classList.replace('bg-black/20', 'bg-black/60');
                    }
                });
            };

            if (track) {
                track.addEventListener('scroll', updateActiveCard);
                window.addEventListener('resize', updateActiveCard);
                setTimeout(updateActiveCard, 100);
            }

            cards.forEach(card => {
                card.addEventListener('click', function() {
                    if (!this.classList.contains('scale-100')) {
                        const scrollPos = this.offsetLeft - (track.offsetWidth / 2) + (this.offsetWidth / 2);
                        track.scrollTo({ left: scrollPos, behavior: 'smooth' });
                    }
                });
            });

            const compareRows = document.querySelectorAll('.compare-row');
            const rowObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.parentElement.querySelectorAll('.compare-row').forEach((row, i) => {
                            setTimeout(() => row.classList.add('visible'), i * 90);
                        });
                        rowObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            if (compareRows.length > 0) rowObserver.observe(compareRows[0]);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]" style={{backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)', backgroundSize: '24px 24px', animation: 'pan-dots 40s linear infinite'}}>
</div>

<div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[90vh] pointer-events-none z-0" style={{animation: 'float-glow 20s ease-in-out infinite'}}>
<div className="w-full h-full rounded-full bg-orange-500 blur-[140px] opacity-40"></div>
</div>
<div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[70vw] h-[60vh] pointer-events-none z-0">
<div className="w-full h-full rounded-full bg-orange-600 blur-[120px] opacity-50" style={{animation: 'float-glow-reverse 25s ease-in-out infinite'}}></div>
</div>

<div className="absolute w-3 h-3 rounded-full bg-orange-400 blur-[1px] z-0 pointer-events-none opacity-0" style={{left: '15%', top: '75%', animation: 'rise-spark 12s ease-in-out infinite 1s'}}></div>
<div className="absolute w-4 h-4 rounded-full bg-orange-500 blur-[2px] z-0 pointer-events-none opacity-0" style={{left: '85%', top: '60%', animation: 'rise-spark 18s ease-in-out infinite 5s'}}></div>
<div className="absolute w-2 h-2 rounded-full bg-orange-300 blur-[1px] z-0 pointer-events-none opacity-0" style={{left: '45%', top: '85%', animation: 'rise-spark 14s ease-in-out infinite 8s'}}></div>
<div className="absolute w-3 h-3 rounded-full bg-orange-500 blur-[1px] z-0 pointer-events-none opacity-0" style={{left: '65%', top: '40%', animation: 'rise-spark 16s ease-in-out infinite 2s'}}></div>

<header className="relative z-10 w-full flex justify-center py-6 px-6">
<div className="w-full max-w-7xl flex items-center justify-between">
<div className="text-white font-medium tracking-tight text-xl sm:text-2xl">
                Shopify<span className="text-orange-400">Express</span></div>
<nav className="hidden md:flex items-center gap-8 px-8 py-3 bg-white/[0.02] border border-white/[0.04] rounded-full backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.1)]">
<a className="text-base font-normal text-gray-300 hover:text-white transition-colors" href="#">Nos
                    réalisations</a>
<a className="text-base font-normal text-gray-300 hover:text-white transition-colors" href="#compare-section">Pourquoi nous ?</a>
<a className="text-base font-normal text-gray-300 hover:text-white transition-colors" href="#">Avis</a>
<a className="text-base font-normal text-gray-300 hover:text-white transition-colors" href="#formulaire">Contact</a>
</nav>
<a className="hidden sm:inline-flex px-6 py-2.5 rounded-full bg-orange-950/60 border border-white/[0.08] text-white text-base font-normal hover:bg-orange-800/60 transition-colors backdrop-blur-sm" href="#formulaire">
                Voir l'offre à 450€
            </a>
</div>
</header>

<main className="flex-grow flex flex-col text-center w-full max-w-5xl z-10 mr-auto ml-auto pt-20 pr-6 pb-24 pl-6 relative items-center justify-center">
<div className="inline-flex items-center gap-3 mb-10">
<div className="flex items-center">
<img alt="Client 1" className="w-10 h-10 object-cover z-0 rounded-full ring-[#080202] ring-1 relative" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client 2" className="w-10 h-10 rounded-full ring-2 ring-[#080202] object-cover relative z-10 -ml-4" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client 3" className="w-10 h-10 rounded-full ring-2 ring-[#080202] object-cover relative z-20 -ml-4" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client 4" className="w-10 h-10 rounded-full ring-2 ring-[#080202] object-cover relative z-30 -ml-4" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client 5" className="w-10 h-10 rounded-full ring-2 ring-[#080202] object-cover relative z-40 -ml-4" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<span className="text-base sm:text-lg font-normal text-white">+ 30 Boutiques Lancées.</span>
</div>
<h1 className="sm:text-6xl md:text-7xl lg:text-[5rem] leading-[1.05] sm:leading-[1.1] text-5xl font-medium text-white tracking-tight">
    On crée ta boutique Shopify<br/>
<span className="block mt-2 sm:mt-4">clé en main, <span className="font-thin italic font-serif bg-gradient-to-br from-orange-400 to-orange-600 text-white px-2 rounded-sm sm:rounded-md mx-0.5">prête à vendre</span>
    en
    <span className="font-serif italic font-normal bg-gradient-to-br from-orange-400 to-orange-600 text-white px-2 rounded-sm sm:rounded-md mx-0.5">48 heures.</span></span>
</h1>
<p className="mt-8 text-xl sm:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light drop-shadow-md">
<span className="text-white font-normal">Livraison en 48h, 450€ paiement unique.</span> Tu as l'idée, on
    s'occupe de tout le reste. Arrête de repousser ton lancement à cause de la technique.
  </p>
<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
<a className="group sm:w-auto inline-flex items-center justify-center gap-2 hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-lg font-medium text-black bg-white w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#formulaire">
      Je lance ma boutique en 48h
      <i className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-black/40 border border-white/10 text-white text-lg font-normal hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 backdrop-blur-md" href="#">
      Voir nos réalisations
    </a>
</div>
<div className="mt-24 sm:mt-32 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 lg:gap-24 w-full">
<div className="flex items-center gap-3.5 text-base sm:text-lg text-gray-100 font-normal hover:-translate-y-0.5 transition-transform duration-300 cursor-default">
<i className="w-6 h-6 text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" data-lucide="clock" strokeWidth="1.5"></i>
<span>Boutique livrée en 48h</span>
</div>
<div className="flex items-center gap-3.5 text-base sm:text-lg text-gray-100 font-normal hover:-translate-y-0.5 transition-transform duration-300 cursor-default">
<i className="w-6 h-6 text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" data-lucide="sparkles" strokeWidth="1.5"></i>
<span>100% fait pour toi, de A à Z</span>
</div>
<div className="flex items-center gap-3.5 text-base sm:text-lg text-gray-100 font-normal hover:-translate-y-0.5 transition-transform duration-300 cursor-default">
<i className="w-6 h-6 text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" data-lucide="tag" strokeWidth="1.5"></i>
<span>450€ — paiement unique</span>
</div>
</div>
</main>

<section className="relative w-full z-10 flex flex-col items-center justify-center text-center py-24 px-6 border-t border-white/[0.03]">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] pointer-events-none z-0">
<div className="w-full h-full rounded-full bg-orange-600 blur-[130px] opacity-[0.15]" style={{animation: 'float-glow 28s ease-in-out infinite'}}></div>
</div>
<div className="z-10 flex flex-col w-full max-w-4xl mr-auto ml-auto relative items-center">
<div className="flex flex-row items-center gap-3 sm:gap-4 mb-8">
<div className="flex gap-1 text-[#E8622A] drop-shadow-[0_0_12px_rgba(232,98,42,0.5)]">
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<span className="text-gray-200 font-medium text-base sm:text-lg">Noté 5 sur 5</span>
</div>
<div className="flex flex-col gap-4 items-center mb-8">
<img alt="Salima B." className="sm:w-20 sm:h-20 w-16 h-16 object-cover rounded-full ring-[#E8622A]/30 ring-2 shadow-[0_0_24px_rgba(232,98,42,0.2)]" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&amp;fit=crop&amp;w=320&amp;h=320"/>
<div className="flex flex-col items-center">
<span className="text-white font-medium text-xl sm:text-2xl tracking-tight">Salima B.</span>
<span className="text-gray-400 text-sm sm:text-base font-normal mt-1">Créatrice de la marque Douceur Naturelle</span>
</div>
</div>
<blockquote className="text-2xl sm:text-3xl md:text-4xl leading-[1.4] sm:leading-[1.4] font-medium text-white tracking-tight italic mb-12 drop-shadow-lg">
                "J'avais mon stock depuis
                <span className="font-normal font-serif bg-gradient-to-br from-orange-400 to-orange-600 text-white px-2 rounded-sm sm:rounded-md mx-0.5">3 mois</span>
                sans oser me lancer. En 48h, j'avais
                <span className="font-normal font-serif bg-gradient-to-br from-orange-400 to-orange-600 text-white px-2 rounded-sm sm:rounded-md mx-0.5">ma boutique en ligne et mes premières commandes.</span>
                Je recommande à 100%."
            </blockquote>
</div>
</section>

<section className="relative w-full z-10 py-24 px-6 border-t border-white/[0.03]">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] pointer-events-none z-0">
<div className="w-full h-full rounded-full bg-orange-700 blur-[160px] opacity-[0.08]" style={{animation: 'float-glow-reverse 32s ease-in-out infinite'}}></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto">
<div className="mb-12 text-center">
<p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-3">Résultat client</p>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">Ce qu'on a livré pour
                    <span className="font-serif italic font-normal bg-gradient-to-br from-orange-400 to-orange-600 text-white px-2 rounded-sm sm:rounded-md">Douceur Naturelle</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

<div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] lg:col-span-3 md:col-span-2 backdrop-blur-sm hover:border-orange-500/20 transition-all duration-300 group">
<div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-transparent pointer-events-none">
</div>
<div className="absolute top-0 left-0 w-[60%] h-full bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none">
</div>
<div className="absolute right-0 top-0 h-full w-[55%] sm:w-[45%] pointer-events-none overflow-hidden">
<img alt="Salima B." className="w-full h-full object-cover object-top opacity-30 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&amp;fit=crop&amp;w=600" style={{maskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, transparent 100%)'}}/>
</div>
<div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-7 sm:p-10">
<div className="flex flex-col gap-6 flex-1 max-w-2xl">
<div className="flex items-center gap-4">
<div className="relative flex-shrink-0">
<img alt="Salima B." className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-2xl ring-2 ring-orange-500/30 shadow-[0_0_24px_rgba(249,115,22,0.2)]" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&amp;fit=crop&amp;w=320"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-[#080202] shadow-[0_0_8px_rgba(52,211,153,0.6)]">
</div>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2.5">
<span className="text-white font-medium text-lg sm:text-xl tracking-tight">Salima B.</span>
<span className="px-2 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/25 text-orange-400 text-xs font-medium">Boutique active</span>
</div>
<span className="text-gray-400 text-sm font-normal">Fondatrice · Douceur Naturelle</span>
<div className="flex items-center gap-1.5 mt-0.5">
<iconify-icon height="14" icon="solar:shop-linear" style={{fontSize: '0.875rem', color: '#9ca3af'}} width="14"></iconify-icon>
<span className="text-gray-400 text-xs font-normal">Boutique Shopify — Cosmétiques naturels</span>
</div>
</div>
</div>
<div className="flex gap-1">
<iconify-icon height="16" icon="solar:star-bold" style={{fontSize: '1rem', color: '#f97316'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{fontSize: '1rem', color: '#f97316'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{fontSize: '1rem', color: '#f97316'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{fontSize: '1rem', color: '#f97316'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{fontSize: '1rem', color: '#f97316'}} width="16"></iconify-icon>
</div>
<blockquote className="text-base sm:text-lg text-gray-200 font-normal leading-relaxed italic border-l-2 border-orange-500/40 pl-4">
                                "J'avais mon stock depuis 3 mois sans oser me lancer. En 48h, j'avais
                                <span className="text-orange-400 font-medium not-italic">ma boutique prête et mes premières commandes</span>.
                                La technique ne m'a plus jamais freinée. Je recommande à 100%."
                            </blockquote>
</div>
<div className="flex sm:flex-col flex-row flex-wrap gap-4 sm:gap-5 sm:border-l sm:border-white/[0.06] sm:pl-8">
<div className="flex flex-col gap-1">
<span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-none">48h</span>
<span className="text-xs text-gray-400 font-normal">Délai de livraison</span>
</div>
<div className="w-px h-10 bg-white/[0.06] hidden sm:block"></div>
<div className="flex flex-col gap-1">
<span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-none">450€</span>
<span className="text-xs text-gray-400 font-normal">Paiement unique</span>
</div>
<div className="w-px h-10 bg-white/[0.06] hidden sm:block"></div>
<div className="flex flex-col gap-1">
<span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-none">J+3</span>
<span className="text-xs text-gray-400 font-normal">Premières commandes</span>
</div>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 flex flex-col gap-6 backdrop-blur-sm hover:border-orange-500/20 hover:bg-white/[0.04] transition-all duration-300 group lg:col-span-2">
<div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-600 blur-[90px] opacity-[0.08] pointer-events-none group-hover:opacity-[0.14] transition-opacity duration-500 rounded-full">
</div>
<div className="flex items-center gap-2.5 text-orange-400">
<iconify-icon height="20" icon="solar:target-linear" style={{fontSize: '1.25rem'}} width="20"></iconify-icon>
<span className="text-xs font-medium tracking-widest uppercase text-orange-400/80">Impact sur les ventes</span>
</div>
<h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">L'effet d'une boutique
                        professionnelle</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
<div className="rounded-xl border border-white/[0.06] bg-black/30 p-5 flex flex-col gap-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full border border-red-500/50 bg-red-500/10 flex items-center justify-center">
<iconify-icon height="12" icon="solar:close-circle-linear" style={{fontSize: '0.75rem', color: '#f87171'}} width="12"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-400 tracking-widest uppercase">Avant</span>
</div>
<p className="text-base text-gray-300 font-normal leading-snug">Site amateur ou inexistant :
                                <span className="text-red-400 font-medium">0 vente en ligne.</span></p>
<div className="flex flex-col gap-1.5 mt-auto">
<div className="flex justify-between text-xs text-gray-500 mb-1">
<span>Taux de conversion</span>
<span>0%</span>
</div>
<div className="w-full h-2 rounded-full bg-white/[0.05] overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400 bar-animate" style={{-BarWidth: '5%'}}></div>
</div>
</div>
</div>
<div className="rounded-xl border border-orange-500/20 bg-orange-500/[0.04] p-5 flex flex-col gap-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full border border-orange-500/50 bg-orange-500/10 flex items-center justify-center">
<iconify-icon height="12" icon="solar:check-circle-linear" style={{fontSize: '0.75rem', color: '#f97316'}} width="12"></iconify-icon>
</div>
<span className="text-xs font-medium text-orange-400/80 tracking-widest uppercase">Après</span>
</div>
<p className="text-base text-gray-200 font-normal leading-snug">Boutique optimisée :
                                <span className="text-orange-400 font-medium">prête à convertir dès le jour 1.</span></p>
<div className="flex flex-col gap-1.5 mt-auto">
<div className="flex justify-between text-xs text-gray-400 mb-1">
<span>Taux de conversion</span>
<span>jusqu'à 3,5%</span>
</div>
<div className="w-full h-2 rounded-full bg-white/[0.05] overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-orange-600 to-orange-400 bar-animate" style={{-BarWidth: '70%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 flex flex-col gap-6 backdrop-blur-sm hover:border-orange-500/20 hover:bg-white/[0.04] transition-all duration-300 group">
<div className="absolute top-0 right-0 w-36 h-36 bg-orange-500 blur-[70px] opacity-[0.07] pointer-events-none group-hover:opacity-[0.13] transition-opacity duration-500 rounded-full">
</div>
<div className="flex items-center gap-2.5 text-orange-400">
<iconify-icon height="20" icon="solar:star-linear" style={{fontSize: '1.25rem'}} width="20"></iconify-icon>
<span className="text-xs font-medium tracking-widest uppercase text-orange-400/80">Ce qui est inclus</span>
</div>
<h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">Tout, sans exception</h3>
<ul className="flex flex-col gap-4 flex-1">
<li className="flex items-start gap-3">
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-orange-500/40 bg-orange-500/10 flex items-center justify-center">
<iconify-icon height="10" icon="solar:shop-linear" style={{fontSize: '0.6rem', color: '#f97316'}} width="10"></iconify-icon>
</div>
<span className="text-sm text-gray-300 font-normal leading-snug">Design pro &amp; personnalisé à ton image de marque.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-orange-500/40 bg-orange-500/10 flex items-center justify-center">
<iconify-icon height="10" icon="solar:box-linear" style={{fontSize: '0.6rem', color: '#f97316'}} width="10"></iconify-icon>
</div>
<span className="text-sm text-gray-300 font-normal leading-snug">Intégration de tes produits &amp; descriptifs.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-orange-500/40 bg-orange-500/10 flex items-center justify-center">
<iconify-icon height="10" icon="solar:card-linear" style={{fontSize: '0.6rem', color: '#f97316'}} width="10"></iconify-icon>
</div>
<span className="text-sm text-gray-300 font-normal leading-snug">Paiement en ligne configuré &amp; opérationnel.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-orange-500/40 bg-orange-500/10 flex items-center justify-center">
<iconify-icon height="10" icon="solar:delivery-linear" style={{fontSize: '0.6rem', color: '#f97316'}} width="10"></iconify-icon>
</div>
<span className="text-sm text-gray-300 font-normal leading-snug">Livraison &amp; CGV configurées, prêt à vendre légalement.</span>
</li>
</ul>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 flex flex-col gap-6 backdrop-blur-sm hover:border-orange-500/20 hover:bg-white/[0.04] transition-all duration-300 group lg:col-span-3 md:col-span-2">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-orange-600 blur-[80px] opacity-[0.07] pointer-events-none group-hover:opacity-[0.12] transition-opacity duration-500 rounded-full">
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5 text-orange-400">
<iconify-icon height="20" icon="solar:monitor-smartphone-linear" style={{fontSize: '1.25rem'}} width="20"></iconify-icon>
<span className="text-xs font-medium tracking-widest uppercase text-orange-400/80">Boutiques réalisées</span>
</div>
<a className="text-xs text-gray-500 hover:text-orange-400 transition-colors font-normal flex items-center gap-1.5" href="#">
                            Voir tout
                            <iconify-icon height="12" icon="solar:arrow-right-linear" style={{fontSize: '0.75rem'}} width="12"></iconify-icon>
</a>
</div>
<h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight -mt-2">Des boutiques livrées,
                        pas des promesses</h3>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="relative rounded-xl overflow-hidden aspect-[9/16] bg-black/40 border border-white/[0.06] group/thumb cursor-pointer hover:border-orange-500/30 transition-all duration-300">
<img alt="Boutique 1" className="w-full h-full object-cover opacity-60 group-hover/thumb:opacity-80 group-hover/thumb:scale-105 transition-all duration-300" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&amp;fit=crop&amp;w=400&amp;h=711"/>
<div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
<span className="text-white text-xs font-medium">Cosmétiques</span>
</div>
</div>
<div className="relative rounded-xl overflow-hidden aspect-[9/16] bg-black/40 border border-white/[0.06] group/thumb cursor-pointer hover:border-orange-500/30 transition-all duration-300">
<img alt="Boutique 2" className="w-full h-full object-cover opacity-60 group-hover/thumb:opacity-80 group-hover/thumb:scale-105 transition-all duration-300" src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&amp;fit=crop&amp;w=400&amp;h=711"/>
<div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
<span className="text-white text-xs font-medium">Mode &amp; Vêtements</span>
</div>
</div>
<div className="relative rounded-xl overflow-hidden aspect-[9/16] bg-black/40 border border-white/[0.06] group/thumb cursor-pointer hover:border-orange-500/30 transition-all duration-300">
<img alt="Boutique 3" className="w-full h-full object-cover opacity-60 group-hover/thumb:opacity-80 group-hover/thumb:scale-105 transition-all duration-300" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&amp;fit=crop&amp;w=400&amp;h=711"/>
<div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
<span className="text-white text-xs font-medium">Accessoires</span>
</div>
</div>
<div className="relative rounded-xl overflow-hidden aspect-[9/16] bg-black/40 border border-white/[0.06] group/thumb cursor-pointer hover:border-orange-500/30 transition-all duration-300">
<img alt="Boutique 4" className="w-full h-full object-cover opacity-60 group-hover/thumb:opacity-80 group-hover/thumb:scale-105 transition-all duration-300" src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&amp;fit=crop&amp;w=400&amp;h=711"/>
<div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
<span className="text-white text-xs font-medium">Bijoux</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full z-10 py-32 border-t border-white/[0.03] overflow-hidden bg-gradient-to-b from-[#080202] via-[#0a0404] to-[#080202]">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[60vh] pointer-events-none z-0">
<div className="w-full h-full rounded-full bg-orange-600/20 blur-[180px]" style={{animation: 'float-glow 25s ease-in-out infinite'}}></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6">
<div className="mb-14 text-center max-w-3xl mx-auto flex flex-col items-center">
<div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 backdrop-blur-md">
<iconify-icon className="text-orange-400 text-sm" height="16" icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
<span className="text-orange-400 text-xs font-medium tracking-widest uppercase">Pour qui ?</span>
</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1]">
                    Tu as l'idée.<br className="hidden sm:block"/>
<span className="font-serif italic font-normal bg-gradient-to-br from-orange-400 to-orange-600 bg-clip-text text-transparent pr-2">On s'occupe du reste.</span>
</h2>
<p className="mt-6 text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                    Cette offre est faite pour les entrepreneurs qui ont un produit à vendre mais qui bloquent sur la
                    technique. Si tu te reconnais, c'est pour toi.
                </p>
</div>
</div>

<div className="relative w-full mt-4 max-w-[100vw] group/carousel">
<div className="hidden sm:block absolute inset-y-0 left-0 w-[15vw] bg-gradient-to-r from-[#080202] via-[#080202]/80 to-transparent z-30 pointer-events-none">
</div>
<div className="hidden sm:block absolute inset-y-0 right-0 w-[15vw] bg-gradient-to-l from-[#080202] via-[#080202]/80 to-transparent z-30 pointer-events-none">
</div>
<button className="absolute left-4 sm:left-[12vw] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl items-center justify-center text-white/70 hover:text-orange-400 hover:bg-white/[0.08] hover:border-orange-500/40 transition-all duration-300 z-40 shadow-2xl opacity-0 translate-x-4 group-hover/carousel:opacity-100 group-hover/carousel:translate-x-0 hidden sm:flex" id="btn-prev">
<iconify-icon className="text-2xl" height="24" icon="solar:alt-arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="absolute right-4 sm:right-[12vw] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl items-center justify-center text-white/70 hover:text-orange-400 hover:bg-white/[0.08] hover:border-orange-500/40 transition-all duration-300 z-40 shadow-2xl opacity-0 -translate-x-4 group-hover/carousel:opacity-100 group-hover/carousel:translate-x-0 hidden sm:flex" id="btn-next">
<iconify-icon className="text-2xl" height="24" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
</button>
<div className="flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory px-[15vw] sm:px-[30vw] md:px-[36vw] lg:px-[38vw] no-scrollbar py-12 items-center scroll-smooth relative z-20" id="video-carousel-track">

<div className="carousel-card relative w-[70vw] sm:w-[40vw] md:w-[28vw] lg:w-[24vw] aspect-[9/16] flex-shrink-0 snap-center rounded-[2rem] overflow-hidden border bg-[#0a0a0a] group cursor-pointer transition-all duration-500 ease-out transform" style={{boxShadow: 'rgba(249, 115, 22, 0.15) 0px 20px 40px -10px'}}>
<img alt="Créateur de marque" className="w-full h-full object-cover absolute inset-0 scale-[1.02] transition-transform duration-700 group-hover:scale-100" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&amp;fit=crop&amp;w=600&amp;h=1066"/>
<div className="video-overlay absolute inset-0 transition-colors duration-500 z-0 pointer-events-none">
</div>
<div className="absolute top-5 left-5 right-5 flex justify-between items-start z-20 pointer-events-none">
<div className="px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md flex items-center gap-2 shadow-lg">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]">
</div>
<span className="text-white text-xs font-medium tracking-wide">Créateur de marque</span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#080202] via-[#080202]/80 to-transparent pt-32 pb-6 px-6 pointer-events-none">
<h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-2">Vêtements &amp; Mode
                        </h3>
<p className="text-sm text-gray-300 font-normal leading-relaxed">Tu as ta collection prête mais tu
                            n'as pas encore de boutique pour la vendre.</p>
</div>
</div>

<div className="carousel-card relative w-[70vw] sm:w-[40vw] md:w-[28vw] lg:w-[24vw] aspect-[9/16] flex-shrink-0 snap-center rounded-[2rem] overflow-hidden border border-white/[0.08] bg-[#0a0a0a] group cursor-pointer transition-all duration-500 ease-out transform scale-95 opacity-40 grayscale-[50%]" style={{boxShadow: 'none'}}>
<img alt="Cosmétiques" className="w-full h-full object-cover absolute inset-0 scale-[1.02] transition-transform duration-700 group-hover:scale-100" src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&amp;fit=crop&amp;w=600&amp;h=1066"/>
<div className="video-overlay absolute inset-0 bg-black/60 transition-colors duration-500 z-0 pointer-events-none">
</div>
<div className="absolute top-5 left-5 right-5 flex justify-between items-start z-20 pointer-events-none">
<div className="px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md flex items-center gap-2 shadow-lg">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]">
</div>
<span className="text-white text-xs font-medium tracking-wide">Beauté &amp; Cosmétiques</span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#080202] via-[#080202]/80 to-transparent pt-32 pb-6 px-6 pointer-events-none">
<h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-2">Cosmétiques &amp;
                            Bien-être</h3>
<p className="text-sm text-gray-300 font-normal leading-relaxed">Tu fabriques tes produits mais tu
                            vends encore via Instagram seulement.</p>
</div>
</div>

<div className="carousel-card relative w-[70vw] sm:w-[40vw] md:w-[28vw] lg:w-[24vw] aspect-[9/16] flex-shrink-0 snap-center rounded-[2rem] overflow-hidden border border-white/[0.08] bg-[#0a0a0a] group cursor-pointer transition-all duration-500 ease-out transform scale-95 opacity-40 grayscale-[50%]" style={{boxShadow: 'none'}}>
<img alt="Artisan" className="w-full h-full object-cover absolute inset-0 scale-[1.02] transition-transform duration-700 group-hover:scale-100" src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&amp;fit=crop&amp;w=600&amp;h=1066"/>
<div className="video-overlay absolute inset-0 bg-black/60 transition-colors duration-500 z-0 pointer-events-none">
</div>
<div className="absolute top-5 left-5 right-5 flex justify-between items-start z-20 pointer-events-none">
<div className="px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md flex items-center gap-2 shadow-lg">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]">
</div>
<span className="text-white text-xs font-medium tracking-wide">Artisan &amp; Créateur</span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#080202] via-[#080202]/80 to-transparent pt-32 pb-6 px-6 pointer-events-none">
<h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-2">Artisans &amp; Créateurs
                        </h3>
<p className="text-sm text-gray-300 font-normal leading-relaxed">Tu crées des choses uniques mais tu
                            n'as pas le temps d'apprendre Shopify.</p>
</div>
</div>

<div className="carousel-card relative w-[70vw] sm:w-[40vw] md:w-[28vw] lg:w-[24vw] aspect-[9/16] flex-shrink-0 snap-center rounded-[2rem] overflow-hidden border border-white/[0.08] bg-[#0a0a0a] group cursor-pointer transition-all duration-500 ease-out transform scale-95 opacity-40 grayscale-[50%]" style={{boxShadow: 'none'}}>
<img alt="Revendeur" className="w-full h-full object-cover absolute inset-0 scale-[1.02] transition-transform duration-700 group-hover:scale-100" src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&amp;fit=crop&amp;w=600&amp;h=1066"/>
<div className="video-overlay absolute inset-0 bg-black/60 transition-colors duration-500 z-0 pointer-events-none">
</div>
<div className="absolute top-5 left-5 right-5 flex justify-between items-start z-20 pointer-events-none">
<div className="px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md flex items-center gap-2 shadow-lg">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]">
</div>
<span className="text-white text-xs font-medium tracking-wide">Revendeur &amp; Dropshipper</span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#080202] via-[#080202]/80 to-transparent pt-32 pb-6 px-6 pointer-events-none">
<h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-2">Revendeurs &amp;
                            Importateurs</h3>
<p className="text-sm text-gray-300 font-normal leading-relaxed">Tu as ton stock ou tes fournisseurs
                            mais pas de vitrine en ligne pour vendre.</p>
</div>
</div>
</div>
</div>
<div className="w-full max-w-7xl mx-auto px-6 mt-8 mb-4 flex flex-col items-center justify-center relative z-20">
<div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 sm:px-8 py-5 rounded-[2rem] bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl shadow-2xl relative overflow-hidden group/cta cursor-pointer hover:border-orange-500/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700 pointer-events-none">
</div>
<span className="text-base text-gray-300 font-normal z-10">Tu te reconnais dans un de ces profils ?</span>
<div className="w-px h-6 bg-white/10 hidden sm:block z-10"></div>
<a className="inline-flex items-center gap-2 text-orange-400 text-base font-medium hover:text-orange-300 transition-colors z-10 group-hover/cta:text-orange-300" href="#formulaire">
                    Lance ta boutique maintenant
                    <iconify-icon className="text-xl group-hover/cta:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative w-full z-10 py-28 px-4 sm:px-6 border-t border-white/[0.03] overflow-hidden" id="compare-section">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[70vh] pointer-events-none z-0">
<div className="w-full h-full rounded-full bg-orange-700 blur-[160px] opacity-[0.07]" style={{animation: 'float-glow 30s ease-in-out infinite'}}></div>
</div>
<div className="relative z-10 w-full max-w-5xl mx-auto">
<div className="mb-14 text-center flex flex-col items-center">
<div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 backdrop-blur-md">
<iconify-icon className="text-orange-400" height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span className="text-orange-400 text-xs font-medium tracking-widest uppercase">Pourquoi nous choisir</span>
</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.15] max-w-3xl">
                    Pourquoi passer par moi plutôt qu'une
                    <span className="font-serif italic font-normal bg-gradient-to-br from-orange-400 to-orange-600 bg-clip-text text-transparent">agence web ?</span>
</h2>
<p className="mt-5 text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                    Ce n'est pas juste un site. C'est un
                    <span className="text-gray-200 font-normal">outil de vente opérationnel dès 48h.</span>
</p>
</div>

<div className="hidden sm:grid sm:grid-cols-[1.4fr_1fr_1.15fr] mb-3 px-1">
<div></div>
<div className="flex items-center gap-2.5 px-5">
<div className="w-6 h-6 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0">
<iconify-icon height="11" icon="solar:buildings-linear" style={{fontSize: '0.7rem', color: '#6b7280'}} width="11"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-500">Agence Web</span>
</div>
<div className="flex items-center gap-2.5 px-5">
<div className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center flex-shrink-0">
<iconify-icon height="9" icon="solar:shop-bold" style={{fontSize: '0.55rem', color: '#f97316'}} width="9"></iconify-icon>
</div>
<span className="text-sm font-semibold text-white">ShopifyExpress</span>
<span className="ml-1 text-xs font-medium text-orange-400 bg-orange-500/15 border border-orange-500/25 px-2 py-0.5 rounded-full">✦ Recommandé</span>
</div>
</div>

<div className="flex flex-col gap-2">

<div className="sm:hidden flex items-center justify-end gap-2 mb-2 pr-1">
<div className="flex items-center gap-1.5 w-[38%] justify-center">
<div className="w-5 h-5 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0">
<iconify-icon height="9" icon="solar:buildings-linear" style={{fontSize: '0.6rem', color: '#6b7280'}} width="9"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-500">Agence</span>
</div>
<div className="flex items-center gap-1.5 w-[38%] justify-center px-2 py-1.5 rounded-lg bg-orange-500/[0.06] border border-orange-500/20">
<div className="w-4 h-4 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center flex-shrink-0">
<iconify-icon height="7" icon="solar:shop-bold" style={{fontSize: '0.45rem', color: '#f97316'}} width="7"></iconify-icon>
</div>
<span className="text-xs font-semibold text-white">Moi</span>
</div>
</div>

<div className="compare-row group/row rounded-xl overflow-hidden border border-white/[0.05] hover:border-white/[0.1] transition-all duration-200 cursor-default bg-white/[0.015]">
<div className="hidden sm:grid sm:grid-cols-[1.4fr_1fr_1.15fr]">
<div className="px-5 py-4 flex items-center gap-3 border-r border-white/[0.05]">
<div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0">
<iconify-icon height="14" icon="solar:tag-price-linear" style={{fontSize: '0.875rem', color: '#6b7280'}} width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-300">Tarif</span>
</div>
<div className="px-5 py-4 flex items-center gap-2.5 border-r border-white/[0.05]">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
<iconify-icon height="7" icon="solar:close-linear" style={{fontSize: '0.45rem', color: '#f87171'}} width="7"></iconify-icon>
</div>
<span className="text-xs text-gray-500 font-normal leading-snug">Entre 2 000€ et 10 000€</span>
</div>
<div className="px-5 py-4 flex items-center gap-2.5 bg-orange-500/[0.03]">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-orange-500/15 border border-orange-500/40 flex items-center justify-center">
<iconify-icon height="8" icon="solar:check-linear" style={{fontSize: '0.5rem', color: '#f97316'}} width="8"></iconify-icon>
</div>
<span className="text-xs text-white font-medium leading-snug">450€ paiement unique — c'est tout</span>
</div>
</div>
<div className="sm:hidden flex flex-col">
<div className="flex items-center gap-2.5 px-4 pt-3.5 pb-2.5">
<div className="w-6 h-6 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0">
<iconify-icon height="12" icon="solar:tag-price-linear" style={{fontSize: '0.75rem', color: '#6b7280'}} width="12"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Tarif</span>
</div>
<div className="flex border-t border-white/[0.05]">
<div className="w-[50%] px-4 py-3 flex items-start gap-2 border-r border-white/[0.05]">
<div className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
<iconify-icon height="6" icon="solar:close-linear" style={{fontSize: '0.4rem', color: '#f87171'}} width="6"></iconify-icon>
</div>
<span className="text-xs text-gray-500 font-normal leading-snug">Entre 2 000€ et 10 000€</span>
</div>
<div className="w-[50%] px-4 py-3 flex items-start gap-2 bg-orange-500/[0.04]">
<div className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full bg-orange-500/15 border border-orange-500/40 flex items-center justify-center">
<iconify-icon height="7" icon="solar:check-linear" style={{fontSize: '0.45rem', color: '#f97316'}} width="7"></iconify-icon>
</div>
<span className="text-xs text-white font-medium leading-snug">450€ — paiement unique</span>
</div>
</div>
</div>
</div>

<div className="compare-row group/row rounded-xl overflow-hidden border border-white/[0.05] hover:border-white/[0.1] transition-all duration-200 cursor-default bg-white/[0.015]">
<div className="hidden sm:grid sm:grid-cols-[1.4fr_1fr_1.15fr]">
<div className="px-5 py-4 flex items-center gap-3 border-r border-white/[0.05]">
<div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0">
<iconify-icon height="14" icon="solar:clock-circle-linear" style={{fontSize: '0.875rem', color: '#6b7280'}} width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-300">Délai de livraison</span>
</div>
<div className="px-5 py-4 flex items-center gap-2.5 border-r border-white/[0.05]">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
<iconify-icon height="7" icon="solar:close-linear" style={{fontSize: '0.45rem', color: '#f87171'}} width="7"></iconify-icon>
</div>
<span className="text-xs text-gray-500 font-normal leading-snug">3 à 8 semaines d'attente</span>
</div>
<div className="px-5 py-4 flex items-center gap-2.5 bg-orange-500/[0.03]">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-orange-500/15 border border-orange-500/40 flex items-center justify-center">
<iconify-icon height="8" icon="solar:check-linear" style={{fontSize: '0.5rem', color: '#f97316'}} width="8"></iconify-icon>
</div>
<span className="text-xs text-white font-medium leading-snug">Boutique livrée en 48h chrono</span>
</div>
</div>
<div className="sm:hidden flex flex-col">
<div className="flex items-center gap-2.5 px-4 pt-3.5 pb-2.5">
<div className="w-6 h-6 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0">
<iconify-icon height="12" icon="solar:clock-circle-linear" style={{fontSize: '0.75rem', color: '#6b7280'}} width="12"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Délai</span>
</div>
<div className="flex border-t border-white/[0.05]">
<div className="w-[50%] px-4 py-3 flex items-start gap-2 border-r border-white/[0.05]">
<div className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
<iconify-icon height="6" icon="solar:close-linear" style={{fontSize: '0.4rem', color: '#f87171'}} width="6"></iconify-icon>
</div>
<span className="text-xs text-gray-500 font-normal leading-snug">3 à 8 semaines</span>
</div>
<div className="w-[50%] px-4 py-3 flex items-start gap-2 bg-orange-500/[0.04]">
<div className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full bg-orange-500/15 border border-orange-500/40 flex items-center justify-center">
<iconify-icon height="7" icon="solar:check-linear" style={{fontSize: '0.45rem', color: '#f97316'}} width="7"></iconify-icon>
</div>
<span className="text-xs text-white font-medium leading-snug">48h chrono</span>
</div>
</div>
</div>
</div>

<div className="compare-row group/row rounded-xl overflow-hidden border border-white/[0.05] hover:border-white/[0.1] transition-all duration-200 cursor-default bg-white/[0.015]">
<div className="hidden sm:grid sm:grid-cols-[1.4fr_1fr_1.15fr]">
<div className="px-5 py-4 flex items-center gap-3 border-r border-white/[0.05]">
<div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0">
<iconify-icon height="14" icon="solar:target-linear" style={{fontSize: '0.875rem', color: '#6b7280'}} width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-300">Approche</span>
</div>
<div className="px-5 py-4 flex items-center gap-2.5 border-r border-white/[0.05]">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
<iconify-icon height="7" icon="solar:close-linear" style={{fontSize: '0.45rem', color: '#f87171'}} width="7"></iconify-icon>
</div>
<span className="text-xs text-gray-500 font-normal leading-snug">Site vitrine sans stratégie de vente</span>
</div>
<div className="px-5 py-4 flex items-center gap-2.5 bg-orange-500/[0.03]">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-orange-500/15 border border-orange-500/40 flex items-center justify-center">
<iconify-icon height="8" icon="solar:check-linear" style={{fontSize: '0.5rem', color: '#f97316'}} width="8"></iconify-icon>
</div>
<span className="text-xs text-white font-medium leading-snug">Boutique optimisée pour convertir</span>
</div>
</div>
<div className="sm:hidden flex flex-col">
<div className="flex items-center gap-2.5 px-4 pt-3.5 pb-2.5">
<div className="w-6 h-6 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0">
<iconify-icon height="12" icon="solar:target-linear" style={{fontSize: '0.75rem', color: '#6b7280'}} width="12"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Approche</span>
</div>
<div className="flex border-t border-white/[0.05]">
<div className="w-[50%] px-4 py-3 flex items-start gap-2 border-r border-white/[0.05]">
<div className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
<iconify-icon height="6" icon="solar:close-linear" style={{fontSize: '0.4rem', color: '#f87171'}} width="6"></iconify-icon>
</div>
<span className="text-xs text-gray-500 font-normal leading-snug">Vitrine sans stratégie de vente</span>
</div>
<div className="w-[50%] px-4 py-3 flex items-start gap-2 bg-orange-500/[0.04]">
<div className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full bg-orange-500/15 border border-orange-500/40 flex items-center justify-center">
<iconify-icon height="7" icon="solar:check-linear" style={{fontSize: '0.45rem', color: '#f97316'}} width="7"></iconify-icon>
</div>
<span className="text-xs text-white font-medium leading-snug">Optimisée pour convertir</span>
</div>
</div>
</div>
</div>

<div className="compare-row group/row rounded-xl overflow-hidden border border-white/[0.05] hover:border-white/[0.1] transition-all duration-200 cursor-default bg-white/[0.015]">
<div className="hidden sm:grid sm:grid-cols-[1.4fr_1fr_1.15fr]">
<div className="px-5 py-4 flex items-center gap-3 border-r border-white/[0.05]">
<div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0">
<iconify-icon height="14" icon="solar:user-speak-linear" style={{fontSize: '0.875rem', color: '#6b7280'}} width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-300">Accompagnement</span>
</div>
<div className="px-5 py-4 flex items-center gap-2.5 border-r border-white/[0.05]">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
<iconify-icon height="7" icon="solar:close-linear" style={{fontSize: '0.45rem', color: '#f87171'}} width="7"></iconify-icon>
</div>
<span className="text-xs text-gray-500 font-normal leading-snug">Interlocuteur impersonnel, tickets</span>
</div>
<div className="px-5 py-4 flex items-center gap-2.5 bg-orange-500/[0.03]">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-orange-500/15 border border-orange-500/40 flex items-center justify-center">
<iconify-icon height="8" icon="solar:check-linear" style={{fontSize: '0.5rem', color: '#f97316'}} width="8"></iconify-icon>
</div>
<span className="text-xs text-white font-medium leading-snug">Suivi direct WhatsApp, 7j/7</span>
</div>
</div>
<div className="sm:hidden flex flex-col">
<div className="flex items-center gap-2.5 px-4 pt-3.5 pb-2.5">
<div className="w-6 h-6 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0">
<iconify-icon height="12" icon="solar:user-speak-linear" style={{fontSize: '0.75rem', color: '#6b7280'}} width="12"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Accompagnement</span>
</div>
<div className="flex border-t border-white/[0.05]">
<div className="w-[50%] px-4 py-3 flex items-start gap-2 border-r border-white/[0.05]">
<div className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
<iconify-icon height="6" icon="solar:close-linear" style={{fontSize: '0.4rem', color: '#f87171'}} width="6"></iconify-icon>
</div>
<span className="text-xs text-gray-500 font-normal leading-snug">Tickets impersonnels</span>
</div>
<div className="w-[50%] px-4 py-3 flex items-start gap-2 bg-orange-500/[0.04]">
<div className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full bg-orange-500/15 border border-orange-500/40 flex items-center justify-center">
<iconify-icon height="7" icon="solar:check-linear" style={{fontSize: '0.45rem', color: '#f97316'}} width="7"></iconify-icon>
</div>
<span className="text-xs text-white font-medium leading-snug">WhatsApp direct 7j/7</span>
</div>
</div>
</div>
</div>

<div className="compare-row group/row rounded-xl overflow-hidden border border-white/[0.05] hover:border-white/[0.1] transition-all duration-200 cursor-default bg-white/[0.015]">
<div className="hidden sm:grid sm:grid-cols-[1.4fr_1fr_1.15fr]">
<div className="px-5 py-4 flex items-center gap-3 border-r border-white/[0.05]">
<div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0">
<iconify-icon height="14" icon="solar:shield-check-linear" style={{fontSize: '0.875rem', color: '#6b7280'}} width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-300">Accessibilité</span>
</div>
<div className="px-5 py-4 flex items-center gap-2.5 border-r border-white/[0.05]">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
<iconify-icon height="7" icon="solar:close-linear" style={{fontSize: '0.45rem', color: '#f87171'}} width="7"></iconify-icon>
</div>
<span className="text-xs text-gray-500 font-normal leading-snug">Hors budget pour débuter</span>
</div>
<div className="px-5 py-4 flex items-center gap-2.5 bg-orange-500/[0.03]">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-orange-500/15 border border-orange-500/40 flex items-center justify-center">
<iconify-icon height="8" icon="solar:check-linear" style={{fontSize: '0.5rem', color: '#f97316'}} width="8"></iconify-icon>
</div>
<span className="text-xs text-white font-medium leading-snug">Conçu pour les porteurs de projet</span>
</div>
</div>
<div className="sm:hidden flex flex-col">
<div className="flex items-center gap-2.5 px-4 pt-3.5 pb-2.5">
<div className="w-6 h-6 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0">
<iconify-icon height="12" icon="solar:shield-check-linear" style={{fontSize: '0.75rem', color: '#6b7280'}} width="12"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Accessibilité</span>
</div>
<div className="flex border-t border-white/[0.05]">
<div className="w-[50%] px-4 py-3 flex items-start gap-2 border-r border-white/[0.05]">
<div className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
<iconify-icon height="6" icon="solar:close-linear" style={{fontSize: '0.4rem', color: '#f87171'}} width="6"></iconify-icon>
</div>
<span className="text-xs text-gray-500 font-normal leading-snug">Hors budget pour débuter</span>
</div>
<div className="w-[50%] px-4 py-3 flex items-start gap-2 bg-orange-500/[0.04]">
<div className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full bg-orange-500/15 border border-orange-500/40 flex items-center justify-center">
<iconify-icon height="7" icon="solar:check-linear" style={{fontSize: '0.45rem', color: '#f97316'}} width="7"></iconify-icon>
</div>
<span className="text-xs text-white font-medium leading-snug">Pour les porteurs de projet</span>
</div>
</div>
</div>
</div>

<div className="compare-row group/row rounded-xl overflow-hidden border border-white/[0.05] hover:border-white/[0.1] transition-all duration-200 cursor-default bg-white/[0.015]">
<div className="hidden sm:grid sm:grid-cols-[1.4fr_1fr_1.15fr]">
<div className="px-5 py-4 flex items-center gap-3 border-r border-white/[0.05]">
<div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0">
<iconify-icon height="14" icon="solar:hand-stars-linear" style={{fontSize: '0.875rem', color: '#6b7280'}} width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-300">Prise en main</span>
</div>
<div className="px-5 py-4 flex items-center gap-2.5 border-r border-white/[0.05]">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
<iconify-icon height="7" icon="solar:close-linear" style={{fontSize: '0.45rem', color: '#f87171'}} width="7"></iconify-icon>
</div>
<span className="text-xs text-gray-500 font-normal leading-snug">Tu te débrouilles seul après livraison</span>
</div>
<div className="px-5 py-4 flex items-center gap-2.5 bg-orange-500/[0.03]">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-orange-500/15 border border-orange-500/40 flex items-center justify-center">
<iconify-icon height="8" icon="solar:check-linear" style={{fontSize: '0.5rem', color: '#f97316'}} width="8"></iconify-icon>
</div>
<span className="text-xs text-white font-medium leading-snug">Formation &amp; tutoriels inclus</span>
</div>
</div>
<div className="sm:hidden flex flex-col">
<div className="flex items-center gap-2.5 px-4 pt-3.5 pb-2.5">
<div className="w-6 h-6 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0">
<iconify-icon height="12" icon="solar:hand-stars-linear" style={{fontSize: '0.75rem', color: '#6b7280'}} width="12"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Prise en main</span>
</div>
<div className="flex border-t border-white/[0.05]">
<div className="w-[50%] px-4 py-3 flex items-start gap-2 border-r border-white/[0.05]">
<div className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
<iconify-icon height="6" icon="solar:close-linear" style={{fontSize: '0.4rem', color: '#f87171'}} width="6"></iconify-icon>
</div>
<span className="text-xs text-gray-500 font-normal leading-snug">Tu te débrouilles seul</span>
</div>
<div className="w-[50%] px-4 py-3 flex items-start gap-2 bg-orange-500/[0.04]">
<div className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full bg-orange-500/15 border border-orange-500/40 flex items-center justify-center">
<iconify-icon height="7" icon="solar:check-linear" style={{fontSize: '0.45rem', color: '#f97316'}} width="7"></iconify-icon>
</div>
<span className="text-xs text-white font-medium leading-snug">Formation incluse</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 flex flex-col items-center gap-6 text-center">
<p className="text-xl sm:text-2xl font-medium text-white tracking-tight">Arrête de repousser. Lance ton
                    projet cette
                    <span className="font-serif italic font-normal bg-gradient-to-br from-orange-400 to-orange-600 bg-clip-text text-transparent">semaine.</span>
</p>
<a className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-400 text-white text-base font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_28px_rgba(249,115,22,0.35)] hover:shadow-[0_0_36px_rgba(249,115,22,0.5)]" href="#formulaire">
                    Je veux ma boutique en 48h — 450€
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative w-full z-10 py-24 px-6 border-t border-white/[0.03] flex justify-center items-center overflow-hidden" id="formulaire">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[60vh] pointer-events-none z-0">
<div className="w-full h-full rounded-full bg-orange-600/10 blur-[140px]"></div>
</div>
<div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
<div className="text-center mb-10">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">
                    On commence <span className="font-serif italic font-normal bg-gradient-to-br from-orange-400 to-orange-600 bg-clip-text text-transparent">maintenant ?</span>
</h2>
<p className="text-base sm:text-lg text-gray-400 font-light max-w-lg mx-auto leading-relaxed">
                    Laisse-nous tes coordonnées, on t'envoie un message WhatsApp dans l'heure pour valider ton projet.
                </p>
</div>
<form action="https://formsubmit.co/elyes.tachouaft@epitech.eu" className="w-full bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col gap-6" method="POST">

<input name="_subject" type="hidden" value="Nouvelle demande de création de boutique Shopify Express !"/>
<input name="_captcha" type="hidden" value="false"/>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-gray-300 ml-1" htmlFor="name">Prénom &amp; Nom</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all text-sm sm:text-base" id="name" name="Nom Complet" placeholder="Salima B." required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-gray-300 ml-1" htmlFor="whatsapp">Numéro WhatsApp</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all text-sm sm:text-base" id="whatsapp" name="Numero WhatsApp" placeholder="+33 6 12 34 56 78" required="" type="tel"/>
</div>
</div>
<div className="flex flex-col gap-2">
<span className="text-sm font-medium text-gray-300 ml-1">J'ai déjà un produit ?</span>
<div className="grid grid-cols-2 gap-4">
<label className="relative cursor-pointer">
<input className="peer sr-only" name="A_deja_un_produit" required="" type="radio" value="Oui"/>
<div className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-center text-sm sm:text-base text-gray-400 peer-checked:text-white peer-checked:border-orange-500/50 peer-checked:bg-orange-500/10 transition-all hover:bg-white/[0.04]">
                                Oui
                            </div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only" name="A_deja_un_produit" required="" type="radio" value="Non"/>
<div className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-center text-sm sm:text-base text-gray-400 peer-checked:text-white peer-checked:border-orange-500/50 peer-checked:bg-orange-500/10 transition-all hover:bg-white/[0.04]">
                                Non
                            </div>
</label>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-gray-300 ml-1" htmlFor="project">Ton projet en 1 phrase</label>
<textarea className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all text-sm sm:text-base resize-none" id="project" name="Description du projet" placeholder="Je veux vendre des bougies artisanales..." required="" rows="3"></textarea>
</div>
<button className="mt-2 w-full group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-400 text-white text-base font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]" type="submit">
                    Envoyer ma demande
                    <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" height="20" icon="solar:paperclip-send-linear" width="20"></iconify-icon>
</button>
<p className="text-center text-xs text-gray-500 mt-2 flex items-center justify-center gap-1.5">
<iconify-icon height="14" icon="solar:lock-password-linear" width="14"></iconify-icon>
                    Tes données sont sécurisées et ne seront jamais revendues.
                </p>
</form>
</div>
</section>


    </>
  );
}
