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



        // Theme Toggle Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeLabel = document.getElementById('theme-label');
        const htmlElement = document.documentElement;

        // Check local storage for theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('theme-light');
            themeLabel.textContent = 'F/1.4';
        }

        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('theme-light');
            
            if (document.body.classList.contains('theme-light')) {
                themeLabel.textContent = 'F/1.4';
                localStorage.setItem('theme', 'light');
            } else {
                themeLabel.textContent = 'F/2.8';
                localStorage.setItem('theme', 'dark');
            }
        });

        // Intersection Observer for Fade-Up Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Trigger only once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach(element => {
            observer.observe(element);
        });

        // Form Submit Simulation
        function handleFormSubmit(event) {
            event.preventDefault();
            const formContainer = document.getElementById('form-container');
            const successState = document.getElementById('success-state');
            
            formContainer.style.display = 'none';
            successState.classList.remove('hidden');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-[1100px] z-50 px-4">
<nav className="nav-pill rounded-full px-6 py-4 flex items-center justify-between">

<div className="hidden md:flex items-center gap-6">
<a className="caps-tracked text-xs text-muted hover:text-[var(--text-main)] transition-colors" href="#filmes">Filmes</a>
<a className="caps-tracked text-xs text-muted hover:text-[var(--text-main)] transition-colors" href="#fotos">Fotos</a>
<a className="caps-tracked text-xs text-muted hover:text-[var(--text-main)] transition-colors" href="#sobre">Sobre</a>
<a className="caps-tracked text-xs text-muted hover:text-[var(--text-main)] transition-colors" href="#pacotes">Pacotes</a>
</div>

<div className="md:absolute md:left-1/2 md:-translate-x-1/2">
<a className="font-serif italic text-xl" href="#">Monte Filmes</a>
</div>

<div className="flex items-center gap-4 md:gap-6">
<a className="caps-tracked text-xs text-muted hover:text-[var(--text-main)] transition-colors hidden md:block" href="#">Instagram</a>
<a className="caps-tracked text-xs text-muted hover:text-[var(--text-main)] transition-colors hidden md:block" href="#">WhatsApp</a>

<button className="flex items-center gap-2 caps-tracked text-xs border dynamic-border rounded-full px-3 py-1.5 hover:bg-[var(--text-main)] hover:text-[var(--bg-main)] transition-all group" id="theme-toggle">
<span id="theme-label">F/2.8</span>
<iconify-icon className="text-base group-hover:rotate-90 transition-transform duration-500" icon="solar:camera-minimalistic-linear"></iconify-icon>
</button>
</div>
</nav>
</header>

<main>

<section className="h-screen p-4 flex flex-col relative">
<div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#111]">

<img alt="Casamento Cinematográfico" className="absolute inset-0 w-full h-full object-cover img-placeholder scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-black/35"></div>

<div className="absolute bottom-10 left-6 md:bottom-20 md:left-16 z-10 max-w-4xl fade-up">
<p className="caps-tracked text-xs text-white/70 mb-6 flex items-center gap-2">
                        Rio de Janeiro <span className="text-[8px]">▸</span> Desde 2018 <span className="text-[8px]">▸</span> +500 Casamentos
                    </p>
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#F5F1EB] leading-none mb-6">
                        Filmes que<br/>viram memória.
                    </h1>
<p className="text-base md:text-lg text-white/80 max-w-md font-sans mb-10 leading-relaxed">
                        Registro cinematográfico de casamentos no Rio, Sudeste e onde o amor te levar.
                    </p>
<a className="inline-flex items-center gap-3 caps-tracked text-xs px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all" href="#contato">
                        Reserve sua data <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 scroll-indicator">
<div className="w-px h-10 bg-white/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
</div>
</div>
</section>

<section className="pt-[120px] md:pt-[200px] px-6 max-w-[1080px] mx-auto" id="filmes">
<div className="text-center mb-24 fade-up">
<p className="caps-tracked text-xs text-muted mb-6">01 ▸ Filmes</p>
<h2 className="font-serif text-5xl md:text-7xl mb-6">Cinema, não casamento.</h2>
<p className="text-base text-muted max-w-xl mx-auto">Nossa abordagem foge do tradicional. Buscamos a luz certa, o ritmo perfeito e o peso emocional que a sua história exige.</p>
</div>

<div className="mb-40 relative fade-up">
<p className="caps-tracked text-xs text-muted mb-6 text-center">Novembro 2025 ▸ Petrópolis, RJ</p>
<div className="relative w-full aspect-video rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Filme Júlia &amp; Rafael" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>

<img alt="Thumb" className="absolute -bottom-6 -left-6 w-32 h-40 md:w-48 md:h-56 object-cover rounded-2xl border-4 dynamic-border shadow-2xl -rotate-6 z-20 hidden md:block" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="Thumb" className="absolute -top-6 -right-6 w-32 h-40 md:w-48 md:h-56 object-cover rounded-2xl border-4 dynamic-border shadow-2xl rotate-3 z-20 hidden md:block" src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="text-center mt-12">
<h3 className="font-serif text-4xl md:text-5xl mb-8">Júlia &amp; Rafael</h3>
<button className="btn-outline rounded-full px-8 py-3 caps-tracked text-xs inline-flex items-center gap-2">
                        Ver o filme <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="mb-40 relative fade-up">
<p className="caps-tracked text-xs text-muted mb-6 text-center">Setembro 2025 ▸ Rio de Janeiro, RJ</p>
<div className="relative w-full aspect-video rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Filme Mariana &amp; Pedro" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-black/20"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
<div className="text-center mt-12">
<h3 className="font-serif text-4xl md:text-5xl mb-8">Mariana &amp; Pedro</h3>
<button className="btn-outline rounded-full px-8 py-3 caps-tracked text-xs inline-flex items-center gap-2">
                        Ver o filme <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="text-center pb-20 fade-up">
<button className="caps-tracked text-xs text-muted hover:text-[var(--text-main)] transition-colors inline-flex items-center gap-2 border-b dynamic-border pb-1">
                    Carregar mais filmes <iconify-icon icon="solar:refresh-linear"></iconify-icon>
</button>
</div>
</section>

<section className="pt-[120px] pb-[120px] px-4 md:px-8" id="fotos">
<div className="text-center mb-16 fade-up">
<p className="caps-tracked text-xs text-muted mb-6">02 ▸ Stills</p>
<h2 className="font-serif text-5xl md:text-7xl mb-10">Cada olhar. Eternizado.</h2>

<div className="flex flex-wrap justify-center gap-3">
<button className="nav-pill rounded-full px-5 py-2 caps-tracked text-[10px] text-[var(--text-main)]">Tudo</button>
<button className="border dynamic-border rounded-full px-5 py-2 caps-tracked text-[10px] text-muted hover:text-[var(--text-main)] transition-colors">Cerimônia</button>
<button className="border dynamic-border rounded-full px-5 py-2 caps-tracked text-[10px] text-muted hover:text-[var(--text-main)] transition-colors">Detalhes</button>
<button className="border dynamic-border rounded-full px-5 py-2 caps-tracked text-[10px] text-muted hover:text-[var(--text-main)] transition-colors">Festa</button>
</div>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 max-w-[1400px] mx-auto fade-up">
<div className="break-inside-avoid rounded-3xl overflow-hidden cursor-pointer group">
<img alt="Foto" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="break-inside-avoid rounded-3xl overflow-hidden cursor-pointer group">
<img alt="Foto" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="break-inside-avoid rounded-3xl overflow-hidden cursor-pointer group">
<img alt="Foto" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="break-inside-avoid rounded-3xl overflow-hidden cursor-pointer group">
<img alt="Foto" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="break-inside-avoid rounded-3xl overflow-hidden cursor-pointer group">
<img alt="Foto" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="break-inside-avoid rounded-3xl overflow-hidden cursor-pointer group">
<img alt="Foto" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</section>

<section className="pt-[160px] pb-[160px] px-6 max-w-[800px] mx-auto text-center" id="sobre">
<div className="fade-up">
<p className="caps-tracked text-xs text-muted mb-6">03 ▸ Por trás da câmera</p>
<h2 className="font-serif text-5xl md:text-7xl mb-12">Lucas Monteiro</h2>
<p className="font-serif italic text-2xl md:text-3xl leading-loose md:leading-loose text-[var(--text-main)] mb-16">
                    "Em 2018 eu peguei uma câmera <span className="img-glyph glyph-1"></span> e comecei a registrar casamentos no Rio. Sete anos depois, mais de 500 filmes <span className="img-glyph glyph-2"></span> viraram memória de família."
                </p>
<div className="w-full max-w-[400px] aspect-[4/5] mx-auto rounded-3xl overflow-hidden mb-12">
<img alt="Lucas Monteiro" className="w-full h-full object-cover grayscale" loading="lazy" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<button className="btn-outline rounded-full px-8 py-3 caps-tracked text-xs inline-flex items-center gap-2 mb-20">
                    Ler minha história <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>

<div className="border-t dynamic-border pt-8 max-w-xs mx-auto">
<p className="caps-tracked text-[10px] text-muted mb-2">In Memoriam ▸ Felipe 🙏</p>
<p className="font-serif italic text-sm text-muted">Sempre no frame.</p>
</div>
</div>
</section>

<section className="py-[120px] px-4 md:px-8" id="pacotes">
<div className="text-center mb-20 fade-up">
<p className="caps-tracked text-xs text-muted mb-6">04 ▸ Investimento</p>
<h2 className="font-serif text-5xl md:text-7xl">Escolha como reviver.</h2>
</div>
<div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

<div className="rounded-3xl border dynamic-border p-10 fade-up">
<p className="caps-tracked text-xs text-muted mb-4">Clássico</p>
<h3 className="font-serif text-4xl mb-8">O essencial</h3>
<ul className="space-y-4 text-sm mb-10">
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-muted" icon="solar:videocamera-linear"></iconify-icon> Cobertura 8 horas</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-muted" icon="solar:film-roll-linear"></iconify-icon> Filme de 10-15 min</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-muted" icon="solar:clapperboard-play-linear"></iconify-icon> Teaser 1 minuto</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-muted" icon="solar:user-circle-linear"></iconify-icon> 2 Cinegrafistas</li>
</ul>
<hr className="dynamic-border mb-6"/>
<p className="caps-tracked text-[10px] text-muted mb-1">A partir de</p>
<p className="font-serif text-3xl mb-2">R$ 7.500</p>
<p className="text-xs text-muted mb-8">em até 6x sem juros</p>
<a className="btn-outline block text-center rounded-full py-3 caps-tracked text-xs w-full" href="#contato">Solicitar →</a>
</div>

<div className="rounded-3xl border border-[#B8860B] p-12 bg-[var(--bg-secondary)] relative md:scale-105 z-10 shadow-2xl fade-up" style={{animationDelay: '100ms'}}>
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B8860B] text-[#0E0E0C] px-4 py-1 rounded-full caps-tracked text-[9px] font-bold">Mais Escolhido</div>
<p className="caps-tracked text-xs text-muted mb-4">Storytelling</p>
<h3 className="font-serif text-4xl mb-8">O filme completo</h3>
<ul className="space-y-4 text-sm mb-10">
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-[#B8860B]" icon="solar:videocamera-linear"></iconify-icon> Cobertura 12 horas</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-[#B8860B]" icon="solar:film-roll-linear"></iconify-icon> Filme Documental (20-25m)</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-[#B8860B]" icon="solar:clapperboard-play-linear"></iconify-icon> Trailer Cinematográfico 3m</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-[#B8860B]" icon="solar:drone-linear"></iconify-icon> Imagens Aéreas (Drone)</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-[#B8860B]" icon="solar:users-group-rounded-linear"></iconify-icon> 3 Cinegrafistas</li>
</ul>
<hr className="dynamic-border mb-6"/>
<p className="caps-tracked text-[10px] text-muted mb-1">A partir de</p>
<p className="font-serif text-4xl mb-2">R$ 12.500</p>
<p className="text-xs text-muted mb-8">em até 6x sem juros</p>
<a className="bg-[#B8860B] text-[#0E0E0C] block text-center rounded-full py-3 caps-tracked text-xs w-full hover:bg-white transition-colors" href="#contato">Solicitar →</a>
</div>

<div className="rounded-3xl border dynamic-border p-10 fade-up" style={{animationDelay: '200ms'}}>
<p className="caps-tracked text-xs text-muted mb-4">Premium</p>
<h3 className="font-serif text-4xl mb-8">Só fotografia</h3>
<ul className="space-y-4 text-sm mb-10">
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-muted" icon="solar:camera-linear"></iconify-icon> Cobertura 10 horas</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-muted" icon="solar:gallery-linear"></iconify-icon> +800 fotos editadas</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-muted" icon="solar:hearts-linear"></iconify-icon> Ensaio Pré-Wedding</li>
<li className="flex items-center gap-3"><iconify-icon className="text-lg text-muted" icon="solar:user-circle-linear"></iconify-icon> 2 Fotógrafos</li>
</ul>
<hr className="dynamic-border mb-6"/>
<p className="caps-tracked text-[10px] text-muted mb-1">A partir de</p>
<p className="font-serif text-3xl mb-2">R$ 9.500</p>
<p className="text-xs text-muted mb-8">em até 6x sem juros</p>
<a className="btn-outline block text-center rounded-full py-3 caps-tracked text-xs w-full" href="#contato">Solicitar →</a>
</div>
</div>
</section>

<section className="py-[120px] overflow-hidden">
<div className="px-6 md:px-12 mb-16 fade-up">
<p className="caps-tracked text-xs text-muted mb-4">05 ▸ Casais</p>
<h2 className="font-serif text-5xl md:text-7xl">O que dizem depois.</h2>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-12 hide-scrollbar fade-up">

<div className="snap-center shrink-0 w-[85vw] md:w-[500px] bg-[var(--bg-secondary)] rounded-3xl p-10 flex flex-col justify-between">
<div>
<div className="w-16 h-16 rounded-full overflow-hidden mb-6">
<img alt="Casal" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<p className="font-serif italic text-2xl leading-relaxed text-[var(--text-main)] mb-8">"Não é só um registro, é poesia visual. Assistimos ao filme e voltamos exatamente para a sensação daquele dia. Impecável."</p>
</div>
<p className="caps-tracked text-[10px] text-muted">Camila &amp; João ▸ São Paulo</p>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[500px] bg-[var(--bg-secondary)] rounded-3xl p-10 flex flex-col justify-between">
<div>
<div className="w-16 h-16 rounded-full overflow-hidden mb-6">
<img alt="Casal" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<p className="font-serif italic text-2xl leading-relaxed text-[var(--text-main)] mb-8">"Choramos todas as vezes que damos play. O Lucas conseguiu captar os olhares silenciosos que nem nós tínhamos percebido."</p>
</div>
<p className="caps-tracked text-[10px] text-muted">Marina &amp; Thiago ▸ Rio de Janeiro</p>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[500px] bg-[var(--bg-secondary)] rounded-3xl p-10 flex flex-col justify-between">
<div>
<div className="w-16 h-16 rounded-full overflow-hidden mb-6">
<img alt="Casal" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<p className="font-serif italic text-2xl leading-relaxed text-[var(--text-main)] mb-8">"Fugimos do óbvio e a Monte Filmes entregou exatamente um editorial de revista, só que em movimento. Obra de arte."</p>
</div>
<p className="caps-tracked text-[10px] text-muted">Isabella &amp; Bruno ▸ Búzios</p>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-[1000px] mx-auto fade-up">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b dynamic-border gap-4">
<span className="font-serif text-xl md:text-2xl text-[var(--text-main)]">500+ Casamentos Registrados</span>
<span className="caps-tracked text-[10px] text-muted">2018–2026</span>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b dynamic-border gap-4">
<span className="font-serif text-xl md:text-2xl text-[var(--text-main)]">Atendimento Brasil Inteiro</span>
<span className="caps-tracked text-[10px] text-muted">RJ • SP • MG • Destino</span>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b dynamic-border gap-4">
<span className="font-serif text-xl md:text-2xl text-[var(--text-main)]">Indicados por Cerimonialistas</span>
<span className="caps-tracked text-[10px] text-muted">Rio de Janeiro</span>
</div>
</section>

<section className="bg-[#2C3A2A] text-[#F5F1EB] py-[120px] md:py-[160px] px-6 transition-none" id="contato">
<div className="max-w-[720px] mx-auto fade-up" id="form-container">
<div className="text-center mb-16">
<p className="caps-tracked text-xs text-white/60 mb-6">06 ▸ Vamos conversar</p>
<h2 className="font-serif text-5xl md:text-7xl mb-6">Conta pra gente sobre o seu dia.</h2>
<p className="font-serif italic text-xl md:text-2xl text-white/80">Resposta em até 24h. Orçamento sob medida. Sem compromisso.</p>
</div>
<form className="space-y-12" id="lead-form" onsubmit="handleFormSubmit(event)">
<div className="flex flex-col gap-2">
<label className="caps-tracked text-[10px] text-white/70">Nome Completo</label>
<input className="form-input pb-2 text-base w-full" required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="caps-tracked text-[10px] text-white/70">E-mail</label>
<input className="form-input pb-2 text-base w-full" required="" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="flex flex-col gap-2">
<label className="caps-tracked text-[10px] text-white/70">WhatsApp</label>
<input className="form-input pb-2 text-base w-full" placeholder="(  )      -    " required="" type="tel"/>
</div>
<div className="flex flex-col gap-2">
<label className="caps-tracked text-[10px] text-white/70">Data Prevista</label>
<input className="form-input pb-2 text-base w-full text-white/80 [color-scheme:dark]" required="" type="date"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="flex flex-col gap-2">
<label className="caps-tracked text-[10px] text-white/70">Cidade do Casamento</label>
<input className="form-input pb-2 text-base w-full" required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="caps-tracked text-[10px] text-white/70">Pacote de Interesse</label>
<select className="form-input pb-2 text-base w-full cursor-pointer appearance-none">
<option>Storytelling</option>
<option>Premium</option>
<option>Clássico</option>
<option>Não sei ainda</option>
</select>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="caps-tracked text-[10px] text-white/70">Conta um pouco da história de vocês (Opcional)</label>
<textarea className="form-input pb-2 text-base w-full resize-none" rows="2"></textarea>
</div>
<button className="bg-[#B8860B] text-[#0E0E0C] rounded-full py-4 px-8 caps-tracked text-xs w-full mt-8 hover:bg-white transition-colors flex items-center justify-center gap-2" type="submit">
                        Enviar pedido de orçamento <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>

<div className="max-w-[720px] mx-auto text-center hidden py-20" id="success-state">
<h2 className="font-serif text-6xl md:text-8xl mb-6">Recebemos.</h2>
<p className="font-serif italic text-2xl text-white/80">A Isadora vai te chamar no WhatsApp em até 24h.</p>
</div>
</section>
</main>

<footer className="bg-[#0E0E0C] text-[#F5F1EB] py-20 px-6 border-t border-white/5 transition-none">
<div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">

<div>
<h4 className="font-serif italic text-3xl mb-4">Monte Filmes</h4>
<p className="text-sm text-white/60 max-w-xs font-sans leading-relaxed">Transformamos o seu dia mais importante em um filme que vocês vão querer reviver para sempre.</p>
</div>

<div className="flex flex-col gap-4">
<a className="caps-tracked text-[10px] text-white/60 hover:text-white w-fit" href="#filmes">Filmes</a>
<a className="caps-tracked text-[10px] text-white/60 hover:text-white w-fit" href="#fotos">Fotos</a>
<a className="caps-tracked text-[10px] text-white/60 hover:text-white w-fit" href="#sobre">Sobre</a>
<a className="caps-tracked text-[10px] text-white/60 hover:text-white w-fit" href="#pacotes">Pacotes</a>
<a className="caps-tracked text-[10px] text-white/60 hover:text-white w-fit" href="#contato">Contato</a>
</div>

<div className="flex flex-col gap-4">
<a className="caps-tracked text-[10px] text-white/60 hover:text-white w-fit" href="#">Instagram @montefilmescasamentos</a>
<a className="caps-tracked text-[10px] text-white/60 hover:text-white w-fit" href="#">WhatsApp +55 21 9999-9999</a>
<p className="caps-tracked text-[10px] text-white/40 mt-4">Rio de Janeiro ✈ Brasil</p>
</div>
</div>

<div className="max-w-[1200px] mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="caps-tracked text-[9px] text-white/40">© 2026 Monte Filmes • CNPJ 00.000.000/0001-00</p>
<a className="caps-tracked text-[9px] text-white/40 hover:text-white" href="#">Política de Privacidade</a>
</div>
</footer>

<a className="fixed bottom-6 right-6 w-14 h-14 bg-[#2C3A2A] rounded-full flex items-center justify-center text-white shadow-2xl md:hidden z-50" href="#">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
</a>



    </>
  );
}
