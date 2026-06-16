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
50: '#f0fdf4',
100: '#dcfce7',
200: '#bbf7d0',
300: '#86efac',
400: '#4ade80',
500: '#22c55e',
600: '#16a34a',
700: '#15803d',
800: '#166534',
900: '#14532d',
},
slate: {
850: '#1e293b',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
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
      

<div className="bg-zinc-900 text-white text-xs py-2 px-4 text-center font-medium tracking-wide">
<span className="inline-flex items-center gap-2">
<span className="iconify text-brand-400" data-icon="lucide:siren" data-width="14"></span>
            Urgencias 24hs disponibles. Llámanos al <a className="underline hover:text-brand-300 transition-colors" href="#">0800-M-VET-URG</a>
</span>
</div>

<nav className="glass-nav fixed w-full z-50 top-[32px]"> 
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white shadow-sm group-hover:bg-brand-700 transition-colors">
<span className="iconify" data-icon="lucide:heart-pulse" data-width="18"></span>
</div>
<span className="font-semibold text-lg tracking-tight text-zinc-900">M Vet</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#servicios">Servicios</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#equipo">Equipo</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#blog">Blog</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex text-zinc-500 hover:text-green-600 transition-colors" href="https://wa.me/">
<span className="iconify" data-icon="lucide:message-circle" data-width="20"></span>
</a>
<a className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm transition-all flex items-center gap-2" href="#turnos">
                        Reservar Turno
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</div>
</nav>

<section className="pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden relative">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-50 rounded-full blur-3xl opacity-50 -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-6">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                        Turnos disponibles para hoy
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-zinc-900 leading-[1.1] mb-6">
                        Medicina veterinaria <br className="hidden lg:block"/>
<span className="text-zinc-400">humana y moderna.</span>
</h1>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed max-w-lg">
                        Cuidamos la salud de tu mascota con tecnología de vanguardia y un equipo certificado. Diagnóstico, cirugía y bienestar en un solo lugar.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-sm shadow-brand-200" href="#turnos">
                            Agendar Visita
                        </a>
<a className="inline-flex justify-center items-center px-6 py-3 border border-zinc-200 text-base font-medium rounded-xl text-zinc-700 bg-white hover:bg-zinc-50 hover:border-zinc-300 transition-all" href="#servicios">
                            Ver Servicios
                        </a>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-zinc-500">
<div className="flex -space-x-2 overflow-hidden">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<p>+2.5k dueños confían en nosotros</p>
</div>
</div>
<div className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden bg-zinc-100 reveal" style={{animationDelay: '0.2s'}}>

<img alt="Veterinario con perro" className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-lg flex items-center gap-4">
<div className="h-10 w-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
<span className="iconify" data-icon="lucide:activity" data-width="20"></span>
</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Monitoreo en tiempo real</p>
<p className="text-xs text-zinc-500">Resultados de laboratorio digitales</p>
</div>
<div className="ml-auto">
<span className="iconify text-brand-500" data-icon="lucide:check-circle-2" data-width="20"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50/50 border-t border-zinc-100" id="servicios">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-2">Especialidades</h2>
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Todo lo que tu mascota necesita</h3>
<p className="text-zinc-500">Desde controles de rutina hasta procedimientos quirúrgicos complejos. Todo en un ambiente controlado y seguro.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-6 rounded-2xl border border-zinc-200 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300">
<div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:stethoscope" data-width="24"></span>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Clínica General</h4>
<p className="text-sm text-zinc-500 mb-4">Consultas preventivas, diagnóstico y tratamiento de patologías comunes en perros y gatos.</p>
<a className="text-sm font-medium text-zinc-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Ver detalles <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white p-6 rounded-2xl border border-zinc-200 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300">
<div className="h-12 w-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:syringe" data-width="24"></span>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Vacunación</h4>
<p className="text-sm text-zinc-500 mb-4">Planes completos anuales. Séxtuple, antirrábica y tos de las perreras. Certificados oficiales.</p>
<a className="text-sm font-medium text-zinc-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Ver calendario <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white p-6 rounded-2xl border border-zinc-200 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300">
<div className="h-12 w-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:scissors" data-width="24"></span>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Estética &amp; Spa</h4>
<p className="text-sm text-zinc-500 mb-4">Baños terapéuticos, cortes de raza y deslanado. Utilizamos productos hipoalergénicos.</p>
<a className="text-sm font-medium text-zinc-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Reservar turno <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white p-6 rounded-2xl border border-zinc-200 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300">
<div className="h-12 w-12 bg-rose-50 rounded-lg flex items-center justify-center text-rose-600 mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:microscope" data-width="24"></span>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Laboratorio</h4>
<p className="text-sm text-zinc-500 mb-4">Análisis de sangre, orina y coprológicos en el día. Ecografías y radiografías digitales.</p>
<a className="text-sm font-medium text-zinc-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Saber más <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white p-6 rounded-2xl border border-zinc-200 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300">
<div className="h-12 w-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:scalpel" data-width="24"></span>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Cirugía</h4>
<p className="text-sm text-zinc-500 mb-4">Quirófano equipado con anestesia inhalatoria y monitoreo multiparamétrico constante.</p>
<a className="text-sm font-medium text-zinc-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Protocolos <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white p-6 rounded-2xl border border-zinc-200 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300">
<div className="h-12 w-12 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-600 mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:cat" data-width="24"></span>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Medicina Felina</h4>
<p className="text-sm text-zinc-500 mb-4">Espacio y manejo "Cat Friendly" para reducir el estrés de tu gato durante la consulta.</p>
<a className="text-sm font-medium text-zinc-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Ver área felina <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="turnos">

<div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-zinc-50 via-white to-zinc-50 -z-10 skew-y-3 transform origin-left"></div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-12">

<div className="lg:w-1/3 pt-8">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">Agenda tu visita en segundos</h2>
<ul className="space-y-6">
<li className="flex gap-4">
<div className="flex-shrink-0 h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 border border-zinc-200">
<span className="font-medium text-sm">1</span>
</div>
<div>
<h4 className="text-base font-medium text-zinc-900">Selecciona el servicio</h4>
<p className="text-sm text-zinc-500 mt-1">Elige entre consulta clínica, vacunas o estética.</p>
</div>
</li>
<li className="flex gap-4">
<div className="flex-shrink-0 h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 border border-zinc-200">
<span className="font-medium text-sm">2</span>
</div>
<div>
<h4 className="text-base font-medium text-zinc-900">Elige fecha y hora</h4>
<p className="text-sm text-zinc-500 mt-1">Disponibilidad en tiempo real sincronizada con nuestra agenda.</p>
</div>
</li>
<li className="flex gap-4">
<div className="flex-shrink-0 h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 border border-zinc-200">
<span className="font-medium text-sm">3</span>
</div>
<div>
<h4 className="text-base font-medium text-zinc-900">Confirmación instantánea</h4>
<p className="text-sm text-zinc-500 mt-1">Recibirás un recordatorio por WhatsApp 24hs antes.</p>
</div>
</li>
</ul>
<div className="mt-8 p-4 bg-yellow-50 border border-yellow-100 rounded-xl flex gap-3">
<span className="iconify text-yellow-600 flex-shrink-0" data-icon="lucide:alert-circle" data-width="20"></span>
<p className="text-xs text-yellow-800 leading-relaxed">
<strong>Nota:</strong> Para cirugías o estudios complejos, por favor solicita un turno telefónico previo para evaluación.
                        </p>
</div>
</div>

<div className="lg:w-2/3">
<div className="bg-white rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-200 overflow-hidden">
<div className="border-b border-zinc-100 bg-zinc-50/50 px-6 py-4 flex justify-between items-center">
<span className="text-sm font-medium text-zinc-500">Nueva Reserva</span>
<span className="text-xs font-mono text-zinc-400">ID: #9281</span>
</div>
<form className="p-6 md:p-8">

<div className="mb-8">
<label className="block text-sm font-medium text-zinc-900 mb-4">Tipo de Servicio</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<label className="cursor-pointer group">
<input checked="" className="hidden peer" name="service" type="radio"/>
<div className="border border-zinc-200 rounded-xl p-4 hover:border-brand-400 transition-all text-center h-full flex flex-col items-center justify-center gap-2 group-hover:bg-zinc-50">
<span className="iconify text-zinc-400 group-hover:text-brand-500 peer-checked:text-brand-600" data-icon="lucide:stethoscope" data-width="24"></span>
<span className="text-sm font-medium text-zinc-700">Consulta</span>
<span className="text-xs text-zinc-400">$15.000</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="hidden peer" name="service" type="radio"/>
<div className="border border-zinc-200 rounded-xl p-4 hover:border-brand-400 transition-all text-center h-full flex flex-col items-center justify-center gap-2 group-hover:bg-zinc-50">
<span className="iconify text-zinc-400 group-hover:text-brand-500" data-icon="lucide:syringe" data-width="24"></span>
<span className="text-sm font-medium text-zinc-700">Vacunación</span>
<span className="text-xs text-zinc-400">$12.000</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="hidden peer" name="service" type="radio"/>
<div className="border border-zinc-200 rounded-xl p-4 hover:border-brand-400 transition-all text-center h-full flex flex-col items-center justify-center gap-2 group-hover:bg-zinc-50">
<span className="iconify text-zinc-400 group-hover:text-brand-500" data-icon="lucide:scissors" data-width="24"></span>
<span className="text-sm font-medium text-zinc-700">Peluquería</span>
<span className="text-xs text-zinc-400">Desde $18.000</span>
</div>
</label>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div>
<label className="block text-sm font-medium text-zinc-900 mb-2">Fecha Preferida</label>
<div className="relative">
<input className="block w-full rounded-lg border-zinc-300 border bg-white px-3 py-2.5 text-sm text-zinc-900 focus:border-brand-500 focus:ring-brand-500 shadow-sm outline-none" type="date" value="2023-10-24"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-zinc-900 mb-2">Horario</label>
<select className="block w-full rounded-lg border-zinc-300 border bg-white px-3 py-2.5 text-sm text-zinc-900 focus:border-brand-500 focus:ring-brand-500 shadow-sm outline-none">
<option>09:00 AM</option>
<option>10:30 AM</option>
<option selected="">04:00 PM</option>
<option>05:30 PM</option>
</select>
</div>
</div>
<div className="space-y-4 mb-8">
<div>
<label className="block text-sm font-medium text-zinc-900 mb-1">Nombre de la Mascota</label>
<input className="block w-full rounded-lg border-zinc-300 border bg-white px-3 py-2 text-sm placeholder-zinc-400 focus:border-brand-500 focus:ring-brand-500 shadow-sm outline-none transition-colors" placeholder="Ej: Rocky" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-900 mb-1">Tu Teléfono (WhatsApp)</label>
<input className="block w-full rounded-lg border-zinc-300 border bg-white px-3 py-2 text-sm placeholder-zinc-400 focus:border-brand-500 focus:ring-brand-500 shadow-sm outline-none transition-colors" placeholder="+54 9 11..." type="tel"/>
</div>
</div>

<div className="flex items-center justify-between pt-6 border-t border-zinc-100">
<div className="text-xs text-zinc-400">
<span className="iconify inline mr-1" data-icon="lucide:lock" data-width="12"></span>
                                    Datos encriptados
                                </div>
<button className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-zinc-900 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 transition-all w-full sm:w-auto" type="button">
                                    Confirmar Turno
                                </button>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-zinc-100" id="equipo">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Equipo Médico</h2>
<p className="text-zinc-500 mt-2 max-w-xl">Profesionales certificados con especializaciones en diversas áreas de la medicina veterinaria.</p>
</div>
<a className="text-brand-600 font-medium text-sm hover:text-brand-700 flex items-center gap-1" href="#">
                    Ver todo el staff <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group">
<div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-zinc-100 mb-4 relative">
<img alt="Vet" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<div className="flex gap-2 justify-center">
<a className="text-white hover:text-brand-300" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
<a className="text-white hover:text-brand-300" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
</div>
</div>
</div>
<h3 className="text-lg font-medium text-zinc-900">Dr. Martín González</h3>
<p className="text-sm text-brand-600">Director Médico &amp; Cirujano</p>
</div>

<div className="group">
<div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-zinc-100 mb-4 relative">
<img alt="Vet" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium text-zinc-900">Dra. Sofia Mendez</h3>
<p className="text-sm text-zinc-500">Clínica General</p>
</div>

<div className="group">
<div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-zinc-100 mb-4 relative">
<img alt="Vet" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium text-zinc-900">Dra. Ana Torres</h3>
<p className="text-sm text-zinc-500">Cardiología</p>
</div>

<div className="group">
<div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-zinc-100 mb-4 relative">
<img alt="Vet" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium text-zinc-900">Lic. Pedro Almodóvar</h3>
<p className="text-sm text-zinc-500">Fisioterapia</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
<h2 className="text-2xl font-semibold text-zinc-900">Historias Felices</h2>
</div>
<div className="flex overflow-hidden gap-6 px-4">

<div className="min-w-[300px] md:min-w-[350px] bg-white p-6 rounded-xl border border-zinc-100 shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-3">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-zinc-600 text-sm mb-4 leading-relaxed">"Excelente atención. Operaron a mi perro de una fractura compleja y la recuperación fue increíble. Muy agradecidos con el Dr. Martín."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-bold text-zinc-500">MC</div>
<div>
<p className="text-sm font-medium text-zinc-900">María Clara</p>
<p className="text-xs text-zinc-400">Dueña de "Toby"</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] bg-white p-6 rounded-xl border border-zinc-100 shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-3">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-zinc-600 text-sm mb-4 leading-relaxed">"La peluquería es excelente, siempre dejan a mi caniche impecable y con mucho cuidado. El sistema de turnos online es súper práctico."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-bold text-zinc-500">JR</div>
<div>
<p className="text-sm font-medium text-zinc-900">Juan Rojas</p>
<p className="text-xs text-zinc-400">Dueño de "Lola"</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] bg-white p-6 rounded-xl border border-zinc-100 shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-3">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify text-zinc-300" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-zinc-600 text-sm mb-4 leading-relaxed">"Muy profesionales en el área de gatos. Tienen un consultorio especial y se nota que saben manejar el estrés felino. Recomendado."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-bold text-zinc-500">VS</div>
<div>
<p className="text-sm font-medium text-zinc-900">Valeria S.</p>
<p className="text-xs text-zinc-400">Dueña de "Mishi"</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-8 text-center">Preguntas Frecuentes</h2>
<div className="space-y-4">
<details className="group bg-white border border-zinc-200 rounded-lg open:ring-1 open:ring-brand-500/20">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-zinc-900">
<span>¿Atienden urgencias fuera de horario?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-zinc-500 text-sm px-4 pb-4 animate-fadeIn">
                        Sí, contamos con guardia pasiva 24hs. Para urgencias fuera del horario comercial (9 a 20hs), debes llamar al teléfono de emergencias indicado en la parte superior de la web.
                    </div>
</details>
<details className="group bg-white border border-zinc-200 rounded-lg open:ring-1 open:ring-brand-500/20">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-zinc-900">
<span>¿Qué vacunas necesita mi cachorro?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-zinc-500 text-sm px-4 pb-4 animate-fadeIn">
                        Generalmente se inicia a los 45 días con la primera dosis de Parvovirus/Moquillo, y luego refuerzos de Quíntuple/Séxtuple cada 21 días hasta completar el plan a los 4 meses, incluyendo la Antirrábica.
                    </div>
</details>
<details className="group bg-white border border-zinc-200 rounded-lg open:ring-1 open:ring-brand-500/20">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-zinc-900">
<span>¿Aceptan obras sociales de mascotas?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-zinc-500 text-sm px-4 pb-4 animate-fadeIn">
                        Trabajamos con las principales prepagas de mascotas del país (Mascota24, HolaVet). Consulta en recepción para verificar tu cobertura específica.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-zinc-900 border-t border-zinc-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4 text-white">
<span className="iconify text-brand-500" data-icon="lucide:heart-pulse" data-width="24"></span>
<span className="font-bold text-xl tracking-tight">M Vet</span>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Cuidando a tus mejores amigos con la tecnología y el amor que se merecen.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Servicios</h4>
<ul className="space-y-2 text-sm text-zinc-400">
<li><a className="hover:text-brand-400 transition-colors" href="#">Clínica General</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Cirugía</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Vacunación</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Laboratorio</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Peluquería</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Horarios</h4>
<ul className="space-y-2 text-sm text-zinc-400">
<li className="flex justify-between"><span>Lun - Vie:</span> <span className="text-white">9:00 - 20:00</span></li>
<li className="flex justify-between"><span>Sábados:</span> <span className="text-white">9:00 - 14:00</span></li>
<li className="flex justify-between"><span>Domingos:</span> <span className="text-brand-400">Guardia</span></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contacto</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-start gap-3">
<span className="iconify mt-0.5 flex-shrink-0" data-icon="lucide:map-pin" data-width="16"></span>
<span>Av. Libertador 1234,<br/>Buenos Aires, Argentina</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify flex-shrink-0" data-icon="lucide:phone" data-width="16"></span>
<span>+54 11 4455-6677</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify flex-shrink-0" data-icon="lucide:mail" data-width="16"></span>
<span>contacto@mvet.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
<p>© 2023 M Vet Clínica Veterinaria. Todos los derechos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-300" href="#">Privacidad</a>
<a className="hover:text-zinc-300" href="#">Términos</a>
<a className="hover:text-zinc-300" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
