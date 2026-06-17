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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
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
      


<section className="h-[100dvh] min-h-[650px] flex flex-col overflow-hidden text-white bg-black z-10 relative">

<div className="absolute inset-0 z-0">

<img alt="Dr. Background" className="w-full h-full object-cover object-[center_right] opacity-90" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent w-full md:w-3/4 lg:w-2/3"></div>
</div>
<div className="flex flex-col lg:px-8 w-full h-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">

<nav className="flex flex-col sm:flex-row sm:items-center sm:py-6 gap-3 sm:gap-6 shrink-0 border-white/10 border-b pt-4 pb-4 gap-x-3 gap-y-3 items-start justify-between">
<div className="text-lg sm:text-xl font-semibold tracking-tight uppercase">
                    O NOVO <span className="text-orange-500">IMPLANTODONTISTA</span>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-gray-300">
<div className="flex items-center gap-2">
<i className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" data-lucide="calendar" strokeWidth="1.5"></i>
<span>02 a 08 de Fev às 20h</span>
</div>
<div className="flex items-center gap-2">
<i className="text-red-500 w-4 h-4 sm:w-5 sm:h-5" data-lucide="play-circle" strokeWidth="1.5"></i>
<span>Online e 100% Gratuito</span>
</div>
</div>
</nav>

<div className="flex flex-col flex-1 justify-center py-6 sm:py-8 w-full max-w-xl">

<h1 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-[1.15] tracking-tight mb-4 text-left">
                    Aprenda o Método Que Permite Operar Qualquer Caso de <span className="text-gradient font-semibold">Carga Imediata</span> Com Segurança
                </h1>
<p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 text-left max-w-md">
                    Evento online e gratuito com Dr. Márcio Foletto<br className="hidden sm:block"/>
                    Descubra como operar casos complexos sem depender de um único caminho.
                </p>

<div className="w-full">
<div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl">
<form className="flex flex-col gap-3">
<div className="relative">
<input className="w-full bg-[#111] border border-gray-700 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="Nome" type="text"/>
</div>
<div className="relative">
<input className="w-full bg-[#111] border border-gray-700 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="Email" type="email"/>
</div>
<div className="flex items-center w-full bg-[#111] border border-gray-700 rounded-xl overflow-hidden focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500 transition-all">
<div className="flex items-center pl-4 pr-3 border-r border-gray-700 py-2.5 sm:py-3 cursor-pointer">
<span className="text-base leading-none">🇧🇷</span>
<i className="text-gray-400 ml-1 w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<input className="w-full bg-transparent px-4 py-2.5 sm:py-3 text-sm text-white placeholder-gray-500 focus:outline-none" placeholder="Seu número de WhatsApp" type="tel"/>
</div>
<button className="mt-1 w-full rounded-xl py-3 sm:py-3.5 px-6 btn-gradient text-white text-sm font-semibold tracking-wide glow-effect hover:scale-[1.02] transition-transform duration-200" type="button">
                                QUERO PARTICIPAR GRATUITAMENTE
                            </button>
<p className="text-center text-gray-400 text-xs mt-2 flex items-center justify-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="lock" strokeWidth="1.5"></i>
                                Seus dados estão seguros. Não enviamos spam.
                            </p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-b border-gray-100 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6">
<div className="flex -space-x-4">
<img alt="Inscrito" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=11"/>
<img alt="Inscrito" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=12"/>
<img alt="Inscrito" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=13"/>
<img alt="Inscrito" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=14"/>
<div className="w-12 h-12 rounded-full border-2 border-white bg-orange-100 text-orange-600 flex items-center justify-center font-medium text-sm">+2k</div>
</div>
<p className="text-xl md:text-2xl font-medium text-gray-800 text-center tracking-tight">
                Mais de <span className="text-orange-500 font-semibold">2850</span> profissionais já estão inscritos
            </p>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16">
<span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Conteúdo</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-2 text-gray-900">
                    Neste evento, você vai descobrir:
                </h2>
</div>
<div className="flex flex-col gap-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
<div className="w-14 h-14 rounded-full bg-[#184f6f] flex items-center justify-center mb-6">
<i className="text-cyan-400 w-7 h-7" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-gray-900 tracking-tight">Maxila atrófica sem enxerto:</h3>
<p className="text-gray-600 text-base leading-relaxed">Quando é possível e como planejar com segurança</p>
</div>
<div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
<div className="w-14 h-14 rounded-full bg-[#184f6f] flex items-center justify-center mb-6">
<i className="text-cyan-400 w-7 h-7" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-gray-900 tracking-tight">O método Plano A, B e C:</h3>
<p className="text-gray-600 text-base leading-relaxed">Nunca mais entre em cirurgia com apenas uma opção</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
<div className="w-14 h-14 rounded-full bg-[#184f6f] flex items-center justify-center mb-6">
<i className="text-cyan-400 w-7 h-7" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-gray-900 tracking-tight">All-on-4, pterigóide, zigomático:</h3>
<p className="text-gray-600 text-base leading-relaxed">Quando indicar cada um (critérios objetivos)</p>
</div>

<div className="bg-[#184f6f] rounded-2xl p-8 shadow-[0_20px_50px_-15px_rgba(2,133,178,0.4)] relative overflow-hidden group">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl group-hover:bg-orange-400/20 transition-colors duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 shadow-md">
<i className="text-[#184f6f] w-7 h-7" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-white tracking-tight">Cirurgia real comentada:</h3>
<p className="text-blue-50/90 text-base leading-relaxed">Veja um caso complexo sendo resolvido com Planejamento por Cenários</p>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
<div className="w-14 h-14 rounded-full bg-[#184f6f] flex items-center justify-center mb-6">
<i className="text-cyan-400 w-7 h-7" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-gray-900 tracking-tight">Como lidar com imprevistos:</h3>
<p className="text-gray-600 text-base leading-relaxed">O que fazer quando o torque não atinge o esperado</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16 text-gray-900">
                Quem é o <span className="text-orange-500 font-semibold">Dr. Márcio Foletto</span>
</h2>
<div className="flex flex-col lg:flex-row bg-[#081a28] rounded-[2rem] overflow-hidden shadow-2xl max-w-5xl mx-auto border border-gray-800">
<div className="lg:w-2/5 relative min-h-[400px]">
<img alt="Dr. Márcio Foletto" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity opacity-70" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#081a28] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#081a28]"></div>
</div>
<div className="lg:w-3/5 p-10 lg:p-14 flex flex-col justify-center text-white relative z-10">
<h3 className="text-2xl md:text-3xl font-medium mb-8 tracking-tight">Muito prazer, eu sou o Marcio Foletto</h3>
<div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
<p>Cirurgião dentista especialista em implantes com foco em reabilitações totais com carga imediata em casos atróficos, bucomaxilofacial.</p>
<p>Mentor e sócio fundador da Escola do Implantodontista e de uma das maiores imersões presenciais com foco em reabilitações avançadas em arcos totais utilizando mesclagem de técnicas buscando 100% de carga imediata em consultório. Com mais de 15 anos de experiência na área e mais 1800 alunos formados, me tornei referência no campo, ajudando cirurgiões dentistas a aprimorarem suas habilidades e alcançarem o sucesso profissional.</p>
<p>Minha metodologia é fundamentada desde procedimentos básicos até cirurgias complexas, como implantes pterigóides, zigomáticos, transnasais e transinusais.</p>
<p>E hoje, meu objetivo é te ensinar um arsenal de técnicas de carga imediata para resolver qualquer caso, até mesmo casos avançados de maxilas atróficas sem enxerto ósseo.</p>
</div>
<div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
<img alt="Avatar Dr." className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-semibold text-sm tracking-tight">MARCIO FOLETTO</span>
<i className="text-blue-500 w-4 h-4" data-lucide="badge-check" strokeWidth="1.5"></i>
</div>
<span className="text-gray-400 text-sm">@drmarciofoletto</span>
</div>
</div>
<div className="text-[10px] text-gray-500 uppercase tracking-widest hidden sm:block">
                            Implantodontia / Evento Gratuito
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-200">
<div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
<div className="text-xl font-semibold tracking-tight uppercase mb-8">
                O NOVO <span className="text-orange-500">IMPLANTODONTISTA</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                Evento online e gratuito com Dr. Márcio Foletto
            </h2>
<p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl">
                Descubra como operar casos complexos de carga imediata sem depender de um único caminho.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium text-gray-700 mb-12">
<div className="flex items-center gap-2">
<i className="text-blue-600 w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i>
<span>02 a 08 de Fevereiro sempre às 20h</span>
</div>
<div className="flex items-center gap-2">
<i className="text-red-500 w-5 h-5" data-lucide="play-circle" strokeWidth="1.5"></i>
<span>Online e 100% Gratuito</span>
</div>
</div>
<div className="w-full max-w-md bg-[#282828] border border-gray-800 rounded-2xl p-6 shadow-xl text-left">
<form className="flex flex-col gap-3">
<div className="relative">
<input className="w-full bg-[#111] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="Nome" type="text"/>
</div>
<div className="relative">
<input className="w-full bg-[#111] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="Email" type="email"/>
</div>
<div className="flex items-center w-full bg-[#111] border border-gray-700 rounded-xl overflow-hidden focus-within:border-orange-500 transition-colors">
<div className="flex items-center pl-4 pr-3 border-r border-gray-700 py-3 cursor-pointer">
<span className="text-base leading-none">🇧🇷</span>
<i className="text-gray-400 ml-1 w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<input className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none" placeholder="Seu número de WhatsApp" type="tel"/>
</div>
<button className="mt-1 w-full rounded-xl py-3.5 px-6 btn-gradient text-white text-sm font-semibold tracking-wide glow-effect hover:scale-[1.02] transition-transform duration-200" type="button">
                        QUERO PARTICIPAR GRATUITAMENTE
                    </button>
<p className="text-center text-gray-400 text-xs mt-2 flex items-center justify-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="lock" strokeWidth="1.5"></i>
                        Seus dados estão seguros. Não enviamos spam.
                    </p>
</form>
</div>
</div>
</section>

<footer className="bg-white py-10 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm text-gray-500 leading-relaxed text-center md:text-left">
<a className="hover:text-gray-900 transition-colors" href="#">Termos de uso e políticas de privacidade</a><br/>
                Escola do Implantodontista © 2026 — Todos os direitos reservados
            </div>
<div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest">
<span>Desenvolvido por:</span>
<span className="font-semibold text-gray-900 tracking-tight text-base">AGÊNCIA</span>
</div>
</div>
</footer>


    </>
  );
}
