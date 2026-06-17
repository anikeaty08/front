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



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



(function(){
function initStoryParallax(){
var els = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
if(!els.length) return;
var ticking=false;
function clamp(v,min,max){return Math.max(min,Math.min(max,v));}
function update(){
ticking=false;
var wh = window.innerHeight || 0;
els.forEach(function(el){
var speed = parseFloat(el.getAttribute('data-parallax'));
if(isNaN(speed)) speed = 0.12;
var scaleAttr = el.getAttribute('data-parallax-scale');
var scale = scaleAttr ? parseFloat(scaleAttr) : 1;
if(isNaN(scale)) scale = 1;
var rect = el.getBoundingClientRect();
var progress = (rect.top + rect.height/2 - wh/2) / (wh/2);
progress = clamp(progress, -1.25, 1.25);
var y = -progress * speed * 40;
el.style.transform = 'translate3d(0,'+y.toFixed(2)+'px,0) scale('+scale+')';
});
}
function onScroll(){
if(!ticking){
ticking=true;
window.requestAnimationFrame(update);
}
}
window.addEventListener('scroll', onScroll, {passive:true});
window.addEventListener('resize', onScroll, {passive:true});
update();
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', initStoryParallax);
else initStoryParallax();
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      (function(){var p=document.getElementById('page-preloader');if(!p)return;if(sessionStorage.getItem('imo_preloader_shown')){p.style.display='none';p.remove();}else{sessionStorage.setItem('imo_preloader_shown','true');window.addEventListener('load',function(){setTimeout(function(){p.style.opacity='0';p.style.visibility='hidden';setTimeout(function(){p.remove();},700);},250);});}})();
    


      lucide.createIcons();
    


      (function() {
        function initSmartNav() {
          let lastScrollY = window.scrollY;
          const nav = document.querySelector('nav');
          if (!nav) return;

          let isNavClick = false;
          let clickTimeout;

          const navLinks = nav.querySelectorAll('a');
          navLinks.forEach(link => {
            link.addEventListener('click', () => {
              isNavClick = true;
              clearTimeout(clickTimeout);
              clickTimeout = setTimeout(() => {
                isNavClick = false;
              }, 1500);
            });
          });

          window.addEventListener('scroll', () => {
            if (isNavClick) {
              lastScrollY = window.scrollY;
              return;
            }

            if (window.scrollY > 120) {
              if (window.scrollY > lastScrollY) {
                if (!nav.classList.contains('nav-hide-anim')) {
                  nav.classList.remove('nav-show-anim');
                  nav.classList.add('nav-hide-anim');
                }
              } else {
                if (nav.classList.contains('nav-hide-anim')) {
                  nav.classList.remove('nav-hide-anim');
                  nav.classList.add('nav-show-anim');
                }
              }
            } else {
              if (nav.classList.contains('nav-hide-anim')) {
                nav.classList.remove('nav-hide-anim');
                nav.classList.add('nav-show-anim');
              }
            }
            lastScrollY = window.scrollY;
          }, { passive: true });
        }

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initSmartNav);
        } else {
          initSmartNav();
        }
      })();
    
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
      


<div className="fixed z-0 pointer-events-none inset-0">
<div className="absolute inset-0 bg-[radial-gradient(1100px_700px_at_18%_8%,rgba(251,232,236,.95),transparent_62%),radial-gradient(900px_620px_at_85%_18%,rgba(122,30,58,.14),transparent_60%),radial-gradient(900px_620px_at_50%_95%,rgba(74,16,36,.12),transparent_60%)] parallax-layer" data-parallax="0.22"></div>
<div className="absolute inset-0 opacity-[0.28] parallax-layer" data-parallax="0.12" style={{backgroundSize: '28px 28px'}}></div>
</div>

<nav className="fixed top-0 z-50 w-full pt-4 px-3 sm:px-6 transition-all duration-300" style={{position: 'fixed'}}>
<div className="sm:px-6 sm:py-3 flex seq-nav bg-white/70 max-w-7xl border-white/60 border rounded-full mr-auto ml-auto pt-2.5 pr-4 pb-2.5 pl-4 shadow-[0_8px_32px_rgba(31,41,51,0.06)] backdrop-blur-2xl gap-x-4 gap-y-4 items-center justify-between">
<a className="flex items-center gap-3 seq-nav-1" href="#inicio">
<div className="leading-tight nav-content-fade">
<div className="text-[14px] sm:text-[15px] font-semibold text-[#1F2933]/70 tracking-tight font-geist">
              Instituto Mineiro de Odontologia
            </div>
<style>
              div:has(> #nav-brand-logo) {
                display: flex;
                align-items: center;
                gap: 0.75rem;
              }
            </style>
<img alt="Logotipo Instituto Mineiro de Odontologia 24h" className="w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-sm -order-1 transition-transform hover:scale-105" id="nav-brand-logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/02853990-3f32-480e-8b4f-ac5818c8660c_320w.png"/>
</div>
</a>
<div className="hidden lg:flex items-center gap-1 text-[14px] text-slate-600 nav-content-fade seq-nav-2">
<a className="px-4 py-2 rounded-full transition-all duration-300 font-medium hover:bg-white hover:shadow-[0_4px_12px_rgba(31,41,51,0.06)] hover:text-[#0B2F4A] font-geist" href="#servicos">
            Serviços
          </a>
<a className="px-4 py-2 rounded-full transition-all duration-300 font-medium hover:bg-white hover:shadow-[0_4px_12px_rgba(31,41,51,0.06)] hover:text-[#0B2F4A] font-geist whitespace-nowrap" href="#sobre">
            Quem Somos
          </a>
<a className="px-4 py-2 rounded-full transition-all duration-300 font-medium hover:bg-white hover:shadow-[0_4px_12px_rgba(31,41,51,0.06)] hover:text-[#0B2F4A] font-geist" href="#depoimentos">
            Depoimentos
          </a>
<a className="px-4 py-2 rounded-full transition-all duration-300 font-medium hover:bg-white hover:shadow-[0_4px_12px_rgba(31,41,51,0.06)] hover:text-[#0B2F4A] font-geist" href="#faq">
            Dúvidas
          </a>
<a className="px-4 py-2 rounded-full transition-all duration-300 font-medium hover:bg-white hover:shadow-[0_4px_12px_rgba(31,41,51,0.06)] hover:text-[#0B2F4A] font-geist" href="#contato">
            Contato
          </a>
</div>
<div className="flex items-center gap-2 sm:gap-3 nav-content-fade seq-nav-3">
<a className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full ring-1 transition-all duration-300 shadow-[0_2px_8px_rgba(31,41,51,0.04)] bg-white/80 ring-slate-200/60 text-slate-900 hover:bg-white hover:scale-105 whitespace-nowrap" href="tel:+5511999999999">
<i className="w-4 h-4 text-[#7A1E3A]" data-lucide="phone"></i>
<span className="text-[13px] font-medium font-geist">
              (11) 99999-9999
            </span>
</a>
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] font-medium shadow-[0_4px_12px_rgba(37,211,102,0.25)] hover:scale-105 hover:brightness-110 transition-all text-white whitespace-nowrap" href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Preciso%20de%20atendimento%20odontol%C3%B3gico%20de%20urg%C3%AAncia.">
<i className="w-4 h-4" data-lucide="message-circle"></i>
<span className="text-[14px] font-medium font-geist">WhatsApp 24h</span>
</a>
</div>
</div>
</nav>

<div className="absolute top-0 left-0 w-full h-[155vh] lg:h-[130vh] pointer-events-none z-0 overflow-hidden parallax-layer [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]" data-parallax="0.25">
<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(74,16,36,0.5),rgba(31,41,51,0.4))] z-10"></div>
<div className="absolute inset-0 w-full h-full z-0">
<img alt="Recepção Instituto Mineiro de Odontologia" className="hero-slide contrast-125 saturate-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9e804d3-2538-41bc-9f76-6879a8fc6b8a_1600w.png"/>
<img alt="Consultório Odontológico Premium" className="hero-slide contrast-125 saturate-110" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=100&amp;w=2000"/>
</div>
<div className="absolute inset-0 z-10 pointer-events-none opacity-20 parallax-layer" data-parallax="0.1" style={{backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 1px, transparent 1px)', backgroundSize: '80px 80px', animation: '20s linear 0s infinite normal none running storyFloat'}}></div>
</div>
<main className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 relative flex flex-col justify-center min-h-[95vh] z-10">

<div className="flex flex-col items-start max-w-3xl w-full">


<h1 className="text-[40px] sm:text-6xl lg:text-[72px] leading-[1.05] font-semibold text-gray-200 tracking-tight font-geist mb-6 drop-shadow-md seq-h1" style={{maskImage: 'linear-gradient(180deg, transparent, black 35%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 35%, black 80%, transparent)'}}>
          Atendimento odontológico 24h
        </h1>

<p className="text-[17px] sm:text-xl leading-relaxed font-semibold text-gray-200/95 font-geist max-w-2xl mb-10 drop-shadow-md seq-p">
          Cuidado imediato, estrutura completa e profissionais preparados para
          atender você todos os dias, inclusive finais de semana e feriados.
        </p>

<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-14 items-stretch sm:items-center w-full seq-btn">
<a className="group relative z-0 inline-flex w-full sm:w-auto items-center justify-center gap-2.5 overflow-hidden rounded-2xl px-8 py-4 text-[16px] font-medium shadow-[0_8px_30px_rgba(37,211,102,0.3)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(37,211,102,0.8)] focus:outline-none text-white" href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Preciso%20de%20atendimento%20odontol%C3%B3gico%20de%20urg%C3%AAncia.">
<style>
              @keyframes beam-spin { to { transform: rotate(360deg); } }
              @keyframes dots-move {
                  0% { background-position: 0 0; }
                  100% { background-position: 24px 24px; }
              }
            </style>

<div className="absolute inset-0 overflow-hidden rounded-2xl p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ffffff_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-[15px] bg-[#25D366]"></div>
</div>

<div className="absolute inset-[2px] overflow-hidden rounded-[14px] bg-[#25D366]">

<div className="absolute inset-0 bg-gradient-to-b to-transparent from-white/20"></div>

<div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite'}}></div>

<div className="pointer-events-none absolute bottom-0 left-1/2 h-1/2 w-2/3 -translate-x-1/2 rounded-full blur-2xl transition-colors duration-500 group-hover:bg-white/40 bg-white/20"></div>
</div>

<i className="w-5 h-5" data-lucide="message-circle"></i>
<span className="relative z-10 font-light font-geist">
              Chamar no WhatsApp
            </span>
<i className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl px-8 py-4 text-[16px] font-semibold text-[#4A1024] shadow-soft-lg hover:scale-105 transition-all duration-300 bg-white" href="tel:+5511999999999">
<i className="w-5 h-5" data-lucide="phone"></i>
<span className="font-light font-geist">Ligar agora</span>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl animate-fade-up delay-400"></div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20 opacity-80 animate-bounce pointer-events-none">
<span className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-light font-geist">
          Ver mais
        </span>
<i className="w-6 h-6 text-white/80" data-lucide="chevron-down"></i>
</div>
</main>

<section className="sm:px-6 sm:py-16 [--fx-filter:blur(16px)_liquid-glass(2.5,10)_saturate(1.25)_noise(0.5,1,0)] max-w-7xl mx-auto px-4 py-12 relative">
<div className="text-center mb-10 sm:mb-12">
<h2 className="animate-on-scroll blur-[2px] transition-all duration-700 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none sm:text-4xl lg:text-5xl text-3xl font-bold text-gray-100 tracking-tight font-sora opacity-0 mb-3 translate-y-6" style={{maskImage: 'linear-gradient(90deg, transparent, black 25%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 25%, black 70%, transparent)'}}>
          Confiança Clínica e Resposta Rápida
        </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
<div className="group rounded-3xl ring-1 p-6 shadow-soft animate-on-scroll opacity-0 translate-y-8 blur-[2px] transition-all duration-1000 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none hover:-translate-y-[6px] hover:shadow-[0_24px_60px_-20px_rgba(122,30,58,0.25)] hover:duration-500 bg-white ring-slate-200">
<div className="flex items-start gap-3">
<span className="inline-flex w-11 h-11 rounded-2xl bg-[#FBE8EC] ring-1 ring-[#7A1E3A]/15 items-center justify-center">
<i className="w-5 h-5 text-[#7A1E3A]" data-lucide="clock"></i>
</span>
<div className="">
<div className="tracking-tight text-xl text-[#1F2933] font-geist font-medium">
                Plantão 24h
              </div>
<p className="mt-1 text-sm leading-relaxed font-light text-slate-600 font-geist">
                Atendimento todos os dias, inclusive fins de semana e feriados.
              </p>
</div>
</div>
</div>
<div className="group rounded-3xl ring-1 p-6 shadow-soft animate-on-scroll opacity-0 translate-y-8 blur-[2px] transition-all duration-1000 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none delay-100 hover:-translate-y-[6px] hover:shadow-[0_24px_60px_-20px_rgba(122,30,58,0.25)] hover:duration-500 bg-white ring-slate-200">
<div className="flex items-start gap-3">
<span className="inline-flex w-11 h-11 rounded-2xl bg-[#FBE8EC] ring-1 ring-[#7A1E3A]/15 items-center justify-center">
<i className="w-5 h-5 text-[#7A1E3A]" data-lucide="credit-card"></i>
</span>
<div className="">
<div className="tracking-tight text-xl text-[#1F2933] font-geist font-medium">
                Particular e convênios
              </div>
<p className="mt-1 text-sm leading-relaxed font-light text-slate-600 font-geist">
                Orientação para reembolso e opções de pagamento no plantão.
              </p>
</div>
</div>
</div>
<div className="group rounded-3xl ring-1 p-6 shadow-soft animate-on-scroll opacity-0 translate-y-8 blur-[2px] transition-all duration-1000 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none delay-200 hover:-translate-y-[6px] hover:shadow-[0_24px_60px_-20px_rgba(122,30,58,0.25)] hover:duration-500 bg-white ring-slate-200">
<div className="flex items-start gap-3">
<span className="inline-flex w-11 h-11 rounded-2xl bg-[#FBE8EC] ring-1 ring-[#7A1E3A]/15 items-center justify-center">
<i className="w-5 h-5 text-[#7A1E3A]" data-lucide="badge-check"></i>
</span>
<div className="">
<div className="tracking-tight text-xl text-[#1F2933] font-geist font-medium">
                +100 mil urgências
              </div>
<p className="mt-1 text-sm leading-relaxed font-light text-slate-600 font-geist">
                Experiência e conduta segura nos casos mais comuns do plantão.
              </p>
</div>
</div>
</div>
<div className="group rounded-3xl ring-1 p-6 shadow-soft animate-on-scroll opacity-0 translate-y-8 blur-[2px] transition-all duration-1000 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none delay-300 hover:-translate-y-[6px] hover:shadow-[0_24px_60px_-20px_rgba(122,30,58,0.25)] hover:duration-500 bg-white ring-slate-200">
<div className="flex items-start gap-3">
<span className="inline-flex w-11 h-11 rounded-2xl bg-[#FBE8EC] ring-1 ring-[#7A1E3A]/15 items-center justify-center">
<i className="w-5 h-5 text-[#7A1E3A]" data-lucide="shield-check"></i>
</span>
<div className="">
<div className="tracking-tight text-xl text-[#1F2933] font-geist font-medium">
                Estrutura segura
              </div>
<p className="mt-1 text-sm leading-relaxed font-light text-slate-600 font-geist">
                Biossegurança, tecnologia e ambiente premium de clínica privada.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16" id="sobre">
<div className="rounded-[32px] ring-1 shadow-soft-lg overflow-hidden animate-on-scroll opacity-0 translate-y-12 blur-[2px] transition-all duration-1000 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none bg-white ring-slate-200">
<div className="grid grid-cols-1 lg:grid-cols-12">
<div className="lg:col-span-5 relative">
<div className="absolute inset-0 bg-[radial-gradient(700px_420px_at_15%_15%,rgba(221,243,250,.95),transparent_60%),radial-gradient(700px_420px_at_90%_40%,rgba(29,117,166,.20),transparent_55%)] parallax-layer" data-parallax="0.14" data-parallax-scale="1.03"></div>
<div className="relative p-7 sm:p-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FBE8EC] text-[#4A1024] text-sm ring-1 ring-[#7A1E3A]/15 font-light font-geist">
<i className="w-4 h-4 text-rose-800" data-lucide="building-2"></i>
                Sobre a clínica
              </div>
<h2 className="mt-5 text-3xl sm:text-4xl tracking-tight text-[#1F2933] animate-on-scroll opacity-0 translate-y-6 blur-[2px] transition-all duration-700 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none font-geist font-semibold">
                Um centro de referência em urgência odontológica
              </h2>
<p className="mt-4 leading-relaxed text-[15px] sm:text-[16px] font-light text-slate-700 font-geist">
                Atendemos situações que não podem esperar: dor intensa,
                infecções, fraturas e traumas. Nossa proposta é simples: escuta
                clínica, diagnóstico rápido e tratamento com segurança — sem
                excessos, com transparência.
              </p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="p-4 rounded-2xl ring-1 bg-white/70 ring-slate-200">
<div className="flex items-center gap-2 text-[#0B2F4A]">
<i className="w-4 h-4 text-rose-800" data-lucide="heart-handshake"></i>
<span className="text-sm font-light font-geist">
                      Cuidado humanizado
                    </span>
</div>
<div className="mt-1 text-xs font-light text-slate-600 font-geist">
                    Você entende o que está acontecendo e o próximo passo.
                  </div>
</div>
<div className="p-4 rounded-2xl ring-1 bg-white/70 ring-slate-200">
<div className="flex items-center gap-2 text-[#0B2F4A]">
<i className="w-4 h-4 text-rose-800" data-lucide="badge-check"></i>
<span className="text-sm font-light font-geist">
                      Conduta profissional
                    </span>
</div>
<div className="mt-1 text-xs font-light text-slate-600 font-geist">
                    Diagnóstico e procedimentos com rigor técnico.
                  </div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7 relative parallax-layer" data-parallax="0.1">
<img alt="Ambiente clínico odontológico moderno" className="w-full h-full object-cover min-h-[320px]" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B2F4A]/55 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="glass rounded-3xl ring-1 p-5 shadow-soft ring-white/30">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="flex items-center gap-2 text-slate-800">
<i className="w-4 h-4 text-rose-800" data-lucide="clock"></i>
<span className="text-sm font-light font-geist">24/7</span>
</div>
<div className="flex items-center gap-2 text-slate-800">
<i className="w-4 h-4 text-rose-800" data-lucide="scan"></i>
<span className="text-sm font-light font-geist">
                      Raio‑X digital
                    </span>
</div>
<div className="flex items-center gap-2 text-slate-800">
<i className="w-4 h-4 text-rose-800" data-lucide="shield-check"></i>
<span className="text-sm font-light font-geist">
                      Biossegurança
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16" id="servicos">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight text-[#1F2933] animate-on-scroll opacity-0 translate-y-6 blur-[2px] transition-all duration-700 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none font-geist font-semibold">
            Serviços de urgência
          </h2>
<p className="mt-3 max-w-2xl font-light text-slate-600 font-geist">
            Atendimento direcionado ao que mais aparece em plantão odontológico
            — com avaliação, explicação objetiva e plano seguro para resolver a
            dor e estabilizar o quadro.
          </p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] shadow-soft hover:brightness-110 transition-all font-light text-white font-geist" href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Preciso%20de%20um%20atendimento%20de%20urg%C3%AAncia%20odontol%C3%B3gica.">
<i className="w-4 h-4" data-lucide="message-circle"></i>
            WhatsApp
          </a>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
<div className="rounded-3xl ring-1 p-6 shadow-soft hover-lift animate-on-scroll opacity-0 translate-y-8 blur-[2px] transition-all duration-700 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none bg-white ring-slate-200">
<div className="flex items-center gap-2 text-[#0B2F4A]">
<i className="w-4 h-4 text-rose-800" data-lucide="flame"></i>
<h3 className="tracking-tight font-light font-geist">
              Dor de dente intensa
            </h3>
</div>
<p className="mt-2 text-sm font-light text-slate-600 font-geist">
            Avaliação imediata para identificar a causa e aliviar a dor com
            segurança.
          </p>
</div>
<div className="rounded-3xl ring-1 p-6 shadow-soft hover-lift animate-on-scroll opacity-0 translate-y-8 blur-[2px] transition-all duration-700 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none delay-100 bg-white ring-slate-200">
<div className="flex items-center gap-2 text-[#0B2F4A]">
<i className="w-4 h-4 text-rose-800" data-lucide="bandage"></i>
<h3 className="tracking-tight font-light font-geist">Trauma dental</h3>
</div>
<p className="mt-2 text-sm font-light text-slate-600 font-geist">
            Quedas e batidas: estabilização, exames e conduta rápida para
            preservar o dente.
          </p>
</div>
<div className="rounded-3xl ring-1 p-6 shadow-soft hover-lift animate-on-scroll opacity-0 translate-y-8 blur-[2px] transition-all duration-700 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none delay-200 bg-white ring-slate-200">
<div className="flex items-center gap-2 text-[#0B2F4A]">
<i className="w-4 h-4 text-rose-800" data-lucide="scissors"></i>
<h3 className="tracking-tight font-light font-geist">Dente quebrado</h3>
</div>
<p className="mt-2 text-sm font-light text-slate-600 font-geist">
            Restauração provisória ou definitiva conforme o caso, com foco
            estético e funcional.
          </p>
</div>
<div className="rounded-3xl ring-1 p-6 shadow-soft hover-lift animate-on-scroll opacity-0 translate-y-8 blur-[2px] transition-all duration-700 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none delay-300 bg-white ring-slate-200">
<div className="flex items-center gap-2 text-[#0B2F4A]">
<i className="w-4 h-4 text-rose-800" data-lucide="syringe"></i>
<h3 className="tracking-tight font-light font-geist">Infecções</h3>
</div>
<p className="mt-2 text-sm font-light text-slate-600 font-geist">
            Conduta para controlar dor, inflamação e risco de agravamento.
          </p>
</div>
<div className="rounded-3xl ring-1 p-6 shadow-soft hover-lift animate-on-scroll opacity-0 translate-y-8 blur-[2px] transition-all duration-700 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none bg-white ring-slate-200">
<div className="flex items-center gap-2 text-[#0B2F4A]">
<i className="w-4 h-4 text-rose-800" data-lucide="activity"></i>
<h3 className="tracking-tight font-light font-geist">
              Canal de urgência
            </h3>
</div>
<p className="mt-2 text-sm font-light text-slate-600 font-geist">
            Quando indicado, tratamos a origem da dor com técnica e
            previsibilidade.
          </p>
</div>
<div className="rounded-3xl ring-1 p-6 shadow-soft hover-lift animate-on-scroll opacity-0 translate-y-8 blur-[2px] transition-all duration-700 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none delay-100 bg-white ring-slate-200">
<div className="flex items-center gap-2 text-[#0B2F4A]">
<i className="w-4 h-4 text-rose-800" data-lucide="droplet"></i>
<h3 className="tracking-tight font-light font-geist">Abscesso</h3>
</div>
<p className="mt-2 text-sm font-light text-slate-600 font-geist">
            Avaliação e abordagem segura para reduzir dor e pressão, com
            orientação clara.
          </p>
</div>
<div className="rounded-3xl ring-1 p-6 shadow-soft hover-lift animate-on-scroll opacity-0 translate-y-8 blur-[2px] transition-all duration-700 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none delay-200 bg-white ring-slate-200">
<div className="flex items-center gap-2 text-[#0B2F4A]">
<i className="w-4 h-4 text-rose-800" data-lucide="alert-triangle"></i>
<h3 className="tracking-tight font-light font-geist">
              Inchaço e inflamação
            </h3>
</div>
<p className="mt-2 text-sm font-light text-slate-600 font-geist">
            Investigação da causa e conduta para estabilizar o quadro com
            segurança.
          </p>
</div>
<div className="rounded-3xl ring-1 p-6 shadow-soft hover-lift animate-on-scroll opacity-0 translate-y-8 blur-[2px] transition-all duration-700 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none delay-300 bg-white ring-slate-200">
<div className="flex items-center gap-2 text-[#0B2F4A]">
<i className="w-4 h-4 text-rose-800" data-lucide="wrench"></i>
<h3 className="tracking-tight font-light font-geist">
              Procedimentos urgentes
            </h3>
</div>
<p className="mt-2 text-sm font-light text-slate-600 font-geist">
            Cimentação provisória, ajustes, curativos e estabilizações quando
            necessário.
          </p>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16" id="faq">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="lg:col-span-5">
<h2 className="text-3xl sm:text-4xl tracking-tight text-[#1F2933] animate-on-scroll opacity-0 translate-y-6 blur-[2px] transition-all duration-700 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none font-geist font-semibold">
            Dúvidas frequentes
          </h2>
<p className="mt-3 font-light text-slate-600 font-geist">
            Perguntas comuns em situações de urgência odontológica. Se preferir,
            fale direto com a equipe de plantão.
          </p>
<div className="mt-6 flex gap-3">
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#25D366] shadow-soft hover:brightness-110 transition-all font-light text-white font-geist" href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Tenho%20uma%20d%C3%BAvida%20sobre%20atendimento%20odontol%C3%B3gico%20de%20urg%C3%AAncia.">
<i className="w-4 h-4" data-lucide="message-circle"></i>
              Tirar dúvida no WhatsApp
            </a>
</div>
</div>
<div className="lg:col-span-7 parallax-layer animate-on-scroll opacity-0 translate-y-8 blur-[2px] transition-all duration-1000 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none" data-parallax="0.08">
<div className="space-y-3" data-accordion="">
<details className="group rounded-3xl ring-1 shadow-soft p-6 open:shadow-soft-lg bg-white ring-slate-200">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<span className="text-[#0B2F4A] font-light font-geist">
                  O atendimento é realmente 24 horas?
                </span>
<i className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm leading-relaxed font-light text-slate-600 font-geist">
                Sim. O plantão funciona 24/7 para urgências odontológicas. Em
                horários de menor fluxo, o atendimento pode ocorrer por escala —
                por isso, recomendamos contato prévio por WhatsApp ou telefone
                para agilizar a chegada.
              </p>
</details>
<details className="group rounded-3xl ring-1 shadow-soft p-6 bg-white ring-slate-200">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<span className="text-[#0B2F4A] font-light font-geist">
                  Em quais casos devo procurar uma emergência?
                </span>
<i className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm leading-relaxed font-light text-slate-600 font-geist">
                Dor intensa que não cede, trauma (queda/batida), dente quebrado
                com dor, inchaço, suspeita de infecção/abscesso, sangramento
                persistente e situações que impedem mastigar ou dormir são
                motivos comuns para procurar plantão.
              </p>
</details>
<details className="group rounded-3xl ring-1 shadow-soft p-6 bg-white ring-slate-200">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<span className="text-[#0B2F4A] font-light font-geist">
                  Vocês fazem raio‑X no local?
                </span>
<i className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm leading-relaxed font-light text-slate-600 font-geist">
                Sim, quando indicado clinicamente. O raio‑X digital ajuda a
                definir a origem do problema e a conduta mais segura para
                aliviar a dor e estabilizar o quadro.
              </p>
</details>
<details className="group rounded-3xl ring-1 shadow-soft p-6 bg-white ring-slate-200">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<span className="text-[#0B2F4A] font-light font-geist">
                  Aceitam convênios ou reembolso?
                </span>
<i className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm leading-relaxed font-light text-slate-600 font-geist">
                Atendemos particular e orientamos sobre documentação para
                reembolso quando aplicável. Fale com a equipe para confirmar o
                fluxo e as informações necessárias.
              </p>
</details>
<details className="group rounded-3xl ring-1 shadow-soft p-6 bg-white ring-slate-200">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<span className="text-[#0B2F4A] font-light font-geist">
                  Quais formas de pagamento vocês aceitam?
                </span>
<i className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm leading-relaxed font-light text-slate-600 font-geist">
                PIX, cartão de débito e crédito. Caso precise de parcelamento,
                nossa equipe informa as opções disponíveis no momento do
                atendimento.
              </p>
</details>
</div>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
<div className="rounded-[32px] bg-[linear-gradient(135deg,#4A1024,#7A1E3A)] shadow-soft-lg overflow-hidden relative ring-1 ring-[#7A1E3A]/20 animate-on-scroll opacity-0 scale-[0.98] blur-[2px] transition-all duration-1000 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:scale-100 [&amp;.animate]:blur-none">
<div className="absolute inset-0 opacity-35 parallax-layer" data-parallax="0.15" style={{backgroundImage: 'radial-gradient(900px 420px at 15% 20%, rgba(251,232,236,.55), transparent 62%), radial-gradient(800px 420px at 85% 30%, rgba(255,255,255,.22), transparent 62%)'}}></div>
<div className="relative p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-7">
<div className="">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full ring-1 text-sm font-light bg-white/15 ring-white/20 text-white/90 font-geist">
<i className="w-4 h-4" data-lucide="siren"></i>
              Se é urgente, não espere
            </div>
<h2 className="sm:text-5xl animate-on-scroll blur-[2px] transition-all duration-700 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none text-3xl font-semibold text-gray-100 tracking-tight font-geist opacity-0 mt-5 translate-y-6" style={{maskImage: 'linear-gradient(60deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(60deg, transparent, black 15%, black 85%, transparent)'}}>
              Precisa de Atendimento Agora?
            </h2>
<p className="mt-3 max-w-2xl text-[15px] sm:text-[16px] font-light text-white/85 font-geist">
              Chame no WhatsApp e descreva o que está sentindo. Nossa equipe
              orienta os próximos passos e organiza seu atendimento com
              prioridade.
            </p>
</div>
<div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
<a className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#25D366] shadow-soft hover:brightness-110 transition-all w-full sm:w-auto font-light text-white font-geist" href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Preciso%20de%20atendimento%20odontol%C3%B3gico%20de%20urg%C3%AAncia%20agora.">
<i className="w-5 h-5" data-lucide="message-circle"></i>
              Falar no WhatsApp
            </a>
<a className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-[#4A1024] shadow-soft transition-colors w-full sm:w-auto font-light bg-white hover:bg-white/90 font-geist" href="tel:+5511999999999">
<i className="w-5 h-5" data-lucide="phone-call"></i>
              Ligar agora
            </a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
<div className="rounded-[32px] ring-1 shadow-soft-lg overflow-hidden bg-white ring-slate-200">
<div className="p-8 sm:p-12">
<div className="text-center mb-10">
<h2 className="text-3xl sm:text-4xl tracking-tight text-[#1F2933] animate-on-scroll opacity-0 translate-y-6 blur-[2px] transition-all duration-700 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none font-geist font-semibold">
              Dúvidas Frequentes
            </h2>
<p className="mt-3 max-w-2xl mx-auto font-light text-slate-600 font-geist">
              Esclareça rapidamente as principais dúvidas sobre atendimento de
              urgência. Se preferir, fale agora com a equipe do plantão.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-3xl bg-[#F7F1EA] ring-1 p-6 ring-slate-200">
<h3 className="text-lg text-[#1F2933] mb-2 font-light font-geist">
                Aceitam plano de saúde odontológico?
              </h3>
<p className="text-sm font-light text-slate-600 font-geist">
                Atendemos pacientes particulares e orientamos sobre reembolso
                para convênios quando aplicável. Confirme o fluxo pelo WhatsApp.
              </p>
</div>
<div className="rounded-3xl bg-[#F7F1EA] ring-1 p-6 ring-slate-200">
<h3 className="text-lg text-[#1F2933] mb-2 font-light font-geist">
                Como funciona o atendimento de urgência?
              </h3>
<p className="text-sm font-light text-slate-600 font-geist">
                Triagem rápida, exame e conduta focada em aliviar a dor e
                estabilizar o quadro com segurança e explicação clara.
              </p>
</div>
<div className="rounded-3xl bg-[#F7F1EA] ring-1 p-6 ring-slate-200">
<h3 className="text-lg text-[#1F2933] mb-2 font-light font-geist">
                Quais são as formas de pagamento?
              </h3>
<p className="text-sm font-light text-slate-600 font-geist">
                PIX, cartão de débito e crédito. Caso precise de parcelamento,
                informamos as opções disponíveis no plantão.
              </p>
</div>
<div className="rounded-3xl bg-[#F7F1EA] ring-1 p-6 ring-slate-200">
<h3 className="text-lg text-[#1F2933] mb-2 font-light font-geist">
                Como iniciar meu atendimento agora?
              </h3>
<p className="text-sm font-light text-slate-600 font-geist">
                Chame no WhatsApp e descreva sintomas. Organizamos a chegada e
                orientamos os próximos passos.
              </p>
</div>
</div>
<div className="mt-8 flex justify-center">
<a className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#25D366] shadow-soft hover:brightness-110 transition-all font-light text-white font-geist" href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Tenho%20uma%20d%C3%BAvida%20sobre%20atendimento%20odontol%C3%B3gico%20de%20urg%C3%AAncia.">
<i className="w-5 h-5" data-lucide="message-circle"></i>
              Tirar dúvida no WhatsApp
            </a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16" id="depoimentos">
<div className="rounded-[32px] ring-1 shadow-soft-lg overflow-hidden p-8 sm:p-12 bg-white ring-slate-200">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight text-[#1F2933] animate-on-scroll opacity-0 translate-y-6 blur-[2px] transition-all duration-700 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none font-geist font-semibold">
              Depoimentos
            </h2>
<p className="mt-3 max-w-2xl font-light text-slate-600 font-geist">
              Avaliações de pacientes atendidos em urgência. Clareza,
              acolhimento e resolução com segurança.
            </p>
</div>
<div className="inline-flex items-center gap-1 text-[#7A1E3A] bg-[#FBE8EC] px-5 py-2.5 rounded-full ring-1 ring-[#7A1E3A]/15 shadow-sm">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<span className="ml-2 text-sm text-[#0B2F4A] font-light font-geist">
              5.0 no atendimento
            </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-3xl bg-[#F7F1EA] ring-1 p-8 animate-on-scroll opacity-0 -translate-x-8 blur-[2px] transition-all duration-1000 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-x-0 [&amp;.animate]:blur-none ring-slate-200">
<p className="text-[16px] leading-relaxed font-light text-slate-800 font-geist">
              “Cheguei com dor muito forte e fui atendida rápido. Explicaram
              tudo com calma e resolveram o problema com muita segurança.”
            </p>
<div className="mt-6 flex items-center justify-between gap-3">
<div className="text-sm text-[#1F2933] font-light font-geist">
                Paciente verificada
              </div>
<div className="text-xs font-light text-slate-600 font-geist">
                São Paulo • Urgência
              </div>
</div>
</div>
<div className="rounded-3xl bg-[#F7F1EA] ring-1 p-8 animate-on-scroll opacity-0 translate-x-8 blur-[2px] transition-all duration-1000 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-x-0 [&amp;.animate]:blur-none delay-100 ring-slate-200">
<p className="text-[16px] leading-relaxed font-light text-slate-800 font-geist">
              “Atendimento humano e profissional. Fizeram a triagem, raio‑X e me
              orientaram sobre cada passo. Recomendo.”
            </p>
<div className="mt-6 flex items-center justify-between gap-3">
<div className="text-sm text-[#1F2933] font-light font-geist">
                Paciente verificado
              </div>
<div className="text-xs font-light text-slate-600 font-geist">
                Grande SP • Plantão
              </div>
</div>
</div>
</div>
</div>
</section>
<footer className="max-w-7xl mx-auto px-4 sm:px-6 pb-10" id="contato">
<div className="rounded-[28px] ring-1 shadow-soft-lg overflow-hidden bg-white ring-slate-200">
<div className="grid grid-cols-1 lg:grid-cols-12">
<div className="lg:col-span-6 p-7 sm:p-10">
<h2 className="text-3xl sm:text-4xl tracking-tight text-[#1F2933] animate-on-scroll opacity-0 translate-y-6 blur-[2px] transition-all duration-700 ease-out [&amp;.animate]:opacity-100 [&amp;.animate]:translate-y-0 [&amp;.animate]:blur-none font-geist font-semibold">
              Contato e localização
            </h2>
<p className="mt-3 font-light text-slate-600 font-geist">
              Atendimento 24/7 para urgências odontológicas. Para agilizar,
              chame no WhatsApp e informe sintomas, localização e horário.
            </p>
<div className="mt-7 space-y-4">
<div className="flex items-start gap-3">
<span className="inline-flex w-10 h-10 rounded-2xl bg-[#DDF3FA] items-center justify-center ring-1 ring-[#1D75A6]/20">
<i className="w-4 h-4 text-rose-800" data-lucide="map-pin"></i>
</span>
<div className="">
<div className="text-sm text-[#0B2F4A] font-light font-geist">
                    Endereço
                  </div>
<div className="text-sm font-light text-slate-600 font-geist">
                    Avenida do Contorno, 4747 -13º andar - Sala 1308. Serra -
                    Belo Horizonte - MG | CEP 30110-921
                  </div>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex w-10 h-10 rounded-2xl bg-[#DDF3FA] items-center justify-center ring-1 ring-[#1D75A6]/20">
<i className="w-4 h-4 text-rose-800" data-lucide="phone"></i>
</span>
<div>
<div className="text-sm text-[#0B2F4A] font-light font-geist">
                    Telefone do plantão
                  </div>
<a className="text-sm hover:text-[#7A1E3A] font-light text-slate-700 font-geist" href="tel:+5511999999999">
                    (11) 99999-9999
                  </a>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex w-10 h-10 rounded-2xl bg-[#DDF3FA] items-center justify-center ring-1 ring-[#1D75A6]/20">
<i className="w-4 h-4 text-[#25D366]" data-lucide="message-circle"></i>
</span>
<div>
<div className="text-sm text-[#0B2F4A] font-light font-geist">
                    WhatsApp 24h
                  </div>
<a className="text-sm hover:text-[#7A1E3A] font-light text-slate-700 font-geist" href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Preciso%20de%20atendimento%20odontol%C3%B3gico%20de%20urg%C3%AAncia.">
                    Chamar no WhatsApp
                  </a>
</div>
</div>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] shadow-soft hover:brightness-110 transition-all font-light text-white font-geist" href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Preciso%20de%20atendimento%20odontol%C3%B3gico%20de%20urg%C3%AAncia%20agora.">
<i className="w-4 h-4" data-lucide="message-circle"></i>
                WhatsApp
              </a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[linear-gradient(135deg,#7A1E3A,#4A1024)] shadow-soft hover:brightness-110 transition-all font-light text-white font-geist" href="tel:+5511999999999">
<i className="w-4 h-4" data-lucide="phone-call"></i>
                Ligar agora
              </a>
</div>
<div className="mt-10 rounded-3xl bg-[#FBE8EC] ring-1 ring-[#7A1E3A]/15 p-6">
<div className="tracking-tight text-[#0B2F4A] font-light font-geist">
                Solicitar contato
              </div>
<p className="mt-1 text-sm font-light text-slate-600 font-geist">
                Deixe seu WhatsApp com DDD. Retornamos assim que possível no
                plantão.
              </p>
<form className="mt-4 flex gap-2" onsubmit="event.preventDefault(); window.location.href='https://wa.me/5511999999999?text=Ol%C3%A1%21%20Gostaria%20de%20retorno%20do%20plant%C3%A3o.%20Meu%20n%C3%BAmero%20%C3%A9%20'+encodeURIComponent(this.phone.value);">
<input className="w-full px-4 py-3 rounded-2xl ring-1 focus:outline-none focus:ring-2 focus:ring-[#1D75A6]/40 text-sm bg-white ring-slate-200" name="phone" placeholder="Seu WhatsApp (DDD + número)" required="" type="tel"/>
<button className="px-6 py-3 rounded-2xl bg-[linear-gradient(135deg,#7A1E3A,#4A1024)] shadow-soft hover:brightness-110 transition-all text-sm whitespace-nowrap font-light text-white font-geist" type="submit">
                  Enviar
                </button>
</form>
</div>
</div>
<div className="lg:col-span-6 bg-[#F5F7FA] ring-1 ring-slate-200/60">
<div className="p-4 sm:p-6 h-full flex flex-col">
<div className="rounded-3xl overflow-hidden ring-1 shadow-soft flex-1 min-h-[300px] ring-slate-200 bg-white">
<div className="h-full w-full">
<iframe className="w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Avenida%20do%20Contorno,%204747%20-%2013%C2%BA%20andar%20-%20Sala%201308,%20Serra%20-%20Belo%20Horizonte%20-%20MG,%2030110-921&amp;output=embed" title="Mapa"></iframe>
</div>
</div>
</div>
</div>
</div>
<div className="border-t px-7 sm:px-10 py-7 border-slate-200">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="text-xs text-slate-500 font-light font-geist">
              © 2026 Instituto Mineiro de Odontologia. Responsável Técnico:
              Dr(a). Nome Sobrenome — CRO/MG 12345.
            </div>
<div className="flex items-center gap-4 text-xs text-slate-500">
<a className="font-light hover:text-slate-700 font-geist" href="#">
                Política de Privacidade
              </a>
<a className="font-light hover:text-slate-700 font-geist" href="#">
                Termos
              </a>
<a className="font-light hover:text-slate-700 font-geist" href="#">
                Instagram (em breve)
              </a>
</div>
</div>
</div>
</div>
</footer>

<a aria-label="WhatsApp" className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-[60px] h-[60px] bg-[#25D366] rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] animate-pulse-wa hover:scale-110 transition-transform text-white" href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Preciso%20de%20atendimento%20odontol%C3%B3gico%20de%20urg%C3%AAncia.">
<svg fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
</svg>
</a>
<textarea className="-edit" style={{fontSize: '20px', fontWeight: '600', fontFamily: '"Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif', color: 'rgb(31, 41, 51)', lineHeight: '28px', textAlign: 'start', textTransform: 'none', letterSpacing: '-0.5px', position: 'absolute', left: '828.7px', top: '1180.4px', width: '209.7px', height: '28px', boxSizing: 'border-box', padding: '0px', margin: '0px', border: 'none', outline: 'none', background: 'transparent', resize: 'none', overflow: 'auto', zIndex: '2147483647'}}></textarea>


    </>
  );
}
