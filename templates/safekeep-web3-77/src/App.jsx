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
      

<div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00D0840A] via-[#0A0A0A] to-[#0A0A0A] pointer-events-none"></div>

<header className="fixed top-0 w-full z-50 bg-[#0A0A0A]/70 backdrop-blur-md border-b border-[#232323]">
<div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#00D084] text-xl" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-semibold tracking-tighter text-lg">SafeKeep</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors" href="#como-funciona">Como funciona</a>
<a className="text-sm font-medium text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors" href="#diferenciais">Recursos</a>
<a className="text-sm font-medium text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors" href="#seguranca">Segurança</a>
<a className="text-sm font-medium text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors" href="#faq">FAQ</a>
</nav>
<div>
<button className="bg-[#00D084] text-[#0A0A0A] hover:bg-[#00D084]/90 rounded-md text-sm font-medium px-4 py-2 transition-colors shadow-[0_0_20px_rgba(0,208,132,0.15)] flex items-center gap-2">
<iconify-icon icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
                    Conectar Wallet
                </button>
</div>
</div>
</header>
<main className="flex-grow pt-16">

<section className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 relative">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#232323] mb-8">
<iconify-icon className="text-[#A1A1AA] text-xs" icon="solar:link-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-[#A1A1AA]">Powered by Solana Mainnet</span>
</div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#FAFAFA] leading-tight max-w-3xl">
                    Proteja e programe o seu <br className="hidden md:block"/>
<span className="text-[#00D084]">patrimônio on-chain.</span>
</h1>
<p className="text-lg md:text-xl text-[#A1A1AA] mt-6 max-w-2xl font-normal leading-relaxed">
                    Contratos inteligentes autônomos que garantem a transferência segura dos seus ativos para beneficiários, sem intermediários e sem perder o controle.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-[#00D084] text-[#0A0A0A] hover:bg-[#00D084]/90 rounded-md text-base font-medium px-6 py-3 transition-colors shadow-[0_0_20px_rgba(0,208,132,0.15)] flex items-center justify-center gap-2">
                        Proteger minha wallet
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto bg-[#111111] text-[#FAFAFA] hover:bg-[#1A1A1A] border border-[#232323] hover:border-[#333333] rounded-md text-base font-medium px-6 py-3 transition-colors flex items-center justify-center gap-2">
                        Ver como funciona
                    </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-[#71717A]">
<iconify-icon className="text-xl" icon="solar:mouse-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</section>

<section className="border-y border-[#232323] bg-[#111111]/30 py-10">
<div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#232323]">
<div className="flex flex-col pl-0 md:pl-4">
<span className="text-3xl font-semibold tracking-tight text-[#FAFAFA] font-mono">$12.4M</span>
<span className="text-sm font-medium text-[#71717A] mt-1">TVL Protegido</span>
</div>
<div className="flex flex-col pl-4 md:pl-8">
<span className="text-3xl font-semibold tracking-tight text-[#FAFAFA] font-mono">1,402</span>
<span className="text-sm font-medium text-[#71717A] mt-1">Vaults Ativos</span>
</div>
<div className="flex flex-col pl-4 md:pl-8">
<span className="text-3xl font-semibold tracking-tight text-[#00D084] font-mono">4.2%</span>
<span className="text-sm font-medium text-[#71717A] mt-1">Yield Médio Gerado</span>
</div>
<div className="flex flex-col pl-4 md:pl-8 justify-center">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#A1A1AA] text-lg" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#FAFAFA]">Auditado por</span>
</div>
<span className="text-sm font-medium text-[#71717A] mt-1">OtterSec &amp; Zellic</span>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-4">
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-[#111111] border border-[#232323] rounded-xl p-8 flex flex-col relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#EF4444] to-transparent opacity-20"></div>
<div className="w-12 h-12 rounded-full bg-[#EF4444]/10 flex items-center justify-center border border-[#EF4444]/20 mb-6">
<iconify-icon className="text-[#EF4444] text-xl" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#FAFAFA] mb-2">Sem planejamento on-chain</h3>
<p className="text-sm text-[#A1A1AA] mb-8">Ativos digitais são perdidos todos os dias devido à falta de infraestrutura sucessória nativa.</p>
<ul className="flex flex-col gap-4 mt-auto">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#71717A] text-lg shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#A1A1AA]">Chaves privadas perdidas tornam fundos inacessíveis para sempre.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#71717A] text-lg shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#A1A1AA]">Processos legais off-chain lentos, caros e incompatíveis com DeFi.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#71717A] text-lg shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#A1A1AA]">Exposição de saldos e identidade durante processos tradicionais.</span>
</li>
</ul>
</div>

<div className="bg-[#111111] border border-[#232323] rounded-xl p-8 flex flex-col relative overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.2)] ring-1 ring-[#00D084]/20">
<div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#00D08414] to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
<div className="w-12 h-12 rounded-full bg-[#00D084]/10 flex items-center justify-center border border-[#00D084]/20 mb-6 relative z-10">
<iconify-icon className="text-[#00D084] text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#FAFAFA] mb-2 relative z-10">Com SafeKeep</h3>
<p className="text-sm text-[#A1A1AA] mb-8 relative z-10">Uma camada de segurança autônoma que garante que seus ativos cheguem a quem importa.</p>
<ul className="flex flex-col gap-4 mt-auto relative z-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00D084] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#FAFAFA]">Transição automática baseada em inatividade comprovada on-chain.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00D084] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#FAFAFA]">Distribuição programada e instantânea para múltiplas carteiras.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00D084] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#FAFAFA]">Privacidade mantida através de arquitetura smart contract permissionless.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-[#111111]/30 border-y border-[#232323]" id="como-funciona">
<div className="max-w-6xl mx-auto px-4">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-[#FAFAFA]">Automação sem confiança</h2>
<p className="text-base text-[#A1A1AA] mt-4">Três passos simples para configurar seu vault e garantir seu legado de forma imutável.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-[1px] bg-[#232323]">
<div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#232323] rotate-45 translate-x-1.5 -translate-y-[5px]"></div>
</div>

<div className="flex flex-col items-center text-center relative z-10 bg-[#0A0A0A] p-2">
<div className="w-12 h-12 rounded-lg bg-[#111111] border border-[#232323] flex items-center justify-center mb-6 shadow-sm">
<span className="text-xs font-mono text-[#71717A] absolute -top-3 -left-3 bg-[#0A0A0A] px-1">01</span>
<iconify-icon className="text-[#FAFAFA] text-xl" icon="solar:safe-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#FAFAFA] tracking-tight mb-2">Setup do Vault</h3>
<p className="text-sm text-[#A1A1AA]">Deposite seus ativos e defina os endereços dos beneficiários com suas respectivas porcentagens.</p>
</div>

<div className="flex flex-col items-center text-center relative z-10 bg-[#0A0A0A] p-2">
<div className="w-12 h-12 rounded-lg bg-[#111111] border border-[#333333] flex items-center justify-center mb-6 shadow-sm ring-1 ring-[#00D084]/20">
<span className="text-xs font-mono text-[#71717A] absolute -top-3 -left-3 bg-[#0A0A0A] px-1">02</span>
<iconify-icon className="text-[#00D084] text-xl" icon="solar:pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#FAFAFA] tracking-tight mb-2">Heartbeat Ativo</h3>
<p className="text-sm text-[#A1A1AA]">O contrato monitora a atividade da sua carteira. Faça ping periodicamente para manter o status seguro.</p>
</div>

<div className="flex flex-col items-center text-center relative z-10 bg-[#0A0A0A] p-2">
<div className="w-12 h-12 rounded-lg bg-[#111111] border border-[#232323] flex items-center justify-center mb-6 shadow-sm">
<span className="text-xs font-mono text-[#71717A] absolute -top-3 -left-3 bg-[#0A0A0A] px-1">03</span>
<iconify-icon className="text-[#FAFAFA] text-xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#FAFAFA] tracking-tight mb-2">Herança Executada</h3>
<p className="text-sm text-[#A1A1AA]">Se o período de inatividade for excedido, o vault destrava e os beneficiários podem clamar os fundos.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-4" id="diferenciais">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-[#FAFAFA]">Engenharia de precisão</h2>
<p className="text-base text-[#A1A1AA] mt-4">Arquitetura desenvolvida para eliminar pontos únicos de falha e maximizar eficiência de capital.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-[#111111] border border-[#232323] rounded-xl p-8 hover:border-[#333333] transition-all group relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-md bg-[#1A1A1A] border border-[#232323] flex items-center justify-center group-hover:border-[#00D084]/50 transition-colors">
<iconify-icon className="text-[#00D084] text-xl" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#00D08414] border border-[#00D08440] text-xs font-medium text-[#00D084] font-mono">
                            Até 8% APY
                        </span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#FAFAFA] mb-3">Yield-Bearing Legacy</h3>
<p className="text-sm text-[#A1A1AA] leading-relaxed">
                        Seu patrimônio não fica parado. O SafeKeep aloca ativos ociosos em protocolos de lending white-listed (Lido, Jito) gerando rendimento contínuo enquanto protege seu legado.
                    </p>
</div>

<div className="bg-[#111111] border border-[#232323] rounded-xl p-8 hover:border-[#333333] transition-all group relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-md bg-[#1A1A1A] border border-[#232323] flex items-center justify-center group-hover:border-[#00D084]/50 transition-colors">
<iconify-icon className="text-[#00D084] text-xl" icon="solar:radar-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#00D084] animate-pulse"></span>
<span className="w-1.5 h-1.5 rounded-full bg-[#232323]"></span>
<span className="w-1.5 h-1.5 rounded-full bg-[#232323]"></span>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#FAFAFA] mb-3">Heartbeat Multi-Canal</h3>
<p className="text-sm text-[#A1A1AA] leading-relaxed">
                        Sistema inteligente de prova de vida. Valide seu status assinando uma transação, interagindo com o dashboard ou configurando dead-man switches via email.
                    </p>
</div>

<div className="bg-[#111111] border border-[#232323] rounded-xl p-8 hover:border-[#333333] transition-all group relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-md bg-[#1A1A1A] border border-[#232323] flex items-center justify-center group-hover:border-[#00D084]/50 transition-colors">
<iconify-icon className="text-[#00D084] text-xl" icon="solar:key-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#FAFAFA] mb-3">100% Não-Custodial</h3>
<p className="text-sm text-[#A1A1AA] leading-relaxed">
                        Seus ativos, suas chaves. O contrato inteligente do SafeKeep é imutável e não possui chaves de admin. Ninguém, nem mesmo nossa equipe, pode acessar seus fundos.
                    </p>
</div>

<div className="bg-[#111111] border border-[#232323] rounded-xl p-8 hover:border-[#333333] transition-all group relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-md bg-[#1A1A1A] border border-[#232323] flex items-center justify-center group-hover:border-[#00D084]/50 transition-colors">
<iconify-icon className="text-[#00D084] text-xl" icon="solar:bell-bing-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center gap-1">
<span className="w-2 h-2 rounded-sm bg-[#00D084]"></span>
<span className="w-2 h-2 rounded-sm bg-[#F59E0B]"></span>
<span className="w-2 h-2 rounded-sm bg-[#F97316]"></span>
<span className="w-2 h-2 rounded-sm bg-[#EF4444]"></span>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#FAFAFA] mb-3">Alertas Progressivos</h3>
<p className="text-sm text-[#A1A1AA] leading-relaxed">
                        Sistema em 4 estágios codificado por cores. Avisos visuais claros e notificações escalonadas antes de qualquer execução de contrato ou grace period ser iniciado.
                    </p>
</div>
</div>
</section>

<section className="py-24 border-y border-[#232323] relative bg-[#0A0A0A] overflow-hidden" id="seguranca">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-4 relative z-10">
<div className="grid md:grid-cols-5 gap-12 items-center mb-16">
<div className="md:col-span-3">
<h2 className="text-3xl font-semibold tracking-tight text-[#FAFAFA] mb-4">Segurança verificada. <br/>Risco minimizado.</h2>
<p className="text-base text-[#A1A1AA] leading-relaxed max-w-xl">
                            Lidar com herança exige tolerância zero a falhas. Nossos contratos inteligentes foram auditados rigorosamente pelas principais firmas de segurança do ecossistema Solana, garantindo que a lógica de execução seja blindada contra vetores de ataque conhecidos.
                        </p>
</div>
<div className="md:col-span-2 flex justify-start md:justify-end">
<div className="bg-[#111111] border border-[#232323] rounded-xl p-6 flex flex-col items-center justify-center w-full max-w-sm gap-4 hover:border-[#333333] transition-colors cursor-pointer group">
<iconify-icon className="text-3xl text-[#71717A] group-hover:text-[#FAFAFA] transition-colors" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-center">
<span className="block text-sm font-medium text-[#FAFAFA] mb-1">Relatório de Auditoria</span>
<span className="block text-xs font-medium text-[#00D084]">Ler PDF completo →</span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-[#232323]">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#00D084]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#FAFAFA]">Código Aberto</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#00D084]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#FAFAFA]">Zero Admin Keys</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#00D084]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#FAFAFA]">Solana Mainnet V2</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#00D084]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#FAFAFA]">Rate Limits Isolados</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#00D084]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#FAFAFA]">Multi-sig Treasury</span>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-4" id="faq">
<h2 className="text-3xl font-semibold tracking-tight text-[#FAFAFA] text-center mb-12">Perguntas Frequentes</h2>
<div className="flex flex-col">
<details className="group border-b border-[#232323]">
<summary className="flex justify-between items-center font-medium text-base text-[#FAFAFA] cursor-pointer py-5 outline-none">
                        O que acontece se eu perder minha wallet?
                        <span className="transition group-open:rotate-180 text-[#71717A]">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-[#A1A1AA] text-sm pb-5 leading-relaxed pr-8">
                        Ao configurar seu vault, você pode definir uma carteira de recuperação secundária sua como um dos beneficiários. Se perder a principal e o heartbeat expirar, você pode clamar os fundos pela carteira secundária.
                    </div>
</details>
<details className="group border-b border-[#232323]">
<summary className="flex justify-between items-center font-medium text-base text-[#FAFAFA] cursor-pointer py-5 outline-none">
                        Posso mudar os beneficiários depois?
                        <span className="transition group-open:rotate-180 text-[#71717A]">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-[#A1A1AA] text-sm pb-5 leading-relaxed pr-8">
                        Sim. Enquanto o heartbeat estiver ativo e você tiver acesso à sua carteira principal, você tem controle total para adicionar, remover ou alterar as porcentagens de distribuição dos beneficiários a qualquer momento.
                    </div>
</details>
<details className="group border-b border-[#232323]">
<summary className="flex justify-between items-center font-medium text-base text-[#FAFAFA] cursor-pointer py-5 outline-none">
                        Como funciona o yield?
                        <span className="transition group-open:rotate-180 text-[#71717A]">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-[#A1A1AA] text-sm pb-5 leading-relaxed pr-8">
                        Os fundos no seu vault não ficam ociosos. Através de integrações seguras de smart contracts, alocamos (de forma opcional) o capital em protocolos DeFi blue-chip de baixíssimo risco para gerar juros contínuos.
                    </div>
</details>
<details className="group border-b border-[#232323]">
<summary className="flex justify-between items-center font-medium text-base text-[#FAFAFA] cursor-pointer py-5 outline-none">
                        O que acontece com meus ativos se a SafeKeep fechar?
                        <span className="transition group-open:rotate-180 text-[#71717A]">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-[#A1A1AA] text-sm pb-5 leading-relaxed pr-8">
                        Absolutamente nada. A interface web pode deixar de existir, mas os contratos inteligentes implantados na blockchain são autônomos e imutáveis. Você ou seus beneficiários sempre poderão interagir diretamente com o contrato via CLI ou exploradores de bloco.
                    </div>
</details>
<details className="group border-b border-[#232323]">
<summary className="flex justify-between items-center font-medium text-base text-[#FAFAFA] cursor-pointer py-5 outline-none">
                        É seguro para quem nunca usou DeFi?
                        <span className="transition group-open:rotate-180 text-[#71717A]">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-[#A1A1AA] text-sm pb-5 leading-relaxed pr-8">
                        A configuração inicial requer conhecimento básico de carteiras web3. No entanto, criamos uma interface projetada para abstrair jargões técnicos, focando na clareza das ações de "depositar", "fazer check-in" e "adicionar destinatário".
                    </div>
</details>
<details className="group border-b border-[#232323]">
<summary className="flex justify-between items-center font-medium text-base text-[#FAFAFA] cursor-pointer py-5 outline-none">
                        Quanto custa?
                        <span className="transition group-open:rotate-180 text-[#71717A]">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-[#A1A1AA] text-sm pb-5 leading-relaxed pr-8">
                        Cobramos uma taxa fixa de apenas 0.5% sobre o valor depositado na criação do vault, e uma taxa de performance de 10% apenas sobre o yield gerado. Não há taxas de manutenção recorrentes.
                    </div>
</details>
</div>
</section>

<section className="py-24 px-4">
<div className="max-w-5xl mx-auto rounded-2xl bg-[#111111] border border-[#232323] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00D08420] via-transparent to-transparent pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center">
<iconify-icon className="text-4xl text-[#FAFAFA] mb-6" icon="solar:shield-keyhole-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#FAFAFA] mb-4">Seu patrimônio, suas regras.</h2>
<p className="text-base text-[#A1A1AA] mb-10 max-w-xl mx-auto">
                        Não deixe seus ativos digitais à mercê do acaso. Configure seu cofre agora e garanta que seu legado chegue às mãos certas.
                    </p>
<button className="bg-[#00D084] text-[#0A0A0A] hover:bg-[#00D084]/90 rounded-md text-base font-medium px-8 py-4 transition-colors shadow-[0_0_20px_rgba(0,208,132,0.15)] flex items-center justify-center gap-2">
<iconify-icon icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
                        Conectar Wallet e Começar
                    </button>
<p className="text-xs text-[#71717A] mt-4 font-medium">Leva menos de 5 minutos. Sem cadastro necessário.</p>
</div>
</div>
</section>
</main>

<footer className="border-t border-[#232323] bg-[#0A0A0A] pt-16 pb-8 mt-auto">
<div className="max-w-6xl mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="flex flex-col">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-[#00D084] text-xl" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-semibold tracking-tighter text-lg text-[#FAFAFA]">SafeKeep</span>
</div>
<p className="text-sm text-[#71717A] leading-relaxed max-w-xs">
                        Protocolo de herança on-chain não-custodial projetado para precisão, privacidade e segurança de fundos.
                    </p>
</div>

<div className="flex flex-col gap-3">
<span className="text-sm font-semibold text-[#FAFAFA] mb-1 tracking-tight">Recursos</span>
<a className="text-sm text-[#71717A] hover:text-[#FAFAFA] transition-colors" href="#">Documentação</a>
<a className="text-sm text-[#71717A] hover:text-[#FAFAFA] transition-colors" href="#">Relatórios de Auditoria</a>
<a className="text-sm text-[#71717A] hover:text-[#FAFAFA] transition-colors" href="#">GitHub</a>
<a className="text-sm text-[#71717A] hover:text-[#FAFAFA] transition-colors" href="#">Bug Bounty</a>
</div>

<div className="flex flex-col gap-3">
<span className="text-sm font-semibold text-[#FAFAFA] mb-1 tracking-tight">Legal</span>
<a className="text-sm text-[#71717A] hover:text-[#FAFAFA] transition-colors" href="#">Termos de Serviço</a>
<a className="text-sm text-[#71717A] hover:text-[#FAFAFA] transition-colors" href="#">Política de Privacidade</a>
<a className="text-sm text-[#71717A] hover:text-[#FAFAFA] transition-colors" href="#">Aviso de Risco</a>
<a className="text-sm text-[#71717A] hover:text-[#FAFAFA] transition-colors" href="#">Contato</a>
</div>

<div className="flex flex-col gap-4">
<span className="text-sm font-semibold text-[#FAFAFA] mb-1 tracking-tight">Comunidade</span>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-md bg-[#111111] border border-[#232323] hover:border-[#333333] hover:text-[#FAFAFA] text-[#A1A1AA] flex items-center justify-center transition-colors" href="#">

<svg aria-hidden="true" className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.961h-1.96z"></path>
</svg>
</a>
<a className="w-8 h-8 rounded-md bg-[#111111] border border-[#232323] hover:border-[#333333] hover:text-[#FAFAFA] text-[#A1A1AA] flex items-center justify-center transition-colors" href="#">
<iconify-icon icon="solar:programming-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-md bg-[#111111] border border-[#232323] hover:border-[#333333] hover:text-[#FAFAFA] text-[#A1A1AA] flex items-center justify-center transition-colors" href="#">
<iconify-icon icon="solar:dialog-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#232323]/50">
<span className="text-xs text-[#71717A] mb-4 md:mb-0">© 2024 SafeKeep Labs. Todos os direitos reservados.</span>
<span className="text-[10px] text-[#3F3F46] max-w-xl text-center md:text-right">
                    O SafeKeep é um protocolo não-custodial na blockchain Solana. A interação com contratos inteligentes envolve riscos técnicos inerentes. Opere com cautela.
                </span>
</div>
</div>
</footer>

    </>
  );
}
