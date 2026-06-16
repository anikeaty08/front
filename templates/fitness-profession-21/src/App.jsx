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



tailwind.config = {
theme: {
extend: {
fontFamily: {
display: ['"Barlow Condensed"', 'sans-serif'],
body: ['Inter', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
animation: {
'infinite-scroll': 'scroll 30s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 flex items-center justify-center">
<div className="absolute w-[80vw] h-[80vw] bg-[#1565C0] rounded-full blur-[160px] opacity-10 animate-pulse-slow"></div>
</div>

<a className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#1565C0] to-[#2979FF] shadow-[0_0_24px_rgba(41,121,255,0.35)] hover:scale-105 transition-transform duration-300" href="#whatsapp">
<i className="text-white w-8 h-8" data-lucide="message-circle" strokeWidth="1.5"></i>
</a>

<header className="fixed top-0 w-full z-40 bg-[#050D1A]/80 backdrop-blur-md border-b border-[rgba(41,121,255,0.15)]">
<div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-4 flex items-center justify-between">
<div className="flex flex-col">
<span className="font-display font-bold text-2xl uppercase tracking-tight text-white leading-none">LP · Lucas Prado</span>
</div>
<nav className="hidden lg:flex items-center gap-10">
<a className="text-sm font-normal uppercase tracking-widest hover:text-[#2979FF] transition-colors" href="#metodo">Método</a>
<a className="text-sm font-normal uppercase tracking-widest hover:text-[#2979FF] transition-colors" href="#resultados">Resultados</a>
<a className="text-sm font-normal uppercase tracking-widest hover:text-[#2979FF] transition-colors" href="#modalidades">Modalidades</a>
<a className="text-sm font-normal uppercase tracking-widest hover:text-[#2979FF] transition-colors" href="#sobre">Sobre</a>
</nav>
<a className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-[#1565C0] to-[#2979FF] text-white uppercase font-display font-semibold text-sm tracking-widest rounded-sm hover:shadow-[0_0_24px_rgba(41,121,255,0.35)] transition-all" href="#whatsapp">
<i className="w-4 h-4" data-lucide="smartphone" strokeWidth="1.5"></i>
                Falar no WhatsApp
            </a>
<button className="lg:hidden text-white p-2">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
<div className="w-full bg-[#0B1628] py-1 border-b border-[rgba(41,121,255,0.1)] flex justify-center">
<span className="font-mono text-[0.65rem] md:text-xs text-[#B0B0B0] uppercase tracking-[0.1em]">Personal Trainer · Presencial &amp; Online · @teamlucasprado</span>
</div>
</header>
<main className="relative z-10 pt-24 md:pt-32">

<section className="relative min-h-[90vh] flex flex-col justify-end lg:justify-center overflow-hidden px-5 md:px-10 lg:px-20 pb-12 lg:pb-0">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none opacity-[0.04]">
<h1 className="font-display font-extrabold text-[15vw] leading-none uppercase text-[#2979FF] whitespace-nowrap">Lucas Prado</h1>
</div>

<div className="absolute inset-0 z-0 lg:left-1/3">
<img alt="Lucas Prado Personal Trainer" className="w-full h-full object-cover object-top mix-blend-luminosity opacity-60" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-[#050D1A]/80 to-transparent lg:bg-gradient-to-r lg:from-[#050D1A] lg:via-[#050D1A]/90 lg:to-transparent"></div>
</div>

<div className="relative z-10 max-w-[1440px] mx-auto w-full pt-48 lg:pt-0">
<div className="max-w-3xl flex flex-col gap-6">
<h1 className="font-display font-extrabold text-6xl md:text-8xl lg:text-[7rem] text-white uppercase leading-[0.9] tracking-tight drop-shadow-2xl">
                        Sem frescura.<br/>
                        Sem enrolação.<br/>
<span className="text-[#2979FF]">Só resultado.</span>
</h1>
<p className="font-body font-normal text-xl md:text-2xl text-[#F2F2F2] max-w-xl leading-snug border-l-2 border-[#2979FF] pl-4">
                        Treino simples, descomplicado e com método testado em alunos reais.
                    </p>
<p className="font-body font-light text-lg md:text-xl text-[#B0B0B0] max-w-xl">
                        Não importa se você quer emagrecer, ganhar massa ou simplesmente se sentir bem. O caminho existe — e é mais direto do que te fizeram acreditar.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mt-8">
<a className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-br from-[#1565C0] to-[#2979FF] text-white uppercase font-display font-semibold text-lg tracking-widest rounded-sm hover:shadow-[0_0_24px_rgba(41,121,255,0.35)] transition-all" href="https://instagram.com/teamlucasprado" target="_blank">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
                            Seguir no Instagram
                        </a>
<a className="flex items-center justify-center gap-3 px-8 py-4 border border-[#F2F2F2] text-white uppercase font-display font-semibold text-lg tracking-widest rounded-sm hover:bg-[#F2F2F2]/10 transition-all" href="#modalidades">
                            Quero Começar
                        </a>
</div>
</div>
</div>

<div className="relative z-10 max-w-[1440px] mx-auto w-full mt-16 lg:mt-24 border-t border-[rgba(41,121,255,0.15)] pt-8">
<div className="flex flex-wrap gap-8 md:gap-16 justify-between lg:justify-start">
<div className="flex flex-col gap-1">
<span className="font-mono text-xs uppercase text-[#B0B0B0] tracking-[0.08em]">Modalidades</span>
<span className="font-display font-bold text-2xl tracking-tight text-white uppercase">Presencial · Online · A domicílio</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-mono text-xs uppercase text-[#B0B0B0] tracking-[0.08em]">Especialidades</span>
<span className="font-display font-bold text-2xl tracking-tight text-white uppercase">5 Áreas</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-mono text-xs uppercase text-[#B0B0B0] tracking-[0.08em]">Atendimento</span>
<span className="font-display font-bold text-2xl tracking-tight text-[#2979FF] uppercase">Personalizado</span>
</div>
</div>
</div>
</section>

<section className="bg-[#0B1628] border-y border-[rgba(41,121,255,0.15)] py-12 relative overflow-hidden flex items-center">
<div className="max-w-[1440px] mx-auto w-full px-5 md:px-10 lg:px-20 overflow-x-auto no-scrollbar">
<div className="flex items-center gap-16 md:gap-32 min-w-max">
<div className="flex flex-col items-center sm:items-start">
<span className="font-display font-extrabold text-5xl md:text-6xl tracking-tight text-white uppercase leading-none">+200</span>
<span className="font-mono text-xs uppercase tracking-widest text-[#B0B0B0] mt-2">Alunos Transformados</span>
</div>
<div className="w-px h-12 bg-[rgba(41,121,255,0.15)]"></div>
<div className="flex flex-col items-center sm:items-start">
<span className="font-display font-extrabold text-5xl md:text-6xl tracking-tight text-white uppercase leading-none">5</span>
<span className="font-mono text-xs uppercase tracking-widest text-[#B0B0B0] mt-2">Focos de Especialidade</span>
</div>
<div className="w-px h-12 bg-[rgba(41,121,255,0.15)]"></div>
<div className="flex flex-col items-center sm:items-start">
<span className="font-display font-extrabold text-5xl md:text-6xl tracking-tight text-white uppercase leading-none">3</span>
<span className="font-mono text-xs uppercase tracking-widest text-[#B0B0B0] mt-2">Formas de Treinar</span>
</div>
<div className="w-px h-12 bg-[rgba(41,121,255,0.15)]"></div>
<div className="flex flex-col items-center sm:items-start">
<span className="font-display font-extrabold text-5xl md:text-6xl tracking-tight text-[#2979FF] uppercase leading-none">Real</span>
<span className="font-mono text-xs uppercase tracking-widest text-[#B0B0B0] mt-2">E Comprovado</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-5 md:px-10 lg:px-20 relative bg-gradient-to-b from-[#050D1A] via-[#0B3D91]/10 to-[#050D1A]" id="sobre">
<div className="max-w-[1440px] mx-auto">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

<div className="flex flex-col gap-6">
<span className="font-mono text-sm text-[#2979FF] uppercase tracking-[0.08em] font-normal">Para quem é</span>
<h2 className="font-display font-extrabold text-5xl md:text-6xl tracking-tight text-white uppercase leading-[0.95]">
                            Você não<br/>
                            precisa de<br/>
                            complicação.
                        </h2>
<p className="font-body text-xl text-[#B0B0B0] mt-4">
                            A maioria das pessoas já tentou. Desistiu porque o processo era cansativo, confuso ou sem resultado visível. Aqui é diferente — o método é simples porque foi construído para funcionar de verdade.
                        </p>
<div className="mt-8 flex flex-col gap-4">
<h3 className="font-display font-bold text-2xl text-white tracking-tight uppercase border-b border-[rgba(41,121,255,0.15)] pb-4 mb-2">Este trabalho é para você se:</h3>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-4">
<i className="text-[#2979FF] w-6 h-6 shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-[#F2F2F2]">Quer <strong className="font-normal text-white">emagrecer</strong> sem dietas mirabolantes e sem passar fome</span>
</li>
<li className="flex items-start gap-4">
<i className="text-[#2979FF] w-6 h-6 shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-[#F2F2F2]">Busca <strong className="font-normal text-white">hipertrofia</strong> com treino estruturado e progressivo</span>
</li>
<li className="flex items-start gap-4">
<i className="text-[#2979FF] w-6 h-6 shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-[#F2F2F2]">Precisa de <strong className="font-normal text-white">condicionamento</strong> para ter mais energia no dia a dia</span>
</li>
<li className="flex items-start gap-4">
<i className="text-[#2979FF] w-6 h-6 shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-[#F2F2F2]">É mulher e quer um acompanhamento que respeita o <strong className="font-normal text-white">corpo feminino</strong></span>
</li>
<li className="flex items-start gap-4">
<i className="text-[#2979FF] w-6 h-6 shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-[#F2F2F2]">É <strong className="font-normal text-white">idoso</strong> e precisa de treino seguro, funcional e adaptado</span>
</li>
<li className="flex items-start gap-4">
<i className="text-[#2979FF] w-6 h-6 shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-[#F2F2F2]">Treina há anos e sente que está <strong className="font-normal text-white">travado, sem evolução</strong></span>
</li>
<li className="flex items-start gap-4">
<i className="text-[#2979FF] w-6 h-6 shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-[#F2F2F2]">Está começando do zero e não sabe por onde ir</span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col justify-center">
<div className="bg-[#0B1628] rounded-xl border border-[rgba(41,121,255,0.15)] overflow-hidden">
<div className="p-6 md:p-8 bg-gradient-to-r from-[#0B3D91]/20 to-transparent border-b border-[rgba(41,121,255,0.15)]">
<h3 className="font-display font-bold text-3xl tracking-tight text-white uppercase">Especialidades</h3>
</div>
<div className="flex flex-col divide-y divide-[rgba(41,121,255,0.15)]">
<div className="p-6 md:p-8 grid md:grid-cols-3 gap-4 items-center hover:bg-[#ffffff]/5 transition-colors">
<span className="font-display font-semibold text-2xl tracking-tight text-white uppercase md:col-span-1">Emagrecimento</span>
<span className="text-[#B0B0B0] text-lg md:col-span-2">Déficit calórico inteligente + treino que acelera o metabolismo</span>
</div>
<div className="p-6 md:p-8 grid md:grid-cols-3 gap-4 items-center hover:bg-[#ffffff]/5 transition-colors">
<span className="font-display font-semibold text-2xl tracking-tight text-[#2979FF] uppercase md:col-span-1">Hipertrofia</span>
<span className="text-[#B0B0B0] text-lg md:col-span-2">Periodização progressiva para ganho de massa real</span>
</div>
<div className="p-6 md:p-8 grid md:grid-cols-3 gap-4 items-center hover:bg-[#ffffff]/5 transition-colors">
<span className="font-display font-semibold text-2xl tracking-tight text-white uppercase md:col-span-1">Condicionamento</span>
<span className="text-[#B0B0B0] text-lg md:col-span-2">Capacidade cardiovascular e resistência sem sacrifício</span>
</div>
<div className="p-6 md:p-8 grid md:grid-cols-3 gap-4 items-center hover:bg-[#ffffff]/5 transition-colors">
<span className="font-display font-semibold text-2xl tracking-tight text-white uppercase md:col-span-1">Feminino</span>
<span className="text-[#B0B0B0] text-lg md:col-span-2">Treino adaptado às fases e objetivos do corpo da mulher</span>
</div>
<div className="p-6 md:p-8 grid md:grid-cols-3 gap-4 items-center hover:bg-[#ffffff]/5 transition-colors">
<span className="font-display font-semibold text-2xl tracking-tight text-white uppercase md:col-span-1">Idosos</span>
<span className="text-[#B0B0B0] text-lg md:col-span-2">Funcional, seguro e focado em qualidade de vida</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-5 md:px-10 lg:px-20" id="metodo">
<div className="max-w-[1440px] mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col items-center gap-4">
<span className="font-mono text-sm text-[#2979FF] uppercase tracking-[0.08em] font-normal">Como funciona</span>
<h2 className="font-display font-extrabold text-5xl md:text-6xl tracking-tight text-white uppercase leading-[0.95]">
                        Um método<br/>
                        simples que<br/>
                        funciona de verdade.
                    </h2>
<p className="font-body text-xl text-[#B0B0B0] mt-4">
                        Sem planilha genérica. Sem protocolo copiado da internet. Cada aluno começa com uma avaliação e sai com um caminho desenhado para o seu corpo e o seu objetivo.
                    </p>
</div>
<div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">

<div className="hidden md:block absolute top-12 left-10 right-10 h-px bg-[rgba(41,121,255,0.15)] z-0"></div>

<div className="relative z-10 flex flex-col gap-6 bg-[#050D1A] p-6 rounded-xl border border-transparent hover:border-[rgba(41,121,255,0.15)] transition-colors">
<div className="w-24 h-24 rounded-full bg-[#0B1628] border border-[rgba(41,121,255,0.3)] flex items-center justify-center shadow-[inset_0_1px_0_rgba(41,121,255,0.2)]">
<span className="font-display font-extrabold text-5xl tracking-tight text-[#2979FF]">01</span>
</div>
<h3 className="font-display font-bold text-3xl tracking-tight text-white uppercase">Avaliação</h3>
<p className="text-[#B0B0B0] text-lg">
                            Entendemos o seu histórico, objetivo e rotina antes de montar qualquer treino. O ponto de partida é individual — sempre.
                        </p>
</div>

<div className="relative z-10 flex flex-col gap-6 bg-[#050D1A] p-6 rounded-xl border border-transparent hover:border-[rgba(41,121,255,0.15)] transition-colors">
<div className="w-24 h-24 rounded-full bg-[#0B1628] border border-[rgba(41,121,255,0.3)] flex items-center justify-center shadow-[inset_0_1px_0_rgba(41,121,255,0.2)]">
<span className="font-display font-extrabold text-5xl tracking-tight text-[#2979FF]">02</span>
</div>
<h3 className="font-display font-bold text-3xl tracking-tight text-white uppercase">Protocolo</h3>
<p className="text-[#B0B0B0] text-lg">
                            Treino desenhado para o seu nível, sua disponibilidade e seu objetivo. Ajustado a cada ciclo. Nada genérico, nada de sobra.
                        </p>
</div>

<div className="relative z-10 flex flex-col gap-6 bg-[#050D1A] p-6 rounded-xl border border-transparent hover:border-[rgba(41,121,255,0.15)] transition-colors">
<div className="w-24 h-24 rounded-full bg-[#0B1628] border border-[rgba(41,121,255,0.3)] flex items-center justify-center shadow-[inset_0_1px_0_rgba(41,121,255,0.2)]">
<span className="font-display font-extrabold text-5xl tracking-tight text-[#2979FF]">03</span>
</div>
<h3 className="font-display font-bold text-3xl tracking-tight text-white uppercase">Acompanhamento</h3>
<p className="text-[#B0B0B0] text-lg">
                            Suporte contínuo, ajustes constantes e motivação quando você precisar. Presencialmente ou à distância — o contato não para.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-5 md:px-10 lg:px-20 bg-[#0B1628] border-y border-[rgba(41,121,255,0.15)] relative overflow-hidden" id="resultados">

<div className="absolute top-0 right-0 w-96 h-96 bg-[#1565C0] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
<div className="flex flex-col gap-4 max-w-2xl">
<span className="font-mono text-sm text-[#2979FF] uppercase tracking-[0.08em] font-normal">Resultados reais</span>
<h2 className="font-display font-extrabold text-5xl md:text-6xl tracking-tight text-white uppercase leading-[0.95]">
                            Alunos reais.<br/>
                            Resultados<br/>
                            reais.
                        </h2>
</div>
<p className="font-body text-xl text-[#B0B0B0] max-w-md md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#2979FF] pl-4 md:pl-0 md:pr-4">
                        Nada de fotografia editada ou resultado milagroso em 7 dias. O que você vê aqui foi conquistado com trabalho, constância e método.
                    </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
<div className="aspect-square bg-[#050D1A] rounded-lg border border-[rgba(41,121,255,0.1)] relative overflow-hidden group">
<img alt="Resultado Antes e Depois" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] to-transparent opacity-80"></div>
<span className="absolute bottom-4 left-4 font-display font-bold uppercase tracking-tight text-white">Antes &amp; Depois</span>
</div>
<div className="aspect-square bg-[#050D1A] rounded-lg border border-[rgba(41,121,255,0.1)] relative overflow-hidden group">
<img alt="Treino em ação" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-[#050D1A] rounded-lg border border-[rgba(41,121,255,0.1)] relative overflow-hidden group">
<img alt="Resultado Aluno" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] to-transparent opacity-80"></div>
<span className="absolute bottom-4 left-4 font-display font-bold uppercase tracking-tight text-white">12 Semanas</span>
</div>
<div className="aspect-square bg-[#050D1A] rounded-lg border border-[rgba(41,121,255,0.1)] relative overflow-hidden group">
<img alt="Treino pesado" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6">

<div className="bg-[#050D1A] p-8 rounded-xl border border-[rgba(41,121,255,0.1)] flex flex-col justify-between hover:border-[#2979FF]/50 transition-colors">
<div>
<i className="text-[#2979FF] w-8 h-8 mb-6 opacity-50" data-lucide="quote" strokeWidth="1.5"></i>
<p className="font-body text-lg text-[#F2F2F2] italic mb-8">
                                "Nunca achei que fosse ser tão direto assim. Sem enrolação, sem aquela sensação de que você é só mais um aluno. Em 3 meses perdi 9kg e não passei um dia com fome."
                            </p>
</div>
<div className="flex items-center gap-4 border-t border-[rgba(41,121,255,0.1)] pt-6">
<div className="w-12 h-12 rounded-full bg-[#0B3D91] flex items-center justify-center">
<span className="font-display font-bold text-white uppercase">AC</span>
</div>
<div>
<h4 className="font-display font-bold text-xl text-white tracking-tight uppercase">Ana C.</h4>
<span className="font-mono text-xs text-[#B0B0B0] uppercase tracking-widest">Emagrecimento · Presencial</span>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-[#0B3D91]/30 to-[#050D1A] p-8 rounded-xl border border-[#2979FF] shadow-[0_0_24px_rgba(41,121,255,0.1)] flex flex-col justify-between relative transform lg:-translate-y-4">
<div>
<i className="text-[#2979FF] w-8 h-8 mb-6" data-lucide="quote" strokeWidth="1.5"></i>
<p className="font-body text-lg text-white font-normal italic mb-8">
                                "Fazia academia há 2 anos sem resultado. Com o Lucas, em 4 meses comecei a ver diferença real na musculatura. O treino é sério, mas você consegue seguir."
                            </p>
</div>
<div className="flex items-center gap-4 border-t border-[#2979FF]/30 pt-6">
<div className="w-12 h-12 rounded-full bg-[#1565C0] flex items-center justify-center">
<span className="font-display font-bold text-white uppercase">MR</span>
</div>
<div>
<h4 className="font-display font-bold text-xl text-white tracking-tight uppercase">Marcos R.</h4>
<span className="font-mono text-xs text-[#B0B0B0] uppercase tracking-widest">Hipertrofia · Online</span>
</div>
</div>
</div>

<div className="bg-[#050D1A] p-8 rounded-xl border border-[rgba(41,121,255,0.1)] flex flex-col justify-between hover:border-[#2979FF]/50 transition-colors">
<div>
<i className="text-[#2979FF] w-8 h-8 mb-6 opacity-50" data-lucide="quote" strokeWidth="1.5"></i>
<p className="font-body text-lg text-[#F2F2F2] italic mb-8">
                                "Tenho 62 anos e achei que treino pesado não era para mim. Ele adaptou tudo. Hoje faço exercícios que não conseguia nem imaginar há 6 meses."
                            </p>
</div>
<div className="flex items-center gap-4 border-t border-[rgba(41,121,255,0.1)] pt-6">
<div className="w-12 h-12 rounded-full bg-[#0B3D91] flex items-center justify-center">
<span className="font-display font-bold text-white uppercase">ML</span>
</div>
<div>
<h4 className="font-display font-bold text-xl text-white tracking-tight uppercase">Dona Maria L.</h4>
<span className="font-mono text-xs text-[#B0B0B0] uppercase tracking-widest">Terceira Idade · A Domicílio</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-5 md:px-10 lg:px-20 relative" id="modalidades">
<div className="max-w-[1440px] mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col items-center gap-4">
<span className="font-mono text-sm text-[#2979FF] uppercase tracking-[0.08em] font-normal">Como posso te atender</span>
<h2 className="font-display font-extrabold text-5xl md:text-6xl tracking-tight text-white uppercase leading-[0.95]">
                        Você escolhe<br/>
                        onde treinar.<br/>
                        Eu apareço.
                    </h2>
<p className="font-body text-xl text-[#B0B0B0] mt-4">
                        Sem desculpa de distância ou de horário. O acompanhamento acontece do jeito que funciona para a sua rotina.
                    </p>
</div>
<div className="grid lg:grid-cols-3 gap-6 items-center">

<div className="bg-[#0B1628] rounded-xl p-8 border border-[rgba(41,121,255,0.1)] flex flex-col h-full hover:border-[#2979FF]/50 transition-all">
<h3 className="font-display font-extrabold text-4xl tracking-tight text-white uppercase mb-2">Presencial</h3>
<span className="text-[#B0B0B0] text-lg mb-8 h-14">Academia parceira. Acompanhamento lado a lado.</span>
<div className="h-px w-full bg-[rgba(41,121,255,0.15)] mb-8"></div>
<ul className="flex flex-col gap-5 flex-grow mb-8">
<li className="flex items-center gap-3"><i className="text-[#2979FF] w-5 h-5 shrink-0" data-lucide="check" strokeWidth="2"></i> <span className="text-[#F2F2F2]">Treino personalizado</span></li>
<li className="flex items-center gap-3"><i className="text-[#2979FF] w-5 h-5 shrink-0" data-lucide="check" strokeWidth="2"></i> <span className="text-[#F2F2F2]">Acompanhamento contínuo</span></li>
<li className="flex items-center gap-3"><i className="text-[#2979FF] w-5 h-5 shrink-0" data-lucide="check" strokeWidth="2"></i> <span className="text-[#F2F2F2]">Ajuste de protocolo</span></li>
<li className="flex items-center gap-3"><i className="text-[#2979FF] w-5 h-5 shrink-0" data-lucide="check" strokeWidth="2"></i> <span className="text-[#F2F2F2]">Suporte por mensagem</span></li>
<li className="flex items-center gap-3"><i className="text-[#2979FF] w-5 h-5 shrink-0" data-lucide="check" strokeWidth="2"></i> <span className="text-[#F2F2F2]">Avaliação inicial</span></li>
</ul>
<div className="mt-auto pt-6 border-t border-[rgba(41,121,255,0.15)]">
<span className="font-mono text-xl text-white block mb-6 uppercase tracking-widest text-center">Sob Consulta</span>
<a className="flex items-center justify-center w-full py-4 border border-[#F2F2F2] text-white uppercase font-display font-semibold text-lg tracking-widest rounded-sm hover:bg-[#F2F2F2]/10 transition-all" href="#whatsapp">
                                Quero Saber Mais
                            </a>
</div>
</div>

<div className="bg-gradient-to-b from-[#0B3D91]/40 to-[#0B1628] rounded-xl p-8 border-2 border-[#2979FF] shadow-[0_0_48px_rgba(41,121,255,0.15)] flex flex-col relative transform lg:scale-105 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2979FF] text-white font-mono text-xs uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap">
                            Mais Procurado
                        </div>
<h3 className="font-display font-extrabold text-4xl tracking-tight text-white uppercase mb-2 mt-2">Online</h3>
<span className="text-[#B0B0B0] text-lg mb-8 h-14">Onde você estiver. Protocolo no seu celular.</span>
<div className="h-px w-full bg-[#2979FF]/30 mb-8"></div>
<ul className="flex flex-col gap-5 flex-grow mb-8">
<li className="flex items-center gap-3"><i className="text-[#2979FF] w-5 h-5 shrink-0" data-lucide="check" strokeWidth="2"></i> <span className="text-white font-normal">Treino personalizado</span></li>
<li className="flex items-center gap-3"><i className="text-[#2979FF] w-5 h-5 shrink-0" data-lucide="check" strokeWidth="2"></i> <span className="text-white font-normal">Acompanhamento contínuo</span></li>
<li className="flex items-center gap-3"><i className="text-[#2979FF] w-5 h-5 shrink-0" data-lucide="check" strokeWidth="2"></i> <span className="text-white font-normal">Ajuste de protocolo rápido</span></li>
<li className="flex items-center gap-3"><i className="text-[#2979FF] w-5 h-5 shrink-0" data-lucide="check" strokeWidth="2"></i> <span className="text-white font-normal">Suporte prioritário no WhatsApp</span></li>
<li className="flex items-center gap-3"><i className="text-[#2979FF] w-5 h-5 shrink-0" data-lucide="check" strokeWidth="2"></i> <span className="text-white font-normal">Avaliação inicial em vídeo</span></li>
</ul>
<div className="mt-auto pt-6 border-t border-[#2979FF]/30">
<span className="font-mono text-xl text-white block mb-6 uppercase tracking-widest text-center">Sob Consulta</span>
<a className="flex items-center justify-center w-full py-4 bg-gradient-to-br from-[#1565C0] to-[#2979FF] text-white uppercase font-display font-semibold text-lg tracking-widest rounded-sm hover:shadow-[0_0_24px_rgba(41,121,255,0.35)] transition-all" href="#whatsapp">
                                Quero Saber Mais
                            </a>
</div>
</div>

<div className="bg-[#0B1628] rounded-xl p-8 border border-[rgba(41,121,255,0.1)] flex flex-col h-full hover:border-[#2979FF]/50 transition-all">
<h3 className="font-display font-extrabold text-4xl tracking-tight text-white uppercase mb-2">A Domicílio</h3>
<span className="text-[#B0B0B0] text-lg mb-8 h-14">Na sua casa ou condomínio. Eu levo o treino.</span>
<div className="h-px w-full bg-[rgba(41,121,255,0.15)] mb-8"></div>
<ul className="flex flex-col gap-5 flex-grow mb-8">
<li className="flex items-center gap-3"><i className="text-[#2979FF] w-5 h-5 shrink-0" data-lucide="check" strokeWidth="2"></i> <span className="text-[#F2F2F2]">Treino personalizado</span></li>
<li className="flex items-center gap-3"><i className="text-[#2979FF] w-5 h-5 shrink-0" data-lucide="check" strokeWidth="2"></i> <span className="text-[#F2F2F2]">Acompanhamento contínuo</span></li>
<li className="flex items-center gap-3"><i className="text-[#2979FF] w-5 h-5 shrink-0" data-lucide="check" strokeWidth="2"></i> <span className="text-[#F2F2F2]">Ajuste de protocolo</span></li>
<li className="flex items-center gap-3"><i className="text-[#2979FF] w-5 h-5 shrink-0" data-lucide="check" strokeWidth="2"></i> <span className="text-[#F2F2F2]">Suporte por mensagem</span></li>
<li className="flex items-center gap-3"><i className="text-[#2979FF] w-5 h-5 shrink-0" data-lucide="check" strokeWidth="2"></i> <span className="text-[#F2F2F2]">Avaliação inicial in loco</span></li>
</ul>
<div className="mt-auto pt-6 border-t border-[rgba(41,121,255,0.15)]">
<span className="font-mono text-xl text-white block mb-6 uppercase tracking-widest text-center">Sob Consulta</span>
<a className="flex items-center justify-center w-full py-4 border border-[#F2F2F2] text-white uppercase font-display font-semibold text-lg tracking-widest rounded-sm hover:bg-[#F2F2F2]/10 transition-all" href="#whatsapp">
                                Quero Saber Mais
                            </a>
</div>
</div>
</div>
<div className="text-center mt-12">
<p className="font-mono text-sm text-[#B0B0B0] uppercase tracking-widest">
                        Valores e disponibilidade via WhatsApp · Sem compromisso na primeira conversa
                    </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-5 md:px-10 lg:px-20 bg-gradient-to-t from-[#0B1628] to-[#050D1A] border-t border-[rgba(41,121,255,0.15)] relative">
<div className="max-w-[1440px] mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="absolute inset-0 bg-[#2979FF] blur-[100px] opacity-20 rounded-full"></div>
<img alt="Lucas Prado" className="relative z-10 w-full h-[600px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-[0_16px_48px_rgba(0,0,0,0.6)]" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>

<div className="flex flex-col gap-6 order-1 lg:order-2">
<span className="font-mono text-sm text-[#2979FF] uppercase tracking-[0.08em] font-normal">Quem é Lucas Prado</span>
<h2 className="font-display font-extrabold text-5xl md:text-6xl tracking-tight text-white uppercase leading-[0.95]">
                            Personal Trainer<br/>
                            que entrega<br/>
                            o que promete.
                        </h2>
<div className="flex flex-col gap-6 mt-4 border-l-2 border-[#2979FF] pl-6 text-[#F2F2F2] text-lg font-normal">
<p>
                                Lucas Prado é Personal Trainer com atuação presencial, online e a domicílio. Especialista em emagrecimento, hipertrofia, condicionamento, público feminino e terceira idade.
                            </p>
<p>
                                A filosofia é simples: resultado não vem de método complicado — vem de consistência, acompanhamento real e um protocolo feito para você, não para uma planilha.
                            </p>
<p>
                                Cada aluno atendido é uma prova de que o processo funciona quando é feito com seriedade e sem frescura.
                            </p>
</div>

<div className="mt-8 bg-[#050D1A] border border-[rgba(41,121,255,0.15)] rounded-xl overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(41,121,255,0.15)]">
<div className="p-6 flex flex-col gap-2">
<span className="font-mono text-xs text-[#2979FF] uppercase tracking-widest">Especialidades</span>
<span className="font-display font-bold text-xl uppercase tracking-tight text-white">5 Áreas de Foco</span>
</div>
<div className="p-6 flex flex-col gap-2 bg-[#ffffff]/5">
<span className="font-mono text-xs text-[#2979FF] uppercase tracking-widest">Modalidades</span>
<span className="font-display font-bold text-xl uppercase tracking-tight text-white">Presencial &amp; Online</span>
</div>
<div className="p-6 flex flex-col gap-2">
<span className="font-mono text-xs text-[#2979FF] uppercase tracking-widest">Contato Direto</span>
<span className="font-display font-bold text-xl uppercase tracking-tight text-white break-all">@teamlucasprado</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-5 md:px-10 lg:px-20">
<div className="max-w-[1024px] mx-auto">
<div className="mb-16 md:mb-24 flex flex-col gap-4">
<span className="font-mono text-sm text-[#2979FF] uppercase tracking-[0.08em] font-normal">Dúvidas</span>
<h2 className="font-display font-extrabold text-5xl md:text-6xl tracking-tight text-white uppercase leading-[0.95]">
                        Perguntas<br/>
                        Diretas.
                    </h2>
</div>
<div className="flex flex-col border-t border-[rgba(41,121,255,0.15)]">
<details className="group border-b border-[rgba(41,121,255,0.15)] py-6 lg:py-8 cursor-pointer">
<summary className="flex justify-between items-center text-white font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
                            Preciso ter experiência prévia?
                            <span className="transition-transform duration-300 group-open:rotate-45 text-[#2979FF]">
<i className="w-6 h-6 md:w-8 md:h-8" data-lucide="plus" strokeWidth="2"></i>
</span>
</summary>
<p className="text-[#B0B0B0] text-lg mt-6 font-body font-light max-w-3xl pr-8">
                            Não. Iniciantes são bem-vindos. Avaliamos o seu ponto de partida e montamos o protocolo do zero, no seu ritmo.
                        </p>
</details>
<details className="group border-b border-[rgba(41,121,255,0.15)] py-6 lg:py-8 cursor-pointer">
<summary className="flex justify-between items-center text-white font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
                            Como funciona o acompanhamento online?
                            <span className="transition-transform duration-300 group-open:rotate-45 text-[#2979FF]">
<i className="w-6 h-6 md:w-8 md:h-8" data-lucide="plus" strokeWidth="2"></i>
</span>
</summary>
<p className="text-[#B0B0B0] text-lg mt-6 font-body font-light max-w-3xl pr-8">
                            Você recebe o protocolo de treino completo, suporte por mensagem e revisões periódicas. A distância não muda o compromisso com o seu resultado.
                        </p>
</details>
<details className="group border-b border-[rgba(41,121,255,0.15)] py-6 lg:py-8 cursor-pointer">
<summary className="flex justify-between items-center text-white font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
                            E o atendimento a domicílio?
                            <span className="transition-transform duration-300 group-open:rotate-45 text-[#2979FF]">
<i className="w-6 h-6 md:w-8 md:h-8" data-lucide="plus" strokeWidth="2"></i>
</span>
</summary>
<p className="text-[#B0B0B0] text-lg mt-6 font-body font-light max-w-3xl pr-8">
                            Atendo na sua casa, condomínio ou espaço de sua preferência. Sem necessidade de deslocamento — o treino vai até você.
                        </p>
</details>
<details className="group border-b border-[rgba(41,121,255,0.15)] py-6 lg:py-8 cursor-pointer">
<summary className="flex justify-between items-center text-white font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
                            Em quanto tempo vejo resultado?
                            <span className="transition-transform duration-300 group-open:rotate-45 text-[#2979FF]">
<i className="w-6 h-6 md:w-8 md:h-8" data-lucide="plus" strokeWidth="2"></i>
</span>
</summary>
<p className="text-[#B0B0B0] text-lg mt-6 font-body font-light max-w-3xl pr-8">
                            Depende do objetivo e da consistência — mas alunos costumam notar diferença nas primeiras 4 a 8 semanas de protocolo. Resultado real leva tempo, e o processo é esse.
                        </p>
</details>
<details className="group border-b border-[rgba(41,121,255,0.15)] py-6 lg:py-8 cursor-pointer">
<summary className="flex justify-between items-center text-white font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
                            Como começo?
                            <span className="transition-transform duration-300 group-open:rotate-45 text-[#2979FF]">
<i className="w-6 h-6 md:w-8 md:h-8" data-lucide="plus" strokeWidth="2"></i>
</span>
</summary>
<p className="text-[#B0B0B0] text-lg mt-6 font-body font-light max-w-3xl pr-8">
                            Pelo Instagram (@teamlucasprado) ou pelo WhatsApp. A primeira conversa é sem compromisso — entendemos o seu objetivo e apresentamos as opções.
                        </p>
</details>
<details className="group border-b border-[rgba(41,121,255,0.15)] py-6 lg:py-8 cursor-pointer">
<summary className="flex justify-between items-center text-white font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
                            Qual é o valor?
                            <span className="transition-transform duration-300 group-open:rotate-45 text-[#2979FF]">
<i className="w-6 h-6 md:w-8 md:h-8" data-lucide="plus" strokeWidth="2"></i>
</span>
</summary>
<p className="text-[#B0B0B0] text-lg mt-6 font-body font-light max-w-3xl pr-8">
                            Os valores variam conforme a modalidade e o plano. Entre em contato para receber uma proposta personalizada.
                        </p>
</details>
</div>
</div>
</section>

<section className="relative bg-[#0B3D91] overflow-hidden pt-24 md:pt-32 pb-32">

<div className="absolute top-0 w-full overflow-hidden whitespace-nowrap bg-[#050D1A] py-3 border-b border-[#2979FF]/30 flex z-0">
<div className="animate-infinite-scroll flex font-mono text-sm uppercase tracking-widest text-[#2979FF]">
<span className="mx-4">S E G U I R · N O · I N S T A G R A M · @ T E A M L U C A S P R A D O</span>
<span className="mx-4">C O M E Ç A R · A G O R A · S E M · E N R O L A Ç Ã O</span>
<span className="mx-4">R E S U L T A D O · R E A L</span>
<span className="mx-4">S E G U I R · N O · I N S T A G R A M · @ T E A M L U C A S P R A D O</span>
<span className="mx-4">C O M E Ç A R · A G O R A · S E M · E N R O L A Ç Ã O</span>
<span className="mx-4">R E S U L T A D O · R E A L</span>
<span className="mx-4">S E G U I R · N O · I N S T A G R A M · @ T E A M L U C A S P R A D O</span>
<span className="mx-4">C O M E Ç A R · A G O R A · S E M · E N R O L A Ç Ã O</span>
<span className="mx-4">R E S U L T A D O · R E A L</span>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#2979FF] rounded-full blur-[120px] opacity-30 z-0 pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 relative z-10 flex flex-col items-center text-center mt-12">
<h2 className="font-display font-extrabold text-6xl md:text-8xl tracking-tight text-white uppercase leading-[0.9] drop-shadow-lg mb-8 max-w-4xl">
                    Chega de<br/>esperar o<br/>momento certo.
                </h2>
<p className="font-body text-xl md:text-2xl text-[#F2F2F2] max-w-2xl mb-12">
                    Primeira conversa sem compromisso. Você fala, a gente escuta e monta o plano certo para o seu objetivo.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="flex items-center justify-center gap-3 px-10 py-5 bg-[#2979FF] text-white uppercase font-display font-semibold text-xl tracking-widest rounded-sm hover:bg-white hover:text-[#0B3D91] transition-colors shadow-[0_0_32px_rgba(41,121,255,0.5)]" href="https://instagram.com/teamlucasprado" target="_blank">
<i className="w-6 h-6" data-lucide="instagram" strokeWidth="2"></i>
                        Seguir no Instagram
                    </a>
<a className="flex items-center justify-center gap-3 px-10 py-5 border-2 border-white text-white uppercase font-display font-semibold text-xl tracking-widest rounded-sm hover:bg-white/10 transition-colors" href="#whatsapp">
                        Falar no WhatsApp
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-[#050D1A] pt-20 pb-10 border-t border-[rgba(41,121,255,0.15)] relative z-10">
<div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 border-b border-[rgba(41,121,255,0.15)] pb-16">

<div className="md:col-span-12 lg:col-span-6 flex flex-col gap-6">
<span className="font-display font-bold text-4xl uppercase tracking-tight text-white">LP · Lucas Prado</span>
<span className="font-display font-bold text-2xl uppercase tracking-tight text-[#2979FF]">Resultado sem frescura.</span>
</div>

<div className="md:col-span-6 lg:col-span-3 flex flex-col gap-6">
<h4 className="font-mono text-sm text-[#B0B0B0] uppercase tracking-widest mb-2">Navegação</h4>
<nav className="flex flex-col gap-4">
<a className="font-body text-lg text-[#F2F2F2] hover:text-[#2979FF] transition-colors" href="#metodo">Método</a>
<a className="font-body text-lg text-[#F2F2F2] hover:text-[#2979FF] transition-colors" href="#resultados">Resultados</a>
<a className="font-body text-lg text-[#F2F2F2] hover:text-[#2979FF] transition-colors" href="#modalidades">Modalidades</a>
<a className="font-body text-lg text-[#F2F2F2] hover:text-[#2979FF] transition-colors" href="#sobre">Sobre</a>
</nav>
</div>

<div className="md:col-span-6 lg:col-span-3 flex flex-col gap-6">
<h4 className="font-mono text-sm text-[#B0B0B0] uppercase tracking-widest mb-2">Contato &amp; Redes</h4>
<div className="flex flex-col gap-4">
<a className="flex items-center gap-3 font-body text-lg text-[#F2F2F2] hover:text-[#2979FF] transition-colors" href="https://instagram.com/teamlucasprado" target="_blank">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
                            @teamlucasprado
                        </a>
<a className="flex items-center gap-3 font-body text-lg text-[#F2F2F2] hover:text-[#2979FF] transition-colors break-all" href="mailto:lucasspradoo01@gmail.com">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
                            lucasspradoo01@gmail.com
                        </a>
<a className="flex items-center gap-3 font-body text-lg text-[#F2F2F2] hover:text-[#2979FF] transition-colors" href="#whatsapp">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
                            WhatsApp Direto
                        </a>
</div>
</div>
</div>

<div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<span className="font-mono text-xs text-[#B0B0B0] uppercase tracking-widest text-center md:text-left">
                    Lucas Prado Personal Trainer · © 2026
                </span>
<span className="font-mono text-xs text-[rgba(41,121,255,0.5)] uppercase tracking-widest">
                    Design Dark Premium
                </span>
</div>
</div>
</footer>



    </>
  );
}
