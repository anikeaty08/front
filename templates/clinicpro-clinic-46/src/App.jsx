import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"@context": "https://schema.org",
"@type": "SoftwareApplication",
"name": "ClinicPro",
"applicationCategory": "BusinessApplication",
"offers": {
"@type": "Offer",
"price": "0",
"priceCurrency": "MXN",
"priceValidUntil": "2025-12-31"
}
}



        // Initialize Lucide icons
        lucide.createIcons();

        // Toggle FAQ
        function toggleFAQ(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('[data-lucide]');
            
            content.classList.toggle('hidden');
            icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        }

        // Toggle Pricing
        function togglePricing(type) {
            const monthlyBtn = document.getElementById('monthly-toggle');
            const annualBtn = document.getElementById('annual-toggle');
            const monthlyPrices = document.querySelectorAll('.monthly-price');
            const annualPrices = document.querySelectorAll('.annual-price');

            if (type === 'monthly') {
                monthlyBtn.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
                monthlyBtn.classList.remove('text-gray-600');
                annualBtn.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
                annualBtn.classList.add('text-gray-600');
                monthlyPrices.forEach(el => el.classList.remove('hidden'));
                annualPrices.forEach(el => el.classList.add('hidden'));
            } else {
                annualBtn.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
                annualBtn.classList.remove('text-gray-600');
                monthlyBtn.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
                monthlyBtn.classList.add('text-gray-600');
                annualPrices.forEach(el => el.classList.remove('hidden'));
                monthlyPrices.forEach(el => el.classList.add('hidden'));
            }
        }

        // Form submission
        document.getElementById('lead-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submit-btn');
            const submitText = document.getElementById('submit-text');
            const submitLoading = document.getElementById('submit-loading');
            const successMsg = document.getElementById('form-success');
            const errorMsg = document.getElementById('form-error');

            // Show loading state
            submitText.classList.add('hidden');
            submitLoading.classList.remove('hidden');
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                // Reset button
                submitText.classList.remove('hidden');
                submitLoading.classList.add('hidden');
                submitBtn.disabled = false;

                // Show success (in production, handle actual API response)
                successMsg.classList.remove('hidden');
                errorMsg.classList.add('hidden');

                // Reset form
                this.reset();

                // Scroll to success message
                successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Hide success after 5 seconds
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 5000);
            }, 2000);
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href !== '') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const headerOffset = 80;
                        const elementPosition = target.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center">
<a className="text-xl font-semibold tracking-tight text-gray-900" href="#">ClinicPro</a>
</div>
<nav className="hidden md:flex items-center space-x-8">
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#funciones">Funciones</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#precios">Precios</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#seguridad">Seguridad</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#integraciones">Integraciones</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#faq">FAQ</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#contacto">Contacto</a>
</nav>
<div className="flex items-center space-x-3">
<button className="hidden sm:block text-sm text-gray-700 hover:text-gray-900 transition-colors" onclick="document.getElementById('demo-modal').classList.remove('hidden')">
                        Solicitar demo
                    </button>
<a className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors" href="#formulario">
                        Probar gratis 14 días
                    </a>
</div>
</div>
</div>
</header>

<section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-xl">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
                        Gestiona tu clínica con precisión y sin estrés
                    </h1>
<p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                        Agenda online, recordatorios automáticos, inventario, tratamientos, historial clínico y reportes de pago en un solo panel.
                    </p>
<div className="space-y-4 mb-8">
<div className="flex items-start space-x-3">
<div className="mt-1 flex-shrink-0">
<i className="w-5 h-5 text-green-600" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-gray-700">Menos ausencias con recordatorios automáticos</p>
</div>
<div className="flex items-start space-x-3">
<div className="mt-1 flex-shrink-0">
<i className="w-5 h-5 text-green-600" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-gray-700">Cobros y reportes en tiempo real</p>
</div>
<div className="flex items-start space-x-3">
<div className="mt-1 flex-shrink-0">
<i className="w-5 h-5 text-green-600" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-gray-700">Agenda compartida por consultorio y profesional</p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors" href="#formulario">
                            Probar gratis 14 días
                        </a>
<button className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors" onclick="document.getElementById('video-modal').classList.remove('hidden')">
<i className="w-5 h-5 mr-2" data-lucide="play-circle" style={{strokeWidth: '1.5'}}></i>
                            Ver demo en 90s
                        </button>
</div>
<div className="flex items-center space-x-6 mt-8">
<div className="flex items-center space-x-2 text-sm text-gray-600">
<i className="w-4 h-4" data-lucide="credit-card" style={{strokeWidth: '1.5'}}></i>
<span>Sin tarjeta</span>
</div>
<div className="flex items-center space-x-2 text-sm text-gray-600">
<i className="w-4 h-4" data-lucide="mouse-pointer-click" style={{strokeWidth: '1.5'}}></i>
<span>Cancelación en 1 clic</span>
</div>
</div>
</div>
<div className="relative">
<div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
<img alt="Dashboard ClinicPro" className="w-full h-auto" src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&amp;h=800&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border border-gray-200 hidden lg:block">
<div className="flex items-center space-x-3">
<div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
<i className="w-6 h-6 text-green-600" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-2xl font-semibold text-gray-900">+22%</p>
<p className="text-sm text-gray-600">ocupación</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" id="funciones">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    Todo lo que necesitas en un solo lugar
                </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Herramientas diseñadas específicamente para clínicas que buscan eficiencia y control total
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-600" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Control de tiempo de consultorio</h3>
<p className="text-gray-600 text-sm leading-relaxed">
                        Bloqueos automáticos, gestión de sobrecitas y tiempos personalizados por procedimiento.
                    </p>
</div>

<div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-600" data-lucide="calendar" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Agendas en línea</h3>
<p className="text-gray-600 text-sm leading-relaxed">
                        Múltiples profesionales y sucursales. Vista día/semana/mes con arrastrar y soltar.
                    </p>
</div>

<div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-green-600" data-lucide="bell" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Recordatorios automáticos</h3>
<p className="text-gray-600 text-sm leading-relaxed">
                        SMS, WhatsApp y email. Recordatorios de pre y post-tratamiento personalizables.
                    </p>
</div>

<div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-600" data-lucide="package" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Inventario inteligente</h3>
<p className="text-gray-600 text-sm leading-relaxed">
                        Control de lotes, alertas de mínimos, valor en almacén y consumibles por tratamiento.
                    </p>
</div>

<div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-600" data-lucide="clipboard-list" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Tratamientos y planes</h3>
<p className="text-gray-600 text-sm leading-relaxed">
                        Plantillas, presupuestos, aceptación digital y fotos antes/después.
                    </p>
</div>

<div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-600" data-lucide="users" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Catálogo de pacientes</h3>
<p className="text-gray-600 text-sm leading-relaxed">
                        Fichas completas, consentimientos digitales, adjuntos y sistema de etiquetas.
                    </p>
</div>

<div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-600" data-lucide="file-text" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Historial clínico</h3>
<p className="text-gray-600 text-sm leading-relaxed">
                        Notas, archivos, plantillas por especialidad y control de acceso granular.
                    </p>
</div>

<div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-green-600" data-lucide="bar-chart-3" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Reportes de pagos</h3>
<p className="text-gray-600 text-sm leading-relaxed">
                        Ingresos por profesional/sucursal, métodos de pago y conciliación automática.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    Clínicas que ya confían en nosotros
                </h2>
<p className="text-lg text-gray-600">
                    Resultados reales de profesionales de la salud en toda Latinoamérica
                </p>
</div>

<div className="grid md:grid-cols-3 gap-8 mb-16">
<div className="text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
<i className="w-8 h-8 text-green-600" data-lucide="user-minus" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-4xl font-semibold text-gray-900 mb-2">-38%</p>
<p className="text-gray-600">ausencias</p>
</div>
<div className="text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
<i className="w-8 h-8 text-blue-600" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-4xl font-semibold text-gray-900 mb-2">+22%</p>
<p className="text-gray-600">ocupación</p>
</div>
<div className="text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
<i className="w-8 h-8 text-blue-600" data-lucide="timer" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-4xl font-semibold text-gray-900 mb-2">&lt;3 min</p>
<p className="text-gray-600">para agendar</p>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6 mb-16">
<div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
<div className="flex items-center space-x-1 mb-4">
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-gray-700 mb-4 leading-relaxed">
                        "Los recordatorios automáticos redujeron nuestras ausencias a la mitad. La inversión se pagó sola en el primer mes."
                    </p>
<div className="flex items-center space-x-3">
<img alt="Dra. María González" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<div>
<p className="font-medium text-gray-900">Dra. María González</p>
<p className="text-sm text-gray-600">Odontología · Monterrey</p>
</div>
</div>
</div>
<div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
<div className="flex items-center space-x-1 mb-4">
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-gray-700 mb-4 leading-relaxed">
                        "Finalmente puedo ver mis números en tiempo real. Los reportes me ayudan a tomar mejores decisiones de negocio."
                    </p>
<div className="flex items-center space-x-3">
<img alt="Dr. Carlos Ruiz" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div>
<p className="font-medium text-gray-900">Dr. Carlos Ruiz</p>
<p className="text-sm text-gray-600">Medicina Estética · CDMX</p>
</div>
</div>
</div>
<div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
<div className="flex items-center space-x-1 mb-4">
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-gray-700 mb-4 leading-relaxed">
                        "Gestionar 3 sucursales era un caos. Ahora todo está centralizado y puedo supervisar desde cualquier lugar."
                    </p>
<div className="flex items-center space-x-3">
<img alt="Lic. Ana Martínez" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&amp;h=100&amp;fit=crop"/>
<div>
<p className="font-medium text-gray-900">Lic. Ana Martínez</p>
<p className="text-sm text-gray-600">Fisioterapia · Guadalajara</p>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-200 pt-12">
<p className="text-center text-sm text-gray-600 mb-8">Clínicas que ya usan ClinicPro</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
<div className="text-2xl font-semibold tracking-tight text-gray-400">DentalMax</div>
<div className="text-2xl font-semibold tracking-tight text-gray-400">Estética+</div>
<div className="text-2xl font-semibold tracking-tight text-gray-400">FisioVida</div>
<div className="text-2xl font-semibold tracking-tight text-gray-400">Clínica del Sol</div>
<div className="text-2xl font-semibold tracking-tight text-gray-400">Salud Total</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    Mira cómo funciona
                </h2>
<p className="text-lg text-gray-600">
                    De la agenda al cobro en segundos
                </p>
</div>
<div className="grid md:grid-cols-4 gap-6">
<div className="bg-white rounded-xl p-6 border border-gray-200 relative">
<div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">1</div>
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-600" data-lucide="calendar-plus" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="font-semibold text-gray-900 mb-2">Agenda una cita</h3>
<p className="text-sm text-gray-600">Selecciona paciente, servicio y horario en segundos</p>
</div>
<div className="bg-white rounded-xl p-6 border border-gray-200 relative">
<div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">2</div>
<div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-green-600" data-lucide="send" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="font-semibold text-gray-900 mb-2">Recordatorio automático</h3>
<p className="text-sm text-gray-600">El sistema envía confirmación y recordatorio por WhatsApp</p>
</div>
<div className="bg-white rounded-xl p-6 border border-gray-200 relative">
<div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">3</div>
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-600" data-lucide="credit-card" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="font-semibold text-gray-900 mb-2">Registra el cobro</h3>
<p className="text-sm text-gray-600">Cobro en efectivo, tarjeta o transferencia con un clic</p>
</div>
<div className="bg-white rounded-xl p-6 border border-gray-200 relative">
<div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">4</div>
<div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-green-600" data-lucide="bar-chart-2" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="font-semibold text-gray-900 mb-2">Ve tus reportes</h3>
<p className="text-sm text-gray-600">Ingresos actualizados al instante en tu dashboard</p>
</div>
</div>
<div className="text-center mt-12">
<button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors" onclick="document.getElementById('video-modal').classList.remove('hidden')">
<i className="w-5 h-5 mr-2" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
                    Ver video completo (90s)
                </button>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white" id="integraciones">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    Integra con tus herramientas favoritas
                </h2>
<p className="text-lg text-gray-600">
                    Conecta ClinicPro con las plataformas que ya usas
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
<div className="bg-gray-50 rounded-lg p-6 border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
<div className="text-center">
<i className="w-8 h-8 text-gray-700 mx-auto mb-2" data-lucide="credit-card" style={{strokeWidth: '1.5'}}></i>
<p className="text-xs text-gray-600 font-medium">Stripe</p>
</div>
</div>
<div className="bg-gray-50 rounded-lg p-6 border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
<div className="text-center">
<i className="w-8 h-8 text-gray-700 mx-auto mb-2" data-lucide="shopping-cart" style={{strokeWidth: '1.5'}}></i>
<p className="text-xs text-gray-600 font-medium">Mercado Pago</p>
</div>
</div>
<div className="bg-gray-50 rounded-lg p-6 border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
<div className="text-center">
<i className="w-8 h-8 text-gray-700 mx-auto mb-2" data-lucide="message-circle" style={{strokeWidth: '1.5'}}></i>
<p className="text-xs text-gray-600 font-medium">WhatsApp</p>
</div>
</div>
<div className="bg-gray-50 rounded-lg p-6 border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
<div className="text-center">
<i className="w-8 h-8 text-gray-700 mx-auto mb-2" data-lucide="calendar" style={{strokeWidth: '1.5'}}></i>
<p className="text-xs text-gray-600 font-medium">Google Cal</p>
</div>
</div>
<div className="bg-gray-50 rounded-lg p-6 border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
<div className="text-center">
<i className="w-8 h-8 text-gray-700 mx-auto mb-2" data-lucide="file-text" style={{strokeWidth: '1.5'}}></i>
<p className="text-xs text-gray-600 font-medium">Facturación</p>
</div>
</div>
<div className="bg-gray-50 rounded-lg p-6 border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
<div className="text-center">
<i className="w-8 h-8 text-gray-700 mx-auto mb-2" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
<p className="text-xs text-gray-600 font-medium">Email</p>
</div>
</div>
</div>
<div className="flex flex-wrap justify-center gap-4">
<span className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">
<i className="w-4 h-4 mr-2" data-lucide="code-2" style={{strokeWidth: '1.5'}}></i>
                    API abierta
                </span>
<span className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">
<i className="w-4 h-4 mr-2" data-lucide="webhook" style={{strokeWidth: '1.5'}}></i>
                    Webhooks
                </span>
<span className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">
<i className="w-4 h-4 mr-2" data-lucide="download" style={{strokeWidth: '1.5'}}></i>
                    Exportaciones CSV/Excel
                </span>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" id="seguridad">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    Seguridad y cumplimiento
                </h2>
<p className="text-lg text-gray-600">
                    Tus datos y los de tus pacientes, protegidos al máximo nivel
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
<div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
<div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mx-auto mb-4">
<i className="w-6 h-6 text-green-600" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="font-semibold text-gray-900 mb-2">Cifrado SSL/TLS</h3>
<p className="text-sm text-gray-600">Datos cifrados en tránsito y en reposo</p>
</div>
<div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
<div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mx-auto mb-4">
<i className="w-6 h-6 text-green-600" data-lucide="lock" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="font-semibold text-gray-900 mb-2">Autenticación 2FA</h3>
<p className="text-sm text-gray-600">Doble factor de autenticación disponible</p>
</div>
<div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
<div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mx-auto mb-4">
<i className="w-6 h-6 text-green-600" data-lucide="users-2" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="font-semibold text-gray-900 mb-2">Roles y permisos</h3>
<p className="text-sm text-gray-600">Control granular de acceso por usuario</p>
</div>
<div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
<div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mx-auto mb-4">
<i className="w-6 h-6 text-green-600" data-lucide="hard-drive" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="font-semibold text-gray-900 mb-2">Respaldos diarios</h3>
<p className="text-sm text-gray-600">Backups automáticos y redundantes</p>
</div>
</div>
<div className="bg-white rounded-xl p-8 border border-gray-200">
<div className="grid md:grid-cols-2 gap-8">
<div>
<h3 className="text-lg font-semibold text-gray-900 mb-4">Cumplimiento normativo</h3>
<ul className="space-y-3">
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-gray-700">Mejores prácticas de privacidad de datos</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-gray-700">Gestión de expedientes clínicos digitales</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-gray-700">Consentimientos informados digitales</span>
</li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold text-gray-900 mb-4">Infraestructura</h3>
<ul className="space-y-3">
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-gray-700">Centros de datos certificados</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-gray-700">99.9% de uptime garantizado</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-gray-700">Status page público en tiempo real</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white" id="precios">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    Planes que crecen con tu clínica
                </h2>
<p className="text-lg text-gray-600 mb-8">
                    Todos los planes incluyen 14 días de prueba gratis, sin tarjeta
                </p>

<div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
<button className="px-6 py-2 rounded-md text-sm font-medium bg-white text-gray-900 shadow-sm" id="monthly-toggle" onclick="togglePricing('monthly')">
                        Mensual
                    </button>
<button className="px-6 py-2 rounded-md text-sm font-medium text-gray-600" id="annual-toggle" onclick="togglePricing('annual')">
                        Anual
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700">
                            Ahorra 20%
                        </span>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
<h3 className="text-xl font-semibold text-gray-900 mb-2">Esencial</h3>
<p className="text-sm text-gray-600 mb-6">Para consultorios individuales</p>
<div className="mb-6">
<span className="text-4xl font-semibold text-gray-900">
<span className="monthly-price">$499</span>
<span className="annual-price hidden">$399</span>
</span>
<span className="text-gray-600">/mes</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">1 sucursal</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">2 usuarios</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">Agenda online</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">Recordatorios básicos (100/mes)</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">Catálogo de pacientes</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">Soporte por email</span>
</li>
</ul>
<a className="block w-full text-center px-4 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors" href="#formulario">
                        Comenzar prueba gratis
                    </a>
</div>

<div className="bg-white rounded-xl border-2 border-blue-600 p-8 relative shadow-lg">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                            Recomendado
                        </span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Pro</h3>
<p className="text-sm text-gray-600 mb-6">Para clínicas en crecimiento</p>
<div className="mb-6">
<span className="text-4xl font-semibold text-gray-900">
<span className="monthly-price">$999</span>
<span className="annual-price hidden">$799</span>
</span>
<span className="text-gray-600">/mes</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">Hasta 3 sucursales</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">Usuarios ilimitados</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">Todo en Esencial +</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">Recordatorios ilimitados</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">Inventario completo</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">Plantillas de tratamientos</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">Reportes avanzados</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">Soporte prioritario</span>
</li>
</ul>
<a className="block w-full text-center px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors" href="#formulario">
                        Comenzar prueba gratis
                    </a>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
<h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
<p className="text-sm text-gray-600 mb-6">Para cadenas y grupos médicos</p>
<div className="mb-6">
<span className="text-4xl font-semibold text-gray-900">Contactar</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">Sucursales ilimitadas</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">Usuarios ilimitados</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">Todo en Pro +</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">Permisos granulares</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">SSO (Single Sign-On)</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">Onboarding dedicado</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">Account manager</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm text-gray-700">SLA personalizado</span>
</li>
</ul>
<button className="block w-full text-center px-4 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors" onclick="document.getElementById('demo-modal').classList.remove('hidden')">
                        Contactar ventas
                    </button>
</div>
</div>
<div className="text-center mt-12">
<p className="text-sm text-gray-600">
<i className="w-4 h-4 inline mr-1" data-lucide="info" style={{strokeWidth: '1.5'}}></i>
                    Todos los planes incluyen soporte en español y actualizaciones automáticas
                </p>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" id="faq">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    Preguntas frecuentes
                </h2>
<p className="text-lg text-gray-600">
                    Todo lo que necesitas saber antes de empezar
                </p>
</div>
<div className="space-y-4">
<div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
<button className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors" onclick="toggleFAQ(this)">
<span className="font-semibold text-gray-900">¿Necesito tarjeta de crédito para la prueba gratuita?</span>
<i className="w-5 h-5 text-gray-500 transition-transform" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="faq-content hidden px-6 pb-5">
<p className="text-gray-600 leading-relaxed">
                            No, puedes comenzar tu prueba de 14 días sin ingresar ningún método de pago. Solo necesitas tu email. Al finalizar la prueba, podrás elegir el plan que mejor se adapte a tu clínica.
                        </p>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
<button className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors" onclick="toggleFAQ(this)">
<span className="font-semibold text-gray-900">¿Puedo importar mis pacientes y datos existentes?</span>
<i className="w-5 h-5 text-gray-500 transition-transform" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="faq-content hidden px-6 pb-5">
<p className="text-gray-600 leading-relaxed">
                            Sí, te ayudamos a migrar tus datos desde Excel, otros sistemas o archivos CSV. Nuestro equipo de onboarding te guiará en el proceso para que no pierdas información y puedas empezar operando desde el día uno.
                        </p>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
<button className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors" onclick="toggleFAQ(this)">
<span className="font-semibold text-gray-900">¿Cómo funcionan los recordatorios automáticos?</span>
<i className="w-5 h-5 text-gray-500 transition-transform" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="faq-content hidden px-6 pb-5">
<p className="text-gray-600 leading-relaxed">
                            Una vez que agendas una cita, el sistema envía automáticamente recordatorios por SMS, WhatsApp o email según tu configuración. Puedes personalizar los mensajes, elegir cuándo enviarlos (24h, 48h antes, etc.) y también enviar recordatorios de post-tratamiento.
                        </p>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
<button className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors" onclick="toggleFAQ(this)">
<span className="font-semibold text-gray-900">¿Puedo gestionar varias sucursales o consultorios?</span>
<i className="w-5 h-5 text-gray-500 transition-transform" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="faq-content hidden px-6 pb-5">
<p className="text-gray-600 leading-relaxed">
                            Sí, desde el plan Pro puedes gestionar hasta 3 sucursales, y con Enterprise tienes sucursales ilimitadas. Cada una puede tener sus propios profesionales, horarios, servicios y reportes independientes, pero todo centralizado en un solo dashboard.
                        </p>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
<button className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors" onclick="toggleFAQ(this)">
<span className="font-semibold text-gray-900">¿Qué pasa cuando termina mi prueba gratuita?</span>
<i className="w-5 h-5 text-gray-500 transition-transform" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="faq-content hidden px-6 pb-5">
<p className="text-gray-600 leading-relaxed">
                            Al terminar los 14 días, puedes elegir un plan y continuar usando ClinicPro, o simplemente cancelar sin costo alguno. Tus datos permanecerán seguros durante 30 días adicionales por si decides volver. No hay compromisos ni cargos ocultos.
                        </p>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
<button className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors" onclick="toggleFAQ(this)">
<span className="font-semibold text-gray-900">¿Ofrecen capacitación y soporte?</span>
<i className="w-5 h-5 text-gray-500 transition-transform" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="faq-content hidden px-6 pb-5">
<p className="text-gray-600 leading-relaxed">
                            Sí, todos los planes incluyen soporte en español por email. Los planes Pro y Enterprise tienen soporte prioritario con tiempos de respuesta más rápidos. Además, ofrecemos onboarding asistido, videotutoriales y documentación completa para que tu equipo aproveche al máximo la plataforma.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white" id="formulario">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    Empieza hoy y ten tu agenda ordenada en minutos
                </h2>
<p className="text-lg text-gray-600">
                    Sin tarjeta. Sin instalaciones. Sin complicaciones.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="hidden md:block">
<div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
<div className="space-y-6">
<div className="flex items-start space-x-4">
<div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-white" data-lucide="zap" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="font-semibold text-gray-900 mb-1">Configuración rápida</h3>
<p className="text-sm text-gray-600">En menos de 5 minutos estarás agendando tu primera cita</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-white" data-lucide="headphones" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="font-semibold text-gray-900 mb-1">Soporte en español</h3>
<p className="text-sm text-gray-600">Nuestro equipo te acompaña durante todo el proceso</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-white" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="font-semibold text-gray-900 mb-1">Datos seguros</h3>
<p className="text-sm text-gray-600">Encriptación de nivel bancario para tu información</p>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg">
<form className="space-y-5" id="lead-form">
<div className="hidden bg-green-50 border border-green-200 rounded-lg p-4 mb-6" id="form-success">
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 mt-0.5" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<div>
<h3 className="font-semibold text-green-900 mb-1">¡Listo! Te enviamos acceso a la prueba</h3>
<p className="text-sm text-green-700">Revisa tu email para comenzar a usar ClinicPro</p>
</div>
</div>
</div>
<div className="hidden bg-red-50 border border-red-200 rounded-lg p-4 mb-6" id="form-error">
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-red-600 mt-0.5" data-lucide="alert-circle" style={{strokeWidth: '1.5'}}></i>
<div>
<h3 className="font-semibold text-red-900 mb-1">Error al enviar</h3>
<p className="text-sm text-red-700">Por favor intenta nuevamente</p>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="nombre">Nombre completo *</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" id="nombre" name="nombre" placeholder="Dr. Juan Pérez" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="clinica">Nombre de la clínica *</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" id="clinica" name="clinica" placeholder="Clínica Dental Sonrisa" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email corporativo *</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" id="email" name="email" placeholder="contacto@miclinica.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="telefono">Teléfono / WhatsApp *</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" id="telefono" name="telefono" placeholder="+52 55 1234 5678" required="" type="tel"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="sucursales">Sucursales</label>
<select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" id="sucursales" name="sucursales">
<option value="1">1</option>
<option value="2-3">2-3</option>
<option value="4-10">4-10</option>
<option value="10+">Más de 10</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="especialidad">Especialidad *</label>
<select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" id="especialidad" name="especialidad" required="">
<option value="">Seleccionar</option>
<option value="odontologia">Odontología</option>
<option value="medicina-estetica">Medicina Estética</option>
<option value="fisioterapia">Fisioterapia</option>
<option value="medicina-general">Medicina General</option>
<option value="psicologia">Psicología</option>
<option value="nutricion">Nutrición</option>
<option value="otra">Otra</option>
</select>
</div>
</div>
<div className="flex items-start space-x-3">
<input className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-600" id="consentimiento" name="consentimiento" required="" type="checkbox"/>
<label className="text-sm text-gray-600" htmlFor="consentimiento">
                                Acepto recibir comunicaciones de ClinicPro y he leído la <a className="text-blue-600 hover:underline" href="#">política de privacidad</a>
</label>
</div>
<button className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center" id="submit-btn" type="submit">
<span id="submit-text">Crear cuenta gratis</span>
<span className="hidden" id="submit-loading">
<i className="w-5 h-5 animate-spin" data-lucide="loader-2" style={{strokeWidth: '1.5'}}></i>
</span>
</button>
<p className="text-center text-sm text-gray-600">
                            ¿Prefieres una demo personalizada? 
                            <button className="text-blue-600 hover:underline font-medium" onclick="document.getElementById('demo-modal').classList.remove('hidden')" type="button">
                                Agendar demo
                            </button>
</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8" id="contacto">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div>
<div className="text-white text-xl font-semibold tracking-tight mb-4">ClinicPro</div>
<p className="text-sm text-gray-400 leading-relaxed mb-4">
                        Software de gestión para clínicas que buscan eficiencia, control y crecimiento.
                    </p>
<div className="flex space-x-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div>
<h3 className="text-white font-semibold mb-4">Producto</h3>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#funciones">Funciones</a></li>
<li><a className="hover:text-white transition-colors" href="#precios">Precios</a></li>
<li><a className="hover:text-white transition-colors" href="#integraciones">Integraciones</a></li>
<li><a className="hover:text-white transition-colors" href="#seguridad">Seguridad</a></li>
<li><a className="hover:text-white transition-colors" href="#">Actualizaciones</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-semibold mb-4">Recursos</h3>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#faq">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Documentación</a></li>
<li><a className="hover:text-white transition-colors" href="#">API</a></li>
<li><a className="hover:text-white transition-colors" href="#">Estado del servicio</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-semibold mb-4">Empresa</h3>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Nosotros</a></li>
<li><a className="hover:text-white transition-colors" href="#contacto">Contacto</a></li>
<li><a className="hover:text-white transition-colors" href="#">Soporte</a></li>
<li><a className="hover:text-white transition-colors" href="#">Términos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacidad</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8">
<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
<p className="text-sm text-gray-400">
                        © 2025 ClinicPro. Todos los derechos reservados. Hecho en México.
                    </p>
<div className="flex items-center space-x-6 text-sm text-gray-400">
<span className="flex items-center space-x-2">
<i className="w-4 h-4" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
<span>hola@clinicpro.com</span>
</span>
<span className="flex items-center space-x-2">
<i className="w-4 h-4" data-lucide="phone" style={{strokeWidth: '1.5'}}></i>
<span>+52 55 1234 5678</span>
</span>
</div>
</div>
</div>
</div>
</footer>

<div className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" id="demo-modal">
<div className="bg-white rounded-xl max-w-md w-full p-8 relative">
<button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600" onclick="document.getElementById('demo-modal').classList.add('hidden')">
<i className="w-6 h-6" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
</button>
<h3 className="text-2xl font-semibold text-gray-900 mb-2">Solicitar demo</h3>
<p className="text-gray-600 mb-6">Un especialista te mostrará cómo ClinicPro puede transformar tu clínica</p>
<form className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" required="" type="tel"/>
</div>
<button className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors" type="submit">
                    Agendar demo
                </button>
</form>
</div>
</div>

<div className="hidden fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" id="video-modal">
<div className="bg-white rounded-xl max-w-4xl w-full p-4 relative">
<button className="absolute -top-12 right-0 text-white hover:text-gray-300" onclick="document.getElementById('video-modal').classList.add('hidden')">
<i className="w-8 h-8" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
<div className="text-center text-white">
<i className="w-20 h-20 mx-auto mb-4" data-lucide="play-circle" style={{strokeWidth: '1.5'}}></i>
<p>Video demo (90 segundos)</p>
</div>
</div>
</div>
</div>


    </>
  );
}
