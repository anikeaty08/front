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



    document.addEventListener("DOMContentLoaded", () => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target); // Trigger only once
                }
            });
        }, observerOptions);

        // Add anim classes to children inside scroll-triggers if needed, 
        // or just use CSS relative to the parent's in-view class.
        document.querySelectorAll('.scroll-trigger, .group.in-view').forEach((el) => {
            observer.observe(el);
        });
    });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group in-view" href="#">
<div className="font-semibold text-2xl tracking-tight text-slate-900 group-hover:text-[#c62929] transition-colors duration-300">
                IPA
            </div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Über Gerald Hörhan</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Training &amp; Produkte</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Academy</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-[#002051] text-white px-5 py-2.5 rounded-full hover:bg-[#001536] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#">
<span className="text-sm font-medium">Strategiegespräch</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="md:hidden text-slate-600 text-2xl flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>
<main className="flex-grow pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="flex flex-col items-start z-10">
<div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-slate-200 shadow-sm mb-8 animate-float-badge">
<div className="flex text-[#00b67a] text-sm">
<iconify-icon className="text-[#00b67a]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#00b67a]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#00b67a]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#00b67a]" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#00b67a]" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs md:text-sm font-medium text-slate-600">4.8 Trustpilot (1.097+ Reviews)</span>
</div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-balance text-slate-900">
                    Finanzielle Freiheit<br/>
<span className="text-[#c62929]">ist kein Zufall.</span>
</h1>
<p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-lg mb-10">
                    Nullzinsen, Inflation und technologische Disruption zerstören alte Lebensmodelle. Wer heute noch spart wie seine Eltern, verliert. Das System ist nicht kaputt – es hat sich nur verändert.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#c62929] text-white px-8 py-3.5 rounded-full hover:bg-[#a52222] transition-all duration-300 shadow-[0_8px_20px_rgba(198,41,41,0.2)] hover:shadow-[0_12px_24px_rgba(198,41,41,0.3)] hover:-translate-y-0.5" href="#">
<span className="text-sm font-medium">Strategiegespräch buchen</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow-md" href="#">
<iconify-icon className="text-xl text-slate-400" icon="solar:play-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Trainings ansehen</span>
</a>
</div>
</div>
<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-200/50 to-slate-50 rounded-3xl transform rotate-3 scale-105 border border-slate-200/50"></div>
<div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex items-center justify-center">
<div className="absolute inset-0 pattern-grid opacity-50"></div>
<img alt="Gerald Hörhan" className="w-full h-full object-cover object-bottom relative z-10" loading="lazy" src="https://cdn.prod.website-files.com/696671260b68957d1d8b048f/69af19cb4cc86c2937a25161_gerald-hero.png"/>
</div>

<div className="absolute top-8 -left-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex items-center gap-3 animate-float-badge z-20">
<div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#c62929]">
<iconify-icon className="text-xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-slate-800">Immobilien</span>
</div>
<div className="absolute bottom-16 -right-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex items-center gap-3 animate-float-badge z-20" style={{animationDelay: '-2s'}}>
<div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#002051]">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-slate-800">Krypto</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 relative">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div className="max-w-2xl">
<span className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4 block">Die Realität</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                    Warum <span className="text-[#c62929]">95%</span> finanziell weit unter ihrem Potenzial bleiben.
                </h2>
<p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Du arbeitest hart – und trotzdem wächst dein Vermögen kaum. Inflation, Steuern und falsche Entscheidungen kosten dich jedes Jahr viel Substanz.
                </p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/60 card-hover group transition-all duration-500">
<div className="aspect-[4/3] bg-slate-50/50 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center p-6">
<div className="absolute inset-0 pattern-dots opacity-50"></div>
<div className="w-full bg-white rounded-xl border border-slate-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-4 relative z-10 transform group-hover:-translate-y-1 transition-transform duration-500">
<div className="flex justify-between items-center mb-4">
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-slate-400">Kaufkraftverlust</span>
<span className="text-lg font-semibold tracking-tight text-slate-800">€ 14.250</span>
</div>
<div className="bg-red-50 text-[#c62929] px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
<iconify-icon icon="solar:trend-down-linear"></iconify-icon>
                                -8.4%
                            </div>
</div>
<div className="h-16 relative w-full flex items-end">
<div className="absolute inset-0 bg-gradient-to-t from-red-50 to-transparent chart-fill-fade rounded-b-md"></div>
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 40">
<path className="chart-line-draw" d="M0,5 Q25,5 50,15 T100,35" fill="none" stroke="#c62929" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<circle className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500" cx="100" cy="35" fill="#ffffff" r="3" stroke="#c62929" strokeWidth="2"></circle>
</svg>
</div>
</div>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl premium-icon-box flex items-center justify-center text-[#002051]">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Inflation</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Inflation frisst dein Vermögen</h3>
<p className="text-sm text-slate-500 leading-relaxed">Während du sparst, verliert dein Kapital real an Wert. Wer nur Geld hält, wird langfristig enteignet – leise und unsichtbar.</p>
</div>

<div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/60 card-hover group transition-all duration-500">
<div className="aspect-[4/3] bg-slate-50/50 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center p-6">
<div className="absolute inset-0 pattern-grid opacity-50 mask-image: linear-gradient(to bottom, black, transparent);"></div>
<div className="relative w-32 h-32 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700">
<svg className="w-full h-full transform -rotate-90 filter drop-shadow-sm" viewbox="0 0 36 36">
<circle className="stroke-slate-200" cx="18" cy="18" fill="none" r="15.9" strokeWidth="2"></circle>
<circle className="stroke-[#c62929] donut-draw" cx="18" cy="18" fill="none" r="15.9" strokeLinecap="round" strokeWidth="2"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-0.5">Steuern</span>
<span className="text-xl font-semibold tracking-tight text-slate-800">~50%</span>
</div>
<div className="absolute -right-2 top-0 bg-white border border-slate-200 shadow-sm rounded-lg p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 transform group-hover:-translate-y-2">
<iconify-icon className="text-slate-400 text-sm block" icon="solar:bill-cross-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl premium-icon-box flex items-center justify-center text-[#002051]">
<iconify-icon className="text-xl" icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Steuern</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Der Staat als Anteilseigner</h3>
<p className="text-sm text-slate-500 leading-relaxed">Ohne Struktur arbeitet ein großer Teil deiner Leistung gegen dich. Wer Steuern nicht aktiv gestaltet, baut Vermögen für andere auf.</p>
</div>

<div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/60 card-hover group transition-all duration-500">
<div className="aspect-[4/3] bg-slate-50/50 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
<div className="relative w-40 h-40 flex items-center justify-center">
<div className="absolute inset-0 bg-[#002051]/5 rounded-full blur-xl group-hover:bg-[#002051]/10 transition-colors duration-700"></div>
<div className="absolute w-full h-full rounded-full border border-slate-200/80"></div>
<div className="absolute w-[60%] h-[60%] rounded-full border border-slate-200/80 border-dashed group-hover:rotate-45 transition-transform duration-1000"></div>
<div className="absolute w-full h-[1px] bg-slate-200/80"></div>
<div className="absolute h-full w-[1px] bg-slate-200/80"></div>
<div className="absolute w-full h-full rounded-full overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/10 to-transparent origin-bottom-left radar-spin opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>
<div className="relative w-8 h-8 bg-white rounded-full border border-slate-200 shadow-sm flex items-center justify-center z-10">
<div className="w-2 h-2 bg-[#002051] rounded-full group-hover:scale-150 transition-transform duration-500"></div>
</div>
<div className="absolute top-8 left-10 w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
<div className="absolute bottom-10 right-12 w-2 h-2 bg-slate-300 rounded-full"></div>
<div className="absolute top-12 right-8 w-1 h-1 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-300 duration-500"></div>
</div>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl premium-icon-box flex items-center justify-center text-[#002051]">
<iconify-icon className="text-xl" icon="solar:compass-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Unsicherheit</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Kein klarer Plan</h3>
<p className="text-sm text-slate-500 leading-relaxed">Immobilien, Aktien, Krypto – ohne Strategie bleibt alles nur Aktionismus. Die meisten verzetteln sich, statt ein System aufzubauen.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 md:p-12 overflow-hidden flex flex-col group min-h-[480px] hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] transition-all duration-500 bg-white border-slate-200/60 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
<div className="flex-grow relative w-full flex items-center justify-center mb-8 bg-slate-50/30 rounded-2xl border border-slate-100 overflow-hidden pt-8">
<div className="pattern-grid mask-image: linear-gradient(to bottom, transparent, black); opacity-30 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative w-full max-w-lg h-48 px-8">
<div className="absolute inset-0 flex flex-col justify-between pb-8">
<div className="w-full h-[1px] bg-slate-100"></div>
<div className="w-full h-[1px] bg-slate-100"></div>
<div className="w-full h-[1px] bg-slate-100"></div>
<div className="w-full h-[1px] bg-slate-200"></div>
</div>
<svg className="overflow-visible absolute right-8 bottom-8 left-8 w-[448px] h-[192px]" data-icon-replaced="true" preserveaspectratio="none" strokeWidth="2" style={{width: '448px', height: '192px', color: 'rgb(30, 41, 59)'}} viewbox="0 0 400 150">
<defs>
<lineargradient id="blueGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#002051" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#002051" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="opacity-80" d="M0,130 Q100,120 200,100 T400,80" fill="none" stroke="#cbd5e1" stroke-dasharray="6 6" strokeWidth="2"></path>
<path className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000" d="M0,130 Q150,110 250,50 T400,10 L400,150 L0,150 Z" fill="url(#blueGradient)"></path>
<path className="chart-line-draw drop-shadow-md" d="M0,130 Q150,110 250,50 T400,10" fill="none" stroke="#002051" strokeLinecap="round" strokeWidth="4"></path>
<circle className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-700 shadow-md" cx="400" cy="10" fill="#ffffff" r="5" stroke="#002051" strokeWidth="3"></circle>
</svg>
<div className="group-hover:opacity-100 transition-all duration-500 delay-1000 transform group-hover:-translate-y-2 flex gap-1.5 text-xs font-semibold text-white bg-slate-800 opacity-0 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 absolute top-0 right-4 shadow-lg translate-y-2 gap-x-1.5 gap-y-1.5 items-center">
<iconify-icon className="text-blue-400" icon="solar:graph-up-linear"></iconify-icon>
                            Überrendite
                        </div>
</div>
</div>
<div className="relative z-10 max-w-lg mt-auto">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#002051] mb-4">Überdurchschnittlicher Vermögenszuwachs</h3>
<p className="text-sm md:text-base text-slate-500 leading-relaxed">Durchschnittliche Renditen für durchschnittliche Ergebnisse. Mit den richtigen Anlageklassen und einer klaren Strategie erzielst du Wachstum, das den Markt hinter sich lässt.</p>
</div>
</div>

<div className="md:col-span-1 bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-200/60 relative overflow-hidden flex flex-col group min-h-[480px] hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] transition-all duration-500">
<div className="flex-grow relative w-full flex items-center justify-center mb-8">
<div className="relative w-32 h-32 [perspective:1000px] [transform-style:preserve-3d]">
<div className="absolute inset-0 bg-slate-50 border border-slate-200 rounded-2xl isometric-layer-1 flex items-end justify-end p-2">
<div className="w-4 h-4 rounded bg-slate-200/50"></div>
</div>
<div className="absolute inset-0 bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-2xl isometric-layer-2 shadow-sm flex items-start justify-start p-3">
<div className="w-8 h-2 rounded-full bg-slate-200"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-[#002051] to-blue-900 border border-[#001536] rounded-2xl isometric-layer-3 shadow-xl flex items-center justify-center text-white">
<iconify-icon className="text-3xl transform -rotate-z-[45deg] -rotate-x-[60deg]" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
</div>
</div>
<div className="relative z-10 mt-auto">
<h3 className="text-lg md:text-xl font-semibold tracking-tight text-[#002051] mb-3">System &amp; Strategie</h3>
<p className="text-sm text-slate-500 leading-relaxed">Kein Raten, kein Hoffen, kein Zocken. Du bekommst ein klares, erprobtes System für nachhaltigen Vermögensaufbau.</p>
</div>
</div>

<div className="md:col-span-1 bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-200/60 relative overflow-hidden flex flex-col group min-h-[480px] hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] transition-all duration-500">
<div className="flex-grow flex w-full mb-8 relative items-center justify-center">
<div className="flex w-32 h-32 relative items-center justify-center group cursor-pointer">
<div className="absolute inset-0 bg-[#002051]/10 rounded-full blur-[20px] group-hover:bg-[#002051]/20 group-hover:blur-[24px] transition-all duration-700"></div>
<div className="absolute w-full h-full rounded-full border border-[#002051]/10 radar-spin" style={{animationDuration: '15s'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-gradient-to-b from-[#002051] to-blue-900 rounded-full shadow-[0_0_8px_rgba(0,32,81,0.5)]"></div>
</div>
<div className="border-dashed radar-spin w-[115%] h-[115%] border-[#002051]/5 border rounded-full absolute flex items-center justify-center" style={{animationDuration: '25s', animationDirection: 'reverse'}}>
<div className="absolute z-[40] w-16 h-16 flex items-center justify-center" style={{animation: 'spin 25s linear infinite'}}>
<div className="absolute w-12 h-12 bg-gradient-to-tr from-[#002051none"></div>
<svg className="relative z-10 transform group-hover:rotate-[15deg] group-hover:scale-110 transition-transform duration-700 drop-shadow-[0_6px_12px_rgba(0,32,81,0.3)]" fill="none" height="36" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="new-key-grad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#002051"></stop>
<stop offset="100%" stop-color="#1e3a8a"></stop>
</lineargradient>
<lineargradient id="new-key-accent" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#c62929"></stop>
<stop offset="100%" stop-color="#ef4444"></stop>
</lineargradient>
</defs>
<path d="m21 2-9.6 9.6" stroke="url(#new-key-grad)" strokeWidth="3"></path>
<path d="m15.5 7.5 3 3L22 7l-3-3" stroke="url(#new-key-accent)" strokeWidth="2.5"></path>
<circle cx="7.5" cy="15.5" fill="#ffffff" r="5.5" stroke="url(#new-key-grad)" strokeWidth="2.5"></circle>
<circle cx="7.5" cy="15.5" fill="url(#new-key-grad)" r="2.5" stroke="none"></circle>
</svg>
</div>
<style>
                                svg[stroke="url(#premium-key-grad-main)"] { display: none !important; }
                            </style>
</div>
<div className="relative w-24 h-24 bg-gradient-to-br from-white via-white to-slate-50/90 backdrop-blur-xl border border-white rounded-[2rem] shadow-[0_16px_40px_rgba(0,32,81,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.02)] flex items-center justify-center overflow-hidden transform group-hover:scale-105 group-hover:shadow-[0_24px_48px_rgba(0,32,81,0.15)] transition-all duration-500 z-10">
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 transform translate-x-[-100%] group-hover:translate-x-[100%] z-20 pointer-events-none"></div>
<div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-slate-100/80 to-slate-50 border border-white shadow-[inset_0_4px_8px_rgba(0,32,81,0.04),0_2px_4px_rgba(255,255,255,1)] flex items-center justify-center">
<svg className="absolute w-12 h-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)] transform group-hover:scale-105 transition-transform duration-700" fill="url(#shield-bg-grad)" viewbox="0 0 24 24">
<defs>
<lineargradient id="shield-bg-grad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#ffffff"></stop>
<stop offset="100%" stop-color="#f8fafc"></stop>
</lineargradient>
</defs>
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#e2e8f0" strokeWidth="0.75"></path>
</svg>
<svg className="relative z-10 transform group-hover:rotate-[15deg] group-hover:scale-110 transition-transform duration-700 drop-shadow-[0_3px_5px_rgba(0,32,81,0.3)]" fill="none" height="28" stroke="url(#premium-key-grad-main)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="premium-key-grad-main" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#2563eb"></stop>
<stop offset="50%" stop-color="#002051"></stop>
<stop offset="100%" stop-color="#0f172a"></stop>
</lineargradient>
</defs>
<circle cx="7.5" cy="15.5" r="5.5"></circle>
<path d="m21 2-9.6 9.6"></path>
<path d="m15.5 7.5 3 3L22 7l-3-3"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="relative z-10 mt-auto">
<h3 className="text-lg md:text-xl font-semibold tracking-tight text-[#002051] mb-3">Freiheit &amp; Sicherheit</h3>
<p className="text-sm text-slate-500 leading-relaxed">Echte finanzielle Unabhängigkeit heißt: Du entscheidest. Abgesichert durch Strukturen, die auch in Krisenzeiten halten.</p>
</div>
</div>

<div className="md:col-span-2 bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-200/60 relative overflow-hidden flex flex-col group min-h-[480px] hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] transition-all duration-500">
<div className="flex-grow relative w-full flex items-center justify-center mb-8 bg-slate-50/50 rounded-2xl border border-slate-100/50 p-6">
<div className="relative w-full max-w-sm h-48 flex items-end justify-around px-4">
<div className="absolute inset-0 flex flex-col justify-between pb-8 pointer-events-none opacity-50">
<div className="w-full h-[1px] border-t border-dashed border-slate-200"></div>
<div className="w-full h-[1px] border-t border-dashed border-slate-200"></div>
<div className="w-full h-[1px] border-t border-slate-200"></div>
</div>
<div className="relative w-24 h-full flex flex-col justify-end group-hover:opacity-70 transition-opacity duration-500 z-10">
<div className="w-full bg-slate-200 rounded-t-xl relative overflow-hidden bar-grow-1 flex flex-col border border-slate-300/50 shadow-sm">
<div className="w-full flex-1 bg-slate-100 flex items-end justify-center pb-2"></div>
<div className="w-full h-[45%] bg-red-50 border-t border-red-100 flex items-center justify-center">
<span className="text-[10px] font-semibold text-red-400">Steuern</span>
</div>
</div>
<div className="mt-3 text-center text-xs font-semibold text-slate-400 uppercase tracking-wide">Ohne</div>
</div>
<div className="relative w-24 h-full flex flex-col justify-end z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#002051] text-white text-[10px] font-semibold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 transform translate-y-2 group-hover:-translate-y-2 whitespace-nowrap shadow-lg">
                                + Wachstum
                            </div>
<div className="w-full bg-gradient-to-t from-[#002051] to-blue-800 rounded-t-xl relative overflow-hidden bar-grow-2 flex flex-col shadow-lg">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]"></div>
<div className="w-full flex-1 flex items-center justify-center relative">
<iconify-icon className="text-white/30 text-2xl absolute" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="w-full h-[15%] bg-blue-900/50 border-t border-blue-400/30"></div>
</div>
<div className="mt-3 text-center text-xs font-semibold text-[#002051] uppercase tracking-wide">Mit Strategie</div>
</div>
</div>
</div>
<div className="z-10 max-w-lg mt-auto relative">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#002051] mb-4">Bis zu 50% weniger Steuern</h3>
<p className="md:text-base leading-relaxed text-sm text-slate-500">Wer sein Geld nicht clever strukturiert, verschenkt Jahr für Jahr tausende Euro ans Finanzamt. Wir zeigen dir legale Steuerstrategien, die Vermögensaufbau deutlich schneller machen.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
<div className="relative">
<div className="sticky top-32">
<span className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4 block">Die Lösung</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        Finanzielle Freiheit ist <span className="text-[#c62929]">eine Entscheidung.</span>
</h2>
<p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                        Eine einzige falsche Finanzentscheidung kostet dich über 30 Jahre Millionen an entgangenem Zinseszins.
                    </p>
<p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10">
                        Wir geben dir das Werkzeug, die Strategie und das Netzwerk, um aus dem Hamsterrad auszubrechen und echtes Vermögen aufzubauen.
                    </p>
<a className="inline-flex items-center justify-center gap-2 bg-[#002051] text-white px-8 py-3.5 rounded-full hover:bg-[#001536] transition-all duration-300 shadow-[0_8px_20px_rgba(0,32,81,0.15)] hover:shadow-[0_12px_24px_rgba(0,32,81,0.2)] hover:-translate-y-0.5" href="#">
<span className="text-sm font-medium">Strategiegespräch buchen</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col gap-6">

<div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-200/60 card-hover group relative overflow-hidden">
<span className="absolute top-8 right-8 text-4xl font-semibold text-slate-50 opacity-50 select-none">01</span>
<div className="flex items-center gap-4 mb-5 relative z-10">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#002051] group-hover:bg-[#002051] group-hover:text-white transition-colors duration-500 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Wirtschaftliches Fundament</h3>
</div>
<p className="text-sm md:text-base text-slate-500 leading-relaxed relative z-10">
                        Lerne die ungeschriebenen Regeln des Geldes. Verstehe Bilanzen, Cashflow und die Hebelwirkung von Fremdkapital, um Banken und das System für dich arbeiten zu lassen.
                    </p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-200/60 card-hover group relative overflow-hidden">
<span className="absolute top-8 right-8 text-4xl font-semibold text-slate-50 opacity-50 select-none">02</span>
<div className="flex items-center gap-4 mb-5 relative z-10">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#002051] group-hover:bg-[#002051] group-hover:text-white transition-colors duration-500 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Individuelle Strategie</h3>
</div>
<p className="text-sm md:text-base text-slate-500 leading-relaxed relative z-10">
                        Wir analysieren deine Ausgangssituation und entwickeln einen klaren Fahrplan. Ob Immobilien, Krypto oder Unternehmensbeteiligungen – der Plan muss zu dir passen.
                    </p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-200/60 card-hover group relative overflow-hidden">
<span className="absolute top-8 right-8 text-4xl font-semibold text-slate-50 opacity-50 select-none">03</span>
<div className="flex items-center gap-4 mb-5 relative z-10">
<div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#c62929] group-hover:bg-[#c62929] group-hover:text-white transition-colors duration-500 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Knallharte Umsetzung</h3>
</div>
<p className="text-sm md:text-base text-slate-500 leading-relaxed relative z-10">
                        Wissen ohne Umsetzung ist wertlos. Mit unserem Experten-Netzwerk aus Steuerberatern, Notaren und Finanzierern begleiten wir dich bei jedem entscheidenden Schritt.
                    </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 scroll-trigger">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 flex flex-col gap-6">
<div className="md:p-12 flex-1 overflow-hidden group bg-white border-slate-200/60 border rounded-[2rem] pt-10 pr-10 pb-10 pl-10 relative shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
<span className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6 block">Der Gründer</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-4 leading-[1.1]">
                        Gerald Hörhan
                    </h2>
<p className="md:text-xl text-lg font-medium text-slate-500 tracking-tight mb-8">Vom Wall Street Banker zum <span className="text-[#c62929] font-semibold">Investmentpunk.</span></p>
<div className="grid md:grid-cols-2 gap-8 text-slate-600 text-sm md:text-base leading-relaxed relative z-10">
<p className="">Er hat das System von innen gesehen. Nach seinem <strong className="text-slate-900 font-semibold">Magna Cum Laude Abschluss in Harvard</strong> arbeitete Gerald Hörhan als Investmentbanker bei JPMorgan in New York und McKinsey in Frankfurt.</p>
<p className="">
                            Das traditionelle System ist darauf ausgelegt, die Masse arm zu halten. Heute nutzt er dieses Insiderwissen, um anderen den Weg in die echte finanzielle Freiheit zu zeigen.
                        </p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
<div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-200/60 flex flex-col justify-center items-start group hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#002051] mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:history-linear"></iconify-icon>
</div>
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-[#002051] mb-1">20+</div>
<div className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-widest">Jahre Erfahrung</div>
</div>
<div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-200/60 flex flex-col justify-center items-start group hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#002051] mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:book-linear"></iconify-icon>
</div>
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-[#002051] mb-1">6</div>
<div className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-widest">Bestseller</div>
</div>
<div className="bg-[#002051] rounded-[2rem] p-6 md:p-8 shadow-lg border border-[#001536] flex flex-col justify-center items-start text-white relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 col-span-2 md:col-span-1">
<div className="absolute inset-0 pattern-dots opacity-20"></div>
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform border border-white/10">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="text-3xl md:text-4xl font-semibold tracking-tight mb-1 relative z-10">100k+</div>
<div className="text-[10px] md:text-xs font-semibold text-blue-200 uppercase tracking-widest relative z-10">Schüler</div>
</div>
</div>
</div>
<div className="lg:col-span-1 relative rounded-[2rem] overflow-hidden group border border-slate-200/60 shadow-[0_4px_20px_rgb(0,0,0,0.02)] min-h-[400px] lg:min-h-full">
<div className="absolute inset-0 bg-gradient-to-t from-[#002051]/90 via-[#002051]/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80"></div>
<img alt="Gerald Hörhan" className="absolute inset-0 w-full h-full object-cover object-top filter contrast-[1.1] saturate-[0.8] group-hover:scale-105 transition-transform duration-1000 ease-out" loading="lazy" src="https://cdn.prod.website-files.com/696671260b68957d1d8b048f/69af19cb4cc86c2937a25161_gerald-hero.png"/>
<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 transform transition-transform duration-500">
<div className="glass-panel border-white/20 bg-white/10 rounded-2xl p-5 backdrop-blur-md shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white shadow-sm border border-white/30 shrink-0">
<iconify-icon className="text-2xl" icon="solar:diploma-linear"></iconify-icon>
</div>
<div>
<p className="text-base font-semibold text-white tracking-tight mb-0.5">Harvard University</p>
<p className="text-xs text-blue-100/90 leading-relaxed">Magna Cum Laude Absolvent in Angewandter Mathematik &amp; Wirtschaft.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 scroll-trigger max-w-7xl mr-auto mb-32 ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4 block">Zusammenarbeit</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6 text-balance">
                Deine Vorteile auf <span className="text-[#c62929]">einen Blick.</span>
</h2>
<p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Profitiere von erprobten Strategien und einem starken Netzwerk, um deine finanziellen Ziele messbar schneller zu erreichen.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-[2rem] p-2 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-200/60 card-hover group transition-all duration-500 flex flex-col">
<div className="h-48 rounded-[1.5rem] bg-slate-50/50 border border-slate-100 mb-4 relative overflow-hidden flex flex-col">
<div className="flex z-10 pt-4 pr-4 pb-4 pl-4 items-start justify-between">
<div className="flex items-center gap-1.5">
<div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm">
<svg fill="none" height="12" stroke="#0f172a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m8 17 4 4 4-4"></path></svg>
</div>
</div>
<div className="flex gap-1 mt-1">
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
</div>
</div>
<div className="absolute inset-0 pt-16 flex items-end">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 200 80">
<path className="group-hover:stroke-[#c62929] transition-colors duration-500" d="M0,70 L5,65 L10,75 L15,50 L20,60 L25,40 L30,45 L35,30 L40,50 L45,35 L50,20 L55,30 L60,10 L65,20 L70,15 L75,5 L80,15 L85,10 L90,20 L95,5 L100,25 L105,15 L110,35 L115,25 L120,50 L125,40 L130,60 L135,50 L140,75 L145,65 L150,50 L155,60 L160,40 L165,50 L170,30 L175,45 L180,20 L185,35 L190,10 L195,25 L200,5" fill="none" stroke="#0f172a" strokeLinejoin="miter" strokeWidth="1"></path>
</svg>
</div>
</div>
<div className="px-4 pb-4">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Steuerlast reduzieren</h3>
<p className="text-sm text-slate-500 leading-relaxed">Nutze legale Gestaltungsspielräume optimal aus, um Abgaben zu minimieren und deutlich mehr Kapital freizusetzen.</p>
</div>
</div>

<div className="bg-white rounded-[2rem] p-2 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-200/60 card-hover group transition-all duration-500 flex flex-col">
<div className="h-48 rounded-[1.5rem] bg-[#09090b] border border-[#27272a] mb-4 relative overflow-hidden flex flex-col group-hover:border-[#3f3f46] transition-colors duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
<div className="p-4 flex justify-between items-center z-20 w-full relative">
<div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-wider text-zinc-300 uppercase bg-white/5 px-2.5 py-1.5 rounded-full backdrop-blur-md border border-white/5 shadow-sm">
<svg className="text-rose-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                Wachstum
            </div>
<div className="text-[11px] text-[#34d399] font-mono font-semibold tracking-wide bg-[#34d399]/10 px-2.5 py-1.5 rounded-full border border-[#34d399]/20 backdrop-blur-md shadow-sm">+14,34% p.a.</div>
</div>
<div className="absolute inset-0 pt-12 flex items-end z-10">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 200 100">
<defs>
<lineargradient id="apple-line-grad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#3b82f6"></stop>
<stop offset="50%" stop-color="#a855f7"></stop>
<stop offset="100%" stop-color="#f43f5e"></stop>
</lineargradient>
<lineargradient id="apple-area-grad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#f43f5e" stop-opacity="0.35"></stop>
<stop offset="50%" stop-color="#a855f7" stop-opacity="0.05"></stop>
<stop offset="100%" stop-color="#3b82f6" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="opacity-50" d="M0,25 L200,25 M0,50 L200,50 M0,75 L200,75" fill="none" stroke="#27272a" stroke-dasharray="2 2" strokeWidth="0.5"></path>
<path className="opacity-40 group-hover:opacity-100 transition-opacity duration-1000" d="M0,90 C80,90 120,75 150,45 C175,20 190,10 200,5 L200,100 L0,100 Z" fill="url(#apple-area-grad)"></path>
<path className="chart-line-draw" d="M0,90 C80,90 120,75 150,45 C175,20 190,10 200,5" fill="none" stroke="url(#apple-line-grad)" strokeLinecap="round" strokeWidth="2.5" style={{filter: 'drop-shadow(0px 4px 6px rgba(244,63,94,0.3))'}}></path>
<circle className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-500" cx="200" cy="5" fill="#ffffff" r="3.5" stroke="#f43f5e" strokeWidth="2" style={{filter: 'drop-shadow(0px 0px 8px rgba(244,63,94,0.8))'}}></circle>
</svg>
</div>
<div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#09090b] to-transparent z-10 pointer-events-none"></div>
</div>
<div className="px-4 pb-4">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Planbarer Aufbau</h3>
<p className="text-sm text-slate-500 leading-relaxed">Erhalte ein System mit messbaren Meilensteinen, das unabhängig von Marktschwankungen langfristig funktioniert.</p>
</div>
</div>

<div className="bg-white rounded-[2rem] p-2 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-200/60 card-hover group transition-all duration-500 flex flex-col">
<div className="h-48 rounded-[1.5rem] bg-slate-50/50 border border-slate-100 mb-4 relative overflow-hidden flex items-center justify-center">
<div className="absolute w-[160px] h-[160px] rounded-full border border-slate-200/50 transition-transform duration-700 group-hover:scale-110"></div>

<div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md relative z-10 transform transition-transform duration-500 group-hover:bg-[#002051]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>

<div className="absolute top-6 right-8 flex items-center gap-2 transform group-hover:-translate-y-1 transition-transform duration-500">
<div className="bg-white border border-slate-200 shadow-sm px-2 py-1.5 rounded-md text-[10px] font-medium text-slate-700 leading-none">Expert</div>
<div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden shrink-0">
<img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/100?img=33"/>
</div>
</div>

<div className="absolute bottom-10 right-4 flex items-center gap-2 transform group-hover:translate-x-1 transition-transform duration-500 delay-75">
<div className="bg-slate-900 text-white shadow-sm px-2 py-1.5 rounded-md text-[10px] font-medium leading-none">Tax</div>
<div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden shrink-0">
<img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/100?img=11"/>
</div>
</div>

<div className="absolute bottom-6 left-6 flex items-center gap-2 transform group-hover:-translate-x-1 transition-transform duration-500 delay-150">
<div className="bg-white border border-slate-200 shadow-sm px-2 py-1.5 rounded-md text-[10px] font-medium text-slate-700 leading-none">Legal</div>
<div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden shrink-0">
<img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/100?img=12"/>
</div>
</div>
</div>
<div className="px-4 pb-4">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Exklusives Netzwerk</h3>
<p className="text-sm text-slate-500 leading-relaxed">Profitiere vom direkten Zugang zu erstklassigen Experten und einem Umfeld, das denselben Weg geht wie du.</p>
</div>
</div>

<div className="card-hover group transition-all duration-500 flex flex-col bg-white border-slate-200/60 border rounded-[2rem] pt-2 pr-2 pb-2 pl-2 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
<div className="h-48 rounded-[1.5rem] bg-slate-50/50 border border-slate-100 mb-4 relative overflow-hidden flex flex-col group-hover:border-[#002051]/20 transition-colors duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">

<div className="absolute inset-0 pattern-grid opacity-[0.15]" style={{maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'}}></div>

<div className="p-4 flex justify-between items-center z-20 w-full relative">
<div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-wider text-[#002051] uppercase bg-white/40 px-3 py-1.5 rounded-full backdrop-blur-xl border border-white/80 shadow-[0_4px_12px_rgba(0,32,81,0.08)]">
<svg fill="none" height="12" stroke="#c62929" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
</svg>
                Der Gipfel
            </div>
</div>

<div className="absolute inset-0 flex items-end justify-center z-10 pt-12">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 200 100">
<defs>
<lineargradient id="peak-bg-grad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#002051" stop-opacity="0.25"></stop>
<stop offset="100%" stop-color="#002051" stop-opacity="0.0"></stop>
</lineargradient>
<lineargradient id="peak-fg-grad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#c62929" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#c62929" stop-opacity="0.0"></stop>
</lineargradient>
<lineargradient id="peak-line-grad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#002051"></stop>
<stop offset="50%" stop-color="#c62929"></stop>
<stop offset="100%" stop-color="#ef4444"></stop>
</lineargradient>
</defs>

<path className="transform group-hover:scale-[1.03] transition-transform duration-1000 origin-bottom" d="M -20 100 C 20 80 60 45 100 45 C 130 45 160 100 220 100 L 220 100 L -20 100 Z" fill="url(#peak-bg-grad)"></path>
<path d="M -20 100 C 20 80 60 45 100 45 C 130 45 160 100 220 100" fill="none" stroke="#002051" stroke-opacity="0.2" strokeWidth="1.5"></path>

<path className="transform group-hover:scale-[1.06] transition-transform duration-700 origin-bottom delay-75" d="M 10 100 C 60 95 90 20 150 20 C 180 20 200 100 240 100 L 240 100 L 10 100 Z" fill="url(#peak-fg-grad)"></path>
<path className="chart-line-draw" d="M 10 100 C 60 95 90 20 150 20 C 180 20 200 100 240 100" fill="none" stroke="url(#peak-line-grad)" strokeLinecap="round" strokeWidth="2.5" style={{filter: 'drop-shadow(0 4px 6px rgba(198,41,41,0.25))'}}></path>

<g className="opacity-0 group-hover:opacity-100 transition-all duration-700 delay-500 transform translate-y-2 group-hover:translate-y-0">
<circle cx="150" cy="20" fill="#ffffff" r="4" stroke="#c62929" strokeWidth="2.5" style={{filter: 'drop-shadow(0 0 8px rgba(198,41,41,0.7))'}}></circle>
</g>
</svg>
</div>

<div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-slate-50/90 to-transparent z-10 pointer-events-none"></div>
</div>
<div className="px-4 pb-4">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Finanzielle Freiheit</h3>
<p className="text-sm text-slate-500 leading-relaxed">Erklimme den Gipfel und erlange die ultimative Sicherheit, dein Leben kompromisslos nach deinen eigenen Vorstellungen zu gestalten.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 relative z-10 scroll-trigger">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4 block">Features</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6 text-balance">
                Alles, was du <span className="text-[#c62929]">brauchst.</span>
</h2>
<p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Professionelle Werkzeuge und tiefgreifendes Wissen für deinen erfolgreichen Vermögensaufbau.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-6 gap-6">

<div className="col-span-1 sm:col-span-6 lg:col-span-2 overflow-hidden flex flex-col group card-hover transition-all duration-500 bg-white border-slate-200/60 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
<div className="relative m-auto h-full flex flex-col items-center justify-center">
<div className="relative flex h-24 w-56 items-center justify-center">
<svg className="absolute top-0 right-0 bottom-0 left-0 w-[224px] h-[96px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{width: '224px', height: '96px', color: 'rgb(241, 245, 249)'}} viewbox="0 0 254 104" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z" fill="currentColor"></path>
</svg>
<span className="z-10 block animate-pulse group-hover:scale-110 transition-transform duration-500 text-5xl font-semibold text-[#c62929] tracking-tight font-montserrat w-fit relative">-50%</span>
</div>
<h3 className="mt-6 text-center text-xl font-semibold tracking-tight text-[#002051]">Anpassbar</h3>
<p className="text-sm text-slate-500 leading-relaxed text-center mt-2">Jede Situation ist einzigartig. Wir erarbeiten Strategien, die exakt zu deinen Zielen passen.</p>
</div>
</div>

<div className="col-span-1 sm:col-span-3 lg:col-span-2 bg-white rounded-[2rem] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-200/60 relative overflow-hidden flex flex-col group card-hover transition-all duration-500">
<div className="relative mx-auto flex aspect-square w-32 rounded-full border border-slate-200 before:absolute before:-inset-2 before:rounded-full before:border before:border-slate-100">
<svg className="m-auto h-fit w-24" fill="none" viewbox="0 0 212 143" xmlns="http://www.w3.org/2000/svg">
<path className="text-slate-200" d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542ZM126.188 142.656C113.91 139.587 103.875 133.476 96.0834 124.325C88.2917 115.173 84.3959 103.988 84.3959 90.7708C84.3959 84.8681 86.5209 79.9097 90.7709 75.8958C95.0209 71.8819 100.156 69.875 106.177 69.875C112.198 69.875 117.333 71.8819 121.583 75.8958C125.833 79.9097 127.958 84.8681 127.958 90.7708C127.958 94.6667 129.434 97.9439 132.385 100.602C135.337 103.261 138.819 104.588 142.833 104.583C146.847 104.583 150.271 103.256 153.104 100.602C155.938 97.9486 157.354 94.6714 157.354 90.7708C157.354 77.0764 152.337 65.566 142.302 56.2396C132.267 46.9132 120.285 42.25 106.354 42.25C92.4237 42.25 80.441 46.9132 70.4063 56.2396C60.3716 65.566 55.3542 77.0174 55.3542 90.5937C55.3542 93.4271 55.621 96.9687 56.1546 101.219C56.6882 105.469 57.9562 110.427 59.9584 116.094C60.3125 117.156 60.2842 118.101 59.8734 118.927C59.4625 119.753 58.7825 120.344 57.8334 120.698C56.8889 121.052 55.9752 121.024 55.0921 120.613C54.2091 120.202 53.5881 119.522 53.2292 118.573C51.4584 113.969 50.1905 109.395 49.4255 104.853C48.6605 100.31 48.2756 95.6158 48.2709 90.7708C48.2709 75.0694 53.9682 61.9062 65.363 51.2812C76.7577 40.6562 90.3624 35.3437 106.177 35.3437C122.115 35.3437 135.809 40.6562 147.26 51.2812C158.712 61.9062 164.438 75.0694 164.438 90.7708C164.438 96.6736 162.343 101.601 158.155 105.554C153.966 109.506 148.859 111.485 142.833 111.49C136.813 111.49 131.649 109.513 127.342 105.561C123.035 101.608 120.88 96.6783 120.875 90.7708C120.875 86.875 119.43 83.5978 116.54 80.9392C113.65 78.2805 110.196 76.9536 106.177 76.9583C102.163 76.9583 98.7089 78.2876 95.8142 80.9462C92.9195 83.6049 91.4745 86.8797 91.4792 90.7708C91.4792 102.222 94.8745 111.785 101.665 119.458C108.456 127.132 117.22 132.503 127.958 135.573C129.021 135.927 129.729 136.517 130.083 137.344C130.438 138.17 130.497 139.056 130.26 140C130.024 140.826 129.552 141.535 128.844 142.125C128.135 142.715 127.25 142.892 126.188 142.656ZM67.0417 18.3437C66.0973 18.934 65.1528 19.0828 64.2084 18.79C63.2639 18.4972 62.5556 17.8762 62.0834 16.9271C61.6112 15.9826 61.4931 15.1279 61.7292 14.3629C61.9653 13.5979 62.5556 12.9179 63.5 12.3229C70.1112 8.78125 77.0174 6 84.3959 6C91.7743 6 98.6806 8.78125 105.292 12.3229C106.236 12.9179 106.826 13.5979 107.062 14.3629C107.299 15.1279 107.181 15.9826 106.708 16.9271C106.236 17.8762 105.528 18.4972 104.583 18.79C103.639 19.0828 102.694 18.934 101.75 18.3437C95.1389 14.8021 88.2326 12.0208 80.8542 12.0208C73.4757 12.0208 66.5694 14.8021 59.9583 18.3437C59.0139 18.934 58.0694 19.0828 57.125 18.79C56.1806 18.4972 55.4722 17.8762 55 16.9271C54.5278 15.9826 54.4097 15.1279 54.6458 14.3629C54.8819 13.5979 55.4722 12.9179 56.4167 12.3229C63.0278 8.78125 69.934 6 77.3125 6Z" fill="currentColor"></path>
</svg>
<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05)] text-[#002051]">
<iconify-icon className="text-2xl" icon="solar:infinity-bold"></iconify-icon>
</span>
</div>
<div className="relative z-10">
<h3 className="mt-6 text-center text-xl font-semibold tracking-tight text-[#002051]">Ganzheitlich</h3>
<p className="text-sm text-slate-500 leading-relaxed text-center mt-2">Vom ersten Cashflow bis zum komplexen Firmenkonstrukt – alle Strategien greifen nahtlos ineinander.</p>
</div>
</div>

<div className="col-span-1 sm:col-span-3 lg:col-span-2 bg-white rounded-[2rem] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-200/60 relative overflow-hidden flex flex-col group card-hover transition-all duration-500">
<div className="relative m-auto h-32 w-full flex items-center justify-center">
<div className="flex -space-x-4">
<img alt="Member" className="w-14 h-14 rounded-full border-4 border-white shadow-md z-30 transform group-hover:-translate-y-2 transition-transform duration-500" loading="lazy" src="https://i.pravatar.cc/100?img=15"/>
<img alt="Member" className="w-14 h-14 rounded-full border-4 border-white shadow-md z-20 transform group-hover:-translate-y-2 transition-transform duration-500 delay-75" loading="lazy" src="https://i.pravatar.cc/100?img=32"/>
<img alt="Member" className="w-14 h-14 rounded-full border-4 border-white shadow-md z-10 transform group-hover:-translate-y-2 transition-transform duration-500 delay-150" loading="lazy" src="https://i.pravatar.cc/100?img=68"/>
<div className="w-14 h-14 rounded-full border-4 border-white shadow-md z-0 bg-slate-100 text-[#002051] flex items-center justify-center text-xs font-bold transform group-hover:-translate-y-2 transition-transform duration-500 delay-200">
                            +10k
                        </div>
</div>
</div>
<div className="relative z-10">
<h3 className="mt-6 text-center text-xl font-semibold tracking-tight text-[#002051]">Starkes Netzwerk</h3>
<p className="text-sm text-slate-500 leading-relaxed text-center mt-2">Du bist der Durchschnitt deines Umfelds. Tausche dich mit tausenden Gleichgesinnten und Experten aus.</p>
</div>
</div>

<div className="col-span-1 sm:col-span-6 lg:col-span-3 bg-[#002051] text-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-[#001536] relative overflow-hidden flex flex-col group card-hover transition-all duration-500 min-h-[320px]">
<div className="absolute inset-0 pattern-grid opacity-20"></div>
<div className="absolute -right-10 -top-10 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20 group-hover:scale-150 transition-transform duration-1000 pointer-events-none"></div>
<div className="relative z-10 flex-grow flex items-center justify-center mb-8">
<div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.1)]">
<iconify-icon className="text-3xl text-white ml-2" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="relative z-10 mt-auto">
<h3 className="text-2xl font-semibold tracking-tight mb-3">On-Demand Masterclasses</h3>
<p className="text-blue-100/80 leading-relaxed text-sm md:text-base max-w-md">Greife auf hunderte Stunden kompaktes, praxiserprobtes Wissen zu. Lerne in deinem eigenen Tempo – von den Grundlagen bis zu Experten-Strategien.</p>
</div>
</div>

<div className="col-span-1 sm:col-span-6 lg:col-span-3 bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-200/60 relative overflow-hidden flex flex-col group card-hover transition-all duration-500 min-h-[320px]">
<div className="relative z-10 flex-grow flex items-center justify-center mb-8 mt-4">

<div className="w-full max-w-[280px] bg-slate-50 rounded-xl border border-slate-200 p-5 shadow-sm transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-center mb-6">
<div className="w-20 h-2 bg-slate-200 rounded-full"></div>
<div className="px-2 py-1 bg-green-50 rounded-md text-[10px] text-green-600 font-bold tracking-wide">+14,2% ROI</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3"><div className="w-5 h-5 rounded-md bg-[#002051]/10 flex items-center justify-center"><iconify-icon className="text-[10px] text-[#002051]" icon="solar:home-2-linear"></iconify-icon></div><div className="w-16 h-1.5 bg-slate-200 rounded-full"></div></div>
<div className="w-12 h-1.5 bg-slate-300 rounded-full"></div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3"><div className="w-5 h-5 rounded-md bg-[#c62929]/10 flex items-center justify-center"><iconify-icon className="text-[10px] text-[#c62929]" icon="solar:bill-linear"></iconify-icon></div><div className="w-12 h-1.5 bg-slate-200 rounded-full"></div></div>
<div className="w-14 h-1.5 bg-slate-300 rounded-full"></div>
</div>
</div>
<div className="mt-6 pt-5 border-t border-slate-200/80 flex justify-between items-end">
<div className="w-24 h-6 bg-gradient-to-r from-[#002051] to-blue-800 rounded-md"></div>
<div className="w-10 h-6 bg-slate-200 rounded-md"></div>
</div>
</div>
</div>
<div className="relative z-10 mt-auto">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Profi-Tools &amp; Kalkulatoren</h3>
<p className="text-slate-500 leading-relaxed text-sm md:text-base max-w-md">Schluss mit dem Rätselraten. Berechne Immobilienrenditen, Steuervorteile und dein Portfoliowachstum auf den Cent genau mit unseren Tools.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 scroll-trigger relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4 block">Der Ablauf</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6 text-balance">
                In 3 Schritten zum <span className="text-[#c62929]">Vermögensplan.</span>
</h2>
<p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Der Weg in die finanzielle Unabhängigkeit muss nicht kompliziert sein, wenn man die richtige Abkürzung kennt.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-6 relative mt-12">

<div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:border-[#002051]/30 transition-all duration-500 relative">
<span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#002051] text-white flex items-center justify-center text-sm font-bold shadow-md">1</span>
<iconify-icon className="text-3xl text-[#002051]" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Kostenlose Potenzialanalyse</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">Wir prüfen deine Ausgangssituation und finden heraus, an welchen Stellschrauben du ansetzen musst.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:border-[#002051]/30 transition-all duration-500 relative">
<span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#002051] text-white flex items-center justify-center text-sm font-bold shadow-md">2</span>
<iconify-icon className="text-3xl text-[#002051]" icon="solar:map-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Persönliche Roadmap</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">Gemeinsam erstellen wir deinen glasklaren Fahrplan – exakt zugeschnitten auf deine Ziele und Ressourcen.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:border-[#c62929]/40 transition-all duration-500 relative">
<span className="absolute -top-3 -right-3 w--center text-sm font-bold shadow-md">3</span>
<iconify-icon className="text-3xl text-[#c62929]" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Umsetzung &amp; Skalierung</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">Wissen wird zu Ergebnissen. Mit unseren Experten an deiner Seite setzt du den Plan Schritt für Schritt um.</p>
</div>
</div>
<div className="mt-16 text-center flex justify-center">
<a className="inline-flex items-center justify-center gap-2 bg-[#c62929] text-white px-8 py-4 rounded-full hover:bg-[#a52222] transition-all duration-300 shadow-[0_8px_20px_rgba(198,41,41,0.2)] hover:shadow-[0_12px_24px_rgba(198,41,41,0.3)] hover:-translate-y-1 w-full sm:w-auto text-base font-semibold" href="#">
<span className="">Jetzt kostenloses Gespräch sichern</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
<div className="lg:col-span-2">
<a className="inline-block font-semibold text-3xl tracking-tight text-[#002051] mb-4" href="#">
                IPA
            </a>
<p className="text-sm text-slate-500 leading-relaxed max-w-sm mb-8">
                Die Investmentpunk Academy ist die führende Plattform für finanzielle Bildung, Steueroptimierung und realen Vermögensaufbau im deutschsprachigen Raum.
            </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#002051] hover:text-white hover:border-[#002051] transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="mdi:instagram"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#002051] hover:text-white hover:border-[#002051] transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="mdi:youtube"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#002051] hover:text-white hover:border-[#002051] transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="mdi:linkedin"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#002051] hover:text-white hover:border-[#002051] transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="mdi:facebook"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-5 tracking-tight">Plattform</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-[#c62929] transition-colors" href="#">Academy Login</a></li>
<li><a className="hover:text-[#c62929] transition-colors" href="#">Ausbildungen</a></li>
<li><a className="hover:text-[#c62929] transition-colors" href="#">Live-Seminare</a></li>
<li><a className="hover:text-[#c62929] transition-colors" href="#">Premium Tools</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-5 tracking-tight">Unternehmen</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-[#c62929] transition-colors" href="#">Über Gerald Hörhan</a></li>
<li><a className="hover:text-[#c62929] transition-colors" href="#">Das Team</a></li>
<li><a className="hover:text-[#c62929] transition-colors" href="#">Karriere</a></li>
<li><a className="hover:text-[#c62929] transition-colors" href="#">Kontakt &amp; Support</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-5 tracking-tight">Rechtliches</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-[#c62929] transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-[#c62929] transition-colors" href="#">Datenschutzerklärung</a></li>
<li><a className="hover:text-[#c62929] transition-colors" href="#">AGB</a></li>
<li><a className="hover:text-[#c62929] transition-colors" href="#">Widerrufsbelehrung</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
<p>© 2024 Investmentpunk Academy. Alle Rechte vorbehalten.</p>
<p className="flex items-center gap-1">
            Made with <iconify-icon className="text-red-400" icon="solar:heart-bold"></iconify-icon> in Vienna
        </p>
</div>
</footer>



    </>
  );
}
