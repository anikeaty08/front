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
      <div className="top-0 w-full h-screen -z-10 bg-cover bg-center absolute" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/18bc0a12-8314-44a8-a3ad-2aea334a8a30_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<div className="fixed top-0 w-full h-screen -z-10" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute inset-0 bg-black/60"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="bg-gradient-to-br from-[#0162fe]/10 via-white/0 to-white/10 absolute top-0 right-0 bottom-0 left-0" style={{}}></div>
<div className="blur-[120px] bg-blue-600/20 mix-blend-screen w-2/3 h-2/3 rounded-full absolute top-[-10%] right-[-10%] animate-pulse" style={{}}></div>
</div>

<main className="min-h-screen flex flex-col md:pt-24 md:pb-20 overflow-x-hidden z-10 pt-16 pb-12 relative items-center">
<div className="px-4 sm:px-6 lg:px-8 w-full max-w-7xl mr-auto ml-auto">

<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 gap-10 mb-12 lg:mb-24 items-center">

<div className="lg:col-span-7 space-y-6 md:space-y-8">

<div className="animate-on-scroll delay-100 flex justify-start" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="inline-flex gap-2 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 items-center border-white/10 bg-white/5 backdrop-blur-md transition-all hover:bg-white/10 cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-amber-400"></span>
<span className="inline-flex bg-green-600 w-2 h-2 rounded-full relative"></span>
</span>
<span className="text-xs font-semibold tracking-wide uppercase text-zinc-300">
                  Nova Turma Aberta
                </span>
</div>
</div>

<div className="animate-on-scroll delay-200" style={{opacity: '1', transform: 'translateY(0px)'}}>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-medium text-white tracking-tight font-poppins">
                Faça até
                <span className="text-gradient-gold font-extrabold bg-gradient-to-br from-[#0062ff] to-[#52b4ff]">
                  R$ 5.000/mês
                </span>
                gravando vídeos.
              </h1>
</div>

<p className="animate-on-scroll delay-300 text-base sm:text-lg leading-relaxed text-neutral-300 max-w-xl font-light" style={{opacity: '1', transform: 'translateY(0px)'}}>
              Torne-se um Videomaker profissional mesmo começando do zero.
              Aprenda a gravar, editar e vender vídeos para empresas usando
              apenas o seu celular.
            </p>

<div className="animate-on-scroll delay-400 flex flex-col sm:flex-row gap-4 pt-2" style={{opacity: '1', transform: 'translateY(0px)'}}>
<button className="shiny-cta group w-full sm:w-auto text-center justify-center">
<span className="tracking-tight flex items-center justify-center">
                  Quero Garantir Minha Vaga
                  <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1 ml-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>

<div className="animate-on-scroll delay-500 flex flex-wrap items-center gap-4 text-xs text-zinc-400 font-medium" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="flex -space-x-3">
<div className="w-9 h-9 rounded-full border-2 flex items-center justify-center overflow-hidden border-zinc-950 bg-zinc-800 ring-2 ring-white/5 transition-transform hover:-translate-y-1">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="w-9 h-9 rounded-full border-2 flex items-center justify-center overflow-hidden border-zinc-950 bg-zinc-800 ring-2 ring-white/5 transition-transform hover:-translate-y-1">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="w-9 h-9 rounded-full border-2 flex items-center justify-center overflow-hidden border-zinc-950 bg-zinc-800 ring-2 ring-white/5 transition-transform hover:-translate-y-1">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
</div>
<p className="">
                Junte-se a
                <span className="text-white font-bold">500+ alunos</span>
<span className="block text-[10px] text-zinc-500 font-normal">
                  Avaliado 5/5 ⭐
                </span>
</p>
</div>
</div>

<div className="lg:col-span-5 relative space-y-4 md:space-y-6">

<div className="p-5 sm:p-8 animate-on-scroll delay-300 transform hover:-translate-y-1 transition-transform duration-500 group bg-zinc-900/40 border-white/10 border rounded-3xl shadow-2xl backdrop-blur-xl" style={{opacity: '1', transform: 'translateY(0px)'}}>

<div className="flex items-start justify-between mb-6 md:mb-8">
<div className="flex items-center gap-4">
<div className="flex bg-gradient-to-br from-[#0aaef5] to-[#0c4ee9] w-12 h-12 rounded-2xl shadow-lg items-center justify-center shadow-blue-500/20 text-white shrink-0">
<svg className="lucide lucide-users w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<div className="">
<div className="text-3xl font-semibold tracking-tight text-white flex items-baseline gap-1">
<span className="text-sm font-normal text-zinc-400">R$</span>
<span className="counter" data-target="5000">40</span>
<span className="text-lg font-normal text-zinc-400">+</span>
</div>
<div className="text-sm font-medium text-zinc-400">
                      Renda Mensal
                    </div>
</div>
</div>
<div className="flex flex-col items-end">
<div className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full border text-emerald-400 bg-emerald-400/10 border-emerald-400/20">
<svg className="lucide lucide-trending-up w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
<span>Comprovado</span>
</div>
</div>
</div>

<div className="space-y-3 mb-6 md:mb-8">
<div className="flex justify-between items-end">
<span className="text-sm font-medium text-zinc-300">
                    Demanda de Mercado
                  </span>
<span className="text-sm font-semibold text-white">
                    Muito Alta
                  </span>
</div>
<div className="h-2 w-full rounded-full overflow-hidden bg-zinc-800 border border-white/5">
<div className="animate-bar bg-gradient-to-r from-[#0a68ff] via-[#4d88ff] to-[#3b82f6] h-full rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)] relative">
<div className="absolute inset-0 bg-white/20 animate-pulse"></div>
</div>
</div>
</div>

<div className="grid grid-cols-3 text-center border-white/10 border-t pt-6 gap-x-2 gap-y-4">
<div className="space-y-1 flex flex-col items-center justify-center">
<div className="sm:text-lg text-sm font-semibold text-white leading-tight">
                    Começa
                    <br/>
                    do Zero
                  </div>
<div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                    Sem experiência
                  </div>
</div>
<div className="relative space-y-1 flex flex-col items-center justify-center">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/10"></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/10"></div>
<div className="sm:text-lg text-sm font-semibold text-white leading-tight">
                    Só com
                    <br/>
                    o Celular
                  </div>
<div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                    Sem equipamentos
                  </div>
</div>
<div className="space-y-1 flex flex-col items-center justify-center">
<div className="sm:text-lg text-sm font-semibold text-white leading-tight">
                    Alta
                    <br/>
                    Procura
                  </div>
<div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                    Vende fácil
                  </div>
</div>
</div>
</div>

<div className="p-5 sm:p-6 animate-on-scroll delay-400 overflow-hidden bg-zinc-900/60 border-white/10 border rounded-3xl relative backdrop-blur-xl flex flex-col justify-center h-full min-h-[140px]" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] pointer-events-none"></div>
<h3 className="uppercase text-xs font-semibold text-zinc-400 tracking-wider text-center mb-6 z-10 relative">
                Ferramentas que você vai dominar
              </h3>
<div className="relative w-full mask-linear-fade">
<div className="flex gap-12 whitespace-nowrap items-center h-10" style={{animation: 'marquee 30s linear infinite'}}>
<div className="flex items-center gap-12 shrink-0">
<img alt="CapCut" className="w-auto h-7 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/capcut.png?w=800&amp;q=80"/>
<img alt="Canva" className="h-7 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://cdn.simpleicons.org/canva/white"/>
<img alt="ChatGPT" className="h-7 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://cdn.simpleicons.org/openai/white"/>
<img alt="Instagram" className="h-7 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://cdn.simpleicons.org/instagram/white"/>
<img alt="TikTok" className="h-7 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://cdn.simpleicons.org/tiktok/white"/>
</div>
<div className="flex items-center gap-12 shrink-0">
<img alt="CapCut" className="w-auto h-7 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/capcut.png?w=800&amp;q=80"/>
<img alt="Canva" className="h-7 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://cdn.simpleicons.org/canva/white"/>
<img alt="ChatGPT" className="h-7 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://cdn.simpleicons.org/openai/white"/>
<img alt="Instagram" className="h-7 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://cdn.simpleicons.org/instagram/white"/>
<img alt="TikTok" className="h-7 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://cdn.simpleicons.org/tiktok/white"/>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="animate-on-scroll delay-700 z-20 w-full relative mb-24 md:mb-32" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="flex justify-center mb-6">
<span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-300 backdrop-blur-sm shadow-xl text-center">
              Assista como funciona o método
            </span>
</div>
<div className="relative max-w-5xl mx-auto group px-0 sm:px-2 md:px-0">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-amber-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="relative rounded-xl md:rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl video-glow overflow-hidden transform transition-all duration-500 group-hover:scale-[1.005]">
<div className="h-9 bg-zinc-900/90 backdrop-blur-md border-b border-white/5 flex items-center px-4 justify-between select-none">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
<div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
<div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
</div>
<div className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest hidden sm:block">
                  VideoMake 5K • Aula Experimental
                </div>
<div className="w-12"></div>
</div>
<div className="aspect-video w-full bg-black relative group cursor-pointer overflow-hidden">
<img alt="VSL Thumbnail" className="transition-all duration-700 group-hover:scale-105 group-hover:opacity-40 opacity-60 w-full h-full object-cover" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="flex z-10 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="flex transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] bg-white/10 w-16 h-16 md:w-20 md:h-20 border-white/20 border rounded-full shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-md items-center justify-center">
<svg className="ml-1 w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5v14l11-7z"></path>
</svg>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
<div className="h-full w-1/3 bg-blue-500"></div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full relative z-10 mb-20 md:mb-32">

<div className="absolute inset-0 z-[-1] overflow-hidden rounded-[2.5rem]">
<div className="absolute -top-[20%] left-[20%] w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
<div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-indigo-600/5 blur-[80px] rounded-full pointer-events-none"></div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative mb-16 lg:mb-20">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-medium text-blue-400 backdrop-blur-md">
<svg className="lucide lucide-sparkles" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
<span className="tracking-wide uppercase">Minha Trajetória</span>
</div>
<h2 className="md:text-5xl leading-[1.1] text-3xl font-semibold text-white tracking-tight font-poppins">
                Transformei vontade em resultados
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                  usando só um celular.
                </span>
</h2>
<p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light max-w-lg">
                Não comecei com equipamentos caros. Minha jornada foi construída
                passo a passo, evoluindo a cada frame. Hoje ensino você a
                trilhar o mesmo caminho.
              </p>

<div className="grid grid-cols-3 gap-4 sm:flex sm:flex-row sm:gap-8 pt-6 border-t border-white/5 mt-6 sm:border-0 sm:pt-4 sm:mt-0">
<div className="space-y-1 text-center sm:text-left">
<div className="text-xl sm:text-2xl font-bold text-white">
                    4+ Anos
                  </div>
<div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider">
                    Experiência
                  </div>
</div>
<div className="w-px h-12 bg-white/10 hidden sm:block"></div>
<div className="space-y-1 text-center sm:text-left">
<div className="text-xl sm:text-2xl font-bold text-white">
                    10M+
                  </div>
<div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider">
                    Views Geradas
                  </div>
</div>
<div className="w-px h-12 bg-white/10 hidden sm:block"></div>
<div className="space-y-1 text-center sm:text-left">
<div className="text-xl sm:text-2xl font-bold text-white">
                    600+
                  </div>
<div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider">
                    Projetos
                  </div>
</div>
</div>
</div>

<div className="relative h-[300px] sm:h-[450px] w-full overflow-hidden mask-vertical-fade bg-zinc-900/20 rounded-2xl border border-white/5 backdrop-blur-sm -rotate-2 scale-95 hover:scale-100 transition-transform duration-700 shadow-2xl mt-8 lg:mt-0">
<div className="grid grid-cols-2 gap-4 absolute -top-[100px] w-full px-4 transform rotate-2 scale-110">

<div className="flex flex-col gap-4" style={{animation: 'marquee-vertical-up 40s linear infinite'}}>

<div className="w-full h-48 rounded-xl overflow-hidden shadow-lg border border-white/10 relative group">
<div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
<img alt="Camera Setup" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border border-white/10 relative group">
<div className="group-hover:opacity-0 transition-opacity bg-blue-500/20 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Landscape" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60d805ec-1158-4eb8-bf10-22497e4f6526_800w.jpg"/>
</div>
<div className="w-full h-48 rounded-xl overflow-hidden shadow-lg border border-white/10 relative group">
<div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
<img alt="Editing" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d64c7aa-c863-4b1f-a2e8-e9cb1f8aff6f_320w.jpg"/>
</div>

<div className="w-full h-48 rounded-xl overflow-hidden shadow-lg border border-white/10 relative group">
<div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
<img alt="Camera Setup" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/24c2a31c-6034-44c5-87cf-b05685382620_320w.jpg"/>
</div>
<div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border border-white/10 relative group">
<div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
<img alt="Landscape" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebe6dff6-d71c-4071-90c2-4950026e2751_320w.jpg"/>
</div>
<div className="w-full h-48 rounded-xl overflow-hidden shadow-lg border border-white/10 relative group">
<div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
<img alt="Editing" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c9a8aca-0d85-4509-9259-c67171f5a29a_320w.jpg"/>
</div>
</div>

<div className="flex flex-col gap-4 pt-12" style={{animation: 'marquee-vertical-down 45s linear infinite'}}>

<div className="w-full h-56 rounded-xl overflow-hidden shadow-lg border border-white/10 relative group">
<div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
<img alt="Analysis" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/901769aa-2060-46bc-bb6f-7992fd4c6656_320w.jpg"/>
</div>
<div className="w-full h-40 rounded-xl overflow-hidden shadow-lg border border-white/10 relative group">
<div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
<img alt="Meeting" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ab9ca1e-5b4c-4023-85d3-87131708928a_320w.jpg"/>
</div>
<div className="w-full h-52 rounded-xl overflow-hidden shadow-lg border border-white/10 relative group">
<div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
<img alt="Social Media" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fee499f7-cf27-4727-9caf-09797adf0a6b_320w.jpg"/>
</div>

<div className="w-full h-56 rounded-xl overflow-hidden shadow-lg border border-white/10 relative group">
<div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
<img alt="Analysis" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eceec428-4631-49a0-a34a-0044dc64c6cb_320w.jpg"/>
</div>
<div className="w-full h-40 rounded-xl overflow-hidden shadow-lg border border-white/10 relative group">
<div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
<img alt="Meeting" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/671022e8-12f7-46d5-9ac2-19419fce2fbb_800w.jpg"/>
</div>
<div className="w-full h-52 rounded-xl overflow-hidden shadow-lg border border-white/10 relative group">
<div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
<img alt="Social Media" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a55dfeb4-3d6b-42f6-8bc7-5ba7b199ac42_320w.jpg"/>
</div>
</div>
</div>
</div>
</div>

<div className="w-full relative">
<div className="text-center mb-8">
<p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                Resultados Reais
              </p>
</div>
<div className="relative w-full mask-linear-fade">
<div className="flex gap-6 items-stretch h-[180px]" style={{animation: 'marquee 35s linear infinite'}}>

<div className="w-[300px] shrink-0 bg-[#0f0f11] border border-white/5 p-5 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors">
<div className="flex gap-3 items-center">
<div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold border border-blue-500/30">
                      L
                    </div>
<div className="">
<p className="text-sm font-semibold text-white">
                        Lucas Silva
                      </p>
<p className="text-[10px] text-zinc-400">@lucasvids</p>
</div>
</div>
<p className="text-xs text-zinc-300 leading-relaxed mt-3">
                    "Fechei meu primeiro contrato de 2k na segunda semana. O
                    método é direto ao ponto."
                  </p>
<div className="flex text-amber-400 gap-0.5 mt-3">
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
</div>

<div className="w-[300px] shrink-0 bg-[#0f0f11] border border-white/5 p-5 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors">
<div className="flex gap-3 items-center">
<div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/30">
                      M
                    </div>
<div className="">
<p className="text-sm font-semibold text-white">
                        Mariana Costa
                      </p>
<p className="text-[10px] text-zinc-400">@maricosta</p>
</div>
</div>
<p className="text-xs text-zinc-300 leading-relaxed mt-3">
                    "Sempre achei que precisava de câmera cara. Fiz 3k mês
                    passado só com iPhone."
                  </p>
<div className="flex text-amber-400 gap-0.5 mt-3">
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
</div>

<div className="w-[300px] shrink-0 bg-[#0f0f11] border border-white/5 p-5 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors">
<div className="flex gap-3 items-center">
<div className="w-10 h-10 rounded-full bg-emerald-600/20 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/30">
                      P
                    </div>
<div>
<p className="text-sm font-semibold text-white">
                        Pedro Santos
                      </p>
<p className="text-[10px] text-zinc-400">@pedro.edit</p>
</div>
</div>
<p className="text-xs text-zinc-300 leading-relaxed mt-3">
                    "A didática é incrível. Saí do zero e hoje edito vídeos para
                    3 imobiliárias da minha cidade."
                  </p>
<div className="flex text-amber-400 gap-0.5 mt-3">
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
</div>

<div className="w-[300px] shrink-0 bg-[#0f0f11] border border-white/5 p-5 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors">
<div className="flex gap-3 items-center">
<div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold border border-blue-500/30">
                      L
                    </div>
<div>
<p className="text-sm font-semibold text-white">
                        Lucas Silva
                      </p>
<p className="text-[10px] text-zinc-400">@lucasvids</p>
</div>
</div>
<p className="text-xs text-zinc-300 leading-relaxed mt-3">
                    "Fechei meu primeiro contrato de 2k na segunda semana. O
                    método é direto ao ponto."
                  </p>
<div className="flex text-amber-400 gap-0.5 mt-3">
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="z-10 animate-on-scroll delay-200 w-full relative mb-12 md:mb-32" style={{opacity: '1', transform: 'translateY(0px)'}}>

<div className="absolute inset-0 -z-10 mx-auto w-full max-w-[90rem]">
<div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm rounded-[2rem] md:rounded-[3rem] border border-white/5 overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse pointer-events-none"></div>
<div className="absolute -bottom-32 left-0 right-0 h-[300px] bg-gradient-to-t from-black/80 to-transparent"></div>
</div>
</div>
<div className="md:px-8 md:py-24 py-12 px-4 font-manrope relative w-full">
<style>
              @keyframes soft-pulse {
                0%, 100% { opacity: 0.1; transform: scale(1); }
                50% { opacity: 0.2; transform: scale(1.1); }
              }
            </style>
<div className="absolute inset-0 pointer-events-none -z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-screen animate-[soft-pulse_8s_ease-in-out_infinite]"></div>
</div>

<div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 px-2 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-medium text-zinc-400 mb-6 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default shadow-sm">
<svg className="lucide lucide-trending-up text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
<span className="tracking-wide uppercase">Potencial de Lucro</span>
</div>
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight font-poppins mb-4 leading-[1.1]">
                A matemática do
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                  seu crescimento
                </span>
</h2>
<p className="text-zinc-400 text-sm md:text-lg leading-relaxed font-light max-w-xl mx-auto">
                Entenda o potencial financeiro real de cada fase da sua jornada
                como Videomaker, do zero à escala.
              </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 w-full max-w-7xl mx-auto">

<div className="w-full h-full group relative flex flex-col">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 blur-xl"></div>
<div className="h-full bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[24px] p-5 md:p-8 hover:border-blue-500/30 transition-all duration-300 flex flex-col relative overflow-hidden group-hover:-translate-y-1">

<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-20"></div>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                        Iniciante
                      </h3>
<p className="text-sm text-zinc-500 mt-1 font-medium">
                        Primeiros 30 dias
                      </p>
</div>
<div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
<svg className="lucide lucide-sprout" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 20h10"></path>
<path d="M10 20c5.5-2.5.8-6.4 3-10"></path>
<path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.6"></path>
<path d="M14 14.3c-1.1-1.1-2.5-1.8-3.9-2.3"></path>
<path d="M12 2.9c-1.9-4-12.1 2-10.2 6 2.3 4.8 8.5-5.6 12.5-2.6 4-2.2 7.9-2.3 10.4.2 2.5 2.5 2.4 6.4.2 10.4"></path>
</svg>
</div>
</div>
<div className="space-y-4 mb-6 md:mb-8 flex-grow">
<div className="p-4 rounded-2xl bg-black/20 border border-white/5 group-hover:bg-black/40 transition-colors">
<p className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold mb-1">
                        Preço por vídeo
                      </p>
<div className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                        R$ 80 - 150
                      </div>
</div>
<div className="space-y-2.5 pt-2">
<div className="flex items-center gap-3 text-sm text-zinc-400 font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                        Reels simples
                      </div>
<div className="flex items-center gap-3 text-sm text-zinc-400 font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                        Vídeos de ambiente
                      </div>
</div>
</div>
<div className="mt-auto pt-4 md:pt-5 border-t border-white/5">
<div className="flex items-baseline justify-between">
<span className="text-xs uppercase tracking-wide text-zinc-500 font-semibold">
                        Potencial
                      </span>
<span className="text-lg font-bold text-blue-400">
                        Até R$ 3.000
                      </span>
</div>
</div>
</div>
</div>

<div className="w-full h-full group relative md:-mt-4 md:mb-4 flex flex-col z-10">

<div className="absolute -inset-[1px] rounded-[25px] overflow-hidden">
<div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#f59e0b_50%,transparent_100%)] opacity-70"></div>
</div>
<div className="h-full bg-[#121214] relative rounded-[24px] p-5 md:p-8 flex flex-col shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">

<div className="absolute top-0 right-0 p-4">
<div className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold uppercase tracking-wider text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                      Popular
                    </div>
</div>
<div className="flex justify-between items-start mb-6">
<div className="">
<h3 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
                        Intermediário
                      </h3>
<p className="text-sm text-zinc-500 mt-1 font-medium">
                        1 a 3 meses
                      </p>
</div>
</div>
<div className="space-y-4 mb-6 md:mb-8 flex-grow">
<div className="p-4 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-amber-500/20 shadow-inner relative overflow-hidden group-hover:border-amber-500/40 transition-colors">
<div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/10 blur-2xl rounded-full -mr-10 -mt-10 animate-pulse"></div>
<p className="text-[10px] uppercase tracking-wider text-amber-500/80 font-bold mb-1">
                        Preço por vídeo
                      </p>
<div className="md:text-4xl text-3xl font-bold text-white tracking-tight">
                        R$ 150 - 250
                      </div>
</div>
<div className="space-y-2.5 pt-2">
<div className="flex items-center gap-3 text-sm text-zinc-300 font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_5px_rgba(245,158,11,0.5)]"></div>
                        Edição dinâmica (Cortes)
                      </div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_5px_rgba(245,158,11,0.5)]"></div>
                        Legendas animadas
                      </div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_5px_rgba(245,158,11,0.5)]"></div>
                        Transições criativas
                      </div>
</div>
</div>
<div className="mt-auto pt-6 border-t border-white/10">
<div className="flex items-baseline justify-between">
<span className="text-xs uppercase tracking-wide text-zinc-400 font-semibold">
                        Potencial
                      </span>
<span className="text-xl font-bold text-amber-400">
                        Até R$ 5.000
                      </span>
</div>
</div>
</div>
</div>

<div className="w-full h-full group relative flex flex-col">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 blur-xl"></div>
<div className="h-full bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[24px] p-5 md:p-8 hover:border-purple-500/30 transition-all duration-300 flex flex-col group-hover:-translate-y-1">

<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-20"></div>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                        Avançado
                      </h3>
<p className="text-sm text-zinc-500 mt-1 font-medium">
                        3 meses+
                      </p>
</div>
<div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
<svg className="lucide lucide-crown" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
</svg>
</div>
</div>
<div className="space-y-4 mb-6 md:mb-8 flex-grow">
<div className="p-4 rounded-2xl bg-black/20 border border-white/5 group-hover:bg-black/40 transition-colors">
<p className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold mb-1">
                        Preço por vídeo
                      </p>
<div className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                        R$ 250 - 600+
                      </div>
</div>
<div className="space-y-2.5 pt-2">
<div className="flex items-center gap-3 text-sm text-zinc-400 font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                        Comerciais completos
                      </div>
<div className="flex items-center gap-3 text-sm text-zinc-400 font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                        Storytelling complexo
                      </div>
</div>
</div>
<div className="mt-auto pt-4 md:pt-5 border-t border-white/5">
<div className="flex items-baseline justify-between">
<span className="text-xs uppercase tracking-wide text-zinc-500 font-semibold">
                        Potencial
                      </span>
<span className="text-lg font-bold text-purple-400">
                        R$ 10.000+
                      </span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 md:mt-12 flex justify-center px-2">
<div className="inline-flex items-center gap-3 px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-zinc-900/80 border border-white/10 shadow-lg backdrop-blur-xl hover:bg-zinc-800 hover:border-white/20 transition-all group cursor-default text-center">
<span className="relative flex h-2 w-2 shrink-0">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs md:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                  Iniciantes ganham dinheiro já na
                  <span className="text-emerald-400 font-semibold">
                    primeira semana
                  </span>
</span>
</div>
</div>
</div>
</div>

<div className="w-full relative z-20 mb-12 md:mb-32">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="relative w-full z-20 py-8 md:py-20 max-w-7xl mx-auto px-4 md:px-8">

<div className="text-center mb-10 md:mb-20">
<div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[11px] font-bold text-blue-400 uppercase tracking-widest backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Grade Curricular
              </div>
<h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-poppins mb-3 md:mb-6 leading-tight">
                Domine cada etapa da
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 animate-pulse">
                  produção
                </span>
</h2>
<p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
                Uma estrutura completa desenhada para te levar do zero ao
                profissional. Veja o que você vai aprender em cada módulo.
              </p>
</div>

<div className="relative flex justify-center gap-6 mt-10 mask-vertical-heavy max-h-[700px] overflow-hidden">

<div className="flex flex-col gap-6" style={{animation: 'marquee-vertical-up 45s linear infinite'}}>

<div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 w-[300px] sm:w-[320px] backdrop-blur-md group hover:border-blue-500/30 transition-all duration-300">
<div className="w-full aspect-video rounded-xl overflow-hidden bg-black relative mb-4">
<div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&amp;q=80"/>
<div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white border border-white/10">01:15:00</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold">01</span>
<h3 className="text-white font-semibold text-sm">Mindset &amp; Início</h3>
</div>
<p className="text-xs text-zinc-400 leading-relaxed">Prepare sua mente e alinhe expectativas para começar sua jornada no audiovisual.</p>
</div>

<div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 w-[300px] sm:w-[320px] backdrop-blur-md group hover:border-emerald-500/30 transition-all duration-300">
<div className="w-full aspect-video rounded-xl overflow-hidden bg-black relative mb-4">
<div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay"></div>
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&amp;q=80"/>
<div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white border border-white/10">02:30:00</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">04</span>
<h3 className="text-white font-semibold text-sm">Roteiro Criativo</h3>
</div>
<p className="text-xs text-zinc-400 leading-relaxed">Como estruturar histórias que prendem a atenção do primeiro ao último segundo.</p>
</div>

<div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 w-[300px] sm:w-[320px] backdrop-blur-md group hover:border-amber-500/30 transition-all duration-300">
<div className="w-full aspect-video rounded-xl overflow-hidden bg-black relative mb-4">
<div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay"></div>
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&amp;q=80"/>
<div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white border border-white/10">03:10:00</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold">07</span>
<h3 className="text-white font-semibold text-sm">Vendas &amp; Negociação</h3>
</div>
<p className="text-xs text-zinc-400 leading-relaxed">Precificação, contratos e como fechar com clientes de alto ticket sem medo.</p>
</div>

<div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 w-[300px] sm:w-[320px] backdrop-blur-md group hover:border-blue-500/30 transition-all duration-300">
<div className="w-full aspect-video rounded-xl overflow-hidden bg-black relative mb-4">
<div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&amp;q=80"/>
<div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white border border-white/10">01:15:00</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold">01</span>
<h3 className="text-white font-semibold text-sm">Mindset &amp; Início</h3>
</div>
<p className="text-xs text-zinc-400 leading-relaxed">Prepare sua mente e alinhe expectativas para começar sua jornada no audiovisual.</p>
</div>
<div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 w-[300px] sm:w-[320px] backdrop-blur-md group hover:border-emerald-500/30 transition-all duration-300">
<div className="w-full aspect-video rounded-xl overflow-hidden bg-black relative mb-4">
<div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay"></div>
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&amp;q=80"/>
<div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white border border-white/10">02:30:00</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">04</span>
<h3 className="text-white font-semibold text-sm">Roteiro Criativo</h3>
</div>
<p className="text-xs text-zinc-400 leading-relaxed">Como estruturar histórias que prendem a atenção do primeiro ao último segundo.</p>
</div>
</div>

<div className="hidden md:flex flex-col gap-6" style={{animation: 'marquee-vertical-up 55s linear infinite'}}>

<div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 w-[300px] sm:w-[320px] backdrop-blur-md group hover:border-indigo-500/30 transition-all duration-300">
<div className="w-full aspect-video rounded-xl overflow-hidden bg-black relative mb-4">
<div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay"></div>
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&amp;q=80"/>
<div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white border border-white/10">00:45:00</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px] font-bold">02</span>
<h3 className="text-white font-semibold text-sm">Equipamentos</h3>
</div>
<p className="text-xs text-zinc-400 leading-relaxed">O que comprar e o que evitar. Kits essenciais para todos os orçamentos.</p>
</div>

<div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 w-[300px] sm:w-[320px] backdrop-blur-md group hover:border-purple-500/30 transition-all duration-300">
<div className="w-full aspect-video rounded-xl overflow-hidden bg-black relative mb-4">
<div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay"></div>
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&amp;q=80"/>
<div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white border border-white/10">01:45:00</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-[10px] font-bold">05</span>
<h3 className="text-white font-semibold text-sm">Apps &amp; IA</h3>
</div>
<p className="text-xs text-zinc-400 leading-relaxed">Ferramentas de Inteligência Artificial para acelerar sua edição em 10x.</p>
</div>

<div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 w-[300px] sm:w-[320px] backdrop-blur-md group hover:border-pink-500/30 transition-all duration-300">
<div className="w-full aspect-video rounded-xl overflow-hidden bg-black relative mb-4">
<div className="absolute inset-0 bg-pink-500/10 mix-blend-overlay"></div>
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&amp;q=80"/>
<div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white border border-white/10">02:10:00</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-[10px] font-bold">08</span>
<h3 className="text-white font-semibold text-sm">Tráfego Pago</h3>
</div>
<p className="text-xs text-zinc-400 leading-relaxed">Como impulsionar seus vídeos para alcançar os clientes certos na sua região.</p>
</div>

<div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 w-[300px] sm:w-[320px] backdrop-blur-md group hover:border-indigo-500/30 transition-all duration-300">
<div className="w-full aspect-video rounded-xl overflow-hidden bg-black relative mb-4">
<div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay"></div>
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&amp;q=80"/>
<div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white border border-white/10">00:45:00</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px] font-bold">02</span>
<h3 className="text-white font-semibold text-sm">Equipamentos</h3>
</div>
<p className="text-xs text-zinc-400 leading-relaxed">O que comprar e o que evitar. Kits essenciais para todos os orçamentos.</p>
</div>
<div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 w-[300px] sm:w-[320px] backdrop-blur-md group hover:border-purple-500/30 transition-all duration-300">
<div className="w-full aspect-video rounded-xl overflow-hidden bg-black relative mb-4">
<div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay"></div>
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&amp;q=80"/>
<div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white border border-white/10">01:45:00</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-[10px] font-bold">05</span>
<h3 className="text-white font-semibold text-sm">Apps &amp; IA</h3>
</div>
<p className="text-xs text-zinc-400 leading-relaxed">Ferramentas de Inteligência Artificial para acelerar sua edição em 10x.</p>
</div>
</div>

<div className="hidden lg:flex flex-col gap-6" style={{animation: 'marquee-vertical-up 40s linear infinite'}}>

<div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 w-[300px] sm:w-[320px] backdrop-blur-md group hover:border-cyan-500/30 transition-all duration-300">
<div className="w-full aspect-video rounded-xl overflow-hidden bg-black relative mb-4">
<div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay"></div>
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&amp;q=80"/>
<div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white border border-white/10">03:40:00</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px] font-bold">03</span>
<h3 className="text-white font-semibold text-sm">Produção Prática</h3>
</div>
<p className="text-xs text-zinc-400 leading-relaxed">Iluminação, enquadramento e áudio. Técnicas profissionais usando celular.</p>
</div>

<div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 w-[300px] sm:w-[320px] backdrop-blur-md group hover:border-orange-500/30 transition-all duration-300">
<div className="w-full aspect-video rounded-xl overflow-hidden bg-black relative mb-4">
<div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay"></div>
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1574717436423-a7566e342209?w=400&amp;q=80"/>
<div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white border border-white/10">04:20:00</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[10px] font-bold">06</span>
<h3 className="text-white font-semibold text-sm">Edição Avançada</h3>
</div>
<p className="text-xs text-zinc-400 leading-relaxed">Transições, color grading e sound design. Domine a pós-produção mobile.</p>
</div>

<div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 w-[300px] sm:w-[320px] backdrop-blur-md group hover:border-yellow-500/30 transition-all duration-300">
<div className="w-full aspect-video rounded-xl overflow-hidden bg-black relative mb-4">
<div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay"></div>
</div></div></div></div></div></div></div></main>
    </>
  );
}
