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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/68077088-a13b-4566-ac18-09c5d0e5e32d/3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="fixed inset-0 z-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-20 pointer-events-none z-0" style={{background: 'radial-gradient(ellipse at top, rgba(16, 185, 129, 0.4), transparent 70%)'}}></div>

<div className="relative z-10 min-h-screen flex flex-col items-center">

<nav className="w-full max-w-4xl mx-auto mt-6 px-6 z-50">
<div className="border border-white/10 rounded-full px-6 py-4 flex items-center justify-between shadow-2xl" style={{background: 'rgba(10, 11, 20, 0.6)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)'}}>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-medium tracking-tight text-white font-manrope">Primeiro Mil</span>
</div>
<a className="px-5 py-2 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300 tracking-tight" href="#oferta">
          Garantir Acesso
        </a>
</div>
</nav>

<section className="w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

<div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">

<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 mb-8" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
<div className="flex items-center gap-0.5 text-amber-400">
<iconify-icon className="text-sm" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-white/70">Mais de 2.000 alunos transformados</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-6 font-manrope font-medium">
            Do Zero ao<br/>
<span className="text-emerald-400 font-medium tracking-tight">Primeiro Mil.</span>
</h1>
<p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
            O guia definitivo e à prova de desculpas para você sair da estagnação, perder o medo e construir seus primeiros resultados reais com investimentos, mesmo começando com pouco.
          </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
<a className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-emerald-500 text-emerald-950 text-sm font-medium transition-all duration-300 hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]" href="#oferta">
              Quero começar a investir
              <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white/80 text-sm font-medium border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5" href="#solucao" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
              Entenda o método
            </a>
</div>

<div className="flex items-center justify-center lg:justify-start gap-8 border-t border-white/10 pt-8 w-full max-w-xl">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-white/70">100% Seguro</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-amber-400 text-xl" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-white/70">Acesso Imediato</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-white/70">Baixo Risco</span>
</div>
</div>
</div>

<div className="order-1 lg:order-2 flex justify-center items-center relative py-10 lg:py-0 min-h-[400px] sm:min-h-[500px] w-full max-w-md sm:max-w-xl mx-auto">

<div className="absolute inset-0 bg-emerald-500/30 blur-[120px] rounded-full"></div>

<div className="absolute left-0 sm:-left-4 lg:-left-12 xl:left-0 top-10 sm:top-16 z-0 w-40 sm:w-56 h-56 sm:h-80 rounded-2xl p-1.5 sm:p-2 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" style={{background: '#171717', transform: 'perspective(1000px) rotateY(15deg) rotateX(5deg) translateZ(-50px)'}}>
<div className="w-full h-full rounded-xl bg-black border border-white/5 flex flex-col p-3 overflow-hidden relative">

<div className="w-full flex items-center justify-between border-b border-white/10 pb-2 mb-3">
<div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
</div>
<div className="w-16 h-1.5 bg-white/10 rounded-full"></div>
</div>

<div className="flex-1 bg-gradient-to-br from-emerald-900/30 to-black rounded-lg border border-white/5 p-3 flex flex-col gap-3">
<div className="w-full h-24 bg-white/5 rounded-md border border-white/5 flex items-end p-2 gap-1 relative overflow-hidden">
<div className="w-1/4 h-1/3 bg-emerald-500/40 rounded-t-sm"></div>
<div className="w-1/4 h-2/3 bg-emerald-500/60 rounded-t-sm"></div>
<div className="w-1/4 h-1/2 bg-emerald-500/40 rounded-t-sm"></div>
<div className="w-1/4 h-full bg-emerald-400 rounded-t-sm shadow-[0_0_15px_rgba(16,185,129,0.5)] relative z-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent pointer-events-none"></div>
</div>
<div className="w-3/4 h-2 bg-white/20 rounded-full"></div>
<div className="w-1/2 h-2 bg-white/10 rounded-full"></div>
<div className="w-full h-8 sm:h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-md mt-auto flex items-center justify-center">
<div className="w-1/2 h-1.5 bg-emerald-400/50 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="relative z-10 w-52 sm:w-72 h-[320px] sm:h-[440px] flex flex-col overflow-hidden border-white/20 border rounded-r-2xl pt-6 pr-6 pb-6 pl-6 sm:pt-10 sm:pr-10 sm:pb-10 sm:pl-10 shadow-2xl justify-between group transition-transform duration-700 hover:-translate-y-2" style={{background: 'linear-gradient(135deg, #059669 0%, #064E3B 50%, #022C22 100%)', transform: 'perspective(1000px) rotateY(-10deg) rotateX(5deg)', boxShadow: '-30px 30px 60px rgba(0, 0, 0, 0.9), 0 0 50px rgba(16, 185, 129, 0.3), inset 2px 0 15px rgba(255,255,255,0.3)'}}>

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-60 pointer-events-none"></div>

<div className="absolute inset-y-0 left-0 w-3 sm:w-4 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
<div className="absolute inset-y-0 left-3 sm:left-4 w-px bg-white/30"></div>
<div className="absolute inset-y-0 left-4 sm:left-5 w-px bg-black/20"></div>
<div className="relative z-10">
<div className="inline-flex items-center justify-center px-2 py-1 bg-amber-500/20 border border-amber-500/30 rounded text-xs font-medium text-amber-400 tracking-[0.1em] mb-4 shadow-[0_0_15px_rgba(245,158,11,0.2)] backdrop-blur-sm">
                E-BOOK OFICIAL
              </div>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white leading-[1.1] font-manrope drop-shadow-lg">
                Do Zero ao<br/>
<span className="text-emerald-300 drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]">Primeiro Mil</span>
</h2>
</div>
<div className="relative z-10">
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-emerald-400/50 flex items-center justify-center mb-4 sm:mb-6 shadow-[0_0_25px_rgba(16,185,129,0.5)]" style={{background: 'rgba(16, 185, 129, 0.2)', backdropFilter: 'blur(4px)'}}>
<iconify-icon className="text-emerald-300 text-2xl sm:text-3xl" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-xs sm:text-sm text-white/90 font-medium drop-shadow-md">O guia prático para iniciantes</p>
</div>

<div className="absolute bottom-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-emerald-400/40 rounded-tl-full blur-2xl"></div>
<div className="absolute top-10 right-[-20px] w-20 h-20 bg-amber-400/20 rounded-full blur-xl"></div>
</div>

<div className="absolute right-0 sm:-right-4 lg:-right-8 xl:right-4 bottom-4 sm:bottom-10 z-20 w-24 sm:w-36 h-48 sm:h-72 rounded-[1.5rem] sm:rounded-[2rem] p-1 sm:p-1.5 border border-white/20 shadow-[20px_20px_50px_rgba(0,0,0,0.6)]" style={{background: '#262626', transform: 'perspective(1000px) rotateY(-20deg) rotateX(5deg) translateZ(30px)'}}>
<div className="w-full h-full rounded-[1.25rem] sm:rounded-[1.6rem] bg-black border border-white/5 flex flex-col p-2 overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-2 sm:h-3 bg-[#262626] rounded-b-md z-10"></div>

<div className="mt-3 sm:mt-5 flex-1 bg-gradient-to-b from-emerald-900/40 to-black rounded-lg border border-white/5 p-2 flex flex-col items-center justify-center relative">
<div className="absolute top-0 w-full h-1/2 bg-emerald-500/10 blur-xl"></div>
<div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-2 sm:mb-4 border border-emerald-500/30">
<iconify-icon className="text-emerald-400 text-sm sm:text-xl" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-16 sm:w-20 h-1.5 sm:h-2 bg-white/30 rounded-full mb-1.5"></div>
<div className="w-10 sm:w-14 h-1 sm:h-1.5 bg-white/20 rounded-full mb-4 sm:mb-6"></div>
<div className="w-full h-8 sm:h-10 bg-emerald-500 rounded-md mt-auto flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)] relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 w-1/3 skew-x-12 -translate-x-full"></div>
<div className="w-1/2 h-1.5 sm:h-2 bg-emerald-950/60 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:px-8 w-full max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="p-10 lg:p-16 border-white/10 border rounded-3xl" style={{background: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)'}}>
<div className="text-center mb-16">
<p className="uppercase text-xs font-medium text-emerald-400 tracking-widest mb-3">Identifique o problema</p>
<h3 className="text-3xl text-white tracking-tight mb-4 font-manrope font-medium">Você está deixando dinheiro na mesa?</h3>
<p className="text-base text-white/60 max-w-2xl mx-auto">A maioria das pessoas passa a vida inteira trabalhando pelo dinheiro, mas nunca aprende a fazer o dinheiro trabalhar por elas. Reconhece algum desses cenários?</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl border border-white/5" style={{background: 'rgba(255, 255, 255, 0.01)'}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/10" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
<iconify-icon className="text-white/70 text-2xl" icon="solar:safe-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white tracking-tight mb-3 font-manrope">Dinheiro na Poupança</h4>
<p className="text-sm text-white/50 leading-relaxed">Seu dinheiro está parado ou rendendo menos que a inflação. Na prática, você está perdendo poder de compra todos os dias sem perceber.</p>
</div>
<div className="p-8 rounded-2xl border border-white/5" style={{background: 'rgba(255, 255, 255, 0.01)'}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/10" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
<iconify-icon className="text-white/70 text-2xl" icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white tracking-tight mb-3 font-manrope">Excesso de Informação</h4>
<p className="text-sm text-white/50 leading-relaxed">Você tenta aprender na internet, mas esbarra em termos complexos, gráficos confusos e conselhos contraditórios que só causam paralisia.</p>
</div>
<div className="p-8 rounded-2xl border border-white/5" style={{background: 'rgba(255, 255, 255, 0.01)'}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/10" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
<iconify-icon className="text-white/70 text-2xl" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white tracking-tight mb-3 font-manrope">Medo de Perder</h4>
<p className="text-sm text-white/50 leading-relaxed">O medo de errar faz com que você nunca dê o primeiro passo. A falta de um plano claro transforma o investimento em um bicho de sete cabeças.</p>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 lg:px-8 pb-24" id="solucao">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<p className="uppercase text-xs font-medium text-emerald-400 tracking-widest mb-3">A Solução</p>
<h3 className="text-3xl sm:text-4xl text-white tracking-tight mb-6 font-manrope font-medium">Um método desenhado para iniciantes.</h3>
<p className="text-base text-white/60 mb-8 leading-relaxed">
            Criamos este material para ser o exato mapa que queríamos ter tido quando começamos. Sem linguagem difícil, sem falsas promessas de riqueza da noite para o dia. Apenas o passo a passo prático para você construir patrimônio de forma inteligente e segura.
          </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-lg flex items-center justify-center border border-emerald-500/20 shrink-0" style={{background: 'rgba(16, 185, 129, 0.1)'}}>
<iconify-icon className="text-emerald-400" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-medium text-white mb-1 tracking-tight">Comece com Pouco</h4>
<p className="text-sm text-white/60">Descubra como iniciar com menos de R$ 50 e aproveitar os juros compostos ao seu favor.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-lg flex items-center justify-center border border-emerald-500/20 shrink-0" style={{background: 'rgba(16, 185, 129, 0.1)'}}>
<iconify-icon className="text-emerald-400" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-medium text-white mb-1 tracking-tight">Evite Erros Fatais</h4>
<p className="text-sm text-white/60">Conheça as armadilhas comuns que fazem iniciantes perderem dinheiro e blinde sua carteira.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-lg flex items-center justify-center border border-emerald-500/20 shrink-0" style={{background: 'rgba(16, 185, 129, 0.1)'}}>
<iconify-icon className="text-emerald-400" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-medium text-white mb-1 tracking-tight">Tenha Controle Total</h4>
<p className="text-sm text-white/60">Crie um plano financeiro sólido e duradouro, sabendo exatamente onde colocar cada centavo.</p>
</div>
</div>
</div>
</div>

<div className="p-8 lg:p-10 border border-white/10 rounded-3xl" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<h4 className="text-lg font-medium text-white mb-8 tracking-tight font-manrope">O que você vai aprender:</h4>
<div className="relative border-l border-white/10 ml-3 space-y-8">
<div className="relative pl-8">
<div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center text-xs font-medium text-white/60">1</div>
<h5 className="text-base font-medium text-white mb-1">A Mentalidade do Investidor</h5>
<p className="text-sm text-white/50">Como preparar sua mente e seu bolso para parar de gastar errado e começar a acumular valor.</p>
</div>
<div className="relative pl-8">
<div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center text-xs font-medium text-white/60">2</div>
<h5 className="text-base font-medium text-white mb-1">Organização Financeira</h5>
<p className="text-sm text-white/50">O método simples para fazer sobrar dinheiro todo mês, independente do quanto você ganha.</p>
</div>
<div className="relative pl-8">
<div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center text-xs font-medium text-white/60">3</div>
<h5 className="text-base font-medium text-white mb-1">Renda Fixa na Prática</h5>
<p className="text-sm text-white/50">Tesouro Direto, CDBs, LCIs. Entenda os investimentos mais seguros e como escolher o melhor.</p>
</div>
<div className="relative pl-8">
<div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full border border-emerald-500/50 flex items-center justify-center text-xs font-medium text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]" style={{background: 'rgba(16, 185, 129, 0.1)'}}>4</div>
<h5 className="text-base font-medium text-white mb-1">O Caminho até os R$ 1.000</h5>
<p className="text-sm text-white/50">Estratégia prática passo a passo para você ver os primeiros três dígitos se tornarem quatro dígitos na sua conta.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 lg:px-8 pb-24" id="oferta">
<div className="max-w-4xl mx-auto p-1 lg:p-1 rounded-3xl" style={{background: 'linear-gradient(180deg, rgba(16,185,129,0.4) 0%, rgba(255,255,255,0.05) 100%)'}}>
<div className="p-8 lg:p-12 rounded-[22px] bg-[#0A0C0A] border border-white/5 flex flex-col md:flex-row gap-12 items-center">

<div className="flex-1 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 mb-6" style={{background: 'rgba(245, 158, 11, 0.1)'}}>
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-amber-400 tracking-tight">Oferta Especial de Lançamento</span>
</div>
<h3 className="text-3xl text-white tracking-tight mb-4 font-manrope font-medium">Acesso Imediato ao E-book Oficial + Bônus Exclusivos</h3>
<div className="flex flex-col sm:flex-row items-center sm:items-end justify-center md:justify-start gap-4 mb-8">
<div className="text-white/40 line-through text-lg">De R$ 97,00</div>
<div className="flex items-baseline gap-1">
<span className="text-xl text-white/80">Por</span>
<span className="text-5xl text-emerald-400 font-manrope font-medium tracking-tight">R$ 27</span>
</div>
</div>
<a className="w-full md:w-auto inline-flex items-center justify-center px-10 py-5 rounded-xl bg-emerald-500 text-emerald-950 text-base font-medium transition-all duration-300 hover:bg-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.3)] mb-4" href="#">
              Garantir Meu Acesso Agora
              <iconify-icon className="ml-2 text-xl" icon="solar:cart-large-linear" strokeWidth="1.5"></iconify-icon>
</a>
<p className="text-xs text-white/40 flex items-center justify-center md:justify-start gap-2">
<iconify-icon icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
              Pagamento 100% seguro via Hotmart
            </p>
</div>

<div className="w-full md:w-80 space-y-4">

<div className="p-6 rounded-2xl border border-white/10" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<h4 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:gift-linear" strokeWidth="1.5"></iconify-icon>
                Bônus Inclusos
              </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs text-white/70">Checklist do Investidor Iniciante</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs text-white/70">Planilha de Controle Financeiro</span>
</li>
</ul>
</div>

<div className="p-6 rounded-2xl border border-white/10" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-emerald-500/20" style={{background: 'rgba(16, 185, 129, 0.1)'}}>
<iconify-icon className="text-emerald-400 text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Garantia de 7 Dias</h4>
<p className="text-xs text-white/60">Risco zero. Se não gostar do conteúdo, devolvemos 100% do seu dinheiro.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

    </>
  );
}
