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
      

<header className="w-full px-8 py-6 flex justify-between items-start z-50">

<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-slate-200">
<iconify-icon icon="lucide:box" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tighter text-slate-900 uppercase">TRANSACT FLOW</span>
</div>

<div className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-2xl shadow-lg shadow-slate-200/50 p-5 flex flex-col gap-4 min-w-[320px]">
<div className="flex items-center justify-between border-b border-slate-50 pb-3">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Resumo Financeiro</span>
<iconify-icon className="text-slate-400" icon="lucide:pie-chart" width="16"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-xs text-slate-400 mb-1 flex items-center gap-1">
<iconify-icon icon="lucide:tag" width="12"></iconify-icon> Valor total
                    </p>
<p className="text-sm font-semibold text-slate-800 tracking-tight">R$ 1.250.000</p>
</div>
<div>
<p className="text-xs text-slate-400 mb-1 flex items-center gap-1">
<iconify-icon icon="lucide:coins" width="12"></iconify-icon> Sinal (20%)
                    </p>
<p className="text-sm font-semibold text-emerald-600 tracking-tight">R$ 250.000</p>
</div>
<div>
<p className="text-xs text-slate-400 mb-1 flex items-center gap-1">
<iconify-icon icon="lucide:scale" width="12"></iconify-icon> Saldo
                    </p>
<p className="text-sm font-semibold text-slate-800 tracking-tight">R$ 1.000.000</p>
</div>
<div>
<p className="text-xs text-slate-400 mb-1 flex items-center gap-1">
<iconify-icon icon="lucide:briefcase" width="12"></iconify-icon> Intermediação
                    </p>
<p className="text-sm font-semibold text-indigo-600 tracking-tight">6%</p>
</div>
</div>
</div>
</header>

<main className="flex-grow relative w-full h-full flex flex-col justify-center items-center overflow-x-auto hide-scroll">


<div className="relative w-[1800px] h-[600px] flex-shrink-0 mx-auto mt-10">

<svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#94a3b8', stopOpacity: '0.2'}}></stop>
<stop offset="50%" style={{stopColor: '#6366f1', stopOpacity: '0.4'}}></stop>
<stop offset="100%" style={{stopColor: '#94a3b8', stopOpacity: '0.2'}}></stop>
</lineargradient>
</defs>

<path className="path-line" d="M 100 300 C 250 300, 250 150, 400 150 C 550 150, 550 450, 700 450 C 850 450, 850 200, 1000 200 C 1150 200, 1150 400, 1300 400 C 1450 400, 1450 250, 1600 250" fill="none" stroke="url(#gradient)" strokeLinecap="round" strokeWidth="2"></path>
</svg>

<div className="absolute top-[260px] left-[50px] w-64 group">
<div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 relative z-10 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
<div className="flex items-center gap-3 mb-2">
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold border border-emerald-100">01</span>
<div className="h-px bg-slate-100 flex-grow"></div>
<iconify-icon className="text-emerald-500" icon="lucide:check-circle-2" width="16"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-800 leading-tight mb-1">Fechamento comercial finalizado</h3>
<p className="text-xs text-slate-500 leading-relaxed">Acordo inicial de valores e condições aceitas por ambas as partes.</p>
</div>
</div>

<div className="absolute top-[110px] left-[350px] w-64 group">
<div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 relative z-10 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
<div className="flex items-center gap-3 mb-2">
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold border border-indigo-100">02</span>
<div className="h-px bg-slate-100 flex-grow"></div>
<iconify-icon className="text-indigo-500" icon="lucide:pen-tool" width="16"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-800 leading-tight mb-1">Assinatura do Compromisso (CCV)</h3>
<p className="text-xs text-slate-500 leading-relaxed">Formalização jurídica da intenção de compra e venda.</p>
</div>

<div className="absolute top-full left-4 mt-4 w-56 p-3 bg-rose-50/50 border-l-2 border-rose-400 rounded-r-lg backdrop-blur-sm">
<div className="flex items-start gap-2">
<iconify-icon className="text-rose-500 mt-0.5" icon="lucide:alert-octagon" width="14"></iconify-icon>
<div>
<p className="text-xs font-medium text-rose-700">Risco de bloqueio</p>
<p className="text-[10px] text-rose-600/80 leading-tight mt-1">Se alguma das partes não assinar o contrato no prazo estipulado.</p>
</div>
</div>
</div>
</div>

<div className="absolute top-[410px] left-[650px] w-64 group">
<div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 relative z-10 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
<div className="flex items-center gap-3 mb-2">
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100">03</span>
<div className="h-px bg-slate-100 flex-grow"></div>
<iconify-icon className="text-blue-500" icon="lucide:file-search" width="16"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-800 leading-tight mb-1">Análise de documentos (diligência)</h3>
<p className="text-xs text-slate-500 leading-relaxed">Verificação de certidões negativas e idoneidade do imóvel.</p>
</div>

<div className="absolute bottom-full left-4 mb-4 w-56 p-3 bg-rose-50/50 border-l-2 border-rose-400 rounded-r-lg backdrop-blur-sm">
<div className="flex items-start gap-2">
<iconify-icon className="text-rose-500 mt-0.5" icon="lucide:x-circle" width="14"></iconify-icon>
<div>
<p className="text-xs font-medium text-rose-700">Ponto Crítico</p>
<p className="text-[10px] text-rose-600/80 leading-tight mt-1">Negação automática em caso de irregularidades graves.</p>
</div>
</div>
</div>
</div>

<div className="absolute top-[160px] left-[950px] w-64 group">
<div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 relative z-10 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
<div className="flex items-center gap-3 mb-2">
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-50 text-violet-600 text-xs font-bold border border-violet-100">04</span>
<div className="h-px bg-slate-100 flex-grow"></div>
<iconify-icon className="text-violet-500" icon="lucide:clipboard-check" width="16"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-800 leading-tight mb-1">Revisão do Relatório de Risco</h3>
<p className="text-xs text-slate-500 leading-relaxed">Apresentação dos apontamentos da diligência para as partes.</p>
</div>
</div>

<div className="absolute top-[360px] left-[1250px] w-64 group">
<div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 relative z-10 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
<div className="flex items-center gap-3 mb-2">
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-50 text-fuchsia-600 text-xs font-bold border border-fuchsia-100">05</span>
<div className="h-px bg-slate-100 flex-grow"></div>
<iconify-icon className="text-fuchsia-500" icon="lucide:thumbs-up" width="16"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-800 leading-tight mb-1">Aprovação dos documentos</h3>
<p className="text-xs text-slate-500 leading-relaxed">Validação final para prosseguimento da escritura.</p>
</div>
</div>

<div className="absolute top-[210px] left-[1550px] flex flex-col gap-6">

<div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 w-64 relative z-10 transition-all duration-300 hover:shadow-md hover:-translate-x-1">
<div className="flex items-center gap-3 mb-2">
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-50 text-pink-600 text-xs font-bold border border-pink-100">06</span>
<div className="h-px bg-slate-100 flex-grow"></div>
<iconify-icon className="text-pink-500" icon="lucide:scroll" width="16"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-800 leading-tight mb-1">Assinatura da Escritura Pública</h3>
<p className="text-xs text-slate-500 leading-relaxed">Ato notarial de transferência de propriedade.</p>
</div>

<div className="bg-slate-900 p-5 rounded-2xl shadow-lg shadow-slate-300/50 w-64 relative z-10 border border-slate-800">
<div className="flex items-center gap-3 mb-2">
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-white text-xs font-bold border border-slate-600">07</span>
<div className="h-px bg-slate-700 flex-grow"></div>
<iconify-icon className="text-emerald-400" icon="lucide:landmark" width="16"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white leading-tight mb-1">Registro público</h3>
<p className="text-xs text-slate-400 leading-relaxed">Atualização da matrícula e finalização do processo.</p>
</div>
</div>
</div>
</main>

<footer className="w-full px-8 pb-8 pt-4 bg-gradient-to-t from-slate-50 to-transparent z-40 fixed bottom-0 left-0 pointer-events-none">
<div className="max-w-7xl mx-auto flex gap-6 items-end pointer-events-auto">

<div className="bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 p-4 flex gap-4 max-w-md items-start">
<div className="p-2 bg-rose-50 rounded-lg text-rose-500 shrink-0">
<iconify-icon icon="lucide:alert-triangle" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-800 mb-1">Multas e responsabilidades</h4>
<p className="text-xs text-slate-500 leading-relaxed">O descumprimento dos prazos estabelecidos no CCV pode acarretar multas contratuais de até 10% sobre o valor da transação.</p>
</div>
</div>

<div className="bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 p-4 flex gap-4 max-w-sm items-start opacity-80 hover:opacity-100 transition-opacity">
<div className="p-2 bg-slate-50 rounded-lg text-slate-500 shrink-0">
<iconify-icon icon="lucide:info" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-800 mb-1">Status da operação</h4>
<div className="flex items-center gap-2 mt-1">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<p className="text-xs text-slate-500">Em andamento - Fase 02</p>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
