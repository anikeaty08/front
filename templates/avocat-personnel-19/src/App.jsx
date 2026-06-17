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



        lucide.createIcons();
    
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
      

<div className="fixed inset-0 -z-10 h-full w-full pointer-events-none">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_60%,transparent_100%)]"></div>


<div className="absolute -top-[10%] -right-[10%] h-[600px] w-[600px] rounded-full bg-slate-100/60 blur-[100px] mix-blend-multiply opacity-70"></div>

<div className="absolute top-[40%] -left-[10%] h-[500px] w-[500px] rounded-full bg-blue-50/40 blur-[90px] mix-blend-multiply opacity-60"></div>
</div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-white/70 border-neutral-200/60 support-backdrop-blur:bg-white/80">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl tracking-tight font-medium flex items-center gap-2 text-neutral-900" href="#">
<span className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium bg-neutral-900 text-white shadow-lg shadow-neutral-900/10">L</span>
                Laura de Bessa
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#parcours">Parcours</a>
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#expertises">Expertises</a>
<a className="text-sm font-medium px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md bg-neutral-900 text-white hover:bg-neutral-800" href="#contact">
                    Prendre RDV
                </a>
</div>
</div>
</nav>

<section className="md:pt-52 md:pb-32 fade-in pt-40 pr-6 pb-20 pl-6 relative">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 space-y-8 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium bg-white/60 backdrop-blur-sm border-neutral-200 text-neutral-600 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
        Disponible pour nouveaux dossiers
      </div>
<h1 className="md:text-6xl leading-[1.1] text-5xl font-medium tracking-tight text-neutral-900">
  Avocate au Barreau de Lyon.
</h1>
<p className="text-xl md:text-2xl text-neutral-500 font-light leading-relaxed max-w-lg">
        J'accompagne les particuliers et les entreprises dans leurs démarches juridiques avec rigueur, écoute et
        combativité.
      </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all hover:translate-y-[-2px] shadow-lg shadow-neutral-900/10 bg-neutral-900 text-white hover:bg-neutral-800" href="#contact">
          Prendre rendez-vous
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex justify-center items-center gap-2 border px-8 py-4 rounded-xl font-medium transition-all bg-white/50 backdrop-blur-sm border-neutral-200 text-neutral-700 hover:bg-white hover:border-neutral-300" href="#expertises">
          Mes domaines
        </a>
</div>
</div>
<div className="order-1 md:order-2 flex justify-center md:justify-end relative">
<div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
<div className="absolute inset-0 rounded-3xl rotate-3 bg-neutral-100/80 backdrop-blur-md"></div>
<img alt="Laura de Bessa" className="cursor-pointer w-full h-full object-cover border rounded-3xl relative shadow-2xl border-white/50" onclick="window.location.href='https://media.licdn.com/dms/image/v2/D4E03AQEvehl3tZakBg/profile-displayphoto-shrink_800_800/B4EZdlrve3HYAc-/0/1749757656409?e=1770249600&amp;v=beta&amp;t=rMmmTjSRNiLSLnlms86ER_ng50kr4wiwaRmWpwY2mGM'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/131ee073-12c3-4f57-9aa4-277b429bc584_800w.jpg"/>

<div className="absolute -bottom-6 -left-6 p-4 rounded-xl shadow-lg border flex items-center gap-3 bg-white/90 backdrop-blur-sm border-neutral-100">
<div className="p-2 rounded-lg bg-neutral-100">
<svg className="lucide lucide-scale w-6 h-6 text-slate-900" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v18"></path>
<path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path>
<path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path>
<path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path>
<path d="M7 21h10"></path>
</svg>
</div>
<div className="">
<p className="text-xs font-medium uppercase tracking-wider text-neutral-400">Localisation</p>
<p className="text-sm font-medium text-neutral-900">Lyon, France</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-neutral-100 bg-white/30 backdrop-blur-sm">
<div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-400">
<span className="text-lg font-medium">Confidentialité</span>
<span className="hidden md:block w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="text-lg font-medium">Réactivité</span>
<span className="hidden md:block w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="text-lg font-medium">Transparence des honoraires</span>
<span className="hidden md:block w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="text-lg font-medium">Expertise</span>
</div>
</div>

<section className="pt-24 pr-6 pb-24 pl-6 relative" id="parcours">
<div className="max-w-5xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-neutral-900">Parcours &amp; Formation</h2>
<p className="text-xl text-neutral-500">Une expertise construite sur des bases solides et une pratique constante.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="space-y-8">
<div className="flex items-center gap-3 mb-6">
<svg className="lucide lucide-graduation-cap w-6 h-6 text-slate-900" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<h3 className="text-2xl font-medium tracking-tight text-neutral-900">Formation</h3>
</div>

<div className="group pl-4 border-l-2 transition-colors duration-300 border-neutral-100 hover:border-neutral-900 bg-white/50 backdrop-blur-sm rounded-r-xl p-4">
<span className="text-sm font-medium mb-1 block text-neutral-400">2021 - 2022</span>
<h4 className="text-lg font-medium text-neutral-900">Certificat d'Aptitude à la Profession d'Avocat (CAPA)</h4>
<p className="text-lg text-neutral-500 mt-1">École des Avocats de la région Rhône-Alpes (EDARA)</p>
</div>

<div className="group pl-4 border-l-2 transition-colors duration-300 border-neutral-100 hover:border-neutral-900 bg-white/50 backdrop-blur-sm rounded-r-xl p-4">
<span className="text-sm font-medium mb-1 block text-neutral-400">2020 - 2021</span>
<h4 className="text-lg font-medium text-neutral-900">Master 2 Droit Privé &amp; Sciences Criminelles</h4>
<p className="text-lg text-neutral-500 mt-1">Université Jean Moulin Lyon 3</p>
</div>

<div className="group pl-4 border-l-2 transition-colors duration-300 border-neutral-100 hover:border-neutral-900 bg-white/50 backdrop-blur-sm rounded-r-xl p-4">
<span className="text-sm font-medium mb-1 block text-neutral-400">2016 - 2020</span>
<h4 className="text-lg font-medium text-neutral-900">Licence &amp; Master 1 Droit</h4>
<p className="text-lg text-neutral-500 mt-1">Faculté de Droit de Lyon</p>
</div>
</div>

<div className="space-y-8">
<div className="flex items-center gap-3 mb-6">
<svg className="lucide lucide-briefcase w-6 h-6 text-slate-900" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<h3 className="text-2xl font-medium tracking-tight text-neutral-900">Expérience</h3>
</div>

<div className="group pl-4 border-l-2 transition-colors duration-300 border-neutral-100 hover:border-neutral-900 bg-white/50 backdrop-blur-sm rounded-r-xl p-4">
<span className="text-sm font-medium mb-1 block text-neutral-400">Depuis 2023</span>
<h4 className="text-lg font-medium text-neutral-900">Avocate Collaboratrice</h4>
<p className="text-lg text-neutral-500 mt-1">Cabinet d'avocats à Lyon</p>
<p className="text-base mt-2 font-light text-neutral-400">Gestion de contentieux, rédaction d'actes, plaidoiries.</p>
</div>

<div className="group pl-4 border-l-2 transition-colors duration-300 border-neutral-100 hover:border-neutral-900 bg-white/50 backdrop-blur-sm rounded-r-xl p-4">
<span className="text-sm font-medium mb-1 block text-neutral-400">2022</span>
<h4 className="text-lg font-medium text-neutral-900">Élève-Avocate (Stage final)</h4>
<p className="text-lg text-neutral-500 mt-1">Cabinet spécialisé en droit des affaires</p>
</div>

<div className="group pl-4 border-l-2 transition-colors duration-300 border-neutral-100 hover:border-neutral-900 bg-white/50 backdrop-blur-sm rounded-r-xl p-4">
<span className="text-sm font-medium mb-1 block text-neutral-400">2021</span>
<h4 className="text-lg font-medium text-neutral-900">Stage juridictionnel</h4>
<p className="text-lg text-neutral-500 mt-1">Tribunal Judiciaire de Lyon</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white/50 border-y border-neutral-100/50 backdrop-blur-[2px]" id="expertises">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12 text-center text-neutral-900">Domaines d'intervention</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border hover:shadow-lg transition-all duration-300 group bg-white/80 backdrop-blur-sm border-neutral-200">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors bg-neutral-50">
<svg className="lucide lucide-users w-6 h-6 group-hover:text-white transition-colors text-slate-900" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-neutral-900">Droit de la Famille</h3>
<p className="text-lg text-neutral-500 leading-relaxed">
                        Divorces, séparations, gardes d'enfants. Un accompagnement humain dans les moments délicats.
                    </p>
</div>

<div className="p-8 rounded-2xl border hover:shadow-lg transition-all duration-300 group bg-white/80 backdrop-blur-sm border-neutral-200">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors bg-neutral-50">
<svg className="lucide lucide-gavel w-6 h-6 group-hover:text-white transition-colors text-slate-900" data-lucide="gavel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381"></path><path d="m16 16 6-6"></path><path d="m21.5 10.5-8-8"></path><path d="m8 8 6-6"></path><path d="m8.5 7.5 8 8"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-neutral-900">Droit Pénal</h3>
<p className="text-lg text-neutral-500 leading-relaxed">
                        Défense des auteurs et des victimes. Assistance en garde à vue et devant les juridictions.
                    </p>
</div>

<div className="p-8 rounded-2xl border hover:shadow-lg transition-all duration-300 group bg-white/80 backdrop-blur-sm border-neutral-200">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors bg-neutral-50">
<svg className="lucide lucide-file-text w-6 h-6 group-hover:text-white transition-colors text-slate-900" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-neutral-900">Droit Civil</h3>
<p className="text-lg text-neutral-500 leading-relaxed">
                        Contentieux locatifs, responsabilité civile, contrats. Résolution des litiges du quotidien.
                    </p>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 relative" id="contact">
<div className="max-w-4xl mx-auto text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-neutral-900">Prendre rendez-vous</h2>
<p className="text-xl text-neutral-500">Consultez mes disponibilités et réservez un créneau directement en ligne.</p>
</div>
<div className="max-w-5xl mx-auto rounded-2xl border shadow-xl overflow-hidden h-[700px] bg-white border-neutral-200">

<div className="calendly-inline-widget" data-processed="true" data-url="https://calendly.com/" style={{position: 'relative', minWidth: '320px', height: '700px'}}><div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div><div className="calendly-bounce3"></div></div><iframe className="" frameborder="0" height="100%" src="https://calendly.com/?embed_domain=&amp;embed_type=Inline" title="Select a Date &amp; Time - Calendly" width="100%"></iframe></div>



<div className="hidden flex flex-col items-center justify-center h-full bg-neutral-50 text-neutral-400">
<svg className="lucide lucide-calendar w-12 h-12 mb-4 opacity-50" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<p className="text-lg">Chargement du calendrier...</p>
</div>
</div>
</section>

<footer className="border-t py-16 px-6 bg-white/60 backdrop-blur-sm border-neutral-200 relative">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<span className="text-xl tracking-tight font-medium block mb-2 text-neutral-900">Laura de Bessa</span>
<p className="text-lg text-neutral-500">Avocate au Barreau de Lyon</p>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 transition-colors hover:text-neutral-900" href="mailto:contact@lauradebessa.com">
<svg className="lucide lucide-mail w-6 h-6" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
<a className="text-neutral-500 transition-colors hover:text-neutral-900" href="#">
<svg className="lucide lucide-linkedin w-6 h-6" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-neutral-500 transition-colors hover:text-neutral-900" href="tel:+33000000000">
<svg className="lucide lucide-phone w-6 h-6" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</a>
</div>
</div>
<div className="max-w-6xl mx-auto mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm border-neutral-200 text-neutral-400">
<p>© 2024 Laura de Bessa. Tous droits réservés.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-neutral-600" href="#">Mentions Légales</a>
<a className="hover:text-neutral-600" href="#">Confidentialité</a>
</div>
</div>
</footer>


    </>
  );
}
