import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Drawer Controls
        const drawer = document.getElementById('filter-drawer');
        const overlay = document.getElementById('drawer-overlay');
        const btnOpenFilter = document.getElementById('btn-open-filter');
        const btnCloseFilter = document.getElementById('btn-close-filter');
        const btnApplyFilters = document.getElementById('btn-apply-filters');

        const openDrawer = () => {
            overlay.classList.remove('hidden');
            setTimeout(() => {
                overlay.classList.remove('opacity-0');
                overlay.classList.add('opacity-100');
                drawer.classList.remove('translate-x-full');
            }, 10);
        };

        const closeDrawer = () => {
            drawer.classList.add('translate-x-full');
            overlay.classList.remove('opacity-100');
            overlay.classList.add('opacity-0');
            setTimeout(() => overlay.classList.add('hidden'), 300);
        };

        btnOpenFilter.addEventListener('click', openDrawer);
        btnCloseFilter.addEventListener('click', closeDrawer);
        overlay.addEventListener('click', closeDrawer);
        btnApplyFilters.addEventListener('click', closeDrawer);

        // Countdown Timer Logic para Sessão Relâmpago
        const startCountdown = () => {
            const timerElements = document.querySelectorAll('#countdown-timer span');
            let hours = 2;
            let minutes = 45;
            let seconds = 12;

            setInterval(() => {
                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                    if (minutes < 0) {
                        minutes = 59;
                        hours--;
                        if (hours < 0) {
                            hours = 2; // Reseta para demonstração
                        }
                    }
                }

                // Format with leading zeros
                const format = (val) => val < 10 ? `0${val}` : val;
                
                if (timerElements.length >= 3) {
                    timerElements[0].textContent = format(hours);
                    timerElements[1].textContent = format(minutes);
                    timerElements[2].textContent = format(seconds);
                }
            }, 1000);
        };

        // Buy Buttons Affiliate Logic
        const initBuyButtons = () => {
            document.querySelectorAll('.buy-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const originalText = this.innerHTML;
                    this.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin text-lg"></iconify-icon> Redirecionando...';
                    this.style.pointerEvents = 'none';
                    this.style.opacity = '0.8';
                    
                    setTimeout(() => {
                        window.open('https://mercadolivre.com.br', '_blank');
                        this.innerHTML = originalText;
                        this.style.pointerEvents = 'auto';
                        this.style.opacity = '1';
                    }, 800);
                });
            });
        };

        // Filter Toggle Simples (UI Apenas)
        const initFilters = () => {
            const filterContainers = document.querySelectorAll('.hide-scrollbar');
            filterContainers.forEach(container => {
                const buttons = container.querySelectorAll('button');
                buttons.forEach(btn => {
                    btn.addEventListener('click', () => {
                        // Reseta todos no mesmo container
                        buttons.forEach(b => {
                            b.classList.remove('bg-neutral-900', 'text-white');
                            b.classList.add('bg-white', 'text-neutral-600');
                        });
                        // Ativa o clicado
                        btn.classList.add('bg-neutral-900', 'text-white');
                        btn.classList.remove('bg-white', 'text-neutral-600');
                    });
                });
            });
        };

        // Init App
        document.addEventListener('DOMContentLoaded', () => {
            startCountdown();
            initBuyButtons();
            initFilters();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-[#FFE600] rounded-lg flex items-center justify-center">
<iconify-icon className="text-neutral-900 text-xl" icon="solar:bag-3-linear"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tighter text-neutral-900">ML<span className="text-neutral-500 font-medium">OFERTAS</span></span>
</div>

<div className="hidden md:flex flex-1 max-w-md mx-8">
<div className="relative w-full">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-neutral-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-neutral-200 rounded-full leading-5 bg-neutral-50 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-300 focus:ring-0 text-sm transition-colors" placeholder="Buscar produtos, marcas e muito mais..." type="text"/>
</div>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#categorias">Categorias</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#sec-relampago">Ofertas do Dia</a>
<button className="inline-flex items-center justify-center p-2 rounded-full text-neutral-600 hover:bg-neutral-100 transition-colors focus:outline-none" id="btn-open-filter" title="Filtros Globais">
<iconify-icon className="text-xl" icon="solar:filter-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center md:hidden">
<button className="text-neutral-500 hover:text-neutral-900 focus:outline-none" type="button">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative overflow-hidden bg-neutral-900 text-white pt-20 pb-32">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-b from-[#FFE600]/10 to-transparent blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-neutral-300 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-[#FFE600] animate-pulse"></span>
                Atualizado diariamente com as melhores ofertas
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white max-w-4xl mx-auto leading-tight mb-6">
                As Melhores Ofertas do Mercado Livre em <span className="text-[#FFE600]">Um Só Lugar</span>
</h1>
<p className="mt-4 max-w-2xl text-base md:text-lg text-neutral-400 mx-auto mb-10 font-normal">
                Navegue pelas nossas categorias selecionadas e encontre os itens mais vendidos, com maiores descontos e entrega rápida.
            </p>
</div>
</section>

<section className="py-12 bg-neutral-50 border-b border-neutral-200/60 -mt-16 relative z-20" id="categorias">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<a className="group flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl border border-neutral-200/60 shadow-sm hover:shadow-md hover:border-neutral-900 transition-all cursor-pointer" href="#sec-eletronicos">
<div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 transition-colors">
<iconify-icon className="text-2xl text-neutral-700 group-hover:text-white transition-colors" icon="solar:smartphone-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900">Eletrônicos</span>
</a>
<a className="group flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl border border-neutral-200/60 shadow-sm hover:shadow-md hover:border-neutral-900 transition-all cursor-pointer" href="#sec-casa">
<div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 transition-colors">
<iconify-icon className="text-2xl text-neutral-700 group-hover:text-white transition-colors" icon="solar:sofa-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900">Casa &amp; Decor</span>
</a>
<a className="group flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl border border-neutral-200/60 shadow-sm hover:shadow-md hover:border-neutral-900 transition-all cursor-pointer" href="#sec-moda">
<div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 transition-colors">
<iconify-icon className="text-2xl text-neutral-700 group-hover:text-white transition-colors" icon="solar:t-shirt-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900">Moda</span>
</a>
<a className="group flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl border border-neutral-200/60 shadow-sm hover:shadow-md hover:border-neutral-900 transition-all cursor-pointer" href="#sec-ferramentas">
<div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 transition-colors">
<iconify-icon className="text-2xl text-neutral-700 group-hover:text-white transition-colors" icon="solar:wrench-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900">Ferramentas</span>
</a>
<a className="group flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl border border-neutral-200/60 shadow-sm hover:shadow-md hover:border-neutral-900 transition-all cursor-pointer" href="#sec-tecnologia">
<div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 transition-colors">
<iconify-icon className="text-2xl text-neutral-700 group-hover:text-white transition-colors" icon="solar:monitor-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900">Tecnologia</span>
</a>
<a className="group flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl border border-neutral-200/60 shadow-sm hover:shadow-md hover:border-[#FFE600] transition-all cursor-pointer" href="#sec-relampago">
<div className="w-12 h-12 rounded-full bg-[#FFE600]/10 flex items-center justify-center group-hover:bg-[#FFE600] transition-colors">
<iconify-icon className="text-2xl text-[#d4c000] group-hover:text-neutral-900 transition-colors" icon="solar:bolt-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900">Relâmpago</span>
</a>
</div>
</div>
</section>

<section className="py-16 bg-[#FFE600]/5 border-b border-neutral-200/60" id="sec-relampago">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<div>
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-2xl text-[#d4c000]" icon="solar:bolt-circle-bold"></iconify-icon>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Ofertas Relâmpago</h2>
</div>
<p className="text-sm text-neutral-600">Descontos profundos por tempo limitado. Atualizado a cada hora.</p>
</div>

<div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-neutral-200 shadow-sm">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Termina em</span>
<div className="flex items-center gap-1 text-neutral-900 font-semibold" id="countdown-timer">
<span className="w-8 h-8 flex items-center justify-center bg-neutral-100 rounded">02</span>:
                        <span className="w-8 h-8 flex items-center justify-center bg-neutral-100 rounded">45</span>:
                        <span className="w-8 h-8 flex items-center justify-center bg-neutral-100 rounded">12</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col bg-white rounded-2xl border-2 border-[#FFE600]/30 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
<div className="absolute top-0 left-0 w-full h-1 bg-[#FFE600] z-20"></div>
<div className="relative aspect-square bg-neutral-100 p-6 flex items-center justify-center overflow-hidden">
<div className="absolute top-3 left-3 z-10">
<span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase bg-red-500 text-white">49% OFF</span>
</div>
<img alt="Lâmpada Inteligente" className="object-cover w-full h-full rounded-xl mix-blend-multiply group-hover:scale-105 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=500&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-2">
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-half-bold"></iconify-icon>
<span className="text-xs text-neutral-400 ml-1">(4.8)</span>
</div>
<h3 className="text-sm font-medium text-neutral-800 line-clamp-2 leading-tight mb-3">Lâmpada Inteligente Smart LED Wi-Fi RGB Compatível Alexa</h3>
<div className="mt-auto">
<div className="flex flex-col mb-4">
<span className="text-xs text-neutral-400 line-through">R$ 89</span>
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold text-red-500">R$ 45</span>
</div>
<span className="text-[11px] mt-1 text-green-600 font-medium">Frete Grátis</span>
</div>
<button className="buy-btn w-full flex items-center justify-center gap-2 py-3 px-4 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors">
                                Aproveitar Agora
                                <iconify-icon className="text-base" icon="solar:external-link-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border-2 border-[#FFE600]/30 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
<div className="absolute top-0 left-0 w-full h-1 bg-[#FFE600] z-20"></div>
<div className="relative aspect-square bg-neutral-100 p-6 flex items-center justify-center overflow-hidden">
<div className="absolute top-3 left-3 z-10">
<span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase bg-red-500 text-white">34% OFF</span>
</div>
<img alt="Furadeira Bateria" className="object-cover w-full h-full rounded-xl mix-blend-multiply group-hover:scale-105 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-2">
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-half-bold"></iconify-icon>
<span className="text-xs text-neutral-400 ml-1">(4.5)</span>
</div>
<h3 className="text-sm font-medium text-neutral-800 line-clamp-2 leading-tight mb-3">Furadeira Parafusadeira Bateria 12V Maleta e Acessórios</h3>
<div className="mt-auto">
<div className="flex flex-col mb-4">
<span className="text-xs text-neutral-400 line-through">R$ 229</span>
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold text-red-500">R$ 149</span>
</div>
<span className="text-[11px] mt-1 text-neutral-500">Chega amanhã</span>
</div>
<button className="buy-btn w-full flex items-center justify-center gap-2 py-3 px-4 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors">
                                Aproveitar Agora
                                <iconify-icon className="text-base" icon="solar:external-link-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-neutral-200/60 scroll-mt-16" id="sec-eletronicos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Eletrônicos</h2>
<p className="mt-2 text-sm text-neutral-500">Os eletrônicos mais vendidos e bem avaliados.</p>
</div>

<div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
<button className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-transparent rounded-full text-xs font-medium text-white whitespace-nowrap focus:outline-none">
                        Mais Vendidos
                    </button>
<button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-full text-xs font-medium text-neutral-600 hover:bg-neutral-50 transition-colors whitespace-nowrap focus:outline-none">
                        Menor Preço
                    </button>
<button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-full text-xs font-medium text-neutral-600 hover:bg-neutral-50 transition-colors whitespace-nowrap focus:outline-none">
                        Melhor Avaliação
                    </button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="relative aspect-square bg-neutral-100 p-6 flex items-center justify-center overflow-hidden">
<div className="absolute top-3 left-3 z-10">
<span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase border bg-blue-100 text-blue-800 border-blue-200">Mais Vendido</span>
</div>
<img alt="Smartphone" className="object-cover w-full h-full rounded-xl mix-blend-multiply group-hover:scale-105 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-2">
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-neutral-300" icon="solar:star-linear"></iconify-icon>
<span className="text-xs text-neutral-400 ml-1">(4.2)</span>
</div>
<h3 className="text-sm font-medium text-neutral-800 line-clamp-2 leading-tight mb-3">Smartphone G-Series 128GB Câmera 50MP Tela AMOLED 120Hz</h3>
<div className="mt-auto">
<div className="flex flex-col mb-4">
<span className="text-xs text-neutral-400 line-through">R$ 1.899</span>
<div className="flex items-baseline gap-1">
<span className="text-lg font-semibold text-neutral-900">R$ 1.499</span>
<span className="text-xs font-medium text-green-600">21% OFF</span>
</div>
<span className="text-[11px] mt-1 text-green-600 font-medium">Frete Grátis</span>
</div>
<button className="buy-btn w-full flex items-center justify-center gap-2 py-3 px-4 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors">
                                Comprar no Site
                                <iconify-icon className="text-base" icon="solar:external-link-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="relative aspect-square bg-neutral-100 p-6 flex items-center justify-center overflow-hidden">
<img alt="Smartwatch" className="object-cover w-full h-full rounded-xl mix-blend-multiply group-hover:scale-105 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1593998066526-65fcab3021a2?w=500&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-2">
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<span className="text-xs text-neutral-400 ml-1">(4.9)</span>
</div>
<h3 className="text-sm font-medium text-neutral-800 line-clamp-2 leading-tight mb-3">Relógio Smartwatch Esportivo GPS Monitor Cardíaco Pro</h3>
<div className="mt-auto">
<div className="flex flex-col mb-4">
<span className="text-xs text-neutral-400 line-through">R$ 599</span>
<div className="flex items-baseline gap-1">
<span className="text-lg font-semibold text-neutral-900">R$ 399</span>
<span className="text-xs font-medium text-green-600">33% OFF</span>
</div>
<span className="text-[11px] mt-1 text-neutral-500">Chega amanhã</span>
</div>
<button className="buy-btn w-full flex items-center justify-center gap-2 py-3 px-4 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors">
                                Comprar no Site
                            </button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="relative aspect-square bg-neutral-100 p-6 flex items-center justify-center overflow-hidden">
<div className="absolute top-3 left-3 z-10">
<span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase border bg-[#FFE600] text-neutral-900">Destaque</span>
</div>
<img alt="Fone de Ouvido" className="object-cover w-full h-full rounded-xl mix-blend-multiply group-hover:scale-105 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-2">
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-half-bold"></iconify-icon>
<span className="text-xs text-neutral-400 ml-1">(4.7)</span>
</div>
<h3 className="text-sm font-medium text-neutral-800 line-clamp-2 leading-tight mb-3">Fone de Ouvido Bluetooth Sem Fio Cancelamento de Ruído</h3>
<div className="mt-auto">
<div className="flex flex-col mb-4">
<span className="text-xs text-neutral-400 line-through">R$ 299</span>
<div className="flex items-baseline gap-1">
<span className="text-lg font-semibold text-neutral-900">R$ 189</span>
<span className="text-xs font-medium text-green-600">36% OFF</span>
</div>
<span className="text-[11px] mt-1 text-green-600 font-medium">Frete Grátis</span>
</div>
<button className="buy-btn w-full flex items-center justify-center gap-2 py-3 px-4 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors">
                                Comprar no Site
                            </button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="relative aspect-square bg-neutral-100 p-6 flex items-center justify-center overflow-hidden">
<img alt="Caixa de Som" className="object-cover w-full h-full rounded-xl mix-blend-multiply group-hover:scale-105 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=500&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex items-center gap-1 mb-2">
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-neutral-300" icon="solar:star-linear"></iconify-icon>
<span className="text-xs text-neutral-400 ml-1">(4.0)</span>
</div>
<h3 className="text-sm font-medium text-neutral-800 line-clamp-2 leading-tight mb-3">Caixa de Som Portátil Bluetooth Resistente à Água IPX7</h3>
<div className="mt-auto">
<div className="flex flex-col mb-4">
<span className="text-xs text-neutral-400 line-through">R$ 450</span>
<div className="flex items-baseline gap-1">
<span className="text-lg font-semibold text-neutral-900">R$ 299</span>
<span className="text-xs font-medium text-green-600">33% OFF</span>
</div>
<span className="text-[11px] mt-1 text-green-600 font-medium">Frete Grátis</span>
</div>
<button className="buy-btn w-full flex items-center justify-center gap-2 py-3 px-4 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors">
                                Comprar no Site
                            </button>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors" href="#">
                    Ver todos os eletrônicos no Mercado Livre
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-16 bg-neutral-50 border-b border-neutral-200/60 scroll-mt-16" id="sec-casa">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-10 text-center max-w-2xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Casa &amp; Decor</h2>
<p className="mt-2 text-sm text-neutral-500">Transforme sua casa com ofertas imperdíveis em decoração, organização e utilidades.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group flex flex-col bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="relative aspect-[16/9] bg-neutral-100 overflow-hidden">
<img alt="Poltrona Decorativa" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&amp;auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<div>
<span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-[10px] font-semibold text-white uppercase tracking-wide mb-2 inline-block">Móveis</span>
<h3 className="text-lg font-medium text-white leading-tight">Poltrona Decorativa Costela Lino Cinza</h3>
</div>
</div>
</div>
<div className="p-6 flex flex-col flex-1 bg-white">
<div className="flex items-center gap-1 mb-4">
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-half-bold"></iconify-icon>
<span className="text-xs text-neutral-400 ml-1">(4.6)</span>
</div>
<div className="mt-auto flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-neutral-400 line-through">R$ 890</span>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-neutral-900">R$ 549</span>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">38% OFF</span>
</div>
</div>
<button className="buy-btn flex items-center justify-center gap-2 py-3 px-6 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors">
                                Comprar
                            </button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="relative aspect-[16/9] bg-neutral-100 overflow-hidden">
<img alt="Kit Utensílios" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&amp;auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<div>
<span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-[10px] font-semibold text-white uppercase tracking-wide mb-2 inline-block">Cozinha</span>
<h3 className="text-lg font-medium text-white leading-tight">Kit Jogo Panelas Antiaderente Cerâmica 5 Peças</h3>
</div>
</div>
</div>
<div className="p-6 flex flex-col flex-1 bg-white">
<div className="flex items-center gap-1 mb-4">
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs text-[#FFE600]" icon="solar:star-bold"></iconify-icon>
<span className="text-xs text-neutral-400 ml-1">(4.9)</span>
</div>
<div className="mt-auto flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-neutral-400 line-through">R$ 499</span>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-neutral-900">R$ 299</span>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">40% OFF</span>
</div>
</div>
<button className="buy-btn flex items-center justify-center gap-2 py-3 px-6 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors">
                                Comprar
                            </button>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors shadow-md" href="#">
                    Comprar itens para casa com desconto
                </a>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-neutral-200/60 scroll-mt-16" id="sec-ferramentas">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Ferramentas</h2>
<p className="mt-2 text-sm text-neutral-500">Equipamentos de alta durabilidade para uso profissional e doméstico.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="relative aspect-square bg-neutral-100 p-6 flex items-center justify-center overflow-hidden">
<div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
<span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase bg-neutral-900 text-white">Alta Durabilidade</span>
</div>
<img alt="Maleta Ferramentas" className="object-cover w-full h-full rounded-xl mix-blend-multiply group-hover:scale-105 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-sm font-medium text-neutral-800 line-clamp-2 leading-tight mb-3">Kit Jogo de Chaves Maleta Profissional 110 Peças</h3>
<div className="mt-auto">
<div className="flex flex-col mb-4">
<div className="flex items-baseline gap-1">
<span className="text-lg font-semibold text-neutral-900">R$ 189</span>
</div>
<span className="text-[11px] mt-1 text-green-600 font-medium">Frete Grátis</span>
</div>
<button className="buy-btn w-full flex items-center justify-center gap-2 py-3 px-4 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors">
                                Comprar no Site
                            </button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="relative aspect-square bg-neutral-100 p-6 flex items-center justify-center overflow-hidden">
<div className="absolute top-3 left-3 z-10">
<span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase border bg-blue-100 text-blue-800 border-blue-200">Mais Vendido</span>
</div>
<img alt="Esmerilhadeira" className="object-cover w-full h-full rounded-xl mix-blend-multiply group-hover:scale-105 transition-transform duration-500" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-sm font-medium text-neutral-800 line-clamp-2 leading-tight mb-3">Esmerilhadeira Angular 4 1/2 Polegadas 850W</h3>
<div className="mt-auto">
<div className="flex flex-col mb-4">
<span className="text-xs text-neutral-400 line-through">R$ 350</span>
<div className="flex items-baseline gap-1">
<span className="text-lg font-semibold text-neutral-900">R$ 219</span>
<span className="text-xs font-medium text-green-600">37% OFF</span>
</div>
</div>
<button className="buy-btn w-full flex items-center justify-center gap-2 py-3 px-4 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors">
                                Comprar no Site
                            </button>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors" href="#">
                    Comprar ferramentas com melhor preço
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-16 bg-neutral-900 text-white border-b border-neutral-800 scroll-mt-16" id="sec-tecnologia">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Tecnologia</h2>
<p className="mt-2 text-sm text-neutral-400">Inovação, performance e conectividade levados ao limite.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden hover:border-neutral-500 transition-all duration-300">
<div className="relative aspect-square bg-neutral-900 p-6 flex items-center justify-center overflow-hidden">
<img alt="Notebook" className="object-cover w-full h-full rounded-xl mix-blend-screen group-hover:scale-105 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-sm font-medium text-neutral-100 line-clamp-2 leading-tight mb-3">Notebook UltraBook Pro 15" M2 8GB RAM 256GB SSD Prata</h3>
<div className="mt-auto">
<div className="flex flex-col mb-4">
<span className="text-xs text-neutral-500 line-through">R$ 5.999</span>
<div className="flex items-baseline gap-1">
<span className="text-lg font-semibold text-white">R$ 4.799</span>
<span className="text-xs font-medium text-[#FFE600]">15% OFF</span>
</div>
<span className="text-[11px] mt-1 text-neutral-400">Em até 10x sem juros</span>
</div>
<button className="buy-btn w-full flex items-center justify-center gap-2 py-3 px-4 bg-white text-neutral-900 rounded-xl text-sm font-medium hover:bg-neutral-200 transition-colors">
                                Ver Detalhes
                            </button>
</div>
</div>
</div>

<div className="group flex flex-col bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden hover:border-neutral-500 transition-all duration-300">
<div className="relative aspect-square bg-neutral-900 p-6 flex items-center justify-center overflow-hidden">
<img alt="Monitor Gamer" className="object-cover w-full h-full rounded-xl mix-blend-screen group-hover:scale-105 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-sm font-medium text-neutral-100 line-clamp-2 leading-tight mb-3">Monitor Gamer Curvo 27" 165Hz 1ms Full HD Freesync</h3>
<div className="mt-auto">
<div className="flex flex-col mb-4">
<span className="text-xs text-neutral-500 line-through">R$ 1.599</span>
<div className="flex items-baseline gap-1">
<span className="text-lg font-semibold text-white">R$ 1.199</span>
<span className="text-xs font-medium text-[#FFE600]">25% OFF</span>
</div>
</div>
<button className="buy-btn w-full flex items-center justify-center gap-2 py-3 px-4 bg-white text-neutral-900 rounded-xl text-sm font-medium hover:bg-neutral-200 transition-colors">
                                Ver Detalhes
                            </button>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-800 border border-neutral-700 rounded-full text-sm font-medium text-white hover:bg-neutral-700 transition-colors" href="#">
                    Explorar produtos de tecnologia
                    <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<div className="fixed inset-0 bg-neutral-900/40 z-[50] hidden opacity-0 transition-opacity duration-300 backdrop-blur-sm" id="drawer-overlay"></div>
<div className="fixed inset-y-0 right-0 z-[60] w-full max-w-sm bg-white shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col" id="filter-drawer">
<div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">Filtros Globais</h3>
<button className="text-neutral-400 hover:text-neutral-900 transition-colors p-1 rounded-full hover:bg-neutral-100 focus:outline-none" id="btn-close-filter">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-8">
<div>
<h4 className="text-sm font-semibold text-neutral-900 mb-4">Faixa de Preço</h4>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="custom-radio" name="priceRange" type="radio" value="all"/>
<span className="text-sm text-neutral-600 group-hover:text-neutral-900">Qualquer valor</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-radio" name="priceRange" type="radio" value="under100"/>
<span className="text-sm text-neutral-600 group-hover:text-neutral-900">Até R$ 100</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-radio" name="priceRange" type="radio" value="over500"/>
<span className="text-sm text-neutral-600 group-hover:text-neutral-900">Acima de R$ 500</span>
</label>
</div>
</div>
</div>
<div className="p-6 border-t border-neutral-100 bg-neutral-50 flex gap-3">
<button className="w-full py-3 px-4 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors focus:outline-none" id="btn-apply-filters">
                Salvar Preferências
            </button>
</div>
</div>



    </>
  );
}
