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
      

<nav className="fixed w-full z-50 top-0 border-b border-blue-100 bg-white/90 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#" onclick="navigateTo('home')">
<div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform">
<span className="font-bold text-xl tracking-tighter">V</span>
</div>
<div className="flex flex-col">
<span className="text-blue-950 font-bold tracking-tight text-lg leading-none">VETOPOLE</span>
<span className="text-sky-500 text-xs font-medium tracking-widest uppercase">Occitanie</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<button className="nav-link text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors" data-target="home" onclick="navigateTo('home')">Accueil</button>
<button className="nav-link text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" data-target="clinique" onclick="navigateTo('clinique')">La Clinique</button>
<button className="nav-link text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" data-target="services" onclick="navigateTo('services')">Nos Services</button>
<button className="nav-link text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" data-target="equipe" onclick="navigateTo('equipe')">L'Équipe</button>
<button className="nav-link text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" data-target="contact" onclick="navigateTo('contact')">Contact</button>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center justify-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 ring-2 ring-offset-2 ring-transparent hover:ring-blue-600" onclick="navigateTo('contact')">
                    Prendre RDV
                </button>

<button className="lg:hidden p-2 text-slate-500 hover:text-blue-600" onclick="toggleMobileMenu()">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="hidden lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl p-6 flex flex-col gap-4" id="mobile-menu">
<button className="text-left text-sm font-semibold text-slate-700" onclick="navigateTo('home'); toggleMobileMenu()">Accueil</button>
<button className="text-left text-sm font-semibold text-slate-700" onclick="navigateTo('clinique'); toggleMobileMenu()">La Clinique</button>
<button className="text-left text-sm font-semibold text-slate-700" onclick="navigateTo('services'); toggleMobileMenu()">Services</button>
<button className="text-left text-sm font-semibold text-slate-700" onclick="navigateTo('equipe'); toggleMobileMenu()">Équipe</button>
<button className="text-left text-sm font-semibold text-slate-700" onclick="navigateTo('contact'); toggleMobileMenu()">Contact</button>
</div>
</nav>

<main className="pt-20 flex-grow" id="main-content">

<div className="page-section fade-in" id="page-home">

<section className="relative h-[calc(100vh-80px)] min-h-[600px] w-full overflow-hidden parallax-section flex items-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1628009368231-7929e444cf48?q=80&amp'}}>
<div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-transparent z-10"></div>
<div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 backdrop-blur-sm text-sky-100 text-xs font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                            Urgences assurées 24h/24 et 7j/7
                        </div>
<h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
                            L'excellence médicale <br/>
<span className="text-sky-300">pour vos compagnons.</span>
</h1>
<p className="text-lg md:text-xl text-blue-100/90 mb-10 leading-relaxed font-light max-w-xl">
                            Bienvenue chez VETOPOLE Occitanie. Une infrastructure hospitalière de pointe dédiée à la santé animale.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 bg-white text-blue-950 text-sm font-bold rounded-full hover:bg-sky-50 transition-colors flex items-center justify-center gap-2 shadow-xl" onclick="navigateTo('contact')">
                                Consultations
                                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-4 bg-blue-900/50 backdrop-blur-md text-white border border-white/20 text-sm font-semibold rounded-full hover:bg-blue-900/70 transition-colors flex items-center justify-center gap-2" onclick="navigateTo('clinique')">
                                Découvrir la clinique
                            </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-sky-50">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 aspect-[4/3]">
<img alt="Vétérinaire" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Notre Philosophie</h2>
<h3 className="text-3xl md:text-4xl font-bold text-blue-950 tracking-tight mb-6">Approche globale &amp; humaine.</h3>
<p className="text-slate-500 text-lg mb-8 leading-relaxed">
                            Du diagnostic précoce aux chirurgies complexes, notre plateau technique de 400m² nous permet une prise en charge intégrale sur place.
                        </p>
<button className="text-blue-600 font-semibold inline-flex items-center hover:gap-2 transition-all" onclick="navigateTo('services')">
                            Voir nos expertises <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>
</div>

<div className="page-section hidden fade-in" id="page-clinique">
<div className="bg-blue-950 py-20 text-white text-center">
<h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Le Plateau Technique</h1>
<p className="text-blue-200 max-w-2xl mx-auto text-lg">Une structure de 400m² conçue pour le bien-être et la sécurité.</p>
</div>
<section className="py-20 max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group cursor-default">
<div className="h-64 bg-slate-100 rounded-2xl mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-blue-950 mb-2">Salles de Consultation</h3>
<p className="text-slate-500">4 salles spacieuses et équipées pour l'examen clinique complet de vos animaux.</p>
</div>
<div className="group cursor-default">
<div className="h-64 bg-slate-100 rounded-2xl mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-blue-950 mb-2">Blocs Opératoires</h3>
<p className="text-slate-500">Deux blocs stériles avec anesthésie gazeuse et monitoring cardio-respiratoire.</p>
</div>
<div className="group cursor-default">
<div className="h-64 bg-slate-100 rounded-2xl mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=2680&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-blue-950 mb-2">Laboratoire d'Analyses</h3>
<p className="text-slate-500">Biochimie, hématologie et microscopie pour des résultats immédiats sur place.</p>
</div>
<div className="group cursor-default">
<div className="h-64 bg-slate-100 rounded-2xl mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-blue-950 mb-2">Imagerie Médicale</h3>
<p className="text-slate-500">Radiographie numérique et échographie haute définition.</p>
</div>
<div className="group cursor-default">
<div className="h-64 bg-slate-100 rounded-2xl mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-blue-950 mb-2">Hospitalisation</h3>
<p className="text-slate-500">Chenil et chatterie séparés pour réduire le stress, avec surveillance continue.</p>
</div>
</div>
</section>
</div>

<div className="page-section hidden fade-in" id="page-services">
<div className="bg-sky-50 py-20">
<div className="max-w-7xl mx-auto px-6 text-center">
<h1 className="text-4xl md:text-5xl font-bold text-blue-950 tracking-tight mb-4">Nos Services Vétérinaires</h1>
<p className="text-slate-500 max-w-2xl mx-auto text-lg">Une offre de soins complète pour accompagner la santé de votre animal à chaque étape de sa vie.</p>
</div>
</div>
<section className="py-20 max-w-7xl mx-auto px-6">
<div className="space-y-12">

<div className="flex flex-col md:flex-row gap-8 border-b border-slate-100 pb-12">
<div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
<i className="w-8 h-8" data-lucide="stethoscope"></i>
</div>
<div>
<h3 className="text-2xl font-bold text-blue-950 mb-3">Médecine Générale &amp; Préventive</h3>
<p className="text-slate-500 leading-relaxed mb-4">Consultations vaccinales, identification, bilans de santé annuels. Nous mettons l'accent sur la prévention pour assurer une longue vie à votre compagnon.</p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-medium text-slate-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-sky-500" data-lucide="check"></i>Vaccinations</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-sky-500" data-lucide="check"></i>Nutrition</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-sky-500" data-lucide="check"></i>Gériatrie</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8 border-b border-slate-100 pb-12">
<div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
<i className="w-8 h-8" data-lucide="scalpel"></i>
</div>
<div>
<h3 className="text-2xl font-bold text-blue-950 mb-3">Chirurgie</h3>
<p className="text-slate-500 leading-relaxed mb-4">Notre équipe réalise les chirurgies de convenance (stérilisation) ainsi que les chirurgies des tissus mous et orthopédiques complexes.</p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-medium text-slate-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-sky-500" data-lucide="check"></i>Stérilisation</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-sky-500" data-lucide="check"></i>Chirurgie abdominale</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-sky-500" data-lucide="check"></i>Orthopédie</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8">
<div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
<i className="w-8 h-8" data-lucide="heart-pulse"></i>
</div>
<div>
<h3 className="text-2xl font-bold text-blue-950 mb-3">Urgences</h3>
<p className="text-slate-500 leading-relaxed mb-4">Nous assurons la continuité des soins et les urgences vitales pendant nos heures d'ouverture. Pour la nuit et le week-end, une régulation est assurée.</p>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden fade-in" id="page-equipe">
<div className="bg-white py-20">
<div className="max-w-7xl mx-auto px-6 text-center mb-16">
<h1 className="text-4xl md:text-5xl font-bold text-blue-950 tracking-tight mb-4">L'Équipe Médicale</h1>
<p className="text-slate-500 max-w-2xl mx-auto text-lg">Des vétérinaires et ASV passionnés, formés en continu aux dernières techniques.</p>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

<div className="bg-sky-50 rounded-2xl p-6 transition-all hover:shadow-xl hover:shadow-blue-900/5">
<div className="aspect-square rounded-xl overflow-hidden mb-6 bg-slate-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-blue-950">Dr. Sarah Martin</h3>
<span className="text-sky-600 font-medium text-sm mb-4 block">Chirurgie &amp; Orthopédie</span>
<p className="text-slate-500 text-sm">Diplômée de l'ENVT, le Dr Martin est spécialisée en chirurgie complexe et assure le suivi orthopédique.</p>
</div>

<div className="bg-sky-50 rounded-2xl p-6 transition-all hover:shadow-xl hover:shadow-blue-900/5">
<div className="aspect-square rounded-xl overflow-hidden mb-6 bg-slate-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-blue-950">Dr. Thomas Dubois</h3>
<span className="text-sky-600 font-medium text-sm mb-4 block">Médecine Interne</span>
<p className="text-slate-500 text-sm">Passionné par la médecine féline et l'endocrinologie, il gère les cas médicaux complexes.</p>
</div>

<div className="bg-sky-50 rounded-2xl p-6 transition-all hover:shadow-xl hover:shadow-blue-900/5">
<div className="aspect-square rounded-xl overflow-hidden mb-6 bg-slate-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-blue-950">Dr. Julie Peeters</h3>
<span className="text-sky-600 font-medium text-sm mb-4 block">NAC &amp; Comportement</span>
<p className="text-slate-500 text-sm">L'experte des Nouveaux Animaux de Compagnie (rongeurs, lapins) de la clinique.</p>
</div>
</div>
</div>
</div>

<div className="page-section hidden fade-in" id="page-contact">
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h1 className="text-4xl font-bold text-blue-950 mb-6 tracking-tight">Prendre Rendez-vous</h1>
<p className="text-slate-500 text-lg mb-10">Pour une consultation ou une urgence, contactez-nous ou remplissez le formulaire.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<div>
<h3 className="font-bold text-blue-950 text-lg">Nous trouver</h3>
<p className="text-slate-500">123 Avenue de l'Occitanie<br/>34000 Montpellier</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
<i className="w-6 h-6" data-lucide="phone"></i>
</div>
<div>
<h3 className="font-bold text-blue-950 text-lg">Téléphone</h3>
<p className="text-slate-500 font-medium text-lg">04 67 00 00 00</p>
<p className="text-xs text-slate-400 mt-1">Du Lundi au Samedi, 8h - 20h</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
<i className="w-6 h-6" data-lucide="mail"></i>
</div>
<div>
<h3 className="font-bold text-blue-950 text-lg">Email</h3>
<p className="text-slate-500">contact@vetopole.fr</p>
</div>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-blue-900/5">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-bold text-slate-500 uppercase">Prénom</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 transition-colors text-slate-700 font-medium placeholder:text-slate-400" placeholder="Jean" type="text"/>
</div>
</div></form></div></div></div></div></main>
    </>
  );
}
