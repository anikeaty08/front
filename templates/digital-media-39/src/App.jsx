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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Modal Logic
        const modal = document.getElementById('contactModal');
        const modalBackdrop = document.getElementById('modalBackdrop');
        const modalContent = document.getElementById('modalContent');

        function toggleModal() {
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                setTimeout(() => {
                    modalBackdrop.classList.remove('opacity-0');
                    modalContent.classList.remove('scale-95', 'opacity-0');
                    modalContent.classList.add('scale-100', 'opacity-100');
                }, 10);
            } else {
                modalBackdrop.classList.add('opacity-0');
                modalContent.classList.remove('scale-100', 'opacity-100');
                modalContent.classList.add('scale-95', 'opacity-0');
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 300);
            }
        }

        // Simulator Logic
        const budgetInput = document.getElementById('budgetInput');
        const budgetDisplay = document.getElementById('budgetDisplay');
        const platformBtns = document.querySelectorAll('.platform-btn');
        const goalSelect = document.getElementById('goalSelect');
        const resultLabel = document.getElementById('resultLabel');
        const mainResult = document.getElementById('mainResult');
        const impressionsResult = document.getElementById('impressionsResult');

        let currentPlatformMultiplier = 1.2; 

        platformBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                platformBtns.forEach(b => {
                    b.classList.remove('ring-sky-500', 'bg-sky-500/10', 'text-sky-400', 'active');
                    b.classList.add('ring-slate-700', 'text-slate-400');
                });
                btn.classList.remove('ring-slate-700', 'text-slate-400');
                btn.classList.add('ring-sky-500', 'bg-sky-500/10', 'text-sky-400', 'active');
                currentPlatformMultiplier = parseFloat(btn.dataset.value);
                calculate();
            });
        });

        function calculate() {
            const budget = parseInt(budgetInput.value);
            budgetDisplay.innerText = budget + '€';
            let baseCpc = 1.5;
            const goal = goalSelect.value;
            let resultType = "Clics Estimés";

            if(goal === 'clicks') { resultType = "Clics Estimés"; baseCpc = 0.8; } 
            else if (goal === 'leads') { resultType = "Leads Estimés"; baseCpc = 12.5; } 
            else { resultType = "Vues Estimées"; baseCpc = 0.05; }

            let adjustedCpc = baseCpc * currentPlatformMultiplier * 0.95; 
            const results = Math.floor(budget / adjustedCpc);
            const impressions = Math.floor(results * (goal === 'views' ? 1 : 45));

            resultLabel.innerText = resultType;
            mainResult.innerText = results.toLocaleString();
            impressionsResult.innerText = impressions.toLocaleString();
        }

        budgetInput.addEventListener('input', calculate);
        goalSelect.addEventListener('change', calculate);
        calculate();

        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('main-header');
            if (window.scrollY > 50) {
                header.classList.add('bg-slate-900/80', 'backdrop-blur-md');
            } else {
                header.classList.remove('bg-slate-900/80', 'backdrop-blur-md');
            }
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
</div>

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="blob w-[600px] h-[600px] rounded-full top-[-100px] left-[-100px] bg-blue-600/30"></div>
<div className="blob w-[500px] h-[500px] rounded-full bottom-[-100px] right-[-100px] bg-indigo-600/30"></div>
</div>

<header className="fixed -translate-x-1/2 flex glass transition-all duration-700 min-w-[340px] shadow-indigo-900/10 w-auto h-14 max-w-2xl z-50 border-white/10 border rounded-full pr-2 pl-2 top-6 left-1/2 shadow-lg items-center justify-center" id="main-header">
<div className="flex items-center justify-between w-full relative px-2 gap-4">
<div className="flex items-center gap-1">
<a className="transition-colors hover:text-white hover:bg-white/5 text-xs font-medium text-neutral-400 rounded-full pt-2 pr-4 pb-2 pl-4" data-island_submit_button_registered="true" href="#about">About</a>
<a className="hidden sm:block px-4 py-2 rounded-full text-xs font-medium transition-colors text-neutral-400 hover:text-white hover:bg-white/5" data-island_submit_button_registered="true" href="#services">Services</a>
</div>

<div className="flex items-center gap-2 px-4 border-x border-white/5">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.4)] to-blue-600 text-white">
<iconify-icon icon="solar:graph-up-linear" width="18"></iconify-icon>
</div>
<span className="font-display font-bold text-sm tracking-tight hidden sm:block text-white">EasyClicks</span>
</div>
<div className="flex items-center gap-1">
<a className="px-4 py-2 rounded-full text-xs font-medium transition-colors text-neutral-400 hover:text-white hover:bg-white/5" href="#simulator">Simulateur</a>
<button className="px-4 py-2 rounded-full text-xs font-medium bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors border border-indigo-500/20 text-indigo-400" data-island_submit_button_registered="true" onclick="toggleModal()">
                    Contact
                </button>
</div>
</div>
</header>
<main className="flex flex-col w-full z-10 relative items-center">

<section className="text-center max-w-5xl z-10 mr-auto ml-auto pt-40 pr-6 pb-20 pl-6 relative">

<div className="mb-8 flex flex-col items-center gap-3 animate-[fadeInUp_1s_ease-out_forwards]">
<div className="flex -space-x-3">
<img alt="Client 1" className="h-9 w-9 rounded-full ring-2 object-cover grayscale hover:grayscale-0 transition-all ring-neutral-950" src="https://i.pravatar.cc/100?img=33"/>
<img alt="Client 2" className="h-9 w-9 rounded-full ring-2 object-cover grayscale hover:grayscale-0 transition-all ring-neutral-950" src="https://i.pravatar.cc/100?img=47"/>
<img alt="Client 3" className="h-9 w-9 rounded-full ring-2 object-cover grayscale hover:grayscale-0 transition-all ring-neutral-950" src="https://i.pravatar.cc/100?img=12"/>
<img alt="Client 4" className="h-9 w-9 rounded-full ring-2 object-cover grayscale hover:grayscale-0 transition-all ring-neutral-950" src="https://i.pravatar.cc/100?img=59"/>
<div className="h-9 w-9 rounded-full ring-2 flex items-center justify-center text-[10px] font-medium ring-neutral-950 bg-neutral-800 text-white">+140</div>
</div>
<div className="flex items-center gap-1 text-indigo-400">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-xs ml-2 text-neutral-400">Entreprises accompagnées</span>
</div>
</div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] font-display text-white">
                Propulsez votre <br/>
<span className="bg-gradient-to-r text-transparent bg-clip-text from-indigo-400 via-blue-400 to-purple-400">croissance locale.</span>
</h1>
<p className="text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed text-neutral-400">
                Système d'acquisition complet : Stratégie, Création &amp; Performance. 
                Transformez vos clics en clients fidèles sans complexité technique.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">

<button className="btn-animated group" onclick="toggleModal()">
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
<i className="point"></i><i className="point"></i><i className="point"></i>
</div>
<span className="btn-inner">
                        Démarrer l'audit gratuit
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</span>
</button>
<a className="inline-flex items-center gap-2 rounded-xl border px-6 py-3.5 text-base font-medium backdrop-blur transition-all border-white/10 bg-white/5 text-white/90 hover:bg-white/10" data-island_submit_button_registered="true" href="#simulator">
<iconify-icon icon="solar:calculator-linear" width="20"></iconify-icon>
                    Simuler mes résultats
                </a>
</div>

<div className="relative w-full max-w-4xl mx-auto group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 to-blue-600"></div>
<div className="relative rounded-2xl overflow-hidden border shadow-2xl aspect-[16/9] md:aspect-[21/9] border-neutral-800 bg-neutral-950">
<img alt="Mobile Ads Preview" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/772ea552-7b95-4e34-8758-ad320844c51c_1600w.webp"/>
<div className="absolute inset-0 z-0">
<img alt="Performance Analytics Dashboard" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
</div>

<div className="absolute bottom-6 right-6 backdrop-blur-md p-4 rounded-xl border shadow-lg flex gap-3 items-center animate-[float_4s_ease-in-out_infinite] bg-neutral-900/90 border-neutral-700">
<div className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400">
<iconify-icon icon="solar:chart-2-bold" width="24"></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs uppercase tracking-wider text-neutral-400">ROAS Moyen</p>
<p className="text-lg font-bold text-white">x4.5</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t w-full border-neutral-900 bg-neutral-950/50" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-sm font-bold text-indigo-500 tracking-widest uppercase mb-2">Notre Méthode</h2>
<h3 className="text-3xl lg:text-4xl font-display font-bold text-white">4 étapes vers la performance</h3>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 rounded-2xl border hover:border-indigo-500/30 transition-all duration-300 group bg-neutral-900/50 border-neutral-800">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-neutral-800 text-indigo-400">
<iconify-icon icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-2 text-white">1. Analyse</h4>
<p className="text-sm leading-relaxed text-neutral-400">Audit de votre présence et définition d'objectifs chiffrés.</p>
</div>

<div className="p-6 rounded-2xl border hover:border-blue-500/30 transition-all duration-300 group bg-neutral-900/50 border-neutral-800">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-neutral-800 text-blue-400">
<iconify-icon icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-2 text-white">2. Création</h4>
<p className="text-sm leading-relaxed text-neutral-400">Production de visuels et vidéos "scroll-stopper" haute qualité.</p>
</div>

<div className="p-6 rounded-2xl border hover:border-purple-500/30 transition-all duration-300 group bg-neutral-900/50 border-neutral-800">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-neutral-800 text-purple-400">
<iconify-icon icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-2 text-white">3. Lancement</h4>
<p className="text-sm leading-relaxed text-neutral-400">Diffusion multicanale (Meta, Google, TikTok) ciblée.</p>
</div>

<div className="p-6 rounded-2xl border hover:border-cyan-500/30 transition-all duration-300 group bg-neutral-900/50 border-neutral-800">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-neutral-800 text-cyan-400">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-2 text-white">4. Optimisation</h4>
<p className="text-sm leading-relaxed text-neutral-400">Analyse quotidienne et amélioration continue du ROI.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto w-full" id="services">
<h2 className="text-3xl lg:text-4xl font-display font-bold mb-12 text-white">L'arsenal complet pour <br/><span className="text-neutral-500">dominer votre marché.</span></h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 row-span-2 rounded-3xl border p-8 relative overflow-hidden group hover:border-indigo-500/30 transition-colors bg-neutral-900 border-neutral-800">
<div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] group-hover:bg-blue-600/20 transition-all bg-blue-600/10"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="inline-block p-3 rounded-xl bg-blue-500/10 mb-4 text-blue-400">
<iconify-icon icon="solar:layers-minimalistic-bold" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-2 font-display text-white">Acquisition Multicanale</h3>
<p className="max-w-md text-neutral-400">Nous orchestrons vos campagnes sur Meta, Google et TikTok pour toucher votre audience là où elle est la plus active.</p>
</div>

<div className="mt-8 border rounded-xl p-4 w-full max-w-sm ml-auto backdrop-blur-sm shadow-xl translate-y-4 group-hover:translate-y-2 transition-transform bg-neutral-950/80 border-neutral-800">
<div className="flex justify-between items-center mb-4">
<span className="text-xs text-neutral-500 font-mono">CAMPAGNE_Q3_V2</span>
<span className="text-[10px] px-2 py-0.5 rounded uppercase tracking-wider text-cyan-400 bg-cyan-900/30">Active</span>
</div>
<div className="space-y-3">
<div className="h-1.5 rounded-full overflow-hidden bg-neutral-800">
<div className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 w-[78%]"></div>
</div>
<div className="flex justify-between text-[10px] font-mono">
<span className="text-neutral-400">Budget: 1,240€</span>
<span className="text-white">Conv: +34%</span>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-3xl border p-8 hover:border-indigo-500/30 transition-colors relative overflow-hidden group bg-neutral-900 border-neutral-800">
<div className="inline-block p-3 rounded-xl bg-indigo-500/10 mb-4 text-indigo-400">
<iconify-icon icon="solar:palette-bold" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-2 font-display text-white">Studio Créatif</h3>
<p className="text-sm text-neutral-400">UGC, Motion Design, Visuels statiques. Des assets conçus pour la conversion.</p>
</div>

<div className="rounded-3xl border p-8 hover:border-indigo-500/30 transition-colors relative overflow-hidden bg-neutral-900 border-neutral-800">
<div className="inline-block p-3 rounded-xl bg-purple-500/10 mb-4 text-purple-400">
<iconify-icon icon="solar:pie-chart-2-bold" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-2 font-display text-white">Data &amp; Reporting</h3>
<p className="text-sm text-neutral-400">Tableau de bord live accessible 24/7. Transparence totale sur vos dépenses.</p>
</div>
</div>
</section>

<section className="py-24 w-full relative overflow-hidden">
<div className="mb-12 text-center relative z-10">
<p className="text-xs uppercase text-indigo-500 tracking-widest mb-2 font-bold">Avis Clients</p>
<h2 className="text-3xl sm:text-4xl font-display tracking-tight font-bold text-white">
                  Ils nous font confiance
                </h2>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] blur-[100px] rounded-full pointer-events-none bg-indigo-900/20"></div>
<div className="relative flex items-center justify-center py-10 sm:py-16 min-h-[450px] max-w-7xl mx-auto overflow-hidden">
<div className="flex justify-center items-center h-full w-full relative z-10 gap-4 flex-wrap md:flex-nowrap">

<div className="glass relative w-[320px] h-[340px] rounded-2xl p-1 md:-mr-12 md:rotate-[-6deg] hover:rotate-0 transition-transform duration-500 z-10 hover:z-20">
<div className="h-full w-full rounded-xl p-6 flex flex-col border shadow-2xl backdrop-blur-md bg-neutral-950/80 border-white/5">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-800 text-indigo-400">
<iconify-icon icon="solar:quote-up-square-bold" width="24"></iconify-icon>
</div>
<p className="text-sm leading-relaxed mb-6 flex-grow text-neutral-300">
                          "Travailler avec EasyClicks a transformé notre visibilité locale. Nos réservations ont doublé en 2 mois grâce aux campagnes Meta."
                        </p>
<div className="pt-4 border-t flex items-center justify-between border-neutral-800">
<div className="flex items-center gap-3">
<img alt="User" className="h-8 w-8 rounded-full object-cover ring-2 ring-neutral-800" src="https://i.pravatar.cc/100?img=11"/>
<div>
<div className="text-xs font-bold text-white">Thomas Dubois</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wide">CEO, Resto'Gourmet</div>
</div>
</div>
<div className="flex items-center gap-1 text-yellow-500">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-xs font-bold ml-1 text-white">5.0</span>
</div>
</div>
</div>
</div>

<div className="glass relative w-[340px] h-[360px] rounded-2xl p-1 z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform scale-105">
<div className="h-full w-full rounded-xl p-8 flex flex-col border border-indigo-500/20 shadow-2xl backdrop-blur-md bg-neutral-900/90">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 to-blue-600 text-white">
<iconify-icon icon="solar:chat-round-line-bold" width="24"></iconify-icon>
</div>
<p className="text-base leading-relaxed mb-6 flex-grow font-medium text-white">
                          "L'équipe est réactive et les reportings sont clairs. On sait exactement combien nous rapporte chaque euro investi. Un vrai partenaire de croissance."
                        </p>
<div className="pt-4 border-t flex items-center justify-between border-neutral-800">
<div className="flex items-center gap-3">
<img alt="User" className="h-9 w-9 rounded-full object-cover ring-2 ring-indigo-500" src="https://i.pravatar.cc/100?img=5"/>
<div>
<div className="text-sm font-bold text-white">Sarah Martin</div>
<div className="text-[10px] uppercase tracking-wide text-indigo-400">Directrice, FitLife Gym</div>
</div>
</div>
<div className="flex items-center gap-1 text-yellow-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<span className="text-sm font-bold ml-1 text-white">5.0</span>
</div>
</div>
</div>
</div>

<div className="glass relative w-[320px] h-[340px] rounded-2xl p-1 md:-ml-12 md:rotate-[6deg] hover:rotate-0 transition-transform duration-500 z-10 hover:z-20">
<div className="h-full w-full rounded-xl p-6 flex flex-col border shadow-2xl backdrop-blur-md bg-neutral-950/80 border-white/5">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-800 text-blue-400">
<iconify-icon icon="solar:like-bold" width="24"></iconify-icon>
</div>
<p className="text-sm leading-relaxed mb-6 flex-grow text-neutral-300">
                          "Excellente gestion de nos leads immobiliers. La qualité des prospects a nettement augmenté depuis qu'on a délégué nos pubs à EasyClicks."
                        </p>
<div className="pt-4 border-t flex items-center justify-between border-neutral-800">
<div className="flex items-center gap-3">
<img alt="User" className="h-8 w-8 rounded-full object-cover ring-2 ring-neutral-800" src="https://i.pravatar.cc/100?img=68"/>
<div>
<div className="text-xs font-bold text-white">Marc Weber</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wide">Agence Immo Pro</div>
</div>
</div>
<div className="flex items-center gap-1 text-yellow-500">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-xs font-bold ml-1 text-white">5.0</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-gradient-to-b to-[#050b1d] from-neutral-950 w-full border-neutral-900 border-t pt-24 pb-24 relative" id="simulator">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-white">Simulateur de Performance</h2>
<p className="text-neutral-400">Estimez votre potentiel de croissance en temps réel.</p>
</div>
<div className="backdrop-blur-xl border rounded-3xl p-8 lg:p-12 shadow-2xl bg-neutral-900/60 border-neutral-700/50">
<div className="grid md:grid-cols-2 gap-12 mb-10">
<div className="space-y-8">
<div className="">
<label className="flex justify-between text-sm font-medium mb-4 text-neutral-300">
<span>Budget Mensuel</span>
<span className="font-mono text-indigo-400" id="budgetDisplay">4000€</span>
</label>
<input className="w-full" id="budgetInput" max="10000" min="500" step="100" type="range" value="1500"/>
</div>
<div>
<label className="text-sm font-medium mb-3 block text-neutral-300">Plateforme</label>
<div className="grid grid-cols-3 gap-2">
<button className="platform-btn active ring-1 ring-indigo-500 bg-indigo-500/10 py-2.5 rounded-lg text-sm font-medium transition-all text-indigo-400" data-island_submit_button_registered="true" data-value="1.2">Meta</button>
<button className="platform-btn ring-1 py-2.5 rounded-lg text-sm font-medium transition-all ring-neutral-700 hover:bg-neutral-800 text-neutral-400" data-island_submit_button_registered="true" data-value="1.5">Google</button>
<button className="platform-btn ring-1 py-2.5 rounded-lg text-sm font-medium transition-all ring-neutral-700 hover:bg-neutral-800 text-neutral-400" data-island_submit_button_registered="true" data-value="0.9">TikTok</button>
</div>
</div>
<div>
<label className="text-sm font-medium mb-3 block text-neutral-300">Objectif</label>
<select className="w-full border rounded-lg py-3 px-3 focus:ring-1 focus:ring-indigo-500 outline-none text-sm appearance-none bg-neutral-950 border-neutral-700 text-neutral-300" id="goalSelect">
<option value="clicks">Trafic (Clics)</option>
<option value="leads">Prospects (Leads)</option>
<option value="views">Notoriété (Vues)</option>
</select>
</div>
</div>

<div className="rounded-2xl p-8 border flex flex-col justify-center space-y-6 relative overflow-hidden bg-neutral-950 border-neutral-800">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[40px] rounded-full"></div>
<div>
<p className="text-xs text-neutral-500 uppercase tracking-wider mb-1 font-bold">Impressions Estimées</p>
<p className="text-2xl font-light font-mono text-white" id="impressionsResult">197 325</p>
</div>
<div className="w-full h-px bg-neutral-800"></div>
<div className="">
<p className="text-xs text-indigo-500 uppercase tracking-wider mb-1 font-bold" id="resultLabel">Clics Estimés</p>
<div className="flex items-end gap-3">
<p className="text-5xl font-bold tracking-tighter text-white" id="mainResult">4 385</p>
<span className="text-xs mb-2 flex items-center px-1.5 py-0.5 rounded border border-cyan-500/20 text-cyan-400 bg-cyan-900/20">
<iconify-icon className="mr-1" icon="solar:graph-new-up-linear"></iconify-icon> ROI Élevé
                                    </span>
</div>
</div>
</div>
</div>
<div className="text-center">
<button className="btn-animated group w-full md:w-auto" onclick="toggleModal()">
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
<span className="btn-inner">
                                Lancer cette campagne
                            </span>
</button>
</div>
</div>
</div>
</section>
</main>

<footer className="pt-20 pb-10 border-t text-center md:text-left w-full relative z-10 border-neutral-900 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<a className="text-2xl tracking-tighter font-bold flex items-center justify-center md:justify-start gap-2 mb-6 font-display text-white" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 flex items-center justify-center to-blue-600 text-white">
<iconify-icon icon="solar:graph-up-linear" width="18"></iconify-icon>
</div>
                        EasyClicks
                    </a>
<p className="text-sm max-w-sm mx-auto md:mx-0 text-neutral-400">
                        La régie média digitale nouvelle génération. 
                        Nous transformons l'incertitude publicitaire en croissance prévisible.
                    </p>
</div>
<div className="">
<h4 className="font-bold mb-6 font-display text-white">Navigation</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li className=""><a className="transition-colors hover:text-indigo-400" href="#about">Méthode</a></li>
<li className=""><a className="transition-colors hover:text-indigo-400" href="#services">Services</a></li>
<li className=""><a className="transition-colors hover:text-indigo-400" href="#simulator">Simulateur</a></li>
</ul>
</div>
<div className="">
<h4 className="font-bold mb-6 font-display text-white">Contact</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li className="">hello@easyclicks.com</li>
<li className="">+33 1 99 88 77 66</li>
<li className="flex gap-4 mt-4 justify-center md:justify-start">
<a className="transition-colors hover:text-white" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="transition-colors hover:text-white" href="#"><iconify-icon className="" icon="solar:letter-linear" width="20"></iconify-icon></a>
</li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs border-neutral-800 text-neutral-600">
<p className="">© 2024 EasyClicks Agency.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Mentions Légales</a>
<a className="hover:text-neutral-400" href="#">Confidentialité</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden" id="contactModal">
<div className="absolute inset-0 backdrop-blur-sm transition-opacity opacity-0 bg-neutral-950/90" id="modalBackdrop" onclick="toggleModal()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-6 transition-all duration-300 transform scale-95 opacity-0" id="modalContent">
<div className="border rounded-3xl p-8 shadow-2xl relative overflow-hidden bg-neutral-900 border-neutral-700">
<div className="absolute top-0 right-0 p-4">
<button className="transition-colors text-neutral-400 hover:text-white" onclick="toggleModal()">
<iconify-icon icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
</div>
<h3 className="text-2xl font-bold mb-2 font-display text-white">Démarrez votre croissance</h3>
<p className="text-sm mb-6 text-neutral-400">Audit offert sans engagement.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold">Nom</label>
<input className="w-full border rounded-lg p-3 text-sm focus:border-indigo-500 outline-none transition-all placeholder-neutral-700 bg-neutral-950 border-neutral-800 text-white" island_field_signature="text|||||parsed|0" island_form_infra_field_type="USERNAME" placeholder="Votre nom" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold">Email</label>
<input className="w-full border rounded-lg p-3 text-sm focus:border-indigo-500 outline-none transition-all placeholder-neutral-700 bg-neutral-950 border-neutral-800 text-white" island_field_signature="email|||||parsed|0" island_form_infra_field_type="USERNAME" placeholder="pro@email.com" type="email"/>
</div>
</div>
<button className="w-full py-3.5 bg-gradient-to-r from-indigo-500 hover:to-blue-500 font-medium rounded-xl transition-all shadow-lg shadow-indigo-500/20 mt-4 to-blue-600 hover:from-indigo-400 text-white" type="submit">
                        Réserver mon appel
                    </button>
</form>
</div>
</div>
</div>



    </>
  );
}
