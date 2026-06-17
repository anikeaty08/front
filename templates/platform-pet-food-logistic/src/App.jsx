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



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
brand: {
50: '#f0f9ff',
500: '#0ea5e9', // Primary Blue
600: '#0284c7',
900: '#0c4a6e',
},
dark: {
bg: '#08090A', // Deep dark
card: '#0F1113', // Slightly lighter
border: '#222428'
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const html = document.documentElement;

        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
            themeIcon.setAttribute('icon', 'solar:sun-linear');
        } else {
            html.classList.remove('dark');
            themeIcon.setAttribute('icon', 'solar:moon-linear');
        }

        themeToggle.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.theme = 'light';
                themeIcon.setAttribute('icon', 'solar:moon-linear');
            } else {
                html.classList.add('dark');
                localStorage.theme = 'dark';
                themeIcon.setAttribute('icon', 'solar:sun-linear');
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-brand-500/5 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[20%] w-[30%] h-[30%] rounded-full bg-purple-500/5 blur-[100px]"></div>
</div>

<header className="fixed top-0 w-full z-50 glass-header border-b border-slate-200 dark:border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
<iconify-icon height="18" icon="solar:paw-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">VitaSnaccks</span>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
<a className="hover:text-brand-500 transition-colors" href="#features">Características</a>
<a className="hover:text-brand-500 transition-colors" href="#inventory">Logística</a>
<a className="hover:text-brand-500 transition-colors" href="#tech">Tecnología</a>
</nav>

<div className="flex items-center gap-4">

<button aria-label="Toggle Dark Mode" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 transition-colors" id="theme-toggle">
<iconify-icon height="20" icon="solar:moon-linear" id="theme-icon" width="20"></iconify-icon>
</button>
<a className="hidden md:flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity" href="#">
<span>Admin Panel</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</header>
<main className="pt-32 pb-20 px-6">

<section className="max-w-4xl mx-auto text-center mb-32 animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                Nuevo: Integración Multi-Bodega &amp; POS Híbrido
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
                Logística de mascotas <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-indigo-500 to-purple-500">sin interrupciones.</span>
</h1>
<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
                La plataforma híbrida definitiva para VitaSnaccks Zacapa. Gestiona inventario online y físico, optimiza imágenes automáticamente y controla tus finanzas en tiempo real.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-medium transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2">
<iconify-icon icon="solar:rocket-linear" width="20"></iconify-icon>
                    Iniciar Demo
                </button>
<button className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-900 dark:text-white rounded-full font-medium transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
                    Documentación
                </button>
</div>

<div className="mt-20 relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative bg-white dark:bg-[#0F1113] border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden shadow-2xl">

<div className="h-10 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="ml-4 h-4 w-64 bg-slate-200 dark:bg-white/10 rounded-full"></div>
</div>

<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-4 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
<div className="flex justify-between items-start mb-2">
<div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Ventas Totales</div>
<iconify-icon className="text-green-500" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="text-2xl font-semibold text-slate-900 dark:text-white">Q12,450.00</div>
<div className="text-xs text-slate-500 mt-1">+15% vs semana pasada</div>
</div>

<div className="p-4 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
<div className="flex justify-between items-start mb-2">
<div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Pedidos Pendientes</div>
<iconify-icon className="text-brand-500" icon="solar:box-linear"></iconify-icon>
</div>
<div className="text-2xl font-semibold text-slate-900 dark:text-white">8</div>
<div className="text-xs text-slate-500 mt-1">3 Zacapa, 5 Interior</div>
</div>

<div className="p-4 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
<div className="flex justify-between items-start mb-2">
<div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Optimización IMG</div>
<iconify-icon className="text-purple-500" icon="solar:gallery-wide-linear"></iconify-icon>
</div>
<div className="w-full bg-slate-200 dark:bg-white/10 rounded-full h-2 mt-2">
<div className="bg-purple-500 h-2 rounded-full w-[85%]"></div>
</div>
<div className="text-xs text-slate-500 mt-2">WebP Processing: Active</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto mb-32" id="features">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">Ingeniería para el Comercio Moderno</h2>
<p className="text-slate-600 dark:text-slate-400 max-w-xl">
                    Cada interacción ha sido diseñada para la velocidad. Desde el checkout de una página hasta la sincronización de inventario en tiempo real.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">

<div className="md:col-span-2 p-8 rounded-3xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border group hover:border-brand-500/50 transition-colors">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
<iconify-icon icon="solar:shop-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 dark:text-white">Inventario Maestro Híbrido</h3>
</div>
<p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
                        Unifica tu e-commerce y tiendas físicas. Gestiona múltiples bodegas, traslados entre sucursales y ventas POS desde un solo núcleo. El sistema decide inteligentemente de qué bodega despachar.
                    </p>
<div className="grid grid-cols-3 gap-4">
<div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center">
<div className="text-sm font-medium text-slate-900 dark:text-white">Online</div>
<div className="text-xs text-green-500 mt-1">Live Sync</div>
</div>
<div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center">
<div className="text-sm font-medium text-slate-900 dark:text-white">Bodega Zacapa</div>
<div className="text-xs text-slate-500 mt-1">Stock: 1,240</div>
</div>
<div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center opacity-50">
<div className="text-sm font-medium text-slate-900 dark:text-white">Sucursal 2</div>
<div className="text-xs text-slate-500 mt-1">Próximamente</div>
</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border group hover:border-purple-500/50 transition-colors flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 dark:text-white">Auto-Optimización</h3>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                            Sube cualquier formato. Nosotros generamos WebP, Thumbnails y versiones @2x Retina automáticamente en segundo plano.
                        </p>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs text-slate-500">
<span>original.jpg (2.4MB)</span>
<span className="text-red-400">Pesado</span>
</div>
<div className="flex justify-center">
<iconify-icon className="text-slate-400 animate-bounce" icon="solar:arrow-down-linear"></iconify-icon>
</div>
<div className="flex justify-between text-xs font-medium text-green-500">
<span>optimized.webp (85KB)</span>
<span>⚡ 96% Ahorro</span>
</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border group hover:border-green-500/50 transition-colors">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-green-500/10 rounded-lg text-green-500">
<iconify-icon icon="solar:calculator-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 dark:text-white">Ingeniería de Precios</h3>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                        Define tu "Neto Deseado". El sistema calcula automáticamente comisiones de Recurrente, Cuotas (3,6,12,18), ISR y Retención de IVA.
                    </p>
<ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                            Cálculo inverso automático
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                            Desglose de cuotas en Checkout
                        </li>
</ul>
</div>

<div className="md:col-span-2 p-8 rounded-3xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border group hover:border-indigo-500/50 transition-colors relative overflow-hidden">
<div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-500">
<iconify-icon icon="solar:palette-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 dark:text-white">Gestión de Marca Dinámica</h3>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                                Control total sobre colores y temas (Claro/Oscuro/Sistema). Los cambios se inyectan como variables CSS instantáneamente sin recompilar.
                            </p>
<div className="flex gap-2">
<div className="w-6 h-6 rounded-full bg-brand-500 border-2 border-white dark:border-slate-800 cursor-pointer hover:scale-110 transition-transform"></div>
<div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white dark:border-slate-800 cursor-pointer hover:scale-110 transition-transform"></div>
<div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-800 cursor-pointer hover:scale-110 transition-transform"></div>
<div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-white dark:border-slate-800 cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>
<div className="flex flex-col justify-center space-y-4">
<div className="p-4 rounded-xl bg-white dark:bg-black border border-slate-200 dark:border-white/10 shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-semibold text-slate-900 dark:text-white">Checkout One-Page</span>
<div className="h-2 w-2 bg-green-500 rounded-full"></div>
</div>
<div className="h-2 bg-slate-100 dark:bg-white/10 rounded w-3/4 mb-2"></div>
<div className="h-2 bg-slate-100 dark:bg-white/10 rounded w-1/2"></div>
</div>
<div className="p-4 rounded-xl bg-white dark:bg-black border border-slate-200 dark:border-white/10 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-semibold text-slate-900 dark:text-white">Factura FEL Auto</span>
<iconify-icon className="text-brand-500" icon="solar:file-check-linear"></iconify-icon>
</div>
<div className="text-xs text-slate-500">Enviada por email al confirmar</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200 dark:border-white/5 py-16 bg-slate-50/50 dark:bg-white/[0.02]" id="tech">
<div className="max-w-7xl mx-auto text-center">
<p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-8">Potenciado por tecnología de punta</p>
<div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-lg font-bold text-slate-700 dark:text-white"><iconify-icon icon="solar:card-reciept-linear"></iconify-icon> Recurrente</div>
<div className="flex items-center gap-2 text-lg font-bold text-slate-700 dark:text-white"><iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon> Guatex</div>
<div className="flex items-center gap-2 text-lg font-bold text-slate-700 dark:text-white"><iconify-icon icon="solar:bill-list-linear"></iconify-icon> Infile FEL</div>
<div className="flex items-center gap-2 text-lg font-bold text-slate-700 dark:text-white"><iconify-icon icon="solar:iphone-linear"></iconify-icon> WhatsApp API</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto py-32 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6">
                Listo para escalar <br/> VitaSnaccks?
            </h2>
<p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto">
                Panel administrativo Filament, arquitectura SPA sin recargas y gestión de roles granular. Todo preparado para el entorno de producción.
            </p>
<div className="flex flex-col items-center gap-4">
<button className="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:scale-105 transition-transform duration-200 flex items-center gap-2 shadow-xl">
                    Acceder al Admin
                    <iconify-icon icon="solar:login-2-linear" width="20"></iconify-icon>
</button>
<p className="text-xs text-slate-500 mt-4">Requiere autenticación 2FA para Super Admin</p>
</div>
</section>
</main>
<footer className="border-t border-slate-200 dark:border-white/5 py-12 bg-white dark:bg-[#08090A]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-80">
<iconify-icon className="text-slate-900 dark:text-white" icon="solar:paw-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-900 dark:text-white">VitaSnaccks Platform</span>
</div>
<div className="text-sm text-slate-500">
                © 2024 Zacapa, Guatemala. Todos los derechos reservados.
            </div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-brand-500 transition-colors" href="#"><iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-brand-500 transition-colors" href="#"><iconify-icon icon="solar:server-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
