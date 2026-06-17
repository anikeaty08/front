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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-1 tracking-tighter text-xl select-none" href="#">
<span className="font-bold text-[#0E3F40]">MASTER</span>
<span className="font-bold text-[#D8A819]">SUCCESS</span>
<i className="w-5 h-5 text-[#D8A819] stroke-[2.5]" data-lucide="arrow-up-right"></i>
</a>
<a className="text-xs font-medium bg-neutral-50 hover:bg-neutral-100 text-neutral-600 px-4 py-2 rounded-full border border-neutral-200 transition-all duration-300" href="#join">
                Espace Candidat
            </a>
</div>
</nav>

<main className="pt-32 pb-20 px-6 flex flex-col items-center text-center max-w-4xl mx-auto">

<h1 className="text-[8rem] md:text-[12rem] font-bold tracking-tighter leading-none text-[#0E3F40] select-none mb-2">
            93<span className="text-[#D8A819] text-[6rem] md:text-[10rem]">%</span>
</h1>

<p className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 mb-6 max-w-2xl leading-tight">
            Des étudiants accompagnés intègrent au moins un Master préparé avec nous.
        </p>

<div className="flex items-center gap-2 text-neutral-500 mb-10 text-sm font-medium bg-neutral-50 px-4 py-2 rounded-full border border-neutral-100">
<i className="w-4 h-4 text-[#0E3F40]" data-lucide="check-circle-2"></i>
            Accompagnement rémunéré uniquement en cas d’admission.
        </div>

<form className="w-full max-w-md flex flex-col sm:flex-row gap-2" onsubmit="event.preventDefault();">
<div className="relative flex-grow">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="w-4 h-4 text-neutral-400" data-lucide="mail"></i>
</div>
<input className="w-full bg-white border border-neutral-200 text-neutral-900 text-sm rounded-lg block pl-10 p-3.5 outline-none focus:ring-2 focus:ring-[#0E3F40] focus:border-transparent transition-all placeholder-neutral-400 shadow-sm" placeholder="votre@email.com" required="" type="email"/>
</div>
<button className="bg-[#0E3F40] hover:bg-[#092a2b] text-white font-medium text-sm px-6 py-3.5 rounded-lg transition-colors whitespace-nowrap shadow-lg shadow-[#0E3F40]/20 flex items-center justify-center gap-2" type="submit">
                Recevoir la méthode
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</main>

<section className="border-y border-neutral-100 bg-neutral-50/50">
<div className="max-w-5xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<div className="flex flex-col items-start gap-4">
<div className="p-2 bg-white rounded-lg border border-neutral-100 shadow-sm">
<i className="w-5 h-5 text-[#0E3F40]" data-lucide="target"></i>
</div>
<div>
<h3 className="font-semibold text-neutral-900 mb-2">Ciblage Chirurgical</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Préparation exclusive sur des Masters précis. Nous ne visons pas large, nous visons juste.
                        </p>
</div>
</div>

<div className="flex flex-col items-start gap-4">
<div className="p-2 bg-white rounded-lg border border-neutral-100 shadow-sm">
<i className="w-5 h-5 text-[#0E3F40]" data-lucide="bar-chart-3"></i>
</div>
<div>
<h3 className="font-semibold text-neutral-900 mb-2">30 ans de Data</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Méthode issue de l'analyse de millions de candidatures. Partenariat historique avec <span className="font-medium text-neutral-900">Eduniversal</span>.
                        </p>
</div>
</div>

<div className="flex flex-col items-start gap-4">
<div className="p-2 bg-white rounded-lg border border-neutral-100 shadow-sm">
<i className="w-5 h-5 text-[#0E3F40]" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="font-semibold text-neutral-900 mb-2">Authenticité Radicale</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Pas de coaching générique. Un dispositif stratégique conçu pour passer les filtres de sélection.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24">
<div className="flex flex-col items-center mb-16 text-center">
<span className="text-[#D8A819] font-semibold text-xs tracking-widest uppercase mb-3">La Méthode</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0E3F40]">Du candidat à l'admis.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-neutral-200 -z-10"></div>

<div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-[#0E3F40] text-white flex items-center justify-center font-semibold mb-6 shadow-lg shadow-[#0E3F40]/20">1</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Sélection</h3>
<p className="text-sm text-neutral-500">Identification des Masters correspondant à votre profil et vos ambitions.</p>
</div>

<div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-white border border-[#0E3F40] text-[#0E3F40] flex items-center justify-center font-semibold mb-6">2</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Stratégie</h3>
<p className="text-sm text-neutral-500">Construction du dossier et préparation aux entretiens selon nos grilles d'évaluation.</p>
</div>

<div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-[#D8A819] text-white flex items-center justify-center font-semibold mb-6 shadow-lg shadow-[#D8A819]/20">3</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Résultat</h3>
<p className="text-sm text-neutral-500">Admission ou remboursement total. C'est notre engagement.</p>
</div>
</div>
</section>

<section className="bg-[#0E3F40] text-white py-20 overflow-hidden relative">

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#D8A819] opacity-10 blur-3xl rounded-full"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="md:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white mb-6">
<i className="w-3 h-3 text-[#D8A819]" data-lucide="award"></i>
                    Partenaire Officiel
                </div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">L'expertise Eduniversal.</h2>
<p className="text-neutral-300 font-light leading-relaxed max-w-md">
                    Master Success s'appuie sur 30 ans d'observation des processus d'admission par l'agence de notation Eduniversal. Nous connaissons les critères cachés.
                </p>
</div>
<div className="md:w-1/2 flex justify-center md:justify-end">
<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center min-w-[280px]">
<span className="block text-6xl font-bold tracking-tighter text-white mb-2">93%</span>
<span className="block text-sm text-[#D8A819] font-medium tracking-wide uppercase">Taux de réussite</span>
<div className="mt-4 pt-4 border-t border-white/10 text-xs text-neutral-400">
                        Moyenne constatée sur les 5 dernières années
                    </div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-3xl mx-auto text-center" id="join">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#0E3F40] mb-6">
            Ne laissez rien au hasard.
        </h2>
<p className="text-neutral-500 text-lg mb-10 max-w-xl mx-auto font-light">
            Rejoignez les candidats qui ont sécurisé leur avenir. Bénéficiez de la méthode utilisée par les 93%.
        </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full" onsubmit="event.preventDefault();">
<input className="flex-grow bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-lg block p-4 outline-none focus:ring-2 focus:ring-[#0E3F40] transition-all" placeholder="votre@email.com" required="" type="email"/>
<button className="bg-[#D8A819] hover:bg-[#b58d15] text-white font-medium text-sm px-8 py-4 rounded-lg transition-colors shadow-lg shadow-[#D8A819]/25 whitespace-nowrap" type="submit">
                Accéder au succès
            </button>
</form>
<p className="mt-4 text-xs text-neutral-400">Places limitées par session d'accompagnement.</p>
</section>

<footer className="border-t border-neutral-100 bg-white pt-12 pb-8">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-1 tracking-tighter text-lg select-none opacity-80 grayscale hover:grayscale-0 transition-all">
<span className="font-bold text-[#0E3F40]">MASTER</span>
<span className="font-bold text-[#D8A819]">SUCCESS</span>
</div>
<p className="text-neutral-400 text-xs">
                © 2024 Master Success. Tous droits réservés.
            </p>
</div>
</footer>


    </>
  );
}
