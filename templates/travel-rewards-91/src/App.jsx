import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="pt-16 pb-20 px-5 bg-slate-50 border-b border-slate-200">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2540]/5 border border-[#0A2540]/10 mb-8">
<span className="text-sm font-semibold text-[#0A2540] tracking-wide uppercase">
            Professora de Matemática Revela
          </span>
</div>
<h1 className="text-3xl md:text-5xl text-[#0A2540] font-semibold tracking-tight leading-[1.1] mb-6">
          O Método dos 3 Pilares que faz mulheres comuns emitirem passagens pra
          Europa pagando até 5x menos
          <span className="text-slate-400 font-medium">
            — mesmo sem saber nada de milhas
          </span>
</h1>
<p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl leading-relaxed">
          Descubra o padrão matemático que as companhias aéreas escondem — e por
          que a maioria gasta 200 mil milhas numa passagem que custaria 74 mil.
        </p>
<ul className="flex flex-col gap-3 text-lg text-slate-700 mb-10 text-left w-full max-w-md">
<li className="flex items-start gap-3">
<i className="text-orange-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>Funciona pra família inteira (não só pra solteiro)</span>
</li>
<li className="flex items-start gap-3">
<i className="text-orange-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>Sem precisar de cartão black ou milhas acumuladas</span>
</li>
<li className="flex items-start gap-3">
<i className="text-orange-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>Método matemático, não "dica de promoção"</span>
</li>
</ul>

<div className="w-full max-w-3xl mx-auto aspect-video bg-slate-900 rounded-2xl shadow-xl overflow-hidden relative mb-10 ring-1 ring-slate-900/10">

<div className="absolute inset-0 flex flex-col items-center justify-center text-white/50">
<i className="w-16 h-16 mb-4" data-lucide="play-circle" strokeWidth="1.5"></i>
<span className="text-lg">O vídeo começará em instantes...</span>
</div>
</div>

<div className="w-full max-w-md flex flex-col items-center">
<a className="w-full block bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center" href="#oferta">
            QUERO APRENDER O MÉTODO AGORA →
          </a>
<div className="mt-4 flex flex-col items-center gap-2">
<div className="flex items-center gap-1.5 text-sm text-slate-500">
<i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
<span>
                Pagamento seguro · 7 dias de garantia incondicional · Acesso
                imediato
              </span>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#0A2540] py-16 md:py-24 overflow-hidden relative border-y border-slate-200/10">
<div className="max-w-6xl mx-auto px-5 relative z-10 text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
          A Europa está mais perto do que você imagina
        </h2>
<p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Com o Método M3, visitar os destinos mais cobiçados do mundo deixa de
          ser um sonho caro e passa a ser uma realidade acessível.
        </p>
</div>
<div className="flex justify-center items-center h-72 md:h-96 relative w-full max-w-6xl mx-auto">
<div className="absolute w-44 md:w-60 aspect-[4/3] bg-white p-2 md:p-3 rounded-lg shadow-2xl -rotate-12 -translate-x-36 md:-translate-x-72 translate-y-4 hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-300 cursor-pointer z-10 group">
<img alt="Paris" className="w-full h-full object-cover rounded shadow-inner" src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<p className="text-center font-medium text-slate-700 mt-2 text-sm md:text-base font-['Inter']">
            Paris, França
          </p>
</div>
<div className="absolute w-40 md:w-56 aspect-[3/4] bg-white p-2 md:p-3 rounded-lg shadow-2xl -rotate-6 -translate-x-12 md:-translate-x-24 -translate-y-8 hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-300 cursor-pointer z-20 group">
<img alt="Roma" className="w-full h-full object-cover rounded shadow-inner" src="https://images.unsplash.com/photo-1522814785465-dbafb9d104fb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<p className="text-center font-medium text-slate-700 mt-2 text-sm md:text-base font-['Inter']">
            Roma, Itália
          </p>
</div>
<div className="absolute w-48 md:w-64 aspect-[4/3] bg-white p-2 md:p-3 rounded-lg shadow-2xl rotate-3 translate-x-16 md:translate-x-32 translate-y-6 hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-300 cursor-pointer z-20 group">
<img alt="Amsterdã" className="w-full h-full object-cover rounded shadow-inner" src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<p className="text-center font-medium text-slate-700 mt-2 text-sm md:text-base font-['Inter']">
            Amsterdã, Holanda
          </p>
</div>
<div className="absolute w-40 md:w-56 aspect-[3/4] bg-white p-2 md:p-3 rounded-lg shadow-2xl rotate-12 translate-x-48 md:translate-x-80 -translate-y-4 hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-300 cursor-pointer z-10 group">
<img alt="Madri" className="w-full h-full object-cover rounded shadow-inner" src="https://images.unsplash.com/photo-1515586835220-1a20268f23bf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<p className="text-center font-medium text-slate-700 mt-2 text-sm md:text-base font-['Inter']">
            Madri, Espanha
          </p>
</div>
</div>
</section>

<section className="relative bg-slate-50 flex flex-col lg:flex-row border-y border-slate-200 overflow-hidden" id="o-inimigo">
<div className="lg:w-1/2 relative min-h-[400px] lg:min-h-auto overflow-hidden">
<img alt="Mapa de rotas" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-orange-900/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-50 lg:block hidden"></div>
<div className="absolute inset-0 bg-gradient-to-t from-transparent to-slate-50 lg:hidden block"></div>
<svg className="absolute inset-0 w-full h-full z-10" preserveaspectratio="xMidYMid slice" viewbox="0 0 100 100">
<path d="M30 40 Q 50 20 70 60" fill="none" stroke="rgba(255,255,255,0.6)" stroke-dasharray="2 2" strokeWidth="0.5"></path>
</svg>
<div className="absolute top-[40%] left-[30%] z-20 flex items-center justify-center">
<div className="w-3 h-3 bg-white rounded-full shadow-[0_0_0_4px_rgba(255,255,255,0.3)]"></div>
<div className="w-3 h-3 bg-white rounded-full absolute animate-ping"></div>
</div>
<div className="absolute top-[60%] left-[70%] z-20 flex items-center justify-center">
<div className="w-3 h-3 bg-white rounded-full shadow-[0_0_0_4px_rgba(255,255,255,0.3)]"></div>
<div className="w-3 h-3 bg-white rounded-full absolute animate-ping" style={{animationDelay: '1s'}}></div>
</div>
</div>
<div className="lg:w-1/2 py-20 px-6 lg:px-16 xl:px-24 flex items-center bg-slate-50 relative z-10">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl text-[#0A2540] font-semibold tracking-tight mb-6">
            Por que a maioria paga 3x mais nas milhas pra Europa
            <span className="text-slate-400 font-medium">(sem saber)</span>
</h2>
<p className="text-lg text-slate-700 mb-8">
            O mercado de milhas virou uma bagunça de "dicas rápidas". As pessoas
            seguem a manada sem aplicar lógica matemática. O resultado?
          </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-4 p-5 rounded-xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-red-500" data-lucide="x" strokeWidth="2"></i>
</div>
<p className="text-base text-slate-700 leading-relaxed">
<strong className="font-semibold text-[#0A2540]">
                  Acreditam no efeito manada:
                </strong>
                "Manda pra TAP que é o melhor" — sem calcular o custo real dessa
                transferência.
              </p>
</li>
<li className="flex items-start gap-4 p-5 rounded-xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-red-500" data-lucide="x" strokeWidth="2"></i>
</div>
<p className="text-base text-slate-700 leading-relaxed">
<strong className="font-semibold text-[#0A2540]">
                  Pesquisam errado:
                </strong>
                Buscam o voo direto pro destino final, ignorando que esse é o
                caminho mais caro.
              </p>
</li>
<li className="flex items-start gap-4 p-5 rounded-xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-red-500" data-lucide="x" strokeWidth="2"></i>
</div>
<p className="text-base text-slate-700 leading-relaxed">
<strong className="font-semibold text-[#0A2540]">
                  Não comparam tabelas:
                </strong>
                A mesma poltrona pode variar até 165 mil milhas dependendo do
                programa.
              </p>
</li>
</ul>
<div className="bg-orange-500/20 border-l-4 border-orange-500 p-6 rounded-r-xl">
<p className="text-lg text-[#0A2540] font-medium leading-relaxed">
              "A mesma passagem — mesmo avião, mesmo assento, mesmo dia — pode
              custar 50 mil milhas num programa e 130 mil em outro. Isso não é
              sorte. É matemática."
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-5 bg-slate-50 border-y border-slate-200">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl text-[#0A2540] font-semibold tracking-tight mb-6">
          Por que a maioria das brasileiras paga 3x mais nas milhas pra Europa
          <span className="text-slate-400 font-medium">(sem saber)</span>
</h2>
<p className="text-lg text-slate-700 mb-8">
          O mercado de milhas virou uma bagunça de "dicas rápidas". As pessoas
          seguem o que todo mundo está fazendo sem aplicar nenhuma lógica
          matemática. O resultado?
        </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-4 p-4 rounded-xl bg-white ring-1 ring-slate-200 shadow-sm">
<div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
<i className="w-4 h-4 text-red-500" data-lucide="x" strokeWidth="2"></i>
</div>
<p className="text-lg text-slate-700">
<strong className="font-semibold text-[#0A2540]">
                Acreditam no efeito manada:
              </strong>
              "Manda pra TAP que é o melhor" — sem calcular o custo real dessa
              transferência.
            </p>
</li>
<li className="flex items-start gap-4 p-4 rounded-xl bg-white ring-1 ring-slate-200 shadow-sm">
<div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
<i className="w-4 h-4 text-red-500" data-lucide="x" strokeWidth="2"></i>
</div>
<p className="text-lg text-slate-700">
<strong className="font-semibold text-[#0A2540]">
                Pesquisam errado:
              </strong>
              Buscam o voo direto pro destino final, ignorando que esse é
              matematicamente o caminho mais caro.
            </p>
</li>
<li className="flex items-start gap-4 p-4 rounded-xl bg-white ring-1 ring-slate-200 shadow-sm">
<div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
<i className="w-4 h-4 text-red-500" data-lucide="x" strokeWidth="2"></i>
</div>
<p className="text-lg text-slate-700">
<strong className="font-semibold text-[#0A2540]">
                Não comparam tabelas:
              </strong>
              Não sabem que a mesma poltrona pode variar até 165 mil milhas de
              diferença dependendo de onde você emite.
            </p>
</li>
</ul>
<div className="bg-orange-500/20 border-l-4 border-orange-500 p-6 rounded-r-xl">
<p className="text-xl text-[#0A2540] font-medium leading-relaxed">
            "A mesma passagem — mesmo avião, mesmo assento, mesmo dia — pode
            custar 50 mil milhas num programa e 130 mil em outro. Isso não é
            sorte. É matemática."
          </p>
</div>
</div>
</section>

<section className="py-24 px-5 bg-[#0A2540] text-white relative overflow-hidden">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.05] mix-blend-luminosity pointer-events-none" src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 aspect-square md:aspect-[4/5] bg-slate-100 rounded-2xl relative overflow-hidden flex items-center justify-center ring-1 ring-slate-200">

<i className="w-20 h-20 text-slate-300" data-lucide="image" strokeWidth="1"></i>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl ring-1 ring-slate-200/50">
<p className="font-semibold text-[#0A2540]">Sandra Spalla</p>
<p className="text-sm text-slate-600">
              Professora de Matemática e Criadora do Método M3
            </p>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl md:text-4xl text-[#0A2540] font-semibold tracking-tight mb-6">
            Como uma professora de matemática descobriu o padrão que as
            companhias aéreas escondem
          </h2>
<div className="space-y-4 text-lg text-slate-700">
<p>
              Durante anos, eu acompanhei grupos de milhas e via pessoas
              celebrando emissões que, na ponta do lápis, eram um péssimo
              negócio. Eu olhava para os números e a conta não fechava.
            </p>
<p>
              Meu ponto de virada foi ver o "erro do milhão de milhas" na TAP.
              Pessoas transferindo freneticamente sem entender a tabela fixa e
              perdendo milhares de reais no processo.
            </p>
<p>
              Foi aí que meu lado de professora de matemática assumiu. Abri
              planilhas. Comecei a cruzar dados de programas de fidelidade,
              rotas, taxas e custos de geração. O que eu encontrei não foi um
              truque, foi um padrão exato.
            </p>
<p>
              Descobri que viajar barato não depende do cartão que você tem, mas
              de um sistema de 3 variáveis. Quando você domina essas 3
              variáveis, você quebra o código de qualquer passagem.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-5 bg-[#0A2540] text-white">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            O Método M3 — Os 3 Pilares da Emissão Perfeita
          </h2>
<p className="text-xl text-slate-300 max-w-2xl mx-auto">
            O sistema matemático que decide se você vai pagar R$15.000 ou
            R$3.000 na sua próxima viagem para a Europa.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative">
<div className="text-6xl font-semibold text-white/10 absolute top-4 right-6">
              1
            </div>
<div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-xl flex items-center justify-center mb-6">
<i data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
              ACÚMULO
            </h3>
<p className="text-lg text-slate-300 leading-relaxed">
              Como ter milhas suficientes sem ser viajante frequente.
              Estratégias do dia a dia (como a aluna que garantiu a viagem
              comprando um celular).
            </p>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative">
<div className="text-6xl font-semibold text-white/10 absolute top-4 right-6">
              2
            </div>
<div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-xl flex items-center justify-center mb-6">
<i data-lucide="calculator" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
              CUSTO DO MILHEIRO
            </h3>
<p className="text-lg text-slate-300 leading-relaxed">
              Por que ter milha não basta — ela precisa ter custado pouco. A
              matemática para nunca pagar mais pela milha do que ela vale na
              emissão.
            </p>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative">
<div className="text-6xl font-semibold text-white/10 absolute top-4 right-6">
              3
            </div>
<div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-xl flex items-center justify-center mb-6">
<i data-lucide="compass" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
              CONHECIMENTO DE EMISSÃO
            </h3>
<p className="text-lg text-slate-300 leading-relaxed">
              A fórmula final: cruzar o programa certo + a porta de entrada
              estratégica + encontrar a disponibilidade real de assentos.
            </p>
</div>
</div>

<div className="mt-16 flex flex-col items-center">
<a className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold py-4 px-10 rounded-xl shadow-lg transition-all text-center" href="#oferta">
            QUERO DOMINAR OS 3 PILARES →
          </a>
<p className="mt-3 text-sm text-slate-400">
            🔒 Compra segura · Acesso imediato
          </p>
</div>
</div>
</section>

<section className="py-24 px-5 bg-white">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl md:text-4xl text-[#0A2540] font-semibold tracking-tight text-center mb-16">
          Método tradicional vs Método M3
        </h2>
<div className="flex flex-col gap-3">

<div className="hidden md:grid grid-cols-2 gap-6 px-6 pb-2 border-b border-slate-200">
<div className="font-semibold text-slate-400 tracking-wider text-sm uppercase">
              Como a maioria faz ❌
            </div>
<div className="font-semibold text-orange-500 tracking-wider text-sm uppercase">
              O Método M3 ✓
            </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
<div className="bg-red-50 rounded-xl p-5 flex items-start gap-4 ring-1 ring-red-100">
<i className="text-red-500 shrink-0 mt-0.5" data-lucide="x" strokeWidth="2"></i>
<span className="text-lg text-slate-700">
                Joga milhas no programa "da moda" sem pensar.
              </span>
</div>
<div className="bg-orange-50 rounded-xl p-5 flex items-start gap-4 ring-1 ring-orange-100">
<i className="text-orange-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-slate-800 font-medium">
                Escolhe o programa pela tabela matemática de cada rota.
              </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
<div className="bg-red-50 rounded-xl p-5 flex items-start gap-4 ring-1 ring-red-100">
<i className="text-red-500 shrink-0 mt-0.5" data-lucide="x" strokeWidth="2"></i>
<span className="text-lg text-slate-700">
                Pesquisa o voo direto para o destino final (mais caro).
              </span>
</div>
<div className="bg-orange-50 rounded-xl p-5 flex items-start gap-4 ring-1 ring-orange-100">
<i className="text-orange-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-slate-800 font-medium">
                Usa portas de entrada estratégicas (Lisboa/Madrid).
              </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
<div className="bg-red-50 rounded-xl p-5 flex items-start gap-4 ring-1 ring-red-100">
<i className="text-red-500 shrink-0 mt-0.5" data-lucide="x" strokeWidth="2"></i>
<span className="text-lg text-slate-700">
                Aceita o primeiro preço que aparece na tela.
              </span>
</div>
<div className="bg-orange-50 rounded-xl p-5 flex items-start gap-4 ring-1 ring-orange-100">
<i className="text-orange-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-slate-800 font-medium">
                Compara no mínimo 5 programas antes de emitir.
              </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
<div className="bg-red-50 rounded-xl p-5 flex items-start gap-4 ring-1 ring-red-100">
<i className="text-red-500 shrink-0 mt-0.5" data-lucide="x" strokeWidth="2"></i>
<span className="text-lg text-slate-700">
                Paga 200 mil milhas numa passagem comum.
              </span>
</div>
<div className="bg-orange-50 rounded-xl p-5 flex items-start gap-4 ring-1 ring-orange-100">
<i className="text-orange-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-slate-800 font-medium">
                Emite a exata mesma passagem por 74 mil.
              </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
<div className="bg-red-50 rounded-xl p-5 flex items-start gap-4 ring-1 ring-red-100">
<i className="text-red-500 shrink-0 mt-0.5" data-lucide="x" strokeWidth="2"></i>
<span className="text-lg text-slate-700">
                Acha que precisa de cartão premium ou conta alta.
              </span>
</div>
<div className="bg-orange-50 rounded-xl p-5 flex items-start gap-4 ring-1 ring-orange-100">
<i className="text-orange-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-slate-800 font-medium">
                Usa compras normais do dia a dia a seu favor.
              </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
<div className="bg-red-50 rounded-xl p-5 flex items-start gap-4 ring-1 ring-red-100">
<i className="text-red-500 shrink-0 mt-0.5" data-lucide="x" strokeWidth="2"></i>
<span className="text-lg text-slate-700">
                Depende de gestor de milhas e paga taxa toda vez.
              </span>
</div>
<div className="bg-orange-50 rounded-xl p-5 flex items-start gap-4 ring-1 ring-orange-100">
<i className="text-orange-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-slate-800 font-medium">
                Aprende o padrão e emite sozinha — pra sempre.
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-5 bg-slate-50 border-t border-slate-200">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

<div>
<h3 className="text-2xl font-semibold text-[#0A2540] mb-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
<i className="text-orange-600 w-5 h-5" data-lucide="check" strokeWidth="2"></i>
</div>
            Essa imersão É PRA VOCÊ se:
          </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-lg text-slate-700">
<i className="text-orange-500 shrink-0 mt-1 w-5 h-5" data-lucide="check" strokeWidth="2"></i>
<span>
                Sonha levar a família pra Europa sem precisar se endividar por
                anos.
              </span>
</li>
<li className="flex items-start gap-3 text-lg text-slate-700">
<i className="text-orange-500 shrink-0 mt-1 w-5 h-5" data-lucide="check" strokeWidth="2"></i>
<span>
                Já tentou usar milhas, achou tudo confuso e acabou desistindo ou
                se perdendo.
              </span>
</li>
<li className="flex items-start gap-3 text-lg text-slate-700">
<i className="text-orange-500 shrink-0 mt-1 w-5 h-5" data-lucide="check" strokeWidth="2"></i>
<span>
                Tem milhas paradas no cartão ou programa e não sabe o que fazer
                com elas.
              </span>
</li>
<li className="flex items-start gap-3 text-lg text-slate-700">
<i className="text-orange-500 shrink-0 mt-1 w-5 h-5" data-lucide="check" strokeWidth="2"></i>
<span>
                Quer aprender o método de forma independente pra não depender de
                ninguém nunca mais.
              </span>
</li>
</ul>
</div>

<div className="md:pl-12 md:border-l border-slate-200">
<h3 className="text-2xl font-semibold text-[#0A2540] mb-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
<i className="text-red-600 w-5 h-5" data-lucide="x" strokeWidth="2"></i>
</div>
            NÃO É pra você se:
          </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-lg text-slate-700">
<i className="text-red-400 shrink-0 mt-1 w-5 h-5" data-lucide="x" strokeWidth="2"></i>
<span>
                Procura um "grupo de alertas" ou promoção mágica sem querer
                aprender a lógica por trás.
              </span>
</li>
<li className="flex items-start gap-3 text-lg text-slate-700">
<i className="text-red-400 shrink-0 mt-1 w-5 h-5" data-lucide="x" strokeWidth="2"></i>
<span>
                Quer contratar alguém para emitir por você toda vez, pagando
                taxas eternamente.
              </span>
</li>
<li className="flex items-start gap-3 text-lg text-slate-700">
<i className="text-red-400 shrink-0 mt-1 w-5 h-5" data-lucide="x" strokeWidth="2"></i>
<span>
                Não está disposta a dedicar cerca de 4h de estudo focado para
                economizar milhares de reais.
              </span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-5 bg-[#0A2540] relative overflow-hidden" id="oferta">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl text-white font-semibold tracking-tight text-center mb-10">
          Tudo que você leva ao entrar hoje
        </h2>
<div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl relative">

<div className="space-y-5 mb-8 border-b border-slate-100 pb-8">
<div className="flex justify-between items-start gap-4">
<div className="flex items-start gap-3">
<i className="text-orange-500 shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<div>
<p className="text-lg font-semibold text-[#0A2540]">
                    Imersão Europa com Milhas Completa
                  </p>
<p className="text-sm text-slate-500">
                    Módulos passo a passo + aulas práticas gravadas de emissão
                    real.
                  </p>
</div>
</div>
<span className="text-slate-400 line-through shrink-0 text-lg">
                R$ 997
              </span>
</div>
<div className="flex justify-between items-start gap-4">
<div className="flex items-start gap-3">
<i className="text-orange-500 shrink-0 mt-1" data-lucide="plus-circle" strokeWidth="1.5"></i>
<div>
<p className="text-lg font-semibold text-[#0A2540]">
                    BÔNUS #1: Descomplica Milhas
                  </p>
<p className="text-sm text-slate-500">
                    Do zero ao primeiro acúmulo (para quem não tem nada de
                    milhas).
                  </p>
</div>
</div>
<span className="text-slate-400 line-through shrink-0 text-lg">
                R$ 97
              </span>
</div>
<div className="flex justify-between items-start gap-4">
<div className="flex items-start gap-3">
<i className="text-orange-500 shrink-0 mt-1" data-lucide="plus-circle" strokeWidth="1.5"></i>
<div>
<p className="text-lg font-semibold text-[#0A2540]">
                    BÔNUS #2: Mapa Mental Rotas Europa
                  </p>
<p className="text-sm text-slate-500">
                    As melhores combinações de programa × rota × porta de
                    entrada.
                  </p>
</div>
</div>
<span className="text-slate-400 line-through shrink-0 text-lg">
                R$ 47
              </span>
</div>
<div className="flex justify-between items-start gap-4">
<div className="flex items-start gap-3">
<i className="text-slate-400 shrink-0 mt-1" data-lucide="info" strokeWidth="1.5"></i>
<p className="text-lg text-slate-600">
                  Acesso completo por 1 ano inteiro para assistir quantas vezes
                  quiser.
                </p>
</div>
</div>
<div className="flex justify-between items-start gap-4">
<div className="flex items-start gap-3">
<i className="text-slate-400 shrink-0 mt-1" data-lucide="info" strokeWidth="1.5"></i>
<p className="text-lg text-slate-600">
                  Suporte exclusivo por comunidade de alunas.
                </p>
</div>
</div>
</div>

<div className="text-center mb-8">
<p className="text-slate-500 text-lg mb-2">
              Valor total dos itens separados:
              <span className="line-through">R$ 1.141</span>
</p>
<p className="text-sm font-semibold text-[#0A2540] tracking-wide uppercase mb-1">
              HOJE POR APENAS
            </p>
<div className="flex justify-center items-baseline gap-2">
<span className="text-5xl md:text-6xl font-semibold text-[#0A2540] tracking-tight">
                12x R$20,25
              </span>
</div>
<p className="text-slate-500 mt-2">ou R$ 197 à vista</p>
</div>

<div className="flex flex-col items-center">
<a className="w-full block bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold py-5 px-8 rounded-xl shadow-[0_8px_30px_rgb(249,115,22,0.3)] transition-all text-center" href="#">
              QUERO MEU ACESSO AGORA →
            </a>

<div className="mt-4 flex flex-col items-center gap-2">
<div className="flex items-center justify-center gap-1.5 text-sm text-slate-500 font-medium">
<i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
<span>
                  Compra 100% segura · 7 dias de garantia incondicional · Acesso
                  imediato
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-5 bg-white">
<div className="max-w-3xl mx-auto">
<div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
<div className="w-32 h-32 shrink-0 bg-[#0A2540] rounded-full flex flex-col items-center justify-center text-white p-2 shadow-lg ring-4 ring-white">
<span className="text-3xl font-semibold leading-none">7</span>
<span className="text-xs font-medium tracking-widest uppercase mt-1">
              DIAS
            </span>
<span className="text-[10px] text-center leading-tight mt-1 opacity-80 uppercase tracking-wide">
              Garantia
              <br/>
              Incondicional
            </span>
</div>
<div>
<h3 className="text-2xl font-semibold text-[#0A2540] mb-3">
              O Risco é 100% Meu.
            </h3>
<p className="text-lg text-slate-700 leading-relaxed">
              Entre, assista as aulas, aplique o método M3. Se em até 7 dias
              você achar que o padrão matemático não funciona para o seu caso ou
              que a Imersão não é para você, basta um clique. Nós devolvemos
              100% do seu dinheiro. Sem perguntas chatas, sem burocracia. Você
              não tem nada a perder testando.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-5 bg-slate-50 border-t border-slate-200">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl text-[#0A2540] font-semibold tracking-tight text-center mb-12">
          Perguntas Frequentes
        </h2>
<div className="space-y-2">

<details className="group bg-white rounded-xl ring-1 ring-slate-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg text-[#0A2540] p-5">
<span>
                Eu não tenho milhas acumuladas, vale a pena entrar agora?
              </span>
<span className="transition group-open:rotate-180">
<i className="text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-5 pt-0 text-lg text-slate-600 border-t border-slate-100 mt-2">
              Sim, com certeza. Por isso incluímos o bônus "Descomplica Milhas".
              Você vai aprender exatamente como começar a gerar milhas do jeito
              certo a partir de hoje, sem os vícios de quem já começou errado.
            </div>
</details>

<details className="group bg-white rounded-xl ring-1 ring-slate-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg text-[#0A2540] p-5">
<span>
                Quero emitir para a família inteira (marido, filhos), funciona?
              </span>
<span className="transition group-open:rotate-180">
<i className="text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-5 pt-0 text-lg text-slate-600 border-t border-slate-100 mt-2">
              Sim. Um dos maiores segredos do Método M3 é ensinar a buscar
              disponibilidade real para múltiplos assentos no mesmo voo, algo
              que a maioria dos "gurus" ignora, pois focam apenas em passagens
              para solteiros.
            </div>
</details>

<details className="group bg-white rounded-xl ring-1 ring-slate-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg text-[#0A2540] p-5">
<span>E se as regras dos programas de milhas mudarem?</span>
<span className="transition group-open:rotate-180">
<i className="text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-5 pt-0 text-lg text-slate-600 border-t border-slate-100 mt-2">
              O método não ensina um "macete" passageiro, ele ensina a lógica
              por trás. Se a regra muda, você saberá refazer a conta. Além
              disso, você tem acesso às atualizações do curso por 1 ano inteiro.
            </div>
</details>

<details className="group bg-white rounded-xl ring-1 ring-slate-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg text-[#0A2540] p-5">
<span>Preciso ter um cartão de crédito black ou premium?</span>
<span className="transition group-open:rotate-180">
<i className="text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-5 pt-0 text-lg text-slate-600 border-t border-slate-100 mt-2">
              Não. A pontuação do cartão de crédito é a forma mais lenta de
              viajar. Na Imersão, você aprende a usar transferências bonificadas
              e compras inteligentes. A aluna Alessandra acumulou o suficiente
              para a Europa apenas comprando um celular.
            </div>
</details>

<details className="group bg-white rounded-xl ring-1 ring-slate-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg text-[#0A2540] p-5">
<span>
                Como vou saber qual rota escolher? Eu me perco no mapa.
              </span>
<span className="transition group-open:rotate-180">
<i className="text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-5 pt-0 text-lg text-slate-600 border-t border-slate-100 mt-2">
              Pensando nisso, criei o bônus "Mapa Mental Rotas Europa". É um
              mapa visual onde eu entrego as melhores combinações já validadas:
              qual programa cruza com qual rota e qual a melhor porta de entrada
              na Europa.
            </div>
</details>

<details className="group bg-white rounded-xl ring-1 ring-slate-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg text-[#0A2540] p-5">
<span>O curso é ao vivo ou gravado?</span>
<span className="transition group-open:rotate-180">
<i className="text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-5 pt-0 text-lg text-slate-600 border-t border-slate-100 mt-2">
              A Imersão é 100% gravada. Você recebe o acesso imediatamente no
              seu e-mail e pode assistir no seu tempo, de onde quiser, pausando
              e revendo sempre que precisar fazer uma emissão.
            </div>
</details>

<details className="group bg-white rounded-xl ring-1 ring-slate-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg text-[#0A2540] p-5">
<span>
                Quanto tempo até eu conseguir emitir minha primeira passagem?
              </span>
<span className="transition group-open:rotate-180">
<i className="text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-5 pt-0 text-lg text-slate-600 border-t border-slate-100 mt-2">
              Isso varia do seu ritmo, mas em média, após estruturar o acúmulo e
              assistir as aulas práticas, nossas alunas conseguem realizar a
              primeira emissão em 30 a 60 dias. Se você já tem algumas milhas,
              pode ser na mesma semana.
            </div>
</details>

<details className="group bg-white rounded-xl ring-1 ring-slate-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg text-[#0A2540] p-5">
<span>O método só funciona para a Europa?</span>
<span className="transition group-open:rotate-180">
<i className="text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="p-5 pt-0 text-lg text-slate-600 border-t border-slate-100 mt-2">
              A Imersão é estruturada e focada com exemplos e rotas reais para a
              Europa. Porém, a lógica matemática (os 3 Pilares) funciona
              perfeitamente para entender e emitir passagens para qualquer lugar
              do mundo.
            </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-5 bg-white text-center">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl text-[#0A2540] font-semibold tracking-tight mb-6">
          Dois caminhos. Você decide.
        </h2>
<p className="text-lg text-slate-600 mb-10">
          Você pode fechar esta página, continuar acreditando que Europa é cara
          demais ou tentar a sorte seguindo a manada. OU você pode clicar
          abaixo, aprender a matemática das milhas de uma vez por todas e
          garantir as férias da sua família por uma fração do preço.
        </p>

<a className="inline-block w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold py-5 px-10 rounded-xl shadow-lg transition-all mb-4" href="#oferta">
          QUERO ENTRAR NA IMERSÃO AGORA →
        </a>
<div className="flex items-center justify-center gap-1.5 text-sm text-slate-500 font-medium mb-12">
<i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
<span>Pagamento seguro · 7 dias de garantia</span>
</div>
<div className="bg-slate-50 rounded-xl p-6 text-left ring-1 ring-slate-200">
<p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
            P.S.
          </p>
<p className="text-lg text-slate-700 italic">
            "Se você acha que não dá conta, eu sou a prova. Sou mãe, não sou
            viajante profissional e apliquei a regra M3. Fui pra Toscana pagar
            apenas a taxa de embarque."
            <span className="font-semibold text-[#0A2540]">
              — Leila, Aluna Real.
            </span>
</p>
</div>
</div>
</section>

<div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)] z-50 md:hidden flex justify-between items-center gap-4">
<div className="shrink-0">
<span className="text-xs text-slate-500 font-medium">Imersão Completa</span>
<br/>
<span className="font-semibold text-xl tracking-tight text-[#0A2540]">
          12x R$20,25
        </span>
</div>
<a className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-center text-sm font-semibold py-3 px-4 rounded-lg shadow-sm transition-all whitespace-nowrap" href="#oferta">
        QUERO MEU ACESSO
      </a>
</div>




    </>
  );
}
