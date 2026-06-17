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
      

<div className="w-full max-w-md sm:max-w-4xl bg-[#F8F8F6] h-screen max-h-[850px] relative overflow-hidden sm:rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] sm:border-[6px] border-slate-900 flex flex-col sm:grid sm:grid-cols-[260px_1fr] sm:grid-rows-[auto_1fr]">

<header className="bg-[#0F172A] pt-12 sm:pt-8 pb-6 px-4 sm:px-8 relative z-10 sm:col-start-2 sm:row-start-1">
<div className="flex justify-between items-start mb-6">
<div>
<h1 className="text-[26px] font-extrabold tracking-tight text-white mb-1">
              Job
              <span className="text-[#F97316]">4You</span>
</h1>
<p className="text-[16px] text-white font-normal">
              Olá, Carlos 👋 Que serviço
              <br className="sm:hidden"/>
              você precisa hoje?
            </p>
</div>
<div className="relative mt-1 cursor-pointer">
<iconify-icon className="text-white text-2xl" icon="lucide:bell"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 w-[18px] h-[18px] bg-[#EF4444] text-white text-[11px] font-bold flex items-center justify-center rounded-full border-2 border-[#0F172A] leading-none pb-[1px]">
              3
            </span>
</div>
</div>

<div className="relative group">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] text-[20px]" icon="lucide:search"></iconify-icon>
<input className="w-full bg-[#F5F4F0] text-[#1E293B] pl-12 pr-4 h-[50px] rounded-[30px] text-[15px] outline-none shadow-[0_1px_4px_rgba(0,0,0,0.06)] placeholder:text-[#94A3B8] transition-all focus:ring-2 focus:ring-[#F97316]/20" placeholder="Buscar profissionais..." type="text"/>
</div>
</header>

<main className="overflow-y-auto pb-24 sm:pb-12 px-4 sm:px-8 pt-6 hide-scrollbar flex-1 sm:col-start-2 sm:row-start-2">

<div className="bg-gradient-to-r from-[#F97316]/10 to-transparent border border-[#F97316]/10 rounded-[16px] p-4 mb-6 items-center justify-between relative overflow-hidden hidden sm:flex">
<div className="relative z-10">
<h2 className="text-[#F97316] font-bold tracking-tight text-lg mb-0.5">
              Job4You
            </h2>
<p className="text-xs text-slate-600 font-medium">
              Chamou, resolveu. Sem taxas abusivas.
            </p>
</div>
<iconify-icon className="text-4xl text-[#F97316]/80 relative z-10" icon="solar:bolt-circle-linear"></iconify-icon>
<div className="absolute -right-4 -top-4 w-16 h-16 bg-[#F97316]/10 rounded-full blur-xl"></div>
</div>

<div className="mb-8">
<div className="flex justify-between items-center mb-4">
<h3 className="text-[22px] font-bold tracking-tight text-[#0F172A]">
              Categorias
            </h3>
<button className="text-[13px] text-[#F97316] font-semibold hover:underline">
              Ver todas
            </button>
</div>
<div className="grid grid-cols-4 gap-3">
<div className="flex flex-col items-center justify-center bg-white border border-[#E2E8F0] rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.06)] h-[96px] cursor-pointer hover:border-[#F97316] transition-colors gap-2">
<div className="w-10 h-10 rounded-[14px] bg-[#FEF0E6] flex items-center justify-center text-[#F97316]">
<iconify-icon className="text-[22px]" icon="lucide:zap"></iconify-icon>
</div>
<span className="text-[13px] font-normal text-[#1E293B]">
                Elétrica
              </span>
</div>
<div className="flex flex-col items-center justify-center bg-white border border-[#E2E8F0] rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.06)] h-[96px] cursor-pointer hover:border-[#F97316] transition-colors gap-2">
<div className="w-10 h-10 rounded-[14px] bg-[#FEF0E6] flex items-center justify-center text-[#F97316]">
<iconify-icon className="text-[22px]" icon="lucide:droplets"></iconify-icon>
</div>
<span className="text-[13px] font-normal text-[#1E293B]">
                Hidráulica
              </span>
</div>
<div className="flex flex-col items-center justify-center bg-white border border-[#E2E8F0] rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.06)] h-[96px] cursor-pointer hover:border-[#F97316] transition-colors gap-2">
<div className="w-10 h-10 rounded-[14px] bg-[#FEF0E6] flex items-center justify-center text-[#F97316]">
<iconify-icon className="text-[22px]" icon="lucide:brush"></iconify-icon>
</div>
<span className="text-[13px] font-normal text-[#1E293B]">
                Limpeza
              </span>
</div>
<div className="flex flex-col items-center justify-center bg-white border border-[#E2E8F0] rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.06)] h-[96px] cursor-pointer hover:border-[#F97316] transition-colors gap-2">
<div className="w-10 h-10 rounded-[14px] bg-[#FEF0E6] flex items-center justify-center text-[#F97316]">
<iconify-icon className="text-[22px]" icon="lucide:book-open"></iconify-icon>
</div>
<span className="text-[13px] font-normal text-[#1E293B]">Aulas</span>
</div>
<div className="flex flex-col items-center justify-center bg-white border border-[#E2E8F0] rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.06)] h-[96px] cursor-pointer hover:border-[#F97316] transition-colors gap-2">
<div className="w-10 h-10 rounded-[14px] bg-[#FEF0E6] flex items-center justify-center text-[#F97316]">
<iconify-icon className="text-[22px]" icon="lucide:hammer"></iconify-icon>
</div>
<span className="text-[13px] font-normal text-[#1E293B]">
                Construção
              </span>
</div>
<div className="flex flex-col items-center justify-center bg-white border border-[#E2E8F0] rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.06)] h-[96px] cursor-pointer hover:border-[#F97316] transition-colors gap-2">
<div className="w-10 h-10 rounded-[14px] bg-[#FEF0E6] flex items-center justify-center text-[#F97316]">
<iconify-icon className="text-[22px]" icon="lucide:paint-roller"></iconify-icon>
</div>
<span className="text-[13px] font-normal text-[#1E293B]">
                Pintura
              </span>
</div>
<div className="flex flex-col items-center justify-center bg-white border border-[#E2E8F0] rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.06)] h-[96px] cursor-pointer hover:border-[#F97316] transition-colors gap-2">
<div className="w-10 h-10 rounded-[14px] bg-[#FEF0E6] flex items-center justify-center text-[#F97316]">
<iconify-icon className="text-[22px]" icon="lucide:monitor"></iconify-icon>
</div>
<span className="text-[13px] font-normal text-[#1E293B]">TI</span>
</div>
<div className="flex flex-col items-center justify-center bg-white border border-[#E2E8F0] rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.06)] h-[96px] cursor-pointer hover:border-[#F97316] transition-colors gap-2">
<div className="w-10 h-10 rounded-[14px] bg-[#FEF0E6] flex items-center justify-center text-[#F97316]">
<iconify-icon className="text-[22px]" icon="lucide:more-horizontal"></iconify-icon>
</div>
<span className="text-[13px] font-normal text-[#1E293B]">Mais</span>
</div>
</div>
</div>

<div className="mb-8 bg-[#0F172A] rounded-[16px] p-4 flex items-center gap-4 text-white relative overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
<div className="absolute right-0 top-0 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
<div className="w-10 h-10 rounded-full bg-[#F97316]/20 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#F97316] text-[20px]" icon="lucide:map-pin"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs text-slate-300 mb-0.5">Serviço em andamento</p>
<p className="text-sm font-medium">Reparo elétrico - Carlos M.</p>
</div>
<button className="bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
            Ver chat
          </button>
</div>

<div>
<div className="flex justify-between items-center mb-4">
<h3 className="text-[22px] font-bold tracking-tight text-[#0F172A]">
              Profissionais Próximos
            </h3>
<div className="flex items-center gap-1 text-[13px] text-[#64748B] font-medium">
<iconify-icon className="text-[16px]" icon="lucide:sliders-horizontal"></iconify-icon>
              Recomendados
            </div>
</div>
<div className="flex flex-col gap-4">

<div className="bg-white p-4 rounded-[16px] border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-md cursor-pointer">
<div className="flex gap-3.5 items-start">
<div className="relative">
<img className="w-14 h-14 rounded-2xl object-cover border border-slate-100" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h4 className="text-base font-medium text-slate-900 leading-tight">
                        Roberto Alves
                      </h4>
<p className="text-xs text-slate-500 mt-0.5">
                        Eletricista Residencial
                      </p>
</div>
<div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
<iconify-icon className="text-[#F97316] text-[14px] fill-current" icon="lucide:star"></iconify-icon>
<span className="text-xs font-medium text-slate-700">
                        4.9
                      </span>
</div>
</div>
<p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                    Especialista em instalação de chuveiros, fiação e painéis
                    elétricos. Atendimento rápido em até 2h na região central.
                  </p>
<div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
<div>
<p className="text-xs text-slate-400 mb-0.5">
                        Visita a partir de
                      </p>
<p className="text-sm font-medium text-slate-900">
                        R$ 80
                        <span className="text-xs text-slate-400 font-normal">
                          /hora
                        </span>
</p>
</div>
<button className="bg-[#F97316] text-white px-5 py-2 rounded-xl text-[14px] font-semibold hover:bg-[#EA6A0A] transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                      Contratar
                    </button>
</div>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-[16px] border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-md cursor-pointer">
<div className="flex gap-3.5 items-start">
<div className="relative">
<img className="w-14 h-14 rounded-2xl object-cover border border-slate-100" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-slate-300 border-2 border-white rounded-full"></div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h4 className="text-base font-medium text-slate-900 leading-tight">
                        Ana Beatriz
                      </h4>
<p className="text-xs text-slate-500 mt-0.5">
                        Diarista Especializada
                      </p>
</div>
<div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
<iconify-icon className="text-[#F97316] text-[14px] fill-current" icon="lucide:star"></iconify-icon>
<span className="text-xs font-medium text-slate-700">
                        5.0
                      </span>
</div>
</div>
<p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                    Limpeza pesada, pós-obra e organização de armários. Levo
                    meus próprios produtos de limpeza ecológicos.
                  </p>
<div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
<div>
<p className="text-xs text-slate-400 mb-0.5">
                        Diária a partir de
                      </p>
<p className="text-sm font-medium text-slate-900">
                        R$ 150
                        <span className="text-xs text-slate-400 font-normal">
                          /dia
                        </span>
</p>
</div>
<button className="bg-[#1E2A38] text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
                      Contratar
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden sm:flex col-start-1 row-span-2 bg-white border-r border-slate-200/60 flex-col z-50 h-full">
<div className="p-6 pt-8 flex-1 overflow-y-auto hide-scrollbar">
<h2 className="text-[26px] font-extrabold text-[#F97316] mb-8 tracking-tight">
            Job
            <span className="text-[#0F172A]">4You</span>
</h2>
<div className="mb-8">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Principal
            </p>
<div className="flex flex-col gap-2">
<button className="flex items-center gap-3 text-[#F97316] bg-[#FEF0E6] px-4 py-2.5 rounded-xl transition-colors w-full">
<iconify-icon className="text-xl" icon="solar:home-2-linear"></iconify-icon>
<span className="text-sm font-medium">Início</span>
</button>
<button className="flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-colors w-full">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
<span className="text-sm font-medium">Busca</span>
</button>
<button className="flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-colors w-full justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl" icon="solar:chat-round-dots-linear"></iconify-icon>
<span className="text-sm font-medium">Chat</span>
</div>
<span className="w-2 h-2 bg-[#EF4444] rounded-full"></span>
</button>
<button className="flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-colors w-full">
<iconify-icon className="text-xl" icon="solar:history-linear"></iconify-icon>
<span className="text-sm font-medium">Histórico</span>
</button>
<button className="flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-colors w-full">
<iconify-icon className="text-xl" icon="solar:info-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Como Funciona</span>
</button>
</div>
</div>
<div className="mb-8">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Profissional
            </p>
<div className="flex flex-col gap-2">
<button className="flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-colors w-full">
<iconify-icon className="text-xl" icon="solar:widget-linear"></iconify-icon>
<span className="text-sm font-medium">Dashboard</span>
</button>
<button className="flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-colors w-full">
<iconify-icon className="text-xl" icon="solar:chat-round-dots-linear"></iconify-icon>
<span className="text-sm font-medium">Chat</span>
</button>
<button className="flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-colors w-full">
<iconify-icon className="text-xl" icon="solar:history-linear"></iconify-icon>
<span className="text-sm font-medium">Histórico</span>
</button>
<button className="flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-colors w-full">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear"></iconify-icon>
<span className="text-sm font-medium">Financeiro</span>
</button>
<button className="flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-colors w-full">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
<span className="text-sm font-medium">Contrato</span>
</button>
<button className="flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-colors w-full">
<iconify-icon className="text-xl" icon="solar:star-linear"></iconify-icon>
<span className="text-sm font-medium">Avaliações</span>
</button>
</div>
</div>
<div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Configurações
            </p>
<div className="flex flex-col gap-2">
<button className="flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-colors w-full">
<iconify-icon className="text-xl" icon="solar:user-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Minha conta</span>
</button>
<button className="flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-colors w-full">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
<span className="text-sm font-medium">Configurações</span>
</button>
<button className="flex items-center gap-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-colors w-full">
<iconify-icon className="text-xl" icon="solar:card-linear"></iconify-icon>
<span className="text-sm font-medium">Métodos de pagamento</span>
</button>
</div>
</div>
</div>
</aside>
<nav className="absolute bottom-0 left-0 w-full bg-white border-t border-[#E2E8F0] pb-6 sm:pb-3 pt-3 px-6 flex justify-between items-center z-50 sm:hidden">
<div className="flex flex-col items-center gap-1 text-[#F97316]">
<iconify-icon className="text-2xl" icon="lucide:home"></iconify-icon>
<span className="text-[11px] font-semibold">Início</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#94A3B8]">
<iconify-icon className="text-2xl" icon="lucide:search"></iconify-icon>
<span className="text-[11px] font-medium">Busca</span>
</div>
<div className="flex flex-col items-center gap-1 text-[#94A3B8] relative">
<iconify-icon className="text-2xl" icon="lucide:bell"></iconify-icon>
<span className="text-[11px] font-medium">Avisos</span>
<span className="absolute top-0 right-1 w-2.5 h-2.5 bg-[#EF4444] rounded-full border-2 border-white"></span>
</div>
<div className="flex flex-col items-center gap-1 text-[#94A3B8]">
<iconify-icon className="text-2xl" icon="lucide:user"></iconify-icon>
<span className="text-[11px] font-medium">Perfil</span>
</div>
</nav>
</div>

    </>
  );
}
