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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#fef2f2',
100: '#fee2e2',
500: '#ef4444',
600: '#dc2626',
700: '#b91c1c',
900: '#7f1d1d',
},
orange: {
500: '#f97316' // For Orange Money
},
blue: {
500: '#3b82f6' // For Wave
}
},
animation: {
'scroll': 'scroll 40s linear infinite',
'blob': 'blob 7s infinite',
'hologram': 'hologram 3s infinite linear',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
hologram: {
'0%': { backgroundPosition: '0% 0%' },
'100%': { backgroundPosition: '200% 0%' },
}
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // Theme Toggle Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
        });

        // Simple Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
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
      

<nav className="fixed top-0 w-full z-50 border-b dark:border-zinc-800 dark:bg-zinc-950/80 backdrop-blur-md border-zinc-200 bg-white/80">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-8">

<div className="flex items-center gap-2">
<div className="text-xl font-bold tracking-tighter rounded pt-1 pr-1 pb-1 pl-1 text-white bg-black" style={{}}>RC</div>
<span className="font-semibold tracking-tight hidden sm:block">RETECHCI</span>
</div>

<div className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
<a className="dark:hover:text-white transition-colors hover:text-zinc-900" href="#directory">Annuaire</a>
<a className="dark:hover:text-white transition-colors hover:text-zinc-900" href="#locations">Lieux</a>
<a className="dark:hover:text-white transition-colors hover:text-zinc-900" href="#jobs">Emploi &amp; Ressources</a>
<a className="hover:text-brand-500 transition-colors flex items-center gap-2" href="#live">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-brand-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                        Live
                    </a>
</div>
</div>
<div className="flex items-center gap-3">
<button className="p-2 rounded-full dark:hover:bg-zinc-800 transition-colors hover:bg-zinc-100" id="theme-toggle">
<svg className="lucide lucide-moon w-4 h-4 dark:hidden" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
<svg className="lucide lucide-sun w-4 h-4 hidden dark:block text-yellow-500" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</button>
<div className="h-4 w-[1px] dark:bg-zinc-800 mx-1 bg-zinc-200"></div>
<a className="flex items-center gap-2 dark:bg-white dark:text-zinc-900 px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity bg-zinc-900 text-white" href="#member-space">
<span className="">Espace Membre</span>
</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-10 dark:opacity-20 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/51017af5-3505-43a4-8685-ddf16b168690_3840w.jpg" style={{}}/>
<div className="dark:from-zinc-950 dark:via-zinc-950/50 dark:to-transparent bg-gradient-to-t to-transparent absolute top-0 right-0 bottom-0 left-0 from-zinc-50 via-zinc-50/50"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-xs font-medium border border-brand-500/20 mb-8 backdrop-blur-sm text-brand-600">
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-brand-600"></span>
                ERP Communautaire V2.0
            </div>
<h1 className="text-5xl lg:text-7xl font-medium dark:text-white tracking-tight mb-6 leading-[1.1] text-zinc-900">
                La plateforme centrale <br/>
                du <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-orange-600">Cinéma Ivoirien</span>
</h1>
<p className="text-xl dark:text-zinc-400 max-w-2xl mb-10 font-light text-zinc-600">
                Gérez votre carrière, trouvez des talents certifiés et accédez aux ressources exclusives du réseau professionnel.
            </p>
<div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
<div className="relative flex-1 group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="lucide lucide-search h-5 w-5 text-zinc-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<input className="block w-full pl-10 pr-3 py-3.5 border dark:border-zinc-800 rounded-lg leading-5 dark:bg-zinc-900/50 backdrop-blur-sm placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 sm:text-sm dark:text-white transition-all group-hover:bg-white dark:group-hover:bg-zinc-900 border-zinc-200 bg-white/50 text-zinc-900" placeholder="Chercher un technicien, un décor..." type="text"/>
</div>
<button className="px-6 py-3.5 font-medium rounded-lg transition-colors flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white">
                    Explorer
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="grid grid-cols-3 gap-8 mt-16 border-t dark:border-zinc-800/50 pt-8 w-full max-w-3xl border-zinc-200/50">
<div>
<div className="text-3xl font-semibold dark:text-white mb-1 text-zinc-900">1,240</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Techniciens Vérifiés</div>
</div>
<div>
<div className="text-3xl font-semibold dark:text-white mb-1 text-zinc-900">85</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Projets en cours</div>
</div>
<div>
<div className="text-3xl font-semibold dark:text-white mb-1 text-zinc-900">320</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Lieux référencés</div>
</div>
</div>
</div>
</header>

<section className="border-y dark:border-zinc-800 dark:bg-zinc-900 py-6 overflow-hidden border-zinc-200 bg-white">
<div className="flex animate-scroll w-[200%]">

<div className="flex gap-12 items-center min-w-full justify-around px-6 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold font-mono text-zinc-500 dark:text-zinc-400">CANAL+</span>
<span className="text-xl font-bold font-mono text-zinc-500 dark:text-zinc-400">NETFLIX</span>
<span className="text-xl font-bold font-mono text-zinc-500 dark:text-zinc-400">RTI</span>
<span className="text-xl font-bold font-mono text-zinc-500 dark:text-zinc-400">ONAC-CI</span>
<span className="text-xl font-bold font-mono text-zinc-500 dark:text-zinc-400">SONY</span>
<span className="text-xl font-bold font-mono text-zinc-500 dark:text-zinc-400">ORANGE</span>
<span className="text-xl font-bold font-mono text-zinc-500 dark:text-zinc-400">PATHE</span>
</div>

<div className="flex gap-12 items-center min-w-full justify-around px-6 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold font-mono text-zinc-500 dark:text-zinc-400">CANAL+</span>
<span className="text-xl font-bold font-mono text-zinc-500 dark:text-zinc-400">NETFLIX</span>
<span className="text-xl font-bold font-mono text-zinc-500 dark:text-zinc-400">RTI</span>
<span className="text-xl font-bold font-mono text-zinc-500 dark:text-zinc-400">ONAC-CI</span>
<span className="text-xl font-bold font-mono text-zinc-500 dark:text-zinc-400">SONY</span>
<span className="text-xl font-bold font-mono text-zinc-500 dark:text-zinc-400">ORANGE</span>
<span className="text-xl font-bold font-mono text-zinc-500 dark:text-zinc-400">PATHE</span>
</div>
</div>
</section>

<section className="py-24 dark:bg-zinc-950 bg-zinc-50" id="directory">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-5 space-y-6">
<div className="flex justify-between items-end">
<h2 className="text-2xl font-medium tracking-tight dark:text-white">Annuaire des Talents</h2>
<a className="text-sm hover:underline text-brand-600" href="#">Voir tout</a>
</div>

<div className="dark:bg-zinc-900 border dark:border-zinc-800 rounded-2xl p-4 flex gap-4 hover:border-brand-500/30 transition-all group cursor-pointer bg-white border-zinc-200">
<div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-200">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9cb87b82-efd0-43d5-b83f-1112a24b4141_320w.jpg" style={{}}/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div className="">
<h3 className="font-medium dark:text-white text-zinc-900">Kouamé Jean</h3>
<p className="text-sm text-zinc-500">Chef Opérateur</p>
</div>
<div className="dark:bg-green-900/30 dark:text-green-400 text-xs px-2 py-1 rounded font-mono border dark:border-green-800 bg-green-100 text-green-700 border-green-200">
                                    9.8/10
                                </div>
</div>
<div className="mt-3 flex gap-2">
<span className="text-xs px-2 py-0.5 rounded-full dark:bg-zinc-800 text-zinc-500 bg-zinc-100">Long Métrage</span>
<span className="text-xs px-2 py-0.5 rounded-full dark:bg-zinc-800 text-zinc-500 bg-zinc-100">Publicité</span>
</div>
</div>
</div>

<div className="dark:bg-zinc-900 border dark:border-zinc-800 rounded-2xl p-4 flex gap-4 hover:border-brand-500/30 transition-all group cursor-pointer bg-white border-zinc-200">
<div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-200">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div className="">
<h3 className="font-medium dark:text-white text-zinc-900">Sarah Touré</h3>
<p className="text-sm text-zinc-500">Scripte</p>
</div>
<div className="dark:bg-green-900/30 dark:text-green-400 text-xs px-2 py-1 rounded font-mono border dark:border-green-800 bg-green-100 text-green-700 border-green-200">
                                    9.5/10
                                </div>
</div>
<div className="mt-3 flex gap-2">
<span className="text-xs px-2 py-0.5 rounded-full dark:bg-zinc-800 text-zinc-500 bg-zinc-100">Série TV</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col" id="locations">
<h2 className="text-2xl font-medium tracking-tight dark:text-white mb-6">Lieux de Tournage</h2>
<div className="flex-1 rounded-2xl border relative overflow-hidden group bg-zinc-900 border-zinc-800">

<div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/C%C3%B4te_d%27Ivoire_location_map.svg/1722px-C%C3%B4te_d%27Ivoire_location_map.svg.png')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" style={{}}></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-10 -translate-y-10">
<div className="w-4 h-4 bg-brand-500 rounded-full animate-ping absolute"></div>
<div className="w-4 h-4 bg-brand-500 rounded-full relative cursor-pointer hover:scale-125 transition-transform"></div>
<div className="absolute left-6 top-0 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white">Abidjan (120 lieux)</div>
</div>
<div className="absolute bottom-1/3 left-1/3">
<div className="w-3 h-3 rounded-full relative cursor-pointer hover:scale-125 transition-transform hover:bg-brand-500 bg-white"></div>
</div>

<div className="absolute bottom-0 w-full bg-gradient-to-t to-transparent p-6 pt-20 from-black/90">
<div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
<button className="px-3 py-1.5 rounded-full text-xs backdrop-blur border bg-white/10 hover:bg-white/20 text-white border-white/10">Lagunes</button>
<button className="px-3 py-1.5 rounded-full text-xs backdrop-blur border bg-white/10 hover:bg-white/20 text-white border-white/10">Savanes</button>
<button className="px-3 py-1.5 rounded-full text-xs backdrop-blur border bg-white/10 hover:bg-white/20 text-white border-white/10">Montagnes</button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 space-y-6">
<h2 className="text-2xl font-medium tracking-tight dark:text-white mb-6">Ressources</h2>
<div className="dark:bg-zinc-900 p-6 rounded-2xl border dark:border-zinc-800 dark:hover:border-zinc-700 transition-colors cursor-pointer group bg-white border-zinc-200 hover:border-zinc-300">
<div className="w-10 h-10 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-purple-100 text-purple-600">
<svg className="lucide lucide-camera w-5 h-5" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<h3 className="font-medium dark:text-white text-zinc-900">Matériel</h3>
<p className="text-sm text-zinc-500 mt-1">Loueurs certifiés (RED, Arri, Sony)</p>
<div className="mt-4 flex items-center text-xs font-medium dark:text-purple-400 text-purple-600">
                            Catalogue <svg className="lucide lucide-chevron-right w-3 h-3 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<div className="dark:bg-zinc-900 p-6 rounded-2xl border dark:border-zinc-800 dark:hover:border-zinc-700 transition-colors cursor-pointer group bg-white border-zinc-200 hover:border-zinc-300">
<div className="w-10 h-10 dark:bg-pink-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-pink-100 text-pink-600">
<svg className="lucide lucide-shirt w-5 h-5" data-lucide="shirt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
</div>
<h3 className="font-medium dark:text-white text-zinc-900">Costumes</h3>
<p className="text-sm text-zinc-500 mt-1">Stylisme et accessoires d'époque</p>
<div className="mt-4 flex items-center text-xs font-medium dark:text-pink-400 text-pink-600">
                            Voir la galerie <svg className="lucide lucide-chevron-right w-3 h-3 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 dark:bg-zinc-950 border-t dark:border-zinc-800 bg-white border-zinc-200" id="jobs">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-medium tracking-tight dark:text-white flex items-center gap-2">
<svg className="lucide lucide-briefcase w-6 h-6 text-brand-600" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
                            Offres &amp; Castings
                        </h2>
<span className="px-2 py-1 dark:bg-zinc-800 text-xs font-mono rounded bg-zinc-100">12 nouvelles</span>
</div>
<div className="space-y-3">

<div className="group relative flex items-center gap-4 p-4 rounded-xl border dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900 hover:shadow-lg transition-all cursor-pointer border-zinc-200 bg-zinc-50 hover:bg-white">
<div className="w-12 h-12 rounded flex items-center justify-center font-bold text-xs bg-black text-white">VDO</div>
<div className="flex-1">
<div className="flex justify-between">
<h3 className="font-medium dark:text-white group-hover:text-brand-600 transition-colors text-zinc-900">Ingénieur Son</h3>
<span className="text-xs font-medium text-red-500 dark:bg-red-900/20 px-2 py-0.5 rounded border dark:border-red-900 bg-red-50 border-red-100">URGENT</span>
</div>
<div className="flex items-center gap-4 mt-1 text-sm text-zinc-500">
<span>Voodoo Group</span>
<span>•</span>
<span>CDD Projet</span>
</div>
</div>
</div>

<div className="group relative flex items-center gap-4 p-4 rounded-xl border dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900 hover:shadow-lg transition-all cursor-pointer border-zinc-200 bg-zinc-50 hover:bg-white">
<div className="w-12 h-12 rounded flex items-center justify-center font-bold text-xs bg-blue-600 text-white">C+</div>
<div className="flex-1">
<div className="flex justify-between">
<h3 className="font-medium dark:text-white group-hover:text-brand-600 transition-colors text-zinc-900">Acteur Principal (H 25-30)</h3>
<span className="text-xs font-medium text-zinc-500">Hier</span>
</div>
<div className="flex items-center gap-4 mt-1 text-sm text-zinc-500">
<span>Original Series</span>
<span>•</span>
<span>Casting</span>
</div>
</div>
</div>
</div>
</div>

<div className="">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-medium tracking-tight dark:text-white flex items-center gap-2">
<svg className="lucide lucide-scale w-6 h-6 text-brand-600" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M7 21h10"></path></svg>
                            Conventions &amp; Légal
                        </h2>
</div>
<div className="rounded-2xl p-6 relative overflow-hidden mb-6 bg-zinc-900 text-white">
<div className="relative z-10">
<h3 className="text-xl font-medium mb-2">Grille Salariale 2024</h3>
<p className="text-sm mb-6 max-w-xs text-zinc-400">
                                Référence officielle des cachets minima par catégorie professionnelle.
                            </p>
<button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-200">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Télécharger PDF
                            </button>
</div>
<svg className="lucide lucide-file-text absolute -right-6 -bottom-6 w-40 h-40 rotate-12 text-zinc-800" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="grid grid-cols-2 gap-4">
<a className="p-4 border dark:border-zinc-800 rounded-xl hover:border-brand-500 transition-colors group border-zinc-200" href="#">
<div className="w-8 h-8 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-3 text-zinc-500 group-hover:text-brand-600 bg-zinc-100">
<svg className="lucide lucide-file-signature w-4 h-4" data-lucide="file-signature" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18.226 5.226-2.52-2.52A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.351"></path><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path><path d="M8 18h1"></path></svg>
</div>
<h4 className="font-medium text-sm dark:text-white">Modèles Contrats</h4>
</a>
<a className="p-4 border dark:border-zinc-800 rounded-xl hover:border-brand-500 transition-colors group border-zinc-200" href="#">
<div className="w-8 h-8 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-3 text-zinc-500 group-hover:text-brand-600 bg-zinc-100">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h4 className="font-medium text-sm dark:text-white">Charte Image</h4>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 dark:bg-black relative overflow-hidden bg-zinc-900" id="member-space">
<div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center gap-x-12 lg:flex-row">

<div className="flex-1 space-y-8">
<div className="inline-block px-3 py-1 rounded border border-brand-500/30 bg-brand-500/10 text-brand-500 text-xs font-medium tracking-widest uppercase">
                        Identité Numérique
                    </div>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white">
                        Votre passeport <br/>professionnel certifié.
                    </h2>
<p className="text-lg font-light leading-relaxed text-zinc-400">
                        Plus qu'une carte, c'est votre outil de travail. Justifiez votre statut, gérez votre disponibilité en temps réel et recevez vos paiements.
                    </p>

<div className="border p-4 rounded-xl max-w-sm backdrop-blur bg-zinc-800/50 border-zinc-700">
<label className="text-xs font-medium uppercase tracking-wider mb-3 block text-zinc-400">Ma Disponibilité (Temps réel)</label>
<div className="flex rounded-lg p-1 bg-black">
<button className="flex-1 py-2 rounded-md text-xs font-medium shadow-lg transition-all bg-green-600 text-white">Disponible</button>
<button className="flex-1 py-2 rounded-md text-xs font-medium transition-all text-zinc-400 hover:text-white">Tournage</button>
<button className="flex-1 py-2 rounded-md text-xs font-medium transition-all text-zinc-400 hover:text-white">Off</button>
</div>
</div>
<div className="flex gap-4 pt-4">
<button className="px-6 py-3 rounded-lg font-medium transition-colors bg-white text-black hover:bg-zinc-200">
                            Créer mon profil
                        </button>
<button className="px-6 py-3 rounded-lg font-medium border transition-colors text-white border-zinc-700 hover:bg-zinc-800">
                            Connexion
                        </button>
</div>
</div>

<div className="flex-1 flex justify-center w-full perspective-1000 group">

<div className="relative w-[340px] h-[540px] transition-all duration-700 transform-style-3d group-hover:rotate-y-180 cursor-pointer">

<div className="absolute inset-0 w-full h-full rounded-2xl p-6 backface-hidden border overflow-hidden flex flex-col justify-between shadow-2xl ring-1 bg-zinc-900 border-zinc-700 shadow-black ring-white/10">

<div className="absolute inset-0 hologram-effect opacity-30 z-0"></div>

<div className="relative z-10 flex justify-between items-start">
<div className="flex items-center gap-2">
<div className="p-0.5 rounded font-bold text-xs bg-white text-black">RC</div>
<span className="font-bold tracking-tight text-sm text-white">RETECHCI</span>
</div>
<div className="flex flex-col items-end">
<span className="text-[10px] uppercase text-zinc-400">Statut</span>
<span className="text-xs font-bold text-brand-500 uppercase tracking-wider">Membre Actif</span>
</div>
</div>

<div className="relative z-10 text-center mt-4">
<div className="w-32 h-32 mx-auto rounded-full border-2 border-brand-500/50 p-1 mb-4 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
<img className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b03791e6-6d2b-4d0f-b737-1fb320975385_320w.jpg" style={{}}/>
</div>
<h3 className="text-2xl font-semibold text-white" style={{}}>Kouame Toussaint</h3>
<p className="text-sm font-medium mt-1 text-zinc-400" style={{}}>Maquilleur • Cat A</p>

<div className="w-12 h-9 bg-gradient-to-br rounded mt-6 mx-auto opacity-90 border flex items-center justify-center from-yellow-200 to-yellow-600 border-yellow-700/30">
<svg className="w-8 h-8 text-yellow-900/50" fill="currentColor" viewbox="0 0 24 24"><path className="" d="M4 4h16v16H4V4zm2 4v2h2V8H6zm0 4v2h2v-2H6zm0 4v2h2v-2H6zm4-8v2h2V8h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2zm4-8v2h2V8h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2zm4-8v2h2V8h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2z"></path></svg>
</div>
</div>

<div className="relative z-10 flex justify-between items-end">
<div className="text-[10px] text-zinc-500 font-mono space-y-1">
<div>ID: 892-221-XC</div>
<div>EXP: 12/25</div>
</div>
<svg className="lucide lucide-wifi w-6 h-6 rotate-90 text-zinc-600" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
</div>

<div className="absolute inset-0 w-full h-full rounded-2xl backface-hidden rotate-y-180 border flex flex-col shadow-2xl overflow-hidden bg-zinc-800 border-zinc-600">

<div className="w-full h-12 mt-8 bg-black"></div>

<div className="mt-4 px-6">
<div className="flex gap-4 items-center">
<div className="flex-1 h-10 flex items-center px-2 bg-zinc-300">
<span className="font-handwriting italic text-lg transform -rotate-2 text-black">Yves.K</span>
</div>
<div className="text-xs text-zinc-500 font-mono">CCV 892</div>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center p-6">
<div className="p-2 rounded-lg bg-white">
<img className="w-24 h-24 mix-blend-multiply" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&amp;data=RETECHCI-MEMBER-892" style={{}}/>
</div>
<p className="text-[10px] mt-4 text-center leading-tight text-zinc-400">
                                    Ce QR Code permet aux producteurs de vérifier votre certification et vos assurances en temps réel.
                                </p>
</div>

<div className="p-4 border-t bg-zinc-900 border-zinc-700">
<div className="flex items-center justify-between text-xs text-green-400">
<span className="flex items-center gap-1"><svg className="lucide lucide-check-circle w-3 h-3" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Cotisation à jour</span>
<span>2024</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="dark:bg-zinc-950 bg-white pt-24 pb-24" id="live">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-red-900/20 text-xs font-bold uppercase tracking-wider mb-6 bg-red-100 text-red-600">
<span className="w-2 h-2 rounded-full animate-pulse bg-red-600"></span> En Direct
            </span>
<h2 className="text-3xl font-medium dark:text-white mb-8 text-zinc-900">Masterclass : La Lumière en Studio</h2>

<div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border dark:border-zinc-800 group bg-zinc-900 border-zinc-200">

<img className="w-full h-full object-cover opacity-30 blur-sm scale-105" src="https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{}}/>

<div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm p-8 bg-black/60">
<div className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur mb-6 bg-white/10">
<svg className="lucide lucide-lock w-8 h-8 text-white" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h3 className="text-xl font-medium mb-2 text-white">Contenu Réservé</h3>
<p className="mb-8 max-w-md text-zinc-300">
                        Accédez à ce live via votre espace membre ou achetez un ticket unique.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
<button className="flex-1 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white">
<span>Ticket Unique (2000 FCFA)</span>
</button>
<button className="flex-1 py-3 rounded-lg font-medium transition-colors bg-white text-black hover:bg-zinc-200">
                            Connexion Membre
                        </button>
</div>

<div className="mt-6 flex items-center gap-4 opacity-70">
<div className="h-6 px-2 rounded flex items-center bg-white"><span className="text-xs font-bold text-orange-500">Orange Money</span></div>
<div className="h-6 px-2 bg-blue-500 rounded flex items-center"><span className="text-xs font-bold text-white">Wave</span></div>
<div className="h-6 px-2 rounded flex items-center bg-yellow-400"><span className="text-xs font-bold text-black">MTN</span></div>
</div>
</div>
</div>
</div>
</section>

<div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">

<button className="w-12 h-12 rounded-full dark:bg-white dark:text-zinc-900 flex items-center justify-center shadow-lg hover:scale-110 transition-transform bg-zinc-900 text-white" title="Ma Carte">
<svg className="lucide lucide-qr-code w-5 h-5" data-lucide="qr-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
</button>

<div className="relative group">
<button className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors bg-brand-600 text-white shadow-brand-600/30 hover:bg-brand-700">
<svg className="lucide lucide-message-square w-6 h-6" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</button>
<span className="absolute right-16 top-1/2 -translate-y-1/2 dark:bg-zinc-800 px-3 py-1 rounded-lg text-xs font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap dark:text-white bg-white text-zinc-900">
                Besoin d'aide ?
            </span>
</div>
</div>

<footer className="dark:bg-zinc-950 border-t dark:border-zinc-800 pt-16 pb-8 bg-white border-zinc-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex gap-2 mb-6 items-center">
<div className="text-lg font-bold text-white bg-black rounded pt-1 pr-1 pb-1 pl-1">RC</div>
<span className="dark:text-white text-xl font-bold text-zinc-900 tracking-tight">RETECHCI</span>
</div>
<p className="text-zinc-500 dark:text-zinc-400 max-w-sm mb-6 text-sm leading-relaxed">
                        Le Réseau des Techniciens Cinéma de Côte d'Ivoire. Une initiative pour structurer, former et promouvoir l'excellence technique de notre industrie audiovisuelle.
                    </p>
</div>
<div>
<h4 className="font-medium dark:text-white mb-4 text-sm uppercase tracking-wider text-zinc-900">Plateforme</h4>
<ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
<li><a className="transition-colors hover:text-brand-600" href="#">Annuaire Techniciens</a></li>
<li><a className="transition-colors hover:text-brand-600" href="#">Carte des Lieux</a></li>
<li><a className="transition-colors hover:text-brand-600" href="#">Loueurs de Matériel</a></li>
<li><a className="transition-colors hover:text-brand-600" href="#">Casting &amp; Jobs</a></li>
</ul>
</div>
<div>
<h4 className="font-medium dark:text-white mb-4 text-sm uppercase tracking-wider text-zinc-900">Légal &amp; Admin</h4>
<ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
<li><a className="transition-colors hover:text-brand-600" href="#">Connexion Admin</a></li>
<li><a className="transition-colors hover:text-brand-600" href="#">Statuts de l'association</a></li>
<li><a className="transition-colors hover:text-brand-600" href="#">Règlement Intérieur</a></li>
<li><a className="transition-colors hover:text-brand-600" href="#">Politique de confidentialité</a></li>
</ul>
</div>
</div>
<div className="border-t dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-zinc-200">
<p className="text-xs text-zinc-500">© 2024 RETECHCI. Tous droits réservés.</p>
<div className="text-xs text-zinc-500 font-medium">
                    Abidjan, Côte d'Ivoire 🇨🇮
                </div>
</div>
</div>
</footer>


    </>
  );
}
