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



        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Hero Entrance Animation
        gsap.from(".gsap-hero-element", {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2
        });

        // Scroll Reveal Animations
        gsap.utils.toArray('.gsap-fade-up').forEach(element => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        });

        // Subtle Header Background Change on Scroll
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-[#050505]/90', 'shadow-[0_4px_30px_rgba(0,0,0,0.5)]');
                header.classList.remove('bg-[#050505]/70');
            } else {
                header.classList.remove('bg-[#050505]/90', 'shadow-[0_4px_30px_rgba(0,0,0,0.5)]');
                header.classList.add('bg-[#050505]/70');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] glow-red rounded-full blur-[100px] pointer-events-none -z-10"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] glow-navy rounded-full blur-[100px] pointer-events-none -z-10"></div>

<header className="fixed top-0 w-full z-50 bg-[#050505]/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-syne font-semibold text-lg tracking-tighter text-white" href="#">
                WASHINGTON<span className="text-white/50">SANTOS</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#metodo">O Método</a>
<a className="hover:text-white transition-colors" href="#historia">História</a>
<a className="hover:text-white transition-colors" href="#palestras">Palestras</a>
</div>
<a className="bg-white text-black px-5 py-2 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2" href="https://wa.me/5512991998820" target="_blank">
                Agendar Reunião
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</header>

<section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 -z-20 mix-blend-luminosity"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent -z-10"></div>
<div className="gsap-hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-zinc-300 mb-8">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Gestão Comercial de Elite para Clínicas Odontológicas
        </div>
<h1 className="gsap-hero-element font-syne font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 max-w-5xl leading-[1.1] mb-6">
            Preencha sua agenda.<br/> Resgate sua identidade.
        </h1>
<p className="gsap-hero-element text-zinc-400 text-base md:text-lg max-w-2xl font-light mb-10 leading-relaxed">
            Soluções práticas, imediatas e validadas por mais de 8 anos de mercado. Devolvemos a alegria de investir e o tesão em empreender, vender e expandir sua clínica.
        </p>
<div className="gsap-hero-element flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2" href="https://wa.me/5512991998820">
                Levar para minha Clínica
                <iconify-icon icon="solar:arrow-up-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center gap-2" href="#historia">
                Conhecer a História
            </a>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#0a0a0a]/50">
<p className="text-center text-xs text-zinc-500 font-medium mb-6 tracking-widest uppercase">Gigantes que confiam no método</p>
<div className="marquee-container">
<div className="marquee-content items-center">
<span className="text-xl md:text-2xl font-syne font-semibold text-zinc-600 px-12">Viva Sorrindo</span>
<span className="text-xl md:text-2xl font-syne font-semibold text-zinc-600 px-12">Orthodontic</span>
<span className="text-xl md:text-2xl font-syne font-semibold text-zinc-600 px-12">Orthopride</span>
<span className="text-xl md:text-2xl font-syne font-semibold text-zinc-600 px-12">Oraldents</span>
<span className="text-xl md:text-2xl font-syne font-semibold text-zinc-600 px-12">Odontocompany</span>
</div>
<div aria-hidden="true" className="marquee-content items-center">
<span className="text-xl md:text-2xl font-syne font-semibold text-zinc-600 px-12">Viva Sorrindo</span>
<span className="text-xl md:text-2xl font-syne font-semibold text-zinc-600 px-12">Orthodontic</span>
<span className="text-xl md:text-2xl font-syne font-semibold text-zinc-600 px-12">Orthopride</span>
<span className="text-xl md:text-2xl font-syne font-semibold text-zinc-600 px-12">Oraldents</span>
<span className="text-xl md:text-2xl font-syne font-semibold text-zinc-600 px-12">Odontocompany</span>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto relative" id="metodo">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50vh] glow-blue rounded-full blur-[120px] pointer-events-none -z-10 opacity-50"></div>
<div className="mb-16 md:mb-24">
<h2 className="gsap-fade-up font-syne font-semibold text-3xl md:text-5xl tracking-tighter text-white mb-4">Ação. Sem enrolação.</h2>
<p className="gsap-fade-up text-zinc-400 text-base md:text-lg max-w-xl">Diferente de teorias rasas, entregamos execução brutal. Uma abordagem simples, objetiva e que se comunica com todos os níveis da sua empresa.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">

<div className="gsap-fade-up bento-card md:col-span-2 bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-6">
<iconify-icon className="text-white" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-syne font-semibold text-2xl text-white mb-2 tracking-tight">Faturar de Verdade</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-md">Resultados práticos e imediatos. Entendemos que você montou sua unidade para investir e precisa de um retorno real, sem métricas de vaidade.</p>
</div>
</div>

<div className="gsap-fade-up bento-card md:col-span-1 bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-6">
<iconify-icon className="text-white" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-syne font-semibold text-xl text-white mb-2 tracking-tight">Comunicação 360º</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Do "povão" ao plano executivo em segundos. Fazemos cada perfil de funcionário participar e evoluir.</p>
</div>
</div>

<div className="gsap-fade-up bento-card md:col-span-1 bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-6">
<iconify-icon className="text-white" icon="solar:brain-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-syne font-semibold text-xl text-white mb-2 tracking-tight">Mudança de Mentalidade</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Devolução da sua identidade como empreendedor. Destravamos a mente de toda a equipe.</p>
</div>
</div>

<div className="gsap-fade-up bento-card md:col-span-2 bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-6">
<iconify-icon className="text-white" icon="solar:shield-star-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-syne font-semibold text-2xl text-white mb-2 tracking-tight">Autoridade Vivenciada</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-md">100% de nossos clientes vieram de indicação nos últimos 8 anos. Uma base sólida construída puramente em entrega e competência tática.</p>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 relative overflow-hidden" id="historia">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10">

<img alt="Ambiente corporativo de alta performance" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2064&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
<p className="font-syne text-lg text-white font-medium italic">"Não tive um mentor. Tive que tirar o aprendizado chorando sozinho em quartos de hotéis. Tudo o que compartilho foi vivido."</p>
</div>
</div>
</div>
<div className="flex flex-col justify-center">
<div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-widest mb-6">
<iconify-icon icon="solar:history-linear" width="16"></iconify-icon>
                        A Trajetória
                    </div>
<h2 className="font-syne font-semibold text-3xl md:text-5xl tracking-tighter text-white mb-8">Da areia da praia à gestão de redes nacionais.</h2>
<div className="space-y-6 text-sm md:text-base text-zinc-400 leading-relaxed font-light">
<p>
                            Nascido em Ubatuba/SP, o trabalho começou cedo, aos 10 anos. Vendi camarão na praia, trabalhei em obras e feiras para sustentar a casa. Após enfrentar e vencer desafios pessoais profundos na juventude, transformei minha realidade através do trabalho e de pessoas que acreditaram em mim.
                        </p>
<p>
                            Na praia, criei um personagem, o "Rosinha", que quebrava recordes de faturamento no trailer apenas levando alegria e dedicação extrema ao cliente. Essa essência comercial me levou a subir a serra. Comecei como vendedor, logo me tornei gerente de unidades e, através da <strong className="text-white font-medium">meritocracia</strong>, assumi a gestão regional de uma grande marca odontológica viajando o Brasil.
                        </p>
<p>
                            Há 8 anos nasceu a <strong className="text-white font-medium">Ethos Consultoria Comercial</strong>. Hoje, através das palestras do Washington Santos, nossa missão é destravar a mente de empreendedores país afora. Cada passo foi dado na pura raça.
                        </p>
</div>
<div className="mt-10 flex items-center gap-6">
<div className="flex flex-col">
<span className="font-syne font-semibold text-3xl text-white">8+</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Anos de Mercado</span>
</div>
<div className="w-px h-12 bg-white/10"></div>
<div className="flex flex-col">
<span className="font-syne font-semibold text-3xl text-white">100%</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Crescimento Orgânico</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="palestras">
<div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
<h2 className="relative z-10 font-syne font-semibold text-3xl md:text-5xl tracking-tighter text-white mb-6">Pronto para elevar o patamar da sua equipe?</h2>
<p className="relative z-10 text-zinc-400 text-sm md:text-base max-w-2xl mx-auto mb-10">
                Palestras e treinamentos intensivos para a área comercial. Soluções que devolvem a capacidade de faturar alto e gerir sua clínica odontológica com excelência.
            </p>
<a className="relative z-10 inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]" href="https://wa.me/5512991998820">
                Agendar Palestra Agora
                <iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</a>
<p className="relative z-10 text-xs text-zinc-500 mt-6 flex items-center justify-center gap-2">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon>
                (12) 99199-8820 • ethosconsultoriacomercial@gmail.com
            </p>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="font-syne font-semibold text-sm tracking-tighter text-white">
                WASHINGTON<span className="text-white/50">SANTOS</span>
</div>
<div className="flex items-center gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
<div className="text-xs text-zinc-600 font-medium">
                © 2026 Washington Santos. Todos os direitos reservados.
            </div>
</div>
</footer>



    </>
  );
}
