import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function handleAppDownload() {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            let targetUrl = '';
            if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                targetUrl = 'https://play.google.com/store/apps/details?id=jp.konami.pesam&hl=fr';
            } else {
                targetUrl = 'https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter&hl=fr';
            }
            window.location.href = targetUrl;
        }

        document.addEventListener("DOMContentLoaded", () => {
            // Initialize Lucide icons (kept for backward compatibility of footer)
            lucide.createIcons({
                attrs: {
                    'stroke-width': 1.5
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-zinc-50 font-medium tracking-tight text-lg uppercase flex items-center gap-2" href="/">
<div className="w-6 h-6 rounded overflow-hidden flex-shrink-0">
<svg className="w-full h-full" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<rect fill="#ff0033" height="100" width="100"></rect>
<path d="M 25 15 L 45 15 L 45 42 L 70 15 L 90 15 L 58 48 L 90 85 L 70 85 L 45 55 L 45 85 L 25 85 Z" fill="#111827"></path>
<rect fill="#ff0033" height="16" transform="translate(-18 45) rotate(-45)" width="16" x="45" y="48"></rect>
</svg>
</div>
                    Katicash
                </a>
<nav className="hidden md:flex items-center gap-6 text-base font-medium" id="main-nav">
<a className="hover:text-zinc-100 transition-colors" href="/#features">Produit</a>
<a className="text-zinc-100 transition-colors" href="/#security">Sécurité</a>
<a className="hover:text-zinc-100 transition-colors" href="/#economy">Économie</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="bg-zinc-100 text-zinc-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white transition-colors flex items-center gap-2" onclick="handleAppDownload()">
                    Télécharger l'App
                </button>
</div>
</div>
</header>

<main className="flex-grow pt-32 pb-24 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] opacity-10 blur-[100px] pointer-events-none" style={{background: 'radial-gradient(circle, rgba(16,185,129,0.4) 0%, rgba(24,24,27,0) 100%)'}}></div>
<div className="max-w-3xl mx-auto px-6 w-full relative z-10">

<div className="mb-16">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-6 backdrop-blur-sm">
<iconify-icon className="text-emerald-400 text-base" icon="solar:shield-check-linear"></iconify-icon>
                    Juridique &amp; Sécurité
                </div>
<h1 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-50 mb-4 leading-tight">
                    Conditions Générales d'Utilisation &amp; Confidentialité
                </h1>
<p className="text-sm text-zinc-500 font-medium">Dernière mise à jour : 17 Avril 2026</p>
</div>
<p className="text-base text-zinc-300 leading-relaxed mb-12">
                Bienvenue sur Katicash. En utilisant notre application, vous acceptez sans réserve les présentes conditions. Katicash est une plateforme de gestion de paris entre particuliers (P2P) exploitée au Cameroun, respectant les normes de cybersécurité et de protection des données locales.
            </p>
<div className="space-y-16">

<section>
<div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:document-text-linear"></iconify-icon>
<h2 className="text-2xl font-medium tracking-tight text-zinc-100">
                            Conditions Générales d'Utilisation (CGU)
                        </h2>
</div>
<div className="space-y-10">

<div>
<h3 className="text-lg font-medium text-zinc-200 mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:user-id-linear"></iconify-icon>
                                1. Éligibilité et Inscription
                            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
<iconify-icon className="mt-0.5 text-zinc-600 text-base flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div><span className="text-zinc-200 font-medium">Âge légal :</span> L'utilisation de Katicash est strictement réservée aux personnes âgées de 21 ans ou plus, conformément à la législation camerounaise sur les jeux de hasard.</div>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
<iconify-icon className="mt-0.5 text-zinc-600 text-base flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div><span className="text-zinc-200 font-medium">Identité :</span> Vous vous engagez à fournir des informations exactes. L'utilisation de comptes multiples pour manipuler le système est strictement interdite et entraînera une suspension.</div>
</li>
</ul>
</div>

<div>
<h3 className="text-lg font-medium text-zinc-200 mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:crown-linear"></iconify-icon>
                                2. Le Modèle "Social P2P Oracle"
                            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
<iconify-icon className="mt-0.5 text-zinc-600 text-base flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div><span className="text-zinc-200 font-medium">Rôle du Créateur :</span> Le créateur d'un pari (Poll) agit en tant qu'arbitre (Oracle). Il a l'obligation légale et morale de déclarer le résultat véridique.</div>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
<iconify-icon className="mt-0.5 text-zinc-600 text-base flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div><span className="text-zinc-200 font-medium">Pénalités :</span> Tout manquement au délai de validation (24h) entraîne une pénalité automatique de 10% sur la mise du créateur.</div>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
<iconify-icon className="mt-0.5 text-zinc-600 text-base flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div><span className="text-zinc-200 font-medium">Système de Réputation :</span> Votre comportement impacte votre score de "Karma". Un score négatif entraîne une restriction automatique des fonctionnalités de création.</div>
</li>
</ul>
</div>

<div>
<h3 className="text-lg font-medium text-zinc-200 mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:wallet-money-linear"></iconify-icon>
                                3. Gestion des Fonds et Transactions
                            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
<iconify-icon className="mt-0.5 text-zinc-600 text-base flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div><span className="text-zinc-200 font-medium">Mises &amp; Blocage :</span> Les fonds misés sont bloqués par Katicash (séquestre / Escrow) de manière sécurisée jusqu'à la résolution complète du pari.</div>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
<iconify-icon className="mt-0.5 text-zinc-600 text-base flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div><span className="text-zinc-200 font-medium">Méthodes de Paiement :</span> Les dépôts et retraits s'effectuent exclusivement via les opérateurs de Mobile Money locaux agréés (Orange Money, MTN MoMo).</div>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
<iconify-icon className="mt-0.5 text-zinc-600 text-base flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div><span className="text-zinc-200 font-medium">Commissions :</span> Katicash prélève une commission de 8% sur les gains totaux et reverse 2% au créateur (Cashback Oracle). Ces taux sont modifiables par l'administration.</div>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
<iconify-icon className="mt-0.5 text-zinc-600 text-base flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div><span className="text-zinc-200 font-medium">Annulation :</span> L'annulation d'un pari est techniquement impossible une fois que 50% de la durée prévue du pari s'est écoulée.</div>
</li>
</ul>
</div>

<div>
<h3 className="text-lg font-medium text-zinc-200 mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:gavel-linear"></iconify-icon>
                                4. Litiges et Arbitrage
                            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
<iconify-icon className="mt-0.5 text-zinc-600 text-base flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div><span className="text-zinc-200 font-medium">Contestation :</span> En cas de désaccord sur l'issue d'un pari, un utilisateur peut contester un résultat dans les délais impartis en fournissant une preuve matérielle formelle.</div>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
<iconify-icon className="mt-0.5 text-zinc-600 text-base flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div><span className="text-zinc-200 font-medium">Décision Souveraine :</span> En cas de litige insoluble entre les parties, l'administration de Katicash intervient et agit comme arbitre final. Sa décision est irrévocable sur la plateforme.</div>
</li>
</ul>
</div>
</div>
</section>

<section>
<div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4 pt-8">
<iconify-icon className="text-2xl text-blue-400" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
<h2 className="text-2xl font-medium tracking-tight text-zinc-100">
                            Politique de Confidentialité
                        </h2>
</div>
<div className="space-y-10">

<div>
<h3 className="text-lg font-medium text-zinc-200 mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:database-linear"></iconify-icon>
                                1. Collecte des Données
                            </h3>
<p className="text-sm text-zinc-400 mb-4">Nous collectons uniquement les données strictement nécessaires au bon fonctionnement de notre service :</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
<iconify-icon className="mt-0.5 text-zinc-600 text-base flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div><span className="text-zinc-200 font-medium">Identité :</span> Nom d'utilisateur, numéro de téléphone, et adresse email.</div>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
<iconify-icon className="mt-0.5 text-zinc-600 text-base flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div><span className="text-zinc-200 font-medium">Données Techniques :</span> Identifiant unique de l'appareil (Device ID) pour prévenir la fraude.</div>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
<iconify-icon className="mt-0.5 text-zinc-600 text-base flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div><span className="text-zinc-200 font-medium">Transactions :</span> Historique de vos paris, dépôts et retraits.</div>
</li>
</ul>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<h3 className="text-lg font-medium text-zinc-200 mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:server-linear"></iconify-icon>
                                    Utilisation &amp; Protection
                                </h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                    Vos données servent exclusivement à gérer vos paris, assurer la sécurité globale de la plateforme, détecter les comportements frauduleux et communiquer les résultats (notifications Push, SMS, Email).
                                </p>
<p className="text-sm text-zinc-400 leading-relaxed">
<span className="text-zinc-200 font-medium">Localisation &amp; Partage :</span> Vos données sont stockées de manière sécurisée et ne sont jamais vendues à des tiers. Conformément aux lois camerounaises, Katicash peut transmettre des informations aux autorités compétentes en cas de suspicion de blanchiment d'argent.
                                </p>
</div>
<div>
<h3 className="text-lg font-medium text-zinc-200 mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:devices-linear"></iconify-icon>
                                    Sécurité du Device ID
                                </h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                                    Pour garantir une équité totale lors des paris, Katicash enregistre l'empreinte numérique de votre appareil. 
                                </p>
<div className="mt-4 p-4 rounded-xl bg-zinc-900 border border-white/5 text-sm text-zinc-400">
<span className="text-emerald-400 font-medium flex items-center gap-2 mb-1">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon> Règle Anti-Fraude
                                    </span>
                                    Un même appareil ne peut être utilisé à la fois par le créateur et un parieur sur le même pari (Poll) afin d'éviter strictement l'auto-pari.
                                </div>
</div>
</div>
</div>
</section>

<section className="mt-16">
<div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-2xl p-6 md:p-8 border border-white/10 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col sm:flex-row items-start gap-4 relative z-10">
<div className="w-10 h-10 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-zinc-300 text-lg" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-zinc-100 mb-2 tracking-tight">Clause de Non-Responsabilité (Disclaimer)</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                                    Katicash est une plateforme technologique facilitant les interactions sociales. Bien que nous fassions tout notre possible pour assurer l'équité et la sécurité de notre écosystème, nous ne saurions être tenus responsables des pertes financières liées à une mauvaise compréhension des règles par l'utilisateur ou résultant de litiges privés entre individus hors de notre juridiction d'arbitrage.
                                </p>
</div>
</div>
</div>
</section>
</div>
</div>
</main>

<footer className="bg-zinc-950 border-t border-white/5 py-12 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded overflow-hidden flex-shrink-0 opacity-80">
<svg className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<rect fill="#ff0033" height="100" width="100"></rect>
<path d="M 25 15 L 45 15 L 45 42 L 70 15 L 90 15 L 58 48 L 90 85 L 70 85 L 45 55 L 45 85 L 25 85 Z" fill="#111827"></path>
<rect fill="#ff0033" height="16" transform="translate(-18 45) rotate(-45)" width="16" x="45" y="48"></rect>
</svg>
</div>
<span className="text-zinc-300 font-medium tracking-tight uppercase text-sm">Katicash</span>
</div>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-200 transition-colors" href="/">Accueil</a>
<a className="text-zinc-200 transition-colors" href="#">CGU &amp; Confidentialité</a>
<a className="hover:text-zinc-200 transition-colors" href="#">Support</a>
</div>
<div className="flex items-center gap-5 text-zinc-500">
<a className="hover:text-zinc-200 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="hover:text-zinc-200 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="mail"></i>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-8 text-center text-xs text-zinc-600">
            © 2024 Katicash. Tous droits réservés. Le pari social, la confiance en plus.
        </div>
</footer>



    </>
  );
}
