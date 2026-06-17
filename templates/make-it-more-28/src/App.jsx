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

        document.getElementById('mobileMenuBtn').addEventListener('click', function() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    document.getElementById('mobileMenu').classList.add('hidden');
                }
            });
        });

        // Intersection Observer for fade-in animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card-hover').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
            observer.observe(el);
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
      

<div className="bg-gradient-to-r from-pink-50/80 via-white to-pink-50/80 py-2.5 px-4 border-b border-pink-100/40">
<div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-gray-400 tracking-wide">
<div className="flex items-center gap-5">
<span className="flex items-center gap-1.5 hover:text-pink-500 transition-colors cursor-pointer"><i className="w-3 h-3" data-lucide="phone" style={{strokeWidth: '1.5'}}></i> +56 9 1234 5678</span>
<span className="hidden sm:flex items-center gap-1.5 hover:text-pink-500 transition-colors cursor-pointer"><i className="w-3 h-3" data-lucide="mail" style={{strokeWidth: '1.5'}}></i> contacto@clinicadentalns.cl</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-pink-500 transition-all hover:scale-110" href="#"><i className="w-3.5 h-3.5" data-lucide="instagram" style={{strokeWidth: '1.5'}}></i></a>
<a className="hover:text-pink-500 transition-all hover:scale-110" href="#"><i className="w-3.5 h-3.5" data-lucide="facebook" style={{strokeWidth: '1.5'}}></i></a>
</div>
</div>
</div>

<header className="relative py-10 md:py-14 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-pink-50/40 via-white to-white"></div>
<div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-[0.03] float-slow" style={{background: 'radial-gradient(circle, #C27088, transparent 70%)'}}></div>
<div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-[0.04] float-slower" style={{background: 'radial-gradient(circle, #D4A0B0, transparent 70%)'}}></div>
<div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center px-4">

<div className="flex flex-col items-center">
<div className="relative">

<svg className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 opacity-20" fill="none" viewbox="0 0 40 40">
<path d="M14 10 C14 7, 17 4, 20 4 C23 4, 26 7, 26 10 C27.5 7, 31 6, 31 10 C31 17, 27 24, 25 30 C24 32.5, 22.5 32.5, 22 30 C21.5 27, 20 26, 18 30 C17.5 32.5, 16 32.5, 15 30 C13 24, 9 17, 9 10 C9 6, 12.5 7, 14 10Z" fill="none" stroke="#C27088" strokeWidth="1"></path>
</svg>
<span className="font-script text-5xl md:text-7xl tracking-tight" style={{color: '#8B6F7B', textShadow: '0 2px 20px rgba(194,112,136,0.1)'}}>Natural Smile</span>
</div>

<div className="flex items-center gap-3 mt-4">
<div className="w-12 h-px" style={{background: 'linear-gradient(90deg, transparent, #D4A0B0)'}}></div>
<svg className="w-4 h-4 opacity-40" fill="none" viewbox="0 0 40 40">
<path d="M14 10 C14 7, 17 4, 20 4 C23 4, 26 7, 26 10 C27.5 7, 31 6, 31 10 C31 17, 27 24, 25 30 C24 32.5, 22.5 32.5, 22 30 C21.5 27, 20 26, 18 30 C17.5 32.5, 16 32.5, 15 30 C13 24, 9 17, 9 10 C9 6, 12.5 7, 14 10Z" fill="none" stroke="#C27088" strokeWidth="1.2"></path>
</svg>
<div className="w-12 h-px" style={{background: 'linear-gradient(90deg, #D4A0B0, transparent)'}}></div>
</div>
<span className="text-xs tracking-[0.35em] uppercase mt-3 font-light" style={{color: '#C27088'}}>Clínica Dental</span>
</div>
</div>
</header>

<nav className="glass border-b border-pink-100/30 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-center justify-between">
<button className="md:hidden p-3" id="mobileMenuBtn">
<i className="w-5 h-5 text-gray-500" data-lucide="menu" style={{strokeWidth: '1.5'}}></i>
</button>
<ul className="hidden md:flex items-center justify-center w-full gap-0">
<li><a className="nav-link block px-7 py-4 text-xs font-medium tracking-[0.15em] uppercase text-gray-500 hover:text-pink-600 transition-all" href="#inicio">Inicio</a></li>
<li><a className="nav-link block px-7 py-4 text-xs font-medium tracking-[0.15em] uppercase text-gray-500 hover:text-pink-600 transition-all" href="#especialidades">Especialidades</a></li>
<li><a className="nav-link block px-7 py-4 text-xs font-medium tracking-[0.15em] uppercase text-gray-500 hover:text-pink-600 transition-all" href="#testimonios">Testimonios</a></li>
<li><a className="nav-link block px-7 py-4 text-xs font-medium tracking-[0.15em] uppercase text-gray-500 hover:text-pink-600 transition-all" href="#equipo">Equipo</a></li>
<li><a className="nav-link block px-7 py-4 text-xs font-medium tracking-[0.15em] uppercase text-gray-500 hover:text-pink-600 transition-all" href="#contacto">Contacto</a></li>
</ul>
<a className="md:hidden text-xs font-medium py-2 px-5 rounded-full text-white tracking-wider btn-glamour" href="#contacto" style={{background: 'linear-gradient(135deg, #C27088, #D4A0B0)'}}>Agendar</a>
</div>
</div>
<div className="hidden md:hidden bg-white/95 backdrop-blur-xl border-t border-pink-100/30" id="mobileMenu">
<a className="block px-6 py-3.5 text-xs tracking-[0.15em] uppercase text-gray-500 hover:bg-pink-50/50 hover:text-pink-600 transition-all" href="#inicio">Inicio</a>
<a className="block px-6 py-3.5 text-xs tracking-[0.15em] uppercase text-gray-500 hover:bg-pink-50/50 hover:text-pink-600 transition-all" href="#especialidades">Especialidades</a>
<a className="block px-6 py-3.5 text-xs tracking-[0.15em] uppercase text-gray-500 hover:bg-pink-50/50 hover:text-pink-600 transition-all" href="#testimonios">Testimonios</a>
<a className="block px-6 py-3.5 text-xs tracking-[0.15em] uppercase text-gray-500 hover:bg-pink-50/50 hover:text-pink-600 transition-all" href="#equipo">Equipo</a>
<a className="block px-6 py-3.5 text-xs tracking-[0.15em] uppercase text-gray-500 hover:bg-pink-50/50 hover:text-pink-600 transition-all" href="#contacto">Contacto</a>
</div>
</nav>

<section className="relative overflow-hidden" id="inicio">
<div className="relative min-h-[70vh] md:min-h-[80vh] bg-white">
<div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&amp'}}></div>
<div className="absolute inset-0" style={{background: 'linear-gradient(115deg, rgba(253,242,244,0.97) 0%, rgba(253,242,244,0.85) 35%, rgba(253,242,244,0.4) 60%, rgba(253,242,244,0.15) 100%)'}}></div>

<div className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-[0.05] float-slow" style={{background: 'radial-gradient(circle, #C27088, transparent 70%)'}}></div>
<div className="absolute bottom-20 left-20 w-48 h-48 rounded-full opacity-[0.04] float-slower" style={{background: 'radial-gradient(circle, #D4A0B0, transparent 70%)'}}></div>
<div className="relative max-w-7xl mx-auto px-6 h-full flex items-center min-h-[70vh] md:min-h-[80vh]">
<div className="max-w-xl fade-in-up">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-px" style={{background: 'linear-gradient(90deg, #C27088, transparent)'}}></div>
<span className="text-xs tracking-[0.3em] uppercase font-light" style={{color: '#C27088'}}>Bienvenidos</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight leading-[1.1]" style={{color: '#5A3D4D'}}>
                        Tu sonrisa,
                        <br/>
<span className="font-script text-5xl md:text-7xl lg:text-8xl" style={{color: '#C27088', fontWeight: '400'}}>nuestra pasión</span>
</h1>
<p className="mt-6 text-sm md:text-base text-gray-400 leading-relaxed max-w-md font-light">
                        En Natural Smile nos dedicamos a cuidar tu salud bucal con los más altos estándares de calidad y un trato cercano y profesional.
                    </p>
<div className="mt-10 flex flex-wrap gap-4">
<a className="btn-glamour inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-white text-xs font-medium tracking-[0.15em] uppercase shadow-lg" href="#contacto" style={{background: 'linear-gradient(135deg, #C27088, #B8607A)'}}>
                            Agenda tu hora
                            <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-medium tracking-[0.15em] uppercase border text-gray-500 hover:bg-pink-50/50 transition-all duration-500" href="#especialidades" style={{borderColor: 'rgba(194,112,136,0.25)'}}>
                            Ver especialidades
                        </a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
</div>
</section>

<section className="bg-white relative">
<div className="glow-line"></div>
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="group">
<div className="text-3xl md:text-4xl font-serif font-light tracking-tight transition-colors" style={{color: '#C27088'}}>+10</div>
<div className="text-xs text-gray-400 mt-2 tracking-wider uppercase font-light">Años de experiencia</div>
</div>
<div className="group">
<div className="text-3xl md:text-4xl font-serif font-light tracking-tight transition-colors" style={{color: '#C27088'}}>+5000</div>
<div className="text-xs text-gray-400 mt-2 tracking-wider uppercase font-light">Pacientes atendidos</div>
</div>
<div className="group">
<div className="text-3xl md:text-4xl font-serif font-light tracking-tight transition-colors" style={{color: '#C27088'}}>8</div>
<div className="text-xs text-gray-400 mt-2 tracking-wider uppercase font-light">Especialidades</div>
</div>
<div className="group">
<div className="text-3xl md:text-4xl font-serif font-light tracking-tight transition-colors" style={{color: '#C27088'}}>100%</div>
<div className="text-xs text-gray-400 mt-2 tracking-wider uppercase font-light">Compromiso</div>
</div>
</div>
<div className="glow-line"></div>
</section>

<section className="py-20 md:py-28 relative overflow-hidden" id="especialidades">
<div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50/20 to-white"></div>
<div className="absolute top-40 -right-20 w-80 h-80 rounded-full opacity-[0.03]" style={{background: 'radial-gradient(circle, #C27088, transparent 70%)'}}></div>
<div className="relative max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="flex items-center justify-center gap-3 mb-4">
<div className="w-12 h-px" style={{background: 'linear-gradient(90deg, transparent, #D4A0B0)'}}></div>
<span className="text-xs uppercase tracking-[0.3em] font-light" style={{color: '#C27088'}}>Nuestros servicios</span>
<div className="w-12 h-px" style={{background: 'linear-gradient(90deg, #D4A0B0, transparent)'}}></div>
</div>
<h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight" style={{color: '#5A3D4D'}}>Especialidades</h2>
<p className="mt-4 text-sm text-gray-400 max-w-lg mx-auto font-light leading-relaxed">Contamos con un equipo de profesionales altamente capacitados en diversas áreas de la odontología.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="card-hover gradient-border bg-white rounded-2xl p-7 cursor-pointer group">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<i className="w-5 h-5" data-lucide="smile" style={{color: '#C27088', strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-serif font-normal tracking-tight" style={{color: '#5A3D4D'}}>Ortodoncia</h3>
<p className="mt-2 text-xs text-gray-400 leading-relaxed font-light">Corregimos la posición de tus dientes para una sonrisa perfecta y funcional.</p>
</div>

<div className="card-hover gradient-border bg-white rounded-2xl p-7 cursor-pointer group">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<i className="w-5 h-5" data-lucide="sparkles" style={{color: '#C27088', strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-serif font-normal tracking-tight" style={{color: '#5A3D4D'}}>Estética Dental</h3>
<p className="mt-2 text-xs text-gray-400 leading-relaxed font-light">Blanqueamiento, carillas y diseño de sonrisa para lucir radiante.</p>
</div>

<div className="card-hover gradient-border bg-white rounded-2xl p-7 cursor-pointer group">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<i className="w-5 h-5" data-lucide="shield-check" style={{color: '#C27088', strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-serif font-normal tracking-tight" style={{color: '#5A3D4D'}}>Implantología</h3>
<p className="mt-2 text-xs text-gray-400 leading-relaxed font-light">Reemplazamos piezas dentales perdidas con implantes de última generación.</p>
</div>

<div className="card-hover gradient-border bg-white rounded-2xl p-7 cursor-pointer group">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<i className="w-5 h-5" data-lucide="heart-pulse" style={{color: '#C27088', strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-serif font-normal tracking-tight" style={{color: '#5A3D4D'}}>Endodoncia</h3>
<p className="mt-2 text-xs text-gray-400 leading-relaxed font-light">Tratamiento de conducto para salvar tus dientes naturales.</p>
</div>

<div className="card-hover gradient-border bg-white rounded-2xl p-7 cursor-pointer group">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<i className="w-5 h-5" data-lucide="baby" style={{color: '#C27088', strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-serif font-normal tracking-tight" style={{color: '#5A3D4D'}}>Odontopediatría</h3>
<p className="mt-2 text-xs text-gray-400 leading-relaxed font-light">Cuidado dental especializado para los más pequeños del hogar.</p>
</div>

<div className="card-hover gradient-border bg-white rounded-2xl p-7 cursor-pointer group">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<i className="w-5 h-5" data-lucide="scan" style={{color: '#C27088', strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-serif font-normal tracking-tight" style={{color: '#5A3D4D'}}>Periodoncia</h3>
<p className="mt-2 text-xs text-gray-400 leading-relaxed font-light">Tratamiento de encías y tejidos de soporte dental.</p>
</div>

<div className="card-hover gradient-border bg-white rounded-2xl p-7 cursor-pointer group">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<i className="w-5 h-5" data-lucide="stethoscope" style={{color: '#C27088', strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-serif font-normal tracking-tight" style={{color: '#5A3D4D'}}>Cirugía Oral</h3>
<p className="mt-2 text-xs text-gray-400 leading-relaxed font-light">Extracciones, cirugías de muelas del juicio y más.</p>
</div>

<div className="card-hover gradient-border bg-white rounded-2xl p-7 cursor-pointer group">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<i className="w-5 h-5" data-lucide="brush" style={{color: '#C27088', strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-serif font-normal tracking-tight" style={{color: '#5A3D4D'}}>Rehabilitación Oral</h3>
<p className="mt-2 text-xs text-gray-400 leading-relaxed font-light">Restauramos la funcionalidad y estética de tu sonrisa.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 bg-white relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px" style={{background: 'linear-gradient(90deg, transparent, rgba(194,112,136,0.15), transparent)'}}></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="img-glamour rounded-3xl overflow-hidden shadow-2xl shadow-pink-100/40">
<img alt="Clínica dental" className="w-full h-80 md:h-[480px] object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&amp;q=80"/>
</div>

<div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-3xl opacity-10" style={{background: 'linear-gradient(135deg, #C27088, #D4A0B0)'}}></div>
<div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl opacity-[0.06]" style={{background: 'linear-gradient(135deg, #C27088, #D4A0B0)'}}></div>

<div className="absolute top-8 -right-3 glass rounded-2xl px-5 py-3 shadow-lg float-slow">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #C27088, #D4A0B0)'}}>
<i className="w-4 h-4 text-white" data-lucide="award" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-xs font-medium" style={{color: '#5A3D4D'}}>+10 años</div>
<div className="text-xs text-gray-400 font-light">de excelencia</div>
</div>
</div>
</div>
</div>
<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-px" style={{background: 'linear-gradient(90deg, #C27088, transparent)'}}></div>
<span className="text-xs uppercase tracking-[0.3em] font-light" style={{color: '#C27088'}}>Sobre nosotros</span>
</div>
<h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight" style={{color: '#5A3D4D'}}>Nuestra Clínica</h2>
<p className="mt-5 text-sm text-gray-400 leading-relaxed font-light">
                        En Clínica Dental Natural Smile contamos con instalaciones modernas y equipamiento de última generación para brindarte la mejor atención odontológica.
                    </p>
<p className="mt-3 text-sm text-gray-400 leading-relaxed font-light">
                        Nuestro equipo de profesionales se capacita constantemente para ofrecer tratamientos innovadores y de alta calidad, siempre priorizando tu comodidad y bienestar.
                    </p>
<div className="mt-10 flex flex-col gap-5">
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<i className="w-4 h-4" data-lucide="check" style={{color: '#C27088', strokeWidth: '1.5'}}></i>
</div>
<span className="text-sm text-gray-500 font-light">Tecnología de punta</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<i className="w-4 h-4" data-lucide="check" style={{color: '#C27088', strokeWidth: '1.5'}}></i>
</div>
<span className="text-sm text-gray-500 font-light">Ambiente cálido y acogedor</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<i className="w-4 h-4" data-lucide="check" style={{color: '#C27088', strokeWidth: '1.5'}}></i>
</div>
<span className="text-sm text-gray-500 font-light">Atención personalizada</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 relative overflow-hidden" id="testimonios" style={{background: 'linear-gradient(180deg, #FDF2F4 0%, #FEFAFB 100%)'}}>
<div className="absolute top-20 left-10 w-60 h-60 rounded-full opacity-[0.04] float-slow" style={{background: 'radial-gradient(circle, #C27088, transparent 70%)'}}></div>
<div className="relative max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="flex items-center justify-center gap-3 mb-4">
<div className="w-12 h-px" style={{background: 'linear-gradient(90deg, transparent, #D4A0B0)'}}></div>
<span className="text-xs uppercase tracking-[0.3em] font-light" style={{color: '#C27088'}}>Lo que dicen nuestros pacientes</span>
<div className="w-12 h-px" style={{background: 'linear-gradient(90deg, #D4A0B0, transparent)'}}></div>
</div>
<h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight" style={{color: '#5A3D4D'}}>Testimonios</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="card-hover bg-white rounded-2xl p-8 gradient-border">
<div className="flex gap-1 mb-5">
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-sm text-gray-400 leading-relaxed font-light italic font-serif">"Excelente atención, muy profesionales y amables. Mi experiencia fue increíble, totalmente recomendado."</p>
<div className="mt-6 pt-5 border-t border-pink-100/50 flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<span className="text-xs font-medium" style={{color: '#C27088'}}>MC</span>
</div>
<div>
<div className="text-sm font-normal" style={{color: '#5A3D4D'}}>María Castillo</div>
<div className="text-xs text-gray-400 font-light">Paciente</div>
</div>
</div>
</div>

<div className="card-hover bg-white rounded-2xl p-8 gradient-border">
<div className="flex gap-1 mb-5">
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-sm text-gray-400 leading-relaxed font-light italic font-serif">"Los mejores dentistas que he visitado. El tratamiento de blanqueamiento quedó perfecto. Muy agradecido."</p>
<div className="mt-6 pt-5 border-t border-pink-100/50 flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<span className="text-xs font-medium" style={{color: '#C27088'}}>PR</span>
</div>
<div>
<div className="text-sm font-normal" style={{color: '#5A3D4D'}}>Pedro Ramírez</div>
<div className="text-xs text-gray-400 font-light">Paciente</div>
</div>
</div>
</div>

<div className="card-hover bg-white rounded-2xl p-8 gradient-border">
<div className="flex gap-1 mb-5">
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-sm text-gray-400 leading-relaxed font-light italic font-serif">"Mi hija le tenía miedo al dentista, pero aquí la trataron con mucho cariño. Ahora le encanta ir a sus controles."</p>
<div className="mt-6 pt-5 border-t border-pink-100/50 flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<span className="text-xs font-medium" style={{color: '#C27088'}}>LV</span>
</div>
<div>
<div className="text-sm font-normal" style={{color: '#5A3D4D'}}>Laura Vega</div>
<div className="text-xs text-gray-400 font-light">Paciente</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 bg-white relative overflow-hidden" id="equipo">
<div className="absolute top-0 left-0 w-full h-px" style={{background: 'linear-gradient(90deg, transparent, rgba(194,112,136,0.15), transparent)'}}></div>
<div className="relative max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="flex items-center justify-center gap-3 mb-4">
<div className="w-12 h-px" style={{background: 'linear-gradient(90deg, transparent, #D4A0B0)'}}></div>
<span className="text-xs uppercase tracking-[0.3em] font-light" style={{color: '#C27088'}}>Profesionales</span>
<div className="w-12 h-px" style={{background: 'linear-gradient(90deg, #D4A0B0, transparent)'}}></div>
</div>
<h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight" style={{color: '#5A3D4D'}}>Nuestro Equipo</h2>
<p className="mt-4 text-sm text-gray-400 max-w-lg mx-auto font-light">Profesionales comprometidos con tu sonrisa y bienestar.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

<div className="text-center group">
<div className="relative mx-auto w-52 h-52 mb-6">
<div className="w-full h-full rounded-full overflow-hidden shadow-xl shadow-pink-100/30 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-pink-200/40" style={{border: '2px solid rgba(194,112,136,0.15)'}}>
<img alt="Doctora" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&amp;q=80"/>
</div>
<div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, #C27088, #D4A0B0)'}}>
<i className="w-4 h-4 text-white" data-lucide="award" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<h3 className="text-lg font-serif font-normal tracking-tight" style={{color: '#5A3D4D'}}>Dra. Natalia Soto</h3>
<p className="text-xs text-gray-400 mt-1 tracking-wider uppercase font-light">Directora Clínica · Ortodoncista</p>
</div>

<div className="text-center group">
<div className="relative mx-auto w-52 h-52 mb-6">
<div className="w-full h-full rounded-full overflow-hidden shadow-xl shadow-pink-100/30 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-pink-200/40" style={{border: '2px solid rgba(194,112,136,0.15)'}}>
<img alt="Doctor" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&amp;q=80"/>
</div>
<div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, #C27088, #D4A0B0)'}}>
<i className="w-4 h-4 text-white" data-lucide="award" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<h3 className="text-lg font-serif font-normal tracking-tight" style={{color: '#5A3D4D'}}>Dr. Carlos Muñoz</h3>
<p className="text-xs text-gray-400 mt-1 tracking-wider uppercase font-light">Implantólogo</p>
</div>

<div className="text-center group">
<div className="relative mx-auto w-52 h-52 mb-6">
<div className="w-full h-full rounded-full overflow-hidden shadow-xl shadow-pink-100/30 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-pink-200/40" style={{border: '2px solid rgba(194,112,136,0.15)'}}>
<img alt="Doctora" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&amp;q=80"/>
</div>
<div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, #C27088, #D4A0B0)'}}>
<i className="w-4 h-4 text-white" data-lucide="award" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<h3 className="text-lg font-serif font-normal tracking-tight" style={{color: '#5A3D4D'}}>Dra. Valentina Reyes</h3>
<p className="text-xs text-gray-400 mt-1 tracking-wider uppercase font-light">Odontopediatra</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #B8607A, #C27088, #D4A0B0)'}}>
<div className="absolute inset-0 shimmer"></div>
<div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>
<div className="absolute inset-0 opacity-10">
<div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-white/20 float-slow"></div>
<div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-white/10 float-slower"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5"></div>
</div>
<div className="relative max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-white">¿Lista para tu nueva sonrisa?</h2>
<p className="mt-5 text-sm text-white/70 max-w-xl mx-auto font-light leading-relaxed">Agenda tu primera consulta de evaluación y comienza tu camino hacia la sonrisa que siempre soñaste.</p>
<a className="inline-flex items-center gap-2.5 mt-10 px-10 py-4 rounded-full bg-white text-xs font-medium tracking-[0.15em] uppercase shadow-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-1" href="#contacto" style={{color: '#B8607A'}}>
                Agendar cita ahora
                <i className="w-4 h-4" data-lucide="calendar" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</section>

<section className="py-20 md:py-28 relative overflow-hidden" id="contacto">
<div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50/15 to-white"></div>
<div className="relative max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="flex items-center justify-center gap-3 mb-4">
<div className="w-12 h-px" style={{background: 'linear-gradient(90deg, transparent, #D4A0B0)'}}></div>
<span className="text-xs uppercase tracking-[0.3em] font-light" style={{color: '#C27088'}}>Escríbenos</span>
<div className="w-12 h-px" style={{background: 'linear-gradient(90deg, #D4A0B0, transparent)'}}></div>
</div>
<h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight" style={{color: '#5A3D4D'}}>Contacto</h2>
</div>
<div className="grid md:grid-cols-2 gap-14">

<div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-pink-100/20 gradient-border">
<form className="space-y-6">
<div>
<label className="block text-xs font-light text-gray-400 mb-2 tracking-wider uppercase">Nombre completo</label>
<input className="w-full px-5 py-3.5 rounded-xl border border-gray-100 text-sm font-light focus:outline-none focus:border-pink-200 focus:ring-3 focus:ring-pink-50 transition-all bg-gray-50/50" placeholder="Tu nombre" type="text"/>
</div>
<div>
<label className="block text-xs font-light text-gray-400 mb-2 tracking-wider uppercase">Email</label>
<input className="w-full px-5 py-3.5 rounded-xl border border-gray-100 text-sm font-light focus:outline-none focus:border-pink-200 focus:ring-3 focus:ring-pink-50 transition-all bg-gray-50/50" placeholder="tu@email.com" type="email"/>
</div>
<div>
<label className="block text-xs font-light text-gray-400 mb-2 tracking-wider uppercase">Teléfono</label>
<input className="w-full px-5 py-3.5 rounded-xl border border-gray-100 text-sm font-light focus:outline-none focus:border-pink-200 focus:ring-3 focus:ring-pink-50 transition-all bg-gray-50/50" placeholder="+56 9 1234 5678" type="tel"/>
</div>
<div>
<label className="block text-xs font-light text-gray-400 mb-2 tracking-wider uppercase">Mensaje</label>
<textarea className="w-full px-5 py-3.5 rounded-xl border border-gray-100 text-sm font-light focus:outline-none focus:border-pink-200 focus:ring-3 focus:ring-pink-50 transition-all resize-none bg-gray-50/50" placeholder="¿En qué podemos ayudarte?" rows="4"></textarea>
</div>
<button className="btn-glamour w-full py-3.5 rounded-xl text-white text-xs font-medium tracking-[0.15em] uppercase transition-all" style={{background: 'linear-gradient(135deg, #C27088, #B8607A)'}} type="submit">
                            Enviar mensaje
                        </button>
</form>
</div>

<div className="space-y-5">
<div className="card-hover bg-white rounded-2xl p-6 gradient-border flex items-start gap-4">
<div className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<i className="w-5 h-5" data-lucide="map-pin" style={{color: '#C27088', strokeWidth: '1.5'}}></i>
</div>
<div>
<h4 className="text-sm font-normal" style={{color: '#5A3D4D'}}>Dirección</h4>
<p className="text-xs text-gray-400 mt-1 font-light">Santiago, Chile</p>
</div>
</div>
<div className="card-hover bg-white rounded-2xl p-6 gradient-border flex items-start gap-4">
<div className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<i className="w-5 h-5" data-lucide="phone" style={{color: '#C27088', strokeWidth: '1.5'}}></i>
</div>
<div>
<h4 className="text-sm font-normal" style={{color: '#5A3D4D'}}>Teléfono</h4>
<p className="text-xs text-gray-400 mt-1 font-light">+56 9 1234 5678</p>
</div>
</div>
<div className="card-hover bg-white rounded-2xl p-6 gradient-border flex items-start gap-4">
<div className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<i className="w-5 h-5" data-lucide="mail" style={{color: '#C27088', strokeWidth: '1.5'}}></i>
</div>
<div>
<h4 className="text-sm font-normal" style={{color: '#5A3D4D'}}>Email</h4>
<p className="text-xs text-gray-400 mt-1 font-light">contacto@clinicadentalns.cl</p>
</div>
</div>
<div className="card-hover bg-white rounded-2xl p-6 gradient-border flex items-start gap-4">
<div className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<i className="w-5 h-5" data-lucide="clock" style={{color: '#C27088', strokeWidth: '1.5'}}></i>
</div>
<div>
<h4 className="text-sm font-normal" style={{color: '#5A3D4D'}}>Horario</h4>
<p className="text-xs text-gray-400 mt-1 font-light">Lunes a Viernes: 9:00 - 19:00</p>
<p className="text-xs text-gray-400 font-light">Sábado: 9:00 - 14:00</p>
</div>
</div>
<div className="rounded-2xl overflow-hidden h-48 shadow-lg shadow-pink-100/20" style={{border: '1px solid rgba(194,112,136,0.1)'}}>
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0!2d-70.65!3d-33.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI3JzAwLjAiUyA3MMKwMzknMDAuMCJX!5e0!3m2!1sen!2scl!4v1600000000000!5m2!1sen!2scl" style={{border: '0', filter: 'grayscale(15%) hue-rotate(5deg)'}} width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>

<footer className="relative overflow-hidden" style={{background: 'linear-gradient(180deg, #FAF5F7 0%, #F5EDF0 100%)'}}>
<div className="absolute top-0 left-0 w-full h-px" style={{background: 'linear-gradient(90deg, transparent, rgba(194,112,136,0.2), transparent)'}}></div>
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10">
<div className="md:col-span-2">
<div className="flex flex-col">
<span className="font-script text-4xl" style={{color: '#8B6F7B'}}>Natural Smile</span>
<div className="flex items-center gap-2 mt-1">
<div className="w-6 h-px" style={{background: 'linear-gradient(90deg, #D4A0B0, transparent)'}}></div>
<span className="text-xs tracking-[0.3em] uppercase font-light" style={{color: '#C27088'}}>Clínica Dental</span>
</div>
</div>
<p className="mt-5 text-xs text-gray-400 max-w-sm leading-relaxed font-light">Tu sonrisa es nuestra pasión. Brindamos atención odontológica integral con los más altos estándares de calidad.</p>
<div className="flex items-center gap-3 mt-5">
<a className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-lg" href="#" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<i className="w-4 h-4" data-lucide="instagram" style={{color: '#C27088', strokeWidth: '1.5'}}></i>
</a>
<a className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-lg" href="#" style={{background: 'linear-gradient(135deg, #FDF2F4, #FCE7EC)'}}>
<i className="w-4 h-4" data-lucide="facebook" style={{color: '#C27088', strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div>
<h4 className="text-xs font-medium mb-5 tracking-[0.2em] uppercase" style={{color: '#5A3D4D'}}>Enlaces</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-400 hover:text-pink-500 transition-colors font-light" href="#inicio">Inicio</a></li>
<li><a className="text-xs text-gray-400 hover:text-pink-500 transition-colors font-light" href="#especialidades">Especialidades</a></li>
<li><a className="text-xs text-gray-400 hover:text-pink-500 transition-colors font-light" href="#testimonios">Testimonios</a></li>
<li><a className="text-xs text-gray-400 hover:text-pink-500 transition-colors font-light" href="#equipo">Equipo</a></li>
<li><a className="text-xs text-gray-400 hover:text-pink-500 transition-colors font-light" href="#contacto">Contacto</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium mb-5 tracking-[0.2em] uppercase" style={{color: '#5A3D4D'}}>Servicios</h4>
<ul className="space-y-3">
<li><span className="text-xs text-gray-400 font-light">Ortodoncia</span></li>
<li><span className="text-xs text-gray-400 font-light">Estética Dental</span></li>
<li><span className="text-xs text-gray-400 font-light">Implantología</span></li>
<li><span className="text-xs text-gray-400 font-light">Endodoncia</span></li>
<li><span className="text-xs text-gray-400 font-light">Odontopediatría</span></li>
</ul>
</div>
</div>
<div className="mt-12 pt-6 text-center" style={{borderTop: '1px solid rgba(194,112,136,0.1)'}}>
<p className="text-xs text-gray-400 font-light tracking-wider">© 2024 Clínica Dental Natural Smile. Todos los derechos reservados.</p>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-xl hover:bg-green-600 transition-all z-50 hover:scale-110 hover:shadow-2xl" href="https://wa.me/56912345678" style={{boxShadow: '0 8px 30px -6px rgba(34,197,94,0.4)'}} target="_blank">
<i className="w-6 h-6 text-white" data-lucide="message-circle" style={{strokeWidth: '1.5'}}></i>
</a>


    </>
  );
}
