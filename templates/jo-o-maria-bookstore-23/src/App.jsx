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
      

<input checked="" className="hidden peer/route-home" id="route-home" name="main-route" type="radio"/>
<input className="hidden peer/route-gift" id="route-gift" name="main-route" type="radio"/>

<header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all">
<div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">

<label className="cursor-pointer" htmlFor="route-home">
<span className="text-xl font-medium tracking-tight text-gray-900 flex items-center gap-2">
<span className="w-8 h-8 rounded-full bg-[#FF5A5F] flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="book-heart" strokeWidth="1.5"></i>
</span>
                    JOÃO &amp; MARIA
                </span>
</label>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#categorias">Categorias</a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#destaques">Destaques</a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#promocoes">Promoções</a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#sobre">Sobre</a>

<label className="text-base text-[#FF5A5F] hover:text-[#E0484D] transition-colors cursor-pointer flex items-center gap-1.5 font-medium px-4 py-2 bg-red-50 rounded-full" htmlFor="route-gift">
<i className="w-4 h-4" data-lucide="gift" strokeWidth="1.5"></i> Vale-Presente
                </label>
</nav>

<input className="hidden peer/mobile" id="mobile-menu" type="checkbox"/>
<label className="lg:hidden p-2 -mr-2 cursor-pointer text-gray-900" htmlFor="mobile-menu">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</label>

<div className="fixed inset-0 bg-white z-40 transform translate-x-full peer-checked/mobile:translate-x-0 transition-transform duration-300 lg:hidden flex flex-col pt-24 px-6 pb-6">
<label className="absolute top-6 right-6 p-2 cursor-pointer text-gray-900" htmlFor="mobile-menu">
<i className="w-8 h-8" data-lucide="x" strokeWidth="1.5"></i>
</label>
<div className="flex flex-col gap-6 text-2xl font-normal tracking-tight text-gray-900">
<a href="#categorias" onclick="document.getElementById('mobile-menu').checked = false">Categorias</a>
<a href="#destaques" onclick="document.getElementById('mobile-menu').checked = false">Destaques</a>
<a href="#promocoes" onclick="document.getElementById('mobile-menu').checked = false">Promoções</a>
<a href="#sobre" onclick="document.getElementById('mobile-menu').checked = false">Sobre</a>
<label className="cursor-pointer text-[#FF5A5F] flex items-center gap-3 mt-4 bg-red-50 p-4 rounded-3xl" htmlFor="route-gift" onclick="document.getElementById('mobile-menu').checked = false">
<i className="w-6 h-6" data-lucide="gift" strokeWidth="1.5"></i> Vale-Presente
                    </label>
</div>
</div>
</div>
</header>



<main className="hidden peer-checked/route-home:block flex-grow pt-24">

<section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="relative w-full rounded-[40px] bg-[#FFF8F0] flex flex-col lg:flex-row items-center justify-between p-8 sm:p-12 lg:p-20 overflow-hidden shadow-sm border border-orange-50">

<div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#FFD166] rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
<div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#FF9F1C] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
<div className="absolute top-[20%] left-[40%] w-[300px] h-[300px] bg-[#4ECDC4] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

<div className="relative z-10 text-left max-w-2xl lg:pr-10 mb-12 lg:mb-0">
<span className="inline-block py-1.5 px-4 rounded-full bg-white text-[#FF9F1C] text-sm font-medium mb-6 shadow-sm border border-orange-100 flex items-center gap-2 w-max">
<i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5"></i> Novidades na loja
                    </span>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-gray-900 tracking-tight mb-6 leading-[1.1]">
                        Leitura e <span className="text-[#FF5A5F] font-medium">alegria</span> para a família.
                    </h1>
<p className="text-xl text-gray-600 font-normal mb-10 max-w-lg leading-relaxed">
                        Explore um mundo de livros, papelaria criativa e presentes inesquecíveis em São Gabriel da Cachoeira.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-4 bg-[#FF5A5F] text-white text-base font-medium rounded-full hover:bg-[#E0484D] transition-colors flex items-center justify-center gap-2 shadow-sm shadow-red-200" href="#destaques">
                            Ver destaques <i className="w-5 h-5" data-lucide="arrow-down" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 text-base font-medium rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm border border-gray-200" href="https://wa.me/5597999999999" target="_blank">
<i className="w-5 h-5 text-[#4ECDC4]" data-lucide="message-circle" strokeWidth="1.5"></i> Fale com a gente
                        </a>
</div>
</div>

<div className="relative z-10 w-full max-w-md lg:max-w-lg">
<div className="relative aspect-[4/5] rounded-[40px] rotate-3 bg-[#4ECDC4] transition-transform hover:rotate-6">
<img alt="Livro" className="absolute inset-0 w-full h-full object-cover rounded-[40px] -rotate-6 border-[8px] border-white shadow-xl origin-bottom-left" src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-lg flex items-center justify-center border border-gray-100">
<i className="w-8 h-8 text-[#FF5A5F] fill-[#FF5A5F]" data-lucide="heart" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-24" id="categorias">
<div className="flex flex-col gap-12">
<div className="text-center sm:text-left">
<h2 className="text-3xl font-normal tracking-tight text-gray-900 mb-2">Explore por categorias</h2>
<p className="text-lg text-gray-500">Encontre exatamente o que você procura.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

<div className="bg-[#FFF0F0] p-8 rounded-[32px] flex flex-col items-center sm:items-start gap-5 hover:-translate-y-1 transition-transform cursor-default">
<div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#FF5A5F] shadow-sm">
<i className="w-7 h-7" data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<div className="text-center sm:text-left">
<h3 className="text-xl font-normal text-gray-900 mb-2 tracking-tight">Livros Adultos</h3>
<p className="text-base text-gray-600 leading-relaxed">Best-sellers, autoajuda e ficção.</p>
</div>
</div>

<div className="bg-[#FFF9E6] p-8 rounded-[32px] flex flex-col items-center sm:items-start gap-5 hover:-translate-y-1 transition-transform cursor-default">
<div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#FF9F1C] shadow-sm">
<i className="w-7 h-7" data-lucide="baby" strokeWidth="1.5"></i>
</div>
<div className="text-center sm:text-left">
<h3 className="text-xl font-normal text-gray-900 mb-2 tracking-tight">Infantil</h3>
<p className="text-base text-gray-600 leading-relaxed">Histórias que encantam os pequenos.</p>
</div>
</div>

<div className="bg-[#EAF4F4] p-8 rounded-[32px] flex flex-col items-center sm:items-start gap-5 hover:-translate-y-1 transition-transform cursor-default">
<div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#4ECDC4] shadow-sm">
<i className="w-7 h-7" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<div className="text-center sm:text-left">
<h3 className="text-xl font-normal text-gray-900 mb-2 tracking-tight">Papelaria</h3>
<p className="text-base text-gray-600 leading-relaxed">Cadernos, canetas e organização.</p>
</div>
</div>

<div className="bg-[#F4F0FF] p-8 rounded-[32px] flex flex-col items-center sm:items-start gap-5 hover:-translate-y-1 transition-transform cursor-default">
<div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#9D4EDD] shadow-sm">
<i className="w-7 h-7" data-lucide="gift" strokeWidth="1.5"></i>
</div>
<div className="text-center sm:text-left">
<h3 className="text-xl font-normal text-gray-900 mb-2 tracking-tight">Presentes</h3>
<p className="text-base text-gray-600 leading-relaxed">Canecas e itens especiais.</p>
</div>
</div>

<div className="bg-[#F0F8EC] p-8 rounded-[32px] flex flex-col items-center sm:items-start gap-5 hover:-translate-y-1 transition-transform cursor-default">
<div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#2D6A4F] shadow-sm">
<i className="w-7 h-7" data-lucide="gamepad-2" strokeWidth="1.5"></i>
</div>
<div className="text-center sm:text-left">
<h3 className="text-xl font-normal text-gray-900 mb-2 tracking-tight">Brinquedos</h3>
<p className="text-base text-gray-600 leading-relaxed">Diversão para todas as idades.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-100" id="destaques">
<div className="flex flex-col gap-12">
<h2 className="text-3xl font-normal tracking-tight text-gray-900 text-center sm:text-left">Destaques da Semana</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-x-6 gap-y-12">

<div className="group flex flex-col gap-4">
<div className="relative aspect-[4/5] bg-gray-100 rounded-[24px] overflow-hidden shadow-sm">
<span className="absolute top-3 left-3 bg-[#4ECDC4] text-white text-xs font-normal tracking-wider uppercase px-3 py-1 rounded-full z-10 shadow-sm">Novo</span>
<img alt="Livro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-1 px-1">
<p className="text-sm font-normal text-gray-400 uppercase tracking-wider">Livros</p>
<h3 className="text-lg font-normal text-gray-900 leading-tight">A Biblioteca da Meia-Noite</h3>
<p className="text-base font-medium text-gray-900 mt-1">R$ 59,90</p>
</div>
<a className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-full text-sm font-normal text-gray-900 text-center hover:bg-[#FF5A5F] hover:text-white hover:border-[#FF5A5F] transition-colors mt-auto" href="https://wa.me/5597999999999" target="_blank">
                            Pedir no WhatsApp
                        </a>
</div>

<div className="group flex flex-col gap-4">
<div className="relative aspect-[4/5] bg-gray-100 rounded-[24px] overflow-hidden shadow-sm">
<span className="absolute top-3 left-3 bg-[#FF9F1C] text-white text-xs font-normal tracking-wider uppercase px-3 py-1 rounded-full z-10 shadow-sm">Em alta</span>
<img alt="Caderno" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-1 px-1">
<p className="text-sm font-normal text-gray-400 uppercase tracking-wider">Papelaria</p>
<h3 className="text-lg font-normal text-gray-900 leading-tight">Caderno Inteligente A5</h3>
<p className="text-base font-medium text-gray-900 mt-1">R$ 84,90</p>
</div>
<a className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-full text-sm font-normal text-gray-900 text-center hover:bg-[#FF5A5F] hover:text-white hover:border-[#FF5A5F] transition-colors mt-auto" href="https://wa.me/5597999999999" target="_blank">
                            Pedir no WhatsApp
                        </a>
</div>

<div className="group flex flex-col gap-4">
<div className="relative aspect-[4/5] bg-gray-100 rounded-[24px] overflow-hidden shadow-sm">
<img alt="Caneca" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-1 px-1">
<p className="text-sm font-normal text-gray-400 uppercase tracking-wider">Presentes</p>
<h3 className="text-lg font-normal text-gray-900 leading-tight">Caneca Cerâmica Artesanal</h3>
<p className="text-base font-medium text-gray-900 mt-1">R$ 45,00</p>
</div>
<a className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-full text-sm font-normal text-gray-900 text-center hover:bg-[#FF5A5F] hover:text-white hover:border-[#FF5A5F] transition-colors mt-auto" href="https://wa.me/5597999999999" target="_blank">
                            Pedir no WhatsApp
                        </a>
</div>

<div className="group flex flex-col gap-4">
<div className="relative aspect-[4/5] bg-gray-100 rounded-[24px] overflow-hidden shadow-sm">
<img alt="Brinquedo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-1 px-1">
<p className="text-sm font-normal text-gray-400 uppercase tracking-wider">Brinquedos</p>
<h3 className="text-lg font-normal text-gray-900 leading-tight">Kit Monta Tudo Madeira</h3>
<p className="text-base font-medium text-gray-900 mt-1">R$ 120,00</p>
</div>
<a className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-full text-sm font-normal text-gray-900 text-center hover:bg-[#FF5A5F] hover:text-white hover:border-[#FF5A5F] transition-colors mt-auto" href="https://wa.me/5597999999999" target="_blank">
                            Pedir no WhatsApp
                        </a>
</div>

<div className="group flex flex-col gap-4 hidden sm:flex">
<div className="relative aspect-[4/5] bg-gray-100 rounded-[24px] overflow-hidden shadow-sm">
<img alt="Agenda" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-1 px-1">
<p className="text-sm font-normal text-gray-400 uppercase tracking-wider">Papelaria</p>
<h3 className="text-lg font-normal text-gray-900 leading-tight">Agenda Planner Anual</h3>
<p className="text-base font-medium text-gray-900 mt-1">R$ 75,50</p>
</div>
<a className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-full text-sm font-normal text-gray-900 text-center hover:bg-[#FF5A5F] hover:text-white hover:border-[#FF5A5F] transition-colors mt-auto" href="https://wa.me/5597999999999" target="_blank">
                            Pedir no WhatsApp
                        </a>
</div>

<div className="group flex flex-col gap-4 hidden xl:flex">
<div className="relative aspect-[4/5] bg-gray-100 rounded-[24px] overflow-hidden shadow-sm">
<img alt="Livro Infantil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544716278-e513176f20b5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-1 px-1">
<p className="text-sm font-normal text-gray-400 uppercase tracking-wider">Infantil</p>
<h3 className="text-lg font-normal text-gray-900 leading-tight">O Pequeno Príncipe</h3>
<p className="text-base font-medium text-gray-900 mt-1">R$ 39,90</p>
</div>
<a className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-full text-sm font-normal text-gray-900 text-center hover:bg-[#FF5A5F] hover:text-white hover:border-[#FF5A5F] transition-colors mt-auto" href="https://wa.me/5597999999999" target="_blank">
                            Pedir no WhatsApp
                        </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-r from-[#FFF4F4] via-[#F4F6FF] to-[#F4FFF8]" id="promocoes">
<div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col gap-12">
<div className="text-center sm:text-left">
<h2 className="text-3xl font-normal tracking-tight text-gray-900 mb-2">Ofertas Especiais</h2>
<p className="text-lg text-gray-500">Aproveite descontos imperdíveis essa semana.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white p-5 rounded-[32px] flex gap-5 items-center shadow-sm hover:shadow-md transition-shadow">
<div className="w-24 h-24 bg-gray-50 rounded-[20px] flex-shrink-0 overflow-hidden relative">
<span className="absolute top-2 left-2 bg-[#FF5A5F] text-white text-xs font-medium tracking-wider uppercase px-2 py-1 rounded-full z-10 shadow-sm">-20%</span>
<img alt="Mochila" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-between h-full py-1">
<div>
<h3 className="text-base font-normal text-gray-900 leading-tight mb-2">Mochila Escolar Casual</h3>
<div className="flex items-center gap-2">
<span className="text-sm text-gray-400 line-through">R$ 150</span>
<span className="text-base font-medium text-[#FF5A5F]">R$ 120</span>
</div>
</div>
<a className="text-sm font-medium text-[#4ECDC4] hover:text-[#3dbdb4] flex items-center gap-1 mt-3" href="https://wa.me/5597999999999">
                                    Aproveitar <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
</div>
</div>

<div className="group bg-white p-5 rounded-[32px] flex gap-5 items-center shadow-sm hover:shadow-md transition-shadow">
<div className="w-24 h-24 bg-gray-50 rounded-[20px] flex-shrink-0 overflow-hidden relative">
<span className="absolute top-2 left-2 bg-[#FF5A5F] text-white text-xs font-medium tracking-wider uppercase px-2 py-1 rounded-full z-10 shadow-sm">-15%</span>
<img alt="Canetas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1583485088034-697b5a62483c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-between h-full py-1">
<div>
<h3 className="text-base font-normal text-gray-900 leading-tight mb-2">Kit 10 Canetas Gel</h3>
<div className="flex items-center gap-2">
<span className="text-sm text-gray-400 line-through">R$ 55</span>
<span className="text-base font-medium text-[#FF5A5F]">R$ 46</span>
</div>
</div>
<a className="text-sm font-medium text-[#4ECDC4] hover:text-[#3dbdb4] flex items-center gap-1 mt-3" href="https://wa.me/5597999999999">
                                    Aproveitar <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
</div>
</div>

<div className="group bg-white p-5 rounded-[32px] flex gap-5 items-center shadow-sm hover:shadow-md transition-shadow">
<div className="w-24 h-24 bg-gray-50 rounded-[20px] flex-shrink-0 overflow-hidden relative">
<span className="absolute top-2 left-2 bg-[#FF5A5F] text-white text-xs font-medium tracking-wider uppercase px-2 py-1 rounded-full z-10 shadow-sm">-30%</span>
<img alt="Box Livros" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-between h-full py-1">
<div>
<h3 className="text-base font-normal text-gray-900 leading-tight mb-2">Box Senhor dos Anéis</h3>
<div className="flex items-center gap-2">
<span className="text-sm text-gray-400 line-through">R$ 180</span>
<span className="text-base font-medium text-[#FF5A5F]">R$ 126</span>
</div>
</div>
<a className="text-sm font-medium text-[#4ECDC4] hover:text-[#3dbdb4] flex items-center gap-1 mt-3" href="https://wa.me/5597999999999">
                                    Aproveitar <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
</div>
</div>

<div className="group bg-white p-5 rounded-[32px] flex gap-5 items-center shadow-sm hover:shadow-md transition-shadow">
<div className="w-24 h-24 bg-gray-50 rounded-[20px] flex-shrink-0 overflow-hidden relative">
<span className="absolute top-2 left-2 bg-[#FF5A5F] text-white text-xs font-medium tracking-wider uppercase px-2 py-1 rounded-full z-10 shadow-sm">-10%</span>
<img alt="Luminária" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-between h-full py-1">
<div>
<h3 className="text-base font-normal text-gray-900 leading-tight mb-2">Luminária de Mesa</h3>
<div className="flex items-center gap-2">
<span className="text-sm text-gray-400 line-through">R$ 89</span>
<span className="text-base font-medium text-[#FF5A5F]">R$ 80</span>
</div>
</div>
<a className="text-sm font-medium text-[#4ECDC4] hover:text-[#3dbdb4] flex items-center gap-1 mt-3" href="https://wa.me/5597999999999">
                                    Aproveitar <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
<div className="bg-gradient-to-br from-[#FF9F1C] to-[#FF5A5F] rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-lg">

<div className="absolute -top-10 -right-10 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
<div className="absolute bottom-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full blur-xl"></div>
<div className="max-w-xl relative z-10 text-center md:text-left">
<h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-white mb-6">Surpreenda com um Vale-Presente</h2>
<p className="text-lg text-white/90 mb-10 leading-relaxed font-light">
                        Deixe a pessoa escolher o presente perfeito. Compre digitalmente e envie na hora pelo WhatsApp com uma mensagem personalizada.
                    </p>
<label className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#FF5A5F] text-base font-medium rounded-full hover:scale-105 transition-transform cursor-pointer gap-2 shadow-md" htmlFor="route-gift">
                        Criar Presente Agora <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="2"></i>
</label>
</div>

<div className="relative z-10 flex-shrink-0 rotate-3 transform transition-transform hover:rotate-6">
<div className="w-72 h-48 bg-gradient-to-tr from-[#FFE8E8] to-white rounded-[24px] p-6 flex flex-col justify-between shadow-2xl border-4 border-white">
<div className="flex justify-between items-start">
<span className="font-medium tracking-tight text-base text-gray-900">JOÃO &amp; MARIA</span>
<i className="text-[#FF5A5F] w-8 h-8" data-lucide="gift" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-medium">Vale-Presente Digital</p>
<p className="text-3xl font-medium text-gray-900 tracking-tight">R$ 150,00</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-100" id="sobre">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="flex flex-col gap-10">
<div>
<h2 className="text-3xl font-normal tracking-tight text-gray-900 mb-6">Nossa História</h2>
<p className="text-lg text-gray-600 leading-relaxed">
                            Há mais de 10 anos, somos o ponto de encontro para quem busca cultura, organização e presentes criativos em São Gabriel da Cachoeira. Nossa missão é fomentar o aprendizado e tornar momentos especiais ainda mais coloridos e inesquecíveis.
                        </p>
</div>
<div className="flex flex-col gap-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-[16px] bg-[#FFF0F0] flex items-center justify-center flex-shrink-0 text-[#FF5A5F]">
<i className="w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div className="pt-1">
<h4 className="text-base font-medium text-gray-900 mb-1">Endereço</h4>
<p className="text-base text-gray-500 leading-relaxed">Av. Presidente Castelo Branco, 123 - Centro<br/>São Gabriel da Cachoeira – AM</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-[16px] bg-[#FFF9E6] flex items-center justify-center flex-shrink-0 text-[#FF9F1C]">
<i className="w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div className="pt-1">
<h4 className="text-base font-medium text-gray-900 mb-1">Funcionamento</h4>
<p className="text-base text-gray-500 leading-relaxed">Segunda a Sexta: 08h às 18h<br/>Sábados: 08h às 13h</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-[16px] bg-[#EAF4F4] flex items-center justify-center flex-shrink-0 text-[#4ECDC4]">
<i className="w-6 h-6" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div className="pt-1">
<h4 className="text-base font-medium text-gray-900 mb-1">Contato</h4>
<p className="text-base text-gray-500">(97) 99999-9999</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">
<h2 className="text-3xl font-normal tracking-tight text-gray-900">Como chegar</h2>
<div className="w-full h-80 bg-gray-100 rounded-[32px] overflow-hidden border border-gray-200 shadow-sm relative">
<iframe allowfullscreen="" className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-multiply" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.818468725838!2d-67.08630072428581!3d-0.12879559986985167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x921869e5917deed3%3A0xcb165f9bf281d2df!2zU8OjbyBHYWJyaWVsIGRhIENhY2hvZWlyYSwgQU0!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" style={{border: '0'}} width="100%"></iframe>
</div>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-200 text-gray-900 text-base font-medium rounded-full hover:bg-gray-50 hover:shadow-sm transition-all self-start gap-2" href="https://maps.google.com" target="_blank">
                        Abrir no Google Maps <i className="w-5 h-5 text-gray-400" data-lucide="external-link" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>
</main>



<main className="hidden peer-checked/route-gift:block flex-grow pt-28 pb-24 bg-[#FAFAFA] min-h-screen">
<div className="max-w-[800px] mx-auto px-4 sm:px-6">

<label className="inline-flex items-center gap-2 text-base text-gray-500 hover:text-[#FF5A5F] cursor-pointer mb-10 transition-colors" htmlFor="route-home">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i> Voltar para a loja
            </label>

<div className="mb-12 text-center">
<h1 className="text-4xl font-normal tracking-tight text-gray-900 mb-3">Monte seu Presente</h1>
<p className="text-base text-gray-500">Personalize e envie digitalmente em minutos.</p>
</div>

<input checked="" className="hidden peer/step-1" id="step-1" name="gift-step" type="radio"/>
<input className="hidden peer/step-2" id="step-2" name="gift-step" type="radio"/>
<input className="hidden peer/step-3" id="step-3" name="gift-step" type="radio"/>
<input className="hidden peer/step-4" id="step-4" name="gift-step" type="radio"/>

<div className="flex items-center justify-center gap-3 sm:gap-6 mb-12">
<div className="flex items-center gap-2 text-gray-900 font-medium text-sm sm:text-base">
<span className="w-8 h-8 rounded-full bg-[#FF5A5F] text-white flex items-center justify-center text-xs">1</span> Valor
                </div>
<div className="w-12 h-px bg-gray-300"></div>
<div className="flex items-center gap-2 text-gray-400 peer-checked/step-2:text-gray-900 peer-checked/step-3:text-gray-900 peer-checked/step-4:text-gray-900 font-medium text-sm sm:text-base transition-colors duration-300">
<span className="w-8 h-8 rounded-full border-2 border-gray-300 peer-checked/step-2:bg-[#FF5A5F] peer-checked/step-2:text-white peer-checked/step-2:border-[#FF5A5F] peer-checked/step-3:bg-[#FF5A5F] peer-checked/step-3:text-white peer-checked/step-3:border-[#FF5A5F] peer-checked/step-4:bg-[#FF5A5F] peer-checked/step-4:text-white peer-checked/step-4:border-[#FF5A5F] flex items-center justify-center text-xs transition-colors duration-300">2</span> Design
                </div>
<div className="w-12 h-px bg-gray-300"></div>
<div className="flex items-center gap-2 text-gray-400 peer-checked/step-3:text-gray-900 peer-checked/step-4:text-gray-900 font-medium text-sm sm:text-base transition-colors duration-300">
<span className="w-8 h-8 rounded-full border-2 border-gray-300 peer-checked/step-3:bg-[#FF5A5F] peer-checked/step-3:text-white peer-checked/step-3:border-[#FF5A5F] peer-checked/step-4:bg-[#FF5A5F] peer-checked/step-4:text-white peer-checked/step-4:border-[#FF5A5F] flex items-center justify-center text-xs transition-colors duration-300">3</span> Pagamento
                </div>
</div>

<div className="bg-white rounded-[40px] p-8 sm:p-12 shadow-sm border border-gray-100 relative overflow-hidden">

<div className="hidden peer-checked/step-1:block">
<h2 className="text-2xl font-normal tracking-tight text-gray-900 mb-8">Qual valor deseja presentear?</h2>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-10">
<label className="cursor-pointer group">
<input checked="" className="peer hidden" name="gift-value" type="radio"/>
<div className="px-4 py-8 border-2 border-gray-200 rounded-[24px] text-center peer-checked:border-[#FF5A5F] peer-checked:bg-[#FFF0F0] peer-checked:text-[#FF5A5F] transition-all group-hover:border-gray-300">
<span className="text-2xl font-medium text-inherit">R$ 50</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer hidden" name="gift-value" type="radio"/>
<div className="px-4 py-8 border-2 border-gray-200 rounded-[24px] text-center peer-checked:border-[#FF5A5F] peer-checked:bg-[#FFF0F0] peer-checked:text-[#FF5A5F] transition-all group-hover:border-gray-300">
<span className="text-2xl font-medium text-inherit">R$ 100</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer hidden" name="gift-value" type="radio"/>
<div className="px-4 py-8 border-2 border-gray-200 rounded-[24px] text-center peer-checked:border-[#FF5A5F] peer-checked:bg-[#FFF0F0] peer-checked:text-[#FF5A5F] transition-all group-hover:border-gray-300">
<span className="text-2xl font-medium text-inherit">R$ 150</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer hidden" name="gift-value" type="radio"/>
<div className="px-4 py-8 border-2 border-gray-200 rounded-[24px] text-center peer-checked:border-[#FF5A5F] peer-checked:bg-[#FFF0F0] peer-checked:text-[#FF5A5F] transition-all group-hover:border-gray-300">
<span className="text-2xl font-medium text-inherit">R$ 200</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer hidden" name="gift-value" type="radio"/>
<div className="px-4 py-8 border-2 border-gray-200 rounded-[24px] text-center peer-checked:border-[#FF5A5F] peer-checked:bg-[#FFF0F0] peer-checked:text-[#FF5A5F] transition-all group-hover:border-gray-300">
<span className="text-2xl font-medium text-inherit">R$ 300</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer hidden" name="gift-value" type="radio"/>
<div className="px-4 py-8 border-2 border-gray-200 rounded-[24px] text-center peer-checked:border-[#FF5A5F] peer-checked:bg-[#FFF0F0] peer-checked:text-[#FF5A5F] transition-all group-hover:border-gray-300 flex flex-col items-center justify-center gap-1">
<span className="text-lg font-medium text-inherit leading-none mt-1">Outro</span>
<span className="text-xs text-gray-400">Personalizar</span>
</div>
</label>
</div>
<div className="flex justify-end pt-4">
<label className="px-10 py-4 bg-gray-900 text-white text-base font-medium rounded-full hover:bg-gray-800 transition-colors cursor-pointer inline-flex items-center gap-2 shadow-md" htmlFor="step-2">
                            Próximo Passo <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="2"></i>
</label>
</div>
</div>

<div className="hidden peer-checked/step-2:block">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="flex flex-col gap-8">
<h2 className="text-2xl font-normal tracking-tight text-gray-900">Personalize o visual</h2>
<div>
<label className="block text-base font-medium text-gray-700 mb-3">Ocasião</label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer">
<input checked="" className="peer hidden" name="gift-theme" type="radio"/>
<span className="inline-block px-5 py-3 border border-gray-200 bg-gray-50 rounded-full text-sm font-medium text-gray-600 peer-checked:bg-[#FF9F1C] peer-checked:text-white peer-checked:border-[#FF9F1C] transition-colors shadow-sm">🎂 Aniversário</span>
</label>
<label className="cursor-pointer">
<input className="peer hidden" name="gift-theme" type="radio"/>
<span className="inline-block px-5 py-3 border border-gray-200 bg-gray-50 rounded-full text-sm font-medium text-gray-600 peer-checked:bg-[#4ECDC4] peer-checked:text-white peer-checked:border-[#4ECDC4] transition-colors shadow-sm">💝 Amor</span>
</label>
<label className="cursor-pointer">
<input className="peer hidden" name="gift-theme" type="radio"/>
<span className="inline-block px-5 py-3 border border-gray-200 bg-gray-50 rounded-full text-sm font-medium text-gray-600 peer-checked:bg-[#9D4EDD] peer-checked:text-white peer-checked:border-[#9D4EDD] transition-colors shadow-sm">🎓 Parabéns</span>
</label>
</div>
</div>
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">De:</label>
<input className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-[16px] text-base text-gray-900 focus:border-[#FF5A5F] focus:ring-1 focus:ring-[#FF5A5F] focus:outline-none transition-all" placeholder="Seu nome" type="text" value="João"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Para:</label>
<input className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-[16px] text-base text-gray-900 focus:border-[#FF5A5F] focus:ring-1 focus:ring-[#FF5A5F] focus:outline-none transition-all" placeholder="Nome do presenteado" type="text" value="Maria"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2 flex justify-between">Mensagem especial <span className="text-xs text-gray-400 font-normal mt-0.5">Opcional</span></label>
<textarea className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-[16px] text-base text-gray-900 resize-none focus:border-[#FF5A5F] focus:ring-1 focus:ring-[#FF5A5F] focus:outline-none transition-all" rows="3">Feliz aniversário! Aproveite muito o seu dia.</textarea>
</div>
</div>

<div className="flex flex-col gap-4 pt-2">
<span className="text-sm font-medium text-gray-400 hidden md:block">Pré-visualização do Cartão</span>
<div className="w-full aspect-[4/3] bg-gradient-to-br from-[#FFD166] to-[#FF9F1C] rounded-[24px] p-8 flex flex-col justify-between shadow-xl relative overflow-hidden border-4 border-white/40">
<div className="absolute top-0 right-0 p-6 opacity-20 transform rotate-12 scale-150">
<i className="w-32 h-32 text-white" data-lucide="party-popper" strokeWidth="1"></i>
</div>
<div className="relative z-10 flex justify-between items-start text-white">
<span className="font-medium tracking-tight text-base bg-black/10 px-3 py-1 rounded-full backdrop-blur-sm">JOÃO &amp; MARIA</span>
<i className="w-6 h-6" data-lucide="gift" strokeWidth="2"></i>
</div>
<div className="relative z-10 text-white mt-auto">
<p className="text-4xl font-medium tracking-tight mb-6">R$ 100,00</p>
<p className="text-base font-medium opacity-90">Para: Maria</p>
<p className="text-base font-medium opacity-90 mb-3">De: João</p>
<p className="text-sm italic opacity-80 leading-snug">"Feliz aniversário! Aproveite muito o seu dia."</p>
</div>
</div>
</div>
</div>
<div className="flex justify-between mt-12 pt-8 border-t border-gray-100">
<label className="px-8 py-4 bg-gray-50 text-gray-600 text-base font-medium rounded-full hover:bg-gray-100 transition-colors cursor-pointer inline-flex items-center gap-2" htmlFor="step-1">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="2"></i> Voltar
                        </label>
<label className="px-10 py-4 bg-gray-900 text-white text-base font-medium rounded-full hover:bg-gray-800 transition-colors cursor-pointer inline-flex items-center gap-2 shadow-md" htmlFor="step-3">
                            Ir para Pagamento <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="2"></i>
</label>
</div>
</div>

<div className="hidden peer-checked/step-3:block">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="flex flex-col gap-6">
<h2 className="text-2xl font-normal tracking-tight text-gray-900 mb-2">Detalhes da compra</h2>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Nome completo</label>
<input className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-[16px] text-base text-gray-900 focus:border-[#4ECDC4] focus:ring-1 focus:ring-[#4ECDC4] focus:outline-none transition-all" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
<input className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-[16px] text-base text-gray-900 focus:border-[#4ECDC4] focus:ring-1 focus:ring-[#4ECDC4] focus:outline-none transition-all" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
<input className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-[16px] text-base text-gray-900 focus:border-[#4ECDC4] focus:ring-1 focus:ring-[#4ECDC4] focus:outline-none transition-all" type="tel"/>
</div>
</div>
</div>

<div className="bg-[#F4F8FB] rounded-[32px] p-8 flex flex-col h-full border border-blue-50 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl -mr-10 -mt-10"></div>
<h3 className="text-xl font-normal tracking-tight text-gray-900 mb-6 relative z-10">Resumo do pedido</h3>
<div className="flex flex-col gap-4 flex-grow relative z-10">
<div className="flex justify-between items-center text-base">
<span className="text-gray-500">Vale-Presente Digital</span>
<span className="font-medium text-gray-900">R$ 100,00</span>
</div>
<div className="flex justify-between items-center text-base">
<span className="text-gray-500">Tema</span>
<span className="text-gray-900">Aniversário</span>
</div>
<div className="w-full h-px bg-blue-100 my-2"></div>
<div className="flex justify-between items-center text-lg font-medium">
<span className="text-gray-900">Total a pagar</span>
<span className="text-[#FF5A5F] text-2xl tracking-tight">R$ 100,00</span>
</div>
</div>
<div className="mt-8 relative z-10">
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center mt-0.5">
<input className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-[6px] checked:bg-[#4ECDC4] checked:border-[#4ECDC4] transition-all cursor-pointer" type="checkbox"/>
<i className="w-3 h-3 text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-sm text-gray-500 leading-snug group-hover:text-gray-700 transition-colors">Concordo com os Termos de Uso e Política de Privacidade.</span>
</label>
</div>
</div>
</div>
<div className="flex justify-between mt-12 pt-8 border-t border-gray-100">
<label className="px-8 py-4 bg-gray-50 text-gray-600 text-base font-medium rounded-full hover:bg-gray-100 transition-colors cursor-pointer inline-flex items-center gap-2" htmlFor="step-2">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="2"></i> Voltar
                        </label>

<label className="px-10 py-4 bg-[#4ECDC4] text-white text-base font-medium rounded-full hover:bg-[#3dbdb4] transition-all cursor-pointer inline-flex items-center gap-2 shadow-lg shadow-teal-100 hover:-translate-y-0.5" htmlFor="step-4">
                            Pagar com PIX <i className="w-5 h-5" data-lucide="banknote" strokeWidth="2"></i>
</label>
</div>
</div>

<div className="hidden peer-checked/step-4:block text-center py-12">
<div className="w-24 h-24 bg-green-50 text-[#4ECDC4] rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
<i className="w-12 h-12" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<h2 className="text-4xl font-normal tracking-tight text-gray-900 mb-3">Tudo certo! 🎉</h2>
<p className="text-lg text-gray-500 mb-12">O Vale-Presente foi gerado e está pronto para encantar.</p>

<div className="max-w-md mx-auto w-full aspect-[16/9] bg-gradient-to-br from-[#FFD166] to-[#FF9F1C] rounded-[32px] p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden mb-12 text-left border-4 border-white">
<div className="absolute top-0 right-0 p-6 opacity-20 transform rotate-12 scale-150">
<i className="w-32 h-32 text-white" data-lucide="party-popper" strokeWidth="1"></i>
</div>
<div className="relative z-10 flex justify-between items-start">
<span className="font-medium tracking-tight text-base text-white bg-black/10 px-3 py-1 rounded-full backdrop-blur-sm">JOÃO &amp; MARIA</span>
<div className="bg-white px-4 py-1.5 rounded-full shadow-sm">
<span className="font-mono text-sm font-medium tracking-widest text-gray-900">JM-8X9P</span>
</div>
</div>
<div className="relative z-10 text-white mt-auto">
<p className="text-4xl font-medium tracking-tight mb-4">R$ 100,00</p>
<div className="flex justify-between items-end">
<div>
<p className="text-base font-medium opacity-90">Para: Maria</p>
<p className="text-sm italic opacity-80 mt-1">"Feliz aniversário!..."</p>
</div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-10 py-4 bg-[#FF5A5F] text-white text-base font-medium rounded-full hover:bg-[#E0484D] transition-all shadow-md inline-flex items-center justify-center gap-2" href="https://wa.me/?text=Oi!%20Comprei%20um%20Vale-Presente%20para%20você.%20Código:%20JM-8X9P" target="_blank">
<i className="w-5 h-5" data-lucide="send" strokeWidth="2"></i> Enviar por WhatsApp
                        </a>
<label className="w-full sm:w-auto px-10 py-4 bg-white border border-gray-200 text-gray-900 text-base font-medium rounded-full hover:bg-gray-50 transition-colors cursor-pointer inline-flex items-center justify-center gap-2" htmlFor="route-home">
                            Voltar ao início
                        </label>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-gray-100 pt-20 pb-10 mt-auto">
<div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="flex flex-col gap-6 md:col-span-2">
<span className="text-xl font-medium tracking-tight text-gray-900 flex items-center gap-2">
<span className="w-8 h-8 rounded-full bg-[#FF5A5F] flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="book-heart" strokeWidth="1.5"></i>
</span>
                        JOÃO &amp; MARIA
                    </span>
<p className="text-base text-gray-500 max-w-sm leading-relaxed">
                        Leitura, aprendizado e presentes que espalham alegria em São Gabriel da Cachoeira – AM.
                    </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Loja</h4>
<a className="text-base text-gray-600 hover:text-[#FF5A5F] transition-colors" href="#categorias">Categorias</a>
<a className="text-base text-gray-600 hover:text-[#FF5A5F] transition-colors" href="#destaques">Destaques</a>
<a className="text-base text-gray-600 hover:text-[#FF5A5F] transition-colors" href="#promocoes">Promoções</a>
<label className="text-base text-[#FF5A5F] hover:text-[#E0484D] cursor-pointer transition-colors" htmlFor="route-gift">Vale-Presente</label>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Conecte-se</h4>
<a className="text-base text-gray-600 hover:text-[#FF5A5F] transition-colors flex items-center gap-2" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i> Instagram
                    </a>
<a className="text-base text-gray-600 hover:text-[#4ECDC4] transition-colors flex items-center gap-2" href="https://wa.me/5597999999999" target="_blank">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i> WhatsApp
                    </a>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-100 gap-4">
<p className="text-sm text-gray-400">© 2025 João &amp; Maria. Espalhando alegria.</p>
<div className="flex items-center gap-6 text-sm text-gray-400">
<a className="hover:text-gray-900 transition-colors" href="#">Termos</a>
<a className="hover:text-gray-900 transition-colors" href="#">Privacidade</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-8 right-8 w-16 h-16 bg-[#4ECDC4] text-white rounded-full shadow-xl shadow-teal-200 flex items-center justify-center hover:scale-105 hover:-translate-y-1 transition-all z-50 group" href="https://wa.me/5597999999999" target="_blank">
<span className="absolute w-full h-full rounded-full bg-[#4ECDC4] opacity-40 animate-ping"></span>
<i className="w-8 h-8 relative z-10 group-hover:rotate-12 transition-transform" data-lucide="message-circle" strokeWidth="1.5"></i>
</a>


    </>
  );
}
