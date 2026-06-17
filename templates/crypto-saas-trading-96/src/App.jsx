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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          const hero = document.getElementById('hero');
          const pointerGlow = document.getElementById('pointerGlow');
          const heroTitle = document.getElementById('heroTitle');
          const heroContent = document.getElementById('heroContent');
          const parallaxItems = document.querySelectorAll('.parallax');
          const stage = document.getElementById('stage');
          const ctaPrimary = document.getElementById('ctaPrimary');

          let rafId = null;
          let mouseX = window.innerWidth / 2;
          let mouseY = window.innerHeight / 3;

          function updateScene() {
            const rect = hero.getBoundingClientRect();
            const relX = ((mouseX - rect.left) / rect.width - 0.5);
            const relY = ((mouseY - rect.top) / rect.height - 0.5);

            pointerGlow.style.left = mouseX - rect.left + 'px';
            pointerGlow.style.top = mouseY - rect.top + 'px';

            heroTitle.style.transform = `perspective(75rem) rotateX(${(-relY * 6).toFixed(2)}deg) rotateY(${(relX * 10).toFixed(2)}deg) translateZ(0)`;
            heroContent.style.transform = `translate3d(${(relX * 0.8).toFixed(2)}rem, ${(relY * 0.8).toFixed(2)}rem, 0)`;

            stage.style.transform = `perspective(75rem) rotateX(${(-relY * 3).toFixed(2)}deg) rotateY(${(relX * 4).toFixed(2)}deg) translateZ(0)`;

            parallaxItems.forEach((item) => {
              const depth = Number(item.getAttribute('data-depth')) || 10;
              const x = relX * depth;
              const y = relY * depth;
              item.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            });

            rafId = null;
          }

          function onMove(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!rafId) rafId = requestAnimationFrame(updateScene);
          }

          hero.addEventListener('mousemove', onMove);
          hero.addEventListener('mouseleave', () => {
            mouseX = window.innerWidth / 2;
            mouseY = hero.getBoundingClientRect().top + hero.offsetHeight * 0.35;
            if (!rafId) rafId = requestAnimationFrame(updateScene);
          });

          ctaPrimary.addEventListener('mousemove', (e) => {
            const rect = ctaPrimary.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            ctaPrimary.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,.22), rgba(251,191,36,1) 26%, rgba(251,191,36,.96) 54%)`;
          });

          ctaPrimary.addEventListener('mouseleave', () => {
            ctaPrimary.style.background = '#fbbf24';
          });

          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.animate(
                  [
                    { opacity: .7, transform: 'translateY(1rem) scale(.985)' },
                    { opacity: 1, transform: 'translateY(0) scale(1)' }
                  ],
                  { duration: 900, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards' }
                );
                observer.unobserve(entry.target);
              }
            });
          }, { threshold: 0.25 });

          observer.observe(stage);
          updateScene();
        
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
      
<div className="min-h-screen overflow-x-hidden">
<header className="w-full border-b border-white/5 bg-black/20 backdrop-blur-xl">
<div className="mx-auto flex w-full max-w-[120rem] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-white">BF</div>
<div className="text-sm font-semibold tracking-tight text-white/90">PODX</div>
</div>
<nav className="hidden items-center gap-6 lg:flex">
<a className="text-sm font-normal text-white/80 transition hover:text-white" href="#">Buy Crypto</a>
<a className="text-sm font-normal text-white/80 transition hover:text-white" href="#">Markets</a>
<a className="text-sm font-normal text-white/80 transition hover:text-white" href="#">Spot</a>
<a className="text-sm font-normal text-white/80 transition hover:text-white" href="#">Futures</a>
<a className="text-sm font-normal text-white/80 transition hover:text-white" href="#">Copy Trading</a>
<a className="text-sm font-normal text-white/80 transition hover:text-white" href="#">Earn</a>
<a className="text-sm font-normal text-white/80 transition hover:text-white" href="#">More</a>
</nav>
</div>
<div className="flex items-center gap-3 sm:gap-4">
<button className="hidden rounded-lg bg-amber-400 px-4 py-2 text-sm font-medium text-black transition hover:bg-amber-300 sm:inline-flex">Deposit</button>
<button className="hidden text-sm font-normal text-white/80 transition hover:text-white md:inline-flex">Assets</button>
<button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white">
<iconify-icon height="1rem" icon="solar:download-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</button>
<button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white">
<iconify-icon height="1rem" icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</button>
<button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white">
<iconify-icon height="1rem" icon="solar:moon-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="relative">
<section className="relative isolate overflow-hidden" id="hero">
<div className="absolute inset-0">
<div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(255,170,0,.10) 0%, rgba(54,211,153,.05) 35%, rgba(99,102,241,.06) 60%, transparent 75%)'}}></div>
<div className="absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl transition-all duration-300" id="pointerGlow" style={{left: '50%', top: '35%', background: 'radial-gradient(circle, rgba(255,196,72,.16) 0%, rgba(56,189,248,.10) 35%, rgba(34,197,94,.05) 55%, transparent 72%)'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
</div>
<div className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="parallax absolute left-[12%] top-[28%] h-3 w-3 rounded-full bg-cyan-300/70 blur-[0.1rem]" data-depth="10" style={{boxShadow: '0 0 2rem rgba(103,232,249,.55)', animation: 'floatA 7s ease-in-out infinite'}}></div>
<div className="parallax absolute right-[14%] top-[22%] h-4 w-4 rounded-full bg-amber-300/70 blur-[0.15rem]" data-depth="18" style={{boxShadow: '0 0 2.5rem rgba(253,224,71,.45)', animation: 'floatB 8s ease-in-out infinite'}}></div>
<div className="parallax absolute left-[20%] bottom-[24%] h-2 w-2 rounded-full bg-emerald-300/70 blur-[0.1rem]" data-depth="14" style={{boxShadow: '0 0 1.5rem rgba(110,231,183,.45)', animation: 'floatC 6s ease-in-out infinite'}}></div>
<div className="parallax absolute right-[24%] bottom-[18%] h-3 w-3 rounded-full bg-sky-300/60 blur-[0.1rem]" data-depth="9" style={{boxShadow: '0 0 2rem rgba(125,211,252,.35)', animation: 'floatA 9s ease-in-out infinite'}}></div>
<div className="parallax absolute left-[8%] top-[18%] h-40 w-40 rounded-full blur-3xl" data-depth="20" style={{background: 'radial-gradient(circle, rgba(59,130,246,.08), transparent 70%)'}}></div>
<div className="parallax absolute right-[10%] top-[14%] h-52 w-52 rounded-full blur-3xl" data-depth="16" style={{background: 'radial-gradient(circle, rgba(251,191,36,.08), transparent 70%)'}}></div>
<div className="parallax absolute left-1/2 top-[58%] h-64 w-64 -translate-x-1/2 rounded-full blur-3xl" data-depth="12" style={{background: 'radial-gradient(circle, rgba(20,184,166,.07), transparent 72%)'}}></div>
</div>
<div className="relative mx-auto flex min-h-[40rem] w-full max-w-[120rem] items-center justify-center px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
<div className="w-full max-w-5xl text-center">
<div className="mx-auto flex max-w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-sm font-normal text-white/90 backdrop-blur-2xl opacity-0" id="heroCard" style={{boxShadow: 'inset 0 -.1rem .2rem rgba(255, 255, 255, .08), inset 0 .1rem .2rem rgba(255, 255, 255, .18), 0 0 0 1px rgba(255,255,255,.02)', animation: 'fadeUp .8s ease forwards .05s, capsulePulse 4s ease-in-out infinite 1s'}}>
<div className="relative flex h-6 w-6 items-center justify-center rounded-full">
<div className="absolute inset-0 rounded-full" style={{background: 'radial-gradient(circle, rgba(255,194,83,.25), rgba(56,189,248,.12), transparent 72%)'}}></div>
<iconify-icon height="1rem" icon="solar:star-linear" style={{strokeWidth: '1.5', color: '#f8fafc'}} width="1rem"></iconify-icon>
</div>
<span className="whitespace-nowrap">Your AI trading copilot for BloFin</span>
</div>
<div className="mt-10 sm:mt-12" id="heroContent" style={{transformStyle: 'preserve-3d'}}>
<h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-white opacity-0 sm:text-6xl lg:text-7xl xl:text-8xl" id="heroTitle" style={{textShadow: '0 0 2rem rgba(255,255,255,.04)', animation: 'fadeUp 1s ease forwards .15s'}}>
<span className="inline-block">BloFin</span>
<span className="inline-block bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent"> PodX</span>
</h1>
<p className="mx-auto mt-6 max-w-3xl text-base font-normal leading-8 text-white/60 opacity-0 sm:text-lg" style={{animation: 'fadeUp .9s ease forwards .28s'}}>
                No installation, no coding, just chat to act. From market insights and macro monitoring to trading, backtesting, and scheduled tasks — all in one conversation.
              </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row" style={{animation: 'fadeUp .9s ease forwards .42s'}}>
<a className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-amber-400 px-8 py-4 text-base font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300" href="#" id="ctaPrimary">
<span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" style={{background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,.35), transparent 60%)'}}></span>
<span className="absolute -inset-x-6 -inset-y-3 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" style={{background: 'radial-gradient(circle, rgba(251,191,36,.35), transparent 65%)'}}></span>
<span className="relative inline-flex items-center gap-3">
<iconify-icon height="1.25rem" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="1.25rem"></iconify-icon>
                    Launch on Telegram
                  </span>
</a>
<a className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-base font-normal text-white/85 backdrop-blur-xl transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white" href="#">
<iconify-icon height="1.25rem" icon="solar:play-linear" style={{strokeWidth: '1.5'}} width="1.25rem"></iconify-icon>
                  Watch Demo
                </a>
</div>
</div>
<div className="relative mx-auto mt-16 max-w-4xl opacity-0" style={{animation: 'fadeUp 1s ease forwards .55s'}}>
<div className="absolute inset-0 rounded-[2rem] blur-3xl" style={{background: 'radial-gradient(circle at 50% 0%, rgba(251,191,36,.08), rgba(56,189,248,.05), transparent 75%)'}}></div>
<div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-2xl sm:p-6" id="stage" style={{boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, .06), 0 1rem 4rem rgba(0,0,0,.35)'}}>
<div className="absolute inset-0 opacity-60" style="background:
                radial-gradient(circle at 15% 20%, rgba(56,189,248,.12), transparent 22%),
                radial-gradient(circle at 80% 18%, rgba(251,191,36,.11), transparent 20%),
                radial-gradient(circle at 50% 80%, rgba(16,185,129,.08), transparent 24%);"></div>
<div className="relative grid gap-4 lg:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-left">
<div className="flex items-center justify-between">
<div className="text-xs font-normal uppercase tracking-[0.18em] text-white/40">Market Intel</div>
<iconify-icon height="1rem" icon="solar:pulse-linear" style={{strokeWidth: '1.5', color: 'rgba(255,255,255,.5)'}} width="1rem"></iconify-icon>
</div>
<div className="mt-4 space-y-3">
<div className="h-2 w-3/4 rounded-full bg-white/10"></div>
<div className="h-2 w-full rounded-full bg-white/5"></div>
<div className="h-2 w-5/6 rounded-full bg-white/5"></div>
</div>
<div className="mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-xs font-normal text-cyan-100/90">
                      BTC funding rate turning positive across majors
                    </div>
</div>
<div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-left">
<div className="flex items-center justify-between">
<div className="text-xs font-normal uppercase tracking-[0.18em] text-white/40">Copilot Chat</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400" style={{boxShadow: '0 0 1rem rgba(52,211,153,.8)', animation: 'blink 2s ease-in-out infinite'}}></span>
<span className="text-xs text-white/45">Live</span>
</div>
</div>
<div className="mt-4 space-y-3 text-xs font-normal text-white/75">
<div className="rounded-xl bg-white/[0.05] px-3 py-2">Summarize macro drivers for ETH this week</div>
<div className="rounded-xl bg-amber-400/90 px-3 py-2 text-black">Risk sentiment improving, ETF flow stabilizing...</div>
<div className="rounded-xl bg-white/[0.05] px-3 py-2">Backtest a momentum strategy on 4H</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-left">
<div className="flex items-center justify-between">
<div className="text-xs font-normal uppercase tracking-[0.18em] text-white/40">Automation</div>
<iconify-icon height="1rem" icon="solar:alarm-linear" style={{strokeWidth: '1.5', color: 'rgba(255,255,255,.5)'}} width="1rem"></iconify-icon>
</div>
<div className="mt-4 space-y-3">
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
<div className="text-xs text-white/85">Trigger</div>
<div className="mt-1 text-xs text-white/45">If BTC breaks above local resistance</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
<div className="text-xs text-white/85">Action</div>
<div className="mt-1 text-xs text-white/45">Notify + generate entry plan</div>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent"></div>
</div>
</div>
</div>
</div>
<style>
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(1.25rem); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes floatA {
            0%,100% { transform: translate3d(0,0,0) scale(1); }
            50% { transform: translate3d(0,-0.9rem,0) scale(1.08); }
          }
          @keyframes floatB {
            0%,100% { transform: translate3d(0,0,0) scale(1); }
            50% { transform: translate3d(0,1rem,0) scale(.96); }
          }
          @keyframes floatC {
            0%,100% { transform: translate3d(0,0,0) scale(1); }
            50% { transform: translate3d(.5rem,-.7rem,0) scale(1.04); }
          }
          @keyframes blink {
            0%,100% { opacity: 1; }
            50% { opacity: .4; }
          }
          @keyframes capsulePulse {
            0%,100% { box-shadow: inset 0 -.1rem .2rem rgba(255,255,255,.08), inset 0 .1rem .2rem rgba(255,255,255,.18), 0 0 0 1px rgba(255,255,255,.02), 0 0 0 rgba(251,191,36,0); }
            50% { box-shadow: inset 0 -.1rem .2rem rgba(255,255,255,.08), inset 0 .1rem .2rem rgba(255,255,255,.18), 0 0 0 1px rgba(255,255,255,.03), 0 0 2rem rgba(56,189,248,.08); }
          }
        </style>

</section>
</main>
</div>

    </>
  );
}
