import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function switchPage(pageId) {
            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show selected section
            const activeSection = document.getElementById(pageId);
            if (activeSection) {
                activeSection.classList.add('active');
                window.scrollTo(0, 0);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300">
<div className="glass-panel mx-auto max-w-6xl md:mt-6 md:rounded-full px-6 py-3 flex justify-between items-center shadow-sm">
<button className="text-lg tracking-tighter font-bold text-neutral-900 cursor-pointer flex items-center gap-2" onclick="switchPage('home')">
<div className="w-2 h-2 rounded-full bg-[#0DFF00]"></div>
                LUMIÈRE
            </button>
<div className="hidden md:flex space-x-1 text-sm font-medium text-neutral-500">
<button className="px-4 py-2 rounded-full hover:bg-neutral-100 hover:text-black transition-all duration-200" onclick="switchPage('routes')">Nos Trajets</button>
<button className="px-4 py-2 rounded-full hover:bg-neutral-100 hover:text-black transition-all duration-200" onclick="switchPage('fleet')">Nos Véhicules</button>
<button className="px-4 py-2 rounded-full hover:bg-neutral-100 hover:text-black transition-all duration-200" onclick="switchPage('booking')">Réservation</button>
</div>
<button className="hidden md:inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-2 text-xs font-semibold hover:bg-neutral-800 transition-all duration-300 shadow-lg shadow-neutral-200 hover:shadow-[#0DFF00]/20 border border-transparent hover:border-[#0DFF00]/50" onclick="switchPage('booking')">
                Réserver
            </button>

<button className="md:hidden text-neutral-900">
<svg className="lucide lucide-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<main className="flex-grow pt-24">

<div className="page-section active" id="home">

<section className="relative w-full flex flex-col items-center justify-center pt-20 pb-20 mesh-gradient overflow-hidden">
<div className="z-10 text-center max-w-5xl mx-auto px-4 mb-12">
<h1 className="md:text-8xl fade-in leading-[0.9] text-6xl font-semibold text-neutral-900 tracking-tighter mb-6">
                        L'art du <br/> <span className="text-neutral-400">mouvement.</span>
</h1>
<div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 mb-6 fade-in shadow-sm" style={{animationDelay: '0.1s'}}>
<span className="relative flex h-2 w-2 mr-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0DFF00] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#0DFF00]"></span>
</span>
                        Disponible à Paris, Londres &amp; New York
                    </div>
<p className="text-lg md:text-xl text-neutral-500 font-normal tracking-tight mb-10 max-w-2xl mx-auto fade-in leading-relaxed" style={{animationDelay: '0.2s'}}>
                        Une expérience de transport premium où luxe et logistique se rencontrent. Pour ceux qui valorisent leur temps.
                    </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center fade-in" style={{animationDelay: '0.3s'}}>
<button className="group inline-flex h-12 items-center justify-center rounded-full bg-neutral-900 px-8 font-medium text-white transition-all duration-300 hover:bg-black hover:scale-105 shadow-xl shadow-neutral-200 hover:shadow-[#0DFF00]/20 border border-transparent hover:border-[#0DFF00]" onclick="switchPage('booking')">
<span className="mr-2">Réserver un chauffeur</span>
<svg className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex h-12 items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-50 transition-colors text-sm font-medium px-6 shadow-sm" onclick="switchPage('fleet')">
                            Découvrir la flotte
                        </button>
</div>
</div>

<div className="relative w-full max-w-7xl px-4 fade-in mt-8" style={{animationDelay: '0.4s'}}>
<div className="relative rounded-3xl overflow-hidden aspect-[16/7] shadow-2xl shadow-neutral-200 border border-neutral-100 group">
<img alt="Luxury Car Interior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
<p className="text-xs font-mono uppercase tracking-widest mb-1 opacity-80 text-[#0DFF00]">La Flotte</p>
<p className="text-2xl tracking-tight font-semibold">Mercedes-Benz Classe S</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-neutral-100">
<div className="max-w-6xl mx-auto px-4">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl tracking-tighter font-semibold text-neutral-900 mb-4">Nos Services Exclusifs</h2>
<div className="w-12 h-1 bg-[#0DFF00]"></div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-neutral-50 hover:bg-white border border-transparent hover:border-neutral-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white border border-neutral-100 flex items-center justify-center mb-6 group-hover:border-[#0DFF00] transition-colors">
<svg className="lucide lucide-plane" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Transferts Aéroport</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Suivi de vol en temps réel, accueil personnalisé avec pancarte et attente gratuite jusqu'à 60 minutes.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-50 hover:bg-white border border-transparent hover:border-neutral-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white border border-neutral-100 flex items-center justify-center mb-6 group-hover:border-[#0DFF00] transition-colors">
<svg className="lucide lucide-briefcase" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="6"></rect><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Affaires &amp; Roadshows</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Optimisez votre temps de travail. Véhicules équipés Wi-Fi, chauffeurs discrets et itinéraires optimisés.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-50 hover:bg-white border border-transparent hover:border-neutral-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white border border-neutral-100 flex items-center justify-center mb-6 group-hover:border-[#0DFF00] transition-colors">
<svg className="lucide lucide-star" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Événements VIP</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Gestion logistique complète pour Fashion Week, mariages et soirées privées. Coordination sur-mesure.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50">
<div className="max-w-6xl mx-auto px-4">
<div className="flex flex-col md:flex-row items-start justify-between mb-16 gap-8">
<div className="max-w-lg">
<h2 className="text-3xl md:text-4xl tracking-tighter font-semibold text-neutral-900 mb-4">Pourquoi choisir Lumière ?</h2>
<p className="text-neutral-500">Nous ne transportons pas seulement des passagers, nous élevons les standards du service.</p>
</div>
<div className="flex flex-col gap-6 md:w-1/2">

<div className="flex gap-4 items-start">
<div className="mt-1 min-w-[20px]">
<svg className="text-[#0DFF00] lucide lucide-check-circle-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-1">Chauffeurs d'Excellence</h4>
<p className="text-sm text-neutral-500">Sélectionnés rigoureusement, formés à la conduite de sécurité et au protocole de luxe.</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="mt-1 min-w-[20px]">
<svg className="text-[#0DFF00] lucide lucide-check-circle-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="font-semibold text-neutral-900 mb-1">Flotte Dernière Génération</h4>
<p className="text-sm text-neutral-500">Véhicules de moins de 2 ans, entretenus quotidiennement, vitres teintées.</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="mt-1 min-w-[20px]">
<svg className="text-[#0DFF00] lucide lucide-check-circle-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="font-semibold text-neutral-900 mb-1">Discrétion Absolue</h4>
<p className="text-sm text-neutral-500">Votre vie privée est notre priorité absolue. Accord de confidentialité sur demande.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-6xl mx-auto px-4">
<div className="text-center mb-16">
<span className="text-[#0DFF00] font-mono text-xs uppercase tracking-widest font-bold mb-2 block">Simple &amp; Rapide</span>
<h2 className="text-3xl md:text-4xl tracking-tighter font-semibold text-neutral-900">Comment réserver</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-neutral-100 -z-10"></div>

<div className="text-center">
<div className="w-24 h-24 mx-auto bg-white rounded-full border border-neutral-100 shadow-sm flex items-center justify-center mb-6 relative">
<span className="text-4xl font-bold text-neutral-200">1</span>
<div className="absolute bottom-2 right-6 w-3 h-3 bg-[#0DFF00] rounded-full border-2 border-white"></div>
</div>
<h3 className="font-semibold text-lg mb-2">Réservation en ligne</h3>
<p className="text-neutral-500 text-sm max-w-xs mx-auto">Sélectionnez votre trajet et votre véhicule directement sur notre plateforme.</p>
</div>

<div className="text-center">
<div className="w-24 h-24 mx-auto bg-white rounded-full border border-neutral-100 shadow-sm flex items-center justify-center mb-6 relative">
<span className="text-4xl font-bold text-neutral-200">2</span>
<div className="absolute bottom-2 right-6 w-3 h-3 bg-[#0DFF00] rounded-full border-2 border-white"></div>
</div>
<h3 className="font-semibold text-lg mb-2">Confirmation détaillée</h3>
<p className="text-neutral-500 text-sm max-w-xs mx-auto">Recevez instantanément un récapitulatif complet avec toutes les informations de votre course.</p>
</div>

<div className="text-center">
<div className="w-24 h-24 mx-auto bg-white rounded-full border border-neutral-100 shadow-sm flex items-center justify-center mb-6 relative">
<span className="text-4xl font-bold text-neutral-200">3</span>
<div className="absolute bottom-2 right-6 w-3 h-3 bg-[#0DFF00] rounded-full border-2 border-white"></div>
</div>
<h3 className="font-semibold text-lg mb-2">Paiement sécurisé</h3>
<p className="text-neutral-500 text-sm max-w-xs mx-auto">Effectuez votre règlement en toute sécurité pour valider définitivement votre réservation.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-200">
<div className="max-w-6xl mx-auto px-4">
<h2 className="text-3xl md:text-4xl tracking-tighter font-semibold text-neutral-900 mb-12 text-center">La confiance de nos clients</h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm">
<div className="flex gap-1 mb-4 text-[#0DFF00]">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-5.82 3.25L7.38 14.14 2.38 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-5.82 3.25L7.38 14.14 2.38 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-5.82 3.25L7.38 14.14 2.38 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-5.82 3.25L7.38 14.14 2.38 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-5.82 3.25L7.38 14.14 2.38 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-neutral-600 mb-6 italic">"Service impeccable. Chauffeur ponctuel et très professionnel. La Classe S était dans un état irréprochable. C'est devenu mon unique solution pour mes déplacements à Paris."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-600">JP</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Jean-Pierre Dubois</p>
<p className="text-xs text-neutral-500">CEO, Tech Solutions</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm">
<div className="flex gap-1 mb-4 text-[#0DFF00]">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-5.82 3.25L7.38 14.14 2.38 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-5.82 3.25L7.38 14.14 2.38 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-5.82 3.25L7.38 14.14 2.38 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-5.82 3.25L7.38 14.14 2.38 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-5.82 3.25L7.38 14.14 2.38 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-neutral-600 mb-6 italic">"J'ai utilisé Lumière pour mon mariage. Tout était parfait, de la coordination avec les invités à la propreté des Vans. Une tranquillité d'esprit absolue."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-600">S</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Sophie Marceau</p>
<p className="text-xs text-neutral-500">Particulier</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative overflow-hidden">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0DFF00]/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-8">Prêt à voyager ?</h2>
<p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">Réservez votre chauffeur en moins de 2 minutes et vivez l'expérience Lumière dès aujourd'hui.</p>
<button className="inline-flex h-14 items-center justify-center rounded-full bg-[#0DFF00] px-10 text-lg font-bold text-black transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(13,255,0,0.4)]" onclick="switchPage('booking')">
                        Réserver maintenant
                        <svg className="ml-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</section>
</div>

<div className="page-section" id="routes">
<section className="py-20 bg-white">
<div className="max-w-4xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl tracking-tighter text-neutral-900 mb-6 font-semibold">Tarifs &amp; Trajets</h2>
<p className="text-neutral-500 text-lg">Transparence totale. Aucun frais caché.</p>
</div>

<div className="flex justify-center mb-12">
<div className="inline-flex bg-neutral-100 p-1 rounded-full">
<button className="px-6 py-2 rounded-full bg-white text-neutral-900 shadow-sm text-sm font-medium transition-all">Transferts</button>
<button className="px-6 py-2 rounded-full text-neutral-500 hover:text-neutral-900 text-sm font-medium transition-all">Mise à disposition</button>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6">

<div className="group p-6 rounded-2xl border border-neutral-200 hover:border-[#0DFF00]/50 hover:shadow-lg transition-all bg-white">
<div className="flex justify-between items-start mb-4">
<div>
<div className="flex items-center gap-2 text-neutral-500 text-xs font-medium uppercase tracking-wider mb-1">
<svg className="lucide lucide-plane" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
                                        Aéroport
                                    </div>
<h3 className="text-xl font-semibold text-neutral-900">Paris Centre <span className="text-neutral-300 mx-2">↔</span> CDG / Orly</h3>
</div>
<span className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold border border-[#0DFF00]/50">dès 90€</span>
</div>
<ul className="space-y-3 mt-6">
<li className="flex items-center text-sm text-neutral-600">
<svg className="w-4 h-4 mr-3 text-[#0DFF00]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Attente gratuite (60 min)
                                </li>
<li className="flex items-center text-sm text-neutral-600">
<svg className="w-4 h-4 mr-3 text-[#0DFF00]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Suivi de vol en temps réel
                                </li>
<li className="flex items-center text-sm text-neutral-600">
<svg className="w-4 h-4 mr-3 text-[#0DFF00]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Accueil pancarte
                                </li>
</ul>
<button className="w-full mt-6 py-3 rounded-xl border border-neutral-200 text-sm font-medium hover:bg-neutral-50 hover:border-black transition-all" onclick="switchPage('booking')">Réserver ce trajet</button>
</div>

<div className="group p-6 rounded-2xl border border-neutral-200 hover:border-[#0DFF00]/50 hover:shadow-lg transition-all bg-white">
<div className="flex justify-between items-start mb-4">
<div>
<div className="flex items-center gap-2 text-neutral-500 text-xs font-medium uppercase tracking-wider mb-1">
<svg className="lucide lucide-clock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                        Horaire
                                    </div>
<h3 className="text-xl font-semibold text-neutral-900">Mise à Disposition</h3>
</div>
<span className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold border border-[#0DFF00]/50">dès 80€/h</span>
</div>
<ul className="space-y-3 mt-6">
<li className="flex items-center text-sm text-neutral-600">
<svg className="w-4 h-4 mr-3 text-[#0DFF00]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Minimum 3 heures
                                </li>
<li className="flex items-center text-sm text-neutral-600">
<svg className="w-4 h-4 mr-3 text-[#0DFF00]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Kilométrage inclus (20km/h)
                                </li>
<li className="flex items-center text-sm text-neutral-600">
<svg className="w-4 h-4 mr-3 text-[#0DFF00]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Flexibilité totale
                                </li>
</ul>
<button className="w-full mt-6 py-3 rounded-xl border border-neutral-200 text-sm font-medium hover:bg-neutral-50 hover:border-black transition-all" onclick="switchPage('booking')">Réserver à l'heure</button>
</div>

<div className="group p-6 rounded-2xl border border-neutral-200 hover:border-[#0DFF00]/50 hover:shadow-lg transition-all bg-white">
<div className="flex justify-between items-start mb-4">
<div>
<div className="flex items-center gap-2 text-neutral-500 text-xs font-medium uppercase tracking-wider mb-1">
<svg className="lucide lucide-map-pin" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        Longue Distance
                                    </div>
<h3 className="text-xl font-semibold text-neutral-900">Paris <span className="text-neutral-300 mx-2">↔</span> Deauville</h3>
</div>
<span className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold border border-[#0DFF00]/50">dès 450€</span>
</div>
<p className="text-sm text-neutral-500 mt-2 mb-6">Voyagez confortablement vers la Normandie. Service porte-à-porte sans stress.</p>
<button className="w-full py-3 rounded-xl border border-neutral-200 text-sm font-medium hover:bg-neutral-50 hover:border-black transition-all" onclick="switchPage('booking')">Réserver</button>
</div>

<div className="group p-6 rounded-2xl border border-neutral-200 hover:border-[#0DFF00]/50 hover:shadow-lg transition-all bg-white">
<div className="flex justify-between items-start mb-4">
<div>
<div className="flex items-center gap-2 text-neutral-500 text-xs font-medium uppercase tracking-wider mb-1">
<svg className="lucide lucide-sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"></path></svg>
                                        Événement
                                    </div>
<h3 className="text-xl font-semibold text-neutral-900">Mariage &amp; Soirées</h3>
</div>
<span className="bg-neutral-900 text-white px-3 py-1 rounded-full text-sm font-bold">Sur devis</span>
</div>
<p className="text-sm text-neutral-500 mt-2 mb-6">Coordination logistique complète pour vos invités. Flotte uniforme et chauffeurs en tenue de cérémonie.</p>
<button className="w-full py-3 rounded-xl border border-neutral-200 text-sm font-medium hover:bg-neutral-50 hover:border-black transition-all" onclick="switchPage('booking')">Demander un devis</button>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="fleet">
<section className="py-20 bg-neutral-50">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl tracking-tighter text-neutral-900 mb-6 font-semibold">Notre Flotte</h2>
<p className="text-neutral-500 text-lg">Excellence automobile. Confort absolu.</p>
</div>
<div className="space-y-12">

<div className="bg-white rounded-3xl overflow-hidden border border-neutral-200 flex flex-col md:flex-row shadow-sm hover:shadow-xl transition-shadow duration-300">
<div className="md:w-1/2 relative min-h-[300px]">
<img alt="Mercedes S Class" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
<div className="mb-2 text-xs font-bold text-[#0DFF00] uppercase tracking-widest">First Class</div>
<h3 className="text-3xl font-semibold text-neutral-900 mb-4">Mercedes-Benz Classe S</h3>
<p className="text-neutral-600 mb-8 leading-relaxed">Le summum du luxe. Idéal pour les VIP, les dirigeants et les occasions spéciales. Intérieur cuir, sièges massants et silence absolu.</p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
<svg className="lucide lucide-users" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<span className="text-sm font-medium">3 Passagers</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
<svg className="lucide lucide-briefcase" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="6"></rect><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<span className="text-sm font-medium">3 Valises</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
<svg className="lucide lucide-wifi" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
<span className="text-sm font-medium">Wi-Fi Gratuit</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
<svg className="lucide lucide-glass-water" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"></path><path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"></path></svg>
</div>
<span className="text-sm font-medium">Eau minérale</span>
</div>
</div>
<button className="w-fit bg-neutral-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors" onclick="switchPage('booking')">Réserver First Class</button>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden border border-neutral-200 flex flex-col md:flex-row-reverse shadow-sm hover:shadow-xl transition-shadow duration-300">
<div className="md:w-1/2 relative min-h-[300px]">
<img alt="Mercedes E Class" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
<div className="mb-2 text-xs font-bold text-neutral-400 uppercase tracking-widest">Business Class</div>
<h3 className="text-3xl font-semibold text-neutral-900 mb-4">Mercedes-Benz Classe E</h3>
<p className="text-neutral-600 mb-8 leading-relaxed">L'équilibre parfait entre élégance et efficacité. La référence pour les déplacements professionnels et les transferts aéroport.</p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
<svg className="lucide lucide-users" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<span className="text-sm font-medium">3 Passagers</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
<svg className="lucide lucide-briefcase" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="6"></rect><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<span className="text-sm font-medium">2 Valises</span>
</div>
</div>
<button className="w-fit bg-neutral-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors" onclick="switchPage('booking')">Réserver Business</button>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden border border-neutral-200 flex flex-col md:flex-row shadow-sm hover:shadow-xl transition-shadow duration-300">
<div className="md:w-1/2 relative min-h-[300px]">
<img alt="Mercedes V Class" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
<div className="mb-2 text-xs font-bold text-neutral-400 uppercase tracking-widest">Van Class</div>
<h3 className="text-3xl font-semibold text-neutral-900 mb-4">Mercedes-Benz Classe V</h3>
<p className="text-neutral-600 mb-8 leading-relaxed">Espace et luxe pour les groupes. Configuration salon pour vos réunions en mouvement ou vos voyages en famille.</p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
<svg className="lucide lucide-users" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<span className="text-sm font-medium">7 Passagers</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
<svg className="lucide lucide-briefcase" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="6"></rect><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<span className="text-sm font-medium">7 Valises</span>
</div>
</div>
<button className="w-fit bg-neutral-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors" onclick="switchPage('booking')">Réserver Van</button>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="booking">
<section className="min-h-screen py-20 bg-neutral-900 flex items-center justify-center relative overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0DFF00]/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 w-full max-w-2xl px-4">
<div className="text-center mb-10">
<h2 className="text-4xl text-white font-semibold tracking-tight mb-2">Réservez votre chauffeur</h2>
<p className="text-neutral-400">Confirmation immédiate. Paiement sécurisé.</p>
</div>
<div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
<form className="space-y-6">

<div className="grid grid-cols-2 gap-4">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="trip-type" type="radio"/>
<div className="rounded-xl border border-neutral-200 p-4 text-center peer-checked:border-black peer-checked:bg-neutral-50 transition-all">
<div className="text-sm font-bold text-neutral-900">Aller Simple</div>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="trip-type" type="radio"/>
<div className="rounded-xl border border-neutral-200 p-4 text-center peer-checked:border-black peer-checked:bg-neutral-50 transition-all">
<div className="text-sm font-bold text-neutral-900">À l'heure</div>
</div>
</label>
</div>

<div className="space-y-4">
<div className="relative">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<svg className="lucide lucide-map-pin text-neutral-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="Lieu de prise en charge" type="text"/>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<svg className="lucide lucide-navigation text-neutral-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
</div>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="Destination" type="text"/>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="relative">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<svg className="lucide lucide-calendar text-neutral-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
</div>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" type="date"/>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<svg className="lucide lucide-clock text-neutral-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" type="time"/>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-semibold uppercase text-neutral-500">Véhicule souhaité</label>
<div className="grid grid-cols-3 gap-3">
<div className="border border-neutral-200 rounded-xl p-3 text-center hover:border-black cursor-pointer transition-all">
<div className="text-xs font-bold mb-1">Business</div>
<div className="text-[10px] text-neutral-500">Classe E</div>
</div>
<div className="border border-black bg-neutral-50 rounded-xl p-3 text-center cursor-pointer transition-all relative">
<div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] px-2 py-0.5 rounded-full border border-[#0DFF00]">Recommandé</div>
<div className="text-xs font-bold mb-1">First</div>
<div className="text-[10px] text-neutral-500">Classe S</div>
</div>
<div className="border border-neutral-200 rounded-xl p-3 text-center hover:border-black cursor-pointer transition-all">
<div className="text-xs font-bold mb-1">Van</div>
<div className="text-[10px] text-neutral-500">Classe V</div>
</div>
</div>
</div>
<button className="w-full bg-black text-white font-bold rounded-xl py-4 hover:bg-neutral-800 transition-all duration-300 shadow-lg mt-4 border border-transparent hover:border-[#0DFF00]" type="button">
                                Estimer le tarif
                            </button>
</form>
</div>
<p className="text-center text-neutral-500 text-xs mt-6">Ou contactez notre conciergerie 24/7 au <span className="text-white">+33 1 00 00 00 00</span></p>
</div>
</section>
</div>
</main>

<footer className="bg-white border-t border-neutral-200 pt-16 pb-8 px-4 mt-auto">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-xl tracking-tighter font-bold text-neutral-900 mb-4 flex items-center gap-2" href="#" onclick="switchPage('home')">
<div className="w-2 h-2 rounded-full bg-[#0DFF00]"></div>
                        LUMIÈRE
                    </a>
<p className="text-neutral-500 text-sm font-normal max-w-xs">L'excellence du transport privé. Discrétion, confort et ponctualité garantis.</p>
</div>
<div>
<h4 className="text-neutral-900 text-xs font-bold uppercase tracking-wider mb-6">Services</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-medium">
<li><button className="hover:text-black transition-colors" onclick="switchPage('routes')">Transferts Aéroport</button></li>
<li><button className="hover:text-black transition-colors" onclick="switchPage('routes')">Mise à disposition</button></li>
<li><button className="hover:text-black transition-colors" onclick="switchPage('routes')">Événements</button></li>
</ul>
</div>
<div>
<h4 className="text-neutral-900 text-xs font-bold uppercase tracking-wider mb-6">Légal</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-medium">
<li><a className="hover:text-black transition-colors" href="#">CGV</a></li>
<li><a className="hover:text-black transition-colors" href="#">Mentions Légales</a></li>
<li><a className="hover:text-black transition-colors" href="#">Confidentialité</a></li>
</ul>
</div>
<div>
<h4 className="text-neutral-900 text-xs font-bold uppercase tracking-wider mb-6">Social</h4>
<div className="flex space-x-4">
<a className="text-neutral-400 hover:text-black transition-colors" href="#"><svg className="lucide lucide-instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-neutral-400 hover:text-black transition-colors" href="#"><svg className="lucide lucide-linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 font-medium">
<p>© 2024 Lumière Services. Tous droits réservés.</p>
<div className="flex items-center mt-4 md:mt-0">
<span className="mr-2">Designed with</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#0DFF00]"></div>
</div>
</div>
</div>
</footer>


    </>
  );
}
