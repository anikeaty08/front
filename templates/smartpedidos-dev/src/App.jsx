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
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
dark: '#0F172A',
medium: '#2563EB',
accent: '#1665FE',
accentHover: '#0F4CDB',
surface: '#F8FAFC'
}
},
letterSpacing: {
tightest: '-0.035em',
},
animation: {
'fade-in': 'fadeIn 0.3s ease-out',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Simple function to maintain the tab logic on this page if user scrolls down instead of clicking nav
        function switchTab(tabId) {
            ['industrias', 'distribuidoras', 'representantes'].forEach(id => {
                document.getElementById('content-' + id).classList.add('hidden');
                document.getElementById('tab-' + id).classList.remove('active', 'border-brand-accent', 'text-brand-accent');
                document.getElementById('tab-' + id).classList.add('border-transparent', 'text-slate-500');
            });
            document.getElementById('content-' + tabId).classList.remove('hidden');
            const activeTab = document.getElementById('tab-' + tabId);
            activeTab.classList.add('active', 'border-brand-accent', 'text-brand-accent');
            activeTab.classList.remove('border-transparent', 'text-slate-500');
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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-100/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 hover:opacity-90 transition-opacity" href="/">
<div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-white shadow-lg shadow-brand-accent/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-brand-dark">Smart Pedidos</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">

<div className="relative group h-16 flex items-center">
<button className="flex items-center gap-1.5 hover:text-brand-accent transition-colors focus:outline-none py-2">
                        Segmentos
                        <svg aria-hidden="true" className="iconify text-slate-400 group-hover:text-brand-accent transition-colors duration-200 iconify--lucide" data-icon="lucide:chevron-down" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>

<div className="absolute top-full -left-4 w-72 pt-2 invisible opacity-0 translate-y-2 transition-all duration-200 ease-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
<div className="bg-white rounded-xl border border-slate-100 shadow-xl shadow-slate-200/50 p-2 overflow-hidden">

<a className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item" href="?segmento=industrias">
<div className="mt-1 w-8 h-8 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:factory" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01M16 16h.01M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm5-3h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<div className="group-hover/item:text-indigo-600 transition-colors text-sm font-semibold text-slate-900">Para Indústrias</div>
<div className="text-xs text-slate-500 mt-0.5 leading-snug">Controle de produção e sell-out integrado.</div>
</div>
</a>

<a className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item" href="?segmento=distribuidoras">
<div className="mt-1 w-8 h-8 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:truck" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></g></svg>
</div>
<div>
<div className="text-slate-900 font-semibold text-sm group-hover/item:text-blue-600 transition-colors">Para Distribuidoras</div>
<div className="text-xs text-slate-500 mt-0.5 leading-snug">Logística, roteirização e margem real.</div>
</div>
</a>

<a className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item" href="?segmento=representantes">
<div className="mt-1 w-8 h-8 rounded-md bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover/item:bg-teal-600 group-hover/item:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:briefcase" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>
<div>
<div className="text-slate-900 font-semibold text-sm group-hover/item:text-teal-600 transition-colors">Para Representantes</div>
<div className="text-xs text-slate-500 mt-0.5 leading-snug">Gestão de múltiplas pastas e comissões.</div>
</div>
</a>
</div>
</div>
</div>
<a className="hover:text-brand-accent transition-colors" href="#funcionalidades">Funcionalidades</a>
<a className="hover:text-brand-accent transition-colors" href="#integracoes">Integrações</a>
<a className="hover:text-brand-accent transition-colors" href="#precos">Preços</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-brand-accent transition-colors" href="#">Login</a>
<a className="bg-brand-dark hover:bg-slate-800 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all shadow-sm" href="#demo">
                    Agendar Demo
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden mesh-gradient">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-brand-accent relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
</span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Nova IA Sales Assistant 2.0</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tightest leading-[1.1] mb-6">
                    Vendedores <span className="text-brand-accent">40% Mais Produtivos</span><br className="hidden md:block"/>
                    com IA que Sugere, Orienta e Vende Junto
                </h1>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mb-10">
                    Sistema completo de força de vendas com e-commerce B2B integrado e Inteligência Artificial que sugere o produto certo, para o cliente certo, no momento certo.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accentHover text-white text-base font-semibold py-4 px-8 rounded-xl transition-all shadow-lg shadow-brand-accent/25 hover:scale-[1.02] flex items-center justify-center gap-2" href="#demo">
                        Agendar Demo Grátis
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:text-brand-accent text-base font-medium py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:play-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                        Ver Vídeo (2 min)
                    </button>
</div>

<div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
<div className="flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify text-brand-accent iconify--lucide" data-icon="lucide:check-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span>500+ Empresas</span>
</div>
<div className="hidden sm:flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify text-yellow-400 iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>4.8/5.0 Satisfação</span>
</div>
<div className="hidden sm:flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify text-brand-accent iconify--lucide" data-icon="lucide:trending-up" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
<span>+35% Vendas</span>
</div>
</div>
</div>

<div className="mt-16 lg:mt-24 relative mx-auto max-w-5xl">
<div className="absolute -inset-1 bg-gradient-to-r from-brand-accent/30 to-purple-500/30 rounded-2xl blur opacity-30"></div>
<div className="relative bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden">
<div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
</div>
<div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-50/50">
<div className="hidden md:block md:col-span-2 space-y-4">
<div className="h-2 w-20 bg-slate-200 rounded"></div>
<div className="space-y-2">
<div className="h-8 w-full bg-brand-accent/10 rounded flex items-center px-3 text-brand-accent text-xs font-semibold">Dashboard</div>
<div className="h-8 w-full bg-transparent rounded flex items-center px-3 text-slate-400 text-xs hover:bg-slate-100 transition-colors">Pedidos</div>
<div className="h-8 w-full bg-transparent rounded flex items-center px-3 text-slate-400 text-xs hover:bg-slate-100 transition-colors">Clientes</div>
<div className="h-8 w-full bg-transparent rounded flex items-center px-3 text-slate-400 text-xs hover:bg-slate-100 transition-colors">Produtos</div>
</div>
</div>
<div className="col-span-12 md:col-span-10 space-y-6">
<div className="grid grid-cols-3 gap-4">
<div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
<div className="text-xs text-slate-400 mb-1">Vendas Hoje</div>
<div className="text-xl font-semibold text-slate-800">R$ 42.500</div>
<div className="text-xs text-brand-accent mt-2 flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> +12%
                                    </div>
</div>
<div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
<div className="text-xs text-slate-400 mb-1">Pedidos</div>
<div className="text-xl font-semibold text-slate-800">148</div>
<div className="text-xs text-brand-accent mt-2 flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> +5%
                                    </div>
</div>
<div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
<div className="text-xs text-slate-400 mb-1">Ticket Médio</div>
<div className="text-xl font-semibold text-slate-800">R$ 287</div>
<div className="text-xs text-brand-accent mt-2 flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> +8%
                                    </div>
</div>
</div>
<div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex gap-4 items-start">
<div className="bg-brand-accent p-2 rounded-md text-white shadow-md shadow-brand-accent/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Sugestão Smart IA</div>
<div className="text-xs text-slate-600 mt-1">O cliente  costuma repor estoque de Bebidas às terças. Última compra há 15 dias. Sugira o Mix de Verão.</div>
<div className="mt-3 flex gap-2">
<div className="bg-white border border-blue-200 text-xs font-medium px-3 py-1.5 rounded shadow-sm text-brand-accent cursor-pointer hover:bg-blue-50">Adicionar ao Pedido</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-white py-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">Empresas que crescem com Smart Pedidos</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tighter text-slate-800">DISTRIBUIDORA<span className="font-light">SUL</span></span>
<span className="text-xl font-bold tracking-tighter text-slate-800">ATACADO<span className="text-brand-accent">24h</span></span>
<span className="text-xl font-bold tracking-tighter text-slate-800">LOG<span className="italic font-serif">MAIS</span></span>
<span className="text-xl font-bold tracking-tighter text-slate-800">MEGA<span className="font-light">MIX</span></span>
<span className="text-xl font-bold tracking-tighter text-slate-800">INDUSTRIA<span className="text-slate-400">BR</span></span>
</div>
</div>
</section>

<section className="py-24 bg-brand-surface border-b border-slate-200" id="segmentos-home">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Feito para o seu modelo de negócio</h2>
<p className="text-lg text-slate-500">Escolha seu segmento no menu acima ou veja abaixo como adaptamos a plataforma.</p>
</div>

<div className="flex justify-center border-b border-slate-200 mb-12 overflow-x-auto">
<div className="flex space-x-8 px-4 min-w-max">
<button className="tab-btn active pb-4 text-sm font-semibold border-b-2 text-brand-accent border-brand-accent px-2" id="tab-industrias" onclick="switchTab('industrias')">
                        Para Indústrias
                    </button>
<button className="tab-btn pb-4 text-sm font-semibold border-b-2 border-transparent text-slate-500 hover:text-slate-700 px-2" id="tab-distribuidoras" onclick="switchTab('distribuidoras')">
                        Para Distribuidoras
                    </button>
<button className="tab-btn pb-4 text-sm font-semibold border-b-2 border-transparent text-slate-500 hover:text-slate-700 px-2" id="tab-representantes" onclick="switchTab('representantes')">
                        Para Representantes
                    </button>
</div>
</div>

<div className="relative min-h-[400px]">

<div className="animate-fade-in grid lg:grid-cols-2 gap-12 items-center" id="content-industrias">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wide mb-6">
                            Indústria
                        </div>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
                            Conecte sua produção direto ao ponto de venda
                        </h3>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                            Tenha visibilidade total do sell-out e controle sua estratégia de canais. Integre pedidos diretamente com o PCP para otimizar estoques e produção.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:factory" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01M16 16h.01M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm5-3h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-slate-600 font-medium">Controle de políticas comerciais por canal</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-3" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-slate-600 font-medium">KPIs de positivação e cobertura de mix</span>
</li>
</ul>
</div>
<div className="order-1 lg:order-2 bg-white rounded-2xl p-2 border border-slate-200 shadow-xl shadow-slate-200/50 rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="bg-slate-50 rounded-xl overflow-hidden aspect-[4/3] relative flex items-center justify-center">
<div className="text-center p-8">
<div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 text-brand-accent">
<span className="iconify" data-icon="lucide:conveyor" data-width="32"></span>
</div>
<div className="text-slate-900 font-semibold mb-2">Visão 360º da Produção</div>
<div className="text-slate-400 text-sm">Integração nativa ERP Industrial</div>
</div>
</div>
</div>
</div>

<div className="hidden animate-fade-in grid lg:grid-cols-2 gap-12 items-center" id="content-distribuidoras">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-accent text-xs font-semibold uppercase tracking-wide mb-6">
                            Distribuidora
                        </div>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
                            Logística e Vendas em perfeita sintonia
                        </h3>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                            Aumente a margem de cada pedido. Nossa IA sugere rotas otimizadas e previne a venda de itens sem estoque ou com margem negativa antes de fechar o pedido.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:truck" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></g></svg>
</div>
<span className="text-slate-600 font-medium">Roteirização inteligente por geolocalização</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:package-check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 16l2 2l4-4"></path><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15"></path><path d="M3.29 7L12 12l8.71-5M12 22V12"></path></g></svg>
</div>
<span className="text-slate-600 font-medium">Controle de estoque em tempo real</span>
</li>
</ul>
</div>
<div className="order-1 lg:order-2 bg-white rounded-2xl p-2 border border-slate-200 shadow-xl shadow-slate-200/50 -rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="bg-slate-50 rounded-xl overflow-hidden aspect-[4/3] relative flex items-center justify-center">
<div className="text-center p-8">
<div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 text-blue-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-slate-900 font-semibold mb-2">Roteirização Dinâmica</div>
<div className="text-slate-400 text-sm">Economia de combustível e tempo</div>
</div>
</div>
</div>
</div>

<div className="hidden animate-fade-in grid lg:grid-cols-2 gap-12 items-center" id="content-representantes">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-semibold uppercase tracking-wide mb-6">
                            Representantes
                        </div>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
                            Seu escritório completo na palma da mão
                        </h3>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                            Gerencie múltiplas pastas (representadas) em um único aplicativo. Elimine a papelada, envie pedidos em segundos e receba suas comissões corretamente.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:briefcase" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>
<span className="text-slate-600 font-medium">Multi-representadas (Pastas separadas)</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wifi-off" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01M8.5 16.429a5 5 0 0 1 7 0M5 12.859a10 10 0 0 1 5.17-2.69m8.83 2.69a10 10 0 0 0-2.007-1.523M2 8.82a15 15 0 0 1 4.177-2.643M22 8.82a15 15 0 0 0-11.288-3.764M2 2l20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-slate-600 font-medium">Funciona 100% Offline</span>
</li>
</ul>
</div>
<div className="order-1 lg:order-2 bg-white rounded-2xl p-2 border border-slate-200 shadow-xl shadow-slate-200/50 rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="bg-slate-50 rounded-xl overflow-hidden aspect-[4/3] relative flex items-center justify-center">
<div className="text-center p-8">
<div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 text-teal-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:smartphone" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></g></svg>
</div>
<div className="text-slate-900 font-semibold mb-2">App Ágil e Offline</div>
<div className="text-slate-400 text-sm">Pedidos em menos de 1 minuto</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Resolva os gargalos da sua operação</h2>
<p className="text-lg text-slate-500">Elimine processos manuais e dê ao seu time as ferramentas para vender mais.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Produtividade Multiplicada</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Automatização de tarefas operacionais e roteirização inteligente. Clientes economizam 6h/semana por vendedor.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:brain-circuit" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></g></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">IA que Vende Junto</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Algoritmos analisam histórico para sugerir produtos complementares. Aumente seu ticket médio sem esforço extra.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shopping-bag" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">E-commerce B2B Nativo</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Portal de autoatendimento onde seus clientes compram 24/7. Vendas continuam acontecendo mesmo sem visita.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden border-t border-slate-100" id="funcionalidades">
<div className="max-w-7xl mx-auto px-6 space-y-32">

<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-accent text-xs font-semibold uppercase tracking-wide mb-6">
                        Inteligência Artificial
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                        IA que vende junto com seu vendedor
                    </h2>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        Nossa IA analisa histórico, perfil e comportamento de compra para sugerir produtos complementares e cross-sell no momento certo.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-brand-accent mt-1 iconify--lucide" data-icon="lucide:check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-600">Recomendações inteligentes de produtos relacionados</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-brand-accent mt-1 iconify--lucide" data-icon="lucide:check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-600">Alertas de produtos que o cliente parou de comprar (Churn)</span>
</li>
</ul>
</div>
<div className="lg:w-1/2 w-full bg-slate-50 rounded-2xl border border-slate-100 p-8 relative">
<div className="space-y-4">
<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
<div className="w-12 h-12 bg-gray-100 rounded-lg shrink-0"></div>
<div className="flex-1">
<div className="h-4 w-3/4 bg-slate-100 rounded mb-2"></div>
<div className="h-3 w-1/2 bg-slate-50 rounded"></div>
</div>
<div className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">Alta Prob.</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-xl shadow-blue-900/5 border border-blue-100 relative z-10 scale-105 transition-transform">
<div className="absolute -top-3 -right-3 bg-brand-accent text-white rounded-full p-1.5 shadow-lg">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-blue-50 rounded-lg shrink-0 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-brand-accent iconify--lucide" data-icon="lucide:package" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path><path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path></g></svg>
</div>
<div className="flex-1">
<div className="text-sm font-semibold text-slate-800">Sugestão: Cerveja Artesanal IPA</div>
<div className="text-xs text-slate-500 mt-1">Baseado na compra de Snacks Premium</div>
</div>
</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 opacity-60">
<div className="w-12 h-12 bg-gray-100 rounded-lg shrink-0"></div>
<div className="flex-1">
<div className="h-4 w-2/3 bg-slate-100 rounded mb-2"></div>
<div className="h-3 w-1/2 bg-slate-50 rounded"></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center border border-slate-100" id="integracoes">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Integra com seu ERP em tempo real</h2>
<p className="text-slate-500 max-w-2xl mx-auto mb-10">Sincronização automática e bidirecional com mais de 40 ERPs do mercado.</p>
<div className="flex flex-wrap justify-center gap-4">
<div className="bg-white px-6 py-3 rounded-lg border border-slate-200 shadow-sm font-semibold text-slate-600 text-sm hover:border-brand-accent/50 transition-colors">Protheus</div>
<div className="bg-white px-6 py-3 rounded-lg border border-slate-200 shadow-sm font-semibold text-slate-600 text-sm hover:border-brand-accent/50 transition-colors">Sankhya</div>
<div className="bg-white px-6 py-3 rounded-lg border border-slate-200 shadow-sm font-semibold text-slate-600 text-sm hover:border-brand-accent/50 transition-colors">SAP B1</div>
<div className="bg-white px-6 py-3 rounded-lg border border-slate-200 shadow-sm font-semibold text-slate-600 text-sm hover:border-brand-accent/50 transition-colors">Bling</div>
<div className="bg-white px-6 py-3 rounded-lg border border-slate-200 shadow-sm font-semibold text-slate-600 text-sm border-dashed border-slate-300 text-slate-400">+35 Outros</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100" id="precos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Investimento que se paga no 1º mês</h2>
<p className="text-lg text-slate-500 mb-8">Escoha o plano ideal para o tamanho da sua operação.</p>
<div className="flex items-center justify-center gap-4">
<span className="text-sm font-medium text-slate-500">Mensal</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-brand-accent after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
</label>
<span className="text-sm font-medium text-slate-900">Anual <span className="text-brand-accent text-xs bg-blue-50 px-2 py-0.5 rounded-full ml-1">-20%</span></span>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="bg-white p-8 rounded-2xl border border-slate-200">
<h3 className="text-lg font-medium text-slate-900 mb-2">Starter</h3>
<p className="text-sm text-slate-500 mb-6 h-10">Para pequenas equipes comerciais.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-bold text-slate-900 tracking-tight">R$ 49</span>
<span className="text-slate-500 font-medium">/usuário</span>
</div>
<a className="block w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-900 text-center font-semibold rounded-xl border border-slate-200 transition-colors mb-8" href="#demo">Começar Agora</a>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex items-center gap-3"><svg aria-hidden="true" className="iconify text-brand-accent iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> App Força de Vendas Offline</li>
<li className="flex items-center gap-3"><svg aria-hidden="true" className="iconify text-brand-accent iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Catálogo Digital</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border-2 border-brand-accent shadow-xl shadow-brand-accent/10 relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Mais Popular</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 flex items-center gap-2">
                        Business
                        <svg aria-hidden="true" className="iconify text-brand-accent iconify--lucide" data-icon="lucide:zap" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</h3>
<p className="text-sm text-slate-500 mb-6 h-10">Automação total e IA para escalar vendas.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-bold text-slate-900 tracking-tight">R$ 89</span>
<span className="text-slate-500 font-medium">/usuário</span>
</div>
<a className="block w-full py-3 px-4 bg-brand-accent hover:bg-brand-accentHover text-white text-center font-semibold rounded-xl shadow-lg shadow-brand-accent/25 transition-all hover:scale-[1.02] mb-8" href="#demo">Testar Grátis</a>
<ul className="space-y-4 text-sm text-slate-600 font-medium">
<li className="flex items-center gap-3"><svg aria-hidden="true" className="iconify text-brand-accent iconify--lucide" data-icon="lucide:check-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Tudo do Starter</li>
<li className="flex items-center gap-3"><svg aria-hidden="true" className="iconify text-brand-accent iconify--lucide" data-icon="lucide:check-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> IA Sales Assistant</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200">
<h3 className="text-lg font-medium text-slate-900 mb-2">Enterprise</h3>
<p className="text-sm text-slate-500 mb-6 h-10">Para grandes distribuidoras e indústrias.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-bold text-slate-900 tracking-tight">Sob Consulta</span>
</div>
<a className="block w-full py-3 px-4 bg-white hover:bg-slate-50 text-slate-900 text-center font-semibold rounded-xl border border-slate-200 transition-colors mb-8" href="#demo">Falar com Consultor</a>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex items-center gap-3"><svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Volume ilimitado de SKUs</li>
<li className="flex items-center gap-3"><svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Gerente de Conta Dedicado</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark relative overflow-hidden" id="demo">
<div className="absolute inset-0 bg-gradient-to-t from-brand-accent/10 to-transparent"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Pronto para vender mais?</h2>
<p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                Agende uma demonstração gratuita hoje e veja como o Smart Pedidos pode transformar sua operação comercial.
            </p>
<form className="bg-white p-2 rounded-2xl shadow-2xl max-w-lg mx-auto flex flex-col sm:flex-row gap-2">
<input className="flex-1 px-6 py-4 rounded-xl text-slate-900 outline-none placeholder:text-slate-400 bg-transparent" placeholder="Seu e-mail corporativo" required="" type="email"/>
<button className="bg-brand-accent hover:bg-brand-accentHover text-white font-semibold py-4 px-8 rounded-xl transition-colors whitespace-nowrap shadow-lg shadow-brand-accent/25" type="submit">
                    Agendar Demo
                </button>
</form>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-brand-accent rounded flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-semibold tracking-tight text-brand-dark">Smart Pedidos</span>
</div>
<div className="text-sm text-slate-500">
                © 2025 Smart Pedidos Tecnologia Ltda.
            </div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-brand-accent transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-slate-400 hover:text-brand-accent transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
</div>
</div>
</footer>


    </>
  );
}
