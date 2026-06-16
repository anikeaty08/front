import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Init Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Horizontal Scroll for Desarrollos
        document.addEventListener('DOMContentLoaded', () => {
            const desContainer = document.getElementById('desarrollos');
            const desTrack = document.getElementById('desarrollos-track');

            if (desContainer && desTrack) {
                function updateLayout() {
                    const trackWidth = desTrack.scrollWidth;
                    const viewportWidth = window.innerWidth;
                    
                    if (trackWidth > viewportWidth) {
                        const scrollDistance = trackWidth - viewportWidth;
                        // Dynamically scale the container height to accurately represent the hidden horizontal content
                        desContainer.style.height = `calc(100vh + ${scrollDistance}px)`;
                    } else {
                        // Fallback behavior if screen is very wide
                        desContainer.style.height = '100vh';
                        desTrack.style.transform = 'translate3d(0, 0, 0)';
                    }
                    updateDesarrollosScroll();
                }

                function updateDesarrollosScroll() {
                    const trackWidth = desTrack.scrollWidth;
                    const viewportWidth = window.innerWidth;
                    
                    if (trackWidth <= viewportWidth) return;

                    const rect = desContainer.getBoundingClientRect();
                    const maxScrollY = rect.height - window.innerHeight;
                    const scrollY = -rect.top; // How far we've scrolled within the container
                    
                    // Prevent transform outside boundaries
                    let progress = scrollY / maxScrollY;
                    progress = Math.max(0, Math.min(1, progress));
                    
                    const maxScrollX = trackWidth - viewportWidth;
                    
                    // Hardware accelerated transform for smooth horizontal scroll
                    desTrack.style.transform = `translate3d(-${progress * maxScrollX}px, 0, 0)`;
                }

                window.addEventListener('scroll', updateDesarrollosScroll, { passive: true });
                window.addEventListener('resize', updateLayout);
                
                // Call initially to set up correct layout size
                updateLayout();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 opacity-60" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div></div>

<header className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-center pointer-events-none">
<div className="w-full max-w-6xl flex justify-between items-center pointer-events-auto bg-white/80 backdrop-blur-md border border-zinc-200/50 rounded-2xl px-6 py-3 shadow-sm transition-all">
<a className="flex items-center text-zinc-900 gap-2 group shrink-0" href="#">
<div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white transition-transform group-hover:scale-105">
<i className="w-5 h-5" data-lucide="package"></i>
</div>
<span className="text-2xl tracking-tight font-normal">Diavsa</span>
</a>
<nav className="hidden lg:flex items-center gap-6 xl:gap-8">
<a className="text-xs font-medium tracking-widest uppercase text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Home</a>
<a className="text-xs font-medium tracking-widest uppercase text-zinc-600 hover:text-zinc-900 transition-colors" href="#que-hacemos">Que Hacemos</a>
<a className="text-xs font-medium tracking-widest uppercase text-zinc-600 hover:text-zinc-900 transition-colors" href="#desarrollos">Desarrollos</a>
<a className="text-xs font-medium tracking-widest uppercase text-zinc-600 hover:text-zinc-900 transition-colors" href="#clientes">Clientes</a>
<a className="text-xs font-medium tracking-widest uppercase text-zinc-600 hover:text-zinc-900 transition-colors" href="#marcas">Nuestras Marcas</a>
<a className="text-xs font-medium tracking-widest uppercase text-zinc-600 hover:text-zinc-900 transition-colors" href="#contacto">Contacto</a>
</nav>
<button className="lg:hidden text-zinc-600 hover:text-zinc-900 transition-colors flex items-center p-1 rounded-full hover:bg-zinc-100">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>
<main className="flex-grow flex flex-col w-full items-center">

<section className="md:pt-52 md:pb-32 flex flex-col overflow-hidden text-center w-full max-w-6xl pt-40 pr-6 pb-20 pl-6 relative items-center">
<div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-blue-100 rounded-full opacity-40 pointer-events-none -z-10 blur-3xl"></div>
<div className="absolute -left-20 top-40 w-[400px] h-[400px] bg-emerald-50 rounded-full opacity-40 pointer-events-none -z-10 blur-3xl"></div>
<div className="relative max-w-4xl flex flex-col items-center">
<h1 className="text-5xl md:text-7xl font-normal tracking-tight leading-tight mb-6 text-zinc-900">
                    Estrategia e integración de punta a punta para el <span className="text-blue-600 relative">B2B</span>
</h1>
<p className="text-lg md:text-xl font-normal text-zinc-500 mb-10 max-w-2xl leading-relaxed">
                    Especialistas en soluciones B2B integrales, conectando investigación, diseño y producción para optimizar la relación entre clientes y proveedores.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="hover:bg-blue-700 transition-colors flex justify-center items-center gap-2 sm:w-auto text-base font-medium text-white bg-green-500 w-full rounded-full px-8 py-4" href="#contacto">
                        Contáctanos
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="w-full max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center gap-8 overflow-hidden border-y border-zinc-200/50 bg-white/50">
<p className="text-base font-normal text-zinc-400 whitespace-nowrap">Conectamos con los líderes del retail</p>
<div className="flex-grow w-full overflow-hidden mask-edges">
<div className="animate-marquee gap-12 py-2 items-center flex opacity-60">
<span className="text-2xl font-normal tracking-tight text-zinc-500">Paris</span>
<span className="text-2xl font-normal tracking-tight text-zinc-500">Falabella</span>
<span className="text-2xl font-normal tracking-tight text-zinc-500">Ripley</span>
<span className="text-2xl font-normal tracking-tight text-zinc-500">Johnson</span>
<span className="text-2xl font-normal tracking-tight text-zinc-500">Easy</span>
<span className="text-2xl font-normal tracking-tight text-zinc-500">Isadora</span>
<span className="text-2xl font-normal tracking-tight text-zinc-500">Walmart</span>
<span className="text-2xl font-normal tracking-tight text-zinc-500">Tottus</span>
<span className="text-2xl font-normal tracking-tight text-zinc-500">Tomoda</span>
<span className="text-2xl font-normal tracking-tight text-zinc-500">Hites</span>
<span className="text-2xl font-normal tracking-tight text-zinc-500">Jumbo</span>
<span className="text-2xl font-normal tracking-tight text-zinc-500">Salcobrand</span>
<span className="text-2xl font-normal tracking-tight text-zinc-500">Cruz Verde</span>
<span className="text-2xl font-normal tracking-tight text-zinc-500">La Polar</span>

<span className="text-2xl font-normal tracking-tight text-zinc-500">Paris</span>
<span className="text-2xl font-normal tracking-tight text-zinc-500">Falabella</span>
<span className="text-2xl font-normal tracking-tight text-zinc-500">Ripley</span>
<span className="text-2xl font-normal tracking-tight text-zinc-500">Johnson</span>
<span className="text-2xl font-normal tracking-tight text-zinc-500">Easy</span>
</div>
</div>
</section>

<section className="w-full max-w-6xl px-6 py-24 md:py-32 flex flex-col items-center scroll-mt-24" id="que-hacemos">
<div className="mb-16 flex flex-col items-center text-center">
<span className="bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium px-4 py-1.5 rounded-full mb-6 shadow-sm">Qué hacemos</span>
<h2 className="md:text-5xl text-4xl font-normal text-zinc-900 tracking-tight max-w-2xl">Soluciones de <span className="text-blue-600">valor</span> punta a punta.</h2>
</div>

<div className="w-full flex flex-col items-center mb-24">
<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-zinc-200 border border-zinc-200 rounded-[2rem] overflow-hidden shadow-sm">

<div className="bg-white p-8 flex flex-col h-full group hover:bg-zinc-50/50 transition-colors relative">
<div className="absolute top-8 right-8 text-4xl font-light text-zinc-100 group-hover:text-blue-50 transition-colors pointer-events-none">01</div>
<div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 mb-6 group-hover:bg-white group-hover:border-blue-200 group-hover:text-blue-600 transition-all shadow-sm">
<i className="w-6 h-6" data-lucide="lightbulb"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-zinc-900 mb-3 relative z-10">Idea</h3>
<p className="text-base font-normal text-zinc-500 leading-relaxed relative z-10">Idea inicial y punto de partida del proyecto.</p>
</div>

<div className="bg-white p-8 flex flex-col h-full group hover:bg-zinc-50/50 transition-colors relative">
<div className="absolute top-8 right-8 text-4xl font-light text-zinc-100 group-hover:text-blue-50 transition-colors pointer-events-none">02</div>
<div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 mb-6 group-hover:bg-white group-hover:border-blue-200 group-hover:text-blue-600 transition-all shadow-sm">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-zinc-900 mb-3 relative z-10">Diseño Específico</h3>
<p className="text-base font-normal text-zinc-500 leading-relaxed relative z-10">En conjunto con el cliente se desarrolla una línea de diseño específico para él.</p>
</div>

<div className="bg-white p-8 flex flex-col h-full group hover:bg-zinc-50/50 transition-colors relative">
<div className="absolute top-8 right-8 text-4xl font-light text-zinc-100 group-hover:text-blue-50 transition-colors pointer-events-none">03</div>
<div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 mb-6 group-hover:bg-white group-hover:border-blue-200 group-hover:text-blue-600 transition-all shadow-sm">
<i className="w-6 h-6" data-lucide="flask-conical"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-zinc-900 mb-3 relative z-10">Chequeo</h3>
<p className="text-base font-normal text-zinc-500 leading-relaxed relative z-10">Proceso de registro y chequeo de formulaciones.</p>
</div>

<div className="bg-white p-8 flex flex-col h-full group hover:bg-zinc-50/50 transition-colors relative">
<div className="absolute top-8 right-8 text-4xl font-light text-zinc-100 group-hover:text-blue-50 transition-colors pointer-events-none">04</div>
<div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 mb-6 group-hover:bg-white group-hover:border-blue-200 group-hover:text-blue-600 transition-all shadow-sm">
<i className="w-6 h-6" data-lucide="package"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-zinc-900 mb-3 relative z-10">Propuesta</h3>
<p className="text-base font-normal text-zinc-500 leading-relaxed relative z-10">Propuesta producto. Presentación de "la idea" al cliente.</p>
</div>

<div className="bg-white p-8 flex flex-col h-full group hover:bg-zinc-50/50 transition-colors relative">
<div className="absolute top-8 right-8 text-4xl font-light text-zinc-100 group-hover:text-blue-50 transition-colors pointer-events-none">05</div>
<div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 mb-6 group-hover:bg-white group-hover:border-blue-200 group-hover:text-blue-600 transition-all shadow-sm">
<i className="w-6 h-6" data-lucide="settings"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-zinc-900 mb-3 relative z-10">Producción</h3>
<p className="text-base font-normal text-zinc-500 leading-relaxed relative z-10">Proceso de producción para los artículos aprobados.</p>
</div>

<div className="bg-white p-8 flex flex-col h-full group hover:bg-zinc-50/50 transition-colors relative">
<div className="absolute top-8 right-8 text-4xl font-light text-zinc-100 group-hover:text-blue-50 transition-colors pointer-events-none">06</div>
<div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 mb-6 group-hover:bg-white group-hover:border-blue-200 group-hover:text-blue-600 transition-all shadow-sm">
<i className="w-6 h-6" data-lucide="ship"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-zinc-900 mb-3 relative z-10">Embarque</h3>
<p className="text-base font-normal text-zinc-500 leading-relaxed relative z-10">Gestión logística y proceso de embarque internacional.</p>
</div>

<div className="bg-white p-8 flex flex-col h-full group hover:bg-zinc-50/50 transition-colors relative">
<div className="absolute top-8 right-8 text-4xl font-light text-zinc-100 group-hover:text-blue-50 transition-colors pointer-events-none">07</div>
<div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 mb-6 group-hover:bg-white group-hover:border-blue-200 group-hover:text-blue-600 transition-all shadow-sm">
<i className="w-6 h-6" data-lucide="truck"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-zinc-900 mb-3 relative z-10">Internación</h3>
<p className="text-base font-normal text-zinc-500 leading-relaxed relative z-10">Trámites aduaneros y proceso de internación.</p>
</div>

<div className="bg-zinc-900 p-8 flex flex-col h-full group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-8 right-8 text-4xl font-light text-zinc-800 pointer-events-none">08</div>
<div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-blue-400 mb-6 shadow-sm relative z-10">
<i className="w-6 h-6" data-lucide="shopping-bag"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-white mb-3 relative z-10">Venta en Tienda</h3>
<p className="text-base font-normal text-zinc-400 leading-relaxed relative z-10">Producto en venta en tienda disponible para el cliente.</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

<div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
<div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-zinc-50 to-transparent flex flex-col items-center justify-center p-6 opacity-80 group-hover:opacity-100 transition-opacity">
<div className="w-32 h-32 rounded-full border-4 border-dashed border-zinc-200 flex items-center justify-center bg-white group-hover:border-blue-200 group-hover:scale-105 transition-all duration-500">
<i className="w-10 h-10 text-blue-500" data-lucide="search"></i>
</div>
</div>
<div className="relative z-10 mt-auto bg-white pt-4">
<h3 className="text-2xl font-normal tracking-tight text-zinc-900 mb-2">Investigación</h3>
<p className="text-base font-normal text-zinc-500 leading-relaxed">Análisis profundo del mercado. Entendemos las necesidades de los compradores del retail para diseñar estrategias efectivas.</p>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
<div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-zinc-50 to-transparent flex flex-col items-center justify-center p-6 opacity-80 group-hover:opacity-100 transition-opacity">
<div className="flex gap-2 group-hover:translate-y-2 transition-transform duration-500">
<div className="w-12 h-24 bg-zinc-100 rounded-xl border border-zinc-200 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors"></div>
<div className="w-12 h-32 bg-zinc-200 rounded-xl border border-zinc-300 group-hover:bg-blue-100 group-hover:border-blue-200 transition-colors"></div>
<div className="w-12 h-20 bg-zinc-100 rounded-xl border border-zinc-200 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors"></div>
</div>
</div>
<div className="relative z-10 mt-auto bg-white pt-4">
<h3 className="text-2xl font-normal tracking-tight text-zinc-900 mb-2">Diseño</h3>
<p className="text-base font-normal text-zinc-500 leading-relaxed">Estrategias centradas en el usuario. Creamos experiencias y productos que conectan marcas con sus audiencias objetivo.</p>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm flex flex-col justify-end min-h-[400px] relative overflow-hidden group md:col-span-1 sm:col-span-2">
<div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-zinc-50 to-transparent flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
<div className="w-32 h-32 rounded-2xl bg-zinc-100 border border-zinc-200 rotate-12 flex items-center justify-center group-hover:rotate-0 group-hover:bg-emerald-50 transition-all duration-500">
<i className="w-10 h-10 text-emerald-500" data-lucide="layers"></i>
</div>
</div>
<div className="relative z-10 mt-auto bg-white pt-4">
<h3 className="text-2xl font-normal tracking-tight text-zinc-900 mb-2">Producción</h3>
<p className="text-base font-normal text-zinc-500 leading-relaxed">Integración total. Gestionamos la implementación de punta a punta, asegurando calidad y tiempos de entrega impecables.</p>
</div>
</div>
</div>
</section>

<div className="relative bg-zinc-900 w-full scroll-mt-24" id="desarrollos">
<section className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
<div className="mb-12 flex flex-col items-center text-center px-6 mt-12 md:mt-0">
<h2 className="md:text-4xl text-3xl font-normal text-white tracking-tight mb-2">Desarrollos</h2>
<p className="text-base font-normal text-zinc-400">Proyectos integrales.</p>
</div>
<div className="w-full relative">
<div className="flex gap-4 px-6 w-max will-change-transform" id="desarrollos-track">

<div className="w-64 h-72 lg:w-72 lg:h-80 relative rounded-2xl overflow-hidden flex-shrink-0 group bg-zinc-800 border border-zinc-700">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-zinc-800/50 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<i className="w-10 h-10 text-zinc-600 group-hover:text-blue-400 transition-colors" data-lucide="sparkles"></i>
</div>
<div className="absolute bottom-5 left-5 right-5">
<div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4">
<h3 className="text-white font-normal text-xl tracking-tight">Maquillaje</h3>
</div>
</div>
</div>

<div className="w-64 h-72 lg:w-72 lg:h-80 relative rounded-2xl overflow-hidden flex-shrink-0 group bg-zinc-800 border border-zinc-700">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/50 to-zinc-800/50 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<i className="w-10 h-10 text-zinc-600 group-hover:text-emerald-400 transition-colors" data-lucide="droplets"></i>
</div>
<div className="absolute bottom-5 left-5 right-5">
<div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4">
<h3 className="text-white font-normal text-xl tracking-tight">Corporal</h3>
</div>
</div>
</div>

<div className="w-64 h-72 lg:w-72 lg:h-80 relative rounded-2xl overflow-hidden flex-shrink-0 group bg-zinc-800 border border-zinc-700">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-zinc-800/50 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<i className="w-10 h-10 text-zinc-600 group-hover:text-blue-400 transition-colors" data-lucide="bath"></i>
</div>
<div className="absolute bottom-5 left-5 right-5">
<div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4">
<h3 className="text-white font-normal text-xl tracking-tight">Set de baño</h3>
</div>
</div>
</div>

<div className="w-64 h-72 lg:w-72 lg:h-80 relative rounded-2xl overflow-hidden flex-shrink-0 group bg-zinc-800 border border-zinc-700">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/50 to-zinc-800/50 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<i className="w-10 h-10 text-zinc-600 group-hover:text-emerald-400 transition-colors" data-lucide="baby"></i>
</div>
<div className="absolute bottom-5 left-5 right-5">
<div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4">
<h3 className="text-white font-normal text-xl tracking-tight">Infantil</h3>
</div>
</div>
</div>

<div className="w-64 h-72 lg:w-72 lg:h-80 relative rounded-2xl overflow-hidden flex-shrink-0 group bg-zinc-800 border border-zinc-700">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-zinc-800/50 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<i className="w-10 h-10 text-zinc-600 group-hover:text-blue-400 transition-colors" data-lucide="user"></i>
</div>
<div className="absolute bottom-5 left-5 right-5">
<div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4">
<h3 className="text-white font-normal text-xl tracking-tight">Hombre</h3>
</div>
</div>
</div>

<div className="w-64 h-72 lg:w-72 lg:h-80 relative rounded-2xl overflow-hidden flex-shrink-0 group bg-zinc-800 border border-zinc-700">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/50 to-zinc-800/50 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<i className="w-10 h-10 text-zinc-600 group-hover:text-emerald-400 transition-colors" data-lucide="notebook"></i>
</div>
<div className="absolute bottom-5 left-5 right-5">
<div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4">
<h3 className="text-white font-normal text-xl tracking-tight">Papelería</h3>
</div>
</div>
</div>

<div className="w-64 h-72 lg:w-72 lg:h-80 relative rounded-2xl overflow-hidden flex-shrink-0 group bg-zinc-800 border border-zinc-700">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-zinc-800/50 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<i className="w-10 h-10 text-zinc-600 group-hover:text-blue-400 transition-colors" data-lucide="zap"></i>
</div>
<div className="absolute bottom-5 left-5 right-5">
<div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4">
<h3 className="text-white font-normal text-xl tracking-tight">Impulsividad</h3>
</div>
</div>
</div>

<div className="w-64 h-72 lg:w-72 lg:h-80 relative rounded-2xl overflow-hidden flex-shrink-0 group bg-zinc-800 border border-zinc-700">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/50 to-zinc-800/50 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<i className="w-10 h-10 text-zinc-600 group-hover:text-emerald-400 transition-colors" data-lucide="shirt"></i>
</div>
<div className="absolute bottom-5 left-5 right-5">
<div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4">
<h3 className="text-white font-normal text-xl tracking-tight">Textil</h3>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="md:py-32 flex flex-col overflow-hidden min-h-[500px] border-y scroll-mt-24 bg-zinc-100/30 w-full border-zinc-200/50 pt-20 pb-20 relative items-center justify-center" id="clientes">
<div className="absolute inset-0 w-full h-full overflow-hidden opacity-40 pointer-events-none">
<div className="absolute top-[15%] left-[10%] bg-white border border-zinc-200 px-4 py-2 rounded-xl text-sm font-normal text-zinc-400 shadow-sm">Paris</div>
<div className="absolute bottom-[20%] left-[15%] bg-white border border-zinc-200 px-4 py-2 rounded-xl text-sm font-normal text-zinc-400 shadow-sm">Falabella</div>
<div className="absolute top-[30%] left-[25%] bg-white border border-zinc-200 px-4 py-2 rounded-xl text-sm font-normal text-zinc-400 shadow-sm">Ripley</div>
<div className="absolute bottom-[25%] left-[35%] bg-white border border-zinc-200 px-4 py-2 rounded-xl text-sm font-normal text-zinc-400 shadow-sm">Walmart</div>
<div className="absolute top-[20%] right-[20%] bg-white border border-zinc-200 px-4 py-2 rounded-xl text-sm font-normal text-zinc-400 shadow-sm">Jumbo</div>
<div className="absolute bottom-[30%] right-[25%] bg-white border border-zinc-200 px-4 py-2 rounded-xl text-sm font-normal text-zinc-400 shadow-sm">Cruz Verde</div>
<div className="absolute top-[40%] right-[10%] bg-white border border-zinc-200 px-4 py-2 rounded-xl text-sm font-normal text-zinc-400 shadow-sm">Salcobrand</div>
</div>
<div className="relative z-10 flex flex-col items-center gap-8 max-w-2xl px-6 text-center">
<h2 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-normal text-zinc-900 tracking-tight">Nuestros <span className="text-blue-600">clientes</span>.</h2>
</div>
</section>

<section className="w-full max-w-6xl px-6 py-24 md:py-32 flex flex-col items-center overflow-hidden scroll-mt-24" id="marcas">
<div className="mb-16 flex flex-col items-center text-center">
<span className="bg-white border border-zinc-200 text-zinc-600 text-xs font-medium px-4 py-1.5 rounded-full mb-6 shadow-sm">Marcas Propias</span>
<h2 className="md:text-5xl text-4xl font-normal text-zinc-900 tracking-tight max-w-lg">Conoce <span className="text-blue-600">nuestras marcas</span>.</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full mb-16">

<div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col items-center justify-center gap-4 hover:border-blue-200 transition-colors group">
<div className="w-16 h-16 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:text-blue-500 transition-colors">
<i className="w-8 h-8" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-zinc-900">Marca Alpha</h3>
</div>

<div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col items-center justify-center gap-4 hover:border-blue-200 transition-colors group">
<div className="w-16 h-16 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:text-blue-500 transition-colors">
<i className="w-8 h-8" data-lucide="crown"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-zinc-900">Marca Beta</h3>
</div>

<div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col items-center justify-center gap-4 hover:border-blue-200 transition-colors group">
<div className="w-16 h-16 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:text-blue-500 transition-colors">
<i className="w-8 h-8" data-lucide="leaf"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-zinc-900">Marca Gamma</h3>
</div>

<div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col items-center justify-center gap-4 hover:border-emerald-200 transition-colors group">
<div className="w-16 h-16 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:text-emerald-500 transition-colors">
<i className="w-8 h-8" data-lucide="droplets"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-zinc-900">Marca Delta</h3>
</div>

<div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col items-center justify-center gap-4 hover:border-emerald-200 transition-colors group">
<div className="w-16 h-16 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:text-emerald-500 transition-colors">
<i className="w-8 h-8" data-lucide="globe"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-zinc-900">Marca Epsilon</h3>
</div>

<div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col items-center justify-center gap-4 hover:border-emerald-200 transition-colors group">
<div className="w-16 h-16 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:text-emerald-500 transition-colors">
<i className="w-8 h-8" data-lucide="trophy"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-zinc-900">Marca Zeta</h3>
</div>
</div>
</section>
</main>

<footer className="bg-zinc-950 text-white pt-24 pb-12 px-6 w-full flex flex-col items-center">
<div className="w-full max-w-6xl flex flex-col md:flex-row justify-between gap-16 mb-24">
<div className="w-full md:w-1/2 flex flex-col items-start justify-center">
<a className="flex items-center text-white mb-8 gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="package"></i>
</div>
<span className="text-3xl tracking-tight font-normal">Diavsa</span>
</a>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight leading-tight mb-6">
                    Estrategia que <span className="text-emerald-400">conecta.</span>
</h2>
<p className="text-base font-normal text-zinc-400 mb-10 max-w-md leading-relaxed">
                    Estrategia e integración de punta a punta para el ecosistema B2B. Conectando investigación, diseño y producción.
                </p>
<a className="bg-blue-600 hover:bg-blue-700 text-white transition-colors rounded-full py-4 px-8 text-base font-medium inline-flex" href="#contacto">
                    Conversemos
                </a>
</div>
<div className="w-full md:w-1/3 flex flex-col gap-8">
<div>
<h4 className="text-xl font-normal tracking-tight mb-4 text-white">Contacto</h4>
<ul className="flex flex-col gap-3 text-base text-zinc-400 font-normal">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="mailto:contacto@diavsa.cl"><i className="w-5 h-5" data-lucide="mail"></i> contacto@diavsa.cl</a></li>
<li><span className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="phone"></i> +56 9 1234 5678</span></li>
<li><span className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="map-pin"></i> Santiago, Chile</span></li>
</ul>
</div>
</div>
</div>
<div className="w-full max-w-6xl border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-normal text-zinc-500">
<p>© 2024 Diavsa. Todos los derechos reservados.</p>
<div className="flex items-center gap-6">
<a className="hover:text-zinc-300 transition-colors" href="#">Términos de Servicio</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Política de Privacidad</a>
</div>
</div>
</footer>


    </>
  );
}
