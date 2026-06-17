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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    (function () {
      const btn = document.getElementById('vxMobileBtn');
      const menu = document.getElementById('vxMobileMenu');
      if (btn && menu) {
        btn.addEventListener('click', () => menu.classList.toggle('hidden'));
        // Close menu after clicking a link
        menu.querySelectorAll('a').forEach(a => {
          a.addEventListener('click', () => menu.classList.add('hidden'));
        });
      }
      const y = document.getElementById('vxYear');
      if (y) y.textContent = String(new Date().getFullYear());
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
      
<div className="vx-noise"></div>

<header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur supports-[backdrop-filter]:bg-[#050505]/60">
<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
<a aria-label="VIONYX | Ir a Sistemas" className="flex items-center" href="/sistemas">
<span className="text-sm font-semibold tracking-[0.28em] text-white/90">VIONYX</span>
</a>
<nav className="hidden md:flex flex-1 items-center justify-center gap-8">
<a className="text-sm font-semibold text-white relative" href="/sistemas">
          Sistemas
          <span className="absolute left-0 -bottom-6 h-[2px] w-full bg-[#C6A98C]/70"></span>
</a>
<a className="text-sm text-white/70 hover:text-white transition" href="/continuum">Continuum</a>
<a className="text-sm text-white/70 hover:text-white transition" href="/archivo">Archivo</a>
<a className="text-sm text-white/70 hover:text-white transition" href="/manifiesto">Manifiesto</a>
</nav>
<div className="hidden md:flex items-center">
<a className="vx-btn-primary rounded-full px-6 py-2 text-xs font-semibold tracking-wide" href="/iniciar-test">
          Iniciar test <span className="ml-1 text-white/70">→</span>
</a>
</div>
<button aria-label="Abrir menú" className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 text-white/80" id="vxMobileBtn">
<span className="iconify" data-height="22" data-icon="lucide:menu" data-width="22"></span>
</button>
</div>

<div className="md:hidden hidden border-t border-white/10 bg-[#050505]/95" id="vxMobileMenu">
<div className="mx-auto max-w-6xl px-4 py-4 grid gap-2">
<a className="rounded-xl px-4 py-3 text-white bg-white/5" href="/sistemas">Sistemas</a>
<a className="rounded-xl px-4 py-3 text-white/80 hover:bg-white/5" href="/continuum">Continuum</a>
<a className="rounded-xl px-4 py-3 text-white/80 hover:bg-white/5" href="/archivo">Archivo</a>
<a className="rounded-xl px-4 py-3 text-white/80 hover:bg-white/5" href="/manifiesto">Manifiesto</a>
<a className="mt-2 text-center rounded-full border border-[#C6A98C]/30 bg-[#C6A98C]/10 px-4 py-3 text-sm font-semibold text-[#C6A98C]" href="/iniciar-test">
          Iniciar test →
        </a>
</div>
</div>
</header>
<main className="relative z-10">

<section className="relative flex h-[82vh] w-full items-center overflow-hidden md:h-screen min-h-[600px]">

<div className="vx-hero-bg absolute inset-0 z-0">
<video aria-hidden="true" autoplay="" className="h-full w-full object-cover motion-reduce:hidden" loop="" muted="" playsinline="" poster="[PLACEHOLDER: POSTER_IMAGE_JPG]">
<source media="(min-width: 768px)" src="[PLACEHOLDER: VIDEO_URL_DESKTOP_16x9]" type="video/mp4"/>
<source src="[PLACEHOLDER: VIDEO_URL_MOBILE_9x16]" type="video/mp4"/>
</video>
<div className="hidden h-full w-full bg-[#050505] bg-[url('[PLACEHOLDER: POSTER_IMAGE_JPG]')] bg-cover bg-center motion-reduce:block"></div>
<div className="absolute inset-0 bg-[#050505]/60"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent opacity-90"></div>
<div className="absolute -left-[10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#C6A98C] opacity-[0.03] blur-[100px]"></div>
</div>

<div className="vx-hero-content relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8">
<div className="max-w-2xl text-center md:text-left fade-in-up">
<h1 className="text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-7xl lg:text-[5rem]">
            Sistemas <br className="hidden md:block"/> <span className="text-white">VIONYX</span>
</h1>
<p className="mt-6 text-lg font-light leading-relaxed text-white/90 md:text-2xl md:leading-normal">
            Protocolos premium, diseñados para objetivos concretos. Elegí tu Sistema y empezá con claridad.
          </p>
<div className="my-6 h-px w-24 bg-gradient-to-r from-[#C6A98C]/50 to-transparent mx-auto md:mx-0"></div>
<p className="mb-10 text-sm leading-relaxed text-white/60 md:max-w-md">
            Sin promesas mágicas. Con criterio, consistencia y una arquitectura simple.
          </p>
<div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
<a className="vx-btn-primary group flex h-14 w-full min-w-[200px] items-center justify-center rounded-full px-8 text-sm font-semibold tracking-wide sm:w-auto" href="/iniciar-test">
              Iniciar test
              <span className="iconify ml-2 transition-transform duration-300 group-hover:translate-x-1" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</a>
<a className="vx-btn-secondary flex h-14 w-full min-w-[180px] items-center justify-center rounded-full px-8 text-sm font-medium tracking-wide sm:w-auto" href="#catalogo">
              Ver Sistemas
            </a>
</div>
</div>
</div>
<div className="vx-hero-content absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce md:left-8 md:translate-x-0">
<span className="iconify text-white/30" data-height="24" data-icon="lucide:chevron-down" data-width="24"></span>
</div>
</section>

<div className="border-y border-white/5 bg-white/[0.01]">
<div className="mx-auto max-w-7xl px-6 py-6">
<div className="grid grid-cols-2 gap-y-6 gap-x-4 md:grid-cols-4 md:gap-8">
<div className="flex items-center gap-3">
<span className="iconify text-[#C6A98C] shrink-0" data-icon="lucide:target" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-xs font-medium tracking-wide text-white/70">Protocolos por objetivo</span>
</div>
<div className="flex items-center gap-3">
<span className="iconify text-[#C6A98C] shrink-0" data-icon="lucide:flask-conical" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-xs font-medium tracking-wide text-white/70">Selección curada de fórmulas</span>
</div>
<div className="flex items-center gap-3">
<span className="iconify text-[#C6A98C] shrink-0" data-icon="lucide:book-open" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-xs font-medium tracking-wide text-white/70">Guía simple para empezar</span>
</div>
<div className="flex items-center gap-3">
<span className="iconify text-[#C6A98C] shrink-0" data-icon="lucide:map-pin" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-xs font-medium tracking-wide text-white/70">Experiencia premium en Argentina</span>
</div>
</div>
<div className="mt-6 text-center">
<p className="text-[10px] text-white/30">Los resultados varían según hábitos, constancia y contexto personal.</p>
</div>
</div>
</div>

<section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
<div className="text-center mb-16">
<h2 className="text-2xl font-medium tracking-tight text-white">Cómo funciona</h2>
</div>
<div className="grid md:grid-cols-3 gap-10 relative">
<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C6A98C]/30 to-transparent"></div>
<div className="relative text-center group">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#050505] border border-[#C6A98C]/50 text-[#C6A98C] font-semibold mb-6 z-10 relative shadow-[0_0_20px_rgba(198,169,140,0.15)]">01</div>
<h3 className="text-lg font-medium text-white mb-2">Elegís tu objetivo</h3>
<p className="text-sm text-white/50 leading-relaxed max-w-[200px] mx-auto">O hacés el test para entender tu prioridad.</p>
</div>
<div className="relative text-center group">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#050505] border border-[#C6A98C]/50 text-[#C6A98C] font-semibold mb-6 z-10 relative shadow-[0_0_20px_rgba(198,169,140,0.15)]">02</div>
<h3 className="text-lg font-medium text-white mb-2">Te orientás con un Sistema</h3>
<p className="text-sm text-white/50 leading-relaxed max-w-[200px] mx-auto">Pre-armado. Sin adivinanzas. Con estructura.</p>
</div>
<div className="relative text-center group">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#050505] border border-[#C6A98C]/50 text-[#C6A98C] font-semibold mb-6 z-10 relative shadow-[0_0_20px_rgba(198,169,140,0.15)]">03</div>
<h3 className="text-lg font-medium text-white mb-2">Lo ejecutás con consistencia</h3>
<p className="text-sm text-white/50 leading-relaxed max-w-[200px] mx-auto">30 días de rutina simple y ajustes según respuesta.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#C6A98C] hover:text-white transition-colors border-b border-[#C6A98C]/30 pb-1" href="/iniciar-test">
          Iniciar test <span className="iconify ml-1" data-icon="lucide:arrow-right"></span>
</a>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-24" id="catalogo">
<div className="mb-12 md:mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white">Catálogo de Sistemas</h2>
<p className="mt-3 text-lg font-light text-white/60">Siete Sistemas. Siete direcciones. Una experiencia premium.</p>
</div>

<div className="vx-card relative mb-8 overflow-hidden rounded-2xl p-8 md:p-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
<div className="absolute right-0 top-0 -z-10 h-full w-2/3 bg-gradient-to-l from-[#C6A98C]/10 to-transparent opacity-50"></div>
<div className="flex flex-col items-start relative z-10">
<div className="mb-5 inline-flex items-center gap-2 rounded bg-[#C6A98C]/10 px-3 py-1 text-[10px] font-bold tracking-widest text-[#C6A98C] uppercase border border-[#C6A98C]/20">
            SYS 01 | Flagship
          </div>
<h3 className="text-5xl font-medium tracking-tighter text-white mb-2">EON</h3>
<p className="text-lg text-[#C6A98C] mb-6">Protocolo Mitocondrial</p>
<p className="max-w-md text-base leading-relaxed text-white/80 mb-6">
            Diseñado para acompañar energía y foco de rendimiento diario, dentro de una rutina simple.
          </p>
<div className="w-full border-t border-white/10 my-6"></div>
<div className="mb-6">
<span className="text-[10px] uppercase tracking-widest text-white/40 block mb-2">Incluye</span>
<p className="text-sm font-medium text-white/90">NMN 600 · DNA Production · Magnesio Five Complex</p>
</div>
<div className="mb-8 space-y-1">
<div className="text-xs text-white/40">MSRP ARS 252.000</div>
<div className="text-xs text-white/60">Invitado ARS 214.000</div>
<div className="text-sm font-semibold text-[#C6A98C]">Miembro ARS 189.000</div>
</div>
<div className="flex flex-col sm:flex-row w-full gap-4">
<a className="vx-btn-primary flex h-12 flex-1 items-center justify-center rounded-full px-6 text-sm font-semibold" href="/sistema-01-eon">
              Ver Sistema
            </a>
<a className="vx-btn-secondary flex h-12 flex-1 items-center justify-center rounded-full px-6 text-sm font-medium" href="/iniciar-test">
              Iniciar test
            </a>
</div>
</div>
<div className="mt-8 flex h-[400px] w-full items-center justify-center rounded-xl border border-white/5 bg-black/40 lg:mt-0 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://api.iconify.design/lucide:zap.svg?color=%23C6A98C')] bg-center bg-no-repeat opacity-5 scale-150"></div>
<span className="text-[10px] uppercase tracking-widest text-white/20 text-center relative z-10">
            [Placeholder: Visual EON]<br/>Macro Ciencia + Luz Bronce<br/>16:9 o 4:5
          </span>
</div>
</div>

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
<div className="vx-card flex flex-col justify-between rounded-2xl p-6 md:p-8">
<div>
<div className="mb-4 inline-block rounded border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-bold tracking-widest text-white/50">SYS 15</div>
<h3 className="text-3xl font-medium tracking-tight text-white">ARKHÉ</h3>
<p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#C6A98C]">Protocolo Metabólico</p>
<div className="mt-6 border-t border-white/5 pt-4">
<span className="text-[10px] uppercase tracking-widest text-white/30">Incluye</span>
<p className="mt-1 text-sm text-white/80">Termo Plus · Prebiótico + Glutamina · Vitamina D3 + K2</p>
</div>
</div>
<div className="mt-8">
<div className="mb-5 space-y-1">
<div className="text-[10px] text-white/30">MSRP ARS 222.000</div>
<div className="text-[11px] text-white/50">Invitado ARS 189.000</div>
<div className="text-xs font-semibold text-[#C6A98C]">Miembro ARS 166.000</div>
</div>
<a className="vx-btn-secondary flex h-10 w-full items-center justify-center rounded-full text-xs font-medium hover:border-[#C6A98C]/50 hover:text-[#C6A98C]" href="/sistema-15-arkhe">
              Ver Sistema
            </a>
</div>
</div>
<div className="vx-card flex flex-col justify-between rounded-2xl p-6 md:p-8">
<div>
<div className="mb-4 inline-block rounded border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-bold tracking-widest text-white/50">SYS 33</div>
<h3 className="text-3xl font-medium tracking-tight text-white">KAIROS</h3>
<p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#C6A98C]">Protocolo Estrés</p>
<div className="mt-6 border-t border-white/5 pt-4">
<span className="text-[10px] uppercase tracking-widest text-white/30">Incluye</span>
<p className="mt-1 text-sm text-white/80">Adaptógenos Max · Omega-3 · Magnesio Five</p>
</div>
</div>
<div className="mt-8">
<div className="mb-5 space-y-1">
<div className="text-[10px] text-white/30">MSRP ARS 282.000</div>
<div className="text-[11px] text-white/50">Invitado ARS 240.000</div>
<div className="text-xs font-semibold text-[#C6A98C]">Miembro ARS 212.000</div>
</div>
<a className="vx-btn-secondary flex h-10 w-full items-center justify-center rounded-full text-xs font-medium hover:border-[#C6A98C]/50 hover:text-[#C6A98C]" href="/sistema-33-kairos">
              Ver Sistema
            </a>
</div>
</div>
<div className="vx-card flex flex-col justify-between rounded-2xl p-6 md:p-8">
<div>
<div className="mb-4 inline-block rounded border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-bold tracking-widest text-white/50">SYS 42</div>
<h3 className="text-3xl font-medium tracking-tight text-white">NOUS</h3>
<p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#C6A98C]">Protocolo Cognitivo</p>
<div className="mt-6 border-t border-white/5 pt-4">
<span className="text-[10px] uppercase tracking-widest text-white/30">Incluye</span>
<p className="mt-1 text-sm text-white/80">IQ Power · Adaptógenos Max · Omega-3 + Luteína</p>
</div>
</div>
<div className="mt-8">
<div className="mb-5 space-y-1">
<div className="text-[10px] text-white/30">MSRP ARS 282.000</div>
<div className="text-[11px] text-white/50">Invitado ARS 240.000</div>
<div className="text-xs font-semibold text-[#C6A98C]">Miembro ARS 212.000</div>
</div>
<a className="vx-btn-secondary flex h-10 w-full items-center justify-center rounded-full text-xs font-medium hover:border-[#C6A98C]/50 hover:text-[#C6A98C]" href="/sistema-42-nous">
              Ver Sistema
            </a>
</div>
</div>
<div className="vx-card flex flex-col justify-between rounded-2xl p-6 md:p-8">
<div>
<div className="mb-4 inline-block rounded border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-bold tracking-widest text-white/50">SYS 53</div>
<h3 className="text-3xl font-medium tracking-tight text-white">HELIX</h3>
<p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#C6A98C]">Protocolo Estructura</p>
<div className="mt-6 border-t border-white/5 pt-4">
<span className="text-[10px] uppercase tracking-widest text-white/30">Incluye</span>
<p className="mt-1 text-sm text-white/80">Royal Collagen · Espermidina 600 · NAC + Glicina</p>
</div>
</div>
<div className="mt-8">
<div className="mb-5 space-y-1">
<div className="text-[10px] text-white/30">MSRP ARS 252.000</div>
<div className="text-[11px] text-white/50">Invitado ARS 214.000</div>
<div className="text-xs font-semibold text-[#C6A98C]">Miembro ARS 189.000</div>
</div>
<a className="vx-btn-secondary flex h-10 w-full items-center justify-center rounded-full text-xs font-medium hover:border-[#C6A98C]/50 hover:text-[#C6A98C]" href="/sistema-53-helix">
              Ver Sistema
            </a>
</div>
</div>
<div className="vx-card flex flex-col justify-between rounded-2xl p-6 md:p-8">
<div>
<div className="mb-4 inline-block rounded border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-bold tracking-widest text-white/50">SYS 55</div>
<h3 className="text-3xl font-medium tracking-tight text-white">AXIOMA</h3>
<p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#C6A98C]">Protocolo Inflamación</p>
<div className="mt-6 border-t border-white/5 pt-4">
<span className="text-[10px] uppercase tracking-widest text-white/30">Incluye</span>
<p className="mt-1 text-sm text-white/80">Activador Nrf2 · Astaxantina · Glutatión Liposomal</p>
</div>
</div>
<div className="mt-8">
<div className="mb-5 space-y-1">
<div className="text-[10px] text-white/30">MSRP ARS 259.000</div>
<div className="text-[11px] text-white/50">Invitado ARS 220.000</div>
<div className="text-xs font-semibold text-[#C6A98C]">Miembro ARS 194.000</div>
</div>
<a className="vx-btn-secondary flex h-10 w-full items-center justify-center rounded-full text-xs font-medium hover:border-[#C6A98C]/50 hover:text-[#C6A98C]" href="/sistema-55-axioma">
              Ver Sistema
            </a>
</div>
</div>
<div className="vx-card flex flex-col justify-between rounded-2xl p-6 md:p-8">
<div>
<div className="mb-4 inline-block rounded border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-bold tracking-widest text-white/50">SYS 97</div>
<h3 className="text-3xl font-medium tracking-tight text-white">NOX</h3>
<p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#C6A98C]">Protocolo Recuperación</p>
<div className="mt-6 border-t border-white/5 pt-4">
<span className="text-[10px] uppercase tracking-widest text-white/30">Incluye</span>
<p className="mt-1 text-sm text-white/80">Gaba 600 · Magnesio Five Complex · Metionina de Zinc</p>
</div>
</div>
<div className="mt-8">
<div className="mb-5 space-y-1">
<div className="text-[10px] text-white/30">MSRP ARS 236.000</div>
<div className="text-[11px] text-white/50">Invitado ARS 201.000</div>
<div className="text-xs font-semibold text-[#C6A98C]">Miembro ARS 177.000</div>
</div>
<a className="vx-btn-secondary flex h-10 w-full items-center justify-center rounded-full text-xs font-medium hover:border-[#C6A98C]/50 hover:text-[#C6A98C]" href="/sistema-97-nox">
              Ver Sistema
            </a>
</div>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-sm text-white/50 mb-4">¿No sabés cuál elegir?</p>
<a className="vx-btn-primary inline-flex h-10 items-center rounded-full px-6 text-xs font-semibold tracking-wide" href="/iniciar-test">
          Iniciar test (60s)
        </a>
</div>
</section>

<section className="border-t border-white/5 bg-white/[0.01] px-6 py-20">
<div className="mx-auto max-w-6xl">
<h2 className="mb-12 text-center text-2xl font-medium text-white">Por qué un Sistema <span className="text-white/40">(y no mil cosas sueltas)</span></h2>
<div className="grid gap-8 md:grid-cols-4 text-center md:text-left">
<div className="p-4">
<h3 className="text-lg font-medium mb-2 text-[#C6A98C]">Dirección</h3>
<p className="text-sm text-white/60">Objetivo claro. No tomás por tomar, sino para mover una aguja específica.</p>
</div>
<div className="p-4">
<h3 className="text-lg font-medium mb-2 text-[#C6A98C]">Curaduría</h3>
<p className="text-sm text-white/60">Menos ruido. Combinaciones sinérgicas sin duplicidades innecesarias.</p>
</div>
<div className="p-4">
<h3 className="text-lg font-medium mb-2 text-[#C6A98C]">Consistencia</h3>
<p className="text-sm text-white/60">Rutina simple. Diseñado para sostenerse en el tiempo.</p>
</div>
<div className="p-4">
<h3 className="text-lg font-medium mb-2 text-[#C6A98C]">Premium</h3>
<p className="text-sm text-white/60">Experiencia cuidada. Desde la selección hasta el soporte.</p>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-xs text-white/30 italic max-w-2xl mx-auto">
            "Los suplementos no reemplazan hábitos. Funcionan mejor cuando acompañan sueño, movimiento, alimentación y constancia."
          </p>
</div>
</div>
</section>

<section className="px-6 py-20">
<div className="mx-auto max-w-4xl vx-card rounded-2xl p-8 md:p-12 text-center">
<h2 className="text-2xl font-medium text-white mb-8">Confianza, sin humo</h2>
<div className="grid gap-4 text-left max-w-lg mx-auto mb-10">
<div className="flex items-start gap-3">
<span className="iconify mt-1 text-[#C6A98C]" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-white/70">Protocolos por objetivo, con enfoque práctico</span>
</div>
<div className="flex items-start gap-3">
<span className="iconify mt-1 text-[#C6A98C]" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-white/70">Selección curada de fórmulas dentro de un Sistema</span>
</div>
<div className="flex items-start gap-3">
<span className="iconify mt-1 text-[#C6A98C]" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-white/70">Lenguaje claro: qué es, para quién es, y cómo se usa</span>
</div>
<div className="flex items-start gap-3">
<span className="iconify mt-1 text-[#C6A98C]" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-white/70">Actualizaciones editoriales en Continuum</span>
</div>
</div>
<div className="mb-10 flex flex-wrap justify-center gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="h-8 w-24 bg-white/10 rounded border border-white/10 flex items-center justify-center text-[8px] uppercase tracking-widest text-white/50">[Envío AR]</div>
<div className="h-8 w-24 bg-white/10 rounded border border-white/10 flex items-center justify-center text-[8px] uppercase tracking-widest text-white/50">[Pagos]</div>
<div className="h-8 w-24 bg-white/10 rounded border border-white/10 flex items-center justify-center text-[8px] uppercase tracking-widest text-white/50">[Soporte]</div>
</div>
<a className="text-sm font-semibold text-[#C6A98C] hover:text-white transition-colors border-b border-[#C6A98C]/30 pb-0.5" href="/continuum">
          Explorar Continuum <span className="iconify inline ml-1" data-icon="lucide:arrow-right"></span>
</a>
</div>
</section>

<section className="mx-auto max-w-3xl px-6 pb-24 pt-10">
<h2 className="mb-10 text-center text-xl font-medium text-white">Preguntas frecuentes</h2>
<div className="space-y-4">
<details className="group rounded-xl border border-white/5 bg-white/[0.02]">
<summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-white/90 transition hover:text-[#C6A98C]">
            ¿Qué es un Sistema VIONYX?
            <span className="iconify transition-transform group-open:rotate-180" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</summary>
<div className="px-5 pb-5 text-sm leading-relaxed text-white/60">
            Un protocolo curado orientado a un objetivo. Incluye productos seleccionados para una rutina simple.
          </div>
</details>
<details className="group rounded-xl border border-white/5 bg-white/[0.02]">
<summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-white/90 transition hover:text-[#C6A98C]">
            ¿Tengo que hacer el test sí o sí?
            <span className="iconify transition-transform group-open:rotate-180" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</summary>
<div className="px-5 pb-5 text-sm leading-relaxed text-white/60">
            No. Podés elegir directo desde el catálogo. El test solo ayuda a orientar.
          </div>
</details>
<details className="group rounded-xl border border-white/5 bg-white/[0.02]">
<summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-white/90 transition hover:text-[#C6A98C]">
            ¿Esto reemplaza una consulta médica?
            <span className="iconify transition-transform group-open:rotate-180" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</summary>
<div className="px-5 pb-5 text-sm leading-relaxed text-white/60">
            No. Si tenés una condición o medicación, consultá a un profesional de salud.
          </div>
</details>
<details className="group rounded-xl border border-white/5 bg-white/[0.02]">
<summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-white/90 transition hover:text-[#C6A98C]">
            ¿Dónde aprendo más sin vueltas?
            <span className="iconify transition-transform group-open:rotate-180" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</summary>
<div className="px-5 pb-5 text-sm leading-relaxed text-white/60">
            En Continuum y Archivo publicamos guías y contenido editorial.
          </div>
</details>
</div>
</section>

<section className="relative border-t border-white/10 px-6 py-24 text-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-black via-[#080808] to-black"></div>
<div className="absolute top-0 left-1/2 w-3/4 h-[1px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C6A98C]/40 to-transparent"></div>
<div className="relative z-10 mx-auto max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Elegí tu Sistema. Empezá hoy.</h2>
<p className="text-white/60 mb-10">Si querés orientación, el test te guía en menos de 2 minutos.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="vx-btn-primary h-12 min-w-[180px] flex items-center justify-center rounded-full text-sm font-semibold" href="/iniciar-test">
            Iniciar test
          </a>
<a className="vx-btn-secondary h-12 min-w-[180px] flex items-center justify-center rounded-full text-sm font-medium" href="#catalogo">
            Ver Catálogo
          </a>
</div>
</div>
</section>

<div className="bg-[#050505] px-6 py-8 border-t border-white/5">
<div className="mx-auto max-w-4xl text-center">
<p className="text-[10px] leading-relaxed text-white/30">
          Los suplementos no son medicamentos. No diagnostican, tratan ni curan enfermedades. Los resultados varían según la persona y el contexto. Si estás embarazada, amamantando, o tomás medicación, consultá a un profesional. VIONYX opera en Argentina y realiza envíos nacionales.
        </p>
</div>
</div>
</main>

<footer className="border-t border-white/10 bg-black">
<div className="mx-auto max-w-6xl px-4 py-14">
<div className="grid gap-10 md:grid-cols-12">
<div className="md:col-span-5">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
<span className="text-[12px] font-semibold tracking-widest text-[#C6A98C]">VX</span>
</div>
<div>
<div className="text-sm font-semibold tracking-[0.22em] text-white/90">VIONYX</div>
</div>
</div>
<p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
            Sistemas de biología de precisión para ejecutar 30 días con método, trazabilidad y consistencia. Sin hype. Con claridad.
          </p>
</div>
<div className="md:col-span-7 grid gap-8 sm:grid-cols-2">
<div>
<div className="text-xs tracking-[0.22em] text-white/40">NAVEGACIÓN</div>
<ul className="mt-4 grid gap-2 text-sm">
<li><a className="text-white/70 hover:text-white transition" href="/sistemas">Sistemas</a></li>
<li><a className="text-white/70 hover:text-white transition" href="/iniciar-test">Test</a></li>
<li><a className="text-white/70 hover:text-white transition" href="/continuum">Continuum</a></li>
<li><a className="text-white/70 hover:text-white transition" href="/archivo">Archivo</a></li>
<li><a className="text-white/70 hover:text-white transition" href="/manifiesto">Manifiesto</a></li>
</ul>
</div>
<div>
<div className="text-xs tracking-[0.22em] text-white/40">LEGAL</div>
<ul className="mt-4 grid gap-2 text-sm">
<li><a className="text-white/70 hover:text-white transition" href="#">Privacidad</a></li>
<li><a className="text-white/70 hover:text-white transition" href="#">Términos</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
<div>© <span id="vxYear">2024</span> VIONYX. Buenos Aires, AR.</div>
<div className="tracking-[0.18em]">BIOLOGÍA DE PRECISIÓN. EJECUTABLE.</div>
</div>
</div>
</footer>


    </>
  );
}
