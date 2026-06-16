import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-[#E30613] p-2 rounded-lg text-white group-hover:bg-[#FFC300] transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="bus"></i>
</div>
<span className="text-2xl font-semibold tracking-tight text-gray-900">
                        Andabús<span className="text-[#E30613]">Oaxaca</span>
</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-gray-600 hover:text-[#E30613] transition-colors" href="#inicio">Inicio</a>
<a className="text-base font-medium text-gray-600 hover:text-[#E30613] transition-colors" href="#recorrido">Recorrido</a>
<a className="text-base font-medium text-gray-600 hover:text-[#E30613] transition-colors" href="#horarios">Horarios</a>
<a className="text-base font-medium text-gray-600 hover:text-[#E30613] transition-colors" href="#precio">Precio</a>
<a className="text-base font-medium text-gray-600 hover:text-[#E30613] transition-colors" href="#faq">FAQ</a>
<a className="bg-[#FFC300] hover:bg-[#e6b000] text-gray-900 px-5 py-2.5 rounded-full font-semibold text-base transition-all transform hover:scale-105 flex items-center gap-2" href="https://wa.me/5219510000000">
                        Comprar Boleto
                        <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>

<button className="md:hidden p-2 text-gray-600 hover:text-[#E30613]">
<i className="w-7 h-7 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="inicio">

<div className="absolute inset-0 z-0">

<img alt="Oaxaca City Tour Bus" className="w-full h-full object-cover object-center brightness-[0.65]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center md:text-left">
<div className="max-w-3xl">
<span className="inline-block px-4 py-1.5 rounded-full bg-[#E30613] text-white text-sm font-semibold tracking-wide mb-6 animate-fade-in-up">
                    TURISMO OFICIAL OAXACA
                </span>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                    Descubre Oaxaca con <br/><span className="text-[#FFC300]">Andabús City Tour</span>
</h1>
<p className="text-xl text-gray-100 mb-8 font-medium leading-relaxed max-w-2xl">
                    Sube y baja las veces que quieras y recorre la magia de la ciudad. La forma más fácil, segura y divertida de conocer.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10 text-white/90 text-base font-medium">
<div className="flex items-center gap-2">
<div className="bg-white/20 p-1 rounded-full"><i className="w-4 h-4 text-[#FFC300]" data-lucide="check"></i></div>
                        Compra fácil por WhatsApp
                    </div>
<div className="flex items-center gap-2">
<div className="bg-white/20 p-1 rounded-full"><i className="w-4 h-4 text-[#FFC300]" data-lucide="credit-card"></i></div>
                        Paga con tarjeta
                    </div>
<div className="flex items-center gap-2">
<div className="bg-white/20 p-1 rounded-full"><i className="w-4 h-4 text-[#FFC300]" data-lucide="map"></i></div>
                        Ruta emblemática
                    </div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#FFC300] hover:bg-[#e6b000] text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-yellow-500/20 flex justify-center items-center gap-3" href="https://wa.me/5219510000000">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="message-circle"></i>
                        Comprar mi boleto
                    </a>
<a className="bg-transparent border-2 border-white hover:bg-white hover:text-[#E30613] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex justify-center items-center gap-3" href="#recorrido">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="map-pin"></i>
                        Ver recorrido y horarios
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">¿Cómo funciona Andabús?</h2>
<p className="text-gray-500 max-w-2xl mx-auto">Conoce Oaxaca a tu propio ritmo en solo tres sencillos pasos.</p>
</div>
<div className="grid md:grid-cols-3 gap-12">

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E30613] transition-colors duration-300">
<i className="w-10 h-10 text-[#E30613] group-hover:text-white stroke-[1.5] transition-colors" data-lucide="clock"></i>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-3">1. Elige tu horario</h3>
<p className="text-gray-500 leading-relaxed">Consulta nuestras salidas diarias y elige la que mejor se adapte a tu itinerario.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FFC300] transition-colors duration-300">
<i className="w-10 h-10 text-[#FFC300] group-hover:text-gray-900 stroke-[1.5] transition-colors" data-lucide="message-square"></i>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-3">2. Compra por WhatsApp</h3>
<p className="text-gray-500 leading-relaxed">Escríbenos, reserva tu lugar y paga de forma segura con tarjeta de crédito o débito.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E30613] transition-colors duration-300">
<i className="w-10 h-10 text-[#E30613] group-hover:text-white stroke-[1.5] transition-colors" data-lucide="camera"></i>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-3">3. Disfruta el recorrido</h3>
<p className="text-gray-500 leading-relaxed">Súbete al camión rojo, toma las mejores fotos y vive Oaxaca desde otro ángulo.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="recorrido">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-[#E30613] font-semibold tracking-wide uppercase text-sm mb-2 block">El Circuito</span>
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">¿Qué incluye el City Tour?</h2>
<p className="text-gray-500 mb-8">
                        Nuestro recorrido panorámico pasa por los puntos más neurálgicos e históricos de la ciudad. Ideal para tener una vista general de Oaxaca en poco tiempo.
                    </p>
<div className="grid sm:grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-3 shadow-sm">
<i className="text-[#E30613] w-5 h-5" data-lucide="map-pin"></i>
<span className="font-medium">Templo de Santo Domingo</span>
</div>
<div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-3 shadow-sm">
<i className="text-[#FFC300] w-5 h-5" data-lucide="map-pin"></i>
<span className="font-medium">Zócalo de la Ciudad</span>
</div>
<div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-3 shadow-sm">
<i className="text-pink-500 w-5 h-5" data-lucide="map-pin"></i>
<span className="font-medium">Teatro Macedonio Alcalá</span>
</div>
<div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-3 shadow-sm">
<i className="text-orange-500 w-5 h-5" data-lucide="map-pin"></i>
<span className="font-medium">Barrio de Jalatlaco</span>
</div>
<div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-3 shadow-sm">
<i className="text-purple-500 w-5 h-5" data-lucide="map-pin"></i>
<span className="font-medium">Acueducto Colonial</span>
</div>
<div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-3 shadow-sm">
<i className="text-[#E30613] w-5 h-5" data-lucide="map-pin"></i>
<span className="font-medium">Fuente de las 8 Regiones</span>
</div>
</div>
</div>

<div className="relative bg-white rounded-3xl p-4 shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500 border-4 border-white">
<img alt="Santo Domingo Oaxaca" className="rounded-2xl w-full h-[500px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute bottom-8 left-8 bg-[#FFC300] text-gray-900 px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2">
<i className="w-5 h-5" data-lucide="camera"></i>
                        Vistas Panorámicas
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100" id="horarios">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Horarios y Punto de Salida</h2>
<p className="text-gray-500 mb-12">Llega 15 minutos antes de la salida para asegurar tu lugar. <br/>El recorrido inicia puntualmente.</p>
<div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm mb-10">
<div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
<div className="pt-4 md:pt-0">
<div className="text-[#E30613] font-semibold uppercase tracking-wider text-sm mb-2">Mañana</div>
<ul className="space-y-2 font-medium text-gray-900">
<li>10:00 AM</li>
<li>11:00 AM</li>
<li>12:00 PM</li>
</ul>
</div>
<div className="pt-4 md:pt-0">
<div className="text-[#FFC300] font-semibold uppercase tracking-wider text-sm mb-2">Medio Día</div>
<ul className="space-y-2 font-medium text-gray-900">
<li>01:00 PM</li>
<li>02:00 PM</li>
<li>03:00 PM</li>
</ul>
</div>
<div className="pt-4 md:pt-0">
<div className="text-gray-400 font-semibold uppercase tracking-wider text-sm mb-2">Tarde</div>
<ul className="space-y-2 font-medium text-gray-900">
<li>04:00 PM</li>
<li>05:00 PM</li>
<li>06:00 PM</li>
</ul>
</div>
</div>
</div>
<div className="inline-flex items-center gap-2 bg-red-50 text-[#E30613] px-6 py-3 rounded-full font-medium">
<i className="w-5 h-5" data-lucide="map-pin"></i>
                Salida: Frente a la Catedral (Alameda de León)
            </div>
</div>
</section>

<section className="py-24 bg-[#E30613] relative overflow-hidden" id="precio">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFC300]/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
<div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
<div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
<span className="text-[#E30613] font-bold tracking-wide uppercase mb-2">Oferta Especial</span>
<h2 className="text-5xl font-semibold tracking-tight text-gray-900 mb-6">Viaja todo el día por un precio único</h2>
<div className="flex items-baseline gap-2 mb-8">
<span className="text-6xl font-bold text-gray-900 tracking-tight">$100</span>
<span className="text-2xl text-gray-500 font-medium">MXN</span>
<span className="text-lg text-gray-400 ml-2">/ por persona</span>
</div>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3">
<div className="bg-green-100 p-1 rounded-full"><i className="w-4 h-4 text-green-600" data-lucide="check"></i></div>
<span>Acceso todo el día (Hop on - Hop off)</span>
</li>
<li className="flex items-center gap-3">
<div className="bg-green-100 p-1 rounded-full"><i className="w-4 h-4 text-green-600" data-lucide="check"></i></div>
<span>Niños menores de 3 años viajan gratis</span>
</li>
<li className="flex items-center gap-3">
<div className="bg-green-100 p-1 rounded-full"><i className="w-4 h-4 text-green-600" data-lucide="check"></i></div>
<span>Seguro de viajero incluido</span>
</li>
</ul>
<a className="w-full bg-[#FFC300] hover:bg-[#e6b000] text-gray-900 py-4 rounded-xl font-bold text-center text-lg transition-all flex justify-center items-center gap-2" href="https://wa.me/5219510000000">
<i className="w-5 h-5" data-lucide="credit-card"></i>
                        Pagar ahora por WhatsApp
                    </a>
<p className="text-center text-sm text-gray-400 mt-4">Aceptamos Visa, Mastercard y Amex.</p>
</div>
<div className="lg:w-1/2 bg-gray-100 relative min-h-[400px]">
<img alt="Turistas en Oaxaca" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12">Viaja seguro, viaja con Andabús</h2>
<div className="grid md:grid-cols-4 gap-8">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
<i className="w-10 h-10 text-[#E30613] mx-auto mb-4 stroke-[1.5]" data-lucide="shield-check"></i>
<h3 className="font-semibold text-gray-900 mb-2">Empresa Formal</h3>
<p className="text-sm text-gray-500">Agencia oaxaqueña registrada y certificada.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
<i className="w-10 h-10 text-[#FFC300] mx-auto mb-4 stroke-[1.5]" data-lucide="users"></i>
<h3 className="font-semibold text-gray-900 mb-2">Operadores Expertos</h3>
<p className="text-sm text-gray-500">Conductores capacitados para tu seguridad.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
<i className="w-10 h-10 text-pink-500 mx-auto mb-4 stroke-[1.5]" data-lucide="bus"></i>
<h3 className="font-semibold text-gray-900 mb-2">Unidades Seguras</h3>
<p className="text-sm text-gray-500">Mantenimiento constante y seguro vigente.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
<i className="w-10 h-10 text-orange-500 mx-auto mb-4 stroke-[1.5]" data-lucide="thumbs-up"></i>
<h3 className="font-semibold text-gray-900 mb-2">Satisfacción</h3>
<p className="text-sm text-gray-500">Miles de turistas felices nos respaldan.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Lo que dicen nuestros viajeros</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-gray-50 p-8 rounded-3xl">
<div className="flex gap-1 mb-4">
<i className="w-5 h-5 fill-[#FFC300] text-[#FFC300]" data-lucide="star"></i>
<i className="w-5 h-5 fill-[#FFC300] text-[#FFC300]" data-lucide="star"></i>
<i className="w-5 h-5 fill-[#FFC300] text-[#FFC300]" data-lucide="star"></i>
<i className="w-5 h-5 fill-[#FFC300] text-[#FFC300]" data-lucide="star"></i>
<i className="w-5 h-5 fill-[#FFC300] text-[#FFC300]" data-lucide="star"></i>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">"Excelente servicio. El recorrido es muy completo y el guía explicó todo súper bien. ¡Me encantó poder pagar por WhatsApp!"</p>
<div className="font-semibold text-gray-900">Mariana G.</div>
<div className="text-sm text-gray-400">Visitante de CDMX</div>
</div>

<div className="bg-gray-50 p-8 rounded-3xl">
<div className="flex gap-1 mb-4">
<i className="w-5 h-5 fill-[#FFC300] text-[#FFC300]" data-lucide="star"></i>
<i className="w-5 h-5 fill-[#FFC300] text-[#FFC300]" data-lucide="star"></i>
<i className="w-5 h-5 fill-[#FFC300] text-[#FFC300]" data-lucide="star"></i>
<i className="w-5 h-5 fill-[#FFC300] text-[#FFC300]" data-lucide="star"></i>
<i className="w-5 h-5 fill-[#FFC300] text-[#FFC300]" data-lucide="star"></i>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">"Muy buena opción para conocer el centro si tienes poco tiempo. El camión está en muy buen estado y son muy puntuales."</p>
<div className="font-semibold text-gray-900">Carlos R.</div>
<div className="text-sm text-gray-400">Visitante de Puebla</div>
</div>

<div className="bg-gray-50 p-8 rounded-3xl">
<div className="flex gap-1 mb-4">
<i className="w-5 h-5 fill-[#FFC300] text-[#FFC300]" data-lucide="star"></i>
<i className="w-5 h-5 fill-[#FFC300] text-[#FFC300]" data-lucide="star"></i>
<i className="w-5 h-5 fill-[#FFC300] text-[#FFC300]" data-lucide="star"></i>
<i className="w-5 h-5 fill-[#FFC300] text-[#FFC300]" data-lucide="star"></i>
<i className="w-5 h-5 fill-[#FFC300] text-[#FFC300]" data-lucide="star"></i>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">"Mis hijos se divirtieron mucho en el segundo piso del autobús. Totalmente recomendado para familias."</p>
<div className="font-semibold text-gray-900">Familia Torres</div>
<div className="text-sm text-gray-400">Locales</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white max-w-3xl mx-auto px-6 lg:px-8" id="faq">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10 text-center">Preguntas Frecuentes</h2>
<div className="space-y-4">
<details className="group bg-gray-50 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-[#E30613]/20">
<summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                    ¿Dónde se toma el camión?
                    <span className="ml-4 shrink-0 bg-white p-1.5 rounded-full shadow-sm text-gray-400 group-open:text-[#E30613]">
<i className="w-5 h-5 stroke-[2] group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="mt-4 text-gray-500 leading-relaxed">
                    El punto de partida principal es en la Alameda de León, justo frente a la Catedral. Puedes identificar fácilmente nuestro camión rojo de Andabús.
                </div>
</details>
<details className="group bg-gray-50 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-[#E30613]/20">
<summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                    ¿Puedo subir y bajar varias veces?
                    <span className="ml-4 shrink-0 bg-white p-1.5 rounded-full shadow-sm text-gray-400 group-open:text-[#E30613]">
<i className="w-5 h-5 stroke-[2] group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="mt-4 text-gray-500 leading-relaxed">
                    ¡Sí! Tu boleto es válido por todo el día. Puedes bajar en cualquiera de nuestras paradas autorizadas y volver a subir en el siguiente autobús disponible.
                </div>
</details>
<details className="group bg-gray-50 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-[#E30613]/20">
<summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                    ¿Cómo pago por WhatsApp?
                    <span className="ml-4 shrink-0 bg-white p-1.5 rounded-full shadow-sm text-gray-400 group-open:text-[#E30613]">
<i className="w-5 h-5 stroke-[2] group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="mt-4 text-gray-500 leading-relaxed">
                    Es muy sencillo. Haz clic en el botón de compra, te llevará a nuestro chat oficial. Ahí te enviaremos un enlace de pago seguro donde podrás usar tu tarjeta de crédito o débito. Recibirás tu boleto digital al instante.
                </div>
</details>
<details className="group bg-gray-50 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-[#E30613]/20">
<summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                    ¿Tienen descuentos para niños o adultos mayores?
                    <span className="ml-4 shrink-0 bg-white p-1.5 rounded-full shadow-sm text-gray-400 group-open:text-[#E30613]">
<i className="w-5 h-5 stroke-[2] group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="mt-4 text-gray-500 leading-relaxed">
                    Los niños menores de 3 años viajan gratis (sentados en las piernas de sus padres). Para grupos grandes o INAPAM, por favor consúltanos directamente en taquilla o WhatsApp.
                </div>
</details>
</div>
</section>

<section className="py-24 bg-[#E30613] relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-8">¿Listo para recorrer Oaxaca?</h2>
<p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">No hagas filas. Reserva tu lugar ahora mismo desde tu celular y asegura tu asiento.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-[#FFC300] hover:bg-[#e6b000] text-gray-900 px-10 py-5 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-3" href="https://wa.me/5219510000000">
<i className="w-6 h-6 stroke-[2]" data-lucide="message-circle"></i>
                    Comprar mi boleto por WhatsApp
                </a>
</div>
<div className="mt-8 text-white/70 font-medium">
                ¿Dudas? Escríbenos a: <a className="underline hover:text-white" href="mailto:hola@andabus.com">hola@andabus.com</a>
</div>
</div>
</section>

<footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-[#E30613]" data-lucide="bus"></i>
<span className="text-xl font-semibold tracking-tight">Andabús Oaxaca</span>
</div>
<div className="flex gap-8 text-gray-400 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#">Aviso de Privacidad</a>
<a className="hover:text-white transition-colors" href="#">Términos y Condiciones</a>
<a className="hover:text-white transition-colors" href="#">Facebook</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
<div className="text-gray-500 text-sm">
                © 2023 Andabús City Tour. Hecho en Oaxaca.
            </div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all hover:-translate-y-1 group" href="https://wa.me/5219510000000">
<i className="w-8 h-8 stroke-[2]" data-lucide="message-circle"></i>
<span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            ¡Reserva aquí!
        </span>
</a>


    </>
  );
}
