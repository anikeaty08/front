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
darkMode: 'class',
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const html = document.documentElement;

        function updateIcon() {
            if (html.classList.contains('dark')) {
                themeIcon.setAttribute('icon', 'solar:sun-linear');
            } else {
                themeIcon.setAttribute('icon', 'solar:moon-linear');
            }
        }

        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            updateIcon();
        });

        // Initialize correctly
        updateIcon();
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-black/5 dark:border-white/5 bg-zinc-50/70 dark:bg-zinc-950/70 backdrop-blur-md transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter text-zinc-900 dark:text-white">NMIND</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#solucoes">Soluções</a>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#metodologia">Metodologia</a>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#cases">Resultados</a>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#sobre">Sobre</a>
</div>
<div className="flex items-center gap-4">

<button className="w-9 h-9 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-zinc-600 dark:text-zinc-400 transition-colors" id="theme-toggle">
<iconify-icon className="text-lg" icon="solar:sun-linear" id="theme-icon" strokeWidth="1.5"></iconify-icon>
</button>
<a className="hidden sm:flex text-xs md:text-sm font-medium bg-zinc-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors" href="#contato">
                    Falar com especialista
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid pointer-events-none z-0"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-zinc-300/50 dark:bg-zinc-800/30 blur-[120px] rounded-full pointer-events-none z-0 transition-colors duration-300"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-xs font-medium text-zinc-600 dark:text-zinc-300 mb-8 transition-colors duration-300">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5"></iconify-icon>
<span>Inteligência de Mercado desde 2014</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter max-w-4xl text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 leading-tight">
                Transformamos dados em decisões estratégicas que impulsionam negócios.
            </h1>
<p className="mt-6 text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl font-normal leading-relaxed">
                Pare de tomar decisões baseadas em achismos. A NMIND utiliza Data Analytics e Business Intelligence para gerar insights reais que escalam suas vendas, campanhas e performance.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-medium text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#contato">
                    Solicitar consultoria
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 rounded-full border border-black/10 dark:border-white/10 bg-transparent text-zinc-900 dark:text-white font-medium text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center" href="#cases">
                    Ver cases de sucesso
                </a>
</div>
</div>
</section>

<section className="py-10 border-y border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6">
<p className="text-xs text-center text-zinc-500 font-medium uppercase tracking-widest mb-8">Empresas e líderes que confiam em nossos dados</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
<span className="text-xl md:text-2xl font-semibold tracking-tighter">VRTX</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter">GLOBAL</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter">INDST</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter">RETAL</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter">CMX</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="solucoes">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-4">Nossas Soluções</h2>
<p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg">Atuamos de ponta a ponta, da coleta do dado à estratégia final, garantindo que cada número se traduza em resultado comercial.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group border border-black/10 dark:border-white/10 bg-zinc-100/50 dark:bg-zinc-900/20 p-8 rounded-2xl hover:bg-zinc-200/50 dark:hover:bg-zinc-900/50 transition-all duration-300">
<div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center mb-6 text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:minimalistic-magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-3">Pesquisa de Mercado</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Mapeamento profundo do seu setor, concorrentes e comportamento do consumidor. Transformamos ruído em inteligência acionável para posicionamento estratégico.</p>
</div>

<div className="group border border-black/10 dark:border-white/10 bg-zinc-100/50 dark:bg-zinc-900/20 p-8 rounded-2xl hover:bg-zinc-200/50 dark:hover:bg-zinc-900/50 transition-all duration-300">
<div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center mb-6 text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-3">BI e Data Analytics</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Estruturação de dashboards corporativos e análise preditiva. Conectamos suas fontes de dados para criar uma visão unificada e em tempo real do seu negócio.</p>
</div>

<div className="group border border-black/10 dark:border-white/10 bg-zinc-100/50 dark:bg-zinc-900/20 p-8 rounded-2xl hover:bg-zinc-200/50 dark:hover:bg-zinc-900/50 transition-all duration-300">
<div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center mb-6 text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-3">Performance Comercial</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Identificação de gargalos no funil de vendas, análise de On Trade e estratégias baseadas em dados para aumentar taxas de conversão e ticket médio.</p>
</div>

<div className="group border border-black/10 dark:border-white/10 bg-zinc-100/50 dark:bg-zinc-900/20 p-8 rounded-2xl hover:bg-zinc-200/50 dark:hover:bg-zinc-900/50 transition-all duration-300">
<div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center mb-6 text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-3">Otimização de Campanhas</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Auditoria e refinamento de campanhas e portfólio de produtos. Utilizamos modelagem de dados para maximizar o ROI e direcionar investimentos com precisão.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300" id="metodologia">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-4">Como a NMIND trabalha</h2>
<p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">Nossa metodologia converte informações brutas em planos de ação claros e mensuráveis.</p>
</div>
<div className="relative flex flex-col md:flex-row justify-between gap-8 md:gap-4">

<div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-black/10 dark:bg-white/10 z-0 transition-colors duration-300"></div>

<div className="relative z-10 flex flex-col items-center text-center max-w-[240px] mx-auto">
<div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-black/20 dark:border-white/20 flex items-center justify-center mb-4 text-zinc-900 dark:text-white font-mono text-sm transition-colors duration-300">
                        01
                    </div>
<h4 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white mb-2">Coleta</h4>
<p className="text-xs text-zinc-600 dark:text-zinc-400">Captura estruturada de dados do mercado, concorrência e operações internas.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center max-w-[240px] mx-auto">
<div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-black/20 dark:border-white/20 flex items-center justify-center mb-4 text-zinc-900 dark:text-white font-mono text-sm transition-colors duration-300">
                        02
                    </div>
<h4 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white mb-2">Análise</h4>
<p className="text-xs text-zinc-600 dark:text-zinc-400">Processamento e higienização para encontrar padrões, anomalias e oportunidades ocultas.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center max-w-[240px] mx-auto">
<div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-black/20 dark:border-white/20 flex items-center justify-center mb-4 text-zinc-900 dark:text-white font-mono text-sm transition-colors duration-300">
                        03
                    </div>
<h4 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white mb-2">Plano</h4>
<p className="text-xs text-zinc-600 dark:text-zinc-400">Desenho estratégico com projeções e cenários baseados nos insights gerados.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center max-w-[240px] mx-auto">
<div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-black/20 dark:border-white/20 text-zinc-900 dark:text-white flex items-center justify-center mb-4 font-mono text-sm shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-colors duration-300">
                        04
                    </div>
<h4 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white mb-2">Ação</h4>
<p className="text-xs text-zinc-600 dark:text-zinc-400">Implementação focada em impacto real, monitoramento contínuo e otimização.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-t border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.01] relative overflow-hidden transition-colors duration-300" id="cases">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[500px] bg-zinc-300/40 dark:bg-zinc-800/20 blur-[100px] rounded-full pointer-events-none transition-colors duration-300"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 md:mb-24">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-4">Resultados Reais</h2>
<p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg max-w-2xl">Não entregamos apenas relatórios, entregamos impacto mensurável no balanço da sua empresa.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
<div className="border-l border-black/10 dark:border-white/10 pl-6 transition-colors duration-300">
<div className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-600 mb-2">+45%</div>
<div className="text-sm font-medium text-zinc-900 dark:text-white mb-2">Aumento médio em conversão</div>
<p className="text-xs text-zinc-500">Em projetos de otimização de performance comercial no varejo nos últimos 2 anos.</p>
</div>
<div className="border-l border-black/10 dark:border-white/10 pl-6 transition-colors duration-300">
<div className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-600 mb-2">+150</div>
<div className="text-sm font-medium text-zinc-900 dark:text-white mb-2">Projetos estratégicos entregues</div>
<p className="text-xs text-zinc-500">Mapeamento complexo de dados para grandes indústrias e empresas de serviços.</p>
</div>
<div className="border-l border-black/10 dark:border-white/10 pl-6 transition-colors duration-300">
<div className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-600 mb-2">10</div>
<div className="text-sm font-medium text-zinc-900 dark:text-white mb-2">Anos de experiência</div>
<p className="text-xs text-zinc-500">Histórico sólido de atuação no mercado brasileiro, evoluindo junto com a tecnologia.</p>
</div>
</div>

<div className="mt-20 border border-black/5 dark:border-white/5 bg-zinc-100/50 dark:bg-zinc-900/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center transition-colors duration-300">
<iconify-icon className="text-3xl text-zinc-300 dark:text-zinc-600 mb-6 transition-colors duration-300" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-lg md:text-xl text-zinc-800 dark:text-zinc-300 font-medium leading-relaxed mb-8">
                    "A visão que a NMIND nos trouxe através dos dados mudou completamente nossa estratégia de expansão. Saímos do achismo e passamos a focar onde o resultado realmente estava."
                </p>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 border border-black/10 dark:border-white/10 transition-colors duration-300"></div>
<div className="text-left">
<div className="text-sm font-medium text-zinc-900 dark:text-white">Diretor Comercial</div>
<div className="text-xs text-zinc-500">Cliente do Setor Industrial</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300" id="sobre">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-6">A NMIND</h2>
<p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                        Fundada em 2014, a NMIND nasceu com uma missão clara: traduzir a complexidade do mercado em diretrizes simples e poderosas. Somos uma consultoria especializada que une o rigor estatístico ao faro comercial.
                    </p>
<p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8">
                        Acreditamos que dados sem contexto são apenas números. Nossa expertise reside em conectar pontos isolados para formar um panorama estratégico, auxiliando CEOs, CMOs e gestores a minimizarem riscos e alavancarem oportunidades de forma previsível e escalável.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-zinc-900 dark:text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-zinc-700 dark:text-zinc-300">Inteligência baseada em dados reais</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-zinc-900 dark:text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-zinc-700 dark:text-zinc-300">Foco absoluto em performance e ROI</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-zinc-900 dark:text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-zinc-700 dark:text-zinc-300">Equipe sênior multidisciplinar</span>
</li>
</ul>
</div>

<div className="bg-zinc-100/50 dark:bg-zinc-900/40 border border-black/10 dark:border-white/10 p-8 rounded-2xl relative overflow-hidden transition-colors duration-300" id="contato">
<div className="relative z-10">
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-2">Pronto para evoluir?</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8">Receba um diagnóstico preliminar ou agende uma consultoria estruturada com nossos especialistas.</p>
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Nome corporativo</label>
<input className="w-full bg-zinc-200/50 dark:bg-zinc-950/50 border border-black/10 dark:border-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-900 dark:text-white focus:border-black/30 dark:focus:border-white/30 focus:outline-none transition-colors" placeholder="Seu nome" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">E-mail corporativo</label>
<input className="w-full bg-zinc-200/50 dark:bg-zinc-950/50 border border-black/10 dark:border-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-900 dark:text-white focus:border-black/30 dark:focus:border-white/30 focus:outline-none transition-colors" placeholder="email@empresa.com" type="email"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Desafio principal</label>
<select className="w-full bg-zinc-200/50 dark:bg-zinc-950/50 border border-black/10 dark:border-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-300 focus:border-black/30 dark:focus:border-white/30 focus:outline-none transition-colors appearance-none">
<option>Pesquisa e Entendimento de Mercado</option>
<option>Estruturação de Dados / BI</option>
<option>Aumento de Performance em Vendas</option>
<option>Outros</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Mensagem breve</label>
<textarea className="w-full bg-zinc-200/50 dark:bg-zinc-950/50 border border-black/10 dark:border-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-900 dark:text-white focus:border-black/30 dark:focus:border-white/30 focus:outline-none transition-colors resize-none" placeholder="Conte-nos um pouco sobre o cenário atual..." rows="3"></textarea>
</div>
<button className="w-full mt-4 px-6 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black font-medium text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" type="button">
                                Agendar consultoria
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-zinc-950 pt-16 pb-8 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<span className="text-xl font-semibold tracking-tighter text-zinc-900 dark:text-white mb-4 block">NMIND</span>
<p className="text-xs text-zinc-500 max-w-sm leading-relaxed mb-6">
                        Consultoria de inteligência de mercado e Data Analytics. Transformamos dados complexos em estratégias simples e resultados escaláveis desde 2014.
                    </p>
<div className="flex items-center gap-4 text-zinc-500">
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:link-linear"></iconify-icon></a>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 dark:text-white mb-4">Soluções</h4>
<ul className="space-y-3 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">Pesquisa de Mercado</a></li>
<li><a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">Business Intelligence</a></li>
<li><a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">Performance Comercial</a></li>
<li><a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">Otimização de Portfólio</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 dark:text-white mb-4">Contato</h4>
<ul className="space-y-3 text-xs text-zinc-500">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                            contato@nmind.info
                        </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                            Fale conosco
                        </li>
<li className="flex items-start gap-2 mt-2">
<iconify-icon className="mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>São Paulo, SP<br/>Brasil</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-300">
<p className="text-[10px] text-zinc-500">© 2024 NMIND Consultoria. Todos os direitos reservados.</p>
<div className="flex gap-4 text-[10px] text-zinc-500">
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">Política de Privacidade</a>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">Termos de Uso</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
