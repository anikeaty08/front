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



        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    
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
      

<nav className="fixed top-0 w-full z-50 glass-card border-b border-white/5 bg-black/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group select-none" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-normal text-lg tracking-tight">SEO<span className="opacity-50 font-light">SIBIU</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-400">
<a className="hover:text-white transition-colors" href="#agentie-seo">Agenție SEO</a>
<a className="hover:text-white transition-colors" href="#seo-vs-ppc">SEO vs PPC</a>
<a className="hover:text-white transition-colors" href="#servicii">Servicii</a>
<a className="hover:text-white transition-colors" href="#ecommerce-local">eCommerce</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-normal text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all rounded-full" href="#raport-seo">
<iconify-icon icon="solar:scanner-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Audit Gratuit
                </a>
<button className="md:hidden text-white pt-1">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-24 pb-12 bg-grid overflow-hidden">
<div className="glow-spot top-0 left-[-10%]"></div>
<div className="glow-spot bottom-[-20%] right-[-10%] opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 z-10 fade-up visible">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-normal text-indigo-300 tracking-wide uppercase">Specialiști în creștere organică</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.1]">
                    Optimizare SEO <span className="text-gradient-accent">Sibiu</span>
</h1>
<p className="text-lg text-zinc-400 max-w-lg leading-relaxed font-light">
                    Creștem vizibilitatea brandului tău în căutările locale și naționale. O bună optimizare site atrage clienți relevanți, gata să cumpere, fără să depinzi exclusiv de reclame plătite.
                </p>
<div className="flex flex-wrap items-center gap-4">
<a className="px-8 py-3.5 bg-white text-black text-sm font-normal rounded-lg hover:bg-zinc-200 transition-all shadow-[0_0_20px_-10px_rgba(255,255,255,0.5)] flex items-center gap-2" href="#raport-seo">
                        Analizează-ți Site-ul
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="px-8 py-3.5 border border-white/10 text-white text-sm font-normal rounded-lg hover:bg-white/5 transition-all flex items-center gap-2 group" href="#statistici">
                        Află mai multe
                    </a>
</div>
<div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-zinc-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Creștere Trafic Organic
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        ROI Superior vs PPC
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Raportare Transparentă
                    </div>
</div>
</div>

<div className="relative z-10 fade-up delay-100 visible lg:pl-10">
<div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
<div className="flex justify-between items-start mb-10">
<div>
<h3 className="text-sm font-normal text-white">Performanță Organică</h3>
<p className="text-xs text-zinc-500 mt-1">Cuvinte cheie: "Servicii Sibiu"</p>
</div>
<div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs flex items-center gap-1">
<iconify-icon icon="solar:trending-up-linear" strokeWidth="1.5"></iconify-icon>
                            +124%
                        </div>
</div>
<div className="relative h-60 w-full mb-6">
<div className="absolute inset-0 flex flex-col justify-between text-xs text-zinc-700">
<div className="border-t border-white/5 w-full"></div>
<div className="border-t border-white/5 w-full"></div>
<div className="border-t border-white/5 w-full"></div>
<div className="border-t border-white/5 w-full"></div>
<div className="border-t border-white/5 w-full"></div>
</div>
<svg className="w-full h-full absolute inset-0 overflow-visible" preserveaspectratio="none" viewbox="0 0 400 200">
<defs>
<lineargradient id="gradientArea" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#6366f1" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#6366f1" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 180 C 80 170, 120 140, 180 130 S 260 80, 400 30" fill="url(#gradientArea)" stroke="none"></path>
<path className="draw-path drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]" d="M0 180 C 80 170, 120 140, 180 130 S 260 80, 400 30" fill="none" stroke="#6366f1" strokeWidth="2"></path>
<circle cx="180" cy="130" fill="#000" r="4" stroke="#fff" strokeWidth="2"></circle>
<circle className="animate-pulse" cx="400" cy="30" fill="#fff" r="4"></circle>
</svg>
<div className="absolute top-[10%] right-0 bg-zinc-900/90 backdrop-blur border border-white/10 px-3 py-2 rounded-lg text-xs shadow-xl transform translate-x-2">
<div className="text-zinc-400 text-xs">Trafic Organic</div>
<div className="text-white font-normal">3,402 Vizite</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-3 rounded bg-white/5 border border-white/5">
<div className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Poziție Medie</div>
<div className="text-white font-normal flex items-center gap-2">
                                3.2 <span className="text-green-500 text-xs">▲ 12</span>
</div>
</div>
<div className="p-3 rounded bg-white/5 border border-white/5">
<div className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Conversii</div>
<div className="text-white font-normal flex items-center gap-2">
                                4.8% <span className="text-green-500 text-xs">▲ 0.5%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-black/50" id="statistici">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-up">
<h2 className="text-3xl font-normal text-white tracking-tight mb-4">De Ce Să Alegi Optimizarea Organică?</h2>
<p className="text-zinc-400 max-w-2xl mx-auto font-light">Cifrele confirmă importanța traficului organic pentru succesul pe termen lung și consolidarea brandului pe piață.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-up">
<div className="glass-card p-8 rounded-xl text-center group hover:border-indigo-500/30 transition-all">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="text-4xl lg:text-5xl font-medium text-white mb-2 tracking-tight">53.3%</div>
<p className="text-sm text-zinc-400 leading-relaxed">Din tot traficul web provine din căutări organice. Este principala sursă de vizitatori relevanți pentru majoritatea industriilor.</p>
</div>
<div className="glass-card p-8 rounded-xl text-center group hover:border-indigo-500/30 transition-all">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="text-4xl lg:text-5xl font-medium text-white mb-2 tracking-tight">1000%+</div>
<p className="text-sm text-zinc-400 leading-relaxed">ROI (Return on Investment) estimat pentru SEO pe termen lung, depășind pe departe alte canale de publicitate.</p>
</div>
<div className="glass-card p-8 rounded-xl text-center group hover:border-indigo-500/30 transition-all">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:eye-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="text-4xl lg:text-5xl font-medium text-white mb-2 tracking-tight">70-80%</div>
<p className="text-sm text-zinc-400 leading-relaxed">Dintre utilizatori ignoră complet reclamele plătite (Sponsorizat) și dau click exclusiv pe rezultatele organice.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-black border-b border-white/5" id="raport-seo">
<div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !w-[600px] !h-[600px] opacity-20"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 fade-up">
<div className="glass-card p-8 md:p-12 rounded-2xl border-indigo-500/30 bg-indigo-900/5 relative shadow-[0_0_50px_-20px_rgba(99,102,241,0.2)] overflow-hidden">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
<div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center relative z-10">

<div className="lg:col-span-3 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm">
<iconify-icon className="text-indigo-400" icon="solar:document-text-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-normal text-indigo-300 uppercase tracking-wide">Raport SEO Gratuit</span>
</div>
<h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight leading-tight">
                            Analizează-ți site-ul acum. <br/>Primești un audit PDF pe email.
                        </h2>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                            Află exact ce te reține din a ajunge pe prima pagină în Google. Raportul include scorul de sănătate al site-ului, erorile critice on-page, probleme de viteză și un plan de acțiune detaliat.
                        </p>
<form className="space-y-4 pt-4" onsubmit="event.preventDefault(); alert('Cererea a fost trimisă! Raportul SEO PDF va fi generat și trimis pe emailul tău în scurt timp.');">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="w-full bg-black/60 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="https://siteul-tau.ro" required="" type="url"/>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="w-full bg-black/60 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="Adresa ta de email" required="" type="email"/>
</div>
</div>
<button className="w-full bg-white text-black text-sm font-normal py-3 rounded-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-10px_rgba(255,255,255,0.5)]" type="submit">
                                Generează Raportul PDF
                                <iconify-icon icon="solar:document-download-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<p className="text-xs text-zinc-500 text-center font-light pt-1">
                                Procesul de scanare completă a website-ului durează aproximativ ~2 minute.
                            </p>
</form>
</div>

<div className="lg:col-span-2 hidden lg:block relative">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-2xl filter blur-2xl"></div>

<div className="relative glass-card bg-black/50 border border-white/10 rounded-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl backdrop-blur-xl">
<div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
<div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<span className="text-xs font-normal uppercase text-zinc-500 tracking-widest">Scor General</span>
</div>

<div className="flex justify-center mb-8">
<div className="relative w-32 h-32 rounded-full flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full transform -rotate-90" viewbox="0 0 96 96">
<circle cx="48" cy="48" fill="none" r="44" stroke="rgba(255,255,255,0.05)" strokeWidth="5"></circle>
<circle className="transition-all duration-1000 ease-out drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]" cx="48" cy="48" fill="none" r="44" stroke="#6366f1" stroke-dasharray="276" stroke-dashoffset="50" strokeWidth="5"></circle>
</svg>
<div className="flex items-end gap-1">
<span className="text-4xl text-white font-normal tracking-tighter">82</span>
<span className="text-sm text-zinc-500 mb-1">/100</span>
</div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-400 flex items-center gap-2"><iconify-icon className="text-red-400" icon="solar:danger-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> Erori Critice</span>
<span className="text-white font-normal bg-red-500/10 px-2 py-0.5 rounded text-xs">12</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-400 flex items-center gap-2"><iconify-icon className="text-yellow-400" icon="solar:info-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> Avertismente</span>
<span className="text-white font-normal bg-yellow-500/10 px-2 py-0.5 rounded text-xs">34</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-400 flex items-center gap-2"><iconify-icon className="text-green-400" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> Trecute cu succes</span>
<span className="text-white font-normal bg-green-500/10 px-2 py-0.5 rounded text-xs">105</span>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 glass-card bg-zinc-900 border border-white/10 rounded-xl p-4 shadow-xl flex items-center gap-4 transform -rotate-3 hover:rotate-0 transition-transform cursor-default">
<div className="w-10 h-10 bg-green-500/10 rounded-lg text-green-400 flex items-center justify-center">
<iconify-icon icon="solar:file-check-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium mb-0.5">Raport Finalizat</div>
<div className="text-sm text-white font-normal">Sincronizare PDF.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative overflow-hidden" id="agentie-seo">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-6 fade-up">
<span className="text-indigo-400 text-xs font-medium tracking-wider uppercase">Parteneriat Strategic</span>
<h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight">Agenție SEO în Sibiu, setată pe generarea de profit</h2>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                        Suntem mai mult decât o <strong className="text-zinc-200 font-normal">Firmă SEO</strong>. Înțelegem că scopul final al afacerii tale nu este doar să obțină trafic, ci să transforme acei vizitatori în clienți plătitori. 
                    </p>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
                        Atunci când apelezi la o <strong className="text-zinc-200 font-normal">Agenție SEO</strong> cu experiență, procesul de <strong className="text-zinc-200 font-normal">optimizare site</strong> se face la nivel tehnic, de conținut și de autoritate, asigurându-ne că site-ul tău devine cel mai bun "angajat" de vânzări, activ 24/7.
                    </p>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-indigo-400 text-sm font-normal hover:text-indigo-300 transition-colors" href="#raport-seo">
                            Discută cu un consultant <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-4 fade-up delay-100">
<div className="glass-card p-6 rounded-xl mt-8">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-normal text-sm mb-2">Targetare Precisă</h3>
<p className="text-xs text-zinc-500">Aducem clienți care caută exact ceea ce vinzi.</p>
</div>
<div className="glass-card p-6 rounded-xl">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-normal text-sm mb-2">Creștere Scalabilă</h3>
<p className="text-xs text-zinc-500">Costurile scad pe măsură ce vizibilitatea crește.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-grid relative overflow-hidden" id="seo-vs-ppc">
<div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !w-[800px] !h-[800px] opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 md:text-center fade-up">
<h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight">SEO vs. PPC (Google Ads)</h2>
<p className="text-zinc-400 mt-4 max-w-2xl mx-auto font-light">De ce să investești într-o campanie de optimizare în loc să plătești constant pentru click-uri.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-stretch fade-up delay-100">
<div className="glass-card p-8 lg:p-10 rounded-t-2xl lg:rounded-2xl border-b-0 lg:border-b border-white/10 relative opacity-80 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
<iconify-icon icon="solar:card-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white tracking-tight">Publicitate Plătită (PPC)</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-red-400 mt-0.5 min-w-[16px]" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span><strong className="text-zinc-200 font-normal">Costuri per Click:</strong> Plătești pentru fiecare vizitator. Când oprești bugetul, traficul dispare instantaneu.</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-red-400 mt-0.5 min-w-[16px]" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span><strong className="text-zinc-200 font-normal">Credibilitate Scăzută:</strong> O mare parte din utilizatori ignoră conștient anunțurile "Sponsorizate".</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-red-400 mt-0.5 min-w-[16px]" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span><strong className="text-zinc-200 font-normal">Costuri în Creștere:</strong> Prețul per click (CPC) crește anual pe măsură ce concurența licitează mai mult.</span>
</li>
</ul>
</div>
<div className="glass-card p-8 lg:p-10 rounded-b-2xl lg:rounded-2xl border-indigo-500/30 bg-indigo-900/5 relative shadow-[0_0_50px_-20px_rgba(99,102,241,0.2)]">
<div className="absolute top-0 right-0 px-3 py-1 bg-indigo-600 text-xs font-normal text-white uppercase rounded-bl-lg rounded-tr-lg tracking-wider">Recomandat</div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
<iconify-icon icon="solar:graph-new-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white tracking-tight">Optimizare SEO</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-green-400 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span><strong className="text-white font-normal">Trafic Gratuit 24/7:</strong> Odată ce ajungi pe prima pagină, obții mii de vizite fără să plătești per click.</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-green-400 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span><strong className="text-white font-normal">Autoritate și Încredere:</strong> Poziționarea organică conferă brandului tău statutul de lider incontestabil în piață.</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-green-400 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span><strong className="text-white font-normal">Activ pe Termen Lung:</strong> Efortul de azi aduce rezultate ani de zile, formând un activ digital extrem de valoros.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-up">
<h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight mb-4">Analiză SEO complexă de la un Specialist SEO dedicat</h2>
<p className="text-zinc-400 max-w-2xl mx-auto font-light">Nu ghicim, ci ne bazăm pe date exacte. Fără o analiză clară a intenției de căutare și a problemelor tehnice, bugetul este irosit.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-up delay-100">
<div className="glass-card p-6 rounded-xl group hover:bg-white/5 transition-all">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white text-base font-normal mb-3 tracking-tight">1. Analiza SEO Inițială</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Fiecare proiect începe cu un audit complet. Identificăm problemele de indexare, erorile de structură și oportunitățile imediate de creștere.</p>
</div>
<div className="glass-card p-6 rounded-xl group hover:bg-white/5 transition-all">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white text-base font-normal mb-3 tracking-tight">2. Specialist SEO Alocat</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Nu ești doar un număr. Un <strong className="text-zinc-300 font-normal">Specialist SEO</strong> din echipa noastră va analiza competiția și va seta direcția clară a campaniei tale.</p>
</div>
<div className="glass-card p-6 rounded-xl group hover:bg-white/5 transition-all">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white text-base font-normal mb-3 tracking-tight">3. Implementare &amp; Măsurare</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Transformăm teoria în practică. Optimizăm site-ul tehnic și pe baza conținutului, măsurând fiecare etapă pentru a asigura un ROI pozitiv.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-grid" id="servicii">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="fade-up">
<span className="text-indigo-400 text-xs font-medium tracking-wider uppercase mb-2 block">Performanță Garantată</span>
<h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight mb-6">Servicii SEO Profesionale</h2>
<p className="text-zinc-400 mb-8 font-light leading-relaxed">Pachetele noastre includ proceduri avansate de <strong className="text-zinc-200 font-normal">Optimizare SEO</strong>. Abordăm creșterea organică dintr-o perspectivă de 360 grade: de la corectarea codului sursă până la crearea unui profil puternic de link-uri (off-page).</p>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-400" icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-normal text-sm">Keyword Strategy &amp; Research</h4>
<p className="text-xs text-zinc-500 mt-1">Identificăm cuvintele cheie tranzacționale care îți pot aduce cei mai mulți clienți, specifice pentru Sibiu sau nivel național.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-400" icon="solar:code-file-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-normal text-sm">Optimizare On-Page</h4>
<p className="text-xs text-zinc-500 mt-1">Implementăm procesul de optimizare site direct în platforma ta: meta tag-uri, structură internă, viteza de încărcare, UX/UI.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-400" icon="solar:link-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-normal text-sm">Link Building (Off-Page)</h4>
<p className="text-xs text-zinc-500 mt-1">Construim autoritate digitală obținând apariții (backlink-uri) pe publicații relevante și portaluri de știri respectate.</p>
</div>
</div>
</div>
</div>

<div className="glass-card p-1 rounded-2xl fade-up delay-100">
<div className="bg-black/40 rounded-xl p-8 h-full">
<h3 className="text-xl font-normal text-white mb-6 tracking-tight">Pachete SEO</h3>
<div className="space-y-4">
<div className="p-4 border border-white/10 rounded-lg hover:bg-white/5 cursor-pointer transition-colors group">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-normal text-white">Start Local</span>
<span className="text-indigo-400 text-sm">€300<span className="text-zinc-600 text-xs">/lună</span></span>
</div>
<p className="text-xs text-zinc-500">Perfect pentru mici afaceri de servicii din Sibiu.</p>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
<ul className="mt-3 space-y-1 text-xs text-zinc-400">
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Audit Tehnic &amp; Setup Google</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Optimizare Google Maps (Local SEO)</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Monitorizare 5 Cuvinte Cheie</li>
</ul>
</div>
</div>
<div className="p-4 border border-indigo-500/30 bg-indigo-500/5 rounded-lg cursor-pointer transition-colors relative overflow-hidden">
<div className="absolute -right-6 top-4 bg-indigo-600 text-[10px] text-white py-0.5 px-8 transform rotate-45 uppercase tracking-wider">Popular</div>
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-normal text-white">Business Growth</span>
<span className="text-indigo-400 text-sm">€650<span className="text-zinc-600 text-xs">/lună</span></span>
</div>
<p className="text-xs text-zinc-500">Pentru firme ce vor să domine regional/național.</p>
<ul className="mt-3 space-y-1 text-xs text-zinc-300">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Servicii SEO Profesionale (On-Page/Off-Page)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Content Writing SEOizat (Blog/Servicii)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Raportare și analiză lunară</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Optimizare 20+ Cuvinte Cheie Tranzacționale</li>
</ul>
</div>
<div className="p-4 border border-white/10 rounded-lg hover:bg-white/5 cursor-pointer transition-colors group">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-normal text-white">E-commerce / Enterprise</span>
<span className="text-white text-sm">Custom</span>
</div>
<p className="text-xs text-zinc-500">Pentru magazine online complexe cu mii de produse.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-indigo-900/10 border-y border-white/5 text-center">
<div className="max-w-4xl mx-auto px-6 fade-up">
<h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight mb-4">Promovare SEO: De la vizibilitate la vânzări predictibile</h2>
<p className="text-sm md:text-base text-zinc-400 mb-8 font-light max-w-2xl mx-auto">
                Multe agenții îți vând trafic irelevant. O strategie reală de <strong className="text-zinc-200 font-normal">Promovare SEO</strong> presupune să atragem acei utilizatori care sunt gata să scoată cardul din portofel sau să sune pentru o programare.
            </p>
<a className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black text-sm font-normal rounded-lg hover:bg-zinc-200 transition-all" href="#raport-seo">
                Cere un Audit de Promovare
                <iconify-icon icon="solar:document-add-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 bg-black" id="ecommerce-local">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-up">
<h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight mb-4">Optimizări SEO pentru eCommerce și Servicii Locale</h2>
<p className="text-zinc-400 max-w-2xl mx-auto font-light">Abordarea corectă depinde 100% de modelul tău de business. Aplicăm strategii adaptate pentru a maximiza randamentul fiecărei nișe.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-up delay-100">

<div className="glass-card p-8 lg:p-10 rounded-2xl hover:border-indigo-500/30 transition-all">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400 mb-6">
<iconify-icon icon="solar:cart-large-2-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-white mb-4 tracking-tight">E-commerce SEO</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed font-light">Competiția online este masivă. Pentru magazine online, optimizăm arhitectura pe categorii, fațete de filtrare, pagini de produs și gestionăm bugetul de crawl (crawl budget) alocat de Google.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400" icon="solar:verified-check-linear" strokeWidth="1.5" width="20"></iconify-icon> Optimizare pagini de categorie &amp; produs
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400" icon="solar:verified-check-linear" strokeWidth="1.5" width="20"></iconify-icon> Soluționare conținut duplicat / index bloat
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400" icon="solar:verified-check-linear" strokeWidth="1.5" width="20"></iconify-icon> Strategie de link building la scară largă
                        </li>
</ul>
</div>

<div className="glass-card p-8 lg:p-10 rounded-2xl hover:border-indigo-500/30 transition-all">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400 mb-6">
<iconify-icon icon="solar:map-point-wave-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-white mb-4 tracking-tight">Servicii Locale (Local SEO)</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed font-light">Ai o clinică, o firmă de curățenie sau oferi reparații în Sibiu? Local SEO este esențial pentru a apărea în Google Maps fix când cineva de lângă tine are nevoie urgentă de serviciile tale.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-400" icon="solar:verified-check-linear" strokeWidth="1.5" width="20"></iconify-icon> Optimizare Profil Google Business (GMB)
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-400" icon="solar:verified-check-linear" strokeWidth="1.5" width="20"></iconify-icon> Acumulare strategică de recenzii locale
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-400" icon="solar:verified-check-linear" strokeWidth="1.5" width="20"></iconify-icon> Pagini dedicate pe locații / cartiere
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-grid border-t border-white/5">
<div className="max-w-3xl mx-auto px-6 fade-up">
<h2 className="text-2xl md:text-3xl font-normal text-white text-center mb-10 tracking-tight">Întrebări Frecvente</h2>
<div className="space-y-3">
<details className="group glass-card rounded-lg open:bg-white/5 transition-all">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-white text-sm font-normal">
                        Cât durează până văd rezultate dintr-o campanie de optimizare SEO?
                        <iconify-icon className="group-open:rotate-180 transition-transform text-zinc-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-3 mt-2">
                        SEO este un proces pe termen lung. De obicei, primele îmbunătățiri semnificative de poziționare și trafic apar după 3-6 luni, în funcție de concurența din nișa ta și de autoritatea actuală a domeniului. Efectul se consolidează masiv după 6-12 luni.
                    </div>
</details>
<details className="group glass-card rounded-lg open:bg-white/5 transition-all">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-white text-sm font-normal">
                        De ce să aleg o Agenție SEO din Sibiu în locul unui freelancer?
                        <iconify-icon className="group-open:rotate-180 transition-transform text-zinc-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-3 mt-2">
                        Lucrând cu o Firmă SEO ai acces la o întreagă echipă: specialiști SEO, copywriteri, developeri. Înțelegem specificul pieței locale și dispunem de tool-uri premium, unelte pe care un freelancer singur rareori și le permite sau știe să le integreze nativ.
                    </div>
</details>
<details className="group glass-card rounded-lg open:bg-white/5 transition-all">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-white text-sm font-normal">
                        Care este diferența dintre SEO On-Page și Off-Page?
                        <iconify-icon className="group-open:rotate-180 transition-transform text-zinc-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-3 mt-2">
<strong className="text-zinc-200">On-Page</strong> reprezintă acțiunile făcute direct pe site-ul tău (viteză, titluri, conținut, cod curat, optimizare site). <strong className="text-zinc-200">Off-Page</strong> se referă la consolidarea încrederii în ochii lui Google prin obținerea de backlink-uri, articole PR, mențiuni ale brandului tău pe alte platforme web.
                    </div>
</details>
<details className="group glass-card rounded-lg open:bg-white/5 transition-all">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-white text-sm font-normal">
                        Oferiți și servicii de "optimizare site" tehnică (ex. viteza de încărcare)?
                        <iconify-icon className="group-open:rotate-180 transition-transform text-zinc-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-3 mt-2">
                        Da. Partea tehnică este fundația. Dacă site-ul se încarcă greu sau nu este mobile-friendly, efortul de conținut este degeaba. Avem developeri in-house care implementează optimizarea la nivel de cod.
                    </div>
</details>
<details className="group glass-card rounded-lg open:bg-white/5 transition-all">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-white text-sm font-normal">
                        Garantăți prima poziție în Google?
                        <iconify-icon className="group-open:rotate-180 transition-transform text-zinc-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-3 mt-2">
                        Conform ghidului oficial Google, nicio agenție onestă nu poate garanta poziția #1. Ceea ce garantăm este implementarea unor strategii de promovare SEO validate care au dus zeci de alte business-uri pe prima pagină, un nivel maxim de transparență și o creștere constantă a ROI-ului tău.
                    </div>
</details>
<details className="group glass-card rounded-lg open:bg-white/5 transition-all">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-white text-sm font-normal">
                        Cum măsurăm succesul campaniilor?
                        <iconify-icon className="group-open:rotate-180 transition-transform text-zinc-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-3 mt-2">
                        Setăm din prima zi indicatori de performanță (KPIs) clari. Primești un dashboard transparent lunar unde vei vedea: evoluția pozițiilor pe cuvintele cheie, creșterea volumului de trafic organic și, cel mai important, numărul de conversii (formulare de contact trimise, apeluri sau vânzări online generate de SEO).
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-900/10"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 fade-up">
<h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight mb-4">Pregătit să domini piața online din Sibiu?</h2>
<p className="text-zinc-400 mb-8 text-sm md:text-base font-light">Programează o discuție gratuită cu un Specialist SEO și află cum îți putem dubla traficul organic.</p>
<div className="flex justify-center gap-4">
<a className="px-8 py-3 bg-indigo-600 text-white text-sm font-normal rounded-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25" href="#raport-seo">
                    Solicită Ofertă Gratuită
                </a>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white text-xs">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-white font-normal tracking-tight">SEO<span className="opacity-50">SIBIU</span></span>
</div>
<p className="text-sm text-zinc-500 max-w-sm mb-6">
                    Agenție de marketing digital specializată în servicii SEO profesionale, optimizare site și promovare organică. Targetăm profitul tău, nu doar traficul.
                </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" strokeWidth="1.5" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" strokeWidth="1.5" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" strokeWidth="1.5" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white text-sm font-normal mb-4">Servicii</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#raport-seo">Analiză SEO / Audit</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#servicii">Optimizare On-Page</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#servicii">Link Building</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#ecommerce-local">Local SEO Sibiu</a></li>
</ul>
</div>
<div id="contact-form">
<h4 className="text-white text-sm font-normal mb-4">Contact Rapid</h4>
<form className="space-y-3" onsubmit="event.preventDefault(); alert('Mesaj trimis!');">
<input className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Email-ul tău" type="email"/>
<input className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Website (opțional)" type="text"/>
<button className="w-full bg-white text-black text-xs font-normal py-2 rounded hover:bg-zinc-200 transition-colors">Trimite Cererea</button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<p>© 2024 Optimizare SEO Sibiu. Toate drepturile rezervate.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-400" href="#">Termeni și Condiții</a>
<a className="hover:text-zinc-400" href="#">Politica de Confidențialitate</a>
</div>
</div>
</footer>


    </>
  );
}
