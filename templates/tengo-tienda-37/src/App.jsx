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
      

<nav className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white">
<svg className="lucide lucide-shopping-bag" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</div>
<span className="font-heading font-bold text-xl text-slate-900 tracking-tight">Tengo Tienda</span>
</div>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-semibold text-slate-700 hover:text-purple-600 transition-colors relative group" href="#">
                        Inicio
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-semibold text-slate-700 hover:text-purple-600 transition-colors relative group" href="#">
                        Contenidos
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-semibold text-slate-700 hover:text-purple-600 transition-colors relative group" href="#">
                        Tendencias Retail
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-semibold text-slate-700 hover:text-purple-600 transition-colors relative group" href="#">
                        Proveedores
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-semibold text-slate-700 hover:text-purple-600 transition-colors relative group" href="#">
                        Recursos
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-semibold text-slate-700 hover:text-purple-600 transition-colors relative group" href="#">
                        Comunidad
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-semibold text-slate-700 hover:text-purple-600 transition-colors relative group" href="#">
                        Newsletter
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>

<div className="hidden lg:block">
<button className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
                        Explorar contenidos
                    </button>
</div>

<div className="lg:hidden">
<button className="p-2 text-slate-600 hover:text-purple-600">
<svg className="lucide lucide-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="relative w-full overflow-hidden bg-slate-900 pt-32 pb-32 lg:pt-48 lg:pb-40">

<div className="absolute inset-0 z-0">
<img alt="Retail Background" className="w-full h-full object-cover opacity-20 mix-blend-overlay" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-purple-900/40"></div>
</div>

<div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-600 rounded-full blur-[120px] opacity-30 blob-anim"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600 rounded-full blur-[100px] opacity-20 blob-anim" style={{animationDelay: '-5s'}}></div>
<div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-pink-500 rounded-full blur-[80px] opacity-20 mix-blend-screen blob-anim" style={{animationDelay: '-10s'}}></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-purple-300 text-sm font-semibold mb-8 animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                El hub #1 de Retail en Latam
            </div>
<h1 className="text-5xl lg:text-7xl font-heading font-bold tracking-tight text-white leading-[1.1] mb-8 max-w-5xl mx-auto drop-shadow-2xl">
                El punto de encuentro del mundo <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">e-commerce y retail</span>
</h1>
<p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                Conectamos marcas, emprendedores y retailers con información, herramientas y oportunidades de negocio para innovar y crecer.
            </p>
<div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
<button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1">
                    Explorar contenidos 
                    <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300 transform hover:-translate-y-1">
                    Suscribirme al newsletter
                </button>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="relative z-10">
<h2 className="text-4xl lg:text-5xl font-heading font-bold tracking-tight text-slate-900 mb-8 leading-tight">
                        Si vendes, despachas, atiendes clientes o mueves productos, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">este es tu espacio.</span>
</h2>
<p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Tengo Tienda es una plataforma de contenidos diseñada para ayudar a negocios e-commerce y retail que necesitan información práctica, actualizada y confiable para crecer en una industria que cambia todos los días.
                    </p>
<div className="flex flex-col gap-6">
<div className="flex items-start gap-4">
<div className="p-3 rounded-2xl bg-purple-50 text-purple-600">
<svg className="lucide lucide-zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<div>
<h4 className="font-bold text-slate-900 text-lg">Información accionable</h4>
<p className="text-slate-500">Datos que puedes implementar hoy mismo.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-2xl bg-pink-50 text-pink-600">
<svg className="lucide lucide-users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<div>
<h4 className="font-bold text-slate-900 text-lg">Comunidad real</h4>
<p className="text-slate-500">Sin gurús, solo expertos y operadores reales.</p>
</div>
</div>
</div>
</div>

<div className="relative group">

<div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 to-orange-400 rounded-[3rem] opacity-30 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="relative overflow-hidden rounded-[2.5rem] rounded-tr-[5rem] rounded-bl-[5rem] shadow-2xl bg-white transform transition-transform duration-500 group-hover:-translate-y-2">
<img alt="Retail Team" className="w-full h-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1932&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">+2k</div>
</div>
<div>
<p className="text-slate-900 font-bold leading-tight">Profesionales activos</p>
<p className="text-slate-500 text-sm">Creciendo juntos</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl lg:text-5xl font-heading font-bold tracking-tight text-slate-900 mb-6">Explora la plataforma</h2>
<p className="text-xl text-slate-500">Recursos estratégicos y herramientas diseñadas para potenciar tu presencia en el retail moderno.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
<svg className="lucide lucide-book-open" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Hub de contenidos</h3>
<p className="text-slate-500 mb-8 leading-relaxed">Noticias, guías y análisis profundos sobre retail, e-commerce y tecnología.</p>
<a className="inline-flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all" href="#">
                            Explorar recursos <svg className="lucide lucide-arrow-right ml-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="group bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 mb-8 group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition-all duration-500">
<svg className="lucide lucide-trending-up" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Tendencias Retail</h3>
<p className="text-slate-500 mb-8 leading-relaxed">Movimientos de marca, transformaciones estratégicas y cambios relevantes.</p>
<a className="inline-flex items-center text-pink-600 font-bold group-hover:gap-2 transition-all" href="#">
                            Ver tendencias <svg className="lucide lucide-arrow-right ml-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="group bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-8 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
<svg className="lucide lucide-users-2" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M14 19a6 6 0 0 0-12 0"></path><circle cx="8" cy="9" r="4"></circle><path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"></path></svg>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Comunidad PRO</h3>
<p className="text-slate-500 mb-8 leading-relaxed">Únete para recibir insights, conexiones semanales y conectar con líderes.</p>
<a className="inline-flex items-center text-purple-600 font-bold group-hover:gap-2 transition-all" href="#">
                            Unirte ahora <svg className="lucide lucide-arrow-right ml-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
<h2 className="text-4xl lg:text-5xl font-heading font-bold tracking-tight text-slate-900">Lo más reciente</h2>
<a className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-slate-900 font-bold hover:bg-slate-200 transition-all" href="#">
                    Ver todo el contenido <svg className="lucide lucide-arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group cursor-pointer flex flex-col h-full bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
<div className="relative overflow-hidden h-64">
<img alt="Logistics" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-indigo-600 uppercase tracking-wide shadow-md">Logística</div>
</div>
<div className="p-8 flex-1 flex flex-col relative group-hover:bg-indigo-50/30 transition-colors">
<h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">Cómo optimizar la última milla en temporadas altas</h3>
<p className="text-slate-500 mb-6 line-clamp-2">Estrategias clave para reducir costos y tiempos de entrega cuando la demanda se dispara.</p>
<div className="mt-auto flex items-center text-sm font-semibold text-slate-400">
<span>Hace 2 días</span>
<span className="mx-2">•</span>
<span>5 min lectura</span>
</div>
</div>
</article>

<article className="group cursor-pointer flex flex-col h-full bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
<div className="relative overflow-hidden h-64">
<img alt="Payments" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-pink-600 uppercase tracking-wide shadow-md">Fintech</div>
</div>
<div className="p-8 flex-1 flex flex-col relative group-hover:bg-pink-50/30 transition-colors">
<h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-pink-600 transition-colors">El auge de los pagos invisibles en LATAM</h3>
<p className="text-slate-500 mb-6 line-clamp-2">Análisis de las nuevas tecnologías que están eliminando la fricción en el checkout físico y digital.</p>
<div className="mt-auto flex items-center text-sm font-semibold text-slate-400">
<span>Hace 4 días</span>
<span className="mx-2">•</span>
<span>7 min lectura</span>
</div>
</div>
</article>

<article className="group cursor-pointer flex flex-col h-full bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
<div className="relative overflow-hidden h-64">
<img alt="UX" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-purple-600 uppercase tracking-wide shadow-md">Experiencia</div>
</div>
<div className="p-8 flex-1 flex flex-col relative group-hover:bg-purple-50/30 transition-colors">
<h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-purple-600 transition-colors">Diseñando para la conversión: UX en 2025</h3>
<p className="text-slate-500 mb-6 line-clamp-2">Principios de diseño que están marcando la diferencia entre un visitante y un comprador fiel.</p>
<div className="mt-auto flex items-center text-sm font-semibold text-slate-400">
<span>Hace 1 semana</span>
<span className="mx-2">•</span>
<span>10 min lectura</span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-32 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-heading font-bold tracking-tight text-slate-900 mb-6">Conecta con los mejores proveedores</h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto">Encuentra aliados estratégicos para logística, tecnología, pagos, publicidad, empaque y más.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

<a className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-4" href="#">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<svg className="lucide lucide-truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<span className="font-bold text-slate-700 text-center">Logística &amp; Envíos</span>
</a>

<a className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-green-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-4" href="#">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<svg className="lucide lucide-credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<span className="font-bold text-slate-700 text-center">Pagos &amp; Fintech</span>
</a>

<a className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-4" href="#">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<svg className="lucide lucide-monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
<span className="font-bold text-slate-700 text-center">E-commerce Tech</span>
</a>

<a className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-orange-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-4" href="#">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<svg className="lucide lucide-package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<span className="font-bold text-slate-700 text-center">Branding</span>
</a>

<a className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-pink-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-4" href="#">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<svg className="lucide lucide-store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
</div>
<span className="font-bold text-slate-700 text-center">Tiendas físicas</span>
</a>
</div>
</div>
</section>

<section className="py-32 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="relative order-2 lg:order-1">
<div className="absolute inset-0 bg-gradient-to-bl from-purple-200 to-indigo-50 rounded-[3rem] transform -rotate-3 scale-105"></div>
<img alt="Resources Mockup" className="relative rounded-[2.5rem] shadow-2xl w-full object-cover aspect-square transform hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="order-1 lg:order-2">
<h2 className="text-4xl lg:text-5xl font-heading font-bold tracking-tight text-slate-900 mb-6">Guías y recursos para hacer crecer tu tienda</h2>
<p className="text-xl text-slate-500 mb-10">Plantillas, manuales, checklists y herramientas prácticas para ayudarte a operar, vender y tomar mejores decisiones.</p>
<ul className="space-y-8">
<li className="flex items-start gap-5 group">
<div className="mt-1 w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all">
<svg className="lucide lucide-file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
</div>
<div>
<h4 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">Guía para abrir tu tienda online</h4>
<p className="text-slate-500">Paso a paso desde cero hasta tu primera venta.</p>
</div>
</li>
<li className="flex items-start gap-5 group">
<div className="mt-1 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
<svg className="lucide lucide-table-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path></svg>
</div>
<div>
<h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Plantilla de costos logísticos</h4>
<p className="text-slate-500">Excel automatizado para calcular márgenes reales.</p>
</div>
</li>
<li className="flex items-start gap-5 group">
<div className="mt-1 w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 flex-shrink-0 group-hover:bg-pink-600 group-hover:text-white transition-all">
<svg className="lucide lucide-target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div>
<h4 className="text-xl font-bold text-slate-900 group-hover:text-pink-600 transition-colors">Mini-guía de marketing para retail</h4>
<p className="text-slate-500">Estrategias de bajo costo y alto impacto.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-900 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between mb-20">
<div className="max-w-2xl">
<h2 className="text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white mb-6">Lo que está moviendo el retail en LATAM</h2>
<p className="text-xl text-slate-400">Análisis, datos, casos reales y movimientos del mercado para anticiparte y no quedarte atrás.</p>
</div>
<a className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur border border-white/10 rounded-full text-white font-bold hover:bg-white/20 transition-all flex-shrink-0 hover:shadow-lg hover:shadow-purple-500/20" href="#">
                    Ver todas las tendencias
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
<div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">Tiendas híbridas</h3>
<p className="text-slate-400">El crecimiento de espacios que combinan experiencia y fulfillment.</p>
</div>

<div className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
<div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-scan-face" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">Pagos sin fricción</h3>
<p className="text-slate-400">Billeteras digitales y checkout biométrico ganan terreno.</p>
</div>

<div className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
<div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-bike" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3 4-3 2 3h2"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">Última milla</h3>
<p className="text-slate-400">Innovación en entregas ultra-rápidas y logística inversa.</p>
</div>

<div className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
<div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path d="M18 15v2.25a1.5 1.5 0 0 0 3 0V15"></path><path d="M24 15v2.25a1.5 1.5 0 0 0 3 0V15" transform="translate(-6)"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">CX 2025</h3>
<p className="text-slate-400">Hiper-personalización basada en datos para retener clientes.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-b from-slate-50 to-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
<div className="inline-block p-4 rounded-full bg-purple-100 text-purple-600 mb-8 shadow-sm">
<svg className="lucide lucide-users" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h2 className="text-4xl lg:text-5xl font-heading font-bold tracking-tight text-slate-900 mb-6">Una comunidad para aprender, conectar y crecer</h2>
<p className="text-xl text-slate-500 max-w-3xl mx-auto mb-16">Historias reales, entrevistas, discusiones, eventos y espacios para conectar con otros emprendedores y retailers.</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">

<div className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-200 transition-all cursor-pointer flex items-center gap-4 text-left">
<div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<svg className="lucide lucide-mic" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>
<div>
<h4 className="font-bold text-slate-900 text-lg">Entrevistas</h4>
<p className="text-slate-500 text-sm">Líderes del retail.</p>
</div>
</div>
<div className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-pink-200 transition-all cursor-pointer flex items-center gap-4 text-left">
<div className="w-12 h-12 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<svg className="lucide lucide-lightbulb" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.4 1.5-3.8 0-3.2-2.8-6-6-6s-6 2.8-6 6c0 1.3.5 2.8 1.5 3.8.8.8 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<div>
<h4 className="font-bold text-slate-900 text-lg">Casos reales</h4>
<p className="text-slate-500 text-sm">De tiendas exitosas.</p>
</div>
</div>
<div className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-green-200 transition-all cursor-pointer flex items-center gap-4 text-left">
<div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<svg className="lucide lucide-message-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
</div>
<div>
<h4 className="font-bold text-slate-900 text-lg">Expertos</h4>
<p className="text-slate-500 text-sm">Conversaciones directas.</p>
</div>
</div>
<div className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-200 transition-all cursor-pointer flex items-center gap-4 text-left">
<div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<svg className="lucide lucide-ticket" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
</div>
<div>
<h4 className="font-bold text-slate-900 text-lg">Eventos</h4>
<p className="text-slate-500 text-sm">Invitaciones y talleres.</p>
</div>
</div>
</div>
<button className="px-10 py-5 bg-white border-2 border-slate-900 text-slate-900 font-bold rounded-full shadow-lg hover:bg-slate-900 hover:text-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                Unirse a la comunidad
            </button>
</div>
</section>

<section className="py-20 px-6 lg:px-8 bg-slate-50">
<div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden relative p-12 lg:p-20 text-center shadow-2xl">

<div className="absolute inset-0 z-0">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/50 to-pink-900/50"></div>
<div className="absolute -top-[50%] -left-[20%] w-[80%] h-[100%] bg-purple-600 blur-[120px] opacity-30"></div>
<div className="absolute -bottom-[50%] -right-[20%] w-[80%] h-[100%] bg-pink-600 blur-[120px] opacity-30"></div>
</div>
<div className="relative z-10">
<div className="inline-block p-2 px-4 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
                    Newsletter Semanal
                </div>
<h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 tracking-tight">Recibe lo más importante del retail</h2>
<p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto font-light">Tendencias, oportunidades, proveedores, análisis y contenido útil para impulsar tu tienda directamente en tu bandeja.</p>
<div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
<input className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white/10 transition-all backdrop-blur-sm" placeholder="Tu correo electrónico" type="email"/>
<button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all transform hover:-translate-y-1">
                        Suscribirme
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-gradient-to-b from-slate-900 to-black text-slate-400 py-20 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white">
<svg className="lucide lucide-shopping-bag" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</div>
<span className="font-heading font-bold text-2xl text-white tracking-tight">Tengo Tienda</span>
</div>
<p className="text-sm leading-relaxed mb-6 text-slate-500">
                        La plataforma líder para el ecosistema retail y e-commerce en Latinoamérica. Conectando oportunidades todos los días.
                    </p>
</div>

<div>
<h4 className="text-white font-bold text-lg mb-6">Mapa del sitio</h4>
<ul className="space-y-4 text-sm font-medium">
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Inicio</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Contenidos</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Tendencias Retail</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Proveedores</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Recursos</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Comunidad</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Newsletter</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Contacto</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold text-lg mb-6">Recursos</h4>
<ul className="space-y-4 text-sm font-medium">
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Abrir tienda online</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Checklist de proveedores</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Costos logísticos</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Mini-guía de marketing</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Blog</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold text-lg mb-6">Síguenos</h4>
<div className="flex gap-4">
<a className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-blue-600 hover:scale-110 transition-all" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-black hover:scale-110 transition-all hover:border hover:border-white" href="#">
<svg className="lucide lucide-music-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="18" r="4"></circle><path d="M12 18V2l7 4"></path></svg> 
</a>
<a className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-black hover:scale-110 transition-all hover:border hover:border-white" href="#">
<svg className="lucide lucide-twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-red-600 hover:scale-110 transition-all" href="#">
<svg className="lucide lucide-youtube" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
<p>© 2024 Tengo Tienda. Todos los derechos reservados.</p>
<p className="mt-2 md:mt-0 font-medium">Diseñado para impulsar el comercio.</p>
</div>
</div>
</footer>


    </>
  );
}
