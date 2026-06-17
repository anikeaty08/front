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
      

<header className="animate-fade-in pt-40" style={{opacity: '0', animationDelay: '0.1s'}}>
<img alt="Paul Guittonneau" className="md:w-40 md:h-40 md:mb-8 transition-all duration-500 w-32 h-32 object-cover rounded-full mb-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a9685b3-b4f4-4123-97fc-37d6eb41dab3_800w.png"/>
<h1 className="md:text-2xl leading-snug text-xl font-medium tracking-tight">Paul Guittonneau <br className=""/> J'opère la transition IA des PME, de la stratégie à l'implémentation.</h1>
<p className="mt-4 text-sm text-[#0A0A0A]/60">Basé à Paris.</p>
<hr className="w-8 border-t border-[#0A0A0A]/20 mt-12 mb-12 lg:mb-0"/>
</header>

<section className="lg:mt-24 animate-fade-in flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12" style={{opacity: '0', animationDelay: '0.2s'}}>
<p className="leading-relaxed text-base font-medium text-[#0A0A0A] max-w-[80ch]">
        Je conçois des systèmes IA pragmatiques et opérationnels pour des
        entreprises de service depuis 2 ans.
        <br/>
        Je coach aussi la prochaine génération de product builders IA à l'École
        Cube et interviens en grande école (ESSEC Business School).
      </p>
<div className="flex items-center gap-6 md:gap-8 transition-all duration-300">
<img alt="École Cube" className="md:h-12 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3caf7e8d-5371-4b04-b4bb-578d089660a3_320w.png"/>
<img alt="ESSEC Business School" className="md:h-16 w-auto h-14 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0f2ac78-ebee-4745-949d-1e14b182520b_320w.png"/>
</div>
</section>

<section className="mt-24 lg:mt-32 w-full animate-fade-in" style={{opacity: '0', animationDelay: '0.3s'}}>
<h2 className="text-sm font-semibold text-[#0A0A0A] tracking-tight font-mono mb-12">
        Ce que je fais
      </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-y-16">

<div className="lg:pr-8">
<div className="flex gap-2 mb-4 gap-x-2 gap-y-2 items-baseline">
<span className="font-mono text-[#00FF41] text-base">01/</span>
<h3 className="text-lg font-medium text-[#0A0A0A] tracking-tight">
              Audit &amp; Conseil IA stratégique
            </h3>
</div>
<p className="leading-relaxed text-sm text-[#0A0A0A]/80 mb-6">
            Audit de vos process métier. Roadmap et plan d'intégration IA
            personnalisé. Priorisation des chantiers selon l'impact et le ROI.
          </p>
<p className="text-xs text-[#0A0A0A]/50 font-mono">2 à 4 semaines</p>
</div>

<div className="md:border-l md:pl-8 lg:px-8 border-[#0A0A0A]/10">
<div className="mb-4 flex items-baseline gap-2">
<span className="font-mono text-[#00FF41] text-sm">02/</span>
<h3 className="text-lg font-semibold text-[#0A0A0A] tracking-tight">
              Coaching en transformation IA
            </h3>
</div>
<p className="leading-relaxed text-sm text-[#0A0A0A]/80 mb-6">
            Accompagnement des dirigeants et managers dans la transition
            opérationnelles. Cadrage, jalons, déblocages.
          </p>
<p className="text-xs text-[#0A0A0A]/50 font-mono">
            Mensuel ou hebdo · 3 à 6 mois
          </p>
</div>

<div className="lg:border-l lg:px-8 border-[#0A0A0A]/10">
<div className="flex gap-2 mb-4 gap-x-2 gap-y-2 items-baseline">
<span className="font-mono text-[#00FF41] text-sm">03/</span>
<h3 className="text-lg font-semibold text-[#0A0A0A] tracking-tight">
              Développement de solutions IA
            </h3>
</div>
<p className="leading-relaxed text-sm text-[#0A0A0A]/80 mb-6">
            Infrastructures et agents IA métier opérationnels. Approche orientée
            sur l'adoption, vos cas d'usage et le ROI réel.
          </p>
<p className="text-xs text-[#0A0A0A]/50 font-mono">
            Livraison en 6 à 12 semaines
          </p>
</div>

<div className="md:border-l border-[#0A0A0A]/10 md:pl-8">
<div className="mb-4 flex items-baseline gap-2">
<span className="font-mono text-[#00FF41] text-sm">04/</span>
<h3 className="text-lg font-semibold text-[#0A0A0A] tracking-tight">
              Formation IA personnalisée
            </h3>
</div>
<p className="leading-relaxed text-sm text-[#0A0A0A]/80 mb-6">
            Interventions pédagogiques pour accompagner vos équipes à exploiter
            le plein potentiel de l'IA. Format sur mesure selon le besoin.
          </p>
<p className="text-xs text-[#0A0A0A]/50 font-mono">1 à 5 jours</p>
</div>
</div>
</section>

<section className="mt-20 lg:mt-32 animate-fade-in flex flex-col md:flex-row md:justify-between gap-12 md:items-start" style={{opacity: '0', animationDelay: '0.4s'}}>
<div className="">
<h2 className="text-sm font-semibold text-[#0A0A0A] tracking-tight font-mono mb-12">
          Ce que je ne fais pas
        </h2>
<div className="font-mono text-xs md:text-sm text-[#0A0A0A]/60 flex flex-col gap-1.5">
<p className="">- Formations ChatGPT génériques</p>
<p className="">- Prompts IA sans système derrière</p>
<p className="">- Conseil sans implémentation possible</p>
<p className="">- Démos qui impressionnent sans transformer</p>
</div>
</div>
<div className="mt-8 md:mt-0">
<h2 className="text-sm font-semibold text-[#0A0A0A] tracking-tight font-mono mb-12">
          Me contacter
        </h2>
<div className="flex flex-wrap items-center gap-5 md:gap-6">
<a className="inline-block font-mono text-xs md:text-sm border-b border-[#0A0A0A]/30 pb-0.5 hover:text-[#00FF41] hover:border-[#00FF41] transition-colors duration-75" href="mailto:paulguittonneau74@gmail.com">
            paulguittonneau74@gmail.com
          </a>
<a className="inline-flex items-center gap-1.5 font-mono text-xs md:text-sm bg-[#0A0A0A] text-[#FAFAF7] px-4 py-2 rounded-full hover:bg-[#00FF41] hover:text-[#0A0A0A] transition-colors duration-200" href="https://www.linkedin.com/in/paul-guittonneau/" rel="noopener noreferrer" target="_blank">
            LinkedIn
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</a>
</div>
</div>
</section>

<footer className="mt-auto pt-32 pb-12 flex flex-row justify-between items-end md:items-center animate-fade-in w-full" style={{opacity: '0', animationDelay: '0.5s'}}>
<div className="font-mono text-xs flex flex-wrap gap-2 text-[#0A0A0A]/60">
<a className="hover:text-[#00FF41] transition-colors duration-75" href="mailto:paulguittonneau74@gmail.com">
          email
        </a>
<span>/</span>
<a className="hover:text-[#00FF41] transition-colors duration-75" href="https://www.linkedin.com/in/paul-guittonneau/" rel="noopener noreferrer" target="_blank">
          LinkedIn
        </a>
</div>
<div className="font-mono text-xs text-[#0A0A0A]/40 flex items-center gap-4 text-right">
<span className="hidden sm:inline">Paris, FR</span>
<span className="text-[#00FF41] font-medium tracking-tight">./</span>
</div>
</footer>

    </>
  );
}
