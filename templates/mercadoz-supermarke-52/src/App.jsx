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



        lucide.createIcons({
            strokeWidth: 1.5
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
      

<nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center space-x-2">
<div className="bg-gradient-to-br from-cyan-500 to-emerald-500 w-9 h-9 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-lg tracking-tight">MZ</span>
</div>
<span className="text-xl font-semibold tracking-tight">Mercadoz</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="#ecosystem">Ecossistema</a>
<a className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="#features">Recursos</a>
<a className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="#technology">Tecnologia</a>
<a className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="#contact">Contato</a>
</div>
<div className="flex items-center space-x-3">
<button className="hidden sm:block px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">Entrar</button>
<button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/30">Começar</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pulse-glow"></div>
<div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pulse-glow" style={{animationDelay: '1.5s'}}></div>
</div>
<div className="max-w-7xl mx-auto relative">
<div className="text-center mb-16 slide-up">
<div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 mb-6">
<div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
<span className="text-sm text-slate-300">Powered by Artificial Intelligence</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                    O Futuro Inteligente das<br/>
<span className="gradient-text">Compras de Supermercado</span>
</h1>
<p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8 font-normal">
                    Conectamos você aos melhores mercados através de inteligência artificial,<br className="hidden sm:block"/> oferecendo conveniência, economia e experiência personalizada.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-white font-medium rounded-xl transition-all hover:shadow-xl hover:shadow-cyan-500/30 flex items-center justify-center space-x-2">
<span>Experimentar Agora</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 text-white font-medium rounded-xl transition-all flex items-center justify-center space-x-2">
<i className="w-5 h-5" data-lucide="play-circle"></i>
<span>Ver Demo</span>
</button>
</div>
</div>

<div className="relative mt-20" style={{animationDelay: '0.3s'}}>

<div className="relative max-w-6xl mx-auto">

<div className="absolute left-0 top-20 w-72 slide-up float-animation" style={{animationDelay: '0.4s'}}>
<div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 shadow-2xl hover:border-cyan-500/50 transition-all duration-500">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-sm">MZ</span>
</div>
<span className="font-semibold">Mercadoz</span>
</div>
<div className="flex items-center space-x-1">
<i className="w-5 h-5 text-slate-400" data-lucide="bell"></i>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-cyan-500" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"/>
</div>
</div>
<div className="bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 rounded-2xl p-4 mb-4">
<div className="flex items-start space-x-3">
<div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-white" data-lucide="sparkles"></i>
</div>
<div>
<p className="text-sm text-slate-200 font-medium mb-1">Assistente IA</p>
<p className="text-xs text-slate-400">Encontrei 3 ofertas no seu mercado favorito!</p>
</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer">
<div className="flex items-center space-x-3">
<img alt="Product" className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=100"/>
<div>
<p className="text-sm font-medium">Arroz Integral</p>
<p className="text-xs text-emerald-400">15% OFF</p>
</div>
</div>
<span className="text-sm font-semibold">R$ 12,90</span>
</div>
<div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer">
<div className="flex items-center space-x-3">
<img alt="Product" className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=100"/>
<div>
<p className="text-sm font-medium">Frutas Frescas</p>
<p className="text-xs text-emerald-400">10% OFF</p>
</div>
</div>
<span className="text-sm font-semibold">R$ 8,50</span>
</div>
</div>
<button className="w-full mt-4 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 rounded-xl font-medium text-sm transition-all">
                                Ver Todas as Ofertas
                            </button>
</div>
</div>

<div className="absolute right-0 top-0 w-96 slide-up float-animation" style={{animationDelay: '0.6s', animationDuration: '7s'}}>
<div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl hover:border-emerald-500/50 transition-all duration-500">
<div className="flex items-center justify-between mb-6">
<h3 className="font-semibold text-lg tracking-tight">Dashboard Mercado</h3>
<div className="flex items-center space-x-2">
<i className="w-5 h-5 text-emerald-400" data-lucide="trending-up"></i>
<span className="text-sm text-emerald-400 font-medium">+24%</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mb-6">
<div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/30 hover:border-cyan-500/50 transition-all">
<div className="flex items-center space-x-2 mb-2">
<i className="w-4 h-4 text-cyan-400" data-lucide="shopping-cart"></i>
<span className="text-xs text-slate-400">Pedidos Hoje</span>
</div>
<p className="text-2xl font-semibold">127</p>
</div>
<div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/30 hover:border-emerald-500/50 transition-all">
<div className="flex items-center space-x-2 mb-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="dollar-sign"></i>
<span className="text-xs text-slate-400">Receita</span>
</div>
<p className="text-2xl font-semibold">R$ 8.4K</p>
</div>
</div>

<div className="bg-slate-800/30 rounded-xl p-4 mb-4">
<p className="text-xs text-slate-400 mb-3">Vendas da Semana</p>
<div className="flex items-end justify-between h-32 space-x-2">
<div className="flex-1 bg-gradient-to-t from-cyan-500/50 to-cyan-500/20 rounded-t" style={{height: '45%'}}></div>
<div className="flex-1 bg-gradient-to-t from-cyan-500/50 to-cyan-500/20 rounded-t" style={{height: '65%'}}></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/50 to-emerald-500/20 rounded-t" style={{height: '85%'}}></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/50 to-emerald-500/20 rounded-t" style={{height: '70%'}}></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/50 to-emerald-500/20 rounded-t" style={{height: '95%'}}></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-500/30 rounded-t" style={{height: '100%'}}></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/50 to-emerald-500/20 rounded-t" style={{height: '55%'}}></div>
</div>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-400">Produtos em Estoque</span>
<span className="font-semibold">1,247</span>
</div>
</div>
</div>

<div className="relative mx-auto w-full max-w-2xl slide-up" style={{animationDelay: '0.2s'}}>
<div className="relative">
<img alt="Delivery" className="w-full h-96 object-cover rounded-3xl shadow-2xl" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent rounded-3xl"></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-slate-200/50">
<div className="flex items-center space-x-3 mb-2">
<div className="bg-gradient-to-br from-cyan-500 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center">
<span className="text-white font-bold text-xl tracking-tight">MZ</span>
</div>
<div>
<span className="text-2xl font-bold text-slate-900 tracking-tight">Mercadoz</span>
<p className="text-xs text-slate-600">Entrega Inteligente</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6">
<div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="truck"></i>
</div>
<div>
<p className="font-medium text-sm">Entrega em Andamento</p>
<p className="text-xs text-slate-400">Chegando em 12 minutos</p>
</div>
</div>
<div className="text-right">
<p className="text-2xl font-bold text-emerald-400">87</p>
<p className="text-xs text-slate-400">entregas hoje</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/3 left-72 w-64 neural-line pulse-glow"></div>
<div className="absolute top-1/4 right-96 w-48 neural-line pulse-glow" style={{animationDelay: '1s'}}></div>

<div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 slide-up" style={{animationDelay: '0.8s'}}>
<div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl hover:border-cyan-500/50 transition-all duration-500">
<div className="flex items-center space-x-4">
<div className="relative">
<div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30">
<i className="w-8 h-8 text-cyan-400" data-lucide="brain"></i>
</div>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-900 animate-pulse"></div>
</div>
<div>
<p className="font-semibold mb-1">IA Mercadoz</p>
<p className="text-xs text-slate-400">Processando 1.2M+ dados em tempo real</p>
<div className="flex items-center space-x-3 mt-2">
<div className="flex items-center space-x-1">
<div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
<span className="text-xs text-slate-500">Preços</span>
</div>
<div className="flex items-center space-x-1">
<div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
<span className="text-xs text-slate-500">Estoque</span>
</div>
<div className="flex items-center space-x-1">
<div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
<span className="text-xs text-slate-500">Rotas</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 sm:px-6 lg:px-8 relative" id="ecosystem">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Ecossistema Completo</h2>
<p className="text-xl text-slate-400">Três plataformas integradas por inteligência artificial</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-1">
<div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center mb-6">
<i className="w-7 h-7 text-cyan-400" data-lucide="smartphone"></i>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight">App Cliente</h3>
<p className="text-slate-400 mb-6 leading-relaxed">Faça suas compras com assistente IA, compare preços em tempo real e receba em casa.</p>
<ul className="space-y-3">
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-slate-300">Assistente IA personalizado</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-slate-300">Comparação automática de preços</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-slate-300">Rastreamento em tempo real</span>
</li>
</ul>
</div>

<div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-1">
<div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6">
<i className="w-7 h-7 text-emerald-400" data-lucide="store"></i>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight">Dashboard Mercado</h3>
<p className="text-slate-400 mb-6 leading-relaxed">Gerencie estoque, pedidos e promoções com analytics inteligentes e automação.</p>
<ul className="space-y-3">
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-slate-300">Gestão de estoque inteligente</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-slate-300">Analytics e insights de vendas</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-slate-300">Automação de promoções</span>
</li>
</ul>
</div>

<div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-1">
<div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-500/10 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-6">
<i className="w-7 h-7 text-blue-400" data-lucide="truck"></i>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight">Sistema Entrega</h3>
<p className="text-slate-400 mb-6 leading-relaxed">Otimização de rotas com IA, gestão de frota e acompanhamento em tempo real.</p>
<ul className="space-y-3">
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-slate-300">Rotas otimizadas por IA</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-slate-300">Gestão de frota integrada</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-slate-300">Rastreamento GPS ao vivo</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 sm:px-6 lg:px-8 relative bg-slate-900/30" id="technology">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Tecnologia que<br/>Transforma Compras</h2>
<p className="text-xl text-slate-400 mb-8 leading-relaxed">Nossa IA processa milhões de dados para oferecer a melhor experiência de compra, conectando clientes e mercados de forma inteligente.</p>
<div className="space-y-6">
<div className="flex items-start space-x-4">
<div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6 text-cyan-400" data-lucide="zap"></i>
</div>
<div>
<h4 className="font-semibold text-lg mb-1">Processamento em Tempo Real</h4>
<p className="text-slate-400 text-sm leading-relaxed">Preços, estoque e disponibilidade atualizados instantaneamente em toda a rede.</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6 text-emerald-400" data-lucide="target"></i>
</div>
<div>
<h4 className="font-semibold text-lg mb-1">Recomendações Inteligentes</h4>
<p className="text-slate-400 text-sm leading-relaxed">IA aprende seus hábitos e sugere produtos, ofertas e mercados ideais para você.</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6 text-blue-400" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="font-semibold text-lg mb-1">Segurança &amp; Privacidade</h4>
<p className="text-slate-400 text-sm leading-relaxed">Seus dados protegidos com criptografia de ponta e conformidade LGPD.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 hover:border-cyan-500/30 transition-all duration-500">
<img alt="AI Technology" className="w-full h-96 object-cover rounded-2xl mb-6" src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800"/>
<div className="grid grid-cols-3 gap-4">
<div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/30">
<p className="text-3xl font-bold text-cyan-400 mb-1">1.2M+</p>
<p className="text-xs text-slate-400">Dados/Segundo</p>
</div>
<div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/30">
<p className="text-3xl font-bold text-emerald-400 mb-1">99.9%</p>
<p className="text-xs text-slate-400">Uptime</p>
</div>
<div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/30">
<p className="text-3xl font-bold text-blue-400 mb-1">&lt;2s</p>
<p className="text-xs text-slate-400">Resposta</p>
</div>
</div>
</div>

<div className="absolute -top-6 -right-6 bg-gradient-to-br from-cyan-500 to-emerald-500 w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl float-animation">
<i className="w-12 h-12 text-white" data-lucide="cpu"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-5xl font-bold gradient-text mb-2">500+</div>
<p className="text-slate-400">Mercados Parceiros</p>
</div>
<div className="text-center">
<div className="text-5xl font-bold gradient-text mb-2">50K+</div>
<p className="text-slate-400">Usuários Ativos</p>
</div>
<div className="text-center">
<div className="text-5xl font-bold gradient-text mb-2">1M+</div>
<p className="text-slate-400">Entregas Realizadas</p>
</div>
<div className="text-center">
<div className="text-5xl font-bold gradient-text mb-2">4.9★</div>
<p className="text-slate-400">Avaliação Média</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 sm:px-6 lg:px-8 relative" id="contact">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5"></div>
<div className="max-w-4xl mx-auto text-center relative">
<h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Pronto para o Futuro<br/>das Compras?</h2>
<p className="text-xl text-slate-400 mb-10">Junte-se a milhares de usuários e mercados que já transformaram suas compras com Mercadoz.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<button className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-white font-medium text-lg rounded-xl transition-all hover:shadow-2xl hover:shadow-cyan-500/30 flex items-center justify-center space-x-3">
<span>Começar Gratuitamente</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto px-10 py-5 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 text-white font-medium text-lg rounded-xl transition-all flex items-center justify-center space-x-3">
<i className="w-5 h-5" data-lucide="calendar"></i>
<span>Agendar Demo</span>
</button>
</div>
<p className="text-sm text-slate-500">Sem cartão de crédito • Setup em minutos • Suporte 24/7</p>
</div>
</section>

<footer className="border-t border-slate-800/50 py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div>
<div className="flex items-center space-x-2 mb-4">
<div className="bg-gradient-to-br from-cyan-500 to-emerald-500 w-9 h-9 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-lg tracking-tight">MZ</span>
</div>
<span className="text-xl font-semibold tracking-tight">Mercadoz</span>
</div>
<p className="text-sm text-slate-400 leading-relaxed">O futuro inteligente das compras de supermercado.</p>
</div>
<div>
<h4 className="font-semibold mb-4">Produto</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">App Cliente</a></li>
<li><a className="hover:text-white transition-colors" href="#">Dashboard Mercado</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sistema Entrega</a></li>
<li><a className="hover:text-white transition-colors" href="#">Preços</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4">Empresa</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Sobre</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Carreiras</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contato</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Privacidade</a></li>
<li><a className="hover:text-white transition-colors" href="#">Termos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Segurança</a></li>
<li><a className="hover:text-white transition-colors" href="#">LGPD</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between">
<p className="text-sm text-slate-500">© 2024 Mercadoz. Todos os direitos reservados.</p>
<div className="flex items-center space-x-6 mt-4 sm:mt-0">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
