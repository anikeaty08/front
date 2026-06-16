import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-[#0d0d0b]/80 backdrop-blur-md border-b border-[#141412]">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="font-manrope text-xl tracking-tighter text-white font-medium flex items-center gap-1" href="/">
                R<span className="text-[#ffe700]">8</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-manrope text-[#a09f9b] hover:text-[#edece6] transition-colors" href="/agencia/">A Agência</a>
<a className="text-sm font-manrope text-[#a09f9b] hover:text-[#edece6] transition-colors flex items-center gap-1" href="/solucoes/">Soluções <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon></a>
<a className="text-sm font-manrope text-[#a09f9b] hover:text-[#edece6] transition-colors" href="/modelos/">Modelos</a>
<a className="text-sm font-manrope text-white transition-colors" href="/cases/">Cases</a>
<a className="text-sm font-manrope text-[#a09f9b] hover:text-[#edece6] transition-colors" href="/educacao/">Educação</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#ffe700] text-[#141414] font-manrope text-sm font-medium hover:bg-[#ffea00] transition-colors" href="/contrate/">
                    Agende uma reunião
                </a>
<button className="md:hidden text-white p-2 -mr-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="pt-20">

<section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] bg-[#ffe700] opacity-[0.02] blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-[#141414] border border-[#212121] text-[#ffe700] font-inter text-xs tracking-[0.05rem] uppercase mb-8">
                    Resultados Comprovados
                </span>
<h1 className="font-manrope text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
                    Nossos Cases de Sucesso
                </h1>
<p className="text-base md:text-lg text-[#a09f9b] max-w-2xl mx-auto font-light leading-relaxed">
                    Veja como ajudamos empresas B2B, e-commerces, agro e saúde a crescerem com estratégias digitais orientadas a dados e alta performance.
                </p>
</div>

<div className="max-w-7xl mx-auto mt-16 flex overflow-x-auto no-scrollbar pb-4 -mb-4 justify-start md:justify-center">
<div className="flex items-center gap-3 px-6 md:px-0">
<button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-[#212121] border border-[#353535] text-white font-inter text-xs transition-colors">
                        Todos os casos
                    </button>
<button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-[#141414] border border-[#212121] text-[#a09f9b] hover:text-white hover:border-[#353535] font-inter text-xs transition-colors">
                        B2B &amp; Indústria
                    </button>
<button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-[#141414] border border-[#212121] text-[#a09f9b] hover:text-white hover:border-[#353535] font-inter text-xs transition-colors">
                        E-commerce
                    </button>
<button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-[#141414] border border-[#212121] text-[#a09f9b] hover:text-white hover:border-[#353535] font-inter text-xs transition-colors">
                        Saúde &amp; Clínicas
                    </button>
<button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-[#141414] border border-[#212121] text-[#a09f9b] hover:text-white hover:border-[#353535] font-inter text-xs transition-colors">
                        Agronegócio
                    </button>
</div>
</div>
</section>

<section className="px-6 pb-32">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

<article className="group flex flex-col bg-[#141414] border border-[#212121] rounded-2xl overflow-hidden hover:border-[#353535] transition-all duration-300 hover:-translate-y-1">
<div className="h-56 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0b] border-b border-[#212121] relative flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ffe700] via-transparent to-transparent blur-2xl"></div>
<iconify-icon className="text-[#353535] relative z-10" icon="solar:buildings-linear" width="64"></iconify-icon>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="flex items-center gap-3 mb-4">
<span className="font-inter text-xs text-[#a09f9b]">Tecnologia B2B</span>
<span className="w-1 h-1 rounded-full bg-[#353535]"></span>
<span className="font-inter text-xs text-[#a09f9b]">Inbound &amp; Vendas</span>
</div>
<h2 className="font-manrope text-2xl font-medium tracking-tight text-[#edece6] mb-3 group-hover:text-white transition-colors">
                            Redução de CAC e escala em vendas complexas para SaaS
                        </h2>
<p className="text-sm text-[#a09f9b] font-light leading-relaxed mb-8 line-clamp-2">
                            Reestruturação completa da jornada de compra, implementação de CRM e automação que resultou em previsibilidade de receita.
                        </p>
<div className="mt-auto grid grid-cols-2 gap-6 pt-6 border-t border-[#212121]">
<div>
<div className="font-manrope text-3xl font-medium tracking-tight text-[#ffe700] mb-1">+214%</div>
<div className="font-inter text-xs text-[#a09f9b]">Leads Qualificados (MQLs)</div>
</div>
<div>
<div className="font-manrope text-3xl font-medium tracking-tight text-[#ffe700] mb-1">-38%</div>
<div className="font-inter text-xs text-[#a09f9b]">Custo de Aquisição (CAC)</div>
</div>
</div>
<div className="mt-8 flex items-center gap-2 text-sm text-white font-manrope font-medium">
                            Ler case completo
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</article>

<article className="group flex flex-col bg-[#141414] border border-[#212121] rounded-2xl overflow-hidden hover:border-[#353535] transition-all duration-300 hover:-translate-y-1">
<div className="h-56 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0b] border-b border-[#212121] relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent blur-2xl"></div>
<iconify-icon className="text-[#353535] relative z-10" icon="solar:cart-large-linear" width="64"></iconify-icon>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="flex items-center gap-3 mb-4">
<span className="font-inter text-xs text-[#a09f9b]">E-commerce</span>
<span className="w-1 h-1 rounded-full bg-[#353535]"></span>
<span className="font-inter text-xs text-[#a09f9b]">Mídia Paga &amp; CRO</span>
</div>
<h2 className="font-manrope text-2xl font-medium tracking-tight text-[#edece6] mb-3 group-hover:text-white transition-colors">
                            Recorde de faturamento com otimização de ROAS e CRO
                        </h2>
<p className="text-sm text-[#a09f9b] font-light leading-relaxed mb-8 line-clamp-2">
                            Como dobramos a receita de um grande e-commerce de moda focando em retenção, LTV e otimização da taxa de conversão na loja.
                        </p>
<div className="mt-auto grid grid-cols-2 gap-6 pt-6 border-t border-[#212121]">
<div>
<div className="font-manrope text-3xl font-medium tracking-tight text-[#ffe700] mb-1">+185%</div>
<div className="font-inter text-xs text-[#a09f9b]">Crescimento de ROAS</div>
</div>
<div>
<div className="font-manrope text-3xl font-medium tracking-tight text-[#ffe700] mb-1">2.5x</div>
<div className="font-inter text-xs text-[#a09f9b]">Aumento em Receita</div>
</div>
</div>
<div className="mt-8 flex items-center gap-2 text-sm text-white font-manrope font-medium">
                            Ler case completo
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</article>

<article className="group flex flex-col bg-[#141414] border border-[#212121] rounded-2xl overflow-hidden hover:border-[#353535] transition-all duration-300 hover:-translate-y-1">
<div className="h-56 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0b] border-b border-[#212121] relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500 via-transparent to-transparent blur-2xl"></div>
<iconify-icon className="text-[#353535] relative z-10" icon="solar:leaf-linear" width="64"></iconify-icon>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="flex items-center gap-3 mb-4">
<span className="font-inter text-xs text-[#a09f9b]">Agronegócio</span>
<span className="w-1 h-1 rounded-full bg-[#353535]"></span>
<span className="font-inter text-xs text-[#a09f9b]">Conteúdo &amp; SEO</span>
</div>
<h2 className="font-manrope text-2xl font-medium tracking-tight text-[#edece6] mb-3 group-hover:text-white transition-colors">
                            Autoridade digital e geração de demanda no setor Agro
                        </h2>
<p className="text-sm text-[#a09f9b] font-light leading-relaxed mb-8 line-clamp-2">
                            Estratégia de conteúdo técnico aliada a SEO que posicionou a empresa como principal referência no seu nicho de atuação.
                        </p>
<div className="mt-auto grid grid-cols-2 gap-6 pt-6 border-t border-[#212121]">
<div>
<div className="font-manrope text-3xl font-medium tracking-tight text-[#ffe700] mb-1">+340%</div>
<div className="font-inter text-xs text-[#a09f9b]">Tráfego Orgânico</div>
</div>
<div>
<div className="font-manrope text-3xl font-medium tracking-tight text-[#ffe700] mb-1">+60%</div>
<div className="font-inter text-xs text-[#a09f9b]">Oportunidades de Venda</div>
</div>
</div>
<div className="mt-8 flex items-center gap-2 text-sm text-white font-manrope font-medium">
                            Ler case completo
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</article>

<article className="group flex flex-col bg-[#141414] border border-[#212121] rounded-2xl overflow-hidden hover:border-[#353535] transition-all duration-300 hover:-translate-y-1">
<div className="h-56 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0b] border-b border-[#212121] relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500 via-transparent to-transparent blur-2xl"></div>
<iconify-icon className="text-[#353535] relative z-10" icon="solar:heart-pulse-linear" width="64"></iconify-icon>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="flex items-center gap-3 mb-4">
<span className="font-inter text-xs text-[#a09f9b]">Saúde &amp; Clínicas</span>
<span className="w-1 h-1 rounded-full bg-[#353535]"></span>
<span className="font-inter text-xs text-[#a09f9b]">Performance Local</span>
</div>
<h2 className="font-manrope text-2xl font-medium tracking-tight text-[#edece6] mb-3 group-hover:text-white transition-colors">
                            Máquina de agendamentos e redução de ociosidade
                        </h2>
<p className="text-sm text-[#a09f9b] font-light leading-relaxed mb-8 line-clamp-2">
                            Campanhas hiper-segmentadas e funil de conversão via WhatsApp que lotaram a agenda da clínica em menos de 3 meses.
                        </p>
<div className="mt-auto grid grid-cols-2 gap-6 pt-6 border-t border-[#212121]">
<div>
<div className="font-manrope text-3xl font-medium tracking-tight text-[#ffe700] mb-1">+450</div>
<div className="font-inter text-xs text-[#a09f9b]">Novos Pacientes/Mês</div>
</div>
<div>
<div className="font-manrope text-3xl font-medium tracking-tight text-[#ffe700] mb-1">-45%</div>
<div className="font-inter text-xs text-[#a09f9b]">Custo por Agendamento</div>
</div>
</div>
<div className="mt-8 flex items-center gap-2 text-sm text-white font-manrope font-medium">
                            Ler case completo
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</article>
</div>

<div className="mt-16 flex justify-center">
<button className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#212121] bg-[#141414] text-sm font-manrope text-[#edece6] hover:bg-[#212121] transition-colors">
                    Carregar mais cases
                    <iconify-icon className="text-[#a09f9b]" icon="solar:refresh-linear" width="16"></iconify-icon>
</button>
</div>
</section>

<section className="border-y border-[#141412] bg-[#141414] py-24 md:py-32 relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#212121_1px,transparent_1px),linear-gradient(to_bottom,#212121_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-20"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="font-manrope text-3xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-tight">
                    Você não contrata campanhas.<br className="hidden md:block"/>
<span className="text-[#a09f9b]">Você contrata crescimento sustentável.</span>
</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#ffe700] text-[#141414] font-manrope text-sm font-medium hover:bg-[#ffea00] transition-colors" href="/contrate/">
                        Solicitar uma proposta
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full bg-transparent border border-[#353535] text-white font-manrope text-sm font-medium hover:bg-[#212121] transition-colors" href="/modelos/">
                        Ver modelos de negócio
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-[#0d0d0b] pt-20 pb-10 px-6 border-t border-[#141412]">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
<div className="md:col-span-4">
<a className="font-manrope text-2xl tracking-tighter text-white font-medium flex items-center gap-1 mb-6" href="/">
                    R<span className="text-[#ffe700]">8</span>
</a>
<p className="text-sm text-[#a09f9b] font-light leading-relaxed mb-8 max-w-sm">
                    Unimos Pessoas, Tecnologia e Processos para potencializar resultados mensuráveis. Muito além de uma agência.
                </p>
<div className="flex items-center gap-4 text-[#a09f9b]">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:youtube-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="md:col-span-2 md:col-start-7">
<h4 className="font-inter text-xs uppercase tracking-[0.05rem] text-white mb-6">Agência</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-sm text-[#a09f9b] hover:text-white transition-colors" href="/agencia/">Quem Somos</a></li>
<li><a className="text-sm text-[#a09f9b] hover:text-white transition-colors" href="/modelos/">Modelos de Negócio</a></li>
<li><a className="text-sm text-white transition-colors" href="/cases/">Cases de Sucesso</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-inter text-xs uppercase tracking-[0.05rem] text-white mb-6">Soluções</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-sm text-[#a09f9b] hover:text-white transition-colors" href="/solucoes/marketing/">Marketing</a></li>
<li><a className="text-sm text-[#a09f9b] hover:text-white transition-colors" href="/solucoes/vendas/">Vendas</a></li>
<li><a className="text-sm text-[#a09f9b] hover:text-white transition-colors" href="/solucoes/design/">Design</a></li>
<li><a className="text-sm text-[#a09f9b] hover:text-white transition-colors" href="/solucoes/tecnologia/">Tecnologia</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-inter text-xs uppercase tracking-[0.05rem] text-white mb-6">Educação</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-sm text-[#a09f9b] hover:text-white transition-colors" href="/educacao/blog/">Blog R8</a></li>
<li><a className="text-sm text-[#a09f9b] hover:text-white transition-colors" href="/educacao/materiais-ricos/">Materiais Ricos</a></li>
<li><a className="text-sm text-[#a09f9b] hover:text-white transition-colors" href="/educacao/podcast/">R8 Talks Podcast</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-[#141412] flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs font-inter text-[#4c4c4a]">
                © 2024 Agência R8. Todos os direitos reservados.
            </p>
<div className="flex items-center gap-6">
<span className="text-xs font-inter text-[#4c4c4a]">R. Barão de Camargos, 141 — Centro, Uberlândia MG</span>
<a className="text-xs font-inter text-[#4c4c4a] hover:text-[#a09f9b] transition-colors" href="#">Política de Privacidade</a>
</div>
</div>
</footer>

    </>
  );
}
