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
peach: {
50: '#fff9f5',
100: '#ffefe5',
200: '#ffdccc',
500: '#ff8c66',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Countdown Logic
        const targetDate = new Date('2026-02-24T23:59:59').getTime();
        
        function updateTimer() {
            const now = new Date().getTime();
            const difference = targetDate - now;
            
            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                
                document.getElementById('days').innerText = String(days).padStart(2, '0');
                document.getElementById('hours').innerText = String(hours).padStart(2, '0');
                document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
                document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
            }
        }
        
        setInterval(updateTimer, 1000);
        updateTimer();

        // Modal Logic
        const modalBackdrop = document.getElementById('modal-backdrop');
        const modalPanel = document.getElementById('modal-panel');
        const modalContent = modalPanel.querySelector('div');
        const step1 = document.getElementById('modal-step-1');
        const step2 = document.getElementById('modal-step-2');

        function openModal() {
            modalBackdrop.classList.remove('hidden');
            modalPanel.classList.remove('hidden');
            document.body.classList.add('modal-open');
            
            setTimeout(() => {
                modalBackdrop.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95', 'opacity-0');
                modalContent.classList.add('scale-100', 'opacity-100');
            }, 10);
        }

        function closeModal() {
            modalBackdrop.classList.add('opacity-0');
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                modalBackdrop.classList.add('hidden');
                modalPanel.classList.add('hidden');
                document.body.classList.remove('modal-open');
                // Reset form
                step1.classList.remove('hidden');
                step2.classList.add('hidden');
            }, 300);
        }

        // Close on backdrop click
        modalPanel.addEventListener('click', (e) => {
            if (e.target === modalPanel) closeModal();
        });

        // Form Handling
        function handleRegister(e) {
            e.preventDefault();
            step1.classList.add('hidden');
            step2.classList.remove('hidden');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="overflow-hidden pt-10 pr-4 pb-20 pl-4 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden -z-10">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-orange-200/20 blur-[140px] rounded-full">
</div>
<div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[40%] h-[40%] bg-peach-100/20 blur-[120px] rounded-full">
</div>
</div>

<nav className="max-w-7xl mx-auto flex justify-between items-center mb-16 relative z-10">

<div className="text-2xl font-black tracking-tight text-slate-900 select-none cursor-default">
                [LOGO]
            </div>
<div className="hidden md:block bg-orange-100/50 border border-orange-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-orange-700">
                Evento Gratuito En Vivo | Solo Chile
            </div>
</nav>
<div className="flex flex-col z-10 text-center max-w-5xl mr-auto ml-auto relative space-y-12 items-center">

<div className="flex flex-col items-center space-y-6 opacity-0 animate-fade-in-up">
<div className="inline-flex items-center space-x-2 bg-white border border-orange-100 px-3 py-1 rounded-full w-fit shadow-sm">
<span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
<span className="text-xs font-bold text-orange-600 uppercase tracking-wider">INSCRIPCIONES ABIERTAS</span>
</div>
<div className="space-y-3">
<p className="text-sm md:text-base font-black text-orange-600 uppercase tracking-widest">TALLER GRATUITO
                        EN VIVO</p>
<h1 className="text-4xl md:text-7xl font-black leading-[1.05] text-slate-900 max-w-4xl tracking-tight">
                        Financia tu empresa 
                        <span className="text-orange-500">con CORFO</span>
<span className="block text-2xl md:text-4xl mt-2 font-bold text-slate-800">Evita el error que deja fuera al 86% de los proyectos en admisibilidad</span>
</h1>
<p className="text-xl md:text-3xl font-bold text-slate-600 leading-tight max-w-3xl mx-auto">
                        Incluso después de pagar consultores o usar IA para formular el proyecto.
                    </p>
</div>
<div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 pt-4">
<div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full">
<iconify-icon height="20" icon="solar:video-frame-play-vertical-linear" width="20"></iconify-icon>
<span className="text-xs font-black uppercase tracking-wider">En Vivo</span>
</div>
<div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full">
<iconify-icon height="20" icon="solar:calendar-mark-linear" width="20"></iconify-icon>
<span className="text-xs font-black uppercase tracking-wider">1 Solo Día</span>
</div>
<div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full">
<iconify-icon height="20" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<span className="text-xs font-black uppercase tracking-wider">2 Horas Intensivas</span>
</div>
</div>
<div className="bg-white border-2 border-orange-200 rounded-2xl px-6 py-4 shadow-lg shadow-orange-500/10">
<p className="text-lg md:text-2xl text-slate-900 leading-relaxed font-black">
                        Entrenamiento en vivo: <span className="text-orange-600">martes 17 de febrero</span> | 20:00 (Chile) | Zoom.
                        <span className="text-base font-bold text-slate-600 block mt-1">Aplicado a una convocatoria CORFO real abierta hoy (Semilla Expande).</span>
</p>
</div>
<div className="space-y-6 max-w-2xl pt-4">
<div className="flex flex-col items-center md:items-start gap-3 w-full max-w-lg mx-auto">
<div className="flex items-start space-x-3 text-slate-700 text-left">
<iconify-icon className="text-orange-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-semibold text-sm md:text-base">Recibe una plantilla + prompt apenas te registres para empezar hoy.</span>
</div>
<div className="flex items-start space-x-3 text-slate-700 text-left">
<iconify-icon className="text-orange-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-semibold text-sm md:text-base">En vivo, te mostraremos el error que deja fuera al 85% de los proyectos y lo corregiremos en directo.</span>
</div>
<div className="flex items-start space-x-3 text-slate-700 text-left">
<iconify-icon className="text-orange-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-semibold text-sm md:text-base">Al final del entrenamiento, verás el ajuste que separa al 15% admisible del 3% que sí financia y recibirás el Kit 2 (solo en vivo) para aplicarlo tú mismo.</span>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto px-4 sm:px-0">
<button className="relative px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 transform active:scale-95 w-full sm:w-auto" onclick="openModal()">
                        RESERVAR CUPO GRATIS + RECIBIR KIT 1
                    </button>
</div>
<p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                    Registro obligatorio. Cupos limitados. Acceso por Zoom.
                </p>
</div>

<div className="w-full max-w-3xl relative opacity-0 animate-fade-in-up slide-in-delay-2">

<div className="absolute inset-0 bg-orange-400/5 blur-[80px] -z-10 rounded-full scale-110"></div>
<div className="bg-white border border-orange-100 p-8 md:p-10 rounded-[2.5rem] space-y-8 shadow-2xl shadow-orange-900/5 relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-0">
</div>
<div className="relative z-10">
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left mb-8">
<div>
<h3 className="text-2xl font-bold text-slate-900 tracking-tight">Datos del Evento</h3>
<p className="text-orange-500 text-sm font-bold mt-1">Acceso restringido a Chile</p>
</div>
<div className="p-4 bg-orange-50 rounded-2xl text-orange-500">
<iconify-icon height="24" icon="solar:calendar-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="p-4 bg-orange-50/50 rounded-2xl border border-orange-100/50">
<p className="text-[10px] uppercase tracking-wider text-slate-400 mb-1 font-black">Fecha</p>
<p className="font-black text-sm text-slate-800">17 de Feb</p>
</div>
<div className="p-4 bg-orange-50/50 rounded-2xl border border-orange-100/50">
<p className="text-[10px] uppercase tracking-wider text-slate-400 mb-1 font-black">Hora</p>
<p className="font-black text-sm text-slate-800">20:00 CL</p>
</div>
<div className="p-4 bg-orange-50/50 rounded-2xl border border-orange-100/50">
<p className="text-[10px] uppercase tracking-wider text-slate-400 mb-1 font-black">Formato
                                </p>
<p className="font-black text-sm text-slate-800">Zoom</p>
</div>
<div className="p-4 bg-orange-50/50 rounded-2xl border border-orange-100/50">
<p className="text-[10px] uppercase tracking-wider text-slate-400 mb-1 font-black">Cierre
                                </p>
<p className="font-black text-sm text-slate-800">24 de Feb</p>
</div>
</div>
<div className="pt-6 text-center">
<p className="text-xs text-slate-400 italic font-medium">
                                [PLACEHOLDER: Imagen abstracta/andina/tecnológica]
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-y border-slate-100 py-10 px-4 shadow-sm relative z-10">
<div className="max-w-7xl mx-auto">
<p className="text-center text-[10px] uppercase tracking-[0.2em] text-orange-500 font-black mb-8">Resultados
                reales (propios + clientes)</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-50">
<div className="text-center pt-4 md:pt-0">
<div className="text-3xl font-black text-slate-900 mb-1 tracking-tight">+USD 500.000</div>
<div className="text-xs text-slate-500 uppercase tracking-wide leading-relaxed font-bold max-w-[200px] mx-auto">
                        levantados para clientes en etapas tempranas</div>
</div>
<div className="text-center pt-4 md:pt-0">
<div className="text-3xl font-black text-slate-900 mb-1 tracking-tight">+USD 1.200.000</div>
<div className="text-xs text-slate-500 uppercase tracking-wide leading-relaxed font-bold max-w-[200px] mx-auto">
                        levantados para empresas propias</div>
</div>
<div className="text-center pt-4 md:pt-0">
<div className="text-3xl font-black text-slate-900 mb-1 tracking-tight">12 años | 7 startups</div>
<div className="text-xs text-slate-500 uppercase tracking-wide leading-relaxed font-bold max-w-[250px] mx-auto">
                        6 países: Chile, Alemania, España, Italia, Polonia, Filipinas</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 relative overflow-hidden">
<div className="max-w-4xl mx-auto text-center space-y-10">
<div className="inline-block px-4 py-1 bg-red-50 border border-red-100 text-red-600 rounded-full">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
<span className="text-xs font-bold uppercase tracking-widest">Alerta de plazo</span>
</div>
</div>
<h2 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 tracking-tight">
                El cierre es el 24 de febrero. 
                Postular mal te cuesta un año.
            </h2>
<p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
                "Cuando una convocatoria cierra, la mayoría reacciona tarde: improvisa, paga por 'llenar el formulario'
                y entrega una postulación sin método. Si pierdes esta ventana, no solo pierdes un fondo: pierdes meses
                de avance y sigues drenando recursos propios."
            </p>

<div className="grid grid-cols-4 gap-3 md:gap-6 max-w-lg mx-auto py-8">
<div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center">
<div className="text-3xl font-black text-slate-900 tabular-nums" id="days">22</div>
<div className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold mt-1">Días</div>
</div>
<div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center">
<div className="text-3xl font-black text-slate-900 tabular-nums" id="hours">21</div>
<div className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold mt-1">Horas</div>
</div>
<div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center">
<div className="text-3xl font-black text-slate-900 tabular-nums" id="minutes">49</div>
<div className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold mt-1">Min</div>
</div>
<div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center">
<div className="text-3xl font-black text-orange-600 tabular-nums" id="seconds">22</div>
<div className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold mt-1">Seg</div>
</div>
</div>
<div className="space-y-6">
<p className="text-sm font-black text-red-500 uppercase tracking-widest bg-red-50 inline-block px-3 py-1 rounded">
                    Label: Cierre Semilla Expande: 24 de febrero (hora Chile)</p>
<div className="">
<button className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 transform active:scale-95" onclick="openModal()">
                        QUIERO MI CUPO GRATIS
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-orange-50/50">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                        Un entrenamiento aplicado: 
                        <span className="text-orange-500 text-2xl md:text-3xl">sales con claridad y una ruta de acción</span>
</h2>
<p className="text-lg text-slate-600 leading-relaxed font-medium">
                        "Este no es un taller genérico. No es una charla motivacional. Es una sesión aplicada para
                        entender si calificas, cómo posicionar tu proyecto y cómo estructurar una ruta real para usar el
                        fondo como palanca de crecimiento."
                    </p>
</div>
<div className="grid gap-4">

<div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-orange-200 transition-colors group">
<div className="w-8 h-8 flex items-center justify-center bg-orange-50 text-orange-500 rounded-lg font-black text-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                            1</div>
<span className="text-sm font-bold text-slate-700">Diagnóstico de admisibilidad (qué sí / qué no / por qué).</span>
</div>
<div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-orange-200 transition-colors group">
<div className="w-8 h-8 flex items-center justify-center bg-orange-50 text-orange-500 rounded-lg font-black text-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                            2</div>
<span className="text-sm font-bold text-slate-700">Estructura de tesis (lo que el evaluador necesita leer).</span>
</div>
<div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-orange-200 transition-colors group">
<div className="w-8 h-8 flex items-center justify-center bg-orange-50 text-orange-500 rounded-lg font-black text-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                            3</div>
<span className="text-sm font-bold text-slate-700">Lista de evidencias mínimas para competir en serio.</span>
</div>
<div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-orange-200 transition-colors group">
<div className="w-8 h-8 flex items-center justify-center bg-orange-50 text-orange-500 rounded-lg font-black text-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                            4</div>
<span className="text-sm font-bold text-slate-700">Ruta de ejecución para usar el subsidio sin volver a cero.</span>
</div>
<div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-orange-200 transition-colors group">
<div className="w-8 h-8 flex items-center justify-center bg-orange-50 text-orange-500 rounded-lg font-black text-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                            5</div>
<span className="text-sm font-bold text-slate-700">Errores típicos que hacen perder por etapa incorrecta o incoherencia.</span>
</div>
<div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-orange-200 transition-colors group">
<div className="w-8 h-8 flex items-center justify-center bg-orange-50 text-orange-500 rounded-lg font-black text-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                            6</div>
<span className="text-sm font-bold text-slate-700">Preparación para avanzar con método durante los días previos al cierre.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 relative">
<div className="max-w-7xl mx-auto space-y-16">
<div className="text-center space-y-4">
<h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Tu incentivo por tomar acción
                </h2>
<p className="text-slate-500 font-medium">Entrega garantizada de herramientas listas para implementar.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-gradient-to-br from-orange-200 to-transparent p-[1px] rounded-[2.5rem] shadow-xl shadow-orange-900/5 h-full">
<div className="bg-white p-10 rounded-[2.4rem] h-full flex flex-col space-y-8">
<div className="flex justify-between items-start">
<div className="p-4 bg-orange-50 rounded-2xl text-orange-500">
<iconify-icon height="32" icon="solar:gift-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="bg-orange-100 text-orange-700 text-[10px] font-black px-3 py-1 rounded-full uppercase border border-orange-200">Al registrarte</span>
</div>
<div className="">
<h3 className="text-3xl font-black mb-2 text-slate-900 tracking-tight">KIT 1: Starter Pack</h3>
<p className="text-slate-500 text-sm font-medium">Se entrega por email inmediatamente al
                                confirmar registro.</p>
</div>
<ul className="space-y-4 flex-grow">
<li className="flex items-center space-x-3 text-sm font-bold text-slate-700">
<iconify-icon className="text-orange-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Checklist de admisibilidad</span>
</li>
<li className="flex items-center space-x-3 text-sm font-bold text-slate-700">
<iconify-icon className="text-orange-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Plantilla de Tesis Semilla Expande</span>
</li>
<li className="flex items-center space-x-3 text-sm font-bold text-slate-700">
<iconify-icon className="text-orange-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Lista de evidencias mínimas</span>
</li>
<li className="flex items-center space-x-3 text-sm font-bold text-slate-700">
<iconify-icon className="text-orange-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Calendario de trabajo hasta el 24 de febrero</span>
</li>
</ul>
</div>
</div>

<div className="bg-gradient-to-br from-peach-200 to-transparent p-[1px] rounded-[2.5rem] shadow-xl shadow-orange-900/5 h-full">
<div className="bg-white p-10 rounded-[2.4rem] h-full flex flex-col space-y-8">
<div className="flex justify-between items-start">
<div className="p-4 bg-orange-50 rounded-2xl text-orange-500">
<iconify-icon height="32" icon="solar:bolt-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="bg-slate-900 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">En Vivo</span>
</div>
<div>
<h3 className="text-3xl font-black mb-2 text-slate-900 tracking-tight">KIT 2: Kit Cierre 24/02
                            </h3>
<p className="text-slate-500 text-sm font-medium">Solo para quienes lleguen al final del evento
                                en Zoom.</p>
</div>
<ul className="space-y-4 flex-grow">
<li className="flex items-center space-x-3 text-sm font-bold text-slate-700">
<iconify-icon className="text-orange-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Guion para video estructurado</span>
</li>
<li className="flex items-center space-x-3 text-sm font-bold text-slate-700">
<iconify-icon className="text-orange-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Matriz de evaluación + errores típicos</span>
</li>
<li className="flex items-center space-x-3 text-sm font-bold text-slate-700">
<iconify-icon className="text-orange-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Prompt pack para revisar consistencia</span>
</li>
<li className="flex items-center space-x-3 text-sm font-bold text-slate-700">
<iconify-icon className="text-orange-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Plan de acciones de cierre</span>
</li>
</ul>
</div>
</div>
</div>
<div className="max-w-xl mx-auto text-center space-y-8">
<div className="bg-red-50 border border-red-100 p-4 rounded-xl">
<p className="text-red-600 text-sm font-black uppercase tracking-tight">
                        ⚠️ El Kit 2 no se envía por email. Solo se entrega en vivo a quienes permanezcan conectados.
                    </p>
</div>
<button className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 transform active:scale-95" onclick="openModal()">
                    RESERVAR CUPO + KIT 1
                </button>
</div>
</div>
</section>

<section className="py-24 px-4 bg-slate-50 border-y border-slate-100">
<div className="max-w-5xl mx-auto space-y-12">
<div className="text-center space-y-4">
<h2 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 tracking-tight">El verdadero
                    problema:  <span className="text-slate-500 italic">postular en modo lineal y fragmentado</span></h2>
</div>
<p className="text-lg text-slate-600 text-center max-w-3xl mx-auto italic font-medium">
                "El ecosistema empuja a muchos emprendedores a una mala decisión: creer que la postulación es un trámite
                de redacción. El resultado suele ser el mismo: documentos y tareas… pero sin una empresa preparada para
                ejecutar crecimiento."
            </p>
<div className="grid md:grid-cols-2 gap-8">
<div className="p-8 bg-white rounded-3xl border border-red-100 shadow-sm space-y-4">
<h4 className="text-xl font-black text-red-600">A) El enfoque "formulario primero"</h4>
<ul className="space-y-2 text-slate-500 text-sm font-bold">
<li>• Se centra en texto y formato.</li>
<li>• No integra evidencia, métricas ni validación comercial.</li>
<li>• Deja a la empresa expuesta a perder tiempo y caja.</li>
</ul>
</div>
<div className="p-8 bg-white rounded-3xl border border-red-100 shadow-sm space-y-4">
<h4 className="text-xl font-black text-red-600">B) El enfoque "programa genérico"</h4>
<ul className="space-y-2 text-slate-500 text-sm font-bold">
<li>• Entrega teoría y workshops sin un sistema operativo.</li>
<li>• La startup queda con conocimiento, pero sin resultados medibles.</li>
<li>• Sin estructura de ejecución post-subsidio.</li>
</ul>
</div>
</div>
<div className="text-center pt-8 space-y-4">
<p className="text-xl font-black text-slate-900">Esto no se arregla escribiendo mejor. Se arregla ejecutando
                    mejor, con un método.</p>
</div>
</div>
</section>

<section className="py-24 px-4 relative overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="bg-gradient-to-br from-orange-400 to-peach-500 p-[1px] rounded-[3rem] shadow-2xl shadow-orange-900/10">
<div className="bg-white p-8 md:p-20 rounded-[2.9rem] flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-8">
<h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">La solución: ciclos
                            iterativos cortos que conectan todo</h2>
<p className="text-lg text-slate-600 leading-relaxed font-medium">
                            "MIFA opera con ciclos iterativos cortos para conectar lo que casi siempre está separado. En
                            paralelo trabajamos: admisibilidad real, tesis y evidencia, ejecución comercial, y uso
                            inteligente del subsidio con control."
                        </p>
<div className="space-y-4">

<div className="flex items-center space-x-3 text-slate-700">
<div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-black text-orange-600 shrink-0">
                                    1</div>
<span className="text-sm font-bold">Admisibilidad real: definir etapa correcta y condiciones mínimas.</span>
</div>
<div className="flex items-center space-x-3 text-slate-700">
<div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-black text-orange-600 shrink-0">
                                    2</div>
<span className="text-sm font-bold">Tesis + evidencia: narrativa alineada a evaluación, sustentada con pruebas.</span>
</div>
<div className="flex items-center space-x-3 text-slate-700">
<div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-black text-orange-600 shrink-0">
                                    3</div>
<span className="text-sm font-bold">Ejecución comercial: foco en ventas/marketing con medición.</span>
</div>
<div className="flex items-center space-x-3 text-slate-700">
<div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-black text-orange-600 shrink-0">
                                    4</div>
<span className="text-sm font-bold">Uso del fondo con estrategia: financiar lo que acelera.</span>
</div>
<div className="flex items-center space-x-3 text-slate-700">
<div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-black text-orange-600 shrink-0">
                                    5</div>
<span className="text-sm font-bold">Control y orden: evitar ejecución caótica que termina en errores.</span>
</div>
</div>
<p className="text-xl font-black text-orange-600 italic pt-4">"El objetivo no es 'ganar un fondo'.
                            El objetivo es construir una empresa que crezca con ese fondo."</p>
</div>
<div className="flex-1 w-full aspect-square max-w-md bg-orange-50 rounded-full flex items-center justify-center relative shadow-inner">
<div className="absolute inset-0 bg-orange-200/20 blur-3xl rounded-full animate-pulse"></div>
<div className="text-center p-8 space-y-4 relative">
<iconify-icon className="text-orange-500 mx-auto text-7xl" icon="solar:bolt-linear"></iconify-icon>
<span className="block text-4xl font-black text-slate-900 tracking-tight">METODO MIFA</span>
<p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-black">Innovación &amp;
                                Financiamiento</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4">
<div className="max-w-3xl mx-auto text-center space-y-8">
<h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Tu objetivo: pasar de "postulación
                común" a "postulación competitiva"</h2>
<div className="p-10 bg-white border border-orange-100 rounded-[2.5rem] space-y-6 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 blur-3xl rounded-full -mr-16 -mt-16"></div>
<p className="text-lg text-slate-600 italic font-medium relative z-10">
                    "Piensa esto como fitness: bajar de 20% a 15% requiere estructura. Bajar de 15% a 10% requiere
                    estrategia y precisión. En este evento te mostramos cómo llegar a ese primer estándar de proyectos
                    serios y admisibles. Y al final, revelamos el diferencial para competir al nivel más alto."
                </p>
<p className="text-xs text-slate-400 uppercase tracking-widest font-black relative z-10">Nota: Marco mental
                    estratégico para startups.</p>
</div>
</div>
</section>

<section className="py-24 px-4 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
<div className="space-y-8 p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 shadow-sm">
<h3 className="text-3xl font-black text-emerald-700 tracking-tight">Este evento es para ti si…</h3>
<ul className="space-y-6">
<li className="flex items-start space-x-4">
<iconify-icon className="text-emerald-600 shrink-0 mt-1 text-2xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-emerald-900 font-bold">Tienes empresa en Chile y quieres usar Semilla Expande como palanca de crecimiento.</span>
</li>
<li className="flex items-start space-x-4">
<iconify-icon className="text-emerald-600 shrink-0 mt-1 text-2xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-emerald-900 font-bold">Ya postulaste antes y te rechazaron, y quieres entender el motivo real.</span>
</li>
<li className="flex items-start space-x-4">
<iconify-icon className="text-emerald-600 shrink-0 mt-1 text-2xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-emerald-900 font-bold">Estás drenando recursos propios y necesitas un plan serio para financiar crecimiento.</span>
</li>
</ul>
</div>
<div className="space-y-8 p-10 bg-rose-50 rounded-[2.5rem] border border-rose-100 shadow-sm">
<h3 className="text-3xl font-black text-rose-700 tracking-tight">No es para ti si…</h3>
<ul className="space-y-6">
<li className="flex items-start space-x-4">
<iconify-icon className="text-rose-600 shrink-0 mt-1 text-2xl" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-rose-900 font-bold">Buscas "dinero gratis" sin ejecutar.</span>
</li>
<li className="flex items-start space-x-4">
<iconify-icon className="text-rose-600 shrink-0 mt-1 text-2xl" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-rose-900 font-bold">Tienes solo una idea y no estás dispuesto a validar y vender.</span>
</li>
<li className="flex items-start space-x-4">
<iconify-icon className="text-rose-600 shrink-0 mt-1 text-2xl" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-rose-900 font-bold">Quieres pagar para que alguien "lo escriba" y tú no ejecutar.</span>
</li>
</ul>
</div>
</div>
<div className="text-center mt-12 space-y-8">
<p className="text-xl font-black text-slate-900 uppercase tracking-tighter italic">"Aquí entran quienes tratan
                su empresa con seriedad."</p>
<button className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 transform active:scale-95" onclick="openModal()">
                RESERVAR CUPO GRATIS + RECIBIR KIT 1
            </button>
</div>
</section>

<section className="py-24 px-4 relative overflow-hidden">
<div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-100/50 blur-[100px] rounded-full -ml-32"></div>
<div className="max-w-7xl mx-auto space-y-16 relative z-10">
<h2 className="text-3xl md:text-5xl font-black text-center text-slate-900 tracking-tight">Agenda del
                entrenamiento (1 día)</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-orange-200 transition-all group shadow-sm">
<span className="text-orange-500 font-black text-4xl opacity-10 mb-4 block group-hover:opacity-100 transition-opacity">01</span>
<h4 className="text-lg font-black mb-4 leading-tight text-slate-900">Admisibilidad sin autoengaño</h4>
<ul className="space-y-2">
<li className="text-xs text-slate-500 flex items-center space-x-2 font-bold">
<div className="w-1 h-1 bg-orange-400 rounded-full"></div>
<span>Perfil de postulación</span>
</li>
<li className="text-xs text-slate-500 flex items-center space-x-2 font-bold">
<div className="w-1 h-1 bg-orange-400 rounded-full"></div>
<span>Errores típicos y cómo evitarlos</span>
</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-orange-200 transition-all group shadow-sm">
<span className="text-orange-500 font-black text-4xl opacity-10 mb-4 block group-hover:opacity-100 transition-opacity">02</span>
<h4 className="text-lg font-black mb-4 leading-tight text-slate-900">Tesis sólida (sin texto bonito)
                    </h4>
<ul className="space-y-2">
<li className="text-xs text-slate-500 flex items-center space-x-2 font-bold">
<div className="w-1 h-1 bg-orange-400 rounded-full"></div>
<span>Estructura de narrativa</span>
</li>
<li className="text-xs text-slate-500 flex items-center space-x-2 font-bold">
<div className="w-1 h-1 bg-orange-400 rounded-full"></div>
<span>Evidencias mínimas</span>
</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-orange-200 transition-all group shadow-sm">
<span className="text-orange-500 font-black text-4xl opacity-10 mb-4 block group-hover:opacity-100 transition-opacity">03</span>
<h4 className="text-lg font-black mb-4 leading-tight text-slate-900">Ruta de ejecución hacia el cierre
                    </h4>
<ul className="space-y-2">
<li className="text-xs text-slate-500 flex items-center space-x-2 font-bold">
<div className="w-1 h-1 bg-orange-400 rounded-full"></div>
<span>Plan de trabajo previo al 24/02</span>
</li>
<li className="text-xs text-slate-500 flex items-center space-x-2 font-bold">
<div className="w-1 h-1 bg-orange-400 rounded-full"></div>
<span>Prioridades y foco</span>
</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-orange-200 transition-all group shadow-sm">
<span className="text-orange-500 font-black text-4xl opacity-10 mb-4 block group-hover:opacity-100 transition-opacity">04</span>
<h4 className="text-lg font-black mb-4 leading-tight text-slate-900">Cierre en vivo (Kit 2 +
                        diferencial)</h4>
<ul className="space-y-2">
<li className="text-xs text-slate-500 flex items-center space-x-2 font-bold">
<div className="w-1 h-1 bg-orange-400 rounded-full"></div>
<span>Entrega del Kit 2</span>
</li>
<li className="text-xs text-slate-500 flex items-center space-x-2 font-bold">
<div className="w-1 h-1 bg-orange-400 rounded-full"></div>
<span>Opción de acompañamiento</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-orange-50/30 border-y border-slate-100">
<div className="max-w-7xl mx-auto bg-white p-8 md:p-16 rounded-[3rem] border border-orange-100 shadow-xl shadow-orange-900/5">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="aspect-square bg-slate-50 rounded-[3rem] relative overflow-hidden flex items-center justify-center border border-slate-100">
<p className="text-slate-400 italic font-bold">[PLACEHOLDER: FOTO MATÍAS]</p>
</div>
<div className="space-y-6">
<h2 className="text-4xl font-black text-slate-900 tracking-tight">SOY Matías Devia</h2>
<p className="text-orange-600 font-black uppercase tracking-widest text-sm">"Fundador del Método de
                        Innovación y Financiamiento Ágil (MIFA) y especialista en financiamiento estratégico para
                        startups."</p>
<ul className="space-y-4 py-6 border-y border-slate-100">
<li className="flex items-center space-x-3 text-slate-700 font-bold">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>+USD 500.000 levantados para clientes</span>
</li>
<li className="flex items-center space-x-3 text-slate-700 font-bold">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>+USD 1.200.000 levantados para empresas propias</span>
</li>
<li className="flex items-center space-x-3 text-slate-700 font-bold">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>12 años | 7 startups | 6 países</span>
</li>
</ul>
<div className="space-y-3">
<p className="text-xs text-slate-400 uppercase font-black">Hitos con empresa y SaaS:</p>
<div className="grid grid-cols-2 gap-4 text-xs">
<div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
<span className="text-orange-600 block font-black mb-1">30 días</span>
                                USD 6.000 con MVP
                            </div>
<div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
<span className="text-orange-600 block font-black mb-1">9 meses</span>
                                USD 100.000 facturados
                            </div>
</div>
</div>
<p className="text-xl font-black text-slate-900 italic pt-4 leading-tight">"Aplicamos MIFA todos los
                        días. No enseñamos teoría: enseñamos ejecución."</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-[#fefaf6]">
<div className="max-w-7xl mx-auto space-y-12">
<h2 className="text-3xl md:text-5xl font-black text-center text-slate-900 tracking-tight">Resultados de clientes
                (prueba social)</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="aspect-video bg-white rounded-3xl flex items-center justify-center border border-slate-100 group cursor-pointer hover:border-orange-300 transition-all shadow-sm">
<div className="text-center space-y-3">
<div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mx-auto text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
<iconify-icon height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<p className="text-xs text-slate-400 italic font-bold">[PLACEHOLDER: Testimonio video 1 (embed)]</p>
</div>
</div>

<div className="aspect-video bg-white rounded-3xl flex items-center justify-center border border-slate-100 group cursor-pointer hover:border-orange-300 transition-all shadow-sm">
<div className="text-center space-y-3">
<div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mx-auto text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
<iconify-icon height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<p className="text-xs text-slate-400 italic font-bold">[PLACEHOLDER: Testimonio video 2 (embed)]</p>
</div>
</div>

<div className="aspect-video bg-white rounded-3xl flex items-center justify-center border border-slate-100 group cursor-pointer hover:border-orange-300 transition-all shadow-sm">
<div className="text-center space-y-3">
<div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mx-auto text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
<iconify-icon height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<p className="text-xs text-slate-400 italic font-bold">[PLACEHOLDER: Testimonio video 3 (embed)]</p>
</div>
</div>
</div>
<div className="text-center space-y-8 pt-8">
<p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">[PLACEHOLDER: Logos de
                    clientes/instituciones]</p>
<p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">[PLACEHOLDER: Reviews tipo
                    tarjetas: "antes/después"]</p>
</div>
</div>
</section>

<section className="py-24 px-4">
<div className="max-w-4xl mx-auto p-12 bg-white rounded-[3rem] border border-orange-100 text-center space-y-10 relative overflow-hidden shadow-2xl shadow-orange-900/5">
<div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
<iconify-icon className="text-orange-500" height="128" icon="solar:bolt-linear" width="128"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Al final: opción para quienes
                quieran postular con acompañamiento + SaaS + IA</h2>
<p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                "Al final del evento abriremos una opción para quienes quieran ejecutar con acompañamiento y además
                probar nuestro SaaS e IA para estructurar, validar consistencia y preparar la postulación con método."
            </p>
<div className="grid md:grid-cols-3 gap-6 text-left max-w-2xl mx-auto">
<div className="text-sm font-black text-slate-700 flex items-center space-x-2">
<iconify-icon className="text-orange-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Acompañamiento para postular con sistema</span>
</div>
<div className="text-sm font-black text-slate-700 flex items-center space-x-2">
<iconify-icon className="text-orange-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Uso del SaaS + IA para ordenar y acelerar</span>
</div>
<div className="text-sm font-black text-slate-700 flex items-center space-x-2">
<iconify-icon className="text-orange-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Enfoque en ejecución responsable</span>
</div>
</div>
<div className="pt-8 opacity-60">
<p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black">[PLACEHOLDER: Capturas SaaS
                    + IA + Precios]</p>
</div>
<button className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 transform active:scale-95" onclick="openModal()">
                RESERVAR MI CUPO GRATIS
            </button>
</div>
</section>

<section className="py-24 px-4 bg-orange-50/50 border-t border-slate-100">
<div className="max-w-3xl mx-auto space-y-12">
<h2 className="text-4xl font-black text-center text-slate-900 tracking-tight">Preguntas Frecuentes</h2>
<div className="space-y-4">
<div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
<h4 className="font-black text-orange-600 mb-2">¿Este evento es solo para Chile?</h4>
<p className="text-sm text-slate-600 font-medium">Sí. Es un entrenamiento aplicado a la ventana actual
                        de Semilla Expande en Chile.</p>
</div>
<div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
<h4 className="font-black text-orange-600 mb-2">¿Es realmente gratuito?</h4>
<p className="text-sm text-slate-600 font-medium">Sí. El acceso al evento es gratuito con registro.</p>
</div>
<div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
<h4 className="font-black text-orange-600 mb-2">¿Cómo recibo los kits?</h4>
<p className="text-sm text-slate-600 font-medium">Kit 1 por email al registrarte. Kit 2 se entrega al
                        final del evento en vivo por Zoom a quienes estén conectados.</p>
</div>
<div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
<h4 className="font-black text-orange-600 mb-2">¿Se grabará?</h4>
<p className="text-sm text-slate-600 font-medium">[PLACEHOLDER: política de grabación]. (Recomendación:
                        El Kit 2 es solo para asistentes en vivo).</p>
</div>
<div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
<h4 className="font-black text-orange-600 mb-2">¿Qué pasa si ya postulé antes y me rechazaron?</h4>
<p className="text-sm text-slate-600 font-medium">Este evento está diseñado para entender causas reales
                        y corregir enfoque/estructura.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 border-t border-slate-100 text-center relative overflow-hidden">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-orange-100/30 to-transparent pointer-events-none">
</div>
<div className="max-w-2xl mx-auto space-y-8 relative z-10">
<h2 className="text-4xl font-black text-slate-900 tracking-tight">No dejes pasar esta ventana.</h2>
<p className="text-slate-600 font-medium text-lg">Postula con un método probado y escala tu startup con
                estrategia real.</p>
<button className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 transform active:scale-95" onclick="openModal()">
                RESERVAR CUPO GRATIS + RECIBIR KIT 1
            </button>
<p className="text-xs text-slate-400 uppercase tracking-widest font-black">"Te enviaremos el Kit 1 por email y
                el acceso por WhatsApp."</p>
</div>
</section>

<footer className="py-12 px-4 border-t border-slate-100 bg-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="space-y-4 text-center md:text-left">

<div className="text-xl font-black tracking-tight text-slate-900 select-none cursor-default mb-2">
                    [LOGO]
                </div>
<p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">
                    [PLACEHOLDER: Nombre empresa / razón social] <br/>
                    [PLACEHOLDER: correo de soporte]
                </p>
</div>
<div className="flex gap-6 text-[10px] uppercase tracking-widest text-slate-500 font-black">
<a className="hover:text-orange-500 transition-colors" href="#">[PLACEHOLDER: Privacidad]</a>
<a className="hover:text-orange-500 transition-colors" href="#">[PLACEHOLDER: Términos]</a>
<a className="hover:text-orange-500 transition-colors" href="#">Contacto</a>
</div>
<div className="text-[10px] text-slate-400 font-black text-center italic">
                Evento independiente. No afiliado oficialmente a Corfo.
            </div>
</div>
</footer>

<div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-xl border-t border-slate-100 z-40">
<button className="w-full bg-orange-500 text-white py-4 rounded-xl font-black shadow-lg shadow-orange-500/20 active:scale-95 transition-transform" onclick="openModal()">
            RESERVAR CUPO GRATIS
        </button>
</div>

<div aria-hidden="true" className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-md hidden transition-opacity duration-300 opacity-0" id="modal-backdrop"></div>

<div className="fixed inset-0 z-50 flex items-center justify-center p-4 hidden pointer-events-none" id="modal-panel">
<div className="relative bg-white border border-slate-100 w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl transform scale-95 opacity-0 transition-all duration-300 pointer-events-auto">

<div className="p-8 md:p-12 space-y-8" id="modal-step-1">
<div className="space-y-2 text-center">
<h3 className="text-3xl font-black text-slate-900 tracking-tight">Reserva tu cupo</h3>
<p className="text-slate-500 text-sm font-medium">Completa tus datos para recibir el Kit 1
                        inmediatamente.</p>
</div>
<form className="space-y-4" onsubmit="handleRegister(event)">
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-2">Tu Nombre Completo</label>
<input className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-xl text-slate-900 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:text-slate-300 text-sm font-bold" placeholder="Ej: Juan Pérez" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-2">Email de trabajo</label>
<input className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-xl text-slate-900 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:text-slate-300 text-sm font-bold" placeholder="tu@empresa.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-2">Región (Chile)</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-xl text-slate-900 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all appearance-none text-sm font-bold">
<option className="bg-white">Metropolitana</option>
<option className="bg-white">Valparaíso</option>
<option className="bg-white">Biobío</option>
<option className="bg-white">Otras regiones</option>
</select>
<div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex items-start space-x-3 pt-4">
<input className="mt-1 accent-orange-500 w-4 h-4 rounded border-slate-300" id="terms" required="" type="checkbox"/>
<label className="text-[10px] text-slate-500 leading-normal font-bold" htmlfor="terms">
                            Acepto recibir materiales del evento y comunicaciones estratégicas sobre Semilla Expande.
                        </label>
</div>
<button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 py-5 rounded-xl font-black text-lg text-white hover:shadow-lg shadow-orange-500/20 transition-all active:scale-95" type="submit">
                        CONFIRMAR REGISTRO
                    </button>
<button className="w-full py-2 text-[10px] uppercase font-black tracking-widest text-slate-300 hover:text-slate-500 transition-colors" onclick="closeModal()" type="button">Cancelar</button>
</form>
</div>

<div className="hidden p-8 md:p-12 space-y-8 text-center" id="modal-step-2">
<div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-sm animate-pulse-slow">
<iconify-icon height="40" icon="solar:check-circle-bold" width="40"></iconify-icon>
</div>
<div className="space-y-2">
<h3 className="text-3xl font-black text-slate-900 tracking-tight">¡Casi listo!</h3>
<p className="text-slate-500 font-bold">Revisa tu email: el <span className="text-orange-600">Kit 1</span>
                        está en camino.</p>
</div>
<div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 space-y-4">
<p className="text-sm font-black text-orange-600 uppercase tracking-widest">Paso Final Obligatorio</p>
<p className="text-sm text-slate-600 leading-relaxed font-bold">Únete al grupo de WhatsApp para recibir
                        el link de Zoom, materiales extra y los recordatorios para no perder el acceso al Kit 2.</p>
<button className="w-full bg-[#25D366] text-white py-4 rounded-xl font-black flex items-center justify-center space-x-3 hover:shadow-lg shadow-emerald-500/20 transition-all active:scale-95" onclick="window.open('https://wa.me/[PLACEHOLDER]', '_blank')">
<iconify-icon height="24" icon="solar:chat-round-dots-bold" width="24"></iconify-icon>
<span>UNIRME AL WHATSAPP</span>
</button>
</div>
<button className="text-[10px] uppercase font-black tracking-widest text-slate-400 hover:text-slate-900 transition-colors" onclick="closeModal()">
                    CERRAR Y VOLVER A LA PÁGINA
                </button>
</div>
</div>
</div>



    </>
  );
}
