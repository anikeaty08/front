import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<span className="w-6 h-6 bg-white text-neutral-950 rounded flex items-center justify-center font-bold text-xs">D</span>
                DiawStudio
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#pricing">Tarifs</a>
<a className="hover:text-white transition-colors" href="#projects">Réalisations</a>
<a className="hover:text-white transition-colors" href="#blog">Blog</a>
</div>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="https://wa.me/">
                Devis gratuit
            </a>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-6 max-w-5xl mx-auto text-center z-10">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-400 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Agence Web à Dakar, Sénégal
            </div>
</div>
<div className="reveal delay-100">
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-medium text-white tracking-tight mb-6">
                Création de sites web 
                <span className="text-neutral-500">professionnels à Dakar</span>
</h1>
</div>
<div className="reveal delay-200">
<p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Des sites modernes, rapides et optimisés pour faire grandir votre entreprise au Sénégal. SEO inclus.
            </p>
</div>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-6 py-3.5 rounded-lg font-medium hover:bg-neutral-200 transition-all active:scale-95 text-sm" href="https://wa.me/">
<iconify-icon icon="lucide:message-circle" strokeWidth="1.5" width="18"></iconify-icon>
                Discuter sur WhatsApp
            </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium text-neutral-300 border border-white/10 hover:bg-white/5 transition-all text-sm" href="#pricing">
                Voir nos offres
            </a>
</div>
</section>

<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<section className="py-32 px-6 max-w-6xl mx-auto" id="services">
<div className="mb-20 reveal">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">Nos services</h2>
<p className="text-neutral-500 max-w-xl">Des solutions digitales complètes adaptées au marché sénégalais.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass p-8 rounded-xl hover:border-white/20 transition-colors group reveal">
<div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="lucide:monitor" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Création de Site Vitrine</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">
                    Présentez vos services clairement et gagnez en crédibilité. Sites 4-5 pages optimisés SEO.
                </p>
<ul className="text-xs text-neutral-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Design moderne et responsive</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Intégration WhatsApp</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Livraison sous 7 jours</li>
</ul>
</div>

<div className="glass p-8 rounded-xl hover:border-white/20 transition-colors group reveal delay-100">
<div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Sites E-commerce Sénégal</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">
                    Vendez vos produits 24/7 avec une boutique sécurisée. Paiements locaux intégrés.
                </p>
<ul className="text-xs text-neutral-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Paiements Wave &amp; Orange Money</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Gestion des commandes simplifiée</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Catalogue illimité</li>
</ul>
</div>

<div className="glass p-8 rounded-xl hover:border-white/20 transition-colors group reveal">
<div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="lucide:wrench" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Maintenance &amp; Support</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">
                    Sécurité, mises à jour et assistance WhatsApp pour garder votre site performant.
                </p>
<ul className="text-xs text-neutral-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Sauvegardes automatiques</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Sécurisation anti-piratage</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Assistance 7j/7</li>
</ul>
</div>

<div className="glass p-8 rounded-xl hover:border-white/20 transition-colors group reveal delay-100">
<div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="lucide:palette" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Branding &amp; Design</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">
                    Identité visuelle, logos et chartes graphiques pour une image de marque forte.
                </p>
<ul className="text-xs text-neutral-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Création de logo</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Bannières réseaux sociaux</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Charte graphique complète</li>
</ul>
</div>
</div>
</section>

<section className="py-32 bg-neutral-900/30 border-y border-white/5 relative overflow-hidden" id="pricing">
<div className="grid-bg absolute inset-0 opacity-20 pointer-events-none"></div>
<div className="px-6 max-w-6xl mx-auto relative z-10">
<div className="text-center mb-20 reveal">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">Prix &amp; Offres</h2>
<p className="text-neutral-500">Des offres simples et transparentes, adaptées à tous les budgets.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

<div className="glass p-8 rounded-xl flex flex-col border border-white/5 hover:border-white/10 transition-colors reveal">
<div className="mb-4">
<span className="text-xs font-medium text-neutral-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">Starter</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold text-white tracking-tight">79 000</span>
<span className="text-sm text-neutral-500">CFA</span>
</div>
<p className="text-sm text-neutral-400 mb-8 h-10">Site vitrine 1 page – idéal pour débuter une activité en ligne.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white shrink-0" icon="lucide:check"></iconify-icon> Design moderne
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white shrink-0" icon="lucide:check"></iconify-icon> Section services
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white shrink-0" icon="lucide:check"></iconify-icon> Contact WhatsApp
                        </li>
</ul>
<a className="w-full py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors flex items-center justify-center" href="https://wa.me/">Commander</a>
</div>

<div className="glass-strong p-8 rounded-xl flex flex-col relative transform md:-translate-y-4 reveal delay-100">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Populaire</div>
<div className="mb-4">
<span className="text-xs font-medium text-white bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-500/20 text-indigo-300">Business</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold text-white tracking-tight">149 000</span>
<span className="text-sm text-neutral-500">CFA</span>
</div>
<p className="text-sm text-neutral-400 mb-8 h-10">Site vitrine complet (4–5 pages) pour asseoir votre crédibilité.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-400 shrink-0" icon="lucide:check"></iconify-icon> Design premium
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-400 shrink-0" icon="lucide:check"></iconify-icon> 5 pages (Accueil, Services...)
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-400 shrink-0" icon="lucide:check"></iconify-icon> SEO avancé Google SN
                        </li>
</ul>
<a className="w-full py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center" href="https://wa.me/">Commander</a>
</div>

<div className="glass p-8 rounded-xl flex flex-col border border-white/5 hover:border-white/10 transition-colors reveal delay-200">
<div className="mb-4">
<span className="text-xs font-medium text-neutral-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">E-commerce</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold text-white tracking-tight">249 000</span>
<span className="text-sm text-neutral-500">CFA</span>
</div>
<p className="text-sm text-neutral-400 mb-8 h-10">Boutique en ligne complète avec paiements locaux intégrés.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white shrink-0" icon="lucide:check"></iconify-icon> Shopify ou WooCommerce
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white shrink-0" icon="lucide:check"></iconify-icon> Paiement Wave &amp; Orange Money
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white shrink-0" icon="lucide:check"></iconify-icon> Gestion des commandes
                        </li>
</ul>
<a className="w-full py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors flex items-center justify-center" href="https://wa.me/">Lancer ma boutique</a>
</div>
</div>

<div className="max-w-4xl mx-auto border-t border-white/5 pt-12 reveal">
<h3 className="text-lg font-medium text-white mb-6 text-center">Options supplémentaires</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
<div className="p-4 rounded-lg bg-white/5">
<div className="text-sm text-white font-medium">Logo Pro</div>
<div className="text-xs text-neutral-500 mt-1">29 000 CFA</div>
</div>
<div className="p-4 rounded-lg bg-white/5">
<div className="text-sm text-white font-medium">Rédaction SEO</div>
<div className="text-xs text-neutral-500 mt-1">19 000 CFA</div>
</div>
<div className="p-4 rounded-lg bg-white/5">
<div className="text-sm text-white font-medium">Maintenance</div>
<div className="text-xs text-neutral-500 mt-1">15 000 CFA/mois</div>
</div>
<div className="p-4 rounded-lg bg-white/5">
<div className="text-sm text-white font-medium">Hébergement</div>
<div className="text-xs text-neutral-500 mt-1">35 000 CFA/an</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-6xl mx-auto" id="projects">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
<div>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">Quelques projets réalisés</h2>
<p className="text-neutral-500">Un aperçu de notre travail pour des clients locaux.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer reveal">
<div className="w-full aspect-video bg-neutral-900 border border-white/10 rounded-xl overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<div className="w-1/2 h-1/2 bg-white/5 rounded-lg border border-white/5 shadow-2xl"></div>
</div>
</div>
<h3 className="text-white font-medium">Site vitrine pour entreprise locale</h3>
<p className="text-sm text-neutral-500">Design UI / Développement Web</p>
</div>

<div className="group cursor-pointer reveal delay-100">
<div className="w-full aspect-video bg-neutral-900 border border-white/10 rounded-xl overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 to-neutral-950 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<div className="w-1/2 h-1/2 bg-white/5 rounded-lg border border-white/5 shadow-2xl flex flex-col gap-2 p-2"></div>
</div>
</div>
<h3 className="text-white font-medium">Boutique en ligne pour marque sénégalaise</h3>
<p className="text-sm text-neutral-500">E-commerce / Wave &amp; Orange Money</p>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-4xl mx-auto border-t border-white/5" id="blog">
<div className="text-center mb-20 reveal">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">Conseils &amp; Actualités</h2>
<p className="text-neutral-500">Guides pratiques pour réussir votre présence en ligne au Sénégal.</p>
</div>
<div className="space-y-6">

<details className="group glass rounded-xl border border-white/5 overflow-hidden reveal">
<summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
<div className="flex-1 pr-4">
<h3 className="text-lg font-medium text-white">Prix d’un site web au Sénégal en 2025 : guide complet</h3>
<p className="text-sm text-neutral-500 mt-1">Comprendre les coûts réels de la création web à Dakar.</p>
</div>
<span className="text-white transform group-open:rotate-180 transition-transform shrink-0">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-8 pt-2 text-sm text-neutral-400 leading-relaxed border-t border-white/5 bg-neutral-900/50">
<article className="prose prose-invert max-w-none">
<p className="mb-4 mt-4">Créer un site web professionnel au Sénégal est devenu essentiel pour toute entreprise qui souhaite gagner en visibilité et attirer plus de clients. En 2025, les prix varient selon le type de site, la plateforme et les fonctionnalités.</p>
<h4 className="text-white font-medium text-base mb-2">Combien coûte un site web au Sénégal ?</h4>
<p className="mb-2">En moyenne :</p>
<ul className="list-disc pl-5 mb-4 space-y-1">
<li><strong>Site vitrine :</strong> 50 000 à 200 000 CFA</li>
<li><strong>Site e-commerce :</strong> 150 000 à 400 000 CFA</li>
<li><strong>Site sur-mesure :</strong> 300 000 à 1 000 000 CFA</li>
</ul>
<a className="inline-flex items-center gap-1 text-indigo-400 font-medium hover:underline" href="https://wa.me/">Contactez DiawStudio pour un devis gratuit</a>
</article>
</div>
</details>

<details className="group glass rounded-xl border border-white/5 overflow-hidden reveal">
<summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
<div className="flex-1 pr-4">
<h3 className="text-lg font-medium text-white">Comment choisir la meilleure agence web à Dakar ?</h3>
<p className="text-sm text-neutral-500 mt-1">Les critères essentiels pour ne pas se tromper de prestataire.</p>
</div>
<span className="text-white transform group-open:rotate-180 transition-transform shrink-0">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-8 pt-2 text-sm text-neutral-400 leading-relaxed border-t border-white/5 bg-neutral-900/50">
<article className="prose prose-invert max-w-none">
<p className="mb-4 mt-4">Avec la croissance numérique rapide au Sénégal, choisir la bonne agence web à Dakar est devenu un enjeu stratégique.</p>
<p className="mb-4">Vérifiez le portfolio, la transparence des prix et la réactivité sur WhatsApp.</p>
<a className="inline-flex items-center gap-1 text-indigo-400 font-medium hover:underline" href="https://wa.me/">DiawStudio vous accompagne du début à la fin</a>
</article>
</div>
</details>

<details className="group glass rounded-xl border border-white/5 overflow-hidden reveal">
<summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
<div className="flex-1 pr-4">
<h3 className="text-lg font-medium text-white">Pourquoi chaque entreprise au Sénégal a besoin d’un site web ?</h3>
<p className="text-sm text-neutral-500 mt-1">La transformation digitale au service de votre croissance.</p>
</div>
<span className="text-white transform group-open:rotate-180 transition-transform shrink-0">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-8 pt-2 text-sm text-neutral-400 leading-relaxed border-t border-white/5 bg-neutral-900/50">
<article className="prose prose-invert max-w-none">
<p className="mb-4 mt-4">Le Sénégal connaît une transformation digitale historique. Les entreprises sans site web perdent des clients chaque jour au profit de concurrents visibles sur Google.</p>
<a className="inline-flex items-center gap-1 text-indigo-400 font-medium hover:underline" href="https://wa.me/">Créons votre site aujourd’hui</a>
</article>
</div>
</details>
</div>
</section>

<section className="py-32 px-6 max-w-6xl mx-auto border-t border-white/5" id="testimonials">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-16 text-center reveal">Ils nous font confiance</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl bg-white/5 border border-white/5 reveal">
<div className="text-neutral-400 mb-4">
<iconify-icon icon="lucide:quote" width="20"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">
                    “Service rapide et professionnel. Mon site a complètement changé mon activité.”
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold text-white">A</div>
<div>
<div className="text-white text-xs font-medium">Aïcha</div>
<div className="text-neutral-500 text-[10px] uppercase tracking-wider">Entrepreneure à Dakar</div>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-white/5 border border-white/5 reveal delay-100">
<div className="text-neutral-400 mb-4">
<iconify-icon icon="lucide:quote" width="20"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">
                    “Très bon accompagnement, l’équipe DiawStudio est toujours disponible sur WhatsApp.”
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold text-white">M</div>
<div>
<div className="text-white text-xs font-medium">Moussa</div>
<div className="text-neutral-500 text-[10px] uppercase tracking-wider">Consultant</div>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-white/5 border border-white/5 reveal delay-200">
<div className="text-neutral-400 mb-4">
<iconify-icon icon="lucide:quote" width="20"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">
                    “Site moderne avec paiement Wave intégré, livraison rapide en 7 jours.”
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold text-white">F</div>
<div>
<div className="text-white text-xs font-medium">Fatou</div>
<div className="text-neutral-500 text-[10px] uppercase tracking-wider">Commerçante</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 text-center relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto reveal">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
                Prêt à créer votre site web ?
            </h2>
<p className="text-lg text-neutral-400 mb-10">
                Un site moderne, rapide et optimisé pour attirer plus de clients à Dakar.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-medium hover:bg-neutral-200 transition-all text-sm" href="https://wa.me/">
<iconify-icon icon="lucide:message-circle" strokeWidth="1.5" width="18"></iconify-icon>
                    Discuter sur WhatsApp
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-neutral-300 border border-white/10 hover:bg-white/5 transition-all text-sm" href="#pricing">
                    Voir les tarifs
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white font-medium tracking-tight">
<span className="w-5 h-5 bg-white text-black rounded flex items-center justify-center font-bold text-[10px]">D</span>
                DiawStudio
            </div>
<div className="text-sm text-neutral-500">
                © 2025 DiawStudio Dakar. Tous droits réservés.
            </div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}
