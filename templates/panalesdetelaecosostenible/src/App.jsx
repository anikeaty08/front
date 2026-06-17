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
      

<main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">

<section className="h-screen w-full snap-start flex items-center justify-center p-4 sm:p-6">
<div className="w-full max-w-sm aspect-[3/4] bg-white rounded-[2rem] shadow-2xl border border-zinc-100 relative overflow-hidden flex flex-col justify-between p-8">

<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60"></div>

<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 mb-6">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="text-xs font-medium text-zinc-500 tracking-wide uppercase">Guía Definitiva</span>
</div>
<h1 className="text-4xl font-semibold tracking-tight text-zinc-900 leading-[1.1]">
                        ¿Sabías que tirarás <span className="text-indigo-600">1.500€</span> a la basura?
                    </h1>
</div>

<div className="relative z-10 flex flex-col gap-4 my-auto">
<div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
<div className="p-3 bg-white rounded-xl shadow-sm border border-zinc-100 text-zinc-400">
<iconify-icon icon="lucide:trash-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight">5.500</p>
<p className="text-xs text-zinc-500">Pañales desechables por bebé</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
<div className="p-3 bg-white rounded-xl shadow-sm text-indigo-600">
<iconify-icon icon="lucide:repeat" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight text-indigo-900">Reutilizable</p>
<p className="text-xs text-indigo-700">La alternativa moderna</p>
</div>
</div>
</div>

<div className="relative z-10 border-t border-zinc-100 pt-6 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-medium text-zinc-600">YN</div>
<span className="text-sm font-medium text-zinc-600 tracking-tight">{YourName}</span>
</div>
<span className="text-xs font-medium text-zinc-400">Desliza ↓</span>
</div>
</div>
</section>

<section className="h-screen w-full snap-start flex items-center justify-center p-4 sm:p-6">
<div className="w-full max-w-sm aspect-[3/4] bg-white rounded-[2rem] shadow-2xl border border-zinc-100 relative overflow-hidden flex flex-col p-8">

<div className="absolute top-6 right-8 text-xs font-medium text-zinc-300">01/08</div>
<div className="mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">No son los de tu abuela</h2>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Olvida los imperdibles y los plásticos. Los pañales modernos (ADZ Nadons) son técnicos, fáciles y bonitos.
                    </p>
</div>

<div className="grid grid-cols-1 gap-3 flex-1 overflow-y-auto no-scrollbar">

<div className="p-4 rounded-2xl border border-zinc-100 bg-zinc-50/50">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-indigo-600" icon="lucide:layers" strokeWidth="1.5" width="18"></iconify-icon>
<h3 className="text-sm font-medium text-zinc-900">Todo en Uno (AIO)</h3>
</div>
<p className="text-xs text-zinc-500 leading-snug">Una sola pieza. Igual de fácil que un desechable. Ideal guarderías.</p>
</div>

<div className="p-4 rounded-2xl border border-indigo-100 bg-indigo-50/30">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-indigo-600" icon="lucide:pocket" strokeWidth="1.5" width="18"></iconify-icon>
<h3 className="text-sm font-medium text-indigo-900">Rellenables (Pocket)</h3>
<span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-medium ml-auto">Top Ventas</span>
</div>
<p className="text-xs text-indigo-800/80 leading-snug">Secado rápido. Tú controlas la absorción metiendo más capas en el bolsillo.</p>
</div>

<div className="p-4 rounded-2xl border border-zinc-100 bg-zinc-50/50">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-indigo-600" icon="lucide:combine" strokeWidth="1.5" width="18"></iconify-icon>
<h3 className="text-sm font-medium text-zinc-900">Ajustados + Cobertor</h3>
</div>
<p className="text-xs text-zinc-500 leading-snug">Máxima absorción para la noche. A prueba de bombas.</p>
</div>
</div>
</div>
</section>

<section className="h-screen w-full snap-start flex items-center justify-center p-4 sm:p-6">
<div className="w-full max-w-sm aspect-[3/4] bg-white rounded-[2rem] shadow-2xl border border-zinc-100 relative overflow-hidden flex flex-col p-8">
<div className="absolute top-6 right-8 text-xs font-medium text-zinc-300">02/08</div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-6">¿Por qué cambiar?</h2>
<div className="space-y-4 flex-1 flex flex-col justify-center">

<div className="group">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon icon="lucide:piggy-bank" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-900 tracking-tight">Ahorro brutal</h3>
</div>
<div className="pl-11 border-l-2 border-zinc-100 ml-4 py-1">
<div className="flex justify-between text-xs mb-1">
<span className="text-zinc-500">Desechables</span>
<span className="text-zinc-900 font-medium">1.500€</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-1.5 mb-3">
<div className="bg-red-400 h-1.5 rounded-full w-full"></div>
</div>
<div className="flex justify-between text-xs mb-1">
<span className="text-zinc-500">Tela (Pack Total)</span>
<span className="text-zinc-900 font-medium">350€</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-1.5">
<div className="bg-emerald-500 h-1.5 rounded-full w-[25%]"></div>
</div>
</div>
</div>

<div className="group pt-2">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-900 tracking-tight">Planeta</h3>
</div>
<p className="pl-11 text-xs text-zinc-500 leading-relaxed">
                            Un pañal desechable tarda <span className="text-zinc-900 font-medium">500 años</span> en degradarse. Con tela, generas 0 residuos plásticos.
                        </p>
</div>

<div className="group pt-2">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-900 tracking-tight">Piel Sana</h3>
</div>
<p className="pl-11 text-xs text-zinc-500 leading-relaxed">
                            Sin químicos, perfumes ni geles. Solo Bambú, Algodón o Cáñamo. Adiós irritaciones.
                        </p>
</div>
</div>
</div>
</section>

<section className="h-screen w-full snap-start flex items-center justify-center p-4 sm:p-6">
<div className="w-full max-w-sm aspect-[3/4] bg-zinc-900 rounded-[2rem] shadow-2xl border border-zinc-800 relative overflow-hidden flex flex-col p-8 text-white">
<div className="absolute top-6 right-8 text-xs font-medium text-zinc-600">03/08</div>
<h2 className="text-2xl font-semibold tracking-tight mb-8">Anatomía del Pañal</h2>
<div className="relative flex-1 flex flex-col items-center justify-center space-y-6">

<div className="absolute left-1/2 top-4 bottom-4 w-px bg-zinc-800 -translate-x-1/2 z-0"></div>

<div className="relative z-10 w-full bg-zinc-800/50 backdrop-blur-sm p-4 rounded-xl border border-zinc-700 flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 shrink-0">
<iconify-icon icon="lucide:shield" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight">El Cobertor</h3>
<p className="text-[10px] text-zinc-400">Impermeable y transpirable. Se ajusta con snaps o velcro.</p>
</div>
</div>

<div className="relative z-10 w-full bg-zinc-800/80 p-4 rounded-xl border border-indigo-500/30 flex items-center gap-4 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
<div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="lucide:droplets" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight">El Absorbente</h3>
<p className="text-[10px] text-zinc-300">El motor. Bambú (antibacteriano) o Algodón. Retiene el líquido.</p>
</div>
</div>

<div className="relative z-10 w-full bg-zinc-800/50 backdrop-blur-sm p-4 rounded-xl border border-zinc-700 flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 shrink-0">
<iconify-icon icon="lucide:file-text" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight">El Protector</h3>
<p className="text-[10px] text-zinc-400">Opcional. Recoge la caca para tirarla fácilmente. Biodegradable.</p>
</div>
</div>
</div>
</div>
</section>

<section className="h-screen w-full snap-start flex items-center justify-center p-4 sm:p-6">
<div className="w-full max-w-sm aspect-[3/4] bg-white rounded-[2rem] shadow-2xl border border-zinc-100 relative overflow-hidden flex flex-col p-8">
<div className="absolute top-6 right-8 text-xs font-medium text-zinc-300">04/08</div>
<div className="mb-4">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Ajuste Perfecto</h2>
<p className="text-xs text-zinc-500 mt-1">La clave para evitar fugas.</p>
</div>
<div className="flex-1 grid grid-cols-2 gap-3 content-start">

<div className="col-span-2 bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-medium text-zinc-900">1. Altura</h3>
<span className="text-[10px] bg-zinc-200 px-1.5 py-0.5 rounded text-zinc-600 font-mono">Snaps</span>
</div>
<p className="text-xs text-zinc-500">Reduce la talla usando los broches frontales antes de ponerlo. Ombligo libre en RN.</p>
</div>

<div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100">
<iconify-icon className="text-indigo-600 mb-2" icon="lucide:move-vertical" width="20"></iconify-icon>
<h3 className="text-sm font-medium text-indigo-900">Ingles</h3>
<p className="text-[10px] text-indigo-700 mt-1">Goma en el pliegue, no en el muslo.</p>
</div>

<div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
<iconify-icon className="text-zinc-600 mb-2" icon="lucide:maximize" width="20"></iconify-icon>
<h3 className="text-sm font-medium text-zinc-900">Cintura</h3>
<p className="text-[10px] text-zinc-500 mt-1">Deben caber dos dedos de holgura.</p>
</div>

<div className="col-span-2 pt-2">
<h4 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-3">Checklist Rápido</h4>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-600">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle-2" width="14"></iconify-icon>
                                Absorbente plano sin arrugas
                            </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle-2" width="14"></iconify-icon>
                                Body no aprieta el pañal
                            </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle-2" width="14"></iconify-icon>
                                Gomas metidas hacia dentro
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="h-screen w-full snap-start flex items-center justify-center p-4 sm:p-6">
<div className="w-full max-w-sm aspect-[3/4] bg-white rounded-[2rem] shadow-2xl border border-zinc-100 relative overflow-hidden flex flex-col p-8">
<div className="absolute top-6 right-8 text-xs font-medium text-zinc-300">05/08</div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-6">Lavado sin Drama</h2>
<div className="flex-1 relative pl-6 border-l border-zinc-100 space-y-8 my-auto">

<div className="relative">
<div className="absolute -left-[31px] w-6 h-6 rounded-full bg-zinc-100 border-2 border-white shadow-sm flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
</div>
<h3 className="text-sm font-medium text-zinc-900">Pre-lavado</h3>
<p className="text-xs text-zinc-500 mt-1">
                            Sólidos al WC. Almacena en seco (cubo aireado) máx 3 días. No remojar.
                        </p>
</div>

<div className="relative">
<div className="absolute -left-[31px] w-6 h-6 rounded-full bg-indigo-100 border-2 border-white shadow-sm flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
</div>
<h3 className="text-sm font-medium text-zinc-900">Lavadora</h3>
<p className="text-xs text-zinc-500 mt-1">
                            Programa algodón 30-40°C. <br/>
<span className="font-medium text-indigo-600">Detergente en polvo.</span><br/>
                            Sin suavizante (¡jamás!).
                        </p>
</div>

<div className="relative">
<div className="absolute -left-[31px] w-6 h-6 rounded-full bg-zinc-100 border-2 border-white shadow-sm flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
</div>
<h3 className="text-sm font-medium text-zinc-900">Secado</h3>
<p className="text-xs text-zinc-500 mt-1">
                            El sol es el mejor blanqueante. Cobertores siempre a la sombra. Evita secadora para el impermeale.
                        </p>
</div>
<div className="bg-red-50 p-3 rounded-lg border border-red-100 mt-4">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-red-500" icon="lucide:alert-triangle" width="14"></iconify-icon>
<span className="text-xs font-semibold text-red-700">Prohibido</span>
</div>
<p className="text-[10px] text-red-600/80">Lejía, Suavizante, Jabón casero (tapa el poro).</p>
</div>
</div>
</div>
</section>

<section className="h-screen w-full snap-start flex items-center justify-center p-4 sm:p-6">
<div className="w-full max-w-sm aspect-[3/4] bg-zinc-50 rounded-[2rem] shadow-2xl border border-zinc-200 relative overflow-hidden flex flex-col p-8">
<div className="absolute top-6 right-8 text-xs font-medium text-zinc-300">06/08</div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-6">¿Problemas?</h2>
<div className="space-y-3 flex-1 overflow-y-auto no-scrollbar">

<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<h3 className="text-sm font-medium text-zinc-900">Fugas</h3>
<iconify-icon className="text-zinc-400" icon="lucide:umbrella" width="16"></iconify-icon>
</div>
<p className="text-xs text-zinc-500 mb-2">Suele ser por mal ajuste o saturación.</p>
<div className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-1 rounded inline-block">
                            Solución: Revisa ingles o añade refuerzo.
                        </div>
</div>

<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<h3 className="text-sm font-medium text-zinc-900">Olor fuerte</h3>
<iconify-icon className="text-zinc-400" icon="lucide:wind" width="16"></iconify-icon>
</div>
<p className="text-xs text-zinc-500 mb-2">Acumulación de detergente (amoníaco).</p>
<div className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-1 rounded inline-block">
                            Solución: Lavado a 60°C sin jabón.
                        </div>
</div>

<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<h3 className="text-sm font-medium text-zinc-900">Irritación</h3>
<iconify-icon className="text-zinc-400" icon="lucide:frown" width="16"></iconify-icon>
</div>
<p className="text-xs text-zinc-500 mb-2">Humedad o reacción al detergente.</p>
<div className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-1 rounded inline-block">
                            Solución: Cambia más seguido.
                        </div>
</div>
</div>
</div>
</section>

<section className="h-screen w-full snap-start flex items-center justify-center p-4 sm:p-6">
<div className="w-full max-w-sm aspect-[3/4] bg-white rounded-[2rem] shadow-2xl border border-zinc-100 relative overflow-hidden flex flex-col p-8 justify-between">
<div className="text-center mt-4">
<div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">¿Listo para empezar?</h2>
<p className="text-sm text-zinc-500 mt-2">Empieza fácil, sin presión.</p>
</div>
<div className="space-y-4">
<div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
<h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-3">Tu plan de inicio</h3>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-600">
<span className="w-4 h-4 rounded-full border border-zinc-300 flex items-center justify-center text-[8px]">1</span>
                                Prueba la <strong>Caja Muestra</strong>
</li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<span className="w-4 h-4 rounded-full border border-zinc-300 flex items-center justify-center text-[8px]">2</span>
                                Lava cada 2 días
                            </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<span className="w-4 h-4 rounded-full border border-zinc-300 flex items-center justify-center text-[8px]">3</span>
                                Ahorra +1.000€
                            </li>
</ul>
</div>
</div>
<div className="space-y-3">
<button className="w-full py-4 bg-zinc-900 text-white rounded-xl text-sm font-medium tracking-tight shadow-lg hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                        Ver Kits de Inicio
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<p className="text-[10px] text-center text-zinc-400">
                        Certificado Oeko-Tex Standard 100 Clase I
                    </p>
</div>
</div>
</section>
</main>

<div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
</div>

    </>
  );
}
