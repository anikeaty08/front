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
      
    lucide.createIcons();

    // Simple reveal on load
    document.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(40px)';
      el.style.transition = 'opacity .6s ease-out, transform .6s ease-out';
      el.style.transitionDelay = `${i * 100}ms`;
      window.requestAnimationFrame(() => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      });
    });

    // Mobile menu
    const btn  = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
    menu.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => menu.classList.add('hidden')));

    // Chart
    const ctx = document.getElementById('visitsChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'],
        datasets: [{
          label: 'Visitas',
          data: [120,250,190,300,280,350,400],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16,185,129,.1)',
          fill: true,
          tension: .4
        }]
      },
      options: {
        plugins:{legend:{display:false}},
        scales:{
          x:{grid:{display:false},ticks:{color:'#64748b'}},
          y:{grid:{color:'#f1f5f9'},ticks:{color:'#64748b'}}
        },
        responsive: true,
        maintainAspectRatio: false
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
      

<header className="fixed top-0 inset-x-0 bg-white/80 backdrop-blur border-b border-stone-200 z-50">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 bg-emerald-600 rounded-full"></div>
<span className="text-lg font-semibold tracking-tight">Producto X</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-emerald-600 transition-colors" href="#features">Características</a>
<a className="hover:text-emerald-600 transition-colors" href="#analytics">Analíticas</a>
<a className="hover:text-emerald-600 transition-colors" href="#pricing">Precios</a>
<a className="hover:text-emerald-600 transition-colors" href="#contact">Contacto</a>
</nav>
<a className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white transition-colors" href="#">
<span>Comenzar</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<button className="md:hidden" id="mobileMenuBtn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>

<nav className="fixed inset-0 bg-stone-900/70 backdrop-blur-lg flex-col items-center justify-center gap-8 text-xl font-medium hidden" id="mobileMenu">
<a className="mobile-link" href="#features">Características</a>
<a className="mobile-link" href="#analytics">Analíticas</a>
<a className="mobile-link" href="#pricing">Precios</a>
<a className="mobile-link" href="#contact">Contacto</a>
</nav>

<section className="pt-28 pb-20 md:pt-36 md:pb-28 max-w-7xl mx-auto px-6 text-center space-y-8">
<h1 className="reveal text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
      Impulsa tu producto con <span className="text-emerald-600">Potencia</span> y <span className="text-emerald-600">Velocidad</span>
</h1>
<p className="reveal mx-auto max-w-2xl text-stone-600 text-lg">
      Una plataforma todo-en-uno para lanzar, escalar y analizar tu negocio sin complicaciones.
    </p>
<div className="reveal flex flex-col sm:flex-row justify-center gap-4 pt-4">
<a className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-md text-white" href="#">Probar Gratis</a>
<a className="flex items-center justify-center gap-2 px-8 py-3 border border-stone-300 rounded-md hover:border-stone-400 transition-colors" href="#video">
<i className="w-5 h-5" data-lucide="play-circle"></i> Ver Demo
      </a>
</div>
<img alt="Dashboard UI" className="reveal mx-auto rounded-xl shadow-xl max-w-4xl w-full" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
</section>

<div className="border-t border-stone-200 mx-6"></div>

<section className="py-20 max-w-7xl mx-auto px-6 space-y-16" id="features">
<div className="text-center space-y-4">
<h2 className="reveal text-3xl md:text-4xl font-semibold tracking-tight">Todo lo que necesitas</h2>
<p className="reveal max-w-2xl mx-auto text-stone-600">
        Diseñado para simplificar tu flujo de trabajo y maximizar resultados desde el primer día.
      </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="reveal bg-white border border-stone-200 p-8 rounded-lg hover:shadow-lg transition-shadow flex flex-col h-full">
<i className="w-8 h-8 text-emerald-600 mb-4" data-lucide="zap"></i>
<h3 className="text-xl font-medium tracking-tight mb-2">Rendimiento Instantáneo</h3>
<p className="text-stone-600 text-sm leading-relaxed">
          Cargas ultrarrápidas y una experiencia fluida para tus usuarios en cualquier dispositivo.
        </p>
</div>
<div className="reveal bg-white border border-stone-200 p-8 rounded-lg hover:shadow-lg transition-shadow flex flex-col h-full">
<i className="w-8 h-8 text-emerald-600 mb-4" data-lucide="shield-check"></i>
<h3 className="text-xl font-medium tracking-tight mb-2">Seguridad Robusta</h3>
<p className="text-stone-600 text-sm leading-relaxed">
          Protección de datos de nivel empresarial con cifrado completo y monitoreo 24/7.
        </p>
</div>
<div className="reveal bg-white border border-stone-200 p-8 rounded-lg hover:shadow-lg transition-shadow flex flex-col h-full">
<i className="w-8 h-8 text-emerald-600 mb-4" data-lucide="layout-dashboard"></i>
<h3 className="text-xl font-medium tracking-tight mb-2">Panel Intuitivo</h3>
<p className="text-stone-600 text-sm leading-relaxed">
          Visualiza métricas clave y controla todo tu ecosistema desde un único lugar.
        </p>
</div>
</div>
</section>

<div className="border-t border-stone-200 mx-6"></div>

<section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center" id="analytics">
<div className="reveal space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Analíticas en tiempo real</h2>
<p className="text-stone-600">
        Observa el comportamiento de tus usuarios y toma decisiones basadas en datos confiables.
      </p>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-emerald-600" data-lucide="check-circle"></i> Seguimiento de conversiones</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-emerald-600" data-lucide="check-circle"></i> Funnels personalizables</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-emerald-600" data-lucide="check-circle"></i> Exportación de reportes</li>
</ul>
</div>
<div className="reveal bg-white border border-stone-200 rounded-lg p-6 w-full">
<div><canvas height="50" id="visitsChart" width="100%"></canvas></div>
</div>
</section>

<div className="border-t border-stone-200 mx-6"></div>

<section className="py-20 max-w-7xl mx-auto px-6 text-center space-y-16" id="pricing">
<div className="space-y-4">
<h2 className="reveal text-3xl md:text-4xl font-semibold tracking-tight">Planes flexibles</h2>
<p className="reveal max-w-2xl mx-auto text-stone-600">
        Elige el plan que mejor se adapte a tu etapa de crecimiento.
      </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal border border-stone-200 bg-white rounded-lg p-10 flex flex-col gap-6 hover:shadow-lg transition-shadow">
<h3 className="text-xl font-medium tracking-tight">Starter</h3>
<p className="text-4xl font-semibold tracking-tight">$0</p>
<ul className="text-sm text-stone-600 space-y-2">
<li>Hasta 1K usuarios</li>
<li>Analíticas básicas</li>
<li>Email soporte</li>
</ul>
<a className="mt-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-md text-white" href="#">Comenzar</a>
</div>

<div className="reveal border border-emerald-600 bg-white rounded-lg p-10 flex flex-col gap-6 hover:shadow-lg transition-shadow">
<h3 className="text-xl font-medium tracking-tight flex justify-center items-center gap-2">
          Pro <span className="text-xs bg-emerald-600/10 text-emerald-600 px-2 py-0.5 rounded-full">Popular</span>
</h3>
<p className="text-4xl font-semibold tracking-tight">$29</p>
<ul className="text-sm text-stone-600 space-y-2">
<li>Usuarios ilimitados</li>
<li>Analíticas avanzadas</li>
<li>Soporte prioritario</li>
</ul>
<a className="mt-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-md text-white" href="#">Elegir</a>
</div>

<div className="reveal border border-stone-200 bg-white rounded-lg p-10 flex flex-col gap-6 hover:shadow-lg transition-shadow">
<h3 className="text-xl font-medium tracking-tight">Enterprise</h3>
<p className="text-4xl font-semibold tracking-tight">Custom</p>
<ul className="text-sm text-stone-600 space-y-2">
<li>Soluciones a medida</li>
<li>Integraciones dedicadas</li>
<li>Gerente de éxito</li>
</ul>
<a className="mt-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-md text-white" href="#">Contactar</a>
</div>
</div>
</section>

<div className="border-t border-stone-200 mx-6"></div>

<section className="py-20 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12" id="contact">
<div className="reveal space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">¿Necesitas ayuda?</h2>
<p className="text-stone-600">
        Nuestro equipo está disponible para resolver tus dudas y acompañarte en tu proceso.
      </p>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-600" data-lucide="mail"></i>
<span className="select-all">soporte@productox.com</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-600" data-lucide="phone"></i>
<span>+34 600 00 00 00</span>
</div>
</div>
<form className="reveal bg-white border border-stone-200 rounded-lg p-8 flex flex-col gap-6">
<div className="flex flex-col gap-1">
<label className="text-sm" htmlFor="name">Nombre</label>
<input className="bg-stone-50 border border-stone-300 rounded-md px-4 py-2 focus:outline-none focus:border-emerald-600 placeholder-stone-400" id="name" placeholder="Tu nombre" required="" type="text"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-sm" htmlFor="email">Email</label>
<input className="bg-stone-50 border border-stone-300 rounded-md px-4 py-2 focus:outline-none focus:border-emerald-600 placeholder-stone-400" id="email" placeholder="tú@ejemplo.com" required="" type="email"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-sm" htmlFor="msg">Mensaje</label>
<textarea className="bg-stone-50 border border-stone-300 rounded-md px-4 py-2 focus:outline-none focus:border-emerald-600 placeholder-stone-400" id="msg" placeholder="Cuéntanos en qué podemos ayudarte" rows="4"></textarea>
</div>
<button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-md text-white" type="submit">Enviar</button>
</form>
</section>

<footer className="border-t border-stone-200 py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-sm text-stone-500">© 2024 Producto X. Todos los derechos reservados.</span>
<div className="flex gap-6 text-stone-500">
<a className="hover:text-emerald-600 transition-colors" href="#">Privacidad</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Términos</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Cookies</a>
</div>
</div>
</footer>



    </>
  );
}
