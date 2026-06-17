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



        // Scroll Reveal Animation
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Navbar blur effect on scroll
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                nav.classList.add('border-b', 'border-white/5');
            } else {
                nav.classList.remove('border-b', 'border-white/5');
            }
        });
    
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
      

<nav className="fixed top-0 w-full z-50 glass transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-neutral-100 to-neutral-600 flex items-center justify-center text-black text-xs font-bold">T</div>
<span className="text-sm font-medium text-white tracking-tight group-hover:opacity-80 transition-opacity">Troven</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#features">Soluções</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#method">Método</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-neutral-900 border border-neutral-800 rounded-full hover:bg-neutral-800 hover:border-neutral-700 transition-all" href="#contact">
                Iniciar Projeto
                <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
<div className="glow-bg"></div>
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-neutral-300">Novos slots disponíveis para Q4</span>
</div>
<h1 className="reveal stagger-1 text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
            Engenharia de software<br/>
<span className="text-gradient">precisa e escalável.</span>
</h1>
<p className="reveal stagger-2 text-lg text-neutral-400 max-w-2xl mb-10 font-light leading-relaxed">
            Construímos aplicações web de alta performance focadas em experiência do usuário e arquitetura robusta. Sem atalhos, apenas código limpo.
        </p>
<div className="reveal stagger-3 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group">
                Começar agora
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-neutral-800 text-white rounded-full font-medium text-sm hover:bg-neutral-900 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:copy-linear"></iconify-icon>
                Ver Portfólio
            </button>
</div>
</section>

<section className="py-10 border-y border-neutral-900 bg-neutral-950/30 overflow-hidden">
<div className="max-w-[100vw] flex relative">
<div className="flex animate-scroll gap-16 min-w-full px-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2"><iconify-icon icon="solar:planet-linear" width="28"></iconify-icon><span className="font-semibold tracking-tighter text-lg">Acme</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:infinity-linear" width="28"></iconify-icon><span className="font-semibold tracking-tighter text-lg">Vortex</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:atom-linear" width="28"></iconify-icon><span className="font-semibold tracking-tighter text-lg">Lumina</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:box-linear" width="28"></iconify-icon><span className="font-semibold tracking-tighter text-lg">Cube</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:cloud-linear" width="28"></iconify-icon><span className="font-semibold tracking-tighter text-lg">Nebula</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:shield-linear" width="28"></iconify-icon><span className="font-semibold tracking-tighter text-lg">Fortis</span></div>

<div className="flex items-center gap-2"><iconify-icon icon="solar:planet-linear" width="28"></iconify-icon><span className="font-semibold tracking-tighter text-lg">Acme</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:infinity-linear" width="28"></iconify-icon><span className="font-semibold tracking-tighter text-lg">Vortex</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:atom-linear" width="28"></iconify-icon><span className="font-semibold tracking-tighter text-lg">Lumina</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:box-linear" width="28"></iconify-icon><span className="font-semibold tracking-tighter text-lg">Cube</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:cloud-linear" width="28"></iconify-icon><span className="font-semibold tracking-tighter text-lg">Nebula</span></div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:shield-linear" width="28"></iconify-icon><span className="font-semibold tracking-tighter text-lg">Fortis</span></div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto" id="features">
<div className="reveal mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Soluções Completas</h2>
<p className="text-neutral-400 max-w-xl">Ferramentas e metodologias modernas para garantir que seu produto não apenas funcione, mas escale globalmente.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal card-hover group p-8 rounded-2xl border border-neutral-800 bg-neutral-900/20 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-6 text-white group-hover:text-emerald-400 transition-colors">
<iconify-icon icon="solar:code-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Desenvolvimento Frontend</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Interfaces reativas e performáticas utilizando as tecnologias mais recentes do mercado como React e Vue.</p>
</div>

<div className="reveal stagger-1 card-hover group p-8 rounded-2xl border border-neutral-800 bg-neutral-900/20 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-6 text-white group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:server-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Backend &amp; API</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Arquitetura de servidores escaláveis, microsserviços e APIs RESTful/GraphQL seguras.</p>
</div>

<div className="reveal stagger-2 card-hover group p-8 rounded-2xl border border-neutral-800 bg-neutral-900/20 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-6 text-white group-hover:text-purple-400 transition-colors">
<iconify-icon icon="solar:devices-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Mobile Nativo</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Aplicativos iOS e Android fluídos com foco em experiência nativa e performance de hardware.</p>
</div>

<div className="reveal card-hover group p-8 rounded-2xl border border-neutral-800 bg-neutral-900/20 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-6 text-white group-hover:text-orange-400 transition-colors">
<iconify-icon icon="solar:figma-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">UI/UX Design</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Sistemas de design consistentes, prototipagem de alta fidelidade e testes de usabilidade.</p>
</div>

<div className="reveal stagger-1 card-hover group p-8 rounded-2xl border border-neutral-800 bg-neutral-900/20 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-6 text-white group-hover:text-pink-400 transition-colors">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Engenharia de Dados</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Modelagem de bancos de dados, pipelines de ETL e analytics para decisões baseadas em dados.</p>
</div>

<div className="reveal stagger-2 card-hover group p-8 rounded-2xl border border-neutral-800 bg-neutral-900/20 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-6 text-white group-hover:text-yellow-400 transition-colors">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">DevSecOps</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Integração contínua, deploy automatizado e auditorias de segurança desde o primeiro dia.</p>
</div>
</div>
</section>

<section className="py-24 border-y border-neutral-900 bg-neutral-950/50" id="method">
<div className="max-w-6xl mx-auto px-6">
<div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Processo Transparente</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-sm font-medium text-white">1</div>
<div>
<h4 className="text-white font-medium mb-1">Descoberta e Estratégia</h4>
<p className="text-sm text-neutral-500">Mapeamos requisitos técnicos e de negócio para alinhar expectativas.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-sm font-medium text-white">2</div>
<div>
<h4 className="text-white font-medium mb-1">Design e Prototipagem</h4>
<p className="text-sm text-neutral-500">Visualização interativa do produto final antes de escrever uma linha de código.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-sm font-medium text-white">3</div>
<div>
<h4 className="text-white font-medium mb-1">Desenvolvimento Ágil</h4>
<p className="text-sm text-neutral-500">Sprints quinzenais com entregas contínuas e feedback rápido.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-sm font-medium text-white">4</div>
<div>
<h4 className="text-white font-medium mb-1">Launch &amp; Scale</h4>
<p className="text-sm text-neutral-500">Deploy monitorado e estratégias de escalabilidade pós-lançamento.</p>
</div>
</div>
</div>
</div>
<div className="reveal stagger-1 relative rounded-2xl border border-neutral-800 bg-neutral-900 p-6 h-full min-h-[400px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

<div className="relative w-full max-w-sm bg-black border border-neutral-800 rounded-xl p-4 shadow-2xl">
<div className="flex gap-1.5 mb-4">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
</div>
<div className="space-y-2">
<div className="h-2 w-1/3 bg-neutral-800 rounded"></div>
<div className="h-2 w-2/3 bg-neutral-800 rounded"></div>
<div className="h-2 w-1/2 bg-neutral-800 rounded"></div>
<div className="h-2 w-3/4 bg-neutral-800 rounded"></div>
<div className="flex gap-2 mt-4">
<div className="h-8 w-full bg-neutral-900 border border-neutral-800 rounded"></div>
<div className="h-8 w-1/4 bg-white rounded"></div>
</div>
</div>

<div className="absolute -right-6 -bottom-4 bg-neutral-800 text-white text-[10px] px-3 py-1.5 rounded-md border border-neutral-700 shadow-lg flex items-center gap-1.5">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon>
                            Deploy Success
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto" id="faq">
<div className="reveal text-center mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight">Perguntas Frequentes</h2>
</div>
<div className="space-y-4">
<details className="reveal group border border-neutral-800 rounded-lg bg-neutral-900/20 overflow-hidden transition-all duration-300 open:bg-neutral-900/40">
<summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium select-none hover:text-neutral-200">
                    Como funciona o modelo de cobrança?
                    <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-400 leading-relaxed">
                    Trabalhamos tanto com escopo fechado (Fixed Price) para projetos bem definidos, quanto com alocação de squads (Time &amp; Material) para produtos em evolução contínua.
                </div>
</details>
<details className="reveal stagger-1 group border border-neutral-800 rounded-lg bg-neutral-900/20 overflow-hidden transition-all duration-300 open:bg-neutral-900/40">
<summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium select-none hover:text-neutral-200">
                    Quais tecnologias vocês utilizam?
                    <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-400 leading-relaxed">
                    Nossa stack principal inclui TypeScript, React/Next.js no frontend, Node.js ou Go no backend, e infraestrutura em AWS ou Vercel. Escolhemos a ferramenta certa para o problema.
                </div>
</details>
<details className="reveal stagger-2 group border border-neutral-800 rounded-lg bg-neutral-900/20 overflow-hidden transition-all duration-300 open:bg-neutral-900/40">
<summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium select-none hover:text-neutral-200">
                    Vocês oferecem suporte pós-lançamento?
                    <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-400 leading-relaxed">
                    Sim. Oferecemos pacotes de manutenção (SLA) para garantir que sua aplicação permaneça segura, atualizada e operacional 24/7.
                </div>
</details>
<details className="reveal stagger-3 group border border-neutral-800 rounded-lg bg-neutral-900/20 overflow-hidden transition-all duration-300 open:bg-neutral-900/40">
<summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium select-none hover:text-neutral-200">
                    Qual o prazo médio de desenvolvimento?
                    <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-400 leading-relaxed">
                    MVPs geralmente levam de 4 a 8 semanas. Projetos complexos podem variar de 3 a 6 meses. Definimos um cronograma detalhado na fase de descoberta.
                </div>
</details>
</div>
</section>

<section className="py-24 px-6" id="contact">
<div className="reveal max-w-4xl mx-auto rounded-3xl border border-neutral-800 bg-neutral-900/30 p-10 md:p-16 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Pronto para transformar sua ideia?</h2>
<p className="text-neutral-400 mb-10 max-w-xl mx-auto">Vamos discutir como a Troven pode acelerar o desenvolvimento do seu próximo grande produto.</p>
<form className="max-w-sm mx-auto space-y-4 text-left">
<div>
<label className="block text-xs uppercase text-neutral-500 font-semibold mb-1.5 ml-1">Email</label>
<input className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:border-neutral-600 transition-colors placeholder:text-neutral-700" placeholder="seu@email.com" type="email"/>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-lg text-sm hover:bg-neutral-200 transition-colors" type="button">
                    Agendar Consultoria Gratuita
                </button>
</form>
</div>
</section>

<footer className="border-t border-neutral-900 py-12 px-6 bg-black">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
<div>
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-white text-[10px] font-bold">T</div>
<span className="text-sm font-medium text-white">Troven</span>
</a>
<p className="text-xs text-neutral-600 max-w-[200px]">© 2024 Troven Inc.<br/>Todos os direitos reservados.</p>
</div>
<div className="flex gap-12 md:gap-24">
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-white uppercase tracking-wider">Empresa</span>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Sobre</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Carreiras</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Blog</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-white uppercase tracking-wider">Legal</span>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Privacidade</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Termos</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-white uppercase tracking-wider">Social</span>
<div className="flex gap-3">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="18"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="18"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
