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



        // GSAP Animations
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // Hero Animation
            gsap.from(".hero-anim", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.2
            });

            // Scroll Reveal Animation
            const revealElements = document.querySelectorAll(".reveal-up");
            revealElements.forEach((elem) => {
                gsap.from(elem, {
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });

            // Navbar background on scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.style.borderBottomColor = 'rgba(255,255,255,0.05)';
                    navbar.style.backgroundColor = 'rgba(5, 5, 5, 0.8)';
                } else {
                    navbar.style.borderBottomColor = 'transparent';
                    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
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
      

<header className="fixed top-0 w-full z-50 glass-panel border-b-0 border-x-0 border-t-0 transition-transform duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-white uppercase" href="#">
                Altus Jus
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#sobre">Sobre</a>
<a className="hover:text-white transition-colors" href="#diferenciais">Diferenciais</a>
<a className="hover:text-white transition-colors" href="#palestrantes">Palestrantes</a>
<a className="hover:text-white transition-colors" href="#experiencia">Experiência</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-full bg-blue-700 text-white text-xs font-medium tracking-wide hover:bg-blue-600 transition-colors shadow-[0_0_20px_rgba(29,78,216,0.3)]" href="#inscricao">
                Garantir Minha Vaga
            </a>
<button className="md:hidden text-white flex items-center justify-center">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover opacity-[0.15] mix-blend-luminosity grayscale" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-transparent"></div>

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
<div className="hero-anim inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-800/30 bg-blue-900/10 text-blue-400 text-xs font-medium mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                Primeiro Evento do Instituto no Maranhão
            </div>
<h1 className="hero-anim text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 text-balance leading-[1.05]">
                O congresso que une as ciências criminais e a segurança pública em um único palco.
            </h1>
<p className="hero-anim text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Uma experiência inédita no Maranhão reunindo grandes nomes nacionais e internacionais do Direito, Criminologia e Segurança Pública.
            </p>
<div className="hero-anim flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center h-14 px-8 rounded-full bg-blue-700 text-white text-sm font-medium tracking-wide hover:bg-blue-600 transition-colors shadow-[0_0_30px_rgba(29,78,216,0.2)]" href="#inscricao">
                    Quero Participar do Evento
                </a>
<a className="w-full sm:w-auto flex items-center justify-center h-14 px-8 rounded-full glass-panel text-white text-sm font-medium tracking-wide hover:bg-white/5 transition-colors" href="#sobre">
                    Conhecer a Programação
                </a>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-white/[0.01] py-4 relative z-20">
<div className="marquee-container max-w-7xl mx-auto px-6">
<div className="marquee-content text-sm font-medium text-neutral-500 uppercase tracking-widest flex items-center">
<span>22 Anos de Experiência</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<span>Palestrantes Internacionais</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<span>Networking de Elite</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<span>Formação Continuada</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<span>Evento Exclusivo</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
</div>

<div aria-hidden="true" className="marquee-content text-sm font-medium text-neutral-500 uppercase tracking-widest flex items-center">
<span>22 Anos de Experiência</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<span>Palestrantes Internacionais</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<span>Networking de Elite</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<span>Formação Continuada</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<span>Evento Exclusivo</span>
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<section className="py-32 relative" id="sobre">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal-up">
<iconify-icon className="text-blue-600/30 mb-6" icon="solar:quote-left-linear" width="48"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white leading-tight mb-8">
                        "Entre o crime e a sentença existe um caminho: o Direito."
                    </h2>
<div className="space-y-6 text-neutral-400 text-base font-light leading-relaxed">
<p>
                            O Instituto Altus Jus nasce da união entre duas áreas inseparáveis: as ciências criminais e a segurança pública. Duas forças que andam lado a lado em uma sociedade em constante evolução.
                        </p>
<p>
                            Idealizado após 22 anos de atuação na área de segurança pública e 20 anos de docência, este congresso foi criado para profissionais que desejam enxergar além da teoria e atuar com preparo, estratégia e visão moderna.
                        </p>
</div>
</div>
<div className="reveal-up relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden glass-panel p-2">
<img alt="Justiça" className="w-full h-full object-cover rounded-2xl grayscale opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-blue-900/20 mix-blend-overlay"></div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#0a0a0a]" id="diferenciais">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal-up mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">
                    Excelência em cada detalhe.
                </h2>
<p className="text-neutral-400 font-light text-base">
                    Estrutura premium pensada para entregar conhecimento prático e conexões de alto nível.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px]">

<div className="reveal-up md:col-span-2 lg:col-span-2 row-span-2 glass-panel rounded-3xl p-8 glow-effect flex flex-col justify-end relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"></div>
<img alt="Networking" className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="relative z-20">
<iconify-icon className="text-blue-400 mb-6" icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tighter text-white mb-2">Networking Estratégico</h3>
<p className="text-sm text-neutral-400 font-light">Conecte-se com juízes, promotores, delegados e a elite das carreiras jurídicas e de segurança pública.</p>
</div>
</div>

<div className="reveal-up md:col-span-1 lg:col-span-2 glass-panel rounded-3xl p-8 glow-effect flex flex-col justify-between">
<iconify-icon className="text-white" icon="solar:diploma-linear" width="32"></iconify-icon>
<div>
<h3 className="text-lg font-medium tracking-tighter text-white mb-1">Certificação</h3>
<p className="text-xs text-neutral-400 font-light">Horas extracurriculares e comprovação de especialização profissional.</p>
</div>
</div>

<div className="reveal-up glass-panel rounded-3xl p-8 glow-effect flex flex-col justify-between bg-blue-900/5">
<iconify-icon className="text-blue-400" icon="solar:global-linear" width="32"></iconify-icon>
<div>
<h3 className="text-lg font-medium tracking-tighter text-white mb-1">Circuito Internacional</h3>
<p className="text-xs text-neutral-400 font-light">Palestrantes com trajetórias reconhecidas globalmente.</p>
</div>
</div>

<div className="reveal-up glass-panel rounded-3xl p-8 glow-effect flex flex-col justify-between">
<iconify-icon className="text-white" icon="solar:book-bookmark-linear" width="32"></iconify-icon>
<div>
<h3 className="text-lg font-medium tracking-tighter text-white mb-1">Conteúdo Atualizado</h3>
<p className="text-xs text-neutral-400 font-light">Temas pulsantes e de relevância imediata para a prática.</p>
</div>
</div>

<div className="reveal-up md:col-span-3 lg:col-span-4 glass-panel rounded-3xl p-8 glow-effect flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div>
<h3 className="text-xl font-medium tracking-tighter text-white mb-2">Evento Pioneiro na Região</h3>
<p className="text-sm text-neutral-400 font-light max-w-2xl">Uma oportunidade exclusiva de vivenciar um congresso de proporções nacionais sem sair do Maranhão. Estrutura impecável, organização rigorosa e foco absoluto na entrega de valor.</p>
</div>
<div className="shrink-0">
<iconify-icon className="text-white/20" icon="solar:shield-star-linear" width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="palestrantes">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal-up text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                    Aprenda com quem constrói referência no Brasil.
                </h2>
<p className="text-neutral-400 font-light text-base">
                    Grandes autores e profissionais renomados reunidos para compartilhar experiência prática e acadêmica.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="reveal-up glass-panel rounded-2xl overflow-hidden group cursor-pointer">
<div className="aspect-[3/4] relative overflow-hidden bg-neutral-900">

<img alt="Palestrante" className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
</div>
<div className="p-6 relative z-10 -mt-16">
<h3 className="text-lg font-medium tracking-tight text-white mb-1 group-hover:text-blue-400 transition-colors">Convidado Especial</h3>
<p className="text-xs text-blue-500 mb-3 font-medium uppercase tracking-wider">Direito Penal</p>
<p className="text-xs text-neutral-400 font-light line-clamp-2">Referência nacional em atuação estratégica e docência acadêmica.</p>
</div>
</div>

<div className="reveal-up glass-panel rounded-2xl overflow-hidden group cursor-pointer" style={{transitionDelay: '100ms'}}>
<div className="aspect-[3/4] relative overflow-hidden bg-neutral-900">
<img alt="Palestrante" className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
</div>
<div className="p-6 relative z-10 -mt-16">
<h3 className="text-lg font-medium tracking-tight text-white mb-1 group-hover:text-blue-400 transition-colors">Convidado Especial</h3>
<p className="text-xs text-blue-500 mb-3 font-medium uppercase tracking-wider">Criminologia</p>
<p className="text-xs text-neutral-400 font-light line-clamp-2">Autor de diversas obras e especialista em comportamento criminal.</p>
</div>
</div>
<div className="reveal-up glass-panel rounded-2xl overflow-hidden group cursor-pointer" style={{transitionDelay: '200ms'}}>
<div className="aspect-[3/4] relative overflow-hidden bg-neutral-900">
<img alt="Palestrante" className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
</div>
<div className="p-6 relative z-10 -mt-16">
<h3 className="text-lg font-medium tracking-tight text-white mb-1 group-hover:text-blue-400 transition-colors">Convidado Especial</h3>
<p className="text-xs text-blue-500 mb-3 font-medium uppercase tracking-wider">Segurança Pública</p>
<p className="text-xs text-neutral-400 font-light line-clamp-2">Especialista com décadas de atuação em operações de alta complexidade.</p>
</div>
</div>
<div className="reveal-up glass-panel rounded-2xl overflow-hidden flex items-center justify-center p-8 text-center group cursor-pointer border-dashed border-white/20 hover:border-white/40 transition-colors" style={{transitionDelay: '300ms'}}>
<div>
<iconify-icon className="text-neutral-500 mb-4 group-hover:text-white transition-colors" icon="solar:users-group-rounded-linear" width="40"></iconify-icon>
<h3 className="text-base font-medium tracking-tight text-white mb-2">Grade Completa</h3>
<p className="text-xs text-neutral-400 font-light">Em breve mais nomes confirmados.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5 bg-[#0a0a0a]" id="experiencia">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div className="reveal-up lg:sticky lg:top-32 h-fit">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6 leading-tight">
                        Mais do que um congresso.<br/>Uma virada de chave profissional.
                    </h2>
<p className="text-neutral-400 font-light text-base mb-8">
                        Seja você estudante em busca de direcionamento, profissional buscando atualização ou acadêmico procurando networking, o evento entrega resultados tangíveis.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors" href="#inscricao">
                        Garantir participação
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="space-y-4">

<div className="reveal-up glass-panel rounded-2xl p-6 md:p-8 flex items-start gap-6 hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 bg-[#050505]">
<span className="text-sm font-medium text-white">01</span>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Segurança Jurídica na Atuação</h3>
<p className="text-sm text-neutral-400 font-light">Aprenda a fundamentar suas decisões e estratégias com base nos entendimentos mais recentes dos tribunais superiores.</p>
</div>
</div>

<div className="reveal-up glass-panel rounded-2xl p-6 md:p-8 flex items-start gap-6 hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 bg-[#050505]">
<span className="text-sm font-medium text-white">02</span>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Visão Moderna da Área Criminal</h3>
<p className="text-sm text-neutral-400 font-light">Abordagens contemporâneas sobre criminologia, perícia e a intersecção indispensável com a segurança pública.</p>
</div>
</div>

<div className="reveal-up glass-panel rounded-2xl p-6 md:p-8 flex items-start gap-6 hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 bg-[#050505]">
<span className="text-sm font-medium text-white">03</span>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Oportunidades e Posicionamento</h3>
<p className="text-sm text-neutral-400 font-light">Estar entre os melhores posiciona você como referência no mercado de trabalho e abre portas para carreiras jurídicas e policiais.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="inscricao">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<div className="reveal-up mb-8">
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-white text-xs font-medium uppercase tracking-widest border-blue-500/30">
<iconify-icon className="text-blue-400" icon="solar:ticket-sale-linear" width="16"></iconify-icon>
                    Primeiro Lote Disponível
                </span>
</div>
<h2 className="reveal-up text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6 text-balance">
                O futuro das ciências criminais começa aqui.
            </h2>
<p className="reveal-up text-base md:text-lg text-neutral-400 mb-12 font-light max-w-2xl mx-auto">
                Participe do primeiro grande evento do Instituto Altus Jus e esteja entre os profissionais que irão liderar a nova geração do setor. Vagas limitadas para manter a exclusividade da experiência.
            </p>
<div className="reveal-up flex flex-col items-center gap-6">
<a className="group relative inline-flex items-center justify-center h-16 px-10 rounded-full bg-white text-black font-medium tracking-wide hover:bg-neutral-200 transition-all overflow-hidden w-full sm:w-auto" href="#">
<span className="relative z-10 text-sm">Garantir Minha Inscrição Agora</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
</a>
<div className="flex items-center gap-4 text-xs text-neutral-500 font-light">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon> Compra Segura</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon> Certificado Incluso</span>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 relative z-10 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-lg font-semibold tracking-tighter text-white uppercase">
                Altus Jus
            </div>
<div className="flex items-center gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</a>

<a className="text-xs font-medium text-neutral-500 hover:text-white transition-colors tracking-wide" href="#">
                    @ALTUSJUS
                </a>
</div>
<div className="text-xs text-neutral-600 font-light">
                © 2025 Instituto Altus Jus. Todos os direitos reservados.
            </div>
</div>
</footer>
<style>
        @keyframes shimmer {
            100% { transform: translateX(100%); }
        }
    </style>


    </>
  );
}
