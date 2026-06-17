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
fontFamily: {
sans: ['Geist', 'sans-serif'],
},
colors: {
brand: {
lime: '#c1ff72',
},
neutral: {
50: '#fafafa',
100: '#f5f5f5',
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#171717',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'clip-in': 'clipIn 1.2s cubic-bezier(0.25, 1, 0.5, 1) both',
'fade-up': 'fadeUp 0.8s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
clipIn: {
'0%': { opacity: '0', clipPath: 'inset(0 0 100% 0)' },
'100%': { opacity: '1', clipPath: 'inset(0 0 0 0)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        function handleSpotlight(e) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
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
      

<header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-stone-200/50">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">

<a className="block group text-2xl lg:text-3xl font-semibold tracking-tighter font-google-sans-flex" href="#">
                Nect<span className="transition-colors text-slate-950">Arr</span>
</a>

<nav className="hidden lg:flex font-montserrat gap-x-10 items-center">
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-600" href="#">Diferenciais</a>
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-600" href="#">Produtos</a>
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-600" href="#">Soluções</a>
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-600" href="#">Cases</a>
</nav>

<div className="flex gap-x-8 items-center">
<a className="hidden lg:block hover:text-[#7bb532] text-sm font-bold text-stone-900 font-montserrat" href="#">Login</a>
<button className="bg-stone-900 text-[#c1ff72] hover:bg-stone-800 transition-all font-medium px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg text-xs lg:text-sm flex items-center gap-2 group">
                    Falar com Especialista
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="fixed grid-lines w-full h-[100vh] top-0 right-0 left-0 pointer-events-none z-0"></div>
<div className="relative z-10 flex flex-col min-h-screen pt-16 lg:pt-20">

<main className="flex-1 w-full">

<section className="lg:px-12 lg:pt-16 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[60vh] lg:min-h-[75vh] max-w-[1600px] mr-auto ml-auto pt-8 pr-6 pb-12 pl-6 gap-x-8 gap-y-8 items-center">
<div className="animate-clip-in lg:col-span-7 space-y-6" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium bg-white border-stone-200 text-stone-600">
<span className="w-2 h-2 rounded-full bg-[#c1ff72] animate-pulse"></span>
                        Motor de Crescimento B2B
                    </div>

<h1 className="leading-[0.95] text-5xl lg:text-7xl xl:text-8xl font-medium text-stone-900 tracking-tighter">
                        Não encontre apenas leads, encontre o <span className="text-slate-950 font-google-sans-flex relative inline-block">NectArr
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#c1ff72] -z-10" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" opacity="0.4" stroke="currentColor" strokeWidth="8"></path></svg>
</span>.
                    </h1>
<p className="leading-relaxed text-lg lg:text-xl font-normal text-stone-500 font-montserrat max-w-2xl">
                        Unimos inteligência de dados, automação e SDRs de elite para encher sua agenda com decisores qualificados.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="glass-button all-unset cursor-pointer outline-none focus:outline-none z-30 pointer-events-auto text-base rounded-full relative group">
<span className="button-text relative block select-none font-semibold tracking-tight px-8 py-4 text-lg text-stone-900">
                                Agende uma call estratégica
                            </span>
<div className="button-shine"></div>
</button>
<div className="flex items-center gap-3 px-2 sm:px-4 mt-2 sm:mt-0">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs overflow-hidden border-white bg-stone-200"><img className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=33"/></div>
<div className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs overflow-hidden border-white bg-stone-200"><img className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=47"/></div>
<div className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs overflow-hidden border-white bg-stone-200"><img className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=12"/></div>
</div>
<div className="text-sm font-medium text-stone-600">
<span className="font-bold block leading-none text-stone-900">4.8/5.0</span>
<span className="text-xs text-stone-400">Rating de Clientes</span>
</div>
</div>
</div>
<style>
                    @property --angle-1 { syntax: "<angle>"; inherits: false; initial-value: -75deg; }
                    @property --angle-2 { syntax: "<angle>"; inherits: false; initial-value: -45deg; }
                    .glass-button {
                        background: linear-gradient(-75deg, rgba(193, 255, 114, 0.1), rgba(255, 255, 255, 0.5), rgba(193, 255, 114, 0.1));
                        box-shadow: inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05), inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5), 0 0.25em 0.125em -0.125em rgba(0, 0, 0, 0.2), 0 0 0.1em 0.25em rgba(193, 255, 114, 0.4) inset, 0 0 0 0 rgba(255, 255, 255, 1);
                        backdrop-filter: blur(4px);
                        transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
                    }
                    .glass-button:hover { transform: scale(0.98); }
                    .button-shine {
                        position: absolute; inset: 0; border-radius: 999px; width: calc(100% - 1px); height: calc(100% - 1px); top: 0.5px; left: 0.5px;
                        background: linear-gradient(var(--angle-2), rgba(255, 255, 255, 0) 0%, rgba(193, 255, 114, 0.5) 40% 50%, rgba(255, 255, 255, 0) 55%);
                        mix-blend-mode: screen; pointer-events: none; background-size: 200% 200%; background-position: 0% 50%; background-repeat: no-repeat;
                        transition: background-position 500ms, --angle-2 500ms;
                    }
                    .glass-button:hover .button-shine { background-position: 25% 50%; }
                    </style>
</div>

<div className="lg:col-span-5 flex flex-col h-full justify-center relative animate-fade-up mt-8 lg:mt-0" style={{animationDelay: '0.3s'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#c1ff72] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative space-y-4">

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:ml-0 max-w-sm mx-auto w-full" style={{animationDelay: '0s'}}>
<div className="w-10 h-10 rounded-full flex items-center justify-center border shrink-0 bg-lime-50 text-lime-600 border-lime-100">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">Email de Prospecção</p>
<span className="text-[10px] text-stone-400">10m atrás</span>
</div>
<p className="text-xs text-stone-500 truncate">Ass: Oportunidade de Parceria...</p>
</div>
<span className="text-[10px] px-2 py-0.5 rounded border font-medium bg-stone-100 text-stone-600 border-stone-200">Enviado</span>
</div>

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:ml-8 max-w-sm mx-auto w-full" style={{animationDelay: '1.5s'}}>
<div className="flex shrink-0 bg-[#c1ff72] w-10 h-10 border rounded-full items-center justify-center text-stone-900 border-lime-600">
<iconify-icon icon="lucide:linkedin" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">Conexão Aceita</p>
<span className="text-[10px] text-stone-400">2h atrás</span>
</div>
<p className="text-xs text-stone-500 truncate">CTO da Enterprise Corp aceitou.</p>
</div>
<span className="bg-[#c1ff72] text-[10px] px-2 py-0.5 rounded border border-[#aae65f] font-medium text-stone-900">Conectado</span>
</div>

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:-ml-4 max-w-sm mx-auto w-full" style={{animationDelay: '2.5s'}}>
<div className="w-10 h-10 rounded-full text-[#c1ff72] flex items-center justify-center border shrink-0 bg-stone-900 border-stone-800">
<iconify-icon icon="lucide:calendar-check" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">Reunião Agendada</p>
<span className="text-[10px] text-stone-400">Agora</span>
</div>
<p className="text-xs text-stone-500 truncate">Demo com CEO - TechCorp S.A.</p>
</div>
<span className="text-[10px] px-2 py-0.5 rounded border font-medium bg-stone-900 text-white border-stone-700">Confirmado</span>
</div>
</div>
</div>
</section>

<div className="lg:pt-16 bg-white w-full z-20 rounded-t-[40px] pt-12 pb-12 relative shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 animate-fade-up w-full mb-12 lg:mb-20" style={{animationDelay: '0.4s'}}>
<div className="grid grid-cols-2 lg:grid-cols-4 p-4 lg:p-6 font-montserrat bg-neutral-50 border-stone-200 border rounded-2xl shadow-sm gap-6 lg:gap-8">
<div className="space-y-1 text-center lg:text-left">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tighter text-stone-900">R$ 45M+</h3>
<p className="text-sm font-medium text-stone-500">Pipeline Gerado</p>
</div>
<div className="space-y-1 text-center lg:text-left">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tighter text-stone-900">120+</h3>
<p className="text-sm text-stone-500 font-medium">Empresas Atendidas</p>
</div>
<div className="space-y-1 text-center lg:text-left">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tighter text-stone-900">15x</h3>
<p className="text-sm text-stone-500 font-medium">ROI Médio</p>
</div>
<div className="space-y-1 text-center lg:text-left">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tighter text-stone-900">3.4k</h3>
<p className="text-sm text-stone-500 font-medium">Reuniões Agendadas</p>
</div>
</div>
</section>

<section className="lg:px-12 lg:mb-20 max-w-[1600px] mr-auto mb-12 ml-auto pr-6 pl-6">
<h2 className="text-3xl lg:text-5xl font-medium text-stone-900 tracking-tight font-montserrat mb-10 lg:mb-12">Conheça os produtos NectArr</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">

<div className="row-span-1 lg:row-span-2 group overflow-hidden lg:p-10 flex flex-col min-h-[500px] lg:min-h-full transition-transform hover:scale-[1.01] duration-300 bg-[#002f43] border-[#002f43] border rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative justify-between">

<div className="z-20 mt-auto relative">
<div className="flex text-white bg-white/10 w-12 h-12 border-white/10 border rounded-2xl mb-6 backdrop-blur-md items-center justify-center">
<iconify-icon className="" icon="lucide:sparkles" width="24"></iconify-icon>
</div>
<h3 className="lg:text-3xl text-2xl font-bold text-white font-montserrat mb-3">NectArr Marketing</h3>
<p className="text-stone-300 mb-6 text-sm lg:text-base leading-relaxed max-w-sm">
                                    A ferramenta definitiva de automação: crie landing pages de alta conversão e campanhas de email drip em minutos.
                                </p>
<a className="inline-flex items-center text-white font-medium text-sm hover:underline underline-offset-4 group/link" href="#">
                                    Conhecer produto 
                                    <iconify-icon className="ml-2 group-hover/link:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div><div className="flex-1 flex w-full mt-8 mb-8 relative items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none"></div>

<div className="transform group-hover:-translate-y-2 transition-transform duration-500 bg-white w-full max-w-[280px] z-10 rounded-xl pt-5 pr-5 pb-5 pl-5 relative shadow-2xl">

<div className="flex gap-2 border-stone-100 border-b mb-4 pb-3 gap-x-2 gap-y-2 items-center">
<div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
</div>

<div className="space-y-3">
<div className="h-2.5 bg-stone-100 rounded-full w-3/4"></div>
<div className="h-2.5 bg-stone-100 rounded-full w-1/2"></div>

<div className="flex gap-3 bg-stone-50 border-stone-100 border rounded-lg mt-4 pt-2 pr-2 pb-2 pl-2 gap-x-3 gap-y-3 items-center">
<div className="h-8 w-8 rounded-lg flex items-center justify-center bg-lime-100 text-lime-600 shrink-0">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
</div>
<div className="flex-1 h-2 bg-stone-200 rounded-full w-full opacity-50"></div>
<div className="h-6 w-12 bg-[#002f43] rounded text-[8px] text-white flex items-center justify-center">Enviar</div>
</div><div className="flex gap-3 bg-stone-50 border-stone-100 border rounded-lg mt-4 pt-2 pr-2 pb-2 pl-2 gap-x-3 gap-y-3 items-center">
<div className="h-8 w-8 rounded-lg flex items-center justify-center bg-lime-100 text-lime-600 shrink-0">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
</div>
<div className="flex-1 h-2 bg-stone-200 rounded-full w-full opacity-50"></div>
<div className="h-6 w-12 bg-[#002f43] rounded text-[8px] text-white flex items-center justify-center">Enviar</div>
</div><div className="flex gap-3 bg-stone-50 border-stone-100 border rounded-lg mt-4 pt-2 pr-2 pb-2 pl-2 gap-x-3 gap-y-3 items-center">
<div className="h-8 w-8 rounded-lg flex items-center justify-center bg-lime-100 text-lime-600 shrink-0">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
</div>
<div className="flex-1 bg-stone-200 opacity-50 w-full h-2 rounded-full"></div><div className="flex-1 bg-stone-200 opacity-50 w-full h-2 rounded-full"></div>
<div className="h-6 w-12 bg-[#002f43] rounded text-[8px] text-white flex items-center justify-center">Enviar</div>
</div><div className="flex gap-3 bg-stone-50 border-stone-100 border rounded-lg mt-4 pt-2 pr-2 pb-2 pl-2 gap-x-3 gap-y-3 items-center">
<div className="h-8 w-8 rounded-lg flex items-center justify-center bg-lime-100 text-lime-600 shrink-0">
<iconify-icon className="" icon="lucide:mail" width="16"></iconify-icon>
</div>
<div className="flex-1 bg-stone-200 opacity-50 w-full h-2 rounded-full"></div><div className="flex-1 bg-stone-200 opacity-50 w-full h-2 rounded-full"></div>
<div className="h-6 w-12 bg-[#002f43] rounded text-[8px] text-white flex items-center justify-center">Enviar</div>
</div>
</div>
</div>

<div className="absolute -right-4 top-10 w-16 h-16 bg-[#c1ff72] rounded-full blur-xl opacity-20 animate-pulse-slow"></div>
</div>
</div>

<div className="col-span-1 md:col-span-2 group overflow-hidden lg:p-10 min-h-[400px] flex flex-col md:flex-row transition-transform hover:scale-[1.01] duration-300 bg-lime-300 border-lime-300 border rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">

<div className="relative z-20 flex flex-col h-full justify-between w-full md:w-1/2 mb-8 md:mb-0">
<div className="">
<div className="w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-sm flex items-center justify-center mb-6 text-stone-900">
<iconify-icon icon="lucide:layout-grid" width="24"></iconify-icon>
</div>
<h3 className="lg:text-3xl text-2xl font-bold text-stone-900 font-montserrat mb-3">NectArr CRM</h3>
<p className="text-stone-800 text-sm lg:text-base mb-6 leading-relaxed max-w-xs">
                                        Organize sua operação de vendas e aumente suas vendas com visibilidade total do pipeline.
                                    </p>
</div>
<a className="inline-flex items-center text-stone-900 font-bold text-sm hover:underline underline-offset-4 group/link" href="#">
                                    Explorar features 
                                    <iconify-icon className="ml-2 group-hover/link:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="relative w-full md:w-1/2 h-full min-h-[220px] flex items-center justify-end">

<div className="absolute right-[-20px] md:right-[-40px] w-[120%] md:w-[110%] group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500 ease-out">
<div className="bg-white/90 backdrop-blur rounded-xl shadow-lg border border-lime-400/50 p-4">

<div className="flex gap-3">

<div className="flex-1 bg-stone-50 rounded-lg p-2 space-y-2">
<div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Novos</div>
<div className="bg-white p-3 rounded border border-stone-100 shadow-sm">
<div className="h-1.5 w-12 bg-lime-300 rounded mb-2"></div>
<div className="h-1 w-full bg-stone-100 rounded"></div>
</div>
<div className="bg-white p-3 rounded border border-stone-100 shadow-sm">
<div className="h-1.5 w-8 bg-blue-300 rounded mb-2"></div>
<div className="h-1 w-3/4 bg-stone-100 rounded"></div>
</div>
</div>

<div className="flex-1 bg-stone-50 rounded-lg p-2 space-y-2">
<div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Em Negociação</div>
<div className="bg-white p-3 rounded border border-lime-500 shadow-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-lime-500"></div>
<div className="h-1.5 w-16 bg-stone-800 rounded mb-2"></div>
<div className="h-1 w-full bg-stone-100 rounded"></div>
<div className="mt-2 flex items-center gap-1">
<div className="w-4 h-4 rounded-full bg-stone-200"></div>
<div className="text-[8px] text-stone-400">Hoje</div>
</div>
</div>
</div>

<div className="flex-1 bg-stone-50 rounded-lg p-2 opacity-50">
<div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Ganhos</div>
<div className="bg-white p-3 rounded shadow-sm h-16 border-dashed border-2 border-stone-200"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-lime-100/80 rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.01] duration-300 border border-lime-200">

<div className="relative w-full h-32 mb-4">
<div className="absolute right-0 top-0 space-y-3 w-full max-w-[220px]">
<div className="bg-white p-3 rounded-2xl rounded-tr-none shadow-sm text-xs text-stone-600 ml-auto w-fit transform group-hover:-translate-x-1 transition-transform delay-75">
                                        Olá, gostaria de saber mais sobre o plano Enterprise.
                                    </div>
<div className="bg-[#002f43] p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-white w-fit transform group-hover:translate-x-1 transition-transform delay-100">
                                        Claro! Vamos agendar uma demo?
                                    </div>
<div className="bg-white p-3 rounded-2xl rounded-tr-none shadow-sm text-xs text-stone-600 ml-auto w-fit transform group-hover:-translate-x-1 transition-transform delay-150">
<div className="flex gap-1">
<span className="w-1 h-1 bg-stone-400 rounded-full animate-bounce"></span>
<span className="w-1 h-1 bg-stone-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
<span className="w-1 h-1 bg-stone-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
</div>
</div>
</div>
</div>
<div className="mt-auto relative z-20">
<div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center mb-4 text-stone-900">
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
</div>
<h3 className="lg:text-2xl text-xl font-bold text-stone-900 font-montserrat mb-2">NectArr Chat</h3>
<p className="text-stone-700 text-sm mb-4 leading-relaxed">Centralize WhatsApp e site num só lugar.</p>
<a className="inline-flex items-center text-stone-900 font-bold text-xs uppercase tracking-wide hover:opacity-70" href="#">
                                    Ver Detalhes <iconify-icon className="ml-1" icon="lucide:chevron-right"></iconify-icon>
</a>
</div>
</div>

<div className="group relative overflow-hidden bg-sky-50 rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.01] duration-300 border border-sky-100">

<div className="flex w-full h-32 relative justify-end">
<div className="relative transform rotate-3 group-hover:rotate-6 transition-transform duration-500 origin-bottom-right">
<div className="bg-white p-3 rounded-xl shadow-lg border border-sky-100 w-32">
<div className="w-full aspect-square bg-stone-100 rounded-lg mb-2 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-sky-100 to-transparent opacity-50"></div>
</div>
<div className="h-1.5 bg-stone-200 rounded w-2/3 mb-1"></div>
<div className="h-1.5 bg-stone-100 rounded w-1/2"></div>
<div className="-top-2 -right-2 text-[10px] font-bold text-white bg-stone-900 rounded-full pt-1 pr-2 pb-1 pl-2 absolute shadow-md" style={{}}>R$</div>
</div>
</div>
</div>
<div className="z-20 mt-auto relative">
<div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center mb-4 text-stone-900">
<iconify-icon icon="lucide:shopping-bag" width="20"></iconify-icon>
</div>
<h3 className="lg:text-2xl text-xl font-bold text-stone-900 font-montserrat mb-2">NectArr Store</h3>
<p className="text-stone-700 text-sm mb-4 leading-relaxed">Estratégias multicanal para e-commerce.</p>
<a className="inline-flex items-center text-stone-900 font-bold text-xs uppercase tracking-wide hover:opacity-70" href="#">
                                    Saiba mais <iconify-icon className="ml-1" icon="lucide:chevron-right"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="animate-fade-up w-full my-8 lg:my-16 space-y-6">
<p className="text-center text-sm font-medium text-stone-400 uppercase tracking-widest px-6">Confiado por líderes de mercado</p>
<div className="overflow-hidden w-full relative">
<div className="z-10 bg-gradient-to-r to-transparent w-12 lg:w-40 h-full absolute top-0 left-0 from-white"></div>
<div className="bg-gradient-to-l to-transparent w-12 lg:w-40 h-full z-10 absolute top-0 right-0 from-white"></div>
<div className="flex w-max animate-marquee hover:pause-animation">
<div className="flex px-4 items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:cloud-lightning"></iconify-icon> SaaSforce</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon className="" icon="lucide:cpu"></iconify-icon> TechFlow</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:database"></iconify-icon> DataScale</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:globe"></iconify-icon> VentureCorp</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:server"></iconify-icon> CloudNine</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:zap"></iconify-icon> BoltSoft</div>
</div>
<div className="flex px-4 items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 ml-12 lg:ml-24">
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:cloud-lightning"></iconify-icon> SaaSforce</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:cpu"></iconify-icon> TechFlow</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:database"></iconify-icon> DataScale</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:globe"></iconify-icon> VentureCorp</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:server"></iconify-icon> CloudNine</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:zap"></iconify-icon> BoltSoft</div>
</div>
</div>
</div>
</section>

<section className="py-12 lg:py-16 max-w-[1600px] mx-auto px-6 lg:px-12">
<div className="text-center max-w-4xl mx-auto space-y-8">
<h2 className="text-3xl lg:text-6xl font-medium text-stone-900 tracking-tight font-montserrat leading-tight">
                            Não somos apenas uma agência. 
                            <span className="text-stone-400">Somos seu braço de Growth.</span>
</h2>
<p className="leading-relaxed text-lg lg:text-xl text-stone-600 font-montserrat max-w-2xl mx-auto">
                            A maioria das empresas B2B sofre com o "efeito montanha-russa": meses de alta receita seguidos por meses de seca. O NectArr resolve isso implementando uma infraestrutura de prospecção previsível.
                        </p>
<div className="flex flex-wrap justify-center gap-4 lg:gap-8 pt-6">
<div className="flex items-center gap-3 text-base font-medium text-stone-800 bg-stone-50 px-4 py-2 rounded-lg border border-stone-100">
<div className="p-1 rounded bg-[#c1ff72]"><iconify-icon icon="lucide:check" width="14"></iconify-icon></div>
                                Especialistas Nativos
                            </div>
<div className="flex items-center gap-3 text-base font-medium text-stone-800 bg-stone-50 px-4 py-2 rounded-lg border border-stone-100">
<div className="p-1 rounded bg-[#c1ff72]"><iconify-icon icon="lucide:check" width="14"></iconify-icon></div>
                                Tecnologia Multi-Canal
                            </div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 relative mb-12 lg:mb-16">
<div className="flex flex-col lg:flex-row mb-12 items-start lg:items-end justify-between gap-6">
<div className="max-w-2xl">
<span className="text-[#c1ff72] font-semibold text-xs tracking-widest uppercase mb-3 block text-stone-900 bg-stone-100 w-fit px-3 py-1.5 rounded">Nossas Soluções</span>
<h2 className="text-3xl lg:text-5xl font-medium text-stone-900 tracking-tight font-montserrat">Ecossistema de Vendas</h2>
</div>
<p className="max-w-md text-stone-500 text-sm lg:text-base lg:text-right">Soluções modulares desenhadas para cada estágio da maturidade comercial da sua empresa.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 border rounded-2xl hover:shadow-xl transition-all duration-300 flex flex-col h-full spotlight-card bg-neutral-50 border-stone-200 hover:border-stone-300" onmousemove="handleSpotlight(event)">
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 bg-white text-stone-900 shadow-sm border border-stone-100">
<iconify-icon icon="lucide:database" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-3 text-stone-900">Geração de Leads B2B</h3>
<p className="text-stone-500 leading-relaxed text-sm lg:text-base">Identificamos e enriquecemos listas de empresas que se encaixam perfeitamente no seu ICP. Dados validados em tempo real.</p>
</div>

<div className="group p-8 border rounded-2xl hover:shadow-xl transition-all duration-300 flex flex-col h-full spotlight-card bg-neutral-50 border-stone-200 hover:border-stone-300" onmousemove="handleSpotlight(event)">
<div className="w-14 h-14 rounded-xl bg-[#c1ff72]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-stone-900 border border-[#c1ff72]/20">
<iconify-icon icon="lucide:users" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-3 text-stone-900">SDR as a Service</h3>
<p className="text-stone-500 leading-relaxed text-sm lg:text-base">Terceirize a pré-venda com nossos especialistas. Cuidamos de todo o processo de abordagem, qualificação e agendamento.</p>
</div>

<div className="group p-8 border rounded-2xl hover:shadow-xl transition-all duration-300 flex flex-col h-full spotlight-card bg-neutral-50 border-stone-200 hover:border-stone-300" onmousemove="handleSpotlight(event)">
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 bg-white text-stone-900 shadow-sm border border-stone-100">
<iconify-icon icon="lucide:mail-check" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-3 text-stone-900">Cold Email Infrastructure</h3>
<p className="text-stone-500 leading-relaxed text-sm lg:text-base">Configuração técnica completa (DKIM, SPF, DMARC) e aquecimento de domínios para garantir entregabilidade máxima na inbox.</p>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-16 lg:mt-20 mb-12 lg:mb-20">
<div className="overflow-hidden min-h-[500px] lg:h-[600px] rounded-[32px] relative shadow-2xl border shadow-zinc-900/30 bg-stone-900 border-stone-800">
<div className="opacity-20 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="flex flex-col lg:flex-row h-full">
<div className="flex-1 lg:p-16 flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 relative justify-center">
<div className="flex items-center gap-2 mb-6">
<div className="w-2 h-2 bg-[#c1ff72] rounded-full animate-pulse"></div>
<span className="text-[#c1ff72] font-mono text-xs uppercase tracking-wider">Live Data</span>
</div>
<h2 className="lg:text-5xl xl:text-6xl leading-tight lg:mr-6 lg:mb-8 text-3xl font-medium text-white tracking-tight font-montserrat mb-6">
                                Visibilidade Total do Funil.
                                <span className="block text-2xl text-stone-500 mt-2">Chega de planilhas.</span>
</h2>
<p className="text-base lg:text-lg text-stone-400 font-montserrat max-w-md mb-8 lg:mb-10 leading-relaxed">
                                Com a NectArr, você tem um dashboard transparente para acompanhar cada lead gerado, resposta e reunião em tempo real.
                            </p>
<button className="group flex items-center gap-3 bg-[#c1ff72] hover:bg-[#b0f060] transition-all text-sm font-semibold rounded-full px-8 py-4 w-fit shadow-lg hover:shadow-[0_0_20px_rgba(193,255,114,0.3)] text-stone-900">
<span>Agendar Demo</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
<div className="flex lg:w-[50%] lg:pt-24 lg:pr-16 lg:pl-0 lg:items-center lg:pb-34 pt-8 pr-4 pb-16 pl-4 relative items-end">
<div className="transform [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)] lg:rounded-xl lg:translate-y-12 text-xs text-stone-400 font-mono bg-slate-950/80 w-full border-stone-800 border rounded-t-xl pt-8 pr-8 pb-16 pl-8 shadow-2xl backdrop-blur-md">
<div className="flex items-center justify-between border-b pb-4 mb-4 border-stone-800">
<span className="text-stone-300">nectarr-analytics.exe</span>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 bg-orange-700/50 rounded-full"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-lime-500/50"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="p-4 rounded border bg-stone-900 border-stone-800">
<span className="block text-stone-500 mb-2">Taxa de Resposta</span>
<span className="text-2xl font-bold text-white block mb-1">18.4%</span>
<span className="text-[#c1ff72] text-[10px]">+5.2% vs Média</span>
</div>
<div className="p-4 rounded border bg-stone-900 border-stone-800">
<span className="block text-stone-500 mb-2">Reuniões (Mês)</span>
<span className="text-2xl font-bold text-white block mb-1">42</span>
<span className="text-[#c1ff72] text-[10px]">+12% vs Ontem</span>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between p-3 rounded transition-colors cursor-pointer border border-transparent hover:bg-stone-800 hover:border-stone-800">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#c1ff72] text-sm" icon="lucide:check-circle"></iconify-icon>
<span className="">Reunião agendada c/ CTO @ BigCorp</span>
</div>
<span className="text-stone-600">20 min</span>
</div>
<div className="flex items-center justify-between p-3 rounded transition-colors cursor-pointer border border-transparent hover:bg-stone-800 hover:border-stone-800">
<div className="flex items-center gap-3">
<iconify-icon className="text-lime-400 text-sm" icon="lucide:mail-plus"></iconify-icon>
<span className="">Email respondido por Diretor MKT</span>
</div>
<span className="text-stone-600">45 min</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 my-12 lg:my-20">
<div className="lg:p-20 overflow-hidden text-center bg-[#c1ff72] rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative">
<div className="relative z-10 max-w-3xl mx-auto space-y-8">
<h2 className="text-3xl lg:text-6xl leading-tight font-medium text-stone-900 tracking-tight font-montserrat">Pronto para aumentar seu fluxo de novos clientes?</h2>
<p className="text-lg lg:text-xl text-stone-800 font-montserrat max-w-2xl mx-auto">Pare de perseguir leads frios. Deixe o NectArr construir um sistema de vendas que trabalha para você 24/7.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
<button className="font-medium px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-xl bg-stone-900 text-white hover:bg-stone-800 w-full sm:w-auto text-center justify-center flex">
                                    Fale com a NectArr
                                </button>
<button className="backdrop-blur border font-medium px-8 py-4 rounded-full transition-colors bg-white/50 text-stone-900 border-stone-900/10 hover:bg-white/80 w-full sm:w-auto text-center justify-center flex">
                                    Ver Planos
                                </button>
</div>
</div>
<div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.8) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.8) 0%, transparent 20%)'}}></div>
</div>
</section>

<footer className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-8">
<div className="border rounded-3xl p-8 lg:p-12 shadow-sm bg-neutral-50 border-stone-200">
<div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between">
<div className="lg:w-1/3 space-y-5">
<div className="flex gap-2 items-center">
<span className="text-2xl font-bold tracking-tighter font-google-sans-flex">Nect<span className="text-lime-500">Arr</span></span>
</div>
<p className="text-sm text-stone-500 font-montserrat max-w-sm leading-relaxed">
                                Infraestrutura de prospecção 100% pronta. Foco total no seu ICP. Sem depender de sorte.
                            </p>
</div>
<div className="flex flex-wrap gap-10 lg:gap-20 text-sm">
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Soluções</h3>
<ul className="space-y-3 text-stone-600">
<li><a className="hover:text-stone-900 transition-colors" href="#">Geração de Leads</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">SDR as a Service</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Infraestrutura de Email</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Empresa</h3>
<ul className="space-y-3 text-stone-600">
<li><a className="hover:text-stone-900 transition-colors" href="#">Sobre</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Carreiras</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Contato</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Legal</h3>
<ul className="space-y-3 text-stone-600">
<li><a className="hover:text-stone-900 transition-colors" href="#">Privacidade</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Termos</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-stone-200 text-stone-400">
<p>© 2026 NectArr Growth. Todos os direitos reservados.</p>
<div className="flex gap-6">
<a className="flex items-center gap-2 hover:text-stone-600 transition-colors" href="#"><iconify-icon icon="simple-icons:linkedin" width="14"></iconify-icon> LinkedIn</a>
<a className="flex items-center gap-2 hover:text-stone-600 transition-colors" href="#"><iconify-icon icon="simple-icons:instagram" width="14"></iconify-icon> Instagram</a>
</div>
</div>
</div>
</footer>
</div>

</main>
</div>


    </>
  );
}
