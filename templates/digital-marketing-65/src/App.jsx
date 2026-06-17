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



        // Simple scroll animation observer
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    
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
      

<header className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<span className="text-xl font-semibold tracking-tighter font-geist">SIGNOS<span className="text-fuchsia-500">.</span></span>
</a>
<nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1">
<a className="text-xs font-medium px-4 py-1.5 hover:text-white text-white/60 transition-colors" href="#servicios">Servicios</a>
<a className="text-xs font-medium px-4 py-1.5 hover:text-white text-white/60 transition-colors" href="#metodo">Método</a>
<a className="text-xs font-medium px-4 py-1.5 bg-white/10 text-white rounded-full transition-all" href="#contacto">Empezar</a>
</nav>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>
<main className="relative">

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-fuchsia-500/10 blur-[120px] rounded-full"></div>
</div>
<div className="max-w-7xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 mb-8 animate-on-scroll">
<span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse"></span>
<span className="text-xs font-medium text-white/60 tracking-wider uppercase">Marketing de Resultados</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight font-geist leading-[1.1] mb-8 animate-on-scroll">
                    Estrategias digitales que <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-fuchsia-200 to-white/50">multiplican tu negocio.</span>
</h1>
<p className="max-w-2xl mx-auto text-base md:text-lg text-white/60 mb-10 font-light animate-on-scroll">
                    En Signos no solo creamos campañas, construimos activos digitales de alto rendimiento. Especialistas en SEO, SEM y Transformación Digital para marcas que no se conforman.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll">
<a className="group relative px-8 py-3 bg-white text-black rounded-full font-medium text-sm transition-all hover:scale-105 active:scale-95" href="#contacto">
                        Hablar con un experto
                    </a>
<a className="px-8 py-3 border border-white/10 rounded-full font-medium text-sm hover:bg-white/5 transition-all" href="#servicios">
                        Explorar servicios
                    </a>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-white/40 uppercase tracking-widest mb-8">Empresas que confían en nuestra firma</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">
<div className="h-8 w-24 bg-white/20 rounded flex items-center justify-center text-[10px]">CLIENTE A</div>
<div className="h-8 w-24 bg-white/20 rounded flex items-center justify-center text-[10px]">CLIENTE B</div>
<div className="h-8 w-24 bg-white/20 rounded flex items-center justify-center text-[10px]">CLIENTE C</div>
<div className="h-8 w-24 bg-white/20 rounded flex items-center justify-center text-[10px]">CLIENTE D</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="servicios">
<div className="mb-16">
<h2 className="text-xs font-medium text-fuchsia-500 uppercase tracking-widest mb-4">Ecosistema Signos</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight font-geist">Soluciones de crecimiento integral.</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
<div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center mb-6 text-fuchsia-400">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-3 font-geist">SEO Estratégico</h4>
<p className="text-sm text-white/60 leading-relaxed">Dominamos los algoritmos para situar tu marca donde están tus clientes. Menos costes de adquisición, más visibilidad orgánica.</p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-3 font-geist">Publicidad Digital</h4>
<p className="text-sm text-white/60 leading-relaxed">Google Ads y Social Ads optimizados para el ROI. No medimos clics, medimos conversiones reales y rentabilidad.</p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400">
<iconify-icon icon="solar:code-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-3 font-geist">Web &amp; eCommerce</h4>
<p className="text-sm text-white/60 leading-relaxed">Desarrollamos experiencias de usuario que venden. Velocidad extrema, diseño minimalista y enfoque total en la conversión.</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white/[0.01] border-y border-white/5" id="metodo">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-geist">¿Por qué Signos?</h2>
<p className="mt-4 text-white/60 text-sm">Cambiamos el modelo tradicional de agencia por uno de partners estratégicos.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="p-8 rounded-2xl border border-white/5 opacity-50 grayscale">
<h4 className="text-sm font-medium mb-6 text-white/40 uppercase tracking-widest">Agencias Tradicionales</h4>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm"><iconify-icon className="text-red-500/50" icon="solar:close-circle-linear"></iconify-icon> Reportes de métricas vanidosas</li>
<li className="flex items-center gap-3 text-sm"><iconify-icon className="text-red-500/50" icon="solar:close-circle-linear"></iconify-icon> Comunicación lenta y burocrática</li>
<li className="flex items-center gap-3 text-sm"><iconify-icon className="text-red-500/50" icon="solar:close-circle-linear"></iconify-icon> Estrategias genéricas (copy-paste)</li>
</ul>
</div>
<div className="p-8 rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/[0.02] relative overflow-hidden shadow-[0_0_40px_-15px_rgba(217,70,239,0.2)]">
<div className="absolute top-0 right-0 p-4">
<span className="text-[10px] font-semibold bg-fuchsia-500 text-black px-2 py-0.5 rounded-full uppercase tracking-tighter">Premium</span>
</div>
<h4 className="text-sm font-medium mb-6 text-fuchsia-400 uppercase tracking-widest">El Método Signos</h4>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm font-medium"><iconify-icon className="text-fuchsia-500" icon="solar:check-circle-linear"></iconify-icon> Foco en Ventas y ROI final</li>
<li className="flex items-center gap-3 text-sm font-medium"><iconify-icon className="text-fuchsia-500" icon="solar:check-circle-linear"></iconify-icon> Comunicación directa con especialistas</li>
<li className="flex items-center gap-3 text-sm font-medium"><iconify-icon className="text-fuchsia-500" icon="solar:check-circle-linear"></iconify-icon> Estrategias de data-science a medida</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="contacto">
<div className="max-w-3xl mx-auto relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight font-geist mb-4">Llevemos tu marca al siguiente nivel.</h2>
<p className="text-white/60 text-base">Análisis gratuito de tu situación digital actual. Sin compromiso.</p>
</div>
<form className="space-y-4 p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2 ml-1">Nombre</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-fuchsia-500/50 transition-all" placeholder="Ej. Juan Pérez" type="text"/>
</div>
<div>
<label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2 ml-1">Email Profesional</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-fuchsia-500/50 transition-all" placeholder="juan@empresa.com" type="email"/>
</div>
</div>
<div>
<label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2 ml-1">Servicio de Interés</label>
<select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-fuchsia-500/50 transition-all appearance-none text-white/60">
<option>Auditoría SEO &amp; SEM</option>
<option>Estrategia de Crecimiento</option>
<option>Diseño Web / eCommerce</option>
<option>Gestión de Redes Sociales</option>
</select>
</div>
<div>
<label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2 ml-1">Mensaje</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-fuchsia-500/50 transition-all" placeholder="Cuéntanos brevemente tus objetivos..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-white text-black rounded-xl font-semibold text-sm transition-all hover:bg-fuchsia-50 hover:scale-[1.01] active:scale-[0.99] mt-4 flex items-center justify-center gap-2">
                        Enviar Solicitud
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</section>
</main>

<footer className="py-12 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<span className="text-xl font-semibold tracking-tighter font-geist mb-6 block">SIGNOS<span className="text-fuchsia-500">.</span></span>
<p className="text-sm text-white/40 max-w-sm leading-relaxed">Agencia líder en transformación digital y marketing de resultados. Transformamos clics en clientes y marcas en referentes.</p>
</div>
<div>
<h5 className="text-[10px] uppercase tracking-widest text-white/60 mb-6 font-semibold">Navegación</h5>
<ul className="space-y-4 text-xs text-white/40">
<li><a className="hover:text-fuchsia-400 transition-colors" href="#">Servicios</a></li>
<li><a className="hover:text-fuchsia-400 transition-colors" href="#">Casos de Éxito</a></li>
<li><a className="hover:text-fuchsia-400 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h5 className="text-[10px] uppercase tracking-widest text-white/60 mb-6 font-semibold">Legal</h5>
<ul className="space-y-4 text-xs text-white/40">
<li><a className="hover:text-fuchsia-400 transition-colors" href="#">Privacidad</a></li>
<li><a className="hover:text-fuchsia-400 transition-colors" href="#">Cookies</a></li>
<li><a className="hover:text-fuchsia-400 transition-colors" href="#">Aviso Legal</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<p className="text-[10px] text-white/30 tracking-widest uppercase">© 2024 SIGNOS MARKETING DIGITAL. TODOS LOS DERECHOS RESERVADOS.</p>
<div className="flex gap-4">
<a className="text-white/40 hover:text-white transition-all" href="#"><iconify-icon icon="solar:camera-linear" width="18"></iconify-icon></a>
<a className="text-white/40 hover:text-white transition-all" href="#"><iconify-icon icon="solar:letter-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
