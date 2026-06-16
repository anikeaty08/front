import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-emerald-200/40 blur-[120px]"></div>
<div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] rounded-full bg-teal-200/30 blur-[100px]"></div>
<div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] rounded-full bg-blue-100/40 blur-[120px]"></div>
</div>

<header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/60 backdrop-blur-md border-b border-white/40 shadow-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-gradient-to-tr from-emerald-500 to-teal-400 p-2 rounded-xl text-white shadow-md shadow-emerald-500/20 group-hover:shadow-lg transition-all duration-300">
<i data-lucide="leaf"></i>
</div>
<span className="text-2xl font-semibold tracking-tight text-slate-900">Courtier</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="#">Accueil</a>
<a className="text-base font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="#">Nos services</a>
<a className="text-base font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="#">Agences</a>
<a className="text-base font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="#">Blog</a>
</nav>

<div className="hidden md:block">
<a className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-base font-medium transition-all shadow-md shadow-slate-900/10 hover:shadow-lg" href="#">
                    Trouver une agence
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<button className="md:hidden text-slate-600 p-2">
<i data-lucide="menu"></i>
</button>
</div>
</header>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/50 text-emerald-700 text-sm font-medium mb-8 border border-emerald-200/50 backdrop-blur-sm">
<span className="flex w-2 h-2 rounded-full bg-emerald-500"></span>
                        Avis vérifiés 4.8/5
                    </div>
<h1 className="text-5xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
                        Plus de simplicité <br/>pour vos <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">prêts ?</span>
</h1>
<p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        Des experts à votre écoute pour concrétiser vos projets. Nous vous accompagnons de A à Z pour trouver la meilleure solution de financement.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="inline-flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all shadow-lg shadow-emerald-600/20" href="#">
                            Simuler mon projet
                        </a>
<a className="inline-flex justify-center items-center gap-2 bg-white/50 hover:bg-white/80 text-slate-700 border border-white/60 shadow-sm backdrop-blur-md px-8 py-3.5 rounded-full text-base font-medium transition-all" href="#">
                            Être rappelé
                        </a>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<a className="group flex flex-col items-center justify-center p-4 bg-white/40 hover:bg-white/70 border border-white/50 rounded-2xl shadow-sm backdrop-blur-md transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<i data-lucide="home"></i>
</div>
<span className="text-sm font-medium text-slate-700 text-center leading-tight">Prêt<br/>immobilier</span>
</a>
<a className="group flex flex-col items-center justify-center p-4 bg-white/40 hover:bg-white/70 border border-white/50 rounded-2xl shadow-sm backdrop-blur-md transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<i data-lucide="refresh-cw"></i>
</div>
<span className="text-sm font-medium text-slate-700 text-center leading-tight">Rachat<br/>de crédits</span>
</a>
<a className="group flex flex-col items-center justify-center p-4 bg-white/40 hover:bg-white/70 border border-white/50 rounded-2xl shadow-sm backdrop-blur-md transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<i data-lucide="briefcase"></i>
</div>
<span className="text-sm font-medium text-slate-700 text-center leading-tight">Prêt<br/>professionnel</span>
</a>
<a className="group flex flex-col items-center justify-center p-4 bg-white/40 hover:bg-white/70 border border-white/50 rounded-2xl shadow-sm backdrop-blur-md transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<i data-lucide="user"></i>
</div>
<span className="text-sm font-medium text-slate-700 text-center leading-tight">Prêt<br/>personnel</span>
</a>
</div>
</div>

<div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 hidden lg:block">

<div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-50">
<img alt="Couple heureux" className="w-full h-full object-cover mix-blend-overlay opacity-80" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>

<div className="absolute bottom-8 left-8 right-8 bg-white/70 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-lg">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<i data-lucide="check-circle-2"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-500">Validation rapide</p>
<p className="text-lg font-semibold text-slate-900 tracking-tight">Dossier accepté</p>
</div>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-full rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 relative">
<div className="absolute inset-0 bg-white/30 backdrop-blur-sm border-y border-white/40 -z-10"></div>
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-2">Nos meilleurs taux du mois</h2>
<p className="text-lg text-slate-500">Mise à jour hebdomadaire</p>
</div>
<div className="flex flex-wrap justify-center items-end gap-12 md:gap-24">
<div className="text-center">
<span className="block text-base font-medium text-slate-500 mb-2">Sur 15 ans</span>
<div className="flex items-baseline justify-center text-slate-900">
<span className="text-6xl md:text-8xl font-semibold tracking-tighter">2,72</span>
<span className="text-3xl md:text-4xl font-medium ml-1">%</span>
</div>
</div>
<div className="text-center opacity-60">
<span className="block text-base font-medium text-slate-500 mb-2">Sur 20 ans</span>
<div className="flex items-baseline justify-center text-slate-900">
<span className="text-5xl md:text-7xl font-semibold tracking-tighter">2,88</span>
<span className="text-2xl md:text-3xl font-medium ml-1">%</span>
</div>
</div>
<div className="text-center opacity-40">
<span className="block text-base font-medium text-slate-500 mb-2">Sur 25 ans</span>
<div className="flex items-baseline justify-center text-slate-900">
<span className="text-4xl md:text-6xl font-semibold tracking-tighter">3,05</span>
<span className="text-xl md:text-2xl font-medium ml-1">%</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-square rounded-3xl bg-emerald-100 overflow-hidden relative shadow-xl shadow-slate-200">
<img alt="Consultation" className="w-full h-full object-cover mix-blend-multiply opacity-90" src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="absolute -bottom-10 -right-10 bg-white/80 backdrop-blur-xl border border-white shadow-xl rounded-2xl p-6 w-64 hidden lg:block">
<div className="flex items-center gap-3 mb-2">
<i className="text-emerald-500" data-lucide="shield-check"></i>
<span className="font-semibold text-slate-900">100% Sécurisé</span>
</div>
<p className="text-sm text-slate-600">Vos données sont chiffrées et protégées à chaque étape.</p>
</div>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Un courtier tout à vous</h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Nous mettons à votre disposition un expert dédié qui vous accompagne personnellement. Fini les interlocuteurs multiples, bonjour la simplicité.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<div className="mt-1 bg-emerald-100 rounded-full p-1 text-emerald-600">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-lg text-slate-700">Analyse approfondie de votre situation financière.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-emerald-100 rounded-full p-1 text-emerald-600">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-lg text-slate-700">Négociation directe avec nos banques partenaires.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-emerald-100 rounded-full p-1 text-emerald-600">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-lg text-slate-700">Accompagnement jusqu'à la signature chez le notaire.</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-emerald-600 font-medium text-lg hover:text-emerald-700 transition-colors group" href="#">
                        Découvrir notre méthode
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12">
<div className="grid sm:grid-cols-3 gap-8 p-8 bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl shadow-sm">
<div className="flex flex-col items-center text-center p-4">
<div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
<i className="w-7 h-7" data-lucide="map-pin"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Proches de vous</h3>
<p className="text-base text-slate-600">Plus de 120 agences réparties sur tout le territoire national.</p>
</div>
<div className="flex flex-col items-center text-center p-4">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
<i className="w-7 h-7" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Des chiffres qui comptent</h3>
<p className="text-base text-slate-600">Plus de 2 milliards d'euros financés l'année dernière.</p>
</div>
<div className="flex flex-col items-center text-center p-4">
<div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
<i className="w-7 h-7" data-lucide="award"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Un savoir-faire reconnu</h3>
<p className="text-base text-slate-600">Élu meilleur courtier par nos clients depuis 3 ans.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-16">
<div className="grid md:grid-cols-2 gap-8">

<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-100 border border-white shadow-sm p-10 flex flex-col items-center text-center group">
<div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] transition-all group-hover:backdrop-blur-none"></div>
<div className="relative z-10">
<span className="inline-block px-3 py-1 bg-emerald-200/50 text-emerald-800 text-xs font-semibold uppercase tracking-wider rounded-full mb-6">Localisation</span>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Nos agences</h3>
<p className="text-lg text-slate-700 mb-8 max-w-sm mx-auto">Venez nous rencontrer pour discuter de votre projet autour d'un café.</p>
<a className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-base font-medium transition-all shadow-md shadow-emerald-600/20" href="#">
                            Rechercher une agence
                        </a>
</div>
</div>

<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 border border-white shadow-sm p-10 flex flex-col items-center text-center group">
<div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] transition-all group-hover:backdrop-blur-none"></div>
<div className="relative z-10">
<span className="inline-block px-3 py-1 bg-slate-300/50 text-slate-800 text-xs font-semibold uppercase tracking-wider rounded-full mb-6">Recrutement</span>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Rejoignez-nous</h3>
<p className="text-lg text-slate-700 mb-8 max-w-sm mx-auto">Vous êtes passionné par la finance et la relation client ? Postulez.</p>
<a className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full text-base font-medium transition-all shadow-md shadow-slate-900/10" href="#">
                            Consulter les offres
                        </a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12 text-center">
<h3 className="text-base font-medium text-slate-500 uppercase tracking-widest mb-8">Nos partenaires nationaux</h3>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-semibold text-slate-700"><i data-lucide="building-2"></i> Cetelem</div>
<div className="flex items-center gap-2 text-xl font-semibold text-slate-700"><i data-lucide="landmark"></i> Crédit Mutuel</div>
<div className="flex items-center gap-2 text-xl font-semibold text-slate-700"><i data-lucide="piggy-bank"></i> LCL</div>
<div className="flex items-center gap-2 text-xl font-semibold text-slate-700"><i data-lucide="circle-dollar-sign"></i> Société Générale</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-2">Dernières actualités</h2>
<p className="text-lg text-slate-500">Restez informé des tendances du marché</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors" href="#">
                    Voir tout le blog <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
<div className="h-48 bg-slate-200 overflow-hidden">
<img alt="Actu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-5">
<span className="text-xs font-medium text-emerald-600 mb-2 block">Immobilier</span>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2 line-clamp-2">Agrandissez votre maison plutôt que de déménager !</h3>
<a className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors mt-4" href="#">
                            Lire la suite <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
</article>

<article className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
<div className="h-48 bg-slate-200 overflow-hidden">
<img alt="Actu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-5">
<span className="text-xs font-medium text-blue-600 mb-2 block">Finance</span>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2 line-clamp-2">Est-ce le moment d'emprunter sur une durée longue ?</h3>
<a className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors mt-4" href="#">
                            Lire la suite <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
</article>

<article className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
<div className="h-48 bg-slate-200 overflow-hidden">
<img alt="Actu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-5">
<span className="text-xs font-medium text-amber-600 mb-2 block">Conseil</span>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2 line-clamp-2">Taux immobiliers : les prévisions pour le prochain trimestre.</h3>
<a className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors mt-4" href="#">
                            Lire la suite <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
</article>

<article className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
<div className="h-48 bg-slate-200 overflow-hidden">
<img alt="Actu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-5">
<span className="text-xs font-medium text-purple-600 mb-2 block">Entreprise</span>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2 line-clamp-2">Chef d'entreprise : investir pour loger vos salariés.</h3>
<a className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors mt-4" href="#">
                            Lire la suite <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
</article>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-slate-600 font-medium" href="#">Voir tout le blog <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 pb-24">
<div className="bg-gradient-to-r from-emerald-100/80 to-teal-50/80 backdrop-blur-xl border border-white rounded-[2rem] p-8 md:p-12 text-center shadow-lg shadow-emerald-100/50 relative overflow-hidden">

<i className="absolute -top-10 -left-10 w-48 h-48 text-white/40 -rotate-12 pointer-events-none" data-lucide="mail"></i>
<div className="relative z-10">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">Vous aimez les bonnes nouvelles ?</h2>
<p className="text-lg text-slate-700 mb-8">Alors restons en contact ! Inscrivez-vous à notre newsletter.</p>
<form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-white border border-white/60 rounded-full px-6 py-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 shadow-sm" placeholder="Votre adresse email" required="" type="email"/>
<button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all shadow-md" type="submit">
                            S'inscrire
                        </button>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">

<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="bg-emerald-500 p-1.5 rounded-lg text-white">
<i className="w-5 h-5" data-lucide="leaf"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Courtier</span>
</a>
<p className="text-base text-slate-500 mb-6 max-w-sm">
                        L'expertise d'un réseau national pour vous accompagner dans tous vos projets de financement.
                    </p>
<div className="flex gap-4">
<a className="bg-slate-900 text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-slate-800 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="apple"></i>
<div className="text-left">
<div className="text-[10px] leading-none text-slate-300">Télécharger sur</div>
<div className="text-sm font-semibold leading-tight">App Store</div>
</div>
</a>
<a className="bg-slate-900 text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-slate-800 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="play"></i>
<div className="text-left">
<div className="text-[10px] leading-none text-slate-300">Disponible sur</div>
<div className="text-sm font-semibold leading-tight">Google Play</div>
</div>
</a>
</div>
</div>

<div>
<h4 className="text-base font-semibold text-slate-900 mb-4 tracking-tight">Nos crédits</h4>
<ul className="space-y-3">
<li><a className="text-base text-slate-500 hover:text-emerald-600 transition-colors" href="#">Prêt immobilier</a></li>
<li><a className="text-base text-slate-500 hover:text-emerald-600 transition-colors" href="#">Rachat de crédits</a></li>
<li><a className="text-base text-slate-500 hover:text-emerald-600 transition-colors" href="#">Prêt professionnel</a></li>
<li><a className="text-base text-slate-500 hover:text-emerald-600 transition-colors" href="#">Assurance emprunteur</a></li>
</ul>
</div>

<div>
<h4 className="text-base font-semibold text-slate-900 mb-4 tracking-tight">Le réseau</h4>
<ul className="space-y-3">
<li><a className="text-base text-slate-500 hover:text-emerald-600 transition-colors" href="#">Trouver une agence</a></li>
<li><a className="text-base text-slate-500 hover:text-emerald-600 transition-colors" href="#">Devenir franchisé</a></li>
<li><a className="text-base text-slate-500 hover:text-emerald-600 transition-colors" href="#">Recrutement</a></li>
<li><a className="text-base text-slate-500 hover:text-emerald-600 transition-colors" href="#">Contactez-nous</a></li>
</ul>
</div>

<div>
<h4 className="text-base font-semibold text-slate-900 mb-4 tracking-tight">Légal</h4>
<ul className="space-y-3">
<li><a className="text-base text-slate-500 hover:text-emerald-600 transition-colors" href="#">Mentions légales</a></li>
<li><a className="text-base text-slate-500 hover:text-emerald-600 transition-colors" href="#">Données personnelles</a></li>
<li><a className="text-base text-slate-500 hover:text-emerald-600 transition-colors" href="#">Gestion des cookies</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200">
<p className="text-sm text-slate-500 mb-4 md:mb-0">
                    © 2023 Courtier. Tous droits réservés.
                </p>
<div className="flex items-center gap-6 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
