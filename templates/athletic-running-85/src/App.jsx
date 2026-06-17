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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Simple Tab Logic for Maps
        function switchTab(id) {
            // Hide all maps
            document.querySelectorAll('.map-content').forEach(el => {
                el.classList.add('hidden');
            });
            // Show selected map
            document.getElementById('map-' + id).classList.remove('hidden');

            // Reset all buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('bg-white', 'text-gray-900', 'shadow-sm', 'border-gray-200/50');
                btn.classList.add('text-gray-600', 'border-transparent');
            });
            
            // Activate clicked button
            const activeBtn = document.getElementById('btn-' + id);
            activeBtn.classList.remove('text-gray-600', 'border-transparent');
            activeBtn.classList.add('bg-white', 'text-gray-900', 'shadow-sm', 'border-gray-200/50');
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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-8 h-8 text-[#6A1B3D]" data-lucide="footprints" strokeWidth="1.5"></i>
<span className="text-xl font-semibold tracking-tight text-gray-900">POA DAY RUN</span>
</div>
<nav className="hidden md:flex gap-8">
<a className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#sobre">Sobre</a>
<a className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#percursos">Percursos</a>
<a className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#kit">Kit da Prova</a>
</nav>
<div>
<a className="hidden md:inline-flex items-center justify-center rounded-full bg-[#6A1B3D] px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-[#52132e] transition-colors" href="#inscricao">
                    Inscreva-se
                </a>
</div>
</div>
</header>

<section className="relative overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-32 flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 flex flex-col items-start z-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6A1B3D]/10 text-[#6A1B3D] mb-8">
<i className="w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i>
<span className="text-base font-medium">03 de Maio de 2026</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                    Corra a cidade.<br/>
<span className="text-[#6A1B3D]">Sinta a energia.</span>
</h1>
<p className="mt-8 text-lg text-gray-600 max-w-lg leading-relaxed">
                    O Circuito Poa Day Run convida você para uma experiência única em Porto Alegre. Escolha seu desafio entre 3km, 5km ou 10km no Parque Harmonia.
                </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center rounded-full bg-[#6A1B3D] px-8 py-4 text-lg font-medium text-white shadow-md hover:bg-[#52132e] hover:shadow-lg transition-all w-full sm:w-auto" href="#inscricao">
                        Garantir minha vaga
                        <i className="w-5 h-5 ml-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="inline-flex items-center justify-center rounded-full bg-gray-100 px-8 py-4 text-lg font-medium text-gray-900 hover:bg-gray-200 transition-colors w-full sm:w-auto" href="#percursos">
                        Ver percursos
                    </a>
</div>
</div>
<div className="lg:w-1/2 w-full relative">

<div className="aspect-square w-full max-w-lg mx-auto relative rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
<img alt="Corredores" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-tr from-[#6A1B3D]/40 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg border border-white/20">
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Largada no Parque Harmonia</h3>
<p className="text-lg text-gray-700">Av. Loureiro da Silva, 255 - Porto Alegre, RS</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] border-t border-gray-100" id="sobre">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start">
<div className="w-12 h-12 rounded-full bg-[#6A1B3D]/10 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#6A1B3D]" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Local</h3>
<p className="text-lg text-gray-600">Parque Maurício Sirotski Sobrinho (Harmonia), Porto Alegre.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start">
<div className="w-12 h-12 rounded-full bg-[#6A1B3D]/10 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#6A1B3D]" data-lucide="route" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Distâncias</h3>
<p className="text-lg text-gray-600">Percursos de 3km, 5km, 10km e Corrida Kids.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start">
<div className="w-12 h-12 rounded-full bg-[#6A1B3D]/10 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#6A1B3D]" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Público</h3>
<p className="text-lg text-gray-600">Aberto ao público geral de ambos os sexos.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start">
<div className="w-12 h-12 rounded-full bg-[#6A1B3D]/10 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#6A1B3D]" data-lucide="medal" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Premiação</h3>
<p className="text-lg text-gray-600">Troféus e brindes para os primeiros colocados e por categorias.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-5xl mx-auto px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900">Sinta a vibração</h2>
<p className="mt-4 text-lg text-gray-600">Prepare-se para o circuito mais aguardado do ano.</p>
</div>
<div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-black w-full aspect-video relative">
<iframe allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" className="absolute top-0 left-0 w-full h-full" frameborder="0" src="https://player.vimeo.com/video/1087786315?h=929cd156c2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"></iframe>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] border-t border-gray-100">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Cronograma do Evento</h2>
<div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#6A1B3D] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
<i className="w-4 h-4" data-lucide="coffee" strokeWidth="1.5"></i>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-2xl border border-gray-100">
<time className="font-semibold text-[#6A1B3D] text-lg block mb-1">6h45</time>
<p className="text-lg text-gray-700">Abertura do lounge da prova</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-200 text-gray-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
<i className="w-4 h-4" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-2xl border border-gray-100">
<time className="font-semibold text-gray-900 text-lg block mb-1">7h45</time>
<p className="text-lg text-gray-700">Início do aquecimento/alongamento</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#6A1B3D] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
<i className="w-4 h-4" data-lucide="flag" strokeWidth="1.5"></i>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-[#6A1B3D]/20 shadow-sm shadow-[#6A1B3D]/5">
<time className="font-semibold text-[#6A1B3D] text-lg block mb-1">8h00</time>
<p className="text-lg text-gray-900 font-medium">Largada principal</p>
<p className="text-base text-gray-500 mt-1">Provas de 3km, 5km e 10km</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-200 text-gray-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
<i className="w-4 h-4" data-lucide="smile" strokeWidth="1.5"></i>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-2xl border border-gray-100">
<time className="font-semibold text-gray-900 text-lg block mb-1">10h00</time>
<p className="text-lg text-gray-700">Largada da prova kids</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#eab308] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
<i className="w-4 h-4" data-lucide="trophy" strokeWidth="1.5"></i>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-2xl border border-gray-100">
<time className="font-semibold text-gray-900 text-lg block mb-1">10h20</time>
<p className="text-lg text-gray-700">Início da cerimônia de premiação</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100" id="percursos">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-4xl font-semibold tracking-tight text-gray-900">Conheça os Percursos</h2>
<p className="mt-4 text-lg text-gray-600 max-w-2xl">
                        Planejados para oferecer segurança e conforto, com sinalização adequada e pontos de hidratação. Largada e chegada no emblemático Parque da Harmonia.
                    </p>
</div>

<div className="flex bg-gray-100 p-1.5 rounded-full self-start md:self-auto shrink-0">
<button className="tab-btn active px-6 py-2.5 rounded-full text-lg font-medium transition-all bg-white text-gray-900 shadow-sm border border-gray-200/50" id="btn-3km" onclick="switchTab('3km')">3 KM</button>
<button className="tab-btn px-6 py-2.5 rounded-full text-lg font-medium transition-all text-gray-600 hover:text-gray-900" id="btn-5km" onclick="switchTab('5km')">5 KM</button>
<button className="tab-btn px-6 py-2.5 rounded-full text-lg font-medium transition-all text-gray-600 hover:text-gray-900" id="btn-10km" onclick="switchTab('10km')">10 KM</button>
</div>
</div>
<div className="bg-gray-50 p-2 sm:p-4 rounded-3xl border border-gray-100 shadow-inner">

<div className="map-content w-full aspect-square md:aspect-[21/9] rounded-2xl overflow-hidden bg-gray-200" id="map-3km">
<iframe className="w-full h-full border-0 -mt-14" src="https://www.google.com/maps/d/embed?mid=1heSRYHVpVKUjLoA_obE76C3jr4YwTgI&amp;hl=pt-BR&amp;ehbc=2E312F" title="Percurso 3km"></iframe>
</div>

<div className="map-content hidden w-full aspect-square md:aspect-[21/9] rounded-2xl overflow-hidden bg-gray-200" id="map-5km">
<iframe className="w-full h-full border-0 -mt-14" src="https://www.google.com/maps/d/embed?mid=1ZT5x-opLE2UTDkMCO5ARBpBdZZn4cMc&amp;hl=pt-BR&amp;ehbc=2E312F" title="Percurso 5km"></iframe>
</div>

<div className="map-content hidden w-full aspect-square md:aspect-[21/9] rounded-2xl overflow-hidden bg-gray-200" id="map-10km">
<iframe className="w-full h-full border-0 -mt-14" src="https://www.google.com/maps/d/embed?mid=1BdGOox8300vOmFSsebuCu7jXl0_z9rQ&amp;hl=pt-BR&amp;ehbc=2E312F" title="Percurso 10km"></iframe>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white relative overflow-hidden" id="kit">

<div className="absolute inset-0 bg-[#6A1B3D]/10"></div>
<div className="absolute -top-40 -right-40 w-96 h-96 bg-[#6A1B3D] rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-6 border-b border-white/10 pb-4">O que vem no Kit?</h3>
<ul className="space-y-4">
<li className="flex items-center gap-4">
<i className="w-6 h-6 text-[#ff8ebf]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg text-gray-200">Camiseta de tecido tecnológico exclusiva</span>
</li>
<li className="flex items-center gap-4">
<i className="w-6 h-6 text-[#ff8ebf]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg text-gray-200">Número de peito com joaninhas</span>
</li>
<li className="flex items-center gap-4">
<i className="w-6 h-6 text-[#ff8ebf]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg text-gray-200">Chip eletrônico de cronometragem</span>
</li>
<li className="flex items-center gap-4">
<i className="w-6 h-6 text-[#ff8ebf]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg text-gray-200">Sacolinha personalizada do evento</span>
</li>
</ul>
<div className="mt-10 bg-black/30 rounded-2xl p-6 border border-white/5">
<h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
                            Retirada de Kit
                        </h4>
<p className="text-lg text-gray-300 mb-2"><strong>Local:</strong> Loja Paquetá Esportes do Shopping Iguatemi</p>
<div className="space-y-1 mt-4">
<p className="text-lg text-gray-400 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="calendar-clock" strokeWidth="1.5"></i>
                                Dia 01 de Maio – 12h às 20h
                            </p>
<p className="text-lg text-gray-400 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="calendar-clock" strokeWidth="1.5"></i>
                                Dia 02 de Maio – 10h às 20h
                            </p>
</div>
<p className="text-base text-[#ff8ebf] mt-4 font-medium">* Não haverá entrega de kits no dia da prova.</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">Kit da Prova &amp; Premiações</h2>
<p className="text-lg text-gray-300 mb-10 leading-relaxed">
                    Tudo o que você precisa para dar o seu melhor. Além de um kit completo, preparamos premiações exclusivas para celebrar suas conquistas.
                </p>
<div className="space-y-6">
<div className="bg-white/5 border border-white/10 rounded-2xl p-6">
<h4 className="text-xl font-semibold tracking-tight text-white mb-2 flex items-center gap-2">
<i className="w-5 h-5 text-yellow-400" data-lucide="trophy" strokeWidth="1.5"></i>
                            Premiação Geral
                        </h4>
<p className="text-lg text-gray-300">Troféus e brindes para os <span className="text-white font-medium">cinco primeiros</span> colocados nas provas de 3km, 5km e 10km.</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-6">
<h4 className="text-xl font-semibold tracking-tight text-white mb-2 flex items-center gap-2">
<i className="w-5 h-5 text-yellow-400" data-lucide="medal" strokeWidth="1.5"></i>
                            Por Categorias
                        </h4>
<p className="text-lg text-gray-300">Os <span className="text-white font-medium">três primeiros</span> de cada categoria (masculina e feminina) receberão troféus exclusivos, considerando a idade completa até 31/12/2026.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-6">
<i className="w-6 h-6 text-[#6A1B3D]" data-lucide="footprints" strokeWidth="1.5"></i>
<span className="text-lg font-semibold tracking-tight text-gray-900">POA DAY RUN</span>
</div>
<p className="text-lg text-gray-500 max-w-xs">
                        A corrida que movimenta Porto Alegre. Desafie seus limites em 3km, 5km ou 10km.
                    </p>
</div>
<div>
<h4 className="text-lg font-semibold text-gray-900 mb-6">Informações Técnicas</h4>
<ul className="space-y-4">
<li>
<a className="text-lg text-gray-600 hover:text-[#6A1B3D] transition-colors flex items-center gap-2" href="mailto:contato@runsports.com.br">
<i className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></i>
                                contato@runsports.com.br
                            </a>
</li>
<li>
<a className="text-lg text-gray-600 hover:text-[#6A1B3D] transition-colors flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="help-circle" strokeWidth="1.5"></i>
                                Central de Ajuda - Individuais
                            </a>
</li>
</ul>
</div>
<div>
<h4 className="text-lg font-semibold text-gray-900 mb-6">Grupos Esportivos</h4>
<p className="text-lg text-gray-600 mb-4">Atendimento exclusivo para equipes.</p>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-green-50 text-green-700 font-medium hover:bg-green-100 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
                        WhatsApp: (11) 96864-6757
                    </a>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-base text-gray-500">
                    © 2026 Poa Day Run. Todos os direitos reservados.
                </p>
<div className="flex items-center gap-6">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">Termos</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">Privacidade</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
