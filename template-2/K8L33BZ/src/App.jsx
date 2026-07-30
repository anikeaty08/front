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
      {

      // Focus animado en inputs al hacer click en el formulario
      document.querySelectorAll('input').forEach(el => {
        el.addEventListener('focus', e => {
          el.parentElement.classList.add('ring-2', 'ring-blue-400');
        });
        el.addEventListener('blur', e => {
          el.parentElement.classList.remove('ring-2', 'ring-blue-400');
        });
      });
    
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
      

<svg className="wave-bg w-full h-full" fill="none" viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="wave-gradient">
<stop stop-color="#3B82F6"></stop>
<stop offset="1" stop-color="#60A5FA"></stop>
</lineargradient>
<filter height="200%" id="blur" width="200%">
<fegaussianblur stddeviation="90"></fegaussianblur>
</filter>
</defs>
<g filter="url(#blur)">
<path fill="url(#wave-gradient)" fillOpacity="0.3">
<animate attributename="d" dur="10s" repeatcount="indefinite" values="
              M0,700 Q480,650 1440,800 L1440,900 L0,900 Z;
              M0,700 Q700,850 1440,700 L1440,900 L0,900 Z;
              M0,700 Q480,650 1440,800 L1440,900 L0,900 Z
            "></animate>
</path>
<path fill="url(#wave-gradient)" fillOpacity="0.2" id="wave2">
<animate attributename="d" dur="14s" repeatcount="indefinite" values="
              M0,800 Q720,900 1440,800 L1440,900 L0,900 Z;
              M0,800 Q900,700 1440,850 L1440,900 L0,900 Z;
              M0,800 Q720,900 1440,800 L1440,900 L0,900 Z
            "></animate>
</path>
</g>
</svg>

<main className="relative z-10 w-full max-w-2xl mx-auto px-6 py-12 flex flex-col items-center">

<section className="w-full rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-blue-900/40 p-8 md:p-12 flex flex-col items-center gap-8">

<header className="text-center flex flex-col gap-4">
<h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg flex items-center justify-center gap-2" style={{fontFamily: `'Manrope', 'Inter', sans-serif`}}>
<span className="text-[2.2rem]">🏠</span> Seminario Gratuito: <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Cómo Invertir en Bienes Raíces</span>
</h1>
<p className="text-base md:text-lg text-blue-100 font-medium leading-relaxed max-w-xl mx-auto">
            Disponible en <span className="font-bold text-blue-300">Nueva York</span>, <span className="font-bold text-blue-300">Nueva Jersey</span>, <span className="font-bold text-blue-300">Connecticut</span> y <span className="font-bold text-blue-300">Pensilvania</span>.<br />
            Totalmente en español. Sin experiencia previa. <span className="font-semibold text-cyan-200">Cupos limitados.</span>
</p>
</header>

<form className="w-full flex flex-col gap-5 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-lg shadow-blue-900/10 max-w-md mx-auto">
<div>
<label className="block text-sm font-semibold text-white mb-2" htmlFor="nombre">Nombre completo</label>
<input autocomplete="name" className="w-full rounded-xl bg-white/30 border border-white/20 px-4 py-3 text-base text-blue-900 font-semibold placeholder:text-blue-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition" id="nombre" name="nombre" placeholder="Tu nombre y apellido" required type="text" />
</div>
<div>
<label className="block text-sm font-semibold text-white mb-2" htmlFor="email">Correo electrónico</label>
<input autocomplete="email" className="w-full rounded-xl bg-white/30 border border-white/20 px-4 py-3 text-base text-blue-900 font-semibold placeholder:text-blue-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition" id="email" name="email" placeholder="ejemplo@correo.com" required type="email" />
</div>
<div>
<label className="block text-sm font-semibold text-white mb-2" htmlFor="telefono">Teléfono</label>
<input autocomplete="tel" className="w-full rounded-xl bg-white/30 border border-white/20 px-4 py-3 text-base text-blue-900 font-semibold placeholder:text-blue-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition" id="telefono" name="telefono" placeholder="(000) 000-0000" required type="tel" />
</div>
<button className="mt-2 w-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 text-white font-bold text-lg py-3 shadow-lg shadow-blue-400/30 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300" type="submit">
            Reservar mi lugar gratis
          </button>
<p className="text-xs text-blue-100 text-center mt-2">
            Te enviaremos los detalles del evento por correo o WhatsApp después de registrarte.
          </p>
</form>
</section>
</main>

<div className="pointer-events-none fixed bottom-0 right-0 w-72 h-72 rounded-full bg-gradient-to-tr from-blue-400 via-cyan-300 to-blue-600 blur-3xl opacity-30"></div>


    </>
  );
}
