import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Accordion Logic for FAQ
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('iconify-icon');
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
                button.classList.add('bg-slate-50');
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
                button.classList.remove('bg-slate-50');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-slate-900 uppercase" href="#">
                Dtb Électricité
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-[#0000ff] transition-colors" href="#services">Services</a>
<a className="hover:text-[#0000ff] transition-colors" href="#about">Entreprise</a>
<a className="hover:text-[#0000ff] transition-colors" href="#blog">Blog</a>
<a className="hover:text-[#0000ff] transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-white bg-[#0000ff] rounded-lg hover:bg-blue-700 transition-all focus:ring-4 focus:ring-blue-100" href="#contact">
                    Nous contacter
                </a>
<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="pt-28 pb-16 px-4 md:px-6">
<div className="max-w-7xl mx-auto">
<div className="relative w-full rounded-[2rem] overflow-hidden min-h-[600px] flex items-center justify-center text-center">

<div className="absolute inset-0 z-0">
<img alt="Hero Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1660330589693-99889d60181e?w=2560&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
</div>

<div className="relative z-10 max-w-3xl px-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-xs font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-[#0000ff]"></span>
                        Expertise certifiée
                    </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6 leading-tight">
                        Dtb Électricité bienvenue
                    </h1>
<p className="text-lg text-slate-200 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
                        Votre partenaire de confiance pour les installations électriques modernes, de la pompe à chaleur aux bornes de recharge IRVE.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-white bg-[#0000ff] rounded-lg hover:bg-blue-600 transition-all" href="#contact">
                            Demander un devis
                        </a>
<a className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-white bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all" href="#services">
                            Découvrir nos services
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Pourquoi nous choisir ?</h2>
<p className="text-slate-500 max-w-xl">Une approche moderne de l'électricité, alliant technologie de pointe et savoir-faire artisanal.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all group">
<div className="w-12 h-12 rounded-lg bg-white border border-slate-100 flex items-center justify-center mb-6 text-[#0000ff] shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Certification RGE</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Des installations reconnues garantes de l'environnement pour vos travaux d'économie d'énergie.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all group">
<div className="w-12 h-12 rounded-lg bg-white border border-slate-100 flex items-center justify-center mb-6 text-[#0000ff] shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Intervention Rapide</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Une équipe réactive pour vos urgences et un respect strict des délais annoncés.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all group">
<div className="w-12 h-12 rounded-lg bg-white border border-slate-100 flex items-center justify-center mb-6 text-[#0000ff] shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Garantie Décennale</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Tous nos travaux sont couverts pour assurer votre tranquillité d'esprit sur le long terme.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
                        "L'installation de notre borne de recharge a été réalisée avec un professionnalisme exemplaire. Câblage propre et explications claires."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Thomas Dufour</h4>
<p className="text-xs text-slate-400">Directeur, TechAlpha</p>
</div>
</div>
</div>

<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
                        "Intervention rapide pour notre panne générale. Dtb Électricité a su diagnostiquer et réparer le problème en un temps record."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Sophie Martin</h4>
<p className="text-xs text-slate-400">Gérante, Boutique Élégance</p>
</div>
</div>
</div>

<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
                        "La pompe à chaleur installée fonctionne à merveille. Des économies d'énergie réelles dès le premier mois. Merci pour les conseils."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Marc Léger</h4>
<p className="text-xs text-slate-400">Propriétaire Résidentiel</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-full opacity-50 blur-3xl"></div>
<img alt="Electrician at work" className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1581972327480-e3764d31e5e6?w=1600&amp;q=80"/>
</div>
<div className="w-full lg:w-1/2">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">L'excellence au service de votre confort</h2>
<p className="text-slate-500 mb-6 leading-relaxed">
                        Chez <span className="text-slate-900 font-medium">Dtb Électricité</span>, nous ne nous contentons pas de tirer des câbles. Nous concevons des écosystèmes énergétiques durables pour les particuliers et les professionnels.
                    </p>
<p className="text-slate-500 mb-8 leading-relaxed">
                        Forts de plusieurs années d'expérience, nous avons développé une expertise pointue dans les énergies renouvelables et la mobilité électrique. Notre mission est de sécuriser vos installations tout en optimisant votre consommation.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-[#0000ff]" icon="solar:check-circle-linear"></iconify-icon>
                            Devis gratuit et détaillé
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-[#0000ff]" icon="solar:check-circle-linear"></iconify-icon>
                            Matériel de grandes marques (Schneider, Legrand)
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-[#0000ff]" icon="solar:check-circle-linear"></iconify-icon>
                            Suivi post-chantier rigoureux
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Nos domaines d'intervention</h2>
<p className="text-slate-500">Des solutions complètes pour répondre à tous vos besoins énergétiques.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow duration-300">
<div className="h-48 overflow-hidden">
<img alt="Pompe à chaleur" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1635335874521-7987db781153?w=800&amp;q=80"/>
</div>
<div className="p-8">
<div className="w-10 h-10 rounded-full bg-blue-50 text-[#0000ff] flex items-center justify-center mb-4">
<iconify-icon icon="solar:temperature-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Pompe à chaleur</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                            Installation et mise en service de systèmes de chauffage performants pour réduire votre facture énergétique tout en améliorant votre confort.
                        </p>
<a className="text-sm font-medium text-[#0000ff] flex items-center gap-1 hover:gap-2 transition-all" href="#contact">
                            En savoir plus <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow duration-300">
<div className="h-48 overflow-hidden">
<img alt="Entretien électrique" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1581972327480-e3764d31e5e6?w=800&amp;q=80" style={{}}/>
</div>
<div className="p-8">
<div className="w-10 h-10 rounded-full bg-blue-50 text-[#0000ff] flex items-center justify-center mb-4">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Entretien &amp; Dépannage</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                            Maintenance préventive de vos tableaux, mise aux normes électriques et intervention rapide en cas de panne de courant.
                        </p>
<a className="text-sm font-medium text-[#0000ff] flex items-center gap-1 hover:gap-2 transition-all" href="#contact">
                            En savoir plus <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow duration-300">
<div className="h-48 overflow-hidden">
<img alt="Borne IRVE" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&amp;w=2072&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="p-8">
<div className="w-10 h-10 rounded-full bg-blue-50 text-[#0000ff] flex items-center justify-center mb-4">
<iconify-icon icon="solar:electric-refueling-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Borne IRVE</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                            Solution de recharge pour véhicules électriques à domicile ou en entreprise. Installation certifiée pour une sécurité optimale.
                        </p>
<a className="text-sm font-medium text-[#0000ff] flex items-center gap-1 hover:gap-2 transition-all" href="#contact">
                            En savoir plus <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-slate-100 border-b pt-24 pb-24">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-[#0000ff] mb-6 text-4xl opacity-20" icon="solar:quote-up-square-linear"></iconify-icon>
<blockquote className="text-2xl md:text-3xl font-medium text-slate-900 leading-snug tracking-tight mb-8">
                "Dtb Électricité a transformé notre infrastructure énergétique. Leur expertise sur les bornes IRVE nous a permis d'électrifier toute notre flotte de véhicules en un temps record."
            </blockquote>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden">
<img alt="CEO" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150" style={{}}/>
</div>
<div className="text-left">
<div className="text-sm font-semibold text-slate-900">Alexandre Petit</div>
<div className="text-xs text-slate-500">Gestionnaire de flotte, Transport Logistique</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12 text-center">Questions Fréquentes</h2>
<div className="space-y-4">

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
<button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-slate-900">Quels sont les délais pour obtenir un devis ?</span>
<iconify-icon className="transform transition-transform duration-200 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden px-6 pb-4 text-sm text-slate-500 leading-relaxed">
                        Nous nous engageons à fournir un devis détaillé sous 48 heures après la visite technique ou la réception de vos éléments.
                    </div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
<button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-slate-900">Êtes-vous certifié pour l'installation de bornes de recharge ?</span>
<iconify-icon className="transform transition-transform duration-200 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden px-6 pb-4 text-sm text-slate-500 leading-relaxed">
                        Oui, nous possédons la qualification IRVE (Infrastructure de Recharge de Véhicule Électrique), obligatoire pour les installations supérieures à 3,7kW.
                    </div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
<button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-slate-900">Proposez-vous des contrats de maintenance ?</span>
<iconify-icon className="transform transition-transform duration-200 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden px-6 pb-4 text-sm text-slate-500 leading-relaxed">
                        Absolument. Que ce soit pour une pompe à chaleur ou une installation électrique générale, nous proposons des contrats annuels d'entretien.
                    </div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
<button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-slate-900">Intervenez-vous pour les particuliers et les professionnels ?</span>
<iconify-icon className="transform transition-transform duration-200 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden px-6 pb-4 text-sm text-slate-500 leading-relaxed">
                        Oui, nous servons aussi bien les particuliers (rénovation, neuf) que les locaux commerciaux et industriels.
                    </div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
<button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-slate-900">Quelle zone géographique couvrez-vous ?</span>
<iconify-icon className="transform transition-transform duration-200 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden px-6 pb-4 text-sm text-slate-500 leading-relaxed">
                        Nous intervenons principalement dans un rayon de 50km autour de notre siège. Contactez-nous pour vérifier votre éligibilité.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="blog">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Actualités &amp; Conseils</h2>
<p className="text-slate-500">Restez informé sur les dernières normes et technologies.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-[#0000ff] hover:gap-2 transition-all" href="#">
                    Voir tous les articles <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="rounded-xl overflow-hidden mb-4 h-56">
<img alt="Blog 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&amp;w=1974&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="text-xs text-[#0000ff] font-medium mb-2">Économie d'énergie</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight group-hover:text-[#0000ff] transition-colors">Comment optimiser sa pompe à chaleur en hiver ?</h3>
<p className="text-sm text-slate-500 line-clamp-2">Des astuces simples pour réduire votre consommation sans sacrifier votre confort thermique durant les mois froids.</p>
</div>

<div className="group cursor-pointer">
<div className="rounded-xl overflow-hidden mb-4 h-56">
<img alt="Blog 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-xs text-[#0000ff] font-medium mb-2">Mobilité</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight group-hover:text-[#0000ff] transition-colors">Choisir sa borne de recharge : le guide complet</h3>
<p className="text-sm text-slate-500 line-clamp-2">Puissance, connectivité, coût : tout ce qu'il faut savoir avant d'installer une borne IRVE à domicile.</p>
</div>

<div className="group cursor-pointer">
<div className="rounded-xl overflow-hidden mb-4 h-56">
<img alt="Blog 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-xs text-[#0000ff] font-medium mb-2">Sécurité</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight group-hover:text-[#0000ff] transition-colors">Les signes d'une installation électrique vétuste</h3>
<p className="text-sm text-slate-500 line-clamp-2">Reconnaître les dangers potentiels de votre tableau électrique pour anticiper les rénovations nécessaires.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Parlons de votre projet</h2>
<p className="text-slate-500 mb-8">Remplissez le formulaire ci-dessous, nous vous répondrons dans les plus brefs délais.</p>
<form action="#" className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700" htmlFor="firstname">Prénom</label>
<input className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-[#0000ff] focus:ring-1 focus:ring-[#0000ff] outline-none transition-all text-sm placeholder:text-slate-400" id="firstname" placeholder="Jean" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700" htmlFor="lastname">Nom</label>
<input className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-[#0000ff] focus:ring-1 focus:ring-[#0000ff] outline-none transition-all text-sm placeholder:text-slate-400" id="lastname" placeholder="Dupont" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-[#0000ff] focus:ring-1 focus:ring-[#0000ff] outline-none transition-all text-sm placeholder:text-slate-400" id="email" placeholder="jean.dupont@email.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700" htmlFor="service">Service concerné</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-[#0000ff] focus:ring-1 focus:ring-[#0000ff] outline-none transition-all text-sm text-slate-600 appearance-none" id="service">
<option>Pompe à chaleur</option>
<option>Installation borne IRVE</option>
<option>Entretien / Dépannage</option>
<option>Autre</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-[#0000ff] focus:ring-1 focus:ring-[#0000ff] outline-none transition-all text-sm placeholder:text-slate-400 resize-none" id="message" placeholder="Décrivez votre besoin..." rows="4"></textarea>
</div>
<button className="w-full py-3 px-6 bg-[#0000ff] hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2" type="button">
                            Envoyer le message
                            <iconify-icon className="-rotate-45" icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>

<div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-sm border border-slate-200 relative">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.292292615509614!3d48.858370079287466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647526786638!5m2!1sfr!2sfr" style={{border: '0', filter: 'grayscale(1) contrast(1.2) opacity(0.8)'}} width="100%">
</iframe>
<div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 text-[#0000ff] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Dtb Électricité</h4>
<p className="text-xs text-slate-500 mt-1">123 Avenue de l'Énergie<br/>75000 Paris, France</p>
<p className="text-xs text-[#0000ff] mt-2 font-medium">contact@dtb-elec.fr</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-slate-900 uppercase mb-4 block" href="#">
                        Dtb Électricité
                    </a>
<p className="text-xs text-slate-500 leading-relaxed mb-6">
                        Solutions électriques innovantes pour un avenir durable. Pompe à chaleur, entretien et bornes de recharge.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-[#0000ff] transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#0000ff] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#0000ff] transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-[#0000ff] transition-colors" href="#">Pompe à chaleur</a></li>
<li><a className="text-xs text-slate-500 hover:text-[#0000ff] transition-colors" href="#">Borne IRVE</a></li>
<li><a className="text-xs text-slate-500 hover:text-[#0000ff] transition-colors" href="#">Entretien</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Entreprise</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-[#0000ff] transition-colors" href="#">À propos</a></li>
<li><a className="text-xs text-slate-500 hover:text-[#0000ff] transition-colors" href="#">Nos réalisations</a></li>
<li><a className="text-xs text-slate-500 hover:text-[#0000ff] transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Légal</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-[#0000ff] transition-colors" href="#">Mentions légales</a></li>
<li><a className="text-xs text-slate-500 hover:text-[#0000ff] transition-colors" href="#">Politique de confidentialité</a></li>
<li><a className="text-xs text-slate-500 hover:text-[#0000ff] transition-colors" href="#">CGV</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 Dtb Électricité. Tous droits réservés.</p>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Disponible pour intervention
                </div>
</div>
</div>
</footer>


    </>
  );
}
