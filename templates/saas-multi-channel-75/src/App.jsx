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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 transition-all duration-300">
<nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-10">

<a className="text-lg font-semibold tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<iconify-icon height="24" icon="solar:ghost-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
                    OCTOPUSH
                </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors flex items-center gap-1" href="#">Produits <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon></a>
<a className="hover:text-zinc-900 transition-colors" href="#">Développeurs</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Tarifs</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Ressources</a>
</div>
</div>

<div className="flex items-center gap-4">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors hidden sm:block" href="#">Se connecter</a>
<a className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors shadow-sm flex items-center gap-2" href="#">
                    Créer un compte
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</nav>
</header>

<section className="md:pt-48 md:pb-32 bg-white pt-32 pr-6 pb-24 pl-6 relative">

<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto relative">

<a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8 hover:bg-zinc-100 transition-colors" href="#">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Nouveau : Le canal RCS est disponible en Bêta
                <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>

<h1 className="sm:text-6xl md:text-7xl leading-[1.1] text-5xl font-semibold text-zinc-900 tracking-tighter mb-6">Communiquez avec vos clients là où ils sont.</h1>

<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                La plateforme API de référence pour l'envoi de SMS, RCS et Messages Vocaux. Conçue pour les développeurs, adoptée par les équipes marketing.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-6 py-3 rounded-full bg-zinc-900 text-white font-medium text-sm hover:bg-zinc-800 transition-all shadow-md">
                    Démarrer gratuitement
                </button>
<button className="w-full sm:w-auto px-6 py-3 rounded-full bg-white border border-zinc-200 text-zinc-700 font-medium text-sm hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
                    Contacter les ventes
                </button>
</div>
<p className="mt-4 text-xs text-zinc-400 font-medium">Aucune carte bancaire requise • Crédits offerts à l'inscription</p>
</div>
</section>

<section className="py-12 bg-zinc-50 border-y border-zinc-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-8">Plus de 10 000 entreprises nous font confiance</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center opacity-60 grayscale">

<span className="text-xl font-semibold tracking-tighter text-zinc-800">L'OREAL</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-800">DECATHLON</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-800">ALLIANZ</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-800">RENAULT</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-800">CREDIT AGRICOLE</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-900 mb-4">Une API. Tous vos canaux.</h2>
<p className="text-base text-zinc-500 max-w-2xl">Agrégez tous vos besoins de communication sortante via une seule intégration robuste et sécurisée, hébergée en France.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl bg-zinc-50/50 border border-zinc-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-700" icon="solar:chat-line-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">SMS Pro &amp; Transactionnel</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">Envoyez des alertes, des codes OTP ou des campagnes marketing avec un taux de délivrabilité garanti de 99.9%.</p>
<a className="text-sm font-medium text-blue-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">En savoir plus <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="p-8 rounded-3xl bg-zinc-50/50 border border-zinc-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-700" icon="solar:smartphone-update-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">RCS Business Messaging</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">Engagez vos clients avec des messages enrichis : images haute définition, carrousels, et boutons d'action natifs.</p>
<a className="text-sm font-medium text-blue-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">En savoir plus <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="p-8 rounded-3xl bg-zinc-50/50 border border-zinc-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-700" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Messages Vocaux</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">Convertissez votre texte en voix (Text-to-Speech) ou envoyez des fichiers audio pré-enregistrés sur n'importe quel téléphone.</p>
<a className="text-sm font-medium text-blue-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">En savoir plus <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="p-8 rounded-3xl bg-zinc-50/50 border border-zinc-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-700" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">WhatsApp Business</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">Intégrez l'API WhatsApp pour offrir un support client conversationnel et des notifications personnalisées.</p>
<a className="text-sm font-medium text-blue-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">En savoir plus <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="p-8 rounded-3xl bg-zinc-50/50 border border-zinc-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-700" icon="solar:database-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">HLR Lookup</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">Nettoyez vos bases de données en temps réel en vérifiant la validité et la portabilité des numéros mobiles.</p>
<a className="text-sm font-medium text-blue-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">En savoir plus <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="p-8 rounded-3xl bg-zinc-50/50 border border-zinc-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-700" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Authentification 2FA</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">Sécurisez l'accès de vos utilisateurs avec notre solution complète d'authentification par SMS ou appel vocal.</p>
<a className="text-sm font-medium text-blue-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">En savoir plus <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden">

<div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 mb-6">
<iconify-icon icon="solar:code-circle-linear"></iconify-icon> Conçu pour les développeurs
                    </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6">Intégration en quelques lignes de code.</h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                        Notre API RESTful a été pensée pour être intégrée en un temps record. SDKs disponibles pour PHP, Node.js, Python, Ruby et Java. Webhooks temps réel pour suivre vos envois.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Documentation claire et interactive
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Environnement de test gratuit (Sandbox)
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Support technique dédié basé en France
                        </li>
</ul>
<div className="flex gap-4">
<button className="px-6 py-3 rounded-full bg-white text-zinc-900 font-medium text-sm hover:bg-zinc-200 transition-all">
                            Lire la documentation
                        </button>
</div>
</div>

<div className="rounded-2xl bg-[#0d0d0d] border border-white/10 shadow-2xl overflow-hidden">

<div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#121212]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
</div>
<div className="mx-auto text-xs font-medium text-zinc-500 font-mono">send_sms.js</div>
</div>

<div className="p-6 overflow-x-auto text-sm" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<pre className="text-zinc-300 leading-loose"><span className="text-purple-400">const</span> <span className="text-blue-400">Octopush</span> <span className="text-zinc-400">=</span> <span className="text-blue-200">require</span>(<span className="text-emerald-400">'octopush-sdk'</span>);

<span className="text-purple-400">const</span> client <span className="text-zinc-400">=</span> <span className="text-purple-400">new</span> <span className="text-blue-400">Octopush</span>(
  process.env.<span className="text-orange-300">OCTOPUSH_USER_LOGIN</span>,
  process.env.<span className="text-orange-300">OCTOPUSH_API_KEY</span>
);

<span className="text-zinc-500">/* Envoi d'un SMS transactionnel */</span>
<span className="text-purple-400">await</span> client.<span className="text-blue-200">sendSMS</span>({
  recipients: [<span className="text-emerald-400">'+33600000000'</span>],
  text: <span className="text-emerald-400">'Votre code de vérification est le 8492.'</span>,
  type: <span className="text-emerald-400">'premium'</span>,
  sender: <span className="text-emerald-400">'MyService'</span>
}).<span className="text-blue-200">then</span>(response <span className="text-purple-400">=&gt;</span> {
  console.<span className="text-blue-200">log</span>(<span className="text-emerald-400">'SMS envoyé avec succès !'</span>, response.ticket);
});
</pre>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
<div className="text-center md:px-8 py-4">
<h4 className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-900 mb-2">99.9%</h4>
<p className="text-sm text-zinc-500 font-medium">Taux de disponibilité API</p>
</div>
<div className="text-center md:px-8 py-4">
<h4 className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-900 mb-2">&lt; 3s</h4>
<p className="text-sm text-zinc-500 font-medium">Temps de livraison moyen</p>
</div>
<div className="text-center md:px-8 py-4">
<h4 className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-900 mb-2">190+</h4>
<p className="text-sm text-zinc-500 font-medium">Pays couverts mondialement</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white text-center border-t border-zinc-100">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-900 mb-6">Prêt à améliorer votre communication ?</h2>
<p className="text-lg text-zinc-500 mb-10">Rejoignez des milliers de développeurs et d'entreprises qui utilisent Octopush au quotidien.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-900 text-white font-medium text-sm hover:bg-zinc-800 transition-all shadow-md">
                    Créer mon compte gratuit
                </button>
</div>
<p className="mt-6 text-sm text-zinc-400">Support en français • Inscription en 2 minutes</p>
</div>
</section>

<footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-lg font-semibold tracking-tighter text-white flex items-center gap-2 mb-4" href="#">
<iconify-icon height="24" icon="solar:ghost-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
                    OCTOPUSH
                </a>
<p className="text-sm text-zinc-500 max-w-xs mb-6">La plateforme de communication de confiance pour les entreprises et les développeurs.</p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:hashtag-circle-linear" width="24"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Produits</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">SMS Pro</a></li>
<li><a className="hover:text-white transition-colors" href="#">RCS Business</a></li>
<li><a className="hover:text-white transition-colors" href="#">Messages Vocaux</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Développeurs</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Documentation API</a></li>
<li><a className="hover:text-white transition-colors" href="#">Statut du service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Intégrations</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Entreprise</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">À propos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Mentions légales</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 text-xs text-zinc-500 flex flex-col sm:flex-row justify-between items-center gap-4">
<p>© 2024 Octopush. Tous droits réservés.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span> Tous les systèmes sont opérationnels
            </div>
</div>
</footer>

    </>
  );
}
