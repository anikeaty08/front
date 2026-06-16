import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<div className="absolute top-[-10%] left-[50%] translate-x-[-50%] w-[800px] h-[400px] opacity-[0.15] rounded-full bg-gradient-to-b from-white to-transparent blur-3xl -z-10 pointer-events-none"></div>

<nav className="w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/5">
<div className="font-semibold text-lg tracking-tighter text-white select-none">
            R/E
        </div>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200" href="#unirme">
            Acceso miembros
        </a>
</nav>

<main className="flex-grow flex flex-col items-center justify-center px-6 pt-24 pb-32 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-8">
<span className="w-2 h-2 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span>
            Plazas abiertas para la nueva cohorte
        </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6 max-w-3xl leading-tight">
            Vence al sedentarismo.<br className="hidden sm:block"/> Lidera con energía.
        </h1>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            La comunidad exclusiva para fundadores y directivos que no tienen tiempo, pero necesitan empezar a correr. Rutinas eficientes, networking en movimiento y cero excusas.
        </p>

<div className="w-full max-w-md mx-auto" id="unirme">
<form className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-grow">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-neutral-500 text-lg" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl pl-10 pr-4 py-3 text-sm text-neutral-200 outline-none focus:border-neutral-600 focus:bg-neutral-900 transition-all placeholder:text-neutral-500 shadow-sm" placeholder="tu@empresa.com" required="" type="email"/>
</div>
<button className="bg-white text-neutral-950 font-medium text-sm px-6 py-3 rounded-xl hover:bg-neutral-200 focus:ring-2 focus:ring-white/50 focus:outline-none transition-all whitespace-nowrap shadow-[0_0_15px_rgba(255,255,255,0.1)]" type="submit">
                    Solicitar acceso
                </button>
</form>
<p className="text-xs text-neutral-500 mt-4 font-medium flex items-center justify-center gap-1.5">
<iconify-icon className="text-neutral-400" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Únete a +200 líderes. Cancelas cuando quieras.
            </p>
</div>
</main>

<section className="w-full border-t border-white/5 bg-neutral-950/50 backdrop-blur-sm relative z-10">
<div className="max-w-6xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

<div className="flex flex-col items-start text-left">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-5">
<iconify-icon className="text-xl text-neutral-300" icon="solar:stopwatch-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Tiempo Eficiente</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Planes de entrenamiento de 30 a 45 minutos diseñados específicamente para encajar en agendas caóticas y viajes de negocios.
                    </p>
</div>

<div className="flex flex-col items-start text-left">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-5">
<iconify-icon className="text-xl text-neutral-300" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Networking Real</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Conecta con otros CEOs y fundadores. Citas para correr juntos si coinciden en la misma ciudad o retos virtuales en equipo.
                    </p>
</div>

<div className="flex flex-col items-start text-left">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-5">
<iconify-icon className="text-xl text-neutral-300" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Responsabilidad</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        No estás solo. Seguimiento de progreso, ranking privado amigable y la presión social positiva que necesitas para no abandonar.
                    </p>
</div>
</div>
</div>
</section>

<footer className="w-full border-t border-white/5 py-8 mt-auto z-10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-xs text-neutral-500 font-medium">
                © 2024 R/E. Todos los derechos reservados.
            </div>
<div className="flex items-center gap-6 text-xs font-medium text-neutral-500">
<a className="hover:text-neutral-300 transition-colors" href="#">Privacidad</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Términos</a>
</div>
</div>
</footer>

    </>
  );
}
