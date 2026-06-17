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
      

<aside className="hidden md:flex flex-col w-64 rounded-2xl shadow-sm border shrink-0 z-20 m-4 h-[calc(100vh-2rem)] overflow-hidden bg-white border-gray-200/75">

<div className="h-16 flex items-center px-6 border-b shrink-0 border-gray-100/50">
<span className="text-base font-semibold tracking-tighter text-gray-900">CUIDARY ADMIN</span>
</div>

<nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors bg-orange-50 text-orange-600" href="#">
<iconify-icon className="text-orange-600" height="20" icon="solar:widget-5-linear" width="20"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-50" href="#">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                Clientes
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-50" href="#">
<iconify-icon height="20" icon="solar:layers-linear" width="20"></iconify-icon>
                Planos
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-50" href="#">
<iconify-icon height="20" icon="solar:document-add-linear" width="20"></iconify-icon>
                Assinaturas
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-50" href="#">
<iconify-icon height="20" icon="solar:wallet-money-linear" width="20"></iconify-icon>
                Cobranças
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-50" href="#">
<iconify-icon height="20" icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
                Chat
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-50" href="#">
<iconify-icon height="20" icon="solar:clock-circle-linear" width="20"></iconify-icon>
                Trials
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-50" href="#">
<iconify-icon height="20" icon="solar:shield-user-linear" width="20"></iconify-icon>
                Equipe Interna
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-50" href="#">
<iconify-icon height="20" icon="solar:history-linear" width="20"></iconify-icon>
                Auditoria
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-50" href="#">
<iconify-icon height="20" icon="solar:settings-linear" width="20"></iconify-icon>
                Configurações
            </a>
</nav>

<div className="p-4 border-t shrink-0 flex flex-col gap-4 border-gray-100/50">
<div className="flex flex-col gap-2 px-1">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-9 h-9 rounded-full border object-cover shrink-0 border-gray-200" src="https://i.pravatar.cc/150?img=32"/>
<div className="flex flex-col overflow-hidden">
<span className="text-sm font-medium truncate text-gray-900">Dra. Camila S.</span>
<span className="text-xs text-gray-500 truncate">camila@vetclinic.com</span>
</div>
</div>
<div>
<span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ring-1 ring-inset bg-orange-50 text-orange-700 ring-orange-600/20">
                        Super Admin
                    </span>
</div>
</div>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-gray-500 transition-colors hover:text-red-600 hover:bg-red-50">
<iconify-icon height="20" icon="solar:logout-2-linear" width="20"></iconify-icon>
                Sair
            </button>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0 h-full">

<header className="flex lg:px-8 shrink-0 bg-white h-16 z-10 border-gray-200 border-b pr-4 pl-4 items-center justify-between">

<div className="flex items-center gap-3 md:hidden">
<button className="text-gray-500 hover:text-gray-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white">
<iconify-icon height="20" icon="solar:paw-linear" width="20"></iconify-icon>
</div>
</div>

<nav className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-900 text-white" href="#">Visão Geral</a>
<a className="px-4 py-2 rounded-full text-gray-500 text-sm font-medium transition-colors hover:text-gray-900 hover:bg-gray-50" href="#">Agenda</a>
<a className="px-4 py-2 rounded-full text-gray-500 text-sm font-medium transition-colors hover:text-gray-900 hover:bg-gray-50" href="#">Pacientes</a>
<a className="px-4 py-2 rounded-full text-gray-500 text-sm font-medium transition-colors hover:text-gray-900 hover:bg-gray-50" href="#">Internação</a>
<a className="px-4 py-2 rounded-full text-gray-500 text-sm font-medium transition-colors hover:text-gray-900 hover:bg-gray-50" href="#">Relatórios</a>
</nav>

<div className="flex items-center gap-3 lg:gap-5">
<div className="hidden lg:flex items-center gap-2 text-gray-400">
<button className="p-2 rounded-full transition-colors flex items-center justify-center hover:bg-gray-50"><iconify-icon height="20" icon="solar:magnifer-linear" width="20"></iconify-icon></button>
<button className="p-2 rounded-full transition-colors relative flex items-center justify-center hover:bg-gray-50">
<iconify-icon height="20" icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
</button>
<button className="p-2 rounded-full transition-colors flex items-center justify-center hover:bg-gray-50"><iconify-icon height="20" icon="solar:question-circle-linear" width="20"></iconify-icon></button>
</div>
<div className="h-6 w-px hidden lg:block bg-gray-200"></div>
<div className="flex items-center gap-3 cursor-pointer">
<img alt="Avatar" className="w-8 h-8 rounded-full border object-cover border-gray-200" src="https://i.pravatar.cc/150?img=32"/>
<div className="hidden lg:block">
<p className="text-sm font-medium text-gray-900">Dra. Camila S.</p>
<p className="text-xs text-gray-500">camila@vetclinic.com</p>
</div>
<iconify-icon className="hidden lg:block text-gray-400" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
<div className="max-w-7xl mx-auto">

<div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-orange-500" height="20" icon="solar:sun-2-linear" width="20"></iconify-icon>
<h1 className="text-2xl lg:text-3xl font-medium tracking-tight text-gray-900">Bom dia, Camila</h1>
</div>
<p className="text-gray-500">Acompanhe seus atendimentos, pacientes internados e métricas do dia.</p>
</div>
<button className="hidden sm:flex items-center justify-center gap-2 px-4 py-2 border rounded-xl transition-colors shadow-sm text-sm font-medium bg-white border-gray-200 hover:bg-gray-50">
<iconify-icon height="18" icon="solar:add-circle-linear" width="18"></iconify-icon>
                        Novo Atendimento
                    </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">

<div className="bg-gradient-to-br to-orange-500 rounded-2xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between from-orange-400 text-white">
<iconify-icon className="absolute right-[-24px] bottom-[-24px] opacity-10" height="160" icon="solar:heart-angle-linear" width="160"></iconify-icon>
<div className="flex justify-between items-start mb-6 relative z-10">
<span className="text-sm font-medium tracking-wide text-orange-50">Capacidade de Internação</span>
<div className="p-1.5 rounded-lg backdrop-blur-sm flex items-center justify-center bg-white/20">
<iconify-icon className="text-white" height="20" icon="solar:bed-linear" width="20"></iconify-icon>
</div>
</div>
<div className="relative z-10">
<div className="flex items-baseline gap-2">
<h3 className="text-4xl font-medium tracking-tight">12</h3>
<span className="text-lg font-normal text-orange-100">/ 15</span>
</div>
<div className="mt-4 w-full rounded-full h-1.5 bg-black/10">
<div className="h-1.5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] bg-white" style={{width: '80%'}}></div>
</div>
<div className="flex items-center justify-between mt-3 text-sm text-orange-50">
<span className="">Ocupação atual</span>
<span className="flex items-center gap-1 font-medium text-white">
<iconify-icon height="14" icon="solar:graph-up-linear" width="14"></iconify-icon> 80%
                                </span>
</div>
</div>
</div>

<div className="rounded-2xl p-5 border shadow-sm flex flex-col justify-between bg-white border-gray-200">
<div className="flex justify-between items-start mb-6">
<span className="text-sm font-medium text-gray-500 tracking-wide">Agendamentos Hoje</span>
<div className="p-1.5 rounded-lg border flex items-center justify-center bg-gray-50 text-gray-400 border-gray-100">
<iconify-icon height="20" icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
</div>
<div className="">
<h3 className="text-3xl font-medium tracking-tight text-gray-900">24</h3>
<div className="flex items-center gap-2 mt-3 text-sm">
<span className="flex items-center gap-1 font-medium px-2 py-0.5 rounded-md text-green-600 bg-green-50">
<iconify-icon height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon> 15%
                                </span>
<span className="text-gray-400">vs. ontem</span>
</div>
</div>
</div>

<div className="rounded-2xl p-5 border shadow-sm flex flex-col justify-between bg-white border-gray-200">
<div className="flex justify-between items-start mb-6">
<span className="text-sm font-medium text-gray-500 tracking-wide">Clientes Ativos</span>
<div className="p-1.5 rounded-lg border flex items-center justify-center bg-gray-50 text-gray-400 border-gray-100">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-3xl font-medium tracking-tight text-gray-900">1,248</h3>
<div className="flex items-center gap-2 mt-3 text-sm">
<span className="flex items-center gap-1 font-medium px-2 py-0.5 rounded-md text-green-600 bg-green-50">
<iconify-icon height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon> 42
                                </span>
<span className="text-gray-400">novos este mês</span>
</div>
</div>
</div>
</div>

<div className="border rounded-2xl shadow-sm overflow-hidden flex flex-col bg-white border-gray-200">

<div className="p-4 md:p-5 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-gray-100">
<div className="flex items-center gap-3">
<h2 className="text-lg font-medium tracking-tight text-gray-900">Agenda de Atendimentos</h2>
<span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-600">Hoje, 14 Abr</span>
</div>
<div className="flex items-center gap-3 w-full sm:w-auto">

<div className="relative flex-1 sm:w-48">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" height="16" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full pl-9 pr-3 py-1.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder-gray-400 bg-gray-50 border-gray-200" placeholder="Buscar paciente..." type="text"/>
</div>

<div className="flex items-center rounded-lg p-0.5 border shrink-0 bg-gray-100 border-gray-200/50">
<button className="p-1.5 shadow-sm rounded-md transition-all flex items-center justify-center bg-white text-gray-900">
<iconify-icon height="16" icon="solar:list-linear" width="16"></iconify-icon>
</button>
<button className="p-1.5 transition-all rounded-md flex items-center justify-center text-gray-400 hover:text-gray-600">
<iconify-icon height="16" icon="solar:slider-vertical-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="overflow-x-auto">
<div className="min-w-[800px] w-full">

<div className="grid grid-cols-12 gap-4 p-4 border-b text-sm font-medium text-gray-500 border-gray-100 bg-gray-50/50">
<div className="col-span-2 pl-2">Horário</div>
<div className="col-span-3">Paciente &amp; Tutor</div>
<div className="col-span-3">Procedimento</div>
<div className="col-span-2">Profissional</div>
<div className="col-span-2">Status</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 items-center border-b transition-colors group border-gray-50 hover:bg-gray-50/50">
<div className="col-span-2 flex items-center gap-3 pl-2">

<div className="relative flex items-center justify-center w-4 h-4 rounded border group-hover:border-gray-400 cursor-pointer border-gray-300 bg-white">
<input className="peer sr-only" type="checkbox"/>
</div>
<span className="text-sm font-medium text-gray-900">09:00</span>
</div>
<div className="col-span-3 flex items-center gap-3">
<div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 border bg-orange-100 text-orange-600 border-orange-200/50">
<iconify-icon height="16" icon="solar:paw-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Thor</p>
<p className="text-sm text-gray-500">Ana Clara (Golden Ret.)</p>
</div>
</div>
<div className="col-span-3 flex items-center gap-2">
<div className="w-6 h-6 rounded flex items-center justify-center bg-blue-50 text-blue-600">
<iconify-icon height="14" icon="solar:syringe-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-gray-700">Vacinação Anual</span>
</div>
<div className="col-span-2 text-sm text-gray-600">
                                    Dra. Camila
                                </div>
<div className="col-span-2 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ring-1 ring-inset bg-green-50 text-green-700 ring-green-600/20">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        Finalizado
                                    </span>
<button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-gray-400 hover:text-gray-600">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 items-center border-b transition-colors group border-gray-50 hover:bg-gray-50/50">
<div className="col-span-2 flex items-center gap-3 pl-2">
<div className="relative flex items-center justify-center w-4 h-4 rounded border group-hover:border-gray-400 cursor-pointer border-gray-300 bg-white">
<input className="peer sr-only" type="checkbox"/>
</div>
<span className="text-sm font-medium text-gray-900">10:30</span>
</div>
<div className="col-span-3 flex items-center gap-3">
<div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 border bg-indigo-100 text-indigo-600 border-indigo-200/50">
<iconify-icon height="16" icon="solar:paw-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Luna</p>
<p className="text-sm text-gray-500">Carlos E. (Siamês)</p>
</div>
</div>
<div className="col-span-3 flex items-center gap-2">
<div className="w-6 h-6 rounded flex items-center justify-center bg-purple-50 text-purple-600">
<iconify-icon height="14" icon="solar:medical-kit-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-gray-700">Consulta de Rotina</span>
</div>
<div className="col-span-2 text-sm text-gray-600">
                                    Dra. Camila
                                </div>
<div className="col-span-2 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ring-1 ring-inset bg-blue-50 text-blue-700 ring-blue-600/20">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                        Em Atendimento
                                    </span>
<button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-gray-400 hover:text-gray-600">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 items-center border-b transition-colors group border-gray-50 hover:bg-gray-50/50">
<div className="col-span-2 flex items-center gap-3 pl-2">
<div className="relative flex items-center justify-center w-4 h-4 rounded border group-hover:border-gray-400 cursor-pointer border-gray-300 bg-white">
<input className="peer sr-only" type="checkbox"/>
</div>
<span className="text-sm font-medium text-gray-900">11:15</span>
</div>
<div className="col-span-3 flex items-center gap-3">
<div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 border bg-orange-100 text-orange-600 border-orange-200/50">
<iconify-icon height="16" icon="solar:paw-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Max</p>
<p className="text-sm text-gray-500">Mariana S. (Pug)</p>
</div>
</div>
<div className="col-span-3 flex items-center gap-2">
<div className="w-6 h-6 rounded flex items-center justify-center bg-rose-50 text-rose-600">
<iconify-icon height="14" icon="solar:pulse-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-gray-700">Retorno Cirúrgico</span>
</div>
<div className="col-span-2 text-sm text-gray-600">
                                    Dr. Roberto
                                </div>
<div className="col-span-2 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ring-1 ring-inset bg-yellow-50 text-yellow-700 ring-yellow-600/20">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                                        Aguardando
                                    </span>
<button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-gray-400 hover:text-gray-600">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 items-center transition-colors group hover:bg-gray-50/50">
<div className="col-span-2 flex items-center gap-3 pl-2">
<div className="relative flex items-center justify-center w-4 h-4 rounded border group-hover:border-gray-400 cursor-pointer border-gray-300 bg-white">
<input className="peer sr-only" type="checkbox"/>
</div>
<span className="text-sm font-medium text-gray-900">14:00</span>
</div>
<div className="col-span-3 flex items-center gap-3">
<div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 border bg-indigo-100 text-indigo-600 border-indigo-200/50">
<iconify-icon height="16" icon="solar:paw-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Frajola</p>
<p className="text-sm text-gray-500">Ricardo M. (SRD)</p>
</div>
</div>
<div className="col-span-3 flex items-center gap-2">
<div className="w-6 h-6 rounded flex items-center justify-center bg-orange-50 text-orange-600">
<iconify-icon height="14" icon="solar:bed-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-gray-700">Avaliação Internação</span>
</div>
<div className="col-span-2 text-sm text-gray-600">
                                    Dra. Camila
                                </div>
<div className="col-span-2 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ring-1 ring-inset bg-orange-50 text-orange-700 ring-orange-600/20">
<iconify-icon height="14" icon="solar:bed-linear" width="14"></iconify-icon>
                                        Box 04
                                    </span>
<button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-gray-400 hover:text-gray-600">
<iconify-icon height="18" icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="p-4 border-t flex justify-center border-gray-100 bg-gray-50/30">
<button className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">Ver toda a agenda</button>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
