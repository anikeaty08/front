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
      

<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 py-12 md:py-20 relative z-10 flex-grow w-full">

<header className="flex justify-center md:justify-start mb-16">
<span className="text-2xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-500">
                MIFA
            </span>
</header>

<div className="max-w-3xl mb-12 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
<iconify-icon className="text-base" icon="solar:check-circle-linear"></iconify-icon>
<span>Inscripción confirmada exitosamente</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Estás a un paso de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">acelerar tu proyecto</span>.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed">
                Felicidades por dar el paso e unirte a <strong>Valida tu Startup con MIFA</strong>. Para asegurar tu participación y aprovechar al máximo el evento, completa este último paso ahora mismo.
            </p>
</div>

<div className="max-w-2xl mx-auto md:mx-0">
<div className="group bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md rounded-3xl p-8 md:p-10 flex flex-col hover:bg-zinc-900/80 transition-all duration-300 relative overflow-hidden shadow-2xl shadow-black/50">
<div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 rounded-2xl bg-zinc-950 flex items-center justify-center border border-zinc-800 mb-8 text-zinc-400 group-hover:text-white transition-colors shadow-inner">
<iconify-icon className="text-3xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100">Únete al Grupo de Validación</h2>
<span className="w-fit text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-md">
                        Obligatorio
                    </span>
</div>
<p className="text-zinc-400 text-lg mb-10 flex-grow leading-relaxed">
                    Este es el canal oficial donde compartiremos el enlace exclusivo para conectarte al evento y material clave de preparación. Es indispensable ingresar para garantizar tu cupo.
                </p>
<a className="inline-flex items-center justify-center gap-3 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border border-[#25D366]/20 font-medium text-lg py-4 px-8 rounded-xl transition-all duration-200 w-full sm:w-auto" href="https://chat.whatsapp.com/KKV0oPuijG3K8W67GZkF44" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-2xl" icon="solar:chat-round-line-linear"></iconify-icon>
                    Ingresar al Grupo de WhatsApp
                </a>
</div>
</div>

<div className="mt-24 pt-12 border-t border-zinc-800/50">
<h3 className="text-center text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-10">Tu ruta hacia el éxito</h3>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">

<div className="flex items-center gap-3 text-zinc-200">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 font-medium text-sm">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm font-medium">Inscripción</span>
</div>
<iconify-icon className="hidden md:block text-zinc-700 text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="md:hidden w-[1px] h-6 bg-zinc-800"></div>

<div className="flex items-center gap-3 text-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-100 font-medium text-sm text-zinc-950 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        2
                    </div>
<span className="text-sm font-medium">Grupo de WhatsApp</span>
</div>
<iconify-icon className="hidden md:block text-zinc-700 text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="md:hidden w-[1px] h-6 bg-zinc-800"></div>

<div className="flex items-center gap-3 text-zinc-500">
<div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 font-medium text-sm">
                        3
                    </div>
<span className="text-sm font-medium">Evento MIFA</span>
</div>
</div>
</div>
</div>

    </>
  );
}
