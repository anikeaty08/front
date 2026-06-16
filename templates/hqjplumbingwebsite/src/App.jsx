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
50: '#fff1f2',
100: '#ffe4e6',
200: '#fecdd3',
300: '#fda4af',
400: '#fb7185',
500: '#e11d48',
600: '#C8102E', // HQJ Red from Logo
700: '#be123c',
800: '#9f1239',
900: '#881337',
}
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
      

<nav className="fixed w-full z-50 top-0 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">

<div className="flex flex-col items-center justify-center leading-none select-none py-1">
<div className="relative">

<h1 className="text-4xl font-black tracking-tighter leading-none bg-gradient-to-b from-brand-600 from-50% to-slate-900 to-50% bg-clip-text text-transparent scale-y-110 origin-bottom">HQJ</h1>
</div>
<span className="text-[0.6rem] font-bold tracking-[0.2em] text-slate-900 uppercase mt-1">Plumbing Supplies</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Servicios</a>
<a className="hover:text-slate-900 transition-colors" href="#why-us">Nosotros</a>
<a className="hover:text-slate-900 transition-colors" href="#reviews">Testimonios</a>
<a className="flex items-center gap-1 hover:text-brand-600 transition-colors" href="http://plomeriahqj.com/docs/ARR-HQJ-CAT-2024-2.pdf" target="_blank">
<iconify-icon icon="solar:file-download-linear" width="16"></iconify-icon>
                    Catálogo
                </a>
</div>
<a className="hidden md:flex bg-slate-900 hover:bg-brand-600 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all items-center gap-2" href="#contact">
                Solicitar Cotización
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden" id="contact">

<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
</span>
                    8 Tiendas a través de Puerto Rico
                </div>
<h1 className="text-4xl lg:text-6xl font-semibold text-slate-900 tracking-tighter leading-[1.1] mb-6">
                    Expertos en Plomería <span className="text-brand-600">Residencial, Comercial e Industrial.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                    Más de 40 años ofreciendo productos de calidad y los mejores precios del mercado. Desde contratistas hasta desarrolladores, somos su mejor alternativa.
                </p>
<div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-600" icon="solar:verified-check-linear" width="20"></iconify-icon>
                        Inventario Masivo
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-600" icon="solar:global-linear" width="20"></iconify-icon>
                        Exportación al Caribe
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-600" icon="solar:medal-ribbon-linear" width="20"></iconify-icon>
                        Líneas Exclusivas
                    </div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-slate-900 rounded-2xl blur opacity-20"></div>
<div className="relative bg-white rounded-xl shadow-xl border border-slate-100 p-6 lg:p-8">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Solicita Presupuesto</h3>
<p className="text-sm text-slate-500 mb-6">Envíe su orden o consulta y reciba precio rápidamente.</p>
<form action="#" className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Nombre</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" placeholder="Tu nombre" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Teléfono</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" placeholder="(787) 000-0000" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Email Comercial</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" placeholder="nombre@empresa.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Interés</label>
<div className="relative">
<select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-600">
<option>Al Por Mayor</option>
<option>Plomería General</option>
<option>Waterworks</option>
<option>Exportación</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Mensaje</label>
<textarea className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none" placeholder="Detalles de su orden..." rows="3"></textarea>
</div>
<button className="w-full bg-slate-900 hover:bg-brand-600 text-white font-medium py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-slate-900/10 flex justify-center items-center gap-2" type="submit">
                            Enviar Solicitud
                            <iconify-icon icon="solar:plain-3-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50 py-10">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Nuestras Líneas Exclusivas &amp; Aliados</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-60">
<span className="text-xl font-bold tracking-tighter text-slate-800">GERBER</span>
<span className="text-xl font-bold tracking-tighter text-slate-800">DANZE</span>
<span className="text-xl font-bold tracking-tighter text-slate-800">SANIFLO</span>
<span className="text-xl font-bold tracking-tighter text-slate-800">WAYNE</span>
<span className="text-xl font-bold tracking-tighter text-slate-800">HYDRONIX</span>
<span className="text-xl font-bold tracking-tighter text-slate-800">TIGRE</span>
<span className="text-xl font-bold tracking-tighter text-slate-800">FUTURA</span>
</div>
</div>
</section>

<section className="py-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Soluciones Integrales</h2>
<p className="text-slate-500 max-w-2xl text-lg">Cubrimos todas las necesidades del mercado, desde el hogar hasta grandes proyectos de infraestructura.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl border border-slate-100 bg-white hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Plomería General</h3>
<p className="text-sm text-slate-500 leading-relaxed">Piezas, PVC SCH40/80, Cobre, Drenajes, Mezcladoras y Sanitarios para proyectos residenciales.</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:drop-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Waterworks</h3>
<p className="text-sm text-slate-500 leading-relaxed">Infraestructura, HDPE, Alcantarillado, Sistemas contra incendios y válvulas industriales.</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-white hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Al Por Mayor</h3>
<p className="text-sm text-slate-500 leading-relaxed">Servicio directo a ferreterías y proyectos grandes con logística de entrega optimizada.</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-white hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Líneas Exclusivas</h3>
<p className="text-sm text-slate-500 leading-relaxed">Representamos marcas de prestigio mundial garantizando calidad y repuestos.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="why-us">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-600 rounded-full blur-3xl opacity-20"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-x-16 gap-y-16 items-center cursor-pointer" onclick="window.location.href='https://plomeriahqj.com/index.php'" role="button">
<div className="">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">Por qué elegir a HQJ Plumbing</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Nacimos en Rincón y hoy contamos con 8 tiendas y un centro de distribución masiva en Hormigueros. Nuestra solidez nos permite ofrecer productos únicos todo en un mismo lugar.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-500 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-200 text-sm">Más de 40 años de experiencia en el mercado.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-500 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-200 text-sm">8 Tiendas estratégicas: Aguadilla, Arecibo, Caguas, Hato Rey, Hormigueros, Ponce, Santa Isabel.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-500 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-200 text-sm">Servicio de exportación a todo el Caribe (St. Thomas, St. Croix, RD, etc).</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-500 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-slate-200 text-sm">Departamento de crédito y cobro dedicado para cuentas comerciales.</span>
</li>
</ul>
<div className="mt-10 pt-10 border-t border-slate-800">
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-4">Estadísticas Clave</p>
<div className="grid grid-cols-3 gap-8">
<div>
<div className="text-3xl font-semibold tracking-tight text-white">40+</div>
<div className="text-xs text-slate-400 mt-1">Años Exp.</div>
</div>
<div className="">
<div className="text-3xl font-semibold tracking-tight text-white">08</div>
<div className="text-xs text-slate-400 mt-1">Tiendas</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-white">100%</div>
<div className="text-xs text-slate-400 mt-1">Calidad</div>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-6 rounded-xl shadow-xl max-w-xs hidden md:block border-t-4 border-brand-600">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-semibold">Atención Personalizada</div>
<div className="text-xs text-slate-500">Expertos listos para ayudar</div>
</div>
</div>
<p className="text-xs text-slate-500">"Hay que trabajar intensamente, tener entrega y visión."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Nuestro Inventario</h2>
<p className="text-slate-500">Una muestra de la variedad de productos industriales y residenciales.</p>
</div>
<a className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1" href="#">
                    Ver todo el catálogo
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-[600px]">

<div className="col-span-2 row-span-2 relative group overflow-hidden rounded-xl bg-slate-100">
<img alt="Pipes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium">Tubería Industrial</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-slate-100">
<img alt="Faucets" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-sm font-medium">Mezcladoras</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-slate-100">
<img alt="Tools" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-sm font-medium">Herramientas</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-slate-100">
<img alt="Valves" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white text-sm font-medium">Válvulas</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-slate-100">
<img alt="Construction" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-black/60 to-transparent opacity-0 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-white text-sm font-medium">PVC</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center text-slate-900 tracking-tight mb-16">Lo que dicen nuestros clientes</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">"Excelente servicio en el área oeste. Consigo todo lo que necesito para mis proyectos comerciales. La rapidez en el despacho es inigualable."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-semibold text-xs">JC</div>
<div>
<div className="text-sm font-semibold text-slate-900">Juan Carlos</div>
<div className="text-xs text-slate-500">Contratista</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">"Los mejores precios en tubería PVC y cobre. El personal de Hato Rey siempre es muy atento y me ayuda a coordinar las entregas."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-semibold text-xs">MR</div>
<div>
<div className="text-sm font-semibold text-slate-900">María Rivera</div>
<div className="text-xs text-slate-500">Desarrolladora</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">"El servicio de exportación a las islas vírgenes es muy eficiente. HQJ Plumbing es un socio clave para nuestro negocio en el Caribe."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-semibold text-xs">RT</div>
<div>
<div className="text-sm font-semibold text-slate-900">Robert Thomas</div>
<div className="text-xs text-slate-500">St. Thomas Customer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto bg-brand-600 rounded-3xl overflow-hidden relative shadow-2xl shadow-brand-600/30">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-2xl"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black opacity-10 rounded-full blur-2xl"></div>
<div className="relative z-10 p-12 lg:p-16 text-center">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">¿Listo para ordenar?</h2>
<p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">Descargue nuestro catálogo digital 2024 y acceda a miles de productos con precios actualizados.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="bg-white text-brand-600 hover:bg-brand-50 font-medium py-3 px-8 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2" href="http://hqjonline.com/ordenar.php">
                        Enviar Orden Online
                    </a>
<a className="bg-brand-800 text-white hover:bg-brand-900 font-medium py-3 px-8 rounded-lg transition-all border border-brand-500 flex items-center justify-center gap-2" href="http://plomeriahqj.com/docs/ARR-HQJ-CAT-2024-2.pdf" target="_blank">
<iconify-icon icon="solar:file-download-linear" width="20"></iconify-icon>
                        Descargar Catálogo
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">

<div className="flex flex-col items-center justify-center leading-none select-none">
<div className="text-xl font-black tracking-tighter bg-gradient-to-b from-brand-600 from-50% to-slate-900 to-50% bg-clip-text text-transparent scale-y-110 origin-bottom">HQJ</div>
</div>
<span className="text-slate-900 font-bold tracking-tight">HQJ PLUMBING</span>
</div>
<p className="text-sm text-slate-500 mb-6 max-w-xs">Oficina Central:<br/>Plaza Monserrate, Hormigueros, PR 00660<br/>P.O. Box 781</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="https://www.facebook.com/tiendashqj">
<iconify-icon icon="solar:facebook-bold" width="24"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="mailto:servicio@empresashqj.com">
<iconify-icon icon="solar:letter-bold" width="24"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Tiendas</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Aguadilla</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Arecibo</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Caguas</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Hato Rey</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm"> </h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Hormigueros</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Ponce</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Santa Isabel</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Empresa</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#about">Conócenos</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#services">Servicios</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Al Por Mayor</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Crédito Comercial</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 Empresas HQJ. Todos los derechos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Privacidad</a>
<a className="hover:text-slate-600" href="#">Términos</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
