import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 bg-white border-b border-gray-100 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex-shrink-0" href="#">
<img alt="IBMEX Industrial Bloquera Mexicana" className="h-12 w-auto" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/LOGO_60-ANIVERSARIO-2-2.png"/>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-700 hover:text-[#00135d] uppercase tracking-wide" href="#beneficios">Beneficios</a>
<a className="text-sm font-medium text-gray-700 hover:text-[#00135d] uppercase tracking-wide" href="#especificaciones">Ficha Técnica</a>
<a className="text-sm font-medium text-gray-700 hover:text-[#00135d] uppercase tracking-wide" href="#productos">Catálogo</a>
<a className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-bold text-white bg-ibmex-red hover:bg-[#d60b05] uppercase tracking-wide transition-colors rounded-sm shadow-md" href="#cotizar">
            Cotizar Ahora
          </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-[#00135d] p-2" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-t border-gray-100 p-4" id="mobile-menu">
<div className="flex flex-col space-y-4">
<a className="text-lg font-bold text-[#00135d]" href="#beneficios">Beneficios</a>
<a className="text-lg font-bold text-[#00135d]" href="#especificaciones">Ficha Técnica</a>
<a className="w-full text-center py-3 bg-ibmex-red text-white font-bold uppercase" href="#cotizar">Cotizar</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden clip-diagonal bg-black">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover z-0" loop="" muted="" playsinline="">
<source src="https://ibmex.minegoc.io/medios/banner_ibmex.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-[#00135d]/90 z-0"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="text-white">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-sm mb-6 backdrop-blur-sm shadow-lg">
<iconify-icon className="text-[#ff140d]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-bold tracking-widest uppercase drop-shadow-md">Mortero Estructural Tipo I</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-none tracking-tight mb-4 [text-shadow:_0_4px_12px_rgba(0,0,0,0.8)]">
            Pegablock Industrial <br/><span className="text-ibmex-red [text-shadow:_0_4px_12px_rgba(0,0,0,0.8)]">Por Tonelada</span>
</h1>
<p className="text-xl sm:text-2xl text-gray-100 font-light mb-8 max-w-lg font-industrial [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]">
            Unión precisa para block hueco. Resistencia garantizada de 240 kg/cm² para muros de carga.
          </p>

<div className="flex flex-wrap gap-3 mb-10">
<span className="inline-flex items-center px-3 py-1.5 bg-[#000a33] border border-white/10 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
<iconify-icon className="mr-2 text-[#ff140d]" icon="solar:box-linear"></iconify-icon> Pedido Mín: 40 Bultos
            </span>
<span className="inline-flex items-center px-3 py-1.5 bg-[#000a33] border border-white/10 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
<iconify-icon className="mr-2 text-[#ff140d]" icon="solar:buildings-linear"></iconify-icon> Solo Empresas
            </span>
<span className="inline-flex items-center px-3 py-1.5 bg-[#000a33] border border-white/10 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
<iconify-icon className="mr-2 text-[#ff140d]" icon="solar:map-point-linear"></iconify-icon> CDMX y Estado de México
            </span>
</div>

<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#128C7E] transition-all uppercase rounded-sm shadow-xl hover:-translate-y-1" href="https://wa.me/5215500000000">
<iconify-icon className="mr-2 text-xl" icon="solar:phone-calling-linear"></iconify-icon>
              Cotiza por WhatsApp
            </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-ibmex-red hover:bg-[#d60b05] transition-all uppercase rounded-sm shadow-xl hover:-translate-y-1" href="#cotizar">
              Solicitar Cotización
            </a>
</div>
</div>

<div className="relative flex justify-center lg:justify-end">
<div className="absolute inset-0 bg-white/5 rounded-full blur-3xl transform scale-75"></div>
<img alt="Saco Pegablock IBMEX 25kg" className="relative z-10 w-full max-w-md drop-shadow-2xl hover:scale-105 transition-transform duration-500" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/pegablock_25_sombra.webp"/>

<div className="absolute bottom-10 -left-4 bg-white p-4 shadow-xl border-l-4 border-ibmex-red max-w-[180px] hidden md:block">
<p className="text-gray-500 text-xs uppercase font-bold mb-1">Resistencia</p>
<p className="text-3xl font-bold text-ibmex-blue font-industrial">240 <span className="text-sm">kg/cm²</span></p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 py-12 border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-6">Respaldo Técnico Garantizado</p>
<div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
<img alt="IBMEX Logo" className="h-16 w-auto" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/LOGO_60-ANIVERSARIO-2-2.png"/>
<div className="text-left border-l-2 border-gray-300 pl-6">
<h3 className="text-2xl font-bold text-ibmex-blue font-industrial uppercase">Más de 60 años</h3>
<p className="text-gray-600 leading-tight">Construyendo en México con calidad certificada.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-black uppercase mb-4">Optimiza tu obra: <span className="text-ibmex-red">Adiós a la Mezcla Tradicional</span></h2>
<p className="text-gray-600 max-w-2xl mx-auto text-lg">Los métodos antiguos generan desperdicio y variabilidad en la resistencia. Pegablock estandariza tu construcción.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="p-8 bg-gray-50 border border-gray-100 rounded-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:danger-triangle-linear" width="120"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
<span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600"><iconify-icon icon="solar:close-circle-linear"></iconify-icon></span>
            Mezcla en Sitio (Tradicional)
          </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-400 mt-1 flex-shrink-0" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-gray-600"><strong>Lento:</strong> Tiempos muertos en preparación y acarreo de arena/cemento.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-400 mt-1 flex-shrink-0" icon="solar:trash-bin-trash-linear"></iconify-icon>
<span className="text-gray-600"><strong>Desperdicio:</strong> Hasta un 15% de merma en materiales a granel.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-400 mt-1 flex-shrink-0" icon="solar:graph-down-linear"></iconify-icon>
<span className="text-gray-600"><strong>Inconsistente:</strong> La resistencia varía según la "pala" del albañil.</span>
</li>
</ul>
</div>

<div className="p-8 bg-white border-2 border-ibmex-blue shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 bg-ibmex-blue text-white text-xs font-bold px-3 py-1 uppercase">Recomendado</div>
<h3 className="text-2xl font-bold text-ibmex-blue mb-6 flex items-center gap-2 font-industrial">
<span className="w-8 h-8 rounded-full bg-ibmex-blue text-white flex items-center justify-center"><iconify-icon icon="solar:check-circle-bold"></iconify-icon></span>
            Pegablock IBMEX
          </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<img alt="Icono Tiempo" className="w-5 h-5 mt-1 object-contain" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/clock.webp"/>
<span className="text-gray-800"><strong>Mayor Velocidad:</strong> Solo agrega agua y aplica. Ahorra horas hombre.</span>
</li>
<li className="flex items-start gap-3">
<img alt="Icono Sacos" className="w-5 h-5 mt-1 object-contain" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/sacos.webp"/>
<span className="text-gray-800"><strong>Cero Mermas:</strong> Control exacto de inventario por saco.</span>
</li>
<li className="flex items-start gap-3">
<img alt="Icono Ladrillo" className="w-5 h-5 mt-1 object-contain" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/brick.webp"/>
<span className="text-gray-800"><strong>Calidad Estándar:</strong> Resistencia de laboratorio (240 kg/cm²) en cada mezcla.</span>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-gray-100">
<p className="text-ibmex-red font-bold text-sm uppercase flex items-center gap-2">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon> Ahorro del 18% en costo total de muro
             </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50 border-t border-gray-200" id="especificaciones">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5">
<h2 className="text-3xl font-bold text-ibmex-blue uppercase mb-6 font-industrial">Ficha Técnica</h2>
<div className="bg-white shadow-sm border border-gray-200 rounded-sm overflow-hidden">
<table className="min-w-full divide-y divide-gray-200">
<tbody className="divide-y divide-gray-200">
<tr className="hover:bg-gray-50">
<td className="px-6 py-4 text-sm font-bold text-gray-900 bg-gray-50 w-1/2">Producto</td>
<td className="px-6 py-4 text-sm text-gray-700">Mortero Estructural Tipo I</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-6 py-4 text-sm font-bold text-gray-900 bg-gray-50">Presentación</td>
<td className="px-6 py-4 text-sm text-gray-700">Saco de 25 kg</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-6 py-4 text-sm font-bold text-ibmex-red bg-gray-50">Resistencia a Compresión</td>
<td className="px-6 py-4 text-sm font-bold text-ibmex-red">240 kg/cm² (23.5 MPa)</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-6 py-4 text-sm font-bold text-gray-900 bg-gray-50">Agregado Máximo</td>
<td className="px-6 py-4 text-sm text-gray-700">3 mm (arena graduada)</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-6 py-4 text-sm font-bold text-gray-900 bg-gray-50">Rendimiento Aprox.</td>
<td className="px-6 py-4 text-sm text-gray-700">15.5 Litros de mezcla</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-6 py-4 text-sm font-bold text-gray-900 bg-gray-50">Aditivos</td>
<td className="px-6 py-4 text-sm text-gray-700">Retención de agua y adherencia</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-6">
<a className="text-ibmex-blue font-bold text-sm hover:underline flex items-center" href="#cotizar">
<iconify-icon className="mr-2" icon="solar:file-download-linear"></iconify-icon> Descargar Ficha Técnica Completa (PDF)
            </a>
</div>
</div>

<div className="lg:col-span-7">
<h2 className="text-3xl font-bold text-ibmex-blue uppercase mb-6 font-industrial">Rendimiento por Saco</h2>
<p className="text-gray-600 mb-8">Calculado para pegado de piezas con junta de 10-12mm.</p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

<div className="bg-white border border-gray-200 p-6 text-center hover:border-ibmex-blue transition-colors group">
<div className="h-16 flex items-center justify-center mb-4">
<iconify-icon className="text-4xl text-gray-400 group-hover:text-ibmex-blue" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<h4 className="font-bold text-gray-900 mb-1">Block Liso</h4>
<p className="text-xs text-gray-500 mb-4">12x20x40 cm</p>
<div className="border-t border-gray-100 pt-4">
<span className="block text-3xl font-bold text-ibmex-blue font-industrial">2.5 m²</span>
<span className="text-xs text-gray-500 uppercase font-bold">Por Saco 25kg</span>
</div>
</div>

<div className="bg-white border-2 border-ibmex-blue p-6 text-center relative shadow-lg">
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-ibmex-blue text-white text-[10px] uppercase font-bold px-2 py-0.5">Más Común</div>
<div className="h-16 flex items-center justify-center mb-4">
<iconify-icon className="text-4xl text-ibmex-blue" icon="solar:layers-minimalistic-bold"></iconify-icon>
</div>
<h4 className="font-bold text-gray-900 mb-1">Block Multiperforado</h4>
<p className="text-xs text-gray-500 mb-4">12x20x40 cm (BH8)</p>
<div className="border-t border-gray-100 pt-4">
<span className="block text-3xl font-bold text-ibmex-red font-industrial">3.2 m²</span>
<span className="text-xs text-gray-500 uppercase font-bold">Por Saco 25kg</span>
</div>
</div>

<div className="bg-white border border-gray-200 p-6 text-center hover:border-ibmex-blue transition-colors group">
<div className="h-16 flex items-center justify-center mb-4">
<iconify-icon className="text-4xl text-gray-400 group-hover:text-ibmex-blue" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<h4 className="font-bold text-gray-900 mb-1">Block Multiperforado</h4>
<p className="text-xs text-gray-500 mb-4">15x20x40 cm (BH8)</p>
<div className="border-t border-gray-100 pt-4">
<span className="block text-3xl font-bold text-ibmex-blue font-industrial">2.8 m²</span>
<span className="text-xs text-gray-500 uppercase font-bold">Por Saco 25kg</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-ibmex-blue text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl font-bold uppercase mb-10 font-industrial">Aplicaciones Ideales</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="p-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:bg-white/10 transition">
<iconify-icon className="text-4xl mb-3 text-ibmex-red" icon="solar:home-angle-linear"></iconify-icon>
<p className="font-bold">Muros de Carga</p>
</div>
<div className="p-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:bg-white/10 transition">
<iconify-icon className="text-4xl mb-3 text-ibmex-red" icon="solar:buildings-2-linear"></iconify-icon>
<p className="font-bold">Vivienda Vertical</p>
</div>
<div className="p-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:bg-white/10 transition">
<iconify-icon className="text-4xl mb-3 text-ibmex-red" icon="solar:factory-2-linear"></iconify-icon>
<p className="font-bold">Naves Industriales</p>
</div>
<div className="p-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:bg-white/10 transition">
<iconify-icon className="text-4xl mb-3 text-ibmex-red" icon="solar:wall-linear"></iconify-icon>
<p className="font-bold">Bardas Perimetrales</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="productos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-black uppercase mb-4 font-industrial">Completa tu Pedido</h2>
<p className="text-gray-600">Optimiza el envío de tu tonelada agregando productos complementarios.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group border border-gray-100 p-6 rounded-sm hover:shadow-xl transition-all text-center">
<div className="h-48 flex items-center justify-center mb-6 bg-gray-50 rounded-sm">
<img alt="Pegamuro" className="h-40 w-auto object-contain mix-blend-multiply group-hover:scale-110 transition-transform" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/IBMEX-6.png"/>
</div>
<h3 className="text-xl font-bold text-ibmex-blue mb-2 font-industrial">Pegamuro 25 kg</h3>
<p className="text-sm text-gray-500 mb-4">Adhesivo reforzado para recubrimientos y acabados.</p>
<a className="text-ibmex-red font-bold text-sm uppercase tracking-wider hover:underline" href="#cotizar">Agregar a cotización</a>
</div>

<div className="group border border-gray-100 p-6 rounded-sm hover:shadow-xl transition-all text-center">
<div className="h-48 flex items-center justify-center mb-6 bg-gray-50 rounded-sm">
<img alt="Seconcreto" className="h-40 w-auto object-contain mix-blend-multiply group-hover:scale-110 transition-transform" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/3-1.png"/>
</div>
<h3 className="text-xl font-bold text-ibmex-blue mb-2 font-industrial">Seconcreto Gris 250</h3>
<p className="text-sm text-gray-500 mb-4">Concreto premezclado de alta resistencia.</p>
<a className="text-ibmex-red font-bold text-sm uppercase tracking-wider hover:underline" href="#cotizar">Agregar a cotización</a>
</div>

<div className="group border border-gray-100 p-6 rounded-sm hover:shadow-xl transition-all text-center">
<div className="h-48 flex items-center justify-center mb-6 bg-gray-50 rounded-sm">
<img alt="Repellos" className="h-40 w-auto object-contain mix-blend-multiply group-hover:scale-110 transition-transform" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/2-1.png"/>
</div>
<h3 className="text-xl font-bold text-ibmex-blue mb-2 font-industrial">Repellos IBMEX</h3>
<p className="text-sm text-gray-500 mb-4">Mortero para aplanados finos y rústicos.</p>
<a className="text-ibmex-red font-bold text-sm uppercase tracking-wider hover:underline" href="#cotizar">Agregar a cotización</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50 relative" id="cotizar">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row">

<div className="md:w-5/12 bg-ibmex-blue p-10 text-white flex flex-col justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[#ff140d] opacity-10 transform -skew-y-12 scale-150 origin-bottom-left"></div>
<h2 className="text-3xl font-bold uppercase mb-4 relative z-10 font-industrial">Solicita tu Cotización</h2>
<p className="text-gray-300 mb-8 relative z-10">
            Precios especiales por volumen para constructoras y distribuidores. Recibe tu presupuesto en menos de 24 horas.
          </p>
<div className="space-y-4 relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-ibmex-red">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<span className="font-medium">Pedidos desde 1 Tonelada</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-ibmex-red">
<iconify-icon className="text-xl" icon="solar:delivery-linear"></iconify-icon>
</div>
<span className="font-medium">Entrega Directa en Obra</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-ibmex-red">
<iconify-icon className="text-xl" icon="solar:user-id-linear"></iconify-icon>
</div>
<span className="font-medium">Asesoría Técnica Incluida</span>
</div>
</div>
</div>

<div className="md:w-7/12 p-10">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm input-focus transition-colors" placeholder="Arq. Juan Pérez" type="text"/>
</div>
<div>
<label className="block text-sm font-bold text-gray-700 mb-2">Empresa</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm input-focus transition-colors" placeholder="Constructora SA de CV" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-bold text-gray-700 mb-2">Email Corporativo</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm input-focus transition-colors" placeholder="compras@empresa.com" type="email"/>
</div>
<div>
<label className="block text-sm font-bold text-gray-700 mb-2">Teléfono / WhatsApp</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm input-focus transition-colors" placeholder="55 1234 5678" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-bold text-gray-700 mb-2">Producto de Interés</label>
<select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm input-focus transition-colors text-gray-700">
<option value="pegablock">Pegablock IBMEX (Saco 25kg)</option>
<option value="paquete">Paquete Completo (Mortero + Concreto)</option>
<option value="otros">Otros Materiales</option>
</select>
</div>
<div>
<label className="block text-sm font-bold text-gray-700 mb-2">Volumen Estimado</label>
<select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm input-focus transition-colors text-gray-700">
<option value="1-5">1 - 5 Toneladas</option>
<option value="5-15">5 - 15 Toneladas</option>
<option value="15+">+15 Toneladas (Proyecto Grande)</option>
</select>
</div>
<button className="w-full py-4 bg-ibmex-red text-white font-bold text-lg uppercase tracking-wide hover:bg-[#d60b05] transition-colors shadow-lg mt-4 rounded-sm" type="button">
              Enviar Solicitud de Cotización
            </button>
<p className="text-xs text-center text-gray-400 mt-4">Tus datos están protegidos. Responderemos a la brevedad.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-black text-white pt-16 pb-8 border-t-4 border-ibmex-blue">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

<div>
<img alt="IBMEX Logo" className="h-12 w-auto mb-6 brightness-0 invert" src="https://ibmex.minegoc.io/wp-content/uploads/2025/11/LOGO_60-ANIVERSARIO-2-2.png"/>
<p className="text-gray-400 text-sm mb-6">
            Líderes en la fabricación de materiales para la construcción en México. Calidad, resistencia y rendimiento garantizado para tu obra.
          </p>
<div className="flex space-x-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="24"></iconify-icon></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="24"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-lg font-bold uppercase mb-6 font-industrial">Productos</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-ibmex-red transition-colors" href="#">Pegablock IBMEX</a></li>
<li><a className="hover:text-ibmex-red transition-colors" href="#">Pegamuro</a></li>
<li><a className="hover:text-ibmex-red transition-colors" href="#">Seconcreto</a></li>
<li><a className="hover:text-ibmex-red transition-colors" href="#">Repellos y Estucos</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-bold uppercase mb-6 font-industrial">Contacto</h4>
<ul className="space-y-4 text-sm text-gray-400">
<li className="flex items-start gap-3">
<iconify-icon className="text-ibmex-red text-lg" icon="solar:map-point-linear"></iconify-icon>
<span>Cobertura: CDMX y Área Metropolitana<br/>Estado de México</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-ibmex-red text-lg" icon="solar:phone-calling-linear"></iconify-icon>
<span>Ventas: (55) 0000-0000</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-ibmex-red text-lg" icon="solar:letter-linear"></iconify-icon>
<span>ventas@ibmex.com.mx</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
<p>© 2024 Industrial Bloquera Mexicana S.A. de C.V.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Aviso de Privacidad</a>
<a className="hover:text-white" href="#">Términos y Condiciones</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
