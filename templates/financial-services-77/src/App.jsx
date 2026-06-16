import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Router Logic to switch "pages" (sections)
        function showPage(pageId) {
            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            // Show target section
            const target = document.getElementById(pageId);
            if (target) {
                target.classList.remove('hidden');
                // Scroll to top smoothly
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            }
        }

        // Cookie Banner Logic
        function initCookies() {
            const consent = localStorage.getItem('cookieConsent');
            if (!consent) {
                document.getElementById('cookie-banner').classList.remove('hidden');
                document.getElementById('cookie-banner').classList.add('flex');
            }
        }

        function acceptCookies() {
            localStorage.setItem('cookieConsent', 'accepted');
            document.getElementById('cookie-banner').classList.add('hidden');
            document.getElementById('cookie-banner').classList.remove('flex');
        }

        function rejectCookies() {
            localStorage.setItem('cookieConsent', 'rejected');
            document.getElementById('cookie-banner').classList.add('hidden');
            document.getElementById('cookie-banner').classList.remove('flex');
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            initCookies();
            // Default to home page if no hash or simple load
            showPage('home');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full bg-slate-900 text-slate-300 text-xs py-2 fixed top-0 z-50 border-b border-slate-800">
<div className="marquee-container">
<div className="marquee-content font-medium tracking-wide">
                BIENVENIDO A BADOMATIC — ASESORÍA FINANCIERA DE PRIMER NIVEL — TASA DE CAMBIO PREFERENCIAL PARA NUEVOS CLIENTES — CONTÁCTANOS AL +51 977 556 341 — HORARIO DE ATENCIÓN: LUNES A VIERNES 9:00 AM - 6:00 PM — UBICADOS EN MIRAFLORES, LIMA.
            </div>
</div>
</div>

<nav className="glass-nav fixed top-8 w-full z-40 h-16 flex items-center transition-all duration-300">
<div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">

<a className="text-xl font-semibold tracking-tighter text-slate-900 hover:opacity-70 transition-opacity flex items-center gap-2" href="#" onclick="showPage('home')">
<div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-white text-xs font-bold">B</div>
                BADOMATIC
            </a>

<div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-500">
<button className="hover:text-slate-900 transition-colors" onclick="showPage('about')">Quiénes Somos</button>
<button className="hover:text-slate-900 transition-colors" onclick="showPage('services')">Servicios</button>
<button className="hover:text-slate-900 transition-colors" onclick="showPage('news')">Actualidad</button>
<button className="hover:text-slate-900 transition-colors" onclick="showPage('resources')">Recursos</button>
<button className="hover:text-slate-900 transition-colors" onclick="showPage('contact')">Contacto</button>
</div>

<button className="lg:hidden text-slate-900" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-white z-30 pt-28 px-6 hidden flex-col gap-6 text-lg font-medium text-slate-800" id="mobile-menu">
<button className="border-b border-slate-100 pb-2 text-left" onclick="showPage('about'); toggleMobileMenu()">Quiénes Somos</button>
<button className="border-b border-slate-100 pb-2 text-left" onclick="showPage('services'); toggleMobileMenu()">Servicios</button>
<button className="border-b border-slate-100 pb-2 text-left" onclick="showPage('news'); toggleMobileMenu()">Actualidad</button>
<button className="border-b border-slate-100 pb-2 text-left" onclick="showPage('resources'); toggleMobileMenu()">Herramientas &amp; Guías</button>
<button className="border-b border-slate-100 pb-2 text-left" onclick="showPage('contact'); toggleMobileMenu()">Contacto</button>
</div>


<main className="pt-24 min-h-screen flex flex-col justify-between" id="main-content">

<section className="page-section fade-in" id="home">

<div className="container mx-auto px-4 lg:px-8 py-12 lg:py-24">
<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="lg:w-1/2 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            Soluciones Financieras 2024
                        </div>
<h1 className="text-4xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1]">
                            Potenciando su futuro financiero con precisión.
                        </h1>
<p className="text-lg text-slate-500 font-light leading-relaxed max-w-xl">
                            Badomatic ofrece estrategias integrales de gestión de patrimonio, asesoría contable y consultoría legal. Transformamos la complejidad en claridad para clientes exigentes en Lima y todo el Perú.
                        </p>
<div className="flex flex-wrap gap-4 pt-2">
<button className="bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all flex items-center gap-2" onclick="showPage('contact')">
                                Agendar Consulta
                                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all" onclick="showPage('services')">
                                Explorar Servicios
                            </button>
</div>
</div>
<div className="lg:w-1/2 relative">

<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
<img alt="Equipo financiero Badomatic" className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="border-y border-slate-100 bg-slate-50/50 py-10">
<div className="container mx-auto px-4 text-center">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Confían en nosotros</p>
<div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-50 grayscale">

<span className="text-xl font-bold font-serif">StarkCorp</span>
<span className="text-xl font-bold tracking-tighter">AcmeGlobal</span>
<span className="text-xl font-light italic">VentureLTD</span>
<span className="text-xl font-semibold">InnovaPeru</span>
<span className="text-xl font-bold tracking-widest">APEX</span>
</div>
</div>
</div>

<div className="container mx-auto px-4 lg:px-8 py-20">
<div className="grid md:grid-cols-3 gap-8">
<div className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-white group cursor-pointer" onclick="showPage('services')">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 text-slate-900 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Planificación Tributaria</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Optimizamos su carga fiscal cumpliendo rigurosamente con la normativa peruana vigente.</p>
</div>
<div className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-white group cursor-pointer" onclick="showPage('services')">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 text-slate-900 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Auditoría Legal</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Revisiones exhaustivas para garantizar la seguridad jurídica de su empresa y patrimonio.</p>
</div>
<div className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-white group cursor-pointer" onclick="showPage('services')">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 text-slate-900 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Gestión de Inversiones</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Estrategias de alto rendimiento adaptadas a su perfil de riesgo y objetivos a largo plazo.</p>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in" id="about">
<div className="container mx-auto px-4 lg:px-8 py-12">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Sobre Badomatic</h2>
<p className="text-slate-500 font-light text-lg">Excelencia financiera con un toque humano. Liderados por la visión y experiencia.</p>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center mb-20">
<div className="order-2 md:order-1">
<img alt="Carmen Julia Cespedes Mesones" className="rounded-xl shadow-lg w-full h-96 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 md:order-2 space-y-6">
<h3 className="text-2xl font-medium text-slate-900">Nuestra Representante</h3>
<div className="space-y-4 text-slate-600 font-light leading-relaxed">
<p>
<strong>CARMEN JULIA CÉSPEDES MESONES</strong>, representante legal y fundadora de Badomatic, cuenta con más de 15 años de experiencia en el sector financiero y legal peruano. Su trayectoria se destaca por la implementación de estrategias fiscales innovadoras y un compromiso inquebrantable con la ética profesional.
                            </p>
<p>
                                Bajo su liderazgo, Badomatic ha crecido hasta convertirse en un referente en Miraflores y Lima, asesorando a cientos de empresas en su consolidación económica. Su filosofía se basa en la transparencia, la precisión técnica y el acompañamiento constante al cliente.
                            </p>
</div>
<div className="pt-4 border-t border-slate-100">
<p className="text-sm text-slate-400">Licencia Profesional N° 88392-L | Colegio de Economistas de Lima</p>
</div>
</div>
</div>
<div className="bg-slate-50 rounded-2xl p-8 lg:p-12 mb-12">
<h3 className="text-xl font-medium text-slate-900 mb-6">Misión y Visión</h3>
<div className="grid md:grid-cols-2 gap-8">
<div>
<h4 className="font-medium text-slate-800 mb-2 flex items-center gap-2">
<iconify-icon icon="solar:target-linear"></iconify-icon> Misión
                            </h4>
<p className="text-sm text-slate-500 font-light">Proporcionar soluciones financieras y legales que empoderen a nuestros clientes para tomar decisiones informadas, protegiendo su patrimonio y fomentando un crecimiento sostenible en el mercado peruano.</p>
</div>
<div>
<h4 className="font-medium text-slate-800 mb-2 flex items-center gap-2">
<iconify-icon icon="solar:eye-linear"></iconify-icon> Visión
                            </h4>
<p className="text-sm text-slate-500 font-light">Ser la firma de consultoría financiera más confiable y tecnológicamente avanzada de Lima, reconocida por nuestra integridad, innovación y resultados tangibles para el año 2030.</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in" id="services">
<div className="bg-slate-900 text-white py-16">
<div className="container mx-auto px-4 lg:px-8">
<h2 className="text-3xl font-medium tracking-tight mb-4">Nuestros Servicios</h2>
<p className="text-slate-400 font-light max-w-2xl">Soluciones a medida diseñadas para navegar el complejo panorama financiero actual.</p>
</div>
</div>
<div className="container mx-auto px-4 lg:px-8 py-16 -mt-10">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:calculator-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Contabilidad Corporativa</h3>
<p className="text-sm text-slate-500 font-light mb-4">Gestión completa de libros contables, balances y estados financieros bajo normas NIIF.</p>
<ul className="text-xs text-slate-500 space-y-2 list-disc list-inside">
<li>Balances mensuales</li>
<li>Declaraciones juradas</li>
<li>Libros electrónicos</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
<div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Asesoría de Inversiones</h3>
<p className="text-sm text-slate-500 font-light mb-4">Análisis de mercado y construcción de portafolios diversificados para maximizar retornos.</p>
<ul className="text-xs text-slate-500 space-y-2 list-disc list-inside">
<li>Fondos Mutuos y Acciones</li>
<li>Bienes Raíces en Lima</li>
<li>Evaluación de Riesgo</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
<div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:document-text-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Consultoría Legal Tributaria</h3>
<p className="text-sm text-slate-500 font-light mb-4">Defensa y planificación ante SUNAT y entidades regulatorias.</p>
<ul className="text-xs text-slate-500 space-y-2 list-disc list-inside">
<li>Reclamos y apelaciones</li>
<li>Auditorías preventivas</li>
<li>Constitución de empresas</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Gestión de Planillas</h3>
<p className="text-sm text-slate-500 font-light mb-4">Administración eficiente de recursos humanos, beneficios sociales y contratos.</p>
<ul className="text-xs text-slate-500 space-y-2 list-disc list-inside">
<li>Cálculo de CTS y Gratificaciones</li>
<li>T-Registro y PLAME</li>
<li>Liquidaciones</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
<div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:global-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Comercio Exterior</h3>
<p className="text-sm text-slate-500 font-light mb-4">Asesoría en importaciones y exportaciones, aduanas y financiamiento internacional.</p>
<ul className="text-xs text-slate-500 space-y-2 list-disc list-inside">
<li>Drawback</li>
<li>Costeo de importaciones</li>
<li>Cartas de crédito</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
<div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:shield-keyhole-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Ciberseguridad Financiera</h3>
<p className="text-sm text-slate-500 font-light mb-4">Auditoría de procesos digitales para proteger las transacciones de su empresa.</p>
<ul className="text-xs text-slate-500 space-y-2 list-disc list-inside">
<li>Protocolos antifraude</li>
<li>Seguridad bancaria</li>
<li>Protección de datos</li>
</ul>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in" id="news">
<div className="container mx-auto px-4 lg:px-8 py-12">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-8">Actualidad Económica</h2>
<p className="text-slate-500 mb-12 max-w-2xl font-light">Un recorrido por los hitos financieros más importantes que han impactado el mercado peruano y global desde el 2020 hasta hoy.</p>
<div className="relative border-l border-slate-200 ml-4 space-y-12">

<div className="relative pl-8">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 border-white"></div>
<span className="text-xs font-bold text-slate-400 mb-1 block">2024 - PRESENTE</span>
<h3 className="text-xl font-medium text-slate-900 mb-2">La Era de la Digitalización Fiscal</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed mb-4">
                            La SUNAT implementa el SIRE (Sistema Integrado de Registros Electrónicos) de forma obligatoria para casi todos los contribuyentes. Badomatic lanza su herramienta de conciliación automática para adaptarse a este cambio. El mercado peruano muestra una recuperación moderada en sectores mineros y agroindustriales.
                        </p>
<img className="rounded-lg w-full md:w-1/2 h-40 object-cover mb-2" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative pl-8">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-300 border-2 border-white"></div>
<span className="text-xs font-bold text-slate-400 mb-1 block">2023</span>
<h3 className="text-xl font-medium text-slate-900 mb-2">Control de la Inflación</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                            Año marcado por las políticas restrictivas del Banco Central de Reserva para controlar la inflación post-pandemia. Las tasas de interés alcanzaron picos históricos, afectando el crédito hipotecario y de consumo. Asesoramos a nuestros clientes en la reestructuración de deuda.
                        </p>
</div>

<div className="relative pl-8">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-300 border-2 border-white"></div>
<span className="text-xs font-bold text-slate-400 mb-1 block">2022</span>
<h3 className="text-xl font-medium text-slate-900 mb-2">Volatilidad Cambiaria</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                            Fuerte fluctuación del tipo de cambio Sol/Dólar debido a la incertidumbre política local y factores externos. Badomatic implementó estrategias de cobertura cambiaria (Hedging) para clientes importadores, salvaguardando sus márgenes de ganancia.
                        </p>
</div>

<div className="relative pl-8">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-300 border-2 border-white"></div>
<span className="text-xs font-bold text-slate-400 mb-1 block">2021</span>
<h3 className="text-xl font-medium text-slate-900 mb-2">Reactivación Económica</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                            El año del "rebote". Apertura progresiva de mercados tras el confinamiento. Enfoque masivo en la formalización de emprendimientos digitales y comercio electrónico. Lanzamos nuestro servicio de constitución de empresas online.
                        </p>
</div>

<div className="relative pl-8">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-300 border-2 border-white"></div>
<span className="text-xs font-bold text-slate-400 mb-1 block">2020</span>
<h3 className="text-xl font-medium text-slate-900 mb-2">Resiliencia ante la Crisis</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                            Inicio de la pandemia COVID-19. Gestión de programas de ayuda estatal como Reactiva Perú. Badomatic operó 100% en remoto para garantizar la continuidad de las nóminas y obligaciones tributarias de nuestros clientes en tiempos críticos.
                        </p>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in" id="resources">
<div className="container mx-auto px-4 lg:px-8 py-12">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-8">Centro de Recursos</h2>

<div className="flex gap-4 border-b border-slate-200 mb-8 overflow-x-auto no-scrollbar">
<button className="pb-2 border-b-2 border-slate-900 text-slate-900 font-medium whitespace-nowrap">Guías</button>
<button className="pb-2 text-slate-500 hover:text-slate-800 transition-colors whitespace-nowrap">Glosario Financiero</button>
<button className="pb-2 text-slate-500 hover:text-slate-800 transition-colors whitespace-nowrap">Herramientas</button>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group block">
<div className="aspect-video bg-slate-100 rounded-lg mb-3 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-medium text-slate-900 group-hover:underline decoration-1 underline-offset-4">Guía para la Declaración Anual de Renta 2024</h3>
<p className="text-xs text-slate-500 mt-1">PDF Descargable • 15 min lectura</p>
</div>

<div className="group block">
<div className="aspect-video bg-slate-100 rounded-lg mb-3 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-medium text-slate-900 group-hover:underline decoration-1 underline-offset-4">Cómo constituir una SAC en Perú</h3>
<p className="text-xs text-slate-500 mt-1">Artículo • 10 min lectura</p>
</div>

<div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
<div className="flex items-center justify-between mb-4">
<h3 className="font-medium text-slate-900">Calculadora IGV</h3>
<iconify-icon className="text-slate-400" icon="solar:calculator-minimalistic-linear"></iconify-icon>
</div>
<div className="space-y-3">
<input className="w-full text-sm p-2 rounded border border-slate-200" placeholder="Monto Base" type="number"/>
<div className="flex justify-between text-sm text-slate-600">
<span>IGV (18%):</span>
<span className="font-mono">0.00</span>
</div>
<div className="flex justify-between text-sm font-semibold text-slate-900 pt-2 border-t border-slate-200">
<span>Total:</span>
<span className="font-mono">0.00</span>
</div>
<button className="w-full bg-slate-900 text-white text-xs py-2 rounded hover:bg-slate-800">Calcular</button>
</div>
</div>
</div>
<div className="mt-12">
<h3 className="text-xl font-medium text-slate-900 mb-4">Glosario Rápido</h3>
<div className="grid md:grid-cols-2 gap-4 text-sm font-light">
<div className="p-4 border border-slate-100 rounded-lg">
<strong className="text-slate-900 block mb-1">UIT (Unidad Impositiva Tributaria)</strong>
<p className="text-slate-500">Valor de referencia que puede ser utilizado en las normas tributarias para determinar impuestos, infracciones, multas u otros aspectos tributarios.</p>
</div>
<div className="p-4 border border-slate-100 rounded-lg">
<strong className="text-slate-900 block mb-1">Detracción</strong>
<p className="text-slate-500">Descuento que efectúa el comprador o usuario de un bien o servicio afecto al sistema, de un porcentaje del importe a pagar.</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in" id="contact">
<div className="container mx-auto px-4 lg:px-8 py-12">
<div className="flex flex-col lg:flex-row gap-12">

<div className="lg:w-1/2 space-y-8">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Hablemos de negocios</h2>
<p className="text-slate-500 font-light">Estamos listos para asistirle. Visítenos en nuestras oficinas o envíenos un mensaje directo.</p>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-900 mt-1" icon="solar:map-point-linear" width="20"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900 text-sm">Oficina Principal</h4>
<p className="text-slate-500 text-sm font-light">Avda. Jose Pardo 620, Sótano Tda#18.<br/>Miraflores, Lima 15047, Perú.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-900 mt-1" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900 text-sm">Teléfono</h4>
<p className="text-slate-500 text-sm font-light">+51 977 556 341</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-900 mt-1" icon="solar:letter-linear" width="20"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900 text-sm">Email</h4>
<p className="text-slate-500 text-sm font-light">contacto@badomatic.sbs</p>
</div>
</div>
</div>

<div className="w-full h-64 bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7586738914614!2d-77.02986892389658!3d-12.12267954316654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81a287a93a5%3A0x6a2c28666324905d!2sAv.%20Jos%C3%A9%20Pardo%20620%2C%20Miraflores%2015074%2C%20Per%C3%BA!5e0!3m2!1ses!2sus!4v1700000000000!5m2!1ses!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>

<div className="lg:w-1/2">
<form className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4">
<h3 className="text-lg font-medium text-slate-900 mb-2">Envíenos un mensaje</h3>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Nombre</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 transition-shadow" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Apellido</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 transition-shadow" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Correo Electrónico</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 transition-shadow" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Teléfono</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 transition-shadow" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Asunto</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 transition-shadow text-slate-600">
<option>Asesoría Contable</option>
<option>Consultoría Legal</option>
<option>Inversiones</option>
<option>Otro</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Mensaje</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 transition-shadow" rows="4"></textarea>
</div>
<div className="flex items-center gap-2">
<input className="rounded border-slate-300 text-slate-900 focus:ring-slate-900" id="form-privacy" type="checkbox"/>
<label className="text-xs text-slate-500" htmlFor="form-privacy">He leído y acepto la <button className="underline hover:text-slate-900" onclick="showPage('privacy')">Política de Privacidad</button>.</label>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-3 rounded-lg hover:bg-slate-800 transition-colors text-sm" type="submit">Enviar Mensaje</button>
</form>
</div>
</div>
</div>
</section>


<section className="page-section hidden fade-in container mx-auto px-4 lg:px-8 py-12" id="legal">
<h1 className="text-3xl font-medium tracking-tight text-slate-900 mb-8">Información Legal</h1>
<div className="prose prose-slate prose-sm max-w-4xl text-slate-500 font-light">
<p>En cumplimiento con la Ley N° 29733, Ley de Protección de Datos Personales, y demás normativas vigentes en la República del Perú, Badomatic pone a disposición del público la siguiente información legal:</p>
<h3 className="text-slate-800 font-medium mt-6">Datos de la Empresa</h3>
<ul>
<li><strong>Razón Social:</strong> Badomatic Servicios Financieros S.A.C.</li>
<li><strong>RUC:</strong> 20123456789 (Referencial)</li>
<li><strong>Domicilio Fiscal:</strong> Avda. Jose Pardo 620, Sótano Tda#18, Miraflores, Lima 15047, Perú.</li>
<li><strong>Representante Legal:</strong> Carmen Julia Céspedes Mesones.</li>
</ul>
<h3 className="text-slate-800 font-medium mt-6">Propiedad Intelectual</h3>
<p>Todos los contenidos del sitio web, incluyendo textos, gráficos, logotipos, iconos, imágenes, así como el diseño gráfico y software, son propiedad exclusiva de Badomatic o de terceros que han autorizado su uso. Queda prohibida la reproducción total o parcial sin autorización expresa.</p>
</div>
</section>

<section className="page-section hidden fade-in container mx-auto px-4 lg:px-8 py-12" id="privacy">
<h1 className="text-3xl font-medium tracking-tight text-slate-900 mb-8">Política de Privacidad</h1>
<div className="prose prose-slate prose-sm max-w-4xl text-slate-500 font-light space-y-4">
<p>Última actualización: Noviembre 2024.</p>
<p>En Badomatic, valoramos su privacidad y estamos comprometidos a proteger sus datos personales. Esta política describe cómo recopilamos, usamos y salvaguardamos su información.</p>
<h3 className="text-slate-800 font-medium">1. Recolección de Datos</h3>
<p>Recopilamos información personal que usted nos proporciona voluntariamente a través de nuestros formularios de contacto, suscripciones a boletines y contratación de servicios. Esto incluye nombre, correo electrónico, número de teléfono y datos de la empresa.</p>
<h3 className="text-slate-800 font-medium">2. Uso de la Información</h3>
<p>La información recopilada se utiliza para:</p>
<ul className="list-disc pl-5">
<li>Proveer y gestionar los servicios financieros contratados.</li>
<li>Responder a sus consultas y solicitudes.</li>
<li>Enviar información relevante sobre cambios fiscales o legales (con su consentimiento).</li>
<li>Mejorar la experiencia del usuario en nuestro sitio web.</li>
</ul>
<h3 className="text-slate-800 font-medium">3. Derechos ARCO</h3>
<p>Como titular de sus datos personales, usted tiene el derecho de Acceso, Rectificación, Cancelación y Oposición (Derechos ARCO). Para ejercer estos derechos, puede enviar una solicitud a <strong>contacto@badomatic.sbs</strong> dirigida a nuestra representante legal, Carmen Julia Céspedes Mesones.</p>
</div>
</section>

<section className="page-section hidden fade-in container mx-auto px-4 lg:px-8 py-12" id="terms">
<h1 className="text-3xl font-medium tracking-tight text-slate-900 mb-8">Términos y Condiciones</h1>
<div className="prose prose-slate prose-sm max-w-4xl text-slate-500 font-light space-y-4">
<p>Bienvenido a Badomatic. Al acceder y utilizar este sitio web, usted acepta cumplir con los siguientes términos y condiciones de uso.</p>
<h3 className="text-slate-800 font-medium">1. Uso del Sitio</h3>
<p>El contenido de este sitio web es solo para información general. Está sujeto a cambios sin previo aviso. Ni nosotros ni terceros ofrecemos garantía alguna sobre la exactitud, puntualidad, rendimiento, integridad o idoneidad de la información y los materiales encontrados u ofrecidos en este sitio web para cualquier propósito particular.</p>
<h3 className="text-slate-800 font-medium">2. Limitación de Responsabilidad</h3>
<p>Badomatic no será responsable de ningún daño directo, indirecto, incidental o consecuente que resulte del uso o la imposibilidad de uso de nuestros servicios o del contenido del sitio web.</p>
<h3 className="text-slate-800 font-medium">3. Ley Aplicable</h3>
<p>Estos términos se rigen e interpretan de acuerdo con las leyes de la República del Perú. Cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Lima.</p>
</div>
</section>

<section className="page-section hidden fade-in container mx-auto px-4 lg:px-8 py-12" id="cookies-policy">
<h1 className="text-3xl font-medium tracking-tight text-slate-900 mb-8">Política de Cookies</h1>
<div className="prose prose-slate prose-sm max-w-4xl text-slate-500 font-light space-y-4">
<p>Badomatic utiliza cookies para mejorar su experiencia de navegación. Una cookie es un pequeño archivo de texto que los sitios web guardan en su ordenador o dispositivo móvil.</p>
<h3 className="text-slate-800 font-medium">Tipos de Cookies que utilizamos</h3>
<ul className="list-disc pl-5">
<li><strong>Cookies Esenciales:</strong> Necesarias para el funcionamiento técnico del sitio web.</li>
<li><strong>Cookies de Análisis:</strong> Nos ayudan a entender cómo interactúan los visitantes con el sitio (ej. Google Analytics).</li>
<li><strong>Cookies de Publicidad:</strong> Utilizadas para mostrar anuncios relevantes (ej. Google Ads).</li>
</ul>
<p>Puede configurar su navegador para rechazar todas las cookies o para indicar cuándo se envía una cookie.</p>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 mt-auto pt-16 pb-8">
<div className="container mx-auto px-4 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div className="space-y-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-slate-900 rounded-full flex items-center justify-center text-white text-[10px] font-bold">B</div>
<span className="text-lg font-semibold tracking-tighter text-slate-900">BADOMATIC</span>
</div>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                            Servicios financieros integrales diseñados para el crecimiento sostenible de su empresa en el mercado peruano.
                        </p>
<div className="flex gap-4 pt-2">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a> 
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a> 
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon></a> 
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Empresa</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><button className="hover:text-slate-900" onclick="showPage('about')">Quiénes Somos</button></li>
<li><button className="hover:text-slate-900" onclick="showPage('contact')">Contacto</button></li>
<li><button className="hover:text-slate-900" onclick="showPage('news')">Noticias</button></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><button className="hover:text-slate-900" onclick="showPage('legal')">Información Legal</button></li>
<li><button className="hover:text-slate-900" onclick="showPage('privacy')">Política de Privacidad</button></li>
<li><button className="hover:text-slate-900" onclick="showPage('cookies-policy')">Política de Cookies</button></li>
<li><button className="hover:text-slate-900" onclick="showPage('terms')">Términos y Condiciones</button></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Contacto</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li>contacto@badomatic.sbs</li>
<li>+51 977 556 341</li>
<li>Avda. Jose Pardo 620, Sótano Tda#18.<br/>Miraflores, Lima 15047</li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-light">
<p>© 2024 Badomatic Servicios Financieros. Todos los derechos reservados.</p>
<p>Diseñado con precisión.</p>
</div>
</div>
</footer>
</main>


<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center" href="https://wa.me/51977556341" target="_blank">
<iconify-icon icon="brandico:whatsapp" width="28"></iconify-icon>
</a>

<div className="fixed bottom-6 left-6 max-w-sm bg-white border border-slate-200 p-6 rounded-xl shadow-2xl z-40 hidden flex-col gap-4" id="cookie-banner">
<div className="flex items-start gap-3">
<iconify-icon className="text-slate-900 text-2xl mt-1" icon="solar:cookie-linear"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-slate-900">Uso de Cookies</h4>
<p className="text-xs text-slate-500 mt-1 font-light leading-relaxed">
                    Utilizamos cookies para mejorar su experiencia y analizar nuestro tráfico. Al continuar, acepta nuestra <button className="underline" onclick="showPage('cookies-policy')">política de cookies</button>.
                </p>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 bg-slate-900 text-white text-xs font-medium py-2 rounded-lg hover:bg-slate-800" onclick="acceptCookies()">Aceptar</button>
<button className="flex-1 bg-white border border-slate-200 text-slate-700 text-xs font-medium py-2 rounded-lg hover:bg-slate-50" onclick="rejectCookies()">Rechazar</button>
</div>
</div>



    </>
  );
}
