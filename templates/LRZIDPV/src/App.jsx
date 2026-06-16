import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        // Initialize Lucide icons
        lucide.createIcons();
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);
        
        // Observe all animated elements
        document.querySelectorAll('[class*="animate-"]').forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
<div className="absolute top-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex items-center space-x-4 animate-slideInLeft">
<div className="relative">
<div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center shadow-xl animate-glow">
<i className="w-7 h-7 text-white" data-lucide="zap"></i>
</div>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
</div>
<div>
<h1 className="text-2xl font-black text-gradient tracking-tight">Lagentia</h1>
<p className="text-xs text-gray-500 font-medium">AI Strategy Partners</p>
</div>
</div>
<div className="hidden lg:flex items-center space-x-8 animate-fadeInUp delay-200">
<a className="text-gray-700 hover:text-gray-900 font-medium transition-all hover:scale-105" href="#approche">Approche</a>
<a className="text-gray-700 hover:text-gray-900 font-medium transition-all hover:scale-105" href="#processus">Processus</a>
<a className="text-gray-700 hover:text-gray-900 font-medium transition-all hover:scale-105" href="#temoignages">Témoignages</a>
<button className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover-lift shadow-xl">
                        Consultation Gratuite
                    </button>
</div>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
<div className="text-center relative z-10">
<div className="animate-scaleIn delay-300">
<div className="inline-flex items-center bg-white/80 backdrop-blur-md rounded-full px-6 py-3 mb-8 shadow-xl border border-gray-200/50">
<div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
<span className="text-sm font-semibold text-gray-700">87% des entreprises échouent avec l'IA</span>
<span className="text-sm font-black text-gray-900 ml-2">Pas les nôtres.</span>
</div>
</div>
<h1 className="text-5xl lg:text-8xl font-black text-gray-900 mb-8 tracking-tighter animate-fadeInUp delay-400">
                    Transformez votre
                    <span className="relative inline-block">
<span className="text-gradient">entreprise</span>
<div className="absolute -bottom-4 left-0 right-0 h-1 gradient-primary rounded-full animate-shimmer"></div>
</span>
<br/>avec l'IA
                </h1>
<p className="text-xl lg:text-2xl text-gray-600 mb-6 max-w-4xl mx-auto animate-fadeInUp delay-600">
                    De la stratégie à l'exécution, devenez <span className="font-bold text-gray-900">leader de votre marché</span> grâce à une approche IA sur-mesure
                </p>
<div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16 animate-fadeInUp delay-800">
<button className="group relative overflow-hidden gradient-primary text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl hover-lift">
<div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<span className="relative flex items-center">
<i className="w-6 h-6 mr-3" data-lucide="rocket"></i>
                            Découvrir notre approche
                        </span>
</button>
<button className="group bg-white/80 backdrop-blur-md text-gray-900 px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl hover-lift border border-gray-200/50">
<span className="flex items-center">
<i className="w-6 h-6 mr-3 text-blue-600" data-lucide="play-circle"></i>
                            Quiz maturité IA (5 min)
                        </span>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fadeInUp delay-1000">
<div className="glass-morphism rounded-2xl p-6 hover-lift">
<div className="text-4xl font-black text-gradient mb-2">300%</div>
<div className="text-sm font-semibold text-gray-700">ROI Moyen</div>
</div>
<div className="glass-morphism rounded-2xl p-6 hover-lift">
<div className="text-4xl font-black text-gradient mb-2">8</div>
<div className="text-sm font-semibold text-gray-700">Mois pour résultats</div>
</div>
<div className="glass-morphism rounded-2xl p-6 hover-lift">
<div className="text-4xl font-black text-gradient mb-2">100%</div>
<div className="text-sm font-semibold text-gray-700">Clients satisfaits</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tighter animate-fadeInUp">
                    Ces défis vous <span className="text-gradient">parlent</span> ?
                </h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-200">
                    Vous dirigez une entreprise en croissance et ces questions vous empêchent de dormir
                </p>
</div>
<div className="grid lg:grid-cols-2 gap-8 mb-20">
<div className="space-y-6">
<div className="group relative overflow-hidden bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 shadow-luxury hover-lift border border-red-100 animate-slideInLeft delay-300">
<div className="absolute top-0 right-0 w-32 h-32 bg-red-200/30 rounded-full -translate-y-16 translate-x-16"></div>
<div className="relative z-10">
<div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
<i className="w-8 h-8 text-white" data-lucide="help-circle"></i>
</div>
<h3 className="text-2xl font-bold text-gray-900 mb-4">"L'IA, par où commencer ?"</h3>
<p className="text-gray-700 text-lg leading-relaxed">Vous savez que c'est crucial, mais vous manquez de repères concrets pour prendre les bonnes décisions stratégiques.</p>
</div>
</div>
<div className="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 shadow-luxury hover-lift border border-orange-100 animate-slideInLeft delay-500">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/30 rounded-full -translate-y-16 translate-x-16"></div>
<div className="relative z-10">
<div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
<i className="w-8 h-8 text-white" data-lucide="trending-up"></i>
</div>
<h3 className="text-2xl font-bold text-gray-900 mb-4">"Comment mesurer le ROI ?"</h3>
<p className="text-gray-700 text-lg leading-relaxed">Vous voulez des garanties financières solides, pas des promesses techniques en l'air.</p>
</div>
</div>
<div className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 shadow-luxury hover-lift border border-purple-100 animate-slideInLeft delay-700">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/30 rounded-full -translate-y-16 translate-x-16"></div>
<div className="relative z-10">
<div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
<i className="w-8 h-8 text-white" data-lucide="users"></i>
</div>
<h3 className="text-2xl font-bold text-gray-900 mb-4">"Mon équipe n'est pas prête"</h3>
<p className="text-gray-700 text-lg leading-relaxed">La transformation IA, c'est d'abord une transformation humaine et culturelle.</p>
</div>
</div>
</div>
<div className="space-y-6">
<div className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-luxury hover-lift border border-blue-100 animate-slideInRight delay-400">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full -translate-y-16 translate-x-16"></div>
<div className="relative z-10">
<div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
<i className="w-8 h-8 text-white" data-lucide="message-square"></i>
</div>
<h3 className="text-2xl font-bold text-gray-900 mb-4">"J'ai testé ChatGPT, et après ?"</h3>
<p className="text-gray-700 text-lg leading-relaxed">Les outils grand public ne suffisent pas. Il vous faut une vraie stratégie d'entreprise.</p>
</div>
</div>
<div className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-luxury hover-lift border border-green-100 animate-slideInRight delay-600">
<div className="absolute top-0 right-0 w-32 h-32 bg-green-200/30 rounded-full -translate-y-16 translate-x-16"></div>
<div className="relative z-10">
<div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
<i className="w-8 h-8 text-white" data-lucide="settings"></i>
</div>
<h3 className="text-2xl font-bold text-gray-900 mb-4">"Peur des mauvais choix tech"</h3>
<p className="text-gray-700 text-lg leading-relaxed">Entre solutions sur étagère et développements custom, comment faire le bon arbitrage ?</p>
</div>
</div>
<div className="group relative overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 shadow-luxury hover-lift border border-pink-100 animate-slideInRight delay-800">
<div className="absolute top-0 right-0 w-32 h-32 bg-pink-200/30 rounded-full -translate-y-16 translate-x-16"></div>
<div className="relative z-10">
<div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
<i className="w-8 h-8 text-white" data-lucide="shield-alert"></i>
</div>
<h3 className="text-2xl font-bold text-gray-900 mb-4">"Sécurité et conformité"</h3>
<p className="text-gray-700 text-lg leading-relaxed">RGPD, sécurité des données, éthique IA... Comment naviguer dans cette complexité ?</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden" id="approche">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tighter animate-fadeInUp">
                    Notre approche <span className="text-gradient">révolutionnaire</span>
</h2>
<p className="text-xl text-gray-600 max-w-4xl mx-auto animate-fadeInUp delay-200">
                    L'IA pragmatique au service de <span className="font-bold text-gray-900">VOTRE</span> stratégie business
                </p>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
<div className="animate-slideInLeft delay-400">
<div className="relative">
<div className="absolute -inset-4 gradient-primary rounded-3xl opacity-20 blur-xl"></div>
<div className="relative bg-white rounded-3xl p-12 shadow-luxury">
<div className="grid grid-cols-2 gap-8">
<div className="text-center">
<div className="text-5xl font-black text-gradient mb-2">4</div>
<div className="text-sm font-semibold text-gray-700">Phases Structurées</div>
</div>
<div className="text-center">
<div className="text-5xl font-black text-gradient mb-2">360°</div>
<div className="text-sm font-semibold text-gray-700">Accompagnement</div>
</div>
<div className="text-center">
<div className="text-5xl font-black text-gradient mb-2">ROI</div>
<div className="text-sm font-semibold text-gray-700">Garanti</div>
</div>
<div className="text-center">
<div className="text-5xl font-black text-gradient mb-2">∞</div>
<div className="text-sm font-semibold text-gray-700">Évolution</div>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-8 animate-slideInRight delay-600">
<div className="flex items-start space-x-6">
<div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
<i className="w-8 h-8 text-white" data-lucide="target"></i>
</div>
<div>
<h3 className="text-2xl font-bold text-gray-900 mb-3">Business First</h3>
<p className="text-gray-700 text-lg">L'IA n'est qu'un moyen. Votre croissance et votre différenciation concurrentielle sont nos véritables objectifs.</p>
</div>
</div>
<div className="flex items-start space-x-6">
<div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
<i className="w-8 h-8 text-white" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-2xl font-bold text-gray-900 mb-3">ROI Démontrable</h3>
<p className="text-gray-700 text-lg">Pas de ROI mesurable = Pas de projet. Notre règle d'or pour garantir votre investissement.</p>
</div>
</div>
<div className="flex items-start space-x-6">
<div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
<i className="w-8 h-8 text-white" data-lucide="users"></i>
</div>
<div>
<h3 className="text-2xl font-bold text-gray-900 mb-3">Expertise Hybride</h3>
<p className="text-gray-700 text-lg">Consultants stratégie + Experts IA + Développeurs seniors = L'équipe parfaite pour votre réussite.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden" id="processus">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tighter animate-fadeInUp">
                    Notre processus <span className="text-gradient">éprouvé</span>
</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-200">
                    De la vision stratégique à la production, une méthode structurée et mesurable
                </p>
</div>
<div className="relative">

<div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 rounded-full"></div>
<div className="space-y-24">

<div className="relative flex items-center animate-slideInLeft delay-400">
<div className="lg:w-1/2 lg:pr-12">
<div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-luxury border border-blue-100 hover-lift">
<div className="flex items-center mb-6">
<div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl">
<span className="text-white font-black text-2xl">1</span>
</div>
<div>
<h3 className="text-2xl font-bold text-gray-900">Diagnostic Stratégique</h3>
<p className="text-blue-600 font-semibold">2 semaines</p>
</div>
</div>
<p className="text-gray-700 mb-6 text-lg">Audit complet de votre maturité IA, cartographie des opportunités et estimation ROI détaillée.</p>
<div className="bg-blue-100 rounded-2xl p-4">
<p className="text-blue-800 font-bold">📊 Livrable : Rapport stratégique + Roadmap priorisée</p>
</div>
</div>
</div>
<div className="hidden lg:block absolute left-1/2 w-6 h-6 bg-blue-500 rounded-full transform -translate-x-1/2 shadow-xl"></div>
</div>

<div className="relative flex items-center animate-slideInRight delay-600">
<div className="lg:w-1/2 lg:ml-auto lg:pl-12">
<div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-luxury border border-purple-100 hover-lift">
<div className="flex items-center mb-6">
<div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl">
<span className="text-white font-black text-2xl">2</span></div>
<div>
<h3 className="text-2xl font-bold text-gray-900">Conception &amp; Validation</h3>
<p className="text-purple-600 font-semibold">4-6 semaines</p>
</div>
</div>
<p className="text-gray-700 mb-6 text-lg">Prototypage rapide, tests utilisateurs et validation technique de votre solution IA.</p>
<div className="bg-purple-100 rounded-2xl p-4">
<p className="text-purple-800 font-bold">🎯 Livrable : MVP fonctionnel + Métriques de performance</p>
</div>
</div>
</div>
<div className="hidden lg:block absolute left-1/2 w-6 h-6 bg-purple-500 rounded-full transform -translate-x-1/2 shadow-xl"></div>
</div>

<div className="relative flex items-center animate-slideInLeft delay-800">
<div className="lg:w-1/2 lg:pr-12">
<div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-luxury border border-green-100 hover-lift">
<div className="flex items-center mb-6">
<div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl">
<span className="text-white font-black text-2xl">3</span>
</div>
<div>
<h3 className="text-2xl font-bold text-gray-900">Développement &amp; Déploiement</h3>
<p className="text-green-600 font-semibold">8-12 semaines</p>
</div>
</div>
<p className="text-gray-700 mb-6 text-lg">Développement full-scale, intégration système et déploiement sécurisé en production.</p>
<div className="bg-green-100 rounded-2xl p-4">
<p className="text-green-800 font-bold">🚀 Livrable : Solution complète + Formation équipe</p>
</div>
</div>
</div>
<div className="hidden lg:block absolute left-1/2 w-6 h-6 bg-green-500 rounded-full transform -translate-x-1/2 shadow-xl"></div>
</div>

<div className="relative flex items-center animate-slideInRight delay-1000">
<div className="lg:w-1/2 lg:ml-auto lg:pl-12">
<div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 shadow-luxury border border-orange-100 hover-lift">
<div className="flex items-center mb-6">
<div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl">
<span className="text-white font-black text-2xl">4</span>
</div>
<div>
<h3 className="text-2xl font-bold text-gray-900">Optimisation &amp; Évolution</h3>
<p className="text-orange-600 font-semibold">Continu</p>
</div>
</div>
<p className="text-gray-700 mb-6 text-lg">Monitoring, optimisation continue et évolution de votre système IA selon vos besoins.</p>
<div className="bg-orange-100 rounded-2xl p-4">
<p className="text-orange-800 font-bold">📈 Livrable : Rapports mensuels + Roadmap évolutive</p>
</div>
</div>
</div>
<div className="hidden lg:block absolute left-1/2 w-6 h-6 bg-orange-500 rounded-full transform -translate-x-1/2 shadow-xl"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden" id="temoignages">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tighter animate-fadeInUp">
                    Ils nous font <span className="text-gradient">confiance</span>
</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-200">
                    Des dirigeants qui ont transformé leur entreprise avec nos solutions IA
                </p>
</div>
<div className="grid lg:grid-cols-3 gap-8">
<div className="bg-white rounded-3xl p-8 shadow-luxury hover-lift animate-scaleIn delay-400">
<div className="flex items-center mb-6">
<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
<span className="text-white font-black text-xl">MH</span>
</div>
<div>
<h4 className="text-lg font-bold text-gray-900">Marie Dubois</h4>
<p className="text-gray-600 text-sm">CEO, TechCorp</p>
</div>
</div>
<p className="text-gray-700 text-lg mb-6 italic">"En 6 mois, l'IA a révolutionné notre service client. 40% de gain de productivité et une satisfaction client au plus haut."</p>
<div className="flex items-center text-yellow-500">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
</div>
<div className="bg-white rounded-3xl p-8 shadow-luxury hover-lift animate-scaleIn delay-600">
<div className="flex items-center mb-6">
<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
<span className="text-white font-black text-xl">PL</span>
</div>
<div>
<h4 className="text-lg font-bold text-gray-900">Pierre Laurent</h4>
<p className="text-gray-600 text-sm">Directeur, InnovatePlus</p>
</div>
</div>
<p className="text-gray-700 text-lg mb-6 italic">"L'approche de Lagentia est unique : ils parlent business avant technologie. Résultat : 250% de ROI en 8 mois."</p>
<div className="flex items-center text-yellow-500">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
</div>
<div className="bg-white rounded-3xl p-8 shadow-luxury hover-lift animate-scaleIn delay-800">
<div className="flex items-center mb-6">
<div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mr-4">
<span className="text-white font-black text-xl">SB</span>
</div>
<div>
<h4 className="text-lg font-bold text-gray-900">Sophie Bernard</h4>
<p className="text-gray-600 text-sm">Fondatrice, DataFlow</p>
</div>
</div>
<p className="text-gray-700 text-lg mb-6 italic">"Enfin une équipe qui comprend nos enjeux ! Notre processus de décision est désormais 3x plus rapide grâce à l'IA prédictive."</p>
<div className="flex items-center text-yellow-500">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
<div className="absolute inset-0 bg-black/20"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center">
<h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tighter animate-fadeInUp">
                    Prêt à transformer votre <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">entreprise</span> ?
                </h2>
<p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12 animate-fadeInUp delay-200">
                    Découvrez en 30 minutes comment l'IA peut révolutionner votre business
                </p>
<div className="flex flex-col lg:flex-row gap-6 justify-center items-center animate-fadeInUp delay-400">
<button className="group relative overflow-hidden bg-white text-gray-900 px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover-lift">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
<span className="relative flex items-center">
<i className="w-6 h-6 mr-3" data-lucide="calendar"></i>
                            Consultation Stratégique Gratuite
                        </span>
</button>
<button className="group glass-morphism text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-2xl hover-lift border border-white/30">
<span className="flex items-center">
<i className="w-6 h-6 mr-3" data-lucide="download"></i>
                            Guide "IA &amp; ROI" (PDF)
                        </span>
</button>
</div>
<div className="flex items-center justify-center space-x-8 mt-12 animate-fadeInUp delay-600">
<div className="flex items-center text-gray-300">
<i className="w-6 h-6 mr-2 text-green-400" data-lucide="check-circle"></i>
<span className="font-semibold">Sans engagement</span>
</div>
<div className="flex items-center text-gray-300">
<i className="w-6 h-6 mr-2 text-blue-400" data-lucide="clock"></i>
<span className="font-semibold">30 minutes</span>
</div>
<div className="flex items-center text-gray-300">
<i className="w-6 h-6 mr-2 text-purple-400" data-lucide="shield"></i>
<span className="font-semibold">100% confidentiel</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-gray-900 text-white py-20">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-4 gap-12 mb-12">
<div className="lg:col-span-2">
<div className="flex items-center space-x-4 mb-6">
<div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center shadow-xl">
<i className="w-7 h-7 text-white" data-lucide="zap"></i>
</div>
<div>
<h3 className="text-2xl font-black text-gradient">Lagentia</h3>
<p className="text-gray-400 text-sm font-medium">AI Strategy Partners</p>
</div>
</div>
<p className="text-gray-400 text-lg mb-6 max-w-md">
                        Nous transformons les entreprises ambitieuses en leaders grâce à l'intelligence artificielle.
                    </p>
<div className="flex space-x-4">
<a className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="linkedin"></i>
</a>
<a className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="twitter"></i>
</a>
<a className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="mail"></i>
</a>
</div>
</div>
<div>
<h4 className="text-xl font-bold mb-6">Services</h4>
<ul className="space-y-3">
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Stratégie IA</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Développement IA</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Formation</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Consulting</a></li>
</ul>
</div>
<div>
<h4 className="text-xl font-bold mb-6">Contact</h4>
<ul className="space-y-3">
<li className="flex items-center">
<i className="w-5 h-5 mr-3 text-gray-400" data-lucide="mail"></i>
<span className="text-gray-400">hello@lagentia.com</span>
</li>
<li className="flex items-center">
<i className="w-5 h-5 mr-3 text-gray-400" data-lucide="phone"></i>
<span className="text-gray-400">+33 1 23 45 67 89</span>
</li>
<li className="flex items-center">
<i className="w-5 h-5 mr-3 text-gray-400" data-lucide="map-pin"></i>
<span className="text-gray-400">Paris, France</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center">
<p className="text-gray-400 text-sm mb-4 lg:mb-0">
                    © 2024 Lagentia. Tous droits réservés.
                </p>
<div className="flex space-x-6">
<a className="text-gray-400 hover:text-white text-sm transition-colors" href="#">Mentions légales</a>
<a className="text-gray-400 hover:text-white text-sm transition-colors" href="#">Politique de confidentialité</a>
<a className="text-gray-400 hover:text-white text-sm transition-colors" href="#">CGV</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
