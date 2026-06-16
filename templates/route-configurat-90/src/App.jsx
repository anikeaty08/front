import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col max-h-[90vh] relative overflow-hidden ring-1 ring-gray-900/5">

<div className="flex-none border-b border-gray-100 bg-white z-10">
<div className="flex items-center justify-between px-6 py-5">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600">
<iconify-icon className="transform rotate-90" icon="lucide:git-branch" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h2 className="text-base font-semibold text-gray-900 tracking-tight leading-tight">
                Configuração de Rotas
              </h2>
<p className="text-xs text-gray-500 mt-0.5">
                Defina nomes e regras lógicas para o fluxo de decisão.
              </p>
</div>
</div>
<button className="text-gray-400 hover:text-gray-600 transition-colors rounded-md p-1 hover:bg-gray-50">
<iconify-icon icon="lucide:x" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-6 px-6 text-sm font-medium">
<button className="pb-3 border-b-2 border-indigo-600 text-indigo-600 cursor-default">
            Regras
          </button>
<button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-800 transition-colors">
            Simulação
          </button>
<button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-800 transition-colors">
            Histórico
          </button>
</div>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar p-6 bg-gray-50/50">

<div className="space-y-4">

<div className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-200 relative">

<div className="flex items-center gap-3 mb-3">

<div className="flex-none">
<span className="inline-flex items-center justify-center px-2.5 py-1 rounded bg-gray-100 border border-gray-200 text-[10px] font-bold text-gray-500 tracking-wider uppercase font-mono">
                  ROTA 0
                </span>
</div>

<div className="flex-1">
<input className="w-full text-sm font-medium text-gray-900 placeholder-gray-400 bg-transparent border-none focus:ring-0 p-0 hover:text-indigo-600 transition-colors" placeholder="Nome da Rota (ex: Clientes VIP)" type="text" value="Aprovação Automática"/>
</div>

<div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-gray-300 hover:text-red-500 transition-colors p-1">
<iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
</button>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-1.5">
<iconify-icon className="text-gray-300" icon="lucide:corner-down-right" width="14"></iconify-icon>
<span className="text-[11px] font-medium text-gray-400 uppercase tracking-wide">Condição Lógica</span>
</div>
<div className="w-full bg-slate-50 hover:bg-slate-100 border border-gray-200 hover:border-gray-300 rounded-lg p-3 font-mono text-xs text-gray-700 flex items-center flex-wrap gap-y-2 gap-x-1.5 transition-all shadow-sm cursor-text ring-0 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500">

<div className="inline-flex items-center bg-white border border-gray-200 rounded px-1.5 py-0.5 shadow-sm select-none">
<span className="text-indigo-600 font-medium">{{score_biometria}}</span>
</div>
<span className="text-purple-600 font-bold">&gt;=</span>
<span className="text-sky-600">90</span>
<span className="text-gray-400 font-bold mx-1">&amp;&amp;</span>

<div className="inline-flex items-center bg-white border border-gray-200 rounded px-1.5 py-0.5 shadow-sm select-none">
<span className="text-indigo-600 font-medium">{{fraude_check}}</span>
</div>
<span className="text-purple-600 font-bold">==</span>
<span className="text-amber-600">false</span>
</div>
</div>
</div>

<div className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-200 relative">

<div className="flex items-center gap-3 mb-3">
<div className="flex-none">
<span className="inline-flex items-center justify-center px-2.5 py-1 rounded bg-gray-100 border border-gray-200 text-[10px] font-bold text-gray-500 tracking-wider uppercase font-mono">
                  ROTA 1
                </span>
</div>
<div className="flex-1">
<input className="w-full text-sm font-medium text-gray-900 placeholder-gray-400 bg-transparent border-none focus:ring-0 p-0 hover:text-indigo-600 transition-colors" placeholder="Nome da Rota" type="text" value="Revisão Manual (Risco Médio)"/>
</div>
<div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-gray-300 hover:text-red-500 transition-colors p-1">
<iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
</button>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-1.5">
<iconify-icon className="text-gray-300" icon="lucide:corner-down-right" width="14"></iconify-icon>
<span className="text-[11px] font-medium text-gray-400 uppercase tracking-wide">Condição Lógica</span>
</div>
<div className="w-full bg-slate-50 hover:bg-slate-100 border border-gray-200 hover:border-gray-300 rounded-lg p-3 font-mono text-xs text-gray-700 flex items-center flex-wrap gap-y-2 gap-x-1.5 transition-all shadow-sm cursor-text">

<div className="inline-flex items-center bg-white border border-gray-200 rounded px-1.5 py-0.5 shadow-sm select-none">
<span className="text-indigo-600 font-medium">{{manual_review_flag}}</span>
</div>
<span className="text-purple-600 font-bold">==</span>
<span className="text-amber-600">true</span>
</div>
</div>
</div>

<div className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-200 relative">

<div className="flex items-center gap-3 mb-3">
<div className="flex-none">
<span className="inline-flex items-center justify-center px-2.5 py-1 rounded bg-gray-100 border border-gray-200 text-[10px] font-bold text-gray-500 tracking-wider uppercase font-mono">
                  ROTA 2
                </span>
</div>
<div className="flex-1 border-b border-transparent focus-within:border-gray-200 transition-colors">
<input className="w-full text-sm font-medium text-gray-900 placeholder-gray-400 bg-transparent border-none focus:ring-0 p-0" placeholder="Nomeie esta rota..." type="text" value=""/>
</div>
<div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-gray-300 hover:text-red-500 transition-colors p-1">
<iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
</button>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-1.5">
<iconify-icon className="text-gray-300" icon="lucide:corner-down-right" width="14"></iconify-icon>
<span className="text-[11px] font-medium text-gray-400 uppercase tracking-wide">Condição Lógica</span>
</div>
<div className="w-full bg-slate-50 hover:bg-slate-100 border border-gray-200 hover:border-gray-300 rounded-lg p-3 font-mono text-xs text-gray-400 flex items-center gap-1.5 transition-all shadow-sm cursor-text min-h-[42px]">
                Escreva uma expressão booleana...
                <div className="w-1 h-4 bg-indigo-500 animate-pulse ml-0.5"></div>
</div>
</div>
</div>
</div>

<div className="mt-6 flex justify-center">
<button className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-dashed border-gray-300 text-sm font-medium text-gray-500 hover:bg-white hover:border-indigo-300 hover:text-indigo-600 hover:shadow-sm transition-all bg-transparent">
<iconify-icon className="text-gray-400 group-hover:text-indigo-600 transition-colors" icon="lucide:plus" width="16"></iconify-icon>
            Adicionar Nova Rota
            </button>
</div>
<div className="my-6 border-t border-gray-200/60"></div>

<div className="bg-gray-100/50 border border-gray-200/60 rounded-xl p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white border border-gray-200 text-gray-400 shadow-sm">
<iconify-icon icon="lucide:milestone" width="20"></iconify-icon>
</div>
<div>
<span className="block text-sm font-semibold text-gray-900">
                Rota Padrão (Fallback)
              </span>
<span className="block text-xs text-gray-500 mt-0.5">
                Executada se nenhuma das rotas acima for verdadeira.
              </span>
</div>
</div>

<label className="relative inline-flex items-center cursor-pointer group">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600 group-hover:after:scale-95"></div>
</label>
</div>
</div>

<div className="flex-none p-4 border-t border-gray-100 bg-white flex justify-end gap-3 rounded-b-2xl z-20">
<button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-800 transition-all shadow-sm hover:shadow">
          Cancelar
        </button>
<button className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 transition-all shadow-sm flex items-center gap-2 hover:shadow hover:shadow-indigo-500/20">
<iconify-icon icon="lucide:check" width="16"></iconify-icon>
          Salvar Alterações
        </button>
</div>
</div>

    </>
  );
}
