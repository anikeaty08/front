import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
},
colors: {
spv: {
green: '#169a57',
black: '#000000',
grey: '#939598',
light: '#ebecee',
}
},
boxShadow: {
'soft': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 0 1px rgba(0,0,0,0.1)',
}
}
}
}



        function switchTab(tabId) {
            // Hide all
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active', 'text-spv-green', 'border-spv-green');
                btn.classList.add('text-spv-grey', 'border-transparent');
                const icon = btn.querySelector('iconify-icon');
                if(icon) icon.classList.remove('text-spv-green');
            });

            // Show target
            document.getElementById('content-' + tabId).classList.add('active');
            
            // Activate button
            const activeBtn = document.getElementById('tab-' + tabId);
            activeBtn.classList.remove('text-spv-grey', 'border-transparent');
            activeBtn.classList.add('active', 'text-spv-green', 'border-spv-green');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-spv-light sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-spv-green rounded-lg flex items-center justify-center text-white font-bold tracking-tighter shadow-sm">
                    SPV
                </div>
<div className="hidden sm:flex flex-col">
<span className="text-sm font-semibold tracking-tight text-spv-black leading-none">Plataforma I&amp;DI</span>
<span className="text-[10px] uppercase tracking-wider text-spv-grey font-medium mt-0.5">Candidaturas 2026</span>
</div>
</div>

<div className="flex items-center gap-4">
<div className="text-right hidden sm:block">
<p className="text-sm font-semibold text-spv-black leading-tight">Olá, João Silva</p>
<div className="flex items-center justify-end gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-spv-green"></span>
<p className="text-xs text-spv-grey">Proponente</p>
</div>
</div>
<button className="w-9 h-9 bg-gray-50 rounded-full border border-spv-light flex items-center justify-center text-spv-grey hover:text-spv-black transition-colors">
<iconify-icon icon="solar:user-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="bg-white border-b border-spv-light shadow-soft py-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

<div className="flex flex-col gap-2">
<div className="flex flex-wrap items-center gap-3">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-green-50 text-green-700 border border-green-100">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
                            Candidatura Aprovada
                        </span>
<span className="text-xs text-spv-grey font-medium flex items-center gap-1">
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
                            Fase: Formalização &amp; Financiamento
                        </span>
</div>

<p className="text-sm text-spv-black mt-1">
                        A sua ação foi aprovada. Por favor consulte a aba <strong>'Ação'</strong> para descarregar e assinar o protocolo.
                    </p>
</div>

<button className="bg-spv-green hover:bg-[#13864b] text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm flex items-center gap-2 transition-colors" onclick="switchTab('acao')">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
                    Assinar Protocolo
                </button>
</div>
</div>
</div>

<main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-9 flex flex-col gap-6">

<nav aria-label="Tabs" className="flex overflow-x-auto border-b border-gray-200 gap-8 scrollbar-hide">
<button className="tab-btn pb-3 text-sm font-medium text-spv-grey border-b-2 border-transparent hover:text-spv-black hover:border-gray-300 whitespace-nowrap transition-colors" id="tab-resumo" onclick="switchTab('resumo')">
                        Resumo
                    </button>
<button className="tab-btn pb-3 text-sm font-medium text-spv-grey border-b-2 border-transparent hover:text-spv-black hover:border-gray-300 whitespace-nowrap transition-colors" id="tab-candidatura" onclick="switchTab('candidatura')">
                        Candidatura
                    </button>
<button className="tab-btn active pb-3 text-sm font-semibold text-spv-green border-b-2 border-spv-green whitespace-nowrap transition-colors flex items-center gap-2" id="tab-acao" onclick="switchTab('acao')">
<iconify-icon icon="solar:star-circle-linear" width="18"></iconify-icon>
                        Ação &amp; Avaliação
                    </button>
<button className="tab-btn pb-3 text-sm font-medium text-spv-grey border-b-2 border-transparent hover:text-spv-black hover:border-gray-300 whitespace-nowrap transition-colors" id="tab-mensagens" onclick="switchTab('mensagens')">
                        Mensagens
                    </button>
<button className="tab-btn pb-3 text-sm font-medium text-spv-grey border-b-2 border-transparent hover:text-spv-black hover:border-gray-300 whitespace-nowrap transition-colors" id="tab-documentos" onclick="switchTab('documentos')">
                        Documentos
                    </button>
</nav>

<div className="tab-content" id="content-resumo">
<div className="bg-white p-6 rounded-xl border border-spv-light shadow-sm text-center py-12">
<div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-spv-green">
<iconify-icon icon="solar:confetti-minimalistic-linear" width="32"></iconify-icon>
</div>
<h2 className="text-lg font-bold text-spv-black">Parabéns!</h2>
<p className="text-sm text-spv-grey mt-2">A sua candidatura avançou. Verifique a aba <span className="font-semibold text-spv-green cursor-pointer" onclick="switchTab('acao')">Ação</span> para os próximos passos.</p>
</div>
</div>

<div className="tab-content" id="content-candidatura">
<div className="bg-white p-6 rounded-xl border border-spv-light shadow-sm"><p className="text-sm text-gray-500">Dados da candidatura...</p></div>
</div>

<div className="tab-content active space-y-6" id="content-acao">

<div className="bg-white rounded-xl border border-green-200 shadow-sm overflow-hidden relative">

<div className="bg-green-50 px-6 py-4 border-b border-green-100 flex justify-between items-center">
<div className="flex items-center gap-2">
<iconify-icon className="text-spv-green" icon="solar:medal-star-circle-linear" width="20"></iconify-icon>
<h3 className="font-bold text-green-900 text-sm uppercase tracking-wide">Resultado da Avaliação</h3>
</div>
<span className="bg-white text-green-700 text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-green-200">Aprovado</span>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="md:col-span-2 space-y-2">
<label className="text-xs font-semibold text-spv-grey uppercase tracking-wide">Mensagem de Avaliação</label>
<div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
<p className="text-sm text-gray-700 leading-relaxed">
                                        "A proposta apresenta uma excelente estruturação e alinhamento com os objetivos estratégicos da SPV para 2026. O plano de ação é claro e os indicadores de impacto são mensuráveis e realistas. Aprovamos o financiamento total solicitado para a implementação do projeto piloto."
                                    </p>
<div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200">
<div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">S</div>
<span className="text-xs font-semibold text-spv-black">Supervisor SPV</span>
<span className="text-xs text-gray-400">• 10 Out 2025</span>
</div>
</div>
</div>

<div className="flex flex-col justify-center items-start md:items-end md:text-right border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-6">
<label className="text-xs font-semibold text-spv-grey uppercase tracking-wide mb-1">Valor Atribuído</label>
<p className="text-3xl md:text-4xl font-bold text-spv-green tracking-tight">25.000,00 €</p>
<p className="text-xs text-gray-500 mt-1">Financiamento a 100%</p>
</div>
</div>
</div>

<div className="bg-white border border-spv-light rounded-xl shadow-sm overflow-hidden">
<div className="p-5 border-b border-gray-100 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-bold text-spv-black">Formalização do Protocolo</h3>
<p className="text-xs text-gray-500">Passo obrigatório para desbloquear o financiamento.</p>
</div>
</div>
<div className="p-6 bg-gray-50/50 flex flex-col md:flex-row gap-6">

<div className="flex-1 bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
<div>
<h4 className="text-sm font-semibold text-spv-black mb-1">1. Descarregar Protocolo</h4>
<p className="text-xs text-gray-500 mb-4">Baixe o documento PDF gerado pela SPV, leia atentamente e assine digitalmente ou manualmente.</p>
</div>
<a className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-gray-300 text-spv-black text-sm font-semibold hover:bg-gray-50 transition-colors" href="#">
<iconify-icon icon="solar:file-download-linear" width="18"></iconify-icon>
                                    Download Minuta (PDF)
                                </a>
</div>

<div className="hidden md:flex items-center text-gray-300">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>

<div className="flex-1 bg-white p-5 rounded-lg border border-dashed border-blue-300 bg-blue-50/30 flex flex-col justify-between group hover:border-blue-400 transition-colors cursor-pointer">
<div>
<h4 className="text-sm font-semibold text-spv-black mb-1">2. Carregar Protocolo Assinado</h4>
<p className="text-xs text-gray-500 mb-4">Submeta o documento assinado para validação final da SPV.</p>
</div>
<div className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white border border-blue-200 text-blue-700 text-sm font-semibold group-hover:bg-blue-50 transition-colors">
<iconify-icon icon="solar:upload-minimalistic-linear" width="18"></iconify-icon>
                                    Selecionar Ficheiro
                                </div>
</div>
</div>
</div>

<div className="bg-white border border-spv-light rounded-xl shadow-sm p-6 sm:p-8">
<h3 className="text-base font-bold text-spv-black mb-6 flex items-center gap-2">
<iconify-icon className="text-spv-grey" icon="solar:route-linear"></iconify-icon>
                            Próximas Etapas – Financiamento
                        </h3>
<div className="relative pl-4 space-y-0">

<div className="step-item relative pl-10 pb-10">
<div className="step-connector"></div>
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-spv-green text-white flex items-center justify-center shadow-sm z-10 border-2 border-white ring-1 ring-spv-green">
<iconify-icon icon="solar:pen-new-square-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-bold text-spv-black">Assinatura do Protocolo pela SPV</h4>
<p className="text-xs text-gray-500 mt-1 max-w-xl">
                                        Após o seu upload, a SPV procederá à contra-assinatura do protocolo. O documento final ficará associado à ação e disponível para consulta permanente.
                                    </p>
<span className="inline-flex mt-2 items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 uppercase">Em Curso</span>
</div>
</div>

<div className="step-item relative pl-10 pb-10">
<div className="step-connector"></div>
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-400 flex items-center justify-center z-10">
<iconify-icon icon="solar:document-add-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-700">Disponibilização da Nota de Encomenda (NE)</h4>
<p className="text-xs text-gray-400 mt-1 max-w-xl">
                                        A SPV emitirá uma Nota de Encomenda individual relativa a esta ação.
                                    </p>
</div>
</div>

<div className="step-item relative pl-10 pb-10">
<div className="step-connector"></div>
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-400 flex items-center justify-center z-10">
<span className="text-xs font-bold">50%</span>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-700">Emissão e Upload da Fatura (1.ª Prestação)</h4>
<div className="text-xs text-gray-400 mt-1 space-y-1">
<p>Após receção da NE, deverá:</p>
<ul className="list-disc pl-4 space-y-0.5">
<li>Emitir fatura de 50% do valor aprovado (<span className="font-mono text-gray-500">12.500,00 €</span>);</li>
<li>Incluir a NE na descrição;</li>
<li>Carregar na Área do Utilizador e enviar para <span className="text-blue-600">faturasspv@ead.pt</span>.</li>
</ul>
</div>
</div>
</div>

<div className="step-item relative pl-10 pb-10">
<div className="step-connector"></div>
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-400 flex items-center justify-center z-10">
<iconify-icon icon="solar:chart-square-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-700">Entrega do Relatório Final</h4>
<p className="text-xs text-gray-400 mt-1 max-w-xl">
                                        Conclusão da ação. Submissão da avaliação de impacto, monitorização de indicadores e comprovativos de despesas.
                                    </p>
</div>
</div>

<div className="step-item relative pl-10">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-400 flex items-center justify-center z-10">
<span className="text-xs font-bold">50%</span>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-700">Emissão e Upload da Fatura (2.ª Prestação)</h4>
<div className="text-xs text-gray-400 mt-1 space-y-1">
<p>Após validação do Relatório Final:</p>
<ul className="list-disc pl-4 space-y-0.5">
<li>Emitir fatura dos restantes 50%;</li>
<li>Incluir a mesma NE;</li>
<li>Carregar na plataforma e enviar por email.</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<details className="group bg-white border border-spv-light rounded-xl shadow-sm overflow-hidden">
<summary className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer list-none hover:bg-gray-100 transition-colors">
<span className="text-sm font-semibold text-spv-grey flex items-center gap-2">
<iconify-icon icon="solar:eye-linear" width="16"></iconify-icon> 
                                Ver Detalhes Originais da Ação
                            </span>
<iconify-icon className="text-gray-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-6 border-t border-gray-200">
<h4 className="text-xs font-bold uppercase tracking-wide text-spv-black mb-2">Resumo</h4>
<p className="text-sm text-gray-600 mb-4">Projeto piloto para aumentar a recolha seletiva de vidro...</p>
<h4 className="text-xs font-bold uppercase tracking-wide text-spv-black mb-2">Ficheiros Submetidos</h4>
<div className="flex items-center gap-2 text-sm text-gray-500">
<iconify-icon className="text-spv-green" icon="solar:file-check-linear"></iconify-icon>
                                 Cronograma_Final_v2.pdf
                             </div>
</div>
</details>
</div>

<div className="tab-content" id="content-mensagens">
<div className="bg-white border border-spv-light rounded-xl shadow-sm h-96 flex items-center justify-center">
<p className="text-sm text-gray-500">Centro de mensagens...</p>
</div>
</div>

<div className="tab-content" id="content-documentos">
<div className="bg-white border border-spv-light rounded-xl shadow-sm p-6"><p className="text-sm text-gray-500">Gestor de ficheiros...</p></div>
</div>
</div>

<div className="lg:col-span-3 space-y-6">

<div className="bg-white border border-spv-light rounded-xl shadow-sm p-5 sticky top-24">
<h3 className="text-xs font-bold uppercase tracking-wide text-spv-grey mb-4">Resumo Rápido</h3>
<div className="space-y-4">
<div>
<p className="text-xs text-spv-grey">Estado</p>
<div className="flex items-center gap-2 mt-1">
<span className="w-2 h-2 rounded-full bg-spv-green"></span>
<p className="text-sm font-semibold text-spv-black">Aprovado</p>
</div>
</div>
<div>
<p className="text-xs text-spv-grey">Código</p>
<p className="text-sm font-semibold font-mono text-spv-black mt-0.5">C-2026-042</p>
</div>
<div className="pt-4 border-t border-gray-100">
<p className="text-xs text-spv-grey">Investimento Aprovado</p>
<p className="text-xl font-bold text-spv-green mt-0.5">25.000,00 €</p>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
