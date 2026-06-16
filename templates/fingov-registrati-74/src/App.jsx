import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="hero-orb hero-orb-1"></div>
<div className="hero-orb hero-orb-2"></div>
<div className="hero-grain"></div>

<main className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16 flex-grow flex flex-col justify-center">

<div className="hero-card p-8 md:p-12 lg:p-14">

<header className="mb-12 reveal">
<div className="flex flex-col items-center text-center gap-5 pb-8 border-b border-gray-200">
<div className="flex items-center gap-3 reveal reveal-delay-1">
<div className="w-9 h-9 bg-blue-500 text-white flex items-center justify-center rounded-lg">
<iconify-icon icon="solar:laptop-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xs tracking-widest uppercase font-medium text-gray-400 heading-font">
                FinGov Tool
              </span>
</div>
<div className="reveal reveal-delay-2">
<h1 className="text-2xl md:text-3xl leading-tight mb-2 heading-font">
                Organisation
                <span className="text-gray-400">&amp;</span>
                Profil
              </h1>
<p className="text-sm text-gray-500">
                Configurez votre environnement
              </p>
</div>
<div className="reveal reveal-delay-3">
<span className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-blue-500 bg-blue-50 px-3 py-1.5 rounded-full">
                Étape 2/2
              </span>
</div>
</div>
</header>
<form className="space-y-12" onsubmit="event.preventDefault();">

<section className="reveal reveal-delay-2">
<div className="flex items-baseline gap-3 mb-6">
<span className="text-[11px] font-medium tracking-widest text-blue-500">
                01
              </span>
<h2 className="text-xl heading-font">Votre Organisation</h2>
</div>
<div className="bg-gray-50/60 border border-gray-200 rounded-xl p-6 md:p-8 space-y-6">

<div className="relative group">
<div className="absolute top-0 left-0 h-full flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="w-full bg-transparent border-b border-gray-200 py-3 pl-8 text-sm placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-500" placeholder="Rechercher une organisation existante..." type="text"/>
</div>

<button className="group w-full py-4 border border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50/50 rounded-lg transition-all duration-300 flex items-center justify-center gap-2" type="button">
<span className="text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors">
                  Créer une nouvelle organisation
                </span>
<iconify-icon className="text-gray-400 group-hover:text-blue-500 transition-all transform group-hover:rotate-90 duration-500" icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>

<label className="inline-flex items-start gap-3 cursor-pointer group pt-1">
<div className="relative flex items-center justify-center mt-0.5">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-box w-4 h-4 border border-gray-400 rounded transition-all duration-300 bg-transparent"></div>
<svg className="absolute w-3 h-3 text-white pointer-events-none stroke-current" fill="none" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="3" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                  J'accepte les
                  <a className="text-blue-500 underline decoration-1 underline-offset-4 hover:text-blue-600" href="#">
                    Conditions d'utilisation
                  </a>
                  et la
                  <a className="text-blue-500 underline decoration-1 underline-offset-4 hover:text-blue-600" href="#">
                    Politique de confidentialité
                  </a>
</span>
</label>
</div>
</section>

<section className="reveal reveal-delay-3">
<div className="flex items-baseline gap-3 mb-6">
<span className="text-[11px] font-medium tracking-widest text-blue-500">
                02
              </span>
<h2 className="text-xl heading-font">Type de Profil</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<label className="relative cursor-pointer group reveal-slide-right" style={{animationDelay: '0.35s'}}>
<input className="peer sr-only" name="profile_type" type="radio" value="consultant"/>
<div className="custom-card h-full bg-white rounded-xl p-6 flex flex-col relative z-10">
<div className="icon-box w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center mb-4 text-blue-500 transition-all duration-400">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2 heading-font" style={{fontWeight: '300'}}>
                    Consultant
                  </h3>
<p className="text-xs text-gray-500 leading-relaxed">
                    Expert externe qui conduit un audit en tant
                    qu'indépendant(e).
                  </p>
</div>
</label>

<label className="relative cursor-pointer group reveal-slide-right" style={{animationDelay: '0.5s'}}>
<input className="peer sr-only" name="profile_type" type="radio" value="emf"/>
<div className="custom-card h-full bg-white rounded-xl p-6 flex flex-col relative z-10">
<div className="icon-box w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center mb-4 text-blue-500 transition-all duration-400">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2 heading-font" style={{fontWeight: '300'}}>
                    EMF
                  </h3>
<p className="text-xs text-gray-500 leading-relaxed">
                    Entreprise de microfinance qui offre des services bancaires.
                  </p>
</div>
</label>

<label className="relative cursor-pointer group reveal-slide-right" style={{animationDelay: '0.65s'}}>
<input className="peer sr-only" name="profile_type" type="radio" value="faitiere"/>
<div className="custom-card h-full bg-white rounded-xl p-6 flex flex-col relative z-10">
<div className="icon-box w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center mb-4 text-blue-500 transition-all duration-400">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2 heading-font" style={{fontWeight: '300'}}>
                    Faitière
                  </h3>
<p className="text-xs text-gray-500 leading-relaxed">
                    Organisation de regroupement ou de fédération qui représente
                    plusieurs EMF.
                  </p>
</div>
</label>
</div>
</section>

<div className="pt-8 border-t border-gray-200 flex items-center justify-between reveal reveal-delay-4">
<button className="group relative px-2 py-2 text-xs font-medium tracking-widest uppercase text-gray-400 hover:text-blue-500 transition-colors" type="button">
<span className="flex items-center gap-2">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear" width="18"></iconify-icon>
                Précédent
              </span>
<span className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-300"></span>
</button>
<button className="btn-primary py-3 px-8 flex items-center gap-2" type="submit">
<span className="text-xs font-medium tracking-widest uppercase">
                Valider
              </span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="18"></iconify-icon>
</button>
</div>
</form>
</div>
</main>


    </>
  );
}
