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
      

<div className="fixed inset-0 z-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

<div className="fixed inset-0 z-5 pointer-events-none opacity-[0.04]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none z-0"></div>
<div className="fixed top-[40%] right-[-5%] w-[30vw] h-[30vw] rounded-full bg-cyan-600/10 blur-[100px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-10%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#07070F]/60 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-['Syne'] font-semibold tracking-tighter text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-400" href="#">
                B.
            </a>
<div className="flex items-center gap-6">
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#escritos">escritos</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#sobre-mi">sobre mí</a>
<a className="group flex items-center gap-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 px-3.5 py-1.5 text-xs font-medium hover:bg-violet-500/20 hover:border-violet-500/30 transition-all" href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
                    linkedin 
                    <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="relative z-10 flex-grow pt-24">

<header className="max-w-4xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-32 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-xs font-['JetBrains_Mono'] text-slate-300 mb-10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                Monterrey, MX · SAP · IA · Transformación
            </div>
<h1 className="font-['Syne'] font-semibold tracking-tight text-5xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-white via-violet-200 to-cyan-400 mb-8 leading-tight">
                Bernardo Gallegos.
            </h1>
<h2 className="font-['Syne'] font-medium text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl tracking-tight leading-snug">
                Consultor que escribe, o escritor que consulta — depende del día.
            </h2>
<p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mb-14">
                Veinte años en el ecosistema SAP en México. Trabajo en la intersección de transformación empresarial, inteligencia artificial y el pensamiento de sistemas. Escribo sobre la fricción entre cómo funcionan las organizaciones y cómo creemos que funcionan.
            </p>
<div className="flex items-center justify-center gap-4 text-sm text-slate-500 italic font-serif">
<div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-white/15"></div>
                El café se enfrió. Las preguntas siguen calientes.
                <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-white/15"></div>
</div>
</header>

<section className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5" id="que-hago">
<h3 className="font-['Syne'] font-semibold tracking-tight text-2xl md:text-3xl text-white mb-12 text-center">
                En la intersección de sistemas, datos y criterio.
            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-xl hover:border-violet-500/30 transition-colors">
<div className="mb-4 text-violet-400">
<iconify-icon icon="solar:server-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="font-['Syne'] font-semibold tracking-tight text-lg text-slate-200 mb-3">Estrategia SAP</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                        S/4HANA, RISE, licenciamiento, advisory post-go-live para mercado medio mexicano.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-xl hover:border-cyan-500/30 transition-colors">
<div className="mb-4 text-cyan-400">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="font-['Syne'] font-semibold tracking-tight text-lg text-slate-200 mb-3">IA &amp; Transformación Digital</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                        Consumo, gobernanza y valor real de IA en organizaciones. Sin evangelismo. Con criterio.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-xl hover:border-purple-500/30 transition-colors">
<div className="mb-4 text-purple-400">
<iconify-icon icon="solar:diagram-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="font-['Syne'] font-semibold tracking-tight text-lg text-slate-200 mb-3">Pensamiento en Sistemas</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                        Frameworks propios — Orbit para transformación, Xtended Care para continuidad post-implementación.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-xl hover:border-white/20 transition-colors">
<div className="mb-4 text-slate-300">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="font-['Syne'] font-semibold tracking-tight text-lg text-slate-200 mb-3">Escritura &amp; Ideas</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                        Ensayos sobre poder cognitivo, criterio organizacional y la mecánica de los sistemas que nos gobiernan.
                    </p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24 border-t border-white/5" id="escritos">
<h3 className="font-['Syne'] font-semibold tracking-tight text-2xl md:text-3xl text-white mb-12">
                Ideas que exigen algo del lector.
            </h3>
<div className="flex flex-col border-t border-white/5">

<a className="group flex flex-col md:flex-row md:items-baseline py-8 border-b border-white/5 hover:border-violet-500/40 hover:bg-white/[0.01] transition-all px-4 -mx-4 rounded-xl" href="https://www.linkedin.com/pulse/la-tiranía-de-las-métricas-bernardo-gallegos--nuk4e/" rel="noopener noreferrer" target="_blank">
<span className="text-xs font-['JetBrains_Mono'] text-violet-400 mb-3 md:mb-0 md:w-56 shrink-0 uppercase tracking-widest opacity-80">Organizaciones · Criterio</span>
<div className="flex-grow flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
<h4 className="font-['Syne'] font-semibold tracking-tight text-lg md:text-xl text-slate-200 group-hover:text-white transition-colors">
                            La tiranía de las métricas
                        </h4>
<span className="text-sm font-['JetBrains_Mono'] text-slate-500 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5 shrink-0">
                            leer <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</a>

<a className="group flex flex-col md:flex-row md:items-baseline py-8 border-b border-white/5 hover:border-violet-500/40 hover:bg-white/[0.01] transition-all px-4 -mx-4 rounded-xl" href="https://www.linkedin.com/pulse/le-enseñamos-lo-que-todos-contradecir-tiene-costo-bernardo-gallegos--kwkxe/" rel="noopener noreferrer" target="_blank">
<span className="text-xs font-['JetBrains_Mono'] text-violet-400 mb-3 md:mb-0 md:w-56 shrink-0 uppercase tracking-widest opacity-80">Cultura · Conocimiento</span>
<div className="flex-grow flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
<h4 className="font-['Syne'] font-semibold tracking-tight text-lg md:text-xl text-slate-200 group-hover:text-white transition-colors">
                            Le enseñamos lo que todos saben. Contradecir tiene costo.
                        </h4>
<span className="text-sm font-['JetBrains_Mono'] text-slate-500 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5 shrink-0">
                            leer <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</a>

<a className="group flex flex-col md:flex-row md:items-baseline py-8 border-b border-white/5 hover:border-violet-500/40 hover:bg-white/[0.01] transition-all px-4 -mx-4 rounded-xl" href="https://www.linkedin.com/pulse/somos-humanos-antes-que-profesionales-bernardo-gallegos--tscwe/" rel="noopener noreferrer" target="_blank">
<span className="text-xs font-['JetBrains_Mono'] text-violet-400 mb-3 md:mb-0 md:w-56 shrink-0 uppercase tracking-widest opacity-80">Trabajo · Identidad</span>
<div className="flex-grow flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
<h4 className="font-['Syne'] font-semibold tracking-tight text-lg md:text-xl text-slate-200 group-hover:text-white transition-colors">
                            Somos humanos antes que profesionales
                        </h4>
<span className="text-sm font-['JetBrains_Mono'] text-slate-500 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5 shrink-0">
                            leer <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</a>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5" id="sobre-mi">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<h3 className="font-['Syne'] font-semibold tracking-tight text-2xl md:text-3xl text-white mb-8">
                        Perspectiva forjada en la práctica.
                    </h3>
<div className="space-y-6 text-base text-slate-400 leading-relaxed">
<p>
                            Mi trayectoria no se construyó en la teoría pura, sino en la trinchera de las implementaciones complejas. Entender un sistema ERP no es solo mapear procesos; es comprender la psicología de una organización y cómo reacciona al cambio forzado.
                        </p>
<p>
                            Hoy dedico mi tiempo a asesorar empresas en su evolución tecnológica, diseñando arquitecturas que no solo funcionen en papel, sino que sobrevivan al contacto con la realidad operativa. Escribo para ordenar mis ideas y, con suerte, provocar que otros cuestionen las suyas.
                        </p>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex flex-col items-center justify-center text-center">
<span className="font-['Syne'] font-semibold tracking-tight text-3xl text-white mb-2">20+</span>
<span className="text-xs font-['JetBrains_Mono'] text-slate-500 uppercase tracking-wider">Años Exp.</span>
</div>
<div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex flex-col items-center justify-center text-center">
<span className="font-['Syne'] font-semibold tracking-tight text-3xl text-white mb-2">Gold</span>
<span className="text-xs font-['JetBrains_Mono'] text-slate-500 uppercase tracking-wider">SAP Partner</span>
</div>
<div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex flex-col items-center justify-center text-center">
<span className="font-['Syne'] font-semibold tracking-tight text-3xl text-white mb-2">2</span>
<span className="text-xs font-['JetBrains_Mono'] text-slate-500 uppercase tracking-wider">Frameworks</span>
</div>
<div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex flex-col items-center justify-center text-center">
<span className="font-['Syne'] font-semibold tracking-tight text-3xl text-white mb-2">∞</span>
<span className="text-xs font-['JetBrains_Mono'] text-slate-500 uppercase tracking-wider">Preguntas</span>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 relative z-10 bg-[#07070F]/80 backdrop-blur-md mt-auto">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="font-['Syne'] font-semibold tracking-tighter text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-400 opacity-80">
                B.
            </div>
<div className="text-xs font-['JetBrains_Mono'] text-slate-500 uppercase tracking-widest">
                Monterrey, MX · 2025
            </div>
</div>
</footer>

    </>
  );
}
