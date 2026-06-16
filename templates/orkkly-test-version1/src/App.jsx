import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Intersection Observer for Scroll Reveal
        document.addEventListener('DOMContentLoaded', () => {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
            if (!prefersReducedMotion) {
                const observerOptions = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.15
                };

                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.remove('opacity-0', 'translate-y-8');
                            entry.target.classList.add('opacity-100', 'translate-y-0');
                            observer.unobserve(entry.target);
                        }
                    });
                }, observerOptions);

                document.querySelectorAll('.reveal').forEach(el => {
                    el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-[cubic-bezier(0.16,1,0.3,1)]');
                    observer.observe(el);
                });
            }
        });

        // Form handling simulation
        function handleFormSubmit(e) {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const status = document.getElementById('formStatus');
            const span = btn.querySelector('span');
            
            // Loading state
            btn.disabled = true;
            btn.classList.add('opacity-70', 'cursor-not-allowed');
            span.textContent = 'ENVIANDO...';
            status.classList.add('hidden');

            // Simulate API call
            setTimeout(() => {
                btn.disabled = false;
                btn.classList.remove('opacity-70', 'cursor-not-allowed');
                span.textContent = 'GARANTIR MEU ACESSO';
                
                // Success state
                status.textContent = 'Acesso solicitado. Entraremos em contato.';
                status.classList.remove('hidden', 'text-[var(--accent-red)]');
                status.classList.add('text-[var(--accent-green)]');
                
                e.target.reset();
            }, 1500);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-base)]/80 backdrop-blur-md border-b border-[var(--border-subtle)]">
<div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<svg aria-label="Orkkly Logo" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L22 18H2L12 2Z" fill="#3ECFA3"></path>
<path d="M12 8L18 17.5H6L12 8Z" fill="#000000"></path>
<path d="M12 12L15 17H9L12 12Z" fill="#3ECFA3"></path>
</svg>
<span className="font-mono text-sm uppercase tracking-widest font-semibold">Orkkly</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300" href="#como-funciona">Como funciona</a>
<a className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300" href="#ai-pack">AI Pack</a>
<a className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300" href="#beta">Beta</a>
</div>
<a className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--accent-green)] border border-[var(--accent-green)] px-4 py-2 rounded-none hover:bg-[var(--accent-green)] hover:text-[var(--bg-base)] transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center gap-2" href="#beta">
                BETA
            </a>
</div>
</nav>
<main>

<section className="relative min-h-screen pt-32 pb-24 flex items-center bg-dots overflow-hidden">
<div className="max-w-[1200px] mx-auto px-6 w-full relative z-10 reveal">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 border border-[var(--accent-green)] bg-[var(--accent-green)]/10 px-3 py-1 mb-8 rounded-none">
<span className="w-2 h-2 bg-[var(--accent-green)] rounded-none"></span>
<span className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--accent-green)]">Context Engineering</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.1] mb-6">
                        A IA já sabe construir.<br/>
                        O Orkkly ensina ela o que você quer.
                    </h1>
<p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-10 max-w-2xl font-light">
                        Você não tem um problema de ferramenta. Tem um problema de contexto. Uma conversa gera texto. Estruturar o contexto gera um produto executável e seguro.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="w-full sm:w-auto font-mono text-sm uppercase tracking-[0.1em] text-[var(--bg-base)] bg-[var(--accent-green)] border border-[var(--accent-green)] px-8 py-4 rounded-none hover:bg-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors duration-300 text-center font-semibold" href="#beta">
                            ENTRAR NA LISTA BETA
                        </a>
<a className="w-full sm:w-auto font-mono text-sm uppercase tracking-[0.1em] text-[var(--text-secondary)] border border-[var(--border-strong)] px-8 py-4 rounded-none hover:text-[var(--text-primary)] hover:border-[var(--border-focus)] transition-colors duration-300 text-center flex items-center justify-center gap-2" href="#ai-pack">
                            Ver AI Pack <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="absolute bottom-0 right-0 w-full md:w-1/2 h-64 md:h-full bg-gradient-to-t md:bg-gradient-to-l from-[var(--bg-base)] to-transparent pointer-events-none z-0"></div>
</section>

<section className="py-24 bg-[var(--bg-base)] border-t border-[var(--border-subtle)]" id="problema">
<div className="max-w-[1200px] mx-auto px-6">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] mb-4">O que acontece quando a IA não tem contexto</h2>
<p className="text-base text-[var(--text-secondary)]">O ciclo de vida inevitável de um projeto sem documentação fundacional.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[var(--bg-100)] border border-[var(--border-subtle)] p-8 rounded-none hover:bg-[var(--bg-200)] transition-colors duration-300 reveal group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent-green)] opacity-50"></div>
<div className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--accent-green)] mb-6">Sprint 1</div>
<h3 className="text-xl font-semibold tracking-tight text-[var(--text-primary)] mb-3">Euforia do Boilerplate</h3>
<p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            A IDE cria auth, roteamento e telas base em minutos. A sensação é de que o produto estará pronto amanhã. O modelo deduziu o stack.
                        </p>
</div>

<div className="bg-[var(--bg-100)] border border-[var(--border-subtle)] p-8 rounded-none hover:bg-[var(--bg-200)] transition-colors duration-300 reveal group relative overflow-hidden delay-100">
<div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent-yellow)] opacity-50"></div>
<div className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--accent-yellow)] mb-6">Sprint 2</div>
<h3 className="text-xl font-semibold tracking-tight text-[var(--text-primary)] mb-3">O Loop de Ajustes</h3>
<p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            O design system quebrou. A IA implementou Redux onde deveria ser estado local. Você passa horas desfazendo decisões que não pediu.
                        </p>
</div>

<div className="bg-[var(--bg-100)] border border-[var(--border-subtle)] p-8 rounded-none hover:bg-[var(--bg-200)] transition-colors duration-300 reveal group relative overflow-hidden delay-200">
<div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent-red)] opacity-50"></div>
<div className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--accent-red)] mb-6">Sprint 3</div>
<h3 className="text-xl font-semibold tracking-tight text-[var(--text-primary)] mb-3">Colapso Estrutural</h3>
<p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            A IA tomou 40 decisões de infraestrutura sem avisar. O prompt inicial já não serve. Refatorar custa mais caro do que escrever do zero.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[var(--bg-200)] border-t border-[var(--border-subtle)]">
<div className="max-w-[1200px] mx-auto px-6 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] mb-16 text-center">O Orkkly não compete. Ele alimenta.</h2>
<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

<div className="w-full md:w-64 bg-[var(--bg-base)] border border-[var(--accent-green)] p-6 relative z-10">
<div className="flex items-center gap-3 mb-4">
<svg fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L22 18H2L12 2Z" fill="#3ECFA3"></path>
<path d="M12 8L18 17.5H6L12 8Z" fill="#000000"></path>
<path d="M12 12L15 17H9L12 12Z" fill="#3ECFA3"></path>
</svg>
<span className="font-mono text-sm tracking-widest font-semibold uppercase">Orkkly</span>
</div>
<p className="text-xs text-[var(--text-secondary)] font-mono leading-relaxed">Engenharia de Contexto. Gera a base da verdade estruturada.</p>
</div>

<div className="block md:hidden h-8 border-l border-dashed border-[var(--border-focus)]"></div>

<div className="hidden md:flex flex-1 h-px border-t border-dashed border-[var(--border-focus)] relative items-center justify-center">
<div className="absolute bg-[var(--bg-200)] px-2 font-mono text-xs text-[var(--text-secondary)]">INJETA CONTEXTO VIA</div>
</div>

<div className="w-full md:w-80 flex flex-col gap-4 relative z-10">
<div className="bg-[var(--bg-300)] border border-[var(--border-strong)] p-4 flex items-center justify-between">
<div>
<span className="font-mono text-sm text-[var(--text-primary)] block mb-1">Cursor / Windsurf</span>
<span className="text-xs text-[var(--text-secondary)]">Lê o <span className="font-mono text-[var(--accent-green)]">.cursorrules</span></span>
</div>
<iconify-icon className="text-[var(--text-tertiary)] text-xl" icon="solar:code-square-linear"></iconify-icon>
</div>
<div className="bg-[var(--bg-300)] border border-[var(--border-strong)] p-4 flex items-center justify-between">
<div>
<span className="font-mono text-sm text-[var(--text-primary)] block mb-1">Claude Code</span>
<span className="text-xs text-[var(--text-secondary)]">Executa via CLI baseado na SPEC</span>
</div>
<iconify-icon className="text-[var(--text-tertiary)] text-xl" icon="solar:terminal-linear"></iconify-icon>
</div>
<div className="bg-[var(--bg-300)] border border-[var(--border-strong)] p-4 flex items-center justify-between">
<div>
<span className="font-mono text-sm text-[var(--text-primary)] block mb-1">Lovable / Skip</span>
<span className="text-xs text-[var(--text-secondary)]">Consome guidelines de design injetados</span>
</div>
<iconify-icon className="text-[var(--text-tertiary)] text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[var(--bg-base)] border-t border-[var(--border-subtle)]" id="como-funciona">
<div className="max-w-[1200px] mx-auto px-6">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">Do brief ao AI Pack em minutos</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="relative pl-6 border-l-2 border-[var(--border-strong)] hover:border-[var(--accent-green)] transition-colors duration-300 reveal">
<div className="font-mono text-5xl font-light text-[var(--bg-400)] mb-6">01</div>
<iconify-icon className="text-2xl text-[var(--text-primary)] mb-4" icon="solar:chat-round-line-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)] mb-2">Brief Conversacional</h3>
<p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            Você não escreve prompts técnicos. Você responde a perguntas cirúrgicas do Orkkly sobre regras de negócio, restrições e objetivos.
                        </p>
</div>
<div className="relative pl-6 border-l-2 border-[var(--border-strong)] hover:border-[var(--accent-green)] transition-colors duration-300 reveal delay-100">
<div className="font-mono text-5xl font-light text-[var(--bg-400)] mb-6">02</div>
<iconify-icon className="text-2xl text-[var(--text-primary)] mb-4" icon="solar:box-minimalistic-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)] mb-2">Orkkly Estrutura</h3>
<p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            A engine traduz sua intenção em arquitetura, regras de segurança, schemas de banco e design tokens. Sem achismos.
                        </p>
</div>
<div className="relative pl-6 border-l-2 border-[var(--border-strong)] hover:border-[var(--accent-green)] transition-colors duration-300 reveal delay-200">
<div className="font-mono text-5xl font-light text-[var(--bg-400)] mb-6">03</div>
<iconify-icon className="text-2xl text-[var(--text-primary)] mb-4" icon="solar:play-circle-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)] mb-2">IDE Executa</h3>
<p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            Você arrasta o AI Pack para sua IDE. O Cursor/Claude lê o MAESTRO.md e entende exatamente os limites e o plano antes de escrever código.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[var(--bg-300)] border-t border-[var(--border-subtle)]" id="ai-pack">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 reveal">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 border border-[var(--border-focus)] bg-[var(--bg-400)] px-3 py-1 mb-6 rounded-none">
<span className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--text-secondary)]">CADA SESSÃO DE IDE LÊ ISSO ANTES DE EXECUTAR</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] mb-4">O que a IA recebe antes de começar</h2>
<p className="text-base text-[var(--text-secondary)]">Um conjunto de 30+ arquivos estruturados para eliminar a alucinação técnica.</p>
</div>
<a className="hidden md:inline-flex font-mono text-sm uppercase tracking-[0.1em] text-[var(--text-primary)] border border-[var(--border-strong)] px-6 py-3 rounded-none hover:bg-[var(--text-primary)] hover:text-[var(--bg-base)] transition-colors duration-300" href="#beta">
                        QUERO ACESSO BETA
                    </a>
</div>
<div className="bg-[var(--bg-base)] border border-[var(--border-mid)] p-1 reveal rounded-none">
<div className="bg-[var(--bg-100)] border-b border-[var(--border-mid)] px-4 py-3 flex items-center gap-2">
<div className="w-3 h-3 bg-[var(--border-strong)] rounded-none"></div>
<div className="w-3 h-3 bg-[var(--border-strong)] rounded-none"></div>
<div className="w-3 h-3 bg-[var(--border-strong)] rounded-none"></div>
<span className="ml-4 font-mono text-xs text-[var(--text-tertiary)]">orkkly-output-dir / terminal</span>
</div>
<div className="p-6 md:p-8 overflow-x-auto">
<div className="font-mono text-sm md:text-base leading-relaxed whitespace-pre min-w-[600px]">
<span className="text-[var(--text-primary)] font-semibold">plataforma-de-agendamento/</span>
<span className="text-[var(--text-tertiary)]">├──</span> <span className="text-[var(--accent-green)] font-semibold">00-MAESTRO.md</span> <span className="text-[var(--text-tertiary)]">→ ponto de entrada único. A IA começa a ler aqui.</span>
<span className="text-[var(--text-tertiary)]">├──</span> <span className="text-[var(--accent-blue)]">SPEC.md</span> <span className="text-[var(--text-tertiary)]">→ especificação completa do produto.</span>
<span className="text-[var(--text-tertiary)]">├──</span> <span className="text-[var(--text-primary)]">SECURITY.md</span> <span className="text-[var(--text-tertiary)]">→ políticas de auth e limites declaradas formalmente.</span>
<span className="text-[var(--text-tertiary)]">├──</span> <span className="text-[var(--accent-green)] font-semibold">.cursorrules</span> <span className="text-[var(--text-tertiary)]">→ restrições injetadas automaticamente no Cursor.</span>
<span className="text-[var(--text-tertiary)]">├──</span> <span className="text-[var(--text-secondary)]">database/</span>
<span className="text-[var(--text-tertiary)]">│   └──</span> <span className="text-[var(--accent-yellow)]">schema.sql</span> <span className="text-[var(--text-tertiary)]">→ schema PostgreSQL completo e validado.</span>
<span className="text-[var(--text-tertiary)]">├──</span> <span className="text-[var(--text-secondary)]">src/components/</span>
<span className="text-[var(--text-tertiary)]">│   └──</span> <span className="text-[var(--text-primary)]">.tsx</span> <span className="text-[var(--text-tertiary)]">→ componentes pré-compilados e tipados.</span>
<span className="text-[var(--text-tertiary)]">├──</span> <span className="text-[var(--text-secondary)]">specs/</span>
<span className="text-[var(--text-tertiary)]">│   └──</span> <span className="text-[var(--text-primary)]">.md</span> <span className="text-[var(--text-tertiary)]">→ especificações granulares por domínio.</span>
<span className="text-[var(--text-tertiary)]">├──</span> <span className="text-[var(--text-secondary)]">ui/</span>
<span className="text-[var(--text-tertiary)]">│   └──</span> <span className="text-[var(--text-primary)]">*.html</span> <span className="text-[var(--text-tertiary)]">→ protótipos visuais estáticos por tela.</span>
<span className="text-[var(--text-tertiary)]">└──</span> <span className="text-[var(--text-primary)]">.mcp.json</span> <span className="text-[var(--text-tertiary)]">→ integração Model Context Protocol nativa.</span><span className="cursor-blink"></span>
</div>
</div>
</div>
<div className="mt-8 md:hidden text-center">
<a className="inline-flex w-full justify-center font-mono text-sm uppercase tracking-[0.1em] text-[var(--text-primary)] border border-[var(--border-strong)] px-6 py-4 rounded-none hover:bg-[var(--text-primary)] hover:text-[var(--bg-base)] transition-colors duration-300" href="#beta">
                        QUERO ACESSO BETA
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-[var(--bg-100)] border-t border-[var(--border-subtle)] overflow-hidden">
<div className="max-w-[1200px] mx-auto px-6">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] mb-4">Segurança como primeira classe, não afterthought</h2>
<p className="text-base text-[var(--text-secondary)] max-w-2xl">O preço de programar por "vibe" é descobrir que a IA deixou seus endpoints expostos no deploy. Com Orkkly, segurança é declarada como restrição antes da primeira linha.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="bg-[var(--bg-base)] border border-[var(--border-mid)] p-8 reveal">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-[var(--border-subtle)]">
<iconify-icon className="text-[var(--accent-red)] text-2xl" icon="solar:shield-warning-linear"></iconify-icon>
<span className="font-mono text-sm text-[var(--text-primary)] uppercase tracking-wide">Vibe-coded</span>
</div>
<ul className="space-y-4 font-mono text-sm text-[var(--text-secondary)]">
<li className="flex items-start gap-2">
<span className="text-[var(--accent-red)] mt-0.5">✕</span> Autenticação improvisada
                            </li>
<li className="flex items-start gap-2">
<span className="text-[var(--accent-red)] mt-0.5">✕</span> Endpoints expostos no front
                            </li>
<li className="flex items-start gap-2">
<span className="text-[var(--accent-red)] mt-0.5">✕</span> Rate limiting inexistente
                            </li>
</ul>
</div>
<div className="bg-[var(--bg-200)] border border-[var(--border-mid)] p-8 relative lg:col-span-2 reveal delay-100">
<div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-200)] to-[var(--bg-300)] pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6 pb-6 border-b border-[var(--border-strong)]">
<div className="flex items-center gap-3">
<iconify-icon className="text-[var(--accent-green)] text-2xl" icon="solar:shield-check-linear"></iconify-icon>
<span className="font-mono text-sm text-[var(--text-primary)] uppercase tracking-wide">Padrão Orkkly</span>
</div>
<span className="dna-label text-[var(--accent-green)]">Restrição Ativa</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
<div className="bg-[var(--bg-base)] p-3 border border-[var(--border-subtle)]">
<div className="font-mono text-xs text-[var(--text-tertiary)] mb-1">ARQUIVO</div>
<div className="font-mono text-sm text-[var(--text-primary)]">SECURITY.md</div>
</div>
<div className="bg-[var(--bg-base)] p-3 border border-[var(--border-subtle)]">
<div className="font-mono text-xs text-[var(--text-tertiary)] mb-1">INJEÇÃO</div>
<div className="font-mono text-sm text-[var(--text-primary)]">.cursorrules</div>
</div>
<div className="bg-[var(--bg-base)] p-3 border border-[var(--border-subtle)]">
<div className="font-mono text-xs text-[var(--text-tertiary)] mb-1">PROTEÇÃO</div>
<div className="font-mono text-sm text-[var(--text-primary)]">Rate limiting</div>
</div>
<div className="bg-[var(--bg-base)] p-3 border border-[var(--border-subtle)]">
<div className="font-mono text-xs text-[var(--text-tertiary)] mb-1">BANCO</div>
<div className="font-mono text-sm text-[var(--text-primary)]">Schema Validado</div>
</div>
</div>
<p className="text-sm text-[var(--text-secondary)] leading-relaxed border-l-2 border-[var(--accent-green)] pl-4">
                                A IA lê as regras de segurança antes de abrir qualquer arquivo de rota. Se tentar expor um dado sensível, a própria constraint configurada via Orkkly no prompt de sistema força a correção.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[var(--bg-100)] border-t border-[var(--border-subtle)]">
<div className="max-w-[1200px] mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] mb-16 text-center reveal">Quem está construindo junto</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-[var(--bg-base)] border border-[var(--border-subtle)] p-8 reveal hover:bg-[var(--bg-200)] transition-colors duration-300">
<p className="text-base text-[var(--text-primary)] mb-6 font-light leading-relaxed">"Eu passava mais tempo corrigindo as alucinações de arquitetura do Claude do que codando de fato. O MAESTRO.md mudou o jogo. A IA agora entende a fronteira do domínio."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-[var(--bg-300)] rounded-none flex items-center justify-center font-mono text-[var(--text-secondary)] border border-[var(--border-strong)]">T</div>
<div>
<div className="text-sm font-semibold text-[var(--text-primary)]">Thiago M.</div>
<div className="font-mono text-xs text-[var(--text-tertiary)]">AI Product Builder</div>
</div>
</div>
</div>
<div className="bg-[var(--bg-base)] border border-[var(--border-subtle)] p-8 reveal delay-100 hover:bg-[var(--bg-200)] transition-colors duration-300">
<p className="text-base text-[var(--text-primary)] mb-6 font-light leading-relaxed">"Como designer, eu sabia o que queria, mas a IA se perdia no meio do caminho. Com o Orkkly, eu gero o pack, entrego pro Cursor e o produto nasce estruturado."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-[var(--bg-300)] rounded-none flex items-center justify-center font-mono text-[var(--text-secondary)] border border-[var(--border-strong)]">C</div>
<div>
<div className="text-sm font-semibold text-[var(--text-primary)]">Camila R.</div>
<div className="font-mono text-xs text-[var(--text-tertiary)]">Product Designer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[var(--bg-200)] border-t border-[var(--border-subtle)]">
<div className="max-w-[1200px] mx-auto px-6">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] mb-4">Feito para quem constrói produto de verdade</h2>
<p className="text-base text-[var(--text-secondary)]">Não é para quem quer um app de to-do list com um clique.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="border border-[var(--border-strong)] p-8 bg-[var(--bg-100)] reveal">
<div className="font-mono text-xs text-[var(--accent-blue)] mb-4">PERFIL 01</div>
<h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">AI Product Builder</h3>
<p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                            Você é founder técnico ou dev usando Cursor/Claude Code. Sente dor no sprint 3 porque a IA inventa moda. Você quer estrutura antes de executar, para escalar sem refatorar.
                        </p>
<ul className="space-y-3 font-mono text-xs text-[var(--text-tertiary)]">
<li className="flex items-center gap-2"><iconify-icon className="text-[var(--text-secondary)]" icon="solar:check-circle-linear"></iconify-icon> Chega de prompt engineering para arquitetura</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[var(--text-secondary)]" icon="solar:check-circle-linear"></iconify-icon> Schemas e specs garantidos no início</li>
</ul>
</div>
<div className="border border-[var(--border-strong)] p-8 bg-[var(--bg-100)] reveal delay-100">
<div className="font-mono text-xs text-[var(--accent-yellow)] mb-4">PERFIL 02</div>
<h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Designer / Não-Dev</h3>
<p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                            Você quer construir produto mas perde tempo lutando com a IA que adivinha errado. O Orkkly traduz sua visão de design em requisitos que as IDEs entendem e obedecem.
                        </p>
<ul className="space-y-3 font-mono text-xs text-[var(--text-tertiary)]">
<li className="flex items-center gap-2"><iconify-icon className="text-[var(--text-secondary)]" icon="solar:check-circle-linear"></iconify-icon> Traduz intenção em código base</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[var(--text-secondary)]" icon="solar:check-circle-linear"></iconify-icon> Preserva decisões de design system</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[var(--bg-100)] border-t border-[var(--accent-green)] relative overflow-hidden" id="beta">

<div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
<svg fill="none" height="600" viewbox="0 0 24 24" width="600" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L22 18H2L12 2Z" fill="#3ECFA3"></path>
<path d="M12 8L18 17.5H6L12 8Z" fill="#000000"></path>
<path d="M12 12L15 17H9L12 12Z" fill="#3ECFA3"></path>
</svg>
</div>
<div className="max-w-2xl mx-auto px-6 relative z-10 reveal">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] mb-4">O beta está abrindo para um grupo pequeno</h2>
<p className="text-base text-[var(--text-secondary)]">Sem spam. Você recebe acesso antecipado e nós recebemos feedback real sobre Context Engineering.</p>
</div>
<form className="space-y-6" id="betaForm" onsubmit="handleFormSubmit(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="font-mono text-xs text-[var(--text-tertiary)] block mb-2 uppercase" htmlFor="name">Nome</label>
<input className="w-full bg-[var(--bg-base)] border border-[var(--border-strong)] text-[var(--text-primary)] px-4 py-3 rounded-none focus:outline-none focus:border-[var(--accent-green)] transition-colors placeholder:text-[var(--text-tertiary)] font-sans text-sm" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="font-mono text-xs text-[var(--text-tertiary)] block mb-2 uppercase" htmlFor="email">E-mail</label>
<input className="w-full bg-[var(--bg-base)] border border-[var(--border-strong)] text-[var(--text-primary)] px-4 py-3 rounded-none focus:outline-none focus:border-[var(--accent-green)] transition-colors placeholder:text-[var(--text-tertiary)] font-sans text-sm" id="email" placeholder="john@example.com" required="" type="email"/>
</div>
</div>
<div>
<label className="font-mono text-xs text-[var(--text-tertiary)] block mb-2 uppercase" htmlFor="project">O que você quer construir?</label>
<textarea className="w-full bg-[var(--bg-base)] border border-[var(--border-strong)] text-[var(--text-primary)] px-4 py-3 rounded-none focus:outline-none focus:border-[var(--accent-green)] transition-colors placeholder:text-[var(--text-tertiary)] font-sans text-sm resize-none" id="project" placeholder="Ex: Um SaaS B2B para gestão de estoque..." required="" rows="3"></textarea>
</div>
<button className="w-full font-mono text-sm uppercase tracking-[0.1em] text-[var(--bg-base)] bg-[var(--accent-green)] border border-[var(--accent-green)] px-8 py-4 rounded-none hover:bg-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors duration-300 font-semibold flex justify-center items-center gap-2" id="submitBtn" type="submit">
<span>GARANTIR MEU ACESSO</span>
</button>
<div className="hidden text-center font-mono text-xs mt-4" id="formStatus"></div>
</form>
</div>
</section>
</main>

<footer className="bg-[var(--bg-base)] border-t border-[var(--border-subtle)] py-12">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<svg fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L22 18H2L12 2Z" fill="#52525B"></path>
<path d="M12 8L18 17.5H6L12 8Z" fill="#000000"></path>
<path d="M12 12L15 17H9L12 12Z" fill="#52525B"></path>
</svg>
<span className="font-mono text-xs text-[var(--text-tertiary)] uppercase tracking-widest">Orkkly</span>
</div>
<div className="font-mono text-xs text-[var(--text-tertiary)] text-center md:text-left">
                Orkkly · Context Engineering · Brasil
            </div>
<div className="flex gap-6">
<a aria-label="LinkedIn" className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon>
</a>
<a aria-label="Email" className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}
