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
      

<nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100/50 supports-[backdrop-filter]:bg-white/60">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-5 h-5 bg-slate-900 rounded-sm shadow-sm flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<span className="text-xs font-medium tracking-wide text-slate-900 uppercase">Project Pilot</span>
</div>
<div className="flex items-center gap-1 p-0.5 rounded-lg border border-slate-200/60 bg-slate-50/50">
<button className="px-3 py-1.5 text-[10px] font-medium rounded-[4px] text-slate-500 hover:text-slate-900 transition-all uppercase tracking-wide" id="btn-fr" onclick="setLang('fr')">FR</button>
<button className="px-3 py-1.5 text-[10px] font-medium rounded-[4px] bg-white shadow-sm border border-slate-100 text-slate-900 transition-all uppercase tracking-wide" id="btn-en" onclick="setLang('en')">EN</button>
<button className="px-3 py-1.5 text-[10px] font-medium rounded-[4px] text-slate-500 hover:text-slate-900 transition-all uppercase tracking-wide" id="btn-es" onclick="setLang('es')">ES</button>
</div>
</div>
</nav>

<main className="fade-in pt-16" id="content-en">

<header className="relative w-full h-[85vh] min-h-[600px] flex items-end pb-24 justify-center overflow-hidden bg-slate-900">
<div className="absolute inset-0 z-0">

<img alt="Architecture" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5c16c580-7e7c-4c69-9c85-fed8d3aad845_3840w.png" style={{}}/>

<div className="bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/10 text-slate-100 text-xs font-medium mb-8 backdrop-blur-md shadow-lg">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Reversible Urban Infrastructure
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.05] drop-shadow-sm">
                    Temporary, operated and <br/><span className="text-slate-300">institutional housing.</span>
</h1>
<p className="text-xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                    Addressing the student housing shortage in high-density urban environments through modular, transitional architecture.
                </p>
</div>
</header>

<section className="pt-32 pb-32">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
<div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-[4/3] group">
<img alt="Urban Density" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bfb698d-1581-41b8-94c8-afb28de90572_3840w.jpg"/>
<div className="bg-slate-900/10 absolute top-0 right-0 bottom-0 left-0 justify-center"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/90 backdrop-blur px-4 py-3 rounded-lg border border-white/20 inline-block">
<span className="text-xs font-medium tracking-wider text-slate-900 uppercase">Context</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">The Urban Paradox</h2>
<div className="w-12 h-[1px] bg-slate-200"></div>
<p className="text-lg leading-loose text-slate-500">
                            Major university cities face a critical shortage of student accommodation. This structural deficit places immense pressure on the residential housing market.
                        </p>
<p className="text-lg leading-loose text-slate-500">
                            Simultaneously, temporary vacant land exists within urban centers but remains underutilized due to long-term planning cycles. We bridge this gap.
                        </p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-32 pb-32">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">The Modular Solution</h2>
<div className="w-12 h-[1px] bg-slate-200"></div>
<p className="text-lg leading-loose text-slate-500">
                            We deploy high-quality, operated student housing on transitional urban land. Our approach utilizes industrialized construction to create rapid housing stock.
                        </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-3 text-slate-700">
<i className="text-slate-900 w-5 h-5" data-lucide="check-circle-2"></i>
<span>No permanent land commitment</span>
</li>
<li className="flex items-center gap-3 text-slate-700">
<i className="text-slate-900 w-5 h-5" data-lucide="check-circle-2"></i>
<span>Zero heavy public investment</span>
</li>
<li className="flex items-center gap-3 text-slate-700">
<i className="text-slate-900 w-5 h-5" data-lucide="check-circle-2"></i>
<span>Rapid deployment cycle</span>
</li>
</ul>
</div>
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-xl shadow-slate-200/50">
<img alt="Modular Interior" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99ade5f2-0936-4cac-b7f6-13cc4f12c827_1600w.png"/>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/90 backdrop-blur px-4 py-3 rounded-lg border border-white/20 inline-block">
<span className="text-xs font-medium tracking-wider text-slate-900 uppercase">Interior Concept</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-slate-100 border-b pt-32 pb-32">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Temporary</h3>
<p className="text-sm leading-relaxed text-slate-500">Infrastructure designed specifically for reversible usage on transitional land (24-36 months).</p>
</div>

<div className="p-8 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="settings-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Operated</h3>
<p className="text-sm leading-relaxed text-slate-500">Fully managed services ensuring high quality, security, and maintenance for residents.</p>
</div>

<div className="p-8 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Institutional</h3>
<p className="text-sm leading-relaxed text-slate-500">Aligned with public standards, university requirements and safety regulations.</p>
</div>

<div className="p-8 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="box" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Standardised</h3>
<p className="text-sm leading-relaxed text-slate-500">Industrialized modular production for speed, cost-efficiency and consistency.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Project Stakeholders</h2>
<p className="mt-4 text-slate-500">A collaborative ecosystem driving urban innovation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="relative h-64 rounded-xl overflow-hidden group cursor-default">
<img alt="University" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white font-medium">Universities</h3>
<p className="text-slate-300 text-sm mt-1">Providing student flow &amp; demand</p>
</div>
</div>
<div className="relative h-64 rounded-xl overflow-hidden group cursor-default">
<img alt="City Hall" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white font-medium">Local Authorities</h3>
<p className="text-slate-300 text-sm mt-1">Providing transitional land</p>
</div>
</div>
<div className="relative h-64 rounded-xl overflow-hidden group cursor-default">
<img alt="Construction" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white font-medium">Industrial Partners</h3>
<p className="text-slate-300 text-sm mt-1">Modular manufacturing</p>
</div>
</div>
<div className="relative h-64 rounded-xl overflow-hidden group cursor-default">
<img alt="Meeting" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white font-medium">Urban Innovators</h3>
<p className="text-slate-300 text-sm mt-1">Concept development</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-slate-50 rounded-full blur-3xl -z-10 opacity-50"></div>
<div className="max-w-xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-sm font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Active Pilot Phase
                </div>
<h2 className="text-4xl font-medium tracking-tight text-slate-900 mb-6">Let's build the future.</h2>
<p className="text-lg text-slate-500 mb-10 leading-relaxed">
                    The project is currently in its pilot phase. We are actively seeking exploratory discussions with public institutions and private partners.
                </p>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-200 transition-all transform hover:-translate-y-0.5" href="mailto:contact@project.eu">
<i className="w-4 h-4" data-lucide="mail"></i>
                    Get in touch
                </a>
</div>
</section>
</main>

<main className="hidden fade-in pt-16" id="content-fr">

<header className="relative w-full h-[85vh] min-h-[600px] flex items-end pb-24 justify-center overflow-hidden bg-slate-900">
<div className="absolute inset-0 z-0">
<img alt="Architecture" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/10 text-slate-100 text-xs font-medium mb-8 backdrop-blur-md shadow-lg">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Infrastructure Urbaine Réversible
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.05] drop-shadow-sm">
                    Logement étudiant temporaire, <br/><span className="text-slate-300">opéré et institutionnel.</span>
</h1>
<p className="text-xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                    Répondre à la pénurie de logements étudiants en milieu urbain dense grâce à une architecture modulaire et transitoire.
                </p>
</div>
</header>

<section className="py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-[4/3] group">
<img alt="Densité Urbaine" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/10"></div>
</div>
<div className="order-1 lg:order-2 space-y-8">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Le Paradoxe Urbain</h2>
<div className="w-12 h-[1px] bg-slate-200"></div>
<p className="text-lg leading-loose text-slate-500">
                            Les grandes villes universitaires font face à une pénurie critique de logements. Ce déficit structurel met une pression immense sur le marché résidentiel.
                        </p>
<p className="text-lg leading-loose text-slate-500">
                            Simultanément, du foncier temporairement vacant existe en centre-ville mais reste sous-utilisé. Nous comblons cet écart.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">La Solution Modulaire</h2>
<div className="w-12 h-[1px] bg-slate-200"></div>
<p className="text-lg leading-loose text-slate-500">
                            Nous déployons des logements étudiants de haute qualité sur des terrains en transition. Notre approche utilise la construction industrialisée.
                        </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-3 text-slate-700">
<i className="text-slate-900 w-5 h-5" data-lucide="check-circle-2"></i>
<span>Pas d'engagement foncier permanent</span>
</li>
<li className="flex items-center gap-3 text-slate-700">
<i className="text-slate-900 w-5 h-5" data-lucide="check-circle-2"></i>
<span>Zéro investissement public lourd</span>
</li>
<li className="flex items-center gap-3 text-slate-700">
<i className="text-slate-900 w-5 h-5" data-lucide="check-circle-2"></i>
<span>Cycle de déploiement rapide</span>
</li>
</ul>
</div>
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-xl shadow-slate-200/50">
<img alt="Intérieur Modulaire" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-32 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-8 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Temporaire</h3>
<p className="text-sm leading-relaxed text-slate-500">Infrastructure conçue pour un usage réversible (24-36 mois).</p>
</div>
<div className="p-8 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="settings-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Opéré</h3>
<p className="text-sm leading-relaxed text-slate-500">Services gérés assurant qualité, sécurité et maintenance.</p>
</div>
<div className="p-8 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Institutionnel</h3>
<p className="text-sm leading-relaxed text-slate-500">Aligné avec les standards publics et universitaires.</p>
</div>
<div className="p-8 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="box" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Standardisé</h3>
<p className="text-sm leading-relaxed text-slate-500">Production modulaire industrialisée pour la rapidité.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Les Parties Prenantes</h2>
<p className="mt-4 text-slate-500">Un écosystème collaboratif pour l'innovation urbaine.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="relative h-64 rounded-xl overflow-hidden group cursor-default">
<img alt="Université" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white font-medium">Universités</h3>
<p className="text-slate-300 text-sm mt-1">Flux étudiants &amp; Demande</p>
</div>
</div>
<div className="relative h-64 rounded-xl overflow-hidden group cursor-default">
<img alt="Mairie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white font-medium">Collectivités</h3>
<p className="text-slate-300 text-sm mt-1">Foncier de transition</p>
</div>
</div>
<div className="relative h-64 rounded-xl overflow-hidden group cursor-default">
<img alt="Construction" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white font-medium">Industriels</h3>
<p className="text-slate-300 text-sm mt-1">Production modulaire</p>
</div>
</div>
<div className="relative h-64 rounded-xl overflow-hidden group cursor-default">
<img alt="Réunion" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white font-medium">Innovateurs</h3>
<p className="text-slate-300 text-sm mt-1">Développement de concept</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-slate-50 rounded-full blur-3xl -z-10 opacity-50"></div>
<div className="max-w-xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-sm font-medium mb-8">
<span className="relative flex h-2 w-2">
</span></div></div></section></main>
    </>
  );
}
