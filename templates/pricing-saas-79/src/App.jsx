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
      

<header className="fixed top-0 left-0 right-0 z-50 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="font-semibold text-base tracking-tight text-gray-900 flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-600/20">
<iconify-icon icon="solar:calculator-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
                    MARGEM
                </a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#recursos">Recursos</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#moveleiro">Nicho Moveleiro</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#como-funciona">Como Funciona</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#planos">Planos</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium" href="#">Entrar</a>
<a className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-all shadow-sm shadow-gray-900/10" href="#planos">Criar conta</a>
</div>
</div>
</header>

<section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 relative overflow-hidden bg-white border-b border-gray-100">

<div className="absolute inset-0 bg-grid pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-blue-400/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/50 text-blue-600 text-xs font-medium mb-8 border border-blue-100/50 shadow-sm backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
                    Plataforma definitiva de precificação
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-gray-900 leading-[1.1] text-balance mb-6">
                    Venda com lucro real, não no escuro.
                </h1>
<p className="text-lg text-gray-500 mb-8 text-balance leading-relaxed">
                    Calcule seu preço de venda com segurança matemática. Considere impostos, comissões, financiamentos e evite prejuízos nas suas negociações em poucos cliques.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto bg-blue-600 text-white text-base font-medium px-6 py-3.5 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 text-center flex items-center justify-center gap-2 group" href="#planos">
                        Começar gratuitamente
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 shadow-sm text-base font-medium px-6 py-3.5 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all text-center" href="#como-funciona">
                        Entender o funcionamento
                    </a>
</div>
<p className="mt-5 text-xs text-gray-400 font-medium">Sem necessidade de cartão de crédito para testar.</p>
</div>
<div className="relative w-full">

<div className="relative bg-white/60 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-2xl shadow-blue-900/5 overflow-hidden ring-1 ring-gray-900/5">

<div className="h-10 bg-gray-50/80 border-b border-gray-100/80 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/80 border border-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-amber-400/80 border border-amber-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-400/80 border border-green-500/20"></div>
</div>

<div className="p-6 flex flex-col gap-4">
<div className="flex items-center justify-between pb-4 border-b border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
<iconify-icon icon="solar:armchair-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Projeto Cozinha Silva</div>
<div className="text-xs text-gray-400">Criado hoje às 09:41</div>
</div>
</div>
<div className="text-xs font-medium px-2 py-1 bg-emerald-50 text-emerald-600 rounded-md border border-emerald-100">Margem Segura</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
<div className="text-xs font-medium text-gray-500 mb-1 flex items-center gap-1.5">
<iconify-icon icon="solar:wallet-linear" width="14"></iconify-icon>
                                    Custo Total
                                </div>
<div className="text-xl font-semibold tracking-tight text-gray-900">R$ 14.500,00</div>
</div>
<div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/50 shadow-sm">
<div className="text-xs font-medium text-emerald-700 mb-1 flex items-center gap-1.5">
<iconify-icon icon="solar:graph-up-linear" width="14"></iconify-icon>
                                    Lucro Líquido Real
                                </div>
<div className="text-xl font-semibold tracking-tight text-emerald-700">R$ 4.250,00</div>
</div>
</div>
<div className="rounded-xl border border-gray-100 bg-gray-50/50 p-5 relative overflow-hidden">
<div className="text-xs font-medium text-gray-500 mb-4 uppercase tracking-wider">Simulador de Cenários</div>
<div className="space-y-3.5">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-500 flex items-center gap-2"><iconify-icon className="text-gray-400" icon="solar:document-text-linear" width="16"></iconify-icon> Impostos (DAS)</span>
<span className="font-medium text-gray-900">12%</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-500 flex items-center gap-2"><iconify-icon className="text-gray-400" icon="solar:users-group-two-rounded-linear" width="16"></iconify-icon> Comissão</span>
<span className="font-medium text-gray-900">5%</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-500 flex items-center gap-2"><iconify-icon className="text-gray-400" icon="solar:card-linear" width="16"></iconify-icon> Taxa Cartão (12x)</span>
<span className="font-medium text-red-500 bg-red-50 px-1.5 py-0.5 rounded text-xs">-14.5%</span>
</div>
<div className="pt-4 mt-2 border-t border-gray-200/80 flex items-center justify-between">
<span className="text-gray-900 font-medium">Preço de Venda Mínimo</span>
<span className="text-lg font-semibold tracking-tight text-blue-600">R$ 28.940,00</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-6 top-1/2 translate-y-8 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-gray-400 font-medium">Status do Projeto</div>
<div className="text-sm font-semibold text-gray-900 tracking-tight">Venda Segura</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FAFAFA]">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4 text-balance">
                    Você sabe se está realmente ganhando dinheiro?
                </h2>
<p className="text-base text-gray-500 text-balance">
                    Muitas empresas descobrem tarde demais que uma venda volumosa resultou em margem quase nula ou até prejuízo.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-50 to-red-100/50 border border-red-100 text-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2">Vender sem margem clara</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Negociar descontos sem ter um limite mínimo configurado coloca em risco a saúde financeira da operação.
                    </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100/50 border border-gray-200 text-gray-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2">Custos ocultos esquecidos</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Impostos, antecipação de cartão, comissões de montadores e arquitetos muitas vezes ficam de fora da conta principal.
                    </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100/50 border border-gray-200 text-gray-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2">Processo manual e lento</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Perder horas montando planilhas complexas para cada orçamento, aumentando o risco de erros e atrasando respostas.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-gray-100" id="recursos">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                        Assuma o controle da precificação
                    </h2>
<p className="text-base text-gray-500">
                        Ferramentas matemáticas desenhadas para dar clareza absoluta sobre cada centavo do seu projeto.
                    </p>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-gray-50/50 border border-gray-100 hover:border-gray-300 hover:bg-white transition-all group">
<iconify-icon className="text-blue-600 mb-5" icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-base font-medium text-gray-900 mb-2 tracking-tight">Cálculo de Lucro Real</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Veja exatamente quanto vai sobrar no caixa após deduzir todos os impostos, taxas de antecipação e custos operacionais.
                    </p>
</div>
<div className="p-8 rounded-2xl bg-gray-50/50 border border-gray-100 hover:border-gray-300 hover:bg-white transition-all group">
<iconify-icon className="text-blue-600 mb-5" icon="solar:shield-warning-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-base font-medium text-gray-900 mb-2 tracking-tight">Margem Mínima Segura</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Configure seu percentual mínimo aceitável. O sistema trava ou alerta imediatamente caso a negociação ultrapasse esse limite.
                    </p>
</div>
<div className="p-8 rounded-2xl bg-gray-50/50 border border-gray-100 hover:border-gray-300 hover:bg-white transition-all group">
<iconify-icon className="text-blue-600 mb-5" icon="solar:slider-minimalistic-horizontal-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-base font-medium text-gray-900 mb-2 tracking-tight">Simulação de Cenários</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Altere prazos de pagamento, forma de recebimento ou comissão para ver em tempo real o impacto na sua lucratividade.
                    </p>
</div>
<div className="p-8 rounded-2xl bg-gray-50/50 border border-gray-100 hover:border-gray-300 hover:bg-white transition-all group">
<iconify-icon className="text-blue-600 mb-5" icon="solar:danger-triangle-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-base font-medium text-gray-900 mb-2 tracking-tight">Alertas de Prejuízo</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Indicadores visuais claros que sinalizam automaticamente quando uma venda está custando dinheiro ao invés de render.
                    </p>
</div>
<div className="p-8 rounded-2xl bg-gray-50/50 border border-gray-100 hover:border-gray-300 hover:bg-white transition-all group">
<iconify-icon className="text-blue-600 mb-5" icon="solar:document-add-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-base font-medium text-gray-900 mb-2 tracking-tight">Painel de Rentabilidade</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Visão consolidada de todos os seus orçamentos, permitindo analisar quais tipos de projeto geram a melhor margem.
                    </p>
</div>
<div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50/50 to-blue-50/20 border border-blue-100 hover:border-blue-300 hover:bg-blue-50/80 transition-all group relative overflow-hidden">
<div className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-md">Exclusivo</div>
<iconify-icon className="text-blue-600 mb-5" icon="solar:import-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-base font-medium text-gray-900 mb-2 tracking-tight">Importação XML Promob</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                        Traga os dados do seu sistema de projeto diretamente para a plataforma, eliminando digitação dupla de custos.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0A0A0A] text-white relative overflow-hidden" id="moveleiro">
<div className="absolute inset-0 bg-grid-dark pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"></div>
<div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-gray-300 text-xs font-medium mb-6 border border-white/10 backdrop-blur-md">
<iconify-icon icon="solar:armchair-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Nicho Moveleiro
                </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6 text-balance text-white">
                    Feito para lojas de móveis e marcenarias.
                </h2>
<p className="text-base text-gray-400 mb-10 leading-relaxed text-balance">
                    Sabemos que precificar projetos sob medida e ambientes planejados envolve centenas de variáveis. Criamos uma integração fluida para acelerar seu fechamento.
                </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-gray-300 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:file-download-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium mb-1.5 tracking-tight text-gray-100">Integração Promob 1-Click</h4>
<p className="text-sm text-gray-400 leading-relaxed">Arraste o XML do seu projeto e o sistema captura automaticamente o custo das chapas, ferragens e acessórios. Zero digitação.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-gray-300 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium mb-1.5 tracking-tight text-gray-100">Gestão de RT e Montagem</h4>
<p className="text-sm text-gray-400 leading-relaxed">Separe e calcule de forma clara as comissões de vendas, reserva técnica (RT) de arquitetos e custos de montagem individualmente.</p>
</div>
</div>
</div>
</div>
<div className="relative lg:ml-auto w-full max-w-md">
<div className="bg-[#111] border border-white/10 rounded-2xl p-2 shadow-2xl">
<div className="bg-[#0A0A0A] rounded-xl border border-white/10 p-8 flex flex-col items-center justify-center min-h-[320px] border-dashed hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-pointer group">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-5 border border-white/10 group-hover:scale-110 transition-transform group-hover:bg-blue-500/20 group-hover:text-blue-400">
<iconify-icon className="text-gray-500 group-hover:text-blue-400 transition-colors" icon="solar:upload-minimalistic-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h5 className="text-sm font-medium text-gray-200 mb-2">Arraste seu arquivo XML aqui</h5>
<p className="text-xs text-gray-500 mb-6">Suporta arquivos nativos do Promob</p>
<button className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-5 py-2.5 rounded-lg border border-white/5 transition-all backdrop-blur-sm">
                            Procurar arquivo
                        </button>
</div>
</div>

<div className="absolute -bottom-5 -left-5 bg-gray-900 p-4 rounded-xl shadow-2xl flex items-center gap-3 border border-gray-800">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-gray-400">Custos carregados</div>
<div className="text-sm font-medium tracking-tight text-white">Em 0.3 segundos</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-gray-100" id="como-funciona">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                    Metodologia em 4 passos
                </h2>
<p className="text-base text-gray-500">
                    Um fluxo validado para garantir que toda venda seja lucrativa e segura para o caixa do seu negócio.
                </p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative max-w-5xl mx-auto">

<div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 flex items-center justify-center font-medium text-sm mb-5 shadow-sm group-hover:border-gray-400 transition-colors">01</div>
<h3 className="text-base font-medium text-gray-900 mb-2 tracking-tight">Insira os Custos</h3>
<p className="text-sm text-gray-500 leading-relaxed">Cadastre os valores manualmente ou importe o XML direto do Promob.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 flex items-center justify-center font-medium text-sm mb-5 shadow-sm group-hover:border-gray-400 transition-colors">02</div>
<h3 className="text-base font-medium text-gray-900 mb-2 tracking-tight">Configure Variáveis</h3>
<p className="text-sm text-gray-500 leading-relaxed">Defina impostos (Simples, Presumido), comissões e margem alvo.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 flex items-center justify-center font-medium text-sm mb-5 shadow-sm group-hover:border-gray-400 transition-colors">03</div>
<h3 className="text-base font-medium text-gray-900 mb-2 tracking-tight">Simule Cenários</h3>
<p className="text-sm text-gray-500 leading-relaxed">Teste diferentes formas de recebimento e prazos de antecipação.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-xl bg-blue-600 border border-blue-600 text-white flex items-center justify-center font-medium text-sm mb-5 shadow-md shadow-blue-600/20">04</div>
<h3 className="text-base font-medium text-gray-900 mb-2 tracking-tight">Feche com Lucro</h3>
<p className="text-sm text-gray-500 leading-relaxed">Visualize a margem real e envie a proposta com total segurança.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FAFAFA]" id="planos">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4 text-balance">
                    Investimento que se paga no primeiro orçamento bem feito
                </h2>
<p className="text-base text-gray-500">
                    Escolha o plano ideal. Sem taxas escondidas. Cancele quando quiser.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">

<div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2">Mensal</h3>
<p className="text-sm text-gray-500 mb-6 h-10">Flexibilidade para testar e usar conforme a demanda.</p>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-gray-400 text-sm font-medium">R$</span>
<span className="text-4xl font-semibold tracking-tighter text-gray-900">97</span>
<span className="text-gray-500 text-sm">/mês</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-gray-600">
<li className="flex items-center gap-3"><iconify-icon className="text-gray-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Orçamentos ilimitados</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gray-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Importação de XML</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gray-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Simulador de cenários</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gray-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Suporte via email</li>
</ul>
<a className="block w-full text-center bg-white border border-gray-200 shadow-sm text-gray-900 text-sm font-medium px-4 py-3 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all" href="#">
                        Assinar Mensal
                    </a>
</div>

<div className="bg-[#0A0A0A] rounded-3xl border border-gray-800 p-8 shadow-2xl relative md:scale-105 z-10 ring-1 ring-white/10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                        Melhor Valor
                    </div>
<h3 className="text-base font-medium tracking-tight text-white mb-2">Anual</h3>
<p className="text-sm text-gray-400 mb-6 h-10">O plano preferido dos gestores. Foco no longo prazo.</p>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-gray-500 text-sm font-medium">R$</span>
<span className="text-5xl font-semibold tracking-tighter text-white">77</span>
<span className="text-gray-500 text-sm">/mês</span>
</div>
<div className="text-xs text-blue-400 font-medium mb-6 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-lg inline-block">Faturado R$ 924 anualmente</div>
<ul className="space-y-4 mb-8 text-sm text-gray-300">
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Tudo do plano mensal</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Relatórios de rentabilidade</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Suporte prioritário via WhatsApp</li>
<li className="flex items-center gap-3"><iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Congelamento de preço</li>
</ul>
<a className="block w-full text-center bg-white text-gray-900 text-sm font-medium px-4 py-3 rounded-xl hover:bg-gray-100 transition-all shadow-lg" href="#">
                        Assinar Anual
                    </a>
</div>

<div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2">Semestral</h3>
<p className="text-sm text-gray-500 mb-6 h-10">Equilíbrio entre compromisso e economia financeira.</p>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-gray-400 text-sm font-medium">R$</span>
<span className="text-4xl font-semibold tracking-tighter text-gray-900">87</span>
<span className="text-gray-500 text-sm">/mês</span>
</div>
<div className="text-xs text-gray-500 font-medium mb-6 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg inline-block">Faturado R$ 522 semestralmente</div>
<ul className="space-y-4 mb-8 text-sm text-gray-600">
<li className="flex items-center gap-3"><iconify-icon className="text-gray-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Tudo do plano mensal</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gray-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Economia de 10%</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gray-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Suporte via email prioritário</li>
</ul>
<a className="block w-full text-center bg-white border border-gray-200 shadow-sm text-gray-900 text-sm font-medium px-4 py-3 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all" href="#">
                        Assinar Semestral
                    </a>
</div>
</div>

<div className="max-w-2xl mx-auto mt-16 pt-12 border-t border-gray-200">
<div className="flex items-center justify-center gap-2 mb-6">
<iconify-icon className="text-gray-400" icon="solar:lock-password-linear" width="16"></iconify-icon>
<h4 className="text-xs font-medium uppercase tracking-wider text-gray-500">Fluxo de assinatura seguro</h4>
</div>
<div className="grid sm:grid-cols-3 gap-6">
<div className="text-center">
<h5 className="text-sm font-medium text-gray-900 mb-1">1. Cadastro</h5>
<p className="text-xs text-gray-500">Conta criada gratuitamente para vincular seu workspace.</p>
</div>
<div className="text-center">
<h5 className="text-sm font-medium text-gray-900 mb-1">2. Pagamento</h5>
<p className="text-xs text-gray-500">Redirecionamento ao checkout criptografado.</p>
</div>
<div className="text-center">
<h5 className="text-sm font-medium text-gray-900 mb-1">3. Acesso</h5>
<p className="text-xs text-gray-500">Plataforma liberada instantaneamente com todos recursos.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-gray-100 text-center relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-blue-50/50 blur-[80px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 text-gray-900 text-balance">
                Pare de vender sem saber seu lucro real.
            </h2>
<p className="text-lg text-gray-500 mb-10 text-balance">
                Comece a precificar com segurança, ganhe clareza matemática nas negociações e veja o dinheiro sobrar no caixa.
            </p>
<a className="inline-flex items-center justify-center bg-blue-600 text-white text-base font-medium px-8 py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20" href="#planos">
                Criar conta e começar a lucrar
            </a>
<p className="mt-5 text-xs text-gray-400 font-medium">Processo rápido, seguro e sem compromisso inicial.</p>
</div>
</section>

<footer className="bg-white py-12 px-6 border-t border-gray-100">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="font-semibold text-sm tracking-tight text-gray-900 flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded-md bg-gray-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:calculator-minimalistic-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
                    MARGEM DE LUCRO
                </a>
<p className="text-xs text-gray-500 leading-relaxed max-w-xs">
                    Plataforma inteligente para cálculo de preço de venda e gestão de rentabilidade com foco em dados reais.
                </p>
</div>
<div>
<h4 className="text-xs font-medium text-gray-900 mb-4 uppercase tracking-wider">Produto</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#recursos">Recursos</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#moveleiro">Para Moveleiros</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#planos">Preços</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-gray-900 mb-4 uppercase tracking-wider">Empresa</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Sobre nós</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Contato</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-gray-900 mb-4 uppercase tracking-wider">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Termos de Uso</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Privacidade</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-400">© 2024 Margem. Todos os direitos reservados.</p>
</div>
</footer>

    </>
  );
}
