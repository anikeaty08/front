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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
yellow: '#DFFC54',
purple: '#E4E1FF',
pink: '#FBCFE8',
green: '#E7F7DB',
dark: '#1C1C1C',
gray: '#F5F5F5'
}
},
fontSize: {
'xxs': '0.65rem',
}
}
}
}



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
      

<nav className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-900 rounded-full"></div>
<span className="text-xl font-semibold tracking-tight">ScalTeam</span>
</div>
<div className="hidden md:flex gap-8 items-center">
<a className="hover:text-neutral-500 transition-colors text-sm font-medium" href="#">Trouvez un emploi</a>
<a className="hover:text-neutral-500 transition-colors text-sm font-medium" href="#">Entreprise</a>
<a className="hover:text-neutral-500 transition-colors text-sm font-medium" href="/#">Intérimaire</a>
<a className="hover:text-neutral-500 transition-colors text-sm font-medium" href="#">Blog</a>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-neutral-900 text-sm font-medium text-neutral-600" href="#">Inscription</a>
<button className="hover:bg-neutral-800 transition-all uppercase text-xs font-semibold text-white tracking-wide bg-neutral-900 rounded-full pt-2.5 pr-5 pb-2.5 pl-5">Espace Candidat</button>
</div>
</div>
</nav>
<main className="md:px-6 w-full max-w-[1400px] mr-auto ml-auto pt-4 pr-4 pb-20 pl-4 space-y-4">

<section className="bg-[#B0B5B9] rounded-[2rem] overflow-hidden relative min-h-[500px] flex flex-col items-center justify-center text-center p-8 md:p-16">
<div className="z-10 max-w-3xl w-full flex flex-col items-center">
<span className="uppercase text-xs font-medium text-white tracking-widest bg-white/20 border-white/30 border rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-sm">TOP#3 des agences d'intérim</span>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-6">Up your business</h1>
<p className="leading-relaxed text-lg font-normal text-neutral-100 max-w-xl mb-10">L'alliance parfaite entre technologie de pointe et accompagnement humain. ScalTeam simplifie vos recrutements et propulse votre carrière.</p>

<div className="w-full bg-white p-2 rounded-full shadow-xl shadow-neutral-900/5 flex flex-col md:flex-row items-center gap-2 md:gap-0">
<div className="flex-1 flex items-center px-4 h-12 w-full">
<svg className="lucide lucide-search w-5 h-5 text-neutral-400 mr-3" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="outline-none placeholder:text-neutral-400 text-sm font-medium text-neutral-900 bg-transparent w-full h-full" placeholder="Métier, entreprise" type="text"/>
</div>
<div className="hidden md:block w-px h-8 bg-neutral-200"></div>
<div className="flex-1 flex items-center px-4 h-12 w-full">
<svg className="lucide lucide-map-pin w-5 h-5 text-neutral-400 mr-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<input className="outline-none placeholder:text-neutral-400 text-sm font-medium text-neutral-900 bg-transparent w-full h-full" placeholder="Ville, région" type="text"/>
</div>
<button className="bg-brand-yellow px-8 h-12 rounded-full text-sm font-semibold text-neutral-900 hover:brightness-95 transition-all w-full md:w-auto shrink-0 flex items-center justify-center gap-2">
<span className="">Rechercher</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="mt-8 flex gap-4 text-white/80 text-xs font-medium">
<span className="">Populaire:</span>
<a className="underline hover:text-white" href="#">Product Design</a>
<a className="underline hover:text-white" href="#">Engineering</a>
<a className="underline hover:text-white" href="#">Télétravail</a>
</div>
</div>

<div className="absolute inset-0 z-0 opacity-30">
<img alt="Office" className="mix-blend-overlay w-full h-full object-cover" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="md:p-12 bg-white rounded-[2rem] pt-8 pr-8 pb-8 pl-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
<h3 className="text-sm font-medium text-neutral-500">Ils nous font confiance</h3>
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=32&amp;h=32"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=32&amp;h=32"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=32&amp;h=32"/>
</div>
<span className="text-xs font-semibold text-green-800 rounded-md pt-1 pr-2 pb-1 pl-2">+500 talents actifs</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 justify-center"><svg className="lucide lucide-triangle w-6 h-6 fill-current" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> <span className="font-bold text-lg tracking-tight">AcmeCorp</span></div>
<div className="flex items-center gap-2 justify-center"><svg className="lucide lucide-circle w-6 h-6 fill-current" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> <span className="font-bold text-lg tracking-tight">GlobalBank</span></div>
<div className="flex items-center gap-2 justify-center"><svg className="lucide lucide-square w-6 h-6 fill-current" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg> <span className="font-bold text-lg tracking-tight">NexusTech</span></div>
<div className="flex items-center gap-2 justify-center"><svg className="lucide lucide-hexagon w-6 h-6 fill-current" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> <span className="font-bold text-lg tracking-tight">LinearSys</span></div>
<div className="flex items-center gap-2 justify-center"><svg className="lucide lucide-gem w-6 h-6 fill-current" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg> <span className="font-bold text-lg tracking-tight">Starlight</span></div>
</div>
</section>

<section className="bg-[#F5F5F5] rounded-[2rem] p-8 md:p-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
<div className="">
<span className="uppercase block text-xs font-semibold text-neutral-400 tracking-wider mb-2">Opportunités</span>
<h2 className="md:text-4xl text-3xl font-medium text-neutral-900 tracking-tight">Les offres du moment</h2>
</div>

<div className="flex flex-wrap gap-2">
<button className="bg-neutral-900 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-neutral-800 transition-colors">All Jobs</button>
<button className="bg-white border border-neutral-200 text-neutral-600 px-4 py-2 rounded-full text-xs font-medium hover:border-neutral-300 transition-colors flex items-center gap-2">
<svg className="lucide lucide-monitor w-3 h-3" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg> Remote
                    </button>
<button className="bg-white border border-neutral-200 text-neutral-600 px-4 py-2 rounded-full text-xs font-medium hover:border-neutral-300 transition-colors flex items-center gap-2">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Full-time
                    </button>
<button className="bg-white border border-neutral-200 text-neutral-600 px-4 py-2 rounded-full text-xs font-medium hover:border-neutral-300 transition-colors flex items-center gap-2">
<svg className="lucide lucide-dollar-sign w-3 h-3" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> $100k+
                    </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-white p-6 rounded-xl border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between h-full">
<div className="">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-brand-purple rounded-lg flex items-center justify-center text-brand-dark">
<svg className="lucide lucide-figma w-5 h-5" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
</div>
<span className="text-xs font-medium text-neutral-400 bg-neutral-50 px-2 py-1 rounded">2h ago</span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-1 group-hover:text-neutral-600 transition-colors">Senior Product Designer</h3>
<p className="text-sm text-neutral-500 mb-4">LinearSys • San Francisco, CA</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 rounded border border-neutral-100 bg-neutral-50 text-xs text-neutral-600 font-medium">Full-time</span>
<span className="px-2 py-1 rounded border border-neutral-100 bg-neutral-50 text-xs text-neutral-600 font-medium">Remote Hybrid</span>
<span className="px-2 py-1 rounded border border-neutral-100 bg-neutral-50 text-xs text-neutral-600 font-medium">$140k - $180k</span>
</div>
</div>
<div className="pt-4 border-t border-neutral-100 flex justify-between items-center">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-100 border border-white flex items-center justify-center text-[10px] text-neutral-500">+3</div>
</div>
<span className="uppercase group-hover:underline text-xs font-bold text-neutral-900 tracking-wide">postulez maintenant</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between h-full">
<div className="">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center text-brand-dark">
<svg className="lucide lucide-code-2 w-5 h-5" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<span className="text-xs font-medium text-neutral-400 bg-neutral-50 px-2 py-1 rounded">5h ago</span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-1 group-hover:text-neutral-600 transition-colors">Frontend Engineer</h3>
<p className="text-sm text-neutral-500 mb-4">Stripe • New York, NY</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 rounded border border-neutral-100 bg-neutral-50 text-xs text-neutral-600 font-medium">Contract</span>
<span className="px-2 py-1 rounded border border-neutral-100 bg-neutral-50 text-xs text-neutral-600 font-medium">Remote</span>
<span className="px-2 py-1 rounded border border-neutral-100 bg-neutral-50 text-xs text-neutral-600 font-medium">$120k - $150k</span>
</div>
</div>
<div className="pt-4 border-t border-neutral-100 flex justify-between items-center">
<div className="flex -space-x-2"></div>
<span className="uppercase group-hover:underline text-xs font-bold text-neutral-900 tracking-wide">postulez maintenant</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between h-full">
<div className="">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-brand-pink rounded-lg flex items-center justify-center text-brand-dark">
<svg className="lucide lucide-megaphone w-5 h-5" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</div>
<span className="text-xs font-medium text-neutral-400 bg-neutral-50 px-2 py-1 rounded">1d ago</span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-1 group-hover:text-neutral-600 transition-colors">Marketing Manager</h3>
<p className="text-sm text-neutral-500 mb-4">Spotify • London, UK</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 rounded border border-neutral-100 bg-neutral-50 text-xs text-neutral-600 font-medium">Full-time</span>
<span className="px-2 py-1 rounded border border-neutral-100 bg-neutral-50 text-xs text-neutral-600 font-medium">On-site</span>
<span className="px-2 py-1 rounded border border-neutral-100 bg-neutral-50 text-xs text-neutral-600 font-medium">£60k - £80k</span>
</div>
</div>
<div className="flex border-neutral-100 border-t pt-4 items-center justify-between">
<div className="flex -space-x-2"></div>
<span className="uppercase group-hover:underline text-xs font-bold text-neutral-900 tracking-wide">postulez maintenant</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between h-full">
<div className="">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center text-brand-dark">
<svg className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<span className="text-xs font-medium text-neutral-400 bg-neutral-50 px-2 py-1 rounded">2d ago</span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-1 group-hover:text-neutral-600 transition-colors">Data Scientist</h3>
<p className="text-sm text-neutral-500 mb-4">Netflix • Los Gatos, CA</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 rounded border border-neutral-100 bg-neutral-50 text-xs text-neutral-600 font-medium">Full-time</span>
<span className="px-2 py-1 rounded border border-neutral-100 bg-neutral-50 text-xs text-neutral-600 font-medium">Hybrid</span>
<span className="px-2 py-1 rounded border border-neutral-100 bg-neutral-50 text-xs text-neutral-600 font-medium">$160k+</span>
</div>
</div>
<div className="flex border-neutral-100 border-t pt-4 items-center justify-between">
<div className="flex -space-x-2"></div>
<span className="uppercase group-hover:underline text-xs font-bold text-neutral-900 tracking-wide">postulez maintenant</span>
</div>
</div>
</div>
<div className="mt-8 text-center">
<button className="hover:text-neutral-600 hover:border-neutral-600 transition-all text-sm font-semibold border-neutral-900 border-b pb-0.5">Voir les 2403 offres</button>
</div>
</section>

<section className="bg-brand-dark rounded-[2rem] p-8 md:p-16 text-white">
<div className="mb-12 md:max-w-2xl">
<span className="uppercase block text-xs font-semibold text-neutral-400 tracking-wider mb-4">Notre équipe</span>
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-6">L'équipe derrière ScalTeam.</h2>
<p className="text-lg font-normal text-neutral-400">Nous sommes des passionnés de recrutement et de technologie, dédiés à votre réussite.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group">
<div className="bg-neutral-800 rounded-xl overflow-hidden mb-4 relative h-[300px]">
<img alt="Team 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
<span className="text-xs font-medium text-white">Founder</span>
</div>
</div>
<h3 className="text-lg font-medium text-white">Sarah Jenkins</h3>
<p className="text-sm text-neutral-400 mt-1 leading-relaxed">Expert in executive search with 10+ years helping tech startups scale.</p>
</div>

<div className="group">
<div className="bg-neutral-800 rounded-xl overflow-hidden mb-4 relative h-[300px]">
<img alt="Team 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
<span className="text-xs font-medium text-white">Head of Talent</span>
</div>
</div>
<h3 className="text-lg font-medium text-white">David Chen</h3>
<p className="text-sm text-neutral-400 mt-1 leading-relaxed">Specializes in engineering placements and technical recruitment strategies.</p>
</div>

<div className="group">
<div className="bg-neutral-800 rounded-xl overflow-hidden mb-4 relative h-[300px]">
<img alt="Team 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
<span className="text-xs font-medium text-white">Recruiter</span>
</div>
</div>
<h3 className="text-lg font-medium text-white">Elena Rodriguez</h3>
<p className="text-sm text-neutral-400 mt-1 leading-relaxed">Passionate about connecting creative talent with design-led organizations.</p>
</div>

<div className="group">
<div className="bg-neutral-800 rounded-xl overflow-hidden mb-4 relative h-[300px]">
<img alt="Team 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
<span className="text-xs font-medium text-white">Advisor</span>
</div>
</div>
<h3 className="text-lg font-medium text-white">Marcus Cole</h3>
<p className="text-sm text-neutral-400 mt-1 leading-relaxed">Strategic advisor for enterprise clients and bulk hiring operations.</p>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

<section className="bg-brand-yellow rounded-[2rem] p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
<div className="">
<span className="uppercase block text-xs font-semibold text-neutral-800 tracking-wider mb-4">Localisation</span>
<h2 className="text-3xl font-medium text-neutral-900 tracking-tight mb-8">Offres par villes</h2>
<div className="space-y-3">
<a className="flex items-center justify-between group border-neutral-900/10 border-b pb-3" href="#">
<span className="group-hover:translate-x-1 transition-transform text-lg font-medium text-neutral-900">Paris</span>
<span className="text-xs font-semibold bg-white/50 px-2 py-1 rounded-full text-neutral-800">420+ Jobs</span>
</a>
<a className="flex items-center justify-between group border-b border-neutral-900/10 pb-3" href="#">
<span className="group-hover:translate-x-1 transition-transform text-lg font-medium text-neutral-900">Lyon</span>
<span className="text-xs font-semibold bg-white/50 px-2 py-1 rounded-full text-neutral-800">350+ Jobs</span>
</a>
<a className="flex items-center justify-between group border-b border-neutral-900/10 pb-3" href="#">
<span className="group-hover:translate-x-1 transition-transform text-lg font-medium text-neutral-900">Marseille</span>
<span className="text-xs font-semibold bg-white/50 px-2 py-1 rounded-full text-neutral-800">210+ Jobs</span>
</a>
<a className="flex items-center justify-between group border-b border-neutral-900/10 pb-3" href="#">
<span className="group-hover:translate-x-1 transition-transform text-lg font-medium text-neutral-900">Bordeaux</span>
<span className="text-xs font-semibold bg-white/50 px-2 py-1 rounded-full text-neutral-800">180+ Jobs</span>
</a>
</div>
</div>
<div className="mt-8">
<button className="uppercase flex gap-2 text-xs font-semibold text-white tracking-wide bg-neutral-900 w-fit rounded-full pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center">Recherche Map</button>
</div>
</section>

<section className="md:p-12 flex flex-col min-h-[400px] bg-white rounded-[2rem] pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="">
<span className="uppercase block text-xs font-semibold text-neutral-400 tracking-wider mb-4">Categories</span>
<h2 className="text-3xl font-medium text-neutral-900 tracking-tight mb-8">Recherche par secteur </h2>
<div className="grid grid-cols-2 gap-4">
<a className="hover:border-brand-yellow hover:bg-neutral-50 transition-colors group border-neutral-200 border rounded-xl pt-4 pr-4 pb-4 pl-4" href="#">
<svg className="lucide lucide-cpu w-6 h-6 text-neutral-900 mb-3 group-hover:scale-110 transition-transform" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<h4 className="text-sm font-semibold text-neutral-900">Engineering</h4>
<span className="text-xs text-neutral-500">856 opportunités</span>
</a>
<a className="hover:border-brand-purple hover:bg-neutral-50 transition-colors group border-neutral-200 border rounded-xl pt-4 pr-4 pb-4 pl-4" href="#">
<svg className="lucide lucide-palette w-6 h-6 text-neutral-900 mb-3 group-hover:scale-110 transition-transform" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<h4 className="text-sm font-semibold text-neutral-900">Design</h4>
<span className="text-xs text-neutral-500">432 opportunités</span>
</a>
<a className="p-4 rounded-xl border border-neutral-200 hover:border-brand-pink hover:bg-neutral-50 transition-colors group" href="#">
<svg className="lucide lucide-trending-up w-6 h-6 text-neutral-900 mb-3 group-hover:scale-110 transition-transform" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<h4 className="text-sm font-semibold text-neutral-900">Marketing</h4>
<span className="text-xs text-neutral-500">215 opportunités</span>
</a>
<a className="p-4 rounded-xl border border-neutral-200 hover:border-brand-green hover:bg-neutral-50 transition-colors group" href="#">
<svg className="lucide lucide-briefcase w-6 h-6 text-neutral-900 mb-3 group-hover:scale-110 transition-transform" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<h4 className="text-sm font-semibold text-neutral-900">Ventes</h4>
<span className="text-xs text-neutral-500">190 opportunités</span>
</a>
</div>
</div>
<div className="mt-8">
<button className="uppercase hover:bg-neutral-50 transition-colors text-xs font-semibold text-neutral-900 tracking-wide w-fit border-neutral-200 border rounded-full pt-3 pr-6 pb-3 pl-6">Voir tous les secteurs</button>
</div>
</section>
</div>

<section className="bg-white rounded-[2rem] p-8 md:p-12 mb-4">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
<div>
<span className="uppercase block text-xs font-semibold text-neutral-400 tracking-wider mb-2">Blog &amp; News</span>
<h2 className="md:text-4xl text-3xl font-medium text-neutral-900 tracking-tight">Derniers articles</h2>
</div>
<a className="group flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-neutral-600 transition-colors" href="#">
                    Voir tout le blog 
                    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="group cursor-pointer flex flex-col gap-4" href="#">
<div className="overflow-hidden rounded-xl aspect-[4/3] relative bg-neutral-100">
<img alt="Blog 1" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-neutral-900 border border-neutral-200">Conseils Carrière</span>
</div>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs font-medium text-neutral-400">24 Oct, 2024</span>
<h3 className="text-xl font-semibold text-neutral-900 leading-tight tracking-tight group-hover:text-neutral-600 transition-colors">5 conseils pour réussir votre entretien technique</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Préparer un entretien technique peut être stressant. Découvrez nos meilleures astuces pour convaincre les recruteurs.</p>
</div>
</a>

<a className="group cursor-pointer flex flex-col gap-4" href="#">
<div className="overflow-hidden rounded-xl aspect-[4/3] relative bg-neutral-100">
<img alt="Blog 2" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&amp;w=2680&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-neutral-900 border border-neutral-200">Télétravail</span>
</div>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs font-medium text-neutral-400">18 Oct, 2024</span>
<h3 className="text-xl font-semibold text-neutral-900 leading-tight tracking-tight group-hover:text-neutral-600 transition-colors">L'avenir du travail hybride en 2025</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Analyse des tendances du marché et comment les entreprises adaptent leurs politiques de travail à distance.</p>
</div>
</a>

<a className="group cursor-pointer flex flex-col gap-4" href="#">
<div className="overflow-hidden rounded-xl aspect-[4/3] relative bg-neutral-100">
<img alt="Blog 3" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-neutral-900 border border-neutral-200">Marché</span>
</div>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs font-medium text-neutral-400">12 Oct, 2024</span>
<h3 className="text-xl font-semibold text-neutral-900 leading-tight tracking-tight group-hover:text-neutral-600 transition-colors">Les secteurs qui recrutent le plus ce trimestre</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Focus sur la Tech, la Green Economy et la Santé : où se trouvent les meilleures opportunités ?</p>
</div>
</a>
</div>
</section>

<footer className="bg-brand-dark rounded-[2rem] p-8 md:p-16 text-white overflow-hidden relative">
<div className="flex flex-col md:flex-row justify-between mb-24 gap-12">
<div className="max-w-sm">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-white rounded-full"></div>
<span className="text-xl font-semibold tracking-tight">ScalTeam</span>
</div>
<p className="leading-relaxed text-sm text-neutral-400 mb-6">Rejoignez les 500 entreprises qui ont fait confiance à ScalTeam. </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:bg-neutral-200 transition-colors" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="w-8 h-8 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:bg-neutral-200 transition-colors" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="w-8 h-8 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:bg-neutral-200 transition-colors" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
<div className="flex gap-12 md:gap-24 text-xs font-bold uppercase tracking-widest text-neutral-400">
<div className="flex flex-col gap-4">
<span className="text-white mb-2">Candidates</span>
<a className="hover:text-white transition-colors" href="#">Find Jobs</a>
<a className="hover:text-white transition-colors" href="#">Companies</a>
<a className="hover:text-white transition-colors" href="#">Career Advice</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-white mb-2">Employers</span>
<a className="hover:text-white transition-colors" href="#">Post a Job</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Hiring Solutions</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-white mb-2">Company</span>
<a className="hover:text-white transition-colors" href="#">About Us</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
</div>

<div className="flex justify-center items-center relative z-10">
<h1 className="text-[18vw] leading-none font-medium tracking-tighter text-white opacity-90 select-none">ScalTeam</h1>
</div>
<div className="border-t border-white/10 mt-12 pt-8 flex justify-between items-center text-[10px] text-neutral-500 font-medium">
<span>© 2025 ScalTeam Inc. All rights reserved.</span>
<div className="flex gap-4">
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Cookies</a>
</div>
</div>
</footer>
</main>


    </>
  );
}
