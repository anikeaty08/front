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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



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
      

<nav className="fixed top-0 w-full bg-[#0A1628]/95 backdrop-blur-md z-50 border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-white text-xl tracking-tighter font-medium flex items-center gap-2" href="#">
<iconify-icon className="text-[#FF5C00] text-2xl" icon="solar:buildings-2-linear" strokeWidth="1.5"></iconify-icon>
                    QUALITAB
                </a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
<a className="hover:text-white transition-colors" href="#ferramentas">Ferramentas</a>
<a className="hover:text-white transition-colors" href="#empresa">Empresa</a>
<a className="hover:text-white transition-colors" href="#conteudo">Conteúdo</a>
</div>
<div>
<a className="bg-[#FF5C00] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#e65300] transition-colors shadow-sm" href="#contato">
                    Fale com um especialista
                </a>
</div>
</div>
</nav>

<section className="relative bg-[#0A1628] pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-7 flex flex-col items-start">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FF5C00]/30 bg-[#FF5C00]/10 text-[#FF5C00] text-xs font-medium mb-6">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                        Gestão de Qualidade para Construtoras
                    </div>
<h1 className="text-white text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold leading-[1.1] mb-6">
                        A plataforma de qualidade de obra feita por engenheiros, para engenheiros.
                    </h1>
<p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                        Controle FVS, RDO, rastreabilidade de concreto e checklist de entregas em um só lugar. Mais de 200 construtoras já reduziram em até 35% o custo com retrabalho.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
<a className="bg-[#FF5C00] text-white text-center text-sm md:text-base font-medium px-8 py-3.5 rounded-lg hover:bg-[#e65300] transition-colors shadow-[0_0_20px_rgba(255,92,0,0.3)]" href="#">
                            Testar gratuitamente
                        </a>
<a className="border border-gray-600 text-white text-center text-sm md:text-base font-medium px-8 py-3.5 rounded-lg hover:bg-white/5 transition-colors" href="#">
                            Ver como funciona
                        </a>
</div>
<div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-gray-500 font-medium">
<span className="flex items-center gap-1.5"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> Sem cartão de crédito</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> Suporte de engenheiros</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> Implementação guiada</span>
</div>
</div>

<div className="lg:col-span-5 relative perspective-1000">
<div className="w-full aspect-[4/3] bg-[#0d1c33] rounded-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-all duration-500">

<div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-[#0a1628]/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
</div>
<div className="text-[10px] text-gray-500 font-medium tracking-wide uppercase">Dashboard da Obra - Torre A</div>
</div>

<div className="flex-1 p-5 flex gap-5">

<div className="w-1/4 flex flex-col gap-3">
<div className="h-6 w-full rounded bg-white/5 flex items-center px-2 gap-2">
<iconify-icon className="text-[#FF5C00] text-xs" icon="solar:chart-square-linear"></iconify-icon>
<div className="h-1.5 w-12 bg-white/20 rounded"></div>
</div>
<div className="h-6 w-full rounded bg-transparent flex items-center px-2 gap-2">
<iconify-icon className="text-gray-500 text-xs" icon="solar:clipboard-text-linear"></iconify-icon>
<div className="h-1.5 w-10 bg-gray-600 rounded"></div>
</div>
<div className="h-6 w-full rounded bg-transparent flex items-center px-2 gap-2">
<iconify-icon className="text-gray-500 text-xs" icon="solar:map-point-linear"></iconify-icon>
<div className="h-1.5 w-14 bg-gray-600 rounded"></div>
</div>
</div>

<div className="flex-1 flex flex-col gap-4">

<div className="grid grid-cols-2 gap-3">
<div className="bg-white/5 p-3 rounded-lg border border-white/5">
<div className="text-[9px] text-gray-500 mb-1">Conformidade FVS</div>
<div className="text-lg text-white font-semibold tracking-tight">92.4%</div>
</div>
<div className="bg-white/5 p-3 rounded-lg border border-white/5">
<div className="text-[9px] text-gray-500 mb-1">Ocorrências Abertas</div>
<div className="text-lg text-[#FF5C00] font-semibold tracking-tight">14</div>
</div>
</div>

<div className="flex-1 bg-white/5 rounded-lg border border-white/5 p-4 relative overflow-hidden">

<div className="absolute left-4 top-4 bottom-4 w-12 border-r border-white/10 flex flex-col justify-between text-[8px] text-gray-600">
<div>Pav 10</div><div>Pav 05</div><div>Térreo</div>
</div>

<div className="absolute left-20 top-8 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></div>
<div className="absolute left-32 top-14 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]"></div>
<div className="absolute left-24 top-24 w-2 h-2 rounded-full bg-[#FF5C00] shadow-[0_0_8px_#FF5C00]"></div>
<div className="absolute left-40 top-20 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F7FA] py-8 border-y border-gray-200">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<p className="text-sm text-gray-500 font-medium whitespace-nowrap">Utilizado por construtoras em todo o Brasil</p>
<div className="flex items-center gap-8 md:gap-12 opacity-60 overflow-x-auto w-full no-scrollbar pb-2 md:pb-0">
<span className="text-lg font-semibold tracking-tighter text-gray-800">PATRIMAR</span>
<span className="text-lg font-semibold tracking-widest text-gray-800">HABIARTE</span>
<span className="text-base font-semibold tracking-tight text-gray-800">MM EMPREENDIMENTOS</span>
<span className="text-lg font-medium tracking-tighter text-gray-800">APIS <span className="font-light">Eng.</span></span>
<span className="text-lg font-semibold tracking-tighter text-gray-800">CONSTRUTORA <span className="text-gray-400">X</span></span>
</div>
</div>
</section>

<section className="bg-white py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 text-center">
<div className="flex flex-col items-center">
<div className="w-12 h-12 bg-[#F5F7FA] rounded-full flex items-center justify-center mb-4 text-[#FF5C00]">
<iconify-icon className="text-2xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-4xl tracking-tight font-semibold text-[#0A1628] mb-2">+200</div>
<div className="text-sm text-gray-500 font-medium">construtoras digitalizadas</div>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 bg-[#F5F7FA] rounded-full flex items-center justify-center mb-4 text-[#FF5C00]">
<iconify-icon className="text-2xl" icon="solar:clipboard-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-4xl tracking-tight font-semibold text-[#0A1628] mb-2">+13 mil</div>
<div className="text-sm text-gray-500 font-medium">auditorias realizadas</div>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 bg-[#F5F7FA] rounded-full flex items-center justify-center mb-4 text-[#FF5C00]">
<iconify-icon className="text-2xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-4xl tracking-tight font-semibold text-[#0A1628] mb-2">3 ton</div>
<div className="text-sm text-gray-500 font-medium">de papel economizadas</div>
</div>
</div>
<p className="text-center text-sm md:text-base text-gray-500 mt-12 pt-12 border-t border-gray-100 max-w-2xl mx-auto">
                ...e uma redução média de <span className="font-semibold text-[#0A1628]">35% no custo com retrabalho</span> nos canteiros de obra.
            </p>
</div>
</section>

<section className="bg-white pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-8 items-stretch">

<div className="bg-[#0A1628] rounded-xl p-8 md:p-10 flex flex-col">
<h3 className="text-2xl tracking-tight font-medium text-white mb-8">Como a maioria das construtoras ainda opera</h3>
<ul className="space-y-5 mt-auto flex-1">
<li className="flex items-start gap-4 text-gray-300 text-sm md:text-base">
<iconify-icon className="text-red-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>FVS em papel ou planilha desatualizada</span>
</li>
<li className="flex items-start gap-4 text-gray-300 text-sm md:text-base">
<iconify-icon className="text-red-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>RDO feito no WhatsApp, sem histórico confiável</span>
</li>
<li className="flex items-start gap-4 text-gray-300 text-sm md:text-base">
<iconify-icon className="text-red-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>Empreiteiro pago sem verificação de serviço concluído</span>
</li>
<li className="flex items-start gap-4 text-gray-300 text-sm md:text-base">
<iconify-icon className="text-red-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>Não-conformidade descoberta tarde, retrabalho caro</span>
</li>
<li className="flex items-start gap-4 text-gray-300 text-sm md:text-base">
<iconify-icon className="text-red-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>Auditorias que geram vergonha, não orgulho</span>
</li>
</ul>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5C00]/5 rounded-bl-full -z-10"></div>
<h3 className="text-2xl tracking-tight font-medium text-[#0A1628] mb-8">Com o Qualitab</h3>
<ul className="space-y-5 mt-auto flex-1">
<li className="flex items-start gap-4 text-gray-600 text-sm md:text-base">
<iconify-icon className="text-[#FF5C00] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-medium text-gray-800">FVS digital com mapa visual de ocorrências</span>
</li>
<li className="flex items-start gap-4 text-gray-600 text-sm md:text-base">
<iconify-icon className="text-[#FF5C00] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>RDO com linha do tempo, fotos e indicadores</span>
</li>
<li className="flex items-start gap-4 text-gray-600 text-sm md:text-base">
<iconify-icon className="text-[#FF5C00] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Medição de empreiteiro integrada à verificação</span>
</li>
<li className="flex items-start gap-4 text-gray-600 text-sm md:text-base">
<iconify-icon className="text-[#FF5C00] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Não-conformidade rastreada em tempo real</span>
</li>
<li className="flex items-start gap-4 text-gray-600 text-sm md:text-base">
<iconify-icon className="text-[#FF5C00] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-medium text-gray-800">Auditorias que viram seu motivo de orgulho</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 border-t border-gray-100" id="ferramentas">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl tracking-tight font-semibold text-[#0A1628] mb-4">Tudo que sua obra precisa, em uma só plataforma</h2>
<p className="text-base text-gray-500">6 ferramentas integradas, desenvolvidas por engenheiros da construção civil para o canteiro e para o escritório.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1 bg-[#FF5C00] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
<iconify-icon className="text-[#0A1628] text-3xl mb-5" icon="solar:clipboard-text-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-lg font-medium text-[#0A1628] mb-2">FVS</h4>
<p className="text-sm text-gray-500 leading-relaxed">Verifique serviços com mapa de ocorrências e ranking de empreiteiros integrados.</p>
</div>

<div className="group bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1 bg-[#FF5C00] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
<iconify-icon className="text-[#0A1628] text-3xl mb-5" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-lg font-medium text-[#0A1628] mb-2">RDO</h4>
<p className="text-sm text-gray-500 leading-relaxed">Linha do tempo diária com fotos, controle de mão de obra e registro de ocorrências climáticas.</p>
</div>

<div className="group bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1 bg-[#FF5C00] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
<iconify-icon className="text-[#0A1628] text-3xl mb-5" icon="solar:checklist-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-lg font-medium text-[#0A1628] mb-2">Checklist de Entregas</h4>
<p className="text-sm text-gray-500 leading-relaxed">Vistoria final sem papel, com registro fotográfico obrigatório e assinatura digital do cliente.</p>
</div>

<div className="group bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1 bg-[#FF5C00] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
<iconify-icon className="text-[#0A1628] text-3xl mb-5" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-lg font-medium text-[#0A1628] mb-2">Rastreabilidade de Concreto</h4>
<p className="text-sm text-gray-500 leading-relaxed">Controle fck, slump e vincule laudos laboratoriais por cada peça concretada da estrutura.</p>
</div>

<div className="group bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1 bg-[#FF5C00] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
<iconify-icon className="text-[#0A1628] text-3xl mb-5" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-lg font-medium text-[#0A1628] mb-2">Verificação de Materiais</h4>
<p className="text-sm text-gray-500 leading-relaxed">Rastreie, inspecione e aprove materiais recebidos no canteiro garantindo a conformidade técnica.</p>
</div>

<div className="group bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1 bg-[#FF5C00] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
<iconify-icon className="text-[#0A1628] text-3xl mb-5" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-lg font-medium text-[#0A1628] mb-2">Sistema de Avaliações</h4>
<p className="text-sm text-gray-500 leading-relaxed">Avalie empreiteiros e fornecedores criando um histórico comparativo para futuras contratações.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F7FA] py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl tracking-tight font-semibold text-[#0A1628] mb-16 text-center">Do canteiro ao relatório em 3 passos</h2>
<div className="relative">

<div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[1px] bg-gray-300 z-0"></div>
<div className="grid md:grid-cols-3 gap-12 relative z-10">

<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-[#FF5C00] text-white flex items-center justify-center font-medium text-lg mb-6 shadow-md border-4 border-[#F5F7FA]">
                            1
                        </div>
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-gray-400" icon="solar:smartphone-2-linear"></iconify-icon>
<h4 className="text-lg font-medium text-[#0A1628]">Coleta no campo</h4>
</div>
<p className="text-sm text-gray-500 px-4">Técnico registra dados e fotos direto no app (Android/iOS), funcionando perfeitamente mesmo sem internet.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-[#FF5C00] text-white flex items-center justify-center font-medium text-lg mb-6 shadow-md border-4 border-[#F5F7FA]">
                            2
                        </div>
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-gray-400" icon="solar:cloud-upload-linear"></iconify-icon>
<h4 className="text-lg font-medium text-[#0A1628]">Sincronização automática</h4>
</div>
<p className="text-sm text-gray-500 px-4">Assim que há conexão, os dados são enviados para o portal em nuvem com total segurança e criptografia.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-[#FF5C00] text-white flex items-center justify-center font-medium text-lg mb-6 shadow-md border-4 border-[#F5F7FA]">
                            3
                        </div>
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-gray-400" icon="solar:graph-up-linear"></iconify-icon>
<h4 className="text-lg font-medium text-[#0A1628]">Decisão com dados</h4>
</div>
<p className="text-sm text-gray-500 px-4">O gestor acessa o dashboard e relatórios consolidados em tempo real, agilizando aprovações e correções.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A1628] py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl tracking-tight font-semibold text-white mb-16 text-center">O que as construtoras dizem</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#112035] rounded-xl p-8 relative pt-10 border border-white/5">
<div className="absolute top-0 left-0 right-0 h-1 bg-[#FF5C00] rounded-t-xl"></div>
<div className="flex gap-1 text-[#FF5C00] text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-300 text-sm italic leading-relaxed mb-6">"Maior eficiência na rotina do SGQ, processos transparentes e relatórios dinâmicos que facilitam encontrar informações importantes."</p>
<div className="mt-auto">
<div className="text-white font-medium text-sm">Magda Prates</div>
<div className="text-gray-500 text-xs mt-1">Habiarte</div>
</div>
</div>

<div className="bg-[#112035] rounded-xl p-8 relative pt-10 border border-white/5">
<div className="absolute top-0 left-0 right-0 h-1 bg-[#FF5C00] rounded-t-xl"></div>
<div className="flex gap-1 text-[#FF5C00] text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-300 text-sm italic leading-relaxed mb-6">"Informações bem organizadas, fácil visualização, dados em gráficos e aumento real de produtividade para toda a equipe em campo."</p>
<div className="mt-auto">
<div className="text-white font-medium text-sm">Mateus Andrade</div>
<div className="text-gray-500 text-xs mt-1">MM Empreendimentos</div>
</div>
</div>

<div className="bg-[#112035] rounded-xl p-8 relative pt-10 border border-white/5">
<div className="absolute top-0 left-0 right-0 h-1 bg-[#FF5C00] rounded-t-xl"></div>
<div className="flex gap-1 text-[#FF5C00] text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-300 text-sm italic leading-relaxed mb-6">"Agrega inteligência nos processos de aferições qualitativas e integra dados online para decisões precisas e muito mais rápidas."</p>
<div className="mt-auto">
<div className="text-white font-medium text-sm">Daniel</div>
<div className="text-gray-500 text-xs mt-1">Apis Engenharia</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FF5C00] py-24 text-center px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-white text-3xl md:text-5xl tracking-tight font-semibold mb-6 leading-tight">Pronto para eliminar o retrabalho na sua obra?</h2>
<p className="text-white/90 text-base md:text-lg mb-10 max-w-2xl mx-auto">
                Comece seu teste gratuito hoje. Implementação guiada por engenheiros, sem burocracia e com resultados rápidos.
            </p>
<a className="inline-flex items-center justify-center bg-white text-[#0A1628] font-medium rounded-lg px-8 py-4 text-base hover:bg-gray-50 transition-colors shadow-lg" href="#">
                Solicitar teste gratuito
            </a>
<div className="mt-6 text-white/80 text-xs md:text-sm font-medium flex flex-wrap justify-center gap-2 md:gap-4">
<span>Sem cartão de crédito</span>
<span className="hidden md:inline">·</span>
<span>Acesso imediato</span>
<span className="hidden md:inline">·</span>
<span>Suporte especializado</span>
</div>
</div>
</section>

<footer className="bg-[#0A1628] pt-16 pb-8 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-1">
<a className="text-white text-lg tracking-tighter font-medium flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-[#FF5C00] text-xl" icon="solar:buildings-2-linear" strokeWidth="1.5"></iconify-icon>
                        QUALITAB
                    </a>
<p className="text-gray-400 text-sm leading-relaxed">
                        A plataforma definitiva de qualidade de obra, construída para escalar a eficiência e reduzir custos em construtoras de todo o Brasil.
                    </p>
</div>

<div>
<h4 className="text-white text-sm font-medium mb-4 tracking-wide">Ferramentas</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">FVS Digital</a></li>
<li><a className="hover:text-white transition-colors" href="#">Diário de Obra (RDO)</a></li>
<li><a className="hover:text-white transition-colors" href="#">Checklist de Entregas</a></li>
<li><a className="hover:text-white transition-colors" href="#">Rastreabilidade de Concreto</a></li>
<li><a className="hover:text-white transition-colors" href="#">Inspeção de Materiais</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-medium mb-4 tracking-wide">Conteúdo</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Blog da Qualidade</a></li>
<li><a className="hover:text-white transition-colors" href="#">Materiais Ricos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Casos de Sucesso</a></li>
<li><a className="hover:text-white transition-colors" href="#">Webinars</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-medium mb-4 tracking-wide">Links úteis</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Sobre a Empresa</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contato Comercial</a></li>
<li><a className="hover:text-white transition-colors" href="#">Trabalhe Conosco</a></li>
<li><a className="hover:text-white transition-colors" href="#">Central de Ajuda</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
<div className="text-gray-500 text-xs flex gap-4">
<span>© 2024 Qualitab. Todos os direitos reservados.</span>
<a className="hover:text-gray-300" href="#">Política de Privacidade</a>
</div>
<div className="flex items-center gap-4 text-gray-400 text-lg">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear"></iconify-icon></a> 
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:play-circle-linear"></iconify-icon></a> 
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
