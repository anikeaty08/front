import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.05em',
},
colors: {
navy: {
900: '#0B1120', // Deepest Navy
800: '#151e32',
700: '#1e293b',
},
gold: {
400: '#C5A059',
500: '#B08D55',
},
slate: {
50: '#f8fafc',
100: '#f1f5f9',
500: '#64748b',
900: '#0f172a',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both',
'slow-pan': 'slowPan 30s linear infinite alternate',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
slowPan: {
'0%': { transform: 'scale(1)' },
'100%': { transform: 'scale(1.1)' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        const logoText = document.getElementById('logo-text');
        const navLinks = document.getElementById('nav-links');
        const menuBtn = document.getElementById('menu-btn');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Scrolled State
                navbar.classList.add('glass-nav');
                logoText.classList.remove('text-white');
                logoText.classList.add('text-navy-900');
                
                // Update links colors
                const links = navLinks.querySelectorAll('a');
                links.forEach(link => {
                    link.classList.remove('text-white/90');
                    link.classList.add('text-navy-900');
                });

                // Update Menu Btn color
                menuBtn.classList.remove('text-white');
                menuBtn.classList.add('text-navy-900');
            } else {
                // Top State
                navbar.classList.remove('glass-nav');
                logoText.classList.add('text-white');
                logoText.classList.remove('text-navy-900');

                // Revert links colors
                const links = navLinks.querySelectorAll('a');
                links.forEach(link => {
                    link.classList.add('text-white/90');
                    link.classList.remove('text-navy-900');
                });

                 // Revert Menu Btn color
                 menuBtn.classList.add('text-white');
                 menuBtn.classList.remove('text-navy-900');
            }
        });

        // Intersection Observer for Reveal on Scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
            observer.observe(el);
        });

        // Mobile Menu Toggle
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('pointer-events-none', 'opacity-0');
                document.body.style.overflow = 'hidden'; // Lock scroll
            } else {
                mobileMenu.classList.add('pointer-events-none', 'opacity-0');
                document.body.style.overflow = ''; // Unlock scroll
            }
        });

        // Close mobile menu on link click
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('pointer-events-none', 'opacity-0');
                document.body.style.overflow = '';
            });
        });

        // Simple Form Handler (Demo)
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<span>Enviando...</span>';
            btn.classList.add('opacity-75');
            
            setTimeout(() => {
                alert('Gracias por su mensaje. Nos pondremos en contacto a la brevedad.');
                btn.innerHTML = originalText;
                btn.classList.remove('opacity-75');
                e.target.reset();
            }, 1500);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-300 top-0 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group z-50" href="#">
<div className="w-8 h-8 bg-navy-900 text-white flex items-center justify-center rounded-sm">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m16 16 3-8 3 8c0 1.1-1.34 2-3 2s-3-.9-3-2Z"></path><path d="m2 16 3-8 3 8c0 1.1-1.34 2-3 2s-3-.9-3-2Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
</div>
<span className="text-lg font-serif font-semibold text-white tracking-tight transition-colors duration-300" id="logo-text">Vanguardia<span className="text-gold-400">Penal</span></span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90" id="nav-links">
<a className="hover:text-gold-400 transition-colors" href="#home">Inicio</a>
<a className="hover:text-gold-400 transition-colors" href="#about">Quiénes Somos</a>
<a className="hover:text-gold-400 transition-colors" href="#practice">Áreas de Práctica</a>
<a className="hover:text-gold-400 transition-colors" href="#team">Equipo</a>
<a className="hover:text-gold-400 transition-colors" href="#blog">Noticias</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block bg-gold-400 hover:bg-gold-500 text-white text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-sm transition-colors" href="#contact">
                    Consulta Gratis
                </a>
<button className="md:hidden text-white z-50 p-2" id="menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="fixed inset-0 bg-navy-900 z-40 flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300" id="mobile-menu">
<a className="mobile-link text-2xl font-serif text-white" href="#home">Inicio</a>
<a className="mobile-link text-2xl font-serif text-white" href="#about">Quiénes Somos</a>
<a className="mobile-link text-2xl font-serif text-white" href="#practice">Áreas de Práctica</a>
<a className="mobile-link text-2xl font-serif text-white" href="#team">Equipo</a>
<a className="mobile-link text-2xl font-serif text-gold-400" href="#contact">Contacto</a>
</div>
</nav>

<header className="relative w-full h-[90vh] min-h-[700px] overflow-hidden bg-navy-900 flex items-center" id="home">

<div className="absolute inset-0 w-full h-full animate-slow-pan">

<img alt="Santiago de Chile Architecture" className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay" src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&amp;w=2610&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-3xl">
<span className="inline-block py-1 px-3 border border-white/20 rounded-full text-white/80 text-xs font-medium tracking-[0.2em] uppercase mb-6 animate-fade-in-up">
                    Estudio Jurídico en Santiago
                </span>
<h1 className="text-5xl md:text-7xl font-serif font-medium text-white leading-[1.1] tracking-tight mb-8 animate-fade-in-up" style={{animationDelay: '100ms'}}>
                    Defensa Penal Experta para <span className="text-gold-400 italic">Proteger tus Derechos.</span>
</h1>
<p className="text-lg text-slate-300 leading-relaxed max-w-xl mb-10 font-light animate-fade-in-up" style={{animationDelay: '200ms'}}>
                    Especialistas en litigación estratégica y defensa en casos de alta complejidad. Representación ética, confidencial y rigurosa en todo Chile.
                </p>
<div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '300ms'}}>
<a className="bg-white text-navy-900 hover:bg-slate-100 px-8 py-4 text-sm font-semibold rounded-sm text-center transition-colors" href="#contact">
                        Solicitar Asesoría Urgente
                    </a>
<a className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 text-sm font-medium rounded-sm flex items-center justify-center gap-2 group transition-all" href="#practice">
                        Ver Áreas de Práctica
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full border-t border-white/10 bg-navy-900/50 backdrop-blur-sm hidden md:block">
<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-4 gap-8">
<div>
<p className="text-3xl text-white font-serif">+15</p>
<p className="text-xs text-slate-400 uppercase tracking-widest">Años de Experiencia</p>
</div>
<div>
<p className="text-3xl text-white font-serif">98%</p>
<p className="text-xs text-slate-400 uppercase tracking-widest">Satisfacción Clientes</p>
</div>
<div>
<p className="text-3xl text-white font-serif">24/7</p>
<p className="text-xs text-slate-400 uppercase tracking-widest">Disponibilidad Urgencias</p>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="reveal-on-scroll">
<p className="text-gold-500 font-semibold tracking-widest text-xs uppercase mb-4">Sobre La Firma</p>
<h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6 tracking-tight">Estrategia legal basada en la excelencia y la ética.</h2>
<div className="space-y-4 text-slate-600 leading-relaxed">
<p>
                            En <strong>Vanguardia Penal</strong>, entendemos que enfrentar un proceso penal es una de las situaciones más estresantes en la vida de una persona o empresa. Nuestra misión es clara: proporcionar una defensa robusta, inteligente y empática.
                        </p>
<p>
                            Con oficinas en Las Condes, Santiago, nuestro equipo de abogados penalistas combina años de experiencia en el Ministerio Público y la Defensoría, brindando una perspectiva integral del sistema judicial chileno. No solo defendemos casos; protegemos futuros.
                        </p>
</div>
<div className="mt-8 pt-8 border-t border-slate-100 flex gap-8">
<div>
<i className="w-6 h-6 text-navy-900 mb-2" data-lucide="shield-check"></i>
<h4 className="font-semibold text-sm">Confidencialidad</h4>
<p className="text-xs text-slate-500 mt-1">Manejo discreto de información sensible.</p>
</div>
<div>
<i className="w-6 h-6 text-navy-900 mb-2" data-lucide="scale"></i>
<h4 className="font-semibold text-sm">Rigor Jurídico</h4>
<p className="text-xs text-slate-500 mt-1">Análisis profundo de la jurisprudencia actual.</p>
</div>
</div>
</div>
<div className="relative reveal-on-scroll delay-100">
<div className="aspect-[4/5] bg-slate-100 rounded-sm overflow-hidden">
<img alt="Law Office Detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=2612&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-navy-900 p-8 max-w-xs shadow-xl">
<p className="text-white font-serif italic text-lg">"La justicia no es un resultado, es un proceso que exige preparación absoluta."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="practice">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16 reveal-on-scroll">
<p className="text-navy-900 font-semibold tracking-widest text-xs uppercase mb-3">Servicios Legales</p>
<h2 className="text-4xl font-serif text-navy-900 tracking-tight">Áreas de Práctica Penal</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 border border-slate-200 hover:border-gold-400/50 hover:shadow-lg transition-all duration-300 reveal-on-scroll">
<div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center text-navy-900 mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="briefcase"></i>
</div>
<h3 className="text-xl font-serif font-medium text-navy-900 mb-3">Delitos Económicos</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
                        Defensa especializada en estafas, apropiación indebida, delitos tributarios y corrupción corporativa (White-Collar Crime).
                    </p>
<a className="text-xs font-semibold text-navy-900 uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Más detalles <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="group bg-white p-8 border border-slate-200 hover:border-gold-400/50 hover:shadow-lg transition-all duration-300 reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center text-navy-900 mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="gavel"></i>
</div>
<h3 className="text-xl font-serif font-medium text-navy-900 mb-3">Litigación Compleja</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
                        Representación en Juicios Orales, audiencias de formalización y recursos ante la Corte de Apelaciones y Suprema.
                    </p>
<a className="text-xs font-semibold text-navy-900 uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Más detalles <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="group bg-white p-8 border border-slate-200 hover:border-gold-400/50 hover:shadow-lg transition-all duration-300 reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center text-navy-900 mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="shield-alert"></i>
</div>
<h3 className="text-xl font-serif font-medium text-navy-900 mb-3">Delitos Violentos</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
                        Defensa técnica en casos de homicidios, lesiones graves y delitos contra la propiedad. Protección de garantías constitucionales.
                    </p>
<a className="text-xs font-semibold text-navy-900 uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Más detalles <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="group bg-white p-8 border border-slate-200 hover:border-gold-400/50 hover:shadow-lg transition-all duration-300 reveal-on-scroll">
<div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center text-navy-900 mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-xl font-serif font-medium text-navy-900 mb-3">Responsabilidad Penal Adolescente</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
                        Asesoría especializada bajo la Ley 20.084. Enfoque en la reinserción y el cumplimiento de penas en libertad.
                    </p>
<a className="text-xs font-semibold text-navy-900 uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Más detalles <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="group bg-white p-8 border border-slate-200 hover:border-gold-400/50 hover:shadow-lg transition-all duration-300 reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center text-navy-900 mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="file-text"></i>
</div>
<h3 className="text-xl font-serif font-medium text-navy-900 mb-3">Querellas Criminales</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
                        Redacción y presentación de querellas para víctimas de delitos. Persecución penal activa para lograr condenas y reparaciones.
                    </p>
<a className="text-xs font-semibold text-navy-900 uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Más detalles <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="group bg-white p-8 border border-slate-200 hover:border-gold-400/50 hover:shadow-lg transition-all duration-300 reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center text-navy-900 mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="lock"></i>
</div>
<h3 className="text-xl font-serif font-medium text-navy-900 mb-3">Compliance Penal</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
                        Modelos de prevención de delitos (Ley 20.393) para empresas. Auditorías legales y mitigación de riesgos corporativos.
                    </p>
<a className="text-xs font-semibold text-navy-900 uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Más detalles <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
<div>
<p className="text-gold-500 font-semibold tracking-widest text-xs uppercase mb-3">Nuestro Equipo</p>
<h2 className="text-4xl font-serif text-navy-900 tracking-tight">Abogados Especialistas</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-gold-500 transition-colors" href="#">
                    Ver todos los abogados <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal-on-scroll">
<div className="aspect-[3/4] overflow-hidden bg-slate-100 mb-6">
<img alt="Abogado Principal" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=2544&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-serif font-semibold text-navy-900">Dr. Ricardo Valenzuela</h3>
<p className="text-xs text-gold-500 font-medium uppercase tracking-wider mb-2">Socio Fundador</p>
<p className="text-sm text-slate-500 font-light">Especialista en Delitos Económicos. Magíster en Derecho Penal Universidad de Chile. Ex Fiscal del Ministerio Público.</p>
</div>

<div className="reveal-on-scroll delay-100">
<div className="aspect-[3/4] overflow-hidden bg-slate-100 mb-6">
<img alt="Abogada Senior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-serif font-semibold text-navy-900">Dra. Camila Soto</h3>
<p className="text-xs text-gold-500 font-medium uppercase tracking-wider mb-2">Socia Área Litigios</p>
<p className="text-sm text-slate-500 font-light">Experta en Juicios Orales y Recursos de Nulidad. Destacada por Chambers &amp; Partners 2024.</p>
</div>

<div className="reveal-on-scroll delay-200">
<div className="aspect-[3/4] overflow-hidden bg-slate-100 mb-6">
<img alt="Abogado Asociado" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-serif font-semibold text-navy-900">Dr. Felipe Araneda</h3>
<p className="text-xs text-gold-500 font-medium uppercase tracking-wider mb-2">Asociado Senior</p>
<p className="text-sm text-slate-500 font-light">Especialista en Compliance y Responsabilidad Penal de las Personas Jurídicas.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="blog">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-serif text-navy-900 mb-12 text-center reveal-on-scroll">Actualidad Legal y Noticias</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<article className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow reveal-on-scroll">
<div className="w-full md:w-48 h-32 bg-slate-200 shrink-0 overflow-hidden rounded-sm">
<img alt="Legal News" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">Octubre 12, 2023</span>
<h3 className="text-lg font-serif font-medium text-navy-900 mt-2 mb-2 hover:text-gold-500 transition-colors cursor-pointer">
                            Nueva Ley de Delitos Económicos en Chile: Lo que las empresas deben saber.
                        </h3>
<p className="text-sm text-slate-500 line-clamp-2">
                            Análisis de las implicancias de la nueva normativa que endurece las penas para delitos de cuello y corbata y modifica la responsabilidad penal de la persona jurídica.
                        </p>
</div>
</article>

<article className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow reveal-on-scroll delay-100">
<div className="w-full md:w-48 h-32 bg-slate-200 shrink-0 overflow-hidden rounded-sm">
<img alt="Court News" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">Septiembre 28, 2023</span>
<h3 className="text-lg font-serif font-medium text-navy-900 mt-2 mb-2 hover:text-gold-500 transition-colors cursor-pointer">
                            ¿Cómo funciona la Prisión Preventiva en el sistema penal actual?
                        </h3>
<p className="text-sm text-slate-500 line-clamp-2">
                            Explicación detallada sobre los requisitos para decretar esta medida cautelar y las estrategias de defensa para evitarla.
                        </p>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 bg-navy-900 text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif mb-6">Contáctanos</h2>
<p className="text-slate-300 font-light mb-10 leading-relaxed">
                        La primera consulta es fundamental para evaluar la viabilidad de su caso. Atendemos urgencias penales 24/7. Complete el formulario o contáctenos directamente.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 bg-white/10 rounded-sm">
<i className="w-5 h-5 text-gold-400" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wider text-white">Oficina</h4>
<p className="text-slate-300 text-sm mt-1">Av. Apoquindo 4500, Piso 12<br/>Las Condes, Santiago, Chile</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-white/10 rounded-sm">
<i className="w-5 h-5 text-gold-400" data-lucide="phone"></i>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wider text-white">Teléfono / WhatsApp</h4>
<p className="text-slate-300 text-sm mt-1">+56 2 2999 9999<br/>+56 9 8765 4321 (Urgencias)</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-white/10 rounded-sm">
<i className="w-5 h-5 text-gold-400" data-lucide="mail"></i>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wider text-white">Correo Electrónico</h4>
<p className="text-slate-300 text-sm mt-1">contacto@vanguardiapenal.cl</p>
</div>
</div>
</div>

<div className="mt-10 w-full h-48 bg-slate-800 rounded-sm overflow-hidden border border-white/10 relative group">

<img alt="Mapa Santiago" className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2674&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-widest text-white border border-white/20">
                                 Ver en Google Maps
                             </div>
</div>
</div>
</div>

<div className="bg-white text-navy-900 p-8 md:p-10 rounded-sm shadow-2xl reveal-on-scroll delay-100">
<form className="space-y-6" id="contactForm">
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-widest text-navy-900" htmlFor="name">Nombre Completo</label>
<input className="w-full border-b border-slate-300 py-3 text-sm focus:border-navy-900 focus:outline-none bg-transparent transition-colors placeholder:text-slate-400" id="name" placeholder="Ej. Juan Pérez" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-widest text-navy-900" htmlFor="email">Email</label>
<input className="w-full border-b border-slate-300 py-3 text-sm focus:border-navy-900 focus:outline-none bg-transparent transition-colors placeholder:text-slate-400" id="email" placeholder="correo@ejemplo.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-widest text-navy-900" htmlFor="phone">Teléfono</label>
<input className="w-full border-b border-slate-300 py-3 text-sm focus:border-navy-900 focus:outline-none bg-transparent transition-colors placeholder:text-slate-400" id="phone" placeholder="+56 9..." type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-widest text-navy-900" htmlFor="message">Detalles del Caso</label>
<textarea className="w-full border-b border-slate-300 py-3 text-sm focus:border-navy-900 focus:outline-none bg-transparent transition-colors resize-none placeholder:text-slate-400" id="message" placeholder="Describa brevemente su situación legal..." rows="4"></textarea>
</div>
<div className="pt-4">
<button className="w-full bg-navy-900 text-white py-4 px-6 text-sm font-semibold uppercase tracking-widest hover:bg-navy-800 transition-all flex justify-center items-center gap-2 group" type="submit">
<span>Enviar Mensaje</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="send"></i>
</button>
</div>
<p className="text-[10px] text-slate-400 text-center leading-tight">
                            Su información está protegida por secreto profesional. Respondemos en menos de 2 horas hábiles.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-navy-900 border-t border-slate-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-sm">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4 text-white">
<i className="w-6 h-6 text-gold-400" data-lucide="scale"></i>
<span className="text-xl font-serif font-semibold">Vanguardia<span className="text-gold-400">Penal</span></span>
</div>
<p className="text-slate-400 max-w-xs leading-relaxed font-light">
                        Estudio jurídico líder en defensa penal en Santiago de Chile. Compromiso ético, excelencia estratégica y resultados comprobados.
                    </p>
</div>
<div>
<h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-6">Navegación</h4>
<ul className="space-y-3 text-slate-400">
<li><a className="hover:text-white transition-colors" href="#home">Inicio</a></li>
<li><a className="hover:text-white transition-colors" href="#about">La Firma</a></li>
<li><a className="hover:text-white transition-colors" href="#practice">Servicios</a></li>
<li><a className="hover:text-white transition-colors" href="#blog">Blog Legal</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-6">Legal</h4>
<ul className="space-y-3 text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Aviso Legal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Política de Privacidad</a></li>
<li><a className="hover:text-white transition-colors" href="#">Trabaja con Nosotros</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2024 Vanguardia Penal Chile. Todos los derechos reservados.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
</div>
</div>
</div>
</footer>

<a aria-label="Contactar por WhatsApp" className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center group" href="https://wa.me/56900000000" target="_blank">
<svg className="w-6 h-6" fill="white" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
</a>



    </>
  );
}
