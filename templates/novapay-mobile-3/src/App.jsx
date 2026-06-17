import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci ! Notre équipe vous contactera sous 24h pour planifier votre démonstration.');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b bg-black/80 border-neutral-900">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight text-neutral-100" href="#">NovaPay</a>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
<a className="transition-colors hover:text-neutral-100" href="#solution">Solution</a>
<a className="transition-colors hover:text-neutral-100" href="#fonctionnement">Fonctionnement</a>
<a className="transition-colors hover:text-neutral-100" href="#tarifs">Tarifs</a>
<a className="transition-colors hover:text-neutral-100" href="#contact">Contact</a>
</div>
<a className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors bg-neutral-100 text-black hover:bg-neutral-200" href="#demo">
                Demander une démo
            </a>
</div>
</nav>

<section className="lg:pt-44 lg:pb-32 pt-32 pr-6 pb-20 pl-6">
<div className="max-w-6xl mx-auto">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 bg-emerald-950 text-emerald-300">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    Pilotes en cours en Île-de-France
                </div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6 text-neutral-100">
                    Vos clients n'aiment pas faire la queue.<br/>
<span className="text-neutral-600">Nous non plus.</span>
</h1>
<p className="text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl text-neutral-400">
                    NovaPay permet à vos clients de scanner, payer et partir — sans passer en caisse. La première solution qui retire aussi l'antivol automatiquement.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-all hover:scale-105 bg-neutral-100 text-black hover:bg-neutral-200" href="#demo">
                        Demander une démo
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-colors bg-neutral-900 text-neutral-100 hover:bg-neutral-800" href="#fonctionnement">
                        Voir comment ça marche
                    </a>
</div>
</div>

<div className="mt-16 lg:mt-24 relative">
<div className="bg-gradient-to-br rounded-3xl p-8 lg:p-16 relative overflow-hidden from-neutral-950 to-neutral-900">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="relative">
<div className="w-64 h-auto mx-auto rounded-3xl p-2 shadow-2xl bg-neutral-100">
<div className="rounded-2xl p-6 aspect-[9/16] flex flex-col bg-black">
<div className="text-center mb-4">
<div className="text-xs mb-1 text-neutral-600">Total à payer</div>
<div className="text-3xl font-semibold tracking-tight">89,00 €</div>
</div>
<div className="flex-1 space-y-3">
<div className="rounded-xl p-3 flex items-center gap-3 bg-neutral-950">
<div className="w-10 h-10 rounded-lg bg-neutral-800"></div>
<div className="flex-1">
<div className="text-sm font-medium">T-shirt Premium</div>
<div className="text-xs text-neutral-500">Taille M</div>
</div>
<div className="text-sm font-medium">45 €</div>
</div>
<div className="rounded-xl p-3 flex items-center gap-3 bg-neutral-950">
<div className="w-10 h-10 rounded-lg bg-neutral-800"></div>
<div className="flex-1">
<div className="text-sm font-medium">Jean Slim</div>
<div className="text-xs text-neutral-500">Taille 40</div>
</div>
<div className="text-sm font-medium">44 €</div>
</div>
</div>
<div className="mt-4 rounded-xl py-3 text-center text-sm font-medium bg-neutral-100 text-black">
                                        Payer avec Apple Pay
                                    </div>
</div>
</div>
</div>

<div className="relative">
<div className="w-48 h-64 mx-auto bg-gradient-to-b rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6 from-neutral-200 to-neutral-100">
<div className="text-center mb-6 text-black">
<div className="text-xs uppercase tracking-wider mb-2 text-neutral-600">NovaStation</div>
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:scan-line" data-width="48" height="48" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m4-5h10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-full rounded-lg h-2 mb-4 bg-neutral-300">
<div className="h-2 rounded-lg w-3/4 bg-emerald-600"></div>
</div>
<div className="text-xs font-medium text-emerald-600">Antivol retiré ✓</div>
</div>
<div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full shadow-lg text-xs font-medium bg-black text-neutral-400">
                                Déverrouillage en 2 sec
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6 bg-neutral-50 text-black">
<div className="max-w-6xl mx-auto">
<div className="max-w-2xl mb-16">
<p className="text-sm uppercase tracking-wider mb-4 text-neutral-600">Le problème</p>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
                    Chaque minute d'attente vous coûte des clients
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="rounded-2xl p-8 border bg-neutral-100 border-neutral-200">
<div className="text-5xl font-semibold tracking-tight mb-4 text-red-600">74%</div>
<p className="text-neutral-700">des clients quittent un magasin après 5 minutes d'attente en caisse</p>
</div>
<div className="rounded-2xl p-8 border bg-neutral-100 border-neutral-200">
<div className="text-5xl font-semibold tracking-tight mb-4 text-amber-600">-23%</div>
<p className="text-neutral-700">de panier moyen quand le client perçoit la queue comme trop longue</p>
</div>
<div className="rounded-2xl p-8 border bg-neutral-100 border-neutral-200">
<div className="text-5xl font-semibold tracking-tight mb-4 text-neutral-600">∞</div>
<p className="text-neutral-700">de stress pour vos équipes aux heures de pointe</p>
</div>
</div>
<div className="mt-12 bg-gradient-to-r rounded-2xl p-8 border from-neutral-100 to-neutral-200 border-neutral-300">
<div className="flex items-start gap-4">
<svg aria-hidden="true" className="iconify flex-shrink-0 mt-1 text-amber-600 iconify--lucide" data-icon="lucide:alert-triangle" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div>
<p className="text-lg font-medium mb-2">Le vrai problème pour la mode</p>
<p className="text-neutral-600">Les solutions de paiement mobile existantes ne retirent pas l'antivol. Vos clients doivent quand même passer en caisse. Le problème reste entier.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6" id="solution">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<p className="text-sm uppercase tracking-wider mb-4 text-emerald-400">La solution</p>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
                    Scanner. Payer. Partir.
                </h2>
<p className="text-lg text-neutral-400">
                    En 3 étapes, vos clients passent de l'article à la sortie — sans jamais faire la queue.
                </p>
</div>
<div className="grid lg:grid-cols-3 gap-8">
<div className="text-center p-8">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-emerald-900">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:scan" data-width="32" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-sm font-medium mb-2 text-emerald-400">Étape 1</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Scanner</h3>
<p className="text-neutral-400">Le client scanne le QR code de l'article ou du menu avec son smartphone</p>
</div>
<div className="text-center p-8">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-blue-900">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:credit-card" data-width="32" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></g></svg>
</div>
<div className="text-sm font-medium mb-2 text-blue-400">Étape 2</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Payer</h3>
<p className="text-neutral-400">Paiement instantané via Apple Pay, Google Pay ou carte bancaire</p>
</div>
<div className="text-center p-8">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-violet-900">
<svg aria-hidden="true" className="iconify text-violet-400 iconify--lucide" data-icon="lucide:door-open" data-width="32" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M11 20H2m9-15.438v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561zM11 4H8a2 2 0 0 0-2 2v14m8-8h.01M22 20h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-sm font-medium mb-2 text-violet-400">Étape 3</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Partir</h3>
<p className="text-neutral-400">Passage à la NovaStation pour retirer l'antivol et sortie immédiate</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6 bg-gradient-to-b from-neutral-950 to-black">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 bg-violet-900 text-violet-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
                        Innovation brevetée
                    </div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
                        La NovaStation :
                        <span className="text-neutral-600">L'antivol qui se retire tout seul</span>
</h2>
<p className="text-lg mb-8 text-neutral-400">
                        Notre borne de découplage intelligente vérifie le paiement en temps réel et déverrouille automatiquement l'antivol. Pas de paiement = pas de déverrouillage.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-emerald-900">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<p className="font-medium">QR code à usage unique</p>
<p className="text-sm text-neutral-400">Impossible à copier ou réutiliser</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-emerald-900">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<p className="font-medium">Validation serveur temps réel</p>
<p className="text-sm text-neutral-400">Vérification du paiement en moins de 2 secondes</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-emerald-900">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<p className="font-medium">Mode dégradé intégré</p>
<p className="text-sm text-neutral-400">Connexion 4G de secours + déverrouillage manuel</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="bg-gradient-to-br rounded-3xl p-12 from-violet-900 to-blue-900">
<div className="rounded-2xl shadow-xl p-8 bg-black">
<div className="flex items-center justify-between mb-8">
<div className="text-sm font-medium text-neutral-600">NovaStation</div>
<div className="flex items-center gap-2 text-sm text-emerald-400">
<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                    En ligne
                                </div>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-950">
<svg aria-hidden="true" className="iconify text-neutral-600 iconify--lucide" data-icon="lucide:qr-code" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3m5 0v.01M12 7v3a2 2 0 0 1-2 2H7m-4 0h.01M12 3h.01M12 16v.01M16 12h1m4 0v.01M12 21v-1"></path></g></svg>
<div className="flex-1">
<div className="text-sm font-medium">Scan du QR code</div>
<div className="text-xs text-neutral-500">En attente...</div>
</div>
<svg aria-hidden="true" className="iconify text-neutral-700 iconify--lucide" data-icon="lucide:circle" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border bg-emerald-950 border-emerald-800">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:shield-check" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<div className="flex-1">
<div className="text-sm font-medium text-emerald-100">Paiement vérifié</div>
<div className="text-xs text-emerald-400">Transaction #8472</div>
</div>
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check-circle" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border bg-emerald-950 border-emerald-800">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:unlock" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></g></svg>
<div className="flex-1">
<div className="text-sm font-medium text-emerald-100">Antivol déverrouillé</div>
<div className="text-xs text-emerald-400">Bonne journée !</div>
</div>
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check-circle" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6" id="fonctionnement">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<p className="text-sm text-neutral-500 uppercase tracking-wider mb-4">Comment ça marche</p>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
                    Le parcours client complet
                </h2>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2 bg-neutral-800"></div>
<div className="grid lg:grid-cols-5 gap-8">
<div className="relative p-6 rounded-2xl border bg-black border-neutral-800">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm mb-4 relative z-10 bg-neutral-100 text-black">1</div>
<h3 className="font-semibold mb-2">Découverte</h3>
<p className="text-sm text-neutral-400">Le client trouve l'article qu'il veut</p>
</div>
<div className="relative p-6 rounded-2xl border bg-black border-neutral-800">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm mb-4 relative z-10 bg-neutral-100 text-black">2</div>
<h3 className="font-semibold mb-2">Scan</h3>
<p className="text-sm text-neutral-400">Scan du QR code sur l'étiquette</p>
</div>
<div className="relative p-6 rounded-2xl border bg-black border-neutral-800">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm mb-4 relative z-10 bg-neutral-100 text-black">3</div>
<h3 className="font-semibold mb-2">Paiement</h3>
<p className="text-sm text-neutral-400">Règlement sécurisé sur mobile</p>
</div>
<div className="relative p-6 rounded-2xl border bg-black border-neutral-800">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm mb-4 relative z-10 bg-neutral-100 text-black">4</div>
<h3 className="font-semibold mb-2">NovaStation</h3>
<p className="text-sm text-neutral-400">Retrait automatique de l'antivol</p>
</div>
<div className="relative p-6 rounded-2xl border bg-black border-emerald-800 bg-emerald-950">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm mb-4 relative z-10 bg-emerald-400 text-black">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-semibold mb-2">Sortie</h3>
<p className="text-sm text-neutral-400">Le client part avec son article</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6 bg-neutral-950">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<p className="text-sm text-neutral-500 uppercase tracking-wider mb-4">Pour qui ?</p>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
                    Conçu pour les commerçants de proximité
                </h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="rounded-2xl p-8 border transition-colors bg-black border-neutral-800 hover:border-neutral-700">
<div className="flex items-start gap-6">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-violet-900">
<svg aria-hidden="true" className="iconify text-violet-400 iconify--lucide" data-icon="lucide:shirt" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Boutiques de mode</h3>
<p className="mb-4 text-neutral-400">
                                Enfin une solution de paiement mobile qui gère aussi l'antivol. Vos clients essaient, paient et partent — sans attendre.
                            </p>
<ul className="space-y-2 text-sm text-neutral-400">
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Compatible tous types d'antivols
                                </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Multi-articles en un seul paiement
                                </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Cabines d'essayage libres plus longtemps
                                </li>
</ul>
</div>
</div>
</div>

<div className="rounded-2xl p-8 border transition-colors bg-black border-neutral-800 hover:border-neutral-700">
<div className="flex items-start gap-6">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-amber-900">
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:utensils" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Restauration rapide</h3>
<p className="mb-4 text-neutral-400">
                                Vos clients commandent et paient depuis leur table ou la file d'attente. Votre équipe se concentre sur la préparation.
                            </p>
<ul className="space-y-2 text-sm text-neutral-400">
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Commande sur QR code de table
                                </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Envoi direct en cuisine
                                </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Rotation tables +30%
                                </li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-8">
<div className="rounded-2xl p-6 flex items-center gap-4 bg-neutral-900">
<svg aria-hidden="true" className="iconify text-neutral-600 iconify--lucide" data-icon="lucide:store" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5m8.774-10.69a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.451 0a1.12 1.12 0 0 0-1.548 0a2.5 2.5 0 0 1-3.452 0a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></g></svg>
<span className="text-neutral-400">Commerçants indépendants</span>
</div>
<div className="rounded-2xl p-6 flex items-center gap-4 bg-neutral-900">
<svg aria-hidden="true" className="iconify text-neutral-600 iconify--lucide" data-icon="lucide:building-2" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></g></svg>
<span className="text-neutral-400">Franchises &amp; petites chaînes</span>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<p className="text-sm text-neutral-500 uppercase tracking-wider mb-4">Bénéfices</p>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
                    Ce que NovaPay change pour vous
                </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl border hover:shadow-lg transition-shadow border-neutral-800">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-emerald-900">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:trending-up" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<div className="text-2xl font-semibold tracking-tight mb-2 text-emerald-400">+15%</div>
<h3 className="font-semibold mb-2">Chiffre d'affaires</h3>
<p className="text-sm text-neutral-400">Moins de clients qui abandonnent, plus de ventes conclues</p>
</div>
<div className="p-6 rounded-2xl border hover:shadow-lg transition-shadow border-neutral-800">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-900">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:clock" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div className="text-2xl font-semibold tracking-tight mb-2 text-blue-400">0 min</div>
<h3 className="font-semibold mb-2">Temps d'attente</h3>
<p className="text-sm text-neutral-400">Suppression totale de la file d'attente en caisse</p>
</div>
<div className="p-6 rounded-2xl border hover:shadow-lg transition-shadow border-neutral-800">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-violet-900">
<svg aria-hidden="true" className="iconify text-violet-400 iconify--lucide" data-icon="lucide:users" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<div className="text-2xl font-semibold tracking-tight mb-2 text-violet-400">-50%</div>
<h3 className="font-semibold mb-2">Charge équipe</h3>
<p className="text-sm text-neutral-400">Vos vendeurs conseillent au lieu d'encaisser</p>
</div>
<div className="p-6 rounded-2xl border hover:shadow-lg transition-shadow border-neutral-800">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-amber-900">
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:heart" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-semibold mb-2">Fidélité intégrée</h3>
<p className="text-sm text-neutral-400">Programme de fidélité automatique par numéro de téléphone</p>
</div>
<div className="p-6 rounded-2xl border hover:shadow-lg transition-shadow border-neutral-800">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-rose-900">
<svg aria-hidden="true" className="iconify text-rose-400 iconify--lucide" data-icon="lucide:receipt" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 1.5v-11"></path></g></svg>
</div>
<h3 className="font-semibold mb-2">Ticket digital</h3>
<p className="text-sm text-neutral-400">Ticket de caisse 100% numérique envoyé par SMS</p>
</div>
<div className="p-6 rounded-2xl border hover:shadow-lg transition-shadow border-neutral-800">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-cyan-900">
<svg aria-hidden="true" className="iconify text-cyan-400 iconify--lucide" data-icon="lucide:bar-chart-3" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-semibold mb-2">Data &amp; CRM</h3>
<p className="text-sm text-neutral-400">Connexion à vos outils existants via API</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6 bg-neutral-50 text-black" id="tarifs">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<p className="text-sm uppercase tracking-wider mb-4 text-neutral-600">Tarifs</p>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
                    Transparence totale
                </h2>
<p className="text-lg text-neutral-600">
                    Nous gagnons de l'argent uniquement si vous vendez plus.
                </p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="rounded-2xl p-8 border bg-neutral-100 border-neutral-200">
<div className="text-sm uppercase tracking-wider mb-2 text-neutral-600">Location</div>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-4xl font-semibold tracking-tight">79 €</span>
<span className="text-neutral-600">HT / mois</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-neutral-700">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            1 NovaStation incluse
                        </li>
<li className="flex items-center gap-3 text-neutral-700">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Maintenance incluse
                        </li>
<li className="flex items-center gap-3 text-neutral-700">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Remplacement 48h
                        </li>
</ul>
<a className="block text-center py-3 px-6 border rounded-full text-sm font-medium transition-colors border-neutral-300 hover:bg-neutral-200" href="#demo">
                        Choisir la location
                    </a>
</div>

<div className="rounded-2xl p-8 relative bg-black text-neutral-100">
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-xs font-medium px-3 py-1 rounded-full text-black">
                        Populaire
                    </div>
<div className="text-sm text-neutral-500 uppercase tracking-wider mb-2">Achat</div>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-4xl font-semibold tracking-tight">970 €</span>
<span className="text-neutral-600">HT</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-neutral-400">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            1 NovaStation
                        </li>
<li className="flex items-center gap-3 text-neutral-400">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Garantie 2 ans
                        </li>
<li className="flex items-center gap-3 text-neutral-400">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Installation offerte
                        </li>
</ul>
<a className="block text-center py-3 px-6 rounded-full text-sm font-medium transition-colors bg-neutral-100 text-black hover:bg-neutral-200" href="#demo">
                        Choisir l'achat
                    </a>
</div>

<div className="rounded-2xl p-8 border bg-neutral-100 border-neutral-200">
<div className="text-sm uppercase tracking-wider mb-2 text-neutral-600">Commission</div>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-4xl font-semibold tracking-tight">1,9%</span>
<span className="text-neutral-600">par transaction</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-neutral-700">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Frais bancaires inclus
                        </li>
<li className="flex items-center gap-3 text-neutral-700">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Virement J+1
                        </li>
<li className="flex items-center gap-3 text-neutral-700">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Dashboard temps réel
                        </li>
</ul>
<div className="text-center text-sm text-neutral-500">
                        Appliqué sur tous les plans
                    </div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-emerald-900">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:shield" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-6">
                        Sécurité maximale
                    </h2>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-950">
<svg aria-hidden="true" className="iconify mt-0.5 text-neutral-600 iconify--lucide" data-icon="lucide:key" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.5 7.5l2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4m2-2l-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></g></svg>
<div>
<p className="font-medium">QR code à usage unique</p>
<p className="text-sm text-neutral-400">Chaque code expire après utilisation ou après 10 minutes</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-950">
<svg aria-hidden="true" className="iconify mt-0.5 text-neutral-600 iconify--lucide" data-icon="lucide:server" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><path d="M6 6h.01M6 18h.01"></path></g></svg>
<div>
<p className="font-medium">Validation temps réel</p>
<p className="text-sm text-neutral-400">Vérification serveur sécurisée avant chaque déverrouillage</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-950">
<svg aria-hidden="true" className="iconify mt-0.5 text-neutral-600 iconify--lucide" data-icon="lucide:wifi-off" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01M8.5 16.429a5 5 0 0 1 7 0M5 12.859a10 10 0 0 1 5.17-2.69m8.83 2.69a10 10 0 0 0-2.007-1.523M2 8.82a15 15 0 0 1 4.177-2.643M22 8.82a15 15 0 0 0-11.288-3.764M2 2l20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div>
<p className="font-medium">Mode dégradé</p>
<p className="text-sm text-neutral-400">Connexion 4G de secours + déverrouillage manuel supervisé</p>
</div>
</div>
</div>
</div>

<div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-blue-900">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:zap" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-6">
                        Déploiement plug &amp; play
                    </h2>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-950">
<svg aria-hidden="true" className="iconify mt-0.5 text-neutral-600 iconify--lucide" data-icon="lucide:plug" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5m3-9V2m2 6a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1zM9 8V2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div>
<p className="font-medium">Installation en 15 minutes</p>
<p className="text-sm text-neutral-400">Branchez, connectez, c'est prêt</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-950">
<svg aria-hidden="true" className="iconify mt-0.5 text-neutral-600 iconify--lucide" data-icon="lucide:graduation-cap" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
<div>
<p className="font-medium">Formation 30 minutes</p>
<p className="text-sm text-neutral-400">Votre équipe maîtrise NovaPay en une session</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-950">
<svg aria-hidden="true" className="iconify mt-0.5 text-neutral-600 iconify--lucide" data-icon="lucide:image" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></g></svg>
<div>
<p className="font-medium">PLV fournie</p>
<p className="text-sm text-neutral-400">Affiches et stickers pour informer vos clients</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6 bg-neutral-950">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<p className="text-sm text-neutral-500 uppercase tracking-wider mb-4">Ils nous font confiance</p>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
                    Pilotes en cours
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-12">
<div className="rounded-2xl p-8 border bg-black border-neutral-800">
<div className="flex items-center gap-1 mb-4 text-amber-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="mb-6 text-neutral-400">
                        "Nos clients adorent ne plus attendre. Et nous, on peut enfin conseiller au lieu de scanner des articles."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm bg-violet-900 text-violet-400">ML</div>
<div>
<p className="font-medium text-sm">Marie L.</p>
<p className="text-xs text-neutral-500">Boutique Mode, Paris 11</p>
</div>
</div>
</div>
<div className="rounded-2xl p-8 border bg-black border-neutral-800">
<div className="flex items-center gap-1 mb-4 text-amber-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="mb-6 text-neutral-400">
                        "Le midi, c'était l'enfer. Maintenant les gens commandent de leur place. On a gagné 30% de rotation."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm bg-amber-900 text-amber-400">KT</div>
<div>
<p className="font-medium text-sm">Karim T.</p>
<p className="text-xs text-neutral-500">Fast-food, Lyon 3</p>
</div>
</div>
</div>
<div className="rounded-2xl p-8 border bg-black border-neutral-800">
<div className="flex items-center gap-1 mb-4 text-amber-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="mb-6 text-neutral-400">
                        "Je gérais 3 caisses le samedi. Maintenant une seule suffit pour les retours et questions."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm bg-emerald-900 text-emerald-400">SB</div>
<div>
<p className="font-medium text-sm">Sophie B.</p>
<p className="text-xs text-neutral-500">Franchise vêtements, Bordeaux</p>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-50">
<div className="text-xl font-semibold tracking-tight text-neutral-600">Urban Style</div>
<div className="text-xl font-semibold tracking-tight text-neutral-600">Burger &amp; Co</div>
<div className="text-xl font-semibold tracking-tight text-neutral-600">Mode Express</div>
<div className="text-xl font-semibold tracking-tight text-neutral-600">Fresh Tacos</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6" id="demo">
<div className="max-w-4xl mx-auto">
<div className="bg-gradient-to-br rounded-3xl p-8 lg:p-16 text-center from-neutral-100 to-neutral-200 text-black">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
                    Prêt à supprimer la file d'attente ?
                </h2>
<p className="text-lg mb-10 max-w-xl mx-auto text-neutral-700">
                    Planifiez une démonstration de 30 minutes avec notre équipe. Nous vous montrerons comment NovaPay peut transformer votre commerce.
                </p>
<form className="max-w-md mx-auto space-y-4" id="contact">
<input className="w-full px-5 py-4 rounded-xl border placeholder-neutral-400 focus:outline-none focus:border-white/40 transition-colors bg-black/10 border-black/20 text-black" placeholder="Nom du commerce" type="text"/>
<input className="w-full px-5 py-4 rounded-xl border placeholder-neutral-400 focus:outline-none focus:border-white/40 transition-colors bg-black/10 border-black/20 text-black" placeholder="Email professionnel" type="email"/>
<input className="w-full px-5 py-4 rounded-xl border placeholder-neutral-400 focus:outline-none focus:border-white/40 transition-colors bg-black/10 border-black/20 text-black" placeholder="Téléphone" type="tel"/>
<div className="relative">
<select className="w-full px-5 py-4 rounded-xl border focus:outline-none focus:border-white/40 transition-colors appearance-none cursor-pointer bg-black/10 border-black/20 text-neutral-600">
<option value="">Type de commerce</option>
<option value="mode">Boutique de mode</option>
<option value="restauration">Restauration rapide</option>
<option value="autre">Autre</option>
</select>
<svg aria-hidden="true" className="iconify absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-neutral-600 iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<button className="w-full px-8 py-4 rounded-xl text-base font-medium transition-colors flex items-center justify-center gap-2 bg-black text-neutral-100 hover:bg-neutral-900" type="submit">
                        Planifier ma démonstration
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
</button>
</form>
<p className="mt-6 text-sm text-neutral-600">
                    Réponse garantie sous 24h • Sans engagement
                </p>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-neutral-900">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div>
<a className="text-xl font-semibold tracking-tight mb-4 block text-neutral-100" href="#">NovaPay</a>
<p className="text-sm text-neutral-500">
                        La solution de paiement mobile et de sécurité intelligente pour les commerçants.
                    </p>
</div>
<div>
<h4 className="font-medium mb-4">Produit</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="transition-colors hover:text-neutral-100" href="#solution">Solution</a></li>
<li><a className="transition-colors hover:text-neutral-100" href="#fonctionnement">Fonctionnement</a></li>
<li><a className="transition-colors hover:text-neutral-100" href="#tarifs">Tarifs</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4">Ressources</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="transition-colors hover:text-neutral-100" href="#">Documentation</a></li>
<li><a className="transition-colors hover:text-neutral-100" href="#">API</a></li>
<li><a className="transition-colors hover:text-neutral-100" href="#">Support</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4">Légal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="transition-colors hover:text-neutral-100" href="#">Mentions légales</a></li>
<li><a className="transition-colors hover:text-neutral-100" href="#">CGV</a></li>
<li><a className="transition-colors hover:text-neutral-100" href="#">Confidentialité</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-900">
<p className="text-sm text-neutral-600">© 2025 NovaPay. Tous droits réservés.</p>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<a className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-500 transition-colors bg-neutral-900 hover:bg-neutral-800 hover:text-neutral-100" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-500 transition-colors bg-neutral-900 hover:bg-neutral-800 hover:text-neutral-100" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
