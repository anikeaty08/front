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
      
<main className="flex min-h-screen w-full p-2 transition-all duration-500 lg:h-screen lg:overflow-hidden lg:p-4">

<div className="relative hidden lg:flex flex-col items-center justify-end pb-32 px-12 rounded-3xl overflow-hidden shadow-2xl h-full w-[52%]">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover z-0" loop="" muted="" playsinline="" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_081238_406ed0e3-5d83-436e-a512-0bbff7ec5b95.mp4"></video>

<div className="z-10 w-full max-w-xs space-y-8 stagger-container">

<div className="flex items-center gap-2">
<iconify-icon className="text-white text-xl" icon="lucide:stethoscope" strokeWidth="1.5"></iconify-icon>
<span className="text-xl font-medium tracking-tight">meDIZ!</span>
</div>

<div className="space-y-3">
<h1 className="text-4xl font-normal tracking-tight whitespace-nowrap">
              Junte-se ao meDIZ!
            </h1>
<p className="text-white/60 text-sm leading-relaxed px-1">
              Siga estas 4 etapas rápidas para ativar seu espaço.
            </p>
</div>

<div className="space-y-3 pt-2">

<div className="flex items-center gap-4 p-4 rounded-2xl bg-white text-black border border-white transition-all duration-300 shadow-sm">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-xs font-medium">
                1
              </div>
<span className="text-sm font-medium">Dados básicos</span>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1A1A1A] text-white transition-all duration-300">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white/40 text-xs font-medium">
                2
              </div>
<span className="text-sm font-normal text-white/80">
                Informações pessoais
              </span>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1A1A1A] text-white transition-all duration-300">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white/40 text-xs font-medium">
                3
              </div>
<span className="text-sm font-normal text-white/80">
                Pretensão de uso
              </span>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1A1A1A] text-white transition-all duration-300">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white/40 text-xs font-medium">
                4
              </div>
<span className="text-sm font-normal text-white/80">Diagnóstico</span>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center py-12 lg:py-6 px-4 sm:px-12 lg:px-16 xl:px-24 overflow-y-auto lg:overflow-hidden relative">
<div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
<div className="relative group">
<button className="flex gap-2 hover:bg-white/5 transition-colors duration-200 text-sm font-medium text-white/90 bg-black h-10 border-white/10 border rounded-xl pr-3 pl-3 gap-x-2 gap-y-2 items-center" type="button">
<iconify-icon className="text-base" icon="lucide:globe" strokeWidth="1.5"></iconify-icon>
<span className="">PT-BR</span>
<iconify-icon className="text-sm opacity-60" icon="lucide:chevron-down" strokeWidth="1.5"></iconify-icon>
</button>
<div className="absolute right-0 mt-2 w-52 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 overflow-hidden transform origin-top-right group-hover:scale-100 group-focus-within:scale-100 scale-95">
<div className="py-1">
<a className="flex items-center px-4 py-2.5 text-sm text-white bg-white/10 transition-colors" href="#">
                  Português (Brasil)
                </a>
<a className="flex items-center px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors" href="#">
                  Português (Portugal)
                </a>
<a className="flex items-center px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors" href="#">
                  English
                </a>
<a className="flex items-center px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors" href="#">
                  Español
                </a>
</div>
</div>
</div>
</div>
<div className="w-full max-w-xl space-y-8 lg:space-y-6 sm:space-y-10 animate-fade-in">

<div className="space-y-2 text-center lg:text-left">
<h2 className="text-3xl font-normal tracking-tight">
              Criar Novo Perfil
            </h2>
<p className="text-white/40 text-sm">
              Insira seus dados básicos para começar a jornada.
            </p>
</div>

<div className="grid grid-cols-1 gap-4">
</div>


<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

<div className="space-y-2">
<label className="block text-sm font-medium text-white/90">
                  Nome
                </label>
<input className="w-full bg-[#1A1A1A] border-none rounded-xl h-11 px-4 text-white placeholder:text-white/20 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all text-sm" placeholder="João" type="text"/>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-white/90">
                  Sobrenome
                </label>
<input className="w-full bg-[#1A1A1A] border-none rounded-xl h-11 px-4 text-white placeholder:text-white/20 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all text-sm" placeholder="Silva" type="text"/>
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-white/90">
                E-mail
              </label>
<input className="w-full bg-[#1A1A1A] border-none rounded-xl h-11 px-4 text-white placeholder:text-white/20 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all text-sm" placeholder="joao@exemplo.com" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-white/90">
                WhatsApp
              </label>
<input className="w-full bg-[#1A1A1A] border-none rounded-xl h-11 px-4 text-white placeholder:text-white/20 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all text-sm" oninput="let v=this.value.replace(/\D/g,'');v=v.replace(/^(\d{2})(\d)/g,'($1) $2');v=v.replace(/(\d)(\d{4})$/,'$1-$2');this.value=v.substring(0,15);" placeholder="(11) 99999-9999" type="tel"/>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-white/90">
                Senha
              </label>
<div className="relative">
<input className="w-full bg-[#1A1A1A] border-none rounded-xl h-11 pl-4 pr-11 text-white placeholder:text-white/20 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all text-sm" placeholder="••••••••" type="password"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors flex items-center justify-center h-full" type="button">
<iconify-icon className="text-lg" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<p className="text-xs text-white/40 pt-1">
                Requer pelo menos 8 caracteres.
              </p>
</div>

<div className="pt-2">
<button className="w-full h-14 bg-white text-black font-medium rounded-xl hover:bg-white/90 active:scale-[0.98] transition-all duration-200 shadow-sm text-base" type="submit">
                Criar Conta
              </button>
</div>
</form>

<div className="text-center pt-4">
<p className="text-sm text-white/60">
              Já é membro da equipe?
              <a className="text-white hover:underline underline-offset-4 transition-all" href="#">
                Entrar
              </a>
</p>
</div>
</div>
</div>
</main>

    </>
  );
}
