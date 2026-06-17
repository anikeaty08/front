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



  // ── Scroll reveals ──
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // ── Header scroll state ──
  const header = document.getElementById('header');
  const stickyCta = document.getElementById('sticky-cta');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 30) {
      header.style.backdropFilter = 'blur(14px)';
      header.style.background = 'rgba(248,241,231,0.85)';
      header.style.boxShadow = '0 1px 0 rgba(184,137,59,0.18)';
    } else {
      header.style.backdropFilter = 'blur(0px)';
      header.style.background = 'transparent';
      header.style.boxShadow = 'none';
    }
    stickyCta.style.transform = y > window.innerHeight * 0.8 ? 'translateY(0)' : 'translateY(100%)';
  }, { passive: true });

  // ── Golden star particles ──
  function seedStars(id, count, color) {
    const c = document.getElementById(id);
    if (!c) return;
    for (let i = 0; i < count; i++) {
      const s = document.createElement('div');
      const size = Math.random() * 3 + 1.5;
      s.style.cssText = `position:absolute;width:${size}px;height:${size}px;border-radius:50%;background:${color};left:${Math.random()*100}%;top:${Math.random()*100}%;animation:twinkle ${3+Math.random()*4}s ease-in-out ${Math.random()*4}s infinite;`;
      c.appendChild(s);
    }
  }
  seedStars('stars', 26, 'rgba(184,137,59,0.55)');
  seedStars('stars-dark', 30, 'rgba(216,174,94,0.6)');
  seedStars('stars-dark-2', 30, 'rgba(216,174,94,0.6)');
  seedStars('stars-dark-3', 24, 'rgba(216,174,94,0.6)');

  // ── Subtle parallax ──
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    parallaxEls.forEach(el => {
      const f = parseFloat(el.dataset.parallax);
      el.style.translate = `0 ${y * f * -0.5}px`;
    });
  }, { passive: true });

  // ── Report 3D tilt ──
  const tilt = document.getElementById('tilt-report');
  if (tilt && matchMedia('(pointer:fine)').matches) {
    tilt.parentElement.addEventListener('mousemove', e => {
      const r = tilt.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      tilt.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    });
    tilt.parentElement.addEventListener('mouseleave', () => { tilt.style.transform = 'rotateY(0) rotateX(0)'; });
  }

  // ── Choose a card experience ──
  const cards = document.querySelectorAll('.pick-card');
  const msgBox = document.getElementById('card-message');
  const msgText = document.getElementById('card-message-text');
  let picked = false;
  cards.forEach(card => {
    card.addEventListener('click', () => {
      if (picked) return;
      picked = true;
      card.classList.add('flipped');
      cards.forEach(c => { if (c !== card) c.classList.add('dimmed'); });
      setTimeout(() => {
        msgText.textContent = '"' + card.dataset.msg + '"';
        msgBox.style.opacity = '1';
        msgBox.style.transform = 'translateY(0)';
      }, 700);
    });
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
      

<header className="fixed top-0 inset-x-0 z-50 transition-all duration-500" id="header" style={{backdropFilter: 'blur(0px)'}}>
<div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20">
<a className="flex items-center gap-2.5" href="#">
<span className="w-8 h-8 rounded-full flex items-center justify-center border" style={{borderColor: 'rgba(184,137,59,0.45)'}}>
<iconify-icon className="text-base" icon="solar:moon-stars-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>
</span>
<span className="text-lg tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', letterSpacing: '0.18em', color: '#2B160C'}}>ESTELAR</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-xs font-medium" style={{color: '#7A4E1D'}}>
<a className="hover:opacity-70 transition-opacity" href="#relatorio">Relatório</a>
<a className="hover:opacity-70 transition-opacity" href="#clube">Clube Estelar</a>
<a className="hover:opacity-70 transition-opacity" href="#cartas">Escolha uma carta</a>
<a className="hover:opacity-70 transition-opacity" href="#como-funciona">Como funciona</a>
</nav>
<a className="inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 text-xs font-semibold transition-all hover:-translate-y-0.5 duration-300" href="https://wa.me/5500000000000?text=Olá!%20Quero%20receber%20minha%20leitura%20Estelar." style={{background: 'linear-gradient(135deg, #B8893B, #D8AE5E)', color: '#FFF9EF', boxShadow: '0 4px 18px rgba(184,137,59,0.35)'}}>
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
      Receber minha leitura
    </a>
</div>
</header>

<section className="relative overflow-hidden pt-28 sm:pt-36 pb-20 sm:pb-28" style={{background: 'radial-gradient(120% 90% at 50% 0%, #FFF9EF 0%, #F8F1E7 55%, #EFE1CF 100%)'}}>

<div className="absolute pointer-events-none" style={{top: '-180px', left: '50%', transform: 'translateX(-50%)', width: '680px', height: '680px', background: 'radial-gradient(circle, rgba(216,174,94,0.22) 0%, rgba(216,174,94,0) 65%)'}}></div>

<div className="absolute inset-0 pointer-events-none" id="stars"></div>

<div className="absolute pointer-events-none hidden sm:block" data-parallax="0.15" style={{top: '90px', right: '8%', width: '120px', height: '120px'}}>
<div className="w-full h-full rounded-full" style={{background: 'radial-gradient(circle at 35% 35%, #FFF9EF, #E6D3BC 70%)', boxShadow: 'inset -22px -10px 0 rgba(184, 137, 59, 0.18), 0 0 60px rgba(216,174,94,0.45)', animation: 'breathe 7s ease-in-out infinite'}}></div>
</div>
<div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">

<div className="text-center lg:text-left">
<div className="reveal inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium mb-7" style={{borderColor: 'rgba(184, 137, 59, 0.35)', color: '#7A4E1D', background: 'rgba(255,249,239,0.7)'}}>
<iconify-icon icon="solar:star-fall-minimalistic-2-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>
        Se isso apareceu para você, talvez não seja por acaso
      </div>
<h1 className="reveal text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', fontWeight: '500', color: '#2B160C', transitionDelay: '.08s'}}>
        Receba uma leitura feita para a <em className="not-italic" style={{color: '#B8893B', fontStyle: 'italic'}}>energia do seu</em> próximo ciclo.
      </h1>
<p className="reveal mt-6 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0" style={{color: '#7A4E1D', transitionDelay: '.16s'}}>
        Tarot intuitivo, orientação simbólica e um Relatório Estelar premium criado para o seu nome, o seu momento e a sua pergunta.
      </p>
<div className="reveal mt-9 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start" style={{transitionDelay: '.24s'}}>
<a className="group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold w-full sm:w-auto justify-center transition-all hover:-translate-y-0.5 duration-300" href="https://wa.me/5500000000000?text=Olá!%20Quero%20receber%20minha%20leitura%20Estelar." style={{background: 'linear-gradient(135deg, #B8893B, #D8AE5E)', color: '#FFF9EF', boxShadow: '0 8px 30px rgba(184,137,59,0.45)'}}>
          Receber minha leitura
          <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium border w-full sm:w-auto justify-center transition-colors hover:bg-white/60" href="#como-funciona" style={{borderColor: 'rgba(184,137,59,0.4)', color: '#7A4E1D'}}>
          Ver como funciona
        </a>
</div>
<div className="reveal mt-8 flex items-center justify-center lg:justify-start gap-5 text-xs" style={{color: '#7A4E1D', transitionDelay: '.32s'}}>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>Leitura personalizada</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>Relatório premium</span>
<span className="hidden sm:flex items-center gap-1.5"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>Sigilo total</span>
</div>
</div>

<div className="reveal relative h-[360px] sm:h-[440px]" style={{perspective: '1200px', transitionDelay: '.2s'}}>

<div className="absolute rounded-2xl border" data-parallax="0.06" style={{width: '150px', height: '230px', left: '6%', top: '18%', transform: 'rotate(-12deg)', background: 'linear-gradient(160deg, #FFF9EF, #EFE1CF)', borderColor: 'rgba(184, 137, 59, 0.4)', boxShadow: '0 24px 50px rgba(43,22,12,0.14)', animation: 'floatA 8s ease-in-out infinite'}}>
<div className="absolute inset-2.5 rounded-xl border flex items-center justify-center" style={{borderColor: 'rgba(184,137,59,0.35)'}}>
<iconify-icon className="text-3xl" icon="solar:moon-stars-linear" strokeWidth="1.5" style={{color: '#B8893B', opacity: '.7'}}></iconify-icon>
</div>
</div>

<div className="absolute rounded-2xl border" data-parallax="0.1" style={{width: '150px', height: '230px', right: '6%', top: '30%', transform: 'rotate(11deg)', background: 'linear-gradient(160deg, #FFF9EF, #EFE1CF)', borderColor: 'rgba(184, 137, 59, 0.4)', boxShadow: '0 24px 50px rgba(43,22,12,0.14)', animation: 'floatB 9s ease-in-out infinite'}}>
<div className="absolute inset-2.5 rounded-xl border flex items-center justify-center" style={{borderColor: 'rgba(184,137,59,0.35)'}}>
<iconify-icon className="text-3xl" icon="solar:stars-minimalistic-linear" strokeWidth="1.5" style={{color: '#B8893B', opacity: '.7'}}></iconify-icon>
</div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border z-10" style={{width: '200px', height: '300px', background: 'linear-gradient(170deg, #2B160C, #1B0E08)', borderColor: 'rgba(216, 174, 94, 0.5)', boxShadow: '0 35px 70px rgba(43, 22, 12, 0.35), 0 0 50px rgba(216,174,94,0.25)', animation: 'floatC 7s ease-in-out infinite'}}>
<div className="absolute inset-3 rounded-xl border flex flex-col items-center justify-center gap-3 px-4 text-center" style={{borderColor: 'rgba(216,174,94,0.4)'}}>
<iconify-icon className="text-4xl" icon="solar:moon-fog-linear" strokeWidth="1.5" style={{color: '#D8AE5E'}}></iconify-icon>
<p className="text-xs tracking-widest uppercase" style={{color: '#D8AE5E', letterSpacing: '0.25em'}}>Relatório</p>
<p className="text-xl tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', color: '#FFF9EF'}}>Estelar</p>
<div className="w-10 h-px" style={{background: 'rgba(216,174,94,0.5)'}}></div>
<p className="text-xs leading-relaxed" style={{color: 'rgba(255,249,239,0.65)'}}>Sua energia do mês, carta guia e mensagem personalizada</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 sm:py-32 overflow-hidden" style={{background: '#FFF9EF'}}>
<div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
<iconify-icon className="reveal text-2xl mb-6" icon="solar:heart-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>
<h2 className="reveal text-3xl sm:text-4xl lg:text-5xl leading-snug tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', fontWeight: '500'}}>
      Tem algo que não sai da sua cabeça?
    </h2>
<div className="mt-12 space-y-7 text-base sm:text-lg leading-relaxed" style={{color: '#7A4E1D'}}>
<p className="reveal">Você sente que precisa de clareza sobre uma situação — no amor, em uma decisão, em um ciclo que parece não fechar.</p>
<p className="reveal" style={{transitionDelay: '.1s'}}>Você procura sinais. Lê mensagens. Sente que algumas falam diretamente com você.</p>
<p className="reveal text-xl sm:text-2xl tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', color: '#2B160C', transitionDelay: '.2s'}}>
        Talvez você não precise de mais sinais.<br/><em style={{color: '#B8893B'}}>Talvez precise de uma leitura feita para você.</em>
</p>
</div>
<a className="reveal mt-12 inline-flex items-center gap-2 text-sm font-semibold border-b pb-1 transition-opacity hover:opacity-70" href="https://wa.me/5500000000000?text=Olá!%20Quero%20receber%20minha%20leitura%20Estelar." style={{color: '#B8893B', borderColor: 'rgba(184,137,59,0.5)', transitionDelay: '.3s'}}>
      Pedir minha leitura agora
      <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<section className="relative py-24 sm:py-32 overflow-hidden" id="relatorio" style={{background: 'linear-gradient(180deg,#F8F1E7,#EFE1CF)'}}>
<div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal order-2 lg:order-1 flex justify-center" style={{perspective: '1400px'}}>
<div className="relative transition-transform duration-300 ease-out" id="tilt-report" style={{transformStyle: 'preserve-3d'}}>
<div className="rounded-3xl border overflow-hidden" style={{width: '300px', background: '#FFF9EF', borderColor: 'rgba(184, 137, 59, 0.4)', boxShadow: '0 40px 80px rgba(43,22,12,0.22)'}}>
<div className="px-7 pt-8 pb-6 text-center" style={{background: 'linear-gradient(170deg,#2B160C,#3A2113)'}}>
<iconify-icon className="text-3xl" icon="solar:moon-stars-linear" strokeWidth="1.5" style={{color: '#D8AE5E'}}></iconify-icon>
<p className="mt-2 text-xs tracking-widest uppercase" style={{color: '#D8AE5E', letterSpacing: '0.3em'}}>Relatório Estelar</p>
<p className="mt-1 text-2xl tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', color: '#FFF9EF'}}>Marina · Março</p>
</div>
<div className="p-7 space-y-5 text-left">
<div>
<p className="text-xs font-semibold tracking-widest uppercase" style={{color: '#B8893B'}}>Energia do mês</p>
<p className="mt-1 text-sm" style={{color: '#2B160C', fontFamily: '\'Cormorant Garamond\', serif', fontSize: '1.05rem'}}>Recomeço silencioso e amadurecimento</p>
</div>
<div className="h-px" style={{background: 'rgba(184,137,59,0.25)'}}></div>
<div>
<p className="text-xs font-semibold tracking-widest uppercase" style={{color: '#B8893B'}}>Carta guia</p>
<p className="mt-1 text-sm" style={{color: '#2B160C', fontFamily: '\'Cormorant Garamond\', serif', fontSize: '1.05rem'}}>A Estrela — esperança que se constrói</p>
</div>
<div className="h-px" style={{background: 'rgba(184,137,59,0.25)'}}></div>
<div>
<p className="text-xs font-semibold tracking-widest uppercase" style={{color: '#B8893B'}}>Previsão amorosa</p>
<p className="mt-1 text-xs leading-relaxed" style={{color: '#7A4E1D'}}>Um ciclo de clareza se abre quando você para de esperar respostas externas...</p>
</div>
</div>
</div>

<div className="absolute -right-6 -bottom-5 rounded-2xl border px-4 py-3 flex items-center gap-2.5" style={{background: '#FFF9EF', borderColor: 'rgba(184, 137, 59, 0.4)', boxShadow: '0 16px 40px rgba(43, 22, 12, 0.18)', transform: 'translateZ(40px)'}}>
<iconify-icon className="text-xl" icon="solar:document-text-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>
<div>
<p className="text-xs font-semibold" style={{color: '#2B160C'}}>Feito com seu nome</p>
<p className="text-xs" style={{color: '#7A4E1D'}}>PDF premium colecionável</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<p className="reveal text-xs font-semibold tracking-widest uppercase mb-4" style={{color: '#B8893B', letterSpacing: '0.25em'}}>O que você recebe</p>
<h2 className="reveal text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', fontWeight: '500', transitionDelay: '.08s'}}>
        Relatório Estelar Personalizado
      </h2>
<p className="reveal mt-5 text-sm sm:text-base leading-relaxed" style={{color: '#7A4E1D', transitionDelay: '.16s'}}>
        Sua leitura não chega como uma mensagem qualquer. Ela vira um guia visual premium, feito para o seu nome e o seu momento — para você reler durante todo o mês.
      </p>
<ul className="mt-8 space-y-4">
<li className="reveal flex items-start gap-3" style={{transitionDelay: '.2s'}}><iconify-icon className="text-lg mt-0.5 shrink-0" icon="solar:star-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon><span className="text-sm leading-relaxed" style={{color: '#2B160C'}}><strong className="font-semibold">Energia principal do mês</strong> — o tema central do seu ciclo</span></li>
<li className="reveal flex items-start gap-3" style={{transitionDelay: '.26s'}}><iconify-icon className="text-lg mt-0.5 shrink-0" icon="solar:cards-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon><span className="text-sm leading-relaxed" style={{color: '#2B160C'}}><strong className="font-semibold">Carta guia</strong> — o arquétipo que ilumina suas decisões</span></li>
<li className="reveal flex items-start gap-3" style={{transitionDelay: '.32s'}}><iconify-icon className="text-lg mt-0.5 shrink-0" icon="solar:heart-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon><span className="text-sm leading-relaxed" style={{color: '#2B160C'}}><strong className="font-semibold">Previsão amorosa</strong> — orientação simbólica para o coração</span></li>
<li className="reveal flex items-start gap-3" style={{transitionDelay: '.38s'}}><iconify-icon className="text-lg mt-0.5 shrink-0" icon="solar:key-minimalistic-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon><span className="text-sm leading-relaxed" style={{color: '#2B160C'}}><strong className="font-semibold">Bloqueios e caminhos</strong> — o que pesa e o que se abre</span></li>
<li className="reveal flex items-start gap-3" style={{transitionDelay: '.44s'}}><iconify-icon className="text-lg mt-0.5 shrink-0" icon="solar:chat-round-dots-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon><span className="text-sm leading-relaxed" style={{color: '#2B160C'}}><strong className="font-semibold">Mensagem final personalizada</strong> — escrita para você, com seu nome</span></li>
</ul>
<a className="reveal mt-10 inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold transition-all hover:-translate-y-0.5 duration-300" href="https://wa.me/5500000000000?text=Olá!%20Quero%20meu%20Relatório%20Estelar%20Personalizado." style={{background: 'linear-gradient(135deg, #B8893B, #D8AE5E)', color: '#FFF9EF', boxShadow: '0 8px 30px rgba(184,137,59,0.4)', transitionDelay: '.5s'}}>
        Quero meu Relatório Estelar
        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative py-24 sm:py-32 overflow-hidden" id="clube" style={{background: 'linear-gradient(170deg,#1B0E08,#2B160C 60%,#3A2113)'}}>
<div className="absolute pointer-events-none" style={{top: '-200px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(216,174,94,0.15) 0%, transparent 65%)'}}></div>
<div className="absolute inset-0 pointer-events-none" id="stars-dark"></div>
<div className="relative max-w-6xl mx-auto px-5 sm:px-8">
<div className="text-center max-w-2xl mx-auto">
<p className="reveal text-xs font-semibold tracking-widest uppercase mb-4" style={{color: '#D8AE5E', letterSpacing: '0.25em'}}>Assinatura mensal</p>
<h2 className="reveal text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', fontWeight: '500', color: '#FFF9EF', transitionDelay: '.08s'}}>
        Clube Estelar
      </h2>
<p className="reveal mt-5 text-sm sm:text-base leading-relaxed" style={{color: 'rgba(255,249,239,0.65)', transitionDelay: '.16s'}}>
        Seu ritual mensal de tarot, clareza e orientação espiritual. Todo mês, uma leitura feita para a sua energia — para atravessar o ciclo com mais consciência.
      </p>
</div>
<div className="mt-14 grid lg:grid-cols-5 gap-8 items-center max-w-5xl mx-auto">

<div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
<div className="reveal rounded-2xl border p-5" style={{borderColor: 'rgba(216, 174, 94, 0.25)', background: 'rgba(255,249,239,0.04)'}}>
<iconify-icon className="text-2xl" icon="solar:document-text-linear" strokeWidth="1.5" style={{color: '#D8AE5E'}}></iconify-icon>
<p className="mt-3 text-sm font-semibold" style={{color: '#FFF9EF'}}>Leitura mensal personalizada</p>
<p className="mt-1 text-xs leading-relaxed" style={{color: 'rgba(255,249,239,0.55)'}}>Preparada para o seu nome e o seu tema do mês.</p>
</div>
<div className="reveal rounded-2xl border p-5" style={{borderColor: 'rgba(216, 174, 94, 0.25)', background: 'rgba(255,249,239,0.04)', transitionDelay: '.08s'}}>
<iconify-icon className="text-2xl" icon="solar:moon-stars-linear" strokeWidth="1.5" style={{color: '#D8AE5E'}}></iconify-icon>
<p className="mt-3 text-sm font-semibold" style={{color: '#FFF9EF'}}>Relatório Estelar premium</p>
<p className="mt-1 text-xs leading-relaxed" style={{color: 'rgba(255,249,239,0.55)'}}>Um guia visual lindo, para reler durante o ciclo.</p>
</div>
<div className="reveal rounded-2xl border p-5" style={{borderColor: 'rgba(216, 174, 94, 0.25)', background: 'rgba(255,249,239,0.04)', transitionDelay: '.16s'}}>
<iconify-icon className="text-2xl" icon="solar:headphones-round-linear" strokeWidth="1.5" style={{color: '#D8AE5E'}}></iconify-icon>
<p className="mt-3 text-sm font-semibold" style={{color: '#FFF9EF'}}>Áudio explicativo</p>
<p className="mt-1 text-xs leading-relaxed" style={{color: 'rgba(255,249,239,0.55)'}}>A leitura explicada com voz, calma e acolhimento.</p>
</div>
<div className="reveal rounded-2xl border p-5" style={{borderColor: 'rgba(216, 174, 94, 0.25)', background: 'rgba(255,249,239,0.04)', transitionDelay: '.24s'}}>
<iconify-icon className="text-2xl" icon="solar:crown-line-linear" strokeWidth="1.5" style={{color: '#D8AE5E'}}></iconify-icon>
<p className="mt-3 text-sm font-semibold" style={{color: '#FFF9EF'}}>Prioridade + bônus</p>
<p className="mt-1 text-xs leading-relaxed" style={{color: 'rgba(255,249,239,0.55)'}}>Atendimento prioritário e leituras sazonais exclusivas.</p>
</div>
</div>

<div className="reveal lg:col-span-2" style={{transitionDelay: '.2s'}}>
<div className="rounded-3xl border p-8 relative overflow-hidden" style={{background: 'linear-gradient(170deg, #FFF9EF, #EFE1CF)', borderColor: 'rgba(216, 174, 94, 0.6)', boxShadow: '0 30px 70px rgba(0, 0, 0, 0.4), 0 0 50px rgba(216,174,94,0.18)'}}>
<div className="absolute top-0 right-0 px-4 py-1.5 text-xs font-semibold rounded-bl-2xl" style={{background: 'linear-gradient(135deg,#B8893B,#D8AE5E)', color: '#FFF9EF'}}>Melhor escolha</div>
<p className="text-xs font-semibold tracking-widest uppercase" style={{color: '#B8893B', letterSpacing: '0.25em'}}>Clube Estelar Mensal</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-5xl tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', color: '#2B160C'}}>R$ XX</span>
<span className="text-sm" style={{color: '#7A4E1D'}}>/mês</span>
</div>
<p className="mt-2 text-xs" style={{color: '#7A4E1D'}}>Cancele quando quiser. Sem fidelidade.</p>
<ul className="mt-6 space-y-2.5 text-xs" style={{color: '#2B160C'}}>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>Leitura + relatório todo mês</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>Previsão energética do ciclo</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>Carta do mês + conselho espiritual</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>Conteúdos e mensagens exclusivas</li>
</ul>
<a className="mt-8 flex items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold w-full transition-all hover:-translate-y-0.5 duration-300" href="https://wa.me/5500000000000?text=Olá!%20Quero%20entrar%20para%20o%20Clube%20Estelar." style={{background: 'linear-gradient(135deg, #2B160C, #3A2113)', color: '#FFF9EF', boxShadow: '0 8px 24px rgba(43,22,12,0.4)'}}>
            Entrar para o Clube Estelar
            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32" style={{background: '#F8F1E7'}}>
<div className="max-w-6xl mx-auto px-5 sm:px-8">
<div className="text-center max-w-2xl mx-auto mb-14">
<p className="reveal text-xs font-semibold tracking-widest uppercase mb-4" style={{color: '#B8893B', letterSpacing: '0.25em'}}>Prefere começar com uma pergunta?</p>
<h2 className="reveal text-3xl sm:text-4xl tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', fontWeight: '500', transitionDelay: '.08s'}}>Leituras avulsas</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="reveal tilt-card rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1.5" style={{background: '#FFF9EF', borderColor: 'rgba(184, 137, 59, 0.3)', boxShadow: '0 10px 30px rgba(43,22,12,0.07)'}}>
<iconify-icon className="text-3xl" icon="solar:heart-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>
<h3 className="mt-4 text-xl tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', fontWeight: '600'}}>Leitura Amorosa</h3>
<p className="mt-2 text-xs leading-relaxed" style={{color: '#7A4E1D'}}>Para quem precisa de clareza sobre uma conexão: esperar, insistir ou seguir.</p>
<ul className="mt-5 space-y-2 text-xs" style={{color: '#2B160C'}}>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>Leitura focada no amor</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>Mensagem personalizada</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>Conselho simbólico</li>
</ul>
<a className="mt-7 inline-flex items-center gap-2 text-xs font-semibold border-b pb-1 transition-opacity hover:opacity-70" href="https://wa.me/5500000000000?text=Olá!%20Quero%20uma%20Leitura%20Amorosa." style={{color: '#B8893B', borderColor: 'rgba(184,137,59,0.5)'}}>Escolher esta leitura <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></a>
</div>

<div className="reveal tilt-card rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1.5" style={{background: '#FFF9EF', borderColor: 'rgba(184, 137, 59, 0.3)', boxShadow: '0 10px 30px rgba(43,22,12,0.07)', transitionDelay: '.1s'}}>
<iconify-icon className="text-3xl" icon="solar:stars-minimalistic-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>
<h3 className="mt-4 text-xl tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', fontWeight: '600'}}>Leitura Geral</h3>
<p className="mt-2 text-xs leading-relaxed" style={{color: '#7A4E1D'}}>Para quem sente que o momento pede uma visão ampla: energia, ciclos e direção.</p>
<ul className="mt-5 space-y-2 text-xs" style={{color: '#2B160C'}}>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>Panorama do seu momento</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>Bloqueios e caminhos</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>Mensagem final acolhedora</li>
</ul>
<a className="mt-7 inline-flex items-center gap-2 text-xs font-semibold border-b pb-1 transition-opacity hover:opacity-70" href="https://wa.me/5500000000000?text=Olá!%20Quero%20uma%20Leitura%20Geral." style={{color: '#B8893B', borderColor: 'rgba(184,137,59,0.5)'}}>Escolher esta leitura <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></a>
</div>

<div className="reveal tilt-card rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1.5" style={{background: '#FFF9EF', borderColor: 'rgba(184, 137, 59, 0.3)', boxShadow: '0 10px 30px rgba(43,22,12,0.07)', transitionDelay: '.2s'}}>
<iconify-icon className="text-3xl" icon="solar:routing-2-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>
<h3 className="mt-4 text-xl tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', fontWeight: '600'}}>Caminhos e Decisões</h3>
<p className="mt-2 text-xs leading-relaxed" style={{color: '#7A4E1D'}}>Para quem está diante de uma escolha importante e quer decidir com mais consciência.</p>
<ul className="mt-5 space-y-2 text-xs" style={{color: '#2B160C'}}>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>Leitura comparativa de caminhos</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>Orientação para a decisão</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>Conselho espiritual</li>
</ul>
<a className="mt-7 inline-flex items-center gap-2 text-xs font-semibold border-b pb-1 transition-opacity hover:opacity-70" href="https://wa.me/5500000000000?text=Olá!%20Quero%20a%20leitura%20Caminhos%20e%20Decisões." style={{color: '#B8893B', borderColor: 'rgba(184,137,59,0.5)'}}>Escolher esta leitura <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>

<div className="reveal mt-14 max-w-3xl mx-auto rounded-3xl border overflow-hidden" style={{borderColor: 'rgba(184,137,59,0.3)', background: '#FFF9EF'}}>
<div className="grid sm:grid-cols-2">
<div className="p-7 border-b sm:border-b-0 sm:border-r" style={{borderColor: 'rgba(184,137,59,0.25)'}}>
<p className="text-sm font-semibold" style={{color: '#7A4E1D'}}>Leitura avulsa</p>
<p className="mt-2 text-xs leading-relaxed" style={{color: '#7A4E1D'}}>Ideal para uma pergunta específica ou um momento pontual de clareza.</p>
</div>
<div className="p-7 relative" style={{background: 'linear-gradient(170deg,rgba(216,174,94,0.12),rgba(216,174,94,0.04))'}}>
<p className="text-sm font-semibold flex items-center gap-2" style={{color: '#2B160C'}}><iconify-icon icon="solar:crown-line-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>Clube Estelar</p>
<p className="mt-2 text-xs leading-relaxed" style={{color: '#7A4E1D'}}>Ideal para quem quer acompanhamento mensal, relatório premium e muito mais valor por menos.</p>
<a className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold" href="#clube" style={{color: '#B8893B'}}>Ver o clube <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 sm:py-32 overflow-hidden" id="cartas" style={{background: 'linear-gradient(170deg,#2B160C,#1B0E08)'}}>
<div className="absolute inset-0 pointer-events-none" id="stars-dark-2"></div>
<div className="absolute pointer-events-none" style={{bottom: '-250px', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '500px', background: 'radial-gradient(ellipse, rgba(216,174,94,0.12) 0%, transparent 65%)'}}></div>
<div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
<p className="reveal text-xs font-semibold tracking-widest uppercase mb-4" style={{color: '#D8AE5E', letterSpacing: '0.25em'}}>Um pequeno ritual</p>
<h2 className="reveal text-3xl sm:text-4xl lg:text-5xl tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', fontWeight: '500', color: '#FFF9EF', transitionDelay: '.08s'}}>
      Escolha uma carta
    </h2>
<p className="reveal mt-4 text-sm leading-relaxed max-w-md mx-auto" style={{color: 'rgba(255,249,239,0.6)', transitionDelay: '.16s'}}>
      Respire fundo. Pense no que mais pesa no seu coração agora. Depois, toque na carta que chamar você.
    </p>
<div className="reveal mt-12 flex justify-center gap-4 sm:gap-8" style={{perspective: '1200px', transitionDelay: '.24s'}}>

<button aria-label="Escolher a primeira carta" className="pick-card relative w-24 h-40 sm:w-36 sm:h-56 cursor-pointer focus:outline-none rounded-2xl" data-msg="Existe algo florescendo, mas você precisa parar de duvidar do seu próprio tempo." style={{transformStyle: 'preserve-3d', transition: 'transform .8s cubic-bezier(.2,.8,.25,1)'}}>
<span className="absolute inset-0 rounded-2xl border flex items-center justify-center" style={{backfaceVisibility: 'hidden', background: 'linear-gradient(160deg, #3A2113, #2B160C)', borderColor: 'rgba(216, 174, 94, 0.5)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)'}}>
<span className="absolute inset-2 rounded-xl border flex items-center justify-center" style={{borderColor: 'rgba(216,174,94,0.35)'}}>
<iconify-icon className="text-2xl sm:text-3xl" icon="solar:moon-stars-linear" strokeWidth="1.5" style={{color: '#D8AE5E'}}></iconify-icon>
</span>
</span>
<span className="absolute inset-0 rounded-2xl border flex items-center justify-center px-3" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: 'linear-gradient(160deg, #FFF9EF, #EFE1CF)', borderColor: 'rgba(216, 174, 94, 0.7)', boxShadow: '0 20px 50px rgba(216,174,94,0.25)'}}>
<iconify-icon className="text-2xl sm:text-4xl" icon="solar:sun-2-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>
</span>
</button>
<button aria-label="Escolher a segunda carta" className="pick-card relative w-24 h-40 sm:w-36 sm:h-56 cursor-pointer focus:outline-none rounded-2xl sm:-translate-y-3" data-msg="A resposta que você procura talvez esteja no silêncio que você vem evitando." style={{transformStyle: 'preserve-3d', transition: 'transform .8s cubic-bezier(.2,.8,.25,1)'}}>
<span className="absolute inset-0 rounded-2xl border flex items-center justify-center" style={{backfaceVisibility: 'hidden', background: 'linear-gradient(160deg, #3A2113, #2B160C)', borderColor: 'rgba(216, 174, 94, 0.5)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)'}}>
<span className="absolute inset-2 rounded-xl border flex items-center justify-center" style={{borderColor: 'rgba(216,174,94,0.35)'}}>
<iconify-icon className="text-2xl sm:text-3xl" icon="solar:moon-stars-linear" strokeWidth="1.5" style={{color: '#D8AE5E'}}></iconify-icon>
</span>
</span>
<span className="absolute inset-0 rounded-2xl border flex items-center justify-center px-3" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: 'linear-gradient(160deg, #FFF9EF, #EFE1CF)', borderColor: 'rgba(216, 174, 94, 0.7)', boxShadow: '0 20px 50px rgba(216,174,94,0.25)'}}>
<iconify-icon className="text-2xl sm:text-4xl" icon="solar:moon-fog-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>
</span>
</button>
<button aria-label="Escolher a terceira carta" className="pick-card relative w-24 h-40 sm:w-36 sm:h-56 cursor-pointer focus:outline-none rounded-2xl" data-msg="Uma mudança quer abrir espaço para algo mais alinhado com você." style={{transformStyle: 'preserve-3d', transition: 'transform .8s cubic-bezier(.2,.8,.25,1)'}}>
<span className="absolute inset-0 rounded-2xl border flex items-center justify-center" style={{backfaceVisibility: 'hidden', background: 'linear-gradient(160deg, #3A2113, #2B160C)', borderColor: 'rgba(216, 174, 94, 0.5)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)'}}>
<span className="absolute inset-2 rounded-xl border flex items-center justify-center" style={{borderColor: 'rgba(216,174,94,0.35)'}}>
<iconify-icon className="text-2xl sm:text-3xl" icon="solar:moon-stars-linear" strokeWidth="1.5" style={{color: '#D8AE5E'}}></iconify-icon>
</span>
</span>
<span className="absolute inset-0 rounded-2xl border flex items-center justify-center px-3" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: 'linear-gradient(160deg, #FFF9EF, #EFE1CF)', borderColor: 'rgba(216, 174, 94, 0.7)', boxShadow: '0 20px 50px rgba(216,174,94,0.25)'}}>
<iconify-icon className="text-2xl sm:text-4xl" icon="solar:star-fall-minimalistic-2-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>
</span>
</button>
</div>

<div aria-live="polite" className="max-w-md mx-auto opacity-0 translate-y-4 transition-all duration-700 mt-10" id="card-message">
<p className="text-xl sm:text-2xl leading-relaxed tracking-tight" id="card-message-text" style={{fontFamily: '\'Cormorant Garamond\', serif', color: '#FFF9EF', fontStyle: 'italic'}}></p>
<p className="mt-6 text-xs" style={{color: 'rgba(255,249,239,0.55)'}}>Essa é apenas uma mensagem simbólica. A sua leitura completa é feita para você.</p>
<a className="mt-7 inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold transition-all hover:-translate-y-0.5 duration-300" href="https://wa.me/5500000000000?text=Olá!%20Escolhi%20uma%20carta%20e%20quero%20minha%20leitura%20completa." style={{background: 'linear-gradient(135deg, #B8893B, #D8AE5E)', color: '#FFF9EF', boxShadow: '0 8px 30px rgba(216,174,94,0.35)'}}>
        Quero uma leitura feita para a minha energia
        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 sm:py-32" style={{background: '#FFF9EF'}}>
<div className="max-w-6xl mx-auto px-5 sm:px-8">
<div className="text-center mb-14">
<p className="reveal text-xs font-semibold tracking-widest uppercase mb-4" style={{color: '#B8893B', letterSpacing: '0.25em'}}>Quem já recebeu</p>
<h2 className="reveal text-3xl sm:text-4xl tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', fontWeight: '500', transitionDelay: '.08s'}}>Mensagens que pareciam escritas para elas</h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
<figure className="reveal rounded-3xl border p-6 flex flex-col" style={{background: '#F8F1E7', borderColor: 'rgba(184,137,59,0.25)'}}>
<iconify-icon className="text-xl mb-4" icon="solar:chat-square-like-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>
<blockquote className="text-sm leading-relaxed flex-1" style={{color: '#2B160C'}}>"Parecia que a leitura tinha sido escrita exatamente para o momento que eu estava vivendo."</blockquote>
<figcaption className="mt-5 text-xs" style={{color: '#7A4E1D'}}><span className="font-semibold" style={{color: '#2B160C'}}>Camila R.</span> · 29 · Leitura amorosa</figcaption>
</figure>
<figure className="reveal rounded-3xl border p-6 flex flex-col" style={{background: '#F8F1E7', borderColor: 'rgba(184,137,59,0.25)', transitionDelay: '.08s'}}>
<iconify-icon className="text-xl mb-4" icon="solar:chat-square-like-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>
<blockquote className="text-sm leading-relaxed flex-1" style={{color: '#2B160C'}}>"O relatório é lindo. Eu salvei no celular e reli várias vezes durante o mês."</blockquote>
<figcaption className="mt-5 text-xs" style={{color: '#7A4E1D'}}><span className="font-semibold" style={{color: '#2B160C'}}>Letícia M.</span> · 34 · Clube Estelar</figcaption>
</figure>
<figure className="reveal rounded-3xl border p-6 flex flex-col" style={{background: '#F8F1E7', borderColor: 'rgba(184,137,59,0.25)', transitionDelay: '.16s'}}>
<iconify-icon className="text-xl mb-4" icon="solar:chat-square-like-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>
<blockquote className="text-sm leading-relaxed flex-1" style={{color: '#2B160C'}}>"Foi uma leitura acolhedora, clara e muito mais profunda do que eu esperava."</blockquote>
<figcaption className="mt-5 text-xs" style={{color: '#7A4E1D'}}><span className="font-semibold" style={{color: '#2B160C'}}>Ana P.</span> · Leitura geral</figcaption>
</figure>
<figure className="reveal rounded-3xl border p-6 flex flex-col" style={{background: '#F8F1E7', borderColor: 'rgba(184,137,59,0.25)', transitionDelay: '.24s'}}>
<iconify-icon className="text-xl mb-4" icon="solar:chat-square-like-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon>
<blockquote className="text-sm leading-relaxed flex-1" style={{color: '#2B160C'}}>"Me ajudou a olhar para uma situação amorosa com mais calma e consciência."</blockquote>
<figcaption className="mt-5 text-xs" style={{color: '#7A4E1D'}}><span className="font-semibold" style={{color: '#2B160C'}}>Juliana S.</span> · 26 · Caminhos e decisões</figcaption>
</figure>
</div>
</div>
</section>

<section className="py-24 sm:py-32" id="como-funciona" style={{background: 'linear-gradient(180deg,#F8F1E7,#EFE1CF)'}}>
<div className="max-w-5xl mx-auto px-5 sm:px-8">
<div className="text-center mb-14">
<p className="reveal text-xs font-semibold tracking-widest uppercase mb-4" style={{color: '#B8893B', letterSpacing: '0.25em'}}>Simples e acolhedor</p>
<h2 className="reveal text-3xl sm:text-4xl tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', fontWeight: '500', transitionDelay: '.08s'}}>Como funciona</h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="reveal rounded-3xl border p-6" style={{background: '#FFF9EF', borderColor: 'rgba(184,137,59,0.3)'}}>
<span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold" style={{background: 'rgba(216,174,94,0.18)', color: '#B8893B', fontFamily: '\'Cormorant Garamond\', serif'}}>1</span>
<p className="mt-4 text-sm font-semibold" style={{color: '#2B160C'}}>Escolha seu caminho</p>
<p className="mt-1.5 text-xs leading-relaxed" style={{color: '#7A4E1D'}}>Uma leitura avulsa ou o Clube Estelar mensal.</p>
</div>
<div className="reveal rounded-3xl border p-6" style={{background: '#FFF9EF', borderColor: 'rgba(184,137,59,0.3)', transitionDelay: '.08s'}}>
<span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold" style={{background: 'rgba(216,174,94,0.18)', color: '#B8893B', fontFamily: '\'Cormorant Garamond\', serif'}}>2</span>
<p className="mt-4 text-sm font-semibold" style={{color: '#2B160C'}}>Envie nome e tema</p>
<p className="mt-1.5 text-xs leading-relaxed" style={{color: '#7A4E1D'}}>Pelo WhatsApp, você conta o que pesa no seu coração.</p>
</div>
<div className="reveal rounded-3xl border p-6" style={{background: '#FFF9EF', borderColor: 'rgba(184,137,59,0.3)', transitionDelay: '.16s'}}>
<span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold" style={{background: 'rgba(216,174,94,0.18)', color: '#B8893B', fontFamily: '\'Cormorant Garamond\', serif'}}>3</span>
<p className="mt-4 text-sm font-semibold" style={{color: '#2B160C'}}>Sua leitura é preparada</p>
<p className="mt-1.5 text-xs leading-relaxed" style={{color: '#7A4E1D'}}>Com atenção, intuição e cuidado para o seu momento.</p>
</div>
<div className="reveal rounded-3xl border p-6" style={{background: '#FFF9EF', borderColor: 'rgba(184,137,59,0.3)', transitionDelay: '.24s'}}>
<span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold" style={{background: 'rgba(216,174,94,0.18)', color: '#B8893B', fontFamily: '\'Cormorant Garamond\', serif'}}>4</span>
<p className="mt-4 text-sm font-semibold" style={{color: '#2B160C'}}>Receba sua mensagem</p>
<p className="mt-1.5 text-xs leading-relaxed" style={{color: '#7A4E1D'}}>Relatório premium, áudio explicativo e orientação clara.</p>
</div>
</div>
<div className="reveal text-center mt-12" style={{transitionDelay: '.3s'}}>
<a className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold transition-all hover:-translate-y-0.5 duration-300" href="https://wa.me/5500000000000?text=Olá!%20Quero%20começar%20minha%20leitura%20Estelar." style={{background: 'linear-gradient(135deg, #B8893B, #D8AE5E)', color: '#FFF9EF', boxShadow: '0 8px 30px rgba(184,137,59,0.4)'}}>
        Começar pelo WhatsApp
        <iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 sm:py-24" style={{background: '#FFF9EF'}}>
<div className="max-w-5xl mx-auto px-5 sm:px-8">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 text-center">
<div className="reveal"><iconify-icon className="text-2xl" icon="solar:pen-new-square-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon><p className="mt-3 text-sm font-semibold">100% personalizada</p><p className="mt-1 text-xs" style={{color: '#7A4E1D'}}>Feita para o seu nome e tema</p></div>
<div className="reveal" style={{transitionDelay: '.08s'}}><iconify-icon className="text-2xl" icon="solar:lock-keyhole-minimalistic-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon><p className="mt-3 text-sm font-semibold">Sigilo absoluto</p><p className="mt-1 text-xs" style={{color: '#7A4E1D'}}>Sua história fica entre nós</p></div>
<div className="reveal" style={{transitionDelay: '.16s'}}><iconify-icon className="text-2xl" icon="solar:palette-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon><p className="mt-3 text-sm font-semibold">Entrega premium</p><p className="mt-1 text-xs" style={{color: '#7A4E1D'}}>Relatório visual colecionável</p></div>
<div className="reveal" style={{transitionDelay: '.24s'}}><iconify-icon className="text-2xl" icon="solar:hand-heart-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon><p className="mt-3 text-sm font-semibold">Atendimento humano</p><p className="mt-1 text-xs" style={{color: '#7A4E1D'}}>Acolhedor, claro e sem julgamentos</p></div>
</div>
</div>
</section>

<section className="py-24 sm:py-32" style={{background: '#F8F1E7'}}>
<div className="max-w-2xl mx-auto px-5 sm:px-8">
<div className="text-center mb-12">
<p className="reveal text-xs font-semibold tracking-widest uppercase mb-4" style={{color: '#B8893B', letterSpacing: '0.25em'}}>Dúvidas frequentes</p>
<h2 className="reveal text-3xl sm:text-4xl tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', fontWeight: '500', transitionDelay: '.08s'}}>Antes de pedir sua leitura</h2>
</div>
<div className="reveal space-y-3">
<details className="faq group rounded-2xl border overflow-hidden" style={{background: '#FFF9EF', borderColor: 'rgba(184,137,59,0.3)'}}>
<summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-sm font-semibold" style={{color: '#2B160C'}}>A leitura é realmente personalizada?<iconify-icon className="shrink-0 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon></summary>
<p className="px-6 pb-5 text-xs leading-relaxed" style={{color: '#7A4E1D'}}>Sim. Cada leitura é preparada individualmente a partir do seu nome e do tema que você enviar. Nada é automático ou genérico.</p>
</details>
<details className="faq group rounded-2xl border overflow-hidden" style={{background: '#FFF9EF', borderColor: 'rgba(184,137,59,0.3)'}}>
<summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-sm font-semibold" style={{color: '#2B160C'}}>Como recebo meu Relatório Estelar?<iconify-icon className="shrink-0 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon></summary>
<p className="px-6 pb-5 text-xs leading-relaxed" style={{color: '#7A4E1D'}}>Você recebe pelo WhatsApp, em formato PDF premium — feito para salvar, reler e consultar durante todo o mês.</p>
</details>
<details className="faq group rounded-2xl border overflow-hidden" style={{background: '#FFF9EF', borderColor: 'rgba(184,137,59,0.3)'}}>
<summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-sm font-semibold" style={{color: '#2B160C'}}>Em quanto tempo recebo minha leitura?<iconify-icon className="shrink-0 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon></summary>
<p className="px-6 pb-5 text-xs leading-relaxed" style={{color: '#7A4E1D'}}>Em geral, dentro de 24 a 48 horas. Assinantes do Clube Estelar têm prioridade no atendimento.</p>
</details>
<details className="faq group rounded-2xl border overflow-hidden" style={{background: '#FFF9EF', borderColor: 'rgba(184,137,59,0.3)'}}>
<summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-sm font-semibold" style={{color: '#2B160C'}}>Posso perguntar sobre amor?<iconify-icon className="shrink-0 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon></summary>
<p className="px-6 pb-5 text-xs leading-relaxed" style={{color: '#7A4E1D'}}>Sim. Questões amorosas são um dos temas mais procurados. A leitura traz orientação simbólica para você enxergar a situação com mais clareza — sem promessas absolutas.</p>
</details>
<details className="faq group rounded-2xl border overflow-hidden" style={{background: '#FFF9EF', borderColor: 'rgba(184,137,59,0.3)'}}>
<summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-sm font-semibold" style={{color: '#2B160C'}}>Preciso entender de tarot?<iconify-icon className="shrink-0 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon></summary>
<p className="px-6 pb-5 text-xs leading-relaxed" style={{color: '#7A4E1D'}}>Não. Tudo é explicado em linguagem clara, no relatório e no áudio. Você só precisa estar aberta a receber a mensagem.</p>
</details>
<details className="faq group rounded-2xl border overflow-hidden" style={{background: '#FFF9EF', borderColor: 'rgba(184,137,59,0.3)'}}>
<summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-sm font-semibold" style={{color: '#2B160C'}}>O atendimento é sigiloso?<iconify-icon className="shrink-0 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon></summary>
<p className="px-6 pb-5 text-xs leading-relaxed" style={{color: '#7A4E1D'}}>Completamente. Sua história, suas perguntas e sua leitura ficam apenas entre você e a ESTELAR.</p>
</details>
<details className="faq group rounded-2xl border overflow-hidden" style={{background: '#FFF9EF', borderColor: 'rgba(184,137,59,0.3)'}}>
<summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-sm font-semibold" style={{color: '#2B160C'}}>Posso cancelar o Clube Estelar quando quiser?<iconify-icon className="shrink-0 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon></summary>
<p className="px-6 pb-5 text-xs leading-relaxed" style={{color: '#7A4E1D'}}>Sim. Não há fidelidade. Você pode pausar ou cancelar a qualquer momento, sem burocracia.</p>
</details>
<details className="faq group rounded-2xl border overflow-hidden" style={{background: '#FFF9EF', borderColor: 'rgba(184,137,59,0.3)'}}>
<summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-sm font-semibold" style={{color: '#2B160C'}}>A leitura substitui terapia ou aconselhamento profissional?<iconify-icon className="shrink-0 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon></summary>
<p className="px-6 pb-5 text-xs leading-relaxed" style={{color: '#7A4E1D'}}>Não. As leituras têm caráter simbólico, espiritual e reflexivo, voltadas para autoconhecimento e orientação pessoal. Não substituem aconselhamento médico, psicológico, jurídico ou financeiro.</p>
</details>
<details className="faq group rounded-2xl border overflow-hidden" style={{background: '#FFF9EF', borderColor: 'rgba(184,137,59,0.3)'}}>
<summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-sm font-semibold" style={{color: '#2B160C'}}>O que acontece depois que clico no WhatsApp?<iconify-icon className="shrink-0 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{color: '#B8893B'}}></iconify-icon></summary>
<p className="px-6 pb-5 text-xs leading-relaxed" style={{color: '#7A4E1D'}}>Você será acolhida com calma. Vamos perguntar seu nome e o tema do seu coração, apresentar as opções e, quando você confirmar, sua leitura começa a ser preparada.</p>
</details>
</div>
</div>
</section>

<section className="relative py-28 sm:py-36 overflow-hidden" style={{background: 'linear-gradient(170deg,#2B160C,#1B0E08)'}}>
<div className="absolute inset-0 pointer-events-none" id="stars-dark-3"></div>
<div className="absolute pointer-events-none" style={{top: '-200px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(216,174,94,0.18) 0%, transparent 65%)'}}></div>
<div className="relative max-w-2xl mx-auto px-5 sm:px-8 text-center">
<div className="reveal w-14 h-14 mx-auto rounded-full flex items-center justify-center border mb-8" style={{borderColor: 'rgba(216,174,94,0.4)'}}>
<iconify-icon className="text-2xl" icon="solar:moon-stars-linear" strokeWidth="1.5" style={{color: '#D8AE5E'}}></iconify-icon>
</div>
<h2 className="reveal text-4xl sm:text-5xl leading-tight tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', fontWeight: '500', color: '#FFF9EF', transitionDelay: '.08s'}}>
      Seu próximo ciclo pode começar com mais clareza.
    </h2>
<p className="reveal mt-6 text-sm sm:text-base leading-relaxed" style={{color: 'rgba(255,249,239,0.65)', transitionDelay: '.16s'}}>
      Receba uma leitura personalizada e um Relatório Estelar premium criado para a sua energia. Se algo dentro de você pediu uma resposta, comece por aqui.
    </p>
<div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={{transitionDelay: '.24s'}}>
<a className="inline-flex items-center gap-2.5 rounded-full px-9 py-4 text-sm font-semibold w-full sm:w-auto justify-center transition-all hover:-translate-y-0.5 duration-300" href="https://wa.me/5500000000000?text=Olá!%20Quero%20receber%20minha%20leitura%20Estelar%20agora." style={{background: 'linear-gradient(135deg, #B8893B, #D8AE5E)', color: '#FFF9EF', boxShadow: '0 10px 40px rgba(216,174,94,0.4)', animation: 'glowPulse 3s ease-in-out infinite'}}>
        Receber minha leitura agora
        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium border w-full sm:w-auto justify-center transition-colors hover:bg-white/5" href="#clube" style={{borderColor: 'rgba(216,174,94,0.4)', color: '#D8AE5E'}}>
        Entrar para o Clube Estelar
      </a>
</div>
<p className="reveal mt-8 text-xs" style={{color: 'rgba(255,249,239,0.4)', transitionDelay: '.32s'}}>Vagas de leitura limitadas por semana, para garantir cuidado em cada entrega.</p>
</div>
</section>

<footer className="py-14" style={{background: '#140B07'}}>
<div className="max-w-6xl mx-auto px-5 sm:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div className="text-center md:text-left">
<p className="text-lg tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', letterSpacing: '0.18em', color: '#FFF9EF'}}>ESTELAR</p>
<p className="mt-1 text-xs" style={{color: 'rgba(255,249,239,0.45)'}}>Um ritual mensal de tarot, intuição e autoconhecimento.</p>
</div>
<div className="flex items-center gap-3">
<a aria-label="Instagram" className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:bg-white/5" href="#" style={{borderColor: 'rgba(216,174,94,0.3)'}}><iconify-icon icon="solar:camera-linear" strokeWidth="1.5" style={{color: '#D8AE5E'}}></iconify-icon></a>
<a aria-label="TikTok" className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:bg-white/5" href="#" style={{borderColor: 'rgba(216,174,94,0.3)'}}><iconify-icon icon="solar:music-note-linear" strokeWidth="1.5" style={{color: '#D8AE5E'}}></iconify-icon></a>
<a aria-label="WhatsApp" className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:bg-white/5" href="https://wa.me/5500000000000" style={{borderColor: 'rgba(216,174,94,0.3)'}}><iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" style={{color: '#D8AE5E'}}></iconify-icon></a>
</div>
<div className="flex items-center gap-6 text-xs" style={{color: 'rgba(255,249,239,0.45)'}}>
<a className="hover:opacity-70 transition-opacity" href="#">Privacidade</a>
<a className="hover:opacity-70 transition-opacity" href="#">Termos</a>
</div>
</div>
<div className="mt-10 pt-8 border-t text-center" style={{borderColor: 'rgba(216,174,94,0.15)'}}>
<p className="text-xs leading-relaxed max-w-2xl mx-auto" style={{color: 'rgba(255,249,239,0.35)'}}>As leituras têm caráter simbólico, espiritual e reflexivo, voltadas para autoconhecimento e orientação pessoal. Não substituem aconselhamento médico, psicológico, jurídico ou financeiro.</p>
<p className="mt-4 text-xs" style={{color: 'rgba(255,249,239,0.3)'}}>© 2025 ESTELAR. Todos os direitos reservados.</p>
</div>
</div>
</footer>

<div className="fixed bottom-0 inset-x-0 z-50 p-4 md:hidden translate-y-full transition-transform duration-500" id="sticky-cta" style={{background: 'linear-gradient(to top, rgba(248, 241, 231, 0.98), rgba(248, 241, 231, 0.92))', backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(184,137,59,0.25)'}}>
<a className="flex items-center justify-center gap-2.5 rounded-full py-4 text-sm font-semibold w-full" href="https://wa.me/5500000000000?text=Olá!%20Quero%20receber%20minha%20leitura%20Estelar." style={{background: 'linear-gradient(135deg, #B8893B, #D8AE5E)', color: '#FFF9EF', boxShadow: '0 8px 24px rgba(184,137,59,0.4)'}}>
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
    Receber minha leitura
  </a>
</div>
<style>
  @keyframes floatA { 0%,100%{transform:rotate(-12deg) translateY(0);} 50%{transform:rotate(-12deg) translateY(-14px);} }
  @keyframes floatB { 0%,100%{transform:rotate(11deg) translateY(0);} 50%{transform:rotate(11deg) translateY(-18px);} }
  @keyframes floatC { 0%,100%{transform:translate(-50%,-50%) translateY(0);} 50%{transform:translate(-50%,-50%) translateY(-12px);} }
  @keyframes breathe { 0%,100%{transform:scale(1);opacity:.95;} 50%{transform:scale(1.04);opacity:1;} }
  @keyframes twinkle { 0%,100%{opacity:.2;} 50%{opacity:.9;} }
  @keyframes glowPulse { 0%,100%{box-shadow:0 10px 40px rgba(216,174,94,0.4);} 50%{box-shadow:0 10px 55px rgba(216,174,94,0.65);} }
  .reveal { opacity:0; transform:translateY(28px); transition:opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1); }
  .reveal.in { opacity:1; transform:translateY(0); }
  .pick-card.flipped { transform:rotateY(180deg) scale(1.06) !important; }
  .pick-card.dimmed { opacity:.35; transform:scale(.92); pointer-events:none; }
  details.faq summary::-webkit-details-marker { display:none; }
</style>


    </>
  );
}
