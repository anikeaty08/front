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



      document.addEventListener('DOMContentLoaded', () => {
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
          if (window.scrollY > 40) {
            navbar.classList.add('bg-white/95', 'backdrop-blur-sm', 'border-b', 'border-[#153242]/10', 'shadow-[0_4px_12px_rgba(21,50,66,0.05)]');
            navbar.classList.remove('bg-transparent');
          } else {
            navbar.classList.remove('bg-white/95', 'backdrop-blur-sm', 'border-b', 'border-[#153242]/10', 'shadow-[0_4px_12px_rgba(21,50,66,0.05)]');
            navbar.classList.add('bg-transparent');
          }
        });

        const observerOptions = { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        document.querySelectorAll('.reveal-elem').forEach(el => observer.observe(el));

        const path = document.getElementById('process-path');
        const processSection = document.getElementById('processo');
        if(path && processSection) {
          const pathLength = path.getTotalLength();
          path.style.strokeDasharray = pathLength;
          path.style.strokeDashoffset = pathLength;
          window.addEventListener('scroll', () => {
            const sectionTop = processSection.offsetTop;
            const sectionHeight = processSection.offsetHeight;
            const viewportHeight = window.innerHeight;
            const scrollPos = window.scrollY;
            const start = sectionTop - (viewportHeight * 0.8);
            const end = sectionTop + (sectionHeight * 0.2);
            if (scrollPos > start && scrollPos < end) {
              const progress = (scrollPos - start) / (end - start);
              const drawLength = pathLength * progress;
              path.style.strokeDashoffset = pathLength - drawLength;
            } else if (scrollPos >= end) {
              path.style.strokeDashoffset = 0;
            } else {
              path.style.strokeDashoffset = pathLength;
            }
          });
        }
      });
    


      document.addEventListener('DOMContentLoaded', () => {
        const counters = document.querySelectorAll('.counter');
        const duration = 2000;
        const counterObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const el = entry.target;
              const target = parseFloat(el.getAttribute('data-target'));
              const prefix = el.getAttribute('data-prefix') || '';
              const suffix = el.getAttribute('data-suffix') || '';
              const decimals = parseInt(el.getAttribute('data-decimals') || '0');
              let startTimestamp = null;
              const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const easeProgress = progress * (2 - progress);
                const current = (easeProgress * target).toFixed(decimals);
                el.innerText = prefix + current + suffix;
                if (progress < 1) {
                  window.requestAnimationFrame(step);
                } else {
                  el.innerText = prefix + target.toFixed(decimals) + suffix;
                }
              };
              window.requestAnimationFrame(step);
              observer.unobserve(el);
            }
          });
        }, { threshold: 0.1 });
        counters.forEach(c => counterObserver.observe(c));
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
      

<div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none opacity-[0.04]">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="32" id="bg-grid" patternunits="userSpaceOnUse" width="32">
<path d="M 32 0 L 0 0 0 32" fill="none" stroke="#FFF9F3" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#bg-grid)" height="100%" width="100%"></rect>
</svg>
</div>

<nav className="fixed top-0 w-full z-[100] transition-all duration-500 py-4 px-6 lg:px-[5rem]" id="navbar">
<div className="max-w-[80rem] mx-auto flex items-center justify-between">
<a className="flex items-center block" href="#">
<img alt="Impulso Barber Logo" className="h-8 md:h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd0146a9-84ab-4427-bd5b-49694a6dcfce_320w.png"/>
</a>
<div className="hidden md:flex gap-10 text-[0.8125rem] font-normal text-[#8E8E8E] tracking-tight">
<a className="hover:text-[#FFF9F3] transition-colors duration-300" href="#dor">
            A realidade
          </a>
<a className="hover:text-[#FFF9F3] transition-colors duration-300" href="#solucao">
            O sistema
          </a>
<a className="hover:text-[#FFF9F3] transition-colors duration-300" href="#processo">
            Método
          </a>
</div>
<a className="text-[0.8125rem] font-medium px-5 py-2.5 rounded-full glass text-[#FFF9F3] hover:bg-[rgba(255,249,243,0.1)] transition-all duration-300" href="#cta">
          Diagnóstico grátis →
        </a>
</div>
</nav>

<section className="relative z-10 min-h-screen flex items-center pt-32 pb-[7.5rem] px-6 lg:px-[5rem] max-w-[80rem] mx-auto">
<div className="flex flex-col lg:flex-row items-center w-full gap-[4rem] lg:gap-[5rem]">
<div className="w-full lg:w-[55%] flex flex-col items-start reveal-elem visible">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-[#FFF9F3] animate-pulse"></span>
<span className="font-mono text-[0.6875rem] tracking-[0.2em] uppercase text-[#8E8E8E]">
              Para barbearias brasileiras nos EUA
            </span>
</div>
<h1 className="font-display text-[3.5rem] md:text-[5.5rem] leading-[0.95] tracking-tight text-[#FFF9F3] mb-8 text-balance">
            Seu corte é
            <span className="italic text-[#8E8E8E]">impecável.</span>
<br/>
            Mas a agenda está vazia.
          </h1>
<p className="text-[1.0625rem] md:text-[1.125rem] font-light text-[#8E8E8E] leading-relaxed mb-10 max-w-xl">
            Você precisa de uma
            <span className="text-[#FFF9F3]">estrutura completa</span>
            que transforma clientes de uma vez em clientes para sempre. Tráfego,
            sistema, automações e acompanhamento. Tudo em uma operação só.
          </p>
<div className="flex flex-col sm:flex-row gap-4 items-start">
<a className="group bg-[#FFF9F3] text-[#1A1A1A] text-[0.9375rem] font-medium px-7 py-4 rounded-full hover:bg-[#8E8E8E] hover:text-[#FFF9F3] transition-all duration-300 flex items-center gap-2" href="#cta">
              Quero meu diagnóstico
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
</a>
<a className="text-[0.9375rem] font-light text-[#8E8E8E] hover:text-[#FFF9F3] px-7 py-4 transition-colors duration-300" href="#solucao">
              Ver como funciona
            </a>
</div>
</div>
<div className="w-full lg:w-[45%] flex justify-center lg:justify-end reveal-elem visible" style={{transitionDelay: '200ms'}}>
<div className="relative w-full max-w-[28rem] aspect-square">
<div className="absolute inset-0 rounded-[2rem] glass-dark overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#FFF9F3]/[0.04] via-transparent to-[#515151]/[0.08]"></div>
<div className="absolute top-6 left-6 right-6 flex items-center justify-between">
<span className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-[#8E8E8E]">
                  Dashboard / Live
                </span>
<span className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#FFF9F3] animate-pulse"></span>
<span className="font-mono text-[0.625rem] text-[#8E8E8E]">
                    ATIVO
                  </span>
</span>
</div>
<div className="absolute top-20 left-6 right-6">
<div className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-[#515151] mb-2">
                  Agenda da semana
                </div>
<div className="font-display text-[4rem] leading-none text-[#FFF9F3]">
                  +412
                </div>
<div className="text-[0.75rem] text-[#8E8E8E] mt-1">
                  clientes nos últimos 30 dias
                </div>
</div>
<div className="absolute bottom-6 left-6 right-6">
<svg className="w-full" viewbox="0 0 300 80">
<path d="M 0 70 Q 50 60 80 50 T 160 30 T 240 20 T 300 10" fill="none" stroke="#FFF9F3" strokeWidth="1.5"></path>
<path d="M 0 70 Q 50 60 80 50 T 160 30 T 240 20 T 300 10 L 300 80 L 0 80 Z" fill="url(#g1)" opacity="0.15"></path>
<defs>
<lineargradient id="g1" x1="0" x2="0" y1="0" y2="1">
<stop offset="0" stop-color="#FFF9F3"></stop>
<stop offset="1" stop-color="#FFF9F3" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
<div className="flex justify-between mt-2 font-mono text-[0.625rem] text-[#515151] uppercase tracking-widest">
<span>Jan</span>
<span>Mar</span>
<span>Mai</span>
<span>Hoje</span>
</div>
</div>
</div>
<div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 w-48">
<div className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-[#8E8E8E] mb-1">
                Retenção
              </div>
<div className="font-display text-[2rem] leading-none text-[#FFF9F3]">
                74%
              </div>
<div className="text-[0.6875rem] text-[#8E8E8E] mt-1">
                ↑ 38% vs. mês anterior
              </div>
</div>
<div className="absolute -top-4 -left-4 glass rounded-2xl p-4">
<div className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-[#8E8E8E]">
                Ticket médio
              </div>
<div className="font-display text-[1.5rem] text-[#FFF9F3] leading-none mt-1">
                $ 68
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#141414] py-[10rem] px-6 lg:px-[5rem] relative z-10" id="dor">
<div className="max-w-[72rem] mx-auto">
<div className="max-w-[40rem] mb-[6rem] reveal-elem visible">
<span className="font-mono text-[0.6875rem] tracking-[0.3em] uppercase text-[#8E8E8E] mb-6 block">
            01 — A realidade
          </span>
<h2 className="font-display text-[2.75rem] md:text-[4rem] leading-[1] tracking-tight text-[#FFF9F3] text-balance">
            A maioria dos barbeiros trabalha muito.
            <br/>
            E lucra
            <span className="italic text-[#8E8E8E]">pouco.</span>
</h2>
<p className="text-[1.0625rem] leading-relaxed font-light text-[#8E8E8E] max-w-lg mt-6">
            Não é culpa sua. O mercado te ensinou a cortar cabelo. Ninguém te
            ensinou a operar uma empresa.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#515151]/20">
<div className="glass-dark p-10 reveal-elem visible">
<div className="font-mono text-[0.625rem] tracking-[0.3em] uppercase text-[#515151] mb-6">
              Sintoma 01
            </div>
<h3 className="font-display text-[1.75rem] leading-tight text-[#FFF9F3] mb-4">
              Falta recorrência
            </h3>
<p className="text-[0.9375rem] font-light text-[#8E8E8E] leading-relaxed">
              Clientes que somem depois do primeiro corte e nunca mais voltam.
            </p>
</div>
<div className="glass-dark p-10 reveal-elem visible" style={{transitionDelay: '100ms'}}>
<div className="font-mono text-[0.625rem] tracking-[0.3em] uppercase text-[#515151] mb-6">
              Sintoma 02
            </div>
<h3 className="font-display text-[1.75rem] leading-tight text-[#FFF9F3] mb-4">
              Buracos na agenda
            </h3>
<p className="text-[0.9375rem] font-light text-[#8E8E8E] leading-relaxed">
              Agenda cheia na terça e vazia na quinta, sem nenhuma
              previsibilidade.
            </p>
</div>
<div className="glass-dark p-10 reveal-elem visible" style={{transitionDelay: '200ms'}}>
<div className="font-mono text-[0.625rem] tracking-[0.3em] uppercase text-[#515151] mb-6">
              Sintoma 03
            </div>
<h3 className="font-display text-[1.75rem] leading-tight text-[#FFF9F3] mb-4">
              O serviço é bom. Ninguém sabe.
            </h3>
<p className="text-[0.9375rem] font-light text-[#8E8E8E] leading-relaxed">
              Você corta melhor do que a concorrência da esquina, mas se ninguém
              te encontra no Google, não importa o quão bom você é, vai
              continuar perdendo para a concorrência.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#1A1A1A] py-[10rem] px-6 lg:px-[5rem] relative z-10" id="solucao">
<div className="max-w-[80rem] mx-auto">
<div className="max-w-[40rem] mb-[6rem] reveal-elem visible">
<span className="font-mono text-[0.6875rem] tracking-[0.3em] uppercase text-[#8E8E8E] mb-6 block">
            02 — Nossa Operação
          </span>
<h2 className="font-display text-[2.75rem] md:text-[4rem] leading-[1] tracking-tight text-[#FFF9F3] text-balance">
            Uma operação completa.
            <br/>
            Um
            <span className="italic text-[#8E8E8E]">único</span>
            motor.
          </h2>
<p className="text-[1.0625rem] font-light text-[#8E8E8E] leading-relaxed mt-6 max-w-lg">
            Conheça a estrutura integrada que transformará a sua barbearia em
            uma máquina de crescimento previsível.
          </p>
</div>
<div className="w-full mb-[8rem] reveal-elem visible">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
<div className="glass-dark p-8 rounded-[2rem] relative z-10 hover:-translate-y-1 transition-transform duration-300">
<div className="font-mono text-[0.625rem] tracking-[0.3em] uppercase text-[#515151] mb-4">
                01
              </div>
<h4 className="font-display text-[1.5rem] text-[#FFF9F3] mb-3 leading-tight">
                Campanhas Estratégicas
              </h4>
<p className="text-[0.9375rem] font-light text-[#8E8E8E] leading-relaxed">
                Meta Ads e Google Ads com criativos de alta conversão, públicos
                validados e campanhas otimizadas para o nicho de barbearias nos
                EUA. Nada de achismo.
              </p>
</div>
<div className="glass-dark p-8 rounded-[2rem] relative z-10 hover:-translate-y-1 transition-transform duration-300">
<div className="font-mono text-[0.625rem] tracking-[0.3em] uppercase text-[#515151] mb-4">
                02
              </div>
<h4 className="font-display text-[1.5rem] text-[#FFF9F3] mb-3 leading-tight">
                Site de Autoridade
              </h4>
<p className="text-[0.9375rem] font-light text-[#8E8E8E] leading-relaxed">
                Site exclusivo, premium e otimizado para converter visitantes em
                agendamentos. Design exclusivo e transmite a qualidade do seu
                trabalho.
              </p>
</div>
<div className="glass-dark p-8 rounded-[2rem] relative z-10 hover:-translate-y-1 transition-transform duration-300">
<div className="font-mono text-[0.625rem] tracking-[0.3em] uppercase text-[#515151] mb-4">
                03
              </div>
<h4 className="font-display text-[1.5rem] text-[#FFF9F3] mb-3 leading-tight">
                Sistema de Agendamento
              </h4>
<p className="text-[0.9375rem] font-light text-[#8E8E8E] leading-relaxed">
                Sistema próprio para barbearias com controle de horários,
                lembretes automáticos, confirmações e integração com calendário.
              </p>
</div>
<div className="glass-dark p-8 rounded-[2rem] relative z-10 hover:-translate-y-1 transition-transform duration-300">
<div className="font-mono text-[0.625rem] tracking-[0.3em] uppercase text-[#515151] mb-4">
                04
              </div>
<h4 className="font-display text-[1.5rem] text-[#FFF9F3] mb-3 leading-tight">
                Automações com IA
              </h4>
<p className="text-[0.9375rem] font-light text-[#8E8E8E] leading-relaxed">
                Follow-up automático pós-corte, reativação de clientes inativos,
                confirmações por WhatsApp e email. A máquina trabalha enquanto
                você corta.
              </p>
</div>
<div className="glass-dark p-8 rounded-[2rem] relative z-10 hover:-translate-y-1 transition-transform duration-300">
<div className="font-mono text-[0.625rem] tracking-[0.3em] uppercase text-[#515151] mb-4">
                05
              </div>
<h4 className="font-display text-[1.5rem] text-[#FFF9F3] mb-3 leading-tight">
                Acompanhamento &amp; Previsibilidade
              </h4>
<p className="text-[0.9375rem] font-light text-[#8E8E8E] leading-relaxed">
                Reuniões quinzenais, relatórios, ajustes de estratégia e suporte
                direto. Você nunca fica no escuro sobre o que está funcionando.
              </p>
</div>
<div className="glass-dark p-8 rounded-[2rem] relative z-10 hover:-translate-y-1 transition-transform duration-300">
<div className="font-mono text-[0.625rem] tracking-[0.3em] uppercase text-[#515151] mb-4">
                06
              </div>
<h4 className="font-display text-[1.5rem] text-[#FFF9F3] mb-3 leading-tight">
                Estratégia Horários Vazios
              </h4>
<p className="text-[0.9375rem] font-light text-[#8E8E8E] leading-relaxed">
                Uma agenda sempre cheia, com a estratégia correta.
              </p>
</div>
</div>
<p className="text-[1rem] font-light text-[#FFF9F3] leading-relaxed text-center mt-12 max-w-2xl mx-auto">
            Cada dólar tem destino. Cada criativo tem objetivo. Cada lead é
            rastreado até virar agenda confirmada.
          </p>
</div>
<div className="flex flex-col md:flex-row-reverse items-center gap-[4rem] lg:gap-[6rem] mb-[8rem] reveal-elem visible">
<div className="w-full md:w-1/2">
<div className="glass-dark rounded-[2rem] p-10 aspect-square flex items-center justify-center relative overflow-hidden">
<div className="absolute top-6 left-6 font-mono text-[0.625rem] tracking-[0.3em] uppercase text-[#515151]">
                02 / Conexão
              </div>
<svg className="w-full max-w-[18rem]" viewbox="0 0 300 300">
<rect fill="rgba(255,249,243,0.03)" height="220" rx="8" stroke="#515151" strokeWidth="1" transform="rotate(-6 150 150)" width="180" x="60" y="40"></rect>
<rect className="" fill="rgba(255,249,243,0.06)" height="220" rx="8" stroke="#FFF9F3" strokeWidth="1" transform="rotate(3 150 150)" width="180" x="60" y="40"></rect>
<g className="" transform="rotate(3 150 150)">
<circle className="" cx="150" cy="110" fill="rgba(255,249,243,0.1)" r="30"></circle>
<path d="M90 180 L210 180" opacity="0.3" stroke="#8E8E8E" strokeWidth="2"></path>
<path d="M90 200 L180 200" opacity="0.2" stroke="#8E8E8E" strokeWidth="2"></path>
<polygon fill="#FFF9F3" points="142,100 165,110 142,120"></polygon>
</g>
</svg>
</div>
</div>
<div className="w-full md:w-1/2">
<div className="font-mono text-[0.6875rem] tracking-[0.3em] uppercase text-[#515151] mb-4">
              Criativo
            </div>
<h3 className="font-display text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight text-[#FFF9F3] mb-6">
              A gente fala como o seu cliente fala.
            </h3>
<p className="text-[1rem] font-light text-[#8E8E8E] leading-relaxed mb-4">
              Nós sabemos exatamente o vídeo que gera atenção do seu cliente e a
              comunicação que um banner precisa ter.
            </p>
<p className="text-[1rem] font-light text-[#FFF9F3] leading-relaxed">
              Nossos criativos são pensados, escritos e validados com uma
              estratégia que já funciona. Sem IA genérica. Sem template
              reciclado.
            </p>
</div>
</div>
<div className="flex flex-col items-center text-center reveal-elem visible">
<div className="w-full mb-12 glass-dark rounded-[2rem] p-8 md:p-12 overflow-hidden">
<div className="flex items-center justify-between mb-8">
<div className="font-mono text-[0.625rem] tracking-[0.3em] uppercase text-[#515151]">
                03 / Retenção · Dashboard ao vivo
              </div>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#FFF9F3] animate-pulse"></span>
<span className="font-mono text-[0.625rem] text-[#8E8E8E] tracking-widest">
                  SYNCED
                </span>
</div>
</div>
<div className="grid grid-cols-3 gap-6 text-left">
<div className="">
<div className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-[#515151] mb-2">
                  Agendas hoje
                </div>
<div className="font-display text-[3rem] md:text-[4rem] leading-none text-[#FFF9F3] counter" data-target="42">
                  0
                </div>
<div className="h-px bg-[#FFF9F3] mt-4 w-full"></div>
</div>
<div className="">
<div className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-[#515151] mb-2">
                  Faturamento mês
                </div>
<div className="font-display text-[3rem] md:text-[4rem] leading-none text-[#FFF9F3] counter" data-decimals="1" data-prefix="$" data-suffix="k" data-target="18.4">
                  $0.0k
                </div>
<svg className="w-full mt-4" viewbox="0 0 100 20">
<path d="M0 15 Q 25 10 50 12 T 100 4" fill="none" stroke="#FFF9F3" strokeWidth="1"></path>
</svg>
</div>
<div>
<div className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-[#515151] mb-2">
                  Retenção
                </div>
<div className="font-display text-[3rem] md:text-[4rem] leading-none text-[#FFF9F3] counter" data-suffix="%" data-target="74">
                  0%
                </div>
<div className="relative h-px bg-[#515151]/40 mt-4">
<div className="absolute inset-y-0 left-0 bg-[#FFF9F3]" style={{width: '74%'}}></div>
</div>
</div>
</div>
</div>
<div className="max-w-[40rem]">
<div className="font-mono text-[0.6875rem] tracking-[0.3em] uppercase text-[#515151] mb-4">
              Sistema comercial
            </div>
<h3 className="font-display text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight text-[#FFF9F3] mb-6">
              Você não lota a agenda.
              <br/>
              Você
              <span className="italic text-[#8E8E8E]">domina</span>
              o cliente.
            </h3>
<p className="text-[1rem] font-light text-[#8E8E8E] leading-relaxed">
              Agendamento integrado, fluxo de fidelização automático, dashboard
              com seu faturamento em tempo real. Você abre o celular e sabe
              exatamente onde seu negócio está — e pra onde está indo.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#141414] py-[10rem] px-6 lg:px-[5rem] relative z-10" id="processo">
<div className="max-w-[80rem] mx-auto">
<div className="max-w-[40rem] mb-[6rem] reveal-elem visible">
<span className="font-mono text-[0.6875rem] tracking-[0.3em] uppercase text-[#8E8E8E] mb-6 block">
            03 — Método
          </span>
<h2 className="font-display text-[2.75rem] md:text-[4rem] leading-[1] tracking-tight text-[#FFF9F3] text-balance">
            Cinco passos.
            <br/>
<span className="italic text-[#8E8E8E]">Uma operação inteira.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 reveal-elem visible">
<div className="glass-dark p-8 md:p-12 rounded-[2.5rem] lg:col-span-3 min-h-[26rem] flex flex-col justify-between relative overflow-hidden group border border-[#515151]/20 hover:border-[#515151]/40 transition-colors duration-500">
<div className="absolute -top-32 -right-32 w-80 h-80 bg-[#FFF9F3]/[0.03] rounded-full blur-3xl group-hover:bg-[#FFF9F3]/[0.06] transition-all duration-700"></div>
<div className="relative z-10">
<div className="font-mono text-[0.6875rem] tracking-[0.3em] uppercase text-[#8E8E8E] mb-6">
                Passo 01
              </div>
<h3 className="font-display text-[2.25rem] md:text-[2.75rem] leading-[1.1] text-[#FFF9F3] mb-4 tracking-tight">
                Diagnóstico
              </h3>
<p className="text-[1.0625rem] font-light text-[#8E8E8E] leading-relaxed max-w-md">
                Entendemos sua operação, seus números, seus clientes e seus
                gargalos em uma reunião estratégica de 60 minutos.
              </p>
</div>
<div className="relative z-10 font-mono text-[8rem] md:text-[10rem] leading-[0.8] text-[#515151]/10 self-end -mb-6 -mr-6 group-hover:text-[#515151]/20 transition-colors duration-500">
              01
            </div>
</div>
<div className="glass-dark p-8 md:p-12 rounded-[2.5rem] lg:col-span-3 min-h-[26rem] flex flex-col justify-between relative overflow-hidden group border border-[#515151]/20 hover:border-[#515151]/40 transition-colors duration-500">
<div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#FFF9F3]/[0.03] rounded-full blur-3xl group-hover:bg-[#FFF9F3]/[0.06] transition-all duration-700"></div>
<div className="relative z-10">
<div className="font-mono text-[0.6875rem] tracking-[0.3em] uppercase text-[#8E8E8E] mb-6">
                Passo 02
              </div>
<h3 className="font-display text-[2.25rem] md:text-[2.75rem] leading-[1.1] text-[#FFF9F3] mb-4 tracking-tight">
                Plano de Ação
              </h3>
<p className="text-[1.0625rem] font-light text-[#8E8E8E] leading-relaxed max-w-md">
                Desenhamos o plano completo: posicionamento, funil de aquisição,
                jornada do cliente e métricas de sucesso.
              </p>
</div>
<div className="relative z-10 font-mono text-[8rem] md:text-[10rem] leading-[0.8] text-[#515151]/10 self-end -mb-6 -mr-6 group-hover:text-[#515151]/20 transition-colors duration-500">
              02
            </div>
</div>
<div className="glass-dark p-8 md:p-10 rounded-[2.5rem] lg:col-span-2 min-h-[24rem] flex flex-col justify-between relative overflow-hidden group border border-[#515151]/20 hover:border-[#515151]/40 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-[#FFF9F3]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="font-mono text-[0.6875rem] tracking-[0.3em] uppercase text-[#8E8E8E] mb-6">
                Passo 03
              </div>
<h3 className="font-display text-[1.75rem] md:text-[2rem] leading-[1.1] text-[#FFF9F3] mb-4 tracking-tight">
                Implementação
              </h3>
<p className="text-[1rem] font-light text-[#8E8E8E] leading-relaxed">
                Criamos seu site, configuramos o sistema, montamos as campanhas
                e ativamos as automações. Tudo pronto para rodar.
              </p>
</div>
<div className="relative z-10 font-mono text-[6rem] md:text-[8rem] leading-[0.8] text-[#515151]/10 self-end -mb-4 -mr-4 group-hover:text-[#515151]/20 transition-colors duration-500">
              03
            </div>
</div>
<div className="glass-dark p-8 md:p-10 rounded-[2.5rem] lg:col-span-2 min-h-[24rem] flex flex-col justify-between relative overflow-hidden group border border-[#515151]/20 hover:border-[#515151]/40 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FFF9F3]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="font-mono text-[0.6875rem] tracking-[0.3em] uppercase text-[#8E8E8E] mb-6">
                Passo 04
              </div>
<h3 className="font-display text-[1.75rem] md:text-[2rem] leading-[1.1] text-[#FFF9F3] mb-4 tracking-tight">
                Aceleração
              </h3>
<p className="text-[1rem] font-light text-[#8E8E8E] leading-relaxed">
                Campanhas no ar, dados entrando, otimizações semanais. Ajustamos
                o que precisa e impulsionamos o que funciona.
              </p>
</div>
<div className="relative z-10 font-mono text-[6rem] md:text-[8rem] leading-[0.8] text-[#515151]/10 self-end -mb-4 -mr-4 group-hover:text-[#515151]/20 transition-colors duration-500">
              04
            </div>
</div>
<div className="glass-dark p-8 md:p-10 rounded-[2.5rem] md:col-span-2 lg:col-span-2 min-h-[24rem] flex flex-col justify-between relative overflow-hidden group border border-[#515151]/20 hover:border-[#515151]/40 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-tl from-[#FFF9F3]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="font-mono text-[0.6875rem] tracking-[0.3em] uppercase text-[#8E8E8E] mb-6">
                Passo 05
              </div>
<h3 className="font-display text-[1.75rem] md:text-[2rem] leading-[1.1] text-[#FFF9F3] mb-4 tracking-tight">
                Impulso
              </h3>
<p className="text-[1rem] font-light text-[#8E8E8E] leading-relaxed">
                Sua barbearia com faturamento previsível, agenda consistente,
                estrutura comercial rodando sem depender de você 24h, enquanto
                você se prepara para abrir uma nova unidade.
              </p>
</div>
<div className="relative z-10 font-mono text-[6rem] md:text-[8rem] leading-[0.8] text-[#515151]/10 self-end -mb-4 -mr-4 group-hover:text-[#515151]/20 transition-colors duration-500">
              05
            </div>
</div>
</div>
</div>
</section>

<section className="bg-[#1A1A1A] py-[10rem] px-6 lg:px-[5rem] relative z-10">
<div className="max-w-[80rem] mx-auto">
<div className="max-w-[40rem] mb-[6rem] reveal-elem">
<span className="font-mono text-[0.6875rem] tracking-[0.3em] uppercase text-[#8E8E8E] mb-6 block">
            04 — Prova
          </span>
<h2 className="font-display text-[2.75rem] md:text-[4rem] leading-[1] tracking-tight text-[#FFF9F3] text-balance">
            Não acredita?
            <br/>
<span className="italic text-[#8E8E8E]">Eles também não.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#515151]/20">
<div className="glass-dark p-10 md:p-14 reveal-elem">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-full bg-[#515151]/40 flex items-center justify-center font-display text-[1rem] text-[#FFF9F3]">
                J
              </div>
<div>
<div className="text-[0.875rem] font-medium text-[#FFF9F3]">
                  João C.
                </div>
<div className="font-mono text-[0.625rem] tracking-widest uppercase text-[#8E8E8E]">
                  Miami · FL
                </div>
</div>
</div>
<p className="font-display text-[1.5rem] md:text-[1.875rem] leading-[1.25] text-[#FFF9F3] mb-8">
              "Eu tava com 8 clientes na semana. Achei que era o mercado. Era a
              minha estrutura. Hoje tô passando de 35 — e voltando."
            </p>
<div className="flex items-center gap-8 pt-8 border-t border-[#515151]/20">
<div>
<div className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-[#515151] mb-1">
                  Antes
                </div>
<div className="font-display text-[1.5rem] text-[#8E8E8E]">
                  8 / sem
                </div>
</div>
<div className="text-[#515151]">→</div>
<div>
<div className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-[#515151] mb-1">
                  Depois
                </div>
<div className="font-display text-[1.5rem] text-[#FFF9F3]">
                  35+ / sem
                </div>
</div>
</div>
</div>
<div className="glass-dark p-10 md:p-14 reveal-elem" style={{transitionDelay: '100ms'}}>
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-full bg-[#515151]/40 flex items-center justify-center font-display text-[1rem] text-[#FFF9F3]">
                M
              </div>
<div>
<div className="text-[0.875rem] font-medium text-[#FFF9F3]">
                  Marcus T.
                </div>
<div className="font-mono text-[0.625rem] tracking-widest uppercase text-[#8E8E8E]">
                  Newark · NJ
                </div>
</div>
</div>
<p className="font-display text-[1.5rem] md:text-[1.875rem] leading-[1.25] text-[#FFF9F3] mb-8">
              "Pela primeira vez em 4 anos eu sei quanto entra, quanto sai e o
              porquê. Isso vale mais que qualquer agência."
            </p>
<div className="flex items-center gap-8 pt-8 border-t border-[#515151]/20">
<div>
<div className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-[#515151] mb-1">
                  Ticket
                </div>
<div className="font-display text-[1.5rem] text-[#8E8E8E]">$42</div>
</div>
<div className="text-[#515151]">→</div>
<div>
<div className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-[#515151] mb-1">
                  Ticket
                </div>
<div className="font-display text-[1.5rem] text-[#FFF9F3]">$68</div>
</div>
</div>
</div>
</div>
<div className="mt-16 bg-[#0A0A0A] border border-[#515151]/20 rounded-[2rem] py-14 px-8 reveal-elem">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#515151]/30 text-center">
<div className="flex flex-col items-center pb-8 md:pb-0">
<div className="font-display text-[3.5rem] text-[#FFF9F3] leading-none mb-3 counter" data-suffix="+" data-target="30">
                0+
              </div>
<div className="font-mono text-[0.6875rem] tracking-[0.2em] uppercase text-[#8E8E8E]">
                Barbearias Atendidas
              </div>
</div>
<div className="flex flex-col items-center py-8 md:py-0">
<div className="font-display text-[3.5rem] text-[#FFF9F3] leading-none mb-3 counter" data-decimals="1" data-suffix="x" data-target="6.8">
                0.0x
              </div>
<div className="font-mono text-[0.6875rem] tracking-[0.2em] uppercase text-[#8E8E8E]">
                ROAS Médio
              </div>
</div>
<div className="flex flex-col items-center pt-8 md:pt-0">
<div className="font-display text-[3.5rem] text-[#FFF9F3] leading-none mb-3 counter" data-decimals="1" data-prefix="$" data-suffix="M+" data-target="1.2">
                $0.0M+
              </div>
<div className="font-mono text-[0.6875rem] tracking-[0.2em] uppercase text-[#8E8E8E]">
                Faturamento Gerado
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#141414] py-[10rem] px-6 lg:px-[5rem] relative z-10">
<div className="max-w-[80rem] mx-auto">
<div className="max-w-[40rem] mb-[6rem] reveal-elem">
<span className="font-mono text-[0.6875rem] tracking-[0.3em] uppercase text-[#8E8E8E] mb-6 block">
            05 — A virada
          </span>
<h2 className="font-display text-[2.75rem] md:text-[4rem] leading-[1] tracking-tight text-[#FFF9F3] text-balance">
            De invisível
            <br/>
            a
            <span className="italic text-[#8E8E8E]">inevitável.</span>
</h2>
<p className="text-[1.0625rem] font-light text-[#8E8E8E] leading-relaxed mt-6 max-w-lg">
            Cada resultado abaixo veio de uma barbearia real, com operações
            reais, nos Estados Unidos.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#515151]/20 reveal-elem">
<div className="glass-dark p-10 md:p-14">
<div className="flex items-center justify-between mb-10">
<div className="font-mono text-[0.625rem] tracking-[0.3em] uppercase text-[#515151]">
                Antes
              </div>
<div className="font-mono text-[0.625rem] tracking-widest text-[#515151] uppercase">
                Sem sistema
              </div>
</div>
<svg className="w-full mb-10" viewbox="0 0 400 120">
<path className="draw-path" d="M 0 20 Q 100 40 200 60 T 400 100" fill="none" stroke="#515151" strokeWidth="1.5"></path>
<path d="M 0 60 L 400 60" opacity="0.3" stroke="#515151" stroke-dasharray="2 4" strokeWidth="0.5"></path>
</svg>
<div className="font-display text-[4rem] md:text-[5rem] text-[#8E8E8E] leading-none mb-2">
              8
            </div>
<div className="text-[0.875rem] text-[#515151] mb-10">
              clientes por semana, no susto
            </div>
<ul className="space-y-4 text-[0.9375rem] font-light text-[#8E8E8E]">
<li className="flex items-start gap-3">
<span className="text-[#515151] mt-1">—</span>
                Tráfego que não converte
              </li>
<li className="flex items-start gap-3">
<span className="text-[#515151] mt-1">—</span>
                Sem ideia do faturamento real
              </li>
<li className="flex items-start gap-3">
<span className="text-[#515151] mt-1">—</span>
                Trabalho dobrado, resultado pela metade
              </li>
</ul>
</div>
<div className="glass-light p-10 md:p-14 bg-[#FFF9F3] text-[#1A1A1A]">
<div className="flex items-center justify-between mb-10">
<div className="font-mono text-[0.625rem] tracking-[0.3em] uppercase text-[#515151]">
                Depois
              </div>
<div className="font-mono text-[0.625rem] tracking-widest text-[#1A1A1A] uppercase">
                Com VS Impulso
              </div>
</div>
<svg className="w-full mb-10" viewbox="0 0 400 120">
<path className="draw-path" d="M 0 100 Q 100 80 200 50 T 400 10" fill="none" stroke="#1A1A1A" strokeWidth="1.5"></path>
<path className="draw-area" d="M 0 100 Q 100 80 200 50 T 400 10 L 400 120 L 0 120 Z" fill="#1A1A1A"></path>
</svg>
<div className="font-display text-[4rem] md:text-[5rem] text-[#1A1A1A] leading-none mb-2">
              35+
            </div>
<div className="text-[0.875rem] text-[#515151] mb-10">
              clientes recorrentes por semana
            </div>
<ul className="space-y-4 text-[0.9375rem] font-light text-[#1A1A1A]">
<li className="flex items-start gap-3">
<span className="text-[#515151] mt-1">—</span>
                Aquisição previsível e auditável
              </li>
<li className="flex items-start gap-3">
<span className="text-[#515151] mt-1">—</span>
                Dashboard com tudo em tempo real
              </li>
<li className="flex items-start gap-3">
<span className="text-[#515151] mt-1">—</span>
                Crescimento que você consegue projetar
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-[#1A1A1A] py-[10rem] px-6 lg:px-[5rem] relative z-10">
<div className="max-w-[64rem] mx-auto reveal-elem">
<div className="max-w-[40rem] mb-[5rem]">
<span className="font-mono text-[0.6875rem] tracking-[0.3em] uppercase text-[#8E8E8E] mb-6 block">
            06 — O custo do silêncio
          </span>
<h2 className="font-display text-[2.75rem] md:text-[4rem] leading-[1] tracking-tight text-[#FFF9F3] text-balance">
            Cada mês parado
            <br/>
            tem um
            <span className="italic text-[#8E8E8E]">preço.</span>
</h2>
<p className="text-[1.0625rem] font-light text-[#8E8E8E] leading-relaxed mt-6">
            Não é só o dinheiro que você não fatura. É o cliente que prova outra
            barbearia. O fim de semana que você passa no negativo. A energia que
            você queima resolvendo o que não devia ser seu problema.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#515151]/20">
<div className="glass-dark p-10">
<div className="font-mono text-[0.625rem] tracking-[0.3em] uppercase text-[#515151] mb-8">
              Se você não fizer nada
            </div>
<div className="space-y-8">
<div>
<div className="font-display text-[2rem] text-[#FFF9F3] leading-none mb-2">
                  1.000 leads
                </div>
<div className="text-[0.875rem] text-[#8E8E8E] font-light">
                  só pra manter 8 clientes fiéis
                </div>
</div>
<div className="h-px bg-[#515151]/20"></div>
<div>
<div className="font-display text-[2rem] text-[#FFF9F3] leading-none mb-2">
                  $ no ralo
                </div>
<div className="text-[0.875rem] text-[#8E8E8E] font-light">
                  em anúncio que não converte
                </div>
</div>
<div className="h-px bg-[#515151]/20"></div>
<div>
<div className="font-display text-[2rem] text-[#FFF9F3] leading-none mb-2">
                  Tempo perdido
                </div>
<div className="text-[0.875rem] text-[#8E8E8E] font-light">
                  que você não recupera mais
                </div>
</div>
</div>
</div>
<div className="glass-light bg-[#FFF9F3] text-[#1A1A1A] p-10">
<div className="font-mono text-[0.625rem] tracking-[0.3em] uppercase text-[#515151] mb-8">
              Se agir esta semana
            </div>
<div className="space-y-8">
<div>
<div className="font-display text-[2rem] text-[#1A1A1A] leading-none mb-2">
                  300 leads
                </div>
<div className="text-[0.875rem] text-[#515151] font-light">
                  virando 35+ agendamentos confirmados
                </div>
</div>
<div className="h-px bg-[#515151]/20"></div>
<div>
<div className="font-display text-[2rem] text-[#1A1A1A] leading-none mb-2">
                  ROI claro
                </div>
<div className="text-[0.875rem] text-[#515151] font-light">
                  cada dólar com endereço e justificativa
                </div>
</div>
<div className="h-px bg-[#515151]/20"></div>
<div>
<div className="font-display text-[2rem] text-[#1A1A1A] leading-none mb-2">
                  Sua cabeça
                </div>
<div className="text-[0.875rem] text-[#515151] font-light">
                  livre pra fazer o que você faz de melhor
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#141414] py-[10rem] px-6 lg:px-[5rem] relative z-10 overflow-hidden" id="cta">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-[#FFF9F3]/[0.02] blur-3xl"></div>
</div>
<div className="max-w-[56rem] mx-auto text-center reveal-elem relative z-10">
<span className="font-mono text-[0.6875rem] tracking-[0.3em] uppercase text-[#8E8E8E] mb-8 block">
          07 — A decisão
        </span>
<h2 className="font-display text-[3rem] md:text-[5.5rem] leading-[0.95] tracking-tight text-[#FFF9F3] mb-10 text-balance">
          A sua próxima
          <br/>
          agenda lotada
          <br/>
          começa
          <span className="italic text-[#8E8E8E]">aqui.</span>
</h2>
<p className="text-[1.0625rem] md:text-[1.125rem] font-light text-[#8E8E8E] mb-14 max-w-xl mx-auto leading-relaxed">
          Trinta minutos. Sem script, sem pressão. A gente olha pra sua
          barbearia, mostra exatamente o que está travando — e você decide se
          faz sentido seguir junto.
        </p>
<form className="w-full max-w-2xl mx-auto flex flex-col gap-4 text-left mt-10 relative z-20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full bg-[#1A1A1A] border border-[#515151]/40 rounded-xl px-5 py-4 text-[#FFF9F3] placeholder-[#8E8E8E] focus:outline-none focus:border-[#FFF9F3] transition-colors" placeholder="Nome" required="" type="text"/>
<input className="w-full bg-[#1A1A1A] border border-[#515151]/40 rounded-xl px-5 py-4 text-[#FFF9F3] placeholder-[#8E8E8E] focus:outline-none focus:border-[#FFF9F3] transition-colors" placeholder="Telefone" required="" type="tel"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full bg-[#1A1A1A] border border-[#515151]/40 rounded-xl px-5 py-4 text-[#FFF9F3] placeholder-[#8E8E8E] focus:outline-none focus:border-[#FFF9F3] transition-colors" placeholder="E-mail" required="" type="email"/>
<input className="w-full bg-[#1A1A1A] border border-[#515151]/40 rounded-xl px-5 py-4 text-[#FFF9F3] placeholder-[#8E8E8E] focus:outline-none focus:border-[#FFF9F3] transition-colors" placeholder="Nome da Barbearia" required="" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full bg-[#1A1A1A] border border-[#515151]/40 rounded-xl px-5 py-4 text-[#FFF9F3] placeholder-[#8E8E8E] focus:outline-none focus:border-[#FFF9F3] transition-colors" placeholder="Cidade/Estado" required="" type="text"/>
<input className="w-full bg-[#1A1A1A] border border-[#515151]/40 rounded-xl px-5 py-4 text-[#FFF9F3] placeholder-[#8E8E8E] focus:outline-none focus:border-[#FFF9F3] transition-colors" placeholder="Quantas cadeiras possui? (Opcional)" type="text"/>
</div>
<input className="w-full bg-[#1A1A1A] border border-[#515151]/40 rounded-xl px-5 py-4 text-[#FFF9F3] placeholder-[#8E8E8E] focus:outline-none focus:border-[#FFF9F3] transition-colors" placeholder="Qual o seu maior desafio? (Opcional)" type="text"/>
<button className="mt-4 w-full bg-[#FFF9F3] text-[#1A1A1A] text-[1.0625rem] font-medium px-10 py-5 rounded-xl hover:bg-[#8E8E8E] hover:text-[#FFF9F3] transition-all duration-300" type="submit">
            Solicitar Diagnóstico
          </button>
</form>
</div>
</section>

<footer className="bg-[#1A1A1A] py-12 border-t border-[#515151]/20 relative z-10">
<div className="max-w-[80rem] mx-auto px-6 lg:px-[5rem] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<a className="flex items-center block" href="#">
<img alt="Impulso Barber Logo" className="h-8 md:h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd0146a9-84ab-4427-bd5b-49694a6dcfce_320w.png"/>
</a>
<div className="text-[0.75rem] font-light text-[#515151] tracking-tight">
          © 2024 VS Impulso · Estrutura comercial para barbearias brasileiras
          nos EUA
        </div>
</div>
</footer>




    </>
  );
}
