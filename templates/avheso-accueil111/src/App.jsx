import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
primary: '#FF8D28',
primaryLight: '#FFF4EB', // Version très claire pour les fonds
slate: {
850: '#1e293b', // Custom dark
}
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-2xl font-bold tracking-tighter text-slate-900 group" href="#">
                AVHESO<span className="text-primary">.</span>
</a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
<a className="hover:text-primary transition-colors" href="#about">Qui Sommes-Nous ?</a>
<a className="hover:text-primary transition-colors" href="#services">Santé</a>
<a className="hover:text-primary transition-colors" href="#services">Services</a>
<a className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-primary transition-colors duration-300" href="#contact">
                    Contactez Nous
                </a>
</div>

<button className="md:hidden text-slate-900">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-primary text-xs font-medium mb-6 border border-orange-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                    Innovation Santé
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                    Accompagnement de la transformation digitale et <span className="text-primary">solutions innovantes</span> pour la santé.
                </h1>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mb-10">
                    Avec Avheso, transformez vos défis en opportunités grâce à des solutions digitales. Nous proposons des services spécialisés dans la gestion des parcours de soin et l’accompagnement en transformation digitale.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-3.5 bg-primary text-white font-medium rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20" href="#contact">
                        Démarrer un projet
                        <i className="ml-2 w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="inline-flex justify-center items-center px-8 py-3.5 bg-white text-slate-700 border border-slate-200 font-medium rounded-xl hover:bg-slate-50 transition-all" href="#about">
                        En savoir plus
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<span className="text-primary font-semibold tracking-wide text-sm uppercase">L'entreprise</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mt-2">Notre raison d'être</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="relative group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-orange-100 transition-colors">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary">
<i className="w-6 h-6" data-lucide="target" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-6 tracking-tight">Notre Mission</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-600">
<i className="w-5 h-5 text-primary shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Accompagner la transformation digitale du secteur.</span>
</li>
<li className="flex items-start gap-3 text-slate-600">
<i className="w-5 h-5 text-primary shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Optimiser les parcours de soins grâce à des solutions innovantes.</span>
</li>
<li className="flex items-start gap-3 text-slate-600">
<i className="w-5 h-5 text-primary shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Déployer des systèmes d’information performants pour la coordination des données.</span>
</li>
<li className="flex items-start gap-3 text-slate-600">
<i className="w-5 h-5 text-primary shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Concevoir des services personnalisés basés sur notre expertise.</span>
</li>
</ul>
<p className="mt-8 text-sm text-slate-500 italic border-t border-slate-200 pt-4">
                        En tant que partenaire de confiance, nous vous accompagnons à chaque étape de votre transformation numérique.
                    </p>
</div>

<div>
<h3 className="text-2xl font-semibold text-slate-900 mb-6 tracking-tight flex items-center gap-3">
<i className="w-6 h-6 text-primary" data-lucide="eye" strokeWidth="1.5"></i>
                        Notre Vision
                    </h3>
<div className="space-y-8">
<div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Un avenir digital</h4>
<p className="text-slate-600 leading-relaxed">
                                Chez Avheso, nous sommes convaincus que les solutions technologiques ont un impact positif sur la gestion des parcours de soin et l’optimisation des processus organisationnels, permettant ainsi de libérer le potentiel des acteurs locaux.
                            </p>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Ambition Continentale</h4>
<p className="text-slate-600 leading-relaxed">
                                Notre ambition est de devenir un acteur majeur de la transformation digitale en santé sur le continent africain.
                            </p>
</div>
<div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
<p className="text-slate-800 font-medium">
                                "Nous croyons fermement que l’innovation digitale est un levier essentiel pour moderniser les parcours de soin."
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="text-primary font-semibold tracking-wide text-sm uppercase">Fondamentaux</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-2">Nos Valeurs</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
<i className="w-5 h-5" data-lucide="heart-handshake" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Engagement</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Comprendre et répondre aux besoins spécifiques des acteurs locaux. Chaque solution est conçue pour s'adapter aux réalités du terrain et favoriser un développement durable.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
<i className="w-5 h-5" data-lucide="lightbulb" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Innovation</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Des solutions de pointe pour anticiper les évolutions. Notre approche repose sur l’agilité, la veille constante et l’adaptation continue aux besoins du secteur.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
<i className="w-5 h-5" data-lucide="award" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Excellence</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Des outils numériques performants et ergonomiques. Notre objectif : offrir une expérience fluide, intuitive et adaptée aux professionnels comme aux patients.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<span className="text-primary font-semibold tracking-wide text-sm uppercase">Expertise</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mt-2">Nos Services</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group p-10 rounded-3xl border border-slate-200 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-orange-500/5 bg-white">
<div className="flex items-center gap-4 mb-6">
<div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">AVHESO Santé</h3>
</div>
<p className="text-lg text-slate-600">
                        Des solutions digitales pour améliorer la gestion des parcours de soin et moderniser les systèmes de santé.
                    </p>
</div>
<div className="group p-10 rounded-3xl border border-slate-200 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-orange-500/5 bg-white">
<div className="flex items-center gap-4 mb-6">
<div className="p-3 bg-purple-50 text-purple-600 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="settings-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">AVHESO Services</h3>
</div>
<p className="text-lg text-slate-600">
                        Votre partenaire de confiance pour réussir la transformation digitale et sécuriser vos systèmes d’information.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<span className="text-primary font-semibold tracking-wide text-sm uppercase">Blog &amp; Événements</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mt-2">Nos actualités</h2>
</div>
<a className="text-slate-900 font-medium hover:text-primary flex items-center text-sm" href="#">
                    Voir tout <i className="w-4 h-4 ml-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 grid grid-cols-1 lg:grid-cols-2">
<div className="p-8 md:p-12 flex flex-col justify-center">
<div className="flex items-center gap-3 text-sm text-slate-500 mb-6">
<span className="px-3 py-1 bg-orange-50 text-primary rounded-full font-medium text-xs">Événement</span>
<span>Mai 2024</span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Retour 1 an après : Avheso au 2ème Congrès de la SAFS-CMF-CO</h3>
<p className="text-slate-600 mb-6 leading-relaxed">
                        Engagement pour la digitalisation des soins et l’innovation en santé numérique. Les 16 et 17 mai 2024, Avheso a pris part au congrès à Yamoussoukro, rassemblant experts médicaux et universitaires.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-primary mt-1" data-lucide="presentation" strokeWidth="1.5"></i>
                            Stand dynamique et interactif
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-primary mt-1" data-lucide="message-circle" strokeWidth="1.5"></i>
                            Échange autour de la santé numérique
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-primary mt-1" data-lucide="users" strokeWidth="1.5"></i>
                            Clôture conviviale
                        </li>
</ul>
<a className="text-primary font-medium flex items-center group" href="#">
                        Lire l'article complet 
                        <span className="block transition-all group-hover:translate-x-1 ml-2">→</span>
</a>
</div>
<div className="bg-slate-100 relative min-h-[300px] lg:min-h-full">

<div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-slate-200 flex items-center justify-center">
<div className="text-center p-6">
<i className="w-20 h-20 text-slate-400 mx-auto mb-4 opacity-50" data-lucide="calendar-days" strokeWidth="1"></i>
<p className="text-slate-500 font-medium">SAFS-CMF-CO 2024</p>
<p className="text-slate-400 text-sm">Yamoussoukro</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-b border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-semibold text-slate-400 tracking-wider uppercase mb-8">Ils nous font confiance</p>
<div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-bold text-slate-800">
<i className="w-6 h-6" data-lucide="building-2"></i> CLINIQUE X
                </div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-800">
<i className="w-6 h-6" data-lucide="stethoscope"></i> HOPITAL Y
                </div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-800">
<i className="w-6 h-6" data-lucide="network"></i> RESEAU Z
                </div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-800">
<i className="w-6 h-6" data-lucide="cross"></i> CENTRE MED
                </div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Nous Contacter</h2>
<p className="text-slate-500 mb-8">Remplissez le formulaire ci-dessous pour discuter de votre projet.</p>
<form className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
<div className="sm:col-span-1">
<label className="block text-xs font-semibold text-slate-700 uppercase mb-2">Titre</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-primary appearance-none transition-all cursor-pointer">
<option>Mme</option>
<option>M.</option>
<option>Dr.</option>
</select>
<i className="absolute right-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="sm:col-span-3">
<label className="block text-xs font-semibold text-slate-700 uppercase mb-2">Nom</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-primary transition-all placeholder:text-slate-400" type="text" value="Diakhité Stéphanie"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase mb-2">E-mail</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-primary transition-all placeholder:text-slate-400" type="email" value="dstephanie@exemple.org"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase mb-2">Téléphone</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-primary transition-all placeholder:text-slate-400" type="tel" value="+225 0101010102"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase mb-2">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-primary transition-all placeholder:text-slate-400 resize-none" placeholder="Veuillez saisir votre message" rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-slate-900 text-white font-medium py-3.5 rounded-lg hover:bg-primary transition-colors duration-300 shadow-lg shadow-slate-900/10" type="button">
                                Envoyer le message
                            </button>
</div>
</form>
</div>

<div className="flex flex-col justify-between h-full space-y-8">
<div className="bg-primaryLight rounded-3xl p-8 border border-orange-100">
<h3 className="text-xl font-semibold text-slate-900 mb-6">Nos Coordonnées</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shrink-0 shadow-sm">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs font-bold text-slate-500 uppercase mb-1">Email</p>
<a className="text-slate-900 font-medium hover:text-primary" href="mailto:contact@avheso.com">contact@avheso.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shrink-0 shadow-sm">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs font-bold text-slate-500 uppercase mb-1">Téléphone</p>
<p className="text-slate-900 font-medium">(+225) 07.08.54.55.55</p>
<p className="text-slate-900 font-medium">(+225) 01.02.33.68.12</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shrink-0 shadow-sm">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs font-bold text-slate-500 uppercase mb-1">Adresse</p>
<p className="text-slate-900 leading-relaxed">
                                        Lot 224 Ilot 33 ABATTA<br/>
                                        Cité MUGEF-CI BINGERVILLE AKOUEDO-EST<br/>
                                        25 BP 1547 Abidjan 25
                                    </p>
</div>
</div>
</div>
</div>

<div className="h-64 w-full bg-slate-100 rounded-3xl relative overflow-hidden group">
<div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
<p className="text-slate-400 font-medium flex items-center gap-2">
<i className="w-5 h-5" data-lucide="map"></i>
                                Carte Interactive
                            </p>
</div>
<div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors cursor-pointer"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<a className="text-2xl font-bold tracking-tighter text-slate-900 mb-6 block" href="#">
                        AVHESO<span className="text-primary">.</span>
</a>
<p className="text-slate-500 max-w-sm mb-6">
                        Accompagnement de la transformation digitale et solutions innovantes pour le secteur de la santé.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Liens Utiles</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-primary transition-colors" href="#about">Qui Sommes-Nous ?</a></li>
<li><a className="hover:text-primary transition-colors" href="#services">Santé</a></li>
<li><a className="hover:text-primary transition-colors" href="#services">Nos Services</a></li>
<li><a className="hover:text-primary transition-colors" href="#contact">Contactez Nous</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Légal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-primary transition-colors" href="#">Mentions légales</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Confidentialité</a></li>
<li><a className="hover:text-primary transition-colors" href="#">CGU</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
<p>© 2024 AVHESO. Tous droits réservés.</p>
<p>www.avheso.com</p>
</div>
</div>
</footer>


    </>
  );
}
