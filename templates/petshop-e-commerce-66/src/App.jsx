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
      

<div className="bg-orange-600 text-white text-xs md:text-sm py-2.5 font-medium text-center relative z-50">
<div className="max-w-7xl mx-auto px-4 flex justify-between items-center md:justify-center gap-4">
<span className="hidden md:inline flex items-center gap-2">
<i className="w-4 h-4" data-lucide="truck"></i> Frete Grátis acima de R$ 199,00
            </span>
<span className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="credit-card"></i> Parcele em até 12x sem juros
            </span>
<span className="hidden md:inline flex items-center gap-2 ml-4 border-l border-white/20 pl-4">
<i className="w-4 h-4" data-lucide="package"></i> Envio Imediato para todo Brasil
            </span>
</div>
</div>

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 py-4">
<div className="flex items-center justify-between gap-4 md:gap-8">

<a className="flex items-center gap-2 group shrink-0" href="/">
<div className="bg-orange-500 text-white p-1.5 rounded-lg group-hover:rotate-3 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="paw-print"></i>
</div>
<span className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">PetShop</span>
</a>

<div className="hidden md:flex flex-1 max-w-xl relative">
<input className="w-full pl-5 pr-12 py-2.5 bg-slate-100 rounded-full border-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400 font-medium text-sm shadow-sm" placeholder="Buscar produtos, marcas..." type="text"/>
<button className="absolute right-2 top-1.5 bg-white text-slate-500 hover:text-orange-500 p-1 rounded-full transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
</div>

<div className="flex items-center gap-3 md:gap-6">
<button className="md:hidden text-slate-900"><i className="w-6 h-6" data-lucide="search"></i></button>
<a className="flex flex-col items-center gap-1 group text-slate-500 hover:text-orange-600 transition-colors" href="/account/login">
<i className="w-6 h-6" data-lucide="user"></i>
<span className="text-[10px] font-medium hidden md:block">Conta</span>
</a>
<a className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-full transition-all shadow-md hover:shadow-lg group" href="/cart">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
<span className="bg-orange-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">0</span>
</a>
</div>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative overflow-hidden bg-slate-50 py-12 md:py-20">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-6 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wide border border-orange-200">
<span className="animate-pulse w-2 h-2 rounded-full bg-orange-500"></span>
                        Oferta de Boas-vindas
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                        Cuidamos de quem <br className="hidden md:block"/>
<span className="text-orange-500 relative whitespace-nowrap">você mais ama</span>
</h1>
<p className="text-lg text-slate-500 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Encontre as melhores marcas de ração, brinquedos e acessórios com preços que cabem no bolso e entrega expressa para todo o Brasil.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-2">
<a className="w-full sm:w-auto px-8 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2" href="#best-sellers">
                            Aproveitar Ofertas <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2" href="#categories">
                            Ver Categorias
                        </a>
</div>
<div className="pt-6 flex items-center justify-center md:justify-start gap-4 text-sm text-slate-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-green-500" data-lucide="shield-check"></i> Compra Segura
                        </div>
<div className="w-1 h-1 bg-slate-300 rounded-full"></div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-yellow-400 fill-current" data-lucide="star"></i> 4.9/5 Avaliações
                        </div>
</div>
</div>
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-[2rem] transform rotate-3 scale-95"></div>
<img alt="Happy Dog" className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3] transform transition-transform group-hover:-translate-y-2" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
</section>

<section className="bg-white border-y border-slate-100 py-6 md:py-8">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
<div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0"><i className="w-5 h-5" data-lucide="truck"></i></div>
<div>
<h3 className="font-semibold text-slate-900 text-sm">Entrega Rápida</h3>
<p className="text-slate-500 text-xs mt-0.5">Para todo o Brasil</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
<div className="p-2 bg-green-50 text-green-600 rounded-lg shrink-0"><i className="w-5 h-5" data-lucide="credit-card"></i></div>
<div>
<h3 className="font-semibold text-slate-900 text-sm">Até 12x Sem Juros</h3>
<p className="text-slate-500 text-xs mt-0.5">Ou 5% OFF no Pix</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
<div className="p-2 bg-purple-50 text-purple-600 rounded-lg shrink-0"><i className="w-5 h-5" data-lucide="headphones"></i></div>
<div>
<h3 className="font-semibold text-slate-900 text-sm">Suporte Humanizado</h3>
<p className="text-slate-500 text-xs mt-0.5">Seg a Sex, 9h às 18h</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
<div className="p-2 bg-orange-50 text-orange-600 rounded-lg shrink-0"><i className="w-5 h-5" data-lucide="shield"></i></div>
<div>
<h3 className="font-semibold text-slate-900 text-sm">Garantia Total</h3>
<p className="text-slate-500 text-xs mt-0.5">7 dias para troca</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-slate-50" id="categories">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Navegue por Pet</h2>
<a className="text-orange-600 text-sm font-medium hover:text-orange-700 flex items-center gap-1" href="/collections">Ver todos <i className="w-4 h-4" data-lucide="chevron-right"></i></a>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
<a className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 text-center flex flex-col items-center" href="/collections/dogs">
<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform">🐶</div>
<h3 className="font-medium text-slate-900 group-hover:text-orange-600">Cães</h3>
</a>
<a className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 text-center flex flex-col items-center" href="/collections/cats">
<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform">🐱</div>
<h3 className="font-medium text-slate-900 group-hover:text-orange-600">Gatos</h3>
</a>
<a className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 text-center flex flex-col items-center" href="/collections/birds">
<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform">🦜</div>
<h3 className="font-medium text-slate-900 group-hover:text-orange-600">Pássaros</h3>
</a>
<a className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 text-center flex flex-col items-center" href="/collections/fish">
<div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform">🐠</div>
<h3 className="font-medium text-slate-900 group-hover:text-orange-600">Peixes</h3>
</a>
<a className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 text-center flex flex-col items-center" href="/collections/other">
<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform">🐹</div>
<h3 className="font-medium text-slate-900 group-hover:text-orange-600">Outros</h3>
</a>
</div>
</div>
</section>

<section className="py-16 bg-white" id="best-sellers">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-10">
<span className="text-orange-600 font-medium text-sm tracking-wider uppercase">Os Favoritos</span>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mt-1">Mais Vendidos da Semana</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


<div className="group relative bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
<div className="absolute top-3 left-3 z-10"><span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">-20%</span></div>
<div className="aspect-square bg-slate-50 rounded-t-2xl overflow-hidden p-6 relative">
<img alt="Produto" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all text-slate-600 hover:text-orange-600"><i className="w-5 h-5" data-lucide="shopping-cart"></i></button>
</div>
<div className="p-4">
<h3 className="font-medium text-slate-900 text-sm line-clamp-2 mb-2 group-hover:text-orange-600">Ração Premium Adulto Carne e Vegetais 15kg</h3>
<div className="flex items-center gap-1 mb-2 text-yellow-400 text-xs"><i className="w-3 h-3 fill-current" data-lucide="star"></i><span>4.9</span></div>
<div className="flex items-baseline gap-2">
<span className="text-lg font-bold text-slate-900">R$ 142,90</span>
<span className="text-xs text-slate-400 line-through">R$ 178,00</span>
</div>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
<div className="absolute top-3 left-3 z-10"><span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">Top 1</span></div>
<div className="aspect-square bg-slate-50 rounded-t-2xl overflow-hidden p-6 relative">
<img alt="Produto" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all text-slate-600 hover:text-orange-600"><i className="w-5 h-5" data-lucide="shopping-cart"></i></button>
</div>
<div className="p-4">
<h3 className="font-medium text-slate-900 text-sm line-clamp-2 mb-2 group-hover:text-orange-600">Brinquedo Mordedor Resistente Corda</h3>
<div className="flex items-center gap-1 mb-2 text-yellow-400 text-xs"><i className="w-3 h-3 fill-current" data-lucide="star"></i><span>5.0</span></div>
<div className="flex items-baseline gap-2">
<span className="text-lg font-bold text-slate-900">R$ 39,90</span>
</div>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
<div className="aspect-square bg-slate-50 rounded-t-2xl overflow-hidden p-6 relative">
<img alt="Produto" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all text-slate-600 hover:text-orange-600"><i className="w-5 h-5" data-lucide="shopping-cart"></i></button>
</div>
<div className="p-4">
<h3 className="font-medium text-slate-900 text-sm line-clamp-2 mb-2 group-hover:text-orange-600">Cama Nuvem Conforto Anti-Stress Bege</h3>
<div className="flex items-center gap-1 mb-2 text-yellow-400 text-xs"><i className="w-3 h-3 fill-current" data-lucide="star"></i><span>4.8</span></div>
<div className="flex items-baseline gap-2">
<span className="text-lg font-bold text-slate-900">R$ 109,00</span>
</div>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
<div className="absolute top-3 left-3 z-10"><span className="bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">Novo</span></div>
<div className="aspect-square bg-slate-50 rounded-t-2xl overflow-hidden p-6 relative">
<img alt="Produto" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all text-slate-600 hover:text-orange-600"><i className="w-5 h-5" data-lucide="shopping-cart"></i></button>
</div>
<div className="p-4">
<h3 className="font-medium text-slate-900 text-sm line-clamp-2 mb-2 group-hover:text-orange-600">Coleira Peitoral Ajustável com Guia</h3>
<div className="flex items-center gap-1 mb-2 text-yellow-400 text-xs"><i className="w-3 h-3 fill-current" data-lucide="star"></i><span>4.7</span></div>
<div className="flex items-baseline gap-2">
<span className="text-lg font-bold text-slate-900">R$ 45,90</span>
</div>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 hidden lg:block">
<div className="aspect-square bg-slate-50 rounded-t-2xl overflow-hidden p-6 relative">
<img alt="Produto" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all text-slate-600 hover:text-orange-600"><i className="w-5 h-5" data-lucide="shopping-cart"></i></button>
</div>
<div className="p-4">
<h3 className="font-medium text-slate-900 text-sm line-clamp-2 mb-2 group-hover:text-orange-600">Bebedouro Fonte Automática 2L</h3>
<div className="flex items-center gap-1 mb-2 text-yellow-400 text-xs"><i className="w-3 h-3 fill-current" data-lucide="star"></i><span>4.9</span></div>
<div className="flex items-baseline gap-2">
<span className="text-lg font-bold text-slate-900">R$ 159,00</span>
</div>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 hidden lg:block">
<div className="absolute top-3 left-3 z-10"><span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">-15%</span></div>
<div className="aspect-square bg-slate-50 rounded-t-2xl overflow-hidden p-6 relative">
<img alt="Produto" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all text-slate-600 hover:text-orange-600"><i className="w-5 h-5" data-lucide="shopping-cart"></i></button>
</div>
<div className="p-4">
<h3 className="font-medium text-slate-900 text-sm line-clamp-2 mb-2 group-hover:text-orange-600">Arranhador Torre Castelo para Gatos</h3>
<div className="flex items-center gap-1 mb-2 text-yellow-400 text-xs"><i className="w-3 h-3 fill-current" data-lucide="star"></i><span>4.8</span></div>
<div className="flex items-baseline gap-2">
<span className="text-lg font-bold text-slate-900">R$ 289,90</span>
<span className="text-xs text-slate-400 line-through">R$ 340,00</span>
</div>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 hidden lg:block">
<div className="aspect-square bg-slate-50 rounded-t-2xl overflow-hidden p-6 relative">
<img alt="Produto" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all text-slate-600 hover:text-orange-600"><i className="w-5 h-5" data-lucide="shopping-cart"></i></button>
</div>
<div className="p-4">
<h3 className="font-medium text-slate-900 text-sm line-clamp-2 mb-2 group-hover:text-orange-600">Shampoo Hipoalergênico Pelos Claros</h3>
<div className="flex items-center gap-1 mb-2 text-yellow-400 text-xs"><i className="w-3 h-3 fill-current" data-lucide="star"></i><span>4.6</span></div>
<div className="flex items-baseline gap-2">
<span className="text-lg font-bold text-slate-900">R$ 32,50</span>
</div>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 hidden lg:block">
<div className="aspect-square bg-slate-50 rounded-t-2xl overflow-hidden p-6 relative">
<img alt="Produto" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all text-slate-600 hover:text-orange-600"><i className="w-5 h-5" data-lucide="shopping-cart"></i></button>
</div>
<div className="p-4">
<h3 className="font-medium text-slate-900 text-sm line-clamp-2 mb-2 group-hover:text-orange-600">Petiscos Naturais Sabor Frango</h3>
<div className="flex items-center gap-1 mb-2 text-yellow-400 text-xs"><i className="w-3 h-3 fill-current" data-lucide="star"></i><span>5.0</span></div>
<div className="flex items-baseline gap-2">
<span className="text-lg font-bold text-slate-900">R$ 19,90</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Novidades na Loja</h2>
<a className="text-orange-600 font-medium text-sm" href="/collections/new">Ver Lançamentos</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
<div className="bg-slate-50 rounded-lg h-48 mb-4 relative flex items-center justify-center">
<span className="absolute top-2 left-2 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded">NOVO</span>
<img alt="New 1" className="h-32 object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h3 className="font-medium text-slate-900 text-sm">Tapete Higiênico Carvão Ativado</h3>
<p className="font-bold text-slate-900 mt-1">R$ 89,90</p>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
<div className="bg-slate-50 rounded-lg h-48 mb-4 relative flex items-center justify-center">
<span className="absolute top-2 left-2 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded">NOVO</span>
<img alt="New 2" className="h-32 object-contain mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<h3 className="font-medium text-slate-900 text-sm">Rastreador GPS para Coleira</h3>
<p className="font-bold text-slate-900 mt-1">R$ 199,00</p>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
<div className="bg-slate-50 rounded-lg h-48 mb-4 relative flex items-center justify-center">
<span className="absolute top-2 left-2 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded">NOVO</span>
<img alt="New 3" className="h-32 object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h3 className="font-medium text-slate-900 text-sm">Escova Removedora de Pelos</h3>
<p className="font-bold text-slate-900 mt-1">R$ 54,90</p>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
<div className="bg-slate-50 rounded-lg h-48 mb-4 relative flex items-center justify-center">
<span className="absolute top-2 left-2 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded">NOVO</span>
<img alt="New 4" className="h-32 object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h3 className="font-medium text-slate-900 text-sm">Mochila Transporte Astronauta</h3>
<p className="font-bold text-slate-900 mt-1">R$ 129,90</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-10">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Qual o desafio hoje?</h2>
<p className="text-slate-500 mt-2">Selecionamos soluções específicas para o dia a dia do seu pet</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<a className="bg-purple-50 p-6 rounded-2xl hover:bg-purple-100 transition-colors group" href="/collections/ansiedade">
<div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-purple-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="zap-off"></i>
</div>
<h3 className="font-semibold text-slate-900 text-lg">Ansiedade e Stress</h3>
<p className="text-sm text-slate-500 mt-2 mb-4">Calmantes naturais e brinquedos.</p>
<span className="text-purple-600 font-medium text-sm flex items-center gap-1">Ver Soluções <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</a>
<a className="bg-blue-50 p-6 rounded-2xl hover:bg-blue-100 transition-colors group" href="/collections/higiene">
<div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="font-semibold text-slate-900 text-lg">Pelos e Higiene</h3>
<p className="text-sm text-slate-500 mt-2 mb-4">Shampoos e escovas especiais.</p>
<span className="text-blue-600 font-medium text-sm flex items-center gap-1">Ver Soluções <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</a>
<a className="bg-orange-50 p-6 rounded-2xl hover:bg-orange-100 transition-colors group" href="/collections/adestramento">
<div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-orange-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="graduation-cap"></i>
</div>
<h3 className="font-semibold text-slate-900 text-lg">Xixi e Adestramento</h3>
<p className="text-sm text-slate-500 mt-2 mb-4">Tapetes, educadores e petiscos.</p>
<span className="text-orange-600 font-medium text-sm flex items-center gap-1">Ver Soluções <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</a>
<a className="bg-green-50 p-6 rounded-2xl hover:bg-green-100 transition-colors group" href="/collections/nutricao">
<div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-green-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="utensils"></i>
</div>
<h3 className="font-semibold text-slate-900 text-lg">Nutrição e Saúde</h3>
<p className="text-sm text-slate-500 mt-2 mb-4">Vitaminas e rações funcionais.</p>
<span className="text-green-600 font-medium text-sm flex items-center gap-1">Ver Soluções <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</a>
</div>
</div>
</section>

<section className="py-12 bg-slate-50">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-[300px]">
<div className="relative z-10 max-w-sm">
<span className="text-orange-400 font-medium text-sm uppercase tracking-wider mb-2 block">Essenciais</span>
<h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Mundo Canino</h3>
<p className="text-slate-300 mb-6">Tudo que seu cachorro precisa para ser feliz, saudável e ativo.</p>
<a className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-colors" href="/collections/dogs">
                                Explorar Coleção <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<img alt="Cão" className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-50 md:opacity-100 md:mask-image-linear-gradient" src="https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="bg-orange-500 rounded-3xl p-6 relative overflow-hidden text-white flex flex-col justify-between">
<div className="relative z-10">
<h3 className="text-2xl font-bold mb-2">Até R$ 99,00</h3>
<p className="text-orange-100 text-sm">Achadinhos imperdíveis</p>
</div>
<a className="relative z-10 mt-4 text-sm font-semibold underline decoration-2 underline-offset-4 hover:text-orange-100" href="/collections/ofertas">Ver itens</a>
<i className="absolute -bottom-4 -right-4 w-32 h-32 text-orange-400/50 rotate-12" data-lucide="tag"></i>
</div>
<div className="bg-blue-600 rounded-3xl p-6 relative overflow-hidden text-white flex flex-col justify-between">
<div className="relative z-10">
<h3 className="text-2xl font-bold mb-2">Kits &amp; Packs</h3>
<p className="text-blue-100 text-sm">Compre junto e economize</p>
</div>
<a className="relative z-10 mt-4 text-sm font-semibold underline decoration-2 underline-offset-4 hover:text-blue-100" href="/collections/kits">Ver kits</a>
<i className="absolute -bottom-4 -right-4 w-32 h-32 text-blue-500/50 rotate-12" data-lucide="package-plus"></i>
</div>
<div className="bg-white rounded-3xl p-6 border border-slate-200 col-span-1 sm:col-span-2 flex items-center justify-between">
<div>
<h3 className="text-xl font-bold text-slate-900">Assinatura PetShop</h3>
<p className="text-slate-500 text-sm">Ganhe 10% OFF em todas as compras recorrentes.</p>
</div>
<div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center shrink-0">
<i className="w-5 h-5" data-lucide="repeat"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4">
<div className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center border border-slate-100">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8">Por que escolher a PetShop?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col items-center">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-orange-500">
<i className="w-8 h-8" data-lucide="heart-handshake"></i>
</div>
<h3 className="font-semibold text-slate-900 text-lg">Curadoria de Especialistas</h3>
<p className="text-slate-500 text-sm mt-2 max-w-xs">Produtos selecionados e aprovados por veterinários para garantir a segurança do seu pet.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-orange-500">
<i className="w-8 h-8" data-lucide="truck"></i>
</div>
<h3 className="font-semibold text-slate-900 text-lg">Logística Inteligente</h3>
<p className="text-slate-500 text-sm mt-2 max-w-xs">Tecnologia de ponta para garantir que seu pedido chegue rápido e em perfeito estado.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-orange-500">
<i className="w-8 h-8" data-lucide="smile"></i>
</div>
<h3 className="font-semibold text-slate-900 text-lg">Satisfação Garantida</h3>
<p className="text-slate-500 text-sm mt-2 max-w-xs">Se não ficar satisfeito, devolvemos seu dinheiro. Simples assim, sem letras miúdas.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4">
<div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-8">
<div>
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Dicas e Conteúdos</h2>
<p className="text-slate-500 mt-2">Aprenda a cuidar melhor do seu amigo</p>
</div>
<a className="text-orange-600 font-medium hover:text-orange-700 flex items-center gap-1" href="/blog">Ver Blog Completo <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<article className="group cursor-pointer">
<div className="rounded-2xl overflow-hidden mb-4 relative h-52">
<img alt="Blog 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-orange-600">Saúde</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">Como escolher a ração ideal?</h3>
<p className="text-slate-500 text-sm line-clamp-2">Entenda a diferença entre rações premium e super premium.</p>
</article>
<article className="group cursor-pointer">
<div className="rounded-2xl overflow-hidden mb-4 relative h-52">
<img alt="Blog 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-blue-600">Comportamento</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">Sinais de stress em gatos</h3>
<p className="text-slate-500 text-sm line-clamp-2">Mudanças sutis podem indicar que seu felino precisa de ajuda.</p>
</article>
<article className="group cursor-pointer">
<div className="rounded-2xl overflow-hidden mb-4 relative h-52">
<img alt="Blog 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-green-600">Adestramento</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">Ensinando o "Xixi no Lugar Certo"</h3>
<p className="text-slate-500 text-sm line-clamp-2">Dicas práticas para acabar com a sujeira pela casa.</p>
</article>
</div>
</div>
</section>

<section className="py-16 bg-slate-900 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-20"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
<div className="max-w-4xl mx-auto px-4 text-center relative z-10">
<span className="text-orange-400 font-semibold tracking-wide uppercase text-xs mb-2 block">Clube de Benefícios</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">Ganhe 10% OFF na primeira compra</h2>
<p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">Cadastre-se para receber ofertas exclusivas, cupons secretos e dicas de especialistas direto no seu e-mail.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
<input className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-orange-500 focus:bg-white/20 transition-all outline-none" placeholder="Digite seu melhor e-mail" type="email"/>
<button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-500/20" type="submit">
                        Quero meu desconto
                    </button>
</form>
<p className="text-slate-600 text-xs mt-4">Ao se cadastrar você concorda com nossos Termos. Respeitamos sua privacidade.</p>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8 text-sm">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6 text-slate-900" href="/">
<i className="w-6 h-6 text-orange-500" data-lucide="paw-print"></i>
<span className="text-xl font-bold">PetShop</span>
</a>
<p className="text-slate-500 mb-6 max-w-xs leading-relaxed">
                        Sua loja online de confiança. Produtos selecionados, entrega rápida e amor pelos animais em cada detalhe.
                    </p>
<div className="flex gap-4">
<a className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-orange-100 hover:text-orange-600 transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-red-100 hover:text-red-600 transition-colors" href="#"><i className="w-4 h-4" data-lucide="youtube"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Navegação</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-orange-600" href="/collections/all">Produtos</a></li>
<li><a className="hover:text-orange-600" href="/pages/about">Sobre Nós</a></li>
<li><a className="hover:text-orange-600" href="/blogs/news">Blog</a></li>
<li><a className="hover:text-orange-600" href="/pages/contact">Contato</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Ajuda</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-orange-600" href="/pages/faq">Perguntas Frequentes</a></li>
<li><a className="hover:text-orange-600" href="/pages/shipping">Prazos de Entrega</a></li>
<li><a className="hover:text-orange-600" href="/pages/returns">Trocas e Devoluções</a></li>
<li><a className="hover:text-orange-600" href="/policies/privacy">Política de Privacidade</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Pagamento</h4>
<div className="flex flex-wrap gap-2">
<div className="px-2 py-1 bg-slate-100 rounded border border-slate-200 text-[10px] font-bold text-slate-500">VISA</div>
<div className="px-2 py-1 bg-slate-100 rounded border border-slate-200 text-[10px] font-bold text-slate-500">MASTER</div>
<div className="px-2 py-1 bg-slate-100 rounded border border-slate-200 text-[10px] font-bold text-slate-500">PIX</div>
<div className="px-2 py-1 bg-slate-100 rounded border border-slate-200 text-[10px] font-bold text-slate-500">BOLETO</div>
</div>
<div className="mt-6 flex items-center gap-2 text-green-600">
<i className="w-4 h-4" data-lucide="lock"></i>
<span className="text-xs font-semibold">Compra 100% Segura</span>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
<p>© 2023 PetShop Brasil. Todos os direitos reservados.</p>
<p>CNPJ: 00.000.000/0001-00</p>
</div>
</div>
</footer>


    </>
  );
}
