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
background: '#030308',
surface: '#0d0d14',
surface2: '#16161f',
primary: '#3b82f6',
accent: '#8b5cf6',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons with specific stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Intersection Observer for Scroll Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Remove initial state classes to trigger transition
                        entry.target.classList.remove('opacity-0', 'translate-y-4', 'translate-y-8', 'translate-y-12', 'translate-x-[-20px]', 'translate-x-[20px]');
                        // Ensure final state is opaque and transformed to 0
                        entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
                        // Unobserve after animating once
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.js-reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]"></div>
<div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-accent/10 blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group text-white" href="#">
<div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:bg-blue-400 transition-colors">
<i className="w-4 h-4 text-white" data-lucide="key"></i>
</div>
<span className="font-semibold tracking-tight text-lg">Chave Direta</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#funcionalidades">Funcionalidades</a>
<a className="hover:text-white transition-colors" href="#depoimentos">Depoimentos</a>
<a className="hover:text-white transition-colors" href="#precos">Preços</a>
</div>
<a className="bg-primary hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]" href="#agendar">
                Agendar Demonstração
            </a>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<header className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-medium mb-8 js-reveal opacity-0 translate-y-4 transition-all duration-700">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
<span>Novo: Automação com IA integrada</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white max-w-4xl leading-tight mb-6 js-reveal opacity-0 translate-y-4 transition-all duration-700 delay-100">
                O sistema que coloca sua imobiliária no <br className="hidden md:block"/>
<span className="bg-gradient-to-r from-primary via-blue-400 to-accent text-transparent bg-clip-text">piloto automático</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 js-reveal opacity-0 translate-y-4 transition-all duration-700 delay-200">
                Gerencie imóveis, leads e corretores em uma única plataforma inteligente. Automatize processos e foque no que importa: vender.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center js-reveal opacity-0 translate-y-4 transition-all duration-700 delay-300">
<a className="w-full sm:w-auto bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] group" href="#agendar">
                    Agendar Demonstração
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3 rounded-full text-lg font-medium text-white border border-white/10 hover:bg-white/5 transition-colors" href="#funcionalidades">
                    Ver funcionalidades
                </a>
</div>

<div className="mt-20 w-full max-w-5xl js-reveal opacity-0 translate-y-12 transition-all duration-1000 delay-500 relative">
<div className="absolute -inset-1 bg-gradient-to-b from-primary/30 to-accent/30 rounded-2xl blur-xl opacity-50"></div>
<div className="relative rounded-xl border border-white/10 bg-white shadow-2xl overflow-hidden aspect-[16/9] flex flex-col">

<div className="h-10 border-b border-slate-200 bg-slate-50 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="mx-auto text-xs font-medium text-slate-400">Chave Direta — Dashboard</div>
</div>

<div className="flex-1 bg-slate-50 p-6 flex flex-col gap-6">

<div className="grid grid-cols-4 gap-4">
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-2">
<div className="flex justify-between items-start">
<div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center"><i className="w-4 h-4" data-lucide="home"></i></div>
<span className="text-xs font-medium text-emerald-500">+12%</span>
</div>
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">247</div>
<div className="text-xs text-slate-500">Imóveis ativos</div>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-2">
<div className="flex justify-between items-start">
<div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center"><i className="w-4 h-4" data-lucide="users"></i></div>
<span className="text-xs font-medium text-emerald-500">+28%</span>
</div>
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">184</div>
<div className="text-xs text-slate-500">Leads este mês</div>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-2">
<div className="flex justify-between items-start">
<div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center"><i className="w-4 h-4" data-lucide="trending-up"></i></div>
<span className="text-xs font-medium text-emerald-500">+18%</span>
</div>
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">32</div>
<div className="text-xs text-slate-500">Vendas</div>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-2">
<div className="flex justify-between items-start">
<div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center"><i className="w-4 h-4" data-lucide="message-square"></i></div>
<span className="text-xs font-medium text-emerald-500">+45%</span>
</div>
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">96</div>
<div className="text-xs text-slate-500">Atendimentos</div>
</div>
</div>
</div>

<div className="flex-1 grid grid-cols-2 gap-4">
<div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col">
<span className="text-xs font-medium text-slate-500 mb-4">Vendas mensais</span>
<div className="flex-1 flex items-end gap-2 justify-between mt-auto">
<div className="w-full bg-blue-100 rounded-t-sm h-[30%] relative group"><div className="absolute inset-0 bg-blue-500 rounded-t-sm opacity-0 group-hover:opacity-100 transition-opacity"></div></div>
<div className="w-full bg-blue-100 rounded-t-sm h-[50%] relative group"><div className="absolute inset-0 bg-blue-500 rounded-t-sm opacity-0 group-hover:opacity-100 transition-opacity"></div></div>
<div className="w-full bg-blue-100 rounded-t-sm h-[40%] relative group"><div className="absolute inset-0 bg-blue-500 rounded-t-sm opacity-0 group-hover:opacity-100 transition-opacity"></div></div>
<div className="w-full bg-blue-500 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-blue-100 rounded-t-sm h-[60%] relative group"><div className="absolute inset-0 bg-blue-500 rounded-t-sm opacity-0 group-hover:opacity-100 transition-opacity"></div></div>
<div className="w-full bg-blue-100 rounded-t-sm h-[80%] relative group"><div className="absolute inset-0 bg-blue-500 rounded-t-sm opacity-0 group-hover:opacity-100 transition-opacity"></div></div>
</div>
<div className="flex justify-between text-[10px] text-slate-400 mt-2">
<span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col relative overflow-hidden">
<span className="text-xs font-medium text-slate-500 mb-4 relative z-10">Leads por dia</span>

<div className="absolute inset-0 top-12 bottom-8 opacity-20">
<svg className="w-full h-full stroke-accent fill-accent/20" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M0,40 Q10,30 20,35 T40,20 T60,25 T80,10 T100,5 L100,50 L0,50 Z" strokeWidth="0"></path>
<path d="M0,40 Q10,30 20,35 T40,20 T60,25 T80,10 T100,5" fill="none" strokeWidth="2"></path>
</svg>
</div>
<div className="flex justify-between text-[10px] text-slate-400 mt-auto relative z-10">
<span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 mt-32" id="funcionalidades">
<div className="text-center mb-16 js-reveal opacity-0 translate-y-8 transition-all duration-700">
<span className="text-primary text-xs font-medium tracking-wider uppercase mb-2 block">Funcionalidades</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Tudo que sua imobiliária precisa</h2>
<p className="text-lg text-slate-400 max-w-2xl mx-auto">Uma plataforma completa para gerenciar cada aspecto do seu negócio imobiliário.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group js-reveal opacity-0 translate-y-8 transition-all duration-700 delay-100">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-blue-500" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">CRM Imobiliário</h3>
<p className="text-slate-400 text-lg leading-relaxed">Gerencie todos os seus contatos, leads e clientes em um só lugar com visão completa do relacionamento.</p>
</article>

<article className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group js-reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-purple-500" data-lucide="home"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Gestão de Imóveis</h3>
<p className="text-slate-400 text-lg leading-relaxed">Cadastre, organize e publique imóveis com fotos, plantas e documentos de forma centralizada.</p>
</article>

<article className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group js-reveal opacity-0 translate-y-8 transition-all duration-700 delay-300">
<div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-green-500" data-lucide="filter"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Funil de Vendas</h3>
<p className="text-slate-400 text-lg leading-relaxed">Acompanhe cada lead no funil de vendas e nunca perca uma oportunidade de negócio.</p>
</article>

<article className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group js-reveal opacity-0 translate-y-8 transition-all duration-700 delay-100">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-orange-500" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Automação de Follow-up</h3>
<p className="text-slate-400 text-lg leading-relaxed">Configure sequências automáticas de follow-up e mantenha contato com todos os seus leads.</p>
</article>

<article className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group js-reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
<div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-cyan-500" data-lucide="globe"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Integração com Portais</h3>
<p className="text-slate-400 text-lg leading-relaxed">Publique automaticamente em ZAP Imóveis, OLX, VivaReal e outros portais com um clique.</p>
</article>

<article className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group js-reveal opacity-0 translate-y-8 transition-all duration-700 delay-300">
<div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-pink-500" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Dashboard de Métricas</h3>
<p className="text-slate-400 text-lg leading-relaxed">Visualize métricas de vendas, performance de corretores e resultados em tempo real.</p>
</article>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-32">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1 js-reveal opacity-0 translate-x-[-20px] transition-all duration-700">
<span className="text-primary text-xs font-medium tracking-wider uppercase mb-2 block">Automação Inteligente</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">Venda mais no<br/>piloto automático</h2>
<p className="text-lg text-slate-400 mb-8">Configure uma vez e deixe o sistema trabalhar por você. Automação de follow-ups, distribuição de leads e alertas inteligentes.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-lg text-slate-300">
<div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
<i className="w-3.5 h-3.5 text-primary" data-lucide="check"></i>
</div>
                            Distribuição automática de leads para corretores
                        </li>
<li className="flex items-center gap-3 text-lg text-slate-300">
<div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
<i className="w-3.5 h-3.5 text-primary" data-lucide="check"></i>
</div>
                            Follow-up por e-mail e WhatsApp automatizado
                        </li>
<li className="flex items-center gap-3 text-lg text-slate-300">
<div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
<i className="w-3.5 h-3.5 text-primary" data-lucide="check"></i>
</div>
                            Alertas de oportunidades quentes
                        </li>
<li className="flex items-center gap-3 text-lg text-slate-300">
<div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
<i className="w-3.5 h-3.5 text-primary" data-lucide="check"></i>
</div>
                            Publicação automática em portais
                        </li>
</ul>
</div>
<div className="flex-1 w-full js-reveal opacity-0 translate-x-[20px] transition-all duration-700">
<div className="bg-surface border border-white/5 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
<div className="space-y-3 relative z-10">

<div className="flex items-center gap-4 bg-surface2 p-3 rounded-lg border border-white/5">
<span className="text-xs text-slate-500 font-mono">09:00</span>
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-sm text-slate-300">Lead capturado: João Silva — ZAP Imóveis</span>
</div>
<div className="flex items-center gap-4 bg-surface2 p-3 rounded-lg border border-white/5">
<span className="text-xs text-slate-500 font-mono">09:01</span>
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
<span className="text-sm text-slate-300">Lead distribuído para corretor: Maria</span>
</div>
<div className="flex items-center gap-4 bg-surface2 p-3 rounded-lg border border-white/5">
<span className="text-xs text-slate-500 font-mono">09:02</span>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm text-slate-300">E-mail de boas-vindas enviado</span>
</div>
<div className="flex items-center gap-4 bg-surface2 p-3 rounded-lg border border-white/5">
<span className="text-xs text-slate-500 font-mono">09:15</span>
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
<span className="text-sm text-slate-300">WhatsApp de follow-up agendado</span>
</div>
<div className="flex items-center gap-4 bg-surface2 p-3 rounded-lg border border-white/5">
<span className="text-xs text-slate-500 font-mono">10:00</span>
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-sm text-slate-300">Visita agendada: Apto 302, Vila Mariana</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-32 text-center js-reveal opacity-0 translate-y-8 transition-all duration-700">
<span className="text-primary text-xs font-medium tracking-wider uppercase mb-2 block">Integrações</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Conectado com os maiores portais</h2>
<p className="text-lg text-slate-400 mb-10">Publique seus imóveis automaticamente nos principais portais do Brasil.</p>
<div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
<span className="px-5 py-2.5 bg-surface border border-white/5 rounded-full text-slate-300 text-sm font-medium hover:bg-white/5 transition-colors cursor-default">ZAP Imóveis</span>
<span className="px-5 py-2.5 bg-surface border border-white/5 rounded-full text-slate-300 text-sm font-medium hover:bg-white/5 transition-colors cursor-default">OLX</span>
<span className="px-5 py-2.5 bg-surface border border-white/5 rounded-full text-slate-300 text-sm font-medium hover:bg-white/5 transition-colors cursor-default">VivaReal</span>
<span className="px-5 py-2.5 bg-surface border border-white/5 rounded-full text-slate-300 text-sm font-medium hover:bg-white/5 transition-colors cursor-default">Imovelweb</span>
<span className="px-5 py-2.5 bg-surface border border-white/5 rounded-full text-slate-300 text-sm font-medium hover:bg-white/5 transition-colors cursor-default">Chaves na Mão</span>
<span className="px-5 py-2.5 bg-surface border border-white/5 rounded-full text-slate-300 text-sm font-medium hover:bg-white/5 transition-colors cursor-default">123i</span>
<span className="px-5 py-2.5 bg-surface border border-white/5 rounded-full text-slate-300 text-sm font-medium hover:bg-white/5 transition-colors cursor-default">MercadoLivre</span>
<span className="px-5 py-2.5 bg-surface border border-white/5 rounded-full text-slate-300 text-sm font-medium hover:bg-white/5 transition-colors cursor-default">Facebook</span>
<span className="px-5 py-2.5 bg-surface border border-white/5 rounded-full text-slate-300 text-sm font-medium hover:bg-white/5 transition-colors cursor-default">Instagram</span>
<span className="px-5 py-2.5 bg-surface border border-white/5 rounded-full text-slate-300 text-sm font-medium hover:bg-white/5 transition-colors cursor-default">Google Ads</span>
<span className="px-5 py-2.5 bg-surface border border-white/5 rounded-full text-slate-300 text-sm font-medium hover:bg-white/5 transition-colors cursor-default">WhatsApp API</span>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mt-32">
<div className="bg-surface border border-white/5 rounded-3xl p-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center js-reveal opacity-0 translate-y-8 transition-all duration-700">
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">1.500+</div>
<div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Imobiliárias ativas</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">50.000+</div>
<div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Imóveis gerenciados</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">98%</div>
<div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Satisfação</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">3x</div>
<div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Mais vendas</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-32" id="depoimentos">
<div className="text-center mb-16 js-reveal opacity-0 translate-y-8 transition-all duration-700">
<span className="text-primary text-xs font-medium tracking-wider uppercase mb-2 block">Depoimentos</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Quem usa, recomenda</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="bg-surface p-8 rounded-2xl border border-white/5 flex flex-col js-reveal opacity-0 translate-y-8 transition-all duration-700 delay-100">
<div className="flex gap-1 mb-6 text-amber-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-300 mb-8 flex-1">"O Chave Direta transformou nossa operação. Antes perdíamos leads no WhatsApp, agora tudo está centralizado e automatizado. Nossas vendas cresceram 45%."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-semibold text-sm">CM</div>
<div>
<div className="text-white font-medium text-sm">Carlos Mendes</div>
<div className="text-slate-500 text-xs">Diretor - Mendes Imóveis</div>
</div>
</div>
</article>

<article className="bg-surface p-8 rounded-2xl border border-white/5 flex flex-col js-reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
<div className="flex gap-1 mb-6 text-amber-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-300 mb-8 flex-1">"A automação de follow-up é incrível. Nossos corretores passaram a focar nas visitas enquanto o sistema cuida do restante. Resultado: 3x mais agendamentos."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-semibold text-sm">AP</div>
<div>
<div className="text-white font-medium text-sm">Ana Paula Santos</div>
<div className="text-slate-500 text-xs">Gestora - SP Realty</div>
</div>
</div>
</article>

<article className="bg-surface p-8 rounded-2xl border border-white/5 flex flex-col js-reveal opacity-0 translate-y-8 transition-all duration-700 delay-300">
<div className="flex gap-1 mb-6 text-amber-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-300 mb-8 flex-1">"Integração com portais e dashboard em tempo real mudaram nosso jogo. Consigo acompanhar a performance de 30 corretores em uma única tela."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-semibold text-sm">RF</div>
<div>
<div className="text-white font-medium text-sm">Roberto Ferreira</div>
<div className="text-slate-500 text-xs">CEO - Grupo Ferreira</div>
</div>
</div>
</article>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mt-40 mb-20 text-center js-reveal opacity-0 translate-y-8 transition-all duration-700 relative" id="agendar">
<div className="absolute inset-0 top-1/2 -translate-y-1/2 bg-primary/20 blur-[100px] rounded-full z-0 pointer-events-none w-3/4 mx-auto h-64"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
                    Pronto para colocar sua imobiliária no <br/>
<span className="text-primary">próximo nível</span>?
                </h2>
<p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                    Agende uma demonstração gratuita e descubra como o Chave Direta pode transformar seu negócio.
                </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onsubmit="event.preventDefault();">
<div className="flex-1 relative">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" data-lucide="mail"></i>
<input className="w-full h-12 bg-surface border border-white/10 rounded-full pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Seu melhor e-mail" required="" type="email"/>
</div>
<button className="h-12 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 rounded-full font-medium flex items-center justify-center gap-2 transition-all hover:scale-105 whitespace-nowrap" type="submit">
                        Agendar agora
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-background pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="key"></i>
</div>
<span className="font-semibold tracking-tight text-lg text-white">Chave Direta</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed pr-4">
                    O sistema completo para imobiliárias e corretores que querem vender mais.
                </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Produto</h4>
<ul className="space-y-3">
<li><a className="text-slate-400 hover:text-white text-sm transition-colors" href="#">CRM Imobiliário</a></li>
<li><a className="text-slate-400 hover:text-white text-sm transition-colors" href="#">Gestão de Imóveis</a></li>
<li><a className="text-slate-400 hover:text-white text-sm transition-colors" href="#">Automação</a></li>
<li><a className="text-slate-400 hover:text-white text-sm transition-colors" href="#">Integrações</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Empresa</h4>
<ul className="space-y-3">
<li><a className="text-slate-400 hover:text-white text-sm transition-colors" href="#">Sobre nós</a></li>
<li><a className="text-slate-400 hover:text-white text-sm transition-colors" href="#">Blog</a></li>
<li><a className="text-slate-400 hover:text-white text-sm transition-colors" href="#">Carreiras</a></li>
<li><a className="text-slate-400 hover:text-white text-sm transition-colors" href="#">Contato</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contato</h4>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-slate-400 text-sm">
<i className="w-4 h-4" data-lucide="mail"></i> contato@chavedireta.com
                    </li>
<li className="flex items-center gap-2 text-slate-400 text-sm">
<i className="w-4 h-4" data-lucide="phone"></i> (11) 99999-9999
                    </li>
<li className="flex items-center gap-2 text-slate-400 text-sm">
<i className="w-4 h-4" data-lucide="map-pin"></i> São Paulo, SP
                    </li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
<p>© 2024 Chave Direta. Todos os direitos reservados.</p>
<div className="flex gap-4">
<a className="hover:text-slate-400 transition-colors" href="#">Termos de uso</a>
<a className="hover:text-slate-400 transition-colors" href="#">Política de privacidade</a>
</div>
</div>
</footer>



    </>
  );
}
