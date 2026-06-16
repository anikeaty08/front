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



  // Mobile menu
  const mb = document.getElementById('menuBtn'), mm = document.getElementById('mobileMenu');
  mb.addEventListener('click', () => mm.classList.toggle('hidden'));
  document.querySelectorAll('.mobclose').forEach(a => a.addEventListener('click', () => mm.classList.add('hidden')));

  // Before/After slider
  const slider = document.getElementById('ba-slider');
  const after = document.getElementById('ba-after');
  const handle = document.getElementById('ba-handle');
  let dragging = false;
  function setPos(x){
    const rect = slider.getBoundingClientRect();
    let pct = ((x - rect.left) / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    after.style.width = pct + '%';
    handle.style.left = pct + '%';
  }
  slider.addEventListener('mousedown', e => { dragging = true; setPos(e.clientX); });
  window.addEventListener('mousemove', e => { if(dragging) setPos(e.clientX); });
  window.addEventListener('mouseup', () => dragging = false);
  slider.addEventListener('touchstart', e => { dragging = true; setPos(e.touches[0].clientX); });
  slider.addEventListener('touchmove', e => { if(dragging) setPos(e.touches[0].clientX); });
  window.addEventListener('touchend', () => dragging = false);

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/5">
<nav className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
<a className="text-lg font-bold tracking-tighter" href="#inicio" style={{fontFamily: '\'Sora\',sans-serif'}}>NMFT<span className="text-pink-500">.</span></a>
<ul className="hidden lg:flex items-center gap-8 text-sm text-white/70" style={{fontFamily: '\'Inter\',sans-serif'}}>
<li><a className="hover:text-white transition" href="#inicio">Inicio</a></li>
<li><a className="hover:text-white transition" href="#transformaciones">Transformaciones</a></li>
<li><a className="hover:text-white transition" href="#servicios">Servicios</a></li>
<li><a className="hover:text-white transition" href="#sobremi">Sobre mí</a></li>
<li><a className="hover:text-white transition" href="#testimonios">Testimonios</a></li>
<li><a className="hover:text-white transition" href="#contacto">Contacto</a></li>
</ul>
<a className="hidden lg:inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-500 transition text-sm font-medium px-4 py-2 rounded-full" href="#contacto">
<iconify-icon icon="solar:dialog-2-linear" width="18"></iconify-icon> WhatsApp
    </a>
<button className="lg:hidden text-white/80" id="menuBtn"><iconify-icon icon="solar:hamburger-menu-linear" width="26"></iconify-icon></button>
</nav>
<div className="hidden lg:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl px-5 py-4" id="mobileMenu">
<div className="flex flex-col gap-4 text-sm text-white/80">
<a className="mobclose" href="#inicio">Inicio</a>
<a className="mobclose" href="#transformaciones">Transformaciones</a>
<a className="mobclose" href="#servicios">Servicios</a>
<a className="mobclose" href="#sobremi">Sobre mí</a>
<a className="mobclose" href="#testimonios">Testimonios</a>
<a className="mobclose" href="#contacto">Contacto</a>
<a className="mobclose inline-flex items-center justify-center gap-2 bg-pink-600 text-white px-4 py-2.5 rounded-full font-medium mt-1" href="#contacto">
<iconify-icon icon="solar:dialog-2-linear" width="18"></iconify-icon> WhatsApp
      </a>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-end overflow-hidden" id="inicio">
<div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&amp', transform: 'scale(1.05)'}}></div>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)'}}></div>
<div className="absolute inset-0" style={{background: 'radial-gradient(circle at 75% 25%, rgba(236,72,153,0.35), transparent 55%)'}}></div>
<div className="relative z-10 max-w-7xl mx-auto px-5 pb-20 pt-32 w-full">
<span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-pink-400 mb-5 border border-pink-500/30 rounded-full px-3 py-1.5 bg-pink-500/10">
<iconify-icon icon="solar:dumbbell-large-minimalistic-linear" width="14"></iconify-icon> NMFT by Noelia
    </span>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl" style={{fontFamily: '\'Sora\',sans-serif'}}>
      No solo parecer fuerte<br/><span className="text-pink-500">sino serlo</span>
</h1>
<p className="mt-6 text-base md:text-lg text-white/70 max-w-xl font-light leading-relaxed">
      Entrenamiento personalizado para mujeres que quieren transformar su cuerpo, crear hábitos reales y dejar de empezar de cero cada mes.
    </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-500 transition px-6 py-3.5 rounded-full font-medium text-sm" href="#servicios">
        Empieza tu cambio <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/15 transition px-6 py-3.5 rounded-full font-medium text-sm" href="#contacto">
<iconify-icon icon="solar:dialog-2-linear" width="18"></iconify-icon> Escríbeme por WhatsApp
      </a>
</div>
<div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/60">
<span className="inline-flex items-center gap-1.5"><iconify-icon className="text-pink-400" icon="solar:users-group-rounded-linear" width="16"></iconify-icon> +10 mujeres transformadas</span>
<span className="inline-flex items-center gap-1.5"><iconify-icon className="text-pink-400" icon="solar:checklist-minimalistic-linear" width="16"></iconify-icon> Entrenamiento + hábitos + seguimiento</span>
<span className="inline-flex items-center gap-1.5"><iconify-icon className="text-pink-400" icon="solar:heart-pulse-linear" width="16"></iconify-icon> Sin dietas extremas</span>
</div>
</div>
</section>

<section className="bg-white text-black py-20 md:py-28">
<div className="max-w-5xl mx-auto px-5">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight max-w-2xl" style={{fontFamily: '\'Sora\',sans-serif'}}>
      Si te suena esto, no necesitas más motivación. <span className="text-pink-600">Necesitas un plan.</span>
</h2>
<div className="mt-12 grid sm:grid-cols-2 gap-4">
<div className="rounded-2xl border border-black/10 bg-neutral-50 p-6 flex gap-4 items-start hover:border-pink-300 transition">
<iconify-icon className="text-pink-600 shrink-0 mt-0.5" icon="solar:refresh-circle-linear" width="26"></iconify-icon>
<p className="text-sm text-neutral-700 leading-relaxed">Empiezas fuerte y abandonas a las dos semanas</p>
</div>
<div className="rounded-2xl border border-black/10 bg-neutral-50 p-6 flex gap-4 items-start hover:border-pink-300 transition">
<iconify-icon className="text-pink-600 shrink-0 mt-0.5" icon="solar:question-circle-linear" width="26"></iconify-icon>
<p className="text-sm text-neutral-700 leading-relaxed">No sabes qué entrenar ni cómo progresar</p>
</div>
<div className="rounded-2xl border border-black/10 bg-neutral-50 p-6 flex gap-4 items-start hover:border-pink-300 transition">
<iconify-icon className="text-pink-600 shrink-0 mt-0.5" icon="solar:plate-linear" width="26"></iconify-icon>
<p className="text-sm text-neutral-700 leading-relaxed">Comes "bien" pero no ves cambios</p>
</div>
<div className="rounded-2xl border border-black/10 bg-neutral-50 p-6 flex gap-4 items-start hover:border-pink-300 transition">
<iconify-icon className="text-pink-600 shrink-0 mt-0.5" icon="solar:eye-scan-linear" width="26"></iconify-icon>
<p className="text-sm text-neutral-700 leading-relaxed">Te comparas con otras personas</p>
</div>
<div className="rounded-2xl border border-black/10 bg-neutral-50 p-6 flex gap-4 items-start hover:border-pink-300 transition sm:col-span-2">
<iconify-icon className="text-pink-600 shrink-0 mt-0.5" icon="solar:emoji-funny-circle-linear" width="26"></iconify-icon>
<p className="text-sm text-neutral-700 leading-relaxed">Quieres perder grasa sin vivir obsesionada</p>
</div>
</div>
<p className="mt-10 text-lg md:text-xl font-medium leading-snug max-w-2xl" style={{fontFamily: '\'Sora\',sans-serif'}}>
      NMFT está pensado para que <span className="text-pink-600">entrenes con estructura</span>, comas mejor y veas resultados reales.
    </p>
</div>
</section>

<section className="bg-black py-20 md:py-28 relative overflow-hidden" id="transformaciones">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full" style={{background: 'radial-gradient(circle, rgba(236,72,153,0.18), transparent 70%)'}}></div>
<div className="relative max-w-5xl mx-auto px-5">
<div className="text-center max-w-2xl mx-auto">
<span className="text-xs uppercase tracking-widest text-pink-400">Resultados reales</span>
<h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight" style={{fontFamily: '\'Sora\',sans-serif'}}>Transformaciones reales, no promesas vacías.</h2>
</div>

<div className="mt-12 max-w-lg mx-auto">
<div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden select-none cursor-ew-resize border border-white/10" id="ba-slider">
<img className="absolute inset-0 w-full h-full object-cover" draggable="false" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 right-4 text-xs font-medium bg-black/60 backdrop-blur px-3 py-1 rounded-full">DESPUÉS</span>
<div className="absolute inset-0 overflow-hidden" id="ba-after" style={{width: '50%'}}>
<img className="absolute inset-0 w-full h-full object-cover" draggable="false" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=800&amp;auto=format&amp;fit=crop" style={{width: '512px', maxWidth: 'none'}}/>
<span className="absolute top-4 left-4 text-xs font-medium bg-pink-600 px-3 py-1 rounded-full">ANTES</span>
</div>
<div className="absolute top-0 bottom-0 w-0.5 bg-pink-500" id="ba-handle" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-pink-600 border-4 border-white flex items-center justify-center shadow-lg">
<iconify-icon icon="solar:arrows-horizontal-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<p className="mt-4 text-center text-sm text-white/60">Marta, 14 semanas · −9 kg de grasa, +fuerza</p>
</div>
<p className="mt-12 text-center text-base md:text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
      Cada cambio empieza con una decisión, pero se mantiene con <span className="text-pink-400 font-medium">estructura, seguimiento y hábitos.</span>
</p>
<div className="mt-8 flex justify-center">
<a className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-500 transition px-6 py-3.5 rounded-full font-medium text-sm" href="#contacto">
        Quiero mi transformación <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-white text-black py-20 md:py-28">
<div className="max-w-6xl mx-auto px-5">
<div className="max-w-2xl">
<span className="text-xs uppercase tracking-widest text-pink-600">Cómo trabajo</span>
<h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight" style={{fontFamily: '\'Sora\',sans-serif'}}>El método NMFT</h2>
</div>
<div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="rounded-2xl bg-neutral-50 border border-black/5 p-7 hover:shadow-xl hover:shadow-pink-100 transition">
<div className="w-11 h-11 rounded-xl bg-pink-600 text-white flex items-center justify-center text-sm font-bold mb-5" style={{fontFamily: '\'Sora\',sans-serif'}}>01</div>
<h3 className="font-semibold text-lg tracking-tight" style={{fontFamily: '\'Sora\',sans-serif'}}>Evaluamos tu punto de partida</h3>
<p className="mt-2 text-sm text-neutral-600 leading-relaxed">Objetivo, nivel, hábitos, horarios y dificultades reales.</p>
</div>
<div className="rounded-2xl bg-neutral-50 border border-black/5 p-7 hover:shadow-xl hover:shadow-pink-100 transition">
<div className="w-11 h-11 rounded-xl bg-pink-600 text-white flex items-center justify-center text-sm font-bold mb-5" style={{fontFamily: '\'Sora\',sans-serif'}}>02</div>
<h3 className="font-semibold text-lg tracking-tight" style={{fontFamily: '\'Sora\',sans-serif'}}>Creamos tu plan</h3>
<p className="mt-2 text-sm text-neutral-600 leading-relaxed">Entrenamiento adaptado, guía de alimentación y estrategia clara.</p>
</div>
<div className="rounded-2xl bg-neutral-50 border border-black/5 p-7 hover:shadow-xl hover:shadow-pink-100 transition">
<div className="w-11 h-11 rounded-xl bg-pink-600 text-white flex items-center justify-center text-sm font-bold mb-5" style={{fontFamily: '\'Sora\',sans-serif'}}>03</div>
<h3 className="font-semibold text-lg tracking-tight" style={{fontFamily: '\'Sora\',sans-serif'}}>Te acompaño</h3>
<p className="mt-2 text-sm text-neutral-600 leading-relaxed">Seguimiento, ajustes y apoyo para que no vuelvas a abandonar.</p>
</div>
<div className="rounded-2xl bg-neutral-50 border border-black/5 p-7 hover:shadow-xl hover:shadow-pink-100 transition">
<div className="w-11 h-11 rounded-xl bg-pink-600 text-white flex items-center justify-center text-sm font-bold mb-5" style={{fontFamily: '\'Sora\',sans-serif'}}>04</div>
<h3 className="font-semibold text-lg tracking-tight" style={{fontFamily: '\'Sora\',sans-serif'}}>Construyes resultados</h3>
<p className="mt-2 text-sm text-neutral-600 leading-relaxed">Pierdes grasa, mejoras tu forma física y ganas confianza.</p>
</div>
</div>
</div>
</section>

<section className="bg-black py-20 md:py-28 relative overflow-hidden" id="servicios">
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full" style={{background: 'radial-gradient(circle, rgba(236,72,153,0.15), transparent 70%)'}}></div>
<div className="relative max-w-6xl mx-auto px-5">
<div className="max-w-2xl">
<span className="text-xs uppercase tracking-widest text-pink-400">Servicios</span>
<h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight" style={{fontFamily: '\'Sora\',sans-serif'}}>Programas para transformar tu cuerpo y tu rutina</h2>
</div>
<div className="mt-12 grid md:grid-cols-3 gap-5">
<div className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-pink-500/40 transition group">
<div className="h-44 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp'}}></div>
<div className="p-7">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Sora\',sans-serif'}}>Entrenamiento presencial</h3>
<p className="mt-2 text-sm text-white/60 leading-relaxed">Coaching cara a cara y corrección de técnica para mujeres que quieren resultados con acompañamiento real.</p>
<a className="mt-5 inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-500 transition px-5 py-2.5 rounded-full text-sm font-medium" href="#contacto">Ver servicio <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon></a>
</div>
</div>
<div className="rounded-3xl border border-pink-500/40 bg-pink-500/[0.06] overflow-hidden hover:border-pink-500/60 transition">
<div className="h-44 bg-cover bg-center relative" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp'}}>
<span className="absolute top-3 right-3 text-xs bg-pink-600 px-3 py-1 rounded-full">Popular</span>
</div>
<div className="p-7">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Sora\',sans-serif'}}>Coaching online</h3>
<p className="mt-2 text-sm text-white/60 leading-relaxed">Estructura, accountability y progreso desde cualquier lugar. Para mujeres que quieren autonomía sin perder guía.</p>
<a className="mt-5 inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-500 transition px-5 py-2.5 rounded-full text-sm font-medium" href="#contacto">Ver servicio <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon></a>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-pink-500/40 transition">
<div className="h-44 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&amp'}}></div>
<div className="p-7">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Sora\',sans-serif'}}>Plan personalizado</h3>
<p className="mt-2 text-sm text-white/60 leading-relaxed">Entrenamiento, hábitos, guía de alimentación y seguimiento. Todo adaptado a tu vida real.</p>
<a className="mt-5 inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-500 transition px-5 py-2.5 rounded-full text-sm font-medium" href="#contacto">Ver servicio <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon></a>
</div>
</div>
</div>

<div className="mt-16 max-w-2xl mx-auto">
<h3 className="text-center text-xl font-semibold tracking-tight mb-6" style={{fontFamily: '\'Sora\',sans-serif'}}>Preguntas frecuentes</h3>
<div className="space-y-3">
<details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5">
<summary className="flex justify-between items-center cursor-pointer text-sm font-medium list-none">¿Necesito experiencia previa? <iconify-icon className="group-open:rotate-180 transition text-pink-400" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon></summary>
<p className="mt-3 text-sm text-white/60 leading-relaxed">No. Adapto cada plan a tu nivel, desde principiante absoluta hasta nivel avanzado.</p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5">
<summary className="flex justify-between items-center cursor-pointer text-sm font-medium list-none">¿Tendré que hacer dieta estricta? <iconify-icon className="group-open:rotate-180 transition text-pink-400" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon></summary>
<p className="mt-3 text-sm text-white/60 leading-relaxed">No. Trabajamos con hábitos sostenibles, no con dietas extremas ni restricciones imposibles.</p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5">
<summary className="flex justify-between items-center cursor-pointer text-sm font-medium list-none">¿Cuándo veré resultados? <iconify-icon className="group-open:rotate-180 transition text-pink-400" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon></summary>
<p className="mt-3 text-sm text-white/60 leading-relaxed">Con constancia, los primeros cambios suelen notarse en pocas semanas. Lo importante es mantenerlos.</p>
</details>
</div>
</div>
</div>
</section>

<section className="bg-white text-black py-20 md:py-28" id="sobremi">
<div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
<div className="relative">
<div className="rounded-3xl overflow-hidden aspect-[4/5]">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f180582f-303a-4c6c-8acb-6dbe830cc3df_1600w.png"/>
</div>
<div className="absolute -bottom-4 -right-4 bg-pink-600 text-white rounded-2xl px-5 py-4 shadow-xl">
<p className="text-2xl font-bold" style={{fontFamily: '\'Sora\',sans-serif'}}>+10</p>
<p className="text-xs">mujeres transformadas</p>
</div>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-pink-600">Sobre mí</span>
<h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight leading-tight" style={{fontFamily: '\'Sora\',sans-serif'}}>Soy Noelia, y sé lo que es empezar desde cero.</h2>
<p className="mt-6 text-base text-neutral-600 leading-relaxed">
        NMFT nace para ayudar a mujeres que quieren cambiar su cuerpo sin caer en extremos. Mi objetivo no es que entrenes perfecto una semana, sino que construyas una versión de ti que pueda sostenerse en el tiempo.
      </p>
<div className="mt-7 flex flex-wrap gap-3 text-xs">
<span className="px-3 py-1.5 rounded-full bg-pink-50 text-pink-700 border border-pink-100">Disciplina real</span>
<span className="px-3 py-1.5 rounded-full bg-pink-50 text-pink-700 border border-pink-100">Sin obsesión</span>
<span className="px-3 py-1.5 rounded-full bg-pink-50 text-pink-700 border border-pink-100">Resultados sostenibles</span>
</div>
<a className="mt-8 inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-500 transition text-white px-6 py-3.5 rounded-full font-medium text-sm" href="#contacto">
        Conoce mi historia <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-black py-20 md:py-28" id="testimonios">
<div className="max-w-6xl mx-auto px-5">
<div className="text-center max-w-2xl mx-auto">
<span className="text-xs uppercase tracking-widest text-pink-400">Testimonios</span>
<h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight" style={{fontFamily: '\'Sora\',sans-serif'}}>Lo que dicen mis chicas</h2>
</div>
<div className="mt-12 grid md:grid-cols-3 gap-5">
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
<div className="flex gap-0.5 text-pink-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-white/80 leading-relaxed">"Por fin entiendo qué hago en el gym y por qué. Dejé de empezar de cero cada lunes."</p>
<div className="mt-5 flex items-center justify-between">
<div>
<p className="text-sm font-medium">Marta G.</p>
<p className="text-xs text-white/40">Coaching online</p>
</div>
<span className="text-xs text-pink-400 font-medium">−9 kg grasa</span>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
<div className="flex gap-0.5 text-pink-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-white/80 leading-relaxed">"Noelia me ayudó a comer mejor sin obsesionarme. Me siento más fuerte y más segura."</p>
<div className="mt-5 flex items-center justify-between">
<div>
<p className="text-sm font-medium">Laura P.</p>
<p className="text-xs text-white/40">Plan personalizado</p>
</div>
<span className="text-xs text-pink-400 font-medium">+fuerza</span>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
<div className="flex gap-0.5 text-pink-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-white/80 leading-relaxed">"Llevaba años sin constancia. Con el seguimiento ya no abandono. Es lo que necesitaba."</p>
<div className="mt-5 flex items-center justify-between">
<div>
<p className="text-sm font-medium">Cristina R.</p>
<p className="text-xs text-white/40">Presencial</p>
</div>
<span className="text-xs text-pink-400 font-medium">hábitos reales</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-black py-24 overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full" style={{background: 'radial-gradient(circle, rgba(236,72,153,0.25), transparent 65%)'}}></div>
<div className="relative max-w-3xl mx-auto px-5 text-center">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]" style={{fontFamily: '\'Sora\',sans-serif'}}>
      Tu cambio no empieza cuando tengas más tiempo.<br/><span className="text-pink-500">Empieza cuando tienes un plan.</span>
</h2>
<p className="mt-6 text-base text-white/60 font-light">Escríbeme y vemos qué necesitas para empezar.</p>
<div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
<a className="inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-500 transition px-6 py-3.5 rounded-full font-medium text-sm" href="#contacto">
<iconify-icon icon="solar:dialog-2-linear" width="18"></iconify-icon> Hablar por WhatsApp
      </a>
<a className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 transition px-6 py-3.5 rounded-full font-medium text-sm" href="#servicios">
        Ver servicios <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-white text-black py-20 md:py-28" id="contacto">
<div className="max-w-5xl mx-auto px-5 grid md:grid-cols-2 gap-12">
<div>
<span className="text-xs uppercase tracking-widest text-pink-600">Contacto</span>
<h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight" style={{fontFamily: '\'Sora\',sans-serif'}}>Cuéntame tu objetivo y te digo cómo puedo ayudarte.</h2>
<p className="mt-5 text-sm text-neutral-600 leading-relaxed">Respondo personalmente. Sin compromiso, sin presión. Solo el primer paso hacia tu cambio.</p>
<div className="mt-8 space-y-3">
<a className="flex items-center gap-3 p-4 rounded-2xl bg-pink-600 text-white hover:bg-pink-500 transition" href="#">
<iconify-icon icon="solar:dialog-2-linear" width="22"></iconify-icon>
<span className="text-sm font-medium">Escríbeme por WhatsApp</span>
</a>
<a className="flex items-center gap-3 p-4 rounded-2xl border border-black/10 hover:border-pink-300 transition" href="#">
<iconify-icon className="text-pink-600" icon="solar:gallery-linear" width="22"></iconify-icon>
<span className="text-sm font-medium">@nmft.noelia</span>
</a>
</div>
</div>
<form className="rounded-3xl border border-black/10 bg-neutral-50 p-7 space-y-4">
<div>
<label className="text-xs font-medium text-neutral-700">Nombre</label>
<input className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition" placeholder="Tu nombre" type="text"/>
</div>
<div>
<label className="text-xs font-medium text-neutral-700">Email</label>
<input className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition" placeholder="tu@email.com" type="email"/>
</div>
<div>
<label className="text-xs font-medium text-neutral-700">Tu objetivo</label>
<textarea className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition" placeholder="Cuéntame qué quieres conseguir..." rows="4"></textarea>
</div>
<button className="w-full bg-pink-600 hover:bg-pink-500 transition text-white py-3.5 rounded-full text-sm font-medium" type="submit">Enviar mensaje</button>
</form>
</div>
</section>

<footer className="bg-black border-t border-white/5 py-10">
<div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-lg font-bold tracking-tighter" style={{fontFamily: '\'Sora\',sans-serif'}}>NMFT<span className="text-pink-500">.</span></span>
<p className="text-xs text-white/40">© 2024 NMFT by Noelia · Entrenamiento para mujeres</p>
<div className="flex gap-4 text-white/50">
<a className="hover:text-pink-500 transition" href="#"><iconify-icon icon="solar:gallery-linear" width="20"></iconify-icon></a>
<a className="hover:text-pink-500 transition" href="#"><iconify-icon icon="solar:dialog-2-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

<a className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-500 transition text-white px-5 py-3.5 rounded-full shadow-2xl shadow-pink-600/40" href="#contacto">
<iconify-icon icon="solar:dialog-2-bold" width="22"></iconify-icon>
<span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
</a>


    </>
  );
}
