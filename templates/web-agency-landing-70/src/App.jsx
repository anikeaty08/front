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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-slate-900" href="#">SITE24H</a>
<a className="hidden sm:flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm" href="https://wa.me/33767856618?text=Bonjour,%20je%20souhaite%20cr%C3%A9er%20un%20site%20avec%20SITE24H" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Nous écrire
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden bg-white">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm font-medium mb-8 fade-in-up border border-blue-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Nouveau : Paiement à la livraison 🎉
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 max-w-4xl mx-auto fade-in-up delay-100 leading-tight">
                Votre site web prêt en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">24h</span> 🚀
            </h1>
<p className="text-lg sm:text-xl text-slate-500 mb-10 max-w-2xl mx-auto fade-in-up delay-200">
                Simple. Rapide. Efficace. Et surtout rentable 💸. On s’occupe de tout, vous payez seulement quand votre site est prêt et que vous êtes satisfait 😉.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-300">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-base font-medium hover:scale-105 transition-transform shadow-lg shadow-green-500/20" href="https://wa.me/33767856618?text=Bonjour,%20je%20souhaite%20cr%C3%A9er%20un%20site%20avec%20SITE24H" target="_blank">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
                    Créer mon site maintenant
                </a>
<a className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors" href="#offres">
                    Voir les offres
                </a>
</div>

<div className="mt-20 relative max-w-5xl mx-auto fade-in-up delay-300 float-anim">
<div className="rounded-2xl sm:rounded-[2.5rem] overflow-hidden border border-slate-200/60 shadow-2xl shadow-slate-200/50 bg-white p-2 sm:p-4">
<img alt="Espace de travail moderne" className="w-full h-auto rounded-xl sm:rounded-3xl object-cover aspect-[16/9]" loading="lazy" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
<div className="flex flex-col items-center justify-center py-4">
<span className="text-3xl font-semibold tracking-tighter text-slate-900 mb-1">+50</span>
<span className="text-sm text-slate-500">Entreprises accompagnées ✅</span>
</div>
<div className="flex flex-col items-center justify-center py-4">
<span className="text-3xl font-semibold tracking-tighter text-slate-900 mb-1">24h</span>
<span className="text-sm text-slate-500">Délai de livraison ⚡</span>
</div>
<div className="flex flex-col items-center justify-center py-4">
<div className="flex gap-1 text-yellow-400 mb-2 text-xl">
                        ★★★★★
                    </div>
<span className="text-sm text-slate-500">Clients satisfaits</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">Pourquoi choisir SITE24H ?</h2>
<p className="text-base text-slate-500">L'alliance parfaite entre design premium, rapidité fulgurante et conversion maximale.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Livraison en 24h ⚡</h3>
<p className="text-sm text-slate-500 leading-relaxed">Pas de mois d'attente. Vous commandez aujourd'hui, votre site est en ligne demain.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:monitor-smartphone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Design Apple-style 🎨</h3>
<p className="text-sm text-slate-500 leading-relaxed">Minimaliste, élégant et premium. Un design qui donne confiance à vos futurs clients.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Paiement rassurant 💰</h3>
<p className="text-sm text-slate-500 leading-relaxed">Prix accessibles et paiement uniquement à la réception. Zéro risque pour vous.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:rocket-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Landing Pages 🚀</h3>
<p className="text-sm text-slate-500 leading-relaxed">Conçues spécifiquement pour convertir vos visiteurs en prospects qualifiés.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:refresh-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Refonte de site 🔄</h3>
<p className="text-sm text-slate-500 leading-relaxed">Votre site actuel est vieillissant ? On lui redonne un coup de jeune en un temps record.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:hand-shake-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Accompagnement 🤝</h3>
<p className="text-sm text-slate-500 leading-relaxed">On ne vous lâche pas dans la nature. Modifications illimitées jusqu'à satisfaction.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">Un process fun et ultra simple 👇</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-slate-100 -translate-y-1/2 z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center text-xl font-semibold text-slate-900 mb-6 shadow-sm">1️⃣</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Tu nous écris sur WhatsApp 📲</h4>
<p className="text-sm text-slate-500">Un message suffit pour lancer la machine.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center text-xl font-semibold text-slate-900 mb-6 shadow-sm">2️⃣</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">On crée ton site 🔥</h4>
<p className="text-sm text-slate-500">Notre équipe s'occupe du design et de la technique.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center text-xl font-semibold text-slate-900 mb-6 shadow-sm">3️⃣</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Tu le reçois en 24h 🚀</h4>
<p className="text-sm text-slate-500">Et tu ne paies que si le résultat te plaît !</p>
</div>
</div>
</div>
</section>

<section className="py-12 bg-slate-900 text-white text-center">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-lg sm:text-xl font-medium flex flex-col sm:flex-row items-center justify-center gap-2">
<span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-semibold tracking-wider uppercase mb-2 sm:mb-0">Offre Spéciale 🔥</span>
                ⚠️ Places limitées cette semaine. Profitez de nos tarifs actuels !
            </p>
</div>
</section>

<section className="py-24 bg-slate-50" id="offres">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">Des offres simples, sans surprise</h2>
<p className="text-base text-slate-500">Paiement uniquement à la réception. Modifications illimitées jusqu’à satisfaction 🔁</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative flex flex-col h-full">
<div className="mb-6">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-600 mb-4">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
<h3 className="text-xl font-semibold text-slate-900">Starter 🟢</h3>
<div className="mt-4 flex items-baseline text-4xl font-semibold tracking-tighter text-slate-900">
                            99€
                        </div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            1 page ultra clean
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Design propre &amp; minimaliste
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Livraison rapide
                        </li>
</ul>
<a className="w-full block text-center bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200 px-6 py-3 rounded-full text-sm font-medium transition-colors" href="https://wa.me/33767856618?text=Bonjour,%20je%20souhaite%20cr%C3%A9er%20un%20site%20(Offre%20Starter)%20avec%20SITE24H" target="_blank">
                        Choisir Starter
                    </a>
</div>

<div className="bg-white rounded-3xl p-8 border-2 border-blue-500 shadow-xl shadow-blue-500/10 relative flex flex-col h-full scale-100 md:scale-105 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide shadow-sm">
                        RECOMMANDÉ 🔥
                    </div>
<div className="mb-6">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 mb-4">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
<h3 className="text-xl font-semibold text-slate-900">Pro 🔵</h3>
<div className="mt-4 flex items-baseline text-4xl font-semibold tracking-tighter text-slate-900">
                            199€
                        </div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Site complet (Multi-pages)
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Design premium (Apple-style)
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Optimisation conversion
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Paiement à réception ✅
                        </li>
</ul>
<a className="w-full block text-center bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 rounded-full text-sm font-medium transition-colors shadow-md" href="https://wa.me/33767856618?text=Bonjour,%20je%20souhaite%20cr%C3%A9er%20un%20site%20(Offre%20Pro)%20avec%20SITE24H" target="_blank">
                        Commencer en Pro
                    </a>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative flex flex-col h-full">
<div className="mb-6">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-50 text-purple-600 mb-4">
<iconify-icon icon="solar:crown-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
<h3 className="text-xl font-semibold text-slate-900">Premium 🟣</h3>
<div className="mt-4 flex items-baseline text-4xl font-semibold tracking-tighter text-slate-900">
                            299€
                        </div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Site sur-mesure + Stratégie
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Optimisation SEO &amp; Vitesse
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Accompagnement VIP
                        </li>
</ul>
<a className="w-full block text-center bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200 px-6 py-3 rounded-full text-sm font-medium transition-colors" href="https://wa.me/33767856618?text=Bonjour,%20je%20souhaite%20cr%C3%A9er%20un%20site%20(Offre%20Premium)%20avec%20SITE24H" target="_blank">
                        Choisir Premium
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">Nos réalisations &amp; avis clients</h2>
<p className="text-base text-slate-500 max-w-2xl mx-auto">Des designs premium livrés en un temps record. Découvrez nos derniers projets et ce que nos clients en pensent.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
<div className="aspect-[4/3] overflow-hidden bg-slate-100 border-b border-slate-100 relative">

<img alt="Réalisation SITE24H E-commerce" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                            Boutique en ligne
                        </div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex gap-1 text-yellow-400 mb-4 text-sm">★★★★★</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6 flex-1">"Super travail ! Mon site e-commerce était prêt en 24h et je suis 100% satisfait ! Le design est ouf et m'aide déjà à vendre."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-semibold text-sm">M</div>
<div>
<p className="text-sm font-semibold text-slate-900">Marc D.</p>
<p className="text-xs text-slate-500">Gérant e-commerce</p>
</div>
</div>
</div>
</div>

<div className="group rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
<div className="aspect-[4/3] overflow-hidden bg-slate-100 border-b border-slate-100 relative">
<img alt="Réalisation SITE24H Agence" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                            Site Vitrine
                        </div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex gap-1 text-yellow-400 mb-4 text-sm">★★★★★</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6 flex-1">"J'avais peur d'avancer l'argent... Le fait de payer à la fin m'a rassuré. Résultat incroyable, une vitrine parfaite pour mon agence ! 🙌"</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 font-semibold text-sm">S</div>
<div>
<p className="text-sm font-semibold text-slate-900">Sophie L.</p>
<p className="text-xs text-slate-500">Fondatrice Agence</p>
</div>
</div>
</div>
</div>

<div className="group rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
<div className="aspect-[4/3] overflow-hidden bg-slate-100 border-b border-slate-100 relative">
<img alt="Réalisation SITE24H Portfolio" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                            Portfolio
                        </div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex gap-1 text-yellow-400 mb-4 text-sm">★★★★★</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6 flex-1">"Rapide, net et sans bavure. La com' sur WhatsApp est hyper fluide. Mon site de consulting tue, effet premium garanti 🍏."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 font-semibold text-sm">A</div>
<div>
<p className="text-sm font-semibold text-slate-900">Antoine B.</p>
<p className="text-xs text-slate-500">Consultant Indépendant</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-blue-50/50 rounded-[3rem] p-12 sm:p-20 border border-blue-100">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-slate-900 mb-6">Une question ? Écris-nous directement 👇</h2>
<p className="text-base text-slate-600 mb-10 max-w-xl mx-auto">
                Vous ne payez que si le résultat vous convient. Envoyez-nous un message, on discute de votre projet en toute détente.
            </p>
<a className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-base font-medium hover:scale-105 transition-transform shadow-lg shadow-green-500/20" href="https://wa.me/33767856618?text=Bonjour,%20je%20souhaite%20cr%C3%A9er%20un%20site%20avec%20SITE24H" target="_blank">
<iconify-icon icon="logos:whatsapp-icon" width="24"></iconify-icon>
                Discuter sur WhatsApp
            </a>
</div>
</section>

<footer className="py-8 text-center text-sm text-slate-400 border-t border-slate-100 bg-white">
<p>© 2024 SITE24H. Tous droits réservés.</p>
</footer>

<a aria-label="Contact WhatsApp" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group" href="https://wa.me/33767856618?text=Bonjour,%20je%20souhaite%20cr%C3%A9er%20un%20site%20avec%20SITE24H" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="28"></iconify-icon>

<span className="absolute right-full mr-4 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-1 before:border-[6px] before:border-transparent before:border-l-slate-900">
            On en parle ? 👋
        </span>
</a>

    </>
  );
}
