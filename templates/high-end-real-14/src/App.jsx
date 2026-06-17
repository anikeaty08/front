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



        // Initialize Lucide Icons
        lucide.createIcons();
    
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
      

<div className="p-2 md:p-4 h-screen min-h-[700px] flex flex-col">
<div className="relative w-full h-full rounded-[2rem] overflow-hidden group">

<img alt="Hero Background" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" src="https://images.unsplash.com/photo-1600596542815-e32c8cc22af9?q=80&amp;w=2674&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

<nav className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto z-50">
<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-1.5 py-1.5 flex items-center justify-between md:gap-8">

<a className="pl-4 pr-4 flex items-center gap-0.5 text-white" href="#">
<span className="text-lg font-semibold tracking-tighter">ZR</span>
<span className="text-lg font-semibold tracking-tighter text-[#005CB9]">3</span>
</a>

<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-1.5 text-xs font-medium text-white hover:bg-white/10 rounded-full transition-colors" href="#home">Início</a>
<a className="px-4 py-1.5 text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors" href="#developments">Empreendimentos</a>
<a className="px-4 py-1.5 text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors" href="#about">Quem Somos</a>
</div>

<a className="hidden md:block pr-1" href="#contact">
<button className="bg-white text-[#0C0C0C] hover:bg-zinc-100 rounded-full px-5 py-2 text-xs font-medium transition-colors">
                            Contato
                        </button>
</a>

<button className="md:hidden p-2 text-white">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</nav>

<div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24">
<div className="max-w-4xl">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-[10px] uppercase tracking-widest font-medium mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-[#005CB9]"></span>
                        Lançamento 2024
                    </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[0.95] mb-6 text-balance">
                        Investimento inteligente <br/>
                        em <span className="italic font-light text-white/80">Imóveis.</span>
</h1>
<p className="text-white/70 text-base md:text-lg font-light max-w-xl leading-relaxed mb-10 text-balance">
                        Da fundação ao acabamento, somos seus parceiros na construção do futuro. Excelência técnica e design atemporal em cada metro quadrado.
                    </p>
</div>
</div>

<div className="absolute bottom-8 left-6 md:left-12 flex gap-3">
<button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
<i className="w-4 h-4" data-lucide="instagram"></i>
</button>
<button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
<i className="w-4 h-4" data-lucide="facebook"></i>
</button>
</div>
<div className="absolute bottom-8 right-6 md:right-12 hidden md:flex items-center gap-4 bg-[#0C0C0C]/40 backdrop-blur-xl border border-white/10 p-2 pl-4 rounded-full pr-2">
<div className="flex flex-col items-start mr-2">
<span className="text-xs text-white font-medium">Obras em andamento</span>
<span className="text-[10px] text-white/60">Atualizado semanalmente</span>
</div>
<div className="flex -space-x-3">
<img alt="Obra 1" className="w-10 h-10 rounded-full border-2 border-white/10 object-cover" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="Obra 2" className="w-10 h-10 rounded-full border-2 border-white/10 object-cover" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="w-10 h-10 rounded-full border-2 border-white/10 bg-[#005CB9] flex items-center justify-center text-white text-[10px] font-medium">+3</div>
</div>
</div>
</div>
</div>

<section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto bg-dot-pattern">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-20">
<div className="lg:w-1/3 pt-12">
<h3 className="text-sm font-semibold uppercase tracking-widest text-[#005CB9] mb-4">Conceito ZR3</h3>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0C0C0C] mb-6 leading-tight">
                    Tecnologia construtiva que inicia projetos complexos do zero.
                </h2>
<div className="h-px w-20 bg-[#005CB9] mb-6"></div>
</div>
<div className="lg:w-2/3">
<p className="text-zinc-500 font-light text-lg leading-relaxed">
                    Nossa metodologia integra arquitetura moderna e engenharia de precisão. Cada empreendimento ZR3 é planejado para maximizar o conforto térmico, lumínico e acústico, garantindo um ativo de valorização constante no mercado imobiliário.
                </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

<div className="lg:mt-24 group">
<div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] mb-6">
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
<i className="w-5 h-5 text-[#0C0C0C]" data-lucide="arrow-up-right"></i>
</div>
<div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
<span className="bg-[#005CB9] text-white text-[10px] uppercase font-bold px-2 py-1 rounded mb-2 inline-block">Em Obras</span>
<h3 className="text-white text-xl font-medium">Residencial Dualité</h3>
</div>
</div>
<div className="flex justify-between items-start px-2">
<div>
<h4 className="text-lg font-medium text-[#0C0C0C]">Dualité Concept</h4>
<p className="text-sm text-zinc-500 font-light">Joinville, Glória</p>
</div>
<p className="text-sm font-medium text-[#0C0C0C]">Desde R$ 450.000</p>
</div>
</div>

<div className="group">
<div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] lg:aspect-[4/3] mb-6">
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
<i className="w-5 h-5 text-[#0C0C0C]" data-lucide="arrow-up-right"></i>
</div>
<div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
<span className="bg-white text-[#0C0C0C] text-[10px] uppercase font-bold px-2 py-1 rounded mb-2 inline-block">Últimas Unidades</span>
<h3 className="text-white text-xl font-medium">Edifício Lumina</h3>
</div>
</div>
<div className="flex justify-between items-start px-2">
<div>
<h4 className="text-lg font-medium text-[#0C0C0C]">Lumina Tower</h4>
<p className="text-sm text-zinc-500 font-light">Joinville, Centro</p>
</div>
<p className="text-sm font-medium text-[#0C0C0C]">Desde R$ 890.000</p>
</div>
</div>
</div>
</section>

<section className="py-12 px-2 md:px-4">
<div className="max-w-screen-2xl mx-auto text-center mb-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0C0C0C] mb-2">Encontre a residência ideal</h2>
<p className="text-zinc-500 font-light">Localizações estratégicas perto de tudo que você precisa.</p>
</div>
<div className="relative w-full h-[600px] md:h-[700px] rounded-[2.5rem] overflow-hidden bg-zinc-200 border border-zinc-300">

<img alt="Map Location" className="w-full h-full object-cover grayscale opacity-60" src="https://carto.com/help/images/guides/styling/basemaps_voyager.png"/>

<div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm border border-white/50">
<button className="px-6 py-2.5 bg-[#0C0C0C] text-white rounded-full text-xs font-medium shadow-lg hover:bg-black transition-colors">
                    Próximos a mim
                </button>
<button className="px-6 py-2.5 bg-transparent text-zinc-600 hover:bg-white rounded-full text-xs font-medium transition-colors">
                    Ver todos
                </button>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="relative mb-2 group cursor-pointer">
<div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-2xl relative z-10 transition-transform hover:scale-110">
<img alt="Agent" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#005CB9] rotate-45 z-0"></div>
</div>
<div className="bg-[#8ecae6] text-[#005CB9] px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wide shadow-sm animate-bounce">
                    Você está aqui
                </div>

<div className="absolute top-6 left-1/2 -translate-x-1/2 w-[400px] h-[400px] border border-[#005CB9]/20 rounded-full -z-10 pointer-events-none"></div>
<div className="absolute top-6 left-1/2 -translate-x-1/2 w-[250px] h-[250px] border border-[#005CB9]/30 rounded-full -z-10 pointer-events-none"></div>
</div>

<svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 50 50 Q 70 60 85 80" fill="none" stroke="#005CB9" stroke-dasharray="1 1" strokeWidth="0.2"></path>
<path d="M 50 50 Q 30 60 15 70" fill="none" stroke="#005CB9" stroke-dasharray="1 1" strokeWidth="0.2"></path>
</svg>
</div>
</section>

<section className="py-24 px-6 overflow-hidden relative">

<div className="absolute top-20 left-10 w-64 h-64 bg-zinc-100 rounded-full blur-3xl -z-10"></div>
<div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10"></div>
<div className="max-w-screen-xl mx-auto relative h-[500px] md:h-[600px] flex items-center justify-center">

<div className="text-center relative z-10">
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-[#0C0C0C] leading-[0.9]">
                    Encontre o lar <br/> 
                    no <span className="text-zinc-300">coração</span> <br/>
                    da cidade.
                </h2>
</div>


<div className="absolute top-0 md:top-10 left-0 md:left-20 w-40 md:w-56 rounded-2xl overflow-hidden shadow-2xl rotate-[-6deg] hover:rotate-0 transition-all duration-500 hover:scale-105 z-20">
<img alt="Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-0 md:bottom-10 right-0 md:right-20 w-48 md:w-64 rounded-2xl overflow-hidden shadow-2xl rotate-[6deg] hover:rotate-0 transition-all duration-500 hover:scale-105 z-20">
<img alt="Exterior Night" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-zinc-100 hover:scale-110 transition-transform">
<i className="w-6 h-6 text-[#005CB9]" data-lucide="home"></i>
</div>

<div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-[#0C0C0C] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform z-30">
<i className="w-8 h-8 text-white" data-lucide="building-2"></i>
</div>

<div className="absolute bottom-10 left-10 md:left-1/3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-zinc-100">
<i className="w-5 h-5 text-zinc-400" data-lucide="trees"></i>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white rounded-t-[3rem]">
<div className="max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0C0C0C] max-w-2xl leading-tight">
                    Compre um condomínio de luxo com terraço privativo e área de lazer completa.
                </h2>
<div className="flex gap-3">
<button className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
<i className="w-5 h-5 text-zinc-600" data-lucide="chevron-left"></i>
</button>
<button className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-[#005CB9] hover:border-[#005CB9] group transition-all">
<i className="w-5 h-5 text-zinc-600 group-hover:text-white" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="rounded-[2rem] overflow-hidden aspect-[16/10] mb-6 relative">
<img alt="Marden Cortes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="flex justify-between items-start border-t border-zinc-100 pt-6">
<h3 className="text-xl font-medium text-[#0C0C0C]">Residencial Marden</h3>
<p className="text-[10px] text-zinc-400 font-light max-w-[200px] text-right uppercase tracking-wide">
                            Materiais de alta qualidade, cortinas modernas fornecem excelente controle de luz.
                        </p>
</div>
</div>

<div className="group cursor-pointer">
<div className="rounded-[2rem] overflow-hidden aspect-[16/10] mb-6 relative">
<img alt="Sunshine Vila" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="flex justify-between items-start border-t border-zinc-100 pt-6">
<h3 className="text-xl font-medium text-[#0C0C0C]">Sunshine Vila</h3>
<p className="text-[10px] text-zinc-400 font-light max-w-[200px] text-right uppercase tracking-wide">
                            Design biofílico, áreas comuns integradas com a natureza local.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#F8F9FA]">
<div className="max-w-screen-xl mx-auto">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#0C0C0C] mb-8 leading-[1.1]">
                        Explore o feedback dos <br/> nossos clientes sobre <br/> nossos produtos!
                    </h2>

<div className="w-24 h-12 mb-8 text-[#005CB9]">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" viewbox="0 0 100 50">
<path d="M5 25 Q 25 5, 50 25 T 95 25"></path>
</svg>
</div>
</div>
<div className="relative bg-white p-10 rounded-[2rem] shadow-sm border border-zinc-100">
<div className="absolute -top-4 -left-4 bg-[#005CB9] text-white p-3 rounded-xl">
<i className="w-6 h-6 fill-current" data-lucide="quote"></i>
</div>
<p className="text-zinc-500 font-light text-lg italic leading-relaxed mb-8">
                        "A equipe foi profissional, experiente e me guiou em cada passo do caminho para encontrar a casa dos meus sonhos. A atenção aos detalhes e o compromisso em entender minhas necessidades tornaram todo o processo tranquilo e sem estresse."
                    </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-sm font-semibold text-[#0C0C0C]">Aubrey Royel</h4>
<p className="text-xs text-zinc-400 uppercase tracking-wide">Co-founder</p>
</div>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:border-[#005CB9] hover:text-[#005CB9] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:border-[#005CB9] hover:text-[#005CB9] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0C0C0C] text-white py-12 px-6">
<div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-0.5">
<span className="text-xl font-semibold tracking-tighter">ZR</span>
<span className="text-xl font-semibold tracking-tighter text-[#005CB9]">3</span>
</div>
<p className="text-xs text-zinc-500">© 2024 ZR3 Empreendimentos. Todos os direitos reservados.</p>
</div>
</footer>


    </>
  );
}
