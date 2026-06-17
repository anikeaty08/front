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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-slate-100/50">
</nav>

<section className="overflow-hidden lg:pt-48 lg:pb-32 md:pb-2 md:pt-20 pt-32 pb-20 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-100/40 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-50/40 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none"></div>
<div className="text-center max-w-4xl mr-auto ml-auto pr-6 pl-6">
<h1 className="flex justify-center items-center w-full mb-8">
<svg className="md:h-52 hover:scale-105 transition-transform duration-500 ease-out drop-shadow-2xl w-[200px] h-[140px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{width: '200px', height: '140px', color: 'rgb(15, 23, 42)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="logo-gradient-aura" x1="2" x2="22" y1="22" y2="2">
<stop offset="0%" stop-color="#ffffff"></stop>
<stop offset="100%" stop-color="#f97316"></stop>
</lineargradient>
<filter height="140%" id="logo-glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="1.5"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>

<path className="" d="M12 2L2.5 21L12 16.5L21.5 21L12 2Z" fill="url(#logo-gradient-aura)" stroke="#f97316" strokeLinejoin="round" strokeWidth="1"></path>
<path className="" d="M12 2L12 16.5" stroke="rgba(249,115,22,0.3)" strokeLinecap="round" strokeWidth="1"></path>
</svg>
<span className="sr-only">Force Intérieure</span>
</h1><h1 className="leading-[1.1] lg:text-7xl md:text-6xl md:text-slate-900 text-5xl font-bold tracking-tight">Force<br/> <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#000000] to-gray-600">Intérieure.</span></h1><div className="flex justify-center w-full mb-12 relative z-10">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-orange-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
</div>
</div>
<p className="lg:text-xl leading-relaxed text-lg text-slate-500 max-w-2xl mr-auto mb-12 ml-auto">Une parole quotidienne qui te donne de la force. De la force pour aimer. De la force pour réussir.</p>
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
<a className="sm:w-auto flex items-center justify-center gap-2 transition-all hover:shadow-xl hover:shadow-violet-500/30 hover:opacity-90 text-sm font-medium text-white bg-gradient-to-br from-orange-400 to-[#ad2b00] w-full rounded-full px-8 py-4" href="#join">
<iconify-icon className="" icon="solar:play-circle-linear" width="20"></iconify-icon>
                    Je Rejoins le Flux Quotidien
                </a>
<a className="sm:w-auto hover:border-slate-300 transition-all flex items-center justify-center gap-2 text-sm font-medium text-slate-600 bg-white w-full border-slate-200 border rounded-full pt-4 pr-8 pb-4 pl-8" href="/#debut">
                    Lire le manifeste
                    <iconify-icon className="" height="18" icon="solar:arrow-down-linear" style={{color: 'rgb(71, 85, 105)'}} width="18"></iconify-icon>
</a>
</div>

<div className="text-left bg-white/50 max-w-2xl border-slate-100 border rounded-3xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm" id="debut">
<p className="leading-relaxed text-slate-700">Si tu veux plus de force ou que tu en manques et que cela se traduit par :</p>
</div>
</div>
</section>

<section className="overflow-hidden text-slate-50 bg-slate-900 pt-24 pb-24 relative" id="douleurs">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-900/20 rounded-full blur-3xl -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mr-auto ml-auto pr-6 pl-6 gap-x-8 gap-y-8">

<div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
<div className="w-12 h-12 rounded-xl bg-slate-700/50 text-orange-400 flex items-center justify-center mb-6">
<iconify-icon icon="solar:forbidden-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="leading-snug text-lg font-semibold text-white tracking-tight mb-4" style={{}}>De la frustration</h3><h3 className="leading-snug text-lg font-semibold text-white tracking-tight mb-4">"Je sais que je peux faire quelque chose de grand... mais je ne me sens pas assez fort.e."</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                    Pas assez d'énergie. Pas assez légitime. Pas assez autorisé.e.<br/>
                    Tu vois la vision. Tu sens le potentiel. Mais entre toi et ce que tu pourrais accomplir, il y a ce mur invisible.<br/>
                    Ce doute qui murmure : "Qui es-tu pour faire ça ?"
                </p>
</div>

<div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
<div className="w-12 h-12 rounded-xl bg-slate-700/50 text-violet-400 flex items-center justify-center mb-6">
<iconify-icon className="" icon="solar:graph-down-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="leading-snug text-lg font-semibold text-white tracking-tight mb-4" style={{}}>Un brin de démotivation</h3><h3 className="leading-snug text-lg font-semibold text-white tracking-tight mb-4">"J'ai déjà été performant.e avant... Pourquoi je suis dans ce coup de mou ?"</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                    Tu te souviens de cette période où tu étais au top. Où tu progressais. Où tu gagnais. Où tu te sentais invulnérable.<br/>
                    Et maintenant ? Tu es dans le brouillard. La motivation est en berne. L'élan est cassé.<br/>
                    Et tu te demandes : "Est-ce que je vais retrouver cette force ?"
                </p>
</div>

<div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
<div className="w-12 h-12 rounded-xl bg-slate-700/50 text-blue-400 flex items-center justify-center mb-6">
<iconify-icon className="" icon="solar:global-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="leading-snug text-lg font-semibold text-white tracking-tight mb-4">Une anxiété pour demain</h3><h3 className="leading-snug text-lg font-semibold text-white tracking-tight mb-4">"Le monde devient de plus en plus complexe... et je ne sais pas comment faire face."</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                    L'économie incertaine. Les changements constants. La pression qui monte.<br/>
                    Tu cherches des solutions à l'extérieur : nouvelles stratégies, nouveaux outils, nouvelles formations.<br/>
                    Mais au fond, tu le sais : le problème n'est pas dehors.
                </p>
</div>
</div>

<div className="text-center max-w-3xl mt-20 mr-auto ml-auto pr-6 pl-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 text-white">Si tu t'es reconnu.e dans l'une de ces situations...</h2>
<p className="text-xl text-violet-200 mb-8 font-medium">Tu es au bon endroit.</p>
<p className="leading-relaxed text-lg text-slate-400 mb-8" style={{}}>Parce que ce qui va suivre n'est pas une technique de plus. Pas une stratégie externe. Pas une formation pour "booster ton business ou rendre les autres jaloux de ta vie".</p>
<p className="text-white text-lg font-medium">
                C'est quelque chose de plus fondamental.
                Un accompagnement quotidien pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-orange-400">cultiver la force intérieure</span> qui change tout.
            </p>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24 relative">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Deviens Plus Fort.e. De l'Intérieur.</h2>
<p className="text-xl font-medium text-violet-600">Un flux quotidien de paroles vraies.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 flex relative justify-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-violet-200/40 to-orange-100/40 rounded-full blur-3xl -z-10"></div>

<div className="md:w-[320px] border-[10px] overflow-hidden select-none transform hover:rotate-0 transition-transform duration-500 ease-out z-10 bg-slate-900 w-[290px] h-[640px] border-slate-900 ring-slate-900/5 ring-1 rounded-[3rem] mr-auto ml-auto relative shadow-2xl rotate-[-2deg]">

<div className="absolute top-0 inset-x-0 h-7 bg-slate-900 z-30 flex justify-center">
<div className="w-32 h-6 bg-slate-900 rounded-b-2xl"></div>
</div>

<div className="w-full h-full bg-[#879bb5] relative flex flex-col font-sans overflow-hidden">

<div className="absolute inset-0 bg-[#7d8b9e]" style={{backgroundImage: 'radial-gradient(#6c7a8f 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: '0.3'}}></div>

<div className="flex gap-3 z-20 bg-white/95 border-slate-200/50 border-b pt-10 pr-4 pb-3 pl-4 shadow-sm backdrop-blur-md gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-slate-500 text-xl cursor-pointer" icon="solar:arrow-left-linear"></iconify-icon>

<div className="w-10 h-10 rounded-full bg-slate-100 p-0.5 shrink-0 overflow-hidden relative shadow-sm">
<div className="w-full h-full bg-white rounded-full flex items-center justify-center p-1.5">

<svg className="w-full h-full drop-shadow-sm" fill="none" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="logo-gradient-phone" x1="2" x2="22" y1="22" y2="2">
<stop offset="0%" stop-color="#7c3aed"></stop>
<stop offset="100%" stop-color="#f97316"></stop>
</lineargradient>
</defs>
<path d="M12 2L2.5 21L12 16.5L21.5 21L12 2Z" fill="url(#logo-gradient-phone)" stroke="white" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M12 2L12 16.5" stroke="rgba(255,255,255,0.4)" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-bold text-slate-900 text-sm truncate leading-tight">Force Intérieure</h3>
<p className="text-[11px] text-slate-500 truncate font-medium">137 abonnés</p>
</div>
<div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400">
<div className="w-8 h-8 rounded-full overflow-hidden">
<img className="w-full h-full opacity-50" src="https://api.iconify.design/solar:user-circle-bold.svg?color=%23cbd5e1"/>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-3 space-y-4 relative z-10 scrollbar-hide">

<div className="flex justify-center my-4 sticky top-2 z-10">
<span className="bg-slate-500/40 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-full font-medium shadow-sm">Aujourd'hui</span>
</div>

<div className="bg-white rounded-t-xl rounded-br-xl p-3 max-w-[85%] shadow-sm relative ml-0 mr-auto">
<p className="text-[13px] text-slate-800 leading-snug">
                        Bienvenue aux nouveaux ! 👋
                        Prêts pour le message de ce matin ?
                    </p>
<div className="flex justify-end items-center gap-1 mt-1">
<span className="text-[10px] text-slate-400">06:58</span>
</div>
</div>

<div className="bg-white rounded-t-xl rounded-br-xl p-2.5 max-w-[92%] shadow-md relative ml-0 mr-auto group">

<div className="flex items-center gap-3 pr-1">
<div className="w-11 h-11 rounded-full bg-violet-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-violet-500/20 cursor-pointer hover:scale-105 transition-transform">
<iconify-icon className="ml-0.5" icon="solar:play-bold" width="20"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5 flex-1 min-w-[140px]">

<div className="flex items-center gap-[2px] h-5 opacity-80">
<div className="w-[3px] h-2 bg-violet-300 rounded-full"></div>
<div className="w-[3px] h-4 bg-violet-600 rounded-full"></div>
<div className="w-[3px] h-3 bg-violet-400 rounded-full"></div>
<div className="w-[3px] h-5 bg-violet-600 rounded-full"></div>
<div className="w-[3px] h-2 bg-violet-300 rounded-full"></div>
<div className="w-[3px] h-4 bg-violet-500 rounded-full"></div>
<div className="w-[3px] h-3 bg-violet-400 rounded-full"></div>
<div className="w-[3px] h-1 bg-violet-200 rounded-full"></div>
<div className="w-[3px] h-2 bg-violet-300 rounded-full"></div>
<div className="w-[3px] h-4 bg-violet-600 rounded-full"></div>
<div className="w-[3px] h-2 bg-violet-300 rounded-full"></div>
<div className="w-[3px] h-3 bg-violet-500 rounded-full"></div>
<div className="w-[3px] h-5 bg-violet-600 rounded-full"></div>
<div className="w-[3px] h-2 bg-violet-300 rounded-full"></div>
<div className="w-[3px] h-4 bg-violet-500 rounded-full"></div>
<div className="w-[3px] h-3 bg-violet-400 rounded-full"></div>
<div className="w-[3px] h-1 bg-violet-200 rounded-full"></div>
<div className="w-[3px] h-2 bg-violet-300 rounded-full"></div>
<div className="w-[3px] h-4 bg-violet-600 rounded-full"></div>
</div>
<div className="flex text-[10px] font-medium text-slate-400 font-mono justify-between">
<span className="text-slate-800">03:42</span>
<span>07:15</span>
</div>
</div>
</div>

<div className="pt-3 px-1 pb-1">
<p className="text-[13px] text-slate-800 leading-snug">
                             🎙️
                            "Ta valeur ne dépend pas de ta productivité."
                            <span className="text-[11px] text-slate-500 mt-1 block italic">Une parole pour t'ancrer dans ta légitimité dès ce matin.</span>
</p>
</div>
<div className="flex justify-end items-center gap-1 mt-1 pr-1">
<span className="text-[10px] text-slate-400">07:02</span>
<iconify-icon className="text-violet-500 text-[10px]" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>

<div className="bg-white rounded-t-xl rounded-br-xl p-3 max-w-[85%] shadow-sm relative ml-0 mr-auto">
<p className="text-[13px] text-slate-800">
                        Merci pour vos cœurs ! ❤️On avance ensemble.
                    </p>
<div className="flex justify-end items-center gap-1 mt-1">
<span className="text-[10px] text-slate-400">09:15</span>
</div>
</div>
</div>

<div className="bg-white/95 backdrop-blur-md px-4 py-3 pb-6 border-t border-slate-200/50 flex flex-col items-center justify-center gap-2 z-20">
<div className="w-full h-10 bg-slate-100 rounded-lg flex items-center justify-center">
<span className="text-violet-600 text-xs font-bold uppercase tracking-widest">REJOINDRE LE CANAL</span>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<p className="leading-relaxed text-lg text-slate-600 mb-6">Chaque matin, un message audio court (3-7 minutes). Pas de conseils. Pas de techniques. Pas de "5 étapes pour réussir". Juste une parole humaine, d'âme à âme, déterminée à te donner de la force.</p>
<p className="text-slate-600 text-lg leading-relaxed mb-6">
                        Tantôt empathique et encourageante.
                        Tantôt exigeante et pleine d'espérance.
                    </p>
<div className="relative bg-slate-900 border border-slate-800 rounded-2xl mb-8 p-6 md:p-8 overflow-hidden group shadow-2xl shadow-violet-900/20">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-violet-600/30 blur-[80px] rounded-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<p className="text-white font-medium text-lg mb-6 flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-violet-300 ring-1 ring-inset ring-white/10 shadow-inner">
<svg className="lucide lucide-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg>
</span>
                                Une voix qui te rappelle :
                            </p>
<ul className="space-y-3">
<li className="flex gap-4 items-center group/item">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/10 text-green-400 ring-1 ring-green-500/20 shrink-0 group-hover/item:bg-green-500/20 transition-colors">
<svg className="lucide lucide-check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-slate-200 font-medium text-sm group-hover/item:text-white transition-colors">Que tu es légitime</span>
</li>
<li className="flex gap-4 items-center group/item">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/10 text-green-400 ring-1 ring-green-500/20 shrink-0 group-hover/item:bg-green-500/20 transition-colors">
<svg className="lucide lucide-check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-slate-200 font-medium text-sm group-hover/item:text-white transition-colors">Que tu es capable</span>
</li>
<li className="flex gap-4 items-center group/item">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/10 text-green-400 ring-1 ring-green-500/20 shrink-0 group-hover/item:bg-green-500/20 transition-colors">
<svg className="lucide lucide-check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-slate-200 font-medium text-sm group-hover/item:text-white transition-colors">Que tu as le droit d'oser plus grand</span>
</li>
</ul>
</div>
</div>
<p className="text-slate-900 font-semibold">
                        Une "pastille quotidienne" pour ta vie intérieure.
                    </p>
</div>
</div>

<div className="mt-20">
<h3 className="text-2xl font-bold text-center mb-10 text-slate-900">Parce que quand tu deviens plus fort.e intérieurement...</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
<iconify-icon className="text-orange-500 shrink-0 mt-1" icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
<span className="text-slate-700 text-sm">Cette sensation de "pas assez" se dissipe</span>
</div>
<div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
<iconify-icon className="text-violet-600 shrink-0 mt-1" icon="solar:rocket-2-linear" width="24"></iconify-icon>
<span className="text-slate-700 text-sm">Tu retrouves ton élan et ta fierté</span>
</div>
<div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
<iconify-icon className="text-blue-500 shrink-0 mt-1" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="text-slate-700 text-sm">Tu fais face aux incertitudes avec une paix profonde</span>
</div>
<div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
<iconify-icon className="text-yellow-500 shrink-0 mt-1" icon="solar:emoji-funny-circle-linear" width="24"></iconify-icon>
<span className="text-slate-700 text-sm">Tu crées les conditions de la joie au quotidien</span>
</div>
<div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
<iconify-icon className="text-red-500 shrink-0 mt-1" icon="solar:heart-linear" width="24"></iconify-icon>
<span className="text-slate-700 text-sm">Tu aimes pleinement ceux qui t'entourent</span>
</div>
<div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
<iconify-icon className="text-teal-500 shrink-0 mt-1" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<span className="text-slate-700 text-sm">Tu contribues authentiquement à la société humaine</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-slate-50 border-slate-200 pt-24 pb-24">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-12 text-center">Ce flux quotidien est pour toi si tu es :</h2>
<div className="space-y-6">
<div className="flex gap-5 items-start bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:target-bold"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-bold text-slate-900">Entrepreneur.e, coach, thérapeute, tindépendant.e, professionnel.le de la vente directe ou du marketing relationnel</h4>
<p className="text-slate-600 mt-1">Tu as choisi de faire une différence. Tu veux l'impact, pas juste le revenu.</p>
</div>
</div>
<div className="flex gap-5 items-start bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
<iconify-icon className="" icon="solar:dumbbell-large-bold"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-bold text-slate-900">Quelqu'un qui veut faire quelque chose de beau et de grand</h4>
<p className="text-slate-600 mt-1">Mais qui a besoin de consolider sa force intérieure pour y arriver.</p>
</div>
</div>
<div className="flex gap-5 items-start bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:flame-bold"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-bold text-slate-900" style={{}}>Quelqu'un qui a déjà accompli de belles choses</h4>
<p className="text-slate-600 mt-1">Et qui veut retrouver cet élan, cette fierté, cette progression.</p>
</div>
</div>
<div className="flex gap-5 items-start bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:map-point-wave-bold"></iconify-icon>
</div>
<div className="">
<h4 className="font-bold text-slate-900 text-lg">Quelqu'un qui fait face à l'incertitude</h4>
<p className="text-slate-600 mt-1">Et qui sait que la vraie réponse est de devenir plus fort.e pour traverser.</p>
</div>
</div>
<div className="flex gap-5 items-start bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:heart-angle-bold"></iconify-icon>
</div>
<div className="">
<h4 className="font-bold text-slate-900 text-lg">Spirituel.le ou concret.e, rationnel.le ou émotionnel.le</h4>
<p className="text-slate-600 mt-1">Peu importe. Si tu cherches à grandir en humanité, tu es le/la bienvenu.e.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="">
<h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:close-circle-bold"></iconify-icon>
                    Ce Que Tu Ne Vas PAS Recevoir
                </h3>
<ul className="space-y-4">
<li className="flex gap-3 text-slate-600">
<iconify-icon className="text-red-400 shrink-0 mt-1" icon="solar:close-square-linear"></iconify-icon>
                        Des techniques marketing pour "scaler ton business"
                    </li>
<li className="flex gap-3 text-slate-600">
<iconify-icon className="text-red-400 shrink-0 mt-1" icon="solar:close-square-linear"></iconify-icon>
                        Des formules magiques pour réussir en 7 jours
                    </li>
<li className="flex gap-3 text-slate-600">
<iconify-icon className="text-red-400 shrink-0 mt-1" icon="solar:close-square-linear"></iconify-icon>
                        Un programme structuré avec modules et étapes
                    </li>
</ul>
</div>

<div className="bg-violet-50/50 p-8 rounded-3xl border border-violet-100">
<h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon>
                    Ce Que Tu VAS Recevoir
                </h3>
<ul className="space-y-6">
<li className="flex gap-3">
<iconify-icon className="text-violet-600 shrink-0 mt-1" icon="solar:check-square-bold"></iconify-icon>
<div className="">
<span className="text-slate-600 text-sm">Chaque matin, une parole qui t'ancre dans ta force.</span>
</div>
</li>
<li className="flex gap-3">
<iconify-icon className="text-violet-600 shrink-0 mt-1" icon="solar:check-square-bold"></iconify-icon>
<div className="">
<span className="text-slate-600 text-sm">À oser. À grandir. À prendre ta place légitime.</span>
</div>
</li>
<li className="flex gap-3">
<iconify-icon className="text-violet-600 shrink-0 mt-1" icon="solar:check-square-bold"></iconify-icon>
<div className="">
<span className="text-sm text-slate-600" style={{}}>Entre l'amour profond de Dieu et ton humanité concrète.</span>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-bold tracking-tight mb-16 text-center">Comment Ça Marche ?</h2>
<div className="relative space-y-12">

<div className="absolute left-6 top-6 bottom-6 w-px bg-slate-800 md:left-1/2 md:-ml-px"></div>

<div className="relative flex md:items-center gap-8 md:flex-row flex-col">
<div className="md:w-1/2 md:text-right order-2 md:order-1 pl-16 md:pl-0 md:pr-12">
<h4 className="text-xl font-bold mb-2">1. Tu Rejoins le Groupe Telegram Privé</h4>
<p className="text-slate-400 text-sm">Un espace dédié, intime, protégé.</p>
</div>
<div className="absolute left-0 top-0 md:relative md:top-auto md:left-auto w-12 h-12 rounded-full bg-violet-600 border-4 border-slate-900 flex items-center justify-center font-bold z-10 order-1 md:order-2 shrink-0">1</div>
<div className="md:w-1/2 order-3 pl-16 md:pl-12 md:hidden"></div>
</div>

<div className="relative flex md:items-center gap-8 md:flex-row flex-col">
<div className="md:w-1/2 md:hidden"></div>
<div className="absolute left-0 top-0 md:relative md:top-auto md:left-auto w-12 h-12 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center font-bold z-10 shrink-0">2</div>
<div className="md:w-1/2 pl-16 md:pl-12">
<h4 className="text-xl font-bold mb-2">2. Chaque Matin, Tu Reçois un Message Audio</h4>
<p className="text-slate-400 text-sm">Court (3-7 minutes). Profond. Authentique.</p>
</div>
</div>

<div className="relative flex md:items-center gap-8 md:flex-row flex-col">
<div className="md:w-1/2 md:text-right order-2 md:order-1 pl-16 md:pl-0 md:pr-12">
<h4 className="text-xl font-bold mb-2">3. Tu Écoutes Quand Tu Veux</h4>
<p className="text-slate-400 text-sm">Au réveil, dans les transports, pendant ton café.</p>
</div>
<div className="absolute left-0 top-0 md:relative md:top-auto md:left-auto w-12 h-12 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center font-bold z-10 order-1 md:order-2 shrink-0">3</div>
<div className="md:w-1/2 order-3 md:hidden"></div>
</div>

<div className="relative flex md:items-center gap-8 md:flex-row flex-col">
<div className="md:w-1/2 md:hidden"></div>
<div className="absolute left-0 top-0 md:relative md:top-auto md:left-auto w-12 h-12 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center font-bold z-10 shrink-0">4</div>
<div className="md:w-1/2 pl-16 md:pl-12">
<h4 className="text-xl font-bold mb-2">4. Tu Laisses Cette Parole Travailler en Toi</h4>
<p className="text-slate-400 text-sm">Pas besoin de "faire" quoi que ce soit. Juste recevoir. Laisser résonner.</p>
</div>
</div>

<div className="relative flex md:items-center gap-8 md:flex-row flex-col">
<div className="md:w-1/2 md:text-right order-2 md:order-1 pl-16 md:pl-0 md:pr-12">
<h4 className="text-xl font-bold text-violet-400 mb-2">5. Tu Deviens Plus Fort.e, Jour Après Jour</h4>
<p className="text-slate-400 text-sm">Cette force se répercute dans tous les aspects de ta vie : Ton business, Tes relations, Ta contribution, Ta paix intérieure.</p>
</div>
<div className="absolute left-0 top-0 md:relative md:top-auto md:left-auto w-12 h-12 rounded-full bg-orange-500 border-4 border-slate-900 flex items-center justify-center font-bold z-10 order-1 md:order-2 shrink-0">5</div>
<div className="md:w-1/2 order-3 md:hidden"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-bold tracking-tight text-center mb-16 text-slate-900">Ce Que Disent Ceux Qui Ont Rejoint</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
<div className="">
<div className="flex text-orange-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6">"Je commençais mes journées avec le stress de la to-do list. Maintenant, je les commence avec la paix. Mon chiffre d'affaires a augmenté, mais honnêtement, c'est ma sérénité qui n'a pas de prix."</p>
</div>
<div className="flex items-center gap-3 border-t border-slate-50 pt-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">SC</div>
<div>
<div className="text-sm font-semibold text-slate-900">Sophie C.</div>
<div className="text-xs text-slate-400">Thérapeute</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
<div className="">
<div className="flex text-orange-400 mb-4 gap-1">
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6">"C'est fou comme un simple audio de 5 minutes peut changer la trajectoire d'une journée. Je me sens plus légitime, plus solide. C'est mon ancrage quotidien."</p>
</div>
<div className="flex items-center gap-3 border-t border-slate-50 pt-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">ML</div>
<div>
<div className="text-sm font-semibold text-slate-900">Marc L.</div>
<div className="text-xs text-slate-400">Entrepreneur</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
<div className="">
<div className="flex text-orange-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6">"J'étais sceptique au début. Encore un truc de mindset ? Mais c'est différent. C'est profond, c'est vrai, et ça touche l'âme. Je ne peux plus m'en passer."</p>
</div>
<div className="flex items-center gap-3 border-t border-slate-50 pt-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">JD</div>
<div>
<div className="text-sm font-semibold text-slate-900">Julie D.</div>
<div className="text-xs text-slate-400">Coach Business</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="join">
<div className="max-w-xl mx-auto px-6 text-center">
<h2 className="text-3xl font-bold tracking-tight mb-8">L'Investissement</h2>
<div className="p-1 rounded-3xl bg-gradient-to-b from-slate-100 to-white shadow-2xl shadow-slate-200/50 mb-8">
<div className="bg-white rounded-[20px] p-8 overflow-hidden relative">

<div className="absolute top-0 right-0 bg-violet-100 text-violet-700 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                        Sans Engagement
                    </div>
<div className="flex justify-center items-baseline gap-1 mb-2 mt-4">
<span className="text-5xl font-bold text-slate-900 tracking-tight">29€</span>
<span className="text-lg text-slate-500 font-medium">/mois</span>
</div>
<p className="text-slate-900 font-semibold mb-2">Moins qu'un café par jour.</p>
<p className="text-slate-400 text-sm mb-8 pb-8 border-b border-slate-100">
                        Mais contrairement au café qui te donne un coup de boost temporaire... Cette parole quotidienne nourrit ta force intérieure de manière durable.
                    </p>
<div className="space-y-6 text-left mb-8">
<div className="">
<h4 className="font-bold text-slate-900 text-sm mb-1">Sans Engagement. Liberté Totale.</h4>
<p className="text-xs text-slate-500">Tu peux annuler à tout moment. Sans justification. Sans complication. Parce que je ne veux pas de personnes "coincées" dans cet espace. Je veux des personnes qui choisissent d'être là.</p>
</div>
<div className="">
<h4 className="font-bold text-slate-900 text-sm mb-1">Garantie 7 Jours</h4>
<p className="text-xs text-slate-500">Essaie pendant une semaine. Si cette parole ne résonne pas en toi, annule simplement. Tu ne risques rien, sauf peut-être de devenir plus fort.e.</p>
</div>
</div>
<button className="hover:bg-slate-800 transition-all flex gap-2 group shadow-slate-900/20 text-lg font-semibold text-white bg-slate-900 w-full rounded-xl pt-4 pb-4 shadow-lg gap-x-2 gap-y-2 items-center justify-center cursor-pointer" onclick="window.location.href='https://sublaunch.com/devenirplusfort'" role="button">
<iconify-icon icon="solar:hand-shake-linear" width="24"></iconify-icon>
                        Je Rejoins le Flux Quotidien
                    </button>
<div className="mt-4 flex justify-center gap-4 opacity-50 grayscale">
<iconify-icon icon="logos:stripe" width="40"></iconify-icon>
<iconify-icon icon="logos:mastercard" width="24"></iconify-icon>
<iconify-icon icon="logos:visa" width="30"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 border-slate-200 border-t pt-24 pb-24">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-2xl font-bold tracking-tight mb-12 text-center text-slate-900">Questions Fréquentes</h2>
<div className="space-y-4">
<details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
<summary className="flex cursor-pointer select-none hover:bg-slate-50/50 transition-colors font-medium text-slate-900 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                        "Je suis déjà abonné.e à 15 newsletters et podcasts... En quoi c'est différent ?"
                        <iconify-icon className="transition-transform duration-300 group-open:rotate-180 text-slate-400" height="20" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(148, 163, 184)'}} width="20"></iconify-icon>
</summary>
<div className="leading-relaxed text-sm text-slate-600 border-slate-100 border-t pt-4 pr-6 pb-6 pl-6">Ce n'est pas du contenu à consommer. C'est une présence . Pas d'information. Pas de stratégie. Juste une parole qui te touche là où tu en as besoin. D'âme à âme.</div>
</details>
<details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
<summary className="flex cursor-pointer select-none hover:bg-slate-50/50 transition-colors font-medium text-slate-900 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                        "Je n'ai pas le temps le matin..."
                        <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="leading-relaxed text-sm text-slate-600 border-slate-100 border-t pt-4 pr-6 pb-6 pl-6">
                        3 à 7 minutes. Tu as le temps de scroller sur les réseaux sociaux ? Tu as le temps pour ceci. Et honnêtement : si tu n'as pas 5 minutes pour nourrir ta force intérieure, c'est peut-être le signe que tu en as  besoin.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
<summary className="flex cursor-pointer select-none hover:bg-slate-50/50 transition-colors font-medium text-slate-900 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                        "Je ne suis pas très spirituel.le/religieux.euse..."
                        <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="leading-relaxed text-sm text-slate-600 border-slate-100 border-t pt-4 pr-6 pb-6 pl-6">Cette parole s'enracine dans l'amour de Dieu, oui. Mais elle parle à l'âme. Que tu sois croyant.e, en questionnement, ou simplement en quête de sens. Si tu veux devenir plus fort.e intérieurement, tu es le/la bienvenu.e.</div>
</details>
<details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
<summary className="flex cursor-pointer select-none hover:bg-slate-50/50 transition-colors font-medium text-slate-900 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                        "Et si je rate des jours ?"
                        <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="leading-relaxed text-sm text-slate-600 border-slate-100 border-t pt-4 pr-6 pb-6 pl-6">Aucun problème. Les messages restent accessibles dans le groupe. Tu écoutes à ton rythme. Ce n'est pas une course. C'est un compagnonnage.</div>
</details>
<details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
<summary className="flex cursor-pointer select-none hover:bg-slate-50/50 transition-colors font-medium text-slate-900 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                        "Ça va vraiment m'aider dans mon business ?"
                        <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary><summary className="flex cursor-pointer select-none hover:bg-slate-50/50 transition-colors font-medium text-slate-900 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                        "Ça va vraiment m'aider dans mon business ?"
                        <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary><summary className="flex cursor-pointer select-none hover:bg-slate-50/50 transition-colors font-medium text-slate-900 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                        "Ça va vraiment m'aider dans mon business ?"
                        <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="leading-relaxed text-sm text-slate-600 border-slate-100 border-t pt-4 pr-6 pb-6 pl-6">Je ne vais pas te mentir en te promettant "+50% de CA en 30 jours". Mais voici ce qui est vrai : Quand tu deviens plus fort.e intérieurement, tu oses plus grand, tu tiens le cap dans l'incertitude, tu sers tes clients avec plus de présence, tu prends de meilleures décisions. Et oui, ça se répercute dans votre business. Mais pas de manière mécanique. De manière organique.</div>
</details>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-32 pb-32 relative">
<div className="z-10 max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-8 text-center">
                Le Moment de Choisir
            </h2>
<p className="text-center text-slate-500 mb-12">
                Tu es arrivé.e jusqu'ici. Ce n'est pas un hasard. Une partie de toi sait que tu as besoin de cette force intérieure.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center opacity-70 hover:opacity-100 transition-opacity">
<h3 className="text-xl font-bold text-slate-700 mb-4">Option 1 : Continuer comme avant</h3>
<p className="text-sm text-slate-500">
                        Chercher la prochaine stratégie. Le prochain outil. La prochaine formation. En espérant que cette fois, ce sera différent.
                    </p>
</div>
<div className="p-8 rounded-3xl bg-violet-50 border border-violet-100 text-center shadow-lg shadow-violet-500/10">
<h3 className="text-xl font-bold text-violet-900 mb-4">Option 2 : Choisir de devenir plus fort.e</h3>
<p className="text-sm text-violet-800">
                        De l'intérieur. Chaque jour, une parole qui t'ancre. Qui t'autorise. Qui te challenge. Pour que tu deviennes celui ou celle que tu es appelé.e à être.
                    </p>
</div>
</div>
<div className="text-center">
<p className="text-xl font-medium text-slate-900 mb-8">La question n'est pas "suis-je prêt.e ?" La question est : "Est-ce que je choisis de commencer ?"</p>
<a className="inline-flex items-center gap-3 hover:shadow-2xl hover:shadow-violet-500/30 hover:-translate-y-1 transition-all duration-300 text-xl font-semibold text-white bg-gradient-to-br from-orange-400 to-orange-600 rounded-full px-10 py-5" href="#join">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
                    Oui, Je Choisis de Devenir Plus Fort.e
                </a>
</div>
<div className="max-w-2xl mx-auto mt-20 p-8 bg-slate-50 rounded-2xl border border-slate-200">
<h4 className="font-bold text-slate-900 mb-4">Dernière Chose...</h4>
<p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Ce flux commence demain matin. Si tu rejoins aujourd'hui, tu recevras ton premier message dès le réveil. Une parole pour ancrer ta journée. Pour te rappeler qui tu es vraiment. Pour te donner la permission d'oser plus grand.
                </p>
<p className="font-medium text-slate-900">Je t'attends de l'autre côté.</p>
<div className="mt-8 pt-8 border-t border-slate-200">
<p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">P.S.</p>
<p className="text-slate-600 text-lg font-medium italic">"Dans un an, est-ce que je veux être plus fort.e ou regretter de ne pas avoir essayé ?"</p>
<p className="text-sm text-slate-500 mt-2">La réponse est en toi.</p>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-slate-50 to-transparent -z-10"></div>
</section>
<footer className="py-12 bg-white border-t border-slate-100">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="uppercase text-sm font-bold text-slate-900 tracking-tighter flex items-center gap-1.5">
<span className="" style={{}}>Force</span>
<span className="" style={{}}>intérieure</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-violet-600 transition-colors" href="https://lb.stlr.club/mentions-legales-1/">Mentions Légales</a>
<a className="hover:text-violet-600 transition-colors" href="https://lb.stlr.club/cgv-2/">CGV</a>
</div>
<div className="text-xs text-slate-400" style={{}}>© 2025 JLDW Tous droits réservés.</div>
</div>
</footer>

    </>
  );
}
