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
// Customizing brand colors to match the Cyan/Lime gradient of Desponta Brasil
brand: {
50: '#f7fee7',
100: '#ecfccb',
200: '#d9f99d',
300: '#bef264',
400: '#a3e635',
500: '#84cc16', // Lime base
600: '#65a30d',
700: '#4d7c0f',
800: '#3f6212',
900: '#365314',
},
accent: {
400: '#22d3ee', // Cyan
500: '#06b6d4',
}
}
}
}
}



        // Initialize Lucide Icons
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
      

<div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 md:px-8 flex justify-between items-center sticky top-0 z-50">
<div className="flex items-center gap-4">
<span className="hidden md:inline">Acessibilidade:</span>
<button className="hover:text-white transition-colors flex items-center gap-1">
<i className="w-3 h-3" data-lucide="monitor"></i> Alto Contraste
            </button>
<button className="hover:text-white transition-colors flex items-center gap-1">
<i className="w-3 h-3" data-lucide="type"></i> Aumentar Fonte
            </button>
<button className="hover:text-white transition-colors flex items-center gap-1">
<i className="w-3 h-3" data-lucide="ear"></i> Audiodescrição
            </button>
</div>
<div className="flex items-center gap-2">
<button className="bg-brand-600 hover:bg-brand-500 text-white px-2 py-0.5 rounded flex items-center gap-1 font-medium transition-colors">
<i className="w-3 h-3" data-lucide="languages"></i> VLibras
            </button>
</div>
</div>

<header className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-9 z-40">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">

<div className="relative w-10 h-10 flex-shrink-0">
<span className="absolute left-0 text-4xl font-bold tracking-tighter text-cyan-400 z-10 mix-blend-multiply" style={{fontFamily: 'Arial, sans-serif'}}>d</span>
<span className="absolute left-3 text-4xl font-bold tracking-tighter text-brand-500 z-0" style={{fontFamily: 'Arial, sans-serif'}}>b</span>
</div>
<div className="flex flex-col justify-center -space-y-0.5 mt-1">
<div className="flex items-baseline leading-none">
<span className="text-2xl font-light text-slate-400 tracking-tight">desponta</span>
<span className="text-2xl font-bold text-slate-700 tracking-tight">BRASIL</span>
</div>
<span className="text-[0.55rem] font-medium tracking-[0.2em] text-slate-400 uppercase">Indutor de projetos de impacto positivo</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#quem-somos">Quem Somos</a>
<a className="hover:text-slate-900 transition-colors" href="#atuacao">Atuação</a>
<a className="hover:text-slate-900 transition-colors" href="#projetos">Projetos</a>
<a className="hover:text-slate-900 transition-colors" href="#transparencia">Transparência</a>
<a className="hover:text-slate-900 transition-colors" href="#blog">Notícias</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden md:flex text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#voluntario">
                    Seja Voluntário
                </a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-full shadow-sm hover:shadow transition-all flex items-center gap-2" href="#doar">
<span>Apoie Agora</span>
<i className="w-3.5 h-3.5 text-brand-400" data-lucide="heart"></i>
</a>
</div>
</div>
</header>
<main>

<section className="relative pt-24 pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-50 via-white to-white opacity-70"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                    Indutor de Projetos de Impacto Positivo
                </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Conectando iniciativas para um <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-brand-500">Brasil Sustentável.</span>
</h1>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                    O <strong>Instituto Desponta Brasil</strong> articula educação, inovação social e parcerias estratégicas para transformar realidades e potencializar o impacto positivo nos territórios.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-medium rounded-lg shadow-lg shadow-brand-500/20 hover:shadow-xl transition-all text-sm flex items-center justify-center gap-2" href="#doar">
                        Faça parte da mudança
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium rounded-lg transition-all text-sm flex items-center justify-center gap-2" href="#parceiro">
                        Seja um Parceiro
                    </a>
</div>
</div>

<div className="max-w-6xl mx-auto mt-24">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-slate-100 py-12">
<div className="text-center">
<div className="text-3xl font-semibold tracking-tighter text-slate-900 mb-1">+10</div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium">Anos de Atuação</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold tracking-tighter text-slate-900 mb-1">50k+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium">Vidas Impactadas</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold tracking-tighter text-slate-900 mb-1">15</div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium">Territórios Atendidos</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold tracking-tighter text-slate-900 mb-1">80t</div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium">Resíduos Geridos</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="quem-somos">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Identidade &amp; Propósito</h2>
<div className="prose prose-slate prose-sm text-slate-500">
<p className="mb-4">
                                O <strong>Instituto Desponta Brasil</strong> nasceu da convicção de que o desenvolvimento real só acontece quando há sinergia entre o setor produtivo, comunidades e preservação ambiental.
                            </p>
<p className="mb-6">
<strong>Missão:</strong> Induzir e acelerar projetos que promovam a dignidade humana e a regeneração ambiental.<br/>
<strong>Visão:</strong> Ser o principal hub de tecnologias sociais e economia circular da região até 2030.<br/>
<strong>Valores:</strong> Colaboração, Transparência, Inovação e Sustentabilidade.
                            </p>
<div className="mt-8 pt-8 border-t border-slate-100">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Governança</h3>
<div className="flex items-center gap-4">
<div className="flex -space-x-3 overflow-hidden">
<div className="inline-block h-8 w-8 rounded-full bg-slate-200 ring-2 ring-white flex items-center justify-center text-xs font-medium text-slate-600">JD</div>
<div className="inline-block h-8 w-8 rounded-full bg-slate-300 ring-2 ring-white flex items-center justify-center text-xs font-medium text-slate-600">MA</div>
<div className="inline-block h-8 w-8 rounded-full bg-slate-400 ring-2 ring-white flex items-center justify-center text-xs font-medium text-slate-600">CR</div>
</div>
<span className="text-xs text-slate-500">Conselho Consultivo e Diretoria Executiva.</span>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-6 uppercase tracking-wider">Pilares Estratégicos</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-sm transition-all">
<i className="w-5 h-5 text-brand-600 mb-3" data-lucide="lightbulb"></i>
<h4 className="font-medium text-slate-900 text-sm mb-1">Inovação Social</h4>
<p className="text-xs text-slate-500">Novas abordagens para desafios complexos.</p>
</div>
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-sm transition-all">
<i className="w-5 h-5 text-cyan-500 mb-3" data-lucide="book-open"></i>
<h4 className="font-medium text-slate-900 text-sm mb-1">Educação</h4>
<p className="text-xs text-slate-500">Conhecimento como ferramenta de mudança.</p>
</div>
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-sm transition-all">
<i className="w-5 h-5 text-brand-600 mb-3" data-lucide="recycle"></i>
<h4 className="font-medium text-slate-900 text-sm mb-1">Economia Circular</h4>
<p className="text-xs text-slate-500">Resíduos transformados em novos ciclos.</p>
</div>
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-sm transition-all">
<i className="w-5 h-5 text-cyan-500 mb-3" data-lucide="users"></i>
<h4 className="font-medium text-slate-900 text-sm mb-1">Inclusão Produtiva</h4>
<p className="text-xs text-slate-500">Geração de renda e autonomia.</p>
</div>
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-sm transition-all">
<i className="w-5 h-5 text-brand-600 mb-3" data-lucide="globe"></i>
<h4 className="font-medium text-slate-900 text-sm mb-1">Desenvolvimento Local</h4>
<p className="text-xs text-slate-500">Fortalecimento de comunidades.</p>
</div>
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-sm transition-all">
<i className="w-5 h-5 text-cyan-500 mb-3" data-lucide="graduation-cap"></i>
<h4 className="font-medium text-slate-900 text-sm mb-1">Capacitação</h4>
<p className="text-xs text-slate-500">Formação técnica e cidadã.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-t border-slate-200" id="atuacao">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Eixos de Atuação</h2>
<p className="text-slate-500 text-sm">Atuamos de forma transversal para garantir impacto sistêmico em quatro frentes principais.</p>
</div>
<div className="grid md:grid-cols-4 gap-6">
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="heart-handshake"></i>
</div>
<h3 className="font-medium text-slate-900 mb-2">Social</h3>
<p className="text-xs text-slate-500 leading-relaxed">Inclusão produtiva e enfrentamento direto às desigualdades em territórios vulneráveis.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
<div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="leaf"></i>
</div>
<h3 className="font-medium text-slate-900 mb-2">Ambiental</h3>
<p className="text-xs text-slate-500 leading-relaxed">Gestão eficiente de resíduos, logística reversa e fomento à economia circular.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
<div className="w-10 h-10 bg-cyan-50 text-cyan-600 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<h3 className="font-medium text-slate-900 mb-2">Inovação</h3>
<p className="text-xs text-slate-500 leading-relaxed">Uso de tecnologias digitais e metodologias ágeis para escalar o impacto.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
<div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
<h3 className="font-medium text-slate-900 mb-2">Institucional</h3>
<p className="text-xs text-slate-500 leading-relaxed">Governança sólida, compliance e construção de credibilidade junto a parceiros.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="projetos">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Projetos em Destaque</h2>
<p className="text-slate-500 text-sm">Conheça as iniciativas que o Instituto Desponta Brasil está liderando.</p>
</div>
<a className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1" href="#">
                        Ver portfólio completo <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden relative mb-4">
<img alt="Central de Triagem" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-slate-900">
                                Em Execução
                            </div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">Central de Triagem &amp; Logística</h3>
<p className="text-sm text-slate-500 mb-3">Modernização de centros de triagem para cooperativas, aumentando a renda e a eficiência.</p>
<span className="text-xs font-medium text-brand-600 flex items-center gap-1">Saiba mais <i className="w-3 h-3" data-lucide="chevron-right"></i></span>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden relative mb-4">
<img alt="Programa Educacional" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-slate-900">
                                Em Execução
                            </div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">Programa Desponta Jovem</h3>
<p className="text-sm text-slate-500 mb-3">Capacitação de jovens em tecnologias verdes e empreendedorismo social.</p>
<span className="text-xs font-medium text-brand-600 flex items-center gap-1">Saiba mais <i className="w-3 h-3" data-lucide="chevron-right"></i></span>
</div>

<div className="md:col-span-2 grid md:grid-cols-2 gap-6 mt-4">
<div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-emerald-600" data-lucide="trees"></i>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm">Projeto SQS Sustentável</h4>
<p className="text-xs text-slate-500 mt-1">Revitalização urbana e comunitária com foco em compostagem local.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-cyan-600" data-lucide="sprout"></i>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm">Verdejando Cidades</h4>
<p className="text-xs text-slate-500 mt-1">Arborização e recuperação de nascentes em áreas urbanas.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16">
<div>
<h2 className="text-2xl font-semibold tracking-tight mb-4">Tecnologias Sociais</h2>
<p className="text-slate-400 text-sm mb-8">
                            Desenvolvemos metodologias replicáveis para ampliar o impacto em outros territórios. Disponibilizamos estudos de caso e relatórios para consulta.
                        </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand-500" data-lucide="check-circle-2"></i>
<span className="text-sm">Diagnóstico Participativo de Resíduos</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand-500" data-lucide="check-circle-2"></i>
<span className="text-sm">Mobilização Comunitária para Coleta Seletiva</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand-500" data-lucide="check-circle-2"></i>
<span className="text-sm">Modelagem de Negócios de Impacto</span>
</li>
</ul>
<div className="mt-8">
<button className="bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="download"></i>
                                Baixar Materiais de Replicação
                            </button>
</div>
</div>
<div className="relative">

<div className="absolute inset-0 bg-gradient-to-tr from-brand-900/50 to-transparent rounded-2xl"></div>
<div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 h-full flex flex-col justify-center">
<div className="flex items-start gap-4 mb-6">
<i className="w-8 h-8 text-cyan-400" data-lucide="file-text"></i>
<div>
<h3 className="font-medium text-white mb-1">Pesquisas e Estudos</h3>
<p className="text-xs text-slate-400">Acesse nossa base de conhecimento com dados sobre a economia circular no Brasil.</p>
</div>
</div>
<div className="flex items-start gap-4">
<i className="w-8 h-8 text-brand-400" data-lucide="pie-chart"></i>
<div>
<h3 className="font-medium text-white mb-1">Resultados Comprovados</h3>
<p className="text-xs text-slate-400">Indicadores auditados que demonstram a eficiência das nossas intervenções.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="transparencia">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Transparência</h2>
<p className="text-sm text-slate-500 mt-2">Prestação de contas e documentos institucionais do Instituto Desponta Brasil.</p>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<a className="group p-4 rounded-xl border border-slate-200 hover:border-brand-200 hover:bg-slate-50 transition-all flex items-center justify-between" href="#">
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-100 rounded-lg group-hover:bg-brand-50 transition-colors">
<i className="w-5 h-5 text-slate-600 group-hover:text-brand-600" data-lucide="file-badge"></i>
</div>
<div className="text-left">
<div className="text-sm font-medium text-slate-900">Estatuto Social</div>
<div className="text-xs text-slate-500">Versão Atualizada</div>
</div>
</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-brand-600" data-lucide="arrow-down-to-line"></i>
</a>
<a className="group p-4 rounded-xl border border-slate-200 hover:border-brand-200 hover:bg-slate-50 transition-all flex items-center justify-between" href="#">
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-100 rounded-lg group-hover:bg-brand-50 transition-colors">
<i className="w-5 h-5 text-slate-600 group-hover:text-brand-600" data-lucide="award"></i>
</div>
<div className="text-left">
<div className="text-sm font-medium text-slate-900">Certificações e Títulos</div>
<div className="text-xs text-slate-500">OSCIP e outros</div>
</div>
</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-brand-600" data-lucide="arrow-down-to-line"></i>
</a>
<a className="group p-4 rounded-xl border border-slate-200 hover:border-brand-200 hover:bg-slate-50 transition-all flex items-center justify-between" href="#">
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-100 rounded-lg group-hover:bg-brand-50 transition-colors">
<i className="w-5 h-5 text-slate-600 group-hover:text-brand-600" data-lucide="bar-chart-3"></i>
</div>
<div className="text-left">
<div className="text-sm font-medium text-slate-900">Relatório de Atividades 2023</div>
<div className="text-xs text-slate-500">Resultados e Finanças</div>
</div>
</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-brand-600" data-lucide="arrow-down-to-line"></i>
</a>
<a className="group p-4 rounded-xl border border-slate-200 hover:border-brand-200 hover:bg-slate-50 transition-all flex items-center justify-between" href="#">
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-100 rounded-lg group-hover:bg-brand-50 transition-colors">
<i className="w-5 h-5 text-slate-600 group-hover:text-brand-600" data-lucide="scale"></i>
</div>
<div className="text-left">
<div className="text-sm font-medium text-slate-900">Balanços Contábeis</div>
<div className="text-xs text-slate-500">Demonstrativos Financeiros</div>
</div>
</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-brand-600" data-lucide="arrow-down-to-line"></i>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" id="blog">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">Últimas do Instituto</h2>
<div className="grid md:grid-cols-3 gap-8">
<article className="flex flex-col group">
<div className="aspect-[16/9] bg-slate-200 rounded-xl overflow-hidden mb-4">
<img alt="Evento" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="text-xs font-medium text-brand-600 mb-2">Eventos</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:underline decoration-slate-300 underline-offset-4">1º Fórum Desponta Brasil de Sustentabilidade</h3>
<p className="text-sm text-slate-500 line-clamp-2">Reunimos especialistas e comunidade para debater o futuro dos resíduos sólidos na região.</p>
</article>
<article className="flex flex-col group">
<div className="aspect-[16/9] bg-slate-200 rounded-xl overflow-hidden mb-4">
<img alt="Reunião" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="text-xs font-medium text-brand-600 mb-2">Institucional</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:underline decoration-slate-300 underline-offset-4">Nova parceria firmada com Secretaria de Meio Ambiente</h3>
<p className="text-sm text-slate-500 line-clamp-2">Acordo visa ampliar o alcance dos projetos para novas áreas administrativas.</p>
</article>
<article className="flex flex-col group">
<div className="aspect-[16/9] bg-slate-200 rounded-xl overflow-hidden mb-4">
<img alt="Voluntariado" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="text-xs font-medium text-brand-600 mb-2">Mídia</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:underline decoration-slate-300 underline-offset-4">Impacto do Instituto Desponta Brasil na mídia</h3>
<p className="text-sm text-slate-500 line-clamp-2">Confira a reportagem completa sobre as tecnologias sociais desenvolvidas por nós.</p>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="apoie">
<div className="absolute inset-0 bg-slate-900 -z-10"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d4,#84cc16)] opacity-90 -z-10"></div>
<div className="max-w-5xl mx-auto text-center text-white">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Faça parte desta transformação</h2>
<p className="text-brand-50 text-lg mb-12 max-w-2xl mx-auto">Sua contribuição impulsiona projetos que unem cuidado ambiental e justiça social.</p>
<div className="grid md:grid-cols-3 gap-6 text-left">

<div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl flex flex-col items-start" id="doar">
<div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="heart"></i>
</div>
<h3 className="text-xl font-semibold mb-2">Faça uma Doação</h3>
<p className="text-slate-500 text-sm mb-6 flex-grow">Doe via Pix, Cartão ou Boleto. Recursos revertidos integralmente para os projetos.</p>
<button className="w-full py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors text-sm">
                            Doar Agora
                        </button>
</div>

<div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-8 rounded-2xl flex flex-col items-start" id="voluntario">
<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="hand"></i>
</div>
<h3 className="text-xl font-semibold mb-2">Seja Voluntário</h3>
<p className="text-brand-100 text-sm mb-6 flex-grow">Doe seu tempo e talento. Temos vagas para atuação em campo e remota.</p>
<button className="w-full py-3 bg-white text-brand-700 rounded-lg font-medium hover:bg-brand-50 transition-colors text-sm">
                            Cadastrar-se
                        </button>
</div>

<div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-8 rounded-2xl flex flex-col items-start" id="parceiro">
<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="briefcase"></i>
</div>
<h3 className="text-xl font-semibold mb-2">Empresas Parceiras</h3>
<p className="text-brand-100 text-sm mb-6 flex-grow">Conecte sua marca a propósitos reais de ESG e responsabilidade social.</p>
<button className="w-full py-3 bg-transparent border border-white/40 hover:bg-white/10 text-white rounded-lg font-medium transition-colors text-sm">
                            Fale Conosco
                        </button>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-24 pb-12 px-6 border-t border-slate-200">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6 group cursor-default">

<div className="relative w-6 h-6 flex-shrink-0">
<span className="absolute left-0 text-xl font-bold tracking-tighter text-cyan-500 z-10 mix-blend-multiply" style={{fontFamily: 'Arial, sans-serif'}}>d</span>
<span className="absolute left-1.5 text-xl font-bold tracking-tighter text-brand-500 z-0" style={{fontFamily: 'Arial, sans-serif'}}>b</span>
</div>
<div className="flex items-baseline leading-none">
<span className="font-light text-slate-400 tracking-tight">desponta</span>
<span className="font-bold text-slate-700 tracking-tight">BRASIL</span>
</div>
</div>
<p className="text-sm text-slate-500 mb-6">
                            Setor Comercial Sul, Quadra 04<br/>
                            Edifício Impacto, Sala 302<br/>
                            Brasília - DF, CEP 70300-000
                        </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Institucional</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#quem-somos">Quem Somos</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#transparencia">Governança</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#transparencia">Prestação de Contas</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Trabalhe Conosco</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Participe</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#doar">Quero Apoiar</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#voluntario">Ser Voluntário</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Editais Abertos</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Dúvidas Frequentes</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Newsletter</h4>
<p className="text-xs text-slate-500 mb-4">Receba atualizações mensais sobre nossos projetos e impacto.</p>
<form className="flex gap-2">
<input className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" placeholder="Seu e-mail" type="email"/>
<button className="bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 Instituto Desponta Brasil. Todos os direitos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Política de Privacidade</a>
<a className="hover:text-slate-600" href="#">Termos de Uso</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
