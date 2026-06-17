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



  (function () {
    const style = document.createElement("style");
    style.textContent = `
      .animate-on-scroll { animation-play-state: paused !important; }
      .animate-on-scroll.animate { animation-play-state: running !important; }
    `;
    document.head.appendChild(style);

    const once = true;
    if (!window.__inViewIO) {
      window.__inViewIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            if (once) window.__inViewIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
    }
    window.initInViewAnimations = function (selector = ".animate-on-scroll") {
      document.querySelectorAll(selector).forEach((el) => {
        window.__inViewIO.observe(el);
      });
    };
    document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
  })();



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


  // Mobile menu logic
  const mobileBtn = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMobile = document.getElementById('closeMobile');

  if (mobileBtn && mobileMenu && closeMobile) {
    mobileBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Simple toggle logic for mobile menu if it existed in full structure
      alert('Menu mobile cliqué'); 
    });
  }

  // Initialize icons
  lucide.createIcons();
  
  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

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
      

<style className="">
  @keyframes fadeSlideIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
      filter: blur(8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0px);
    }
  }
</style>


<div className="overflow-y-auto transition-opacity duration-500 w-full h-full" id="landing-view">
<header className="overflow-hidden relative"><div className="absolute inset-0" data-container-bg="true"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>
</div>

<div className="absolute inset-0 -z-10 w-full h-full pointer-events-none" style={{maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>

</div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<nav className="flex mt-6 items-center justify-between">
<a className="flex items-center gap-2" href="/">
<img alt="Limited" className="w-auto h-12" src="https://i.ibb.co/ZRc2kt2R/logotype.png" style={{}}/>
</a>
<div className="hidden md:flex md:gap-x-2 border rounded-full pt-1 pr-1 pb-1 pl-1 backdrop-blur-lg gap-x-2 gap-y-1 items-center border-white/10 bg-purple-400/5">
<a className="text-sm font-medium font-geist pt-2 pr-3 pb-2 pl-3 hover:text-white text-white/80" href="#manifesto">Philosophie</a>
<a className="px-3 py-2 text-sm font-medium font-geist text-white/80 hover:text-white" href="#ecosystem">Écosystème</a>
<a className="px-3 py-2 text-sm font-medium font-geist text-white/80 hover:text-white" href="#pricing">Investissement</a>
<div className="relative inline-block group text-xs rounded-full">
<a className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] border pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] text-xs rounded-full cursor-pointer inline-flex text-white border-white/20 bg-fuchsia-900/60" href="#application" style={{}}>
<span className="relative z-10 inline-flex items-center gap-2 font-medium text-xs rounded-full font-geist">Postuler</span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0 text-xs rounded-full via-white"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10 text-xs rounded-full"></span>
</a>
</div>
</div>
<button className="md:hidden inline-flex text-sm font-medium font-geist border rounded-lg pt-2 pr-3 pb-2 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center border-white/10 bg-purple-400/5" id="mobileMenuToggle">
<svg aria-hidden="true" className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
            Menu
          </button>
</nav>

<section className="z-10 sm:pt-20 md:pt-48 md:pb-24 max-w-5xl pt-20 pb-32 relative text-left">
<h1 className="sm:text-6xl md:text-7xl [animation:fadeSlideIn_1s_ease-out_0.2s_forwards] text-4xl tracking-tighter font-geist opacity-0 max-w-5xl">
            Croissance Stratégique.<br/>Conçue par Limited.
          </h1>
<p className="sm:text-lg [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-base font-normal font-geist max-w-2xl mt-6 text-white/70">
             Nous ne créons pas juste des sites web ; nous bâtissons des actifs digitaux en édition limitée qui surperforment le marché. Cessez de payer pour du « joli » et commencez à investir dans le « rentable ».
          </p>
<div className="flex flex-col sm:flex-row [animation:fadeSlideIn_1s_ease-out_0.4s_both] mt-8 gap-x-3 gap-y-3 items-start sm:items-center justify-start">
<a className="group relative inline-flex min-w-[140px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-semibold tracking-tight border rounded-full pt-[12px] pr-[20px] pb-[12px] pl-[20px] items-center justify-center hover:text-white text-fuchsia-400 bg-fuchsia-800 border-fuchsia-600" href="#application" style={{}}>
<span className="relative z-10 font-medium rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">Lancer votre Projet</span>
<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-full blur-md font-geist">Postuler</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent to-transparent rounded-full blur-[2px] via-fuchsia-200" style={{}}></span>
</a>
<a className="inline-flex items-center gap-2 text-base font-medium border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur font-geist hover:bg-white/10 text-white/90 border-white/10 bg-purple-400/5" href="#ecosystem">
              Explorer l'Écosystème
            </a>
</div>
</section>
</div>
</header>

<section className="z-10 sm:px-6 lg:px-8 max-w-7xl mt-12 mr-auto ml-auto pr-6 pb-16 pl-6 relative">
<p className="[animation:fadeSlideIn_1s_ease-out_0.5s_both] text-sm font-medium text-center mb-6 font-geist text-white/50">La confiance d'un cercle restreint de fondateurs en forte croissance</p>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-8 items-center justify-items-center [animation:fadeSlideIn_1s_ease-out_0.6s_both]">
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d052699d-f578-4c01-9806-f5b6c8609489_320w.png)] bg-cover rounded invert opacity-60 hover:opacity-100 transition-opacity" style={{}}></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3185425e-0207-434a-9554-cdb5bd455ea5_320w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c26c041-308e-4034-9227-5a6c57d94f4d_1600w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity" style={{}}></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8de253ef-3c06-4a22-8e14-1a6a9d8580d5_320w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity" style={{}}></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d3f4a52-05b5-4539-987a-d4b1ff330ef1_1600w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity" style={{}}></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e561d59c-a675-431e-a035-187a88fbe4c2_1600w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
</div>
</section>

<section className="relative py-24 border-y bg-white/[0.02] border-white/5" id="manifesto">
<div className="sm:px-6 lg:px-8 max-w-4xl mr-auto ml-auto pr-6 pl-6 text-center">
<h2 className="text-xs font-semibold tracking-wider uppercase font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate text-slate-500" style={{}}>Le Manifeste</h2>
<h3 className="mt-4 text-3xl sm:text-5xl font-geist tracking-tighter animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate text-white">
          La Dure Vérité : <br/>Votre Site Perd de l'Argent.
        </h3>
<div className="mt-10 relative border rounded-2xl p-8 sm:p-12 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both] border-white/10 bg-fuchsia-900/50" style={{}}>
<svg aria-hidden="true" className="absolute top-6 left-6 h-8 w-8 transform -translate-x-2 -translate-y-2 text-white/20" fill="currentColor" viewbox="0 0 32 32">
<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
</svg>
<p className="relative text-lg sm:text-xl font-geist leading-relaxed text-white/80">
             La plupart des agences vous vendent une brochure numérique plaisante mais qui ne vend rien. Vous n'avez pas besoin « juste d'un site ». Vous avez besoin d'un système de conversion. Nous ne devinons pas ; nous ingénions des résultats basés sur la data. Cessez de payer les heures travaillées, investissez dans les résultats livrés.
           </p>
<div className="mt-6 flex items-center justify-center gap-3">
<div className="h-px w-12 bg-white/20"></div>
<span className="text-sm font-medium font-geist text-white/50">L'Équipe Stratégie Limited</span>
<div className="h-px w-12 bg-white/20"></div>
</div>
</div>
</div>
</section>

<section className="relative py-24 overflow-hidden">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter">Le Standard Limited</h2>
<p className="mt-4 font-geist max-w-2xl mx-auto text-white/60">Ne comparez pas le prix. Comparez la vitesse, l'efficacité et l'impact sur les revenus.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">

<div className="p-8 rounded-2xl border bg-white/[0.02] flex flex-col gap-6 opacity-60 grayscale transition hover:opacity-80 hover:grayscale-0 border-white/5">
<h3 className="text-xl font-medium font-geist text-white/50">Agences Traditionnelles</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-white/50">
<svg className="lucide lucide-x text-red-500/50" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="font-geist">6-12 Semaines de Délai</span>
</li>
<li className="flex items-center gap-3 text-white/50">
<svg className="lucide lucide-x text-red-500/50" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="font-geist">Code Lourd &amp; Chargement Lent</span>
</li>
<li className="flex items-center gap-3 text-white/50">
<svg className="lucide lucide-x text-red-500/50" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="font-geist">Focus sur les « Prix de Design »</span>
</li>
<li className="flex items-center gap-3 text-white/50">
<svg className="lucide lucide-x text-red-500/50" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="font-geist">Silence Radio pendant des Semaines</span>
</li>
</ul>
</div>

<div className="relative p-8 rounded-2xl border flex flex-col gap-6 shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)] border-slate-500/30 bg-slate-900/10" style={{}}>
<div className="absolute -top-3 -right-3">
<span className="relative flex h-6 w-6">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-slate-400" style={{}}></span>
<span className="relative inline-flex rounded-full h-6 w-6 items-center justify-center bg-slate-500" style={{}}>
<svg className="lucide lucide-check text-black" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</span>
</div>
<h3 className="text-xl font-medium font-geist text-white">Limited</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-white">
<div className="p-1 rounded-full bg-slate-500/20" style={{}}><svg className="lucide lucide-check text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-geist font-medium">Sprints de 7-14 Jours</span>
</li>
<li className="flex items-center gap-3 text-white">
<div className="p-1 rounded-full bg-slate-500/20" style={{}}><svg className="lucide lucide-check text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-geist font-medium">Architecture Performance-First</span>
</li>
<li className="flex items-center gap-3 text-white">
<div className="p-1 rounded-full bg-slate-500/20" style={{}}><svg className="lucide lucide-check text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-geist font-medium">Focus Revenus &amp; ROI</span>
</li>
<li className="flex items-center gap-3 text-white">
<div className="p-1 rounded-full bg-slate-500/20" style={{}}><svg className="lucide lucide-check text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-geist font-medium">Mises à jour Quotidiennes &amp; Transparence</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="z-10 sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-20 pl-6 relative" id="ecosystem">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-sm font-medium font-geist [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll text-white/50">Écosystème Global</p>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll" style={{}}>Écosystème de Valeur</h2>
<p className="mt-3 text-base font-geist [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll text-white/70">Les trois piliers d'un actif digital à haute conversion.</p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3 gap-x-6 gap-y-6">

<div className="relative overflow-hidden rounded-2xl border [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll group hover:bg-white/[0.07] transition-colors md:col-span-1 border-white/10 bg-purple-400/5">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="p-2 border rounded-lg bg-slate-500/10 border-slate-500/20" style={{}}>
<svg className="lucide lucide-code-2 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight font-geist text-white">Architecture de Code Propre</h3>
<p className="mt-3 text-sm font-geist leading-relaxed text-white/70">La vitesse est une fonctionnalité. Nous bâtissons sur des frameworks légers qui chargent instantanément. Google adore, les utilisateurs adorent, et votre taux de rebond chute à zéro.</p>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll group hover:bg-white/[0.07] transition-colors md:col-span-1 border-white/10 bg-purple-400/5">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="p-2 border rounded-lg bg-slate-500/10 border-slate-500/20" style={{}}>
<svg className="lucide lucide-brain-circuit text-fuchsia-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 1 19.5 5"></path><path d="M12 18a3 3 0 0 0-3-3"></path></svg>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight font-geist text-white">Design Psychologique</h3>
<p className="mt-3 text-sm font-geist leading-relaxed text-white/70">Nous ne choisissons pas juste des couleurs. Nous concevons des parcours utilisateurs qui guident psychologiquement votre visiteur vers le bouton 'Acheter'. Chaque pixel a un but.</p>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border [animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll group hover:bg-white/[0.07] transition-colors md:col-span-1 border-white/10 bg-purple-400/5">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="p-2 border rounded-lg bg-slate-500/10 border-slate-500/20" style={{}}>
<svg className="lucide lucide-trending-up text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight font-geist text-white">SEO &amp; Scalabilité</h3>
<p className="mt-3 text-sm font-geist leading-relaxed text-white/70">Conçu pour ranker. Conçu pour scaler. Votre site est techniquement optimisé pour les moteurs de recherche dès le Jour 1. Ne chassez pas le trafic, attirez-le.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border md:col-span-3 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll mt-6 border-white/10 bg-purple-400/5">
<div className="absolute inset-0 bg-gradient-to-r to-transparent z-10 from-black via-black/50"></div>
<img alt="NexChain Project" className="absolute right-0 top-0 h-full w-2/3 object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5badae71-a5f7-4201-aee1-3b316e682fb0_1600w.jpg"/>
<div className="p-8 sm:p-12 relative z-20 h-full flex flex-col justify-center max-w-xl">
<div className="flex items-center gap-2 mb-4">
<span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium font-geist border-slate-400/30 bg-slate-400/15 text-slate-200" style={{}}>Étude de Cas</span>
</div>
<h3 className="text-3xl sm:text-4xl font-geist tracking-tighter">Infrastructure NexChain</h3>
<p className="mt-4 text-base sm:text-lg font-geist text-white/70">Voyez comment nous avons transformé une marque crypto fragmentée en une autorité du marché, augmentant la conversion de 200% en 30 jours.</p>
<div className="mt-8">
<a className="inline-flex items-center gap-2 text-sm font-medium rounded-lg px-4 py-2 transition font-geist text-black bg-white hover:bg-fuchsia-200" href="#" style={{}}>
                Voir l'Étude de Cas
                <svg aria-hidden="true" className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-y relative border-white/5">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter">Du Concept au Cash Flow</h2>
<p className="mt-4 font-geist text-white/60">Le chemin vers votre nouvel actif digital.</p>
</div>
<div className="relative grid md:grid-cols-3 gap-8">

<div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent to-transparent via-white/20"></div>

<div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<div className="w-16 h-16 rounded-full border flex items-center justify-center relative z-10 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)] bg-black border-white/20">
<span className="text-xl font-bold font-geist text-white">01</span>
</div>
<h3 className="text-xl font-medium font-geist mb-2 text-white">Audit &amp; Stratégie</h3>
<p className="text-sm font-geist leading-relaxed max-w-xs text-white/60">Nous identifions les goulots d'étranglement de votre funnel actuel et cartographions les opportunités de revenus.</p>
</div>

<div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<div className="w-16 h-16 rounded-full border flex items-center justify-center relative z-10 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)] border-slate-500/50 bg-black" style={{}}>
<span className="text-xl font-bold font-geist text-slate-400" style={{}}>02</span>
</div>
<h3 className="text-xl font-medium font-geist mb-2 text-white">Construction Sprint</h3>
<p className="text-sm font-geist leading-relaxed max-w-xs text-white/60">Phase de design et développement haute intensité. Pas de superflu, juste une exécution rapide de la stratégie convenue.</p>
</div>

<div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]">
<div className="w-16 h-16 rounded-full border flex items-center justify-center relative z-10 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)] bg-black border-white/20">
<span className="text-xl font-bold font-geist text-white">03</span>
</div>
<h3 className="text-xl font-medium font-geist mb-2 text-white">Lancement &amp; Scale</h3>
<p className="text-sm font-geist leading-relaxed max-w-xs text-white/60">Déploiement de votre actif et optimisation des conversions. Nous vous remettons les clés d'un moteur à revenus.</p>
</div>
</div>
</div>
</section>

<section className="sm:p-8 sm:ml-8 sm:mr-8 sm:mb-10 mt-10 mr-8 mb-10 ml-8 pt-6 pr-6 pb-6 pl-6" id="pricing">
<div className="relative">

<div className="relative max-w-5xl mx-auto text-center [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-white/80 bg-purple-400/5">
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
<span className="text-xs font-normal font-geist">Investissement</span>
</div>
<h2 className="text-[40px] sm:text-6xl leading-[0.95] mt-4 font-geist tracking-tighter text-white" style={{}}>Investissez dans des Actifs, pas des Dépenses.</h2>
<p className="mt-3 text-sm sm:text-base max-w-2xl mx-auto font-geist text-white/70">
            Prix lean pour résultats majeurs. Pas de frais cachés. Pas de contrats gonflés.
          </p>
</div>

<div className="relative max-w-[1400px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<article className="relative overflow-hidden rounded-2xl border backdrop-blur-xl p-6 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll flex flex-col h-full hover:bg-white/[0.07] transition-colors duration-300 border-white/10 bg-purple-400/5">
<div className="relative flex flex-col gap-1 mb-6">
<h3 className="text-lg font-medium tracking-tight font-geist text-white">Le Launchpad</h3>
<p className="text-xs font-geist text-white/50">Solopreneurs &amp; Validation d'Idées.</p>
</div>
<div className="relative mb-6">
<div className="flex items-end gap-1">
<p className="text-3xl lg:text-4xl font-geist tracking-tighter text-white">₹1,999</p>
<span className="text-xs mb-1.5 font-geist uppercase tracking-wide text-white/40">/ Paiement unique</span>
</div>
<div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-geist border-white/10 text-white/70 bg-purple-400/5">
<svg className="lucide lucide-clock" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Livraison : 48 Heures
              </div>
</div>
<ul className="space-y-3.5 flex-1 mb-8">
<li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm font-geist text-white/80">1 Page Landing Haute Conversion</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm font-geist text-white/80">Architecture Mobile-First</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm font-geist text-white/80">Vitesse Rapide (&lt; 2s)</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm font-geist text-white/80">Intégration Chat WhatsApp</span></li>
</ul>
<a className="w-full inline-flex items-center justify-center h-10 rounded-lg text-xs font-medium transition font-geist border bg-white/10 text-white hover:bg-white/20 border-white/10" href="#application">Commencer</a>
</article>

<article className="relative overflow-hidden rounded-2xl border backdrop-blur-xl p-6 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll flex flex-col h-full hover:bg-white/[0.07] transition-colors duration-300 border-white/10 bg-purple-400/5">
<div className="relative flex flex-col gap-1 mb-6">
<h3 className="text-lg font-medium tracking-tight font-geist text-white">Le Brand Core</h3>
<p className="text-xs font-geist text-white/50">PME &amp; Prestataires de Services.</p>
</div>
<div className="relative mb-6">
<div className="flex items-end gap-1">
<p className="text-3xl lg:text-4xl font-geist tracking-tighter text-white">₹5,999</p>
<span className="text-xs mb-1.5 font-geist uppercase tracking-wide text-white/40">/ Paiement unique</span>
</div>
<div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-geist border-white/10 text-white/70 bg-purple-400/5">
<svg className="lucide lucide-clock" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Livraison : 5-7 Jours
              </div>
</div>
<ul className="space-y-3.5 flex-1 mb-8">
<li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm font-geist text-white/80">Jusqu'à 5 Pages Stratégiques</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm font-geist text-white/80">CMS Personnalisé (Gérez vous-même)</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm font-geist text-white/80">Configuration SEO Base</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm font-geist text-white/80">Intégration Réseaux Sociaux</span></li>
</ul>
<a className="w-full inline-flex items-center justify-center h-10 rounded-lg text-xs font-medium transition font-geist border bg-white/10 text-white hover:bg-white/20 border-white/10" href="#application">Bâtir la Marque</a>
</article>

<article className="relative overflow-hidden rounded-2xl border backdrop-blur-xl p-6 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll flex flex-col h-full shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)] ring-1 border-slate-500/30 ring-slate-500/20 bg-slate-900/10" style={{}}>
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at 50% -20%, rgba(16, 185, 129, 0.15), transparent 70%)'}}></div>
<div className="relative flex flex-col gap-1 mb-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight font-geist text-white">Le Moteur de Croissance</h3>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider font-geist text-slate-950 bg-slate-400" style={{}}>Meilleure Valeur</span>
</div>
<p className="text-xs font-geist text-slate-200/60" style={{}}>Startups en Scale &amp; Acteurs Sérieux.</p>
</div>
<div className="relative mb-6">
<div className="flex items-end gap-1">
<p className="text-3xl lg:text-4xl font-geist tracking-tighter text-white">₹14,999</p>
<span className="text-xs mb-1.5 font-geist uppercase tracking-wide text-white/40">/ Paiement unique</span>
</div>
<div className="inline-flex gap-1.5 text-[11px] text-slate-200 font-geist bg-slate-500/10 border-slate-500/20 border rounded-md mt-4 pt-1 pr-2.5 pb-1 pl-2.5 gap-x-1.5 gap-y-1.5 items-center" style={{}}>Livraison : 10-14 Jours<svg className="lucide lucide-clock" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
</div>
<ul className="space-y-3.5 flex-1 mb-8">
<li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm font-medium font-geist text-white">Jusqu'à 15 Pages + Blog</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm font-medium font-geist text-white">Design Orienté Conversion</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm font-medium font-geist text-white">Dashboard Analytics Avancé</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm font-medium font-geist text-white">Optimisation Vitesse (Score 90+)</span></li>
</ul>
<a className="w-full inline-flex items-center justify-center h-10 rounded-lg text-xs font-semibold transition font-geist shadow-[0_0_20px_rgba(16,185,129,0.3)] bg-slate-500 text-black hover:bg-slate-400" href="#application" style={{}}>Scaler Maintenant</a>
</article>

<article className="relative overflow-hidden rounded-2xl border backdrop-blur-xl p-6 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll flex flex-col h-full hover:bg-white/[0.07] transition-colors duration-300 border-white/10 bg-purple-400/5">
<div className="relative flex flex-col gap-1 mb-6">
<h3 className="text-lg font-medium tracking-tight font-geist text-white">La Suite E-Commerce</h3>
<p className="text-xs font-geist text-white/50">Marques DNVB &amp; Retail en Ligne.</p>
</div>
<div className="relative mb-6">
<div className="flex items-end gap-1">
<p className="text-3xl lg:text-4xl font-geist tracking-tighter text-white">₹24,999+</p>
<span className="text-xs mb-1.5 font-geist uppercase tracking-wide text-white/40">/ Sur Mesure</span>
</div>
<div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-geist border-white/10 text-white/70 bg-purple-400/5">
<svg className="lucide lucide-clock" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Livraison : Sur Mesure
              </div>
</div>
<ul className="space-y-3.5 flex-1 mb-8">
<li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm font-geist text-white/80">Installation Boutique Complète</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm font-geist text-white/80">Intégration Paiements</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm font-geist text-white/80">Récupération Paniers Abandonnés</span></li>
<li className="flex items-start gap-3"><svg className="lucide lucide-check mt-0.5 shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-sm font-geist text-white/80">Notifications Email Automatisées</span></li>
</ul>
<a className="w-full inline-flex items-center justify-center h-10 rounded-lg text-xs font-medium transition font-geist border bg-white/10 text-white hover:bg-white/20 border-white/10" href="#application">Obtenir un Devis</a>
</article>
</div>
</div>
</section>

<section className="overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/278bbef6-c861-4ed8-b799-a4713ff032b4_3840w.jpg)] bg-cover relative py-24" id="application">
<div className="absolute inset-0 backdrop-blur-sm bg-black/80"></div>
<div className="sm:px-6 lg:px-8 max-w-3xl mr-auto ml-auto pr-4 pl-4 relative z-10">
<div className="text-center mb-10 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<span className="inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium backdrop-blur font-geist border-white/10 text-white/70 bg-purple-400/5">Candidature</span>
<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter text-white">Lancez Votre Projet</h2>
<p className="mt-4 text-lg font-geist text-white/70">Ligne directe avec la direction. Pas de chargés de compte, juste des experts.</p>
</div>
<form className="border p-6 sm:p-10 rounded-2xl backdrop-blur-xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] bg-black/50 border-white/10">
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<div className="col-span-1">
<label className="block text-xs font-medium mb-2 font-geist text-white/60" htmlFor="name">Nom</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-1 transition font-geist placeholder-white/20 focus:border-slate-500 focus:ring-slate-500 border-white/10 text-white bg-purple-400/5" id="name" placeholder="Votre Nom" style={{}} type="text"/>
</div>
<div className="col-span-1">
<label className="block text-xs font-medium mb-2 font-geist text-white/60" htmlFor="email">Email</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-1 transition font-geist placeholder-white/20 focus:border-slate-500 focus:ring-slate-500 border-white/10 text-white bg-purple-400/5" id="email" placeholder="john@company.com" style={{}} type="email"/>
</div>
<div className="col-span-1">
<label className="block text-xs font-medium mb-2 font-geist text-white/60" htmlFor="budget">Budget Estimé</label>
<div className="relative">
<select className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-1 transition font-geist appearance-none focus:border-slate-500 focus:ring-slate-500 border-white/10 text-white bg-purple-400/5" id="budget" style={{}}>
<option className="bg-black text-white/70">Sélectionner une plage</option>
<option className="bg-black">$3k - $5k</option>
<option className="bg-black">$5k - $10k</option>
<option className="bg-black">$10k+</option>
</select>
<svg className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-white/40" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="col-span-1">
<label className="block text-xs font-medium mb-2 font-geist text-white/60" htmlFor="goal">Objectif Principal</label>
<div className="relative">
<select className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-1 transition font-geist appearance-none focus:border-slate-500 focus:ring-slate-500 border-white/10 text-white bg-purple-400/5" id="goal" style={{}}>
<option className="bg-black text-white/70">Sélectionner un Objectif</option>
<option className="bg-black">Autorité de Marque</option>
<option className="bg-black">Génération de Leads</option>
<option className="bg-black">Vente Directe / E-com</option>
</select>
<svg className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-white/40" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="col-span-1 sm:col-span-2">
<label className="block text-xs font-medium mb-2 font-geist text-white/60" htmlFor="details">Détails du Projet</label>
<textarea className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-1 transition font-geist placeholder-white/20 focus:border-slate-500 focus:ring-slate-500 border-white/10 text-white bg-purple-400/5" id="details" placeholder="Parlez-nous de votre vision..." rows="3" style={{}}></textarea>
</div>
</div>
<div className="mt-8 text-center">
<button className="inline-flex items-center gap-2 rounded-xl border px-8 py-4 text-sm font-semibold transition font-geist shadow-[0_0_30px_rgba(16,185,129,0.3)] w-full sm:w-auto justify-center border-slate-500/20 bg-slate-500 text-black hover:bg-slate-400" style={{}} type="button">
                    Soumettre la Candidature
                    <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</form>
</div>
</section>

<footer className="xl:mt-0 border-t relative border-white/10 bg-black">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid gap-8 md:grid-cols-4">
<div className="md:col-span-2">
<a className="flex items-center gap-2" href="/">
<img alt="Limited" className="h-6 w-auto" src="https://i.ibb.co/ZRc2kt2R/logotype.png" style={{}}/>
</a>
<p className="mt-4 text-sm max-w-md font-geist text-white/70">Nous bâtissons des expériences digitales orientées conversion pour les marques qui exigent le meilleur. Les places sont limitées. Agissez maintenant.</p>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-tight font-geist">Agence</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li className=""><a className="font-geist hover:text-white" href="#manifesto">Philosophie</a></li>
<li><a className="font-geist hover:text-white" href="#ecosystem">Écosystème</a></li>
<li><a className="font-geist hover:text-white" href="#pricing">Investissement</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-tight font-geist">Légal</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li className=""><a className="font-geist hover:text-white" href="#">Conditions Générales</a></li>
<li className=""><a className="font-geist hover:text-white" href="#">Politique de Confidentialité</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-6 border-white/10">
<p className="text-xs font-geist text-white/50">© <span className="font-geist" id="year">2026</span> Limited. Tous Droits Réservés.</p>
</div>
</div>
</footer>
</div>



    </>
  );
}
