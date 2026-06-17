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
      

<main className="w-full max-w-2xl bg-white border border-zinc-200 shadow-sm rounded-2xl overflow-hidden relative">

<header className="pt-10 px-6 md:px-12 flex flex-col gap-4">
<div className="uppercase md:text-sm inline-block text-xs font-medium text-zinc-800 tracking-tight bg-zinc-50 w-max border-zinc-200 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3">SPRINT.CONVERSÃO 7D - Ariel bozzani</div>
<div className="flex text-sm font-medium text-zinc-500 gap-x-2 gap-y-2 items-center">2 Vagas / Abril 2026</div>
</header>

<section className="px-6 md:px-12 py-10 md:py-14">
<h1 className="md:text-5xl leading-tight text-3xl font-medium text-zinc-900 tracking-tight font-condensed mb-8">Extraia 10% a 30% a Mais Receita do Mesmo Funil em 7 Dias Sem Aumentar Tráfego</h1>
<div className="space-y-6">
<p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-normal">
                    Se você já vende todos os meses, investe em tráfego e sente que sua conversão poderia ser maior, este Sprint é para você.
                </p>
<p className="text-lg md:text-xl text-zinc-900 leading-relaxed font-medium">
                    Em 7 dias, eu identifico onde sua mensagem e sua oferta estão travando conversão — e reestruturo os pontos críticos para extrair mais receita do seu funil atual.
                </p>
</div>
</section>

<section className="bg-zinc-50 border-t border-zinc-200 px-6 md:px-12 py-12 md:py-16">
<h2 className="font-condensed text-2xl md:text-3xl font-medium mb-10 text-zinc-900 tracking-tight uppercase">O Problema Real</h2>
<div className="flex flex-col gap-10">
<div className="space-y-6">
<p className="text-zinc-900 font-medium text-lg leading-relaxed">
                        Negócios que já faturam entre 20k e 50k por mês quase nunca travam por falta de produto.
                    </p>
<div className="bg-white border border-zinc-200 p-6 rounded-xl shadow-sm">
<p className="text-zinc-600 mb-4 font-normal">Travam por desalinhamento entre:</p>
<ul className="space-y-4 text-zinc-800 font-normal">
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                                Promessa e dor real
                            </li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                                Argumento e decisão
                            </li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                                Comunicação e fechamento
                            </li>
</ul>
</div>
</div>
<div className="space-y-6">
<div className="">
<p className="text-zinc-800 font-medium mb-3">O resultado?</p>
<div className="bg-zinc-100 p-5 rounded-xl text-zinc-700 font-normal space-y-3">
<p className="flex items-center gap-3"><iconify-icon className="text-zinc-400 text-lg" icon="solar:round-alt-arrow-right-linear"></iconify-icon> Leads entram.</p>
<p className="flex items-center gap-3"><iconify-icon className="text-zinc-400 text-lg" icon="solar:round-alt-arrow-right-linear"></iconify-icon> Conversas acontecem.</p>
<p className="flex items-center gap-3"><iconify-icon className="text-zinc-400 text-lg" icon="solar:round-alt-arrow-right-linear"></iconify-icon> Mas a conversão não escala.</p>
</div>
</div>
<div className="text-zinc-700 font-normal space-y-2 bg-white p-6 border border-zinc-200 rounded-xl">
<p>Você aumenta orçamento. O ROI não acompanha.</p>
<p>Você começa a achar que precisa de mais tráfego. Mas o problema quase nunca é tráfego.</p>
<div className="mt-6 pt-6 border-t border-zinc-100">
<p className="text-zinc-500 font-normal italic">E a sensação constante é: "Poderia estar vendendo mais."</p>
<p className="text-zinc-900 font-medium mt-2">Na maioria das vezes, poderia mesmo.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-y border-zinc-200 py-12 md:py-16">
<div className="px-6 md:px-12 mb-10">
<h2 className="font-condensed text-2xl md:text-3xl font-medium mb-6 text-zinc-900 tracking-tight uppercase">Por que eu criei esse Sprint</h2>
<div className="space-y-4 text-lg text-zinc-600 font-normal leading-relaxed">
<p>Eu não criei esse processo da teoria.</p>
<p className="">Ele nasceu dentro de uma operação que já faturava múltiplos seis dígitos por mês. Mesmo com tráfego constante e equipe estruturada, a conversão era instável.</p>
<p>A promessa não sustentava o fechamento. O time comercial compensava no esforço. E o faturamento oscilava.</p>
<p className="text-zinc-900 font-medium pt-2">Após ajustes estratégicos na promessa, no funil e no alinhamento do closer:</p>
</div>
</div>
<div className="flex flex-col border-y border-zinc-200">
<div className="p-6 md:p-12 bg-zinc-50 border-b border-zinc-200">
<h3 className="font-condensed text-xl font-medium text-zinc-500 mb-6 uppercase tracking-tight">Antes</h3>
<div className="space-y-4 text-zinc-700 font-normal">
<p className="flex gap-3 items-center"><iconify-icon className="text-zinc-400 flex-shrink-0 text-xl" icon="solar:close-square-linear"></iconify-icon> Faturamento médio mensal: <span className="font-medium text-zinc-900 ml-1">~R$120k</span></p>
<p className="flex gap-3 items-center"><iconify-icon className="text-zinc-400 flex-shrink-0 text-xl" icon="solar:close-square-linear"></iconify-icon> Taxa de fechamento: <span className="font-medium text-zinc-900 ml-1">8%</span></p>
</div>
</div>
<div className="p-6 md:p-12 bg-white">
<h3 className="font-condensed text-xl font-medium text-zinc-900 mb-6 uppercase tracking-tight flex items-center gap-2">
                        Depois <span className="text-sm font-normal text-zinc-500 normal-case tracking-normal">(60 dias)</span>
</h3>
<div className="space-y-4 text-zinc-800 font-normal">
<p className="flex gap-3 items-center font-medium text-lg text-emerald-600 mb-6"><iconify-icon className="text-emerald-500 flex-shrink-0 text-xl" icon="solar:check-square-linear"></iconify-icon> Faturamento médio: ~R$220k</p>
<p className="flex gap-3 items-center"><iconify-icon className="text-zinc-400 flex-shrink-0 text-xl" icon="solar:check-square-linear"></iconify-icon> +86% de crescimento</p>
<p className="flex gap-3 items-center"><iconify-icon className="text-zinc-400 flex-shrink-0 text-xl" icon="solar:check-square-linear"></iconify-icon> +R$100.000 adicionais</p>
<p className="flex gap-3 items-center"><iconify-icon className="text-zinc-400 flex-shrink-0 text-xl" icon="solar:check-square-linear"></iconify-icon> Mesma base de tráfego</p>
<p className="flex gap-3 items-center"><iconify-icon className="text-zinc-400 flex-shrink-0 text-xl" icon="solar:check-square-linear"></iconify-icon> Mesma equipe</p>
<p className="flex gap-3 items-center"><iconify-icon className="text-zinc-400 flex-shrink-0 text-xl" icon="solar:check-square-linear"></iconify-icon> Sem aumento de investimento</p>
</div>
</div>
</div>
<div className="px-6 md:px-12 mt-10 space-y-6 text-zinc-700 font-normal text-lg">
<p className="">
                    O principal ajuste foi reposicionamento da promessa central e reestruturação do argumento de venda com ancoragem espelhada.
                </p>
<div className="bg-zinc-900 text-white p-8 rounded-xl shadow-md border border-zinc-800 mt-8">
<p className="font-medium mb-3 text-zinc-300">Foi ali que ficou claro:</p>
<p className="text-zinc-300 text-xl">O problema não era tráfego.<br/><span className="text-white font-medium">Era engenharia de conversão.</span></p>
<p className="text-zinc-400 text-base mt-6 pt-6 border-t border-zinc-800">O Sprint nasceu para replicar esse ajuste de forma estruturada em 7 dias.</p>
</div>
</div>
</section>

<section className="bg-zinc-50 px-6 md:px-12 py-12 md:py-16 text-center flex flex-col items-center">
<h2 className="font-condensed text-2xl md:text-3xl font-medium mb-6 text-zinc-900 tracking-tight uppercase">O que é o Sprint de Conversão 7D</h2>
<p className="text-lg text-zinc-900 font-medium mb-10 leading-relaxed max-w-lg">
                Um processo intensivo de diagnóstico e reestruturação dos pontos que impactam diretamente sua receita.
            </p>
<ul className="flex flex-col gap-3 text-zinc-600 font-normal mb-10 w-full max-w-sm">
<li className="bg-white px-5 py-4 rounded-xl border border-zinc-200 shadow-sm text-sm md:text-base">Sem acompanhamento longo.</li>
<li className="bg-white px-5 py-4 rounded-xl border border-zinc-200 shadow-sm text-sm md:text-base">Sem plano bonito que ninguém executa.</li>
<li className="bg-white px-5 py-4 rounded-xl border border-zinc-200 shadow-sm text-sm md:text-base">Sem reinvenção da empresa.</li>
</ul>
<div className="inline-block border border-zinc-300 text-zinc-900 uppercase tracking-tight font-medium px-6 py-3 rounded-lg text-sm bg-white shadow-sm w-full max-w-sm">
                Foco total em conversão.
            </div>
</section>

<section className="bg-white border-t border-zinc-200 px-6 md:px-12 py-12 md:py-16">
<h2 className="font-condensed text-2xl md:text-3xl font-medium mb-10 text-center text-zinc-900 tracking-tight uppercase">O que você recebe em 7 dias</h2>
<div className="flex flex-col gap-4 mb-10">

<div className="flex flex-col md:flex-row gap-4 p-6 rounded-xl border border-zinc-200 bg-zinc-50 items-start">
<div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex-shrink-0 flex items-center justify-center font-condensed font-medium text-sm">1</div>
<div>
<h3 className="font-condensed text-xl font-medium text-zinc-900 tracking-tight mb-2 uppercase">Diagnóstico de Vazamento de Receita</h3>
<p className="text-zinc-600 font-normal text-sm md:text-base">Mapa claro de onde sua conversão está travando hoje.</p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-4 p-6 rounded-xl border border-zinc-200 bg-zinc-50 items-start">
<div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex-shrink-0 flex items-center justify-center font-condensed font-medium text-sm">2</div>
<div>
<h3 className="font-condensed text-xl font-medium text-zinc-900 tracking-tight mb-2 uppercase">Reestruturação da Promessa Principal</h3>
<p className="text-zinc-600 font-normal text-sm md:text-base">Ajuste fino da sua mensagem central para aumentar percepção de valor e decisão.</p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-4 p-6 rounded-xl border border-zinc-200 bg-zinc-50 items-start">
<div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex-shrink-0 flex items-center justify-center font-condensed font-medium text-sm">3</div>
<div>
<h3 className="font-condensed text-xl font-medium text-zinc-900 tracking-tight mb-2 uppercase">Ajustes Críticos de Copy</h3>
<p className="text-zinc-600 font-normal text-sm md:text-base">Headline, oferta, ancoragem e chamada para ação com foco direto em conversão.</p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-4 p-6 rounded-xl border border-zinc-200 bg-zinc-50 items-start">
<div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex-shrink-0 flex items-center justify-center font-condensed font-medium text-sm">4</div>
<div className="">
<h3 className="font-condensed text-xl font-medium text-zinc-900 tracking-tight mb-2 uppercase">Refinamento do Script Comercial</h3>
<p className="text-zinc-600 font-normal text-sm md:text-base">Alinhamento entre discurso e decisão para reduzir objeções e encurtar fechamento.</p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-4 p-6 rounded-xl border border-zinc-200 bg-zinc-50 items-start">
<div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex-shrink-0 flex items-center justify-center font-condensed font-medium text-sm">5</div>
<div>
<h3 className="font-condensed text-xl font-medium text-zinc-900 tracking-tight mb-2 uppercase">Plano de Implementação de 30 Dias</h3>
<p className="text-zinc-600 font-normal text-sm md:text-base">Lista priorizada de ajustes com foco em impacto financeiro.</p>
</div>
</div>
</div>
<div className="text-center border-t border-zinc-100 pt-8">
<p className="text-zinc-900 font-medium mb-2">Entrega em documento estratégico + vídeo explicativo.</p>
<p className="text-zinc-500 font-normal text-sm">Suporte pontual posterior assíncrono por 15 dias.</p>
</div>
</section>

<section className="flex flex-col border-t border-zinc-200">
<div className="bg-zinc-50 p-6 md:p-12 border-b border-zinc-200">
<h3 className="font-condensed text-xl font-medium text-zinc-500 mb-6 uppercase tracking-tight flex items-center gap-3">
<iconify-icon className="text-2xl" icon="solar:forbidden-circle-linear"></iconify-icon> O que não é
                </h3>
<ul className="space-y-4 text-zinc-700 font-normal mb-8">
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></span> Não é gestão de redes.</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></span> Não é tráfego pago.</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></span> Não é execução operacional.</li>
</ul>
<div className="bg-white border border-zinc-200 p-5 rounded-xl">
<p className="text-zinc-900 font-medium text-lg">É engenharia de conversão.</p>
</div>
</div>
<div className="bg-white p-6 md:p-12">
<h3 className="font-condensed text-xl font-medium text-zinc-900 mb-6 uppercase tracking-tight flex items-center gap-3">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear"></iconify-icon> Resultado Esperado
                </h3>
<ul className="space-y-4 text-zinc-800 font-medium mb-8">
<li className="flex items-start gap-3"><iconify-icon className="mt-1 text-zinc-400 flex-shrink-0 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon> Aumento de taxa de conversão.</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-1 text-zinc-400 flex-shrink-0 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon> Redução de fricção no fechamento.</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-1 text-zinc-400 flex-shrink-0 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon> Extração de mais receita com o mesmo tráfego.</li>
</ul>
<p className="text-zinc-500 text-sm font-normal pt-6 border-t border-zinc-100">
                    Em operações menores, os ajustes tendem a gerar impacto ainda mais rápido.
                </p>
</div>
</section>

<section className="bg-zinc-50 border-y border-zinc-200 px-6 md:px-12 py-12 md:py-16">
<h2 className="font-condensed text-2xl md:text-3xl font-medium mb-8 text-zinc-900 tracking-tight uppercase text-center">Para quem é</h2>
<div className="flex flex-col gap-3 max-w-sm mx-auto w-full">
<div className="px-5 py-4 bg-white rounded-xl border border-zinc-200 text-zinc-800 font-normal shadow-sm flex gap-3 items-center">
<iconify-icon className="text-zinc-900 text-xl flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Já vende todos os meses</span>
</div>
<div className="px-5 py-4 bg-white rounded-xl border border-zinc-200 text-zinc-800 font-normal shadow-sm flex gap-3 items-center">
<iconify-icon className="text-zinc-900 text-xl flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Já investe em tráfego</span>
</div>
<div className="px-5 py-4 bg-white rounded-xl border border-zinc-200 text-zinc-800 font-normal shadow-sm flex gap-3 items-center">
<iconify-icon className="text-zinc-900 text-xl flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Fatura entre 20k e 50k por mês</span>
</div>
<div className="px-5 py-4 bg-white rounded-xl border border-zinc-200 text-zinc-800 font-normal shadow-sm flex gap-3 items-center">
<iconify-icon className="text-zinc-900 text-xl flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Sente que há dinheiro na mesa</span>
</div>
</div>
</section>

<footer className="bg-zinc-900 text-white px-6 md:px-12 py-12 md:py-16">
<div className="flex flex-col text-center border-b border-zinc-800 pb-12 mb-12">
<h2 className="text-zinc-400 text-sm uppercase tracking-tight mb-4 font-medium">Investimento</h2>
<div className="font-condensed text-5xl md:text-6xl font-medium mb-8 tracking-tight text-white">R$ 5.000</div>
<p className="text-zinc-300 mb-3 leading-relaxed font-normal text-base md:text-lg">
                    Se você fatura R$50k/mês, um aumento de 10% representa R$5.000 adicionais.
                </p>
<p className="text-zinc-100 font-medium text-base md:text-lg">
                    Um único aumento mínimo de 10% já cobre o investimento.
                </p>
</div>
<div className="flex flex-col">
<h3 className="font-condensed text-xl mb-10 text-zinc-400 uppercase tracking-tight text-center font-medium">Processo</h3>
<ol className="space-y-6 text-zinc-300 relative border-l border-zinc-800 pl-8 ml-4 mb-14 text-sm md:text-base font-normal">
<li className="relative">
<span className="absolute -left-[45px] top-[-2px] w-7 h-7 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center text-xs font-medium text-white font-condensed">1</span>
                        Você solicita análise inicial.
                    </li>
<li className="relative">
<span className="absolute -left-[45px] top-[-2px] w-7 h-7 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center text-xs font-medium text-white font-condensed">2</span>
                        Eu avalio se há potencial real de aumento de receita.
                    </li>
<li className="relative">
<span className="absolute -left-[45px] top-[-2px] w-7 h-7 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center text-xs font-medium text-white font-condensed">3</span>
                        Se fizer sentido, iniciamos o Sprint de 7 dias.
                    </li>
</ol>
<div className="space-y-6 text-center text-zinc-400 font-normal mb-12 text-sm md:text-base px-2">
<p className="text-zinc-200">Sem call de vendas longa. Sem proposta infinita. Sem ruído.</p>
<p className="">Cada mês com conversão desalinhada custa mais do que este Sprint. <br className="hidden md:block"/>Se fizer sentido para sua operação, você recebe o plano em 7 dias. <br className="hidden md:block"/>Se não houver potencial real, eu não aceito.</p>
<p className="text-white font-medium">Se você já construiu uma base sólida, mas sente que sua receita poderia estar maior com o que já tem, esta é a etapa de ajuste que falta.</p>
</div>
<button className="group hover:bg-zinc-100 transition-colors md:w-auto flex text-base font-medium text-zinc-900 bg-white w-full rounded-xl mr-auto ml-auto pt-4 pr-8 pb-4 pl-8 shadow-sm gap-x-3 gap-y-3 items-center justify-center">
                    Solicitar Análise de Receita
                    <iconify-icon className="group-hover:translate-x-1 transition-transform text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="mt-10 text-center text-xs text-zinc-500 font-normal">
<p>P.S.: 2 vagas para Março/2026</p>
</div>
</div>
</footer>
</main>

    </>
  );
}
