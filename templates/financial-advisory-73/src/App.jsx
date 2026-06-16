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
},
colors: {
brand: {
dark: '#2A385D',      // Main Blue
green: '#59AE91',     // Action Green
secondary: '#58778A', // Secondary Blue
light: '#FCFDFD',     // White/Bg
gray: '#A4B1B7',      // Borders
text: '#2F2D21',      // Dark Text
}
},
boxShadow: {
'subtle': '0 1px 2px 0 rgba(42, 56, 93, 0.05)',
'card': '0 4px 6px -1px rgba(42, 56, 93, 0.05), 0 2px 4px -1px rgba(42, 56, 93, 0.03)',
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
      

<nav className="fixed top-0 w-full z-50 bg-brand-light/80 backdrop-blur-md border-b border-brand-gray/20">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tight text-brand-dark flex items-center gap-1" href="#">
                PROFUZION
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-secondary">
<a className="hover:text-brand-dark transition-colors" href="#servicios">Servicios</a>
<a className="hover:text-brand-dark transition-colors" href="#metodo">Método</a>
<a className="hover:text-brand-dark transition-colors" href="#casos">Casos</a>
<a className="hover:text-brand-dark transition-colors" href="#aliados">Aliados</a>
<a className="hover:text-brand-dark transition-colors" href="#faq">Agenda</a>
</div>

<div className="flex flex-col items-end">
<span className="text-[10px] text-brand-secondary font-medium mb-1 hidden md:block">
                    Confidencial • Sin compromiso • 20-30 min
                </span>
<a className="bg-brand-green text-white text-xs font-medium py-2 px-4 rounded hover:bg-opacity-90 transition-all shadow-subtle flex items-center gap-2" href="#contacto">
                    Agendar Diagnóstico Privado
                    <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center fade-up" style={{animationDelay: '0.1s'}}>

<p className="text-xs md:text-sm font-medium text-brand-secondary mb-6 uppercase tracking-widest">
                Equipo con especialidad en administración financiera, banca y mercados bursátiles
            </p>

<h1 className="text-4xl md:text-6xl font-semibold text-brand-dark tracking-tight leading-[1.1] mb-6">
                Dirección financiera boutique para crecer y proteger tu patrimonio.
            </h1>

<p className="text-lg md:text-xl text-brand-secondary max-w-2xl mx-auto leading-relaxed mb-8">
                Diseñamos estrategias a la medida para que tu empresa y tu patrimonio avancen con claridad, estructura y tranquilidad.
            </p>

<div className="mb-10 inline-block bg-brand-dark/5 rounded-full px-4 py-1.5 border border-brand-dark/10">
<p className="text-sm font-medium text-brand-dark italic">
                    “Tú encárgate de definir tu objetivo… nosotros nos encargamos de hacerlo posible.”
                </p>
</div>

<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
<a className="w-full md:w-auto bg-brand-green text-white text-sm font-medium py-3 px-6 rounded hover:bg-opacity-90 transition-all shadow-md flex items-center justify-center gap-2" href="#contacto">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
                    Agendar Diagnóstico Privado
                </a>
<a className="w-full md:w-auto bg-white border border-brand-gray/40 text-brand-secondary text-sm font-medium py-3 px-6 rounded hover:border-brand-dark/30 hover:text-brand-dark transition-all flex items-center justify-center gap-2" href="#diagnostico">
<iconify-icon icon="solar:bolt-linear" width="18"></iconify-icon>
                    Hacer Diagnóstico Express (2 min)
                </a>
</div>

<div className="flex flex-col items-center gap-3 opacity-60">
<p className="text-[10px] uppercase tracking-widest text-brand-gray">Certificaciones y Aliados</p>
<div className="flex items-center gap-6 grayscale">

<span className="text-xs font-bold text-brand-dark border border-brand-dark p-1 rounded">CNBV</span>
<span className="text-xs font-bold text-brand-dark border border-brand-dark p-1 rounded">AMIB</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-light border-y border-brand-gray/10">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold text-brand-dark tracking-tight mb-4">¿Esto es para mí?</h2>
<p className="text-brand-secondary text-sm md:text-base">Elige tu perfil y te mostramos el camino recomendado.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-xl border border-brand-gray/20 bg-white shadow-subtle hover:shadow-card hover:border-brand-green/30 transition-all group">
<div className="w-10 h-10 rounded-full bg-brand-dark/5 text-brand-dark flex items-center justify-center mb-6 group-hover:bg-brand-green/10 group-hover:text-brand-green transition-colors">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-brand-dark mb-2">Empresario en expansión</h3>
<p className="text-sm text-brand-secondary leading-relaxed">
                        Buscas capital de trabajo, financiar proyectos, acelerar el crecimiento o mejorar tu liquidez operativa.
                    </p>
</div>

<div className="p-8 rounded-xl border border-brand-gray/20 bg-white shadow-subtle hover:shadow-card hover:border-brand-green/30 transition-all group">
<div className="w-10 h-10 rounded-full bg-brand-dark/5 text-brand-dark flex items-center justify-center mb-6 group-hover:bg-brand-green/10 group-hover:text-brand-green transition-colors">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-brand-dark mb-2">Patrimonio y familia</h3>
<p className="text-sm text-brand-secondary leading-relaxed">
                        Necesitas estructurar inversiones, planear el retiro, protección de activos y fideicomisos familiares.
                    </p>
</div>

<div className="p-8 rounded-xl border border-brand-gray/20 bg-white shadow-subtle hover:shadow-card hover:border-brand-green/30 transition-all group">
<div className="w-10 h-10 rounded-full bg-brand-dark/5 text-brand-dark flex items-center justify-center mb-6 group-hover:bg-brand-green/10 group-hover:text-brand-green transition-colors">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-brand-dark mb-2">Inmobiliario</h3>
<p className="text-sm text-brand-secondary leading-relaxed">
                        Adquisición de propiedades, desarrollo de proyectos, liquidez sobre ladrillos o esquemas de preventa.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary opacity-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                La banca no es “buena” o “mala”:<br/>cada institución tiene criterios distintos.
            </h2>
<div className="space-y-6 text-brand-gray/90 text-sm md:text-lg font-light leading-relaxed">
<p>
                    Los bancos y entidades financieras operan con diferentes apetitos de cliente, sectores prioritarios y formas de evaluar casos.
                </p>
<p>
                    Nuestro trabajo es entender tu objetivo, estructurar tu perfil por flujo y orientarlo hacia la institución o estrategia con mayor probabilidad de aprobación y mejores condiciones, alineadas a tus intereses.
                </p>
</div>
<div className="mt-10 pt-8 border-t border-white/10">
<p className="text-brand-green font-medium tracking-wide">No otorgamos créditos: estructuramos crecimiento.</p>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
<div className="md:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold text-brand-dark tracking-tight mb-6">
                    De incertidumbre financiera <br/>
<span className="text-brand-green">→ a decisiones estratégicas.</span>
</h2>
<p className="text-brand-secondary text-sm mb-8">El éxito y tranquilidad de nuestros clientes, es nuestro éxito.</p>
<a className="text-sm font-medium text-brand-dark border-b border-brand-green pb-0.5 hover:text-brand-green transition-colors" href="#contacto">
                    Hablemos de tu estrategia
                </a>
</div>
<div className="md:w-1/2 w-full space-y-4">

<div className="flex gap-4 p-4 rounded-lg bg-white border border-brand-gray/20 shadow-subtle">
<div className="mt-1 text-brand-green shrink-0">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-brand-dark">Claridad</h4>
<p className="text-xs text-brand-secondary mt-1">Ordenamos tu situación financiera y prioridades.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-lg bg-white border border-brand-gray/20 shadow-subtle">
<div className="mt-1 text-brand-green shrink-0">
<iconify-icon icon="solar:compass-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-brand-dark">Estrategia</h4>
<p className="text-xs text-brand-secondary mt-1">Elegimos el camino correcto: crédito, inversión o estructura legal.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-lg bg-white border border-brand-gray/20 shadow-subtle">
<div className="mt-1 text-brand-green shrink-0">
<iconify-icon icon="solar:clipboard-check-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-brand-dark">Ejecución</h4>
<p className="text-xs text-brand-secondary mt-1">Gestión ágil, documentación correcta, tiempos eficientes.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-lg bg-white border border-brand-gray/20 shadow-subtle">
<div className="mt-1 text-brand-green shrink-0">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-brand-dark">Tranquilidad</h4>
<p className="text-xs text-brand-secondary mt-1">Acompañamiento continuo para ajustar antes de que duela.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-light border-t border-brand-gray/10 relative" id="metodo">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-medium text-brand-green uppercase tracking-wider mb-2 block">Nuestro Proceso</span>
<h2 className="text-2xl md:text-3xl font-semibold text-brand-dark tracking-tight">
                    Un método claro. Una ejecución impecable.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gray/40 to-transparent -z-10"></div>

<div className="relative bg-white md:bg-transparent p-6 md:p-0 rounded-xl border md:border-0 border-brand-gray/20 shadow-subtle md:shadow-none">
<div className="w-10 h-10 md:w-12 md:h-12 bg-brand-dark text-white rounded-full flex items-center justify-center text-sm md:text-base font-semibold mb-4 mx-auto md:mx-0 shadow-lg shadow-brand-dark/20 z-10 relative">1</div>
<h3 className="text-base font-medium text-brand-dark mb-2 text-center md:text-left">Diagnóstico Privado</h3>
<p className="text-xs text-brand-secondary leading-relaxed text-center md:text-left">
                        Escucha activa + entendimiento real del flujo y objetivos.
                    </p>
</div>

<div className="relative bg-white md:bg-transparent p-6 md:p-0 rounded-xl border md:border-0 border-brand-gray/20 shadow-subtle md:shadow-none">
<div className="w-10 h-10 md:w-12 md:h-12 bg-white border border-brand-gray/30 text-brand-dark rounded-full flex items-center justify-center text-sm md:text-base font-semibold mb-4 mx-auto md:mx-0 z-10 relative">2</div>
<h3 className="text-base font-medium text-brand-dark mb-2 text-center md:text-left">Investigación Profunda</h3>
<p className="text-xs text-brand-secondary leading-relaxed text-center md:text-left">
                        Investigamos a fondo el caso hasta diseñar una ruta sólida y defendible.
                    </p>
</div>

<div className="relative bg-white md:bg-transparent p-6 md:p-0 rounded-xl border md:border-0 border-brand-gray/20 shadow-subtle md:shadow-none">
<div className="w-10 h-10 md:w-12 md:h-12 bg-white border border-brand-gray/30 text-brand-dark rounded-full flex items-center justify-center text-sm md:text-base font-semibold mb-4 mx-auto md:mx-0 z-10 relative">3</div>
<h3 className="text-base font-medium text-brand-dark mb-2 text-center md:text-left">Estructuración</h3>
<p className="text-xs text-brand-secondary leading-relaxed text-center md:text-left">
                        Crédito, inversión o fideicomisos con términos claros y verificables.
                    </p>
</div>

<div className="relative bg-white md:bg-transparent p-6 md:p-0 rounded-xl border md:border-0 border-brand-gray/20 shadow-subtle md:shadow-none">
<div className="w-10 h-10 md:w-12 md:h-12 bg-white border border-brand-gray/30 text-brand-dark rounded-full flex items-center justify-center text-sm md:text-base font-semibold mb-4 mx-auto md:mx-0 z-10 relative">4</div>
<h3 className="text-base font-medium text-brand-dark mb-2 text-center md:text-left">Ejecución Ágil</h3>
<p className="text-xs text-brand-secondary leading-relaxed text-center md:text-left">
                        Monitoreo, educación financiera y ajustes tempranos.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="servicios">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div>
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-brand-secondary" icon="solar:chart-square-linear" width="20"></iconify-icon>
<h3 className="text-lg font-semibold text-brand-dark">Crecimiento Empresarial</h3>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-brand-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5"></span>
                            Crédito empresarial (simple, revolvente, TPV)
                        </li>
<li className="flex items-start gap-2 text-sm text-brand-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5"></span>
                            Arrendamiento puro y financiero
                        </li>
<li className="flex items-start gap-2 text-sm text-brand-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5"></span>
                            Crédito hipotecario empresarial
                        </li>
</ul>
</div>

<div>
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-brand-secondary" icon="solar:wallet-linear" width="20"></iconify-icon>
<h3 className="text-lg font-semibold text-brand-dark">Patrimonio e Inversiones</h3>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-brand-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5"></span>
                            Asesoría de inversiones (Renta fija/variable, ETFs)
                        </li>
<li className="flex items-start gap-2 text-sm text-brand-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5"></span>
                            Planes privados para el retiro
                        </li>
<li className="flex items-start gap-2 text-sm text-brand-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5"></span>
                            Seguros de protección
                        </li>
</ul>
</div>

<div>
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-brand-secondary" icon="solar:shield-warning-linear" width="20"></iconify-icon>
<h3 className="text-lg font-semibold text-brand-dark">Estructura y Protección</h3>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-brand-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5"></span>
                            Diseño y constitución de Fideicomisos
                        </li>
<li className="flex items-start gap-2 text-sm text-brand-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5"></span>
                            Previsión social para empresas
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-secondary/5" id="casos">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-brand-dark tracking-tight mb-8">Lo que hacemos en la vida real.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-lg border border-brand-gray/20 shadow-sm">
<h4 className="font-medium text-brand-dark mb-2">Expansión de empresa</h4>
<p className="text-xs text-brand-secondary">Orden financiero + ruta de financiamiento + ejecución con aliados correctos.</p>
</div>
<div className="bg-white p-6 rounded-lg border border-brand-gray/20 shadow-sm">
<h4 className="font-medium text-brand-dark mb-2">Optimización patrimonial</h4>
<p className="text-xs text-brand-secondary">Estrategia de inversión diversificada + protección + estructura legal.</p>
</div>
<div className="bg-white p-6 rounded-lg border border-brand-gray/20 shadow-sm">
<h4 className="font-medium text-brand-dark mb-2">Proyecto inmobiliario</h4>
<p className="text-xs text-brand-secondary">Estructura de liquidez sobre terreno / hipotecario / preventa + acompañamiento.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center" id="aliados">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold text-brand-dark tracking-tight mb-4">Confianza institucional, atención boutique.</h2>
<p className="text-brand-secondary text-sm mb-8">
                Equipo con especialidad en banca y mercados; certificaciones CNBV/AMIB.<br/>
                Red de aliados comerciales (Banca, Sofomes, Plataformas, Casas de Bolsa).
            </p>
<div className="inline-block px-4 py-2 bg-brand-dark text-white text-xs font-medium rounded tracking-wide">
                Tu caso no se “manda”: se estructura.
            </div>
</div>
</section>

<section className="py-24 bg-brand-dark relative overflow-hidden" id="diagnostico">

<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<div className="absolute right-0 top-0 w-96 h-96 bg-brand-green rounded-full blur-[100px]"></div>
</div>
<div className="max-w-xl mx-auto px-6 relative z-10">
<div className="text-center mb-10">
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3">Diagnóstico Express</h2>
<p className="text-brand-gray text-sm">Descubre tu mejor ruta en 2 minutos.</p>
</div>

<div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">

<div className="w-full h-1 bg-gray-100 rounded-full mb-6">
<div className="w-1/3 h-full bg-brand-green rounded-full"></div>
</div>

<div className="space-y-6">

<div>
<label className="block text-xs font-semibold text-brand-dark uppercase tracking-wide mb-3">1. ¿Eres empresa o persona?</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer group">
<input checked="" className="hidden custom-radio" name="q1" type="radio"/>
<div className="border border-brand-gray/30 rounded-lg p-3 flex items-center gap-3 transition-all group-hover:border-brand-secondary/50">
<div className="w-4 h-4 rounded-full border border-brand-gray/40 radio-circle flex-shrink-0"></div>
<span className="text-sm text-brand-text">Empresa</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="hidden custom-radio" name="q1" type="radio"/>
<div className="border border-brand-gray/30 rounded-lg p-3 flex items-center gap-3 transition-all group-hover:border-brand-secondary/50">
<div className="w-4 h-4 rounded-full border border-brand-gray/40 radio-circle flex-shrink-0"></div>
<span className="text-sm text-brand-text">Persona</span>
</div>
</label>
</div>
</div>

<div>
<label className="block text-xs font-semibold text-brand-dark uppercase tracking-wide mb-3">2. Objetivo principal</label>
<select className="w-full border border-brand-gray/30 rounded-lg p-3 text-sm text-brand-text focus:outline-none focus:border-brand-secondary bg-white">
<option>Crecer / Expansión</option>
<option>Liquidez</option>
<option>Invertir Patrimonio</option>
<option>Proteger / Seguros</option>
<option>Retiro</option>
</select>
</div>

<div>
<label className="block text-xs font-semibold text-brand-dark uppercase tracking-wide mb-3">3. Ingresos Comprobables</label>
<div className="flex gap-3">
<label className="cursor-pointer group flex-1">
<input className="hidden custom-radio" name="q3" type="radio"/>
<div className="border border-brand-gray/30 rounded-lg p-3 text-center transition-all">
<span className="text-sm text-brand-text">Sí</span>
</div>
</label>
<label className="cursor-pointer group flex-1">
<input className="hidden custom-radio" name="q3" type="radio"/>
<div className="border border-brand-gray/30 rounded-lg p-3 text-center transition-all">
<span className="text-sm text-brand-text">No</span>
</div>
</label>
<label className="cursor-pointer group flex-1">
<input className="hidden custom-radio" name="q3" type="radio"/>
<div className="border border-brand-gray/30 rounded-lg p-3 text-center transition-all">
<span className="text-sm text-brand-text">En proceso</span>
</div>
</label>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-gray-100">
<button className="w-full bg-brand-green text-white text-sm font-medium py-3 rounded-lg hover:bg-opacity-90 transition-all shadow-md flex justify-center items-center gap-2">
                        Recibir mi ruta recomendada
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-center text-[10px] text-brand-gray mt-3">Te enviaremos también un checklist personalizado.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-brand-light" id="contacto">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-brand-dark tracking-tight mb-6">
                Define tu objetivo. <br/> Nosotros lo hacemos posible.
            </h2>
<p className="text-brand-secondary text-lg mb-10 max-w-2xl mx-auto">
                Agenda un diagnóstico privado para diseñar una estrategia clara, ejecutable y alineada a tus intereses.
            </p>
<div className="flex flex-col items-center">
<a className="bg-brand-green text-white text-base font-medium py-4 px-10 rounded hover:bg-opacity-90 transition-all shadow-lg flex items-center gap-3" href="#">
                    Agendar Diagnóstico Privado
                    <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</a>
<span className="text-xs text-brand-gray mt-4 font-medium uppercase tracking-wider">Confidencial • Sin compromiso • Respuesta clara</span>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-brand-gray/10" id="faq">
<div className="max-w-3xl mx-auto">
<h3 className="text-xl font-semibold text-brand-dark mb-8 text-center">Preguntas Frecuentes</h3>
<div className="space-y-4">
<details className="group bg-white border border-brand-gray/20 rounded-lg p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-brand-dark list-none">
                        ¿Trabajan con bancos?
                        <iconify-icon className="text-brand-gray group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-sm text-brand-secondary mt-3 leading-relaxed">
                        Sí, y también con distintos aliados (Sofomes, fondos, aseguradoras) según el caso y lo que más te convenga.
                    </p>
</details>
<details className="group bg-white border border-brand-gray/20 rounded-lg p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-brand-dark list-none">
                        ¿Qué necesito para iniciar?
                        <iconify-icon className="text-brand-gray group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-sm text-brand-secondary mt-3 leading-relaxed">
                        Depende del perfil. En el diagnóstico express o la cita privada te damos un checklist exacto.
                    </p>
</details>
<details className="group bg-white border border-brand-gray/20 rounded-lg p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-brand-dark list-none">
                        ¿Atienden personas físicas?
                        <iconify-icon className="text-brand-gray group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-sm text-brand-secondary mt-3 leading-relaxed">
                        Sí, atendemos Personas Físicas con Actividad Empresarial (PFAE) y estrategias patrimoniales personales.
                    </p>
</details>
</div>
</div>
</section>

<footer className="bg-brand-dark text-white py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-lg font-semibold tracking-tight block mb-1">PROFUZION</span>
<span className="text-xs text-brand-gray font-light">Dirección Financiera Boutique</span>
</div>
<div className="flex gap-6 text-sm text-brand-gray font-light">
<a className="hover:text-white transition-colors" href="#">Aviso de Privacidad</a>
<a className="hover:text-white transition-colors" href="#">Términos</a>
</div>
<div className="text-xs text-brand-gray/50">
                © 2024 Profuzion. Todos los derechos reservados.
            </div>
</div>
</footer>

    </>
  );
}
