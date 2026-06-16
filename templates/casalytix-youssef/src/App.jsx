import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const animatedElements = document.querySelectorAll('.fade-in-up');
            animatedElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">Casalytix</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#avantages">Avantages</a>
<a className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#process">Méthodologie</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all bg-slate-900 rounded-lg hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#contact">
                    Demander un devis
                </a>

<button className="md:hidden text-slate-600">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 z-0 bg-grid"></div>

<div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 left-0 -translate-y-12 -translate-x-12 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-slate-50 border border-slate-200 fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Nouvelle ère de l'offshoring IT</span>
</div>
<h1 className="max-w-4xl text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 fade-in-up delay-100">
                Transformez vos données en <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">décisions stratégiques</span>
</h1>
<p className="max-w-2xl text-lg md:text-xl text-slate-500 mb-10 leading-relaxed fade-in-up delay-200">
                Casalytix combine expertise technique offshore et intelligence des données pour propulser votre entreprise. Automatisation, Dashboards et équipes dédiées à coût maîtrisé.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full justify-center fade-in-up delay-300">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white transition-all bg-indigo-600 rounded-lg hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30" href="#services">
                    Découvrir nos services
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-slate-700 transition-all bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300" href="#contact">
                    Parler à un expert
                </a>
</div>

<div className="mt-20 relative w-full max-w-5xl mx-auto fade-in-up delay-300">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-20"></div>
<div className="relative bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] flex flex-col">

<div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/50">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>

<div className="flex-1 p-6 grid grid-cols-3 gap-6">

<div className="col-span-1 space-y-4">
<div className="h-24 bg-indigo-50/50 rounded-lg border border-indigo-100 flex items-center justify-center">
<div className="text-center">
<div className="text-2xl font-semibold text-indigo-600 tracking-tight">+145%</div>
<div className="text-xs text-indigo-400 mt-1">ROI Mensuel</div>
</div>
</div>
<div className="space-y-2">
<div className="h-2 w-3/4 bg-slate-100 rounded-full"></div>
<div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
<div className="h-2 w-full bg-slate-100 rounded-full"></div>
</div>
</div>

<div className="col-span-2 bg-slate-50/50 rounded-lg border border-slate-100 relative p-4 flex items-end justify-between gap-2">
<div className="w-full bg-blue-500/20 rounded-t h-[40%]"></div>
<div className="w-full bg-blue-500/40 rounded-t h-[65%]"></div>
<div className="w-full bg-blue-500/60 rounded-t h-[50%]"></div>
<div className="w-full bg-blue-500/80 rounded-t h-[85%]"></div>
<div className="w-full bg-indigo-600 rounded-t h-[75%] shadow-lg shadow-indigo-500/20"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Ils font confiance à nos solutions data</p>
<div className="flex flex-wrap justify-center gap-12 grayscale opacity-60">

<span className="text-xl font-bold text-slate-800 tracking-tighter">Acme<span className="text-indigo-600">Corp</span></span>
<span className="text-xl font-semibold text-slate-800 tracking-tight italic">GlobalData</span>
<span className="text-xl font-bold text-slate-800 flex items-center gap-1"><div className="w-4 h-4 bg-slate-800 rounded-full"></div>Sphere</span>
<span className="text-xl font-medium text-slate-800 tracking-widest">NEXUS</span>
<span className="text-xl font-bold text-slate-800 tracking-tight">Vortex<span className="font-light">Labs</span></span>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20 fade-in-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Une expertise complète pour votre croissance</h2>
<p className="text-lg text-slate-500">Nous déployons des solutions technologiques avancées et des équipes agiles pour optimiser vos opérations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 fade-in-up delay-100">
<div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-new-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Analyse de Données</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Extraction d'insights précieux, Data Mining et Business Intelligence pour éclairer chaque décision stratégique.
                    </p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 fade-in-up delay-200">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Dashboards &amp; Viz</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Création de tableaux de bord interactifs et personnalisés (PowerBI, Tableau) pour un pilotage en temps réel.
                    </p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 fade-in-up delay-300">
<div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:settings-minimalistic-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Automatisation</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        RPA et workflows automatisés pour éliminer les tâches répétitives et accélérer vos processus métier.
                    </p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 fade-in-up delay-300">
<div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Offshoring IT</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Constitution d'équipes techniques dédiées, développement web et support, parfaitement intégrés à votre structure.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="avantages">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="fade-in-up">
<div className="inline-block text-indigo-600 font-semibold text-sm mb-2 tracking-wide uppercase">Pourquoi nous choisir</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">L'excellence opérationnelle, <br/>sans compromis.</h2>
<p className="text-lg text-slate-500 mb-8">
                        Casalytix n'est pas seulement un prestataire, c'est votre partenaire d'extension. Nous allions la qualité des profils à une méthodologie rigoureuse.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Réduction des coûts significative</h4>
<p className="text-sm text-slate-500 mt-1">Bénéficiez de tarifs offshore compétitifs sans sacrifier la qualité technique.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Expertise &amp; Scalabilité</h4>
<p className="text-sm text-slate-500 mt-1">Des profils experts disponibles rapidement pour accompagner votre croissance.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
<iconify-icon icon="solar:headset-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Support proactif</h4>
<p className="text-sm text-slate-500 mt-1">Une communication fluide et un suivi régulier de vos projets.</p>
</div>
</div>
</div>
</div>

<div className="relative fade-in-up delay-200">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-blue-50 rounded-2xl transform rotate-3"></div>
<div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 p-8 overflow-hidden">

<div className="flex justify-between items-end mb-8">
<div>
<div className="text-sm text-slate-400 font-medium">Performance globale</div>
<div className="text-4xl font-semibold text-slate-900 tracking-tight mt-2">98.4%</div>
</div>
<div className="text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
<iconify-icon icon="solar:trending-up-linear"></iconify-icon>
                                +12.5%
                            </div>
</div>

<div className="h-40 flex items-end justify-between gap-2 px-2">
<div className="w-full bg-slate-100 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-slate-100 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-slate-100 rounded-t-sm h-[35%]"></div>
<div className="w-full bg-slate-100 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-indigo-100 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-indigo-200 rounded-t-sm h-[75%]"></div>
<div className="w-full bg-indigo-500 rounded-t-sm h-[90%]"></div>
</div>

<div className="absolute top-4 right-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-[160px]">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
</div>
<div className="text-xs font-semibold text-slate-700">Vitesse</div>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full mb-1 overflow-hidden">
<div className="bg-orange-500 h-full w-[85%]"></div>
</div>
<div className="text-[10px] text-slate-400 text-right">Optimisé</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-in-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Comment nous travaillons</h2>
<p className="text-lg text-slate-500">Une méthodologie transparente en 4 étapes pour garantir le succès de votre projet.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="bg-white pt-4 md:pt-0 fade-in-up delay-100">
<div className="w-10 h-10 rounded-full bg-white border-2 border-indigo-600 text-indigo-600 font-semibold flex items-center justify-center mb-6 mx-auto md:mx-0 relative z-10 shadow-sm">
                            01
                        </div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 text-center md:text-left">Audit &amp; Analyse</h3>
<p className="text-sm text-slate-500 text-center md:text-left">Nous étudions vos besoins, vos données actuelles et vos objectifs pour définir le périmètre.</p>
</div>

<div className="bg-white pt-4 md:pt-0 fade-in-up delay-200">
<div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 text-slate-400 font-semibold flex items-center justify-center mb-6 mx-auto md:mx-0 relative z-10">
                            02
                        </div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 text-center md:text-left">Stratégie</h3>
<p className="text-sm text-slate-500 text-center md:text-left">Proposition d'une architecture sur-mesure, choix des technologies et constitution de l'équipe.</p>
</div>

<div className="bg-white pt-4 md:pt-0 fade-in-up delay-300">
<div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 text-slate-400 font-semibold flex items-center justify-center mb-6 mx-auto md:mx-0 relative z-10">
                            03
                        </div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 text-center md:text-left">Mise en œuvre</h3>
<p className="text-sm text-slate-500 text-center md:text-left">Déploiement des solutions data, développement et intégration des processus automatisés.</p>
</div>

<div className="bg-white pt-4 md:pt-0 fade-in-up delay-300">
<div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 text-slate-400 font-semibold flex items-center justify-center mb-6 mx-auto md:mx-0 relative z-10">
                            04
                        </div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 text-center md:text-left">Optimisation</h3>
<p className="text-sm text-slate-500 text-center md:text-left">Suivi continu, maintenance et amélioration des performances basées sur les retours.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/30 skew-x-12 transform origin-top-right"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">

<div className="text-white fade-in-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Prêt à valoriser vos données ?</h2>
<p className="text-slate-400 mb-10 text-lg">
                        Discutons de votre projet. Nos experts sont prêts à concevoir la solution adaptée à vos enjeux business.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-all">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div className="">
<div className="text-xs text-slate-500 uppercase tracking-wider">Email</div>
<div className="font-medium text-white">kaidiyoussef11@gmail.com</div>
</div>
</div>
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-all">
<iconify-icon icon="brandico:linkedin-rect" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-500 uppercase tracking-wider">Réseau Social</div>
<div className="text-white font-medium">Suivez-nous sur LinkedIn</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 fade-in-up delay-200">
<form action="https://formsubmit.co/kaidiyoussef11@gmail.com" className="space-y-5" method="POST">

<input name="_subject" type="hidden" value="Nouveau message de Casalytix"/>
<input name="_captcha" type="hidden" value="false"/>
<input name="_template" type="hidden" value="table"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-700 uppercase">Nom complet</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors text-sm text-slate-800" name="name" placeholder="Jean Dupont" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-700 uppercase">Société</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors text-sm text-slate-800" name="company" placeholder="Votre entreprise" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-700 uppercase">Email professionnel</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors text-sm text-slate-800" name="email" placeholder="jean@entreprise.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-700 uppercase">Message</label>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors text-sm text-slate-800 resize-none" name="message" placeholder="Décrivez brièvement vos besoins..." required="" rows="4"></textarea>
</div>
<button className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg shadow-indigo-500/30 transition-all flex items-center justify-center gap-2" type="submit">
                            Envoyer le message
                            <iconify-icon icon="solar:plain-3-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 py-12 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:chart-square-linear" width="14"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight">Casalytix</span>
</div>
<div className="text-slate-500 text-sm">
                © 2023 Casalytix. Tous droits réservés.
            </div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors text-sm" href="#">Mentions légales</a>
<a className="text-slate-500 hover:text-white transition-colors text-sm" href="#">Confidentialité</a>
</div>
</div>
</footer>



    </>
  );
}
