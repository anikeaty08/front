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
      

<div className="absolute inset-0 top-0 z-[-1] h-screen w-full bg-zinc-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>

<nav className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-zinc-50 text-lg font-medium tracking-tighter uppercase">
                W.S.
            </div>
<a className="text-xs font-medium text-zinc-400 hover:text-zinc-50 transition-colors flex items-center gap-x-2" href="#contato">
                Contato
                <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>
<main className="flex-grow pt-16">

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="max-w-6xl mx-auto px-6">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-x-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-300 mb-8">
<iconify-icon className="text-zinc-400" icon="solar:chart-square-linear"></iconify-icon>
                        Gestão Comercial Odontológica
                    </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-50 leading-[1.1] mb-6">
                        O problema da sua clínica não é odontologia. <br className="hidden md:block"/>
<span className="text-zinc-500">É gestão comercial.</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10">
                        Washington Santos transforma clínicas travadas em operações lucrativas, organizadas e preparadas para crescer de verdade. Palestras e treinamentos comerciais para clínicas que querem faturar com consistência, autoridade e resultado imediato.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl">
<div className="flex items-start gap-x-3">
<iconify-icon className="text-zinc-50 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Resultado prático e aplicável</span>
</div>
<div className="flex items-start gap-x-3">
<iconify-icon className="text-zinc-50 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Estratégias validadas em grandes redes</span>
</div>
<div className="flex items-start gap-x-3">
<iconify-icon className="text-zinc-50 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Mudança de mentalidade e performance</span>
</div>
<div className="flex items-start gap-x-3">
<iconify-icon className="text-zinc-50 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Equipe preparada, engajada e produtiva</span>
</div>
</div>
<a className="inline-flex items-center justify-center gap-x-2 bg-zinc-50 text-zinc-950 px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors" href="#contato">
                        QUERO LEVAR O WASHINGTON PARA MINHA CLÍNICA
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-800/50 bg-zinc-950">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-50 mb-8">
                            Quem é Washington Santos?
                        </h2>
<div className="space-y-6 text-sm md:text-base text-zinc-400 leading-relaxed">
<p>
                                Durante anos, Washington Santos viveu na prática tudo aquilo que hoje ensina para donos de clínicas odontológicas em todo o Brasil.
                            </p>
<p>
                                De vendedor a gerente regional de grandes operações odontológicas, ele percorreu o país implantando unidades, recuperando clínicas que não performavam e treinando equipes comerciais.
                            </p>
<p className="text-zinc-300 font-medium pt-4">
                                Hoje, através da Ethos Consultoria Comercial, ajuda empresários a:
                            </p>
<ul className="space-y-3">
<li className="flex items-center gap-x-3">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                                    Aumentar faturamento
                                </li>
<li className="flex items-center gap-x-3">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                                    Estruturar equipes comerciais
                                </li>
<li className="flex items-center gap-x-3">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                                    Criar cultura de vendas
                                </li>
<li className="flex items-center gap-x-3">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                                    Recuperar a motivação empreendedora
                                </li>
<li className="flex items-center gap-x-3">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                                    Transformar gestão em lucro
                                </li>
</ul>
</div>
</div>
<div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/30 p-10 lg:p-12 overflow-hidden flex flex-col justify-center">
<div className="absolute top-0 right-0 p-8 opacity-10">
<iconify-icon className="text-9xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-50 leading-tight z-10">
                            Sua autoridade não nasceu da teoria. <br/>
<span className="text-zinc-500">Nasceu da vivência.</span> <br/>
                            Nasceu da raça.
                        </h3>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900/20 border-y border-zinc-800/50">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-4xl text-zinc-700 mb-8" icon="solar:quote-left-linear"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-50 mb-12">
                    “Eu sei como é ver o sonho esfriar.”
                </h2>
<div className="space-y-6 text-sm md:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
<p>
                        Washington começou a trabalhar aos 10 anos de idade. Vendeu camarão na praia. Trabalhou em obra. Trabalhou em feira.
                    </p>
<p>
                        Aos 18 anos, entrou no mundo das drogas e perdeu tudo. Aos 20, recebeu uma oportunidade que mudaria sua vida. Escolheu recomeçar.
                    </p>
<p>
                        Anos depois, entrou para o mercado comercial, cresceu rapidamente e se tornou referência nacional em gestão comercial odontológica.
                    </p>
<div className="w-12 h-px bg-zinc-800 mx-auto my-8"></div>
<p className="text-zinc-300 font-medium">Hoje, sua missão é simples:</p>
<p>
                        Encontrar empresários que perderam o brilho de empreender… e ajudá-los a recuperar o controle da própria história.
                    </p>
<p className="text-zinc-50 text-lg mt-8">
                        Porque clínicas não quebram apenas por falta de pacientes.<br/>
<span className="text-zinc-500">Quebram por falta de direção comercial.</span>
</p>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-50 mb-4">
                        Sua clínica passa por isso?
                    </h2>
<p className="text-base text-zinc-400">
                        O problema não é falta de potencial. O problema é não ter uma estrutura comercial preparada para crescer.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/10 hover:bg-zinc-900/40 transition-colors">
<iconify-icon className="text-zinc-600 text-2xl mb-4" icon="solar:danger-triangle-linear"></iconify-icon>
<p className="text-sm text-zinc-300">Equipe sem preparo para vender</p>
</div>
<div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/10 hover:bg-zinc-900/40 transition-colors">
<iconify-icon className="text-zinc-600 text-2xl mb-4" icon="solar:danger-triangle-linear"></iconify-icon>
<p className="text-sm text-zinc-300">Avaliações que não convertem</p>
</div>
<div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/10 hover:bg-zinc-900/40 transition-colors">
<iconify-icon className="text-zinc-600 text-2xl mb-4" icon="solar:danger-triangle-linear"></iconify-icon>
<p className="text-sm text-zinc-300">Falta de processo comercial</p>
</div>
<div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/10 hover:bg-zinc-900/40 transition-colors">
<iconify-icon className="text-zinc-600 text-2xl mb-4" icon="solar:danger-triangle-linear"></iconify-icon>
<p className="text-sm text-zinc-300">Baixo faturamento persistente</p>
</div>
<div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/10 hover:bg-zinc-900/40 transition-colors">
<iconify-icon className="text-zinc-600 text-2xl mb-4" icon="solar:danger-triangle-linear"></iconify-icon>
<p className="text-sm text-zinc-300">Sensação de trabalhar muito e crescer pouco</p>
</div>
<div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/10 hover:bg-zinc-900/40 transition-colors">
<iconify-icon className="text-zinc-600 text-2xl mb-4" icon="solar:danger-triangle-linear"></iconify-icon>
<p className="text-sm text-zinc-300">Donos cansados, desmotivados e sobrecarregados</p>
</div>
<div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/10 hover:bg-zinc-900/40 transition-colors">
<iconify-icon className="text-zinc-600 text-2xl mb-4" icon="solar:danger-triangle-linear"></iconify-icon>
<p className="text-sm text-zinc-300">Investimento alto sem retorno proporcional</p>
</div>
<div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/10 hover:bg-zinc-900/40 transition-colors">
<iconify-icon className="text-zinc-600 text-2xl mb-4" icon="solar:danger-triangle-linear"></iconify-icon>
<p className="text-sm text-zinc-300">Funcionários sem engajamento</p>
</div>
<div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/10 hover:bg-zinc-900/40 transition-colors">
<iconify-icon className="text-zinc-600 text-2xl mb-4" icon="solar:danger-triangle-linear"></iconify-icon>
<p className="text-sm text-zinc-300">Falta de liderança comercial</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-800/50 bg-zinc-900/10">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-50 mb-6">
                            O que acontece quando a sua equipe aprende a vender da forma certa?
                        </h2>
<div className="space-y-6 text-sm text-zinc-400">
<p>
                                Washington Santos entrega treinamentos intensos, diretos e aplicáveis. Sem teoria cansativa. Sem palestra motivacional vazia.
                            </p>
<p className="text-zinc-300">
                                Aqui, cada estratégia foi vivida na prática.
                            </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center gap-x-3 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
<iconify-icon className="text-zinc-50 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Mais conversões</span>
</div>
<div className="flex items-center gap-x-3 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
<iconify-icon className="text-zinc-50 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Mais faturamento</span>
</div>
<div className="flex items-center gap-x-3 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
<iconify-icon className="text-zinc-50 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Organização comercial</span>
</div>
<div className="flex items-center gap-x-3 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
<iconify-icon className="text-zinc-50 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Segurança na gestão</span>
</div>
<div className="flex items-center gap-x-3 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
<iconify-icon className="text-zinc-50 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Equipes motivadas</span>
</div>
<div className="flex items-center gap-x-3 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
<iconify-icon className="text-zinc-50 text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Prazer em empreender</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 text-center">
<h2 className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-12">
                    Quem confia no trabalho da Ethos Consultoria
                </h2>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mb-16">
<span className="text-xl md:text-2xl font-medium tracking-tighter text-zinc-600 hover:text-zinc-400 transition-colors cursor-default">ORTHOPRIDE</span>
<span className="text-xl md:text-2xl font-medium tracking-tighter text-zinc-600 hover:text-zinc-400 transition-colors cursor-default">ODONTOCOMPANY</span>
<span className="text-xl md:text-2xl font-medium tracking-tighter text-zinc-600 hover:text-zinc-400 transition-colors cursor-default">ORALDENTS</span>
<span className="text-xl md:text-2xl font-medium tracking-tighter text-zinc-600 hover:text-zinc-400 transition-colors cursor-default">ORTHODONTIC</span>
<span className="text-xl md:text-2xl font-medium tracking-tighter text-zinc-600 hover:text-zinc-400 transition-colors cursor-default">VIVA SORRINDO</span>
</div>
<p className="text-sm text-zinc-400">
                    Cases que comprovam resultado real no campo.<br/>
<span className="text-zinc-300">Porque resultado não se constrói no palco. Se constrói dentro da operação.</span>
</p>
</div>
</section>

<section className="py-32 bg-zinc-900/20 border-y border-zinc-800/50 relative">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-50 mb-8">
                    O que torna Washington Santos diferente?
                </h2>
<div className="text-lg md:text-xl text-zinc-300 leading-relaxed font-normal tracking-tight mb-12">
                    Washington consegue falar com o dono da clínica, com o vendedor, com o gestor e com a recepção ao mesmo tempo. Ele vai do “povão” ao estratégico em segundos.
                </div>
<div className="flex flex-wrap justify-center gap-3 mb-12">
<span className="px-4 py-2 rounded-full border border-zinc-800 text-xs text-zinc-400">Sem ego.</span>
<span className="px-4 py-2 rounded-full border border-zinc-800 text-xs text-zinc-400">Sem personagem corporativo.</span>
<span className="px-4 py-2 rounded-full border border-zinc-800 text-xs text-zinc-400">Sem enrolação.</span>
<span className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-800/50 text-xs text-zinc-50">Simples. Direto. Verdadeiro.</span>
</div>
<p className="text-sm text-zinc-400 max-w-2xl mx-auto">
                    Cada treinamento gera identificação imediata porque tudo que é ensinado foi vivido na pele. Não existe teoria copiada de livro. Existe experiência real de quem precisou vencer na prática.
                </p>
</div>
</section>

<section className="py-32 relative" id="contato">
<div className="absolute inset-0 top-1/2 bg-zinc-900/10 blur-3xl z-[-1]"></div>
<div className="max-w-4xl mx-auto px-6">
<div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10 md:p-16 text-center shadow-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-50 mb-6">
                        Sua clínica pode estar a uma decisão de mudar de patamar.
                    </h2>
<p className="text-sm md:text-base text-zinc-400 mb-10 max-w-2xl mx-auto">
                        Você já investiu demais para aceitar resultados medianos. Agora é hora de estruturar sua operação comercial, recuperar o entusiasmo da sua equipe e voltar a crescer com direção.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
<div className="flex items-center gap-x-2 text-sm text-zinc-300">
<iconify-icon className="text-lg text-zinc-500" icon="solar:global-linear"></iconify-icon>
                            Atendimento para todo o Brasil
                        </div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-zinc-700"></div>
<div className="flex items-center gap-x-2 text-sm text-zinc-300">
<iconify-icon className="text-lg text-zinc-500" icon="solar:map-point-linear"></iconify-icon>
                            Palestras e treinamentos presenciais
                        </div>
</div>
<a className="inline-flex items-center justify-center gap-x-3 bg-zinc-50 text-zinc-950 px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-200 transition-transform hover:scale-105 w-full sm:w-auto" href="#">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                        AGENDAR UMA CONVERSA NO WHATSAPP
                    </a>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-800/50 bg-zinc-950 py-10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-zinc-50 text-sm font-medium tracking-tighter uppercase">
                ETHOS CONSULTORIA
            </div>
<p className="text-xs text-zinc-500">
                © 2024 Washington Santos. Todos os direitos reservados.
            </p>
</div>
</footer>

    </>
  );
}
