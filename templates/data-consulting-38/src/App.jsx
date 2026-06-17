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



        lucide.createIcons();

        function toggleAccordion(index) {
            const contents = document.querySelectorAll('[id^="accordion-content-"]');
            const icons = document.querySelectorAll('[data-lucide]');
            
            contents.forEach((content, i) => {
                if (i === index) {
                    content.classList.toggle('hidden');
                }
            });
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
      

<header className="py-6 px-6 lg:px-12">
<div className="max-w-7xl mx-auto flex justify-center">
<div className="w-10 h-10 flex items-center justify-center">
<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 40 40">
<rect height="24" rx="2" width="24" x="8" y="8"></rect>
<circle cx="20" cy="20" r="6"></circle>
<line x1="20" x2="20" y1="8" y2="14"></line>
<line x1="20" x2="20" y1="26" y2="32"></line>
<line x1="8" x2="14" y1="20" y2="20"></line>
<line x1="26" x2="32" y1="20" y2="20"></line>
</svg>
</div>
</div>
</header>

<section className="px-6 lg:px-12 pb-12">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
<div className="mb-8 lg:mb-0">
<div className="flex items-center gap-2 mb-6">
<span className="w-2 h-2 bg-orange-500 rounded-full"></span>
<span className="text-xs font-medium text-gray-600 uppercase tracking-wider">FRACTAL DATA</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-gray-900 leading-tight">
                        Making<br/>Data<br/>Simple.
                    </h1>
</div>
<div className="lg:text-right lg:max-w-xs lg:mt-12">
<button className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm py-3 px-6 rounded-full transition-colors mb-4">
                        Entrar em contato
                    </button>
<p className="text-sm text-gray-500 leading-relaxed">
                        Uma ponte entre a complexidade dos dados e decisões inteligentes no dia a dia da sua empresa.
                    </p>
</div>
</div>

<div className="mt-12 rounded-2xl overflow-hidden">
<img alt="Data Analytics Dashboard" className="w-full h-64 lg:h-96 object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&amp;h=500&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-16 px-6 lg:px-12 bg-white">
<div className="max-w-7xl mx-auto">
<div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-70">
<span className="text-lg font-semibold text-gray-800">Abbott</span>
<span className="text-lg font-semibold text-green-700">BAYER</span>
<span className="text-lg font-medium text-gray-700 border border-gray-300 rounded-full px-4 py-1">BLANVER</span>
<span className="text-lg font-semibold text-blue-800">✦ GALDERMA</span>
<span className="text-lg font-semibold text-blue-900">SATED|SP</span>
<span className="text-lg font-semibold text-red-600 italic">Takeda</span>
<span className="text-lg font-semibold text-purple-800">AstraZeneca <span className="text-yellow-500">⚡</span></span>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-12 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<div className="flex items-center justify-center gap-2 mb-4">
<span className="w-2 h-2 bg-orange-500 rounded-full"></span>
<span className="text-xs font-medium text-gray-600 uppercase tracking-wider">BENEFÍCIOS</span>
</div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-gray-900">
                    Como a gente impacta<br/>positivamente os nossos clientes
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="h-48 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 opacity-30">
<div className="absolute top-4 right-4 w-3 h-3 bg-orange-300 rounded-full"></div>
<div className="absolute top-12 right-12 w-2 h-2 bg-orange-200 rounded-full"></div>
<div className="absolute bottom-8 left-8 w-4 h-4 bg-orange-200 rounded-full"></div>
</div>
<svg className="w-24 h-24 text-orange-400" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="#fed7aa" strokeWidth="8"></circle>
<path d="M50 10 A40 40 0 0 1 90 50" fill="none" stroke="#f97316" strokeLinecap="round" strokeWidth="8"></path>
<line stroke="#1f2937" strokeLinecap="round" strokeWidth="3" x1="50" x2="75" y1="50" y2="35"></line>
</svg>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-gray-900 mb-3">Decisões mais rápidas</h3>
<p className="text-base text-gray-600 leading-relaxed">
                            Reduza o tempo entre dado e ação com informações estruturadas.
                        </p>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="h-48 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 opacity-30">
<div className="absolute top-6 left-6 w-2 h-2 bg-orange-300 rounded-full"></div>
<div className="absolute bottom-10 right-10 w-3 h-3 bg-orange-200 rounded-full"></div>
</div>
<div className="relative">
<div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
<div className="w-4 h-4 rounded-full bg-orange-400"></div>
</div>
</div>
<div className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-orange-300"></div>
<div className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-orange-300"></div>
<div className="absolute left-1/2 -translate-x-1/2 -top-8 w-0.5 h-6 bg-orange-300"></div>
<div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-0.5 h-6 bg-orange-300"></div>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-gray-900 mb-3">Dados integrados</h3>
<p className="text-base text-gray-600 leading-relaxed">
                            Centralize dados de diferentes fontes em uma única estrutura confiável e consistente.
                        </p>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="h-48 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 opacity-30">
<div className="absolute top-8 right-8 w-2 h-2 bg-orange-300 rounded-full"></div>
<div className="absolute bottom-6 left-12 w-3 h-3 bg-orange-200 rounded-full"></div>
</div>
<div className="flex items-end gap-2">
<div className="w-6 h-12 bg-orange-200 rounded-t-sm"></div>
<div className="w-6 h-20 bg-orange-300 rounded-t-sm"></div>
<div className="w-6 h-16 bg-orange-400 rounded-t-sm"></div>
<div className="w-6 h-24 bg-orange-500 rounded-t-sm"></div>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-gray-900 mb-3">Mais produtividade</h3>
<p className="text-base text-gray-600 leading-relaxed">
                            Automatize rotinas analíticas e reduza processos manuais no dia a dia das equipes.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-white to-orange-50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<div className="flex items-center justify-center gap-2 mb-4">
<span className="w-2 h-2 bg-orange-500 rounded-full"></span>
<span className="text-xs font-medium text-gray-600 uppercase tracking-wider">PRODUTOS</span>
</div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-gray-900">
                    Temos tudo o que seu time precisa
                </h2>
</div>
<div className="flex flex-wrap justify-center gap-4">
<button className="px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full hover:border-orange-300 hover:bg-orange-50 transition-all">
                    Gestão de Dados de Auditorias de Mercado (AW)
                </button>
<button className="px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full hover:border-orange-300 hover:bg-orange-50 transition-all">
                    Liderança de Projetos de CRM e BI
                </button>
<button className="px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full hover:border-orange-300 hover:bg-orange-50 transition-all">
                    Construção de Dashboards e Relatórios
                </button>
<button className="px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full hover:border-orange-300 hover:bg-orange-50 transition-all">
                    Terceirização de Analistas de SFE, BI e Salesforce.com
                </button>
<button className="px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full hover:border-orange-300 hover:bg-orange-50 transition-all">
                    Automatização de Sistema de Remuneração Variável
                </button>
<button className="px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full hover:border-orange-300 hover:bg-orange-50 transition-all">
                    Consultoria em Análises de Mercado e Forecast de Vendas
                </button>
<button className="px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full hover:border-orange-300 hover:bg-orange-50 transition-all">
                    Terceirização de Suporte à Força de Vendas e Automação de Chamados
                </button>
</div>
</div>
</section>

<div className="relative h-32 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
<div className="absolute inset-0">
<div className="absolute top-4 left-1/4 w-3 h-3 bg-orange-200 rounded-full opacity-60"></div>
<div className="absolute top-12 left-1/3 w-2 h-2 bg-orange-300 rounded-full opacity-40"></div>
<div className="absolute top-8 right-1/4 w-4 h-4 bg-orange-200 rounded-full opacity-50"></div>
<div className="absolute top-16 right-1/3 w-2 h-2 bg-orange-400 rounded-full opacity-30"></div>
<div className="absolute bottom-4 left-1/2 w-3 h-3 bg-orange-300 rounded-full opacity-40"></div>
</div>
</div>

<section className="py-20 px-6 lg:px-12 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-gray-900">
                    Como a gente impacta<br/>positivamente os nossos clientes
                </h2>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-start">

<div className="space-y-0">

<div className="border-t border-gray-200 py-6">
<button className="w-full flex items-start gap-4 text-left" onclick="toggleAccordion(0)">
<i className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" data-lucide="code" strokeWidth="1.5"></i>
<div className="flex-1">
<h3 className="text-base font-medium text-gray-900">Dev Tool</h3>
<div className="mt-3 text-sm text-gray-600 leading-relaxed" id="accordion-content-0">
                                    Descubra como nossa consultoria em desenvolvimento de software pode ajudar sua empresa a criar soluções personalizadas para parametrização de dados, definição de regras de negócio e automação eficiente da captura e envio de informações.
                                </div>
</div>
</button>
</div>

<div className="border-t border-gray-200 py-6">
<button className="w-full flex items-start gap-4 text-left" onclick="toggleAccordion(1)">
<i className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" data-lucide="settings" strokeWidth="1.5"></i>
<div className="flex-1">
<h3 className="text-base font-medium text-gray-900">Analytics Warehouse</h3>
<div className="hidden mt-3 text-sm text-gray-600 leading-relaxed" id="accordion-content-1">
                                    Centralize e organize todos os seus dados em um único repositório analítico, permitindo consultas rápidas e insights precisos para tomada de decisão.
                                </div>
</div>
</button>
</div>

<div className="border-t border-b border-gray-200 py-6">
<button className="w-full flex items-start gap-4 text-left" onclick="toggleAccordion(2)">
<i className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
<div className="flex-1">
<h3 className="text-base font-medium text-gray-900">Data Visualization</h3>
<div className="hidden mt-3 text-sm text-gray-600 leading-relaxed" id="accordion-content-2">
                                    Transforme dados complexos em visualizações intuitivas e dashboards interativos que facilitam a compreensão e comunicação de insights.
                                </div>
</div>
</button>
</div>
</div>

<div className="lg:pl-8">
<div className="rounded-2xl overflow-hidden shadow-lg">
<img alt="Developer workspace with laptop showing code" className="w-full h-72 lg:h-96 object-cover" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&amp;h=400&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-12 bg-white">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
<div>
<div className="flex items-center gap-2 mb-6">
<span className="w-2 h-2 bg-orange-500 rounded-full"></span>
<span className="text-xs font-medium text-gray-600 uppercase tracking-wider">CONTATO</span>
</div>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 leading-tight">
                        Algum case<br/>em mente?
                    </h2>
</div>
<div className="lg:text-left lg:max-w-sm lg:mt-8">
<p className="text-base text-gray-600 mb-6">
                        Gostaria de entrar em contato com a gente?<br/>Nos mande um e-mail
                    </p>
<a className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-600 font-medium text-sm py-3 px-6 rounded-full transition-colors" href="mailto:contato@fractaldata.com.br">
                        contato@fractaldata.com.br
                    </a>
</div>
</div>
</div>
</section>

<footer className="py-8 px-6 lg:px-12 border-t border-gray-100">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
<p>© 2026 Fractal Data.</p>
<p>Todos os direitos reservados.</p>
<p>Todos os direitos reservados.</p>
</div>
</div>
</footer>


    </>
  );
}
