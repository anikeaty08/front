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
navy: {
50: '#f0f4f8',
100: '#d9e2ec',
800: '#102a43',
900: '#0B1120', // Deep Navy
950: '#060912',
},
gold: {
400: '#d4af37', // Muted Gold
500: '#b08d26',
}
},
boxShadow: {
'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'card': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="group flex items-center gap-2" href="#">
<div className="bg-navy-900 text-white p-1.5 rounded-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:building-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></g></svg>
</div>
<span className="text-xl font-semibold tracking-tighter text-navy-900 uppercase">
                    NEXIA<span className="text-slate-400 font-light">GESTÃO</span>
</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-navy-900 transition-colors" href="#servicos">Serviços</a>
<a className="hover:text-navy-900 transition-colors" href="#diferenciacao">Diferenciação</a>
<a className="hover:text-navy-900 transition-colors" href="#sobre">Sobre Nós</a>
<a className="hover:text-navy-900 transition-colors" href="#faq">Perguntas</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-navy-900 hover:text-navy-800 transition-colors" href="#contactos">
                    Contactar
                </a>
<a className="flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white text-sm font-medium py-2.5 px-5 rounded-full transition-all duration-300 shadow-subtle hover:shadow-lg hover:-translate-y-0.5" href="https://wa.me/351910000000">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>WhatsApp</span>
</a>
</div>

<button className="md:hidden p-2 text-slate-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</header>
<main className="pt-20">

<section className="relative min-h-[90vh] flex items-center justify-center bg-texture overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 text-navy-800 text-xs font-medium mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                        Contabilidade e Gestão de Confiança em Oeiras
                    </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-navy-900 mb-8 leading-[1.1]">
                        O parceiro rigoroso para a <br className="hidden md:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-navy-900 via-navy-800 to-slate-500">gestão do seu negócio.</span>
</h1>
<p className="text-lg text-slate-500 mb-10 max-w-2xl leading-relaxed font-light">
                        Garantimos tranquilidade financeira e cumprimento legal com um acompanhamento próximo e personalizado para empresas e particulares.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-4 bg-navy-900 text-white font-medium rounded-lg hover:bg-navy-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2" href="#contactos">
                            Agendar Reunião
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-navy-900 font-medium rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 group" href="https://wa.me/351910000000">
<svg aria-hidden="true" className="iconify text-green-600 iconify--lucide" data-icon="lucide:message-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Falar no WhatsApp
                        </a>
</div>

<div className="mt-16 pt-8 border-t border-slate-200/60 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-sm font-semibold text-slate-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
                            Membro da OCC
                        </div>
<div className="flex items-center gap-2 text-sm font-semibold text-slate-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:award" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
                            +15 Anos de Experiência
                        </div>
<div className="flex items-center gap-2 text-sm font-semibold text-slate-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
                            +200 Clientes Satisfeitos
                        </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="servicos">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight mb-4">Serviços Especializados</h2>
<p className="text-slate-500 text-lg font-light">Soluções completas para libertar o seu tempo e potenciar o seu negócio.</p>
</div>
<a className="text-navy-900 font-medium hover:text-gold-500 transition-colors flex items-center gap-2 pb-1 border-b border-transparent hover:border-gold-500" href="#contactos">
                        Ver todos os serviços
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-white hover:shadow-card hover:border-slate-200 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-100 flex items-center justify-center text-navy-900 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calculator" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-navy-900 mb-3">Contabilidade Geral</h3>
<p className="text-slate-500 leading-relaxed text-sm">Tratamento rigoroso da informação financeira, cumprimento de prazos e relatórios mensais detalhados.</p>
</div>

<div className="group hover:bg-white hover:shadow-card hover:border-slate-200 transition-all duration-300 bg-slate-50/50 border-slate-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-100 flex items-center justify-center text-navy-900 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:briefcase" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>
<h3 className="text-xl font-semibold text-navy-900 mb-3">Gestão de Empresas</h3>
<p className="leading-relaxed text-sm text-slate-500">Aconselhamento estratégico e análise de performance para apoiar a tomada de decisão.</p>
</div>

<div className="group p-8 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-white hover:shadow-card hover:border-slate-200 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-100 flex items-center justify-center text-navy-900 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-navy-900 mb-3">Recursos Humanos</h3>
<p className="text-slate-500 leading-relaxed text-sm">Processamento salarial, gestão de contratos, Segurança Social e obrigações laborais.</p>
</div>

<div className="group p-8 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-white hover:shadow-card hover:border-slate-200 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-100 flex items-center justify-center text-navy-900 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:rocket" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-navy-900 mb-3">Criação de Empresas</h3>
<p className="text-slate-500 leading-relaxed text-sm">Apoio "chave na mão" para constituição de sociedades, início de atividade e enquadramento fiscal.</p>
</div>

<div className="group p-8 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-white hover:shadow-card hover:border-slate-200 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-100 flex items-center justify-center text-navy-900 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:percent" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 5L5 19"></path><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></g></svg>
</div>
<h3 className="text-xl font-semibold text-navy-900 mb-3">Fiscalidade (IRS / IRC)</h3>
<p className="text-slate-500 leading-relaxed text-sm">Otimização fiscal legal, entrega de declarações e representação perante a Autoridade Tributária.</p>
</div>

<div className="group p-8 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-white hover:shadow-card hover:border-slate-200 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-100 flex items-center justify-center text-navy-900 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:folder-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path><path d="m9 13l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-navy-900 mb-3">Recolha de Documentos</h3>
<p className="text-slate-500 leading-relaxed text-sm">Sistema digital e físico para recolha organizada de documentação, facilitando o seu dia-a-dia.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-navy-900 text-white relative overflow-hidden" id="diferenciacao">

<div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Mais do que contabilistas, somos parceiros do seu crescimento.</h2>
<p className="leading-relaxed text-lg font-light text-slate-300 mb-8">
                            Num cenário fiscal complexo como o português, a nossa missão é simplificar. Garantimos o cumprimento rigoroso de todas as obrigações legais, permitindo que se foque no que realmente importa: o seu negócio.
                        </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 bg-gold-500/10 p-1 rounded">
<svg aria-hidden="true" className="iconify text-gold-400 iconify--lucide" data-icon="lucide:check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h4 className="text-white font-medium text-lg">Proximidade e Rapidez</h4>
<p className="text-slate-400 text-sm mt-1">Resposta rápida a dúvidas e acompanhamento personalizado via WhatsApp ou telefone.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-gold-500/10 p-1 rounded">
<svg aria-hidden="true" className="iconify text-gold-400 iconify--lucide" data-icon="lucide:check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h4 className="text-white font-medium text-lg">Rigor Técnico</h4>
<p className="text-slate-400 text-sm mt-1">Equipa certificada e em atualização constante sobre a legislação portuguesa.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-gold-500/10 p-1 rounded">
<svg aria-hidden="true" className="iconify text-gold-400 iconify--lucide" data-icon="lucide:check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h4 className="text-white font-medium text-lg">Tecnologia e Humanização</h4>
<p className="text-sm text-slate-400 mt-1">Ferramentas digitais para eficiência, com o toque humano indispensável.</p>
</div>
</li>
</ul>
</div>
<div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
<img alt="Equipa a analisar documentos" className="absolute inset-0 w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-navy-900 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
<p className="text-white text-sm font-medium">"A Nexia ajudou-nos a organizar as contas desde o primeiro dia. O apoio na abertura da empresa foi fundamental."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center text-navy-900 font-bold text-xs">JP</div>
<div>
<p className="text-white text-xs font-semibold">João Pereira</p>
<p className="text-slate-300 text-[10px] uppercase tracking-wider">Sócio-Gerente, TechSolutions</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-navy-900 tracking-tight mb-4">Perguntas Frequentes</h2>
<p className="text-slate-500">Esclareça as suas dúvidas sobre contabilidade e gestão.</p>
</div>
<div className="space-y-4">

<details className="group bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 open:shadow-md hover:border-slate-300">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-navy-900 font-medium">Quanto tempo demora a abrir uma empresa?</span>
<svg aria-hidden="true" className="iconify text-slate-400 transition-transform duration-300 group-open:rotate-180 iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                            Com o serviço "Empresa na Hora", é possível constituir a sociedade num único dia. No entanto, o processo completo, incluindo início de atividade nas Finanças e inscrição na Segurança Social, que tratamos por si, pode levar cerca de 2 a 5 dias úteis até estar 100% operacional.
                        </div>
</details>

<details className="group bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 open:shadow-md hover:border-slate-300">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-navy-900 font-medium">Quais os prazos para entrega de IVA?</span>
<svg aria-hidden="true" className="iconify text-slate-400 transition-transform duration-300 group-open:rotate-180 iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                            Depende do regime. No regime mensal, a declaração é entregue até ao dia 20 do segundo mês seguinte. No regime trimestral, a entrega ocorre até ao dia 20 do segundo mês seguinte ao trimestre. Nós gerimos todos estes prazos para evitar coimas.
                        </div>
</details>

<details className="group bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 open:shadow-md hover:border-slate-300">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-navy-900 font-medium">Apoiam trabalhadores independentes (Recibos Verdes)?</span>
<svg aria-hidden="true" className="iconify text-slate-400 transition-transform duration-300 group-open:rotate-180 iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                            Sim, temos planos específicos para freelancers e empresários em nome individual, garantindo o correto enquadramento em IVA e IRS e ajudando a otimizar a sua carga fiscal.
                        </div>
</details>

<details className="group bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 open:shadow-md hover:border-slate-300">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-navy-900 font-medium">Como funciona a entrega de documentos?</span>
<svg aria-hidden="true" className="iconify text-slate-400 transition-transform duration-300 group-open:rotate-180 iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                            Privilegiamos o digital. Pode enviar as faturas por email ou através da nossa pasta partilhada na cloud. Se preferir, também fazemos a recolha física nas instalações do cliente na zona de Oeiras e Lisboa.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="sobre">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
<div className="space-y-4 mt-8">
<img alt="Escritório" className="rounded-2xl shadow-lg w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Documentos" className="rounded-2xl shadow-lg w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="space-y-4">
<img alt="Reunião" className="rounded-2xl shadow-lg w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="bg-navy-900 rounded-2xl h-48 flex items-center justify-center p-6 text-center">
<div>
<span className="text-4xl font-bold text-gold-400 block mb-1">2010</span>
<span className="text-white text-xs uppercase tracking-widest">Ano de Fundação</span>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-6">
                            Sobre a Nexia
                        </div>
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight mb-6">Focados no sucesso do empresário português.</h2>
<div className="space-y-6 text-slate-500 text-lg font-light leading-relaxed">
<p>
                                A Nexia nasceu com um propósito claro: retirar o peso da burocracia dos ombros dos empresários. Acreditamos que o seu tempo deve ser investido em inovar e vender, não em preencher formulários.
                            </p>
<p>
                                Sediados no Taguspark, em Oeiras, combinamos a solidez da contabilidade tradicional com a agilidade das novas tecnologias. A nossa equipa é composta por Contabilistas Certificados dedicados a garantir que cada cêntimo conta e que cada obrigação é cumprida a tempo.
                            </p>
</div>
<div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4">
<img alt="CEO" className="w-12 h-12 rounded-full grayscale" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<p className="text-navy-900 font-semibold text-sm">Carlos Mendes</p>
<p className="text-slate-400 text-xs uppercase">Diretor Técnico</p>
</div>
<img alt="Assinatura" className="h-8 opacity-40 ml-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="contactos">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-200">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="p-8 md:p-12 lg:p-16">
<h2 className="text-3xl font-semibold text-navy-900 tracking-tight mb-2">Vamos conversar?</h2>
<p className="text-slate-500 mb-8">Preencha o formulário ou contacte-nos diretamente. Respondemos em 24h.</p>
<form action="#" className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Nome</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 transition-all text-sm" placeholder="Seu nome" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Empresa</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 transition-all text-sm" placeholder="Nome da empresa (opcional)" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Email</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 transition-all text-sm" placeholder="email@empresa.pt" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Assunto</label>
<select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 transition-all text-sm text-slate-600">
<option>Informações Gerais</option>
<option>Pedido de Orçamento</option>
<option>Abertura de Empresa</option>
<option>Recrutamento</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Mensagem</label>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 transition-all text-sm" placeholder="Como podemos ajudar?" rows="4"></textarea>
</div>
<button className="w-full py-4 bg-navy-900 text-white font-medium rounded-lg hover:bg-navy-800 transition-colors shadow-lg mt-2" type="button">
                                    Enviar Mensagem
                                </button>
</form>
</div>

<div className="bg-navy-900 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-xl font-semibold mb-8">Informações de Contacto</h3>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
<svg aria-hidden="true" className="iconify text-gold-400 iconify--lucide" data-icon="lucide:map-pin" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Morada</p>
<p className="text-slate-100 font-light">Taguspark, Edifício Inovação IAv. Jacques Delors, Sala 322740-122 Porto Salvo, Oeiras</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
<svg aria-hidden="true" className="iconify text-gold-400 iconify--lucide" data-icon="lucide:phone" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Telefone</p>
<a className="text-slate-100 hover:text-white block font-medium text-lg" href="tel:+351210000000">+351 210 000 000</a>
<p className="text-slate-400 text-xs mt-1">(Chamada para rede fixa nacional)</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
<svg aria-hidden="true" className="iconify text-gold-400 iconify--lucide" data-icon="lucide:mail" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Email</p>
<a className="text-slate-100 hover:text-white transition-colors" href="mailto:geral@nexia.pt">geral@nexia.pt</a>
</div>
</div>
</div>
</div>

<div className="mt-12 h-48 w-full bg-slate-800 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10">
<img alt="Mapa" className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/20 shadow-lg text-sm text-white group-hover:scale-105 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        Ver no Google Maps
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-4">
<a className="flex items-center gap-2" href="#">
<div className="bg-navy-900 text-white p-1 rounded-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:building-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></g></svg>
</div>
<span className="text-lg font-semibold tracking-tighter text-navy-900 uppercase">
                            NEXIA<span className="text-slate-400 font-light">GESTÃO</span>
</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed">
                        Serviços de contabilidade e consultoria de gestão com rigor, transparência e proximidade para empresas em Portugal.
                    </p>
</div>

<div>
<h4 className="text-navy-900 font-semibold mb-4 text-sm uppercase tracking-wider">Empresa</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-navy-900 transition-colors" href="#sobre">Sobre Nós</a></li>
<li><a className="hover:text-navy-900 transition-colors" href="#servicos">Serviços</a></li>
<li><a className="hover:text-navy-900 transition-colors" href="#diferenciacao">Porquê a Nexia</a></li>
</ul>
</div>

<div>
<h4 className="text-navy-900 font-semibold mb-4 text-sm uppercase tracking-wider">Serviços</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-navy-900 transition-colors" href="#">Contabilidade Organizada</a></li>
<li><a className="hover:text-navy-900 transition-colors" href="#">Processamento Salarial</a></li>
<li><a className="hover:text-navy-900 transition-colors" href="#">Consultoria Fiscal</a></li>
</ul>
</div>

<div>
<h4 className="text-navy-900 font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-navy-900 transition-colors" href="#">Política de Privacidade</a></li>
<li><a className="hover:text-navy-900 transition-colors" href="#">Termos e Condições</a></li>
<li><a className="hover:text-navy-900 transition-colors" href="#">Livro de Reclamações</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 Nexia Gestão, Lda. Todos os direitos reservados.</p>
<div className="flex items-center gap-6">
<a className="hover:text-navy-900 transition-colors" href="#">Linkedin</a>
<a className="hover:text-navy-900 transition-colors" href="#">Facebook</a>
<a className="hover:text-navy-900 transition-colors" href="#">Instagram</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
