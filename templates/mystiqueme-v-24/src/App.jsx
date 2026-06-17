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
      

<nav className="glass-nav fixed w-full z-50 top-0 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-[#cc6ef5] iconify--lucide" data-height="20" data-icon="lucide:sparkles" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<span className="text-slate-900 font-semibold tracking-tight text-sm uppercase">Mystiquement-vôtre</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-[#cc6ef5] transition-colors" href="#accueil">Accueil</a>
<a className="hover:text-[#cc6ef5] transition-colors" href="#services">Soins</a>
<a className="hover:text-[#cc6ef5] transition-colors" href="#apropos">La Chamane</a>
<a className="hover:text-[#cc6ef5] transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-[#cc6ef5] text-white text-xs font-medium px-4 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-[#cc6ef5]/30 hover:shadow-lg" href="#contact">
                Prendre rendez-vous
                <svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>

<button className="md:hidden text-slate-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<section className="overflow-hidden pt-32 pb-20 relative" id="accueil">
<div className="hero-blob"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cc6ef5]/10 border border-[#cc6ef5]/20 text-[#cc6ef5] text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cc6ef5] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#cc6ef5]"></span>
</span>
                    Consultations ouvertes
                </div>
<h1 className="text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                    Révélez votre lumière <br/>
<span className="text-[#cc6ef5]">intérieure.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                    Soins traditionnels chamaniques adaptés au monde moderne. Retrouvez l'harmonie, libérez vos blocages et reconnectez-vous à votre essence profonde.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-2 bg-[#cc6ef5] hover:bg-[#b55bd9] text-white text-sm font-medium px-6 py-3 rounded-lg transition-all shadow-lg shadow-[#cc6ef5]/20" href="#services">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
                        Réserver un soin
                    </a>
<a className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-[#cc6ef5] text-slate-700 hover:text-[#cc6ef5] text-sm font-medium px-6 py-3 rounded-lg transition-all" href="#apropos">
                        En savoir plus
                    </a>
</div>
<div className="pt-8 flex items-center gap-4 text-xs text-slate-400 font-medium">
<div className="flex -space-x-2">
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-white grayscale opacity-70" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-white grayscale opacity-70" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-white grayscale opacity-70" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;h=100" style={{}}/>
</div>
<p>Recommandé par plus de 80 âmes</p>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-[#cc6ef5] rounded-2xl rotate-3 opacity-10 blur-xl"></div>
<img alt="Spiritual atmosphere" className="hover:grayscale-0 transition-all duration-700 ease-in-out w-full h-[600px] object-cover border-slate-100 border rounded-2xl relative shadow-2xl grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a1fda316-495e-4b9b-ba8c-a58ff7bbcfac_1600w.jpg"/>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-start gap-3">
<div className="bg-green-100 p-2 rounded-lg text-green-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:quote" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<p className="text-xs text-slate-600 italic">"Une expérience transformatrice. Je me sens enfin alignée."</p>
<p className="text-xs font-semibold text-slate-900 mt-2">Sophie M.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Mes Soins Chamaniques</h2>
<p className="text-slate-500">Une approche holistique pour guérir le corps, l'âme et l'esprit à travers des rituels ancestraux.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#cc6ef5]/50 transition-all hover:shadow-xl hover:shadow-[#cc6ef5]/10">
<div className="h-48 mb-6 overflow-hidden rounded-lg relative">
<div className="group-hover:bg-transparent transition-all bg-slate-900/10 z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Nettoyage" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed039bfd-c578-4a79-a95c-7fed9256e733_1600w.jpg"/>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="bg-[#cc6ef5]/10 text-[#cc6ef5] p-2 rounded-lg">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wind" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<h3 className="text-lg font-semibold text-slate-900">Nettoyage Énergétique</h3>
</div>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Libération des charges émotionnelles lourdes et purification de votre aura pour retrouver légèreté et clarté d'esprit.
                    </p>
<div className="flex items-center justify-between mt-auto">
<span className="text-slate-900 font-medium">80€ <span className="text-xs text-slate-400 font-normal">/ séance</span></span>
<button className="text-[#cc6ef5] text-sm font-medium hover:underline">Réserver</button>
</div>
</div>

<div className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#cc6ef5]/50 transition-all hover:shadow-xl hover:shadow-[#cc6ef5]/10 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#cc6ef5] text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg z-20">Populaire</div>
<div className="h-48 mb-6 overflow-hidden rounded-lg relative">
<div className="group-hover:bg-transparent transition-all bg-slate-900/10 z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Recouvrement" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d241bc1-cd16-410c-9bbd-1701ce5448ae_800w.jpg" style={{}}/>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="bg-[#cc6ef5]/10 text-[#cc6ef5] p-2 rounded-lg">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:heart-handshake" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<h3 className="text-lg font-semibold text-slate-900">Recouvrement d'Âme</h3>
</div>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Rituel profond visant à réintégrer des parts de soi perdues suite à des traumatismes, pour une sensation d'unité retrouvée.
                    </p>
<div className="flex items-center justify-between mt-auto">
<span className="text-slate-900 font-medium">120€ <span className="text-xs text-slate-400 font-normal">/ séance</span></span>
<button className="text-[#cc6ef5] text-sm font-medium hover:underline">Réserver</button>
</div>
</div>

<div className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#cc6ef5]/50 transition-all hover:shadow-xl hover:shadow-[#cc6ef5]/10">
<div className="h-48 mb-6 overflow-hidden rounded-lg relative">
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all z-10"></div>
<img alt="Guidance" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="bg-[#cc6ef5]/10 text-[#cc6ef5] p-2 rounded-lg">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:compass" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</span>
<h3 className="text-lg font-semibold text-slate-900">Guidance Spirituelle</h3>
</div>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Séance de canalisation pour obtenir des réponses claires sur votre chemin de vie et débloquer des situations complexes.
                    </p>
<div className="flex items-center justify-between mt-auto">
<span className="text-slate-900 font-medium">90€ <span className="text-xs text-slate-400 font-normal">/ séance</span></span>
<button className="text-[#cc6ef5] text-sm font-medium hover:underline">Réserver</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100" id="apropos">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-slate-900 rounded-3xl p-8 md:p-16 relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-[#cc6ef5] rounded-full filter blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
<div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Entre tradition et monde moderne</h2>
<div className="space-y-4 text-slate-300 text-sm leading-relaxed">
<p>
                                Je suis la fondatrice de <span className="text-[#cc6ef5] font-medium">Mystiquement-vôtre</span>. Mon parcours m'a menée des sagesses ancestrales aux réalités de notre vie contemporaine.
                            </p>
<p>
                                Ma mission n'est pas de vous sortir du monde, mais de vous aider à y vivre avec plus de conscience, de force et de sérénité. J'utilise le tambour, le chant et les plantes sacrées (en fumigation) comme outils de reconnexion.
                            </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl">
<svg aria-hidden="true" className="iconify text-[#cc6ef5] mb-2 iconify--lucide" data-icon="lucide:award" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
<div className="text-white font-medium text-lg">10+ Années</div>
<div className="text-slate-400 text-xs">D'expérience pratique</div>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl">
<svg aria-hidden="true" className="iconify text-[#cc6ef5] mb-2 iconify--lucide" data-icon="lucide:users" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<div className="text-white font-medium text-lg">500+</div>
<div className="text-slate-400 text-xs">Personnes accompagnées</div>
</div>
</div>
</div>
<div className="order-1 md:order-2 flex justify-center">
<div className="relative w-72 h-80 md:w-80 md:h-96">
<div className="absolute inset-0 border-2 border-[#cc6ef5]/30 rounded-full transform translate-x-4 translate-y-4"></div>
<img alt="Portrait Chamane" className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a6d24fe-f7ad-4b20-9e97-fb1f5bcba075_800w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="contact">
<div className="max-w-3xl mx-auto px-6 text-center">
<span className="text-[#cc6ef5] font-medium text-sm tracking-wide uppercase">Contactez-moi</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mt-2 mb-8">Prêt(e) à commencer votre voyage ?</h2>
<div className="grid md:grid-cols-2 gap-4 mb-12">
<a className="flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-[#cc6ef5] hover:bg-[#cc6ef5]/5 transition-all group" href="tel:0695533745">
<span className="bg-slate-100 p-2 rounded-full group-hover:bg-white transition-colors">
<svg aria-hidden="true" className="iconify text-slate-600 group-hover:text-[#cc6ef5] iconify--lucide" data-icon="lucide:phone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<span className="text-slate-700 font-medium">06 95 53 37 45</span>
</a>
<a className="flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-[#cc6ef5] hover:bg-[#cc6ef5]/5 transition-all group" href="mailto:mapetiteagence.com83@gmail.com">
<span className="bg-slate-100 p-2 rounded-full group-hover:bg-white transition-colors">
<svg aria-hidden="true" className="iconify text-slate-600 group-hover:text-[#cc6ef5] iconify--lucide" data-icon="lucide:mail" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</span>
<span className="text-slate-700 font-medium">mapetiteagence.com83@gmail.com</span>
</a>
</div>

<form className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 text-left">
<div className="grid md:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-2">Nom complet</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#cc6ef5] focus:ring-1 focus:ring-[#cc6ef5] transition-all" placeholder="Votre nom" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-2">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#cc6ef5] focus:ring-1 focus:ring-[#cc6ef5] transition-all" placeholder="votre@email.com" type="email"/>
</div>
</div>
<div className="mb-6">
<label className="block text-xs font-semibold text-slate-700 mb-2">Type de soin souhaité</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#cc6ef5] focus:ring-1 focus:ring-[#cc6ef5] transition-all text-slate-600">
<option>Nettoyage Énergétique</option>
<option>Recouvrement d'Âme</option>
<option>Guidance Spirituelle</option>
<option>Autre demande</option>
</select>
</div>
<div className="mb-6">
<label className="block text-xs font-semibold text-slate-700 mb-2">Message (Optionnel)</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#cc6ef5] focus:ring-1 focus:ring-[#cc6ef5] transition-all h-24 resize-none" placeholder="Dites-m'en plus sur vos besoins..."></textarea>
</div>
<button className="w-full bg-slate-900 hover:bg-[#cc6ef5] text-white font-medium py-3 rounded-lg transition-all duration-300" type="button">
                    Envoyer ma demande
                </button>
</form>
</div>
</section>
<footer className="border-t border-slate-100 bg-slate-50 pt-12 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-[#cc6ef5] iconify--lucide" data-icon="lucide:sparkles" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<span className="text-slate-900 font-semibold tracking-tight text-xs uppercase">Mystiquement-vôtre</span>
</div>
<div className="text-xs text-slate-400">
                © 2023 Mystiquement-vôtre. Tous droits réservés.
            </div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-[#cc6ef5] transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-slate-400 hover:text-[#cc6ef5] transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
</footer>

    </>
  );
}
