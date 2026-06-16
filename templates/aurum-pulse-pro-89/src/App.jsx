import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Optimized Reveal on Scroll using IntersectionObserver
        // Uses requestAnimationFrame for smoother performance
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        requestAnimationFrame(() => {
                            entry.target.classList.add('is-visible');
                            // Stop observing once revealed to save resources
                            observer.unobserve(entry.target);
                        });
                    }
                });
            }, observerOptions);

            const sections = document.querySelectorAll('.reveal-section');
            sections.forEach(section => observer.observe(section));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 hardware-accel z-0">
<div className="aurora-bg absolute inset-0"></div>
<div className="grid-overlay absolute inset-0"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 hardware-accel">
<div className="backdrop-blur-md bg-[#050505]/70 border border-white/[0.06] rounded-full pl-5 pr-2 py-2 flex items-center justify-between gap-12 shadow-2xl shadow-black/80 transition-all duration-300 hover:border-white/10 w-full max-w-2xl">

<a className="flex items-center gap-2.5 group" href="#">
<div className="relative w-4 h-4 overflow-hidden rounded-[2px] bg-gradient-to-tr from-amber-700 to-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.4)] group-hover:shadow-[0_0_18px_rgba(245,158,11,0.6)] transition-shadow duration-500">
<div className="absolute inset-0 bg-black/20"></div>
</div>
<span className="text-white text-xs font-medium tracking-tight group-hover:text-amber-100 transition-colors">AURUM PULSE</span>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="text-[11px] font-medium text-slate-400 hover:text-white transition-colors tracking-wide" href="#methodologie">Méthodologie</a>
<a className="text-[11px] font-medium text-slate-400 hover:text-white transition-colors tracking-wide" href="#technologie">Technologie</a>
<a className="text-[11px] font-medium text-slate-400 hover:text-white transition-colors tracking-wide" href="#resultats">Résultats</a>
</div>

<a className="flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wide hover:bg-slate-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#acces">
                Connexion
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2.5" width="12"></iconify-icon>
</a>
</div>
</nav>
<main className="relative z-10 pt-40 pb-32">

<section className="max-w-4xl mx-auto px-6 mb-32 md:mb-48 text-center reveal-section">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] font-medium text-amber-500 mb-8 backdrop-blur-sm">
<span className="w-1 h-1 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
<span className="tracking-widest uppercase opacity-90">Algorithme V2.4 Actif</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-8 leading-[1.05]">
                L'asymétrie au service<br/>
<span className="text-white/40">de la performance.</span>
</h1>
<p className="text-base md:text-lg text-slate-400 font-light leading-relaxed max-w-xl mx-auto mb-12 tracking-tight">
                Une infrastructure quantitative conçue pour dissiper le bruit émotionnel. Nous transformons la volatilité en vecteur de croissance grâce à une exécution algorithmique de précision institutionnelle.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative w-full sm:w-auto h-12 px-8 rounded-lg bg-[#D4AF37] hover:bg-[#E5BE48] transition-all duration-300 flex items-center justify-center gap-2 text-black font-semibold text-xs tracking-wide shadow-[0_0_30px_rgba(212,175,55,0.15)] overflow-hidden">
<span className="relative z-10">Découvrir le Système</span>
<iconify-icon className="relative z-10 text-black/70 group-hover:scale-110 transition-transform" icon="solar:chart-2-linear" strokeWidth="2" width="16"></iconify-icon>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
<button className="group w-full sm:w-auto h-12 px-8 rounded-lg bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.04] transition-all duration-300 flex items-center justify-center gap-2 text-slate-300 font-medium text-xs tracking-wide">
                    Documentation Technique
                    <iconify-icon className="text-slate-500 group-hover:text-white transition-colors" icon="solar:documents-minimalistic-linear" width="16"></iconify-icon>
</button>
</div>

<div className="mt-20 pt-8 border-t border-white/[0.04] flex flex-wrap justify-center gap-8 md:gap-16">
<div className="text-center">
<div className="text-2xl font-medium text-white tracking-tighter mb-0.5 font-mono">0.02s</div>
<div className="text-[10px] text-slate-500 uppercase tracking-widest">Latence Moyenne</div>
</div>
<div className="text-center">
<div className="text-2xl font-medium text-white tracking-tighter mb-0.5 font-mono">99.8%</div>
<div className="text-[10px] text-slate-500 uppercase tracking-widest">Uptime Serveur</div>
</div>
<div className="text-center">
<div className="text-2xl font-medium text-white tracking-tighter mb-0.5 font-mono">2.8</div>
<div className="text-[10px] text-slate-500 uppercase tracking-widest">Ratio Sharpe</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32" id="methodologie">
<div className="flex items-center justify-between mb-10 reveal-section">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight">Architecture du Système</h2>
<p className="text-sm text-slate-500 font-light mt-1">Les piliers de notre avantage statistique.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="reveal-section relative group rounded-2xl bg-[#080808] border border-white/[0.06] p-8 card-glow overflow-hidden md:col-span-1 hover:-translate-y-1 transition-transform duration-500">
<div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/5 blur-[50px] rounded-full pointer-events-none"></div>
<div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-amber-500 mb-6">
<iconify-icon icon="solar:soundwave-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white text-base font-medium tracking-tight mb-3">Filtrage Low-Frequency</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        Contrairement au HFT (High Frequency), nous privilégions la qualité à la quantité. En opérant sur des unités de temps supérieures, nous éliminons 80% des faux signaux générés par le bruit micro-structurel.
                    </p>
</div>

<div className="reveal-section relative group rounded-2xl bg-[#080808] border border-white/[0.06] p-8 card-glow overflow-hidden md:col-span-2 hover:-translate-y-1 transition-transform duration-500 delay-75">
<div className="flex flex-col md:flex-row h-full justify-between items-start md:items-end gap-6">
<div className="max-w-md relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-slate-200 mb-6">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white text-base font-medium tracking-tight mb-3">Préservation du Capital</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                                Notre algorithme intègre un module de gestion des risques dynamique. La taille des positions est ajustée automatiquement en fonction de la volatilité implicite (VIX) et du drawdown courant. Un bouclier mathématique contre les cygnes noirs.
                            </p>
</div>

<div className="w-full md:w-64 h-24 flex items-end justify-between gap-1 opacity-60">
<div className="w-full bg-white/5 rounded-t-sm h-[30%] group-hover:h-[20%] transition-all duration-700"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[50%] group-hover:h-[40%] transition-all duration-700 delay-75"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[20%] group-hover:h-[25%] transition-all duration-700 delay-100"></div>
<div className="w-full bg-gradient-to-t from-amber-900/40 to-amber-500/60 rounded-t-sm h-[60%] group-hover:h-[75%] transition-all duration-700 delay-150"></div>
<div className="w-full bg-gradient-to-t from-amber-900/40 to-amber-500 rounded-t-sm h-[80%] group-hover:h-[100%] transition-all duration-700 delay-200"></div>
</div>
</div>
</div>

<div className="reveal-section relative group rounded-2xl bg-[#080808] border border-white/[0.06] p-8 card-glow overflow-hidden md:col-span-3 hover:-translate-y-1 transition-transform duration-500 delay-100 flex flex-col md:flex-row items-center gap-10">
<div className="flex-1">
<div className="inline-flex items-center gap-2 mb-6">
<div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-slate-200">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-[10px] text-green-400 font-mono tracking-wide">
                                EXEC_STATUS: OPTIMAL
                            </div>
</div>
<h3 className="text-white text-base font-medium tracking-tight mb-3">Exécution Chirurgicale</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed max-w-2xl">
                            L'émotion est l'ennemi. Aurum Pulse Pro exécute le plan de trading sans hésitation, sans peur et sans avidité. Nous utilisons des ordres limités intelligents pour minimiser le slippage et réduire les coûts de transaction, optimisant ainsi l'espérance mathématique de chaque trade.
                        </p>
</div>

<div className="w-full md:w-96 rounded-xl bg-[#030303] border border-white/5 p-4 font-mono text-[10px] text-slate-500 leading-relaxed overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030303] z-10"></div>
<div className="flex gap-2 mb-3 opacity-30">
<div className="w-2 h-2 rounded-full bg-white"></div>
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
<p><span className="text-purple-400">if</span> (market_volatility &lt; THRESHOLD) {</p>
<p className="pl-4"><span className="text-blue-400">const</span> signal = <span className="text-yellow-400">calcAlpha</span>(data);</p>
<p className="pl-4"><span className="text-purple-400">if</span> (signal.strength &gt; 0.85) {</p>
<p className="pl-8">executeOrder({</p>
<p className="pl-12">type: <span className="text-green-400">'LIMIT'</span>,</p>
<p className="pl-12">size: calculatePosition(),</p>
<p className="pl-12">hedge: <span className="text-purple-400">true</span></p>
<p className="pl-8">});</p>
<p className="pl-4">}</p>
<p>}</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-40" id="technologie">
<div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">

<div className="w-full md:w-1/2 reveal-section">
<div className="relative rounded-xl bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden group">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
<div className="text-[9px] font-mono text-slate-600 uppercase">Live Monitor</div>
</div>

<div className="p-6 font-mono text-xs">
<div className="flex justify-between items-center mb-6">
<span className="text-slate-500">Actif: XAU/USD</span>
<span className="text-emerald-500 animate-pulse">● Live</span>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between mb-1 text-[10px] text-slate-500 uppercase tracking-wider">
<span>Trend Strength</span>
<span>87%</span>
</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-amber-500/80 w-[87%] shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mt-4">
<div className="p-3 bg-white/[0.03] rounded border border-white/5">
<div className="text-[10px] text-slate-500 mb-1">Entry Price</div>
<div className="text-white">2,041.50</div>
</div>
<div className="p-3 bg-white/[0.03] rounded border border-white/5">
<div className="text-[10px] text-slate-500 mb-1">Target</div>
<div className="text-emerald-400">2,085.00</div>
</div>
</div>
<div className="pt-4 border-t border-white/5 text-[10px] text-slate-600 leading-relaxed">
                                    &gt; Analysing fractal geometry...<br/>
                                    &gt; Detecting liquidity sweep on H4...<br/>
                                    &gt; <span className="text-white">Confirmed setup. Awaiting trigger.</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 reveal-section delay-100">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-6">
                        Clarté totale.<br/>
<span className="text-slate-600">Complexité masquée.</span>
</h2>
<p className="text-slate-400 font-light leading-relaxed mb-8">
                        L'interface utilisateur n'est que la pointe de l'iceberg. Sous le capot, Aurum Pulse Pro traite des millions de points de données en temps réel. Nous abstrayons cette complexité pour ne vous livrer que l'essentiel : des opportunités claires, validées par des probabilités.
                    </p>
<div className="space-y-5">
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-amber-500/30 flex items-center justify-center text-amber-500">
<iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-1">Backtesting Rigoureux</h4>
<p className="text-xs text-slate-500 font-light">
                                    Chaque stratégie est testée sur 15 ans d'historique (In-Sample) et validée sur des données vierges (Out-of-Sample) pour éviter le sur-apprentissage.
                                </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-amber-500/30 flex items-center justify-center text-amber-500">
<iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-1">Adaptabilité Fractal</h4>
<p className="text-xs text-slate-500 font-light">
                                    Le système détecte les changements de régime de marché (tendance vs range) et adapte ses paramètres dynamiquement.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 pb-20 reveal-section" id="acces">
<div className="rounded-3xl bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-white/10 p-10 text-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-amber-500/10 to-transparent blur-[60px] pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 mx-auto bg-white/[0.03] rounded-xl flex items-center justify-center border border-white/10 mb-6 text-white">
<iconify-icon icon="solar:lock-keyhole-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">Accès Restreint</h2>
<p className="text-slate-400 font-light text-sm mb-8 max-w-md mx-auto">
                        Pour garantir la liquidité et un service personnalisé, l'accès à Aurum Pulse Pro est limité. Inscrivez-vous pour rejoindre la liste d'attente prioritaire.
                    </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto" onsubmit="event.preventDefault();">
<div className="relative flex-grow">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-600">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
</div>
<input className="w-full h-11 bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all" placeholder="votre@email.com" type="email"/>
</div>
<button className="h-11 px-6 rounded-lg bg-white text-black text-xs font-semibold hover:bg-slate-200 transition-colors whitespace-nowrap shadow-lg">
                            Rejoindre
                        </button>
</form>
<div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-slate-600">
<iconify-icon className="text-amber-600" icon="solar:shield-check-linear"></iconify-icon>
<span>Données cryptées &amp; confidentielles.</span>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/[0.06] bg-[#020202] py-12 relative z-10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-gradient-to-br from-amber-600 to-amber-800 rounded-[2px]"></div>
<span className="text-white text-xs font-medium tracking-tight opacity-80">AURUM PULSE PRO</span>
</div>
<div className="text-[11px] text-slate-600 font-light tracking-wide flex gap-6">
<a className="hover:text-slate-400 transition-colors" href="#">Confidentialité</a>
<a className="hover:text-slate-400 transition-colors" href="#">Conditions</a>
<span>© 2024</span>
</div>
<div className="flex gap-4 opacity-60">
<a className="text-white hover:text-amber-500 transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="18"></iconify-icon></a>
<a className="text-white hover:text-amber-500 transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="18"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
