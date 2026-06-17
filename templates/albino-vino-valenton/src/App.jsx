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



      // Initialize Lucide Icons
      lucide.createIcons();

      // Intersection Observer for Scroll Reveals
      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.remove('hidden-state');
                      entry.target.classList.add('visible-state');
                  }
              });
          }, observerOptions);

          const elements = document.querySelectorAll('.reveal-text');
          elements.forEach(el => observer.observe(el));
      });

      // Pack Selection Logic
      function selectPack(element, packId) {
          // Reset all indicators
          document.querySelectorAll('.pack-indicator').forEach(el => {
              el.classList.remove('w-full');
              el.classList.add('w-0');
          });

          // Activate selected indicator
          const indicator = document.getElementById(packId + '-indicator');
          if(indicator) {
              indicator.classList.remove('w-0');
              indicator.classList.add('w-full');
          }
      }
    
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
      

<nav className="fixed flex mix-blend-difference w-full z-40 pt-8 pb-8 top-0 left-0 justify-center">
<a className="hover:opacity-80 transition-opacity lowercase leading-none text-3xl font-bold text-neutral-900 tracking-tighter" href="#">
        albino.
      </a>
</nav>

<section className="flex flex-col pr-6 pl-6 relative items-center justify-center min-h-[80vh]">
<div className="text-center space-y-10 z-10 max-w-4xl">
<h1 className="text-4xl md:text-6xl tracking-tight text-neutral-900 font-normal leading-tight lowercase opacity-0" style={{animation: 'fadeIn 1.5s ease-out forwards 0.2s'}}>
          en un mundo que grita,
          <br/>
<span className="text-neutral-400">una botella que susurra.</span>
</h1>
<p className="text-lg md:text-xl font-light tracking-wide text-neutral-500 max-w-lg mx-auto leading-relaxed opacity-0" style={{animation: 'fadeIn 1.5s ease-out forwards 0.8s'}}>
          cada edición es un gesto en blanco. cada gesto, una invitación a mirar
          por dentro.
        </p>
<div className="pt-8 opacity-0" style={{animation: 'fadeIn 1.5s ease-out forwards 1.4s'}}>
<button className="group relative px-9 py-4 overflow-hidden rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-lg" onclick="document.getElementById('product-section').scrollIntoView({behavior: 'smooth'})">
<span className="relative z-10 text-xs tracking-widest uppercase font-semibold">
              descubrir valentón
            </span>
</button>
</div>
</div>

<div className="absolute bottom-12 animate-pulse opacity-30 text-neutral-900">
<svg className="lucide lucide-arrow-down w-5 h-5 stroke-[1.5]" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
</div>
</section>

<section className="min-h-screen flex flex-col md:flex-row md:py-0 bg-white pt-32 pr-6 pb-32 pl-6 relative items-center justify-center" id="product-section">

<div className="md:w-1/2 md:h-screen flex overflow-hidden w-full h-[60vh] relative items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none"></div>
<img alt="Botella Albino Valentón" className="md:h-[80%] contrast-125 bottle-container reveal-text duration-1000 w-auto h-[85%] object-cover grayscale brightness-110 blur-focus" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab1a9549-cfbe-4ca5-84ff-b09a28ae69d7_800w.png"/>
</div>

<div className="w-full md:w-1/2 max-w-md space-y-12 md:pl-12 reveal-text">
<div className="md:text-left text-center space-y-4">
<div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
<span className="text-xs tracking-widest uppercase text-neutral-400 font-normal">
              edición 001
            </span>
<span className="text-[10px] uppercase font-medium text-neutral-500 tracking-wider border-neutral-200 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2">
              lanzamiento
            </span>
</div>
<h2 className="text-5xl md:text-6xl font-medium tracking-tight text-neutral-900 lowercase">
            valentón
          </h2>
<p className="leading-relaxed text-xl italic text-neutral-500 font-serif">
            vino blanco por fuera, tinto por dentro. una botella contra el amor
            romántico.
          </p>
<div className="pt-2 flex justify-center md:justify-start">
<button className="group flex uppercase hover:text-neutral-600 transition-colors hover:border-neutral-600 text-xs font-semibold text-neutral-900 tracking-widest border-neutral-900 border-b pb-0.5 gap-x-2 gap-y-2 items-center" onclick="document.getElementById('modal-valenton').classList.remove('hidden');">
              descubrir más
              <svg className="lucide lucide-plus transition-transform group-hover:rotate-90" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</button>
</div>
</div>

<div className="space-y-4">
<button className="w-full group relative cursor-pointer text-left focus:outline-none" onclick="selectPack(this, 'pack1')">
<div className="flex items-baseline justify-between py-4 border-b border-neutral-200 group-hover:border-neutral-900 transition-colors duration-300">
<span className="font-serif italic text-lg text-neutral-600 group-hover:text-neutral-900 transition-colors">
                para amor propio
              </span>
<span className="text-xs tracking-tight text-neutral-400 font-medium">
                1 botella
              </span>
</div>
<div className="absolute left-0 bottom-0 h-[1.5px] w-0 bg-neutral-900 transition-all duration-300 group-hover:w-full pack-indicator" id="pack1-indicator"></div>
</button>
<button className="w-full group relative cursor-pointer text-left focus:outline-none" onclick="selectPack(this, 'pack2')">
<div className="flex items-baseline justify-between py-4 border-b border-neutral-200 group-hover:border-neutral-900 transition-colors duration-300">
<span className="font-serif italic text-lg text-neutral-600 group-hover:text-neutral-900 transition-colors">
                impacto doble
              </span>
<span className="text-xs tracking-tight text-neutral-400 font-medium">
                3 botellas
              </span>
</div>
<div className="absolute left-0 bottom-0 h-[1.5px] w-0 bg-neutral-900 transition-all duration-300 pack-indicator" id="pack2-indicator"></div>
</button>
<button className="w-full group relative cursor-pointer text-left focus:outline-none" onclick="selectPack(this, 'pack3')">
<div className="flex items-baseline justify-between py-4 border-b border-neutral-200 group-hover:border-neutral-900 transition-colors duration-300">
<span className="font-serif italic text-lg text-neutral-600 group-hover:text-neutral-900 transition-colors">
                reescribir la historia
              </span>
<span className="text-xs tracking-tight text-neutral-400 font-medium">
                6 botellas
              </span>
</div>
<div className="absolute left-0 bottom-0 h-[1.5px] w-0 bg-neutral-900 transition-all duration-300 pack-indicator" id="pack3-indicator"></div>
</button>
</div>

<div className="flex flex-col md:flex-row md:justify-start pt-8 gap-x-6 gap-y-6 items-center justify-center">
<button className="group relative px-10 py-4 overflow-hidden rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md w-full md:w-auto">
<span className="uppercase text-xs font-medium tracking-widest z-10 relative">
              comprar
            </span>
</button>
<span className="text-[10px] text-neutral-400 tracking-wide max-w-[150px] leading-tight text-center md:text-left">
            *el 5% de los beneficios se dona a la Asociación Alba.
          </span>
</div>
</div>
</section>
<section className="min-h-[50vh] flex pt-24 pr-6 pb-24 pl-6 items-center justify-center">
<p className="text-2xl md:text-4xl font-serif italic text-center max-w-lg leading-relaxed text-neutral-300 hover:text-neutral-800 transition-colors duration-700 reveal-text">
        no bebemos para olvidar. bebemos para recordar lo que debemos cambiar.
      </p>
</section>
<div className="flex flex-col w-full border-neutral-100 border-b pb-24 items-center">

<section className="w-full bg-neutral-900 text-white py-32 mt-12">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="md:w-1/2 space-y-6 reveal-text">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter lowercase">
              impacto radical
            </h2>
<p className="font-serif italic text-neutral-400 text-lg leading-relaxed max-w-md">
              Albino no busca lucro, busca eco. El 5% de los beneficios va para
              la Asociación Alba.
            </p>
<a className="inline-flex items-center text-xs tracking-widest uppercase font-medium hover:text-neutral-300 transition-colors mt-4" href="#">
              ver reporte de transparencia
              <svg className="lucide lucide-arrow-right w-3 h-3 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="md:w-1/2 grid grid-cols-2 gap-8 reveal-text delay-200">
<div className="space-y-2 border-l border-neutral-700 pl-6">
<span className="text-4xl font-light tracking-tight">5%</span>
<p className="text-xs uppercase tracking-widest text-neutral-500">
                para asociación alba
              </p>
</div>
<div className="space-y-2 border-l border-neutral-700 pl-6">
<span className="text-4xl font-light tracking-tight">3+</span>
<p className="text-xs uppercase tracking-widest text-neutral-500">
                causas activas
              </p>
</div>
<div className="space-y-2 border-l border-neutral-700 pl-6">
<span className="text-4xl font-light tracking-tight">0%</span>
<p className="text-xs uppercase tracking-widest text-neutral-500">
                residuos plásticos
              </p>
</div>
<div className="space-y-2 border-l border-neutral-700 pl-6">
<span className="text-4xl font-light tracking-tight">∞</span>
<p className="text-xs uppercase tracking-widest text-neutral-500">
                conversaciones
              </p>
</div>
</div>
</div>
</section>
<section className="w-full max-w-5xl pt-24 pr-6 pb-24 pl-6 space-y-16">
<div className="text-center reveal-text">
<span className="text-xs tracking-widest uppercase text-neutral-400 font-medium">
            manifiesto valentón
          </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-neutral-900 mt-4 lowercase">
            amor propio radical
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="group p-8 border border-neutral-100 hover:border-neutral-900 transition-colors duration-500 rounded-lg reveal-text">
<svg className="lucide lucide-sparkles w-6 h-6 text-neutral-300 group-hover:text-neutral-900 mb-6 transition-colors" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
<p className="text-xl font-serif italic text-neutral-800 leading-relaxed">
              "No busques a tu media naranja. Eres una fruta completa, no una
              mitad a la espera."
            </p>
<div className="mt-6 flex items-center space-x-2 text-xs font-medium uppercase tracking-wider text-neutral-400">
<span className="">— sobre plenitud</span>
</div>
</div>

<div className="group p-8 border border-neutral-100 hover:border-neutral-900 transition-colors duration-500 rounded-lg reveal-text delay-100">
<svg className="lucide lucide-heart w-6 h-6 text-neutral-300 group-hover:text-neutral-900 mb-6 transition-colors" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
<p className="text-xl font-serif italic text-neutral-800 leading-relaxed">
              "Enamorarse de uno mismo es el primer secreto de la felicidad. Lo
              demás es compañía."
            </p>
<div className="mt-6 flex items-center space-x-2 text-xs font-medium uppercase tracking-wider text-neutral-400">
<span className="">— sobre el origen</span>
</div>
</div>

<div className="group p-8 border border-neutral-100 hover:border-neutral-900 transition-colors duration-500 rounded-lg reveal-text delay-200">
<svg className="lucide lucide-shield w-6 h-6 text-neutral-300 group-hover:text-neutral-900 mb-6 transition-colors" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
</svg>
<p className="text-xl font-serif italic text-neutral-800 leading-relaxed">
              "Tus límites son la distancia a la que puedes amarte a ti mismo y
              a los demás al mismo tiempo."
            </p>
<div className="mt-6 flex items-center space-x-2 text-xs font-medium uppercase tracking-wider text-neutral-400">
<span className="">— sobre respeto</span>
</div>
</div>

<div className="group p-8 border border-neutral-100 hover:border-neutral-900 transition-colors duration-500 rounded-lg reveal-text delay-300">
<svg className="lucide lucide-sun w-6 h-6 text-neutral-300 group-hover:text-neutral-900 mb-6 transition-colors" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="4"></circle>
<path d="M12 2v2"></path>
<path d="M12 20v2"></path>
<path d="m4.93 4.93 1.41 1.41"></path>
<path d="m17.66 17.66 1.41 1.41"></path>
<path d="M2 12h2"></path>
<path d="M20 12h2"></path>
<path d="m6.34 17.66-1.41 1.41"></path>
<path d="m19.07 4.93-1.41 1.41"></path>
</svg>
<p className="text-xl font-serif italic text-neutral-800 leading-relaxed">
              "No necesitas que nadie te complete, solo que te acepten
              completo."
            </p>
<div className="mt-6 flex items-center space-x-2 text-xs font-medium uppercase tracking-wider text-neutral-400">
<span className="">— sobre suficiencia</span>
</div>
</div>
</div>
</section>
</div>

<footer className="py-12 flex flex-col items-center justify-center space-y-8 border-t border-neutral-100 bg-white">
<div className="flex space-x-12">
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">
          manifiesto
        </a>
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">
          impacto
        </a>
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">
          tienda
        </a>
</div>
<p className="text-[10px] text-neutral-300 tracking-wider font-medium">
        © albino wines — bebiendo por un mundo mejor
      </p>
</footer>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[9999] hidden" id="modal-valenton" role="dialog">

<div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity" onclick="document.getElementById('modal-valenton').classList.add('hidden');"></div>

<div className="fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-10 z-[10000] pointer-events-none">
<div className="w-screen max-w-md transform bg-white shadow-2xl transition-all h-full border-l border-neutral-100 pointer-events-auto">
<div className="flex flex-col h-full bg-white relative p-8 sm:p-10">

<div className="flex justify-between items-start mb-8 shrink-0">
<div className="space-y-1">
<h3 className="text-3xl font-serif text-neutral-900 italic">
                    valentón
                  </h3>
<span className="text-[10px] tracking-widest uppercase text-neutral-400 font-medium block">
                    edición 001 — manifiesto
                  </span>
</div>
<button className="group p-2 -mr-2 text-neutral-400 hover:text-neutral-900 transition-colors rounded-full hover:bg-neutral-50" onclick="document.getElementById('modal-valenton').classList.add('hidden');" type="button">
<svg className="transition-transform group-hover:rotate-90" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>

<div className="flex-1 overflow-y-auto pr-2 space-y-10 pb-4">

<div className="space-y-4">
<h4 className="flex items-center text-[10px] font-bold uppercase tracking-widest text-neutral-900/40">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-200 mr-3"></span>
                    El Concepto
                  </h4>
<p className="text-sm text-neutral-600 font-serif leading-relaxed pl-4 border-l border-neutral-100">
                    Valentón no es un vino para corazones rotos, sino para
                    los que se han reconstruido. Esta edición cuestiona el
                    mito del amor romántico: es un homenaje al amor que no
                    duele, al vínculo sin posesión y al desapego con
                    ternura.
                  </p>
</div>

<div className="space-y-4">
<h4 className="flex items-center text-[10px] font-bold uppercase tracking-widest text-neutral-900/40">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-200 mr-3"></span>
                    El Vino
                  </h4>
<div className="pl-4 border-l border-neutral-100 space-y-4">
<div className="grid grid-cols-3 gap-y-3 text-sm items-baseline">
<span className="text-neutral-400 uppercase text-[10px] tracking-wider font-medium">
                        Tipo
                      </span>
<span className="text-neutral-900 font-medium col-span-2">
                        Tinto Dulce Natural
                      </span>
<span className="text-neutral-400 uppercase text-[10px] tracking-wider font-medium">
                        Nota
                      </span>
<span className="text-neutral-900 font-medium col-span-2 leading-tight">
                        Fruta roja madura, goloso en boca, final fresco.
                      </span>
<span className="text-neutral-400 uppercase text-[10px] tracking-wider font-medium">
                        Diseño
                      </span>
<span className="text-neutral-900 font-medium col-span-2">
                        Botella blanca opaca. Etiqueta faja minimalista.
                      </span>
</div>
<div className="bg-neutral-50 p-4 rounded-md mt-2">
<p className="text-sm text-neutral-800 font-serif italic text-center">
                        "Blanco absoluto por fuera. Tinto dulce por dentro.
                        Como quien se atreve a reaprender el amor."
                      </p>
</div>
</div>
</div>
</div>

<div className="mt-4 pt-6 border-t border-neutral-100 shrink-0">
<a className="w-full group flex items-center justify-between p-4 rounded-lg border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300" href="https://www.bodegalasoledad.com/tiendacomprarvino/producto/vino-tinto-dulce-senorio-de-pedraza/" target="_blank">
<span className="text-xs font-bold uppercase tracking-widest">
                    Ver Ficha Técnica
                  </span>
<svg className="transform -rotate-45 group-hover:rotate-0 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
