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
      
      tailwind.config = {
          theme: {
              extend: {
                  fontFamily: {
                      'headline': ['SF Pro Display', 'serif'],
                      'sans-body': ['Inter', 'system-ui', 'sans-serif']
                  },
                  colors: {
                      'primary': '#10b981',
                      'dark': '#0f172a',
                      'gray-dark': '#1e293b',
                      'gray-light': '#64748b'
                  }
              }
          }
      }
  


    // Animate on scroll
    function revealOnScroll() {
      var els = document.querySelectorAll('.animate-fade-in-up');
      for (var i = 0; i < els.length; i++) {
        var winH = window.innerHeight;
        var elTop = els[i].getBoundingClientRect().top;
        if (elTop < winH - 120) {
          els[i].style.opacity = 1;
          els[i].style.animationPlayState = 'running';
        }
      }
    }
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('DOMContentLoaded', revealOnScroll);
  
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
      

<header className="fixed w-full top-0 z-50 bg-dark/90 backdrop-blur-sm border-b border-gray-800">
<nav className="container mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center space-x-2 animate-fade-in-up">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
<span className="text-dark font-bold text-lg">A</span>
</div>
<span className="text-xl font-bold font-headline">Alex Carter</span>
</div>
<div className="hidden md:flex items-center space-x-8 animate-fade-in-up delay-300">
<a className="hover:text-primary transition-colors" href="index.html#about">Sobre</a>
<a className="hover:text-primary transition-colors" href="index.html#work">Projetos</a>
<a className="hover:text-primary transition-colors" href="index.html#skills">Skills</a>
<a className="hover:text-primary transition-colors" href="index.html#contact">Contato</a>
<a className="cta-primary" href="index.html#contact">
          Entrar em Contato
          <svg className="cta-icon" fill="none" viewbox="0 0 24 24">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</a>
</div>
</nav>
</header>

<section className="pt-32 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-dark via-gray-dark/80 to-gray-dark/90">
<div className="container mx-auto text-center max-w-6xl">

<div className="mb-8 animate-fade-in-up delay-300 text-left">
<a className="inline-flex items-center text-primary hover:text-white transition-colors" href="index.html#work">
<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
          Voltar ao Portfolio
        </a>
</div>

<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up delay-500 font-headline">
<span className="gradient-text">Fintech Dashboard</span>
<br/>
        Redesign de Plataforma Financeira
      </h1>

<p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-700 font-sans-body">
        Um dashboard financeiro repensado para <span className="text-primary font-semibold">engajar</span> e <span className="text-primary font-semibold">simplificar</span> a vida dos usuários de uma startup.
      </p>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 animate-fade-in-up delay-900">
<div className="card-hover bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
<div className="text-sm text-gray-400 mb-2">Duração</div>
<div className="text-lg font-semibold text-white">4 meses</div>
</div>
<div className="card-hover bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
<div className="text-sm text-gray-400 mb-2">Função</div>
<div className="text-lg font-semibold text-white">Product Designer</div>
</div>
<div className="card-hover bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
<div className="text-sm text-gray-400 mb-2">Plataforma</div>
<div className="text-lg font-semibold text-white">Web &amp; Mobile</div>
</div>
<div className="card-hover bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
<div className="text-sm text-gray-400 mb-2">Equipe</div>
<div className="text-lg font-semibold text-white">5 pessoas</div>
</div>
</div>

<div className="relative max-w-6xl mx-auto animate-fade-in-up delay-1100">
<div className="project-glow bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-8">
<div className="bg-gray-900/90 rounded-2xl p-8 border border-gray-700/50">
<div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-xl flex items-center justify-center">
<div className="text-center">
<div className="text-6xl mb-4">💸</div>
<p className="text-gray-300 text-lg">Mockup do novo dashboard</p>
<p className="text-gray-500 text-sm">Visualização principal da solução</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-gray-dark/50 relative z-10">
<div className="container mx-auto max-w-4xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-4xl font-headline font-bold mb-6 text-primary">O Desafio</h2>
<p className="text-gray-300 text-lg leading-relaxed mb-6 font-sans-body">
            O dashboard carecia de clareza, o engajamento era baixo e os dados importantes ficavam escondidos. O objetivo era criar uma experiência <span className="text-primary font-semibold">intuitiva</span> e <span className="text-primary font-semibold">visual</span> para aumentar o uso ativo e facilitar decisões rápidas.
          </p>
</div>
<div className="image-showcase">
<div className="aspect-square bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center">
<div className="text-center">
<div className="text-4xl mb-4">📊</div>
<p className="text-gray-300">Antes: Interface confusa</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 relative z-10">
<div className="container mx-auto">
<div className="text-center max-w-3xl mx-auto mb-12">
<h2 className="text-4xl font-headline font-bold mb-4 text-primary">Processo de Design</h2>
<p className="text-xl text-gray-300 font-sans-body">
          Um fluxo de trabalho colaborativo e iterativo para garantir o melhor resultado.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
<div className="glass-blur p-8 flex flex-col items-center animate-fade-in-up delay-150">
<div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-900 border border-primary/20 mb-4 text-3xl">🔎</div>
<div className="font-headline font-bold text-lg mb-2">Pesquisa</div>
<p className="text-gray-400 text-center font-sans-body">Entrevistas, benchmark e análise de métricas.</p>
</div>
<div className="glass-blur p-8 flex flex-col items-center animate-fade-in-up delay-300">
<div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-900 border border-primary/20 mb-4 text-3xl">🧠</div>
<div className="font-headline font-bold text-lg mb-2">Ideação</div>
<p className="text-gray-400 text-center font-sans-body">Wireframes, brainstorm e arquitetura da informação.</p>
</div>
<div className="glass-blur p-8 flex flex-col items-center animate-fade-in-up delay-500">
<div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-900 border border-primary/20 mb-4 text-3xl">🎨</div>
<div className="font-headline font-bold text-lg mb-2">Prototipagem</div>
<p className="text-gray-400 text-center font-sans-body">Protótipos navegáveis e refinamento visual.</p>
</div>
<div className="glass-blur p-8 flex flex-col items-center animate-fade-in-up delay-700">
<div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-900 border border-primary/20 mb-4 text-3xl">🧪</div>
<div className="font-headline font-bold text-lg mb-2">Testes</div>
<p className="text-gray-400 text-center font-sans-body">Validação com usuários reais e ajustes finais.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-gray-dark/50 relative z-10">
<div className="container mx-auto max-w-6xl">
<h2 className="text-4xl font-headline font-bold mb-12 text-center text-primary">Principais Descobertas</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="glass-blur p-8 card-hover">
<div className="text-3xl mb-4">🔒</div>
<h3 className="text-xl font-headline font-bold mb-4">Dados Ocultos</h3>
<p className="text-gray-300 font-sans-body">Usuários tinham dificuldade para encontrar informações-chave como saldo e despesas.</p>
</div>
<div className="glass-blur p-8 card-hover">
<div className="text-3xl mb-4">🤔</div>
<h3 className="text-xl font-headline font-bold mb-4">Falta de Ações Rápidas</h3>
<p className="text-gray-300 font-sans-body">Fluxo de adicionar transações era longo e pouco intuitivo.</p>
</div>
<div className="glass-blur p-8 card-hover">
<div className="text-3xl mb-4">📉</div>
<h3 className="text-xl font-headline font-bold mb-4">Baixo Engajamento</h3>
<p className="text-gray-300 font-sans-body">Painel visualmente poluído reduzia o uso recorrente.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 relative z-10">
<div className="container mx-auto max-w-6xl">
<h2 className="text-4xl font-headline font-bold mb-12 text-center text-primary">A Solução</h2>
<div className="space-y-20">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h3 className="text-3xl font-headline font-bold mb-6 text-primary">Dashboard Visual e Claro</h3>
<p className="text-gray-300 text-lg leading-relaxed mb-6 font-sans-body">
              Redesenhei o dashboard tornando saldos, metas e gastos visíveis de imediato, com gráficos intuitivos e navegação simplificada.
            </p>
<ul className="space-y-3">
<li className="flex items-center text-gray-300 font-sans-body">
<svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Saldos e despesas sempre à vista
              </li>
<li className="flex items-center text-gray-300 font-sans-body">
<svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Gráficos coloridos e fáceis de ler
              </li>
<li className="flex items-center text-gray-300 font-sans-body">
<svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Menu de ações rápidas
              </li>
</ul>
</div>
<div className="image-showcase">
<div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-xl flex items-center justify-center">
<div className="text-center">
<div className="text-4xl mb-4">💹</div>
<p className="text-gray-300">Novo dashboard</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 image-showcase">
<div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl flex items-center justify-center">
<div className="text-center">
<div className="text-4xl mb-4">⚡</div>
<p className="text-gray-300">Fluxo rápido</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h3 className="text-3xl font-headline font-bold mb-6 text-primary">Ações simplificadas</h3>
<p className="text-gray-300 text-lg leading-relaxed mb-6 font-sans-body">
              Processo de adicionar transação foi reduzido para 3 etapas, com preenchimentos automáticos e navegação por atalhos.
            </p>
<div className="glass-blur rounded-xl p-6 border border-gray-700/50">
<div className="text-primary font-semibold mb-2">Resultado:</div>
<div className="text-2xl font-headline font-bold text-white">+35% de engajamento</div>
<div className="text-gray-400 text-sm font-sans-body">Uso recorrente do dashboard</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-gray-dark/50 relative z-10">
<div className="container mx-auto max-w-6xl">
<h2 className="text-4xl font-headline font-bold mb-12 text-center text-primary">Resultados</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
<div className="text-center glass-blur card-hover p-8">
<div className="text-4xl font-headline font-bold text-primary mb-2">+35%</div>
<div className="text-gray-300 font-sans-body">Engajamento diário</div>
</div>
<div className="text-center glass-blur card-hover p-8">
<div className="text-4xl font-headline font-bold text-primary mb-2">+27%</div>
<div className="text-gray-300 font-sans-body">Aumento em transações lançadas</div>
</div>
<div className="text-center glass-blur card-hover p-8">
<div className="text-4xl font-headline font-bold text-primary mb-2">4.9/5</div>
<div className="text-gray-300 font-sans-body">NPS dos usuários</div>
</div>
</div>
<div className="text-center">
<p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans-body">
          O redesign trouxe clareza, dinamismo e aumentou a satisfação dos clientes e da equipe de produto.
        </p>
</div>
</div>
</section>

<section className="py-20 px-6 relative z-10">
<div className="container mx-auto max-w-4xl text-center">
<h2 className="text-4xl font-headline font-bold mb-6">Gostou deste projeto?</h2>
<p className="text-xl text-gray-300 mb-12 font-sans-body">
        Veja outros trabalhos ou me envie uma mensagem para contar sobre o seu desafio!
      </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="cta-primary" href="index.html#work">
          Ver Mais Projetos
          <svg className="cta-icon" fill="none" viewbox="0 0 24 24">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</a>
<a className="cta-secondary" href="index.html#contact">
          Entrar em Contato
          <svg className="cta-icon" fill="none" viewbox="0 0 24 24">
<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
<polyline points="22,6 12,13 2,6"></polyline>
</svg>
</a>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-gray-800 bg-dark">
<div className="container mx-auto text-center">
<div className="flex items-center justify-center space-x-2 mb-6">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
<span className="text-dark font-bold text-lg">A</span>
</div>
<span className="text-xl font-bold font-headline">Alex Carter</span>
</div>
<p className="text-gray-400 mb-6 font-sans-body">Product Designer focado em criar experiências digitais que encantam e funcionam.</p>
<div className="flex justify-center space-x-6">
<a className="text-gray-400 hover:text-primary transition-colors" href="#">LinkedIn</a>
<a className="text-gray-400 hover:text-primary transition-colors" href="#">Behance</a>
<a className="text-gray-400 hover:text-primary transition-colors" href="#">Dribbble</a>
<a className="text-gray-400 hover:text-primary transition-colors" href="#">Email</a>
</div>
</div>
</footer>


    </>
  );
}
