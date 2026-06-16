import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
flux: {
black: '#000000',
orange: '#FF5C00',
dark: '#0A0A0A',
border: '#262626',
text: '#A3A3A3',
active: '#00FF88'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
display: ['Space Grotesk', 'sans-serif'],
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
}
}
}
}



        lucide.createIcons();
        
        // Simple UTC Clock Script
        function updateTime() {
            const now = new Date();
            const timeString = now.toISOString().split('T')[1].split('.')[0];
            document.getElementById('time').textContent = timeString + " UTC";
        }
        setInterval(updateTime, 1000);
        updateTime();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-flux-border bg-flux-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-2 h-8 bg-flux-orange glow-orange"></div>
<div className="">
<span className="font-display font-semibold text-xl tracking-tight uppercase">Fluxo</span>
<span className="text-flux-text block text-xs tracking-widest font-mono">AUTOMAÇÕES</span>
</div>
</div>
<div className="hidden md:flex text-flux-text text-sm tracking-widest font-mono gap-x-8 gap-y-8 items-center">
<a className="hover:text-flux-orange transition-colors duration-300 hover:glow-text" href="#services">[ SERVIÇOS ]</a>
<a className="hover:text-flux-orange transition-colors duration-300 hover:glow-text" href="/#services">[ SOLUÇÕES ]</a>
<a className="hover:text-flux-orange transition-colors duration-300 hover:glow-text" href="#results">[ PROTOCOLO ]</a>
</div>
<button className="hidden md:flex group items-center gap-3 border border-flux-border px-6 py-2 hover:border-flux-orange transition-all duration-300 bg-flux-dark/50">
<span className="font-mono text-xs uppercase tracking-widest group-hover:text-flux-orange text-white">Área do Cliente</span>
<svg aria-hidden="true" className="lucide lucide-lock w-4 h-4 text-flux-text group-hover:text-flux-orange transition-colors" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</button>
</div>
</nav>

<section className="lg:pt-52 lg:pb-32 border-flux-border overflow-hidden border-b pt-40 pr-6 pb-20 pl-6 relative">

<div className="absolute top-40 right-10 opacity-20 hidden lg:block">
<div className="border border-flux-border p-4 w-64">
<div className="flex justify-between items-center mb-2 font-mono text-xs text-flux-orange">
<span>SYS_STATUS</span>
<span className="animate-pulse">ONLINE</span>
</div>
<div className="h-px w-full bg-flux-border mb-2"></div>
<div className="font-mono text-xs text-flux-text">
<div className="flex justify-between mb-1"><span>UPTIME</span> <span>99.9%</span></div>
<div className="flex justify-between"><span>LATENCY</span> <span>12ms</span></div>
</div>
</div>
</div>
<div className="z-10 max-w-7xl mr-auto ml-auto relative">
<div className="text-flux-orange flex gap-2 text-sm tracking-widest font-mono mb-6 gap-x-2 gap-y-2 items-center">
<span className="w-2 h-2 rounded-full bg-flux-orange animate-pulse"></span>
                // SEQUENCE INITIATED
            </div>
<h1 className="font-display text-5xl lg:text-7xl font-semibold uppercase leading-none tracking-tight mb-8">
                Automação de <span className="text-transparent bg-clip-text bg-gradient-to-r to-neutral-500 from-white">Alto Impacto</span><br/>
                Para Negócios Digitais
            </h1>
<p className="text-lg max-w-2xl mb-12 font-light leading-relaxed text-neutral-400">
                Salvamos vidas através da automação. Substitua o caos operacional por sistemas de precisão militar. 
                Seja com serviços white-glove ou consultorias estratégicas para escala agressiva.
            </p>
<div className="flex flex-col sm:flex-row gap-6">
<a className="group uppercase transition-all duration-300 glow-orange flex items-center justify-center gap-3 hover:bg-orange-600 text-sm tracking-widest font-mono bg-gradient-to-br from-orange-400 to-orange-600 pt-4 pr-8 pb-4 pl-8 relative" href="#contact">
<span className="">Agendar Consultoria Estratégica</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group px-8 py-4 border border-flux-border font-mono uppercase tracking-widest text-sm transition-all duration-300 backdrop-blur-sm flex items-center justify-center text-white hover:border-white bg-black/50" href="#cases">
<span className="" onclick="window.location.href='/#services'" role="button">Conhecer Nossas Soluções</span>
</a>
</div>
</div>
</section>

<div className="border-b border-flux-border bg-flux-dark/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="flex items-center gap-6 group">
<div className="w-16 h-16 border border-flux-border flex items-center justify-center group-hover:border-flux-orange transition-colors">
<svg aria-hidden="true" className="lucide lucide-rocket w-8 h-8 group-hover:text-flux-orange transition-colors text-white" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<div className="">
<div className="font-display text-4xl font-semibold tracking-tight">228<span className="text-flux-orange">+</span></div>
<div className="font-mono text-sm text-neutral-500 uppercase tracking-widest mt-1">Lançamentos Automatizados</div>
</div>
</div>

<div className="flex items-center gap-6 group">
<div className="w-16 h-16 border border-flux-border flex items-center justify-center group-hover:border-flux-orange transition-colors">
<svg aria-hidden="true" className="lucide lucide-users w-8 h-8 group-hover:text-flux-orange transition-colors text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="">
<div className="font-display text-4xl font-semibold tracking-tight">15<span className="text-flux-orange">+</span></div>
<div className="font-mono text-sm text-neutral-500 uppercase tracking-widest mt-1">Programas de Mentoria</div>
</div>
</div>

<div className="flex items-center gap-6 group">
<div className="w-16 h-16 border border-flux-border flex items-center justify-center group-hover:border-flux-orange transition-colors">
<svg aria-hidden="true" className="lucide lucide-shield-check w-8 h-8 group-hover:text-flux-orange transition-colors text-white" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<div className="font-display text-4xl font-semibold tracking-tight">2019</div>
<div className="font-mono text-sm text-neutral-500 uppercase tracking-widest mt-1">Operando em Stealth Mode</div>
</div>
</div>
</div>
</div>
</div>

<section className="pt-24 pr-6 pb-24 pl-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex border-flux-border border-b mb-16 pb-6 items-end justify-between">
<div className="">
<h2 className="font-display text-3xl md:text-5xl font-semibold uppercase tracking-tight mb-2">Arquitetura de Soluções</h2>
<p className="text-flux-orange text-sm tracking-widest font-mono">// MODULE_SELECTION</p>
</div>
<div className="hidden md:block text-flux-text text-xs font-mono text-right">
  SISTEMA PRONTO<br/>
                    AGUARDANDO ENTRADA...
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative p-8 border border-flux-border backdrop-blur hover:border-flux-orange/50 transition-all duration-300 bg-neutral-900/20 hover:bg-neutral-900/40">
<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4 text-flux-orange" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<svg aria-hidden="true" className="lucide lucide-zap w-8 h-8 mb-6 group-hover:text-flux-orange transition-colors text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h3 className="uppercase text-xl tracking-wide font-display mb-3">Automações de lançamento</h3>
<p className="text-lg font-light leading-snug text-neutral-400">Automação end-to-end para lançamentos digitais de 7 dígitos.</p>
</div>

<div className="group relative p-8 border border-flux-border backdrop-blur hover:border-flux-orange/50 transition-all duration-300 bg-neutral-900/20 hover:bg-neutral-900/40">
<svg aria-hidden="true" className="lucide lucide-graduation-cap w-8 h-8 mb-6 group-hover:text-flux-orange transition-colors text-white" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<h3 className="uppercase text-xl tracking-wide font-display mb-3">Sistemas de Mentoria</h3>
<p className="text-lg font-light leading-snug text-neutral-400">CRM e engajamento automatizado para programas de mentoria.</p>
</div>

<div className="group relative p-8 border border-flux-border backdrop-blur hover:border-flux-orange/50 transition-all duration-300 col-span-1 md:col-span-2 bg-neutral-900/20 hover:bg-neutral-900/40">
<div className="flex flex-col h-full justify-between">
<div className="">
<div className="flex justify-between items-start">
<svg aria-hidden="true" className="lucide lucide-building-2 w-8 h-8 mb-6 group-hover:text-flux-orange transition-colors text-white" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
<span className="font-mono text-xs text-flux-active border border-flux-active/30 px-2 py-1 bg-flux-active/10 rounded-sm">ENTERPRISE</span>
</div>
<h3 className="uppercase text-xl tracking-wide font-display mb-3">Automação B2B</h3>
<p className="text-lg font-light leading-snug max-w-md text-neutral-400">Integração profunda de workflows corporativos. Otimização de processos complexos para ganho de eficiência em larga escala.</p>
</div>
</div>
</div>

<div className="group relative p-8 border border-flux-border backdrop-blur hover:border-flux-orange/50 transition-all duration-300 bg-neutral-900/20 hover:bg-neutral-900/40">
<svg aria-hidden="true" className="lucide lucide-store w-8 h-8 mb-6 group-hover:text-flux-orange transition-colors text-white" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
<h3 className="uppercase text-xl tracking-wide font-display mb-3">Soluções para PME</h3>
<p className="text-lg font-light leading-snug text-neutral-400">Sistemas escaláveis para empresas em crescimento acelerado.</p>
</div>

<div className="group relative p-8 border border-flux-border backdrop-blur hover:border-flux-orange/50 transition-all duration-300 bg-neutral-900/20 hover:bg-neutral-900/40">
<svg aria-hidden="true" className="lucide lucide-bar-chart-3 w-8 h-8 mb-6 group-hover:text-flux-orange transition-colors text-white" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<h3 className="uppercase text-xl tracking-wide font-display mb-3">Tráfego pago automatizado</h3>
<p className="text-lg font-light leading-snug text-neutral-400">Gestão de dados de ads e automação de fluxo de leads.</p>
</div>

<div className="group relative p-8 border border-flux-border backdrop-blur hover:border-flux-orange/50 transition-all duration-300 bg-neutral-900/20 hover:bg-neutral-900/40">
<svg aria-hidden="true" className="lucide lucide-message-square w-8 h-8 mb-6 group-hover:text-flux-orange transition-colors text-white" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<h3 className="uppercase text-xl tracking-wide font-display mb-3">WhatsApp Engine</h3>
<p className="text-lg font-light leading-snug text-neutral-400">Mensageria de negócio e recuperação de vendas 24/7.</p>
</div>

<div className="group relative p-8 border border-flux-border backdrop-blur hover:border-flux-orange/50 transition-all duration-300 col-span-1 md:col-span-2 lg:col-span-1 bg-neutral-900/20 hover:bg-neutral-900/40">
<svg aria-hidden="true" className="lucide lucide-webhook w-8 h-8 mb-6 group-hover:text-flux-orange transition-colors text-white" data-lucide="webhook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path></svg>
<h3 className="font-display text-xl uppercase tracking-wide mb-3">API Integration</h3>
<p className="text-lg font-light leading-snug text-neutral-400">Conexão customizada entre ferramentas proprietárias.</p>
</div>
</div>
<div className="mt-4 p-4 border border-flux-border border-dashed flex items-center justify-between text-neutral-500 font-mono text-sm">
<span className="">[ + ] E MAIS: DESENVOLVIMENTO DE SISTEMAS CUSTOMIZADOS</span>
<span className="hidden md:inline">SYSTEM_ID: FLX-2030</span>
</div>
</div>
</section>

<section className="border-y border-flux-border bg-black pt-24 pb-24" id="method">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
<div className="">
<div className="font-mono text-flux-orange mb-2 tracking-widest text-sm">// EXECUTION_PROTOCOL</div>
<h2 className="font-display text-4xl md:text-5xl font-semibold uppercase tracking-tight">Como Operamos</h2>
</div>
<div className="font-mono text-flux-text max-w-md text-lg leading-relaxed">
                Nossa metodologia elimina a adivinhação. Implementamos protocolos testados em centenas de cenários de
                alta pressão.
            </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-flux-border -z-10"></div>

<div className="pt-4 pr-4 bg-black">
<div className="w-16 h-16 border border-flux-border flex items-center justify-center font-display text-xl font-bold mb-8 shadow-[0_0_15px_rgba(0,0,0,1)] relative z-10 bg-black text-white">
                    01
                </div>
<h3 className="font-display text-2xl uppercase tracking-wide mb-4 text-white">Diagnóstico Técnico</h3>
<p className="text-lg font-light leading-relaxed text-neutral-400">
                    Mapeamento completo da infraestrutura atual. Identificação de gargalos, vazamentos de receita e
                    oportunidades de automação imediata.
                </p>
</div>

<div className="pt-4 pr-4 bg-black">
<div className="w-16 h-16 bg-flux-orange flex items-center justify-center font-display text-xl font-bold mb-8 glow-orange relative z-10 text-black">
                    02
                </div>
<h3 className="font-display text-2xl uppercase tracking-wide mb-4 text-white">Implementação</h3>
<p className="text-lg font-light leading-relaxed text-neutral-400">
                    Deploy rápido de sistemas. Configuração de APIs, webhooks e fluxos de dados. Testes de estresse para
                    garantir estabilidade.
                </p>
</div>

<div className="pt-4 pr-4 bg-black">
<div className="w-16 h-16 border border-flux-border flex items-center justify-center font-display text-xl font-bold mb-8 relative z-10 bg-black text-white">
                    03
                </div>
<h3 className="font-display text-2xl uppercase tracking-wide mb-4 text-white">Otimização Contínua</h3>
<p className="text-lg font-light leading-relaxed text-neutral-400">
                    Monitoramento de métricas em tempo real. Ajustes finos baseados em dados para maximizar conversão e
                    eficiência operacional.
                </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] -z-10 from-neutral-800/20 via-black to-black"></div>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-display text-3xl md:text-5xl font-semibold uppercase tracking-tight mb-4">Integridade do Sistema</h2>
<p className="font-mono text-flux-text uppercase tracking-widest">Validado por líderes do mercado</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="border border-flux-border p-8 backdrop-blur relative bg-neutral-900/30">
<div className="bg-gradient-to-r from-flux-orange to-transparent w-full h-1 absolute top-0 left-0"></div>
<div className="flex gap-1 mb-6 gap-x-1 gap-y-1">
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 text-flux-orange fill-flux-orange" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 text-flux-orange fill-flux-orange" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 text-flux-orange fill-flux-orange" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 text-flux-orange fill-flux-orange" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 text-flux-orange fill-flux-orange" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="font-display text-xl uppercase leading-relaxed mb-6">"A Fluxo transformou nosso caos de planilhas em uma máquina de vendas autônoma. O ROI foi imediato."</p>
<div className="flex items-center gap-4 border-t border-flux-border pt-4">
<div className="w-10 h-10 rounded-sm flex items-center justify-center bg-neutral-800">
<span className="font-mono text-xs font-bold">CEO</span>
</div>
<div className="">
<div className="font-mono text-sm uppercase text-white">Empresa de EdTech</div>
<div className="font-mono text-xs text-flux-active">VERIFIED_CLIENT</div>
</div>
</div>
</div>

<div className="border border-flux-border p-8 backdrop-blur relative bg-neutral-900/30">
<div className="bg-gradient-to-r from-flux-orange to-transparent w-full h-1 absolute top-0 left-0"></div>
<div className="flex gap-1 mb-6 gap-x-1 gap-y-1">
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 text-flux-orange fill-flux-orange" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 text-flux-orange fill-flux-orange" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 text-flux-orange fill-flux-orange" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 text-flux-orange fill-flux-orange" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 text-flux-orange fill-flux-orange" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="font-display text-xl uppercase leading-relaxed mb-6">"A capacidade técnica da equipe é de outro nível. Automatizaram processos que achávamos impossíveis."</p>
<div className="flex items-center gap-4 border-t border-flux-border pt-4">
<div className="w-10 h-10 rounded-sm flex items-center justify-center bg-neutral-800">
<span className="font-mono text-xs font-bold">COO</span>
</div>
<div className="">
<div className="font-mono text-sm uppercase text-white">Agência de Lançamentos</div>
<div className="font-mono text-xs text-flux-active">VERIFIED_CLIENT</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-flux-border bg-neutral-900/10 border-t pt-24 pr-6 pb-24 pl-6" id="contact">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-block border border-flux-active/30 bg-flux-active/5 px-3 py-1 mb-8 rounded-sm">
<span className="text-flux-active animate-pulse text-xs tracking-widest font-mono">● AGENDA ABERTA PARA Q3</span>
</div>
<h2 className="font-display text-5xl md:text-7xl font-semibold uppercase tracking-tight mb-8">
                Pronto para escalar<br/>com automação?
            </h2>
<p className="text-xl font-light text-neutral-400 max-w-2xl mr-auto mb-12 ml-auto">
                Pare de perder tempo com tarefas repetitivas. Deixe a Fluxo construir a infraestrutura que seu negócio precisa para dominar o mercado.
            </p>
<div className="flex flex-col items-center gap-6">
<button className="w-full md:w-auto px-12 py-5 bg-flux-orange font-mono uppercase tracking-widest text-base transition-all duration-300 glow-orange flex items-center justify-center gap-3 text-white hover:bg-orange-600">
<svg aria-hidden="true" className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                    Agendar Diagnóstico Gratuito
                </button>
<div className="flex items-center gap-6 text-neutral-500 font-mono text-xs uppercase tracking-widest mt-4">
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check w-3 h-3 text-flux-orange" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Confidencialidade</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check w-3 h-3 text-flux-orange" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Garantia de Entrega</span>
</div>
</div>
</div>
</section>

<footer className="border-t border-flux-border pt-16 pb-8 px-6 bg-black">
<div className="max-w-7xl mr-auto ml-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<span className="font-display font-semibold text-2xl tracking-tight uppercase block mb-4">Fluxo Automações</span>
<p className="text-neutral-500 font-mono text-sm max-w-sm mb-6">
                        Infraestrutura digital de elite para negócios que não aceitam falhas.
                    </p>
<div className="flex gap-4">
<a className="border-flux-border flex items-center justify-center hover:border-flux-orange hover:text-flux-orange transition-colors w-10 h-10 border" href="https://www.instagram.com/automacoesparalancamentos/" target="_blank">
<svg aria-hidden="true" className="lucide lucide-instagram w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 92, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="border-flux-border flex items-center justify-center hover:border-flux-orange hover:text-flux-orange transition-colors w-10 h-10 border" href="#">
<svg aria-hidden="true" className="lucide lucide-linkedin w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 92, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
<div className="">
<h4 className="font-mono uppercase tracking-widest text-xs mb-6 text-white">Sitemap</h4>
<ul className="space-y-3 font-mono text-sm text-neutral-500">
<li className=""><a className="hover:text-flux-orange transition-colors" href="#">Início</a></li>
<li className=""><a className="hover:text-flux-orange transition-colors" href="#services">Serviços</a></li>
<li className=""><a className="hover:text-flux-orange transition-colors" href="#services">Soluções</a></li>
<li className=""><a className="hover:text-flux-orange transition-colors" href="#contact">Contato</a></li>
</ul>
</div>
<div className="">
<h4 className="font-mono uppercase tracking-widest text-xs mb-6 text-white">Legal</h4>
<ul className="space-y-3 font-mono text-sm text-neutral-500">
<li className=""><a className="hover:text-flux-orange transition-colors" href="/terms">Termos de Uso</a></li>
<li className=""><a className="hover:text-flux-orange transition-colors" href="#">Privacidade</a></li>
<li><a className="hover:text-flux-orange transition-colors" href="#">SLA</a></li>
</ul>
</div>
</div>
<div className="border-t border-flux-border pt-8 flex flex-col md:flex-row justify-between items-center font-mono text-xs uppercase tracking-wider text-neutral-600">
<div>© 2019-2024 Fluxo Automações. All Systems Nominal.</div>
<div className="mt-4 md:mt-0 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-flux-active"></span>
                    Server Time: <span id="time">01:47:23 UTC</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
