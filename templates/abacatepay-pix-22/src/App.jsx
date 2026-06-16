import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons();
    
    document.querySelectorAll('.card-shine').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-background to-background blur-[100px] opacity-50"></div>
<div className="bg-grid absolute inset-0 opacity-60"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-xl transition-all duration-300 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
<div className="w-8 h-8 relative">
<svg className="w-8 h-8" fill="none" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" fill="#1a472a" r="18"></circle>
<ellipse cx="20" cy="20" fill="#22c55e" rx="12" ry="16"></ellipse>
<circle cx="20" cy="12" fill="#1a472a" r="3"></circle>
</svg>
</div>
<span className="text-sm font-medium tracking-tight text-white">AbacatePay</span>
</div>
<div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-neutral-400">
<a className="transition-colors hover:text-white" href="#">Produto</a>
<a className="transition-colors hover:text-white" href="#">Desenvolvedores</a>
<a className="transition-colors hover:text-white" href="#">Preços</a>
<a className="transition-colors hover:text-white" href="#">Documentação</a>
</div>
<div className="flex items-center gap-3">
<a className="text-[13px] font-medium transition-colors px-2 hidden sm:block text-neutral-400 hover:text-white" href="#">Entrar</a>
<button className="group relative px-4 py-1.5 rounded-full text-[13px] font-medium transition-all overflow-hidden bg-green-500 text-black hover:bg-green-400">
<span className="relative z-10 flex items-center gap-1">
                    Criar conta grátis
                </span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[beam_1s_infinite]"></div>
</button>
</div>
</div>
</nav>

<main className="flex flex-col text-center max-w-[90rem] z-10 mx-auto pt-32 px-4 pb-20 relative items-center">

<div className="animate-fade-up delay-100 mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md shadow-[0_0_15px_-3px_rgba(34,197,94,0.3)] border-green-500/20 bg-green-500/5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[11px] font-medium tracking-wide uppercase text-green-400">API 100% Online • 99.9% Uptime</span>
</div>
</div>

<h1 className="animate-fade-up delay-200 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95] mb-8 text-white">
        Pagamentos via Pix <br/>
<span className="font-serif italic font-light text-green-400">instantâneos.</span>
</h1>
<p className="animate-fade-up delay-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 font-light text-neutral-400">
        Integre pagamentos Pix em minutos. API simples, taxas transparentes e dinheiro na conta em segundos. Feito para desenvolvedores e empresas que querem escalar.
    </p>

<div className="animate-fade-up delay-500 flex flex-col sm:flex-row items-center gap-4 mb-16">
<button className="group relative h-12 px-8 rounded-full font-medium text-sm transition-all overflow-hidden flex items-center gap-2 bg-green-500 text-black hover:bg-green-400">
<span className="relative z-10">Começar agora — é grátis</span>
<svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14m-7-7 7 7-7 7"></path></svg>
</button>
<button className="h-12 px-8 rounded-full border font-medium text-sm transition-all border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 flex items-center gap-2">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            Ver documentação
        </button>
</div>

<div className="animate-fade-up delay-500 relative w-full max-w-3xl mx-auto group mb-24">
<div className="relative bg-[#0F0F11] rounded-xl border shadow-2xl overflow-hidden border-white/10">

<div className="p-4 border-b flex items-center gap-3 border-white/5 bg-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<span className="ml-2 text-[11px] font-mono text-neutral-500">criar-cobranca.js</span>
<div className="ml-auto">
<span className="inline-flex items-center h-5 px-2 rounded border font-mono text-[10px] text-green-500 border-green-500/20 bg-green-500/10">200 OK</span>
</div>
</div>

<div className="p-6 font-mono text-sm leading-relaxed text-left overflow-x-auto">
<div className="text-neutral-500">// Crie uma cobrança Pix em 3 linhas</div>
<div className="mt-2">
<span className="text-purple-400">const</span> <span className="text-blue-400">cobranca</span> = <span className="text-purple-400">await</span> <span className="text-yellow-400">abacate</span>.<span className="text-green-400">pixCharges</span>.<span className="text-green-400">create</span>({</div>
<div className="pl-4 text-neutral-300">amount: <span className="text-orange-400">9990</span>,</div>
<div className="pl-4 text-neutral-300">description: <span className="text-green-300">'Plano Premium'</span></div>
<div>});</div>
<div className="mt-4 text-neutral-500">// Retorno instantâneo com QR Code</div>
<div className="mt-1">
<span className="text-neutral-500">→</span> <span className="text-neutral-400">{</span> <span className="text-blue-300">qrCode</span>: <span className="text-green-300">"00020126..."</span>, <span className="text-blue-300">id</span>: <span className="text-green-300">"pix_abc123"</span> <span className="text-neutral-400">}</span>
</div>
</div>

<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-green-500/20 blur-[80px]"></div>
</div>

<div className="absolute -right-8 top-10 w-28 h-28 rounded-xl border bg-[#0F0F11]/80 backdrop-blur-md p-4 animate-float border-white/5" style={{animationDelay: '1s'}}>
<div className="w-full h-full flex flex-col items-center justify-center">
<div className="text-[10px] text-neutral-500 mb-2">Tempo médio</div>
<div className="text-2xl font-semibold text-green-400">~3s</div>
<div className="text-[9px] text-neutral-600 mt-1">para receber</div>
</div>
</div>
<div className="absolute -left-6 bottom-8 w-36 h-14 rounded-xl border bg-[#0F0F11]/80 backdrop-blur-md p-3 animate-float flex items-center gap-3 border-white/5" style={{animationDelay: '2s'}}>
<div className="w-9 h-9 rounded-full flex items-center justify-center bg-green-500/20">
<svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<div className="flex flex-col">
<span className="text-[11px] font-medium text-white">Pix Recebido</span>
<span className="text-[9px] text-green-400">+ R$ 99,90</span>
</div>
</div>
</div>

<div className="w-full max-w-4xl mx-auto opacity-40 hover:opacity-80 transition-opacity duration-500">
<p className="text-xs text-neutral-600 mb-6 uppercase tracking-widest">Empresas que confiam na AbacatePay</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
<span className="text-lg font-semibold text-neutral-600">Startup A</span>
<span className="text-lg font-semibold text-neutral-600">E-commerce B</span>
<span className="text-lg font-semibold text-neutral-600">SaaS C</span>
<span className="text-lg font-semibold text-neutral-600">App D</span>
<span className="text-lg font-semibold text-neutral-600">Fintech E</span>
</div>
</div>
</main>

<section className="py-20 px-6 max-w-7xl mx-auto relative">

<div className="mb-16 flex flex-col md:flex-row items-start justify-between gap-8">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">Tudo que você precisa para <span className="font-serif italic text-green-400">receber.</span></h2>
<p className="text-sm md:text-base text-neutral-400">Uma API completa, webhooks em tempo real e dashboard intuitivo. Foque no seu produto, a gente cuida do pagamento.</p>
</div>
<div className="hidden md:block text-right">
<div className="text-xs font-mono text-neutral-500 mb-1">STATUS API</div>
<div className="flex items-center justify-end gap-2 text-green-500 text-xs font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                Operacional
            </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-3 lg:col-span-4 glass rounded-3xl p-8 relative overflow-hidden group card-shine flex flex-col justify-between">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 bg-green-500/10 border-green-500/20 text-green-400">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
</div>
<h3 className="text-lg font-medium mb-2 text-white">API RESTful Moderna</h3>
<p className="text-sm leading-relaxed text-neutral-400">Documentação clara, SDKs em múltiplas linguagens e sandbox para testes. Integre em minutos, não em semanas.</p>
</div>
<div className="mt-6 flex gap-2">
<span className="h-6 px-2 flex items-center justify-center rounded border border-white/10 text-[10px] font-mono bg-white/5 text-neutral-400">Node.js</span>
<span className="h-6 px-2 flex items-center justify-center rounded border border-white/10 text-[10px] font-mono bg-white/5 text-neutral-400">Python</span>
<span className="h-6 px-2 flex items-center justify-center rounded border border-white/10 text-[10px] font-mono bg-white/5 text-neutral-400">PHP</span>
</div>
</div>

<div className="md:col-span-3 lg:col-span-8 glass rounded-3xl p-0 relative overflow-hidden group card-shine">
<div className="absolute inset-0 bg-grid opacity-20"></div>

<div className="absolute inset-0 flex items-center justify-center z-0 opacity-60 group-hover:opacity-100 transition-opacity">
<div className="relative w-full h-full p-8">

<svg className="absolute inset-0 w-full h-full" style={{maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'}}>
<line className="text-green-500/30" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1" x1="20%" x2="45%" y1="50%" y2="30%"></line>
<line className="text-green-500/30" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1" x1="20%" x2="45%" y1="50%" y2="50%"></line>
<line className="text-green-500/30" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1" x1="20%" x2="45%" y1="50%" y2="70%"></line>
<circle className="fill-green-500" cx="20%" cy="50%" r="8"></circle>
<circle className="fill-neutral-600" cx="45%" cy="30%" r="5"></circle>
<circle className="fill-neutral-600" cx="45%" cy="50%" r="5"></circle>
<circle className="fill-neutral-600" cx="45%" cy="70%" r="5"></circle>
</svg>

<div className="absolute left-[12%] top-1/2 -translate-y-1/2 text-[10px] font-mono text-green-400">PIX.PAID</div>
<div className="absolute left-[48%] top-[25%] text-[10px] font-mono text-neutral-500">seu-app.com/webhook</div>
<div className="absolute left-[48%] top-[47%] text-[10px] font-mono text-neutral-500">email-service</div>
<div className="absolute left-[48%] top-[68%] text-[10px] font-mono text-neutral-500">analytics</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#0A0A0B] to-transparent z-10">
<h3 className="text-xl font-medium mb-2 text-white">Webhooks em Tempo Real</h3>
<p className="text-sm max-w-md text-neutral-400">Receba notificações instantâneas de pagamentos. Atualize seu sistema automaticamente assim que o Pix cair na conta.</p>
</div>
</div>

<div className="md:col-span-6 lg:col-span-6 glass rounded-3xl p-8 relative overflow-hidden group card-shine flex flex-col justify-between h-[320px]">
<div className="relative z-20">
<div className="flex items-center justify-between mb-6">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center bg-green-500/10 border-green-500/20 text-green-400">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<span className="text-[10px] font-medium text-green-400">Atualizado agora</span>
</div>
</div>
<h3 className="text-xl font-medium mb-2 text-white">Dashboard Completo</h3>
<p className="text-sm text-neutral-400">Visualize transações, extratos, clientes e métricas em tempo real. Exporte relatórios e gerencie sua operação em um só lugar.</p>
</div>

<div className="absolute right-8 bottom-8 w-32 h-16 flex items-end gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
<div className="w-1/6 h-4 rounded-sm bg-green-500/30"></div>
<div className="w-1/6 h-6 rounded-sm bg-green-500/40"></div>
<div className="w-1/6 h-8 rounded-sm bg-green-500/50"></div>
<div className="w-1/6 h-5 rounded-sm bg-green-500/40"></div>
<div className="w-1/6 h-10 rounded-sm bg-green-500/60"></div>
<div className="w-1/6 h-14 rounded-sm bg-green-500"></div>
</div>
</div>

<div className="md:col-span-6 lg:col-span-6 glass rounded-3xl relative overflow-hidden group card-shine h-[320px]">
<div className="absolute top-0 left-0 w-full h-8 border-b flex items-center px-4 gap-2 bg-white/5 border-white/5">
<svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="ml-2 text-[10px] font-mono text-neutral-500">seguranca.config</span>
</div>
<div className="p-8 mt-8 font-mono text-xs leading-relaxed text-neutral-400">
<p><span className="text-green-400">security</span> {</p>
<p className="pl-4">encryption: <span className="text-blue-400">'AES-256'</span>,</p>
<p className="pl-4">ssl: <span className="text-green-400">true</span>,</p>
<p className="pl-4">pci_dss: <span className="text-green-400">true</span>,</p>
<p className="pl-4">two_factor: <span className="text-green-400">enabled</span>,</p>
<p className="pl-4">fraud_detection: {</p>
<p className="pl-8">ai_powered: <span className="text-green-400">true</span>,</p>
<p className="pl-8">real_time: <span className="text-green-400">true</span></p>
<p className="pl-4">}</p>
<p>}</p>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/90 to-transparent">
<h3 className="text-lg font-medium text-white">Segurança de Banco</h3>
<p className="text-sm text-neutral-500">Criptografia de ponta, conformidade PCI DSS e detecção de fraude em tempo real.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-5xl mx-auto relative border-t border-white/5">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">
            Preços <span className="font-serif italic text-green-400">transparentes.</span>
</h2>
<p className="text-neutral-400 max-w-xl mx-auto">Sem taxa de setup, sem mensalidade. Você só paga pelo que usar.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

<div className="glass rounded-3xl p-8 relative overflow-hidden card-shine">
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<p className="text-sm text-neutral-500">Para quem está começando</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold text-white">0,99%</span>
<span className="text-neutral-500 text-sm ml-1">por transação</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Até R$ 50.000/mês
                </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    API completa
                </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Dashboard básico
                </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Suporte por email
                </li>
</ul>
<button className="w-full h-11 rounded-full border font-medium text-sm transition-all border-white/10 text-white hover:bg-white/5">
                Começar grátis
            </button>
</div>

<div className="relative rounded-3xl p-8 overflow-hidden card-shine bg-gradient-to-b from-green-500/10 to-transparent border border-green-500/20">
<div className="absolute top-4 right-4">
<span className="px-3 py-1 rounded-full text-[10px] font-medium bg-green-500 text-black">POPULAR</span>
</div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">Pro</h3>
<p className="text-sm text-neutral-500">Para empresas em crescimento</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold text-white">0,79%</span>
<span className="text-neutral-500 text-sm ml-1">por transação</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Volume ilimitado
                </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Webhooks avançados
                </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Multi-usuários
                </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Suporte prioritário
                </li>
</ul>
<button className="w-full h-11 rounded-full font-medium text-sm transition-all bg-green-500 text-black hover:bg-green-400">
                Falar com vendas
            </button>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-white/5">
<div className="absolute inset-0 bg-gradient-to-b from-background via-green-950/5 to-background"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 text-white">
            Números que <span className="text-neutral-500">impressionam.</span>
</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-12 text-center">
<div>
<div className="text-4xl md:text-5xl font-serif italic mb-2 text-green-400">R$ 50M+</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Processados</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-serif italic mb-2 text-white">99.9%</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Uptime</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-serif italic mb-2 text-white">~3s</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Tempo médio</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-serif italic mb-2 text-white">500+</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Empresas</div>
</div>
</div>
</div>
</section>

<section className="py-16 pb-16 max-w-5xl mx-auto px-6 border-t border-white/5">
<div className="mb-12">
<div className="text-center mb-12">
<div className="mb-6">
<div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-neutral-500">
<span>DEPOIMENTOS</span>
<span>(03)</span>
</div>
<div className="mt-2 h-px w-full bg-white/10"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-center">
<div className="lg:col-span-7">
<h3 className="text-[32px] sm:text-[48px] lg:text-[64px] leading-[0.9] uppercase font-semibold tracking-tight text-white">
                        Devs <br/>Aprovam.
                    </h3>
</div>
<div className="lg:col-span-5">
<p className="sm:text-lg text-neutral-400 max-w-3xl mb-6">
                        O que desenvolvedores e empresas dizem sobre integrar pagamentos com a AbacatePay.
                    </p>
<div className="flex justify-start">
<a className="inline-flex items-center gap-3 ring-1 ring-white/10 hover:shadow-2xl hover:bg-white/10 transition bg-white/5 rounded-full p-2 shadow" href="#">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-500">
<svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</span>
<span className="px-3 text-sm font-medium text-white">Ver todos os cases</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-sm ring-1 ring-white/10">

<div className="relative overflow-hidden text-neutral-300 bg-[#0A0A0B] p-6">
<div className="flex gap-2 mb-4 items-center">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h3v10H5V9a2 2 0 0 1 2-2Zm9 0h3v10h-5V9a2 2 0 0 1 2-2Z"></path>
</svg>
</div>
<div className="flex items-center gap-1 mb-4 text-green-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
<p className="text-sm leading-relaxed mb-6">"Integrei em 30 minutos. A documentação é excelente e o SDK de Node.js funcionou de primeira. Melhor API de pagamentos que já usei."</p>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-white">Lucas S.</div>
<div className="text-xs mt-1 text-neutral-500">Dev Full-Stack, SaaS</div>
</div>
<div className="w-8 h-8 rounded-full border bg-neutral-800 border-white/10"></div>
</div>
</div>

<div className="relative overflow-hidden text-black bg-green-400 p-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-6 h-6 rounded-full border bg-green-600 border-black/10"></div>
<div>
<div className="text-sm font-medium">Marina R.</div>
<div className="text-xs text-black/60">CTO, Fintech</div>
</div>
</div>
<div className="flex gap-1 text-black mb-4 items-center">
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
<p className="leading-relaxed relative z-10 text-sm font-medium">"Migramos de outra solução e o suporte foi excepcional. Webhooks confiáveis, zero downtime e taxas menores. Win-win."</p>
</div>

<div className="relative overflow-hidden text-neutral-300 bg-[#0A0A0B] p-6">
<div className="flex items-center gap-2 mb-4">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h3v10H5V9a2 2 0 0 1 2-2Zm9 0h3v10h-5V9a2 2 0 0 1 2-2Z"></path>
</svg>
</div>
<div className="flex items-center gap-1 mb-4 text-green-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
<p className="text-sm leading-relaxed mb-6">"O dashboard é muito bem feito. Consigo ver todas as transações em tempo real e exportar relatórios com um clique."</p>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-white">Pedro H.</div>
<div className="text-xs mt-1 text-neutral-500">Founder, E-commerce</div>
</div>
<div className="w-8 h-8 rounded-full border bg-neutral-800 border-white/10"></div>
</div>
</div>

<div className="lg:col-span-3 border-t border-white/10">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
<div className="text-white bg-[#0A0A0B] border-white/10 border-r p-6">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">30min</div>
<div className="text-xs text-neutral-500">Tempo médio de integração</div>
</div>
<div className="p-6 border-r bg-[#0A0A0B] text-white border-white/10">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">24/7</div>
<div className="text-xs text-neutral-500">Suporte disponível</div>
</div>
<div className="p-6 bg-[#0A0A0B] text-white">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">100%</div>
<div className="text-xs text-neutral-500">Satisfação dos clientes</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">
            Feito por devs, <span className="font-serif italic text-green-400">para devs.</span>
</h2>
<p className="text-neutral-400 max-w-xl mx-auto">Documentação completa, SDKs em múltiplas linguagens e sandbox para testes. Tudo que você precisa para integrar rápido.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="glass rounded-2xl p-6 text-center card-shine">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
<svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
</div>
<h4 className="text-sm font-medium text-white mb-1">Documentação</h4>
<p className="text-xs text-neutral-500">Guias completos</p>
</div>
<div className="glass rounded-2xl p-6 text-center card-shine">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
<svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
</div>
<h4 className="text-sm font-medium text-white mb-1">SDKs</h4>
<p className="text-xs text-neutral-500">Node, Python, PHP</p>
</div>
<div className="glass rounded-2xl p-6 text-center card-shine">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
<svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
<h4 className="text-sm font-medium text-white mb-1">Sandbox</h4>
<p className="text-xs text-neutral-500">Teste à vontade</p>
</div>
<div className="glass rounded-2xl p-6 text-center card-shine">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
<svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
<h4 className="text-sm font-medium text-white mb-1">Suporte</h4>
<p className="text-xs text-neutral-500">Discord &amp; Email</p>
</div>
</div>
</section>

<footer className="relative pt-32 pb-12 bg-background overflow-hidden">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center mb-24">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 text-white">
                Pronto para <span className="font-serif italic text-green-400">integrar?</span>
</h2>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="group relative h-12 px-8 rounded-full font-medium text-sm transition-all overflow-hidden flex items-center gap-2 bg-green-500 text-black hover:bg-green-400">
<span className="relative z-10">Criar conta grátis</span>
<svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14m-7-7 7 7-7 7"></path></svg>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[beam_0.5s_infinite]"></div>
</button>
<button className="h-12 px-8 rounded-full border font-medium text-sm transition-all border-white/10 text-neutral-400 hover:text-white hover:bg-white/5">
                    Falar com vendas
                </button>
</div>
<div className="mt-6 flex flex-col gap-1 text-[11px] text-neutral-600">
<span>Sem cartão de crédito necessário.</span>
<span>Configure em menos de 30 minutos.</span>
</div>
</div>
<div className="border-t pt-12 flex flex-col md:flex-row justify-between gap-8 border-white/5">
<div className="flex items-center gap-2">
<svg className="w-5 h-5" fill="none" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" fill="#1a472a" r="18"></circle>
<ellipse cx="20" cy="20" fill="#22c55e" rx="12" ry="16"></ellipse>
<circle cx="20" cy="12" fill="#1a472a" r="3"></circle>
</svg>
<span className="text-xs text-neutral-600">© 2024 AbacatePay. Todos os direitos reservados.</span>
</div>
<div className="flex gap-8 text-xs text-neutral-500 font-medium">
<a className="transition-colors hover:text-white" href="#">Documentação</a>
<a className="transition-colors hover:text-white" href="#">Status</a>
<a className="transition-colors hover:text-white" href="#">GitHub</a>
<a className="transition-colors hover:text-white" href="#">Twitter</a>
<a className="transition-colors hover:text-white" href="#">Termos</a>
<a className="transition-colors hover:text-white" href="#">Privacidade</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
