import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


 
        // Modal Logic 
        function toggleModal(show) { 
            const modal = document.getElementById('booking-modal'); 
            if (show) { 
                modal.classList.remove('hidden'); 
                document.body.style.overflow = 'hidden'; 
            } else { 
                modal.classList.add('hidden'); 
                document.body.style.overflow = 'auto'; 
            } 
        } 
        
        // FAQ Accordion Logic 
        function toggleFaq(button) { 
            const item = button.parentElement; 
            const isActive = item.classList.contains('active'); 
            // Close all items 
            document.querySelectorAll('.faq-item').forEach(el => { el.classList.remove('active'); }); 
            // If it wasn't active before, open it 
            if (!isActive) { item.classList.add('active'); } 
        } 
        
        // Initialize Lucide Icons 
        if (window.lucide) { lucide.createIcons(); } 
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-emerald-950/30 text-emerald-500 border-b border-emerald-500/20 py-3 px-4 flex items-center justify-center text-sm relative z-50">
<div className="flex flex-col sm:flex-row items-center gap-3 text-center">
<span className="text-neutral-300">Descubra os gargalos invisíveis do seu funil.</span>
<button className="hover:bg-emerald-500/20 transition-colors flex group text-xs font-semibold text-emerald-400 bg-emerald-500/10 border-emerald-500/30 border rounded-full pt-1 pr-4 pb-1 pl-4 gap-x-1 gap-y-1 items-center" onclick="toggleModal(true)">
                Pedir Diagnóstico Gratuito
            </button>
</div>
</div>

<nav className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex gap-x-8 gap-y-8 items-end">
<a className="text-xl font-semibold tracking-tight flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center text-neutral-950 font-bold tracking-tighter">CO</div>
<span className="font-medium tracking-tight text-white">GrowthMap</span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="hover:text-emerald-400 transition-colors" href="#solucoes">Soluções</a>
<a className="flex items-center gap-2 hover:text-emerald-400 transition-colors" href="#metodo"> Método <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-1.5 py-0.5 rounded border border-emerald-500/20 font-semibold uppercase tracking-wide">Pro</span> </a>
<a className="hover:text-emerald-400 transition-colors" href="#resultados">Resultados</a>
<a className="hover:text-emerald-400 transition-colors" href="#faq">Dúvidas</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hover:bg-emerald-400 hover:text-neutral-950 transition-all flex text-sm font-semibold text-neutral-950 bg-emerald-500 rounded-lg pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_0_15px_rgba(16,185,129,0.3)] gap-x-2 gap-y-2 items-center" onclick="toggleModal(true)">
                    Falar com Especialista
                </button>
</div>
</div>
</nav>

<main className="overflow-hidden pt-16 pb-24 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-600 rounded-full blur-[120px] opacity-10 -z-10 pointer-events-none"></div>
<div className="z-10 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 bg-neutral-900/50 border border-white/10 rounded-full pl-1 pr-4 py-1 shadow-sm mb-8 hover:border-emerald-500/30 transition-colors cursor-default backdrop-blur-sm">
<span className="text-[10px] flex items-center gap-1 font-semibold text-neutral-950 bg-emerald-500 rounded-full pt-0.5 pr-2 pb-0.5 pl-2 shadow-sm">
                    CRO &amp; Growth
                    <i className="w-3 h-3" data-lucide="trending-up"></i>
</span>
<span className="text-sm font-medium text-neutral-300">Transforme visitantes em receita recorrente</span>
</div>
<h1 className="leading-[1.1] md:text-5xl text-5xl font-semibold text-white tracking-tight max-w-5xl mr-auto mb-6 ml-auto">
                Otimização de Conversão <br className="hidden md:block"/>
<span className="font-normal text-emerald-500 font-serif-italic drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">Baseada em Dados Reais</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-normal text-neutral-400 max-w-2xl mr-auto mb-10 ml-auto">
                Estratégia, Tecnologia e Inteligência para escalar seus resultados. <br className="hidden md:block"/>Pare de deixar dinheiro na mesa com um site que não converte.
            </p>
<div className="flex flex-col items-center gap-4 mb-20">
<button className="group relative bg-emerald-600 hover:bg-emerald-500 text-white text-lg font-medium px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all flex items-center gap-3 w-full sm:w-auto justify-center overflow-hidden border border-emerald-500/30" onclick="toggleModal(true)">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
<span className="relative">Solicitar Diagnóstico Gratuito</span>
<i className="relative w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
<div className="flex items-center gap-2 text-sm text-neutral-500 bg-neutral-900/80 px-3 py-1 rounded-md border border-white/5 backdrop-blur-sm">
<span className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[10px] font-bold px-1.5 py-0.5 rounded">AUDIT</span>
<span className="font-medium text-neutral-400"> Análise técnica sem compromisso.</span>
</div>
</div>
<div className="w-full max-w-7xl mx-auto px-6 mb-20 relative z-10 animate-slide-up" style={{animationDelay: '0.2s'}}>
<div className="text-center mb-8">
<p className="text-xs font-semibold text-neutral-500 uppercase tracking-[0.2em]">Resultados comprovados em</p>
</div>

<div className="relative overflow-hidden w-full" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>

<div className="flex items-center gap-16 animate-ticker w-max">

<div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center opacity-50 grayscale">
<span className="text-2xl font-bold text-white font-sans">REVANESSE®</span>
<span className="text-2xl italic text-white font-serif">GiOlaser</span>
<span className="text-xl font-medium text-white tracking-tight uppercase">Dra. Pietra</span>
<span className="text-2xl font-semibold italic text-white font-serif">Adão Pneus</span>
<span className="text-2xl font-bold text-white tracking-tighter">Valle Invest</span>
<span className="text-2xl font-black text-white">labora</span>
</div>

<div className="flex items-center gap-16 shrink-0 opacity-50 grayscale">
<span className="text-2xl font-bold text-white font-sans">REVANESSE®</span>
<span className="text-2xl italic text-white font-serif">GiOlaser</span>
<span className="text-xl font-medium text-white tracking-tight uppercase">Dra. Pietra</span>
<span className="text-2xl font-semibold italic text-white font-serif">Adão Pneus</span>
<span className="text-2xl font-bold text-white tracking-tighter">Valle Invest</span>
<span className="text-2xl font-black text-white">labora</span>
</div>
</div>
</div>
<style> @keyframes ticker-slide { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }.animate-ticker { animation: ticker-slide 30s linear infinite; } </style>
</div>

<div className="max-w-5xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900 aspect-video ring-1 ring-black/5">
<img alt="Dashboard Growth" className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40"></div>
<div className="md:p-12 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border-2 border-emerald-500/30 overflow-hidden shadow-lg bg-neutral-800 flex items-center justify-center">
<span className="font-serif italic text-white">DP</span>
</div>
<div className="text-left">
<h3 className="leading-tight text-shadow-sm text-lg font-medium text-white">3x Faturamento em 12 meses</h3>
<p className="text-sm text-neutral-400">Case: Dra. Pietra Cardoso</p>
</div>
</div>
<div className="hidden sm:flex gap-3 text-white/90 text-sm font-medium">
<span className="flex items-center gap-2 bg-black/50 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-md">
<i className="w-3 h-3 text-emerald-400" data-lucide="zap"></i> Quick Wins
                                </span>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
<div className="w-24 h-24 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_60px_rgba(16,185,129,0.2)] transition-shadow">
<i className="w-10 h-10 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="flex justify-between items-end">
<div className="bg-black/60 backdrop-blur-md rounded-lg px-4 py-2 text-white text-sm font-medium border border-white/10"> 
                                Otimização de Funil + Mídia Paga
                            </div>
<div className="flex gap-4">
<button className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"><i className="w-5 h-5" data-lucide="volume-2"></i></button>
<button className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"><i className="w-5 h-5" data-lucide="maximize"></i></button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-[#0a0a0a]" id="resultados">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
<div className="py-12 px-6 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
<div className="md:text-5xl group-hover:text-emerald-500 transition-colors text-4xl font-semibold text-white tracking-tight mb-2">R$ 24Mi+</div>
<div className="uppercase flex gap-2 text-sm font-medium text-neutral-500 tracking-wide gap-x-2 gap-y-2 items-center">Receita Gerada <i className="w-4 h-4" data-lucide="trending-up"></i></div>
</div>
<div className="flex flex-col group hover:bg-white/[0.02] transition-colors text-center pt-12 pr-6 pb-12 pl-6 items-center justify-center">
<div className="md:text-5xl group-hover:text-emerald-500 transition-colors text-4xl font-semibold text-white tracking-tight mb-2">+220%</div>
<div className="uppercase flex gap-2 text-sm font-medium text-neutral-500 tracking-wide gap-x-2 gap-y-2 items-center">Crescimento Médio</div>
</div>
<div className="flex flex-col group hover:bg-white/[0.02] transition-colors text-center pt-12 pr-6 pb-12 pl-6 items-center justify-center">
<div className="md:text-5xl group-hover:text-emerald-500 transition-colors text-4xl font-semibold text-white tracking-tight mb-2">13,8%</div>
<div className="uppercase flex gap-2 text-sm font-medium text-neutral-500 tracking-wide gap-x-2 gap-y-2 items-center">Taxa de Conversão</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] border-white/5 border-b pt-32 pb-32 relative">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center mb-20">
<h2 className="md:text-6xl leading-[1.1] transition-all duration-700 text-5xl font-semibold text-white tracking-tight opacity-0 translate-y-4 reveal-delay-1" style={{animation: 'reveal 0.8s ease-out forwards'}}> 
                    Se você sofre com <span className="font-normal font-serif-italic text-emerald-500">algum destes problemas...</span>
</h2>
</div>

<div className="flex flex-wrap justify-center gap-6 mb-20">

<div className="md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:bg-neutral-900 transition-colors duration-300 group hover:border-emerald-500/30 bg-neutral-900/50 w-full border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">Muito tráfego, mas pouca conversão e leads desqualificados.</p>
</div>

<div className="md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:bg-neutral-900 transition-colors duration-300 group hover:border-zinc-500/30 bg-neutral-900/50 w-full border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-xl bg-zinc-700/10 border border-zinc-700/20 flex items-center justify-center text-zinc-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="ghost"></i>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">Abandono de carrinho ou formulários no meio do processo.</p>
</div>

<div className="md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:bg-neutral-900 transition-colors duration-300 group hover:border-red-900/30 bg-neutral-900/50 w-full border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">Custo por Lead (CPL/CAC) subindo e ROI instável.</p>
</div>

<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900 transition-colors duration-300 group hover:border-orange-900/30">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="wifi-off"></i>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">Site lento que pune seu ranking no Google e ads.</p>
</div>

<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900 transition-colors duration-300 group hover:border-yellow-900/30">
<div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="help-circle"></i>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">Decisões baseadas em "achismo" e não em dados.</p>
</div>
</div>

<div className="flex flex-col items-center text-center">
<button className="relative group" onclick="toggleModal(true)">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
<div className="hover:from-emerald-600 hover:to-emerald-500 flex gap-3 transition-all text-xl font-semibold text-white bg-gradient-to-r from-emerald-700 to-emerald-600 border-white/10 border rounded-xl pt-5 pr-12 pb-5 pl-12 relative shadow-2xl gap-x-3 gap-y-3 items-center">
                        Agendar Consultoria
                    </div>
</button>
<div className="flex flex-col md:flex-row gap-3 text-sm text-neutral-400 mt-8 gap-x-3 gap-y-3 items-center">
<span>Diagnóstico inicial para entender seus gargalos e desenhar a solução.</span>
</div>
<div className="mt-6 inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 border border-white/10 backdrop-blur-sm">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-neutral-300">Poucas vagas para este mês</span>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] border-white/5 border-b pt-24 pb-24" id="solucoes">
<div className="w-full max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h1 className="md:text-5xl md:mb-20 text-4xl font-semibold text-white tracking-tight text-center mb-16">Pilares de Crescimento</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="group md:p-12 overflow-hidden flex flex-col transition-all duration-500 hover:border-white/20 hover:bg-[#0f0f0f] bg-[#0A0A0A] h-full border-white/10 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative">

<div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-slow mix-blend-screen"></div>

<div className="relative h-40 mb-2 flex items-center">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm z-0">
<i className="w-7 h-7 text-emerald-400" data-lucide="layout-dashboard"></i>
</div>

<div className="absolute left-8 md:left-10 bg-[#1A1D21] border border-white/10 shadow-2xl rounded-xl p-4 flex items-start gap-4 w-full max-w-[340px] animate-float backdrop-blur-md z-10 top-2">
<div className="shrink-0 bg-emerald-500 rounded-lg p-1.5 mt-0.5 shadow-sm text-black flex items-center justify-center">
<i className="w-5 h-5" data-lucide="shopping-cart"></i>
</div>
<div className="flex flex-col w-full">
<div className="flex items-center justify-between w-full mb-1">
<span className="text-sm font-semibold text-white tracking-tight">Nova Conversão</span>
<span className="text-[10px] text-neutral-500">Agora</span>
</div>
<span className="text-sm text-neutral-300 leading-snug">Venda confirmada via <span className="text-emerald-400 font-medium">Landing Page B</span>.</span>
<div className="flex gap-2 mt-3">
<div className="flex text-[10px] font-medium text-emerald-400 bg-emerald-500/10 h-6 border-emerald-500/20 border rounded pr-3 pl-3 items-center">R$ 1.250,00</div>
</div>
</div>
</div>
</div>
<div className="relative z-0 mt-auto pt-6">
<h2 className="md:text-3xl text-2xl font-semibold text-white tracking-tight mb-3">CRO Estratégico</h2>
<p className="text-xs font-semibold tracking-[0.15em] text-emerald-500 uppercase mb-6"> DESIGN QUE VENDE </p>
<p className="leading-relaxed text-lg font-normal text-neutral-400 max-w-md mb-8">
                            Arquitetura de informação persuasiva, velocidade de carregamento e testes A/B contínuos para garantir que cada clique valha a pena.
                        </p>
<div className="w-full h-px bg-white/10 mb-8"></div>
<ul className="space-y-3">
<li className="flex gap-3 text-sm text-neutral-400 items-center">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Testes A/B Científicos 
                            </li>
<li className="flex gap-3 text-sm text-neutral-400 items-center">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Landing Pages de Alta Conversão
                            </li>
</ul>
</div>
</div>

<div className="group md:p-12 overflow-hidden flex flex-col transition-all duration-500 hover:border-white/20 hover:bg-[#0f0f0f] bg-[#0A0A0A] h-full border-white/10 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-slow mix-blend-screen"></div>
<div className="relative h-40 mb-2 flex items-center">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm z-0">
<i className="w-7 h-7 text-emerald-400" data-lucide="bar-chart-2"></i>
</div>

<div className="absolute left-10 md:left-12 bg-[#1A1D21]/95 border border-white/10 shadow-2xl rounded-xl p-3 w-[220px] animate-float backdrop-blur-md z-10 top-0" style={{animationDelay: '-2s'}}>
<div className="flex items-center gap-2.5 mb-3 border-b border-white/5 pb-2.5">
<div className="w-7 h-7 rounded-full bg-neutral-700 flex items-center justify-center text-[10px] font-medium text-white shrink-0">GA4</div>
<div className="min-w-0">
<div className="text-[11px] font-semibold text-white truncate">Análise de Funil</div>
<div className="text-[10px] truncate text-neutral-500">Últimos 30 dias</div>
</div>
</div>
<div className="space-y-1.5">
<div className="flex items-center justify-between text-[10px] bg-white/5 p-1.5 rounded border border-white/5">
<span className="text-neutral-400">Visitantes</span>
<span className="text-white font-mono">15.420</span>
</div>
<div className="flex items-center justify-between text-[10px] bg-white/5 p-1.5 rounded border border-white/5">
<span className="text-neutral-400">Leads</span>
<span className="text-emerald-400 font-mono">+12%</span>
</div>
</div>
</div>
</div>
<div className="relative z-0 mt-auto pt-6">
<h2 className="md:text-3xl text-2xl font-semibold text-white tracking-tight mb-3">Dados &amp; Analytics</h2>
<p className="uppercase text-xs font-semibold text-emerald-500 tracking-[0.15em] mb-6"> FIM DO "ACHISMO" </p>
<p className="leading-relaxed text-lg font-normal text-neutral-400 mb-8">
                            Implementação avançada de GA4, Tag Manager e ferramentas de mapa de calor para entender exatamente onde o usuário clica e onde ele desiste.
                        </p>
<div className="w-full h-px bg-white/10 mb-8"></div>
<ul className="space-y-3">
<li className="flex gap-3 text-sm text-neutral-400 items-center">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Setup de Tracking Avançado 
                            </li>
<li className="flex items-center gap-3 text-neutral-400 text-sm">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Integração CRM e Mídia 
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden flex flex-col text-white bg-[#050505] w-full border-white/5 border-b pt-20 pb-40 relative items-center">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] mask-radial pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600 rounded-full blur-[150px] opacity-[0.05] pointer-events-none"></div>
<div className="text-center w-full max-w-4xl z-10 relative mb-2 px-6">
<h2 className="md:text-6xl text-4xl font-semibold text-white tracking-tight mb-6 pb-4">Nossa Inteligência de Dados</h2>
<p className="leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mr-auto ml-auto">Conectamos todas as pontas da sua operação digital.</p>
</div>
<div className="relative flex flex-col items-center w-full max-w-[1400px]">

<div className="relative w-[500px] h-[500px] flex items-center justify-center z-20 scale-75 md:scale-100 origin-bottom">
<div className="absolute inset-0 animate-spin-slow">
<svg className="absolute inset-0 w-full h-full text-white/5" viewbox="0 0 600 600">
<g className="stroke-current stroke-[1]">
<line className="animate-flow-in" x1="300" x2="300" y1="50" y2="220"></line>
<line className="animate-flow-in delay-1" x1="550" x2="380" y1="300" y2="300"></line>
<line className="animate-flow-in delay-2" x1="300" x2="300" y1="550" y2="380"></line>
<line className="animate-flow-in delay-3" x1="50" x2="220" y1="300" y2="300"></line>
</g>
</svg>

<div className="absolute top-[50px] left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20">
<i className="w-7 h-7 text-emerald-500" data-lucide="bar-chart"></i>
</div>
</div>
<div className="absolute top-[123px] right-[123px] translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<i className="w-7 h-7 text-emerald-500" data-lucide="zap"></i>
</div>
</div>
<div className="absolute top-1/2 right-[50px] translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<i className="w-7 h-7 text-emerald-500" data-lucide="users"></i>
</div>
</div>
<div className="absolute bottom-[123px] right-[123px] translate-x-1/2 translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<i className="w-7 h-7 text-emerald-500" data-lucide="database"></i>
</div>
</div>
<div className="absolute bottom-[50px] left-1/2 -translate-x-1/2 translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<i className="w-7 h-7 text-emerald-500" data-lucide="smartphone"></i>
</div>
</div>
</div>
<div className="absolute z-30 flex items-center justify-center">
<div className="w-28 h-28 bg-[#0a0a0a] rounded-3xl border border-emerald-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.2)] relative overflow-hidden ring-1 ring-white/10">
<div className="absolute inset-0 bg-emerald-500/10 animate-pulse"></div>
<i className="w-12 h-12 text-white relative z-10" data-lucide="layers"></i>
</div>
</div>
</div>

<div className="relative w-full max-w-4xl h-32 -mt-20 z-10 px-4 hidden md:block">
<div className="absolute left-1/2 -translate-x-px top-0 w-[1px] h-[40%] bg-white/5 overflow-hidden">
<div className="w-full h-full bg-gradient-to-b from-transparent via-emerald-500 to-transparent absolute animate-pulse-main"></div>
</div>
<div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[50%] h-[1px] bg-white/5 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-pulse-expand"></div>
</div>
<div className="absolute top-[40%] left-[25%] -translate-x-px w-[1px] h-[60%] bg-white/5 overflow-hidden">
<div className="w-full h-full bg-gradient-to-b from-transparent via-emerald-500 to-transparent absolute animate-pulse-feeder"></div>
</div>
<div className="absolute top-[40%] left-[75%] -translate-x-px w-[1px] h-[60%] bg-white/5 overflow-hidden">
<div className="w-full h-full bg-gradient-to-b from-transparent via-emerald-500 to-transparent absolute animate-pulse-feeder"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-20 md:mt-0 w-full max-w-4xl mt-4 pr-4 pl-4 relative">
<div className="group relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all hover:border-emerald-500/30 animate-float-card" style={{animationDelay: '0s'}}>
<div className="p-5 flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-[10px] font-bold text-black">GA</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-neutral-200">Google Analytics 4</span>
<span className="text-[10px] text-neutral-500">Dados de comportamento</span>
</div>
</div>
<div className="h-20 bg-black/50 w-full border-white/5 border rounded-lg mb-3 flex items-center justify-center">
<span className="text-xs text-neutral-500">Fluxo de Usuários</span>
</div>
</div>
</div>
<div className="group relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all hover:border-emerald-500/30 animate-float-card" style={{animationDelay: '0.5s'}}>
<div className="p-5 flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white">HJ</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-neutral-200">Mapas de Calor</span>
<span className="text-[10px] text-neutral-500">Experiência do Usuário</span>
</div>
</div>
<div className="h-20 bg-black/50 w-full border-white/5 border rounded-lg mb-3 flex items-center justify-center">
<span className="text-xs text-neutral-500">Gravações de Sessão</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] pt-24 pb-24 relative" id="metodo">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 via-[#050505] to-emerald-900/10 opacity-20 pointer-events-none"></div>
<div className="max-w-5xl z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center mb-24">
<div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-white tracking-wide uppercase">Nosso Método</span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] drop-shadow-sm"> Como escalamos sua receita </h2>
</div>

<div className="relative w-full">

<div className="sticky top-24 z-10 mb-12">
<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden min-h-[500px] border border-white/5">
<div className="md:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<div className="bg-emerald-500/10 text-emerald-500 p-2 rounded-lg border border-emerald-500/20"><i className="w-6 h-6" data-lucide="scan-search"></i></div>
<span className="uppercase text-sm font-semibold text-emerald-500 tracking-wide">Fase 1</span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Diagnóstico Profundo</h3>
<p className="leading-relaxed text-neutral-400 mb-8">Auditamos seu funil para encontrar os gargalos invisíveis. Usamos análise heurística e dados quantitativos para saber onde você perde dinheiro.</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 bg-emerald-500/20 p-1 rounded-full"><i className="w-3 h-3 text-emerald-500" data-lucide="check"></i></div>
<span className="text-sm text-neutral-300 font-medium">Análise de Usabilidade (UX)</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 bg-emerald-500/20 p-1 rounded-full"><i className="w-3 h-3 text-emerald-500" data-lucide="check"></i></div>
<span className="text-sm font-medium text-neutral-300">Auditoria de Performance Técnica</span>
</div>
</div>
</div>
<div className="md:w-1/2 bg-black/40 rounded-2xl border border-white/10 p-6 relative overflow-hidden flex flex-col justify-center">

<div className="font-mono text-xs text-neutral-500 space-y-2">
<p>&gt; Iniciando scan...</p>
<p>&gt; LCP: <span className="text-red-500">2.8s (Pobre)</span></p>
<p>&gt; CLS: <span className="text-emerald-500">0.05 (Bom)</span></p>
<p>&gt; Taxa de Rejeição Mobile: <span className="text-yellow-500">68%</span></p>
<p className="text-white bg-white/10 p-2 rounded mt-4">! ALERTA: Fricção alta no checkout detectada.</p>
</div>
</div>
</div>
</div>

<div className="sticky top-28 z-20 mb-12">
<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden min-h-[500px] border border-white/5">
<div className="md:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<div className="bg-purple-900/30 text-purple-400 p-2 rounded-lg border border-purple-500/20"><i className="w-6 h-6" data-lucide="flask-conical"></i></div>
<span className="uppercase text-sm font-semibold text-purple-400 tracking-wide">Fase 2</span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Hipóteses e Testes A/B</h3>
<p className="leading-relaxed text-neutral-400 mb-8">Não adivinhamos, testamos. Criamos variantes das suas páginas principais e deixamos os dados decidirem qual converte mais.</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 bg-emerald-500/20 p-1 rounded-full"><i className="w-3 h-3 text-emerald-500" data-lucide="check"></i></div>
<span className="text-sm text-neutral-300 font-medium">Validação Estatística</span>
</div>
</div>
</div>
<div className="md:w-1/2 bg-black rounded-2xl border border-white/10 p-6 relative overflow-hidden flex items-center justify-center">
<div className="flex gap-4 items-center">
<div className="bg-neutral-800 p-4 rounded text-center opacity-50">
<div className="text-xs text-neutral-500">Versão A</div>
<div className="text-xl font-bold text-white">2.1%</div>
</div>
<i className="text-neutral-600" data-lucide="arrow-right"></i>
<div className="bg-emerald-900/30 border border-emerald-500/50 p-4 rounded text-center">
<div className="text-xs text-emerald-400">Versão B</div>
<div className="text-xl font-bold text-white">4.8%</div>
<div className="text-[10px] text-emerald-500 mt-1">WINNER</div>
</div>
</div>
</div>
</div>
</div>

<div className="sticky top-32 z-30 mb-12">
<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden min-h-[500px] border border-white/5">
<div className="md:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<div className="bg-blue-900/30 text-blue-400 p-2 rounded-lg border border-blue-500/20"><i className="w-6 h-6" data-lucide="rocket"></i></div>
<span className="uppercase text-sm font-semibold text-blue-400 tracking-wide">Fase 3</span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Escala e Monitoramento</h3>
<p className="leading-relaxed text-neutral-400 mb-8">Implementamos as melhorias vencedoras e criamos dashboards para monitorar o ROI em tempo real. O ciclo de otimização nunca para.</p>
</div>
<div className="md:w-1/2 bg-black/40 rounded-2xl border border-white/10 p-6 relative overflow-hidden flex flex-col justify-center items-center">
<div className="w-full max-w-xs bg-neutral-800 rounded-lg p-4 border border-white/5">
<div className="flex justify-between items-center mb-4">
<span className="text-xs text-neutral-400">Receita Mensal</span>
<span className="text-xs text-emerald-400">+45%</span>
</div>
<div className="h-24 flex items-end justify-between gap-1">
<div className="w-full bg-neutral-700 h-[30%] rounded-t"></div>
<div className="w-full bg-neutral-700 h-[45%] rounded-t"></div>
<div className="w-full bg-neutral-700 h-[40%] rounded-t"></div>
<div className="w-full bg-emerald-500 h-[75%] rounded-t relative shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
<div className="w-full bg-emerald-500 h-[90%] rounded-t relative shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] border-b border-white/5" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Perguntas Frequentes</h2>
<p className="text-neutral-400">Tudo o que você precisa saber sobre a metodologia.</p>
</div>
<div className="space-y-4">

<div className="faq-item bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors">
<button className="w-full flex items-center justify-between p-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-white text-lg">O que é CRO exatamente?</span>
<i className="faq-icon w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="faq-answer px-6">
<p className="pb-6 text-neutral-400 leading-relaxed"> CRO (Conversion Rate Optimization) é o processo sistemático de aumentar a porcentagem de visitantes do site que realizam uma ação desejada (compra, lead, cadastro). É fazer mais com o mesmo tráfego. </p>
</div>
</div>

<div className="faq-item bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors">
<button className="w-full flex items-center justify-between p-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-white text-lg">Quanto tempo para ver resultados?</span>
<i className="faq-icon w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="faq-answer px-6">
<p className="pb-6 text-neutral-400 leading-relaxed"> Correções de "Quick Wins" (erros óbvios de usabilidade) trazem resultados em semanas. Programas de testes A/B estruturados começam a gerar aprendizado sólido e ROI crescente a partir do segundo mês. </p>
</div>
</div>

<div className="faq-item bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors">
<button className="w-full flex items-center justify-between p-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-white text-lg">Preciso de muito tráfego?</span>
<i className="faq-icon w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="faq-answer px-6">
<p className="pb-6 text-neutral-400 leading-relaxed"> Para testes A/B estatísticos, recomendamos acima de 5k visitantes/mês. Porém, auditorias de usabilidade e otimização de velocidade beneficiam qualquer tamanho de operação. </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-emerald-500/5"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[200px] opacity-20 pointer-events-none"></div>
<div className="relative z-10 text-center max-w-2xl px-6">
<h2 className="text-5xl font-bold text-white tracking-tight mb-6">Pare de adivinhar. <br/>Comece a converter.</h2>
<p className="text-xl text-neutral-400 mb-10">Junte-se aos líderes que escalam receita com previsibilidade.</p>
<button className="btn-glow bg-emerald-600 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform" onclick="toggleModal(true)"> 
                Quero meu Diagnóstico
            </button>
<p className="mt-6 text-sm text-neutral-500">Sem cartão de crédito • Resposta em 24h</p>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-bold text-white mb-6 block tracking-tight" href="#">CO-B Growth</a>
<p className="text-sm text-neutral-500 leading-relaxed"> Agência de Performance Digital focada em CRO e Growth Hacking. Dados, design e resultado. </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Serviços</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">CRO &amp; Testes A/B</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Data Analytics</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">SEO Técnico</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Empresa</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Sobre Nós</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Cases de Sucesso</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Contato</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Privacidade</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Termos</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">© 2025 CO-B Growth. Todos os direitos reservados.</p>
<div className="flex gap-6">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden" id="booking-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="toggleModal(false)"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 shadow-2xl">
<button className="absolute top-4 right-4 text-neutral-500 hover:text-white" onclick="toggleModal(false)">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
<div className="text-center mb-8">
<h3 className="text-2xl font-semibold text-white mb-2">Solicite seu Diagnóstico</h3>
<p className="text-sm text-neutral-400">Preencha os dados abaixo para receber nossa análise inicial.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Obrigado! Entraremos em contato.'); toggleModal(false);">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">Nome Completo</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500 transition-colors" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">E-mail Corporativo</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500 transition-colors" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">Site da Empresa</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500 transition-colors" type="text"/>
</div>
<button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 rounded-lg transition-colors mt-2" type="submit"> 
                    Enviar Solicitação 
                </button>
</form>
</div>
</div>



    </>
  );
}
