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



      // Initialize Lucide Icons
      lucide.createIcons({
          strokeWidth: 1.5
      });

      // Sticky Navbar & Mobile Bottom CTA Logic
      const navbar = document.getElementById('navbar');
      const mobileCta = document.getElementById('mobile-cta');

      window.addEventListener('scroll', () => {
          if (window.scrollY > 150) {
              navbar.classList.remove('-translate-y-full');
              mobileCta.classList.remove('translate-y-full');
          } else {
              navbar.classList.add('-translate-y-full');
              mobileCta.classList.add('translate-y-full');
          }
      });

      // Intersection Observer for Animations (Fade Up)
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.15
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  // Remove starting classes that hide/translate the element
                  entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-x-8', 'scale-95');
                  entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.observe-me').forEach(el => {
          observer.observe(el);
      });

      // Number Count Up Animation
      const countObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const target = parseInt(entry.target.getAttribute('data-target'));
                  const duration = 2000; // 2 seconds
                  const steps = 60;
                  const stepTime = Math.abs(Math.floor(duration / steps));
                  let current = 0;

                  const timer = setInterval(() => {
                      current += Math.ceil(target / steps);
                      if (current >= target) {
                          entry.target.innerText = target + (target > 100 ? '+' : '');
                          clearInterval(timer);
                      } else {
                          entry.target.innerText = current;
                      }
                  }, stepTime);

                  observer.unobserve(entry.target);
              }
          });
      }, { threshold: 0.5 });

      document.querySelectorAll('.count-up').forEach(el => {
          countObserver.observe(el);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 -translate-y-full glass-dark" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="text-white font-['Archivo_Black'] tracking-tight text-xl">
          SANDRA
          <span className="text-[#18A999]">MAIS</span>
          VIAGENS
        </div>
<div className="hidden md:flex items-center gap-6">
<div className="flex items-center gap-2 text-white/80 text-sm font-medium">
<i className="w-4 h-4 text-[#18A999]" data-lucide="shield-check"></i>
            Compra Segura
          </div>
<div className="flex items-center gap-2 text-white/80 text-sm font-medium">
<i className="w-4 h-4 text-[#18A999]" data-lucide="award"></i>
            7 dias de garantia
          </div>
<a className="bg-[#FF8C32] hover:bg-[#FF8C32]/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(255,140,50,0.3)] hover:scale-105 hover:shadow-[0_0_25px_rgba(255,140,50,0.5)]" href="#offer">
            Garantir Vaga
          </a>
</div>
</div>
</header>

<section className="relative min-h-[85vh] lg:h-screen flex items-center pt-24 pb-16 lg:py-0 overflow-hidden bg-[#050D1A]">

<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Paris" className="w-full h-full object-cover object-center ken-burns opacity-60" src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&amp;w=2920&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0B203C] via-[#0B203C]/90 to-transparent"></div>
<div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050D1A] via-transparent to-transparent"></div>

<div className="absolute z-20 w-full h-full pointer-events-none opacity-20">
<svg className="absolute top-1/4 left-1/4 w-full" fill="none" viewbox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
<path className="animate-pulse" d="M0,100 Q250,200 500,100 T1000,100" stroke="#18A999" stroke-dasharray="8 8" strokeWidth="2"></path>
</svg>
<i className="absolute top-1/4 left-1/2 text-white w-6 h-6 -rotate-12" data-lucide="plane"></i>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-30 w-full">
<div className="max-w-3xl lg:w-[60%] flex flex-col items-start gap-8 observe-me opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<div className="inline-flex items-center gap-2 glass-dark px-4 py-2 rounded-full border-[#18A999]/30 border text-[#18A999] text-xs font-semibold tracking-widest uppercase">
<i className="w-4 h-4" data-lucide="plane-takeoff"></i>
            Imersão Europa com Milhas
          </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-['Archivo_Black'] text-white leading-[0.95] tracking-tight">
            O passo a passo pra você emitir passagem pra Europa pagando uma
            fração do valor.
          </h1>
<p className="text-lg md:text-xl text-white/80 font-normal leading-relaxed max-w-2xl">
            O método completo da Sandra Spalla pra você decifrar de uma vez por
            todas como funcionam os programas de milhas, achar disponibilidade e
            emitir sozinha pra você e sua família.
          </p>
<div className="flex flex-wrap gap-4 text-white text-sm font-medium">
<div className="flex items-center gap-2 glass-dark px-4 py-2 rounded-lg">
<i className="w-5 h-5 text-[#18A999]" data-lucide="play-circle"></i>
              26 aulas práticas
            </div>
<div className="flex items-center gap-2 glass-dark px-4 py-2 rounded-lg">
<i className="w-5 h-5 text-[#18A999]" data-lucide="map"></i>
              4 etapas
            </div>
<div className="flex items-center gap-2 glass-dark px-4 py-2 rounded-lg">
<i className="w-5 h-5 text-[#18A999]" data-lucide="clock"></i>
              Acesso por 1 ano
            </div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-6 mt-4 w-full sm:w-auto">
<a className="group relative w-full sm:w-auto bg-[#FF8C32] text-white px-8 py-5 rounded-full text-lg font-semibold tracking-tight inline-flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_30px_rgba(255,140,50,0.4)] transition-transform hover:scale-105" href="#offer">
<span className="relative z-10">QUERO MINHA VAGA</span>
<i className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
</a>
<div className="flex flex-col text-white/60 text-sm">
<span>Acesso imediato · 7 dias de garantia</span>
<span>12x R$ 20,25 ou R$ 197 à vista</span>
</div>
</div>
</div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
<span className="text-xs uppercase tracking-widest font-medium">
          Como funciona
        </span>
<i className="w-4 h-4" data-lucide="arrow-down"></i>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#FFF9F6] relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-7 flex flex-col gap-8 observe-me opacity-0 translate-y-8 transition-all duration-1000 delay-100">
<span className="text-[#18A999] text-xs font-semibold tracking-widest uppercase">
            Vamos conversar
          </span>
<h2 className="text-4xl lg:text-5xl font-['Archivo_Black'] text-[#0B203C] tracking-tight leading-tight">
            Se você tá nessa situação,
            <br/>
            fica comigo até o final.
          </h2>
<p className="text-lg text-[#0B203C]/70 max-w-xl">
            Acredito que você tá aqui porque alguma dessas situações soa
            familiar:
          </p>
<div className="flex flex-col gap-5 mt-4">
<div className="flex gap-4 items-start group">
<div className="mt-1 bg-red-100 p-1 rounded-full text-red-500 shrink-0 group-hover:scale-110 transition-transform">
<i className="w-4 h-4" data-lucide="x"></i>
</div>
<p className="text-lg text-[#0B203C]/80">
                Você tem milhas acumuladas há anos — mas elas continuam paradas
                porque nunca dá certo emitir.
              </p>
</div>
<div className="flex gap-4 items-start group">
<div className="mt-1 bg-red-100 p-1 rounded-full text-red-500 shrink-0 group-hover:scale-110 transition-transform">
<i className="w-4 h-4" data-lucide="x"></i>
</div>
<p className="text-lg text-[#0B203C]/80">
                Toda vez que tenta comprar passagem pra Europa, o preço vem
                absurdo. No dinheiro ou em milhas.
              </p>
</div>
<div className="flex gap-4 items-start group">
<div className="mt-1 bg-red-100 p-1 rounded-full text-red-500 shrink-0 group-hover:scale-110 transition-transform">
<i className="w-4 h-4" data-lucide="x"></i>
</div>
<p className="text-lg text-[#0B203C]/80">
                Quando aparece disponibilidade, é só pra uma pessoa, nunca pra
                família.
              </p>
</div>
<div className="flex gap-4 items-start group">
<div className="mt-1 bg-red-100 p-1 rounded-full text-red-500 shrink-0 group-hover:scale-110 transition-transform">
<i className="w-4 h-4" data-lucide="x"></i>
</div>
<p className="text-lg text-[#0B203C]/80">
                Smiles, TAP, Latam Pass, Azul, Iberia — tantos programas e
                nenhum parece o certo.
              </p>
</div>
</div>
<div className="mt-8 border-l-4 border-[#FF8C32] pl-6 py-2">
<p className="text-2xl font-['Archivo_Black'] text-[#0B203C] tracking-tight italic">
              Não é falta de jeito seu.
              <br/>
              É falta do método certo.
            </p>
</div>
</div>
<div className="lg:col-span-5 relative h-[500px] hidden md:block observe-me opacity-0 translate-x-8 transition-all duration-1000 delay-300">

<div className="absolute top-10 right-10 w-64 glass-light p-6 rounded-2xl shadow-xl rotate-3 hover:rotate-0 transition-all duration-500 z-20">
<div className="flex justify-between items-center mb-4 border-b border-[#0B203C]/10 pb-4">
<span className="text-xs font-semibold text-[#0B203C]/50">
                SALDO TOTAL
              </span>
<i className="w-4 h-4 text-[#18A999]" data-lucide="plane"></i>
</div>
<div className="text-3xl font-['Archivo_Black'] text-[#0B203C] tracking-tight">
              184.500
            </div>
<div className="text-xs text-red-500 mt-2 font-medium flex items-center gap-1">
<i className="w-3 h-3" data-lucide="alert-circle"></i>
              Expirando em breve
            </div>
</div>
<div className="absolute bottom-20 left-0 w-72 glass-light p-6 rounded-2xl shadow-xl -rotate-6 hover:rotate-0 transition-all duration-500 z-10">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-[#0B203C]/5 flex items-center justify-center">
<i className="w-4 h-4 text-[#0B203C]/50" data-lucide="search"></i>
</div>
<div className="text-sm font-semibold text-[#0B203C]">GRU → CDG</div>
</div>
<div className="space-y-3">
<div className="h-2 w-full bg-[#0B203C]/5 rounded"></div>
<div className="h-2 w-2/3 bg-[#0B203C]/5 rounded"></div>
</div>
<div className="mt-4 text-center py-2 bg-red-50 text-red-600 text-xs font-semibold rounded uppercase tracking-wider">
              Sem disponibilidade
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white relative">

<div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{backgroundImage: 'radial-gradient(#0B203C 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 observe-me opacity-0 translate-y-8 transition-all duration-700">
<span className="inline-flex items-center gap-2 text-[#18A999] text-xs font-semibold tracking-widest uppercase mb-4">
<i className="w-4 h-4" data-lucide="check-circle-2"></i>
            O que a imersão faz por você
          </span>
<h2 className="text-4xl lg:text-5xl font-['Archivo_Black'] text-[#0B203C] tracking-tight">
            A Imersão Europa com Milhas existe pra você sair daí.
          </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-light p-8 rounded-3xl group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-[#0B203C]/5 hover:border-[#18A999]/30 observe-me opacity-0 translate-y-8">
<div className="w-14 h-14 bg-[#FFF9F6] rounded-2xl flex items-center justify-center mb-6 text-[#0B203C] group-hover:text-[#18A999] transition-colors group-hover:scale-110 duration-300">
<i className="w-7 h-7" data-lucide="plane-landing"></i>
</div>
<h3 className="text-xl font-semibold text-[#0B203C] mb-3 tracking-tight">
              Saber qual programa usar
            </h3>
<p className="text-lg text-[#0B203C]/70 leading-relaxed">
              Pra cada destino da Europa — Azul, Smiles, Latam Pass, Iberia ou
              TAP. Sem chutar.
            </p>
</div>
<div className="glass-light p-8 rounded-3xl group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-[#0B203C]/5 hover:border-[#18A999]/30 observe-me opacity-0 translate-y-8 delay-100">
<div className="w-14 h-14 bg-[#FFF9F6] rounded-2xl flex items-center justify-center mb-6 text-[#0B203C] group-hover:text-[#18A999] transition-colors group-hover:scale-110 duration-300">
<i className="w-7 h-7" data-lucide="map-pin"></i>
</div>
<h3 className="text-xl font-semibold text-[#0B203C] mb-3 tracking-tight">
              Dominar as portas de entrada
            </h3>
<p className="text-lg text-[#0B203C]/70 leading-relaxed">
              Pra você pagar até 70% menos em milhas chegando por Lisboa ou
              Madrid e conectando.
            </p>
</div>
<div className="glass-light p-8 rounded-3xl group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-[#0B203C]/5 hover:border-[#18A999]/30 observe-me opacity-0 translate-y-8 delay-200">
<div className="w-14 h-14 bg-[#FFF9F6] rounded-2xl flex items-center justify-center mb-6 text-[#0B203C] group-hover:text-[#18A999] transition-colors group-hover:scale-110 duration-300">
<i className="w-7 h-7" data-lucide="play"></i>
</div>
<h3 className="text-xl font-semibold text-[#0B203C] mb-3 tracking-tight">
              Ver a Sandra emitindo
            </h3>
<p className="text-lg text-[#0B203C]/70 leading-relaxed">
              Aulas práticas com emissão ao vivo em cada um dos 5 programas.
              Você assiste e replica.
            </p>
</div>
<div className="glass-light p-8 rounded-3xl group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-[#0B203C]/5 hover:border-[#18A999]/30 observe-me opacity-0 translate-y-8 delay-300">
<div className="w-14 h-14 bg-[#FFF9F6] rounded-2xl flex items-center justify-center mb-6 text-[#0B203C] group-hover:text-[#18A999] transition-colors group-hover:scale-110 duration-300">
<i className="w-7 h-7" data-lucide="list-checks"></i>
</div>
<h3 className="text-xl font-semibold text-[#0B203C] mb-3 tracking-tight">
              Aplicar os 4 passos
            </h3>
<p className="text-lg text-[#0B203C]/70 leading-relaxed">
              A sequência que faz toda emissão funcionar — sem erro, sem dúvida,
              sem voltar atrás.
            </p>
</div>
<div className="glass-light p-8 rounded-3xl group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-[#0B203C]/5 hover:border-[#18A999]/30 observe-me opacity-0 translate-y-8 delay-400">
<div className="w-14 h-14 bg-[#FFF9F6] rounded-2xl flex items-center justify-center mb-6 text-[#0B203C] group-hover:text-[#18A999] transition-colors group-hover:scale-110 duration-300">
<i className="w-7 h-7" data-lucide="calculator"></i>
</div>
<h3 className="text-xl font-semibold text-[#0B203C] mb-3 tracking-tight">
              Saber quando comprar pontos
            </h3>
<p className="text-lg text-[#0B203C]/70 leading-relaxed">
              Aulas dedicadas a quando vale a pena (e quando é furada). Com
              cálculo, não com chute.
            </p>
</div>
<div className="glass-light p-8 rounded-3xl group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-[#0B203C]/5 hover:border-[#18A999]/30 observe-me opacity-0 translate-y-8 delay-500">
<div className="w-14 h-14 bg-[#FFF9F6] rounded-2xl flex items-center justify-center mb-6 text-[#0B203C] group-hover:text-[#18A999] transition-colors group-hover:scale-110 duration-300">
<i className="w-7 h-7" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold text-[#0B203C] mb-3 tracking-tight">
              Emitir pra família inteira
            </h3>
<p className="text-lg text-[#0B203C]/70 leading-relaxed">
              2, 3, 4 pessoas no mesmo voo. O problema que a Sandra viveu e que
              motivou a Imersão.
            </p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 text-[#0B203C] border-2 border-[#0B203C]/10 hover:border-[#0B203C] px-8 py-4 rounded-full text-lg font-medium transition-all hover:bg-[#0B203C] hover:text-white group" href="#offer">
            QUERO ENTRAR PRA IMERSÃO
            <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#050D1A] relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16 observe-me opacity-0 translate-y-8 transition-all duration-700">
<span className="inline-flex items-center gap-2 text-[#18A999] text-xs font-semibold tracking-widest uppercase mb-4">
            Provas Reais
          </span>
<h2 className="text-4xl lg:text-5xl font-['Archivo_Black'] text-white tracking-tight">
            Quem aprendeu o método, viajou.
          </h2>
</div>

<div className="grid lg:grid-cols-3 gap-8 mb-20">
<div className="glass-dark rounded-3xl overflow-hidden group observe-me opacity-0 translate-y-8 transition-all duration-700">
<div className="h-48 bg-[#0B203C] relative overflow-hidden">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] to-transparent"></div>
<div className="absolute bottom-4 left-6">
<div className="text-[#18A999] text-xs font-semibold tracking-widest uppercase mb-1">
                  Holanda
                </div>
<div className="text-white font-['Archivo_Black'] text-xl tracking-tight">
                  Conceição
                </div>
</div>
</div>
<div className="p-8">
<p className="text-lg text-white/80 italic mb-6 leading-relaxed">
                "Ia pagar R$ 16.000 em duas passagens. Paguei R$ 3.000."
              </p>
<div className="pt-6 border-t border-white/10">
<div className="text-3xl font-['Archivo_Black'] text-[#18A999] tracking-tight">
                  R$ 13.000
                </div>
<div className="text-sm text-white/50 mt-1 uppercase tracking-wider font-medium">
                  Economizados
                </div>
</div>
</div>
</div>
<div className="glass-dark rounded-3xl overflow-hidden group observe-me opacity-0 translate-y-8 transition-all duration-700 delay-100">
<div className="h-48 bg-[#0B203C] relative overflow-hidden">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] to-transparent"></div>
<div className="absolute bottom-4 left-6">
<div className="text-[#18A999] text-xs font-semibold tracking-widest uppercase mb-1">
                  Toscana
                </div>
<div className="text-white font-['Archivo_Black'] text-xl tracking-tight">
                  Leila
                </div>
</div>
</div>
<div className="p-8">
<p className="text-lg text-white/80 italic mb-6 leading-relaxed">
                "Emiti sozinha. Vou ver minha mãe na Itália — pagando só a taxa
                de embarque."
              </p>
<div className="pt-6 border-t border-white/10">
<div className="text-3xl font-['Archivo_Black'] text-[#18A999] tracking-tight">
                  R$ 0
                </div>
<div className="text-sm text-white/50 mt-1 uppercase tracking-wider font-medium">
                  Em Milhas
                </div>
</div>
</div>
</div>
<div className="glass-dark rounded-3xl overflow-hidden group observe-me opacity-0 translate-y-8 transition-all duration-700 delay-200">
<div className="h-48 bg-[#0B203C] relative overflow-hidden">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] to-transparent"></div>
<div className="absolute bottom-4 left-6">
<div className="text-[#18A999] text-xs font-semibold tracking-widest uppercase mb-1">
                  Lisboa
                </div>
<div className="text-white font-['Archivo_Black'] text-xl tracking-tight">
                  Talita
                </div>
</div>
</div>
<div className="p-8">
<p className="text-lg text-white/80 italic mb-6 leading-relaxed">
                "Investi na Imersão em vez da passagem. Saí ganhando."
              </p>
<div className="pt-6 border-t border-white/10">
<div className="text-3xl font-['Archivo_Black'] text-[#18A999] tracking-tight">
                  R$ 2.800
                </div>
<div className="text-sm text-white/50 mt-1 uppercase tracking-wider font-medium">
                  De economia
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#FFF9F6]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 observe-me opacity-0 translate-y-8 transition-all duration-700">
<span className="inline-flex items-center gap-2 text-[#0B203C]/50 border border-[#0B203C]/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
            Pra quem é
          </span>
<h2 className="text-4xl lg:text-5xl font-['Archivo_Black'] text-[#0B203C] tracking-tight">
            Essa Imersão é pra você que...
          </h2>
</div>
<div className="grid lg:grid-cols-3 gap-8">
<div className="bg-white/60 backdrop-blur-sm border border-[#0B203C]/5 p-10 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 shadow-sm relative overflow-hidden group observe-me opacity-0 translate-y-8">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-200 to-rose-400"></div>
<div className="text-5xl mb-8 group-hover:scale-110 transition-transform origin-left">
              👨‍👩‍👧
            </div>
<h3 className="text-2xl font-['Archivo_Black'] text-[#0B203C] tracking-tight mb-4">
              Quer levar marido, filhos ou netos.
            </h3>
<p className="text-lg text-[#0B203C]/70 leading-relaxed">
              A viagem que você sonha não é sozinha — é com quem você ama. Aqui
              você aprende a emitir pra família inteira sem cair no erro
              clássico de quem acumula no programa errado.
            </p>
</div>
<div className="bg-white/60 backdrop-blur-sm border border-[#0B203C]/5 p-10 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 shadow-sm relative overflow-hidden group observe-me opacity-0 translate-y-8 delay-100">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-200 to-amber-400"></div>
<div className="text-5xl mb-8 group-hover:scale-110 transition-transform origin-left">
              🫂
            </div>
<h3 className="text-2xl font-['Archivo_Black'] text-[#0B203C] tracking-tight mb-4">
              Quer visitar alguém que mora longe.
            </h3>
<p className="text-lg text-[#0B203C]/70 leading-relaxed">
              A filha em intercâmbio. A mãe na Itália. Aqui você aprende a fazer
              essa viagem virar realidade — não "ano que vem" de novo.
            </p>
</div>
<div className="bg-white/60 backdrop-blur-sm border border-[#0B203C]/5 p-10 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 shadow-sm relative overflow-hidden group observe-me opacity-0 translate-y-8 delay-200">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-200 to-[#18A999]"></div>
<div className="text-5xl mb-8 group-hover:scale-110 transition-transform origin-left">
              💺
            </div>
<h3 className="text-2xl font-['Archivo_Black'] text-[#0B203C] tracking-tight mb-4">
              Sonha em viajar de executiva.
            </h3>
<p className="text-lg text-[#0B203C]/70 leading-relaxed">
              Quer chegar na Europa descansada. O que você ainda não descobriu é
              que com a estratégia certa de milhas, é totalmente possível —
              mesmo com saldo menor.
            </p>
</div>
</div>
<div className="mt-16 text-center observe-me opacity-0 translate-y-4 transition-all duration-700 delay-300">
<p className="text-xl font-medium text-[#0B203C] mb-8">
            Reconheceu? Então essa Imersão foi feita pra você.
          </p>
<a className="inline-flex items-center justify-center gap-3 bg-[#FF8C32] text-white px-10 py-5 rounded-full text-lg font-semibold tracking-tight shadow-[0_0_20px_rgba(255,140,50,0.3)] hover:scale-105 transition-all" href="#offer">
            QUERO MINHA VAGA
            <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white relative overflow-hidden">

<svg className="absolute top-20 right-0 w-[800px] opacity-5 pointer-events-none" fill="none" viewbox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
<path d="M0,300 Q400,0 800,200" stroke="#0B203C" stroke-dasharray="12 12" strokeWidth="4"></path>
</svg>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-20 observe-me opacity-0 translate-y-8 transition-all duration-700">
<span className="inline-flex items-center gap-2 text-[#18A999] text-xs font-semibold tracking-widest uppercase mb-4">
            O Currículo Completo
          </span>
<h2 className="text-4xl lg:text-6xl font-['Archivo_Black'] text-[#0B203C] tracking-tight leading-[1.1] mb-6">
            26 aulas. 4 etapas.
            <br/>
            Do entender ao emitir.
          </h2>
<p className="text-lg text-[#0B203C]/70 max-w-2xl mx-auto">
            Tudo organizado pra você sair do "tenho milhas mas não sei usar" pra
            "emiti sozinha". Em aulas curtas e diretas.
          </p>
</div>

<div className="relative">

<div className="absolute left-[27px] top-8 bottom-8 w-[2px] border-l-2 border-dashed border-[#18A999]/30"></div>
<div className="space-y-12">

<div className="relative flex gap-8 group observe-me opacity-0 translate-y-8 transition-all duration-700">
<div className="w-14 h-14 rounded-full bg-[#FFF9F6] border-2 border-[#18A999] flex items-center justify-center shrink-0 z-10 text-[#0B203C] font-['Archivo_Black'] text-xl group-hover:bg-[#18A999] group-hover:text-white transition-colors">
                01
              </div>
<div className="pt-2">
<div className="flex items-center gap-4 mb-2">
<h3 className="text-2xl font-['Archivo_Black'] text-[#0B203C] tracking-tight">
                    Fundamentos
                  </h3>
<span className="bg-[#0B203C]/5 text-[#0B203C] text-xs font-semibold px-3 py-1 rounded-full">
                    7 aulas
                  </span>
</div>
<p className="text-lg text-[#0B203C]/70 leading-relaxed max-w-2xl">
                  Os 3 pilares de uma boa emissão. Como saber se uma passagem
                  com milhas tá realmente valendo a pena. Tabelas de
                  precificação, parcerias e tarifas. A base que ninguém te
                  explicou.
                </p>
</div>
</div>

<div className="relative flex gap-8 group observe-me opacity-0 translate-y-8 transition-all duration-700 delay-100">
<div className="w-14 h-14 rounded-full bg-[#FFF9F6] border-2 border-[#18A999] flex items-center justify-center shrink-0 z-10 text-[#0B203C] font-['Archivo_Black'] text-xl group-hover:bg-[#18A999] group-hover:text-white transition-colors">
                02
              </div>
<div className="pt-2">
<div className="flex items-center gap-4 mb-2 flex-wrap">
<h3 className="text-2xl font-['Archivo_Black'] text-[#0B203C] tracking-tight">
                    Os 5 Programas de Fidelidade
                  </h3>
<span className="bg-[#0B203C]/5 text-[#0B203C] text-xs font-semibold px-3 py-1 rounded-full">
                    5 aulas
                  </span>
</div>
<div className="flex gap-2 text-xs font-semibold text-[#18A999] uppercase tracking-wider mb-3">
<span>Azul</span>
                  ·
                  <span>Smiles</span>
                  ·
                  <span>Latam Pass</span>
                  ·
                  <span>Iberia</span>
                  ·
                  <span>TAP</span>
</div>
<p className="text-lg text-[#0B203C]/70 leading-relaxed max-w-2xl">
                  Cada programa com aula dedicada: como funciona, tabela de
                  preços, parcerias, regras e em qual situação cada um é a
                  melhor escolha.
                </p>
</div>
</div>

<div className="relative flex gap-8 group observe-me opacity-0 translate-y-8 transition-all duration-700 delay-200">
<div className="w-14 h-14 rounded-full bg-[#FFF9F6] border-2 border-[#18A999] flex items-center justify-center shrink-0 z-10 text-[#0B203C] font-['Archivo_Black'] text-xl group-hover:bg-[#18A999] group-hover:text-white transition-colors">
                03
              </div>
<div className="pt-2">
<div className="flex items-center gap-4 mb-2">
<h3 className="text-2xl font-['Archivo_Black'] text-[#0B203C] tracking-tight">
                    A Rota pra Europa
                  </h3>
<span className="bg-[#0B203C]/5 text-[#0B203C] text-xs font-semibold px-3 py-1 rounded-full">
                    6 aulas
                  </span>
</div>
<p className="text-lg text-[#0B203C]/70 leading-relaxed max-w-2xl">
                  Hubs e portas de entrada da Europa. Portas de saída. Os 4
                  passos pra uma boa emissão e as melhores emissões por programa
                  e porta de entrada.
                </p>
</div>
</div>

<div className="relative flex gap-8 group observe-me opacity-0 translate-y-8 transition-all duration-700 delay-300">
<div className="w-14 h-14 rounded-full bg-[#18A999] border-2 border-[#18A999] flex items-center justify-center shrink-0 z-10 text-white font-['Archivo_Black'] text-xl shadow-[0_0_15px_rgba(24,169,153,0.5)]">
                04
              </div>
<div className="pt-2">
<div className="flex items-center gap-4 mb-2 flex-wrap">
<h3 className="text-2xl font-['Archivo_Black'] text-[#0B203C] tracking-tight">
                    Emissão na Prática
                  </h3>
<span className="bg-[#18A999]/10 text-[#18A999] text-xs font-semibold px-3 py-1 rounded-full">
                    8 aulas práticas
                  </span>
</div>
<p className="text-lg text-[#0B203C]/70 leading-relaxed max-w-2xl">
                  A Sandra emitindo passagem AO VIVO em cada um dos 5 programas.
                  Aula dedicada à ferramenta Seats Aero. Tudo clique a clique,
                  pra você replicar em casa.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#050D1A] text-white">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 observe-me opacity-0 translate-y-8 transition-all duration-700">
<span className="inline-flex items-center gap-2 text-[#18A999] text-xs font-semibold tracking-widest uppercase mb-4">
            Por que funciona
          </span>
<h2 className="text-4xl lg:text-5xl font-['Archivo_Black'] tracking-tight max-w-2xl mx-auto">
            Por que essa Imersão é diferente do que você já tentou.
          </h2>
</div>

<div className="hidden lg:grid grid-cols-4 gap-4 items-end mb-16">

<div className="pb-6 px-4"></div>
<div className="pb-6 px-4 text-center">
<div className="text-white/50 text-sm font-semibold uppercase tracking-wider">
              Outros Cursos
            </div>
</div>
<div className="pb-6 px-4 text-center">
<div className="text-white/50 text-sm font-semibold uppercase tracking-wider">
              Consultoria
            </div>
</div>
<div className="bg-[#0B203C] rounded-t-2xl border-t border-x border-[#FF8C32]/30 px-6 pt-6 pb-4 text-center relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF8C32] text-[#050D1A] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Recomendado
            </div>
<div className="text-[#FF8C32] text-sm font-bold uppercase tracking-wider mb-1">
              A Imersão
            </div>
<div className="font-['Archivo_Black'] text-xl tracking-tight">
              Europa com Milhas
            </div>
</div>

<div className="py-5 px-4 border-t border-white/5 font-medium text-white/80">
            Foco Principal
          </div>
<div className="py-5 px-4 border-t border-white/5 text-center text-white/60">
            Acúmulo geral
          </div>
<div className="py-5 px-4 border-t border-white/5 text-center text-white/60">
            Eles emitem por você
          </div>
<div className="bg-[#0B203C] border-x border-[#FF8C32]/30 py-5 px-6 text-center font-semibold text-[#18A999]">
            Você emite, sozinha, pra Europa
          </div>

<div className="py-5 px-4 border-t border-white/5 font-medium text-white/80">
            Aulas práticas ao vivo
          </div>
<div className="py-5 px-4 border-t border-white/5 text-center flex justify-center">
<i className="w-5 h-5 text-red-400/50" data-lucide="x"></i>
</div>
<div className="py-5 px-4 border-t border-white/5 text-center flex justify-center">
<i className="w-5 h-5 text-red-400/50" data-lucide="x"></i>
</div>
<div className="bg-[#0B203C] border-x border-[#FF8C32]/30 py-5 px-6 text-center flex items-center justify-center gap-2 text-white">
<i className="w-5 h-5 text-[#18A999]" data-lucide="check"></i>
            Nos 5 programas
          </div>

<div className="py-5 px-4 border-t border-white/5 font-medium text-white/80">
            Família (2-4 pessoas)
          </div>
<div className="py-5 px-4 border-t border-white/5 text-center text-white/60">
            Raramente abordado
          </div>
<div className="py-5 px-4 border-t border-white/5 text-center flex justify-center">
<i className="w-5 h-5 text-red-400/50" data-lucide="x"></i>
</div>
<div className="bg-[#0B203C] border-x border-[#FF8C32]/30 py-5 px-6 text-center flex items-center justify-center gap-2 text-white">
<i className="w-5 h-5 text-[#18A999]" data-lucide="check"></i>
            Foco central do método
          </div>

<div className="py-5 px-4 border-t border-white/5 font-medium text-white/80">
            Portas de Entrada
          </div>
<div className="py-5 px-4 border-t border-white/5 text-center text-white/60">
            Superficial
          </div>
<div className="py-5 px-4 border-t border-white/5 text-center flex justify-center">
<i className="w-5 h-5 text-red-400/50" data-lucide="x"></i>
</div>
<div className="bg-[#0B203C] border-x border-b border-[#FF8C32]/30 rounded-b-2xl py-5 px-6 text-center flex items-center justify-center gap-2 text-white">
<i className="w-5 h-5 text-[#18A999]" data-lucide="check"></i>
            Aula e mapa dedicados
          </div>
</div>

<div className="lg:hidden flex flex-col gap-6 mb-12">

<div className="bg-[#0B203C] rounded-2xl border border-[#FF8C32]/50 p-6 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF8C32] text-[#050D1A] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              A Escolha Certa
            </div>
<h3 className="font-['Archivo_Black'] text-2xl tracking-tight text-center mb-6 mt-2">
              A Imersão Europa
            </h3>
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-white/10 pb-3">
<span className="text-white/70 text-sm">Foco</span>
<span className="font-semibold text-[#18A999] text-right text-sm">
                  Você emite sozinha
                </span>
</div>
<div className="flex justify-between items-center border-b border-white/10 pb-3">
<span className="text-white/70 text-sm">Prática</span>
<span className="font-semibold text-white text-right text-sm">
                  Nos 5 programas
                </span>
</div>
<div className="flex justify-between items-center border-b border-white/10 pb-3">
<span className="text-white/70 text-sm">Família</span>
<span className="font-semibold text-white text-right text-sm">
                  Foco central
                </span>
</div>
<div className="flex justify-between items-center">
<span className="text-white/70 text-sm">Acesso</span>
<span className="font-semibold text-white text-right text-sm">
                  Pra sempre (seu conhecimento)
                </span>
</div>
</div>
</div>
</div>
<div className="text-center max-w-3xl mx-auto observe-me opacity-0 translate-y-8 transition-all duration-700">
<p className="text-2xl md:text-3xl font-['Archivo_Black'] text-white/90 tracking-tight leading-tight">
            Consultoria é peixe. A Imersão é aprender a pescar. A diferença é
            pra vida toda.
          </p>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#FFF9F6] relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative w-full max-w-md mx-auto lg:mx-0 observe-me opacity-0 scale-95 transition-all duration-1000">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden -rotate-2 relative z-10 shadow-2xl">
<img alt="Sandra Spalla" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -top-6 -right-6 glass-light px-4 py-2 rounded-xl rotate-6 z-20 shadow-lg text-sm font-semibold text-[#0B203C]">
            📚 28 anos professora
          </div>
<div className="absolute bottom-10 -left-8 glass-light px-4 py-2 rounded-xl -rotate-6 z-20 shadow-lg text-sm font-semibold text-[#0B203C]">
            ✈️ 5+ anos em milhas
          </div>
</div>
<div className="flex flex-col gap-6 observe-me opacity-0 translate-y-8 transition-all duration-1000 delay-200">
<span className="text-[#18A999] text-xs font-semibold tracking-widest uppercase">
            Quem ensina
          </span>
<h2 className="text-4xl lg:text-5xl font-['Archivo_Black'] text-[#0B203C] tracking-tight leading-tight">
            A professora de matemática que decifrou o sistema.
          </h2>
<div className="space-y-4 text-lg text-[#0B203C]/80 leading-relaxed">
<p>Sandra Spalla. Professora há 28 anos. Mãe.</p>
<p>
              Acumulou quase 1 milhão de milhas na TAP seguindo o que todo mundo
              falava — e não conseguiu emitir pra família.
            </p>
<p>
              Fez o que professora de matemática faz: sentou e calculou.
              Programa por programa. Rota por rota.
            </p>
<p>Hoje ensina esse método pra mulheres do Brasil inteiro.</p>
</div>
<div className="grid grid-cols-3 gap-4 mt-8 border-t border-[#0B203C]/10 pt-8">
<div>
<div className="text-4xl font-['Archivo_Black'] text-[#0B203C] tracking-tight mb-1 count-up" data-target="28">
                0
              </div>
<div className="text-xs font-medium uppercase tracking-wider text-[#0B203C]/60">
                Anos de sala
              </div>
</div>
<div>
<div className="text-4xl font-['Archivo_Black'] text-[#0B203C] tracking-tight mb-1">
                5+
              </div>
<div className="text-xs font-medium uppercase tracking-wider text-[#0B203C]/60">
                Anos de milhas
              </div>
</div>
<div>
<div className="text-4xl font-['Archivo_Black'] text-[#0B203C] tracking-tight mb-1 count-up" data-target="1000">
                0
              </div>
<div className="text-xs font-medium uppercase tracking-wider text-[#0B203C]/60">
                Mulheres formadas
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white relative">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 observe-me opacity-0 translate-y-8 transition-all duration-700">
<span className="inline-flex items-center gap-2 text-[#FF8C32] text-xs font-semibold tracking-widest uppercase mb-4">
<i className="w-4 h-4" data-lucide="gift"></i>
            Extras Inclusos
          </span>
<h2 className="text-4xl lg:text-5xl font-['Archivo_Black'] text-[#0B203C] tracking-tight mb-4">
            Você ainda recebe 2 bônus entrando hoje.
          </h2>
<p className="text-lg text-[#0B203C]/70">
            Esses dois bônus sozinhos valem mais que o valor da Imersão. Estão
            inclusos pra você que entrar agora.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-16">

<div className="glass-light rounded-3xl p-8 relative border-[#0B203C]/10 border-2 observe-me opacity-0 translate-y-8 transition-all duration-700">
<div className="absolute top-6 right-6 bg-[#18A999]/10 text-[#18A999] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Bônus 01
            </div>
<div className="w-12 h-12 bg-[#FF8C32]/10 rounded-xl flex items-center justify-center mb-6 text-[#FF8C32]">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<h3 className="text-2xl font-['Archivo_Black'] text-[#0B203C] tracking-tight mb-3">
              Descomplica Milhas
            </h3>
<p className="text-lg text-[#0B203C]/70 mb-8 leading-relaxed">
              O treinamento para acumular do zero. Compras do dia a dia,
              transferências bonificadas. Perfeito se você tem pouca milha.
            </p>
<div className="mt-auto pt-4 border-t border-[#0B203C]/10 flex items-center justify-between">
<span className="text-sm text-[#0B203C]/50 line-through font-medium">
                Valor avulso: R$ 97
              </span>
<span className="text-sm font-bold text-[#18A999] uppercase tracking-wider">
                Incluso
              </span>
</div>
</div>

<div className="glass-light rounded-3xl p-8 relative border-[#0B203C]/10 border-2 observe-me opacity-0 translate-y-8 transition-all duration-700 delay-100">
<div className="absolute top-6 right-6 bg-[#18A999]/10 text-[#18A999] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Bônus 02
            </div>
<div className="w-12 h-12 bg-[#FF8C32]/10 rounded-xl flex items-center justify-center mb-6 text-[#FF8C32]">
<i className="w-6 h-6" data-lucide="map"></i>
</div>
<h3 className="text-2xl font-['Archivo_Black'] text-[#0B203C] tracking-tight mb-3">
              Mapa Mental das Portas
            </h3>
<p className="text-lg text-[#0B203C]/70 mb-8 leading-relaxed">
              Material visual com todas as combinações: programas × rotas ×
              portas de entrada. Pra consultar sempre que planejar.
            </p>
<div className="mt-auto pt-4 border-t border-[#0B203C]/10 flex items-center justify-between">
<span className="text-sm text-[#0B203C]/50 line-through font-medium">
                Valor avulso: R$ 47
              </span>
<span className="text-sm font-bold text-[#18A999] uppercase tracking-wider">
                Incluso
              </span>
</div>
</div>
</div>

<div className="max-w-2xl mx-auto bg-[#FFF9F6] border border-[#0B203C]/10 rounded-2xl p-8 observe-me opacity-0 scale-95 transition-all duration-700 delay-200">
<div className="space-y-3 mb-6 font-medium text-lg text-[#0B203C]/80">
<div className="flex justify-between">
<span>Imersão Europa com Milhas</span>
<span>R$ 997</span>
</div>
<div className="flex justify-between">
<span>+ Bônus 1 (Descomplica)</span>
<span>R$ 97</span>
</div>
<div className="flex justify-between">
<span>+ Bônus 2 (Mapa Mental)</span>
<span>R$ 47</span>
</div>
</div>
<div className="border-t border-[#0B203C]/20 pt-4 flex justify-between items-center mb-8">
<span className="font-semibold text-[#0B203C] uppercase tracking-wider text-sm">
              Valor Total Real
            </span>
<span className="font-['Archivo_Black'] text-xl text-[#0B203C] line-through decoration-red-500/50 decoration-4">
              R$ 1.141
            </span>
</div>
<div className="text-center">
<p className="text-sm text-[#0B203C]/70 uppercase tracking-widest font-semibold mb-2">
              Mas hoje você paga apenas:
            </p>
<div className="text-5xl md:text-6xl font-['Archivo_Black'] text-[#0B203C] tracking-tight mb-2">
              R$ 197
            </div>
<div className="text-xl font-medium text-[#FF8C32]">
              ou 12x de R$ 20,25
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#0B203C] relative overflow-hidden" id="offer">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#18A999]/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<img alt="Europa Fundo" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&amp;w=2920&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0B203C] via-transparent to-[#0B203C]"></div>
</div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
<span className="inline-flex items-center gap-2 bg-[#18A999]/20 text-[#18A999] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8">
          🎓 Sua Matrícula
        </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-['Archivo_Black'] text-white tracking-tight leading-[1.1] mb-12">
          Acesso completo a tudo isso pelo valor de uma única parcela do seu
          cartão.
        </h2>
<div className="w-full glass-dark rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl mb-12">
<div className="text-6xl md:text-7xl font-['Archivo_Black'] text-white tracking-tight mb-2">
<span className="text-2xl align-top text-white/50">12x</span>
            R$ 20,25
          </div>
<div className="text-lg text-white/60 font-medium mb-8">
            ou R$ 197 à vista
          </div>
<div className="space-y-4 text-left max-w-md mx-auto mb-10">
<div className="flex items-start gap-3 text-white/90 text-lg">
<i className="w-5 h-5 text-[#18A999] shrink-0 mt-0.5" data-lucide="check"></i>
              Imersão Europa (26 aulas, 4 etapas)
            </div>
<div className="flex items-start gap-3 text-white/90 text-lg">
<i className="w-5 h-5 text-[#18A999] shrink-0 mt-0.5" data-lucide="check"></i>
              Bônus Descomplica Milhas
            </div>
<div className="flex items-start gap-3 text-white/90 text-lg">
<i className="w-5 h-5 text-[#18A999] shrink-0 mt-0.5" data-lucide="check"></i>
              Bônus Mapa Mental
            </div>
<div className="flex items-start gap-3 text-white/90 text-lg">
<i className="w-5 h-5 text-[#18A999] shrink-0 mt-0.5" data-lucide="check"></i>
              1 ano de acesso + atualizações
            </div>
</div>
<a className="block w-full bg-[#FF8C32] text-white py-6 rounded-2xl text-2xl font-['Archivo_Black'] tracking-tight shadow-[0_0_40px_rgba(255,140,50,0.4)] hover:scale-[1.02] hover:bg-[#FF8C32]/90 transition-all uppercase animate-pulse" href="https://pay.greenn.com.br/imersaoeuropa">
            Quero Minha Vaga Agora
          </a>
<div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-white/50 font-medium">
<span className="flex items-center gap-1">
<i className="w-4 h-4" data-lucide="lock"></i>
              Pagamento seguro
            </span>
<span className="flex items-center gap-1">
<i className="w-4 h-4" data-lucide="zap"></i>
              Acesso imediato
            </span>
</div>
</div>

<div className="w-full bg-[#050D1A] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 text-left border border-white/5">
<div className="w-32 h-32 shrink-0 rounded-full bg-gradient-to-br from-[#18A999] to-[#0B203C] p-1 flex items-center justify-center relative">
<div className="w-full h-full bg-[#050D1A] rounded-full flex flex-col items-center justify-center text-white text-center">
<span className="text-3xl font-['Archivo_Black'] leading-none">
                7
              </span>
<span className="text-xs font-bold tracking-widest uppercase mt-1">
                Dias
              </span>
</div>

</div>
<div>
<h3 className="text-2xl font-['Archivo_Black'] text-white tracking-tight mb-3">
              Garantia Incondicional
            </h3>
<p className="text-white/70 text-lg leading-relaxed">
              Você entra, assiste as aulas e decide. Se em qualquer momento
              dentro dos 7 dias achar que não é pra você, pede o reembolso.
              Devolvemos 100% sem pergunta nenhuma. O risco é nosso.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#FFF9F6]">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
<div className="lg:col-span-4 lg:sticky lg:top-32 self-start observe-me opacity-0 translate-y-8 transition-all duration-700">
<span className="text-[#18A999] text-xs font-semibold tracking-widest uppercase mb-4 block">
            Dúvidas
          </span>
<h2 className="text-4xl lg:text-5xl font-['Archivo_Black'] text-[#0B203C] tracking-tight leading-tight mb-6">
            Perguntas que aparecem antes.
          </h2>
<p className="text-[#0B203C]/60 mb-6 font-medium">
            Não encontrou sua dúvida?
          </p>
<a className="inline-flex items-center gap-2 border-2 border-[#18A999] text-[#18A999] hover:bg-[#18A999] hover:text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors" href="https://wa.me/5511999999999">
<i className="w-4 h-4" data-lucide="message-circle"></i>
            Chama no WhatsApp
          </a>
</div>
<div className="lg:col-span-8 space-y-4">

<details className="group bg-white rounded-2xl border border-[#0B203C]/5 shadow-sm overflow-hidden open:shadow-md transition-all observe-me opacity-0 translate-y-4">
<summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-xl text-[#0B203C]">
<span>Tenho poucas milhas. Vai dar pra ir?</span>
<span className="transition group-open:rotate-45">
<i className="w-6 h-6 text-[#18A999]" data-lucide="plus"></i>
</span>
</summary>
<div className="p-6 pt-0 text-lg text-[#0B203C]/70 leading-relaxed border-t border-[#0B203C]/5 mt-2">
              Vai. A maioria das alunas começa exatamente nessa faixa. O método
              te ensina a usar bem o que você já tem — e o Bônus Descomplica
              Milhas te ensina a acumular mais com as compras do seu dia a dia.
            </div>
</details>
<details className="group bg-white rounded-2xl border border-[#0B203C]/5 shadow-sm overflow-hidden open:shadow-md transition-all observe-me opacity-0 translate-y-4 delay-75">
<summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-xl text-[#0B203C]">
<span>Já fiz outro curso e não emiti. Esse é diferente?</span>
<span className="transition group-open:rotate-45">
<i className="w-6 h-6 text-[#18A999]" data-lucide="plus"></i>
</span>
</summary>
<div className="p-6 pt-0 text-lg text-[#0B203C]/70 leading-relaxed border-t border-[#0B203C]/5 mt-2">
              É. A maioria foca em ACUMULAR. A Imersão é focada em EMITIR — pra
              Europa especificamente, com aulas práticas onde a Sandra emite na
              sua frente em cada programa.
            </div>
</details>
<details className="group bg-white rounded-2xl border border-[#0B203C]/5 shadow-sm overflow-hidden open:shadow-md transition-all observe-me opacity-0 translate-y-4 delay-100">
<summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-xl text-[#0B203C]">
<span>Tenho medo de comprar pontos.</span>
<span className="transition group-open:rotate-45">
<i className="w-6 h-6 text-[#18A999]" data-lucide="plus"></i>
</span>
</summary>
<div className="p-6 pt-0 text-lg text-[#0B203C]/70 leading-relaxed border-t border-[#0B203C]/5 mt-2">
              Por isso uma das aulas é exatamente sobre quando a compra de
              pontos vale a pena e quando é furada. Compra de pontos sem cálculo
              é loteria. Com cálculo, é ferramenta.
            </div>
</details>
<details className="group bg-white rounded-2xl border border-[#0B203C]/5 shadow-sm overflow-hidden open:shadow-md transition-all observe-me opacity-0 translate-y-4 delay-150">
<summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-xl text-[#0B203C]">
<span>Quero viajar com 4 pessoas da família. Funciona?</span>
<span className="transition group-open:rotate-45">
<i className="w-6 h-6 text-[#18A999]" data-lucide="plus"></i>
</span>
</summary>
<div className="p-6 pt-0 text-lg text-[#0B203C]/70 leading-relaxed border-t border-[#0B203C]/5 mt-2">
              É o problema que a Sandra viveu e que motivou a Imersão. Você vai
              aprender quais programas funcionam pra família, como buscar
              disponibilidade real e combinar rotas.
            </div>
</details>
<details className="group bg-white rounded-2xl border border-[#0B203C]/5 shadow-sm overflow-hidden open:shadow-md transition-all observe-me opacity-0 translate-y-4 delay-200">
<summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-xl text-[#0B203C]">
<span>Não sei a data exata da viagem. Entro agora?</span>
<span className="transition group-open:rotate-45">
<i className="w-6 h-6 text-[#18A999]" data-lucide="plus"></i>
</span>
</summary>
<div className="p-6 pt-0 text-lg text-[#0B203C]/70 leading-relaxed border-t border-[#0B203C]/5 mt-2">
              Faz mais sentido ainda. Quem planeja com antecedência (4-12 meses)
              encontra mais disponibilidade, aproveita promoções de
              transferência e tem mais flexibilidade.
            </div>
</details>
</div>
</div>
</section>

<section className="py-32 bg-[#050D1A] relative">
<i className="absolute top-10 left-1/2 -translate-x-1/2 text-white/10 w-24 h-24" data-lucide="plane"></i>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 pb-40">
<h2 className="text-5xl lg:text-7xl font-['Archivo_Black'] text-white tracking-tight leading-[0.95] mb-8">
          Sua próxima viagem pra Europa pode começar essa semana.
        </h2>
<div className="text-xl text-white/80 font-medium mb-12">
          Acesso imediato · Garantia de 7 dias · R$ 197 ou 12x R$ 20,25
        </div>
<a className="inline-block bg-[#FF8C32] text-white px-12 py-6 rounded-full text-2xl font-['Archivo_Black'] tracking-tight shadow-[0_0_40px_rgba(255,140,50,0.3)] hover:scale-105 hover:shadow-[0_0_60px_rgba(255,140,50,0.5)] transition-all uppercase" href="#offer">
          Quero Minha Vaga
        </a>
</div>

<div className="max-w-2xl mx-auto px-6 relative z-20 -mt-20">
<div className="bg-[#FFF9F6] rounded-t-3xl rounded-br-3xl rounded-bl-sm p-10 md:p-14 shadow-2xl border border-white/20 rotate-1 hover:rotate-0 transition-transform origin-bottom-left">
<i className="w-6 h-6 text-[#0B203C]/30 mb-6" data-lucide="pen-tool"></i>
<div className="font-['Archivo_Black'] text-2xl text-[#0B203C] mb-6">
            P.S.
          </div>
<p className="text-lg text-[#0B203C]/80 mb-6 leading-relaxed">
            Antes de você fechar a página, lê uma mensagem que eu recebi da
            Leila — uma das minhas alunas.
          </p>
<p className="text-lg text-[#0B203C]/80 mb-6 leading-relaxed">
            Ela me escreveu num dia que eu estava de férias:
          </p>
<div className="pl-6 border-l-4 border-[#18A999] my-8">
<p className="text-xl italic font-medium text-[#0B203C] leading-relaxed">
              "Sandra, desculpa interromper suas férias, mas eu tinha que te
              agradecer. Eu CONSEGUI emitir minha primeira passagem com milhas
              sozinha. Pagando só a taxa de embarque. Vou ver minha mãe e meus
              primos na Toscana. Essa viagem tem um sabor especial. Você
              ensinou, eu aprendi, e fiz tudo sozinha."
            </p>
</div>
<p className="text-lg text-[#0B203C]/80 mb-6 font-semibold">
            Apenas a taxa de embarque. Pra Toscana. Pra ver a mãe.
          </p>
<p className="text-lg text-[#0B203C]/80 mb-10 leading-relaxed">
            Se você sonha em ver alguém que mora longe, em levar a sua família,
            em fazer uma viagem que parecia caro demais — essa Imersão não é
            sobre milhas. É sobre realizar.
          </p>
<p className="text-lg text-[#0B203C] font-medium mb-4">
            Te espero do outro lado.
          </p>
<div className="font-['Archivo_Black'] text-2xl text-[#18A999] italic tracking-tighter">
            Sandra.
          </div>
</div>
</div>
</section>

<footer className="bg-[#050D1A] pt-24 pb-12 border-t border-white/5 text-center md:text-left relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-white/5 pb-12">
<div className="text-white font-['Archivo_Black'] tracking-tight text-xl">
            SANDRA
            <span className="text-[#18A999]">MAIS</span>
            VIAGENS
          </div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-[#18A999] hover:bg-white/10 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-[#18A999] hover:bg-white/10 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
<div>© 2026 Sandra Mais Viagens. Todos os direitos reservados.</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
              Termos de uso
            </a>
<a className="hover:text-white transition-colors" href="#">
              Política de privacidade
            </a>
</div>
</div>
<div className="text-xs text-white/20 mt-8 max-w-3xl mx-auto text-center md:text-left">
          Este site não é afiliado ao Facebook ou a qualquer entidade do
          Facebook. Os programas de fidelidade mencionados são marcas
          registradas de suas respectivas empresas. Resultados podem variar.
        </div>
</div>
</footer>

<div className="fixed bottom-0 w-full glass-dark border-t border-white/10 p-4 z-50 md:hidden translate-y-full transition-transform duration-300" id="mobile-cta">
<div className="flex items-center justify-between gap-4">
<div className="flex flex-col">
<span className="text-white/60 text-xs font-medium uppercase tracking-wider">
            Apenas
          </span>
<span className="text-white font-['Archivo_Black'] text-xl">R$ 197</span>
</div>
<a className="bg-[#FF8C32] text-white px-6 py-3 rounded-full text-sm font-['Archivo_Black'] tracking-wide uppercase flex-1 text-center shadow-[0_0_15px_rgba(255,140,50,0.4)]" href="#offer">
          Quero Minha Vaga
        </a>
</div>
</div>



    </>
  );
}
