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
      

<nav className="absolute top-0 left-0 w-full z-50 py-6 border-b border-white/5">
<div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight text-white">Oktaforce</span>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium text-sm transition-all backdrop-blur-md" href="#orcamento">
                Solicitar Orçamento
            </a>
</div>
</nav>

<section className="relative min-h-[85vh] flex items-center pt-32 pb-24 bg-neutral-950 overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-medium mb-8">
<iconify-icon className="text-sm" icon="solar:bolt-linear"></iconify-icon>
<span>A evolução da segurança condominial</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 max-w-4xl leading-[1.1]">
                Reduza em até 70% o custo da portaria com segurança 24/7
            </h1>
<p className="text-base md:text-lg font-light text-neutral-400 mb-10 max-w-2xl leading-relaxed">
                Substitua a portaria física vulnerável por um sistema inteligente. Elimine falhas humanas, evite passivos trabalhistas e garanta proteção ininterrupta para seu patrimônio.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-neutral-950 font-medium text-base hover:bg-neutral-200 transition-all duration-300" href="#orcamento">
                    Solicitar Orçamento Gratuito
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-neutral-700 text-white font-medium text-base hover:bg-neutral-900 transition-all duration-300" href="#como-funciona">
                    Entender como funciona
                </a>
</div>
<div className="mt-12 flex items-center gap-4 text-xs text-neutral-500 font-light">
<div className="flex items-center gap-1.5"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Sem taxa de adesão</div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-neutral-700"></div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Implantação rápida</div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-neutral-700"></div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Suporte 24 horas</div>
</div>
</div>
</section>

<section className="py-12 border-b border-neutral-200 bg-white">
<div className="container mx-auto px-6 max-w-6xl">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-neutral-100">
<div className="flex flex-col items-center">
<span className="text-3xl font-medium tracking-tight text-neutral-900 mb-1">+27</span>
<span className="text-xs text-neutral-500 font-medium uppercase tracking-widest">Anos de Mercado</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-medium tracking-tight text-neutral-900 mb-1">-70%</span>
<span className="text-xs text-neutral-500 font-medium uppercase tracking-widest">Redução de Custos</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-medium tracking-tight text-neutral-900 mb-1">24/7</span>
<span className="text-xs text-neutral-500 font-medium uppercase tracking-widest">Monitoramento Ativo</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-medium tracking-tight text-neutral-900 mb-1">0</span>
<span className="text-xs text-neutral-500 font-medium uppercase tracking-widest">Falhas Humanas</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50">
<div className="container mx-auto px-6 max-w-5xl">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4">
                    Por que abandonar a portaria tradicional?
                </h2>
<p className="text-base text-neutral-500">Compare os modelos e entenda o impacto direto na segurança e nas finanças do seu condomínio.</p>
</div>
<div className="grid md:grid-cols-2 gap-6 lg:gap-8">

<div className="bg-white p-8 lg:p-10 rounded-3xl border border-neutral-200 shadow-sm">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900">Portaria Física</h3>
</div>
<ul className="space-y-5">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 text-lg shrink-0 mt-0.5" icon="solar:danger-circle-linear"></iconify-icon>
<span className="text-sm text-neutral-600"><strong>Custo elevado:</strong> Folha de pagamento, encargos trabalhistas, férias e faltas consomem a maior parte do orçamento.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 text-lg shrink-0 mt-0.5" icon="solar:danger-circle-linear"></iconify-icon>
<span className="text-sm text-neutral-600"><strong>Vulnerabilidade:</strong> Profissionais expostos a rendições em caso de invasões criminosas.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 text-lg shrink-0 mt-0.5" icon="solar:danger-circle-linear"></iconify-icon>
<span className="text-sm text-neutral-600"><strong>Falha humana:</strong> Distrações, sono ou conivência comprometem o controle rigoroso de acesso.</span>
</li>
</ul>
</div>

<div className="bg-neutral-900 p-8 lg:p-10 rounded-3xl border border-neutral-800 shadow-xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none"></div>
<div className="flex items-center gap-3 mb-8 relative z-10">
<div className="w-10 h-10 rounded-full bg-cyan-400/10 text-cyan-400 flex items-center justify-center border border-cyan-400/20">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Solução Oktaforce</h3>
</div>
<ul className="space-y-5 relative z-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-cyan-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-neutral-300"><strong>Economia drástica:</strong> Redução imediata de custos fixos. Mensalidade previsível sem surpresas trabalhistas.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-cyan-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-neutral-300"><strong>Inviolabilidade:</strong> Operação blindada e remota. Impossível render a central de monitoramento.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-cyan-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-neutral-300"><strong>Auditoria total:</strong> Todos os acessos gravados em áudio e vídeo com backup em nuvem.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-neutral-200">
<div className="container mx-auto px-6 max-w-6xl">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-4">
                    Vantagens claras para sua gestão
                </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl border border-neutral-100 bg-neutral-50 hover:border-neutral-200 transition-all">
<iconify-icon className="text-2xl text-indigo-600 mb-4" icon="solar:wallet-money-linear"></iconify-icon>
<h3 className="text-base font-medium text-neutral-900 mb-2">Economia na Folha</h3>
<p className="text-sm text-neutral-500 mb-4 leading-relaxed">Libere orçamento do condomínio para benfeitorias eliminando custos com salários e encargos da portaria.</p>
<div className="inline-flex items-center px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded">
                        Até 70% de redução
                    </div>
</div>

<div className="p-6 rounded-2xl border border-neutral-100 bg-neutral-50 hover:border-neutral-200 transition-all">
<iconify-icon className="text-2xl text-indigo-600 mb-4" icon="solar:shield-warning-linear"></iconify-icon>
<h3 className="text-base font-medium text-neutral-900 mb-2">Zero Risco de Rendição</h3>
<p className="text-sm text-neutral-500 mb-4 leading-relaxed">Sem presença física no local, criminosos não têm a quem coagir para invadir as dependências.</p>
<div className="inline-flex items-center px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded">
                        Proteção remota total
                    </div>
</div>

<div className="p-6 rounded-2xl border border-neutral-100 bg-neutral-50 hover:border-neutral-200 transition-all">
<iconify-icon className="text-2xl text-indigo-600 mb-4" icon="solar:stopwatch-linear"></iconify-icon>
<h3 className="text-base font-medium text-neutral-900 mb-2">Atendimento Imediato</h3>
<p className="text-sm text-neutral-500 mb-4 leading-relaxed">Nossa central atende visitantes e prestadores de serviço com agilidade, sem filas ou espera na porta.</p>
<div className="inline-flex items-center px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded">
                        Em menos de 10s
                    </div>
</div>

<div className="p-6 rounded-2xl border border-neutral-100 bg-neutral-50 hover:border-neutral-200 transition-all">
<iconify-icon className="text-2xl text-indigo-600 mb-4" icon="solar:smartphone-update-linear"></iconify-icon>
<h3 className="text-base font-medium text-neutral-900 mb-2">Controle via App</h3>
<p className="text-sm text-neutral-500 mb-4 leading-relaxed">Moradores enviam convites virtuais (QR Code) e abrem portões diretamente pelo smartphone de onde estiverem.</p>
<div className="inline-flex items-center px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded">
                        Gestão na palma da mão
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white overflow-hidden" id="como-funciona">
<div className="container mx-auto px-6 max-w-6xl">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">
                    Como funciona na prática?
                </h2>
<p className="text-base text-neutral-400">Um fluxo simples, rápido e totalmente rastreável.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-6 left-12 right-12 h-px bg-neutral-800"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-neutral-950 border border-neutral-700 flex items-center justify-center text-sm font-medium text-neutral-300 mb-6">1</div>
<h3 className="text-base font-medium mb-2">Chegada</h3>
<p className="text-sm font-light text-neutral-400">Visitante aciona o interfone. A câmera HD é ativada imediatamente.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-neutral-950 border border-neutral-700 flex items-center justify-center text-sm font-medium text-neutral-300 mb-6">2</div>
<h3 className="text-base font-medium mb-2">Atendimento</h3>
<p className="text-sm font-light text-neutral-400">Central Oktaforce atende, identifica a pessoa e registra a foto.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-neutral-950 border border-neutral-700 flex items-center justify-center text-sm font-medium text-neutral-300 mb-6">3</div>
<h3 className="text-base font-medium mb-2">Autorização</h3>
<p className="text-sm font-light text-neutral-400">Operador contata o morador via app ou telefone para validar a entrada.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-indigo-600 border border-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.3)] flex items-center justify-center text-sm font-medium text-white mb-6">4</div>
<h3 className="text-base font-medium text-cyan-400 mb-2">Acesso Liberado</h3>
<p className="text-sm font-light text-neutral-400">Portão aberto remotamente. Tudo fica registrado no histórico do condomínio.</p>
</div>
</div>

<div className="mt-16 max-w-3xl mx-auto bg-neutral-800/50 border border-neutral-700/50 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
<div className="w-12 h-12 shrink-0 rounded-full bg-neutral-800 flex items-center justify-center">
<iconify-icon className="text-xl text-yellow-500" icon="solar:lightbulb-linear"></iconify-icon>
</div>
<div>
<span className="text-sm text-neutral-400 block mb-1">Exemplo real:</span>
<p className="text-sm text-neutral-200 leading-relaxed">
                        Um entregador de delivery chega às 23h. Em <span className="text-white font-medium">5 segundos</span> nossa central atende. O morador recebe uma notificação no app, visualiza a câmera e destrava o portão de pedestres com <span className="text-white font-medium">1 clique</span>. Rápido e sem contato direto.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50">
<div className="container mx-auto px-6 max-w-6xl">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-4">
                    O DNA Oktaforce
                </h2>
<p className="text-base text-neutral-500">Mais de 27 anos de expertise traduzidos em três pilares fundamentais.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-neutral-200">
<h3 className="text-lg font-medium text-neutral-900 mb-6 flex items-center gap-2 border-b border-neutral-100 pb-4">
<iconify-icon className="text-indigo-600" icon="solar:shield-keyhole-linear"></iconify-icon>
                        Segurança Tecnológica
                    </h3>
<ul className="space-y-4 text-sm text-neutral-600">
<li><strong>Inovação contínua:</strong> Equipamentos de ponta e sistemas sempre atualizados.</li>
<li><strong>Foco absoluto:</strong> Proteção de vidas e patrimônios é nossa prioridade inegociável.</li>
<li><strong>Monitoramento robusto:</strong> Infraestrutura central com redundância de energia e internet.</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-200">
<h3 className="text-lg font-medium text-neutral-900 mb-6 flex items-center gap-2 border-b border-neutral-100 pb-4">
<iconify-icon className="text-indigo-600" icon="solar:chart-line-up-linear"></iconify-icon>
                        Eficiência Operacional
                    </h3>
<ul className="space-y-4 text-sm text-neutral-600">
<li><strong>Agilidade de resposta:</strong> Processos otimizados para zero fila de espera na portaria.</li>
<li><strong>Excelência em serviço:</strong> Operadores treinados rigorosamente em protocolos de crise.</li>
<li><strong>Sustentabilidade:</strong> Operação paperless e gestão inteligente de recursos do condomínio.</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-200">
<h3 className="text-lg font-medium text-neutral-900 mb-6 flex items-center gap-2 border-b border-neutral-100 pb-4">
<iconify-icon className="text-indigo-600" icon="solar:users-group-rounded-linear"></iconify-icon>
                        Transparência e Foco
                    </h3>
<ul className="space-y-4 text-sm text-neutral-600">
<li><strong>Clareza comercial:</strong> Contratos transparentes, sem letras miúdas ou taxas surpresa.</li>
<li><strong>Valorização humana:</strong> Atendimento empático com moradores e equipe própria respeitada.</li>
<li><strong>Parceria duradoura:</strong> Foco em resolver problemas reais e manter relações de longo prazo.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-neutral-200" id="orcamento">
<div className="container mx-auto px-6 max-w-5xl">
<div className="bg-neutral-950 rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden relative">

<div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/30 blur-[80px] rounded-full pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

<div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">
                            Descubra quanto seu condomínio pode economizar
                        </h2>
<p className="text-base font-light text-neutral-400 mb-8">
                            Preencha os dados e receba em até <strong>2 horas úteis</strong> um estudo preliminar de viabilidade e projeção de economia, sem qualquer compromisso.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-light text-neutral-300">Análise de vulnerabilidade 100% gratuita</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-light text-neutral-300">Cálculo exato da redução na taxa condominial</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-light text-neutral-300">Atendimento consultivo, não insistente</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 md:p-8">
<form className="space-y-5">
<div>
<label className="block text-xs font-medium text-neutral-600 mb-1.5">Seu Nome</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="Como podemos te chamar?" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-600 mb-1.5">E-mail</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="seu@email.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-600 mb-1.5">WhatsApp</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="(00) 00000-0000" type="tel"/>
</div>
<button className="w-full mt-2 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 transition-all shadow-sm" type="button">
                                Receber Estudo Gratuito
                                <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-[11px] text-center text-neutral-500 mt-3">Prometemos não enviar spam. Seus dados estão seguros.</p>
</form>

<div className="hidden flex-col items-center justify-center text-center py-8">
<div className="w-12 h-12 rounded-full bg-green-50 text-green-500 flex items-center justify-center mb-4">
<iconify-icon className="text-2xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium text-neutral-900 mb-2">Solicitação Enviada!</h4>
<p className="text-sm text-neutral-500">Um especialista analisará seu perfil e entrará em contato pelo WhatsApp em breve.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-50 py-12 border-t border-neutral-200">
<div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400 text-xl" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-sm font-medium text-neutral-600 tracking-tight">Oktaforce Brasil</span>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-indigo-600 transition-colors" href="#">Termos de Uso</a>
<a className="hover:text-indigo-600 transition-colors" href="#">Privacidade</a>
<a className="hover:text-indigo-600 transition-colors" href="mailto:contato@oktaforce.com.br">contato@oktaforce.com.br</a>
</div>
<p className="text-xs text-neutral-400">
                © 2026 Oktaforce. Todos os direitos reservados.
            </p>
</div>
</footer>

    </>
  );
}
