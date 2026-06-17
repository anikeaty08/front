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



      (function() {
        try { document.getElementById('year').textContent = new Date().getFullYear(); } catch (e) {}

        var shareBtn = document.getElementById('shareBtn');
        if (shareBtn) {
          shareBtn.addEventListener('click', async function() {
            var url = location.href;
            try {
              if (navigator.share && location.protocol.indexOf('http') === 0) {
                await navigator.share({
                  title: document.title || 'Xolotl XTLPRO10',
                  text: 'Conoce este proyecto:',
                  url: url
                });
                showToast('Se abrió el menú de compartir', 'success');
              } else {
                await navigator.clipboard.writeText(url);
                showToast('Enlace copiado al portapapeles', 'success');
              }
            } catch (err) {
              try {
                await navigator.clipboard.writeText(url);
                showToast('Enlace copiado al portapapeles', 'success');
              } catch (e2) {
                showToast('No se pudo compartir. Copia el enlace manualmente.', 'error');
              }
            }
          });
        }

        var toast = document.getElementById('toast');
        var toastMsg = document.getElementById('toastMsg');
        var toastIcon = document.getElementById('toastIcon');
        var toastClose = document.getElementById('toastClose');
        var hideTimer;

        function showToast(message, type) {
          if (!toast || !toastMsg || !toastIcon) return;
          toastMsg.textContent = message;

          // Success or error icon/color
          if (type === 'error') {
            toastIcon.className = "inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/5 text-rose-400";
            toastIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>';
          } else {
            toastIcon.className = "inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/5 text-emerald-400";
            toastIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 6 9 17l-5-5"/></svg>';
          }

          toast.classList.remove('hidden');
          clearTimeout(hideTimer);
          hideTimer = setTimeout(hideToast, 2600);
        }

        function hideToast() {
          if (!toast) return;
          toast.classList.add('hidden');
        }

        if (toastClose) toastClose.addEventListener('click', hideToast);

        // Expose for share handler
        window.showToast = showToast;
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-x-0 top-[-20%] mx-auto h-[36rem] w-[72rem] bg-gradient-to-b from-violet-500/15 via-fuchsia-500/10 to-transparent blur-3xl"></div>
<div className="absolute bottom-[-20%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-[120px]"></div>
<div className="absolute left-[-10%] top-[30%] h-[22rem] w-[22rem] rounded-full bg-cyan-400/10 blur-[120px]"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between border-b border-white/10">
<a className="group inline-flex items-center gap-2" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-sm font-semibold tracking-tight text-white transition-colors group-hover:bg-white/10">XO</span>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">Xolotl</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition-colors text-sm text-neutral-300" href="#features">Características</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#ports">Puertos</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#specs">Especificaciones</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#faq">Preguntas</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#support">Soporte</a>
</nav>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-3.5 py-2.5 text-sm font-semibold tracking-tight hover:bg-neutral-200 active:bg-neutral-300 transition-colors" href="#buy">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M10 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>
              Comprar
            </a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 md:py-24">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-neutral-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
      Disponible — consulta opciones
    </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
      Xolotl XTLPRO10
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Conectividad sin complicaciones</span>
</h1>
<p className="mt-6 text-base sm:text-lg text-neutral-300">
      La Docking Station Multipuerto Xolotl Modelo XTLPRO10 es la solución perfecta para quienes buscan maximizar la
      conectividad de sus dispositivos. Con un diseño intuitivo y funcional, esta estación cuenta con 9 puertos de
      multiposición para conectar múltiples dispositivos de manera eficiente y organizada, ideal para laptops, móviles y
      otras tecnologías.
    </p>
<p className="mt-4 text-base sm:text-lg text-neutral-300">
      Equipada con USB 3.0, garantiza transferencias rápidas y seguras. Su alimentación mediante USB‑C elimina fuentes
      externas, permitiendo un diseño compacto y portátil para casa, oficina o desplazamientos.
    </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-3 text-sm font-semibold tracking-tight hover:bg-neutral-200 active:bg-neutral-300 transition-colors shadow-sm" href="#buy">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14"></path>
</svg>
        Comprar
      </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/0 px-4 py-3 text-sm font-medium text-neutral-200 hover:text-white hover:bg-white/5 transition-colors" href="#demo">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
        Ver demo
      </a>

<button className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/0 px-4 py-3 text-sm font-medium text-neutral-200 hover:text-white hover:bg-white/5 transition-colors" id="shareBtn" type="button">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
<line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
</svg>
                Compartir
              </button>
</div>
<div className="mt-8 grid grid-cols-3 sm:flex sm:flex-wrap gap-3 text-xs text-neutral-300">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16M12 4v16"></path>
</svg>
        9 puertos
      </div>
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="10" rx="2" width="18" x="3" y="7"></rect>
<path d="M7 12h10"></path>
</svg>
        USB 3.0 (5Gbps)
      </div>
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 7h8M7 12h10M8 17h8"></path>
</svg>
        Alimentación USB‑C
      </div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-6 rounded-2xl bg-gradient-to-tr from-white/10 to-white/0 blur-xl"></div>
<div className="relative rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl">
<img alt="Docking station Xolotl XTLPRO10 en escritorio" className="aspect-[4/3] cursor-pointer w-full object-cover rounded-xl" onclick="window.location.href='https://res.cloudinary.com/dgh1qklpq/image/upload/v1761043058/dockstation-both_ed3xqv.jpg'" role="button" src="https://res.cloudinary.com/dgh1qklpq/image/upload/v1761043058/dockstation-both_ed3xqv.jpg"/>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<img alt="Acabado y diseño compacto" className="h-24 w-full rounded-lg object-cover border border-white/10" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<img alt="Espacio organizado" className="h-24 w-full rounded-lg object-cover border border-white/10" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<img alt="Conexiones confiables" className="h-24 w-full rounded-lg object-cover border border-white/10" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section aria-label="Confiado por" className="py-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between gap-6 border-y border-white/10 px-4 py-5 rounded-xl bg-white/5">
<p className="text-xs text-neutral-400">Pensado para casa, oficina y creadores</p>
<div className="hidden md:flex items-center gap-8 text-neutral-400">
<span className="text-sm font-semibold tracking-tight">XO</span>
<span className="text-sm font-semibold tracking-tight">PR</span>
<span className="text-sm font-semibold tracking-tight">WK</span>
<span className="text-sm font-semibold tracking-tight">DS</span>
<span className="text-sm font-semibold tracking-tight">MB</span>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Conectividad integral, diseño compacto</h2>
<p className="mt-3 text-neutral-300">Simplifica tu espacio de trabajo y aprovecha al máximo tus dispositivos con una dock versátil y portable.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition-colors">
<div className="flex items-center justify-between">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="h-[18px] w-[18px] text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><path d="M8 8h8v8H8z"></path></svg>
</div>
<span className="text-xs text-neutral-400">9 puertos</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Multiposición eficiente</h3>
<p className="mt-2 text-sm text-neutral-300">Conecta varios dispositivos a la vez y mantén el escritorio ordenado y funcional.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition-colors">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="h-[18px] w-[18px] text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="10" rx="2" width="18" x="3" y="7"></rect><path d="M7 12h10"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">USB 3.0 de alta velocidad</h3>
<p className="mt-2 text-sm text-neutral-300">Transferencias rápidas y seguras para discos externos y periféricos (hasta 5Gbps).</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition-colors">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="h-[18px] w-[18px] text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 7h8M7 12h10M8 17h8"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Alimentación por USB‑C</h3>
<p className="mt-2 text-sm text-neutral-300">Sin fuentes externas: conéctala y úsala. Menos cables, más movilidad.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition-colors">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="h-[18px] w-[18px] text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M12 3v18"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Plug &amp; Play</h3>
<p className="mt-2 text-sm text-neutral-300">Funciona sin drivers con la mayoría de sistemas modernos y periféricos.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition-colors">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="h-[18px] w-[18px] text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="3" width="14" x="5" y="4"></rect></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Diseño compacto</h3>
<p className="mt-2 text-sm text-neutral-300">Portátil y resistente para llevarla entre casa, oficina o viajes.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition-colors">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="h-[18px] w-[18px] text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3 7 9 6 9-6M4 17h16"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Espacio organizado</h3>
<p className="mt-2 text-sm text-neutral-300">Mantén tus cables y accesorios bajo control para un flujo de trabajo claro.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="ports">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Cada puerto, en el lugar correcto</h2>
<p className="mt-3 text-neutral-300">Acceso rápido para lo que usas a diario, orden permanente para lo que no desconectas.</p>
<ul className="mt-6 space-y-4">
<li className="flex items-start gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="12" x="6" y="6"></rect><path d="M9 9h6v6H9z"></path></svg>
</span>
<div className="">
<p className="text-sm font-semibold tracking-tight text-white">9 puertos de multiposición</p>
<p className="text-sm text-neutral-300">Conecta discos, periféricos y accesorios sin límites en tu flujo diario.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="10" rx="2" width="18" x="3" y="7"></rect><path d="M7 12h10"></path></svg>
</span>
<div className="">
<p className="text-sm font-semibold tracking-tight text-white">USB 3.0 de alto rendimiento</p>
<p className="text-sm text-neutral-300">Transferencias de hasta 5Gbps para copias y flujos de trabajo confiables.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 7h8M7 12h10M8 17h8"></path></svg>
</span>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Alimentación por USB‑C</p>
<p className="text-sm text-neutral-300">Plug &amp; Play real: no requiere fuente de poder externa.</p>
</div>
</li>
</ul>
<div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4 text-xs text-neutral-300">
              La Docking Station Xolotl combina funcionalidad y tecnología de vanguardia para una conectividad integral.
            </div>
</div>
<div className="relative">
<div className="relative rounded-2xl border border-white/10 bg-white/5 p-3">
<img alt="Vista general de puertos" className="w-full object-cover rounded-xl" src="https://res.cloudinary.com/dgh1qklpq/image/upload/v1761043683/xolotl-dockstation/dockstation-ports.jpg"/>
</div>
<div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16M12 4v16"></path></svg>
                  9 puertos
                </div>
<p className="mt-1 text-xs text-neutral-300">Multiposición accesible</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="10" rx="2" width="18" x="3" y="7"></rect><path d="M7 12h10"></path></svg>
                  USB 3.0
                </div>
<p className="mt-1 text-xs text-neutral-300">Hasta 5Gbps</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 7h8M7 12h10M8 17h8"></path></svg>
                  USB‑C Power
                </div>
<p className="mt-1 text-xs text-neutral-300">Sin fuente externa</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18"></path></svg>
                  Estable
                </div>
<p className="mt-1 text-xs text-neutral-300">Conexión confiable</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 4 4L19 6"></path></svg>
                  Plug &amp; Play
                </div>
<p className="mt-1 text-xs text-neutral-300">Sin drivers</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="3" width="14" x="5" y="4"></rect></svg>
                  Portátil
                </div>
<p className="mt-1 text-xs text-neutral-300">Ligera y compacta</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="specs">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Especificaciones técnicas</h2>
<p className="mt-3 text-neutral-300">Conectividad clara y transparente para tu día a día. Amplia compatibilidad con equipos modernos.</p>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="rounded-xl border border-white/10 bg-white/[0.035] p-6">
<p className="text-sm font-semibold tracking-tight text-white">Rendimiento</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="12" x="6" y="6"></rect></svg>
                9 puertos de multiposición
              </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="10" rx="2" width="18" x="3" y="7"></rect><path d="M7 12h10"></path></svg>
                Interfaz USB 3.0 hasta 5Gbps
              </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3 7 9 6 9-6"></path></svg>
                Conecta periféricos y almacenamiento externo
              </li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.035] p-6">
<p className="text-sm font-semibold tracking-tight text-white">Energía y diseño</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 7h8M7 12h10M8 17h8"></path></svg>
                Alimentación mediante USB‑C (sin fuente externa)
              </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="3" width="14" x="5" y="4"></rect></svg>
                Diseño compacto y portátil
              </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
                Plug &amp; Play: listo para usar
              </li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.035] p-6">
<p className="text-sm font-semibold tracking-tight text-white">Compatibilidad</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 7h20M2 17h20M7 2v20M17 2v20"></path></svg>
                Windows, macOS, Linux y dispositivos compatibles
              </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
                Ideal para laptops, móviles y periféricos
              </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3 7 9 6 9-6M4 17h16"></path></svg>
                Garantía del vendedor: 1 año
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="buy">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-1">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Haz tuyo el XTLPRO10</h2>
<p className="mt-3 text-neutral-300">La herramienta definitiva para una conectividad integral en tu espacio de trabajo.</p>
<div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4 text-xs text-neutral-300">
              Garantía del vendedor: 1 año.
            </div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 flex flex-col">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white">Xolotl XTLPRO10</h3>
<p className="text-sm text-neutral-300">9 puertos | USB 3.0 | Alimentación USB‑C</p>
</div>
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-neutral-300">Disponible</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight text-white">Consultar</span>
<span className="text-sm text-neutral-400">—</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
                9 puertos de multiposición
              </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
                USB 3.0 hasta 5Gbps
              </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
                Alimentación por USB‑C (sin fuente)
              </li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-3 text-sm font-semibold tracking-tight hover:bg-neutral-200 active:bg-neutral-300 transition-colors shadow-sm" href="#">Comprar</a>
</div>

<div className="rounded-2xl border border-violet-400/30 bg-violet-400/10 p-6 ring-1 ring-inset ring-violet-400/20 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] flex flex-col">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white">Xolotl XTLPRO10</h3>
<p className="text-sm text-neutral-200">Conectividad integral para casa u oficina</p>
</div>
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-neutral-200">Recomendado</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight text-white">Consultar</span>
<span className="text-sm text-neutral-300">—</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-200">
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
                Plug &amp; Play multiplataforma
              </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
                Diseño compacto y portátil
              </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
                Garantía del vendedor: 1 año
              </li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-3 text-sm font-semibold tracking-tight hover:bg-neutral-200 active:bg-neutral-300 transition-colors shadow-sm" href="#">Solicitar información</a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="reviews">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-white/10 bg-white/[0.035] p-6">
<div className="flex items-center gap-3">
<img alt="Reseña" className="h-9 w-9 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1541534401786-2077eed87a74?q=80&amp;w=1365&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Alex Rivera</p>
<p className="text-xs text-neutral-400">Productor</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-300">Conecto discos, teclado y lector sin problemas. Ordenado y estable, justo lo que necesitaba.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.035] p-6">
<div className="flex items-center gap-3">
<img alt="Reseña" className="h-9 w-9 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=1365&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Priya N.</p>
<p className="text-xs text-neutral-400">Ingeniera de software</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-300">Plug &amp; Play real. 9 puertos me ahorran adaptadores, y las transferencias van rápidas.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.035] p-6">
<div className="flex items-center gap-3">
<img alt="Reseña" className="h-9 w-9 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=1365&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Marcus Le</p>
<p className="text-xs text-neutral-400">Artista 3D</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-300">Ligera para llevarla a todas partes. Mantiene mi espacio limpio y todo conectado.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="faq">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Preguntas frecuentes</h2>
<div className="mt-8 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.035]">
<details className="group p-6">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-semibold tracking-tight text-white">¿Necesita fuente de poder externa?</span>
<svg className="h-[18px] w-[18px] text-neutral-400 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-300">No. Se alimenta por USB‑C, por lo que no requiere una fuente externa.</p>
</details>
<details className="group p-6">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-semibold tracking-tight text-white">¿Qué dispositivos puedo conectar?</span>
<svg className="h-[18px] w-[18px] text-neutral-400 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-300">Desde discos duros externos hasta periféricos como teclados, ratones y lectores. Es ideal para laptops, dispositivos móviles y otros equipos compatibles.</p>
</details>
<details className="group p-6">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-semibold tracking-tight text-white">¿Requiere instalar drivers?</span>
<svg className="h-[18px] w-[18px] text-neutral-400 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-300">No para las funciones principales. Funciona como Plug &amp; Play en la mayoría de sistemas modernos.</p>
</details>
<details className="group p-6">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-semibold tracking-tight text-white">¿Cuál es la garantía?</span>
<svg className="h-[18px] w-[18px] text-neutral-400 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-300">Garantía del vendedor: 1 año.</p>
</details>

<details className="group p-6">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-semibold tracking-tight text-white">No puedo compartir el proyecto, ¿por qué?</span>
<svg className="h-[18px] w-[18px] text-neutral-400 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-300">
              El botón Compartir usa la función nativa del navegador, que puede no estar disponible en algunos dispositivos, en conexiones no seguras (sin HTTPS) o al abrir el archivo de forma local. Si no está soportado, el enlace se copia automáticamente al portapapeles como alternativa.
            </p>
</details>
</div>
</div>
</section>

<footer className="border-t border-white/10" id="support">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-12 grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<a className="inline-flex items-center gap-2" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-sm font-semibold tracking-tight text-white">XO</span>
<span className="text-sm font-medium text-neutral-300">Xolotl</span>
</a>
<p className="mt-4 text-sm text-neutral-400">Conectividad clara y eficiente. Diseñada para simplificar tu día a día con 9 puertos y USB 3.0.</p>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex h-9 items-center gap-2 rounded-md border border-white/10 bg-white/0 px-3 text-xs text-neutral-300 hover:text-white hover:bg-white/5 transition-colors" href="#">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M3 6h18M3 18h18"></path></svg>
                Documentación
              </a>
<a className="inline-flex h-9 items-center gap-2 rounded-md border border-white/10 bg-white/0 px-3 text-xs text-neutral-300 hover:text-white hover:bg-white/5 transition-colors" href="#">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
                Soporte
              </a>
</div>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Producto</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li><a className="hover:text-white transition-colors" href="#features">Características</a></li>
<li><a className="hover:text-white transition-colors" href="#specs">Especificaciones</a></li>
<li><a className="hover:text-white transition-colors" href="#ports">Puertos</a></li>
<li><a className="hover:text-white transition-colors" href="#buy">Comprar</a></li>
</ul>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Compañía</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li><a className="hover:text-white transition-colors" href="#">Acerca de</a></li>
<li><a className="hover:text-white transition-colors" href="#">Carreras</a></li>
<li><a className="hover:text-white transition-colors" href="#">Prensa</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contacto</a></li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 py-6">
<p className="text-xs text-neutral-400">© <span id="year">2025</span> Xolotl. Todos los derechos reservados.</p>
<div className="flex items-center gap-4 text-xs text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Privacidad</a>
<span className="h-3 w-px bg-white/15"></span>
<a className="hover:text-white transition-colors" href="#">Términos</a>
<span className="h-3 w-px bg-white/15"></span>
<a className="hover:text-white transition-colors" href="#">Soporte</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-4 right-4 z-50 hidden" id="toast">
<div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/10 px-4 py-3 shadow-lg backdrop-blur" id="toastInner">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/5 text-emerald-400" id="toastIcon">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<p className="text-sm text-neutral-100" id="toastMsg">Enlace copiado al portapapeles</p>
<button className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/5 text-neutral-300 hover:text-white" id="toastClose" type="button">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18M6 6l12 12"></path></svg>
</button>
</div>
</div>



    </>
  );
}
