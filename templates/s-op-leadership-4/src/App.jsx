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
brand: {
dark: '#1a1f36',    // Primary
medium: '#2d3561',  // Secondary
orange: '#ff6b35',  // Highlight/CTA
orangeDark: '#e55a28', // CTA Hover
gray: '#f5f5f5',    // Light BG
text: '#333333',    // Text
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



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
      

<section className="relative min-h-screen flex flex-col hero-bg">

<div className="absolute inset-0 bg-brand-dark/80 mix-blend-multiply z-0"></div>
<div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 to-brand-dark/90 z-0"></div>

<div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-8 pb-20 md:pt-12 md:pb-32 flex flex-col h-full justify-center">

<div className="mb-16 md:mb-24">
<div className="text-white font-bold tracking-tighter text-2xl md:text-3xl leading-none">
                    BLUEPRINTT<span className="text-brand-orange">.</span>
</div>
<div className="text-white/60 text-xs font-medium tracking-widest uppercase mt-1">S&amp;OP LEADERSHIP SUMMIT</div>
</div>

<div className="max-w-4xl">
<h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                    O Encontro Definitivo para Líderes de S&amp;OP que querem liderar a era da IA
                </h1>
<h2 className="text-white/90 text-lg md:text-2xl font-light leading-relaxed mb-10 max-w-2xl">
                    A inteligência artificial está matando o planejamento tradicional. Enquanto seus concorrentes ainda brigam com planilhas de Excel, você pode estar dominando as ferramentas que definem o futuro do S&amp;OP. Não fique para trás.
                </h2>

<div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-10 text-white font-medium text-sm md:text-base">
<div className="flex items-center gap-2">
<i className="text-brand-orange w-5 h-5" data-lucide="calendar"></i>
<span>15 e 16 de Março, 2026</span>
</div>
<div className="flex items-center gap-2">
<i className="text-brand-orange w-5 h-5" data-lucide="map-pin"></i>
<span>São Paulo, SP</span>
</div>
</div>

<a className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orangeDark text-white font-semibold text-lg py-4 px-10 rounded-lg shadow-[0_4px_14px_0_rgba(255,107,53,0.39)] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out group" href="#cta-final">
                    Quero garantir minha vaga
                    <i className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center text-brand-medium text-xl md:text-2xl font-semibold tracking-tight mb-12 max-w-3xl mx-auto">
                Explore novas ideias e práticas a partir das experiências de líderes que atuam em:
            </h2>
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center opacity-70">

<span className="text-2xl font-bold tracking-tight text-gray-500 company-logo">Unilever</span>
<span className="text-2xl font-bold tracking-tight text-gray-500 company-logo">Nestlé</span>
<span className="text-2xl font-bold tracking-tight text-gray-500 company-logo">Ambev</span>
<span className="text-2xl font-bold tracking-tight text-gray-500 company-logo">Natura</span>
<span className="text-2xl font-bold tracking-tight text-gray-500 company-logo">Bosch</span>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-brand-gray">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-brand-dark text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                    Domine S&amp;OP na Era da IA e alcance resultados extraordinários
                </h2>
<p className="text-brand-medium text-lg leading-relaxed">
                    Acelere sua jornada com dias intensivos de descobertas estratégicas e conexões que impulsionarão seus resultados.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6">
<i className="text-brand-orange w-7 h-7" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-3 tracking-tight">Previsibilidade Total de Demanda</h3>
<p className="text-gray-600 leading-relaxed">
                        Reduza em até 40% as rupturas de estoque através de técnicas avançadas de forecasting com IA. Aumente diretamente a satisfação do cliente.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6">
<i className="text-brand-orange w-7 h-7" data-lucide="target"></i>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-3 tracking-tight">Torne-se Parceiro Estratégico</h3>
<p className="text-gray-600 leading-relaxed">
                        Ganhe influência direta nas decisões de negócio ao dominar a linguagem de resultados. Posicione o S&amp;OP como motor de crescimento.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6">
<i className="text-brand-orange w-7 h-7" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-3 tracking-tight">Automação Inteligente</h3>
<p className="text-gray-600 leading-relaxed">
                        Reduza em 60% o tempo gasto em planilhas manuais. Libere sua equipe para decisões estratégicas enquanto a IA cuida do repetitivo.
                    </p>
</div>
</div>
<div className="text-center mt-12 md:mt-16">
<a className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orangeDark text-white font-semibold text-lg py-4 px-10 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all duration-300" href="#cta-final">
                    Quero garantir minha vaga
                </a>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-brand-dark text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                    Acesse um programa estratégico para impulsionar seu impacto
                </h2>
<p className="text-brand-medium text-lg leading-relaxed">
                    Encontre respostas para os tópicos mais urgentes, últimas tendências e desafios cruciais para conduzir transformações na área.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl group hover:border-brand-orange/30 transition-colors duration-300">
<div className="text-5xl font-bold text-brand-orange opacity-90 mb-6 group-hover:scale-105 transition-transform origin-left">01</div>
<h3 className="text-2xl font-semibold text-brand-dark mb-4 tracking-tight">Tecnologia &amp; IA</h3>
<p className="text-gray-600 leading-relaxed">
                        Domine as ferramentas de inteligência artificial que estão revolucionando o planejamento. Aprenda a implementar machine learning para previsão de demanda e otimização de estoque.
                    </p>
</div>

<div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl group hover:border-brand-orange/30 transition-colors duration-300">
<div className="text-5xl font-bold text-brand-orange opacity-90 mb-6 group-hover:scale-105 transition-transform origin-left">02</div>
<h3 className="text-2xl font-semibold text-brand-dark mb-4 tracking-tight">Liderança &amp; Influência</h3>
<p className="text-gray-600 leading-relaxed">
                        Desenvolva as habilidades de comunicação necessárias para posicionar S&amp;OP como função estratégica. Aprenda a falar a linguagem do C-Level e ganhar buy-in.
                    </p>
</div>

<div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl group hover:border-brand-orange/30 transition-colors duration-300">
<div className="text-5xl font-bold text-brand-orange opacity-90 mb-6 group-hover:scale-105 transition-transform origin-left">03</div>
<h3 className="text-2xl font-semibold text-brand-dark mb-4 tracking-tight">Processos &amp; Execução</h3>
<p className="text-gray-600 leading-relaxed">
                        Implemente frameworks comprovados de integração entre Vendas, Operações e Finanças. Descubra como empresas líderes estão redesenhando seus processos.
                    </p>
</div>
</div>
<div className="text-center mt-16">
<a className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orangeDark text-white font-semibold text-lg py-4 px-10 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all duration-300" href="#cta-final">
                    Quero garantir minha vaga
                </a>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-brand-dark text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
                    Conecte-se com pares que definem o futuro do S&amp;OP
                </h2>
<p className="text-white/80 text-lg leading-relaxed">
                    Executivos, líderes e especialistas de grandes organizações, unidos pelo compromisso de elevar o patamar da área.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">

<div>
<h3 className="text-xl md:text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">Principais Cargos</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="text-brand-orange w-6 h-6 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-lg text-white/90">VP de S&amp;OP</span>
</li>
<li className="flex items-start gap-3">
<i className="text-brand-orange w-6 h-6 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-lg text-white/90">Diretor de Planejamento</span>
</li>
<li className="flex items-start gap-3">
<i className="text-brand-orange w-6 h-6 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-lg text-white/90">Gerente de Demand Planning</span>
</li>
<li className="flex items-start gap-3">
<i className="text-brand-orange w-6 h-6 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-lg text-white/90">Gerente de Supply Planning</span>
</li>
<li className="flex items-start gap-3">
<i className="text-brand-orange w-6 h-6 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-lg text-white/90">Head de Operações</span>
</li>
</ul>
</div>

<div>
<h3 className="text-xl md:text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">Setores Prioritários</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="text-brand-orange w-6 h-6 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-lg text-white/90">Varejo</span>
</li>
<li className="flex items-start gap-3">
<i className="text-brand-orange w-6 h-6 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-lg text-white/90">Indústria Farmacêutica</span>
</li>
<li className="flex items-start gap-3">
<i className="text-brand-orange w-6 h-6 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-lg text-white/90">Bens de Consumo</span>
</li>
<li className="flex items-start gap-3">
<i className="text-brand-orange w-6 h-6 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-lg text-white/90">Alimentos e Bebidas</span>
</li>
<li className="flex items-start gap-3">
<i className="text-brand-orange w-6 h-6 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-lg text-white/90">Manufatura</span>
</li>
</ul>
</div>
</div>
<div className="text-center mt-16">
<button className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orangeDark text-white font-semibold text-lg py-4 px-10 rounded-lg shadow-[0_4px_14px_0_rgba(255,107,53,0.39)] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out">
                    Quero garantir minha vaga
                </button>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="cta-final">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-brand-dark text-3xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
                Garanta sua vaga e participe deste programa exclusivo para elevar seu impacto
            </h2>
<p className="text-red-600 font-semibold text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                Enquanto você hesita, seus concorrentes já estão dominando IA no planejamento. Não fique para trás.
            </p>
<div className="bg-gray-50 rounded-2xl p-8 mb-12 text-left inline-block shadow-sm border border-gray-100">
<ul className="space-y-4">
<li className="flex items-center gap-3">
<i className="text-green-600 w-5 h-5 stroke-[2.5]" data-lucide="check"></i>
<span className="text-brand-dark font-medium">Previsibilidade total de demanda com IA</span>
</li>
<li className="flex items-center gap-3">
<i className="text-green-600 w-5 h-5 stroke-[2.5]" data-lucide="check"></i>
<span className="text-brand-dark font-medium">Influência estratégica no C-Level</span>
</li>
<li className="flex items-center gap-3">
<i className="text-green-600 w-5 h-5 stroke-[2.5]" data-lucide="check"></i>
<span className="text-brand-dark font-medium">Automação de 60% dos processos manuais</span>
</li>
<li className="flex items-center gap-3">
<i className="text-green-600 w-5 h-5 stroke-[2.5]" data-lucide="check"></i>
<span className="text-brand-dark font-medium">Conexões com líderes das maiores empresas</span>
</li>
<li className="flex items-center gap-3">
<i className="text-green-600 w-5 h-5 stroke-[2.5]" data-lucide="check"></i>
<span className="text-brand-dark font-medium">Frameworks prontos para implementar na segunda-feira</span>
</li>
</ul>
</div>
<div className="flex flex-col items-center">
<button className="w-full md:w-auto bg-brand-orange hover:bg-brand-orangeDark text-white font-semibold text-xl py-5 px-16 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    Quero garantir minha vaga
                </button>
<p className="text-gray-500 text-sm italic mt-6">
                    P.S.: Vagas limitadas a 50 participantes. Garanta seu lugar antes que esgote.
                </p>
</div>
<div className="mt-16 pt-8 border-t border-gray-100 text-sm text-gray-400">
                © 2026 Blueprintt S&amp;OP Leadership Summit. Todos os direitos reservados.
            </div>
</div>
</section>



    </>
  );
}
