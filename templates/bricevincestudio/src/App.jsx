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
      

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md border-black/5 bg-zinc-50/80" style={{}}>
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter hover:opacity-80 transition-opacity text-[#ff1a56]" href="#" style={{}}>
                BRICEVINCE<span className="text-zinc-500" style={{}}>.STUDIO</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600" style={{}}>
<a className="transition-colors hover:text-black" href="#services">Expertises</a>
<a className="transition-colors hover:text-black" href="#work" style={{}}>Réalisations</a>
<a className="transition-colors hover:text-black" href="#pricing" style={{}}>Offres</a>
<a className="transition-colors hover:text-black" href="#process" style={{}}>Approche</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-full transition-colors text-zinc-50 bg-black hover:bg-zinc-800" href="#contact" style={{}}>
                Démarrer un projet
            </a>

<button className="md:hidden text-[#ff1a56]" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 border-black/10 bg-black/5 text-indigo-700" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-600"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Studio Créatif Digital
            </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-[#ff1a56] tracking-tight mb-6" style={{}}>
                Façonner l'impact par<br/>
<span className="bg-clip-text text-transparent bg-[#f81b56]">l'image et le mouvement.</span>
</h1>
<p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light text-zinc-600" style={{}}>
                Nous fusionnons stratégie de marque, design d'interface et motion design pour créer des expériences digitales qui convertissent et marquent les esprits.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium rounded-full transition-all flex items-center justify-center gap-2 bg-black text-zinc-50 hover:bg-zinc-800" href="#contact" style={{}}>
                    Discuter de votre vision
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 border text-sm font-medium rounded-full transition-all text-[#ff1a56] border-black/10 hover:bg-black/5" href="#work" style={{}}>
                    Voir le portfolio
                </a>
</div>
</div>
</section>

<div className="border-y border-black/5 bg-zinc-100/20" style={{}}>
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-xs text-zinc-500 mb-6 font-medium tracking-wide uppercase" style={{}}>Ils nous font confiance</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">

<span className="text-xl font-semibold tracking-tighter flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hexagon" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> ACME Corp</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:triangle" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Vertex</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:circle" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg> Sphere</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:box" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg> Cubix</span>
</div>
</div>
</div>

<section className="py-24 md:py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-[#ff1a56]" style={{}}>Une approche globale.</h2>
<p className="max-w-xl text-lg font-light text-zinc-600" style={{}}>Nous ne créons pas seulement des visuels, nous construisons des écosystèmes cohérents à travers trois pôles d'expertise.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden bg-zinc-100/40 border-black/5 hover:border-black/10" style={{}}>
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{}}></div>
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-[#ff1a56] bg-zinc-100 border-black/10" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:fingerprint" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0 1 18-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 0 1 9 5.2v2"></path></g></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-[#ff1a56]" style={{}}>Branding</h3>
<p className="text-sm mb-6 leading-relaxed text-zinc-600" style={{}}>
                        De la stratégie à l'identité visuelle. Nous définissons l'ADN de votre marque pour qu'elle résonne avec votre audience cible.
                    </p>
<ul className="space-y-2 text-sm text-zinc-500" style={{}}>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-600" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Stratégie de marque</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-600" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Identité visuelle &amp; Logo</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-600" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Brand Guidelines</li>
</ul>
</div>

<div className="group relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden bg-zinc-100/40 border-black/5 hover:border-black/10" style={{}}>
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{}}></div>
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-[#ff1a56] bg-zinc-100 border-black/10" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18M9 21V9"></path></g></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-[#ff1a56]" style={{}}>Product (UX/UI)</h3>
<p className="text-sm mb-6 leading-relaxed text-zinc-600" style={{}}>
                        Des interfaces intuitives et esthétiques. Nous concevons des produits digitaux centrés sur l'utilisateur et la performance.
                    </p>
<ul className="space-y-2 text-sm text-zinc-500" style={{}}>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-600" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Web Design</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-600" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> App Mobile (iOS/Android)</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-600" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Design Systems</li>
</ul>
</div>

<div className="group relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden bg-zinc-100/40 border-black/5 hover:border-black/10" style={{}}>
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{}}></div>
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-[#ff1a56] bg-zinc-100 border-black/10" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clapperboard" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6L3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Zm-14-.7l3.1 3.9m3.1-5.8l3.1 4M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-[#ff1a56]" style={{}}>Audiovisuel</h3>
<p className="text-sm mb-6 leading-relaxed text-zinc-600" style={{}}>
                        Donner vie à votre message. Le mouvement capte l'attention et explique des concepts complexes en quelques secondes.
                    </p>
<ul className="space-y-2 text-sm text-zinc-500" style={{}}>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-600" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Motion Design 2D/3D</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-600" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Montage Vidéo</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-600" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Showreels &amp; Publicités</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-t pt-24 pb-24 bg-zinc-50 border-black/5" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2 text-[#ff1a56]" style={{}}>Sélection de projets.</h2>
<p className="font-light text-zinc-600" style={{}}>Découvrez comment nous aidons nos clients à se transformer.</p>
</div>
<a className="text-sm border-b pb-0.5 transition-colors self-start md:self-auto text-[#ff1a56] border-black/20 hover:border-black" href="#" style={{}}>
                    Voir toutes les études de cas
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border mb-4 bg-zinc-100 border-black/5" style={{}}>
<div className="absolute inset-0 bg-gradient-to-tr group-hover:scale-105 transition-transform duration-700 ease-out from-zinc-200 to-zinc-100"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-30">
<div className="w-32 h-32 rounded-full border border-black/20"></div>
<div className="absolute w-40 h-40 rounded-full border ml-8 mt-8 border-black/10" style={{}}></div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium group-hover:text-indigo-300 transition-colors text-[#ff1a56]" style={{}}>Fintech Evolution</h3>
<p className="text-sm text-zinc-500" style={{}}>Rebranding &amp; UX App Mobile</p>
</div>
<span className="p-2 rounded-full border opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-[#ff1a56] border-black/10" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border mb-4 bg-zinc-100 border-black/5" style={{}}>
<div className="absolute inset-0 bg-gradient-to-bl group-hover:scale-105 transition-transform duration-700 ease-out from-indigo-100/20 to-zinc-100"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30">
<svg aria-hidden="true" className="iconify w-24 h-24 iconify--lucide text-black/10" data-icon="lucide:play-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium group-hover:text-indigo-300 transition-colors text-[#ff1a56]" style={{}}>Luxe Motion</h3>
<p className="text-sm text-zinc-500" style={{}}>Campagne Vidéo &amp; Motion 3D</p>
</div>
<span className="p-2 rounded-full border opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-[#ff1a56] border-black/10" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border mb-4 bg-zinc-100 border-black/5" style={{}}>
<div className="absolute inset-0 bg-gradient-to-br group-hover:scale-105 transition-transform duration-700 ease-out from-emerald-100/10 to-zinc-100"></div>
<div className="absolute bottom-8 left-8 right-8 h-px bg-black/10"></div>
<div className="absolute bottom-8 left-8 h-24 w-px bg-black/10"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium group-hover:text-indigo-300 transition-colors text-[#ff1a56]" style={{}}>EcoSystem Dashboard</h3>
<p className="text-sm text-zinc-500" style={{}}>Design System &amp; Plateforme SaaS</p>
</div>
<span className="p-2 rounded-full border opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-[#ff1a56] border-black/10" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border mb-4 bg-zinc-100 border-black/5" style={{}}>
<div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out bg-zinc-200"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
<div className="text-4xl font-bold tracking-tighter text-black/10">TYPO</div>
<div className="text-4xl font-bold tracking-tighter text-black/10">GRAPHY</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium group-hover:text-indigo-300 transition-colors text-[#ff1a56]" style={{}}>Architek</h3>
<p className="text-sm text-zinc-500" style={{}}>Identité Complète</p>
</div>
<span className="p-2 rounded-full border opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-[#ff1a56] border-black/10" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-zinc-100/30 border-black/5" id="process" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-[#ff1a56]" style={{}}>Un studio à taille humaine,<br/>des ambitions globales.</h2>
<p className="text-lg font-light leading-relaxed mb-8 text-zinc-600" style={{}}>
                        Contrairement aux grandes agences, vous échangez directement avec les créatifs. Nous éliminons le bruit pour nous concentrer sur l'essentiel : la qualité de votre produit.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border bg-black/5 border-black/10" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide text-indigo-600" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="font-medium mb-1 text-[#ff1a56]" style={{}}>Rapidité d'exécution</h4>
<p className="text-sm text-zinc-500" style={{}}>Des cycles courts et des itérations rapides pour livrer de la valeur plus vite.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border bg-black/5 border-black/10" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide text-indigo-600" data-icon="lucide:sparkles" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<div>
<h4 className="font-medium mb-1 text-[#ff1a56]" style={{}}>Créativité sans limite</h4>
<p className="text-sm text-zinc-500" style={{}}>Nous repoussons les standards visuels pour vous différencier.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-2xl rounded-full opacity-50"></div>
<div className="relative border rounded-2xl p-8 bg-zinc-50 border-black/10" style={{}}>
<div className="flex items-center gap-4 mb-6 border-b pb-6 border-black/5" style={{}}>
<div className="w-10 h-10 rounded-full bg-zinc-200"></div>
<div>
<div className="font-medium text-sm text-[#ff1a56]" style={{}}>Brice Vince</div>
<div className="text-zinc-500 text-xs" style={{}}>Directeur de Création</div>
</div>
</div>
<p className="text-lg font-light italic text-zinc-700">
                            "Notre objectif est simple : transformer la complexité de votre business en une expérience visuelle claire, désirable et performante."
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-t bg-zinc-50 border-black/5" id="pricing">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="md:text-4xl text-3xl font-medium text-[#ff1a56] tracking-tight mb-4">Nos Offres d'Accompagnement</h2>
<p className="text-lg font-light max-w-2xl mx-auto text-zinc-600">Deux approches adaptées à vos besoins : une transformation structurelle ou un flux continu de contenus créatifs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

<div className="relative group p-8 rounded-3xl border hover:border-indigo-500/30 transition-all duration-300 bg-zinc-100/40 border-black/5">
<div className="absolute top-0 right-0 p-6 opacity-50">
<svg className="text-black/5" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
</div>
<h3 className="text-xl font-medium mb-2 text-black">Création de Marque</h3>
<p className="text-sm mb-6 h-10 text-zinc-600">L'offre complète pour bâtir une identité forte de A à Z. Du branding à l'acquisition.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-3xl font-bold tracking-tight text-[#ff1a56]">Forfait</span>
<span className="text-sm text-zinc-500 font-medium">ou 3 500€ /mois</span>
</div>
<div className="space-y-6 mb-8">
<div className="relative pl-6 border-l border-indigo-500/30">
<div className="text-sm font-semibold mb-1 text-black">Phase 1 : Fondations</div>
<ul className="text-sm space-y-2 text-zinc-600">
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Stratégie de Marque</li>
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Identité Visuelle &amp; Logo</li>
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Charte Graphique Complète</li>
</ul>
</div>
<div className="relative pl-6 border-l border-indigo-500/30">
<div className="text-sm font-semibold mb-1 text-black">Phase 2 : Digital</div>
<ul className="text-sm space-y-2 text-zinc-600">
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Support Digital (Website)</li>
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Landing Pages optimisées</li>
</ul>
</div>
<div className="relative pl-6 border-l border-indigo-500/30">
<div className="text-sm font-semibold mb-1 text-black">Phase 3 : Contenu &amp; Ads</div>
<ul className="text-sm space-y-2 text-zinc-600">
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Direction Artistique &amp; Motion</li>
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Stratégie Social Media (SMM/CM)</li>
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Publicités (Ads)</li>
</ul>
</div>
</div>
<a className="flex w-full items-center justify-center rounded-lg border py-3 text-sm font-medium transition-colors border-black/10 bg-black/5 text-black hover:bg-black/10" href="#contact">
                        Démarrer la transformation
                    </a>
</div>

<div className="relative group p-8 rounded-3xl border bg-gradient-to-b hover:border-[#ff1a56]/50 transition-all duration-300 ring-1 from-zinc-100/60 to-zinc-100/40 border-black/10 ring-black/5">
<div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff1a56] to-transparent opacity-50"></div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-medium text-black">Content All-in-one</h3>
<span className="inline-flex items-center rounded-full border border-[#ff1a56]/30 bg-[#ff1a56]/10 px-2 py-1 text-xs font-medium text-[#ff1a56]">Populaire</span>
</div>
<p className="text-sm mb-6 h-10 text-zinc-600">Votre équipe créative externalisée. Production illimitée de contenus visuels.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-3xl font-bold tracking-tight text-[#ff1a56]">2 490€</span>
<span className="text-sm text-zinc-500 font-medium">/mois</span>
<span className="text-xs ml-2 text-zinc-400">Sans engagement</span>
</div>
<div className="grid grid-cols-2 gap-3 mb-8">
<div className="rounded-lg border p-3 border-black/5 bg-zinc-50/50">
<div className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Délai moyen</div>
<div className="text-sm font-medium text-black">48 heures</div>
</div>
<div className="rounded-lg border p-3 border-black/5 bg-zinc-50/50">
<div className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Réponse</div>
<div className="text-sm font-medium text-black">- de 2 heures</div>
</div>
<div className="rounded-lg border p-3 col-span-2 border-black/5 bg-zinc-50/50">
<div className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Volume</div>
<div className="text-sm font-medium text-black">Demandes illimitées <span className="text-zinc-500 font-normal">(une active à la fois)</span></div>
</div>
</div>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff1a56]/10 text-[#ff1a56]">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-zinc-700">Motion Design (2D/3D simple)</span>
</div>
<div className="flex items-center gap-3">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff1a56]/10 text-[#ff1a56]">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-zinc-700">Graphisme / DA Social Media</span>
</div>
<div className="flex items-center gap-3">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff1a56]/10 text-[#ff1a56]">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-zinc-700">Montage &amp; Capta Vidéo</span>
</div>
<div className="flex items-center gap-3">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff1a56]/10 text-[#ff1a56]">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-zinc-700">Landing Pages incluses</span>
</div>
</div>
<a className="flex w-full items-center justify-center rounded-lg bg-[#ff1a56] py-3 text-sm font-medium transition-colors hover:bg-[#d90d43] text-black" href="#contact">
                        S'abonner maintenant
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-[#ff1a56]" style={{}}>Prêt à transformer votre image ?</h2>
<p className="text-lg mb-12 font-light text-zinc-600" style={{}}>
                Parlez-nous de votre projet. Nous répondons sous 24h.
            </p>
<form className="text-left space-y-6 p-8 rounded-3xl border backdrop-blur-sm bg-zinc-100/50 border-black/5" style={{}}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-zinc-500 uppercase tracking-wider font-medium ml-1" style={{}}>Nom</label>
<input className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-700 text-[#ff1a56] bg-zinc-50/50 border-black/10" placeholder="Jean Dupont" style={{}} type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-500 uppercase tracking-wider font-medium ml-1" style={{}}>Email</label>
<input className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-700 text-[#ff1a56] bg-zinc-50/50 border-black/10" placeholder="jean@entreprise.com" style={{}} type="email"/>
</div>
</div>
<div className="space-y-3">
<label className="text-xs text-zinc-500 uppercase tracking-wider font-medium ml-1" style={{}}>Type de projet</label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="inline-block px-4 py-2 rounded-full border text-sm peer-checked:bg-white peer-checked:text-zinc-950 peer-checked:font-medium transition-all border-black/10 bg-zinc-50/50 text-zinc-600 hover:bg-zinc-100" style={{}}>Branding</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="inline-block px-4 py-2 rounded-full border text-sm peer-checked:bg-white peer-checked:text-zinc-950 peer-checked:font-medium transition-all border-black/10 bg-zinc-50/50 text-zinc-600 hover:bg-zinc-100" style={{}}>UX/UI Design</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="inline-block px-4 py-2 rounded-full border text-sm peer-checked:bg-white peer-checked:text-zinc-950 peer-checked:font-medium transition-all border-black/10 bg-zinc-50/50 text-zinc-600 hover:bg-zinc-100" style={{}}>Motion &amp; Vidéo</span>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-500 uppercase tracking-wider font-medium ml-1" style={{}}>Message</label>
<textarea className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-700 resize-none text-[#ff1a56] bg-zinc-50/50 border-black/10" placeholder="Dites-nous en plus sur vos objectifs..." rows="4" style={{}}></textarea>
</div>
<button className="w-full py-4 font-medium rounded-xl transition-colors flex items-center justify-center gap-2 mt-4 bg-black hover:bg-zinc-800 text-zinc-50" style={{}} type="button">
                    Envoyer la demande
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:send" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</section>

<footer className="border-t py-12 border-black/5 bg-zinc-50" style={{}}>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-base font-medium tracking-tight text-[#ff1a56]" style={{}}>BRICEVINCE<span className="text-zinc-400">.STUDIO</span></span>
</div>
<div className="text-zinc-500 text-sm" style={{}}>
                © 2024 Bricevince Studio. Tous droits réservés.
            </div>
<div className="flex gap-6">
<a className="text-zinc-500 transition-colors hover:text-black" href="#" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-zinc-500 transition-colors hover:text-black" href="#" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
<a className="text-zinc-500 transition-colors hover:text-black" href="#" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:dribbble" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94m19.5 1.9c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></g></svg></a>
</div>
</div>
</footer>

    </>
  );
}
