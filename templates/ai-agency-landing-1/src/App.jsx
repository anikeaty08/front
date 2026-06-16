import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



      const modal = document.getElementById('contactModal');
      const modalContent = modal.querySelector('.modal-content');

      function openModal() {
          modal.classList.remove('opacity-0', 'pointer-events-none');
          modalContent.classList.remove('scale-95', 'translate-y-4');
          modalContent.classList.add('scale-100', 'translate-y-0');
          document.body.style.overflow = 'hidden';
      }

      function closeModal() {
          modal.classList.add('opacity-0', 'pointer-events-none');
          modalContent.classList.add('scale-95', 'translate-y-4');
          modalContent.classList.remove('scale-100', 'translate-y-0');
          document.body.style.overflow = '';
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-4 md:px-6 py-4">
<div className="max-w-7xl mx-auto glass-panel rounded-2xl px-6 py-3 flex items-center justify-between shadow-sm">
<a className="flex items-center gap-2 group" href="#">
<div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center text-white transition-transform group-hover:rotate-12 shadow-lg shadow-indigo-500/20">
<iconify-icon icon="solar:infinity-bold" width="20"></iconify-icon>
</div>
<span className="font-bold text-lg tracking-tight">NexusAI</span>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-black transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-black transition-colors" href="#work">Réalisations</a>
<a className="text-sm font-medium text-slate-600 hover:text-black transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-slate-600 hover:text-black transition-colors" href="#pricing">Tarifs</a>
<a className="text-sm font-medium text-slate-600 hover:text-black transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-3">
<button className="bg-black text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 group" onclick="openModal()">
<span className="hidden sm:inline">Estimer mon projet</span>
<span className="sm:hidden">Estimer</span>
<iconify-icon className="group-hover:rotate-12 transition-transform" icon="solar:phone-calling-linear"></iconify-icon>
</button>
<button className="lg:hidden p-2 text-slate-600" onclick="document.getElementById('mobileMenu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-white z-[90] hidden pt-24 px-6" id="mobileMenu">
<div className="flex flex-col gap-6 text-xl font-semibold">
<a href="#services" onclick="document.getElementById('mobileMenu').classList.add('hidden')">Services</a>
<a href="#work" onclick="document.getElementById('mobileMenu').classList.add('hidden')">Réalisations</a>
<a href="#pricing" onclick="document.getElementById('mobileMenu').classList.add('hidden')">Tarifs</a>
<a href="#faq" onclick="document.getElementById('mobileMenu').classList.add('hidden')">FAQ</a>
</div>
</div>

<main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10 overflow-hidden">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="flex-1 text-center lg:text-left relative z-20">
<div className="inline-flex animate-enter items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold uppercase tracking-widest text-slate-600 mb-8 shadow-sm">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            2 créneaux disponibles Février
          </div>
<h1 className="animate-enter delay-100 text-5xl md:text-7xl tracking-tight text-slate-900 leading-[1.05] mb-6 text-balance font-bold">
            Transformez votre business avec
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">l'Intelligence Artificielle.</span>
</h1>
<p className="animate-enter delay-200 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 text-balance">
            Nous concevons des solutions IA sur-mesure : SaaS, Automations, Apps Mobiles et Workflows intelligents qui boostent votre productivité de <span className="font-bold text-black bg-yellow-100 px-1">300%</span>.
          </p>
<div className="animate-enter delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
<button className="bg-black text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20" onclick="openModal()">
              Lancer mon projet IA
              <iconify-icon className="text-yellow-400" icon="solar:stars-minimalistic-bold" width="20"></iconify-icon>
</button>
<a className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full text-base font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2" href="#work">
              Voir les réalisations
              <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>

<div className="animate-enter delay-500 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-6 border-t border-slate-200/60">
<div className="flex items-center gap-2">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-sm font-bold text-slate-900">4.9/5 <span className="text-slate-500 font-normal">(32 avis)</span></span>
</div>
<div className="hidden sm:block w-px h-8 bg-slate-200"></div>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;h=64&amp;fit=crop"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&amp;h=64&amp;fit=crop"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&amp;h=64&amp;fit=crop"/>
</div>
<span className="text-sm text-slate-600">Trusted by <span className="font-bold text-slate-900">50+ startups</span></span>
</div>
</div>
</div>

<div className="flex-1 w-full max-w-[600px] animate-enter delay-200 h-[500px] flex items-center justify-center relative perspective-[1000px]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] mesh-gradient blur-3xl rounded-full opacity-40 animate-pulse-glow"></div>

<div className="relative w-full bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 flex flex-col z-20 animate-float overflow-hidden">

<div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-widest">Nexus AI Agent v2.0</div>
</div>

<div className="p-6 space-y-6 bg-slate-50/50 min-h-[300px]">

<div className="flex justify-end">
<div className="bg-black text-white px-5 py-3 rounded-2xl rounded-tr-none text-sm max-w-[80%] shadow-lg">
                        Comment optimiser mes ventes avec l'IA ?
                    </div>
</div>

<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/30">
<iconify-icon className="text-white" icon="solar:stars-minimalistic-bold" width="20"></iconify-icon>
</div>
<div className="bg-white border border-slate-100 px-5 py-4 rounded-2xl rounded-tl-none text-sm max-w-[90%] shadow-sm">
<p className="mb-3 text-slate-600">J'analyse vos données CRM...</p>
<div className="bg-slate-50 border border-slate-200 rounded-xl p-3 mb-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-bold text-slate-500">QUALIFIED LEADS</span>
<span className="text-xs text-green-600 font-bold">+184%</span>
</div>
<div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[75%]"></div>
</div>
</div>
<p className="text-slate-800 font-medium">Suggestion :</p>
<p className="text-slate-600 typing-effect w-0">Implémenter un agent RAG pour automatiser le nurturing.</p>
</div>
</div>
</div>

<div className="absolute -right-6 top-20 bg-white p-3 rounded-xl shadow-lg border border-slate-100 rotate-12 z-30">
<iconify-icon icon="logos:openai-icon" width="28"></iconify-icon>
</div>
<div className="absolute -left-4 bottom-20 bg-white p-3 rounded-xl shadow-lg border border-slate-100 -rotate-6 z-30">
<iconify-icon icon="logos:python" width="28"></iconify-icon>
</div>
<div className="absolute right-10 bottom-10 bg-white p-3 rounded-xl shadow-lg border border-slate-100 rotate-3 z-30">
<iconify-icon icon="logos:react" width="28"></iconify-icon>
</div>
</div>
</div>
</div>
</main>

<div className="w-full py-10 border-y border-slate-200 bg-white relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10"></div>
<div className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Ils nous font confiance</div>
<div className="flex w-[200%] animate-marquee items-center group hover:pause">

<div className="flex w-1/2 justify-around items-center px-12 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">

<div className="text-xl font-bold font-serif flex items-center gap-2"><iconify-icon icon="solar:globus-bold"></iconify-icon> AcmeAI</div>
<div className="text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:bolt-bold"></iconify-icon> BoltFlow</div>
<div className="text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:shield-bold"></iconify-icon> SecureData</div>
<div className="text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:graph-new-bold"></iconify-icon> MetricScale</div>
<div className="text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:layers-minimalistic-bold"></iconify-icon> LayerTech</div>
</div>

<div className="flex w-1/2 justify-around items-center px-12 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
<div className="text-xl font-bold font-serif flex items-center gap-2"><iconify-icon icon="solar:globus-bold"></iconify-icon> AcmeAI</div>
<div className="text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:bolt-bold"></iconify-icon> BoltFlow</div>
<div className="text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:shield-bold"></iconify-icon> SecureData</div>
<div className="text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:graph-new-bold"></iconify-icon> MetricScale</div>
<div className="text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:layers-minimalistic-bold"></iconify-icon> LayerTech</div>
</div>
</div>
</div>

<section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Vos concurrents utilisent déjà l'IA.
              <br/>
<span className="font-serif italic font-medium text-slate-500">Et vous ?</span>
</h2>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">

<div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm flex gap-4 items-start group hover:border-red-200 transition-colors">
<div className="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center shrink-0">
<iconify-icon icon="solar:clock-circle-bold" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-bold text-slate-900 mb-1">Processus manuels chronophages</h3>
<p className="text-sm text-slate-500">Vos équipes perdent 40% de leur temps sur des tâches répétitives sans valeur ajoutée.</p>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm flex gap-4 items-start group hover:border-red-200 transition-colors">
<div className="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center shrink-0">
<iconify-icon icon="solar:database-bold" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-bold text-slate-900 mb-1">Données inexploitées</h3>
<p className="text-sm text-slate-500">Vos bases de connaissances dorment alors qu'elles pourraient générer du revenu.</p>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm flex gap-4 items-start group hover:border-red-200 transition-colors">
<div className="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center shrink-0">
<iconify-icon icon="solar:wad-of-money-bold" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-bold text-slate-900 mb-1">Coûts opérationnels explosifs</h3>
<p className="text-sm text-slate-500">Recruter pour scaler coûte cher. L'IA permet de scaler sans multiplier les coûts.</p>
</div>
</div>
</div>

<div className="relative bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[2.5rem] p-10 text-white overflow-hidden h-full flex flex-col justify-center">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="relative z-10">
<div className="w-16 h-16 bg-indigo-500/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/30">
<iconify-icon className="text-indigo-400" icon="solar:magic-stick-3-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-3xl font-bold mb-4">La Solution NexusAI</h3>
<p className="text-indigo-200 text-lg mb-8">Nos solutions IA automatisent 80% de vos tâches. Libérez votre équipe pour qu'elle se concentre sur ce qui compte vraiment.</p>
<button className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors inline-flex items-center gap-2" onclick="openModal()">
                        Auditer mon business
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-600 blur-[80px] opacity-50 rounded-full"></div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16">
<span className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-2 block">Nos Expertises</span>
<h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Solutions IA 360°</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

<div className="md:col-span-2 row-span-2 bg-slate-50 rounded-[2rem] p-8 md:p-10 border border-slate-200 relative overflow-hidden group hover:border-indigo-300 transition-all">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-indigo-600">
<iconify-icon icon="solar:rocket-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3">Plateformes SaaS Intelligentes</h3>
<p className="text-slate-500 max-w-md">Développement complet d'applications web avec IA générative intégrée : chatbots avancés, analyse prédictive, génération de contenu dynamique.</p>
</div>
<div className="flex gap-2 mt-8">
<span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600">Next.js</span>
<span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600">OpenAI API</span>
<span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600">Supabase</span>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 border border-slate-200 relative overflow-hidden group hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-4">
<iconify-icon icon="solar:refresh-circle-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-2">Automations &amp; Workflows</h3>
<p className="text-slate-500 text-sm mb-4">Connectez vos outils et automatisez avec n8n, Make et LLMs.</p>
<div className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">
<iconify-icon icon="solar:graph-up-bold"></iconify-icon> ROI: +400%
            </div>
</div>

<div className="bg-white rounded-[2rem] p-8 border border-slate-200 relative overflow-hidden group hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4">
<iconify-icon icon="solar:smartphone-2-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-2">Apps Mobiles IA-Native</h3>
<p className="text-slate-500 text-sm">iOS &amp; Android avec fonctionnalités IA embarquées (On-device ML).</p>
</div>

<div className="md:col-span-1 bg-slate-900 text-white rounded-[2rem] p-8 border border-slate-800 relative overflow-hidden flex flex-col justify-center group">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-indigo-900 opacity-50"></div>
<div className="relative z-10">
<iconify-icon className="mb-4 text-indigo-400" icon="solar:code-square-bold" width="32"></iconify-icon>
<h3 className="text-xl font-bold mb-2">IA Sur-Mesure</h3>
<p className="text-slate-400 text-sm">Fine-tuning de modèles, RAG (Retrieval Augmented Generation), Agents autonomes.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0B0F19] text-white py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold mb-6">Stack Technologique de pointe</h2>
<p className="text-slate-400">Nous utilisons les outils les plus performants pour garantir vélocité et robustesse.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

<div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-default">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100 invert" icon="logos:openai-icon" width="40"></iconify-icon>
<span className="text-sm font-medium text-slate-400 group-hover:text-white">OpenAI</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-default">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100" icon="logos:python" width="40"></iconify-icon>
<span className="text-sm font-medium text-slate-400 group-hover:text-white">Python</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-default">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100 text-white" icon="simple-icons:langchain" width="40"></iconify-icon>
<span className="text-sm font-medium text-slate-400 group-hover:text-white">LangChain</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-default">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100" icon="logos:pinecone-icon" width="40"></iconify-icon>
<span className="text-sm font-medium text-slate-400 group-hover:text-white">Pinecone</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-default">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100 invert" icon="logos:nextjs-icon" width="40"></iconify-icon>
<span className="text-sm font-medium text-slate-400 group-hover:text-white">Next.js</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-default">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100" icon="logos:supabase-icon" width="40"></iconify-icon>
<span className="text-sm font-medium text-slate-400 group-hover:text-white">Supabase</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-default">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100 text-[#FF6D5A]" icon="simple-icons:n8n" width="40"></iconify-icon>
<span className="text-sm font-medium text-slate-400 group-hover:text-white">n8n</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-default">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100 invert" icon="logos:aws" width="40"></iconify-icon>
<span className="text-sm font-medium text-slate-400 group-hover:text-white">AWS</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-default">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100" icon="logos:react" width="40"></iconify-icon>
<span className="text-sm font-medium text-slate-400 group-hover:text-white">React Native</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-default">
<iconify-icon className="grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100 invert" icon="logos:vercel-icon" width="40"></iconify-icon>
<span className="text-sm font-medium text-slate-400 group-hover:text-white">Vercel</span>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 md:px-12" id="work">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Portfolio</span>
<h2 className="text-3xl md:text-5xl font-bold text-slate-900">Nos dernières réalisations IA</h2>
</div>
<a className="text-slate-600 font-medium hover:text-black flex items-center gap-2 group" href="#">
                Voir tous les projets 
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="space-y-24">

<div className="grid lg:grid-cols-2 gap-12 items-center group">
<div className="order-2 lg:order-1 relative rounded-2xl bg-slate-100 p-8 md:p-12 aspect-[4/3] overflow-hidden group-hover:shadow-xl transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white/50"></div>

<div className="relative w-full h-full bg-white rounded-lg shadow-2xl border border-slate-200 p-4 flex flex-col transform group-hover:scale-[1.02] transition-transform duration-500 origin-top">
<div className="border-b pb-4 mb-4 flex gap-2">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
</div>
<div className="flex gap-4">
<div className="w-1/3 bg-slate-50 h-32 rounded"></div>
<div className="w-2/3 space-y-2">
<div className="h-4 bg-slate-100 rounded w-full"></div>
<div className="h-4 bg-slate-100 rounded w-5/6"></div>
<div className="h-20 bg-indigo-50 rounded w-full mt-4 p-2 text-[10px] text-indigo-800 font-mono">
                                    AI Analyzing lead potential: 98%<br/>Recommended action: Call now.
                                </div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-6">
<div className="flex gap-2">
<span className="px-3 py-1 border border-slate-200 rounded-lg text-xs font-medium text-slate-600">B2B SaaS</span>
<span className="px-3 py-1 border border-slate-200 rounded-lg text-xs font-medium text-slate-600">ChatGPT-4</span>
</div>
<h3 className="text-3xl font-bold text-slate-900">AI Sales Assistant</h3>
<p className="text-slate-600 text-lg">Intégration d'un chatbot IA dans un CRM existant pour qualifier les leads automatiquement 24/7.</p>
<div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100">
<div>
<div className="text-2xl font-bold text-slate-900">+180%</div>
<div className="text-xs text-slate-500">Leads qualifiés</div>
</div>
<div>
<div className="text-2xl font-bold text-slate-900">-60%</div>
<div className="text-xs text-slate-500">Temps de réponse</div>
</div>
</div>
<button className="text-black font-semibold border-b-2 border-black pb-1 hover:text-indigo-600 hover:border-indigo-600 transition-colors inline-flex items-center gap-1">
                        Voir l'étude de cas <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-12 items-center group">
<div className="space-y-6">
<div className="flex gap-2">
<span className="px-3 py-1 border border-slate-200 rounded-lg text-xs font-medium text-slate-600">Legal Tech</span>
<span className="px-3 py-1 border border-slate-200 rounded-lg text-xs font-medium text-slate-600">RAG System</span>
</div>
<h3 className="text-3xl font-bold text-slate-900">Smart Document Processor</h3>
<p className="text-slate-600 text-lg">Système d'intelligence documentaire capable d'analyser, résumer et extraire les données clés de milliers de contrats juridiques.</p>
<div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100">
<div>
<div className="text-2xl font-bold text-slate-900">2000</div>
<div className="text-xs text-slate-500">Docs / jour</div>
</div>
<div>
<div className="text-2xl font-bold text-slate-900">99.8%</div>
<div className="text-xs text-slate-500">Précision</div>
</div>
</div>
<button className="text-black font-semibold border-b-2 border-black pb-1 hover:text-indigo-600 hover:border-indigo-600 transition-colors inline-flex items-center gap-1">
                        Voir l'étude de cas <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
<div className="relative rounded-2xl bg-slate-900 p-8 md:p-12 aspect-[4/3] overflow-hidden group-hover:shadow-xl transition-all duration-500">

<div className="w-full h-full bg-[#1e1e1e] rounded-lg shadow-2xl p-6 font-mono text-xs text-green-400 overflow-hidden opacity-90">
<span className="text-purple-400">const</span> analyzeContract = <span className="text-yellow-300">async</span> (doc) =&gt; {<br/>
                          <span className="text-purple-400">const</span> embedding = <span className="text-blue-400">await</span> ai.embed(doc);<br/>
                          <span className="text-purple-400">const</span> risks = <span className="text-blue-400">await</span> pinecone.query(embedding);<br/>
                          <span className="text-gray-500">// Detecting high risk clauses...</span><br/>
                          <span className="text-purple-400">return</span> risks.filter(r =&gt; r.score &gt; 0.9);<br/>
                        }
                     </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="process">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">De l'idée au lancement <br/><span className="text-indigo-600">en 6 semaines</span></h2>
</div>

<div className="relative max-w-4xl mx-auto">
<div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-slate-200 md:left-1/2 md:-ml-px"></div>

<div className="relative flex items-center mb-12 md:justify-between">
<div className="flex flex-col md:w-[45%] md:items-end md:text-right pl-20 md:pl-0 order-1">
<h3 className="font-bold text-xl">Discovery Call (30 min)</h3>
<p className="text-slate-500 text-sm mt-1">Nous analysons vos besoins et la faisabilité technique.</p>
</div>
<div className="absolute left-0 w-14 h-14 bg-white border-4 border-indigo-100 rounded-full flex items-center justify-center text-indigo-600 z-10 md:left-1/2 md:-translate-x-1/2">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
</div>
<div className="hidden md:block md:w-[45%] order-2"></div>
</div>

<div className="relative flex items-center mb-12 md:justify-between flex-row-reverse md:flex-row">
<div className="hidden md:block md:w-[45%]"></div>
<div className="absolute left-0 w-14 h-14 bg-white border-4 border-indigo-100 rounded-full flex items-center justify-center text-indigo-600 z-10 md:left-1/2 md:-translate-x-1/2">
<iconify-icon icon="solar:document-add-bold" width="24"></iconify-icon>
</div>
<div className="flex flex-col md:w-[45%] md:items-start md:text-left pl-20 md:pl-0 w-full">
<h3 className="font-bold text-xl">Audit &amp; Specs (J+3)</h3>
<p className="text-slate-500 text-sm mt-1">Cahier des charges détaillé et architecture IA.</p>
</div>
</div>

<div className="relative flex items-center mb-12 md:justify-between">
<div className="flex flex-col md:w-[45%] md:items-end md:text-right pl-20 md:pl-0 order-1">
<h3 className="font-bold text-xl">Design &amp; Proto (J+10)</h3>
<p className="text-slate-500 text-sm mt-1">Maquettes Figma cliquables pour valider l'UX.</p>
</div>
<div className="absolute left-0 w-14 h-14 bg-white border-4 border-indigo-100 rounded-full flex items-center justify-center text-indigo-600 z-10 md:left-1/2 md:-translate-x-1/2">
<iconify-icon icon="solar:palette-bold" width="24"></iconify-icon>
</div>
<div className="hidden md:block md:w-[45%] order-2"></div>
</div>

<div className="relative flex items-center mb-12 md:justify-between flex-row-reverse md:flex-row">
<div className="hidden md:block md:w-[45%]"></div>
<div className="absolute left-0 w-14 h-14 bg-white border-4 border-indigo-100 rounded-full flex items-center justify-center text-indigo-600 z-10 md:left-1/2 md:-translate-x-1/2">
<iconify-icon icon="solar:code-bold" width="24"></iconify-icon>
</div>
<div className="flex flex-col md:w-[45%] md:items-start md:text-left pl-20 md:pl-0 w-full">
<h3 className="font-bold text-xl">Développement (3-4 sem)</h3>
<p className="text-slate-500 text-sm mt-1">Sprints agiles, intégration IA, Code propre.</p>
</div>
</div>

<div className="relative flex items-center md:justify-between">
<div className="flex flex-col md:w-[45%] md:items-end md:text-right pl-20 md:pl-0 order-1">
<h3 className="font-bold text-xl">Lancement</h3>
<p className="text-slate-500 text-sm mt-1">Déploiement, formation et maintenance.</p>
</div>
<div className="absolute left-0 w-14 h-14 bg-indigo-600 border-4 border-indigo-200 rounded-full flex items-center justify-center text-white z-10 md:left-1/2 md:-translate-x-1/2 shadow-lg shadow-indigo-500/30">
<iconify-icon icon="solar:rocket-bold" width="24"></iconify-icon>
</div>
<div className="hidden md:block md:w-[45%] order-2"></div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 md:px-12" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Investissez dans votre <span className="font-serif italic text-indigo-600">croissance IA</span></h2>
<p className="text-slate-500">Transparence totale. Pas de coûts cachés.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-indigo-200 transition-colors">
<div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Starter</div>
<h3 className="text-2xl font-bold mb-4">POC / Prototype IA</h3>
<div className="text-3xl font-bold mb-1">Dès 5k€</div>
<div className="text-sm text-slate-400 mb-6">Livré en 2 semaines</div>
<button className="w-full py-3 rounded-xl border border-slate-200 font-bold hover:bg-slate-50 transition-colors mb-8" onclick="openModal()">Découvrir</button>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex gap-2"><iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon> Workshop d'idéation</li>
<li className="flex gap-2"><iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon> Prototype cliquable</li>
<li className="flex gap-2"><iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon> Preuve de concept IA</li>
</ul>
</div>

<div className="bg-[#0B0F19] text-white rounded-[2rem] p-8 border border-slate-800 shadow-2xl relative ring-4 ring-indigo-500/10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-lg shadow-indigo-600/20">
                    Plus Populaire
                </div>
<div className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-2">Growth</div>
<h3 className="text-2xl font-bold mb-4">MVP SaaS ou App</h3>
<div className="text-3xl font-bold mb-1">12k€ - 25k€</div>
<div className="text-sm text-slate-400 mb-6">4 à 8 semaines</div>
<button className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors mb-8 shadow-lg shadow-indigo-900/50" onclick="openModal()">Démarrer</button>
<ul className="space-y-3 text-sm text-slate-300">
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Design System complet</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Dev Front &amp; Back + BDD</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Intégration IA avancée</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Paiements (Stripe)</li>
</ul>
</div>

<div className="bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-indigo-200 transition-colors">
<div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Scale</div>
<h3 className="text-2xl font-bold mb-4">Produit &amp; Équipe</h3>
<div className="text-3xl font-bold mb-1">Sur devis</div>
<div className="text-sm text-slate-400 mb-6">Engagement mensuel</div>
<button className="w-full py-3 rounded-xl border border-slate-200 font-bold hover:bg-slate-50 transition-colors mb-8" onclick="openModal()">Nous contacter</button>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex gap-2"><iconify-icon className="text-slate-900" icon="solar:check-circle-bold"></iconify-icon> Développeurs Seniors dédiés</li>
<li className="flex gap-2"><iconify-icon className="text-slate-900" icon="solar:check-circle-bold"></iconify-icon> Audit &amp; Refonte</li>
<li className="flex gap-2"><iconify-icon className="text-slate-900" icon="solar:check-circle-bold"></iconify-icon> Maintenance 24/7</li>
</ul>
</div>
</div>
</section>

<section className="bg-indigo-50 border-y border-indigo-100 py-16">
<div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">
<div className="md:col-span-2">
<h3 className="text-2xl font-bold text-indigo-900 mb-2">Guide Gratuit : 10 cas d'usage IA</h3>
<p className="text-indigo-700 mb-6">Découvrez comment nos clients économisent en moyenne 20h/semaine grâce à l'automatisation. PDF de 15 pages.</p>
<div className="flex gap-2">
<input className="bg-white border border-indigo-200 rounded-xl px-4 py-2 w-full max-w-xs focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="votre@email.com" type="email"/>
<button className="bg-indigo-600 text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-indigo-700 whitespace-nowrap">Télécharger</button>
</div>
</div>
<div className="hidden md:flex justify-center">

<div className="w-32 h-44 bg-indigo-600 rounded-r-lg shadow-xl relative transform -rotate-6 border-l-4 border-indigo-800 flex items-center justify-center text-center p-2">
<div className="text-white font-serif font-bold text-lg leading-tight">THE AI<br/>GUIDE</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6" id="faq">
<h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
<div className="space-y-4">

<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 cursor-pointer group" onclick="this.classList.toggle('active')">
<div className="flex justify-between items-center">
<h3 className="font-bold text-slate-900">Combien coûte un projet IA ?</h3>
<iconify-icon className="transition-transform group-[.active]:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="hidden group-[.active]:block mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
            Un POC démarre à 5k€. Un MVP complet se situe entre 12k€ et 25k€. Le coût dépend de la complexité des modèles IA utilisés et des intégrations nécessaires.
          </div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 cursor-pointer group" onclick="this.classList.toggle('active')">
<div className="flex justify-between items-center">
<h3 className="font-bold text-slate-900">Suis-je propriétaire du code ?</h3>
<iconify-icon className="transition-transform group-[.active]:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="hidden group-[.active]:block mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
            Oui, à 100%. Une fois le projet livré et payé, nous vous transférons la propriété intellectuelle complète ainsi que l'accès au repository GitHub.
          </div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 cursor-pointer group" onclick="this.classList.toggle('active')">
<div className="flex justify-between items-center">
<h3 className="font-bold text-slate-900">Mes données sont-elles sécurisées ?</h3>
<iconify-icon className="transition-transform group-[.active]:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="hidden group-[.active]:block mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
            Absolument. Nous signons un NDA avant de commencer. Nous utilisons des environnements sécurisés (Enterprise Grade) et ne partageons jamais vos données pour entraîner des modèles publics.
          </div>
</div>
</div>
</section>

<div className="px-4 pb-4">
<footer className="bg-[#050505] rounded-[2.5rem] pt-20 pb-10 px-6 md:px-12 text-center relative overflow-hidden text-white max-w-7xl mx-auto">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.2),transparent_50%)]"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl mb-6 tracking-tight font-bold">Prêt à intégrer l'IA dans votre business ?</h2>
<p className="text-slate-400 mb-10 text-lg">Obtenez une estimation gratuite et un plan d'action en 24h. Sans engagement.</p>
<button className="w-full md:w-auto bg-white text-black px-10 py-5 rounded-full text-lg font-bold hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10 inline-flex items-center justify-center gap-3" onclick="openModal()">
            Lancer mon projet IA
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-500">
<span className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon> Devis gratuit</span>
<span className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon> Réponse 24h</span>
</div>
</div>
<div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-white" icon="solar:infinity-bold"></iconify-icon>
<span>© 2025 NexusAI Studio</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Mentions légales</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>
</div>

<a className="fixed bottom-6 right-6 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-2xl z-40 hover:scale-110 transition-transform cursor-pointer border-2 border-white/20" href="#" onclick="openModal()">
<iconify-icon icon="solar:chat-round-dots-bold" width="24"></iconify-icon>
</a>

<div className="fixed inset-0 z-[1000] flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300 px-4" id="contactModal">
<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>
<div className="bg-white w-full max-w-lg rounded-[2rem] p-8 relative z-10 modal-content transform scale-95 translate-y-4 shadow-2xl transition-all duration-300 max-h-[90vh] overflow-y-auto no-scrollbar">
<button className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors" onclick="closeModal()">
<iconify-icon className="text-slate-600" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="mb-6">
<h3 className="text-2xl font-bold text-slate-900">Lancez votre projet</h3>
<p className="text-slate-500 text-sm">Réponse garantie sous 24h.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Merci ! Nous vous recontacterons sous 24h.'); closeModal();">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Prénom</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all" placeholder="Jean" required="" type="text" />
</input></div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all" placeholder="hello@company.com" required="" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Type de projet</label>
<div className="grid grid-cols-2 gap-2">
<label className="cursor-pointer">
<input className="peer sr-only custom-radio" name="type" type="radio"/>
<div className="border border-slate-200 rounded-xl py-3 px-2 text-center text-sm font-medium text-slate-600 transition-all hover:bg-slate-50 flex items-center justify-center gap-2">
<iconify-icon icon="solar:rocket-bold-duotone"></iconify-icon> SaaS IA
                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only custom-radio" name="type" type="radio"/>
<div className="border border-slate-200 rounded-xl py-3 px-2 text-center text-sm font-medium text-slate-600 transition-all hover:bg-slate-50 flex items-center justify-center gap-2">
<iconify-icon icon="solar:smartphone-2-bold-duotone"></iconify-icon> Mobile
                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only custom-radio" name="type" type="radio"/>
<div className="border border-slate-200 rounded-xl py-3 px-2 text-center text-sm font-medium text-slate-600 transition-all hover:bg-slate-50 flex items-center justify-center gap-2">
<iconify-icon icon="solar:refresh-circle-bold-duotone"></iconify-icon> Automation
                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only custom-radio" name="type" type="radio"/>
<div className="border border-slate-200 rounded-xl py-3 px-2 text-center text-sm font-medium text-slate-600 transition-all hover:bg-slate-50 flex items-center justify-center gap-2">
<iconify-icon icon="solar:question-circle-bold-duotone"></iconify-icon> Autre
                </div>
</label>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Budget</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all text-slate-700">
<option>Moins de 5k€ (POC)</option>
<option selected="">5k€ - 15k€ (MVP)</option>
<option>15k€ - 30k€</option>
<option>+30k€</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Description</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all resize-none" placeholder="Décrivez votre idée..." rows="3"></textarea>
</div>
<div className="flex gap-2">
<button className="flex-1 py-2 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2" type="button">
<iconify-icon icon="solar:microphone-2-linear" width="16"></iconify-icon> Vocal (bientôt)
             </button>
<button className="flex-1 py-2 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2" type="button">
<iconify-icon icon="solar:paperclip-linear" width="16"></iconify-icon> Joindre fichier
             </button>
</div>
<button className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-[0.98] mt-4 flex items-center justify-center gap-2 shadow-lg" type="submit">
            Envoyer ma demande
            <iconify-icon icon="solar:paper-plane-linear" width="18"></iconify-icon>
</button>
<p className="text-center text-[10px] text-slate-400 mt-2">100% Confidentiel - NDA inclus.</p>
</form>
</div>
</div>



    </>
  );
}
