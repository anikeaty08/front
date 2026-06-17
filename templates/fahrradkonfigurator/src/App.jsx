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



function showPage(pageId) {
// Hide all pages
document.querySelectorAll('.page-section').forEach(el => {
el.classList.add('hidden');
el.classList.remove('fade-in');
});
// Show selected page
const selected = document.getElementById(pageId);
if(selected) {
selected.classList.remove('hidden');
selected.classList.add('fade-in');
}
window.scrollTo(0,0);
}

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
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl display-font font-bold tracking-tighter text-white uppercase cursor-pointer" href="#" onclick="showPage('home')">
                FK<span className="text-cyan-400">.</span>DE
            </a>
<div className="hidden md:flex gap-8 items-center text-sm font-medium text-neutral-400">
<button className="hover:text-white transition-colors" onclick="showPage('home')">Startseite</button>
<button className="hover:text-white transition-colors" onclick="showPage('investors')">Investoren</button>
<button className="hover:text-white transition-colors" onclick="showPage('partners')">Partner</button>
<button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full transition-colors border border-white/5" onclick="showPage('contact')">
                    Kontakt
                </button>
</div>
<button className="md:hidden text-white">
<svg data-icon-set="lucide" data-lucide="menu" height="1em" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<div className="page-section fade-in" id="home">

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Rennrad im Dunkeln" className="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
<div className="bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
<div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
<div className="inline-flex gap-2 uppercase text-xs font-medium text-cyan-400 tracking-widest bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 items-center">
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    Next Gen Configurator
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
                    KONFIGURIEREN<br/>
<span className="bg-clip-text neon-text-cyan text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">STATT KOMPROMISSE.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mr-auto mb-12 ml-auto">Dein Traum-Bike wartet. Egal ob Profi oder Einsteiger – wir machen High-End verständlich.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="group relative px-8 py-4 bg-cyan-400 text-black text-lg font-bold tracking-tight rounded-none transform skew-x-[-10deg] hover:skew-x-[-5deg] transition-transform neon-button" onclick="window.location.href='https://fahrradkonfigurator.lovable.app/'">
<span className="block transform group-hover:skew-x-[5deg] skew-x-[10deg] cursor-pointer" onclick="window.location.href='https://fahrradkonfigurator.lovable.app'" role="button">JETZT KONFIGURIEREN</span>
</button>
<button className="hover:text-cyan-400 transition-colors flex gap-2 group font-medium text-white pt-4 pr-8 pb-4 pl-8 items-center" onclick="showPage('partners')">
                        Für Händler &amp; Hersteller
                        <svg className="group-hover:translate-x-1 transition-transform" data-icon-set="lucide" data-lucide="arrow-right" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</header>

<section className="md:py-32 bg-neutral-950 border-white/5 border-t pt-24 pb-24 relative">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<h2 className="md:text-6xl leading-none text-4xl font-bold text-white tracking-tighter mb-8">
                            SCHLUSS MIT <br/>
<span className="text-neutral-500">FACHCHINESISCH.</span>
</h2>
<p className="leading-relaxed text-lg font-light text-neutral-400 mb-8">
                            Der Fahrradmarkt ist ein Dschungel. Unzählige Standards, unklare Preise und Teile, die nicht passen. Du willst einfach nur fahren, aber die Technik bremst dich aus? <span className="text-white font-medium">Wir ändern das.</span>
</p>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
<svg className="text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-300">Echtzeit-Kompatibilitätscheck</span>
</div>
<div className="flex bg-white/5 border-white/5 border rounded-xl p-4 items-center gap-4">
<svg className="text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-300">Echtzeit-Gewichtanzeige</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative">
<div className="relative aspect-square rounded-3xl bg-neutral-900 border border-white/10 overflow-hidden neon-box-purple flex items-center justify-center p-12">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-900/40 via-neutral-950/0 to-neutral-950/0"></div>
<div className="grid grid-cols-2 gap-4 w-full h-full relative z-10">
<div className="flex flex-col justify-center items-center gap-4 opacity-30 blur-sm">
<svg className="text-5xl rotate-12" data-lucide="settings" height="48" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
<svg className="text-5xl rotate-45" data-lucide="alert-triangle" height="48" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex flex-col justify-center items-center gap-6 border-l border-white/10 pl-8">
<div className="w-16 h-16 rounded-2xl bg-fuchsia-500 flex items-center justify-center shadow-[0_0_20px_rgba(217,70,239,0.5)]">
<svg className="text-white text-4xl" data-lucide="check" height="36" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="h-2 w-24 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden fade-in" id="investors">
<header className="relative pt-32 pb-20 overflow-hidden bg-neutral-950">
<div className="absolute inset-0 bg-neutral-950">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950"></div>
</div>
<div className="relative z-10 container mx-auto px-6 max-w-5xl">
<span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 block">Investor Relations</span>
<h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
                    INVESTIERE IN DIE <br/>
<span className="text-neutral-500">ZUKUNFT DES RADSPORTS.</span>
</h1>
<p className="text-xl text-neutral-400 max-w-2xl mb-12">
                    Der Markt für High-End Fahrräder wächst rasant. Wir liefern die Technologie, die Hersteller, Händler und Kunden verbindet. Skalierbar. Intelligent. Global.
                </p>
</div>
</header>
<section className="py-20 bg-neutral-900/50 border-y border-white/5 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="container mx-auto px-6 relative z-10">

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

<div className="p-8 rounded-2xl bg-black/80 backdrop-blur border border-white/10 hover:border-white/20 transition-all">
<h3 className="text-neutral-500 text-sm uppercase tracking-wider mb-2">Market Size</h3>
<p className="text-4xl font-bold text-white mb-2">€65 Mrd.</p>
<p className="text-neutral-400 text-sm">Prognostizierter EU Fahrradmarkt bis 2025.</p>
</div>

<div className="p-8 rounded-2xl bg-black/80 backdrop-blur border border-white/10 hover:border-cyan-500/30 transition-all shadow-[0_0_0_1px_rgba(34,211,238,0.05)] hover:shadow-[0_0_15px_rgba(34,211,238,0.1)]">
<h3 className="text-neutral-500 text-sm uppercase tracking-wider mb-2">Wachstum</h3>
<p className="text-4xl font-bold text-cyan-400 mb-2">+120%</p>
<p className="text-neutral-400 text-sm">YoY Wachstum im E-Commerce Segment.</p>
</div>

<div className="p-8 rounded-2xl bg-black/80 backdrop-blur border border-white/10 hover:border-fuchsia-500/30 transition-all shadow-[0_0_0_1px_rgba(217,70,239,0.05)] hover:shadow-[0_0_15px_rgba(217,70,239,0.1)]">
<h3 className="text-neutral-500 text-sm uppercase tracking-wider mb-2">Technologie</h3>
<p className="text-4xl font-bold text-fuchsia-400 mb-2">AI-Ready</p>
<p className="text-neutral-400 text-sm">Proprietäre Datenbank &amp; Algorithmen.</p>
</div>
</div>

<div className="mb-24">
<h2 className="text-3xl font-bold text-white mb-12 text-center tracking-tight">Market Intelligence &amp; Strategy</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

<div className="group relative p-8 bg-neutral-900/40 backdrop-blur-xl rounded-3xl border border-white/5 hover:border-rose-500/50 transition-all duration-300 hover:-translate-y-1">
<div className="absolute inset-0 bg-rose-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20 group-hover:shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-shadow">
<svg className="text-rose-400 drop-shadow-[0_0_5px_rgba(244,63,94,0.8)]" data-icon-set="lucide" data-lucide="alert-octagon" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
</div>
<span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">Problem</span>
</div>
<h3 className="text-2xl font-bold text-rose-400 mb-4 group-hover:text-rose-300 transition-colors">Fragmentierung &amp; Inkompatibilität</h3>
<p className="text-neutral-300 leading-relaxed text-sm mb-4">
                                    Der Online-Handel leidet unter einer massiven Retourenquote (20-30%). Extrem komplexe Standards (30+ Tretlager-Varianten) überfordern Endkunden.
                                </p>
<p className="text-neutral-400 text-xs font-medium border-t border-white/5 pt-4">
                                    Folge: Hohe Logistikkosten &amp; Kaufabbrüche.
                                </p>
</div>
</div>

<div className="group relative p-8 bg-neutral-900/40 backdrop-blur-xl rounded-3xl border border-white/5 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
<div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-shadow">
<svg className="text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" data-icon-set="lucide" data-lucide="cpu" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
<span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">Solution</span>
</div>
<h3 className="text-2xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">The Compatibility Engine</h3>
<p className="text-neutral-300 leading-relaxed text-sm mb-4">
                                    Unser "Android für Fahrräder". Eine intelligente Datenbank normalisiert Geometrie-Daten und prüft in Millisekunden die physikalische Kompatibilität.
                                </p>
<p className="text-neutral-400 text-xs font-medium border-t border-white/5 pt-4">
                                    Benefit: Reduktion der Retouren um bis zu 80%.
                                </p>
</div>
</div>

<div className="group relative p-8 bg-neutral-900/40 backdrop-blur-xl rounded-3xl border border-white/5 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1">
<div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-shadow">
<svg className="text-amber-400 drop-shadow-[0_0_5px_rgba(245,158,11,0.8)]" data-icon-set="lucide" data-lucide="trending-up" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
<span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Market</span>
</div>
<h3 className="text-2xl font-bold text-amber-400 mb-4 group-hover:text-amber-300 transition-colors">Leasing &amp; E-Bike Boom</h3>
<p className="text-neutral-300 leading-relaxed text-sm mb-4">
                                    Dienstrad-Leasing treibt den Durchschnittspreis auf &gt;3.000€. Kunden erwarten in diesem Segment "Customizing", das aktuelle Shops nicht bieten.
                                </p>
<p className="text-neutral-400 text-xs font-medium border-t border-white/5 pt-4">
                                    Potential: High-Ticket Conversions steigern.
                                </p>
</div>
</div>

<div className="group relative p-8 bg-neutral-900/40 backdrop-blur-xl rounded-3xl border border-white/5 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1">
<div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow">
<svg className="text-emerald-400 drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]" data-icon-set="lucide" data-lucide="globe" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
</div>
<span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">Scale</span>
</div>
<h3 className="text-2xl font-bold text-emerald-400 mb-4 group-hover:text-emerald-300 transition-colors">Wachstum &amp; Skalierung</h3>
<p className="text-neutral-300 leading-relaxed text-sm mb-4">
                                    Phase 1: DACH-Region &amp; Komponenten-Datenbank. Phase 2: EU-Rollout &amp; Integration in Shopify/WooCommerce.
                                </p>
<p className="text-neutral-400 text-xs font-medium border-t border-white/5 pt-4">
                                    Modell: SaaS (B2B) + Affiliate (B2C).
                                </p>
</div>
</div>
</div>
</div>

<div className="bg-neutral-950 border border-white/10 border-dashed rounded-3xl p-12 text-center min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<svg className="text-neutral-700 mb-6 group-hover:text-cyan-400 transition-colors" data-icon-set="lucide" data-lucide="file-bar-chart-2" height="64" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M12 18v-6"></path><path d="M8 18v-1"></path><path d="M16 18v-3"></path></g></svg>
<h3 className="text-2xl font-bold text-white mb-2">Pitch Deck &amp; Finanzdaten</h3>
<p className="text-neutral-400 max-w-lg mx-auto mb-8">
                        Detaillierte Einblicke in unser Geschäftsmodell, Traction und Roadmap sind für akkreditierte Investoren verfügbar.
                    </p>
<button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-cyan-400 transition-colors" onclick="showPage('contact')">
                        Zugang anfordern
                    </button>
</div>
</div>
</section>
</div>

<div className="page-section hidden fade-in" id="partners">
<header className="relative pt-32 pb-20 overflow-hidden bg-neutral-950">

<div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-neutral-900 to-transparent opacity-20 transform skew-x-12"></div>
<div className="relative z-10 container mx-auto px-6 max-w-5xl">
<span className="text-fuchsia-400 font-bold tracking-widest uppercase text-sm mb-4 block">B2B Lösungen</span>
<h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
                    MEHR UMSATZ DURCH <br/>
<span className="text-neutral-500">INTELLIGENTE DATEN.</span>
</h1>
<p className="text-xl text-neutral-400 max-w-2xl mb-12">
                    Für Hersteller und Händler. Integriere unseren Konfigurator in deinen Shop oder nutze unsere Datenbank für dein Produktmanagement.
                </p>
</div>
</header>
<section className="py-20 bg-neutral-950">
<div className="container mx-auto px-6">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

<div className="p-8 rounded-3xl bg-neutral-900 border border-white/5 hover:border-white/20 transition-colors group">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-white group-hover:text-cyan-400 transition-colors">
<svg data-icon-set="lucide" data-lucide="store" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m2 7l4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"></path></g></svg>
</div>
<h3 className="text-2xl font-bold text-white mb-4">Für Händler</h3>
<ul className="space-y-3 text-neutral-400">
<li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>White-Label Konfigurator Integration</li>
<li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>Automatische Lagerbestands-Prüfung</li>
<li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>Weniger Retouren durch Kompatibilitäts-Check</li>
</ul>
</div>

<div className="p-8 rounded-3xl bg-neutral-900 border border-white/5 hover:border-white/20 transition-colors group">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-white group-hover:text-fuchsia-400 transition-colors">
<svg data-icon-set="lucide" data-lucide="factory" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></g></svg>
</div>
<h3 className="text-2xl font-bold text-white mb-4">Für Hersteller</h3>
<ul className="space-y-3 text-neutral-400">
<li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></span>Direkte Präsenz im Konfigurator</li>
<li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></span>Analytics über Nutzerpräferenzen</li>
<li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></span>Standardisierter Daten-Export</li>
</ul>
</div>
</div>

<div className="border-t border-white/5 pt-12">
<h3 className="text-xl font-bold text-white mb-6 text-center">Integrations-Möglichkeiten</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
<div className="p-4 bg-white/5 rounded-lg border border-white/5 text-neutral-400">Shopify App</div>
<div className="p-4 bg-white/5 rounded-lg border border-white/5 text-neutral-400">WooCommerce</div>
<div className="p-4 bg-white/5 rounded-lg border border-white/5 text-neutral-400">REST API</div>
<div className="p-4 bg-white/5 rounded-lg border border-white/5 text-neutral-400">Magento</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden fade-in py-24 bg-neutral-950" id="contact">
<div className="container mx-auto px-6 max-w-2xl">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-white mb-4">Kontakt aufnehmen</h2>
<p className="text-neutral-400">Schreibe uns direkt. Wir melden uns schnellstmöglich.</p>
</div>
<form action="mailto:markus.schmolz@gmx.de" className="space-y-6 bg-neutral-900/50 p-8 rounded-2xl border border-white/10 shadow-2xl" enctype="text/plain" method="post">
<div>
<label className="block text-sm font-medium text-neutral-400 mb-2" htmlFor="name">Name</label>
<input className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" id="name" name="name" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-400 mb-2" htmlFor="email">E-Mail</label>
<input className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" id="email" name="email" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-400 mb-2" htmlFor="subject">Betreff</label>
<select className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" id="subject" name="subject">
<option value="Allgemein">Allgemeine Anfrage</option>
<option value="Investor">Investor Relations</option>
<option value="Partner">Partnerschaft / B2B</option>
<option value="Support">Support</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-neutral-400 mb-2" htmlFor="message">Nachricht</label>
<textarea className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" id="message" name="message" required="" rows="4"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all transform hover:-translate-y-1" type="submit">
                    Nachricht absenden
                </button>
</form>
<p className="text-xs text-center text-neutral-600 mt-6">
                Hinweis: Beim Absenden öffnet sich dein Standard-E-Mail-Programm.
            </p>
</div>
</div>

<footer className="bg-black border-white/10 border-t pt-16 pb-8 mt-auto">
<div className="container mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-12">
<a className="text-3xl display-font font-bold tracking-tighter text-white uppercase mb-8 md:mb-0" href="#" onclick="showPage('home')">
                    FK<span className="text-fuchsia-500">.</span>DE
                </a>
<div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-neutral-400">
<button className="hover:text-cyan-400 transition-colors" onclick="showPage('investors')">Investoren</button>
<button className="hover:text-cyan-400 transition-colors" onclick="showPage('partners')">Partner</button>
<button className="hover:text-cyan-400 transition-colors" onclick="showPage('contact')">Kontakt</button>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 border-t border-white/5 pt-8">
<p>© 2024 Fahrradkonfigurator.de</p>
<div className="flex gap-4 mt-4 md:mt-0">
<svg className="hover:text-white transition-colors cursor-pointer" data-icon-set="lucide" data-lucide="instagram" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
<svg className="hover:text-white transition-colors cursor-pointer" data-icon-set="lucide" data-lucide="twitter" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</footer>

    </>
  );
}
