import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function togglePricing(plan) {
          const btnLifetime = document.getElementById('btn-lifetime');
          const btnCpf = document.getElementById('btn-cpf');
          const cardLifetime = document.getElementById('card-lifetime');
          const cardCpf = document.getElementById('card-cpf');

          if (plan === 'lifetime') {
            btnLifetime.classList.add('bg-white', 'text-black', 'shadow-sm');
            btnLifetime.classList.remove('text-neutral-400', 'hover:text-white');
            
            btnCpf.classList.remove('bg-white', 'text-black', 'shadow-sm');
            btnCpf.classList.add('text-neutral-400', 'hover:text-white');

            cardLifetime.classList.remove('hidden');
            cardLifetime.classList.add('flex');
            cardCpf.classList.add('hidden');
            cardCpf.classList.remove('flex');
          } else {
            btnCpf.classList.add('bg-white', 'text-black', 'shadow-sm');
            btnCpf.classList.remove('text-neutral-400', 'hover:text-white');
            
            btnLifetime.classList.remove('bg-white', 'text-black', 'shadow-sm');
            btnLifetime.classList.add('text-neutral-400', 'hover:text-white');

            cardCpf.classList.remove('hidden');
            cardCpf.classList.add('flex');
            cardLifetime.classList.add('hidden');
            cardLifetime.classList.remove('flex');
          }
        }
      


      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-5 h-5 rounded bg-white flex items-center justify-center text-black text-[10px] font-semibold tracking-tighter">
            AM
          </div>
<span className="text-sm font-medium tracking-tight text-neutral-200 group-hover:text-white transition-colors">
            Apprendre Make
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#problems">
            Pourquoi
          </a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#program">
            Programme
          </a>
<a className="hover:text-white transition-colors text-xs font-medium text-neutral-400" href="#author">Votre formateur</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#pricing">
            Tarifs
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hover:bg-neutral-200 transition-colors text-xs font-medium text-black bg-white rounded-full pt-1.5 pr-4 pb-1.5 pl-4" href="#pricing">Accéder à la formation →</a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/5 opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute inset-0 bg-grid pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm mb-8">
<span className="flex h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
<span className="text-[11px] font-medium tracking-wide text-neutral-300">
            La formation Make la plus complète en français
          </span>
</div>

<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tighter mb-6">De 0 à Expert Make<br className="hidden md:block"/> Formez-vous en 15 heures</h1>

<p className="text-lg md:text-xl font-medium text-neutral-400 mb-10 tracking-tight max-w-2xl mx-auto leading-relaxed">
          100 vidéos. 3 niveaux. De débutant à automatisations avancées avec
          APIs et webhooks. Apprenez à votre rythme, une bonne fois pour toutes.
        </p>

<div className="flex flex-wrap justify-center gap-3 mb-10">
<div className="group flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default backdrop-blur-sm">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-green-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm font-medium text-neutral-300 group-hover:text-neutral-200 transition-colors tracking-tight">Éligible CPF</span>
</div>
<div className="group flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default backdrop-blur-sm">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-green-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm font-medium text-neutral-300 group-hover:text-neutral-200 transition-colors tracking-tight">+300 élèves formés</span>
</div>
<div className="group flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default backdrop-blur-sm">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-green-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm font-medium text-neutral-300 group-hover:text-neutral-200 transition-colors tracking-tight">Accès à vie + mises à jour incluses</span>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="hover:bg-neutral-200 transition-all flex items-center gap-2 text-sm font-medium text-black bg-white h-11 rounded-full pr-8 pl-8 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#pricing">Accéder à la formation →</a>
</div>
</div>

<div className="max-w-3xl mx-auto mt-20 relative">
<div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-xl blur-lg opacity-30"></div>
<div className="relative bg-black border border-white/10 rounded-xl overflow-hidden aspect-video flex items-center justify-center group cursor-pointer shadow-2xl">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] hover:animate-[shine_3s_infinite]"></div>
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300 z-10">
<svg className="lucide lucide-play w-6 h-6 fill-white text-white ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
<div>
<p className="text-white text-sm font-medium">
                Présentation de la méthode
              </p>
<p className="text-neutral-500 text-xs">2:45 min</p>
</div>
</div>
</div>
</div>
</section>

<div className="overflow-hidden flex bg-neutral-950 w-full z-20 border-white/5 border-b pt-10 pb-10 relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none">
</div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none">
</div>
<div className="flex gap-20 animate-scroll whitespace-nowrap gap-x-20 gap-y-20 items-center">

<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      Spotify
    </div>
<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      Netflix
    </div>
<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      Arte
    </div>
<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      Konbini
    </div>
<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      Brut.
    </div>
<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      Canal+
    </div>
<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      YouTube
    </div>
<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      Twitch
    </div>
<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      Amazon Music
    </div>
<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      Acast
    </div>
</div>
<div aria-hidden="true" className="flex items-center gap-20 animate-scroll whitespace-nowrap pl-20">

<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      Spotify
    </div>
<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      Netflix
    </div>
<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      Arte
    </div>
<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      Konbini
    </div>
<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      Brut.
    </div>
<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      Canal+
    </div>
<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      YouTube
    </div>
<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      Twitch
    </div>
<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      Amazon Music
    </div>
<div className="text-2xl font-bold text-neutral-800 uppercase tracking-tighter select-none">
      Acast
    </div>
</div>
</div>

<section className="bg-neutral-950 border-white/5 border-b pt-24 pr-6 pb-24 pl-6" id="problems">
<div className="max-w-5xl mr-auto ml-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">
            Vous vous reconnaissez ?
          </h2>
<p className="text-neutral-500 text-sm max-w-2xl">
            Si vous vivez l'une de ces situations, cette formation est faite
            pour vous.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-5 group-hover:border-white/20 transition-colors">
<svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
<path d="M10 8L16 12L10 16V8Z"></path>
</svg>
</div>
<h3 className="font-medium text-white mb-3">Tutos YouTube en boucle</h3>
<p className="leading-relaxed text-sm text-neutral-500">Vous êtes coincés dans le Tuto Hell -&gt; Vous consommez pour vous rassurer mais vous ne passez jamais à l'action.
L'objectif sur YouTube est de faire des vues, pas de vous former.</p>
</div>
<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-5 group-hover:border-white/20 transition-colors">
<svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z"></path>
<path d="M8 12H16"></path>
<path d="M8 16H12"></path>
</svg>
</div>
<h3 className="font-medium text-white mb-3">Vos scénarios ne fonctionnent pas</h3>
<p className="leading-relaxed text-sm text-neutral-500">Même chatGPT et Gemini ne peuvent pas vous aider 🥲
Make est un ensemble de concepts, mis bouts à bouts pour construire un ensemble cohérent.</p>
</div>
<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-5 group-hover:border-white/20 transition-colors">
<svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="5" r="3"></circle>
<circle cx="5" cy="19" r="3"></circle>
<circle cx="19" cy="19" r="3"></circle>
<path d="M12 8V12"></path>
<path d="M5 16V14C5 12.8954 5.89543 12 7 12H17C18.1046 12 19 12.8954 19 14V16"></path>
</svg>
</div>
<h3 className="text-white font-medium mb-3">Pas de méthode structurée</h3>
<p className="leading-relaxed text-sm text-neutral-500">Vous avancez au hasard sans savoir dans quel ordre apprendre ni quoi prioriser. Vous connaissez quelques formules, quelques "tips", vous avez pris un template.
Et maintenant ?</p>
</div>
</div>
<div className="mt-20">
<div className="relative mx-auto max-w-xl text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm mb-6">
<svg className="text-neutral-400" fill="currentColor" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Le mot du formateur</span>
</div>
<p className="leading-relaxed text-lg font-medium text-white">J'ai connu ça, j'ai été dans cette situation.</p>
</div>
</div>
</div>
</section>
<section className="relative bg-black border-b border-white/5 py-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-gradient-to-b from-blue-500/10 to-transparent blur-[120px] rounded-full pointer-events-none opacity-40"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">

<div className="max-w-3xl mx-auto text-center mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-blue-300 tracking-wide uppercase mb-8 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
          Objectifs de la formation
        </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-8">
          Devenez <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-blue-600">100% autonome</span> sur Make
        </h2>
<p className="text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
          Cette formation vous donne exactement ce qu'il vous manque : une méthode pas-à-pas, des cas concrets issus de mes projets clients, la logique pour créer vos propres automatisations.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">

<div className="group relative overflow-hidden rounded-3xl bg-neutral-900/40 border border-white/5 p-8 transition-all duration-300 hover:bg-neutral-900/60 hover:border-white/10 hover:shadow-2xl hover:shadow-blue-900/10">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:scale-105 group-hover:border-blue-500/30 group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] transition-all duration-300">
<svg className="lucide lucide-zap text-white group-hover:text-blue-400 transition-colors" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight group-hover:text-blue-200 transition-colors">Créer des automatisations complexes</h3>
<p className="text-base text-neutral-400 leading-relaxed font-light">Connectez vos outils (CRM, mails, facturation, Notion...) et laissez Make travailler pendant que vous vous concentrez sur votre valeur ajoutée.</p>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-neutral-900/40 border border-white/5 p-8 transition-all duration-300 hover:bg-neutral-900/60 hover:border-white/10 hover:shadow-2xl hover:shadow-purple-900/10">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:scale-105 group-hover:border-purple-500/30 group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] transition-all duration-300">
<svg className="lucide lucide-wrench text-white group-hover:text-purple-400 transition-colors" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight group-hover:text-purple-200 transition-colors">Comprendre d'où viennent vos erreurs</h3>
<p className="text-base text-neutral-400 leading-relaxed font-light">Grâce à ma méthode, vous apprenez, vous testez et vous comprenez enfin comment maîtriser Make. C'est comme passer son permis, ça devient naturel.</p>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-neutral-900/40 border border-white/5 p-8 transition-all duration-300 hover:bg-neutral-900/60 hover:border-white/10 hover:shadow-2xl hover:shadow-emerald-900/10">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:scale-105 group-hover:border-emerald-500/30 group-hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] transition-all duration-300">
<svg className="lucide lucide-clock text-white group-hover:text-emerald-400 transition-colors" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight group-hover:text-emerald-200 transition-colors">Gagner du temps</h3>
<p className="text-base text-neutral-400 leading-relaxed font-light">Vous saurez si une tâche mérite d'être automatisée et spoiler : la plupart le sont. Ça vous semble répétitif ? Automatisez-le !</p>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-neutral-900/40 border border-white/5 p-8 transition-all duration-300 hover:bg-neutral-900/60 hover:border-white/10 hover:shadow-2xl hover:shadow-amber-900/10">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:scale-105 group-hover:border-amber-500/30 group-hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.3)] transition-all duration-300">
<svg className="lucide lucide-briefcase text-white group-hover:text-amber-400 transition-colors" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect>
<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight group-hover:text-amber-200 transition-colors">Devenir Freelance en automatisations</h3>
<p className="text-base text-neutral-400 leading-relaxed font-light">Le marché est en demande hyper croissante de productivité. Apprenez Make et, comme je le fais, facturez vos services auprès de vos clients.</p>
</div>
</div>

</div>
</section>

<section className="py-24 px-6 bg-black relative" id="program">
<div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="">
<h2 className="text-2xl font-medium text-white mb-2">Le programme complet — 15h de formation, + de 100 vidéos</h2>
<p className="text-sm text-neutral-500">
              3 Chapitres • De zéro à expert • Mises à jour à vie
            </p>
</div>
<div className="flex items-center gap-2">
<button className="hover:bg-neutral-200 transition-colors text-xs font-medium text-black bg-white rounded-lg pt-2 pr-4 pb-2 pl-4">
              Tout développer
            </button>
</div>
</div>
<div className="space-y-4">

<div className="group rounded-xl border border-white/10 bg-neutral-900/40 overflow-hidden">
<div className="flex cursor-pointer hover:bg-white/5 transition-colors group pt-6 pr-6 pb-6 pl-6 gap-x-4 gap-y-4" onclick="const content = this.querySelector('.toggle-content'); const icon = this.querySelector('.toggle-icon'); content.classList.toggle('hidden'); icon.classList.toggle('rotate-180');">
<div className="shrink-0 w-12 h-12 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white font-mono text-sm">
                01
              </div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-white font-medium group-hover:text-neutral-200 transition-colors select-none">
                    Les fondations
                  </h3>
<svg className="toggle-icon transition-transform duration-300 w-[16px] h-[16px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(115, 115, 115)'}} viewbox="0 0 24 24">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</div>
<div className="toggle-content hidden">
<p className="text-xs text-neutral-500 mb-4 mt-2">
                    Comprendre la logique Make, naviguer dans l'interface, créer
                    vos premiers scénarios simples. Vous partez de zéro ?
                    Parfait, c'est fait pour ça.
                  </p>
<div className="space-y-2 pl-4 border-l border-white/10">
<div className="flex items-center gap-3 text-xs text-neutral-400">
<svg className="w-3 h-3 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
                      Découverte de l'interface et vocabulaire
                    </div>
<div className="flex items-center gap-3 text-xs text-neutral-400">
<svg className="w-3 h-3 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
                      Votre premier scénario : Typeform vers Notion
                    </div>
<div className="flex items-center gap-3 text-xs text-neutral-400">
<svg className="w-3 h-3 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
                      Manipuler les Dates, Textes et Nombres
                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="group rounded-xl border border-white/10 bg-neutral-900/40 overflow-hidden">
<div className="p-6 flex gap-4 cursor-pointer hover:bg-white/5 transition-colors">
<div className="shrink-0 w-12 h-12 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white font-mono text-sm">
                02
              </div>
<div className="flex-1">
<h3 className="text-white font-medium mb-1 group-hover:text-neutral-200 transition-colors">
                  Les techniques avancées
                </h3>
<p className="text-xs text-neutral-500 mb-4">
                  Webhooks, routeurs, filtres, gestion des erreurs... Tout ce
                  qui fait la différence entre un scénario bancal et une
                  automatisation robuste.
                </p>
<div className="space-y-2 pl-4 border-l border-white/10">
<div className="flex items-center gap-3 text-xs text-neutral-400">
<svg className="w-3 h-3 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
                    Routeurs et Filtres conditionnels complexes
                  </div>
<div className="flex items-center gap-3 text-xs text-neutral-400">
<svg className="w-3 h-3 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
                    Iterator &amp; Array Aggregator : Gérer les boucles
                  </div>
<div className="flex items-center gap-3 text-xs text-neutral-400">
<svg className="w-3 h-3 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
                    Data Stores : Créer une base de données interne
                  </div>
</div>
</div>
</div>
</div>

<div className="group rounded-xl border border-white/10 bg-neutral-900/40 overflow-hidden">
<div className="p-6 flex gap-4 cursor-pointer hover:bg-white/5 transition-colors">
<div className="shrink-0 w-12 h-12 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white font-mono text-sm">
                03
              </div>
<div className="flex-1">
<h3 className="text-white font-medium mb-1 group-hover:text-neutral-200 transition-colors">
                  Les cas pratiques métier
                </h3>
<p className="text-xs text-neutral-500 mb-4">
                  Des automatisations concrètes que vous pouvez répliquer :
                  prospection, facturation, gestion client, notifications,
                  synchronisation d'outils...
                </p>
<div className="space-y-2 pl-4 border-l border-white/10">
<div className="flex items-center gap-3 text-xs text-neutral-400">
<svg className="w-3 h-3 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
                    Comprendre JSON et les requêtes HTTP
                  </div>
<div className="flex items-center gap-3 text-xs text-neutral-400">
<svg className="w-3 h-3 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
                    Authentification API (API Key, OAuth)
                  </div>
<div className="flex items-center gap-3 text-xs text-neutral-400">
<svg className="w-3 h-3 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
                    Webhooks : Recevoir des données en temps réel
                  </div>
</div>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-neutral-950" id="author">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="shrink-0 relative">
<div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/10 p-1 bg-black">
<img alt="Lilian" className="w-full h-full object-cover rounded-full grayscale" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&amp;q=80"/>
</div>
<div className="absolute bottom-2 right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-xs border-2 border-black">
              L
            </div>
</div>
<div className="text-center md:text-left">
<h2 className="text-2xl font-medium text-white mb-4">
              Qui est derrière cette formation ?
            </h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Je m'appelle Lilian. J'utilise Make depuis 2020, bien avant que
              l'outil devienne mainstream. En 2020, je suis devenu le premier
              expert certifié Make en France. Depuis, j'ai créé des centaines
              d'automatisations — pour moi et pour mes clients.
            </p>
<p className="text-neutral-400 text-sm leading-relaxed mb-8">
              Cette formation, c'est tout ce que j'aurais aimé avoir quand j'ai
              démarré : une méthode claire, des exemples concrets, et zéro
              bullshit technique inutile.
            </p>
<div className="flex items-center justify-center md:justify-start gap-4 text-xs font-mono text-neutral-500">
<span className="flex items-center gap-2">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
                Expert Make 2020
              </span>
<span className="w-px h-3 bg-neutral-700"></span>
<span className="">Premier certifié France</span>
<span className="w-px h-3 bg-neutral-700"></span>
<span>100s d'automatisations</span>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 sm:py-10 md:py-24 max-w-7xl border-white/5 border-t mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="flex items-center justify-between mb-12">
<div className="space-y-1">
<p className="text-xs sm:text-sm text-neutral-500 font-mono">
            AVIS VÉRIFIÉS
          </p>
<h2 className="text-2xl sm:text-3xl tracking-tight font-medium text-white">
            Ce qu'ils en disent
          </h2>
</div>
<div className="hidden sm:flex items-center gap-2 text-neutral-500">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-600" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<span className="text-sm">Retours de la promo 2024</span>
</div>
</div>
<div className="relative mt-6 sm:mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black">
<div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-black to-transparent z-10"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-black to-transparent z-10"></div>

<div className="sm:py-8 pt-6 pb-6 relative">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-marquee-ltr">

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-xl border border-white/10 bg-neutral-900/30 p-5 backdrop-blur-sm">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;q=80"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-200">
                      Sophie Dubois
                    </span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-brand-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-neutral-500">Freelance Marketing</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-400 font-light">
                Cette formation a littéralement sauvé mon business. J'ai
                automatisé toute ma facturation et mes relances clients en une
                semaine.
              </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-xl border border-white/10 bg-neutral-900/30 p-5 backdrop-blur-sm">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;q=80"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-200">
                      Thomas Faure
                    </span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-brand-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-neutral-500">CTO @ ScaleUp</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-400 font-light">
                L'approche est pragmatique. Pas de théorie inutile, que du
                concret. Les modules sur les webhooks valent de l'or.
              </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-xl border border-white/10 bg-neutral-900/30 p-5 backdrop-blur-sm">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;q=80"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-200">
                      Maya Kim
                    </span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-brand-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-neutral-500">E-commerçante</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-400 font-light">
                Je partais de zéro. Aujourd'hui, mon Notion se synchronise tout
                seul avec Shopify. Merci Lilian !
              </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-xl border border-white/10 bg-neutral-900/30 p-5 backdrop-blur-sm">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;q=80"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-200">
                      Ethan Garcia
                    </span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-brand-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-neutral-500">Consultant Ops</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-400 font-light">
                Enfin une formation qui explique comment gérer les erreurs
                proprement. Mes scénarios sont enfin robustes.
              </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-xl border border-white/10 bg-neutral-900/30 p-5 backdrop-blur-sm">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;q=80"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-200">
                      Sophie Dubois
                    </span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-brand-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-neutral-500">Freelance Marketing</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-400 font-light">
                Cette formation a littéralement sauvé mon business. J'ai
                automatisé toute ma facturation et mes relances clients en une
                semaine.
              </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-xl border border-white/10 bg-neutral-900/30 p-5 backdrop-blur-sm">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;q=80"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-200">
                      Thomas Faure
                    </span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-brand-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-neutral-500">CTO @ ScaleUp</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-400 font-light">
                L'approche est pragmatique. Pas de théorie inutile, que du
                concret. Les modules sur les webhooks valent de l'or.
              </p>
</article>
</div>
</div>
<div className="border-t border-white/5"></div>

<div className="relative py-6 sm:py-8">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-marquee-rtl">

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-neutral-900/30 border-white/10 border rounded-xl p-5 backdrop-blur-sm">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&amp;q=80"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-200">
                      Priya Singh
                    </span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-brand-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-neutral-500">No-Code Maker</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-400 font-light">
                Je pensais connaître Make, mais le chapitre 2 m'a ouvert les
                yeux. J'ai divisé par deux le nombre d'opérations de mes
                scénarios.
              </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-neutral-900/30 border-white/10 border rounded-xl p-5 backdrop-blur-sm">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;q=80"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-200">
                      Leo Martin
                    </span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-brand-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-neutral-500">Solopreneur</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-400 font-light">
                Investissement rentabilisé dès le premier mois. Je gagne environ
                4h par semaine grâce à mes nouvelles automations.
              </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-neutral-900/30 border-white/10 border rounded-xl p-5 backdrop-blur-sm">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&amp;q=80"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-200">
                      Sofia Alvarez
                    </span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-brand-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-neutral-500">Agency Owner</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-400 font-light">
                On a formé toute l'équipe avec ce cours. Le support de Lilian
                est ultra réactif quand on est bloqué.
              </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-xl border border-white/10 bg-neutral-900/30 p-5 backdrop-blur-sm">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&amp;q=80"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-200">
                      Jackson Lee
                    </span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-brand-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-neutral-500">Product Manager</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-400 font-light">
                Clair, net et précis. La pédagogie est top pour comprendre la
                logique technique sans être développeur.
              </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-neutral-900/30 border-white/10 border rounded-xl p-5 backdrop-blur-sm">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&amp;q=80"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-200">
                      Priya Singh
                    </span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-brand-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-neutral-500">No-Code Maker</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-400 font-light">
                Je pensais connaître Make, mais le chapitre 2 m'a ouvert les
                yeux. J'ai divisé par deux le nombre d'opérations de mes
                scénarios.
              </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-neutral-900/30 border-white/10 border rounded-xl p-5 backdrop-blur-sm">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full grayscale opacity-80" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;q=80"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-neutral-200">
                      Leo Martin
                    </span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-brand-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-neutral-500">Solopreneur</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-400 font-light">
                Investissement rentabilisé dès le premier mois. Je gagne environ
                4h par semaine grâce à mes nouvelles automations.
              </p>
</article>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-neutral-950 pt-24 pr-6 pb-24 pl-6 relative" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4" style={{}}>Une formule adaptée à votre situation</h2>
<p className="text-neutral-500 text-sm">
            Garantie satisfait ou remboursé sous 14 jours.
          </p>
</div>

<div className="flex justify-center mb-12">
<div className="bg-neutral-900 p-1 rounded-full border border-white/10 inline-flex relative">
<button className="px-6 py-2 rounded-full text-sm font-medium bg-white text-black transition-all shadow-sm" id="btn-lifetime" onclick="togglePricing('lifetime')">
              Formation Lifetime
            </button>
<button className="px-6 py-2 rounded-full text-sm font-medium text-neutral-400 hover:text-white transition-all" id="btn-cpf" onclick="togglePricing('cpf')">
              Formation CPF
            </button>
</div>
</div>
<div className="flex justify-center max-w-4xl mx-auto">

<div className="w-full max-w-md p-8 rounded-2xl border border-white/10 bg-black flex flex-col items-start hover:border-white/20 transition-colors" id="card-lifetime">
<h3 className="text-white font-medium mb-1">Formation Lifetime</h3>
<p className="text-xs text-neutral-500 mb-6">Paiement unique</p>
<div className="text-3xl font-medium text-white mb-8">
              499€
              <span className="text-sm font-normal text-neutral-500">TTC</span>
</div>
<ul className="space-y-4 mb-8 flex-1 w-full">
<li className="flex gap-3 text-sm font-light text-neutral-400 gap-x-3 gap-y-3 items-center">+ 100 vidéos</li><li className="flex text-sm font-light text-neutral-400 gap-x-3 gap-y-3 items-center">Des exercices pour pratiquer</li>
</ul>
<a className="w-full h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium flex items-center justify-center transition-colors" href="#">
              Rejoindre la formation →
            </a>
</div>

<div className="hidden w-full max-w-md p-8 rounded-2xl border border-white/10 bg-neutral-900/30 flex-col items-start relative overflow-hidden ring-1 ring-white/10" id="card-cpf">
<div className="absolute top-0 right-0 bg-white px-3 py-1 rounded-bl-xl">
<span className="text-[10px] font-semibold text-black tracking-wide">
                ÉLIGIBLE CPF
              </span>
</div>
<h3 className="text-white font-medium mb-1">Formation CPF</h3>
<p className="text-xs text-neutral-500 mb-6">
              Finançable à 100% via CPF
            </p>
<div className="text-3xl font-medium text-white mb-8">
              1990€
              <span className="text-sm text-neutral-500 font-normal">HT</span>
</div>
<ul className="space-y-4 mb-8 flex-1 w-full">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light">
<svg className="lucide lucide-check text-green-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Tout le contenu de la formation Lifetime
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light">
<svg className="lucide lucide-check text-green-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Accompagnement par un organisme certifié Qualiopi
              </li>
</ul>
<a className="w-full h-10 rounded-full bg-white text-black hover:bg-neutral-200 text-sm font-medium flex items-center justify-center transition-colors" href="#">
              Vérifier mon éligibilité CPF →
            </a>
</div>
</div>
<div className="text-xs font-light text-neutral-500 text-center mt-8">Pas de formule d'abonnement. Vous payez une fois, vous accédez pour toujours.</div>
</div>

</section>

<section className="py-24 px-6 bg-neutral-950 border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-medium text-white mb-12 text-center">
          Questions fréquentes
        </h2>
<div className="space-y-6">
<div className="group border-b border-white/5 pb-6">
<h3 className="text-white font-medium text-sm mb-2">
              Je n'ai jamais utilisé Make, c'est pour moi ?
            </h3>
<p className="text-neutral-500 text-sm font-light leading-relaxed">
              Oui. La formation part de zéro. Vous n'avez besoin d'aucune
              connaissance technique préalable.
            </p>
</div>
<div className="group border-b border-white/5 pb-6">
<h3 className="text-white font-medium text-sm mb-2">
              Combien de temps ai-je accès à la formation ?
            </h3>
<p className="text-neutral-500 text-sm font-light leading-relaxed">
              À vie. Et toutes les mises à jour sont incluses.
            </p>
</div>
<div className="group border-b border-white/5 pb-6">
<h3 className="text-white font-medium text-sm mb-2">
              Est-ce que je dois savoir coder ?
            </h3>
<p className="text-neutral-500 text-sm font-light leading-relaxed">
              Non. Make est un outil no-code. On ne touche jamais au code dans
              cette formation.
            </p>
</div>
<div className="group border-b border-white/5 pb-6">
<h3 className="text-white font-medium text-sm mb-2">
              Quelle est la différence entre l'offre Lifetime et l'offre CPF ?
            </h3>
<p className="text-neutral-500 text-sm font-light leading-relaxed">
              Le contenu est identique. L'offre CPF passe par un organisme
              partenaire certifié Qualiopi, ce qui permet de la financer avec
              votre Compte Personnel de Formation.
            </p>
</div>
<div className="group border-b border-white/5 pb-6">
<h3 className="text-white font-medium text-sm mb-2">
              J'ai déjà un peu utilisé Make, ça vaut le coup ?
            </h3>
<p className="text-neutral-500 text-sm font-light leading-relaxed">
              Si vous galérez encore à debugger vos scénarios ou que vous n'osez
              pas toucher aux webhooks, oui. Le chapitre 2 vous fera passer un
              cap.
            </p>
</div>
<div className="group border-b border-white/5 pb-6">
<h3 className="text-white font-medium text-sm mb-2">
              Il y a une garantie ?
            </h3>
<p className="leading-relaxed text-sm font-light text-neutral-500">
              Oui, garantie satisfait ou remboursé sous 14 jours.
            </p>
</div>
</div>
</div>
</section>
<section className="relative py-32 px-6 bg-black border-t border-white/5 overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
          Prêt à automatiser votre business ?
        </h2>
<p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Chaque jour sans automatisation, c'est du temps perdu sur des tâches
          que Make pourrait faire pour vous.
        </p>
<a className="inline-flex h-12 px-8 rounded-full bg-white text-black font-medium text-sm items-center gap-2 hover:bg-neutral-200 transition-colors" href="#pricing">
          Accéder à la formation — 499 € HT
          <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded bg-white flex items-center justify-center text-black text-[8px] font-bold">
            AM
          </div>
<span className="text-xs font-medium text-neutral-400">
            Apprendre Make © 2024
          </span>
</div>
<div className="flex gap-6">
<a className="text-xs text-neutral-600 hover:text-white transition-colors" href="#">
            Mentions légales
          </a>
<a className="text-xs text-neutral-600 hover:text-white transition-colors" href="#">
            CGV
          </a>
<a className="text-xs text-neutral-600 hover:text-white transition-colors" href="#">
            Contact
          </a>
</div>
</div>
</footer>


    </>
  );
}
