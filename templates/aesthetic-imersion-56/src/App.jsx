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
sans: ['Inter', 'sans-serif'],
display: ['Playfair Display', 'serif'],
},
colors: {
brand: {
black: '#050505',
dark: '#0a0a0a',
card: '#121212',
accent: '#D4C5B0', // Muted champagne/gold
accentDark: '#A3947F',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Hero Animation
        const heroTl = gsap.timeline();
        heroTl.fromTo(".gsap-hero-item", 
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
        );

        // Scroll Animations
        gsap.utils.toArray('.gsap-section').forEach(section => {
            gsap.fromTo(section,
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                }
            );
        });

        // Header Background on Scroll
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shadow-lg', 'shadow-black/20');
                header.style.background = 'rgba(5, 5, 5, 0.9)';
            } else {
                header.classList.remove('shadow-lg', 'shadow-black/20');
                header.style.background = 'rgba(5, 5, 5, 0.7)';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="font-display text-lg tracking-[0.2em] text-white uppercase">
                B<span className="text-brand-accent">.</span>R<span className="text-brand-accent">.</span>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium tracking-widest uppercase bg-transparent border border-brand-accent/30 text-brand-accent hover:bg-brand-accent hover:text-brand-black transition-colors duration-300 rounded-sm" href="#oferta">
                Garantir Vaga
            </a>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Estética Labial Sophisticada" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/80 to-brand-black"></div>
<div className="absolute inset-0 bg-gradient-radial from-brand-accent/5 to-transparent opacity-50"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
<div className="gsap-hero-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<iconify-icon className="text-brand-accent text-base" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium tracking-wider uppercase text-zinc-200">10 de Junho • 20h • Online e Ao Vivo</span>
</div>
<h1 className="gsap-hero-item font-display text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-[1.1] mb-6 text-glow">
                Aprenda a técnica que entrega <br className="hidden md:block"/>
<span className="text-brand-accent italic">naturalidade extrema</span> e sofisticação.
            </h1>
<p className="gsap-hero-item text-base md:text-lg text-zinc-400 max-w-2xl font-light leading-relaxed mb-10">
                Em apenas 1h30, acompanhe um preenchimento labial completo em tempo real. Entenda como construir lábios refinados e altamente desejados, sem efeito artificial.
            </p>
<div className="gsap-hero-item grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-12 text-sm text-zinc-300 text-left">
<div className="flex items-center gap-3"><iconify-icon className="text-brand-accent text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Técnica narrada ao vivo</div>
<div className="flex items-center gap-3"><iconify-icon className="text-brand-accent text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Naturalidade extrema</div>
<div className="flex items-center gap-3"><iconify-icon className="text-brand-accent text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Demonstração prática real</div>
<div className="flex items-center gap-3"><iconify-icon className="text-brand-accent text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Estruturação labial sofisticada</div>
<div className="flex items-center gap-3"><iconify-icon className="text-brand-accent text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Plano seguro de aplicação</div>
<div className="flex items-center gap-3"><iconify-icon className="text-brand-accent text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Prevenção de intercorrências</div>
</div>
<div className="gsap-hero-item flex flex-col items-center gap-4 w-full sm:w-auto">
<div className="text-zinc-400 text-sm">🎟️ Primeiro lote: <span className="text-white text-lg font-medium">R$19,97</span></div>
<a className="button-glow w-full sm:w-auto px-10 py-4 bg-brand-accent text-brand-black font-medium tracking-wider uppercase text-sm rounded-sm hover:bg-white transition-colors flex items-center justify-center gap-2" href="#oferta">
                    Garantir Minha Vaga
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<span className="text-xs text-brand-accent/70 tracking-wide uppercase">Vagas limitadas para a transmissão ao vivo</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="gsap-section order-2 lg:order-1 relative">
<div className="aspect-[4/5] rounded-sm overflow-hidden relative">
<img alt="Detalhe Estético" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-brand-black/20"></div>
</div>

<div className="absolute -bottom-6 -right-6 w-48 p-6 glass-card border border-white/10 rounded-sm">
<p className="font-display text-xl text-white italic">"O novo padrão não é exagero. É refinamento."</p>
</div>
</div>
<div className="gsap-section order-1 lg:order-2">
<h2 className="font-display text-3xl md:text-5xl text-white tracking-tighter mb-8 leading-tight">
                        O mercado entrega volume. <br/>
<span className="text-zinc-500">Poucas entregam refinamento.</span>
</h2>
<div className="space-y-6 text-zinc-400 font-light leading-relaxed">
<p>Hoje, o preenchimento labial se tornou um dos procedimentos mais realizados nas clínicas. Mas também se tornou um dos mais mal executados.</p>
<p>A maioria das profissionais ainda entrega:</p>
<ul className="space-y-3 text-sm text-zinc-300">
<li className="flex items-center gap-3"><iconify-icon className="text-red-900/70 text-lg" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon> Lábios artificiais</li>
<li className="flex items-center gap-3"><iconify-icon className="text-red-900/70 text-lg" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon> Falta de estrutura</li>
<li className="flex items-center gap-3"><iconify-icon className="text-red-900/70 text-lg" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon> Excesso de produto</li>
<li className="flex items-center gap-3"><iconify-icon className="text-red-900/70 text-lg" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon> Resultados sem sofisticação</li>
<li className="flex items-center gap-3"><iconify-icon className="text-red-900/70 text-lg" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon> Baixa previsibilidade clínica</li>
</ul>
<div className="pt-6 border-t border-white/5 mt-6">
<p className="text-white text-base">E é exatamente por isso que as pacientes estão procurando profissionais capazes de entregar algo diferente:</p>
<p className="font-display text-2xl text-brand-accent mt-4 italic tracking-wide">Naturalidade. Elegância. Estrutura. Sofisticação.</p>
<p className="mt-4 text-sm">Quem domina essa nova estética se destaca no mercado, fideliza pacientes e aumenta autoridade profissional.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 gsap-section">
<span className="text-brand-accent text-xs tracking-widest uppercase font-medium mb-4 block">A Imersão</span>
<h2 className="font-display text-3xl md:text-5xl text-white tracking-tighter">O que você vai aprender ao vivo</h2>
<p className="text-zinc-400 mt-4 max-w-2xl mx-auto font-light">Acompanhe um procedimento completo realizado em tempo real. Sem cortes. Sem edição. Sem superficialidade.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)] gsap-section">

<div className="glass-card p-8 rounded-sm flex flex-col justify-between md:col-span-2 group hover:bg-white/[0.02] transition-colors">
<iconify-icon className="text-3xl text-brand-accent mb-6" icon="solar:eye-scan-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="text-white text-lg font-medium mb-2">Leitura e Estruturação</h3>
<p className="text-sm text-zinc-400 font-light">Anatomia aplicada ao preenchimento e planejamento estratégico antes da primeira gota de produto.</p>
</div>
</div>

<div className="glass-card p-8 rounded-sm flex flex-col justify-between group hover:bg-white/[0.02] transition-colors">
<iconify-icon className="text-3xl text-brand-accent mb-6" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="text-white text-lg font-medium mb-2">Naturalidade Extrema</h3>
<p className="text-sm text-zinc-400 font-light">A técnica exata para evitar o aspecto artificial e criar lábios elegantes.</p>
</div>
</div>

<div className="glass-card p-8 rounded-sm flex flex-col justify-between group hover:bg-white/[0.02] transition-colors">
<iconify-icon className="text-3xl text-brand-accent mb-6" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="text-white text-lg font-medium mb-2">Segurança Clínica</h3>
<p className="text-sm text-zinc-400 font-light">Estratégias claras de prevenção de intercorrências e escolha correta do produto.</p>
</div>
</div>

<div className="glass-card p-8 rounded-sm flex flex-col justify-between md:col-span-2 relative overflow-hidden group hover:bg-white/[0.02] transition-colors">
<div className="relative z-10">
<iconify-icon className="text-3xl text-brand-accent mb-6" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-white text-lg font-medium mb-2">Raciocínio Explicado</h3>
<p className="text-sm text-zinc-400 font-light max-w-md">Durante todo o procedimento, o raciocínio clínico é narrado ao vivo, entregando uma técnica refinada e replicável na sua clínica.</p>
</div>

<iconify-icon className="absolute -bottom-10 -right-10 text-[150px] text-white/[0.02]" icon="solar:video-frame-linear" strokeWidth="1"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 gsap-section">
<h2 className="font-display text-3xl md:text-4xl text-white tracking-tighter mb-6">Para quem é <br/>essa imersão?</h2>
<p className="text-zinc-400 font-light text-sm mb-8">Essa aula é para profissionais que querem sair do básico e se tornarem referência em resultados sofisticados.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 text-xs border border-white/10 rounded-full text-zinc-300">Médicas</span>
<span className="px-3 py-1 text-xs border border-white/10 rounded-full text-zinc-300">Biomédicas</span>
<span className="px-3 py-1 text-xs border border-white/10 rounded-full text-zinc-300">Dentistas</span>
<span className="px-3 py-1 text-xs border border-white/10 rounded-full text-zinc-300">Farmacêuticas estetas</span>
<span className="px-3 py-1 text-xs border border-white/10 rounded-full text-zinc-300">Enfermeiras</span>
</div>
</div>
<div className="lg:col-span-8 gsap-section">
<div className="glass-card p-8 md:p-10 rounded-sm">
<h3 className="text-lg text-white font-medium mb-6">Para profissionais que desejam:</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm text-zinc-400 font-light">
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-accent mt-0.5 text-base shrink-0" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span>Elevar o nível técnico dos seus procedimentos</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-accent mt-0.5 text-base shrink-0" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span>Entregar resultados sofisticados e naturais</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-accent mt-0.5 text-base shrink-0" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span>Ter muito mais segurança clínica</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-accent mt-0.5 text-base shrink-0" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span>Aprender uma técnica refinada e aplicável</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-accent mt-0.5 text-base shrink-0" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span>Reduzir a insegurança nos atendimentos</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-accent mt-0.5 text-base shrink-0" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span>Aumentar sua autoridade e faturamento</span>
</div>
</div>
<div className="mt-10 pt-8 border-t border-white/5 text-center">
<p className="font-display text-2xl text-white italic tracking-wide">"Mais do que volume: estrutura, harmonia e naturalidade."</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="gsap-section">
<span className="text-brand-accent text-xs tracking-widest uppercase font-medium mb-4 block">A Mentora</span>
<h2 className="font-display text-3xl md:text-5xl text-white tracking-tighter mb-6">Dra. Barbara Ribeiro</h2>
<div className="space-y-6 text-zinc-400 font-light text-sm md:text-base leading-relaxed">
<p className="text-lg text-zinc-300 font-normal">Referência em preenchimento labial sofisticado, natural e seguro.</p>
<p>Com mais de 7 anos de experiência na harmonização facial, a Dra. Barbara Ribeiro se tornou reconhecida pelas suas técnicas avançadas voltadas à naturalidade extrema e refinamento estético.</p>
<p>Além da atuação clínica, ministra treinamentos e mentorias para profissionais que desejam elevar o padrão dos seus resultados, entregando um método que une:</p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-sm text-zinc-300">
<li className="flex items-center gap-2"><iconify-icon className="text-brand-accent text-lg" icon="solar:star-circle-linear" strokeWidth="1.5"></iconify-icon> Segurança clínica</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-accent text-lg" icon="solar:star-circle-linear" strokeWidth="1.5"></iconify-icon> Estruturação estratégica</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-accent text-lg" icon="solar:star-circle-linear" strokeWidth="1.5"></iconify-icon> Sofisticação estética</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-accent text-lg" icon="solar:star-circle-linear" strokeWidth="1.5"></iconify-icon> Resultados elegantes</li>
</ul>
</div>
</div>
<div className="gsap-section relative">
<div className="aspect-[3/4] rounded-sm overflow-hidden border border-white/5">
<img alt="Dra. Barbara Ribeiro" className="w-full h-full object-cover grayscale opacity-80 mix-blend-lighten" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6 gsap-section">
<h2 className="font-display text-3xl md:text-4xl text-white tracking-tighter mb-12 text-center">O que te impede de dar o próximo passo?</h2>
<div className="space-y-6">

<div className="glass-card p-6 rounded-sm border border-white/5">
<h4 className="text-white font-medium mb-3 flex items-start gap-3">
<iconify-icon className="text-brand-accent text-xl mt-0.5" icon="solar:question-circle-linear" strokeWidth="1.5"></iconify-icon>
                        “E se eu não conseguir aplicar a técnica?”
                    </h4>
<div className="text-sm text-zinc-400 font-light pl-8 space-y-3">
<p>Essa imersão foi criada exatamente para tornar o preenchimento mais previsível. Você não verá apenas "onde aplicar", vai entender:</p>
<ul className="space-y-1">
<li>• O porquê de cada aplicação</li>
<li>• O raciocínio clínico</li>
<li>• A estruturação correta</li>
</ul>
</div>
</div>

<div className="glass-card p-6 rounded-sm border border-white/5">
<h4 className="text-white font-medium mb-3 flex items-start gap-3">
<iconify-icon className="text-brand-accent text-xl mt-0.5" icon="solar:question-circle-linear" strokeWidth="1.5"></iconify-icon>
                        “Já fiz outros cursos e foram superficiais.”
                    </h4>
<p className="text-sm text-zinc-400 font-light pl-8">Aqui você acompanha um procedimento real, com técnica narrada ao vivo, explicação detalhada e demonstração <strong>sem edição</strong>. É conteúdo de mentoria avançada.</p>
</div>

<div className="glass-card p-6 rounded-sm border border-white/5">
<h4 className="text-white font-medium mb-3 flex items-start gap-3">
<iconify-icon className="text-brand-accent text-xl mt-0.5" icon="solar:question-circle-linear" strokeWidth="1.5"></iconify-icon>
                        “Tenho medo de entregar resultados artificiais.”
                    </h4>
<p className="text-sm text-zinc-400 font-light pl-8">A técnica da Dra. Barbara é 100% voltada à naturalidade. Você aprenderá como entregar estrutura sem exagerar no volume.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-brand-dark" id="oferta">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 gsap-section">
<div className="glass-card border border-brand-accent/20 p-8 md:p-12 rounded-sm text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-8">
<span className="text-xs font-medium tracking-wider uppercase text-brand-accent">Acesso Exclusivo</span>
</div>
<h2 className="font-display text-4xl md:text-5xl text-white tracking-tighter mb-6">Sua vaga na Imersão Ao Vivo</h2>
<p className="text-zinc-400 text-sm md:text-base font-light mb-10 max-w-xl mx-auto">
                    Quem domina a arte de preencher lábios com naturalidade se torna referência. Garanta sua participação hoje e receba:
                </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-sm text-zinc-300 max-w-2xl mx-auto mb-12">
<div className="flex items-center gap-3"><iconify-icon className="text-brand-accent text-lg" icon="solar:check-circle-bold" strokeWidth="1.5"></iconify-icon> Demonstração prática real</div>
<div className="flex items-center gap-3"><iconify-icon className="text-brand-accent text-lg" icon="solar:check-circle-bold" strokeWidth="1.5"></iconify-icon> Procedimento completo</div>
<div className="flex items-center gap-3"><iconify-icon className="text-brand-accent text-lg" icon="solar:check-circle-bold" strokeWidth="1.5"></iconify-icon> Técnica de escultura avançada</div>
<div className="flex items-center gap-3"><iconify-icon className="text-brand-accent text-lg" icon="solar:check-circle-bold" strokeWidth="1.5"></iconify-icon> Raciocínio clínico detalhado</div>
<div className="flex items-center gap-3"><iconify-icon className="text-brand-accent text-lg" icon="solar:check-circle-bold" strokeWidth="1.5"></iconify-icon> Prevenção de intercorrências</div>
<div className="flex items-center gap-3"><iconify-icon className="text-brand-accent text-lg" icon="solar:check-circle-bold" strokeWidth="1.5"></iconify-icon> Espaço para dúvidas ao vivo</div>
</div>
<div className="mb-8">
<p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Investimento Promocional (1º Lote)</p>
<div className="flex justify-center items-start gap-1">
<span className="text-lg text-white mt-1">R$</span>
<span className="text-6xl font-display text-white tracking-tighter">19<span className="text-4xl text-zinc-400">,97</span></span>
</div>
<p className="text-xs text-brand-accent/70 mt-3">Uma oportunidade acessível para aprender uma técnica de mentoria.</p>
</div>
<a className="button-glow inline-flex items-center justify-center gap-2 w-full md:w-auto px-12 py-5 bg-brand-accent text-brand-black font-medium tracking-wider uppercase text-sm rounded-sm hover:bg-white transition-colors" href="#">
                    Quero Entrar na Imersão
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="mt-6 flex items-center justify-center gap-4 text-xs text-zinc-500 uppercase tracking-wider">
<span>📅 10 de Junho</span>
<span>•</span>
<span>🕗 20h</span>
<span>•</span>
<span>📍 Online e Ao Vivo</span>
</div>
</div>
</div>
</section>

<footer className="py-8 border-t border-white/5 text-center bg-brand-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="font-display text-sm tracking-[0.2em] text-white uppercase">
                B<span className="text-brand-accent">.</span>R<span className="text-brand-accent">.</span>
</div>
<p className="text-xs text-zinc-600 font-light">
                © 2026 Preenchimento Labial. Todos os direitos reservados.
            </p>
</div>
</footer>



    </>
  );
}
