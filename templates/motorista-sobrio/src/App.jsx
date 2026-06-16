import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
black: '#050505',
glass: 'rgba(255, 255, 255, 0.03)',
glassBorder: 'rgba(255, 255, 255, 0.08)',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // Init Lucide Icons
        lucide.createIcons();

        // Intersection Observer for Scroll Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex min-h-screen flex-col lg:flex-row">

<div className="lg:hidden flex items-center justify-between p-6 border-b border-glassBorder bg-black/80 backdrop-blur-md sticky top-0 z-50">
<div className="uppercase tracking-widest font-semibold text-sm text-white">Motorista Sóbrio</div>
<button className="text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 border-r border-glassBorder bg-black/50 backdrop-blur-sm p-6 overflow-y-auto z-40">
<div className="mb-10 animate-fade-in">
<h1 className="text-white text-sm tracking-[0.2em] font-semibold border border-white text-center py-1 w-10 mb-4 transition-transform hover:scale-110 duration-500 cursor-default">MS</h1>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Business Plan</p>
</div>
<nav className="space-y-1">
<a className="group flex items-center text-xs py-2 text-white font-medium hover:pl-2 transition-all duration-300" href="#summary">
<span className="w-1.5 h-1.5 rounded-full bg-white mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    1. Sumário Executivo
                </a>
<a className="group flex items-center text-xs py-2 text-neutral-400 hover:text-white hover:pl-2 transition-all duration-300" href="#company">
<span className="w-1.5 h-1.5 rounded-full bg-white mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    2. Empresa e Visão
                </a>
<a className="group flex items-center text-xs py-2 text-neutral-400 hover:text-white hover:pl-2 transition-all duration-300" href="#market">
<span className="w-1.5 h-1.5 rounded-full bg-white mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    3. Análise de Mercado
                </a>
<a className="group flex items-center text-xs py-2 text-neutral-400 hover:text-white hover:pl-2 transition-all duration-300" href="#model">
<span className="w-1.5 h-1.5 rounded-full bg-white mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    4. Modelo de Negócio
                </a>
<a className="group flex items-center text-xs py-2 text-neutral-400 hover:text-white hover:pl-2 transition-all duration-300" href="#marketing">
<span className="w-1.5 h-1.5 rounded-full bg-white mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    5. Marketing e Vendas
                </a>
<a className="group flex items-center text-xs py-2 text-neutral-400 hover:text-white hover:pl-2 transition-all duration-300" href="#operations">
<span className="w-1.5 h-1.5 rounded-full bg-white mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    6. Plano Operacional
                </a>
<a className="group flex items-center text-xs py-2 text-neutral-400 hover:text-white hover:pl-2 transition-all duration-300" href="#tech">
<span className="w-1.5 h-1.5 rounded-full bg-white mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Infraestrutura Tech
                </a>
</nav>
<div className="mt-auto pt-6 border-t border-glassBorder">
<div className="flex items-center gap-3 group cursor-help">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse group-hover:shadow-[0_0_10px_#22c55e] transition-shadow"></div>
<span className="text-[10px] text-neutral-500 uppercase tracking-wider group-hover:text-neutral-300 transition-colors">Status: Confidencial</span>
</div>
</div>
</aside>

<main className="flex-1 p-6 lg:p-12 lg:pl-20 max-w-7xl mx-auto">

<header className="mb-20 mt-10 border-b border-glassBorder pb-10 reveal is-visible">
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-0.5 border border-neutral-700 rounded text-[10px] text-neutral-400 uppercase tracking-wider hover:bg-white/10 transition-colors cursor-default">Versão 1.0</span>
<span className="px-2 py-0.5 bg-white text-black rounded text-[10px] font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-default">Alto Nível</span>
</div>
<h1 className="text-4xl lg:text-6xl font-medium text-white tracking-tight mb-4 glow-text">Motorista Sóbrio</h1>
<p className="text-lg text-neutral-400 font-light max-w-2xl leading-relaxed">Plano de negócios completo para uma plataforma tecnológica de mobilidade focada em segurança e condução no veículo do cliente.</p>
</header>

<section className="mb-24 scroll-mt-24 reveal" id="summary">
<h2 className="text-xl text-white font-medium tracking-tight mb-8 flex items-center gap-3">
<span className="text-neutral-600">01</span> Sumário Executivo
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
<div className="bg-glass border border-glassBorder p-6 rounded-sm hover-card">
<div className="flex items-center gap-2 mb-4 text-white">
<i className="w-4 h-4 text-red-400" data-lucide="alert-triangle"></i>
<h3 className="text-sm font-medium uppercase tracking-wide">O Problema</h3>
</div>
<ul className="space-y-3 text-sm text-neutral-400 font-light">
<li className="flex items-start gap-2 group"><span className="text-neutral-700 group-hover:text-red-400 transition-colors">•</span> Alto consumo de álcool per capita em Portugal.</li>
<li className="flex items-start gap-2 group"><span className="text-neutral-700 group-hover:text-red-400 transition-colors">•</span> Fiscalização (Lei Seca) intensificada.</li>
<li className="flex items-start gap-2 group"><span className="text-neutral-700 group-hover:text-red-400 transition-colors">•</span> Clientes não querem deixar o carro para trás.</li>
</ul>
</div>
<div className="bg-white/5 border border-white/20 p-6 rounded-sm hover-card">
<div className="flex items-center gap-2 mb-4 text-white">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle-2"></i>
<h3 className="text-sm font-medium uppercase tracking-wide">A Solução</h3>
</div>
<ul className="space-y-3 text-sm text-neutral-300 font-light">
<li className="flex items-start gap-2 group"><span className="text-white group-hover:text-emerald-400 transition-colors">•</span> Motoristas profissionais conduzem o veículo do cliente.</li>
<li className="flex items-start gap-2 group"><span className="text-white group-hover:text-emerald-400 transition-colors">•</span> App móvel com pagamento automático.</li>
<li className="flex items-start gap-2 group"><span className="text-white group-hover:text-emerald-400 transition-colors">•</span> Serviço pago por hora, ideal para grupos.</li>
</ul>
</div>
</div>
<div className="mb-12 reveal delay-100">
<h3 className="text-sm text-neutral-500 uppercase tracking-widest mb-6">Diferenciação Competitiva</h3>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-glassBorder text-xs text-neutral-500 uppercase tracking-wider">
<th className="py-4 font-medium">Característica</th>
<th className="py-4 font-medium text-white">Motorista Sóbrio</th>
<th className="py-4 font-medium">Uber/Bolt</th>
<th className="py-4 font-medium">Táxis</th>
</tr>
</thead>
<tbody className="text-sm font-light text-neutral-400">
<tr className="border-b border-glassBorder hover:bg-white/5 transition-colors duration-300 group">
<td className="py-4 group-hover:text-white transition-colors">Cliente mantém veículo</td>
<td className="py-4 text-white"><i className="w-4 h-4 inline mr-1 text-emerald-400" data-lucide="check"></i> Sim</td>
<td className="py-4 text-neutral-600">Não</td>
<td className="py-4 text-neutral-600">Não</td>
</tr>
<tr className="border-b border-glassBorder hover:bg-white/5 transition-colors duration-300 group">
<td className="py-4 group-hover:text-white transition-colors">Ideal para grupos</td>
<td className="py-4 text-white"><i className="w-4 h-4 inline mr-1 text-emerald-400" data-lucide="check"></i> Sim</td>
<td className="py-4 text-neutral-600">Não</td>
<td className="py-4 text-neutral-600">Não</td>
</tr>
<tr className="border-b border-glassBorder hover:bg-white/5 transition-colors duration-300 group">
<td className="py-4 group-hover:text-white transition-colors">Preço Transparente</td>
<td className="py-4 text-white"><i className="w-4 h-4 inline mr-1 text-emerald-400" data-lucide="check"></i> Sim</td>
<td className="py-4 text-neutral-500">Sim</td>
<td className="py-4 text-neutral-600">Não</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal delay-200">
<div className="p-4 border border-glassBorder bg-glass hover-card group">
<p className="text-xs text-neutral-500 uppercase tracking-wider mb-1 group-hover:text-neutral-400 transition-colors">Investimento</p>
<p className="text-xl md:text-2xl text-white font-light group-hover:scale-105 transition-transform origin-left">€85.000</p>
</div>
<div className="p-4 border border-glassBorder bg-glass hover-card group">
<p className="text-xs text-neutral-500 uppercase tracking-wider mb-1 group-hover:text-neutral-400 transition-colors">Break-even</p>
<p className="text-xl md:text-2xl text-white font-light group-hover:scale-105 transition-transform origin-left">Mês 14</p>
</div>
<div className="p-4 border border-glassBorder bg-glass hover-card group">
<p className="text-xs text-neutral-500 uppercase tracking-wider mb-1 group-hover:text-neutral-400 transition-colors">ROI (Ano 3)</p>
<p className="text-xl md:text-2xl text-white font-light group-hover:scale-105 transition-transform origin-left">28%</p>
</div>
<div className="p-4 border border-glassBorder bg-glass hover-card group">
<p className="text-xs text-neutral-500 uppercase tracking-wider mb-1 group-hover:text-neutral-400 transition-colors">Exit</p>
<p className="text-xl md:text-2xl text-white font-light group-hover:scale-105 transition-transform origin-left">5-7 Anos</p>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-24 reveal" id="company">
<h2 className="text-xl text-white font-medium tracking-tight mb-8 flex items-center gap-3">
<span className="text-neutral-600">02</span> Empresa e Visão
                </h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
<div className="col-span-1 lg:col-span-1 border-l border-neutral-800 pl-6 transition-colors hover:border-white/40">
<h3 className="text-white text-sm font-medium mb-2">Identificação</h3>
<div className="space-y-4 text-xs text-neutral-400">
<div><span className="block text-neutral-600 uppercase text-[10px]">Nome</span> Motorista Sóbrio, Lda.</div>
<div><span className="block text-neutral-600 uppercase text-[10px]">Sede</span> Lisboa, Portugal</div>
<div><span className="block text-neutral-600 uppercase text-[10px]">Capital Social</span> €20.000</div>
</div>
</div>
<div className="col-span-1 lg:col-span-2 space-y-6">
<blockquote className="text-lg font-light italic text-neutral-300 border-l-2 border-white pl-4 transition-all hover:bg-white/5 py-2 rounded-r">
                            "Ser a principal solução de mobilidade pessoal em Portugal até 2027, alcançando 15% do mercado-alvo e reduzindo acidentes."
                        </blockquote>
<div className="grid grid-cols-2 gap-4">
<div className="bg-glass p-4 rounded border border-glassBorder hover-card">
<h4 className="text-white text-xs font-medium uppercase mb-2">Valores</h4>
<ul className="text-xs text-neutral-400 space-y-1">
<li className="hover:text-white transition-colors">1. Segurança acima de tudo</li>
<li className="hover:text-white transition-colors">2. Inovação contínua</li>
<li className="hover:text-white transition-colors">3. Responsabilidade Social</li>
</ul>
</div>
<div className="bg-glass p-4 rounded border border-glassBorder hover-card">
<h4 className="text-white text-xs font-medium uppercase mb-2">Metas 5 Anos</h4>
<ul className="text-xs text-neutral-400 space-y-1">
<li className="hover:text-white transition-colors">• Lisboa, Porto, Algarve</li>
<li className="hover:text-white transition-colors">• 150.000+ Utilizadores</li>
<li className="hover:text-white transition-colors">• €5M+ Receita Anual</li>
</ul>
</div>
</div>
</div>
</div>

<div className="border border-glassBorder p-8 rounded bg-glass/30 flex justify-center overflow-x-auto hover:bg-glass/50 transition-colors reveal delay-100">
<div className="flex flex-col items-center">
<div className="border border-white bg-white/10 text-white px-4 py-2 text-xs font-medium rounded mb-6 hover:scale-110 transition-transform cursor-pointer">CEO / Founder</div>
<div className="flex gap-8 relative">
<div className="absolute top-[-1.5rem] left-1/2 w-px h-6 bg-neutral-700 -translate-x-1/2"></div>
<div className="absolute top-[-0.75rem] left-8 right-8 h-px bg-neutral-700"></div>
<div className="flex flex-col items-center relative pt-4 group">
<div className="absolute top-[-0.75rem] left-1/2 w-px h-4 bg-neutral-700"></div>
<div className="border border-neutral-700 text-neutral-300 px-3 py-1.5 text-xs rounded group-hover:border-white group-hover:text-white transition-colors cursor-default">CTO</div>
</div>
<div className="flex flex-col items-center relative pt-4 group">
<div className="absolute top-[-0.75rem] left-1/2 w-px h-4 bg-neutral-700"></div>
<div className="border border-neutral-700 text-neutral-300 px-3 py-1.5 text-xs rounded group-hover:border-white group-hover:text-white transition-colors cursor-default">COO</div>
</div>
<div className="flex flex-col items-center relative pt-4 group">
<div className="absolute top-[-0.75rem] left-1/2 w-px h-4 bg-neutral-700"></div>
<div className="border border-neutral-700 text-neutral-300 px-3 py-1.5 text-xs rounded group-hover:border-white group-hover:text-white transition-colors cursor-default">CMO</div>
</div>
<div className="flex flex-col items-center relative pt-4 group">
<div className="absolute top-[-0.75rem] left-1/2 w-px h-4 bg-neutral-700"></div>
<div className="border border-neutral-700 text-neutral-300 px-3 py-1.5 text-xs rounded group-hover:border-white group-hover:text-white transition-colors cursor-default">CFO</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-24 reveal" id="market">
<h2 className="text-xl text-white font-medium tracking-tight mb-8 flex items-center gap-3">
<span className="text-neutral-600">03</span> Análise de Mercado
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
<div>
<h3 className="text-sm font-medium text-white mb-4">Mercado TAM (Lisboa)</h3>
<div className="space-y-4">
<div className="flex justify-between items-end border-b border-neutral-800 pb-2 group hover:border-neutral-600 transition-colors">
<span className="text-xs text-neutral-500">População Adulta (18-65)</span>
<span className="text-sm text-neutral-300">1.82 Milhões</span>
</div>
<div className="flex justify-between items-end border-b border-neutral-800 pb-2 group hover:border-neutral-600 transition-colors">
<span className="text-xs text-neutral-500">Com Veículo Próprio</span>
<span className="text-sm text-neutral-300">1.0 Milhão</span>
</div>
<div className="flex justify-between items-end border-b border-neutral-800 pb-2 group hover:border-neutral-600 transition-colors">
<span className="text-xs text-neutral-500">Consumo Social de Álcool</span>
<span className="text-sm text-neutral-300">400.400</span>
</div>
<div className="flex justify-between items-end border-b border-white pb-2 group">
<span className="text-xs text-white font-medium">Penetração Inicial (0.8%)</span>
<span className="text-base text-white font-medium group-hover:scale-105 transition-transform origin-right">6.400 /mês</span>
</div>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-white mb-4">Segmentação Psicográfica</h3>
<div className="space-y-3">

<div className="w-full group">
<div className="flex justify-between text-xs mb-1"><span className="text-white">Nightlife / Social</span> <span className="text-neutral-500">45%</span></div>
<div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
<div className="bg-white h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out" style={{width: '45%', transformOrigin: 'left'}}></div>
</div>
</div>
<div className="w-full group">
<div className="flex justify-between text-xs mb-1"><span className="text-white">Profissionais</span> <span className="text-neutral-500">30%</span></div>
<div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
<div className="bg-neutral-400 h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 delay-100 ease-out" style={{width: '30%', transformOrigin: 'left'}}></div>
</div>
</div>
<div className="w-full group">
<div className="flex justify-between text-xs mb-1"><span className="text-white">Necessidades Especiais</span> <span className="text-neutral-500">15%</span></div>
<div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
<div className="bg-neutral-600 h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 delay-200 ease-out" style={{width: '15%', transformOrigin: 'left'}}></div>
</div>
</div>
<div className="w-full group">
<div className="flex justify-between text-xs mb-1"><span className="text-white">Turistas</span> <span className="text-neutral-500">10%</span></div>
<div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
<div className="bg-neutral-800 h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 delay-300 ease-out" style={{width: '10%', transformOrigin: 'left'}}></div>
</div>
</div>
</div>
</div>
</div>
<div className="p-6 border border-glassBorder rounded-sm bg-glass reveal delay-100 hover:border-white/20 transition-colors">
<h3 className="text-sm font-medium text-white mb-4">Análise PESTEL (Highlights)</h3>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-xs">
<div className="group cursor-default">
<span className="block text-neutral-500 uppercase text-[10px] mb-1 group-hover:text-neutral-300 transition-colors">Político</span>
<span className="text-neutral-300 group-hover:text-white transition-colors">Fiscalização Rigorosa</span>
</div>
<div className="group cursor-default">
<span className="block text-neutral-500 uppercase text-[10px] mb-1 group-hover:text-neutral-300 transition-colors">Económico</span>
<span className="text-neutral-300 group-hover:text-white transition-colors">Recuperação Pós-Covid</span>
</div>
<div className="group cursor-default">
<span className="block text-neutral-500 uppercase text-[10px] mb-1 group-hover:text-neutral-300 transition-colors">Social</span>
<span className="text-neutral-300 group-hover:text-white transition-colors">Cultura Nightlife</span>
</div>
<div className="group cursor-default">
<span className="block text-neutral-500 uppercase text-[10px] mb-1 group-hover:text-neutral-300 transition-colors">Tecnológico</span>
<span className="text-neutral-300 group-hover:text-white transition-colors">Pagamentos Digitais</span>
</div>
<div className="group cursor-default">
<span className="block text-neutral-500 uppercase text-[10px] mb-1 group-hover:text-neutral-300 transition-colors">Ambiental</span>
<span className="text-neutral-300 group-hover:text-white transition-colors">Redução Emissões</span>
</div>
<div className="group cursor-default">
<span className="block text-neutral-500 uppercase text-[10px] mb-1 group-hover:text-neutral-300 transition-colors">Legal</span>
<span className="text-neutral-300 group-hover:text-white transition-colors">GDPR &amp; Seguros</span>
</div>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-24 reveal" id="model">
<h2 className="text-xl text-white font-medium tracking-tight mb-8 flex items-center gap-3">
<span className="text-neutral-600">04</span> Modelo de Negócio
                </h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

<div className="col-span-1 lg:col-span-1 border border-white/20 bg-white/5 p-6 rounded relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
<div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-700"></div>
<h3 className="text-lg text-white font-medium mb-1">Receita</h3>
<p className="text-xs text-neutral-400 mb-6">Estrutura de comissões</p>
<div className="space-y-3">
<div className="flex justify-between text-sm border-b border-white/10 pb-2">
<span className="text-neutral-400">Taxa Fixa</span>
<span className="text-white">€1,00 <span className="text-[10px] text-neutral-500">/corrida</span></span>
</div>
<div className="flex justify-between text-sm border-b border-white/10 pb-2">
<span className="text-neutral-400">Comissão %</span>
<span className="text-white">15% <span className="text-[10px] text-neutral-500">/total</span></span>
</div>
<div className="flex justify-between text-sm pt-2">
<span className="text-neutral-400">Média</span>
<span className="text-white">€8-12 <span className="text-[10px] text-neutral-500">/serviço</span></span>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-2 border border-glassBorder bg-glass p-0 rounded overflow-hidden hover:border-white/20 transition-colors duration-500">
<div className="px-6 py-4 border-b border-glassBorder bg-black/40">
<h3 className="text-sm font-medium text-white">Pricing para Cliente</h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-xs">
<thead className="text-neutral-500 bg-neutral-900/50">
<tr>
<th className="px-6 py-3 font-medium uppercase tracking-wider">Tipo</th>
<th className="px-6 py-3 font-medium uppercase tracking-wider">Tarifa</th>
<th className="px-6 py-3 font-medium uppercase tracking-wider">Horário</th>
</tr>
</thead>
<tbody className="text-neutral-300 divide-y divide-glassBorder">
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-3">Hora Standard</td>
<td className="px-6 py-3 font-medium text-white">€12,00</td>
<td className="px-6 py-3 text-neutral-500">Seg-Qui, 06h-22h</td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-3">Hora de Pico</td>
<td className="px-6 py-3 font-medium text-white">€18,00</td>
<td className="px-6 py-3 text-neutral-500">Sex-Sáb, 22h-02h</td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-3">Hora Noturna</td>
<td className="px-6 py-3 font-medium text-white">€15,00</td>
<td className="px-6 py-3 text-neutral-500">02h-06h</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-3 bg-neutral-900/30 text-[10px] text-neutral-500 flex justify-between">
<span>* Mínimo 1 hora</span>
<span>Km Extra: €0,35</span>
</div>
</div>
</div>

<div className="mb-12 reveal delay-100">
<h3 className="text-sm font-medium text-white mb-4">Planos de Subscrição (Fase 2)</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="border border-glassBorder p-4 rounded hover-card cursor-pointer">
<div className="text-white font-medium mb-1">Premium</div>
<div className="text-2xl font-light text-white mb-2">€24,99<span className="text-sm text-neutral-500">/mês</span></div>
<p className="text-xs text-neutral-400">20% desconto em todas as viagens.</p>
</div>
<div className="border border-glassBorder p-4 rounded hover-card cursor-pointer">
<div className="text-white font-medium mb-1">Empresas</div>
<div className="text-2xl font-light text-white mb-2">€99,99<span className="text-sm text-neutral-500">/mês</span></div>
<p className="text-xs text-neutral-400">Até 5 utilizadores + Relatórios.</p>
</div>
<div className="border border-glassBorder p-4 rounded hover-card cursor-pointer">
<div className="text-white font-medium mb-1">Anual</div>
<div className="text-2xl font-light text-white mb-2">€19,99<span className="text-sm text-neutral-500">/eq. mês</span></div>
<p className="text-xs text-neutral-400">Para power users.</p>
</div>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-24 reveal" id="marketing">
<h2 className="text-xl text-white font-medium tracking-tight mb-8 flex items-center gap-3">
<span className="text-neutral-600">05</span> Marketing e Vendas
                </h2>
<div className="flex flex-col md:flex-row gap-12 mb-12">
<div className="flex-1">
<div className="text-4xl font-light text-white mb-2 tracking-tighter hover:tracking-normal transition-all duration-700 cursor-default">"Saia à noite. Volte em segurança. Com o seu carro."</div>
<div className="text-neutral-500 text-sm mt-4 flex items-center gap-2">
<span className="w-8 h-px bg-neutral-700"></span> Tagline Oficial
                        </div>
</div>
<div className="flex-1 space-y-4">
<div className="flex items-center justify-between border-b border-glassBorder pb-2 group">
<span className="text-xs text-neutral-400 group-hover:text-white transition-colors">Orçamento Marketing (Ano 1)</span>
<span className="text-sm text-white">€44.000</span>
</div>
<div className="flex items-center justify-between border-b border-glassBorder pb-2 group">
<span className="text-xs text-neutral-400 group-hover:text-white transition-colors">CAC Estimado</span>
<span className="text-sm text-white">€18 - €22</span>
</div>
<div className="flex items-center justify-between border-b border-glassBorder pb-2 group">
<span className="text-xs text-neutral-400 group-hover:text-white transition-colors">LTV Estimado</span>
<span className="text-sm text-white">€120 - €150</span>
</div>
</div>
</div>
<div className="relative border-l border-neutral-800 ml-4 space-y-12 reveal delay-100">
<div className="relative pl-8 group">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-black border border-white rounded-full group-hover:scale-150 transition-transform"></div>
<h3 className="text-white text-sm font-medium mb-2 group-hover:translate-x-1 transition-transform">Fase 1: Pré-Lançamento (Meses 1-3)</h3>
<p className="text-xs text-neutral-400 mb-2">Orçamento: €10k</p>
<ul className="list-disc list-inside text-xs text-neutral-500">
<li>Landing page e Lista de espera</li>
<li>Recrutamento primeiros motoristas</li>
<li>PR e Media Relations</li>
</ul>
</div>
<div className="relative pl-8 group">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_white] animate-pulse"></div>
<h3 className="text-white text-sm font-medium mb-2 group-hover:translate-x-1 transition-transform">Fase 2: Lançamento (Meses 4-6)</h3>
<p className="text-xs text-neutral-400 mb-2">Orçamento: €25k</p>
<ul className="list-disc list-inside text-xs text-neutral-500">
<li>Campanha Digital Intensiva (Google/Meta)</li>
<li>Marketing de Guerrilha (Bairro Alto, Cais do Sodré)</li>
<li>Influencers locais</li>
</ul>
</div>
<div className="relative pl-8 group">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-black border border-neutral-600 rounded-full group-hover:border-white transition-colors"></div>
<h3 className="text-white text-sm font-medium mb-2 group-hover:translate-x-1 transition-transform">Fase 3: Crescimento (Meses 7-18)</h3>
<p className="text-xs text-neutral-400 mb-2">Orçamento: €40k/ano</p>
<ul className="list-disc list-inside text-xs text-neutral-500">
<li>Parcerias B2B e Seguradoras</li>
<li>Programa de Fidelidade</li>
<li>SEO Local</li>
</ul>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-24 reveal" id="operations">
<h2 className="text-xl text-white font-medium tracking-tight mb-8 flex items-center gap-3">
<span className="text-neutral-600">06</span> Plano Operacional &amp; Tech
                </h2>

<div className="bg-black border border-glassBorder p-6 rounded-lg mb-12 relative overflow-hidden group" id="tech">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 group-hover:opacity-30 transition-opacity"></div>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
<div className="space-y-4">
<div className="border border-white/30 bg-white/5 p-3 rounded w-40 mx-auto md:mx-0 hover:scale-105 transition-transform hover:bg-white/10">
<div className="text-[10px] text-neutral-400 uppercase">Frontend</div>
<div className="text-sm text-white font-mono">React Native</div>
</div>
<div className="h-8 w-px bg-white/20 mx-auto"></div>
<div className="border border-white/30 bg-white/5 p-3 rounded w-40 mx-auto md:mx-0 hover:scale-105 transition-transform hover:bg-white/10">
<div className="text-[10px] text-neutral-400 uppercase">Backend</div>
<div className="text-sm text-white font-mono">Node.js / TS</div>
</div>
</div>
<div className="hidden md:block h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="space-y-4">
<div className="border border-neutral-700 p-3 rounded w-40 mx-auto md:mx-0 hover:scale-105 transition-transform hover:border-white/30">
<div className="text-[10px] text-neutral-500 uppercase">Database</div>
<div className="text-sm text-neutral-300 font-mono">PostgreSQL</div>
</div>
<div className="h-8 w-px bg-neutral-800 mx-auto"></div>
<div className="border border-neutral-700 p-3 rounded w-40 mx-auto md:mx-0 hover:scale-105 transition-transform hover:border-white/30">
<div className="text-[10px] text-neutral-500 uppercase">Infra</div>
<div className="text-sm text-neutral-300 font-mono">AWS Cloud</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal delay-100">
<div>
<h3 className="text-sm font-medium text-white mb-4">Recrutamento de Motoristas</h3>
<div className="space-y-3">
<div className="flex gap-4 group cursor-default">
<div className="flex-none w-6 h-6 rounded-full border border-white/30 text-[10px] flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">1</div>
<p className="text-xs text-neutral-400 pt-1 group-hover:text-neutral-300">Candidatura Online &amp; Upload Documentos</p>
</div>
<div className="flex gap-4 group cursor-default">
<div className="flex-none w-6 h-6 rounded-full border border-white/30 text-[10px] flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">2</div>
<p className="text-xs text-neutral-400 pt-1 group-hover:text-neutral-300">Verificação Criminal e Carta Condução (3+ anos)</p>
</div>
<div className="flex gap-4 group cursor-default">
<div className="flex-none w-6 h-6 rounded-full border border-white/30 text-[10px] flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">3</div>
<p className="text-xs text-neutral-400 pt-1 group-hover:text-neutral-300">Entrevista e Teste Psicotécnico</p>
</div>
<div className="flex gap-4 group cursor-default">
<div className="flex-none w-6 h-6 rounded-full border border-white/30 text-[10px] flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">4</div>
<p className="text-xs text-neutral-400 pt-1 group-hover:text-neutral-300">Formação de 8 horas (Segurança/Atendimento)</p>
</div>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-white mb-4">SLA de Suporte</h3>
<div className="border border-glassBorder rounded overflow-hidden">
<table className="w-full text-xs text-left">
<tr className="border-b border-glassBorder">
<th className="p-3 text-neutral-500 font-medium">Prioridade</th>
<th className="p-3 text-neutral-500 font-medium">Resposta</th>
<th className="p-3 text-neutral-500 font-medium">Resolução</th>
</tr>
<tr className="border-b border-glassBorder bg-red-900/10 hover:bg-red-900/20 transition-colors">
<td className="p-3 text-red-200 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse-slow"></div> Crítico</td>
<td className="p-3 text-neutral-300">&lt; 15 min</td>
<td className="p-3 text-neutral-300">&lt; 2 horas</td>
</tr>
<tr className="border-b border-glassBorder hover:bg-white/5 transition-colors">
<td className="p-3 text-white">Alto</td>
<td className="p-3 text-neutral-300">&lt; 1 hora</td>
<td className="p-3 text-neutral-300">&lt; 24 horas</td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="p-3 text-neutral-400">Normal</td>
<td className="p-3 text-neutral-300">&lt; 4 horas</td>
<td className="p-3 text-neutral-300">&lt; 48 horas</td>
</tr>
</table>
</div>
</div>
</div>
</section>

<footer className="border-t border-glassBorder pt-12 pb-24 mt-24 reveal">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-2">
<div className="text-lg font-medium text-white tracking-tight mb-4 hover:tracking-widest transition-all duration-500 cursor-default">Motorista Sóbrio</div>
<p className="text-xs text-neutral-500 max-w-xs">
                            A revolução da segurança rodoviária em Portugal. Uma solução tecnológica para um problema social real.
                        </p>
</div>
<div>
<h4 className="text-white text-xs font-medium uppercase mb-4">Documentos</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li className="hover:text-white transition-colors cursor-pointer">Business Plan Full</li>
<li className="hover:text-white transition-colors cursor-pointer">Financial Model.xls</li>
<li className="hover:text-white transition-colors cursor-pointer">Pitch Deck.pdf</li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium uppercase mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li className="hover:text-white transition-colors cursor-pointer">Privacidade</li>
<li className="hover:text-white transition-colors cursor-pointer">Termos de Uso</li>
<li className="hover:text-white transition-colors cursor-pointer">Compliance</li>
</ul>
</div>
</div>
<div className="text-[10px] text-neutral-600 text-center uppercase tracking-widest hover:text-neutral-400 transition-colors">
                    © 2023 Motorista Sóbrio. Todos os direitos reservados. Confidencial.
                </div>
</footer>
</main>
</div>


    </>
  );
}
