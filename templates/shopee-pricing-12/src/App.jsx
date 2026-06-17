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
colors: {
brand: {
black: '#18181B', /* Zinc 900 */
primary: '#FACC15', /* Yellow 400 */
primaryDark: '#EAB308', /* Yellow 500 */
gray: '#F4F4F5',
}
},
boxShadow: {
'card': '0 0 0 1px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.05)',
'hard': '4px 4px 0px 0px rgba(0,0,0,1)',
'glow': '0 0 20px rgba(250, 204, 21, 0.3)',
}
}
}
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
      

<div className="bg-black w-full py-2.5 text-center sticky top-0 z-[60]">
<p className="text-xs font-medium text-white tracking-wide">
<span className="text-brand-primary font-sans">Atenção:</span> Algoritmo da Shopee atualizado hoje. <a className="underline decoration-brand-primary underline-offset-4 ml-1 hover:text-brand-primary transition-colors font-sans" href="#">Verificar riscos</a>
</p>
</div>

<nav className="w-full px-6 py-5 flex items-center justify-between relative z-50 max-w-7xl mx-auto">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="bg-brand-primary text-black p-1.5 rounded-none border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3l-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<span className="text-xl font-bold tracking-tighter text-black font-sans">reveenew<span className="text-brand-black/70 font-sans">.io</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
<a className="hover:text-black transition-colors font-sans" href="#">Calculadora</a>
<a className="hover:text-black transition-colors font-sans" href="#">Anti-Ban</a>
<a className="hover:text-black transition-colors font-sans" href="#">Preços</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-semibold text-black hover:underline underline-offset-4 font-sans" href="#">Entrar</a>
<a className="hover:bg-white transition-all hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] text-xs font-bold text-black border-black border pt-2.5 pr-6 pb-2.5 pl-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-sans" href="#">
                Testar Grátis
            </a>
</div>
</nav>

<div className="absolute inset-0 z-0 pointer-events-none bg-grid-dashed h-[120vh]"></div>

<main className="relative z-10 w-full">

<section className="flex flex-col text-center max-w-5xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 items-center justify-center">
<div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white shadow-sm mb-6">
<span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 font-sans">Sistema de Proteção de Loja V2.0</span>
</div>
<h1 className="animate-fade-up md:text-7xl leading-[1.05] serif text-5xl text-black tracking-tight mb-8 font-sans font-semibold">
                Nós deciframos o<br/>
                algoritmo da <span className="bg-brand-primary px-2 font-sans font-semibold">Shopee.</span>
</h1>
<p className="animate-fade-up delay-100 text-zinc-500 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed font-light font-sans">
                A única plataforma que prepara sua loja para o sucesso, protegendo contra banimentos e calculando a margem real escondida nas taxas.
            </p>
<div className="animate-fade-up delay-200 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
<a className="w-full sm:w-auto text-sm font-bold text-white bg-black border border-black px-8 py-4 hover:bg-zinc-800 transition-all shadow-lg shadow-black/20 flex items-center justify-center gap-2 font-sans" href="#">
                    Verificar Minha Loja
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full sm:w-auto text-sm font-bold text-black border border-zinc-300 bg-white px-8 py-4 hover:bg-zinc-50 transition-all flex items-center justify-center gap-2 font-sans" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:play" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Como funciona
                </a>
</div>

<div className="animate-fade-up delay-300 mt-16 pt-8 border-t border-zinc-200 w-full flex flex-col items-center">
<p className="text-[10px] text-zinc-400 mb-4 font-medium uppercase tracking-widest font-sans">Totalmente integrado com</p>
<div className="flex items-center gap-2 font-bold text-zinc-800 text-xl font-sans bg-white px-6 py-3 rounded-full border border-zinc-200 shadow-sm">
<svg aria-hidden="true" className="iconify text-orange-500 iconify--lucide" data-icon="lucide:shopping-cart" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path className="" d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></g></svg> 
                    Shopee
                </div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 pb-32">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl text-black serif tracking-tight font-semibold mb-4">Suite de Inteligência</h2>
<p className="text-zinc-500 max-w-2xl mx-auto font-sans">Ferramentas visuais construídas especificamente para a complexidade da Shopee.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="md:col-span-7 bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-card group hover:border-zinc-400 transition-colors">
<div className="p-6 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
<div className="flex items-center gap-2">
<div className="bg-blue-100 p-1.5 rounded text-blue-600">
<svg className="lucide lucide-calculator" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
</div>
<h3 className="font-semibold text-zinc-800 font-sans text-sm">Calculadora Reversa</h3>
</div>
<span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">ATIVA</span>
</div>
<div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-8">

<div className="space-y-4">
<div>
<label className="text-xs font-bold text-zinc-500 uppercase">Preço de Custo</label>
<div className="flex items-center mt-1 border border-zinc-300 rounded bg-white px-3 py-2">
<span className="text-zinc-400 text-sm mr-2">R$</span>
<span className="text-zinc-800 font-mono font-medium">45,00</span>
</div>
</div>
<div>
<label className="text-xs font-bold text-zinc-500 uppercase">Margem Desejada</label>
<div className="mt-1 w-full bg-zinc-100 rounded-full h-2 relative">
<div className="bg-brand-primary h-2 rounded-full w-[30%]"></div>
<div className="absolute -top-1 left-[30%] w-4 h-4 bg-black rounded-full border-2 border-white shadow"></div>
</div>
<div className="flex justify-between mt-1">
<span className="text-[10px] text-zinc-400">10%</span>
<span className="text-xs font-bold text-black">30%</span>
<span className="text-[10px] text-zinc-400">50%</span>
</div>
</div>
<div>
<label className="text-xs font-bold text-zinc-500 uppercase">Taxas Shopee</label>
<div className="flex gap-2 mt-1">
<span className="bg-zinc-100 border border-zinc-200 px-2 py-1 rounded text-[10px] text-zinc-600">Comissão 14%</span>
<span className="bg-zinc-100 border border-zinc-200 px-2 py-1 rounded text-[10px] text-zinc-600">Frete Grátis 6%</span>
</div>
</div>
</div>

<div className="bg-zinc-900 rounded-xl p-5 flex flex-col justify-between text-white relative overflow-hidden shadow-lg">
<div className="absolute top-0 right-0 w-20 h-20 bg-brand-primary/20 blur-2xl rounded-full"></div>
<div>
<p className="text-zinc-400 text-xs mb-1">Preço "De" Inflado (Sugerido)</p>
<p className="text-lg font-mono text-zinc-300 line-through">R$ 139,90</p>
</div>
<div className="mt-4">
<p className="text-brand-primary text-xs font-bold uppercase mb-1">Preço Final de Venda</p>
<p className="text-3xl font-bold tracking-tight font-sans">R$ 99,90</p>
<div className="mt-2 flex items-center gap-2 text-[10px] text-zinc-400">
<svg className="lucide lucide-check text-green-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                    Lucro Líquido: R$ 22,40
                                </div>
</div>
</div>
</div>
</div>

<div className="md:col-span-5 bg-black text-white rounded-2xl border border-zinc-800 overflow-hidden shadow-card flex flex-col relative">
<div className="p-6 border-b border-zinc-800 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="bg-zinc-800 p-1.5 rounded text-white border border-zinc-700">
<svg className="lucide lucide-calendar-clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path><path d="M15.5 17a2.5 2.5 0 0 1 5 0V22"></path></svg>
</div>
<h3 className="font-semibold font-sans text-sm">Calendário Anti-Ban</h3>
</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="flex justify-between items-end mb-4">
<div className="text-xs text-zinc-400">Outubro 2023</div>
<div className="flex gap-2 text-[10px]">
<span className="flex items-center gap-1 text-zinc-500"><span className="w-2 h-2 rounded-full bg-zinc-800"></span> Risco</span>
<span className="flex items-center gap-1 text-zinc-300"><span className="w-2 h-2 rounded-full bg-brand-primary"></span> Seguro</span>
</div>
</div>

<div className="grid grid-cols-7 gap-2 mb-4">

<div className="text-center text-[10px] text-zinc-600">D</div>
<div className="text-center text-[10px] text-zinc-600">S</div>
<div className="text-center text-[10px] text-zinc-600">T</div>
<div className="text-center text-[10px] text-zinc-600">Q</div>
<div className="text-center text-[10px] text-zinc-600">Q</div>
<div className="text-center text-[10px] text-zinc-600">S</div>
<div className="text-center text-[10px] text-zinc-600">S</div>

<div className="aspect-square rounded bg-zinc-900 border border-zinc-800 opacity-50"></div>
<div className="aspect-square rounded bg-zinc-900 border border-zinc-800 opacity-50"></div>
<div className="aspect-square rounded bg-red-900/20 border border-red-900/50 flex items-center justify-center text-red-500 text-xs font-bold relative group cursor-help">
                                1
                                <div className="absolute bottom-full mb-1 bg-red-600 text-white text-[9px] px-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">Alteração de Preço</div>
</div>
<div className="aspect-square rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 text-xs">2</div>
<div className="aspect-square rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 text-xs">3</div>
<div className="aspect-square rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 text-xs">4</div>
<div className="aspect-square rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 text-xs">5</div>

<div className="aspect-square rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 text-xs">6</div>
<div className="aspect-square rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 text-xs">7</div>
<div className="aspect-square rounded bg-brand-primary border border-yellow-300 flex items-center justify-center text-black font-bold text-xs shadow-[0_0_10px_rgba(250,204,21,0.4)] animate-pulse">8</div>
<div className="aspect-square rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 text-xs">9</div>

</div>
<div className="mt-auto bg-zinc-900 p-3 rounded border-l-2 border-brand-primary">
<p className="text-xs text-white">Sua promoção estará segura a partir do dia <strong>08</strong>.</p>
</div>
</div>
</div>

<div className="md:col-span-4 bg-zinc-50 rounded-2xl border border-zinc-200 p-6 shadow-card flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="bg-red-100 p-1.5 rounded text-red-600">
<svg className="lucide lucide-heart-pulse" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
</div>
<h3 className="font-semibold font-sans text-sm">Saúde da Loja</h3>
</div>

<div className="mb-2 flex justify-between text-xs font-bold">
<span>Score de Segurança</span>
<span className="text-orange-500">Atenção Necessária</span>
</div>
<div className="w-full bg-zinc-200 rounded-full h-3 mb-6 overflow-hidden">
<div className="bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 h-full w-[75%]"></div>
</div>

<div className="bg-white p-3 rounded border-l-4 border-red-500 shadow-sm mb-3">
<div className="flex justify-between items-start">
<h4 className="text-xs font-bold text-red-600">Risco Crítico Detectado</h4>
<span className="text-[9px] text-zinc-400">2 min</span>
</div>
<p className="text-[11px] text-zinc-600 mt-1 leading-tight">Produto SKU-192 aumentou o preço &gt;10% antes da promoção. Risco de ban.</p>
</div>

<div className="bg-white p-3 rounded border-l-4 border-brand-primary shadow-sm">
<div className="flex justify-between items-start">
<h4 className="text-xs font-bold text-zinc-800">Sugestão de Otimização</h4>
<span className="text-[9px] text-zinc-400">1h</span>
</div>
<p className="text-[11px] text-zinc-600 mt-1 leading-tight">Aumente o preço "De" do produto SKU-55 para R$ 50,00 para maximizar o desconto visível.</p>
</div>
</div>
</div>

<div className="md:col-span-8 bg-brand-primary rounded-2xl border border-black/10 p-8 shadow-card relative overflow-hidden flex flex-col md:flex-row items-center gap-8">

<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="relative z-10 flex-1">
<div className="inline-block bg-black text-brand-primary text-[10px] font-bold px-2 py-1 rounded mb-3">ENGENHARIA REVERSA</div>
<h3 className="text-2xl font-bold text-black serif mb-2">Deciframos o Algoritmo</h3>
<p className="text-black/80 text-sm font-medium leading-relaxed">
                            Nós preparamos sua loja. Nossa tecnologia analisa os metadados da Shopee para encontrar o ponto exato onde o algoritmo impulsiona seu produto organicamente.
                        </p>
<button className="mt-6 bg-black text-white px-5 py-2.5 rounded text-xs font-bold hover:bg-zinc-800 transition-colors shadow-hard">
                            Otimizar Meus Anúncios
                        </button>
</div>

<div className="relative z-10 bg-white p-4 rounded-xl border border-black shadow-hard w-full md:w-64">
<div className="flex justify-between items-center mb-4">
<span className="text-[10px] font-bold text-zinc-400">IMPRESSÕES ORGÂNICAS</span>
</div>
<div className="flex items-end gap-1 h-24">
<div className="w-1/6 bg-zinc-200 rounded-t h-[20%]"></div>
<div className="w-1/6 bg-zinc-200 rounded-t h-[30%]"></div>
<div className="w-1/6 bg-zinc-300 rounded-t h-[25%] relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[8px] px-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">Ban</div>
</div>
<div className="w-1/6 bg-black rounded-t h-[60%] relative">
<div className="absolute top-0 right-0 w-2 h-2 bg-brand-primary rounded-full -mt-1 -mr-1 animate-ping"></div>
</div>
<div className="w-1/6 bg-black rounded-t h-[85%]"></div>
<div className="w-1/6 bg-black rounded-t h-[100%]"></div>
</div>
<div className="mt-3 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-[10px] font-bold text-zinc-800">Otimização Ativa</span>
</div>
</div>
</div>
</div>
</section>

<section className="text-white bg-black border-zinc-800 border-t pt-24 pr-4 pb-24 pl-4 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="text-center max-w-4xl mr-auto ml-auto relative z-10">
<h2 className="text-4xl md:text-6xl serif mb-6 tracking-tight font-sans font-semibold">
                    Pare de jogar no escuro.
                </h2>
<p className="text-zinc-400 text-lg mb-10 font-light max-w-xl mx-auto font-sans">
                    Nós cuidamos da matemática e da segurança. Você foca em vender.
                </p>
<div className="flex flex-col md:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<a className="w-full md:w-auto bg-brand-primary text-black font-bold text-sm px-10 py-4 hover:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] font-sans" href="#">
                        Começar Otimização Agora
                    </a>
<a className="w-full md:w-auto bg-transparent border border-zinc-700 text-white font-bold text-sm px-10 py-4 hover:bg-zinc-900 transition-colors font-sans" href="#">
                        Falar com Consultor
                    </a>
</div>
<div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-600 gap-4">
<span className="font-sans">© 2024 reveenew.io Tecnologia.</span>
<div className="flex gap-6">
<a className="hover:text-white font-sans" href="#">Termos</a>
<a className="hover:text-white font-sans" href="#">Privacidade</a>
<a className="hover:text-white font-sans" href="#">Planos</a>
</div>
</div>
</div>
</section>
</main>

    </>
  );
}
