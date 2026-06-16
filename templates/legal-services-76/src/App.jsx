import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
legalia: {
vino: '#63071E',
rojo: '#DC1F27',
crema: '#FDEFEF',
navy: '#043873',
gray: '#F3F4F6'
}
},
fontFamily: {
sans: ['DM Sans', 'sans-serif'],
heading: ['Poppins', 'sans-serif'],
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2">
<span className="font-heading font-semibold text-2xl tracking-tighter text-[#043873]">LEGALIA<span className="text-[#DC1F27]">.</span></span>
</div>

<nav className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-600 hover:text-[#043873] transition-colors" href="#hero">Inicio</a>
<div className="relative group">
<button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-[#043873] transition-colors">
                            Servicios
                            <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
<a className="text-sm font-medium text-slate-600 hover:text-[#043873] transition-colors" href="#nosotros">Nosotros</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#043873] transition-colors" href="#blog">Blog</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-[#63071E] hover:bg-[#4a0516] transition-all shadow-sm" href="#diagnostico">
                        Agendar Asesoría
                    </a>

<button className="md:hidden text-slate-600">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</div>
</header>
<main className="pt-20">

<section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-28" id="hero">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDEFEF] text-[#63071E] text-xs font-medium mb-6 border border-[#63071E]/10">
<span className="w-2 h-2 rounded-full bg-[#DC1F27] animate-pulse"></span>
                            Asesoría legal sin barreras
                        </div>
<h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#043873] tracking-tight leading-[1.1] mb-6">
                            Asesoría Legal en Venezuela: Claridad y Resultados para tu Tranquilidad.
                        </h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                            Resolvemos tus trámites civiles y mercantiles con un enfoque humano y transparente. Obtén soluciones reales en <span className="font-semibold text-[#63071E]">menos de 24h</span> sin complicaciones técnicas.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg text-white bg-[#63071E] hover:bg-[#4a0516] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="#diagnostico">
                                Reservar Diagnóstico - 80$
                            </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg text-[#043873] bg-white border border-slate-200 hover:bg-slate-50 transition-all" href="#servicios">
                                Explorar Servicios
                            </a>
</div>
</div>
<div className="relative lg:h-auto h-64 w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-100">

<img alt="Oficina Legal Moderna" className="w-full h-full object-cover opacity-90 grayscale-[20%]" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#043873]/30 to-transparent mix-blend-multiply"></div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-[#FAFAFA] py-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-sm text-slate-500 mb-8 font-medium">Respaldados por décadas de experiencia y soluciones accesibles</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300">

<div className="flex items-center gap-2 font-heading font-semibold text-lg text-slate-800">
<iconify-icon className="text-[#DC1F27]" icon="solar:wallet-money-linear" width="24"></iconify-icon> Cashea
                    </div>
<div className="flex items-center gap-2 font-heading font-semibold text-lg text-slate-800">
<iconify-icon icon="logos:paypal" width="20"></iconify-icon> PayPal
                    </div>
<div className="flex items-center gap-2 font-heading font-semibold text-lg text-slate-800">
<span className="text-[#043873]">Zelle</span>
</div>
<div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
<div className="flex items-center gap-2">
<span className="text-2xl font-bold text-[#043873] tracking-tighter">+20</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Años de<br/>Trayectoria</span>
</div>
<div className="flex items-center gap-2">
<span className="text-2xl font-bold text-[#043873] tracking-tighter">+500</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Casos<br/>Resueltos</span>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white" id="servicios">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#043873] tracking-tight mb-4">Soluciones adaptadas a tu perfil</h2>
<p className="text-slate-600 text-lg">Elegimos la claridad sobre la confusión. Selecciona tu necesidad.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#63071E] transition-all duration-300 hover:shadow-xl hover:shadow-[#63071E]/5">
<div className="w-14 h-14 bg-[#FDEFEF] rounded-xl flex items-center justify-center text-[#63071E] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="font-heading text-2xl font-semibold text-slate-900 mb-2">Para Ti y tu Familia</h3>
<p className="text-slate-500 mb-6 font-medium text-sm uppercase tracking-wide">Derecho Civil</p>
<p className="text-slate-600 mb-8 leading-relaxed">Protegemos tu patrimonio y tus relaciones familiares con trámites ágiles.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-slate-700 text-sm">
<iconify-icon className="text-[#DC1F27] mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Divorcios y Separaciones
                            </li>
<li className="flex items-start gap-3 text-slate-700 text-sm">
<iconify-icon className="text-[#DC1F27] mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Herencias y Sucesiones
                            </li>
<li className="flex items-start gap-3 text-slate-700 text-sm">
<iconify-icon className="text-[#DC1F27] mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Títulos Supletorios
                            </li>
</ul>
<a className="inline-flex items-center text-[#63071E] font-semibold text-sm hover:translate-x-1 transition-transform" href="#contacto">
                            Consultar Civil <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#043873] transition-all duration-300 hover:shadow-xl hover:shadow-[#043873]/5">
<div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-[#043873] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:briefcase-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="font-heading text-2xl font-semibold text-slate-900 mb-2">Para tu Empresa</h3>
<p className="text-slate-500 mb-6 font-medium text-sm uppercase tracking-wide">Derecho Mercantil</p>
<p className="text-slate-600 mb-8 leading-relaxed">Blindaje legal para emprendedores y PyMEs que buscan crecer sin multas.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-slate-700 text-sm">
<iconify-icon className="text-[#043873] mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Registro Mercantil y Actas
                            </li>
<li className="flex items-start gap-3 text-slate-700 text-sm">
<iconify-icon className="text-[#043873] mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Registro de Marca (SAPI)
                            </li>
<li className="flex items-start gap-3 text-slate-700 text-sm">
<iconify-icon className="text-[#043873] mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Cumplimiento Laboral
                            </li>
</ul>
<a className="inline-flex items-center text-[#043873] font-semibold text-sm hover:translate-x-1 transition-transform" href="#contacto">
                            Consultar Mercantil <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-[#FDEFEF]" id="diagnostico">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border border-[#63071E]/10">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<span className="inline-block text-[#DC1F27] font-bold tracking-wider text-xs uppercase mb-4">La Inversión Inteligente</span>
<h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#043873] tracking-tight mb-6">
                                Tu ruta legal comienza con un Diagnóstico de 45 minutos.
                            </h2>
<p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                No des pasos a ciegas. Por una inversión única de <strong>80$</strong>, obtienes una sesión privada con nuestros abogados expertos.
                            </p>
<div className="space-y-6 mb-10">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FDEFEF] flex items-center justify-center text-[#63071E]">
<iconify-icon icon="solar:clipboard-check-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Evaluar la viabilidad</h4>
<p className="text-sm text-slate-600 mt-1">Sabrás si tu caso tiene base legal sólida antes de gastar más.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FDEFEF] flex items-center justify-center text-[#63071E]">
<iconify-icon icon="solar:shield-warning-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Evitar multas</h4>
<p className="text-sm text-slate-600 mt-1">Identificamos riesgos antes de que se conviertan en problemas.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FDEFEF] flex items-center justify-center text-[#63071E]">
<iconify-icon icon="solar:bill-list-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Presupuesto Real</h4>
<p className="text-sm text-slate-600 mt-1">Recibes el costo total del proceso sin cargos ocultos.</p>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg text-white bg-[#63071E] hover:bg-[#4a0516] transition-all shadow-md">
                                    Agendar mi Sesión por 80$
                                </button>
<span className="text-xs text-slate-500 font-medium flex items-center gap-1">
<iconify-icon icon="solar:videocamera-linear"></iconify-icon> Disponible online (Zoom) o presencial
                                </span>
</div>
</div>

<div className="relative hidden lg:block">
<div className="absolute inset-0 bg-gradient-to-tr from-[#63071E]/5 to-[#043873]/5 rounded-2xl transform rotate-3"></div>
<div className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm">
<div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
<div>
<p className="text-xs text-slate-400 uppercase tracking-wide">Producto</p>
<p className="font-heading font-semibold text-lg text-[#043873]">Diagnóstico Legal 1:1</p>
</div>
<span className="text-2xl font-bold text-[#63071E]">$80</span>
</div>
<div className="space-y-4">
<div className="h-2 w-3/4 bg-slate-200 rounded"></div>
<div className="h-2 w-full bg-slate-200 rounded"></div>
<div className="h-2 w-5/6 bg-slate-200 rounded"></div>
<div className="h-2 w-1/2 bg-slate-200 rounded"></div>
</div>
<div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
</div>
<p className="text-xs text-slate-500">Un abogado especialista asignado a tu caso.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white" id="nosotros">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#043873] tracking-tight mb-4">Por qué somos diferentes</h2>
<p className="text-slate-600 text-lg">Dejamos atrás las prácticas del escritorio jurídico tradicional.</p>
</div>
<div className="grid md:grid-cols-3 gap-10">

<div className="flex flex-col items-start p-6 rounded-xl hover:bg-slate-50 transition-colors">
<div className="w-12 h-12 rounded-lg bg-[#FDEFEF] text-[#63071E] flex items-center justify-center mb-6">
<iconify-icon icon="solar:chat-round-check-linear" width="28"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-semibold text-slate-900 mb-3">Transparencia Total</h3>
<p className="text-slate-600 leading-relaxed text-sm">Hablamos claro. Sin términos jurídicos confusos y "latinajos" innecesarios, para que siempre tengas el control de lo que sucede.</p>
</div>

<div className="flex flex-col items-start p-6 rounded-xl hover:bg-slate-50 transition-colors">
<div className="w-12 h-12 rounded-lg bg-blue-50 text-[#043873] flex items-center justify-center mb-6">
<iconify-icon icon="solar:clock-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-semibold text-slate-900 mb-3">Velocidad Empirika</h3>
<p className="text-slate-600 leading-relaxed text-sm">Respuesta garantizada en menos de 24h hábiles. Tu tiempo es nuestro activo más valioso.</p>
</div>

<div className="flex flex-col items-start p-6 rounded-xl hover:bg-slate-50 transition-colors">
<div className="w-12 h-12 rounded-lg bg-red-50 text-[#DC1F27] flex items-center justify-center mb-6">
<iconify-icon icon="solar:scale-linear" width="28"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-semibold text-slate-900 mb-3">Ética Radical</h3>
<p className="text-slate-600 leading-relaxed text-sm">No prometemos imposibles. Te damos el panorama real del sistema judicial venezolano actual, gústele a quien le guste.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-[#FAFAFA]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#043873] tracking-tight mb-12">Áreas de Especialización</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-[#63071E] mb-4" icon="solar:buildings-2-linear" width="32"></iconify-icon>
<h3 className="font-semibold text-lg text-slate-900 mb-2">Registro de Empresas</h3>
<p className="text-sm text-slate-600 leading-relaxed">Constitución de S.A., Pymes y Firmas Personales ante el Registro Mercantil.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-[#043873] mb-4" icon="solar:copyright-linear" width="32"></iconify-icon>
<h3 className="font-semibold text-lg text-slate-900 mb-2">Propiedad Intelectual</h3>
<p className="text-sm text-slate-600 leading-relaxed">Registro de marcas y patentes en el SAPI para blindar tu negocio.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-[#63071E] mb-4" icon="solar:document-add-linear" width="32"></iconify-icon>
<h3 className="font-semibold text-lg text-slate-900 mb-2">Gestión Patrimonial</h3>
<p className="text-sm text-slate-600 leading-relaxed">Redacción de documentos, herencias, traspasos y sucesiones ante el SENIAT.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-[#043873] mb-4" icon="solar:global-linear" width="32"></iconify-icon>
<h3 className="font-semibold text-lg text-slate-900 mb-2">Asesoría a Distancia</h3>
<p className="text-sm text-slate-600 leading-relaxed">Gestión de documentos en Venezuela para ciudadanos en el extranjero (Apostillas, Poderes).</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-heading text-3xl font-semibold text-[#043873] tracking-tight mb-12 text-center">Lo que dicen quienes confiaron</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-2xl relative">
<iconify-icon className="text-[#63071E]/20 absolute top-6 right-6" icon="solar:quote-up-linear" width="40"></iconify-icon>
<p className="text-slate-700 italic mb-6 text-sm leading-relaxed">"Gracias a Legalia pude registrar mi marca en tiempo récord y sin complicaciones. Su transparencia me dio mucha paz en un proceso que pensé sería eterno."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#043873] text-white flex items-center justify-center font-bold text-xs">CR</div>
<div>
<p className="font-semibold text-sm text-[#043873]">Carlos Rodriguez</p>
<p className="text-xs text-slate-500">Cliente Corporativo</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl relative">
<iconify-icon className="text-[#63071E]/20 absolute top-6 right-6" icon="solar:quote-up-linear" width="40"></iconify-icon>
<p className="text-slate-700 italic mb-6 text-sm leading-relaxed">"Necesitaba un poder para vender una propiedad estando en España. Me explicaron todo por Zoom y en semanas estaba listo. 100% recomendados."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#63071E] text-white flex items-center justify-center font-bold text-xs">MP</div>
<div>
<p className="font-semibold text-sm text-[#043873]">Maria Pérez</p>
<p className="text-xs text-slate-500">Desde Madrid</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl relative">
<iconify-icon className="text-[#63071E]/20 absolute top-6 right-6" icon="solar:quote-up-linear" width="40"></iconify-icon>
<p className="text-slate-700 italic mb-6 text-sm leading-relaxed">"Por fin abogados que no te hablan en difícil. Pagué la consulta de diagnóstico y me ahorraron miles de dólares en una multa que no sabía que tenía."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#DC1F27] text-white flex items-center justify-center font-bold text-xs">AG</div>
<div>
<p className="font-semibold text-sm text-[#043873]">Andrea Gonzalez</p>
<p className="text-xs text-slate-500">Emprendedora</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-100">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-heading text-3xl font-semibold text-[#043873] tracking-tight mb-8 text-center">Preguntas Frecuentes</h2>
<div className="space-y-4">
<details className="group border border-slate-200 rounded-lg open:bg-[#FDEFEF]/30 open:border-[#63071E]/20 transition-all">
<summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-slate-800">
<span>¿Cuánto cuesta registrar una marca en el SAPI?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                            El costo varía según las tasas oficiales del día (petro/divisa) más nuestros honorarios profesionales. En la sesión de diagnóstico te entregamos un presupuesto detallado al centavo.
                        </div>
</details>
<details className="group border border-slate-200 rounded-lg open:bg-[#FDEFEF]/30 open:border-[#63071E]/20 transition-all">
<summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-slate-800">
<span>¿Puedo tramitar una herencia si no estoy en Venezuela?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                            Sí. Podemos representarte mediante un poder legal apostillado. Nosotros nos encargamos de redactar el documento para que lo firmes en el consulado o notaría de tu país de residencia.
                        </div>
</details>
<details className="group border border-slate-200 rounded-lg open:bg-[#FDEFEF]/30 open:border-[#63071E]/20 transition-all">
<summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-slate-800">
<span>¿Qué incluye exactamente la asesoría de 80$?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                            Incluye 45 minutos de análisis de tu caso, revisión de documentos previos si los tienes, estrategia legal recomendada y presupuesto final de la solución. Si contratas el servicio completo, en algunos casos este monto se descuenta del total.
                        </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#043873] text-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-12 mb-12">

<div>
<span className="font-heading font-semibold text-2xl tracking-tighter mb-4 block">LEGALIA<span className="text-[#DC1F27]">.</span></span>
<p className="text-slate-300 text-sm leading-relaxed max-w-xs">
                            Abogados en Caracas comprometidos con la transparencia. Simplificamos el acceso a la justicia y a los trámites legales en Venezuela para personas y empresas.
                        </p>
</div>

<div>
<h4 className="font-semibold mb-4 text-[#FDEFEF]">Enlaces Rápidos</h4>
<ul className="space-y-2 text-sm text-slate-300">
<li><a className="hover:text-white transition-colors" href="#servicios">Servicios Legales</a></li>
<li><a className="hover:text-white transition-colors" href="#diagnostico">Agendar Cita</a></li>
<li><a className="hover:text-white transition-colors" href="#nosotros">Sobre Nosotros</a></li>
<li><a className="hover:text-white transition-colors" href="#blog">Blog Jurídico</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-4 text-[#FDEFEF]">Contacto</h4>
<ul className="space-y-3 text-sm text-slate-300">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon> info@legalia.com.ve
                            </li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5" icon="solar:map-point-linear" width="18"></iconify-icon> 
                                Av. Francisco de Miranda, Torre Empresarial, Caracas, Venezuela.
                            </li>
<li className="mt-4">
<a className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors" href="#">
<iconify-icon icon="logos:whatsapp-icon" width="16"></iconify-icon> Chat Directo
                                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Legalia. Todos los derechos reservados.</p>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-white" href="#">Política de Privacidad</a>
<a className="hover:text-white" href="#">Términos y Condiciones</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center" href="#">
<iconify-icon icon="solar:chat-square-call-linear" strokeWidth="2" width="28"></iconify-icon>
</a>
</main>

    </>
  );
}
