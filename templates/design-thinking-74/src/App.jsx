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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
<div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] h-20 flex items-center justify-between">
<div className="text-xl font-medium tracking-tighter text-indigo-600">
                DESIGN<span className="text-orange-500 underline decoration-2 underline-offset-4">THINKING</span>
</div>
<div className="hidden md:flex items-center gap-[40px] text-sm font-medium">
<a className="hover:text-indigo-600 transition-colors" href="#bio">Expertise</a>
<a className="hover:text-indigo-600 transition-colors" href="#formations">Formations</a>
<a className="hover:text-indigo-600 transition-colors" href="#avis">Avis</a>
<a className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-all shadow-sm" href="#contact">Réserver un appel</a>
</div>
</div>
</nav>

<section className="pt-40 pb-24 overflow-hidden">
<div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
<div className="grid grid-cols-12 gap-[20px] items-center">
<div className="col-span-12 lg:col-span-7">
<span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium mb-6">Formation certifiante &amp; sur-mesure</span>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-8">
                        L'innovation centrée utilisateur pour <span className="text-indigo-600 italic">transformer</span> vos projets.
                    </h1>
<p className="text-lg text-slate-500 font-light mb-10 max-w-xl">
                        Apprenez les méthodologies des leaders mondiaux pour résoudre des problèmes complexes et créer des expériences mémorables.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-orange-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-orange-600 transition-all flex items-center justify-center gap-2" href="#contact">
                            Prendre rendez-vous
                            <iconify-icon icon="solar:calendar-linear"></iconify-icon>
</a>
<a className="border border-slate-200 px-8 py-4 rounded-xl font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2" href="#formations">
                            Voir les programmes
                        </a>
</div>
</div>
<div className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0">
<div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Workshop Design Thinking" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
<iconify-icon className="text-2xl" icon="solar:star-fall-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium">98% de satisfaction</p>
<p className="text-xs text-slate-400">Basé sur +200 apprenants</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-32 border-t border-slate-100 pt-16">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-10 text-center">Ils me font confiance</p>
<div className="flex flex-wrap justify-center gap-x-16 gap-y-8 opacity-40 grayscale">
<span className="text-lg font-bold tracking-tighter">CRÉDIT AGRICOLE</span>
<span className="text-lg font-bold tracking-tighter">DEUTSCHE TELEKOM</span>
<span className="text-lg font-bold tracking-tighter">CDC HABITAT</span>
<span className="text-lg font-bold tracking-tighter">VILLE DE GRENOBLE</span>
<span className="text-lg font-bold tracking-tighter">FRENCH TECH</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="bio">
<div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
<div className="grid grid-cols-12 gap-[20px] items-center">
<div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
<div className="aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden border-8 border-white shadow-lg">
<img alt="Formatrice" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
<div className="col-span-12 lg:col-span-7 lg:pl-12">
<h2 className="text-3xl font-medium tracking-tight mb-8">Plus de 10 ans à façonner des <span className="text-indigo-600">expériences significatives</span>.</h2>
<p className="text-base text-slate-600 leading-relaxed mb-6">
                        Designer CX/EX et UX/UI passionnée, j'accompagne depuis plus d'une décennie les grands groupes privés et publics dans leur transformation digitale et humaine. 
                    </p>
<p className="text-base text-slate-600 leading-relaxed mb-8">
                        Mon approche pédagogique s'appuie sur une réalité de terrain acquise auprès d'institutions comme <span className="font-medium text-slate-900">Crédit Agricole, Deutsche Telekom, et la CDC Habitat</span>. Conférencière et formatrice, je transmets mon expertise aux étudiants en Master et aux chefs de projets chevronnés.
                    </p>
<div className="grid grid-cols-2 gap-6">
<div className="p-4 bg-white rounded-xl shadow-sm">
<iconify-icon className="text-indigo-600 text-2xl mb-2" icon="solar:square-academic-cap-linear"></iconify-icon>
<p className="text-sm font-medium">Formatrice Master</p>
</div>
<div className="p-4 bg-white rounded-xl shadow-sm">
<iconify-icon className="text-indigo-600 text-2xl mb-2" icon="solar:presentation-graph-linear"></iconify-icon>
<p className="text-sm font-medium">Conférencière</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32" id="formations">
<div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl font-medium tracking-tight mb-6">Programmes de formation</h2>
<p className="text-slate-500">Des parcours immersifs pour maîtriser les outils du design stratégique, disponibles en présentiel ou à distance.</p>
</div>
<div className="grid grid-cols-12 gap-[20px]">

<div className="col-span-12 md:col-span-4 group">
<div className="h-full border border-slate-100 p-8 rounded-3xl bg-white hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all flex flex-col">
<div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:lightbulb-bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-4">Design Thinking</h3>
<p className="text-sm text-slate-500 mb-8 flex-grow leading-relaxed">Apprenez à identifier les besoins réels des utilisateurs et à prototyper des solutions innovantes rapidement.</p>
<div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-50">
<span className="text-sm font-medium text-indigo-600 uppercase">3 Jours</span>
<iconify-icon className="text-xl group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-4 group">
<div className="h-full border-2 border-indigo-600 p-8 rounded-3xl bg-indigo-600 text-white shadow-xl flex flex-col transform md:-translate-y-4">
<div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-8">
<iconify-icon className="text-2xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-4">Design Sprint</h3>
<p className="text-sm text-indigo-100 mb-8 flex-grow leading-relaxed">Une immersion totale de 5 jours pour valider des idées et résoudre des problèmes critiques en un temps record.</p>
<div className="flex items-center justify-between mt-auto pt-8 border-t border-white/20">
<span className="text-sm font-medium uppercase">6 Jours</span>
<iconify-icon className="text-xl group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-4 group">
<div className="h-full border border-slate-100 p-8 rounded-3xl bg-white hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all flex flex-col">
<div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:settings-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-4">Sur Mesure</h3>
<p className="text-sm text-slate-500 mb-8 flex-grow leading-relaxed">CX, UX, UI Design &amp; Figma. Un programme adapté à vos besoins spécifiques et à vos enjeux métiers.</p>
<div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-50">
<span className="text-sm font-medium text-orange-500 uppercase">À la carte</span>
<iconify-icon className="text-xl group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="avis">
<div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
<h2 className="text-3xl font-medium tracking-tight mb-16 text-center">Ce qu'en disent mes <span className="text-indigo-600 italic">apprenants</span></h2>
<div className="grid grid-cols-12 gap-[20px]">
<div className="col-span-12 md:col-span-6 lg:col-span-4">
<div className="p-8 bg-slate-50 rounded-2xl">
<div className="flex gap-1 text-orange-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 italic">"Une formation d'une qualité rare. La méthodologie est claire et l'application directe sur nos projets réels a fait toute la différence."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-300"></div>
<div>
<p className="text-sm font-medium">Marc Lefebvre</p>
<p className="text-xs text-slate-400">Directeur Innovation, Crédit Agricole</p>
</div>
</div>
</div>
</div>
<div className="col-span-12 md:col-span-6 lg:col-span-4">
<div className="p-8 bg-slate-50 rounded-2xl">
<div className="flex gap-1 text-orange-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 italic">"Plus qu'une formation, c'est un changement de mindset. J'utilise les outils du Design Sprint quotidiennement désormais."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-300"></div>
<div>
<p className="text-sm font-medium">Sophie Martin</p>
<p className="text-xs text-slate-400">Chef de Projet, Ville de Grenoble</p>
</div>
</div>
</div>
</div>
<div className="col-span-12 md:col-span-6 lg:col-span-4">
<div className="p-8 bg-slate-50 rounded-2xl">
<div className="flex gap-1 text-orange-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 italic">"Le sur-mesure sur Figma était parfait pour notre équipe design. On a gagné 3 mois de productivité en 3 jours."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-300"></div>
<div>
<p className="text-sm font-medium">Thomas Roux</p>
<p className="text-xs text-slate-400">Lead Designer, French Tech</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="contact">
<div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
<div className="bg-slate-900 rounded-[40px] p-12 lg:p-24 relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
<div className="relative z-10 grid grid-cols-12 gap-8 items-center text-white">
<div className="col-span-12 lg:col-span-8">
<h2 className="text-4xl font-medium tracking-tight mb-6 leading-tight">Prêt à transformer votre manière de <span className="text-orange-400">concevoir</span> ?</h2>
<p className="text-lg text-slate-400 font-light mb-0">Réservez un créneau pour discuter de vos besoins en formation ou de vos projets d'accompagnement.</p>
</div>
<div className="col-span-12 lg:col-span-4 flex lg:justify-end">
<button className="w-full lg:w-auto bg-white text-slate-900 px-10 py-5 rounded-2xl font-medium hover:bg-orange-500 hover:text-white transition-all text-base">
                            Planifier un appel libre
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="py-16 bg-white border-t border-slate-100">
<div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-xl font-medium tracking-tighter text-slate-900">
                    DESIGN<span className="text-indigo-600 underline decoration-2 underline-offset-4">THINKING</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-indigo-600 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-indigo-600 transition-colors" href="#">Instagram</a>
<a className="hover:text-indigo-600 transition-colors" href="#">Mentions légales</a>
</div>
<p className="text-sm text-slate-400">© 2024 — Tous droits réservés.</p>
</div>
</div>
</footer>

    </>
  );
}
