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
colors: {
gold: {
50: '#fbf8f3',
100: '#f5efe4',
200: '#eadbc0',
300: '#dec096',
400: '#cf9e66',
500: '#c58446',
600: '#b49257',
700: '#9a7b4f',
800: '#806443',
900: '#69513a',
}
},
backgroundImage: {
'hero-pattern': "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop')",
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
      

<nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 z-50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-gold-400">
<iconify-icon icon="solar:scale-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-serif text-lg text-slate-900 font-medium tracking-tight leading-none group-hover:text-gold-700 transition-colors">Colegio de Abogados</span>
<span className="text-xs text-gold-700 tracking-widest uppercase font-medium mt-1">Antofagasta</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-gold-700 transition-colors" href="#quienes-somos">Nosotros</a>
<a className="text-sm font-medium text-slate-500 hover:text-gold-700 transition-colors" href="#directorio">Directorio</a>
<a className="text-sm font-medium text-slate-500 hover:text-gold-700 transition-colors" href="#noticias">Noticias</a>
<a className="text-sm font-medium text-slate-500 hover:text-gold-700 transition-colors" href="#convenios">Convenios</a>
<a className="text-sm font-medium text-slate-500 hover:text-gold-700 transition-colors" href="#socios">Socios</a>
<a className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-sm shadow-slate-200" href="#contacto">
                    Contacto
                </a>
</div>

<button className="lg:hidden p-2 text-slate-500 hover:text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-32 lg:pt-52 lg:pb-48 overflow-hidden bg-slate-900">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-40 mix-blend-overlay"></div>

<div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-50"></div>

<div className="absolute inset-0 hero-overlay opacity-90"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gold-200 text-xs font-medium mb-8 backdrop-blur-sm shadow-2xl">
<span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
                Institución Oficial Región de Antofagasta
            </div>
<h1 className="font-serif text-5xl lg:text-7xl text-white tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1] drop-shadow-sm">
                Justicia, Ética y <br className="hidden lg:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 italic pr-2">Excelencia</span> Legal.
            </h1>
<p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light mb-12 antialiased">
                Uniendo a los profesionales del derecho bajo los más altos estándares éticos, velando por la correcta administración de justicia y el estado de derecho.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group w-full sm:w-auto px-8 py-4 rounded-lg bg-gold-600 text-white text-sm font-medium hover:bg-gold-500 transition-all shadow-xl shadow-gold-900/20 flex items-center justify-center gap-2 border border-gold-500/50" href="#contacto">
<span>Contáctanos</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center" href="#socios">
                    Buscar Colegiado
                </a>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
</header>

<section className="py-24 bg-slate-50 border-b border-slate-200/60" id="quienes-somos">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="font-serif text-3xl lg:text-4xl text-slate-900 tracking-tight mb-6">Nuestra Identidad</h2>
<p className="text-lg text-slate-500 leading-relaxed font-light mb-8">
                        El Colegio de Abogados de Antofagasta es una asociación gremial sin fines de lucro que reúne a los abogados de la región, promoviendo el perfeccionamiento profesional y la defensa de los principios jurídicos.
                    </p>
<div className="flex items-center gap-4 text-gold-700">
<iconify-icon icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
<span className="text-lg font-medium">Trayectoria y Compromiso Regional</span>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">

<div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-gold-300 transition-colors group shadow-sm">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-gold-700 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Misión</h3>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                            Velar por la ética profesional, la independencia de los abogados y la correcta administración de justicia.
                        </p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-gold-300 transition-colors group shadow-sm">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-gold-700 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Valores</h3>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                            Integridad, transparencia, solidaridad gremial y respeto irrestricto a los Derechos Humanos.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="directorio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="font-serif text-3xl lg:text-4xl text-slate-900 tracking-tight mb-3">Directorio</h2>
<p className="text-lg text-slate-500 font-light">Liderazgo comprometido con el gremio.</p>
</div>
<a className="text-gold-700 font-medium hover:text-gold-800 inline-flex items-center gap-1 text-base group" href="#">
                    Ver organigrama completo 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group">
<div className="aspect-[4/5] w-full bg-slate-100 rounded-xl mb-4 overflow-hidden relative border border-slate-200">
<div className="absolute inset-0 flex items-center justify-center bg-slate-50 text-slate-300">
<iconify-icon icon="solar:user-linear" strokeWidth="1" width="64"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-slate-900">Nombre Consejero</h3>
<p className="text-base text-gold-700 font-normal">Presidente</p>
</div>

<div className="group">
<div className="aspect-[4/5] w-full bg-slate-100 rounded-xl mb-4 overflow-hidden relative border border-slate-200">
<div className="absolute inset-0 flex items-center justify-center bg-slate-50 text-slate-300">
<iconify-icon icon="solar:user-linear" strokeWidth="1" width="64"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-slate-900">Nombre Consejero</h3>
<p className="text-base text-gold-700 font-normal">Vicepresidente</p>
</div>

<div className="group">
<div className="aspect-[4/5] w-full bg-slate-100 rounded-xl mb-4 overflow-hidden relative border border-slate-200">
<div className="absolute inset-0 flex items-center justify-center bg-slate-50 text-slate-300">
<iconify-icon icon="solar:user-linear" strokeWidth="1" width="64"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-slate-900">Nombre Consejero</h3>
<p className="text-base text-gold-700 font-normal">Secretario</p>
</div>

<div className="group">
<div className="aspect-[4/5] w-full bg-slate-100 rounded-xl mb-4 overflow-hidden relative border border-slate-200">
<div className="absolute inset-0 flex items-center justify-center bg-slate-50 text-slate-300">
<iconify-icon icon="solar:user-linear" strokeWidth="1" width="64"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-slate-900">Nombre Consejero</h3>
<p className="text-base text-gold-700 font-normal">Tesorero</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="noticias">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-serif text-3xl lg:text-4xl text-slate-900 tracking-tight mb-12">Actualidad Gremial</h2>
<div className="grid md:grid-cols-3 gap-8">

<article className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
<div className="h-48 bg-slate-100 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="solar:gallery-linear" width="32"></iconify-icon>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<span className="text-xs font-medium text-gold-700 mb-3 uppercase tracking-wider">Comunicado</span>
<h3 className="text-xl font-medium text-slate-900 mb-3 leading-tight tracking-tight">Elecciones del Directorio 2024: Resultados oficiales</h3>
<p className="text-lg text-slate-500 font-light mb-6 flex-1 line-clamp-3">
                            Informamos a nuestros colegiados los resultados del proceso eleccionario llevado a cabo durante esta semana.
                        </p>
<a className="text-slate-900 font-medium text-sm flex items-center gap-2 hover:opacity-70" href="#">
                            Leer más 
                            <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</article>

<article className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
<div className="h-48 bg-slate-100 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="solar:gallery-linear" width="32"></iconify-icon>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<span className="text-xs font-medium text-gold-700 mb-3 uppercase tracking-wider">Evento</span>
<h3 className="text-xl font-medium text-slate-900 mb-3 leading-tight tracking-tight">Seminario: Nuevas tendencias en Derecho Civil</h3>
<p className="text-lg text-slate-500 font-light mb-6 flex-1 line-clamp-3">
                            Invitamos a todos los socios a participar del seminario dictado por destacados académicos nacionales.
                        </p>
<a className="text-slate-900 font-medium text-sm flex items-center gap-2 hover:opacity-70" href="#">
                            Leer más 
                            <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</article>

<article className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
<div className="h-48 bg-slate-100 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="solar:gallery-linear" width="32"></iconify-icon>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<span className="text-xs font-medium text-gold-700 mb-3 uppercase tracking-wider">Convenio</span>
<h3 className="text-xl font-medium text-slate-900 mb-3 leading-tight tracking-tight">Nueva alianza estratégica con biblioteca digital</h3>
<p className="text-lg text-slate-500 font-light mb-6 flex-1 line-clamp-3">
                            Los colegiados podrán acceder a una vasta colección de jurisprudencia y doctrina actualizada.
                        </p>
<a className="text-slate-900 font-medium text-sm flex items-center gap-2 hover:opacity-70" href="#">
                            Leer más 
                            <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</article>
</div>
</div>
</section>

<div className="grid lg:grid-cols-2">

<section className="py-24 px-6 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white" id="convenios">
<div className="max-w-xl mx-auto lg:ml-auto lg:mr-12">
<div className="flex items-center gap-3 mb-6 text-gold-700">
<iconify-icon icon="solar:hand-shake-linear" width="24"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-wider">Beneficios</span>
</div>
<h2 className="font-serif text-3xl text-slate-900 tracking-tight mb-6">Convenios Externos</h2>
<p className="text-lg text-slate-500 font-light mb-8">
                    Acceda a descuentos exclusivos y alianzas estratégicas con instituciones educativas, servicios de salud y proveedores comerciales.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-gold-600 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-lg text-slate-600 font-light">Descuentos en postgrados universitarios</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gold-600 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-lg text-slate-600 font-light">Planes preferenciales en salud</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gold-600 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-lg text-slate-600 font-light">Convenios con editoriales jurídicas</span>
</li>
</ul>
<a className="text-slate-900 font-medium inline-flex items-center gap-2 border-b border-slate-900 pb-0.5 hover:text-gold-700 hover:border-gold-700 transition-colors" href="#">
                    Ver todos los convenios
                </a>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" id="socios">
<div className="max-w-xl mx-auto lg:mr-auto lg:ml-12">
<div className="flex items-center gap-3 mb-6 text-gold-700">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-wider">Comunidad</span>
</div>
<h2 className="font-serif text-3xl text-slate-900 tracking-tight mb-6">Listado de Socios</h2>
<p className="text-lg text-slate-500 font-light mb-8">
                    Consulte nuestro registro público de abogados colegiados activos. Garantía de profesionalismo para la comunidad.
                </p>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-6">
<div className="flex gap-2">
<input className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-base outline-none focus:ring-2 focus:ring-gold-200 transition-all" placeholder="Buscar por nombre o apellido..." type="text"/>
<button className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<a className="text-slate-900 font-medium inline-flex items-center gap-2 border-b border-slate-900 pb-0.5 hover:text-gold-700 hover:border-gold-700 transition-colors" href="#">
                    Acceder al directorio completo
                </a>
</div>
</section>
</div>

<footer className="bg-slate-900 text-slate-300 py-24" id="contacto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 mb-16">
<div>
<div className="flex items-center gap-3 mb-8 text-white">
<iconify-icon icon="solar:scale-linear" width="32"></iconify-icon>
<span className="font-serif text-2xl tracking-tight">Colegio de Abogados</span>
</div>
<p className="text-lg text-slate-400 font-light leading-relaxed mb-8 max-w-md">
                        Promoviendo la excelencia jurídica y la ética profesional en Antofagasta desde su fundación. Únase a nuestra red.
                    </p>
<div className="space-y-4">
<a className="flex items-center gap-4 text-white hover:text-gold-400 transition-colors group" href="mailto:contacto@abogadosantofagasta.cl">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<span className="text-lg">contacto@abogadosantofagasta.cl</span>
</a>
<div className="flex items-center gap-4 text-white">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<span className="text-lg">Calle Prat 123, Of. 456, Antofagasta</span>
</div>
</div>
<div className="flex gap-4 mt-10">
<a className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 hover:border-white transition-all" href="#">
<iconify-icon icon="ri:linkedin-line" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 hover:border-white transition-all" href="#">
<iconify-icon icon="ri:twitter-x-line" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 hover:border-white transition-all" href="#">
<iconify-icon icon="ri:facebook-line" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
<h3 className="text-white text-xl font-medium mb-6">Envíenos un mensaje</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-slate-400 font-medium">Nombre</label>
<input className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-gold-500 transition-colors" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-slate-400 font-medium">Email</label>
<input className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-gold-500 transition-colors" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-slate-400 font-medium">Asunto</label>
<input className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-gold-500 transition-colors" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-slate-400 font-medium">Mensaje</label>
<textarea className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-gold-500 transition-colors" rows="4"></textarea>
</div>
<button className="w-full bg-gold-600 text-white font-medium py-3 rounded-lg hover:bg-gold-500 transition-colors shadow-lg shadow-gold-900/20" type="button">
                            Enviar Mensaje
                        </button>
</form>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-light">
<p>© 2024 Colegio de Abogados de Antofagasta. Todos los derechos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacidad</a>
<a className="hover:text-white transition-colors" href="#">Términos</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
