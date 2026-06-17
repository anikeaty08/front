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



        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // Hero Animation
            const tl = gsap.timeline();
            tl.from(".hero-elem", { 
                y: 30, 
                opacity: 0, 
                duration: 1, 
                stagger: 0.15, 
                ease: "power3.out", 
                delay: 0.2 
            });

            // Scroll Reveal Animation
            gsap.utils.toArray('.reveal-up').forEach(elem => {
                gsap.from(elem, {
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });

            // Header Blur on Scroll
            const header = document.querySelector('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('bg-zinc-950/80');
                    header.classList.remove('bg-transparent');
                } else {
                    header.classList.remove('bg-zinc-950/80');
                    header.classList.add('bg-transparent');
                }
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
      

<header className="fixed top-0 left-0 w-full z-50 glass-header transition-all duration-300 py-4">
<div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
<a className="font-syne font-medium text-lg tracking-tighter uppercase text-white" href="#">
                ALTUS JUS
            </a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#evento">O Evento</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#diferenciais">Diferenciais</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#publico">Público</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center gap-2 bg-white text-black text-xs font-medium px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-all duration-300" href="#inscricao">
                Garantir Vaga
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-zinc-300">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Justice Background" className="w-full h-full object-cover opacity-[0.15] mix-blend-luminosity" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
</div>
<div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
<div className="hero-elem inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-300 tracking-tight">I Congresso em São Luís / MA</span>
</div>
<h1 className="hero-elem text-4xl md:text-6xl lg:text-7xl font-syne font-medium tracking-tighter text-gradient leading-[1.1] max-w-5xl mb-6">
                Onde as Ciências Criminais encontram a <span className="text-white">Segurança Pública.</span>
</h1>
<p className="hero-elem text-sm md:text-base text-zinc-400 font-light max-w-2xl mb-10 leading-relaxed">
                Um evento pioneiro do Instituto Altus Jus. A expertise de 22 anos em segurança pública aliada a 20 anos de docência, reunindo os maiores nomes nacionais e internacionais do direito.
            </p>
<div className="hero-elem flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black text-sm font-medium px-8 py-4 rounded-full hover:bg-zinc-200 transition-all duration-300" href="#inscricao">
                    Inscrever-se no Evento
                    <iconify-icon icon="solar:ticket-sale-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white text-sm font-medium px-8 py-4 rounded-full border border-zinc-800 hover:bg-zinc-900 transition-all duration-300" href="#evento">
                    Conhecer a Programação
                </a>
</div>
<div className="hero-elem mt-16 pt-8 border-t border-zinc-900 w-full max-w-3xl flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
<div className="text-center">
<p className="text-2xl font-syne font-medium text-white tracking-tighter">1º</p>
<p className="text-xs text-zinc-500 font-medium mt-1">Edição Histórica</p>
</div>
<div className="text-center">
<p className="text-2xl font-syne font-medium text-white tracking-tighter">Nacional</p>
<p className="text-xs text-zinc-500 font-medium mt-1">E Internacional</p>
</div>
<div className="text-center">
<p className="text-2xl font-syne font-medium text-white tracking-tighter">20+</p>
<p className="text-xs text-zinc-500 font-medium mt-1">Anos de Expertise</p>
</div>
</div>
</div>
</section>

<div className="border-y border-zinc-900 py-6 bg-zinc-950/50">
<div className="marquee-container">
<div className="marquee-content items-center gap-16 text-zinc-600 font-syne tracking-tighter text-lg uppercase">
<span>Direito Penal</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<span>Criminologia</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<span>Segurança Pública</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<span>Perícia Criminal</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<span>Defensoria</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<span>Magistratura</span>
</div>
<div aria-hidden="true" className="marquee-content items-center gap-16 text-zinc-600 font-syne tracking-tighter text-lg uppercase">
<span>Direito Penal</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<span>Criminologia</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<span>Segurança Pública</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<span>Perícia Criminal</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<span>Defensoria</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<span>Magistratura</span>
</div>
</div>
</div>

<section className="py-24 md:py-32 relative">
<div className="container mx-auto px-6 md:px-12 text-center reveal-up">
<iconify-icon className="text-zinc-800 mb-6 mx-auto" icon="solar:quote-right-linear" width="48"></iconify-icon>
<h2 className="text-2xl md:text-4xl font-syne font-medium text-white tracking-tighter max-w-4xl mx-auto leading-tight">
                "Entre o crime e a sentença existe um caminho: <span className="text-zinc-500">o Direito.</span>"
            </h2>
<p className="mt-6 text-sm text-zinc-500 tracking-tight uppercase font-medium">Instituto Altus Jus</p>
</div>
</section>

<section className="py-24 bg-[#050505]" id="diferenciais">
<div className="container mx-auto px-6 md:px-12">
<div className="mb-16 reveal-up">
<h2 className="text-3xl md:text-4xl font-syne font-medium text-white tracking-tighter mb-4">A excelência como norma.</h2>
<p className="text-sm text-zinc-400 font-light max-w-xl">Um projeto desenhado para quem não se contenta com o básico. Exclusividade e conhecimento profundo em uma estrutura premium.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">

<div className="glass-card rounded-2xl p-8 col-span-1 md:col-span-2 relative overflow-hidden group reveal-up">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-end">
<div className="w-12 h-12 rounded-full border border-zinc-700 bg-black/50 flex items-center justify-center mb-4 backdrop-blur-md">
<iconify-icon className="text-white" icon="solar:global-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-syne font-medium text-white tracking-tight mb-2">Palestrantes de Elite</h3>
<p className="text-sm text-zinc-400 font-light max-w-md">Grandes autores e profissionais do circuito nacional e internacional, trazendo perspectivas reais e atuais das carreiras jurídicas e policiais.</p>
</div>
</div>

<div className="glass-card rounded-2xl p-8 col-span-1 relative overflow-hidden reveal-up">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-900/20 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<iconify-icon className="text-zinc-300" icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
<div>
<h3 className="text-xl font-syne font-medium text-white tracking-tight mb-2">Networking de Excelência</h3>
<p className="text-xs text-zinc-400 font-light">Conecte-se com autoridades, delegados, juízes, promotores e acadêmicos em um ambiente focado em crescimento mútuo.</p>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 col-span-1 relative overflow-hidden reveal-up">
<div className="relative z-10 h-full flex flex-col justify-between">
<iconify-icon className="text-zinc-300" icon="solar:diploma-linear" width="32"></iconify-icon>
<div>
<h3 className="text-xl font-syne font-medium text-white tracking-tight mb-2">Trajetória Sólida</h3>
<p className="text-xs text-zinc-400 font-light">A experiência de mais de duas décadas em atuação de campo e sala de aula, garantindo segurança jurídica na sua atuação profissional.</p>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 col-span-1 md:col-span-2 flex items-center justify-between relative overflow-hidden reveal-up">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-4">
<iconify-icon className="text-zinc-300" icon="solar:verified-check-linear" width="14"></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Certificação Inclusa</span>
</div>
<h3 className="text-xl font-syne font-medium text-white tracking-tight mb-2">Formação Continuada</h3>
<p className="text-sm text-zinc-400 font-light max-w-sm">Atualize-se com os temas mais cruciais do momento. Um diferencial competitivo para seu currículo e carreira.</p>
</div>
<iconify-icon className="text-zinc-800 opacity-50 absolute -right-4 -bottom-4" icon="solar:book-bookmark-minimalistic-linear" width="120"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-zinc-900 overflow-hidden" id="publico">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-900/30 rounded-full blur-[100px] z-0 pointer-events-none"></div>
<div className="container mx-auto px-6 md:px-12 relative z-10">
<div className="text-center mb-16 reveal-up">
<h2 className="text-3xl md:text-4xl font-syne font-medium text-white tracking-tighter mb-4">Para quem é este congresso?</h2>
<p className="text-sm text-zinc-400 font-light max-w-xl mx-auto">Desenvolvido para acadêmicos e profissionais que buscam ir além do convencional na interseção entre o direito e a segurança.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
<div className="flex flex-col items-center text-center p-6 rounded-xl border border-transparent hover:border-zinc-800 transition-colors reveal-up">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center mb-4">
<iconify-icon className="text-zinc-300" icon="solar:book-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-1">Estudantes</h4>
<p className="text-xs text-zinc-500">Direito, Criminologia e áreas afins.</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-xl border border-transparent hover:border-zinc-800 transition-colors reveal-up">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center mb-4">
<iconify-icon className="text-zinc-300" icon="solar:shield-warning-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-1">Segurança Pública</h4>
<p className="text-xs text-zinc-500">Policiais, Militares e Peritos.</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-xl border border-transparent hover:border-zinc-800 transition-colors reveal-up">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center mb-4">
<iconify-icon className="text-zinc-300" icon="solar:case-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-1">Advogados</h4>
<p className="text-xs text-zinc-500">Bacharéis e Profissionais Liberais.</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-xl border border-transparent hover:border-zinc-800 transition-colors reveal-up">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center mb-4">
<iconify-icon className="text-zinc-300" icon="solar:scale-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-1">Carreiras Jurídicas</h4>
<p className="text-xs text-zinc-500">Juízes, Promotores e Delegados.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 relative" id="inscricao">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/10 z-0"></div>
<div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-3xl reveal-up">
<h2 className="text-3xl md:text-5xl font-syne font-medium text-white tracking-tighter mb-6">Chegou a hora de fazer história.</h2>
<p className="text-sm md:text-base text-zinc-400 font-light mb-10">As vagas são rigorosamente limitadas para garantir a exclusividade e o nível de networking que o evento propõe. Não seja mais do mesmo.</p>
<a className="inline-flex items-center justify-center gap-2 bg-white text-black text-sm font-medium px-10 py-5 rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)]" href="https://wa.me/5598991646198" target="_blank">
                Garantir Ingresso Agora
                <iconify-icon icon="solar:ticket-linear" width="20"></iconify-icon>
</a>
<div className="mt-8 flex items-center justify-center gap-4 text-xs text-zinc-500 font-medium">
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Compra Segura</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:medal-star-linear"></iconify-icon> Certificado Incluso</span>
</div>
</div>
</section>

<footer className="border-t border-zinc-900 bg-[#020202] py-12">
<div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="font-syne font-medium text-xl tracking-tighter text-white">ALTUS JUS</span>
<span className="text-xs text-zinc-500 font-light">Instituto de Ensino e Formação</span>
</div>
<div className="flex gap-6">
<a className="text-zinc-400 hover:text-white transition-colors" href="https://instagram.com/altusjus" target="_blank">
<span className="sr-only">Instagram</span>
<iconify-icon icon="solar:camera-linear" width="24"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="mailto:lukascfo@hotmail.com">
<span className="sr-only">Email</span>
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="https://wa.me/5598991646198" target="_blank">
<span className="sr-only">WhatsApp</span>
<iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
</a>
</div>
</div>
<div className="container mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-zinc-900/50 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600 font-light">© 2026 Instituto Altus Jus. Todos os direitos reservados.</p>
<p className="text-xs text-zinc-600 font-light">São Luís / MA</p>
</div>
</footer>



    </>
  );
}
