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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[100px] mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded flex items-center justify-center">
<svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><path d="M12 2v20M2 12h20"></path></svg>
</div>
<span className="text-white font-semibold tracking-tight text-sm">PROPFUND<span className="text-slate-500">LABS</span></span>
</div>
<div className="hidden md:flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-medium text-emerald-400 uppercase tracking-wider">Admisiones Abiertas</span>
</div>
</div>
</div>
</nav>

<section className="relative z-10 pt-32 pb-20 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="space-y-6 animate-fade-up">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded border border-white/10 bg-white/5 backdrop-blur text-[10px] font-medium text-slate-300 uppercase tracking-widest">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Educación Institucional 100% Bonificada
            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white leading-[1.05]">
              Maneja el dinero <br/>
<span className="text-gradient-emerald">de los bancos.</span>
</h1>
<p className="text-lg text-slate-400 font-light leading-relaxed max-w-xl">
              La barrera del capital ha sido eliminada. Te formamos gratis con IA y estrategias institucionales. Tu único objetivo: pasar la prueba y gestionar hasta <span className="text-white font-medium">$2,000,000 USD</span>.
            </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-white px-8 font-medium text-black transition-all duration-300 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black" onclick="document.getElementById('application').scrollIntoView({behavior: 'smooth'})">
<span className="relative flex items-center gap-2">
                  Aplicar Ahora
                  <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
</button>
<div className="flex items-center gap-[-10px] px-4">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full border-2 border-black bg-slate-700"></div>
<div className="w-8 h-8 rounded-full border-2 border-black bg-slate-600"></div>
<div className="w-8 h-8 rounded-full border-2 border-black bg-slate-500 flex items-center justify-center text-[10px] font-bold text-white">+2k</div>
</div>
<div className="ml-4 text-xs text-slate-400">
<span className="block text-white font-medium">Comunidad Elite</span>
                  Traders fondeados
                </div>
</div>
</div>
<div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-6">
<div>
<div className="text-2xl font-semibold text-emerald-400 tracking-tight">200%</div>
<div className="text-xs text-slate-500 uppercase tracking-wider">Retorno Auditado 2025</div>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight">$0</div>
<div className="text-xs text-slate-500 uppercase tracking-wider">Costo Educativo</div>
</div>
</div>
</div>

<div className="relative animate-fade-up delay-200">

<div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 rounded-xl blur-2xl opacity-50"></div>
<div className="relative rounded-xl border border-white/10 bg-neutral-900 overflow-hidden shadow-2xl shadow-black/50 aspect-video group cursor-pointer">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-neutral-900 to-black opacity-80"></div>

<div className="absolute top-4 left-4 flex items-center gap-2 z-10">
<div className="px-2 py-1 bg-black/60 backdrop-blur rounded text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5 border border-white/5">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                  Live Training
                </div>
</div>
<div className="absolute inset-0 flex items-center justify-center z-20">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/20">
<i className="w-6 h-6 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-10">
<p className="text-xs text-emerald-400 font-medium mb-1 tracking-wide">VIDEO EXPLICATIVO (3 MIN)</p>
<h3 className="text-lg font-medium text-white">El método algorítmico para aprobar tu prueba de fondeo</h3>

<div className="w-full h-1 bg-white/10 rounded-full mt-4 overflow-hidden">
<div className="h-full w-1/3 bg-emerald-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
<div className="flex items-center gap-6">
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-500" data-lucide="users"></i>
            2,143 Miembros Activos
          </span>
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-500" data-lucide="trending-up"></i>
            $2M Meta de Fondeo
          </span>
</div>
<div className="flex items-center gap-3">
<span className="uppercase tracking-wider font-medium text-emerald-500">Cupos de Marzo:</span>
<div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full w-[85%] bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full"></div>
</div>
<span className="text-white">85% Lleno</span>
</div>
</div>
</div>

<section className="py-24 px-6 relative">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Ecosistema Profesional</h2>
<p className="text-slate-400 max-w-2xl mx-auto">
            Hemos democratizado el acceso a herramientas que antes solo tenían los hedge funds.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass p-8 rounded-xl hover:bg-white/5 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-emerald-500/50 transition-colors">
<i className="w-5 h-5 text-emerald-400" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Trading + IA</h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Integramos algoritmos de inteligencia artificial para detectar patrones institucionales invisibles al ojo humano.
            </p>
</div>

<div className="glass p-8 rounded-xl hover:bg-white/5 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-emerald-500/50 transition-colors">
<i className="w-5 h-5 text-emerald-400" data-lucide="video"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Seminarios &amp; En Vivo</h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Acceso a la "Bóveda": +100h de seminarios grabados y sesiones de trading en vivo semanales con mentores auditados.
            </p>
</div>

<div className="glass p-8 rounded-xl hover:bg-white/5 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-emerald-500/50 transition-colors">
<i className="w-5 h-5 text-emerald-400" data-lucide="wallet"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Camino al Fondeo</h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Roadmap claro desde principiante hasta gestionar una cuenta de $100k, $500k y escalar hasta $2M.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-neutral-900/50 to-black border-y border-white/5">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-16 text-center">Tu Ruta de Capitalización</h2>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -translate-y-1/2"></div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="relative flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-white font-semibold mb-6 relative z-10 group-hover:border-emerald-500 transition-colors shadow-lg shadow-black">1</div>
<h3 className="text-white font-medium mb-2">Formación Gratuita</h3>
<p className="text-sm text-slate-400">Accede a la academia y domina la estrategia sin pagar mensualidades.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-white font-semibold mb-6 relative z-10 group-hover:border-emerald-500 transition-colors shadow-lg shadow-black">2</div>
<h3 className="text-white font-medium mb-2">Validación</h3>
<p className="text-sm text-slate-400">Demuestra consistencia en simulador y aplica a la fase de evaluación.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-xl bg-emerald-500 border border-emerald-400 flex items-center justify-center text-black font-bold mb-6 relative z-10 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
<i className="w-6 h-6" data-lucide="check"></i>
</div>
<h3 className="text-emerald-400 font-medium mb-2">Trader Fondeado</h3>
<p className="text-sm text-slate-400">Recibe capital real. Gana el 80% de los beneficios que generes.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-3xl mx-auto">
<div className="glass-high rounded-2xl p-8 border border-white/10">
<div className="flex items-start gap-4">
<div className="mt-1">
<i className="text-emerald-400 w-6 h-6" data-lucide="shield-alert"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Requisitos de Ingreso</h3>
<p className="text-sm text-slate-400 mb-6">
                No buscamos a cualquiera. Buscamos disciplina. La educación es gratuita, pero tu compromiso no es negociable.
              </p>
<ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle"></i>
                  Disponibilidad 3h/semana
                </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle"></i>
                  Laptop y conexión estable
                </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle"></i>
                  Edad mínima 18 años
                </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle"></i>
                  Psicología resiliente
                </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="application">

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-900/10 pointer-events-none"></div>
<div className="max-w-xl mx-auto relative z-10">
<div className="text-center mb-8">
<span className="text-emerald-400 font-medium tracking-wide text-xs uppercase mb-2 block">Últimos cupos disponibles</span>
<h2 className="text-3xl font-semibold text-white tracking-tight">Postulación Académica</h2>
<p className="text-sm text-slate-400 mt-2">
            Completa el formulario para liberar tu acceso a la plataforma educativa.
          </p>
</div>
<div className="glass-high p-8 rounded-2xl border border-white/10 relative shadow-2xl">
<form className="space-y-4" onsubmit="event.preventDefault(); window.location.href='https://instagram.com';">
<div className="grid grid-cols-1 gap-4">
<div>
<label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-1.5 ml-1">Nombre Completo</label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" placeholder="Ej: Juan Pérez" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-1.5 ml-1">Correo Electrónico</label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" placeholder="nombre@correo.com" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-1.5 ml-1">Instagram</label>
<div className="relative">
<span className="absolute left-3 top-3 text-slate-500 text-sm">@</span>
<input className="w-full bg-black/40 border border-white/10 rounded-lg pl-7 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" placeholder="usuario" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-1.5 ml-1">Edad</label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" min="18" placeholder="24" required="" type="number"/>
</div>
</div>
<div className="pt-2">
<button className="w-full group relative overflow-hidden bg-white text-black font-semibold py-4 rounded-lg text-sm transition-all hover:bg-slate-200" type="submit">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<span className="relative flex items-center justify-center gap-2">
                  Enviar Postulación
                  <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</button>
</div>
<p className="text-[10px] text-center text-slate-500 mt-4 leading-relaxed">
              Al hacer clic en "Enviar Postulación", serás redirigido a nuestro Instagram para verificar tu identidad. Tus datos están encriptados y seguros.
            </p>
</form>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black">
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="flex items-center justify-center gap-2 mb-6 opacity-50">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 2v20M2 12h20"></path></svg>
<span className="font-bold text-white tracking-tight">PROPFUND LABS</span>
</div>
<p className="text-[10px] text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
          DIVULGACIÓN DE RIESGOS: El trading de futuros y divisas contiene un riesgo sustancial y no es para todos los inversores. Un inversor podría perder todo o más de la inversión inicial. El capital de riesgo es dinero que se puede perder sin poner en peligro la seguridad financiera o el estilo de vida. Solo el capital de riesgo debe utilizarse para el trading y solo aquellos con suficiente capital de riesgo deben considerar el trading. El rendimiento pasado no es necesariamente indicativo de resultados futuros.
        </p>
<div className="text-[10px] text-slate-700 font-medium">
          © 2025 PropFund Labs. Todos los derechos reservados.
        </div>
</div>
</footer>


    </>
  );
}
