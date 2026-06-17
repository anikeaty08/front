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



{
"@context": "https://schema.org",
"@type": "Restaurant",
"name": "Restaurante Mineiro",
"image": "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659",
"address": {
"@type": "PostalAddress",
"addressLocality": "Brandoa",
"addressCountry": "PT"
},
"servesCuisine": "Brazilian Buffet"
}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
dark: '#1a1a1a',
accent: '#eab308',
light: '#f9f9f9'
}
}
}
}
}

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
      

<a aria-label="Contactar pelo WhatsApp" className="fixed bottom-6 right-6 z-[60] flex items-center justify-center w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 hover:scale-110 transition-all duration-300" href="https://wa.me/351910000000">
<iconify-icon icon="lucide:message-circle" strokeWidth="1.5" width="28"></iconify-icon>
</a>

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-neutral-900/95 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse group" href="#">
<span className="self-center text-lg md:text-xl font-serif tracking-tight font-medium text-white group-hover:text-yellow-400 transition-colors">RESTAURANTE MINEIRO</span>
</a>
<div className="flex md:order-2 space-x-2 md:space-x-3 rtl:space-x-reverse">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs md:text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white hover:text-neutral-900 transition-colors duration-200 gap-2" href="tel:+351210000000">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="14"></iconify-icon>
                    Ligar
                </a>
<a className="inline-flex items-center justify-center px-4 py-2 text-xs md:text-sm font-medium text-neutral-900 bg-white rounded-full hover:bg-yellow-400 transition-colors duration-200 gap-2" href="#reservas">
                    Reservar
                </a>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none" data-collapse-toggle="navbar-sticky" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" type="button">
<span className="sr-only">Abrir menu</span>
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent text-sm">
<li>
<a className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 transition-colors" href="#sobre">Sobre</a>
</li>
<li>
<a className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 transition-colors" href="#precos">Preçário</a>
</li>
<li>
<a className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 transition-colors" href="#localizacao">Localização</a>
</li>
<li>
<a className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 transition-colors" href="#reservas">Contactos</a>
</li>
</ul>
</div>
</div>

<div className="hidden md:hidden bg-neutral-900 border-t border-gray-800 absolute w-full left-0" id="mobile-menu">
<ul className="flex flex-col p-4 space-y-4 font-medium text-center">
<li><a className="text-white block py-2 hover:text-yellow-400" href="#sobre" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Sobre Nós</a></li>
<li><a className="text-white block py-2 hover:text-yellow-400" href="#precos" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Preçário Buffet</a></li>
<li><a className="text-white block py-2 hover:text-yellow-400" href="#reservas" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Reservar Mesa</a></li>
<li><a className="text-white block py-2 hover:text-yellow-400" href="#localizacao" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Localização</a></li>
</ul>
</div>
</nav>

<section className="relative h-[85vh] md:h-[90vh] w-full flex items-center justify-center overflow-hidden bg-neutral-900">

<div className="absolute inset-0 z-0">

<img alt="Buffet Brasileiro" className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-neutral-900/30"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 md:space-y-8 fade-in-up">
<span className="inline-block py-1 px-3 rounded-full bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/30 text-yellow-400 text-xs font-semibold tracking-wide uppercase mb-2">
                O Melhor Buffet Livre da Brandoa
            </span>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white tracking-tight leading-tight">
                Coma à Vontade <br/> com <span className="italic text-yellow-400">Sabor Brasileiro.</span>
</h1>
<p className="text-base md:text-xl text-neutral-300 max-w-xl mx-auto font-light leading-relaxed">
                Buffet completo com grelhados na brasa, comida brasileira e portuguesa, pizzas caseiras e saladas variadas. Tudo incluído, para si e para a sua família.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-yellow-500 text-neutral-900 text-sm font-semibold rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-yellow-900/20" href="#precos">
<iconify-icon icon="lucide:utensils" strokeWidth="1.5" width="18"></iconify-icon>
                    Ver Preços
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-200 transition-all flex items-center justify-center gap-2" href="#reservas">
                    Reservar Mesa
                </a>
</div>
<div className="pt-6 flex items-center justify-center gap-2 text-white/80 text-xs">
<div className="flex text-yellow-400">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<span>Variedade e qualidade garantida</span>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-white" id="sobre">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-100 rounded-full -z-10"></div>
<img alt="Churrasco Brasileiro" className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl grayscale-[10%] hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -right-6 bg-white p-5 md:p-6 rounded-xl shadow-lg border border-neutral-100 hidden md:block">
<div className="flex items-center gap-3">
<div className="bg-green-100 p-2 rounded-full text-green-700">
<iconify-icon icon="lucide:flame" width="24"></iconify-icon>
</div>
<div>
<p className="font-bold text-neutral-900 text-sm">Grelhados na Brasa</p>
<p className="text-xs text-neutral-500">Feito na hora</p>
</div>
</div>
</div>
</div>
<div className="space-y-6 order-1 lg:order-2">
<span className="text-yellow-600 font-bold text-xs md:text-sm tracking-widest uppercase">O Nosso Conceito</span>
<h2 className="text-3xl md:text-5xl font-serif text-neutral-900 tracking-tight leading-tight">
                        Variedade Incrível <br/> Preço Acessível.
                    </h2>
<p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                        No Restaurante Mineiro, oferecemos uma experiência de buffet livre onde a qualidade encontra a abundância. Combinamos o melhor da culinária brasileira com pratos tradicionais portugueses.
                    </p>
<p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                        As nossas bancadas estão repletas de opções: desde saladas frescas, pratos quentes reconfortantes, pizzas caseiras acabadas de sair do forno e, claro, os nossos famosos grelhados na brasa.
                    </p>
<div className="pt-4 grid grid-cols-2 gap-6">
<div>
<iconify-icon className="text-neutral-900 mb-2" icon="lucide:pizza" strokeWidth="1" width="28"></iconify-icon>
<h4 className="font-semibold text-neutral-900 text-sm">Pizza Caseira</h4>
<p className="text-xs text-neutral-500 mt-1">Massa fresca todos os dias.</p>
</div>
<div>
<iconify-icon className="text-neutral-900 mb-2" icon="lucide:utensils-crossed" strokeWidth="1" width="28"></iconify-icon>
<h4 className="font-semibold text-neutral-900 text-sm">Buffet Completo</h4>
<p className="text-xs text-neutral-500 mt-1">Quentes e Frios.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-neutral-50 border-t border-neutral-200" id="precos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-yellow-600 font-bold text-xs md:text-sm tracking-widest uppercase">Preçário</span>
<h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mt-3 tracking-tight">O Nosso Buffet Livre</h2>
<p className="text-neutral-500 mt-4 text-sm">Escolha a melhor opção para si. Crianças até aos 4 anos não pagam.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="relative bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden">
<div className="absolute top-0 inset-x-0 h-1 bg-yellow-400"></div>
<div className="mb-6">
<span className="inline-block py-1 px-3 rounded-full bg-yellow-100 text-yellow-800 text-[10px] font-bold tracking-wide uppercase mb-4">
                            Almoço Semanal
                        </span>
<h3 className="text-2xl font-serif text-neutral-900 mb-2">Refeição Completa</h3>
<p className="text-neutral-500 text-sm">A melhor pausa para o seu dia de trabalho.</p>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-5xl font-serif font-medium text-neutral-900 tracking-tight">13,50€</span>
<span className="text-neutral-400 text-sm">/pessoa</span>
</div>
<div className="space-y-4 mb-8 flex-grow">
<div className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-yellow-500 mt-0.5 flex-shrink-0" icon="lucide:calendar" width="16"></iconify-icon>
<span className="font-medium text-neutral-900">2ª a 6ª Feira (Almoço)</span>
</div>
<p className="text-xs text-neutral-400 ml-7 -mt-3 mb-2">Excepto Feriados</p>
<div className="h-px bg-neutral-100 my-4"></div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-green-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span><strong className="text-neutral-900">Buffet Livre</strong> (Quentes e Frios)</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-green-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span><strong className="text-neutral-900">1 Bebida à escolha</strong> (330ml)<br/><span className="text-xs text-neutral-400">Água, refrigerante, cerveja a copo ou vinho</span></span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-green-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span><strong className="text-neutral-900">1 Sobremesa</strong></span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-green-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span><strong className="text-neutral-900">Café</strong> incluído</span>
</li>
</ul>
</div>
<a className="block w-full py-3 px-4 bg-neutral-900 text-white text-center rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors" href="#reservas">
                        Reservar Almoço
                    </a>
</div>

<div className="relative bg-neutral-900 rounded-2xl p-8 border border-neutral-800 shadow-xl flex flex-col group overflow-hidden text-white">
<div className="absolute top-0 inset-x-0 h-1 bg-green-500"></div>
<div className="mb-6">
<span className="inline-block py-1 px-3 rounded-full bg-green-900/50 text-green-400 border border-green-800 text-[10px] font-bold tracking-wide uppercase mb-4">
                            Jantar &amp; Fim de Semana
                        </span>
<h3 className="text-2xl font-serif text-white mb-2">Buffet Premium</h3>
<p className="text-neutral-400 text-sm">Para desfrutar com tempo e família.</p>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-5xl font-serif font-medium text-white tracking-tight">15,90€</span>
<span className="text-neutral-500 text-sm">/pessoa</span>
</div>
<p className="text-xs text-yellow-500 font-medium mb-6">Feriados: 17,90€</p>
<div className="space-y-4 mb-8 flex-grow">
<div className="space-y-2 text-sm">
<div className="flex items-start gap-3">
<iconify-icon className="text-green-400 mt-0.5 flex-shrink-0" icon="lucide:moon" width="16"></iconify-icon>
<span className="font-medium text-neutral-200">Terça a Sexta (Jantar)</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-green-400 mt-0.5 flex-shrink-0" icon="lucide:sun" width="16"></iconify-icon>
<span className="font-medium text-neutral-200">Sábado e Domingo (Almoço/Jantar)</span>
</div>
<p className="text-xs text-neutral-500 ml-7">Excepto Feriados</p>
</div>
<div className="h-px bg-neutral-800 my-4"></div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-green-500 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span><strong className="text-white">Buffet Livre</strong> (Quentes e Frios)</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-green-500 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span><strong className="text-white">1 Sobremesa</strong> por pessoa</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="text-red-400/70 mt-0.5 flex-shrink-0" icon="lucide:x-circle" width="16"></iconify-icon>
<span>Bebidas e Cafés <strong className="text-neutral-300">não incluídos</strong></span>
</li>
</ul>
</div>
<a className="block w-full py-3 px-4 bg-white text-neutral-900 text-center rounded-lg text-sm font-medium hover:bg-neutral-100 transition-colors" href="#reservas">
                        Reservar Mesa
                    </a>
</div>
</div>

<div className="mt-20 pt-12 border-t border-neutral-200">
<div className="text-center mb-10">
<h3 className="text-xl font-serif text-neutral-900">O que vai encontrar no Buffet</h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
<div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white border border-neutral-100 shadow-sm hover:border-yellow-200 transition-colors">
<div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 mb-1">
<iconify-icon icon="lucide:flag" width="24"></iconify-icon>
</div>
<span className="text-sm font-semibold text-neutral-900 leading-tight">Comida<br/>Brasileira</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white border border-neutral-100 shadow-sm hover:border-red-200 transition-colors">
<div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 mb-1">
<iconify-icon icon="lucide:anchor" width="24"></iconify-icon>
</div>
<span className="text-sm font-semibold text-neutral-900 leading-tight">Comida<br/>Portuguesa</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white border border-neutral-100 shadow-sm hover:border-orange-200 transition-colors">
<div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 mb-1">
<iconify-icon icon="lucide:flame" width="24"></iconify-icon>
</div>
<span className="text-sm font-semibold text-neutral-900 leading-tight">Grelhados<br/>na Brasa</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white border border-neutral-100 shadow-sm hover:border-green-200 transition-colors">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-1">
<iconify-icon icon="lucide:pizza" width="24"></iconify-icon>
</div>
<span className="text-sm font-semibold text-neutral-900 leading-tight">Pizza<br/>Caseira</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white border border-neutral-100 shadow-sm hover:border-emerald-200 transition-colors">
<div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-1">
<iconify-icon icon="lucide:carrot" width="24"></iconify-icon>
</div>
<span className="text-sm font-semibold text-neutral-900 leading-tight">Saladas<br/>Diversas</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-serif text-neutral-900">O que dizem os nossos clientes</h2>
<div className="flex items-center justify-center gap-1 mt-2 text-yellow-400">
<iconify-icon fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
</div>
<p className="text-sm text-neutral-500 mt-1">Baseado em avaliações do Google</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100">
<div className="flex items-center gap-2 mb-3 text-yellow-500 text-xs">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-700 italic">"Buffet com muita variedade e tudo muito saboroso. A picanha na brasa é excelente. Recomendo o almoço de domingo!"</p>
<p className="mt-4 text-xs font-semibold text-neutral-900">— Maria S.</p>
</div>

<div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100">
<div className="flex items-center gap-2 mb-3 text-yellow-500 text-xs">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-700 italic">"Ótimo ambiente familiar na Brandoa. A relação qualidade/preço do buffet é imbatível. Staff 5 estrelas."</p>
<p className="mt-4 text-xs font-semibold text-neutral-900">— João P.</p>
</div>

<div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100">
<div className="flex items-center gap-2 mb-3 text-yellow-500 text-xs">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-700 italic">"Feijoada deliciosa e pizzas sempre a sair. Ideal para ir com crianças porque elas não pagam até aos 4 anos."</p>
<p className="mt-4 text-xs font-semibold text-neutral-900">— Carlos M.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-neutral-900 relative overflow-hidden" id="reservas">
<div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
<iconify-icon className="text-white" icon="lucide:utensils" width="300"></iconify-icon>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

<div className="lg:w-1/2 text-white">
<span className="text-yellow-500 font-bold text-xs tracking-widest uppercase mb-2 block">Reservas</span>
<h2 className="text-3xl md:text-5xl font-serif mb-6">Garanta a sua mesa</h2>
<p className="text-neutral-400 text-base mb-8 leading-relaxed">
                        Recomendamos reservar, especialmente aos fins de semana. Para grupos grandes, por favor contacte com antecedência.
                    </p>
<div className="space-y-6">
<a className="flex items-center gap-4 group" href="tel:+351210000000">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-neutral-900 transition-colors">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-400 uppercase tracking-wide">Telefone</p>
<p className="text-lg font-medium">210 000 000</p>
</div>
</a>
<a className="flex items-center gap-4 group" href="https://wa.me/351910000000">
<div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center text-green-500 group-hover:bg-green-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-400 uppercase tracking-wide">WhatsApp (Rápido)</p>
<p className="text-lg font-medium">910 000 000</p>
</div>
</a>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
<iconify-icon icon="lucide:clock" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-400 uppercase tracking-wide">Horário</p>
<p className="text-sm font-medium">Ter - Dom: 12:00 - 15:30 | 19:00 - 23:00</p>
<p className="text-xs text-neutral-500">Segunda: Encerrado</p>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
<h3 className="text-neutral-900 text-xl font-serif mb-6">Pedido de Reserva Online</h3>
<form action="#" className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-600">Nome</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all text-sm" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-600">Telemóvel</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all text-sm" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-600">Data</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-neutral-900 outline-none transition-all text-sm" type="date"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-600">Pessoas</label>
<select className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-neutral-900 outline-none transition-all text-sm">
<option>2 Pessoas</option>
<option>3 Pessoas</option>
<option>4 Pessoas</option>
<option>5+ Pessoas</option>
</select>
</div>
</div>
<div className="pt-2">
<button className="w-full py-4 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl text-sm flex items-center justify-center gap-2" type="button">
                                Confirmar Pedido
                            </button>
<p className="text-center text-[10px] text-neutral-400 mt-3">A sua reserva só fica confirmada após o nosso contacto.</p>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 py-12 md:py-16" id="localizacao">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden flex flex-col md:flex-row">
<div className="md:w-1/3 p-8 flex flex-col justify-center bg-white">
<h3 className="text-2xl font-serif text-neutral-900 mb-4">Onde Estamos</h3>
<p className="text-neutral-600 mb-6 text-sm">Visite-nos na Brandoa. Estacionamento fácil nas redondezas.</p>
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 mt-1" icon="lucide:map-pin" width="20"></iconify-icon>
<p className="text-neutral-800 font-medium text-sm">
                            Rua da Liberdade, 45<br/>
                            2650-000 Brandoa, Portugal
                        </p>
</div>
<a className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800" href="https://maps.google.com" target="_blank">
                        Ver no Google Maps <iconify-icon className="ml-1" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="md:w-2/3 h-64 md:h-auto bg-neutral-200 relative">

<iframe allowfullscreen="" className="absolute inset-0 grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.4567!2d-9.2200!3d38.7600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzg!5e0!3m2!1spt-PT!2spt!4v1600000000000" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-100 pt-12 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="font-serif text-lg font-bold text-neutral-900">RESTAURANTE MINEIRO</p>
<p className="text-xs text-neutral-500 mt-1">Brandoa • Cozinha Brasileira</p>
</div>
<div className="flex gap-6">
<a className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-600 hover:bg-neutral-900 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-600 hover:bg-neutral-900 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-neutral-100 text-center md:text-left flex flex-col md:flex-row justify-between text-[10px] text-neutral-400">
<p>© 2024 Restaurante Mineiro. Todos os direitos reservados.</p>
<div className="flex gap-4 justify-center mt-2 md:mt-0">
<a className="hover:text-neutral-900" href="#">Política de Privacidade</a>
<a className="hover:text-neutral-900" href="#">Livro de Reclamações</a>
</div>
</div>
</footer>

    </>
  );
}
