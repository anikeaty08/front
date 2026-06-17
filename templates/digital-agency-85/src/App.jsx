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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black"></div>
<div className="stars absolute inset-0 w-full h-full"></div>
</div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="/">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white shadow-[0_0_15px_rgba(239,68,68,0.4)] group-hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] transition-all duration-300">
<i className="w-4 h-4 fill-current" data-lucide="rocket"></i>
</div>
<span className="font-semibold text-lg tracking-tight">BBM Space</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-white/60 hover:text-white transition-colors duration-200" href="#servicos">Missões</a>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-200" href="#portfolio">Explorações</a>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-200" href="#planos">Planetas</a>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-200" href="#sobre">A Base</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-xs font-medium text-white/40 hover:text-white transition-colors">
<span>PT</span>
<span className="w-[1px] h-3 bg-white/20"></span>
<span>EN</span>
</button>
<a className="hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-white px-4 text-xs font-medium text-black transition-transform active:scale-95 hover:bg-white/90" href="#contato">
                    Iniciar Projeto
                </a>
<button className="md:hidden text-white/70 hover:text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</header>
<main className="relative z-10 pt-32 pb-16">

<section className="max-w-7xl mx-auto px-6 mb-32 relative">
<div className="flex flex-col items-center text-center">

<div className="fade-in-up inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
<span className="flex h-2 w-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
<span className="tracking-wide">Sistemas Operantes v2.0</span>
</div>

<h1 className="fade-in-up delay-100 text-5xl sm:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-6 max-w-4xl mx-auto leading-[1.1]">
                    Explorando o <br/>Universo Digital
                </h1>

<p className="fade-in-up delay-200 text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    Transformamos ideias em ativos digitais de alta performance. Web design, branding e automação com IA para empresas que buscam o próximo nível.
                </p>

<div className="fade-in-up delay-300 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-red-600 px-8 font-medium text-white transition-all duration-300 hover:bg-red-500 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(239,68,68,0.5)]" href="#contato">
<span className="mr-2">Iniciar Missão</span>
<i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="chevron-right"></i>
</a>
<a className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 font-medium text-white transition-all hover:bg-white/10 hover:border-white/20" href="#servicos">
                        Ver Serviços
                    </a>
</div>

<div className="mt-20 relative w-full max-w-4xl h-[400px] border border-white/5 rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden fade-in-up delay-300">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/20 rounded-full blur-[100px]"></div>

<div className="absolute top-10 left-10 right-10 bottom-0 border-t border-l border-r border-white/10 rounded-t-xl bg-black/80 backdrop-blur-xl p-6">
<div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="h-32 rounded-lg bg-white/5 border border-white/5 animate-pulse"></div>
<div className="h-32 rounded-lg bg-white/5 border border-white/5"></div>
<div className="h-32 rounded-lg bg-white/5 border border-white/5"></div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5" id="servicos">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<h2 className="text-xs font-medium text-red-500 uppercase tracking-widest mb-2">Protocolos de Voo</h2>
<h3 className="text-3xl font-semibold tracking-tight">Nossas Missões</h3>
</div>
<p className="text-white/50 text-sm max-w-md mt-4 md:mt-0">Soluções completas para cada estágio da sua jornada digital, do lançamento à órbita estável.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 hover:border-red-500/30 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<i className="w-8 h-8 text-white mb-4 stroke-[1.5]" data-lucide="code-2"></i>
<h4 className="text-lg font-medium mb-2">Desenvolvimento</h4>
<p className="text-sm text-white/50 mb-4 leading-relaxed">Sites institucionais, e-commerce e sistemas web de alta performance.</p>
<ul className="space-y-2">
<li className="flex items-center text-xs text-white/40"><i className="w-3 h-3 mr-2 text-red-500" data-lucide="check"></i> Next.js &amp; React</li>
<li className="flex items-center text-xs text-white/40"><i className="w-3 h-3 mr-2 text-red-500" data-lucide="check"></i> Apps Mobile</li>
</ul>
</div>

<div className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 hover:border-red-500/30 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<i className="w-8 h-8 text-white mb-4 stroke-[1.5]" data-lucide="palette"></i>
<h4 className="text-lg font-medium mb-2">Branding</h4>
<p className="text-sm text-white/50 mb-4 leading-relaxed">Identidade visual estratégica que conecta sua marca ao público.</p>
<ul className="space-y-2">
<li className="flex items-center text-xs text-white/40"><i className="w-3 h-3 mr-2 text-red-500" data-lucide="check"></i> Logos</li>
<li className="flex items-center text-xs text-white/40"><i className="w-3 h-3 mr-2 text-red-500" data-lucide="check"></i> UI/UX Design</li>
</ul>
</div>

<div className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 hover:border-red-500/30 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<i className="w-8 h-8 text-white mb-4 stroke-[1.5]" data-lucide="bar-chart-3"></i>
<h4 className="text-lg font-medium mb-2">Marketing</h4>
<p className="text-sm text-white/50 mb-4 leading-relaxed">Gestão de tráfego, SEO e estratégias de crescimento.</p>
<ul className="space-y-2">
<li className="flex items-center text-xs text-white/40"><i className="w-3 h-3 mr-2 text-red-500" data-lucide="check"></i> Google Ads</li>
<li className="flex items-center text-xs text-white/40"><i className="w-3 h-3 mr-2 text-red-500" data-lucide="check"></i> Social Media</li>
</ul>
</div>

<div className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 hover:border-red-500/30 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<i className="w-8 h-8 text-white mb-4 stroke-[1.5]" data-lucide="bot"></i>
<h4 className="text-lg font-medium mb-2">Automação &amp; IA</h4>
<p className="text-sm text-white/50 mb-4 leading-relaxed">Agentes de IA e automação de processos para escalar sua operação.</p>
<ul className="space-y-2">
<li className="flex items-center text-xs text-white/40"><i className="w-3 h-3 mr-2 text-red-500" data-lucide="check"></i> Chatbots</li>
<li className="flex items-center text-xs text-white/40"><i className="w-3 h-3 mr-2 text-red-500" data-lucide="check"></i> CRM Integrations</li>
</ul>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-3xl font-semibold tracking-tight text-white mb-1">24+</div>
<div className="text-xs text-white/40 uppercase tracking-widest">Projetos Lançados</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold tracking-tight text-white mb-1">4.9</div>
<div className="text-xs text-white/40 uppercase tracking-widest">Satisfação</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold tracking-tight text-white mb-1">5</div>
<div className="text-xs text-white/40 uppercase tracking-widest">Anos de Órbita</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold tracking-tight text-white mb-1">100%</div>
<div className="text-xs text-white/40 uppercase tracking-widest">Online</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32 relative overflow-hidden" id="sobre">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10">
<div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-6">
<span>Desde 2019</span>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-6 leading-tight">
                        Construindo o futuro <br/>
<span className="text-white/40">um pixel de cada vez.</span>
</h2>
<p className="text-white/60 leading-relaxed mb-6 font-light">
                        O BBM Space não é apenas uma agência; é um laboratório de inovação. Nossa missão é equipar empresas brasileiras e internacionais com a tecnologia necessária para dominar seus mercados.
                    </p>
<p className="text-white/60 leading-relaxed mb-8 font-light">
                        Atuamos como seu copiloto na jornada digital, oferecendo transparência total, prazos cumpridos e qualidade técnica obsessiva.
                    </p>
<a className="text-sm font-medium text-white hover:text-red-400 transition-colors inline-flex items-center" href="#contato">
                        Conheça a Tripulação <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
<div className="relative">

<div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative group">
<img alt="Espaço" className="object-cover w-full h-full opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

<div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-red-500" data-lucide="globe"></i>
</div>
<div>
<p className="text-sm font-medium text-white">Sede Global</p>
<p className="text-xs text-white/50">São Paulo, Brasil</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="planos">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Escolha sua Nave</h2>
<p className="text-white/50 text-sm max-w-lg mx-auto">Planos de assinatura flexíveis para empresas que precisam de evolução constante.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Marte</h3>
<p className="text-xs text-white/50 mb-6 h-10">Para startups em fase de decolagem.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold tracking-tight">R$ 3.990</span>
<span className="text-sm text-white/40">/mês</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-white/70"><i className="w-4 h-4 text-white/30 shrink-0 mt-0.5" data-lucide="check"></i> Manutenção Web</li>
<li className="flex items-start gap-3 text-sm text-white/70"><i className="w-4 h-4 text-white/30 shrink-0 mt-0.5" data-lucide="check"></i> Design Básico</li>
<li className="flex items-start gap-3 text-sm text-white/70"><i className="w-4 h-4 text-white/30 shrink-0 mt-0.5" data-lucide="check"></i> Suporte Email</li>
</ul>
<a className="block w-full py-3 rounded-lg border border-white/10 bg-transparent text-center text-sm font-medium hover:bg-white hover:text-black transition-colors" href="#contato">Selecionar</a>
</div>

<div className="relative rounded-2xl border border-red-500/50 bg-white/[0.05] p-8 flex flex-col shadow-[0_0_30px_-10px_rgba(239,68,68,0.2)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-red-600 rounded-full text-[10px] font-bold tracking-wider uppercase">Mais Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Saturno</h3>
<p className="text-xs text-white/50 mb-6 h-10">Crescimento acelerado e presença multicanal.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold tracking-tight">R$ 5.900</span>
<span className="text-sm text-white/40">/mês</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-white"><i className="w-4 h-4 text-red-500 shrink-0 mt-0.5" data-lucide="check"></i> Desenvolvimento Full Stack</li>
<li className="flex items-start gap-3 text-sm text-white"><i className="w-4 h-4 text-red-500 shrink-0 mt-0.5" data-lucide="check"></i> Branding Completo</li>
<li className="flex items-start gap-3 text-sm text-white"><i className="w-4 h-4 text-red-500 shrink-0 mt-0.5" data-lucide="check"></i> Gestão de Tráfego</li>
<li className="flex items-start gap-3 text-sm text-white"><i className="w-4 h-4 text-red-500 shrink-0 mt-0.5" data-lucide="check"></i> Suporte Prioritário</li>
</ul>
<a className="block w-full py-3 rounded-lg bg-red-600 text-center text-sm font-medium text-white hover:bg-red-500 transition-colors" href="#contato">Selecionar</a>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Netuno</h3>
<p className="text-xs text-white/50 mb-6 h-10">Domínio total do mercado com IA.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold tracking-tight">R$ 8.250</span>
<span className="text-sm text-white/40">/mês</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-white/70"><i className="w-4 h-4 text-white/30 shrink-0 mt-0.5" data-lucide="check"></i> Tudo de Saturno</li>
<li className="flex items-start gap-3 text-sm text-white/70"><i className="w-4 h-4 text-white/30 shrink-0 mt-0.5" data-lucide="check"></i> Agentes de IA Custom</li>
<li className="flex items-start gap-3 text-sm text-white/70"><i className="w-4 h-4 text-white/30 shrink-0 mt-0.5" data-lucide="check"></i> Automação de CRM</li>
</ul>
<a className="block w-full py-3 rounded-lg border border-white/10 bg-transparent text-center text-sm font-medium hover:bg-white hover:text-black transition-colors" href="#contato">Selecionar</a>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24 border-t border-white/5">
<h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">Perguntas Frequentes</h2>
<div className="space-y-4">
<details className="group border border-white/10 rounded-lg bg-white/[0.02] open:bg-white/[0.05]">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none">
<span className="text-sm font-medium">Qual o prazo médio de entrega de um projeto?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-white/50" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-4 pb-4 text-sm text-white/60 leading-relaxed">
                        Projetos como Landing Pages levam de 5 a 10 dias úteis. Sites institucionais complexos e e-commerces variam de 20 a 45 dias, dependendo do escopo definido na fase de planejamento.
                    </div>
</details>
<details className="group border border-white/10 rounded-lg bg-white/[0.02] open:bg-white/[0.05]">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none">
<span className="text-sm font-medium">Vocês trabalham com contratos de longo prazo?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-white/50" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-4 pb-4 text-sm text-white/60 leading-relaxed">
                        Sim, oferecemos planos mensais (Marte, Saturno, Netuno) com fidelidade mínima de 6 meses para garantir resultados consistentes em SEO e tráfego pago. Projetos pontuais (One-off) também estão disponíveis.
                    </div>
</details>
<details className="group border border-white/10 rounded-lg bg-white/[0.02] open:bg-white/[0.05]">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none">
<span className="text-sm font-medium">Quais tecnologias vocês utilizam?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-white/50" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-4 pb-4 text-sm text-white/60 leading-relaxed">
                        Nossa stack principal é Next.js, React e Tailwind CSS para web. Para e-commerce, trabalhamos com Shopify, Nuvemshop e soluções customizadas. Em automação, utilizamos Python, n8n e OpenAI API.
                    </div>
</details>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="contato">
<div className="relative rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden p-8 md:p-16">

<div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Iniciar Contato</h2>
<p className="text-white/60 text-sm mb-8">Preencha o formulário para agendar uma reunião de diagnóstico gratuita com nossos especialistas.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
<i className="w-5 h-5 text-white/70" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-sm font-medium text-white">Base Operacional</h4>
<p className="text-sm text-white/50 mt-1">Av. das Nações Unidas, 14261<br/>Torre B, São Paulo - SP</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
<i className="w-5 h-5 text-white/70" data-lucide="mail"></i>
</div>
<div>
<h4 className="text-sm font-medium text-white">Comunicação</h4>
<p className="text-sm text-white/50 mt-1">oi@bbmspace.com<br/>(11) 93231-0504</p>
</div>
</div>
</div>

<a className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-green-400 hover:text-green-300 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="message-circle"></i> Falar no WhatsApp
                        </a>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-medium text-white/70">Nome</label>
<input className="w-full h-10 rounded-lg bg-white/5 border border-white/10 px-3 text-sm text-white focus:outline-none focus:border-red-500/50 transition-colors placeholder:text-white/20" placeholder="Seu nome" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-white/70">WhatsApp</label>
<input className="w-full h-10 rounded-lg bg-white/5 border border-white/10 px-3 text-sm text-white focus:outline-none focus:border-red-500/50 transition-colors placeholder:text-white/20" placeholder="(11) 99999-9999" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-white/70">Email Corporativo</label>
<input className="w-full h-10 rounded-lg bg-white/5 border border-white/10 px-3 text-sm text-white focus:outline-none focus:border-red-500/50 transition-colors placeholder:text-white/20" placeholder="nome@empresa.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-white/70">Interesse Principal</label>
<div className="relative">
<select className="w-full h-10 rounded-lg bg-white/5 border border-white/10 px-3 text-sm text-white focus:outline-none focus:border-red-500/50 transition-colors appearance-none cursor-pointer">
<option className="bg-black">Desenvolvimento Web</option>
<option className="bg-black">Branding</option>
<option className="bg-black">Marketing Digital</option>
<option className="bg-black">Automação IA</option>
</select>
<i className="absolute right-3 top-3 w-4 h-4 text-white/50 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-white/70">Detalhes da Missão</label>
<textarea className="w-full h-32 rounded-lg bg-white/5 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-red-500/50 transition-colors placeholder:text-white/20 resize-none" placeholder="Descreva brevemente seu projeto..."></textarea>
</div>
<button className="w-full h-10 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors" type="submit">
                            Enviar Transmissão
                        </button>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-red-500" data-lucide="rocket"></i>
<span className="font-semibold text-lg tracking-tight text-white">BBM Space</span>
</div>
<p className="text-sm text-white/50 max-w-sm leading-relaxed">
                        Agência digital focada em resultados. Combinamos design, tecnologia e dados para impulsionar negócios na era digital.
                    </p>
</div>
<div>
<h4 className="font-medium text-sm text-white mb-4">Serviços</h4>
<ul className="space-y-2 text-sm text-white/50">
<li><a className="hover:text-white transition-colors" href="#">Desenvolvimento</a></li>
<li><a className="hover:text-white transition-colors" href="#">Branding</a></li>
<li><a className="hover:text-white transition-colors" href="#">Marketing Digital</a></li>
<li><a className="hover:text-white transition-colors" href="#">Loja Virtual</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm text-white mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-white/50">
<li><a className="hover:text-white transition-colors" href="#">Termos de Uso</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacidade</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookies</a></li>
<li><a className="hover:text-white transition-colors" href="#">Glossário Espacial</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-white/30">© 2025 BBM Space. Todos os direitos reservados.</p>
<div className="flex gap-4">
<a className="text-white/30 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="text-white/30 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="text-white/30 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
