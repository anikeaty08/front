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
      

<nav className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tight text-slate-900">ONE7 GRUPO</span>
</div>
<div className="hidden gap-8 text-sm font-medium text-slate-500 md:flex">
<a className="hover:text-slate-900 transition-colors" href="#">Quem Somos</a>
<a className="hover:text-slate-900 transition-colors" href="#">Soluções</a>
<a className="hover:text-slate-900 transition-colors" href="#">Governança</a>
<a className="hover:text-slate-900 transition-colors" href="#">Contato</a>
</div>
<button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white transition-transform hover:scale-105 active:scale-95">
                Fale Conosco
            </button>
</div>
</nav>

<header className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
<div className="absolute inset-0 -z-10 grid-bg [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex flex-col items-start max-w-4xl">
<div className="mb-6 flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Abertura — Quem Somos</span>
</div>
<h1 className="text-4xl font-medium tracking-tight text-slate-900 sm:text-6xl mb-6">
                    Somos um ecossistema que impulsiona empresas a crescer com solidez.
                </h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-2xl mb-8">
                    Na One7 Grupo, estruturamos capital, crédito e relações estratégicas para apoiar a evolução de empresas em diferentes estágios de maturidade.
                </p>
<div className="relative pl-6 border-l-2 border-slate-200">
<p className="text-base text-slate-600 max-w-3xl">
                        Não acreditamos em soluções isoladas. Acreditamos em visão de longo prazo, inteligência financeira e decisões que sustentam o crescimento real. Por isso, atuamos como um grupo que conecta crédito, capital, governança e tecnologia para fortalecer empresas, gerar impacto econômico e construir trajetórias consistentes.
                    </p>
</div>
</div>
<div className="mt-20 flex items-center gap-3 text-sm font-medium text-slate-400 animate-bounce">
<iconify-icon icon="solar:arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Conheça nossa visão, nossas pessoas e o ecossistema que construímos.
            </div>
</div>
</header>

<section className="py-24 border-t border-slate-100">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
<div>
<span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-2 block">Propósito e Visão</span>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">
                        Nossa visão vai além do crédito.
                    </h2>
</div>
<div className="space-y-4">
<p className="text-base leading-relaxed">
                        Existimos para apoiar empresas na construção de crescimento sustentável.
                    </p>
<p className="text-base leading-relaxed text-slate-500">
                        Nosso papel é estruturar caminhos financeiros mais inteligentes, seguros e alinhados à realidade de cada negócio, respeitando seu momento e seu potencial de evolução.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md hover:border-slate-300 transition-all duration-300">
<div className="mb-4 text-indigo-600">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Visão de longo prazo</h3>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md hover:border-slate-300 transition-all duration-300">
<div className="mb-4 text-indigo-600">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Impacto econômico real</h3>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md hover:border-slate-300 transition-all duration-300">
<div className="mb-4 text-indigo-600">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Estrutura antes da escala</h3>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md hover:border-slate-300 transition-all duration-300">
<div className="mb-4 text-indigo-600">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Relações baseadas em confiança</h3>
</div>
</div>
<div className="mt-12 text-center border-t border-slate-100 pt-8">
<p className="text-lg font-medium text-slate-900 tracking-tight">Crescer é uma decisão estratégica. Nós ajudamos empresas a tomá-la com clareza.</p>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-slate-300 overflow-hidden relative">

<div className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-indigo-900/20 blur-3xl"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
<div className="lg:col-span-7">
<span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2 block">Liderança e Cultura</span>
<h2 className="text-3xl font-medium tracking-tight text-white mb-6">
                        Pessoas que pensam estrutura, não atalhos.
                    </h2>
<div className="space-y-6 text-slate-400">
<p>
                            A One7 Grupo é formada por profissionais com experiência em crédito, capital, governança e tecnologia. Pessoas que entendem que crescimento exige análise, responsabilidade e visão sistêmica.
                        </p>
<p>
                            Mais do que especialistas, somos um time que compartilha valores: decidir com critério, agir com transparência e construir relações duradouras.
                        </p>
<div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-8">
<p className="text-white font-medium italic">
                                "Aqui, decisões são coletivas, a visão é integrada e o compromisso é com o futuro das empresas que acompanhamos."
                            </p>
</div>
</div>
<div className="mt-8">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors" href="#">
                            Conheça quem constrói a One7 Grupo
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="grid grid-cols-2 gap-4 opacity-80">
<div className="bg-slate-800 h-32 w-full rounded-lg animate-pulse"></div>
<div className="bg-slate-700 h-32 w-full rounded-lg mt-8"></div>
<div className="bg-slate-700 h-32 w-full rounded-lg -mt-8"></div>
<div className="bg-slate-800 h-32 w-full rounded-lg"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Presença estratégica. Atuação nacional.</h2>
<p className="text-slate-500">
                    Nossos escritórios representam mais do que localização. Eles simbolizam proximidade, disponibilidade e entendimento regional das realidades empresariais brasileiras.
                </p>
</div>
<div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 lg:p-12 relative overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<p className="text-base text-slate-600 mb-6">
                            Atuamos de forma integrada, conectando conhecimento local a uma visão ampla de mercado, garantindo decisões alinhadas ao contexto de cada empresa.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-medium text-slate-900">
<iconify-icon className="text-indigo-600" icon="solar:map-point-linear"></iconify-icon>
                                São Paulo (Sede)
                            </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-900">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon>
                                Rio de Janeiro
                            </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-900">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon>
                                Belo Horizonte
                            </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-900">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon>
                                Sul e Nordeste
                            </li>
</ul>
</div>
<div className="relative h-64 w-full bg-slate-200 rounded-xl flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 grid-bg opacity-50"></div>
<div className="relative z-10 text-slate-400 flex flex-col items-center">
<iconify-icon icon="solar:globe-linear" strokeWidth="1" width="80"></iconify-icon>
<span className="text-xs mt-2 font-mono uppercase">Brasil</span>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center">
<p className="text-sm font-medium text-slate-900">Onde há empresas evoluindo, há diálogo, estrutura e presença da One7 Grupo.</p>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-16">
<span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-2 block">Arquitetura e Posicionamento</span>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">
                    Uma marca-mãe. Um ecossistema integrado.
                </h2>
<p className="max-w-3xl text-slate-500">
                    A One7 Grupo é a marca que organiza, direciona e sustenta um ecossistema de soluções financeiras para empresas. Construímos uma atuação integrada, coerente e estratégica.
                </p>
</div>

<div className="flex flex-col items-center">

<div className="w-full max-w-sm rounded-xl border border-slate-300 bg-white p-6 shadow-sm z-10 relative">
<span className="text-xs text-slate-400 uppercase tracking-wider mb-1 block">Holding</span>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">ONE7 GRUPO</h3>
<p className="text-xs text-slate-500 mt-2">Capital, Governança e Direção Estratégica.</p>
</div>

<div className="h-12 w-px bg-slate-300"></div>
<div className="h-px w-full max-w-2xl bg-slate-300 hidden md:block"></div>
<div className="flex flex-col md:flex-row gap-8 md:gap-0 w-full max-w-2xl justify-between relative">

<div className="absolute left-0 top-0 h-8 w-px bg-slate-300 hidden md:block"></div>
<div className="absolute right-0 top-0 h-8 w-px bg-slate-300 hidden md:block"></div>

<div className="mt-0 md:mt-8 w-full md:w-[48%] rounded-xl border border-slate-200 bg-slate-50 p-6">
<h4 className="text-lg font-medium text-slate-900">One7 Mais Crédito</h4>
<p className="text-sm text-slate-500 mt-2">Focada em antecipação de recebíveis e crédito estruturado.</p>
</div>

<div className="mt-0 md:mt-8 w-full md:w-[48%] rounded-xl border border-slate-200 bg-slate-50 p-6">
<h4 className="text-lg font-medium text-slate-900">One7 Partner</h4>
<p className="text-sm text-slate-500 mt-2">Dedicada a parcerias financeiras com capital, governança e tecnologia.</p>
</div>
</div>
<div className="mt-12 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
                    Somos grupo porque acreditamos que estrutura se constrói em conjunto.
                </div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="flex flex-col h-full bg-white rounded-2xl p-8 border border-slate-200">
<div className="mb-4 text-slate-900">
<iconify-icon icon="solar:cup-star-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Reconhecimento como consequência</h3>
<p className="text-sm text-slate-500 flex-grow">
                        Prêmios e certificações refletem nosso compromisso com boas práticas, governança e excelência operacional. Não são nosso objetivo final, mas o resultado natural de uma atuação ética.
                    </p>
<div className="mt-6 pt-6 border-t border-slate-100">
<div className="grid grid-cols-3 gap-2 opacity-50">

<div className="h-8 bg-slate-100 rounded"></div>
<div className="h-8 bg-slate-100 rounded"></div>
<div className="h-8 bg-slate-100 rounded"></div>
</div>
</div>
</div>

<div className="flex flex-col h-full bg-white rounded-2xl p-8 border border-slate-200">
<div className="mb-4 text-slate-900">
<iconify-icon icon="solar:book-bookmark-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Programas e Iniciativas</h3>
<p className="text-sm text-slate-500 flex-grow">
                        Apoiamos e desenvolvemos iniciativas voltadas à educação financeira, evolução da gestão e fortalecimento da governança. Crescer empresas também é fortalecer o mercado.
                    </p>
<div className="mt-6">
<span className="text-xs font-medium text-indigo-600">Educação • Governança • Gestão</span>
</div>
</div>

<div className="flex flex-col h-full bg-white rounded-2xl p-8 border border-slate-200">
<div className="mb-4 text-slate-900">
<iconify-icon icon="solar:hand-shake-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Parcerias e Associações</h3>
<p className="text-sm text-slate-500 flex-grow">
                        Mantemos parcerias com instituições que compartilham nossos valores. Essas relações ampliam nosso repertório e contribuem para um ambiente empresarial mais sólido.
                    </p>
<div className="mt-6 pt-6 border-t border-slate-100 text-xs text-slate-400 font-medium">
                        Acreditamos que relações fortes constroem mercados mais maduros.
                    </div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-white py-24 border-t border-slate-800">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-4xl font-medium tracking-tight mb-6">
                        Estrutura hoje.<br/>
<span className="text-slate-500">Crescimento amanhã.</span>
</h2>
<p className="text-slate-400 max-w-md leading-relaxed">
                        Na One7 Grupo, ajudamos empresas a tomar decisões financeiras mais inteligentes, com visão de longo prazo e responsabilidade. Somos um ecossistema que acredita na evolução contínua.
                    </p>
<div className="mt-12 pt-12 border-t border-slate-800 flex flex-col sm:flex-row gap-8 justify-between items-start sm:items-center">
<div>
<span className="text-lg font-semibold tracking-tight block">ONE7 GRUPO</span>
<span className="text-xs text-slate-500 block mt-1">Crescimento exige estrutura.</span>
</div>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="24"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="24"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-8 lg:pl-20">
<div>
<h4 className="text-sm font-semibold text-white mb-4">Nossa Empresa</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Quem Somos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cultura</a></li>
<li><a className="hover:text-white transition-colors" href="#">Governança</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Ecossistema</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">One7 Mais Crédito</a></li>
<li><a className="hover:text-white transition-colors" href="#">One7 Partner</a></li>
<li><a className="hover:text-white transition-colors" href="#">Parceiros</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-20 border-t border-slate-900 pt-8 flex justify-between items-center text-xs text-slate-600">
<p>© 2024 One7 Grupo. Todos os direitos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-slate-400 transition-colors" href="#">Privacidade</a>
<a className="hover:text-slate-400 transition-colors" href="#">Termos</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
