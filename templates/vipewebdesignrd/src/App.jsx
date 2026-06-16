import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
vipe: {
blue: '#0033A0',
orange: '#FF6B35',
cyan: '#00D4FF',
dark: '#0F172A',
surface: '#1E293B',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'hero-glow': 'conic-gradient(from 90deg at 50% 50%, #00000000 50%, #0033A0 100%)',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        // Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isClosed = mobileMenu.classList.contains('translate-x-full');
            if (isClosed) {
                mobileMenu.classList.remove('translate-x-full');
            } else {
                mobileMenu.classList.add('translate-x-full');
            }
        }

        mobileMenuBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);

        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Scroll Animation Logic (Intersection Observer)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Navbar Compact Logic
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('h-16');
                navbar.classList.remove('h-20');
            } else {
                navbar.classList.add('h-20');
                navbar.classList.remove('h-16');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-vipe-blue to-vipe-cyan flex items-center justify-center text-white font-bold text-lg">V</div>
<span className="font-bold text-xl tracking-tight text-white group-hover:text-vipe-cyan transition-colors">VIPE WEB</span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#services">Servicios</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#process">Proceso</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#portfolio">Portafolio</a>
<a className="px-5 py-2.5 text-sm font-medium text-white bg-vipe-blue hover:bg-blue-700 rounded-full transition-all shadow-lg shadow-blue-900/20 border border-blue-600/50" href="#contact">
                        Cotizar Proyecto
                    </a>
</div>

<button className="md:hidden text-slate-300 hover:text-white" id="mobile-menu-btn">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>

<div className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-xl transform translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center items-center space-y-8" id="mobile-menu">
<button className="absolute top-6 right-6 text-slate-400" id="close-menu-btn">
<span className="iconify" data-height="32" data-icon="lucide:x" data-width="32"></span>
</button>
<a className="text-2xl font-medium text-white hover:text-vipe-cyan mobile-link" href="#services">Servicios</a>
<a className="text-2xl font-medium text-white hover:text-vipe-cyan mobile-link" href="#process">Proceso</a>
<a className="text-2xl font-medium text-white hover:text-vipe-cyan mobile-link" href="#portfolio">Portafolio</a>
<a className="text-2xl font-medium text-vipe-orange mobile-link" href="#contact">Contacto</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-[20%] left-[10%] w-72 h-72 bg-vipe-blue rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse-slow"></div>
<div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-vipe-cyan rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-vipe-blue/30 mb-8 animate-float">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vipe-orange opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-vipe-orange"></span>
</span>
<span className="text-xs font-medium tracking-wide text-slate-200">#1 AGENCIA DIGITAL EN RD 🇩🇴</span>
</div>

<h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Transformamos Ideas en <br/>
<span className="text-gradient">Experiencias Digitales</span>
</h1>

<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Desarrollo web, software a medida y estrategias digitales diseñadas para hacer crecer tu negocio en la era moderna.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto px-8 py-4 bg-vipe-orange hover:bg-orange-600 text-white font-semibold rounded-lg transition-all shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] flex items-center justify-center gap-2 group" href="#contact">
                    Solicitar Cotización
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="20"></span>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold rounded-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2" href="#portfolio">
                    Ver Portafolio
                    <span className="iconify" data-icon="lucide:folder-open" data-width="20"></span>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto border-t border-white/5 pt-8">
<div className="text-center">
<p className="text-3xl font-bold text-white mb-1">+50</p>
<p className="text-xs text-slate-500 uppercase tracking-wider">Proyectos</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold text-white mb-1">+30</p>
<p className="text-xs text-slate-500 uppercase tracking-wider">Clientes Felices</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold text-white mb-1">5+</p>
<p className="text-xs text-slate-500 uppercase tracking-wider">Años Exp.</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold text-white mb-1">24/7</p>
<p className="text-xs text-slate-500 uppercase tracking-wider">Soporte</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-slate-900/50" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Soluciones Digitales Completas</h2>
<p className="text-slate-400 max-w-2xl mx-auto">Todo lo que tu negocio necesita para dominar el mundo digital, diseñado con precisión y tecnología de punta.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl glass-panel hover:border-vipe-blue/50 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 rounded-lg bg-vipe-blue/10 flex items-center justify-center mb-6 group-hover:bg-vipe-blue/20 transition-colors">
<span className="iconify text-vipe-blue" data-icon="lucide:monitor" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold mb-3 text-white">Desarrollo Web</h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">Sitios web modernos, rápidos y optimizados para convertir visitantes en clientes reales.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">Next.js</span>
<span className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">React</span>
</div>
<a className="text-vipe-cyan text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">Ver más <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span></a>
</div>

<div className="group p-8 rounded-2xl glass-panel hover:border-vipe-orange/50 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 rounded-lg bg-vipe-orange/10 flex items-center justify-center mb-6 group-hover:bg-vipe-orange/20 transition-colors">
<span className="iconify text-vipe-orange" data-icon="lucide:code-2" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold mb-3 text-white">Software a Medida</h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">Sistemas personalizados que automatizan y potencian las operaciones de tu empresa.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">Web Apps</span>
<span className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">APIs</span>
</div>
<a className="text-vipe-orange text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">Ver más <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span></a>
</div>

<div className="group p-8 rounded-2xl glass-panel hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
<span className="iconify text-purple-400" data-icon="lucide:shopping-cart" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold mb-3 text-white">E-Commerce</h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">Tiendas en línea que venden 24/7 con pasarelas de pago integradas y seguras.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">Shopify</span>
<span className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">WooCommerce</span>
</div>
<a className="text-purple-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">Ver más <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span></a>
</div>

<div className="group p-8 rounded-2xl glass-panel hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
<span className="iconify text-pink-400" data-icon="lucide:palette" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold mb-3 text-white">Diseño Gráfico</h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">Identidad visual impactante que hace que tu marca sea memorable y profesional.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">Branding</span>
<span className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">UI/UX</span>
</div>
<a className="text-pink-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">Ver más <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span></a>
</div>

<div className="group p-8 rounded-2xl glass-panel hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
<span className="iconify text-green-400" data-icon="lucide:trending-up" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold mb-3 text-white">Marketing Digital &amp; SEO</h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">Estrategias basadas en datos que posicionan tu negocio en Google y redes sociales.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">SEO</span>
<span className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">Ads</span>
</div>
<a className="text-green-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">Ver más <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span></a>
</div>

<div className="group p-8 rounded-2xl glass-panel hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
<span className="iconify text-yellow-400" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold mb-3 text-white">Mantenimiento Web</h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">Soporte continuo, actualizaciones y seguridad blindada para tu sitio.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">24/7</span>
<span className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">Backups</span>
</div>
<a className="text-yellow-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">Ver más <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span></a>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-vipe-surface/30" id="process">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Nuestro Proceso</h2>
<p className="text-slate-400">Transparencia y comunicación desde el primer día.</p>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-vipe-blue/20 via-vipe-cyan/50 to-vipe-blue/20"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-4">

<div className="relative flex flex-col items-center text-center reveal group">
<div className="w-24 h-24 rounded-full bg-slate-900 border-4 border-vipe-surface flex items-center justify-center z-10 mb-6 group-hover:border-vipe-blue transition-colors duration-300 shadow-xl">
<span className="iconify text-vipe-blue" data-icon="lucide:phone-call" data-width="32"></span>
</div>
<h4 className="text-lg font-semibold text-white mb-2">1. Discovery</h4>
<p className="text-sm text-slate-400">Consulta gratuita para entender tus objetivos.</p>
</div>

<div className="relative flex flex-col items-center text-center reveal group" style={{transitionDelay: '100ms'}}>
<div className="w-24 h-24 rounded-full bg-slate-900 border-4 border-vipe-surface flex items-center justify-center z-10 mb-6 group-hover:border-vipe-cyan transition-colors duration-300 shadow-xl">
<span className="iconify text-vipe-cyan" data-icon="lucide:clipboard-list" data-width="32"></span>
</div>
<h4 className="text-lg font-semibold text-white mb-2">2. Estrategia</h4>
<p className="text-sm text-slate-400">Diseñamos la solución perfecta y el cronograma.</p>
</div>

<div className="relative flex flex-col items-center text-center reveal group" style={{transitionDelay: '200ms'}}>
<div className="w-24 h-24 rounded-full bg-slate-900 border-4 border-vipe-surface flex items-center justify-center z-10 mb-6 group-hover:border-vipe-orange transition-colors duration-300 shadow-xl">
<span className="iconify text-vipe-orange" data-icon="lucide:zap" data-width="32"></span>
</div>
<h4 className="text-lg font-semibold text-white mb-2">3. Desarrollo</h4>
<p className="text-sm text-slate-400">Construimos tu proyecto con updates constantes.</p>
</div>

<div className="relative flex flex-col items-center text-center reveal group" style={{transitionDelay: '300ms'}}>
<div className="w-24 h-24 rounded-full bg-slate-900 border-4 border-vipe-surface flex items-center justify-center z-10 mb-6 group-hover:border-green-500 transition-colors duration-300 shadow-xl">
<span className="iconify text-green-500" data-icon="lucide:rocket" data-width="32"></span>
</div>
<h4 className="text-lg font-semibold text-white mb-2">4. Lanzamiento</h4>
<p className="text-sm text-slate-400">Publicamos, optimizamos y entrenamos a tu equipo.</p>
</div>

<div className="relative flex flex-col items-center text-center reveal group" style={{transitionDelay: '400ms'}}>
<div className="w-24 h-24 rounded-full bg-slate-900 border-4 border-vipe-surface flex items-center justify-center z-10 mb-6 group-hover:border-purple-500 transition-colors duration-300 shadow-xl">
<span className="iconify text-purple-500" data-icon="lucide:trending-up" data-width="32"></span>
</div>
<h4 className="text-lg font-semibold text-white mb-2">5. Crecimiento</h4>
<p className="text-sm text-slate-400">Soporte continuo para escalar tu presencia.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="portfolio">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
<div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Proyectos Destacados</h2>
<p className="text-slate-400">Resultados reales para empresas innovadoras.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-vipe-cyan font-medium hover:text-white transition-colors" href="#">Ver todos <span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative rounded-xl overflow-hidden aspect-[4/3] reveal">
<img alt="Dashboard" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-xl font-bold text-white mb-1">FinTech App Dashboard</h3>
<p className="text-vipe-cyan text-sm mb-4">Software a Medida</p>
<button className="px-4 py-2 border border-white text-white rounded-full text-sm hover:bg-white hover:text-slate-900 transition-colors">Ver Caso</button>
</div>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden aspect-[4/3] reveal">
<img alt="E-commerce" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-xl font-bold text-white mb-1">Moda RD Store</h3>
<p className="text-vipe-cyan text-sm mb-4">E-Commerce</p>
<button className="px-4 py-2 border border-white text-white rounded-full text-sm hover:bg-white hover:text-slate-900 transition-colors">Ver Caso</button>
</div>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden aspect-[4/3] reveal">
<img alt="Corporate" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-xl font-bold text-white mb-1">Constructora Valles</h3>
<p className="text-vipe-cyan text-sm mb-4">Desarrollo Web Corporativo</p>
<button className="px-4 py-2 border border-white text-white rounded-full text-sm hover:bg-white hover:text-slate-900 transition-colors">Ver Caso</button>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-vipe-cyan font-medium" href="#">Ver todos los proyectos <span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span></a>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden">

<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-vipe-blue/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">La Diferencia VIPE WEB</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">No somos solo proveedores, somos tu socio tecnológico. Entendemos el mercado dominicano y los estándares globales.</p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-vipe-orange/20 flex items-center justify-center text-vipe-orange shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h4 className="font-semibold text-white">Respuesta en &lt; 4 horas</h4>
<p className="text-sm text-slate-400">Soporte premium cuando realmente lo necesitas.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-vipe-blue/20 flex items-center justify-center text-vipe-blue shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h4 className="font-semibold text-white">Garantía de 30 días</h4>
<p className="text-sm text-slate-400">Si no estás satisfecho con una funcionalidad, la ajustamos sin costo.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-vipe-cyan/20 flex items-center justify-center text-vipe-cyan shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h4 className="font-semibold text-white">Equipo 100% Local 🇩🇴</h4>
<p className="text-sm text-slate-400">Sin barreras de idioma ni zona horaria.</p>
</div>
</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4 reveal">
<div className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center aspect-square text-center hover:bg-white/5 transition-colors">
<span className="iconify text-vipe-cyan mb-4" data-icon="lucide:clock" data-width="32"></span>
<span className="text-2xl font-bold text-white">Rápidos</span>
<span className="text-xs text-slate-400 mt-1">Entregas a tiempo</span>
</div>
<div className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center aspect-square text-center hover:bg-white/5 transition-colors translate-y-8">
<span className="iconify text-vipe-orange mb-4" data-icon="lucide:shield-check" data-width="32"></span>
<span className="text-2xl font-bold text-white">Seguros</span>
<span className="text-xs text-slate-400 mt-1">Código robusto</span>
</div>
<div className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center aspect-square text-center hover:bg-white/5 transition-colors">
<span className="iconify text-purple-400 mb-4" data-icon="lucide:smartphone" data-width="32"></span>
<span className="text-2xl font-bold text-white">Responsive</span>
<span className="text-xs text-slate-400 mt-1">Móvil primero</span>
</div>
<div className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center aspect-square text-center hover:bg-white/5 transition-colors translate-y-8">
<span className="iconify text-green-400 mb-4" data-icon="lucide:bar-chart-2" data-width="32"></span>
<span className="text-2xl font-bold text-white">Escalables</span>
<span className="text-xs text-slate-400 mt-1">Crecen contigo</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16 reveal">Lo que dicen nuestros clientes</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-2xl relative reveal">
<span className="iconify absolute top-6 right-8 text-vipe-blue/20" data-icon="lucide:quote" data-width="40"></span>
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-300 text-sm mb-6 leading-relaxed">"VIPE WEB transformó completamente nuestra presencia online. Las ventas aumentaron un 40% en los primeros 3 meses tras el rediseño."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">CJ</div>
<div>
<p className="text-white font-medium text-sm">Carlos Jiménez</p>
<p className="text-slate-500 text-xs">CEO, TechRD</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative reveal" style={{transitionDelay: '100ms'}}>
<span className="iconify absolute top-6 right-8 text-vipe-blue/20" data-icon="lucide:quote" data-width="40"></span>
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-300 text-sm mb-6 leading-relaxed">"El equipo entendió perfectamente nuestra visión. El sistema de gestión que desarrollaron nos ahorra horas de trabajo diario."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">MR</div>
<div>
<p className="text-white font-medium text-sm">María Rodríguez</p>
<p className="text-slate-500 text-xs">Gerente, Logística Norte</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative reveal" style={{transitionDelay: '200ms'}}>
<span className="iconify absolute top-6 right-8 text-vipe-blue/20" data-icon="lucide:quote" data-width="40"></span>
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-300 text-sm mb-6 leading-relaxed">"Profesionalismo puro. Cumplieron con los plazos y el soporte post-lanzamiento ha sido excepcional. 100% recomendados."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">LP</div>
<div>
<p className="text-white font-medium text-sm">Luis Pérez</p>
<p className="text-slate-500 text-xs">Fundador, StartUp Caribe</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-vipe-blue to-cyan-700 opacity-20"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center reveal">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">¿Listo para llevar tu negocio al siguiente nivel?</h2>
<p className="text-lg text-slate-300 mb-10">Agenda una consultoría gratuita de 30 minutos y descubre cómo podemos ayudarte a digitalizar tu éxito.</p>
<div className="flex flex-col items-center">
<a className="px-8 py-4 bg-vipe-orange hover:bg-orange-600 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-orange-500/30 flex items-center gap-2 transform hover:scale-105" href="#contact">
<span className="iconify" data-icon="lucide:calendar" data-width="20"></span>
                    Agendar Consultoría Gratis
                </a>
<p className="mt-4 text-xs text-slate-400">Sin compromiso • Respuesta en 24 horas</p>
</div>
</div>
</section>

<section className="py-24 bg-slate-900" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="reveal">
<h2 className="text-3xl font-bold mb-6">Hablemos de tu Proyecto</h2>
<p className="text-slate-400 mb-10">Cuéntanos tus ideas y te ayudaremos a hacerlas realidad.</p>
<div className="space-y-8">
<a className="flex items-center gap-4 group" href="https://wa.me/18098708523">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-green-500 border border-white/10 group-hover:border-green-500/50 transition-colors">
<span className="iconify" data-icon="lucide:message-circle" data-width="24"></span>
</div>
<div>
<p className="text-xs text-slate-500 uppercase font-semibold">WhatsApp</p>
<p className="text-white text-lg font-medium group-hover:text-green-400 transition-colors">+1 809-870-8523</p>
</div>
</a>
<a className="flex items-center gap-4 group" href="mailto:contacto@vipeweb.com">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-vipe-cyan border border-white/10 group-hover:border-vipe-cyan/50 transition-colors">
<span className="iconify" data-icon="lucide:mail" data-width="24"></span>
</div>
<div>
<p className="text-xs text-slate-500 uppercase font-semibold">Email</p>
<p className="text-white text-lg font-medium group-hover:text-vipe-cyan transition-colors">contacto@vipeweb.com</p>
</div>
</a>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-vipe-orange border border-white/10">
<span className="iconify" data-icon="lucide:map-pin" data-width="24"></span>
</div>
<div>
<p className="text-xs text-slate-500 uppercase font-semibold">Ubicación</p>
<p className="text-white text-lg font-medium">Santo Domingo, República Dominicana</p>
</div>
</div>
</div>
<div className="mt-12 flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 hover:bg-vipe-blue hover:text-white text-slate-400 flex items-center justify-center transition-all border border-white/10" href="https://www.instagram.com/vipewebdesign/" target="_blank">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 hover:bg-vipe-blue hover:text-white text-slate-400 flex items-center justify-center transition-all border border-white/10" href="https://www.facebook.com/profile.php?id=61557530802114" target="_blank">
<span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
</a>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl reveal">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-400 uppercase">Nombre</label>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-vipe-orange focus:ring-1 focus:ring-vipe-orange transition-all placeholder-slate-600" placeholder="Tu nombre" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-400 uppercase">Teléfono / WhatsApp</label>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-vipe-orange focus:ring-1 focus:ring-vipe-orange transition-all placeholder-slate-600" placeholder="+1 809..." type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-400 uppercase">Email</label>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-vipe-orange focus:ring-1 focus:ring-vipe-orange transition-all placeholder-slate-600" placeholder="tu@email.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-400 uppercase">Tipo de Proyecto</label>
<select className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-vipe-orange focus:ring-1 focus:ring-vipe-orange transition-all appearance-none cursor-pointer">
<option>Desarrollo Web</option>
<option>E-Commerce</option>
<option>Software a Medida</option>
<option>Marketing Digital</option>
<option>Diseño Gráfico</option>
<option>Otro</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-400 uppercase">Mensaje</label>
<textarea className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-vipe-orange focus:ring-1 focus:ring-vipe-orange transition-all placeholder-slate-600" placeholder="Cuéntanos un poco sobre tu proyecto..." rows="4"></textarea>
</div>
<button className="w-full bg-vipe-blue hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-blue-500/30 flex justify-center items-center gap-2" type="button">
                            Enviar Mensaje <span className="iconify" data-icon="lucide:send" data-width="18"></span>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5 text-sm">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-4">
<a className="flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-vipe-blue to-vipe-cyan flex items-center justify-center text-white font-bold text-xs">V</div>
<span className="font-bold text-lg text-white">VIPE WEB</span>
</a>
<p className="text-slate-400 leading-relaxed">
                        Transformamos negocios a través de soluciones digitales innovadoras y estratégicas.
                    </p>
</div>

<div>
<h3 className="font-bold text-white mb-6">Servicios</h3>
<ul className="space-y-3">
<li><a className="text-slate-400 hover:text-vipe-cyan transition-colors" href="#">Desarrollo Web</a></li>
<li><a className="text-slate-400 hover:text-vipe-cyan transition-colors" href="#">Software a Medida</a></li>
<li><a className="text-slate-400 hover:text-vipe-cyan transition-colors" href="#">E-Commerce</a></li>
<li><a className="text-slate-400 hover:text-vipe-cyan transition-colors" href="#">Diseño Gráfico</a></li>
<li><a className="text-slate-400 hover:text-vipe-cyan transition-colors" href="#">Marketing Digital</a></li>
</ul>
</div>

<div>
<h3 className="font-bold text-white mb-6">Empresa</h3>
<ul className="space-y-3">
<li><a className="text-slate-400 hover:text-vipe-cyan transition-colors" href="#">Sobre Nosotros</a></li>
<li><a className="text-slate-400 hover:text-vipe-cyan transition-colors" href="#portfolio">Portafolio</a></li>
<li><a className="text-slate-400 hover:text-vipe-cyan transition-colors" href="#">Blog</a></li>
<li><a className="text-slate-400 hover:text-vipe-cyan transition-colors" href="#contact">Contacto</a></li>
</ul>
</div>

<div>
<h3 className="font-bold text-white mb-6">Contacto</h3>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-slate-400">
<span className="iconify" data-icon="lucide:message-circle" data-width="16"></span>
                            +1 809-870-8523
                        </li>
<li className="flex items-center gap-2 text-slate-400">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
                            contacto@vipeweb.com
                        </li>
<li className="flex gap-4 mt-4">
<a className="text-slate-400 hover:text-white transition-colors" href="https://www.instagram.com/vipewebdesign/" target="_blank">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="https://www.facebook.com/profile.php?id=61557530802114" target="_blank">
<span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-500">© 2025 VIPE WEB. Todos los derechos reservados.</p>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#">Privacidad</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">Términos</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-900/40 hover:bg-green-600 hover:-translate-y-1 transition-all" href="https://wa.me/18098708523" target="_blank">
<span className="iconify" data-icon="lucide:message-circle" data-width="28"></span>
</a>



    </>
  );
}
