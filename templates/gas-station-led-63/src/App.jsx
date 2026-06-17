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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Dosis', 'sans-serif'],
},
colors: {
brand: {
red: '#E40D1A',
dark: '#0f172a',
gray: '#f8fafc'
}
},
letterSpacing: {
tighter: '-0.05em',
tight: '-0.025em',
}
}
}
}

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
      



<header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="group" href="#">
<div className="flex items-center gap-1">
<span className="iconify text-[#E40D1A] group-hover:rotate-12 transition-transform duration-500" data-icon="solar:bolt-linear" data-width="24"></span>
<span className="text-2xl font-bold tracking-tighter text-slate-900 group-hover:text-slate-700 transition-colors">
                        LUMEN<span className="text-[#E40D1A]">TECH</span>
</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium uppercase tracking-wide text-slate-600 hover:text-[#E40D1A] transition-colors" href="#about">Quem Somos</a>
<a className="text-sm font-medium uppercase tracking-wide text-slate-600 hover:text-[#E40D1A] transition-colors" href="#solutions">Soluções</a>
<a className="text-sm font-bold uppercase tracking-wide text-[#E40D1A] border-b-2 border-[#E40D1A]" href="#gas-station-page">Postos &amp; Serviços</a>
<a className="text-sm font-medium uppercase tracking-wide text-slate-600 hover:text-[#E40D1A] transition-colors" href="#cases">Cases</a>
<a className="text-sm font-medium uppercase tracking-wide text-slate-600 hover:text-[#E40D1A] transition-colors" href="#blog">Blog</a>
<a className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-[#E40D1A] transition-colors duration-300" href="#contact">
                    Fale Conosco
                </a>
</nav>

<button className="lg:hidden text-slate-900">
<span className="iconify" data-icon="solar:hamburger-menu-linear" data-width="28"></span>
</button>
</div>
</header>



<section className="relative h-[60vh] flex items-center overflow-hidden bg-slate-900">
<div className="absolute inset-0 z-0">
<img alt="Industrial" className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-4">Lumentech Global</h1>
<p className="text-slate-300 text-lg mb-8">Role para baixo para ver a página de Solução para Postos de Combustível.</p>
<a className="inline-flex items-center justify-center px-6 py-3 bg-[#E40D1A] text-white font-medium rounded-full hover:bg-red-700 transition-all" href="#gas-station-page">
                Ir para Demo: Postos
                <span className="iconify ml-2" data-icon="solar:arrow-down-linear"></span>
</a>
</div>
</section>

<div className="w-full h-24 bg-slate-100 flex items-center justify-center border-y border-dashed border-slate-300 mt-0" id="gas-station-page">
<span className="text-slate-400 font-mono text-sm uppercase tracking-widest">--- DEMO: PÁGINA DE SOLUÇÃO (POSTOS) ---</span>
</div>



<main className="bg-white">

<section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">

<div className="absolute inset-0 z-0">
<img alt="Posto de Combustível à noite" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E40D1A]/20 border border-[#E40D1A]/30 text-white text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-[#E40D1A]"></span>
                    Soluções Especializadas
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    Soluções em Iluminação para <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Postos de Combustível</span>
</h1>
<p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
                    Iluminação eficiente, segura e confiável para ambientes de alta operação. Valorize sua marca e reduza custos com tecnologia LED de ponta.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#E40D1A] text-white font-bold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-900/20 group" href="#contact">
                        Fale com um especialista
                        <span className="iconify ml-2 group-hover:translate-x-1 transition-transform" data-icon="solar:arrow-right-linear" data-width="20"></span>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur text-white border border-white/20 font-bold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300" href="#products">
                        Ver produtos
                    </a>
</div>
</div>

<div className="absolute bottom-0 w-full border-t border-white/10 bg-black/20 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<span className="block text-2xl font-bold text-white">5 Anos</span>
<span className="text-xs text-slate-400 uppercase tracking-wide">Garantia</span>
</div>
<div className="text-center md:text-left">
<span className="block text-2xl font-bold text-white">IP66</span>
<span className="text-xs text-slate-400 uppercase tracking-wide">Proteção Total</span>
</div>
<div className="text-center md:text-left">
<span className="block text-2xl font-bold text-white">160lm/W</span>
<span className="text-xs text-slate-400 uppercase tracking-wide">Eficiência</span>
</div>
<div className="text-center md:text-left">
<span className="block text-2xl font-bold text-white">NR-10</span>
<span className="text-xs text-slate-400 uppercase tracking-wide">Conformidade</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-sm font-bold text-[#E40D1A] uppercase tracking-widest mb-3">Visão Geral</h2>
<h3 className="text-4xl font-semibold text-slate-900 mb-6 tracking-tight">
                            A luz certa atrai clientes e garante segurança operacional.
                        </h3>
<div className="space-y-6 text-slate-600 font-light text-lg leading-relaxed">
<p>
                                Em um posto de combustível, a iluminação vai muito além da visibilidade básica. Ela é uma ferramenta estratégica de atração de clientes, transmitindo segurança e limpeza desde a rodovia.
                            </p>
<p>
                                Nossas soluções são projetadas para operar 24/7 em ambientes agressivos, expostos a vapores, poeira e intempéries, garantindo que sua operação nunca pare e que a experiência do seu cliente seja sempre convidativa.
                            </p>
</div>
<div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4">
<div className="flex -space-x-4">
<img alt="Engenheiro" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<img alt="Arquiteta" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="w-12 h-12 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">+12</div>
</div>
<div>
<p className="text-sm font-bold text-slate-900">Equipe de Projetos</p>
<p className="text-xs text-slate-500">Especialistas em normas luminotécnicas.</p>
</div>
</div>
</div>
<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-slate-100 rounded-[2rem] -z-10 opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-70"></div>
<img alt="Pista de Abastecimento" className="w-full rounded-[2rem] shadow-2xl relative z-10 transform transition-transform duration-700 hover:scale-[1.01]" src="https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-lg border border-white/50">
<div className="flex items-center gap-3">
<span className="iconify text-[#E40D1A]" data-icon="solar:check-circle-bold" data-width="28"></span>
<div>
<p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Uniformidade</p>
<p className="text-lg font-bold text-slate-900">U0 &gt; 0.7</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Eficiência, Segurança e Confiabilidade</h2>
<p className="text-slate-500 text-lg">Desenvolvemos luminárias que suportam a rotina intensa de postos e lojas de conveniência.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-red-100 hover:shadow-md transition-all group">
<div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E40D1A] transition-colors duration-300">
<span className="iconify text-[#E40D1A] group-hover:text-white transition-colors" data-icon="solar:shield-check-linear" data-width="32"></span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Segurança Operacional</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                            Luminárias certificadas para áreas classificadas (Ex) e com alto índice de proteção (IP66) contra jatos de água e vapores de combustível.
                        </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-red-100 hover:shadow-md transition-all group">
<div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E40D1A] transition-colors duration-300">
<span className="iconify text-[#E40D1A] group-hover:text-white transition-colors" data-icon="solar:sun-fog-linear" data-width="32"></span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Conforto Visual</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                            Lentes especiais que eliminam o ofuscamento dos motoristas e frentistas, garantindo uma distribuição de luz uniforme na pista.
                        </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-red-100 hover:shadow-md transition-all group">
<div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E40D1A] transition-colors duration-300">
<span className="iconify text-[#E40D1A] group-hover:text-white transition-colors" data-icon="solar:clipboard-check-linear" data-width="32"></span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Normas Técnicas</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                            Projetos luminotécnicos em total conformidade com a NBR 8995-1, garantindo os níveis de iluminância exigidos por lei.
                        </p>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden">
<div className="absolute inset-0">
<img alt="Posto Design" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1626242397753-485293299719?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/80"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        Valorização da Marca &amp; <br/>Experiência do Cliente
                    </h2>
<p className="text-slate-300 text-lg font-light leading-relaxed mb-8">
                        Um posto bem iluminado é percebido como mais seguro e confiável. Nossas soluções de alto IRC (Índice de Reprodução de Cor) destacam a identidade visual da sua bandeira e tornam a loja de conveniência muito mais atrativa.
                    </p>
<a className="inline-flex items-center text-white font-bold border-b border-[#E40D1A] pb-1 hover:text-[#E40D1A] transition-colors" href="#contact">
                        Solicitar estudo de retrofit
                        <span className="iconify ml-2" data-icon="solar:arrow-right-linear"></span>
</a>
</div>

<div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
<div className="grid grid-cols-2 gap-4 text-center">
<div className="p-4 rounded-xl bg-white/5">
<span className="block text-3xl font-bold text-[#E40D1A]">+40%</span>
<span className="text-xs text-slate-400 uppercase tracking-wide">Tráfego Noturno</span>
</div>
<div className="p-4 rounded-xl bg-white/5">
<span className="block text-3xl font-bold text-[#E40D1A]">-65%</span>
<span className="text-xs text-slate-400 uppercase tracking-wide">Conta de Luz</span>
</div>
</div>
<p className="mt-6 text-xs text-slate-400 text-center italic">
                        *Dados médios comparados à iluminação convencional (vapor metálico).
                    </p>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12">Soluções para cada ambiente</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">

<div className="lg:col-span-2 group relative rounded-2xl overflow-hidden cursor-pointer">
<img alt="Marquise" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1596700029094-1da645c71d6f?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-bold text-white mb-2">Pista e Marquise</h3>
<p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transform">Luminárias de embutir ou sobrepor com alto fluxo luminoso para pé-direito elevado.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer">
<img alt="Loja Conveniência" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1580910543621-0a794936d8d6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-bold text-white mb-2">Loja de Conveniência</h3>
<p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">IRC &gt; 90 para valorizar produtos.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer">
<img alt="Lavagem" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1628046777083-d52b984b9df1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-bold text-white mb-2">Serviços e Lavagem</h3>
<p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Luminárias herméticas IP66 resistentes à água.</p>
</div>
</div>

<div className="lg:col-span-2 group relative rounded-2xl overflow-hidden cursor-pointer">
<img alt="Estacionamento" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-bold text-white mb-2">Áreas Externas e Perímetro</h3>
<p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transform">Postes e refletores para segurança patrimonial e circulação de caminhões.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="inline-block px-3 py-1 bg-[#E40D1A] text-white text-xs font-bold rounded mb-6">INTELIGÊNCIA</div>
<h2 className="text-3xl md:text-4xl font-semibold mb-6">Eficiência Energética e Retorno Financeiro</h2>
<p className="text-slate-300 text-lg font-light mb-8">
                            Substituir a iluminação antiga por LED Intral não é um custo, é um investimento. O Payback (tempo de retorno) médio em postos de combustível é de apenas 12 a 18 meses.
                        </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<span className="iconify text-[#E40D1A] mt-1" data-icon="solar:graph-new-up-linear" data-width="24"></span>
<div>
<h4 className="font-bold text-white">Redução de Consumo</h4>
<p className="text-sm text-slate-400">Economia de até 70% na fatura de energia elétrica.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="iconify text-[#E40D1A] mt-1" data-icon="solar:settings-minimalistic-linear" data-width="24"></span>
<div>
<h4 className="font-bold text-white">Manutenção Zero</h4>
<p className="text-sm text-slate-400">Vida útil de 50.000h elimina trocas frequentes de lâmpadas em altura.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="iconify text-[#E40D1A] mt-1" data-icon="solar:leaf-linear" data-width="24"></span>
<div>
<h4 className="font-bold text-white">Sustentabilidade</h4>
<p className="text-sm text-slate-400">Menor pegada de carbono e ausência de metais pesados.</p>
</div>
</li>
</ul>
</div>
<div className="order-1 lg:order-2 relative">

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
<img alt="Tecnologia LED" className="w-full h-auto mix-blend-lighten opacity-90 drop-shadow-[0_0_30px_rgba(228,13,26,0.3)]" src="https://i.ibb.co/Ltb26v2/led-highbay-mockup.png"/>

<div className="absolute top-6 right-6 bg-[#E40D1A] text-white text-xs font-bold px-3 py-1 rounded-full">
                                DRIVER INTEGRADO
                             </div>
<div className="absolute bottom-6 left-6">
<p className="text-slate-400 text-xs uppercase tracking-widest">Dissipação Térmica</p>
<p className="text-white font-bold">Alumínio Injetado</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Produtos Recomendados</h2>
<p className="text-slate-500 mt-2">Linha específica para postos e serviços.</p>
</div>
<a className="text-[#E40D1A] font-semibold flex items-center gap-1 hover:gap-2 transition-all mt-4 md:mt-0" href="#">
                        Ver catálogo completo
                        <span className="iconify" data-icon="solar:arrow-right-linear"></span>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
<div className="aspect-[4/3] bg-slate-100 p-8 flex items-center justify-center relative">
<img alt="Luminária Canopy" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://i.ibb.co/Ltb26v2/led-highbay-mockup.png"/>
<span className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded">CANOPY</span>
</div>
<div className="p-6">
<h3 className="text-lg font-bold text-slate-900 mb-1">Luminária LED Posto</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Específica para embutir ou sobrepor em forros de marquises. Facho aberto para uniformidade.</p>
<div className="flex items-center gap-4 mb-6 text-xs text-slate-500 font-medium">
<span className="flex items-center gap-1"><span className="iconify text-[#E40D1A]" data-icon="solar:bolt-linear"></span> 100W/150W</span>
<span className="flex items-center gap-1"><span className="iconify text-[#E40D1A]" data-icon="solar:shield-check-linear"></span> IP66</span>
</div>
<button className="w-full py-3 border border-slate-200 rounded-lg text-slate-700 font-semibold hover:bg-[#E40D1A] hover:text-white hover:border-[#E40D1A] transition-colors flex items-center justify-center gap-2">
                                Ver detalhes
                            </button>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
<div className="aspect-[4/3] bg-slate-100 p-8 flex items-center justify-center relative">

<div className="w-3/4 h-1/4 bg-slate-300 rounded shadow-inner flex items-center justify-center text-xs text-slate-500">Imagem Ilustrativa</div>
<span className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded">HERMÉTICA</span>
</div>
<div className="p-6">
<h3 className="text-lg font-bold text-slate-900 mb-1">Hermética LED Pro</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Ideal para áreas de lavagem, troca de óleo e serviços. Totalmente vedada contra água.</p>
<div className="flex items-center gap-4 mb-6 text-xs text-slate-500 font-medium">
<span className="flex items-center gap-1"><span className="iconify text-[#E40D1A]" data-icon="solar:bolt-linear"></span> 20W/40W</span>
<span className="flex items-center gap-1"><span className="iconify text-[#E40D1A]" data-icon="solar:shield-check-linear"></span> IP66/IK08</span>
</div>
<button className="w-full py-3 border border-slate-200 rounded-lg text-slate-700 font-semibold hover:bg-[#E40D1A] hover:text-white hover:border-[#E40D1A] transition-colors flex items-center justify-center gap-2">
                                Ver detalhes
                            </button>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
<div className="aspect-[4/3] bg-slate-100 p-8 flex items-center justify-center relative">

<div className="w-1/2 h-1/2 bg-slate-400 rounded shadow-lg flex items-center justify-center text-xs text-white">Refletor</div>
<span className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded">ÁREA EXTERNA</span>
</div>
<div className="p-6">
<h3 className="text-lg font-bold text-slate-900 mb-1">Refletor Modular</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Alta potência para iluminação de pátios, estacionamentos e fachadas.</p>
<div className="flex items-center gap-4 mb-6 text-xs text-slate-500 font-medium">
<span className="flex items-center gap-1"><span className="iconify text-[#E40D1A]" data-icon="solar:bolt-linear"></span> Até 500W</span>
<span className="flex items-center gap-1"><span className="iconify text-[#E40D1A]" data-icon="solar:shield-check-linear"></span> IP67</span>
</div>
<button className="w-full py-3 border border-slate-200 rounded-lg text-slate-700 font-semibold hover:bg-[#E40D1A] hover:text-white hover:border-[#E40D1A] transition-colors flex items-center justify-center gap-2">
                                Ver detalhes
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#E40D1A] relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fillOpacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                    Precisa de um projeto de iluminação para seu posto?
                </h2>
<p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
                    Nossa equipe de engenharia realiza o estudo luminotécnico completo sem custo para garantir a melhor solução.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#E40D1A] font-bold rounded-lg text-lg hover:bg-slate-50 hover:shadow-xl transition-all transform hover:-translate-y-1" href="#contact">
                        Fale com um especialista
                        <span className="iconify ml-2" data-icon="solar:chat-round-dots-linear" data-width="24"></span>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#E40D1A] border-2 border-white text-white font-bold rounded-lg text-lg hover:bg-white hover:text-[#E40D1A] transition-all" href="#">
                        Baixar Portfólio PDF
                    </a>
</div>
</div>
</section>
</main>



<footer className="bg-slate-950 text-slate-400 py-16 border-b-8 border-[#E40D1A]">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-1 mb-6">
<span className="text-2xl font-bold tracking-tighter text-white">
                        LUMEN<span className="text-[#E40D1A]">TECH</span>
</span>
</div>
<p className="text-sm max-w-sm mb-8 leading-relaxed">Referência nacional em soluções de iluminação LED profissional. Inovação, qualidade e eficiência para indústrias, postos e comércio.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#E40D1A] hover:text-white transition-colors" href="#"><span className="iconify" data-icon="brandico:instagram" data-width="16"></span></a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#E40D1A] hover:text-white transition-colors" href="#"><span className="iconify" data-icon="brandico:linkedin-rect" data-width="16"></span></a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#E40D1A] hover:text-white transition-colors" href="#"><span className="iconify" data-icon="brandico:facebook-rect" data-width="16"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Soluções</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#E40D1A] transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-[#E40D1A] rounded-full"></span> Indústria</a></li>
<li><a className="hover:text-[#E40D1A] transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-[#E40D1A] rounded-full"></span> Postos de Combustível</a></li>
<li><a className="hover:text-[#E40D1A] transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-[#E40D1A] rounded-full"></span> Logística</a></li>
<li><a className="hover:text-[#E40D1A] transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-[#E40D1A] rounded-full"></span> Iluminação Pública</a></li>
</ul>
</div>
<div id="contact">
<h4 className="text-white font-semibold mb-6">Contato</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-center gap-3"><span className="iconify text-[#E40D1A]" data-icon="solar:phone-linear" data-width="18"></span> (54) 3000-0000</li>
<li className="flex items-center gap-3"><span className="iconify text-[#E40D1A]" data-icon="solar:letter-linear" data-width="18"></span> contato@lumentech.com.br</li>
<li className="flex items-start gap-3"><span className="iconify text-[#E40D1A] mt-1" data-icon="solar:map-point-linear" data-width="18"></span> Caxias do Sul, Rio Grande do Sul</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 text-xs text-center text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
<span>© 2023 Lumentech Iluminação Profissional. Todos os direitos reservados.</span>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacidade</a>
<a className="hover:text-white" href="#">Termos</a>
</div>
</div>
</footer>

    </>
  );
}
