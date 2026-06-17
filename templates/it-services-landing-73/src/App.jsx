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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-neutral-900" href="#">buysoft.</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
<a className="hover:text-neutral-900 transition-colors" href="#como-trabalhamos">Forma de trabalhar</a>
<a className="hover:text-neutral-900 transition-colors" href="#servicos">Serviços</a>
<a className="hover:text-neutral-900 transition-colors" href="#produtos">Produtos</a>
<a className="hover:text-neutral-900 transition-colors" href="#cases">Cases</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors" href="#contato">
                Fale com um especialista
            </a>
<button className="md:hidden text-neutral-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs font-medium mb-8">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<span>Nova era da inteligência corporativa</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-neutral-900 leading-tight mb-6">
                Inteligência e tecnologia.<br className="hidden md:block"/> Além da licença.
            </h1>
<p className="text-lg md:text-xl text-neutral-500 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
                Transformamos a forma como sua empresa consome tecnologia. Fornecemos Microsoft 365 aliado a serviços de inteligência para maximizar sua produtividade.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all flex items-center justify-center gap-2" href="#produtos">
                    Explorar Soluções
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-neutral-900 border border-neutral-200 text-sm font-medium rounded-full hover:bg-neutral-50 transition-all flex items-center justify-center" href="#como-trabalhamos">
                    Entenda nosso modelo
                </a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="como-trabalhamos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Como nós operamos</h2>
<p className="text-neutral-500 text-base max-w-xl mx-auto">Uma metodologia desenhada para não apenas entregar software, mas garantir sua adoção e performance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-neutral-200 z-0"></div>
<div className="relative z-10 bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col items-center text-center">
<div className="w-16 h-16 bg-neutral-50 rounded-2xl flex items-center justify-center mb-6 border border-neutral-100">
<iconify-icon className="text-2xl text-neutral-900" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">1. Diagnóstico</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Mapeamos o cenário atual da sua infraestrutura e identificamos gargalos de produtividade e segurança.</p>
</div>
<div className="relative z-10 bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col items-center text-center">
<div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center mb-6 border border-neutral-800 text-white">
<iconify-icon className="text-2xl" icon="solar:layers-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">2. Arquitetura</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Desenhamos a solução ideal combinando licenciamento adequado e as ferramentas exatas para seu time.</p>
</div>
<div className="relative z-10 bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col items-center text-center">
<div className="w-16 h-16 bg-neutral-50 rounded-2xl flex items-center justify-center mb-6 border border-neutral-100">
<iconify-icon className="text-2xl text-neutral-900" icon="solar:chart-line-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">3. Sustentação</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Acompanhamento contínuo, suporte técnico especializado e relatórios de adoção da tecnologia.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="servicos">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-neutral-900 mb-4">Nossos Serviços</h2>
<p className="text-neutral-500 text-lg">A camada de inteligência que faz o seu licenciamento valer o investimento.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group p-8 rounded-3xl bg-neutral-50 hover:bg-neutral-100 transition-colors border border-transparent hover:border-neutral-200">
<iconify-icon className="text-3xl text-neutral-900 mb-6" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-3">Gestão de Segurança</h3>
<p className="text-sm text-neutral-500">Implementação de políticas de conformidade, proteção de dados e gestão de identidades para ambientes Microsoft.</p>
</div>
<div className="group p-8 rounded-3xl bg-neutral-50 hover:bg-neutral-100 transition-colors border border-transparent hover:border-neutral-200">
<iconify-icon className="text-3xl text-neutral-900 mb-6" icon="solar:cloud-upload-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-3">Migração Cloud</h3>
<p className="text-sm text-neutral-500">Transição fluida e segura de servidores locais para o Azure ou migração de e-mails para o Exchange Online.</p>
</div>
<div className="group p-8 rounded-3xl bg-neutral-50 hover:bg-neutral-100 transition-colors border border-transparent hover:border-neutral-200">
<iconify-icon className="text-3xl text-neutral-900 mb-6" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-3">Treinamento e Adoção</h3>
<p className="text-sm text-neutral-500">Capacitação do seu time para extrair o máximo do Teams, SharePoint, Copilot e outras ferramentas.</p>
</div>
<div className="group p-8 rounded-3xl bg-neutral-50 hover:bg-neutral-100 transition-colors border border-transparent hover:border-neutral-200">
<iconify-icon className="text-3xl text-neutral-900 mb-6" icon="solar:headset-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-3">Suporte Gerenciado</h3>
<p className="text-sm text-neutral-500">Service desk ágil focado na resolução rápida de problemas relacionados ao seu ecossistema de software.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">O que sua empresa ganha com a buysoft</h2>
<p className="text-neutral-500 text-base mb-8">Nossa abordagem consultiva garante que a tecnologia seja um motor de crescimento, não apenas uma despesa.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-xl text-neutral-400" icon="solar:wallet-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium tracking-tight text-neutral-900 mb-1">Otimização de Custos</h4>
<p className="text-sm text-neutral-500">Evite licenças subutilizadas. Pagamos pelo que você realmente precisa e usa.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-xl text-neutral-400" icon="solar:rocket-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium tracking-tight text-neutral-900 mb-1">Aumento de Produtividade</h4>
<p className="text-sm text-neutral-500">Com fluxos de trabalho integrados e times treinados, as entregas tornam-se mais rápidas.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-xl text-neutral-400" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium tracking-tight text-neutral-900 mb-1">Segurança de Dados</h4>
<p className="text-sm text-neutral-500">Ambientes configurados sob as melhores práticas de conformidade e proteção contra ameaças.</p>
</div>
</div>
</div>
</div>
<div className="bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-100 relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-50 rounded-full blur-3xl -mr-20 -mt-20"></div>
<div className="relative z-10 space-y-4">
<div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
<iconify-icon className="text-neutral-600" icon="solar:user-check-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-neutral-400">Adoção da Ferramenta</div>
<div className="text-sm font-medium text-neutral-900">98% dos usuários</div>
</div>
</div>
<iconify-icon className="text-neutral-400" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
<iconify-icon className="text-neutral-600" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-neutral-400">Incidentes de Segurança</div>
<div className="text-sm font-medium text-neutral-900">Redução de 85%</div>
</div>
</div>
<iconify-icon className="text-neutral-400" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="produtos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-neutral-900 mb-4">Portfólio de Soluções</h2>
<p className="text-neutral-500 text-lg max-w-2xl mx-auto">As melhores ferramentas do mercado, licenciadas de forma inteligente para a sua necessidade.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-neutral-200 hover:shadow-lg hover:shadow-neutral-200/50 transition-all flex flex-col h-full">
<div className="mb-6 flex items-center gap-3">
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center">
<iconify-icon className="text-2xl text-neutral-700" icon="solar:window-frame-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900">Microsoft 365</h3>
</div>
<p className="text-sm text-neutral-500 flex-grow mb-8">A suíte de produtividade líder mundial. Inclui Teams, Word, Excel, PowerPoint e muito armazenamento em nuvem seguro.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                            Planos Business e Enterprise
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                            Integração com Copilot
                        </li>
</ul>
<a className="inline-flex items-center justify-center w-full py-2.5 bg-neutral-50 hover:bg-neutral-100 text-neutral-900 text-sm font-medium rounded-xl transition-colors border border-neutral-200" href="#">
                        Ver planos
                    </a>
</div>

<div className="bg-white p-8 rounded-3xl border border-neutral-200 hover:shadow-lg hover:shadow-neutral-200/50 transition-all flex flex-col h-full">
<div className="mb-6 flex items-center gap-3">
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center">
<iconify-icon className="text-2xl text-neutral-700" icon="solar:server-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900">Microsoft Azure</h3>
</div>
<p className="text-sm text-neutral-500 flex-grow mb-8">Nuvem pública flexível e escalável para construir, testar, implantar e gerenciar aplicativos e serviços.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                            Máquinas Virtuais
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                            Backup e Disaster Recovery
                        </li>
</ul>
<a className="inline-flex items-center justify-center w-full py-2.5 bg-neutral-50 hover:bg-neutral-100 text-neutral-900 text-sm font-medium rounded-xl transition-colors border border-neutral-200" href="#">
                        Consultar projetos
                    </a>
</div>

<div className="bg-white p-8 rounded-3xl border border-neutral-200 hover:shadow-lg hover:shadow-neutral-200/50 transition-all flex flex-col h-full">
<div className="mb-6 flex items-center gap-3">
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center">
<iconify-icon className="text-2xl text-neutral-700" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900">Security &amp; Compliance</h3>
</div>
<p className="text-sm text-neutral-500 flex-grow mb-8">Soluções avançadas para proteger seus dados, dispositivos e identidades contra ameaças cibernéticas.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                            Microsoft Defender
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                            Entra ID (Azure AD)
                        </li>
</ul>
<a className="inline-flex items-center justify-center w-full py-2.5 bg-neutral-50 hover:bg-neutral-100 text-neutral-900 text-sm font-medium rounded-xl transition-colors border border-neutral-200" href="#">
                        Saiba mais
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24" id="cases">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 text-center mb-16">Quem confia na inteligência buysoft</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="p-8 rounded-2xl bg-white border border-neutral-100">
<div className="flex items-center gap-1 mb-6 text-neutral-800">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 text-base leading-relaxed mb-8">"A buysoft não apenas nos vendeu as licenças do Microsoft 365. Eles mapearam nossos processos, treinaram a equipe e hoje nossa comunicação interna é 100% via Teams, reduzindo o uso de e-mails em 60%."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-medium text-sm">RC</div>
<div>
<div className="text-sm font-medium text-neutral-900">Ricardo Costa</div>
<div className="text-xs text-neutral-500">Diretor de TI, Logística Express</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-white border border-neutral-100">
<div className="flex items-center gap-1 mb-6 text-neutral-800">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 text-base leading-relaxed mb-8">"O serviço de diagnóstico estrutural nos ajudou a readequar os planos do Azure. Cortamos custos desnecessários em 30% e aplicamos a verba em ferramentas reais de segurança."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-medium text-sm">MS</div>
<div>
<div className="text-sm font-medium text-neutral-900">Mariana Silva</div>
<div className="text-xs text-neutral-500">CFO, Grupo Varejo Sul</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-50 pt-24 pb-12 border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-900 mb-6">Pronto para evoluir?</h2>
<p className="text-neutral-500 text-lg mb-8 max-w-xl mx-auto">Converse com nossos especialistas e descubra o plano ideal de software e serviços para o seu momento.</p>
<a className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors gap-2" href="#contato">
                    Solicitar contato
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-neutral-200">
<div className="col-span-2 md:col-span-1">
<a className="text-xl font-semibold tracking-tighter text-neutral-900 block mb-4" href="#">buysoft.</a>
<p className="text-xs text-neutral-500 max-w-xs">Inteligência em licenciamento e serviços de tecnologia para impulsionar negócios.</p>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Soluções</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Microsoft 365</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Azure Cloud</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Segurança</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Empresa</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Sobre nós</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Cases de sucesso</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Contato</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Privacidade</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Termos de uso</a></li>
</ul>
</div>
</div>
<div className="mt-12 text-center text-xs text-neutral-400">
                © 2024 buysoft. Todos os direitos reservados.
            </div>
</div>
</footer>

    </>
  );
}
