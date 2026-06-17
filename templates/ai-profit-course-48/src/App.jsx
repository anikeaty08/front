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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/90 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#ffc803] fill-[#ffc803]" data-lucide="zap"></i>
<span className="text-white font-bold tracking-tight text-base">AI.PROFIT</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#metodo">Como Funciona</a>
<a className="hover:text-white transition-colors" href="#resultados">Depoimentos</a>
<a className="text-black bg-[#ffc803] hover:bg-[#ffc803]/90 px-5 py-2 rounded-full transition-all font-semibold shadow-[0_0_15px_rgba(255,200,3,0.4)]" href="#oferta">
                    Quero Lucrar
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#ffc803] opacity-[0.08] blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ffc803]/30 bg-[#ffc803]/10 text-[#ffc803] text-xs font-semibold mb-8 uppercase tracking-wider">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc803] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffc803]"></span>
</span>
                Método Validado 2024
            </div>

<h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Transforme seu Computador em uma <br className="hidden md:block"/>
<span className="text-[#ffc803] text-glow">Máquina de Imprimir Dinheiro</span>
</h1>

<p className="text-lg text-zinc-400 font-normal max-w-xl mx-auto mb-10 leading-relaxed">
                Descubra como copiar e colar automações de Inteligência Artificial para empresas e faturar de R$ 3k a R$ 10k por contrato. <span className="text-white font-medium">Sem saber uma linha de código.</span>
</p>

<div className="relative w-full aspect-video rounded-xl bg-zinc-900 border border-white/10 shadow-2xl yellow-glow flex items-center justify-center group cursor-pointer overflow-hidden mb-12">
<img alt="Faturamento" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>

<div className="relative z-10 w-20 h-20 rounded-full bg-[#ffc803] flex items-center justify-center shadow-[0_0_30px_rgba(255,200,3,0.5)] group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8 text-black ml-1 fill-black" data-lucide="play"></i>
</div>
<div className="absolute bottom-6 left-0 w-full text-center">
<p className="text-white text-sm font-semibold tracking-wide uppercase">Ver aula introdutória</p>
</div>
</div>
<a className="inline-flex items-center justify-center gap-2 bg-[#ffc803] text-black hover:bg-[#ffc803]/90 px-8 py-4 rounded-lg text-lg font-bold transition-all w-full md:w-auto shadow-[0_0_20px_rgba(255,200,3,0.4)] hover:shadow-[0_0_30px_rgba(255,200,3,0.6)] hover:-translate-y-1" href="#oferta">
                Quero Minha Liberdade Financeira
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<p className="text-xs text-zinc-500 mt-4">Compra segura • Acesso imediato • Garantia de 7 dias</p>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-zinc-900/20" id="metodo">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-white tracking-tight">O mercado mudou. <span className="text-[#ffc803]">E você?</span></h2>
<p className="text-zinc-400 mt-3 max-w-2xl mx-auto">Vender sites ou design está saturado. O dinheiro grosso agora está em resolver problemas reais usando IA.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative p-8 rounded-2xl glass-dark hover:border-[#ffc803]/30 transition-all duration-300">
<div className="absolute -top-6 left-8 bg-[#050505] border border-white/10 p-3 rounded-xl text-[#ffc803] shadow-lg group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="copy"></i>
</div>
<h3 className="text-xl font-bold text-white mt-4 mb-3">1. Copie</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Receba templates prontos de agentes de IA que atendem WhatsApp, agendam reuniões e vendem produtos.
                    </p>
</div>

<div className="group relative p-8 rounded-2xl glass-dark hover:border-[#ffc803]/30 transition-all duration-300">
<div className="absolute -top-6 left-8 bg-[#050505] border border-white/10 p-3 rounded-xl text-[#ffc803] shadow-lg group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="settings-2"></i>
</div>
<h3 className="text-xl font-bold text-white mt-4 mb-3">2. Configure</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Ajuste para o cliente em 15 minutos usando ferramentas visuais (arrasta e solta). Sem códigos complexos.
                    </p>
</div>

<div className="group relative p-8 rounded-2xl glass-dark hover:border-[#ffc803]/30 transition-all duration-300">
<div className="absolute -top-6 left-8 bg-[#050505] border border-white/10 p-3 rounded-xl text-[#ffc803] shadow-lg group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="wallet"></i>
</div>
<h3 className="text-xl font-bold text-white mt-4 mb-3">3. Lucre</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Cobre mensalidades recorrentes. Seus clientes pagam feliz porque a IA economiza milhares de reais para eles.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="resultados">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center">

<div className="w-full md:w-1/3">
<h2 className="text-3xl font-bold text-white tracking-tight mb-4">Resultados de<br/>Gente Comum</h2>
<p className="text-zinc-400 mb-6 text-sm">
                        Não são gênios da computação. São pessoas que decidiram sair da estagnação e aplicaram o método passo a passo.
                    </p>
<div className="flex items-center gap-2 mb-2">
<div className="flex text-[#ffc803]">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<span className="font-bold text-white">4.9/5</span>
</div>
<p className="text-xs text-zinc-500">Média baseada em +1.200 alunos</p>
</div>

<div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-zinc-900 border border-white/5 p-5 rounded-xl">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-white">R</div>
<div>
<p className="text-white text-sm font-medium">Rafael Souza</p>
<p className="text-zinc-500 text-xs">Ex-Motorista de App</p>
</div>
</div>
<p className="text-zinc-300 text-sm leading-snug">"Fechei meu primeiro contrato de R$ 2.500 na segunda semana. Só copiei o bot de atendimento que tem no módulo 3. Surreal."</p>
</div>

<div className="bg-zinc-900 border border-white/5 p-5 rounded-xl">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-white">C</div>
<div>
<p className="text-white text-sm font-medium">Carla M.</p>
<p className="text-zinc-500 text-xs">Designer Gráfico</p>
</div>
</div>
<p className="text-zinc-300 text-sm leading-snug">"Eu vendia logos por 200 reais. Hoje vendi uma automação por 4 mil. O esforço é menor e o lucro é 20x maior."</p>
</div>

<div className="bg-zinc-900 border border-white/5 p-5 rounded-xl md:col-span-2">
<div className="flex justify-between items-start">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-white">M</div>
<div>
<p className="text-white text-sm font-medium">Marcos Paulo</p>
<p className="text-zinc-500 text-xs">Estudante</p>
</div>
</div>
<span className="text-[#ffc803] text-xs font-bold bg-[#ffc803]/10 px-2 py-1 rounded">Venda Confirmada</span>
</div>
<p className="text-zinc-300 text-sm leading-snug">"O melhor investimento que fiz. O suporte no Discord é incrível e os scripts já vêm prontos. Não precisei aprender Python nem nada complicado."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-black" id="oferta">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-[#0a0a0a] border border-[#ffc803]/30 rounded-3xl overflow-hidden shadow-[0_0_50px_-10px_rgba(255,200,3,0.15)]">

<div className="bg-[#ffc803] p-4 text-center">
<span className="text-black font-bold text-sm tracking-wide uppercase">Oferta por Tempo Limitado</span>
</div>
<div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">

<div>
<h3 className="text-2xl font-bold text-white mb-6">O que você recebe hoje:</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#ffc803] shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-zinc-300 text-sm"><strong className="text-white">Curso Completo AI.PROFIT</strong> (Do Zero ao Avançado)</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#ffc803] shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-zinc-300 text-sm"><strong className="text-white">Pack de Scripts Prontos</strong> (É só copiar)</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#ffc803] shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-zinc-300 text-sm"><strong className="text-white">Comunidade de Alunos</strong> (Networking)</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#ffc803] shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-zinc-300 text-sm"><strong className="text-white">Modelos de Contrato</strong> (Blindados)</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#ffc803] shrink-0 mt-0.5" data-lucide="gift"></i>
<span className="text-zinc-300 text-sm">Bônus: Como vender sem aparecer</span>
</li>
</ul>
</div>

<div className="flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
<p className="text-zinc-500 line-through text-sm mb-2">De R$ 997,00 por apenas</p>
<div className="flex items-end gap-1 mb-6">
<span className="text-zinc-400 text-xl font-medium mb-1">12x de</span>
<span className="text-5xl font-bold text-white tracking-tighter">R$ 29,90</span>
</div>
<p className="text-zinc-400 text-xs mb-6">ou R$ 297,00 à vista</p>
<button className="w-full bg-[#ffc803] text-black font-bold py-4 rounded-lg hover:bg-[#ffc803]/90 transition-all shadow-lg hover:shadow-[#ffc803]/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                            Garantir Minha Vaga
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="bg-zinc-900/50 p-4 border-t border-white/5 flex justify-center gap-6">
<div className="flex items-center gap-2 text-zinc-500 text-xs">
<i className="w-4 h-4" data-lucide="shield-check"></i> 7 Dias de Garantia
                    </div>
<div className="flex items-center gap-2 text-zinc-500 text-xs">
<i className="w-4 h-4" data-lucide="lock"></i> Pagamento Seguro
                    </div>
<div className="flex items-center gap-2 text-zinc-500 text-xs">
<i className="w-4 h-4" data-lucide="zap"></i> Acesso Imediato
                    </div>
</div>
</div>
</div>
</section>

<footer className="py-8 border-t border-white/5 bg-[#050505] text-center">
<div className="flex items-center justify-center gap-2 mb-4">
<i className="w-4 h-4 text-[#ffc803] fill-[#ffc803]" data-lucide="zap"></i>
<span className="text-white font-bold tracking-tight text-sm">AI.PROFIT</span>
</div>
<p className="text-zinc-600 text-xs">
            © 2024 AI.PROFIT. Todos os direitos reservados. <br/>
            Este site não faz parte do site do Facebook ou Facebook Inc.
        </p>
</footer>


    </>
  );
}
