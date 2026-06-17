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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-10 h-10 bg-[#72953B] rounded-xl flex items-center justify-center text-white">
<i className="w-6 h-6" data-lucide="tractor"></i>
</div>
<span className="font-semibold text-xl tracking-tight text-slate-900">NASS</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-[#72953B] transition-colors" href="#inicio">Início</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#72953B] transition-colors" href="#servicos">Serviços</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#72953B] transition-colors" href="#portfolio">Portfólio</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#72953B] transition-colors" href="#catalogo">Catálogo</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#72953B] transition-colors" href="#contato">Contato</a>
</div>

<div className="hidden md:flex">
<a className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#72953B] hover:bg-[#5a7a2f] transition-all shadow-sm hover:shadow-md gap-2" href="https://wa.me/5511999999999">
<i className="w-4 h-4" data-lucide="message-circle"></i>
                        Solicitar Orçamento
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-700 focus:outline-none">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden" id="inicio">

<div className="absolute inset-0 z-0">
<img alt="Agricultura" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-xs font-medium tracking-wide uppercase">
<span className="w-2 h-2 rounded-full bg-[#f59e0b] mr-2"></span> Especialistas em Agronegócio
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
                        Manutenção Técnica Especializada para o <span className="text-[#f59e0b]">Agronegócio</span>
</h1>
<p className="text-lg text-slate-200 font-light max-w-xl leading-relaxed">
                        Veículos, implementos agrícolas, suspensão hidráulica, pneumática, bancos, vidros e tapeçaria. Tecnologia e precisão para manter sua frota em movimento.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-medium rounded-full text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl" href="#servicos">
                            Conheça Nossos Serviços
                        </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 border border-white/30 text-sm font-medium rounded-full text-white glass-card hover:bg-white/20 transition-all gap-2" href="https://wa.me/5511999999999">
<i className="w-4 h-4" data-lucide="whatsapp"></i>
                            Falar no WhatsApp
                        </a>
</div>
</div>

<div className="hidden lg:flex flex-col gap-6 items-end">
<div className="glass-card p-6 rounded-2xl max-w-xs w-full animate-fade-in-up transform translate-y-4">
<div className="flex items-center gap-4">
<div className="p-3 bg-[#72953B]/20 rounded-lg text-[#f59e0b]">
<i className="w-6 h-6 text-white" data-lucide="calendar"></i>
</div>
<div>
<p className="text-3xl font-semibold text-white tracking-tight">15+</p>
<p className="text-sm text-slate-300">Anos de Experiência</p>
</div>
</div>
</div>
<div className="glass-card p-6 rounded-2xl max-w-xs w-full transform -translate-x-8">
<div className="flex items-center gap-4">
<div className="p-3 bg-[#72953B]/20 rounded-lg">
<i className="w-6 h-6 text-white" data-lucide="factory"></i>
</div>
<div>
<p className="text-3xl font-semibold text-white tracking-tight">50+</p>
<p className="text-sm text-slate-300">Usinas Atendidas</p>
</div>
</div>
</div>
<div className="glass-card p-6 rounded-2xl max-w-xs w-full transform translate-y-2">
<div className="flex items-center gap-4">
<div className="p-3 bg-[#72953B]/20 rounded-lg">
<i className="w-6 h-6 text-white" data-lucide="settings"></i>
</div>
<div>
<p className="text-3xl font-semibold text-white tracking-tight">1000+</p>
<p className="text-sm text-slate-300">Equipamentos Mantidos</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="servicos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-[#72953B] font-semibold tracking-wide text-xs uppercase">Soluções Completas</span>
<h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Especialidades Técnicas</h2>
<p className="mt-4 text-slate-500 text-lg">Manutenção preventiva e corretiva com padrões rigorosos de qualidade para garantir a produtividade no campo.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#72953B]/30 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#72953B]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#72953B] mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="tractor"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Veículos Agrícolas</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Manutenção especializada em tratores, colheitadeiras e pulverizadores. Diagnóstico computadorizado avançado.</p>
<a className="inline-flex items-center text-sm font-medium text-[#72953B] hover:text-[#5a7a2f]" href="#">Saiba mais <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i></a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#72953B]/30 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#72953B]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#72953B] mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="settings-2"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Implementos Agrícolas</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Reparos estruturais, ajustes e regulagens em plantadeiras, grades e arados para máxima eficiência.</p>
<a className="inline-flex items-center text-sm font-medium text-[#72953B] hover:text-[#5a7a2f]" href="#">Saiba mais <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i></a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#72953B]/30 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#72953B]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#72953B] mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="droplets"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Suspensão Hidráulica</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Sistemas completos, reparo de mangueiras, conexões, bombas e cilindros de alta pressão.</p>
<a className="inline-flex items-center text-sm font-medium text-[#72953B] hover:text-[#5a7a2f]" href="#">Saiba mais <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i></a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#72953B]/30 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#72953B]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#72953B] mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="wind"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Suspensão Pneumática</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Manutenção de bancos pneumáticos, cabines pressurizadas e sistemas de ar comprimido.</p>
<a className="inline-flex items-center text-sm font-medium text-[#72953B] hover:text-[#5a7a2f]" href="#">Saiba mais <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i></a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#72953B]/30 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#72953B]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#72953B] mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="armchair"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Bancos e Estofados</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Reforma completa, tapeçaria personalizada, espumas de alta densidade e revestimentos duráveis.</p>
<a className="inline-flex items-center text-sm font-medium text-[#72953B] hover:text-[#5a7a2f]" href="#">Saiba mais <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i></a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#72953B]/30 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#72953B]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#72953B] mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="scan-face"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Vidros e Vedações</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Troca de vidros de cabines, borrachas e vedações com garantia de isolamento.</p>
<a className="inline-flex items-center text-sm font-medium text-[#72953B] hover:text-[#5a7a2f]" href="#">Saiba mais <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#72953B]/5" id="portfolio">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<span className="text-[#72953B] font-semibold tracking-wide text-xs uppercase">Confiança</span>
<h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Parceiro do Setor Sucroenergético</h2>
<p className="mt-4 text-slate-500 text-lg">Temos orgulho de manter a frota das maiores usinas da região operando com capacidade máxima.</p>
</div>
<div className="flex gap-2">
<button className="p-3 rounded-full border border-slate-200 hover:bg-white transition-colors text-slate-500">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="p-3 rounded-full border border-slate-200 hover:bg-white transition-colors text-slate-500">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">

<div className="h-24 bg-white rounded-xl flex items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:shadow-md cursor-pointer group">
<span className="font-bold text-slate-800 text-sm group-hover:text-[#72953B]">BIOENERGIA</span>
</div>
<div className="h-24 bg-white rounded-xl flex items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:shadow-md cursor-pointer group">
<span className="font-bold text-slate-800 text-sm group-hover:text-[#72953B]">TERRA NOVA</span>
</div>
<div className="h-24 bg-white rounded-xl flex items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:shadow-md cursor-pointer group">
<span className="font-bold text-slate-800 text-sm group-hover:text-[#72953B]">AGROVALE</span>
</div>
<div className="h-24 bg-white rounded-xl flex items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:shadow-md cursor-pointer group">
<span className="font-bold text-slate-800 text-sm group-hover:text-[#72953B]">SÃO MARTINHO</span>
</div>
<div className="h-24 bg-white rounded-xl flex items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:shadow-md cursor-pointer group">
<span className="font-bold text-slate-800 text-sm group-hover:text-[#72953B]">RAÍZEN</span>
</div>
<div className="h-24 bg-white rounded-xl flex items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:shadow-md cursor-pointer group">
<span className="font-bold text-slate-800 text-sm group-hover:text-[#72953B]">BP BUNGE</span>
</div>

<div className="h-24 bg-white rounded-xl flex items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:shadow-md cursor-pointer group">
<span className="font-bold text-slate-800 text-sm group-hover:text-[#72953B]">USINA LINS</span>
</div>
<div className="h-24 bg-white rounded-xl flex items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:shadow-md cursor-pointer group">
<span className="font-bold text-slate-800 text-sm group-hover:text-[#72953B]">COCAL</span>
</div>
<div className="h-24 bg-white rounded-xl flex items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:shadow-md cursor-pointer group">
<span className="font-bold text-slate-800 text-sm group-hover:text-[#72953B]">SANTA ADÉLIA</span>
</div>
<div className="h-24 bg-white rounded-xl flex items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:shadow-md cursor-pointer group">
<span className="font-bold text-slate-800 text-sm group-hover:text-[#72953B]">ZILOR</span>
</div>
<div className="h-24 bg-white rounded-xl flex items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:shadow-md cursor-pointer group">
<span className="font-bold text-slate-800 text-sm group-hover:text-[#72953B]">PEDRA</span>
</div>
<div className="h-24 bg-white rounded-xl flex items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:shadow-md cursor-pointer group">
<span className="font-bold text-slate-800 text-sm group-hover:text-[#72953B]">ADECOAGRO</span>
</div>
</div>

<div className="max-w-4xl mx-auto">
<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/40 relative">
<i className="absolute top-10 left-10 w-12 h-12 text-slate-100 fill-current -z-0" data-lucide="quote"></i>
<div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
<img alt="Cliente" className="w-20 h-20 rounded-full object-cover border-2 border-[#72953B]" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-center md:text-left">
<p className="text-lg text-slate-700 italic mb-4">"A agilidade da NASS nos períodos de safra é incomparável. Quando uma colheitadeira para, cada minuto conta, e a equipe técnica sempre resolve com peças originais e diagnóstico preciso."</p>
<div>
<h4 className="font-semibold text-slate-900">Carlos Mendes</h4>
<p className="text-sm text-[#72953B]">Gerente de Frota, Usina Bioenergia</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-[#72953B]">
<i className="w-8 h-8" data-lucide="users"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Equipe Especializada</h3>
<p className="text-sm text-slate-500">Técnicos treinados e em constante atualização.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-[#72953B]">
<i className="w-8 h-8" data-lucide="clock"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Atendimento Ágil</h3>
<p className="text-sm text-slate-500">Plantão para emergências durante a safra.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-[#72953B]">
<i className="w-8 h-8" data-lucide="award"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Peças Homologadas</h3>
<p className="text-sm text-slate-500">Trabalhamos apenas com componentes originais.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-[#72953B]">
<i className="w-8 h-8" data-lucide="shield-check"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Garantia Total</h3>
<p className="text-sm text-slate-500">Segurança e respaldo em todos os serviços.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="catalogo">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Catálogo de Peças</h2>
<p className="mt-2 text-slate-500">Encontre o componente ideal para sua máquina.</p>
</div>
<a className="text-[#72953B] font-medium text-sm flex items-center hover:underline mt-4 md:mt-0" href="#">
                    Ver catálogo completo <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>

<div className="flex overflow-x-auto no-scrollbar gap-2 mb-10 pb-2">
<button className="px-5 py-2.5 rounded-full bg-[#72953B] text-white text-sm font-medium whitespace-nowrap shadow-md shadow-[#72953B]/20">Todos</button>
<button className="px-5 py-2.5 rounded-full bg-white text-slate-600 border border-slate-200 hover:border-[#72953B] hover:text-[#72953B] transition-colors text-sm font-medium whitespace-nowrap">Bancos Grammer</button>
<button className="px-5 py-2.5 rounded-full bg-white text-slate-600 border border-slate-200 hover:border-[#72953B] hover:text-[#72953B] transition-colors text-sm font-medium whitespace-nowrap">Suspensão</button>
<button className="px-5 py-2.5 rounded-full bg-white text-slate-600 border border-slate-200 hover:border-[#72953B] hover:text-[#72953B] transition-colors text-sm font-medium whitespace-nowrap">Vidros</button>
<button className="px-5 py-2.5 rounded-full bg-white text-slate-600 border border-slate-200 hover:border-[#72953B] hover:text-[#72953B] transition-colors text-sm font-medium whitespace-nowrap">Hidráulica</button>
<button className="px-5 py-2.5 rounded-full bg-white text-slate-600 border border-slate-200 hover:border-[#72953B] hover:text-[#72953B] transition-colors text-sm font-medium whitespace-nowrap">Acessórios</button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-2xl p-4 border border-slate-200 hover:shadow-lg transition-all duration-300">
<div className="relative aspect-square bg-slate-100 rounded-xl overflow-hidden mb-4">
<img alt="Banco Pneumático" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold text-[#72953B] uppercase tracking-wide">Original</div>
</div>
<h3 className="font-medium text-slate-900 line-clamp-1">Banco Pneumático Max Comfort</h3>
<p className="text-xs text-slate-500 mt-1 mb-3">Compatível: Valtra, John Deere</p>
<a className="flex items-center justify-center w-full py-2.5 rounded-xl bg-slate-50 text-[#5a7a2f] text-xs font-semibold group-hover:bg-[#72953B] group-hover:text-white transition-colors" href="https://wa.me/5511999999999?text=Olá, gostaria de consultar o preço do Banco Pneumático Max Comfort">
                        Consultar Preço
                    </a>
</div>

<div className="group bg-white rounded-2xl p-4 border border-slate-200 hover:shadow-lg transition-all duration-300">
<div className="relative aspect-square bg-slate-100 rounded-xl overflow-hidden mb-4">
<img alt="Cilindro Hidráulico" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold text-[#72953B] uppercase tracking-wide">Homologado</div>
</div>
<h3 className="font-medium text-slate-900 line-clamp-1">Kit Cilindro Hidráulico</h3>
<p className="text-xs text-slate-500 mt-1 mb-3">Alta pressão para colheitadeiras</p>
<a className="flex items-center justify-center w-full py-2.5 rounded-xl bg-slate-50 text-[#5a7a2f] text-xs font-semibold group-hover:bg-[#72953B] group-hover:text-white transition-colors" href="https://wa.me/5511999999999?text=Olá, gostaria de consultar o preço do Kit Cilindro">
                        Consultar Preço
                    </a>
</div>

<div className="group bg-white rounded-2xl p-4 border border-slate-200 hover:shadow-lg transition-all duration-300">
<div className="relative aspect-square bg-slate-100 rounded-xl overflow-hidden mb-4">
<img alt="Retrovisor Panorâmico" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1597423244037-519742d0a9f0?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-medium text-slate-900 line-clamp-1">Retrovisor Panorâmico</h3>
<p className="text-xs text-slate-500 mt-1 mb-3">Universal para linha pesada</p>
<a className="flex items-center justify-center w-full py-2.5 rounded-xl bg-slate-50 text-[#5a7a2f] text-xs font-semibold group-hover:bg-[#72953B] group-hover:text-white transition-colors" href="https://wa.me/5511999999999?text=Olá, gostaria de consultar o preço do Retrovisor">
                        Consultar Preço
                    </a>
</div>

<div className="group bg-white rounded-2xl p-4 border border-slate-200 hover:shadow-lg transition-all duration-300">
<div className="relative aspect-square bg-slate-100 rounded-xl overflow-hidden mb-4">
<img alt="Bolsa de Ar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold text-[#72953B] uppercase tracking-wide">Original</div>
</div>
<h3 className="font-medium text-slate-900 line-clamp-1">Bolsa de Ar Cabine</h3>
<p className="text-xs text-slate-500 mt-1 mb-3">Suspensão Pneumática</p>
<a className="flex items-center justify-center w-full py-2.5 rounded-xl bg-slate-50 text-[#5a7a2f] text-xs font-semibold group-hover:bg-[#72953B] group-hover:text-white transition-colors" href="https://wa.me/5511999999999?text=Olá, gostaria de consultar o preço da Bolsa de Ar">
                        Consultar Preço
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center mb-12 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 flex items-center gap-2">
<i className="w-6 h-6 text-[#f59e0b]" data-lucide="instagram"></i> Acompanhe Nossos Trabalhos
                </h2>
<a className="text-sm text-slate-500 mt-2 hover:text-[#72953B]" href="#">@nassassistenciatecnica</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<i className="w-6 h-6 text-white fill-white" data-lucide="heart"></i>
</div>
</div>
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<i className="w-6 h-6 text-white fill-white" data-lucide="heart"></i>
</div>
</div>
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<i className="w-6 h-6 text-white fill-white" data-lucide="heart"></i>
</div>
</div>
<div className="aspect-square bg-slate-100 rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<i className="w-6 h-6 text-white fill-white" data-lucide="heart"></i>
</div>
</div>
</div>
<div className="text-center mt-8">
<button className="px-6 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">Ver feed completo</button>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contato">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">

<div className="space-y-10">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Entre em Contato</h2>
<p className="mt-4 text-slate-500 text-lg">Estamos prontos para atender sua demanda. Solicite um orçamento ou agende uma visita técnica.</p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#72953B]/10 flex items-center justify-center flex-shrink-0 text-[#72953B]">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<h3 className="font-medium text-slate-900">Endereço</h3>
<p className="text-slate-500 text-sm mt-1">Av. Industrial, 1200 - Distrito Industrial<br/>Ribeirão Preto - SP</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#72953B]/10 flex items-center justify-center flex-shrink-0 text-[#72953B]">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<h3 className="font-medium text-slate-900">Telefones</h3>
<p className="text-slate-500 text-sm mt-1">
<a className="hover:text-[#72953B] transition-colors" href="tel:+551633333333">(16) 3333-3333</a> <br/>
<a className="hover:text-[#72953B] transition-colors" href="https://wa.me/5516999999999">(16) 99999-9999 (WhatsApp)</a>
</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#72953B]/10 flex items-center justify-center flex-shrink-0 text-[#72953B]">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<div>
<h3 className="font-medium text-slate-900">Horário de Atendimento</h3>
<p className="text-slate-500 text-sm mt-1">Segunda a Sexta: 08h às 18h<br/>Sábado: 08h às 12h</p>
</div>
</div>
</div>

<div className="w-full h-48 bg-slate-200 rounded-2xl overflow-hidden relative grayscale opacity-90">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118335.5398709569!2d-47.88126768800267!3d-21.17724213898144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9be3897711993%3A0x6e9a6e12e34360a0!2sRibeir%C3%A3o%20Preto%2C%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1714589999999!5m2!1sen!2sbr" style={{border: '0'}} width="100%"></iframe>
</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50">
<form action="#" className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="name">Nome</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#72953B]/20 focus:border-[#72953B] transition-all text-sm placeholder:text-slate-400" id="name" placeholder="Seu nome" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="phone">Telefone</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#72953B]/20 focus:border-[#72953B] transition-all text-sm placeholder:text-slate-400" id="phone" placeholder="(00) 00000-0000" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="email">Email</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#72953B]/20 focus:border-[#72953B] transition-all text-sm placeholder:text-slate-400" id="email" placeholder="seu@email.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="subject">Assunto</label>
<div className="relative">
<select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#72953B]/20 focus:border-[#72953B] transition-all text-sm text-slate-600 appearance-none" id="subject">
<option>Orçamento de Manutenção</option>
<option>Peças e Componentes</option>
<option>Parceria Comercial</option>
<option>Outros</option>
</select>
<i className="absolute right-4 top-3 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="message">Mensagem</label>
<textarea className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#72953B]/20 focus:border-[#72953B] transition-all text-sm placeholder:text-slate-400 resize-none" id="message" placeholder="Descreva sua necessidade..." rows="4"></textarea>
</div>
<button className="w-full py-3.5 bg-[#72953B] hover:bg-[#5a7a2f] text-white font-medium rounded-xl shadow-lg shadow-[#72953B]/20 hover:shadow-xl hover:shadow-[#72953B]/30 transition-all transform active:scale-[0.98]" type="submit">
                            Enviar Mensagem
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-[#72953B] rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="tractor"></i>
</div>
<span className="font-semibold text-xl tracking-tight text-white">NASS</span>
</div>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Excelência em manutenção agrícola. Soluções técnicas para impulsionar a produtividade no campo com confiança e garantia.
                    </p>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Links Rápidos</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#72953B] transition-colors" href="#inicio">Início</a></li>
<li><a className="hover:text-[#72953B] transition-colors" href="#servicos">Serviços</a></li>
<li><a className="hover:text-[#72953B] transition-colors" href="#portfolio">Portfólio</a></li>
<li><a className="hover:text-[#72953B] transition-colors" href="#catalogo">Catálogo de Peças</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Serviços</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#72953B] transition-colors" href="#">Manutenção de Tratores</a></li>
<li><a className="hover:text-[#72953B] transition-colors" href="#">Suspensão Hidráulica</a></li>
<li><a className="hover:text-[#72953B] transition-colors" href="#">Tapeçaria Agrícola</a></li>
<li><a className="hover:text-[#72953B] transition-colors" href="#">Vidros e Cabines</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Fale Conosco</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-[#72953B]" data-lucide="mail"></i>
                            contato@nass.com.br
                        </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-[#72953B]" data-lucide="phone"></i>
                            (16) 3333-3333
                        </li>
<li className="mt-4">
<a className="inline-block px-4 py-2 border border-slate-700 rounded-lg text-xs font-medium hover:bg-slate-800 transition-colors" href="#contato">
                                Solicitar Atendimento
                            </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">Copyright © 2025 NASS Assistência Técnica. Todos os direitos reservados.</p>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacidade</a>
<a className="hover:text-white transition-colors" href="#">Termos</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-[#25d366]/40 transition-all duration-300 transform hover:scale-110 flex items-center justify-center" href="https://wa.me/5516999999999" target="_blank">
<i className="w-7 h-7" data-lucide="message-circle"></i>
</a>


    </>
  );
}
