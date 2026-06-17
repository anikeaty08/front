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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Syne', 'sans-serif'],
},
colors: {
dark: '#030303',
gold: '#a3825f',
silver: '#e5e5e5',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Custom Luxury Cursor script
      const cursor = document.getElementById('custom-cursor');
      document.addEventListener('mousemove', (e) => {
          cursor.style.left = e.clientX + 'px';
          cursor.style.top = e.clientY + 'px';
      });

      // Update scroll progress bar (Native Scroll)
      window.addEventListener('scroll', () => {
          const total = document.documentElement.scrollHeight - window.innerHeight;
          const percentage = (window.scrollY / total) * 100;
          document.getElementById('scroll-progress').style.height = percentage + '%';
      });

      // Register GSAP ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      // Intro Animations on page load
      window.addEventListener('load', () => {
          const logo = document.getElementById('intro-logo-container');
          const statement = document.getElementById('intro-statement');

          logo.classList.remove('opacity-0', 'scale-95');
          logo.classList.add('opacity-100', 'scale-100');

          statement.classList.remove('opacity-0');
          statement.classList.add('opacity-100');
      });

      // GSAP Scroll Animations

      // 1. Intro Dissolve & Zoom Out
      gsap.to("#intro-bg", {
          scrollTrigger: {
              trigger: "#intro",
              start: "top top",
              end: "bottom top",
              scrub: true
          },
          scale: 1.3,
          opacity: 0.1,
          y: 100,
          ease: "none"
      });

      gsap.to("#intro-logo-container, #intro-statement", {
          scrollTrigger: {
              trigger: "#intro",
              start: "top top",
              end: "bottom top",
              scrub: true
          },
          opacity: 0,
          scale: 0.9,
          y: -50,
          ease: "none"
      });

      // 2. Section 2 Brand Typography reveal and transition
      const brandTimeline = gsap.timeline({
          scrollTrigger: {
              trigger: "#marca",
              start: "top top",
              end: "bottom bottom",
              scrub: true,
          }
      });

      brandTimeline.to("#brand-text-1", {
          opacity: 0.1,
          scale: 0.9,
          duration: 1
      })
      .to("#brand-text-2", {
          opacity: 1,
          scale: 1,
          duration: 1.5
      }, "-=0.5")
      .to("#brand-subtext", {
          opacity: 1,
          y: -20,
          duration: 1
      }, "-=0.5");

      // 4. Section 4 Process Timeline cards depth stack effect
      const processCards = gsap.utils.toArray('.process-card');
      processCards.forEach((card, index) => {
          if (index === 0) return; // Keep first card visible

          gsap.to(card, {
              scrollTrigger: {
                  trigger: "#processo",
                  start: `top+=${index * 50}vh top`,
                  end: `top+=${(index + 1) * 50}vh top`,
                  scrub: true,
              },
              opacity: 1,
              y: 0,
              scale: 1,
              zIndex: 30 + index,
              ease: "power2.out"
          });

          // Push previous cards back in scale and rotation to simulate 3D space
          gsap.to(processCards[index - 1], {
              scrollTrigger: {
                  trigger: "#processo",
                  start: `top+=${index * 50}vh top`,
                  end: `top+=${(index + 1) * 50}vh top`,
                  scrub: true,
              },
              scale: 0.9 - (index * 0.02),
              y: -30,
              opacity: 0.4,
              ease: "power2.out"
          });
      });

      // 5. Portfolio Horizontal scroll pinning
      const track = document.getElementById('portfolio-track');
      gsap.to(track, {
          scrollTrigger: {
              trigger: "#portfolio",
              start: "top top",
              end: () => `+=${track.scrollWidth - window.innerWidth + 200}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1
          },
          x: () => -(track.scrollWidth - window.innerWidth + 100),
          ease: "none"
      });

      // 8. CTA Cinematic phase transition
      gsap.to("#cta-phase-1", {
          scrollTrigger: {
              trigger: "#cta",
              start: "top 60%",
              end: "top 20%",
              scrub: true
          },
          opacity: 0.3,
          scale: 0.95
      });

      gsap.to("#cta-phase-2", {
          scrollTrigger: {
              trigger: "#cta",
              start: "top 40%",
              end: "top 10%",
              scrub: true
          },
          opacity: 1,
          scale: 1
      });

      gsap.to("#cta-button-container", {
          scrollTrigger: {
              trigger: "#cta",
              start: "top 20%",
              end: "top top",
              scrub: true
          },
          opacity: 1,
          y: -10
      });

      // Testimonial interactive engine
      const testimonials = [
          {
              quote: '"A Bunker não é apenas um estúdio. Foi um ritual de autodescoberta. Minha pele agora fala um idioma que eu mesmo não conseguia traduzir em palavras."',
              name: 'Helena Vasconcellos',
              role: 'Colecionadora de Obras Artísticas',
              img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200'
          },
          {
              quote: '"Cada traço tem peso, significado e verdade. Você não vem aqui para escolher em um catálogo. Você vem aqui para se encontrar."',
              name: 'Mateus Alencar',
              role: 'Arquiteto e Minimalista',
              img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200'
          },
          {
              quote: '"Profissionalismo cirúrgico e uma sensibilidade artística sem igual. O resultado final superou qualquer expectativa estética."',
              name: 'Isadora Castelli',
              role: 'Designer de Alta Moda',
              img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200'
          }
      ];

      window.changeTestimonial = function(index) {
          const imgElement = document.getElementById('testimonial-img');
          const quoteElement = document.getElementById('testimonial-quote');

          // Fade out
          imgElement.style.opacity = '0';
          imgElement.style.transform = 'scale(1.05)';
          quoteElement.style.opacity = '0';
          quoteElement.style.transform = 'translateY(10px)';

          setTimeout(() => {
              // Change Data
              imgElement.src = testimonials[index].img;
              quoteElement.textContent = testimonials[index].quote;

              // Update indicator buttons
              for (let i = 0; i < 3; i++) {
                  const btn = document.getElementById(`btn-test-${i}`);
                  if (i === index) {
                      btn.classList.add('bg-gold');
                      btn.classList.remove('bg-zinc-700');
                  } else {
                      btn.classList.remove('bg-gold');
                      btn.classList.add('bg-zinc-700');
                  }
              }

              // Fade In
              imgElement.style.opacity = '1';
              imgElement.style.transform = 'scale(1)';
              quoteElement.style.opacity = '1';
              quoteElement.style.transform = 'translateY(0)';
          }, 500);
      }
    
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
      

<div className="hidden md:block fixed w-8 h-8 border border-gold/40 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 mix-blend-difference" id="custom-cursor"></div>

<header className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference">
<a className="text-lg md:text-xl font-display font-semibold tracking-[0.3em] uppercase text-silver hover:text-gold transition-colors duration-500" href="#">
        Bunker
      </a>
<div className="hidden md:flex space-x-8 text-xs tracking-widest uppercase font-light">
<a className="hover:text-gold transition-colors duration-300" href="#marca">
          A Marca
        </a>
<a className="hover:text-gold transition-colors duration-300" href="#processo">
          O Processo
        </a>
<a className="hover:text-gold transition-colors duration-300" href="#portfolio">
          Coleções
        </a>
<a className="hover:text-gold transition-colors duration-300" href="#artistas">
          Artistas
        </a>
</div>
<div>
<a className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest border-b border-gold/40 pb-1 hover:border-gold transition-all duration-300 text-gold font-light" href="#cta">
<span>Iniciá-lo</span>
<iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</header>

<div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-4 items-center">
<span className="text-[0.6rem] font-light tracking-widest text-gold/60 rotate-90 mb-4 uppercase">
        Jornada
      </span>
<div className="w-[1px] h-32 bg-zinc-800 relative">
<div className="absolute top-0 left-0 w-full bg-gold transition-all duration-100" id="scroll-progress" style={{height: '0%'}}></div>
</div>
</div>

<section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black z-10" id="intro">

<div className="absolute inset-0 opacity-45 mix-blend-color-dodge pointer-events-none scale-110" id="intro-bg">
<img alt="Ink texture abstract" className="w-full h-full object-cover filter grayscale contrast-125 brightness-50" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2000"/>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">

<div className="mb-12 opacity-0 scale-95 transition-all duration-[2000ms]" id="intro-logo-container">
<h1 className="text-[8vw] md:text-[6vw] font-display font-light tracking-[0.4em] uppercase text-silver leading-none select-none">
            BUNKER
          </h1>
<p className="text-[1.5vw] md:text-[0.8vw] tracking-[1em] uppercase text-gold font-light mt-3 leading-none mr-[-1em]">
            Art &amp; Identity
          </p>
</div>

<div className="space-y-4 opacity-0 transition-all duration-[2500ms] delay-500" id="intro-statement">
<p className="text-xl md:text-3xl font-display font-extralight tracking-tight text-zinc-400">
            "Tatuagens desaparecem."
          </p>
<p className="text-3xl md:text-5xl font-display font-light tracking-tight text-white uppercase">
            Identidade permanece.
          </p>
</div>

<div className="absolute bottom-12 flex flex-col items-center space-y-2 opacity-60 animate-bounce">
<span className="text-[0.65rem] tracking-[0.3em] uppercase text-zinc-500 font-light">
            Desça para iniciar
          </span>
<iconify-icon className="text-xl text-gold" icon="solar:mouse-minimalistic-linear"></iconify-icon>
</div>
</div>
</section>

<section className="relative min-h-[200vh] bg-dark flex items-start justify-center py-[20vh]" id="marca">
<div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden">
<div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-zinc-900/40 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto text-center relative z-10 w-full">

<div className="relative h-[30vh] md:h-[40vh] flex items-center justify-center">
<h2 className="absolute text-[8vw] md:text-[6vw] font-display font-light tracking-tight leading-none text-zinc-800 uppercase select-none" id="brand-text-1">
              Nós não tatuamos desenhos.
            </h2>
<h2 className="absolute text-[8vw] md:text-[6vw] font-display font-normal tracking-tight leading-none text-gold uppercase opacity-0 scale-90 select-none" id="brand-text-2">
              Nós eternizamos histórias.
            </h2>
</div>
<p className="text-sm md:text-base text-zinc-500 max-w-xl mx-auto font-light mt-8 tracking-wide leading-relaxed opacity-0" id="brand-subtext">
            A pele é a última tela em branco. Não criamos adornos temporários.
            Criamos símbolos de poder, vulnerabilidade e eternidade.
          </p>
</div>
</div>
</section>

<section className="relative bg-black py-32 overflow-hidden" id="imersao">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-end justify-between mb-20">
<div className="max-w-xl">
<p className="text-xs uppercase tracking-[0.3em] text-gold mb-3 font-light">
              Estética Macro
            </p>
<h3 className="text-3xl md:text-5xl font-display font-extralight tracking-tight uppercase leading-none text-white">
              A obsessão pelo milímetro.
            </h3>
</div>
<div className="mt-6 md:mt-0 max-w-sm">
<p className="text-xs md:text-sm text-zinc-400 font-light tracking-wide leading-relaxed">
              A precisão da agulha encontra a volatilidade da tinta. Cada gota
              penetra como poesia na arquitetura do corpo humano.
            </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

<div className="col-span-1 md:col-span-7 overflow-hidden relative group aspect-[16/10] bg-zinc-900 rounded-sm">
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
<img alt="Precision needle close-up" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] filter grayscale contrast-110 brightness-75 duration-700" src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&amp;w=1500"/>
<div className="absolute bottom-6 left-6 z-20">
<span className="text-[0.65rem] tracking-widest uppercase text-white/60 block mb-1">
                Câmera Close 01
              </span>
<span className="text-sm font-display font-light text-gold uppercase tracking-wider">
                A Fusão da Agulha
              </span>
</div>
</div>

<div className="col-span-1 md:col-span-5 overflow-hidden relative group aspect-square bg-zinc-900 rounded-sm">
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
<img alt="Liquid fluid ink black" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] filter grayscale contrast-125 brightness-50" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&amp;w=1500"/>
<div className="absolute bottom-6 left-6 z-20">
<span className="text-[0.65rem] tracking-widest uppercase text-white/60 block mb-1">
                Câmera Close 02
              </span>
<span className="text-sm font-display font-light text-gold uppercase tracking-wider">
                Dispersão Pura do Carbono
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="relative min-h-[350vh] bg-dark py-20" id="processo">
<div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden">

<div className="absolute top-12 left-6 md:left-20 z-10">
<span className="text-xs uppercase tracking-[0.4em] text-gold block mb-2 font-light">
            O Caminho Sagrado
          </span>
<h3 className="text-2xl md:text-3xl font-display font-extralight tracking-tight uppercase text-white">
            A Evolução da Obra
          </h3>
</div>

<div className="relative w-full max-w-3xl h-[60vh] md:h-[50vh] flex items-center justify-center">

<div className="process-card absolute w-full max-w-md md:max-w-xl p-8 md:p-12 bg-zinc-950/90 border border-zinc-900 rounded-sm flex flex-col justify-between aspect-[16/10] shadow-2xl transition-all duration-500 z-30">
<div className="flex justify-between items-start">
<span className="text-[0.7rem] font-light tracking-widest uppercase text-gold">
                Fase I
              </span>
<span className="text-5xl font-display font-extralight text-zinc-800 leading-none">
                01
              </span>
</div>
<div className="my-6">
<h4 className="text-xl md:text-2xl font-display font-light text-white uppercase tracking-wider mb-2">
                A Centelha / Conceito
              </h4>
<p className="text-xs md:text-sm text-zinc-400 font-light tracking-wide leading-relaxed">
                Mapeamos sua narrativa pessoal, cicatrizes emocionais e
                triunfos. O processo começa em uma conversa profunda e sem
                pretensões estéticas iniciais.
              </p>
</div>
<div className="flex items-center space-x-2 text-[0.65rem] tracking-[0.2em] text-zinc-500 uppercase">
<iconify-icon className="text-gold text-sm" icon="solar:dialog-linear"></iconify-icon>
<span>Compreensão Psicológica</span>
</div>
</div>

<div className="process-card absolute w-full max-w-md md:max-w-xl p-8 md:p-12 bg-zinc-950/90 border border-zinc-900 rounded-sm flex flex-col justify-between aspect-[16/10] shadow-2xl transition-all duration-500 z-20 opacity-0 translate-y-20 scale-95">
<div className="flex justify-between items-start">
<span className="text-[0.7rem] font-light tracking-widest uppercase text-gold">
                Fase II
              </span>
<span className="text-5xl font-display font-extralight text-zinc-800 leading-none">
                02
              </span>
</div>
<div className="my-6">
<h4 className="text-xl md:text-2xl font-display font-light text-white uppercase tracking-wider mb-2">
                A Desconstrução Visual
              </h4>
<p className="text-xs md:text-sm text-zinc-400 font-light tracking-wide leading-relaxed">
                Nossos artistas projetam designs autorais, desconstruindo
                referências tradicionais para formular uma anatomia visual
                perfeitamente adaptada a você.
              </p>
</div>
<div className="flex items-center space-x-2 text-[0.65rem] tracking-[0.2em] text-zinc-500 uppercase">
<iconify-icon className="text-gold text-sm" icon="solar:pen-linear"></iconify-icon>
<span>Alta Alfaiataria Estética</span>
</div>
</div>

<div className="process-card absolute w-full max-w-md md:max-w-xl p-8 md:p-12 bg-zinc-950/90 border border-zinc-900 rounded-sm flex flex-col justify-between aspect-[16/10] shadow-2xl transition-all duration-500 z-10 opacity-0 translate-y-20 scale-95">
<div className="flex justify-between items-start">
<span className="text-[0.7rem] font-light tracking-widest uppercase text-gold">
                Fase III
              </span>
<span className="text-5xl font-display font-extralight text-zinc-800 leading-none">
                03
              </span>
</div>
<div className="my-6">
<h4 className="text-xl md:text-2xl font-display font-light text-white uppercase tracking-wider mb-2">
                Alinhamento Anatômico
              </h4>
<p className="text-xs md:text-sm text-zinc-400 font-light tracking-wide leading-relaxed">
                Projeção 3D do design sobre suas curvas musculares específicas.
                A arte é viva e precisa fluir harmoniosamente com a sua
                movimentação natural.
              </p>
</div>
<div className="flex items-center space-x-2 text-[0.65rem] tracking-[0.2em] text-zinc-500 uppercase">
<iconify-icon className="text-gold text-sm" icon="solar:ruler-linear"></iconify-icon>
<span>Fluidez &amp; Simetria Corporal</span>
</div>
</div>

<div className="process-card absolute w-full max-w-md md:max-w-xl p-8 md:p-12 bg-zinc-950/90 border border-zinc-900 rounded-sm flex flex-col justify-between aspect-[16/10] shadow-2xl transition-all duration-500 z-10 opacity-0 translate-y-20 scale-95">
<div className="flex justify-between items-start">
<span className="text-[0.7rem] font-light tracking-widest uppercase text-gold">
                Fase IV
              </span>
<span className="text-5xl font-display font-extralight text-zinc-800 leading-none">
                04
              </span>
</div>
<div className="my-6">
<h4 className="text-xl md:text-2xl font-display font-light text-white uppercase tracking-wider mb-2">
                A Execução Ritualística
              </h4>
<p className="text-xs md:text-sm text-zinc-400 font-light tracking-wide leading-relaxed">
                A cabine privativa e silenciosa torna-se um templo. O ritmo do
                artista é meditativo, focado na suavidade de traço e na
                integridade absoluta da pele.
              </p>
</div>
<div className="flex items-center space-x-2 text-[0.65rem] tracking-[0.2em] text-zinc-500 uppercase">
<iconify-icon className="text-gold text-sm" icon="solar:magic-stick-linear"></iconify-icon>
<span>Cabine de Atmosfera Controlada</span>
</div>
</div>

<div className="process-card absolute w-full max-w-md md:max-w-xl p-8 md:p-12 bg-zinc-950/90 border border-zinc-900 rounded-sm flex flex-col justify-between aspect-[16/10] shadow-2xl transition-all duration-500 z-10 opacity-0 translate-y-20 scale-95">
<div className="flex justify-between items-start">
<span className="text-[0.7rem] font-light tracking-widest uppercase text-gold">
                Fase V
              </span>
<span className="text-5xl font-display font-extralight text-zinc-800 leading-none">
                05
              </span>
</div>
<div className="my-6">
<h4 className="text-xl md:text-2xl font-display font-light text-white uppercase tracking-wider mb-2">
                A Transparência Eterna
              </h4>
<p className="text-xs md:text-sm text-zinc-400 font-light tracking-wide leading-relaxed">
                O pós-tratamento é acompanhado individualmente. O resultado
                final se torna parte de quem você é. Intangível, inegável,
                irrepetível.
              </p>
</div>
<div className="flex items-center space-x-2 text-[0.65rem] tracking-[0.2em] text-zinc-500 uppercase">
<iconify-icon className="text-gold text-sm" icon="solar:crown-minimalistic-linear"></iconify-icon>
<span>Legado Imortalizado</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative min-h-screen bg-black py-32 overflow-hidden flex flex-col justify-center" id="portfolio">
<div className="max-w-7xl mx-auto px-6 mb-16 w-full">
<span className="text-xs uppercase tracking-[0.3em] text-gold mb-3 block font-light">
          Acervo Privado
        </span>
<h3 className="text-3xl md:text-5xl font-display font-extralight tracking-tight uppercase text-white leading-none">
          Estúdio de Exposição
        </h3>
</div>

<div className="relative w-full overflow-hidden flex" id="portfolio-track">
<div className="flex space-x-12 px-6 md:px-24 flex-nowrap w-max">

<div className="w-[75vw] md:w-[32vw] flex-shrink-0 group">
<div className="aspect-[4/5] w-full bg-zinc-900 overflow-hidden relative rounded-sm">
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
<img alt="Sartorial tattoo piece" className="w-full h-full object-cover grayscale contrast-115 brightness-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&amp;w=1200"/>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<span className="text-[0.65rem] font-light tracking-widest text-zinc-500 uppercase">
                  Obra I
                </span>
<h4 className="text-lg font-display font-light text-white uppercase tracking-wider mt-1">
                  Metamorfose do Traço
                </h4>
</div>
<span className="text-xs text-gold uppercase tracking-wider font-light">
                Estilo Autoral
              </span>
</div>
</div>

<div className="w-[75vw] md:w-[32vw] flex-shrink-0 group">
<div className="aspect-[4/5] w-full bg-zinc-900 overflow-hidden relative rounded-sm">
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
<img alt="Abstract skin tattoo" className="w-full h-full object-cover grayscale contrast-120 brightness-75 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1200"/>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<span className="text-[0.65rem] font-light tracking-widest text-zinc-500 uppercase">
                  Obra II
                </span>
<h4 className="text-lg font-display font-light text-white uppercase tracking-wider mt-1">
                  Sombras de Carbono
                </h4>
</div>
<span className="text-xs text-gold uppercase tracking-wider font-light">
                Abstrato
              </span>
</div>
</div>

<div className="w-[75vw] md:w-[32vw] flex-shrink-0 group">
<div className="aspect-[4/5] w-full bg-zinc-900 overflow-hidden relative rounded-sm">
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
<img alt="Luxury editorial model with sleeve tattoo" className="w-full h-full object-cover grayscale contrast-110 brightness-85 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&amp;w=1200"/>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<span className="text-[0.65rem] font-light tracking-widest text-zinc-500 uppercase">
                  Obra III
                </span>
<h4 className="text-lg font-display font-light text-white uppercase tracking-wider mt-1">
                  Anatomia Alinhada
                </h4>
</div>
<span className="text-xs text-gold uppercase tracking-wider font-light">
                Geométrico
              </span>
</div>
</div>

<div className="w-[75vw] md:w-[32vw] flex-shrink-0 group">
<div className="aspect-[4/5] w-full bg-zinc-900 overflow-hidden relative rounded-sm">
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
<img alt="Premium landscape flow ink" className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&amp;w=1200"/>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<span className="text-[0.65rem] font-light tracking-widest text-zinc-500 uppercase">
                  Obra IV
                </span>
<h4 className="text-lg font-display font-light text-white uppercase tracking-wider mt-1">
                  A Escultura do Tempo
                </h4>
</div>
<span className="text-xs text-gold uppercase tracking-wider font-light">
                Fine Line
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-dark py-32 overflow-hidden" id="depoimentos">
<div className="max-w-7xl mx-auto px-6">
<span className="text-xs uppercase tracking-[0.3em] text-gold mb-3 block font-light">
          Vozes do Culto
        </span>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">

<div className="relative overflow-hidden aspect-[4/5] bg-zinc-900 max-w-md mx-auto lg:mx-0 w-full rounded-sm">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
<img alt="Client high end portrait" className="w-full h-full object-cover grayscale contrast-115 brightness-90 transition-all duration-[1.5s]" id="testimonial-img" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1200"/>
<div className="absolute bottom-8 left-8 z-20">
<p className="text-lg font-display font-light text-white tracking-wider">
                Helena Vasconcellos
              </p>
<p className="text-xs text-zinc-400 mt-1 uppercase tracking-widest font-light">
                Colecionadora de Obras Artísticas
              </p>
</div>
</div>

<div className="flex flex-col justify-center space-y-8">
<iconify-icon className="text-4xl text-gold/40" icon="solar:double-quotes-l-linear"></iconify-icon>
<h3 className="text-2xl md:text-3xl font-display font-light tracking-tight text-white leading-relaxed" id="testimonial-quote">
              "A Bunker não é apenas um estúdio. Foi um ritual de
              autodescoberta. Minha pele agora fala um idioma que eu mesmo não
              conseguia traduzir em palavras."
            </h3>
<div className="flex space-x-4 pt-4">
<button className="w-2 h-2 rounded-full bg-gold transition-all duration-300 pointer-events-auto" id="btn-test-0" onclick="changeTestimonial(0)"></button>
<button className="w-2 h-2 rounded-full bg-zinc-700 transition-all duration-300 pointer-events-auto" id="btn-test-1" onclick="changeTestimonial(1)"></button>
<button className="w-2 h-2 rounded-full bg-zinc-700 transition-all duration-300 pointer-events-auto" id="btn-test-2" onclick="changeTestimonial(2)"></button>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-black py-32 overflow-hidden" id="artistas">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-24">
<span className="text-xs uppercase tracking-[0.4em] text-gold mb-3 block font-light">
            Mestres Artistas
          </span>
<h3 className="text-3xl md:text-5xl font-display font-extralight tracking-tight uppercase text-white leading-none">
            O Elenco do Incomum
          </h3>
<p className="text-sm text-zinc-500 max-w-md mx-auto font-light mt-4 tracking-wide leading-relaxed">
            Não contratamos técnicos. Recrutamos visionários que dominam a
            matéria do corpo e a mística da marca.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group flex flex-col">
<div className="aspect-[3/4] w-full overflow-hidden bg-zinc-950 relative rounded-sm">
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
<img alt="Artist Victor portrait" className="w-full h-full object-cover grayscale contrast-120 brightness-75 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1200"/>
<div className="absolute bottom-6 left-6 z-20">
<span className="text-xs text-gold uppercase tracking-widest font-light block mb-1">
                  01 / Vanguardista
                </span>
<span className="text-xl font-display font-light text-white uppercase tracking-wider">
                  Victor Krauss
                </span>
</div>
</div>
<div className="mt-6 flex flex-col space-y-2">
<span className="text-[0.65rem] tracking-widest uppercase text-zinc-500">
                Blackwork Extremo / Abstracionismo
              </span>
<p className="text-xs text-zinc-400 font-light leading-relaxed">
                Formado em Belas Artes em Berlim, Victor interpreta silêncios e
                fúria em traços brutais e fluidos perfeitamente harmonizados.
              </p>
</div>
</div>

<div className="group flex flex-col">
<div className="aspect-[3/4] w-full overflow-hidden bg-zinc-950 relative rounded-sm">
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
<img alt="Artist Arthur portrait" className="w-full h-full object-cover grayscale contrast-120 brightness-75 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=1200"/>
<div className="absolute bottom-6 left-6 z-20">
<span className="text-xs text-gold uppercase tracking-widest font-light block mb-1">
                  02 / Minimalista
                </span>
<span className="text-xl font-display font-light text-white uppercase tracking-wider">
                  Arthur Pendelton
                </span>
</div>
</div>
<div className="mt-6 flex flex-col space-y-2">
<span className="text-[0.65rem] tracking-widest uppercase text-zinc-500">
                Geometria Sagrada / Fine Line
              </span>
<p className="text-xs text-zinc-400 font-light leading-relaxed">
                Arthur busca a simetria absoluta do universo. Suas linhas têm a
                finura de um fio de cabelo e a precisão cirúrgica de um laser.
              </p>
</div>
</div>

<div className="group flex flex-col">
<div className="aspect-[3/4] w-full overflow-hidden bg-zinc-950 relative rounded-sm">
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
<img alt="Artist Clara portrait" className="w-full h-full object-cover grayscale contrast-120 brightness-75 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1200"/>
<div className="absolute bottom-6 left-6 z-20">
<span className="text-xs text-gold uppercase tracking-widest font-light block mb-1">
                  03 / Narradora
                </span>
<span className="text-xl font-display font-light text-white uppercase tracking-wider">
                  Clara Vossen
                </span>
</div>
</div>
<div className="mt-6 flex flex-col space-y-2">
<span className="text-[0.65rem] tracking-widest uppercase text-zinc-500">
                Realismo Etéreo / Sombras
              </span>
<p className="text-xs text-zinc-400 font-light leading-relaxed">
                A mestra dos retratos oníricos. Clara captura expressões que
                transcendem a realidade palpável e as fixa na eternidade da
                derme.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black z-10" id="cta">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-gradient-to-t from-gold/10 to-transparent blur-[150px] pointer-events-none"></div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">

<div className="space-y-6" id="cta-headline-container">
<p className="text-xl md:text-3xl font-display font-extralight tracking-tight text-zinc-500 leading-normal" id="cta-phase-1">
            "Sua próxima tatuagem não começa com uma agulha."
          </p>
<p className="text-3xl md:text-6xl font-display font-light tracking-tight text-white uppercase leading-none opacity-0 scale-95 transition-all duration-1000" id="cta-phase-2">
            Começa com uma história.
          </p>
</div>

<div className="mt-16 opacity-0 transition-all duration-1000 delay-500" id="cta-button-container">
<a className="inline-flex items-center space-x-4 bg-zinc-950/80 border border-gold/40 text-gold hover:text-black hover:bg-gold px-8 py-5 text-sm uppercase tracking-[0.3em] font-light transition-all duration-500 group rounded-sm shadow-xl shadow-gold/5" href="https://wa.me/seunumerotatouage" target="_blank">
<span>Agendar minha consulta</span>
<iconify-icon className="text-lg group-hover:scale-110 transition-transform duration-300" icon="solar:calendar-linear"></iconify-icon>
</a>
<span className="block text-[0.65rem] text-zinc-600 mt-4 tracking-widest uppercase font-light">
            Cabines Privativas de Alta Exclusividade
          </span>
</div>
</div>

<footer className="absolute bottom-8 left-0 w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[0.65rem] tracking-widest uppercase font-light space-y-4 md:space-y-0">
<div>
<span>Bunker Tattoo © 2024</span>
</div>
<div className="flex space-x-6">
<a className="hover:text-gold transition-colors" href="#">Privacidade</a>
<a className="hover:text-gold transition-colors" href="#">Instagram</a>
<a className="hover:text-gold transition-colors" href="#">Vimeo</a>
</div>
</footer>
</section>



    </>
  );
}
