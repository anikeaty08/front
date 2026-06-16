import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Cormorant Garamond', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
obsidian: '#0B0B0D',
ivory: '#E8E6E3',
gold: '#C6A75E',
'gold-soft': 'rgba(198, 167, 94, 0.6)',
steel: '#8A9197',
crimson: '#7A1C1C',
mist: '#BFC5C9',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 bg-grid"></div>
<div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(138,105,30,0.05),transparent_70%)]"></div>

<nav className="fixed top-0 w-full z-40 bg-obsidian/70 backdrop-blur-md border-b border-gold/15">
<div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="border border-gold/30 px-1.5 py-0.5 text-xs font-mono text-gold tracking-widest">CM</span>
<span className="text-sm font-sans tracking-wide text-ivory hidden sm:block">Carlos Magnus</span>
</div>
<ul className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-steel">
<li><a className="hover:text-gold transition-colors" href="#origem"><span className="text-gold-soft mr-2">I.</span>ORIGEM</a></li>
<li><a className="hover:text-gold transition-colors" href="#pilares"><span className="text-gold-soft mr-2">II.</span>PILARES</a></li>
<li><a className="hover:text-gold transition-colors" href="#obras"><span className="text-gold-soft mr-2">III.</span>OBRAS</a></li>
<li><a className="hover:text-gold transition-colors" href="#cronica"><span className="text-gold-soft mr-2">IV.</span>CRÔNICA</a></li>
<li><a className="hover:text-gold transition-colors" href="#audiencia"><span className="text-gold-soft mr-2">V.</span>AUDIÊNCIA</a></li>
</ul>
<div className="flex items-center gap-4">
<button aria-label="Toggle Theme" className="border border-gold/30 text-gold p-2 hover:bg-gold/10 transition-colors">
<i className="w-4 h-4" data-lucide="sun" strokeWidth="1.5"></i>
</button>
<a className="hidden sm:inline-block border border-gold/30 text-gold font-mono text-xs uppercase tracking-widest px-6 py-2.5 hover:bg-gold/10 transition-colors" href="#audiencia">
                    Solicitar Audiência
                </a>
</div>
</div>
</nav>
<main className="relative z-10">

<section className="max-w-[1280px] mx-auto px-6 pt-40 pb-24 md:pt-52 md:pb-32 flex flex-col md:flex-row items-center justify-between gap-16">
<div className="w-full md:w-3/5 space-y-10">
<div className="flex items-center gap-4 text-xs font-mono text-steel tracking-widest uppercase">
<div className="h-px w-8 bg-gold/30"></div>
<span>MMXVI – ANNO DOMINI</span>
</div>
<h1 className="font-serif text-7xl md:text-9xl tracking-tighter leading-[0.9] font-normal">
                    Carlos<br/>
<span className="text-gold">Magnus</span>
</h1>
<div className="flex items-start gap-6 max-w-xl">
<div className="w-px h-24 bg-gold/30 mt-2 shrink-0"></div>
<p className="text-xl font-sans text-mist leading-relaxed">
                        Engenheiro e arquiteto de software. Construo sistemas inevitáveis — escrupulosos na execução, imperiais na intenção. Poder latente, sem ruído.
                    </p>
</div>
<div className="flex flex-wrap items-center gap-4 pt-4">
<a className="bg-gold text-obsidian font-mono text-xs uppercase tracking-widest px-8 py-4 shadow-[0_0_40px_-10px_rgba(198,167,94,0.45)] hover:brightness-110 transition-all flex items-center gap-2" href="#obras">
                        Ver Obras <i className="w-4 h-4" data-lucide="arrow-down-right" strokeWidth="1.5"></i>
</a>
<a className="border border-gold/30 text-gold font-mono text-xs uppercase tracking-widest px-8 py-4 hover:bg-gold/10 transition-colors" href="#audiencia">
                        Solicitar Audiência
                    </a>
</div>
<div className="flex flex-wrap items-center gap-8 pt-8 text-xs font-mono tracking-widest uppercase">
<div className="flex items-center gap-2 text-steel">
<span className="text-gold text-base">10+</span> Anos em campo
                    </div>
<div className="flex items-center gap-2 text-steel">
<span className="text-gold text-base">37</span> Sistemas em produção
                    </div>
<div className="flex items-center gap-2 text-steel">
<span className="text-gold text-base">99.97%</span> Uptime Distribuído
                    </div>
<div className="flex items-center gap-2 text-steel">
<span className="text-gold text-base">0</span> Horas aguardando hype
                    </div>
</div>
</div>

<div className="hidden md:flex w-2/5 justify-end items-center opacity-40">
<svg className="w-[400px] h-[400px] text-gold drop-shadow-[0_0_40px_rgba(198,167,94,0.25)]" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 200 200">
<circle cx="100" cy="100" r="95" stroke-dasharray="2 4"></circle>
<circle cx="100" cy="100" r="80"></circle>
<circle cx="100" cy="100" r="60"></circle>
<path d="M100 20 L130 100 L100 180 L70 100 Z"></path>
<path d="M100 40 L115 100 L100 160 L85 100 Z" strokeWidth="1"></path>
<circle cx="100" cy="100" fill="currentColor" r="4"></circle>

<defs>
<path d="M 20 100 A 80 80 0 0 1 180 100" id="textPath1"></path>
</defs>
<text fill="currentColor" fontFamily="JetBrains Mono" fontSize="6" letter-spacing="4" stroke="none">
<textpath href="#textPath1" startoffset="50%" text-anchor="middle">EX SILENTIO</textpath>
</text>
</svg>
</div>
</section>

<div className="flex items-center justify-center py-16 opacity-70">
<div className="h-px bg-gold/30 w-32"></div>
<div className="w-2.5 h-2.5 border border-gold rotate-45 mx-6"></div>
<div className="h-px bg-gold/30 w-32"></div>
</div>

<section className="max-w-[1280px] mx-auto px-6 py-24" id="origem">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
<div className="space-y-6">
<div className="flex items-center gap-4 text-xs font-mono text-steel tracking-widest uppercase">
<div className="h-px w-8 bg-gold/30"></div>
<span>I · ORIGEM</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight">
                        Não levanto a voz.<br/>
<span className="text-gold">Levanto estruturas.</span>
</h2>
</div>
<div className="space-y-8 text-lg font-sans text-mist leading-relaxed border-l border-gold/15 pl-8 lg:pl-16">
<p>
                        Comecei a programar por necessidade e fiquei por disciplina. Uma década depois, não construo mais para impressionar — construo para durar.
                    </p>
<p>
                        Minha regra é simples: arquiteturas que sustentam o peso das decisões sem pedir licença, times que confiam na direção porque a direção honra o time, e produtos que resolvem o problema verdadeiro em vez do problema bonito.
                    </p>
<p>
                        O trono não é sobre dominar — é sobre não deixar o caos vencer por omissão.
                    </p>
<blockquote className="pt-6 border-t border-gold/15 mt-8">
<p className="font-serif italic text-2xl tracking-tight text-ivory mb-4">
                            "Qui bene imperat, paruerit aliquando necesse est."
                        </p>
<footer className="text-xs font-mono text-steel tracking-widest uppercase">— CÍCERO</footer>
</blockquote>
</div>
</div>
</section>

<div className="flex items-center justify-center py-16 opacity-70">
<div className="h-px bg-gold/30 w-32"></div>
<div className="w-2.5 h-2.5 border border-gold rotate-45 mx-6"></div>
<div className="h-px bg-gold/30 w-32"></div>
</div>

<section className="max-w-[1280px] mx-auto px-6 py-24" id="pilares">
<div className="mb-16 space-y-6">
<div className="flex items-center gap-4 text-xs font-mono text-steel tracking-widest uppercase">
<div className="h-px w-8 bg-gold/30"></div>
<span>II · PILARES</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight">
                    Quatro colunas.<br/>
<span className="text-gold">Uma arquitetura.</span>
</h2>
<p className="text-lg font-sans text-mist">
                    O que carrega o peso. O que não se negocia.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-[#1A1A1F]/60 backdrop-blur-sm p-8 md:p-10 border border-gold/15 border-l-gold/40 hover:bg-[#1A1A1F]/80 transition-colors group">
<div className="flex justify-between items-start mb-12">
<span className="font-serif text-5xl text-gold-soft leading-none">I</span>
<span className="text-xs font-mono text-steel tracking-widest uppercase">Pilar</span>
</div>
<h3 className="font-serif text-3xl tracking-tight mb-4">Arquitetura</h3>
<p className="text-base font-sans text-mist mb-8">
                        Sistemas que suportam o peso das decisões sem pedir licença.
                    </p>
<div className="flex flex-wrap gap-2 text-xs font-mono text-steel tracking-widest uppercase">
<span className="border border-gold/20 px-3 py-1">Distributed Systems</span>
<span className="border border-gold/20 px-3 py-1">Event-Driven</span>
<span className="border border-gold/20 px-3 py-1">Domain-Driven Design</span>
</div>
</div>

<div className="bg-[#1A1A1F]/60 backdrop-blur-sm p-8 md:p-10 border border-gold/15 hover:bg-[#1A1A1F]/80 transition-colors">
<div className="flex justify-between items-start mb-12">
<span className="font-serif text-5xl text-gold-soft leading-none">II</span>
<span className="text-xs font-mono text-steel tracking-widest uppercase">Pilar</span>
</div>
<h3 className="font-serif text-3xl tracking-tight mb-4">Engenharia</h3>
<p className="text-base font-sans text-mist mb-8">
                        Código como disciplina. Refatoração como higiene. Entrega como contrato.
                    </p>
<div className="flex flex-wrap gap-2 text-xs font-mono text-steel tracking-widest uppercase">
<span className="border border-gold/20 px-3 py-1">TypeScript</span>
<span className="border border-gold/20 px-3 py-1">Go</span>
<span className="border border-gold/20 px-3 py-1">Rust</span>
<span className="border border-gold/20 px-3 py-1">PostgreSQL</span>
</div>
</div>

<div className="bg-[#1A1A1F]/60 backdrop-blur-sm p-8 md:p-10 border border-gold/15 hover:bg-[#1A1A1F]/80 transition-colors">
<div className="flex justify-between items-start mb-12">
<span className="font-serif text-5xl text-gold-soft leading-none">III</span>
<span className="text-xs font-mono text-steel tracking-widest uppercase">Pilar</span>
</div>
<h3 className="font-serif text-3xl tracking-tight mb-4">Liderança</h3>
<p className="text-base font-sans text-mist mb-8">
                        Times que confiam na direção porque a direção honra o time.
                    </p>
<div className="flex flex-wrap gap-2 text-xs font-mono text-steel tracking-widest uppercase">
<span className="border border-gold/20 px-3 py-1">Tech Strategy</span>
<span className="border border-gold/20 px-3 py-1">Mentoria</span>
<span className="border border-gold/20 px-3 py-1">Hiring</span>
<span className="border border-gold/20 px-3 py-1">Gestão de Escopo</span>
</div>
</div>

<div className="bg-[#1A1A1F]/60 backdrop-blur-sm p-8 md:p-10 border border-gold/15 hover:bg-[#1A1A1F]/80 transition-colors">
<div className="flex justify-between items-start mb-12">
<span className="font-serif text-5xl text-gold-soft leading-none">IV</span>
<span className="text-xs font-mono text-steel tracking-widest uppercase">Pilar</span>
</div>
<h3 className="font-serif text-3xl tracking-tight mb-4">Produto</h3>
<p className="text-base font-sans text-mist mb-8">
                        A linha entre o que os usuários pedem e o que eles realmente precisam.
                    </p>
<div className="flex flex-wrap gap-2 text-xs font-mono text-steel tracking-widest uppercase">
<span className="border border-gold/20 px-3 py-1">Discovery</span>
<span className="border border-gold/20 px-3 py-1">Priorização</span>
<span className="border border-gold/20 px-3 py-1">Métricas</span>
</div>
</div>
</div>

<div className="mt-20 pt-10 border-t border-gold/15">
<div className="flex flex-col md:flex-row items-start md:items-center gap-8">
<span className="text-xs font-mono text-steel tracking-widest uppercase shrink-0">— ARSENAL —</span>
<div className="flex flex-wrap gap-2 text-[10px] font-mono text-steel uppercase tracking-widest">
<span className="bg-obsidian/40 border border-gold/15 px-3 py-1.5">TypeScript</span>
<span className="bg-obsidian/40 border border-gold/15 px-3 py-1.5">Next.js</span>
<span className="bg-obsidian/40 border border-gold/15 px-3 py-1.5">React</span>
<span className="bg-obsidian/40 border border-gold/15 px-3 py-1.5">Node.js</span>
<span className="bg-obsidian/40 border border-gold/15 px-3 py-1.5">Go</span>
<span className="bg-obsidian/40 border border-gold/15 px-3 py-1.5">Rust</span>
<span className="bg-obsidian/40 border border-gold/15 px-3 py-1.5">PostgreSQL</span>
<span className="bg-obsidian/40 border border-gold/15 px-3 py-1.5">Redis</span>
<span className="bg-obsidian/40 border border-gold/15 px-3 py-1.5">Kafka</span>
<span className="bg-obsidian/40 border border-gold/15 px-3 py-1.5">Kubernetes</span>
<span className="bg-obsidian/40 border border-gold/15 px-3 py-1.5">AWS</span>
<span className="bg-obsidian/40 border border-gold/15 px-3 py-1.5">Terraform</span>
<span className="bg-obsidian/40 border border-gold/15 px-3 py-1.5">GraphQL</span>
<span className="bg-obsidian/40 border border-gold/15 px-3 py-1.5">tRPC</span>
</div>
</div>
</div>
</section>

<div className="flex items-center justify-center py-16 opacity-70">
<div className="h-px bg-gold/30 w-32"></div>
<div className="w-2.5 h-2.5 border border-gold rotate-45 mx-6"></div>
<div className="h-px bg-gold/30 w-32"></div>
</div>

<section className="max-w-[1280px] mx-auto px-6 py-24" id="obras">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="space-y-6">
<div className="flex items-center gap-4 text-xs font-mono text-steel tracking-widest uppercase">
<div className="h-px w-8 bg-gold/30"></div>
<span>III · OBRAS</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight">
                        Cada obra <span className="text-gold">deixa marca</span>.<br/>
                        Nenhuma deixa ruído.
                    </h2>
</div>
<div className="text-xs font-mono text-steel tracking-widest uppercase pb-2">
                    4 PEÇAS · SELECIONADAS
                </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<a className="group bg-[#1A1A1F]/60 backdrop-blur-sm p-8 md:p-10 border border-gold/15 hover:border-gold/30 transition-all block relative" href="#">
<i className="absolute top-8 right-8 w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
<div className="text-xs font-mono text-gold-soft tracking-widest uppercase mb-6">01 · MMXXV</div>
<h3 className="font-serif text-3xl tracking-tight mb-2 group-hover:text-gold transition-colors">Relatum</h3>
<div className="text-[10px] font-mono text-steel tracking-widest uppercase mb-6">Fundador &amp; Arquiteto</div>
<p className="text-base font-sans text-mist mb-8">
                        Plataforma de relações comerciais que substituiu 3 ferramentas isoladas por um único trono de dados.
                    </p>
<div className="flex flex-wrap gap-2 text-[10px] font-mono text-steel tracking-widest uppercase">
<span className="border border-gold/20 px-2 py-1">Next.js</span>
<span className="border border-gold/20 px-2 py-1">PostgreSQL</span>
<span className="border border-gold/20 px-2 py-1">tRPC</span>
<span className="border border-gold/20 px-2 py-1">+1</span>
</div>
</a>

<a className="group bg-[#1A1A1F]/60 backdrop-blur-sm p-8 md:p-10 border border-gold/15 hover:border-gold/30 transition-all block relative" href="#">
<i className="absolute top-8 right-8 w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
<div className="text-xs font-mono text-gold-soft tracking-widest uppercase mb-6">02 · MMXXIV</div>
<h3 className="font-serif text-3xl tracking-tight mb-2 group-hover:text-gold transition-colors">Kairos</h3>
<div className="text-[10px] font-mono text-steel tracking-widest uppercase mb-6">Lead Engineer</div>
<p className="text-base font-sans text-mist mb-8">
                        Motor de agendamento distribuído que orquestra milhões de eventos por dia sem perder um tick.
                    </p>
<div className="flex flex-wrap gap-2 text-[10px] font-mono text-steel tracking-widest uppercase">
<span className="border border-gold/20 px-2 py-1">Go</span>
<span className="border border-gold/20 px-2 py-1">Temporal</span>
<span className="border border-gold/20 px-2 py-1">Kafka</span>
<span className="border border-gold/20 px-2 py-1">+1</span>
</div>
</a>

<a className="group bg-[#1A1A1F]/60 backdrop-blur-sm p-8 md:p-10 border border-gold/15 hover:border-gold/30 transition-all block relative" href="#">
<i className="absolute top-8 right-8 w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
<div className="text-xs font-mono text-gold-soft tracking-widest uppercase mb-6">03 · MMXXIV</div>
<h3 className="font-serif text-3xl tracking-tight mb-2 group-hover:text-gold transition-colors">Echoes</h3>
<div className="text-[10px] font-mono text-steel tracking-widest uppercase mb-6">Produto &amp; Engenharia</div>
<p className="text-base font-sans text-mist mb-8">
                        Sistema de telemetria que transforma ruído em decisão executiva em tempo real.
                    </p>
<div className="flex flex-wrap gap-2 text-[10px] font-mono text-steel tracking-widest uppercase">
<span className="border border-gold/20 px-2 py-1">TypeScript</span>
<span className="border border-gold/20 px-2 py-1">Clickhouse</span>
<span className="border border-gold/20 px-2 py-1">D3</span>
</div>
</a>

<a className="group bg-[#1A1A1F]/60 backdrop-blur-sm p-8 md:p-10 border border-gold/15 hover:border-gold/30 transition-all block relative" href="#">
<i className="absolute top-8 right-8 w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
<div className="text-xs font-mono text-gold-soft tracking-widest uppercase mb-6">04 · MMXXIII</div>
<h3 className="font-serif text-3xl tracking-tight mb-2 group-hover:text-gold transition-colors">Atlas</h3>
<div className="text-[10px] font-mono text-steel tracking-widest uppercase mb-6">Staff Engineer (Contrato)</div>
<p className="text-base font-sans text-mist mb-8">
                        Reescrita do núcleo de pricing de um marketplace sem downtime e sem reclamações.
                    </p>
<div className="flex flex-wrap gap-2 text-[10px] font-mono text-steel tracking-widest uppercase">
<span className="border border-gold/20 px-2 py-1">Rust</span>
<span className="border border-gold/20 px-2 py-1">Postgres</span>
<span className="border border-gold/20 px-2 py-1">Terraform</span>
</div>
</a>
</div>
</section>

<div className="flex items-center justify-center py-16 opacity-70">
<div className="h-px bg-gold/30 w-32"></div>
<div className="w-2.5 h-2.5 border border-gold rotate-45 mx-6"></div>
<div className="h-px bg-gold/30 w-32"></div>
</div>

<section className="max-w-[1280px] mx-auto px-6 py-24" id="cronica">
<div className="mb-20 space-y-6">
<div className="flex items-center gap-4 text-xs font-mono text-steel tracking-widest uppercase">
<div className="h-px w-8 bg-gold/30"></div>
<span>IV · CRÔNICA</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight">
                    Uma linha do tempo.<br/>
<span className="text-gold">Uma trajetória.</span>
</h2>
</div>
<div className="relative pl-6 md:pl-10 border-l border-gold/15 space-y-16 max-w-4xl">

<div className="relative">
<div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 bg-obsidian border-2 border-gold rounded-full ring-4 ring-obsidian"></div>
<div className="text-xs font-mono text-gold-soft tracking-widest uppercase mb-3 flex items-center gap-4">
<span>2024 — HOJE</span>
<span className="text-steel">CAP. 04</span>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-4 text-ivory">Fundador &amp; Arquiteto-Chefe · Relatum</h3>
<p className="text-lg font-sans text-mist">
                        Construindo o trono. Produto, time e arquitetura. Da primeira linha de código à primeira receita recorrente.
                    </p>
</div>

<div className="relative">
<div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 bg-obsidian border-2 border-gold rounded-full ring-4 ring-obsidian"></div>
<div className="text-xs font-mono text-gold-soft tracking-widest uppercase mb-3 flex items-center gap-4">
<span>2022 — 2024</span>
<span className="text-steel">CAP. 03</span>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-4 text-ivory">Staff Engineer · Consultoria independente</h3>
<p className="text-lg font-sans text-mist">
                        Missões cirúrgicas em empresas de médio e grande porte. Entregues para salvar projetos, não para engrossar timelines.
                    </p>
</div>

<div className="relative">
<div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 bg-obsidian border-2 border-gold/40 rounded-full ring-4 ring-obsidian"></div>
<div className="text-xs font-mono text-gold-soft tracking-widest uppercase mb-3 flex items-center gap-4">
<span>2019 — 2022</span>
<span className="text-steel">CAP. 02</span>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-4 text-mist">Tech Lead · Plataforma B2B (stealth)</h3>
<p className="text-lg font-sans text-mist">
                        Liderei três squads através de dois pivôs. Mantive o core estável enquanto a estratégia mudava de rota.
                    </p>
</div>

<div className="relative">
<div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 bg-obsidian border-2 border-gold/40 rounded-full ring-4 ring-obsidian"></div>
<div className="text-xs font-mono text-gold-soft tracking-widest uppercase mb-3 flex items-center gap-4">
<span>2016 — 2019</span>
<span className="text-steel">CAP. 01</span>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-4 text-mist">Engenheiro de Software · Startups em série</h3>
<p className="text-lg font-sans text-mist">
                        Cinco produtos, dois ao vivo, um adquirido. Aprendi a diferença entre construir rápido e construir certo.
                    </p>
</div>
</div>
</section>

<div className="flex items-center justify-center py-16 opacity-70">
<div className="h-px bg-gold/30 w-32"></div>
<div className="w-2.5 h-2.5 border border-gold rotate-45 mx-6"></div>
<div className="h-px bg-gold/30 w-32"></div>
</div>

<section className="max-w-[1280px] mx-auto px-6 py-24 pb-40" id="audiencia">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
<div className="space-y-10 relative z-10">
<div className="flex items-center gap-4 text-xs font-mono text-steel tracking-widest uppercase">
<div className="h-px w-8 bg-gold/30"></div>
<span>V · AUDIÊNCIA</span>
</div>
<h2 className="font-serif text-5xl md:text-6xl tracking-tight leading-tight">
                        O portão está aberto.<br/>
<span className="text-gold">Entre com intenção.</span>
</h2>
<p className="text-xl font-sans text-mist max-w-md">
                        Trabalho com poucos, mas profundamente. Se você tem um sistema que precisa nascer ou um problema que já venceu três pessoas, mande um recado.
                    </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<a className="bg-gold text-obsidian font-mono text-xs uppercase tracking-widest px-8 py-4 shadow-[0_0_40px_-10px_rgba(198,167,94,0.45)] hover:brightness-110 transition-all flex items-center gap-2" href="mailto:carlos@magnus.dev">
                            Abrir Conversa <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
<a className="border border-crimson/60 text-crimson font-mono text-xs uppercase tracking-widest px-8 py-4 hover:bg-crimson/10 transition-colors" href="#obras">
                            Antes, Veja o Trono
                        </a>
</div>
</div>
<div className="space-y-4 relative">

<div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 opacity-20 pointer-events-none">
<svg className="w-64 h-64 text-gold" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 200 200">
<circle cx="100" cy="100" r="90"></circle>
<path d="M100 10 L140 100 L100 190 L60 100 Z"></path>
<circle cx="100" cy="100" fill="currentColor" r="5"></circle>
</svg>
</div>

<a className="group flex items-center justify-between bg-obsidian/40 border border-gold/15 p-6 hover:border-gold/40 transition-colors backdrop-blur-sm relative z-10" href="mailto:carlos@magnus.dev">
<div className="flex items-center gap-6">
<div className="w-12 h-12 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold/5 transition-colors">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-[10px] font-mono text-steel tracking-widest uppercase mb-1">E-mail</div>
<div className="font-serif text-xl tracking-tight group-hover:text-gold transition-colors">carlos@magnus.dev</div>
</div>
</div>
<i className="w-4 h-4 text-steel group-hover:text-gold transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
<a className="group flex items-center justify-between bg-obsidian/40 border border-gold/15 p-6 hover:border-gold/40 transition-colors backdrop-blur-sm relative z-10" href="#" target="_blank">
<div className="flex items-center gap-6">
<div className="w-12 h-12 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold/5 transition-colors">
<i className="w-5 h-5" data-lucide="github" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-[10px] font-mono text-steel tracking-widest uppercase mb-1">Github</div>
<div className="font-serif text-xl tracking-tight group-hover:text-gold transition-colors">github.com/carlosvg</div>
</div>
</div>
<i className="w-4 h-4 text-steel group-hover:text-gold transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
<a className="group flex items-center justify-between bg-obsidian/40 border border-gold/15 p-6 hover:border-gold/40 transition-colors backdrop-blur-sm relative z-10" href="#" target="_blank">
<div className="flex items-center gap-6">
<div className="w-12 h-12 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold/5 transition-colors">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-[10px] font-mono text-steel tracking-widest uppercase mb-1">LinkedIn</div>
<div className="font-serif text-xl tracking-tight group-hover:text-gold transition-colors">linkedin.com/in/carlosmagnus</div>
</div>
</div>
<i className="w-4 h-4 text-steel group-hover:text-gold transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>
</main>

<footer className="border-t border-gold/15 bg-obsidian relative z-20">
<div className="max-w-[1280px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<span className="border border-gold/30 px-2 py-1 text-xs font-mono text-gold tracking-widest">CM</span>
<div>
<div className="text-sm font-sans tracking-wide text-ivory">Carlos Magnus</div>
<div className="text-[10px] font-mono text-steel tracking-widest uppercase">EX SILENTIO, AUCTORITAS</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-[10px] font-mono text-steel tracking-widest uppercase text-center sm:text-left">
<span>MMXXVI</span>
<span className="hidden sm:inline-block h-px w-8 bg-gold/20"></span>
<span>Construído com Intenção</span>
<span className="hidden sm:inline-block h-px w-8 bg-gold/20"></span>
<a className="hover:text-gold transition-colors flex items-center gap-2" href="#">Ao Topo <i className="w-3 h-3" data-lucide="arrow-up" strokeWidth="1.5"></i></a>
</div>
</div>
</footer>


    </>
  );
}
