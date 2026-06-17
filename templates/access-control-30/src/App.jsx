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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-1 group relative" href="/">
<span className="text-[#002B4E] font-semibold text-xl tracking-tighter flex items-center">
<span className="text-[#0057B8] mr-[1px]">M</span>AXTEL
                </span>
</a>

<input className="hidden peer" id="mobile-menu" type="checkbox"/>
<label className="lg:hidden cursor-pointer text-[#002B4E] p-2" htmlFor="mobile-menu">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</label>

<nav className="hidden lg:flex items-center gap-8 h-full">
<a className="text-sm font-medium text-gray-600 hover:text-[#002B4E] transition-colors" href="/">Home</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#002B4E] transition-colors" href="/sobre">Sobre</a>

<div className="group h-full flex items-center relative">
<a className="text-sm font-medium text-gray-600 hover:text-[#002B4E] transition-colors flex items-center gap-1" href="/produtos">
                        Produtos <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<div className="mega-menu-content absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border border-gray-100 shadow-xl rounded-2xl p-6 mt-1 flex gap-8">
<div className="flex-1">
<h4 className="text-xs font-semibold text-[#00B8AA] uppercase tracking-wider mb-4">Software</h4>
<ul className="space-y-3">
<li><a className="block group/link" href="#">
<span className="text-sm font-medium text-[#002B4E] block group-hover/link:text-[#0057B8] transition-colors">TittanSafe</span>
<span className="text-xs text-gray-500 block mt-0.5">Gestão Enterprise</span>
</a></li>
<li><a className="block group/link" href="#">
<span className="text-sm font-medium text-[#002B4E] block group-hover/link:text-[#0057B8] transition-colors">TrueSafe</span>
<span className="text-xs text-gray-500 block mt-0.5">Controle Essencial</span>
</a></li>
<li><a className="block group/link" href="#">
<span className="text-sm font-medium text-[#002B4E] block group-hover/link:text-[#0057B8] transition-colors">ChatID</span>
<span className="text-xs text-gray-500 block mt-0.5">Automação de Recepção</span>
</a></li>
</ul>
</div>
<div className="w-[1px] bg-gray-100"></div>
<div className="flex-1">
<h4 className="text-xs font-semibold text-[#00B8AA] uppercase tracking-wider mb-4">Hardware</h4>
<ul className="space-y-3">
<li><a className="block group/link" href="#">
<span className="text-sm font-medium text-[#002B4E] block group-hover/link:text-[#0057B8] transition-colors">IAC-PRO</span>
<span className="text-xs text-gray-500 block mt-0.5">Alto Fluxo &amp; Performance</span>
</a></li>
<li><a className="block group/link" href="#">
<span className="text-sm font-medium text-[#002B4E] block group-hover/link:text-[#0057B8] transition-colors">IAC-500</span>
<span className="text-xs text-gray-500 block mt-0.5">Compacta e Robusta</span>
</a></li>
</ul>
</div>
<div className="absolute bottom-4 right-6">
<a className="text-xs font-medium text-[#0057B8] hover:underline flex items-center gap-1" href="/produtos">Ver portfólio completo <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>

<div className="group h-full flex items-center relative">
<button className="text-sm font-medium text-gray-600 hover:text-[#002B4E] transition-colors flex items-center gap-1 cursor-default">
                        Segmentos <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="mega-menu-content absolute top-full left-1/2 -translate-x-1/2 w-[400px] bg-white border border-gray-100 shadow-xl rounded-2xl p-4 mt-1 grid grid-cols-2 gap-2">
<a className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors" href="#">
<div className="w-8 h-8 rounded-lg bg-[#002B4E]/5 flex items-center justify-center text-[#0057B8]">
<iconify-icon icon="solar:buildings-2-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#002B4E]">Condominial</span>
</a>
<a className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors" href="#">
<div className="w-8 h-8 rounded-lg bg-[#002B4E]/5 flex items-center justify-center text-[#0057B8]">
<iconify-icon icon="solar:hospital-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#002B4E]">Hospitalar</span>
</a>
<a className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors" href="#">
<div className="w-8 h-8 rounded-lg bg-[#002B4E]/5 flex items-center justify-center text-[#0057B8]">
<iconify-icon icon="solar:box-minimalistic-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#002B4E]">Logístico</span>
</a>
<a className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors" href="#">
<div className="w-8 h-8 rounded-lg bg-[#002B4E]/5 flex items-center justify-center text-[#0057B8]">
<iconify-icon icon="solar:square-academic-cap-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#002B4E]">Educacional</span>
</a>
<a className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors col-span-2" href="#">
<div className="w-8 h-8 rounded-lg bg-[#002B4E]/5 flex items-center justify-center text-[#0057B8]">
<iconify-icon icon="solar:shop-2-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#002B4E]">Centros Comerciais</span>
</a>
</div>
</div>
<div className="h-4 w-[1px] bg-gray-200 mx-2"></div>
<a className="text-sm font-medium text-gray-600 hover:text-[#002B4E] transition-colors" href="/integradores">Parceiros</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#002B4E] transition-colors" href="#contato">Contato/Suporte</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#002B4E] transition-colors" href="/faq">FAQ</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#002B4E] transition-colors" href="/blog">Blog</a>
</nav>

<div className="fixed top-20 left-0 w-full bg-white border-b border-gray-100 p-6 hidden peer-checked:flex flex-col gap-6 shadow-xl lg:hidden z-40 max-h-[calc(100vh-80px)] overflow-y-auto">
<a className="text-lg font-medium text-[#002B4E]" href="/">Home</a>
<a className="text-lg font-medium text-[#002B4E]" href="/sobre">Sobre</a>
<div className="flex flex-col gap-3">
<span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Produtos</span>
<a className="text-base text-gray-600 pl-4 border-l-2 border-transparent hover:border-[#0057B8]" href="#">Softwares</a>
<a className="text-base text-gray-600 pl-4 border-l-2 border-transparent hover:border-[#0057B8]" href="#">Hardwares</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Segmentos</span>
<a className="text-base text-gray-600 pl-4 border-l-2 border-transparent hover:border-[#0057B8]" href="#">Condominial</a>
<a className="text-base text-gray-600 pl-4 border-l-2 border-transparent hover:border-[#0057B8]" href="#">Indústria &amp; Logística</a>
</div>
<a className="text-lg font-medium text-[#002B4E]" href="/integradores">Parceiros</a>
<a className="text-lg font-medium text-[#002B4E]" href="#contato">Contato</a>
</div>
</div>
</header>
<main className="flex-grow pt-20">

<section className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-40">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-b from-[#0057B8]/5 to-transparent blur-3xl rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0057B8]/10 text-[#0057B8] text-xs font-medium mb-8">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                            Mais que acesso. Tecnologia que conecta.
                        </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-[#002B4E] leading-[1.1] mb-6">
                            Ecossistema Inteligente de <span className="text-[#0057B8]">Controle de Acesso</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                            Uma plataforma 100% brasileira que une hardware e software inteligentes para transformar a forma como empresas, condomínios e integradores vivem a segurança.
                        </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#002B4E] text-white text-sm font-medium hover:bg-[#001f38] transition-all shadow-sm flex items-center justify-center gap-2 group" href="/produtos">
                                Conhecer nossos produtos
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border border-gray-200 text-[#002B4E] text-sm font-medium hover:border-[#002B4E] hover:bg-gray-50 transition-all flex items-center justify-center" href="#contato">
                                Falar com especialistas
                            </a>
</div>
</div>

<div className="flex-1 w-full max-w-lg lg:max-w-none relative">
<div className="aspect-square relative flex items-center justify-center">
<div className="absolute inset-0 border border-gray-100 rounded-full animate-[spin_60s_linear_infinite]"></div>
<div className="absolute inset-8 border border-gray-100 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

<div className="relative w-32 h-32 bg-white rounded-3xl shadow-xl shadow-[#002B4E]/5 border border-gray-100 flex items-center justify-center z-10">
<span className="text-[#002B4E] font-semibold tracking-tighter text-2xl">M</span>
</div>

<div className="absolute top-10 left-10 w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center text-[#0057B8] animate-bounce" style={{animationDuration: '4s'}}>
<iconify-icon icon="solar:face-scan-square-linear" width="24"></iconify-icon>
</div>
<div className="absolute bottom-12 right-8 w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center text-[#00B8AA] animate-bounce" style={{animationDuration: '5s', animationDelay: '1s'}}>
<iconify-icon icon="solar:server-square-linear" width="22"></iconify-icon>
</div>
<div className="absolute top-24 right-4 w-12 h-12 bg-[#002B4E] rounded-xl shadow-lg flex items-center justify-center text-white animate-bounce" style={{animationDuration: '3s', animationDelay: '2s'}}>
<iconify-icon icon="solar:smartphone-update-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#002B4E] py-24 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">26 anos de inovação em segurança eletrônica</h2>
<p className="text-blue-100/80 text-lg font-light leading-relaxed mb-8">
                            A Maxtel evoluiu da fabricação de placas para se tornar uma plataforma tecnológica completa, integrando sistemas, dados e pessoas com precisão e confiabilidade.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#00B8AA] hover:text-[#FFB700] transition-colors group" href="/sobre">
                            Conhecer nossa História 
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
<div className="w-10 h-10 rounded-full bg-[#00B8AA]/20 flex items-center justify-center text-[#00B8AA] mb-4">
<iconify-icon icon="solar:tuning-square-2-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-lg tracking-tight mb-2">Integração Real</h3>
<p className="text-sm text-blue-100/60 font-light">Hardwares e softwares que conversam nativamente entre si.</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
<div className="w-10 h-10 rounded-full bg-[#FFB700]/20 flex items-center justify-center text-[#FFB700] mb-4">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-lg tracking-tight mb-2">Tecnologia Nacional</h3>
<p className="text-sm text-blue-100/60 font-light">Desenvolvimento próprio com suporte ágil e direto no Brasil.</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm sm:col-span-2">
<div className="w-10 h-10 rounded-full bg-[#0057B8]/40 flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:handshake-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-lg tracking-tight mb-2">Parceria B2B Sólida</h3>
<p className="text-sm text-blue-100/60 font-light max-w-md">Construímos relacionamentos de longo prazo e confiança com integradores em todo o território nacional.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#002B4E] mb-4">Uma tecnologia.<br/>Infinitas possibilidades.</h2>
<p className="text-gray-500 text-lg font-light">Nossas plataformas unem barreira física e governança digital.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

<div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-[#0057B8]/30 hover:shadow-lg hover:shadow-[#0057B8]/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#002B4E] mb-6 group-hover:bg-[#0057B8]/5 group-hover:text-[#0057B8] transition-colors">
<iconify-icon icon="solar:buildings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#002B4E] tracking-tight mb-2">TittanSafe</h3>
<p className="text-sm text-gray-500 font-light mb-4 h-10">Plataforma Enterprise completa para governança de identidades e acessos complexos.</p>
<span className="text-xs font-medium text-[#00B8AA] uppercase tracking-wider">Software</span>
</div>
<div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-[#0057B8]/30 hover:shadow-lg hover:shadow-[#0057B8]/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#002B4E] mb-6 group-hover:bg-[#0057B8]/5 group-hover:text-[#0057B8] transition-colors">
<iconify-icon icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#002B4E] tracking-tight mb-2">TrueSafe</h3>
<p className="text-sm text-gray-500 font-light mb-4 h-10">Controle essencial e intuitivo, ideal para operações dinâmicas e condomínios.</p>
<span className="text-xs font-medium text-[#00B8AA] uppercase tracking-wider">Software</span>
</div>
<div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-[#0057B8]/30 hover:shadow-lg hover:shadow-[#0057B8]/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#002B4E] mb-6 group-hover:bg-[#0057B8]/5 group-hover:text-[#0057B8] transition-colors">
<iconify-icon icon="solar:smart-speaker-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#002B4E] tracking-tight mb-2">ChatID</h3>
<p className="text-sm text-gray-500 font-light mb-4 h-10">Automação inteligente de recepção via autoatendimento e validação ágil.</p>
<span className="text-xs font-medium text-[#00B8AA] uppercase tracking-wider">Software</span>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-[#002B4E]/30 hover:shadow-lg hover:shadow-[#002B4E]/5 transition-all group md:col-span-1 lg:col-span-1 lg:col-start-1">
<div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#0057B8] mb-6 group-hover:bg-[#002B4E]/5 group-hover:text-[#002B4E] transition-colors">
<iconify-icon icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#002B4E] tracking-tight mb-2">IAC-PRO</h3>
<p className="text-sm text-gray-500 font-light mb-4 h-10">Controladora de altíssima performance projetada para ambientes de alto fluxo.</p>
<span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Hardware</span>
</div>
<div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-[#002B4E]/30 hover:shadow-lg hover:shadow-[#002B4E]/5 transition-all group md:col-span-1 lg:col-span-1">
<div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#0057B8] mb-6 group-hover:bg-[#002B4E]/5 group-hover:text-[#002B4E] transition-colors">
<iconify-icon icon="solar:card-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#002B4E] tracking-tight mb-2">IAC-500</h3>
<p className="text-sm text-gray-500 font-light mb-4 h-10">Compacta, robusta e versátil para demandas descentralizadas.</p>
<span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Hardware</span>
</div>

<div className="rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-transparent border border-dashed border-gray-300 md:col-span-2 lg:col-span-1">
<div className="w-16 h-16 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#002B4E] mb-4">
<iconify-icon icon="solar:widget-add-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-[#002B4E] mb-2">Portfólio Completo</h3>
<p className="text-xs text-gray-500 mb-4">Descubra todas as integrações e periféricos.</p>
<a className="px-5 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-[#002B4E] hover:border-[#0057B8] transition-colors" href="/produtos">Ver portfólio</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#002B4E] mb-4">O que entregamos e<br/>para quem entregamos?</h2>
<p className="text-gray-500 text-lg font-light max-w-2xl">Do condomínio à cidade inteligente, garantimos eficiência e escalabilidade com arquiteturas desenhadas para cada modelo de negócio.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="rounded-3xl bg-[#002B4E]/5 border border-[#002B4E]/10 p-10 flex flex-col h-full">
<div className="mb-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-600 mb-6">
<iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon> Para Integradores
                            </div>
<h3 className="text-2xl font-medium text-[#002B4E] tracking-tight mb-4">Potencialize seus projetos</h3>
<p className="text-gray-600 font-light mb-6">Tecnologia aberta, suporte técnico de nível 2 especializado, programa de canais e repasse estratégico de clientes finais.</p>
</div>
<a className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full bg-[#002B4E] text-white text-sm font-medium hover:bg-[#001f38] transition-colors gap-2 self-start mt-8" href="/integradores">
                            Seja um Parceiro Maxtel
                        </a>
</div>

<div className="rounded-3xl border border-gray-200 p-10 flex flex-col h-full">
<div className="mb-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 mb-6">
<iconify-icon icon="solar:city-linear"></iconify-icon> Para Instituições
                            </div>
<h3 className="text-2xl font-medium text-[#002B4E] tracking-tight mb-4">Segurança na sua realidade</h3>
<p className="text-gray-600 font-light mb-8">Explore as soluções verticais desenhadas sob medida para os desafios específicos da sua operação.</p>
<div className="flex flex-wrap gap-2">
<a className="px-4 py-2 rounded-xl bg-gray-50 hover:bg-[#0057B8]/5 border border-gray-100 hover:border-[#0057B8]/20 text-sm font-medium text-gray-700 hover:text-[#0057B8] transition-all flex items-center gap-2" href="/segmentos/condominial">
<iconify-icon icon="solar:home-smile-linear"></iconify-icon> Condomínios
                                </a>
<a className="px-4 py-2 rounded-xl bg-gray-50 hover:bg-[#0057B8]/5 border border-gray-100 hover:border-[#0057B8]/20 text-sm font-medium text-gray-700 hover:text-[#0057B8] transition-all flex items-center gap-2" href="/segmentos/industrial">
<iconify-icon icon="solar:box-linear"></iconify-icon> Indústria &amp; Logística
                                </a>
<a className="px-4 py-2 rounded-xl bg-gray-50 hover:bg-[#0057B8]/5 border border-gray-100 hover:border-[#0057B8]/20 text-sm font-medium text-gray-700 hover:text-[#0057B8] transition-all flex items-center gap-2" href="/segmentos/saude">
<iconify-icon icon="solar:heart-pulse-linear"></iconify-icon> Saúde
                                </a>
<a className="px-4 py-2 rounded-xl bg-gray-50 hover:bg-[#0057B8]/5 border border-gray-100 hover:border-[#0057B8]/20 text-sm font-medium text-gray-700 hover:text-[#0057B8] transition-all flex items-center gap-2" href="/segmentos/educacao">
<iconify-icon icon="solar:diploma-linear"></iconify-icon> Educação
                                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center text-2xl md:text-3xl font-medium tracking-tight text-[#002B4E] mb-12">Quem já confia na tecnologia Maxtel</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
<iconify-icon className="text-gray-200 mb-4" icon="solar:quote-right-linear" width="32"></iconify-icon>
<p className="text-gray-600 text-sm font-light leading-relaxed mb-6">"A estabilidade dos equipamentos da Maxtel mudou nosso patamar de entrega. Reduzimos chamados técnicos drasticamente."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-medium text-sm">HA</div>
<div>
<h4 className="text-sm font-medium text-[#002B4E]">Henrique Alves</h4>
<span className="text-xs text-gray-400">Diretor de Operações</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
<iconify-icon className="text-gray-200 mb-4" icon="solar:quote-right-linear" width="32"></iconify-icon>
<p className="text-gray-600 text-sm font-light leading-relaxed mb-6">"O suporte nativo e a facilidade de integração do TittanSafe nos permitiram escalar projetos corporativos complexos com agilidade."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-medium text-sm">MB</div>
<div>
<h4 className="text-sm font-medium text-[#002B4E]">Marco Barbosa</h4>
<span className="text-xs text-gray-400">Integrador Parceiro</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
<iconify-icon className="text-gray-200 mb-4" icon="solar:quote-right-linear" width="32"></iconify-icon>
<p className="text-gray-600 text-sm font-light leading-relaxed mb-6">"Nossa gestão de acessos no condomínio passou da barreira física para uma verdadeira governança digital, intuitiva e segura."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-medium text-sm">WB</div>
<div>
<h4 className="text-sm font-medium text-[#002B4E]">Wagner Botelho</h4>
<span className="text-xs text-gray-400">Síndico Profissional</span>
</div>
</div>
</div>
</div>

<div className="relative rounded-[2.5rem] overflow-hidden bg-[#0057B8] text-white py-20 px-6 text-center shadow-xl" id="contato">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Quer transformar sua segurança em inteligência?</h3>
<p className="text-blue-100 text-lg font-light mb-10">Com a Maxtel, segurança e eficiência andam lado a lado. Descubra como podemos otimizar sua operação hoje.</p>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#002B4E] text-base font-medium hover:bg-gray-50 transition-colors shadow-lg shadow-black/10 gap-2 group" href="/crm-form">
                            Agendar um Diagnóstico de Operação
                            <iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:calendar-add-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<a className="flex items-center gap-1 group" href="/">
<span className="text-[#002B4E] font-semibold text-xl tracking-tighter flex items-center">
<span className="text-[#0057B8] mr-[1px]">M</span>AXTEL
                    </span>
</a>
<div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
<a className="hover:text-[#002B4E] transition-colors" href="/sobre">Sobre</a>
<a className="hover:text-[#002B4E] transition-colors" href="/produtos">Produtos</a>
<a className="hover:text-[#002B4E] transition-colors" href="/integradores">Integradores</a>
<a className="hover:text-[#002B4E] transition-colors" href="#contato">Contato</a>
</div>
</div>
<div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
<p>© 2024 Maxtel. Todos os direitos reservados.</p>
<div className="flex gap-4">
<a className="hover:text-gray-600" href="#">Políticas de Privacidade</a>
<a className="hover:text-gray-600" href="#">Termos de Uso</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
