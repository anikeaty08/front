import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



(function () {
  function initUnicorn() {
    if (window.UnicornStudio && window.UnicornStudio.init) {
      if (!window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    }
  }

  if (window.UnicornStudio && window.UnicornStudio.init) {
    initUnicorn();
    return;
  }

  if (!window.UnicornStudio) {
    window.UnicornStudio = { isInitialized:false };
  }

  if (!document.querySelector("script[data-unicorn-loader]")) {
    var s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";
    s.setAttribute("data-unicorn-loader","true");
    s.onload = function () {
      initUnicorn();
    };
    (document.head || document.body).appendChild(s);
  }
})();



            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
          


        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('js-reveal')) {
                            entry.target.classList.remove('opacity-0', 'blur-sm', 'translate-y-6');
                            entry.target.classList.add('opacity-100', 'blur-none', 'translate-y-0');
                        } else if (entry.target.classList.contains('js-reveal-fade')) {
                            entry.target.classList.remove('opacity-0', 'blur-sm');
                            entry.target.classList.add('opacity-100', 'blur-none');
                        }
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                root: null,
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            document.querySelectorAll('.js-reveal, .js-reveal-fade').forEach(el => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="unicorn-bg absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
<div className="absolute inset-0 w-full h-full opacity-30 mix-blend-screen">
<div className="absolute inset-0 w-full h-full" data-us-dpi="1.5" data-us-fps="60" data-us-lazyload="true" data-us-production="true" data-us-project="WdVna2EGJHojbGLRHA52">
</div>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 bg-stone-950/80 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center transition-opacity hover:opacity-80" href="#">
<img alt="Klark" className="w-auto h-5 object-contain invert opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c97d0151-d895-4937-bd1c-b1ad9c6326a0_320w.png"/>
</a>
<div className="flex items-center gap-4">
<a className="hover:bg-stone-200 transition-colors text-sm font-normal text-stone-900 bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="https://beta.klark.app/login">
                    Créer un compte
                </a>
</div>
</div>
</nav>

<section className="overflow-hidden flex flex-col min-h-[90vh] bg-stone-950 pt-40 pb-32 relative items-center justify-center">

<div className="-translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none w-full h-[600px] max-w-[1000px] absolute top-1/2 left-1/2 js-reveal-fade transition-all duration-1000 ease-out delay-500">
<div className="w-full h-full border border-stone-800/80 rounded-[2rem] bg-stone-900/50 p-6 flex flex-col gap-6 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md animate-float">
<div className="flex gap-4 items-center border-b border-stone-800/80 pb-4">
<div className="w-12 h-4 bg-stone-800 rounded-full"></div>
<div className="w-24 h-4 bg-stone-800 rounded-full"></div>
<div className="ml-auto w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
</div>
</div>
<div className="flex gap-6 h-full">
<div className="w-1/4 h-full bg-stone-950/50 rounded-2xl border border-white/5 animate-float-delayed p-4 flex flex-col gap-4">
<div className="w-full h-8 bg-white/5 rounded-lg border border-white/5"></div>
<div className="w-full h-8 bg-white/5 rounded-lg border border-white/5"></div>
<div className="w-full h-8 bg-white/5 rounded-lg border border-white/5"></div>
</div>
<div className="w-3/4 h-full flex flex-col gap-6">
<div className="w-full h-1/3 bg-stone-950/50 rounded-2xl border border-white/5 p-4 flex items-center justify-center">
<div className="w-16 h-1 bg-cyan-500/20 rounded-full"></div>
</div>
<div className="w-full h-2/3 flex gap-6">
<div className="w-1/2 h-full bg-stone-950/50 rounded-2xl border border-white/5"></div>
<div className="w-1/2 h-full bg-stone-950/50 rounded-2xl border border-white/5 animate-float"></div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950"></div>
<div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-transparent to-stone-950"></div>
</div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6">
<h1 className="md:text-7xl lg:text-[6rem] leading-[0.9] uppercase js-reveal transition-all duration-1000 ease-out delay-100 text-5xl font-normal text-white tracking-tighter font-['Oswald'] mb-8 drop-shadow-2xl">
                Votre Centre De Commandement <br className="hidden md:block"/> Pour Votre Business
            </h1>
<p className="text-lg md:text-xl text-stone-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed js-reveal transition-all duration-1000 ease-out delay-200">
                Gérez vos clients, vos ventes, vos paiements et votre activité depuis une seule plateforme.
            </p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center js-reveal transition-all duration-1000 ease-out delay-300">
<a className="sm:w-auto uppercase hover:bg-stone-200 transition-colors flex items-center justify-center gap-2 text-sm font-normal text-stone-900 tracking-widest bg-white w-full rounded-full pt-4 pr-8 pb-4 pl-8" href="https://beta.klark.app/login">
                    Commencer avec Klark
                    <iconify-icon className="" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="sm:w-auto uppercase hover:bg-stone-800 hover:text-white transition-colors flex items-center justify-center gap-2 text-sm font-normal text-stone-300 tracking-widest bg-stone-900 w-full border-stone-700 border rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm" href="https://klark.app/?r=0">Découvrir</a>
</div>
</div>
</section>

<section className="bg-[#F5F4F0] text-stone-900 pt-32 pb-32">
<div className="absolute inset-0 pointer-events-none z-0" style={{background: 'radial-gradient(circle at 50% 0%, rgba(176, 141, 106, 0.12) 0%, transparent 60%)'}}></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center mb-20 max-w-2xl mx-auto js-reveal transition-all duration-1000 ease-out">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B08D6A]/20 bg-[#B08D6A]/5 backdrop-blur-md mb-8">
<div className="w-5 h-5 rounded-full bg-[#B08D6A]/10 flex items-center justify-center">
<iconify-icon className="text-[#B08D6A] text-xs" icon="solar:box-linear"></iconify-icon>
</div>
<span className="text-xs font-normal text-stone-700 tracking-wide uppercase">Écosystème Unifié</span>
</div>
<h2 className="font-['Oswald'] text-4xl md:text-5xl lg:text-6xl font-normal uppercase tracking-tighter text-stone-900 mb-6 leading-none">
                    Tout Votre Business.<br/>Une Seule Plateforme.
                </h2>
<p className="text-lg text-stone-600 font-light">
                    Klark centralise tout ce dont vous avez besoin pour gérer votre activité de manière fluide et efficace.
                </p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 mb-20 gap-x-6 gap-y-6 max-w-6xl mx-auto">
<div className="bg-white border border-stone-200/80 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/5 group js-reveal ease-out delay-[50ms]">
<div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center border border-stone-100 mb-6 text-[#8E7B68] group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#B08D6A]/10 group-hover:border-[#B08D6A]/20">
<iconify-icon className="" height="24" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-stone-900 mb-2 group-hover:text-[#B08D6A] transition-colors">CRM Intelligent</h3>
</div>
<div className="bg-white border border-stone-200/80 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/5 group js-reveal ease-out delay-[100ms]">
<div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center border border-stone-100 mb-6 text-[#8E7B68] group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#B08D6A]/10 group-hover:border-[#B08D6A]/20">
<iconify-icon className="" height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-stone-900 mb-2 group-hover:text-[#B08D6A] transition-colors">Facture Électronique</h3>
</div>
<div className="bg-white border border-stone-200/80 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/5 group js-reveal ease-out delay-[150ms]">
<div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center border border-stone-100 mb-6 text-[#8E7B68] group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#B08D6A]/10 group-hover:border-[#B08D6A]/20">
<iconify-icon className="" height="24" icon="solar:card-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-stone-900 mb-2 group-hover:text-[#B08D6A] transition-colors">Paiements</h3>
</div>
<div className="bg-white border border-stone-200/80 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/5 group js-reveal ease-out delay-[200ms]">
<div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center border border-stone-100 mb-6 text-[#8E7B68] group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#B08D6A]/10 group-hover:border-[#B08D6A]/20">
<iconify-icon height="24" icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-stone-900 mb-2 group-hover:text-[#B08D6A] transition-colors">Rendez-vous</h3>
</div>
<div className="bg-white border border-stone-200/80 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/5 group js-reveal ease-out delay-[250ms]">
<div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center border border-stone-100 mb-6 text-[#8E7B68] group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#B08D6A]/10 group-hover:border-[#B08D6A]/20">
<iconify-icon height="24" icon="solar:cart-large-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-stone-900 mb-2 group-hover:text-[#B08D6A] transition-colors">Ventes</h3>
</div>
<div className="bg-white border border-stone-200/80 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/5 group js-reveal ease-out delay-[300ms]">
<div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center border border-stone-100 mb-6 text-[#8E7B68] group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#B08D6A]/10 group-hover:border-[#B08D6A]/20">
<iconify-icon height="24" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-stone-900 mb-2 group-hover:text-[#B08D6A] transition-colors">Suivi Financier</h3>
</div>
<div className="bg-white border border-stone-200/80 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/5 group js-reveal ease-out delay-[350ms]">
<div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center border border-stone-100 mb-6 text-[#8E7B68] group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#B08D6A]/10 group-hover:border-[#B08D6A]/20">
<iconify-icon className="" height="24" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-stone-900 mb-2 group-hover:text-[#B08D6A] transition-colors">Prospektor</h3>
</div>
<div className="bg-white border border-stone-200/80 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/5 group js-reveal ease-out delay-[400ms]">
<div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center border border-stone-100 mb-6 text-[#8E7B68] group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#B08D6A]/10 group-hover:border-[#B08D6A]/20">
<iconify-icon height="24" icon="solar:lock-password-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-stone-900 mb-2 group-hover:text-[#B08D6A] transition-colors">Digital Safe</h3>
</div>
</div>
<div className="text-center js-reveal transition-all duration-1000 ease-out delay-100">
<a className="inline-flex items-center gap-2 uppercase hover:bg-stone-800 transition-colors text-sm font-normal text-white tracking-widest bg-stone-900 rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)]" href="https://klark.app/outils">
                    Découvrir l'Interface
                </a>
</div>
</div>
</section>

<section className="border-y overflow-hidden bg-stone-950 border-white/5 pt-32 pb-32 relative text-stone-100 z-20">
<div className="aura-background-component top-0 w-full -z-10 absolute h-full opacity-40">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex items-center justify-center gap-2 mb-8 bg-white/[0.02] border border-white/[0.05] px-3 py-1.5 rounded-full backdrop-blur-sm mx-auto w-max js-reveal ease-out">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
<span className="text-xs text-stone-400 tracking-[0.2em] font-light uppercase">Module IA Actif</span>
</div>
<h2 className="font-['Oswald'] md:text-5xl text-4xl font-normal text-white uppercase tracking-tighter mb-6 leading-none js-reveal transition-all duration-1000 ease-out delay-100">
                Donnez Vie À Vos Projets,<br/>Votre Business Peut Désormais Penser.
            </h2>
<div className="sm:p-10 overflow-hidden flex flex-col text-center bg-stone-900/80 border-stone-800 border rounded-[2rem] mb-12 pt-8 pr-8 pb-8 pl-8 relative shadow-2xl items-center backdrop-blur-xl group hover:border-stone-700/80 transition-colors js-reveal transition-all duration-1000 ease-out delay-200">
<div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>
<div className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>
<div className="relative z-10 flex flex-col items-center w-full">
<h3 className="sm:text-3xl uppercase text-2xl font-normal text-white tracking-tighter font-['Oswald'] mb-4"><span className="text-emerald-400">l'intelligence artificielle</span> par Klark</h3>
<div className="relative w-16 h-16 mb-6">
<div className="absolute inset-0 border border-white/5 rounded-full bg-stone-900 shadow-inner"></div>
<div className="absolute top-1/2 left-1/2 w-2 h-2 bg-emerald-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(52,211,153,0.8)] animate-pulse"></div>
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-400/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<div className="absolute inset-0 rounded-full border-r border-emerald-400/50 animate-[spin_3s_linear_infinite]" style={{background: 'conic-gradient(from 0deg, transparent 60%, rgba(52,211,153,0.15) 100%)', mixBlendMode: 'screen'}}></div>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-500/20 bg-cyan-500/10 text-[10px] sm:text-xs font-mono text-cyan-400 tracking-widest mb-5">
                        NOUVEAU: MCP_PROTOCOL::ACTIVE
                    </div>
<h3 className="sm:text-2xl text-xl font-normal text-white tracking-tight mb-4">
                        Connectez Klark à <span className="text-cyan-400">ChatGPT, Claude, Mistral AI, Perplexity</span>
</h3>
<p className="leading-relaxed text-sm font-light text-stone-400 max-w-xl mr-auto mb-10 ml-auto">
                        Rendez votre business intelligent. Grâce au <strong className="text-stone-200 font-normal">Model Context Protocol (MCP)</strong>, offrez à vos assistants IA un accès direct, sécurisé et en temps réel à votre contexte métier pour vous assister de manière ultra-personnalisée.
                    </p>
<div className="grid sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto mb-4 relative z-10">
<div className="bg-stone-950/80 border border-white/5 rounded-xl p-5 text-left backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/5 group/card hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.1)]">
<iconify-icon className="text-cyan-400" height="18" icon="solar:chat-round-money-linear" width="18"></iconify-icon>
</div>
<h4 className="text-sm font-normal text-white tracking-tight">Insights Financiers</h4>
</div>
<p className="leading-relaxed text-xs font-light text-stone-400">Interrogez directement vos données bancaires et ventes Stripe depuis VOTRE IA pour analyser votre trésorerie, prédire vos revenus ou automatiser vos rapports.</p>
</div>
<div className="bg-stone-950/80 border border-white/5 rounded-xl p-5 text-left backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/5 group/card hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.1)]">
<iconify-icon className="text-emerald-400" height="18" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
</div>
<h4 className="text-sm font-normal text-white tracking-tight">Ciblage &amp; CRM IA</h4>
</div>
<p className="leading-relaxed text-xs font-light text-stone-400">Demandez à votre IA de rédiger vos emails de relance ou de prospection qui comprend parfaitement l'historique de chaque client de votre base de données.</p>
</div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 mb-12 items-center justify-center js-reveal transition-all duration-1000 ease-out delay-300">
<div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm text-xs font-light text-stone-400">
<iconify-icon className="text-stone-500" height="16" icon="solar:clock-circle-linear" width="16"></iconify-icon>
                    Perte de temps
                </div>
<div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm text-xs font-light text-stone-400">
<iconify-icon className="text-stone-500" height="16" icon="solar:danger-circle-linear" width="16"></iconify-icon>
                    Erreurs
                </div>
<div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm text-xs font-light text-stone-400">
<iconify-icon className="text-stone-500" height="16" icon="solar:eye-closed-linear" width="16"></iconify-icon>
                    Manque de visibilité
                </div>
</div>
<a className="inline-flex items-center gap-2 uppercase hover:text-white transition-colors hover:border-white js-reveal ease-out delay-500 text-xs font-normal text-stone-400 tracking-widest border-stone-700 border-b pb-1" href="#">Découvrir l'Intelligence Artificielle par Klark</a>
</div>
</section>

<section className="overflow-hidden text-stone-900 bg-[#F5F4F0] border-stone-200 border-t pt-32 pb-32">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col js-reveal transition-all duration-1000 ease-out text-center mb-20 items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B08D6A]/20 bg-[#B08D6A]/5 backdrop-blur-md mb-8">
<div className="w-5 h-5 rounded-full bg-[#B08D6A]/10 flex items-center justify-center">
<iconify-icon className="text-[#B08D6A] text-xs" icon="solar:layers-linear"></iconify-icon>
</div>
<span className="text-xs font-normal text-stone-700 tracking-wide uppercase">Environnements</span>
</div>
<h2 className="font-['Oswald'] md:text-5xl text-4xl font-normal uppercase text-stone-900 tracking-tighter mb-6 leading-none">
                    Deux Façons D'utiliser Klark.<br/>Une Seule Interface.
                </h2>
<div className="inline-flex gap-3 bg-white border border-[#B08D6A]/20 rounded-full py-1.5 pr-4 pl-1.5 shadow-sm items-center">
<div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#B08D6A] text-white shadow-inner">
<svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
</div>
<span className="uppercase text-xs font-normal text-[#8E7B68] tracking-wide">L'intelligence artificielle par klark</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-x-8 gap-y-8">

<div className="flex flex-col sm:rounded-[2rem] sm:p-8 md:p-12 js-reveal transition-all duration-1000 ease-out delay-100 hover:shadow-xl hover:shadow-stone-200/50 hover:border-[#B08D6A]/30 duration-500 bg-white h-full border-stone-200 border rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="mb-8 sm:mb-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#B08D6A]/10 text-xs font-mono text-[#B08D6A] mb-4 sm:mb-6 uppercase tracking-widest border border-[#B08D6A]/20">E-commerce</div>
<h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900 mb-3 sm:mb-4">Pour les e-commerçants</h3>
<p className="text-stone-500 font-light text-base sm:text-lg">Connectez vos boutiques et plateformes de paiement et pilotez votre activité depuis un seul tableau de bord.</p>
</div>
<div className="sm:mb-10 mb-8">
<p className="text-xs font-normal text-stone-400 uppercase tracking-widest mb-3 sm:mb-4">Intégrations natives</p>
<div className="flex flex-wrap gap-2 sm:gap-3">
<span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-stone-50 border border-stone-100 text-xs sm:text-sm font-light text-stone-700">Shopify</span>
<span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-stone-50 border border-stone-100 text-xs sm:text-sm font-light text-stone-700">Stripe</span>
<span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-stone-50 border border-stone-100 text-xs sm:text-sm font-light text-stone-700">PayPal</span>
<span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-stone-50 border border-stone-100 text-xs sm:text-sm font-light text-stone-700">Prestashop</span>
</div>
</div>
<div className="flex-1 flex flex-col relative">
<div className="flex items-center justify-between mb-4 sm:mb-5">
<p className="text-xs font-normal text-stone-400 uppercase tracking-widest m-0">Fonctionnalités</p>
<div className="flex gap-2 ml-3">
<button aria-label="Précédent" className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center bg-white text-stone-500 hover:text-stone-900 hover:bg-stone-50 hover:border-stone-300 transition-colors shadow-sm" onclick="this.parentElement.parentElement.nextElementSibling.scrollBy({left: -350, behavior: 'smooth'})" type="button">
<iconify-icon className="" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button aria-label="Suivant" className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center bg-white text-stone-500 hover:text-stone-900 hover:bg-stone-50 hover:border-stone-300 transition-colors shadow-sm" onclick="this.parentElement.parentElement.nextElementSibling.scrollBy({left: 350, behavior: 'smooth'})" type="button">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-3 sm:gap-4 snap-x sm:pb-8 no-scrollbar -mx-6 sm:-mx-8 sm:px-8 md:-mx-12 md:px-12 pr-6 pb-6 pl-6 gap-x-3 gap-y-3 items-start">
<div className="ml-3 sm:w-[320px] lg:w-[360px] flex-none snap-start rounded-xl p-5 sm:p-6 flex flex-col bg-stone-50/50 w-[85%] h-[240px] border border-stone-100 hover:border-stone-200 transition-colors">
<svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#8E7B68] mb-3 sm:mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="3" x2="21" y1="22" y2="22"></line>
<line x1="6" x2="6" y1="18" y2="11"></line>
<line className="" x1="10" x2="10" y1="18" y2="11"></line>
<line className="" x1="14" x2="14" y1="18" y2="11"></line>
<line x1="18" x2="18" y1="18" y2="11"></line>
<polygon className="" points="12 2 20 7 4 7"></polygon>
</svg>
<h4 className="text-sm sm:text-base font-normal tracking-tight text-stone-900">Flux bancaire</h4>
<p className="mt-2 text-xs sm:text-sm text-stone-500 font-light leading-relaxed">Agrégez vos comptes bancaires et soyez notifié des nouvelles transactions en temps réel.</p>
</div>
<div className="w-[85%] sm:w-[320px] lg:w-[360px] flex-none snap-start rounded-xl p-5 sm:p-6 flex flex-col bg-stone-50/50 h-[240px] border border-stone-100 hover:border-stone-200 transition-colors">
<svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#8E7B68] mb-3 sm:mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M3 3v18h18"></path>
<rect height="7" rx="1" width="4" x="7" y="10"></rect>
<rect className="" height="12" rx="1" width="4" x="15" y="5"></rect>
</svg>
<h4 className="text-sm sm:text-base font-normal tracking-tight text-stone-900">Dashboard ventes</h4>
<p className="mt-2 text-xs sm:text-sm text-stone-500 font-light leading-relaxed">Récupérez les soldes de toutes vos boutiques et obtenez des statistiques précises sur vos ventes.</p>
</div>
<div className="w-[85%] sm:w-[320px] lg:w-[360px] flex-none snap-start rounded-xl p-5 sm:p-6 flex flex-col bg-stone-50/50 h-[240px] border border-stone-100 hover:border-stone-200 transition-colors">
<svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#8E7B68] mb-3 sm:mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
<path d="M3 6h18"></path>
<path d="M16 10a4 4 0 0 1-8 0"></path>
</svg>
<h4 className="text-sm sm:text-base font-normal tracking-tight text-stone-900">Suivi commandes</h4>
<p className="mt-2 text-xs sm:text-sm text-stone-500 font-light leading-relaxed">Analysez vos commandes, soyez notifié à chaque paiement et créez des devis ou factures via Stripe.</p>
</div>
<div className="w-[85%] sm:w-[320px] lg:w-[360px] flex-none snap-start rounded-xl p-5 sm:p-6 flex flex-col bg-stone-50/50 h-[240px] border border-stone-100 hover:border-stone-200 transition-colors">
<iconify-icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#8E7B68] mb-3 sm:mb-4 text-2xl" icon="solar:target-linear"></iconify-icon>
<h4 className="text-sm sm:text-base font-normal tracking-tight text-stone-900">Prospektor</h4>
<p className="mt-2 text-xs sm:text-sm text-stone-500 font-light leading-relaxed">Un outil qui permet d'optimiser et organiser vos prospects pour une prospection optimisée et un ciblage précis.</p>
</div>
<div className="w-[85%] sm:w-[320px] lg:w-[360px] flex-none snap-start rounded-xl p-5 sm:p-6 flex flex-col bg-stone-50/50 h-[240px] border border-stone-100 hover:border-stone-200 transition-colors">
<svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#8E7B68] mb-3 sm:mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<h4 className="text-sm sm:text-base font-normal tracking-tight text-stone-900">Clients centralisés</h4>
<p className="mt-2 text-xs sm:text-sm text-stone-500 font-light leading-relaxed">Centralisez votre portefeuille client et obtenez leurs informations à travers tous vos canaux.</p>
</div>
<div className="w-[85%] sm:w-[320px] lg:w-[360px] flex-none snap-start rounded-xl p-5 sm:p-6 flex flex-col bg-stone-50/50 h-[240px] border border-stone-100 hover:border-stone-200 transition-colors">
<svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#8E7B68] mb-3 sm:mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="16.5" x2="7.5" y1="9.4" y2="4.21"></line>
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
<h4 className="text-sm sm:text-base font-normal tracking-tight text-stone-900">Catalogue unifié</h4>
<p className="mt-2 text-xs sm:text-sm text-stone-500 font-light leading-relaxed">Connectez vos boutiques (Shopify, Prestashop...) et centralisez tous vos produits au même endroit.</p>
</div>
</div>
</div>
<a className="sm:mt-4 inline-flex items-center justify-center gap-2 sm:px-6 sm:py-3.5 hover:bg-stone-50 hover:border-stone-300 transition-colors uppercase text-xs font-normal text-stone-700 tracking-widest bg-white w-full border-stone-200 border rounded-full mt-6 pt-3 pb-3 shadow-sm" href="https://klark.app/klark-e-commerce">
                        Découvrir E-commerce
                    </a>
</div>

<div className="flex flex-col sm:rounded-[2rem] sm:p-8 md:p-12 overflow-hidden js-reveal transition-all duration-1000 ease-out delay-300 group hover:border-stone-700 transition-colors text-white bg-stone-950 h-full border-stone-800 border rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative shadow-xl">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.05),transparent_50%)] pointer-events-none"></div>
<div className="relative z-10 mb-8 sm:mb-10">
<div className="inline-flex gap-2 sm:mb-6 uppercase text-xs text-stone-300 tracking-widest font-mono bg-white/5 border-white/10 border rounded mb-4 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">outils</div>
<h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-white mb-3 sm:mb-4">Pour freelances &amp; entreprises</h3>
<p className="text-stone-400 font-light text-base sm:text-lg">Tous les outils nécessaires pour gérer votre activité dans un seul espace de travail sécurisé.</p>
</div>
<div className="relative z-10 mb-8 sm:mb-10">
<p className="text-xs font-normal text-stone-500 uppercase tracking-widest mb-3 sm:mb-4">Intégrations natives</p>
<div className="flex flex-wrap gap-2 sm:gap-3">
<span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white/[0.02] border border-white/10 text-xs sm:text-sm font-light text-stone-300 backdrop-blur-sm">Google Calendar</span>
<span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white/[0.02] border border-white/10 text-xs sm:text-sm font-light text-stone-300 backdrop-blur-sm">Stripe</span>
<span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white/[0.02] border border-white/10 text-xs sm:text-sm font-light text-stone-300 backdrop-blur-sm">PayPal</span>
</div>
</div>
<div className="flex-1 z-10 relative flex flex-col">
<div className="flex items-center justify-between mb-4 sm:mb-5">
<p className="text-xs font-normal text-stone-500 uppercase tracking-widest m-0">Outils inclus</p>
<div className="flex gap-2 ml-3">
<button aria-label="Précédent" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-stone-400 hover:text-white hover:bg-white/10 transition-colors backdrop-blur-sm shadow-sm" onclick="this.parentElement.parentElement.nextElementSibling.scrollBy({left: -350, behavior: 'smooth'})" type="button">
<iconify-icon className="" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button aria-label="Suivant" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-stone-400 hover:text-white hover:bg-white/10 transition-colors backdrop-blur-sm shadow-sm" onclick="this.parentElement.parentElement.nextElementSibling.scrollBy({left: 350, behavior: 'smooth'})" type="button">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-3 sm:gap-4 snap-x sm:pb-8 no-scrollbar -mx-6 sm:-mx-8 sm:px-8 md:-mx-12 md:px-12 pr-6 pb-6 pl-6 gap-x-3 gap-y-3 items-start">
<div className="ml-3 w-[85%] sm:w-[320px] lg:w-[360px] flex-none snap-start rounded-xl p-5 sm:p-6 flex flex-col bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm h-[240px]">
<iconify-icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mb-3 sm:mb-4 text-2xl" icon="solar:calculator-linear"></iconify-icon>
<h4 className="text-sm sm:text-base font-normal tracking-tight text-stone-200 mb-1 sm:mb-2">Kalkulator</h4>
<p className="sm:text-sm leading-relaxed text-xs font-light text-stone-400">Simulez revenus, charges, impôts ou marges en quelques clics avec des calculs adaptés à votre activité.</p>
</div>
<div className="w-[85%] sm:w-[320px] lg:w-[360px] flex-none snap-start rounded-xl p-5 sm:p-6 flex flex-col bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm h-[240px]">
<iconify-icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mb-3 sm:mb-4 text-2xl" icon="solar:document-add-linear"></iconify-icon>
<h4 className="sm:text-base sm:mb-2 text-sm font-normal text-stone-200 tracking-tight mb-1">Dokument</h4>
<p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">Créez vos contrats et documents en un clic à partir de modèles existants. Vos informations sont pré-remplies et prêtes à être envoyées à vos clients.</p>
</div><div className="sm:w-[320px] lg:w-[360px] flex-none snap-start sm:p-6 flex flex-col hover:border-white/10 transition-colors w-[85%] h-[240px] border-white/5 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-sm">
<svg className="sm:w-6 sm:h-6 sm:mb-4 text-2xl text-pink-400 w-5 h-5 mb-3" data-icon-set="solar" data-solar="shop-linear" height="20" style={{color: 'rgb(244, 114, 182)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3.5 11v3c0 3.771 0 5.657 1.172 6.828S7.729 22 11.5 22h1c3.771 0 5.657 0 6.828-1.172S20.5 17.771 20.5 14v-3"></path><path d="M9.5 2h5l.652 6.517a3.167 3.167 0 1 1-6.304 0z"></path><path d="M3.33 5.351c.178-.89.267-1.335.448-1.696a3 3 0 0 1 1.888-1.548C6.056 2 6.51 2 7.418 2H9.5l-.725 7.245a3.06 3.06 0 1 1-6.043-.904zm17.34 0c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H14.5l.725 7.245a3.06 3.06 0 1 0 6.043-.904z"></path><path d="M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v3" strokeLinecap="round"></path></g></svg>
<h4 className="text-sm sm:text-base font-normal tracking-tight text-stone-200 mb-1 sm:mb-2">Kaisse</h4>
<p className="sm:text-sm leading-relaxed text-xs font-light text-stone-400">Système d’encaissement portable qui permet de gérer facilement vos produits : ajoutez-les, modifiez-les et prenez les commandes en boutique.</p>
</div>
<div className="w-[85%] sm:w-[320px] lg:w-[360px] flex-none snap-start rounded-xl p-5 sm:p-6 flex flex-col bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm h-[240px]">
<iconify-icon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mb-3 sm:mb-4 text-2xl" icon="solar:bag-3-linear"></iconify-icon>
<h4 className="text-sm sm:text-base font-normal tracking-tight text-stone-200 mb-1 sm:mb-2">Showkase</h4>
<p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">Boutique en ligne simplifiée : vos clients peuvent choisir leurs produits, les ajouter à leur panier et payer directement via Stripe à tout moment.</p>
</div>
<div className="w-[85%] sm:w-[320px] lg:w-[360px] flex-none snap-start rounded-xl p-5 sm:p-6 flex flex-col bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm h-[240px]">
<iconify-icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mb-3 sm:mb-4 text-2xl" icon="solar:lock-password-linear"></iconify-icon>
<h4 className="text-sm sm:text-base font-normal tracking-tight text-stone-200 mb-1 sm:mb-2">Digital Safe</h4>
<p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">Générez un lien de paiement et protégez vos réalisations avec un filigrane professionnel. Le paiement libère le contenu en toute sécurité.</p>
</div>
<div className="sm:w-[320px] lg:w-[360px] flex-none snap-start sm:p-6 flex flex-col hover:border-white/10 transition-colors w-[85%] h-[240px] border-white/5 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-sm">
<svg className="sm:w-6 sm:h-6 sm:mb-4 text-2xl text-emerald-400 w-5 h-5 mb-3" data-icon-set="solar" data-solar="document-text-linear" height="20" style={{color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"></path><path d="M8 12h8M8 8h8m-8 8h5" strokeLinecap="round"></path></g></svg>
<h4 className="sm:text-base sm:mb-2 text-sm font-normal text-stone-200 tracking-tight mb-1">Fakture</h4>
<p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">Éditez un devis et une facture éléctronique depuis votre app Klark et votre dashboard en toute simplicité. Le tout connecté à votre CRM.</p>
</div>
<div className="sm:w-[320px] lg:w-[360px] flex-none snap-start sm:p-6 flex flex-col hover:border-white/10 transition-colors w-[85%] h-[240px] border-white/5 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-sm">
<iconify-icon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 mb-3 sm:mb-4 text-2xl" icon="solar:calendar-date-linear"></iconify-icon>
<h4 className="text-sm sm:text-base font-normal tracking-tight text-stone-200 mb-1 sm:mb-2">Kalendar</h4>
<p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">Un outil simple pour gérer vos rendez-vous professionnels, partager vos disponibilités et organiser vos tâches avec des alertes automatiques pour rester productif.</p>
</div><div className="sm:w-[320px] lg:w-[360px] flex-none snap-start sm:p-6 flex flex-col hover:border-white/10 transition-colors w-[85%] h-[240px] border-white/5 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-sm">
<iconify-icon className="sm:w-6 sm:h-6 sm:mb-4 text-2xl text-indigo-400 w-5 h-5 mb-3" height="24" icon="solar:target-outline" style={{color: 'rgb(255, 38, 0)'}} width="24"></iconify-icon>
<h4 className="sm:text-base sm:mb-2 text-sm font-normal text-stone-200 tracking-tight mb-1">Prospektor</h4>
<p className="sm:text-sm leading-relaxed text-xs font-light text-stone-400">Importez vos bases. Qualifiez vos prospects. Enrichissez vos leads grâce au MCP de Klark. Closez plus vite. Tout votre pipeline, au même endroit.</p>
</div>
</div>
</div>
<a className="z-10 sm:mt-4 inline-flex items-center justify-center gap-2 sm:px-6 sm:py-3.5 hover:bg-stone-200 transition-colors text-xs uppercase tracking-widest font-normal text-stone-900 bg-white w-full rounded-full mt-6 py-3 shadow-md relative" href="#">
                        Découvrir les outils
                    </a>
</div>
</div>
</div>
</section>

<section className="bg-stone-950 pt-32 pb-32 border-t border-white/5 relative z-20 overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.03),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.03),transparent_40%)]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative js-reveal transition-all duration-1000 ease-out">
<div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 z-10 pb-16 relative items-end">
<div className="flex flex-col items-start text-left">
<div className="flex items-center gap-2 mb-6 bg-white/[0.02] border border-white/[0.05] px-3 py-1.5 rounded-full backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
<span className="text-xs text-stone-400 tracking-[0.2em] font-light uppercase">Interface Temps Réel</span>
</div>
<h2 className="font-['Oswald'] text-4xl md:text-5xl font-normal tracking-tighter uppercase text-white leading-tight">
                        Vision Globale Sur <br className="hidden sm:block"/>Vos Opérations
                    </h2>
</div>
<p className="text-sm text-stone-400 font-light leading-relaxed text-left md:pb-2 max-w-lg">
                    Suivez vos revenus, analysez vos flux de trésorerie et supervisez vos interactions clients depuis un tableau de bord unique et puissant.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 z-10 mb-8 relative">

<div className="bg-stone-900/80 border border-stone-800/80 rounded-[2rem] p-6 flex flex-col gap-6 relative overflow-hidden group hover:border-stone-700/80 transition-colors">
<div className="absolute -top-32 -right-32 w-80 h-80 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>
<div className="relative z-10">
<h3 className="text-lg font-normal tracking-tight text-white mt-1 max-w-md">
                            Flux de données et revenus
                        </h3>
<p className="text-sm text-stone-400 font-light mt-1">Vos plateformes sont connectées et synchronisées en permanence.</p>
</div>
<div className="flex-1 bg-stone-950/80 border border-white/5 rounded-2xl overflow-hidden flex flex-col md:flex-row relative shadow-[0_4px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
<div className="w-full md:w-[45%] border-b md:border-b-0 md:border-r border-white/5 flex flex-col bg-white/[0.01]">
<div className="p-4 border-b border-white/5 flex justify-between items-center bg-stone-900/40">
<span className="text-xs text-stone-500 uppercase tracking-widest font-light">Comptes liés</span>
<span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-mono">3 ACTIFS</span>
</div>
<div className="flex-1 overflow-hidden p-3 flex flex-col gap-2">
<div className="p-2.5 rounded-lg border border-white/5 bg-white/[0.03] flex items-center justify-between cursor-pointer group/item shadow-sm">
<div className="flex items-center gap-3">
<div className="relative">
<div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-pulse"></div>
<div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)] relative z-10"></div>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-xs text-stone-200 font-light group-hover/item:text-emerald-400 transition-colors">Stripe Payments</span>
<span className="text-xs text-stone-500 font-mono">En ligne</span>
</div>
</div>
<iconify-icon className="text-emerald-400/70" icon="solar:card-send-linear"></iconify-icon>
</div>
<div className="p-2.5 rounded-lg border border-transparent hover:border-white/5 hover:bg-white/[0.02] flex items-center justify-between cursor-pointer transition-colors group/item">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
<div className="flex flex-col gap-0.5">
<span className="text-xs text-stone-400 font-light group-hover/item:text-emerald-400 transition-colors">Boutique Shopify</span>
<span className="text-xs text-stone-600 font-mono">Synchronisé</span>
</div>
</div>
<iconify-icon className="text-stone-600" icon="solar:shop-linear"></iconify-icon>
</div>
<div className="p-2.5 rounded-lg border border-transparent hover:border-white/5 hover:bg-white/[0.02] flex items-center justify-between cursor-pointer transition-colors group/item">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_5px_rgba(245,158,11,0.5)]"></div>
<div className="flex flex-col gap-0.5">
<span className="text-xs text-stone-400 font-light group-hover/item:text-amber-400 transition-colors">Compte Qonto</span>
<span className="text-xs text-stone-600 font-mono">Mise à jour</span>
</div>
</div>
<iconify-icon className="text-stone-600" icon="solar:banknotes-linear"></iconify-icon>
</div>
</div>
</div>
<div className="w-full md:w-[55%] flex flex-col relative z-10">
<div className="flex p-4 border-b border-white/5 gap-4 bg-stone-900/20">
<div className="flex-1 flex flex-col gap-1.5">
<span className="text-xs text-stone-500 uppercase tracking-widest font-light">Chiffre d'Affaires</span>
<div className="flex items-end gap-1.5">
<span className="text-2xl text-white font-normal tracking-tight leading-none">24.8k</span>
<span className="text-xs text-emerald-400 font-mono mb-0.5">€</span>
</div>
</div>
<div className="w-px bg-white/5"></div>
<div className="flex-1 flex flex-col gap-1.5">
<span className="text-xs text-stone-500 uppercase tracking-widest font-light">Croissance</span>
<div className="flex items-end gap-2">
<span className="text-2xl text-white font-normal tracking-tight leading-none">+15<span className="text-sm text-stone-500 font-light">%</span></span>
<span className="text-xs text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-1 py-0.5 rounded font-light mb-1">HAUSSE</span>
</div>
</div>
</div>
<div className="p-4 flex-1 flex flex-col justify-end relative overflow-hidden min-h-[140px]">
<div className="absolute inset-x-0 bottom-4 top-4 flex flex-col justify-between opacity-10 pointer-events-none">
<div className="border-b border-dashed border-white"></div>
<div className="border-b border-dashed border-white"></div>
<div className="border-b border-dashed border-white"></div>
</div>
<div className="absolute inset-0 top-6 bottom-4 px-4 pointer-events-none">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 200 60">
<defs>
<lineargradient id="revenueGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10B981" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#10B981" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,50 C10,48 20,20 30,25 C40,30 50,15 60,20 C70,25 80,45 90,40 C100,35 110,10 120,15 C130,20 140,55 150,50 C160,45 170,20 180,25 C190,30 195,15 200,10 L200,60 L0,60 Z" fill="url(#revenueGradient)"></path>
<path d="M0,50 C10,48 20,20 30,25 C40,30 50,15 60,20 C70,25 80,45 90,40 C100,35 110,10 120,15 C130,20 140,55 150,50 C160,45 170,20 180,25 C190,30 195,15 200,10" fill="none" stroke="#10B981" strokeLinecap="round" strokeWidth="1.5"></path>
<circle className="shadow-[0_0_8px_rgba(16,185,129,0.8)]" cx="120" cy="15" fill="#10B981" r="2.5"></circle>
<circle className="shadow-[0_0_8px_rgba(16,185,129,0.8)]" cx="200" cy="10" fill="#10B981" r="2.5"></circle>
</svg>
</div>
</div>
<div className="h-10 border-t border-white/5 px-4 flex items-center justify-between bg-white/[0.01]">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
<span className="text-xs text-stone-400 truncate font-light">Paiement reçu : Facture F-2024-89</span>
</div>
<span className="text-xs text-stone-600 font-mono">À l'instant</span>
</div>
</div>
</div>
</div>

<div className="bg-stone-900/80 border border-stone-800/80 rounded-[2rem] p-6 flex flex-col gap-6 relative overflow-hidden group hover:border-stone-700/80 transition-colors">
<div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>
<div className="relative z-10">
<h3 className="text-lg font-normal tracking-tight text-white">Radar de Transactions</h3>
<p className="text-sm text-stone-400 font-light mt-1 max-w-md">Analysez vos encaissements et les mouvements de vos comptes bancaires en direct.</p>
</div>
<div className="flex-1 bg-stone-950/80 border border-white/5 rounded-2xl overflow-hidden flex flex-col md:flex-row relative shadow-[0_4px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
<div className="w-full md:w-[45%] border-b md:border-b-0 md:border-r border-white/5 flex items-center justify-center relative p-8 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.03)_0%,transparent_70%)]">
<span className="absolute top-4 left-4 text-xs text-stone-500 font-mono tracking-widest border border-white/5 bg-white/[0.02] px-1.5 py-0.5 rounded">BANK_SYNC::ACTIVE</span>
<div className="relative w-36 h-36">
<div className="absolute inset-0 border border-white/5 rounded-full"></div>
<div className="absolute inset-[18%] border border-white/5 rounded-full"></div>
<div className="absolute inset-[36%] border border-white/10 rounded-full"></div>
<div className="absolute inset-[54%] border border-cyan-500/20 rounded-full bg-cyan-500/5"></div>
<div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/5 -translate-x-1/2"></div>
<div className="absolute left-0 right-0 top-1/2 h-px bg-white/5 -translate-y-1/2"></div>
<div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></div>
<div className="absolute top-[20%] right-[25%] w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
<div className="absolute bottom-[28%] left-[18%] w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]">
<div className="absolute inset-0 rounded-full border border-red-500 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
</div>
<div className="absolute top-[65%] right-[20%] w-1 h-1 bg-emerald-400 rounded-full opacity-60"></div>
<div className="absolute inset-0 rounded-full border-r border-cyan-400/50 animate-[spin_3s_linear_infinite]" style={{background: 'conic-gradient(from 0deg, transparent 60%, rgba(34,211,238,0.15) 100%)', mixBlendMode: 'screen'}}></div>
</div>
</div>
<div className="w-full md:w-[55%] flex flex-col bg-stone-900/20">
<div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
<span className="text-xs text-stone-500 uppercase tracking-widest font-light">Événements</span>
<span className="text-xs text-red-400 font-mono bg-red-500/10 border border-red-500/20 px-1.5 py-0.5 rounded">1 ALERTE</span>
</div>
<div className="flex-1 overflow-hidden p-3 flex flex-col gap-2 relative z-10">
<div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20 flex flex-col gap-2 relative shadow-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.8)]"></div>
<span className="text-xs text-red-400 font-light">Paiement échoué</span>
</div>
<span className="text-xs text-stone-500 font-mono">il y a 2m</span>
</div>
<span className="text-xs text-stone-400 font-light truncate">Fonds insuffisants pour la facture #142</span>
</div>
<div className="p-3 rounded-lg bg-emerald-500/[0.03] border border-emerald-500/10 flex flex-col gap-2 relative hover:border-emerald-500/20 transition-colors">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
<span className="text-xs text-emerald-400 font-light">Nouveau client</span>
</div>
<span className="text-xs text-stone-500 font-mono">il y a 5m</span>
</div>
<span className="text-xs text-stone-400 font-light truncate">Abonnement validé via Stripe</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

<div className="bg-stone-900/80 border border-stone-800/80 rounded-2xl p-5 relative overflow-hidden group hover:border-stone-700/80 transition-colors">
<div className="flex items-center justify-between mb-5">
<span className="text-xs text-stone-500 uppercase tracking-widest font-light">Automatisations</span>
<iconify-icon className="text-stone-500 text-lg group-hover:text-stone-400 transition-colors" icon="solar:settings-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center flex-shrink-0 z-10 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
<iconify-icon className="text-cyan-400" icon="solar:document-medicine-linear"></iconify-icon>
</div>
<div className="h-px bg-white/10 flex-1 relative overflow-hidden">
<div className="absolute inset-0 bg-cyan-500/50 w-full animate-pulse"></div>
</div>
<div className="w-7 h-7 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center flex-shrink-0 z-10 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
<iconify-icon className="text-emerald-400" icon="solar:letter-opened-linear"></iconify-icon>
</div>
</div>
<div className="flex justify-between text-xs text-stone-500 font-mono uppercase">
<span>Si Impayé</span>
<span>Auto-Relance</span>
</div>
<div className="pt-2 border-t border-white/5 text-xs text-stone-400 font-light leading-relaxed">
                            Règle active. 14 factures relancées automatiquement cette semaine. Gain de temps: ~3h.
                        </div>
</div>
</div>

<div className="bg-stone-900/80 border border-stone-800/80 rounded-2xl p-5 relative overflow-hidden group hover:border-stone-700/80 transition-colors">
<div className="flex items-center justify-between mb-5">
<span className="text-xs text-stone-500 uppercase tracking-widest font-light">Journal CRM</span>
<iconify-icon className="text-stone-500 text-lg group-hover:text-stone-400 transition-colors" icon="solar:history-linear"></iconify-icon>
</div>
<div className="relative pl-3.5 flex flex-col gap-4 mt-1">
<div className="absolute left-[3px] top-1.5 bottom-1.5 w-px bg-white/10"></div>
<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[18px] top-1.5 w-2 h-2 rounded-full bg-emerald-500 border-2 border-stone-900 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
<span className="text-xs text-stone-300 font-light">Devis #42 signé par StudioX</span>
<span className="text-xs text-stone-500 font-mono">10:42 AM</span>
</div>
<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[18px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 border-2 border-stone-900"></div>
<span className="text-xs text-stone-300 font-light">Nouveau lead ajouté (Web)</span>
<span className="text-xs text-stone-500 font-mono">09:15 AM</span>
</div>
<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[18px] top-1.5 w-2 h-2 rounded-full bg-stone-500 border-2 border-stone-900"></div>
<span className="text-xs text-stone-500 font-light">Rappel visio avec Thomas G.</span>
<span className="text-xs text-stone-600 font-mono">02:00 PM</span>
</div>
</div>
</div>

<div className="bg-stone-900/80 border border-stone-800/80 rounded-2xl p-5 relative overflow-hidden group hover:border-stone-700/80 transition-colors">
<div className="flex items-center justify-between mb-5">
<span className="text-xs text-stone-500 uppercase tracking-widest font-light">Santé Financière</span>
<iconify-icon className="text-stone-500 text-lg group-hover:text-stone-400 transition-colors" icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
<div className="flex items-center gap-5 mt-2">
<div className="w-14 h-14 relative flex-shrink-0">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
<circle cx="18" cy="18" fill="none" r="16" stroke="rgba(255,255,255,0.05)" strokeWidth="3"></circle>
<circle className="drop-shadow-[0_0_4px_rgba(16,185,129,0.5)]" cx="18" cy="18" fill="none" r="16" stroke="#10B981" stroke-dasharray="100" stroke-dashoffset="15" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-base font-normal text-white tracking-tight leading-none mt-0.5">85</span>
<span className="text-xs text-emerald-400 font-normal tracking-wide mt-0.5 scale-75">SCORE</span>
</div>
</div>
<div className="flex-1 flex flex-col gap-3">
<div className="flex flex-col gap-1.5">
<div className="flex justify-between text-xs font-mono text-stone-400">
<span>Trésorerie</span>
<span className="text-emerald-400">Stable</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 w-[70%] rounded-full shadow-[0_0_5px_rgba(16,185,129,0.3)]"></div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex justify-between text-xs font-mono text-stone-400">
<span>Ratio Dépenses</span>
<span className="text-amber-400">32%</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-amber-400 w-[32%] rounded-full shadow-[0_0_5px_rgba(245,158,11,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F4F0] border-stone-200 border-t pt-32 pb-32">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 js-reveal transition-all duration-1000 ease-out">
<div className="max-w-xl">
<h2 className="font-['Oswald'] text-4xl md:text-5xl font-normal uppercase tracking-tighter text-stone-900 mb-4 leading-none">
                        Plus Qu'un Outil.<br/>Un Écosystème.
                    </h2>
<p className="text-lg text-stone-500 font-light">
                        Klark donne accès à des avantages exclusifs pensés pour accélérer la croissance des entrepreneurs.
                    </p>
</div>
<a className="inline-flex items-center gap-2 uppercase hover:text-stone-900 hover:border-stone-900 transition-colors whitespace-nowrap text-xs font-normal text-stone-600 tracking-widest border-stone-400 border-b pb-1" href="https://klark.app/privileges">
                    Découvrir les privilèges
                    <iconify-icon height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/50 hover:border-[#B08D6A]/30 group js-reveal ease-out">
<div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center border border-stone-100 mb-6 text-[#8E7B68] group-hover:bg-[#B08D6A]/10 group-hover:border-[#B08D6A]/20 transition-colors">
<iconify-icon height="24" icon="solar:sale-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-stone-900 mb-2">Réductions SaaS</h3>
<p className="text-sm font-light text-stone-500 leading-relaxed">Accédez à des offres négociées sur les meilleurs outils du marché pour réduire vos coûts.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/50 hover:border-[#B08D6A]/30 group js-reveal ease-out delay-150">
<div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center border border-stone-100 mb-6 text-[#8E7B68] group-hover:bg-[#B08D6A]/10 group-hover:border-[#B08D6A]/20 transition-colors">
<iconify-icon className="" height="24" icon="solar:hand-shake-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-stone-900 mb-2">Partenariats</h3>
<p className="text-sm font-light text-stone-500 leading-relaxed">Mettez-vous en relation avec un réseau de partenaires fiables pour développer votre activité.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/50 hover:border-[#B08D6A]/30 group js-reveal ease-out delay-300">
<div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center border border-stone-100 mb-6 text-[#8E7B68] group-hover:bg-[#B08D6A]/10 group-hover:border-[#B08D6A]/20 transition-colors">
<iconify-icon height="24" icon="solar:library-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-stone-900 mb-2">Ressources</h3>
<p className="leading-relaxed text-sm font-light text-stone-500">Templates de contrats exclusifs créés par des experts pour vous accompagner.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F5F4F0] text-stone-900 border-t border-stone-200 relative z-10" id="pricing" style={{backgroundImage: 'radial-gradient(#d6d3d1 1px, transparent 1px)', backgroundSize: '40px 40px', backgroundPosition: 'center center'}}>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20 js-reveal transition-all duration-1000 ease-out">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B08D6A]/20 bg-[#B08D6A]/5 text-[#8E7B68] text-xs font-normal tracking-wide uppercase shadow-sm backdrop-blur-md mb-8">
<iconify-icon className="text-base" icon="solar:pie-chart-2-linear"></iconify-icon>
                    Modèle Transparent
                </div>
<h2 className="font-['Oswald'] text-4xl md:text-5xl lg:text-6xl font-normal uppercase tracking-tighter text-stone-900 mb-6 leading-none">
                    Des Tarifs Simples.<br/>Sans Mauvaises Surprises.
                </h2>
<p className="text-base md:text-lg text-stone-500 font-light max-w-2xl mx-auto">
                    Choisissez le plan qui correspond au stade de votre entreprise et libérez tout le potentiel de Klark.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">

<div className="bg-white/80 backdrop-blur-sm border border-stone-200 rounded-3xl p-8 sm:p-12 flex flex-col relative js-reveal ease-out delay-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/50 hover:border-[#B08D6A]/30">
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-stone-50 text-[#8E7B68] border border-stone-100 mb-6">
<iconify-icon className="text-2xl" icon="solar:shield-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-stone-900 mb-2">Mensuel</h3>
<p className="text-sm text-stone-500 font-light mb-6">Facturé tous les mois</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-normal tracking-tight text-stone-900">49,99 €</span>
<span className="text-sm text-stone-500 font-light">/ Mois HT</span>
</div>
<ul className="flex-1 flex flex-col gap-4 text-sm font-light text-stone-600 mb-10">
<li className="flex items-start gap-3"><iconify-icon className="text-[#B08D6A] shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> Agrégation de tous vos comptes</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#B08D6A] shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> CRM minimaliste et efficace</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#B08D6A] shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> Accès aux nouveaux outils</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#B08D6A] shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> Accès aux réductions et partenaires</li>
</ul>
<button className="uppercase hover:bg-stone-50 hover:border-stone-300 transition-all duration-200 text-sm font-normal text-stone-700 tracking-widest bg-white w-full border-stone-200 border rounded-full pt-3.5 pb-3.5 shadow-sm cursor-pointer" onclick="window.location.href='https://beta.klark.app/login'" role="button">
                        S'abonner
                    </button>
</div>

<div className="relative flex flex-col transition-all duration-300 hover:-translate-y-1 js-reveal ease-out delay-200">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#B08D6A]/10 blur-[80px] rounded-full pointer-events-none z-0"></div>
<div className="bg-white rounded-3xl p-8 sm:p-12 flex flex-col relative z-10 flex-1 border border-[#B08D6A]/30 shadow-xl shadow-[#B08D6A]/10 ring-1 ring-[#B08D6A]/10">
<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B08D6A] text-white text-xs px-4 py-1.5 rounded-full font-normal tracking-wide shadow-md flex items-center gap-2 whitespace-nowrap">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
</span>
                            -55% Offre exclusive !
                        </div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#B08D6A] border border-[#8E7B68] shadow-inner">
<iconify-icon className="text-white text-2xl drop-shadow-sm" icon="solar:bolt-linear"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-2">
<h3 className="text-xl font-normal tracking-tight text-stone-900">Annuel</h3>
<span className="inline-flex items-center px-2 py-0.5 rounded bg-[#B08D6A]/10 text-xs font-mono text-[#B08D6A] uppercase border border-[#B08D6A]/20">Early access</span>
</div>
<p className="text-sm text-[#8E7B68] font-light mb-6">189€ Facturé annuellement</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-normal tracking-tight text-stone-900">15,75 €</span>
<span className="text-sm text-stone-500 font-light">/ Mois HT</span>
</div>
<ul className="flex-1 flex flex-col gap-4 text-sm font-light text-stone-600 mb-10">
<li className="flex items-start gap-3"><iconify-icon className="text-[#B08D6A] shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> Agrégation de tous vos comptes</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#B08D6A] shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> CRM minimaliste et efficace</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#B08D6A] shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> Accès aux nouveaux outils</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#B08D6A] shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> Accès aux réductions et partenaires</li>
</ul>
<button className="uppercase hover:bg-stone-800 transition-all duration-200 text-sm font-normal text-white tracking-widest bg-stone-900 w-full rounded-full pt-3.5 pb-3.5 shadow-md cursor-pointer" onclick="window.location.href='https://beta.klark.app/login'" role="button">
                            J'en profite !
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="z-20 bg-stone-950 border-white/5 border-t pt-32 pb-32 relative">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(176,141,106,0.05),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.02),transparent_22%)]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<h2 className="font-['Oswald'] text-4xl md:text-5xl lg:text-6xl font-normal uppercase tracking-tighter text-white mb-20 leading-none js-reveal ease-out delay-100">
                Moins De Gestion.<br/>Plus De Croissance.
            </h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 text-left">
<div className="bg-stone-900/80 border border-stone-800/80 rounded-[2rem] p-8 flex flex-col hover:border-stone-700/80 transition-colors shadow-lg shadow-black/20 group js-reveal ease-out delay-[100ms]">
<div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-stone-300 mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon height="28" icon="solar:clock-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-white font-['Oswald'] uppercase mb-3">Gagner du temps</h3>
<p className="text-sm font-light leading-relaxed text-stone-400">Automatisez les tâches répétitives et concentrez-vous sur ce qui compte vraiment : vos clients.</p>
</div>
<div className="bg-stone-900/80 border border-stone-800/80 rounded-[2rem] p-8 flex flex-col hover:border-stone-700/80 transition-colors shadow-lg shadow-black/20 group js-reveal ease-out delay-[200ms]">
<div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-stone-300 mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon height="28" icon="solar:minimize-square-3-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-white font-['Oswald'] uppercase mb-3">Simplifier</h3>
<p className="text-sm font-light leading-relaxed text-stone-400">Fini les allers-retours entre 10 applications. Retrouvez tout votre business au même endroit.</p>
</div>
<div className="bg-stone-900/80 border border-stone-800/80 rounded-[2rem] p-8 flex flex-col hover:border-stone-700/80 transition-colors shadow-lg shadow-black/20 group js-reveal ease-out delay-[300ms]">
<div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-stone-300 mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon className="" height="28" icon="solar:gamepad-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-white font-['Oswald'] uppercase mb-3">Contrôler</h3>
<p className="text-sm font-light leading-relaxed text-stone-400">Gardez un œil sur votre trésorerie, vos impayés et vos marges avec une précision chirurgicale.</p>
</div>
<div className="bg-stone-900/80 border border-stone-800/80 rounded-[2rem] p-8 flex flex-col hover:border-stone-700/80 transition-colors shadow-lg shadow-black/20 group js-reveal ease-out delay-[400ms]">
<div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-stone-300 mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon height="28" icon="solar:rocket-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-white font-['Oswald'] uppercase mb-3">Développer</h3>
<p className="text-sm font-light leading-relaxed text-stone-400">Utilisez des données claires pour prendre les bonnes décisions et faire décoller votre chiffre d'affaires.</p>
</div>
</div>
<a className="inline-flex items-center justify-center gap-2 hover:bg-stone-200 transition-all duration-300 uppercase js-reveal ease-out delay-[500ms] text-xs font-normal text-stone-900 tracking-widest bg-white h-12 rounded-full pr-8 pl-8" href="https://beta.klark.app/login">
                Commencer avec Klark
            </a>
</div>
</section>

<section className="overflow-hidden text-stone-300 bg-stone-950 z-20 border-white/5 border-t relative" id="contact">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.03),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.03),transparent_22%)]"></div>
</div>
<div className="md:px-12 sm:pt-24 lg:pt-32 sm:pb-12 lg:pb-16 js-reveal ease-out max-w-[85rem] mr-auto ml-auto pt-16 pr-6 pb-8 pl-6 relative">
<div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-16 rounded-[2rem]">
<div className="grid lg:grid-cols-[0.4fr_1fr] gap-10 lg:gap-16 items-end text-left">
<div className="">
<div className="inline-flex gap-3 uppercase text-xs text-stone-400 tracking-widest mb-6 gap-x-3 gap-y-3 items-center">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.8)]"></span>
                            Initiate Protocol
                        </div>
<p className="max-w-[15rem] text-xs leading-relaxed text-stone-400 font-light">
                            Prenez le contrôle de votre activité dès aujourd'hui. Une seule interface pour piloter l'ensemble de vos opérations.
                        </p>
</div>
<div className="">
<h2 className="font-['Oswald'] text-white tracking-tighter leading-none text-4xl sm:text-5xl md:text-6xl max-w-xl uppercase">
<span className="block text-stone-400">Votre Business Mérite</span>
<span className="block">Plus De <span className="text-white">Clarté</span>.</span>
</h2>
<div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="inline-flex items-center justify-center gap-2 hover:bg-stone-200 transition-all duration-300 uppercase text-xs font-normal text-stone-900 tracking-widest bg-white h-12 rounded-full pr-6 pl-6" href="https://beta.klark.app/login">
                                Créer mon compte
                                <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 hover:bg-stone-800 hover:text-white transition-colors duration-300 uppercase text-xs font-normal text-stone-300 tracking-widest bg-stone-900 h-12 border-stone-700 border rounded-full pr-6 pl-6" href="https://klark.app/?r=0">
                                Essayer Klark
                            </a>
</div>
</div>
</div>
</div>
<div className="pt-12 sm:pt-16 lg:pt-20">
<div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<a className="uppercase text-xl font-normal text-white tracking-widest font-['Oswald'] inline-flex items-center" href="#">
<svg className="h-5 w-auto" fill="none" stroke="currentColor" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="4" viewbox="0 0 500 100">
<path d="M 10,15 L 45,50 L 10,85"></path>
<path d="M 65,15 L 65,85"></path>
<path d="M 120,15 L 120,85 L 170,85"></path>
<path d="M 220,85 L 255,15 L 290,85 M 230,65 L 280,65"></path>
<path d="M 340,15 L 340,85 M 340,15 H 370 A 20 20 0 0 1 370 55 H 340 M 360,55 L 390,85"></path>
<path d="M 440,15 L 440,85 M 490,15 L 440,50 L 490,85"></path>
</svg>
</a>
<p className="uppercase text-xs font-light text-stone-500 tracking-widest">© 2026 Klark. Tous droits réservés.</p>
<div className="flex items-center gap-4 sm:gap-6">
<a className="uppercase hover:text-white transition-colors text-xs font-light text-stone-500 tracking-widest" href="https://klark.app/politique-de-confidentialite">Confidentialité</a>
<a className="uppercase hover:text-white transition-colors text-xs font-light text-stone-500 tracking-widest" href="https://klark.app/cgu-cgv">CGV</a>
</div>
</div>
</div>
</div>
</section>



    </>
  );
}
