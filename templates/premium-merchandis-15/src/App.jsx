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
    


        document.addEventListener('DOMContentLoaded', () => {
            // Scroll reveal animation observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        entry.target.style.opacity = '1';
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
            });

            // Flashlight card hover effect logic
            document.querySelectorAll('.flashlight-card').forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 -z-20 w-full h-screen pointer-events-none" data-us-project="qPVvnWEWLLiJgYtSkKyB"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/[0.03] blur-[100px] rounded-full -z-10 pointer-events-none"></div>

<nav className="fixed z-50 flex px-4 top-6 right-0 left-0 justify-center">
<div className="flex gap-8 shadow-black/50 bg-zinc-950/80 w-full max-w-3xl border border-white/10 rounded-full py-2 pl-6 pr-2 shadow-2xl backdrop-blur-xl items-center justify-between">

<a className="text-base font-medium tracking-tight text-white flex items-center gap-2" href="#">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
                IMBLASCO
            </a>

<div className="hidden md:flex gap-8 text-xs font-normal text-zinc-400 items-center">
<a className="hover:text-white transition-colors" href="#services">Capacidades</a>
<a className="hover:text-white transition-colors" href="#products">Líneas de Productos</a>
<a className="hover:text-white transition-colors" href="#logistics">Abastecimiento Global</a>
</div>

<a className="hover:bg-zinc-200 transition-colors flex items-center gap-2 text-xs font-medium text-black bg-white rounded-full py-2 px-5" href="#contact">
<span>Ver Catálogo</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>
<main className="z-10 pt-48 pb-24 relative">

<section className="container flex flex-col text-center max-w-4xl mx-auto mb-32 px-6 items-center">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 mb-8 font-normal" style={{animationPlayState: 'running'}}>
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Catálogo Corporativo 2024 Ya Disponible
            </div>

<h1 className="reveal delay-100 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-8 leading-[1.05]" style={{animationPlayState: 'running'}}>
                Eleva tu marca.<br/>
                Merchandising premium.
            </h1>

<p className="reveal delay-200 md:text-lg text-base font-normal text-zinc-400 max-w-xl mx-auto mb-12 leading-relaxed" style={{animationPlayState: 'running'}}>
                Importamos, fabricamos y personalizamos productos promocionales de alto impacto. Convierte artículos de uso diario en poderosas experiencias corporativas que resuenen con tu audiencia.
            </p>
</section>

<section className="container max-w-6xl mx-auto mb-32 px-6" id="services">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7 flashlight-card group flex flex-col min-h-[480px] bg-zinc-950/80 backdrop-blur-md border border-white/10 rounded-3xl p-10 justify-between" style={{-MouseX: '305px', -MouseY: '426px'}}>
<div className="relative z-10">
<div className="flex bg-white/5 text-white w-12 h-12 border border-white/10 rounded-xl mb-8 items-center justify-center">
<iconify-icon icon="solar:global-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-medium tracking-tight mb-4">Abastecimiento Global e Importación</h2>
<p className="text-sm font-normal text-zinc-400 max-w-md leading-relaxed">
                            Navega por las complejidades del comercio internacional con facilidad. Gestionamos las compras, el control de calidad, las aduanas y la entrega directa para garantizar que tu mercancía llegue de forma impecable.
                        </p>
</div>
<div className="z-10 mt-12 relative flex flex-col items-start gap-8">
<div className="space-y-4 w-full">
<div className="flex items-center gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Relaciones directas con fábricas a nivel mundial</span>
</div>
<div className="flex items-center gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Procesos rigurosos de control de calidad</span>
</div>
<div className="flex items-center gap-3 text-sm font-normal text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Gestión logística de extremo a extremo</span>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-6 py-2.5 transition-all group/btn" href="#contact">
                            Consulta con nuestros expertos
                            <iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6">

<div className="flex-1 border border-white/10 bg-zinc-950/80 backdrop-blur-md rounded-3xl p-8 flashlight-card relative overflow-hidden group" style={{-MouseX: '59.09375px', -MouseY: '276px'}}>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Fabricación a Medida</h3>
<p className="text-sm font-normal text-zinc-400 leading-relaxed">
                                No te conformes con lo convencional. Ofrecemos líneas de producción hechas a medida, adaptadas a las especificaciones exactas, colores y materiales de tu marca.
                            </p>
</div>
</div>

<div className="flex flex-col flashlight-card text-center bg-zinc-900/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 items-center justify-center" style={{-MouseX: '91.09375px', -MouseY: '185px'}}>
<h3 className="text-xl font-medium tracking-tight mb-2">¿Necesitas ideas para tu próxima campaña?</h3>
<p className="text-zinc-500 font-normal text-xs mb-6">Nuestro equipo creativo está listo para ayudarte.</p>
<a className="hover:bg-white/90 transition-colors flex items-center justify-center gap-2 text-sm font-medium text-black bg-white w-full rounded-xl py-3" href="#contact">
                            Solicitar una Propuesta
                            <iconify-icon icon="solar:document-text-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="container max-w-6xl mr-auto mb-32 ml-auto pr-6 pl-6" id="logistics">
<div className="flex mb-12 items-end justify-between">
<h2 className="md:text-4xl leading-tight text-3xl font-medium tracking-tight">
                    Nuestras líneas de productos.<br/>
                    Calidad en cada detalle.
                </h2>
<div className="hidden md:block text-right">
<p className="text-zinc-500 text-sm font-normal uppercase tracking-widest">Catálogo</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="flashlight-card flex flex-col bg-zinc-950/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 gap-4 group transition-colors cursor-default hover:bg-zinc-900/40">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white tracking-tight mb-2">Belleza y Salud</h4>
<p className="text-base font-normal text-zinc-400 leading-relaxed">
                            Artículos de cuidado personal, sets de spa y bienestar corporativo.
                        </p>
</div>
</div>

<div className="flashlight-card flex flex-col bg-zinc-950/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 gap-4 group transition-colors cursor-default hover:bg-zinc-900/40">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white tracking-tight mb-2">Entretención y Outdoor</h4>
<p className="text-base font-normal text-zinc-400 leading-relaxed">
                            Equipamiento para actividades al aire libre, juegos y recreación.
                        </p>
</div>
</div>

<div className="flashlight-card flex flex-col bg-zinc-950/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 gap-4 group transition-colors cursor-default hover:bg-zinc-900/40">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white tracking-tight mb-2">Línea Bamboo</h4>
<p className="text-base font-normal text-zinc-400 leading-relaxed">
                            Productos ecológicos y sustentables con acabados premium en bambú.
                        </p>
</div>
</div>

<div className="flashlight-card flex flex-col bg-zinc-950/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 gap-4 group transition-colors cursor-default hover:bg-zinc-900/40">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white tracking-tight mb-2">Línea Cobre</h4>
<p className="text-base font-normal text-zinc-400 leading-relaxed">
                            Artículos de alta gama con terminaciones en cobre, combinando elegancia y durabilidad.
                        </p>
</div>
</div>

<div className="flashlight-card flex flex-col bg-zinc-950/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 gap-4 group transition-colors cursor-default hover:bg-zinc-900/40">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white tracking-tight mb-2">Productos para Sublimación</h4>
<p className="text-base font-normal text-zinc-400 leading-relaxed">
                            Artículos en blanco ideales para personalización completa y vibrante.
                        </p>
</div>
</div>

<div className="flashlight-card flex flex-col bg-zinc-950/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 gap-4 group transition-colors cursor-default hover:bg-zinc-900/40">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white tracking-tight mb-2">Regalos y Trofeos Premium</h4>
<p className="text-base font-normal text-zinc-400 leading-relaxed">
                            Reconocimientos exclusivos y obsequios corporativos de la más alta calidad.
                        </p>
</div>
</div>
</div>
</section>

<section className="border-y border-white/10 mb-32 py-16 relative bg-zinc-900/40 backdrop-blur-md">
<div className="container flex flex-col md:flex-row max-w-6xl mx-auto px-6 gap-8 items-center justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Construye tu catálogo corporativo.</h2>
<p className="text-sm font-normal text-zinc-400">Explora miles de productos personalizables en múltiples categorías.</p>
</div>
<button className="group relative px-8 py-3 bg-transparent border border-white/20 text-white text-sm font-medium rounded-full overflow-hidden hover:border-white transition-colors whitespace-nowrap">
<span className="relative z-10 flex items-center gap-2">
                        Ver Productos
                        <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="z-10 flex items-center justify-center gap-2 group-hover:opacity-100 transition-opacity duration-300 text-black bg-white opacity-0 absolute inset-0">
                        Ver Productos
                        <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</span>
</button>
</div>
</section>

<section className="overflow-hidden bg-zinc-950/80 backdrop-blur-md border-t border-white/10 pt-32 pb-32 relative" id="contact">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-zinc-800/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="container z-10 text-center max-w-xl mx-auto px-6 relative">
<div className="inline-flex w-16 h-16 bg-white/5 border border-white/10 rounded-2xl mb-8 items-center justify-center">
<iconify-icon className="text-zinc-300" icon="solar:mailbox-linear" width="32"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Obtén el Reporte de Tendencias 2024</h2>
<p className="text-sm font-normal text-zinc-400 mb-10 leading-relaxed">
                    Descubre las últimas innovaciones en merchandising corporativo. Introduce tu correo para recibir nuestro catálogo seleccionado y estructuras de precios exclusivas.
                </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all" placeholder="Correo de Trabajo" required="" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-xl text-sm font-medium hover:bg-zinc-200 transition-colors whitespace-nowrap" type="submit">
                        Descargar Ahora
                    </button>
</form>
<p className="text-zinc-600 text-xs mt-6 font-normal">Respetamos tu privacidad. Date de baja en cualquier momento.</p>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-zinc-950/90 backdrop-blur-md py-12">
<div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:box-minimalistic-linear" width="16"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-zinc-300">Imblasco</span>
<span className="text-zinc-600 text-xs ml-2">© 2024</span>
</div>
<div className="flex items-center gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:linkedin-linear" width="18"></iconify-icon>
</a>
<a className="text-xs font-normal text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Política de Privacidad</a>
<a className="text-xs font-normal text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Términos de Servicio</a>
</div>
</div>
</footer>




    </>
  );
}
