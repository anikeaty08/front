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
      

<nav className="sticky top-0 z-50 w-full bg-[#FFFFFF]/80 backdrop-blur-md border-b border-[#F2F4F7]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0 flex items-center gap-1">
<span className="font-semibold text-2xl tracking-tight text-[#1C2E4A]">CHAVE</span>
<span className="font-semibold text-2xl tracking-tight text-[#2F7DE1]">DIRETA</span>
</div>

<div className="hidden md:flex space-x-10">
<a className="text-base font-medium text-[#2B2B2B] hover:text-[#2F7DE1] transition-colors" href="#recursos">Recursos</a>
<a className="text-base font-medium text-[#2B2B2B] hover:text-[#2F7DE1] transition-colors" href="#plataforma">A Plataforma</a>
<a className="text-base font-medium text-[#2B2B2B] hover:text-[#2F7DE1] transition-colors" href="#precos">Planos</a>
</div>

<div className="hidden md:flex items-center space-x-6">
<a className="text-base font-medium text-[#1C2E4A] hover:text-[#2F7DE1] transition-colors" href="#">Entrar</a>
<a className="bg-[#2F7DE1] hover:bg-[#1C2E4A] text-[#FFFFFF] px-6 py-2.5 rounded-lg text-base font-medium transition-colors shadow-sm" href="#">
                        Começar Agora
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-[#1C2E4A] hover:text-[#2F7DE1]">
<i className="w-7 h-7" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2F4F7] text-[#1C2E4A] mb-8 border border-[#E5E7EB]">
<span className="flex h-2 w-2 rounded-full bg-[#2F7DE1]"></span>
<span className="text-base font-medium">Nova funcionalidade: Repasse automático via PIX</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-[#1C2E4A] max-w-4xl mx-auto leading-tight">
                A gestão completa que a sua <span className="text-[#2F7DE1]">imobiliária</span> precisa.
            </h1>
<p className="mt-8 text-lg lg:text-xl text-[#2B2B2B] max-w-2xl mx-auto leading-relaxed">
                Organize portfólios, controle acessos de corretores, gerencie múltiplos imóveis por proprietário e automatize a cobrança de aluguéis e repasses em uma única plataforma.
            </p>
<div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex justify-center items-center gap-2 bg-[#2F7DE1] hover:bg-[#1C2E4A] text-[#FFFFFF] px-8 py-4 rounded-xl text-lg font-medium transition-colors shadow-sm" href="#">
                    Testar Gratuitamente
                    <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-[#FFFFFF] border border-[#E5E7EB] hover:bg-[#F2F4F7] text-[#1C2E4A] px-8 py-4 rounded-xl text-lg font-medium transition-colors" href="#">
                    Agendar Demonstração
                </a>
</div>
</div>
</section>

<section className="pb-32 px-6 lg:px-8" id="plataforma">
<div className="max-w-[1400px] mx-auto">
<div className="rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden flex flex-col lg:flex-row h-[900px]">

<div className="w-full lg:w-[280px] bg-white border-r border-gray-100 flex flex-col shrink-0">

<div className="p-8 pb-6">
<div className="flex items-center gap-1">
<span className="font-semibold text-2xl tracking-tight text-gray-900">CHAVE</span>
<span className="font-semibold text-2xl tracking-tight text-blue-600">DIRETA</span>
</div>
<div className="text-sm text-gray-500 mt-1">Gestão Imobiliária</div>
</div>

<div className="flex-1 overflow-y-auto px-6 py-2">
<div className="text-xs font-semibold text-gray-400 tracking-wider mb-4 px-2 uppercase">Menu</div>
<div className="space-y-1.5">
<a className="flex items-center gap-3 bg-blue-50 text-blue-600 px-4 py-3 rounded-xl font-medium text-base" href="#">
<i className="w-5 h-5" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
                                Dashboard
                            </a>
<a className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 px-4 py-3 rounded-xl font-medium text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="building-2" strokeWidth="1.5"></i>
                                Imóveis
                            </a>
<a className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 px-4 py-3 rounded-xl font-medium text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
                                Clientes
                            </a>
<a className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 px-4 py-3 rounded-xl font-medium text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i>
                                Agenda
                            </a>
<a className="flex items-center justify-between text-gray-600 hover:bg-gray-50 px-4 py-3 rounded-xl font-medium text-base transition-colors" href="#">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="file-text" strokeWidth="1.5"></i>
                                    Contratos
                                </div>
<span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded-full">3</span>
</a>
<a className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 px-4 py-3 rounded-xl font-medium text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="user-square" strokeWidth="1.5"></i>
                                Proprietários
                            </a>
<a className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 px-4 py-3 rounded-xl font-medium text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="settings" strokeWidth="1.5"></i>
                                Usuários
                            </a>
</div>
</div>

<div className="p-6 border-t border-gray-100 space-y-4">
<div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-semibold text-base tracking-tight">MA</div>
<div>
<div className="text-base font-semibold text-gray-900">Marina Alves</div>
<div className="text-sm text-gray-500">Admin</div>
</div>
</div>
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<a className="flex items-center gap-3 text-gray-700 bg-gray-50 hover:bg-gray-100 px-4 py-3 rounded-xl w-full font-medium text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="help-circle" strokeWidth="1.5"></i>
                            Suporte
                        </a>
</div>
</div>

<div className="flex-1 bg-[#F9FAFB] flex flex-col min-w-0">

<div className="h-20 flex items-center justify-between px-10 py-4 shrink-0 bg-white/50 backdrop-blur-md border-b border-gray-100/50 sticky top-0 z-10">

<div className="relative w-full max-w-md">
<i className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-12 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700 shadow-sm transition-all" placeholder="Buscar imóvel, cliente, contrato..." type="text"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-md">⌘K</span>
</div>

<div className="flex items-center gap-6">
<div className="relative cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-colors">
<i className="w-6 h-6 text-gray-600" data-lucide="bell" strokeWidth="1.5"></i>
<span className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
</div>
<div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-1.5 pr-3 rounded-full border border-gray-200 bg-white shadow-sm transition-colors">
<div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-medium text-sm">MA</div>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto px-10 pt-8 pb-12">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">Bom dia, Marina 👋</h1>
<p className="text-base text-gray-500">Segunda-feira, 02 de março de 2026</p>
</div>
<div className="flex flex-wrap gap-3">
<button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-base font-medium flex items-center gap-2 shadow-sm transition-colors">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i> Novo Imóvel
                                </button>
<button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl text-base font-medium flex items-center gap-2 shadow-sm transition-colors">
<i className="w-5 h-5" data-lucide="calendar-plus" strokeWidth="1.5"></i> Nova Visita
                                </button>
<button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl text-base font-medium flex items-center gap-2 shadow-sm transition-colors">
<i className="w-5 h-5" data-lucide="user-plus" strokeWidth="1.5"></i> Novo Cliente
                                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

<div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
<i className="w-6 h-6" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<button className="text-gray-400 hover:text-gray-600"><i className="w-5 h-5" data-lucide="more-horizontal" strokeWidth="1.5"></i></button>
</div>
<div className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">100</div>
<div className="text-base text-gray-500 mb-4">Imóveis Ativos</div>
<div className="flex items-center gap-1.5 text-sm font-medium text-emerald-600 bg-emerald-50 w-fit px-2.5 py-1 rounded-md">
<i className="w-4 h-4" data-lucide="trending-up" strokeWidth="2"></i> +4 esse mês
                                </div>
</div>

<div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
<i className="w-6 h-6" data-lucide="home" strokeWidth="1.5"></i>
</div>
<button className="text-gray-400 hover:text-gray-600"><i className="w-5 h-5" data-lucide="more-horizontal" strokeWidth="1.5"></i></button>
</div>
<div className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">38</div>
<div className="text-base text-gray-500 mb-4">Disponíveis</div>
<div className="flex items-center gap-1.5 text-sm font-medium text-emerald-600 bg-emerald-50 w-fit px-2.5 py-1 rounded-md">
<i className="w-4 h-4" data-lucide="trending-up" strokeWidth="2"></i> +2 essa semana
                                </div>
</div>

<div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
<i className="w-6 h-6" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<button className="text-gray-400 hover:text-gray-600"><i className="w-5 h-5" data-lucide="more-horizontal" strokeWidth="1.5"></i></button>
</div>
<div className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">41</div>
<div className="text-base text-gray-500 mb-4">Alugados</div>
<div className="flex items-center gap-1.5 text-sm font-medium text-red-600 bg-red-50 w-fit px-2.5 py-1 rounded-md">
<i className="w-4 h-4" data-lucide="trending-down" strokeWidth="2"></i> -1 esse mês
                                </div>
</div>

<div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600">
<i className="w-6 h-6" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<button className="text-gray-400 hover:text-gray-600"><i className="w-5 h-5" data-lucide="more-horizontal" strokeWidth="1.5"></i></button>
</div>
<div className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">41</div>
<div className="text-base text-gray-500 mb-4">Contratos Ativos</div>
<div className="flex items-center gap-1.5 text-sm font-medium text-emerald-600 bg-emerald-50 w-fit px-2.5 py-1 rounded-md">
<i className="w-4 h-4" data-lucide="trending-up" strokeWidth="2"></i> +3 esse mês
                                </div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">

<div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm xl:col-span-2 flex flex-col">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Imóveis por Mês</h3>
<p className="text-sm text-gray-500 mt-1">Alugados vs. Vendidos</p>
</div>
<div className="flex gap-6 text-sm font-medium text-gray-600">
<div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Alugados</div>
<div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-gray-900"></span> Vendidos</div>
</div>
</div>
<div className="flex-1 relative w-full h-56 mt-4">

<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 600 200">
<line stroke="#f3f4f6" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="600" y1="0" y2="0"></line>
<line stroke="#f3f4f6" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="600" y1="50" y2="50"></line>
<line stroke="#f3f4f6" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="600" y1="100" y2="100"></line>
<line stroke="#f3f4f6" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="600" y1="150" y2="150"></line>
<line stroke="#e5e7eb" strokeWidth="1" x1="0" x2="600" y1="200" y2="200"></line>
<defs>
<lineargradient id="blueGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#3b82f6" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#3b82f6" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,130 C100,110 200,120 300,100 C400,80 500,70 600,60" fill="none" stroke="#3b82f6" strokeWidth="2.5"></path>
<path d="M0,130 C100,110 200,120 300,100 C400,80 500,70 600,60 L600,200 L0,200 Z" fill="url(#blueGrad)"></path>
<path d="M0,170 C100,160 200,170 300,150 C400,140 500,130 600,145" fill="none" stroke="#111827" strokeWidth="2.5"></path>
</svg>
<div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 -translate-x-8 pb-1">
<span>80</span>
<span>60</span>
<span>40</span>
<span>20</span>
<span>0</span>
</div>
<div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-400 translate-y-8">
<span>Set</span>
<span>Out</span>
<span>Nov</span>
<span>Dez</span>
<span>Jan</span>
<span>Fev</span>
<span>Mar</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Status dos Imóveis</h3>
<p className="text-sm text-gray-500 mt-1">Distribuição atual</p>
</div>
<div className="flex-1 flex flex-col justify-center items-center">
<div className="relative w-48 h-48 mb-8">
<svg className="w-full h-full -rotate-90" viewbox="0 0 100 100">

<circle cx="50" cy="50" fill="none" r="34" stroke="#f3f4f6" strokeWidth="18"></circle>

<circle cx="50" cy="50" fill="none" r="34" stroke="#1f2937" stroke-dasharray="25 213" stroke-dashoffset="0" strokeWidth="18"></circle>

<circle cx="50" cy="50" fill="none" r="34" stroke="#3b82f6" stroke-dasharray="87 213" stroke-dashoffset="-28" strokeWidth="18"></circle>

<circle cx="50" cy="50" fill="none" r="34" stroke="#10b981" stroke-dasharray="81 213" stroke-dashoffset="-118" strokeWidth="18"></circle>

<circle cx="50" cy="50" fill="none" r="34" stroke="#ffffff" stroke-dasharray="2 23 2 85 2 79 2 18" stroke-dashoffset="0" strokeWidth="20"></circle>
</svg>
</div>
<div className="w-full space-y-4">
<div className="flex justify-between items-center text-base">
<div className="flex items-center gap-3 text-gray-600"><span className="w-3 h-3 rounded-full bg-emerald-500"></span> Disponível</div>
<span className="font-semibold text-gray-900">38</span>
</div>
<div className="flex justify-between items-center text-base">
<div className="flex items-center gap-3 text-gray-600"><span className="w-3 h-3 rounded-full bg-blue-500"></span> Alugado</div>
<span className="font-semibold text-gray-900">41</span>
</div>
<div className="flex justify-between items-center text-base">
<div className="flex items-center gap-3 text-gray-600"><span className="w-3 h-3 rounded-full bg-gray-800"></span> Vendido</div>
<span className="font-semibold text-gray-900">12</span>
</div>
<div className="flex justify-between items-center text-base">
<div className="flex items-center gap-3 text-gray-600"><span className="w-3 h-3 rounded-full bg-gray-200"></span> Inativo</div>
<span className="font-semibold text-gray-900">9</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl border border-gray-200 shadow-sm xl:col-span-2 overflow-hidden flex flex-col">
<div className="p-8 pb-6 border-b border-gray-100 flex justify-between items-start bg-white">
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Visitas de Hoje</h3>
<p className="text-sm text-gray-500 mt-1">4 agendadas</p>
</div>
<a className="text-base font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors" href="#">
                                        Ver agenda <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="divide-y divide-gray-100 flex-1">

<div className="p-6 px-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 hover:bg-gray-50/50 transition-colors">
<div className="text-base font-semibold text-gray-400 w-14 shrink-0">09:30</div>
<div className="flex-1">
<div className="text-base font-semibold text-gray-900">Carlos Mendonça</div>
<div className="text-sm text-gray-500 flex items-center gap-1.5 mt-1">
<i className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></i> Ap. 3Q – Moema
                                            </div>
</div>
<div className="text-sm text-gray-500 hidden md:block w-32">Felipe Lima</div>
<div className="bg-blue-50 text-blue-600 text-xs font-semibold px-3.5 py-1.5 rounded-full shrink-0 w-fit">Agendada</div>
</div>

<div className="p-6 px-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 hover:bg-gray-50/50 transition-colors">
<div className="text-base font-semibold text-gray-400 w-14 shrink-0">11:00</div>
<div className="flex-1">
<div className="text-base font-semibold text-gray-900">Rafaela Costa</div>
<div className="text-sm text-gray-500 flex items-center gap-1.5 mt-1">
<i className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></i> Casa – Alphaville
                                            </div>
</div>
<div className="text-sm text-gray-500 hidden md:block w-32">Juliana Ramos</div>
<div className="bg-blue-50 text-blue-600 text-xs font-semibold px-3.5 py-1.5 rounded-full shrink-0 w-fit">Agendada</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col">
<div className="p-8 pb-6 border-b border-gray-100 flex justify-between items-start">
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Tarefas</h3>
<p className="text-sm text-gray-400 mt-1">4 pendentes</p>
</div>
<div className="p-4 flex-1 space-y-1">

<label className="flex items-start gap-4 p-4 hover:bg-gray-50/50 rounded-xl cursor-pointer group transition-colors">
<div className="relative flex items-start pt-0.5">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-gray-300 rounded-md bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center transition-all">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
<span className="text-base text-gray-700 flex-1 group-hover:text-gray-900 transition-colors">Enviar proposta para Carlos Mendonça</span>
<span className="bg-red-50 text-red-600 text-xs font-bold px-2.5 py-1 rounded shrink-0 uppercase tracking-wide">Alta</span>
</label>

<label className="flex items-start gap-4 p-4 hover:bg-gray-50/50 rounded-xl cursor-pointer group transition-colors">
<div className="relative flex items-start pt-0.5">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-gray-300 rounded-md bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center transition-all">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
<span className="text-base text-gray-700 flex-1 group-hover:text-gray-900 transition-colors">Atualizar fotos do AP-0042 (Moema)</span>
<span className="bg-amber-50 text-amber-600 text-xs font-bold px-2.5 py-1 rounded shrink-0 uppercase tracking-wide">Média</span>
</label>

<label className="flex items-start gap-4 p-4 hover:bg-gray-50/50 rounded-xl cursor-pointer group transition-colors">
<div className="relative flex items-start pt-0.5">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-gray-300 rounded-md bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center transition-all">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
<span className="text-base text-gray-700 flex-1 group-hover:text-gray-900 transition-colors">Renovar contrato - Maria Aparecida</span>
<span className="bg-red-50 text-red-600 text-xs font-bold px-2.5 py-1 rounded shrink-0 uppercase tracking-wide">Alta</span>
</label>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F2F4F7]" id="recursos">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl font-semibold tracking-tight text-[#1C2E4A]">Tudo para simplificar sua operação</h2>
<p className="mt-6 text-lg text-[#2B2B2B]">Desenvolvemos ferramentas específicas para as dores diárias das imobiliárias, focando em automação e clareza de dados.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

<div className="bg-[#FFFFFF] p-10 rounded-2xl border border-[#E5E7EB] hover:shadow-lg transition-shadow">
<div className="w-14 h-14 bg-[#2F7DE1]/10 rounded-xl flex items-center justify-center mb-8 text-[#2F7DE1]">
<i className="w-7 h-7" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#1C2E4A] mb-4">Portfólio Organizado</h3>
<p className="text-lg text-[#2B2B2B] leading-relaxed">
                        Cadastre e gerencie todos os imóveis da sua carteira de forma visual. Relacione cada propriedade aos seus respectivos proprietários, mesmo aqueles com múltiplos imóveis anunciados.
                    </p>
</div>

<div className="bg-[#FFFFFF] p-10 rounded-2xl border border-[#E5E7EB] hover:shadow-lg transition-shadow">
<div className="w-14 h-14 bg-[#2F7DE1]/10 rounded-xl flex items-center justify-center mb-8 text-[#2F7DE1]">
<i className="w-7 h-7" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#1C2E4A] mb-4">Controle de Acessos</h3>
<p className="text-lg text-[#2B2B2B] leading-relaxed">
                        Defina o que cada membro da sua equipe pode ver e fazer. Crie níveis de acesso personalizados para corretores, gerentes, equipe financeira e administradores da imobiliária.
                    </p>
</div>

<div className="bg-[#FFFFFF] p-10 rounded-2xl border border-[#E5E7EB] hover:shadow-lg transition-shadow">
<div className="w-14 h-14 bg-[#2F7DE1]/10 rounded-xl flex items-center justify-center mb-8 text-[#2F7DE1]">
<i className="w-7 h-7" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#1C2E4A] mb-4">Emissão de Boletos</h3>
<p className="text-lg text-[#2B2B2B] leading-relaxed">
                        Gere boletos automaticamente para os inquilinos. Acompanhe em tempo real quem pagou, quem está inadimplente e aplique multas e juros de forma automatizada pelo sistema.
                    </p>
</div>

<div className="bg-[#FFFFFF] p-10 rounded-2xl border border-[#E5E7EB] hover:shadow-lg transition-shadow">
<div className="w-14 h-14 bg-[#2F7DE1]/10 rounded-xl flex items-center justify-center mb-8 text-[#2F7DE1]">
<i className="w-7 h-7" data-lucide="arrow-left-right" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#1C2E4A] mb-4">Split e Repasses Inteligentes</h3>
<p className="text-lg text-[#2B2B2B] leading-relaxed">
                        Ao receber o pagamento do inquilino, o sistema calcula automaticamente a comissão da imobiliária e o saldo a ser repassado, organizando os pagamentos por proprietário.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FFFFFF]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-4xl font-semibold tracking-tight text-[#1C2E4A] mb-8">Fluxo financeiro sem dor de cabeça</h2>
<div className="space-y-8">
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F2F4F7] flex items-center justify-center text-[#1C2E4A] font-semibold text-xl">1</div>
<div>
<h4 className="text-xl font-semibold text-[#1C2E4A] mb-2">O inquilino paga</h4>
<p className="text-lg text-[#2B2B2B]">O boleto ou PIX é pago pelo inquilino e compensado automaticamente no sistema da Chave Direta.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F2F4F7] flex items-center justify-center text-[#1C2E4A] font-semibold text-xl">2</div>
<div>
<h4 className="text-xl font-semibold text-[#1C2E4A] mb-2">Divisão automática</h4>
<p className="text-lg text-[#2B2B2B]">Nossa tecnologia retém a taxa administrativa da imobiliária e separa o valor exato destinado ao proprietário.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2F7DE1] flex items-center justify-center text-[#FFFFFF] font-semibold text-xl">3</div>
<div>
<h4 className="text-xl font-semibold text-[#1C2E4A] mb-2">Repasse com um clique</h4>
<p className="text-lg text-[#2B2B2B]">Acesse a lista de repasses pendentes e transfira o dinheiro para a conta do proprietário de forma segura e rápida.</p>
</div>
</div>
</div>
</div>
<div className="relative">

<div className="bg-[#F2F4F7] rounded-3xl p-10 border border-[#E5E7EB]">
<div className="bg-[#FFFFFF] rounded-xl p-6 shadow-sm border border-[#E5E7EB] mb-6">
<div className="flex justify-between items-center mb-4">
<span className="text-base text-[#2B2B2B]">Boleto Pago: Apto 101</span>
<span className="text-base font-semibold text-emerald-600">+ R$ 3.000,00</span>
</div>
<div className="w-full bg-[#E5E7EB] h-2 rounded-full overflow-hidden flex">
<div className="bg-[#1C2E4A] h-full" style={{width: '10%'}}></div>
<div className="bg-[#2F7DE1] h-full" style={{width: '90%'}}></div>
</div>
<div className="flex justify-between items-center mt-4 text-base">
<span className="text-[#1C2E4A] font-medium"><span className="inline-block w-3 h-3 rounded-full bg-[#1C2E4A] mr-2"></span>Taxa Adm (10%)</span>
<span className="text-[#2F7DE1] font-medium"><span className="inline-block w-3 h-3 rounded-full bg-[#2F7DE1] mr-2"></span>Proprietário (90%)</span>
</div>
</div>
<div className="bg-[#FFFFFF] rounded-xl p-6 shadow-sm border border-[#E5E7EB]">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-[#F2F4F7] flex items-center justify-center">
<i className="w-6 h-6 text-[#1C2E4A]" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-lg font-semibold text-[#1C2E4A]">Roberto Almeida</div>
<div className="text-base text-[#2B2B2B]">Proprietário de 3 imóveis</div>
</div>
</div>
<button className="w-full bg-[#1C2E4A] text-[#FFFFFF] py-3 rounded-lg text-base font-medium flex justify-center items-center gap-2 hover:bg-[#2F7DE1] transition-colors">
                                Autorizar Repasse: R$ 2.700,00
                                <i className="w-5 h-5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-[#2F7DE1]">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#FFFFFF] mb-8">
                Pronto para modernizar a gestão da sua imobiliária?
            </h2>
<p className="text-xl text-[#FFFFFF]/90 mb-12 max-w-2xl mx-auto">
                Junte-se a dezenas de imobiliárias que automatizaram seus processos, reduziram erros financeiros e melhoraram o relacionamento com proprietários.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="bg-[#FFFFFF] text-[#2F7DE1] hover:bg-[#F2F4F7] px-8 py-4 rounded-xl text-lg font-medium transition-colors shadow-sm" href="#">
                    Comece seu teste grátis
                </a>
<a className="bg-transparent border border-[#FFFFFF]/30 text-[#FFFFFF] hover:bg-[#FFFFFF]/10 px-8 py-4 rounded-xl text-lg font-medium transition-colors" href="#">
                    Falar com vendas
                </a>
</div>
</div>
</section>

<footer className="bg-[#1C2E4A] pt-20 pb-10 border-t border-[#1C2E4A]/20">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<div className="flex items-center gap-1 mb-6">
<span className="font-semibold text-2xl tracking-tight text-[#FFFFFF]">CHAVE</span>
<span className="font-semibold text-2xl tracking-tight text-[#2F7DE1]">DIRETA</span>
</div>
<p className="text-base text-[#F2F4F7]/70">
                        A plataforma definitiva para gestão de aluguéis, portfólio e repasses imobiliários.
                    </p>
</div>
<div>
<h4 className="text-lg font-semibold text-[#FFFFFF] mb-6">Produto</h4>
<ul className="space-y-4">
<li><a className="text-base text-[#F2F4F7]/70 hover:text-[#FFFFFF] transition-colors" href="#">Gestão de Imóveis</a></li>
<li><a className="text-base text-[#F2F4F7]/70 hover:text-[#FFFFFF] transition-colors" href="#">Boletos e Cobranças</a></li>
<li><a className="text-base text-[#F2F4F7]/70 hover:text-[#FFFFFF] transition-colors" href="#">Split de Pagamentos</a></li>
<li><a className="text-base text-[#F2F4F7]/70 hover:text-[#FFFFFF] transition-colors" href="#">Preços</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-semibold text-[#FFFFFF] mb-6">Recursos</h4>
<ul className="space-y-4">
<li><a className="text-base text-[#F2F4F7]/70 hover:text-[#FFFFFF] transition-colors" href="#">Central de Ajuda</a></li>
<li><a className="text-base text-[#F2F4F7]/70 hover:text-[#FFFFFF] transition-colors" href="#">Blog</a></li>
<li><a className="text-base text-[#F2F4F7]/70 hover:text-[#FFFFFF] transition-colors" href="#">Guias para Corretores</a></li>
<li><a className="text-base text-[#F2F4F7]/70 hover:text-[#FFFFFF] transition-colors" href="#">API</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-semibold text-[#FFFFFF] mb-6">Empresa</h4>
<ul className="space-y-4">
<li><a className="text-base text-[#F2F4F7]/70 hover:text-[#FFFFFF] transition-colors" href="#">Sobre nós</a></li>
<li><a className="text-base text-[#F2F4F7]/70 hover:text-[#FFFFFF] transition-colors" href="#">Contato</a></li>
<li><a className="text-base text-[#F2F4F7]/70 hover:text-[#FFFFFF] transition-colors" href="#">Termos de Uso</a></li>
<li><a className="text-base text-[#F2F4F7]/70 hover:text-[#FFFFFF] transition-colors" href="#">Privacidade</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-[#FFFFFF]/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-base text-[#F2F4F7]/50">
                    © 2024 Chave Direta. Todos os direitos reservados.
                </p>
<div className="flex gap-6">
<a className="text-[#F2F4F7]/50 hover:text-[#FFFFFF] transition-colors" href="#">
<i className="w-6 h-6" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="text-[#F2F4F7]/50 hover:text-[#FFFFFF] transition-colors" href="#">
<i className="w-6 h-6" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="text-[#F2F4F7]/50 hover:text-[#FFFFFF] transition-colors" href="#">
<i className="w-6 h-6" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
