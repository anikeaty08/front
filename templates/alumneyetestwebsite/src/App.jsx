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
      

<div className="bg-slate-900 text-slate-300 text-xs py-2 px-6 flex justify-between items-center tracking-tight border-b border-slate-800">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="14"></iconify-icon>
<span>Des questions ? 01.76.39.01.09</span>
</div>
<div className="hidden md:flex gap-6">
<a className="hover:text-white transition-colors" href="#">Blog</a>
<a className="hover:text-white transition-colors" href="#">Forum AlumnEye</a>
<a className="hover:text-white transition-colors" href="#">Espace Membre</a>
</div>
</div>

<nav className="glass-nav sticky top-0 z-50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-[#B11F24] rounded-lg flex items-center justify-center text-white shadow-md shadow-red-900/10">
<span className="font-serif-logo text-lg font-medium italic">A</span>
</div>
<span className="text-slate-900 font-semibold tracking-tighter text-lg group-hover:opacity-80 transition-opacity">ALUMNEYE</span>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-[#B11F24] transition-colors" href="#">Coaching Candidats</a>
<a className="hover:text-[#B11F24] transition-colors" href="#">Formations en ligne</a>
<a className="hover:text-[#B11F24] transition-colors" href="#">Professionnels</a>
<a className="hover:text-[#B11F24] transition-colors" href="#">A propos</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-[#B11F24] transition-colors" href="#">
                    Connexion
                </a>
<a className="bg-[#B11F24] hover:bg-[#8f191d] text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-red-900/20 flex items-center gap-2" href="#inscription">
                    Inscription &amp; Contact
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 overflow-hidden bg-pattern-1 border-b border-slate-100">
<div className="max-w-5xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#B11F24]"></span>
</span>
<span className="text-xs font-medium text-slate-700 tracking-tight">#1 de la préparation aux entretiens en Finance</span>
</div>

<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tighter leading-[1.1] mb-8">
                Décrochez une carrière à la hauteur de <span className="text-[#B11F24]">vos ambitions.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Depuis 14 ans, AlumnEye offre des ressources uniques pour intégrer le M&amp;A, Private Equity, Sales &amp; Trading et le Conseil en Stratégie.
            </p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
<div className="bg-white/80 p-4 rounded-xl border border-slate-200 backdrop-blur-sm shadow-sm">
<p className="text-3xl font-semibold text-slate-900 tracking-tight">40 %</p>
<p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">promo M&amp;A Goldman Sachs 2024</p>
</div>
<div className="bg-white/80 p-4 rounded-xl border border-slate-200 backdrop-blur-sm shadow-sm">
<p className="text-3xl font-semibold text-slate-900 tracking-tight">8 200+</p>
<p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">étudiants accompagnés</p>
</div>
<div className="bg-white/80 p-4 rounded-xl border border-slate-200 backdrop-blur-sm shadow-sm">
<p className="text-3xl font-semibold text-slate-900 tracking-tight">Top Tier</p>
<p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">Formateurs Ex-GS, JPM, BofA...</p>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-[#B11F24] text-white px-8 py-3.5 rounded-xl font-medium hover:bg-[#8f191d] transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-900/10">
                    Découvrir nos offres
                    <iconify-icon icon="lucide:chevron-down" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-3.5 rounded-xl font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="18"></iconify-icon>
                    Voir l'extrait de formation
                </button>
</div>
</div>
</section>

<section className="bg-slate-900 py-24 text-white overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#B11F24]/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-6">
<span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Inside AlumnEye</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-6">Découvrez comment vous serez préparé.</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
                    Accédez à un extrait exclusif de nos sessions et comprenez la méthode qui permet à nos étudiants de surperformer lors des entretiens techniques et fit.
                </p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-[#B11F24]/20 text-[#ff4d52] flex items-center justify-center mt-0.5 shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="2" width="14"></iconify-icon>
</div>
<p className="text-sm text-slate-300">Formation en présentiel avec des pros en banque &amp; fonds</p>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-[#B11F24]/20 text-[#ff4d52] flex items-center justify-center mt-0.5 shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="2" width="14"></iconify-icon>
</div>
<p className="text-sm text-slate-300">Accédez à 100% des questions posées en entretien grâce au Forum AlumnEye</p>
</div>
</div>
<div className="mt-10">
<a className="text-white border-b border-[#B11F24] pb-1 hover:text-[#ff4d52] transition-colors inline-flex items-center gap-2 text-sm" href="#">
                        Réserver un call d’information
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="relative group cursor-pointer">
<div className="aspect-video bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden relative shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-50"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-white ml-1" icon="lucide:play" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>

<div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
<div className="h-1 bg-slate-600 rounded-full flex-1 overflow-hidden">
<div className="h-full w-1/3 bg-[#B11F24]"></div>
</div>
<span className="text-[10px] text-slate-400 font-mono">04:20</span>
</div>
</div>

<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#B11F24]/20 blur-2xl rounded-full -z-10"></div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tighter mb-4">Nos offres de formation</h2>
<p className="text-slate-500 max-w-xl">Des programmes intensifs adaptés à votre calendrier académique et professionnel.</p>
</div>
<div className="mt-4 md:mt-0">
<span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded">CALENDRIER 2026</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

<div className="md:col-span-2 lg:col-span-2 row-span-2 bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all group relative overflow-hidden flex flex-col justify-between">
<div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div>
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-sm">
<iconify-icon className="text-orange-500" icon="lucide:sun" width="20"></iconify-icon>
</div>
<span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 bg-white px-2 py-1 rounded border border-slate-200 shadow-sm">Week-ends</span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">Summer Session</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                            3 sessions au choix en juin, juillet ou août pour préparer sa rentrée. Idéal pour décrocher un Spring, Summer ou Graduate à Londres/Paris.
                        </p>

<div className="space-y-2">
<div className="flex items-center gap-2 text-xs text-slate-600 bg-white px-3 py-2 rounded-lg border border-slate-200 w-fit">
<iconify-icon icon="lucide:calendar" width="12"></iconify-icon>
<span>Juin '26: 20-21 &amp; 27-28</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-600 bg-white px-3 py-2 rounded-lg border border-slate-200 w-fit">
<iconify-icon icon="lucide:calendar" width="12"></iconify-icon>
<span>Juillet '26: 18-19 &amp; 25-26</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-600 bg-white px-3 py-2 rounded-lg border border-slate-200 w-fit">
<iconify-icon icon="lucide:calendar" width="12"></iconify-icon>
<span>Août '26: 29-30 &amp; 05-06 Sept</span>
</div>
</div>
</div>
<div className="mt-8">
<a className="text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 hover:text-[#B11F24] hover:border-[#B11F24] transition-all" href="#">En savoir plus</a>
</div>
</div>

<div className="md:col-span-1 lg:col-span-2 bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all shadow-sm">
<div className="flex justify-between items-start">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-4">
<iconify-icon className="text-sky-500" icon="lucide:snowflake" width="20"></iconify-icon>
</div>
<div className="flex gap-2">
<span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-200">Week-ends</span>
<span className="text-[10px] uppercase font-bold tracking-wider text-[#B11F24] bg-red-50 px-2 py-1 rounded border border-red-100">Ouvert</span>
</div>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Winter Session</h3>
<p className="text-slate-500 text-sm mb-4 line-clamp-2">Pour les recherches de stage de césure, fin d’études ou CDI. Prochaine session Mars 2026.</p>
<div className="text-xs text-slate-400 font-mono">7+8+14+15 mars 2026</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-md flex flex-col justify-between">
<div>
<iconify-icon className="text-slate-400 mb-4" icon="lucide:graduation-cap" width="24"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Prépa MSc Finance</h3>
<p className="text-slate-500 text-xs">Candidatures Masters HEC, ESSEC, ESCP, Imperial.</p>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-md flex flex-col justify-between">
<div>
<iconify-icon className="text-slate-400 mb-4" icon="lucide:target" width="24"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Intensive Track Conseil</h3>
<p className="text-slate-500 text-xs">Mise en situation réelle avec consultants MBB.</p>
</div>
</div>

<div className="md:col-span-3 lg:col-span-4 bg-slate-900 rounded-2xl p-8 border border-slate-800 text-white relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900 to-[#B11F24]/30"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<div className="flex gap-3 mb-3">
<span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wide bg-[#B11F24] text-white uppercase">Online</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Formations Spécialisées</h3>
<p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
                                Apprenez à modéliser un LBO grâce à <span className="text-white font-medium">Training LBO</span> pour vos entretiens en Private Equity. Utilisez <span className="text-white font-medium">Training IBD</span> pour apprendre à maîtriser toutes les missions de stagiaire M&amp;A Jour 1.
                            </p>
</div>
<div className="flex gap-4 shrink-0">
<a className="px-5 py-2.5 rounded-lg bg-white/10 border border-white/10 hover:bg-white/20 transition-all text-sm font-medium" href="#">Voir Training LBO</a>
<a className="px-5 py-2.5 rounded-lg bg-white text-slate-900 hover:bg-slate-50 transition-all text-sm font-medium" href="#">Voir Training IBD</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tighter mb-4">Pourquoi choisir AlumnEye ?</h2>
<p className="text-slate-500">Une méthodologie éprouvée et un réseau puissant pour accélérer votre carrière.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 group">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-4 shadow-sm group-hover:border-[#B11F24] transition-colors">
<iconify-icon className="text-slate-900 group-hover:text-[#B11F24] transition-colors" icon="lucide:network" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Intégrer un Réseau</h4>
<p className="text-sm text-slate-500 leading-relaxed">8 200+ membres à Paris, Londres, NY, Singapour. Un levier puissant pour votre carrière.</p>
</div>

<div className="p-6 group">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-4 shadow-sm group-hover:border-[#B11F24] transition-colors">
<iconify-icon className="text-slate-900 group-hover:text-[#B11F24] transition-colors" icon="lucide:award" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">14 ans d'expertise</h4>
<p className="text-sm text-slate-500 leading-relaxed">Leader incontesté de la préparation aux entretiens en Corporate et Market Finance.</p>
</div>

<div className="p-6 group">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-4 shadow-sm group-hover:border-[#B11F24] transition-colors">
<iconify-icon className="text-slate-900 group-hover:text-[#B11F24] transition-colors" icon="lucide:message-square" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Forum AlumnEye</h4>
<p className="text-sm text-slate-500 leading-relaxed">15 000+ comptes rendus d’entretiens. Couvre 100% des questions posées.</p>
</div>

<div className="p-6 group">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-4 shadow-sm group-hover:border-[#B11F24] transition-colors">
<iconify-icon className="text-slate-900 group-hover:text-[#B11F24] transition-colors" icon="lucide:users" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Formateurs Prestige</h4>
<p className="text-sm text-slate-500 leading-relaxed">40+ formateurs issus de banques Tier 1 et fonds Private Equity.</p>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tighter mb-12">Ce que disent les AlumnEye</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-semibold text-sm">AA</div>
<div>
<p className="text-sm font-semibold text-slate-900">Augustin</p>
<p className="text-xs text-slate-500">Offcycle PE @ Eurazeo</p>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
                        "La formation m’a aidé à aborder les entretiens avec sérénité. Le réseau AlumnEye offre de formidables opportunités."
                    </p>
<div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">EURAZEO</span>
<span className="text-[10px] text-slate-400">Dauphine</span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative">

<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-50 to-transparent rounded-tr-2xl"></div>
<div className="flex items-center gap-3 mb-6 relative z-10">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-semibold text-sm">N</div>
<div>
<p className="text-sm font-semibold text-slate-900">Nelly</p>
<p className="text-xs text-slate-500">Summer M&amp;A @ Goldman Sachs</p>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">
                        "Un gain de temps considérable. C’est une formation très complète qui permet de résumer tout ce qu’on peut retrouver sur Internet."
                    </p>
<div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">GOLDMAN SACHS</span>
<span className="text-[10px] text-slate-400">SciencesPo</span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-semibold text-sm">P</div>
<div>
<p className="text-sm font-semibold text-slate-900">Pauline</p>
<p className="text-xs text-slate-500">Analyst M&amp;A @ UBS</p>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
                        "L'approche complète fit et technique m'a le plus aidée. On apprend à tout préparer en même temps pour postuler de façon intensive."
                    </p>
<div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">UBS</span>
<span className="text-[10px] text-slate-400">ESSEC</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-slate-400 font-medium tracking-wide uppercase mb-10">Ils nous font confiance pour leur carrière</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-serif text-slate-800 tracking-tight">Goldman Sachs</span>
<span className="text-xl font-serif text-slate-800 tracking-wide uppercase">J.P. Morgan</span>
<span className="text-xl font-sans font-bold text-slate-800 tracking-tighter">MORGAN STANLEY</span>
<span className="text-xl font-serif text-slate-800 italic">Rothschild &amp; Co</span>
<span className="text-xl font-sans font-bold text-slate-800 tracking-tight">BLACKSTONE</span>
<span className="text-xl font-sans font-medium text-slate-800 tracking-tight">McKinsey &amp; Company</span>
<span className="text-xl font-serif text-slate-800 tracking-widest uppercase text-base mt-1">Lazard</span>
<span className="text-xl font-sans font-bold text-slate-800 tracking-tight">BAIN &amp; COMPANY</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="guide">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-white rounded-3xl p-2 border border-slate-200 shadow-2xl">
<div className="bg-slate-900 rounded-[20px] p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">

<div className="absolute -right-20 -top-20 w-64 h-64 bg-[#B11F24] rounded-full blur-[80px] opacity-30 pointer-events-none"></div>
<div className="flex-1">
<span className="text-[#ff4d52] font-mono text-xs uppercase tracking-wider mb-2 block">Ressource Gratuite</span>
<h2 className="text-3xl font-semibold text-white tracking-tighter mb-4">Guide de la Finance 2026</h2>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
                            M&amp;A, Sales &amp; Trading, Private Equity, Quant, le secteur est vaste. Rédigé par des pros, ce guide t'aidera à y voir plus clair dans ton orientation.
                        </p>
<ul className="text-left space-y-2 mb-8 inline-block">
<li className="flex items-start gap-2 text-slate-300 text-sm">
<iconify-icon className="text-[#B11F24] mt-0.5 shrink-0" icon="lucide:check-circle"></iconify-icon>
                                Plus de 20 métiers de Front Office décryptés
                            </li>
<li className="flex items-start gap-2 text-slate-300 text-sm">
<iconify-icon className="text-[#B11F24] mt-0.5 shrink-0" icon="lucide:check-circle"></iconify-icon>
                                Toutes les infos sur les process dont tu as besoin
                            </li>
</ul>
</div>
<div className="w-full md:w-80 bg-white rounded-xl p-6 shadow-lg relative z-10">
<form className="space-y-3">
<div>
<label className="sr-only">Prénom</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-[#B11F24] focus:border-transparent transition-all" placeholder="Prénom" type="text"/>
</div>
<div>
<label className="sr-only">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-[#B11F24] focus:border-transparent transition-all" placeholder="Email école" type="email"/>
</div>
<div>
<label className="sr-only">Année de diplôme</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-500 focus:ring-2 focus:ring-[#B11F24] focus:border-transparent transition-all">
<option>Année de diplôme</option>
<option>2026</option>
<option>2027</option>
<option>2028</option>
</select>
</div>
<button className="w-full bg-[#B11F24] hover:bg-[#8f191d] text-white font-medium text-sm py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2" type="button">
                                Télécharger le guide
                                <iconify-icon icon="lucide:download" width="14"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<div className="bg-red-50 border-y border-red-100 py-6 text-center">
<p className="text-sm text-[#B11F24] font-medium flex items-center justify-center gap-2 flex-wrap px-4">
<iconify-icon icon="lucide:gift" width="16"></iconify-icon>
            Satisfait de la formation ? Recommande un ami et gagne 
            <span className="bg-white px-2 py-0.5 rounded border border-red-100 shadow-sm text-slate-900 font-bold">100€</span>
</p>
</div>

<footer className="bg-white pt-20 pb-10 border-t border-slate-200 text-sm">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-[#B11F24] rounded flex items-center justify-center text-white">
<span className="font-serif-logo text-xs italic">A</span>
</div>
<span className="text-slate-900 font-bold tracking-tight">ALUMNEYE</span>
</div>
<address className="not-italic text-slate-500 mb-4 leading-relaxed">
                    66 Av. des Champs-Elysées<br/>
                    75008, Paris
                </address>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h5 className="font-semibold text-slate-900 mb-4">Nos Formations</h5>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-[#B11F24] transition-colors" href="#">Summer Session</a></li>
<li><a className="hover:text-[#B11F24] transition-colors" href="#">Winter Session</a></li>
<li><a className="hover:text-[#B11F24] transition-colors" href="#">Prépa Ecoles</a></li>
<li><a className="hover:text-[#B11F24] transition-colors" href="#">Conseil en Stratégie</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold text-slate-900 mb-4">En ligne</h5>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-[#B11F24] transition-colors" href="#">Training LBO</a></li>
<li><a className="hover:text-[#B11F24] transition-colors" href="#">Training IBD</a></li>
<li><a className="hover:text-[#B11F24] transition-colors" href="#">Ressources Gratuites</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold text-slate-900 mb-4">Légal</h5>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-[#B11F24] transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-[#B11F24] transition-colors" href="#">Mentions légales</a></li>
<li><a className="hover:text-[#B11F24] transition-colors" href="#">CGV</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2026 AlumnEye. Tous droits réservés.</p>
<p>Designed for Excellence.</p>
</div>
</footer>

    </>
  );
}
