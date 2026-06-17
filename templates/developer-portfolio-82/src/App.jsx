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
      

<header className="w-full max-w-5xl mx-auto px-6 py-8 flex justify-between items-center border-b border-[#1a1a2e]">
<div className="font-mono text-base tracking-tight text-[#c8c8d4] select-none">
            PM<span className="text-[#39ff7a] cursor-blink">_</span>
</div>
<nav className="flex space-x-6 text-xs text-[#8e8e9f]">
<a className="nav-flicker transition-colors no-underline select-none" href="#hero">// HOME</a>
<a className="nav-flicker transition-colors no-underline select-none" href="#exp">// EXP</a>
<a className="nav-flicker transition-colors no-underline select-none" href="#proj">// PROJ</a>
<a className="nav-flicker transition-colors no-underline select-none" href="#conn">// CONN</a>
</nav>
</header>
<main className="w-full max-w-5xl mx-auto px-6 flex-1 space-y-32 py-16">

<section className="pt-4 pb-4" id="hero">

<div className="inline-flex items-center gap-2 mb-8 font-vt323 text-sm tracking-widest text-[#39ff7a] select-none">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39ff7a] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#39ff7a]"></span>
</span>
                // SYSTEM_ONLINE :: DISPONIVEL_PARA_NOVAS_OPORTUNIDADES
            </div>

<div className="mb-6">
<h1 className="font-vt323 leading-none select-none">
<span className="block text-[72px] md:text-[96px] text-[#c8c8d4]" style={{textShadow: '-2px 0 #ff2a6d, 2px 0 #4a9eff'}}>
                        PEDRO
                    </span>
<span className="block text-[72px] md:text-[96px]" style={{textShadow: '-2px 0 #ff2a6d, 2px 0 #4a9eff'}}>
<span className="text-[#c8c8d4]">MESQUITA</span><span className="text-[#39ff7a]">.DEV</span>
</span>
</h1>
</div>

<div className="w-full h-px bg-[#1a1a2e] mb-6" style={{clipPath: 'polygon(0 0, 98% 0, 100% 100%, 2% 100%)'}}></div>

<div className="font-vt323 text-base tracking-widest text-[#6b6b8a] mb-4 uppercase">
                FULL_STACK_DEVELOPER :: 4YRS_UPTIME
            </div>

<p className="text-sm leading-relaxed max-w-2xl text-[#8e8e9f] mb-10">
                4 anos construindo sistemas que funcionam em produção — React, TypeScript, Node.js e Java.
                Especializado em modernizar sistemas críticos para o setor público,
                com foco em <span className="text-[#c8c8d4]">escalabilidade real</span> e <span className="text-[#c8c8d4]">zero downtime</span>.
            </p>

<nav className="flex flex-wrap gap-4">
<a className="font-vt323 text-base tracking-widest px-5 py-2 border border-[#c8c8d4] text-[#c8c8d4] hover:bg-[#c8c8d4] hover:text-[#050508] transition-all duration-100 select-none no-underline" href="#proj">
                    [ VER_PROJETOS ]
                </a>
<a className="font-vt323 text-base tracking-widest px-5 py-2 border border-[#3a3a52] text-[#6b6b8a] hover:border-[#8e8e9f] hover:text-[#c8c8d4] transition-all duration-100 select-none no-underline" href="https://github.com/pedrolucazx" rel="noopener noreferrer" target="_blank">
                    [ GITHUB ]
                </a>
<a className="font-vt323 text-base tracking-widest px-5 py-2 border border-[#3a3a52] text-[#6b6b8a] hover:border-[#8e8e9f] hover:text-[#c8c8d4] transition-all duration-100 select-none no-underline" href="https://linkedin.com/in/pedrolucazx" rel="noopener noreferrer" target="_blank">
                    [ LINKEDIN ]
                </a>
</nav>

<div className="mt-12 pt-6 border-t border-dashed border-[#1a1a2e] flex flex-wrap gap-6 font-vt323 text-xs tracking-widest select-none">
<span className="text-[#39ff7a]">● SYS: ONLINE</span>
<span className="text-[#3a3a52]">|</span>
<span className="text-[#39ff7a]">UPTIME: 4Y</span>
<span className="text-[#3a3a52]">|</span>
<span className="text-[#39ff7a]">STATUS: AVAILABLE</span>
<span className="text-[#3a3a52]">|</span>
<span className="text-[#6b6b8a]">LOC: CEARÁ, BR</span>
</div>
</section>

<section className="scroll-mt-24" id="exp">
<h2 className="mb-10 font-vt323 text-xl tracking-tight hover-glitch text-[#c8c8d4] uppercase inline-block">WORK_HISTORY.LOG</h2>
<div className="border-pipe pl-8 ml-2 space-y-16">

<div className="relative">
<div className="absolute -left-[28px] top-1 text-[#1a1a2e] font-vt323 text-base select-none">├</div>
<div className="text-[#8e8e9f] font-vt323 text-sm mb-3 select-none tracking-widest">[2021-11] ─────────────────────────</div>
<h3 className="text-base font-semibold text-[#c8c8d4] tracking-tight uppercase">FULL_STACK_DEVELOPER</h3>
<div className="text-[#39ff7a] text-sm mt-1.5 mb-4 font-medium tracking-tight">&gt;&gt; SUPERA_INOVACAO_TECNOLOGIA</div>
<div className="font-vt323 text-sm text-[#8e8e9f] mb-5 tracking-widest">NOV_2021 → FEV_2026</div>
<p className="text-sm leading-relaxed mb-5 max-w-2xl">
                        Atuação direta na arquitetura e desenvolvimento de sistemas críticos para o setor governamental e de saúde pública. Destaque para projetos estratégicos na <span className="text-[#4a9eff]">SES-RS</span> e <span className="text-[#4a9eff]">FHEMIG</span>.
                    </p>
<ul className="space-y-2.5 text-sm max-w-2xl">
<li className="flex items-start">
<span className="text-[#39ff7a] mr-3 font-semibold mt-0.5 select-none">&gt;</span>
<span>Desenvolvimento de interfaces com <span className="text-[#c8c8d4]">React_TypeScript</span> — componentes, páginas e integrações com APIs REST e GraphQL.</span>
</li>
<li className="flex items-start">
<span className="text-[#39ff7a] mr-3 font-semibold mt-0.5 select-none">&gt;</span>
<span>Construção de APIs com <span className="text-[#c8c8d4]">Node.js (NestJS)</span> e <span className="text-[#c8c8d4]">Spring_Boot (Java)</span>, aplicando modularização e injeção de dependência.</span>
</li>
<li className="flex items-start">
<span className="text-[#39ff7a] mr-3 font-semibold mt-0.5 select-none">&gt;</span>
<span>Testes unitários com <span className="text-[#c8c8d4]">Jest</span> cobrindo mais de <span className="text-[#39ff7a]">80%</span> dos casos críticos de negócio — redução direta de bugs em produção.</span>
</li>
<li className="flex items-start">
<span className="text-[#39ff7a] mr-3 font-semibold mt-0.5 select-none">&gt;</span>
<span>Testes de integração com <span className="text-[#c8c8d4]">Supertest</span> e testes de componentes com <span className="text-[#c8c8d4]">Vitest</span> no frontend.</span>
</li>
<li className="flex items-start">
<span className="text-[#39ff7a] mr-3 font-semibold mt-0.5 select-none">&gt;</span>
<span>Otimização de queries em <span className="text-[#c8c8d4]">MySQL</span> e <span className="text-[#c8c8d4]">PostgreSQL</span> com Sequelize e TypeORM.</span>
</li>
</ul>
<div className="mt-8 text-xs text-[#3a3a52] font-vt323 select-none tracking-widest">PROCESS_COMPLETE</div>
</div>
</div>

<div className="mt-16 pt-10 border-t border-dashed border-[#1a1a2e]">
<div className="text-xs text-[#3a3a52] font-vt323 mb-1 select-none tracking-widest">$ tree ./stack --depth 2</div>
<div className="text-xs text-[#1a1a2e] font-vt323 mb-6 select-none tracking-widest">stack/</div>
<div className="space-y-0 max-w-lg text-xs font-mono">

<div className="text-[#8e8e9f] pl-2 py-1 select-none">├── <span className="text-[#c8c8d4]">frontend/</span></div>
<div className="tree-row pl-8 py-1 rounded-sm">
<span className="text-[#8e8e9f]">├── <span className="text-[#c8c8d4]">react</span></span>
</div>
<div className="tree-row pl-8 py-1 rounded-sm">
<span className="text-[#8e8e9f]">├── <span className="text-[#c8c8d4]">next.js</span></span>
</div>
<div className="tree-row pl-8 py-1 rounded-sm">
<span className="text-[#8e8e9f]">├── <span className="text-[#c8c8d4]">typescript</span></span>
</div>
<div className="tree-row pl-8 py-1 rounded-sm">
<span className="text-[#8e8e9f]">└── <span className="text-[#c8c8d4]">tailwindcss</span></span>
</div>

<div className="text-[#8e8e9f] pl-2 py-1 mt-2 select-none">├── <span className="text-[#c8c8d4]">backend/</span></div>
<div className="tree-row pl-8 py-1 rounded-sm">
<span className="text-[#8e8e9f]">├── <span className="text-[#c8c8d4]">node.js + nestjs</span></span>
</div>
<div className="tree-row pl-8 py-1 rounded-sm">
<span className="text-[#8e8e9f]">├── <span className="text-[#c8c8d4]">java + spring boot</span></span>
</div>
<div className="tree-row pl-8 py-1 rounded-sm">
<span className="text-[#8e8e9f]">├── <span className="text-[#c8c8d4]">graphql</span></span>
</div>
<div className="tree-row pl-8 py-1 rounded-sm">
<span className="text-[#8e8e9f]">└── <span className="text-[#c8c8d4]">rest apis</span></span>
</div>

<div className="text-[#8e8e9f] pl-2 py-1 mt-2 select-none">└── <span className="text-[#c8c8d4]">data_and_tests/</span></div>
<div className="tree-row pl-8 py-1 rounded-sm">
<span className="text-[#8e8e9f]">├── <span className="text-[#c8c8d4]">postgresql + mysql</span></span>
</div>
<div className="tree-row pl-8 py-1 rounded-sm">
<span className="text-[#8e8e9f]">├── <span className="text-[#c8c8d4]">jest + vitest + supertest</span></span>
</div>
<div className="tree-row pl-8 py-1 rounded-sm">
<span className="text-[#8e8e9f]">├── <span className="text-[#c8c8d4]">docker</span></span>
</div>
<div className="tree-row pl-8 py-1 rounded-sm">
<span className="text-[#8e8e9f]">└── <span className="text-[#c8c8d4]">github actions (ci/cd)</span></span>
</div>
<div className="mt-3 text-[#3a3a52] font-vt323 tracking-widest select-none">
                        10 directories, 13 files
                    </div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="proj">
<h2 className="mb-10 font-vt323 text-xl tracking-tight hover-glitch text-[#c8c8d4] uppercase inline-block">PROJECTS.DIR</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="proj-card relative bg-[#0a0a12] border border-[#1a1a2e] shadow-[0_0_20px_rgba(57,255,122,0.04)] hover:shadow-[0_0_20px_rgba(57,255,122,0.12)] hover:border-[rgba(57,255,122,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden flex flex-col min-h-[280px]">
<div className="card-glitch-layer"></div>
<div className="flex justify-between items-center px-3 py-2 border-b border-[#1a1a2e] font-vt323 text-xs text-[#8e8e9f] bg-[#050508] select-none">
<span>[DIR] inside_my_mind/</span>
<span>SaaS 2025</span>
</div>
<div className="p-5 flex-1 flex flex-col justify-between z-20">
<div>
<div className="flex justify-between items-start mb-3">
<h3 className="text-base font-semibold text-[#c8c8d4] tracking-tight">Inside My Mind</h3>
<span className="text-[#ff2a6d] font-vt323 text-xs animate-blink select-none tracking-widest mt-0.5">[LIVE]</span>
</div>
<p className="text-sm leading-relaxed mb-4 text-[#8e8e9f]">SaaS de rastreamento de hábitos e journaling diário com IA. Cria hábitos, escreve diário e recebe feedback especializado via <span className="text-[#c8c8d4]">Google Gemini 2.5 Flash</span>.</p>
</div>
<div>
<div className="flex flex-wrap gap-2 mb-5">
<span className="bg-[#0d0d1a] border border-[#1a1a2e] text-xs px-2 py-1 select-none">--nextjs-15</span>
<span className="bg-[#0d0d1a] border border-[#1a1a2e] text-xs px-2 py-1 select-none">--typescript</span>
<span className="bg-[#0d0d1a] border border-[#1a1a2e] text-xs px-2 py-1 select-none">--fastify</span>
<span className="bg-[#0d0d1a] border border-[#1a1a2e] text-xs px-2 py-1 select-none">--postgresql</span>
<span className="bg-[#0d0d1a] border border-[#1a1a2e] text-xs px-2 py-1 select-none">--docker</span>
<span className="bg-[#0d0d1a] border border-[#1a1a2e] text-xs px-2 py-1 select-none">--gemini-2.5-flash</span>
<span className="bg-[#0d0d1a] border border-[#1a1a2e] text-xs px-2 py-1 select-none">--chakra-ui</span>
</div>
<a className="inline-flex font-vt323 text-sm text-[#8e8e9f] hover:text-[#39ff7a] tracking-widest transition-colors py-1 px-2 -ml-2 no-underline" href="https://insidemymind.tech/" rel="noopener noreferrer" target="_blank">
                                → OPEN
                            </a>
</div>
</div>
</div>

<div className="proj-card relative bg-[#0a0a12] border border-[#1a1a2e] shadow-[0_0_20px_rgba(57,255,122,0.04)] hover:shadow-[0_0_20px_rgba(57,255,122,0.12)] hover:border-[rgba(57,255,122,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden flex flex-col min-h-[280px]">
<div className="card-glitch-layer"></div>
<div className="flex justify-between items-center px-3 py-2 border-b border-[#1a1a2e] font-vt323 text-xs text-[#8e8e9f] bg-[#050508] select-none">
<span>[DIR] api_accessflow/</span>
<span>API 2024</span>
</div>
<div className="p-5 flex-1 flex flex-col justify-between z-20">
<div>
<div className="flex justify-between items-start mb-3">
<h3 className="text-base font-semibold text-[#c8c8d4] tracking-tight">AccessFlow API</h3>
</div>
<p className="text-sm leading-relaxed mb-4 text-[#8e8e9f]">13 operações GraphQL — CRUD completo, autenticação <span className="text-[#c8c8d4]">JWT</span>, controle <span className="text-[#c8c8d4]">RBAC</span> e métricas. Pipeline com Jest, Supertest, ESLint e Husky.</p>
</div>
<div>
<div className="flex flex-wrap gap-2 mb-5">
<span className="bg-[#0d0d1a] border border-[#1a1a2e] text-xs px-2 py-1 select-none">--nodejs</span>
<span className="bg-[#0d0d1a] border border-[#1a1a2e] text-xs px-2 py-1 select-none">--typescript</span>
<span className="bg-[#0d0d1a] border border-[#1a1a2e] text-xs px-2 py-1 select-none">--graphql</span>
<span className="bg-[#0d0d1a] border border-[#1a1a2e] text-xs px-2 py-1 select-none">--postgresql</span>
<span className="bg-[#0d0d1a] border border-[#1a1a2e] text-xs px-2 py-1 select-none">--docker</span>
</div>
<a className="inline-flex font-vt323 text-sm text-[#8e8e9f] hover:text-[#39ff7a] tracking-widest transition-colors py-1 px-2 -ml-2 no-underline" href="https://github.com/pedrolucazx/api-accessflow" rel="noopener noreferrer" target="_blank">
                                → OPEN
                            </a>
</div>
</div>
</div>

<div className="proj-card relative bg-[#0a0a12] border border-[#1a1a2e] shadow-[0_0_20px_rgba(57,255,122,0.04)] hover:shadow-[0_0_20px_rgba(57,255,122,0.12)] hover:border-[rgba(57,255,122,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden flex flex-col min-h-[280px]">
<div className="card-glitch-layer"></div>
<div className="flex justify-between items-center px-3 py-2 border-b border-[#1a1a2e] font-vt323 text-xs text-[#8e8e9f] bg-[#050508] select-none">
<span>[DIR] accessflow_frontend/</span>
<span>UI 2024</span>
</div>
<div className="p-5 flex-1 flex flex-col justify-between z-20">
<div>
<div className="flex justify-between items-start mb-3">
<h3 className="text-base font-semibold text-[#c8c8d4] tracking-tight">AccessFlow Frontend</h3>
</div>
<p className="text-sm leading-relaxed mb-4 text-[#8e8e9f]">Interface <span className="text-[#c8c8d4]">React + TypeScript</span> consumindo a API via Apollo Client. Autenticação JWT e exibição condicional por perfil (admin/comum). Deploy no Vercel.</p>
</div>
<div>
<div className="flex flex-wrap gap-2 mb-5">
<span className="bg-[#0d0d1a] border border-[#1a1a2e] text-xs px-2 py-1 select-none">--react</span>
<span className="bg-[#0d0d1a] border border-[#1a1a2e] text-xs px-2 py-1 select-none">--typescript</span>
<span className="bg-[#0d0d1a] border border-[#1a1a2e] text-xs px-2 py-1 select-none">--apollo</span>
<span className="bg-[#0d0d1a] border border-[#1a1a2e] text-xs px-2 py-1 select-none">--vite</span>
</div>
<a className="inline-flex font-vt323 text-sm text-[#8e8e9f] hover:text-[#39ff7a] tracking-widest transition-colors py-1 px-2 -ml-2 no-underline" href="https://github.com/pedrolucazx/accessflow-frontend" rel="noopener noreferrer" target="_blank">
                                → OPEN
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="conn">
<h2 className="mb-2 font-vt323 text-xl tracking-tight hover-glitch text-[#c8c8d4] uppercase inline-block">ESTABLISH_CONNECTION</h2>
<div className="text-xs text-[#8e8e9f] mb-10 font-vt323 tracking-widest uppercase select-none">SIGNAL OPEN :: ACCEPTING TRANSMISSIONS</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
<a className="port-card relative flex items-center justify-between p-5 bg-[#050508] border border-[#1a1a2e] text-[#8e8e9f] no-underline group overflow-hidden" href="mailto:pedrolucazxmesquita@gmail.com">
<div className="pulse-border absolute left-0 top-0 bottom-0 w-[3px] bg-[#4a9eff]"></div>
<div className="flex items-center space-x-4 pl-2 relative z-10">
<iconify-icon className="text-[#4a9eff]" icon="solar:letter-linear" strokeWidth="1.5" width="22"></iconify-icon>
<div>
<div className="font-vt323 text-xs text-[#4a9eff] mb-1 tracking-widest">PORT_EMAIL</div>
<div className="text-sm group-hover:text-[#c8c8d4] transition-colors">pedrolucazxmesquita@gmail.com</div>
</div>
</div>
</a>
<a className="port-card relative flex items-center justify-between p-5 bg-[#050508] border border-[#1a1a2e] text-[#8e8e9f] no-underline group overflow-hidden" href="https://linkedin.com/in/pedrolucazx" rel="noopener noreferrer" target="_blank">
<div className="pulse-border absolute left-0 top-0 bottom-0 w-[3px] bg-[#7c3aed]"></div>
<div className="flex items-center space-x-4 pl-2 relative z-10">
<iconify-icon className="text-[#7c3aed]" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="22"></iconify-icon>
<div>
<div className="font-vt323 text-xs text-[#7c3aed] mb-1 tracking-widest">PORT_LINKEDIN</div>
<div className="text-sm group-hover:text-[#c8c8d4] transition-colors">/in/pedrolucazx</div>
</div>
</div>
</a>
<a className="port-card relative flex items-center justify-between p-5 bg-[#050508] border border-[#1a1a2e] text-[#8e8e9f] no-underline group overflow-hidden" href="https://github.com/pedrolucazx" rel="noopener noreferrer" target="_blank">
<div className="pulse-border absolute left-0 top-0 bottom-0 w-[3px] bg-[#39ff7a]"></div>
<div className="flex items-center space-x-4 pl-2 relative z-10">
<iconify-icon className="text-[#39ff7a]" icon="solar:code-square-linear" strokeWidth="1.5" width="22"></iconify-icon>
<div>
<div className="font-vt323 text-xs text-[#39ff7a] mb-1 tracking-widest">PORT_GITHUB</div>
<div className="text-sm group-hover:text-[#c8c8d4] transition-colors">/pedrolucazx</div>
</div>
</div>
</a>
</div>
</section>
</main>

<footer className="w-full border-t border-[#1a1a2e] mt-16 py-8 relative">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
<div className="flex flex-col items-center md:items-start">
<div className="font-vt323 text-sm text-[#3a3a52] tracking-widest mb-2 select-none uppercase">© 2026 PEDRO_MESQUITA :: ALL_RIGHTS_RESERVED</div>
<div className="font-vt323 text-xs text-[#1a1a2e] tracking-widest select-none">[ SIGNAL_END ]</div>
</div>
<div className="font-mono text-base tracking-tight text-[#39ff7a] select-none hover-glitch">
                PM<span className="cursor-blink">_</span>
</div>
</div>
</footer>

    </>
  );
}
