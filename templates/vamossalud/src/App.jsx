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
      

<nav className="fixed top-0 z-50 w-full border-b border-white/50 bg-white/60 backdrop-blur-xl transition-all duration-300">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-3">

<img alt="Vamos Salud Logo" className="h-9 w-9 rounded-lg shadow-lg shadow-indigo-500/20 object-cover" src="https://placehold.co/100x100/4f46e5/ffffff?text=V"/>
<span className="text-sm font-bold tracking-tight text-slate-900">VAMOS SALUD</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#beneficios">Beneficios</a>
<a className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#proceso">Proceso</a>
<a className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#financiamiento">Inversión</a>
</div>
<a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white shadow-lg transition-all hover:bg-slate-800 hover:shadow-slate-900/25 hover:scale-105" href="#registro-final">
<span>Aplicar ahora</span>
<iconify-icon className="ml-1 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white">

<div className="absolute inset-0 bg-dots opacity-60"></div>
<div className="absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-purple-200 to-indigo-100 blur-3xl opacity-50 mix-blend-multiply"></div>
<div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-100 to-cyan-100 blur-3xl opacity-50 mix-blend-multiply"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-noise opacity-50 pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="max-w-2xl relative">
<div className="inline-flex gap-2 text-[11px] font-semibold text-indigo-700 bg-white border border-indigo-100 rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-4 shadow-sm items-center hover:shadow-md transition-shadow cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        Convocatoria Abierta 2026
                    </div>
<h1 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-7xl mb-6 leading-[1.05]">
                        Tu carrera de enfermería <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient bg-300%">en Estados Unidos.</span>
</h1>
<p className="leading-relaxed text-lg text-slate-500 max-w-lg mb-10">
                        Programa integral de financiamiento y empleabilidad. Te preparamos, financiamos tu proceso y te conectamos con hospitales en EE.UU.
                    </p>
<div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
<div className="flex -space-x-4">
<img alt="Nurse" className="h-12 w-12 rounded-full ring-4 ring-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&amp;fit=crop&amp;q=80&amp;w=100" style={{}}/>
<img alt="Nurse" className="h-12 w-12 rounded-full ring-4 ring-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&amp;fit=crop&amp;q=80&amp;w=100" style={{}}/>
<img alt="Doctor" className="h-12 w-12 rounded-full ring-4 ring-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 ring-4 ring-white text-xs font-bold text-slate-600 shadow-sm border border-slate-100">TN</div>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-600">Patrocinio Visa TN-2 Garantizado</p>
</div>
</div>
</div>

<div className="relative w-full max-w-md mx-auto lg:ml-auto group" id="aplicar">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
<div className="relative bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl shadow-indigo-500/10 border border-white p-8">
<div className="mb-8 border-b border-slate-100 pb-4">
<h3 className="text-xl font-semibold text-slate-900">Pre-califica hoy</h3>
<p className="text-xs text-slate-500 mt-1">Evaluación de perfil gratuita en 2 minutos.</p>
</div>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Nombre</label>
<input className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-300" placeholder="Tu nombre" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Apellido</label>
<input className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-300" placeholder="Tu apellido" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Email</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3 text-slate-400" icon="solar:letter-linear"></iconify-icon>
<input className="w-full rounded-lg border border-slate-200 bg-slate-50/50 pl-9 pr-3 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-300" placeholder="correo@ejemplo.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Status Académico</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm text-slate-700 focus:border-indigo-500 focus:bg-white outline-none cursor-pointer hover:bg-slate-50">
<option>Licenciatura en Enfermería (Título)</option>
<option>Licenciatura (En trámite)</option>
<option className="bg-slate-100 text-slate-400" disabled="">Técnico (No elegible)</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full rounded-lg bg-slate-900 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mt-4 group/btn">
                                Iniciar Evaluación
                                <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 relative bg-slate-900 text-white overflow-hidden" id="beneficios">

<div className="absolute inset-0 bg-noise opacity-[0.07]"></div>
<div className="opacity-20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="-translate-x-1/2 blur-[120px] bg-indigo-500/20 w-full h-[500px] rounded-full absolute top-0 left-1/2"></div>
<div className="lg:px-8 max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-indigo-400 font-semibold tracking-wider text-xs uppercase mb-3 flex items-center justify-center gap-2">
<span className="w-8 h-px bg-indigo-400/50"></span>
                    Beneficios Exclusivos
                    <span className="w-8 h-px bg-indigo-400/50"></span>
</h2>
<h3 className="text-3xl font-semibold tracking-tight sm:text-5xl text-white">Recompensa tu esfuerzo a nivel internacional.</h3>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-7 relative group overflow-hidden rounded-3xl border border-white/10 bg-slate-800/50 p-8 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start mb-6">
<div>
<h4 className="text-2xl font-semibold text-white">Ingresos Competitivos</h4>
<p className="text-slate-400 mt-2 text-sm">Sueldos de tiempo completo (40h+).</p>
</div>
<div className="h-10 w-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
<iconify-icon icon="solar:wad-of-money-bold" width="20"></iconify-icon>
</div>
</div>
<div className="bg-slate-900/60 rounded-xl p-6 border border-white/5">
<div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight">$1,000 - $2,200 <span className="text-sm font-medium text-slate-500">USD/Semana</span></div>
<div className="mt-2 text-sm text-indigo-400 font-medium">$25 a $55 USD por hora laboral</div>
</div>
</div>
</div>

<div className="md:col-span-5 relative overflow-hidden rounded-3xl group border border-white/10 bg-slate-800/50 p-8">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-transparent"></div>
<div className="h-10 w-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 mb-6 relative z-10">
<iconify-icon icon="solar:card-recieved-bold" width="20"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-white relative z-10">Residencia Americana</h4>
<p className="text-sm text-slate-400 mt-2 font-light relative z-10">
                        Oportunidad de obtener la residencia permanente (Green Card) al término de tu contrato de 3 años.
                    </p>
</div>

<div className="md:col-span-6 relative overflow-hidden rounded-3xl border border-white/10 bg-slate-800/50 p-8 hover:bg-slate-800 transition-colors group">
<div className="flex justify-between items-start">
<div>
<div className="h-10 w-10 rounded-full bg-pink-500/10 text-pink-400 flex items-center justify-center border border-pink-500/20 mb-4">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-white">Familia Incluida</h4>
<p className="text-sm text-slate-400 mt-2 pr-4">
                                Tu cónyuge e hijos (&lt;21) viajan contigo. Ellos obtienen la  para residir legalmente.
                            </p>
</div>
</div>
</div>

<div className="md:col-span-6 relative overflow-hidden rounded-3xl border border-white/10 bg-slate-800/50 p-8 hover:bg-slate-800 transition-colors group">
<div className="flex justify-between items-start">
<div>
<div className="h-10 w-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 mb-4">
<iconify-icon icon="solar:passport-linear" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-white">Patrocinio Visa TN-2</h4>
<p className="text-sm text-slate-400 mt-2 pr-4">
                                Gestionamos tu visa de trabajo profesional bajo el tratado T-MEC, diseñada exclusivamente para mexicanos.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="proceso">
<div className="[background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-indigo-600 font-semibold tracking-wide text-xs uppercase mb-3">Certificación Global</h2>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Tus llaves al éxito</h2>
<p className="mt-4 text-slate-500 font-light text-lg">
                    Dominar estos dos exámenes es el requisito fundamental para ejercer en EE.UU.
                </p>
</div>

<div className="grid md:grid-cols-2 gap-8 mb-20">
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
<div className="flex items-center gap-4 mb-4">
<div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-indigo-500/30">TOEFL</div>
<h3 className="text-lg font-bold text-slate-900">Inglés Universitario</h3>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                        Examen reconocido internacionalmente que evalúa tu capacidad para usar el inglés a nivel profesional. Requisito indispensable para la Junta de Enfermería (Board of Nursing) y autoridades migratorias.
                    </p>
</div>
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
<div className="flex items-center gap-4 mb-4">
<div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-indigo-500/30">NCLEX</div>
<h3 className="text-lg font-bold text-slate-900">Licencia Clínica RN</h3>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                        Examen estandarizado nacional en EE.UU. Evalúa tus conocimientos y aptitudes para la práctica segura de la enfermería. Aprobarlo te convierte oficialmente en .
                    </p>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<h3 className="text-2xl font-semibold text-slate-900 mb-8">Roadmap de Preparación</h3>
<div className="pl-2 relative space-y-10">
<div className="absolute left-[27px] top-4 bottom-8 w-px bg-slate-200"></div>

<div className="relative flex gap-6 group">
<div className="flex-none h-14 w-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm relative z-10 group-hover:border-indigo-600 group-hover:text-indigo-600 transition-all">
<span className="font-bold text-lg font-mono">01</span>
</div>
<div className="pt-1">
<h4 className="text-lg font-semibold text-slate-900">Preparación Intensiva</h4>
<div className="inline-block bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-2 mt-1">6 a 20 meses</div>
<p className="text-sm text-slate-500 leading-relaxed">
                                    Cursos de inglés en vivo y estudio para NCLEX. La duración depende de tu nivel inicial y dedicación.
                                </p>
</div>
</div>

<div className="relative flex gap-6 group">
<div className="flex-none h-14 w-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm relative z-10 group-hover:border-indigo-600 group-hover:text-indigo-600 transition-all">
<span className="font-bold text-lg font-mono">02</span>
</div>
<div className="pt-1">
<h4 className="text-lg font-semibold text-slate-900">Validación y Licenciamiento</h4>
<div className="inline-block bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-2 mt-1">Tiempo Variable</div>
<p className="text-sm text-slate-500 leading-relaxed">
                                    Trámites académicos, aprobación de exámenes y obtención de credenciales oficiales en EE.UU.
                                </p>
</div>
</div>

<div className="relative flex gap-6 group">
<div className="flex-none h-14 w-14 rounded-2xl bg-indigo-600 border border-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 relative z-10">
<span className="font-semibold text-lg font-mono">03</span>
</div>
<div className="pt-1">
<h4 className="text-lg font-semibold text-slate-900">Visa TN y Migración</h4>
<div className="inline-block bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-2 mt-1">~3 Meses</div>
<p className="leading-relaxed text-sm text-slate-500">
                                    Oferta laboral, gestión consular de Visa TN-2 y traslado a tu nueva ciudad.
                                </p>
</div>
</div>
</div>
</div>

<div className="relative lg:h-[500px] flex items-center justify-center">
<img alt="Medical Study" className="rounded-2xl shadow-2xl shadow-indigo-900/10 object-cover h-full w-full rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a5e47bb-243a-4c10-8667-70b3faf5884c_800w.jpg" style={{}}/>
<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
<div className="flex gap-3 mb-2">
<div className="h-8 w-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:user-speak-rounded-bold" width="16"></iconify-icon>
</div>
<span className="text-xs font-bold text-slate-400 self-center uppercase">Clases en Vivo</span>
</div>
<p className="text-sm text-slate-600 font-medium">Mentores expertos te acompañan en cada nivel de inglés hasta tu certificación.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200" id="financiamiento">
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Financiamiento Inteligente</h2>
<p className="mt-4 text-slate-500 text-lg">
                    Invertimos en tu talento. El modelo está diseñado para que te enfoques en estudiar, no en cómo pagar.
                </p>
</div>

<div className="grid md:grid-cols-3 gap-6 items-start">

<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
<div className="text-center pb-6 border-b border-slate-100">
<span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Paso 1</span>
<div className="mt-4 flex items-baseline justify-center gap-1">
<span className="text-4xl font-bold text-slate-900">$176</span>
<span className="text-sm font-semibold text-slate-400">USD</span>
</div>
<h3 className="text-sm font-medium text-slate-900 mt-2">Depósito Inicial</h3>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-500">
<li className="flex gap-3">
<iconify-icon className="text-indigo-600 flex-shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Asegura tu lugar en el programa
                        </li>
<li className="flex gap-3">
<iconify-icon className="text-indigo-600 flex-shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Cubre materiales iniciales
                        </li>
<li className="flex gap-3">
<iconify-icon className="text-indigo-600 flex-shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Acceso inmediato a plataforma
                        </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-6 border-2 border-indigo-600 shadow-xl relative scale-105 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                        MÁS POPULAR
                    </div>
<div className="text-center pb-6 border-b border-slate-100">
<span className="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Tu Inversión</span>
<div className="mt-4">
<p className="text-xs text-slate-400 font-medium mb-1">Rango financiable</p>
<div className="flex items-baseline justify-center gap-1">
<span className="text-3xl font-bold text-slate-900">$1,950 - $4,696</span>
<span className="text-xs font-semibold text-slate-400">USD</span>
</div>
</div>
<h3 className="text-sm font-medium text-slate-500 mt-2 px-4">Depende de tu nivel de inglés y estilo de aprendizaje.</h3>
</div>
<div className="py-4 bg-green-50 rounded-lg mt-4 border border-green-100 text-center">
<span className="text-xs font-bold text-green-700 uppercase block mb-1">Bono de Contratación</span>
<span className="text-2xl font-bold text-green-600">-$1,000 USD</span>
<p className="text-[10px] text-green-700 mt-1 px-2 leading-tight">Se abona a tu deuda cuando empiezas a trabajar.</p>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-500">
<li className="flex gap-3">
<iconify-icon className="text-indigo-600 flex-shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span> $0 mensualidad durante preparación.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-indigo-600 flex-shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Incluye clases, NCLEX, visado y acompañamiento.</span>
</li>
</ul>
</div>

<div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-lg">
<div className="text-center pb-6 border-b border-white/10">
<span className="bg-white/10 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Al trabajar en USA</span>
<div className="mt-4 flex items-baseline justify-center gap-1">
<span className="text-4xl font-bold text-white">&lt;$435</span>
<span className="text-sm font-semibold text-slate-400">USD/mes</span>
</div>
<h3 className="text-sm font-medium text-slate-400 mt-2">Cuota mensual estimada</h3>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-400">
<li className="flex gap-3">
<iconify-icon className="text-indigo-400 flex-shrink-0 mt-0.5" icon="solar:shield-check-bold"></iconify-icon>
<span> Si no apruebas o no obtienes contrato, tu deuda se ajusta y reduce significativamente.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-indigo-400 flex-shrink-0 mt-0.5" icon="solar:calendar-bold"></iconify-icon>
<span>Plan de pagos de corta duración.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-indigo-400 flex-shrink-0 mt-0.5" icon="solar:users-group-rounded-bold"></iconify-icon>
<span> Aval con Score 650+.</span>
</li>
</ul>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-xs text-slate-400 max-w-2xl mx-auto bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    
                    El costo de visas para familiares (VISA TD) es aprox. <span className="font-bold text-slate-700">$450 USD por persona</span> y no está incluido en el financiamiento.
                </p>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="mx-auto max-w-4xl px-6">
<div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
<div className="text-center mb-8">
<h2 className="text-xl font-semibold text-slate-900">Requisitos de Elegibilidad</h2>
<p className="text-sm text-slate-500 mt-2">Filtros estrictos para asegurar la aprobación de tu visa TN.</p>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
<div className="h-10 w-10 rounded-full bg-slate-100 text-slate-600 flex-shrink-0 flex items-center justify-center">
<iconify-icon icon="solar:diploma-verified-linear" width="20"></iconify-icon>
</div>
<div>
<span className="font-bold text-sm text-slate-900 block mb-1">Licenciatura en Enfermería</span>
<p className="text-xs text-slate-500">Título y Cédula Profesional indispensables. <span className="text-red-500 font-medium block mt-1">❌ Técnicos NO son elegibles.</span></p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
<div className="h-10 w-10 rounded-full bg-slate-100 text-slate-600 flex-shrink-0 flex items-center justify-center">
<iconify-icon icon="solar:passport-linear" width="20"></iconify-icon>
</div>
<div>
<span className="font-bold text-sm text-slate-900 block mb-1">Nacionalidad Mexicana</span>
<p className="text-xs text-slate-500">Requisito obligatorio por el tratado T-MEC para la visa TN.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-slate-900 overflow-hidden" id="registro-final">

<div className="absolute inset-0 bg-noise opacity-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Comienza tu viaje hoy</h2>
<p className="mt-4 text-slate-400 text-lg">Déjanos tus datos completos y un asesor especializado te contactará para evaluar tu perfil.</p>
</div>
<div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl shadow-indigo-500/10 border border-white/10">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[11px] uppercase tracking-wider font-bold text-slate-500">Nombre(s)</label>
<input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 outline-none transition-all placeholder:text-slate-300" placeholder="Ej. Ana María" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[11px] uppercase tracking-wider font-bold text-slate-500">Apellidos</label>
<input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 outline-none transition-all placeholder:text-slate-300" placeholder="Ej. Pérez López" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[11px] uppercase tracking-wider font-bold text-slate-500">Correo Electrónico</label>
<input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 outline-none transition-all placeholder:text-slate-300" placeholder="nombre@correo.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[11px] uppercase tracking-wider font-bold text-slate-500">Teléfono / WhatsApp</label>
<input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 outline-none transition-all placeholder:text-slate-300" placeholder="+52 (55) 1234 5678" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[11px] uppercase tracking-wider font-bold text-slate-500">Nivel de Inglés Actual</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 focus:border-indigo-600 focus:bg-white outline-none cursor-pointer hover:bg-slate-100 transition-colors">
<option disabled="" selected="" value="">Selecciona una opción</option>
<option>Básico (A1-A2)</option>
<option>Intermedio (B1-B2)</option>
<option>Avanzado (C1+)</option>
</select>
<iconify-icon className="absolute right-4 top-3.5 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="flex items-start gap-3 pt-2">
<div className="flex h-5 items-center">
<input className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" id="terms" type="checkbox"/>
</div>
<div className="text-xs text-slate-500">
<label className="font-medium text-slate-700" htmlFor="terms">Acepto la política de privacidad</label>
<p>Doy consentimiento para ser contactado por WhatsApp o correo sobre el programa.</p>
</div>
</div>
<button className="w-full rounded-xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-indigo-500/20 hover:bg-indigo-500 hover:shadow-indigo-500/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 group">
                        Enviar Solicitud Completa
                        <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-bold" width="20"></iconify-icon>
</button>
<p className="text-center text-[10px] text-slate-400 mt-4">
                        Tus datos están protegidos y no serán compartidos con terceros sin tu consentimiento.
                    </p>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
<div className="max-w-sm">
<div className="flex items-center gap-2 mb-4">
<img alt="Vamos Salud Logo" className="h-9 w-9 rounded-lg shadow-lg shadow-indigo-500/20 object-cover" src="https://placehold.co/100x100/4f46e5/ffffff?text=V"/>
<span className="text-sm font-bold tracking-tight text-slate-900">VAMOS SALUD</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                        Facilitamos el financiamiento, la educación y la migración legal para enfermeros mexicanos de excelencia hacia los Estados Unidos.
                    </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-4">Programa</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Beneficios</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">NCLEX Prep</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Requisitos</a></li>
</ul>
</div>
<div>
<h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Aviso de Privacidad</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Términos de Uso</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Vamos Salud. Todos los derechos reservados.</p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-indigo-600 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-indigo-600 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-indigo-600 transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
