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
      

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Ambiente de luxo biofílico" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2574"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
<div className="mb-6">
<h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                    Transforme Seu Ambiente em Um Reflexo Autêntico do Seu Sucesso
                </h1>
<h2 className="text-xl md:text-2xl text-neutral-200 font-light max-w-3xl mx-auto leading-relaxed">
                    Evite o estresse, os atrasos e o estouro de orçamento. Receba um diagnóstico profissional gratuito e descubra o primeiro passo para um projeto de design sem surpresas desagradáveis.
                </h2>
</div>
<div className="mt-12 flex justify-center">
<a className="inline-flex items-center gap-2 bg-white text-neutral-900 px-8 py-4 text-lg font-medium hover:bg-neutral-100 transition-all border border-white/20" href="#consulta">
                    Quero Minha Consulta Gratuita
                    <i className="w-5 h-5" data-lucide="arrow-down"></i>
</a>
</div>
</div>
</section>

<section className="py-20 px-6 bg-neutral-50 border-t border-neutral-200">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h3 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
                    Por Que a Maioria dos Projetos de Design Falham?
                </h3>
<p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    Proprietários de imóveis de alto padrão enfrentam desafios que comprometem a experiência e o resultado final
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 border border-neutral-200 hover:border-neutral-300 transition-all">
<div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6 text-red-600" data-lucide="clock"></i>
</div>
<h4 className="text-xl font-semibold text-neutral-900 mb-3">Atrasos Inevitáveis</h4>
<p className="text-neutral-600 leading-relaxed">
                        Sem planejamento rigoroso, reformas se estendem por meses além do previsto, causando transtornos e custos adicionais inesperados.
                    </p>
</div>
<div className="bg-white p-8 border border-neutral-200 hover:border-neutral-300 transition-all">
<div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6 text-red-600" data-lucide="trending-up"></i>
</div>
<h4 className="text-xl font-semibold text-neutral-900 mb-3">Estouro de Orçamento</h4>
<p className="text-neutral-600 leading-relaxed">
                        Mudanças de última hora e falta de especificação técnica precisa levam a gastos que podem ultrapassar 40% do valor inicial.
                    </p>
</div>
<div className="bg-white p-8 border border-neutral-200 hover:border-neutral-300 transition-all">
<div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6 text-red-600" data-lucide="home"></i>
</div>
<h4 className="text-xl font-semibold text-neutral-900 mb-3">Resultado Sem Personalidade</h4>
<p className="text-neutral-600 leading-relaxed">
                        Projetos genéricos que não refletem seu estilo de vida, desperdiçando o potencial do seu investimento e patrimônio.
                    </p>
</div>
</div>
<div className="mt-12 p-8 bg-emerald-50 border border-emerald-200 text-center">
<div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
<i className="w-6 h-6 text-emerald-700" data-lucide="check-circle"></i>
</div>
<p className="text-lg text-emerald-900 font-medium">
                    Existe uma maneira comprovada de evitar esses problemas e criar ambientes extraordinários no prazo e dentro do orçamento.
                </p>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-t border-neutral-200" id="consulta">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<div className="inline-block px-4 py-2 bg-neutral-900 text-white text-sm font-medium mb-6 tracking-wide">
                    OPORTUNIDADE LIMITADA
                </div>
<h3 className="text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight mb-6">
                    Consulta Rápida de Diagnóstico de Estilo
                </h3>
<p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-4">
                    Descubra em 15 minutos o potencial inexplorado do seu ambiente e receba um diagnóstico profissional personalizado — completamente gratuito.
                </p>
<p className="text-base text-neutral-500">
                    Valor real da consultoria: R$ 1.200 | Hoje: <span className="font-semibold text-neutral-900">Gratuito</span>
</p>
</div>
<div className="bg-neutral-50 border-2 border-neutral-900 p-10 max-w-xl mx-auto">
<h4 className="text-2xl font-semibold text-neutral-900 mb-2 text-center">O que você receberá:</h4>
<ul className="space-y-3 mb-8 text-neutral-700">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span>Análise do potencial do seu espaço com visão de especialista</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span>Identificação de problemas ocultos que podem gerar custos extras</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span>Primeiras recomendações para valorizar seu patrimônio</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span>Estimativa de investimento transparente e sem surpresas</span>
</li>
</ul>
<form className="space-y-5">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="nome">Nome Completo *</label>
<input className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all" id="nome" placeholder="Seu nome" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="email">E-mail *</label>
<input className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all" id="email" placeholder="seu@email.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="whatsapp">WhatsApp *</label>
<input className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all" id="whatsapp" placeholder="(00) 00000-0000" required="" type="tel"/>
</div>
<button className="w-full bg-neutral-900 text-white py-4 text-lg font-medium hover:bg-neutral-800 transition-all flex items-center justify-center gap-2" type="submit">
                        Quero Agendar Minha Consulta Gratuita Agora
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<p className="text-xs text-neutral-500 text-center">
                        Seus dados estão protegidos. Não compartilhamos suas informações.
                    </p>
</form>
</div>
</div>
</section>

<section className="py-20 px-6 bg-neutral-50 border-t border-neutral-200">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h3 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
                    O Que Nossos Clientes Dizem
                </h3>
<p className="text-lg text-neutral-600">
                    Transformações reais de quem confiou no processo
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-16">
<div className="bg-white p-8 border border-neutral-200">
<div className="flex items-center gap-4 mb-6">
<img alt="Cliente" className="w-16 h-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"/>
<div>
<h4 className="font-semibold text-neutral-900">Ricardo Mendes</h4>
<p className="text-sm text-neutral-600">Empresário | São Paulo</p>
</div>
</div>
<div className="flex gap-1 mb-4">
<i className="w-5 h-5 fill-yellow-400 stroke-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 stroke-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 stroke-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 stroke-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 stroke-yellow-400" data-lucide="star"></i>
</div>
<p className="text-neutral-700 leading-relaxed mb-4">
                        "A Juliana transformou completamente nosso apartamento. O que mais me impressionou foi o planejamento detalhado — tudo foi entregue exatamente como prometido, sem atrasos. Hoje recebemos elogios todos os dias e o valor do imóvel aumentou consideravelmente."
                    </p>
<p className="text-sm text-neutral-500 italic">Projeto: Residencial Alto Padrão 280m²</p>
</div>
<div className="bg-white p-8 border border-neutral-200">
<div className="flex items-center gap-4 mb-6">
<img alt="Cliente" className="w-16 h-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"/>
<div>
<h4 className="font-semibold text-neutral-900">Ana Paula Rodrigues</h4>
<p className="text-sm text-neutral-600">Advogada | Campinas</p>
</div>
</div>
<div className="flex gap-1 mb-4">
<i className="w-5 h-5 fill-yellow-400 stroke-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 stroke-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 stroke-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 stroke-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 stroke-yellow-400" data-lucide="star"></i>
</div>
<p className="text-neutral-700 leading-relaxed mb-4">
                        "Eu tinha pavor de reformas após experiências ruins no passado. O Studio Valério me surpreendeu: zero estresse, comunicação constante e respeito absoluto ao orçamento. O design biofílico trouxe uma paz incrível para minha rotina. Valeu cada centavo."
                    </p>
<p className="text-sm text-neutral-500 italic">Projeto: Consultório + Home Office 120m²</p>
</div>
</div>
<div className="text-center">
<p className="text-sm text-neutral-500 mb-6 uppercase tracking-wider font-medium">Projetos Reconhecidos Por</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40">
<div className="text-2xl font-bold tracking-tighter text-neutral-900">CASA VOGUE</div>
<div className="text-2xl font-bold tracking-tighter text-neutral-900">ARCHITECTURAL DIGEST</div>
<div className="text-2xl font-bold tracking-tighter text-neutral-900">ELLE DECOR</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-t border-neutral-200">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h3 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
                    O Processo Sem Estresse
                </h3>
<p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    Metodologia comprovada que elimina imprevistos e garante resultados excepcionais
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="relative">
<div className="flex items-start gap-6">
<div className="flex-shrink-0 w-14 h-14 bg-neutral-900 text-white rounded-full flex items-center justify-center text-xl font-semibold">
                            1
                        </div>
<div>
<h4 className="text-xl font-semibold text-neutral-900 mb-3">Planejamento Rigoroso</h4>
<p className="text-neutral-600 leading-relaxed">
                                Imersão completa no seu estilo de vida, necessidades e sonhos. Criamos um projeto técnico detalhado com especificações precisas e cronograma realista, evitando qualquer surpresa.
                            </p>
</div>
</div>
</div>
<div className="relative">
<div className="flex items-start gap-6">
<div className="flex-shrink-0 w-14 h-14 bg-neutral-900 text-white rounded-full flex items-center justify-center text-xl font-semibold">
                            2
                        </div>
<div>
<h4 className="text-xl font-semibold text-neutral-900 mb-3">Execução Controlada</h4>
<p className="text-neutral-600 leading-relaxed">
                                Acompanhamento semanal da obra com fornecedores de confiança. Você recebe relatórios transparentes e tem acesso direto para tirar dúvidas a qualquer momento.
                            </p>
</div>
</div>
</div>
<div className="relative">
<div className="flex items-start gap-6">
<div className="flex-shrink-0 w-14 h-14 bg-neutral-900 text-white rounded-full flex items-center justify-center text-xl font-semibold">
                            3
                        </div>
<div>
<h4 className="text-xl font-semibold text-neutral-900 mb-3">Entrega Garantida</h4>
<p className="text-neutral-600 leading-relaxed">
                                Finalização no prazo acordado com garantia de qualidade. Seu ambiente estará pronto para uso, refletindo autenticidade e valorizando seu patrimônio.
                            </p>
</div>
</div>
</div>
</div>
<div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 text-center">
<h4 className="text-xl font-semibold text-emerald-900 mb-3">Compromisso com Resultados</h4>
<p className="text-emerald-800 leading-relaxed max-w-3xl mx-auto">
                    Garantia de entrega no prazo estabelecido ou você recebe compensação. Transparência total no orçamento desde o primeiro dia. Seu investimento está protegido.
                </p>
</div>
</div>
</section>

<section className="py-20 px-6 bg-neutral-900 text-white border-t border-neutral-800">
<div className="max-w-4xl mx-auto text-center">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                Pronto Para Transformar Seu Ambiente Sem Estresse?
            </h3>
<p className="text-xl text-neutral-300 mb-10 leading-relaxed">
                Agende sua Consulta Gratuita de Diagnóstico de Estilo e descubra o primeiro passo para um projeto extraordinário.
            </p>
<a className="inline-flex items-center gap-2 bg-white text-neutral-900 px-8 py-4 text-lg font-medium hover:bg-neutral-100 transition-all" href="#consulta">
                Sim, Quero Minha Consulta Gratuita
                <i className="w-5 h-5" data-lucide="arrow-up"></i>
</a>
</div>
</section>

<footer className="py-12 px-6 bg-white border-t border-neutral-200">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-3 gap-8 mb-12">
<div>
<h5 className="text-2xl font-semibold tracking-tighter text-neutral-900 mb-4">SV</h5>
<p className="text-neutral-600 leading-relaxed text-sm">
                        Studio Valério Design — Especialistas em Design Biofílico de Alto Padrão com foco em Sustentabilidade e Tecnologia Inteligente.
                    </p>
</div>
<div>
<h6 className="font-semibold text-neutral-900 mb-4">Navegação</h6>
<ul className="space-y-2 text-sm">
<li><a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Portfólio de Projetos</a></li>
<li><a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Sobre a Arquiteta</a></li>
<li><a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Processo de Trabalho</a></li>
<li><a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Contato</a></li>
</ul>
</div>
<div>
<h6 className="font-semibold text-neutral-900 mb-4">Siga-nos</h6>
<div className="flex gap-4 mb-6">
<a className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:border-neutral-900 transition-all" href="#">
<i className="w-5 h-5 text-neutral-700" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:border-neutral-900 transition-all" href="#">
<i className="w-5 h-5 text-neutral-700" data-lucide="linkedin"></i>
</a>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Comprometidos com a excelência, sustentabilidade e a transformação de ambientes que refletem sucesso.
                    </p>
</div>
</div>
<div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600">
<p>© 2024 Studio Valério Design. Todos os direitos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-900 transition-colors" href="#">Política de Privacidade</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Termos de Uso</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
