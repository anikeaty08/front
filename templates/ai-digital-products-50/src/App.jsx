import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Product Filtering Logic
            const filterBtns = document.querySelectorAll('.filter-btn');
            const productCards = document.querySelectorAll('.product-card');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update active button styling
                    filterBtns.forEach(b => {
                        b.classList.remove('bg-white/5', 'text-white', 'border-white/10');
                        b.classList.add('bg-transparent', 'text-slate-400', 'border-white/5');
                    });
                    btn.classList.add('bg-white/5', 'text-white', 'border-white/10');
                    btn.classList.remove('bg-transparent', 'text-slate-400', 'border-white/5');

                    const filterValue = btn.getAttribute('data-filter');

                    productCards.forEach(card => {
                        const categories = card.getAttribute('data-category').split(' ');
                        if (filterValue === 'all' || categories.includes(filterValue)) {
                            card.style.display = 'flex';
                            // Small timeout to allow display:flex to apply before setting opacity for transition
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1)';
                            }, 50);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'scale(0.95)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300); // match standard transition duration
                        }
                    });
                });
            });

            // Intersection Observer for Fade-In Animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in-up').forEach(element => {
                observer.observe(element);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2" href="#">
<iconify-icon className="text-xl text-blue-400" icon="solar:cpu-linear"></iconify-icon>
                S N G L R T Y
            </a>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#productos">Ecosistema</a>
<a className="hover:text-white transition-colors" href="#beneficios">Ventaja Competitiva</a>
<a className="hover:text-white transition-colors" href="#metodo">Metodología</a>
</nav>
<div className="flex items-center gap-4">
<button className="text-white hover:text-blue-400 transition-colors flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-grow pt-24 pb-16 md:pt-40 md:pb-32 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 fade-in-up">
<div className="flex flex-col items-start text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    Sistemas Actualizados 2024
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tighter leading-tight mb-6">
                    Automatiza tu éxito con <br/>
<span className="text-gradient">Inteligencia Artificial</span>
</h1>
<p className="text-base md:text-lg mb-8 max-w-lg font-light leading-relaxed">
                    Ecosistema digital de lujo corporativo diseñado para mentes visionarias. Transforma tu productividad, optimiza tus embudos de venta y escala tu conocimiento al siguiente nivel de la innovación.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-950 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors glow-effect" href="#productos">
                        Explorar Catálogo
                        <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 glass-panel text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-colors border-white/10" href="#metodo">
                        Cómo Funciona
                    </a>
</div>
</div>
<div className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden glass-panel flex items-center justify-center border-white/10 group">

<img alt="Singularity Abstract Tech" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 mix-blend-luminosity" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-transparent to-blue-900/30"></div>
<iconify-icon className="text-8xl text-white/50 relative z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-[spin_60s_linear_infinite]" icon="solar:planet-linear"></iconify-icon>
</div>
</div>
</main>

<section className="py-24 bg-slate-950/50 border-y border-white/5" id="productos">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16 fade-in-up">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">Activos Digitales</h2>
<p className="text-sm max-w-2xl font-light">Herramientas estratégicas y conocimiento comprimido para arquitectos del mañana.</p>

<div className="flex flex-wrap justify-center gap-2 mt-8" id="filter-container">
<button className="filter-btn active px-4 py-2 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10" data-filter="all">Todos</button>
<button className="filter-btn px-4 py-2 rounded-full text-xs font-medium border border-white/5 bg-transparent text-slate-400 transition-all hover:text-white hover:border-white/10" data-filter="ia">Automatización IA</button>
<button className="filter-btn px-4 py-2 rounded-full text-xs font-medium border border-white/5 bg-transparent text-slate-400 transition-all hover:text-white hover:border-white/10" data-filter="marketing">Marketing Digital</button>
<button className="filter-btn px-4 py-2 rounded-full text-xs font-medium border border-white/5 bg-transparent text-slate-400 transition-all hover:text-white hover:border-white/10" data-filter="mindset">Mindset</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="products-grid">

<div className="product-card glass-panel rounded-xl overflow-hidden group hover:border-blue-500/30 transition-all duration-300 flex flex-col fade-in-up" data-category="ia">
<div className="aspect-video relative overflow-hidden bg-slate-900">
<img alt="Automatización IA 101" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-xs font-medium text-white border border-white/10">Curso</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors">Automatización IA 101</h3>
<p className="text-sm font-light text-slate-400 mb-6 flex-grow">Aprende a delegar tareas repetitivas a sistemas inteligentes. De cero a la creación de tu primer agente automatizado.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xl font-medium text-white">49€</span>
<button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-md text-sm font-medium border border-white/10 transition-colors flex items-center gap-2">
                                Adquirir <iconify-icon icon="solar:bag-3-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="product-card glass-panel rounded-xl overflow-hidden group hover:border-purple-500/30 transition-all duration-300 flex flex-col fade-in-up" data-category="marketing" style={{transitionDelay: '100ms'}}>
<div className="aspect-video relative overflow-hidden bg-slate-900">
<img alt="Marketing Digital Futurista" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-xs font-medium text-white border border-white/10">Ebook</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-white tracking-tight mb-2 group-hover:text-purple-400 transition-colors">Marketing Digital Futurista</h3>
<p className="text-sm font-light text-slate-400 mb-6 flex-grow">Estrategias de adquisición de última generación. Domina los algoritmos antes de que ellos te dominen a ti.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xl font-medium text-white">19€</span>
<button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-md text-sm font-medium border border-white/10 transition-colors flex items-center gap-2">
                                Adquirir <iconify-icon icon="solar:bag-3-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="product-card glass-panel rounded-xl overflow-hidden group hover:border-blue-500/30 transition-all duration-300 flex flex-col fade-in-up" data-category="marketing ia" style={{transitionDelay: '200ms'}}>
<div className="aspect-video relative overflow-hidden bg-slate-900">
<img alt="Embudo de Ventas con IA" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-xs font-medium text-white border border-white/10">Curso</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors">Embudo de Ventas con IA</h3>
<p className="text-sm font-light text-slate-400 mb-6 flex-grow">Construye sistemas de conversión autónomos. Optimización de copys y segmentación mediante machine learning.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xl font-medium text-white">59€</span>
<button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-md text-sm font-medium border border-white/10 transition-colors flex items-center gap-2">
                                Adquirir <iconify-icon icon="solar:bag-3-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="product-card glass-panel rounded-xl overflow-hidden group hover:border-white/30 transition-all duration-300 flex flex-col fade-in-up" data-category="ia mindset">
<div className="aspect-video relative overflow-hidden bg-slate-900">
<img alt="Productividad y Automatización" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-xs font-medium text-white border border-white/10">Ebook</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-white tracking-tight mb-2 group-hover:text-white transition-colors">Productividad y Automatización</h3>
<p className="text-sm font-light text-slate-400 mb-6 flex-grow">Filosofía operativa para maximizar output. Herramientas, scripts y rutinas para hackear tu tiempo.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xl font-medium text-white">15€</span>
<button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-md text-sm font-medium border border-white/10 transition-colors flex items-center gap-2">
                                Adquirir <iconify-icon icon="solar:bag-3-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="product-card glass-panel rounded-xl overflow-hidden group hover:border-purple-500/30 transition-all duration-300 flex flex-col fade-in-up" data-category="mindset" style={{transitionDelay: '100ms'}}>
<div className="aspect-video relative overflow-hidden bg-slate-900">
<img alt="Crecimiento Personal Digital" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-xs font-medium text-white border border-white/10">Curso</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-white tracking-tight mb-2 group-hover:text-purple-400 transition-colors">Mindset Digital de Éxito</h3>
<p className="text-sm font-light text-slate-400 mb-6 flex-grow">Reseteo mental para emprendedores tecnológicos. Resiliencia, enfoque láser y toma de decisiones asimétricas.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xl font-medium text-white">39€</span>
<button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-md text-sm font-medium border border-white/10 transition-colors flex items-center gap-2">
                                Adquirir <iconify-icon icon="solar:bag-3-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="beneficios">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="fade-in-up">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-6">El estándar corporativo del futuro.</h2>
<p className="text-sm font-light mb-12 max-w-md">No vendemos información, entregamos sistemas. Cada activo de Singularity está diseñado bajo principios de eficiencia implacable y diseño funcional.</p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg glass-panel flex items-center justify-center text-blue-400 shrink-0">
<iconify-icon className="text-2xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Implementación Inmediata</h4>
<p className="text-sm font-light text-slate-400">Frameworks listos para ser aplicados el mismo día. Sin teoría redundante, pura tracción.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg glass-panel flex items-center justify-center text-purple-400 shrink-0">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Arquitectura Verificada</h4>
<p className="text-sm font-light text-slate-400">Metodologías testeadas en entornos reales de alta exigencia corporativa y startups.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg glass-panel flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon className="text-2xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Escalabilidad Infinita</h4>
<p className="text-sm font-light text-slate-400">Diseñados para crecer contigo. Sistemas que no se rompen ante el volumen o la complejidad.</p>
</div>
</div>
</div>
</div>

<div className="space-y-4 fade-in-up" style={{transitionDelay: '200ms'}}>
<div className="glass-panel p-6 rounded-xl relative">
<iconify-icon className="absolute top-4 right-6 text-3xl text-white/5" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm font-light text-slate-300 italic mb-4">"El curso de automatización transformó la operativa de mi agencia. Redujimos horas de trabajo manual en un 70% en dos semanas. Ingeniería pura."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xs text-white">MC</div>
<div>
<div className="text-xs font-medium text-white">Mateo C.</div>
<div className="text-xs text-slate-500">Fundador, TechGrowth</div>
</div>
</div>
</div>
<div className="glass-panel p-6 rounded-xl relative ml-0 md:ml-8">
<iconify-icon className="absolute top-4 right-6 text-3xl text-white/5" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm font-light text-slate-300 italic mb-4">"Directo al grano y con un nivel de profundidad técnico y estratégico que no se encuentra en el mercado hispano. Una inversión que se paga sola."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xs text-white">LV</div>
<div>
<div className="text-xs font-medium text-white">Laura V.</div>
<div className="text-xs text-slate-500">Consultora de Innovación</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30 border-t border-white/5" id="metodo">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-in-up">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">Protocolo de Acceso</h2>
<p className="text-sm font-light">Adquisición segura, entrega instantánea. Sin fricción.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative fade-in-up">

<div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="relative flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center text-white mb-6 relative z-10 bg-slate-950">
<iconify-icon className="text-2xl" icon="solar:cart-large-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium text-white mb-2">1. Selección</h4>
<p className="text-xs font-light text-slate-400 px-4">Elige tu sistema. Proceso de pago encriptado de nivel bancario vía Stripe/PayPal.</p>
</div>
<div className="relative flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center text-white mb-6 relative z-10 bg-slate-950">
<iconify-icon className="text-2xl" icon="solar:letter-opened-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium text-white mb-2">2. Despliegue</h4>
<p className="text-xs font-light text-slate-400 px-4">Acceso inmediato a tu bóveda digital. Materiales descargables y credenciales enviadas a tu inbox.</p>
</div>
<div className="relative flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center text-white mb-6 relative z-10 bg-slate-950">
<iconify-icon className="text-2xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium text-white mb-2">3. Transformación</h4>
<p className="text-xs font-light text-slate-400 px-4">Implementa el conocimiento. Únete al percentil de alto rendimiento digital.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 fade-in-up">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-6">Inicia tu transición digital hoy.</h2>
<p className="text-sm md:text-base font-light mb-10 text-slate-300">El conocimiento obsoleto es el mayor pasivo de una empresa. Actualiza tu sistema operativo.</p>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-950 rounded-lg text-sm font-medium hover:bg-slate-200 transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#productos">
                Accede a Todos los Sistemas Ahora
            </a>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 bg-slate-950">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-white text-base font-medium tracking-tighter flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-lg text-blue-400" icon="solar:cpu-linear"></iconify-icon>
                    S N G L R T Y
                </a>
<p className="text-xs font-light text-slate-500 max-w-xs">Arquitectura digital para mentes que construyen el futuro. Innovación, sistema y resultados.</p>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4 tracking-wider uppercase">Plataforma</h4>
<ul className="space-y-2 text-xs font-light text-slate-400">
<li><a className="hover:text-white transition-colors" href="#productos">Cursos</a></li>
<li><a className="hover:text-white transition-colors" href="#productos">Ebooks</a></li>
<li><a className="hover:text-white transition-colors" href="#metodo">Metodología</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4 tracking-wider uppercase">Legal</h4>
<ul className="space-y-2 text-xs font-light text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Términos de Servicio</a></li>
<li><a className="hover:text-white transition-colors" href="#">Política de Privacidad</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contacto</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4 tracking-wider uppercase">Conectar</h4>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:hashtag-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs font-light text-slate-600">© 2024 Singularity Ecosystem. Todos los derechos reservados.</p>
<div className="flex items-center gap-2 text-xs font-light text-slate-600">
                Sistemas operando al <span className="text-emerald-500 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>100%</span>
</div>
</div>
</footer>



    </>
  );
}
