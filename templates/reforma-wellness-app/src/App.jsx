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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="mobile-screen">
<div className="screen-content p-6 space-y-8">

<header className="flex justify-between items-start mt-4">
<div className="">
<h1 className="text-3xl font-semibold tracking-tight text-gray-900">Bom dia,<br/>Manuel!</h1>
<p className="text-lg text-gray-500 mt-1">12 de Outubro, Quinta-feira</p>
</div>
<div className="flex text-xl font-semibold text-blue-600 tracking-tight w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4b392f2-c961-455c-beb8-8bf9d7967371_320w.jpg)] bg-cover bg-center rounded-full items-center justify-center"></div>
</header>

<section className="">
<h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Próxima atividade</h2>
<div className="bg-blue-500 rounded-3xl p-6 text-white shadow-md relative overflow-hidden">
<div className="absolute top-0 right-0 opacity-10">
<iconify-icon className="" height="120" icon="solar:walking-round-linear" style={{strokeWidth: '1.5'}} width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 bg-blue-400/50 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
                            Hoje, 10:30
                        </div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Caminhada no Parque</h3>
<div className="flex items-center gap-2 text-blue-50 mb-6 text-base">
<iconify-icon className="" icon="solar:map-point-linear" width="22"></iconify-icon>
                            Parque da Cidade (Entrada Sul)
                        </div>
<button className="w-full bg-white text-blue-600 font-medium text-lg py-4 rounded-2xl flex justify-center items-center gap-2 transition-transform active:scale-95">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
                            Estou pronto
                        </button>
</div>
</div>
</section>

<section className="">
<div className="flex justify-between items-end mb-4">
<h2 className="text-xl font-medium tracking-tight text-gray-900">Atividades de hoje</h2>
<span className="text-blue-500 font-medium text-base">Ver todas</span>
</div>
<div className="space-y-4">

<div className="bg-white p-5 rounded-3xl flex items-center gap-5 shadow-sm border border-gray-100">
<div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center shrink-0">
<iconify-icon icon="solar:cup-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-lg font-medium text-gray-900">Café com Amigos</h4>
<p className="text-base text-gray-500 flex items-center gap-1 mt-1">
<iconify-icon icon="solar:clock-circle-linear" width="18"></iconify-icon> 15:00
                            </p>
</div>
</div>

<div className="bg-white p-5 rounded-3xl flex items-center gap-5 shadow-sm border border-gray-100">
<div className="w-16 h-16 bg-purple-100 text-purple-500 rounded-2xl flex items-center justify-center shrink-0">
<iconify-icon className="" icon="solar:book-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-lg font-medium text-gray-900">Clube de Leitura</h4>
<p className="text-base text-gray-500 flex items-center gap-1 mt-1">
<iconify-icon icon="solar:clock-circle-linear" width="18"></iconify-icon> 17:30
                            </p>
</div>
</div>
</div>
</section>

<button className="w-full bg-emerald-500 text-white font-medium text-xl py-5 rounded-3xl flex justify-center items-center gap-3 shadow-md mt-4">
<iconify-icon icon="solar:add-circle-linear" width="28"></iconify-icon>
                Marcar atividade
            </button>
</div>

<div className="bottom-nav">
<a className="nav-item active" href="#">
<iconify-icon className="" icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Início</span>
</a>
<a className="nav-item" href="#">
<iconify-icon icon="solar:compass-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Explorar</span>
</a>
<a className="nav-item" href="#">
<iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Agenda</span>
</a>
<a className="nav-item" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Social</span>
</a>
</div>
</div>

<div className="mobile-screen">
<div className="screen-content p-6 space-y-6">
<header className="mt-4">
<h1 className="text-3xl font-semibold tracking-tight text-gray-900">Descobrir</h1>
<p className="text-lg text-gray-500 mt-1">Encontre novas rotinas</p>
</header>

<div className="flex overflow-x-auto gap-3 pb-2 -mx-6 px-6 hide-scrollbar" style={{scrollbarWidth: 'none'}}>
<button className="bg-gray-900 text-white px-5 py-3 rounded-full text-base font-medium whitespace-nowrap shrink-0">Todas</button>
<button className="bg-white border border-gray-200 text-gray-700 px-5 py-3 rounded-full text-base font-medium whitespace-nowrap shrink-0">Caminhadas</button>
<button className="bg-white border border-gray-200 text-gray-700 px-5 py-3 rounded-full text-base font-medium whitespace-nowrap shrink-0">Convívio</button>
<button className="bg-white border border-gray-200 text-gray-700 px-5 py-3 rounded-full text-base font-medium whitespace-nowrap shrink-0">Exercício</button>
</div>

<div className="space-y-5">

<div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
<div className="flex h-32 bg-[url(https://images.unsplash.com/photo-1541689186060-3b08be2fd22f?w=800&amp;q=80)] bg-cover bg-center relative items-center justify-center">
<div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm flex items-center gap-1">
<iconify-icon icon="solar:users-group-rounded-linear" width="16"></iconify-icon> 5 vagas
                        </div>
</div>
<div className="p-5">
<span className="text-blue-600 font-medium text-sm tracking-wide uppercase">Exercício</span>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mt-1">Hidroginástica Suave</h3>
<div className="flex items-center gap-4 mt-3 text-base text-gray-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> Amanhã</span>
<span className="flex items-center gap-1"><iconify-icon className="" icon="solar:clock-circle-linear"></iconify-icon> 09:30</span>
</div>
<button className="w-full mt-5 bg-blue-50 text-blue-600 font-medium text-lg py-3 rounded-2xl">Participar</button>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
<div className="flex bg-center h-32 bg-[url(https://images.unsplash.com/photo-1611843467160-25afb8df1074?w=800&amp;q=80)] bg-cover relative items-center justify-center">
</div>
<div className="p-5">
<span className="text-emerald-600 font-medium text-sm tracking-wide uppercase">Hobbies</span>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mt-1">Oficina de Jardinagem</h3>
<div className="flex items-center gap-4 mt-3 text-base text-gray-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> Sábado</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 14:00</span>
</div>
<button className="w-full mt-5 bg-blue-50 text-blue-600 font-medium text-lg py-3 rounded-2xl">Participar</button>
</div>
</div>
</div>
</div>

<div className="bottom-nav">
<a className="nav-item" href="#">
<iconify-icon icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Início</span>
</a>
<a className="nav-item active" href="#">
<iconify-icon icon="solar:compass-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Explorar</span>
</a>
<a className="nav-item" href="#">
<iconify-icon className="" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Agenda</span>
</a>
<a className="nav-item" href="#">
<iconify-icon className="" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Social</span>
</a>
</div>
</div>

<div className="mobile-screen">
<div className="screen-content bg-white">
<div className="bg-gray-50 p-6 pb-8 rounded-b-[3rem] border-b border-gray-100">
<header className="mt-4 flex justify-between items-center mb-8">
<h1 className="text-3xl font-semibold tracking-tight text-gray-900">Plano semanal</h1>
<button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-900 border border-gray-200">
<iconify-icon icon="solar:calendar-add-linear" width="28"></iconify-icon>
</button>
</header>

<div className="flex justify-between items-center">
<div className="flex flex-col items-center gap-2">
<span className="text-sm text-gray-500 font-medium">Seg</span>
<div className="w-12 h-16 rounded-full flex items-center justify-center text-lg font-medium text-gray-900">9</div>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-sm text-gray-500 font-medium">Ter</span>
<div className="w-12 h-16 rounded-full flex items-center justify-center text-lg font-medium text-gray-900">10</div>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-sm text-gray-500 font-medium">Qua</span>
<div className="w-12 h-16 rounded-full flex items-center justify-center text-lg font-medium text-gray-900">11</div>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-sm text-blue-600 font-medium">Qui</span>
<div className="w-12 h-16 bg-blue-500 rounded-full flex items-center justify-center text-lg font-medium text-white shadow-md">12</div>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-sm text-gray-500 font-medium">Sex</span>
<div className="w-12 h-16 rounded-full flex items-center justify-center text-lg font-medium text-gray-900">13</div>
</div>
</div>
</div>

<div className="p-6 space-y-6">
<h2 className="text-lg font-medium text-gray-500">Quinta-feira, 12 Out</h2>
<div className="relative pl-8 border-l-2 border-gray-100 space-y-8">

<div className="relative">
<div className="absolute -left-[41px] top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-sm"></div>
<div className="text-base text-gray-500 font-medium mb-1">10:30 - 11:30</div>
<div className="bg-blue-50 p-5 rounded-3xl border border-blue-100">
<h4 className="text-xl font-medium text-gray-900 mb-1">Caminhada no Parque</h4>
<p className="text-base text-gray-500 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon> Entrada Sul
                            </p>
</div>
</div>

<div className="relative">
<div className="absolute -left-[41px] top-1 w-5 h-5 bg-orange-400 rounded-full border-4 border-white shadow-sm"></div>
<div className="text-base text-gray-500 font-medium mb-1">15:00 - 16:00</div>
<div className="bg-orange-50 p-5 rounded-3xl border border-orange-100">
<h4 className="text-xl font-medium text-gray-900 mb-1">Café com Amigos</h4>
<p className="text-base text-gray-500 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon> Pastelaria Central
                            </p>
</div>
</div>

<div className="relative pt-4">
<div className="absolute -left-[41px] top-5 w-5 h-5 bg-gray-200 rounded-full border-4 border-white"></div>
<button className="w-full border-2 border-dashed border-gray-200 rounded-3xl p-5 flex items-center justify-center gap-2 text-gray-500 text-lg font-medium hover:bg-gray-50">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
                            Adicionar rotina livre
                        </button>
</div>
</div>
</div>
</div>

<div className="bottom-nav">
<a className="nav-item" href="#">
<iconify-icon className="" icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Início</span>
</a>
<a className="nav-item" href="#">
<iconify-icon className="" icon="solar:compass-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Explorar</span>
</a>
<a className="nav-item active" href="#">
<iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Agenda</span>
</a>
<a className="nav-item" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Social</span>
</a>
</div>
</div>

<div className="mobile-screen">
<div className="screen-content p-6 space-y-6">
<header className="mt-4">
<h1 className="text-3xl font-semibold tracking-tight text-gray-900">Companhia</h1>
<p className="text-lg text-gray-500 mt-1">Pessoas com os mesmos interesses</p>
</header>

<div className="flex gap-3">
<div className="flex-1 bg-white border border-gray-200 rounded-2xl flex items-center px-4 py-3 shadow-sm">
<iconify-icon className="text-gray-400" icon="solar:magnifer-linear" width="24"></iconify-icon>
<input className="bg-transparent border-none outline-none ml-3 text-lg w-full placeholder-gray-400" placeholder="Procurar nome..." type="text"/>
</div>
<button className="bg-gray-900 text-white w-14 rounded-2xl flex items-center justify-center shrink-0">
<iconify-icon icon="solar:tuning-2-linear" width="24"></iconify-icon>
</button>
</div>

<div className="space-y-4">

<div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-semibold shrink-0">
                        AA
                    </div>
<div className="flex-1">
<h4 className="text-xl font-medium text-gray-900">António Almeida</h4>
<p className="text-base text-gray-500 mt-0.5">Gosta de Caminhadas</p>
</div>
<button className="w-12 h-12 bg-gray-50 text-blue-600 rounded-full flex items-center justify-center border border-gray-200 shrink-0">
<iconify-icon icon="solar:user-plus-linear" width="24"></iconify-icon>
</button>
</div>

<div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
<div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-xl font-semibold shrink-0">
                        MC
                    </div>
<div className="flex-1">
<h4 className="text-xl font-medium text-gray-900">Maria Costa</h4>
<p className="text-base text-gray-500 mt-0.5">Gosta de Leitura</p>
</div>
<button className="w-12 h-12 bg-gray-50 text-blue-600 rounded-full flex items-center justify-center border border-gray-200 shrink-0">
<iconify-icon icon="solar:user-plus-linear" width="24"></iconify-icon>
</button>
</div>

<div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
<div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-xl font-semibold shrink-0">
                        JS
                    </div>
<div className="flex-1">
<h4 className="text-xl font-medium text-gray-900">Joaquim Silva</h4>
<p className="text-base text-gray-500 mt-0.5">Gosta de Jardinagem</p>
</div>
<button className="px-5 py-2.5 bg-blue-500 text-white text-base font-medium rounded-xl shrink-0">
                        Convidar
                    </button>
</div>
</div>

<div className="bg-blue-50 rounded-3xl p-6 border border-blue-100 text-center mt-4">
<iconify-icon className="text-blue-500 mb-3" icon="solar:cup-star-linear" width="40"></iconify-icon>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Criar um Grupo</h3>
<p className="text-base text-gray-600 mb-5">Não encontra o que procura? Crie o seu próprio grupo de atividade.</p>
<button className="w-full bg-white text-blue-600 border border-blue-200 font-medium text-lg py-3 rounded-2xl">
                    Novo Grupo
                </button>
</div>
</div>

<div className="bottom-nav">
<a className="nav-item" href="#">
<iconify-icon icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Início</span>
</a>
<a className="nav-item" href="#">
<iconify-icon icon="solar:compass-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Explorar</span>
</a>
<a className="nav-item" href="#">
<iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Agenda</span>
</a>
<a className="nav-item active" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Social</span>
</a>
</div>
</div>

<div className="mobile-screen">

<div className="h-64 bg-blue-100 relative shrink-0">
<div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
<button className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gray-900 shadow-sm">
<iconify-icon icon="solar:alt-arrow-left-linear" width="28"></iconify-icon>
</button>
<button className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gray-900 shadow-sm">
<iconify-icon icon="solar:share-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex w-full h-full bg-[url(https://images.unsplash.com/photo-1525474089639-b5fff4440315?w=800&amp;q=80)] bg-cover bg-center items-center justify-center">
</div>
</div>
<div className="screen-content bg-white p-6 -mt-8 rounded-t-[2.5rem] relative z-20 space-y-8" style={{paddingBottom: '120px'}}>

<div className="">
<div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium uppercase tracking-wide mb-3">
                    Caminhada
                </div>
<h1 className="text-3xl font-semibold tracking-tight text-gray-900 leading-tight">Caminhada matinal no Parque da Cidade</h1>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-sm shrink-0">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<div className="">
<p className="text-base font-medium text-gray-900">Quinta-feira, 12 Outubro</p>
<p className="text-base text-gray-500">10:30 - 11:30</p>
</div>
</div>
<div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-sm shrink-0">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div className="">
<p className="text-base font-medium text-gray-900">Entrada Sul do Parque</p>
<p className="text-base text-gray-500">Ver no mapa</p>
</div>
</div>
</div>

<section className="">
<h3 className="text-xl font-medium text-gray-900 mb-3">Sobre a atividade</h3>
<p className="text-lg text-gray-600 leading-relaxed">
                    Uma caminhada suave pelos trilhos principais do parque. O percurso é plano e adequado a todos. Faremos uma breve paragem a meio para descanso e convívio.
                </p>
</section>

<section>
<div className="flex justify-between items-center mb-4">
<h3 className="text-xl font-medium text-gray-900">Quem vai (4)</h3>
</div>
<div className="flex gap-2">
<div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-lg font-medium border-2 border-white shadow-sm">MS</div>
<div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-lg font-medium border-2 border-white shadow-sm -ml-4">AA</div>
<div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-lg font-medium border-2 border-white shadow-sm -ml-4">MC</div>
<div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 text-lg font-medium border-2 border-white shadow-sm -ml-4">+1</div>
</div>
</section>
</div>

<div className="absolute bottom-0 w-full bg-white border-t border-gray-100 p-6 pt-4 rounded-b-[2.5rem] z-30 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
<button className="w-full bg-emerald-500 text-white font-medium text-xl py-4 rounded-2xl flex justify-center items-center shadow-md">
                Participar
            </button>
</div>
</div>

<div className="mobile-screen">
<div className="screen-content pt-6 pr-6 pb-6 pl-6 space-y-8">
<header className="mt-4 flex justify-between items-center">
<h1 className="text-3xl font-semibold tracking-tight text-gray-900">Perfil</h1>
<button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 text-gray-700">
<iconify-icon icon="solar:settings-linear" width="26"></iconify-icon>
</button>
</header>

<div className="flex flex-col items-center text-center">
<div className="flex text-4xl font-semibold text-blue-600 tracking-tight w-28 h-28 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4b392f2-c961-455c-beb8-8bf9d7967371_320w.jpg)] bg-cover bg-center border-white border-4 rounded-full mb-4 shadow-sm items-center justify-center"></div>
<h2 className="text-2xl font-semibold text-gray-900">Manuel Costa</h2>
<p className="text-lg text-gray-500 mt-1">Membro desde Outubro 2023</p>
</div>

<div className="flex gap-4">
<div className="flex-1 bg-white p-5 rounded-3xl shadow-sm border border-gray-100 text-center">
<span className="block text-3xl font-semibold text-blue-600 mb-1">12</span>
<span className="text-base text-gray-500 font-medium">Atividades<br/>este mês</span>
</div>
<div className="flex-1 bg-white p-5 rounded-3xl shadow-sm border border-gray-100 text-center">
<span className="block text-3xl font-semibold text-emerald-500 mb-1">5</span>
<span className="text-base text-gray-500 font-medium">Novos<br/>amigos</span>
</div>
</div>

<section className="">
<h3 className="text-xl font-medium text-gray-900 mb-4">Os meus interesses</h3>
<div className="flex flex-wrap gap-3">
<div className="bg-blue-50 text-blue-700 px-4 py-2.5 rounded-xl text-base font-medium flex items-center gap-2">
<iconify-icon icon="solar:walking-round-linear"></iconify-icon> Caminhadas
                    </div>
<div className="bg-blue-50 text-blue-700 px-4 py-2.5 rounded-xl text-base font-medium flex items-center gap-2">
<iconify-icon icon="solar:book-linear"></iconify-icon> Leitura
                    </div>
<div className="bg-blue-50 text-blue-700 px-4 py-2.5 rounded-xl text-base font-medium flex items-center gap-2">
<iconify-icon icon="solar:cup-linear"></iconify-icon> Café e Convívio
                    </div>
<button className="bg-white border-2 border-dashed border-gray-300 text-gray-500 px-4 py-2.5 rounded-xl text-base font-medium flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Adicionar
                    </button>
</div>
</section>

<section className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
<a className="flex items-center justify-between p-5 border-b border-gray-100 hover:bg-gray-50" href="#">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
<iconify-icon icon="solar:history-linear" width="22"></iconify-icon>
</div>
<span className="text-lg font-medium text-gray-900">Histórico de Atividades</span>
</div>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
</a>
<a className="flex items-center justify-between p-5 hover:bg-gray-50" href="#">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
<iconify-icon icon="solar:shield-user-linear" width="22"></iconify-icon>
</div>
<span className="text-lg font-medium text-gray-900">Privacidade e Dados</span>
</div>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
</a>
</section>
<button className="w-full py-4 text-red-500 text-lg font-medium">Terminar sessão</button>
</div>

<div className="bottom-nav">
<a className="nav-item" href="#">
<iconify-icon icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Início</span>
</a>
<a className="nav-item" href="#">
<iconify-icon icon="solar:compass-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Explorar</span>
</a>
<a className="nav-item" href="#">
<iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Agenda</span>
</a>
<a className="nav-item active" href="#">
<iconify-icon icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-sm font-medium">Perfil</span>
</a>
</div>
</div>

    </>
  );
}
