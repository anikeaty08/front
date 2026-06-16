import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    /* icons */
    lucide.createIcons();
    /* particles */
    particlesJS.load('particles','https://gist.githubusercontent.com/ste-sin/2cb6c0394735a090c2b7e2b95397b789/raw/basic-particles.json');
    /* modale */
    const btns=[...document.querySelectorAll('#ctaBtn,#heroCta,#ctaBtn2')];
    const modal=document.getElementById('quizModal');
    const close=document.getElementById('closeModal');
    btns.forEach(b=>b.addEventListener('click',()=>{modal.classList.remove('pointer-events-none','opacity-0');modal.classList.add('opacity-100')}));
    close.addEventListener('click',()=>{modal.classList.add('pointer-events-none','opacity-0');modal.classList.remove('opacity-100')});
    /* scroll animations */
    const obs=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');obs.unobserve(e.target)}}),{threshold:.2});
    document.querySelectorAll('[data-animate]').forEach(el=>obs.observe(el));
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed inset-x-0 top-0 z-50 backdrop-blur-lg bg-neutral-900/40 ring-1 ring-neutral-800">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
<a aria-label="Accueil" className="font-semibold text-lg tracking-tight hover:text-violet-500 transition" href="#">Lagentia</a>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="nav-link" href="#solutions">Solutions</a>
<a className="nav-link" href="#process">Process</a>
<a className="nav-link" href="#impact">Résultats</a>
<a className="nav-link" href="#collectif">Anti-agence</a>
<a className="nav-link" href="#offres">Offres</a>
<a className="nav-link" href="#contact">Contact</a>
</nav>
<button className="md:hidden flex items-center gap-1 bg-violet-600 hover:bg-violet-500 transition rounded-lg px-3 py-2 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-600" id="ctaBtn">
<i className="w-4 h-4" data-lucide="zap"></i> Go
      </button>
</div>
</header>

<section className="relative overflow-hidden pt-32 pb-36">
<canvas className="absolute inset-0 w-full h-full" id="particles"></canvas>

<div className="pointer-events-none absolute -top-40 -left-40 w-[640px] h-[640px] rounded-full bg-gradient-to-br from-blue-600/20 via-violet-600/30 to-transparent blur-3xl"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<span className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-600 text-xs font-medium uppercase tracking-wide" data-animate="">
<i className="w-4 h-4" data-lucide="shield-off"></i> Anti-agence
      </span>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-8" data-animate="">
        4 semaines<br className="hidden sm:block"/>pour transformer vos opérations.
      </h1>
<p className="max-w-2xl text-xl text-neutral-300 mb-10" data-animate="">On construit des apps métier, agents et automatisations qui libèrent vos équipes et gonflent votre marge. Zéro blabla.</p>
<button className="hover-tilt inline-flex items-center gap-2 bg-gradient-to-br from-blue-600 to-violet-600 hover:opacity-90 transition rounded-lg px-7 py-4 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-600" data-animate="" id="heroCta">
<i className="w-5 h-5" data-lucide="zap"></i> Diagnostic express
      </button>
</div>
<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950"></div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-800" id="collectif">
<div className="flex flex-col md:flex-row items-start md:items-center gap-10">
<div className="flex-1">
<h2 className="text-5xl font-semibold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-500 to-violet-500" data-animate="">
          On est <span className="whitespace-nowrap">ANTI-AGENCE.</span>
</h2>
<p className="text-neutral-300 text-lg mb-4" data-animate="">
          Un collectif d’experts seniors, choisis pour leur capacité à livrer, pas pour remplir des slides.
        </p>
<p className="text-neutral-400 italic" data-animate="">
          (Spoiler : le “junior à 800 €/jour” qui apprend sur votre dos, très peu pour nous.)
        </p>
</div>
<div className="hover-tilt flex-shrink-0 w-full md:w-72 lg:w-80 bg-neutral-900/60 rounded-xl ring-1 ring-neutral-800 p-6 backdrop-blur-md glow-border" data-animate="">
<h3 className="text-2xl font-medium mb-4">En bref :</h3>
<ul className="list-disc pl-5 space-y-2 text-neutral-300">
<li>100 % de seniors <span className="text-neutral-500">(10 ans+)</span></li>
<li>1 seul interlocuteur craft / dev / data</li>
<li>Zéro slide inutile, livrables en prod</li>
<li>Transparence totale sur les coûts</li>
</ul>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="impact">
<h2 className="text-4xl font-semibold tracking-tight mb-12" data-animate="">
      Pendant que vous réfléchissez, vos concurrents agissent.
    </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="hover-tilt p-6 bg-neutral-900/60 rounded-xl ring-1 ring-neutral-800 backdrop-blur-md glow-border" data-animate="">
<p className="text-5xl font-semibold text-blue-500 mb-2">+30 %</p>
<p className="text-neutral-300">de productivité en front-office</p>
</div>
<div className="hover-tilt p-6 bg-neutral-900/60 rounded-xl ring-1 ring-neutral-800 backdrop-blur-md glow-border" data-animate="">
<p className="text-5xl font-semibold text-blue-500 mb-2">–60 %</p>
<p className="text-neutral-300">de coûts sur les tâches répétitives</p>
</div>
<div className="hover-tilt p-6 bg-neutral-900/60 rounded-xl ring-1 ring-neutral-800 backdrop-blur-md glow-border" data-animate="">
<p className="text-5xl font-semibold text-blue-500 mb-2">100 %</p>
<p className="text-neutral-300">de visibilité en temps réel</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-800" id="solutions">
<h2 className="text-4xl font-semibold tracking-tight mb-12" data-animate="">
      Ce qu’on fait concrètement
    </h2>
<div className="grid md:grid-cols-2 gap-12">
<div className="hover-tilt flex gap-6 p-5 rounded-lg transition bg-neutral-900/40 glow-border" data-animate="">
<i className="w-10 h-10 text-violet-500 flex-shrink-0" data-lucide="smartphone"></i>
<div>
<h3 className="text-xl font-medium mb-1">Apps métier chirurgicales</h3>
<p className="text-neutral-400 mb-1">Vos spécificités, codées pixel-perfect.</p>
<p className="text-neutral-300 italic">–70 % de saisie humaine</p>
</div>
</div>
<div className="hover-tilt flex gap-6 p-5 rounded-lg bg-neutral-900/40 glow-border" data-animate="">
<i className="w-10 h-10 text-violet-500 flex-shrink-0" data-lucide="bot"></i>
<div>
<h3 className="text-xl font-medium mb-1">Agents qui bossent vraiment</h3>
<p className="text-neutral-400 mb-1">IA + RPA = exécution lourde externalisée.</p>
<p className="text-neutral-300 italic">500 leads pré-qualifiés/jour</p>
</div>
</div>
<div className="hover-tilt flex gap-6 p-5 rounded-lg bg-neutral-900/40 glow-border" data-animate="">
<i className="w-10 h-10 text-violet-500 flex-shrink-0" data-lucide="phone-call"></i>
<div>
<h3 className="text-xl font-medium mb-1">Voix IA indétectables</h3>
<p className="text-neutral-400 mb-1">Vos clients préfèrent leur efficacité.</p>
<p className="text-neutral-300 italic">+35 % de NPS</p>
</div>
</div>
<div className="hover-tilt flex gap-6 p-5 rounded-lg bg-neutral-900/40 glow-border" data-animate="">
<i className="w-10 h-10 text-violet-500 flex-shrink-0" data-lucide="zap"></i>
<div>
<h3 className="text-xl font-medium mb-1">Automatisations invisibles</h3>
<p className="text-neutral-400 mb-1">Si on les voit, c’est qu’on a raté.</p>
<p className="text-neutral-300 italic">0 erreur sur 80 % des flux</p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900/60 border-t border-neutral-800 py-24" id="process">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-4xl font-semibold tracking-tight mb-16 text-center" data-animate="">
        Notre méthode : rapide, itérative, mesurable
      </h2>
<ol className="relative border-l border-neutral-700 pl-8 space-y-12">
<li className="group" data-animate="">
<span className="absolute -left-[11px] top-1 w-5 h-5 bg-blue-600 rounded-full ring-4 ring-neutral-950 glow-border"></span>
<h3 className="text-xl font-medium mb-2">Audit Killer <span className="text-neutral-500">(J+7)</span></h3>
<p className="text-neutral-400">3 opportunités classées par ROI, backlog priorisé, chiffrage à l’heure près.</p>
</li>
<li className="group" data-animate="">
<span className="absolute -left-[11px] top-1 w-5 h-5 bg-violet-600 rounded-full ring-4 ring-neutral-950 glow-border"></span>
<h3 className="text-xl font-medium mb-2">Premier Impact <span className="text-neutral-500">(J+30)</span></h3>
<p className="text-neutral-400">Premier livrable en condition opérationnelle, formation équipe, indicateurs live.</p>
</li>
<li className="group" data-animate="">
<span className="absolute -left-[11px] top-1 w-5 h-5 bg-indigo-600 rounded-full ring-4 ring-neutral-950 glow-border"></span>
<h3 className="text-xl font-medium mb-2">Scaling systémique <span className="text-neutral-500">(J+90)</span></h3>
<p className="text-neutral-400">Processus clés refondus, gouvernance data, transfert de compétences.</p>
</li>
</ol>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="offres">
<h2 className="text-4xl font-semibold tracking-tight mb-12" data-animate="">
      Le Sprint Performance
    </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="hover-tilt bg-neutral-900/60 rounded-xl ring-1 ring-neutral-800 p-8 flex flex-col glow-border" data-animate="">
<h3 className="text-2xl font-medium mb-2">Audit Killer</h3>
<p className="text-neutral-400 mb-6">Vos 3 plus gros quick-wins en 7 jours.</p>
<p className="text-4xl font-semibold mb-6">2 500 €</p>
<ul className="space-y-2 text-neutral-300 flex-1">
<li>Feuille de route ROI</li>
<li>Priorités chiffrées</li>
<li>Déduit si on continue</li>
</ul>
<button className="mt-8 bg-violet-600 hover:bg-violet-500 transition rounded-lg px-4 py-2 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-600">Je démarre</button>
</div>
<div className="hover-tilt bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl p-1 glow-border" data-animate="">
<div className="bg-neutral-950 rounded-[11px] p-8 flex flex-col h-full">
<h3 className="text-2xl font-medium mb-2 text-white">Premier Impact</h3>
<p className="text-neutral-400 mb-6">4 semaines pour éliminer votre friction #1.</p>
<p className="text-4xl font-semibold mb-6 text-white">Satisfait ou remboursé</p>
<ul className="space-y-2 text-neutral-300 flex-1">
<li>App / Agent / Automation</li>
<li>Formation incluse</li>
<li>Livrable opérationnel</li>
</ul>
<button className="mt-8 bg-violet-600 hover:bg-violet-500 transition rounded-lg px-4 py-2 font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-600">Je veux l’impact</button>
</div>
</div>
<div className="hover-tilt bg-neutral-900/60 rounded-xl ring-1 ring-neutral-800 p-8 flex flex-col glow-border" data-animate="">
<h3 className="text-2xl font-medium mb-2">Transformation Système</h3>
<p className="text-neutral-400 mb-6">3 mois pour repenser vos process critiques.</p>
<p className="text-4xl font-semibold mb-6">Payé sur résultats</p>
<ul className="space-y-2 text-neutral-300 flex-1">
<li>Écosystème complet</li>
<li>Assistance jusqu’à autonomie</li>
<li>ROI mesuré &amp; partagé</li>
</ul>
<button className="mt-8 bg-violet-600 hover:bg-violet-500 transition rounded-lg px-4 py-2 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-600">Je veux le système</button>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-gradient-to-br from-violet-600/10 via-indigo-600/10 to-transparent pt-24 pb-24">
<div className="max-w-3xl mx-auto px-6 text-center" data-animate="">
<h2 className="text-4xl font-semibold tracking-tight mb-6">Prêt pour votre sprint ?</h2>
<p className="text-neutral-300 mb-10">Un appel de 30 min pour voir si on se fait gagner du temps mutuellement.</p>
<button className="hover-tilt inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 transition rounded-lg px-8 py-4 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-600" id="ctaBtn2">
<i className="w-5 h-5" data-lucide="rocket"></i> Bookez votre créneau
      </button>
</div>
<div className="pointer-events-none absolute -bottom-40 right-0 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-blue-600/20 via-violet-600/20 to-transparent blur-3xl"></div>
</section>

<footer className="border-t border-neutral-800 pt-12 pb-12" id="contact">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<p className="text-neutral-400 text-sm">© 2024 Lagentia. Tous droits réservés.</p>
<p className="text-neutral-300 text-sm flex items-center gap-2">
<span className="font-medium text-white">PS :</span>
<a className="inline-flex items-center gap-1 underline decoration-dotted underline-offset-4 hover:text-violet-500 transition" href="https://www.google.com/search?q=Cabinet+de+conseil" target="_blank">si vous préférez un POC hors-de-prix&lt; i data-lucide="external-link" className="w-4 h-4"&gt;</a>
</p>
</div>
</footer>

<div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center opacity-0 pointer-events-none transition" id="quizModal">
<div className="bg-neutral-950 rounded-xl ring-1 ring-neutral-800 max-w-lg w-full p-8">
<div className="flex justify-between items-center mb-6">
<h3 className="text-2xl font-medium">3 questions pour commencer</h3>
<button aria-label="Fermer" id="closeModal"><i className="w-6 h-6" data-lucide="x"></i></button>
</div>
<form className="space-y-5" id="quizForm">
<div>
<label className="block text-neutral-300 mb-2" htmlFor="defi">Votre plus gros défi ?</label>
<input className="w-full bg-neutral-800/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-600" id="defi" placeholder="Ex. gestion de commandes" required=""/>
</div>
<div>
<label className="block text-neutral-300 mb-2" htmlFor="team">Équipe concernée ?</label>
<input className="w-full bg-neutral-800/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-600" id="team" placeholder="Ex. Support client" required=""/>
</div>
<div>
<label className="block text-neutral-300 mb-2" htmlFor="delay">Objectif de délai ?</label>
<select className="w-full bg-neutral-800/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-600" id="delay" required="">
<option>Moins d’un mois</option>
<option>1-3 mois</option>
<option>Je ne sais pas</option>
</select>
</div>
<button className="w-full bg-violet-600 hover:bg-violet-500 transition rounded-lg px-4 py-3 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-600">Envoyer</button>
</form>
</div>
</div>





    </>
  );
}
