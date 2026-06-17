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



        // Simple router logic
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.add('hidden');
                page.classList.remove('block');
            });

            // Show selected page
            const selectedPage = document.getElementById(pageId);
            if (selectedPage) {
                selectedPage.classList.remove('hidden');
                selectedPage.classList.add('block');
                window.scrollTo(0, 0);
            }
        }

        // Countdown Logic (Psychological Trigger)
        function startTimer(duration, display) {
            var timer = duration, hours, minutes, seconds;
            setInterval(function () {
                hours = parseInt(timer / 3600, 10);
                minutes = parseInt((timer % 3600) / 60, 10);
                seconds = parseInt(timer % 60, 10);

                hours = hours < 10 ? "0" + hours : hours;
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = hours + ":" + minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }

        window.onload = function () {
            var fiveHours = 60 * 60 * 5;
            var display = document.querySelector('#countdown');
            startTimer(fiveHours, display);
        };
    
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
      

<div className="py-2 bg-zinc-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium relative z-10">
<span className="hidden sm:flex items-center gap-1.5">
<iconify-icon className="text-green-400" icon="lucide:shield-check" strokeWidth="1.5" width="14"></iconify-icon>
                Garantia de 30 dias em todos os produtos
            </span>
<span className="flex items-center gap-2 mx-auto sm:mx-0">
<span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
<span className="text-orange-200">Oferta Relâmpago:</span>
<span className="font-bold">Frete Grátis</span> encerra em 
                <span className="font-mono text-white" id="countdown">04:22:10</span>
</span>
</div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl border-b bg-white/90 border-zinc-100 transition-all duration-300">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-4">
<button className="lg:hidden p-2 -ml-2 text-zinc-600 hover:text-zinc-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<a className="flex items-center gap-2 group" href="#" onclick="showPage('home')">
<div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:rotate-6 transition-transform">
<iconify-icon icon="lucide:paw-print" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tight text-zinc-900">Pet<span className="text-orange-600">Vida</span></span>
</a>
</div>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-orange-600 transition-colors" href="#" onclick="showPage('home')">Início</a>
<a className="hover:text-orange-600 transition-colors" href="#shop">Cães</a>
<a className="hover:text-orange-600 transition-colors" href="#shop">Gatos</a>
<a className="hover:text-orange-600 transition-colors flex items-center gap-1" href="#bundles">
      Kits &amp; Bundles
      <span className="bg-orange-100 text-orange-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold">-20%</span>
</a>
<a className="hover:text-orange-600 transition-colors" href="#" onclick="showPage('institutional-about')">Sobre</a>
</nav>

<div className="flex items-center gap-2 sm:gap-4">
<div className="hidden sm:flex relative">
<input className="pl-9 pr-4 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 w-48 transition-all focus:w-64" placeholder="Buscar..." type="text"/>
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" icon="lucide:search" width="16"></iconify-icon>
</div>
<div className="h-6 w-px bg-zinc-200 hidden sm:block"></div>
<button className="hidden sm:flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900" onclick="showPage('login')">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="18"></iconify-icon>
<span className="">Entrar</span>
</button>
<button className="relative p-2 text-zinc-500 transition-colors group hover:text-zinc-900 bg-zinc-50 rounded-full border border-zinc-100 hover:border-zinc-300">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="18"></iconify-icon>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-600 text-[10px] font-bold flex items-center justify-center rounded-full text-white ring-2 ring-white">2</span>
</button>
</div>
</div>
</div>
</header>

<main className="flex-grow" id="main-content">

<div className="page-section block" id="home">

<section className="overflow-hidden lg:pt-24 lg:pb-32 pt-12 pb-16 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 gap-x-12 gap-y-12 items-center">
<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold bg-orange-50 border-orange-100 text-orange-700 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                                Mais de 15.000 clientes satisfeitos
                            </div>
<h1 className="text-4xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
                                Felicidade entregue em <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">casa.</span>
</h1>
<p className="text-lg text-zinc-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Transforme a rotina do seu pet com produtos aprovados por veterinários. Design, conforto e durabilidade em um só lugar.
                            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl font-semibold shadow-xl shadow-zinc-200 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                                    Ver Ofertas
                                    <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-4 bg-white border border-zinc-200 text-zinc-700 rounded-xl font-semibold hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:play-circle" width="18"></iconify-icon>
                                    Como funciona
                                </button>
</div>

<div className="pt-4 flex items-center gap-6 justify-center lg:justify-start text-xs text-zinc-400 font-medium uppercase tracking-wide">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="lucide:shield-check" width="16"></iconify-icon> Compra Segura
                                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="lucide:truck" width="16"></iconify-icon> Envio Rápido
                                </div>
</div>
</div>
<div className="relative lg:h-[600px] w-full flex items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-100/50 via-white to-transparent -z-10"></div>

<div className="relative w-full aspect-square max-w-md bg-zinc-100 rounded-[2rem] overflow-hidden shadow-2xl shadow-orange-900/5 group border border-zinc-100">
<div className="absolute inset-0 flex items-center justify-center text-zinc-200">
<iconify-icon icon="lucide:dog" strokeWidth="0.5" width="200"></iconify-icon>
</div>

<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-lg border border-zinc-100 max-w-[200px] animate-[bounce_4s_infinite]">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold text-zinc-900">5 Estrelas</p>
<p className="text-[10px] text-zinc-500">Avaliado por donos</p>
</div>
</div>
<p className="text-xs text-zinc-600 italic">"Melhor investimento que fiz para o Rex!"</p>
</div>
<div className="absolute top-6 right-6 bg-white/95 backdrop-blur py-2 px-4 rounded-full shadow-lg border border-zinc-100 flex items-center gap-2">
<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
<span className="text-xs font-bold text-zinc-900">Alta Procura</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-zinc-50 border-y border-zinc-200" id="bundles">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-12">
<span className="text-orange-600 font-bold tracking-wider uppercase text-xs">Kits Exclusivos</span>
<h2 className="text-3xl font-bold text-zinc-900 mt-2 mb-4">Leve Mais, Pague Menos</h2>
<p className="text-zinc-500">Combinações perfeitas selecionadas por especialistas para cobrir todas as necessidades do seu pet com desconto.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl border border-zinc-200 p-6 hover:shadow-xl hover:shadow-orange-500/5 transition-all group relative overflow-hidden">
<div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-10">Economize R$ 40</div>
<div className="aspect-[4/3] bg-zinc-50 rounded-xl mb-6 flex items-center justify-center relative">
<iconify-icon className="text-zinc-300 group-hover:scale-110 transition-transform duration-500" icon="lucide:package-open" width="64"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-zinc-900 mb-2">Kit Boas-Vindas Puppy</h3>
<ul className="text-sm text-zinc-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="lucide:check" width="14"></iconify-icon> Cama Nuvem P</li>
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="lucide:check" width="14"></iconify-icon> Brinquedo Mordedor</li>
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="lucide:check" width="14"></iconify-icon> Tapete Higiênico (30un)</li>
</ul>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100">
<div>
<span className="text-xs text-zinc-400 line-through">R$ 289,90</span>
<div className="text-xl font-bold text-zinc-900">R$ 249,90</div>
</div>
<button className="bg-zinc-900 text-white p-3 rounded-lg hover:bg-orange-600 transition-colors">
<iconify-icon icon="lucide:shopping-cart" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="bg-white rounded-2xl border-2 border-orange-500 p-6 shadow-2xl shadow-orange-500/10 relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-b-lg tracking-wide uppercase">Mais Vendido</div>
<div className="aspect-[4/3] bg-orange-50 rounded-xl mb-6 flex items-center justify-center mt-4">
<iconify-icon className="text-orange-300" icon="lucide:sparkles" width="64"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-zinc-900 mb-2">Kit Higiene Premium</h3>
<ul className="text-sm text-zinc-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="lucide:check" width="14"></iconify-icon> Shampoo Hipoalergênico</li>
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="lucide:check" width="14"></iconify-icon> Escova Removedora</li>
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="lucide:check" width="14"></iconify-icon> Cortador de Unhas LED</li>
</ul>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100">
<div>
<span className="text-xs text-zinc-400 line-through">R$ 199,90</span>
<div className="text-xl font-bold text-zinc-900">R$ 159,90</div>
</div>
<button className="bg-orange-600 text-white p-3 rounded-lg hover:bg-orange-700 transition-colors w-full ml-4 text-sm font-bold">
                                    Adicionar
                                </button>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-200 p-6 hover:shadow-xl hover:shadow-orange-500/5 transition-all group relative">
<div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-10">Economize R$ 30</div>
<div className="aspect-[4/3] bg-zinc-50 rounded-xl mb-6 flex items-center justify-center relative">
<iconify-icon className="text-zinc-300 group-hover:scale-110 transition-transform duration-500" icon="lucide:utensils" width="64"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-zinc-900 mb-2">Kit Alimentação Saudável</h3>
<ul className="text-sm text-zinc-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="lucide:check" width="14"></iconify-icon> Comedouro Lento</li>
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="lucide:check" width="14"></iconify-icon> Bebedouro Automático</li>
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="lucide:check" width="14"></iconify-icon> Tapete Impermeável</li>
</ul>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100">
<div>
<span className="text-xs text-zinc-400 line-through">R$ 189,90</span>
<div className="text-xl font-bold text-zinc-900">R$ 159,90</div>
</div>
<button className="bg-zinc-900 text-white p-3 rounded-lg hover:bg-orange-600 transition-colors">
<iconify-icon icon="lucide:shopping-cart" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-8">
<h2 className="text-2xl font-bold text-zinc-900">Populares da Semana</h2>
<a className="hover:text-orange-700 flex items-center gap-1 text-sm font-medium text-orange-600" href="#">Ver todos <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon></a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="group">
<div className="relative aspect-square bg-zinc-100 rounded-2xl overflow-hidden mb-3 border border-zinc-200">
<span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">Restam 3</span>
<div className="flex items-center justify-center h-full text-zinc-300 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="lucide:bone" width="60"></iconify-icon>
</div>
<button className="absolute bottom-3 right-3 bg-white text-zinc-900 w-8 h-8 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-orange-600 hover:text-white">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-bold text-zinc-900">Osso Nylon Resistente</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm font-semibold text-zinc-900">R$ 49,90</span>
<div className="flex text-[10px] text-amber-400">
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
</div>
</div>
</div>

<div className="group">
<div className="relative aspect-square bg-zinc-100 rounded-2xl overflow-hidden mb-3 border border-zinc-200">
<div className="flex items-center justify-center h-full text-zinc-300 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="lucide:cat" width="60"></iconify-icon>
</div>
<button className="absolute bottom-3 right-3 bg-white text-zinc-900 w-8 h-8 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-orange-600 hover:text-white">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-bold text-zinc-900">Arranhador Torre 3 andares</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm font-semibold text-zinc-900">R$ 289,90</span>
<div className="flex text-[10px] text-amber-400">
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-zinc-300" fill="currentColor" icon="lucide:star"></iconify-icon>
</div>
</div>
</div>

<div className="group">
<div className="relative aspect-square bg-zinc-100 rounded-2xl overflow-hidden mb-3 border border-zinc-200">
<span className="absolute top-3 left-3 bg-zinc-900 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">Novo</span>
<div className="flex items-center justify-center h-full text-zinc-300 group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="" icon="lucide:cloud-rain" width="60"></iconify-icon>
</div>
<button className="absolute bottom-3 right-3 bg-white text-zinc-900 w-8 h-8 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-orange-600 hover:text-white">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-bold text-zinc-900">Capa de Chuva Reflexiva</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm font-semibold text-zinc-900">R$ 89,90</span>
<div className="flex text-[10px] text-amber-400">
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star-half"></iconify-icon>
</div>
</div>
</div>

<div className="group">
<div className="relative aspect-square bg-zinc-100 rounded-2xl overflow-hidden mb-3 border border-zinc-200">
<div className="flex items-center justify-center h-full text-zinc-300 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="lucide:scissors" width="60"></iconify-icon>
</div>
<button className="absolute bottom-3 right-3 bg-white text-zinc-900 w-8 h-8 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-orange-600 hover:text-white">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-bold text-zinc-900">Kit Tesouras Profissional</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm font-semibold text-zinc-900">R$ 129,90</span>
<div className="flex text-[10px] text-amber-400">
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="login">
<div className="min-h-[calc(100vh-200px)] flex flex-col justify-center py-12 px-6 lg:px-8 bg-zinc-50">
<div className="sm:mx-auto sm:w-full sm:max-w-md">
<div className="flex justify-center mb-6">
<div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg">
<iconify-icon icon="lucide:paw-print" width="24"></iconify-icon>
</div>
</div>
<h2 className="text-center text-2xl font-bold tracking-tight text-zinc-900">Acesse sua conta</h2>
<p className="mt-2 text-center text-sm text-zinc-600">
                        Ainda não tem conta? <a className="font-medium text-orange-600 hover:text-orange-500 transition-colors" href="#" onclick="showPage('register')">Criar cadastro grátis</a>
</p>
</div>
<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[400px]">
<div className="bg-white py-8 px-6 shadow-xl shadow-zinc-200/50 rounded-2xl border border-zinc-100">
<form action="#" className="space-y-5" method="POST" onsubmit="event.preventDefault(); showPage('dashboard');">
<div>
<label className="block text-sm font-medium text-zinc-700" htmlFor="email">E-mail</label>
<div className="mt-1">
<input autocomplete="email" className="block w-full rounded-lg border border-zinc-300 px-3 py-2 placeholder-zinc-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm transition-all" id="email" name="email" required="" type="email"/>
</div>
</div>
<div>
<div className="flex items-center justify-between">
<label className="block text-sm font-medium text-zinc-700" htmlFor="password">Senha</label>
<div className="text-sm">
<a className="font-medium text-orange-600 hover:text-orange-500" href="#" onclick="showPage('recovery')">Esqueceu a senha?</a>
</div>
</div>
<div className="mt-1">
<input autocomplete="current-password" className="block w-full rounded-lg border border-zinc-300 px-3 py-2 placeholder-zinc-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm transition-all" id="password" name="password" required="" type="password"/>
</div>
</div>
<div>
<button className="flex w-full justify-center rounded-lg bg-zinc-900 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 transition-all" type="submit">
                                    Entrar
                                </button>
</div>
</form>
<div className="mt-6">
<div className="relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-zinc-200"></div>
</div>
<div className="relative flex justify-center text-sm">
<span className="bg-white px-2 text-zinc-500">Ou continue com</span>
</div>
</div>
<div className="mt-6 grid grid-cols-2 gap-3">
<a className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-colors" href="#">
<iconify-icon icon="logos:google-icon" width="16"></iconify-icon>
                                    Google
                                </a>
<a className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-colors" href="#">
<iconify-icon icon="logos:facebook" width="16"></iconify-icon>
                                    Facebook
                                </a>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="register">
<div className="min-h-[calc(100vh-200px)] flex flex-col justify-center py-12 px-6 lg:px-8 bg-zinc-50">
<div className="sm:mx-auto sm:w-full sm:max-w-md">
<h2 className="text-center text-2xl font-bold tracking-tight text-zinc-900">Crie sua conta</h2>
<p className="mt-2 text-center text-sm text-zinc-600">
                        Já tem cadastro? <a className="font-medium text-orange-600 hover:text-orange-500" href="#" onclick="showPage('login')">Fazer login</a>
</p>
</div>
<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[400px]">
<div className="bg-white py-8 px-6 shadow-xl shadow-zinc-200/50 rounded-2xl border border-zinc-100">
<form action="#" className="space-y-4" method="POST" onsubmit="event.preventDefault(); showPage('dashboard');">
<div>
<label className="block text-sm font-medium text-zinc-700" htmlFor="name">Nome Completo</label>
<input className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm" id="name" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-700" htmlFor="email-reg">E-mail</label>
<input className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm" id="email-reg" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-700" htmlFor="password-reg">Senha</label>
<input className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm" id="password-reg" required="" type="password"/>
<p className="text-xs text-zinc-500 mt-1">Mínimo de 8 caracteres.</p>
</div>
<div className="flex items-center">
<input className="h-4 w-4 rounded border-zinc-300 text-orange-600 focus:ring-orange-500" id="terms" required="" type="checkbox"/>
<label className="ml-2 block text-sm text-zinc-900" htmlFor="terms">Concordo com os <a className="text-orange-600 hover:underline" href="#" onclick="showPage('institutional-terms')">Termos de Uso</a></label>
</div>
<button className="flex w-full justify-center rounded-lg bg-zinc-900 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 transition-all" type="submit">Criar Conta</button>
</form>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="recovery">
<div className="min-h-[calc(100vh-200px)] flex flex-col justify-center py-12 px-6 lg:px-8 bg-zinc-50">
<div className="sm:mx-auto sm:w-full sm:max-w-md">
<h2 className="text-center text-2xl font-bold tracking-tight text-zinc-900">Recuperar Senha</h2>
<p className="mt-2 text-center text-sm text-zinc-600">Digite seu e-mail para receber o link de redefinição.</p>
</div>
<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[400px]">
<div className="bg-white py-8 px-6 shadow-xl shadow-zinc-200/50 rounded-2xl border border-zinc-100">
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Link enviado com sucesso!'); showPage('login');">
<div>
<label className="block text-sm font-medium text-zinc-700" htmlFor="email-rec">E-mail cadastrado</label>
<input className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm" id="email-rec" required="" type="email"/>
</div>
<button className="flex w-full justify-center rounded-lg bg-orange-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 transition-all" type="submit">Enviar Link</button>
<div className="text-center">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900" href="#" onclick="showPage('login')">Voltar para Login</a>
</div>
</form>
</div>
</div>
</div>
</div>

<div className="page-section hidden bg-zinc-50 min-h-[calc(100vh-64px)]" id="dashboard">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col md:flex-row gap-8">

<aside className="w-full md:w-64 shrink-0">
<div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm sticky top-24">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-zinc-100">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon icon="lucide:user" width="20"></iconify-icon>
</div>
<div>
<p className="font-bold text-sm text-zinc-900">Olá, Cliente</p>
<p className="text-xs text-zinc-500">cliente@email.com</p>
</div>
</div>
<nav className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-orange-50 text-orange-700">
<iconify-icon icon="lucide:package" width="16"></iconify-icon> Meus Pedidos
                                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors">
<iconify-icon icon="lucide:map-pin" width="16"></iconify-icon> Endereços
                                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors">
<iconify-icon icon="lucide:settings" width="16"></iconify-icon> Minha Conta
                                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-red-600 hover:bg-red-50 transition-colors mt-4" onclick="showPage('home')">
<iconify-icon icon="lucide:log-out" width="16"></iconify-icon> Sair
                                </button>
</nav>
</div>
</aside>

<div className="flex-1 space-y-6">
<div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="p-6 border-b border-zinc-100 flex justify-between items-center">
<h2 className="font-bold text-lg text-zinc-900">Pedidos Recentes</h2>
<button className="text-sm text-orange-600 hover:text-orange-700 font-medium">Ver todos</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="bg-zinc-50 text-zinc-500 font-medium border-b border-zinc-100">
<tr>
<th className="px-6 py-3">Pedido</th>
<th className="px-6 py-3">Data</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3">Total</th>
<th className="px-6 py-3 text-right">Ação</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr>
<td className="px-6 py-4 font-medium text-zinc-900">#4829</td>
<td className="px-6 py-4 text-zinc-500">22 Out, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    Entregue
                                                </span>
</td>
<td className="px-6 py-4 font-medium text-zinc-900">R$ 159,90</td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">Detalhes</button>
</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-zinc-900">#4830</td>
<td className="px-6 py-4 text-zinc-500">Hoje</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                    Em trânsito
                                                </span>
</td>
<td className="px-6 py-4 font-medium text-zinc-900">R$ 89,90</td>
<td className="px-6 py-4 text-right">
<button className="text-orange-600 hover:text-orange-700 font-medium">Rastrear</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-6">
<h2 className="font-bold text-lg text-zinc-900 mb-4">Endereço Principal</h2>
<div className="p-4 rounded-lg border border-zinc-200 bg-zinc-50 flex justify-between items-start">
<div>
<p className="font-medium text-zinc-900">Casa</p>
<p className="text-sm text-zinc-500 mt-1">Av. Paulista, 1000 - Apto 42</p>
<p className="text-sm text-zinc-500">Bela Vista, São Paulo - SP</p>
<p className="text-sm text-zinc-500">01310-100</p>
</div>
<button className="text-sm text-orange-600 font-medium">Editar</button>
</div>
</div>
</div>
</div>
</div>
</div>


<div className="page-section hidden max-w-3xl mx-auto px-4 py-16" id="institutional-about">
<h1 className="text-3xl font-bold text-zinc-900 mb-6">Sobre a PetVida</h1>
<div className="prose prose-zinc max-w-none text-zinc-600 space-y-4">
<p className="lead text-lg">Nascemos da paixão incondicional pelos animais e da necessidade de oferecer produtos que realmente façam a diferença na vida dos nossos melhores amigos.</p>
<p>Fundada em 2020 por veterinários e comportamentalistas animais, a PetVida não é apenas um e-commerce, é uma curadoria de bem-estar. Cada produto em nosso catálogo passa por um rigoroso processo de testes de qualidade, durabilidade e segurança.</p>
<h3 className="text-xl font-bold text-zinc-900 mt-8 mb-2">Nossa Missão</h3>
<p>Proporcionar longevidade e felicidade através de produtos inovadores, facilitando a conexão entre tutores e pets.</p>
</div>
</div>

<div className="page-section hidden max-w-3xl mx-auto px-4 py-16" id="institutional-terms">
<h1 className="text-3xl font-bold text-zinc-900 mb-6">Termos de Uso</h1>
<div className="text-sm text-zinc-600 space-y-6">
<section>
<h2 className="text-lg font-bold text-zinc-900 mb-2">1. Aceitação dos Termos</h2>
<p>Ao acessar e usar a PetVida, você aceita e concorda em estar vinculado aos termos e provisões deste acordo.</p>
</section>
<section>
<h2 className="text-lg font-bold text-zinc-900 mb-2">2. Uso do Site</h2>
<p>O conteúdo deste site é para sua informação geral e uso. Ele está sujeito a alterações sem aviso prévio.</p>
</section>
<section>
<h2 className="text-lg font-bold text-zinc-900 mb-2">3. Produtos e Serviços</h2>
<p>Nos esforçamos para exibir com precisão as cores e imagens de nossos produtos, mas não podemos garantir que a exibição do monitor do seu computador de qualquer cor seja precisa.</p>
</section>
</div>
</div>

<div className="page-section hidden max-w-3xl mx-auto px-4 py-16" id="institutional-privacy">
<h1 className="text-3xl font-bold text-zinc-900 mb-6">Política de Privacidade</h1>
<div className="text-sm text-zinc-600 space-y-6">
<p>Sua privacidade é importante para nós. É política da PetVida respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site PetVida.</p>
<section>
<h2 className="text-lg font-bold text-zinc-900 mb-2">Coleta de Dados</h2>
<p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.</p>
</section>
<section>
<h2 className="text-lg font-bold text-zinc-900 mb-2">Uso de Dados</h2>
<p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos.</p>
</section>
</div>
</div>

<div className="page-section hidden max-w-3xl mx-auto px-4 py-16" id="institutional-refund">
<h1 className="text-3xl font-bold text-zinc-900 mb-6">Trocas e Devoluções</h1>
<div className="text-sm text-zinc-600 space-y-6">
<div className="bg-orange-50 p-4 rounded-lg border border-orange-100 text-orange-800 mb-6">
<strong>Importante:</strong> Você tem até 7 dias corridos após o recebimento para solicitar a devolução por arrependimento, conforme o Código de Defesa do Consumidor.
                </div>
<section>
<h2 className="text-lg font-bold text-zinc-900 mb-2">Como solicitar</h2>
<p>Envie um e-mail para suporte@petvida.com.br com o número do pedido e motivo da troca. Nossa equipe responderá em até 24 horas úteis.</p>
</section>
<section>
<h2 className="text-lg font-bold text-zinc-900 mb-2">Condições</h2>
<ul className="list-disc pl-5 space-y-1">
<li>O produto deve estar na embalagem original;</li>
<li>Sem indícios de uso;</li>
<li>Acompanhado da Nota Fiscal.</li>
</ul>
</section>
</div>
</div>

<div className="page-section hidden max-w-3xl mx-auto px-4 py-16" id="institutional-faq">
<h1 className="text-3xl font-bold text-zinc-900 mb-8">Perguntas Frequentes</h1>
<div className="space-y-4">
<details className="group bg-white rounded-lg border border-zinc-200">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-zinc-900">
                        Qual o prazo de entrega?
                        <iconify-icon className="transition-transform group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-600">
                        O prazo varia de acordo com seu CEP. Para capitais do Sudeste, a média é de 2 a 4 dias úteis. Você pode calcular o prazo exato na página do produto.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-zinc-200">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-zinc-900">
                        Os produtos têm garantia?
                        <iconify-icon className="transition-transform group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-600">
                        Sim! Todos os nossos produtos possuem garantia legal de 90 dias contra defeitos de fabricação. Além disso, oferecemos satisfação garantida de 30 dias para a linha de Camas Ortopédicas.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-zinc-200">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-zinc-900">
                        Como rastrear meu pedido?
                        <iconify-icon className="transition-transform group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-600">
                        Assim que seu pedido for despachado, você receberá um código de rastreio por e-mail e WhatsApp para acompanhar cada etapa da entrega.
                    </div>
</details>
</div>
</div>
</main>

<footer className="border-t pt-16 pb-8 bg-zinc-50 border-zinc-200 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="space-y-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="lucide:paw-print" width="18"></iconify-icon>
</div>
<span className="text-xl font-bold text-zinc-900">PetVida</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Comprometidos em trazer alegria e saúde para o seu pet. Loja verificada e segura.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-pink-600 hover:border-pink-200 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-blue-600 hover:border-blue-200 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="16"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-bold mb-4 text-zinc-900 text-sm uppercase tracking-wider">Institucional</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-orange-600 transition-colors" href="#" onclick="showPage('institutional-about')">Quem Somos</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#" onclick="showPage('institutional-privacy')">Política de Privacidade</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#" onclick="showPage('institutional-terms')">Termos de Uso</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 text-zinc-900 text-sm uppercase tracking-wider">Ajuda</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-orange-600 transition-colors" href="#" onclick="showPage('institutional-refund')">Trocas e Devoluções</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#" onclick="showPage('institutional-faq')">Perguntas Frequentes</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Fale Conosco</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 text-zinc-900 text-sm uppercase tracking-wider">Pagamento Seguro</h4>
<div className="flex flex-wrap gap-2 text-zinc-400">
<div className="h-8 w-12 rounded border flex items-center justify-center bg-white border-zinc-200"><iconify-icon icon="logos:mastercard" width="20"></iconify-icon></div>
<div className="h-8 w-12 rounded border flex items-center justify-center bg-white border-zinc-200"><iconify-icon icon="logos:visa" width="20"></iconify-icon></div>
<div className="h-8 w-12 rounded border flex items-center justify-center bg-white border-zinc-200"><iconify-icon icon="lucide:banknote" width="20"></iconify-icon></div>
</div>
<div className="mt-4 p-3 bg-white border border-zinc-200 rounded-lg flex items-start gap-3">
<iconify-icon className="text-green-500 mt-0.5" icon="lucide:lock" width="14"></iconify-icon>
<p className="text-[10px] text-zinc-500 leading-tight">Seus dados estão protegidos com criptografia SSL de 256 bits.</p>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400 border-zinc-200">
<p>© 2024 PetVida Ltda. Todos os direitos reservados.</p>
<p>Feito com amor para pets 🐶🐱</p>
</div>
</div>
</footer>



    </>
  );
}
