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
sans: ['Inter', 'sans-serif'],
},
colors: {
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
950: '#0a0a0a',
}
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
      

<main className="max-w-[1400px] mx-auto bg-white min-h-screen relative border-x border-neutral-100 selection:bg-neutral-200">

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-lg font-semibold tracking-tighter uppercase">Nexia</div>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors" href="#filtro">
                    Protocolo
                </a>
</div>
</header>

<section className="pt-40 pb-24 px-6 md:px-12 flex flex-col items-center text-center border-b border-neutral-100">
<span className="text-xs font-medium tracking-[0.2em] text-neutral-500 mb-6 uppercase">Protocolo Nexia</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1] text-neutral-950 max-w-5xl mx-auto mb-8">
                Construção completa do seu negócio de IA de alto valor.
            </h1>
<p className="text-neutral-500 text-sm md:text-base font-normal tracking-wide max-w-xl mx-auto mb-12 flex flex-wrap justify-center gap-x-6 gap-y-2">
<span>Posicionamento.</span>
<span>Oferta.</span>
<span>Precificação.</span>
<span>Aquisição.</span>
<span>Fechamento.</span>
</p>
<div className="flex flex-col items-center gap-4">
<a className="bg-neutral-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all flex items-center gap-2 group" href="#filtro">
                    Solicitar Acesso
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<div className="flex items-center gap-2 mt-4 text-neutral-400">
<span className="text-xs font-medium text-neutral-900">Ana Paula Perci</span>
<span className="text-xs">— Fundadora Nexia</span>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-neutral-100">
<div className="max-w-2xl mx-auto">
<div className="flex items-center gap-2 mb-8 text-neutral-900">
<iconify-icon icon="solar:danger-triangle-linear" width="24"></iconify-icon>
<h2 className="text-lg font-semibold tracking-tight uppercase">Antes de continuar</h2>
</div>
<div className="prose prose-neutral prose-lg text-neutral-600 space-y-6 leading-relaxed">
<p className="font-medium text-neutral-900">
                        Isso aqui é pra quem já decidiu que vai construir um NEGÓCIO de IA.
                    </p>
<p>
                        Não é pra quem quer aprender a usar ChatGPT.<br/>
                        Não é pra quem acha que IA é modinha e vai passar.
                    </p>
<p>
                        Se você está procurando mais um curso de ferramenta, essa página não é pra você.
                    </p>
<hr className="border-neutral-200 my-8 w-12"/>
<p>
                        Eu vou ser direta.
                    </p>
<p>
                        O mercado de IA está explodindo. Tem curso de prompt em todo canto. Guru prometendo que você vai criar seu SaaS em 3 cliques. Ferramenta nova toda semana.
                    </p>
<p>
                        E o que todos esses cursos têm em comum?
                    </p>
<p className="text-neutral-900 font-medium">
                        Ensinam a TÉCNICA.<br/>
                        Só a técnica.
                    </p>
<ul className="list-none pl-0 space-y-2 italic text-neutral-500 border-l-2 border-neutral-200 pl-4 my-6">
<li>“Aprenda a usar ChatGPT.”</li>
<li>“Domine automações.”</li>
<li>“Crie agentes de IA.”</li>
</ul>
<p>
                        Ótimo. A pessoa sai sabendo fazer.
                    </p>
<p>
                        Mas não sabe:<br/>
                        Qual solução criar que o mercado PAGA.<br/>
                        Pra quem vender.<br/>
                        Como precificar sem parecer amador.<br/>
                        Como fechar projeto de R$30k, R$50k.<br/>
                        Como transformar isso em empresa.
                    </p>
<p className="font-medium text-neutral-900 bg-neutral-50 p-4 rounded-lg inline-block w-full text-center">
                        Resultado: uma geração inteira de gente tecnicamente competente e financeiramente quebrada.
                    </p>
<p>
                        Você provavelmente já sabe mais de IA que 90% das pessoas.<br/>
                        E tá ganhando quanto com isso?
                    </p>
<p>
                        Se a resposta não te agrada, o problema não é técnico.<br/>
                        É de modelo de negócio.
                    </p>
<p>
                        Você tem a metade técnica.<br/>
                        Falta a metade do negócio.
                    </p>
<p>
                        E ninguém está ensinando essa segunda metade.
                    </p>
<p className="text-neutral-900 font-medium mt-8">
                        Até agora.
                    </p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-neutral-50 border-b border-neutral-100">
<div className="max-w-4xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-6">
                            Bastidores.
                        </h2>
<p className="text-neutral-600 leading-relaxed mb-6">
                            Eu passei 7 anos nos bastidores do digital. Gerando milhões pra outros experts. Levando 4 deles a 7 dígitos. Era a nerd que ninguém dava bola até ver o resultado.
                        </p>
<p className="text-neutral-600 leading-relaxed mb-6">
                            Quando decidi focar em IA, não fui pelo caminho óbvio. Não criei mais um curso de ferramenta. Criei uma EMPRESA que VENDE soluções de IA.
                        </p>
<div className="pl-4 border-l border-neutral-300 italic text-neutral-500 mb-8">
                            "O mercado te ensina a FAZER IA.<br/>
                            Ninguém te ensina a VENDER IA.<br/>
                            E só a segunda parte paga as contas."
                        </div>
<p className="text-sm font-medium text-neutral-900">
                            Eu ensino as duas metades. Técnica E negócio.
                        </p>
</div>
<div className="grid grid-cols-1 gap-4">
<div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
<h3 className="text-sm font-medium text-neutral-400 mb-1 uppercase tracking-wide">Avaliação</h3>
<p className="text-2xl font-semibold text-neutral-900">R$ 10 Milhões</p>
<p className="text-xs text-neutral-500 mt-2">Valor de mercado da empresa em &lt; 1 ano</p>
</div>
<div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
<h3 className="text-sm font-medium text-neutral-400 mb-1 uppercase tracking-wide">Ticket de Projetos</h3>
<p className="text-2xl font-semibold text-neutral-900">30k a 100k</p>
<p className="text-xs text-neutral-500 mt-2">Valor médio de contratos fechados</p>
</div>
<div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
<h3 className="text-sm font-medium text-neutral-400 mb-1 uppercase tracking-wide">Lançamento IA</h3>
<p className="text-2xl font-semibold text-neutral-900">R$ 1 Milhão</p>
<p className="text-xs text-neutral-500 mt-2">Vendido por IA sozinha num único lançamento</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-b border-neutral-100">
<div className="max-w-3xl mx-auto text-center mb-16">
<span className="text-xs font-medium tracking-[0.2em] text-neutral-500 mb-4 block uppercase">A Oferta</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">Protocolo Nexia</h2>
<p className="text-neutral-600 text-lg leading-relaxed">
                    Isso NÃO é mais um curso de IA. Não é mentoria em grupo com call semanal genérica. Não é tutorial de ferramenta.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
<div className="bg-neutral-50 p-10 rounded-2xl border border-neutral-100">
<iconify-icon className="text-neutral-900 mb-6" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight mb-4">Operação de Construção</h3>
<p className="text-neutral-600 mb-6 leading-relaxed">
                        Eu monto COM você. Não fico te mandando assistir aula. Você recebe acesso direto a mim. Assíncrono. Ilimitado. Manda mensagem, eu respondo. Sem esperar call semanal.
                    </p>
<ul className="space-y-3 text-sm text-neutral-700">
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                            30 dias de operação ativa
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                            90 dias de acompanhamento total
                        </li>
</ul>
</div>
<div className="bg-neutral-900 text-white p-10 rounded-2xl border border-neutral-800">
<iconify-icon className="text-white mb-6" icon="solar:briefcase-linear" width="32"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight mb-4">O que você sai com:</h3>
<p className="text-neutral-400 mb-6 leading-relaxed">
                        Um negócio de IA de alto valor completamente estruturado. Você não aprende. Você sai com o negócio montado.
                    </p>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-white" icon="solar:star-linear"></iconify-icon>
                            Posicionamento como Estrategista de IA
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-white" icon="solar:star-linear"></iconify-icon>
                            Oferta principal de R$10k a R$50k+
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-white" icon="solar:star-linear"></iconify-icon>
                            Sistema de aquisição de alto ticket
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-white" icon="solar:star-linear"></iconify-icon>
                            Modelo de fechamento de alto valor
                        </li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white border-b border-neutral-100">
<div className="max-w-5xl mx-auto">
<div className="mb-16">
<span className="text-xs font-medium tracking-[0.2em] text-neutral-500 mb-2 block uppercase">Método E.I.A.</span>
<h2 className="text-4xl font-semibold tracking-tight text-neutral-900">O que acontece durante o protocolo</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border border-neutral-200 rounded-xl p-8 hover:border-neutral-400 transition-colors flex flex-col h-full">
<div className="mb-6">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Fase 1</span>
<h3 className="text-2xl font-semibold text-neutral-900 mt-2">Estrutura</h3>
<p className="text-sm text-neutral-500 mt-1">Dias 1–10</p>
</div>
<p className="text-sm font-medium text-neutral-900 mb-6 min-h-[40px]">
                            "Qual negócio de IA montar, pra quem, e por quanto."
                        </p>
<div className="space-y-4 mb-8 flex-grow">
<div className="text-xs text-neutral-500 uppercase tracking-wide mb-2">Entregável</div>
<div className="font-medium text-neutral-900 text-sm">Dossiê de Estrutura de Negócio</div>
<ul className="text-xs text-neutral-600 space-y-2 leading-relaxed">
<li className="flex gap-2"><span className="text-neutral-300">•</span> Mapeamento do seu mercado ideal</li>
<li className="flex gap-2"><span className="text-neutral-300">•</span> Definição das soluções de alto valor</li>
<li className="flex gap-2"><span className="text-neutral-300">•</span> Estruturação da oferta (R$10k–R$50k+)</li>
<li className="flex gap-2"><span className="text-neutral-300">•</span> Precificação Inversa™</li>
</ul>
</div>
<div className="pt-6 border-t border-neutral-100 mt-auto">
<span className="text-xs text-neutral-400">Valor isolado:</span>
<span className="text-sm font-medium text-neutral-900 block">R$ 12.000</span>
</div>
</div>

<div className="border border-neutral-200 rounded-xl p-8 hover:border-neutral-400 transition-colors flex flex-col h-full bg-neutral-50/50">
<div className="mb-6">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Fase 2</span>
<h3 className="text-2xl font-semibold text-neutral-900 mt-2">Inteligência</h3>
<p className="text-sm text-neutral-500 mt-1">Dias 11–20</p>
</div>
<p className="text-sm font-medium text-neutral-900 mb-6 min-h-[40px]">
                            "Criar as soluções que vendem caro."
                        </p>
<div className="space-y-4 mb-8 flex-grow">
<div className="text-xs text-neutral-500 uppercase tracking-wide mb-2">Entregável</div>
<div className="font-medium text-neutral-900 text-sm">Blueprint Técnico + Templates</div>
<ul className="text-xs text-neutral-600 space-y-2 leading-relaxed">
<li className="flex gap-2"><span className="text-neutral-300">•</span> Soluções exatas de R$30k–R$100k</li>
<li className="flex gap-2"><span className="text-neutral-300">•</span> Template de proposta de 1 página</li>
<li className="flex gap-2"><span className="text-neutral-300">•</span> Framework de treinamento de IA</li>
<li className="flex gap-2"><span className="text-neutral-300">•</span> Scripts de Conversa de Extração™</li>
</ul>
</div>
<div className="pt-6 border-t border-neutral-100 mt-auto">
<span className="text-xs text-neutral-400">Valor isolado:</span>
<span className="text-sm font-medium text-neutral-900 block">R$ 15.000</span>
</div>
</div>

<div className="border border-neutral-200 rounded-xl p-8 hover:border-neutral-400 transition-colors flex flex-col h-full">
<div className="mb-6">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Fase 3</span>
<h3 className="text-2xl font-semibold text-neutral-900 mt-2">Alavancagem</h3>
<p className="text-sm text-neutral-500 mt-1">Dias 21–30</p>
</div>
<p className="text-sm font-medium text-neutral-900 mb-6 min-h-[40px]">
                            "Atrair clientes que pagam caro e fechar sem implorar."
                        </p>
<div className="space-y-4 mb-8 flex-grow">
<div className="text-xs text-neutral-500 uppercase tracking-wide mb-2">Entregável</div>
<div className="font-medium text-neutral-900 text-sm">Plano de Aquisição e Escala</div>
<ul className="text-xs text-neutral-600 space-y-2 leading-relaxed">
<li className="flex gap-2"><span className="text-neutral-300">•</span> Posicionamento estratégico</li>
<li className="flex gap-2"><span className="text-neutral-300">•</span> Sistema de conteúdo de alto nível</li>
<li className="flex gap-2"><span className="text-neutral-300">•</span> Estrutura da Esteira Invisível™</li>
<li className="flex gap-2"><span className="text-neutral-300">•</span> Modelo de proposta OfertAI R$50k+™</li>
</ul>
</div>
<div className="pt-6 border-t border-neutral-100 mt-auto">
<span className="text-xs text-neutral-400">Valor isolado:</span>
<span className="text-sm font-medium text-neutral-900 block">R$ 12.000</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-b border-neutral-100 bg-neutral-50">
<div className="max-w-5xl mx-auto">
<div className="mb-12">
<span className="text-xs font-medium tracking-[0.2em] text-neutral-500 mb-2 block uppercase">Acesso Contínuo</span>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Além das 3 fases</h2>
</div>
<div className="space-y-6">

<div className="bg-white p-8 rounded-xl border border-neutral-200 flex flex-col md:flex-row gap-8 items-start">
<div className="bg-neutral-100 p-3 rounded-lg text-neutral-900">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Acesso Assíncrono Ilimitado (90 Dias)</h3>
<p className="text-neutral-600 text-sm leading-relaxed mb-4">
                                Você manda mensagem, eu respondo. Sem fila. Sem esperar call semanal. Se travou num ponto da oferta às 11h da noite, manda. Se precisa de validação numa proposta de R$50k antes de enviar pro cliente, manda. Eu respondo tudo.
                            </p>
<span className="text-xs font-medium text-neutral-400">Valor isolado: R$ 15.000</span>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-neutral-200 flex flex-col md:flex-row gap-8 items-start">
<div className="bg-neutral-100 p-3 rounded-lg text-neutral-900">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Grupo de Negócios</h3>
<p className="text-neutral-600 text-sm leading-relaxed mb-4">
                                Grupo exclusivo com outros Estrategistas de IA que estão construindo negócios reais. Oportunidades de parceria, referral, aprendizado cruzado. Gente que fecha projeto de 5 dígitos.
                            </p>
<span className="text-xs font-medium text-neutral-400">Valor isolado: R$ 5.000</span>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-neutral-200 flex flex-col md:flex-row gap-8 items-start">
<div className="bg-neutral-100 p-3 rounded-lg text-neutral-900">
<iconify-icon icon="solar:videocamera-record-linear" width="24"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Zoom de Destravamento</h3>
<p className="text-neutral-600 text-sm leading-relaxed mb-4">
                                Se travar em algo que texto não resolve, a gente abre um Zoom. Pontual. Cirúrgico. Não é call semanal obrigatória. É quando você realmente precisa.
                            </p>
<span className="text-xs font-medium text-neutral-400">Valor isolado: R$ 3.000</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-b border-neutral-100">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<span className="text-xs font-medium tracking-[0.2em] text-neutral-500 mb-2 block uppercase">Investimento</span>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Empilhamento de Valor</h2>
</div>
<div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden mb-12">
<div className="divide-y divide-neutral-100">
<div className="flex justify-between items-center p-5 text-sm">
<span className="text-neutral-600">Dossiê de Estrutura de Negócio (Fase 1)</span>
<span className="font-medium text-neutral-400">R$ 12.000</span>
</div>
<div className="flex justify-between items-center p-5 text-sm">
<span className="text-neutral-600">Blueprint Técnico + Templates (Fase 2)</span>
<span className="font-medium text-neutral-400">R$ 15.000</span>
</div>
<div className="flex justify-between items-center p-5 text-sm">
<span className="text-neutral-600">Plano de Aquisição e Escala (Fase 3)</span>
<span className="font-medium text-neutral-400">R$ 12.000</span>
</div>
<div className="flex justify-between items-center p-5 text-sm">
<span className="text-neutral-600">Acesso assíncrono ilimitado (90 dias)</span>
<span className="font-medium text-neutral-400">R$ 15.000</span>
</div>
<div className="flex justify-between items-center p-5 text-sm">
<span className="text-neutral-600">Grupo de Negócios exclusivo</span>
<span className="font-medium text-neutral-400">R$ 5.000</span>
</div>
<div className="flex justify-between items-center p-5 text-sm">
<span className="text-neutral-600">Zooms de destravamento</span>
<span className="font-medium text-neutral-400">R$ 3.000</span>
</div>
<div className="flex justify-between items-center p-5 bg-neutral-50">
<span className="font-semibold text-neutral-900">VALOR TOTAL</span>
<span className="font-semibold text-neutral-500 line-through decoration-1">R$ 62.000</span>
</div>
</div>
</div>
<div className="text-center">
<p className="text-sm font-medium text-neutral-500 mb-4 uppercase tracking-wide">Investimento do Protocolo Nexia:</p>
<div className="text-5xl md:text-6xl font-semibold text-neutral-900 tracking-tight mb-4">
                        R$ 25.000
                    </div>
<p className="text-neutral-500 text-sm mb-8">Ou condições facilitadas que cabem na sua realidade.</p>
<div className="bg-neutral-900 text-white p-6 rounded-xl inline-block max-w-lg mx-auto text-sm leading-relaxed">
                        Se você fechar UM projeto de R$30k com o que vai sair daqui, já pagou o investimento e sobrou.
                        <br/><span className="opacity-70 mt-2 block text-xs">A maioria faz isso nos primeiros 60 dias.</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-neutral-50 border-b border-neutral-100">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 text-center mb-16">A Escolha</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white border-2 border-neutral-900 p-8 rounded-xl shadow-sm relative">
<div className="absolute -top-3 left-8 bg-neutral-900 text-white text-xs px-3 py-1 font-medium rounded">RECOMENDADO</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-4">Caminho 1: Entra agora.</h3>
<ul className="space-y-3 text-sm text-neutral-700">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                Em 30 dias tem negócio de IA estruturado.
                            </li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                Primeiro projeto de R$10k–R$50k+ nos próximos 60–90 dias.
                            </li>
</ul>
</div>

<div className="bg-white border border-neutral-200 p-8 rounded-xl text-neutral-500">
<h3 className="text-xl font-medium text-neutral-700 mb-4">Caminho 2: Espera.</h3>
<p className="text-sm mb-2">Continua na Fila dos 99%.</p>
<p className="text-sm">Competindo por freela de R$500 com gente que fez o mesmo curso que você.</p>
</div>

<div className="bg-white border border-neutral-200 p-8 rounded-xl text-neutral-500">
<h3 className="text-xl font-medium text-neutral-700 mb-4">Caminho 3: Tenta sozinho.</h3>
<p className="text-sm mb-2">6–12 meses errando. Mais cursos de técnica.</p>
<p className="text-sm">Mais conhecimento. Mesmo faturamento.</p>
</div>
</div>
<div className="text-center mt-12 max-w-2xl mx-auto">
<p className="text-lg font-medium text-neutral-900 mb-2">99% vai continuar sabendo IA e não pagando as contas.</p>
<p className="text-neutral-500">Porque só aprenderam a técnica. E pararam aí.<br/>O 1% aprende técnica E negócio. O Protocolo Nexia forma o 1%.</p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-b border-neutral-100" id="filtro">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

<div>
<h3 className="text-lg font-semibold text-neutral-900 mb-8 flex items-center gap-2">
<iconify-icon icon="solar:check-square-linear"></iconify-icon>
                        Pra quem funciona
                    </h3>
<ul className="space-y-4">
<li className="flex gap-4 text-sm text-neutral-700">
<iconify-icon className="mt-0.5 text-neutral-400 flex-shrink-0" icon="solar:arrow-right-linear"></iconify-icon>
                            Profissionais que já sabem IA (ou estão aprendendo) mas não sabem como transformar em negócio
                        </li>
<li className="flex gap-4 text-sm text-neutral-700">
<iconify-icon className="mt-0.5 text-neutral-400 flex-shrink-0" icon="solar:arrow-right-linear"></iconify-icon>
                            Consultores, estratégicos, produtores, designers que querem migrar pra IA de alto valor
                        </li>
<li className="flex gap-4 text-sm text-neutral-700">
<iconify-icon className="mt-0.5 text-neutral-400 flex-shrink-0" icon="solar:arrow-right-linear"></iconify-icon>
                            Gente que já fez freela de IA mas não consegue sair do ticket baixo
                        </li>
<li className="flex gap-4 text-sm text-neutral-700">
<iconify-icon className="mt-0.5 text-neutral-400 flex-shrink-0" icon="solar:arrow-right-linear"></iconify-icon>
                            Profissionais que querem montar empresa de IA, não fazer bico
                        </li>
<li className="flex gap-4 text-sm text-neutral-700">
<iconify-icon className="mt-0.5 text-neutral-400 flex-shrink-0" icon="solar:arrow-right-linear"></iconify-icon>
                            Pessoas que sabem que o problema é modelo de negócio, não falta de técnica
                        </li>
</ul>
</div>

<div>
<h3 className="text-lg font-semibold text-neutral-900 mb-8 flex items-center gap-2">
<iconify-icon icon="solar:close-square-linear"></iconify-icon>
                        Pra quem não é
                    </h3>
<ul className="space-y-4">
<li className="flex gap-4 text-sm text-neutral-500">
<iconify-icon className="mt-0.5 text-neutral-300 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                            Se você quer aprender a usar ChatGPT, tem curso de R$97 pra isso.
                        </li>
<li className="flex gap-4 text-sm text-neutral-500">
<iconify-icon className="mt-0.5 text-neutral-300 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                            Se você acha que IA é hype e vai passar, boa sorte.
                        </li>
<li className="flex gap-4 text-sm text-neutral-500">
<iconify-icon className="mt-0.5 text-neutral-300 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                            Se você quer fórmula mágica sem executar, não é aqui.
                        </li>
<li className="flex gap-4 text-sm text-neutral-500">
<iconify-icon className="mt-0.5 text-neutral-300 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                            Se R$25.000 parece caro pra montar um negócio que fecha projetos de R$50k+, não é o seu momento.
                        </li>
</ul>
<p className="mt-8 text-xs text-neutral-400 uppercase tracking-wider">Sem julgamento. Só não é aqui.</p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12">
<div className="max-w-xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-12 text-center">Processo de Entrada</h2>
<div className="relative border-l border-neutral-200 ml-3 space-y-12 pb-4">

<div className="pl-8 relative">
<span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-neutral-900 rounded-full border-2 border-white ring-1 ring-neutral-200"></span>
<h3 className="text-base font-semibold text-neutral-900">01. Você solicita.</h3>
<p className="text-sm text-neutral-500 mt-1">Manda mensagem dizendo que tem interesse.</p>
</div>

<div className="pl-8 relative">
<span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-white rounded-full border-2 border-neutral-300"></span>
<h3 className="text-base font-semibold text-neutral-900">02. Eu analiso.</h3>
<p className="text-sm text-neutral-500 mt-1">Vejo se o seu perfil faz sentido pro Protocolo. Não aceito todo mundo.</p>
</div>

<div className="pl-8 relative">
<span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-white rounded-full border-2 border-neutral-300"></span>
<h3 className="text-base font-semibold text-neutral-900">03. Se fizer sentido, você recebe os detalhes.</h3>
<p className="text-sm text-neutral-500 mt-1">Sem call de vendas. Sem follow-up. Sem insistência.</p>
</div>
</div>
<div className="mt-12 text-center">
<button className="w-full md:w-auto bg-neutral-900 text-white px-12 py-4 rounded-xl text-base font-medium hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl hover:shadow-neutral-200">
                        Aplicar para o Protocolo Nexia
                    </button>
</div>
<div className="mt-20 pt-12 border-t border-neutral-100 text-center space-y-4">
<p className="text-neutral-600">
                        Todo mundo quer surfar a onda da IA.<br/>
                        99% vai continuar no mesmo lugar.
                    </p>
<p className="text-neutral-600">
                        Porque estão aprendendo só a técnica.<br/>
                        E parando aí.
                    </p>
<p className="font-medium text-neutral-900">
                        Se você quer entrar no 1% que vai realmente construir negócio de IA, precisa das duas metades.
                    </p>
<p className="text-neutral-600">
                        E isso só eu ensino.<br/>
                        Porque só eu fiz.
                    </p>
<p className="text-neutral-600 mt-8">
                        Sem pressa e sem pausa.
                    </p>
<div className="pt-8">
<p className="text-sm font-medium text-neutral-900">Um abraço.</p>
<p className="text-sm text-neutral-500 mt-1">Ana Paula Perci</p>
<p className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">Fundadora — Nexia</p>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-neutral-100 text-center">
<span className="text-xs font-semibold tracking-tighter uppercase text-neutral-300">Nexia © 2024</span>
</footer>
</main>

    </>
  );
}
