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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 z-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="text-xl font-semibold tracking-tight">STUDIOFOCUS</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#portfolio">Portfolio</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#servicos">Serviços</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#sobre">Sobre</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#contato">Contato</a>
<button className="px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors">
                        Agendar Sessão
                    </button>
</div>
<button className="md:hidden">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="pt-24 pb-20 px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full">
<i className="w-4 h-4 text-neutral-600" data-lucide="award"></i>
<span className="text-xs font-medium text-neutral-600">Premiado Fotógrafo Profissional</span>
</div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                        Capturando momentos que contam histórias
                    </h1>
<p className="text-lg text-neutral-600 leading-relaxed">
                        Transformo seus momentos especiais em memórias eternas através da arte da fotografia profissional. Especializado em casamentos, eventos e retratos corporativos.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-6 py-3 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
                            Ver Portfolio
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="px-6 py-3 border border-neutral-300 text-neutral-900 font-medium rounded-lg hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                            Assistir Showreel
                        </button>
</div>
<div className="flex items-center gap-8 pt-4">
<div>
<div className="text-3xl font-semibold tracking-tight">500+</div>
<div className="text-sm text-neutral-600">Eventos Realizados</div>
</div>
<div className="w-px h-12 bg-neutral-200"></div>
<div>
<div className="text-3xl font-semibold tracking-tight">12</div>
<div className="text-sm text-neutral-600">Anos de Experiência</div>
</div>
<div className="w-px h-12 bg-neutral-200"></div>
<div>
<div className="text-3xl font-semibold tracking-tight">4.9</div>
<div className="text-sm text-neutral-600">Avaliação Média</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden">
<img alt="Fotografia Profissional" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&amp;h=1000&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-neutral-200">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="camera"></i>
</div>
<div>
<div className="text-sm font-medium">Equipamento Premium</div>
<div className="text-xs text-neutral-600">Tecnologia de ponta</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8 bg-neutral-50" id="servicos">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-4xl font-semibold tracking-tight mb-4">Serviços Especializados</h2>
<p className="text-neutral-600">Oferecemos uma gama completa de serviços fotográficos profissionais adaptados às suas necessidades</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-xl p-8 border border-neutral-200 hover:border-neutral-300 transition-colors group">
<div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors">
<i className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors" data-lucide="heart"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Casamentos</h3>
<p className="text-neutral-600 mb-6">Cobertura completa do seu dia especial, desde os preparativos até a festa</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<i className="w-4 h-4" data-lucide="check"></i>
                            Cobertura de 8-12 horas
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<i className="w-4 h-4" data-lucide="check"></i>
                            Fotos editadas em alta resolução
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<i className="w-4 h-4" data-lucide="check"></i>
                            Álbum premium incluso
                        </li>
</ul>
<a className="text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all" href="#">
                        Saiba mais
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-white rounded-xl p-8 border border-neutral-200 hover:border-neutral-300 transition-colors group">
<div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors">
<i className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors" data-lucide="briefcase"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Corporativo</h3>
<p className="text-neutral-600 mb-6">Fotografia profissional para empresas, eventos e headshots executivos</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<i className="w-4 h-4" data-lucide="check"></i>
                            Headshots profissionais
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<i className="w-4 h-4" data-lucide="check"></i>
                            Eventos corporativos
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<i className="w-4 h-4" data-lucide="check"></i>
                            Fotos de produtos
                        </li>
</ul>
<a className="text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all" href="#">
                        Saiba mais
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-white rounded-xl p-8 border border-neutral-200 hover:border-neutral-300 transition-colors group">
<div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors">
<i className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors" data-lucide="user"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Retratos</h3>
<p className="text-neutral-600 mb-6">Sessões personalizadas de retratos individuais, casal e família</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<i className="w-4 h-4" data-lucide="check"></i>
                            Sessão de 2 horas
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<i className="w-4 h-4" data-lucide="check"></i>
                            Múltiplas locações
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<i className="w-4 h-4" data-lucide="check"></i>
                            Looks ilimitados
                        </li>
</ul>
<a className="text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all" href="#">
                        Saiba mais
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-white rounded-xl p-8 border border-neutral-200 hover:border-neutral-300 transition-colors group">
<div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors">
<i className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors" data-lucide="cake"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Eventos Sociais</h3>
<p className="text-neutral-600 mb-6">Aniversários, formaturas e celebrações especiais</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<i className="w-4 h-4" data-lucide="check"></i>
                            Cobertura completa
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<i className="w-4 h-4" data-lucide="check"></i>
                            Edição profissional
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<i className="w-4 h-4" data-lucide="check"></i>
                            Galeria online
                        </li>
</ul>
<a className="text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all" href="#">
                        Saiba mais
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-white rounded-xl p-8 border border-neutral-200 hover:border-neutral-300 transition-colors group">
<div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors">
<i className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors" data-lucide="baby"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Newborn</h3>
<p className="text-neutral-600 mb-6">Ensaios delicados e artísticos para recém-nascidos</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<i className="w-4 h-4" data-lucide="check"></i>
                            Ambiente climatizado
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<i className="w-4 h-4" data-lucide="check"></i>
                            Props exclusivos
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<i className="w-4 h-4" data-lucide="check"></i>
                            Experiência especializada
                        </li>
</ul>
<a className="text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all" href="#">
                        Saiba mais
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-white rounded-xl p-8 border border-neutral-200 hover:border-neutral-300 transition-colors group">
<div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors">
<i className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors" data-lucide="mountain"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Outdoor</h3>
<p className="text-neutral-600 mb-6">Ensaios externos aproveitando a luz natural</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<i className="w-4 h-4" data-lucide="check"></i>
                            Locações exclusivas
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<i className="w-4 h-4" data-lucide="check"></i>
                            Golden hour
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<i className="w-4 h-4" data-lucide="check"></i>
                            Direção artística
                        </li>
</ul>
<a className="text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all" href="#">
                        Saiba mais
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8" id="portfolio">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-4xl font-semibold tracking-tight mb-4">Portfolio Selecionado</h2>
<p className="text-neutral-600">Cada imagem conta uma história única. Explore alguns dos nossos trabalhos mais recentes</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
<div className="col-span-2 row-span-2">
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Portfolio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&amp;h=800&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-6 left-6 text-white">
<div className="text-sm font-medium mb-1">Casamento Premium</div>
<div className="text-xs text-white/80">São Paulo, 2024</div>
</div>
</div>
</div>
</div>
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Portfolio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-4 left-4 text-white">
<div className="text-xs font-medium mb-1">Retrato</div>
</div>
</div>
</div>
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Portfolio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-4 left-4 text-white">
<div className="text-xs font-medium mb-1">Casamento</div>
</div>
</div>
</div>
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Portfolio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-4 left-4 text-white">
<div className="text-xs font-medium mb-1">Outdoor</div>
</div>
</div>
</div>
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Portfolio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-4 left-4 text-white">
<div className="text-xs font-medium mb-1">Casal</div>
</div>
</div>
</div>
<div className="col-span-2 aspect-[2/1] rounded-xl overflow-hidden group relative">
<img alt="Portfolio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-6 left-6 text-white">
<div className="text-sm font-medium mb-1">Evento Corporativo</div>
<div className="text-xs text-white/80">Rio de Janeiro, 2024</div>
</div>
</div>
</div>
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Portfolio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-4 left-4 text-white">
<div className="text-xs font-medium mb-1">Fashion</div>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<button className="px-6 py-3 border border-neutral-300 text-neutral-900 font-medium rounded-lg hover:bg-neutral-50 transition-colors">
                    Ver Portfolio Completo
                </button>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8 bg-neutral-50">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-4xl font-semibold tracking-tight mb-4">O Que Dizem Nossos Clientes</h2>
<p className="text-neutral-600">A satisfação dos nossos clientes é nossa maior conquista</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white rounded-xl p-8 border border-neutral-200">
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 fill-neutral-900 text-neutral-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-neutral-900 text-neutral-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-neutral-900 text-neutral-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-neutral-900 text-neutral-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-neutral-900 text-neutral-900" data-lucide="star"></i>
</div>
<p className="text-neutral-600 mb-6">"Trabalho excepcional! Cada foto do nosso casamento ficou perfeita. O profissionalismo e a atenção aos detalhes foram impressionantes."</p>
<div className="flex items-center gap-3">
<img alt="Cliente" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="font-medium text-sm">Ana Carolina Silva</div>
<div className="text-xs text-neutral-600">Casamento 2024</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl p-8 border border-neutral-200">
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 fill-neutral-900 text-neutral-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-neutral-900 text-neutral-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-neutral-900 text-neutral-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-neutral-900 text-neutral-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-neutral-900 text-neutral-900" data-lucide="star"></i>
</div>
<p className="text-neutral-600 mb-6">"Contratamos para um evento corporativo e o resultado superou todas as expectativas. Fotos incríveis que transmitiram exatamente a mensagem da nossa marca."</p>
<div className="flex items-center gap-3">
<img alt="Cliente" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="font-medium text-sm">Roberto Mendes</div>
<div className="text-xs text-neutral-600">CEO TechCorp</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl p-8 border border-neutral-200">
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 fill-neutral-900 text-neutral-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-neutral-900 text-neutral-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-neutral-900 text-neutral-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-neutral-900 text-neutral-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-neutral-900 text-neutral-900" data-lucide="star"></i>
</div>
<p className="text-neutral-600 mb-6">"Ensaio newborn perfeito! Toda delicadeza e cuidado com nossa bebê. As fotos ficaram lindas e vamos guardar para sempre."</p>
<div className="flex items-center gap-3">
<img alt="Cliente" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="font-medium text-sm">Mariana Costa</div>
<div className="text-xs text-neutral-600">Ensaio Newborn</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-4xl font-semibold tracking-tight mb-4">Como Funciona</h2>
<p className="text-neutral-600">Nosso processo é simples e transparente, do primeiro contato até a entrega final</p>
</div>
<div className="grid md:grid-cols-4 gap-8">
<div className="text-center">
<div className="w-16 h-16 bg-neutral-900 text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-semibold">01</div>
<h3 className="font-semibold mb-2">Consulta Inicial</h3>
<p className="text-sm text-neutral-600">Conversamos sobre suas necessidades e expectativas</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-neutral-900 text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-semibold">02</div>
<h3 className="font-semibold mb-2">Planejamento</h3>
<p className="text-sm text-neutral-600">Criamos um plano detalhado e cronograma personalizado</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-neutral-900 text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-semibold">03</div>
<h3 className="font-semibold mb-2">Sessão Fotográfica</h3>
<p className="text-sm text-neutral-600">Realizamos o trabalho com profissionalismo e criatividade</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-neutral-900 text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-semibold">04</div>
<h3 className="font-semibold mb-2">Entrega</h3>
<p className="text-sm text-neutral-600">Você recebe todas as fotos editadas e em alta resolução</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8 bg-neutral-900 text-white">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Pronto para criar memórias inesquecíveis?</h2>
<p className="text-lg text-neutral-300 mb-8">Agende uma consulta gratuita e vamos conversar sobre como podemos capturar seus momentos especiais</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-4 bg-white text-neutral-900 font-medium rounded-lg hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="calendar"></i>
                    Agendar Consulta Grátis
                </button>
<button className="px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="phone"></i>
                    (11) 99999-9999
                </button>
</div>
</div>
</section>

<footer className="py-16 px-6 lg:px-8 bg-white border-t border-neutral-200">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div>
<div className="text-xl font-semibold tracking-tight mb-4">STUDIOFOCUS</div>
<p className="text-sm text-neutral-600 mb-4">Transformando momentos em memórias através da arte da fotografia profissional.</p>
<div className="flex gap-3">
<a className="w-9 h-9 bg-neutral-100 rounded-lg flex items-center justify-center hover:bg-neutral-200 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-9 h-9 bg-neutral-100 rounded-lg flex items-center justify-center hover:bg-neutral-200 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
<a className="w-9 h-9 bg-neutral-100 rounded-lg flex items-center justify-center hover:bg-neutral-200 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
</div>
</div>
<div>
<div className="font-medium mb-4">Serviços</div>
<ul className="space-y-3 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Casamentos</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Corporativo</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Retratos</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Eventos</a></li>
</ul>
</div>
<div>
<div className="font-medium mb-4">Empresa</div>
<ul className="space-y-3 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Sobre</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Portfolio</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Contato</a></li>
</ul>
</div>
<div>
<div className="font-medium mb-4">Contato</div>
<ul className="space-y-3 text-sm text-neutral-600">
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="mail"></i>
                            contato@studiofocus.com.br
                        </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="phone"></i>
                            (11) 99999-9999
                        </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="map-pin"></i>
                            São Paulo, SP
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-neutral-600">© 2024 Studio Focus. Todos os direitos reservados.</p>
<div className="flex gap-6 text-sm text-neutral-600">
<a className="hover:text-neutral-900 transition-colors" href="#">Privacidade</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Termos</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
