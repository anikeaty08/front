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



        lucide.createIcons();
    
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
      

<div className="fixed top-0 left-0 w-full h-full bg-grid z-0 pointer-events-none"></div>
<div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

<section className="min-h-screen w-full flex flex-col items-center justify-center pt-16 pb-24 px-6 relative z-10">
<div className="flex flex-col w-full max-w-lg items-center">

<div className="animate-fade-up opacity-0 flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm mb-6 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-emerald-400 tracking-wide uppercase">Entrenamiento Gratuito</span>
</div>

<h1 className="animate-fade-up opacity-0 [animation-delay:100ms] text-4xl md:text-5xl font-semibold tracking-tighter text-center text-white mb-2 leading-[0.95]">
                REBELIÓN<br/><span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-200 to-emerald-500">DIGITAL</span>
</h1>

<div className="animate-fade-up opacity-0 [animation-delay:200ms] text-center mt-8 mb-8 space-y-4">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white leading-tight">
                    Descubre el Nuevo Sistema Que Utilizo para extraer un mínimo de <span className="text-emerald-400 font-semibold border-b border-emerald-500/30 pb-0.5">1357 dólares a la Semana</span>
</h2>
</div>

<div className="animate-fade-up opacity-0 [animation-delay:400ms] space-y-6 mb-10 text-center max-w-sm">
<p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                    "Aprovechándome de una <span className="text-white font-medium decoration-emerald-500/50 underline underline-offset-4 decoration-2">Zona Escondida</span> en las Redes Sociales"
                    <span className="block text-sm text-neutral-500 mt-2 font-normal">(El 87% ni sabe de su existencia)</span>
</p>
<p className="text-base text-neutral-400">
                    Este es el Sistema Minimalista que cientos ya están copiando para lograr la “Libertad Financiera”
                </p>
</div>

<form className="animate-fade-up opacity-0 [animation-delay:500ms] w-full flex flex-col gap-4 relative z-20">
<div className="group relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-emerald-400 transition-colors">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<label className="sr-only" htmlFor="email">Tu mejor e-mail</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-4 pl-12 pr-4 text-lg text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all shadow-sm" id="email" placeholder="Ingresa tu correo electrónico..." required="" type="email"/>
</div>

<button className="group relative w-full py-4 bg-white text-neutral-950 rounded-xl font-semibold text-lg tracking-tight overflow-hidden hover:scale-[1.01] transition-all duration-300 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]" type="submit">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="relative z-10 flex items-center justify-center gap-2">
                        INSCRIBIRME GRATIS
                        <iconify-icon className="transition-transform group-hover:translate-x-1" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</span>
</button>

<div className="flex items-center justify-center gap-2 mt-2 opacity-60">
<iconify-icon className="text-neutral-400" height="16" icon="solar:lock-keyhole-linear" width="16"></iconify-icon>
<span className="text-xs text-neutral-400">Tus datos están 100% seguros y libres de spam.</span>
</div>
</form>

<div className="animate-fade-up opacity-0 [animation-delay:600ms] mt-12 pt-8 border-t border-white/5 w-full text-center mb-16">
<p className="text-sm text-neutral-500">
                    Cualquier persona con conexión a Internet puede aprovecharse de esta “Grieta”..
                </p>
</div>

<div className="w-full animate-fade-up opacity-0 [animation-delay:800ms] flex flex-col items-center gap-5 relative z-20">

<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md">
<i className="w-3.5 h-3.5 text-amber-500" data-lucide="triangle-alert" strokeWidth="2"></i>
<span className="text-xs text-neutral-500 font-medium tracking-wide">*Esta clase no será grabada y no tendrá repetición*</span>
</div>

<div className="w-full relative rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl">
<div className="absolute top-0 left-0 w-full h-[3px] bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.5)]"></div>
<div className="p-8 md:p-10 flex flex-col items-center text-center">
<h3 className="text-red-500 font-semibold tracking-[0.2em] text-sm mb-5 uppercase drop-shadow-[0_0_15px_rgba(220,38,38,0.4)]">
                            ¡Mucho cuidado con esto!
                        </h3>
<h4 className="text-2xl md:text-3xl font-semibold text-white tracking-tight leading-[1.15] mb-6">
                            NO deberias estar viendo esto, pero si has llegado hasta <span className="text-sky-400 font-semibold">aquí te daré esta "OPORTUNIDAD"</span>
</h4>
<p className="text-base md:text-lg text-neutral-400 leading-relaxed mb-8 max-w-sm mx-auto">
                            Hay una verdadera grieta en el sistema tradicional que te permite ganar dinero en silencio, cambiar tu vida mientras la mayoría sigue luchando contra el modelo antiguo.
                        </p>
<p className="text-white text-sm md:text-base font-medium underline underline-offset-4 decoration-neutral-600 tracking-tight">
                            ¡Y quien llegue primero, cambiará DRASTICAMENTE su situación financiera!
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#0B0F0E] py-24 relative z-20 border-t border-white/5">
<div className="max-w-lg mx-auto px-6 flex flex-col items-center">

<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center text-white mb-12 leading-tight">
                No estamos aquí por casualidad.
            </h2>

<div className="space-y-8 text-lg text-neutral-400 leading-relaxed text-center font-normal">
<p>Durante años nos enseñaron que el único camino era:</p>
<p className="text-neutral-300 font-medium">
                    Estudiar…<br/>
                    Trabajar 8 a 10 horas al día…<br/>
                    Esperar el fin de semana…<br/>
                    Y repetir el ciclo toda la vida.
                </p>
<p>Pero algo dentro de ti sabe que ese no es el camino.</p>
<p>
                    Sabes que hay más.<br/>
                    Sabes que el dinero no debería depender de tu tiempo.<br/>
                    Sabes que internet cambió las reglas del juego.
                </p>
<p>Y mientras la mayoría sigue atrapada en el sistema…</p>
<p className="text-white font-medium">
                    Un grupo de personas ya está creando ingresos desde su celular,
                    aprovechando oportunidades que el 87% de las personas ni siquiera conoce.
                </p>
</div>

<div className="mt-20 mb-16 text-center space-y-2">
<h3 className="text-2xl font-medium tracking-tight text-white">Esto no es una moda.</h3>
<p className="text-xl text-[#00E6A7] tracking-tight font-medium">Es el inicio de una nueva economía.</p>
</div>

<div className="grid grid-cols-1 gap-6 w-full mb-20">

<div className="rounded-2xl bg-[#111111] border border-neutral-800 p-8 flex flex-col gap-5">
<div className="flex items-center gap-3 mb-2">
<span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500/90">Antes</span>
<div className="h-px flex-1 bg-gradient-to-r from-red-500/20 to-transparent"></div>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-neutral-400">
<iconify-icon className="text-red-500/80 mt-0.5 shrink-0" icon="solar:close-square-linear" width="20"></iconify-icon>
<span>Depender de un salario</span>
</li>
<li className="flex items-start gap-3 text-neutral-400">
<iconify-icon className="text-red-500/80 mt-0.5 shrink-0" icon="solar:close-square-linear" width="20"></iconify-icon>
<span>Pedir permiso para vivir</span>
</li>
<li className="flex items-start gap-3 text-neutral-400">
<iconify-icon className="text-red-500/80 mt-0.5 shrink-0" icon="solar:close-square-linear" width="20"></iconify-icon>
<span>Cambiar tiempo por dinero</span>
</li>
<li className="flex items-start gap-3 text-neutral-400">
<iconify-icon className="text-red-500/80 mt-0.5 shrink-0" icon="solar:close-square-linear" width="20"></iconify-icon>
<span>Estrés financiero constante</span>
</li>
</ul>
</div>

<div className="rounded-2xl bg-[#00E6A7]/5 border border-[#00E6A7]/20 p-8 flex flex-col gap-5 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-[#00E6A7]/5 to-transparent opacity-50 pointer-events-none"></div>
<div className="flex items-center gap-3 mb-2 relative z-10">
<span className="text-xs font-bold tracking-[0.2em] uppercase text-[#00E6A7]">Después</span>
<div className="h-px flex-1 bg-gradient-to-r from-[#00E6A7]/30 to-transparent"></div>
</div>
<ul className="space-y-4 relative z-10">
<li className="flex items-start gap-3 text-white">
<iconify-icon className="text-[#00E6A7] mt-0.5 shrink-0" icon="solar:check-square-linear" width="20"></iconify-icon>
<span>Ingresos digitales escalables</span>
</li>
<li className="flex items-start gap-3 text-white">
<iconify-icon className="text-[#00E6A7] mt-0.5 shrink-0" icon="solar:check-square-linear" width="20"></iconify-icon>
<span>Libertad de tiempo</span>
</li>
<li className="flex items-start gap-3 text-white">
<iconify-icon className="text-[#00E6A7] mt-0.5 shrink-0" icon="solar:check-square-linear" width="20"></iconify-icon>
<span>Trabajar desde cualquier lugar</span>
</li>
<li className="flex items-start gap-3 text-white">
<iconify-icon className="text-[#00E6A7] mt-0.5 shrink-0" icon="solar:check-square-linear" width="20"></iconify-icon>
<span>Control total de tu vida financiera</span>
</li>
</ul>
</div>
</div>

<div className="text-center space-y-8 text-lg text-neutral-400 mb-16">
<h4 className="text-3xl text-white tracking-tight font-medium">La Rebelión Digital ya comenzó.</h4>
<p>
                    Miles de personas están despertando,<br/>
                    dejando atrás el modelo tradicional,<br/>
                    y construyendo su propia fuente de ingresos online.
                </p>
<div className="pt-4 space-y-4">
<p className="text-white font-medium">
                        La pregunta es:
                    </p>
<p className="text-neutral-300 italic">
                        ¿Vas a seguir observando…<br/>
                        o vas a ser parte del cambio?
                    </p>
</div>
</div>

<button className="w-full py-5 bg-[#00E6A7] hover:bg-[#00E6A7]/90 text-[#0B0F0E] rounded-xl font-bold text-lg md:text-xl tracking-tight transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_40px_-10px_rgba(0,230,167,0.5)] flex items-center justify-center gap-2 group">
                QUIERO SER PARTE DE LA REBELIÓN
                <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="2.5" width="24"></iconify-icon>
</button>
</div>
</section>

<section className="w-full bg-[#080a0a] border-t border-white/5 py-24 relative overflow-hidden z-20">

<div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none opacity-20"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

<div className="w-full md:w-5/12 relative group flex justify-center">

<div className="absolute inset-0 bg-emerald-500/20 blur-[60px] rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>

<div className="relative z-10 w-full max-w-[280px] md:max-w-sm">

<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50 backdrop-blur-sm shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">

<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60 z-10"></div>

<img alt="Enrique Hermosilla" className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3 rounded-lg bg-neutral-950/80 border border-white/10 backdrop-blur-md">
<div>
<p className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold mb-0.5">Experto</p>
<p className="text-white text-xs font-medium">Enrique Hermosilla</p>
</div>
<div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<i className="w-4 h-4" data-lucide="verified"></i>
</div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-7/12 space-y-8 md:pl-4">

<div className="space-y-4 text-center md:text-left">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white leading-tight">
                            ¿Quién va a mostrarme esta oportunidad?
                        </h2>

<div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20">
<i className="w-3.5 h-3.5 text-emerald-400" data-lucide="sparkles"></i>
<span className="text-emerald-400 text-xs font-semibold tracking-wide uppercase">"Considerado un Genio por los Medios"</span>
</div>
</div>

<div className="space-y-6 text-lg text-neutral-400 leading-relaxed font-normal text-center md:text-left">
<p>
<span className="text-white font-medium border-b border-emerald-500/30 pb-0.5">Enrique Hermosilla</span> es un “Nómada” que vive vendiendo 24/7 desde cualquier lugar del mundo.
                        </p>
<p>
                            Una persona que empezó desde cero, sin ayuda, sin capital, sin contactos y ahora está viviendo la vida que algunos solo “sueñan” gracias a que aprovechó una <span className="text-white font-medium italic">“Oportunidad”</span>.
                        </p>

<div className="flex items-center gap-3 justify-center md:justify-start pt-2">
<div className="h-px w-8 bg-emerald-500/50"></div>
<p className="text-xl text-white font-medium tracking-tight">
                                Y ahora mismo, está a tu alcance.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
