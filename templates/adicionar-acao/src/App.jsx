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
sans: ['Manrope', 'sans-serif'],
},
colors: {
spv: {
green: '#169a57',
dark: '#0f172a',
light: '#e6f5ed',
border: '#e2e8f0', // slate-200
}
},
boxShadow: {
'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
'card': '0 0 0 1px rgba(0,0,0,0.03), 0 1px 3px rgba(0,0,0,0.06)',
}
}
}
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
      
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

<aside className="lg:col-span-4 space-y-6">

<div className="bg-white rounded-xl shadow-card p-6 border border-spv-border sticky top-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded bg-spv-light text-spv-green flex items-center justify-center">
<iconify-icon icon="lucide:info" width="18"></iconify-icon>
</div>
<h2 className="text-sm font-bold text-slate-900 tracking-tight">Guia de Preenchimento</h2>
</div>
<div className="space-y-4">
<p className="text-xs text-slate-600 leading-relaxed">
                        Bem-vindo ao formulário de submissão de ações. Este formulário está dividido em secções para facilitar o enquadramento do seu projeto no âmbito da reciclagem de vidro.
                    </p>
<div className="bg-slate-50 rounded border border-slate-100 p-3">
<label className="mb-1">Entidade que apresenta a Ação</label>
<div className="text-sm font-semibold text-slate-900 truncate">Câmara Municipal de Exemplo</div>
<div className="text-xs text-slate-500 mt-0.5">NIF: 500 123 456</div>
</div>
<ul className="space-y-3 pt-2">
<li className="flex gap-3 text-xs text-slate-600">
<iconify-icon className="text-spv-green flex-shrink-0" icon="lucide:check-circle" width="16"></iconify-icon>
<span>Preencha todos os campos obrigatórios.</span>
</li>
<li className="flex gap-3 text-xs text-slate-600">
<iconify-icon className="text-spv-green flex-shrink-0" icon="lucide:file-text" width="16"></iconify-icon>
<span>Os documentos financeiros devem estar assinados.</span>
</li>
<li className="flex gap-3 text-xs text-slate-600">
<iconify-icon className="text-spv-green flex-shrink-0" icon="lucide:percent" width="16"></iconify-icon>
<span>O apoio da SPV está limitado a 90% do valor total.</span>
</li>
</ul>
</div>
</div>

<div className="bg-red-50 rounded-xl border border-red-100 p-4 hidden" id="error-summary">
<div className="flex gap-3">
<iconify-icon className="text-red-600 mt-0.5" icon="lucide:alert-circle" width="16"></iconify-icon>
<div>
<h3 className="text-sm font-bold text-red-900 mb-1">Por favor corrija os seguintes erros:</h3>
<ul className="list-disc pl-4 text-xs text-red-700 space-y-1">
<li>Secção 1: Nome da Ação em falta.</li>
<li>Secção 9: O valor solicitado ultrapassa 90%.</li>
</ul>
</div>
</div>
</div>
</aside>

<main className="lg:col-span-8">
<form action="#" className="space-y-6" method="POST">

<section className="bg-white rounded-xl shadow-card border border-spv-border overflow-hidden">
<div className="bg-slate-50 px-6 py-3 border-b border-spv-border flex justify-between items-center">
<h2 className="text-sm font-bold text-slate-800 tracking-tight">1. Enquadramento</h2>
</div>
<div className="p-6 space-y-6">

<div>
<label htmlFor="nome_acao">Nome da Ação <span className="text-red-500">*</span></label>
<input className="form-input" id="nome_acao" name="campos_da_acao[nome_da_acao]" placeholder="Ex: Vidro é Vida - Campanha 2024" type="text"/>
<p className="helper-text" id="nome_help">Um nome curto e identificativo para o projeto.</p>
</div>

<div>
<div className="flex justify-between">
<label htmlFor="resumo">Resuma a Ação (Máx 500 Caracteres) <span className="text-red-500">*</span></label>
<span className="text-[10px] text-slate-400 font-mono pt-1">0/500</span>
</div>
<textarea className="form-textarea resize-none" id="resumo" maxlength="500" name="campos_da_acao[resuma_a_acao]" rows="4"></textarea>

<details className="group mt-2 text-xs">
<summary className="cursor-pointer text-spv-green font-medium flex items-center gap-1 w-fit select-none">
<iconify-icon icon="lucide:help-circle" width="14"></iconify-icon>
                                    Ver exemplo de resumo
                                </summary>
<div className="mt-2 p-3 bg-slate-50 rounded border border-slate-100 text-slate-600 italic leading-relaxed">
                                    "Esta ação visa promover a reciclagem de vidro na zona histórica, através da instalação de 10 novos vidrões decorados e ações de sensibilização porta-a-porta junto de 200 estabelecimentos comerciais..."
                                </div>
</details>
</div>

<div className="max-w-xs">
<label htmlFor="taxa_aumento">Aumento da taxa de recolha de vidro em <span className="text-red-500">*</span></label>
<div className="relative">
<input className="form-input pr-8" id="taxa_aumento" name="campos_da_acao[aumento_da_taxa_de_recolha_de_vidro_em_x]" placeholder="0" type="number"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-semibold">%</span>
</div>
<p className="helper-text">Estimativa de crescimento percentual face ao período homólogo.</p>
</div>
</div>
</section>

<section className="bg-white rounded-xl shadow-card border border-spv-border overflow-hidden">
<div className="bg-slate-50 px-6 py-3 border-b border-spv-border">
<h2 className="text-sm font-bold text-slate-800 tracking-tight">2. Objetivos</h2>
</div>
<div className="p-6 space-y-8">

<div>
<label className="mb-3 block">Qual o principal objetivo no impacto da recolha? <span className="text-red-500">*</span></label>
<div className="space-y-3">
<label className="flex items-start gap-3 cursor-pointer group normal-case font-normal text-sm text-slate-700">
<input className="custom-checkbox mt-0.5" type="checkbox"/>
<span>Criação ou melhoria de pontos de separação de vidro</span>
</label>
<label className="flex items-start gap-3 cursor-pointer group normal-case font-normal text-sm text-slate-700">
<input className="custom-checkbox mt-0.5" type="checkbox"/>
<span>Capacitação de utilizadores ou estabelecimentos</span>
</label>
<label className="flex items-start gap-3 cursor-pointer group normal-case font-normal text-sm text-slate-700">
<input className="custom-checkbox mt-0.5" type="checkbox"/>
<span>Sensibilização para mudança de comportamento</span>
</label>

<div className="bg-slate-50 p-3 rounded border border-slate-100">
<label className="flex items-center gap-3 cursor-pointer normal-case font-normal text-sm text-slate-700 mb-2">
<input className="custom-checkbox" id="check_outro" type="checkbox"/>
<span>Outro (a especificar)</span>
</label>
<input className="form-input text-sm" disabled="" placeholder="Especifique o objetivo..." type="text"/>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-2">
<label>Objetivos Quantitativos</label>
<span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Máx. 7 objetivos</span>
</div>
<p className="helper-text mb-3">Ex: "Recolher 50 toneladas", "Contactar 500 pessoas". 100 caracteres máx.</p>
<div className="space-y-2">

<div className="flex items-center gap-2">
<span className="text-xs font-mono text-slate-400 w-4 text-center">1</span>
<input className="form-input py-2 text-xs" maxlength="100" placeholder="Objetivo quantitativo 1..." type="text"/>
<span className="text-[10px] text-slate-300 w-8 text-right">0/100</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-mono text-slate-400 w-4 text-center">2</span>
<input className="form-input py-2 text-xs" maxlength="100" placeholder="Objetivo quantitativo 2..." type="text"/>
<span className="text-[10px] text-slate-300 w-8 text-right">0/100</span>
</div>
<div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
<span className="text-xs font-mono text-slate-400 w-4 text-center">3</span>
<input className="form-input py-2 text-xs" maxlength="100" type="text"/>
<span className="text-[10px] text-slate-300 w-8 text-right">0/100</span>
</div>

<div className="pl-6 text-xs text-slate-400 italic pt-1">... (até 7 linhas)</div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-2">
<label>Objetivos Qualitativos</label>
<span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Máx. 10 objetivos</span>
</div>
<p className="helper-text mb-3">Ex: "Melhorar a percepção da marca", "Aumentar a satisfação".</p>
<div className="space-y-2">
<div className="flex items-center gap-2">
<span className="text-xs font-mono text-slate-400 w-4 text-center">1</span>
<input className="form-input py-2 text-xs" maxlength="100" placeholder="Objetivo qualitativo 1..." type="text"/>
<span className="text-[10px] text-slate-300 w-8 text-right">0/100</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-mono text-slate-400 w-4 text-center">2</span>
<input className="form-input py-2 text-xs" maxlength="100" placeholder="Objetivo qualitativo 2..." type="text"/>
<span className="text-[10px] text-slate-300 w-8 text-right">0/100</span>
</div>
<div className="pl-6 text-xs text-slate-400 italic pt-1">... (até 10 linhas)</div>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-xl shadow-card border border-spv-border overflow-hidden">
<div className="bg-slate-50 px-6 py-3 border-b border-spv-border">
<h2 className="text-sm font-bold text-slate-800 tracking-tight">3. Descrição Detalhada</h2>
</div>
<div className="p-6 space-y-6">

<div>
<label>Descreva a Ação em Detalhe <span className="text-red-500">*</span></label>
<p className="helper-text mb-2">Explique a mecânica, parceiros e fases do projeto.</p>
<div className="border border-slate-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-spv-green/20 focus-within:border-spv-green transition-all">
<div className="wysiwyg-toolbar text-slate-500">
<button className="hover:bg-slate-200 p-1 rounded" type="button"><iconify-icon icon="lucide:bold" width="14"></iconify-icon></button>
<button className="hover:bg-slate-200 p-1 rounded" type="button"><iconify-icon icon="lucide:italic" width="14"></iconify-icon></button>
<div className="w-px h-4 bg-slate-300 mx-1 self-center"></div>
<button className="hover:bg-slate-200 p-1 rounded" type="button"><iconify-icon icon="lucide:list" width="14"></iconify-icon></button>
</div>
<textarea className="w-full p-3 text-sm focus:outline-none min-h-[120px] wysiwyg-content" name="campos_da_acao[descreva_a_acao_em_detalhe]"></textarea>
</div>
</div>

<div>
<div className="flex justify-between">
<label>Freguesias e/ou Locais/Datas Exatos <span className="text-red-500">*</span></label>
<span className="text-[10px] text-slate-400 font-mono pt-1">0/1000</span>
</div>
<textarea className="form-textarea" maxlength="1000" name="campos_da_acao[enumere_as_freguesias_eou_locais_exatos_da_acao]" placeholder="Ex: Praça do Município (12/Jan); Escola EB 2,3 (14/Jan)..." rows="3"></textarea>
</div>
</div>
</section>

<section className="bg-white rounded-xl shadow-card border border-spv-border overflow-hidden">
<div className="bg-slate-50 px-6 py-3 border-b border-spv-border">
<h2 className="text-sm font-bold text-slate-800 tracking-tight">4. Público e Impacto</h2>
</div>
<div className="p-6 space-y-6">

<div>
<label className="mb-3">Público-Alvo <span className="text-red-500">*</span></label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="flex items-center gap-2 cursor-pointer normal-case font-normal text-sm text-slate-700 bg-slate-50 p-2 rounded border border-transparent hover:border-slate-200 transition-colors">
<input className="custom-checkbox" type="checkbox"/> <span>Canal HORECA</span>
</label>
<label className="flex items-center gap-2 cursor-pointer normal-case font-normal text-sm text-slate-700 bg-slate-50 p-2 rounded border border-transparent hover:border-slate-200 transition-colors">
<input className="custom-checkbox" type="checkbox"/> <span>Comunidade escolar</span>
</label>
<label className="flex items-center gap-2 cursor-pointer normal-case font-normal text-sm text-slate-700 bg-slate-50 p-2 rounded border border-transparent hover:border-slate-200 transition-colors">
<input className="custom-checkbox" type="checkbox"/> <span>Instituições locais</span>
</label>
<label className="flex items-center gap-2 cursor-pointer normal-case font-normal text-sm text-slate-700 bg-slate-50 p-2 rounded border border-transparent hover:border-slate-200 transition-colors">
<input className="custom-checkbox" type="checkbox"/> <span>Público em eventos</span>
</label>
<label className="flex items-center gap-2 cursor-pointer normal-case font-normal text-sm text-slate-700 bg-slate-50 p-2 rounded border border-transparent hover:border-slate-200 transition-colors">
<input className="custom-checkbox" type="checkbox"/> <span>Cidadão Geral</span>
</label>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label>Nº Pessoas Impactadas <span className="text-red-500">*</span></label>
<input className="form-input" placeholder="0" type="number"/>
<p className="helper-text">Número estimado de alcance direto.</p>
</div>
<div>
<div className="flex justify-between">
<label>Justificativa da Estimativa <span className="text-red-500">*</span></label>
<span className="text-[10px] text-slate-400 font-mono">0/350</span>
</div>
<textarea className="form-textarea" maxlength="350" placeholder="Como chegou a este número?" rows="2"></textarea>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-xl shadow-card border border-spv-border overflow-hidden">
<div className="bg-slate-50 px-6 py-3 border-b border-spv-border">
<h2 className="text-sm font-bold text-slate-800 tracking-tight">5. Recursos e Comunicação</h2>
</div>
<div className="p-6 space-y-6">

<div>
<label>Detalhe os Materiais <span className="text-red-500">*</span></label>
<div className="bg-blue-50/50 p-3 rounded text-xs text-blue-800 mb-2 border border-blue-100 flex gap-2">
<iconify-icon className="shrink-0 mt-0.5" icon="lucide:info" width="14"></iconify-icon>
<div>
                                    Descreva os materiais a produzir. Ex:
                                    <ul className="list-disc pl-4 mt-1 opacity-80">
<li>Flyers A5 (5.000 un)</li>
<li>Roll-ups (2 un)</li>
</ul>
</div>
</div>
<div className="border border-slate-300 rounded-md overflow-hidden">
<div className="wysiwyg-toolbar text-slate-500">
<button className="hover:bg-slate-200 p-1 rounded" type="button"><iconify-icon icon="lucide:bold" width="14"></iconify-icon></button>
<button className="hover:bg-slate-200 p-1 rounded" type="button"><iconify-icon icon="lucide:list" width="14"></iconify-icon></button>
</div>
<textarea className="w-full p-3 text-sm focus:outline-none min-h-[100px] wysiwyg-content" name="campos_da_acao[detalhe_os_materiais]"></textarea>
</div>
</div>

<div>
<label>Plano de Comunicação <span className="text-red-500">*</span></label>
<p className="helper-text mb-2">Quais os canais? (Redes Sociais, Imprensa, Outdoors...).</p>
<div className="border border-slate-300 rounded-md overflow-hidden">
<div className="wysiwyg-toolbar text-slate-500">
<button className="hover:bg-slate-200 p-1 rounded" type="button"><iconify-icon icon="lucide:bold" width="14"></iconify-icon></button>
<button className="hover:bg-slate-200 p-1 rounded" type="button"><iconify-icon icon="lucide:list" width="14"></iconify-icon></button>
</div>
<textarea className="w-full p-3 text-sm focus:outline-none min-h-[100px] wysiwyg-content" name="campos_da_acao[qual_o_plano_de_comunicacao]"></textarea>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-xl shadow-card border border-spv-border overflow-hidden">
<div className="bg-slate-50 px-6 py-3 border-b border-spv-border">
<h2 className="text-sm font-bold text-slate-800 tracking-tight">6. Calendarização</h2>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label>Data de Início <span className="text-red-500">*</span></label>
<input className="form-input" name="campos_da_acao[data_inicio]" type="date"/>
<p className="helper-text">Data em que a campanha se torna visível.</p>
</div>
<div>
<label>Data de Fim <span className="text-red-500">*</span></label>
<input className="form-input" name="campos_da_acao[data_de_termino]" type="date"/>
</div>
</div>
</section>

<section className="bg-white rounded-xl shadow-card border border-spv-border overflow-hidden">
<div className="bg-slate-50 px-6 py-3 border-b border-spv-border">
<h2 className="text-sm font-bold text-slate-800 tracking-tight">7. Documentos</h2>
</div>
<div className="p-6 space-y-6">

<div>
<label>Cronograma da Ação <span className="text-red-500">*</span></label>
<div className="flex gap-2">
<input className="form-input text-xs text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200" name="campos_da_acao[anexe_o_cronograma_da_acao]" type="file"/>
</div>
<p className="helper-text">Formato: PDF. Máx 10MB.</p>
</div>

<div className="h-px bg-slate-100"></div>

<div className="bg-slate-50 border border-slate-200 rounded p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div>
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-spv-green" icon="lucide:file-spreadsheet" width="16"></iconify-icon>
<span className="text-xs font-bold text-slate-700 uppercase">Template Orçamento</span>
</div>
<p className="text-[10px] text-slate-500">Descarregue o modelo obrigatório antes de submeter.</p>
</div>
<button className="text-xs bg-white border border-slate-300 text-slate-700 font-semibold px-3 py-2 rounded hover:text-spv-green hover:border-spv-green transition-colors flex items-center gap-2" type="button">
<iconify-icon icon="lucide:download" width="14"></iconify-icon>
                                Download Template
                            </button>
</div>

<div>
<label>Despesas da Ação (Preenchido) <span className="text-red-500">*</span></label>
<div className="flex gap-2">
<input className="form-input text-xs text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200" name="campos_da_acao[anexe_as_despesas_da_acao]" type="file"/>
</div>
<p className="helper-text">Formato: PDF ou Excel. Deve conter assinaturas.</p>
</div>
</div>
</section>

<section className="bg-white rounded-xl shadow-card border border-spv-border overflow-hidden">
<div className="bg-slate-50 px-6 py-3 border-b border-spv-border">
<h2 className="text-sm font-bold text-slate-800 tracking-tight">8. Equipa</h2>
</div>
<div className="p-6">
<label>Apresentação das Equipas <span className="text-red-500">*</span></label>
<p className="helper-text mb-2">Breve descrição das pessoas/entidades envolvidas na implementação.</p>
<textarea className="form-textarea" name="campos_da_acao[apresentacao_das_equipas_envolvidas_na_implementacao_da_acao]" rows="4"></textarea>
</div>
</section>

<section className="bg-white rounded-xl shadow-card border border-spv-border overflow-hidden">
<div className="bg-slate-50 px-6 py-3 border-b border-spv-border">
<h2 className="text-sm font-bold text-slate-800 tracking-tight">9. Dados Financeiros</h2>
</div>
<div className="p-6 space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div>
<label>Valor Total da Ação (s/ IVA) <span className="text-red-500">*</span></label>
<div className="relative">
<input className="form-input pl-8" placeholder="0.00" step="0.01" type="number"/>
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">€</span>
</div>
</div>

<div>
<label>Valor Solicitado à SPV (s/ IVA) <span className="text-red-500">*</span></label>
<div className="relative">
<input className="form-input pl-8" name="campos_da_acao[valor_total_de_investimento_solicitado_a_sociedade_ponto_verde]" placeholder="0.00" step="0.01" type="number"/>
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">€</span>
</div>
<p className="helper-text text-[10px]">Máx: 90% do total ou 50.000€.</p>
</div>
</div>

<div className="bg-slate-50 rounded p-4 border border-slate-200">
<label className="text-slate-500 mb-1">Percentagem de Apoio (Cálculo Automático)</label>
<div className="flex items-center justify-between">
<span className="text-2xl font-bold text-slate-300">-- %</span>
<span className="text-xs text-slate-400 font-medium bg-white px-2 py-1 rounded border border-slate-200">Read Only</span>
</div>

<div className="hidden mt-3 p-3 bg-red-50 border border-red-100 rounded flex gap-2 text-red-700 text-xs">
<iconify-icon className="mt-0.5" icon="lucide:alert-triangle" width="14"></iconify-icon>
<span><strong>Atenção:</strong> O valor solicitado ultrapassa 90%. A ação não poderá ser submetida nestas condições.</span>
</div>
</div>
</div>
</section>

<div className="pt-6 pb-12 flex flex-col items-center gap-4">
<button className="w-full sm:w-auto bg-spv-green hover:bg-[#128048] text-white font-bold py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2" type="submit">
<iconify-icon icon="lucide:save" width="18"></iconify-icon>
                        Guardar Ação
                    </button>
<a className="text-sm text-slate-500 hover:text-slate-800 underline decoration-slate-300 hover:decoration-slate-800 underline-offset-4 transition-all" href="#">
                        Voltar ao Dashboard
                    </a>
</div>
</form>
</main>
</div>

    </>
  );
}
