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
      

<div className="flex h-screen overflow-hidden">

<aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">

<div className="p-6 border-b border-gray-800">
<div className="flex items-center space-x-2">
<div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-lg tracking-tight">CS</span>
</div>
<div>
<h1 className="text-sm font-semibold tracking-tight">Cloud Sphere</h1>
<p className="text-xs text-gray-400">Nexus BOS</p>
</div>
</div>
</div>

<nav className="flex-1 p-4 space-y-1 overflow-y-auto">
<div className="mb-6">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider px-3 mb-2">Principal</p>
<a className="sidebar-item flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-l-2 border-purple-500" href="#">
<i data-lucide="layout-dashboard" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="sidebar-item flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-400" href="#">
<i data-lucide="calendar" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium">Agendamentos</span>
</a>
<a className="sidebar-item flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-400" href="#">
<i data-lucide="users" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium">Clientes</span>
</a>
<a className="sidebar-item flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-400" href="#">
<i data-lucide="scissors" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium">Serviços</span>
</a>
<a className="sidebar-item flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-400" href="#">
<i data-lucide="users-round" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium">Barbeiros</span>
</a>
</div>
<div className="mb-6">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider px-3 mb-2">Gestão</p>
<a className="sidebar-item flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-400" href="#">
<i data-lucide="dollar-sign" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium">Financeiro</span>
</a>
<a className="sidebar-item flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-400" href="#">
<i data-lucide="package" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium">Estoque</span>
</a>
<a className="sidebar-item flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-400" href="#">
<i data-lucide="bar-chart-3" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium">Relatórios</span>
</a>
</div>
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider px-3 mb-2">Módulos</p>
<a className="sidebar-item flex items-center justify-between px-3 py-2.5 rounded-lg text-gray-400" href="#">
<div className="flex items-center space-x-3">
<i data-lucide="stethoscope" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium">Consultório</span>
</div>
<span className="text-xs bg-gray-800 px-2 py-0.5 rounded">Em breve</span>
</a>
<a className="sidebar-item flex items-center justify-between px-3 py-2.5 rounded-lg text-gray-400" href="#">
<div className="flex items-center space-x-3">
<i data-lucide="graduation-cap" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium">Escola</span>
</div>
<span className="text-xs bg-gray-800 px-2 py-0.5 rounded">Em breve</span>
</a>
</div>
</nav>

<div className="p-4 border-t border-gray-800">
<div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer transition">
<img alt="User" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop" style={{objectFit: 'cover'}}/>
<div className="flex-1">
<p className="text-sm font-medium">Orion Silva</p>
<p className="text-xs text-gray-400">Administrador</p>
</div>
<i className="text-gray-400" data-lucide="chevron-down" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto">

<header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
<div className="px-8 py-4">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight">Dashboard</h2>
<p className="text-sm text-gray-400 mt-1">Visão geral do seu negócio</p>
</div>
<div className="flex items-center space-x-3">
<button className="p-2 hover:bg-gray-800 rounded-lg transition relative">
<i data-lucide="bell" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full"></span>
</button>
<button className="p-2 hover:bg-gray-800 rounded-lg transition">
<i data-lucide="settings" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</button>
<button className="px-4 py-2 gradient-primary rounded-lg text-sm font-medium hover:opacity-90 transition flex items-center space-x-2">
<i data-lucide="plus" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
<span>Novo Agendamento</span>
</button>
</div>
</div>
</div>
</header>

<div className="p-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

<div className="stat-card bg-gray-900 border border-gray-800 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
<i className="text-blue-400" data-lucide="calendar-check" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
</div>
<span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded">+12%</span>
</div>
<h3 className="text-2xl font-semibold mb-1">127</h3>
<p className="text-sm text-gray-400">Agendamentos Hoje</p>
</div>

<div className="stat-card bg-gray-900 border border-gray-800 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
<i className="text-purple-400" data-lucide="dollar-sign" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
</div>
<span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded">+8%</span>
</div>
<h3 className="text-2xl font-semibold mb-1">R$ 8.450</h3>
<p className="text-sm text-gray-400">Receita Hoje</p>
</div>

<div className="stat-card bg-gray-900 border border-gray-800 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center">
<i className="text-cyan-400" data-lucide="users" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
</div>
<span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded">+23%</span>
</div>
<h3 className="text-2xl font-semibold mb-1">1.234</h3>
<p className="text-sm text-gray-400">Clientes Ativos</p>
</div>

<div className="stat-card bg-gray-900 border border-gray-800 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center">
<i className="text-pink-400" data-lucide="trending-up" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
</div>
<span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded">+5%</span>
</div>
<h3 className="text-2xl font-semibold mb-1">94.2%</h3>
<p className="text-sm text-gray-400">Taxa de Presença</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

<div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold">Agendamentos de Hoje</h3>
<button className="text-sm text-gray-400 hover:text-white transition flex items-center space-x-1">
<span>Ver todos</span>
<i data-lucide="arrow-right" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="space-y-3">

<div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition cursor-pointer border border-gray-800">
<div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                                    RC
                                </div>
<div className="flex-1">
<h4 className="text-sm font-medium">Rafael Costa</h4>
<p className="text-xs text-gray-400">Corte + Barba • Com João Silva</p>
</div>
<div className="text-right">
<p className="text-sm font-medium">09:00</p>
<span className="inline-block mt-1 text-xs bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded">Confirmado</span>
</div>
</div>

<div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition cursor-pointer border border-gray-800">
<img alt="Client" className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop" style={{objectFit: 'cover'}}/>
<div className="flex-1">
<h4 className="text-sm font-medium">Pedro Almeida</h4>
<p className="text-xs text-gray-400">Corte Tesoura • Com Carlos Mendes</p>
</div>
<div className="text-right">
<p className="text-sm font-medium">09:30</p>
<span className="inline-block mt-1 text-xs bg-green-600/20 text-green-400 px-2 py-0.5 rounded">Em atendimento</span>
</div>
</div>

<div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition cursor-pointer border border-gray-800">
<div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold">
                                    LF
                                </div>
<div className="flex-1">
<h4 className="text-sm font-medium">Lucas Fernandes</h4>
<p className="text-xs text-gray-400">Barba • Com João Silva</p>
</div>
<div className="text-right">
<p className="text-sm font-medium">10:00</p>
<span className="inline-block mt-1 text-xs bg-yellow-600/20 text-yellow-400 px-2 py-0.5 rounded">Aguardando</span>
</div>
</div>

<div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition cursor-pointer border border-gray-800">
<img alt="Client" className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop" style={{objectFit: 'cover'}}/>
<div className="flex-1">
<h4 className="text-sm font-medium">Marcelo Santos</h4>
<p className="text-xs text-gray-400">Corte Social • Com Ricardo Lima</p>
</div>
<div className="text-right">
<p className="text-sm font-medium">10:30</p>
<span className="inline-block mt-1 text-xs bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded">Confirmado</span>
</div>
</div>

<div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition cursor-pointer border border-gray-800">
<div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                                    TS
                                </div>
<div className="flex-1">
<h4 className="text-sm font-medium">Thiago Silva</h4>
<p className="text-xs text-gray-400">Corte + Barba + Sobrancelha • Com João Silva</p>
</div>
<div className="text-right">
<p className="text-sm font-medium">11:00</p>
<span className="inline-block mt-1 text-xs bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded">Confirmado</span>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
<h3 className="text-lg font-semibold mb-4">Ações Rápidas</h3>
<div className="space-y-2">
<button className="w-full p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 transition flex items-center justify-center space-x-2 text-sm font-medium">
<i data-lucide="calendar-plus" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
<span>Novo Agendamento</span>
</button>
<button className="w-full p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition flex items-center justify-center space-x-2 text-sm font-medium">
<i data-lucide="user-plus" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
<span>Adicionar Cliente</span>
</button>
<button className="w-full p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition flex items-center justify-center space-x-2 text-sm font-medium">
<i data-lucide="dollar-sign" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
<span>Registrar Venda</span>
</button>
</div>
</div>

<div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
<h3 className="text-lg font-semibold mb-4">Status da Equipe</h3>
<div className="space-y-4">
<div className="flex items-center space-x-3">
<img alt="Barber" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop" style={{objectFit: 'cover'}}/>
<div className="flex-1">
<p className="text-sm font-medium">João Silva</p>
<p className="text-xs text-gray-400">Em atendimento</p>
</div>
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
</div>
<div className="flex items-center space-x-3">
<img alt="Barber" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&amp;h=100&amp;fit=crop" style={{objectFit: 'cover'}}/>
<div className="flex-1">
<p className="text-sm font-medium">Carlos Mendes</p>
<p className="text-xs text-gray-400">Em atendimento</p>
</div>
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
</div>
<div className="flex items-center space-x-3">
<img alt="Barber" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop" style={{objectFit: 'cover'}}/>
<div className="flex-1">
<p className="text-sm font-medium">Ricardo Lima</p>
<p className="text-xs text-gray-400">Disponível</p>
</div>
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
</div>
<div className="flex items-center space-x-3">
<img alt="Barber" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop" style={{objectFit: 'cover'}}/>
<div className="flex-1">
<p className="text-sm font-medium">André Costa</p>
<p className="text-xs text-gray-400">Intervalo</p>
</div>
<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold">Serviços Populares</h3>
<button className="text-sm text-gray-400 hover:text-white transition">Ver todos</button>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
<i data-lucide="scissors" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-sm font-medium">Corte + Barba</p>
<p className="text-xs text-gray-400">45 agendamentos</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium">R$ 60</p>
<p className="text-xs text-green-400">+15%</p>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
<i data-lucide="scissors" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-sm font-medium">Corte Social</p>
<p className="text-xs text-gray-400">38 agendamentos</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium">R$ 40</p>
<p className="text-xs text-green-400">+8%</p>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
<i data-lucide="sparkles" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-sm font-medium">Barba Completa</p>
<p className="text-xs text-gray-400">32 agendamentos</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium">R$ 35</p>
<p className="text-xs text-green-400">+12%</p>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-red-600 rounded-lg flex items-center justify-center">
<i data-lucide="scissors" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-sm font-medium">Corte Tesoura</p>
<p className="text-xs text-gray-400">28 agendamentos</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium">R$ 50</p>
<p className="text-xs text-green-400">+5%</p>
</div>
</div>
</div>
</div>

<div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold">Atividade Recente</h3>
<button className="text-sm text-gray-400 hover:text-white transition">Ver todos</button>
</div>
<div className="space-y-4">
<div className="flex items-start space-x-3">
<div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="text-green-400" data-lucide="check" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<p className="text-sm">Agendamento confirmado</p>
<p className="text-xs text-gray-400 mt-0.5">Rafael Costa • Corte + Barba</p>
<p className="text-xs text-gray-500 mt-1">Há 5 minutos</p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="text-blue-400" data-lucide="user-plus" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<p className="text-sm">Novo cliente cadastrado</p>
<p className="text-xs text-gray-400 mt-0.5">Thiago Silva</p>
<p className="text-xs text-gray-500 mt-1">Há 12 minutos</p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="text-purple-400" data-lucide="dollar-sign" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<p className="text-sm">Pagamento recebido</p>
<p className="text-xs text-gray-400 mt-0.5">R$ 60,00 • Pedro Almeida</p>
<p className="text-xs text-gray-500 mt-1">Há 18 minutos</p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-8 h-8 bg-yellow-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="text-yellow-400" data-lucide="alert-circle" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<p className="text-sm">Estoque baixo</p>
<p className="text-xs text-gray-400 mt-0.5">Pomada Modeladora - 3 unidades</p>
<p className="text-xs text-gray-500 mt-1">Há 1 hora</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
