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
      

<header className="fixed z-50 bg-[#FDFBF9]/80 border-[#1A1918]/5 border-b top-0 right-0 left-0 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="text-xl tracking-tighter uppercase font-medium" href="#">Mascara</a>

<nav className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center cursor-pointer" onclick="window.location.href='/home'" role="button">
<a className="hover:text-[#1A1918] transition-colors text-sm font-normal text-[#1A1918]/70" href="/home">Accueil</a>
<a className="hover:text-[#1A1918] transition-colors text-sm font-normal text-[#1A1918]/70" href="/prestations">Prestations</a><a className="hover:text-[#1A1918] transition-colors text-sm font-normal text-[#1A1918]/70" href="/boutique">Boutique</a>
<a className="hover:text-[#1A1918] transition-colors text-sm font-normal text-[#1A1918]/70" href="/galerie">Galerie</a>
<a className="hover:text-[#1A1918] transition-colors text-sm font-normal text-[#1A1918]/70" href="/a-propos">À
            propos</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium bg-[#1A1918] text-white rounded-full hover:bg-[#2A2928] transition-colors" href="#reserver">
            Prendre rendez-vous
        </a>
<button className="md:hidden flex text-[#1A1918] items-center justify-center relative group" tabindex="0">
<svg className="lucide lucide-menu pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
<div className="absolute top-full right-0 mt-4 w-52 bg-white/95 backdrop-blur-md border border-[#1A1918]/5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(26,25,24,0.1)] opacity-0 invisible translate-y-2 group-focus:opacity-100 group-focus:visible group-focus:translate-y-0 transition-all duration-300 flex flex-col py-2 z-50 text-left">
<span className="px-5 py-3 text-sm font-normal text-[#1A1918]/70 hover:text-[#1A1918] hover:bg-[#1A1918]/5 transition-colors cursor-pointer block" onmousedown="window.location.href='/home'">Accueil</span>
<span className="px-5 py-3 text-sm font-normal text-[#1A1918]/70 hover:text-[#1A1918] hover:bg-[#1A1918]/5 transition-colors cursor-pointer block" onmousedown="window.location.href='/prestations'">Prestations</span>
<span className="px-5 py-3 text-sm font-normal text-[#1A1918]/70 hover:text-[#1A1918] hover:bg-[#1A1918]/5 transition-colors cursor-pointer block" onmousedown="window.location.href='/boutique'">Boutique</span>
<span className="px-5 py-3 text-sm font-normal text-[#1A1918]/70 hover:text-[#1A1918] hover:bg-[#1A1918]/5 transition-colors cursor-pointer block" onmousedown="window.location.href='/galerie'">Galerie</span>
<span className="px-5 py-3 text-sm font-normal text-[#1A1918]/70 hover:text-[#1A1918] hover:bg-[#1A1918]/5 transition-colors cursor-pointer block" onmousedown="window.location.href='/a-propos'">À propos</span>
</div>
</button>
</div>
</div>
</header>
<main className="">

<section className="mdpt48 md:pb- overflow-hidden min-h-[vh] flex flex-col pt-32 pr-6 pl-6 relative justify-center" id="accueil">
<div className="-z- absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute right-[-8%] top-[18%] h-72 w-72 rounded-full bg-[#E1D9]/40 blur-3xl"></div>
<div className="bg-[#F3ECE] w-64 h-64 rounded-full absolute bottom-[12%] left-[-%] blur-3xl"></div><div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 z-10 w-full max-w-7xl mr-auto ml-auto pt-12 pb-20 relative gap-x-16 gap-y-16 items-center">

<div className="flex flex-col lg:mt-0 z-10 max-w-2xl mt-8 relative gap-x-6 gap-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1918]/5 border border-[#1A1918]/10 w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#1A1918] to-[#8a7f73]"></span>
<span className="text-[11px] font-medium tracking-widest uppercase text-[#1A1918]/80 font-manrope">Institut d'exception</span>
</div>
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-normal tracking-tight font-playfair">
<span className="bg-clip-text text-transparent bg-gradient-to-br from-[#1A1918] via-[#4a433d] to-[#8a7f73] font-geist font-semibold tracking-tight">L'art subtil de</span>
<br className="hidden lg:block"/>
<span className="inline-block italic text-black font-playfair mt-2 relative">
                la beauté durable
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#EAE1D9] -z-10" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="8"></path>
</svg>
</span>
</h1>
<p className="leading-relaxed text-lg font-light text-[#1A1918]/70 font-manrope max-w-lg">
            Révélez votre harmonie faciale grâce à nos techniques avancées de dermopigmentation. Un résultat naturel, créé sur-mesure pour sublimer votre unicité.
        </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
<a className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium bg-gradient-to-r from-[#1A1918] to-[#4a433d] text-[#FDFBF9] rounded-full hover:scale-[1.02] transition-all w-full sm:w-auto shadow-sm font-manrope" href="#reserver">
                Prendre rendez-vous
            </a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#1A1918] hover:bg-[#1A1918]/5 rounded-full transition-colors w-full sm:w-auto font-manrope" href="#prestations">
                Découvrir nos soins
                <iconify-icon className="text-base" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="flex items-center gap-5 mt-10 pt-8 border-t border-[#1A1918]/5">
<div className="flex -space-x-3">
<img alt="Avis Client" className="w-10 h-10 rounded-full border-2 border-[#FDFBF9] object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Avis Client" className="w-10 h-10 rounded-full border-2 border-[#FDFBF9] object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Avis Client" className="w-10 h-10 rounded-full border-2 border-[#FDFBF9] object-cover shadow-sm" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center">
<div className="flex gap-0.5">
<iconify-icon className="fill-current text-[#8a7f73] text-xs" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current text-[#8a7f73] text-xs" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current text-[#8a7f73] text-xs" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current text-[#8a7f73] text-xs" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current text-[#8a7f73] text-xs" icon="lucide:star"></iconify-icon>
</div>
<span className="text-[13px] font-medium text-[#1A1918]/60 mt-1 font-manrope"> sur plus de 120 avis</span>
</div>
</div>
</div>

<div className="relative w-full max-w-md mx-auto lg:ml-auto aspect-[3/4] group mt-12 lg:mt-0">

<div className="absolute inset-0 w-full h-full bg-[#EAE1D9]/90 translate-x-5 translate-y-6 transition-transform duration-700 group-hover:translate-x-7 group-hover:translate-y-8" style={{WebkitMaskImage: 'url(\'data:image/svg+xml, %3Csvg viewBox=%220 0 100 120%22 preserveAspectRatio=%22none%22 xmlns=%22http: //www.w3.org/2000/svg%22%3E%3Cpath d=%22M 25, 5 C 40, -2 60, 8 75, 5 C 90, 2 95, 20 92, 40 C 89, 60 98, 80 90, 100 C 82, 120 60, 115 45, 118 C 30, 121 10, 110 5, 90 C 0, 70 15, 50 10, 30 C 5, 10 10, 12 25, 5 Z%22/%3E%3C/svg%3E\')', WebkitMaskSize: '100% 100%', maskImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 100 120%22 preserveAspectRatio=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M 25,5 C 40,-2 60,8 75,5 C 90,2 95,20 92,40 C 89,60 98,80 90,100 C 82,120 60,115 45,118 C 30,121 10,110 5,90 C 0,70 15,50 10,30 C 5,10 10,12 25,5 Z%22/%3E%3C/svg%3E\')', maskSize: '100% 100%'}}>
</div>

<div className="relative w-full h-full" style={{WebkitMaskImage: 'url(\'data:image/svg+xml, %3Csvg viewBox=%220 0 100 120%22 preserveAspectRatio=%22none%22 xmlns=%22http: //www.w3.org/2000/svg%22%3E%3Cpath d=%22M 25, 5 C 40, -2 60, 8 75, 5 C 90, 2 95, 20 92, 40 C 89, 60 98, 80 90, 100 C 82, 120 60, 115 45, 118 C 30, 121 10, 110 5, 90 C 0, 70 15, 50 10, 30 C 5, 10 10, 12 25, 5 Z%22/%3E%3C/svg%3E\')', WebkitMaskSize: '100% 100%', maskImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 100 120%22 preserveAspectRatio=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M 25,5 C 40,-2 60,8 75,5 C 90,2 95,20 92,40 C 89,60 98,80 90,100 C 82,120 60,115 45,118 C 30,121 10,110 5,90 C 0,70 15,50 10,30 C 5,10 10,12 25,5 Z%22/%3E%3C/svg%3E\')', maskSize: '100% 100%'}}>
<img alt="Soin Mascara Institut" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>

<div className="absolute top-0 right-0 bottom-0 left-0">
<img alt="Beauté des sourcils" className="group-hover:scale-100 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38b3d847-5e9f-4efb-9a71-bd78cff34ea9_1600w.png"/>
<div className="bg-gradient-to-tr from-[#1A1918]/20 to-transparent opacity-50 mix-blend-multiply absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>

<div className="absolute bottom-6 -left-4 lg:-left-12 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl border border-[#1A1918]/5 shadow-[0_20px_40px_-15px_rgba(26,25,24,0.1)] flex items-center gap-4 transform -rotate-2 hover:rotate-0 transition-transform duration-500 z-20">
<div className="w-10 h-10 rounded-full bg-[#FDFBF9] border border-[#1A1918]/5 flex items-center justify-center text-[#1A1918]">
<iconify-icon className="text-lg" icon="lucide:sparkles"></iconify-icon>
</div>
<div className="">
<p className="text-[10px] uppercase tracking-widest font-normal text-[#1A1918]/50 mb-0.5">Technique</p>
<p className="text-sm font-normal text-[#1A1918] tracking-tight">Signature Mascara</p>
</div>
</div>
</div>
</div>
</section>


<section className="border-y bg-white border-[#1A1918]/5 pt-24 pr-6 pb-24 pl-6" id="apropos">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
<iconify-icon className="text-3xl text-[#1A1918]/40" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-[#1A1918]">L'Art de la Dermopigmentation</h2>
<p className="text-base font-normal text-[#1A1918]/70 leading-relaxed max-w-2xl">
                    Mascara est né d'une passion pour l'esthétisme de précision. Notre mission est de vous redonner confiance à travers des techniques de maquillage permanent subtiles et modernes. Chaque prestation est réalisée sur-mesure, dans le respect de votre harmonie faciale, avec des équipements de pointe et des pigments de la plus haute qualité.
                </p>
<img alt="Institut Mascara" className="w-full h-64 object-cover rounded-xl mt-8 sepia-[.2]" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</section><section className="pt-24 pr-6 pb-24 pl-6" id="prestations">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div className="">
<span className="text-xs tracking-widest uppercase font-medium text-[#1A1918]/60 mb-3 block">Expertise</span>
<h2 className="text-4xl md:text-5xl tracking-tight font-medium text-[#1A1918]">Nos Prestations</h2>
</div>
<p className="text-sm text-[#1A1918]/60 max-w-xs md:text-right">
                        Des techniques avancées pour un résultat naturel et durable.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="group hover:border-[#1A1918]/15 transition-colors flex flex-col bg-white h-full border-[#1A1918]/5 border rounded-2xl p-8">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 bg-[#FDFBF9] rounded-full flex items-center justify-center border border-[#1A1918]/5 text-[#1A1918]">
<svg className="lucide lucide-pen" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg>
</div>
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium tracking-widest uppercase bg-[#1A1918]/5 text-[#1A1918]/80">Populaire</span>
</div>
<h3 className="text-xl tracking-tight font-medium mb-3">Maquillage Permanent Sourcils</h3>
<p className="text-sm text-[#1A1918]/60 mb-5">
        Restructuration complète du regard pour un effet poudré, poil à poil ultra-réaliste ou mixte. Redessine la ligne en respectant l'harmonie naturelle de votre visage.
    </p>
<div className="flex items-center gap-4 mb-6 text-xs text-[#1A1918]/60 font-medium">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-clock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span>2h - 2h30</span>
</div>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-calendar-days" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
<span>Tenue 1-2 ans</span>
</div>
</div>
<ul className="text-sm text-[#1A1918]/80 space-y-3 mb-8 flex-grow">
<li className="flex items-center justify-between border-b border-[#1A1918]/5 pb-2">
<span>Microblading <span className="text-[11px] text-[#1A1918]/50 ml-1 font-normal">(Poil à poil)</span></span>
<span className="font-medium text-xs">À partir de 250€</span>
</li>
<li className="flex items-center justify-between border-b border-[#1A1918]/5 pb-2">
<span>Powder Brows <span className="text-[11px] text-[#1A1918]/50 ml-1 font-normal">(Effet poudré)</span></span>
<span className="font-medium text-xs">À partir de 280€</span>
</li>
<li className="flex items-center justify-between border-b border-[#1A1918]/5 pb-2">
<span>Combo Brows <span className="text-[11px] text-[#1A1918]/50 ml-1 font-normal">(Mixte)</span></span>
<span className="font-medium text-xs">À partir de 300€</span>
</li>
</ul>
<a className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-medium text-[#1A1918] bg-[#FDFBF9] border border-[#1A1918]/10 rounded-full group-hover:bg-[#1A1918] group-hover:text-white transition-colors" href="#reserver">
        Réserver une consultation
    </a>
</div>

<div className="group hover:border-[#1A1918]/15 transition-colors flex flex-col overflow-hidden bg-[#EAE1D9]/30 h-full border-[#1A1918]/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 right-0 p-4">
<span className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm text-[10px] uppercase tracking-widest rounded-full">Signature</span>
</div>
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 border border-[#1A1918]/5 text-[#1A1918]">
<iconify-icon className="text-xl" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium mb-3">Maquillage Permanent Lèvres</h3>
<p className="text-sm text-[#1A1918]/60 mb-5">
        Sublimez votre sourire avec une pigmentation douce. Redessinez le contour et réveillez la couleur de vos lèvres pour un effet naturel et lumineux au quotidien.
    </p>
<div className="flex items-center gap-4 mb-6 text-xs text-[#1A1918]/60 font-medium">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-clock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span>2h - 3h</span>
</div>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-calendar-days" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
<span>Tenue 2-3 ans</span>
</div>
</div>
<ul className="text-sm text-[#1A1918]/80 space-y-3 mb-8 flex-grow">
<li className="flex items-center justify-between border-b border-[#1A1918]/5 pb-2">
<span>Candy Lips <span className="text-[11px] text-[#1A1918]/50 ml-1 font-normal">(Effet mordu)</span></span>
<span className="font-medium text-xs">À partir de 350€</span>
</li>
<li className="flex items-center justify-between border-b border-[#1A1918]/5 pb-2">
<span>Aquarelle Lips <span className="text-[11px] text-[#1A1918]/50 ml-1 font-normal">(Transparence)</span></span>
<span className="font-medium text-xs">À partir de 320€</span>
</li>
<li className="flex items-center justify-between border-b border-[#1A1918]/5 pb-2">
<span>Dark Lips <span className="text-[11px] text-[#1A1918]/50 ml-1 font-normal">(Neutralisation)</span></span>
<span className="font-medium text-xs">À partir de 380€</span>
</li>
</ul>
<a className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-medium text-[#1A1918] bg-[#FDFBF9] border border-[#1A1918]/10 rounded-full group-hover:bg-[#1A1918] group-hover:text-white transition-colors" href="#reserver">
        Réserver une consultation
    </a>
</div>

<div className="group hover:border-[#1A1918]/15 transition-colors flex flex-col bg-white h-full border-[#1A1918]/5 border rounded-2xl p-8">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 bg-[#FDFBF9] rounded-full flex items-center justify-center border border-[#1A1918]/5 text-[#1A1918]">
<svg className="lucide lucide-eye" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium tracking-widest uppercase bg-[#1A1918]/5 text-[#1A1918]/80">Nouveau</span>
</div>
<h3 className="text-xl tracking-tight font-medium mb-3">Maquillage Permanent Yeux</h3>
<p className="text-sm text-[#1A1918]/60 mb-5">
        Intensifiez votre regard de façon permanente. De l'effet ras de cils discret à l'eye-liner plus sophistiqué, sublimez la forme de vos yeux avec précision.
    </p>
<div className="flex items-center gap-4 mb-6 text-xs text-[#1A1918]/60 font-medium">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-clock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span>1h30 - 2h</span>
</div>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-calendar-days" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
<span>Tenue 2-3 ans</span>
</div>
</div>
<ul className="text-sm text-[#1A1918]/80 space-y-3 mb-8 flex-grow">
<li className="flex items-center justify-between border-b border-[#1A1918]/5 pb-2">
<span>Ras de cils <span className="text-[11px] text-[#1A1918]/50 ml-1 font-normal">(Intensification)</span></span>
<span className="font-medium text-xs">À partir de 200€</span>
</li>
<li className="flex items-center justify-between border-b border-[#1A1918]/5 pb-2">
<span>Eye-liner <span className="text-[11px] text-[#1A1918]/50 ml-1 font-normal">(Tracé net)</span></span>
<span className="font-medium text-xs">À partir de 250€</span>
</li>
<li className="flex items-center justify-between border-b border-[#1A1918]/5 pb-2">
<span>Soft Liner <span className="text-[11px] text-[#1A1918]/50 ml-1 font-normal">(Effet fumé)</span></span>
<span className="font-medium text-xs">À partir de 280€</span>
</li>
</ul>
<a className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-medium text-[#1A1918] bg-[#FDFBF9] border border-[#1A1918]/10 rounded-full group-hover:bg-[#1A1918] group-hover:text-white transition-colors" href="#reserver">
        Réserver une consultation
    </a>
</div></div></div></section></main>
    </>
  );
}
