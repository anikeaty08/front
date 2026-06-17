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



      // Reveal on Scroll
      const revealElements = document.querySelectorAll('.reveal');

      const revealObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
                  observer.unobserve(entry.target);
              }
          });
      }, { rootMargin: "0px 0px -50px 0px", threshold: 0.1 });

      revealElements.forEach(el => revealObserver.observe(el));

      // Step Badge Glow on Scroll
      const stepItems = document.querySelectorAll('.step-item');
      const stepObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              const badge = entry.target.querySelector('.badge');
              if (entry.isIntersecting) {
                  badge.classList.add('border-blue-500', 'shadow-[0_0_20px_rgba(37,99,235,0.4)]', 'bg-blue-500/10', 'text-blue-400');
              } else {
                  badge.classList.remove('border-blue-500', 'shadow-[0_0_20px_rgba(37,99,235,0.4)]', 'bg-blue-500/10', 'text-blue-400');
              }
          });
      }, { rootMargin: "-40% 0px -40% 0px", threshold: 0 });

      if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          stepItems.forEach(el => stepObserver.observe(el));
      }

      // Accordion Logic
      function toggleAccordion(button) {
          const content = button.nextElementSibling;
          const icon = button.querySelector('iconify-icon');
          const isExpanded = content.getAttribute('aria-hidden') === 'false';

          // Close all others
          document.querySelectorAll('.accordion-content').forEach(el => {
              el.setAttribute('aria-hidden', 'true');
              const btnIcon = el.previousElementSibling.querySelector('iconify-icon');
              btnIcon.setAttribute('icon', 'solar:add-circle-linear');
              btnIcon.classList.remove('rotate-45', 'text-blue-400');
          });

          // Toggle current
          if (!isExpanded) {
              content.setAttribute('aria-hidden', 'false');
              icon.setAttribute('icon', 'solar:close-circle-linear');
              icon.classList.add('rotate-45', 'text-blue-400');
          }
      }

      // Modal & HubSpot Form Logic
      const modal = document.getElementById('applicationModal');
      const modalCard = document.getElementById('modalCard');
      let formRendered = false;

      function openModal() {
          modal.classList.remove('opacity-0', 'pointer-events-none');
          setTimeout(() => {
              modalCard.classList.remove('translate-y-8');
          }, 10);
          document.body.style.overflow = 'hidden';

          if (!formRendered) {
              const checkAndLoad = () => {
                  if (window.hbspt) {
                      hbspt.forms.create({
                          portalId: "47448125",
                          formId: "216192bb-2f3c-46b6-9d8c-2e178c5694c7",
                          region: "na1",
                          target: "#hubspotModalForm"
                      });
                      formRendered = true;
                  } else {
                      setTimeout(checkAndLoad, 100);
                  }
              };
              checkAndLoad();
          }
      }

      function closeModal() {
          modalCard.classList.add('translate-y-8');
          setTimeout(() => {
              modal.classList.add('opacity-0', 'pointer-events-none');
              document.body.style.overflow = '';
          }, 300);
      }

      // Close on ESC
      document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && !modal.classList.contains('pointer-events-none')) {
              closeModal();
          }
      });
    
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
      

<div className="bg-grid"></div>

<header className="fixed top-0 w-full z-40 bg-[#111827]/55 backdrop-blur-[16px] border-b border-white/[0.06] transition-all">
<div className="max-w-[1200px] mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
<a aria-label="Blueprintt" className="flex items-center opacity-90 hover:opacity-100 transition-opacity" href="#">
<img alt="Blueprintt" className="h-6 md:h-7 w-auto object-contain" src="https://blueprintt.co/wp-content/uploads/2025/01/logo-footer-light.svg"/>
</a>
<button className="bg-[#2563EB] hover:bg-[#60A5FA] text-white text-xs md:text-sm font-semibold py-2 md:py-2.5 px-4 md:px-5 rounded-[14px] transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:-translate-y-[1px]" onclick="openModal()">
<span className="hidden md:inline">QUERO APLICAR AGORA</span>
<span className="md:hidden">Aplicar</span>
</button>
</div>
</header>
<main className="relative z-10">

<section className="max-w-[1200px] mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-visible">
<div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

<div className="flex flex-col items-start reveal md:pt-6">

<div className="mb-8">
<img alt="SPS 2026 - Strategic Planning Summit" className="h-20 md:h-28 w-auto object-contain drop-shadow-2xl" src="https://paginas.blueprintt.co/wp-content/uploads/2026/04/logo-sps.png"/>
</div>
<h1 className="text-3xl md:text-[42px] font-semibold tracking-tight leading-[1.15] text-[#F9FAFB]">
              Em setembro, os líderes que estão definindo o futuro do
              planejamento estratégico no Brasil estarão na mesma sala.
            </h1>

<div className="flex flex-wrap items-center gap-3 md:gap-4 mt-5 mb-6">
<div className="flex items-baseline gap-2 text-lg md:text-xl font-medium">
<span className="text-[#9CA3AF]/60 line-through decoration-1 text-base">
                  De R$ 6.207
                </span>
<span className="text-[#9CA3AF] text-sm md:text-base">
                  por apenas
                </span>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] to-[#2563EB] font-semibold tracking-tight">
                  R$ 3.103
                </span>
</div>
<div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-full px-3 py-1 flex items-center gap-1.5">
<iconify-icon className="text-[#10B981] text-sm" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#10B981] text-xs font-semibold tracking-wide">
                  50% de desconto na inscrição
                </span>
</div>
</div>
<p className="text-[#9CA3AF] text-base md:text-lg leading-relaxed max-w-[720px] mb-8">
              Preencha a aplicação abaixo e garanta sua vaga na única
              conferência no Brasil focada exclusivamente em Planejamento
              Estratégico para grandes corporações. Nosso time entra em contato
              para finalizar sua inscrição.
            </p>

<div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] rounded-[14px] px-4 py-2.5 mb-8">
<iconify-icon className="text-[#9CA3AF] text-lg" icon="solar:calendar-mark-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#F9FAFB]">
                São Paulo | 03 e 04 de setembro de 2026
              </span>
</div>

<div className="w-full sm:w-auto flex flex-col gap-3">
<button className="group relative w-full sm:w-auto bg-[#2563EB] text-white font-semibold text-sm md:text-base py-4 px-8 rounded-[14px] overflow-hidden transition-all duration-300 hover:-translate-y-[3px] shadow-[0_12px_24px_rgba(37,99,235,0.2)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)] border border-[#60A5FA]/30" onclick="openModal()">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
<span className="relative z-10 flex items-center justify-center gap-2">
                  QUERO APLICAR AGORA
                  <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</button>
<p className="text-[11px] text-[#9CA3AF] text-center sm:text-left">
                Aplicação válida apenas hoje, 14/05, até às 23h59. Vagas
                extremamente limitadas.
              </p>
</div>
</div>

<div className="relative w-full aspect-[4/5] md:aspect-square max-w-[500px] mx-auto reveal mt-8 md:mt-0 md:sticky md:top-28 self-start" style={{transitionDelay: '150ms'}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/30 blur-[80px] rounded-full animate-blob pointer-events-none z-0"></div>

<div className="relative z-10 w-full h-full bg-[#111827]/80 backdrop-blur-xl border border-white/[0.08] rounded-[24px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.28)] flex flex-col">
<div className="absolute inset-0 w-full h-full group">
<img alt="Strategic Planning Summit Image 1" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 carousel-fade" src="https://paginas.blueprintt.co/wp-content/uploads/2026/05/1.png" style={{animationDelay: '0s'}}/>
<img alt="Strategic Planning Summit Image 2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 carousel-fade" src="https://paginas.blueprintt.co/wp-content/uploads/2026/05/5.png" style={{animationDelay: '-16s'}}/>
<img alt="Strategic Planning Summit Image 3" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 carousel-fade" src="https://paginas.blueprintt.co/wp-content/uploads/2026/05/4.png" style={{animationDelay: '-12s'}}/>
<img alt="Strategic Planning Summit Image 4" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 carousel-fade" src="https://paginas.blueprintt.co/wp-content/uploads/2026/05/3.png" style={{animationDelay: '-8s'}}/>
<img alt="Strategic Planning Summit Image 5" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 carousel-fade" src="https://paginas.blueprintt.co/wp-content/uploads/2026/05/2.png" style={{animationDelay: '-4s'}}/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/20 to-transparent pointer-events-none"></div>
<div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/30 via-transparent to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="w-full bg-white text-[#111827] border-y border-gray-100 px-6 py-16 md:py-20 relative z-10">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-16 reveal text-gray-900 max-w-[1200px] mx-auto">
          O que espera por você no Strategic Planning Summit 2026:
        </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1200px] mx-auto">
<div className="group bg-white border border-gray-200 rounded-[20px] p-6 transition-all duration-300 hover:border-blue-500/45 hover:-translate-y-[2px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] reveal">
<div className="w-10 h-10 bg-gray-50 rounded-[12px] border border-gray-200 flex items-center justify-center mb-4 text-gray-500 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-xl" icon="lucide:users" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-[15px] font-semibold text-gray-900 mb-2 leading-snug">
              Líderes de Decisão
            </h3>
<p className="text-[13px] text-gray-600 leading-relaxed">
              Você na mesma sala que líderes de Planejamento Estratégico de
              grandes corporações. Cases reais e debates que não acontecem em
              outro lugar.
            </p>
</div>
<div className="group bg-white border border-gray-200 rounded-[20px] p-6 transition-all duration-300 hover:border-blue-500/45 hover:-translate-y-[2px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] reveal" style={{transitionDelay: '90ms'}}>
<div className="w-10 h-10 bg-gray-50 rounded-[12px] border border-gray-200 flex items-center justify-center mb-4 text-gray-500 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-xl" icon="lucide:badge-percent" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-[15px] font-semibold text-gray-900 mb-2 leading-snug">
              50% de Desconto
            </h3>
<p className="text-[13px] text-gray-600 leading-relaxed">
              De R$ 6.207 por apenas R$ 3.103. Condição exclusiva e indisponível
              em outros canais, reservada para quem se aplica hoje.
            </p>
</div>
<div className="group bg-white border border-gray-200 rounded-[20px] p-6 transition-all duration-300 hover:border-blue-500/45 hover:-translate-y-[2px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] reveal" style={{transitionDelay: '180ms'}}>
<div className="w-10 h-10 bg-gray-50 rounded-[12px] border border-gray-200 flex items-center justify-center mb-4 text-gray-500 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-xl" icon="lucide:zap" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-[15px] font-semibold text-gray-900 mb-2 leading-snug">
              Práticas Aplicáveis
            </h3>
<p className="text-[13px] text-gray-600 leading-relaxed">
              Cenários que viraram decisão e alocação de capital que protegeu
              margem. Tudo apresentado por quem fez e gerou resultado prático.
            </p>
</div>
<div className="group bg-white border border-gray-200 rounded-[20px] p-6 transition-all duration-300 hover:border-blue-500/45 hover:-translate-y-[2px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] reveal" style={{transitionDelay: '270ms'}}>
<div className="w-10 h-10 bg-gray-50 rounded-[12px] border border-gray-200 flex items-center justify-center mb-4 text-gray-500 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-xl" icon="lucide:network" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-[15px] font-semibold text-gray-900 mb-2 leading-snug">
              Conexões de Valor
            </h3>
<p className="text-[13px] text-gray-600 leading-relaxed">
              Construa uma rede de pares que entendem seus desafios e que se
              tornam referência constante para benchmark, troca de práticas e
              parcerias.
            </p>
</div>
<div className="group bg-white border border-gray-200 rounded-[20px] p-6 transition-all duration-300 hover:border-blue-500/45 hover:-translate-y-[2px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] reveal" style={{transitionDelay: '360ms'}}>
<div className="w-10 h-10 bg-gray-50 rounded-[12px] border border-gray-200 flex items-center justify-center mb-4 text-gray-500 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-xl" icon="lucide:folder-lock" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-[15px] font-semibold text-gray-900 mb-2 leading-snug">
              Conteúdo Reservado
            </h3>
<p className="text-[13px] text-gray-600 leading-relaxed">
              Case de sucesso completo de Planejamento Estratégico + material
              com lições aprendidas + acesso prioritário à programação antes do
              público.
            </p>
</div>
<div className="group bg-white border border-gray-200 rounded-[20px] p-6 transition-all duration-300 hover:border-blue-500/45 hover:-translate-y-[2px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] reveal" style={{transitionDelay: '450ms'}}>
<div className="w-10 h-10 bg-gray-50 rounded-[12px] border border-gray-200 flex items-center justify-center mb-4 text-gray-500 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-xl" icon="lucide:headset" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-[15px] font-semibold text-gray-900 mb-2 leading-snug">
              Suporte Especializado
            </h3>
<p className="text-[13px] text-gray-600 leading-relaxed">
              Nosso consultor entende seu contexto e envia proposta formal para
              facilitar a aprovação interna com todos os dados de faturamento.
            </p>
</div>
</div>
</section>

<section className="w-full bg-[#0C0F1F] border-t border-white/[0.06] px-6 py-16 md:py-20">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-16 text-center reveal max-w-[720px] mx-auto">
          Como funciona o processo de aplicação:
        </h2>
<div className="relative max-w-[720px] mx-auto">

<div className="absolute left-[15px] md:left-[19px] top-2 bottom-12 w-px bg-gradient-to-b from-[#2563EB]/50 via-white/10 to-transparent"></div>

<div className="relative flex gap-6 md:gap-8 mb-12 step-item reveal">
<div className="w-8 h-8 rounded-full bg-[#111827] border border-white/[0.08] flex items-center justify-center text-sm font-semibold shrink-0 z-10 transition-all duration-500 badge">
              1
            </div>
<div className="pt-1">
<h3 className="text-lg font-semibold text-[#F9FAFB] mb-2">
                Preencha o formulário
              </h3>
<p className="text-sm text-[#9CA3AF] leading-relaxed mb-1">
                São apenas 6 campos
              </p>
<p className="text-sm text-[#9CA3AF] leading-relaxed">
                Leva menos de 2 minutos. Sua aplicação é um termo de compromisso
                com o interesse na condição exclusiva.
              </p>
</div>
</div>

<div className="relative flex gap-6 md:gap-8 mb-12 step-item reveal" style={{transitionDelay: '90ms'}}>
<div className="w-8 h-8 rounded-full bg-[#111827] border border-white/[0.08] flex items-center justify-center text-sm font-semibold shrink-0 z-10 transition-all duration-500 badge">
              2
            </div>
<div className="pt-1">
<h3 className="text-lg font-semibold text-[#F9FAFB] mb-2">
                Nosso especialista entra em contato por telefone ou WhatsApp
              </h3>
<p className="text-sm text-[#9CA3AF] leading-relaxed">
                Em até 24 horas úteis, um especialista da Blueprintt fala com
                você para entender seu contexto, esclarecer dúvidas e apresentar
                as opções de inscrição.
              </p>
</div>
</div>

<div className="relative flex gap-6 md:gap-8 mb-12 step-item reveal" style={{transitionDelay: '180ms'}}>
<div className="w-8 h-8 rounded-full bg-[#111827] border border-white/[0.08] flex items-center justify-center text-sm font-semibold shrink-0 z-10 transition-all duration-500 badge">
              3
            </div>
<div className="pt-1">
<h3 className="text-lg font-semibold text-[#F9FAFB] mb-2">
                Receba proposta formal (se necessário)
              </h3>
<p className="text-sm text-[#9CA3AF] leading-relaxed">
                Se a inscrição for custeada pela empresa, nosso especialista
                envia proposta formal com todas as informações para aprovação
                interna, nota fiscal, dados da conferência e condições de
                pagamento.
              </p>
</div>
</div>

<div className="relative flex gap-6 md:gap-8 step-item reveal" style={{transitionDelay: '270ms'}}>
<div className="w-8 h-8 rounded-full bg-[#111827] border border-white/[0.08] flex items-center justify-center text-sm font-semibold shrink-0 z-10 transition-all duration-500 badge">
              4
            </div>
<div className="pt-1">
<h3 className="text-lg font-semibold text-[#F9FAFB] mb-2">
                Confirme sua inscrição e garanta sua vaga
              </h3>
<p className="text-sm text-[#9CA3AF] leading-relaxed">
                Após o alinhamento com o especialista, você finaliza sua
                inscrição e garante sua vaga no Strategic Planning Summit 2026
                com a condição exclusiva de 50% de desconto.
              </p>
</div>
</div>
</div>
</section>

<section className="w-full bg-white text-[#111827] border-t border-gray-100 px-6 py-16 md:py-20 relative z-10">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-12 reveal text-gray-900 max-w-[720px] mx-auto">
          Dúvidas sobre o processo:
        </h2>
<div className="space-y-3 max-w-[720px] mx-auto" id="faq-container">

<div className="border border-gray-200 rounded-[16px] bg-white reveal">
<button className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm md:text-base font-semibold pr-4 text-gray-900">
                A aplicação me compromete com o pagamento imediato?
              </span>
<iconify-icon className="text-xl text-gray-400 shrink-0 transition-transform duration-300" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div aria-hidden="true" className="accordion-content">
<div className="accordion-inner px-6 pb-5">
<p className="text-sm text-gray-600">
                  Não. A aplicação é um termo de compromisso com seu interesse
                  na condição exclusiva. O pagamento só acontece após o contato
                  com nosso especialista, quando você confirmar sua inscrição.
                </p>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-[16px] bg-white reveal" style={{transitionDelay: '90ms'}}>
<button className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm md:text-base font-semibold pr-4 text-gray-900">
                Minha empresa pode custear a inscrição?
              </span>
<iconify-icon className="text-xl text-gray-400 shrink-0 transition-transform duration-300" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div aria-hidden="true" className="accordion-content">
<div className="accordion-inner px-6 pb-5">
<p className="text-sm text-gray-600">
                  Sim. Nosso especialista envia proposta formal com todos os
                  dados necessários para aprovação interna, nota fiscal, CNPJ,
                  descrição da conferência e condições de faturamento
                  corporativo.
                </p>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-[16px] bg-white reveal" style={{transitionDelay: '180ms'}}>
<button className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm md:text-base font-semibold pr-4 text-gray-900">
                Como o especialista entra em contato?
              </span>
<iconify-icon className="text-xl text-gray-400 shrink-0 transition-transform duration-300" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div aria-hidden="true" className="accordion-content">
<div className="accordion-inner px-6 pb-5">
<p className="text-sm text-gray-600">
                  Por telefone ou WhatsApp, utilizando o número informado no
                  formulário. O contato acontece em até 24 horas úteis.
                </p>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-[16px] bg-white reveal" style={{transitionDelay: '270ms'}}>
<button className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm md:text-base font-semibold pr-4 text-gray-900">
                O desconto de 50% é válido mesmo se a empresa pagar?
              </span>
<iconify-icon className="text-xl text-gray-400 shrink-0 transition-transform duration-300" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div aria-hidden="true" className="accordion-content">
<div className="accordion-inner px-6 pb-5">
<p className="text-sm text-gray-600">
                  Sim. A condição exclusiva se aplica independentemente de quem
                  custeia, pessoa física ou jurídica.
                </p>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-[16px] bg-white reveal" style={{transitionDelay: '360ms'}}>
<button className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm md:text-base font-semibold pr-4 text-gray-900">
                Posso inscrever mais de uma pessoa da minha equipe?
              </span>
<iconify-icon className="text-xl text-gray-400 shrink-0 transition-transform duration-300" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div aria-hidden="true" className="accordion-content">
<div className="accordion-inner px-6 pb-5">
<p className="text-sm text-gray-600">
                  Sim. Informe ao especialista durante o contato e ele apresenta
                  condições para múltiplas inscrições.
                </p>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-[16px] bg-white reveal" style={{transitionDelay: '450ms'}}>
<button className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm md:text-base font-semibold pr-4 text-gray-900">
                O que acontece se eu não conseguir aprovação interna a tempo?
              </span>
<iconify-icon className="text-xl text-gray-400 shrink-0 transition-transform duration-300" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div aria-hidden="true" className="accordion-content">
<div className="accordion-inner px-6 pb-5">
<p className="text-sm text-gray-600">
                  Nosso especialista trabalha com você para adequar prazos e
                  formatos de proposta. O objetivo é facilitar a aprovação.
                </p>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-[16px] bg-white reveal" style={{transitionDelay: '540ms'}}>
<button className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm md:text-base font-semibold pr-4 text-gray-900">
                A conferência é presencial?
              </span>
<iconify-icon className="text-xl text-gray-400 shrink-0 transition-transform duration-300" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div aria-hidden="true" className="accordion-content">
<div className="accordion-inner px-6 pb-5">
<p className="text-sm text-gray-600">
                  Sim. O Strategic Planning Summit 2026 acontece presencialmente
                  em São Paulo, nos dias 03 e 04 de setembro de 2026.
                </p>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-[16px] bg-white reveal" style={{transitionDelay: '630ms'}}>
<button className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm md:text-base font-semibold pr-4 text-gray-900">
                Qual é a política de cancelamento?
              </span>
<iconify-icon className="text-xl text-gray-400 shrink-0 transition-transform duration-300" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div aria-hidden="true" className="accordion-content">
<div className="accordion-inner px-6 pb-5">
<p className="text-sm text-gray-600">
                  Após a confirmação da inscrição, nosso time compartilha os
                  detalhes da política de cancelamento e reembolso.
                </p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/[0.06] bg-[#111827] pt-12 pb-12 md:pt-16 md:pb-16 px-6 relative z-10 reveal">
<div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-6 md:gap-8">
<a className="transition-opacity hover:opacity-80" href="https://blueprintt.co/" rel="noopener noreferrer" target="_blank">
<img alt="Blueprintt" className="h-6 md:h-8 w-auto object-contain opacity-70" src="https://blueprintt.co/wp-content/uploads/2025/01/logo-footer-light.svg"/>
</a>
<p className="text-xs md:text-sm font-light text-[#9CA3AF] max-w-3xl leading-relaxed">
          Ao utilizar nossos serviços, você concorda com nossos Termos de Uso e
          com nossa Política de Privacidade. Seus dados são tratados com
          segurança e em conformidade com a LGPD (Lei nº 13.709/2018),
          exclusivamente para comunicação e melhoria da experiência. Não
          comercializamos dados pessoais.
        </p>
</div>
</footer>

<div className="fixed inset-0 z-50 flex items-center justify-center px-4 opacity-0 pointer-events-none transition-opacity duration-300" id="applicationModal">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeModal()"></div>

<div className="relative w-full max-w-[640px] max-h-[88vh] bg-white rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.4)] overflow-hidden transform translate-y-8 transition-transform duration-300 flex flex-col" id="modalCard">

<div className="shrink-0 px-7 pt-7 pb-4 md:px-8 md:pt-8 md:pb-5 border-b border-gray-100 flex justify-between items-start bg-white sticky top-0 z-10">
<div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-1">
              Termo de compromisso
            </h2>
<p className="text-xs text-gray-500 leading-relaxed">
              Preencha sua aplicação para garantir acesso à condição exclusiva
              de hoje.
            </p>
</div>
<button className="w-8 h-8 rounded-[12px] bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors ml-4 shrink-0" onclick="closeModal()">
<iconify-icon className="text-lg" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="p-7 md:p-8 overflow-y-auto custom-scrollbar bg-white">
<div className="w-full bg-white" id="hubspotModalForm"></div>
</div>
</div>
</div>



    </>
  );
}
