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



        // Intersection Observer for fade-up animations
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
<span className="text-white font-medium text-lg tracking-tight">SEO<span className="opacity-50 font-light">SIBIU</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#avantaje">Avantaje</a>
<a className="hover:text-white transition-colors" href="#seo-vs-ppc">SEO vs PPC</a>
<a className="hover:text-white transition-colors" href="#statistici">Statistici Google</a>
<a className="hover:text-white transition-colors" href="#servicii">Servicii</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all rounded-full" href="#audit">
<iconify-icon icon="solar:scanner-linear" width="16"></iconify-icon>
                    Audit Gratuit
                </a>
<button className="md:hidden text-white pt-1">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
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
<span className="text-xs font-medium text-indigo-300 tracking-wide uppercase">Agenție Dedicată Sibiu</span>
</div>

<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    Optimizare <span className="text-gradient-accent">Blana Sibiu</span>
</h1>
<p className="text-lg text-zinc-400 max-w-lg leading-relaxed font-light">
                    Creștem vizibilitatea brandului tău în căutările locale și naționale. Strategii bazate pe date, nu pe ghicite, pentru a domina prima pagină Google.
                </p>
<div className="flex flex-wrap items-center gap-4">
<a className="px-8 py-3.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-all shadow-[0_0_20px_-10px_rgba(255,255,255,0.5)] flex items-center gap-2" href="#contact">
                        Vreau o Strategie
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="px-8 py-3.5 border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all flex items-center gap-2 group" href="#statistici">
                        Vezi Statistici
                    </a>
</div>
<div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-zinc-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                        Creștere Trafic Organic
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                        ROI Superior vs PPC
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                        Raportare Transparentă
                    </div>
</div>
</div>

<div className="relative z-10 fade-up delay-100 visible lg:pl-10">
<div className="glass-card rounded-2xl p-8 relative overflow-hidden group">

<div className="flex justify-between items-start mb-10">
<div>
<h3 className="text-sm font-medium text-white">Performanță Organică</h3>
<p className="text-xs text-zinc-500 mt-1">Cuvinte cheie: "Servicii Sibiu"</p>
</div>
<div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs flex items-center gap-1">
<iconify-icon icon="solar:trending-up-linear"></iconify-icon>
                            +124%
                        </div>
</div>

<div className="relative h-60 w-full mb-6">

<div className="absolute inset-0 flex flex-col justify-between text-[10px] text-zinc-700">
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
<div className="text-zinc-400 text-[10px]">Trafic Organic</div>
<div className="text-white font-medium">3,402 Vizite</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-3 rounded bg-white/5 border border-white/5">
<div className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1">Poziție Medie</div>
<div className="text-white font-medium flex items-center gap-2">
                                3.2 <span className="text-green-500 text-[10px]">▲ 12</span>
</div>
</div>
<div className="p-3 rounded bg-white/5 border border-white/5">
<div className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1">Conversii</div>
<div className="text-white font-medium flex items-center gap-2">
                                4.8% <span className="text-green-500 text-[10px]">▲ 0.5%</span>
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
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">De Ce Să Alegi Optimizarea Organică?</h2>
<p className="text-zinc-400 max-w-2xl mx-auto font-light">Cifrele oferite de Google și studiile de specialitate confirmă importanța traficului organic pentru succesul pe termen lung.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-card p-8 rounded-xl text-center group hover:border-indigo-500/30 transition-all">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<div className="text-4xl lg:text-5xl font-semibold text-white mb-2 tracking-tight">53.3%</div>
<p className="text-sm text-zinc-400 leading-relaxed">Din tot traficul web provine din căutări organice. Este principala sursă de vizitatori pentru majoritatea industriilor.</p>
</div>

<div className="glass-card p-8 rounded-xl text-center group hover:border-indigo-500/30 transition-all">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<div className="text-4xl lg:text-5xl font-semibold text-white mb-2 tracking-tight">1000%+</div>
<p className="text-sm text-zinc-400 leading-relaxed">ROI (Return on Investment) estimat pentru SEO pe termen lung, depășind canalele de publicitate plătite.</p>
</div>

<div className="glass-card p-8 rounded-xl text-center group hover:border-indigo-500/30 transition-all">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:eye-linear" width="24"></iconify-icon>
</div>
<div className="text-4xl lg:text-5xl font-semibold text-white mb-2 tracking-tight">70-80%</div>
<p className="text-sm text-zinc-400 leading-relaxed">Dintre utilizatori ignoră reclamele plătite (Google Ads) și se concentrează exclusiv pe rezultatele organice.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-grid relative overflow-hidden" id="seo-vs-ppc">
<div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !w-[800px] !h-[800px] opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 md:text-center">
<span className="text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-2 block">Analiză Comparativă</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">SEO vs. PPC (Google Ads)</h2>
<p className="text-zinc-400 mt-4 max-w-2xl mx-auto">De ce să investești în optimizare SEO în loc să plătești constant pentru click-uri.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-stretch">

<div className="glass-card p-8 lg:p-10 rounded-t-2xl lg:rounded-2xl border-b-0 lg:border-b border-white/10 relative opacity-80 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
<iconify-icon icon="solar:card-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white">Publicitate Plătită (PPC)</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-red-400 mt-0.5 min-w-[16px]" icon="solar:close-circle-linear"></iconify-icon>
<span><strong className="text-zinc-200">Costuri per Click:</strong> Plătești pentru fiecare vizitator. Când bugetul se termină, traficul dispare instant.</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-red-400 mt-0.5 min-w-[16px]" icon="solar:close-circle-linear"></iconify-icon>
<span><strong className="text-zinc-200">Credibilitate Scăzută:</strong> Utilizatorii au tendința să sară peste anunțurile marcate ca "Sponsorizat".</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="text-red-400 mt-0.5 min-w-[16px]" icon="solar:close-circle-linear"></iconify-icon>
<span><strong className="text-zinc-200">Costuri în Creștere:</strong> Prețul per click (CPC) crește anual din cauza concurenței.</span>
</li>
</ul>
</div>

<div className="glass-card p-8 lg:p-10 rounded-b-2xl lg:rounded-2xl border-indigo-500/30 bg-indigo-900/5 relative shadow-[0_0_50px_-20px_rgba(99,102,241,0.2)]">
<div className="absolute top-0 right-0 px-3 py-1 bg-indigo-600 text-[10px] font-bold text-white uppercase rounded-bl-lg rounded-tr-lg tracking-wider">Recomandat</div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
<iconify-icon icon="solar:graph-new-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white">Optimizare SEO</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-green-400 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
<span><strong className="text-white">Trafic Gratuit 24/7:</strong> Odată ce ajungi pe prima pagină, nu plătești Google pentru vizite.</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-green-400 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
<span><strong className="text-white">Autoritate și Încredere:</strong> Poziționarea organică conferă brandului statutul de lider în piață.</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-green-400 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
<span><strong className="text-white">Activ pe Termen Lung:</strong> Investiția de azi aduce rezultate ani de zile, compunându-se în timp.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black" id="avantaje">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">Avantajele Optimizării SEO în Sibiu</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group fade-up">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-indigo-600 transition-all mb-4">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Targetare Locală Precisă</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Atrage clienți exact din Sibiu și împrejurimi care caută activ serviciile tale.</p>
</div>
<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group fade-up delay-75">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-indigo-600 transition-all mb-4">
<iconify-icon icon="solar:wallet-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Cost-Eficiență</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Costul de achiziție al unui client (CAC) scade drastic pe măsură ce autoritatea site-ului crește.</p>
</div>
<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group fade-up delay-150">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-indigo-600 transition-all mb-4">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Credibilitate Brand</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Site-urile de pe prima poziție sunt percepute ca fiind cele mai de încredere din industrie.</p>
</div>
<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group fade-up delay-200">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-indigo-600 transition-all mb-4">
<iconify-icon icon="solar:smartphone-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Optimizare Mobilă</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Asigurăm o experiență perfectă pentru utilizatorii de mobil, esențială pentru ranking.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="servicii">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Procesul Nostru de Optimizare</h2>
<p className="text-zinc-400 mb-8 font-light">Abordăm SEO holistic. Nu doar cuvinte cheie, ci o arhitectură tehnică solidă, conținut valoros și autoritate în domeniu.</p>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-400" icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">1. Audit Tehnic &amp; Keyword Research</h4>
<p className="text-xs text-zinc-500 mt-1">Analizăm structura site-ului și identificăm cuvintele cheie "low hanging fruit" specifice pentru Sibiu.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-400" icon="solar:code-file-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">2. Optimizare On-Page</h4>
<p className="text-xs text-zinc-500 mt-1">Îmbunătățim meta tag-urile, viteza de încărcare, structura URL-urilor și calitatea conținutului.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-400" icon="solar:link-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">3. Link Building (Off-Page)</h4>
<p className="text-xs text-zinc-500 mt-1">Obținem backlink-uri de calitate de la site-uri relevante pentru a crește autoritatea domeniului.</p>
</div>
</div>
</div>
</div>

<div className="glass-card p-1 rounded-2xl">
<div className="bg-black/40 rounded-xl p-8 h-full">
<h3 className="text-xl font-medium text-white mb-6">Pachete SEO</h3>
<div className="space-y-4">

<div className="p-4 border border-white/10 rounded-lg hover:bg-white/5 cursor-pointer transition-colors group">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-white">Start Local</span>
<span className="text-indigo-400 text-sm">€300<span className="text-zinc-600 text-xs">/lună</span></span>
</div>
<p className="text-xs text-zinc-500">Perfect pentru afaceri mici din Sibiu.</p>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
<ul className="mt-3 space-y-1 text-[10px] text-zinc-400">
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Audit Tehnic</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Optimizare Google Maps</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> 5 Cuvinte Cheie</li>
</ul>
</div>
</div>

<div className="p-4 border border-indigo-500/30 bg-indigo-500/5 rounded-lg cursor-pointer transition-colors">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-white">Business Growth</span>
<span className="text-indigo-400 text-sm">€650<span className="text-zinc-600 text-xs">/lună</span></span>
</div>
<p className="text-xs text-zinc-500">Pentru extindere regională și națională.</p>
<ul className="mt-3 space-y-1 text-[10px] text-zinc-300">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> Strategie SEO Completă</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> Creație Conținut (Blog)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> Raportare Lunară</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> 20+ Cuvinte Cheie</li>
</ul>
</div>

<div className="p-4 border border-white/10 rounded-lg hover:bg-white/5 cursor-pointer transition-colors group">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-white">E-commerce / Enterprise</span>
<span className="text-white text-sm">Custom</span>
</div>
<p className="text-xs text-zinc-500">Pentru magazine online complexe.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-grid border-t border-white/5">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-medium text-white text-center mb-10">Întrebări Frecvente</h2>
<div className="space-y-3">
<details className="group glass-card rounded-lg open:bg-white/5 transition-all">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-white text-sm font-medium">
                        Cât durează până văd rezultate din SEO?
                        <iconify-icon className="group-open:rotate-180 transition-transform text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-3 mt-2">
                        SEO este o strategie pe termen lung. De obicei, primele îmbunătățiri semnificative apar după 3-6 luni, în funcție de concurența din nișa ta și de starea actuală a site-ului. Spre deosebire de PPC, rezultatele odată obținute sunt durabile.
                    </div>
</details>
<details className="group glass-card rounded-lg open:bg-white/5 transition-all">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-white text-sm font-medium">
                        De ce să aleg o agenție SEO locală din Sibiu?
                        <iconify-icon className="group-open:rotate-180 transition-transform text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-3 mt-2">
                        Înțelegem specificul pieței locale, competiția din zonă și comportamentul utilizatorilor din Sibiu. Acest lucru ne permite să creăm strategii de Local SEO mult mai eficiente pentru a atrage clienți fizici sau servicii de proximitate.
                    </div>
</details>
<details className="group glass-card rounded-lg open:bg-white/5 transition-all">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-white text-sm font-medium">
                        Garantăți prima poziție în Google?
                        <iconify-icon className="group-open:rotate-180 transition-transform text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-3 mt-2">
                        Nicio agenție etică nu poate garanta poziția #1, deoarece algoritmii Google sunt secreți și se schimbă constant. Noi garantăm implementarea celor mai bune practici, creșterea traficului și rapoarte transparente despre progres.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-900/10"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Vrei să domini piața din Sibiu?</h2>
<p className="text-zinc-400 mb-8 text-sm md:text-base font-light">Programează o discuție gratuită și află cum îți putem dubla traficul organic în următoarele 6 luni.</p>
<div className="flex justify-center gap-4">
<a className="px-8 py-3 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25" href="#audit">
                    Solicită Ofertă
                </a>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white text-xs">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight">SEO<span className="opacity-50">SIBIU</span></span>
</div>
<p className="text-sm text-zinc-500 max-w-sm mb-6">
                    Agenție de marketing digital specializată în optimizare SEO și creștere organică pentru afacerile din Sibiu și România. Transformăm vizitatorii în clienți.
                </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Servicii</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Audit SEO</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Optimizare On-Page</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Link Building</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Content Marketing</a></li>
</ul>
</div>
<div id="audit">
<h4 className="text-white text-sm font-medium mb-4">Contact Rapid</h4>
<form className="space-y-3">
<input className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Email-ul tău" type="email"/>
<input className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Website" type="text"/>
<button className="w-full bg-white text-black text-xs font-medium py-2 rounded hover:bg-zinc-200 transition-colors">Trimite</button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600">
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
