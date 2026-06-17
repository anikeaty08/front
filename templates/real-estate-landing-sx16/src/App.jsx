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



        // Init Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Navbar Scroll Logic
        const nav = document.getElementById('main-nav');
        const logoText = document.getElementById('logo-text');
        const logoBg = document.getElementById('logo-bg');
        const navLinks = document.querySelectorAll('.nav-link');
        const navCta = document.getElementById('nav-cta');
        const mobileBtn = document.getElementById('mobile-menu-btn');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Scrolled State (Glass / White)
                nav.classList.remove('bg-transparent', 'border-transparent');
                nav.classList.add('bg-white/80', 'backdrop-blur-xl', 'border-white/20', 'shadow-sm');
                
                logoText.classList.remove('text-white');
                logoText.classList.add('text-slate-900');
                
                logoBg.classList.remove('bg-white/10', 'text-white', 'border-white/20');
                logoBg.classList.add('bg-[#2E42D5]', 'text-white', 'border-transparent');

                navLinks.forEach(link => {
                    link.classList.remove('text-white', 'text-white/80');
                    link.classList.add('text-slate-600');
                });

                navCta.classList.remove('bg-white', 'text-slate-900');
                navCta.classList.add('bg-[#2E42D5]', 'text-white');

                mobileBtn.classList.remove('text-white');
                mobileBtn.classList.add('text-slate-900');

            } else {
                // Hero State (Transparent / White Text)
                nav.classList.add('bg-transparent', 'border-transparent');
                nav.classList.remove('bg-white/80', 'backdrop-blur-xl', 'border-white/20', 'shadow-sm');
                
                logoText.classList.add('text-white');
                logoText.classList.remove('text-slate-900');

                logoBg.classList.add('bg-white/10', 'text-white', 'border-white/20');
                logoBg.classList.remove('bg-[#2E42D5]', 'text-white', 'border-transparent');

                navLinks.forEach(link => {
                    link.classList.add('text-white/80');
                    link.classList.remove('text-slate-600');
                });
                // First link is "Home", make it full white
                navLinks[0].classList.remove('text-white/80');
                navLinks[0].classList.add('text-white');

                navCta.classList.add('bg-white', 'text-slate-900');
                navCta.classList.remove('bg-[#2E42D5]', 'text-white');

                mobileBtn.classList.add('text-white');
                mobileBtn.classList.remove('text-slate-900');
            }
        });

        // Carousel Scroll Logic
        function scrollCarousel(btn, direction) {
            // Find the sibling container with class 'carousel-scroll'
            const container = btn.parentElement.querySelector('.carousel-scroll');
            if (container) {
                const scrollAmount = container.clientWidth;
                container.scrollBy({
                    left: direction * scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent border-b border-transparent" id="main-nav">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-24">

<div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
<div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-white transition-all duration-300" id="logo-bg">
<i className="w-5 h-5" data-lucide="home"></i>
</div>
<span className="text-2xl font-semibold tracking-tight text-white nav-text-transition" id="logo-text">KELLY</span>
</div>

<div className="hidden md:flex space-x-10 items-center">
<a className="text-base font-medium text-white hover:text-[#2E42D5] transition-colors nav-link" href="#">Inicio</a>
<a className="text-base font-medium text-white/80 hover:text-[#2E42D5] transition-colors nav-link" href="#about">Nosotros</a>
<a className="text-base font-medium text-white/80 hover:text-[#2E42D5] transition-colors nav-link" href="#properties">Propiedades</a>
<a className="text-base font-medium text-white/80 hover:text-[#2E42D5] transition-colors nav-link" href="#services">Servicios</a>
</div>

<div className="hidden md:flex gap-4">
<a className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-all duration-300 shadow-lg shadow-black/5" href="#contact" id="nav-cta">
                        Agendar cita
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-white focus:outline-none transition-colors" id="mobile-menu-btn">
<i className="w-8 h-8" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Home" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-slate-900/30"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20">
<div className="text-center max-w-4xl mx-auto">
<span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6 tracking-wide">
                    Experiencia Inmobiliaria Premium
                </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-8 drop-shadow-lg leading-[1.1]">
                    Curaduría de <br/> espacios únicos
                </h1>
<p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                    Redefinimos el estándar de vida conectando personas extraordinarias con propiedades excepcionales.
                </p>

<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-2 shadow-2xl flex flex-col md:flex-row gap-2 max-w-3xl mx-auto">
<div className="flex-1 relative">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" data-lucide="search"></i>
<input className="w-full pl-12 pr-4 py-4 bg-transparent text-white placeholder-white/60 focus:outline-none text-lg font-medium rounded-2xl hover:bg-white/5 transition-colors" placeholder="Ubicación, zona o desarrollo..." type="text"/>
</div>
<div className="h-px md:h-auto md:w-px bg-white/20 my-2 md:my-0"></div>
<button className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 shadow-xl shadow-black/10">
                        Buscar
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
<i className="w-8 h-8" data-lucide="chevron-down"></i>
</div>
</section>

<section className="py-24 bg-slate-50" id="properties">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-[#2E42D5] text-sm font-semibold uppercase tracking-wider mb-3">Colección Privada</h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Propiedades destacadas</h3>
</div>
<a className="group flex items-center gap-2 text-slate-600 hover:text-[#2E42D5] font-medium transition-colors" href="#">
                    Ver inventario completo 
                    <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col">

<div className="relative aspect-[4/3] bg-slate-200 group/carousel">
<div className="carousel-scroll flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full h-full scroll-smooth">

<img className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<img className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<img className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-27b88e31e6e8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<img className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<img className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="snap-center min-w-full h-full relative">
<img className="w-full h-full object-cover filter brightness-50" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute inset-0 m-auto w-max h-max bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full font-medium hover:bg-white/30 transition-all">
                                    Ver 12 fotos más
                                </button>
</div>
</div>

<div className="absolute top-4 left-4 flex gap-2 pointer-events-none">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">En venta</span>
</div>

<button className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full items-center justify-center shadow-lg text-slate-900 hidden group-hover/carousel:flex hover:bg-white transition-all opacity-0 group-hover/carousel:opacity-100 z-10" onclick="scrollCarousel(this, -1)">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full items-center justify-center shadow-lg text-slate-900 hidden group-hover/carousel:flex hover:bg-white transition-all opacity-0 group-hover/carousel:opacity-100 z-10" onclick="scrollCarousel(this, 1)">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="mb-4">
<div className="flex justify-between items-start">
<div>
<h4 className="text-xl font-semibold text-slate-900 tracking-tight group-hover:text-[#2E42D5] transition-colors">Casa Las Cumbres</h4>
<p className="text-slate-500 text-sm mt-1">Lomas de Chapultepec</p>
</div>
<p className="text-xl font-bold text-[#2E42D5] tracking-tight">$18.5 MDP</p>
</div>
</div>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-slate-500 text-sm font-medium">
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="bed"></i> 3 Hab</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="bath"></i> 3.5 Baños</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="maximize"></i> 450m²</span>
</div>
</div>
</article>

<article className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col">
<div className="relative aspect-[4/3] bg-slate-200 group/carousel">
<div className="carousel-scroll flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full h-full scroll-smooth">
<img className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="snap-center min-w-full h-full relative">
<img className="w-full h-full object-cover filter brightness-50" src="https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute inset-0 m-auto w-max h-max bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full font-medium hover:bg-white/30 transition-all">Ver todas</button>
</div>
</div>
<div className="absolute top-4 left-4 flex gap-2 pointer-events-none">
<span className="bg-[#2E42D5] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg shadow-[#2E42D5]/30">Destacado</span>
</div>
<button className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full items-center justify-center shadow-lg text-slate-900 hidden group-hover/carousel:flex hover:bg-white transition-all opacity-0 group-hover/carousel:opacity-100 z-10" onclick="scrollCarousel(this, -1)"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full items-center justify-center shadow-lg text-slate-900 hidden group-hover/carousel:flex hover:bg-white transition-all opacity-0 group-hover/carousel:opacity-100 z-10" onclick="scrollCarousel(this, 1)"><i className="w-5 h-5" data-lucide="chevron-right"></i></button>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="mb-4">
<div className="flex justify-between items-start">
<div>
<h4 className="text-xl font-semibold text-slate-900 tracking-tight group-hover:text-[#2E42D5] transition-colors">Penthouse Marina</h4>
<p className="text-slate-500 text-sm mt-1">Puerto Vallarta</p>
</div>
<p className="text-xl font-bold text-[#2E42D5] tracking-tight">$24.0 MDP</p>
</div>
</div>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-slate-500 text-sm font-medium">
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="bed"></i> 4 Hab</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="bath"></i> 4.5 Baños</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="maximize"></i> 520m²</span>
</div>
</div>
</article>

<article className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col">
<div className="relative aspect-[4/3] bg-slate-200 group/carousel">
<div className="carousel-scroll flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full h-full scroll-smooth">
<img className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1484154218962-a1c00207099b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="snap-center min-w-full h-full relative">
<img className="w-full h-full object-cover filter brightness-50" src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute inset-0 m-auto w-max h-max bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full font-medium hover:bg-white/30 transition-all">Ver todas</button>
</div>
</div>
<div className="absolute top-4 left-4 flex gap-2 pointer-events-none">
<span className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">Renta</span>
</div>
<button className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full items-center justify-center shadow-lg text-slate-900 hidden group-hover/carousel:flex hover:bg-white transition-all opacity-0 group-hover/carousel:opacity-100 z-10" onclick="scrollCarousel(this, -1)"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full items-center justify-center shadow-lg text-slate-900 hidden group-hover/carousel:flex hover:bg-white transition-all opacity-0 group-hover/carousel:opacity-100 z-10" onclick="scrollCarousel(this, 1)"><i className="w-5 h-5" data-lucide="chevron-right"></i></button>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="mb-4">
<div className="flex justify-between items-start">
<div>
<h4 className="text-xl font-semibold text-slate-900 tracking-tight group-hover:text-[#2E42D5] transition-colors">Loft Polanco</h4>
<p className="text-slate-500 text-sm mt-1">Polanco V Sección</p>
</div>
<p className="text-xl font-bold text-[#2E42D5] tracking-tight">$45,000 <span className="text-xs font-normal text-slate-400">/mes</span></p>
</div>
</div>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-slate-500 text-sm font-medium">
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="bed"></i> 1 Hab</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="bath"></i> 1.5 Baños</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="maximize"></i> 95m²</span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-[#2E42D5] text-sm font-semibold uppercase tracking-wider mb-3">Nuestra Filosofía</h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Más que una agencia, <br/> somos tus socios.</h3>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        Entendemos que una propiedad no es solo ladrillos; es patrimonio, es futuro y es estilo de vida. Utilizamos tecnología de punta y datos de mercado para asegurar el máximo valor en cada transacción.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-[#EEF2FF] text-[#2E42D5] flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900">Seguridad Jurídica Total</h4>
<p className="text-slate-500 mt-1">Revisión exhaustiva de antecedentes de propiedad.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-[#EEF2FF] text-[#2E42D5] flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6" data-lucide="bar-chart-2"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900">Valuación Precisa</h4>
<p className="text-slate-500 mt-1">Análisis comparativo de mercado en tiempo real.</p>
</div>
</li>
</ul>
</div>
<div className="relative">
<div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
<img alt="Interior Design" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -top-10 -right-10 w-64 h-64 bg-[#2E42D5]/10 rounded-full blur-3xl -z-0"></div>
<div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-200 rounded-full blur-3xl -z-0"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#EEF2FF]/50 relative overflow-hidden" id="services">
<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h3 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">Servicios Integrales</h3>
<p className="text-lg text-slate-500">Cubrimos cada ángulo de tu necesidad inmobiliaria con expertos dedicados en cada área.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-16 h-16 bg-[#2E42D5] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-[#2E42D5]/20">
<i className="w-8 h-8" data-lucide="key"></i>
</div>
<h4 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Comercialización</h4>
<p className="text-slate-500 leading-relaxed mb-8">
                        Estrategias de marketing digital de alto impacto para vender o rentar tu propiedad en tiempo récord.
                    </p>
<a className="inline-flex items-center text-[#2E42D5] font-semibold hover:gap-2 transition-all" href="#">
                        Más información <i className="w-4 h-4 ml-1" data-lucide="chevron-right"></i>
</a>
</div>

<div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-slate-900/20">
<i className="w-8 h-8" data-lucide="search"></i>
</div>
<h4 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Personal Shopper</h4>
<p className="text-slate-500 leading-relaxed mb-8">
                        Buscamos por ti. Cuéntanos tus sueños y necesidades, nosotros encontramos las opciones que encajan.
                    </p>
<a className="inline-flex items-center text-slate-900 font-semibold hover:gap-2 transition-all" href="#">
                        Iniciar búsqueda <i className="w-4 h-4 ml-1" data-lucide="chevron-right"></i>
</a>
</div>

<div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-900 mb-8">
<i className="w-8 h-8" data-lucide="file-check"></i>
</div>
<h4 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Gestión Legal</h4>
<p className="text-slate-500 leading-relaxed mb-8">
                        Acompañamiento jurídico desde la promesa de compra-venta hasta la escrituración final.
                    </p>
<a className="inline-flex items-center text-slate-500 font-semibold hover:text-slate-900 hover:gap-2 transition-all" href="#">
                        Consultar abogado <i className="w-4 h-4 ml-1" data-lucide="chevron-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8 bg-white">
<div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative isolate">

<div className="absolute inset-0">
<img className="w-full h-full object-cover opacity-10 mix-blend-overlay" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#2E42D5] opacity-20 rounded-full blur-3xl"></div>
<div className="relative z-10 py-24 px-8 md:px-24 text-center">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-8">
                    ¿Listo para mudarte?
                </h2>
<p className="text-xl text-slate-300 font-light max-w-2xl mx-auto mb-10">
                    Agenda una llamada de 15 minutos con nuestros asesores senior y recibe un análisis de mercado gratuito para tu zona.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#2E42D5] bg-white rounded-full hover:bg-slate-50 transition-all shadow-lg hover:shadow-white/20 hover:-translate-y-1" href="#">
                        Hablar con un asesor
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-all" href="#">
                        Ver propiedades
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-12">

<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-slate-900">
<i className="w-5 h-5" data-lucide="home"></i>
</div>
<span className="text-2xl font-semibold tracking-tight text-white">KELLY</span>
</div>
<p className="text-sm leading-relaxed mb-6">
                        Elevando el estándar inmobiliario en México con integridad, innovación y resultados excepcionales.
                    </p>
<div className="flex space-x-4">
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#2E42D5] hover:text-white transition-all" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#2E42D5] hover:text-white transition-all" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#2E42D5] hover:text-white transition-all" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>

<div>
<h4 className="text-white font-medium text-base mb-6">Explorar</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Propiedades en Venta</a></li>
<li><a className="hover:text-white transition-colors" href="#">Propiedades en Renta</a></li>
<li><a className="hover:text-white transition-colors" href="#">Nuevos Desarrollos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terrenos de Inversión</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium text-base mb-6">Compañía</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Sobre Nosotros</a></li>
<li><a className="hover:text-white transition-colors" href="#">Únete al equipo</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog Inmobiliario</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contacto</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium text-base mb-6">Contacto</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#2E42D5] mt-0.5" data-lucide="map-pin"></i>
                            Av. Camarón Sábalo 2002,<br/>Mazatlán, Sinaloa, MX
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#2E42D5]" data-lucide="phone"></i>
                            +52 (669) 123 4567
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#2E42D5]" data-lucide="mail"></i>
                            hola@kellyestate.mx
                        </li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2023 Kelly Estate. Todos los derechos reservados.</p>
<div className="flex space-x-6">
<a className="hover:text-white" href="#">Aviso de Privacidad</a>
<a className="hover:text-white" href="#">Términos y Condiciones</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
