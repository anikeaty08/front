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
deep: '#0D4F4F', // Deep Teal
accent: '#1DB992', // Bright Mint
light: '#F0FDF9', // Very light mint bg
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Merriweather', 'serif'],
}
}
}
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
      

<nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 rounded bg-brand-deep flex items-center justify-center text-white font-serif font-bold text-lg tracking-tighter">R</div>
<span className="font-serif text-xl font-bold text-brand-deep tracking-tight">RentaLMNP</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-brand-deep transition-colors" href="#features">Fonctionnalités</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-deep transition-colors" href="#pricing">Tarifs</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-deep transition-colors" href="#">Simuler gratuitement</a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-brand-accent hover:bg-emerald-500 transition-colors shadow-sm" href="#">
                        Simuler mon bien →
                    </a>
</div>

<div className="flex items-center md:hidden">
<button className="text-slate-500 hover:text-slate-700" type="button">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-deep/5 rounded-full blur-3xl"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="text-center lg:text-left">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-light text-brand-deep border border-brand-accent/30 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-2 animate-pulse"></span>
                        Simulateur LMNP avec analyse loi 2025
                    </span>
<h1 className="font-serif text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.15]">
                        Votre LMNP est-il <br className="hidden lg:block"/> <span className="text-brand-deep underline decoration-brand-accent/40 decoration-4 underline-offset-4">vraiment rentable</span> ?
                    </h1>
<p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Le seul simulateur qui calcule votre rentabilité réelle après impôts, amortissements et plus-value — y compris l'impact de la loi 2025 sur la revente.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-accent hover:bg-emerald-500 shadow-lg shadow-brand-accent/20 transition-all" href="#">
                            Simuler gratuitement →
                        </a>
<button className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors">
<iconify-icon className="mr-2" icon="solar:play-circle-linear" width="20"></iconify-icon>
                            Voir une démo
                        </button>
</div>
<div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">JD</div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">SM</div>
<div className="w-8 h-8 rounded-full bg-brand-deep text-white border-2 border-white flex items-center justify-center text-xs font-bold">+500</div>
</div>
<p>Rejoint par 500+ investisseurs LMNP</p>
</div>
</div>

<div className="relative mx-auto w-full max-w-lg lg:max-w-none">

<div className="bg-white rounded-xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">

<div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="text-xs font-medium text-slate-400">Dashboard T2 Lyon Part-Dieu</div>
</div>

<div className="p-6">
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-brand-light border border-brand-accent/20 p-4 rounded-lg">
<p className="text-xs text-brand-deep/70 font-medium mb-1">Rendement Net (TRI)</p>
<p className="text-2xl font-bold text-brand-deep">5.2%</p>
</div>
<div className="bg-slate-50 border border-slate-100 p-4 rounded-lg">
<p className="text-xs text-slate-500 font-medium mb-1">Revente Optimale</p>
<p className="text-2xl font-bold text-slate-800">Année 12</p>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between items-end h-32 px-2 pb-2 border-b border-slate-100 gap-2">
<div className="w-full bg-brand-accent/20 rounded-t-sm h-[40%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">1200€</div>
</div>
<div className="w-full bg-brand-accent/30 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-brand-accent/40 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-brand-accent/60 rounded-t-sm h-[75%]"></div>
<div className="w-full bg-brand-accent rounded-t-sm h-[90%] relative shadow-lg shadow-brand-accent/30"></div> 
<div className="w-full bg-brand-accent/60 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-brand-accent/40 rounded-t-sm h-[50%]"></div>
</div>
<div className="flex justify-between text-[10px] text-slate-400 px-2">
<span>2026</span>
<span>2032</span>
<span>2038</span>
<span>2044</span>
</div>
</div>
</div>

<div className="absolute top-1/2 right-4 bg-white shadow-lg border border-slate-100 p-3 rounded-lg -translate-y-1/2 translate-x-4 lg:translate-x-0 transform rotate-[-2deg]">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded bg-green-100 text-green-600">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-slate-500">Cash Flow Annuel</p>
<p className="text-sm font-bold text-slate-800">+ 3 450 €</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl font-bold text-slate-900 tracking-tight mb-4">L'investisseur LMNP navigue à l'aveugle</h2>
<p className="text-slate-500 max-w-2xl mx-auto">La plupart des décisions immobilières sont prises sur des calculs de coin de table. Voici pourquoi c'est dangereux.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-6">
<iconify-icon icon="solar:calculator-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Simulateurs trop simplistes</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                        Rendement brut ≠ gain réel. Aucun outil gratuit ne prend en compte les amortissements par composants, le résultat fiscal BIC, et l'article 39C.
                    </p>
</div>

<div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-6">
<iconify-icon icon="solar:chart-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Pas de vision long terme</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                        Votre cash flow évolue chaque année (intérêts dégressifs, fin d'amortissement). Les tableurs Excel bricolés ne suffisent plus pour projeter sur 20 ans.
                    </p>
</div>

<div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-lg bg-brand-deep/10 text-brand-deep flex items-center justify-center mb-6">
<iconify-icon icon="solar:danger-triangle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">La revente est un angle mort</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                        La loi 2025 change la donne en réintégrant les amortissements dans la plus-value. RentaLMNP est le seul à modéliser cet impact fiscal majeur.
                    </p>
</div>
</div>
</div>
</section>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.8); opacity: 0; }
}
.pin-pulse { animation: pulse-ring 2s ease-out infinite; }
</style>
<section style={{padding: '80px 24px', backgroundColor: '#0E4F4F', fontFamily: '\'Inter\', sans-serif'}}>
<div style={{maxWidth: '1152px', margin: '0 auto'}}>

<div style={{marginBottom: '56px'}}>
<h2 style={{fontSize: '36px', fontWeight: '700', color: '#ffffff', margin: '0 0 12px 0', lineHeight: '1.2'}}>
        Un moteur fiscal complet, <span style={{color: '#1DB992'}}>pas un simple calculateur</span>
</h2>
<p style={{fontSize: '18px', color: 'rgba(255,255,255,0.6)', margin: '0', maxWidth: '640px', lineHeight: '1.6'}}>
        RentaLMNP simule la rentabilité réelle de votre investissement sur 20 ans — avant ou après l'achat.
      </p>
</div>

<div style={{display: 'flex', gap: '48px', alignItems: 'flex-start', flexWrap: 'wrap'}}>

<div style={{flex: '0 0 55%', maxWidth: '520px'}}>
<div style={{background: '#ffffff', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)'}}>

<div style={{background: '#F1F1F1', borderBottom: '1px solid #E2E8F0', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
<div style={{display: 'flex', gap: '6px'}}>
<div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F57'}}></div>
<div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E'}}></div>
<div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#28C840'}}></div>
</div>
<div style={{flex: '1', display: 'flex', justifyContent: 'center'}}>
<div style={{background: '#fff', borderRadius: '9999px', padding: '4px 16px', fontSize: '11px', color: '#94A3B8', fontFamily: 'monospace', letterSpacing: '0.05em'}}>
                rentalmnp.app/simulateur
              </div>
</div>
<div style={{width: '52px'}}></div>
</div>

<div style={{display: 'flex', alignItems: 'center', background: '#F8FAFA', borderBottom: '1px solid #F1F5F9', padding: '12px 16px', gap: '16px'}}>
<div style={{flex: '1', minWidth: '0'}}>
<div style={{fontSize: '14px', fontWeight: '600', color: '#1E293B'}}>T2 Lyon Part-Dieu</div>
<div style={{fontSize: '12px', color: '#94A3B8', marginTop: '2px'}}>Achat : 180 000 € · 35m²</div>
</div>
<div style={{flexShrink: '0'}}>
<div style={{width: '100px', height: '65px', borderRadius: '8px', background: '#E8EDF2', position: 'relative', overflow: 'hidden'}}>

<div style={{position: 'absolute', top: '15px', left: '0', right: '0', height: '1px', background: 'rgba(255,255,255,0.5)'}}></div>
<div style={{position: 'absolute', top: '30px', left: '0', right: '0', height: '1px', background: 'rgba(255,255,255,0.5)'}}></div>
<div style={{position: 'absolute', top: '45px', left: '0', right: '0', height: '1px', background: 'rgba(255,255,255,0.5)'}}></div>

<div style={{position: 'absolute', top: '0', bottom: '0', left: '25px', width: '1px', background: 'rgba(255,255,255,0.5)'}}></div>
<div style={{position: 'absolute', top: '0', bottom: '0', left: '50px', width: '1px', background: 'rgba(255,255,255,0.5)'}}></div>
<div style={{position: 'absolute', top: '0', bottom: '0', left: '75px', width: '1px', background: 'rgba(255,255,255,0.5)'}}></div>

<div style={{position: 'absolute', top: '52px', left: '-8px', right: '0', height: '6px', background: 'rgba(197, 213, 228, 0.6)', borderRadius: '9999px', transform: 'rotate(-3deg)'}}></div>

<div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
<div className="pin-pulse" style={{width: '20px', height: '20px', borderRadius: '50%', border: '1px solid rgba(29, 185, 146, 0.3)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
<div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#0D4F4F', border: '2px solid #fff', boxShadow: '0 1px 3px rgba(0,0,0,0.3)', position: 'relative', zIndex: '1'}}></div>
</div>
</div>
<div style={{fontSize: '9px', color: '#94A3B8', textAlign: 'right', marginTop: '4px'}}>Lyon 3e — Part-Dieu</div>
</div>
</div>

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid #F1F5F9'}}>

<div style={{padding: '12px', background: '#fff', borderLeft: '3px solid #1DB992'}}>
<div style={{fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94A3B8', fontWeight: '500', marginBottom: '4px'}}>Rendement net</div>
<div style={{fontSize: '20px', fontWeight: '700', color: '#0D4F4F', lineHeight: '1.1'}}>5.2%<span style={{fontSize: '10px', color: '#94A3B8', fontWeight: '400', marginLeft: '2px'}}>/an</span></div>
</div>

<div style={{padding: '12px', background: '#fff', borderLeft: '1px solid #F1F5F9'}}>
<div style={{fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94A3B8', fontWeight: '500', marginBottom: '4px'}}>Cash flow mensuel</div>
<div style={{fontSize: '20px', fontWeight: '700', color: '#1DB992', lineHeight: '1.1'}}>+180€</div>
</div>

<div style={{padding: '12px', background: '#fff', borderLeft: '1px solid #F1F5F9'}}>
<div style={{fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94A3B8', fontWeight: '500', marginBottom: '4px'}}>Revente optimale</div>
<div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
<span style={{fontSize: '20px', fontWeight: '700', color: '#0D4F4F', lineHeight: '1.1'}}>Année 12</span>
<span style={{width: '8px', height: '8px', borderRadius: '50%', background: '#1DB992', display: 'inline-block'}}></span>
</div>
</div>
</div>

<div style={{padding: '16px 16px 8px 16px'}}>
<div style={{fontSize: '14px', fontWeight: '700', color: '#1E293B'}}>Quand revendre ?</div>
</div>
<div style={{padding: '0 16px 12px 16px'}}>
<table style={{width: '100%', fontSize: '12px', borderCollapse: 'collapse'}}>
<thead>
<tr style={{borderBottom: '1px solid #F1F5F9'}}>
<th style={{textAlign: 'left', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94A3B8', fontWeight: '500', padding: '8px 8px 8px 0'}}>Année</th>
<th style={{textAlign: 'left', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94A3B8', fontWeight: '500', padding: '8px 8px 8px 0'}}>Prix revente</th>
<th style={{textAlign: 'left', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94A3B8', fontWeight: '500', padding: '8px 8px 8px 0'}}>Impôt PV (loi 2025)</th>
<th style={{textAlign: 'right', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94A3B8', fontWeight: '500', padding: '8px 0 8px 0'}}>Gain net vendeur</th>
</tr>
</thead>
<tbody style={{color: '#475569'}}>
<tr style={{borderBottom: '1px solid #F8FAFC'}}>
<td style={{padding: '10px 8px 10px 0'}}>5</td>
<td style={{padding: '10px 8px 10px 0'}}>198 000 €</td>
<td style={{padding: '10px 8px 10px 0', color: '#F87171'}}>-8 200 €</td>
<td style={{padding: '10px 0', textAlign: 'right', color: '#0D4F4F'}}>+28 400 €</td>
</tr>
<tr style={{borderBottom: '1px solid #F8FAFC'}}>
<td style={{padding: '10px 8px 10px 0'}}>8</td>
<td style={{padding: '10px 8px 10px 0'}}>210 000 €</td>
<td style={{padding: '10px 8px 10px 0', color: '#F87171'}}>-14 100 €</td>
<td style={{padding: '10px 0', textAlign: 'right', color: '#0D4F4F'}}>+39 700 €</td>
</tr>

<tr style={{background: '#E6F9F1', borderBottom: '1px solid #c8f0de'}}>
<td style={{padding: '10px 8px 10px 0', fontWeight: '700', color: '#0D4F4F'}}>12</td>
<td style={{padding: '10px 8px 10px 0', fontWeight: '700', color: '#0D4F4F'}}>222 000 €</td>
<td style={{padding: '10px 8px 10px 0', color: '#F87171', fontWeight: '600'}}>-12 800 €</td>
<td style={{padding: '10px 0', textAlign: 'right'}}>
<span style={{fontWeight: '700', color: '#0D4F4F'}}>+47 800 €</span>
<span style={{marginLeft: '8px', display: 'inline-flex', alignItems: 'center', gap: '2px', fontSize: '8px', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.1em', background: '#1DB992', color: '#fff', padding: '2px 8px', borderRadius: '9999px'}}>✦ Optimal</span>
</td>
</tr>
<tr style={{borderBottom: '1px solid #F8FAFC'}}>
<td style={{padding: '10px 8px 10px 0'}}>15</td>
<td style={{padding: '10px 8px 10px 0'}}>235 000 €</td>
<td style={{padding: '10px 8px 10px 0', color: '#F87171'}}>-9 500 €</td>
<td style={{padding: '10px 0', textAlign: 'right', color: '#0D4F4F'}}>+43 200 €</td>
</tr>
<tr>
<td style={{padding: '10px 8px 10px 0'}}>20</td>
<td style={{padding: '10px 8px 10px 0'}}>256 000 €</td>
<td style={{padding: '10px 8px 10px 0', color: '#F87171'}}>-4 100 €</td>
<td style={{padding: '10px 0', textAlign: 'right', color: '#0D4F4F'}}>+38 600 €</td>
</tr>
</tbody>
</table>
</div>

<div style={{background: '#E8F4F0', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px'}}>
<div style={{width: '16px', height: '16px', borderRadius: '50%', background: '#1DB992', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
<svg fill="none" stroke="currentColor" strokeWidth="3" style={{width: '10px', height: '10px', color: '#fff'}} viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span style={{fontSize: '10px', color: '#0D4F4F', fontWeight: '500'}}>Loi 2025 · Réintégration des amortissements appliquée</span>
</div>
</div>
</div>

<div style={{flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '28px', paddingTop: '8px'}}>

<div style={{display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
<div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
<svg fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '20px', height: '20px', color: '#1DB992'}} viewbox="0 0 24 24">
<path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<div style={{fontSize: '14px', fontWeight: '600', color: '#ffffff', marginBottom: '4px'}}>Amortissement par composants</div>
<p style={{fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6', margin: '0'}}>Terrain, gros œuvre, aménagements, meubles, notaire. Comparez différentes ventilations pour optimiser votre fiscalité.</p>
</div>
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
<div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
<svg fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '20px', height: '20px', color: '#1DB992'}} viewbox="0 0 24 24">
<path d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<div style={{fontSize: '14px', fontWeight: '600', color: '#ffffff', marginBottom: '4px'}}>Cash flow annuel détaillé</div>
<p style={{fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6', margin: '0'}}>Revenus − charges − emprunt − impôts (BIC au réel avec article 39C), calculé année par année sur 20 ans.</p>
</div>
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
<div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
<svg fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '20px', height: '20px', color: '#1DB992'}} viewbox="0 0 24 24">
<path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<div style={{fontSize: '14px', fontWeight: '600', color: '#ffffff', marginBottom: '4px'}}>Analyse revente &amp; loi 2025</div>
<p style={{fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6', margin: '0'}}>Calcul de la plus-value avec réintégration des amortissements, abattements progressifs, pour connaître votre net vendeur réel.</p>
</div>
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
<div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
<svg fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '20px', height: '20px', color: '#1DB992'}} viewbox="0 0 24 24">
<path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<div style={{fontSize: '14px', fontWeight: '600', color: '#ffffff', marginBottom: '4px'}}>Scénarios comparatifs</div>
<p style={{fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6', margin: '0'}}>Testez différentes hypothèses (loyer, charges, taux, durée de détention) et comparez en un clic.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="font-serif text-3xl font-bold text-slate-900 tracking-tight">Que vous achetiez ou que vous possédiez déjà</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-brand-accent/50 transition-colors group relative">
<span className="absolute top-6 right-6 inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-800">
                        Gratuit
                    </span>
<div className="w-14 h-14 rounded-full bg-slate-50 text-slate-700 flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-brand-light group-hover:text-brand-deep group-hover:border-brand-accent/20 transition-all">
<iconify-icon icon="solar:magnifer-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Avant l'achat</h3>
<p className="text-slate-600 mb-6">
                        Évaluez si un bien est rentable avant de signer. Entrez le prix, le loyer estimé et l'emprunt. Obtenez instantanément le rendement net et le TRI.
                    </p>
<a className="text-brand-deep font-semibold text-sm hover:text-brand-accent transition-colors flex items-center" href="#">
                        Lancer une simulation <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-brand-deep text-white rounded-2xl p-8 border border-brand-deep shadow-xl relative overflow-hidden">
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none"></div>
<span className="absolute top-6 right-6 inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-brand-accent text-white border border-white/20">
                        Premium
                    </span>
<div className="w-14 h-14 rounded-full bg-white/10 text-brand-accent flex items-center justify-center mb-6 border border-white/10">
<iconify-icon icon="solar:graph-new-up-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-2">Pendant la détention</h3>
<p className="text-slate-300 mb-6">
                        Vous possédez déjà un LMNP ? Entrez vos vrais chiffres — emprunt en cours, amortissements déclarés — et simulez le moment optimal de revente.
                    </p>
<a className="text-white font-semibold text-sm hover:text-brand-accent transition-colors flex items-center" href="#">
                        Analyser mon bien existant <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex justify-center mb-10 overflow-x-auto">
<div className="inline-flex rounded-lg bg-slate-100 p-1">
<button className="px-4 py-2 rounded-md text-sm font-medium text-slate-500 hover:text-slate-900">Cash Flow</button>
<button className="px-4 py-2 rounded-md text-sm font-medium text-slate-500 hover:text-slate-900">Fiscalité</button>
<button className="bg-white shadow-sm px-4 py-2 rounded-md text-sm font-medium text-brand-deep">Revente &amp; Loi 2025</button>
<button className="px-4 py-2 rounded-md text-sm font-medium text-slate-500 hover:text-slate-900">Comparaison</button>
</div>
</div>

<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
<div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
<span className="font-semibold text-slate-700">Analyse de Revente - Année 10 (2036)</span>
<button className="text-xs bg-white border border-slate-200 px-3 py-1 rounded text-slate-600 hover:bg-slate-50">Exporter PDF</button>
</div>
<div className="p-0 overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-slate-500 uppercase bg-slate-50/50">
<tr>
<th className="px-6 py-3 font-medium">Poste</th>
<th className="px-6 py-3 font-medium text-right">Montant</th>
<th className="px-6 py-3 font-medium text-right text-slate-400">Note</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="px-6 py-4 font-medium text-slate-900">Prix de Revente Estimé</td>
<td className="px-6 py-4 text-right font-medium text-slate-900">220 000 €</td>
<td className="px-6 py-4 text-right text-xs text-slate-400">+2% / an</td>
</tr>
<tr>
<td className="px-6 py-4 text-slate-600">Valeur Nette Comptable</td>
<td className="px-6 py-4 text-right text-slate-600">145 000 €</td>
<td className="px-6 py-4 text-right text-xs text-slate-400">Après amort.</td>
</tr>
<tr className="bg-brand-light/30">
<td className="px-6 py-4 text-brand-deep font-medium flex items-center gap-2">
<iconify-icon className="text-brand-accent" icon="solar:info-circle-linear"></iconify-icon>
                                    Plus-value imposable (Loi 2025)
                                </td>
<td className="px-6 py-4 text-right font-bold text-brand-deep">75 000 €</td>
<td className="px-6 py-4 text-right text-xs text-brand-deep/70">Amort. réintégrés</td>
</tr>
<tr>
<td className="px-6 py-4 text-slate-600">Impôt sur la Plus-Value (19% + 17.2%)</td>
<td className="px-6 py-4 text-right text-red-500">- 18 450 €</td>
<td className="px-6 py-4 text-right text-xs text-slate-400">Après abattements</td>
</tr>
<tr className="bg-slate-50">
<td className="px-6 py-4 text-lg font-bold text-slate-900">Gain Net Vendeur</td>
<td className="px-6 py-4 text-right text-lg font-bold text-brand-accent">201 550 €</td>
<td className="px-6 py-4 text-right text-xs text-slate-500">Net d'impôts &amp; CRD</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-center font-serif text-3xl font-bold text-slate-900 mb-12">Ce que les autres ne font pas</h2>
<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white">
<table className="min-w-full divide-y divide-gray-300">
<thead className="bg-gray-50">
<tr>
<th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6" scope="col">Fonctionnalité</th>
<th className="px-3 py-3.5 text-center text-sm font-semibold text-gray-500" scope="col">Horiz.io</th>
<th className="px-3 py-3.5 text-center text-sm font-semibold text-gray-500" scope="col">LMNP.ai</th>
<th className="px-3 py-3.5 text-center text-sm font-bold text-brand-deep bg-brand-light/50 border-t-4 border-brand-deep" scope="col">RentaLMNP</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200 bg-white">
<tr>
<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Ventilation composants</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">✓</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">Basique</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-center text-brand-deep font-bold bg-brand-light/30">✓ Complète</td>
</tr>
<tr>
<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Cash flow multi-année</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">✓</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-200">—</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-center text-brand-deep font-bold bg-brand-light/30">✓ Sur 20 ans</td>
</tr>
<tr>
<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Analyse de revente (Loi 2025)</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">Basique</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-200">—</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-center text-brand-deep font-bold bg-brand-light/30">✓ Détaillée</td>
</tr>
<tr>
<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Optimisation timing revente</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-200">—</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-200">—</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-center text-brand-deep font-bold bg-brand-light/30">✓</td>
</tr>
<tr>
<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Scénarios comparatifs</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">Limité</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-200">—</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-center text-brand-deep font-bold bg-brand-light/30">Illimité</td>
</tr>
</tbody>
</table>
</div>
<p className="mt-4 text-xs text-center text-gray-400">Analyse réalisée en février 2026 sur les versions publiques de chaque outil.</p>
</div>
</section>

<section className="py-20 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="font-serif text-3xl font-bold text-slate-900 tracking-tight mb-4">Commencez gratuitement</h2>
<p className="text-slate-600">Pas de carte bancaire requise pour commencer.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="rounded-2xl border border-slate-200 p-8 flex flex-col">
<div className="mb-4">
<span className="text-lg font-medium text-slate-900">Gratuit</span>
<div className="mt-2 flex items-baseline">
<span className="text-4xl font-bold text-slate-900 tracking-tight">0€</span>
<span className="ml-1 text-slate-500">/mois</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start">
<iconify-icon className="text-slate-400 mt-1 mr-3 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-600 text-sm">Simulation basique (1 bien)</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-slate-400 mt-1 mr-3 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-600 text-sm">Cash flow sur 5 ans (aperçu)</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-slate-400 mt-1 mr-3 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-600 text-sm">Rendement brut &amp; net</span>
</li>
</ul>
<a className="w-full block text-center px-6 py-3 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors" href="#">
                        Commencer gratuitement
                    </a>
</div>

<div className="rounded-2xl border-2 border-brand-accent p-8 bg-brand-light/10 relative flex flex-col shadow-lg">
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 md:translate-x-0 bg-brand-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
                        Recommandé
                    </div>
<div className="mb-4">
<span className="text-lg font-medium text-brand-deep">Premium</span>
<div className="mt-2 flex items-baseline">
<span className="text-4xl font-bold text-brand-deep tracking-tight">9€</span>
<span className="ml-1 text-slate-500">/mois</span>
</div>
<p className="text-xs text-brand-accent mt-1">108€ facturés annuellement (2 mois offerts)</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start">
<iconify-icon className="text-brand-accent mt-1 mr-3 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-slate-800 text-sm font-medium">Projection complète sur 20 ans</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-brand-accent mt-1 mr-3 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-slate-800 text-sm font-medium">Analyse revente avec loi 2025</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-brand-accent mt-1 mr-3 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-slate-800 text-sm font-medium">Scénarios illimités</span>
</li>
</ul>
<a className="w-full block text-center px-6 py-3 bg-brand-accent text-white rounded-lg font-medium hover:bg-emerald-500 transition-colors shadow-md shadow-brand-accent/20" href="#">
                        Essai gratuit 7 jours →
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Construit par un investisseur, pour les investisseurs</h2>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<p className="text-slate-600 italic mb-6 text-lg">
                        "Après avoir passé des heures sur Excel pour analyser mon propre LMNP à Bellegarde, j'ai réalisé qu'aucun outil ne répondait aux vraies questions : combien je gagne réellement, et quand devrais-je vendre ? RentaLMNP est né de ce besoin."
                    </p>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold">TL</div>
<div className="text-left">
<div className="text-sm font-bold text-slate-900">Thomas L.</div>
<div className="text-xs text-slate-500">Fondateur de RentaLMNP</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<div className="flex gap-1 text-amber-400 mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-4">"Enfin un outil qui intègre la loi 2025. J'ai failli vendre trop tôt, le simulateur m'a montré qu'attendre 2 ans de plus doublait mon net vendeur."</p>
<div className="text-xs font-bold text-slate-900">— Pierre, Investisseur à Lyon</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<div className="flex gap-1 text-amber-400 mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-4">"Le calcul du cash flow réel après impôts m'a ouvert les yeux sur la vraie rentabilité de mon studio. L'interface est super propre."</p>
<div className="text-xs font-bold text-slate-900">— Sophie, Propriétaire Paris</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<div className="flex gap-1 text-amber-400 mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-4">"J'ai comparé 3 scénarios d'amortissement en 5 minutes. Impossible à faire sur Excel sans faire d'erreur de formule."</p>
<div className="text-xs font-bold text-slate-900">— Marc, Bordeaux</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-serif text-3xl font-bold text-slate-900 text-center mb-12">Questions fréquentes</h2>
<div className="space-y-4">
<details className="group bg-slate-50 rounded-lg border border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-800">
<span>Qu'est-ce que la loi 2025 sur la réintégration des amortissements ?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 px-5 pb-5 text-sm leading-relaxed border-t border-slate-200 pt-4">
                        Depuis 2025, les amortissements déduits en LMNP sont réintégrés dans le calcul de la plus-value lors de la revente. Concrètement, cela augmente l'impôt à payer lors de la vente. Notre simulateur intègre cette règle pour vous montrer l'impact exact sur votre gain net.
                    </div>
</details>
<details className="group bg-slate-50 rounded-lg border border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-800">
<span>Est-ce que RentaLMNP remplace mon comptable ?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 px-5 pb-5 text-sm leading-relaxed border-t border-slate-200 pt-4">
                        Non. RentaLMNP est un outil de simulation et de stratégie, pas un logiciel de comptabilité. Il vous aide à prendre des décisions (acheter, garder, vendre), mais ne génère pas de liasse fiscale.
                    </div>
</details>
<details className="group bg-slate-50 rounded-lg border border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-800">
<span>Comment est calculé le résultat fiscal BIC ?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 px-5 pb-5 text-sm leading-relaxed border-t border-slate-200 pt-4">
                        Nous appliquons les règles du régime réel simplifié BIC : revenus locatifs - charges déductibles - amortissements, avec application de l'article 39C (l'amortissement ne peut pas créer ou aggraver un déficit). Les amortissements excédentaires sont reportés.
                    </div>
</details>
<details className="group bg-slate-50 rounded-lg border border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-800">
<span>Puis-je utiliser l'outil pour un bien que je possède déjà ?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 px-5 pb-5 text-sm leading-relaxed border-t border-slate-200 pt-4">
                        Absolument. C'est même l'un des cas d'usage principaux. Entrez vos données réelles (revenus, charges, emprunt, amortissements déclarés) et simulez des scénarios de revente pour trouver le moment optimal.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-20 bg-brand-deep text-center">
<div className="max-w-4xl mx-auto px-4">
<h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Prenez des décisions basées sur les données</h2>
<p className="text-brand-accent/80 text-lg mb-10">Simulez la rentabilité de votre LMNP en moins de 5 minutes.</p>
<div className="flex flex-col items-center gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-brand-accent hover:bg-emerald-500 shadow-xl shadow-brand-accent/20 transition-all w-full md:w-auto" href="#">
                    Simuler mon bien gratuitement →
                </a>
<p className="text-sm text-slate-400">Pas d'inscription requise pour la simulation basique</p>
</div>
</div>
</section>

<footer className="bg-slate-900 border-t border-slate-800 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-white font-serif font-bold text-xs">R</div>
<span className="font-serif text-lg font-bold text-slate-200">RentaLMNP</span>
</div>
<div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
<a className="hover:text-white transition-colors" href="#">Fonctionnalités</a>
<a className="hover:text-white transition-colors" href="#">Tarifs</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
<a className="hover:text-white transition-colors" href="#">Mentions légales</a>
</div>
<div className="text-sm text-slate-500">
                © 2026 RentaLMNP. Simulateur de rentabilité.
            </div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 md:hidden z-50 flex items-center justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-500">Simulateur LMNP</span>
<span className="text-sm font-bold text-brand-deep">Essai Gratuit</span>
</div>
<a className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-brand-accent hover:bg-emerald-500 transition-colors" href="#">
            Simuler →
        </a>
</div>

<div className="fixed bottom-4 right-4 max-w-sm bg-white p-4 rounded-lg shadow-2xl border border-slate-200 z-40 hidden" id="cookie-banner">
<p className="text-xs text-slate-600 mb-3">Nous utilisons des cookies pour améliorer votre expérience.</p>
<div className="flex gap-2">
<button className="text-xs px-3 py-1.5 bg-slate-100 text-slate-700 rounded hover:bg-slate-200">Refuser</button>
<button className="text-xs px-3 py-1.5 bg-brand-deep text-white rounded hover:bg-slate-800">Accepter</button>
</div>
</div>

    </>
  );
}
