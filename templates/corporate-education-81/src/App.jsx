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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="FBUNI Online" className="h-10 w-auto object-contain" src="https://i.imgur.com/k9b6tq5.png"/>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-600 hover:text-green-600 transition-colors" href="#solucoes">Soluções</a>
<a className="text-sm font-medium text-zinc-600 hover:text-green-600 transition-colors" href="#metodologia">Metodologia</a>
<a className="text-sm font-medium text-zinc-600 hover:text-green-600 transition-colors" href="#cases">Estudos de Caso</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-900 hover:text-green-600 transition-colors" href="#login">Área do Cliente</a>
<a className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-2" href="#contato">
                    Fale com Consultor
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-green-700 tracking-wide uppercase">Líder em Educação Corporativa</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-zinc-900 mb-8 max-w-5xl mx-auto leading-[1.1]">
                Treinamento sob medida para o <span className="gradient-text">futuro da sua empresa.</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Desenvolvemos a estratégia, construímos a plataforma e gerimos todo o ecossistema de aprendizagem dos seus colaboradores.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-medium rounded-full transition-all shadow-lg shadow-green-600/20 text-lg flex items-center justify-center gap-2" href="#contato">
                    Solicitar Diagnóstico
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-700 font-medium rounded-full transition-all text-lg flex items-center justify-center gap-2" href="#cases">
                    Ver Cases de Sucesso
                </a>
</div>

<div className="relative max-w-5xl mx-auto mt-12">
<div className="absolute -inset-1 bg-gradient-to-r from-green-300 to-emerald-400 rounded-2xl blur opacity-20"></div>
<div className="relative bg-zinc-50 border border-zinc-200 rounded-xl shadow-2xl overflow-hidden aspect-[16/9] flex items-center justify-center group">
<div className="absolute inset-0 bg-grid-zinc-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>

<div className="w-3/4 h-3/4 bg-white shadow-xl rounded-lg border border-zinc-100 p-6 flex flex-col gap-4 transition-transform duration-700 group-hover:scale-[1.02]">
<div className="flex items-center justify-between border-b border-zinc-100 pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-green-100 flex items-center justify-center text-green-600"><i className="w-5 h-5" data-lucide="bar-chart-2"></i></div>
<div className="h-2 w-32 bg-zinc-100 rounded-full"></div>
</div>
<div className="h-8 w-8 rounded-full bg-zinc-100"></div>
</div>
<div className="grid grid-cols-3 gap-4 h-full">
<div className="col-span-1 bg-zinc-50 rounded border border-zinc-100 p-4 space-y-3">
<div className="h-2 w-16 bg-zinc-200 rounded-full"></div>
<div className="h-16 w-full bg-white rounded border border-zinc-100"></div>
<div className="h-16 w-full bg-white rounded border border-zinc-100"></div>
</div>
<div className="col-span-2 bg-zinc-50 rounded border border-zinc-100 p-4 space-y-3 relative overflow-hidden">
<div className="h-2 w-24 bg-zinc-200 rounded-full mb-6"></div>
<div className="grid grid-cols-2 gap-3">
<div className="h-24 bg-white rounded border border-zinc-100 flex items-center justify-center"><i className="w-8 h-8 text-green-500 opacity-50" data-lucide="play-circle"></i></div>
<div className="h-24 bg-white rounded border border-zinc-100 flex items-center justify-center"><i className="w-8 h-8 text-zinc-300" data-lucide="file-text"></i></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="solucoes">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">O ecossistema completo.</h2>
<p className="text-xl text-zinc-500 max-w-2xl">Não entregamos apenas cursos. Entregamos uma infraestrutura de conhecimento alinhada aos seus KPIs de negócio.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 bg-white border border-zinc-200 rounded-2xl hover:shadow-xl hover:shadow-zinc-200/50 hover:border-green-200 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="pen-tool"></i>
</div>
<h3 className="text-2xl font-semibold text-zinc-900 mb-3 tracking-tight">Conteúdo Customizado</h3>
<p className="text-lg text-zinc-500 leading-relaxed">
                        Produzimos treinamentos específicos para a realidade da sua empresa, desde onboarding até capacitação técnica avançada, usando formatos engajadores.
                    </p>
</div>

<div className="group p-8 bg-white border border-zinc-200 rounded-2xl hover:shadow-xl hover:shadow-zinc-200/50 hover:border-green-200 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="layout"></i>
</div>
<h3 className="text-2xl font-semibold text-zinc-900 mb-3 tracking-tight">Plataforma Exclusiva</h3>
<p className="text-lg text-zinc-500 leading-relaxed">
                        Desenvolvemos e implementamos seu LMS (Learning Management System) com a identidade da sua marca, white-label e focado na experiência do usuário.
                    </p>
</div>

<div className="group p-8 bg-white border border-zinc-200 rounded-2xl hover:shadow-xl hover:shadow-zinc-200/50 hover:border-green-200 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="pie-chart"></i>
</div>
<h3 className="text-2xl font-semibold text-zinc-900 mb-3 tracking-tight">Gestão de Performance</h3>
<p className="text-lg text-zinc-500 leading-relaxed">
                        Administramos a jornada de aprendizado. Relatórios detalhados de engajamento, provas e impacto direto na produtividade dos times.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-100" id="cases">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="text-green-600 font-medium tracking-wide uppercase text-sm mb-2 block">Nossos Clientes</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">Estudos de Caso</h2>
</div>
<a className="text-zinc-600 hover:text-green-600 font-medium flex items-center gap-2 group" href="#">
                    Ver todos os clientes <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<article className="flex flex-col h-full border border-zinc-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-300 group">
<div className="h-64 bg-zinc-100 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<i className="w-16 h-16 text-zinc-300" data-lucide="building-2"></i>
</div>
<div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full border border-zinc-200">
<span className="text-sm font-medium text-zinc-800">Setor Financeiro</span>
</div>
</div>
<div className="p-10 flex flex-col flex-1 bg-white">
<h3 className="text-2xl font-semibold text-zinc-900 mb-4 tracking-tight">TechFin Solutions</h3>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                            Criação de trilha de compliance e segurança de dados para 2.000 funcionários, reduzindo incidentes de segurança em 75% no primeiro trimestre.
                        </p>
<div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-3xl font-semibold text-green-600 tracking-tight">98%</span>
<span className="text-sm text-zinc-500">Taxa de Conclusão</span>
</div>
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</article>

<article className="flex flex-col h-full border border-zinc-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-300 group">
<div className="h-64 bg-zinc-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<i className="w-16 h-16 text-zinc-300" data-lucide="shopping-bag"></i>
</div>
<div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full border border-zinc-200">
<span className="text-sm font-medium text-zinc-800">Varejo &amp; Logística</span>
</div>
</div>
<div className="p-10 flex flex-col flex-1 bg-white">
<h3 className="text-2xl font-semibold text-zinc-900 mb-4 tracking-tight">Grupo Varejo Nacional</h3>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                            Desenvolvimento da "Universidade do Vendedor". Plataforma mobile-first para treinamento de vendas em tempo real para 500 lojas.
                        </p>
<div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-3xl font-semibold text-green-600 tracking-tight">+32%</span>
<span className="text-sm text-zinc-500">Aumento em Vendas</span>
</div>
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-200/50">
<div className="px-4">
<div className="text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight mb-2">+50</div>
<p className="text-zinc-500">Empresas Atendidas</p>
</div>
<div className="px-4">
<div className="text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight mb-2">15k</div>
<p className="text-zinc-500">Colaboradores Treinados</p>
</div>
<div className="px-4">
<div className="text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight mb-2">300+</div>
<p className="text-zinc-500">Cursos Desenvolvidos</p>
</div>
<div className="px-4">
<div className="text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight mb-2">4.9</div>
<p className="text-zinc-500">Nota Média de Satisfação</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 relative overflow-hidden" id="contato">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Pronto para transformar sua equipe?</h2>
<p className="text-xl text-zinc-400 mb-10 font-light leading-relaxed">
                Agende uma demonstração gratuita e descubra como a FBUNI Online pode estruturar a educação corporativa do seu negócio.
            </p>
<form className="max-w-md mx-auto space-y-4">
<div className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-zinc-800/50 border border-zinc-700 text-white px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-zinc-500" placeholder="Seu e-mail corporativo" type="email"/>
<button className="bg-green-600 hover:bg-green-500 text-white font-medium px-8 py-4 rounded-xl transition-all shadow-lg shadow-green-900/20 whitespace-nowrap" type="button">
                        Falar com Especialista
                    </button>
</div>
<p className="text-sm text-zinc-500">Entraremos em contato em até 24h úteis.</p>
</form>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<img alt="FBUNI Online" className="h-8 w-auto mb-6 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" src="https://i.imgur.com/k9b6tq5.png"/>
<p className="text-zinc-500 text-lg leading-relaxed">
                        Educação customizada que gera resultados reais para o seu negócio.
                    </p>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-6">Soluções</h4>
<ul className="space-y-4">
<li><a className="text-zinc-500 hover:text-green-600 transition-colors" href="#">Universidade Corporativa</a></li>
<li><a className="text-zinc-500 hover:text-green-600 transition-colors" href="#">Treinamento de Liderança</a></li>
<li><a className="text-zinc-500 hover:text-green-600 transition-colors" href="#">Onboarding Digital</a></li>
<li><a className="text-zinc-500 hover:text-green-600 transition-colors" href="#">LMS Customizado</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-6">Empresa</h4>
<ul className="space-y-4">
<li><a className="text-zinc-500 hover:text-green-600 transition-colors" href="#">Sobre Nós</a></li>
<li><a className="text-zinc-500 hover:text-green-600 transition-colors" href="#">Carreiras</a></li>
<li><a className="text-zinc-500 hover:text-green-600 transition-colors" href="#">Blog</a></li>
<li><a className="text-zinc-500 hover:text-green-600 transition-colors" href="#">Contato</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-6">Social</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-green-50 hover:text-green-600 transition-all" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-green-50 hover:text-green-600 transition-all" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
<p>© 2024 FBUNI Online. Todos os direitos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-600" href="#">Privacidade</a>
<a className="hover:text-zinc-600" href="#">Termos</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
