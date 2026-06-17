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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('main-nav');
            if (window.scrollY > 50) {
                nav.classList.add('py-2', 'bg-[#1C3764]/95', 'backdrop-blur-md');
                nav.classList.remove('py-4', 'bg-[#1C3764]');
            } else {
                nav.classList.remove('py-2', 'bg-[#1C3764]/95', 'backdrop-blur-md');
                nav.classList.add('py-4', 'bg-[#1C3764]');
            }
        });

        // Mobile Menu Logic
        const btn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        const menuIcon = btn.querySelector('iconify-icon');

        function toggleMenu() {
            const isOpen = mobileMenu.classList.contains('opacity-100');
            
            if (isOpen) {
                // Close Menu
                mobileMenu.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
                mobileMenu.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
                menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
            } else {
                // Open Menu
                mobileMenu.classList.remove('opacity-0', '-translate-y-4', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
                menuIcon.setAttribute('icon', 'solar:close-circle-linear');
            }
        }

        btn.addEventListener('click', toggleMenu);

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(mobileMenu.classList.contains('opacity-100')) {
                    toggleMenu();
                }
            });
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#1C3764] text-white border-b border-white/10 shadow-lg" id="main-nav">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<div className="flex items-center gap-2">
<span className="text-xl font-medium tracking-tight uppercase">Megacostales</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-xs font-normal uppercase tracking-widest text-stone-200">

<div className="relative group">
<button className="flex items-center gap-1 hover:text-white transition-colors py-2">
                        Productos <iconify-icon className="text-base" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="absolute top-full left-0 mt-2 w-64 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 bg-white text-stone-800 rounded-2xl shadow-xl border border-stone-100 p-3 z-50">
<a className="block px-4 py-3 text-xs uppercase tracking-widest hover:bg-stone-50 hover:text-[#0ea5e9] rounded-xl transition-colors" href="#catalogo">Costales de Rafia</a>
<a className="block px-4 py-3 text-xs uppercase tracking-widest hover:bg-stone-50 hover:text-[#0ea5e9] rounded-xl transition-colors" href="#catalogo">Stretch Film / Playo</a>
</div>
</div>

<div className="relative group">
<button className="flex hover:text-white transition-colors pt-2 pb-2 gap-x-1 gap-y-1 items-center">
                        Soluciones por Industria <iconify-icon className="text-base" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="absolute top-full left-0 mt-2 w-72 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 bg-white text-stone-800 rounded-2xl shadow-xl border border-stone-100 p-3 z-50">
<a className="flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-widest hover:bg-stone-50 hover:text-[#0ea5e9] rounded-xl transition-colors" href="#"><iconify-icon className="text-lg text-stone-400" icon="solar:box-minimalistic-linear"></iconify-icon> Alimento Balanceado</a>
<a className="flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-widest hover:bg-stone-50 hover:text-[#0ea5e9] rounded-xl transition-colors" href="#"><iconify-icon className="text-lg text-stone-400" icon="solar:leaf-linear"></iconify-icon> Fertilizantes y Agroquímicos</a>
<a className="flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-widest hover:bg-stone-50 hover:text-[#0ea5e9] rounded-xl transition-colors" href="#"><iconify-icon className="text-lg text-stone-400" icon="solar:city-linear"></iconify-icon> Construcción</a>
<a className="flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-widest hover:bg-stone-50 hover:text-[#0ea5e9] rounded-xl transition-colors" href="#"><iconify-icon className="text-lg text-stone-400" icon="solar:tree-linear"></iconify-icon> Forrajera y Semillas</a>
</div>
</div>
<a className="hover:text-white transition-colors py-2" href="#impresion">Diseño e Impresión</a>
<a className="hover:text-white transition-colors py-2" href="#logistica">Capacidad Logística</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-xs font-medium bg-[#0ea5e9] text-white px-7 py-3 rounded-xl hover:bg-sky-400 transition-all uppercase tracking-wider shadow-lg shadow-[#0ea5e9]/20">
                    Cotiza tu Volumen
                </button>
<button className="lg:hidden p-2 text-white transition-transform hover:scale-110" id="mobile-menu-btn">
<iconify-icon className="text-2xl transition-all" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="lg:hidden absolute top-full left-0 w-full transition-all duration-300 opacity-0 -translate-y-4 pointer-events-none z-40 border-t border-white/10" id="mobile-menu">
<div className="bg-[#1C3764] p-6 flex flex-col gap-6 shadow-2xl">
<a className="text-sm font-medium uppercase tracking-widest text-stone-300 hover:text-white transition-colors mobile-link" href="#catalogo">Productos</a>
<a className="text-sm font-medium uppercase tracking-widest text-stone-300 hover:text-white transition-colors mobile-link" href="#industrias">Soluciones por Industria</a>
<a className="text-sm font-medium uppercase tracking-widest text-stone-300 hover:text-white transition-colors mobile-link" href="#impresion">Diseño e Impresión</a>
<a className="text-sm font-medium uppercase tracking-widest text-stone-300 hover:text-white transition-colors mobile-link" href="#logistica">Capacidad Logística</a>
<hr className="border-white/10"/>
<button className="w-full flex items-center justify-center gap-2 text-xs font-medium bg-[#0ea5e9] text-white px-6 py-4 rounded-xl hover:opacity-90 transition-all uppercase tracking-wider">
                    Cotiza tu Volumen
                </button>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center pt-24">

<div className="absolute inset-0 bg-[#1C3764]/70 z-10 mix-blend-multiply"></div>
<div className="z-10 bg-gradient-to-r from-[#1C3764] to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>

<img alt="Almacén de costales y logística" className="absolute inset-0 w-full h-full object-cover z-0" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&amp;fit=crop&amp;q=80"/>
<div className="max-w-7xl mx-auto px-6 w-full relative z-20">
<div className="max-w-3xl reveal">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium tracking-widest mb-10 uppercase backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]"></span>
                    Ingeniería B2B en Empaque
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] mb-6 text-white">
                    Resistencia que <br/>mueve la industria.
                </h1>
<p className="text-xl md:text-2xl text-stone-300 mb-12 leading-relaxed max-w-2xl font-light">
                    Protección extrema, entregas masivas y diseño que destaca en el anaquel.
                </p>
<div className="flex flex-wrap gap-5">
<button className="px-8 py-4 bg-[#0ea5e9] text-white rounded-xl font-medium shadow-2xl shadow-[#0ea5e9]/20 hover:-translate-y-1 transition-all flex items-center gap-3">
                        Los que se tienen
                        <iconify-icon className="text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-xl font-medium hover:bg-white/10 transition-all flex items-center gap-2">
                        Certificaciones
                    </button>
</div>
</div>
</div>
</header>

<section className="py-20 bg-stone-100" id="industrias">
<div className="max-w-7xl mx-auto px-6 -mt-32 relative z-30">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group bg-white rounded-3xl p-8 shadow-xl shadow-stone-200/50 border border-stone-100 hover:-translate-y-2 hover:bg-[#0ea5e9] transition-all duration-300 flex flex-col justify-between h-64 reveal" href="#">
<div className="w-14 h-14 rounded-2xl bg-stone-50 group-hover:bg-white/20 flex items-center justify-center transition-colors">
<iconify-icon className="text-[#1C3764] group-hover:text-white text-3xl transition-colors" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-stone-900 group-hover:text-white tracking-tight mb-2 transition-colors">Alimento Balanceado</h3>
<p className="text-sm font-light text-stone-500 group-hover:text-stone-100 transition-colors">Contención segura para nutrición animal.</p>
</div>
</a>

<a className="group bg-white rounded-3xl p-8 shadow-xl shadow-stone-200/50 border border-stone-100 hover:-translate-y-2 hover:bg-[#0ea5e9] transition-all duration-300 flex flex-col justify-between h-64 reveal delay-100" href="#">
<div className="w-14 h-14 rounded-2xl bg-stone-50 group-hover:bg-white/20 flex items-center justify-center transition-colors">
<iconify-icon className="text-[#1C3764] group-hover:text-white text-3xl transition-colors" icon="solar:leaf-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-stone-900 group-hover:text-white tracking-tight mb-2 transition-colors">Fertilizantes</h3>
<p className="text-sm font-light text-stone-500 group-hover:text-stone-100 transition-colors">Protección contra humedad y químicos.</p>
</div>
</a>

<a className="group bg-white rounded-3xl p-8 shadow-xl shadow-stone-200/50 border border-stone-100 hover:-translate-y-2 hover:bg-[#0ea5e9] transition-all duration-300 flex flex-col justify-between h-64 reveal delay-200" href="#">
<div className="w-14 h-14 rounded-2xl bg-stone-50 group-hover:bg-white/20 flex items-center justify-center transition-colors">
<iconify-icon className="text-[#1C3764] group-hover:text-white text-3xl transition-colors" icon="solar:city-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-stone-900 group-hover:text-white tracking-tight mb-2 transition-colors">Construcción</h3>
<p className="text-sm font-light text-stone-500 group-hover:text-stone-100 transition-colors">Máxima resistencia al peso y abrasión.</p>
</div>
</a>

<a className="group bg-white rounded-3xl p-8 shadow-xl shadow-stone-200/50 border border-stone-100 hover:-translate-y-2 hover:bg-[#0ea5e9] transition-all duration-300 flex flex-col justify-between h-64 reveal delay-300" href="#">
<div className="w-14 h-14 rounded-2xl bg-stone-50 group-hover:bg-white/20 flex items-center justify-center transition-colors">
<iconify-icon className="text-[#1C3764] group-hover:text-white text-3xl transition-colors" icon="solar:tree-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-stone-900 group-hover:text-white tracking-tight mb-2 transition-colors">Forrajera y Semillas</h3>
<p className="text-sm font-light text-stone-500 group-hover:text-stone-100 transition-colors">Ventilación y conservación óptima.</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white overflow-hidden" id="impresion">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative w-full aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden flex reveal bg-stone-100">

<div className="w-1/2 h-full relative img-hover-zoom overflow-hidden border-r-4 border-white z-10">
<img alt="Costal genérico blanco" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 opacity-60 mix-blend-luminosity" src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-stone-100/20"></div>
<div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl text-xs font-semibold uppercase tracking-widest text-stone-400">Antes</div>
</div>

<div className="w-1/2 h-full relative img-hover-zoom overflow-hidden">
<img alt="Costal impreso a color" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1605371924599-2d0365da26f5?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C3764]/40 to-transparent"></div>
<div className="absolute bottom-6 right-6 px-4 py-2 bg-[#0ea5e9]/90 backdrop-blur-sm rounded-xl text-xs font-semibold uppercase tracking-widest text-white shadow-lg">Después</div>
</div>
</div>

<div className="reveal delay-200">
<span className="text-xs font-semibold tracking-[0.2em] text-[#0ea5e9] uppercase mb-4 block">Estudio Creativo Industrial</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#1C3764] mb-6">Tu marca no se deforma.<br/>Vestimos tu producto.</h2>
<p className="text-xl text-stone-500 font-light mb-10 leading-relaxed">
                        Transformamos un empaque funcional en una herramienta de marketing B2B. Elevamos la percepción de tu producto desde el almacén hasta el punto de venta final.
                    </p>
<ul className="space-y-5 mb-10">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-[#0ea5e9] text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-base text-stone-700 font-light leading-relaxed">Impresión de alta definición optimizada para tejido de rafia.</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-[#0ea5e9] text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-base text-stone-700 font-light leading-relaxed">Adaptamos tu diseño existente o lo creamos desde cero.</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-[#0ea5e9] text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-base text-stone-700 font-light leading-relaxed">Tintas formuladas de alta adherencia y resistencia a rayos UV.</span>
</li>
</ul>
<button className="px-8 py-4 bg-white border border-[#1C3764]/20 text-[#1C3764] rounded-xl font-medium hover:bg-stone-50 transition-all flex items-center gap-3">
<iconify-icon className="text-xl" icon="solar:gallery-linear"></iconify-icon>
                        Ver galería de impresiones
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50 border-t border-stone-200" id="catalogo">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl font-medium tracking-tight text-[#1C3764] mb-4">Catálogo de Abasto</h2>
<p className="text-lg text-stone-500 font-light max-w-2xl mx-auto">Dimensiones y configuraciones estandarizadas para líneas de producción eficientes.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white rounded-[2.5rem] p-10 lg:p-14 border border-stone-100 shadow-xl shadow-stone-200/40 reveal">
<div className="w-16 h-16 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-8">
<iconify-icon className="text-3xl text-[#1C3764]" icon="solar:box-linear"></iconify-icon>
</div>
<h3 className="text-3xl font-medium text-[#1C3764] tracking-tight mb-4">Costales de Rafia</h3>
<p className="text-stone-500 font-light mb-8">Tejido circular de polipropileno. Disponibles en blancos, colores sólidos y formatos transparentes.</p>
<div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
<span className="text-xs font-semibold text-stone-400 uppercase tracking-widest block mb-4">Medidas Estándar Frecuentes (cm)</span>
<div className="grid grid-cols-2 gap-y-4 gap-x-8">
<div className="flex items-center gap-3 text-stone-700 text-sm font-medium">
<span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span> 45 x 75
                            </div>
<div className="flex items-center gap-3 text-stone-700 text-sm font-medium">
<span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span> 50 x 90
                            </div>
<div className="flex items-center gap-3 text-stone-700 text-sm font-medium">
<span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span> 54 x 100
                            </div>
<div className="flex items-center gap-3 text-stone-700 text-sm font-medium">
<span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span> 60 x 100
                            </div>
</div>
</div>
</div>

<div className="bg-[#1C3764] rounded-[2.5rem] p-10 lg:p-14 shadow-xl shadow-[#1C3764]/20 reveal delay-100 relative overflow-hidden">

<div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
<div className="relative z-10">
<div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-sm">
<iconify-icon className="text-3xl text-white" icon="solar:archive-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-3xl font-medium text-white tracking-tight mb-4">Stretch Film / Playo</h3>
<p className="text-stone-300 font-light mb-8">Venta a mayoreo por tarimas. Alta retención de carga y máxima elongación para seguridad en transporte.</p>
<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
<div className="grid grid-cols-2 gap-8">
<div>
<span className="text-xs font-medium text-stone-400 uppercase tracking-widest block mb-2">Calibres</span>
<span className="text-xl font-normal text-white">50 y 60</span>
</div>
<div>
<span className="text-xs font-medium text-stone-400 uppercase tracking-widest block mb-2">Ancho</span>
<span className="text-xl font-normal text-white">18 Pulgadas</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#1C3764] relative overflow-hidden" id="logistica">

<div className="absolute inset-0 bg-woven opacity-40 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C3764] to-transparent opacity-80"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 reveal">Ingeniería en empaque. <br/>Potencia en logística.</h2>
<p className="text-xl text-[#0ea5e9] font-light mb-20 max-w-2xl mx-auto reveal">Capacidad de respuesta para operaciones ininterrumpidas a nivel industrial.</p>
<div className="grid md:grid-cols-3 gap-12 lg:gap-8">

<div className="flex flex-col items-center reveal">
<div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
<iconify-icon className="text-4xl text-white" icon="solar:routing-linear"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-white tracking-tight mb-3">Entregas a Nivel Nacional</h4>
<p className="text-stone-400 font-light text-sm max-w-xs text-center">Rutas optimizadas para asegurar que tu insumo llegue a cualquier planta del país.</p>
</div>

<div className="flex flex-col items-center reveal delay-100">
<div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
<iconify-icon className="text-4xl text-white" icon="solar:box-linear"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-white tracking-tight mb-3">Gran Capacidad de Costales</h4>
<p className="text-stone-400 font-light text-sm max-w-xs text-center">Producción escalable para absorber picos de demanda estacional sin mermar la calidad.</p>
</div>

<div className="flex flex-col items-center reveal delay-200">
<div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
<iconify-icon className="text-4xl text-white" icon="solar:archive-minimalistic-linear"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-white tracking-tight mb-3">Stock Garantizado</h4>
<p className="text-stone-400 font-light text-sm max-w-xs text-center">Inventario de respaldo para distribuidores y contratos a largo plazo.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#13284B]">
<div className="max-w-4xl mx-auto text-center reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-tight">
                ¿Listo para asegurar tu abasto y mejorar la presentación de tu producto?
            </h2>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
<button className="w-full sm:w-auto px-10 py-5 bg-[#0ea5e9] text-white rounded-2xl font-medium hover:bg-sky-400 transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#0ea5e9]/20 uppercase tracking-wider text-sm">
                    Cotizar por Volumen
                </button>
<a className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/30 text-white rounded-2xl font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-3 uppercase tracking-wider text-sm" href="https://wa.me/5211234567890?text=Hola,%20vengo%20del%20sitio%20web%20y%20busco%20cotizar%20volumen%20de%20costales..." target="_blank">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                    Contactar por WhatsApp
                </a>
</div>
</div>
</section>

<footer className="bg-[#1C3764] border-t border-white/10 pt-20 pb-12 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
<div className="lg:col-span-2">
<span className="text-2xl font-medium tracking-tight text-white uppercase mb-8 block">Megacostales</span>
<p className="text-stone-400 text-sm font-light leading-relaxed max-w-sm mb-8">
                        Soluciones B2B de empaque industrial. Protegemos el valor de tu cadena de suministro con ingeniería, diseño y abasto garantizado.
                    </p>

<div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
<iconify-icon className="text-2xl text-[#0ea5e9]" icon="solar:routing-linear"></iconify-icon>
<div className="text-left">
<span className="block text-xs text-stone-400 uppercase tracking-widest font-medium">Logística</span>
<span className="block text-sm font-medium text-white tracking-tight">Entregas a Nivel Nacional</span>
</div>
</div>
</div>
<div>
<h4 className="text-xs font-medium text-white uppercase tracking-widest mb-6">Productos</h4>
<ul className="space-y-4 text-sm text-stone-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">Costales de Rafia</a></li>
<li><a className="hover:text-white transition-colors" href="#">Stretch Film / Playo</a></li>
<li><a className="hover:text-white transition-colors" href="#">Impresión Personalizada</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white uppercase tracking-widest mb-6">Industrias</h4>
<ul className="space-y-4 text-sm text-stone-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">Alimento Balanceado</a></li>
<li><a className="hover:text-white transition-colors" href="#">Fertilizantes</a></li>
<li><a className="hover:text-white transition-colors" href="#">Construcción</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white uppercase tracking-widest mb-6">Legal y Contacto</h4>
<ul className="space-y-4 text-sm text-stone-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">Aviso de Privacidad</a></li>
<li><a className="hover:text-white transition-colors" href="#">Términos de Logística/Entregas</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-500 uppercase tracking-widest">© 2026 Megacostales. Todos los derechos reservados.</p>
</div>
</div>
</footer>

<a aria-label="Contactar por WhatsApp" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group" href="https://wa.me/5211234567890?text=Hola,%20vengo%20del%20sitio%20web%20y%20busco%20cotizar%20volumen%20de%20costales..." target="_blank">
<iconify-icon className="text-3xl" icon="solar:phone-calling-linear"></iconify-icon>

<span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-stone-800 text-xs font-medium rounded-xl shadow-xl opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap">
            Cotiza por WhatsApp
        </span>
</a>


    </>
  );
}
