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
      
<header className="fixed top-0 w-full bg-[#1f2328]/80 backdrop-blur-md border-b border-[#1a2c42] z-50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#3a6b5c] text-2xl" icon="solar:infinity-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-['Montserrat'] font-medium tracking-tighter text-[#f7f8f6] text-xl">
            Vagus.
            <span className="text-[#3a6b5c] font-light">flow</span>
</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#f7f8f6]/80 hover:text-[#f7f8f6] transition-colors" href="#metodologia">
            Metodologia
          </a>
<a className="text-sm font-medium text-[#f7f8f6]/80 hover:text-[#f7f8f6] transition-colors" href="#formato">
            O Formato
          </a>
<a className="text-sm font-medium text-[#f7f8f6]/80 hover:text-[#f7f8f6] transition-colors" href="#beneficios">
            Benefícios
          </a>
</nav>
<div>
<a className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-[#f7f8f6] bg-[#3a6b5c] rounded-full hover:bg-[#3a6b5c]/80 transition-colors shadow-sm" href="#contato">
            Agendar Reunião
          </a>
</div>
</div>
</header>

<section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-[#1f2328] -z-10 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a2c42] via-[#1f2328] to-[#1f2328]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#3a6b5c]/10 blur-[120px] rounded-full mix-blend-screen"></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a2c42] border border-[#3a6b5c]/30 mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-[#3a6b5c]"></span>
<span className="text-xs font-medium text-[#f7f8f6]">
            CIÊNCIA. FLOW. POTENCIAL HUMANO.
          </span>
</div>
<h1 className="font-['Montserrat'] text-4xl md:text-6xl font-medium tracking-tight text-[#f7f8f6] mb-6 leading-tight">
          Vagus.flow | Performance Mental para Empresas.
        </h1>
<div className="mb-10 max-w-2xl mx-auto">
<p className="text-lg text-[#e6e8ea]/80 leading-relaxed">
            Transforme a cultura da sua empresa através de práticas estruturadas
            de regulação mental, foco e performance sustentada.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#f7f8f6] bg-[#3a6b5c] rounded-full hover:bg-[#3a6b5c]/80 transition-colors shadow-sm gap-2" href="#formato">
            Conhecer o Formato
            <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#f7f8f6] bg-[#1a2c42] border border-[#3a6b5c]/50 rounded-full hover:bg-[#1a2c42]/80 transition-colors" href="#metodologia">
            Entender a Metodologia
          </a>
</div>
</div>
</section>

<section className="py-24 bg-[#1f2328] border-y border-[#1a2c42]" id="metodologia">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-['Montserrat'] text-3xl md:text-4xl font-medium tracking-tight text-[#f7f8f6] mb-4">
            Regulação. Foco. Performance.
          </h2>
<p className="text-base text-[#e6e8ea] max-w-xl mx-auto">
            Uma metodologia estruturada e baseada em dados para otimização do
            sistema nervoso autônomo.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-[#1f2328] border border-[#1a2c42] hover:border-[#3a6b5c] hover:bg-[#1a2c42]/50 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-[#1a2c42] border border-[#3a6b5c]/30 flex items-center justify-center mb-6 shadow-sm group-hover:border-[#3a6b5c] group-hover:bg-[#1a2c42] transition-colors text-[#3a6b5c]">
<iconify-icon className="text-2xl" icon="ph:brain-light" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-['Montserrat'] text-xl font-medium tracking-tight text-[#f7f8f6] mb-3">
              Foco
            </h3>
<p className="text-sm text-[#e6e8ea] leading-relaxed">
<span className="font-medium text-[#f7f8f6]">Trabalho Profundo.</span>
              Treinamento de atenção plena focado em clareza mental, aumentando
              a capacidade de concentração contínua e imersão nas tarefas.
            </p>
</div>

<div className="group p-8 rounded-3xl bg-[#1f2328] border border-[#1a2c42] hover:border-[#3a6b5c] hover:bg-[#1a2c42]/50 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-[#1a2c42] border border-[#3a6b5c]/30 flex items-center justify-center mb-6 shadow-sm group-hover:border-[#3a6b5c] group-hover:bg-[#1a2c42] transition-colors text-[#3a6b5c]">
<iconify-icon className="text-2xl" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-['Montserrat'] text-xl font-medium tracking-tight text-[#f7f8f6] mb-3">
              Calma
            </h3>
<p className="text-sm text-[#e6e8ea] leading-relaxed">
<span className="font-medium text-[#f7f8f6]">
                Equilíbrio do Sistema Nervoso.
              </span>
              Técnicas focadas na regulação autônoma para baixar
              instantaneamente a ansiedade e preparar a mente para pressão.
            </p>
</div>

<div className="group p-8 rounded-3xl bg-[#1f2328] border border-[#1a2c42] hover:border-[#3a6b5c] hover:bg-[#1a2c42]/50 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-[#1a2c42] border border-[#3a6b5c]/30 flex items-center justify-center mb-6 shadow-sm group-hover:border-[#3a6b5c] group-hover:bg-[#1a2c42] transition-colors text-[#3a6b5c]">
<iconify-icon className="text-2xl" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-['Montserrat'] text-xl font-medium tracking-tight text-[#f7f8f6] mb-3">
              Flow
            </h3>
<p className="text-sm text-[#e6e8ea] leading-relaxed">
<span className="font-medium text-[#f7f8f6]">
                Performance Sustentada.
              </span>
              Condicionamento neural para alinhamento de propósito, resolução de
              problemas e manutenção do estado de fluxo.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1a2c42] border-b border-[#1f2328] relative overflow-hidden" id="empresas">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1f2328]/50 via-[#1a2c42] to-[#1a2c42] -z-10"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1f2328] border border-[#3a6b5c]/30 mb-6 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-[#3a6b5c]"></span>
<span className="text-xs font-medium text-[#f7f8f6]/80 uppercase tracking-wider">
              Mercado Global
            </span>
</div>
<h2 className="font-['Montserrat'] text-3xl md:text-4xl font-medium tracking-tight text-[#f7f8f6] mb-4">
            Empresas que já investem
          </h2>
<p className="text-base text-[#e6e8ea]/80 max-w-xl mx-auto">
            A otimização mental e emocional já é tratada como pilar estratégico
            nas organizações mais inovadoras do mundo.
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
<div className="flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-[#1f2328]/40 border border-[#1f2328]/50 hover:bg-[#1f2328] hover:border-[#3a6b5c]/50 transition-all duration-300 group">
<iconify-icon className="text-4xl text-[#f7f8f6]/60 group-hover:text-[#3a6b5c] transition-colors mb-3" icon="mdi:google"></iconify-icon>
<span className="font-['Montserrat'] text-sm font-medium text-[#f7f8f6]/80">
              Google
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-[#1f2328]/40 border border-[#1f2328]/50 hover:bg-[#1f2328] hover:border-[#3a6b5c]/50 transition-all duration-300 group">
<iconify-icon className="text-4xl text-[#f7f8f6]/60 group-hover:text-[#3a6b5c] transition-colors mb-3" icon="mdi:apple"></iconify-icon>
<span className="font-['Montserrat'] text-sm font-medium text-[#f7f8f6]/80">
              Apple
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-[#1f2328]/40 border border-[#1f2328]/50 hover:bg-[#1f2328] hover:border-[#3a6b5c]/50 transition-all duration-300 group">
<iconify-icon className="text-4xl text-[#f7f8f6]/60 group-hover:text-[#3a6b5c] transition-colors mb-3" icon="mdi:microsoft"></iconify-icon>
<span className="font-['Montserrat'] text-sm font-medium text-[#f7f8f6]/80">
              Microsoft
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-[#1f2328]/40 border border-[#1f2328]/50 hover:bg-[#1f2328] hover:border-[#3a6b5c]/50 transition-all duration-300 group">
<iconify-icon className="text-4xl text-[#f7f8f6]/60 group-hover:text-[#3a6b5c] transition-colors mb-3" icon="simple-icons:intel"></iconify-icon>
<span className="font-['Montserrat'] text-sm font-medium text-[#f7f8f6]/80">
              Intel
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-[#1f2328]/40 border border-[#1f2328]/50 hover:bg-[#1f2328] hover:border-[#3a6b5c]/50 transition-all duration-300 group">
<iconify-icon className="text-4xl text-[#f7f8f6]/60 group-hover:text-[#3a6b5c] transition-colors mb-3" icon="simple-icons:nike"></iconify-icon>
<span className="font-['Montserrat'] text-sm font-medium text-[#f7f8f6]/80">
              Nike
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-[#1f2328]/40 border border-[#1f2328]/50 hover:bg-[#1f2328] hover:border-[#3a6b5c]/50 transition-all duration-300 group">
<iconify-icon className="text-4xl text-[#f7f8f6]/60 group-hover:text-[#3a6b5c] transition-colors mb-3" icon="simple-icons:ibm"></iconify-icon>
<span className="font-['Montserrat'] text-sm font-medium text-[#f7f8f6]/80">
              IBM
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-[#1f2328]/40 border border-[#1f2328]/50 hover:bg-[#1f2328] hover:border-[#3a6b5c]/50 transition-all duration-300 group">
<iconify-icon className="text-4xl text-[#f7f8f6]/60 group-hover:text-[#3a6b5c] transition-colors mb-3" icon="simple-icons:sap"></iconify-icon>
<span className="font-['Montserrat'] text-sm font-medium text-[#f7f8f6]/80">
              SAP
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-[#1f2328]/40 border border-[#1f2328]/50 hover:bg-[#1f2328] hover:border-[#3a6b5c]/50 transition-all duration-300 group">
<iconify-icon className="text-4xl text-[#f7f8f6]/60 group-hover:text-[#3a6b5c] transition-colors mb-3" icon="simple-icons:salesforce"></iconify-icon>
<span className="font-['Montserrat'] text-sm font-medium text-[#f7f8f6]/80">
              Salesforce
            </span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1f2328] border-b border-[#1a2c42] relative overflow-hidden" id="resultados">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a2c42] border border-[#3a6b5c]/30 mb-6 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-[#3a6b5c]"></span>
<span className="text-xs font-medium text-[#f7f8f6]/80 uppercase tracking-wider">
              O Impacto nos Negócios
            </span>
</div>
<h2 className="font-['Montserrat'] text-3xl md:text-4xl font-medium tracking-tight text-[#f7f8f6] mb-4">
            Resultados Comprovados
          </h2>
<p className="text-base text-[#e6e8ea] max-w-xl mx-auto">
            Pesquisas e estudos em ambientes corporativos demonstram o impacto
            real e mensurável das práticas de otimização mental nas equipes.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#1a2c42]/30 border border-[#1a2c42] hover:border-[#3a6b5c] hover:bg-[#1a2c42]/50 transition-all duration-300">
<span className="font-['Montserrat'] text-5xl md:text-6xl font-medium tracking-tight text-[#3a6b5c] mb-4">
              32
              <span className="text-3xl">%</span>
</span>
<h3 className="font-['Montserrat'] text-xl font-medium tracking-tight text-[#f7f8f6] mb-3">
              Aumento de Foco
            </h3>
<p className="text-sm text-[#f7f8f6]/80 leading-relaxed">
              Estudos indicam melhora na capacidade de concentração contínua e
              ganho de produtividade após a implementação de rotinas de
              meditação guiada no trabalho.
            </p>
</div>

<div className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#1a2c42]/30 border border-[#1a2c42] hover:border-[#3a6b5c] hover:bg-[#1a2c42]/50 transition-all duration-300">
<span className="font-['Montserrat'] text-5xl md:text-6xl font-medium tracking-tight text-[#3a6b5c] mb-4">
              46
              <span className="text-3xl">%</span>
</span>
<h3 className="font-['Montserrat'] text-xl font-medium tracking-tight text-[#f7f8f6] mb-3">
              Redução de Estresse
            </h3>
<p className="text-sm text-[#f7f8f6]/80 leading-relaxed">
              O uso estruturado de técnicas de respiração reduz
              significativamente os níveis de cortisol e os sintomas de
              esgotamento e ansiedade entre os colaboradores.
            </p>
</div>

<div className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#1a2c42]/30 border border-[#1a2c42] hover:border-[#3a6b5c] hover:bg-[#1a2c42]/50 transition-all duration-300">
<span className="font-['Montserrat'] text-5xl md:text-6xl font-medium tracking-tight text-[#3a6b5c] mb-4">
              19
              <span className="text-3xl">%</span>
</span>
<h3 className="font-['Montserrat'] text-xl font-medium tracking-tight text-[#f7f8f6] mb-3">
              Assertividade em Decisões
            </h3>
<p className="text-sm text-[#f7f8f6]/80 leading-relaxed">
              Práticas de mentalização melhoram a clareza para resolução de
              problemas sob pressão, aumentando a efetividade nas tomadas de
              decisão.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f7f8f6] text-[#1a2c42]/80 overflow-hidden relative" id="formato">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3a6b5c]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3a6b5c]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 mb-6">
<iconify-icon className="text-[#3a6b5c] text-xl" icon="solar:laptop-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-['Montserrat'] text-xs font-medium tracking-tight text-[#3a6b5c] uppercase tracking-wider">
                ESPAÇO FLOW
              </span>
</div>
<h2 className="font-['Montserrat'] text-3xl md:text-5xl font-medium tracking-tight text-[#1a2c42] mb-8 leading-tight">
              O Formato
              <br/>
              Vagus.
              <span className="text-[#3a6b5c] font-light">flow</span>
</h2>
<div className="space-y-6">

<div className="bg-white backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-[#3a6b5c] group-hover:w-2 transition-all duration-300"></div>
<h3 className="font-['Montserrat'] text-lg font-medium tracking-tight text-[#1a2c42] mb-3 flex items-center gap-2">
<iconify-icon className="text-[#3a6b5c]" icon="solar:record-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Vagus Live
                </h3>
<p className="text-base text-gray-600 leading-relaxed font-light">
                  Sessões online e ao vivo curtas no máximo 15 minutos 2x na
                  semana.
                </p>
</div>

<div className="bg-white backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-[#3a6b5c] group-hover:w-2 transition-all duration-300"></div>
<h3 className="font-['Montserrat'] text-lg font-medium tracking-tight text-[#1a2c42] mb-3 flex items-center gap-2">
<iconify-icon className="text-[#3a6b5c]" icon="solar:sofa-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Vagus Space
                </h3>
<p className="text-base text-gray-600 leading-relaxed font-light">
                  Consultoria para implementar um espaço e ambiente planejado
                  para recuperação ativa e recarga mental rápida, com áudios já
                  prontos e gravados.
                </p>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full">
<div className="aspect-square md:aspect-[4/3] rounded-3xl bg-white border border-gray-200 flex flex-col items-center justify-center p-8 relative overflow-hidden group shadow-xl">
<img alt="Foco e Relaxamento" className="group-hover:mix-blend-normal group-hover:opacity-40 transition-all duration-700 opacity-20 mix-blend-multiply w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a0ce010-f14c-4d33-8c46-484e9f037029_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#f7f8f6] via-[#f7f8f6]/80 to-transparent pointer-events-none"></div>
<iconify-icon className="text-6xl text-[#3a6b5c] mb-6 group-hover:scale-110 transition-all duration-500 z-10" icon="solar:headphones-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="z-10 text-center space-y-4 max-w-sm">
<div className="h-1 w-12 bg-[#3a6b5c] rounded-full mx-auto"></div>
<p className="font-['Montserrat'] text-sm tracking-tight text-gray-600 group-hover:text-[#1a2c42] transition-colors duration-500">
                  Acesso a uma biblioteca de áudios sob demanda para situações
                  específicas: picos de estresse, baixa energia ou preparação
                  para momentos de alta pressão.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#1f2328] relative overflow-hidden" id="contato">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#1a2c42]/30 via-[#1f2328] to-[#1f2328] -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a2c42] border border-[#3a6b5c]/30 mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-[#3a6b5c]"></span>
<span className="text-xs font-medium text-[#f7f8f6]">PRÓXIMO PASSO</span>
</div>
<h2 className="font-['Montserrat'] text-3xl md:text-5xl font-medium tracking-tight text-[#f7f8f6] mb-6">
          Agende uma reunião
        </h2>
<p className="text-lg text-[#e6e8ea]/80 mb-10 max-w-2xl mx-auto">
          Descubra como a metodologia Vagus.flow pode transformar a cultura da
          sua empresa, aumentando o foco e reduzindo o estresse do seu time.
        </p>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#f7f8f6] bg-[#3a6b5c] rounded-full hover:bg-[#3a6b5c]/80 transition-colors shadow-sm gap-2" href="https://wa.me/31630792807" target="_blank">
          Agendar Agora
          <iconify-icon className="text-xl" icon="solar:calendar-mark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<div className="mt-4 text-[#e6e8ea]/80 text-sm flex items-center justify-center gap-2">
<iconify-icon className="text-[#3a6b5c] text-xl" icon="mdi:whatsapp"></iconify-icon>
<a className="hover:text-[#f7f8f6] transition-colors" href="https://wa.me/31630792807" target="_blank">
            +31 630792807
          </a>
</div>
</div>
</section>

<footer className="bg-[#1f2328] pt-16 pb-8 border-t border-[#1a2c42] mt-auto">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#3a6b5c] text-xl" icon="solar:infinity-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-['Montserrat'] font-medium tracking-tighter text-[#f7f8f6] text-lg">
              Vagus.
              <span className="text-[#3a6b5c] font-light">flow</span>
</span>
</div>
<div className="flex gap-6">
<a className="text-[#f7f8f6]/60 hover:text-[#f7f8f6] transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="text-[#f7f8f6]/60 hover:text-[#f7f8f6] transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#f7f8f6]/60">
<p>© 2024 Vagus.Flow. Programa de Performance Mental.</p>
<div className="flex gap-4">
<a className="hover:text-[#f7f8f6] transition-colors" href="#">
              Privacidade
            </a>
<a className="hover:text-[#f7f8f6] transition-colors" href="#">
              Termos
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
