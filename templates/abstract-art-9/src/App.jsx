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
<img alt="Arte Abstrata" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1920&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-neutral-950"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6 leading-none">
                Possua Uma Obra Que<br/>
<span className="text-amber-500">Transcende Decoração</span>
</h1>
<h2 className="text-xl md:text-2xl lg:text-3xl font-light text-neutral-300 max-w-3xl mx-auto leading-relaxed tracking-tight">
                Pare de investir em peças genéricas. Descubra como colecionadores inteligentes identificam arte abstrata de verdadeiro valor e exclusividade.
            </h2>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
<i className="w-8 h-8 text-neutral-400" data-lucide="chevron-down"></i>
</div>
</section>

<section className="relative py-24 px-6 bg-neutral-950 border-t border-neutral-900">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-3 gap-12">
<div className="text-center group">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 mb-6 group-hover:border-amber-500 transition-colors duration-300">
<i className="w-7 h-7 text-amber-500" data-lucide="palette"></i>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Técnica Exclusiva</h3>
<p className="text-neutral-400 leading-relaxed">Óleo sobre tela com aplicação de espátula – cada peça carrega textura tátil e profundidade visual impossíveis de replicar.</p>
</div>
<div className="text-center group">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 mb-6 group-hover:border-amber-500 transition-colors duration-300">
<i className="w-7 h-7 text-amber-500" data-lucide="gem"></i>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Edições Limitadas</h3>
<p className="text-neutral-400 leading-relaxed">Cada obra é única e assinada. Sem reproduções, sem cópias. Apenas 12 novas peças são lançadas por ano para colecionadores VIP.</p>
</div>
<div className="text-center group">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 mb-6 group-hover:border-amber-500 transition-colors duration-300">
<i className="w-7 h-7 text-amber-500" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Valorização Comprovada</h3>
<p className="text-neutral-400 leading-relaxed">Obras de Elias Montenegro se valorizam em média 40% ao ano no mercado secundário de arte contemporânea.</p>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-6 bg-gradient-to-br from-amber-500 to-amber-600">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-950/20 backdrop-blur-sm border border-neutral-50/20 mb-6">
<i className="w-4 h-4 text-neutral-950" data-lucide="star"></i>
<span className="text-sm font-medium text-neutral-950 tracking-wide">ACESSO EXCLUSIVO</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 text-neutral-950 leading-tight">
                Entre Para a Lista VIP<br/>de Colecionadores
            </h2>
<p className="text-lg md:text-xl text-neutral-950/80 mb-10 leading-relaxed max-w-2xl mx-auto">
                Seja o primeiro a saber sobre novos lançamentos, exposições privadas e receba gratuitamente o e-book <span className="font-semibold">"O Guia do Colecionador: Como Identificar o Verdadeiro Valor na Arte Abstrata"</span>
</p>
<div className="bg-neutral-950 rounded-2xl p-8 md:p-12 shadow-2xl border border-neutral-800">
<form className="space-y-5">
<div className="text-left">
<label className="block text-sm font-medium text-neutral-400 mb-2" htmlFor="name">Nome Completo</label>
<input className="w-full px-5 py-4 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-50 placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200" id="name" placeholder="Digite seu nome" type="text"/>
</div>
<div className="text-left">
<label className="block text-sm font-medium text-neutral-400 mb-2" htmlFor="email">Seu Melhor E-mail</label>
<input className="w-full px-5 py-4 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-50 placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200" id="email" placeholder="seu@email.com" type="email"/>
</div>
<button className="w-full px-8 py-5 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 text-lg" type="submit">
                        Garantir Meu Acesso VIP Agora
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<p className="text-xs text-neutral-500 flex items-center justify-center gap-2">
<i className="w-3 h-3" data-lucide="lock"></i>
                        Seus dados estão 100% protegidos e nunca serão compartilhados
                    </p>
</form>
<div className="mt-8 pt-8 border-t border-neutral-800 flex items-center justify-center gap-6 text-neutral-400 text-sm">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-500" data-lucide="users"></i>
<span>Apenas 47 vagas restantes</span>
</div>
<div className="w-px h-4 bg-neutral-800"></div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-500" data-lucide="clock"></i>
<span>Lista fecha em 72h</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950 border-t border-neutral-900">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">O Que Dizem Colecionadores</h2>
<p className="text-neutral-400">Investidores e especialistas que confiam no trabalho de Elias Montenegro</p>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors duration-300">
<div className="flex items-start gap-4 mb-6">
<img alt="Colecionador" className="w-16 h-16 rounded-full object-cover border-2 border-amber-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-lg">Ricardo Almeida</h4>
<p className="text-sm text-neutral-400">Colecionador de Arte Contemporânea</p>
</div>
</div>
<p className="text-neutral-300 leading-relaxed italic">
                        "Adquiri minha primeira obra de Elias há três anos por R$ 18 mil. Hoje, ela foi avaliada em R$ 32 mil. Além da valorização financeira, a peça se tornou o ponto focal do meu escritório – cada cliente comenta sobre ela. É um investimento que paga dividendos estéticos e financeiros."
                    </p>
<div className="flex gap-1 mt-4">
<i className="w-4 h-4 fill-amber-500 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-amber-500 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-amber-500 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-amber-500 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-amber-500 text-amber-500" data-lucide="star"></i>
</div>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors duration-300">
<div className="flex items-start gap-4 mb-6">
<img alt="Crítica de Arte" className="w-16 h-16 rounded-full object-cover border-2 border-amber-500" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-lg">Dra. Helena Carvalho</h4>
<p className="text-sm text-neutral-400">Crítica de Arte e Curadora</p>
</div>
</div>
<p className="text-neutral-300 leading-relaxed italic">
                        "A técnica de espátula de Elias Montenegro possui uma assinatura inconfundível no cenário brasileiro. Suas camadas de óleo criam uma profundidade emocional rara no abstracionismo contemporâneo. É um dos artistas emergentes mais promissores que acompanho nos últimos dez anos."
                    </p>
<div className="flex gap-1 mt-4">
<i className="w-4 h-4 fill-amber-500 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-amber-500 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-amber-500 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-amber-500 text-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 fill-amber-500 text-amber-500" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900 border-t border-neutral-800">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm font-medium mb-6">
                        O ARTISTA
                    </div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 leading-tight">
                        Elias Montenegro
                    </h2>
<p className="text-neutral-300 text-lg leading-relaxed mb-6">
                        Com mais de 15 anos dedicados à arte abstrata expressionista, Elias Montenegro desenvolveu uma técnica única que combina a intensidade emocional do expressionismo com a precisão técnica da aplicação de espátula em óleo sobre tela.
                    </p>
<p className="text-neutral-400 leading-relaxed mb-8">
                        Suas obras já foram expostas em galerias de São Paulo, Rio de Janeiro e Miami, e fazem parte de coleções particulares em três continentes. Cada pintura é resultado de semanas de trabalho meticuloso, onde camadas de cor são aplicadas e removidas até alcançar a composição perfeita – aquela que dialoga com o subconsciente e transforma ambientes em experiências sensoriais.
                    </p>
<div className="flex flex-wrap gap-4 text-sm">
<div className="flex items-center gap-2 text-neutral-400">
<i className="w-4 h-4 text-amber-500" data-lucide="award"></i>
<span>12+ Exposições Internacionais</span>
</div>
<div className="flex items-center gap-2 text-neutral-400">
<i className="w-4 h-4 text-amber-500" data-lucide="briefcase"></i>
<span>200+ Obras Vendidas</span>
</div>
<div className="flex items-center gap-2 text-neutral-400">
<i className="w-4 h-4 text-amber-500" data-lucide="globe"></i>
<span>Colecionadores em 15 Países</span>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
<img alt="Elias Montenegro no ateliê" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 bg-neutral-950 border-t border-neutral-900">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<h3 className="text-2xl font-semibold tracking-tighter mb-2">EM</h3>
<p className="text-neutral-500 text-sm">Elias Montenegro © 2024</p>
</div>
<div className="flex flex-wrap justify-center gap-8 text-sm">
<a className="text-neutral-400 hover:text-amber-500 transition-colors flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="image"></i>
                        Portfólio Completo
                    </a>
<a className="text-neutral-400 hover:text-amber-500 transition-colors flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
                        Instagram
                    </a>
<a className="text-neutral-400 hover:text-amber-500 transition-colors flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="shield"></i>
                        Política de Privacidade
                    </a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-neutral-900 text-center text-neutral-600 text-xs">
<p>Seus dados são tratados com total sigilo e segurança. Nunca compartilharemos suas informações com terceiros.</p>
</div>
</div>
</footer>


    </>
  );
}
