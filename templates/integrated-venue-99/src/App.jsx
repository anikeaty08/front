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
      

<header className="border-b border-gray-200">
<div className="max-w-7xl mx-auto px-6 py-6">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-lg tracking-tight">P</span>
</div>
<span className="text-xl font-semibold tracking-tight">Payper</span>
</div>
<div className="flex items-center space-x-6 text-sm">
<span className="text-gray-500">Versión: 2025-10-30</span>
<span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 font-medium">Español</span>
</div>
</div>
</div>
</header>

<section className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="max-w-3xl">
<h1 className="text-5xl font-semibold tracking-tight mb-6">Integrated Venue System</h1>
<p className="text-xl text-gray-600 leading-relaxed mb-8">Plataforma integral para la gestión de bares, clubes y eventos que conecta ventas, operación y marketing en un solo sistema.</p>
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
<i className="w-4 h-4 text-green-700" data-lucide="wifi-off" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-green-700">Modo Offline</span>
</div>
<div className="flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
<i className="w-4 h-4 text-blue-700" data-lucide="credit-card" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-blue-700">Cashless NFC</span>
</div>
<div className="flex items-center space-x-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-lg">
<i className="w-4 h-4 text-purple-700" data-lucide="bar-chart-3" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-purple-700">Analytics</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-gray-200">
<div className="max-w-7xl mx-auto px-6 py-16">
<h2 className="text-3xl font-semibold tracking-tight mb-12">Funcionalidades Principales</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
<div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-gray-700" data-lucide="ticket" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">Etiquetera Digital</h3>
<p className="text-gray-600 text-sm leading-relaxed">Tickets digitales o físicos con QR para control de acceso y trazabilidad completa.</p>
</div>
<div className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
<div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-gray-700" data-lucide="shopping-cart" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">Pedidos Sincronizados</h3>
<p className="text-gray-600 text-sm leading-relaxed">Comandas en tiempo real sincronizadas con mesas y barras.</p>
</div>
<div className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
<div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-gray-700" data-lucide="credit-card" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">Pagos Cashless</h3>
<p className="text-gray-600 text-sm leading-relaxed">Tarjetas NFC offline para operar sin depender de Internet.</p>
</div>
<div className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
<div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-gray-700" data-lucide="users" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">Tokens PR</h3>
<p className="text-gray-600 text-sm leading-relaxed">Gestión de promotores con moneda propia y seguimiento de campañas.</p>
</div>
<div className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
<div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-gray-700" data-lucide="package" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">Control de Stock</h3>
<p className="text-gray-600 text-sm leading-relaxed">Inventario en tiempo real con deducción automática por recetas.</p>
</div>
<div className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
<div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-gray-700" data-lucide="bar-chart-2" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">Analytics Centralizado</h3>
<p className="text-gray-600 text-sm leading-relaxed">Métricas detalladas por bar, usuario, QR y promotor.</p>
</div>
</div>
</div>
</section>

<section className="border-b border-gray-200 bg-gray-50">
<div className="max-w-7xl mx-auto px-6 py-16">
<h2 className="text-3xl font-semibold tracking-tight mb-12">Roles del Sistema</h2>
<div className="space-y-4">
<div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
<div className="flex items-start space-x-4">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-blue-700" data-lucide="user" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold mb-2">Cliente / Invitado</h3>
<p className="text-gray-600 text-sm leading-relaxed">Escanea QR o usa su tarjeta NFC para acceder al menú de su mesa, hacer pedidos y pagar. Puede transferir saldo, recibir regalos o cortesías y acceder a menús exclusivos según su mesa o evento.</p>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
<div className="flex items-start space-x-4">
<div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-purple-700" data-lucide="megaphone" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold mb-2">PR (Promotor)</h3>
<p className="text-gray-600 text-sm leading-relaxed">Envía regalos, maneja su propia moneda de PR Tokens, vende mesas VIP, ve estadísticas de campañas, QR y ventas generadas.</p>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
<div className="flex items-start space-x-4">
<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-green-700" data-lucide="glass-water" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold mb-2">Barman</h3>
<p className="text-gray-600 text-sm leading-relaxed">Recibe pedidos en tiempo real, confirma entregas escaneando QR del cliente, reporta faltantes de stock.</p>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
<div className="flex items-start space-x-4">
<div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-orange-700" data-lucide="users-2" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold mb-2">Personal de barra / Staff</h3>
<p className="text-gray-600 text-sm leading-relaxed">Gestiona pedidos, recargas de saldo, creación de usuarios y control parcial de administración.</p>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
<div className="flex items-start space-x-4">
<div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-white" data-lucide="shield" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold mb-2">Administrador / Dueño del local</h3>
<p className="text-gray-600 text-sm leading-relaxed">Control total del sistema: inventario, recetas, caja, análisis financiero, tarjetas NFC, performance por bar y analíticas globales.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-gray-200">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid lg:grid-cols-2 gap-12">
<div>
<div className="inline-flex items-center space-x-2 px-3 py-1 bg-green-100 rounded-full mb-6">
<i className="w-4 h-4 text-green-700" data-lucide="wifi-off" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-green-700">Modo Offline</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">Operación Sin Internet</h2>
<div className="space-y-4">
<div className="flex items-start space-x-3">
<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="w-3 h-3 text-green-700" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-gray-600 leading-relaxed">Todos los procesos críticos (pedidos, escaneo QR, débitos) operan en red local.</p>
</div>
<div className="flex items-start space-x-3">
<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="w-3 h-3 text-green-700" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-gray-600 leading-relaxed">Cola de sincronización para no perder datos.</p>
</div>
<div className="flex items-start space-x-3">
<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="w-3 h-3 text-green-700" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-gray-600 leading-relaxed">Panel administrativo con herramientas de resolución manual.</p>
</div>
<div className="flex items-start space-x-3">
<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="w-3 h-3 text-green-700" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-gray-600 leading-relaxed">Ideal para festivales, ferias o clubes sin conectividad estable.</p>
</div>
</div>
</div>
<div>
<div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-100 rounded-full mb-6">
<i className="w-4 h-4 text-blue-700" data-lucide="credit-card" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-blue-700">Sistema Cashless &amp; NFC</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">Pagos Sin Fricción</h2>
<div className="space-y-4">
<div className="flex items-start space-x-3">
<div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="w-3 h-3 text-blue-700" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-gray-600 leading-relaxed">Tarjetas NFC pre-cargadas con saldo desde la app del administrador.</p>
</div>
<div className="flex items-start space-x-3">
<div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="w-3 h-3 text-blue-700" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-gray-600 leading-relaxed">Funcionan sin Internet, ideal para grandes eventos.</p>
</div>
<div className="flex items-start space-x-3">
<div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="w-3 h-3 text-blue-700" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-gray-600 leading-relaxed">Las compras se registran localmente y se sincronizan al reconectarse.</p>
</div>
<div className="flex items-start space-x-3">
<div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="w-3 h-3 text-blue-700" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-gray-600 leading-relaxed">Transferencias entre usuarios y gestión de cortesías integradas.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-gray-200 bg-gray-50">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="mb-12">
<div className="inline-flex items-center space-x-2 px-3 py-1 bg-purple-100 rounded-full mb-6">
<i className="w-4 h-4 text-purple-700" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-purple-700">Métricas &amp; Analítica</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Dashboard Financiero Completo</h2>
<p className="text-gray-600 text-lg">Visualiza cada aspecto de tu operación en tiempo real.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white border border-gray-200 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<i className="w-5 h-5 text-gray-400" data-lucide="dollar-sign" style={{strokeWidth: '1.5'}}></i>
<span className="text-xs font-medium text-green-600">+12.5%</span>
</div>
<div className="text-2xl font-semibold tracking-tight mb-1">$47,582</div>
<div className="text-sm text-gray-500">Ingresos totales</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<i className="w-5 h-5 text-gray-400" data-lucide="users" style={{strokeWidth: '1.5'}}></i>
<span className="text-xs font-medium text-blue-600">+8.2%</span>
</div>
<div className="text-2xl font-semibold tracking-tight mb-1">2,847</div>
<div className="text-sm text-gray-500">Usuarios activos</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<i className="w-5 h-5 text-gray-400" data-lucide="shopping-bag" style={{strokeWidth: '1.5'}}></i>
<span className="text-xs font-medium text-purple-600">+15.8%</span>
</div>
<div className="text-2xl font-semibold tracking-tight mb-1">8,942</div>
<div className="text-sm text-gray-500">Pedidos completados</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<i className="w-5 h-5 text-gray-400" data-lucide="activity" style={{strokeWidth: '1.5'}}></i>
<span className="text-xs font-medium text-orange-600">+5.3%</span>
</div>
<div className="text-2xl font-semibold tracking-tight mb-1">94.2%</div>
<div className="text-sm text-gray-500">Tasa de conversión</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6">
<h3 className="text-lg font-semibold mb-6">Métricas Disponibles</h3>
<div className="grid md:grid-cols-2 gap-4">
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<div>
<div className="font-medium text-sm mb-1">Ingresos por usuario, PR, QR, mesa o bar</div>
<div className="text-xs text-gray-500">Segmentación completa de revenue</div>
</div>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<div>
<div className="font-medium text-sm mb-1">Actividad de usuarios y recurrencia</div>
<div className="text-xs text-gray-500">Patrones de comportamiento</div>
</div>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<div>
<div className="font-medium text-sm mb-1">Impacto de campañas PR</div>
<div className="text-xs text-gray-500">ROI por promotor y campaña</div>
</div>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<div>
<div className="font-medium text-sm mb-1">Consumo de stock y rentabilidad</div>
<div className="text-xs text-gray-500">Análisis teórico vs real</div>
</div>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<div>
<div className="font-medium text-sm mb-1">Flujo de caja en tiempo real</div>
<div className="text-xs text-gray-500">Por terminal, turno o bar</div>
</div>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<div>
<div className="font-medium text-sm mb-1">Pedidos por hora y rentabilidad</div>
<div className="text-xs text-gray-500">Optimización de turnos</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-gray-200">
<div className="max-w-7xl mx-auto px-6 py-16">
<h2 className="text-3xl font-semibold tracking-tight mb-12">Módulos del Sistema</h2>
<div className="space-y-3">
<div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-blue-700" data-lucide="smartphone" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="font-semibold">App Cliente</div>
<div className="text-sm text-gray-600">Menús dinámicos, pedidos, pagos, transferencias y escaneo QR</div>
</div>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-purple-700" data-lucide="megaphone" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="font-semibold">Panel PR</div>
<div className="text-sm text-gray-600">Seguimiento de campañas, gifts, ventas de mesas, uso de tokens y QRs</div>
</div>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-green-700" data-lucide="glass-water" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="font-semibold">Panel Barman</div>
<div className="text-sm text-gray-600">Control de pedidos, ediciones por stock, confirmaciones QR</div>
</div>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-orange-700" data-lucide="users-2" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="font-semibold">Panel Staff</div>
<div className="text-sm text-gray-600">Pedidos, recargas, nuevos usuarios, gestión intermedia</div>
</div>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="shield" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="font-semibold">Panel Admin</div>
<div className="text-sm text-gray-600">Control total, recetas, stock, analíticas y configuración NFC</div>
</div>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-blue-700" data-lucide="nfc" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="font-semibold">App NFC Admin</div>
<div className="text-sm text-gray-600">Codificación de tarjetas, gestión de colas offline</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-gray-200 bg-gray-50">
<div className="max-w-7xl mx-auto px-6 py-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Flujo de Experiencia</h2>
<p className="text-gray-600 mb-12">Ejemplo: Cliente VIP en una mesa exclusiva</p>
<div className="relative">
<div className="absolute left-8 top-12 bottom-12 w-px bg-gray-200"></div>
<div className="space-y-8 relative">
<div className="flex items-start space-x-6">
<div className="w-16 h-16 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
<span className="font-semibold">1</span>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 flex-1">
<h3 className="font-semibold mb-2">Asignación de mesa VIP</h3>
<p className="text-sm text-gray-600">El cliente es registrado y asociado a una mesa con acceso exclusivo.</p>
</div>
</div>
<div className="flex items-start space-x-6">
<div className="w-16 h-16 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
<span className="font-semibold">2</span>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 flex-1">
<h3 className="font-semibold mb-2">Acceso con QR o NFC</h3>
<p className="text-sm text-gray-600">Escanea el QR de la mesa o pasa su tarjeta NFC para autenticarse.</p>
</div>
</div>
<div className="flex items-start space-x-6">
<div className="w-16 h-16 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
<span className="font-semibold">3</span>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 flex-1">
<h3 className="font-semibold mb-2">Menú exclusivo y precios</h3>
<p className="text-sm text-gray-600">Visualiza productos disponibles con precios diferenciados según su categoría.</p>
</div>
</div>
<div className="flex items-start space-x-6">
<div className="w-16 h-16 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
<span className="font-semibold">4</span>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 flex-1">
<h3 className="font-semibold mb-2">Pedido desde móvil</h3>
<p className="text-sm text-gray-600">Realiza el pedido directamente desde su celular o con su tarjeta NFC.</p>
</div>
</div>
<div className="flex items-start space-x-6">
<div className="w-16 h-16 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
<span className="font-semibold">5</span>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 flex-1">
<h3 className="font-semibold mb-2">Preparación en barra</h3>
<p className="text-sm text-gray-600">El bar recibe y prepara el pedido en tiempo real con deducción de stock automática.</p>
</div>
</div>
<div className="flex items-start space-x-6">
<div className="w-16 h-16 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
<span className="font-semibold">6</span>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 flex-1">
<h3 className="font-semibold mb-2">Confirmación de entrega</h3>
<p className="text-sm text-gray-600">El staff confirma la entrega escaneando el QR del cliente.</p>
</div>
</div>
<div className="flex items-start space-x-6">
<div className="w-16 h-16 bg-green-100 border-2 border-green-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
<i className="w-6 h-6 text-green-700" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 flex-1">
<h3 className="font-semibold mb-2">Sincronización automática</h3>
<p className="text-sm text-gray-600">Todos los datos se sincronizan automáticamente al reconectarse a Internet.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-gray-200">
<div className="max-w-7xl mx-auto px-6 py-16">
<h2 className="text-3xl font-semibold tracking-tight mb-12">Ventajas Competitivas</h2>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl p-6">
<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-green-700" data-lucide="wifi-off" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">Operación Offline Total</h3>
<p className="text-sm text-gray-600 leading-relaxed">Único sistema que permite pagos, pedidos y control completo sin necesidad de Internet.</p>
</div>
<div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-6">
<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-purple-700" data-lucide="bar-chart-3" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">Métricas por Rol</h3>
<p className="text-sm text-gray-600 leading-relaxed">Analytics completas segmentadas por cliente, PR, bar y evento en tiempo real.</p>
</div>
<div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6">
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-700" data-lucide="layers" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">Escalabilidad</h3>
<p className="text-sm text-gray-600 leading-relaxed">Diseñado para operar desde un bar hasta múltiples locales y eventos masivos.</p>
</div>
<div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-xl p-6">
<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-orange-700" data-lucide="zap" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">Integración Total</h3>
<p className="text-sm text-gray-600 leading-relaxed">Cashless, etiquetera, QR tracking y gestión operativa en una única plataforma.</p>
</div>
<div className="bg-gradient-to-br from-pink-50 to-white border border-pink-200 rounded-xl p-6">
<div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-pink-700" data-lucide="coins" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">Monetización Directa</h3>
<p className="text-sm text-gray-600 leading-relaxed">Venta de mesas, tokens PR, comisiones y consumo integrados en el sistema.</p>
</div>
<div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
<div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-gray-700" data-lucide="trending-down" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">Reducción de Costos</h3>
<p className="text-sm text-gray-600 leading-relaxed">Elimina comandas manuales, errores operativos y pérdidas por falta de control.</p>
</div>
</div>
</div>
</section>

<section className="border-b border-gray-200 bg-gray-50">
<div className="max-w-7xl mx-auto px-6 py-16">
<h2 className="text-3xl font-semibold tracking-tight mb-12">Potencial de Crecimiento</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
<div className="mb-4">
<i className="w-8 h-8 text-gray-400" data-lucide="ticket" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="font-semibold mb-2">Eventos</h3>
<p className="text-sm text-gray-600 leading-relaxed">Integración con sistemas de ticketing y acreditación masiva.</p>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
<div className="mb-4">
<i className="w-8 h-8 text-gray-400" data-lucide="building-2" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="font-semibold mb-2">Hospitality</h3>
<p className="text-sm text-gray-600 leading-relaxed">Aplicable a hoteles, ferias, estadios o restaurantes.</p>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
<div className="mb-4">
<i className="w-8 h-8 text-gray-400" data-lucide="line-chart" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="font-semibold mb-2">Analítica</h3>
<p className="text-sm text-gray-600 leading-relaxed">Extensión a dashboards de revenue y consumo predictivo.</p>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
<div className="mb-4">
<i className="w-8 h-8 text-gray-400" data-lucide="wallet" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="font-semibold mb-2">Cashless</h3>
<p className="text-sm text-gray-600 leading-relaxed">Escalado con proveedores externos y wallets integradas.</p>
</div>
</div>
</div>
</section>

<section className="bg-gray-900 text-white">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-4xl font-semibold tracking-tight mb-6">Sistema integral para la nueva era de gestión de venues</h2>
<p className="text-lg text-gray-400 mb-8">Conecta ventas, operación y marketing en una plataforma que funciona online y offline.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2">
<span>Solicitar demo</span>
<i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700 flex items-center space-x-2">
<span>Descargar presentación</span>
<i className="w-4 h-4" data-lucide="download" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-gray-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="flex flex-col md:flex-row items-center justify-between">
<div className="flex items-center space-x-3 mb-4 md:mb-0">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-sm tracking-tight">P</span>
</div>
<span className="text-lg font-semibold tracking-tight">Payper</span>
</div>
<div className="text-sm text-gray-500">
                    © 2025 Payper. Integrated Venue System.
                </div>
</div>
</div>
</footer>


    </>
  );
}
