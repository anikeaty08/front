import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
background: '#F8F9FC', // Very light cool grey/white
surface: '#FFFFFF',
brand: {
magenta: '#F000FF',
purple: '#6666FF',
cyan: '#00E0FF',
pink: '#FF99CC',
dark: '#0f172a'
}
},
backgroundImage: {
'grid-pattern': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.03)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
'gradient-brand': 'linear-gradient(135deg, #F000FF 0%, #6666FF 100%)',
},
boxShadow: {
'glow': '0 0 40px -10px rgba(240, 0, 255, 0.15)',
'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
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
      

<div className="fixed inset-0 z-0 bg-grid-pattern opacity-100 pointer-events-none"></div>

<div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{animationDuration: '8s'}}></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-magenta/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{animationDuration: '10s'}}></div>

<nav className="fixed top-0 w-full z-50 glass">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-heading font-semibold text-lg flex items-center gap-3 hover:opacity-80 transition-opacity" href="#">

<div className="flex items-center gap-1">
<div className="w-8 h-8 bg-brand-magenta rounded-sm shadow-sm"></div>
<div className="logo-grid">
<div className="logo-sq bg-brand-purple"></div>
<div className="logo-sq bg-brand-cyan"></div>
<div className="logo-sq bg-blue-500"></div>
<div className="logo-sq bg-brand-pink"></div>
</div>
</div>
<span className="font-bold tracking-tight text-slate-900">Over The Growth</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-slate-600 text-sm font-medium hover:text-brand-purple transition-colors" href="#methode">Notre Méthode</a>
<a className="text-slate-600 text-sm font-medium hover:text-brand-purple transition-colors" href="#vision">Vision</a>
<a className="group relative px-5 py-2.5 rounded-full overflow-hidden bg-slate-900 text-white text-xs font-semibold shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 transition-all" href="#contact">
<span className="relative z-10 flex items-center gap-2">
                        Parler à un expert
                        <i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</span>
<div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</a>
</div>
<button className="md:hidden text-slate-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative z-10 pt-40 pb-24 md:pt-52 md:pb-32 px-6 overflow-hidden">
<div className="max-w-5xl mx-auto text-center relative">

<div className="absolute -left-12 top-0 w-12 h-12 bg-brand-cyan/20 rounded-lg rotate-12 blur-sm animate-bounce" style={{animationDuration: '3s'}}></div>
<div className="absolute -right-12 bottom-20 w-16 h-16 bg-brand-magenta/20 rounded-xl -rotate-6 blur-sm animate-bounce" style={{animationDuration: '4s'}}></div>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-semibold mb-8 shadow-sm animate-fade-in hover:border-brand-purple/30 hover:shadow-md transition-all cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-magenta opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-magenta"></span>
</span>
                Optimisation Revenue Operations B2B
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-slate-900 mb-8 leading-[1.05] animate-fade-in delay-100">
                Structurez votre <br className="hidden md:block"/>
<span className="text-gradient-brand font-bold">croissance B2B</span>
</h1>
<p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in delay-200">
                Transformez vos prospects en clients grâce à une méthodologie data-driven.
                <span className="text-slate-800 font-medium">Capture, Engage, Automatize, Scale.</span>
</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300">
<a className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 hover:scale-[1.02] transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2 group" href="#methode">
                    Découvrir notre méthode
                    <i className="w-4 h-4 group-hover:translate-y-1 transition-transform" data-lucide="arrow-down"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm flex items-center justify-center gap-2" href="#contact">
<i className="w-4 h-4 text-brand-magenta" data-lucide="bar-chart-2"></i>
                    Audit gratuit
                </a>
</div>
</div>

<div className="mt-24 max-w-4xl mx-auto relative animate-fade-in delay-300">
<div className="-bottom-1 bg-gradient-to-b from-transparent to-background h-32 z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="grid grid-cols-4 gap-4 md:gap-8">

<div className="flex flex-col items-center gap-4 group cursor-default">
<div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-300 w-full origin-left group-hover:bg-brand-dark transition-colors duration-500"></div>
</div>
<div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-card group-hover:-translate-y-2 transition-transform duration-300">
<i className="w-5 h-5 text-slate-400 group-hover:text-brand-dark transition-colors" data-lucide="target"></i>
</div>
<span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-brand-dark transition-colors">Capture</span>
</div>

<div className="flex flex-col items-center gap-4 group cursor-default">
<div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-300 w-full origin-left group-hover:bg-brand-magenta transition-colors duration-500"></div>
</div>
<div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-card group-hover:-translate-y-2 transition-transform duration-300">
<i className="w-5 h-5 text-slate-400 group-hover:text-brand-magenta transition-colors" data-lucide="message-square"></i>
</div>
<span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-brand-magenta transition-colors">Engage</span>
</div>

<div className="flex flex-col items-center gap-4 group cursor-default">
<div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-300 w-full origin-left group-hover:bg-brand-cyan transition-colors duration-500"></div>
</div>
<div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-card group-hover:-translate-y-2 transition-transform duration-300">
<i className="w-5 h-5 text-slate-400 group-hover:text-brand-cyan transition-colors" data-lucide="zap"></i>
</div>
<span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-brand-cyan transition-colors">Automatize</span>
</div>

<div className="flex flex-col items-center gap-4 group cursor-default">
<div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-300 w-full origin-left group-hover:bg-brand-purple transition-colors duration-500"></div>
</div>
<div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-card group-hover:-translate-y-2 transition-transform duration-300">
<i className="w-5 h-5 text-slate-400 group-hover:text-brand-purple transition-colors" data-lucide="trending-up"></i>
</div>
<span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-brand-purple transition-colors">Scale</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-semibold text-heading tracking-tight mb-8">
                    Pourquoi l'outbound classique ne suffit plus
                </h2>
<div className="space-y-8 text-lg text-slate-600 leading-relaxed">
<p>
                        Le "spray and pray" est mort. Les boîtes de réception sont saturées, et les décideurs sont devenus imperméables aux approches génériques.
                    </p>
<div className="p-6 rounded-2xl bg-red-50 border border-red-100 text-red-700 flex gap-5 items-start shadow-sm">
<div className="bg-white p-2 rounded-lg shadow-sm text-red-500">
<i className="w-5 h-5" data-lucide="alert-triangle"></i>
</div>
<p className="text-base font-medium">Résultat : des équipes Sales frustrées, un CAC qui explose, et un pipeline imprévisible.</p>
</div>
</div>
</div>
<div className="relative">

<div className="absolute -inset-4 bg-gradient-to-tr from-brand-cyan/20 to-brand-magenta/20 rounded-[2rem] blur-2xl opacity-60 animate-pulse"></div>
<div className="relative glass-card rounded-3xl p-10 hover-lift">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-lg">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900">L'approche Over The Growth</h3>
</div>
<div className="space-y-4">
<p className="text-slate-600 leading-relaxed">
                            Nous remplaçons l'intuition par la <span className="text-slate-900 font-bold bg-brand-cyan/10 px-1 rounded">Data</span>.
                        </p>
<p className="text-slate-600 leading-relaxed">
                            Nous remplaçons le volume par la <span className="text-slate-900 font-bold bg-brand-magenta/10 px-1 rounded">Pertinence</span>.
                        </p>
<p className="text-slate-600 leading-relaxed">
                            Nous construisons une machine de croissance qui <span className="text-slate-900 font-bold bg-brand-purple/10 px-1 rounded">Scale</span>.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="methode">
<div className="max-w-3xl mx-auto text-center mb-20">
<h2 className="text-3xl md:text-5xl font-semibold text-heading tracking-tight mb-6">
                L’excellence opérationnelle
            </h2>
<p className="text-xl text-slate-500">
                4 piliers pour transformer votre acquisition.
            </p>
</div>

<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-brand-dark/20 shadow-card hover-lift relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-dark/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="icon-box w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6 shadow-lg shadow-slate-900/10">
<i className="w-7 h-7" data-lucide="crosshair"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Capture</h3>
<p className="text-sm text-slate-500 leading-relaxed">Identifier votre vrai marché, prioriser les bons comptes, enrichir la donnée.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-brand-magenta/20 shadow-card hover-lift relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-magenta/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="icon-box w-14 h-14 rounded-2xl bg-brand-magenta text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-magenta/20">
<i className="w-7 h-7" data-lucide="message-circle"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Engage</h3>
<p className="text-sm text-slate-500 leading-relaxed">Créer des interactions qui comptent avec des messages ultra-personnalisés.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-brand-cyan/20 shadow-card hover-lift relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="icon-box w-14 h-14 rounded-2xl bg-brand-cyan text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-cyan/20">
<i className="w-7 h-7" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Automatize</h3>
<p className="text-sm text-slate-500 leading-relaxed">Workflows intelligents et CRM impeccable pour gagner en efficacité.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-brand-purple/20 shadow-card hover-lift relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="icon-box w-14 h-14 rounded-2xl bg-brand-purple text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-purple/20">
<i className="w-7 h-7" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Scale</h3>
<p className="text-sm text-slate-500 leading-relaxed">Recrutement, formation et intégration d'IA pour une croissance autonome.</p>
</div>
</div>
</section>

<section className="py-12 px-6 max-w-7xl mx-auto space-y-8">

<div className="group bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200 shadow-card relative overflow-hidden transition-all hover:border-slate-300">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-brand opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity duration-700"></div>
<div className="grid md:grid-cols-12 gap-10 relative z-10">
<div className="md:col-span-4 flex flex-col justify-between">
<div>
<div className="text-6xl font-bold text-slate-100 mb-4 select-none">01</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6">
                            Capture
                        </div>
<h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">Ciblage &amp; Data</h3>
<p className="text-slate-500 text-lg">Concentrez vos efforts là où le revenu se joue. Finis les leads hors cible.</p>
</div>
</div>
<div className="md:col-span-8 grid sm:grid-cols-2 gap-4">
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all">
<div className="flex items-center gap-3 mb-3 text-slate-900 font-semibold">
<i className="w-5 h-5 text-slate-400" data-lucide="users"></i>
                            ICP &amp; TAM
                        </div>
<p className="text-sm text-slate-500">Définition précise de votre marché adressable.</p>
</div>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all">
<div className="flex items-center gap-3 mb-3 text-slate-900 font-semibold">
<i className="w-5 h-5 text-slate-400" data-lucide="database"></i>
                            Enrichissement
                        </div>
<p className="text-sm text-slate-500">Waterfall enrichment pour emails et téléphones vérifiés.</p>
</div>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 col-span-1 sm:col-span-2 hover:bg-white hover:shadow-md transition-all">
<div className="flex items-center gap-3 mb-3 text-slate-900 font-semibold">
<i className="w-5 h-5 text-slate-400" data-lucide="filter"></i>
                            Scoring &amp; Intent
                        </div>
<p className="text-sm text-slate-500">Détection des signaux d'achat pour contacter au bon moment (levées de fonds, recrutements, techno installée).</p>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200 shadow-card relative overflow-hidden transition-all hover:border-brand-magenta/30">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-magenta/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-magenta/10 transition-colors duration-700"></div>
<div className="grid md:grid-cols-12 gap-10 relative z-10">
<div className="md:col-span-4 flex flex-col justify-between">
<div>
<div className="text-6xl font-bold text-brand-magenta/10 mb-4 select-none">02</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-magenta/10 text-brand-magenta text-xs font-bold uppercase tracking-wider mb-6">
                            Engage
                        </div>
<h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">Conversations</h3>
<p className="text-slate-500 text-lg">Des séquences multicanales qui génèrent des réponses, pas du spam.</p>
</div>
</div>
<div className="md:col-span-8 grid sm:grid-cols-2 gap-4">
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all group-hover:border-brand-magenta/10">
<div className="flex items-center gap-3 mb-3 text-slate-900 font-semibold">
<i className="w-5 h-5 text-brand-magenta" data-lucide="mail"></i>
                            Cold Emailing
                        </div>
<p className="text-sm text-slate-500">Infrastructure dédiée et copywriting orienté douleur/bénéfice.</p>
</div>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all group-hover:border-brand-magenta/10">
<div className="flex items-center gap-3 mb-3 text-slate-900 font-semibold">
<i className="w-5 h-5 text-brand-magenta" data-lucide="linkedin"></i>
                            LinkedIn Automation
                        </div>
<p className="text-sm text-slate-500">Approche sociale soft pour nurturer vos prospects.</p>
</div>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 col-span-1 sm:col-span-2 hover:bg-white hover:shadow-md transition-all group-hover:border-brand-magenta/10">
<div className="flex items-center gap-3 mb-3 text-slate-900 font-semibold">
<i className="w-5 h-5 text-brand-magenta" data-lucide="video"></i>
                            Vidéo &amp; Personnalisation
                        </div>
<p className="text-sm text-slate-500">Utilisation de l'IA pour générer des assets personnalisés à grande échelle.</p>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-card relative overflow-hidden hover-lift">
<div className="absolute top-0 right-0 p-20 bg-brand-cyan/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-6">
                        Automatize
                    </div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">Systèmes &amp; Ops</h3>
<p className="text-slate-500 mb-8">Connectez vos outils. Synchronisez votre CRM. Ne perdez plus aucune donnée.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-brand-cyan" data-lucide="check-circle-2"></i> HubSpot / Salesforce Setup
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-brand-cyan" data-lucide="check-circle-2"></i> Make / Zapier Workflows
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-brand-cyan" data-lucide="check-circle-2"></i> Reporting Automatisé
                        </li>
</ul>
</div>
</div>
<div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-card relative overflow-hidden hover-lift">
<div className="absolute top-0 right-0 p-20 bg-brand-purple/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider mb-6">
                        Scale
                    </div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">Formation &amp; IA</h3>
<p className="text-slate-500 mb-8">Faites monter vos équipes en compétence et intégrez les dernières technologies.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-brand-purple" data-lucide="check-circle-2"></i> Playbooks de vente
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-brand-purple" data-lucide="check-circle-2"></i> Sales AI Agents
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-brand-purple" data-lucide="check-circle-2"></i> Coaching Hebdomadaire
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-12 px-6">
<div className="max-w-7xl mx-auto rounded-[2.5rem] bg-slate-900 overflow-hidden relative shadow-2xl shadow-slate-900/20 group">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-brand opacity-20 rounded-full blur-[100px] group-hover:opacity-30 transition-opacity duration-1000"></div>
<div className="relative z-10 p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
<div className="max-w-xl">
<h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">Prêt à accélérer ?</h3>
<p className="text-slate-300 text-lg">Si vous avez déjà un Product-Market Fit, nous avons la machine pour le faire savoir au monde entier.</p>
</div>
<div className="flex-shrink-0">
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-xl text-base font-bold transition-all transform group-hover:scale-105 shadow-xl" href="#contact">
                        Lancer la machine
                        <i className="ml-2 w-5 h-5 text-brand-magenta" data-lucide="rocket"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="vision">
<div className="max-w-4xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-heading tracking-tight mb-6">
                Pourquoi OTG ?
            </h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Pas de magie, juste de la rigueur et les meilleurs outils du marché.
            </p>
</div>
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-3xl shadow-card border border-slate-100 text-center hover-lift">
<div className="w-16 h-16 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 rotate-3">
<i className="w-8 h-8" data-lucide="pie-chart"></i>
</div>
<h4 className="text-lg font-bold text-slate-900 mb-2">Data-Driven</h4>
<p className="text-sm text-slate-500">Nous ne prenons aucune décision sans données tangibles.</p>
</div>
<div className="bg-white p-8 rounded-3xl shadow-card border border-slate-100 text-center hover-lift">
<div className="w-16 h-16 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 -rotate-3">
<i className="w-8 h-8" data-lucide="layers"></i>
</div>
<h4 className="text-lg font-bold text-slate-900 mb-2">Scalable</h4>
<p className="text-sm text-slate-500">Des infrastructures construites pour gérer la croissance.</p>
</div>
<div className="bg-white p-8 rounded-3xl shadow-card border border-slate-100 text-center hover-lift">
<div className="w-16 h-16 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 rotate-3">
<i className="w-8 h-8" data-lucide="award"></i>
</div>
<h4 className="text-lg font-bold text-slate-900 mb-2">Expert</h4>
<p className="text-sm text-slate-500">Une équipe sénior dédiée à votre performance.</p>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-slate-200 relative bg-white" id="contact">
<div className="max-w-3xl mx-auto text-center">
<div className="w-20 h-20 mx-auto bg-gradient-brand rounded-3xl mb-10 rotate-12 shadow-2xl shadow-brand-magenta/30 flex items-center justify-center">
<i className="w-10 h-10 text-white -ml-1 mt-1" data-lucide="send"></i>
</div>
<h2 className="text-4xl md:text-6xl font-bold text-heading tracking-tight mb-8">
                On en discute ?
            </h2>
<p className="text-xl text-slate-500 mb-10">
                Réservez un appel de découverte de 30 minutes. Sans engagement.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-full text-base font-bold hover:bg-slate-800 transition-all hover:scale-105 shadow-xl shadow-slate-900/20">
<span className="flex items-center gap-3">
<i data-lucide="calendar"></i>
                        Réserver un créneau
                    </span>
</button>
<button className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-700 rounded-full text-base font-bold hover:bg-slate-50 transition-all hover:border-slate-300">
<span className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-mail" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                        Nous écrire
                    </span>
</button>
</div>
</div>
</section>

<footer className="py-12 px-6 bg-slate-50 border-t border-slate-200 text-sm text-slate-500">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
<div className="w-6 h-6 bg-brand-magenta rounded-sm"></div>
                Over The Growth
            </div>
<div className="flex gap-8 font-medium">
<a className="hover:text-brand-magenta transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-brand-magenta transition-colors" href="#">Politique de confidentialité</a>
<a className="hover:text-brand-magenta transition-colors" href="#">LinkedIn</a>
</div>
<div className="opacity-60">
                © 2024 Over The Growth. Paris.
            </div>
</div>
</footer>



    </>
  );
}
