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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
dna: {
blue: '#003B95', // Royal Blue based on logo
red: '#E30613',  // Vibrant Red based on logo
light: '#F3F4F6',
}
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'glow': '0 0 20px -5px rgba(0, 59, 149, 0.15)',
}
}
}
}



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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">

<div className="h-10 w-auto flex items-center">
<div className="relative h-10 w-4 bg-dna-red mr-1 overflow-hidden rounded-sm">
<svg className="absolute inset-0 text-white/30" height="100%" preserveaspectratio="none" viewbox="0 0 20 100" width="100%">
<path d="M0,0 Q10,25 20,50 T0,100" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path d="M20,0 Q10,25 0,50 T20,100" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
<div className="flex flex-col justify-center leading-none">
<span className="text-3xl font-bold tracking-tighter text-dna-blue font-sans">DNA</span>
<span className="text-lg font-medium tracking-tight text-dna-blue -mt-1 ml-0.5">Center</span>
</div>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-500">

<div className="relative group h-20 flex items-center">
<button className="flex items-center gap-1 hover:text-dna-blue transition-colors outline-none">
                        Exames e Serviços
                        <i className="w-3 h-3 transition-transform group-hover:rotate-180" data-lucide="chevron-down"></i>
</button>
<div className="absolute top-full left-0 w-56 bg-white border border-zinc-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
<a className="block px-4 py-2.5 rounded-lg hover:bg-zinc-50 hover:text-dna-blue transition-colors" href="#">Menu de Exames</a>
<a className="block px-4 py-2.5 rounded-lg hover:bg-zinc-50 hover:text-dna-blue transition-colors" href="#">DNA Kids</a>
<a className="block px-4 py-2.5 rounded-lg hover:bg-zinc-50 hover:text-dna-blue transition-colors" href="#">Vacinas</a>
</div>
</div>

<div className="relative group h-20 flex items-center">
<button className="flex items-center gap-1 hover:text-dna-blue transition-colors outline-none">
                        Institucional
                        <i className="w-3 h-3 transition-transform group-hover:rotate-180" data-lucide="chevron-down"></i>
</button>
<div className="absolute top-full left-0 w-56 bg-white border border-zinc-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
<a className="block px-4 py-2.5 rounded-lg hover:bg-zinc-50 hover:text-dna-blue transition-colors" href="#">Sobre Nós</a>
<a className="block px-4 py-2.5 rounded-lg hover:bg-zinc-50 hover:text-dna-blue transition-colors" href="#">Unidades</a>
<a className="block px-4 py-2.5 rounded-lg hover:bg-zinc-50 hover:text-dna-blue transition-colors" href="#">Equipe Médica</a>
</div>
</div>

<div className="relative group h-20 flex items-center">
<button className="flex items-center gap-1 hover:text-dna-blue transition-colors outline-none">
                        Conteúdo
                        <i className="w-3 h-3 transition-transform group-hover:rotate-180" data-lucide="chevron-down"></i>
</button>
<div className="absolute top-full left-0 w-56 bg-white border border-zinc-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
<a className="block px-4 py-2.5 rounded-lg hover:bg-zinc-50 hover:text-dna-blue transition-colors" href="#">Blog</a>
<a className="block px-4 py-2.5 rounded-lg hover:bg-zinc-50 hover:text-dna-blue transition-colors" href="#">Notícias</a>
</div>
</div>
</div>

<div className="hidden lg:flex items-center gap-3">
<a className="px-5 py-2.5 rounded-lg border border-zinc-200 text-zinc-700 text-sm font-medium hover:border-dna-blue hover:text-dna-blue transition-all" href="#">
                    Trabalhe Conosco
                </a>
<a className="px-5 py-2.5 rounded-lg bg-dna-red text-white text-sm font-medium hover:bg-red-700 transition-all shadow-lg shadow-red-500/20 flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="file-text"></i>
                    Resultado de Exames
                </a>
</div>

<button className="lg:hidden p-2 text-zinc-600" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-zinc-100 shadow-xl p-4 flex flex-col gap-4 lg:hidden" id="mobile-menu">
<a className="font-medium text-zinc-800" href="#">Exames e Serviços</a>
<a className="font-medium text-zinc-800" href="#">Institucional</a>
<a className="font-medium text-zinc-800" href="#">Conteúdo</a>
<hr className="border-zinc-100"/>
<a className="text-center py-2 border border-zinc-200 rounded-lg" href="#">Trabalhe Conosco</a>
<a className="text-center py-2 bg-dna-red text-white rounded-lg" href="#">Resultado de Exames</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-zinc-50">

<div className="absolute inset-0 z-0">
<img alt="Laboratório Moderno" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-r from-dna-blue/90 via-dna-blue/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-1 pr-3 py-1 mb-8 animate-fade-in-up">
<span className="flex h-5 w-5 rounded-full bg-dna-red items-center justify-center text-white text-[10px]">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</span>
<span className="text-xs font-medium text-white uppercase tracking-wide">Excelência em Diagnóstico</span>
</div>
<h1 className="text-4xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-6">
                    Cuidar de você é o<br/>
                    nosso <span className="text-white relative inline-block">
                        DNA
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-dna-red" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 15 Q 50 25 100 15" fill="none" stroke="currentColor" strokeWidth="4"></path>
</svg>
</span>
</h1>
<p className="text-lg text-blue-100 font-normal mb-10 leading-relaxed max-w-lg">
                    Tecnologia de ponta e calor humano para garantir precisão nos seus exames e vacinas. O laboratório que o RN confia.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-3.5 bg-white text-dna-blue rounded-lg font-medium hover:bg-blue-50 transition-all shadow-lg shadow-black/5 group" href="#">
                        Agendar Exame ou Vacina
                        <i className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="relative z-20 -mt-16 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-100 group hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-dna-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Encontre uma Unidade</h3>
<p className="text-sm text-zinc-500 mb-4">Localize o DNA Center mais próximo de você via CEP.</p>
<div className="relative">
<input className="w-full text-sm py-2 px-3 bg-zinc-50 rounded-lg border border-zinc-200 focus:outline-none focus:border-dna-blue transition-colors" placeholder="Digite seu CEP" type="text"/>
<button className="absolute right-2 top-2 text-dna-blue"><i className="w-4 h-4" data-lucide="search"></i></button>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-100 group hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-dna-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="credit-card"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Convênios</h3>
<p className="text-sm text-zinc-500 mb-4">Aceitamos diversos planos de saúde. Confira a lista completa.</p>
<a className="inline-flex items-center text-sm font-medium text-dna-blue hover:text-blue-700" href="#">
                        Ver todos os convênios
                        <i className="w-4 h-4 ml-1" data-lucide="chevron-right"></i>
</a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-100 group hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-dna-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="microscope"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Busca de Exames</h3>
<p className="text-sm text-zinc-500 mb-4">Consulte orientações e preparos para seus exames.</p>
<div className="relative">
<input className="w-full text-sm py-2 px-3 bg-zinc-50 rounded-lg border border-zinc-200 focus:outline-none focus:border-dna-blue transition-colors" placeholder="Ex: Hemograma" type="text"/>
<button className="absolute right-2 top-2 text-dna-blue"><i className="w-4 h-4" data-lucide="search"></i></button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-4">Serviços Especializados</h2>
<p className="text-zinc-500 font-light text-lg">Soluções completas em diagnóstico para todas as fases da vida.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group relative overflow-hidden rounded-2xl h-64 border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300" href="#">
<img alt="DNA Kids" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-dna-blue/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 text-white">
<i className="w-5 h-5" data-lucide="baby"></i>
</div>
<h3 className="text-white font-medium text-xl">DNA Kids</h3>
<p className="text-blue-100 text-xs mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Coleta lúdica e especial para os pequenos.</p>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl h-64 border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300" href="#">
<img alt="Check-up" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-dna-blue/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 text-white">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<h3 className="text-white font-medium text-xl">Check-up</h3>
<p className="text-blue-100 text-xs mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Avaliação completa da sua saúde.</p>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl h-64 border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300" href="#">
<img alt="Vacinas" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-dna-blue/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 text-white">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-white font-medium text-xl">Vacinas</h3>
<p className="text-blue-100 text-xs mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Imunização para todas as idades.</p>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl h-64 border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300" href="#">
<img alt="Atendimento Domiciliar" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-dna-blue/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 text-white">
<i className="w-5 h-5" data-lucide="home"></i>
</div>
<h3 className="text-white font-medium text-xl">Domiciliar</h3>
<p className="text-blue-100 text-xs mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Nós vamos até você com conforto.</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="w-full lg:w-1/2">
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-dna-blue/10 border border-zinc-200 aspect-video group bg-white">
<img alt="Equipe DNA Center" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20">
<button className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 ml-1 fill-current" data-lucide="play"></i>
</button>
</div>
<div className="absolute bottom-4 left-4">
<span className="px-3 py-1 bg-dna-blue/90 text-white text-xs font-medium rounded-md tracking-wide">Campanha 2026</span>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 space-y-8">
<div>
<div className="inline-flex items-center gap-2 text-dna-red font-medium text-sm mb-3">
<i className="w-4 h-4" data-lucide="heart-handshake"></i>
<span>Identidade Local</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight">Nosso DNA é Potiguar.</h2>
<p className="text-zinc-500 mt-4 leading-relaxed">
                            Há mais de 20 anos cuidando da saúde do Rio Grande do Norte. Nossa trajetória é marcada pela inovação tecnológica aliada ao acolhimento humano que você conhece.
                        </p>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<div className="text-4xl font-bold text-dna-blue mb-1">2M+</div>
<div className="text-sm text-zinc-500 font-medium">Exames Realizados/Ano</div>
</div>
<div>
<div className="text-4xl font-bold text-dna-blue mb-1">24</div>
<div className="text-sm text-zinc-500 font-medium">Anos de História</div>
</div>
</div>
<div className="pt-4">
<div className="flex items-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-dna-blue" data-lucide="award"></i>
<span className="font-semibold text-zinc-800 text-sm">ISO 9001</span>
</div>
<div className="h-4 w-px bg-zinc-300"></div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-dna-blue" data-lucide="check-circle"></i>
<span className="font-semibold text-zinc-800 text-sm">Controllab</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-dna-blue rounded-3xl overflow-hidden shadow-2xl shadow-dna-blue/20 relative">

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 items-center relative z-10">
<div className="text-white space-y-6">
<h2 className="text-3xl font-semibold tracking-tight">Seus resultados na palma da mão.</h2>
<p className="text-blue-100 font-light max-w-md">Baixe o App DNA Center para agendar exames, consultar resultados e acessar seu histórico de saúde com segurança.</p>
<div className="flex flex-wrap gap-4 pt-2">
<button className="flex items-center gap-3 bg-zinc-950 text-white px-5 py-3 rounded-xl hover:bg-zinc-800 transition-colors border border-zinc-700">
<i className="w-6 h-6" data-lucide="apple"></i>
<div className="text-left leading-none">
<div className="text-[10px] uppercase text-zinc-400">Download on the</div>
<div className="text-sm font-semibold">App Store</div>
</div>
</button>
<button className="flex items-center gap-3 bg-zinc-950 text-white px-5 py-3 rounded-xl hover:bg-zinc-800 transition-colors border border-zinc-700">
<i className="w-6 h-6" data-lucide="play-circle"></i>
<div className="text-left leading-none">
<div className="text-[10px] uppercase text-zinc-400">Get it on</div>
<div className="text-sm font-semibold">Google Play</div>
</div>
</button>
</div>
</div>
<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
<h3 className="text-xl font-medium mb-2">Novidades e Saúde</h3>
<p className="text-sm text-blue-100 mb-6 font-light">Receba conteúdos exclusivos sobre saúde e bem-estar.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:bg-white/30 transition-all" placeholder="Seu melhor e-mail" type="email"/>
<button className="px-6 py-3 bg-dna-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors shadow-lg" type="button">
                                Inscrever-se
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="h-8 w-auto flex items-center">
<div className="relative h-8 w-3 bg-dna-red mr-1 overflow-hidden rounded-sm">
<svg className="absolute inset-0 text-white/30" height="100%" preserveaspectratio="none" viewbox="0 0 20 100" width="100%">
<path d="M0,0 Q10,25 20,50 T0,100" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path d="M20,0 Q10,25 0,50 T20,100" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xl font-bold tracking-tighter text-dna-blue">DNA Center</span>
</div>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">
                        Referência em medicina diagnóstica no RN. Qualidade certificada e atendimento humanizado.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-dna-blue hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-dna-blue hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
<a className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-dna-blue hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
</div>
</div>

<div>
<h4 className="font-medium text-zinc-900 mb-6">Institucional</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-dna-blue transition-colors" href="#">Sobre Nós</a></li>
<li><a className="hover:text-dna-blue transition-colors" href="#">Unidades</a></li>
<li><a className="hover:text-dna-blue transition-colors" href="#">Corpo Clínico</a></li>
<li><a className="hover:text-dna-blue transition-colors" href="#">Trabalhe Conosco</a></li>
<li><a className="hover:text-dna-blue transition-colors" href="#">Certificações</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-zinc-900 mb-6">Serviços</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-dna-blue transition-colors" href="#">Resultados</a></li>
<li><a className="hover:text-dna-blue transition-colors" href="#">Agendamento</a></li>
<li><a className="hover:text-dna-blue transition-colors" href="#">Vacinas</a></li>
<li><a className="hover:text-dna-blue transition-colors" href="#">DNA Kids</a></li>
<li><a className="hover:text-dna-blue transition-colors" href="#">Sexagem Fetal</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-zinc-900 mb-6">Contato</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-dna-blue" data-lucide="phone"></i>
<span>(84) 4004-3210</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-dna-blue" data-lucide="mail"></i>
<span>contato@dnacenter.com.br</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-dna-blue" data-lucide="map-pin"></i>
<span>Av. Afonso Pena, 1234 - Tirol, Natal - RN</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2026 DNA Center. Todos os direitos reservados. CNPJ: 00.000.000/0001-00</p>
<div className="flex gap-6 text-xs text-zinc-400">
<a className="hover:text-zinc-600" href="#">Política de Privacidade</a>
<a className="hover:text-zinc-600" href="#">Termos de Uso</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-110 flex items-center justify-center" href="#">
<i className="w-6 h-6" data-lucide="message-circle"></i>
</a>


    </>
  );
}
