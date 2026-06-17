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
      
    // Lucide Icons
    lucide.createIcons();

    // Reveal Animation
    const revealEls = document.querySelectorAll('.reveal');
    revealEls.forEach((el, idx) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(40px)';
      el.style.transition = 'opacity .6s ease-out, transform .6s ease-out';
      el.style.transitionDelay = `${idx * 120}ms`;
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, 100);
    });

    // Mobile Menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', () => mobileMenu.classList.add('hidden')));

    // Chart.js
    const ctx = document.getElementById('visitsChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        datasets: [{
          label: 'Visitas',
          data: [120, 250, 190, 300, 280, 350, 400],
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99,102,241,.1)',
          fill: true,
          tension: .4
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { color: '#475569' } },
          y: { grid: { color: '#1e293b' }, ticks: { color: '#475569' } }
        }
      }
    });
  
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
      

<header className="fixed top-0 inset-x-0 backdrop-blur supports-backdrop-blur:bg-slate-900/60 border-b border-slate-800/50 z-50">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 bg-indigo-500 rounded-full"></div>
<span className="text-lg font-semibold tracking-tight">Producto X</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-indigo-400 transition-colors" href="#features">Características</a>
<a className="hover:text-indigo-400 transition-colors" href="#analytics">Analíticas</a>
<a className="hover:text-indigo-400 transition-colors" href="#precios">Precios</a>
<a className="hover:text-indigo-400 transition-colors" href="#contacto">Contacto</a>
</nav>
<a className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 transition-colors" href="#">
<span>Comenzar</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<button className="md:hidden" id="mobileMenuBtn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>

<div className="fixed inset-0 bg-slate-900/80 backdrop-blur-lg flex-col items-center justify-center gap-6 text-xl font-medium hidden" id="mobileMenu">
<a className="mobile-link" href="#features">Características</a>
<a className="mobile-link" href="#analytics">Analíticas</a>
<a className="mobile-link" href="#precios">Precios</a>
<a className="mobile-link" href="#contacto">Contacto</a>
</div>

<section className="pt-32 pb-24 md:pt-44 md:pb-32 max-w-7xl mx-auto px-6 text-center space-y-8">
<h1 className="reveal text-4xl md:text-6xl font-semibold tracking-tight leading-tight">Impulsa tu producto con <span className="text-indigo-500">Potencia</span> y <span className="text-indigo-500">Velocidad</span></h1>
<p className="reveal mx-auto max-w-2xl text-slate-400 text-lg">Una plataforma todo-en-uno para lanzar, escalar y analizar tu negocio sin complicaciones.</p>
<div className="reveal flex flex-col sm:flex-row justify-center gap-4 pt-4">
<a className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-md" href="#">Probar Gratis</a>
<a className="flex items-center justify-center gap-2 px-8 py-3 border border-slate-700 rounded-md hover:border-slate-500 transition-colors" href="#video">
<i className="w-5 h-5" data-lucide="play-circle"></i> Ver Demo
      </a>
</div>
<img alt="Dashboard UI" className="reveal mx-auto rounded-lg shadow-2xl shadow-indigo-500/10 max-w-4xl" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
</section>

<div className="border-t border-slate-800 mx-6"></div>

<section className="py-24 max-w-7xl mx-auto px-6 space-y-16" id="features">
<div className="text-center space-y-4">
<h2 className="reveal text-3xl md:text-4xl font-semibold tracking-tight">Todo lo que necesitas</h2>
<p className="reveal max-w-2xl mx-auto text-slate-400">Diseñado para simplificar tu flujo de trabajo y maximizar resultados desde el primer día.</p>
</div>
<div className="grid md:grid-cols-3 gap-10">

<div className="reveal bg-slate-900/60 border border-slate-800 p-8 rounded-lg hover:shadow-lg transition-shadow">
<i className="w-8 h-8 text-indigo-500 mb-4" data-lucide="zap"></i>
<h3 className="text-xl font-medium tracking-tight mb-2">Rendimiento Instantáneo</h3>
<p className="text-slate-400 text-sm leading-relaxed">Cargas ultrarrápidas y una experiencia fluida para tus usuarios en cualquier dispositivo.</p>
</div>
<div className="reveal bg-slate-900/60 border border-slate-800 p-8 rounded-lg hover:shadow-lg transition-shadow">
<i className="w-8 h-8 text-indigo-500 mb-4" data-lucide="shield-check"></i>
<h3 className="text-xl font-medium tracking-tight mb-2">Seguridad Robusta</h3>
<p className="text-slate-400 text-sm leading-relaxed">Protección de datos de nivel empresarial con cifrado completo y monitoreo 24/7.</p>
</div>
<div className="reveal bg-slate-900/60 border border-slate-800 p-8 rounded-lg hover:shadow-lg transition-shadow">
<i className="w-8 h-8 text-indigo-500 mb-4" data-lucide="layout-dashboard"></i>
<h3 className="text-xl font-medium tracking-tight mb-2">Panel Intuitivo</h3>
<p className="text-slate-400 text-sm leading-relaxed">Visualiza métricas clave y controla todo tu ecosistema desde un único lugar.</p>
</div>
</div>
</section>

<div className="border-t border-slate-800 mx-6"></div>

<section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center" id="analytics">
<div className="reveal space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Analíticas en tiempo real</h2>
<p className="text-slate-400">Observa el comportamiento de tus usuarios y toma decisiones basadas en datos confiables.</p>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-500" data-lucide="check-circle"></i> Seguimiento de conversiones
        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-500" data-lucide="check-circle"></i> Funnels personalizables
        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-500" data-lucide="check-circle"></i> Exportación de reportes
        </li>
</ul>
</div>
<div className="reveal bg-slate-900/60 border border-slate-800 rounded-lg p-6">
<div>
<canvas height="50" id="visitsChart" width="100%"></canvas>
</div>
</div>
</section>

<div className="border-t border-slate-800 mx-6"></div>

<section className="py-24 max-w-7xl mx-auto px-6 text-center space-y-16" id="precios">
<div className="space-y-4">
<h2 className="reveal text-3xl md:text-4xl font-semibold tracking-tight">Planes flexibles</h2>
<p className="reveal max-w-2xl mx-auto text-slate-400">Elige el plan que mejor se adapte a tu etapa de crecimiento.</p>
</div>
<div className="grid md:grid-cols-3 gap-10">

<div className="reveal border border-slate-800 bg-slate-900/60 rounded-lg p-10 flex flex-col gap-6 hover:shadow-lg transition-shadow">
<h3 className="text-xl font-medium tracking-tight">Starter</h3>
<p className="text-4xl font-semibold tracking-tight">$0</p>
<ul className="text-sm text-slate-400 space-y-2">
<li>Hasta 1K usuarios</li>
<li>Analíticas básicas</li>
<li>Email soporte</li>
</ul>
<a className="mt-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-md" href="#">Comenzar</a>
</div>

<div className="reveal border border-indigo-500 bg-slate-900/60 rounded-lg p-10 flex flex-col gap-6 hover:shadow-lg transition-shadow">
<h3 className="text-xl font-medium tracking-tight flex justify-center items-center gap-2">Pro <span className="text-xs bg-indigo-600/20 text-indigo-400 px-2 py-0.5 rounded-full">Popular</span></h3>
<p className="text-4xl font-semibold tracking-tight">$29</p>
<ul className="text-sm text-slate-400 space-y-2">
<li>Usuarios ilimitados</li>
<li>Analíticas avanzadas</li>
<li>Soporte prioritario</li>
</ul>
<a className="mt-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-md" href="#">Elegir</a>
</div>

<div className="reveal border border-slate-800 bg-slate-900/60 rounded-lg p-10 flex flex-col gap-6 hover:shadow-lg transition-shadow">
<h3 className="text-xl font-medium tracking-tight">Enterprise</h3>
<p className="text-4xl font-semibold tracking-tight">Custom</p>
<ul className="text-sm text-slate-400 space-y-2">
<li>Soluciones a medida</li>
<li>Integraciones dedicadas</li>
<li>Gerente de éxito</li>
</ul>
<a className="mt-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-md" href="#">Contactar</a>
</div>
</div>
</section>

<div className="border-t border-slate-800 mx-6"></div>

<section className="py-24 max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12" id="contacto">
<div className="reveal space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">¿Necesitas ayuda?</h2>
<p className="text-slate-400">Nuestro equipo está disponible para resolver tus dudas y acompañarte en tu proceso.</p>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-500" data-lucide="mail"></i>
<span>soporte@productox.com</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-500" data-lucide="phone"></i>
<span>+34 600 00 00 00</span>
</div>
</div>
<form className="reveal bg-slate-900/60 border border-slate-800 rounded-lg p-8 flex flex-col gap-6">
<div className="flex flex-col gap-1">
<label className="text-sm" htmlFor="name">Nombre</label>
<input className="bg-slate-800 border border-slate-700 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500 placeholder-slate-600" id="name" placeholder="Tu nombre" type="text"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-sm" htmlFor="email">Email</label>
<input className="bg-slate-800 border border-slate-700 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500 placeholder-slate-600" id="email" placeholder="tú@ejemplo.com" type="email"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-sm" htmlFor="msg">Mensaje</label>
<textarea className="bg-slate-800 border border-slate-700 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500 placeholder-slate-600" id="msg" placeholder="Cuéntanos en qué podemos ayudarte" rows="4"></textarea>
</div>
<button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-md" type="submit">Enviar</button>
</form>
</section>

<footer className="border-t border-slate-800 py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-sm text-slate-500">© 2024 Producto X. Todos los derechos reservados.</span>
<div className="flex gap-6 text-slate-500">
<a className="hover:text-indigo-400 transition-colors" href="#">Privacidad</a>
<a className="hover:text-indigo-400 transition-colors" href="#">Términos</a>
<a className="hover:text-indigo-400 transition-colors" href="#">Cookies</a>
</div>
</div>
</footer>



    </>
  );
}
