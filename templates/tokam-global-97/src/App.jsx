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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed inset-0 z-[-1] pointer-events-none opacity-20" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="fixed top-0 inset-x-0 h-screen z-[-1] pointer-events-none bg-gradient-to-b from-cyan-900/10 via-[#05070A] to-[#05070A]"></div>

<header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#05070A]/80 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="flex items-center" href="#">
<img alt="Tokam Global" className="h-8 w-auto" src="https://static.wixstatic.com/media/ad8225_d521909c01ae44c69964c22985f94648~mv2.png/v1/fill/w_223,h_67,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ad8225_d521909c01ae44c69964c22985f94648~mv2.png"/>
</a>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#infraestructura">Infraestructura</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#soluciones">Soluciones</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#inteligencia">Inteligencia</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#gobernanza">Gobernanza</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#sobre-tokam">Sobre Tokam</a>
</nav>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-gray-300 border border-white/10 px-4 py-2 hover:border-cyan-500/30 transition-colors flex items-center gap-2" href="#">
<iconify-icon className="text-base" icon="solar:document-text-linear"></iconify-icon>
                    Research
                </a>
<a className="text-sm font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-5 py-2 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.05)] hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]" href="#">
                    Acceso Institucional
                    <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<button className="md:hidden text-gray-300">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>
<main className="pt-20">

<section className="relative min-h-[85vh] flex flex-col justify-center border-b border-white/5 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none">
<video autoplay="" className="w-full h-full object-cover opacity-30" loop="" muted="" playsinline="">
<source src="https://video.wixstatic.com/video/11062b_56e63a6ce4984220a38ca44529456c72/1080p/mp4/file.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-[#05070A]/40 to-[#05070A]/80"></div>
</div>

<div className="absolute top-10 left-6 w-4 h-4 border-t border-l border-cyan-500/40 z-10"></div>
<div className="absolute bottom-10 right-6 w-4 h-4 border-b border-r border-cyan-500/40 z-10"></div>
<div className="max-w-7xl mx-auto px-6 w-full py-20 relative z-10">
<div className="flex items-center gap-3 mb-8">
<div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
<span className="text-xs font-medium tracking-widest text-cyan-500/80 uppercase">SYS.ONLINE // Arquitectura V.1.0</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-6 leading-tight max-w-5xl">
                    Infraestructura <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Financiera Digital</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 font-normal max-w-2xl mb-12 leading-relaxed">
                    Arquitectura de grado institucional para la economía digital. Reduciendo la fricción a través de marcos estrictos de gobernanza, gestión de riesgo y cumplimiento normativo.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
<a className="w-full sm:w-auto text-sm font-medium text-[#05070A] bg-gray-100 border border-transparent px-8 py-3.5 hover:bg-white transition-all flex items-center justify-center gap-2 text-center" href="#">
                        Explorar Infraestructura
                    </a>
<a className="w-full sm:w-auto text-sm font-medium text-cyan-400 bg-transparent border border-cyan-500/30 px-8 py-3.5 hover:bg-cyan-500/10 transition-all flex items-center justify-center gap-2 text-center" href="#">
                        Acceso para Inversores
                        <iconify-icon className="text-base" icon="solar:lock-keyhole-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/5">
<div className="flex flex-col gap-1 border-l border-white/10 pl-4">
<span className="text-xs text-gray-500 tracking-wider uppercase">01 // Pila Estructural</span>
<span className="text-sm font-medium text-gray-200">Gobernanza Institucional</span>
</div>
<div className="flex flex-col gap-1 border-l border-white/10 pl-4">
<span className="text-xs text-gray-500 tracking-wider uppercase">02 // Marco de Riesgo</span>
<span className="text-sm font-medium text-gray-200">Cumplimiento Normativo</span>
</div>
<div className="flex flex-col gap-1 border-l border-white/10 pl-4">
<span className="text-xs text-gray-500 tracking-wider uppercase">03 // Operativa</span>
<span className="text-sm font-medium text-gray-200">Transparencia Auditada</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<span className="text-xs font-medium tracking-widest text-gray-500 uppercase">Framework Estratégico</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mt-4">Cerrando la brecha de confianza.</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="p-8 border border-white/5 bg-white/[0.01]">
<h3 className="text-xl font-semibold tracking-tight text-gray-100 mb-4">El mercado actual carece de estructura</h3>
<p className="text-sm text-gray-400 font-normal leading-relaxed">
                                La adopción institucional de activos digitales está limitada por infraestructuras fragmentadas, marcos de cumplimiento opacos y gestión de riesgos deficiente. El capital cualificado requiere certidumbre algorítmica y legal.
                            </p>
</div>
<div className="pl-8 border-l border-cyan-500/30">
<h3 className="text-lg font-medium tracking-tight text-cyan-400 mb-3">El Enfoque Tokam</h3>
<p className="text-sm text-gray-400 font-normal leading-relaxed">
                                Un entorno diseñado bajo un enfoque "compliance-first". Separación estricta de funciones, custodia institucional segregada y una capa de gobernanza auditable en tiempo real.
                            </p>
</div>
</div>

<div className="relative p-8 border border-white/5 bg-white/[0.02] flex items-center justify-center min-h-[400px]">

<div className="w-full max-w-sm flex flex-col gap-4 relative z-10">
<div className="border border-white/10 bg-[#05070A] p-4 flex items-center justify-between shadow-lg">
<span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Capa de Capital</span>
<iconify-icon className="text-gray-500" icon="solar:wallet-money-linear"></iconify-icon>
</div>

<div className="flex justify-center h-8">
<div className="w-[1px] h-full bg-cyan-500/30"></div>
</div>
<div className="border border-cyan-500/30 bg-cyan-500/5 p-4 flex flex-col items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.05)] relative">
<span className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-1">Motor Estructural Tokam</span>
<span className="text-xs text-gray-500">Riesgo • Gobernanza • Auditoría</span>

<div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 border border-cyan-500/50 bg-[#05070A]"></div>
<div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 border border-cyan-500/50 bg-[#05070A]"></div>
</div>

<div className="flex justify-between px-16 h-8">
<div className="w-[1px] h-full bg-white/10"></div>
<div className="w-[1px] h-full bg-white/10"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="border border-white/10 bg-[#05070A] p-4 flex flex-col items-center justify-center text-center">
<span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Mercados</span>
</div>
<div className="border border-white/10 bg-[#05070A] p-4 flex flex-col items-center justify-center text-center">
<span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Custodia</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5" id="infraestructura">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="text-xs font-medium tracking-widest text-cyan-500 uppercase flex items-center gap-2 mb-4">
<iconify-icon icon="solar:server-square-linear"></iconify-icon>
                            Infraestructura Core
                        </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Infraestructura Financiera Digital</h2>
</div>
<a className="text-sm text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 transition-colors" href="#">
                        Ver Documentación Técnica
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] p-8 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-3xl text-gray-400 group-hover:text-cyan-400 transition-colors mb-6" icon="solar:shield-warning-linear"></iconify-icon>
<h3 className="text-base font-medium tracking-tight text-white mb-3">Gestión de Riesgo</h3>
<p className="text-sm text-gray-400 font-normal leading-relaxed flex-grow">
                            Sistemas de monitoreo continuo y mitigación de exposición. Límites programáticos y segregación de activos por diseño.
                        </p>
<div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest">SYS.RSK</span>
<iconify-icon className="text-gray-500 group-hover:text-cyan-400" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] p-8 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-3xl text-gray-400 group-hover:text-cyan-400 transition-colors mb-6" icon="solar:scales-linear"></iconify-icon>
<h3 className="text-base font-medium tracking-tight text-white mb-3">Gobernanza</h3>
<p className="text-sm text-gray-400 font-normal leading-relaxed flex-grow">
                            Estructura de toma de decisiones transparente. Marcos de políticas rigurosos alienados con estándares financieros tradicionales.
                        </p>
<div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest">SYS.GOV</span>
<iconify-icon className="text-gray-500 group-hover:text-cyan-400" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] p-8 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-3xl text-gray-400 group-hover:text-cyan-400 transition-colors mb-6" icon="solar:safe-square-linear"></iconify-icon>
<h3 className="text-base font-medium tracking-tight text-white mb-3">Custodia Segregada</h3>
<p className="text-sm text-gray-400 font-normal leading-relaxed flex-grow">
                            Salvaguarda de activos mediante infraestructuras de grado institucional de múltiples firmas (MPC) y almacenamiento en frío.
                        </p>
<div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest">SYS.CST</span>
<iconify-icon className="text-gray-500 group-hover:text-cyan-400" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] p-8 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-3xl text-gray-400 group-hover:text-cyan-400 transition-colors mb-6" icon="solar:cpu-linear"></iconify-icon>
<h3 className="text-base font-medium tracking-tight text-white mb-3">Arquitectura Tecnológica</h3>
<p className="text-sm text-gray-400 font-normal leading-relaxed flex-grow">
                            Entornos de ejecución de alta disponibilidad, enrutamiento optimizado e integraciones API robustas para escalabilidad sin fricción.
                        </p>
<div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest">SYS.ARC</span>
<iconify-icon className="text-gray-500 group-hover:text-cyan-400" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-medium tracking-widest text-gray-500 uppercase">Clasificación de Acceso</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mt-4 mb-4">Segmentación de Capital</h2>
<p className="text-sm text-gray-400 font-normal">Acceso estructurado basado en cualificación, garantizando alineación regulatoria y operativa.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="border border-white/10 p-8 flex flex-col bg-[#05070A] relative">
<div className="absolute top-0 right-0 p-4">
<span className="text-[0.65rem] font-medium px-2 py-1 border border-cyan-500/30 text-cyan-400 uppercase tracking-widest">Tier 1</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2 mt-4">Institucionales</h3>
<p className="text-sm text-gray-400 font-normal mb-8 flex-grow">Fondos, family offices y corporaciones buscando exposición estructurada a activos digitales con reportes a medida.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-gray-300">
<iconify-icon className="text-cyan-500/70" icon="solar:check-circle-linear"></iconify-icon>
                                Gestión delegada integral
                            </li>
<li className="flex items-center gap-2 text-sm text-gray-300">
<iconify-icon className="text-cyan-500/70" icon="solar:check-circle-linear"></iconify-icon>
                                Custodia segregada MPC
                            </li>
<li className="flex items-center gap-2 text-sm text-gray-300">
<iconify-icon className="text-cyan-500/70" icon="solar:check-circle-linear"></iconify-icon>
                                APIs de grado empresarial
                            </li>
</ul>
<a className="w-full text-sm font-medium text-white border border-white/10 bg-white/5 py-3 hover:bg-white hover:text-black hover:border-white transition-colors text-center" href="#">
                            Solicitar Admisión
                        </a>
</div>

<div className="border border-white/5 p-8 flex flex-col bg-white/[0.01] relative">
<div className="absolute top-0 right-0 p-4">
<span className="text-[0.65rem] font-medium px-2 py-1 border border-white/10 text-gray-400 uppercase tracking-widest">Tier 2</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2 mt-4">Inversores Acreditados</h3>
<p className="text-sm text-gray-400 font-normal mb-8 flex-grow">Individuos de alto patrimonio que requieren acceso simplificado a oportunidades estructuradas en la red.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-gray-400">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon>
                                Acceso a bóvedas validadas
                            </li>
<li className="flex items-center gap-2 text-sm text-gray-400">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon>
                                Reporting estandarizado
                            </li>
<li className="flex items-center gap-2 text-sm text-gray-400">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon>
                                Soporte dedicado
                            </li>
</ul>
<a className="w-full text-sm font-medium text-gray-300 border border-white/10 py-3 hover:bg-white/5 transition-colors text-center" href="#">
                            Verificar Elegibilidad
                        </a>
</div>

<div className="border border-white/5 p-8 flex flex-col bg-white/[0.01] relative">
<div className="absolute top-0 right-0 p-4">
<span className="text-[0.65rem] font-medium px-2 py-1 border border-white/10 text-gray-400 uppercase tracking-widest">Tier 3</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2 mt-4">Partners Estratégicos</h3>
<p className="text-sm text-gray-400 font-normal mb-8 flex-grow">Plataformas, protocolos e instituciones que buscan integrar los rieles de infraestructura de Tokam.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-gray-400">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon>
                                Documentación de desarrollo
                            </li>
<li className="flex items-center gap-2 text-sm text-gray-400">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon>
                                Liquidez compartida
                            </li>
<li className="flex items-center gap-2 text-sm text-gray-400">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon>
                                Alianzas B2B
                            </li>
</ul>
<a className="w-full text-sm font-medium text-gray-300 border border-white/10 py-3 hover:bg-white/5 transition-colors text-center" href="#">
                            Conectar Sistema
                        </a>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 relative" id="inteligencia">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 flex items-center justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white">Centro de Inteligencia</h2>
<p className="text-sm text-gray-400 mt-2">Investigación, análisis estructural y directrices operativas.</p>
</div>
<a className="hidden md:flex text-sm text-gray-400 hover:text-white font-medium items-center gap-2 transition-colors" href="#">
                        Ver Repositorio
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<a className="lg:col-span-2 group border border-white/5 bg-[#05070A] hover:border-cyan-500/20 transition-all p-8 flex flex-col justify-between min-h-[300px] relative overflow-hidden" href="#">
<div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors"></div>
<div className="mb-8 relative z-10">
<span className="text-[0.65rem] font-medium tracking-widest text-cyan-400 uppercase mb-4 block">Investigación Primaria</span>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4 group-hover:text-cyan-300 transition-colors">Modelos Fiduciarios en el Ecosistema Descentralizado: Un Marco Práctico</h3>
<p className="text-sm text-gray-400 font-normal max-w-xl leading-relaxed">
                                Un análisis profundo de cómo estructurar la responsabilidad fiduciaria utilizando contratos inteligentes como garantes lógicos, reduciendo el riesgo de contraparte institucional.
                            </p>
</div>
<div className="flex items-center justify-between relative z-10">
<span className="text-xs text-gray-500 font-medium">Lectura: 15 min</span>
<div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
<iconify-icon className="text-gray-400 group-hover:text-cyan-400" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>

<div className="flex flex-col gap-6">
<a className="group border border-white/5 bg-[#05070A] hover:border-white/10 transition-all p-6 flex-1 flex flex-col justify-between" href="#">
<div>
<span className="text-[0.65rem] font-medium tracking-widest text-gray-500 uppercase mb-3 block">Documento Marco</span>
<h3 className="text-base font-medium tracking-tight text-white mb-2 group-hover:text-gray-200">Protocolo de Mitigación de Riesgos V.2</h3>
</div>
<div className="flex items-center justify-between mt-4">
<span className="text-xs text-gray-500">PDF • 2.4 MB</span>
<iconify-icon className="text-gray-500 group-hover:text-white transition-colors" icon="solar:download-minimalistic-linear"></iconify-icon>
</div>
</a>
<a className="group border border-white/5 bg-[#05070A] hover:border-white/10 transition-all p-6 flex-1 flex flex-col justify-between" href="#">
<div>
<span className="text-[0.65rem] font-medium tracking-widest text-gray-500 uppercase mb-3 block">Market Insight</span>
<h3 className="text-base font-medium tracking-tight text-white mb-2 group-hover:text-gray-200">Métricas de liquidez institucional Q3</h3>
</div>
<div className="flex items-center justify-between mt-4">
<span className="text-xs text-gray-500">Actualizado: Oct 2023</span>
<iconify-icon className="text-gray-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.01] border-b border-white/5" id="gobernanza">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16">
<div className="md:w-1/3">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-4">Gobernanza y<br/>Transparencia Operativa</h2>
<p className="text-sm text-gray-400 font-normal leading-relaxed mb-6">
                            Operamos bajo estándares de clase mundial, proporcionando un marco seguro y regulatoriamente proactivo para el capital institucional.
                        </p>
<a className="text-sm font-medium text-white border-b border-white/20 pb-1 hover:border-cyan-400 hover:text-cyan-400 transition-colors inline-block" href="#">
                            Conocer nuestro marco legal
                        </a>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
<div className="relative pl-6 border-l border-white/10">
<iconify-icon className="text-xl text-gray-400 mb-3 absolute -left-3 top-0 bg-[#06080b] py-1" icon="solar:flag-linear"></iconify-icon>
<h3 className="text-sm font-medium text-gray-200 mb-2">Jurisdicción Clara</h3>
<p className="text-xs text-gray-500 font-normal leading-relaxed">Estructuración legal domiciliada en jurisdicciones amigables y claras con la regulación de activos digitales para instituciones.</p>
</div>
<div className="relative pl-6 border-l border-white/10">
<iconify-icon className="text-xl text-gray-400 mb-3 absolute -left-3 top-0 bg-[#06080b] py-1" icon="solar:document-add-linear"></iconify-icon>
<h3 className="text-sm font-medium text-gray-200 mb-2">Marco Regulatorio</h3>
<p className="text-xs text-gray-500 font-normal leading-relaxed">Implementación estricta de normativas KYC/KYB y políticas ALD (Prevención de Lavado de Dinero) en cada punto de acceso.</p>
</div>
<div className="relative pl-6 border-l border-white/10">
<iconify-icon className="text-xl text-gray-400 mb-3 absolute -left-3 top-0 bg-[#06080b] py-1" icon="solar:checklist-minimalistic-linear"></iconify-icon>
<h3 className="text-sm font-medium text-gray-200 mb-2">Auditoría Continua</h3>
<p className="text-xs text-gray-500 font-normal leading-relaxed">Tanto las reservas financieras como los contratos inteligentes operan bajo revisiones periódicas de entidades de terceros.</p>
</div>
<div className="relative pl-6 border-l border-white/10">
<iconify-icon className="text-xl text-gray-400 mb-3 absolute -left-3 top-0 bg-[#06080b] py-1" icon="solar:eye-linear"></iconify-icon>
<h3 className="text-sm font-medium text-gray-200 mb-2">Transparencia Operativa</h3>
<p className="text-xs text-gray-500 font-normal leading-relaxed">Dashboards institucionales con pruebas de reservas criptográficas y reportes de exposición de riesgo en tiempo real.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden flex justify-center border-b border-white/5">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<span className="text-[0.65rem] font-medium tracking-widest text-cyan-500 uppercase mb-6 block">Iniciación de Sistema</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Acceda a la infraestructura financiera del mañana, estructurada hoy.</h2>
<p className="text-base text-gray-400 mb-10 max-w-xl mx-auto">
                    Solicite evaluación para integrarse al ecosistema Tokam y despliegue capital con credibilidad algorítmica y legal.
                </p>
<div className="flex flex-col items-center">
<a className="text-sm font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/40 px-10 py-4 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all flex items-center gap-3 shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] mb-6" href="#">
                        Solicitar Acceso Institucional
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="flex items-center gap-2 text-[0.65rem] text-gray-500 tracking-wider uppercase">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                        Conexión Segura SSL // Encriptación Grado Fiduciario
                    </div>
</div>
</div>
</section>
</main>

<footer className="py-10 bg-[#030407]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<img alt="Tokam Global" className="h-6 w-auto opacity-50 grayscale" src="https://static.wixstatic.com/media/ad8225_d521909c01ae44c69964c22985f94648~mv2.png/v1/fill/w_223,h_67,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ad8225_d521909c01ae44c69964c22985f94648~mv2.png"/>
<span className="text-xs text-gray-600 border-l border-white/10 pl-4">© 2023 Tokam Global. Reservados todos los derechos.</span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Términos de Servicio</a>
<a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Política de Privacidad</a>
<a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Avisos Legales</a>
</div>
</div>
</footer>

    </>
  );
}
