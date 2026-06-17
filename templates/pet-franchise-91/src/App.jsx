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
      

<nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-bold tracking-tighter text-xl text-slate-900">
                TIO EDY<span className="text-blue-600">.</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#modelo">O Modelo</a>
<a className="hover:text-slate-900 transition-colors" href="#jornada">Jornada</a>
<a className="hover:text-slate-900 transition-colors" href="#investimento">Investimento</a>
</div>
<a className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors" href="#cta">
                Seja um Franqueado
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-grid-pattern">
<div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-[#FAFAFA]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col gap-8 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider w-fit">
<iconify-icon height="16" icon="solar:star-fall-linear" width="16"></iconify-icon>
                    Oportunidade Premium
                </div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tighter text-slate-900 leading-[1.1]">
                    Transforme amor por cães em um negócio que <span className="text-blue-600">escala resultados.</span>
</h1>
<p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                    Não estamos abrindo creches. Estamos expandindo um modelo validado, projetado para alta recorrência, gestão inteligente e retorno sólido no mercado que mais cresce no país.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-blue-600 text-white text-base font-medium hover:bg-blue-700 transition-colors shadow-sm" href="#cta">
                        Conhecer o Modelo
                    </a>
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white border border-slate-200 text-slate-700 text-base font-medium hover:bg-slate-50 transition-colors" href="#modelo">
                        Ver Números
                    </a>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">

<div className="relative w-full max-w-md">

<div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-transparent rounded-[2rem] -rotate-6 scale-105"></div>
<div className="relative bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-4">

<div className="flex items-center justify-between pb-4 border-b border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon height="20" icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-500">MRR Projetado</div>
<div className="text-base font-semibold text-slate-900 tracking-tight">Crescimento Contínuo</div>
</div>
</div>
<div className="flex items-center gap-1 text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md text-xs font-medium">
<iconify-icon height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
<span>Escalável</span>
</div>
</div>

<div className="py-4 flex flex-col gap-3 relative">

<div className="absolute left-6 top-8 bottom-8 w-px border-l-2 border-dashed border-slate-200"></div>

<div className="relative z-10 flex items-center gap-4 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
<div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400">
<iconify-icon height="18" icon="solar:dog-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Demanda Gerada</div>
<div className="text-xs text-slate-500">Captação estruturada</div>
</div>
</div>

<div className="relative z-10 flex items-center gap-4 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm ml-6">
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/20">
<iconify-icon height="18" icon="solar:home-smile-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Operação Tio Edy</div>
<div className="text-xs text-slate-500">Processos validados</div>
</div>
</div>

<div className="relative z-10 flex items-center gap-4 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm ml-12">
<div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-yellow-900 shadow-md shadow-yellow-400/20">
<iconify-icon height="18" icon="solar:wallet-money-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Recorrência</div>
<div className="text-xs text-slate-500">Previsibilidade de caixa</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-y border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
<div className="flex flex-col gap-1 text-center">
<span className="text-4xl font-semibold tracking-tighter text-slate-900">+5</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Anos de Validação</span>
</div>
<div className="flex flex-col gap-1 text-center">
<span className="text-4xl font-semibold tracking-tighter text-slate-900">100%</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Processo Mapeado</span>
</div>
<div className="flex flex-col gap-1 text-center">
<span className="text-4xl font-semibold tracking-tighter text-slate-900">Alta</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Taxa de Retenção</span>
</div>
<div className="flex flex-col gap-1 text-center">
<span className="text-4xl font-semibold tracking-tighter text-blue-600">3x</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Mercado em Alta</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="modelo">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">A engenharia por trás do negócio.</h2>
<p className="text-lg text-slate-600">Desenhado para ser previsível. Unimos um mercado passional com uma operação friamente calculada para maximizar margens.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Demanda Irracional</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                        O mercado pet é resistente a crises. Os tutores priorizam o bem-estar de seus cães tanto quanto de membros da família. Uma base inesgotável de clientes.
                    </p>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Motor de Recorrência</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                        Não dependemos de vendas diárias. O modelo de creche cria assinaturas mensais fixas, garantindo previsibilidade de caixa desde o dia um do mês.
                    </p>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Sistema Plug &amp; Play</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                        Entregamos a planta, os manuais, o treinamento e o software. Você foca em gerir pessoas e escalar, nós cuidamos da engenharia do negócio.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="jornada">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">A jornada até o seu negócio.</h2>
<p className="text-base text-slate-600">Um processo de seleção e implantação transparente, garantindo que você comece com o pé direito.</p>
</div>

<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2"></div>
<div className="grid md:grid-cols-4 gap-12 md:gap-6 relative z-10">

<div className="relative flex flex-col md:items-center md:text-center gap-4">
<div className="hidden md:flex absolute top-6 left-[50%] w-full h-px bg-blue-600 origin-left scale-x-0 transition-transform"></div> 
<div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-slate-400 flex items-center justify-center text-lg font-semibold relative z-10 shrink-0">
                            1
                        </div>
<div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-1">Aplicação</h4>
<p className="text-sm text-slate-500">Você preenche o formulário e analisamos seu perfil investidor.</p>
</div>
</div>

<div className="relative flex flex-col md:items-center md:text-center gap-4">
<div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-slate-400 flex items-center justify-center text-lg font-semibold relative z-10 shrink-0">
                            2
                        </div>
<div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-1">Imersão &amp; COF</h4>
<p className="text-sm text-slate-500">Reunião detalhada sobre números, operação e entrega da circular.</p>
</div>
</div>

<div className="relative flex flex-col md:items-center md:text-center gap-4">
<div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-slate-400 flex items-center justify-center text-lg font-semibold relative z-10 shrink-0">
                            3
                        </div>
<div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-1">Implantação</h4>
<p className="text-sm text-slate-500">Busca de ponto, projeto arquitetônico e treinamento da equipe.</p>
</div>
</div>

<div className="relative flex flex-col md:items-center md:text-center gap-4">
<div className="w-12 h-12 rounded-full bg-blue-600 border-2 border-blue-600 text-white flex items-center justify-center text-lg font-semibold relative z-10 shrink-0 shadow-lg shadow-blue-600/20">
                            4
                        </div>
<div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-1">Inauguração</h4>
<p className="text-sm text-slate-500">Sua unidade operando e faturando com nosso suporte contínuo.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative" id="investimento">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col gap-6">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tighter text-white leading-tight">
                        Um modelo feito para <br/><span className="text-yellow-400">recuperar o capital.</span>
</h2>
<p className="text-base text-slate-400 max-w-md leading-relaxed">
                        Nossa estrutura é enxuta. Menos custo imobilizado significa um payback mais rápido e uma margem operacional mais agressiva comparado a franquias tradicionais de alimentação ou serviços complexos.
                    </p>
<ul className="flex flex-col gap-4 mt-4">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Suporte na escolha do ponto comercial
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Projeto arquitetônico otimizado para fluxo
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Treinamento focado em conversão e gestão
                        </li>
</ul>
</div>

<div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10">
<div className="flex items-center gap-2 mb-8">
<iconify-icon className="text-yellow-400" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="text-sm font-medium tracking-wide text-white uppercase">Raio-X do Investimento</span>
</div>
<div className="space-y-6">
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<span className="text-sm text-slate-400">Modelo de Negócio</span>
<span className="text-base font-medium text-white">Creche + Hotel</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<span className="text-sm text-slate-400">Previsão de Payback</span>
<span className="text-base font-medium text-white">Apresentado na Reunião</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<span className="text-sm text-slate-400">Margem Estimada</span>
<span className="text-base font-medium text-emerald-400">Acima do Mercado Tradicional</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10">
<p className="text-xs text-slate-400 leading-relaxed">
                            * Os valores totais de implantação variam de acordo com o tamanho do imóvel e condições estruturais prévias. Transparência total na apresentação da COF.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="cta">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-blue-600 rounded-[2.5rem] p-10 lg:p-16 text-center relative overflow-hidden flex flex-col items-center shadow-2xl shadow-blue-600/20">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-800/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
<div className="relative z-10 flex flex-col items-center">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tighter text-white mb-6 leading-tight max-w-2xl">
                        Acesso exclusivo para novos franqueados abertos agora.
                    </h2>
<p className="text-base text-blue-100 mb-10 max-w-lg">
                        Não vendemos uma creche. Vendemos um negócio que transforma cuidado em lucro estruturado. Preencha o formulário e fale com nosso time de expansão.
                    </p>
<form className="w-full max-w-md flex flex-col gap-4">
<div className="relative">
<input className="w-full h-14 bg-white/10 border border-white/20 rounded-xl px-5 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all backdrop-blur-sm text-sm" placeholder="Seu nome completo" type="text"/>
</div>
<div className="relative">
<input className="w-full h-14 bg-white/10 border border-white/20 rounded-xl px-5 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all backdrop-blur-sm text-sm" placeholder="Seu melhor e-mail" type="email"/>
</div>
<div className="relative">
<input className="w-full h-14 bg-white/10 border border-white/20 rounded-xl px-5 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all backdrop-blur-sm text-sm" placeholder="Seu WhatsApp (com DDD)" type="tel"/>
</div>
<div className="pt-2">
<button className="w-full h-14 rounded-xl bg-yellow-400 text-yellow-950 text-base font-semibold hover:bg-yellow-500 transition-colors shadow-lg shadow-yellow-400/20 flex items-center justify-center gap-2" type="button">
                                Receber Apresentação Completa
                                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<p className="text-xs text-blue-200/60 mt-2">Suas informações estão seguras. Sem spam.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="font-bold tracking-tighter text-xl text-slate-900">
                TIO EDY<span className="text-blue-600">.</span>
</div>
<p className="text-sm text-slate-500">
                © 2024 Tio Edy Pet Care Franchising. Todos os direitos reservados.
            </p>
<div className="flex items-center gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="24"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
