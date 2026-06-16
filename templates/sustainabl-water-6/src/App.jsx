import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Register GSAP Plugins
        gsap.registerPlugin(ScrollTrigger, Flip);

        // 1. Lenis Smooth Scroll Setup
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Connect GSAP to Lenis
        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                if (arguments.length) {
                    lenis.scrollTo(value, {scrollImmediately: true}); 
                }
                return lenis.scroll;
            },
            getBoundingClientRect() {
                return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
            }
        });

        // 2. Loading Animation
        window.addEventListener("load", () => {
            const tl = gsap.timeline();
            tl.to(".loader-overlay", { opacity: 0, duration: 0.5, pointerEvents: "none" })
              .from("#hero-bg", { scale: 1, duration: 20, ease: "power1.out" }, "-=0.5") // Parallax zoom
              .from(".hero-line", { 
                  y: 100, 
                  opacity: 0, 
                  duration: 1.2, 
                  stagger: 0.15, 
                  ease: "power4.out" 
              }, "-=19.5")
              .from(".hero-sub", { opacity: 0, y: 20, duration: 1 }, "-=0.8")
              .to(".hero-cta", { opacity: 1, y: 0, duration: 1 }, "-=0.8");
        });

        // 3. Navbar Interaction
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('bg-white/80', 'backdrop-blur-md', 'shadow-sm');
                navbar.classList.remove('py-4');
                navbar.classList.add('py-2');
            } else {
                navbar.classList.remove('bg-white/80', 'backdrop-blur-md', 'shadow-sm', 'py-2');
                navbar.classList.add('py-4');
            }
        });

        // 4. Features Stagger
        gsap.from(".feature-card", {
            scrollTrigger: {
                trigger: "#technology",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });

        // 5. Catalog Flip Animation
        const buttons = document.querySelectorAll('.filter-btn');
        const items = document.querySelectorAll('.product-item');
        const toggleBg = document.getElementById('toggle-bg');
        let currentFilter = 'all';

        buttons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                if (filter === currentFilter) return;

                // Move toggle background
                const width = 100 / buttons.length; // Approximate logic for 3 buttons
                // Simplified toggle movement for demo:
                if(index === 0) toggleBg.style.transform = 'translateX(0%)';
                if(index === 1) toggleBg.style.transform = 'translateX(100%)';
                if(index === 2) toggleBg.style.transform = 'translateX(200%)';

                // Update text colors
                buttons.forEach(b => {
                    b.classList.remove('text-white');
                    b.classList.add('text-slate-500');
                });
                btn.classList.remove('text-slate-500');
                btn.classList.add('text-white');

                currentFilter = filter;

                // GSAP Flip Logic
                const state = Flip.getState(items);

                items.forEach(item => {
                    const category = item.dataset.category;
                    if (filter === 'all' || filter === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });

                Flip.from(state, {
                    duration: 0.7,
                    scale: true,
                    absolute: true,
                    ease: "power2.inOut",
                    onEnter: elements => gsap.fromTo(elements, {opacity: 0, scale: 0.8}, {opacity: 1, scale: 1, duration: 0.5}),
                    onLeave: elements => gsap.to(elements, {opacity: 0, scale: 0.8, duration: 0.5})
                });
            });
        });

        // 6. Stats Counter
        const statsSection = document.getElementById('stats');
        ScrollTrigger.create({
            trigger: statsSection,
            start: "top 70%",
            once: true,
            onEnter: () => {
                document.querySelectorAll('.counter').forEach(el => {
                    const target = parseInt(el.getAttribute('data-target'));
                    gsap.to(el, {
                        innerText: target,
                        duration: 2,
                        snap: { innerText: 1 },
                        ease: "power2.out",
                        onUpdate: function() {
                            el.innerHTML = Math.ceil(this.targets()[0].innerText);
                        }
                    });
                });
            }
        });

        // 7. Contact Slide In
        gsap.to(".contact-form-container", {
            scrollTrigger: {
                trigger: "#contact",
                start: "top 70%"
            },
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="loader-overlay" style={{pointerEvents: 'none', opacity: '0'}}>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#00A86B] animate-pulse" icon="lucide:droplets" width="32"></iconify-icon>
</div>
</div>

<nav className="fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<a className="flex items-center gap-2 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center bg-[#00A86B]/10 rounded-full text-[#00A86B] group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon className="absolute -bottom-1 -right-1 text-[#0077BE] bg-white rounded-full border border-white" icon="lucide:droplet" strokeWidth="1.5" width="12"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">PluvialTech</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-[#00A86B] transition-colors" href="#solutions">Soluciones</a>
<a className="hover:text-[#00A86B] transition-colors" href="#technology">Tecnología</a>
<a className="hover:text-[#00A86B] transition-colors" href="#stats">Impacto</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all duration-200 bg-[#00A86B] rounded-full hover:bg-[#008f5b] hover:shadow-lg hover:shadow-[#00A86B]/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A86B]" href="#contact">
                Contacto
            </a>

<button className="md:hidden text-slate-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 bg-slate-900">
<img alt="Water Surface" className="w-full h-full object-cover opacity-60 scale-110" id="hero-bg" src="https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?q=80&amp;w=2530&amp;auto=format&amp;fit=crop" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'scale(1.0141, 1.0141)'}}/>
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
<div className="overflow-hidden mb-2">
<div className="hero-tag inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-xs font-medium tracking-wide">
<span className="w-2 h-2 rounded-full bg-[#00A86B]"></span>
                    INNOVACIÓN EN MAR DEL PLATA
                </div>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
<div className="overflow-hidden"><span className="hero-line block" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>Tu techo, tu fuente</span></div>
<div className="overflow-hidden"><span className="hero-line block" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>de agua <span className="text-[#00A86B] italic">pura.</span></span></div>
</h1>
<div className="max-w-2xl mx-auto overflow-hidden mb-10">
<p className="hero-sub text-lg md:text-xl text-slate-200 font-light leading-relaxed" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 20px)', opacity: '0'}}>
                    Transformamos la lluvia en un recurso vital. Sistemas de filtración inteligente para hogares e industrias comprometidos con el futuro.
                </p>
</div>
<div className="hero-cta opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: '1'}}>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-50 transition-colors duration-300 flex items-center justify-center gap-2 group">
                    Explorar Catálogo
                    <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="lucide:arrow-down" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-colors duration-300">
                    Ver Tecnología
                </button>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-white relative" id="technology">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

<div className="feature-card group cursor-default" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 50px)'}}>
<div className="w-12 h-12 rounded-2xl bg-[#00A86B]/10 flex items-center justify-center text-[#00A86B] mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
<iconify-icon icon="lucide:waves" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">Filtración Molecular</h3>
<p className="text-slate-500 leading-relaxed text-sm md:text-base">
                        Nuestra tecnología elimina el 99.9% de impurezas, metales pesados y sedimentos, garantizando agua cristalina desde la primera gota.
                    </p>
</div>

<div className="feature-card group cursor-default" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 50px)'}}>
<div className="w-12 h-12 rounded-2xl bg-[#0077BE]/10 flex items-center justify-center text-[#0077BE] mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">Autonomía Total</h3>
<p className="text-slate-500 leading-relaxed text-sm md:text-base">
                        Desconéctate de la red cuando lo necesites. Sistemas diseñados para maximizar la recolección pluvial en el clima costero.
                    </p>
</div>

<div className="feature-card group cursor-default" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 50px)'}}>
<div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700 mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
<iconify-icon icon="lucide:sprout" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">Eco-Sostenible</h3>
<p className="text-slate-500 leading-relaxed text-sm md:text-base">
                        Fabricados con polímeros reciclados y diseñados para una vida útil de 20 años. Reduce tu huella hídrica y de carbono.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end gap-8 mb-16 gap-x-8 gap-y-8 justify-between">
<div className="">
<span className="text-[#00A86B] font-semibold text-sm tracking-wide uppercase mb-2 block">Nuestros Productos</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Soluciones a tu medida</h2>
</div>

<div className="bg-white p-1.5 rounded-full border border-slate-200 flex items-center relative shadow-sm">
<div className="w-[calc(50%-6px)] h-[calc(100%-12px)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] bg-slate-900 z-0 rounded-full absolute top-1.5 left-1.5" id="toggle-bg"></div>
<button className="filter-btn z-10 transition-colors duration-300 text-sm font-medium text-white w-32 rounded-full pt-2 pr-6 pb-2 pl-6 relative" data-filter="all">
                        Todos
                    </button>
<button className="filter-btn relative z-10 px-6 py-2 rounded-full text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-300 w-32" data-filter="hogar">
                        Hogar
                    </button>
<button className="filter-btn relative z-10 px-6 py-2 rounded-full text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-300 w-32" data-filter="agro">
                        Agro/Ind
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="product-grid">

<div className="product-item group relative bg-white rounded-3xl p-2 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-shadow duration-300" data-category="hogar">
<div className="overflow-hidden bg-slate-100 h-64 rounded-2xl mb-4 relative">
<img alt="Home Filter" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-slate-700 border border-white/50">Residencial</div>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold text-slate-900">AquaHome Pro</h3>
<span className="text-[#00A86B] font-medium">$450</span>
</div>
<p className="text-sm text-slate-500 mb-4">Compacto y eficiente. Ideal para casas unifamiliares en zonas urbanas.</p>
<button className="w-full py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-colors">Ver Detalles</button>
</div>
</div>

<div className="product-item group relative bg-white rounded-3xl p-2 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-shadow duration-300" data-category="agro">
<div className="bg-slate-100 rounded-2xl h-64 overflow-hidden relative mb-4">
<img alt="Agro Filter" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">Industrial</div>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold text-slate-900">CropRain X1</h3>
<span className="text-[#00A86B] font-medium">Consultar</span>
</div>
<p className="text-sm text-slate-500 mb-4">Sistema de alto caudal para riego automatizado y recuperación de aguas grises.</p>
<button className="w-full py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-colors">Ver Detalles</button>
</div>
</div>

<div className="product-item group relative bg-white rounded-3xl p-2 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-shadow duration-300" data-category="hogar">
<div className="bg-slate-100 rounded-2xl h-64 overflow-hidden relative mb-4">
<img alt="Home Filter Basic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-slate-700 border border-white/50">Residencial</div>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold text-slate-900">EcoTank Mini</h3>
<span className="text-[#00A86B] font-medium">$220</span>
</div>
<p className="text-sm text-slate-500 mb-4">Solución modular para departamentos con balcones o terrazas pequeñas.</p>
<button className="w-full py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-colors">Ver Detalles</button>
</div>
</div>

<div className="product-item group relative bg-white rounded-3xl p-2 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-shadow duration-300" data-category="agro">
<div className="bg-slate-100 rounded-2xl h-64 overflow-hidden relative mb-4">
<img alt="Field" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1463123081488-789f998ac9c4?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">Industrial</div>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold text-slate-900">AgroFlow Max</h3>
<span className="text-[#00A86B] font-medium">Consultar</span>
</div>
<p className="text-sm text-slate-500 mb-4">Filtración masiva para invernaderos y cultivos hidropónicos.</p>
<button className="w-full py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-colors">Ver Detalles</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#00A86B] text-white relative overflow-hidden" id="stats">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="md:w-1/2">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Impacto Real</h2>
<p className="text-emerald-100 text-lg max-w-md">Cada gota cuenta. Ayudamos a la comunidad de Mar del Plata a recuperar millones de litros de agua anualmente.</p>
</div>
<div className="md:w-1/2 flex items-center justify-around w-full">
<div className="text-center">
<div className="text-5xl md:text-6xl font-bold tracking-tight mb-2 flex items-center justify-center">
<span className="counter" data-target="500">0</span>
<span className="text-3xl md:text-4xl ml-1">+</span>
</div>
<p className="text-sm font-medium text-emerald-100 uppercase tracking-widest">Clientes</p>
</div>
<div className="text-center">
<div className="text-5xl md:text-6xl font-bold tracking-tight mb-2 flex items-center justify-center">
<span className="counter" data-target="98">0</span>
<span className="text-3xl md:text-4xl ml-1">%</span>
</div>
<p className="text-sm font-medium text-emerald-100 uppercase tracking-widest">Eficiencia</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="contact">
<div className="flex flex-col lg:flex-row gap-16 items-start">
<div className="lg:w-5/12">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 text-slate-900 mb-6">
<iconify-icon icon="lucide:mail" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Comienza tu transición sostenible</h2>
<p className="text-slate-500 mb-8 text-lg">
                    Estamos listos para diseñar el sistema perfecto para tu propiedad. Solicita una cotización sin cargo.
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4 text-slate-600">
<iconify-icon className="text-[#00A86B]" icon="lucide:map-pin" width="20"></iconify-icon>
<span>Parque Industrial, Mar del Plata</span>
</div>
<div className="flex items-center gap-4 text-slate-600">
<iconify-icon className="text-[#00A86B]" icon="lucide:phone" width="20"></iconify-icon>
<span>+54 (223) 555-0199</span>
</div>
<div className="flex items-center gap-4 text-slate-600">
<iconify-icon className="text-[#00A86B]" icon="lucide:mail" width="20"></iconify-icon>
<span>contacto@pluvialtech.com</span>
</div>
</div>
</div>
<div className="lg:w-7/12 w-full contact-form-container opacity-0 translate-x-[50px]" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(50px, 0px)'}}>
<form className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/40">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-xs font-semibold uppercase text-slate-500 tracking-wider mb-2">Nombre</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B]/20 focus:border-[#00A86B] transition-all" placeholder="Juan Perez" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase text-slate-500 tracking-wider mb-2">Email</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B]/20 focus:border-[#00A86B] transition-all" placeholder="juan@empresa.com" type="email"/>
</div>
</div>
<div className="mb-6">
<label className="block text-xs font-semibold uppercase text-slate-500 tracking-wider mb-2">Tipo de Proyecto</label>
<select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B]/20 focus:border-[#00A86B] transition-all text-slate-600">
<option>Residencial</option>
<option>Industrial / Agro</option>
<option>Barrio Privado</option>
</select>
</div>
<div className="mb-8">
<label className="block text-xs font-semibold uppercase text-slate-500 tracking-wider mb-2">Mensaje</label>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B]/20 focus:border-[#00A86B] transition-all" placeholder="Cuéntanos sobre tu necesidad..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-[#00A86B] text-white rounded-xl font-semibold hover:bg-[#008f5b] transition-all transform hover:scale-[1.02] active:scale-[0.98]" type="button">
                        Enviar Consulta
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-slate-900 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-[#00A86B]" icon="lucide:droplets" width="20"></iconify-icon>
<span className="font-medium tracking-tight">PluvialTech</span>
</div>
<p className="text-slate-400 text-sm">© 2023 PluvialTech Argentina. Todos los derechos reservados.</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
