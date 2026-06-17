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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-base font-semibold text-white tracking-tight">Saúl Sandoval</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
</div>
<a className="group flex items-center gap-2 hover:bg-zinc-800 transition-all text-xs font-medium text-white bg-zinc-900 border-zinc-800 border rounded-full pt-2 pr-4 pb-2 pl-4" href="/#https://calendly.com/saulsndvlh/30min">
                Aplicar ahora
                <i className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</nav>
<main className="overflow-hidden pt-32 pb-24 relative">

<div className="flex flex-col text-center max-w-5xl z-10 mr-auto ml-auto pr-6 pl-6 relative items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8 animate-fade-in-up">
<i className="w-3 h-3 text-white" data-lucide="sparkles"></i>
<span className="uppercase text-xs font-medium text-zinc-300 tracking-wide">Para Creadores de contenido</span>
</div>

<h1 className="bg-clip-text leading-[1.1] md:text-6xl text-5xl font-semibold text-transparent tracking-tight bg-gradient-to-b from-white via-white to-zinc-500 max-w-4xl mb-6">Monetiza y Escala tu Marca Personal en 90 días.</h1>

<p className="md:text-xl leading-relaxed text-lg font-normal text-zinc-400 max-w-2xl mb-10">Implementamos nuestro sistema de Monetización para crecer y transformar tu marca personal en un negocio con MRR recurrente.</p>

<div className="flex flex-col md:flex-row items-center gap-6 mb-16">
<button className="hover:bg-zinc-200 transition-colors flex text-sm font-medium text-black bg-white h-12 rounded-full pr-8 pl-8 gap-x-2 gap-y-2 items-center">Agendar Llamada</button>

</div>

<div className="flex items-center gap-2 text-zinc-500 text-sm mb-4 animate-bounce">
<span className="">Descubre cómo funciona el sistema</span>
<i className="w-4 h-4" data-lucide="arrow-down"></i>
</div>
</div>

<div className="relative max-w-6xl mx-auto px-4 md:px-6">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] glow-white opacity-40 blur-3xl pointer-events-none"></div>

<div className="relative aspect-video bg-zinc-900 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden group cursor-pointer">

<img alt="VSL Thumbnail" className="group-hover:opacity-40 transition-opacity duration-500 opacity-60 w-full h-full" onclick="window.location.href='https://youtu.be/wt2PTrMxoZY?si=s937AtRcIBSXAzcu'" role="button" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>

<div className="bg-gradient-to-b from-black/80 to-transparent z-10 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 left-0">
<h3 className="text-white font-medium text-lg tracking-tight">El Protocolo de Alto Valor: De 0 a $100k</h3>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<div className="flex group-hover:scale-110 transition-transform duration-300 bg-white/10 w-20 h-20 border-white/20 border rounded-full shadow-[0_0_40px_rgba(255,255,255,0.1)] backdrop-blur-md items-center justify-center">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>

<div className="absolute bottom-20 left-0 right-0 text-center z-10 px-4">
<span className="inline-block bg-black/60 backdrop-blur px-4 py-2 rounded-lg text-xl md:text-2xl font-semibold text-white tracking-tight shadow-lg">
                        BIENVENIDO A LA NUEVA ERA DE VENTAS
                    </span>
</div>

<div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black/90 to-transparent flex items-center px-6 gap-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play"></i>
<div className="h-1 bg-zinc-700 flex-1 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-white"></div>
</div>
<span className="text-xs font-medium text-white">03:45 / 12:30</span>
<i className="w-4 h-4 text-white" data-lucide="volume-2"></i>
<i className="w-4 h-4 text-white" data-lucide="maximize"></i>
<span className="text-xs font-bold text-white tracking-widest">WISTIA</span>
</div>
</div>
</div>

<div className="max-w-5xl mt-32 mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col text-center mb-16 items-center">
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight text-center">Nuestro Proceso para Monetizar</h2><h2 className="md:text-5xl md:bg-clip-text md:text-transparent text-3xl font-semibold tracking-tight text-center bg-gradient-to-br from-white/100 via-white/50 to-white/100 mb-4">y Escalar tu Marca Personal</h2>
<p className="text-lg text-zinc-400 max-w-xl">Un proceso claro y detallado, que te permitirá Monetizar tu audiencia y Escalar tu Marca Personal.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:bg-zinc-900/50 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors text-white border border-zinc-700">
<svg aria-hidden="true" className="lucide lucide-person-standing" data-icon-replaced="true" data-icon-set="lucide" data-lucide="person-standing" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="1"></circle><path d="m9 20 3-6 3 6"></path><path d="m6 8 6 2 6-2"></path><path d="M12 10v4"></path></svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Posicionamiento &amp; Oferta</h3>
<p className="leading-relaxed text-base text-zinc-400">Definimos tu posicionamiento y estructuramos tu oferta, para que tu marca tenga una dirección clara, sabrás exactamente qué vendes, a quién y por qué deberían comprarte.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:bg-zinc-900/50 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors text-white border border-zinc-700">
<svg aria-hidden="true" className="lucide lucide-rocket" data-icon-replaced="true" data-icon-set="lucide" data-lucide="rocket" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Conversión</h3>
<p className="leading-relaxed text-base text-zinc-400">Diseñamos el sistema que convierte tu contenido en leads y tus leads en clientes. con un proceso claro y personalizado a tu marca.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:bg-zinc-900/50 transition-colors group">
<div className="flex group-hover:bg-white group-hover:text-black transition-colors text-white bg-zinc-800 w-10 h-10 border-zinc-700 border rounded-lg mb-6 items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-chart-line" data-icon-replaced="true" data-icon-set="lucide" data-lucide="chart-line" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Escalamiento</h3>
<p className="leading-relaxed text-base text-zinc-400 text-left">Optimizamos tu modelo y creamos lanzamientos, para que cada ciclo aumente tu base de ingresos, construyendo estabilidad en lugar de empezar desde cero.</p>
</div>
</div>
</div>
</main><div className="relative z-10 w-full bg-black">

<section className="pt-24 pr-6 pb-24 pl-6">
<div className="max-w-5xl mx-auto">
<div className="overflow-hidden group select-none bg-zinc-900/20 border-zinc-800 border rounded-3xl relative shadow-2xl backdrop-blur-sm">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[100px] rounded-full pointer-events-none mix-blend-screen opacity-20"></div>
<div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-zinc-800/20 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative grid md:grid-cols-2 gap-12 lg:gap-20 p-8 md:p-16 items-center">

<div className="flex flex-col gap-6 relative z-10">
<h2 className="md:text-4xl leading-[1.1] text-3xl font-semibold text-white tracking-tight">
                            Marca Personal,<br/> Autoridad y Leads
                        </h2>
<div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-normal">
<p className="">Este proceso te permite estructurar tu Marca Personal con una oferta clara, lanzar estratégicamente y construir un sistema que convierta audiencia en clientes de forma predecible. No se trata de subir contenido sin dirección. Se trata de diseñar un modelo que genere estabilidad con ingresos recurrentes.</p>
<p className="">¿Lo mejor de todo?
No tienes que hacer nada mas que grabar contenido, nosotros nos encargamos de todo.</p>
</div>
</div>

<div className="relative flex justify-center md:justify-end">
<div className="grid grid-cols-3 w-full max-w-[400px] gap-x-4 gap-y-4">

<div className="aspect-square rounded-2xl bg-black/40 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-500 group/icon">
<i className="w-8 h-8 text-zinc-500 group-hover/icon:text-white transition-colors duration-500 stroke-[1.5]" data-lucide="monitor"></i>
</div>

<div className="aspect-square rounded-2xl bg-black/40 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-500 group/icon delay-75">
<i className="w-8 h-8 text-zinc-500 group-hover/icon:text-white transition-colors duration-500 stroke-[1.5]" data-lucide="user"></i>
</div>

<div className="aspect-square rounded-2xl bg-black/40 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-500 group/icon delay-100">
<i className="w-8 h-8 text-zinc-500 group-hover/icon:text-white transition-colors duration-500 stroke-[1.5]" data-lucide="play"></i>
</div>

<div className="aspect-square rounded-2xl bg-black/40 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-500 group/icon delay-150">
<i className="w-8 h-8 text-zinc-500 group-hover/icon:text-white transition-colors duration-500 stroke-[1.5]" data-lucide="phone"></i>
</div>

<div className="aspect-square rounded-2xl bg-black/40 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-500 group/icon delay-200">
<i className="w-8 h-8 text-zinc-500 group-hover/icon:text-white transition-colors duration-500 stroke-[1.5]" data-lucide="banknote"></i>
</div>

<div className="aspect-square rounded-2xl bg-black/40 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-500 group/icon delay-300">
<i className="w-8 h-8 text-zinc-500 group-hover/icon:text-white transition-colors duration-500 stroke-[1.5]" data-lucide="gem"></i>
</div>

<div className="col-start-2 aspect-square rounded-2xl bg-black/40 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-500 group/icon delay-500">
<i className="w-8 h-8 text-zinc-500 group-hover/icon:text-white transition-colors duration-500 stroke-[1.5]" data-lucide="users"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full pt-24 pr-4 pb-24 pl-4 items-center justify-center">
<div className="w-full max-w-5xl bg-zinc-950 border border-zinc-800/60 rounded-[32px] p-8 md:p-24 text-center relative overflow-hidden group">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md mb-10 transition-transform duration-300 hover:scale-105 cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="inline-flex bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#ffffff] to-gray-600 w-2 h-2 rounded-full relative"></span>
</span>
<span className="text-xs font-medium text-zinc-400 tracking-wide">Cupos Limitados</span>
</div>

<h2 className="md:text-7xl text-5xl font-medium text-white tracking-tight mb-8 drop-shadow-lg">Monetiza tu Marca</h2>

<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-400 max-w-3xl mr-auto mb-14 ml-auto">No esperes más. Aplica ahora y comencemos a Monetizar y Escalar Tu Marca Personal, para construir un sistema que convierta tu audiencia en ingresos reales.</p>

<button className="hover:bg-zinc-200 transition-colors flex text-sm font-medium text-black bg-white h-12 rounded-full pr-8 pl-8 scale-110 gap-x-2 gap-y-2 items-center">Aplicar Ahora</button>
</div>
</div>
</section>

</div>
<footer className="bg-black border-zinc-900 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-zinc-500" data-lucide="crown"></i>
<span className="text-sm font-medium text-zinc-500">© 2026 Monetize</span>
</div>
<div className="flex gap-6 text-sm text-zinc-600">
<a className="hover:text-zinc-400" href="#">Términos</a>
<a className="hover:text-zinc-400" href="#">Privacidad</a>
<a className="hover:text-zinc-400" href="#">Contacto</a>
</div>
</div>
</footer>

<textarea className="-edit" style={{fontSize: '48px', fontWeight: '600', fontFamily: 'Inter, sans-serif', color: 'rgb(255, 255, 255)', lineHeight: '48px', textAlign: 'center', textTransform: 'none', letterSpacing: '-1.2px', position: 'absolute', left: '24px', top: '1279.5px', width: '952px', height: '96px', boxSizing: 'border-box', padding: '0px', margin: '0px', border: 'none', outline: 'none', background: 'transparent', resize: 'none', overflow: 'auto', zIndex: '2147483647'}}></textarea><textarea className="-edit" style={{fontSize: '48px', fontWeight: '600', fontFamily: 'Inter, sans-serif', color: 'rgb(255, 255, 255)', lineHeight: '48px', textAlign: 'center', textTransform: 'none', letterSpacing: '-1.2px', position: 'absolute', left: '24px', top: '1279.5px', width: '952px', height: '96px', boxSizing: 'border-box', padding: '0px', margin: '0px', border: 'none', outline: 'none', background: 'transparent', resize: 'none', overflow: 'auto', zIndex: '2147483647'}}></textarea>
    </>
  );
}
