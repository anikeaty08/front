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
      

<nav className="fixed w-full z-50 bg-[#0B0F19]/90 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex-shrink-0">
<img alt="Bikows Engenharia" className="h-10 w-auto" src="https://bikowsengenharia.com.br/wp-content/uploads/2023/10/Logo-Bikows.png"/>
</div>
<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#solucoes">Soluções NR12</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#projetos">Nossos Projetos</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#diferenciais">Por Que a Bikows?</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#contato">Contato</a>
</div>
</div>
<div className="hidden md:block">
<a className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-[#4A90D9] hover:bg-[#3a7bc2] shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4A90D9] focus:ring-offset-[#0B0F19]" href="#contato">
                        FALAR COM ENGENHEIRO
                    </a>
</div>

<div className="-mr-2 flex md:hidden">
<button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" type="button">
<i className="h-6 w-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</nav>

<div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#0B0F19]">
<div className="absolute inset-0">
<img alt="Fundo Industrial" className="w-full h-full object-cover opacity-30" src="https://bikowsengenharia.com.br/wp-content/uploads/2023/10/backgound-inicio.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 max-w-4xl leading-tight">
                Adequação NR12 Completa para Máquinas Industriais: Sua Operação Segura e Sem Multas.
            </h1>
<p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl font-normal leading-relaxed">
                Projeto, fabricação, instalação e laudo com ART garantem conformidade com a NR12, evitando fiscalizações e otimizando a produtividade do seu negócio em PR, SC e SP.
            </p>
<div className="flex flex-col items-start text-left space-y-4 mb-12 max-w-2xl bg-[#111827]/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
<div className="flex items-start">
<i className="h-6 w-6 text-[#4A90D9] mr-3 mt-0.5 flex-shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-base text-gray-200">Engenheiro responsável com registro no CREA assinando seu projeto.</span>
</div>
<div className="flex items-start">
<i className="h-6 w-6 text-[#4A90D9] mr-3 mt-0.5 flex-shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-base text-gray-200">Equipe e estrutura própria para garantir a execução com agilidade.</span>
</div>
<div className="flex items-start">
<i className="h-6 w-6 text-[#4A90D9] mr-3 mt-0.5 flex-shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-base text-gray-200">Solução completa: do diagnóstico ao laudo, sem depender de múltiplos fornecedores.</span>
</div>
<div className="flex items-start">
<i className="h-6 w-6 text-[#4A90D9] mr-3 mt-0.5 flex-shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-base text-gray-200">Proteja sua equipe e evite autuações com conformidade comprovada.</span>
</div>
<div className="flex items-start">
<i className="h-6 w-6 text-[#4A90D9] mr-3 mt-0.5 flex-shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-base text-gray-200">Reduza custos com paradas não programadas e acidentes.</span>
</div>
</div>
<a className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-[#4A90D9] hover:bg-[#3a7bc2] shadow-lg hover:shadow-xl transition-all duration-200" href="https://wa.me/5511947619040" target="_blank">
                FALAR COM UM ENGENHEIRO NO WHATSAPP
                <i className="ml-2 h-5 w-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="bg-white py-24 border-t border-gray-100" id="diferenciais">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl">
<img alt="Máquina antes da adequação" className="w-full h-auto object-cover" src="https://bikowsengenharia.com.br/wp-content/uploads/2025/09/rapid-antes.png"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                        Você sabe o que é ter uma máquina parada ou ser notificado pelo Ministério do Trabalho?
                    </h2>
<p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        É a pressão de ver a produção comprometida, o risco de multas elevadas, a insegurança da equipe e o receio de acidentes. Cada dia sem conformidade é um risco real de prejuízo financeiro e reputacional para sua indústria. Não deveria ser assim.
                    </p>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        E o pior: adiar a adequação pode transformar um custo gerenciável em um problema gigante. Um acidente pode gerar processos milionários, danos irreversíveis à imagem da empresa e interdição da linha de produção.
                    </p>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Provavelmente sua empresa está enfrentando:</h3>
<ul className="space-y-4">
<li className="flex items-start">
<i className="h-6 w-6 text-[#B55A5A] mr-3 mt-0.5 flex-shrink-0" data-lucide="alert-triangle" strokeWidth="1.5"></i>
<span className="text-base text-gray-700">Máquinas antigas sem proteções adequadas, expondo operadores ao risco.</span>
</li>
<li className="flex items-start">
<i className="h-6 w-6 text-[#B55A5A] mr-3 mt-0.5 flex-shrink-0" data-lucide="alert-triangle" strokeWidth="1.5"></i>
<span className="text-base text-gray-700">Dificuldade em encontrar um parceiro que entregue a solução completa (projeto, fabricação, instalação e laudo).</span>
</li>
<li className="flex items-start">
<i className="h-6 w-6 text-[#B55A5A] mr-3 mt-0.5 flex-shrink-0" data-lucide="alert-triangle" strokeWidth="1.5"></i>
<span className="text-base text-gray-700">Incerteza sobre a documentação necessária para fiscalizações (APR, ART, manuais).</span>
</li>
<li className="flex items-start">
<i className="h-6 w-6 text-[#B55A5A] mr-3 mt-0.5 flex-shrink-0" data-lucide="alert-triangle" strokeWidth="1.5"></i>
<span className="text-base text-gray-700">Medo de custos ocultos e prazos estourados em projetos de adequação.</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="bg-[#0B0F19] py-24 relative overflow-hidden">
<div className="absolute inset-y-0 right-0 w-1/2 bg-[#111827] rounded-l-full opacity-50 blur-3xl transform translate-x-1/2"></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                        A solução definitiva para a conformidade da sua indústria.
                    </h2>
<p className="text-lg text-gray-400 mb-6 leading-relaxed">
                        Nós entendemos que sua indústria precisa de um parceiro que não apenas prometa, mas entregue a conformidade NR12 com agilidade e total responsabilidade.
                    </p>
<p className="text-lg text-gray-400 mb-6 leading-relaxed">
                        É exatamente por isso que a Bikows Engenharia desenvolveu uma metodologia completa de adequação NR12: um pacote integrado de soluções que abrange desde o diagnóstico inicial até a entrega do laudo técnico com ART, garantindo que suas máquinas e equipamentos estejam 100% seguros e dentro das normas. Nossa equipe altamente qualificada gerencia todas as etapas, permitindo que você foque no que realmente importa: a produtividade da sua operação.
                    </p>
<p className="text-lg text-gray-400 leading-relaxed">
                        Diferente de empresas que apenas fazem laudos ou terceirizam etapas críticas, a Bikows possui estrutura e equipe própria para projeto, fabricação e montagem de proteções. Isso significa menos burocracia para você, maior controle de qualidade e prazos garantidos, com total rastreabilidade do processo.
                    </p>
</div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
<img alt="Máquina após adequação" className="w-full h-auto object-cover" src="https://bikowsengenharia.com.br/wp-content/uploads/2025/09/rapid-depois.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-[#111827]/90 backdrop-blur-md p-6 rounded-xl border border-gray-700">
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Não espere a próxima fiscalização.</h3>
<p className="text-base text-gray-400 mb-6">Garanta a segurança e conformidade agora.</p>
<a className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#4A90D9] hover:bg-[#3a7bc2] transition-colors" href="#contato">
                                SOLICITAR ORÇAMENTO TÉCNICO
                            </a>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 py-24 border-y border-gray-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                    Excelência técnica e resultados comprovados
                </h2>
<p className="text-lg text-gray-600 leading-relaxed">
                    A Bikows Engenharia atua no mercado de segurança e adequação industrial, com engenheiros civis e mecânicos habilitados pelo CREA e mais de 3 anos de parceria na otimização de campanhas digitais que geram resultados. Nosso compromisso é com a excelência técnica e a entrega de soluções que superam as expectativas. Nossa experiência focada no setor industrial nos permitiu entregar dezenas de projetos de adequação NR12, sempre com foco na segurança do operador e na continuidade operacional.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
<i className="h-8 w-8 text-[#4A90D9] mb-4" data-lucide="clock" strokeWidth="1.5"></i>
<h3 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Milhares</h3>
<p className="text-base text-gray-500">de horas dedicadas à segurança industrial.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
<i className="h-8 w-8 text-[#4A90D9] mb-4" data-lucide="map-pin" strokeWidth="1.5"></i>
<h3 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">3 Estados</h3>
<p className="text-base text-gray-500">Foco em São Paulo, Paraná e Santa Catarina.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
<i className="h-8 w-8 text-[#4A90D9] mb-4" data-lucide="target" strokeWidth="1.5"></i>
<h3 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">+90%</h3>
<p className="text-base text-gray-500">dos projetos focados na NR12, a proteção do seu negócio.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
<i className="h-8 w-8 text-[#4A90D9] mb-4" data-lucide="shield-check" strokeWidth="1.5"></i>
<h3 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Centenas</h3>
<p className="text-base text-gray-500">de máquinas já adequadas, protegendo vidas e patrimônio.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
<i className="h-8 w-8 text-[#4A90D9] mb-4" data-lucide="activity" strokeWidth="1.5"></i>
<h3 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">ZERO</h3>
<p className="text-base text-gray-500">acidentes reportados em projetos executados.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
<i className="h-8 w-8 text-[#4A90D9] mb-4" data-lucide="award" strokeWidth="1.5"></i>
<h3 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">~100%</h3>
<p className="text-base text-gray-500">Taxa de aprovação de fiscalização em nossos projetos.</p>
</div>
</div>
</div>
</div>

<div className="bg-[#111827] py-24" id="solucoes">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                    O que está incluso em sua adequação NR12 completa
                </h2>
<p className="text-lg text-gray-400 max-w-2xl mx-auto">Soluções integradas para garantir a total conformidade da sua planta industrial.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#1F2937] p-8 rounded-xl border border-gray-800 hover:border-[#4A90D9]/50 transition-colors group">
<div className="h-12 w-12 rounded-lg bg-[#0B0F19] flex items-center justify-center mb-6 border border-gray-700 group-hover:border-[#4A90D9]/50 transition-colors">
<i className="h-6 w-6 text-[#4A90D9]" data-lucide="search" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Análise Preliminar de Riscos (APR)</h3>
<p className="text-base text-gray-400 leading-relaxed">Mapeamento detalhado dos riscos existentes em suas máquinas e equipamentos, servindo como base para o plano de adequação.</p>
</div>

<div className="bg-[#1F2937] p-8 rounded-xl border border-gray-800 hover:border-[#4A90D9]/50 transition-colors group">
<div className="mb-6 rounded-lg overflow-hidden border border-gray-700 h-32 w-full">
<img alt="Projeto" className="w-full h-full object-cover" src="https://bikowsengenharia.com.br/wp-content/uploads/2025/09/projeto.jpeg"/>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Projeto Mecânico e Elétrico</h3>
<p className="text-base text-gray-400 leading-relaxed">Desenvolvimento de projetos específicos para proteções físicas, sistemas de segurança e comandos elétricos, conforme requisitos da NR12.</p>
</div>

<div className="bg-[#1F2937] p-8 rounded-xl border border-gray-800 hover:border-[#4A90D9]/50 transition-colors group">
<div className="mb-6 rounded-lg overflow-hidden border border-gray-700 h-32 w-full">
<img alt="Instalação" className="w-full h-full object-cover" src="https://bikowsengenharia.com.br/wp-content/uploads/2025/07/imagem-2.jpg"/>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Fabricação e Instalação</h3>
<p className="text-base text-gray-400 leading-relaxed">Produção e montagem de barreiras físicas, dispositivos de segurança, enclausuramentos e intertravamentos na nossa estrutura própria.</p>
</div>

<div className="bg-[#1F2937] p-8 rounded-xl border border-gray-800 hover:border-[#4A90D9]/50 transition-colors group">
<div className="h-12 w-12 rounded-lg bg-[#0B0F19] flex items-center justify-center mb-6 border border-gray-700 group-hover:border-[#4A90D9]/50 transition-colors">
<i className="h-6 w-6 text-[#4A90D9]" data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Elaboração de Manuais</h3>
<p className="text-base text-gray-400 leading-relaxed">Criação ou atualização de manuais de operação e manutenção, e implementação de sinalização de segurança clara e eficaz.</p>
</div>

<div className="bg-[#1F2937] p-8 rounded-xl border border-gray-800 hover:border-[#4A90D9]/50 transition-colors group">
<div className="mb-6 rounded-lg overflow-hidden border border-gray-700 h-32 w-full">
<img alt="Treinamento" className="w-full h-full object-cover" src="https://bikowsengenharia.com.br/wp-content/uploads/2025/09/trainamento.png"/>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Treinamento Operacional</h3>
<p className="text-base text-gray-400 leading-relaxed">Capacitação de sua equipe para o uso seguro e correto das máquinas após a adequação, garantindo a absorção das novas práticas.</p>
</div>

<div className="bg-[#1F2937] p-8 rounded-xl border border-gray-800 hover:border-[#4A90D9]/50 transition-colors group">
<div className="h-12 w-12 rounded-lg bg-[#0B0F19] flex items-center justify-center mb-6 border border-gray-700 group-hover:border-[#4A90D9]/50 transition-colors">
<i className="h-6 w-6 text-[#4A90D9]" data-lucide="file-check-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Emissão de Laudo com ART</h3>
<p className="text-base text-gray-400 leading-relaxed">Documentação completa e formal de conformidade, assinada por engenheiro habilitado, essencial para auditorias e fiscalizações.</p>
</div>
</div>
</div>
</div>

<div className="bg-white py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8">
                        Nosso processo em 4 passos
                    </h2>
<div className="space-y-6">
<div className="relative pl-12 pb-6 border-l border-gray-200 last:border-0 last:pb-0">
<div className="absolute left-[-17px] top-0 h-8 w-8 rounded-full bg-white border-2 border-[#4A90D9] flex items-center justify-center text-sm font-medium text-[#4A90D9]">1</div>
<h3 className="text-xl font-medium text-gray-900 mb-2">Diagnóstico e Orçamento Gratuito</h3>
<p className="text-base text-gray-600">Nossos engenheiros avaliam suas máquinas e processos, identificando pontos críticos da NR12 e gerando um orçamento detalhado e sem compromisso.</p>
</div>
<div className="relative pl-12 pb-6 border-l border-gray-200 last:border-0 last:pb-0">
<div className="absolute left-[-17px] top-0 h-8 w-8 rounded-full bg-white border-2 border-[#4A90D9] flex items-center justify-center text-sm font-medium text-[#4A90D9]">2</div>
<h3 className="text-xl font-medium text-gray-900 mb-2">Desenvolvimento de Projeto Executivo</h3>
<p className="text-base text-gray-600">Após aprovação, elaboramos o projeto mecânico e elétrico conforme a APR, detalhando todas as modificações e proteções necessárias.</p>
</div>
<div className="relative pl-12 pb-6 border-l border-gray-200 last:border-0 last:pb-0">
<div className="absolute left-[-17px] top-0 h-8 w-8 rounded-full bg-white border-2 border-[#4A90D9] flex items-center justify-center text-sm font-medium text-[#4A90D9]">3</div>
<h3 className="text-xl font-medium text-gray-900 mb-2">Fabricação e Instalação</h3>
<p className="text-base text-gray-600">Nossa equipe própria executa a fabricação das proteções em nosso barracão e realiza a instalação e montagem em sua planta com agilidade e segurança.</p>
</div>
<div className="relative pl-12 pb-0 border-l border-gray-200 last:border-0 last:pb-0">
<div className="absolute left-[-17px] top-0 h-8 w-8 rounded-full bg-white border-2 border-[#4A90D9] flex items-center justify-center text-sm font-medium text-[#4A90D9]">4</div>
<h3 className="text-xl font-medium text-gray-900 mb-2">Treinamento e Emissão de Laudo com ART</h3>
<p className="text-base text-gray-600">Finalizamos com o treinamento de sua equipe e a entrega do Laudo de Conformidade NR12, assinado por engenheiro, atestando a segurança e regularidade.</p>
</div>
</div>
</div>

<div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-200 relative overflow-hidden">
<img alt="Detalhe técnico" className="absolute top-0 right-0 w-48 opacity-10 pointer-events-none" src="https://bikowsengenharia.com.br/wp-content/uploads/2023/10/2.png"/>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8 relative z-10">
                        Cronograma típico de projeto
                    </h2>
<ul className="space-y-6 relative z-10">
<li className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
<div className="flex items-center justify-between mb-2">
<h4 className="text-base font-medium text-gray-900">Fase 1: Diagnóstico</h4>
<span className="text-sm font-medium text-[#4A90D9] bg-[#4A90D9]/10 px-2.5 py-1 rounded-full">2-5 dias úteis</span>
</div>
<p className="text-sm text-gray-600">Visita técnica, levantamento de dados e apresentação da proposta.</p>
</li>
<li className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
<div className="flex items-center justify-between mb-2">
<h4 className="text-base font-medium text-gray-900">Fase 2: Projeto Executivo</h4>
<span className="text-sm font-medium text-[#4A90D9] bg-[#4A90D9]/10 px-2.5 py-1 rounded-full">7-15 dias úteis</span>
</div>
<p className="text-sm text-gray-600">Desenvolvimento de projetos mecânicos, elétricos e de segurança.</p>
</li>
<li className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
<div className="flex items-center justify-between mb-2">
<h4 className="text-base font-medium text-gray-900">Fase 3: Fabricação e Instalação</h4>
<span className="text-sm font-medium text-[#4A90D9] bg-[#4A90D9]/10 px-2.5 py-1 rounded-full">15-30 dias úteis</span>
</div>
<p className="text-sm text-gray-600">Produção na nossa estrutura e montagem na planta industrial.</p>
</li>
<li className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
<div className="flex items-center justify-between mb-2">
<h4 className="text-base font-medium text-gray-900">Fase 4: Finalização</h4>
<span className="text-sm font-medium text-[#4A90D9] bg-[#4A90D9]/10 px-2.5 py-1 rounded-full">3-7 dias úteis</span>
</div>
<p className="text-sm text-gray-600">Treinamento, entrega do Laudo NR12 com ART e manuais.</p>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-gray-200 relative z-10">
<p className="text-base text-gray-700 font-medium">
<span className="text-gray-900 font-semibold">SLA Garantido:</span> Entregamos cada fase dentro do prazo estipulado em contrato, garantindo a previsibilidade que sua operação exige.
                        </p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#0B0F19] py-24 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-12 text-center">
                O que nossos clientes dizem
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#111827] p-8 rounded-2xl border border-gray-800 relative">
<i className="absolute top-6 right-6 h-8 w-8 text-gray-700" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-gray-300 italic mb-8 relative z-10 leading-relaxed">
                        "A Bikows Engenharia nos ajudou a adequar nossas máquinas à NR12 de forma rápida e eficiente. Evitamos multas e, o mais importante, garantimos a segurança da nossa equipe. Recomendo a quem busca seriedade e qualidade."
                    </p>
<div>
<p className="text-base font-medium text-white">Anderson M.</p>
<p className="text-sm text-[#4A90D9]">Gerente de Produção, Empresa FCM</p>
</div>
</div>

<div className="bg-[#111827] p-8 rounded-2xl border border-gray-800 relative">
<i className="absolute top-6 right-6 h-8 w-8 text-gray-700" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-gray-300 italic mb-8 relative z-10 leading-relaxed">
                        "Estávamos com um problema sério de fiscalização e a Bikows agiu com total profissionalismo. Do projeto à instalação, tudo foi impecável. Agora temos tranquilidade e máquinas seguras."
                    </p>
<div className="mt-auto">
<p className="text-base font-medium text-white">Patrícia S.</p>
<p className="text-sm text-[#4A90D9]">Diretora de Operações, Indústria XYZ</p>
</div>
</div>

<div className="bg-[#111827] p-8 rounded-2xl border border-gray-800 relative">
<i className="absolute top-6 right-6 h-8 w-8 text-gray-700" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-gray-300 italic mb-8 relative z-10 leading-relaxed">
                        "Fizemos o projeto de adequação com a Bikows e o acompanhamento foi excelente. Nossos operadores se sentem muito mais seguros. É um investimento que vale cada centavo."
                    </p>
<div>
<p className="text-base font-medium text-white">Ricardo A.</p>
<p className="text-sm text-[#4A90D9]">Eng. de Segurança, Grupo Logístico ABC</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<img alt="Equipe Bikows" className="w-full rounded-2xl shadow-xl border border-gray-200" src="https://bikowsengenharia.com.br/wp-content/uploads/2024/12/Sobre-nos.png"/>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-2">
                        Quem lidera a Bikows
                    </h2>
<h3 className="text-xl font-medium text-[#4A90D9] mb-6">Marcos Israel, Diretor e Engenheiro Responsável</h3>
<div className="space-y-5 text-lg text-gray-600 leading-relaxed">
<p>
                            Engenheiro com vasta experiência em engenharia mecânica e segurança do trabalho, focado em adequação de máquinas e equipamentos industriais. Sua visão técnica e prática garante que cada projeto seja executado com a máxima excelência.
                        </p>
<p>
                            Com anos de experiência em campo e na gestão de projetos complexos, Marcos Israel atua como o elo direto entre a necessidade da sua indústria e a solução técnica. Sua atuação vai desde o primeiro contato até a entrega final, garantindo um serviço transparente e de alta qualidade.
                        </p>
<p>
                            A paixão por transformar ambientes industriais em locais mais seguros e produtivos é o que move a Bikows. Marcos Israel fundou a empresa com a missão de oferecer soluções integradas e confiáveis que não apenas cumpram as normas, mas realmente agreguem valor e tranquilidade aos seus clientes.
                        </p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#111827] py-24 border-t border-gray-800">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-10 text-center">
                Perguntas Frequentes
            </h2>
<div className="space-y-4">
<details className="group bg-[#1F2937] rounded-lg border border-gray-800">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg text-white">
<span>Quanto tempo leva uma adequação NR12?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-base text-gray-400 px-6 pb-6 leading-relaxed">
                        O prazo varia conforme a complexidade e número de máquinas. Um projeto completo pode levar de 30 a 60 dias. Após o diagnóstico, fornecemos um cronograma detalhado.
                    </div>
</details>
<details className="group bg-[#1F2937] rounded-lg border border-gray-800">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg text-white">
<span>A Bikows atende fiscalização do Ministério do Trabalho?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-base text-gray-400 px-6 pb-6 leading-relaxed">
                        Nossa equipe não representa sua empresa em fiscalizações, mas fornecemos toda a documentação necessária (Laudo com ART, APR, projetos) para comprovar a conformidade, dando tranquilidade para lidar com auditorias.
                    </div>
</details>
<details className="group bg-[#1F2937] rounded-lg border border-gray-800">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg text-white">
<span>É possível fazer apenas o laudo ou o projeto?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-base text-gray-400 px-6 pb-6 leading-relaxed">
                        Sim, oferecemos serviços modulares. Você pode contratar apenas o laudo técnico, o projeto, a fabricação das proteções ou o treinamento, conforme sua necessidade.
                    </div>
</details>
<details className="group bg-[#1F2937] rounded-lg border border-gray-800">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg text-white">
<span>Vocês atendem fora de SP, PR e SC?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-base text-gray-400 px-6 pb-6 leading-relaxed">
                        Sim, estamos preparados para atender em outras regiões do Brasil. Nossos engenheiros se deslocam para projetos de maior porte, garantindo a mesma qualidade e compromisso.
                    </div>
</details>
<details className="group bg-[#1F2937] rounded-lg border border-gray-800">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg text-white">
<span>A adequação NR12 pode parar minha produção?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-base text-gray-400 px-6 pb-6 leading-relaxed">
                        Minimizamos ao máximo as interrupções. Planejamos a execução para ser realizada em períodos de baixa produção, finais de semana ou em etapas, garantindo a continuidade da sua operação.
                    </div>
</details>
<details className="group bg-[#1F2937] rounded-lg border border-gray-800">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg text-white">
<span>Qual o custo médio de uma adequação NR12?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-base text-gray-400 px-6 pb-6 leading-relaxed">
                        O investimento varia muito conforme o tipo e número de máquinas, complexidade do projeto e componentes necessários. Oferecemos um orçamento detalhado e gratuito após a visita técnica.
                    </div>
</details>
</div>
</div>
</div>

<div className="bg-white py-16 border-y border-gray-100" id="projetos">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
<p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-8">Setores que confiam na Bikows Engenharia</p>
<div className="flex flex-wrap justify-center gap-4 md:gap-8">
<span className="px-6 py-3 bg-gray-50 rounded-full border border-gray-200 text-gray-600 font-medium text-base">Automotivo</span>
<span className="px-6 py-3 bg-gray-50 rounded-full border border-gray-200 text-gray-600 font-medium text-base">Alimentício</span>
<span className="px-6 py-3 bg-gray-50 rounded-full border border-gray-200 text-gray-600 font-medium text-base">Metalúrgico</span>
<span className="px-6 py-3 bg-gray-50 rounded-full border border-gray-200 text-gray-600 font-medium text-base">Logístico</span>
<span className="px-6 py-3 bg-gray-50 rounded-full border border-gray-200 text-gray-600 font-medium text-base">Agrícola</span>
<span className="px-6 py-3 bg-gray-50 rounded-full border border-gray-200 text-gray-600 font-medium text-base">Plástico</span>
</div>
</div>
</div>

<div className="relative bg-[#0B0F19] py-24 overflow-hidden" id="contato">
<div className="absolute inset-0">
<img alt="Fundo" className="w-full h-full object-cover opacity-10" src="https://bikowsengenharia.com.br/wp-content/uploads/2023/10/backgound-1.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/90 to-transparent"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                        Pronto para garantir segurança, evitar multas e otimizar sua produção?
                    </h2>
<p className="text-lg text-gray-400 mb-8 leading-relaxed">
                        Lembra da frustração de ver a produção parada, o risco de multas ou a insegurança da sua equipe por falta de conformidade NR12? Isso não precisa ser a realidade da sua indústria.
                    </p>
<p className="text-lg text-gray-400 mb-8 leading-relaxed">
                        Com a Bikows Engenharia, você tem previsibilidade, conformidade garantida e um parceiro técnico que assume a responsabilidade do início ao fim. A decisão de transformar sua operação em um ambiente seguro e produtivo está a uma reunião de distância.
                    </p>
<div className="bg-[#111827]/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 inline-block">
<p className="text-base text-gray-300">
<span className="text-[#4A90D9] font-medium">Agende uma reunião diagnóstica sem custo.</span><br/>
                            Em 60 minutos, você terá uma análise prévia de viabilidade, prazos estimados e os próximos passos para a adequação.
                        </p>
</div>
</div>

<div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
<h3 className="text-2xl font-semibold text-gray-900 mb-6">Preencha para agendar:</h3>
<form className="space-y-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/50 focus:border-[#4A90D9] transition-all" placeholder="Seu nome" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Email Corporativo</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/50 focus:border-[#4A90D9] transition-all" placeholder="email@empresa.com.br" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/50 focus:border-[#4A90D9] transition-all" placeholder="(00) 00000-0000" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/50 focus:border-[#4A90D9] transition-all" placeholder="Nome da Indústria" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Cargo</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/50 focus:border-[#4A90D9] transition-all" placeholder="Ex: Gerente Industrial" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Necessidade de adequação (breve)</label>
<textarea className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/50 focus:border-[#4A90D9] transition-all resize-none" placeholder="Descreva brevemente seu projeto ou dúvida..." rows="3"></textarea>
</div>
<button className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-[#4A90D9] hover:bg-[#3a7bc2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4A90D9] transition-colors" type="button">
                            AGENDAR REUNIÃO DIAGNÓSTICA
                        </button>
</form>
</div>
</div>
</div>
</div>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 lg:col-span-1">
<img alt="Bikows Engenharia" className="h-10 w-auto mb-6 grayscale hover:grayscale-0 transition-all duration-300" src="https://bikowsengenharia.com.br/wp-content/uploads/2023/10/Logo-Bikows.png"/>
<p className="text-sm text-gray-500 mb-2">CNPJ: [Solicitar ao cliente]</p>
<p className="text-sm text-gray-500">CREA-SP: [Solicitar ao cliente]</p>
</div>
<div>
<h4 className="text-base font-semibold text-gray-900 mb-4 tracking-tight">Endereços</h4>
<ul className="space-y-4 text-sm text-gray-600">
<li>
<strong className="text-gray-900 block mb-1">Matriz Curitiba - PR</strong>
                            Rua Comendador Araujo 499, 10 andar Centro<br/>CEP: 80420-000
                        </li>
<li>
<strong className="text-gray-900 block mb-1">Filial São Paulo - SP</strong>
                            Av. Paulista, 2300 Piso Pilotis - Consolação<br/>CEP: 01310-300
                        </li>
<li>
<strong className="text-gray-900 block mb-1">Filial PR Interior</strong>
                            Rua Joao Paulo II 49, Centro Ribeirão do Pinhal<br/>CEP: 86490-000
                        </li>
</ul>
</div>
<div>
<h4 className="text-base font-semibold text-gray-900 mb-4 tracking-tight">Contato</h4>
<ul className="space-y-3 text-sm text-gray-600">
<li><a className="hover:text-[#4A90D9] transition-colors" href="mailto:engenharia@bikows.com.br">engenharia@bikows.com.br</a></li>
<li>SP: <a className="hover:text-[#4A90D9] transition-colors" href="tel:+5511947619040">(11) 94761-9040</a></li>
<li>PR: <a className="hover:text-[#4A90D9] transition-colors" href="tel:+5541988423162">(41) 98842-3162</a></li>
<li>PR Interior: <a className="hover:text-[#4A90D9] transition-colors" href="tel:+5543984262950">(43) 98426-2950</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-semibold text-gray-900 mb-4 tracking-tight">Legal</h4>
<ul className="space-y-3 text-sm text-gray-600">
<li><a className="hover:text-[#4A90D9] transition-colors" href="#">Política de Privacidade</a></li>
<li><a className="hover:text-[#4A90D9] transition-colors" href="#">Termos de Uso</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
<p>© 2026 Bikows Engenharia. Todos os direitos reservados.</p>
<p className="mt-4 md:mt-0">Site desenvolvido por Marketing Alpha Digital.</p>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebd5b] hover:scale-110 transition-all duration-300 flex items-center justify-center group" href="https://wa.me/5511947619040?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Bikows%20e%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20para%20falar%20sobre%20a%20adequa%C3%A7%C3%A3o%20NR12%20do%20meu%20projeto." target="_blank">
<svg className="lucide lucide-message-circle" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
</svg>
</a>


    </>
  );
}
