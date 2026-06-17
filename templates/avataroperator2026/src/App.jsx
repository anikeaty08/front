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
      

<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]"></div>
<div className="absolute inset-0 bg-halftone opacity-20"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="flex h-16 max-w-6xl border-0 rounded-none mr-auto ml-auto pr-6 pl-6 -translate-x-2 items-center justify-between">
<a className="flex items-center gap-2 text-lg font-semibold text-white tracking-tight" href="#">Avatar Operator</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#beneficios">Beneficios</a>
<a className="hover:text-white transition-colors" href="#contenido">Contenido</a>
<a className="hover:text-white transition-colors" href="#ejemplos">Ejemplos</a>
<a className="hover:text-white transition-colors" href="#precio">Precio</a>
</div>
</div>
</nav>

<header className="overflow-hidden pt-32 pb-20 relative">
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="animate-enter z-10 relative -translate-x-2 scale-100">
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] -translate-x-3 text-4xl font-semibold text-white tracking-tight text-center mb-6">Crea tu clon en <span className="bg-violet-600/20 text-violet-200 border border-violet-500/30 px-3 rounded-lg inline-block pb-1 lg:my-0 my-1 whitespace-nowrap">menos de 20 minutos</span> y empieza a usarlo hoy mismo.</h1>
<p className="leading-relaxed text-lg text-zinc-400 text-center max-w-lg mb-8 -translate-x-3">
                    Automatiza tu presencia digital sin depender de grabarte cada día. Un sistema probado para creadores y dueños de negocio.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 hover:bg-violet-500 transition-all hover:scale-[1.02] group text-base font-medium text-white bg-violet-600 rounded-md pt-4 pr-8 pb-4 pl-8 shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)] -translate-x-4 scale-75" href="#precio">
                        Acceso inmediato — $27
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="relative animate-enter h-[500px] hidden lg:block" style={{animationDelay: '0.2s'}}>

<div className="z-10 bg-gradient-to-t from-zinc-950 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
<img alt="AI Creator" className="w-full h-full object-cover opacity-80 mix-blend-lighten grayscale-[20%]" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-10 -left-12 glass-card p-4 rounded-xl z-20 animate-float-slow w-48">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-300">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
</div>
<div className="">
<div className="text-xs text-zinc-400">Módulo 01</div>
<div className="text-sm font-medium text-white">Avatar Setup</div>
</div>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-violet-500"></div>
</div>
</div>
<div className="absolute bottom-20 -right-8 glass-card p-4 rounded-xl z-20 animate-float-medium w-52">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Avatar Listo</div>
<div className="text-xs text-zinc-400">Tiempo: 18 min</div>
</div>
</div>
</div>
</div>
</div>
</header><section className="bg-zinc-900/20 border-white/5 border-t pt-20 pb-20">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl font-semibold text-purple-300 mb-2">Mira cómo funciona el sistema</h2>
<p className="text-sm text-zinc-500 mb-8">El vídeo puede tardar unos segundos en cargar.</p>
<div className="relative aspect-video bg-zinc-950 rounded-2xl border border-white/10 shadow-2xl overflow-hidden group cursor-pointer">

<div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
<div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-linear" strokeWidth="2" width="32"></iconify-icon>
</div>
</div>

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 hover:text-violet-300 transition-colors hover:border-violet-300 font-bold text-violet-400 tracking-tighter border-violet-500/30 border-b pb-0.5" href="#precio">
                    Acceso inmediato — $27
                </a>
</div>
</div>
</section>


<section className="border-y bg-zinc-900/30 border-white/5 pt-24 pb-24">
<div className="max-w-5xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-purple-400 tracking-tight">Consumir IA vs Saber usarla</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="p-8 rounded-2xl border border-red-500/10 bg-red-950/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon className="text-red-500" icon="solar:close-circle-linear" width="100"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-red-400 font-medium text-sm tracking-wide uppercase mb-6">El camino lento</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-zinc-400 text-sm">
<iconify-icon className="text-red-500 mt-0.5 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                                Consumiendo vídeos sobre IA cada día sin rumbo
                            </li>
<li className="flex items-start gap-3 text-zinc-400 text-sm">
<iconify-icon className="text-red-500 mt-0.5 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                                Guardando herramientas que nunca usas
                            </li>
<li className="flex items-start gap-3 text-zinc-400 text-sm">
<iconify-icon className="text-red-500 mt-0.5 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                                Viendo a otros avanzar mientras tú observas
                            </li>
<li className="flex items-start gap-3 text-zinc-400 text-sm">
<iconify-icon className="text-red-500 mt-0.5 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                                Sin un sistema claro de producción
                            </li>
</ul>
<div className="mt-8 pt-8 border-t border-red-500/10">
<p className="text-red-200 font-semibold">Muchísima información. Cero ejecución.</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border border-emerald-500/20 bg-emerald-900/10 relative overflow-hidden glow-purple">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="100"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-emerald-400 font-medium text-sm tracking-wide uppercase mb-6">AI Avatar Operator</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-zinc-200 text-sm">
<iconify-icon className="text-emerald-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                                Avatar operativo en minutos
                            </li>
<li className="flex items-start gap-3 text-zinc-200 text-sm">
<iconify-icon className="text-emerald-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                                Sistema claro y repetible
                            </li>
<li className="flex items-start gap-3 text-zinc-200 text-sm">
<iconify-icon className="text-emerald-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                                Producción masiva sin grabarte
                            </li>
<li className="flex items-start gap-3 text-zinc-200 text-sm">
<iconify-icon className="text-emerald-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                                Monetización real y control total
                            </li>
</ul>
<div className="mt-8 pt-8 border-t border-emerald-500/20">
<p className="text-emerald-200 font-semibold">Menos ruido. Más resultados.</p>
</div>
</div>
</div>
</div>
</div>
</section><section className="border-white/5 border-b pt-12 pb-12">
<div className="text-center max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="inline-flex gap-3 bg-zinc-900/50 border-white/5 border rounded-full pt-3 pr-6 pb-3 pl-6 gap-x-3 gap-y-3 items-center">
<div className="flex -space-x-2">
<div className="bg-zinc-700 w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6913557c-3168-45b2-b2da-5244d76f1d91_320w.webp)] bg-cover bg-center border-zinc-900 border rounded-full"></div>
<div className="bg-zinc-600 w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d70f9a9-2782-41bc-a7a7-6451e194132b_320w.jpg)] bg-cover bg-center border-zinc-900 border rounded-full"></div>
<div className="bg-zinc-500 w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e825b87-0682-49e3-98c2-dbdab1f8f9c5_320w.webp)] bg-cover bg-center border-zinc-900 border rounded-full"></div>
</div>
<p className="text-sm text-zinc-300">
<span className="font-semibold text-white">+3.000 personas</span> ya están creando contenido con su avatar.
                </p>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="contenido">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-violet-400 tracking-tight text-center mb-12">Esto incluye AI Avatar Operator – Starter</h2>
<div className="space-y-6">

<div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-zinc-900/60 border border-white/5">
<div className="md:w-48 flex flex-shrink-0 bg-center bg-zinc-800 w-full h-32 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/88e4edc2-4b12-47df-bf87-c450332e8d42_320w.png)] bg-contain border-white/5 border rounded-xl items-center justify-center">
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-purple-300">Masterclass 01 — Avatar Operativo</h3>
<span className="text-zinc-500 text-sm line-through decoration-zinc-600">$97</span>
</div>
<ul className="space-y-2 text-sm text-zinc-400 mt-4">
<li className="flex gap-2"><iconify-icon className="text-violet-500 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Cómo elegir la herramienta correcta sin perder tiempo</li>
<li className="flex gap-2"><iconify-icon className="text-violet-500 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Configuración paso a paso del avatar y voz realista</li>
<li className="flex gap-2"><iconify-icon className="text-violet-500 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Ajustes Pro y prompt base optimizado</li>
<li className="flex gap-2"><iconify-icon className="text-violet-500 mt-0.5" icon="solar:check-read-linear"></iconify-icon> <span className="text-white">Resultado:</span> Avatar funcional en &lt; 20 min</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-zinc-900/60 border border-white/5">
<div className="w-full md:w-48 h-32 bg-zinc-800 rounded-xl flex items-center justify-center border border-white/5 flex-shrink-0">
<span className="text-zinc-500 text-xs font-medium">MOD 02</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-purple-300">Masterclass 02 — Sistema de Contenido IA</h3>
<span className="text-zinc-500 text-sm line-through decoration-zinc-600">$147</span>
</div>
<ul className="space-y-2 text-sm text-zinc-400 mt-4">
<li className="flex gap-2"><iconify-icon className="text-violet-500 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Framework simple para generar ideas infinitas</li>
<li className="flex gap-2"><iconify-icon className="text-violet-500 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Automatización básica del flujo de producción</li>
<li className="flex gap-2"><iconify-icon className="text-violet-500 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Cómo mantener coherencia en tu mensaje</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-zinc-900/60 border border-white/5">
<div className="w-full md:w-48 h-32 bg-zinc-800 rounded-xl flex items-center justify-center border border-white/5 flex-shrink-0">
<span className="text-zinc-500 text-xs font-medium">MOD 03</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-purple-300">Masterclass 03 — Habilidad Vendible</h3>
<span className="text-zinc-500 text-sm line-through decoration-zinc-600">$197</span>
</div>
<ul className="space-y-2 text-sm text-zinc-400 mt-4">
<li className="flex gap-2"><iconify-icon className="text-violet-500 mt-0.5" icon="solar:check-read-linear"></iconify-icon> 3 formas reales de monetizar esta habilidad</li>
<li className="flex gap-2"><iconify-icon className="text-violet-500 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Cómo ofrecerlo como servicio a negocios y cerrar clientes</li>
<li className="flex gap-2"><iconify-icon className="text-violet-500 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Estructura de oferta escalable</li>
</ul>
</div>
</div>
</div>

<div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-violet-900/20 to-zinc-900/50 border border-violet-500/20 text-center">
<p className="text-zinc-400 text-sm mb-1">Valor total real: <span className="line-through">$441</span></p>
<p className="text-white font-medium mb-6">Hoy acceso completo por: <span className="text-2xl font-bold text-violet-300">$27</span></p>
<a className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-colors shadow-lg shadow-violet-900/20" href="#precio">
                    Acceso inmediato — $27
                </a>
</div>
</div>
</section>



<section className="py-24 bg-zinc-900/30">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-purple-300 tracking-tight text-center mb-4">Bonus Exclusivos</h2>
<p className="text-zinc-400 text-center mb-12">Herramientas listas para usar valoradas en $609, incluidas gratis hoy.</p>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-black/40 border border-white/5 p-6 rounded-xl flex flex-col">
<div className="h-32 bg-zinc-800/50 rounded-lg mb-4 border border-white/5 flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:document-text-linear" width="32"></iconify-icon>
</div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-bold text-violet-400 tracking-wider">BONUS 01</span>
<span className="text-xs text-zinc-500 line-through">$97</span>
</div>
<h4 className="text-white font-medium mb-1">Biblioteca de Prompts</h4>
<p className="text-xs text-zinc-400">Prompts optimizados para generar contenido desde el primer día.</p>
</div>
<div className="bg-black/40 border border-white/5 p-6 rounded-xl flex flex-col">
<div className="h-32 bg-zinc-800/50 rounded-lg mb-4 border border-white/5 flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:briefcase-linear" width="32"></iconify-icon>
</div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-bold text-violet-400 tracking-wider">BONUS 02</span>
<span className="text-xs text-zinc-500 line-through">$149</span>
</div>
<h4 className="text-white font-medium mb-1">Plantilla de Venta</h4>
<p className="text-xs text-zinc-400">Documento editable profesional listo para cerrar clientes.</p>
</div>
<div className="bg-black/40 border border-white/5 p-6 rounded-xl flex flex-col">
<div className="h-32 bg-zinc-800/50 rounded-lg mb-4 border border-white/5 flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:chat-round-dots-linear" width="32"></iconify-icon>
</div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-bold text-violet-400 tracking-wider">BONUS 03</span>
<span className="text-xs text-zinc-500 line-through">$67</span>
</div>
<h4 className="text-white font-medium mb-1">Script de Cierre DM</h4>
<p className="text-xs text-zinc-400">Mensajes probados para convertir conversaciones en ventas.</p>
</div>
<div className="bg-black/40 border border-white/5 p-6 rounded-xl flex flex-col">
<div className="h-32 bg-zinc-800/50 rounded-lg mb-4 border border-white/5 flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:filters-linear" width="32"></iconify-icon>
</div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-bold text-violet-400 tracking-wider">BONUS 04</span>
<span className="text-xs text-zinc-500 line-through">$97</span>
</div>
<h4 className="text-white font-medium mb-1">Guía de Herramientas</h4>
<p className="text-xs text-zinc-400">Lista curada de software realmente útil sin relleno.</p>
</div>
<div className="bg-black/40 border border-white/5 p-6 rounded-xl flex flex-col lg:col-span-2">
<div className="h-32 bg-zinc-800/50 rounded-lg mb-4 border border-white/5 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 to-zinc-800/50">
<iconify-icon className="text-violet-400" icon="solar:refresh-circle-linear" width="32"></iconify-icon>
</div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-bold text-violet-400 tracking-wider">BONUS 05</span>
<span className="text-xs text-zinc-500 line-through">$199</span>
</div>
<h4 className="font-medium text-white mb-1">Actualizaciones de por vida</h4>
<p className="text-xs text-zinc-400">Acceso a futuras mejoras y nuevos tutoriales sin coste adicional.</p>
</div>
</div>
</div>
</section><section className="pt-24 pb-24" id="beneficios">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-purple-400 tracking-tight text-center mb-4">Lo que consigues al tener tu avatar operativo</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center mb-6 group-hover:bg-violet-500/20 transition-colors">
<iconify-icon icon="solar:clapperboard-edit-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Automatiza tu contenido</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Crea presencia constante en todas las redes sin la necesidad de grabarte físicamente cada día.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
<iconify-icon className="" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Ahorra horas cada semana</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Elimina procesos manuales de preparación, iluminación y vestuario. Producción instantánea.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Escala sin agotarte</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Multiplica tu producción de vídeo por 10 sin multiplicar tu esfuerzo físico ni mental.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<iconify-icon className="" icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Habilidad monetizable</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Aprende algo que puedes implementar para ti mismo o vender como servicio high-ticket.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1 col-span-1 lg:col-span-2">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Sistema claro y ejecutable</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Sin teoría innecesaria sobre el futuro de la IA. Solo implementación real paso a paso para obtener resultados hoy.</p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 hover:bg-zinc-200 transition-colors text-sm font-medium text-zinc-950 bg-white rounded-full pt-3 pr-6 pb-3 pl-6" href="#precio">
                    Acceso inmediato — $27
                </a>
</div>
</div>
</section>

<section className="py-24 overflow-hidden" id="ejemplos">
<div className="max-w-6xl mx-auto px-6 mb-10">
<h2 className="text-2xl font-semibold text-violet-400">Crea contenido como este…</h2>
</div>
<div className="flex gap-4 overflow-x-auto snap-x px-6 hide-scroll pb-4">

<div className="snap-center shrink-0 w-[280px] h-[450px] bg-zinc-800 rounded-2xl border border-white/10 overflow-hidden relative group">
<img alt="Example" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-xs text-white">Reels Educativo</div>
</div>

<div className="snap-center shrink-0 w-[280px] h-[450px] bg-zinc-800 rounded-2xl border border-white/10 overflow-hidden relative group">
<img alt="Example" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-xs text-white">VSL de Ventas</div>
</div>

<div className="snap-center shrink-0 w-[280px] h-[450px] bg-zinc-800 rounded-2xl border border-white/10 overflow-hidden relative group">
<img alt="Example" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-xs text-white">Tutorial Técnico</div>
</div>

<div className="snap-center shrink-0 w-[280px] h-[450px] bg-zinc-800 rounded-2xl border border-white/10 overflow-hidden relative group">
<img alt="Example" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-xs text-white">Ads para Clientes</div>
</div>
</div>
</section>

<section className="py-24 relative" id="precio">
<div className="max-w-xl mx-auto px-6 relative z-10">
<div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 text-center shadow-[0_0_60px_-15px_rgba(124,58,237,0.2)]">
<div className="inline-block text-xs font-semibold text-violet-300 bg-violet-500/10 border-violet-500/20 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3">
                    OFERTA POR TIEMPO LIMITADO
                </div>
<h2 className="text-3xl font-semibold text-purple-400 mb-2">Comienza hoy mismo</h2>
<p className="text-zinc-400 mb-8 text-sm">Todo lo que necesitas para automatizar tu presencia.</p>
<div className="flex items-baseline justify-center gap-2 mb-8">
<span className="text-5xl font-bold text-white tracking-tight">$27</span>
<span className="text-zinc-500 line-through text-lg">$441</span>
</div>
<div className="space-y-3 mb-10 text-left max-w-xs mx-auto">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-violet-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                        Acceso inmediato al curso
                    </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-violet-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                        Pago único (sin mensualidades)
                    </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-violet-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                        Bonus y actualizaciones incluidas
                    </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-violet-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                        Garantía incondicional 7 días
                    </div>
</div>
<button className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-lg shadow-lg shadow-violet-900/40 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Acceso inmediato — $27
                </button>
<div className="flex justify-center gap-4 mt-6 text-[10px] text-zinc-500 uppercase tracking-wider font-medium">
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Pago Seguro</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bolt-linear"></iconify-icon> Acceso Instantáneo</span>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-24 pb-24">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-2xl font-semibold text-violet-400 text-center mb-12">Lo que dicen los primeros usuarios</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-zinc-900/30 p-6 rounded-xl border border-white/5">
<div className="flex gap-1 text-amber-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 mb-6">"Literalmente me ha ahorrado 10 horas de grabación esta semana. La calidad del avatar es increíble y el setup fue mucho más rápido de lo que esperaba."</p>
<div className="flex items-center gap-3">
<div className="bg-zinc-700 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fadf94b1-b398-496f-b9fe-3baf74375bcc_320w.jpg)] bg-cover bg-center rounded-full"></div>
<div className="">
<p className="text-white text-xs font-semibold">Carlos M.</p>
<p className="text-zinc-500 text-[10px]">Creador de Contenido</p>
</div>
</div>
</div>

<div className="bg-zinc-900/30 p-6 rounded-xl border border-white/5">
<div className="flex gap-1 text-amber-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 mb-6">"Ya he cerrado mi primer cliente vendiendo la creación de avatares como servicio. El ROI de estos $27 es ridículo."</p>
<div className="flex items-center gap-3">
<div className="bg-zinc-700 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e825b87-0682-49e3-98c2-dbdab1f8f9c5_320w.webp)] bg-cover bg-center rounded-full"></div>
<div className="">
<p className="text-white text-xs font-semibold">Ana R.</p>
<p className="text-zinc-500 text-[10px]">Consultora de Marketing</p>
</div>
</div>
</div>

<div className="bg-zinc-900/30 p-6 rounded-xl border border-white/5">
<div className="flex gap-1 text-amber-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 mb-6">"Dejé de procrastinar mis videos. Ahora solo escribo el guion y el sistema hace el resto. Brutal."</p>
<div className="flex items-center gap-3">
<div className="bg-zinc-700 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39416f09-1fdd-4913-b27f-16dffef9dd41_320w.webp)] bg-cover bg-center rounded-full"></div>
<div className="">
<p className="text-white text-xs font-semibold">David S.</p>
<p className="text-zinc-500 text-[10px]">Emprendedor Digital</p>
</div>
</div>
</div>
</div>
</div>
</section><section className="bg-zinc-900/20 pt-24 pb-24">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-violet-400 text-center mb-10">Preguntas Frecuentes</h2>
<div className="space-y-4">
<details className="group bg-zinc-900 border border-white/5 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex group-hover:bg-white/5 transition-colors text-sm font-medium text-white pt-4 pr-4 pb-4 pl-4 items-center justify-between">¿Necesito experiencia previa con IA?<iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon></summary>
<div className="px-4 pb-4 text-sm text-zinc-400 leading-relaxed">
                        No. El sistema está diseñado para empezar desde cero absoluto. Te guiamos clic a clic.
                    </div>
</details>
<details className="group bg-zinc-900 border border-white/5 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-4 text-sm font-medium text-white group-hover:bg-white/5 transition-colors">
                        ¿Necesito equipo profesional (cámara/micrófono)?
                        <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-400 leading-relaxed">
                        No necesariamente. Solo necesitas grabarte una única vez (o usar un video existente) con un celular moderno con buena luz. A partir de ahí, la IA hace el resto.
                    </div>
</details>
<details className="group bg-zinc-900 border border-white/5 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-4 text-sm font-medium text-white group-hover:bg-white/5 transition-colors">
                        ¿Es otro curso teórico más de IA?
                        <iconify-icon className="group-open:rotate-180 transition-transform text-zinc-500" height="14" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(113, 113, 122)'}} width="14"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-400 leading-relaxed">
                        No. Es un sistema operativo de implementación. Menos teoría, más "haz clic aquí, luego aquí y obtén este resultado".
                    </div>
</details>
<details className="group bg-zinc-900 border border-white/5 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-4 text-sm font-medium text-white group-hover:bg-white/5 transition-colors">
                        ¿Y si no me gusta?
                        <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-400 leading-relaxed">
                        Tienes 7 días de garantía de devolución del 100% del dinero. Sin preguntas incómodas.
                    </div>
</details>
</div>
</div>
</section><footer className="text-center border-white/5 border-t pt-24 pb-24">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-violet-400 mb-6">No necesitas convertirte en experto en IA.</h2>
<p className="text-zinc-400 mb-10">Solo necesitas un sistema claro y replicable.</p>
<a className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-white text-zinc-950 font-semibold text-lg hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10" href="#precio">
                Acceso inmediato — $27
            </a>
<div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<p className="">© 2024 AI Avatar Operator. Todos los derechos reservados.</p>
<div className="flex gap-4">
<a className="hover:text-zinc-400" href="#">Términos</a>
<a className="hover:text-zinc-400" href="#">Privacidad</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
