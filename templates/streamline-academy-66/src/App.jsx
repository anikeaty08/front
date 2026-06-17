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



        lucide.createIcons();
    
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
      
<div className="flex h-screen w-full">

<aside className="hidden xl:flex w-72 flex-col justify-between border-r border-white/5 bg-[#030014] p-6 shrink-0 z-20">
<div className="">

<div className="mb-12 flex items-center gap-3 pl-2">
<div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-[#7038F2] to-[#9D68F7] shadow-[0_0_15px_rgba(112,56,242,0.4)]"></div>
<span className="text-xl font-semibold text-white tracking-tight">Academy<span className="text-[#7038F2]">.</span></span>
</div>

<nav className="space-y-1">
<a className="group flex items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-400 transition-all hover:bg-white/[0.03] hover:text-white" href="#">
<svg className="lucide lucide-layout-grid h-5 w-5 text-slate-500 transition-colors group-hover:text-[#9D68F7]" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
                        Dashboard
                    </a>
<a className="group flex items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-medium text-white bg-white/[0.06] border border-white/5 shadow-inner" href="#">
<svg className="lucide lucide-play-circle h-5 w-5 text-[#9D68F7]" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        Meus Cursos
                    </a>
<a className="group flex items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-400 transition-all hover:bg-white/[0.03] hover:text-white" href="#">
<svg className="lucide lucide-compass h-5 w-5 text-slate-500 transition-colors group-hover:text-[#9D68F7]" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        Explorar
                    </a>
<a className="group flex items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-400 transition-all hover:bg-white/[0.03] hover:text-white" href="#">
<svg className="lucide lucide-message-square h-5 w-5 text-slate-500 transition-colors group-hover:text-[#9D68F7]" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                        Mentoria
                    </a>
</nav>
</div>

<div className="border-t border-white/5 pt-6">
<button className="group flex w-full items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/[0.03]">
<div className="h-10 w-10 overflow-hidden rounded-full border border-white/10">
<img alt="User" className="h-full w-full object-cover opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex flex-col items-start">
<span className="text-sm font-medium text-white">Victor</span>
<span className="text-xs text-slate-500">Membro Pro</span>
</div>
<svg className="lucide lucide-chevron-right ml-auto h-4 w-4 text-slate-600 group-hover:text-white" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-[#030014] scroll-smooth no-scrollbar relative pb-20">

<div className="xl:hidden sticky top-0 left-0 right-0 z-50 flex items-center justify-between bg-[#030014]/90 p-4 backdrop-blur-xl border-b border-white/5">
<span className="text-lg font-semibold tracking-tight text-white">Academy<span className="text-[#7038F2]">.</span></span>
<button className="text-white"><svg className="lucide lucide-menu h-6 w-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg></button>
</div>

<div className="mt-4 xl:mt-6 w-[99%] mx-auto h-[40vh] relative rounded-3xl overflow-hidden border border-white/10">
<img alt="Hero" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/40 to-transparent"></div>
<div className="bg-gradient-to-r from-[#030014] via-[#030014]/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-10 left-6 md:left-12 max-w-2xl">
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#7038F2]/30 bg-[#7038F2]/10 px-3 py-1 text-xs font-medium text-[#9D68F7] backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7038F2] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#7038F2]"></span>
</span>
                        Novo Lançamento
                    </div>
<h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">Arquitetura de Sistemas</h1>
<p className="text-slate-400 text-sm md:text-base max-w-lg leading-relaxed mb-8">Domine escala, confiabilidade e manutenibilidade com nossa nova trilha completa para engenheiros seniores.</p>
<button className="rounded-xl bg-white text-[#030014] px-6 py-3 text-sm font-semibold hover:bg-slate-200 transition-colors">Começar Agora</button>
</div>
</div>

<section className="mt-10 w-[99%] mx-auto p-2">
<div className="mb-6 flex items-end justify-between px-2">
<div>
<h3 className="text-xl font-medium tracking-tight text-white">Continuar Assistindo</h3>
<p className="mt-1 text-sm text-slate-500">Retome de onde você parou.</p>
</div>
<div className="flex gap-2">
<button className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 text-slate-400 hover:text-white transition-colors"><svg className="lucide lucide-chevron-left h-4 w-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<button className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 text-slate-400 hover:text-white transition-colors"><svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">

<div className="group relative h-[520px] w-full cursor-pointer overflow-hidden rounded-[2rem] bg-[#0A051E] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(112,56,242,0.2)]">

<img alt="Course" className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/20 to-transparent opacity-90"></div>
<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030014]/60 to-transparent"></div>

<div className="absolute top-0 h-1 w-full bg-white/5">
<div className="h-full w-[85%] bg-[#7038F2] shadow-[0_0_10px_#7038F2]"></div>
</div>

<div className="absolute top-6 right-6">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white transition-all group-hover:bg-[#7038F2] group-hover:border-[#7038F2]">
<svg className="lucide lucide-play h-4 w-4 fill-current ml-0.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full pointer-events-none">
<div className="mt-auto">
<span className="inline-block mb-3 text-[10px] font-bold uppercase tracking-widest text-[#9D68F7]">Frontend</span>
<h4 className="text-2xl font-semibold leading-tight text-white mb-2">Performance em React</h4>
<div className="flex items-center gap-3 text-xs text-slate-400">
<span className="flex items-center gap-1"><svg className="lucide lucide-clock h-3 w-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 4h 12m</span>
<span className="h-1 w-1 rounded-full bg-slate-600"></span>
<span>85% Concluído</span>
</div>
</div>
</div>
</div>

<div className="group relative h-[520px] w-full cursor-pointer overflow-hidden rounded-[2rem] bg-[#0A051E] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(112,56,242,0.2)]">
<img alt="Course" className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-50" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/20 to-transparent opacity-90"></div>
<div className="absolute top-0 h-1 w-full bg-white/5">
<div className="h-full w-[30%] bg-[#7038F2] shadow-[0_0_10px_#7038F2]"></div>
</div>
<div className="absolute top-6 right-6">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white transition-all group-hover:bg-[#7038F2] group-hover:border-[#7038F2]">
<svg className="lucide lucide-play h-4 w-4 fill-current ml-0.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full pointer-events-none">
<div className="mt-auto">
<span className="inline-block mb-3 text-[10px] font-bold uppercase tracking-widest text-[#9D68F7]">Design</span>
<h4 className="text-2xl font-semibold leading-tight text-white mb-2">UI/UX Avançado</h4>
<div className="flex items-center gap-3 text-xs text-slate-400">
<span className="flex items-center gap-1"><svg className="lucide lucide-clock h-3 w-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 2h 45m</span>
<span className="h-1 w-1 rounded-full bg-slate-600"></span>
<span>30% Concluído</span>
</div>
</div>
</div>
</div>

<div className="group relative h-[520px] w-full cursor-pointer overflow-hidden rounded-[2rem] bg-[#0A051E] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(112,56,242,0.2)]">
<img alt="Course" className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/20 to-transparent opacity-90"></div>
<div className="absolute top-6 right-6">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white transition-all group-hover:bg-[#7038F2] group-hover:border-[#7038F2]">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full pointer-events-none">
<div className="mt-auto">
<span className="inline-block mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">Backend</span>
<h4 className="text-2xl font-semibold leading-tight text-white mb-2">Microsserviços Node.js</h4>
<div className="flex items-center gap-3 text-xs text-slate-400">
<span className="flex items-center gap-1"><svg className="lucide lucide-bar-chart h-3 w-3" data-lucide="bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V9"></path><path d="M19 21V3"></path></svg> Intermediário</span>
<span className="h-1 w-1 rounded-full bg-slate-600"></span>
<span>6h 30m</span>
</div>
</div>
</div>
</div>

<div className="group relative h-[520px] w-full cursor-pointer overflow-hidden rounded-[2rem] bg-[#0A051E] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(112,56,242,0.2)]">
<img alt="Course" className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-50" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/20 to-transparent opacity-90"></div>
<div className="absolute top-6 right-6">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white transition-all group-hover:bg-[#7038F2] group-hover:border-[#7038F2]">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full pointer-events-none">
<div className="mt-auto">
<span className="inline-block mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">DevOps</span>
<h4 className="text-2xl font-semibold leading-tight text-white mb-2">Docker e Kubernetes</h4>
<div className="flex items-center gap-3 text-xs text-slate-400">
<span className="flex items-center gap-1"><svg className="lucide lucide-bar-chart h-3 w-3" data-lucide="bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V9"></path><path d="M19 21V3"></path></svg> Avançado</span>
<span className="h-1 w-1 rounded-full bg-slate-600"></span>
<span>8h 15m</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-16 w-[99%] mx-auto p-2 pb-10">
<div className="mb-6 flex items-center gap-3 px-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7038F2]/10 text-[#9D68F7] border border-[#7038F2]/20">
<svg className="lucide lucide-lock h-4 w-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-white">Masterclasses</h3>
<p className="text-sm text-slate-500">Conteúdo premium para assinantes.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">

<div className="group relative h-[520px] w-full overflow-hidden rounded-[2rem] bg-[#050210] border border-white/5">

<img alt="Thumbnail" className="h-full w-full object-cover opacity-30 grayscale blur-[3px] transition-all duration-700 group-hover:blur-[5px] group-hover:scale-105" src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 group-hover:opacity-0">
<div className="rounded-full bg-black/40 p-4 border border-white/10 backdrop-blur-md">
<svg className="lucide lucide-lock h-6 w-6 text-white/40" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent"></div>

<div className="absolute bottom-0 left-0 right-0 p-8 z-10 transition-opacity duration-300 group-hover:opacity-10">
<h4 className="text-xl font-semibold text-slate-500 text-center">Arquitetura Web3</h4>
</div>

<div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#030014]/80 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
<svg className="lucide lucide-shield-check h-10 w-10 text-[#7038F2] mb-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<p className="px-8 text-center text-sm font-medium leading-relaxed text-slate-300">
                                Acesso exclusivo paraassinantes desse curso
                            </p>
<button className="mt-6 rounded-full bg-[#7038F2] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(112,56,242,0.4)] hover:bg-[#5e2cc4] transition-colors">
                                Desbloquear
                            </button>
</div>
</div>

<div className="group relative h-[520px] w-full overflow-hidden rounded-[2rem] bg-[#050210] border border-white/5">
<img alt="Thumbnail" className="h-full w-full object-cover opacity-30 grayscale blur-[3px] transition-all duration-700 group-hover:blur-[5px] group-hover:scale-105" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 group-hover:opacity-0">
<div className="rounded-full bg-black/40 p-4 border border-white/10 backdrop-blur-md">
<svg className="lucide lucide-lock h-6 w-6 text-white/40" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 z-10 transition-opacity duration-300 group-hover:opacity-10">
<h4 className="text-xl font-semibold text-slate-500 text-center">Hacking Ético</h4>
</div>
<div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#030014]/80 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
<svg className="lucide lucide-shield-check h-10 w-10 text-[#7038F2] mb-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<p className="px-8 text-center text-sm font-medium leading-relaxed text-slate-300">
                                Acesso exclusivo paraassinantes desse curso
                            </p>
<button className="mt-6 rounded-full bg-[#7038F2] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(112,56,242,0.4)] hover:bg-[#5e2cc4] transition-colors">
                                Desbloquear
                            </button>
</div>
</div>

<div className="group relative h-[520px] w-full overflow-hidden rounded-[2rem] bg-[#050210] border border-white/5">
<img alt="Thumbnail" className="h-full w-full object-cover opacity-30 grayscale blur-[3px] transition-all duration-700 group-hover:blur-[5px] group-hover:scale-105" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 group-hover:opacity-0">
<div className="rounded-full bg-black/40 p-4 border border-white/10 backdrop-blur-md">
<svg className="lucide lucide-lock h-6 w-6 text-white/40" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 z-10 transition-opacity duration-300 group-hover:opacity-10">
<h4 className="text-xl font-semibold text-slate-500 text-center">Segurança em Nuvem</h4>
</div>
<div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#030014]/80 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
<svg className="lucide lucide-shield-check h-10 w-10 text-[#7038F2] mb-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<p className="px-8 text-center text-sm font-medium leading-relaxed text-slate-300">
                                Acesso exclusivo paraassinantes desse curso
                            </p>
<button className="mt-6 rounded-full bg-[#7038F2] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(112,56,242,0.4)] hover:bg-[#5e2cc4] transition-colors">
                                Desbloquear
                            </button>
</div>
</div>
</div>
</section>
</main>
</div>

<div className="host-bincmiainjofjnhchmcalkanjebghoen" style={{position: 'relative', zIndex: '2147483647'}}></div>
    </>
  );
}
