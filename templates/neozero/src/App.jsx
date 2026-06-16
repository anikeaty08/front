import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function showPage(pageId) {
            // Hide all pages
            document.getElementById('home-page').classList.add('hidden');
            document.getElementById('request-page').classList.add('hidden');
            document.getElementById('login-confirmation-page').classList.add('hidden');
            document.getElementById('subscription-success-page').classList.add('hidden');
            document.getElementById('redirect-page').classList.add('hidden');

            // Show selected page with animation
            const selected = document.getElementById(pageId + '-page');
            if (selected) {
                selected.classList.remove('hidden');
                selected.classList.add('fade-in');
            }
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        function handleSubmit(event) {
            event.preventDefault();
            
            const btn = event.target.querySelector('button[type="submit"]');
            const originalContent = btn.innerHTML;
            
            btn.innerHTML = '<iconify-icon icon="lucide:loader-2" width="18" height="18" class="animate-spin"></iconify-icon>';
            btn.classList.add('opacity-80', 'cursor-not-allowed');
            
            setTimeout(() => {
                showPage('login-confirmation');
                event.target.reset();
                btn.innerHTML = originalContent;
                btn.classList.remove('opacity-80', 'cursor-not-allowed');
            }, 1200);
        }

        // Logic for Stripe redirects via Hash and Confirmation via path
        document.addEventListener('DOMContentLoaded', () => {
            
            const stripeLinks = {
                '#pay-essentiel': 'https://buy.stripe.com/14A7sD1LmdNq4NS9TXgQE00',
                '#pay-confort': 'https://buy.stripe.com/fZu3cncq0fVybcg7LPgQE01',
                '#pay-signature': 'https://buy.stripe.com/dRmbITey824I2FK6HLgQE02'
            };

            function checkHash() {
                const hash = window.location.hash;
                if (stripeLinks[hash]) {
                    // Hide main content immediately to show redirect state
                    document.getElementById('home-page').classList.add('hidden');
                    document.getElementById('redirect-page').classList.remove('hidden');
                    
                    // Redirect
                    setTimeout(() => {
                        window.location.href = stripeLinks[hash];
                    }, 800);
                    return true;
                }
                return false;
            }

            // Check on load
            if (!checkHash()) {
                // Check for confirmation path if no hash redirect found
                const path = window.location.pathname;
                if (path.endsWith('/confirmation')) {
                    showPage('subscription-success');
                }
            }

            // Check on hash change (if user clicks link on the same page)
            window.addEventListener('hashchange', checkHash);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 bg-neutral-950/80 w-full border-white/5 border-b top-0 backdrop-blur-md">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-8">
<a className="hover:text-neutral-300 transition-colors text-xl font-medium text-white tracking-tighter" href="/" onclick="showPage('home'); return false;">NeoZero</a>
<div className="hidden md:flex gap-6">
<a className="hover:text-white transition-colors text-sm text-neutral-400" href="#abonnements" onclick="showPage('home')">Abonnements</a>
</div>
</div>
<button className="hover:text-white transition-colors flex gap-2 text-sm font-medium text-neutral-400 tracking-tight items-center" onclick="showPage('request')">
<span className="">Espace Membre</span>
<iconify-icon className="" height="16" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</nav>

<main className="flex-grow overflow-hidden pt-24 pb-12 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none -z-10"></div>

<section className="fade-in max-w-6xl mr-auto ml-auto pr-6 pl-6" id="home-page">

<div className="flex flex-col md:mt-24 text-center mt-12 mb-24 items-center">
<div className="inline-flex text-xs font-medium text-neutral-300 bg-white/5 border-white/10 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">Service disponible sur abonnement</div>
<h1 className="md:text-7xl lg:text-8xl leading-[0.9] text-5xl font-medium text-white tracking-tighter mb-6">NeoZero, votre concierge automobile personnel</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-neutral-400 max-w-xl mb-10">Un service sur mesure pour celles et ceux qui n'ont ni le temps, ni l'envie de gérer les contraintes automobiles.</p>
<a className="group inline-flex overflow-hidden transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] font-medium text-black bg-white h-12 rounded-md pr-8 pl-8 relative items-center justify-center cursor-pointer" href="#abonnements">
<span className="mr-2">Découvrir les abonnements NeoZero</span>
<iconify-icon className="transition-transform duration-300 group-hover:translate-y-1" height="18" icon="lucide:arrow-down" width="18"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 border-white/5 border-t pt-16 gap-x-6 gap-y-6">
<div className="group hover:bg-neutral-900/40 transition-all duration-500 bg-neutral-900/20 border-white/5 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-white">
<iconify-icon height="20" icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Sécurité &amp; discrétion</h3>
<p className="leading-relaxed text-sm text-neutral-400">Convoyage assuré, prise en charge rigoureuse et respect total de votre confidentialité.</p>
</div>
<div className="group p-6 rounded-xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-500">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-white">
<iconify-icon className="" height="20" icon="lucide:clock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Anticipation &amp; organisation</h3>
<p className="leading-relaxed text-sm text-neutral-400">Les rendez-vous sont planifiés au bon moment pour éviter toute immobilisation inutile.</p>
</div>
<div className="group p-6 rounded-xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-500">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-white">
<iconify-icon className="" height="20" icon="lucide:gem" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Conciergerie automobile</h3>
<p className="leading-relaxed text-sm text-neutral-400">Un interlocuteur unique pour gérer votre véhicule sans que vous ayez à y penser.</p>
</div>
</div>

<div className="border-white/5 border-t mt-24 pt-24">
<div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
<div className="">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tighter mb-4">L'approche NeoZero</h2>
<p className="leading-relaxed text-neutral-400 max-w-xl">Un service proactif qui sécurise votre temps, votre mobilité et votre tranquillité d’esprit.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="group p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-white/10 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-indigo-300 border border-white/5">
<iconify-icon className="" height="24" icon="lucide:radar" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Anticipation</h3>
<p className="leading-relaxed text-sm text-neutral-400">Entretiens, révisions, contrôles techniques, pneus, besoins de mobilité…
Tout est suivi et anticipé pour éviter les urgences.</p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-white/10 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-emerald-300 border border-white/5">
<iconify-icon height="24" icon="lucide:trending-up" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Optimisation des coûts</h3>
<p className="leading-relaxed text-sm text-neutral-400">Comparaison de devis, analyse par des professionnels et alertes en cas de surcoût injustifié. Les économies compensent souvent l'abonnement.</p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-white/10 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[60px] rounded-full pointer-events-none group-hover:bg-white/10 transition-all duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-neutral-200 border border-white/5">
<iconify-icon height="24" icon="lucide:sunset" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Tranquillité d’esprit</h3>
<p className="leading-relaxed text-sm text-neutral-400">Un interlocuteur unique qui gère votre véhicule pour vous.
Vous n’avez plus à penser aux contraintes automobiles.</p>
</div>
</div>
</div>

<div className="border-white/5 border-t mt-24 pt-24 scroll-mt-24" id="abonnements">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-6">Les abonnements NeoZero</h2>
<div className="max-w-3xl">
<p className="text-neutral-400 font-light text-lg leading-relaxed">Offres réservées exclusivement aux membres NeoZero. Afin de garantir un service réellement personnalisé, l’accès est volontairement limité à 150 abonnements actifs.</p>
<div className="mt-6 flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-emerald-400 uppercase tracking-widest">Places disponibles</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-300 group hover:-translate-y-1">
<div className="flex items-center justify-between mb-6">
<div className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold uppercase tracking-widest">Offre découverte</div>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">NeoZero Essentiel</h3>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-neutral-500 line-through text-lg font-light">24 €</span>
<span className="text-4xl font-semibold text-white tracking-tight">14 €</span>
<span className="text-neutral-500 text-sm font-normal">/ mois</span>
</div>
<div className="h-px bg-white/5 w-full mb-6"></div>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 flex-grow">
                            Vous nous contactez lorsque vous en avez besoin.
                            <br/><br/>
                            NeoZero s’occupe de la comparaison des devis, de la prise de rendez-vous et de conseils objectifs à la demande.
                            <br/><br/>
                            Le convoyage (dépôt et restitution du véhicule) est disponible sur devis, réservé aux membres NeoZero.
                        </p>
<div className="mt-auto">
<a className="hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium text-black bg-white w-full h-11 rounded-lg" href="https://buy.stripe.com/14A7sD1LmdNq4NS9TXgQE00">
<span className="" onclick="window.location.href='/#pay-essentiel'" role="button">Choisir Essentiel</span>
</a>
</div>
</div>

<div className="flex flex-col p-8 rounded-2xl border border-white/10 bg-white/[0.04] hover:border-white/20 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="flex items-center justify-between mb-6">
<div className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold uppercase tracking-widest">Offre découverte</div>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">NeoZero Confort</h3>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-neutral-500 line-through text-lg font-light">39 €</span>
<span className="text-4xl font-semibold text-white tracking-tight">29 €</span>
<span className="text-neutral-500 text-sm font-normal">/ mois</span>
</div>
<div className="h-px bg-white/5 w-full mb-6"></div>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 flex-grow">
                            En plus des services Essentiel, NeoZero assure :
                            <br/><br/>
                            – des rappels d’entretien anticipés,<br/>
                            – la planification proactive des rendez-vous,<br/>
                            – le stockage et le suivi de vos factures et documents.
                        </p>
<div className="mt-auto">
<a className="hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium text-black bg-white w-full h-11 rounded-lg" href="#pay-confort">
<span className="" onclick="window.location.href='/#pay-confort'" role="button">Choisir Confort</span>
</a>
</div>
</div>

<div className="flex flex-col p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-300 group hover:-translate-y-1">
<div className="flex items-center justify-between mb-6">
<div className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold uppercase tracking-widest">Offre découverte</div>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">NeoZero Signature</h3>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-neutral-500 line-through text-lg font-light">49 €</span>
<span className="text-4xl font-semibold text-white tracking-tight">34 €</span>
<span className="text-neutral-500 text-sm font-normal">/ mois</span>
</div>
<div className="h-px bg-white/5 w-full mb-6"></div>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 flex-grow">
                            En plus des services Confort, NeoZero propose :
                            <br/><br/>
                            – un suivi personnalisé des échéances (contrôle technique, entretien, pneus),<br/>
                            – des conseils préventifs pour éviter les immobilisations,<br/>
                            – l’étude des contrats (assurances, extensions, garanties),<br/>
                            – l’anticipation des solutions de mobilité (véhicule de prêt, options assurantielles).
                        </p>
<div className="mt-auto">
<a className="hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium text-black bg-white w-full h-11 rounded-lg" href="/#pay-signature">
<span className="">Choisir Signature</span>
</a>
</div>
</div>
</div>
<div className="mt-16 text-center pb-12">
<p className="text-xs text-neutral-500 font-medium tracking-tight">Sans engagement. Résiliable à tout moment. Le convoyage est proposé sur devis et réservé aux membres NeoZero.</p>
</div>
</div>
</section>

<section className="hidden max-w-2xl mx-auto px-6 fade-in pt-12" id="request-page">
<button className="mb-8 text-neutral-500 hover:text-white transition-colors flex items-center gap-2 text-sm" onclick="showPage('home')">
<iconify-icon height="16" icon="lucide:arrow-left" strokeWidth="1.5" width="16"></iconify-icon>
                Retour
            </button>
<div className="mb-10">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-2">Espace Membre</h2>
<p className="text-neutral-400 font-light">Connexion sécurisée. Veuillez renseigner vos informations.</p>
</div>
<form className="space-y-6" onsubmit="handleSubmit(event)">

<div className="space-y-4 p-6 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-2 mb-2 text-xs font-medium text-neutral-500 uppercase tracking-widest">
<iconify-icon height="14" icon="lucide:user" strokeWidth="1.5" width="14"></iconify-icon>
                        Identification
                    </div>
<div className="group relative">
<label className="block text-xs text-neutral-500 mb-1.5 ml-1">Email</label>
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-neutral-900 transition-all" required="" type="email"/>
</div>
<div className="group relative">
<label className="block text-xs text-neutral-500 mb-1.5 ml-1">Mot de passe</label>
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-neutral-900 transition-all" required="" type="password"/>
</div>
</div>
<div className="pt-4">
<button className="w-full h-12 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2" type="submit">
<span>Se connecter</span>
<iconify-icon height="16" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<p className="text-center mt-4 text-xs text-neutral-600">Transmission chiffrée. Confidentialité garantie.</p>
</div>
</form>
</section>

<section className="hidden max-w-xl mx-auto px-6 h-[60vh] flex flex-col justify-center items-center text-center fade-in" id="login-confirmation-page">
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.1)]">
<iconify-icon height="32" icon="lucide:check" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-4">Connexion établie</h2>
<p className="text-neutral-400 font-light leading-relaxed mb-10 max-w-md">
                Bienvenue dans votre espace NeoZero.
            </p>
<button className="px-6 py-2 rounded-full border border-neutral-800 text-sm text-neutral-300 hover:text-white hover:border-neutral-600 transition-all duration-300 bg-transparent" onclick="showPage('home')">
                Retour
            </button>
</section>

<section className="hidden max-w-xl mx-auto px-6 h-[70vh] flex flex-col justify-center items-center text-center fade-in" id="subscription-success-page">
<div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8 text-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
<iconify-icon height="40" icon="lucide:check-circle-2" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h1 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-8 leading-tight">Merci pour votre abonnement NeoZero</h1>
<div className="space-y-6 text-neutral-400 font-light text-lg leading-relaxed max-w-lg">
<p>Votre paiement a bien été confirmé.</p>
<p>Un conseiller NeoZero vous recontactera très prochainement afin de mettre en place votre suivi et activer votre abonnement.</p>
<p className="text-neutral-600 text-base pt-4">Vous n’avez rien d’autre à faire pour le moment.</p>
</div>
</section>

<section className="hidden h-[70vh] w-full flex flex-col items-center justify-center fade-in" id="redirect-page">
<div className="mb-6 relative">
<iconify-icon className="animate-spin text-white" height="40" icon="lucide:loader-2" width="40"></iconify-icon>
</div>
<p className="text-neutral-400 text-sm font-medium tracking-tight animate-pulse">Redirection vers le paiement sécurisé...</p>
</section>
</main>

<footer className="bg-neutral-950 border-white/5 border-t mt-auto pt-8 pb-8">
<div className="flex flex-col md:flex-row max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="text-sm font-medium text-neutral-500 tracking-tight">NEOZERO © 2025</div>
<div className="flex gap-6">
<a className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors" href="#">Confidentialité</a>
<a className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors" href="#">CGV</a>
<a className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
